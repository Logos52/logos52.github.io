---
type: concept
status: seed
created: 2026-05-02
updated: 2026-05-02
source-count: 1
last-audited:
tags:
  - llm
  - agents
  - infrastructure
---

# Agent-Native Infrastructure

Agent-native infrastructure is software, documentation, and operational tooling designed for agents to use directly.

## Summary

Karpathy argues that much of today's infrastructure is still written for humans. Documentation tells the human to click through URLs, configure settings, and wire services together. Agent-native infrastructure would instead expose instructions, sensors, actuators, APIs, and data structures that are legible and executable by agents.

## Examples

- Setup instructions written as agent-ready tasks.
- APIs and CLIs that avoid fragile browser-only configuration.
- Docs that include copy-pasteable agent prompts.
- Machine-readable project state and deployment state.
- Agents that can coordinate with other agents on behalf of people or organizations.

## Implication For This Wiki

This wiki should be easy for an LLM to operate:

- `notes/index.md` tells the agent what exists.
- `log.md` tells the agent what happened recently.
- `AGENTS.md` tells the agent how to act.
- `raw/Source Index.md` tells the agent what sources exist and their status.

That makes the vault more agent-native than a normal folder of notes.

## Related Concepts

- [[wiki/Concepts/Agentic Engineering|Agentic Engineering]]
- [[wiki/Concepts/Software 3.0|Software 3.0]]
- [[wiki/Concepts/LLM Knowledge Systems|LLM Knowledge Systems]]

## Sources

- [[Andrej Karpathy From Vibe Coding to Agentic Engineering|Andrej Karpathy: From Vibe Coding to Agentic Engineering]]

## Open Questions

- What would make this Obsidian vault more agent-native?
- Which operations should be represented as CLI tools instead of prose instructions?
