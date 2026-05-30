---
title: "Implementation Plan — wnab upstream-merge strategy"
type: implementation-plan
status: draft
created: 2026-05-30
source_prd: "[[PRDs/PRD-wnab-Upstream-Merge]]"
tags:
  - implementation-plan
  - wnab
  - process
  - maintenance
---

# Implementation Plan — wnab upstream-merge strategy

This plan turns the upstream-merge PRD into a concrete, runnable procedure. It is mostly
cataloguing and documentation, not feature code: the goal is a written loop that Claude Code (or a
human) can follow to pull `actualbudget/actual` into the `wnab` fork without either stranding on a
stale engine or drowning the reskin in conflicts. The seam between "their engine" and "our view" is
already clean; the work is to write it down before divergence makes it expensive.

The single deliverable is `wnab/docs/UPSTREAM-MERGE.md` plus two small, mechanical changes (an
i18n-safe theme-token refactor and a `.gitignore` line) that make the next merge measurably cheaper.

## Current state

### Done

- **Two remotes wired and fetching.** `origin` → `Logos52/wnab.git`, `upstream` →
  `actualbudget/actual.git`; both pull cleanly. Evidence: `git remote -v` in wnab; live
  `git fetch upstream` succeeded (advanced `upstream/master` `f3a5bb3ce..50062be52`).
- **Long-lived `wnab` branch exists, tracking `origin/wnab`.** Evidence: `git branch -vv` →
  `* wnab 8ee82e94f [origin/wnab: ahead 1]`. A `master` branch also exists tracking
  `origin/master` at the old merge-base `ff70d2d5f`.
- **The seam is real and view-only.** All 13 reskin commits since the merge-base touch only
  `desktop-client`, `component-library`, `docs/`, and two root files. No engine package
  (`loot-core`, `crdt`, `sync-server`, `api`, `cli`) is touched. Evidence:
  `git diff --name-status ff70d2d5f wnab` → 14 paths, none under `loot-core/`, `crdt/`,
  `sync-server/`, `api/`.
- **Current divergence is zero-conflict against today's upstream.** Of the 9 source/config files
  wnab modified, upstream has changed *none* of them since the merge-base, while upstream changed
  55 files elsewhere. Evidence: per-file `git diff --numstat ff70d2d5f upstream/master -- <file>`
  returned empty for every wnab-touched file; `git diff --name-only ff70d2d5f upstream/master | wc -l`
  = 55 with zero overlap. A merge today would fast-absorb all 55 upstream files with no manual
  conflict.
- **Theme is implemented as token overrides, not component edits.** `light.css` is *purely
  additive* (85 lines appended after line 249) and works by replacing the `--palette-navy*` /
  `--palette-purple*` ramps plus `--font-family`. This is exactly the conflict-resistant path the
  PRD prescribes. Evidence: `git diff ff70d2d5f wnab -- packages/component-library/src/themes/light.css`
  shows only insertions at the file tail; the header comment documents the injection-order
  assumption (palette.css before theme css).
- **`styles.ts` numeral font is a 2-line additive token.** Evidence:
  `git diff ... -- packages/component-library/src/styles.ts` (+2, adds `fontFamily` to the existing
  `tnum` block).
- **A reusable smoke test already exists in prose.** `docs/ELECTRON-BUILD.md` lines 72–74 define the
  post-merge check (launch → open budget → Envelope mode → assign a dollar → confirm theme →
  confirm persistence). It just needs lifting into the merge doc and a browser-mode variant.
- **The "never edit the engine" rule is already written once.** `docs/BUILD-AND-CARVE.md` Phase 1
  (lines 30–34) names the don't-touch packages and the `git fetch upstream && git merge upstream/master`
  command. The merge doc supersedes and expands this.
- **Native-module rebuild command exists.** Root `package.json` line 55:
  `rebuild-electron` → `electron-rebuild -m ./packages/desktop-electron -o better-sqlite3,bcrypt
  --build-from-source -f`. The PRD's "native modules need rebuilds after engine bumps" risk has a
  named command.

### In progress

