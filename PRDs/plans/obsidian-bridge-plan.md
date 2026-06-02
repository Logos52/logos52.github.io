---
title: "Implementation Plan — PRD — Obsidian↔wnab data bridge"
type: implementation-plan
status: draft
created: 2026-05-30
source_prd: "[[PRDs/PRD-wnab-Obsidian-Bridge]]"
tags:
  - implementation-plan
  - wnab
  - obsidian
  - integration
  - snapshot-schema
---

# Implementation Plan — PRD — Obsidian↔wnab data bridge

This is the linchpin work. The snapshot schema defined here is the contract that
[[PRDs/PRD-wnab-AI-Layer]] consumes verbatim — Cowork reads the same file. So the schema is
designed once, versioned, and shaped as the **superset** both readers need: the read-only
overview takes a slice, the AI layer takes the rest. Everything downstream of this — the
overview rewrite, the AI auto-assign prototype — assumes the shape settles here and does not
churn.

The mechanism is deliberately dull: wnab writes one JSON file to a known local path; Obsidian
reads it. No server, no sync, no write-back. That dullness is the feature — it survives upstream
merges and keeps the data on-device.

## Current state

**Done**

- The CSV-spend dashboard exists and renders. `00 Command Center/Finances.md` is a `datacorejsx`
  view that loads the latest card CSV and draws spend-by-category, monthly, weekday, YTD,
  top-merchants, and a recent-transactions table. (Evidence: `00 Command Center/Finances.md`
  lines 22–216.)
- The CSV loader is shared, single-source. `tools/finance-helpers.md` exports
  `{ parseCSV, loadLatest }`; `loadLatest` scans `~/Documents/Finances/` for the card's CSV export,
  picks newest by mtime, parses, maps `_amount`/`_date`. (Evidence:
  `tools/finance-helpers.md` lines 41–66; `folder = path.join(os.homedir(), 'Documents',
  'Finances')` at line 45; the card-export filename glob at line 50.)
