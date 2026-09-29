# Research Ledger

Status: rolling chapter-by-chapter evidence pass through 29 September 2026
Scope: sources used to test the book’s premises, develop ATOM, and support chapter claims. Chapters 1–18 reviewed through 29 September 2026; front/back matter remains to review.

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
- **Why it matters:** Establishes that capability and adoption increased rapidly while not proving that adoption produced operating-model change.
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
- **Why it matters:** Historical benchmark for an assisted workflow and evidence that effects vary by experience.
- **Chapter:** Reviewed for Chapter 1; excluded from the current manuscript because the underlying data are outside the two-year evidence window.
- **Limitations/notes:** Although published in 2025, the field data are from 2020–2021. The result is not used to support current productivity claims. The earlier working-paper version reported 5,179 agents and a 14% average gain.

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

### S006 — Individual tool use can affect routines without changing task composition

- **Claim:** A six-month randomized field experiment across 66 firms and 7,137 knowledge workers found that frequent users in the treatment group spent about 3.6 fewer hours per week on email (intent-to-treat estimate about 1.3 hours); meeting time did not significantly change, and researchers did not detect shifts in task quantity or composition from individual access alone.
- **Source:** Dillon, Jaffe, Immorlica, and Stanton, *Shifting Work Patterns with Generative AI*, November 2025 NBER revision.
- **URL:** https://www.nber.org/papers/w33795
- **Publication:** National Bureau of Economic Research, Working Paper 33795, revised November 2025.
- **Date:** Issue date May 2025; revised November 2025.
- **Why it matters:** Supports the bounded distinction between individual routine changes and measured system-level changes; it does not show that task, workflow, and operating-model effects always separate.
- **Chapter:** Chapter 3.
- **Limitations/notes:** The experiment tested individual access to one integrated office assistant over six months. The 3.6-hour estimate is for treated workers who used the tool in more than half the study weeks; the intent-to-treat estimate is about 1.3 hours. Several authors are Microsoft employees and the experiment concerned Microsoft 365 Copilot. Does not establish long-term effects or outcomes of coordinated redesign.

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
- **Why it matters:** Validates the book’s control-plane and agent-aware evidence architecture as implementable patterns.
- **Chapter:** Chapters 9, 10, and 16.
- **Limitations/notes:** A first-party account of one company and product. Do not present it as proof of general effectiveness.

### S010 — MCP authorization continues to change

- **Claim:** The July 2026 MCP specification adds issuer validation and binds client credentials to the issuing authorization server; enterprise-managed authorization is available as an extension.
- **Source:** *The 2026-07-28 Specification*; *The New MCP Roadmap*.
- **URL:** https://blog.modelcontextprotocol.io/posts/2026-07-28/
- **Publication:** Model Context Protocol project.
- **Date:** 28 July 2026 specification; roadmap updated 22 August 2026.
- **Why it matters:** Shows that tool connectivity creates organization-level questions about delegated authority, identity, policy, and audit.
- **Chapter:** Chapters 5, 9, and 16.
- **Limitations/notes:** MCP authorization and agent identity remain in active development. Protocol support does not ensure secure implementation or replace host application controls. Recheck the current specification and extension status before publication.

### S011 — Agent identity and authority are active standards problems

- **Claim:** NIST’s 2026 agent initiative identifies authentication, authorization, auditing, non-repudiation, least privilege, human-agent identity binding, and prompt injection as unresolved enterprise design concerns.
- **Source:** *New Concept Paper on Identity and Authority of Software Agents* and *Accelerating the Adoption of Software and AI Agent Identity and Authorization*.
- **URL:** https://www.nist.gov/news-events/news/2026/02/new-concept-paper-identity-and-authority-software-agents
- **Publication:** National Institute of Standards and Technology / National Cybersecurity Center of Excellence.
- **Date:** 5 February 2026.
- **Why it matters:** Supports the decision to make authority an explicit part of the operating model.
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

- **Claim:** The European Commission states that transparency rules apply from August 2026. Following the July 2026 AI Omnibus, specified high-risk use cases are scheduled to apply from 2 December 2027 and high-risk AI embedded in regulated products from 2 August 2028; requirements vary by legal role and system category.
- **Source:** *AI Act — Regulatory Framework for AI* and implementation FAQ.
- **URL:** https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai
- **Publication:** European Commission, Shaping Europe’s Digital Future.
- **Date:** Commission page last updated 3 August 2026; AI Omnibus entered into force 27 July 2026.
- **Why it matters:** Demonstrates that controls, logs, documentation, and oversight are not optional abstractions for affected organizations.
- **Chapter:** Chapters 9, 16, and 18.
- **Limitations/notes:** This summary is not legal advice or a system classification. Specific obligations, exceptions, and dates depend on role and use. Recheck final law/guidance and obtain legal review before publication.

