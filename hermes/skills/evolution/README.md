# Evolution System – Quick Start Guide

> **Recommended Path for Day-to-Day Voice Improvement:**  
> Use the **light voice evolution** skill instead:  
> `hermes/skills/l3-to-l2-voice-converter/light-voice-evolution/SKILL.md`  
>  
> Invocation examples: "Run light voice evolution", "Run light voice evolution on the last few maintenance reports", "Suggest voice updates for the L3 to L2 converter".  
>  
> It performs a flexible, low-ceremony scan of `style-feedback.md` + recent real L3 material, proposes the most useful improvements (or polished L2 drafts), writes to the canonical `outputs/L3/` and `outputs/L2/` tiers, and appends one short line to `voice-changelog.md`.  
>  
> This heavy evolutionary system (multi-variant population + rubric scoring + full history audit) is the **advanced / experimental / thorough** path. Reach for it only when you explicitly want the full ceremony and rich measurement data. Light mode is the normal first choice.

This folder contains the complete, self-contained *heavy* evolutionary improvement system designed to run inside Hermes. It remains fully functional and available.

## Goal
Automatically improve the L3 → L2 voice converter (and future converters) over time by generating, evaluating, and applying better prompt variants using population, strict judging, and guarded apply.

## Current Skills (Heavy / Advanced Path)

These four skills provide the full multi-variant, scored, auditable evolutionary loop. They are powerful but higher-ceremony. For most users and most days, start with the light path documented at the top of this file.

- `run-generation` — Main orchestrator. Runs a full evolutionary generation (heavy).
- `generate-variants` — Creates new versions of the current converter prompt.
- `evaluate-variant` — Scores a prompt variant using the rubric and test cases (via Grok-4.3).
- `apply-update` — Applies the winning variant and records the change in history.

## Current Recommended Usage — Heavy Path (Advanced / Experimental)

**Light mode is recommended for normal use** (see prominent callout at the top of this README).

The instructions below describe the full heavy evolutionary machinery (multi-variant generation + scoring on the 4 test cases + rich history + guarded apply). Use these when you want deep experimental data or the complete audit trail. All four skills are fully executable inside Hermes (procedures live in the SKILL.md files). Use the natural-language invocations below — no manual stitching of mutator/evaluator files needed.

See the "Exact Invocation Examples" section immediately below for the working commands (especially the one-command `run-generation`).

The old manual multi-step process (calling sub-logic files directly) is superseded.

## References

- `references/rubric.md` — Evaluation criteria
- `references/test_cases/` — 4 focused test cases
- `references/history/` — Generation logs

## Current Implementation Status (Full MVP Complete)

- **All four skills executable** (procedures live in each SKILL.md; only edits, following evaluate pattern and user directives for minimal surface).
- **run-generation** — Primary one-command orchestrator. Fully self-contained end-to-end loop.
- **generate-variants**, **evaluate-variant**, **apply-update** — All wired with detailed step-by-step executable logic (model calls, file ops, JSON contracts, secret scan, history writer, rollback).
- First real run ready: no more design docs.

## Exact Invocation Examples (Now Working in Hermes TUI)

**Full autonomous generation (recommended):**
- "Run a generation on the L3 to L2 converter"
- "run-generation num=6 focus='stricter on attribution language and fluff'"
- "Evolve the voice converter with emphasis on signal density"

This executes: variants → all evaluated on the 4 test cases (with bad-pattern pre-scan + judge) → rank → safe apply-update (history + preview + replace + version bump). Everything logged in references/history/.

**TUI Experience Notes:**
The full `run-generation` is a long streaming procedure (multiple Grok-4.3 calls across generate/evaluate/apply). Watch for the === APPLY-UPDATE PREVIEW === block mid-run; reply exactly "YES" in the *next* message to perform the write (history is already written and durable; this is the explicit gate). First runs recommended with `num=4` (or lower) for context safety. Interactive presence advised until comfortable.

**Individual skills (for debugging or manual):**
- "Generate variants for the L3 to L2 converter focus=..."
- "Evaluate this prompt variant [paste or path] against the test cases"
- "Apply this winning variant to the converter" (provide the prompt + meta)

**Post-generation (to close feedback loop):**
- Use the improved `l3-to-l2-voice-converter` on real L3 from raw/sessions/
- Edit the L2 result into wiki/
- Append concrete rule to l3-to-l2-voice-converter/references/style-feedback.md
- Re-run generation — new variants will reflect it via Internal Check + history seeding.

