---
title: "Implementation Plan — Obsidian LifeOS & Command Center"
type: implementation-plan
status: draft
created: 2026-05-30
source_prd: "[[PRDs/PRD-Obsidian-LifeOS-Command-Center]]"
tags:
  - command-center
  - lifeos
  - implementation-plan
  - bases
  - datacore
  - plan
---

# Implementation Plan — Obsidian LifeOS & Command Center

A plan for finishing the Obsidian-native command center. The surprising news from recon: most of Phase 1 is already standing. `Home.md` is no longer the hand-maintained link lists the PRD set out to kill — it is a derived surface built from Bases embeds and Datacore JSX. So this plan is less "build the command center" and more "close the last gaps, settle the seams with the wnab Bridge, and answer the three open questions with what the vault is actually running today."

The finance half splits cleanly. The PRD's 2026-05-29 amendment rescoped finances to a *read-only overview of wnab*. That overview's data contract — the snapshot schema and the export — is owned by [[PRDs/PRD-wnab-Obsidian-Bridge]]. **This plan owns the knowledge-and-direction half plus the calm card framing.** Where the two meet (the numberless Home finance card, the Finances drill-down), this plan defers the data rewrite to the Bridge and only commits to the framing and the retirement of the dead CSV/localhost scaffolding.

## Current state

### Done

- **Datacore is installed and live.** The PRD's headline open question ("which JS plugin") is already answered on disk: `datacore` is the only query plugin enabled — there is no Dataview. Evidence: `.obsidian/community-plugins.json` lists `["obsidian-minimal-settings","obsidian-style-settings","datacore"]`; `Home.md`, `Decisions.md`, and `Finances.md` all render `datacorejsx` blocks.
- **Bases (native) is enabled.** Evidence: `.obsidian/core-plugins.json` has `"bases": true`.
- **`Home.md` is already a derived command center, not hand-maintained link lists.** It has a `cc-head` header with chips, and every section below is derived: Decisions (Datacore query `@page and type = "decision"`), Flow (`![[flow.base]]`), Workbench (`![[workbench.base]]`), Direction (`![[direction.base]]`), Skills (Datacore query over `mg-kolbs` with progress bars), Finances (Datacore + CSV loader), Tasks (Datacore `@task` query). The only hand-maintained block is the Active Questions embed — which is *by design* (curated 3–5). Evidence: `00 Command Center/Home.md` lines 13-188. The PRD's central success criterion ("`Home.md`'s hand-maintained lists are replaced by derived views") is therefore substantially met.
- **All four `.base` views exist and are wired.** Evidence: `00 Command Center/flow.base` (inbox, last 25 by mtime DESC), `direction.base` (`type == "goal"`), `skills.base` (mg-kolbs + competency, with a CSS progress-bar formula), `workbench.base` (workbench folder, with a 10-day "stale — forgot to finish?" formula).
- **`kb.css` is already a full component system, not typography-only.** Evidence: `.obsidian/snippets/kb.css` is 467 lines (~12 KB) and ships theme-aware tokens (`--cc-paper/--cc-ink/--cc-soft/--cc-line/--cc-muted/--cc-blue/--cc-teal`, light + dark) plus components: `.cc-head/.cc-eyebrow/.cc-title/.cc-chip`, `.cc-card` card frames over Bases + Datacore embeds, `.cc-bar/.cc-spark/.skill-bar` indicators, and a full finance kit (`.finance-summary`, `.cat-row`, `.monthly-chart`, `.weekday-chart`, `.ytd-chart`, `.finance-table`, `.finance-card-spark`). It is enabled as a snippet. Evidence: `.obsidian/appearance.json` `enabledCssSnippets: ["kb"]`. The PRD's "promote kb.css from typography-only into a palette + component system" is done.
- **Shared CSV loader exists as a single source of truth.** `tools/finance-helpers.md` exports `{ parseCSV, loadLatest }`, consumed by both Home and Finances via `dc.require(dc.headerLink(...))`. Evidence: `tools/finance-helpers.md` lines 17-69.
- **Decisions log + Active Questions are real and populated.** `decisions/` holds 7 notes (incl. `2026-05-27-cos-retired.md`, `2026-05-29-wnab-full-clone-direction.md`); `2026-05-27-budget-path-b-not-real-software.md` is correctly marked `status: superseded` / `superseded-by: [[PRDs/PRD-wnab-Budget-App]]`. `00 Command Center/Active Questions.md` holds exactly the 3 curated v1 questions the PRD names.
- **Numberless-by-default Home finance card is built (against the CSV).** `Home.md` lines 109-160 render a 7-bar sparkline + directional arrow (↑/→/↓) with no dollar figures, linking to the drill-down. The *framing* the PRD asked for already exists; only its data source is wrong (CSV, not wnab).

