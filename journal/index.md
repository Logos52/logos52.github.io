---
title: "Journal"
description: "Current questions, active threads, and a high-level overview of what's moving through the knowledge base."
aliases:
  - blog/index
  - blog
type: journal-index
hideFolderListing: true
created: 2026-05-09
updated: 2026-06-13
openQuestions:
  - "What does Tsumugu's reading loop still need before it earns a daily Mandarin session?"
  - "Which money mindset gets taught next — and does it land in WNAC or as a wiki node?"
  - "What would make the YouTube reader better than subtitles plus dictionary lookup?"
tags:
  - system
---

# Journal

What's moving through the knowledge base right now: active projects, open questions, and the running log. Entries are working notes that graduate into the wiki once the thinking settles.

## What's top of mind

- **[[projects/wnac|WNAC]]** — how best do we incorporate AI with budgeting + investment? what are good teachable mindsets we can learn about investing and budgeting?
- **[[projects/cos|COS]]** — stuck in a "Do I really need it?" feedback loop. the question is an unequivocal "yes" but the pieces are not coming together, and still trying to work out an intuitive solution. the intuitive solution might be to work through each module individually starting with first principles
- **[[projects/llm-knowledge-base|LLM-Knowledge-Base]]** — Coordinating with WNAC, we intend to expand into budgeting + investment nodes
- **Next Projects** — these will probably be related to enabler skills, like health, fitness, diet etc. Also considering projects and expansions related to language learning, but these require some serious forethought

## Recent entries