- The dead localhost launcher block exists and is hardcoded. `Finances.md` line 108 renders
  `<a href="http://localhost:4179/">Open WNAB to budget →</a>` with a "double-click
  wnab.command (~/Documents/Finances/wnab/serve/)" hint at line 109. (Evidence: `00 Command
  Center/Finances.md` lines 107–110.)
- Home.md ALSO reads the same CSV. The numberless finance card on `Home.md` imports the same
  `loadLatest` helper and renders a sparkline + directional arrow. This is a second consumer the
  PRD does not name but the retirement must account for. (Evidence: `00 Command Center/Home.md`
  lines 109–161, `dc.require(dc.headerLink("tools/finance-helpers.md", "Helpers"))` at line 111.)
- The data primitives the snapshot needs already exist in the engine, unmodified by wnab:
  - Per-category assigned / activity / available + month totals: `getBudgetMonth(month)` →
    `api/budget-month` handler returns `{ month, incomeAvailable, lastMonthOverspent,
    forNextMonth, totalBudgeted, toBudget, fromLastMonth, totalIncome, totalSpent, totalBalance,
    categoryGroups[…].categories[…].{ budgeted, spent, balance, carryover } }`. (Evidence:
    `packages/loot-core/src/server/api.ts` lines 382–432; `packages/api/methods.ts` lines 90–96.)
  - Account balances: `getAccountBalance(id, cutoff?)` → `api/account-balance`; account list via
    `getAccounts()`. (Evidence: `packages/api/methods.ts` lines 165–205.)
  - Upcoming bills: `getSchedules()` → `api/schedules-get`. (Evidence: `packages/api/methods.ts`
    lines 356–357.)
  - Transaction history: `getTransactions(accountId, startDate, endDate)`. (Evidence:
    `packages/api/methods.ts` lines 146–152.)
  - Age of Money: pure FIFO functions `calculateAgeOfMoney` / `calculateAverageAge` over
    income/expense transaction queries — reusable outside the report UI. (Evidence:
    `packages/desktop-client/src/components/reports/spreadsheets/age-of-money-spreadsheet.ts`
    lines 74–150.)
- An in-app export surface already exists as a model to copy. `settings/Export.tsx` calls
  `send('export-budget')` then `window.Actual.saveFile(...)`. The snapshot export should follow
  this button pattern but write to a fixed path instead of opening a save dialog. (Evidence:
  `packages/desktop-client/src/components/settings/Export.tsx` lines 22–43.)
- The Electron `before-quit` hook exists, giving a clean seam for an on-close export. (Evidence:
  `packages/desktop-electron/index.ts` line 516.)
- `kb.css` already carries a full Command Center component system (cards, chips, bars, finance
  grids) the rewritten overview can reuse without new styling. (Evidence:
  `.obsidian/snippets/kb.css`, 12.3 KB; finance/card/bar classes per vault recon §4.)

**In progress**

- Nothing on this bridge specifically. The adjacent Electron work (data dir → `~/Documents/
  Finances/wnab/`, arm64, Dock launch) is documented but NOT applied — the electron `index.ts`
  still uses upstream defaults `app.getPath('documents')` / `app.getPath('userData')`. (Evidence:
  `packages/desktop-electron/index.ts` non-test `else` block lines 60–66; `docs/ELECTRON-BUILD.md`
  §1b describes the unapplied patch.) That work belongs to [[PRDs/PRD-wnab-Electron-Launch]], but
  the snapshot's output directory and this PRD's "remove the localhost block" line depend on it.

**Not started**

- No snapshot JSON schema is defined anywhere. (No file matches; the contract does not yet exist.)
- No export action writes a snapshot to `~/Documents/Finances/wnab/`. The only export is the
  zip-to-save-dialog `export-budget`. (Evidence: `packages/desktop-client/src/components/settings/
  Export.tsx`; no `snapshot` handler in `packages/loot-core/src/server`.)
- `Finances.md` does not read any snapshot; it reads CSV only. (Evidence: `00 Command Center/
  Finances.md` line 24.)
- The CSV path is not retired. (Evidence: `tools/finance-helpers.md` still the only loader,
  imported by both views.)

## Dependencies & shared contracts

- **The snapshot schema IS the shared contract** with [[PRDs/PRD-wnab-AI-Layer]]. The AI layer's
  open questions ("must carry upcoming bills + history for the suggestion to be good — does the
  bridge export enough?") are answered HERE by making the schema a superset. The AI layer's plan
  (sequencing step 1) is literally "lock the snapshot schema with the Obsidian-Bridge PRD." So
  this plan owns the schema; the AI plan consumes it read-only.
- **Output directory depends on the Electron data-dir decision.** The PRD targets `~/Documents/
  Finances/wnab/`. The Electron runbook puts the budget *data* under `~/Documents/Finances/wnab/
  {documents,data}/`. The snapshot should write to a sibling, e.g. `~/Documents/Finances/wnab/
  snapshot.json` (or a `wnab/exports/` subfolder) so it lives next to the budget but is not
  confused with engine data. Obsidian's loader must point at the same literal path. (Cross-PRD:
  [[PRDs/PRD-wnab-Electron-Launch]], `docs/ELECTRON-BUILD.md` §1b.)
- **Localhost-block removal overlaps Electron-Launch Phase 4.** `docs/ELECTRON-BUILD.md` §4
  already lists "remove the dead `http://localhost:4179/` link + the wnab.command hint" from
  `Finances.md`. This PRD names the same cleanup. Do it once; don't double-edit. Whoever lands
  first removes it; the other treats it as done.
- **The CSV loader is shared by two views.** Retiring `loadLatest` (or the card-export glob)
  touches both `Finances.md` AND the `Home.md` finance card via `tools/finance-helpers.md`. A new
  snapshot loader should live in the same helpers file (single source of truth) so both views
  migrate together.
