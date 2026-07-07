---
title: "Automatic and Deliberate Work with AI"
type: model
status: seed
created: 2026-07-07
updated: 2026-07-07
source-count: 4
tags:
  - llm
  - agentic-engineering
  - operating
  - cognition
  - working-memory
  - verification
  - operator
---

<div class="hub-page-title">
<i class="ti ti-adjustments-horizontal" style="color:#c8743a"></i>
<h1>Automatic and Deliberate Work with AI</h1>
</div>

Treat a language model as running two kinds of work, and operate each one differently. **Automatic work** is pattern completion the model has practiced to fluency: drafting readable text, recalling a fact, classifying, reformatting, extracting. It is cheap, fast, and reliable. **Deliberate work** is anything built in steps: multi-hop reasoning, inference from context, novel construction under several constraints at once. It is slower, more expensive, capacity-limited, and where errors concentrate. The operator's job is matching the work to the mode: routing cheap work to cheap models, spending reasoning budget and verification on the deliberate work, protecting the small deliberate channel from overload, and turning the deliberate work you repeat into procedures. This is Kahneman's fast and slow thinking and the automatic-versus-controlled processing literature, applied to using models. It stands on cognitive science, and on nothing any interpretability paper had to discover.

## Core takeaways

- Two kinds of work: automatic (fluent drafting, recall, classify, format) is cheap and reliable; deliberate (reason in steps, infer, construct) is expensive and error-prone.
- Route by mode: cheap or local models for automatic work; a reasoning model plus verification for deliberate work.
- The deliberate channel is small, the way working memory holds only about four things at once. One focal task per step; decompose so nothing juggles many novel constraints.
- Verify the outputs of deliberate work against an external check, not against the model's own explanation of its reasoning.
- Turn the deliberate work you repeat into procedures (skills, specs, checkers) so neither you nor the agent re-reasons it each time.

## The two modes

| Mode | What it is | Examples | Operator move |
| --- | --- | --- | --- |
| Automatic | Practiced pattern completion | Fluent drafting, recall, classification, extraction, reformatting | Cheap or local model; light or no verification |
| Deliberate | Work built in steps | Multi-hop reasoning, inference from context, novel construction under many constraints | Reasoning model with a budget; gate the output; decompose first |

## Route by mode

Sort each task by whether it is pattern completion or genuine step-building, and send it to the cheapest model that clears the bar. A gloss, a reformat, a tone label, a vocabulary pull is automatic work: a small or local model does it about as well as a frontier one, with little checking. Authoring a leveled reading that has to hit a character floor while holding cast continuity and register is deliberate work: it earns a stronger model, a thinking budget, and a gate on the result. The point is spending intelligence where it changes the outcome and economizing it where a wrong answer is caught cheaply. See [[wiki/Systems/AI & Agentic Systems/Thinking Models|Thinking Models]] and [[wiki/Concepts/Human vs AI Capability Lens|Human vs AI Capability Lens]].

## Protect the deliberate channel

Working memory holds only about four chunks at once, and a single deliberate step degrades the same way a learner does when too much lands on it at once. A prompt that stacks many novel constraints onto one reasoning step is the operator version of that overload. Decompose so each step carries one focal task and a few constraints, and let structure carry the rest: a fixed cast sheet, a template, a checker the agent writes against, rather than ten rules crammed into one instruction. Fan-out is this move at scale, with separate agents each holding a small load. See [[wiki/Systems/AI & Agentic Systems/Context Engineering|Context Engineering]] and [[wiki/Concepts/Cognitive Load & What Mental Effort Is Trying to Cue|Cognitive Load]].

## Verify outputs, not narration

The steps of a practiced skill are not reliably reportable, in people or in models. Asking a model to explain its reasoning returns a plausible account, not a faithful transcript of what it did. So check the output against something external: a test, a measured criterion, a second pass that re-derives the answer independently. Errors concentrate in the deliberate lane, which is where the gate belongs. Corpus measurement, example checks, and transcribe-back audio QA are all this move. See [[wiki/Concepts/The AI Industrial Revolution|the verifier role]] and [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]].

