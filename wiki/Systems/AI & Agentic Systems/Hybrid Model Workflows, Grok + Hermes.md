---
type: synthesis
status: developing
created: 2026-05-17
updated: 2026-05-17
tags:
  - agentic
  - workflows
  - models
  - grok
  - hermes
  - llm-knowledge-base
---

# Hybrid Model Workflows, Grok + Hermes

As my work on the `llm-knowledge-base` has grown, I’ve been shifting toward using **Hermes** (the agent) as the primary actor for working on the knowledge base, while still using Grok for higher-level reasoning when needed.

### Core Idea

I’m treating **Hermes as the agent** and giving it the ability to use different models and tools depending on the task. This setup supports the longer-term goal of gradually increasing Hermes’ autonomy.

### Current Division of Labor

| Task Type                                      | Primary Actor     | Model / Tool                  | Notes |
|-----------------------------------------------|-------------------|-------------------------------|-------|
| High-level framing & philosophy               | Hermes (with Grok)| Grok                          | Hermes can delegate complex reasoning to Grok |
| Writing new synthesis pages                   | Hermes            | Grok or Hermes 3              | Depends on complexity |
| Auditing and improving existing hubs          | Hermes            | Hermes 3 (local)              | Primary execution work |
| Integrating new concepts                      | Hermes            | Grok (planning) + Hermes 3    | Hybrid within the same workflow |
| Link hygiene, taxonomy, consistency work      | Hermes            | Hermes 3 (local)              | Fast, local, low-risk tasks |
| Running experiments across the system         | Hermes            | Hermes 3 (local)              | Full local repo access |
| Deep diagnostic or philosophical work         | Hermes            | Grok                          | When stronger reasoning is required |

### Why This Approach

- **Hermes** is the persistent agent. It can maintain long-term context about the knowledge base and gradually take on more independent work.
- **Grok** is used as a high-quality reasoning tool that Hermes (or I) can call when needed.
- **Hermes 3 (local)** is used for most execution work and anything involving private material. File editing tools can be invoked by Hermes when needed.

This structure supports the direction of starting with propose-and-review workflows and gradually increasing Hermes’ autonomy over time.

### Current Setup (as of May 2026)

- Hermes (the agent tool) is the main interface.
- It can call Grok via API when deeper reasoning is required.
- It can use the local `hermes3:8b` model via Ollama for most execution work.
- File editing tools are available when direct changes are needed.
- All work is currently in a controlled “propose and review” mode, with the intention of increasing Hermes’ independence as the system matures.

### Open Questions

- How much persistent memory and context does Hermes need before it can reliably handle larger autonomous tasks?
- How should Hermes decide when to use Grok versus the local model for a given subtask?

### Current Guardrails (as of May 2026)

Strict read/write boundaries are now defined in [[AGENTS.md#hermes-access-boundaries-security-model|AGENTS.md → Hermes Access Boundaries]]:

- Hermes may read `wiki/` freely and read specific private files only when explicitly directed by the user.
- All durable content changes target `wiki/`.
- Raw agent activity (transcripts, proposed diffs, logs) is written to `raw/sessions/`.
- After substantial work, Hermes must create a structured session summary using the template in `raw/sessions/templates/session-summary.md` and present it for review (see AGENTS.md "Session Summary Habit").
- Level 2 work requires explicit human approval on every `wiki/` edit.
- Private material handling remains human-gated (no autonomous crawling of `raw/private/`).

These boundaries are the foundation for safely increasing autonomy.

## Related Pages

- [[Agentic Engineering|Agentic Engineering]]
- [[How Top Performers Learn|How Top Performers Learn]]
- [[Current Agentic LLM Stack|Current Agentic LLM Stack]]
- [[Dimensions of Learning|Dimensions of Learning]]
