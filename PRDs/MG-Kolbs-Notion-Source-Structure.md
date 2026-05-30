---
title: "MG & Kolbs — faithful Notion source structure (live extraction)"
description: "True database schemas, relations, rollups, and views pulled live from the Notion workspace via the connector. The accurate source of truth for the Obsidian build (the zip exports lost all of this)."
type: reference
status: in-progress
created: 2026-05-30
updated: 2026-05-30
tags:
  - mg-kolbs
  - notion
  - reference
links:
  - "[[PRDs/PRD-MG-Kolbs-System]]"
  - "[[PRDs/PRD-Pans-MG-Kolbs-Conversion]]"
---

# MG & Kolbs — faithful Notion source structure

Extracted live from the Notion workspace (connector), not the lossy CSV/zip exports. This captures real property types, relations, rollups, formulas/buttons, select options, and view configs — the build spec for the Obsidian conversion.

Top page: **MG & Kolb's Template** (`23b153fd-d6f6-80c9-8bea-e600426aec36`) → contains a **Databases** sub-page holding: Tasks, Kolbs, Skills, Goal tracking, Goals (+ Kolbs daily tracker).

## Database: Skills

**Data source** `collection://23b153fd-d6f6-81b5-83a4-000bfb7805b5`. Lives under MG & Kolb's Template → Databases.

**Properties (true types):**

| Property | Type | Detail |
|---|---|---|
| Skill | title | — |
| Status | select | Active (green), Paused (yellow), Inactive (red), Archived (default) |
| Current level | select | 1/10 … 10/10 (all red) |
| Final level | select | 1/10 … 10/10 (all green) |
| Competency | select | CI (red), CC (low) (pink), CC (medium) (orange), CC (high) (yellow), UC (green) |
| Final level metrics | text | — |
| Anchored goal | relation | → Anchored goals data source (`61d093c2-fc00-456b-890b-cc22663bbc3d`) |
| Goal tracking | relation | → Goal tracking (`52e5ca6e-2de4-4212-8f98-fccfe9ed69d5`) |
| Kolbs (1) | relation | → Kolbs (`23b153fd-d6f6-8127-88a5-000be2d4abbf`) |
| Kolbs cycles | relation | → Kolbs cycles (`b423a0e9-348b-4bbd-ab91-1a22ef45abd9`) |
| Last tracked | rollup | over Goal tracking relation → target `created_time` |
| Edited | last_edited_time | system |

**Views:**
- **Current** (table) — filter `Status = Active`; columns: Skill, Status, Current level, Final level, Competency, Final level metrics.
- **All** (table) — filter Status ∈ {Active, Paused, Inactive, Sub}; sort Status ascending.

**Obsidian mapping (faithful):** one note per skill in `Skills/`, frontmatter `type: skill`, `status`, `current-level` (1–10), `final-level` (1–10), `competency`, `final-level-metrics`, plus link properties for the relations. A `.base` with two views (Current = filter status Active; All = sort by status) reproduces the Notion views. Note: the personal fork already uses `current-level`/`final-level` as plain numbers — keep that; map Notion's "5/10" select → `5`.

> Radar note: `current-level` + `final-level` here are exactly the radar's data source. The "Last tracked" rollup → in Obsidian, derive from the related Goal-tracking note's created date (or drop for v1).

---

## Remaining to extract (next)

- **Kolbs** DB (`23b153fd-d6f6-8186-9bf9-fb709c64f896`) — incl. the ☑️ cycle **button** (complete current → create+open next), Next/Previous self-relations, Duration formula, Skills relation.
- **Tasks** DB (`23b153fd-d6f6-8125-abe1-fb9998df8aa3`) — ✅ break-timing button, Do Date, Priority, views (board/calendar).
- **Goals** DB (`23b153fd-d6f6-8130-9826-ca853a2fc400`).
- **Goal tracking** DB (`23b153fd-d6f6-81ee-9954-ff721c2886c5`).
- **Kolbs daily tracker** DB (`2c8153fd-d6f6-825a-96e1-819ca4e85397`).
- Main page body (callout/usage notes, embedded views, Anchored-goal section).
