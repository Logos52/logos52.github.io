---
type: reference
status: developing
created: 2026-05-17
updated: 2026-08-12
tags:
  - agentic
  - tooling
  - models
  - workflows
  - llm-knowledge-base
---

# Current Agentic LLM Stack

The models and agents doing agentic work across the projects, as of August 2026. Three agents split the work by kind — judgment, execution, standing duty — and the only local models left are audio instruments.

## Current Stack

| Layer | Tool / Model | Purpose |
|---|---|---|
| **Primary agent** | Claude Cowork (Fable 5) | Research lanes, synthesis, structure; page drafting under the vault's [[02 - System/Writing Standards\|writing standards]], final cut at the desk |
| **Coding agent** | Grok Build (`grok-4.6` as of 2026-08-12; `grok-n1` / `grok-admin` profiles) | Execution on the Mac's real files and toolchain; separate profiles keep personal and work isolated |
| **Standing agents** | Grok Bot (cloud, one shared computer) | The always-on half — watching, fetching, filing; see [[wiki/Systems/AI & Agentic Systems/Standing Research Agents\|Standing Research Agents]] |
| **Local models** | Qwen3-TTS + Whisper (MLX, Apple Silicon) | Audio production only: TTS generates the voices, Whisper transcribes them back for QA |
| **Instructions** | `AGENTS.md` / `CLAUDE.md` per repo | Project rules, loaded at session start |

## Division of Labor

Claude carries the judgment-heavy work: parallel research lanes, synthesis, and drafting, with the model's default voice filtered by the writing standards and every page's final cut staying human. Grok Build carries execution — builds, scripts, batch file work — on the machine where the files and credentials live. Grok Bot carries the standing lanes on its own cloud computer, which holds only what is already public. The local models are production instruments rather than agents: voice generation and its transcription check, both on Apple Silicon.

Everything runs on subscription plans or local hardware; nothing in the stack is pay-per-token.

## What's Gone

Hermes 3 via Ollama — the May version of this page named it the primary interface for wiki work. It was retired within weeks and no local chat or agent model replaced it: local inference at useful agent quality cost more in speed and reliability than the subscription agents charge, and the privacy case it was meant to serve is handled instead by keeping private material out of cloud-agent reach entirely.

## Evolution

- **Early 2026** — Grok for all knowledge-base work.
- **May 2026** — local-model experiment: Hermes 3 8B via Ollama as the wiki's agent interface. Retired within weeks.
- **June 2026** — Claude Cowork becomes the primary agent; vault prose moves under the writing standards.
- **August 2026** — Grok Bot (beta 2026-08-11) adds the standing half; local models narrow to audio production.

## Related

- [[wiki/Systems/AI & Agentic Systems/Grok 4.6 and Grok Bot|Grok 4.6 and Grok Bot]] — the model, the teammate, and Grok Build as three products under one first name
- [[wiki/Systems/AI & Agentic Systems/Standing Research Agents|Standing Research Agents]] — the standing half in full
- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering, Condensed|Agentic Engineering, Condensed]] — the doctrine the division of labor answers to
- [[wiki/Concepts/Human vs AI Capability Lens|Human vs AI Capability Lens]] — the zone model behind "judgment stays at the desk"
