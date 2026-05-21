# Evolution History

> **Note:** This rich history/ audit trail is for the *heavy* evolutionary tools only (`run-generation`, `apply-update`, etc.). The recommended light voice evolution path (`../../l3-to-l2-voice-converter/light-voice-evolution/`) uses the minimal one-line `voice-changelog.md` instead. See `../README.md` for the light-first guidance.

This folder stores the complete audit trail for the L3 → L2 voice converter *heavy* evolutionary system.

## File Naming Conventions

- Full generation runs: `generation-YYYY-MM-DD_NNN.md` (e.g. `generation-2026-05-22_001.md`)
- Individual evaluations (from evaluate-variant, including manual): `eval-YYYY-MM-DD-HHMM-<shortid>.md`

## Template for a Generation Record (generation-*.md)

```markdown
# Generation 001 — 2026-05-22

**Model:** Grok-4.3
**Focus:** stricter bad-pattern penalties + operator framing
**Variants generated:** 6
**Winner:** v03 (score 4.3)

## Summary Scores
| Variant | Overall | Bad Patterns | Operator Framing | Signal Density | Notes |
|---------|---------|--------------|------------------|----------------|-------|
| v01     | 3.6     | 3            | 4                | 3.5            | ... |
| v03     | 4.3     | 5            | 4.5              | 4              | ... |

## Winning Variant
```text
[full prompt text or path to snapshot]
```

## Per-Variant Notes
- v03: Eliminated all "not Y it's Z", added mandatory Internal Check before any rewrite. Best faithfulness + voice.
- ...

## Applied Change
- Before: [short excerpt or link to previous converter version]
- After: [excerpt of changes]
- Reason: Highest aggregate, zero bad patterns on the test suite, incorporates latest style-feedback.

## Raw Logs
- Individual eval logs: eval-2026-05-22-1430-v03.md, ...
```

## Template for an Evaluation Log (eval-*.md) — Written by evaluate-variant runner

```markdown
# Evaluation — 2026-05-22 14:30 — current-converter

**Variant source:** hermes/skills/l3-to-l2-voice-converter/converter.md (v0.6)
**Test cases:** all (001-004)
**Model:** Grok-4.3

## Aggregate
overall_score: 3.9
scores: { operator_framing: 4, signal_density: 3.5, bad_patterns: 4, ... }

## Per Test Case
### 003_not-y-its-z
bad_pattern_count: 1
bad_pattern_examples: ["Self-regulation is not just monitoring, it is the real-time adjustment..."]
scores: { bad_patterns: 4, ... }
justification: "..."
raw_output: "..."

## Notes
Strong on faithfulness. One lingering "not X it's Y" construction on case 003. Recommend stricter instruction in next mutation.

## Full JSON
```json
{ ... the exact output from the judge ... }
```
```

Every change to the live converter must be traceable back to one of these records. History is append-only.

## Example Entry: Prior Manual Generation (Reached v0.6)

(From the manual cycle that introduced the Internal Check and stricter bad-pattern rules in converter.md v0.5 → v0.6. This is a filled illustration of the template above; real apply-update will generate full versions.)

```markdown
# Generation 000 — 2026-05 (manual, pre-skill automation)

**Model:** Grok-4.3 (manual)
**Focus:** Eliminate "not Y it's Z" + add mandatory Internal Check against style-feedback.md
**Variants generated:** 1 (manual selection of Variant D)
**Winner:** v0.6 (applied directly)

## Summary Scores
| Variant | Overall | Bad Patterns | Operator Framing | Signal Density | Faithfulness | ... |
|---------|---------|--------------|------------------|----------------|--------------|-----|
| manual-v0.6 | 4.2     | 5            | 4.5              | 4              | 4.5          | ... |

## Winning Variant
[Full text now lives in ../l3-to-l2-voice-converter/converter.md]

## Per-Variant Notes
- Selected for zero bad patterns on test case 003, direct operator framing, and incorporation of real feedback rules.

## Applied Change
- Before: v0.5 (no Internal Check, tolerated some attribution language)
- After: v0.6 (added Internal Check + explicit Language to Avoid list matching rubric)
- Reason: Matched recurring user corrections; made future automated evolution possible.

## Raw Logs
- Manual notes in journal/ and converter edits.
```

This example demonstrates the expected audit quality. Future generations (001+) will be written automatically by apply-update.

## Simple Measurement: Converter Version vs. Test-Suite Scores
Track improvement of the live L3 → L2 converter over generations (core Phase 5 / Tier 2 metric).

**How to capture (after every successful apply-update or manual baseline eval):**
1. Read the exact `<!-- Version: ... -->` comment now at the top of `../l3-to-l2-voice-converter/converter.md` (or first 10 lines).
2. Invoke: "Evaluate the current L3 to L2 converter against all test cases" (or call evaluate-variant on the live converter).
3. Record in a table (copy into your journal entry or this section over time):
   - Version string
   - Date
   - overall_score average (from the 4 test cases)
   - bad_patterns average (highest weight criterion)
   - Other notable: operator_framing, any persistent bad patterns still appearing, focus of that generation.

**Recommended table format (add rows after each run):**

| Version          | Date       | Overall Avg | Bad Patterns Avg | Operator Framing | Notes / Generation Focus                  | History Entry |
|------------------|------------|-------------|------------------|------------------|-------------------------------------------|---------------|
| v0.6 (baseline) | 2026-05-19 | 3.9         | 4.0              | 4.2              | Pre first automated run                   | (manual)      |
| v0.7-gen-001    | 2026-05-22 | [fill]      | [fill]           | [fill]           | First run-generation (num=4)              | generation-...|
| ...             | ...        | ...         | ...              | ...              | ...                                       | ...           |

This is the simplest durable measurement (no script needed yet). Once 3+ data points exist, a future curator or healthcheck helper can parse the JSON blocks in history/ + version comments to auto-plot trend. Real signal comes from human L2→L1 feedback reducing bad patterns on both test cases *and* live maintenance reports.

See also the journal draft `../../../journal/2026-05-22-evolution-mvp-first-runs.md` for the first filled example.