- **Engine stays unmolested.** All the data the snapshot needs is reachable through existing
  `@actual-app/api` / loot-core handlers and the pure AoM functions. The export should be a new
  thin handler that *reads* these, not a change to any engine query. Keeps the upstream seam clean
  (per wnab recon §5: no engine-package divergence). (Cross-PRD: [[PRDs/PRD-wnab-Upstream-Merge]].)
- **Datacore runtime.** The Obsidian reader runs Node `fs` inside `datacorejsx` at render time
  (same mechanism the CSV loader uses today), so reading a local JSON file needs no new plumbing —
  `JSON.parse(fs.readFileSync(...))` replaces `parseCSV`.

## Risks

- **Schema churn breaks two consumers at once.** If the schema changes after the AI layer builds
  on it, both the overview and Cowork break. Mitigation: ship a `schemaVersion` field from v1;
  treat additive fields as non-breaking, renames/removals as a version bump; keep the reader
  tolerant of unknown fields and defensive about missing ones.
- **Age of Money is a desktop-client report function, not an engine primitive.** Reusing
  `calculateAgeOfMoney` from an export means either (a) computing AoM in the desktop-client export
  path where those functions live, or (b) lifting the pure functions into `loot-core/shared` so a
  loot-core handler can call them. Option (a) is lower-risk for v1 (no engine edit) but ties
  export to the renderer; option (b) is cleaner but is an engine change. Recommend (a) for v1.
- **Staleness.** A manual/on-close export means the overview can lag the real budget. The
  dashboard must stamp and surface the export timestamp so a stale snapshot looks stale, not
  authoritative. Mitigation: include `generatedAt` in the schema; render "as of <time>" and grey
  it when older than, say, 24h.
- **Path coupling to unfinished Electron work.** If the Electron data-dir patch lands at a
  different path than assumed, the loader points at nothing. Mitigation: make the snapshot path a
  single constant in both the exporter and the helper; verify against the real packaged app
  before retiring CSV.
- **Empty/edge budgets.** Income-only groups, hidden categories, carryover, negative To-Assign,
  insufficient-data AoM. The export must serialize these without throwing; the reader must render
  them calmly (a negative To-Assign is a coaching moment, not a crash).
- **Money is integer-cents in the engine.** loot-core amounts are integer minor units. The schema
  must declare the unit explicitly so the reader does not divide by 100 twice (the CSV path used
  float dollars; this is a behavioral change).
- **Retiring CSV loses spend-history charts.** The current dashboard's value (weekday/merchant/YTD
  spend) is richer than a budget snapshot. Fully deleting it discards that view. Mitigation: see
  open-questions resolution — keep a thin history slice in the snapshot, archive the CSV view.

## Open questions — resolved

- **Export cadence: manual button, auto-on-close, or scheduled?**
  Resolved: **both a manual button AND auto-on-close, no scheduler.** Add an "Export wnab
  snapshot" button in Settings (mirrors `Export.tsx`) for on-demand freshness, and fire the same
  export from the Electron `before-quit` hook so closing the app always leaves a current snapshot.
  Skip a cron/scheduled job for v1 — it adds a background process to a deliberately serverless app
  for marginal benefit. The button covers "I want it fresh now"; on-close covers "I forgot." This
  also dovetails with any future auto-backup routine without committing to one now.

