---
date: 2026-06-21
tags: [tsumugu, hanviet, vietnamese, mandarin, linguistics, language-learning, agentic-engineering]
---

# The Hán-Việt bridge — deep dive (linguistics, learning, and how it builds into tsumugu-ed)

**Verdict:** Sound is one of six channels of the Hán-Việt bridge, and the weakest of them for a learner. The payload that helps a Vietnamese student of Mandarin is **lexical-morphemic**: they already command ~3,000 Sino-Vietnamese morphemes as living vocabulary and can parse 學生 as học+sinh before meeting *xuéshēng*. Our current bridge (a `hanViet` string on 2,659/2,662 chars plus one example word on 940) ships only the thin sound version. The recommended build is the **MC-Pivot Bridge**: a Phase 1 with zero schema change and zero authoring (a third reading mode plus a derived entering-tone diagnostic), then each schema change earned behind a usage signal. The cost: one number the whole tone feature rests on does not exist publicly and must be measured locally first.

This was a thorough pass — a 68-agent, ~2.5M-token research-and-design workflow, web-verified, grounded in the live repo. 56 high-risk claims were adversarially checked; 6 were corrected and the corrections are folded in below.

## What the bridge is

Hán-Việt is not derived from Mandarin and Mandarin is not derived from Hán-Việt. Both descend from **Middle Chinese (MC)**, the language of the *Qieyun* rhyme dictionary (601 CE). Vietnam borrowed its systematic reading layer from the late-Tang (8th–9th c.) Chang'an literary standard during the ~1,000 years of Chinese administration (111 BCE–938 CE). The model: **Hán-Việt ← Middle Chinese → Mandarin.** Where MC made a distinction Mandarin merged away but Vietnamese kept, the Hán-Việt reading is a window onto the MC syllable and a partial predictor of the pinyin.

The "60–70% of Vietnamese is Sino-Vietnamese" figure is register-bound: ~⅓ averaged across all speech, ~40% by dictionary count, 60–70% in formal/technical/written registers only. The honest analogy is English's Latin/French layer — a minority of everyday speech, a majority of academic prose.

### The three strata (the load-bearing distinction)

The same character sits in Vietnamese at three depths, and conflating them is the main way a bridge mis-teaches.

1. **Old / Early Sino-Vietnamese** (~400 words) — pre-Tang, fully nativized, felt as native. Safe exemplars: **buồng** (房), **mùa** (務), **mùi** (味), **vốn** (本), **việc** (役), **đũa** (箸).
2. **Sino-Vietnamese proper** (~3,000 morphemes) — the rule-governed Tang literary layer. The predictable bridge; pairs morpheme-for-morpheme with Mandarin. **The correspondence rules below apply only to this stratum.**
3. **Vietnamized SV** (越化) — readings that took a literary form then drifted in tone/sense.

## The sound bridge

### Initials — the near-deterministic rules

| Hán-Việt | → Mandarin | MC source | Examples |
|---|---|---|---|
| nh- | r- | palatal nasal 日 | nhân/rén 人, nhật/rì 日, nhập/rù 入 |
| ng-/ngh- | ∅ (vowel) | velar nasal 疑 | ngũ/wǔ 五, nghiệp/yè 業 |
| ph- | f- | labiodental 非敷奉 | pháp/fǎ 法, phi/fēi 飛 |
| h- | x-/h- | 曉/匣 | học/xué 學, hải/hǎi 海 |
| đ- | d- | dental stop 端 | đông/dōng 東 |
| th- | t- | 透 | thiên/tiān 天 |
| v- | w-/y- | glide 云 | vương/wáng 王, vũ/yǔ 雨 |

Traps: MC dental *s-* surfaces as SV t-/th- (心 = **tâm**, 三 = **tam**), and SV velars stay velar while Mandarin palatalizes to j/q/x before front vowels (家 gia/jiā, 見 kiến/jiàn).

### Codas — the goldmine

Vietnamese kept all six MC codas; Mandarin lost all three stops and merged -m into -n.

| SV coda | → Mandarin |
|---|---|
| -p / -t / -c / -ch | open syllable (was MC entering tone) |
| -m | -n (三 tam→sān, 心 tâm→xīn, 金 kim→jīn) |
| -n | -n |
| -ng / -nh | -ng |

Decision rule: stop-final SV ⇒ open Mandarin syllable; -m ⇒ -n; -n/-ng ⇒ same nasal. This rarely fails — the strongest single predictor in the bridge.

### Tones — and the entering-tone payoff

Both tone systems descend from MC's 4 tones × 2 registers (yin/yang, set by initial voicing) = 8 categories. The strong arrows: huyền → Mandarin T2; hỏi → T3; open-syllable sắc/nặng → T4. ngang splits T1/T2 on register (unrecoverable from the SV tone alone).

