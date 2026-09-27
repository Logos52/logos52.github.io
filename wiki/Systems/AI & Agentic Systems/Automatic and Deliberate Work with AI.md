---
title: "Automatic and Deliberate Work with AI"
type: concept
status: developing
created: 2026-07-07
updated: 2026-09-27
written-by: opus
model: grok
source-count: 7
method: outline-2026-09-27
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

# Automatic and Deliberate Work with AI

Some work with a language model is pattern matching: drafting, recalling, classifying, reformatting, extracting. Other work is building steps: chaining one inference to the next, or constructing something under several constraints at once. Sorting a task as one or the other decides which model to use, whether to pay for extra thinking time, and how the answer gets checked.

## Core takeaways

- Sort each task first: pattern matching or step building.
- Pattern matching gets the cheapest model whose output passes a check.
- Step building gets a stronger model, thinking time and a final check.
- Check from outside the model, never by its own account of its reasoning.
- One focal task and a few constraints per call.
- A move that comes up a third time becomes a reusable file.
- Keep the step building you want to learn yourself.

## How to route

Pattern-matching tasks are called automatic here, and step-building tasks deliberate. The quickest test is whether a script or a test can check the output in seconds. If it can, the task is automatic even when it looks hard, and it goes to the cheapest model that passes. If it cannot, the task is deliberate, and it gets a strong model, a budget of thinking time, and a gate that holds the output back until a check passes. Start on the fast model, and switch to a thinking model, one that spends extra computation before it answers, when the task is hard and checkable or when the first answer looks weaker than it should.

```
task --> can a script check it in seconds?
           | yes                  | no
           v                      v
     automatic:             deliberate:
     cheapest model         strong model,
     that passes            thinking budget
           |                      |
           v                      v
     cheap check            check before use
```

- Automatic: a gloss, a reformat, a tone label, a cleanup of 200 items.
  - Errors are rare on ordinary input, and a cheap check catches them.
  - These never go to a thinking model.
- Deliberate: multi-step inference, or a diagnosis with no obvious cause.
  - A passage that keeps a word list, continuity and one tone is deliberate.
  - Most errors happen in deliberate tasks.

## Thinking models

A thinking model spends extra computation before it answers. It was trained by reinforcement learning on maths and code problems with checkable answers, so that is where it helps: hard maths, code, technical diagnosis. The cost is a wait, usually a minute or more, plus a charge for the reasoning tokens, the units of text the model generates while it thinks.

- It adds nothing on recall, travel advice or casual chat.
- On easy items it can do worse than the fast model.
- A fast model can still beat a thinking model on a bug.
- Thinking time is one lever, and which model is the other.

The check decides where the money goes. When two models disagree and no check exists, the cheaper model saved nothing, because nobody sees the wrong answer, so the smartest model belongs wherever a wrong answer is expensive to catch. Where a wrong answer is cheap to catch, such as support replies or browser automation, a cheaper model does the job.

## Keeping each call small

Human working memory holds about four chunks at once, and a single deliberate step in a model degrades under load in a similar way. Ten constraints stacked into one prompt produce a step that quietly drops some of them. The fix is to split the work: one focal task and a few constraints per call, with a template, a character sheet or a checker carrying the rest. Running the same small step many times in parallel is the same fix at a larger scale.

- A move repeated three times becomes a skill, spec, template or checker.
- Make that file within a week.
- Asking the model to restate the rule shows whether it is overloaded.
- Restating does not build the skill or replace the checker.

## The model's own account

People cannot report the steps of a skill they have automated, and their verbal accounts are often made up after the fact. A model's written chain of thought has the same problem. In one 2023 study, reordering answer options so the right one was always first cut accuracy by up to 36 percent across 13 tasks, and the written reasoning never mentioned the reordering. A thinking model's written reasoning has the same problem.

- Larger models gave reasoning that drove the answer less, on most tasks studied.
- Use a test, a stated criterion or an independent second pass instead.

## Where it fails

Tasks blend, and the sort can be wrong. The safe error is to call a task deliberate, unless a script can check it in seconds. The labels come from the two-system account of human thought, which is contested even for humans, and here they are only a routing rule that says nothing about what happens inside the model.

- Two sessions treating script-checkable work as deliberate: re-sort.
- Accepting the model's own account as a check: re-sort.
- When models get better, reopen the routing.
- Handing off every deliberate step means the person never learns it.

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
