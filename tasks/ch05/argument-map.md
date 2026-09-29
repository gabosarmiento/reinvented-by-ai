# Chapter 5 argument map

## Proposition

Before delegating consequential work to an agent, the organization needs to specify which facts, policies, history, permissions, and provenance are relevant to that task and how conflicts or staleness are handled.

## Support

1. Retrieval can surface relevant but obsolete or unauthorized information.
2. Current engineering guidance treats context selection and maintenance as an ongoing engineering problem.
3. Provenance, privacy, testing, and incident handling are lifecycle risk-management concerns.
4. Prompt injection can exploit untrusted content; controls should limit what an agent can do if manipulated.
5. A source map and test set give owners concrete work before expanding access.

## Objection and response

**Objection:** Designing an envelope for every task can delay pilots and create data-governance bureaucracy.

**Response:** Start with one recurring consequential decision and only the fields needed for it; scale the governance with consequence and data sensitivity. Low-risk drafts do not require a company-wide context program.

## Boundary

This is a design proposal, not demonstrated evidence of improved accuracy or value. Source-owner validation and access controls remain necessary; a prompt or label cannot enforce them alone.

## Decision

Map required facts and sources for one decision, define ownership/freshness/permission, add conflict and missing-source tests, and keep high-impact actions outside model discretion until the controls are verified.
