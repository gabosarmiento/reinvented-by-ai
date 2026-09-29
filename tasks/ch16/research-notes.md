# Chapter 16 research notes

Evidence checked 29 September 2026. The operating roles and registry described here are recommendations, not a validated organizational standard.

## Identity, authorization, and threat model

- NIST's February 2026 concept paper identifies agent identity, authorization, auditing, non-repudiation, and prompt-injection controls as areas for standards and implementation work. NIST's August 2026 post reiterates that foundational identity practices matter and agent-specific guidance remains in development.
- OWASP's Agentic Applications Top 10 (December 2025) identifies goal hijacking, tool misuse, identity/privilege abuse, supply-chain, inter-agent communication, cascading failure, trust exploitation, and rogue agents. Added as S034.
- MCP's July 2026 authorization spec supplies protocol-level protections, but protocol compliance does not establish application security.
- Limitation: current sources are standards/guidance/threat models; they do not show the prevalence of incidents or that this chapter's Agent Operations function reduces risk.

## Examples and claims

- Supplier-document payment-change incident is explicitly illustrative, not a known case.
- Agent registry, lifecycle, autonomy budget, and incident drill are proposed practices. Vendor features demonstrate feasibility only when cited; no universal implementation claim is made.
- EU legal obligations are handled in Chapter 18; avoid turning this operational chapter into jurisdiction-specific legal advice.
