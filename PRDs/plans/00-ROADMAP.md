---
title: "wnab PRDs — implementation roadmap"
type: roadmap
status: draft
created: 2026-05-30
tags:
  - roadmap
  - wnab
  - plan
---

# wnab PRDs — implementation roadmap

Synthesis across the six per-PRD implementation plans. The wnab program splits cleanly along one seam: the **engine half** (Actual's loot-core, kept unmolested) and the **view/vault half** (the reskin, the launch, the coaching layer, and the Obsidian surfaces). Most work concentrates in the view/vault half precisely so the engine seam stays clean for the recurring upstream merge.

Two forces set the order. First, the **divergence tax** — every week wnab diverges from upstream without a documented merge strategy, the eventual conflict cost grows. Second, the **snapshot schema** — a single JSON contract that the Obsidian Bridge owns and the AI Layer and the LifeOS finance cards both consume. The schema must be designed once, before its consumers freeze against it.

## Recommended order

| Rank | PRD | Why now | Readiness |
|---|---|---|---|
| 1 | [[PRDs/PRD-wnab-Upstream-Merge]] | Independent, fully read-only/doc work, and the cheapest it will ever be — the seam is currently zero-conflict and the divergence tax grows weekly. Bank it first. | Ready (solid) — Tasks 1-9 headless; Task 10 (first real merge + packaged verify) wants Wedge's Mac |
| 2 | [[PRDs/PRD-wnab-Electron-Launch]] | Turns wnab into a launchable app and locks the `~/Documents/Finances/wnab/` data path that the Bridge snapshot output depends on. Land the two source patches early so the path stops being theoretical. Rank 2 reflects when its *patches* should land, not a hard gate on rank 3+ — its build sequence (Tasks 6-13) runs in parallel with Bridge schema work and only blocks the one real-snapshot step (see Critical path). | Ready (minor-issues) — patches + vault edit headless; build sequence needs Wedge's Mac + Xcode CLT. Fix two runbook wording caveats before building (see Contradictions) |
| 3 | [[PRDs/PRD-wnab-Obsidian-Bridge]] | The linchpin: it defines the versioned snapshot JSON schema that two downstream consumers read. Nothing downstream can freeze until this settles. Schema lock (Task 1, the standalone `docs/SNAPSHOT-SCHEMA.md`) does NOT depend on the Electron build and can begin as soon as the data-dir path is agreed — only the real-snapshot step (Task 6) waits on the packaged app. | Ready (solid) — most tasks automatable; only build/run of the packaged app needs Wedge |
| 4 | [[PRDs/PRD-wnab-AI-Layer]] | Lowest-code item; authoring (prompt, fixture, output format) can start in parallel today, but real-data validation is gated on the Bridge shipping a real snapshot. Fold its two extended fields into the Bridge schema before the Bridge freezes. | Blocked-but-cheap-to-start (solid) — author now, validate after Bridge export ships |
| 5 | [[PRDs/PRD-wnab-Onboarding-Coaching]] | The product differentiator and view-layer-only. Its only hard dependency is Upstream-Merge (rank 1) tracking the merge surface it adds; it has NO dependency on a launchable Electron app and can run in parallel with Electron-Launch (rank 2) once Upstream-Merge is done. Ranked 5 by author convenience, not by a build gate — its static nudge module is the typed contract the AI Layer later swaps into. | Ready (solid) — Tasks 1-11 headless; Task 12 is a browser smoke pass, no Mac |
| 6 | [[PRDs/PRD-Obsidian-LifeOS-Command-Center]] | Phase 1 (knowledge/direction half) is ~80% done and its remaining cleanup (create `workbench/`, complete Direction goals, lock Datacore) is fully unblocked now — those Phase 1 tasks can run anytime after the vault is stable, in parallel with everything above. Ranked 6 only because Phase 2 (finance cards) is the most downstream consumer, deliberately gated behind the Bridge snapshot; the rank does not hold Phase 1 back. Resolve the `workbench/` folder-location flag first (see Contradictions). | Phase 1 ready (minor-issues); Phase 2 blocked on Bridge |

No plan was flagged `significant-issues`, so none requires a "harden before building" hold. The standard: a plan is held only if a verifier finds an issue that would make its code/logic wrong if executed as written — a `significant-issues` verdict. `minor-issues` (Electron-Launch, LifeOS Phase 1) means a wording, count, or location caveat that an implementer corrects in passing without changing the plan's logic; these are listed in Contradictions & risks and do not warrant a hold. By that standard the two `minor-issues` plans were correctly *not* held back: Electron-Launch's high-severity verifier flag is a documentation wording issue (the runbook's backwards `CSC_LINK` note), not a logic blocker, and LifeOS Phase 1's flag is a folder-location confirmation, not a broken task.

## Critical path

The longest dependency chain runs through the snapshot schema:

1. **Upstream-Merge doc** lands first (independent; protects everything that follows from divergence cost).
2. **Electron-Launch data-dir patch** fixes the literal `~/Documents/Finances/wnab/` path. This is needed only to *agree the path constant* before the schema names it, and to *build the app* before the real snapshot (step 3b). The full Electron build (Electron-Launch Tasks 6-13) is NOT a prerequisite for the schema; see the parallelism note below.
3. **Bridge schema (v1)** is locked — written to a standalone, versioned artifact, **`docs/SNAPSHOT-SCHEMA.md`** (Bridge Task 1), so the AI-Layer and LifeOS can cite a frozen file rather than a JSON block buried in a plan. (3a) The schema and all export code (Bridge Tasks 1-5) need only the agreed data-dir *path*, not the built app, so they run in parallel with the Electron build. (3b) **One real snapshot** is then produced from Wedge's budget on the packaged Mac app (Bridge Task 6) — this is the only schema-path step that waits on the Electron build.
4. **AI-Layer** validates against that real snapshot; **LifeOS Phase 2** finance cards repoint onto it.

Step 3 is the single chokepoint: a schema change after freeze breaks two consumers at once (AI Layer and the LifeOS/Finances finance cards, which share one loader). Lock the schema *as a standalone document* and produce one real snapshot before any downstream rewrite begins.

**Parallelism, not strict serialization.** The ranks above are a "land cheapest/safest first" preference, not a chain where each rank gates the next. Only three hard gates exist: (i) Upstream-Merge must be tracking merge surface before view-layer edits land; (ii) the data-dir path must be agreed before the schema names it as a constant; (iii) the built app must exist before the real snapshot (step 3b) and before LifeOS Phase 2 / AI-Layer real-data validation. Everything else runs concurrently — Electron patches (Tasks 1-3), Bridge schema+export code (Tasks 1-5), Onboarding (Tasks 1-11), and LifeOS Phase 1 can all proceed in parallel once gate (i) is met.

The two Mac-and-hands gates that cannot be automated: the Electron build/install/smoke sequence (Electron-Launch Tasks 6-13) and the first packaged-app run that produces the real snapshot (Bridge Tasks 6, 13). Everything else across all six plans is agent-automatable and reversible.

## Shared contracts (design-once)

- **Snapshot JSON schema (v1, versioned superset).** Owned by the **Obsidian Bridge**. A single versioned superset: the read-only overview reads a slice; the AI Layer adds two extended fields — (1) upcoming scheduled bills (next ~30-60 days: due date + amount + category) and (2) per-category recent history (last 3-6 months or engine N-month average) — both version-gated so the overview ignores them. `amountUnit: cents`, integer-cents throughout, plus a `generatedAt` stamp. Design once in the Bridge; the AI Layer defers entirely and must not redesign it. **Fold the AI Layer's two fields in before the Bridge freezes.** **The schema is not "locked" until it lives in a standalone, versioned artifact — `docs/SNAPSHOT-SCHEMA.md` (Bridge Task 1) — that the AI-Layer and LifeOS cite by file, not by re-reading a JSON block in the Bridge plan.** Until that file exists the schema is proposed, not frozen, and the rule "lock the schema and produce one real snapshot before any downstream rewrite" is unmet. Two fields in the proposed v1 still need pinning before the lock: the `ageOfMoney.trend` enum (define it as one of `"improving" | "stable" | "declining"`, derived from comparing `currentAge` against a prior window; emit `"stable"` when `insufficientData` is true) and the `upcomingBills[].frequency` value set — name the allowed values in the schema doc so the AI-Layer prompt does not invent semantics.
- **Snapshot output path.** `~/Documents/Finances/wnab/snapshot.json`. Coupled to the unapplied Electron data-dir patch (`index.ts:57-65`). Agree the literal path before wiring the loader. Apply once in Electron-Launch.
- **Single snapshot loader.** `tools/finance-helpers.md` holds one `loadSnapshot()`; both `Finances.md` and the `Home.md` finance card read through it. **Migrate both views in the same change so the loader does not fork** — the consolidation is a gate, not a sequencing preference. LifeOS Task 7 (Phase 2) and Bridge Tasks 7-10 (add `loadSnapshot`, rewrite `Finances.md`, repoint `Home.md`) touch the same loader and the same two views; whichever plan lands first owns the single `loadSnapshot()`, and the other treats it as done. Neither view goes live on the snapshot until both read through the one consolidated loader — shipping `Finances.md` on the snapshot while `Home.md` still reads CSV (or a parallel loader) is exactly the fork this rule forbids.
- **Localhost-block removal.** The dead `http://localhost:4179/` block at `Finances.md:108` (plus the stale `wnab.command` hint at `:109`) is shared between Electron-Launch Phase 4 and the Bridge. Remove once, not twice.
- **Engine stays unmolested.** No engine changes in any plan. Onboarding's first-run flag lives in view-layer `localStorage`, not `loot-core` `prefs.ts`; the AI Layer never recomputes balances (the engine owns the math, goal templates enabled at `c9f366503`).
- **Upstream merge surface.** Every upstream file the view-layer plans touch becomes recurring conflict surface that Upstream-Merge must track: Onboarding edits `ToBudgetAmount.tsx`, `BalanceWithCarryover.tsx`, `Modals.tsx`, `modalsSlice.ts`, `BudgetPageMenuModal.tsx`; the Electron data-dir edit makes `index.ts` a deliberate engine-adjacent conflict point. Mitigation across plans: concentrate new logic in wnab-owned files (`src/coaching/`), keep each upstream edit to an import-and-call, and prefer theme tokens over hardcoded hex.
- **Coaching vocabulary.** The AI Layer's reasoning copy uses the same four-rule language as the Onboarding nudge module, in wnab's original voice — no YNAB verbatim wording (IP boundary). The typed `BudgetState → message` map in `src/coaching/nudges.ts` (Onboarding Task 1) is the contract the AI layer later targets. **Validate the contract shape before either side freezes:** Onboarding defines the `BudgetState` enum and the `state → message` signature; before the AI-Layer prompt is finalized (AI-Layer Task 4/5), it must confirm its reasoning output keys off the *same* state vocabulary that `nudges.ts` enumerates, so the later swap is a source change, not a re-typing. Neither plan names this check today — add it as a one-line cross-check (AI-Layer reads `nudges.ts`; Onboarding keeps the enum stable as the published contract) so the two do not drift into incompatible state names.
- **Theme injection order.** `palette.css` must load before `light.css` or the `--palette-*` override silently fails. Tracked by Upstream-Merge.

## Cross-PRD dependencies

- **AI-Layer → Bridge:** consumes the snapshot schema; must contribute its two extended fields before freeze. The AI-Layer cannot cite a frozen contract until the standalone `docs/SNAPSHOT-SCHEMA.md` (Bridge Task 1) exists — its own plan (Dependencies / sequencing step 1) is literally "lock the snapshot schema with the Obsidian-Bridge PRD," which is unmet while the schema is only a JSON block in the Bridge plan. Validation (Tasks 8-9) blocked until the Bridge export ships.
- **LifeOS Phase 2 → Bridge:** finance-card data rewrite (Tasks 7-9) blocked until the Bridge schema + export exist. LifeOS Phase 1 is independent and unblocked (can run anytime after the vault is stable; it is not gated by ranks 1-5).
- **Bridge → Electron-Launch:** snapshot output *path* depends on the data-dir patch (agree the constant before naming it in the schema); the real-snapshot step additionally needs the *built* app. Localhost-block removal is shared. The schema lock and export code do not depend on the build.
- **Onboarding → AI-Layer:** the static nudge module (`src/coaching/nudges.ts`) is the same `state → message` contract the AI layer later swaps its dynamic coaching into; build the typed module so the swap stays tractable. Add an explicit contract-shape cross-check: before the AI-Layer prompt freezes, confirm it keys off the same `BudgetState` vocabulary `nudges.ts` enumerates (see Coaching vocabulary, Shared contracts). Onboarding has no dependency on Electron-Launch — it can run in parallel once Upstream-Merge (rank 1) is tracking its merge surface.
- **Electron-Launch ↔ Upstream-Merge:** share the native-rebuild step (`rebuild-electron -o better-sqlite3,bcrypt`) and the packaged-app smoke variant (`ELECTRON-BUILD.md` Phase 2 / Upstream-Merge Task 10).
- **All view-layer PRDs → Upstream-Merge:** Onboarding and Bridge both add view-layer merge surface that the Upstream-Merge doc must enumerate as it lands.

## Contradictions & risks

- **Electron-Launch — CSC_LINK note phrased backwards (verifier: high).** The runbook §2 note reads as if signing happens when `CSC_LINK` is set, but `afterSignHook.ts:9` returns early (skips signing) when `CSC_LINK` *is set*. The practical outcome holds — leaving `CSC_LINK` unset lets the hook do the ad-hoc `codesign --sign -`. Fix the wording in the runbook before handing the build sequence to Wedge so the instruction is not misread under pressure.
- **Electron-Launch — `mac.target` arch is a nested array (verifier caveat).** The arch change edits the inner `arch:[...]` inside a `{target:'dmg', arch:[...]}` object, not a top-level target string array. Patch the inner array only.
- **Electron-Launch — icon size cosmetic (verifier: low).** `icon.icns` is ~2.3MB, not 2.4MB as stated. No action beyond a note.
- **LifeOS — `workbench/` folder location (verifier: med).** A `workbench` directory exists at `outputs/workbench`, but `workbench.base` filters and `.gitignore:66-68` point at a *root-level* `workbench/` that is absent. Confirm the intended location before creating the folder, or the view renders empty either way.
- **Onboarding — modal count drift (verifier: low).** The plan cites 63 modals; `Modals.tsx` now has 75 case statements. The substantive claim (none is onboarding-related) still holds; the count is stale, not wrong.
- **Upstream-Merge — task-number typo (verifier: low).** Plan prose says the token refactor is "Task 5"; it is Task 6 (Task 5 is the smoke-test doc). The task table numbers it correctly.
- **Schema-churn risk (program-level).** The dominant risk is a snapshot schema change after the AI Layer and LifeOS finance cards have frozen against it — it breaks two consumers at once. Mitigation is the critical-path sequencing: lock the schema (as the standalone `docs/SNAPSHOT-SCHEMA.md`) and produce one real snapshot before any downstream rewrite.
- **Snapshot data-reachability is asserted, not yet verified (Bridge).** The Bridge plan claims all snapshot data is reachable through existing `@actual-app/api` / loot-core handlers (`getBudgetMonth()`, `getAccounts()`, `getSchedules()`, `getTransactions()`, plus the pure AoM functions). The plan cites file paths and line ranges for these, but whether each is stable *public* API (vs internal) and serializes every edge case is **unverified** until the export handler is actually built and run (Bridge Task 6). One known wrinkle the plan flags: Age of Money lives in a desktop-client *report* function, not an engine primitive — confirm the export path can reach it without an engine edit before treating the schema as fully spec'd.
- **Electron runbook accuracy caveat.** The Electron-Launch plan says its runbook "is accurate against the tree," but its own readiness verdict lists two caveats — the backwards `CSC_LINK` wording (above) and the nested `mac.target` arch shape. On the `CSC_LINK` point the runbook is **misleading as written**, not merely incomplete: fix the wording before the build sequence is handed off, so "accurate" is true rather than aspirational.

No direct contradiction exists between any two plans' decisions. The open questions each plan inherited (modal vs guided tour; typed config vs markdown; empty start vs seeded categories; merge vs rebase; cadence; layout ceiling; export cadence) are all resolved consistently and do not conflict across plans.

## Completed / out-of-scope

- **[[PRDs/PRD-wnab-folder-consolidation]]** — done (2026-05-29), confirmed in the wnab repo git log at commit `b1564244a` ("wnab: consolidate — salvage recon docs (SPIKE, BUILD-AND-CARVE) into docs/, defensive .gitignore backstop, session-handoff convention in AGENTS.md", 2026-05-29). Not a task.
- **[[PRDs/PRD-wnab-Budget-App]]** — locked umbrella spec. Context, not a discrete build item.
- **[[PRDs/wnab-AI-Ideas]]** — parked idea bank (7 opportunities) feeding the AI Layer. The AI Layer plan scopes opportunity #1 only; #2-#7 are sequenced after #1 proves out.

## Per-PRD plans

- [[PRDs/plans/upstream-merge-plan]]
- [[PRDs/plans/electron-launch-plan]]
- [[PRDs/plans/obsidian-bridge-plan]]
- [[PRDs/plans/ai-layer-plan]]
- [[PRDs/plans/onboarding-coaching-plan]]
- [[PRDs/plans/obsidian-lifeos-plan]]
