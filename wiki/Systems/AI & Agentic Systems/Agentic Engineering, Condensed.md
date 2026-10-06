---
type: condensed
status: developing
description: "The short rules for building software with AI coding agents, which parts the person keeps and which the agent takes."
created: 2026-06-11
updated: 2026-09-27
method: outline-2026-09-27
prose-model: fable
written-by: opus
tags:
  - agents
  - llm
  - agentic-engineering
  - condensed
---

# Agentic Engineering, Condensed

# Agentic Engineering, Condensed

Agentic engineering is building software with AI coding agents, programs built on a language model that can edit files and run commands. The work keeps a professional's standards: no new security holes, tests that pass, and a person who answers for the code. Knowing which parts go to the agent and which the person keeps means a change the agent built in minutes still gets checked before it ships.

- Vibe coding, asking an AI to build without checks, lets anyone ship something.
- Agentic engineering keeps that speed and adds a professional's checks.
- The person stays responsible for the software.
- The agent recalls a lot and works fast, with uneven judgment.
- Write a spec, a plain description of what to build, before any code.
- Signing off means understanding a change's effects, or owning tests that show them.
- Use the smartest model where a mistake would cost you.

## How it works

The work splits between the agent and the person. The agent writes the code, looks up library details, runs the debugging loops and drafts the tests. The person decides what to build and why, owns the spec and the design choices, reviews each change for design and size, and merges it. The person also picks the large choices, such as which database to use and how users get IDs, and the agent fills in the details around them. The same agent that refactors a codebase of 100,000 lines will suggest walking 50 metres to a car wash with the car, so the person keeps reading its work and treats it as a tool.

| Person keeps | Agent takes |
|---|---|
| what to build and why | writing the code |
| the spec and the design choices | library and API details |
| review for design, taste and size | debugging loops, searching when stuck |
| sign-off and merge | a first draft of tests |

- Reuse a queue, a database or a hosting service instead of rebuilding one.
- Agent code comes out bloated and copy-pasted today.
- Ask the agent to simplify its code, then check it did.
- Proof is a picture or video of the running app.
- A repeated correction becomes a file the agent reads or a build check.
- Judge a task by the hours it saves and what it produced.
- Cheaper models fit support tasks and browser automation.

Some of these rules hold however good the models get: the person is responsible, owns the spec and the design, and ships only what someone can sign for. Others are tactics tied to this year's models, such as how much to correct and which model suits which task, and each tactic carries a date because it goes out of date. The smartest model is worth its price where an error costs, since reading two answers does not tell you which is right, and the hours a task saves count for more than the model's price. On the owner's own setup no agent merges code: a Cursor Cloud Agent, a coding agent on its own cloud machine, writes the application code and hands back a pull request, and the owner merges it himself.

