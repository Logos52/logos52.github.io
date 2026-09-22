---
title: "Poteto Paved Path"
type: concept
status: developing
created: 2026-09-22
updated: 2026-09-22
description: "Trust is how many agents you can leave alone. A harder prompt does not raise it. The codebase is the memory the next agent copies."
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

Trust is how many agents you can leave alone. A harder prompt does not raise it, because the next agent opens the files and extends the pattern already there. The codebase is the memory.

## How do you trust an agent more?

Verification for correctness comes first. A feature map says what the app can do and how a person reaches it. A command runs the real app and saves the proof. Until those two exist, you are still the check.

High quality skills come next, and pstack is the example. The procedure lives in the repo, so the next session can load it. The agent can still skip it. You do not install pstack in order to copy someone else's pull-request count.

Then you refactor the architecture so it is agent friendly. Agents like the shortcut, so the shortcut has to be the correct edit.

A greenfield program has no walls yet. The short edit becomes the structure, and the next agent copies it. Grok Bot started as that kind of prototype. Dune is what the app runs on now. Each kind of code has one folder and one job. A bad comment fails the build, because agents were treating the comment as permission to patch over the bug. A bad import fails the build.

A brownfield program already has walls. A new person cannot delete the live database, and an agent that copies the files stays inside those walls. You add a wall where agents still fall through.

A gardener stops the spread. It grows like weeds. You call it mold. The three moves are delete tech debt, keep one paved path, and lint against anti-patterns. Catch the mold while it is still one patch.

## Whenever you correct your agent

Put the correction as high on this list as it can go.

1. Codebase. Change the files so the mistake cannot be written.
2. Static analysis (lint/compiler/ci). Make the build fail.
3. Rules/bugbot. A written rule can be skipped.
4. Skills. A procedure in the repo can also be skipped.
5. "Style guide." Only a person reading the change can apply it. A harder prompt lives here.

## Your code, and this wiki

The files you accept are the memory. A shortcut you leave is the pattern the next edit copies.

On this wiki, the pages you have already accepted are the brownfield, along with two checks. `scripts/holdings.py` rejects a sentence that points at something the page never named. `scripts/source-words-check.py` rejects a sentence that points at where the words came from. A page you have not named is the greenfield. You name it, you open it, and you read it. A bad sentence left in place is mold.

## Building a Michelin kitchen

The picture for the outer loop is a Michelin kitchen, not a software factory. You still answer for the plate. You are no longer cooking each part yourself.

Grok Bot is the line cook. It watches Slack, Sentry, Datadog, and PlanetScale, and starts the next station.

Cloud agents are a separate computer. They keep working after the laptop is closed and open a pull request.

Automations and the Agent SDK are the team. They start agents from events, on the same skills.

You are not in that kitchen on this wiki yet, because you still open the page. A helper does not merge. You merge.

## The slides

Redrawn from the deck, in order. The words on each slide are the words from the original.

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
