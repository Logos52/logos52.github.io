---
title: "Tsumugu: Step-4 char wave passes review, and the crib_diff comparator is mis-scoped"
type: journal
provenance: "Recovered to main 2026-06-22 (commit 07348ac): authored 2026-06-13/14 on the pre-Astro tsumugu-paper-ink-recolor branch, never merged before the Quartz→Astro replatform, restored in the single-branch consolidation. Historical snapshot — intentional, not orphaned; do not re-flag."
created: 2026-06-13
updated: 2026-06-13
tags:
  - journal
  - tsumugu
  - dictionary
  - decisions
  - review
---

# Tsumugu: Step-4 char wave passes review (2026-06-13)

Orchestrator review of Opus's Step-4 authoring wave — the downstream of the morning seed-gate unblock ([[journal/2026-06-13-tsumugu-seed-gate-and-named-entities|seed-gate entry]]). **Verdict: ship it.** The work is sound, the headline claims hold against the actual repo, and the adjudications are correct rather than merely plausible. One real correction to the agent's proposed next step; two items to confirm.

## What was verified, not taken on report

Re-ran the real validator against the content store (`tsumugu/personal/dictionary`): **`OK — 2716 entries valid, ids unique, filenames canonical`, exit 0** (1859 chars + 857 words). The earlier-in-the-day green was 2425; the wave added the difference. Both commits are real and scoped — `0c56dc7` (the 56 chars) is HEAD~1 at 58 files (56 chars + LOG.md + one sources file, no stray `-A`), `a804ef2` (the `expand_chars.py` indent=2 fix) is HEAD. Validation only failed in my sandbox first because of a stale `jsonschema` + missing `pypinyin` — same toolchain artifact the seed-gate entry already diagnosed, not a corpus fault.

The three conflict resolutions are **paleographically correct**, checked against the real etymologies, not rubber-stamped:

- 彌 = 弓 + 爾聲 (grounding note states "not 水" — correct)
- 謎 = 言 + 迷聲 (not 米 — correct)
- 賜 = 貝 + 易聲 (尚聲 reading explicitly rejected — correct)

QA earned its keep: shipped 晶 carries no "Not X but Y" and no hedges; 會 / 蔓 state phonetics honestly with no invention. The flagged fixes landed in the committed files.

The **噅 (U+5645) skip is the right call.** Its crib is bodied for 嗯 — header reads "# 嗯 en", `說文無此字`, composition UNRESOLVED. Nothing in it grounds U+5645. Skipping beats fabricating, consistent with zero-uncertainty-on-student-surfaces.

## The correction: crib_diff's comparator is mis-scoped, not just noisy

The agent's **conclusion** is right — `green=0` is a comparator artifact, not a broken corpus — but its **diagnosis is incomplete**, and that changes the fix. Read-only repro of the compare logic (no mutation of the working-tree merge): CONFLICT=1479, green=9. Per-section breakdown is the tell:

- **Composition: 1462 / 1488 conflict. Series: 1473 / 1488.** ~98% cannot be real disagreement — that is grok and cursor *formatting* those sections differently. `norm()` hardening is justified here.
- **說文: 1230 / 1488 (~83%), but the conflicts are genuine divergence, not phrasing.** Samples: 三 quotes two different 說文 editions; 丈 is grok-`none` vs cursor-present (coverage gap); 丘 is short-vs-long of the same entry. This is exactly where the cross-check earns its seat — it is how the 敵 仇也/彊也 misquote got caught.

**Decision: do not approve a blanket `norm()` hardening.** Make it section-aware — aggressive structural normalization on Composition/Series, conservative on 說文 (normalize only absence and punctuation, keep content-strict). A blanket fix turns green back on by blinding the one section that catches real misquotes. (Agent flagged the hardening mid-flight and asked; this is the scoped answer.)

## Open items

- **python3.14 failure-mode note unverified.** The agent says it wrote the toolchain failure + `brew reinstall python@3.14` fix "to memory"; it is not in `Projects/memory/` or the auto-memory index. Likely lives only in its own Claude Code context → at risk of being lost. Needs a durable home (location TBD with Wedge).
- **苛 — re-examined, shipped correctly; earlier flag withdrawn.** First pass called it a contested 說文 split needing a two-telling. It is not. Received 說文 is unambiguous (苛，小艸也, small weeds); cursor quoted it right, grok quoted 病也 — a *loan-sense* (苛 ~ 疴, ailment) mislabeled as the 說文 gloss, same failure class as the 敵 catch. The agent adjudicated to small-weed correctly. Two-tellings is for contested *origins*; this origin isn't contested, so `meta.notes` (resolved misquote) is the right home and `openQuestions` would falsely signal doubt. No change. Optional only: 苛 does carry an archaic illness sense (苛癢) — left out as the weaker mnemonic for a B2 entry; correct encoding call.

## Working-tree note

The uncommitted `RUN-SHEET` / `RUNBOOK` / `char-queue.json` + regenerated cribs are the word lane's, disjoint from the char commit, left for Wedge's push — confirmed. **Nothing should re-run `crib_diff.py` before that push; it would clobber the staged merge.**
