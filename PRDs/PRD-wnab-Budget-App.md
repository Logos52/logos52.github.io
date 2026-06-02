---
title: "wnab (Wedge Needs A Budget) — Build PRD"
description: "Custom YNAB-like budgeting app built on Actual Budget's loot-core engine. Standalone web app; Obsidian keeps a read-only overview. Supersedes the Path-B in-Obsidian budget layer."
type: prd
status: locked
created: 2026-05-29
updated: 2026-05-29
supersedes:
  - "[[decisions/2026-05-27-budget-path-b-not-real-software]]"
amends:
  - "[[PRDs/PRD-Obsidian-LifeOS-Command-Center]] (finance layer rescoped to wnab overview)"
tags:
  - prd
  - budgeting
  - finances
  - wnab
  - actual-budget
  - ynab
  - project
---

# PRD — wnab (Wedge Needs A Budget)

> Custom YNAB-like UI built on Actual Budget's `loot-core` engine. Standalone app; Obsidian keeps a read-only overview.

> **Locked 2026-05-29.** Signed off by Wedge. Re-open only on an explicit decision change.

## 1. Problem

I want **good budgeting software that I own and actually use** — that's the priority, in itself. Finances got tighter after moving in together and carrying most of the shared costs, which is what surfaced the need, but the goal is the tool and the habit, not an emergency cash-flow fix. I can wait for it; I don't need a stopgap.

I've tried off-the-shelf budgeting apps and never stuck. Mint is dead; Monarch/Copilot/Rocket Money are polished *trackers*, not envelope budgeting; YNAB has the right method but it's a subscription I don't own with UX I don't enjoy living in. Actual Budget is open-source and does true envelope budgeting, but its UI is utilitarian enough that I won't sit in it daily. **Ownership is the motivation hook** — building and owning wnab is the mechanism for the behavior change, not a detour from it.

**Why this supersedes Path B:** On 2026-05-27 I scoped budgeting as an in-Obsidian layer and ruled out real software — mainly because I wasn't sure a custom app was *feasible*, not because I didn't want one. It's feasible (custom UI on Actual's proven engine), so that hedge dissolves. See [[decisions/2026-05-27-budget-path-b-not-real-software]] (superseded).

## 2. Success criteria

1. **I actually budget with it** — real money assigned, reconciled, sustained week over week. The win is that I keep using it (where every prior app failed).
2. **Engine reuse** — runs on Actual's `loot-core`; no reimplementation of envelope logic, reconciliation, or sync. Our code isolated so upstream updates are dependency bumps, not merges. *(Contingent on the B1 spike — see §6.)*
3. **UX I enjoy** — I choose wnab over vanilla Actual for budgeting sessions, unprompted, for 2+ weeks.
4. **Hybrid transactions work** — QFX/CSV import (the card) + SimpleFIN auto-sync (Checking/Bank) reconcile cleanly together.
5. **Obsidian overview is live** — a read-only finance glance in the Command Center reads wnab's data (numberless front card + drill-down), retiring the old CSV-spend dashboard.
6. **Data is mine and private** — self-hosted, exportable, no lock-in; financial data never in the (public) repo.

## 3. The adoption risk (named, not hand-waved)

The pattern that killed **cos** and shaped the Path-B decision: *a separate surface outside Obsidian doesn't get visited daily, so it dies.* wnab is structurally another external surface, so this risk is real and designed against — not assumed away.

**Mitigation (the synthesis this PRD is built on):** split the two jobs by visit-type.

- **Daily glance → stays in Obsidian.** The Command Center finance card is where passive, frequent attention already lives. wnab feeds it.
- **Deliberate budgeting → wnab.** Budgeting is a sit-down, intentional act (assign dollars, reconcile, cover overspending) — a *deliberate-visit* tool, a different job than a passive dashboard. cos failed as a passive surface competing with Obsidian for glances; wnab isn't competing for glances, it's the place I go on purpose to do the work.

**Tripwire:** if, once wnab has a usable budget loop, I'm not actually opening it to reconcile, the mitigation failed — stop and rethink before adding scope.

## 4. Scope

