# The Adaptive Company: Master Publishing Plan

Status: Gate 0 approved; Chapter 1 in author review.
Working title: *The Adaptive Company: A Practical Operating System for Human-Agent Work*  
Publishing system: Quarto, subject to an early proof build  
Planning date: 11 September 2026

## Outcome

Create a publicly credible, evidence-aware, practical book that turns the early ATOM consulting concept into a coherent operating-model hypothesis readers can understand, test, and implement.

Final outputs:

- one clean Quarto/Markdown manuscript;
- a responsive, searchable GitHub Pages book;
- a validated EPUB;
- a visually verified PDF if the proof build and dependencies meet quality standards;
- references, diagrams, and downloadable field resources;
- a transparent Git history, research ledger, editorial record, quality report, and change log.

## Gate 0 — Approve the editorial design

No chapter prose will be drafted until the author approves or revises:

1. the primary reader, a founder-COO or equivalent scaling a company from roughly 40 to 200 people;
2. the recommended title and promise;
3. the provisional definition and canonical architecture of ATOM;
4. the eighteen-chapter structure;
5. the disposition of Synthesizer, Fractal Unit, Agent Operations, and Hidden Operational Debt;
6. the removal of Elements/Compounds, vendor catalogues, invented numbers, and the consulting sales funnel;
7. the treatment of source drafts as internal research material rather than part of the public narrative.

Gate 0 artifacts:

- `docs/editorial/original-book-analysis.md`
- `docs/editorial/audience-and-positioning.md`
- `docs/editorial/second-edition-outline.md`
- `docs/editorial/repository-structure.md`
- `docs/research/sources.md`
- `tasks/ch01/` through `tasks/ch18/`

## Non-negotiable editorial principles

### Thesis before trend

Technology appears only when it changes the operating-model argument. There is no “state of AI” chapter.

### Mechanism before claim

Every major assertion must identify what changes, who decides, what information is used, what authority exists, what evidence returns, and what can fail.

### Authority before autonomy

An agent is not “autonomous” in the abstract. It receives bounded authority for a task or decision under permissions, policies, approvals, evidence requirements, and escalation.

### Evidence before confidence

Numbers, named companies, technical capabilities, regulatory requirements, and historical comparisons require sources. Unsupported material is removed, labeled illustrative, or framed as an author hypothesis.

### Author experience before generic expertise

The model needs the author’s real operating experience. During drafting, every chapter identifies where an anonymized author case, observed failure, or hard-earned tradeoff is required. The writer will not invent these.

### Stable terms before new terms

ATOM will use a controlled glossary. A coined term survives only when it carries a distinct mechanism or decision right.

### Practical artifacts are part of the argument

Worksheets are not end-of-book decoration. Chapters introduce and use them on concrete examples.

## Canonical model to test

ATOM is provisionally defined as:

> An operating-model pattern for organizations in which humans and software agents co-produce outcomes. It connects strategic intent to bounded decisions and execution, captures evidence from the work, and uses that evidence to improve context, policy, and capability. It does not prescribe a vendor stack, eliminate hierarchy, or automate accountability.

Architecture:

1. **Intent** — outcomes, priorities, and risk appetite.
2. **Context** — authorized data, memory, policy, state, and provenance.
3. **Decisions** — owners, criteria, thresholds, rights, and recourse.
4. **Execution** — humans, agents, deterministic software, tools, and units.
5. **Evidence** — traces, outputs, cost, outcomes, approvals, and exceptions.
6. **Learning** — evaluation, incident review, and controlled change.

One cross-cutting **control plane** applies identity, permissions, guardrails, approvals, escalation, and audit.

Memory rule: **intent enters; evidence returns**.

This model is a hypothesis. Drafting must attempt to falsify or refine it.

## Workstreams

### A. Author knowledge recovery

Goal: distinguish the author’s experienced thesis from generated scaffolding.

Activities:

- conduct structured interviews around operating-model failures, transformations, leadership, governance, and scaling;
- collect relevant notes, talks, client artifacts, diagrams, and prior writing;
- create an author-experience register with permissions and anonymization status;
- identify three to five moments when the author changed his mind;
- require specific events, decisions, constraints, and outcomes—not retrospective slogans.

Output: `docs/research/author-experience-register.md` and interview notes excluded from publication unless approved.

