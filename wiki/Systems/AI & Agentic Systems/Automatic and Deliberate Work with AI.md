---
title: "Automatic and Deliberate Work with AI"
type: concept
status: developing
created: 2026-07-07
updated: 2026-09-11
written-by: grok
model: grok
source-count: 7
method: plain-rewrite-2026-09-11
prose-model: fable
aliases:
  - Thinking Models
merged-from:
  - Thinking Models
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

Drafting a sentence and constructing under several constraints at once are different jobs for a language model, and they take different models, budgets, and checks. Automatic work is the cheap pattern-matching: drafting readable text, recalling a fact, classifying, reformatting, extracting. Deliberate work is the step-building: multi-hop reasoning, inference from context, novel construction under several constraints. The operator's four jobs are to route the cheap work, spend budget and verification on the deliberate work, protect that small channel, and turn repeated deliberate work into procedures.

A thinking model is a language model, or a mode of one, that spends extra computation on the way to an answer. That extra time helps on hard checkable work: math, code, diagnosis. It wastes time on recall and chat. Fast-default and think-when-hard is the routing rule applied a second time. One dial is which model to ask. The other dial is reasoning depth. Both dials are set by one rule: spend intelligence where it changes the outcome and where verification is expensive, and economize it where a wrong answer is caught cheaply.

## Core takeaways

- Automatic work (fluent drafting, recall, classification, extraction, reformatting) goes to a cheap or local model with light checking. Deliberate work (multi-hop reasoning, inference from context, novel construction under many constraints) goes to a reasoning model with a budget, decomposed first and gated on the output.
- Stay on the fast model until the problem is hard or the first answer needs a second look. Extra thinking pays on difficult math and code, ambiguous technical diagnosis, and high-value decisions where a minute is cheap. It adds latency and nothing else on simple recall, basic ideation, low-stakes chat, and travel advice.
- Extra thinking time is test-time compute, trained with reinforcement learning on problems that have a right answer. It raises scores on that verifiable slice and does little elsewhere, so a non-thinking frontier model can still beat a thinking one on a given bug.
- One reasoning step carries one focal task and a few constraints. A cast sheet, a template, or a checker carries the rest. Fan-out across separate agents is the same move at scale.
- A deliberate output is checked against a test, a measured criterion, or an independent second pass. The model's explanation of its reasoning is a plausible account, not a faithful transcript, so the gate sits on the output.
- A deliberate move that repeats becomes a skill, a spec, a prompt template, or a checker. The deliberate reasoning that should be internalized stays with the person.

## The two modes and the route between them

Automatic work is cheap and fast. It is reliable enough that a cheap check catches the rest, when the pattern is in distribution. Deliberate work costs more time and more budget, and the channel that does it is small. Errors concentrate there. That pair is a routing heuristic, not a picture of the model's inner life.

| Mode | What it looks like | Operator move |
|---|---|---|
| Automatic | Fluent drafting, recall, classification, extraction, reformatting | Cheap or local model. Light or no verification. A private-file reformat still gets a glance. |
| Deliberate | Multi-hop reasoning, inference from context, novel construction under many constraints | Reasoning model with a budget. Gate the output. Decompose first. |

Each task sorts by whether it is pattern completion or genuine step-building, and goes to the cheapest model that clears the bar. A gloss, a reformat, a tone label, a vocabulary pull is automatic work: a small or local model does it about as well as a frontier one, with little checking. Authoring a leveled reading that has to hit a character floor while holding cast continuity and register is deliberate work. That task earns a stronger model, a thinking budget, and a gate on the result. The same spend-where-verification-is-expensive logic is [[wiki/Concepts/The AI Industrial Revolution|the verifier role]].

## When extra thinking pays

The operator rule is stay on the fast model until the problem is hard or the first answer needs a second look. A fast model, or non-thinking mode, is the low-latency generation with no extra reasoning budget. A verifiable task is one whose wrong answers are cheap to catch: a test, a compiler, a known quantity.

Thinking models are most effective on difficult problems in math and code. They also pay on ambiguous technical diagnosis and on high-value decisions where waiting is acceptable. Multi-step reasoning is close to that class, with a bound: some multi-step work is recall chained, and extra compute does not help recall.

One worked case. A gradient-check failed on a pack/unpack mismatch. A fast pass missed it. An extended-reasoning pass found it after about a minute. That is the shape: a fault a person can check, hidden in a step a fast pass skips.

Thinking models do not help, and they cost latency, on simple recall, travel advice, and low-stakes chat. Waiting a minute for a model to think about destinations is the sign of a wasted spend. Avoid four things: simple recall; basic ideation; low-stakes chat; any task where extra latency adds no value.

