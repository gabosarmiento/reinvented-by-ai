# Chapter 2 Research Notes

Chapter: Hidden Operational Debt  
Research refreshed: 28 September 2026

## Question 1 — Is organizational debt an established research field?

Evidence: A 2024 PLOS ONE multivocal review found nine peer-reviewed papers and 22 practitioner posts and described organizational debt in software engineering as an emerging concept. It notes the need for more empirical research.

Use: Give the chapter a current literature anchor while distinguishing its workflow-trace model from established theory.

Limit: The review's search corpus is narrow, partly practitioner-authored, and does not validate this book's six categories or quantify their costs.

Ledger: S028.

## Question 2 — Can AI trace analysis verify outcomes?

Evidence: Anthropic's January 2026 agent-evaluation guide describes end-state checks, tool-call checks, interaction rubrics, and latency measures. Current LangSmith documentation describes trace grouping with access to underlying traces and aggregated error, latency, cost, and evaluator feedback.

Use: Show that interaction logs should be joined to the final state and that sampled classifications need source drill-down.

Limit: These are first-party engineering and product sources. They establish documented practices and features, not independent evidence of organizational impact.

Ledger: S029 and S031.

## Question 3 — Does AI amplify operational debt?

Evidence: DORA's 2025 software-delivery report describes AI as amplifying existing organizational strengths and weaknesses.

Use: Retain only as a software-domain finding. Extending the mechanism to other company workflows is labeled as this book's hypothesis.

Limit: Survey and observational evidence; it does not prove the same causal effect across all functions.

Ledger: S019.

## Question 4 — Can dashboard definitions hide constrained cases?

Evidence: Intercom's 2026 Fin metric update excludes cases where the agent was active but had no opportunity to answer from its involvement and resolution denominators. Its automation rate remains unchanged.

Use: Illustrate why denominator and eligibility definitions should be recorded with reported metrics.

Limit: Vendor documentation, not independent outcome evidence. Used only to describe the metric revision.

Ledger: S030.

## Open evidence gap

No recent primary research validates the chapter's six-part Hidden Operational Debt taxonomy or estimates its prevalence and financial cost. The register is an author-proposed management instrument; organizations should test it against their own traces and outcomes.
