# L3 → L2 Voice Converter

## Description
Converts L3 material (agent first-pass synthesis, session summaries, maintenance reports, etc.) into L2 Polished Synthesis that matches the voice and quality standards of this knowledge base.

The skill focuses on transforming raw or lightly structured agent output into clear, high-signal, operator-oriented writing while preserving the original thinking and detail.

## When to Use
Use this skill when you have L3 material that needs to be brought up to L2 quality before further human review or promotion to L1 (the published wiki).

Common triggers:
- After the maintenance tool generates new L3 content
- When reviewing recent session summaries
- Before manually promoting something from L3 to L2
- When operating on the `kb-synthesis` Kanban board

## Inputs
- A file or text containing L3 material (session summary, agent draft, maintenance report, etc.)

## Outputs
- L3 drafts written to `outputs/L3/`
- L2 (voice-polished) versions written to `outputs/L2/`

## Invocation

### Natural Language (Recommended)
Inside Hermes TUI, you can say things like:
- "Convert this L3 file to L2"
- "Run l3-to-l2 on the latest maintenance report"
- "Take this session summary and bring it to L2 quality"

### Explicit Command
You can also call it directly:
```
l3-to-l2 path/to/l3-file.md
```

## How It Works
1. Takes the L3 input.
2. Runs it through the current L3 → L2 voice converter logic (incorporating rules from style-feedback.md).
3. Produces a cleaned, higher-signal version that follows the project's Writing Standards.
4. Writes L3 output to `outputs/L3/` and the polished L2 result to `outputs/L2/` (following the standard tiered structure).

## Feedback Loop (Manual L2 edits → Improved L3→L2)
After you manually edit from L2 into the final wiki location, append any voice or signal improvements to `references/style-feedback.md`.

The converter consults this file on every run, so your manual refinements directly improve future L3 → L2 output.

## Evolving the Voice Converter (Recommended: Light Path)
For day-to-day improvements to the converter itself or for polishing batches of real L3 material, use the **light voice evolution** skill:

- Location: `light-voice-evolution/SKILL.md` (sibling to this file)
- Invocation: "Run light voice evolution", "Run light voice evolution on the last few maintenance reports", "Suggest voice updates for the L3 to L2 converter", or "Polish this L3 file into L2 using light voice evolution"
- Behavior: Flexible scan of `style-feedback.md` + recent real L3 (from `raw/sessions/`) + optional test cases. Produces the most useful output for you (revised converter logic, targeted edits, observations, or ready-to-use L2 drafts). Writes any applied artifacts to the correct `outputs/L3/` or `outputs/L2/` using date-prefixed naming.
- On apply: appends **one short line** to `references/voice-changelog.md` (zero-ceremony audit trail).

This is the primary, low-friction path going forward. It keeps the daily experience natural while still allowing genuine evolutionary improvement based on your real usage and feedback.

The heavier multi-variant evolutionary tools (`../evolution/`) remain available for occasional thorough experiments when you explicitly want population, scoring against the 4 test cases, rich history entries, and versioned apply with full audit. They are now considered the advanced / optional path.

## Kanban Integration
When working on the `kb-synthesis` board, see `kanban-integration.md` for how to move tasks after conversion.

## References
- Writing Standards: See `../../../00 Command Center/Writing Standards.md` (principles also embedded in converter.md + style-feedback.md Internal Check)
- Evaluation Rubric: See `references/rubric.md`
- Test Cases (for development/evolution): `../evolution/references/test_cases/` (evolution-only; not loaded at runtime by converter)
- Style Feedback Log: `references/style-feedback.md` (living record of manual L2 edits)
- Light Voice Evolution (recommended daily path): `light-voice-evolution/SKILL.md`
- Voice Changelog (light-mode one-line audit): `references/voice-changelog.md`
- Tiered outputs: `outputs/L3/` and `outputs/L2/` (with READMEs explaining naming and workflow)

## Notes
- This skill stays pure Hermes/Grok — no external scripts.
- Supports Kanban operation on the `kb-synthesis` board.
- **Recommended path for evolving the converter voice:** Use the sibling `light-voice-evolution` skill ("Run light voice evolution"). See the dedicated "Evolving the Voice Converter (Recommended: Light Path)" section above and `light-voice-evolution/SKILL.md`. It is lighter, flexible, and the normal daily tool.
- The full heavy evolutionary system (`../evolution/`) with multi-variant generation, strict rubric scoring, and rich history remains available for deep experiments. See `../evolution/README.md` (now labeled as the advanced path).
- L3 and L2 outputs are placed in `outputs/L3/` and `outputs/L2/` respectively so you can review before promoting anything to `wiki/` (L1).

## Version
v0.6+ (auto-versioned on each successful apply-update; the live genome header in converter.md carries the exact <!-- Version: ... --> comment after the first apply-update and thereafter)