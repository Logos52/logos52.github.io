---
title: "wnab — direction decided (session log)"
type: journal
created: 2026-05-29
updated: 2026-05-29
tags:
  - journal
  - wnab
  - decisions
links:
  - "[[PRDs/PRD-wnab-Budget-App]]"
  - "[[decisions/2026-05-27-budget-path-b-not-real-software]]"
---

# wnab — direction decided (2026-05-29)

## The arc

Started at "which budgeting app should I use/build." Surfaced a direct conflict with the 2026-05-27 **Path B** decision (budget = in-Obsidian layer, real software ruled out) and the **locked LifeOS PRD**. Resolved it: that ruling-out was a *feasibility hedge*, finances are now a higher priority (combined household costs), and **ownership is the motivation hook** (off-the-shelf apps never stuck). So Path B is superseded and **wnab** — a full YNAB-flow clone on Actual's engine — is the new direction.

## Decisions

- **wnab = full YNAB-flow clone that teaches the *mindset*** (not just a tracker, not just a reskin). The budgeting *mechanics* already live in Actual's engine; the missing piece is the **coaching layer** (onboarding to the rules, nudges, age-of-money, roll-with-the-punches) — which is frontend/behavioral design we author.
- **Engine = reuse Actual's `loot-core`** (don't reimplement). 
- **Path 2: fork `@actual-app/web`** — it runs the whole engine in-browser (SQLite/WASM), so it's static + serverless, fitting "no server, only GitHub Pages." (`@actual-app/api` is Node-only → out; loot-core isn't on npm.)
- **Fork structure = engine-vs-view seam** — track upstream for the engine, own/diverge the view layer.
- **Plugin system rejected** — investigated; it's a loader service worker, not ready, functionality-focused. Not a UI seam.
- **No SimpleFIN / no auto-sync** — needs a server, not worth $1.50/mo. Manual entry + monthly QFX import, riding on Actual's *native* import-matching (date+amount+payee, cleared/uncleared). Don't rebuild that — it's already there.
- **Accounts:** manual QFX/CSV file import for now (bank specifics kept private, in the finances vault).
- **Security = Option A:** public, code-only repo; data + secrets + backups in an external, gitignored private location. Browser-local data → backup = periodic export.
- **IP: public repo, all-original coaching copy** — implement method/concept freely; write teaching in own voice/labels; don't copy YNAB's exact wording/screens. Personal use = trademark/trade-dress doesn't apply anyway.
- **Obsidian:** finances page becomes a read-only **overview of wnab**; old CSV-spend dashboard retires into it.
- **Process:** no gates, flexible/reversible plan; measure by progress not estimates.

## Side-findings (cleanup)

- Operating profile is **stale**: lists cos and Hermes as active, but both are retired in the vault. Logged at [[_meta/profile-drift-2026-05-29]].

## Outstanding

- Hands-on build is on Wedge's machine (sandbox time limits): fork → `yarn install` → `yarn start`, then carve the view layer.
- Open: hosting (Pages vs local vs Electron), Obsidian↔wnab data bridge (likely export-to-file), design-reference depth.

## Next move

Follow `wnab/docs/BUILD-AND-CARVE.md`: build the fork, smoke-test envelope budgeting + the wnab theme, then carve the **assign-every-dollar screen** first (where the mindset lives). Screenshot back → iterate theme + layout → then register & reconciliation.

## Build progress — 2026-05-29 (same session)

Forked actualbudget/actual → `~/Projects/wnab-app` (branch `wnab`), running locally, serverless. Shipped & verified live (Claude drives the browser via Claude-in-Chrome — reload/DOM/console — so no manual screenshots):

