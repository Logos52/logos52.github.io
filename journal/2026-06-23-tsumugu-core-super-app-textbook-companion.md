---
date: 2026-06-23
tags: [tsumugu, tsumugu-core, reader, traditional-chinese, textbook-companion, super-app, taiwan, decision, direction]
---

# Tsumugu Core — the Traditional-first super-app and the Textbook Companion

**Verdict:** Tsumugu Core reframed from "AI graded reader" to **the Traditional-first Chinese-learning app I wish I'd had learning Mandarin in Taiwan** — a desktop-first super-app ("Pleco for computers") built on one shared brain (known-word state + the character dictionary + spaced repetition), with many content surfaces docking onto it. The centerpiece, validated end-to-end this session, is the **Textbook Companion**: generate unlimited reading bound to exactly where a learner is in their textbook, using only the vocabulary and grammar taught through that lesson. Everything else — the content model, Mini Radio Plays, a materials compiler — organizes around it. Full detail lives in the private `tsumugu-core` repo; this is the overview.

## The reframe

The product is built for a real itch, not a market position: read a lot, at my level, in Traditional, with audio. Desktop-first super-app, then iPadOS/iOS, then a companion browser extension. Traditional is the default (Simplified an easy toggle); English and Vietnamese gloss rails both stand. One brain (the LingQ-style word-status model + the encoded character dictionary + FSRS) underlies every surface: graded readers, AI-generated stories, bring-your-own text, comics, video — each readable and shadowable.

## The Textbook Companion (validated)

The pain it fixes: a textbook teaches vocabulary and grammar lesson by lesson but gives only a trickle of reading at that level. The companion turns each lesson into a controlled target — the cumulative vocabulary and grammar taught through it — and generates rich reading inside that target, featuring the lesson's new material. Built on two per-textbook sources: a per-lesson vocabulary set, and the grammar points read straight from the textbook's own "Highlights of Lessons" pages. Proven on A Course in Contemporary Chinese, Book 4 Lesson 3 — an original Dcard-register reading that stays entirely within what a learner at that point has met, while drilling the lesson's new grammar and words. A coverage check guarantees every reading is readable; the textbook's actual materials stay private.

## The content model

Breadth is the design goal: at least five rich readings per lesson, no upper bound, each about the length of the lesson's own text. A lesson's set spans formats — dialogue, monologue, narrative, authentic-register (the Dcard voice), Q&A, compare, and Mini Radio Play — rotating topics and recycling the new grammar and vocabulary across the set. Each reading is tagged by the vocabulary and grammar it uses, so it is reusable across any standard whose known-set covers it — one shared, compounding library that new curricula (HSK, TOCFL) inherit for free. Every reading ships sentence-segmented with a loop-for-shadowing audio waveform; the audio is generated on-device with natural Taiwan voices.

## Mini Radio Plays and a materials compiler

Two further threads opened. **Mini Radio Plays (迷你廣播劇)** — the multi-voice audio dramas that accompany the Taiwan course — become a content format and an original series of our own, leaning on the same shadowing audio. And a **materials compiler**: a way to ingest the scattered course materials a learner accumulates over years (textbook readings, vocab, grammar, idiom decks, teacher slides, radio plays) and organize them into per-lesson bundles by the same principle — content fingerprint maps to curriculum position. A first idiom (成語) corpus was compiled from old class materials toward the dictionary.

## How it gets built

Quality runs two layers: written, objective gates a coding agent follows (coverage, grammar conformance, naturalness) plus a human taste pass. The gates are objective enough to carry generation past the maker's own level. Compute stays on subscription and local models — no metered APIs.

## Links

- [[journal/2026-06-22-tsumugu-core-graded-reader-meets-ai-content|Tsumugu Core — graded reader meets AI content]] — the direction this session evolves.
- [[journal/2026-06-22-ulysses-design-philosophy-for-tsumugu-ed|Ulysses design philosophy]] — the reading-surface discipline it inherits.
- [[projects/tsumugu-ed|Tsumugu Encoding Dictionary]] — the reference layer underneath.

Provenance: a long working session — repo research workflows, the textbook-companion validation on ACCC, and the content model settled with Wedge; the detailed record is in the private `tsumugu-core` repo's journal of the same date.