### In scope
- **New frontend built against `loot-core`**, consuming Actual's published packages as upstream dependencies. Not a divergent hard-fork; not an engine rewrite. (Best-practice / low-bug path; verified by the B1 spike.)
- **YNAB-like design language**: "to be budgeted" / assign-every-dollar, category tables, age-of-money, cover-overspending.
- **Web-first**; desktop (Electron) packaging later.
- **Manual entry + monthly file import** (QFX/CSV), riding on Actual's native import-matching (no bank auto-sync — see §5).
- **Seed from existing data**: reuse the card's exports + the per-category averages already computed in the vault to pre-load categories and starting targets.
- **Coaching layer** — the mindset-teaching that sets wnab apart from stock Actual: onboarding to the budgeting principles + behavioral nudges (give-every-dollar-a-job flow, age-of-money prominence, roll-with-the-punches reallocation). All-original copy; public repo (see Decisions).
- **Obsidian read-only overview** that reads wnab data; **old CSV-spend dashboard retired into it.**
- PRD note lives in vault `PRDs/`; **code lives in its own public git repo** (`wnab`, at `/Users/n1/Projects/wnab`).

### Out of scope
- Reimplementing the budgeting engine, sync, or reconciliation — reuse `loot-core`.
- Investment/net-worth dashboards, bill negotiation, subscription cancellation.
- Multi-user / household sharing.
- Native mobile app (responsive web is enough at first).
- A vanilla-Actual interim bridge — decided to **wait for wnab** (see Decisions).

## 5. Constraints, security & data

