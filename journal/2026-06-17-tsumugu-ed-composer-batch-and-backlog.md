---
title: "Tsumugu-ed: composer maintenance batch complete; backlog recorded"
type: journal
created: 2026-06-17
updated: 2026-06-17
tags:
  - journal
  - tsumugu
  - dictionary
  - tsumugu-ed
  - maintenance
  - tooling
---

# Tsumugu-ed: composer batch + backlog (2026-06-17)

**Verdict:** The deferred Composer-native maintenance pass is done — validation green, zhuyin cross-check clean. Next value is either learner-facing (example-sentence pass) or encoding-facing (phonetic-family browse, handwriting lane). Grok Build plan mode remains unsafe on CJK filenames until the shell UTF-8 panic is fixed; use exec-mode Python for `tsumugu-ed` mechanical work.

## What ran (2026-06-17)

Direct session execution via `scripts/run_composer_batch.py` and new maintenance scripts (no subagents — prior subagent launches cancelled; plan mode crashed Grok on `kui1-虧.json` byte-boundary panic).

| Task | Result |
|------|--------|
| Char audit (虧, 含) | Drift fixed |
| `related` trim | 24 words → all ≤2 |
| Erhua zhuyin | `gen_helpers.py` patched; 18 `*r5*` entries finalized |
| Level normalize | 4,771 entries → `TOCFL n (est.)` |
| Def prefix normalize | 639 `adj`/`adv` → `adjective`/`adverb` |
| Phonetic report | `batches/maintenance-2026-06-14/PHONETIC-STATUS.md` (59 sound / 85 no-sound) |
| Register lint | `scripts/register_lint.py` — 13 hits, mostly false positives |
| Validate | OK — 9663 entries + 515 patterns |

Scripts added: `run_composer_batch.py`, `normalize_levels.py`, `normalize_def_prefix.py`, `phonetic_unresolved_report.py`, `register_lint.py`.

## Grok shell constraint

`grok-shell` plan mode panics on UTF-8 filenames when slicing at byte index inside CJK (`kui1-虧.json`). Workaround: exec/agent mode; drive edits through `python3 scripts/...` with ASCII-safe globs. Already noted in production-line memory.

## Lint (term)

**Lint** = automated checker that scans text or code for rule violations and reports them without editing. Named after **lint rollers** — the fuzzy fluff caught when clothes are inspected before wear. In software: first widespread use was **lint** (1978, Stephen C. Johnson, Bell Labs) for C code — caught suspicious constructs a compiler would allow. Modern linters (ESLint, register_lint.py) follow the same pattern: project rules, scan, flag. Our `register_lint.py` enforces STYLE-CARD §Banned register; needs tightening to exclude gloss definitions (e.g. 也許 → "possibly") and structural lookalike lines in `related.why`.

---

## Backlog — what else to do

Recorded from Composer review session 2026-06-17. Ordered by lane.

### Corpus quality (mechanical, high signal)

1. **Phonetic UNRESOLVED adjudication** — 85 chars on worklist have no sound role (`PHONETIC-STATUS.md`). Confirm genuine 會意 vs unresearched; mark resolved in entries.
2. **Tighten + wire register lint** — refine patterns; add to `audit_gates.py` for CI; exclude definition glosses and lookalike `related.why` contrasts.
3. **Extended drift audit** — optional read-only finder pass on char corpus (449-char audit found 6 fixes; pattern may surface more).
4. **Commit + push** — ~5,400 entry touches from normalize passes plus surgical fixes; scoped commit before more authoring.

### Product / learner value (bigger lifts)

5. **Example-sentence pass** — ~99% of words still lack examples; largest gap vs site promise ("Examples inside the level" still ◌ in progress).
6. **Phonetic-family browse** — composition rows already name series (方 → 放房訪防); needs index + page template.
7. **Handwriting lane** — Outlier course JSON still minimal; enrich from DevTools capture; crib batch for 手寫. Complements 2026-06-17 YGSF integration journal.
8. **Site copy fix** — home/method says stories in "every entry"; 77% of words correctly have `story: null` (transparent compounds). Distinguish char vs word in copy.

### Growth (reach, not polish)

9. **579 frequency-tail queued words** — beyond TOCFL; parallel-wave when reach past exam list is wanted.
10. **C2 coverage** — needs external 精通級 word/char list first (華語八千詞 tops at C1).
11. **成語 idiom segment** — flagged on site as next on the loom; not in corpus yet.

### Tooling

12. **Avoid Grok plan mode on tsumugu-ed** until CJK path panic fixed.

### Suggested pick-one next

- **Learner impact:** example-sentence pass (TOCFL 1–3 high-freq words first).
- **Encoding impact:** phonetic-family browse (mostly mechanical).