### B. Research and evidence

Goal: substantiate important claims and expose uncertainty.

Research clusters:

1. economics and productivity of cognitive/software work;
2. agents, tool use, workflows, context, and memory;
3. decision rights, human factors, and automation bias;
4. identity, permissions, policy, guardrails, and approvals;
5. agent evaluation, telemetry, audit, incidents, and proof of work;
6. organization design, stable teams, dynamic allocation, and fractal structures;
7. management, accountability, labor, privacy, and regulation;
8. Quarto, accessibility, EPUB, PDF, and GitHub Pages.

Process:

- add a claim to the ledger before drafting it as fact;
- capture the original source, not an SEO summary;
- record date, population, task, sample, measurement, limitations, and conflicts;
- add BibTeX only after source verification;
- revisit temporally unstable sources during the final evidence pass.

Outputs: `docs/research/sources.md`, `docs/research/claims.csv`, `docs/research/case-study-register.md`, and `book/references.bib`.

### C. Model development

Goal: make ATOM coherent enough to draw, challenge, and use.

Open questions:

- Is “fractal” the right word, and exactly what recurs at each scale?
- Is Synthesizer a role, an accountability, or a temporary transition function?
- Which controls are centralized, federated, or local?
- How does ATOM handle stable, regulated, physical, or safety-critical work?
- How are policy changes separated from model or prompt changes?
- What counts as proof that the loop learned rather than drifted?
- When should a company deliberately choose slower decisions?
- What would disconfirm ATOM’s value?

Outputs: architecture, glossary, decision records, counterexamples, and maturity model.

### D. Chapter production

Goal: produce chapters through small, auditable stages.

Every chapter follows:

1. audit;
2. research;
3. argument map;
4. first draft;
5. evidence pass;
6. style pass;
7. adversarial editorial review;
8. finalize.

No stage is silently skipped. Task files define the chapter-specific questions and acceptance criteria.

### E. Resources and diagrams

Goal: turn the theory into usable Monday-morning artifacts.

Priority resources for the first complete edition:

- ATOM architecture one-pager;
- operational-debt diagnostic/register;
- decision-rights and autonomy matrices;
- context envelope;
- guardrail/approval template;
- pilot selection worksheet;
- evidence and observability scorecards;
- human/agent responsibility map;
- Fractal Unit contract;
- Agent Operations registry;
- maturity model;
- 30-day checklist and 90-day roadmap.

Diagram rules:

- Mermaid first;
- one controlled vocabulary;
- explanatory, not decorative;
- accessible alt text and captions;
- verified in HTML, EPUB, PDF, mobile width, and grayscale.

### F. Publishing engineering

Goal: make one source reliably generate all public formats.

Steps:

1. install and pin Quarto for local/CI use;
2. create a minimal proof book with citations, footnotes, cross-references, Mermaid, tables, callouts, and one worksheet;
3. render HTML, EPUB, and Typst PDF;
4. validate navigation, search, light/dark themes, accessibility, EPUB, and rendered PDF pages;
5. decide Typst versus LaTeX from evidence;
6. configure metadata, canonical URL, author page, and downloads;
7. add validation and publish workflows;
8. publish to `gh-pages` on pushes to `main` after all checks pass;
9. document local build, release, rollback, and Pages setup.

## Delivery phases and gates

### Phase 0 — Editorial architecture

Status: current phase.

Deliverables:

- complete v2/v4 audit;
- audience and positioning;
- book outline;
- publishing/repository plan;
- initial research ledger;
- chapter task scaffold.

Gate: author approves the major decisions. Then and only then begin model research and chapter work.

Suggested commits:

- `editorial: audit original manuscript and prototype`
- `editorial: define audience and positioning`
- `outline: design the ATOM book structure`
- `planning: add publishing plan and chapter task scaffold`

### Phase 1 — Foundation and proof build

Deliverables:

- repository metadata and contribution policy;
- Quarto skeleton and pinned CI toolchain;
- style guide and controlled terminology;
- canonical diagram v1;
- multi-format proof build;
- author-experience and case registers;
- bibliography/claim schema.

Gate:

- HTML, EPUB, and PDF proof render successfully;
- canonical model is legible and internally coherent;
- no licensing or source-redistribution ambiguity blocks publication;
- author has supplied enough lived material for Chapters 2, 12, and 17.

