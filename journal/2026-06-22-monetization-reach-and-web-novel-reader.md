---
date: 2026-06-22
tags: [tsumugu, monetization, reach, reader, web-novels, han-viet, vietphrase, japanese, korean, copyright, decision, strategy]
---

# Monetization, reach, and the Hán-Việt web-novel reader

**Verdict:** Tsumugu stays free with ads, and that decision reframes the whole question — display revenue is impressions × CPM, a dictionary is a low-frequency lookup, and Vietnamese traffic carries one of the world's lowest CPMs (~$1.8–2.2 vs US $5–15+), so a free Vietnamese dictionary earns around its hosting cost however good it is. Engagement is the lever ads actually reward, which points to a **reader** with the dictionary as its reference layer. The sharpest reader on top of the existing engine is a **Hán-Việt learning-reader for Chinese web novels**: Vietnam already runs a large grassroots "convert" ecosystem (VietPhrase/QuickTranslator → modern sites, truyenfull alone ~22M visits/mo) that reads Chinese raws through a Sino-Vietnamese phonetic layer, and that entire ecosystem serves monolingual consumption — nobody carries a convert-reader across to actually acquiring Mandarin. That bridge is Tsumugu's opening, and it is non-replicable in English (no Sinitic substrate). The build that survives scrutiny is the **legally-safe, bring-your-own-text, client-side overlay** — hosting raws is infringing and the convert sites survive only by domain churn (metruyencv shut down 2026-02-10). Skip an English reader (structurally impossible as convert; the LLM-gloss substitute is a commodity). Defer Japanese to a conventional learner-reader with Hán-Việt demoted to a per-word mnemonic — the cross-Sinitic "read Japanese through your Hán-Việt" thesis is too lossy to ship as a headline. Do not fund any of it on Vietnamese ad revenue alone.

Provenance: two grounded workflows, web-sourced and adversarially fact-checked — monetization/reach (18 agents, ~688k tokens, run `wf_4fee9c18-98d`) and the web-novel exploration (18 agents, ~736k tokens, run `wf_93a29a16-c35`). Builds on [[journal/2026-06-21-hanviet-bridge-deep-dive|the Hán-Việt bridge deep dive]]. Figures below are recoverable from the run blobs; per-site traffic numbers are point-in-time third-party estimates.

## The monetization frame

Ads pay for engagement, never for lookups. Both terms of impressions × CPM work against a dictionary: low visit frequency, and a Vietnamese audience that advertisers bid near the bottom of the global table. Vietnam ranks #1 for Mandarin study by HSK volume (~146k test-takers, 2025) and simultaneously monetizes among the lowest, so the ad line on a free Vietnamese dictionary lands near the cost of hosting. The thing people open daily and stay inside is a reading surface, and a reading surface is where ad impressions and authoring investment both compound. The dictionary keeps its role as the tap-to-understand layer underneath.

## The wedge: a Hán-Việt learning-reader for Chinese web novels

The convert ecosystem is the demand proof. A self-sustaining Vietnamese audience reads Chinese web-novel raws every day through "convert" — near-mechanical word-for-word substitution into Sino-Vietnamese (Hán-Việt) readings plus name and phrase dictionaries. The output reads stiff and ungrammatical; fans acclimate over roughly a month and report ~70–80% plot comprehension at best. Scale shows in aggregate: truyenfull.vision sits at #1 in Vietnam's Books & Literature category (~22M visits/mo, estimate), with sangtacviet, wikidich/truyencv, tangthuvien, and docln feeding the same readership, and the Chinese raw-novel site 69shuba ranking inside Vietnam's top books sites — readers go straight to the raws and convert them locally.

The gap is total: every one of these serves consumption and keeps the reader monolingual. The Hán-Việt layer is tolerated as a crutch, with no per-character depth, no pinyin or tone, no known-word tracking, no SRS, no route from passive reading to Mandarin. Vietnamese "learn Chinese by reading" guides point users at Chinese-side pinyin apps (微信读书, HelloChinese, Readibu), disconnected from the convert audience entirely. Convert-consumers and HSK-learners are two separate channels, and nothing bridges them. Tsumugu authors exactly the missing layer — 2,662 deep character entries with Hán-Việt readings, mechanism prose, and examples — and already owns a graded-reader engine to render it.

## What "convert" is, so we build the right thing

