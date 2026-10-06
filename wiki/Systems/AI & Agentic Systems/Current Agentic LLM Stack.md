---
title: "Current Agentic LLM Stack"
type: reference
status: developing
created: 2026-05-17
updated: 2026-09-27
method: outline-2026-09-27
prose-model: fable
aliases:
  - Agent Wrong-Door Log
merged-from:
  - Agent Wrong-Door Log
written-by: opus
description: "Which AI model or agent product holds which job on this desk, the rules behind each seat, and what was dropped."
tags:
  - agentic
  - tooling
  - models
  - workflows
  - llm-knowledge-base
  - ai
  - agentic-engineering
  - glossary
---

# Current Agentic LLM Stack

# Current Agentic LLM Stack

The current agentic LLM stack is the list of AI models and agent products this desk runs, with the one job each product holds and the date that job was given to it. A reader who runs more than one agent can use it to see which product takes a given job and why no two products share one.

## Takeaways

- Each product holds a seat, meaning a kind of job.
- Only one agent edits a folder tree at a time.
- Every product runs on a subscription or on the owner's laptop.
- Nothing billed per token of text holds a seat.
- Grok bots share one cloud computer that holds public material only.
- Cloud-written application code arrives as a pull request the owner merges.
- Local models do audio only.

## The roster

Each seat is a kind of job: prose, local execution, editor work, overnight code, standing watch or audio. The list below is as of 1 September 2026, with later counts where the records give them. Products on the laptop stop when the lid closes, and the two cloud products, Grok Bot and Cursor Cloud Agents, keep running.

- Grok 4.6 in Grok Build, the terminal coding agent on the laptop.
  - Writes this wiki's prose and runs work where the files live.
- Claude Code, Anthropic's terminal agent: runs this wiki's writing pipeline.
  - Each page is written by a fresh agent that sees only its notes.
  - A 15 August ranking put Claude Fable on prose, now kept as history.
- Claude Cowork, the desktop app: research when asked, never the default writer.
  - Its late-August prose needed costly cleanup.
- Cursor, the code editor on the laptop: application files, diffs, debugging.
  - Its split against Grok Build was ruled 21 August 2026.
- Cursor Cloud Agents: overnight code, one isolated machine per job.
  - Each clones a repository, works, and opens a pull request.
  - Three runs by 18 September 2026: draft pull requests 3, 4 and 5.
  - All checks green, none merged.
- Grok Bot: standing watch on a cloud computer that stays on.
  - 9 bots on 25 August 2026, 18 by 18 September.
  - Bots only report, and work between them passes through files.
- Local models on Apple Silicon: Qwen3-TTS for voice, Whisper to check it.

```
laptop: Grok Build, Claude Code, Cursor
   |  prose and code, owner watching
   v
repository  <-- files --  Grok Bot computer
   |                      (public material only)
   v
Cursor Cloud Agent, one machine per job
   |
   v  pull request, merged by the owner
```

## How a job is routed

Routing starts with who the run is for and whose computer does the work. With the owner at the laptop inside a repository, Grok Build is the default, and Cursor takes the reading and editing of application files. With the owner away, Grok Bot keeps a watch that reports and Cursor Cloud Agents write code. A task that can be written down completely can leave the laptop, and a task that needs what is on the screen right now stays local.

- Grok Build effort: high when hunting hidden bugs.
- Cowork effort: lower for research.
- Rewrites and cold reads run as fresh sessions.
- A fresh session starts with only what it is handed.

## The rules behind the seats

Two agents editing the same files failed on 12 June 2026, and the roster was cut back within the hour. Since then two agents may work the same day on different jobs, or as writer and reviewer, and never both editing one folder. The other rules keep private material off the shared cloud computer, keep per-token billing out, and keep a person between any change and its merge.

- Grok Bot never writes the wiki.
- It drops files in an inbox folder.
- The owner compiles those files in Grok Build.
- Grok Bot shares plugins and connectors with the Cursor account.
- A connector applies to the whole account, so every bot has it.
- Shared connectors never justify a private login on that computer.
- Anthropic's Managed Agents, Agent SDK and Messages API bill per token.
  - Ruled off on 28 August 2026.
