# Chapter 5 editorial review

Reviewed: 29 September 2026

## Findings and dispositions

### High — prompt and source labels could be mistaken for security controls

Clarified that trust labels describe source status but do not enforce isolation. Permissions and high-impact limits belong in tools or surrounding systems. Prompt injection remains an evolving risk.

### High — engineering guidance risked sounding like independent evidence

Identified the Anthropic material as first-party engineering guidance and stated it does not establish organizational impact. NIST material is identified as voluntary risk guidance, not a technical standard.

### Medium — overly categorical failure and autonomy language

Reworded “often begins” and other broad claims to show these are failure paths to test. Context envelope is the book's design tool and its boundary must be validated against actual cases.

### Medium — sensitive data in assistant workspaces

Added a concrete instruction to follow access and retention rules, and mask or omit sensitive data where possible and permitted.

## COO test

- The chapter starts with a single decision, not an enterprise knowledge graph.
- It assigns source and policy decisions to accountable owners rather than to the model.
- It includes freshness, conflicts, permission denials, and reversal as operational measures.
- It names the added maintenance cost and does not promise that an envelope alone prevents errors.

## Remaining release conditions

Final legal/access review for examples, current-link validation, glossary/cross-reference review, and multi-format rendering have not been run.
