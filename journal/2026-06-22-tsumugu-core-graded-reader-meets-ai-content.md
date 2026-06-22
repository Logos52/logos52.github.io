---
date: 2026-06-22
tags: [tsumugu, tsumugu-core, reader, ai-content, graded-reader, han-viet, english, vietnamese, monetization, copyright, comics, decision, direction]
---

# Tsumugu Core — graded reader meets AI-generated content

**Verdict:** Tsumugu Core is the official next direction — a public website of AI-generated, level-graded Chinese reading (Simplified or Traditional), served to English-L1 and Vietnamese-L1 learners on independent rails: English→Chinese and Vietnamese→Chinese. Generating and owning the content dissolves the two walls that sank every earlier version — copyright (no raws, no licensed catalog) and OCR (no images, no camera, no local model). The reader pairs Du Chinese's graded polish with LingQ's import and known-word tracking, sits on top of the Tsumugu dictionary as its reference layer, and keeps the Hán-Việt cognate bridge as the one thing no competitor has. The Vietnamese rail is the differentiated moat; the English rail is the larger, higher-ARPU audience that funds the mission. This entry records the full day's exploration — every path, not only the chosen one — so the rejected and parked ideas stay findable.

Provenance: a full-day exploration thread grounded by five web-sourced, adversarially fact-checked workflows — monetization/reach `wf_4fee9c18-98d`, web-novel/convert ecosystem `wf_93a29a16-c35`, client-side legal posture `wf_f18501ec-571`, comics/manhua/OCR `wf_1d3ff037-6c4`. Lands the thread opened in [[journal/2026-06-22-monetization-reach-and-web-novel-reader|the monetization + web-novel entry]]; figures below are recoverable from the run blobs (per-site traffic numbers are point-in-time third-party estimates).

---

## How we got here (the thread)

The day started at "how do I monetize the dictionary, free with ads," and walked through: Pleco's ecosystem → the Vietnamese web-novel "convert" world → a Migaku-style reading overlay → the legal and comics deep-dives → the non-technical-user reality of OCR → and landed on **owned, AI-generated graded content with two reader rails**. The direction shifted three times, and each shift was forced by a wall:

1. **Dictionary alone won't pay.** Ads reward engagement, and a dictionary is a low-frequency lookup, so a free Vietnamese dictionary earns near its hosting cost. → build a *reader*.
2. **A reader over borrowed content hits copyright.** Web novels and manhua are someone else's IP. → bring-your-own-text, or own the content.
3. **Comics force OCR, which a non-technical user can't run.** → text, not images; and ultimately, content we generate.

The endpoint removes all three walls at once.

---

## The whole map of ideas

| Idea | Call | One-line reason |
|---|---|---|
| **AI-generated graded reader (Tsumugu Core)** | **CHOSEN** | Owns the content → no copyright, no OCR; reuses the engine + dictionary + bands |
| Dual EN + VI rails | **CHOSEN** | EN = volume/ARPU funds VI = the moat |
| BYO-text importer (LingQ-style) | **CHOSEN (feature)** | Clean client-side path for users who already have a raw |
| Known-word login + dictionary linkage | **CHOSEN** | The LingQ/Migaku status layer + drives traffic into Tsumugu-ed |
| Hán-Việt cognate bridge | **CHOSEN (the moat)** | "You already know this morpheme" — unique to VI, unbuilt elsewhere |
| Web-novel / convert reader | **Demoted → BYO import** | Audience is real but consumption-only, and the content is copyrighted |
| Manhua / webtoon comic reader | **Deferred** | Gated on an in-browser OCR quality eval; copyright heavier; competitor exists |
| Browser extension as the front door | **Demoted → desktop add-on** | Mobile has no extensions; the audience is mobile-first |
| Dataset licensing (Hán-Việt corpus) | **Parked upside** | Sell the corpus into an incumbent — "Outlier of the Vietnamese side" |
| Anki/SRS deck as a product | **Parked upside** | Near-zero build; monetizes the authored examples directly |
| B2B / university licensing | **Parked upside** | Budget-set, not ARPU-set; unproven demand, validate one pilot |
| Donations (Ko-fi / GitHub Sponsors) | **Do anytime** | Zero cost, philosophy-consistent, pure upside |
| Pleco free user-dictionary | **Optional funnel** | A weekend; goodwill + reach into serious learners |
| Paid Pleco add-on (EN character-mechanism) | **Opportunistic only** | Monetizes high-ARPU EN audience but strands the VI bridge |
| Standalone native iOS/Android first | **Deferred** | Capacitor-wrap the web after the model proves |
| Full Pleco competitor | **Rejected** | Multi-year trap on Pleco's home turf (exclusive print-dict licensing) |
| English convert / scaffolded-raw reader | **Rejected** | No Sinitic substrate → full translation wins; LLM-gloss is a commodity |
| Japanese "read-through via Hán-Việt" | **Rejected as headline** | Too lossy (kango ~18–20% of casual prose); demote to a mnemonic |
| Korean (Hanja) / Japanese learner bridge | **Later probe** | Same architecture, bigger/different markets; after the CN core proves |
| Monolingual convert consumption tool | **Rejected** | Saturated free/pirated market, your depth is dead weight, copyright |
| Hosting raws / licensed comic catalog | **Out** | Infringing, or solo-infeasible deals |