- **The mechanic.** Word-for-word substitution against a shared dictionary in Chinese word order, with Hán-Việt phonetics, name lists, and compound-pattern rules layered on. Readable after acclimation, deliberately ungrammatical, useful to people with zero Chinese.
- **The legacy engine.** QuickTranslator (C#/WinForms, Windows desktop) is abandonware — the canonical mirror was archived 2020-12-30. Its VietPhrase corpus carries ~1M+ entries across five sets (~878,800 phrases, ~158,900 names, ~12,600 Hán-Việt phonetic readings). The phonetic layer is shallow where Tsumugu is deep.
- **The modern rebuild.** vietphrase.app is a free offline PWA (installable, no ads, >94% term-detector accuracy, ~5,000 chars/chapter in <200ms) that modernizes the UX and stays consumption-only — no learning layer, no character depth, no path to Mandarin.
- **The instability tell.** The ecosystem churns under takedown pressure: metruyencv collapsed and shut down 2026-02-10, wikidich.com.vn fell ~81% month-over-month into May 2026. Convert survives on free volunteer labor and disposable domains.

## English: no equivalent, and no room for one

English shares no Sino-Xenic layer, so every hanzi must be looked up cold and cheap per-morpheme gloss cannot reconstruct meaning. The market resolved to full translation instead — Wuxiaworld (licensed human, ~56 novels in five years), Webnovel/Qidian (official, heavily MTL), NovelUpdates (~24.6k novels, ~44M visits/mo), and AI full-translation framed as the answer to a >20M-novel supply gap with under 1% translated. Learner-side tools stay tap-lookup over graded content (DuChinese, The Chairman's Bao, LingQ, Pleco), with only Readibu touching authentic web novels (free + $4.99/mo). A scaffolded-raw English reader exists only as a 2021 Princeton prototype (CH-ENG Reader, Yip) that never shipped commercially. An LLM-inline-explanation reader could substitute, and it is a commodity any team can clone. Skip it.

## Japanese: a learner-reader later, not a read-through bridge

The cross-Sinitic bridge is sound at the morpheme level and broken at the running-sentence level, and the difference between Chinese and Japanese text is the entire story.

- **Where it works.** Hán-Việt and Sino-Japanese on'yomi both descend from Middle Chinese as systematic borrowings, regular enough that scholars reconstruct Middle Chinese from them. A Hán-Việt reader gets a genuine recognition advantage on Sinitic compounds, strongest in formal and technical vocabulary. Chinese text is ~entirely Sinitic, so the bridge lands on nearly every morpheme — the reason convert is readable and the CN→VI product is real.
- **Where it breaks.** Japanese running prose is mostly outside the Sinitic layer: kango is ~49% of dictionary headwords but only ~18–20% of casual speech, and web-novel prose is dialogue-heavy. Native wago and kun'yomi (馬 *uma*, 梅 *ume*), kana grammar, particles, and inflection get no cognate. Which on'yomi applies (go-on/kan-on/tōsō-on) is itself unpredictable, so the reader often gets meaning without the Japanese pronunciation, and false friends bite (手紙 = "letter" in JP, "toilet paper" in CN; bác sĩ 博士 = "physician" in VN, "doctorate" in Mandarin). The measured advantage is also narrower than folklore: a 2026 Frontiers study found Hán-Việt knowledge sped kanji writing initiation and recognition but showed no significant effect on writing accuracy.
- **The honest framing.** "Read Japanese through your Hán-Việt" as a primary reading mode is too lossy to ship. "Accelerate a Vietnamese learner of Japanese with a Sinitic cognate cue" is sound — a learner needs the cognate to speed acquisition, not to carry comprehension, so the gaps are acceptable. Furigana already solves pronunciation natively, leaving meaning and grammar as the residual pain. The Japanese content well is large (Syosetu ~1.1M+ works; Kakuyomu reported 8.08 trillion characters read in 2024), and the learner-tool stack is mature but fragmented (ttu-reader + Yomitan + Mokuro + JPDB + Satori Reader at ~$9/mo). A Vietnamese-first Japanese reader is essentially unbuilt; the only Hán-Việt-kanji asset is a niche Yomitan dictionary (KanjiDictVN, 10,350 entries).

## The copyright reality (binding constraint)

A reader that hosts or server-side-processes Chinese raws infringes squarely: Qidian/China Literature owns the raws, fan translation lives in a fragile gray zone, and Vietnam's IP Law Art.14 extends copyright to derivative and translated works — so convert output is itself a derivative of a protected work. The convert sites operate on a cost structure Tsumugu cannot and should not match: stolen text, throwaway hosting, constant domain churn. The clean architectures, both proven in shipping products:

1. **Bring-your-own-text, client-side only.** The user supplies the `.txt`/clipboard/EPUB they already pull from convert sites; it renders locally with per-character Hán-Việt, gloss, examples, pinyin/tone, and depth, with no server storage or processing. This is the Pleco Clipboard/Document Reader and ttsu+Yomitan pattern, and it drops the text liability to near-zero.
2. **A stocked library of safe content only** — original Tsumugu-authored graded stories plus reliably public-domain fiction. The trap: "public-domain wuxia" mostly is not — Jin Yong and Gu Long remain copyrighted, leaving Ming/Qing classics as the dependable catalog, a narrower and less commercial starter shelf than genre readers want.

The trade-off is real and worth stating plainly: BYO costs the hosted-library convenience that is exactly the (illegal) advantage convert sites hold, which puts retention pressure on the learning value. The architecture is safe and buildable; it is not itself a moat (ttsu and Pleco already ship it). The moat is the Hán-Việt dictionary depth layered on top.

## Decision ledger

| Decision | Call | Why it earns it |
|---|---|---|
| **Free with ads** | Keep, treat ads as a thin bolt-on | VN CPM ~$1.8–2.2 caps ad revenue near hosting cost; reach and credibility are the real return |
| **Reader over standalone dictionary** | Build | Engagement (daily, long sessions) is what ads and authoring both compound on |
| **CN→VI Hán-Việt learning-reader** | Build now, Phase 1 | Proven daily audience (convert), total learning gap, non-replicable bridge, runs on the existing engine |
| **BYO-text client-side architecture** | Adopt | Drops copyright surface to near-zero; the only defensible posture |
| **Stocked library** | Original graded + Ming/Qing public-domain only | No Jin Yong/Gu Long; accept the narrower shelf |
| **English scaffolded-raw reader** | Skip | Structurally impossible as convert; LLM-gloss substitute is a commodity |
| **Japanese read-through via Hán-Việt** | Reject as headline | ~18–20% kango coverage of casual prose; too lossy |
| **Japanese learner-reader** | Defer to Phase 2 | Viable against Satori/ttsu+Yomitan with Hán-Việt as a per-word mnemonic on furigana; only after Phase 1 retention proves out |
| **Korean Hanja / VN↔KO bridge** | Cheap probe, not a bet | Live Hanja-literacy debate, ~57–60% Sino-Korean vocab; reuses the architecture if the Mandarin core proves |
| **Fund on VN ads alone** | Avoid | Plan donation/VIP/freemium from day one + a higher-ARPU subsidizing geo |

## Monetization, honestly

Vietnamese CPMs make pure ad-funding the weakest link — long sessions will not pay for deep authoring. Plan donation/VIP/freemium from day one, and name a higher-ARPU subsidizing audience: overseas Vietnamese diaspora, or non-VI Mandarin learners who value the character depth. Validate willingness to pay or engage before scaling authoring spend. Dataset licensing (the Hán-Việt-bridged corpus embedded in an incumbent's app — Tsumugu as the "Outlier dictionary" of the Vietnamese side) and donations remain the free-philosophy-safe earners that beat ads without paywalling anything promised free.

## Open questions

1. **Conversion appetite.** What share of the convert audience wants to learn Mandarin rather than stay monolingual? The ~1-month acclimation hints at latent appetite; the consumer→learner rate is the core unvalidated demand.
2. **Retention without a hosted library.** Does BYO-text retain users when convert sites win on hosted convenience, or does the missing catalog kill it?
3. **Legibility of the learning lift.** Does a persistent Hán-Việt inline gloss + character depth measurably raise reading stamina over plain convert or a Readibu-style tap-lookup baseline, enough to drive retention? (A/B testable.)
4. **The legal line under feature creep.** Where does "pure client-side overlay" stop being safe once curated source links or OCR creep in? How narrow is a genuinely public-domain-only starter library?
5. **Audience overlap (JP arm).** Do Vietnamese convert-bingers and Vietnamese Japanese-learners (JLPT/EPA, study/career-driven) overlap at all, or are they different people?
6. **Corpus readiness for a cognate axis.** Does the existing 2,662-entry corpus (Hán-Việt + Middle Chinese) already encode what a Korean/Japanese cognate axis needs, or must on'yomi/Sino-Korean readings be added per character?
7. **The inverted play.** Is a heritage-Sinitic reconnection product for native Koreans (Hanja crisis) a larger market than cross-language read-across, and does it justify diverting from the Mandarin core?

## Links

- [[journal/2026-06-22-ulysses-design-philosophy-for-tsumugu-ed|Ulysses design philosophy → tsumugu-ed]] — same-day; the reading-surface discipline this reader would inherit.
- [[journal/2026-06-21-hanviet-bridge-deep-dive|Hán-Việt bridge deep dive]] — the bridge this product turns into an engagement loop.
- [[journal/2026-06-20-tsumugu-vietnamese-translation-campaign|VI translation campaign]] — the loom that authored the Vietnamese layer the reader renders.
- [[projects/tsumugu-ed|Tsumugu Encoding Dictionary]]
