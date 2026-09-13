---
title: "Agentic Engineering"
type: hub
status: developing
created: 2026-05-02
updated: 2026-09-13
method: plain-register-2026-09-13
prose-model: opus
written-by: grok
model: grok
source-count: 10
description: "Best-practices hub for building with agents while keeping the engineering standard: quality, specs, verification, architecture, and human responsibility. Vibe coding lets more people build software at all. Agentic engineering raises the quality that skilled builders can reach with agents. Doctrine layer: Agentic Engineering, Condensed."
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

In agentic engineering, the person stays answerable for ordinary work that agents now build, and that work has to meet the same standard as before. Agents produce more than a person can read line by line. So the evidence that the work is good comes from checks the person built and from consequences the person signs for. The person still owns the spec, taste, architecture, review, verification, and direction. That effort goes into the factory, meaning the reusable machinery that ships the next pieces of work, and not into reading every file. The one-line versions of these rules are on [[wiki/Systems/AI & Agentic Systems/Agentic Engineering, Condensed|Agentic Engineering, Condensed]].

## What the collaborator is

[[wiki/Systems/AI & Agentic Systems/Vibe Coding|Vibe Coding]] lowers the skill needed to build: more people can now build software at all, by describing a result in ordinary language and judging it by whether it runs. Agentic engineering raises the quality that skilled builders can reach. People who already know what good looks like keep correctness, security, architecture, taste, and responsibility in their own hands, and they use agents to work faster while holding that standard.

Agents act like junior collaborators who never get tired. They can recall a very large amount, and they carry out steps quickly. Their judgment is jagged, meaning uneven: they do some tasks extremely well and do closely related tasks very badly, and there is no reliable way to tell from outside which kind a task will be. Doing well in one area does not predict doing well in the next.

They handle API details, boilerplate, refactors (including a 100,000-line class), shell commands, file edits, first-pass debugging, and repetitive implementation. They are much weaker at taste, architecture, identity, product judgment, security boundaries, unstated assumptions, and knowing when a local solution violates a larger system. Here is a real case of the last two. An agent building a payments flow once tried to associate purchased credits with a user by matching a payment-provider email address against a login-provider email address, because no persistent user id existed. The two email addresses can be anything, so they need not match. In that one piece of code, the local match "worked." It was still wrong for the larger system.

Agentic engineering uses agents for speed, keeps humans in charge of direction, makes specs more explicit, checks outputs against real results, and learns the layer beneath the new abstraction. Agents handle syntax and individual steps. The person decides what each tool is for, and settles that purpose before implementation starts. [[wiki/Systems/AI & Agentic Systems/Automatic and Deliberate Work with AI|Automatic and Deliberate Work with AI]] describes how to route work for this: cheap work goes to cheap models, and budget and verification go to building the steps.

Because code arrives quickly, the work can look like a problem of execution. The step that usually limits results more is the approach layer, which is the part of a job that happens before any code is written: context, ownership, constraints, acceptance criteria, verification, and taste. The gain comes from framing the job better, in addition to asking the agent faster. [[wiki/Dimensions/Deep Processing/Interleaving for Complex Problem Solving|Interleaving for Complex Problem Solving]] explains how this works. Seven concrete moves put it into practice: turn a vague feature into acceptance criteria; ask one agent to implement and another to review; compare two outputs for judgment quality; rewrite instructions after a failed run; test the same workflow on a small problem and then a larger one; explain architecture before touching code; turn a failed build into a workflow change.

## Spec, standard, layer below, bounded jobs

**Agent-written work meets the same standard as human-written work.** Security vulnerabilities, architecture that breaks easily, badly organized abstractions, broken tests, privacy leaks, and unclear behavior are not acceptable just because the agent produced the work quickly. Speed is useful only if the result can still be trusted.

The practical checks are ordinary ones: run the build and the tests, inspect the diff, look for unrelated edits, and review what the code does instead of the agent's explanation of it. [[wiki/Red Team/Applied Critical Thinking - Testing Frames|Applied Critical Thinking: Testing Frames]] supplies what this review was missing, which is how much time to give it: short review passes of thirty seconds, three minutes, or thirty minutes, instead of accepting output without looking or inspecting it without end. [[wiki/Systems/AI & Agentic Systems/The Writing Pipeline|Writing with a Structure Engine]] describes the same fault in another form: stating verified and unverified claims with the same confidence.

