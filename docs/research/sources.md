# Research Ledger

Status: live ledger; Chapter 1 evidence pass completed 12 September 2026
Scope: sources used to test the 2025 premise, design the second edition, and support finalized chapter claims.

## Evidence rules

- Prefer primary research, standards, law, official documentation, and original datasets.
- Record a source before using its factual claim in the manuscript.
- Separate a source’s measured finding from the author’s interpretation.
- Record sample, task, date, and limitations for quantitative claims.
- Vendor documentation can establish that a capability or control exists. It cannot by itself establish broad productivity or organizational impact.
- A company case supplied by the company is labeled as a company-reported case.
- Marketing surveys are not causal evidence.
- Every scenario is labeled **REAL CASE**, **AUTHOR EXPERIENCE**, **ILLUSTRATIVE EXAMPLE**, or **HYPOTHETICAL FUTURE SCENARIO**.

## Initial sources

### S001 — AI capability and adoption accelerated through 2025

- **Claim:** The 2026 AI Index reports that performance on SWE-bench Verified rose sharply during 2025 and that organizational AI adoption reached 88%.
- **Source:** *The 2026 AI Index Report*.
- **URL:** https://hai.stanford.edu/ai-index/2026-ai-index-report
- **Publication:** Stanford Institute for Human-Centered Artificial Intelligence, AI Index Steering Committee.
- **Date:** April 2026.
- **Why it matters:** Supports the claim that the 2025 manuscript’s urgency was directionally reasonable, while not proving that adoption produced operating-model change.
- **Chapter:** Preface; Chapter 1.
- **Limitations/notes:** Inspect underlying definitions and datasets before quoting “88%.” Benchmark results must not be presented as job-level autonomy.

### S002 — Cost per unit of fixed model capability fell sharply

- **Claim:** The cost of querying a model at approximately GPT-3.5 MMLU performance fell from about $20 to $0.07 per million tokens between November 2022 and October 2024, a decline of more than 280 times.
- **Source:** *Artificial Intelligence Index Report 2025*, Chapter 1, using Epoch AI and Artificial Analysis data.
- **URL:** https://hai.stanford.edu/assets/files/hai_ai-index-report-2025_chapter1_final.pdf
- **Publication:** Stanford Institute for Human-Centered Artificial Intelligence.
- **Date:** April 2025.
- **Why it matters:** Supports the moving-constraint argument: some cognition becomes cheaper, while integration, review, and governance do not automatically do so.
- **Chapter:** Chapter 1.
- **Limitations/notes:** This is a fixed benchmark threshold, not the cost of a complete agentic workflow. Include orchestration, tool, data, evaluation, failure, and review costs in the book’s economic model.

### S003 — AI productivity effects are heterogeneous

- **Claim:** In the final peer-reviewed study of a staggered rollout covering 5,172 customer-support agents, access to an AI assistant increased issues resolved per hour by 15% on average, with larger gains for novice and lower-skilled workers and small gains for the most experienced workers.
- **Source:** Brynjolfsson, Li, and Raymond, *Generative AI at Work*.
- **URL:** https://academic.oup.com/qje/article/140/2/889/7990658
- **Publication:** National Bureau of Economic Research working paper; published in *Quarterly Journal of Economics* 140(2) in 2025.
- **Date:** Published online 4 February 2025; May 2025 issue.
- **Why it matters:** Provides credible evidence of value in a specific assisted workflow and demonstrates that gains vary by experience.
- **Chapter:** Chapters 1 and 7.
- **Limitations/notes:** Assistive customer support is not autonomous execution and cannot support claims about all knowledge work. The earlier working-paper version reported 5,179 agents and a 14% average gain; Chapter 1 uses the final journal sample and estimate.

### S004 — AI can reduce experienced-developer productivity in real codebases

- **Claim:** In a randomized controlled trial of 16 experienced open-source developers completing 246 tasks in mature repositories, early-2025 AI tools increased completion time by 19%, despite participants believing the tools made them faster.
- **Source:** Becker, Rush, Barnes, and Rein, *Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity*.
- **URL:** https://metr.org/Early_2025_AI_Experienced_OS_Devs_Study-paper.pdf
- **Publication:** Model Evaluation & Threat Research (METR).
- **Date:** 10 July 2025.
- **Why it matters:** Directly challenges universal productivity claims and supports rigorous pilot measurement rather than self-report.
- **Chapter:** Chapters 1 and 13.
- **Limitations/notes:** Small sample; specific experienced developers, repositories, tasks, and early-2025 tools. Do not generalize the 19% estimate beyond that setting.