- **Minimum fields the overview needs vs the fuller set the AI layer wants — design for the
  superset?**
  Resolved: **yes, design the superset, versioned, in one schema.** The overview reads a slice
  (To-Assign, per-category assigned/activity/available, recent activity, age of money). The AI
  layer additionally needs upcoming bills and transaction history to reason well (its own open
  question). Designing twice guarantees drift; designing once with `schemaVersion` is the whole
  point of this PRD being the linchpin. Proposed v1 shape:

  ```jsonc
  {
    "schemaVersion": 1,
    "generatedAt": "2026-05-30T18:00:00-04:00",
    "currency": "USD",
    "amountUnit": "cents",            // integer minor units, as loot-core stores them
    "budgetName": "…",
    "month": "2026-05",
    "summary": {                       // straight from getBudgetMonth(month)
      "toBudget": 0,                   // "To Assign"
      "totalIncome": 0,
      "totalBudgeted": 0,
      "totalSpent": 0,
      "totalBalance": 0,
      "fromLastMonth": 0,
      "forNextMonth": 0,
      "incomeAvailable": 0,
      "lastMonthOverspent": 0
    },
    "categoryGroups": [
      { "id": "…", "name": "…", "isIncome": false,
        "budgeted": 0, "spent": 0, "balance": 0,
        "categories": [
          { "id": "…", "name": "…",
            "assigned": 0,             // budgeted
            "activity": 0,             // spent
            "available": 0,            // balance
            "carryover": false }
        ] }
    ],
    "accounts": [
      { "id": "…", "name": "…", "offbudget": false, "closed": false, "balance": 0 }
    ],
    "ageOfMoney": { "currentAge": 0, "trend": "stable", "insufficientData": false },
    "upcomingBills": [                 // AI-layer field; from getSchedules()
      { "id": "…", "name": "…", "nextDate": "2026-06-01", "amount": 0,
        "frequency": "monthly", "completed": false }
    ],
    "recentTransactions": [            // overview "recent activity" + AI history
      { "id": "…", "date": "2026-05-29", "account": "…", "payee": "…",
        "category": "…", "amount": 0, "notes": "" }
    ]
  }
  ```
  Rationale: `summary`, `categoryGroups`, `accounts`, `ageOfMoney`, `recentTransactions` serve the
  overview today; `upcomingBills` + the full `recentTransactions` window serve the AI layer. The
  overview simply ignores fields it does not render. `assigned/activity/available` are the
  human-readable aliases for loot-core's `budgeted/spent/balance` so neither reader has to learn
  engine jargon.

- **Keep any historical CSV view, or fully retire it?**
  Resolved: **retire CSV as a live source; archive the spend view; carry a thin spend slice in
  the snapshot.** The PRD's success criterion is a single source of truth, so the live dashboard
  must stop reading CSV. But the spend-pattern charts (weekday, merchant, YTD) have standalone
  value and reading them from `recentTransactions` (or a future `history` block) in the snapshot
  preserves them without the parallel feed. Concretely: (1) rewrite `Finances.md` to read the
  snapshot for budget state; (2) keep the spend charts but source them from snapshot transactions,
  not CSV; (3) move the CSV loader out of the live path — either delete the card-export branch
  from `tools/finance-helpers.md` or fence it behind an explicitly-archived note (e.g.
  `archive/Finances-CSV.md`) for historical reference. Do not keep CSV wired into Home/Finances.

## Task breakdown

