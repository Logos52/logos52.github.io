---
type: reference
status: developing
created: 2026-05-17
updated: 2026-09-01
tags:
  - agentic
  - tooling
  - models
  - workflows
  - llm-knowledge-base
---

# Current Agentic LLM Stack

The models and agents doing agentic work across the projects, as of 1 September 2026. Grok 4.6 writes vault prose and executes. Cowork is research on request, not the default writer. The only local models left are audio instruments.

## Current Stack

| Layer | Tool / Model | Purpose |
|---|---|---|
| **Primary writer** | Grok Build (`grok-4.6`; `grok-n1` / `grok-admin` profiles) | Wiki, journal, decisions, reports; final cut at the desk. Signed [[journal/2026-09-01-grok-writes\|1 September 2026]] |
| **Research on request** | Claude Cowork (Fable 5 / Opus 5) | Lanes and structure when asked. Not the default writer. Fable's late-August prose was a rewrite tax |
| **Vault pipeline** | Grok Build calling 4.6 | Clean-context rewrite and cold read as fresh sessions, plus repo work on the vault |
| **Coding agent** | Grok Build 1.0.5 (`grok-4.6` as of 2026-08-12; `grok-n1` / `grok-admin` profiles) | Execution on the Mac's real files and toolchain; separate profiles keep personal and work isolated |
| **IDE seat** | Cursor (Ultra active, free month via Heavy, expires 2026-09-12) | Sitting in application code: tsumugu-core, tan, frontends; Tab and visual diffs. Not the vault's author |
| **Standing agents** | Grok Bot (cloud, one shared computer) | The always-on half — watching, fetching, filing; see [[wiki/Systems/AI & Agentic Systems/Standing Research Agents\|Standing Research Agents]] |
| **Local models** | Qwen3-TTS + Whisper (MLX, Apple Silicon) | Audio production only: TTS generates the voices, Whisper transcribes them back for QA |
| **Instructions** | `AGENTS.md` / `CLAUDE.md` per repo | Project rules, loaded at session start |

## Division of Labor

Grok 4.6 carries vault writing and execution on the machine where the files live. Cowork still runs research lanes when asked. It does not take the default writer seat: late-August Fable prose cost extra tokens to make readable. Grok Bot carries the standing lanes on its own cloud computer, which holds only what is already public. Grok Bot shares the same plugins and connectors as the Cursor account this desk already has, so a Cursor user pays less setup cost than someone starting from nothing. That shared plugin surface is not a reason to put a private login on the shared computer. The local models are production instruments rather than agents: voice generation and its transcription check, both on Apple Silicon.

Everything runs on subscription plans or local hardware; nothing in the stack is pay-per-token. Claude Managed Agents, the Agent SDK, and the Messages API are that meter (tokens, and for Managed Agents $0.08 per running session-hour). Ruled off the roster 2026-08-28: "i don't like anything with API."

## Routing by job

The by-job split, signed 1 September 2026 ([[journal/2026-09-01-grok-writes|Grok writes]]), with the 21 August seat assignment still in force for Cursor vs Build ([[journal/2026-08-21-cursor-ultra-vs-build-vs-bot|the seat assignment]]). The 15 August ranking that put Fable on wiki prose is retired for routing and kept as history ([[journal/2026-08-15-what-works-grok-46-and-grok-bot|the ranking]]).

| Job | Seat |
|---|---|
| Anything that has to read well — wiki prose, journal, decisions, reports | Grok 4.6 |
| Research banks, batch authoring, regen, lint, vault scripts | Grok Build calling 4.6 |
| tsumugu-core reader, tan Swift app, dashboard and frontend work | Cursor |
| Standing duty — one duty, packet only, public material only | Grok Bot |
| Overnight code on a non-wiki repo, PR as the handoff | Cursor Cloud Agent, approved through Bot |

One writer per tree — two agents editing the same files failed on 12 June and the roster was cut within the hour. Grok Bot never writes into `wiki/`; it drops into `raw/inbox/` and Build compiles with the owner looking.

## The ideal week — signed 2026-08-26