### In progress / partially done

- **Direction is thin.** `direction.base` works, but only 3 `type: goal` notes exist (`mg-kolbs/Goals/{Agentic Engineering, Learning Systems, Vietnamese}.md`). The PRD names six Priority-0 skills (adds 中文, Fitness, Relationships). Evidence: `grep -rln 'type: goal'` returns exactly those three files. The view is real; the content is half-populated.
- **Finance layer is on the *old* CSV path, not wnab.** Both Home and Finances read the Apple Card CSV via `finance-helpers`. `Finances.md` line 108 still hardcodes `http://localhost:4179/` and line 109 the dead `wnab.command` launcher. The amendment rescoped this to a wnab overview, but no snapshot exists yet — `~/Documents/Finances/wnab/` contains only `.env`, `README.md`, and `serve/`, no snapshot JSON. This is the Bridge's territory; flagged here as the seam.

### Not started

- **`workbench/` does not exist on disk.** `workbench.base` and the Home "what's in motion" embed both point at a folder that is absent (`test -d workbench` → NO DIR; the `.gitkeep` referenced by `.gitignore` lines 66-68 is not present). The "forgot to finish" reminder renders empty. This is the PRD's open question #3 made concrete: the threshold logic exists (10 days), but there is nothing to apply it to.
- **wnab snapshot read in the Finances/Home cards.** Deferred to [[PRDs/PRD-wnab-Obsidian-Bridge]]; not startable here until the schema + export land.
- **`tools/` flow/health cleaning spoke.** PRD "Later" item; no script present.
- **Curbing `Open Questions.md` auto-bloat.** The bloated file lives at `02 - System/Open Questions.md`. The PRD calls curbing the auto-append a "separate cleanup" — out of scope here, noted for completeness.

## Dependencies & shared contracts

- **The snapshot JSON schema is the load-bearing shared contract.** Defined and owned by [[PRDs/PRD-wnab-Obsidian-Bridge]] (budget month, per-category assigned/activity/available, balances, age-of-money, version field) and also consumed by the wnab AI layer. This plan does **not** define it. The Finances/Home rewrite (Task 7) is *blocked on* the Bridge delivering: (a) the schema, (b) a wnab export that writes it to `~/Documents/Finances/wnab/`. Until then, the finance cards stay on the CSV and this plan only touches their framing/retirement copy.
- **`tools/finance-helpers.md` is the single CSV-loader contract.** Any change to path/glob/parser happens once there; Home + Finances inherit. When the Bridge lands, the parallel "load the snapshot JSON" helper should live in the same note (or a sibling `wnab-helpers`) so both views share one source of truth — coordinate so the Bridge and this plan don't fork the loader.
- **`kb.css` `command-center` scope is the styling contract.** Every card relies on `cssclasses: [command-center]` (declared in `Home.md`, `Finances.md`, `Decisions.md`) and the `--cc-*` tokens. New cards must reuse existing classes (`.cc-card`, `.cat-row`, indicators) rather than inventing parallel ones; the PRD's "no patchwork" mandate is enforced by this single snippet.
- **Folder existence is an implicit contract for Bases filters.** `flow.base` → `raw/inbox` (15 items, present). `skills.base` → `mg-kolbs` (present). `direction.base` → any `type: goal` note (3 present). `workbench.base` → `workbench/` (**absent** — must be created for that view to do anything).
- **Datacore version coupling.** Datacore is pre-1.0 and store-installable; the JSX API (`dc.useQuery`, `dc.Table`, `dc.require`, `dc.headerLink`) is what every card is built on. Plugin updates are the main upgrade risk (see Risks).

## Risks