### S005 — Agent capability horizons are improving but narrow and unreliable

- **Claim:** METR measures the duration of well-specified software/ML/cyber tasks at which agents reach a given success probability; it explicitly warns that these horizons do not imply job automation, high-context professional performance, or broad-domain capability.
- **Source:** *Task-Completion Time Horizons of Frontier AI Models*.
- **URL:** https://metr.org/time-horizons/
- **Publication:** Model Evaluation & Threat Research (METR).
- **Date:** Updated 8 May 2026.
- **Why it matters:** Provides a better way to discuss expanding agent capability while preserving the book’s necessary skepticism about autonomous companies.
- **Chapter:** Chapters 1 and 7.
- **Limitations/notes:** Current task distribution is primarily software engineering, ML, and cybersecurity; measurements above sixteen hours are flagged as unreliable on the current suite.

### S006 — Individual tool use does not automatically change coordinated work

- **Claim:** In a six-month randomized field experiment involving 6,000 workers, access to generative AI changed independently adjustable behaviors such as email time and document completion, but did not significantly change time spent in meetings.
- **Source:** Dillon, Jaffe, Immorlica, and Stanton, *Shifting Work Patterns with Generative AI*.
- **URL:** https://www.microsoft.com/en-us/research/publication/shifting-work-patterns-with-generative-ai/
- **Publication:** Microsoft Research.
- **Date:** April 2025.
- **Why it matters:** Strongly supports the book’s distinction between task acceleration and operating-model redesign.
- **Chapter:** Chapter 3.
- **Limitations/notes:** Obtain and inspect the full paper before using detailed estimates. Product access and first-year behavior do not establish long-term effects.

### S007 — Simple, composable agent patterns are often preferable

- **Claim:** Anthropic distinguishes workflows with predefined code paths from agents that dynamically direct tool use, recommends starting with the simplest sufficient design, and notes that agentic systems trade latency and cost for task performance.
- **Source:** *Building Effective Agents*.
- **URL:** https://www.anthropic.com/research/building-effective-agents
- **Publication:** Anthropic.
- **Date:** 19 December 2024.
- **Why it matters:** Supports a practical taxonomy and prevents the book from treating multi-agent autonomy as the default.
- **Chapter:** Chapter 7.
- **Limitations/notes:** Vendor engineering guidance, not independent impact research.

### S008 — Bounded coding agents can execute and produce review evidence

- **Claim:** OpenAI’s Codex launch documentation describes a coding agent operating in an isolated environment, editing files, running commands and tests, and providing citations/logs for human review.
- **Source:** *Introducing Codex* and *Addendum to o3 and o4-mini System Card: Codex*.
- **URL:** https://openai.com/index/introducing-codex/
- **Publication:** OpenAI.
- **Date:** 16 May 2025.
- **Why it matters:** Supplies a concrete example of agent execution bounded by environment and review evidence.
- **Chapter:** Chapter 7.
- **Limitations/notes:** Product documentation establishes design and availability, not independent productivity outcomes. Use the current configuration docs during drafting because launch behavior changed.

### S009 — Enterprise agent control uses sandboxing, approval, identity, policy, and telemetry

- **Claim:** OpenAI documents a production control pattern combining technical sandbox boundaries, approval policies, network controls, identity/credentials, managed configuration, and OpenTelemetry events for prompts, approvals, tools, MCP use, and network decisions.
- **Source:** *Running Codex safely at OpenAI*.
- **URL:** https://openai.com/index/running-codex-safely/
- **Publication:** OpenAI.
- **Date:** 8 May 2026.
- **Why it matters:** Validates the second edition’s control-plane and agent-aware evidence architecture as implementable patterns.
- **Chapter:** Chapters 9, 10, and 16.
- **Limitations/notes:** A first-party account of one company and product. Do not present it as proof of general effectiveness.

### S010 — MCP authorization matured from connection to enterprise control

- **Claim:** MCP authorization specifies OAuth-based access, resource-bound tokens, audience validation, and prohibitions on token passthrough; 2026 extensions add centrally managed authorization and machine-to-machine credentials.
- **Source:** *Authorization — Model Context Protocol*; *Enterprise-Managed Authorization: Zero-touch OAuth for MCP*.
- **URL:** https://modelcontextprotocol.io/specification/2025-06-18/basic/authorization
- **Publication:** Model Context Protocol project.
- **Date:** Specification dated 18 June 2025; enterprise-managed authorization announced 18 June 2026.
- **Why it matters:** Shows that tool connectivity creates organization-level questions about delegated authority, identity, policy, and audit.
- **Chapter:** Chapters 5, 9, and 16.
- **Limitations/notes:** Verify against the final 2026-07-28 specification before manuscript publication. Protocol support does not ensure secure implementation.

