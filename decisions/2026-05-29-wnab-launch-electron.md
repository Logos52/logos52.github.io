---
title: "wnab launches as an Electron desktop app"
type: decision
status: active
created: 2026-05-29
updated: 2026-05-29
ruled-out:
  - "localhost dev-server as the product"
  - "GitHub Pages / hosted static (v1)"
tags:
  - decisions
  - wnab
  - electron
---

# wnab launches as an Electron desktop app

**Decision:** Package wnab as a native macOS Electron app (one Dock click opens the whole program),
reusing Actual's bundled `desktop-electron` wrapper. Data lives on-device at
`~/Documents/Finances/wnab/`; arm64-only; the localhost button is retired.

**Reasoning:** The dev-server/localhost model isn't a product — a bare link to `yarn start` only works
while a terminal is running (and the old button even pointed at the wrong port). Electron gives a real
one-click launch, no server, data on-device — matching the no-server/private model — and it's reuse,
not new code (Actual ships this way).

**Ruled out:** *localhost-as-product* (fragile, assumes a running dev server); *GitHub Pages / hosted
static for v1* (data becomes browser-local per-device, and Actual's WASM needs COOP/COEP headers Pages
can't set). Pages remains a possible later option for zero-install access.

See [[PRDs/PRD-wnab-Electron-Launch]] and the runbook `wnab/docs/ELECTRON-BUILD.md`.
