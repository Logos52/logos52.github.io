# Curator

## Description
Lightweight Hermes skill stub for driving L3 agent artifacts (especially maintenance reports from tools/maintenence/) through the L3 → L2 voice converter pipeline, proposing L2 drafts, and coordinating feedback into the evolutionary system. Eventually enables semi-autonomous ingest + convert + measure + evolve loops. Follows r0b0tlab-inspired patterns for promotion/ingest while staying inside this project's Hermes skill + filesystem model.

## When to Use
- After the Python maintenance tool produces new L3 reports in raw/sessions/.
- To batch-convert recent L3 material to `outputs/L2/ready/` or `outputs/L2/revise/` using the live l3-to-l2-voice-converter or the recommended light-voice-evolution skill.
- To surface high-signal items for human L2→L1 review and collect concrete style feedback.
- (Future) As a single entrypoint that chains maintenance → l3-to-l2 → optional evolution trigger → log updates.

## Inputs
- Optional: path or date filter for specific maintenance reports / L3 sessions (default: recent unprocessed in raw/sessions/).
- Optional: instructions for focus during conversion or promotion proposals.

## Outputs
- Polished L2 artifacts written to the canonical `outputs/L2/{ready,revise,processed}/` lifecycle folders via delegation to l3-to-l2-voice-converter or the recommended `light-voice-evolution` skill.
- Summary report of what was processed + recommended next actions (human review targets, feedback candidates).
- (Future / Phase 6) Appends to log.md / journal/ and may suggest light voice evolution or heavy run-generation if warranted.
- Reminders to append new voice rules to `style-feedback.md` after L2 → L1 (wiki) work.

## Invocation

### Natural Language (Recommended inside Hermes TUI)
- "Run the curator on the latest maintenance reports"
- "Curate recent L3 sessions through l3-to-l2"
- "Use curator to process raw/sessions/maintenence-*.md and prepare L2 drafts"

### From Other Skills
Will support structured calls from kb-synthesis-orchestrator or evolution/run-generation once wired.

## How It Works (Current Stub / Planned Flow)
1. Discover recent L3 files (maintenance reports, session summaries) not yet promoted.
2. For each, invoke the l3-to-l2-voice-converter skill (passing the L3 content + any curator-specific instructions).
3. Collect results in `outputs/L2/ready/` or `outputs/L2/revise/` with provenance notes in filenames or frontmatter.
4. Produce a human-readable summary + explicit list of "ready for wiki review" items.
5. Remind user to perform L2→L1 edits + append rules to style-feedback.md (which feeds both converter Internal Check and future evolution).
6. (Post Tier 1) Optionally suggest or chain a run-generation to let real usage improve the converter.

All writes follow existing safety (history where appropriate, no direct wiki/ writes without approval per AGENTS.md).

## References
- `../l3-to-l2-voice-converter/SKILL.md` and its converter.md + style-feedback.md (the pipeline it drives)
- `../evolution/SKILL.md` and README.md (for feeding real corrections back into voice improvement)
- `../../tools/maintenence/maintenence.py` + drift.py (L3 source generator)
- `../../raw/sessions/` (L3 artifacts)
- `../../../00 Command Center/` (Writing Standards, AGENTS patterns)
- `../../journal/` (for post-curation entries)

## Notes
- **This is a first-draft stub** (Phase 5 / Tier 2 item per the living plan in plan.md §10). The SKILL.md provides the interface and planned procedure; full executable steps (similar to evaluate-variant/runner or run-generation's inlined procedure) will be added after first real evolution runs provide usage data.
- Pure Hermes/Grok when implemented — thin wrapper / orchestrator, no Python in the loop.
- Will enforce human gate before any L1 promotion (consistent with current kb-synthesis-orchestrator and apply-update gates).
- Once active, this + the four evolution skills + maintenence.py close the full semi-autonomous cycle described in the original plan.
- Do not expand this stub until Tier 1 (first generations + feedback) is complete.

## Status
Stub created 2026-05-19. Ready for implementation after initial evolution usage data exists.