The spec is a document that stays in use after the session ends. It says what is being built, what must not change, which existing patterns to follow, which edge cases matter, and how the result will be checked. Planning as a routine, in which a human writes out the route by hand, moves to the model. Planning as a spec stays. The spec is designed jointly, and is not handed down finished. When the deeper design is not specified, the agent makes up a design of its own to cover it, as the agent in the payments flow made up the email match. The best specs become documentation. They guide the agent and the human review, and they stay useful after the session ends.

Abstractions leak. A simplification usually hides the complicated layer underneath it, but sometimes a problem from that layer shows through, and then the person has to understand the hidden layer. Agents are a new abstraction. Operators who stay useful still understand one layer below it, meaning the level the abstraction is built on. If the agent writes a component UI, that layer is components, state, routing, rendering, and CSS, and the person needs to know it well enough to spot bad structure. If the agent writes backend code, that layer is data models, auth, caching, latency, and failure modes. If the agent uses a shell, that layer is files, processes, package managers, and logs. The person needs to understand the system, and remembering the API syntax can be left to the agent. [[wiki/Concepts/A Motorcycle for the Mind|A Motorcycle for the Mind]] states the original form of the claim that faster work still needs someone to set its direction.

Agents work best on bounded jobs. The number practitioners give is three to twenty steps. Large projects still get done, broken into pieces small enough to review.

| Good delegation | Weak delegation |
|---|---|
| Update this one page from these sources. | Make this better. |
| Find privacy leaks matching these strings. | Refactor everything. |
| Add tests for this function. | Improve the architecture. |
| Explain this failing build log. | Research this whole field and update the wiki. |

The four weak requests fail for four different reasons: no standard, no scope, no criterion, and no unit of review.

Vibe coding is still the right tool for throwaway experiments. Agentic engineering is the practice to use for systems that have to last. [[wiki/Concepts/A Return to Code|A Return to Code]] covers the economics of apps built in one shot and the ruling that the two practices stay separate.

## What can be verified, and what speed is not

Models are strongest where outputs can be verified. Training rewards outputs that pass a check, so models become much more capable at math and code, and stay weak where a check is hard to write. Part of that strength also comes from what the labs put in the training data: material that can be verified, plus whatever the labs happen to care about. Code suits agents well because the feedback is concrete. Tests pass or fail. Builds break. Logs show errors. Diffs can be inspected. The app runs or it does not.

Whenever possible, a vague sense of quality is turned into checks. If a task cannot be verified, the human stays closer to the loop, meaning more directly involved in each run. Whether a task can be verified is not fixed. A check can often be built for it: a test, a measured criterion, or a second model that scores the output against a rule instead of giving an opinion.

The claim that agents make experienced developers faster has one randomized measurement, and it found the opposite. Experienced developers working on issues in their own repositories were randomly assigned to be allowed or forbidden AI tools on tasks of about two hours. With the tools allowed, they took longer. They had predicted a speedup. After finishing more slowly, they still believed the tools had made them faster. The setting is narrow, and the authors say so. For an operator, the lesson is that a sense of speedup is not evidence. The result does not support the reading "agents make people slower." Before reorganizing work on the assumption that agents save time, time one real bounded task.

Judgment shifts from checking any one output to building the factory, which is the reusable machinery that produces outputs: templates, harnesses, skills, and agents. [[wiki/Concepts/The AI Industrial Revolution|The AI Industrial Revolution]] gives the claimed size of the gap between people who build the factory and people who judge single outputs. The cost that matters is the thousand-day question: three years after the software was easy to create, is it still secure, tested, maintained, and worth the tokens, and is someone still willing to be paged if it goes down?

## Context, agent-facing tools, the human, multi-model review

The quality of an agent's work is limited by the context it can use. The right files, constraints, examples, commands, and prior decisions go into the context, and material that does not help is taken out. The model itself is a stateless function from inputs to outputs. A larger context window only lets the model see more at once. It does not give the agent a persistent store of knowledge like a wiki, and it does not give the agent a record of past conversations. Two added layers provide those. Across conversations, a queryable store holds facts that stay true in every session: people, projects, decisions, and policies. Within a conversation, the raw transcript is kept where it can be retrieved, even when the model is currently seeing only a summary of it. [[wiki/Systems/AI & Agentic Systems/Context Engineering|Context Engineering]] covers how to shape what goes into the context window. [[wiki/Systems/AI & Agentic Systems/Working With a Model That Cannot Remember|Working With a Model That Cannot Remember]] gives a different explanation for what looks like a "bad model": bad context.

