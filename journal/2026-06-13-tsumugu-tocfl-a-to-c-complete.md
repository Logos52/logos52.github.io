---
title: "Tsumugu: TOCFL A–C complete — every character and word, A1 through C1"
type: journal
created: 2026-06-13
updated: 2026-06-13
tags:
  - journal
  - tsumugu
  - dictionary
  - milestone
  - decisions
---

# Tsumugu: TOCFL A–C complete (2026-06-13, capstone)

The coverage campaign closed today. The Tsumugu Encoding Dictionary now holds an entry for **every TOCFL character and every TOCFL word, A1 through C1.**

## The numbers

- **Words: 6,006 / 6,006 (100%).**
- **Characters: 100%, A1–C1.**
- **Corpus: 9,663 entries**, validation green — ids unique, filenames canonical.
- C2 is not in the 華語八千詞 list (it tops out at C1); true 精通級 coverage would need an external word list — a separate, future campaign.

## How the last mile closed

The day's arc: the seed-gate unblock let authoring rip → the character set closed (A1–B2 100%, then the 55 C1 tail) → the bottleneck flipped to words, where the lane had been draining a frequency corpus rather than the TOCFL list → a TOCFL-seeded, band-ordered word campaign ran in one parallel wave (4 author-only agents, ~4,047 entries, zero collisions) to 99.2% → the 55 C1 characters authored, unblocking the final 46 C1 words.

Those **final 46 were authored directly** (the `expand.py` compact-text path is host-pathed and won't run in the Cowork sandbox, so the JSON was built straight against the schema, zhuyin via `gen_helpers`, filenames via `validate.py`'s own slug function). Tree validated green at 9,663; register scan clean. Highlights: 帳篷 (cloth over a bamboo frame), 主宰 (宀 + 辛, the knife-wielder in the house, `sourced`), 嘴脣 with its 脣/唇 scholarNote.

## Close-out bookkeeping

- **Reconciler ran** (`reconcile_queues.py --apply`): 3,991 drifted word statuses synced `queued`→`authored`. The 579 still queued are the **non-TOCFL frequency-corpus tail** — not gaps. Backup written.
- **Commit is host-side only** (`.git` mount-blocked in the sandbox) — the 46 entries + reconciled queues are authored and valid on disk, committed via a host-side `git add -A` / author-loop run. See [[tsumugu-ops-gotchas]].

## What remains (not blocking the milestone)

- **The 289-entry single-source audit** (Composer cross-check of words/chars authored from a single Grok crib) — still parked; quality insurance, not coverage.
- **Scholar-note side-placement:** 68 orthographic-twin pairs carry the note on one side only — cosmetic, undecided (mirror, standardize onto the orthodox form, or leave).
- **Beyond TOCFL:** the 579-word frequency tail if the corpus should grow past the exam list; and the recurring `researched→queued` gate worth fixing at `crib_diff` so future crib runs auto-promote.

The dictionary's exam-coverage spine is done. Remaining work is refinement and reach, not gaps.
