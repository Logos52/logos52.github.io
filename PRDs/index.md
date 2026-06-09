---
title: "PRDs — index"
type: index
created: 2026-05-29
updated: 2026-06-09
tags:
  - PRD
  - index
---

# PRDs — index

Map of content for product/requirements docs. Status: `draft` → `approved` → `done`/`superseded`.

## wnab — Wedge Needs A Budget

| PRD | What | Status |
|---|---|---|
| [[PRDs/PRD-wnab-Budget-App]] | Core spec — YNAB-flow clone on Actual's engine | locked |
| [[PRDs/PRD-wnab-folder-consolidation]] | Collapse two folders → one `~/Projects/wnab` + CC↔Cowork handoff | done (2026-05-29) |
| [[PRDs/PRD-wnab-Electron-Launch]] | Package as native macOS app (Dock launch, no localhost) | approved — ready to build |
| [[PRDs/PRD-wnab-Onboarding-Coaching]] | First-run rules + structured coaching nudge system (the differentiator) | draft |
| [[PRDs/PRD-wnab-Obsidian-Bridge]] | Read-only finance overview from exported wnab snapshot; retires CSV dashboard | draft |
| [[PRDs/PRD-wnab-AI-Layer]] | Cowork as AI over exports — explainable auto-assign, approve-before-execute | draft |
| [[PRDs/PRD-wnab-Upstream-Merge]] | Pull Actual engine updates without clobbering the reskin | draft |
| [[PRDs/wnab-AI-Ideas]] | Parked idea bank (7 opportunities) feeding the AI Layer PRD | parked |

**Dependency note:** the Obsidian Bridge defines the snapshot **schema** that the AI Layer consumes —
design it once in the Bridge PRD. Upstream-Merge is independent and the soonest-to-start (divergence tax grows weekly).

## Other

| PRD | What | Status |
|---|---|---|
| [[PRDs/PRD-Obsidian-LifeOS-Command-Center]] | LifeOS command center | locked |

## tsumugu — graded reader + LLM-wiki

| PRD | What | Status |
|---|---|---|
| [[PRDs/PRD-Tsumugu]] | Engine + reader + generation + wiki/bridge — source of truth | active |
| [[PRDs/PRD-Reading-Layer]] | Interactive reading layer — per-word highlight, hover defs, backlinks + YouTube deep-links | draft |
| [[PRDs/PRD-Subtitle-Extension]] | asbplayer-style subtitle overlay (YouTube primary, Netflix deferred) — feasibility + PRD-stub | draft |
