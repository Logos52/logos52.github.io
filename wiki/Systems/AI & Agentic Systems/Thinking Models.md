---
type: concept
status: seed
created: 2026-05-02
updated: 2026-06-15
source-count: 2
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

## Always Want the Smartest Model

Naval's selection rule runs the other way from cost-optimization: intelligence is an unalloyed good, so given the leverage poured behind a decision — capital, code, marketing — you want the best judgment every time, and you stop asking the model you believe is weaker once you can't tell which answer is right. When a model errs you often don't notice, which is the argument against trading intelligence for price on consequential work.

The caveat comes from Vercel's gateway data: frontier intelligence at the right cost and latency wins most production traffic, but cheaper and open models earn their place on verifiable, high-volume tasks — support, browser automation — where a wrong answer is caught cheaply. This is the same fast-default / thinking-when-hard logic applied to model *choice* rather than reasoning depth: spend intelligence where verification is expensive, economize it where checks are cheap. See [[wiki/Concepts/The AI Industrial Revolution|The AI Industrial Revolution]].

## Related Concepts

- [[wiki/Concepts/Human vs AI Capability Lens|Human vs AI Capability Lens]] — the six-model snapshot graded on the five AI facets (which model to spend where).
- [[wiki/Domains/AI & Tooling/LLM Tool Use|LLM Tool Use]]
- [[wiki/Systems/AI & Agentic Systems/Context Engineering|Context Engineering]]
- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]]
- [[wiki/Concepts/The AI Industrial Revolution|The AI Industrial Revolution]]
- [[wiki/Concepts/Global Workspace and J-space|Global Workspace and J-space]] — an interpretability view of what extended reasoning does: engaging a deliberate workspace instead of a fast automatic response.

## Sources

- [[raw/sources/How I use LLMs|How I use LLMs]]
- [[raw/inbox/The AI Industrial Revolution|The AI Industrial Revolution]]

## Open Questions

- Which tasks in this wiki deserve a thinking model?
- Should lint passes use a thinking model by default?