- [[journal/2026-06-14-tsumugu-ed-extracted-deploy-ready|2026-06-14]] — Dictionary extracted to its own top-level repo `tsumugu-ed` (matching the name the PRDs already use); the big pending commit landed in the move, validate green from the new path, 15 hardcoded-path files fixed. Deploy decided: **Cloudflare Pages over GitHub Pages** (commercial-use + unlimited bandwidth), Cloudflare Registrar domain (~$8–10/yr), build-on-Pages since `exports/site` is gitignored. Full click-by-click in `tsumugu-ed/DEPLOY-WALKTHROUGH.md`.
- [[journal/2026-06-14-tsumugu-search-seo-done-launch-ready|2026-06-14]] — Search P4 + SEO verified (crc32 parity fixed via UTF-8, 心理 resolves through the client's real routing; DefinedTerm JSON-LD, sitemap, crawlable encoding prose). Site is launch-ready and healthy (9,663/9,663 pages, 0 broken links) — except the front page still says "all 219 TOCFL Level 1 characters" and browse is L1-only. Launch work order drafted (front-page/browse fix + Cloudflare→Pages publish runbook).
- [[journal/2026-06-14-tsumugu-production-search-built-crc-bug|2026-06-14]] — Production opens: the static emitter holds at 9,663 (9.7s, 3KB pages), only the search index broke the cheap-device floor → custom CJK-first sharded search, P0-proven (5KB first-load, 100% substring recall, beats Pagefind). Composer built it; browser smoke test caught a **crc32 parity bug** (client hashes UTF-16, build hashes UTF-8 → wrong shard for most chars) the merged-index data test missed — lesson: verify sharded search through the client's real shard computation.
- [[journal/2026-06-14-tsumugu-dictionary-wrapped|2026-06-14]] — **Dictionary wrapped.** Content phase called done: 9,663 entries, TOCFL A–C complete, misquote debt adjudicated, tooling fixed. Four polish items explicitly deferred to `POLISH-BACKLOG.md` (50 無聲, 276 cosmetic crib re-sync, 579 frequency tail, C2). One outstanding action — the host-side commit of 2,267 files. Pivoting to production phase.
- [[journal/2026-06-14-tsumugu-maintenance-crib-diff-gloss-audit|2026-06-14]] — Maintenance: `crib_diff` re-pointed from noisy composition diffing to 說文 **也-gloss** comparison — conflicts 1,011 → **273 real** misquotes (苛, 乳's adjacent-entry error, etc.). Corrects yesterday's premature "audit clean": 15 of the 123 single-source entries have genuine gloss conflicts. Queue auto-promote kills the `researched→queued` gate; phonetics 144→50; scholar-notes mirrored onto 119 twins.
- [[journal/2026-06-13-tsumugu-tocfl-a-to-c-complete|2026-06-13]] — **Milestone:** TOCFL A–C complete — every character and word A1 through C1 (words 6,006/6,006, chars 100%, corpus 9,663, validation green). The final 46 C1 words authored directly once their characters landed; reconciler synced 3,991 statuses; the 579 still queued are the non-TOCFL frequency tail. Remaining is refinement (single-source audit, scholar-note placement), not gaps.
- [[journal/2026-06-13-tsumugu-word-campaign-executed|2026-06-13]] — The TOCFL word campaign runs in one parallel wave: four author-only agents on disjoint slices write ~4,047 entries with zero collisions, taking words to 99.2% (5,960/6,006; A1–B2 100%, 46 C1 left, all blocked on the 55 still-unauthored C1 chars). 140 variant scholar-notes proposed and approved; the `researched→queued` gate recurs a third time; `.git` mount-block means commits run host-side via the char loop.
- [[journal/2026-06-13-tsumugu-character-set-complete-word-campaign|2026-06-13]] — The TOCFL character set effectively closes (A1–B2 100%, C1 down to 55, C2 absent from the 8000-list); the bottleneck flips to words, where coverage lagged to ~32% because the word lane drained a frequency corpus, not TOCFL — decision to seed the normalized 3,948-word gap band-ordered, 3–4 parallel agents, TOCFL-first; PRD written.
- [[journal/2026-06-13-step4-char-wave-review-and-crib-diff-scoping|2026-06-13]] — Orchestrator review of Opus's Step-4 char wave: validation re-confirmed green (2716 entries), both commits real and scoped, and the three conflict resolutions (彌=弓+爾, 謎=言+迷, 賜=貝+易) verified paleographically correct — verdict ship it; the one correction is that `crib_diff`'s `green=0` is a mis-scoped comparator (Composition/Series ~98% format-noise, but 說文 conflicts are real), so the `norm()` hardening must be section-aware, not blanket.
- [[journal/2026-06-13-tsumugu-seed-gate-and-named-entities|2026-06-13]] — Tsumugu authoring was stalled on a status gate (crib-ready chars stuck at `researched`, never promoted to `queued`); seeded 695 chars, confirmed validation actually green, and opened the dictionary to named entities (countries, landmarks, brands, fiction) with a new naming-story prompt branch — corpus `freqRank` ruled unusable (Hubei source bias).
- [[journal/2026-06-12-taste-bound-tasks-and-agent-selection|2026-06-12]] — twelve struck taglines diagnosed: taste-bound tasks punish generate-first agents; exemplars before candidates is now standing procedure, and model selection stays empirical.
- [[journal/2026-06-12-front-facing-law-and-standards-reorder|2026-06-12]] — front-facing copy becomes law (High-Signal Front-Facing Pages: the page wants nothing from the reader); the hero line replaced after four diagnosed misses; the Atlas scare resolved — the build is committed, only the parent PRD lives in chat.
- [[journal/2026-06-12-kb-standards-commit-and-push-constraint|2026-06-12]] — KB redesign's review batch verified and committed (`bd5adc9`: High-Signal standards promoted, May docs superseded, decisions backfilled); push must run host-side — the Cowork sandbox can't auth to GitHub, and `.git` unlink is mount-blocked.
- [[journal/2026-06-12-grok-workstream-maximum-offload|2026-06-12]] — Grok workstream PRD: cribs + mechanics + fact-audits offloaded (TOCFL A-gaps→B1 campaign); QA split by independence; Fable keeps form, story, judgment.
- [[journal/2026-06-12-tsumugu-bakeoff-and-dual-crib-line|2026-06-12]] — Three-model bake-off settles the lanes: Grok+Cursor crib with cross-check diffing (敵's misquote caught), stories confirmed top-model-only, five new style-card offenders from model strikes.
- [[journal/2026-06-12-tsumugu-model-tiering-and-sonnet-researcher|2026-06-12]] — Tsumugu model tiering tested: Sonnet unsafe solo on chars, Opus viable, words to Sonnet; the Sonnet-as-researcher inversion logged for a pilot.

- [[journal/2026-06-11-tsumugu-authoring-opens-and-encoding-review|2026-06-11]] — Tsumugu authoring opens: 53 entries, characters confirmed as the heart; encoding review lands drift badges, lookup-first identity, and the overlay rule (Rounds 7–8).
- [[journal/2026-06-11-tsumugu-dictionary-custody-and-display|2026-06-11]] — Tsumugu dictionary: style pass shipped corpus-wide, content gets a private repo (tsumugu-ed) + scaling PRD, display rules locked (FORM first, tap-to-reveal, shift-to-peek).
- [[journal/2026-06-11-living-atlas-and-decision-writing|2026-06-11]] — Living Atlas redesign decided (Quartz reskin over Astro rebuild); High-Signal Decision Writing standard installed across all projects.
- [[journal/2026-06-06-tsumugu-voice|2026-06-06]] — Tsumugu grows a voice: local Qwen3-TTS per-sentence audio replaces the Supergrok plan; engine locked by bake-off.
- [[journal/2026-06-05-money-mindsets-and-tsumugu|2026-06-05]] — a money-mindsets reading list on the site, and Tsumugu's Migaku-style reading layer (ruby, sync, YouTube).
- [[journal/2026-06-04-tsumugu|2026-06-04]] — Tsumugu: built overnight (Phases 0–7) and turning it into a first real Traditional-Mandarin read.
- [[journal/2026-06-03-ai-mandarin-reader|2026-06-03]] — idea logged: an AI reader for Traditional Mandarin (graded reader × LLM-wiki), for later.
- [[journal/2026-06-02-front-facing-redesign|2026-06-02]] — redesigned the public front: new Projects section and a declutter pass.
- [[journal/2026-05-28-Reflections-on-Wiki-Bloat-Life-OS-Red-Teaming-and-Agentic-Focus|2026-05-28]] — returned primary work to the knowledge base after the cos dashboard experiment proved clunky; wiki-bloat and rabbit-hole concerns.
- [[journal/calendar#2026-05-21|2026-05-21]] — restructured the L4→L1 pipeline; promoted the Focus Management and Social Media pages.

More in the [[journal/calendar|Journal Calendar]].

## Essays

Finished, stable pieces — the journal's open questions, settled enough to stand alone.

- [[journal/on-red-teams-closure|On Red Team's Closure]] — what a leaner military should have kept from Red Team, and what was right to cut.
- [[journal/experiences|Experiences]] — operating principles drawn from lived experience (Taiwan 2020, Red Team training).

## Review prompts

- What's the smallest version of cos worth using every day — and what's getting overbuilt while the pieces aren't coming together?
- Where would AI genuinely change budgeting or investing, and where is it just being added because it can be?
- Which budgeting or investing mindset is worth teaching next — and does it belong in WNAC or as a wiki node?
- Which enabler skill (health, fitness, diet) is worth making a real project now, and which is still on the someday list?