The payoff: a **sắc/nặng tone on a stop-final syllable (-p/-t/-c/-ch) flags a 入聲 character** — exactly the words whose Mandarin tone scattered across all four tones (入派三聲). In Vietnamese they are perfectly systematic; in Mandarin they are the "irregular" ones to memorize. Hán-Việt identifies which Mandarin tones are unpredictable, turning Mandarin's chaos into a named category.

**The honest limit:** there is no peer-reviewed SV→Mandarin per-tone accuracy figure. The "81%" sometimes quoted is a Beijing-dialect number, not Sino-Vietnamese. Tone, exact vowel, and the doublet/irregular residue are where the rule stops and a lookup begins.

## Beyond sound — the real value

1. **Morphemic recognition (the biggest asset).** ~3,000 SV morphemes are already bound, productive vocabulary: 國 quốc (quốc gia, quốc tế, Trung Quốc), 學 học (học sinh, đại học, khoa học), 家 gia (gia đình, chuyên gia). The learner *parses* 科學 = khoa+học = "science" compositionally; a monolingual English learner memorizes an opaque blob.
2. **False friends (the brake you must ship).** 困難 *kùnnán* "difficulty" → VN **khốn nạn** "vile, despicable"; 緊張 *jǐnzhāng* "nervous" → VN **khẩn trương** "urgent, hurry up"; 書院 → VN **thư viện** "library" but Mandarin *shūyuàn* "academy". The morpheme match generates a hypothesis; the per-compound gloss is the truth.
3. **Word-order.** SV compounds keep Chinese modifier-head order, contrasting with native head-initial Vietnamese: 白馬 bạch mã (white-horse) vs ngựa trắng; 飛機 phi cơ vs máy bay. A built-in minimal pair for the hardest structural difference.
4. **Etymological doublets (what makes a character *felt*).** One etymon, two reflexes — an early native-feeling one plus the literary bridge form: 力 sức/lực, 鏡 gương/kính, 本 vốn/bản, 味 mùi/vị, 房 buồng/phòng. Learning 力 = lực is discovering that *sức*, strength felt in the arms, is the same morpheme.
5. **Wasei-kango caveat (和製漢語).** The most "advanced" abstract terms — kinh tế 經濟, xã hội 社會, khoa học 科學 — are Meiji-Japanese coinages that flowed into both Chinese and Vietnamese ~1900. The trilateral match is reliable; framing them as ancient Chinese cognates is false.
6. **Chữ Nôm / orthographic.** Surfacing the source character (học → 學) converts a sound fact into the graph the learner needs anyway. Guard: Nôm coined Vietnamese-only characters (𠀧 ba, 𤾓 trăm) that point to no usable Chinese reading — the tool must tag *chữ Hán (transferable)* vs *Nôm-coined (Vietnamese-only)*.

## Pedagogy, honestly

The cognate facilitation effect is **largely automatic**: learners acquire cognates better than non-cognates without instruction, and awareness-raising adds little to acquisition (it mainly helps false-friend avoidance). Design consequence: surface the correspondence and let it work; heavy explanatory scaffolding buys little.

No VI-L1 → L2-Mandarin cognate study with effect sizes appears to exist. General cognate gains are well attested; the Vietnamese-specific gain is plausible and unstudied, so no efficacy claims go user-facing. Pronunciation fossilization is a real risk — pinyin stays the default reading, Hán-Việt is opt-in, and the bridge always shows the Mandarin tone as truth. Central/Southern Vietnamese merge hỏi and ngã, so those tone heuristics break for a large share of users.

## Current state in tsumugu-ed (measured)

`hanViet` on 2,659/2,662 chars. `hanVietExample {word,han,glossVi,ref}` on 940 (gated by `scripts/localize/hanviet_gates.py`, a coherence + living-word lexicon filter). `evolution.phonology.mc` populated on **0**. `composition[].drift {group,initial,final,tone,irregular,note}` on 1,306. Everything Hán-Việt renders **VI-mode only**, prepended to the reading line (`quốc · guó`) and in a `國家 ← 國 quốc` box. The MC-pivot machinery exists in the schema and is dormant. Data assets in `sources/hanviet/`: `hanviet.json` (10,540 keys, ph0ngp/MIT, with polyphone `pinyinMap`); `chinese-hanviet-cognates.tsv` (unlicensed — build-time only).

## The build: recommended and rejected

