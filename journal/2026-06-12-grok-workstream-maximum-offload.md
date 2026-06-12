---
title: "Tsumugu: Grok workstream — maximum offload, QA split by independence"
type: journal
created: 2026-06-12
updated: 2026-06-12
tags:
  - journal
  - tsumugu
  - dictionary
  - decisions
---

# Grok workstream: maximum offload (2026-06-12, evening)

Wedge's directive: offload everything offloadable to Grok (separate budget); Fable keeps only form, story, and judgment. Recorded as `tsumugu/PRD-Grok-Workstream.md` — a standing brief whose sections paste directly as run prompts.

## Decisions

**Campaign: TOCFL A1 → A2 → B1.** Corrected on the record: Band A was never verified complete — the queue was a jieba frequency proxy. Run R0 fetches the official 華語八千詞, writes `sources/tocfl/coverage.md` (the band ledger), and the worklist authors A-band gaps before B1.

**Grok's four lanes (§R/§M/§Q in the workstream PRD):** cribs for every target character; mechanics — component registry (native 部件 names, variant/position tables, stroke order), sound-series tables, level/freq patch files applied by script; and fact-audit of every authored batch. All output to `sources/`, never `entries/`; WORKLIST printed before producing; reports must paste literal command outputs (after a run claimed completion it hadn't fully delivered — disk is the only witness).

**QA split by independence, not by agent:** Grok audits *facts in Fable's entries* (phonetics vs cribs, bands vs official list, drift vocabulary, series consistency) — flags only, never edits; Fable audits *voice* (random-10 register sampling). Grok never grades stories (Round 10 written into its brief); nobody audits their own work.

**What stays where:** Fable — form, story, role judgments, ⚠ CONFLICT adjudication, register QA, contracts. Scripts — zhuyin, senseRef, patch application, crib merge, validation. Wedge — morning skim, push, taste strikes, contract changes.

## Also fixed today

Grok run-1 confusion resolved: the 30 cribs were real (old prompt copy, wrong folder — salvaged to cribs-grok/); RUN2 adds WORKLIST-first and disk-verified reporting. Cursor prompt aligned to the TOCFL worklist.

## Outstanding

R0 (TOCFL fetch + ledger) → R-runs + Cursor mirrors → author batches; M-runs on idle Grok budget; first §Q audit after the next authored push. Sentence-pass PRD still future (Grok will gather candidates when it opens).

## Addendum (same evening) — roster cut to three

Wedge simplified the roster: **Grok** (facts: cribs, mechanics, audits), **Opus** (sole author, words and characters), **Fable** (orchestration, taste QA, contracts, with Wedge). Cursor, Sonnet, and Composer retired. Priced and accepted: the dual-crib cross-check goes single-source (safety now = Opus re-verification + Grok post-batch audit, two layers not three), words author at top-model cost, and rendering/voice become future Opus phases with Composer's work orders standing as specs.

**Reversed within the hour:** five-agent stack retained on reflection (the cross-check and the cheap word lane justify their coordination cost). PRDs, CLAUDE.md, and memory restored to the full roster.
