---
title: "Agent-Native Infrastructure"
type: concept
status: developing
created: 2026-05-02
updated: 2026-09-24
method: outline-2026-09-24
prose-model: fable
written-by: fable
model: grok
source-count: 1
description: "Software and docs an AI agent can read, check and act on by itself, and the one-prompt test that shows whether a tool has got there."
tags:
  - llm
  - agents
  - infrastructure
---

# Agent-Native Infrastructure

Agent-native infrastructure is software, a hosted service or its documentation written so that an AI agent can read the instructions, see the current state and take the actions on its own, with no web page a person has to click through. It matters the moment a build or a deploy is handed to an agent: each step that still needs a person in a settings menu is a step the agent cannot finish, so the job comes back to the person.

## Core takeaways

- An agent can finish a job only when every step is callable: a command, an API call, or a file it can read and write.
- Docs written for a person (go to this URL, open settings) stop an agent; docs written for an agent give a block of text to paste in and let the agent do the rest.
- A prompt tests a tool: if "build this and deploy it" runs to a live result without a person touching anything, the infrastructure is agent-native.
- In 2026 most frameworks, libraries and hosting services fail that test, and the failure is usually in deploy and wiring rather than in the code.
- No particular stack is required; what counts is what a tool exposes, whichever tool it is.

## How it works

- Split any job into parts that read and parts that change.
  - Sensors: parts that read the world, such as a status call, a log file or a config file.
  - Actuators: parts that change the world, such as a deploy command, a DNS record update or a settings write.
- Describe both to the agent first, in text, then build automation around data a model can read easily: plain files, structured text, a command line.
- A tool has five things to expose: instructions, sensors, actuators, APIs and data structures. When any of them sits only behind a browser page, the agent stops there.
- Installing a program is a clear example. Before, a shell script that grew to cover every kind of machine did the work. Now a block of text is handed to the agent; the agent looks at the machine it is on, follows the instructions and fixes problems as it goes.
- A later step: agents that act for a person or a company and talk to each other to settle details such as a meeting time.

```
old:  person reads docs -> clicks settings -> sets DNS -> live
new:  one prompt -> agent reads state -> agent calls APIs -> live
```

The example that produced the test was a small app that turns a photo of a restaurant menu into pictures of the dishes. Writing the code took little of the time. Deploying it meant stringing several hosted services together, opening each one's settings menu and setting up DNS by hand, and none of that could be handed to an agent because it lived in menus.

## How to apply it

- Write setup as tasks an agent can run, in place of a numbered list for a person.
- Give every action on the settings page a command line or API equivalent.
- Open the docs with the text to paste into an agent.
- Keep project and deploy state in files or endpoints a program can parse.
- Check a README by its ending: a settings page means a person still clicks; a command means an agent can run it.

## How this desk applies it

- The owner's vault of notes is kept so that a model can operate it; a person reading in an editor comes second.
- Four public files serve the model: notes/index.md, an index of what the vault holds; log.md, a record of what changed; AGENTS.md, the rules an agent follows; and the Source Index, which says which source fed which page.
- A fuller catalog that agents use locally stays private.

## Related pages

- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]], the professional system that uses agent-native surfaces.
- [[wiki/Systems/AI & Agentic Systems/Context Engineering|Context Engineering]], the broader frame that this property is part of.

## Sources

- Andrej Karpathy, [From Vibe Coding to Agentic Engineering](https://www.youtube.com/watch?v=96jN2OCOfLs), AI Ascent 2026 (Sequoia Capital), ~26:00–26:59. The talk is where the claim comes from. The talk does not set a required stack.
