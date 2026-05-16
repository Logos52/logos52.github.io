---
type: hub
status: developing
created: 2026-05-02
updated: 2026-05-11
source-count: 9
last-audited: 2026-05-07
tags:
  - llm
  - agents
  - engineering
  - software-3
  - ai-workflows
---

# Agentic Engineering

AI agents can move implementation faster than traditional workflows, but the engineering bar still has to be protected by human judgment, architecture, verification, and taste.

Karpathy's distinction is useful: [[wiki/Systems/AI & Agentic Systems/Vibe Coding|Vibe Coding]] raises the floor; agentic engineering raises the ceiling. Vibe coding lets many more people build. Agentic engineering is what skilled operators do when they want speed without giving up correctness, security, architecture, taste, and responsibility.

The core shift is that the human increasingly operates as spec writer, taste holder, architect, reviewer, and director of agents.

## Core Idea

Agents are like tireless junior collaborators with huge recall, fast execution, and jagged judgment.

They can handle API details, boilerplate, refactors, shell commands, file edits, first-pass debugging, and repetitive implementation. They are much weaker at taste, architecture, identity, product judgment, security boundaries, unstated assumptions, and knowing when a local solution violates a larger system.

Agentic engineering therefore means:

- use agents for speed;
- keep humans in charge of direction;
- make specs more explicit;
- verify outputs against reality;
- learn the fundamentals beneath the abstraction.

## Best Practices

### 0. Practice The Approach Layer

Agentic engineering often looks like an execution problem because agents can produce code quickly. The higher-leverage bottleneck is usually approach quality: context, ownership, constraints, acceptance criteria, verification, and taste.

Use [[wiki/Dimensions/Deep Processing/Interleaving for Complex Problem Solving|Interleaving for Complex Problem Solving]] to vary the same workflow across planning, prompting, implementation, review, debugging, and documentation. The point is to make the human better at framing the work, not only faster at asking for code.

### 1. Preserve The Quality Bar

The simplest rule: agent-written work must still meet the same standard as human-written work.

Do not accept vulnerabilities, brittle architecture, messy abstractions, broken tests, privacy leaks, or unclear behavior because "the agent made it fast." Speed is only useful if the result remains trustworthy.

Practical checks:

- Run the build and tests.
- Inspect the diff.
- Check for unrelated edits.
- Review behavior, not just the agent's explanation.

### 2. Write Better Specs

Karpathy's point is that the human must still own the spec and plan. Agents can fill in details, but they often make strange choices when the deeper design is underspecified.

A good agentic spec includes:

- what is being built;
- what should not change;
- what existing patterns to follow;
- what edge cases matter;
- how the result will be checked.

The best specs often become docs. The docs guide the agent, guide the human review, and remain useful after the session.

### 3. Learn One Layer Below

Naval's strongest point is that abstractions leak. AI coding agents are a new abstraction layer, but the best operators still understand the layer underneath.

If the agent writes React, understand components, state, routing, rendering, and CSS enough to spot bad structure. If it writes backend code, understand data models, auth, caching, latency, and failure modes. If it uses a shell, understand files, processes, package managers, and logs.

The agent can remember the API syntax. You need to understand the system.

### 4. Use Verifiability As Leverage

Karpathy emphasizes that models are strongest in domains where outputs can be verified. Code is powerful because feedback is concrete:

- tests pass or fail;
- builds break;
- logs show errors;
- reviewers can inspect diffs;
- the app runs or does not.

Agentic engineering should lean into this. Convert vague quality into checks whenever possible. If a task cannot be verified, slow down and keep the human closer to the loop.

### 5. Keep Context Clean

Agents are only as good as the context they can use. Give them the right files, constraints, examples, commands, and prior decisions. Remove noise when possible.

For this vault, [[notes/index|notes/index.md]], [[log|log.md]], [[raw/Source Index|Source Index]], and [[AGENTS]] are agentic engineering artifacts. They make the environment legible to future agents.

Good context answers:

- Where am I?
- What matters?
- What should I avoid?
- What command proves this works?

### 6. Build Agent-Native Infrastructure

Karpathy's agent-native point is practical: tools, docs, and workflows should increasingly be written for agents to use directly.

Instead of only writing "click here, open this menu, configure this setting," provide:

- copy-pasteable agent instructions;
- CLI commands;
- machine-readable state;
- API-first workflows;
- examples and expected outputs.

