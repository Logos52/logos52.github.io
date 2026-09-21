---
title: "Poteto Paved Path"
type: concept
status: developing
created: 2026-09-22
updated: 2026-09-22
description: "You trust an agent as far as you can leave it alone. A stronger prompt does not raise that trust. A file the next agent will copy, or a check that fails, does."
method: page-generator-2026-09-22
written-by: grok
tags:
  - agents
  - agentic-engineering
  - cursor
  - grok-bot
---

# Poteto Paved Path

You can leave an agent alone only as far as you trust it. An agent is a program that edits files from a chat. Trust grows when a file, or a check that fails the build, catches a mistake you would otherwise catch yourself. A stronger prompt does not grow that trust. The next agent opens the files. The next agent does not open the chat where you explained yourself more carefully.

While you still have to watch every chat and correct it by hand, you can keep a handful of agents in front of you. Starting a large batch before a file or a check can reject a mistake spends the work on bad edits. Poteto Paved Path is the way up from that handful. Show that the result does the thing. Teach the method in a file the agent can load. Change the files so the easy edit is the correct one.

## How do you trust an agent more?

Verification comes first, then skills, then the arrangement of the files.

Verification answers a narrow question. Does the result do the thing a person came to do? A build that passes does not answer it. The agent needs a feature map and a command, kept beside the files. A feature map is a list of what a person can do, and how they reach each part, including which thing to click. A bug report is often a small picture and a few question marks. With the map, the agent can find the right part. Without the map, the agent can start the program and still guess. The command starts the real app and saves proof, a picture, a log, or a trace. A trace is a recording of where the app spent its time. The agent runs that same command every time. Until the map and the command exist, you are the person checking.

Skills are written procedures the agent loads for a kind of job. pstack is a set of those procedures. One procedure says to reproduce the problem before changing anything, and to refuse to call the job done until the proof exists. A skill can still be skipped. A sentence you add to the prompt is easier to skip, and it is gone when the chat ends. A skill that lives with the files is there for the next agent. You do not install pstack in order to copy someone else's count of pull requests.

Architecture comes third. Architecture means the way the files are arranged. An agent takes the short path. After you change the files, the short path is the path you left. The architecture work splits in two, and the split has two names.

A brownfield program is an old program that already has walls. A new person cannot delete a live database. The folders already say where a change goes. A check already fails the build on a known mistake. An agent that copies those files stays inside the walls. Your work is to notice where agents still fall through, and to turn that fall into another wall.

A greenfield program is a new program with no walls yet. Each agent finishes an assignment by the shortest edit. The next agent copies that edit. The short edit becomes the structure of the program. Trust is hardest here, and this is also where you can still choose the structure before the copies spread. The Grok Bot app started this way, as a fast prototype. Agents like the shortcut, so the answer was to make the shortcut the correct edit. That answer is Dune, and Dune is what the Grok Bot app runs on now. Each kind of code has one folder and one job. A bad comment fails the build, because a comment had been read as permission to patch over a bug and the next agent copied both. A bad import fails the build. Dune is not published, and you do not need Dune's folder names. You can use the same answer without it. On a new program, you build the shortcut so that it is already the right edit. On an old program, you add a wall where agents keep taking the wrong shortcut.

Someone has to stop a bad pattern before other agents copy it through the files. That job is called gardener. The spread is like weeds. One shortcut sends up copies, and the copies become the pattern. The slide gives the gardener three moves, in a row. Delete tech debt. Keep one paved path. Lint against anti-patterns. The lint can go in before the deletion is finished, so the spread stops while the cleanup is still going. The line under the boxes is "your team needs gardeners."

## Whenever you correct your agent

The files are the best memory an agent has. An agent extends the pattern it already sees in those files. A workaround left in a file gets copied, and each copy makes the next copy more likely. A comment next to the workaround is read as a reason to keep it. You want the files in a state you would accept if the next agent copied them line for line.

When the same correction comes back, put it as high on this list as you can. The list is strongest at the top. A prompt is not on the list.

1. Codebase. Change the files so the mistake cannot be written. One folder for that kind of change, or a shape of the data that has no room for the shortcut, is this step. The next agent copies the files, so the files are the correction.

2. Static analysis, meaning a lint, the compiler, or CI. A lint is a check that reads the code and fails the build. The compiler is the tool that turns the code into a program and rejects code it cannot accept. CI is the set of checks that run when the code is pushed. You can add a lint before you have deleted every old copy. The lint stops the spread. Agents can then remove what the lint froze.