The rows above are ruled; the four below were proposed from the 26 August research pass and signed by the owner the same day:

- The Ultra month is spent only where Build is weak — Tab, visual review, the Xcode project, one overnight Cloud Agent — and closes by its own written condition: Tab unused, Cloud Agents unused, Ultra at 0% means the month ends and the stack page does not change. Ultra is active and expires 12 September 2026.
- The writing pipeline's rewrite pass and cold read run as fresh Grok sessions holding only the draft and the prompt, never inside the writer's session.
- Effort dials are set per job, not left on default: `xhigh` in Build for hidden bugs and high-value diagnosis, lower effort in Cowork for routine orchestration, since every harness now documents the dial.
- The two unrun experiments — Arm D (Fable pinned in Cursor, one scored bank) and the one overnight Cloud Agent — either run before the Ultra month ends on 12 September or are dropped as decided, not left open.

## What's Gone

Hermes 3 via Ollama — the May version of this page named it the primary interface for wiki work. It was retired within weeks and no local chat or agent model replaced it: local inference at useful agent quality cost more in speed and reliability than the subscription agents charge, and the privacy case it was meant to serve is handled instead by keeping private material out of cloud-agent reach entirely.

## Evolution

- **Early 2026** — Grok for all knowledge-base work.
- **May 2026** — local-model experiment: Hermes 3 8B via Ollama as the wiki's agent interface. Retired within weeks.
- **June 2026** — Claude Cowork becomes the primary agent; vault prose moves under the writing standards.
- **August 2026** — Grok Bot (beta 2026-08-11) adds the standing half; local models narrow to audio production. Bot access widens on 2026-08-21 to SuperGrok Plus, Cursor Pro+, and Cursor Teams. Cursor.app lands on the Mac 2026-08-26 with the Ultra month still unspent. 13–15 August: Fable wins a scored wiki bakeoff and takes the writer seat.
- **1 September 2026** — Writer seat moves to Grok 4.6. Fable's late-August prose was a token tax. [[journal/2026-09-01-grok-writes|Grok writes]].

## Related

- [[wiki/Systems/AI & Agentic Systems/Agent Glossary|Agent Glossary]] — product names and when to use them; this page is the roster, that page is the dictionary
- [[wiki/Systems/AI & Agentic Systems/Agent Wrong-Door Log|Agent Wrong-Door Log]] — the misses that produced this roster
- [[wiki/Systems/AI & Agentic Systems/Grok 4.6 and Grok Bot|Grok 4.6 and Grok Bot]] — the model, the teammate, and Grok Build as three products under one first name
- [[journal/2026-09-01-grok-writes|Grok writes]] — live writer-seat ruling
- [[journal/2026-08-15-what-works-grok-46-and-grok-bot|What works: Grok 4.6 and Grok Bot]] — 15 August ranking; writer seat retired 1 September
- [[journal/2026-08-21-cursor-ultra-vs-build-vs-bot|Cursor Ultra vs Grok Build vs Grok Bot]] — the seat assignment per repo
- [[wiki/Systems/AI & Agentic Systems/The Writing Pipeline|The Writing Pipeline]] — the clean-context mechanism the Claude Code seat exists to run
- [[wiki/Systems/AI & Agentic Systems/Standing Research Agents|Standing Research Agents]] — the standing half in full
- [[wiki/Systems/AI & Agentic Systems/Grok Bot Primer|Grok Bot Primer]] — the live Grok Bot setup on this account
- [[wiki/Research/Grok Bot Practitioner Bank|Grok Bot Practitioner Bank]] — official docs plus named-runner claims; not a roster
- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering, Condensed|Agentic Engineering, Condensed]] — the doctrine the division of labor answers to
- [[wiki/Concepts/Human vs AI Capability Lens|Human vs AI Capability Lens]] — the zone model behind "judgment stays at the desk"

## Sources

- [Grok Bot computer and apps](https://docs.x.ai/grok-bot/computer-and-apps) — plugins and connectors are account-wide, not isolated per bot.
- [[wiki/Research/Grok Bot Practitioner Bank|Grok Bot Practitioner Bank]] — Cursor plugin share; public-only line.
