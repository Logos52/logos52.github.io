---
title: "Agentic Engineering"
type: hub
status: developing
created: 2026-05-02
updated: 2026-09-01
written-by: grok
model: grok
source-count: 10
description: "Best-practices hub for building with agents while protecting the engineering bar — quality, specs, verification, architecture, and human responsibility. Vibe coding raises the floor; this raises the ceiling. Doctrine layer: Agentic Engineering, Condensed."
tags:
  - llm
  - agents
  - engineering
  - software-3
  - ai-workflows
  - agentic-engineering
---

<div class="hub-page-title">
<i class="ti ti-robot" style="color:#4f9dff"></i>
<h1>Agentic Engineering</h1>
</div>

Agentic engineering keeps the person answerable for the same bar on ordinary work the agents now build. Agents produce more than line-by-line reading can cover, so the proof moves onto the checks the person built and the consequences they sign for. The person still holds spec, taste, architecture, review, verification, and direction — spent on the factory that ships the next pieces, not on unread files. [[wiki/Systems/AI & Agentic Systems/Agentic Engineering, Condensed|Agentic Engineering, Condensed]] keeps the one-liners; this page holds the mechanism.

## What the collaborator is

[[wiki/Systems/AI & Agentic Systems/Vibe Coding|Vibe Coding]] raises the floor: more people can now build at all, by describing a result in ordinary language and judging it by whether it runs. This practice raises the ceiling. The people who already know what good looks like keep correctness, security, architecture, taste, and responsibility, and they use the agents for speed inside that bar.

Agents behave like tireless junior collaborators. Recall is huge. Execution is fast. Judgment is jagged: extremely capable at some tasks and startlingly bad at neighbouring ones, with no reliable way to tell which from the outside. Competence in one area predicts nothing about the next.

They handle API details, boilerplate, refactors (including a 100,000-line class), shell commands, file edits, first-pass debugging, and repetitive implementation. They are much weaker at taste, architecture, identity, product judgment, security boundaries, unstated assumptions, and knowing when a local solution violates a larger system. That last pair is not abstract. An agent building a payments flow once tried to associate purchased credits by matching a payment-provider email address against a login-provider email address, because no persistent user id existed. The emails can be arbitrary. The local match "worked." It violated the system.

The practice uses agents for speed, keeps humans on direction, makes specs more explicit, verifies outputs against reality, and learns the layer beneath the new abstraction. Agents take syntax and steps. The person holds what each tool is for, with purpose locked before implementation. [[wiki/Systems/AI & Agentic Systems/Automatic and Deliberate Work with AI|Automatic and Deliberate Work with AI]] is the routing that serves this: cheap work to cheap models, budget and verification on the step-building.

It looks like an execution problem, because code arrives quickly. The higher-leverage bottleneck is usually the approach layer — the part of a job that happens before any code: context, ownership, constraints, acceptance criteria, verification, and taste. The point is better framing, not only faster asking. [[wiki/Dimensions/Deep Processing/Interleaving for Complex Problem Solving|Interleaving for Complex Problem Solving]] owns the mechanism. The seven moves this hub actually uses are concrete: turn a vague feature into acceptance criteria; ask one agent to implement and another to review; compare two outputs for judgment quality; rewrite instructions after a failed run; test the same workflow on a small problem and then a larger one; explain architecture before touching code; turn a failed build into a workflow change.

## Spec, bar, layer below, bounded jobs

**Agent-written work meets the same standard as human-written work.** Vulnerabilities, brittle architecture, messy abstractions, broken tests, privacy leaks, and unclear behavior do not become acceptable because the pass was fast. Speed is only useful if the result remains trustworthy.

The practical checks are ordinary. Run the build and the tests. Inspect the diff. Look for unrelated edits. Review behavior, not the agent's explanation. [[wiki/Red Team/Applied Critical Thinking - Testing Frames|Applied Critical Thinking: Testing Frames]] is the missing calibration for that review: fast loops, not blind acceptance and not endless inspection — a thirty-second pass, a three-minute pass, a thirty-minute pass. [[wiki/Systems/AI & Agentic Systems/Writing with a Structure Engine|Writing with a Structure Engine]] names the same fault from the other side: uniform confidence across verified and unverified claims.

The spec is a document that outlives the session: what is being built, what must not change, which existing patterns to follow, which edge cases matter, and how the result will be checked. Planning-as-ritual — a human hand-writing the route — migrates to the model. Planning-as-spec stays. The spec is co-designed, not handed down. When the deeper design is underspecified, the agent fills the gap with a scheme of its own, the way the payments flow invented an email match. The best specs become docs. They guide the agent, guide the human review, and remain useful after the session.

