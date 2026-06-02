---
title: "Obsidian LifeOS & Command Center — Build PRD"
description: "Build PRD for a unified, Obsidian-native command center spanning knowledge and life. Bases for knowledge; calm native LifeOS cards with JS only for drill-down graphs. cos is retired."
type: design-doc
status: locked
created: 2026-05-27
updated: 2026-05-27
tags:
  - command-center
  - lifeos
  - dashboards
  - bases
  - system
  - design
---

# Obsidian LifeOS & Command Center — Build PRD

A single, Obsidian-native command center spanning knowledge work *and* life. Supersedes the Dataview-based proposal in [[journal/2026-05-23-Obsidian-Dashboard-Implementation-Plan|2026-05-23 Dashboard Implementation Plan]] and the earlier "life layer = Cowork artifact" framing in this doc's prior revision.

> **Locked 2026-05-27.** Signed off by Wedge. Re-open only on an explicit decision change.
>
> Final picks: dashboard surface = `00 Command Center/Home.md` (name kept as "Home" for now). Active questions for v1 — (1) using the knowledge base to free attention from bookkeeping while increasing real thinking; (2) frames for each Priority 0 skill (Agentic Engineering, Learning Systems, Vietnamese, 中文, Fitness, Relationships); (3) what "self-updating" should mean for the vault.

> [!important] Amendment 2026-05-29 — finance layer rescoped to wnab overview
> The **budgeting system has moved out of this PRD** into [[PRDs/PRD-wnab-Budget-App|wnab]], a custom YNAB-like app on Actual Budget's engine (separate repo, not in the vault). This is an explicit decision change (see [[decisions/2026-05-27-budget-path-b-not-real-software]], now superseded).
> **What this changes here:** the *Life → finances* scope, the Phase 2 finance cards, and the finance drill-down are **rescoped from "the budget system" to "a read-only overview of wnab."** The numberless front-page card and the JS drill-down stay — they now *read wnab's data* rather than being the budgeting engine themselves. The card's CSV export at `/Users/n1/Documents/Finances/` is reused to seed wnab.
> **What's unchanged:** everything non-finance (knowledge, direction, tasks, dates), and the core "live where attention already is" mandate — the daily finance *glance* still lives in Obsidian; only the deliberate budgeting *work* moves to wnab. That split is the deliberate answer to the cos failure mode, not a violation of it.

## Problem

The current front-facing surface ([[00 Command Center/Home|Home]]) is hand-maintained link lists — they go stale and answer "what links exist," not "where am I going, what am I working on, what should I think about." There is no single surface that pulls together what's incoming, what's in progress, the questions worth thinking about, the skills being trained, and the state of real life (tasks, dates, finances).

`cos` was the prior attempt at the life half. It is now retired (see below). Its *vision and data model are reused; its platform is not.*

## Why cos failed — the constraint that shapes everything

cos failed primarily because it was **a separate surface that lived outside daily attention.** Work happens in Obsidian; a dashboard that isn't in Obsidian doesn't get visited, so its data goes stale and it stops being true. Two secondary risks contributed and must be designed against:

- **Data-entry friction** — hand-updating finances/tasks/goals was heavy, so the data rotted.
- **Maintenance burden** — a generator script, a TUI, an HTML view, connectors, and dual interfaces became work in themselves.

Design mandates that follow directly:

1. **Live where attention already is.** The LifeOS is *in* Obsidian, not beside it.
2. **Capture must be dead-simple and inline.** If updating it is a chore, it dies. Favor frontmatter / quick-add over external data pipelines.
3. **Stay light.** Few plugins, no fragile generator. Native first.

## Principles

- **Live where attention already is** — Obsidian-native, full stop.
- **The wiki is directed attention, not a pile to keep tidy.** Recency-based "staleness" is not a home metric. Vault stats, if they exist, live in a separate cleaning view.
- **What "maintenance" means here is flow, not decay** — what's unprocessed in `raw/`, what's live on the `workbench/`.
- **Single attention surface.** One destination; deep views are drill-down tools picked up on purpose.
- **Content over numbers.** Paragraph summaries and direction are first-class; raw counts are supporting actors. (Carried from the cos design direction.)
- **Numberless by default for anything sensitive.** Finances render as sparklines / progress bars / directional indicators; real numbers only on drill-in.
- **Native, best-practice, beautiful — no patchwork.**

## Success criteria

- One Obsidian home that answers, in a ten-second scan: what's incoming, what's in progress, what to think about, what I'm learning, where I'm going, and the calm state of my life (tasks, dates, finances).
- Updating it is low enough friction that it stays true a month later.
- Visual language matches the vault: warm-minimal editorial — cream / ink / teal, serif reading text, monospace labels.
- Few plugins; no generator pipeline to babysit.
- `Home.md`'s hand-maintained lists are replaced by derived views.

## Scope

**In:** one unified Obsidian command center with two halves —

- *Knowledge & direction* (data ready now): Flow (`raw/inbox` items with a one-line blurb each; workbench "forgot to finish" reminder), open questions (from [[00 Command Center/Open Questions|Open Questions]] + journals), Kolbs cycles + skills, "what's next / where am I going."
- *Life* (needs data migration): finances (numberless), tasks, important dates — ported from cos's model.

