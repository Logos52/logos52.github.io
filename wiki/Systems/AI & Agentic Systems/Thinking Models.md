---
type: concept
status: seed
created: 2026-05-02
updated: 2026-05-02
source-count: 1
last-audited:
tags:
  - llm
  - reasoning
  - models
---

# Thinking Models

Some LLMs improve difficult-task performance by spending more internal computation on problems such as math, coding, and logic.

## Summary

Karpathy's practical advice is to use fast models by default, then switch to a thinking/reasoning model when the problem is hard or the first answer needs deeper work.

## When To Use

Use thinking models for:

- Debugging difficult code.
- Math and logic.
- Multi-step reasoning.
- Ambiguous technical diagnosis.
- High-value decisions where latency is acceptable.

Avoid them for:

- Simple recall.
- Basic ideation.
- Low-stakes chat.
- Tasks where extra latency adds no value.

## Related Concepts

- [[wiki/Concepts/LLM Tool Use|LLM Tool Use]]
- [[wiki/Techniques/Context Engineering|Context Engineering]]
- [[wiki/Concepts/Agentic Engineering|Agentic Engineering]]

## Sources

- [[How I use LLMs|How I use LLMs]]

## Open Questions

- Which tasks in this wiki deserve a thinking model?
- Should lint passes use a thinking model by default?