- **Structural view edits exist but are small and label-level.** Five `desktop-client` source files
  carry relabels and one constant: `EnvelopeBudgetComponents.tsx` (Budgeted/Spent/Balance →
  Assigned/Activity/Available, 3+/3−), `TotalsList.tsx` (same relabel, 1+/1−), `table.tsx`
  (`ROW_HEIGHT 32→38`, 1+/1−), `useFeatureFlag.ts` (two flag flips, 2+/2−). These are low-conflict
  but *are* edits to upstream internals, so they belong in the catalog as "expected conflict
  surfaces." Evidence: `git diff ff70d2d5f wnab` for each file.
- **Two larger view edits use hardcoded hex instead of theme tokens.** `ToBudgetAmount.tsx`
  (32+/14−, the Ready-to-Assign banner pill + 3 coaching strings) and `BalanceWithCarryover.tsx`
  (17+/4−, the Available pill) inline literal colors like `#1e7a3d` / `#c0341d` / `#e3f3e8` rather
  than `theme.*` tokens. These are the highest-conflict-risk files in the reskin and the one place
  the PRD's "bias toward token overrides" guidance is being violated. Evidence:
  `git diff ff70d2d5f wnab -- .../ToBudgetAmount.tsx` and `.../BalanceWithCarryover.tsx`.

### Not started

- **No upstream-merge doc exists.** `grep -rIl -iE "upstream|merge|rebase" wnab/docs/` matches only
  SPIKE.md / BUILD-AND-CARVE.md / ELECTRON-BUILD.md (incidental mentions); there is no
  `UPSTREAM-MERGE.md`. This is the PRD's primary deliverable. Evidence: `ls wnab/docs/` →
  `BUILD-AND-CARVE.md`, `ELECTRON-BUILD.md`, `SPIKE.md` only.
- **Cadence is undocumented.** No doc states when to pull. (Resolved below.)
- **Merge-vs-rebase choice is unrecorded.** BUILD-AND-CARVE.md line 34 mentions `git merge` in
  passing but does not commit to it as policy or explain why. (Resolved below.)
- **No conflict catalog / "expected conflict surfaces" table is written down anywhere.**
- **No post-merge smoke checklist tuned for the browser (Vite) path.** ELECTRON-BUILD.md's test
  assumes a packaged Electron app; the cheap merge-verify path is `yarn start` on localhost:3001.

## Dependencies & shared contracts

- **Merge-base contract.** Everything here is anchored to `git merge-base upstream/master wnab`,
  currently `ff70d2d5f`. The doc must instruct the runner to recompute this each cycle, not hardcode it.
- **Injection-order contract (theme).** The reskin's token override only wins if `palette.css` loads
  before `light.css`. If upstream ever reorders CSS imports in `component-library`, the theme breaks
  silently — this is a watch item in the smoke test, not a build error.
- **Feature-flag contract.** `useFeatureFlag.ts` flips `goalTemplatesEnabled` /
  `goalTemplatesUIEnabled` to `true`. If upstream adds or renames keys in the
  `DEFAULT_FEATURE_FLAG_STATE` record, this file conflicts. It is the single most likely future
  textual conflict because upstream edits that record whenever it ships a flag.
- **Native-module contract.** `better-sqlite3` and `bcrypt` are compiled against the Electron ABI;
  any engine bump that changes the Electron or Node version requires `yarn rebuild-electron`. Shared
  with `[[PRDs/PRD-wnab-Electron-Launch]]` (ELECTRON-BUILD.md Phase 2).
- **Commit-convention contract.** Per `wnab/AGENTS.md` and `.github/agents/pr-and-commit-rules.md`,
  all commit messages must be prefixed `[AI]`, hooks must not be skipped, and commits happen only
  when explicitly asked. The merge doc must tell the runner that the merge commit itself carries the
  `[AI]` prefix.
- **Session-handoff contract.** `AGENTS.md` "Session handoff" section: end clean (commit + push),
  decisions go to the vault `journal/`. A merge cycle should end with `origin/wnab` pushed and a
  one-line journal note if anything non-obvious happened.
- **Doc-location contract.** Code and runbooks live in `wnab/docs/`; PRDs and decisions live in the
  vault. This plan writes to the vault; the procedure it describes writes to `wnab/docs/`.

## Risks

