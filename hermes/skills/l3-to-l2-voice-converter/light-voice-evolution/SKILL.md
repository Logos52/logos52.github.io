# Light Voice Evolution

## Description
A lightweight, flexible tool for improving the L3 → L2 voice converter (and polishing individual L3 drafts) by scanning real usage material and `style-feedback.md`.

This is the **recommended daily path** for evolving the voice of the knowledge base. It is deliberately lighter and more flexible than the heavy evolutionary tools in `hermes/skills/evolution/`.

## When to Use
- You want help turning accumulated style-feedback + recent L3 material into better converter logic.
- You have one or more L3 drafts and want a polished L2 version.
- You want a quick, useful synthesis rather than a rigid multi-variant evolutionary run.

## Recommended Workflow (Context)
See the detailed "Recommended Workflow" and "Voice Evolution Quick Start" in the parent `../README.md`. In short: do real L3 work → convert or light-evolve to L2 in the tier folders → human L2→L1 edit → append rules to `references/style-feedback.md` → optionally invoke this skill again to harvest the new signal into proposals or improved drafts. The daily habit of appending to style-feedback (after real wiki edits) is the zero-tool part of the loop; this skill is the optional accelerator.

## Inputs
- Optional: specific L3 files or date range to focus on
- Optional: instructions or focus (e.g. “focus on reducing hedging and improving operator framing”)

## Outputs
- Flexible synthesis or proposed improvements (may include a full revised converter prompt, a set of targeted edits, observations + suggestions, or a mix)
- When applying changes: properly named files in `outputs/L3/` and/or `outputs/L2/`
- One-line entry appended to `references/voice-changelog.md`

## Invocation
Natural language examples:
- "Run light voice evolution"
- "Run light voice evolution on the last few maintenance reports"
- "Suggest voice updates for the L3 to L2 converter"
- "Polish this L3 file into L2 using light voice evolution"

## Executable Procedure

Follow this procedure when the user invokes the skill.

1. **Resolve Inputs**
   - Ask for or default to recent L3 material in `raw/sessions/` (last 3–5 files is a reasonable default).
   - Allow the user to specify particular files or a focus area.
   - Load the latest content from `references/style-feedback.md`.
   - Optionally load the 4 test cases from `../evolution/references/test_cases/` for reference (do not force their use).

2. **Load Material**
   - Read the full latest `style-feedback.md`.
   - Read the selected L3 files.
   - If the user wants the converter itself improved, also read the current `converter.md`.

3. **Run Flexible Scan**
   - Send a focused prompt to the model that instructs it to:
     - Do a quick but thorough scan of the provided material.
     - Identify the most valuable voice or structural improvements.
     - Specifically check for sentences that lead with the artifact (“This challenge…”, “This technique…”, etc.) when explaining its purpose or value, and rewrite them so the benefit is stated directly from the operator’s perspective.
     - Produce the **most useful output possible** for the user (this could be a full improved `converter.md`, a set of targeted changes, observations + suggestions, a proposed L2 version of a specific file, or a combination).
   - Explicitly tell the model that the output format is flexible and should be chosen based on what will be most helpful.

4. **Present Results**
   - Show the model’s output clearly to the user.
   - Ask what (if anything) they want to apply or turn into a concrete change.

5. **Apply Changes (if requested)**
   - If the user wants to update the converter prompt:
     - Show the proposed new text (or diff).
     - On approval, replace the relevant section(s) in `converter.md`.
     - Append a one-line entry to `references/voice-changelog.md`.
   - If the user wants to create or update an L3 or L2 file:
     - Determine whether the output is L3 or L2.
     - Write it to the correct location using the naming convention:
       - `outputs/L3/{GPT,Grok,Opus,Hermes}/Descriptive-Source-Title.md`
       - `outputs/L2/{ready,revise,processed}/YYYY-MM-DD-Descriptive-Name-L2.md`
     - Append a one-line note to `voice-changelog.md`.

6. **Log & Close**
   - Summarize what was done.
   - Remind the user that any new voice rules discovered during the session should be added to `style-feedback.md`.

## Notes
- This skill is intentionally lightweight and opinionated toward usefulness over ceremony.
- It does **not** run the full heavy evolutionary machinery (population, multi-variant judging, rich history entries). Those remain available in `hermes/skills/evolution/` for deeper experiments.
- Always default to writing into the model-specific `outputs/L3/` folder and one of the curated `outputs/L2/` lifecycle folders unless the user explicitly overrides.
- Keep prompts reasonably short — the value comes from the quality of the scan and the user’s judgment, not from massive context.
- See the sibling top-level `../README.md` (in the l3-to-l2-voice-converter directory) for the full "Recommended Workflow" and "Voice Evolution Quick Start" that places this light skill in context with the daily converter and the manual style-feedback habit.

## References
- `converter.md`
- `references/style-feedback.md`
- `../evolution/references/test_cases/` (optional reference)
- `references/voice-changelog.md`
- `outputs/L3/` and `outputs/L2/`