**Out:** cos (retired); a Cowork-artifact life layer (abandoned — it was a separate surface, the exact failure mode); Quartz export of dashboards; heavy automation / scheduled generators.

## Engine & rendering

- **Bases** (native, enabled) for all knowledge and tabular views.
- **The calm LifeOS home needs no charting plugin.** Unicode sparklines (`▁▂▃▅▇`), progress bars (`████░░░`), directional arrows, and paragraph summaries are plain text + CSS — Bases + markdown + `kb.css` render it.
- **A JS plugin is reserved for drill-down real-number graphs only** — Datacore (modern, React-based, interactive) or DataviewJS + Charts. This is a *deliberate, scoped reversal* of the earlier "Bases-only, no Dataview" decision: charts are impossible natively, but JS is confined to expand-views, not the home.
- **Spokes** = standalone `.base` files / drill-down notes opened on demand.

## Aesthetic

Vault typography (Source Serif 4 + Fira Code, warm cream `#fbf8f4` / ink `#1c1a20` / teal `#5a7d96`) applied to cos's Basecamp *layout* principles: calm self-contained cards, generous whitespace, clear hierarchy, content-first. Promote `.obsidian/snippets/kb.css` from typography-only into a palette + component system (cards, metric/indicator tiles, status pills, chip row).

Hierarchy (from the cos design direction): Knowledge Work + Finances get visual weight; Learning + Knowledge Base are strong second-tier; Tasks/dates are supportive.

## Data & capture

Capture is **CSV import**, not hand-entry — hand-entry is what rotted cos. Files land in the vault and the dashboard reads them.

- **Finances — the card.** No public API, so the path is a manual monthly export: Wallet → the card → statement → Export Transactions (CSV) → save to `/Users/n1/Documents/Finances/` (**outside the repo**). Periodic and intentional, which suits manual sessions. The Phase-2 finance note reads that file by absolute path and renders charts; the front-page card shows a numberless sparkline + one-line trend. Confirmed columns: `Transaction Date, Clearing Date, Description, Merchant, Category, Type, Amount (USD), Purchased By`.
- **Tasks / dates** — inline markdown to start (checkboxes + a `due` date in frontmatter), surfaced by Bases. CSV import later if a source warrants it.
- **Learning intake** — already native (`raw/inbox`); the Flow view covers it.

Open: confirm the exact card export columns against a real sample; decide whether other accounts (bank, brokerage) follow the same CSV-drop pattern.

## Plan / sequencing

1. **Phase 1 — Knowledge & direction command center** (unblocked; data exists). Build `kb.css` design system; `.base` views (Flow/inbox, workbench reminder, open questions, Kolbs/skills); the Home command-center page; replace `Home.md`'s manual lists.
2. **Phase 2 — LifeOS layer** (needs data). Decide the capture model; port cos's finance/task/learning data into the vault; build the numberless calm cards; add a JS drill-down for real finance numbers.
3. **Later** — `tools/` flow/health script for the cleaning spoke; any curated static pages for the web.

## Decisions

- **cos retired.** Its *idea* is kept; its *surface* is not. cos lived outside Obsidian and created friction in both reading and capture — the core failure. The LifeOS is rebuilt Obsidian-native.
- **Capture = CSV import, not hand-entry.** The card's monthly CSV exports live OUTSIDE the repo at `/Users/n1/Documents/Finances/`; the Phase-2 finance note reads them by absolute path. Hand-entry rotted cos and is avoided.
- **Finances never enter the public repo.** Raw data stays in the external folder above. As a backstop, `finances/**` is also gitignored and excluded from Quartz `ignorePatterns`. Trade-off: external data isn't backed up by git — keep an independent backup.
- **Rich finance view = a separate in-vault note rendered with JS** (Datacore or DataviewJS + Charts), one click from the front page. Front page stays numberless.
- **Engine = Bases for plain lists (Flow, Workbench, Direction); Datacore (JS) for visual sections (Skills now, Finance at Phase 2); CSS card-framing across all.** Datacore is store-installable (no BRAT). Expanded 2026-05-27 from the earlier "JS only for the finance drill-down" scope — the Basecamp visual style outgrows Bases, and Skills/Finance are where smooth visuals matter.
- **Aesthetic = vault editorial type + cos's Basecamp layout principles.** Dashboard styling scoped for v1; a vault-wide restyle is a deliberate later pass.
- **Open questions = a curated 3–5 (from journals)** in a small dedicated note — NOT `Open Questions.md`, which a health-check process auto-bloats (~96 entries, sections stamped "added … health check"). Curbing that auto-append is a separate cleanup.
- **Dashboard surface = `00 Command Center/Home.md`.** Replaces its hand-maintained link lists. Destructive overwrite → archive the current Home.md and show before/after for explicit OK first.
- **Command center = directed attention, not vault metrics.** (Unchanged.)
- **Hermes retired; manual sessions + scheduled tasks only.** (Unchanged.)

## Open questions

- Which JS plugin for the finance drill-down — DataviewJS + Charts (mature, lots of CSV examples) or Datacore (newer, reactive)? Recommend prototyping one finance card before locking.
- How are self-given questions captured from journals and past sessions — a tag/convention, or a script extract?
- `workbench/` is nearly empty by design (WIP only); confirm the "forgot to finish" reminder threshold and whether active synthesis also lives in `outputs/`.