## Proceduralize what repeats

Deliberate work becomes automatic through practice; in skill-acquisition terms that is proceduralization. An operator proceduralizes by hand: extract a repeated reasoning move into a reusable artifact, a skill, a spec, a prompt template, a checker, so that neither you nor the agent re-derives it next time. Having the agent restate a rule in its own words before it acts is a cheap version of the same effect, and it is old cognitive science about articulation strengthening a skill, not a new finding. See [[wiki/Concepts/Agent-Native Infrastructure|Agent-Native Infrastructure]] and the "train the agent" shift in [[wiki/Concepts/The AI Industrial Revolution|The AI Industrial Revolution]].

## Keep the deliberate work you want to own

Automaticity hides its own steps: once a skill runs without the workspace, the person doing it can no longer say how. The operator corollary is that offloading a piece of thinking to the model means you do not build that skill yourself. Hand off the automatic toil and keep the deliberate reasoning you actually want to internalize. See [[wiki/Domains/AI & Tooling/The Right vs Wrong Way to Work With AI|The Right vs Wrong Way to Work With AI]] and [[wiki/Concepts/Understanding Bottleneck|Understanding Bottleneck]].

## The case against

The split is a routing heuristic, not a description of what the model is. Many real tasks blend the two modes, and some automatic-looking tasks hide a deliberate step while some elaborate-looking ones collapse to recall. Classifying a task's mode is itself a judgment you can get wrong, and the safe error is to treat a task as deliberate and verify it. The boundary also moves as models improve: work that needed a reasoning model last year runs automatically this year, so the routing needs re-checking as capability rises, not setting once. And the vocabulary here (working memory, fast and slow) is borrowed from human cognition; a model is not literally a dual-process mind, so the value is in the operating moves, not in any claim about the model's inner life.

## Related

- [[wiki/Concepts/Declarative, Procedural, and Conditional Knowledge|Declarative, Procedural, and Conditional Knowledge]] — the automatic/deliberate split as knowledge types, and how deliberate compiles into procedural.
- [[wiki/Concepts/Cognitive Load & What Mental Effort Is Trying to Cue|Cognitive Load]] — the working-memory limit this budgets against.
- [[wiki/Systems/AI & Agentic Systems/Context Engineering|Context Engineering]] — managing the context is managing the deliberate channel.
- [[wiki/Systems/AI & Agentic Systems/Thinking Models|Thinking Models]] — when to spend the reasoning budget the deliberate lane needs.
- [[wiki/Concepts/Human vs AI Capability Lens|Human vs AI Capability Lens]] — which work to route, keep, or hand off.
- [[wiki/Concepts/Four Stages of Competence|Four Stages of Competence]] — proceduralization as the climb to unconscious competence.
- [[wiki/Concepts/Global Workspace and J-space|Global Workspace and J-space]] — the interpretability paper that prompted this page. The moves above are cognitive science and owe nothing to its findings.

## Sources

- Daniel Kahneman, *Thinking, Fast and Slow* (2011) — the automatic/deliberate (System 1 / System 2) framing.
- Walter Schneider and Richard Shiffrin, "Controlled and automatic human information processing" (1977) — automatic versus controlled processing, and how practice automatizes.
- Nelson Cowan, "The magical number 4 in short-term memory" (2001) — the working-memory capacity limit.
- John Anderson, ACT-R and skill acquisition — proceduralization of declarative rules into procedures.

## Open Questions

- Which of my recurring tasks am I routing to the wrong mode, paying for reasoning I do not need or skipping verification I do?
- Where does the automatic/deliberate boundary sit for my stack today, and what crossed it since I last checked?
- Which repeated deliberate moves in my pipelines have not been turned into a skill, spec, or checker yet?
- What am I offloading that I would be better off keeping and learning?
