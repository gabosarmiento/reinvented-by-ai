# Chapter Production Tasks

Status: scaffolded for execution after Gate 0 approval

Each chapter has eight ordered task files. Complete them in sequence. A checked box means the named artifact exists and meets its exit criteria; it does not merely mean work began.

## Required order

1. `01-audit.md` — recover useful original material and reject generated filler.
2. `02-research.md` — resolve factual and conceptual questions in the research ledger.
3. `03-argument-map.md` — establish premise → evidence → implication → recommendation before prose.
4. `04-first-draft.md` — write from the argument map, not by sentence-spinning the PDF.
5. `05-evidence-pass.md` — check every fact, number, company, prediction, and case label.
6. `06-style-pass.md` — remove generic AI prose, consultant-speak, padding, and false precision.
7. `07-editorial-review.md` — attack the chapter from a skeptical operating executive’s position.
8. `08-finalize.md` — resolve review, run the quality gate, and move approved prose into `book/`.

## Rules

- Never draft a chapter whose argument map is not approved.
- Never put an unlogged external claim into final prose.
- Never invent author experience or a real company case.
- Use **REAL CASE**, **AUTHOR EXPERIENCE**, **ILLUSTRATIVE EXAMPLE**, and **HYPOTHETICAL FUTURE SCENARIO** exactly.
- Record rejected claims; do not quietly rephrase them into apparent facts.
- No chapter is final if any quality category scores below 4/5.
- A chapter commit should name its stage. Do not combine all eight stages in one commit.

## Shared chapter outputs

During production, working artifacts may live beside these task files:

```text
tasks/chNN/
├── 01-audit.md
├── 02-research.md
├── 03-argument-map.md
├── 04-first-draft.md
├── 05-evidence-pass.md
├── 06-style-pass.md
├── 07-editorial-review.md
├── 08-finalize.md
├── audit-notes.md
├── research-notes.md
├── argument-map.md
├── review.md
└── quality-score.md
```

The first draft itself should be placed in the target `book/` path on a chapter branch or working commit and must remain marked `draft: true` until finalization.
