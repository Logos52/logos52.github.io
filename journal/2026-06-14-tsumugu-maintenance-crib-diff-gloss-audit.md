---
title: "Tsumugu maintenance: crib_diff learns to catch misquotes; 273 surface"
type: journal
provenance: "Recovered to main 2026-06-22 (commit 07348ac): authored 2026-06-13/14 on the pre-Astro tsumugu-paper-ink-recolor branch, never merged before the Quartz→Astro replatform, restored in the single-branch consolidation. Historical snapshot — intentional, not orphaned; do not re-flag."
created: 2026-06-14
updated: 2026-06-14
tags:
  - journal
  - tsumugu
  - dictionary
  - decisions
---

# Tsumugu maintenance pass (2026-06-14)

A refinement day after TOCFL A–C closed. Three research/tooling jobs ran in parallel; the headline is that the dual-crib cross-check finally became trustworthy and surfaced real misquote debt.

## crib_diff: from noise to a real signal

The 1,011 `⚠ CONFLICT` banners were over-reporting badly. Diagnosis in stages:
1. **Parser noise.** The composition comparator split on `·` but not on Grok's `+`, and counted role-label differences (義 vs 形 on the same glyph) as conflicts. Hardening the parser (all separators, glyph-set + phonetic, role-agnostic) cut composition conflicts 1,011 → ~391.
2. **Composition is the wrong axis.** Even hardened, composition diffs are mostly legitimate analytical/format divergence between two independent cribbers — too noisy to gate on.
3. **The real catch is the gloss.** A misquote corrupts the 說文 **也-gloss** (敵's 仇也 vs the wrongly-carried 勍 gloss 彊也). Comparing the first `…也` clause is the verifiable atom.

**Change made:** `shuowen_conflict` (gloss mismatch) is now the `⚠ CONFLICT` trigger; composition/wording differences demote to an informational cross-check note. Result: **273 genuine 說文-gloss conflicts** corpus-wide, down from 1,011 noise — and they are real:
- 苛: grok「病也」(loan sense) vs cursor「小草也」(orthodox 說文).
- 乳: grok「玄鳥也」 — the **wrong character's** gloss, the adjacent-entry error, the same one Grok stuck on 乙.
- 三, 久: grok circular/paraphrased; cursor correct.

Grok has a recurring **adjacent-entry misquote** pattern — exactly the failure class the dual-crib line was built to catch.

## Correction to yesterday's "audit clean"

I called the 123 single-source audit clean (0 misquotes). **That was premature** — my ad-hoc extraction wasn't finding comparable glosses, so it compared nothing. With the real criterion: **15 of the 123 have genuine gloss conflicts** (競 罷 耽 蠶 衫 覆 誇 誕 贏 醉 醋 鈔 鋪 預 齒), part of the 273 corpus-wide. The single-source debt is **not** cleared; it's now precisely scoped and exported (`batches/maintenance-2026-06-14/GLOSS-CONFLICTS.md` + `.txt`).

## Also done

- **Queue auto-promote:** `crib_diff` now sets merged-crib chars to `queued` (authored stays authored), killing the recurring `researched→queued` gate that bit three times. Validated: 0 demotions, 0 bad re-queues.
- **Phonetics (Grok + Composer):** `PHONETIC UNRESOLVED` 144 → **50**, the 50 being the genuine 無聲 floor (會意/pictographs).
- **Scholar-notes mirrored** onto **119** sibling entries — every orthographic-twin pair now carries the split explanation on both sides, so a reader landing on either is self-served.
- Tree green throughout: 9,663 entries valid.

## Outstanding

- **273 gloss-conflict adjudication** — the real quality backlog. Mostly Grok glosses that Cursor corrects; an Opus pass over `GLOSS-CONFLICTS.txt` fixes the grounding. The biggest genuinely-owed item now.
- **50 no-phonetics** — verify they're truly 無聲, then close.
- **Reach:** 579-word frequency tail; C2 (needs external list).
- All of the above is **uncommitted** (host-side `.git` mount-block) — needs a host-side commit.
