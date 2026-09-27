---
type: condensed
status: developing
description: "The rules for building software with AI coding agents without losing the professional standard: what the person keeps, what the agent takes, who signs off."
created: 2026-06-11
updated: 2026-09-24
method: outline-2026-09-24
prose-model: fable
written-by: fable
tags:
  - agents
  - llm
  - agentic-engineering
  - condensed
---

# Agentic Engineering, Condensed

Agentic engineering is building software with AI coding agents, language models that can edit files and run commands, while keeping professional standards: no new security holes, tests that pass, and a person who takes responsibility for the code. It settles which parts of the work go to an agent and which parts a person keeps, so that a change built quickly by an agent is still checked before it ships.

## Core takeaways

- Vibe coding lets anyone build something that runs. Agentic engineering keeps that speed and adds the checks a professional would demand, and the person stays responsible for the software.
- An agent recalls a great deal and works fast, and its judgment is uneven: the agent that refactors a codebase of 100,000 lines will also suggest walking 50 metres to a car wash with your car. Where its judgment is uneven, the person stays in the loop and treats it as a tool.
- The person still has to understand what is being built and why. The agents do not supply that, and it sets a limit on how far they can be directed.
- Write a spec, a plain description of what to build, with the agent before any code. The agent fills in details; the person owns the design choices, such as which database to use or that every user gets a permanent ID.
- Signing off on a change means you understand its consequences, or you wrote the tests and checks that show it is safe. This does not require reading every line.
- A model run is cheaper than a person, so judge a task by how many hours it took you and by what came out, and do not count tokens, the units the model is billed by.
- Use the smartest model available when a mistake would cost you, because you cannot tell which of two answers is right by reading them. Cheaper models fit support tasks and browser automation.

## How it works

| Person keeps | Agent takes |
|---|---|
| what to build and why | writing the code |
| the spec and the design choices | library and API details |
| review for design, taste and size | debugging loops, the search when stuck |
| sign-off and merge | a first draft of tests |

- Split the rules by how long they last.
  - Rules that hold however good the model gets: the person is responsible, the person owns the spec and the design, a change ships only when someone can sign for it.
  - Tactics tied to this year's models: how much to correct, which model for which task, what the agent still gets wrong. Tactics go out of date, so each tactic gets a date.
- Before the work: lock the written spec. Reuse existing building blocks, a queue, a database, a hosting service, instead of letting the agent rebuild them.
- During the work: the agent writes, the person reviews. Agent code today is bloated and copy-pasted, and models resist making it simpler, so ask for the simplification and check that it happened.
- After the work: a picture or video from the app as it runs, then a person merges. In the owner's own setup no agent merges code. A Cursor Cloud Agent, a coding agent on its own cloud machine, writes the application code and hands back a pull request, a proposed change for review, and the owner merges it himself. No UI work counts as done without a picture from the running app.
- Over time: implementation goes to the agent, and picking technologies and architecture stays with the person. A correction you find yourself repeating in chat goes into the setup instead, as a file the agent reads or a check that fails the build.