3. Rules, and Bugbot. Bugbot is the reviewer that ships with Cursor, the editor the agent runs in, and Bugbot runs with the checks on a push. A written rule can be skipped. You can skip it too.

4. Skills. A skill is a written procedure kept with the files, such as the pstack procedures above. The next agent can load it. The next agent can also skip it.

5. "Style guide." The words are in quotes because only a person can apply a style guide, by reading the change and remembering to comment. When edits arrive faster than you can read every line, the guide does not hold the correction. A harder prompt lives here. It depends on you remembering it, and the next chat does not contain it.

Start at the codebase. If you cannot change the files yet, make the build fail. Leave the style guide as the last place, not the first.

## What you are taking from this

The rule you are taking into your own code is that the codebase is the memory. The files you accept are what the next agent will extend. A shortcut you leave in those files is the pattern the next edit copies. You call that spread mold. The gardener's job, under your own name for it, is to catch the mold while it is still one patch, and to put the correction in the files or in a check before the copies take over.

Your knowledge base is the same memory, in pages. The next session opens the wiki pages and extends the pattern already in them. A harder prompt about a wiki page does not enter those pages. A bad sentence you leave in place is the mold the next draft extends.

On the list above, an accepted wiki page is the codebase. The two checks are the static analysis. One check rejects a sentence that points at a thing the wiki page never named. The other rejects a sentence that points at where the words came from, instead of saying what is true. Both checks live with the files, so both are still there when the chat is gone. A harder prompt is the style guide. It is the last place, and it is the place you already know does not hold. The checks do not know whether the wiki page is the explanation you meant. You still open the wiki page and read it. A wiki page is ready after you have read it.

The pages you have already accepted, and those two checks, are the brownfield. A page you have not named is the greenfield. You name the page, and you say what it has to explain, before a draft starts. The model may draft the wiki page, add links to other pages, and add a log line. The model does not open the next wiki page for you, and the model does not start a wiki page you did not name. You are still the person who opens a wiki page to see whether the explanation is right, so you do not add a batch of agents while you are still that person.

## Building a Michelin kitchen

The picture for what happens after the files can hold an agent is a kitchen. The slide is titled "building a michelin kitchen / software factory." The factory half is the picture to drop. A factory sounds like output with nobody responsible for the plate. A Michelin kitchen is the picture to keep. You set the kitchen up. You are no longer cooking each part yourself. You are still responsible for what goes out.

The slide has three stations.

Grok Bot is the line cook, one agent on one job. The slide marks it new. Grok Bot can call Slack, the team chat, and Sentry, Datadog, and PlanetScale. Sentry collects error reports. Datadog collects metrics. PlanetScale hosts a database. A routine, a saved watch inside Grok Bot, subscribes to a Slack thread or an error alert and starts the next station. You do not keep a second system that has memorized the company. The agent calls the tools.

Cloud agents are the cooks at their own benches. A cloud agent is a separate computer. It copies a git repository, edits it, and opens a pull request. It keeps working after the laptop is closed.

Automations and the Agent SDK are the team, the facility around the cooks. They start agents from events, on the same skills, without you opening each chat.

This kitchen comes after a correction survives without you in the chat. A helper does not merge, and a helper does not write wiki pages. You merge code. You read pages. On the wiki you are not in that kitchen yet, because you are still the person who opens the page to see whether it is right.

## The slides

The frames below are the slides, in the order they appear. Most of them still have the speaker in the corner. The words under each frame are the words on that slide.

### Agenda

Trust. How to trust your agents more. Your codebase is memory. Automations.

![Agenda: trust, how to trust your agents more, your codebase is memory, automations](poteto-slides/01-agenda.jpg)

### Michelin kitchen

The opening picture. The caption on screen is that a Michelin kitchen is the better analogy.

![Michelin kitchen, a cook at a pass with small cooks at the stations](poteto-slides/02-michelin-kitchen.jpg)

### Five thousand pull requests

Three contribution graphs, and the line "i shipped 5000+ PRs in 6 months."

![Three contribution graphs and the caption i shipped 5000+ PRs in 6 months](poteto-slides/03-five-thousand-prs.jpg)

### Trust and the number of agents