This vault already serves as the across-conversations layer. The files named here are examples from it, and they are not a complete list. [[notes/index|notes/index.md]] is the entry point: a hand-maintained list of hubs and doctrine pages, so an agent starting with no context knows what exists. `log.md` is an append-only operational record of what was done and when. A source manifest with a status column shows what material exists and how far it has been compiled. [[AGENTS]] is the standing instruction file. It sets out the three-layer model, what may be edited, and what must not leave the machine. The vault also holds house law files, a decisions tree, and a journal beside those four files. These files let future agents read and understand the environment.

Good context answers four questions.

- Where am I?
- What matters?
- What should I avoid?
- What command proves this works?

Tools, docs, and workflows are written for agents to use directly. Copy-pasteable instructions work better than "click here, open this menu." One installer is written as a block of text for the agent: the agent inspects the machine, performs the setup, and debugs as it runs. CLI commands, machine-readable state, API-first workflows, and examples with expected outputs are part of the same change toward agent use. Sensors are ways to observe the system. Actuators are ways to change it. Legible state is a machine-readable record of how things currently stand. The deployment test is whether one prompt produces a running thing, with no settings menu involved. [[wiki/Concepts/Agent-Native Infrastructure|Agent-Native Infrastructure]] explains the four files in full.

The interface the agent uses has to be designed. When an agent fails, the fix is often a better tool description or a cleaner output format, and a longer prompt often is not the fix.

Six things stay with the human. Taste is knowing what good looks like. Judgment is deciding what matters and which tradeoffs are acceptable. Architecture is how the parts should fit. Spec is what the system must do. Understanding is an internal model good enough to steer with. Verification is taking responsibility for the artifact when it ships. A person can hand thinking work to an agent, but the person has to do the understanding. The agent processes, drafts, searches, and implements. The person still has to know what is being built and why. [[wiki/Concepts/Understanding Bottleneck|Understanding Bottleneck]] covers that limit in full.

Sign-off means "the consequences of this change are understood, and a name goes under them", or it means "the harness was written, so the unread work can still be stood behind." It does not mean "every line was read." The tools for sign-off are tests, simulations, proofs, and type-checkers.

More and more of the work is training the agent and saving repeated moves as skills. [[wiki/Concepts/The AI Industrial Revolution|The AI Industrial Revolution]] already names this part of the work as the culture half.

Having several models review the same work can help, and the models can also miss the same problems. A council of models reviewing together can still fall into groupthink. A second model that scores the output against a criterion, in a cycle of generate, evaluate, and repeat, is different from a second model giving an opinion. Agent review is worth its cost on obvious bugs, security, alternative designs, generated tests, assumption checks, and scanning large diffs. Taste, priority, and final judgment stay with humans.

The common failure modes are the opposites of the rules above. A person accepts a polished explanation instead of checking the artifact. Fast implementation leads to scope creep. Code is trusted because it works once. The agent invents its own architecture instead of following the codebase, as in the payments-flow email match. The person forgets that agent skill is jagged. The same class of model will walk a person to a car wash fifty metres away, and in the same week it will refactor a 100,000-line codebase or find a zero-day. The person's skill in the layer below weakens if it is never used.

The current stack is not "use several models." [[wiki/Systems/AI & Agentic Systems/Current Agentic LLM Stack|Current Agentic LLM Stack]] splits three agents by kind of work: judgment, execution, and standing duty. It limits local models to audio, and it runs on subscription plans or local hardware, with nothing paid per token.

## What is actually known

The randomized trial described above covers one narrow setting: experienced operators, working in their own repositories, on tasks of about two hours. AI usually works as an amplifier: it makes existing strengths larger and makes existing weaknesses larger. Because of that limit, the result cannot be turned into the claim "agents fail developers."

An agent can be exploited when it has private data, untrusted content, and external communication at the same time. Any two of the three together are safe. All three together are not. Models cannot reliably tell operator instructions apart from instructions that appear inside the input. No guardrail stops this one hundred percent of the time. The mitigation is in the architecture: do not give an agent all three at once. The rule applies to a vault that can read private material, take in content from the web, and push to a public remote.

**A workflow follows a predefined path. An agent is a model that directs its own tool use.** Start with the simplest option. A single model call with retrieval and examples is usually enough. Five named patterns each fit a specific condition: prompt chaining when the subtasks are fixed and latency can be traded for accuracy; routing when distinct categories need separate optimization; parallelization when subtasks divide cleanly, or when several outputs raise confidence; orchestrator-workers when the subtasks cannot be predicted, as with multi-file edits; evaluator-optimizer when a clear criterion exists and iteration measurably improves quality. Evaluator-optimizer is the kind of council of models that works. A full agent is the right choice when the number of steps cannot be predicted. Its costs are higher spending and errors that compound.