- **Datacore API churn.** The whole interactive surface (Skills, Finances, Decisions, Tasks) is Datacore JSX against a pre-1.0 plugin. A breaking update could blank several cards at once. Mitigation: pin the plugin version; the Bases-rendered views (Flow/Workbench/Direction) are the native fallback and degrade gracefully.
- **Empty-folder views read as "broken," not "calm."** `workbench.base` over a missing folder, and a half-populated Direction, can make the home look unfinished rather than intentionally sparse. Mitigation: create `workbench/` with a `.gitkeep`; give each Bases embed an empty-state line, or accept sparse-by-design and document it.
- **Finance double-source drift.** Until the Bridge lands, the cards show CSV *spend*, while wnab holds the real *budget*. This is exactly the "two sources of truth" the Bridge PRD names. Mitigation: do not deepen the CSV finance logic in this plan; treat it as legacy framing pending the snapshot swap.
- **Destructive Home overwrite.** The PRD requires archiving the old `Home.md` and a before/after sign-off before any destructive change. Since Home is already migrated, the remaining edits are additive/surgical — but any structural rewrite still needs that archive + OK.
- **External finance data is not backed up by git.** `finances/**` is gitignored and the CSV/snapshot live outside the repo (`~/Documents/Finances/`). PRD-acknowledged trade-off; an independent backup is the user's responsibility, not this plan's.
- **No automated render check.** Datacore/Bases only render inside the Obsidian app; an agent cannot confirm a card visually. Every card-touching task needs a Wedge eyeball in-app.

## Open questions — resolved

1. **Which JS plugin for the finance drill-down — DataviewJS+Charts or Datacore?**
   **Resolved: Datacore.** It is already installed and every existing card (Skills, Finances, Decisions, Tasks, the shared CSV loader) is built on it. Dataview is not installed. The PRD itself leaned reactive/store-installable. Adding Dataview now would mean two query engines, two idioms, and the "patchwork" the PRD forbids. Charts are drawn today with hand-rolled inline SVG/divs styled by `kb.css` (`.ytd-chart` is a raw `<svg>` path, `.monthly-chart`/`.weekday-chart` are flex bars) — no charting library is needed; keep it that way. Lock Datacore; do not introduce Dataview or a Charts plugin.

2. **How are self-given questions captured from journals/sessions — tag, convention, or script extract?**
   **Resolved: hand-curated convention, no script.** The vault already does this: `Active Questions.md` is a deliberately short, hand-picked 3–5 distinct from the auto-bloating `02 - System/Open Questions.md`. A script extract would reintroduce exactly the auto-append bloat the PRD warns against. Convention: when a question recurs in the journal, the user lifts it by hand into `Active Questions.md` (cap 5, FIFO). Optionally tag source journal lines `#aq` to make the manual lift a 2-second search — but the home surface stays hand-curated. No extraction pipeline.

3. **Workbench "forgot to finish" threshold, and does active synthesis also live in `outputs/`?**
   **Resolved: 10 days, keep it; create the folder; workbench only (not outputs).** The threshold is already coded in `workbench.base` (`file.mtime < now() - "10d"` → "stale — forgot to finish?"). Ten days is the right default: long enough that a genuinely active draft never trips it, short enough to catch the thing you abandoned mid-thought. The blocker is that `workbench/` doesn't exist — create it with a `.gitkeep` so the view has a home. Scope the reminder to `workbench/` only: per the vault's own convention (`CLAUDE.md`, `.gitignore`), `workbench/` is private WIP/drafts while `outputs/` is promoted/published synthesis — surfacing finished outputs as "forgot to finish" would be noise. Keep the reminder pointed at the bench, not the shelf.

## Task breakdown

