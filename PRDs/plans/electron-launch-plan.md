---
title: "Implementation Plan — PRD — wnab Electron desktop launch"
type: implementation-plan
status: draft
created: 2026-05-30
source_prd: "[[PRDs/PRD-wnab-Electron-Launch]]"
tags:
  - implementation-plan
  - wnab
  - electron
  - launch
---

# Implementation Plan — wnab Electron desktop launch

This PRD is already approved and the runbook (`wnab/docs/ELECTRON-BUILD.md`) is written. What
remains is the doing: two small source patches, one native rebuild, one packaging run, an install,
and one vault edit. The runbook is accurate against the current tree with one wording mismatch worth
flagging (the `mac.target` shape) and one missing-by-design piece (the `wnab://` scheme is fully
unimplemented, not just unconfigured). Most of the work cannot run headless — it needs Wedge's Mac
with Xcode Command Line Tools. The agent-automatable slice is the two patches and the vault edit.

## Current state

**Done**

- Electron wrapper package exists and is upstream-intact — `packages/desktop-electron/` with
  `index.ts`, `package.json`, `afterSignHook.ts`, `beforePackHook.ts`, `menu.ts`, `security.ts`,
  `window-state.ts`. (dir listing; `packages/desktop-electron/package.json`)
- App icon already present — `packages/desktop-electron/icons/icon.icns` (2.4 MB) and `icon.png`
  exist, referenced by the build config `mac.icon`. No icon work needed. (`packages/desktop-electron/package.json:58`)
- Root build/run scripts the runbook cites all exist and resolve correctly:
  - `rebuild-electron` → `electron-rebuild -m ./packages/desktop-electron -o better-sqlite3,bcrypt --build-from-source -f` (`package.json:55`)
  - `start:desktop` → `yarn desktop-dependencies && npm-run-all --parallel 'start:desktop-*'` (`package.json:25`)
  - `build:desktop` → `./bin/package-electron` (`package.json:39`)
  - `bin/package-electron` exists, is executable, and wires the desktop build chain ending in
    `yarn build` inside `packages/desktop-electron` (which runs `electron-builder`). (`bin/package-electron:1-86`; `packages/desktop-electron/package.json:10`)
- Ad-hoc unsigned signing is already handled — `afterSignHook.ts` codesigns with an ad-hoc identity
  (`codesign --sign -`) and **early-returns when `CSC_LINK` is set**, so an unsigned local build needs
  no cert and won't attempt notarization. The runbook's "ensure `CSC_LINK` is unset" note is
  backwards relative to the hook, but the practical outcome (no cert needed) is correct. (`packages/desktop-electron/afterSignHook.ts:8-23`)
- The reskin (theme v3, serif/mono typography, To Assign banner, coaching nudge, pill controls) is
  committed in `desktop-client` + `component-library` and will carry into the desktop build because
  `bin/package-electron` builds `@actual-app/web --mode=desktop` from this tree. (recon git log
  through `8ee82e94f`; `bin/package-electron:57`)
- The upstream-divergence catalog target exists — `PRDs/PRD-wnab-Upstream-Merge.md` is present to
  receive the data-dir divergence note. (dir listing)
- The runbook itself is committed — `docs/ELECTRON-BUILD.md` at HEAD `8ee82e94f`. (recon; `git log -1`)

**In progress**