Abstractions leak. A simplification mostly hides the messy layer underneath, until the mess comes through and the hidden layer has to be understood. Agents are a new abstraction. The operators who stay useful still understand one layer below — the level the abstraction sits on. If the agent writes a component UI, that layer is components, state, routing, rendering, and CSS, enough to spot bad structure. If it writes backend code, that layer is data models, auth, caching, latency, and failure modes. If it uses a shell, that layer is files, processes, package managers, and logs. The agent remembers the API syntax. The person understands the system. [[wiki/Concepts/A Motorcycle for the Mind|A Motorcycle for the Mind]] is that acceleration-needs-direction claim in its original form.

Agents work best when the job is bounded. The field number is three to twenty steps. Big work still happens; it is broken into reviewable chunks.

| Good delegation | Weak delegation |
|---|---|
| Update this one page from these sources. | Make this better. |
| Find privacy leaks matching these strings. | Refactor everything. |
| Add tests for this function. | Improve the architecture. |
| Explain this failing build log. | Research this whole field and update the wiki. |

The weak strings fail for four different reasons: no bar, no scope, no criterion, no unit of review.

Vibe coding stays the right tool for disposable experiments. This practice is the one for durable systems. [[wiki/Concepts/A Return to Code|A Return to Code]] holds the one-shot-app economics and the ruling that the two practices stay separate.

## What can be verified, and what speed is not

Models peak where outputs can be verified. Training rewards verification, so capability jags toward math and code, and stays rough where a check is hard to write. Some of that peak is also what the labs put in the data: verifiable plus what they happen to care about. Code is powerful because the feedback is concrete. Tests pass or fail. Builds break. Logs show errors. Diffs can be inspected. The app runs or it does not.

Vague quality converts into checks whenever it can. If a task cannot be verified, the human stays closer to the loop. Unverifiable is not a fixed property. It is often something that can be built — a test, a measured criterion, a second model scoring against a rule rather than offering an opinion.

The speed claim has one randomized measurement in this page's setting, and it runs the other way. Experienced developers working issues in their own repositories, randomized to allow or forbid AI tools on tasks of about two hours, took longer with the tools allowed. They had forecast a speedup. After finishing slower, they still believed they had been sped up. The setting is narrow; the authors say so. The operator implication is not "agents make people slower." It is that a sense of speedup is not evidence. Clock one real bounded task before reorganizing work around the assumption.

Judgment moves off any one output and onto the factory — the reusable machinery that produces outputs: templates, harnesses, skills, agents. The magnitude claimed for that gap lives on [[wiki/Concepts/The AI Industrial Revolution|The AI Industrial Revolution]]. The cost that matters is the thousand-day question: whether the software is still secure, tested, maintained, and worth the tokens three years after it was easy to create, and whether someone is still willing to be paged if it goes down.

## Context, wiring, the human, the council

An agent is only as good as the context it can use. The right files, constraints, examples, commands, and prior decisions go in. Noise comes out. The model itself is a stateless function from inputs to outputs. Wider context only makes the desk wider. It does not give the agent a wiki, and it does not give it a recording. Two layers do. Across conversations: a queryable store of facts that stay true regardless of the session — people, projects, decisions, policies. Within a conversation: the raw transcript kept retrievable behind whatever summary the model is currently seeing. [[wiki/Systems/AI & Agentic Systems/Context Engineering|Context Engineering]] owns the craft of shaping the window. [[wiki/Systems/AI & Agentic Systems/Working With a Model That Cannot Remember|Working With a Model That Cannot Remember]] is the rival explanation for a "bad model": bad context.

This vault already is the across-conversations layer, in instances rather than a complete inventory. [[notes/index|notes/index.md]] is the front door: a hand-maintained list of hubs and doctrine pages, so an agent starting cold knows what exists. `log.md` is an append-only operational diary of what was done and when. A source manifest with a status column says what material exists and how far it has been compiled. [[AGENTS]] is the standing instruction file: three-layer model, what may be edited, what must not leave the machine. House law files, a decisions tree, and a journal sit beside those four. They make the environment legible to future agents.

Good context answers four questions.

- Where am I?
- What matters?
- What should I avoid?
- What command proves this works?

Tools, docs, and workflows get written for agents to use directly. Copy-pasteable instructions beat "click here, open this menu." One installer is a block of text for the agent: it reads the machine, performs the setup, and debugs in the loop. CLI commands, machine-readable state, API-first workflows, and examples with expected outputs are the same turn. Sensors are ways to observe the system. Actuators are ways to change it. Legible state is a machine-readable record of how things currently stand. The deployment test is one prompt and a running thing, with no settings menu. [[wiki/Concepts/Agent-Native Infrastructure|Agent-Native Infrastructure]] owns the four-file breakdown this hub only names.