- **Warm theme v2** — palette-level shift (navy→cream/ink, purple→teal); green/red kept functional.
- **Typography** — Source Serif 4 (text) + Fira Code (numbers) = full vault aesthetic.
- **YNAB columns** — Assigned / Activity / Available.
- **Assign-flow framing** — To Assign / Over-assigned + state-aware coaching nudges (Claude's coaching voice).

Remaining (feature layer, each non-trivial):
- One-click **assign-to-zero** — needs a behavior decision; best path is leveraging Actual's budget templates/automations (auto-assign per category targets), not a naive button.
- First-run **onboarding** modal teaching the rules — sizable new component.
- **Age of Money** on the budget header — it's a feature-flagged *report* computation, not a ready binding; real wiring.

## Build progress — update 2 (same session)

Pivoted theme off cream/ink (vault aesthetic) → **v3 "playful but cool"** after reviewing YNAB + Basecamp refs:
- Cool light-gray page, white cards, deep slate sidebar, **indigo** primary + **coral** pop, **Inter** sans (numbers stay Fira Code mono).
- De-mechanical pass: **Available rendered as colored pills** (green/grey/red), **taller rows** (32→38), rounded summary card.
- AI ideas parked → [[PRDs/wnab-AI-Ideas]] (core motivation: offset budgeting decision fatigue; Cowork as AI layer over exported data; approve-before-execute).
- Verification: Claude drives the browser (Claude-in-Chrome); note — screenshots flaked on a wedged tab, fixed by opening a fresh tab.

Remaining feel/feature work (bigger): Ready-to-Assign top-bar treatment; per-category status text + progress bars; right-side **inspector / auto-assign** panel (ties to the assign-to-zero + AI auto-assign ideas).

## Build progress — update 3 (same session)

"Friendlier / more YNAB" pass landed:
- **White sidebar + indigo active nav** (was dark slate).
- **Nunito** rounded font (replaced Inter) — the friendliness lever.
- **Lighter grid + softer floating cards.**

**Tooling lesson:** editing the theme via `git checkout light.css` + shell-append wedged Vite's HMR (served stale/inconsistent CSS) → needed a full `yarn start` restart to recover. Fix: edit the theme **in place** (clean writes) — verified it hot-reloads cleanly. Cleanup still worth doing: consolidate the wnab theme into one normally-imported file; drop the stray `light.css~`.

9 wnab commits total this session. **Next focused session:** Ready-to-Assign top bar, per-category progress bars + status text, right-side **inspector / auto-assign** panel (ties to AI auto-assign + assign-to-zero decision).

## Build progress — update 4 (same session)

- **Ready-to-Assign banner**: To Assign / Over-assigned number now a filled pill (green positive / red negative) — YNAB's call-to-action box.
- **Auto-assign decision: targets first, AI later.** Enabled Actual's existing targets engine (`goalTemplatesEnabled` + `goalTemplatesUIEnabled` flags → true). Month menu now exposes Apply/Check/Overwrite budget template + Set-to-N-month-average + Copy-last-month. Engine reused, not built.
- Tooling: confirmed reload-screenshot freezes a tab; reliable pattern = fresh tab per capture. Editing theme in place hot-reloads fine.

Next (focused): surface auto-assign as a prominent YNAB-style button near Ready-to-Assign (it's currently in the month ⋮ menu); per-category targets UX; right-side inspector; then the AI-suggested allocation layer (data bridge first).

## End-of-day summary — 2026-05-29

Started the day choosing a budgeting app; ended having **built one**: **wnab**, a custom YNAB-style app forked from Actual Budget (`~/Projects/wnab-app`, branch `wnab`, github.com/Logos52/wnab). Serverless, local-first, private.

**Shipped & verified live (11 commits):** playful-but-cool theme (light/white + indigo + coral, Nunito rounded font, Fira Code numbers), YNAB Assigned/Activity/Available columns, green/grey Available pills, green/red Ready-to-Assign banner, white sidebar w/ indigo active nav, breathing room, state-aware coaching nudges, and **targets-based auto-assign enabled** (Actual's goal-templates engine).

**Decisions today:** supersede Path B (in-Obsidian) → real software; reuse Actual engine, own the view layer; no bank auto-sync (no server) → manual QFX/CSV; public code repo + external private data; theme = playful-but-cool; auto-assign = targets first, AI later. AI direction parked (`PRDs/wnab-AI-Ideas.md`). cos + Hermes confirmed retired (profile stale).

**Next session:** prominent auto-assign button (currently in month ⋮ menu), per-category targets UX, inspector panel, then AI-suggested allocation (data bridge first). Cleanup: consolidate theme into one imported file; drop stray `light.css~`. Recommendation: use it for real first — that usage informs the inspector design.

## Session — 2026-05-29 (folder consolidation + launch model question)

### Done (Cowork)
- **Folder consolidation.** The two-folder layout was an inconsistency: `wnab/docs/BUILD-AND-CARVE.md` told the build to `git clone … wnab-app`, contradicting SPIKE.md's "repo lives at ~/Projects/wnab." Resolved → **one folder `~/Projects/wnab`** (was `wnab-app`), matching the GitHub repo `Logos52/wnab`. The old recon/scaffold `wnab` folder (no git remote) was **deleted** after salvaging its two unique docs (SPIKE.md, BUILD-AND-CARVE.md) into `wnab/docs/`. GitHub repo name unchanged — it was always `wnab`.
- **Defensive `.gitignore`** backstop added to the public repo (root-anchored `.env*`, `/*.qfx`, `/*.ofx`, `/finances*`, `/secrets*`).
- **Claude Code ↔ Cowork handoff convention** written into `wnab/AGENTS.md` (read by both via CLAUDE.md): end sessions clean (commit+push, no stale `index.lock`), decisions → vault journal, code → repo; CC = in-repo execution, Cowork = PRD/review/coherence. Prompted by interrupted CC sessions leaving stale `.git/index.lock` in both wnab and the vault.
- KB committed locally (42 files) and wnab consolidation committed locally — **both unpushed** (sandbox has no git creds; push from machine).

### New open question — how does wnab launch?
The Command Center "Open WNAB to budget" button (`00 Command Center/Finances.md`) is broken: hardcoded `http://localhost:4179/`, which (a) assumes the dev server is already running and (b) points at the wrong port (dev server = 3001). Want **one button that opens the whole program**, and reconsidering whether localhost is worth it. Options surfaced:
- **Electron desktop app (leaning toward).** `packages/desktop-electron/` is already in the fork (Actual's own native distribution). Build once → a real macOS app, one click opens everything, no localhost, no background server, data on-device. Reuse, not reinvent.
- **GitHub Pages / hosted static + PWA install.** Button → real URL; always available, no local process. Caveat: data is browser-local *per device/profile*, and Actual's WASM needs COOP/COEP cross-origin-isolation headers that GitHub Pages can't set (needs a SW shim or a host like Netlify/Cloudflare Pages).
- **Local launcher script (weakest).** A `.command`/app that starts the dev server then opens the browser — papers over the dev-server assumption, still fragile.
- **Cross-cutting constraint:** data location follows the launch method (localhost origin vs Electron vs Pages are 3 different storage buckets). Near-zero real data now → cheap moment to decide. Migration backstop = export/import to the external private data location.
- **Decision: pending Wedge.**

## Session — 2026-05-29 (launch decided + PRD slate)

- **Launch model = Electron desktop app** (decided). Recommendations accepted: data → the external private data location (small `index.ts` patch), arm64-only, Dock icon replaces the dead localhost button (`wnab://` scheme optional). Build can't run in Cowork (macOS/native) → runbook written to `wnab/docs/ELECTRON-BUILD.md` for Claude Code. Electron-launch PRD marked **approved**.
- **Correction logged:** an Obsidian button launcher is *not* impossible — register a `wnab://` URL scheme and a plain markdown link launches the app (no plugin). Earlier "needs Shell Commands plugin" was an overstatement.
- **3.1GB demystified:** it's the dev checkout (node_modules 1.9G + .git 562M), not the product. Actual app source ≈10MB; shipped Electron app ≈150–250MB (mostly Chromium).
- **Four new PRDs drafted** (status draft): Onboarding+Coaching, Obsidian↔wnab Bridge, AI Layer (promotes the ideas doc), Upstream-Merge. Created `PRDs/index.md` MOC. Key dependency: Bridge defines the snapshot schema the AI Layer consumes; Upstream-Merge is independent + soonest-to-start.