| # | Task | Touches | Effort | Reversible | Needs Wedge |
|---|------|---------|--------|------------|-------------|
| 1 | Create `workbench/` with a tracked `.gitkeep` so `workbench.base` and the Home "what's in motion" embed render against a real folder | `workbench/.gitkeep` | S | Yes | No |
| 2 | Add an empty-state line to the Workbench embed/card so a clean bench reads as calm, not broken ("Bench is clear.") | `00 Command Center/Home.md`, optionally `workbench.base` | S | Yes | No (verify in app) |
| 3 | Lock Datacore as the sole query engine: add a one-line note in a decision or `tools/finance-helpers.md` recording "Datacore only, no Dataview, charts are inline SVG/CSS" so the resolution doesn't drift | `decisions/` (new note) or `tools/finance-helpers.md` | S | Yes | No |
| 4 | Add the remaining three Priority-0 goal notes (中文, Fitness, Relationships) as `type: goal` so Direction reflects all six skills; reuse the Kolbs goal frontmatter shape | `mg-kolbs/Goals/*.md` (3 new) | M | Yes | No |
| 5 | Codify the Active-Questions capture convention (cap 5, hand-lift from journal, optional `#aq` tag) as a short note at the top of `Active Questions.md` | `00 Command Center/Active Questions.md` | S | Yes | No |
| 6 | Audit `kb.css` for unused/duplicate finance classes ahead of the wnab swap; confirm tokens cover the budget-overview card types (assigned/available/age-of-money) the Bridge will need, add any missing component classes (numberless `available` pill, age-of-money tile) without removing CSV-era ones yet | `.obsidian/snippets/kb.css` | M | Yes | No (verify in app) |
| 7 | **[Blocked on Bridge]** Rewrite the Finances drill-down + Home finance card to read the wnab snapshot JSON instead of the CSV; add a `loadSnapshot` helper alongside `loadLatest` in `finance-helpers` | `00 Command Center/Finances.md`, `00 Command Center/Home.md`, `tools/finance-helpers.md` | L | Yes (git) | No (verify in app) |
| 8 | **[Blocked on Bridge / PRD-wnab-Electron-Launch]** Remove the dead `http://localhost:4179/` link + `wnab.command` launcher block from `Finances.md`; replace with the Electron/`wnab://` launch per the Bridge | `00 Command Center/Finances.md` | S | Yes | No |
| 9 | Decide CSV view fate: keep CSV charts as a collapsed "spend history" section or fully retire once the snapshot overview lands (Bridge open question — recommend: collapse, don't delete, so the history survives) | `00 Command Center/Finances.md` | M | Yes (git) | No (verify in app) |
| 10 | Archive a copy of the current `Home.md`/`Finances.md` before any structural rewrite and present a before/after for explicit OK (PRD's destructive-overwrite guard) | `journal/` or `archive/` snapshot | S | Yes | Yes (sign-off) |
| 11 | Full in-app render pass: open Home + Finances in Obsidian, confirm every Bases embed and Datacore card renders, theme tokens hold in light + dark, empty states read calm | (no file changes) | S | Yes | Yes (in-app, both themes) |
| 12 | (Later) Tighten visual hierarchy per the PRD: give Knowledge Work + Finances more weight, Tasks/dates supportive — CSS-only token/spacing pass, no layout rewrite | `.obsidian/snippets/kb.css` | M | Yes | No (verify in app) |

Order rationale: Tasks 1-6 are unblocked, agent-automatable, low-risk vault edits that finish Phase 1 (fill the empty workbench view, complete Direction, lock the engine decision, ready the CSS for the swap). Tasks 7-9 are the Phase-2 finance handoff and **must wait on the Bridge** delivering the snapshot schema + export. Tasks 10-11 are the safety/verification gates. Task 12 is the PRD's "later" polish.

## Readiness verdict

**Phase 1 is ~80% done and the remainder is ready to execute now.** The command center exists, is derived, and is styled; the heavy lifting (kb.css component system, four `.base` views, Datacore cards, shared CSV loader, Home migration) is already on disk and verifiable. What remains in Phase 1 is small, reversible, agent-automatable cleanup: create the missing `workbench/` folder, complete the six-goal Direction set, give empty views a calm empty-state, and formally lock the Datacore decision. None of this needs Wedge's hands except the final in-app render check.

**Phase 2 (finances) is blocked on the wnab Bridge and should not start here.** The numberless framing already exists; only the data source must change from CSV to the wnab snapshot, and that snapshot's schema + export are owned by [[PRDs/PRD-wnab-Obsidian-Bridge]]. This plan stops at the seam: it readies the CSS (Task 6) and stages the rewrite/retirement tasks (7-9) so they can execute the moment the Bridge lands. The clean division — Bridge owns the finance-data half, this plan owns the knowledge/direction half plus the calm card framing — holds. Proceed with Tasks 1-6 immediately; gate 7-9 behind the Bridge.
