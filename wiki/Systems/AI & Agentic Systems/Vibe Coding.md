---
title: "Vibe Coding"
type: concept
status: developing
created: 2026-05-02
updated: 2026-09-27
method: outline-2026-09-27
prose-model: fable
written-by: opus
model: grok
source-count: 6
description: "Building software by describing it to an AI coding agent and accepting the code unread, what that is good for, and where it breaks down."
tags:
  - llm
  - coding
  - agents
---

# Vibe Coding

# Vibe Coding

Vibe coding is building software by telling an AI coding agent what you want in plain English and accepting the code it writes without reading it closely. For a person who does not code, or stopped years ago, it turns a description into a working app in minutes. The code is unchecked, so the practice suits prototypes and personal tools and stops short of software that many other people depend on.

## Core takeaways

- Andrej Karpathy named the practice in February 2025.
- Coding agents became reliable enough for it around December 2025.
- The hard part is knowing what you want.
- A rough grasp of how software fits together is enough.
- It suits prototypes, personal tools and niche apps.
- An app for many users usually gets rewritten by engineers.
- Before building, check whether one prompt already does the job.

## How it works

You open a coding agent that runs in the terminal, the text window where commands are typed, and describe the app. From there the agent can create files, install libraries, run commands and tests, and try again when something fails. You try the result and say what works and what does not, typed or spoken, and the agent takes the correction and keeps going. Code suits an agent because there is a lot of it to learn from and the result is easy to check: it has to compile, run and pass tests.

```
describe the app
      |
agent plans, writes files, runs, tests
      |
you try it --> works: ask for the next thing
      |
   broken --> say what is wrong --> back to the agent
      |
   stuck --> open the files and fix by hand
```

- One-shotting: one description in, one working app out.
  - A task list or a clone of an old game works from one prompt.
- The agent can plan first, interview you, then split the work.
- It builds the scaffolding and the tests before the features.
- The files are ordinary code on disk.
- When the agent is stuck, a programmer can fix them by hand.
- The agent handles tools, jargon and plumbing.
- Deciding what the app should be stays with you.
- Knowing what an API is and how data flows in and out is enough.

## Where it fails

Most failures come from the agent losing track of a growing app. Once the code grows past what the agent can hold in view, it starts guessing: it fixes the wrong thing, fixes the same bug several times, and patches the surface when the fault is in how the app is put together. The person running it has to say where to rebuild. The agent also agrees with whoever pushes it, and several models reviewing each other agree in the same way, since they learned from similar data.

- The agent may remove a feature to make a bug go away.
- If its output scrolls by unwatched, nobody notices the removal.
- Told a change was a hack, it apologises whether or not it was.
- The code often has poor architecture and possible security holes.
- A good engineer still wins where models have little data to learn from.

Some apps do not need to exist: Karpathy built a menu app that took a photo of a restaurant menu and generated a picture of each dish, and one prompt to an image model later did the same job with no app.

## What it is good for

Vibe coding widens who builds software. The share of people who build apps moves from about one in a thousand to a few in a hundred, and most people still will not build software however easy the tool gets. Its best uses are tools too small or too personal for anyone to have paid an engineer to build.

- One prompt, a pasted log and a charts request gave a workout tracker.
  - It linked to Apple Health and arrived working.
- Niche apps: a tracker for one thing, a personality test, a nostalgic game.
- One person can rebuild a product a team of eight took a year on.
- At a company, engineers build frameworks and experts vibe code their pieces.
- At Boom Supersonic, a day of turbine blade analysis per blade became live.
  - Two engineers can now design a whole jet engine.
- Maintenance loop: in-app bug reports, an overnight agent fix, a person approves.
- Running the agent teaches the command line, caching and latency.

Agentic engineering is a separate practice for keeping professional quality while going faster, and the table below compares it with vibe coding.

| | Vibe coding | Agentic engineering |
|---|---|---|
| Aim | build at all | build faster at professional quality |
| Who reads the code | mostly nobody | the engineer, who stays responsible |
| Fit for | prototypes, personal and niche apps | software others depend on |
| Effect | more people can build | skilled people go past 10x |

## Related pages

- [[wiki/Concepts/The AI Industrial Revolution|The AI Industrial Revolution]]: the "don't get stuck" feeling, one factory's two-engineer engine, and building blocks as a token cache.
- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]]: the ceiling this page is not; the routing partner for durable work.
- [[wiki/Systems/AI & Agentic Systems/Context Engineering|Context Engineering]]: the medium vibe coding runs on, and the owner of the menu-photo / spurious-app example.
- [[wiki/Concepts/A Return to Code|A Return to Code]]: the playful loop and the one-shot app rebuilt the way the maker wanted it.
- [[wiki/Concepts/A Motorcycle for the Mind|A Motorcycle for the Mind]]: niche apps the market would not fund an engineer for a year to build.

## Sources

- Andrej Karpathy, [vibe coding](https://x.com/karpathy/status/1886192184808149383), 2 February 2025. The original sentence.
- Andrej Karpathy, [How I use LLMs](https://www.youtube.com/watch?v=EWvNQjAaOHw), ~1:17:00–1:22:16. The agent that edits and runs; fallback to ordinary programming.
- Andrej Karpathy, [From Vibe Coding to Agentic Engineering](https://www.youtube.com/watch?v=96jN2OCOfLs), Sequoia AI Ascent 2026, ~0:47–2:16 and ~15:46–17:18. Floor versus ceiling.
- [[wiki/Concepts/A Return to Code|A Return to Code]]: the playful loop, the rebuilt app, and the price.
- [[wiki/Concepts/A Motorcycle for the Mind|A Motorcycle for the Mind]]: the unbuilt niche apps.
- [[wiki/Concepts/The AI Industrial Revolution|The AI Industrial Revolution]]: Hodak's "don't get stuck," one factory's engine numbers, and building blocks (Rauch citing Hashimoto).
