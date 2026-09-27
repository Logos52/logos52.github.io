---
title: "Current Agentic LLM Stack"
type: reference
status: developing
created: 2026-05-17
updated: 2026-09-24
method: outline-2026-09-24
prose-model: fable
aliases:
  - Agent Wrong-Door Log
merged-from:
  - Agent Wrong-Door Log
written-by: fable
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

The current agentic LLM stack is the list of AI models and agent products this desk runs, with the one job each product holds and the date that assignment was made. A reader who runs more than one agent can use it to see which product takes a given job and why no two products share one.

## Core takeaways

- Each product holds one seat, and a seat is one kind of job: prose, local execution, editor work, overnight code, standing watch, audio.
- Only one writer edits a folder tree at a time. Two agents editing the same files failed on 12 June 2026, and the roster was cut back within the hour.
- Every product on the roster runs on a subscription or on the owner's laptop. Nothing billed per token holds a seat.
- All the Grok bots on an account share one cloud computer, and it holds public material only, so bots report and file and never write this wiki.
- Application code written in the cloud arrives as a pull request, and the owner merges it himself.
- Local models do audio only. A local chat model was tried in May 2026 and dropped within weeks.

## The roster

As of 1 September 2026.

- Grok 4.6, running in Grok Build, the terminal coding agent on the laptop: writes this wiki's prose and executes where the files live. Ruled 1 September 2026.
- Claude Code, the terminal agent from Anthropic: runs this wiki's writing pipeline, a set of steps in which a fresh agent that has seen only the notes for one page writes that page. The 15 August ranking that put Claude Fable on wiki prose is kept as history and no longer routes work.
- Claude Cowork, the desktop app: research when asked. It is not the default writer, since its late-August prose cost extra tokens to make readable.
- Cursor, the code editor on the laptop: sitting inside application files, a large tree, diff hunks, debugging, tab completion. Its split against Grok Build was ruled 21 August 2026.
- Cursor Cloud Agents: overnight code. An isolated machine per job clones a code repository, works, and opens a pull request. Run three times as of 18 September 2026, giving draft pull requests 3, 4 and 5, all checks green, none merged.
- Grok Bot: standing watch on a cloud computer that keeps running when the laptop is closed. 9 bots on 25 August 2026, 18 by 18 September. Bots report; work between bots passes through files in a repository, never through a chat.
- Local models on Apple Silicon: voice generation (Qwen3-TTS) and a transcription check (Whisper). They generate and check audio and do nothing else.

```
laptop: Grok Build, Claude Code, Cursor
  | prose and code, owner looking
  v
repository  <-- files --  Grok Bot cloud computer
  |                       (public material, reports)
  v
Cursor Cloud Agent, one machine per job
  |
  v
pull request --> owner merges
```

## How a job is routed

- Ask who the run is for, then whose computer does the work.
- The owner at the laptop, inside a repository: Grok Build by default; Cursor when the work is reading and editing application files.
- The owner away from the laptop: Grok Bot for a watch that reports, Cursor Cloud Agents for code. Grok Build and Cursor stop when the laptop lid closes.
- A task that can be written down completely can leave the laptop. A task that needs what is on the screen right now stays local.
- Effort setting: high in Grok Build when hunting hidden bugs, lower for research in Cowork.
- Rewrite passes and cold reads run as fresh sessions, so the reader carries none of the writer's memory.

## The rules behind the seats

- One writer per tree. Two agents may work the same day on different jobs, or as writer and reviewer, never both editing the same folder.
- Grok Bot never writes the wiki. It drops files into an inbox folder, and the owner compiles them in Grok Build while watching.
- Grok Bot shares plugins and connectors with the Cursor account, and a connector is account-wide, not per bot. That saves setup for a Cursor user. It is not a reason to put a private login on the shared computer.
- No pay-per-token product. Claude Managed Agents, the Agent SDK and the Messages API bill that way, ruled off 28 August 2026, so none of them holds a seat.
- No bot merges code. No chief-of-staff bot sits in front of the others, and no overnight factory of pull requests runs. The weekly allowance and a person reading each change set the limit.
- No UI work is called done without a picture from the running app.
- A wrong door is a job run on a product that could not see or touch what the job needed, or two writers on one tree. It is filed the same day: date, job, product used, product that should have been used, what broke, ruling.

## What is gone

- Hermes 3 8B through Ollama, the owner's main interface in May 2026, dropped within weeks. Local inference cost more in speed and reliability than subscription agents, and privacy is handled by keeping private material out of cloud reach instead.
- Codex, off the roster since 12 August 2026.
- The Cursor Ultra month, used only where Grok Build was weak (tab completion, visual review, an Xcode project, one overnight Cloud Agent), expired 12 September 2026.

## Timeline

- Early 2026: Grok.
- May 2026: Hermes 3 8B, local.
- June 2026: Claude Cowork as the primary agent.
- 11 August 2026: Grok Bot beta opens; 12 August: Grok 4.6 ships; 21 August: Grok Bot access widens.
- 13 to 15 August 2026: Claude Fable wins the prose bake-off.
- 26 August 2026: Cursor app installed on the laptop; the ideal week signed.
- 1 September 2026: writer seat to Grok 4.6.

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
