#!/usr/bin/env node

import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { pathToFileURL } from "node:url";

const [inputHtml, outputPng] = process.argv.slice(2);

if (!inputHtml || !outputPng) {
  console.error("Usage: export-archify-image.mjs <input.html> <output.png>");
  process.exit(2);
}

const archifyBrowserModule = path.join(
  os.homedir(),
  ".codex",
  "skills",
  "archify",
  "bin",
  "visual-check.mjs",
);

if (!fs.existsSync(archifyBrowserModule)) {
  console.error(`Archify browser runtime not found: ${archifyBrowserModule}`);
  process.exit(2);
}

const { ChromeVisualBrowser, findChrome } = await import(pathToFileURL(archifyBrowserModule));
const chromePath = findChrome();

if (!chromePath) {
  console.error("Chrome or Chromium is required to export Archify images.");
  process.exit(2);
}

const input = path.resolve(inputHtml);
const output = path.resolve(outputPng);
const downloadDir = fs.mkdtempSync(path.join(os.tmpdir(), "archify-export-"));
const browser = new ChromeVisualBrowser(chromePath);

function delay(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

try {
  const sessionId = await browser.sessionPromise;
  await browser.cdp.send("Browser.setDownloadBehavior", {
    behavior: "allow",
    downloadPath: downloadDir,
    eventsEnabled: true,
  });

  const url = new URL(pathToFileURL(input).href);
  url.searchParams.set("theme", "light");
  const loaded = browser.cdp.waitFor("Page.loadEventFired", sessionId);
  const navigation = await browser.cdp.send("Page.navigate", { url: url.href }, sessionId);
  if (navigation.errorText) throw new Error(`Chrome navigation failed: ${navigation.errorText}`);
  await loaded;

  const response = await browser.cdp.send("Runtime.evaluate", {
    expression: `(async function () {
      document.documentElement.setAttribute('data-theme', 'light');
      document.documentElement.setAttribute('data-motion', 'still');
      if (document.fonts && document.fonts.ready) await document.fonts.ready;
      if (!window.Archify || !Archify.exportMenu) throw new Error('Archify export runtime unavailable');
      await Archify.exportMenu.run('png');
      return {
        format: document.documentElement.getAttribute('data-last-export-format'),
        bytes: document.documentElement.getAttribute('data-last-export-bytes'),
        canonical: document.documentElement.getAttribute('data-last-export-canonical')
      };
    })()`,
    awaitPromise: true,
    returnByValue: true,
  }, sessionId, 30000);

  if (response.exceptionDetails) {
    throw new Error(response.exceptionDetails.exception?.description || "Archify export failed");
  }

  const receipt = response.result?.value;
  if (receipt?.format !== "png" || receipt?.canonical !== "true") {
    throw new Error(`Archify returned an invalid export receipt: ${JSON.stringify(receipt)}`);
  }

  let exported;
  for (let attempt = 0; attempt < 40; attempt += 1) {
    const files = fs.readdirSync(downloadDir);
    exported = files.find((file) => file.endsWith(".png"));
    const partial = files.some((file) => file.endsWith(".crdownload"));
    if (exported && !partial) break;
    await delay(125);
  }

  if (!exported) throw new Error("Archify did not produce a PNG download.");
  fs.mkdirSync(path.dirname(output), { recursive: true });
  fs.copyFileSync(path.join(downloadDir, exported), output);

  const actualBytes = fs.statSync(output).size;
  if (Number(receipt.bytes) !== actualBytes) {
    throw new Error(`Export byte mismatch: receipt ${receipt.bytes}, file ${actualBytes}`);
  }

  // Archify exports an RGBA PNG. Typst and some PDF renderers can composite
  // that transparent canvas as black, so flatten the verified export onto
  // white and store an RGB PNG for print.
  const printSafeOutput = `${output}.print-safe.png`;
  const flattened = spawnSync("magick", [
    output,
    "-background", "white",
    "-alpha", "remove",
    "-alpha", "off",
    `PNG24:${printSafeOutput}`,
  ], { encoding: "utf8" });
  if (flattened.status !== 0) {
    throw new Error(`ImageMagick failed to create the print-safe export: ${flattened.stderr}`);
  }
  fs.renameSync(printSafeOutput, output);
  const printBytes = fs.statSync(output).size;

  console.log(JSON.stringify({
    input,
    output,
    format: receipt.format,
    canonicalSource: true,
    canonicalSourceBytes: actualBytes,
    printSafeRgb: true,
    bytes: printBytes,
  }));
} finally {
  await browser.close();
  fs.rmSync(downloadDir, { recursive: true, force: true });
}
