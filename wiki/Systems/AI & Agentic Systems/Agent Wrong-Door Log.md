---
title: "Agent Wrong-Door Log"
type: reference
status: developing
created: 2026-08-28
updated: 2026-08-28
description: "Dated misses when a job went to the wrong agent product. Names live on Agent Glossary. This page is the scoreboard."
tags:
  - ai
  - agentic-engineering
  - tooling
  - glossary
---

# Agent Wrong-Door Log

A wrong door is a job that ran on the product that could not see or touch what the job needed, or that ran two writers on one tree. File a row the same day. The owner's ruling, when there is one, is quoted verbatim. Product names are defined on [[wiki/Systems/AI & Agentic Systems/Agent Glossary|Agent Glossary]]. Seats currently assigned live on [[wiki/Systems/AI & Agentic Systems/Current Agentic LLM Stack|Current Agentic LLM Stack]].

How to file: date, the job in one sentence, the product used, the product that should have been used, what broke, the ruling.

| Date | Job | Used | Should have used | What broke | Ruling |
|---|---|---|---|---|---|
| 2026-05 | Wiki work as the primary agent interface | Hermes 3 8B via Ollama, local | A subscription coding agent (later Grok Build / Claude Code) | Local inference at useful agent quality cost more in speed and reliability than the subscription agents charge | Retired within weeks. Privacy is handled by keeping private material out of cloud-agent reach, not by a local chat model. [[wiki/Systems/AI & Agentic Systems/Current Agentic LLM Stack\|Current Agentic LLM Stack]] |
| 2026-06-07 | Tsumugu reader work in one repo | Two agents typing in the same tree at once | One writer per tree | Dev server full-reloaded on every save; the player kept jumping to the top | Two hands on one keyboard. [[journal/2026-06-07-tsumugu-two-agents-one-reader\|the build log]] |
| 2026-06-12 | Vault / dictionary file edits | Two agents editing the same files | One writer per tree; reviewer as a separate pass | Independent cribs caught a leaked gloss; the hour went to merging | One writer per tree. Dual-use is legal as same-day different jobs, or writer plus reviewer. Not two agents editing `entries/` or `wiki/`. |
| standing | File-shaped work (code, vault pages) | Cowork or a hosted runtime | Claude Code or Grok Build | Hosted machinery without the capability already on this machine | List what the job needs to see and touch, and pick the product that has exactly that access. [[wiki/Systems/AI & Agentic Systems/How to Use the Claude Tools\|How to Use the Claude Tools]] |
| standing | Grok Bot filing into the compiled wiki | Grok Bot writing `wiki/` | Grok Bot drops into `raw/inbox/`; Build compiles with the owner looking | A standing agent would publish without the desk | Grok Bot never writes into `wiki/`. |
| standing | Vault prose, openings, craft | Cursor Cloud Agent or Grok Bot | Fable in Cowork; rewrite and cold read as Claude Code subagents | Cloud and standing seats are not the author of this vault | Signed on the stack page 15 and 21 August 2026. |
| 2026-08-28 | Understanding Claude Managed Agents | Treating Managed Agents as a local coding seat | Claude Code / Grok Build locally | Name collision with "managed subagent"; hosted session billed while this machine already runs the loop | Managed Agents is not a seat. |
| 2026-08-28 | Hosted / programmable Claude agents | Claude Managed Agents, Agent SDK, Messages API | Chat / Code / Cowork subscription, or Grok Build / Cursor on subscription | Token meter plus $0.08 per running session-hour | "i don't like anything with API." This desk does not buy pay-per-token or session-hour runtimes. |

## Links Into the Knowledge Base

- [[wiki/Systems/AI & Agentic Systems/Agent Glossary|Agent Glossary]] — the names; this page is only the misses
- [[wiki/Systems/AI & Agentic Systems/Current Agentic LLM Stack|Current Agentic LLM Stack]] — the live roster those misses produced
- [[wiki/Systems/AI & Agentic Systems/How to Use the Claude Tools|How to Use the Claude Tools]] — Chat / Code / Cowork / hosted runtime

## Open Questions

- Which of these rows is a one-time miss, and which is still the default the next session will repeat if the glossary is not loaded?

## Sources

- [[wiki/Systems/AI & Agentic Systems/Current Agentic LLM Stack|Current Agentic LLM Stack]] — Hermes retirement; one writer per tree; Bot never writes wiki
- [[wiki/Systems/AI & Agentic Systems/Grok 4.6 and Grok Bot|Grok 4.6 and Grok Bot]] — 12 June two-writers miss
- [[journal/2026-06-07-tsumugu-two-agents-one-reader|Tsumugu two agents one reader]] — two hands on one keyboard
- `01 - Workbench/Fable - Research Bank - Claude and Grok Tools.md` — crib_diff leaked gloss, 12 June