### S015 — Multi-task workplace agents remain substantially weaker than single-task benchmarks suggest

- **Claim:** Microsoft Research reports that leading computer-using agents degraded under interdependent multi-task loads in its CORPGEN environment, with completion rates falling from 16.7% to 8.7% in the described comparison.
- **Source:** *CORPGEN advances AI agents for real work*.
- **URL:** https://www.microsoft.com/en-us/research/blog/corpgen-advances-ai-agents-for-real-work/
- **Publication:** Microsoft Research.
- **Date:** 26 February 2026.
- **Why it matters:** Challenges the assumption that an organizational AI core can effortlessly coordinate many simultaneous dependencies.
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

### S020 — AI’s economic value enters through decisions and complements

- **Claim:** Joshua Gans analyzes AI as a lower-cost prediction input whose first-order economic effect operates through decisions. The book separately treats the value of prediction, substitutes and complements to prediction, automation, and system effects.
- **Source:** *The Microeconomics of Artificial Intelligence*.
- **URL:** https://mitpress.mit.edu/9780262553544/the-microeconomics-of-artificial-intelligence/
- **Publication:** The MIT Press.
- **Date:** 9 December 2025.
- **Why it matters:** It gives the book a disciplined economic bridge from cheaper model output to organization design. Better or cheaper prediction does not create value alone; the firm also needs judgment, data, action, and a system capable of using the input. ATOM extends that lens to tool-using agents by making authority, evidence, and recovery explicit complements to execution.
- **Chapter:** Chapters 1, 3, 6, 7, and 13.
- **Limitations/notes:** The MIT Press summary and official table of contents were verified, as were the DOI, ISBN, date, license, and open-access status. MIT Press Direct blocked automated access to the full chapter text during this pass. The book’s formal prediction framing is analytically useful but does not by itself specify an operating model or fully capture agents that take actions through tools. Do not attribute ATOM’s extensions to Gans.

### S021 — Context is a finite production resource

- **Claim:** Production agent teams treat context as a curated combination of instructions, tools, data, history, and memory; more context can reduce focus rather than reliably improve performance.
- **Source:** *Effective Context Engineering for AI Agents*.
- **URL:** https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents
- **Publication:** Anthropic.
- **Date:** 29 September 2025.
- **Why it matters:** Supports the context-envelope architecture in Chapter 5.
- **Chapter:** Chapter 5.
- **Limitations/notes:** First-party engineering guidance, not independent organizational-impact evidence.

### S022 — Prompt injection is an authority and impact problem

- **Claim:** OpenAI frames advanced prompt injection as social engineering and recommends constraining the connection between untrusted sources and consequential actions even when detection fails.
- **Source:** *Designing AI Agents to Resist Prompt Injection*.
- **URL:** https://openai.com/index/designing-agents-to-resist-prompt-injection/
- **Publication:** OpenAI.
- **Date:** 11 March 2026.
- **Why it matters:** Supports the separation of content, permission, and deterministic control.
- **Chapter:** Chapters 5, 6, and 9.
- **Limitations/notes:** First-party security guidance; it does not establish that any control eliminates prompt injection.

### S023 — Production multi-agent systems add coordination failure

- **Claim:** Anthropic’s production research system uses an orchestrator-worker design and required explicit controls for excessive spawning, endless search, coordination, evaluation, and synthesis.
- **Source:** *How We Built Our Multi-Agent Research System*.
- **URL:** https://www.anthropic.com/engineering/multi-agent-research-system
- **Publication:** Anthropic.
- **Date:** 13 June 2025.
- **Why it matters:** Grounds the book’s claim that multi-agent design is an architecture choice with additional interfaces and costs.
- **Chapter:** Chapter 7.
- **Limitations/notes:** Company-reported experience for one research product.

### S024 — Operational autonomy changes with users and product design

- **Claim:** Anthropic’s first-party interaction study found that experienced Claude Code users granted more auto-approval while also interrupting more, and that agents often initiated clarification themselves.
- **Source:** *Measuring AI Agent Autonomy in Practice*.
- **URL:** https://www.anthropic.com/research/measuring-agent-autonomy
- **Publication:** Anthropic.
- **Date:** 18 February 2026.
- **Why it matters:** Supports post-deployment monitoring rather than treating approval settings as a complete measure of oversight.
- **Chapter:** Chapters 16 and 18.
- **Limitations/notes:** Product-specific observational evidence; reported rates are not generalized in the manuscript.

### S025 — Domain expertise remains important in agentic coding

