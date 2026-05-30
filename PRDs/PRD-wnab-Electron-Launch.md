---
title: "PRD — wnab Electron desktop launch"
type: PRD
status: draft
created: 2026-05-29
updated: 2026-05-29
tags:
  - PRD
  - wnab
  - electron
  - launch
links:
  - "[[PRDs/PRD-wnab-Budget-App]]"
  - "[[journal/2026-05-29-wnab-direction-decided]]"
---

# PRD — wnab Electron desktop launch

## Problem

There's no real way to "open wnab." Today it only runs as a Vite dev server (`yarn start`,
port 3001), and the Command Center button (`00 Command Center/Finances.md`) is a hardcoded
`http://localhost:4179/` link — wrong port *and* it assumes a server is already running, so it
opens a dead tab. Wedge wants **one button that opens the entire program**, and wants off the
localhost/dev-server model. Decided (2026-05-29): package wnab as an **Electron desktop app**,
reusing Actual's own `packages/desktop-electron/` wrapper (already in the fork — reuse, not new code).

## Success criteria

- A real macOS app (`wnab.app`) that launches from Dock/Spotlight in one click — no terminal,
  no localhost, no background server.
- Opening it shows the full reskinned wnab budget UI (the desktop-client reskin carries into the build).
- Budget data persists between launches, on-device, in a known location that gets backed up.
- The dead Obsidian localhost button is resolved (replaced or retired).

## Scope

**In:**
- Build the unsigned `.app`/`.dmg` from `packages/desktop-electron` on Wedge's Mac.
- Decide + set where budget data lives (see open questions).
- Resolve the Command Center button: either retire it (use the Dock) or repoint it to launch the app.
- Update `wnab/docs/` + vault with the build/launch procedure.

**Out:**
- No code signing / Apple Developer notarization (personal use; accept Gatekeeper's first-run prompt
  or ad-hoc sign). No auto-update server. No sync server. No Windows/Linux targets. No app/feature
  changes beyond what's needed to launch.

## Constraints / risks

- **Cannot build in Cowork's sandbox.** Needs macOS, a native rebuild of `better-sqlite3` + `bcrypt`
  against Electron (`yarn rebuild-electron`, needs Xcode CLT), and electron-builder producing a Mac
  artifact. → **Runs on Wedge's Mac (or Claude Code locally).**
- **Unsigned app:** macOS Gatekeeper will block first launch — right-click → Open once, or ad-hoc
  codesign. No paid cert needed.
- **Data location:** packaged `index.ts` defaults `ACTUAL_DATA_DIR = app.getPath('userData')`
  (`~/Library/Application Support/<app>`), not `~/Documents/Finances/wnab/`. Live data and the
  "external, backed-up" model diverge unless we relocate or back up the userData dir. (Open question.)
- **Migration:** near-zero real data today, so switching launch model now is cheap. If any test
  budget exists in the dev-server origin, it does NOT carry to the Electron app — re-create or
  export/import.

## Plan (sequencing — runs on Wedge's Mac)

1. **Prereqs:** Node 22 (`nvm use 22`), `corepack enable` (Yarn 4), Xcode Command Line Tools
   (`xcode-select --install`).
2. **Rebuild native modules for Electron:** `yarn rebuild-electron`.
3. **Smoke test in dev window first:** `yarn start:desktop` — confirms the reskinned UI runs inside
   an Electron window (not a browser) before packaging.
4. **Package the app:** `yarn build:desktop` then the electron-builder step (root `build:desktop`
   wraps `bin/package-electron`). Produces `wnab-mac-<arch>.dmg` + `.app`.
5. **Install:** move `wnab.app` to `/Applications`; first launch via right-click → Open (Gatekeeper).
6. **Button resolution:** retire the localhost `<a>` in `Finances.md` (Dock icon replaces it), OR keep
   an in-vault launcher. Launcher options, best first: (a) **register a `wnab://` URL scheme** on the
   app (`app.setAsDefaultProtocolClient('wnab')` + Info.plist `CFBundleURLTypes`), then a plain markdown
   link `[Open wnab](wnab://open)` launches it natively — no plugin; (b) Shell Commands plugin running
   `open -a "wnab"`; (c) a `file:///Applications/wnab.app` link (unreliable — Obsidian may block).
7. **Document:** add the build/launch steps to `wnab/docs/` and note the data-dir choice in the vault.

## Decisions (2026-05-29 — "go with recommendations")

1. **Data dir:** patch `index.ts` to point `ACTUAL_DOCUMENT_DIR`/`ACTUAL_DATA_DIR` at
   `~/Documents/Finances/wnab/` (matches the security/backup model). Accepted trade-off: one upstream
   divergence — logged in [[PRDs/PRD-wnab-Upstream-Merge]].
2. **Button:** retire the localhost link; the Dock icon is the launcher. `wnab://` scheme is the
   optional in-vault link if wanted later.
3. **Who runs the build:** Claude Code on Wedge's Mac (Cowork can't build). Runbook: `wnab/docs/ELECTRON-BUILD.md`.
4. **Arch:** arm64-only (Apple Silicon, single machine).

Status: **approved — ready to build.** Build spec lives in `wnab/docs/ELECTRON-BUILD.md`.
