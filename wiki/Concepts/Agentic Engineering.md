---
type: concept
status: seed
created: 2026-05-02
updated: 2026-05-06
source-count: 5
last-audited:
tags:
  - llm
  - agents
  - engineering
  - software-3
---

# Agentic Engineering

Agentic engineering is the discipline of coordinating LLM agents to do useful work faster without giving up the quality bar expected of professional engineering.

## Summary

Karpathy distinguishes vibe coding from agentic engineering. Vibe coding raises the floor: more people can create software by delegating implementation to an agent. Agentic engineering raises the ceiling: skilled operators use agents while preserving correctness, security, maintainability, taste, and system design.

The core shift is not "the agent writes code." It is that the human increasingly writes the spec, shapes the context, sets the evaluation criteria, supervises execution, and verifies the result.

The newer Naval sources sharpen this into an agency frame. AI can accelerate implementation, learning, and coordination, but it does not supply desire, taste, mission, or responsibility. The human remains the rider of the motorcycle.

## Working Model

Agents are powerful but jagged. They can produce large, coherent chunks of work, but they still make strange mistakes around identity, architecture, security, taste, and unstated invariants.

The human remains responsible for:

- Spec clarity.
- System design.
- Quality bar.
- Taste and aesthetics.
- Security and correctness.
- Verification strategy.
- Understanding what is being built and why.

The agent increasingly handles:

- Boilerplate.
- API details.
- Multi-file edits.
- Local commands.
- Repetitive implementation.
- First-pass debugging.
- Translation from intent into concrete code.

## Implication For This Wiki

This vault itself should be treated as an agentic engineering environment. The LLM maintains files, links, indexes, logs, and summaries, but the human directs the research taste:

- Which sources matter?
- What questions are worth asking?
- What concepts deserve pages?
- Which synthesis feels true and useful?
- What should be public?

## Failure Modes

- Trusting output because it "works" without understanding why.
- Letting agents create bloated, brittle abstractions.
- Losing track of system invariants.
- Confusing fast implementation with good engineering.
- Asking vague prompts when the agent needed a precise spec.
- Publishing generated work without source and privacy review.

## Related Concepts

- [[wiki/Concepts/Vibe Coding|Vibe Coding]]
- [[wiki/Concepts/Software 3.0|Software 3.0]]
- [[wiki/Concepts/Agent-Native Infrastructure|Agent-Native Infrastructure]]
- [[wiki/Concepts/LLM Knowledge Systems|LLM Knowledge Systems]]
- [[wiki/Concepts/A Motorcycle for the Mind|A Motorcycle for the Mind]]
- [[wiki/Concepts/A Return to Code|A Return to Code]]
- [[wiki/Concepts/Nothing Ever Happens Is Over|Nothing Ever Happens Is Over]]
- [[wiki/Techniques/Context Engineering|Context Engineering]]
- [[wiki/Concepts/Understanding Bottleneck|Understanding Bottleneck]]

## Sources

- [[Andrej Karpathy From Vibe Coding to Agentic Engineering|Andrej Karpathy: From Vibe Coding to Agentic Engineering]]
- [[How I use LLMs|How I use LLMs]]
- [[raw/sources/A Motorcycle for the Mind|A Motorcycle for the Mind]]
- [[raw/sources/A Return to Code|A Return to Code]]
- [[raw/sources/‘Nothing Ever Happens’ Is Over|Nothing Ever Happens Is Over]]

## Open Questions

- What does a personal checklist for agentic engineering quality look like?
- Which tasks in this wiki can be safely delegated to agents, and which require human taste?
- How should agent-generated wiki edits be reviewed before committing?
