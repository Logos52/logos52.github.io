---
title: "Automatic and Deliberate Work with AI"
type: concept
status: developing
created: 2026-07-07
updated: 2026-08-14
written-by: grok
model: grok
source-count: 7
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
---

# Automatic and Deliberate Work with AI

Drafting a sentence and constructing under several constraints at once are different jobs for a language model, and they take different models, budgets, and checks. Automatic work is the cheap pattern-matching: drafting readable text, recalling a fact, classifying, reformatting, extracting. Deliberate work is the step-building: multi-hop reasoning, inference from context, novel construction under several constraints. The operator's four jobs are to route the cheap work, spend budget and verification on the deliberate work, protect that small channel, and turn repeated deliberate work into procedures.

## The two modes, and the route

Automatic work is cheap and fast. It is reliable enough that a cheap check catches the rest, when the pattern is in distribution. Deliberate work costs more time and more budget, and the channel that does it is small. Errors concentrate there. That pair is a routing heuristic, not a picture of the model's inner life.

| Mode | What it looks like | Operator move |
|---|---|---|
| Automatic | Fluent drafting, recall, classification, extraction, reformatting | Cheap or local model. Light or no verification — a private-file reformat still gets a glance. |
| Deliberate | Multi-hop reasoning, inference from context, novel construction under many constraints | Reasoning model with a budget. Gate the output. Decompose first. |

Each task sorts by whether it is pattern completion or genuine step-building, and goes to the cheapest model that clears the bar. A gloss, a reformat, a tone label, a vocabulary pull is automatic work: a small or local model does it about as well as a frontier one, with little checking. Authoring a leveled reading that has to hit a character floor while holding cast continuity and register is deliberate work. That task earns a stronger model, a thinking budget, and a gate on the result. Intelligence gets spent where it changes the outcome, and economized where a wrong answer is caught cheaply. [[wiki/Systems/AI & Agentic Systems/Thinking Models|Thinking Models]] is when to spend the reasoning budget the deliberate lane needs. The same spend-where-verification-is-expensive logic is [[wiki/Concepts/The AI Industrial Revolution|the verifier role]].

## Protect the deliberate channel

The deliberate channel is the small, capacity-limited slot in which step-building happens. Working memory holds about four chunks at once. A single deliberate step degrades the same way a learner does when too much lands at once. That analogy is the operator corollary. It is not a claim that the model has working memory. [[wiki/Concepts/Cognitive Load & What Mental Effort Is Trying to Cue|Cognitive Load]] is the limit this budgets against.

A prompt that stacks many novel constraints onto one reasoning step is the operator version of that overload. The repair is decomposition. Each step carries one focal task and a few constraints. Structure carries the rest: a fixed cast sheet, a template, a checker the agent writes against, rather than ten rules crammed into one instruction.

Fan-out is this move at scale: separate agents, each holding a small load. It is the same decompose-to-one-focal-task rule, not a second subject. [[wiki/Systems/AI & Agentic Systems/Context Engineering|Context Engineering]] is the same protection from the other side: managing the window is managing the deliberate channel.

## Outputs, not narration

**Deliberate outputs get checked against something external, not against the model's explanation of its reasoning.** The steps of a practiced skill are not reliably reportable, in people or in models. Verbal reports of process are often confabulated. Asking a model to explain its reasoning returns a plausible account, not a faithful transcript of what it did. Chain-of-thought is often unfaithful to the computation that produced the answer, including on reasoning models. That is why the gate sits on the output.

The external check is a test, a measured criterion, or a second pass that re-derives the answer independently. Errors concentrate in the deliberate lane, so the gate belongs there. Corpus measurement, example checks, and transcribe-back audio QA are all this move. They are how the gate is recognised, not a third subject.

## Proceduralize, and keep what you want

Deliberate work becomes automatic through practice. That is proceduralization: a repeated reasoning move extracted into a reusable artifact so it is not re-derived. The operator does it by hand. The four artifact types are a skill, a spec, a prompt template, and a checker. [[wiki/Concepts/Agent-Native Infrastructure|Agent-Native Infrastructure]] is where those repeated moves become reusable. The culture half of that extraction is the "train the agent" shift on [[wiki/Concepts/The AI Industrial Revolution|The AI Industrial Revolution]].

Having the agent restate a rule in its own words before it acts is a cheaper cousin, not the same finding. Articulation strengthening a skill is old cognitive science about people. A model restating a rule is a load-check that the rule was loaded. It is not skill-acquisition, and it is not a substitute for the checker. A reader who paraphrases ten rules and skips the checker has followed the cheap move and still has no procedure.

