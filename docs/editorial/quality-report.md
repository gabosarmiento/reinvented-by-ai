# Editorial Quality Report

Updated: 29 September 2026
Scope: Chapters 1–18 editorial checkpoints; final production status is tracked separately

## Scoring rule

Each chapter is scored from 1 to 5. A chapter cannot be final if any category is below 4. Scores describe the manuscript at the recorded commit, not a promise about later cross-book consistency.

## Chapter 1 — When Production Gets Cheap

Final prose word count: **2,544** (headings and table included; Mermaid source and bibliography excluded)

| Category | Score | Basis |
|---|---:|---|
| Originality | 5 | Connects the moving-constraint argument to the founder-COO becoming the company’s integration layer and distinguishes accountability from workflow |
| Clarity | 5 | Defines output, throughput, outcome, and value; one argument controls the chapter |
| Evidence | 4 | Nine sources resolve every external claim; the organization-level mechanism and extension from prediction to agent execution remain labeled inferences with boundaries |
| Practical usefulness | 5 | Ends with a five-step test for delegating a real decision without silently taking it back |
| Specificity | 5 | Names queues, costs, business-unit tradeoffs, authority decisions, evidence requirements, and failure modes |
| Narrative flow | 5 | Founder-COO dependency → measured change → decision economics → conflicting productivity evidence → mechanism → objection → Monday action → Chapter 2 |
| Internal consistency | 4 | Consistent with approved architecture; the relationship between five queues and ATOM’s six layers remains a Chapter 4 design check |
| Absence of AI-slop language | 5 | Banned-phrase scan clean; no generic urgency, vendor tone, decorative AI adjectives, or invented executive dialogue |

Quality gate: **PASS**

## Evidence and claim checks

- Ten citation keys resolve against `book/references.bib`.
- Gans’s book supports the prediction, decision, complements, automation, and system-effects frame. The manuscript’s extension to authority, evidence, and recovery for tool-using agents is explicitly its own inference.
- The 2025 customer-support study was removed from the current evidence base because its field data were collected in 2020–2021, outside the requested two-year window.
- Added the 2026 pooled developer field experiments and preserved their noisy, varying estimates and task-completion outcome limits.
- Added the August 2026 inference-price preprint as preliminary evidence; it explicitly does not establish a per-task price decline over its short observation window.
- The early-2025 METR result remains as a bounded counterexample, paired with the February 2026 update on selection and measurement limitations.
- Stanford’s 2026 AI adoption figures now distinguish overall organizational adoption, generative AI use, and agent deployment.

## Chapter 2 — Hidden Operational Debt

- Editorial and evidence checkpoint: 29 September 2026.
- The six-category taxonomy is presented as an author-developed diagnostic lens; evidence for organizational debt remains limited.
- The debt register distinguishes design gap from recurring work/exposure and avoids implying a financial valuation.
- Vendor practice examples are explicitly separated from independent impact evidence.
- Final author-experience case and production gate remain open (see `tasks/ch02/review.md`).

## Chapter 3 — Why Tools Do Not Change the Operating Model

- Editorial and evidence checkpoint: 29 September 2026.
- Updated the Microsoft field study to the November 2025 NBER revision, with the frequent-user and intent-to-treat estimates identified separately.
- Kept the interpretation narrow to one integrated office assistant and six months; individual access alone did not detectably shift task quantity/composition or meeting time in that study.
- Final production checks have not been run; see `tasks/ch03/review.md`.

## Chapter 4 — ATOM: Intent In, Evidence Out

- Editorial checkpoint: 29 September 2026.
- The architecture is explicitly framed as this book's proposal, not an established or validated model.
- Removed a duplicate Playbook definition, labeled the refund scenario illustrative, and bounded generalization to other decisions.
- Final diagram, links, terminology, and multi-format checks have not been run; see `tasks/ch04/review.md`.

## Chapter 5 — Context Is Infrastructure

- Editorial and source checkpoint: 29 September 2026.
- Distinguished first-party engineering guidance, voluntary risk guidance, and proposed operating practice; bounded prompt-injection protections as risk reduction, not elimination.
- Added data access/retention instruction and required owner validation of context boundaries.
- Final terminology, source-link, access-policy, and multi-format checks have not been run; see `tasks/ch05/review.md`.

## Chapters 6–13 — Decision design, execution, control, evidence, and first loop

- Editorial/source checkpoint: 29 September 2026.
- Chapters 6–7 bound proposed decision-rights and autonomy frameworks and separate first-party vendor guidance from impact evidence.
- Chapter 8 remains an explicitly fictional composite; its claims of universal current-tool feasibility were replaced with conditional language. Per-action capability checks are still required before production.
- Chapter 9's MCP reference and AI Act schedule were updated against the 2026-07-28 protocol release and current European Commission page after the July 2026 amendments.
- Chapter 10 distinguishes product telemetry from business-outcome evidence.
- Chapters 11–13 present pilot selection, a 30-day build sequence, and value review as proposed practices, not validated universal methods. Shadow mode limitations and the evidentiary limits of causal comparisons remain explicit.
- Finalization, source link checks, glossary/terminology checks, diagram review, and HTML/EPUB/PDF rendering have not been completed for these chapters.
- The opening is explicitly labeled **ILLUSTRATIVE COMPOSITE** and does not imply a real company case.
- The five-queue mechanism is treated as author inference; the total-cost expression is labeled a checklist, not an accounting standard.
- Headcount forecasts, displacement claims, universal productivity coefficients, and job-automation claims are excluded.
- All current external claims appear in `docs/research/sources.md` with limitations.

## Style and consistency checks

## Chapters 14–18 — Scale, agent operations, management, and accountability

- Editorial/evidence checkpoint: 29 September 2026.
- Chapter 14 frames Fractal Unit as a proposed term, adds bounded recent team-boundary evidence, and explicitly notes overlap with existing operating models. A substantive comparison remains an editorial release condition.
- Chapter 15 adds recent OECD employer-survey evidence only to motivate reviewable workforce allocation; it does not claim talent-marketplace or portfolio-ranking efficacy.
- Chapter 16 cites current NIST agent identity work and OWASP 2025 threat taxonomy, clearly as guidance rather than proof of control effectiveness. The incident scenario is illustrative.
- Chapter 17 uses recent randomized evidence on work patterns and team collaboration while stating these studies do not validate a management structure or role redesign. Removed unsupported headcount thresholds.
- Chapter 18 updates AI Act oversight wording and the post-Omnibus timeline against current Commission material; legal scope/sign-off remains open.
- Final legal/security review, link and worksheet checks, consistency pass, and multi-format rendering remain incomplete; see chapter review notes.

## Style and consistency checks

- No occurrences of the banned phrases listed in the editorial brief.
- No “AI-powered,” “AI-driven,” or “AI-native” in the chapter.
- Controlled terms match `docs/editorial/terminology.md`.
- ATOM is not prematurely defined; Decision 0004 records the rationale.
- No public edition history or abandoned-draft narrative remains in the chapter. Decision 0006 records the editorial boundary.
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
2. Should the founder-COO composite eventually be replaced by a verified author-experience case, or remain as the cleanest statement of the target reader’s problem?
3. The MIT Press Direct interface blocked automated access to the full text of Gans’s open-access book. The verified publisher summary and official contents support the Chapter 1 use, but Chapters 3, 6, 7, and 13 should not draw deeper claims until the relevant full chapters have been reviewed.

None blocks Chapter 1. They have explicit downstream owners.
