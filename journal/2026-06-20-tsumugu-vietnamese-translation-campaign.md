---
date: 2026-06-20
tags: [tsumugu, vietnamese, localization, agentic-engineering]
---

# Tsumugu — full Vietnamese translation campaign (paused 87.6%)

**Verdict:** Opus is translating the entire dictionary into everyday modern Vietnamese, overwriting the old-fashioned Grok bulk `.vi`. **Characters are 100% done; overall 87.6%.** Paused on the session usage cap; resumes in ~5h. Everything is committed on `vi/data` (not pushed) and staged for a clean resume — full pointer in `tsumugu-ed/batches/vi/HANDOFF-vi-resume.md`.

## What we did
Authority is the ratified `tsumugu/PRD-vietnamese-opus-everyday-translation.md` ("full send", D1–D5): Opus authors, everyday register, overwrite, ship as labeled beta. We flagged before starting that the PRD predated yesterday's example-sentence run, which tripled the `examples[].vi` volume — Wedge confirmed "full send everything" anyway (~36k `.vi` strings: def / form / story / component glosses / examples across chars + words + patterns + chrome).

Built the VI lane from scratch and ran it as a workflow fleet:
- `scripts/vi_checks.py` — everyday-register gate (hard bans from native feedback: lâm sản→gỗ, cáo từ, thổ địa→đất đai, liễu giải→hiểu rõ, …; soft warnings → review).
- `scripts/merge_vi.py` — additive `.vi` merge (overwrites old, gate-bounces archaic words, tracks progress).
- `scripts/vi_stage.py` / `vi_finish.py` — split work into per-agent manifest files; reconcile→merge→commit per wave.
- `batches/vi/vi-translate.workflow.js` — agents each read their own manifest, translate every `.vi` field, self-check against the gate before returning. Worked exemplars 休/失眠 calibrate the register.

Register is landing well — natural 25-year-old Vietnamese ("lên ti vi", "góa phụ", "lướt điện thoại đến mất ngủ", "đi khám bác sĩ"), 0 hard-ban hits, 0 merge bounces across all clean waves.

## State (paused)
- chars **100%** (25,609/25,609) · words **68%** (2,269 entries left) · patterns **0%** (515) · chrome not started.
- ~30+ scoped commits on `vi/data`, not pushed.
- **9 waves left:** words ×6 + patterns ×2 + chrome ×1.

## Lessons (throughput)
- **5 concurrent lanes is the safe ceiling.** 6 lanes (96 agents) trips the *transient rate limit* (recoverable, wasteful — drops ~⅓ of agents, who mostly finish their file writes before the failed return, so coverage stays ~88% and we sweep gaps).
- The **session usage cap** is cumulative token spend on a timer reset — independent of lane count. That's what we paused on, not concurrency.
- Per-agent manifest files (each agent reads its own `g<gi>.json`) beat shared-file index slicing, which failed earlier by re-authoring the same block.

## Resume
See `tsumugu-ed/batches/vi/HANDOFF-vi-resume.md`: re-stage from `RESUME-{words,patterns}-gaps.json`, run ≤5 lanes, `vi_finish` + commit per wave, chrome last, then `validate.py`. Composer Lane B QA still owed (author≠checker); ships as labeled beta.

Related: [[2026-06-19-example-sentences-bakeoff-and-opus-recipe]] · tsumugu-ed `vi/data`.