The best infrastructure gives agents sensors, actuators, and legible state.

### 7. Use Agents As Reviewers, But Do Not Trust A Council Blindly

Naval notes that multiple agents reviewing each other can help, but they often share the same blind spots. A council of models can still become groupthink.

Use agent review for obvious bugs, security concerns, alternative designs, generated tests, assumption checks, and large-diff scanning. But the human still owns taste, priority, and final judgment.

### 8. Prefer Small, Clear Delegations

Agents work best when the job is bounded. Good delegation:

- "Update this one page from these sources."
- "Find privacy leaks matching these strings."
- "Add tests for this function."
- "Explain this failing build log."

Weak delegation:

- "Make this better."
- "Refactor everything."
- "Improve the architecture."
- "Research this whole field and update the wiki."

Big work can still be done, but it should be broken into reviewable chunks.

## The Human Role

As agents improve, the human role shifts upward:

- **Taste:** what good looks like.
- **Judgment:** what matters and what tradeoffs are acceptable.
- **Architecture:** how parts should fit.
- **Spec:** what the system must do.
- **Understanding:** enough internal model to steer the agents.

This is Karpathy's "you can outsource thinking but not understanding" point. The agent can process, draft, search, and implement. The human still has to understand enough to direct the work.

## Common Failure Modes

- Accepting a polished explanation instead of checking the artifact.
- Letting implementation speed create scope creep.
- Trusting code because it works once.
- Allowing the agent to invent architecture instead of following the codebase.
- Forgetting that models are jagged: brilliant in one area, bizarrely wrong in another.
- Losing skill in the layer below the abstraction.

## Personal Rules

- Use vibe coding for disposable experiments.
- Use agentic engineering for durable systems.
- Always define the quality bar before delegating.
- Keep diffs small enough to review.
- Verify with commands, not vibes.
- Ask agents to critique, but expect shared blind spots.
- Learn enough fundamentals to catch leaky abstractions.
- Convert repeated agent mistakes into instructions or tools.
- Keep private material out of public outputs.
- File durable lessons back into the wiki.

## Hybrid Model Workflows

When working on complex, long-term knowledge work, using multiple models in a deliberate way can be more effective than relying on a single model. See [[wiki/Systems/AI & Agentic Systems/Hybrid Model Workflows, Grok + Hermes|Hybrid Model Workflows, Grok + Hermes]] for how Grok and Hermes are currently combined for this vault — one for high-level reasoning and the other for direct file work and execution.

## Related Pages

- [[wiki/Systems/AI & Agentic Systems/Vibe Coding|Vibe Coding]]
- [[wiki/Systems/AI & Agentic Systems/Software 3.0|Software 3.0]]
- [[wiki/Concepts/Agent-Native Infrastructure|Agent-Native Infrastructure]]
- [[wiki/Concepts/Understanding Bottleneck|Understanding Bottleneck]]
- [[wiki/Systems/AI & Agentic Systems/Context Engineering|Context Engineering]]
- [[wiki/Dimensions/Deep Processing/Interleaving for Complex Problem Solving|Interleaving for Complex Problem Solving]]
- [[wiki/Concepts/A Motorcycle for the Mind|A Motorcycle for the Mind]]
- [[wiki/Concepts/A Return to Code|A Return to Code]]
- [[wiki/Red Team/Red Teaming|Red Teaming]]

## Sources

- [[Andrej Karpathy From Vibe Coding to Agentic Engineering|Andrej Karpathy: From Vibe Coding to Agentic Engineering]]
- [[How I use LLMs|How I use LLMs]]
- [[raw/sources/A Motorcycle for the Mind|A Motorcycle for the Mind]]
- [[raw/sources/A Return to Code|A Return to Code]]
- Anthropic, "[Building effective agents](https://www.anthropic.com/engineering/building-effective-agents)".
- OpenAI, "[Agents SDK](https://developers.openai.com/api/docs/guides/agents)".
- HumanLayer, "[12 Factor Agents](https://www.humanlayer.dev/blog/12-factor-agents)".

## Open Questions

- What should my personal agentic engineering checklist be?
- Which tasks should be vibe coded, and which require full agentic engineering?
- What fundamentals do I need one layer below my current agent workflows?
- Which parts of this vault should become scripts instead of manual agent instructions?
- Which current agent workflow would benefit most from a tighter spec?
