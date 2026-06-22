---
title: "Tsumugu: the word campaign executed — 99.2% in one parallel wave"
type: journal
created: 2026-06-13
updated: 2026-06-13
tags:
  - journal
  - tsumugu
  - dictionary
  - decisions
---

# Tsumugu: the word campaign, executed (2026-06-13, night)

Continues [[journal/2026-06-13-tsumugu-character-set-complete-word-campaign|the campaign setup]]. The seed landed and four agents ran it down in a single wave.

## What ran

- **Seed:** 3,529 normalized TOCFL word gaps prepended band-ordered into `backbone-queue` (562 of the 4,091 were already queued/authored from the frequency corpus — deduped, no collisions). TOCFL-first ordering, frequency tail intact behind it.
- **Four author-only agents**, one per disjoint slice (~1,023 words each), via the parallel-wave model: write entries only, no git / queue / LOG / cross-slice touches. Central bookkeeping (validate, commit) deferred to one pass.

## Result — TOCFL words effectively complete

**5,960 / 6,006 distinct multi-char TOCFL words authored = 99.2%.** A1, A2, B1, B2 are **100%**; **46 words remain, all C1.** Validation green across **9,481 entries** (2,526 chars + 6,955 words), ids unique, filenames canonical — four agents wrote ~4,047 entries in parallel with **zero id or filename collisions.** The author-only isolation model held at scale; per the wave-1 cost analysis it's also the cheaper path (no per-slice QA tax).

## Variant features shipped and verified

- **Cross-links are bidirectional** (台灣↔臺灣, 水分↔水份) via `related[]`.
- **140 scholar-notes** proposed on orthographic twins (注/註 water-vs-speech radical; 表/錶 clockwork specialization; 畫/劃 added knife; 僱/雇 the seasonal-hire loan). Quality high and accurate — **Wedge approved all 140.** The mechanism rode an existing `scholarNote` field the schema and style card already defined ("a variant gloss… author proposes, Wedge approves") — no new machinery.

## Edge cases / what was checked

- **The 46 skips are one dependency.** Every skipped C1 word is blocked on one of the **55 C1 characters** — cribbed and (now) cross-checked, but not yet authored. So the whole remaining gap, 46 words + 55 chars, collapses to a single action: author the 55, then sweep the 46.
- **Scholar-note side-placement (undecided):** 68 twin pairs carry the note on only one side (甚麼 has it, 什麼 doesn't). Cosmetic — cross-link still connects them. Open: mirror to both, standardize onto the orthodox form, or leave.
- **QA false positives cleared:** the register scan's hits were hedge-*meaning* headwords (也許, 說不定, 定義); the "5,327 thin" were legitimate `story:null` transparent compounds. Zero real thin entries, zero real register violations.

## Operational notes (recurring friction)

- **The `researched`→`queued` gate bit a third time.** The 55 C1 chars landed cross-checked but stuck at `researched`; nothing auto-promotes a merged-crib char to `queued`, so the author loop ignores them until a manual flip. Worth fixing at the crib-merge step (`crib_diff` could promote to `queued` once both lanes agree) so the gate stops recurring.
- **`.git` is mount-blocked in the Cowork sandbox** — commits/pushes for this repo (and the KB) run host-side only. The 4,047-entry milestone could not be committed from here; the char loop clears the stale `index.lock` host-side at startup and commits via `git add -A`. (Generalizes the earlier KB push-constraint note.)

## Status / next

- **Char loop running** in another Claude Code window (`KIND=chars`) — authors the 55 C1 chars and commits the word-campaign milestone in its first batch.
- **Then:** sweep the 46 C1 words (re-run the word agents on their `SKIPS.txt`, or a one-shot sweep) → TOCFL A–C complete, characters and words.
- **Then:** `reconcile_queues.py --apply` to sync the drifted queue (agents authored without status updates — the deferred reconciler).
- **Still parked:** the 289-entry single-source audit (Composer cross-check); the scholar-note side-placement decision.