**Recommended — the MC-Pivot Bridge.** Frame the bridge as the cross-language sibling of `composition[].drift`: drift is the sound axis inside a glyph, the bridge is the sound axis across languages. Encoding, not translation — it serves "char mechanism IS the product." The architecture resolves the audience split for free, because `data-reading` and `data-gloss` are independent axes: language-neutral facts (the reading mode, the MC-pivot row, the entering-tone chip) render in both EN and VI; the Vietnamese-specific payload (recognition card, SV-gloss false-friend contrasts) stays VI-only.

| Phase | Ships | Schema | Effort |
|---|---|---|---|
| 1 | third reading mode `data-reading="hanviet"` + derived entering-tone chip + bridge-strength badge → sidecar `indexes/bridge.json` | none | ~1.5d, no work order |
| 2 | turn on `evolution.phonology.mc` as the pivot; render the MC-pivot row | +mcCoda/mcTone (1 WO) | ~3–4d |
| 3 | promote sidecar → `bridge` object; tone chip; author doublets | bridge + falseFriends (1 WO) | ~2–3d |
| 4 | phonetic-series sound bridge over 1,306 drift chars + recognition card | none (derive) | ~2–3d |
| 5 | curated false-friend warnings, TOCFL A1–C1 | (shares WO) | ~1–2d |

**Steelman of the rejected options.** A **wiki explainer page** ("How Hán-Việt predicts Mandarin") delivers most of the *teaching* value with zero schema, zero render plumbing, and matches the established pattern where teaching lives in the wiki and raw data in entries — it may be the right first move to test demand cheaply. The **stay-VI-gated + entering-tone-chip-only** option is the smallest honest deepening. What flips the decision toward the wiki page: if the usage signal on a cheaper surface is the real question, the essay answers it first for almost nothing.

**The cost of the recommendation.** Two Wedge work orders (the schema-discipline rule allows exactly one standing exception, the Simplified block; every further schema edit needs its own sign-off). Three of five phases are the translation/vocabulary layer the thesis subordinates to a thin index — so the discipline is: invest schema+render in the correspondence/encoding features; ship the lexical features as minimal sidecar-driven surfaces with no per-entry authoring expansion. Specifically, do not make "expand hanVietExample 940→full set" a headline, because that consumes authoring capacity the character backlog needs.

## Verified corrections (folded into all of the above)

- **mây** "cloud" is native Austroasiatic, not Old-SV; the research first listed it. **đũa** (箸) is a genuine Old-SV loan and is the correct exemplar.
- The doublets 印 in/ấn, 鏡 gương/kính, 為 vì/vị are **Old/Early SV (古漢越語), not 越化** — the native-feeling reflex is older, the literary reading later; the drift direction was stated backwards.
- 國: MC kwok = IPA /kwək̚/ (Middle Chinese), OC Baxter-Sagart *[C.q]ʷˤək, Zhengzhang OC /kʷɯːɡ/. The /kwək̚/ form is MC, not the OC reconstruction.
- Cognate facilitation is largely **automatic** (the claim that explicit awareness is required to benefit was refuted); explicit instruction mainly aids false-friend avoidance.
- 學 go-on = gaku, kan-on = kaku (distinct) — a valid go-on/kan-on example. 北 is **not** a go-on/kan-on contrast (hoku both; the boku in 南北 is rendaku).

## Open decisions

1. **First move:** Phase 1 reading mode, the ~1hr tone-reliability measurement, or the wiki explainer to test demand.
2. **Measure before building the tone feature:** cross diacritic-derived SV tone with diacritic-derived Mandarin tone across 2,659 chars → per-cell confusion table → teach threshold. If only huyền→T2 and the entering-tone diagnostic clear it, scope to those.
3. **Audit the 126 `byReading` polyphones** (key present, 0 populated objects) before specifying per-reading rendering.
4. **License:** keep the unlicensed cognate TSV build-time only; re-derive anything shipped from ph0ngp (MIT) + SUBTLEX-CH (CC-BY); source MC from nk2028/tshet-uinh (CC0) cross-checked against Wiktionary (CC BY-SA).

## Links

- [[wiki/Language/The Han-Viet Bridge|The Hán-Việt Bridge]] — the student-facing wiki page distilled from this entry.
- [[wiki/Language/Chinese/Sound Series|Sound Series]] — the in-glyph phonetic-family mechanism the cross-language bridge mirrors.
- [[wiki/Language/Chinese/Three Attributes of a Character|Three Attributes of a Character]] — form/sound/meaning; the bridge is the sound attribute extended across languages.
- [[wiki/Language/Vietnamese Grammar Primer|Vietnamese Grammar Primer]] · [[wiki/Language/Character Primer|Character Primer]]
- PRD for the build: `tsumugu/PRD-HanViet-Bridge.md` (this date).