The vertical axis is trust. The horizontal axis is the number of agents: 1, 1 to 5, 5 to 10, 10 to 20, hundreds, thousands. The curve rises fast, then flattens.

![A curve of trust against number of agents, rising fast then flattening](poteto-slides/04-trust-curve.jpg)

### How do I trust my agents more?

Verification for correctness. High quality skills that teach agents to work like real software engineers, for example pstack. Refactoring or rewriting the architecture to be agent friendly, with the grey note "greenfield vs brownfield."

![Three bullets: verification for correctness, skills such as pstack, and an agent-friendly architecture](poteto-slides/05-how-to-trust.jpg)

### High-quality verification

A feature map gives context. A CLI gives control. The map is what exists and how users reach it. The command line shows `$ drive settings` and `$ capture proof`, run the real app, collect proof. The result line is "THE AGENT CAN VERIFY ITS OWN WORK."

![Feature map plus a CLI, and the line the agent can verify its own work](poteto-slides/06-feature-map.jpg)

### Whenever you correct your agent

1. codebase. 2. static analysis (lint/compiler/ci). 3. rules/bugbot. 4. skills. 5. "style guide."

![The five places a correction can go, codebase first and style guide last in quotes](poteto-slides/07-whenever-you-correct.jpg)

### Your codebase is memory

One workaround, then arrows labeled copy, then the pattern. "Each copy makes the next copy likelier."

![One workaround copied until it becomes the pattern](poteto-slides/08-codebase-is-memory.jpg)

### Gardeners

Delete tech debt. Keep one paved path. Lint against anti-patterns. "your team needs gardeners."

![Three boxes: delete tech debt, keep one paved path, lint against anti-patterns](poteto-slides/09-gardener.jpg)

### Dune

"Architecture for agent-sized context." "A narrow local edit can stay correct for the whole Electron app."

![Dune, architecture for agent-sized context, beside the kitchen picture](poteto-slides/10-dune.jpg)

### Five nouns

Each noun has one place in the tree and one job at runtime. Feature, one owned folder for product UI. Entrypoint, one view a user can open. Transcript card, the feature-owned body for one entry type. Client, durable renderer state behind hooks and commands, marked one writer. Host, always-on behavior behind a typed contract.

![Five nouns around a Dune app: Feature, Entrypoint, Transcript card, Client, Host](poteto-slides/11-five-nouns.jpg)

### Process boundaries

A folder tells an agent where code runs and which imports are legal. The renderer holds Feature UI, Navigation, and Client. A typed edge sits in the middle. Serving processes hold Host extensions and Electron main.

![Renderer on one side, a typed edge, and serving processes on the other](poteto-slides/12-process-boundaries.jpg)

### A feature adds files, not registry branches

Reserved filenames turn the nearby folder into the complete contribution. Build discovers the files. Start validates one catalog. Open loads the view. A shared registry is crossed out. Two agents can add different feature folders without editing the same root. Above that, one writer per durable value, and stale attempts lose by key so a reconnect converges instead of duplicating.

![A feature folder of reserved files, discovered, validated, and loaded, with a shared registry crossed out](poteto-slides/13-feature-adds-files.jpg)

### Host-backed feature blueprint

A vertical slice keeps transport, durable state, and React in their named owners. Feature UI, Client, shared edge, Host extension. The component never handles IPC channels, host peer lookup, retry ordering, or process startup. Agent-friendly means a correct open-file edit preserves the whole app's invariants.

![Four boxes in a row: Feature UI, Client, shared edge, Host extension](poteto-slides/14-host-backed-blueprint.jpg)

### The three stations

The title is "building a michelin kitchen / software factory." The bullets are Grok Bot, marked new, cloud agents, and automations and the Agent SDK. The small labels put Grok Bot as the line cook, an individual automation, and automations with the Agent SDK as the team.

![Kitchen picture beside grok bot, cloud agents, and automations and the Agent SDK](poteto-slides/15-kitchen-stations.jpg)

### A bot reproducing a report

A Slack thread. Benny, a bot, reports that a bug was reproduced and is already fixed on main.

![A Slack thread where Benny reports a bug reproduced and already fixed on main](poteto-slides/16-benny-thread.jpg)

### The close

The same five places, shown again as the takeaway. Codebase, static analysis, rules and Bugbot, skills, "style guide."

![The closing list of the five places a correction goes](poteto-slides/17-closing-list.jpg)

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
