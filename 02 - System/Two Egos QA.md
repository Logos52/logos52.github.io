---
type: system
status: developing
created: 2026-08-10
updated: 2026-08-10
tags:
  - system
  - writing
  - qa
---

# Two Egos QA

Voice QA for personal-register prose and any first-person surface: it checks that selfhood stays high and self-regard stays zero, per the Writing Standards section "The two egos." The distinction itself and its full derivation live at [[wiki/Concepts/The Two Meanings of Ego|The Two Meanings of Ego]]; this page is the procedure.

## Two layers

**1. Mechanical worklist.** `node scripts/check-two-egos.mjs <files…>` extracts every first-person sentence and pattern-flags the known tells: self-description frames ("I'm/I am"), kind-of-person claims, comparatives and rank markers, credential frames, prediction claims, audience flinches, self-superlatives. Flags are candidates, never verdicts, and an empty worklist is not a pass — patterns cannot see a staged confession, irony armor, or a scoreboard moved outside by implication.

**2. Judgment pass.** Every extracted sentence — flagged or not — is ruled against the three line-checks: the I owns events, wants, and judgments, never qualities; internal scoreboard only; the residue test (delete the I-clause — lost subject-facts mean load-bearing, a lost impression of the author means display). Plus the no-flinch discipline: no pre-managing the reader's opinion in either direction. Performed humility and post-wounded coolness are judgment-only catches.

## Dispositions

A failing line is never patched: the passage containing it regenerates, diagnosis first. A flag that is kept gets its reason stated next to the ruling. Rulings are per-sentence and recorded in the QA run's output, not on the page.

## Scope guards

Voice only. Content positions are out of scope — the QA never relitigates what a page holds, only how the first person behaves. No deep reads of the author may be minted from QA output.

## When to run

Before any personal page or note publishes, and after any regeneration. First validated 2026-08-10 against the live personal wings, About, and the ego concept page (9 files, 6 tells, 29 worklist sentences). Known false-positive classes from that run, kept on record: use–mention (a page discussing the tells fires them — The Two Meanings of Ego's body flagged four times for naming humblebragging and humility), and auxiliary "I'm" inside event narration ("voiced before I'm downstairs"), which the judgment pass clears as an event rather than a self-description. Patterns extend only from real misses, each citing its sample; no flag graduates to a verdict without a validated basis.
