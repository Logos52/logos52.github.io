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

## Database: Kolbs

**Data source** `collection://23b153fd-d6f6-8127-88a5-000be2d4abbf`.

**Properties:** Session name (title); **Status** (status-type: Not started / In progress / Done); Start time (date+time, DD/MM/YYYY H:mm); Finish time (date+time); **Duration** (formula — Finish − Start; formula code not exposed by API); MGs and experiments (text); **Next kolbs** (relation→Kolbs self, limit 1); **Previous kolbs** (relation→Kolbs self); **Skills** (relation→Skills); Created (created_time); **☑️** (button).

**☑️ button behavior** (from usage notes; action JSON not exposed by API): set current Status→Done, create **and open** the next Kolbs, carry the name (user renumbers), link Previous/Next.

**Views:** two tables, sorted Created descending (columns: Session name, Created, Duration, Status).

**Obsidian mapping:** note per Kolbs in `Kolbs/`; frontmatter session/status/start/finish/mgs + link props for next/previous/skills; Duration as a Base formula (finish − start). `.base` table sorted by created desc. ☑️ → QuickAdd+Templater macro (Tier 1) / AI-prefilled next cycle (Tier 2) per the conversion PRD.

## Database: Tasks

**Data source** `collection://23b153fd-d6f6-8182-9f55-000be4054d0d`.

**Properties:** Task (title); **Status** (status-type: Incomplete / Complete); **Priority 0+1** (select: important + not urgent / important + urgent / not important + urgent); Do Date (date+time); Created (created_time); **Break length** (formula); **Time taken** (formula); unnamed **button** (✅, complete + break timing).

**Recurring page-templates** (the auto-created tasks): "weekly eval + goal tracking", "Priority 0 check-in: go to goals page", "Skills audit→ feedback request".

**Views:**
- **Next** (board) — group by Do Date (relative), filter Do Date ≥ today **OR** empty, sort Do Date asc then Priority asc; columns Task / Priority / Do Date.
- **Calendar** — by Do Date, week range.
- **Past** (table) — Do Date descending.

**Obsidian mapping:** note per task; `.base` with a board (group by do-date), a calendar (Full Calendar plugin or Bases date view), and a Past table. ✅ → Tier-1 script/QuickAdd computing break length from time taken. Recurring templates → Templater + Periodic Notes, or `/scripts` (per dual-tier automation decision; no Hermes).

## Database: 🎯 Goals

**Data source** `collection://23b153fd-d6f6-814f-8bb7-000b76e41a38`.

**Properties:** Name (title); **Status** (status-type: Not started / In progress / Archived); Start date (created_time); End date (date, DD/MM/YYYY); Last edited (last_edited_time).

**View:** "Board view" (table) — filter Status ∈ {To-do, In progress} groups; sort Last edited desc, then Start date desc.

**Obsidian mapping:** note per goal in `Goals/`; frontmatter name/status/start/end; `.base` filtered to active, sorted last-edited desc. (The personal fork already has rich Goal pages — keep those bodies, normalize frontmatter.)

## Database: Goal tracking

**Data source** `collection://23b153fd-d6f6-811d-ac29-000bc846c693`. Default page template **"@Today"**.

**Properties:** Date (title); Created (created_time); "1. Performance goals" (text); "2. Skills evaluation" (text); **"10/10 metric"** (rollup → via "Next week's focus" → text); **"Next week's focus"** (relation → Skills); **"Skills (1)"** (relation → Skills); **"Open"** (button).

**Views:** two tables (a Date-only one sorted Created desc; a full one showing all props).

**Obsidian mapping:** note per weekly tracking entry in `Goal-Tracking/`; frontmatter date + perf-goals/skills-eval text + link props for the Skills relations; `.base` sorted created desc. This is the weekly-evaluation cadence that links back to Skills (and feeds the radar's "last tracked").

---

## Extraction status

Core databases (Skills, Kolbs, Tasks, Goals, Goal tracking) — **complete**, with true types, relations, rollups, status fields, selects, buttons, and view configs. Sufficient to build the faithful Obsidian version.

**Still optional / secondary:** Kolbs daily tracker (`2c8153fd-…`, the "Basic template" lineage), and the main-page body (ℹ️ usage callout, embedded linked views, Anchored-goal section) — text content largely available in the existing zip exports; can be folded in during the build.

**API limits:** formula code and button action JSON are not exposed by the connector. Those behaviors (Duration, Break length/Time taken, ☑️ Kolbs cycle, ✅ task break-timing) are documented from the original usage notes and the dual-tier automation decision.