- **Divergence tax compounds weekly.** Upstream moved 55 files in ~2 days (merge-base
  `ff70d2d5f` 2026-05-28 → `50062be52` 2026-05-29). The longer the gap, the higher the odds upstream
  eventually edits one of wnab's 9 touched files. Acting now, while overlap is zero, is the cheapest
  this will ever be.
- **`useFeatureFlag.ts` is the canary.** Upstream touches `DEFAULT_FEATURE_FLAG_STATE` routinely;
  expect this file to be the first to conflict. Mitigation documented below (accept-theirs +
  re-flip two keys is a trivial 30-second resolution).
- **Hardcoded hex in the two pill files raises future conflict cost.** Because they restructure JSX
  (`getDefaultClassName` rewritten, banner pill block added), an upstream refactor of either file
  produces a *structural* conflict, not a one-liner. The token refactor (Task 5) shrinks the blast
  radius.
- **Silent theme breakage.** A merge can succeed textually yet break the look if upstream reorders
  CSS imports or renames a `--palette-*` ramp. This is invisible to `git` and `typecheck`; only the
  visual smoke test catches it. The doc must make "does the theme still render?" an explicit step.
- **Native rebuild forgotten.** Skipping `yarn rebuild-electron` after an engine bump yields a
  cryptic runtime crash, not a build error. Must be a non-optional line in the procedure.
- **Untracked `light.css~` editor backup** sits in the themes dir; it is gitignored
  (`git check-ignore` → IGNORED) so harmless to merges, but worth deleting for hygiene.
- **`master` branch drift.** A local `master` tracks `origin/master` at the stale `ff70d2d5f`. The
  procedure should rely on `upstream/master` directly and not confuse it with the local `master`.

## Open questions — resolved

- **Cadence — monthly schedule or release/advisory trigger?** → **Both, with a hard ceiling.** Pull
  on a **monthly cadence** as the default heartbeat, **plus an immediate pull on any upstream
  security advisory** (the engine is `loot-core` + `sync-server`; security fixes there are the whole
  reason not to strand). Set a **4-week maximum gap**: if a month passes with no pull, pull anyway.
  Rationale: the 55-files-in-2-days churn rate means a quarterly cadence would routinely produce
  large, scary merges; monthly keeps each merge small while overlap with wnab's 9 files stays near
  zero. This is a solo/low-frequency reskin, so weekly is unnecessary overhead.
- **Strategy — `git merge` or rebase the `wnab` branch?** → **`git merge upstream/master` into
  `wnab`.** Merge is correct for a long-lived, published, divergent branch: it preserves the 13
  reskin commits as-is, resolves each conflicting file *once* (rebase re-presents the same conflict
  per-commit across 13 replays), and never rewrites already-pushed history (`origin/wnab` is
  published; rebasing would force-push, which `pr-and-commit-rules.md` forbids on shared branches).
  Upstream itself is effectively linear (PR-squash workflow; only rare structural merge commits like
  `37b62d094`), so a merge commit on `wnab` reads cleanly. **Rebase is explicitly rejected** for this
  branch.
- **How much layout divergence is acceptable before the tax outweighs the look?** → **Token-first
  budget with a named ceiling.** Acceptable indefinitely: CSS-token overrides (`light.css`,
  `styles.ts`) and pure string relabels (`Assigned`/`Activity`/`Available`) — these effectively never
  conflict. Acceptable but tracked: single-constant tweaks (`ROW_HEIGHT`) and additive blocks
  (coaching `<Block>`). **Ceiling:** keep *structural* edits to upstream component internals to a
  short, enumerated list — today that is exactly **5 files** (`EnvelopeBudgetComponents`, `TotalsList`,
  `table`, `BalanceWithCarryover`, `ToBudgetAmount`) plus `useFeatureFlag` and `index.html`. New
  reskin work should prefer additive components and token overrides; any new edit to an upstream
  internal must be added to the catalog with a justification. If the structural-edit list grows past
  roughly a dozen files, or any single merge needs more than ~30 minutes of conflict resolution, that
  is the signal the tax is winning and divergence should be pushed back into tokens/additive layers.

## Task breakdown

