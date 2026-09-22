---
title: "Poteto Paved Path"
type: concept
status: developing
created: 2026-09-22
updated: 2026-09-22
description: "You can leave an agent alone after the files, not the prompt, are what the next session will copy."
method: plain-rewrite-2026-09-22
prose-model: grok
written-by: grok
tags:
  - agents
  - agentic-engineering
  - cursor
  - grok-bot
---

# Poteto Paved Path

You can leave an agent working once you trust what it will leave in the files. The next agent copies the pattern it finds there, so a longer prompt does not carry over. The codebase is the memory.

Getting there takes three kinds of work. First you give the agent a way to check that the feature does what a person came to do. A feature map lists the parts of the app and how someone reaches them. A command runs the real app and saves the proof. Until those exist, you are still the one checking. Next you keep a skill in the repo, such as pstack, so the next session can load the working method. The agent can still skip a skill. The change that lasts is in the architecture. Agents take the shortcut, so you make the shortcut the correct edit.

A new program is greenfield. Nothing stops the short edit yet, and the next agent copies it until that edit is the structure. Grok Bot started as that kind of prototype. Dune is the framework it runs on now. Each kind of code has one folder and one job, and a bad comment or a bad import fails the build. An older program is brownfield. It already has checks, the way a rule can stop a new person from deleting the live database. Your job there is to add a check where agents still get through.

You call the spread mold. It grows the way weeds do, one shortcut sending up copies. A gardener pulls the debt that is already in the files, keeps one paved path, and adds a lint before the copies take over.

When the files can hold an agent, the rest of the work looks like a Michelin kitchen. You still answer for what ships, and you are no longer making each part yourself. Grok Bot is the line cook. It watches Slack, Sentry, Datadog, and PlanetScale, and it starts the next station. Cloud agents do the edit on another computer and open a pull request. Automations and the Agent SDK are the team that starts those agents from events. A helper does not merge.

## How to use this

1. When you correct an agent, change the files so the same mistake cannot be written again.
2. If you cannot change the files yet, add a lint, a compiler error, or a CI check that fails the build.
3. A rule, Bugbot, or a skill is worth having, and any of them can be skipped, so do not leave the correction there.
4. A style guide and a longer prompt only work if you are in the room. The next session will not have them.
5. On a new codebase, choose the one allowed way before agents start writing. On an old codebase, add a check at the place where they keep taking the wrong shortcut.
6. When you see mold, delete what is already there, keep one paved path, and add the lint while you are still cleaning up.
7. On this wiki, name the page before a draft starts, then open it and read it. `scripts/holdings.py` and `scripts/source-words-check.py` are the checks you already have. You are not running the kitchen here yet, because you still read the page yourself.

## The slides

The original slides, in order, with the webcam cropped out.

### Agenda

![Agenda](poteto-slides/01-agenda.jpg)

### Michelin kitchen

![Michelin kitchen](poteto-slides/02-michelin-kitchen.jpg)

### Five thousand pull requests

![5000 plus PRs](poteto-slides/03-five-thousand-prs.jpg)

### Trust and the number of agents

![Trust curve](poteto-slides/04-trust-curve.jpg)

### How do I trust my agents more?

![How do I trust my agents more](poteto-slides/05-how-to-trust.jpg)

### High-quality verification

![Feature map and CLI](poteto-slides/06-feature-map.jpg)

### Whenever you correct your agent

![Whenever you correct your agent](poteto-slides/07-whenever-you-correct.jpg)

### Your codebase is memory

![Your codebase is memory](poteto-slides/08-codebase-is-memory.jpg)

### Gardeners

![Gardener](poteto-slides/09-gardener.jpg)

### Dune

![Dune](poteto-slides/10-dune.jpg)

### Five nouns

![Five nouns](poteto-slides/11-five-nouns.jpg)

### Process boundaries

![Process boundaries](poteto-slides/12-process-boundaries.jpg)

### A feature adds files, not registry branches

![A feature adds files](poteto-slides/13-feature-adds-files.jpg)

### Host-backed feature blueprint

![Host-backed feature blueprint](poteto-slides/14-host-backed-blueprint.jpg)

### The three stations

![Kitchen stations](poteto-slides/15-kitchen-stations.jpg)

### Benny

![Benny](poteto-slides/16-benny-thread.jpg)

### The close

![Closing list](poteto-slides/17-closing-list.jpg)

## Related pages

- [[wiki/Systems/AI & Agentic Systems/pstack|pstack]]: the written procedures for proof from the running app. You do not install them to copy a count of pull requests.
- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]]: you keep the judgment of whether a result is right, and a check beats a feeling that it is.
- [[wiki/Systems/Agentic Workflows/Karpathy LLM-Wiki|Karpathy LLM-Wiki]]: the same split between a file that stays and a chat that disappears, applied to pages instead of to code.
- [[wiki/Systems/AI & Agentic Systems/Using Grok Bot|Using Grok Bot]]: a helper can watch and report. You still read, and you still merge.
- [[wiki/Systems/AI & Agentic Systems/Cursor Cloud Agents|Cursor Cloud Agents]]: the separate computer that opens a pull request after the laptop is closed, once you trust the files enough to leave an agent there.

## Sources

- Lauren Tan, recording posted 21 Sep 2026, for Cursor Compile in London: https://x.com/poteto/status/2102050467505430555. The slide "how do i trust my agents more?" lists verification for correctness, skills such as pstack, and refactoring the architecture to be agent friendly, with the grey note "greenfield vs brownfield." The closing list puts a correction in the codebase, then static analysis, then rules and Bugbot, then skills, then a style guide.
- Earlier workshop, the trust curve, the feature map, the command that drives the app, and the contrast between a new program and a program that already constrains a new hire: https://www.youtube.com/watch?v=Cmoh-yR-usA and the transcript at https://cho.sh/w/7D77B5. That account includes the move of the Grok Bot app onto Dune.
- Dune named on 11 Aug 2026, in the post quoted at https://x.com/MarkVillacampa/status/2087458215386632229.
- pstack: https://github.com/cursor/plugins/tree/main/pstack.
- The two wiki checks named above are `scripts/holdings.py` and `scripts/source-words-check.py` in this knowledge base.