- **Claim:** Anthropic’s privacy-preserving analysis of Claude Code sessions reports that domain experts more often succeed and recover from errors, while people still tend to decide what to build and agents how to build it.
- **Source:** *How Claude Code Is Used in Practice*.
- **URL:** https://www.anthropic.com/research/claude-code-expertise
- **Publication:** Anthropic.
- **Date:** 2026.
- **Why it matters:** Provides an early, scoped signal for the management argument that problem knowledge grows in relative importance as implementation becomes cheaper.
- **Chapter:** Chapter 17.
- **Limitations/notes:** Product-specific, company-reported observational analysis. The manuscript labels the inference and does not generalize the reported effect.

### S026 — Randomized developer studies find gains that vary by setting

- **Claim:** Three company-run randomized field experiments at Microsoft, Accenture, and an anonymous Fortune 100 company pooled results from 4,867 developers given access to a code-completion assistant. The pooled estimate was 26.08% more completed tasks (standard error 10.3 percentage points); individual experiments were noisy and varied.
- **Source:** Cui, Demirer, Jaffe, Musolff, Peng, and Salz, *The Effects of Generative AI on High-Skilled Work: Evidence from Three Field Experiments with Software Developers*.
- **URL:** https://pubsonline.informs.org/doi/10.1287/mnsc.2025.00535
- **Publication:** *Management Science*, published online 27 February 2026.
- **Why it matters:** Adds recent, large-sample randomized evidence to the productivity discussion and illustrates why task completion should not be conflated with shipped software or business value.
- **Chapter:** Chapter 1.
- **Limitations/notes:** The authors report noisy, varying estimates across the three experiments. The outcome is task completion after access to code-completion assistance; it is not a direct measure of production releases, software quality, or end-to-end value. The pooled estimate should not be generalized across jobs or tools.

### S027 — Token prices and cost per completed task can diverge

- **Claim:** A September 2026 preprint constructs price indices from posted inference prices, benchmark performance, and estimated token consumption. It reports falling per-token prices but does not establish a fall in per-task prices over the short window available for that comparison.
- **Source:** Zhu, *The Price of Intelligence: A Quality-Adjusted Price Index for AI Services*.
- **URL:** https://arxiv.org/abs/2608.29843
- **Publication:** arXiv preprint, posted 30 August 2026.
- **Why it matters:** It distinguishes a provider’s unit price from a buyer’s cost of completing a useful task, strengthening the book’s insistence on measuring total workflow economics.
- **Chapter:** Chapter 1.
- **Limitations/notes:** Not peer reviewed. The task-denominated series covers only a few months and its estimate is explicitly imprecise. Treat the result as an emerging measurement issue, not settled evidence that task prices have stopped declining.

### S028 — Organizational debt remains an emerging concept

- **Claim:** A 2024 multivocal literature review describes organizational debt in software engineering as an emerging concept. It synthesized nine peer-reviewed articles and 22 practitioner posts, and identified outdated structures, policies, and processes as one recurring definition.
- **Source:** Al-Baik, Abu Alhija, Abdeljaber, and Ovais Ahmad, *Organizational Debt—Roadblock to Agility in Software Engineering*.
- **URL:** https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0308183
- **Publication:** *PLOS ONE*, 19(11), published 25 November 2024.
- **Why it matters:** Establishes the nearest recent literature context for Hidden Operational Debt, while leaving room for the book’s workflow-trace definition and diagnostic model.
- **Chapter:** Chapter 2.
- **Limitations/notes:** The review itself calls for more empirical research; it includes practitioner posts and its literature search is limited through June 2024. It supports conceptual context only, not the prevalence or economic effect of the six categories in this book.

### S029 — Agent evaluations can verify intermediate actions and end states

- **Claim:** Anthropic's January 2026 evaluation guide describes task checks for end-state conditions, required tool calls, interaction quality, and latency.
- **Source:** *Demystifying Evals for AI Agents*.
- **URL:** https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents
- **Publication:** Anthropic, 9 January 2026.
- **Why it matters:** Supports the chapter's distinction between an agent's transcript and the state of the customer or system after execution.
- **Chapter:** Chapter 2.
- **Limitations/notes:** First-party engineering guidance; it documents an evaluation practice, not independent evidence that the practice improves business results.

### S030 — Metric definitions can change what an agent dashboard reports

- **Claim:** Intercom's 2026 documentation changed Fin involvement and resolution-rate definitions to exclude conversations where the agent could not answer; its overall automation rate was unchanged.
- **Source:** *Update to Fin Performance Metrics*.
- **URL:** https://www.intercom.com/help/en/articles/15599377-update-to-fin-performance-metrics
- **Publication:** Intercom, updated in 2026; accessed 28 September 2026.
- **Why it matters:** A concrete example of a provider revising denominator definitions after identifying constrained cases that distorted reported performance.
- **Chapter:** Chapter 2.
- **Limitations/notes:** Vendor documentation describes metric changes in its own product. It does not independently establish customer outcome or productivity effects.

