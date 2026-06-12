---
title: "Tsumugu: three-model bake-off settles the lanes; dual-crib cross-check goes live"
type: journal
created: 2026-06-12
updated: 2026-06-12
tags:
  - journal
  - tsumugu
  - dictionary
  - decisions
---

# Tsumugu: the bake-off day (2026-06-12, later)

Lane assignments stopped being opinions today. Grok Build and Cursor ran identical bake-offs (10 word entries + 10 research cribs, fixed sets, Fable judging against the corpus bar); Grok additionally ran a blind story test. Full sheets: tsumugu-ed `batches/bakeoff/VERDICT.md`.

## Results

**Research cribs — both viable, differently fallible.** Grok A−: genuine 說文 throughout, phonetics named, the 話 corruption callout (𠯑 worn into 舌) done right, rich series cargo. Cursor: fundamentals accurate and sometimes deep (保's child-on-back, 聲's stone chime; caught 敵's 啻-in-說文 vs 啇-in-glyph split that Grok missed) — but misquoted 敵's 說文 line with 勍's gloss (彊也 for 仇也), the adjacent-entry error class.

**Stories — Fable/top-model, now confirmed against two challengers.** Grok's sketches: 9/10 carry the announcing tail ("— the habit forms"), the exact Round 5–6 strike class; Wedge's blind preference matched the analysis before seeing it. Cursor's word stories: accurate fundamentals, but vignette-stapling (two component scenes joined by a dash, no fused moment). Salvage tested: polish = full rewrite; scenes survive, wording doesn't. Stories remain top-model exclusively.

**Words — stay Sonnet**; both challengers scored below bar (Grok: ten null stories; both: circular X的X anchors — now a named offender after recurring across two models). Sonnet's own word audit is still owed.

## The architecture upgrade: dual-crib cross-checking

The 敵 misquote produced the day's best idea: Grok and Cursor crib the same characters independently on separate budgets; `scripts/crib_diff.py` merges into `sources/cribs/` — agreements become double-sourced facts ("✓ cross-checked"), disagreements become ⚠ CONFLICT blocks the author lane must adjudicate or render bare. Smoke-tested on the real 敵 pair: caught it. Confident misquotes — the one crib failure mode — are now self-catching, at zero Claude cost.

## Also learned

- Blind-test hygiene: 休 had to be excluded from Event C — it was a calibration example in the main bake-off, and Grok reproduced it verbatim. Test sets must exclude calibration items.
- grok-shell panics on CJK bytes in plan-mode path display (clean upstream repro on `jie1shou4-接受.json`); lane runs exec-mode with ASCII crib filenames. Reported to xAI.
- The style card kept compounding: announcing tails, vignette-stapling, circular anchors, heading-echo, adjacent-entry misquotes — five named offenders added from model strikes, same mechanism as the human rounds.

## State and queue

Corpus 469 entries, validation green. Prompts staged for the full line: `PROMPT-GROK-RESEARCH-RUN1` (30 cribs), `PROMPT-CURSOR-RESEARCH-RUN1` (same set, cross-check), `PROMPT-AUTHOR-CHARS` (Claude Code: merge → adjudicate → author). Outstanding: run the three in sequence; Sonnet word-lane audit; TOCFL list swap; sentence-pass PRD later. Memory mirror of this state written to `~/Projects/memory/tsumugu-production-line.md` (+ new root CLAUDE.md pointer) so future sessions start warm.