---

## Research findings (the grounding)

### Monetization & reach
Ads are impressions × CPM, and both terms fight a dictionary: low visit frequency, and Vietnamese traffic at one of the world's lowest CPMs (~$1.8–2.2 vs US ~$5–15+). Vietnam is the #1 Mandarin-study market by HSK volume (~146k test-takers, 2025) and among the lowest-monetizing audiences — so a free VI dictionary's ad line lands near hosting cost. Engagement is the lever; a reading surface is where ad impressions and authoring investment both compound. The free tier's real value is reach, credibility, and SEO, not the ad pennies. Reference learner tools that actually monetize all charge: LingQ ~$13/mo, Satori ~$9, Readibu ~$5, Migaku ~$10, Pleco à la carte.

### Pleco
Pleco sells curated third-party add-on dictionaries and has become "a publisher working directly with authors." The closest precedent is the Outlier Dictionary (character-component/etymology, very like Tsumugu's mechanism depth), sold in-app at $29.99 / $59.99. But: no public submission program and no published revenue split (a private deal with the founder); **no Vietnamese product line** ("too busy with Chinese"), so the Hán-Việt differentiator has no paid home there; the free "user dictionary" path is real but flat-text and requires owning the paid Flashcard add-on. Building a full Pleco competitor is a multi-year trap — Pleco's true moat is exclusive print-dictionary licensing (Oxford, FLTRP) a solo dev can't win.

### The Vietnamese web-novel "convert" ecosystem
A large grassroots audience reads Chinese raws through "convert" — near-mechanical word-for-word substitution into Sino-Vietnamese (Hán-Việt) readings plus name/phrase dictionaries. Output is stiff, ~70–80% plot comprehension after ~1 month of acclimation. Legacy engine QuickTranslator (C#/Windows) was archived 2020-12-30; its VietPhrase corpus is ~1M entries but only ~12,600 shallow Hán-Việt readings. The ecosystem migrated to sites (truyenfull ~22M visits/mo) and a modern PWA (vietphrase.app, >94% term detection, free, offline). It churns under takedown pressure (metruyencv shut 2026-02-10; wikidich −81% MoM). **The gap that mattered:** every platform serves monolingual *consumption* — none turns a convert-reader into a Mandarin *learner*. That gap is what Tsumugu Core's VI rail addresses, with owned content instead of borrowed.

### English — why it's skipped (for the convert wedge)
English shares no Sino-Xenic layer, so cheap per-morpheme gloss can't reconstruct meaning; the market resolved to full translation (Wuxiaworld, Webnovel, NovelUpdates ~24.6k novels / ~44M visits/mo). A scaffolded-raw English reader exists only as an unshipped 2021 Princeton prototype. (English returns as a *graded-content* rail below — a different product; see the contradiction note.)

### Japanese & the cross-Sinitic bridge
Sino-Vietnamese (Hán-Việt) and Sino-Japanese on'yomi both descend from Middle Chinese and are systematic enough that scholars reconstruct MC from them — a real recognition advantage on Sinitic compounds. It works on Chinese text (≈entirely Sinitic). It breaks on Japanese running prose: kango is ~49% of dictionary headwords but only ~18–20% of casual speech; native wago, kun'yomi (馬 *uma*), particles, and inflection get no cognate, and false friends bite (手紙 = "letter" JP / "toilet paper" CN). "Read Japanese through your Hán-Việt" as a primary mode is too lossy to ship; "accelerate a VI learner *of* Japanese with a cognate cue" is sound. Sino-VI vocabulary is ~a third to half (Hoàng Phê ~40%), calibrated down from the folk "60–70%." Korean (Sino-Korean ~57–60%) is the stronger later-probe pair.

### Copyright & the legal posture (high confidence)
A purely client-side overlay of *your own* dictionary onto text the user already supplies or already renders, with no server-side hosting/storage/redistribution, is the cleanest design — supported by WhenU, Perfect 10's server test, the Adblock-Plus/Axel-Springer ruling, and MDY v. Blizzard (client-side modification is contract, not copyright), plus a decade of unlitigated peers (Yomitan, Zhongwen, Pleco, ttu, Migaku, Language Reactor). The risk lives in controllable places: **§1201 anti-circumvention** (never bypass paywall/DRM — "Bypass Paywalls Clean" was killed Aug 2024); **no server-side storage of the prose**; **no sharing/community library of imports**; **passive in-page only** (no scraper); **no prose MT**; **isolate copyleft data** (CC-CEDICT BY-SA, char_vi share-alike, thivien.net-traceable readings). Live caveat: Germany's BGH (July 2025) reopened the in-memory-DOM-modification theory, so the EU position is open. **Hán-Việt coverage is verified in the codebase:** `hanviet.json` = 10,540 chars, 94.2% single-reading, 5.8% polyphone → deterministic scaffolding of any modern text with zero per-novel authoring; the one hard step is Mandarin polyphone disambiguation (g2pW ~99%).

### Comics / manhua / OCR
The Pleco OCR trauma was **live-camera OCR** (motion, focus, lighting, real-time) — a different, harder problem than **offline batch OCR of clean digital panels** (document-grade, seconds/page on a heavy model). The proven overlay pattern is Mokuro (offline OCR → transparent selectable text layer over the original art → pop-up dictionary); overlay beats split-screen because the art is the comprehension aid. But the content sourcing is the blocker: manhua are copyrighted images behind ToS walls (Kuaikan, Tencent, Bilibili Manhua), no open corpus, habitual VI sources are piracy, and the legal free surface is contracting (Bilibili Comics EN dead Feb-2024, dmzj dead Sep-2025). A competitor (Lexirise) already ships a Chinese-manhua overlay with pinyin. And for a non-technical user, OCR has no clean-and-simple answer: in-browser/on-device = setup-free + clean but quality-risky (PaddleOCR-VL ~27% on manga crops → ~70% fine-tuned); server-side = high-quality but processes copyrighted images (the line Wedge won't cross). Hence comics are the deferred second surface, gated on an in-browser OCR eval. "Webtoon" is a Korean format term; the target is native Chinese manhua (mostly Simplified, vertical-scroll).

### The reference apps (what each contributes)
- **Yomitan** — instant hover/tap gloss on any page (free). The lookup interaction.
- **Migaku** (~$10/mo) — immersion overlay, one-click SRS mining, known-word tracking. The loop.
- **Mokuro** (free) — offline comic OCR → selectable text overlay on art. The comic pattern.
- **Pleco** (free + add-ons) — depth-on-tap, document/clipboard reader. The reference depth.
- **LingQ** (~$13/mo) — import your own text, status coloring, known-word state. The importer.
- **Du Chinese / The Chairman's Bao / Maayot** (~$5–9/mo) — polished, leveled, graded content. The quality bar Tsumugu Core targets.
All are English-first and Hán-Việt-blind — the gap Tsumugu Core fills.

---

## The chosen direction: Tsumugu Core

### Naming and structure
- **Tsumugu** — the open-source engine.
- **Tsumugu-ed** — the encoded character dictionary (the reference layer).
- **Tsumugu Core** — the public reading product: graded AI-generated content + reader + importer, linked down into the dictionary.

### The shape
A reading website, free to read, where the stories are generated and owned:
- **AI-generated leveled readings** as the spine — original Chinese written to a target HSK/TOCFL band.
- **Reader + importer** — read the library, or paste/import your own text.
- **Content variety** — news, ShortForm-style book synopses, movie recaps.
- **A known-word layer** — log in, save what you know, see only what you don't.
- **The dictionary underneath** — tap a word for a gloss, follow "full entry →" into the encoded character page (the form field).

### Two rails: English→Chinese and Vietnamese→Chinese
The Chinese content is shared; the scaffolding forks by reader language.
- **Vietnamese rail (Viet→Han):** Hán-Việt reading + Vietnamese gloss + the cognate bridge. The differentiated, defensible product.
- **English rail (Eng→Han):** pinyin + English gloss + character depth. A strong graded reader in a crowded category, competing on content quality + dictionary depth.

This is a fork, not a rebuild — the toggle matrix already carries script (简/繁), reading (pinyin/zhuyin), and gloss (EN/VI) as independent axes. The English rail is the volume and the ARPU; the Vietnamese rail is the moat. English revenue funds the Vietnamese mission — the direct answer to the low-VI-ARPU problem.

### Why it dissolves the two walls
Generated/owned content carries no licensing burden (no raws, no catalog deals) and is pure text (no OCR, no camera, no local model). The convert and manhua readers each demanded one wall be climbed; both demote to a single client-side BYO-import feature.

### Contradiction surfaced: English was "skip," now it is a rail
The web-novel entry concluded **skip English** — correct for a *convert-style scaffolded-raw* reader, where English has no Sinitic substrate and full translation wins. Tsumugu Core is a different product (AI-generated *graded* content), where an English learner needs only pinyin + gloss — Du Chinese's proven model. English is out for the convert wedge and in for the graded-content reader. The Hán-Việt bridge stays Vietnamese-only.

---

## Monetization (full menu, ranked)

1. **Free + ads (both rails)** — read, gloss, reading aids. Honors "why it's free," drives reach; ad money stays small (especially VI).
2. **Pro subscription, PPP-split** — VI: a low lifetime or few-dollar tier (below Hanzii). EN: a standard graded-reader subscription (~$5–13/mo). Pro sells offline, sync, unlimited import, AI sentence-explanation — convenience, never content.
3. **Donations** (Ko-fi / GitHub Sponsors) — zero cost, do anytime.
4. **Dataset licensing** — the Hán-Việt-bridged corpus embedded in an incumbent's app; monetizes the moat without winning the app war.
5. **Anki/SRS deck** — the authored examples as a paid deck; near-zero build, reaches non-app learners.
6. **Pleco** — free user-dictionary as a funnel; a paid EN character-mechanism add-on only opportunistically.
7. **B2B / university licensing** — highest ceiling, unproven; validate one Vietnamese-department pilot before betting.

Parked upside that reuses the same engine: the **Taiwan-resident Vietnamese** learner slice (higher ARPU, Traditional-native — Tsumugu already defaults there); a small **efficacy study** as marketing and B2B fuel; the **Korean/Japanese** learner bridge later.

---

## Already scaffolded (assets this builds on)

- The graded-reader engine + the `data-*` toggle matrix (script · reading · gloss).
- Hán-Việt readings (`hanviet.json`, 10,540 chars) + the EN/VI localization.
- The dictionary (2,662 encoded entries) as the reference layer.
- The example-sentence QA gate (`example_checks.py`) and TOCFL band machinery — reusable to vet and level generated content.
- The Migaku-style overlay PRD + the known-words importer (Anki/Migaku/Pleco) for cold-start.
- A concept mockup of the reader UX (`tsumugu/personal/migaku-style-overlay/reader-mockup-concept.html`).

Wedge has built further scaffolding for Tsumugu Core; cataloging exactly what exists, and naming the first shippable slice, is the immediate next step.

---

## Details to get right

1. **Generated readings need a QA gate or they teach mistakes.** LLM Chinese drifts into unnatural collocations and subtle errors a learner can't catch; reuse the example-sentence gate discipline. The gate is the real cost, not the generation.
2. **Leveling needs a controlled vocabulary** — the generator stays inside HSK/TOCFL bands; reuse the existing band machinery.
3. **Rank content by copyright safety** — AI-original readings and original news summaries are clean; book synopses and movie recaps need transformative summary, never reproduction.
4. **Known-word cold start** — seed HSK 1–3 on signup; import from Anki/Migaku/Pleco.
5. **Accounts save known-word state, never the user's imported text** — the legal line holds.
6. **The English rail competes on a thinner edge** — no cognate bridge, so it sells on content quality + dictionary depth in a crowded field; its job is volume and ARPU.

---

## Open questions

1. **Quality at volume** — can a solo maker + a QA gate hit Du Chinese's polish across enough leveled stories?
2. **First slice** — what exactly is already scaffolded, and what is the smallest shippable Tsumugu Core v1 (likely the VI rail + a handful of AI readings + known-word login)?
3. **Does the English rail fund or dilute the Vietnamese positioning?** Intent is fund; keep the marketing identity sharp.
4. **Free-vs-ads vs freemium, per rail.**
5. **Generation pipeline** — which model authors the readings, how the QA gate plugs in.
6. **Comics unlock** — a 5–10 page in-browser OCR eval on real manhua, before any comic build.
7. **Convert-to-learner conversion** — the still-unvalidated demand assumption under the whole reader bet; the cheapest test is a landing page in the VI learning/convert communities.

---

## Links

- [[journal/2026-06-22-monetization-reach-and-web-novel-reader|Monetization, reach, and the Hán-Việt web-novel reader]] — the thread this lands.
- [[journal/2026-06-22-ulysses-design-philosophy-for-tsumugu-ed|Ulysses design philosophy → tsumugu-ed]] — the reading-surface discipline Tsumugu Core inherits.
- [[journal/2026-06-21-hanviet-bridge-deep-dive|Hán-Việt bridge deep dive]] — the moat the Vietnamese rail carries.
- [[projects/tsumugu-ed|Tsumugu Encoding Dictionary]] — the reference layer underneath.
