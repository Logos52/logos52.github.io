---
title: "Tsumugu production: site renders at scale, custom CJK search built — and the crc32 bug the data tests missed"
type: journal
provenance: "Recovered to main 2026-06-22 (commit 07348ac): authored 2026-06-13/14 on the pre-Astro tsumugu-paper-ink-recolor branch, never merged before the Quartz→Astro replatform, restored in the single-branch consolidation. Historical snapshot — intentional, not orphaned; do not re-flag."
created: 2026-06-14
updated: 2026-06-14
tags:
  - journal
  - tsumugu
  - dictionary
  - production
  - decisions
---

# Tsumugu production phase: search built (2026-06-14)

The dictionary was wrapped (content done), so production opened with the **dictionary site**.

## Render holds at scale

The bare static emitter (`render_site.py`) was sized in its PRD for 433 L1 pages. At the real 9,663 it still holds: **9.7 s build, 3.2 KB entry pages, 52 MB / 9,667 pages.** The ~10k framework-reconsideration trigger needs build-time-in-minutes too, so the emitter stays. The one criterion that broke was the **search index** — a single 471 KB-gz file, fatal on cheap devices, which is the whole audience.

## Custom CJK-first search — decided and proven

Mission framing (Wedge): reach every student, including cheap devices, and search the *encoding* (component/phonetic/etymology), not just definitions — the differentiator. Off-the-shelf each fails one axis: Lunr/FlexSearch ship the whole index upfront; Algolia/Meili need a server; **Pagefind** nails sharded delivery but its CJK is word-segmentation and can't do substring (the encoding search).

Decision: **build a custom CJK-first sharded index** — character n-grams for true substring, pinyin/zhuyin/English, encoding facets, sharded for lazy load. PRD: `PRD-Dictionary-Search-CJK-2026-06-14.md`. **P0 prototype proved it on real data:** first-load ~5 KB, per-query ~3 KB, **substring recall 100%**, facets work — *beating* Pagefind's <30 KB on the cheap-device metric. Composer built P1–P3 from the prototype.

## The crc32 parity bug — and the verification lesson

Composer's build verified clean on the **data layer**: max shard 2.9 KB, deterministic, variants (台↔檯↔臺), facets, 100% recall. But the **browser smoke test failed** on multi-char words and English. Two bugs:

1. **CJK shard-routing parity (the real one).** The client's JS `crc32` hashes **UTF-16 code units** (`charCodeAt & 0xFF`); the build's Python `zlib.crc32` hashes **UTF-8 bytes**. They disagree on the shard for most characters (心 → client 7, build 52; 水 → 56 vs 45), coinciding only by luck (理 56/56, 口 15/15). So search silently fails wherever the hashes differ — most of the corpus. Fix: the client must crc32 over **UTF-8 bytes** (`TextEncoder`), matching the build.
2. **English routing.** `queryKind` sends any Latin text to the pinyin branch; `'en'` is unreachable. "heart" searches the pinyin shards. Fix: Latin queries search **both** pinyin and English shards.

**Lesson worth keeping:** my acceptance test loaded *all* shards into one merged index and got 100% recall — which is exactly why it missed the bug. The break was in the client's per-shard `crc32` routing, and merging the shards bypassed it. **A sharded search must be verified through the client's real shard computation (or in-browser), never the merged index.** Added to the work order's acceptance criteria.

## State

- Both fixes + the SEO build go to Composer next (`WORK-ORDER-search-build.md` P4 + `WORK-ORDER-seo.md`).
- Everything uncommitted (host-side); the commit also still carries the gloss-fix + maintenance + re-rendered site.
- SEO research done (DefinedTerm JSON-LD, sitemap, crawlable-DOM, crawl-budget non-issue at <10k pages); now a work order.
