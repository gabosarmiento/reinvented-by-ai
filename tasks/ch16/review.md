# Chapter 16 editorial review

Reviewed: 29 September 2026

## Findings

### High — security recommendations could imply validated controls

Added recent NIST/OWASP sources, but labeled them as guidance/threat taxonomy and stated they do not validate the chapter's proposed operating function.

### Medium — protocol language could overstate MCP security

Updated to the July 2026 authorization specification and clarified protocol protections do not secure application deployments.

### Medium — fictional incident might read as a real event

It is explicitly marked illustrative and presented as a failure-path example.

## Remaining gate

Qualified security review, validate incident/registry worksheet, links and diagrams, and production review.

## Qualified security review brief

The NIST identity concept paper, OWASP Agentic Applications Top 10, and MCP authorization specification cited in the chapter describe design concerns, a threat taxonomy, and protocol requirements. They do not demonstrate that Agent Operations, a registry, or the proposed controls prevent incidents. Ask a qualified security reviewer to assess the chapter's recommendations and illustrative supplier incident against a realistic deployment, specifically:

- workload identity and binding of agent runs to owners and authority;
- secrets and credential issuance, rotation, expiry, and revocation;
- least privilege for tools, data, and delegated actions;
- tool isolation and network/egress isolation;
- prompt-injection boundaries between untrusted content and state-changing tools;
- supply-chain integrity of models, tools, connectors, and dependencies;
- provenance and tamper resistance of action and evidence records;
- break-glass access and its audit trail;
- revocation across active runs and downstream systems;
- rollback and recovery of partial or harmful actions;
- trust boundaries among orchestrators, workers, and shared context;
- incident containment across customers and business units;
- separation of runtime action authority from management and configuration authority.

Ask the reviewer to identify missing controls, unsafe implications, and claims needing narrower wording. This brief prepares the review; the qualified security review remains an open release gate.