- Nothing is mid-edit. Working tree is clean at `8ee82e94f` ("docs: Electron build & launch
  runbook"); branch `wnab` is ahead of `origin/wnab` by 1 commit. (`git status --short` empty; `git log -1`)

**Not started**

- **Data-dir patch (Decision 1).** `packages/desktop-electron/index.ts:57-65` still uses upstream
  defaults: `process.env.ACTUAL_DOCUMENT_DIR = app.getPath('documents')` and
  `ACTUAL_DATA_DIR = app.getPath('userData')`. The `~/Documents/Finances/wnab/` relocation
  (runbook §1b) is NOT applied. (`packages/desktop-electron/index.ts:57-65`)
- **App identity patch (runbook §1a).** Still upstream: `productName: "Actual"`,
  `appId: "com.actualbudget.actual"`, and `mac.target` arch is `["x64","arm64"]`. None of the
  three (`productName: "wnab"`, `appId: "com.wedge.wnab"`, arch `["arm64"]`) are applied.
  (`packages/desktop-electron/package.json:37,62-70,134`)
- **`wnab://` URL scheme (runbook §1c, Decision 2 — optional).** Zero implementation: no
  `setAsDefaultProtocolClient`, no `open-url`/`second-instance` handler, no `CFBundleURLTypes` /
  `extendInfo` in the build config. (grep on `index.ts` + `package.json` returned no matches)
- **Native rebuild for Electron.** Not run in this environment; requires the Mac toolchain.
- **Packaging / install / first launch.** No `dist/` artifact; not built.
- **Vault button resolution (Decision 2).** The dead localhost link is still live —
  `00 Command Center/Finances.md:108` renders `<a href="http://localhost:4179/">Open WNAB to
  budget →</a>`, plus a `:109` hint pointing at `~/Documents/Finances/wnab/serve/wnab.command`
  (a path/launcher that does not match the Electron model). Both still present, not retired.
  (`00 Command Center/Finances.md:108-109`)
- **Merge-catalog note for the divergence.** The data-dir edit is not yet logged in
  `PRDs/PRD-wnab-Upstream-Merge.md` (its "catalog divergence" step is still a plan, open questions
  unresolved). (`PRDs/PRD-wnab-Upstream-Merge.md:53,61-65`)

## Dependencies & shared contracts

- **The two source patches gate everything downstream.** The data-dir patch (index.ts) and the
  identity patch (package.json) must land before packaging, or the `.app` ships as "Actual" writing
  to `~/Library/Application Support` and to both architectures. Both are pure code edits — an agent
  can do them headless. Everything after the rebuild needs the Mac.
- **`mac.target` shape contract.** The runbook §1a says set `mac.target` to `["arm64"]`, but the
  actual config nests arch inside a target object: `"target": [{ "target": "dmg", "arch":
  ["x64","arm64"] }]`. The patch must edit the inner `arch` array, not replace `mac.target` with a
  bare string array, or electron-builder loses the `dmg` target. (`packages/desktop-electron/package.json:62-70`)
- **`productName` drives the artifact + `.app` name.** Setting `productName: "wnab"` makes the
  artifact `wnab-mac-arm64.dmg` (via `artifactName: "${productName}-mac-${arch}.${ext}"`) and the
  installed app `wnab.app`. The runbook, the install step, and the smoke test all assume this name;
  it is the one contract every later step reads. (`packages/desktop-electron/package.json:61`)
- **`bcrypt` lives in `sync-server`, not `desktop-electron`.** `rebuild-electron` rebuilds
  `better-sqlite3,bcrypt`; `better-sqlite3` is a direct `desktop-electron` dep, `bcrypt` is a
  `sync-server` dep pulled in transitively (sync-server is bundled for the local server). The
  `-o better-sqlite3,bcrypt` flag is correct; no script change needed. (`packages/desktop-electron/package.json:19`; `packages/sync-server/package.json:93`)
- **Data-dir model shared with the vault.** `~/Documents/Finances/wnab/` aligns the Electron data
  location with the vault's finance model — the Obsidian datacore loader reads `~/Documents/Finances/`
  for the card's CSVs. Putting wnab's budget DB under the same backed-up tree is the cross-workspace
  contract that makes Success Criterion 3 ("known location that gets backed up") true. (vault recon:
  `tools/finance-helpers.md` path; PRD success criteria)
- **Divergence ledger.** The data-dir edit is the project's first deliberate engine-adjacent
  divergence and must be recorded in `PRD-wnab-Upstream-Merge.md` so the next upstream merge expects
  the conflict in `index.ts` rather than being surprised by it.

## Risks

- **Cannot build headless.** Native rebuild + electron-builder need macOS and Xcode CLT. Any agent
  in a Linux/sandbox context can only do the two patches and the vault edit; the rest is Wedge's Mac.
  This is the dominant scheduling constraint, not a technical risk. (PRD Constraints; recon)
- **Gatekeeper first-launch block.** The ad-hoc-signed unsigned app triggers macOS Gatekeeper on
  first open. Mitigation is the documented right-click → Open once. Low risk, one-time, GUI-only.
- **Runbook §1c is more than config — it's net-new code.** The `wnab://` scheme has no handler at
  all. Doing it properly means `app.setAsDefaultProtocolClient('wnab')` PLUS an `open-url` (macOS)
  event handler that focuses/creates the window, PLUS `mac.extendInfo.CFBundleURLTypes`. The runbook
  shows only the one-liner and the Info.plist entry, not the event wiring. Recommendation below is to
  defer it — the Dock satisfies the PRD.
- **`mac.target` misread.** If the §1a wording ("set arch to `["arm64"]`") is applied literally as
  `"mac": { "target": ["arm64"] }`, electron-builder will treat `arm64` as a *target type* and fail
  or default oddly. Patch must touch the nested `arch` array only.
- **Stale `wnab.command` hint in the vault.** Finances.md:109 references a `serve/wnab.command`
  launcher that belongs to the retired dev-server model. Removing the localhost `<a>` without also
  removing this hint leaves a second dead breadcrumb. Treat both lines as one cleanup.
- **Translations clone during packaging.** `bin/package-electron` clones/pulls
  `actualbudget/translations` into `packages/desktop-client/locale` unless `--skip-translations` is
  passed. First package run needs network + a few minutes; not a failure risk, just a surprise.
  (`bin/package-electron:37-50`)
- **better-sqlite3 / Electron ABI mismatch.** If `rebuild-electron` is skipped or the Node and
  Electron ABIs drift, the app boots to a blank/erroring window. The runbook sequences the rebuild
  before the smoke test, which catches this — keep that order.

## Open questions — resolved

The PRD body's open questions were already answered in its own "Decisions (2026-05-29)" block; the
remaining genuinely-open items are inherited from the linked upstream-merge PRD plus the §1c choice.
Resolving each concretely:

1. **Data directory — userData vs `~/Documents/Finances/wnab/`?**
   Resolved: patch `index.ts` to `~/Documents/Finances/wnab/` with `documents/` and `data/`
   subdirs, `mkdirSync(..., { recursive: true })` on launch (runbook §1b verbatim). This satisfies
   the backup/security model and aligns with the vault's `~/Documents/Finances/` finance tree.
   Accept the one upstream divergence; log it in the merge catalog.

2. **Button — retire the localhost link, or repoint it?**
   Resolved: retire it. Remove both the `<a href="http://localhost:4179/">` (Finances.md:108) and
   the `serve/wnab.command` hint (Finances.md:109). The Dock icon is the launcher. Do NOT ship the
   `wnab://` link in this pass.

3. **Implement the `wnab://` scheme now (§1c)?**
   Resolved: defer. It is net-new main-process code (protocol registration + `open-url` handler +
   `CFBundleURLTypes`), not in scope for "one button opens the program" since the Dock already does
   that. Capture it as a follow-up so the option isn't lost, but ship the Dock-only path.

4. **Arch — arm64-only or universal?**
   Resolved: arm64-only (Decision 4 — single Apple-Silicon machine). Edit the nested `arch` array to
   `["arm64"]`. Halves build time and artifact size; no x64 machine to serve.

5. **Code signing — ad-hoc or none?**
   Resolved: rely on the existing `afterSignHook` ad-hoc codesign (`codesign --sign -`), which runs
   automatically on darwin when `CSC_LINK` is unset. No paid cert, no notarization. Accept the
   one-time Gatekeeper right-click → Open. (`afterSignHook.ts:8-23`)

6. **`CSC_LINK` handling — does it need unsetting (per runbook §2)?**
   Resolved: no action needed in normal shells where `CSC_LINK` is already absent — the hook then
   *performs* the ad-hoc sign. The runbook's phrasing implies `CSC_LINK` must be unset to *skip*
   signing, but the hook actually skips when `CSC_LINK` is *set*. Practically: leave `CSC_LINK`
   unset and you get a working ad-hoc-signed app. (No code change; note the doc wording for a later
   runbook tidy.)

7. **Record the divergence where? (inherited from Upstream-Merge PRD)**
   Resolved: add a one-line entry to `PRD-wnab-Upstream-Merge.md` under its divergence catalog
   noting that `packages/desktop-electron/index.ts` data-dir block is intentionally diverged, so the
   next merge expects an `index.ts` conflict there.

## Task breakdown

| # | Task | Touches | Effort | Reversible | Needs Wedge |
|---|------|---------|--------|------------|-------------|
| 1 | Patch app identity: `productName` → `"wnab"`, `appId` → `"com.wedge.wnab"`. | `packages/desktop-electron/package.json` (`:37,:134`) | S | Yes | No |
| 2 | Patch arch: change nested `mac.target[].arch` from `["x64","arm64"]` to `["arm64"]` (edit the inner `arch` array, NOT `mac.target`). | `packages/desktop-electron/package.json` (`:62-70`) | S | Yes | No |
| 3 | Patch data dir: replace the non-test `else` block to point `ACTUAL_DOCUMENT_DIR`/`ACTUAL_DATA_DIR` at `~/Documents/Finances/wnab/{documents,data}` with `mkdirSync(recursive)`; leave the `isPlaywrightTest` branch untouched. | `packages/desktop-electron/index.ts` (`:57-65`) | S | Yes | No |
| 4 | Log the data-dir divergence in the merge catalog (one line: `index.ts` data-dir block intentionally diverged → expect conflict on next merge). | `PRDs/PRD-wnab-Upstream-Merge.md` | S | Yes | No |
| 5 | `yarn typecheck` on the touched packages to confirm the index.ts edit compiles. | (no file changes) | S | Yes | Yes (Mac toolchain) |
| 6 | Prereqs: `nvm use 22`, `corepack enable`, `xcode-select --install` (if not already). | (environment) | S | Yes | Yes (Xcode CLT) |
| 7 | `yarn install` (if deps not present). | (lockfile-driven) | S | Yes | Yes (Mac) |
| 8 | `yarn rebuild-electron` — native rebuild of `better-sqlite3` + `bcrypt` against Electron. | (native build artifacts) | M | Yes | Yes (Xcode CLT) |
| 9 | Smoke test in dev window: `yarn start:desktop`; confirm the reskinned UI opens in an Electron window (not a browser). | (runtime) | M | Yes | Yes (GUI window) |
| 10 | Package: `yarn build:desktop` (web `--mode=desktop` + electron-builder → `dist/wnab-mac-arm64.dmg`). First run also clones `actualbudget/translations`. | (produces `dist/`) | L | Yes | Yes (Mac build) |
| 11 | Install: open `dist/wnab-mac-arm64.dmg`, drag `wnab.app` to `/Applications`. | (filesystem / GUI) | S | Yes | Yes (GUI) |
| 12 | First launch via right-click → Open (clear Gatekeeper once); pin to Dock. | (GUI) | S | Yes | Yes (GUI) |
| 13 | Verify persistence: create/open a budget, Envelope mode, assign a dollar, confirm wnab theme, relaunch, confirm data written under `~/Documents/Finances/wnab/data`. | (runtime / filesystem) | M | Yes | Yes (GUI) |
| 14 | Vault cleanup: remove the dead `http://localhost:4179/` `<a>` (Finances.md:108) AND the `serve/wnab.command` hint (Finances.md:109); leave a Dock-launch note (no link). | `00 Command Center/Finances.md` (`:108-109`) | S | Yes | No |
| 15 | (Deferred, optional) `wnab://` scheme: `setAsDefaultProtocolClient('wnab')` + `open-url`/`second-instance` handler + `mac.extendInfo.CFBundleURLTypes`; then `[Open wnab](wnab://open)` in Finances.md. Track as follow-up, do not block launch. | `packages/desktop-electron/index.ts`, `packages/desktop-electron/package.json`, `00 Command Center/Finances.md` | M | Yes | Yes (rebuild + GUI to verify) |

## Readiness verdict

**Ready to build.** No blockers. The runbook is accurate against the tree with two caveats an
implementer must internalize before patching: (1) the `mac.target` arch change edits a *nested*
`arch` array, not a top-level `target` string array; (2) the `CSC_LINK` note in §2 is phrased
backwards relative to `afterSignHook.ts` — the practical "no cert needed, leave it unset" outcome
holds, but don't go *setting* `CSC_LINK` to skip signing.

The clean split: tasks 1–4 and 14 are pure code/doc edits an agent can land headless and reversibly
in one short session, gated only by `yarn typecheck` (task 5, which itself wants the Mac toolchain).
Tasks 6–13 are the irreducible Mac-and-hands core — native rebuild, packaging, install, Gatekeeper,
and the GUI smoke test. Task 15 (`wnab://`) is explicitly deferred; the Dock icon already satisfies
the PRD's "one button opens the whole program." Recommended path: land the patches (1–4) and the
vault edit (14) first as a reviewable commit, then hand the build sequence (6–13) to Claude Code on
Wedge's Mac.
