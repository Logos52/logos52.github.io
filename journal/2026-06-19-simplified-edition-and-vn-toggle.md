---
title: "Simplified edition decided (hard toggle, fresh component stories) and the VN toggle goes live"
type: journal
created: 2026-06-19
updated: 2026-06-19
tags:
  - journal
  - tsumugu
  - dictionary
  - decisions
  - simplified
  - vietnamese
---

# Simplified edition + VN toggle (2026-06-19)

Two dictionary threads the same day as the example-sentence work.

## Simplified edition — decided

A Simplified edition of an *encoding* dictionary has a landmine: the stories are built on Traditional forms (開 = 門 + 开; 過 → 过 drops 咼). Resolved across a few corrections:

- **Hard T/S toggle, like the Vietnamese language switch.** Not side by side — a learner sees *only* Traditional or *only* Simplified, never both, no cross-learning. Two parallel self-contained editions.
- **The Simplified encoding is authored FRESH from the Simplified components** — *not* derived from Traditional etymology and *not* teaching the simplification. 过's story is built from 辶 (walk) + 寸, never mentions 過. Judged by encoding power, folk/mnemonic allowed (many Simplified forms are arbitrary — 开 = 廾 + 一). "How Traditional became Simplified is linguist trivia" (Wedge).
- **Glyph-only for v1** (OpenCC `t2s` + `tw2sp` for free vocab swaps); curated mainland-vocabulary localization deferred to v2.
- **Scope:** measured — **982 of 2,662 chars (36%) differ** and need a Simplified story; the other 64% are identical and just convert. First phase = the **377** differing chars in A1+A2.
- **Lanes:** Opus authors the stories; **Composer is offloaded the component work** (Wedge's idea) — build a deduplicated inventory of the distinct Simplified components (讠钅纟见贝车马门…, each identity settled once, arbitrary placeholders flagged) + per-char IDS-sourced decomposition cribs, then QA. Author ≠ checker preserved.

Docs: `tsumugu/PRD-Simplified-Edition.md` + work orders `WORK-ORDER-simplified-components-composer.md` (cribs) and `WORK-ORDER-simplified-encoding-A1-A2-opus.md` (stories).

## VN toggle — reinstated and shipping

"Added a lot of Vietnamese lately; add an EN/VN toggle and push it public." Discovery: the EN/VI machine was **fully built and then retired** — render (`render_site.py` emits EN/VI siblings under `html[data-gloss]`), CSS (`.glosstog` rules still present), search (`search.js` reads `dataset.gloss`), UI strings — all there. The code even documented how to bring it back ("reinstate them here + in the nav").

So this was a reinstatement, not a build: a nav button (`.glosstog`, EN | VN) + the persisted handler in `site.js` (`ted-gloss`, default EN, sets `html[data-gloss]`). Missing-`vi` markers changed from a `…` leak to **blank** (Wedge: gaps fill soon, don't clutter). Coverage **~75–76%** → ~24% blank in VN mode, accepted. Deploy is **host-side** (sandbox `.git` is mount-blocked for deletes; push runs via `PUSH-DICTIONARY.command`).

## Open / parked

- `scholarNote` renderer still unbuilt (the 苛 illness-loan aside is data-only).
- Simplified surface pipeline (OpenCC `t2s` + the toggle wiring) is engineering still to build — the work orders produce the *stories*, not the toggle.