Suggested commits:

- `publishing: create Quarto proof book`
- `editorial: define voice and terminology`
- `model: define canonical ATOM architecture`
- `research: add claim and case registers`

### Phase 2 — Part I: establish the need

Chapters: 1–3.

Gate:

- the argument does not depend on acceleration rhetoric;
- contradictory productivity findings are represented fairly;
- Hidden Operational Debt has a usable definition and diagnostic;
- ATOM is not named as the answer until the problem is demonstrated.

Suggested commits follow each stage, for example:

- `chapter-01: audit and argument map`
- `chapter-01: draft moving-constraint argument`
- `chapter-01: evidence and editorial pass`
- `chapter-01: finalize`

### Phase 3 — Part II: define the model

Chapters: 4–7.

Gate:

- a test reader can draw the six layers and control plane from memory;
- each layer has inputs, outputs, owners, failure modes, and measures;
- autonomy is defined as delegated authority, not model capability;
- Synthesizer and Fractal Unit have precise boundaries or are removed.

### Phase 4 — Part III: show it operating

Chapters: 8–10.

Gate:

- the composite scenario is labeled and technically feasible;
- it includes failure, uncertainty, intervention, and rejected AI advice;
- governance events and evidence can be reconstructed;
- learning changes the correct artifact under named authority.

### Phase 5 — Part IV: build the first loop

Chapters: 11–13 plus first resource set.

Gate:

- a reader can select, design, run, and judge a pilot using the supplied artifacts;
- the roadmap specifies exit criteria, not promised results;
- total cost and risk-adjusted value are included;
- stopping a pilot is treated as a valid outcome.

### Phase 6 — Parts V and VI: scale, control, lead

Chapters: 14–18 plus remaining resources.

Gate:

- Fractal Units do not depend on constant re-teaming;
- talent allocation includes consent, bias, cohesion, and appeal;
- Agent Operations has clear interfaces with business, platform, security, risk, legal, and audit;
- accountability remains named at every delegation layer;
- the conclusion does not become a consulting pitch.

### Phase 7 — Cross-book edit

Passes:

1. thesis and architecture;
2. structural repetition;
3. evidence and case labels;
4. author voice and experience;
5. terminology and cross-references;
6. line edit and AI-slop removal;
7. sensitivity, privacy, accessibility, and legal-risk review;
8. external skeptical-reader review.

Gate: every chapter meets the quality standard and all cross-book checks pass.

### Phase 8 — Publication candidate

Deliverables:

- release-candidate HTML, EPUB, and PDF;
- complete references and downloadable resources;
- README, CONTRIBUTING, LICENSE, author page, and CHANGELOG;
- GitHub Actions validation and Pages deployment;
- release notes and checksums.

Gate:

- desktop and mobile reading QA passes;
- EPUB validates and is tested in at least two readers;
- every PDF page is rendered to an image and visually inspected;
- links, citations, references, diagrams, navigation, metadata, and downloads work;
- no draft notes, prompt residue, placeholders, unsupported claims, or unlicensed assets remain.

## Chapter quality gate

Score each category 1–5:

| Category | A score of 4 means |
|---|---|
| Originality | The chapter advances the ATOM thesis rather than summarizing common AI advice. |
| Clarity | A skeptical operating leader can restate the argument and terms. |
| Evidence | Material factual claims are sourced, qualified, or explicitly labeled. |
| Practical usefulness | The chapter changes a decision or produces a usable artifact. |
| Specificity | Mechanisms, owners, inputs, controls, outputs, and failure modes are concrete. |
| Narrative flow | Each section earns the next and the chapter advances the book. |
| Internal consistency | Terms and claims match the canonical model and other chapters. |
| Absence of AI-slop | No generic urgency, inflated claims, formulaic padding, or fake precision. |

Rule: no chapter is final if any score is below 4. A reviewer must explain every 5 with evidence; perfect scores are not a target.

## Cross-book validation

Maintain automated or checklist-based checks for:

- canonical names and capitalization;
- glossary terms defined once;
- duplicate explanations and examples;
- contradictions and changed assumptions;
- timelines and temporally unstable facts;
- claim IDs and bibliography keys;
- case labels;
- figure IDs, captions, alt text, and cross-references;
- resource links and download formats;
- prohibited filler phrases;
- orphan notes, TODOs, bracketed placeholders, and generation residue.

