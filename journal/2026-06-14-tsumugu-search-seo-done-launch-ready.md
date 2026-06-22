---
title: "Tsumugu: search + SEO done, site launch-ready (bar front-page copy)"
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

# Tsumugu: search + SEO land, site is launch-ready (2026-06-14)

Composer's P4 + SEO came back; verified — this time through the client's real shard routing, the lesson from the crc bug.

## Verified

- **Search P4 fixed.** crc32 parity: the client now hashes UTF-8 (`TextEncoder`), matching the build on every sampled char; 心理 resolves to its 2 postings via the client's own shard fetch. English: the `latin` dispatch searches both pinyin and English shards — "heart" → 25 entries. Tested through the client's routing, not the merged index that hid the bug.
- **SEO done.** `DefinedTerm` JSON-LD per page; `sitemap.xml` (9,667 URLs) + `robots.txt`; per-page title/description/canonical/`lang`/OpenGraph. Critically, the encoding prose is in **static HTML, not JS-injected** (view-source on 一 shows the form analysis) — so the differentiator is crawlable.
- **Site health:** 2,662/2,662 char pages, 7,001/7,001 word pages, **0 broken links** across 991 checked.

## The one real gap found

**The front page still reads "all 219 TOCFL Level 1 characters" and the browse is L1-only.** Never updated for the A–C corpus — it was a delta I flagged but never assigned. It misrepresents a 9,663-entry dictionary as a 219-character demo. Launch-blocking; folded into the launch work order as a pre-launch render fix (front-page copy → A–C; browse → band sections A1–C1, the framework-aware design decided for HSK-readiness).

## Verification lesson (carried forward)

Sharded search must be verified through the client's actual shard computation. The earlier "100% recall" passed by merging all shards, bypassing the per-shard `crc32` routing that was the bug. The work order's acceptance now has an explicit parity gate.

## Launch path

`WORK-ORDER-publish-launch.md`: Part A pre-launch render fixes (front page + browse), Part B publish runbook (Cloudflare Registrar → GitHub Pages, `PUSH-DICTIONARY.command`, `SITE_ORIGIN`, GSC + Cloudflare analytics, CC BY-NC-SA + counsel-before-launch per the site PRD). Still outstanding: the large host-side commit (everything from gloss fixes through SEO), Wedge's browser checks (search UX, Rich Results validator, Lighthouse), and the deferred `POLISH-BACKLOG` (50 無聲, 276 cribs, 579 freq tail, C2, example sentences, audio).
