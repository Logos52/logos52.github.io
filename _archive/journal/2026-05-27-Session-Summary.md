---
title: "Session summary — 2026-05-27 dashboard build"
type: session-summary
status: published
created: 2026-05-27
updated: 2026-05-27
tags:
  - session-summary
  - dashboard
  - command-center
  - lifeos
---

# Session summary — 2026-05-27 dashboard build

One long session that took the vault from "hand-maintained Home with stale link lists" to a live Obsidian-native dashboard OS with finance drill-down, decisions log, cleanup ritual, and public snapshots. Tabled future paths are captured as notes so nothing's lost.

## Locked decisions (the canonical record lives in `decisions/`)

- **Dashboard engine: Bases, not Dataview.** Native, already on, no plugin rot. Datacore added later for visual sections only.
- **cos retired; LifeOS rebuilt in Obsidian.** The separate-surface failure mode is what killed cos.
- **Apple Calendar over Google for the calendar data layer.** Clean-simple fit; system lives in dashboard + practices, not the calendar app's UI.
- **Budget = Path B (in-Obsidian layer), not real budgeting software.** Same separate-surface reasoning as cos.
- **Dashboard surface = `00 Command Center/Home.md`, single tiered page.** Resolves split-attention by giving one daily destination.

## Shipped (live now in the vault)

- **`PRDs/PRD-Obsidian-LifeOS-Command-Center.md`** — locked PRD, excluded from publish.
- **`kb.css` design system** — theme-aware light/dark, scoped to `cssclasses: command-center`.
- **`00 Command Center/Home.md`** — the dashboard. Sections: Active Questions, Decisions (preview), Flow (inbox), Workbench (forgot-to-finish), Direction, Skills (Datacore table with notched bars), Finances (numberless card), Tasks, System & nav. Old Home preserved as `Home (archived 2026-05-27).md`.
- **Bases views** — `flow.base`, `workbench.base`, `direction.base` (Skills is now Datacore).
- **`00 Command Center/Active Questions.md`** — the 3 curated questions on Home.
- **`00 Command Center/Decisions.md`** — full Decisions log view (private).
- **`00 Command Center/Tasks.md`** — task seed; Datacore picks up open `- [ ]` items from Command Center.
- **`00 Command Center/Finances.md`** — drill-down: summary card, spend by category, monthly bar chart with opacity gradient, weekday pattern, YTD cumulative line, top merchants. Reads Apple Card CSV from `~/Documents/Finances/` via `tools/finance-helpers.md` (shared via `dc.require`).
- **`outputs/generated-questions.md`** — new destination for AI-appended uncertainty (per updated `AGENTS.md` step 7).
- **`tools/wiki-cleanup-ritual.md`** — AI-agnostic cleanup skill.
- **`tools/publish-snapshots.md`** — AI-agnostic skill that produces public showcase tables with dummy data.
- **`public-snapshots/`** — three showcase tables (decisions, skills, direction). Dummy data only.
- **`tools/finance-helpers.md`** — shared CSV loader, single source of truth for finance code.
- **`AGENTS.md` step 7** — auto-appends now go to `outputs/generated-questions.md`, not the personal Open Questions log.

## Future paths captured (tabled with notes, nothing orphaned)

- **`journal/2026-05-27-Budget-Layer-Direction.md`** — Path B budget layer with category-level bars and a numberless pacing indicator. Prereq: define category targets from real spending baselines.
- **`journal/2026-05-27-Calendar-System-Direction.md`** — ICS-grounded calendar system on Apple Calendar with iCal feed pull into the dashboard.
- **`journal/2026-05-27-Self-Updating-Wiki-Future-Path.md`** — branch a second project for self-updating wiki; current vault stays personally curated.
- **`journal/2026-05-27-GitHub-Modularity-Future-Path.md`** — extract mature patterns as companion repos (Personal OS template, Finance Card, Cleanup Ritual, Decisions convention).

## Privacy posture

- **Public on `logos52.github.io`:** `wiki/`, `blog/`, `public-snapshots/` (dummy data only), `index.md`, `about.md`, the standard Quartz output.
- **Excluded from publish:** `00 Command Center/`, `decisions/`, `mg-kolbs/`, `PRDs/`, `raw/`, `outputs/`, `templates/`, `tools/`, `private/`, `finances/`, plus everything gitignored.
- **External / never in repo:** Apple Card CSV at `~/Documents/Finances/` (gitignored backstop; raw data outside the repo).

## Outstanding (when you pick this back up)

Active tasks at session end:
- **#11 — Budget Path B layer.** Tabled. Next: surface category averages from CSV, set targets, build spent-vs-budgeted bars and pacing indicator.
- **#12 — Calendar system (Apple Calendar + dashboard).** Tabled. Next: create the three calendars, enable Public Calendar, drop iCal URLs into `~/Documents/Calendar/`, build Today + Upcoming sections.
- **#13 — GitHub modularity companion repos.** Tabled. Next: pick which patterns are mature enough to extract.

Smaller follow-ups noted in passing:
- Polish the Datacore Skills table layout / column widths once you've lived with it.
- The `dc.require` finance helpers refactor is fresh — first time we've used that pattern; if it ever errors, the inline fallback is the previous code (still in git).
- Active Questions: candidate list of 8 was offered; pick replacements when ready.

## Recommended next move

Pick from the three tabled future paths based on what's hurting most:

- **If finances feel uncontrolled** → Budget Layer (Path B). The data is already loaded; the layer is a focused build.
- **If your day feels unscheduled** → Calendar System. Bigger setup (Apple Calendar layering + iCal feed) but lots of payoff.
- **If you want to show your work publicly** → GitHub modularity companion repos.

Or just let the system breathe for a week of real use and discover what's actually friction-worthy.
