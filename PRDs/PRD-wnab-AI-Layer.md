---
title: "PRD — wnab AI layer (Cowork over exported data)"
type: PRD
status: draft
created: 2026-05-29
updated: 2026-05-29
tags:
  - PRD
  - wnab
  - ai
  - finances
links:
  - "[[PRDs/wnab-AI-Ideas]]"
  - "[[PRDs/PRD-wnab-Obsidian-Bridge]]"
  - "[[PRDs/PRD-wnab-Onboarding-Coaching]]"
---

# PRD — wnab AI layer (Cowork over exported data)

> Promotes the parked ideas in [[PRDs/wnab-AI-Ideas]] into an actionable PRD.

## Problem

The mechanics of budgeting are easy; the **decisions** are the tax — how much to assign where, what to
cut on an overspend, what target is realistic. That decision fatigue is the documented motivation for
wnab. AI's job is to *draft those decisions so Wedge approves rather than originates them*.

## Success criteria

- A working **auto-assign suggestion** workflow (ideas doc opportunity #1): given an exported budget
  snapshot, Cowork proposes how to split "To Assign" across categories, **with reasoning**, and Wedge
  approves/tweaks before anything is applied.
- No financial data leaves the machine beyond the agreed boundary (Cowork-over-exports or a local model).
- The "explain why" output doubles as mindset-teaching (reinforces [[PRDs/PRD-wnab-Onboarding-Coaching]]).

## Scope

**In:** prototype opportunity #1 (explainable auto-assign) as a Cowork workflow over a snapshot from
[[PRDs/PRD-wnab-Obsidian-Bridge]]. Define how an *approved* suggestion gets back into wnab.

**Out (for v1):** in-app/in-browser AI; autonomous money movement; piping transactions to a third-party
API from the public app; opportunities #2–#7 (roll-with-punches, categorization, dynamic coaching,
monthly review, true-expense detection, target suggestions) — sequenced after #1 proves out.

## Constraints / risks

- **Strategic frame (hold this):** wnab stays local/serverless/private; the AI smarts live in Cowork
  operating over exports. No API keys in a public browser app. Local model (Ollama) is the only
  in-app route if ever wanted.
- **Approve-before-execute** (Wedge's Grok plan-mode habit) — AI never moves money on its own.
- **Data boundary:** be deliberate about what leaves the machine.
- **Apply-back tension:** the bridge is read-only. Applying an approved suggestion means either manual
  re-entry in wnab, or a controlled write path — which conflicts with read-only. Resolve in open questions.

## Plan (sequencing)

1. Lock the snapshot schema with [[PRDs/PRD-wnab-Obsidian-Bridge]] (shared contract).
2. Prototype #1 as a Cowork workflow over one exported snapshot: suggest assignments + reasoning,
   present for approval.
3. Evaluate quality + the apply-back mechanism; decide manual vs write path.
4. If it earns it, expand to #2 (overspend coverage) and #3 (import categorization).

## Open questions

- **Apply-back:** manual re-entry of approved numbers, or a guarded import wnab can ingest? (Biggest design tension.)
- Snapshot must carry upcoming bills + history for the suggestion to be good — does the bridge export enough?
- Run via Cowork only, or also a local Ollama path for fully-offline use?
