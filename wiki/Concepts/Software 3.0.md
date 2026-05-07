---
type: concept
status: seed
created: 2026-05-02
updated: 2026-05-02
source-count: 1
last-audited:
tags:
  - llm
  - software
  - prompting
---

# Software 3.0

Software 3.0 is the idea that natural-language context and prompts become a programming medium for LLM interpreters.

## Summary

In Software 1.0, humans write explicit code. In Software 2.0, behavior is learned in neural network weights. In Software 3.0, a human supplies context, instructions, examples, files, and constraints to an LLM that interprets that context and acts in the digital environment.

## Why It Matters

The unit of leverage shifts from exact code to effective context. A good instruction to an agent can replace a long shell script or manual setup guide because the agent can inspect the environment, adapt, run commands, and debug.

For this wiki, `AGENTS.md`, `notes/index.md`, and `log.md` are Software 3.0 artifacts: they are not application code, but they program future LLM behavior.

## Related Concepts

- [[wiki/Concepts/Agentic Engineering|Agentic Engineering]]
- [[wiki/Techniques/Context Engineering|Context Engineering]]
- [[wiki/Concepts/LLM Knowledge Systems|LLM Knowledge Systems]]

## Sources

- [[Andrej Karpathy From Vibe Coding to Agentic Engineering|Andrej Karpathy: From Vibe Coding to Agentic Engineering]]

## Open Questions

- What parts of this repo are best thought of as Software 3.0 instructions?
- How should prompts, specs, and agent instructions be versioned?
