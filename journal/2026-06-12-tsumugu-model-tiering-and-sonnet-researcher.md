---
title: "Tsumugu production: model tiering tested — Sonnet-as-researcher path logged"
type: journal
created: 2026-06-12
updated: 2026-06-12
tags:
  - journal
  - tsumugu
  - dictionary
  - decisions
---

# Tsumugu: model tiering, tested not guessed (2026-06-12)

Usage limits forced the question: which model writes which entries? Three measured answers in one day — a Fable sprint, a Sonnet char batch, an Opus char batch — each QA'd by random sample against the wave-0 bar (射/造/休).

## Findings

**Fable sprint (calibration):** 40 chars in 22 minutes, zero factual misses; only notation drift (invented drift-group labels), fixed corpus-wide and locked with a closed vocabulary. Throughput floor for scheduled runs: 60–80 chars/hr.

**Sonnet chars (10 reviewed): not safe solo.** All 說文 quotes genuine — no fabrication — but two hard fails in ten: 戴 lost its phonetic entirely (𢦏, and with it the 載栽裁戴 sound series — the entry's cargo), 春 missed the corruption callout (屯 worn into the top; a student can't find it). Plus systematic drift under-badging ({b,p,f} crossings unbadged on 棒/被) and craft slips (stories not built from components; 被's prose reading the sound component semantically). Verdict: repair-from-draft costs ~70% of authoring fresh because verification is most of the cost, and patching carries anchoring risk — the fix pass wouldn't have found what the draft omitted.

**Opus chars (10 reviewed): viable.** One doctrinal slip in ten — 見's 儿 written as "legs," the exact folk parse the Outlier course names as a correction (儿 is a person) — and minor dual-role omissions (堅's 臤亦聲). 音's corruption callout and 另's bare render were exemplary; all quotes real. Verdict: Opus chars + random-10 sampling holds the bar.

## The tiering that follows

- **Words → Sonnet solo** (low claim density; failures are etymology-shaped and words barely make claims) + sampling.
- **Chars → Opus or Fable** + random-10 per few hundred. QA cost ≈ 5–10% of authoring spend; it has caught a real defect class on every run so far — cheapest quality instrument in the system.
- **The intriguing path, logged for a pilot: Sonnet as researcher, top model as author.** Sonnet proved reliably good at exactly the gathering work — real 說文 quotes, definitions, tree candidates, related sets — and unreliable at the judgment work (composition analysis, form, story). Invert the lane: Sonnet assembles a research crib per char; the top model writes only composition + form + story against it. Estimated ~40–50% saving on chars with the hallucination-sensitive surface kept on strong recall. Not yet adopted; needs a pilot batch and a crib format.

## Mechanism that's compounding

Every QA round converts misses into named offenders in the style card (now: phonetic-must-be-named, corruption callouts mandatory, 儿-is-not-legs, dual roles marked). The card is becoming a lint built from real failures — Rounds 4–6's human-strike process, automated against model strikes.

## Outstanding

- Sonnet-researcher pilot: define the crib format, run one batch, QA against the all-Opus baseline.
- Campaign question Opus surfaced: pure frequency pulls off-band chars (邦 T6, 堅 T5) — resolve when the official TOCFL list replaces the jieba proxy queue.
- 見 fix (儿 parse) before Opus's 10 are written to the corpus; Sonnet's 戴/春 need re-authoring if that batch is kept.
