# Chapter 1 Research Notes

Chapter: When Production Gets Cheap  
Research completed: 11 September 2026

## Question 1 — Has AI become cheaper to use?

Evidence: Stanford’s 2025 AI Index, drawing on Epoch AI and Artificial Analysis, reports that the inference price for a model at GPT-3.5-level MMLU performance fell from $20 per million tokens in November 2022 to $0.07 by October 2024, more than 280-fold. Epoch estimates very different rates across task/performance thresholds.

Use: Establish that the marginal price of some model-mediated cognition has fallen dramatically.

Limit: Token price is not the total cost of a workflow. It excludes integration, data, tools, review, failure, security, and change costs. The trend should not be extrapolated as a law.

Ledger: S002; new direct-source entry S017.

## Question 2 — Is organizational adoption broad?

Evidence: The 2026 AI Index reports 88% adoption among surveyed organizations, while agent deployment remains in the single digits across nearly all business functions.

Use: The problem is no longer whether companies have encountered AI. The gap between broad use and early agent deployment prevents an exaggerated “autonomous enterprise” opening.

Limit: This is a compilation of survey data, not a census; adoption means at least one reported use and says little about depth or value.

Ledger: S001.

## Question 3 — Does AI increase productivity?

Evidence A: Brynjolfsson, Li, and Raymond studied a staggered rollout to 5,179 customer-support agents. The assistant increased issues resolved per hour by 14% on average, with substantially larger gains among novice/lower-skilled workers and little effect among the most experienced/high-skilled workers.

Evidence B: METR’s early-2025 randomized study of 16 experienced open-source developers and 246 tasks found that AI use increased completion time by 19% (95% confidence interval: 2% to 39% longer), despite participants expecting to be faster.

Evidence C: METR’s February 2026 update says later data are badly affected by selection, task choice, concurrent-agent time measurement, and non-compliance. The authors believe newer tools likely improve speed more, but call their evidence weak for the magnitude.

Use: State the durable finding: effect varies by task, worker, system, and measurement design. Do not present either 14% gain or 19% slowdown as universal.

Limit: Different populations, tasks, tool generations, and outcome measures. Early-2025 coding evidence is temporally unstable but remains useful as a warning against self-reported speed.

Ledger: S003, S004, S018.

## Question 4 — Can agents do longer work?

Evidence: METR’s task-completion time-horizon work shows an improving frontier on well-specified software, ML, and cybersecurity tasks. METR explicitly warns that the metric does not describe elapsed agent run time, high-context professional work, all tasks of a given duration, or job automation; performance is worse on messier tasks.

Use: Establish that tool-using agents can take on more substantial bounded tasks while rejecting job-level inference.

Limit: Current suite is narrow; 50% success is not operational reliability; estimates above sixteen hours are flagged as unreliable.

Ledger: S005.

## Question 5 — Do local gains become system performance?

Evidence A: DORA’s 2025 software-development research describes AI as an amplifier of existing organizational strengths and weaknesses and argues that returns depend on the underlying system.

Evidence B: Microsoft Research’s randomized 6,000-worker study found changes in individually adjustable activities such as email time and document completion but no significant change in meeting time.

Use: Support the distinction between faster production and redesigned coordination. DORA is observational and should be described as such. The Microsoft result will receive full treatment in Chapter 3; Chapter 1 may foreshadow it.

Limit: DORA is survey/observational research in software delivery, not causal proof for all organizations. Microsoft measured an early product period and selected behaviors.

Ledger: S006, S019.

## Working claim set

1. **SUBSTANTIATED:** The inference price required for some fixed model-performance thresholds fell sharply through 2024.
2. **SUBSTANTIATED WITH SCOPE:** AI assistance improved throughput in one large customer-support deployment.
3. **SUBSTANTIATED WITH SCOPE:** Early-2025 AI tools slowed a small sample of experienced open-source developers on their own mature repositories.
4. **SUBSTANTIATED WITH CAVEAT:** Agent performance on bounded technical tasks has improved, but task-horizon measurements do not imply job automation.
5. **INFERENCE:** When production capacity rises faster than selection, integration, verification, and authorization capacity, those functions become queues and limit organizational value.
6. **HYPOTHESIS:** AI adoption magnifies the quality of the surrounding operating system.

## Excluded research claims

- Headcount reduction forecasts.
- Labor-market displacement figures.
- Surveyed “hours saved” without a behavioral baseline.
- Benchmark scores used as proxies for business value.
- Current-model price comparisons that would date the chapter quickly.
- Claims that agent use is already widespread across business functions.

## Research conclusion

The evidence supports a narrower and stronger opening than the original: the price and capability of production have changed materially in bounded work, but the value effect is conditional. The chapter’s original contribution is the implication that organizational bottlenecks move. That implication should be labeled as the book’s argument, not as an empirical result already proved across companies.

## Author-review research addition, 12 September 2026

### Question 6: What is the right economic unit of analysis?

Evidence: Joshua Gans’s *The Microeconomics of Artificial Intelligence* treats AI prediction as an input to decision-making and organizes its core analysis around value, substitutes, complements, automation, and system effects. The official MIT Press description, table of contents, Crossref metadata, DOI, publication date, ISBN, license, and open-access status were verified.

Use: Replace the loose claim that “intelligence is cheap” with a more disciplined claim. Lower-cost prediction or generation matters through the decisions and actions it changes. This supports the chapter’s move from model price to total system cost.

Extension: Tool-using agents do more than predict. The manuscript therefore extends the complements around execution to include bounded authority, evidence, and recovery. This extension is ATOM’s argument, not a claim attributed to Gans.

Limit: MIT Press Direct blocked automated access to the full chapter text in this pass. Use only claims supported by the verified publisher description and official contents until the full text can be reviewed manually.

Ledger: S020.
