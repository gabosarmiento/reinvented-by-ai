# Decision 0005 — Place the Quarto Home Page at the Project Root

Date: 12 September 2026  
Status: accepted during Chapter 1 finalization

## Context

The initial repository proposal placed `book/index.qmd` beneath the manuscript directory while keeping `_quarto.yml` at the repository root. Quarto 1.10 requires a book project to include its home page as `index.qmd` at the project root. The proposed arrangement fails before rendering.

## Decision

Keep the Quarto project and configuration at the repository root and place only the book home page at `/index.qmd`. Chapters, front matter, resources, and the bibliography remain under `/book/`.

## Consequences

- GitHub Pages can use the repository root as the Quarto project without a wrapper project.
- The published home page is a source file, not generated output.
- Editorial working material remains separate under `/docs/` and `/tasks/`.
- `docs/editorial/repository-structure.md` must be updated before the publishing gate so it does not continue to show `book/index.qmd`.

