---
title: "Vibe Coding"
type: concept
status: developing
created: 2026-05-02
updated: 2026-09-24
method: outline-2026-09-24
prose-model: fable
written-by: fable
model: grok
source-count: 6
description: "Building software by describing it to an AI coding agent and accepting the code unread, what that is good for, and where it breaks down."
tags:
  - llm
  - coding
  - agents
---

# Vibe Coding

Vibe coding is building software by telling an AI coding agent what you want in plain English and accepting the code it writes without reading it closely. For a person who does not code, or stopped years ago, it turns a description into a working app in minutes. The code is unchecked, so the practice suits prototypes and personal tools and stops short of software that many other people depend on.

## Core takeaways

- Andrej Karpathy named the practice in February 2025: give the agent control, describe what you want, and let the code exist without reading it.
- Coding agents became reliable enough for this around December 2025. Before that, the chunks of code needed frequent correction.
- The hard part is knowing what you want. The agent handles the tools, the jargon and the plumbing. It cannot decide what the app should be.
- A high-level grasp of how software fits together, such as what an API is and how data flows in and out, is enough to go far.
- Vibe coding lets more people build software at all. Agentic engineering is a separate discipline for keeping professional quality while going faster.
- What comes out is right for prototypes, personal tools and niche apps. An app that must serve many users usually gets rewritten by engineers.
- The share of people who build apps moves from about one in a thousand to a few in a hundred. To most people the computer stays a black box, and an easier tool changes nothing for them.

## How it works

- You open a terminal-based coding agent and describe the app. The agent runs inside the terminal, the text window where commands are typed, so it can create files, install libraries, run commands and tests, and try again when something fails.
- One-shotting: one description in, one working app out. A task list or a clone of an old game comes out usable from a single prompt.
- The agent can plan before it builds: lay out a plan, interview you about it, split the work into chunks, then build the scaffolding and the tests.
- You iterate by feedback, typed or spoken: this works, that does not, move this, change that. The agent takes the correction and keeps going.
- Fallback: the files are ordinary code on disk. When the agent cannot fix something, a programmer can open the files and fix it by hand.
- Code suits an agent because there is a lot of it to learn from and the result is easy to check: code has to compile, run and pass tests.

```
describe the app
      |
      v
agent plans, writes files, runs, tests
      |
      v
you try it ----> works: ask for the next thing
      |
   broken
      v
say what is wrong ----> back to the agent
      |
   stuck: open the files and fix by hand
```

## Where it fails

- Context runs out. As the app's code grows past what the agent can hold in view, the agent starts guessing: it fixes the wrong thing, fixes the same bug several times, and patches at the surface when the fault is in how the app is put together. The operator has to say where to rebuild.
- The agent removes the feature to make the bug go away. If the agent's output is scrolling by unwatched, the removal goes unnoticed.
- The agent agrees with you. Push it toward an answer and it finds that answer. Tell it a change was a hack and it apologises whether or not it was one. Several models reviewing each other's work agree in the same way, since they learned from similar data.
- The code is often weak: poor architecture, possible security holes, hard to scale. For an app that must serve many users, hire engineers and expect a rewrite.
- Edge cases. A good engineer working at the edge of the field still outperforms a vibe coder where the models have little to go on.
- The app may not need to exist. Karpathy built a menu app that took a photo of a restaurant menu and generated a picture of each dish. One prompt to an image model then did the same job with no app at all. Before building, check whether a single prompt already does it.

## What it is good for

- Personal tools tuned to one person. One workout tracker came from a prompt that named the features wanted, pasted a text log of past workouts, and asked for charts and a link to Apple Health. It arrived working.
- Niche apps nobody funded: a tracker for one specific thing, a personality test, a nostalgic game. Before, no one would pay an engineer for a year to build them.
- Rebuilding a product exactly as its maker wants it. One person can redo what a team of eight or nine engineers took nine to twelve months on, with no compromise to anyone else's judgement.
- Inside a company, software engineers build the frameworks and the domain experts vibe code their own pieces. At Boom Supersonic, turbine blade analysis that took one engineer a day per blade became live, and two engineers can now design a whole jet engine.
- Maintenance loops. Users report bugs from inside the app, the logs upload, an agent fixes them overnight into side branches, and a person approves or rejects each fix.
- Learning by doing. Operating the agent forces contact with the command line, caching, latency and other basics.

| | Vibe coding | Agentic engineering |
|---|---|---|
| Aim | Build at all | Build faster at professional quality |
| Who reads the code | Mostly nobody | The engineer, who stays responsible |
| Fit for | Prototypes, personal and niche apps | Software others depend on |
| Effect | More people can build | Skilled people go much faster, past 10x |

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
