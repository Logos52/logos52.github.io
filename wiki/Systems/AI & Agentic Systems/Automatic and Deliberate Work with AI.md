---
title: "Automatic and Deliberate Work with AI"
type: concept
status: developing
created: 2026-07-07
updated: 2026-09-24
written-by: fable
model: grok
source-count: 7
method: outline-2026-09-24
prose-model: fable
aliases:
  - Thinking Models
merged-from:
  - Thinking Models
description: "Sorting AI tasks into cheap pattern work and costly step building, and what that decides about model choice, thinking time and checking."
tags:
  - llm
  - dual-process
  - ai-workflows
  - agentic-engineering
  - operating
  - cognition
  - working-memory
  - verification
  - operator
  - reasoning
  - models
---

# Automatic and Deliberate Work with AI

Some work with a language model is pattern matching: drafting, recalling, classifying, reformatting, extracting. Some work is building steps: chaining inferences, or constructing something under several constraints at once. Sorting a task as pattern matching or step building decides which model to use, whether to pay for extra thinking time, and how the answer gets checked.

## Core takeaways

- Sort each task first: pattern completion or step building. Pattern completion gets the cheapest model whose output passes the check. Step building gets a stronger model, a thinking budget and a check at the end.
- Start on the fast model. Switch to a thinking model when the task is hard and checkable, or when the first answer looks weaker than it should.
- Check outputs from outside: a test, a stated criterion, or an independent second pass. The model's account of its own reasoning is not a check.
- Give the model one focal task and a few constraints per call. Put the other constraints into a template or a checker.
- When a move comes up a third time, turn it into an artifact: a skill, a spec, a prompt template or a checker, within a week.
- Keep the deliberate reasoning you want to learn. Hand off the repetitive work.

## How to route

- Automatic work
  - A gloss, a reformat, a tone label, a vocabulary pull, a two-hundred-item cleanup.
  - Cheap and fast. Errors are rare on ordinary input and a cheap check catches them.
  - Never a reasoning model. If a script can check the output in seconds, the task is automatic even when it looks hard.
- Deliberate work
  - Multi-hop inference, a diagnosis with no obvious cause, a passage that must hold a word list, continuity with earlier passages and one register at once.
  - Costs more, and this is where errors gather. Gate it: the output does not pass until the check passes.
- Thinking models
  - A thinking model spends extra computation before it answers. It was trained by reinforcement learning on math and code problems with checkable answers, so that is where it helps: hard math, code, technical diagnosis.
  - The price is a wait, usually a minute or more, plus a meter on the reasoning tokens.
  - It adds nothing on recall, travel advice or casual chat. On easy items it can do worse than the fast model.
  - A fast model can still beat a thinking model on a bug. Thinking time is one lever, and which model is the other.
- The check
  - When two models disagree and no check exists, the cheaper model saved nothing, because nobody sees the wrong answer. That argues for the smartest model wherever a wrong answer is expensive to catch.
  - Where a wrong answer is cheap to catch, such as support replies or browser automation, cheaper models earn their place.

```
task ──► can a script or test check it in seconds?
            │ yes                     │ no
            ▼                         ▼
      automatic: cheapest       deliberate: strong model,
      model that passes         thinking budget, gate
            │                         │
            ▼                         ▼
      cheap external check      external check before use
```

## Protecting the channel

Human working memory holds about four chunks at once, and a single deliberate step in a model degrades under load the way a learner does. Stacking ten constraints into one prompt is overload, and the result is a step that silently drops some of them. The fix is to decompose: one focal task and a few constraints per call, with a template, a cast sheet or a checker carrying the rest. Running the same small move many times in parallel is the same fix at scale.

## Why the narration is not a check

- Skill steps in humans are not reportable, and verbal reports of them are often made up after the fact. The same holds for a model's chain of thought.
- Reordering the answer options in a prompt so the right answer was always the first one cut accuracy by up to 36 percent on 13 tasks, and the models' written reasoning never mentioned the reordering (Turpin et al. 2023).
- Larger models gave reasoning that drove the answer less, on most tasks studied (Lanham et al. 2023). Reasoning models are not exempt.
- Asking the model to restate the rule tells you whether it is overloaded. It does not build the skill and it does not replace the checker.

