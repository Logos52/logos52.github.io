---
type: technique
status: stable
created: 2026-05-22
source-count: 1
tags:
  - ai-agentic
  - memory
  - systems
---

# Gbrain and Lossless - Persistent Knowledge Across Conversations and Recoverable History

Gbrain and Lossless are two complementary memory layers that sit outside (or alongside) the raw context window.

**Gbrain** provides queryable, persistent organizational knowledge across conversations (people, projects, decisions, policies, and how they connect).

**Lossless** provides recoverable raw history within the current conversation after the runtime has compressed or summarized earlier turns.

Together they turn an agent from a diligent but amnesiac intern into something closer to a coworker who knows how the organization actually runs and remembers where a conversation left off.

## Why These Layers Matter

Larger context windows alone do not solve the real memory problems agents face. They make the immediate desk bigger, but they do not give the agent a wiki or a recording.

Gbrain and Lossless address the two temporal scopes where memory usually breaks:
- Across conversations and agent instances (Gbrain)
- Within long conversations after compression (Lossless)

## Integration

- **Lossless** plugs into the runtime’s context engine slot (e.g. lossless-claw for OpenClaw, lossless-hermes-py for Hermes).
- **Gbrain** lives outside the runtime as a searchable index over a markdown knowledge base. The agent reaches it via CLI, MCP, skills, or plugins before acting.

See also the broader [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]] section.