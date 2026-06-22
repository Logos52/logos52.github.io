---
title: "Tsumugu: the seed-gate unblock, and named entities enter the dictionary"
type: journal
provenance: "Recovered to main 2026-06-22 (commit 07348ac): authored 2026-06-13/14 on the pre-Astro tsumugu-paper-ink-recolor branch, never merged before the Quartz→Astro replatform, restored in the single-branch consolidation. Historical snapshot — intentional, not orphaned; do not re-flag."
created: 2026-06-13
updated: 2026-06-13
tags:
  - journal
  - tsumugu
  - dictionary
  - decisions
---

# Tsumugu: the seed-gate unblock (2026-06-13)

Ran a status check on the parallel-wave char batch (742 entry-missing B2/C1 characters, 10 waves) and found cribbing far ahead of authoring: 92% Grok-cribbed, 84% merged, but only ~10% authored, and the whole pipeline idle for 30+ minutes. The diagnosis was not capacity — it was a status gate.

## The actual bottleneck

The author loop only pulls characters at `status:"queued"`. The batch's crib-ready characters were sitting at `status:"researched"` (cribbed, merged crib present, but never promoted), and only ~12 items were ever `queued`. The loop drained those and stalled. The runbook's STAGE-ONLY note had deliberately left queue-seeding for a manual go; the go was never given. So authoring was blocked behind a one-field promotion the whole time.

**Fix:** flipped all crib-ready chars `researched → queued` (681 flipped → 695 queued, 0 researched). Backed up to `char-queue.json.bak-2026-06-13`. Opus can now author the backlog to the usage-window edge.

## Validation was never actually broken

Every committed batch carried "validation NEEDS-RUN / blocked by sandbox permission gate." That gate was a stale `jsonschema` version, not a real failure. Ran the real validator: **green, 2425 entries valid, ids unique, filenames canonical**; `check-zhuyin` reports all match. Ruled out a blanket `gen_helpers.py finalize` — it re-serializes 2,716 files for zero content change (finalize is a per-new-file step the loop already auto-runs). The pending-finalize notes in LOG are stale annotations, not work.

## Named entities enter the dictionary

Reviewed the word-lane skip decisions. Most skips are correct lexicography (proper nouns, numeral+measure phrases, verb+localizer, aspect particles — not standalone lexemes). But the proper-noun policy was too aggressive. New rule: **thorough inclusion** — it is still a dictionary, and named entities carry memorable naming stories and cultural insight (the 百度 / Xin Qiji 青玉案 angle). Countries, continents, major textbook geography, landmarks, most brands, national-civics terms, and important fictional names are now in; very-low-value source-text artifacts stay out.

**Corpus-bias caveat (key realization):** `backbone-queue.json`'s `freqRank` is corpus frequency from a source text about Hubei province / Chinese governance — so 石首 (a county) outranks 上海 and every European country. Raw rank is unusable as an importance cutoff; inclusion was decided on textbook/cultural merit instead.

Flipped 21 word-lane items `skipped → queued`: 天安門 武漢 上海 南京 長江 襄陽 荊州 英國 法國 德國 印度 歐洲 百度 百科 國務院 人大 國民黨 韋小寶, plus three common nouns that had been wrongly skipped (政體, 法規, 武功). Left skipped as agreed: 湖北 石首 武漢市 湖北省 自治區 全省 本級 常委會 我國 外交部. Backed up to `backbone-queue.json.bak-2026-06-13`. Reduplication (看看) is now in by policy.

## The dependency this exposed

The author prompt couldn't handle proper nouns — its etymology discipline skip-and-logs anything with no 說文, which is every named entity. Added a **named-entity branch to `RUN-PROMPT.md`**: author as `kind:"word"`, built around what it is (one-line definition), per-glyph breakdown only where the choice carries meaning (semantic names get the literal sense; pure transliterations like 印度/韋小寶 are flagged sound-not-meaning), a naming story / significance blurb, the same grounding rule (unverified origins go mnemonic or bare-with-openQuestions, never asserted), and a `meta.notes` `named-entity (<type>)` tag for filterability. PRD-first was waived for this by explicit call.

## Named-entity branch: dry-run QA passed, three tightenings added

Dry-ran the branch on four cases before committing the loop to it: 印度 (phonetic transliteration), 百度 (brand), 天安門 (semantic name), 韋小寶 (fiction). All four produced good entries — Wedge approved them. Marquee grounding verified by web search: 百度 ← Xin Qiji 〈青玉案·元夕〉「眾裡尋他千百度」 (sourced, not openQuestion); 天安門 ← 承天門 (1417, Ming) renamed 天安門 (1651, Qing) from 「受命於天，安邦治國」.

The dry-run exposed three gaps the prompt was silent on — silence means the loop improvises, so they're now written into `RUN-PROMPT.md`:
1. **`meta.level` = `named-entity`** — these aren't TOCFL-banded; don't invent a band number.
2. **Person name-structure** — surname is a name-element (not meaning); break down the given name only where it carries sense (韋小寶 = 韋 surname + 小寶 "little treasure").
3. **Fiction significance is interpretive** — frame as role/reception ("Jin Yong's most subversive hero"), not asserted like a sourced etymology.

The four were NOT hand-injected into the corpus (collision risk with the concurrent loop) — the word lane authors them fresh; the dry-run was proof-of-branch only.

## State and next moves

- 695 chars queued; word lane carries the 21 new named entities. Both queues backed up.
- **Sequencing flag:** with 695 chars queued the default loop does char runs until that drops below 60 — the named entities sit idle unless the word lane is run explicitly (`MODEL=opus KIND=words ./RUN-AUTHORING-LOOP.command`). First word run doubles as QA of the named-entity branch (eyeball 百度 / 韋小寶 before they all flow through).
- **Fable is down** (government shutdown) → Opus owns QA now; can run "QA N random from <lane>" and write verdicts into LOG.md.
- **Outstanding:** the 109 B1 straggler characters (cribbed, never authored) still unresolved; Cursor cross-check sweep on waves 06–10 running in a separate window; named-entity branch unproven until a word run lands.
