---
title: "Poteto Paved Path"
type: concept
status: developing
created: 2026-09-22
updated: 2026-09-22
description: "Trust is how many agents you can leave alone. The codebase is the memory, and a longer prompt does not raise that trust."
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

Trust is how many agents you can leave alone. The next agent copies the pattern already in the files, so the codebase is the memory, and a longer prompt does not raise that trust.

You build the trust in three steps. Verification comes first: a feature map of what the app can do and how a person reaches it, plus a command that runs the app and saves proof. Until that exists, you are the check. A skill such as pstack comes next. It lives in the repo, and the agent can still skip it. Architecture is the step that lasts. Agents take the shortcut, so the shortcut has to be the right edit.

A new program has no walls yet. That is the greenfield case, and the short edit becomes the structure. Grok Bot started there. Dune is what it runs on now: one folder and one job for each kind of code, and a bad comment or a bad import fails the build. An older program is brownfield. The walls are already there, the way a check stops someone from deleting the live database, and you add a wall where agents still fall through.

Mold is what you call the spread. A gardener deletes the debt, keeps one paved path, and lints the anti-pattern before the copies take over.

Once the files can hold an agent, the outer loop is a Michelin kitchen rather than a factory. You still answer for what ships. Grok Bot is the line cook and starts work from Slack, Sentry, Datadog, and PlanetScale. Cloud agents do the edit on another computer. Automations and the Agent SDK are the team. A helper does not merge.

## How to use this

1. When you correct an agent, change the files so that mistake cannot be written.
2. If you cannot change the files yet, add a lint, a compiler check, or a CI check that fails the build.
3. A rule, Bugbot, or a skill can help, and each one can be skipped. Do not stop there.
4. Do not rely on a style guide or a longer prompt. The next session will not have it.
5. On a new codebase, choose the one allowed way before agents write it. On an old codebase, add a wall where they keep taking the wrong shortcut.
6. When you see mold, delete what is already there, keep one paved path, and add the lint while the cleanup is still going.
7. On this wiki, name the page before a draft starts, then open it and read it. `scripts/holdings.py` and `scripts/source-words-check.py` are the checks you already have. You are not running the kitchen here yet.

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
