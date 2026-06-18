---
title: "Vietnamese localization + Hán-Việt bridge: PRD, agent lanes, first data pilot"
type: journal
created: 2026-06-18
updated: 2026-06-18
tags:
  - journal
  - tsumugu
  - decisions
---

# Tsumugu — Vietnamese localization + Hán-Việt bridge (2026-06-18)

Opened a Vietnamese track for the dictionary. The headline reframe: this is **localization of the existing Chinese→English dictionary, not a new Vietnamese-headword dictionary** — and the encoding move that makes it more than a translation is the **Hán-Việt bridge**. Session produced a PRD, a codified agent-lane split, a review of the first data pilot, and two handoffs. Build state is well along: readings are corpus-wide and validating, with one quality leak still open.

## Decisions

**Product: localize, don't build a new dictionary.** Headwords stay Chinese; a toggle switches the metalanguage Chinese→English ↔ Chinese→Vietnamese. Ruled out (for now) the standalone "generalize the encoding dictionary to Vietnamese" idea — that's a separate future PRD.

**Translate + Hán-Việt bridge, not translate-only.** The crux: Vietnamese is written in a Latin alphabet, so the literal Form engine (decompose a character into components) has nothing to bite on. What rescues it — and arguably makes Vietnamese a *better* fit than expected — is that ~60%+ of Chinese characters have a Hán-Việt reading that *is a word the learner already carries* (國 → quốc, as in quốc gia). So the existing ~9,600-character Form/Story corpus becomes the etymological substrate for Vietnamese. The bridge is the highest-value move in the project. Translate-only kept as the lighter fallback; dropping NC ruled out (see license).

**How Form localizes:** meaning components translate straight (足 → chân); Story translates, re-hooking any that lean on an English word or a Mandarin sound-pun; the sound/reading line *gains* the Hán-Việt reading as a Vietnamese-specific enhancement (not present in the English version because an English speaker has no Sino vocabulary to anchor to).

**Metalanguage:** bilingual via the toggle now; monolingual "in-language" (Vietnamese-in-Vietnamese) deferred to a later phase.

**License unchanged — and that's deliberate.** Clarified that CC BY-NC-SA's NonCommercial clause binds *reusers*, not the rights holder. Wedge can run ads on his own site under BY-NC-SA, and NC is exactly what stops a competitor from scraping the corpus onto their own ad-supported site. So keep BY-NC-SA. Dropping NC (to BY-SA/BY) ruled out — it would hand competitors the commercial rights he wants for himself.

**Changed assumption — the project is now mildly commercial.** Wedge plans light advertising for modest revenue. Earlier today the "advertising may come later" line was removed from About; that removal stands, but re-adding an honest ad/privacy note is now his option, and an ad network (AdSense etc.) will *require* a privacy policy + likely a cookie-consent banner. This also flips the domain lean: I'd argued `.org` partly because the project read as non-commercial — commercializing tilts it back to **`tsumugu-ed.com`**, his original instinct. (Bare `tsumugu.com`/`.org` are taken.)

**Labor split:** mechanical/simple → Grok + Composer; authoring that needs a writer's eye (Form/Story prose, judgment calls) → Opus.

**Agent lanes codified so they run independently:** **Composer = code** (schema, validator, generator, EN/VI toggle, CSS; branch `vi/codegen`). **Grok = data** (Hán-Việt join, example selection, populating `hanViet`/`hanVietExample`; branch `vi/data`, plan-mode for the mass writes). The only coupling is a written **field contract**; `validate.py` is the shared gate. Grok-vs-Opus collisions inside entry JSONs avoided by splitting `.vi` keys by owner and sequencing (Grok corpus-wide first, Opus on the pilot slice after).

## Build state (checked end of session)

- `validate.py` green: 9663 entries + 515 patterns, with the extended schema.
- Composer Lane C committed on `vi/codegen`: schema + validator + EN/VI toggle, plus corpus-wide Hán-Việt search/browse/audit.
- Readings populated corpus-wide: 2659/2662 chars (3 rare-glyph misses: 褛 虥 蟅). Source `ph0ngp/hanviet-pinyin-wordlist`, with `pinyinMap` handling polyphones (足 → tú/túc). Safe to keep.
- Grok rebuilt the example selector with a real coherence gate — 112/112 pass — and fixed the native-reading leak (車 → chiến xa via Hán-Việt *xa*, not native *xe*). Good fixes landed: 三→tam giác, 足→túc cầu, 久→vĩnh cửu, 孝→hiếu thuận, 木→mộc nhĩ.

## Hán-Việt example review (the QA gate)

First pilot of 63 examples: ~51% solid, ~29% weak, ~21% outright wrong, with the wrong ones clustered on TOCFL-1 high-frequency characters (numbers, body parts). Root cause: the selector romanized arbitrary Chinese compounds into Hán-Việt without checking the result is a living Vietnamese word (七→"thất nguyệt", which no one says; it's tháng bảy). Wrote `REVIEW-hanviet-examples.md` + a Grok fix handoff: draw from a real Vietnamese lexicon, a coherence gate, an **omit-don't-fabricate** rule, reject native-reading picks.

## Outstanding

- **Living-word/omit filter still leaks.** Coherence ≠ "is a real Vietnamese word." Dead Chinese-only romanizations still pass for hard characters — 了→liễu giải, 舌→thiệt chiến, 鼻→tỵ quan (plus weak informal 七→lão thất, 二→nhị ca). These should trigger the omit rule, not produce a coherent-but-dead compound. Fix items #1 (real lexicon) and #3 (omit) need real enforcement before examples go corpus-wide.
- **Native-speaker review gate** before any Vietnamese publishes — non-negotiable; neither Opus nor the agents are native.
- **Toggle architecture** to ratify: client-side toggle (recommended — the site is ~10,376 files against Cloudflare Pages' 20k ceiling, so parallel `/vi/` pages would risk it) vs. separate URLs.
- **Scope for v1:** chars-only, or pull words (詞) in early? Grammar deferred — confirm.
- **Hygiene:** ~6,000 uncommitted entry files, and data work is sitting on `vi/codegen` rather than `vi/data` — commit, and keep the lane split clean so the parallelism actually holds.
- Opus still owes the **Vietnamese translation style guide** (unblocks Grok's bulk MT) and the Form/Story `.vi` authoring on the pilot slice.

Session artifacts (in Cowork outputs): `PRD-Vietnamese-Localization-Han-Viet-Bridge-2026-06-15.md`, `LANES-Grok-Composer.md`, `REVIEW-hanviet-examples.md`, `HANDOFF-grok-hanviet-examples-fix.md`.
