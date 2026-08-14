---
title: "Agent-Native Infrastructure"
type: concept
status: developing
created: 2026-05-02
updated: 2026-08-14
written-by: grok
model: grok
source-count: 1
tags:
  - llm
  - agents
  - infrastructure
---

# Agent-Native Infrastructure

Agent-native infrastructure is software and documentation written so an automated worker can read the instructions, see the state, and take the actions, without a human click-path. A setup page that says go to this URL, open the settings, and wire the services by hand is the thing this is not.

## What gets exposed

Most of today's stack is still written for a person. The fix is to expose five things a worker can actually use: instructions, sensors, actuators, APIs, and data structures. Sensors are ways of reading the world. Actuators are ways of changing it. Both have to be callable, not hidden behind a browser.

In practice that looks like setup written as tasks an agent can run, command-line and API surfaces that skip a fragile settings page, docs that include a prompt you can paste, and project and deploy state stored in a form a model can parse. The checkable version is simple. If you can give a prompt and get a deployed thing without touching a browser settings page, the infrastructure has become agent-native.

A later implication, not the definition: agents talking to other agents on behalf of people or organizations.

## This vault

This wiki should be easy for a model to operate. [[wiki/Systems/AI & Agentic Systems/LLM Knowledge Systems|LLM Knowledge Systems]] is how a notes vault becomes that kind of surface. Four public files already do the work:

- `notes/index.md` tells the worker what exists.
- `log.md` tells the worker what happened recently.
- `AGENTS.md` tells the worker how to act.
- The Source Index tells the worker what sources exist and their status.

Together they are more agent-native than a normal folder of notes. The exhaustive catalog that agents use locally is not a public operating file.

A README that still sends a person through a settings page has not made this turn. The same definition, as a test: can a prompt produce the deployed thing, or does someone still have to click?

## Related

- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]] — the professional system that uses agent-native surfaces.
- [[wiki/Systems/AI & Agentic Systems/Software 3.0|Software 3.0]] — the broader frame this property is a piece of.
- [[wiki/Systems/AI & Agentic Systems/LLM Knowledge Systems|LLM Knowledge Systems]] — how a notes vault becomes operable by a model.

## Sources

- Andrej Karpathy, [From Vibe Coding to Agentic Engineering](https://www.youtube.com/watch?v=96jN2OCOfLs), AI Ascent 2026 (Sequoia Capital), ~26:00–26:59. The talk is the source of the claim, not a required stack.