The interface the agent uses is a design artifact. A failing agent often needs a better tool description or a cleaner output format, not a longer prompt.

What stays human is short because the earlier sections already earned it. Taste is what good looks like. Judgment is what matters and which tradeoffs are acceptable. Architecture is how the parts should fit. Spec is what the system must do. Understanding is enough of an internal model to steer. Verification is standing behind the artifact when it ships. Thinking can be outsourced. Understanding cannot. The agent processes, drafts, searches, and implements. The person still has to know what is being built and why. [[wiki/Concepts/Understanding Bottleneck|Understanding Bottleneck]] owns that constraint.

Sign-off is not "every line was read." It is "the consequences of this change are understood, and a name goes under them" — or "the harness was written, so the unread work can still be stood behind." The instruments are tests, simulations, proofs, and type-checkers.

Increasingly the work is training the agent and capturing repeated moves as skills, the culture half [[wiki/Concepts/The AI Industrial Revolution|The AI Industrial Revolution]] already names.

Several models reviewing the same work can help, and they can share the same blind spots. A council of models can still be groupthink. A second model scoring against a criterion — generate, then evaluate, then loop — is not the same as a second opinion. Agent review earns its keep on obvious bugs, security, alternative designs, generated tests, assumption checks, and large-diff scanning. Taste, priority, and final judgment stay human.

The failure modes are the earlier rules inverted. A polished explanation is accepted instead of the artifact. Implementation speed creates scope creep. Code is trusted because it works once. The agent invents architecture instead of following the codebase — the payments-flow email match again. Jaggedness is forgotten. The same model class will walk a person to a car wash fifty metres away and, in the same week, refactor a 100,000-line codebase or find a zero-day. Skill in the layer below atrophies if it is never used.

The live stack is not "use several models." [[wiki/Systems/AI & Agentic Systems/Current Agentic LLM Stack|Current Agentic LLM Stack]] splits three agents by kind of work — judgment, execution, standing duty — narrows local models to audio, and runs on subscription plans or local hardware, nothing pay-per-token.

## What is actually known

The randomized trial above is one narrow setting: experienced operators, their own repositories, tasks of about two hours. AI's usual role is as an amplifier. Existing strengths and existing weaknesses get louder. That bound keeps the result from flipping into "agents fail developers."

An agent becomes exploitable when it has private data, untrusted content, and external communication at the same time. Any two are safe. All three is not. Models cannot reliably tell operator instructions from instructions sitting in the input. There is no one-hundred-percent guardrail. Mitigation is architectural: refuse the combination. The rule lands on a vault that can read private material, ingest the web, and push to a public remote.

**Workflows are predefined paths. Agents are the model directing its own tool use.** Start simple. A single call with retrieval and examples is usually enough. Five named patterns each have a condition: prompt chaining when the subtasks are fixed and latency can be traded for accuracy; routing when distinct categories need separate optimization; parallelization when subtasks divide cleanly, or when several outputs raise confidence; orchestrator-workers when the subtasks cannot be predicted, as with multi-file edits; evaluator-optimizer when a clear criterion exists and iteration measurably improves quality. That last one is the council that works. A full agent is right when the step count cannot be predicted. The price is cost and compounding errors.

Human oversight is wiring, not disposition. Approval is a structured tool call. The operator writes the control flow that decides when to loop, pause, escalate, or hand off. Pause and resume are APIs. Traces run across model calls, tools, guardrails, and handoffs, so a run can be reconstructed after the fact. Closer to the loop means a blocking approval before the irreversible step, and a trace of what happened.

The honest case against this page is the reader's own setting. That is the one where measured speed went the wrong way, and self-report cannot save it. Councils share blind spots unless they are scoring a criterion. Unverifiable work does not get cheaper by adding models. The three-leg combination is live wherever an agent reads private files and publishes. The price is writing the spec, running the checks, keeping the layer below, refusing the third leg, and paying tokens across a thousand days. Two sessions of accepting the explanation instead of the artifact is a quit signal. So is an unverifiable task with a loose loop, and so is all three threat-model legs present at once. The checkable test is a clock on one real bounded task with the agent and without it, before the workflow changes. A first pass that produces no failed check has not verified.

The person is still answerable for the same bar. Answerability now means the factory and the sign-off — the checks built, the consequences signed for — not the unread lines.

## Related

- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering, Condensed|Agentic Engineering, Condensed]] — invariants versus dated tactics; the one-liners this hub must not recopy
- [[wiki/Systems/AI & Agentic Systems/Vibe Coding|Vibe Coding]] — the floor side of the pair; disposable versus durable routing
- [[wiki/Concepts/The AI Industrial Revolution|The AI Industrial Revolution]] — factory framing and magnitude; waste-tokens boundary; the case-against this hub used to lack
- [[wiki/Dimensions/Deep Processing/Interleaving for Complex Problem Solving|Interleaving for Complex Problem Solving]] — the seven concrete interleaving moves this hub extends
- [[notes/index|notes/index.md]] — vault front door: hand-maintained list of hubs and doctrine pages
- [[wiki/Systems/AI & Agentic Systems/Current Agentic LLM Stack|Current Agentic LLM Stack]] — live stack: three agents by kind of work, no pay-per-token
- [[wiki/Systems/AI & Agentic Systems/Agent Glossary|Agent Glossary]] — names for the loop, the room it runs in, and the chat window; when to use each product
- [[wiki/Systems/AI & Agentic Systems/Grok Bot Primer|Grok Bot Primer]] — how this desk runs the standing teammate: one shared computer, report-only helpers, empty middle
- [[wiki/Systems/AI & Agentic Systems/Grok 4.6 and Grok Bot|Grok 4.6 and Grok Bot]] — the model, the local coding agent, and the standing teammate under one first name
- [[wiki/Systems/AI & Agentic Systems/Agent Wrong-Door Log|Agent Wrong-Door Log]] — dated misses when a job went to the wrong product
- [[wiki/Systems/AI & Agentic Systems/Claude Fable|Claude Fable]] — measured operating rules for one model; price, case against, quit, checkable
- [[wiki/Systems/AI & Agentic Systems/Software 3.0|Software 3.0]] — natural language as the programming medium; the same artifacts as Software 3.0 objects
- [[wiki/Concepts/Agent-Native Infrastructure|Agent-Native Infrastructure]] — owns the four-file breakdown this hub only names
- [[wiki/Concepts/Understanding Bottleneck|Understanding Bottleneck]] — owns the understanding constraint; this hub names it
- [[wiki/Systems/AI & Agentic Systems/Context Engineering|Context Engineering]] — owns window-shaping and the drowning warning
- [[wiki/Concepts/A Motorcycle for the Mind|A Motorcycle for the Mind]] — acceleration-needs-direction; layer-below in its original form
- [[wiki/Concepts/A Return to Code|A Return to Code]] — one-shot-app economics; the two practices stay separate
- [[wiki/Red Team/Red Teaming|Red Teaming]] — red-team output before trusting it
- [[wiki/Red Team/Applied Critical Thinking - Testing Frames|Applied Critical Thinking: Testing Frames]] — thirty-second / three-minute / thirty-minute filter for review
- [[wiki/Domains/AI & Tooling/Essential AI Skills 2026|Essential AI Skills 2026]] — tool versus agent diagram; three-level capability ladder
- [[wiki/Systems/AI & Agentic Systems/Automatic and Deliberate Work with AI|Automatic and Deliberate Work with AI]] — routing cheap work to cheap models; the practice this hub is
- [[wiki/Systems/AI & Agentic Systems/Working With a Model That Cannot Remember|Working With a Model That Cannot Remember]] — rival explanation: bad context, not bad model
- [[wiki/Systems/AI & Agentic Systems/Writing with a Structure Engine|Writing with a Structure Engine]] — uniform confidence across verified and unverified claims
- [[wiki/Systems/AI & Agentic Systems/The Writing Pipeline|The Writing Pipeline]] — AI writing works better when it passes through a filter of itself: four separated stages, ending with a fresh head that rewrites the page until a stranger can follow it

## Open Questions

- At the disposable / durable edge, which tasks still tolerate vibe coding, and which now need the full practice?
- Which fundamentals sit one layer below the current agent workflows?
- Which parts of this vault should become scripts instead of manual agent instructions?
- Which current agent workflow would benefit most from a tighter spec?

## Sources

- Andrej Karpathy, [From Vibe Coding to Agentic Engineering](https://www.youtube.com/watch?v=96jN2OCOfLs), AI Ascent 2026 (Sequoia Capital), 2026-04-29.
- Andrej Karpathy, [How I use LLMs](https://www.youtube.com/watch?v=EWvNQjAaOHw).
- Naval Ravikant et al., [The AI Industrial Revolution](https://nav.al/industrial), 2026-06-02.
- Anthropic, [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents).
- OpenAI, [Agents SDK](https://developers.openai.com/api/docs/guides/agents).
- HumanLayer, [12 Factor Agents](https://www.humanlayer.dev/blog/12-factor-agents).
- METR, [Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/), 2025-07-10.
- Simon Willison, [The lethal trifecta](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/), 2025-06-16.
- Google DORA, [2025 DORA Report](https://dora.dev/research/2025/dora-report/).
- Joel Spolsky, [The Law of Leaky Abstractions](https://www.joelonsoftware.com/2002/11/11/the-law-of-leaky-abstractions/), 2002-11-11.