- **Engine integration = Path 2: fork/reskin `@actual-app/web` (decided 2026-05-29).** Recon found `loot-core` is **not** published to npm (monorepo-internal), and `@actual-app/api` is a **Node-side** package — unusable with no server. `@actual-app/web` runs the *entire engine in the browser* via SQLite-on-WASM (data in browser-local storage), so it's static files that work on GitHub Pages or locally with **no server**. We fork it and reskin the UI; the engine stays Actual's. This fits the no-server constraint and keeps data on-device. Desktop (Electron) later comes nearly free (Actual already ships it).
- **Security model = Option A: code-only public repo; data + secrets external.**
  - wnab repo is **public** and contains **code only**.
  - Financial DB + SimpleFIN token live in `~/Documents/Finances/wnab/` (outside the repo, the same private root as the card's exports; independently backed up).
  - Secrets via `.env` in the external dir; `.gitignore` defensively blocks data/secret patterns; never commit financial data.
  - Actual sync server runs with **end-to-end encryption** (password-based) as defense-in-depth.
- **No bank auto-sync — manual entry + monthly file import.** SimpleFIN requires Actual's server component, and we're running **no server** (only static hosting / local). $1.50/mo also judged not worth it. So: enter transactions by hand as they happen, import the monthly statement file later. SimpleFIN is *deferred*, not impossible — revisit only if a server ever gets stood up (home box, container, or Actual's free hosted sync). Reversible.
- **The "manual now, resolve on import later" behavior is native to Actual — don't rebuild it.** Per Actual's docs: a manually-entered transaction is **matched on later file import** by date + amount + similar payee, and *not* duplicated. Manual entries are **uncleared** (pending) until matched, then **cleared**. Reconciliation compares to statement balance; manual **merge** is the backstop. wnab's job is the *UX* of this (fast quick-add, clear pending/cleared states), not the matching engine.
- **Account map (Wedge's three primary institutions):**
  - **Card** — *no aggregator support anywhere.* Manual **QFX** export from Wallet (imports cleaner than CSV), statement-by-statement. Always manual regardless of any sync decision.
  - **Checking** — manual QFX/CSV for now (auto-sync would need a server).
  - **Bank** — manual QFX/CSV for now.
- **Backup = periodic export.** No sync server means no off-machine copy; browser-local data isn't backed up by git either. Export the budget to a file on a regular cadence (store in `~/Documents/Finances/wnab/`).
- **Anti-goal:** wnab must not become a substitute for budgeting. Building is the motivation; the success metric is usage, not lines of code.

## 6. Plan (rough shape, not a schedule)

No gates, no rigid tracks — a reversible guide, reorder freely. Time: this is the **primary active project**; work it continuously and measure by progress, not estimates.

**B1 — repo + fork-and-build spike (done in part / in progress).**
- ✅ Repo `wnab` scaffolded at `/Users/n1/Projects/wnab`; external data dir at `~/Documents/Finances/wnab/`; engine recon done (→ Path 2).
- Next: **fork `@actual-app/web`, get it building and running locally** (no server), confirm budgeting works browser-local, and **prove I can restyle one core surface** — the real test of the reskin approach.

**The main build — YNAB-like core surfaces.**
- First usable surface = the **beginner-core YNAB loop**: one account → assign every dollar → reconcile. Then transaction register → reports. Ship surface by surface; each usable as it lands.

**Transactions.**
- Manual quick-add + monthly QFX import (the card via QFX), relying on Actual's native date+amount+payee matching and cleared/uncleared states. Seed categories/targets from existing data. SimpleFIN deferred (needs a server).

**Obsidian overview.**
- Read-only finance card + drill-down in the Command Center reading wnab data; retire the old CSV-spend dashboard into it. Implements the adoption-risk mitigation (the daily glance).

**Later, if wanted — desktop packaging (Electron).**

## 7. Open questions

1. ~~Upstream integration mechanism~~ — **resolved: Path 2, fork/reskin `@actual-app/web`** (loot-core not on npm; api is Node-only; we have no server).
2. **Hosting** — GitHub Pages (static) vs. local-only run vs. Electron desktop. App is static + browser-local either way; data stays on-device. Pick once the fork builds.
3. **Obsidian ↔ wnab data bridge** — how the overview reads wnab data. With no server and browser-local data, likely an **export-to-file** that lands in `~/Documents/Finances/wnab/` and the vault reads it. Linchpin of the daily-glance mitigation; confirm during build.
4. **Design reference depth** — "YNAB-like": borrow layout/flows directly or YNAB-method + my own visual language?
5. ~~Per-bank SimpleFIN credential model~~ — **moot for now;** SimpleFIN deferred (no server). Revisit only if a sync server is ever stood up.

## 8. Decisions captured (2026-05-29 session)

- **wnab is the budgeting system, now.** Supersedes Path B ([[decisions/2026-05-27-budget-path-b-not-real-software]]). The *software* is the priority; an immediate finances-handle is not — waiting is fine.
- **Reuse Actual's engine; do not reimplement it.** Best-practice, low-bug path; effort goes into the UI.
- **Engine integration = Path 2 (fork `@actual-app/web`).** Decided after recon: loot-core isn't on npm, `@actual-app/api` is Node-only, and we have no server — so the static, browser-local web client is the only fit. Engine runs in-browser (WASM); data on-device.
- **Fork structure = engine-vs-view seam.** Ambition is a full YNAB-flow clone that *teaches the mindset*, so the view layer is rebuilt, not reskinned. Track upstream for the engine (`loot-core`, sync/data); own and diverge the view layer (stop merging Actual's UI). Plugin system investigated and rejected (loader-only service worker, not ready, functionality-focused).
- **Coaching layer + IP: public repo, all-original copy.** The YNAB *mechanics* already live in Actual's engine; the missing piece is the coaching layer (onboarding to the rules, nudges, age-of-money prominence, roll-with-the-punches framing). Implement the method/concept freely (ideas + methods aren't protected); author all teaching copy in Wedge's own voice/labels; don't reproduce YNAB's exact wording or screens. Personal use means trademark/trade-dress doesn't apply anyway — this keeps it clean even if ever published. (Not legal advice.)
- **Standalone app, not fused with any project.** (`cos` is retired anyway — see profile-drift log.)
- **Platform:** web-first, desktop (Electron) later.
- **Transactions:** manual quick-add + monthly QFX/CSV import, on Actual's native matching (date+amount+payee, cleared/uncleared). wnab builds the *UX*, not the matching engine.
- **Design north star:** YNAB-like; first usable surface = beginner-core loop.
- **No gates, stay flexible.** Plan is a reversible guide; time measured by progress, not estimates.
- **Wait for wnab — no vanilla-Actual bridge.** The software is the goal; finances can wait.
- **Security = Option A.** Public code-only repo; financial data + secrets in `~/Documents/Finances/wnab/`; Actual sync E2E-encrypted.
- **SimpleFIN deferred (no auto-sync).** It needs a server we won't run, and $1.50/mo isn't worth it. Manual entry + monthly file import instead. Reversible if a server ever appears.
- **Backup = periodic export** (browser-local data has no other copy); export file lands in `~/Documents/Finances/wnab/`.
- **Obsidian = read-only overview of wnab; wnab = the budgeting engine.** The deliberate-visit / daily-glance split mitigates the cos failure mode. Old CSV-spend dashboard retires into this overview. Rescopes the LifeOS PRD finance layer.
- **PRD in vault; code in its own repo.**