| Spend it | Do not |
|---|---|
| Difficult math and logic | Simple recall |
| Difficult code, including a hidden bug | Basic ideation |
| Ambiguous technical diagnosis | Low-stakes chat |
| High-value decisions when a minute is cheap | Travel advice, and anything else where waiting adds nothing |

## Why extra time helps, and where it does not

The extra compute is not a personality. It is test-time compute, trained with reinforcement learning on problems that have a right answer. That is why extra time helps at all: the labs built rewards on math and code, so more tokens at answer-time move those scores. Where they did not build rewards, the same dial does little.

That is the jaggedness. Thinking models peak on verifiable domains and stay rough everywhere else. They are not a general intelligence dial. They are a dial on the verifiable slice. A non-thinking frontier model can still beat a thinking one on a given bug. When the wait does not change a checkable answer, the task was not in the slice.

## Protect the deliberate channel

The deliberate channel is the small, capacity-limited slot in which step-building happens. Working memory holds about four chunks at once. A single deliberate step degrades the same way a learner does when too much lands at once. That analogy is the operator corollary. It is not a claim that the model has working memory. [[wiki/Concepts/Cognitive Load & What Mental Effort Is Trying to Cue|Cognitive Load]] is the limit this budgets against.

A prompt that stacks many novel constraints onto one reasoning step is the operator version of that overload. The repair is decomposition. Each step carries one focal task and a few constraints. Structure carries the rest: a fixed cast sheet, a template, a checker the agent writes against, rather than ten rules crammed into one instruction.

Fan-out is this move at scale: separate agents, each holding a small load. It is the same decompose-to-one-focal-task rule, not a second subject. [[wiki/Systems/AI & Agentic Systems/Context Engineering|Context Engineering]] is the same protection from the other side: managing the window is managing the deliberate channel.

## Check outputs, not the model's account of its reasoning

**Deliberate outputs get checked against something external, not against the model's explanation of its reasoning.** The steps of a practiced skill are not reliably reportable, in people or in models. Verbal reports of process are often confabulated. Asking a model to explain its reasoning returns a plausible account, not a faithful transcript of what it did. Chain-of-thought is often unfaithful to the computation that produced the answer, including on reasoning models. That is why the gate sits on the output.

The external check is a test, a measured criterion, or a second pass that re-derives the answer independently. Errors concentrate in the deliberate lane, so the gate belongs there. Corpus measurement, example checks, and transcribe-back audio QA are all this move. They are how the gate is recognised, not a third subject.

## Where verification is expensive

One choice-layer claim: judgment is worth buying at the top of the market when the decision sits in front of capital, code, or a public message. That is not the definition of thinking models as a class. It is a rule about when the class, or the strongest model, is worth the wait.

The reason is not taste. At the moment a person can no longer tell which of two answers is right, the cheaper model no longer saves anything, because a miss on consequential work is often invisible. That is why trading intelligence for price fails in the roles where a person cannot check.

The other half of the same rule: cheaper and open models earn their place on high-volume work a test can catch, support and browser automation among it, where a wrong answer is cheap to see. One production gateway reports that frontier intelligence at the right cost and latency still wins most of its traffic. That is one gateway's mix, dated, not a census of the industry.

Which model to spend where, by facet, is [[wiki/Concepts/Human vs AI Capability Lens|Human vs AI Capability Lens]]. The Naval/Rauch tension, always-smartest against cheap-where-caught, lives on [[wiki/Concepts/The AI Industrial Revolution|The AI Industrial Revolution]].

## Turn repeated deliberate work into procedures, and keep what you want to own

Deliberate work becomes automatic through practice. That is proceduralization: a repeated reasoning move extracted into a reusable artifact so it is not re-derived. The operator does it by hand. The four artifact types are a skill, a spec, a prompt template, and a checker. [[wiki/Concepts/Agent-Native Infrastructure|Agent-Native Infrastructure]] is where those repeated moves become reusable. The culture half of that extraction is the "train the agent" shift on [[wiki/Concepts/The AI Industrial Revolution|The AI Industrial Revolution]].

Having the agent restate a rule in its own words before it acts is a cheaper related move, not the same finding. Articulation strengthening a skill is old cognitive science about people. A model restating a rule is a load-check that the rule was loaded. It is not skill-acquisition, and it is not a substitute for the checker. A reader who paraphrases ten rules and skips the checker has followed the cheap move and still has no procedure.

