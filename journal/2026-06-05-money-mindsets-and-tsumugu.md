---
title: "A money-mindsets section, and Tsumugu's reading layer"
type: journal
created: 2026-06-05
updated: 2026-06-05
tags:
  - journal
  - money
  - language
  - tsumugu
links:
  - "[[wiki/Money/Investing and Budgeting Mindsets]]"
  - "[[journal/2026-06-04-tsumugu]]"
---

Two threads moved today: the public site grew a money section, and Tsumugu picked up the reading layer that makes it feel like the tools it's meant to replace.

## The site — a money-mindsets section

The [[journal/index|top-of-mind]] WNAC question — *what are good teachable mindsets for budgeting and investing?* — needed a home before any of the applied AI work. So the base now has a [[wiki/Money/Investing and Budgeting Mindsets|money MOC]]: a reading list of six books, each distilled to its mindsets and first principles, with a full note started for the one already read — [[wiki/Money/The Almanack of Naval Ravikant|the Almanack]]. The rest get promoted to standalone notes as they're read.

The same through-lines kept surfacing across all six — spend less than you earn, time beats timing, define *enough*, behaviour beats knowledge, money buys freedom not status, price things in life energy — which is a good sign the mindsets are real and not author quirks. The one tension worth holding: frugality-to-independence (Simple Path, Your Money or Your Life) against spending-down-on-experiences (Die With Zero), reconciled by *enough* and time-bucketing.

This is the mindset layer. The applied layer — where AI actually changes the budgeting and investment loop — is still [[projects/wnac|WNAC]]'s to work out, and the base will grow budgeting and investment nodes alongside it.

## Tsumugu — the reading layer

[[journal/2026-06-04-tsumugu|Yesterday]] was the engine; today was making it read like Migaku. The reading layer landed across the reader and YouTube:

- **Zhuyin ruby and coloured underlines.** Each word can render 注音 above the character, aligned to its pre-baked reading, with a per-status underline ramp instead of a fill — the Migaku look, scoped so the default fill model stays untouched.
- **A real Taiwan guard.** OpenCC now runs `cn→twp` (Taiwan-idiom), so 軟件 becomes 軟體 and 信息 becomes 資訊 — not just character conversion, but the vocabulary a Taiwanese reader would actually use.
- **Two-way sync without data loss.** The word store now carries provenance on every word — when, where, and from which source its status last changed — which fixed a confirmed bug where re-importing could *demote* a word already learned. Re-imports are now idempotent.
- **YouTube, the honest way.** A synced reader highlights the playing line in Tsumugu's *own* text; no code runs on youtube.com, with a local scrubber fallback when offline.
- **A richer Migaku importer.** Reading Migaku's SQLite directly — skipping soft-deleted rows, keeping each word's origin — seeds roughly 2,100 known Mandarin words with provenance, and re-applying blocks zero demotions.

Green throughout: 395 public plus 195 private tests. Still open — wiring real Netflix and YouTube caption ingest into a reading session, and the optional, default-off write-back to Migaku.