### S011 — Agent identity and authority are active standards problems

- **Claim:** NIST’s 2026 agent initiative identifies authentication, authorization, auditing, non-repudiation, least privilege, human-agent identity binding, and prompt injection as unresolved enterprise design concerns.
- **Source:** *New Concept Paper on Identity and Authority of Software Agents* and *Accelerating the Adoption of Software and AI Agent Identity and Authorization*.
- **URL:** https://www.nist.gov/news-events/news/2026/02/new-concept-paper-identity-and-authority-software-agents
- **Publication:** National Institute of Standards and Technology / National Cybersecurity Center of Excellence.
- **Date:** 5 February 2026.
- **Why it matters:** Supports the claim that the original book under-specified authority and that these concerns belong in the operating model.
- **Chapter:** Chapters 9, 16, and 18.
- **Limitations/notes:** This is a concept paper and question set, not a final standard. Use it to frame problems, not prescribe settled controls.

### S012 — AI risk management requires named roles, continuous monitoring, and TEVV

- **Claim:** The NIST AI RMF calls for clear human-AI roles, ongoing monitoring, and documented test, evaluation, verification, and validation across the lifecycle.
- **Source:** *AI Risk Management Framework* and AI RMF Core.
- **URL:** https://www.nist.gov/itl/ai-risk-management-framework
- **Publication:** National Institute of Standards and Technology.
- **Date:** 26 January 2023; Generative AI Profile published 26 July 2024; AI RMF revision in progress in 2026.
- **Why it matters:** Provides an established governance reference for ATOM’s control plane and learning loop.
- **Chapter:** Chapters 9, 10, 13, 16, and 18.
- **Limitations/notes:** Voluntary framework. Check revision status immediately before publication.

### S013 — AI evaluation is expanding to agentic systems and real-world outcomes

- **Claim:** NIST’s draft TEVV-Athlon framework proposes an extensible method for evaluating real-world impact and outcomes across systems including agentic AI.
- **Source:** *The TEVV-Athlon Framework for Evaluating AI Systems*.
- **URL:** https://www.nist.gov/artificial-intelligence/ai-research/tevv-athlon-framework-evaluating-ai-systems
- **Publication:** National Institute of Standards and Technology.
- **Date:** 7 August 2026, initial public draft.
- **Why it matters:** Supports the separation of model benchmarks from task, workflow, and outcome evaluation.
- **Chapter:** Chapters 10, 13, and 16.
- **Limitations/notes:** Draft open for comment; use as emerging guidance and verify final status.

### S014 — EU requirements make logging and human oversight operational concerns

- **Claim:** The EU AI Act framework requires, for covered high-risk systems when applicable, risk management, logging/traceability, documentation, information for deployers, human oversight, robustness, cybersecurity, and accuracy; transparency and other provisions follow a staged timeline.
- **Source:** *AI Act — Regulatory Framework for AI* and implementation FAQ.
- **URL:** https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai
- **Publication:** European Commission, Shaping Europe’s Digital Future.
- **Date:** Updated August 2026; AI Act generally applicable 2 August 2026 with later dates for specified high-risk rules following the 2026 AI Omnibus.
- **Why it matters:** Demonstrates that controls, logs, documentation, and oversight are not optional abstractions for affected organizations.
- **Chapter:** Chapters 9, 16, and 18.
- **Limitations/notes:** Legal timelines and scope changed in 2026 and may change again. Obtain legal review; the book must not give legal advice.

### S015 — Multi-task workplace agents remain substantially weaker than single-task benchmarks suggest

- **Claim:** Microsoft Research reports that leading computer-using agents degraded under interdependent multi-task loads in its CORPGEN environment, with completion rates falling from 16.7% to 8.7% in the described comparison.
- **Source:** *CORPGEN advances AI agents for real work*.
- **URL:** https://www.microsoft.com/en-us/research/blog/corpgen-advances-ai-agents-for-real-work/
- **Publication:** Microsoft Research.
- **Date:** 26 February 2026.
- **Why it matters:** Directly challenges the original book’s assumption that an organizational AI core can effortlessly coordinate many simultaneous dependencies.
- **Chapter:** Chapters 7, 8, and 16.
- **Limitations/notes:** Inspect the paper, task environment, baselines, and exact comparison before using the numerical result. Simulation is not field deployment.

### S016 — Quarto supports the required multi-format book and deployment path