## Where it fails

- Tasks blend. The sort can be wrong. The safe error is to call a task deliberate, unless a script can check it in seconds.
- Two sessions in a row treating script-checkable work as deliberate is the signal to re-sort.
- Accepting the model's narration as a check is the other signal.
- When model capability rises, the routing is reopened. No vendor tier is fixed.
- The words come from the two-system account of human thought, which is contested even for humans. Here they are a routing rule, not a claim about what happens inside the model.
- Handing off every deliberate step means the skill never gets built in the person doing the handing off.

## Related pages

- [[wiki/Concepts/Human vs AI Capability Lens|Human vs AI Capability Lens]]: which work to route, keep, or hand off, and which model to spend where, by facet
- [[wiki/Systems/AI & Agentic Systems/Context Engineering|Context Engineering]]: managing the context is managing the deliberate channel; window-shaping is not the same as extra compute
- [[wiki/Concepts/Cognitive Load & What Mental Effort Is Trying to Cue|Cognitive Load]]: the working-memory limit this budgets against
- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]]: the hub this routing serves
- [[wiki/Concepts/Agent-Native Infrastructure|Agent-Native Infrastructure]]: where repeated moves become reusable artifacts
- [[wiki/Concepts/The AI Industrial Revolution|The AI Industrial Revolution]]: the train-the-agent shift, and Naval vs Rauch: spend intelligence where verification is expensive
- [[wiki/Domains/AI & Tooling/The Right vs Wrong Way to Work With AI|The Right vs Wrong Way to Work With AI]]: why offloading thinking skips the encoding
- [[wiki/Concepts/Understanding Bottleneck|Understanding Bottleneck]]: keep the deliberate work you want to own
- [[wiki/Concepts/Declarative, Procedural, and Conditional Knowledge|Declarative, Procedural, and Conditional Knowledge]]: the split as knowledge types
- [[wiki/Concepts/Four Stages of Competence|Four Stages of Competence]]: proceduralization as the climb to unconscious competence
- [[wiki/Domains/AI & Tooling/LLM Tool Use|LLM Tool Use]]: tools are a different axis from thinking
- [[wiki/Concepts/Global Workspace and J-space|Global Workspace and J-space]]: the interpretability paper that prompted this page, and an interpretability view of extended reasoning; the moves owe nothing to its findings

## Sources

- Daniel Kahneman, *Thinking, Fast and Slow* (2011). The popular System 1 / System 2 framing. The labels are earlier (Stanovich and West, 2000).
- Walter Schneider and Richard Shiffrin, "Controlled and automatic human information processing," *Psychological Review* 84 (1977).
- Nelson Cowan, "The magical number 4 in short-term memory: A reconsideration of mental storage capacity," *Behavioral and Brain Sciences* 24, no. 1 (2001).
- John Anderson, "Acquisition of cognitive skill," *Psychological Review* 89 (1982); ACT-R thereafter.
- Miles Turpin, Miles Michael, Ethan Perez, and Samuel R. Bowman, "Language Models Don't Always Say What They Think," arXiv:2305.04388 (2023).
- Tamera Lanham et al., "Measuring Faithfulness in Chain-of-Thought Reasoning," arXiv:2307.13702 (2023).
- Yanda Chen et al., "Reasoning Models Don't Always Say What They Think," Anthropic (2025).
- Andrej Karpathy, [How I use LLMs](https://www.youtube.com/watch?v=EWvNQjAaOHw), ~23:07–30:28. Fast-default / think-when-hard, the travel-advice tell, the gradient-check case.
- [[wiki/Concepts/The AI Industrial Revolution|The AI Industrial Revolution]]: Naval's always-smartest and Rauch's cheap-where-caught.
- Daya Guo et al., [DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning](https://arxiv.org/abs/2501.12948), arXiv:2501.12948, 2025.
- OpenAI, [o1 System Card](https://openai.com/index/openai-o1-system-card/), December 2024.
- Charlie Snell et al., [Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Model Parameters](https://arxiv.org/abs/2408.03314), arXiv:2408.03314, 2024.