## How to Use evaluate-variant Right Now (Manual)

Inside the Hermes TUI say:

"Evaluate the current L3 to L2 converter against all test cases"

or

"evaluate-variant on [paste variant or path]"

It will:
- Run the candidate on each of the 4 real test cases via Grok-4.3
- Perform strict bad-pattern scanning + rubric scoring
- Return scores + justifications + write a full audit log to `references/history/eval-*.md`

## References

- `references/rubric.md`
- `references/test_cases/`
- `references/history/`

## Tier 1 First Run Checklist — Heavy Path Only (Ready Now — Activate the Full Loop)

**Note:** For everyday voice work, use the light voice evolution skill instead (documented at the top of this file and in `../l3-to-l2-voice-converter/light-voice-evolution/SKILL.md`). The checklist below is retained for users who want to exercise the full heavy evolutionary machinery with scoring, history, and versioned applies.

This checklist is the critical path for a complete heavy-system activation. Complete these in Hermes TUI (with Grok-4.3 session). Items marked **TUI execution** are pure user actions inside the Hermes TUI; the rest are now supported by the skills + docs created here.

1. Open Hermes TUI (Grok-4.3 available).
2. **TUI execution:** Run the progressive commands (documented in "Exact Invocation Examples" above):
   - "Evaluate the current L3 to L2 converter against all test cases"
   - "Generate variants for the L3 to L2 converter num=4"
   - "Run a generation on the L3 to L2 converter" (start with num=4; watch for context)
3. **TUI execution:** When the `=== APPLY-UPDATE PREVIEW ===` block appears mid-run, reply **exactly YES** in the next message to gate the write (history is already durable).
4. **TUI execution:** After success, test the updated converter: invoke `l3-to-l2-voice-converter` on one real file from `raw/sessions/`.
5. **TUI + human:** Pick one L2 result, edit/polish it into the appropriate `wiki/` page, then append 1–2 concrete rules/examples to `l3-to-l2-voice-converter/references/style-feedback.md`.
6. **TUI execution:** Re-run a generation (same or similar focus) and compare variants/scores to Run 1 (look for influence from the new feedback via Internal Check).
7. Fill the draft journal entry created for you: `journal/2026-05-22-evolution-mvp-first-runs.md` (records scores, exact feedback appended, surprises, measurement row).
8. (Optional but recommended) Run `git diff hermes/skills/l3-to-l2-voice-converter/converter.md` and inspect the new `references/history/generation-*.md` + `eval-*.md` files.

**Success signal (heavy path):** ≥1 `generation-*.md` + eval logs exist, converter.md has `<!-- Version: ... -->` comment, second generation reflects style-feedback influence, this journal entry + measurement row are populated.

**For the lighter daily path**, success is measured by real usage of "Run light voice evolution" producing useful proposals or L2 drafts in `outputs/L2/`, one-line entries in `voice-changelog.md`, and the manual `style-feedback.md` habit closing the loop with no special ceremony.

A lightweight **Curator** Hermes skill stub was also created at `hermes/skills/curator/SKILL.md` (first-draft interface for driving maintenance reports through the l3-to-l2 pipeline + feeding evolution). Full wiring is a Tier 2 / Phase 6 item once real usage data from the light path exists.

Simple manual measurement support (version vs. scores table + capture steps) was added to `references/history/README.md`.

## Tier 2+ (Phase 5 — After Tier 1 Complete)
- Populate history/ with 2–3 real generations + add test cases from observed bad patterns.
- Light meta-evolution or rubric tweaks if bias appears in data.
- Implement the full Curator skill (using the stub above) + optional drift/secret wiring hints.
- Consider scheduling or kb-synthesis-orchestrator integration.
- Continue the measurement table; consider a tiny helper script later if volume grows.

**The heavy evolutionary system is ready for experimental use in the Hermes TUI when desired.** 

For normal daily work, the light voice evolution skill under `l3-to-l2-voice-converter/` is the supported, low-friction path (see top of this document).

Rollback for heavy changes is always safe via `references/history/` + git. Light changes are trivial one-line appends.

All changes follow the lighter optional voice evolution plan (the authoritative plan.md in the session that produced this lighter design).