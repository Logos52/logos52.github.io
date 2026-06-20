---
title: "A1 example sentences: the bakeoff that picked Opus, and a distinct-collocation recipe"
type: journal
created: 2026-06-19
updated: 2026-06-19
tags:
  - journal
  - tsumugu
  - dictionary
  - decisions
  - bakeoff
---

# A1 example sentences (2026-06-19)

Started the deferred example-sentence selection pass (the backlog item from the 2026-06-17 Composer batch) and it turned into a recipe-and-model investigation. Net: **Claude Code Opus authors the A1 sentences, to a distinct-collocation recipe, with band-purity demoted to advisory.** Full design in `tsumugu/PRD-Example-Sentences-v2.md`; run order in `tsumugu-ed/WORK-ORDER-example-sentences-A1-opus-run.md`.

## What got decided, and why

**Don't reinvent — most of this existed.** Discovery found `PRD-Dictionary.md` already owns the example store, band verifier (`checkDefLevel`), Tatoeba sourcing, schema, and licensing; `collocations.ts`/`tatoeba.ts`/`defLevel.ts` are built; `pnpm gen verify` already band-checks examples + collocations. The work is execution + a shape adapter, not a new build.

**In-band definition — flipped, then settled on words.** First took character-closure ("only A1 characters"), then Wedge changed it to **word-closure (only A1 words)** — which is what `checkDefLevel` already does.

**Bakeoff (2 rounds) picked Opus and killed the cheap lanes for authoring.** Same 3 chars (開打過), 4 models (Grok, Composer, Opus, Qwen-3B via Grok). Round 1: everything too short — Composer collapsed to 2.9-char fragments, Opus uniform, Qwen wide-but-broken. Added a length×difficulty gradient brief → round 2 fixed length across the board, but exposed the real differences: **Composer padded one idea to three lengths, Grok too, Qwen-3B shipped a *Simplified* character + fragments + a mistranslation.** Only **Opus** produced natural, correct, varied sentences. Cheap/OSS lanes ruled out as authors (Wedge: "A, B, C seem too lazy").

**Recipe v3 — variety is structural, not stylistic.** Wedge's two complaints on the Opus round-2 set: the 2–4-char "short" slot is unacceptable (fragments), and collocations repeated across slots (開車 twice). Fix: **each of the 5 sentences shows a DISTINCT collocation** of the headword (drawn from `collocations[]`, machine-checkable), complete sentences only, **length by spread not a magic minimum** (a hard 12-char floor just forces the padding we're killing), variety = distinct situations. Worked samples: `opus-recipe-v3-sample.txt` (3 chars), `opus-sample-12chars.txt` (12 chars, verifier-clean on distinctness + no-Simplified).

**Band-purity → advisory.** The band tool mis-ranks basic vocabulary — `打電話` reads **TOCFL-6**. A strict in-band gate therefore punishes natural A1 sentences. Wedge's call: **optimize for variety/quality over strict band-purity**; stamp `level` as advisory, don't gate on it until the tool is fixed.

## Ruled out

- Grok / Composer / Qwen-3B as sentence *authors* (bakeoff). Composer may still QA/verify.
- A rigid per-sentence length minimum (forces padding).
- Tatoeba mining for A1 (few natural sentences fall in-band; revisit at higher bands).
- Corpus-mining collocations with the Hubei-biased corpus — banned for ranking anywhere.

## Open threads

- **Band tool bug** (`打電話`→TOCFL-6) — fix before its numbers mean anything; advisory until then.
- **Cost:** Opus authoring all 549 isn't free. Decided to run it via Claude Code Opus anyway; gold-set-then-cheap-lane-imitate kept only as a fallback if cost bites.
- **scholarNote field** (separate thread, same session): added an optional `scholarNote` to the schema for archaic/loan asides (first instance: 苛's 疴 illness loan); renderer wiring still open.

## Next move

Land Phase 0 (schema fields + the distinct-collocation/spread/Simplified verifier), populate `collocations[]`, then Claude Code Opus runs A1 in ~30-char batches against recipe v3.
