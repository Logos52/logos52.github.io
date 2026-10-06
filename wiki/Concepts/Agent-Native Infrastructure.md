---
title: "Agent-Native Infrastructure"
type: concept
status: developing
created: 2026-05-02
updated: 2026-09-27
method: outline-2026-09-27
prose-model: fable
written-by: opus
model: grok
source-count: 1
description: "Software and docs an AI agent can read, check and act on by itself, and the one-prompt test that shows whether a tool is there."
tags:
  - llm
  - agents
  - infrastructure
---

# Agent-Native Infrastructure

Agent-native infrastructure is software, a hosted service or its documentation written so that an AI agent can read the instructions, see the current state and take the actions by itself, with no web page a person has to click through. It matters as soon as a build or a deploy is handed to an agent. Each step that still needs a person in a settings menu is a step the agent cannot finish, so the job comes back to the person.

- An agent finishes a job only when every step is callable.
- Callable means a command, an API call or a readable file.
- Docs that say "open settings" stop an agent.
- Agent-ready docs start with text to paste into the agent.
- The test is one prompt reaching a live result with nobody stepping in.
- In 2026 most tools fail at the deploy and wiring steps.
- No particular stack is required.

## How it works

Any job can be split into the parts that read the world and the parts that change it. The reading parts are sensors: a status call, a log file, a config file. The changing parts are actuators: a deploy command, a DNS record update, a write to a setting. An agent needs both kinds described to it in text, and it works best on data a model reads easily, meaning plain files, structured text and a command line.

- A tool has five things to expose.
- They are instructions, sensors, actuators, APIs and data structures.
- If any one sits only behind a browser page, the agent stops there.
- Old installers were shell scripts grown to cover every machine.
- Now a block of text goes to the agent instead.
- The agent checks its machine, follows the text and fixes problems.
- Later, agents may act for people and settle details between themselves.
- A meeting time is one such detail.

```
old: person reads docs -> clicks settings -> sets DNS -> live
new: one prompt -> agent reads state -> agent calls APIs -> live
```

The one-prompt test came from a small app that turns a photo of a restaurant menu into pictures of the dishes. Writing the code took little of the time. Deploying it meant stringing several hosted services together, opening each one's settings menu and setting up DNS by hand. None of that could be handed to an agent, because it lived in menus.

## How to apply it

A tool becomes agent-native when every action a person can take in its web pages also exists as something a program can call. Most of the work is in the docs and the settings, since the code itself is rarely where an agent gets stuck. The quickest check is the last line of a README.

- Write setup as tasks an agent can run.
- Give every settings-page action a command or API equivalent.
- Open the docs with the text to paste into an agent.
- Keep project and deploy state in parseable files or endpoints.
- A README that ends in a settings page still needs a person.
- A README ending in a command can be run by an agent.

## How this desk applies it

The owner keeps a vault of notes, arranged so that a model can operate it. A person reading it in an editor comes second. Four public files are there for the model, and a fuller catalog that agents use locally stays private.

- notes/index.md: an index of what the vault holds.
- log.md: a record of what changed.
- AGENTS.md: the rules an agent follows.
- The Source Index: which source fed which page.

## Related pages

- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]], the professional system that uses agent-native surfaces.
- [[wiki/Systems/AI & Agentic Systems/Context Engineering|Context Engineering]], the broader frame that this property is part of.

## Sources

- Andrej Karpathy, [From Vibe Coding to Agentic Engineering](https://www.youtube.com/watch?v=96jN2OCOfLs), AI Ascent 2026 (Sequoia Capital), ~26:00–26:59. The talk is where the claim comes from. The talk does not set a required stack.
