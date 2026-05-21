# generate-variants

**Description**  
Generates a population of meaningfully different prompt variants for the L3 → L2 voice converter. Uses a hybrid mutation strategy (incremental refinement + recombination from history + exploratory) focused on the 6 axes of the evaluation rubric. This is the "population" step of the evolutionary loop.

> **Note:** For daily voice work prefer the light flexible path (`../../l3-to-l2-voice-converter/light-voice-evolution/`). This skill is part of the heavy experimental system (full population + scoring + history). See `../README.md` top guidance.

**When to Use**  
- Called by `run-generation` as the first step of a full evolutionary cycle.
- Called manually when you want fresh prompt variants to test (e.g. "generate 8 variants focused on signal density").

**Invocation**

### Natural Language (Hermes TUI)
- "Generate variants for the L3 to L2 converter"
- "generate-variants num=6 focus='stricter on attribution language and fluff'"
- "Create 4 new prompt variants emphasizing operator framing"

**Inputs**  
- `num_variants`: How many to produce (default 6, recommended 4-8)
- `focus_instructions`: Optional natural language guidance (e.g. "reduce meta language", "increase mechanistic clarity on learning loops")
- `seed_from_history`: Whether to pull high-scoring past variants for recombination (default true)

**Outputs**  
- Clean JSON array of variants:
  ```json
  [
    {"variant_id": "v01", "prompt": "full prompt text...", "note": "Short explanation of the mutation and which rubric axis it targets"},
    ...
  ]
  ```
- Human-readable summary of the population strategy used.
- The variants are also written to a temp file or `references/history/variants-*.json` for the run.

**Executable Procedure (Follow Exactly When Invoked)**

Follow this procedure exactly, in order, without skipping steps.

Hermes (via Grok-4.3 in the TUI session) executes these steps for repeatable variant generation. This makes the skill fully invocable with "Generate variants for the L3 to L2 converter" or from run-generation.

### Step 0: Preparation (always)
1. Resolve inputs: num_variants (default 6), focus_instructions (optional string), seed_from_history (default true).
2. Read the live baseline genome: `../l3-to-l2-voice-converter/converter.md` (full text).
3. Read `../../references/rubric.md` (key criteria and weights for targeting mutations).
4. Read `../l3-to-l2-voice-converter/references/style-feedback.md` (latest rules; summarize the most recent 1-2 sections for context).
5. If seed_from_history: list files in `../../references/history/`, read the 1-2 most recent generation-*.md or eval-*.md that have high scores, extract 1-2 winning mutation ideas/notes (ignore if none yet).
6. (Optional) Read `mutator.md` for the exact output contract if needed for precision.

**Step 1: Construct Mutator Prompt (self-contained hybrid strategy)**
Build a single prompt for Grok-4.3:
- Prefix with the full text of the mutation guidelines and JSON contract (inline here for self-containment; equivalent to mutator.md):
  "You are an expert at improving and varying prompts for an LLM wiki system.
   You are given: the current L3 to L2 voice converter prompt, the evaluation rubric, optional recent high-scoring variants/notes from history.
   Task: generate new, meaningfully different versions...
   Mutation Guidelines: Focus on the 6 rubric axes (esp. operator_framing, signal_density, bad_patterns Very High weight). Mix: ~3-4 incremental refinements (e.g. strengthen Internal Check or bad-pattern rules), ~1-2 recombinations (pull strong phrasing from past winners + style-feedback), ~1 exploratory (new angle on mechanistic clarity or voice). Do not make tiny cosmetic changes. Each must target a clear rubric improvement.
   Output ONLY a clean JSON array (no extra text):
   [
     {
       \"variant_id\": \"v01\",
       \"prompt\": \"<FULL NEW CONVERTER PROMPT TEXT HERE, starting with the # L3 → L2 ... header and incorporating the change>\",
       \"note\": \"1-sentence: what changed and which rubric axis (e.g. 'Strengthened bad_patterns rule + added explicit scan step before rewrite to target Very High weight criterion')\"
     },
     ...
   ]
   Generate exactly N variants unless focus says otherwise."
- Append: "CURRENT LIVE CONVERTER:\n```md\n[full converter.md text]\n```"
- Append: "RUBRIC (target these):\n[excerpt of 6 criteria + weights from rubric.md]"
- Append: "LATEST STYLE-FEEDBACK (incorporate relevant rules):\n[recent sections summary]"
- If history seeds: "PAST WINNING MUTATIONS (recombine useful parts):\n[extracted notes]"
- If focus_instructions: append "ADDITIONAL FOCUS FOR THIS RUN: [focus]"
- End: "Now output the JSON array only."

**Step 2: Model Call + Parse**
- Send the constructed prompt to Grok-4.3.
- Capture response. If not pure JSON, run a repair turn: "The previous output was not valid JSON. Re-output only the clean JSON object matching the schema. No fences, no prose."
- Parse into list of {variant_id, prompt, note}. Validate: exactly the requested count, each prompt contains at least the core "L3 → L2 Voice Converter" header and "Internal Check", each note is non-empty and references a rubric axis.
- If validation fails, retry once with stricter instruction.

**Step 3: Audit Logging (required)**
- Generate timestamp e.g. 2026-05-22-1430.
- Write machine-readable snapshot: `../../references/history/variants-YYYY-MM-DD-HHMM.json` containing the input focus + full JSON array + baseline version note. (This enables audit and recombination in future gens.)
- (Human-readable optional: also append a short summary block to a generation log if this is part of run-generation.)

**Step 4: Return to Caller / User**
- Structured: the JSON array (primary for downstream like evaluate or run-gen).
- Human-readable: Markdown list:
  ```
  Generated 6 variants:
  - v01: [note] (incremental on bad_patterns)
  - v02: ...
  ```
- Say: "Variants ready. Each is a full self-contained converter prompt. Next: pass any/all to evaluate-variant for scoring, or let run-generation continue."

**Error Handling**
- **JSON Repair Contract** (standardized): Max two repair turns for any JSON (mutator output). After two failures: fall back to N=3 safe incremental variants derived from the 2 highest-weight rubric axes only; log the fallback reason. Never invent scores/variants.
- Model timeout / bad JSON after 2 tries: fall back to 4 safe incremental variants (manually constructed minimal diffs on the 2 highest-weight criteria) and note the fallback.
- Never produce variants that are identical to baseline.
- Always preserve full prompt text (do not truncate).

**References Used in Procedure**  
- `../l3-to-l2-voice-converter/converter.md`, `../../references/rubric.md`, `../l3-to-l2-voice-converter/references/style-feedback.md`, `../../references/history/`, `mutator.md` (for contract)

**Notes**  
- **Maintenance Note (duplication hazard)**: This procedure contains a condensed inlined copy of logic from sibling SKILLs (mutator, evaluator) for full self-contained autonomy (per user choice A). After any edit to `evaluator.md`, `mutator.md`, or apply-update, review/sync the inlined sections here. Prefer small targeted fixes.
- Now fully executable and self-contained in this SKILL.md (per current implementation rules — no external runner file).
- Produces the population for the evolutionary loop. The "note" enables intelligent ranking later.
- Designed so run-generation (or manual) can immediately feed results to evaluate-variant.

This completes the population step. Use together with evaluate-variant for the full loop.
