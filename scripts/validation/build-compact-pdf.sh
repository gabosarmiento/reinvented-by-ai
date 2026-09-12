#!/usr/bin/env bash
set -euo pipefail

quarto render --to typst

orange_book=".quarto/typst/packages/preview/orange-book/0.7.1/lib.typ"
test -f "$orange_book"
test -f "index.typ"

perl -0pi -e 's/pagebreak\(to: "odd"\)/pagebreak()/g' "$orange_book"
perl -0pi -e 's/#bibliography\(\("book\/references\.bib"\)\)/#text(size: 8.5pt)[#bibliography(("book\/references.bib"))]/g' index.typ

mkdir -p output/pdf
quarto typst compile \
  --root . \
  --package-path .quarto/typst/packages \
  index.typ \
  output/pdf/The-Adaptive-Company.pdf
