---
title: "PRD — Obsidian↔wnab data bridge"
type: PRD
status: draft
created: 2026-05-29
updated: 2026-05-29
tags:
  - PRD
  - wnab
  - obsidian
  - integration
links:
  - "[[PRDs/PRD-wnab-Budget-App]]"
  - "[[00 Command Center/Finances]]"
  - "[[PRDs/PRD-wnab-AI-Layer]]"
---

# PRD — Obsidian↔wnab data bridge

## Problem

The Command Center `Finances.md` is a JSX dashboard that reads an **old Apple Card CSV spend feed** —
the pre-wnab "Path B" artifact. The plan was always for it to become a **read-only overview of wnab**.
Until that happens there are two sources of truth (CSV vs the real budget in wnab) that will drift, and
the dashboard shows spend, not budget state (assigned / available / age of money). wnab is on-device and
serverless, so the bridge is necessarily **file-based export → Obsidian reads the file**.

## Success criteria

- wnab can export a budget **snapshot** (JSON) to `~/Documents/Finances/wnab/`.
- `Finances.md` reads that snapshot and renders a read-only overview: To-Assign, per-category
  assigned/available, recent activity, age of money.
- The old CSV-spend dashboard is retired (or reduced to history).
- Single source of truth: the overview reflects wnab, not a parallel CSV.

## Scope

**In:** define the snapshot schema; add an export action in wnab (button and/or on-close); rewrite the
`Finances.md` datacore view to read the snapshot; retire the CSV path; remove the dead localhost launcher
block (superseded by the Electron app + `wnab://` link, see [[PRDs/PRD-wnab-Electron-Launch]]).

**Out:** write-back from Obsidian into wnab (this is **read-only**); live/real-time sync; any cloud.

## Constraints / risks

- Data stays in the private folder; Obsidian reads a local file only.
- Snapshot **schema stability** matters — it's the contract shared with [[PRDs/PRD-wnab-AI-Layer]]
  (Cowork reads the same export). Design it once, version it.
- Export cadence vs staleness: a manual export means the overview can lag reality.

## Plan (sequencing)

1. Define the snapshot JSON schema (the shared contract — budget month, categories, assigned/activity/
   available, balances, age-of-money). Version field included.
2. Add export in wnab writing that snapshot to the private folder.
3. Repoint `Finances.md` to read it; build the read-only overview.
4. Verify against a real budget; retire the CSV dashboard.

## Open questions

- Export cadence: manual button, auto-on-close, or scheduled (ties to an auto-export/backup routine)?
- Minimum fields the overview needs vs the fuller set the AI layer wants — design for the superset?
- Keep any historical CSV view, or fully retire it?