| # | Task | Touches | Effort | Reversible | Needs Wedge |
|---|------|---------|--------|------------|-------------|
| 1 | Write the snapshot schema spec (the v1 JSON above) into a versioned doc the AI-layer plan can cite; lock field names (`assigned/activity/available`), `amountUnit: cents`, `schemaVersion`, `generatedAt`. | new `docs/SNAPSHOT-SCHEMA.md` in wnab repo (or a vault note both PRDs link) | S | Yes | No |
| 2 | Add a loot-core/desktop-client export routine that gathers `getBudgetMonth(currentMonth)`, `getAccounts()`+balances, `getSchedules()`, recent `getTransactions`, and AoM (via existing pure functions), assembles the v1 object, and writes JSON to the snapshot path. Follow the `Export.tsx` `send(...)` pattern but write to a fixed path (Node fs) instead of `saveFile`. | new handler in `packages/loot-core/src/server/` (e.g. `snapshot/app.ts`) using `platform/server/fs`; or a desktop-client export module if AoM stays in renderer | M | Yes | No (agent can build/typecheck) |
| 3 | Wire the snapshot path as one shared constant; default `~/Documents/Finances/wnab/snapshot.json`, aligned with the Electron data-dir decision. | the new handler/module; cross-check `docs/ELECTRON-BUILD.md` §1b | S | Yes | No |
| 4 | Add a Settings "Export wnab snapshot" button that calls the export routine and reports success/error (mirror `ExportBudget`). | `packages/desktop-client/src/components/settings/Export.tsx` (+ `settings/index.tsx` if a new Setting block) | S | Yes | No |
| 5 | Fire the same export from Electron `before-quit` so closing always leaves a fresh snapshot (skip the scheduler). | `packages/desktop-electron/index.ts` (`before-quit` at line 516) + an IPC/handler hop | M | Yes | No (build only) |
| 6 | Build the app and produce one real snapshot from Wedge's actual budget; eyeball the JSON against the schema; iterate field shapes BEFORE downstream work depends on it. | packaged wnab app on Mac; output `~/Documents/Finances/wnab/snapshot.json` | M | Yes | **Yes** (Xcode/Electron build, app run, real budget) |
| 7 | Add a `loadSnapshot()` to `tools/finance-helpers.md` (`JSON.parse(fs.readFileSync(snapshotPath))`, tolerant of missing/unknown fields), keeping the file the single source of truth for both views. | `tools/finance-helpers.md` | S | Yes | No |
| 8 | Rewrite `Finances.md` datacorejsx into a read-only overview: To-Assign banner, per-category assigned/activity/available bars, recent activity, age of money, "as of <generatedAt>" stamp; reuse existing `kb.css` finance/card/bar classes. | `00 Command Center/Finances.md`; styling already in `.obsidian/snippets/kb.css` | L | Yes | No (renders in Obsidian; Wedge confirms visually) |
| 9 | Re-source the spend-pattern charts (weekday/merchant/YTD) from snapshot `recentTransactions` instead of CSV, OR move them to an archived note; keep the single-source rule. | `00 Command Center/Finances.md` (+ optional `archive/Finances-CSV.md`) | M | Yes | No |
| 10 | Repoint the `Home.md` finance card to the snapshot loader (it currently shares the CSV `loadLatest`). | `00 Command Center/Home.md` lines 109–161 | S | Yes | No |
| 11 | Remove the dead `http://localhost:4179/` link + the wnab.command hint from `Finances.md` (coordinate with Electron-Launch §4 so it's removed once). | `00 Command Center/Finances.md` lines 107–110 | S | Yes | No |
| 12 | Retire the CSV path: drop the card-export branch from `tools/finance-helpers.md` (or fence it behind the archived note) once both views read the snapshot. | `tools/finance-helpers.md` | S | Yes | No |
| 13 | Verify against a real budget: snapshot freshness on button + on-close, overview renders, stale-stamp behaves, no parallel CSV source remains. Confirm the schema is what the AI-layer plan will consume. | end-to-end: packaged app + vault render | M | Yes | **Yes** (run app, close app, open Obsidian) |

## Readiness verdict

**Ready to start — with one ordering rule and one cross-PRD coordination.**

The data is all reachable through existing engine APIs and the pure Age-of-Money functions; the
engine needs no changes; the Obsidian side reuses the exact Node-`fs` render-time mechanism the
CSV loader already proves works. The single hard prerequisite is **sequencing**: lock the schema
(task 1) and produce one real snapshot (task 6) before anything downstream — the overview rewrite
and the entire AI layer — builds on the shape. Get the JSON right once.

Two coordination notes: (a) the snapshot output path is tied to the unfinished Electron data-dir
decision in [[PRDs/PRD-wnab-Electron-Launch]] — agree the literal path before wiring the loader;
(b) the localhost-block removal is shared with that same PRD's Phase 4 — do it once. The two tasks
that need Wedge's Mac (build/run/close the packaged app, tasks 6 and 13) are the only non-agent
steps; everything else — schema, handler, settings button, helper, both view rewrites, CSV
retirement — is automatable. All tasks are reversible (additive code, view edits, no destructive
data migration).
