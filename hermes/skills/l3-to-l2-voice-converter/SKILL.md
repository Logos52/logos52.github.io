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

## Inputs
- A file or text containing L3 material (session summary, agent draft, maintenance report, etc.)

## Outputs
- A rewritten version in L2 voice, written to `L2-drafts/`

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
4. Writes the result to `L2-drafts/`.

## Feedback Loop (Manual L2 edits → Improved L3→L2)
After you manually edit from L2 into the final wiki location, append any voice or signal improvements to `references/style-feedback.md`.

The converter consults this file on every run, so your manual refinements directly improve future L3 → L2 output.

## References
- Writing Standards: See `references/writing-standards.md`
- Evaluation Rubric: See `references/rubric.md`
- Test Cases (for development): `references/test-cases/`
- Style Feedback Log: `references/style-feedback.md` (living record of manual L2 edits)

## Notes
- This skill stays pure Hermes/Grok — no external scripts.
- Future versions will support versioned converter prompts and evolutionary improvement via the evolution skill.
- Output is intentionally placed in `L2-drafts/` so you can review before moving anything to `wiki/`.

## Version
v0.5 (Evolved via Variant D — stronger feedback integration + internal check step)