---
type: condensed
status: developing
description: "The agentic engineering corpus condensed into rules in two groups: invariants expected to stay true for far more capable models (taste, specs, verification, understanding), and tactics dated 2026-06 that are expected to go out of date."
created: 2026-06-11
updated: 2026-09-13
method: plain-register-2026-09-13
prose-model: opus
tags:
  - agents
  - llm
  - agentic-engineering
  - condensed
---

# Agentic Engineering, Condensed

Agents work like junior collaborators who do not get tired. They have large recall and fast execution, and their judgment is good in some areas and poor in others. They get implementation done faster than traditional workflows do. The engineering standard holds only if human judgment, architecture, verification, and taste protect it. Vibe coding makes it possible for anyone to build software. Agentic engineering raises the upper limit of what engineers can do: more speed, while keeping correctness, security, and responsibility. The human role moves to higher-level work, as spec writer, taste holder, architect, reviewer, and director. The reason is that thinking can be handed to an agent, while understanding has to stay with the human. Some of the claims that follow are invariants, which should hold however capable models become. The others are tactics, dated to when they were written and expected to go out of date.

---

## 1. Invariants: the human role

These claims are about responsibility and judgment. They do not depend on model capability, so more capable models do not make them false.

- **An agent can do thinking work, and the human must still understand the result.** Agents generate options, code, and summaries. The human must hold enough of an internal model to know what is worth building, what is true enough, and how to direct the agent ([[wiki/Concepts/Understanding Bottleneck|Understanding Bottleneck]]).
- **Taste, judgment, architecture, spec, understanding.** These five stay with the human as agents improve. Each one concerns *what good looks like*, and faster implementation does not supply it ([[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]]).
- **Define the quality standard before delegating.** If you delegate without stating a standard, the work is done to the agent's standard ([[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]]).
- **Verify the artifact instead of the explanation.** Run the build, inspect the diff, and check behavior. A well-written account of the work does not show that the work is correct ([[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]]).
- **Work that can be verified gives you more control over agents.** Direct agents using facts that can be checked from outside: tests, builds, logs, runnable commands. Design the work so that those checks exist ([[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]]).
- **Faster work still needs someone to set its goal.** AI multiplies how fast a person works. The person still has to decide the goal, bring curiosity, and notice when something is wrong ([[wiki/Concepts/A Motorcycle for the Mind|A Motorcycle for the Mind]]).
- **Decide whether the software is disposable or durable.** Vibe coding is fine for experiments. Systems you will still be running next year need engineering ([[wiki/Systems/AI & Agentic Systems/Vibe Coding|Vibe Coding]], [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]]).

## 2. Invariants: the medium

- **Natural language is now a programming medium.** The model interprets context, instructions, examples, and constraints as intent to execute. That makes specs work as source code, so writing better specs produces better software ([[wiki/Systems/AI & Agentic Systems/Context Engineering|Software 3.0]]).
- **Keep ownership of the spec, and let the model write the plan.** Models now propose plans and trade-offs without being asked. So planning-as-ritual (you drafting the sequence of steps) moves to the model. Planning-as-spec (the problem, the success criteria, which trade-off you actually want) stays with you. The content of the PRD is the invariant. Who writes the PRD can change ([[wiki/Concepts/The AI Industrial Revolution|The AI Industrial Revolution]]).
- **Build the context around the task.** The context the model can see functions as its program. Writing indexes, constraints, examples, and desired-output shapes is engineering work ([[wiki/Systems/AI & Agentic Systems/Context Engineering|Context Engineering]]).
- **Build agent-native interfaces.** Provide copy-pasteable instructions, CLI commands, machine-readable state, and API-first workflows. Agents can maintain infrastructure that agents can read ([[wiki/Concepts/Agent-Native Infrastructure|Agent-Native Infrastructure]]).
- **Knowledge builds up when it is kept in durable files.** Collect sources, compile them into linked pages, query the compiled pages, and check them for pages that have become inaccurate or out of date. This wiki pattern keeps the results of agent work, so later work adds to them and they are not lost ([[wiki/Systems/AI & Agentic Systems/Context Engineering|LLM Knowledge Systems]]).
- **Convert repeated mistakes into instructions or tools.** When an agent makes the same error twice, treat it as a sign that a rule is missing. Record lessons that will keep applying in the system ([[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]]).
- **The cost of custom software is dropping close to the cost of asking for it clearly.** It becomes reasonable to build a one-shot app for a single person and a single task in an afternoon ([[wiki/Concepts/A Return to Code|A Return to Code]]).

## 3. Dated tactics: written 2026-06, expected to go out of date

Adjustments to how we work with the models available in 2026-06. Each tactic comes with the condition that would make it obsolete.

- **Model skill is uneven:** a model can be excellent in one domain and badly wrong in the next. Do not assume that competence in one domain carries over to another. (Obsolete if model capability becomes even across domains.) ([[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]])
- **Use a fast model by default and a thinking model for hard problems.** The extra wait for a thinking model is worth it only on problems that need the added accuracy. (Obsolete when routing between models happens automatically or the trade-off disappears.) ([[wiki/Systems/AI & Agentic Systems/Automatic and Deliberate Work with AI|Thinking Models]])
- **Keep each diff small enough to review, and keep each delegated task small enough that you can specify it.** (This loosens as verification tooling grows to handle bigger scopes. More trust in the model does not loosen it.) ([[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]])
- **Learn one layer below the abstraction you work in.** Know enough fundamentals to catch problems that come from the layer below. (The layer worth knowing changes over time. The need to know *some* lower layer may be permanent.) ([[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]])
- **Agent councils miss the same things.** A second model's review counts as a second sample. It does not count as an independent audit. (Obsolete once model families are genuinely diverse, which has not yet been observed.) ([[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]])
- **In domains where results can be verified, spend extra tokens to save your own time.** Give several models the same solved problem, and optimize for your own time instead of token count. A frontier model still costs less than a human. (Obsolete where verification is expensive or the work is creative work that has not been done before. In that work, running more models only produces more low-quality output stated with confidence.) ([[wiki/Concepts/The AI Industrial Revolution|The AI Industrial Revolution]])
- **Write the spec, and leave the plan to the model.** Models now plan without being asked and return trade-offs, so drafting the plan is moving to them. (This makes the planning ritual obsolete. It does not change the spec invariant in section 2.) ([[wiki/Concepts/The AI Industrial Revolution|The AI Industrial Revolution]])

---

*The operating stack and model roster are deliberately kept on [[wiki/Systems/AI & Agentic Systems/Current Agentic LLM Stack|Current Agentic LLM Stack]], a page one layer down that is built to go out of date. Agent-specific setups (Hermes Agent) and the wiki-maintenance routines are also deliberately left out. [[wiki/Workflows/Raw to Wiki Compilation|Raw to Wiki Compilation]] and its sibling pages cover those routines. Splitting the claims into invariants and tactics is itself a claim that can be proven false: if an invariant stops holding, it moves to the successor of section 3, and the move is recorded when it happens.*