- No bot merges code.
- No chief-of-staff bot sits in front of the others.
- No overnight factory of pull requests.
- The limit is Grok Bot's weekly allowance and a person reading each change.
- No UI work is done without a picture from the running app.

A wrong door is a job run on a product that could not see or touch what the job needed, or two agents writing one tree. It is filed the same day with the date, the job, the product used, the product that should have been used, what broke, and the ruling.

## What is gone

Three things have left the roster. The local chat model went because running it on the laptop cost more in speed and reliability than subscription agents, and privacy is handled instead by keeping private material out of cloud reach.

- Hermes 3 8B through Ollama: main interface in May 2026, dropped within weeks.
- Codex: off the roster since 12 August 2026.
- A month of Cursor Ultra, expired 12 September 2026.
  - Used for tab completion, visual review, an Xcode project, one Cloud Agent.

## Timeline

The stack has changed about once a month in 2026. Each line below is a date and what changed on it.

- Early 2026: Grok.
- May 2026: Hermes 3 8B, local.
- June 2026: Claude Cowork as the main agent.
- 11 August: Grok Bot beta opens.
- 12 August: Grok 4.6 ships.
- 13 to 15 August: Claude Fable wins the prose comparison.
- 21 August: Grok Bot access widens.
- 26 August: Cursor installed on the laptop.
- 1 September: writer seat to Grok 4.6.

## Related pages

- [[wiki/Systems/AI & Agentic Systems/Agent Glossary|Agent Glossary]]: product names and when to use them; this page is the roster, that page is the dictionary
- [[journal/2026-09-01-grok-writes|Grok writes]]: live writer-seat ruling
- [[journal/2026-08-15-what-works-grok-46-and-grok-bot|What works: Grok 4.6 and Grok Bot]]: 15 August ranking; writer seat retired 1 September
- [[journal/2026-08-21-cursor-ultra-vs-build-vs-bot|Cursor Ultra vs Grok Build vs Grok Bot]]: the seat assignment per repo
- [[wiki/Systems/AI & Agentic Systems/The Writing Pipeline|The Writing Pipeline]]: the clean-context mechanism the Claude Code seat exists to run
- [[wiki/Systems/AI & Agentic Systems/Grok Bot Primer|Grok Bot Primer]]: the standing half in full
- [[wiki/Systems/AI & Agentic Systems/Using Grok Bot|Using Grok Bot]]: standing watch; not a seat change
- [[wiki/Systems/AI & Agentic Systems/Cursor Cloud Agents|Cursor Cloud Agents]]: overnight PR seat, in full
- [[wiki/Systems/AI & Agentic Systems/pstack|pstack]]: the proof ban; not installed, not a seat
- [[wiki/Systems/AI & Agentic Systems/Picking a computer|Picking a computer]]: which computer the next job opens; this page stays the dated roster
- [[wiki/Research/Grok Bot Practitioner Bank|Grok Bot Practitioner Bank]]: official docs plus named-runner claims; not a roster
- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering, Condensed|Agentic Engineering, Condensed]]: the doctrine the division of labor answers to
- [[wiki/Concepts/Human vs AI Capability Lens|Human vs AI Capability Lens]]: the zone model behind "judgment stays at the desk"

## Sources

- [Grok Bot computer and apps](https://docs.x.ai/grok-bot/computer-and-apps): plugins and connectors are account-wide, not isolated per bot.
- [[wiki/Research/Grok Bot Practitioner Bank|Grok Bot Practitioner Bank]]: Cursor plugin share; public-only line.
- [[wiki/Systems/AI & Agentic Systems/Agent Glossary|Grok 4.6 and Grok Bot]]: 12 June two-writers miss
- [[journal/2026-06-07-tsumugu-two-agents-one-reader|Tsumugu two agents one reader]]: two hands on one keyboard
- `01 - Workbench/Fable - Research Bank - Claude and Grok Tools.md`: crib_diff leaked gloss, 12 June