Once a skill runs without the workspace, the person doing it can no longer say how its steps go. [[wiki/Concepts/Four Stages of Competence|Four Stages of Competence]] is that climb to unconscious competence. Offloading a piece of thinking to the model means that skill is not built. [[wiki/Domains/AI & Tooling/The Right vs Wrong Way to Work With AI|The Right vs Wrong Way to Work With AI]] is why the encoding gets skipped. [[wiki/Concepts/Understanding Bottleneck|Understanding Bottleneck]] is the keep-rule: the deliberate work that should stay owned. [[wiki/Concepts/Human vs AI Capability Lens|Human vs AI Capability Lens]] grades which work to route, keep, or hand off.

Hand off the automatic toil. Keep the deliberate reasoning that needs to be internalized.

## What the split is not, and what is actually known

The split is a routing heuristic, not a description of what the model is. Many real tasks blend the two modes. Some automatic-looking tasks hide a deliberate step. Some elaborate-looking ones collapse to recall. Classifying a task's mode is itself a judgment that can go wrong.

The safe error is to treat a task as deliberate and verify it. The exception is a wrong answer caught by a script in seconds: that batch routes automatic even if the mode is ambiguous. A two-hundred-item reformat does not earn a reasoning model.

Capability rises, and last year's deliberate task starts completing as pattern-matching. The routing table has to be reopened when that happens. No vendor tier is "the" reasoning model. A 2025 vendor picture that treated thinking models as one lab's product line is already false.

More thinking tokens are not always better. Overthinking can hurt on easy items. Tools are a different axis from thinking: [[wiki/Domains/AI & Tooling/LLM Tool Use|LLM Tool Use]]. Shaping the window is not the same as extra compute: [[wiki/Systems/AI & Agentic Systems/Context Engineering|Context Engineering]].

The case against treating thinking models as a dial to turn all the way up: extra compute is a dial on the verifiable slice; a non-thinking frontier model can still win a given bug; overthinking can hurt; traces are not a window onto the work; the 2025 one-lab picture is already false.

The vocabulary, working memory and fast and slow, is borrowed from human cognition. A model is not a dual-process mind. Dual-process theories are contested even for humans. The moves rest on that cognitive science, and on nothing any interpretability paper had to discover. [[wiki/Concepts/Global Workspace and J-space|Global Workspace and J-space]] is the interpretability paper that prompted the split, and the place for an interpretability view of extended reasoning. The moves owe nothing to its findings. The value is in the operating moves, not in any claim about the model's inner life.

## Price, quit signals, and what to expect

The price of the split is a stronger model and a gate on deliberate work, the time spent decomposing, and the skill that goes unbuilt when thinking is offloaded. The price of extra thinking is latency, counted in minutes, and the hosted meter on reasoning tokens.

Two sessions of treating a script-checkable batch as deliberate is a quit signal. So is accepting narration as the check. Quit extra thinking if you are waiting a minute on travel advice or recall. Quit if a second thinking pass does not change the answer on a checkable item. Quit if thinking models are being used as a personality upgrade on taste-bound work.

The checkable expectation is a deliberate task gated on an external check, and a repeated move extracted into an artifact within a week of the third time it appears. On the next hard debug or proof, the extended-reasoning pass either finds a fault the fast pass missed, or it does not. If it does not twice in a row, the task was not in the verifiable slice.

Extra time is a dial on the verifiable slice. It is not a personality and not a general upgrade. Stay fast until the work is hard, or until the first answer is not enough. Automatic and deliberate together are still the whole of the work. What survives practice is the last decision: which deliberate work is kept.

## How to practice this

1. Sort each task as pattern completion or step-building before sending it. Send a gloss, a reformat, or a tone label to a small or local model. Notice it comes back about as good as from a frontier model.
2. Stay on the fast model until the problem is hard or the first answer needs a second look. On the next hard debug, run an extended-reasoning pass. Notice whether it finds a fault the fast pass missed.
3. Give each reasoning step one focal task and a few constraints. Put the rest in a cast sheet, a template, or a checker. Notice the step stops degrading when less lands on it at once.
4. Gate every deliberate output on a test, a measured criterion, or an independent second pass. Notice the model's explanation of its reasoning reads as plausible either way.
5. The third time a deliberate move repeats, write it as a skill, a spec, a prompt template, or a checker within a week. Notice the move is no longer re-derived.
6. When a minute of thinking passes on travel advice or recall, switch back to the fast model. Notice the answer does not change.

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

## Open questions

- Which recurring tasks are routed wrong?
- Where does the automatic / deliberate boundary sit today?
- Which repeated deliberate moves have not been turned into a skill, a spec, or a checker?
- What is being offloaded that should be kept?
- Which tasks in this wiki deserve a thinking model?
- Should lint passes use a thinking model by default?

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