Human oversight is built into the system's control flow, and it does not depend on anyone's disposition. Approval is a structured tool call. The operator writes the control flow that decides when to loop, pause, escalate, or hand off. Pause and resume are APIs. Traces record model calls, tools, guardrails, and handoffs, so a run can be reconstructed afterward. Keeping the human closer to the loop means an approval that blocks the run before the irreversible step, and a trace of what happened.

The strongest case against these rules is the reader's own setting. Experienced developers working in their own repositories are the setting where measured speed got worse, and their own reports of feeling faster do not change that measurement. Councils of models miss the same problems unless they are scoring against a criterion. Unverifiable work does not get cheaper when more models are added. The three-part combination is present wherever an agent reads private files and publishes. The cost of the practice is writing the spec, running the checks, keeping up skill in the layer below, refusing the third part of the combination, and paying for tokens over a thousand days. Two sessions of accepting the explanation instead of the artifact are a signal to quit. An unverifiable task with a loose loop is another signal to quit, and so is having all three parts of the threat model present at once. The test that can be checked is to time one real bounded task with the agent and without it, before the workflow changes. If a first pass produces no failed check, it has not verified anything.

The person is still answerable for the same standard. That responsibility now covers the factory and the sign-off, meaning the checks the person built and the consequences the person signed for, and it does not depend on reading every line.

## Related

- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering, Condensed|Agentic Engineering, Condensed]]: rules that stay true versus tactics tied to a date; holds the one-line rules, which this hub does not copy
- [[wiki/Systems/AI & Agentic Systems/Vibe Coding|Vibe Coding]]: the practice that lets more people build at all; which work goes to disposable practice and which to durable practice
- [[wiki/Concepts/The AI Industrial Revolution|The AI Industrial Revolution]]: the factory framing and the claimed size of the gap; the waste-tokens boundary; the case against that this hub used to lack
- [[wiki/Dimensions/Deep Processing/Interleaving for Complex Problem Solving|Interleaving for Complex Problem Solving]]: the seven concrete interleaving moves this hub extends
- [[notes/index|notes/index.md]]: vault entry point, a hand-maintained list of hubs and doctrine pages
- [[wiki/Systems/AI & Agentic Systems/Current Agentic LLM Stack|Current Agentic LLM Stack]]: the stack in current use, with three agents split by kind of work and nothing paid per token
- [[wiki/Systems/AI & Agentic Systems/Agent Glossary|Agent Glossary]]: names for the agent loop, the environment it runs in, and the chat window; when to use each product
- [[wiki/Systems/AI & Agentic Systems/Grok Bot Primer|Grok Bot Primer]]: how this setup runs the standing teammate: one shared computer, helpers that only report, and an empty middle
- [[wiki/Systems/AI & Agentic Systems/Working With a Model That Cannot Remember|Working With a Model Collaborator]]: measured operating rules for one model, covering price, the case against, when to quit, and a checkable test
- [[wiki/Systems/AI & Agentic Systems/Context Engineering|Context Engineering]]: natural language as the programming medium; the same artifacts as Software 3.0 objects
- [[wiki/Concepts/Agent-Native Infrastructure|Agent-Native Infrastructure]]: explains in full the four files this hub only names
- [[wiki/Concepts/Understanding Bottleneck|Understanding Bottleneck]]: covers in full the limit that understanding places on the work; this hub only names it
- [[wiki/Concepts/A Motorcycle for the Mind|A Motorcycle for the Mind]]: the claim that faster work still needs direction, and the layer-below idea, in their original form
- [[wiki/Concepts/A Return to Code|A Return to Code]]: the economics of apps built in one shot; the two practices stay separate
- [[wiki/Red Team/Red Teaming|Red Teaming]]: red-team output before trusting it
- [[wiki/Red Team/Applied Critical Thinking - Testing Frames|Applied Critical Thinking: Testing Frames]]: review passes of thirty seconds, three minutes, or thirty minutes
- [[wiki/Domains/AI & Tooling/Essential AI Skills 2026|Essential AI Skills 2026]]: diagram of tool versus agent; a capability scale with three levels
- [[wiki/Systems/AI & Agentic Systems/Automatic and Deliberate Work with AI|Automatic and Deliberate Work with AI]]: routing cheap work to cheap models; the practice this hub describes
- [[wiki/Systems/AI & Agentic Systems/The Writing Pipeline|The Writing Pipeline]]: stating verified and unverified claims with the same confidence

## Open Questions

- Near the boundary between disposable and durable work, which tasks can still be done with vibe coding, and which now need the full practice?
- Which fundamentals are in the layer directly below the current agent workflows?
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