- **Claim:** A Quarto book can produce HTML with full-text search, EPUB, and PDF/Typst output from one project; its official GitHub Action can render and publish to a `gh-pages` branch on push; HTML supports paired light/dark themes.
- **Source:** Quarto documentation: *Creating a Book*, *Customizing Book Output*, *GitHub Pages*, and *HTML Theming*.
- **URL:** https://quarto.org/docs/books/
- **Publication:** Quarto.
- **Date:** Accessed 11 September 2026.
- **Why it matters:** Supports the publishing-system recommendation and avoids mixing rendered output with editorial files under `docs/`.
- **Chapter:** Publishing plan, not manuscript.
- **Limitations/notes:** Quarto is not installed in the current local environment. Pin and test the version during the publishing phase. PDF feasibility depends on the selected engine, fonts, and diagram rendering.

### S017 — Inference-price declines vary sharply by capability threshold

- **Claim:** Epoch AI estimates that the price of language-model inference at fixed performance levels fell at rates ranging from roughly 9 to 900 times per year across the tasks and thresholds it examined.
- **Source:** *LLM inference price trends*.
- **URL:** https://epoch.ai/data-insights/llm-inference-price-trends
- **Publication:** Epoch AI.
- **Date:** 12 March 2025.
- **Why it matters:** Provides the direct data source behind the cost trend used in Chapter 1 and shows why one headline decline should not be treated as a universal economic law.
- **Chapter:** Chapter 1.
- **Limitations/notes:** Rates depend on benchmark, performance threshold, provider, and time window. They measure inference price, not the total cost of a production workflow, and the fastest historical decline may not persist.

### S018 — Newer coding-agent productivity evidence is difficult to identify cleanly

- **Claim:** METR’s February 2026 update reports that its later developer study was confounded by participation selection, task choice, non-compliance, and the difficulty of measuring concurrent agent work; the authors believe newer tools probably provide more speedup than early-2025 tools but characterize their evidence for the magnitude as weak.
- **Source:** *Update: How much does AI speed up experienced developers?*
- **URL:** https://metr.org/blog/2026-02-24-uplift-update/
- **Publication:** Model Evaluation & Threat Research (METR).
- **Date:** 24 February 2026.
- **Why it matters:** Prevents the early-2025 slowdown estimate from being presented as a current universal result and demonstrates that agentic work requires better measures than active keyboard time or participant perception.
- **Chapter:** Chapters 1 and 13.
- **Limitations/notes:** This is a methodological update, not a reliable new treatment-effect estimate. Do not quote exploratory subset estimates as settled productivity figures.

### S019 — AI adoption amplifies the surrounding delivery system

- **Claim:** DORA’s 2025 research describes AI as an amplifier of an organization’s existing strengths and weaknesses, with returns depending on the technical and organizational system around the tool.
- **Source:** *State of AI-assisted Software Development 2025*.
- **URL:** https://dora.dev/research/2025/dora-report/
- **Publication:** Google Cloud / DORA.
- **Date:** 2025.
- **Why it matters:** Supports Chapter 1’s hypothesis that local production gains do not automatically become organizational performance and motivates the operating-model focus of the book.
- **Chapter:** Chapters 1, 3, and 13.
- **Limitations/notes:** Survey and observational research in software delivery. It can support a scoped association and practitioner interpretation, not a causal claim across all organizations.

## Research gaps before drafting

- Independent field evidence on production agent workflows outside software.
- Total cost of agentic workflows, including human review and failure recovery.
- Decision-quality measurement and automation bias in executive contexts.
- Organization design evidence for dynamic teams and the cost of re-teaming.
- Internal talent marketplaces, consent, bias, and labor-law implications.
- Agent memory contamination, expiry, provenance, and long-running task reliability.
- Multi-agent failure propagation and coordination overhead.
- Incident databases and documented agent failures with reconstructable evidence.
- Agent identity, non-repudiation, and authorization standards after the 2026 NIST consultation.
- Current EU AI Act guidance and applicable sector regulation at the final evidence pass.
- Cases from the author’s own work that can support, contradict, or refine ATOM.

## Claim-status vocabulary

- **SUBSTANTIATED:** Directly supported by a suitable source; limitations included.
- **COMPANY-REPORTED:** Supported only by the company or vendor making the claim.
- **INFERENCE:** Reasoned from one or more sources; explicitly identified as interpretation.
- **AUTHOR EXPERIENCE:** Based on the author’s direct work; anonymization and permission checked.
- **ILLUSTRATIVE:** Invented to explain a mechanism; never presented as observed fact.
- **HYPOTHESIS:** A testable proposition of ATOM that has not yet been validated.
- **UNVERIFIED:** Must not enter final prose as fact.
