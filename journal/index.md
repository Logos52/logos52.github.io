---
title: "Journal"
description: "Current questions, active threads, and a high-level overview of what's moving through the knowledge base."
aliases:
  - blog/index
  - blog
type: journal-index
hideFolderListing: true
created: 2026-05-09
updated: 2026-06-17
openQuestions:
  - "Which tsumugu-ed feature earns the next build pass — example sentences, phonetic-family browse, or the 手寫 / handwriting layer?"
  - "What in the vault workflow is generativity I can hand off versus judgment I must keep?"
  - "Where is the real line between planning-as-spec (keep) and planning-as-ritual (let the model own)?"
tags:
  - system
---

# Journal

What's moving through the knowledge base right now: active projects, open questions, and the running log. Entries are working notes that graduate into the wiki once the thinking settles.

## What's top of mind

- **[[projects/tsumugu-ed|Tsumugu Encoding Dictionary]]** (`https://tsumugu-ed.com`) — primary focus. Live site with 9,663 entries + 515 grammar patterns; Composer maintenance batch green (2026-06-17). Next value is incorporating new features onto the dictionary: the **手寫 / handwriting layer** (YGSF calligraphy examples + Outlier penmanship/cursive courses, pen-focused for language learners), **example-sentence pass** (~99% of words still lack examples), and **phonetic-family browse** (composition rows already name series; needs index + page template). Backlog also holds register-lint CI wiring, 85 phonetic UNRESOLVED adjudications, and site copy fix (stories in "every entry" overstates word coverage). Grok plan mode still unsafe on CJK filenames in `tsumugu-ed` — exec-mode Python for mechanical work.
- **[[wiki/Concepts/Higher-Order Generativity vs Higher-Order Judgment|Higher-Order Generativity vs. Judgment]]** — the human edge question sharpened by the AI Industrial Revolution ingest. Generativity (synthesis, prose, design) is closing fast; judgment under stakes (accountable calls in novel, high-cost situations) still holds. The open workflow question: which vault moves are generativity I can hand off versus judgment I must keep? Ties directly to Tsumugu lane assignments (stories = top-model judgment; cribs = cheap generativity with cross-check).
- **[[wiki/Concepts/The AI Industrial Revolution|The AI Industrial Revolution]] ingest** (2026-06-15) — fused into the agentic cluster; implications still chewing. **Planning-as-spec vs planning-as-ritual:** the PRD's content stays invariant, but plan authorship may migrate to the model while intent and acceptance criteria stay human — surfaced, not settled. **Waste tokens, save time** only where verification is cheap. **Train the agent, don't do the work:** which repeated vault moves (ingest, lint, cross-link) become extracted skills? About-line reframe ("n=1 learning + encoding solutions") flagged — needs reader-words translation before shipping.

- **[[projects/wnac|WNAC]]** — budgeting and investment mindsets need deeper thought before anything ships; parked at the bottom, not driving.

## Recent entries

- [[journal/2026-06-17-Tesla-Deep-Dive-Stock-Optimus-Robotaxi-AI-Future|2026-06-17]] — Tesla Deep Dive (parallel to SpaceX): stock/valuation context, Optimus robot production timelines, Robotaxi/Cybercab, energy/AI, 1/5/10-year projections on autonomy and robotics.
- [[journal/2026-06-17-tsumugu-ed-composer-batch-and-backlog|2026-06-17]] — Tsumugu-ed: Composer maintenance batch complete (validation green, zhuyin cross-check clean); backlog recorded (example sentences, phonetic browse, handwriting lane, register lint).
- [[journal/2026-06-12-SpaceX-IPO-Stock-Craze-Future-Vision|2026-06-12]] — Addendum filed (2026-06-17): 1/5/10-year projections for Starship cadence, orbital AI data centers (1 GW end-2027 ramp), Moon base priority, Optimus robots, revenue scenarios ($25-50B 1yr; $150-500B 5yr; hundreds of B to trillions 10yr).
- [[journal/2026-06-17-tsumugu-ed-ygsf-handwriting-integration|2026-06-17]] — Tsumugu-ed: YGSF (以观书法) integration for handwriting sections — pen-focused master calligrapher examples per style (楷/行/草), complementing Outlier courses.
- [[journal/2026-06-17-tsumugu-ygsf-calligraphy-research|2026-06-17]] — Tsumugu: YGSF calligraphy research for the handwriting layer.
- [[journal/2026-06-16-tsumugu-handwriting-sections|2026-06-16]] — Tsumugu: adding handwriting and cursive sections to the encoding dictionary entries; two new Outlier courses (Cursive Crash Course + Handwriting/Penmanship Workshop) queued for private ingestion using the GSM downloader pattern.
- [[journal/2026-06-15-tsumugu-encoding-dictionary-deployment|2026-06-15]] — Tsumugu Encoding Dictionary deployed to https://tsumugu-ed.com.
- [[journal/2026-06-15-tsumugu-grammar-browse-and-site-copy|2026-06-15]] — Tsumugu grammar browse fixed; roadmap cut (FSRS out, idioms in); site copy.
- [[journal/2026-06-15-ai-industrial-revolution-ingest|2026-06-15]] — The AI Industrial Revolution ingest; the planning question; the n=1 about-line.
- [[journal/2026-06-12-taste-bound-tasks-and-agent-selection|2026-06-12]] — twelve struck taglines diagnosed: taste-bound tasks punish generate-first agents; exemplars before candidates is now standing procedure, and model selection stays empirical.
- [[journal/2026-06-12-front-facing-law-and-standards-reorder|2026-06-12]] — front-facing copy becomes law (High-Signal Front-Facing Pages: the page wants nothing from the reader); the hero line replaced after four diagnosed misses; the Atlas scare resolved — the build is committed, only the parent PRD lives in chat.
- [[journal/2026-06-12-kb-standards-commit-and-push-constraint|2026-06-12]] — KB redesign's review batch verified and committed (`bd5adc9`: High-Signal standards promoted, May docs superseded, decisions backfilled); push must run host-side — the Cowork sandbox can't auth to GitHub, and `.git` unlink is mount-blocked.
- [[journal/2026-06-12-SpaceX-IPO-Stock-Craze-Future-Vision|2026-06-12]] — SpaceX IPO (SPCX): record $75B raise at $135/share, ~$1.75T debut valuation (popped >$2.1T first day); Starlink economics, xAI merger context; Moon priority pivot; Optimus robots for lunar/Mars; orbital AI data centers (1M sats vision, GW-scale 2027+); 5–10 year multiplanetary + AI abundance outlook. Modest holding noted.
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

- Which tsumugu-ed feature earns the next build pass — example sentences, phonetic-family browse, or the handwriting layer?
- What in the vault workflow is generativity I can hand off versus judgment I must keep?
- Where is verification cheap enough to "waste tokens, save time," and where would parallel models just multiply confident slop?
- Is planning-as-ritual actually rotting on my tasks, or only on tasks where the spec is already tight?