Automaticity hides its own steps. Once a skill runs without the workspace, the person doing it can no longer say how. [[wiki/Concepts/Four Stages of Competence|Four Stages of Competence]] is that climb to unconscious competence. Offloading a piece of thinking to the model means that skill is not built. [[wiki/Domains/AI & Tooling/The Right vs Wrong Way to Work With AI|The Right vs Wrong Way to Work With AI]] is why the encoding gets skipped. [[wiki/Concepts/Understanding Bottleneck|Understanding Bottleneck]] is the keep-rule: the deliberate work that should stay owned. [[wiki/Concepts/Human vs AI Capability Lens|Human vs AI Capability Lens]] grades which work to route, keep, or hand off.

The last move is the one that ties this page to the rest of the vault. Hand off the automatic toil. Keep the deliberate reasoning that actually needs to be internalized.

## What the split is not

The split is a routing heuristic, not a description of what the model is. Many real tasks blend the two modes. Some automatic-looking tasks hide a deliberate step. Some elaborate-looking ones collapse to recall. Classifying a task's mode is itself a judgment that can go wrong.

The safe error is to treat a task as deliberate and verify it. The exception is a wrong answer caught by a script in seconds: that batch routes automatic even if the mode is ambiguous. A two-hundred-item reformat does not earn a reasoning model.

Capability rises, and last year's deliberate task starts completing as pattern-matching. The routing table has to be reopened when that happens. No vendor tier is "the" reasoning model on this page.

The vocabulary — working memory, fast and slow — is borrowed from human cognition. A model is not a dual-process mind. Dual-process theories are contested even for humans. The page stands on that cognitive science, and on nothing any interpretability paper had to discover. [[wiki/Concepts/Global Workspace and J-space|Global Workspace and J-space]] is the paper that prompted this page. The moves owe nothing to its findings. The value is in the operating moves, not in any claim about the model's inner life.

The price of the split is a stronger model and a gate on deliberate work, the time spent decomposing, and the skill refused to the offload. Two sessions of treating a script-checkable batch as deliberate is a quit signal. So is accepting narration as the check. The checkable expectation is a deliberate task gated on an external check, and a repeated move extracted into an artifact within a week of the third time it appears.

The two kinds are still the whole. What survives practice is the last decision: which deliberate work is kept.

## Related

- [[wiki/Systems/AI & Agentic Systems/Thinking Models|Thinking Models]] — when to spend the reasoning budget the deliberate lane needs
- [[wiki/Concepts/Human vs AI Capability Lens|Human vs AI Capability Lens]] — which work to route, keep, or hand off
- [[wiki/Systems/AI & Agentic Systems/Context Engineering|Context Engineering]] — managing the context is managing the deliberate channel
- [[wiki/Concepts/Cognitive Load & What Mental Effort Is Trying to Cue|Cognitive Load]] — the working-memory limit this budgets against
- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]] — the hub this routing serves
- [[wiki/Concepts/Agent-Native Infrastructure|Agent-Native Infrastructure]] — where repeated moves become reusable artifacts
- [[wiki/Concepts/The AI Industrial Revolution|The AI Industrial Revolution]] — the train-the-agent shift
- [[wiki/Domains/AI & Tooling/The Right vs Wrong Way to Work With AI|The Right vs Wrong Way to Work With AI]] — why offloading thinking skips the encoding
- [[wiki/Concepts/Understanding Bottleneck|Understanding Bottleneck]] — keep the deliberate work you want to own
- [[wiki/Concepts/Declarative, Procedural, and Conditional Knowledge|Declarative, Procedural, and Conditional Knowledge]] — the split as knowledge types
- [[wiki/Concepts/Four Stages of Competence|Four Stages of Competence]] — proceduralization as the climb to unconscious competence
- [[wiki/Concepts/Global Workspace and J-space|Global Workspace and J-space]] — the interpretability paper that prompted this page; the moves owe nothing to its findings

## Open Questions

- Which recurring tasks are routed wrong?
- Where does the automatic / deliberate boundary sit today?
- Which repeated deliberate moves have not been turned into a skill, a spec, or a checker?
- What is being offloaded that should be kept?

## Sources

- Daniel Kahneman, *Thinking, Fast and Slow* (2011). The popular System 1 / System 2 framing. The labels are earlier (Stanovich and West, 2000).
- Walter Schneider and Richard Shiffrin, "Controlled and automatic human information processing," *Psychological Review* 84 (1977).
- Nelson Cowan, "The magical number 4 in short-term memory: A reconsideration of mental storage capacity," *Behavioral and Brain Sciences* 24, no. 1 (2001).
- John Anderson, "Acquisition of cognitive skill," *Psychological Review* 89 (1982); ACT-R thereafter.
- Miles Turpin, Miles Michael, Ethan Perez, and Samuel R. Bowman, "Language Models Don't Always Say What They Think," arXiv:2305.04388 (2023).
- Tamera Lanham et al., "Measuring Faithfulness in Chain-of-Thought Reasoning," arXiv:2307.13702 (2023).
- Yanda Chen et al., "Reasoning Models Don't Always Say What They Think," Anthropic (2025).
