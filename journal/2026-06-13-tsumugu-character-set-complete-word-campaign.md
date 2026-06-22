---
title: "Tsumugu: the character set closes; the word gap opens (TOCFL word campaign)"
type: journal
provenance: "Recovered to main 2026-06-22 (commit 07348ac): authored 2026-06-13/14 on the pre-Astro tsumugu-paper-ink-recolor branch, never merged before the Quartz→Astro replatform, restored in the single-branch consolidation. Historical snapshot — intentional, not orphaned; do not re-flag."
created: 2026-06-13
updated: 2026-06-13
tags:
  - journal
  - tsumugu
  - dictionary
  - decisions
---

# Tsumugu: characters done, words next (2026-06-13, evening)

The seed-gate unblock (see [[journal/2026-06-13-tsumugu-seed-gate-and-named-entities|earlier today]]) let authoring rip. By this snapshot the corpus stood at ~2,526 characters + ~2,910 words and the character campaign had effectively closed.

## Milestone: the TOCFL character set is essentially complete

A1, A2, B1, B2 are at **100%** character coverage; C1 is down to the **55** Grok just cribbed (the resume worklist worked — clean restart, all 55 landed, 2 phonetics flagged unresolved). Author those and the whole A1–C2 character backbone is done.

**C2 finding:** C2 contributes *no new characters* — and in fact the 華語八千詞 / 8000-word list this corpus runs on **has no C2 tier at all**, at either the character or word level. "What about C2" has a clean answer: it isn't in the source data. True C2 (精通級) coverage would require an external word list and a separate campaign — explicitly out of scope for now.

## The bottleneck flipped to words — and the word lane was pointed at the wrong source

While characters were chased to completion, TOCFL **word** coverage quietly lagged to ~32%. The reason is structural: the word lane drains `backbone-queue`, a **frequency-ranked corpus, not the TOCFL list**. So it authors *frequent* words, which only partially overlap TOCFL — completion by accident, not design. The raw gap looked like ~4,154, but the list encodes variants and options inline (`你/妳`, `台灣/臺灣`, `小孩(子)`, `名字(˙ㄗ)`); normalizing those (slash→primary, strip parentheticals) cleared ~206 false misses. **True gap: 3,948** — A1 170, A2 191, B1 425, B2 1,121, C1 2,041.

## Decision: open a TOCFL word completion campaign

Mirror the character campaign on the word axis. Confirmed with Wedge:
- **Seed all 3,948** normalized gaps, band-ordered A1→C1.
- **3–4 parallel agents**, staged into disjoint slices via the `parallel-wave` driver (the simple loop races git/queue on concurrent commits).
- **TOCFL-first** drain priority — close the TOCFL gaps before the frequency-corpus tail.

Key enablers and guards:
- **Words need no crib lane** — they decompose into the now-complete characters, so seeded words author immediately; Grok/Cursor sit idle for this campaign.
- **Reconciler deferred** to post-campaign (Wedge's call) — so every agent must run `KIND=words` to stop the stale char-queue count from pulling them into char runs.
- PRD written: `batches/parallel-wave/WORD-CAMPAIGN-PRD.md` (problem, success criteria, scope, constraints, plan, open questions).

## Variant policy (resolved) + staging done

The slash-variant question resolved toward **maximum coverage**: every written form is its
own entry — distinct words, reduplication pairs, orthographic twins (台灣/臺灣, 什麼/甚麼),
and erhua forms all kept, none collapsed. Forms cross-link via `related[]`; orthographic
twins additionally carry a **`scholarNote`** explaining the split (why 甚 vs 什, 份 vs 分,
佔 vs 占) — which turned out to be a field the schema and style card *already* define for
exactly this ("a variant gloss… author proposes, Wedge approves"). Erhua kept because
simplified Mandarin is the next phase after the Traditional dictionary completes.

`stage_words.py` ran → `batches/parallel-wave/word-batch-2026-06-13/slices/`: **4,091 gaps**
(A1 211, A2 202, B1 434, B2 1,164, C1 2,080), 4 disjoint band-ordered slices of ~1,023,
each word annotated with its variant siblings + a twin/distinct hint. `RUN-PROMPT.md` gained
the variant-handling rules; the PRD's open questions are now resolved decisions.

## Outstanding

- **Seed:** prepend the 4,091 into `backbone-queue` band-ordered — the one remaining
  destructive step, awaiting explicit go (backup first).
- **Then run** 3–4 agents on the slices via the parallel-wave driver, `KIND=words`.
- **Still parked:** the 289-entry single-source audit (Composer); the 55 C1 chars + their
  cross-check; `reconcile_queues.py --apply` (Wedge runs post-campaign).