### S031 — Production trace tools can group patterns and expose source records

- **Claim:** Current LangSmith documentation describes grouping production traces by recurring categories while retaining links to traces and displaying error, latency, cost, and evaluator feedback summaries.
- **Source:** *Discover Errors and Usage Patterns with Insights*.
- **URL:** https://docs.langchain.com/langsmith/insights
- **Publication:** Current product documentation; accessed 28 September 2026.
- **Why it matters:** Shows that trace-level drill-down and category summaries are implementable features in current observability tools.
- **Chapter:** Chapter 2.
- **Limitations/notes:** Vendor documentation establishes product capability, not evaluation accuracy or organizational value.

### S032 — Boundary management relates to team performance, with contingent effects

- **Claim:** A 2025 meta-analysis synthesizes 85 primary studies covering 10,848 teams and finds a positive overall association between team boundary management and team performance. Effects vary with who performs boundary work, what it targets, and whether activities span or strengthen boundaries; in the analysis, spanning activities and extra-organizational targets showed stronger effects.
- **Source:** Leicht-Deobald et al., “A Contingency Framework for the Performance Consequences of Team Boundary Management: A Meta-Analysis of 30 Years of Research.”
- **URL:** https://pubmed.ncbi.nlm.nih.gov/39781564/
- **Publication:** *Journal of Management*, 51(2), 704–747.
- **Date:** Issue February 2025 (published online November 2023).
- **Why it matters:** Supports treating team boundaries and cross-team activity as design questions with contextual effects, not assuming autonomy or standardization is always beneficial.
- **Chapter:** Chapter 14.
- **Limitations/notes:** The synthesis covers varied teams and boundary activities over 30 years, not the book's proposed Fractal Units or AI-enabled companies. It supports boundary-management nuance, not a causal claim that adopting this chapter's unit contract improves performance.

### S033 — Employer-reported benefits and concerns in algorithmic management

- **Claim:** An OECD survey of employers reports manager-perceived changes in decision quality and also trustworthiness concerns including bias, explainability, accountability, worker health, and worker notice. The report notes country differences in perceived bias effects.
- **Source:** Milanez, Lemmens, and Ruggiu, *Algorithmic Management in the Workplace: New Evidence from an OECD Employer Survey*.
- **URL:** https://www.oecd.org/en/publications/algorithmic-management-in-the-workplace_287c13c4-en.html
- **Publication:** OECD Artificial Intelligence Papers, No. 31.
- **Date:** 6 February 2025.
- **Why it matters:** Supports keeping AI-assisted workforce allocation reviewable and contestable, while accounting for affected workers.
- **Chapter:** Chapter 15.
- **Limitations/notes:** Employer survey and manager perceptions, not worker-level outcome measurement or evidence about internal talent marketplaces. It does not show causal productivity gains or validate the chapter's proposed allocation practice.

### S034 — Agentic security guidance identifies identity, tool, and delegation risks

- **Claim:** OWASP's December 2025 Agentic Applications Top 10 includes risks such as agent goal hijacking, tool misuse, identity and privilege abuse, supply-chain vulnerabilities, insecure inter-agent communication, cascading failures, human-agent trust exploitation, and rogue agents.
- **Source:** OWASP GenAI Security Project, *OWASP Top 10 for Agentic Applications*.
- **URL:** https://genai.owasp.org/2025/12/09/owasp-top-10-for-agentic-applications-the-benchmark-for-agentic-security-in-the-age-of-autonomous-ai/
- **Publication:** OWASP GenAI Security Project.
- **Date:** 9 December 2025.
- **Why it matters:** Supports considering agent-specific failure paths in deployment control and incident design.
- **Chapter:** Chapter 16.
- **Limitations/notes:** Practitioner threat taxonomy, not prevalence estimates or proof that any particular control is effective.

### S035 — AI changed collaboration outcomes in a bounded product-development field experiment

- **Claim:** A preregistered field experiment with 791 Procter & Gamble professionals working on real product-innovation challenges found that AI-assisted individuals performed at the level of unaided teams and produced more balanced solutions across commercial and R&D perspectives; the article also measured social engagement and expertise integration.
- **Source:** Dell'Acqua et al., *The Cybernetic Teammate: A Field Experiment on Generative AI and Teamwork*.
- **URL:** https://pubsonline.informs.org/doi/10.1287/orsc.2025.20702
- **Publication:** *Organization Science*, online 2026.
- **Date:** Published online 2026; accessed 29 September 2026.
- **Why it matters:** Provides a recent experimental case for discussing AI's possible effect on collaboration and expertise sharing.
- **Chapter:** Chapter 17.
- **Limitations/notes:** One company, product-development tasks, and experimental setup. Does not test management structures, job design over time, or universal substitution of team roles.

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