| # | Task | Touches | Effort | Reversible | Needs Wedge |
|---|------|---------|--------|------------|-------------|
| 1 | Generate the live divergence catalog: run `MB=$(git merge-base upstream/master wnab); git diff --name-status $MB wnab` and per-file `--numstat`, classify each of the 9 wnab-touched files as token-override / relabel / constant / additive / structural. | (read-only git) | S | Yes | No |
| 2 | Write `docs/UPSTREAM-MERGE.md` §1 "The seam" — engine packages = never edit; view packages = ours; embed the catalog table from Task 1 with the conflict-risk classification per file. | `wnab/docs/UPSTREAM-MERGE.md` | M | Yes | No |
| 3 | Write §2 "Cadence" and §3 "Strategy" — monthly + advisory-triggered, 4-week ceiling; `git merge upstream/master` (not rebase) with the rationale; record both decisions as settled. | `wnab/docs/UPSTREAM-MERGE.md` | S | Yes | No |
| 4 | Write §4 "The merge procedure" — exact command sequence: `git fetch upstream`; recompute merge-base; `git checkout wnab`; `git merge upstream/master`; conflict-isolation tactics (expect conflicts only in the catalog files; `useFeatureFlag.ts` resolution recipe = accept-theirs then re-flip the two goalTemplates keys); `yarn install`; `yarn rebuild-electron` if engine/Electron bumped; `[AI]`-prefixed merge commit; push. | `wnab/docs/UPSTREAM-MERGE.md` | M | Yes | No |
| 5 | Write §5 "Post-merge smoke test" — browser path (`yarn start` → localhost:3001 → demo budget → Envelope → assign a dollar → confirm theme renders → confirm `--palette-*` override still wins) plus a pointer to ELECTRON-BUILD.md's packaged-app variant; add `yarn typecheck` + `yarn lint` as the cheap pre-smoke gate. | `wnab/docs/UPSTREAM-MERGE.md` | S | Yes | No |
| 6 | Refactor the two hex-hardcoded pill files to use `theme.*` tokens (define wnab pill tokens in `light.css`, reference them in `ToBudgetAmount.tsx` / `BalanceWithCarryover.tsx`) to shrink future structural-conflict surface; run `yarn typecheck` + `yarn lint:fix`. NOT committed unless asked. | `light.css`, `ToBudgetAmount.tsx`, `BalanceWithCarryover.tsx` | M | Yes | No |
| 7 | Add `*.css~` (and any stray editor backups) to wnab `.gitignore` defensively and note the existing untracked `light.css~` for deletion. | `wnab/.gitignore` | S | Yes | No |
| 8 | Dry-run the documented procedure read-only against today's `upstream/master`: `git merge --no-commit --no-ff upstream/master` then `git merge --abort`, confirming zero conflicts, to validate the doc before the first real cycle. | (read-only / aborted) | S | Yes | No |
| 9 | Cross-link: add a one-line pointer from `docs/BUILD-AND-CARVE.md` Phase 1 to the new `UPSTREAM-MERGE.md` so the seam rule has one source of truth. | `wnab/docs/BUILD-AND-CARVE.md` | S | Yes | No |
| 10 | Execute the first real monthly merge using the doc, run the smoke test, then run `yarn build:desktop` and verify the packaged app — the full proof the loop survives a real engine bump on hardware. | full repo, Electron build | L | Yes | Yes |

## Readiness verdict

**Ready to start now — this is the soonest-to-start PRD and the cheapest it will ever be.** The
seam is already clean (zero overlap between wnab's 9 touched files and the 55 files upstream moved
since the merge-base), so Tasks 1–9 are pure read-only inspection and documentation that an agent
can complete without Wedge and without risk: every one is reversible and none needs a Mac. The only
hands-on item is Task 10 (the first real merge + packaged-app verification), which depends on the
doc existing and is best done once on Wedge's machine to prove the native-rebuild step. Recommended
order: do Tasks 1→5 to land `UPSTREAM-MERGE.md`, then Task 8 to validate it against live upstream,
then Tasks 6/7/9 as cleanup, and finally Task 10 when convenient. Acting this cycle banks the
divergence tax at its current near-zero level before upstream eventually edits `useFeatureFlag.ts`
or a budget component.
