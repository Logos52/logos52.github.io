---
type: condensed
status: developing
description: "The agentic engineering corpus as doctrine, split by half-life: invariants expected to survive far more capable models — taste, specs, verification, understanding — and dated tactics stamped 2026-06 and expected to rot."
created: 2026-06-11
updated: 2026-06-11
tags:
  - agents
  - llm
  - agentic-engineering
  - condensed
---

# Agentic Engineering, Condensed

**The corpus in one paragraph:** agents are tireless junior collaborators with huge recall, fast execution, and jagged judgment — they move implementation faster than traditional workflows, and the engineering bar survives only if human judgment, architecture, verification, and taste protect it. Vibe coding raises the floor: anyone can build. Agentic engineering raises the ceiling: speed without surrendering correctness, security, or responsibility. The human role moves up the stack — spec writer, taste holder, architect, reviewer, director — because thinking can be outsourced and understanding cannot. Everything below is split by half-life: the invariants should hold however capable the models become; the tactics are stamped with their date and expected to rot.

---

## 1. Invariants — the human role

These are claims about responsibility and judgment, not about model capability — which is why more capable models don't dissolve them.

- **Outsource thinking, never understanding.** Agents generate options, code, and summaries; the human must hold enough internal model to know what is worth building, what is true enough, and how to steer ([[wiki/Concepts/Understanding Bottleneck|Understanding Bottleneck]]).
- **Taste, judgment, architecture, spec, understanding** — the five things that stay human as agents improve; each is about *what good looks like*, which no implementation speed supplies ([[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]]).
- **Define the quality bar before delegating.** A delegation without a stated bar inherits the agent's bar ([[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]]).
- **Verify the artifact, never the explanation.** Run the build, inspect the diff, check behavior — a polished account of the work is not the work ([[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]]).
- **Verifiability is leverage.** Steer by externally checkable facts — tests, builds, logs, runnable commands — and design work so those checks exist ([[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]]).
- **Acceleration needs direction.** The motorcycle multiplies speed; the rider supplies destination, curiosity, and the noticing of wrongness ([[wiki/Concepts/A Motorcycle for the Mind|A Motorcycle for the Mind]]).
- **Disposable vs durable is the dividing line.** Vibe-code the experiments; engineer the systems you'll still be running next year ([[wiki/Systems/AI & Agentic Systems/Vibe Coding|Vibe Coding]], [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]]).

## 2. Invariants — the medium

- **Natural language is now a programming medium.** Context, instructions, examples, and constraints are interpreted as executable intent — so specs are source code, and writing better specs is writing better software ([[wiki/Systems/AI & Agentic Systems/Software 3.0|Software 3.0]]).
- **Shape the context around the task.** What the model can see *is* the program; indexes, constraints, examples, and desired-output shapes are engineering, not prompt garnish ([[wiki/Systems/AI & Agentic Systems/Context Engineering|Context Engineering]]).
- **Build agent-native surfaces.** Copy-pasteable instructions, CLI commands, machine-readable state, API-first workflows — infrastructure legible to agents gets tended by agents ([[wiki/Concepts/Agent-Native Infrastructure|Agent-Native Infrastructure]]).
- **Knowledge compounds in durable files.** Collect sources, compile to linked pages, query against the compiled layer, audit for drift — the wiki pattern that makes agent work accumulate instead of evaporate ([[wiki/Systems/AI & Agentic Systems/LLM Knowledge Systems|LLM Knowledge Systems]]).
- **Convert repeated mistakes into instructions or tools.** An agent error that happens twice is a missing rule, not bad luck; file durable lessons back into the system ([[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]]).
- **The cost of custom software falls toward the cost of asking clearly** — one-shot apps for one person, one task, one afternoon become rational ([[wiki/Concepts/A Return to Code|A Return to Code]]).

## 3. Dated tactics — written 2026-06, expected to rot

Operating adjustments for the models of this moment. Each line names what would obsolete it.

- **Models are jagged:** brilliant in one domain, bizarrely wrong in the next — never extrapolate competence across domains. (Obsoleted if capability surfaces smooth out.) ([[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]])
- **Fast model by default, thinking model when it's hard** — latency buys accuracy only on problems that need it. (Obsoleted when routing happens automatically or the trade-off collapses.) ([[wiki/Systems/AI & Agentic Systems/Thinking Models|Thinking Models]])
- **Keep diffs small enough to review and delegations small enough to specify.** (Relaxes as verification tooling — not model trust — scales to bigger scopes.) ([[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]])
- **Learn one layer below the abstraction** — enough fundamentals to catch the leaks. (Shifts as the layer worth knowing moves; the need for *some* lower layer may be permanent.) ([[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]])
- **Agent councils share blind spots.** A second model's review is a second sample, not an independent auditor. (Obsoleted by genuinely diverse model families — not yet observed.) ([[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]])

---

*Omitted deliberately: the operating stack and model roster ([[wiki/Systems/AI & Agentic Systems/Current Agentic LLM Stack|Current Agentic LLM Stack]] — rots by design, lives one layer down), agent-specific setups ([[wiki/Systems/AI & Agentic Systems/Hermes Agent|Hermes Agent]]), and the wiki-maintenance drills ([[wiki/Workflows/Raw to Wiki Compilation|Raw to Wiki Compilation]] and siblings own them). The invariants/tactics split is itself a falsifiable bet: an invariant that rots belongs in §3's successor, and the move gets recorded when it happens.*
