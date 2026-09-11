# Editorial Quality Report

Updated: 12 September 2026  
Scope: chapters finalized to date

## Scoring rule

Each chapter is scored from 1 to 5. A chapter cannot be final if any category is below 4. Scores describe the manuscript at the recorded commit, not a promise about later cross-book consistency.

## Chapter 1 — When Production Gets Cheap

Final prose word count: **2,081** (headings and table included; Mermaid source and bibliography excluded)

| Category | Score | Basis |
|---|---:|---|
| Originality | 5 | Converts the original speed intuition into a five-queue moving-constraint argument and distinguishes accountability from workflow |
| Clarity | 5 | Defines output, throughput, outcome, and value; one argument controls the chapter |
| Evidence | 4 | Eight sources resolve every external quantitative claim; organization-level mechanism remains a labeled inference with boundaries |
| Practical usefulness | 4 | Ends with a five-step workflow diagnostic; deeper worksheet is intentionally reserved for Chapter 2/field kit |
| Specificity | 5 | Names queues, costs, authority decisions, evidence requirements, and failure modes |
| Narrative flow | 5 | Illustrative overload → measured change → conflicting productivity evidence → mechanism → objection → Monday action → Chapter 2 |
| Internal consistency | 4 | Consistent with approved architecture; the relationship between five queues and ATOM’s six layers remains a Chapter 4 design check |
| Absence of AI-slop language | 5 | Banned-phrase scan clean; no generic urgency, vendor tone, decorative AI adjectives, or invented executive dialogue |

Quality gate: **PASS**

## Evidence and claim checks

- Eight citation keys resolve against `book/references.bib`.
- The final journal version of *Generative AI at Work* replaces the superseded working-paper sample and estimate.
- The opening is explicitly labeled **ILLUSTRATIVE EXAMPLE**.
- The five-queue mechanism is treated as author inference; the total-cost expression is labeled a checklist, not an accounting standard.
- Headcount forecasts, displacement claims, universal productivity coefficients, and job-automation claims are excluded.
- All current external claims appear in `docs/research/sources.md` with limitations.

## Style and consistency checks

- No occurrences of the banned phrases listed in the editorial brief.
- No “AI-powered,” “AI-driven,” or “AI-native” in the chapter.
- Controlled terms match `docs/editorial/terminology.md`.
- ATOM is not prematurely defined; Decision 0004 records the rationale.
- Hidden Operational Debt appears only as the transition to Chapter 2.

## Publishing checks

Toolchain: Quarto 1.10.18 portable build. The host runs macOS 12, so local rendering used Dart Sass 1.69.5 as a compatibility override. GitHub Actions will run on Linux and should use Quarto’s bundled runtime.

| Check | Result | Evidence |
|---|---|---|
| HTML build | PASS | `_build/index.html` and chapter page generated |
| Desktop render | PASS | 1440×1000; title, navigation, table, citations, and Mermaid SVG present |
| Mobile render | PASS | 390×844; readable single-column layout with no clipping |
| Page identity | PASS | HTTP 200; correct chapter title and URL |
| Runtime errors | PASS WITH NOTE | No page errors or framework overlay; the temporary server returned only a harmless missing `favicon.ico` request |
| Interaction | PASS | In-page “The constraint moves” navigation changed the URL fragment and reached the section |
| EPUB build | PASS | Archive generated; ZIP integrity check reports no errors; chapter content present |
| PDF build | PASS | Native Quarto Typst PDF generated after restoring the author metadata from the source PDF |
| PDF visual QA | PASS | Thirteen pages rendered to PNG; cover, contents, chapter, diagram, table, and bibliography inspected |
| Diagram portability | PASS AFTER REVISION | Horizontal Mermaid diagram clipped in PDF; changed to a vertical version and re-rendered without clipping |

Browser note: the in-app Browser skill was available but its required control runtime was not exposed. The permitted Playwright fallback (Google Chrome) performed the desktop/mobile checks.

The proof PDF contains print-book recto blanks and a sparse home-page spread because only Chapter 1 exists. These are expected interim-book effects, not approved final pagination; the full-book design gate will revisit front matter, page economy, and blank-page policy.

## Open editorial questions

1. In Chapter 4, should the five queues become a recurring diagnostic overlay on ATOM, or remain only a pre-ATOM teaching device?
2. Does the author want the first-person sentence “What I believed in 2025…” retained verbatim, or made more impersonal in the final voice pass?
3. Should the opening product example remain the book’s first scene, or be replaced later by a verified author-experience case with the same mechanism?

None blocks Chapter 1. They are cross-book or author-voice decisions with explicit downstream owners.