Output: `docs/editorial/quality-report.md` updated at each part gate and finalized before release.

## Version-control policy

- `main` contains reviewed source, research, and editorial history.
- Work in small commits tied to a stage and chapter.
- Do not mix publishing changes with prose unless required for that chapter’s rendering.
- Do not commit `_book/`, caches, or temporary render files to `main`.
- Use annotated tags for public releases: `v2.0.0-rc.1`, then `v2.0.0`.
- Publish builds from a pinned toolchain and record the Quarto version in release notes.
- Use pull requests or equivalent review even for a single-author repository once drafting begins.

Commit vocabulary:

- `editorial:` diagnosis, positioning, style, terminology, quality;
- `research:` sources, claims, cases, evidence;
- `model:` ATOM architecture and decision records;
- `outline:` book structure;
- `chapter-NN:` chapter stage;
- `resources:` worksheets and templates;
- `publishing:` Quarto, styles, CI, deployment;
- `release:` release candidate and public edition.

## Major risks and mitigations

| Risk | Consequence | Mitigation |
|---|---|---|
| ATOM remains a set of renamed best practices | Book is generic | Six-layer model, explicit boundaries, inheritance comparison, counterexamples. |
| AI-generated prose erases the author | No authentic authority | Structured author interviews and author-experience register before relevant drafts. |
| Evidence becomes a trend dump | Thesis disappears | Research only where it changes a mechanism, boundary, or recommendation. |
| Real cases are actually vendor claims | Credibility damage | Case register with source type and labels. |
| “Fractal” is decorative | Confusing model | Define recurring contract and test against examples; remove term if it fails. |
| Governance becomes abstract compliance | No Monday utility | Express controls as permissions, policies, approvals, evidence, escalation, and owners. |
| Dynamic talent becomes surveillance | Ethical and legal harm | Consent, minimization, bias review, appeal, cohesion, and labor-context requirements. |
| The book dates quickly | Short shelf life | Durable mechanisms in prose; volatile tools in cited notes/examples; final currency pass. |
| Three formats diverge | Maintenance burden | One `.qmd` source and automated multi-format build. |
| PDF delays publication | Missing deliverable | Early Typst proof; documented fallback to LaTeX; release HTML/EPUB only if PDF fails the explicit feasibility gate. |
| Editorial transparency exposes private material | Confidentiality breach | Public/private content review; anonymization and permission register; source PDFs archived only with approval. |

## Decisions required from the author at Gate 0

1. Approve or revise the primary reader: accountable operating executive in an established knowledge-work company.
2. Approve the recommended title or choose an alternative.
3. Approve the six-layer architecture and “intent enters; evidence returns” rule as the model to test.
4. Confirm whether **Synthesizer** and **Fractal Unit** are important author terms worth developing.
5. Confirm removal of **Elements and Compounds** unless you can supply a concrete mechanism or case.
6. Confirm that the public book should not end with a consulting sales pitch.
7. Decide whether v2 and v4 may eventually be redistributed in the public repository or should be represented only by analysis and checksums.
8. Choose content and code licenses before public deployment.

## Definition of done

The project is complete only when:

- [ ] the revised manuscript is complete and passes every chapter gate;
- [ ] the canonical ATOM model is consistent and drawable from memory;
- [ ] factual claims and real cases are traceable to the research ledger;
- [ ] author experience is accurately labeled and permission-checked;
- [ ] the web edition passes desktop, mobile, search, navigation, accessibility, and metadata checks;
- [ ] the EPUB validates and works in representative readers;
- [ ] the PDF is built and visually verified, or a documented feasibility decision explains why it is not shipped;
- [ ] references and diagrams are complete;
- [ ] practical resources are downloadable and used in the book;
- [ ] the quality report and cross-book consistency audit pass;
- [ ] README, CONTRIBUTING, LICENSE, and CHANGELOG are complete;
- [ ] a push to `main` validates and publishes the approved edition to GitHub Pages;
- [ ] a tagged release preserves final artifacts and checksums.

## Current stop point

This plan intentionally stops before Chapter 1 drafting. After Gate 0 approval, begin Phase 1—not the manuscript—with the Quarto proof, model decision record, terminology, author-knowledge recovery, and research schema. Then execute chapters in order through their task files.
