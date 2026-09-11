---
title: "Agent-Native Infrastructure"
type: concept
status: developing
created: 2026-05-02
updated: 2026-09-11
method: plain-rewrite-2026-09-11
prose-model: fable
written-by: grok
model: grok
source-count: 1
tags:
  - llm
  - agents
  - infrastructure
---

# Agent-Native Infrastructure

Agent-native infrastructure is software and documentation written so an automated worker can read the instructions, see the state, and take the actions, without a human click-path. A setup page that tells a person to go to a URL, open the settings, and connect the services by hand is not agent-native.

## Core takeaways

- An automated worker needs to read the instructions, see the state, and take the actions without a person clicking through a browser.
- Five things have to be exposed to the worker: instructions, sensors, actuators, APIs, and data structures.
- Sensors read the state and actuators change it. Both have to be callable from code. A control that exists only in a browser page does not count.
- The test is a prompt. If a prompt produces a deployed thing and nobody touches a browser settings page, the infrastructure is agent-native.
- This vault exposes four public files to a worker: `notes/index.md`, `log.md`, `AGENTS.md`, and the Source Index.

## The five things a worker needs

Most of today's software stack is still written for a person. To make it usable by an automated worker, five things have to be exposed: instructions, sensors, actuators, APIs, and data structures. Sensors are ways of reading the state. Actuators are ways of changing the state. Both have to be callable from code. A sensor or actuator that exists only in a browser page is not usable by a worker.

## What this looks like in practice

Setup is written as tasks an agent can run. Command-line and API surfaces replace a fragile settings page. Docs include a prompt the reader can paste. Project state and deploy state are stored in a form a model can parse.

If a person gives a prompt and gets a deployed thing without touching a browser settings page, the infrastructure is agent-native.

Agents talking to other agents on behalf of people or organizations comes later. That is a consequence of the property. The definition does not include it.

## How this vault does it

This wiki should be easy for a model to operate. [[wiki/Systems/AI & Agentic Systems/Context Engineering|LLM Knowledge Systems]] describes how a notes vault becomes that kind of surface. Four public files in this vault already do that job:

- `notes/index.md` tells the worker what exists.
- `log.md` tells the worker what happened recently.
- `AGENTS.md` tells the worker how to act.
- The Source Index tells the worker what sources exist and their status.

Together these four files make the vault more agent-native than a normal folder of notes. Agents also use an exhaustive catalog locally. That catalog is not a public operating file.

A README that still sends a person through a settings page is not agent-native. The same test applies to a README. Can a prompt produce the deployed thing, or does a person still have to click?

## How to practice this

1. Give an agent a prompt that asks for a deployed thing. Notice whether it finishes without you touching a browser settings page.
2. Read the setup page of one project you use. Notice whether it tells you to go to a URL, open the settings, and connect services by hand. A page like that is written for a person.
3. List what one project exposes under five headings: instructions, sensors, actuators, APIs, and data structures. Notice which headings have nothing a worker can call.
4. Find where one project keeps its project state and deploy state. Notice whether a model can parse that form without a browser.
5. For a notes vault, look for four public files. One lists what exists, one logs what happened recently, one says how to act, one lists sources and their status. Notice which of the four is missing.

## Related pages

- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]], the professional system that uses agent-native surfaces.
- [[wiki/Systems/AI & Agentic Systems/Context Engineering|Software 3.0]], the broader frame that this property is part of.
- [[wiki/Systems/AI & Agentic Systems/Context Engineering|LLM Knowledge Systems]], how a notes vault becomes operable by a model.

## Sources

- Andrej Karpathy, [From Vibe Coding to Agentic Engineering](https://www.youtube.com/watch?v=96jN2OCOfLs), AI Ascent 2026 (Sequoia Capital), ~26:00–26:59. The talk is where the claim comes from. The talk does not set a required stack.
