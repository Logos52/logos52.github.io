# run-generation

**Description**  
The main orchestrator for the evolutionary system. This skill runs a full generation cycle: it generates new variants of the L3 → L2 voice converter, evaluates them, ranks the results, and applies the winning variant.

> **Note (Light Path Preferred for Daily Use):** The lighter, flexible `../../l3-to-l2-voice-converter/light-voice-evolution/SKILL.md` ("Run light voice evolution") is the recommended normal tool for improving the converter or polishing L3 material. This heavy orchestrator (and the three sibling skills) is for thorough experimental runs with population, rubric scoring, and full history/audit. See `../README.md` for the prominent guidance box directing most users to light mode first.

**When to Use**  
- This is the primary skill you (or a scheduled maintenance task) will invoke when you want to improve the L3 → L2 voice converter.
- Can be triggered manually via natural language (e.g. “Run a generation on the L3 to L2 converter”) or automatically as part of the maintenance system.

**Inputs**  
- (Optional) Number of variants to generate (default: 6)
- (Optional) Special instructions for this generation (e.g. “focus on reducing fluff” or “be stricter on attribution language”)

**Outputs**  
- A generation report (saved to `references/history/`)
- The winning prompt variant is automatically applied to the live L3 → L2 converter via `apply-update`

**Executable Procedure — Full One-Command Evolutionary Loop (Self-Contained Orchestrator)**

Follow this procedure exactly, in order, without skipping steps (matches evaluate-variant/runner.md contract).

When user says inside Hermes TUI: "Run a generation on the L3 to L2 converter" or "run-generation num=6 focus='stricter bad patterns and operator framing'" or "evolve the voice converter", follow this exact end-to-end procedure. All sub-logic is inlined (self-contained per design choice) so a single invocation drives generate → evaluate ×N → rank → apply, using Grok-4.3 for all creative/judge steps and Hermes fs for reads/writes/logs. Streams progress. Writes everything to history/.

**Inputs (from natural language or explicit)**
- num_variants: default 4 (recommended for first TUI runs to control context; 6 max)
- focus_instructions: e.g. "stricter on attribution language and fluff" or empty
- (Internally: always use all 4 test cases from ../../references/test_cases/*.md , Grok-4.3, full rubric; summaries for judge prompts)

### Step 0: Setup & Audit Start
1. Timestamp = now (e.g. 2026-05-22-1430). Gen ID = next NNN by scanning *only generation-*.md* in history/ (collision → increment or -HHMM suffix).
2. Read baseline: `../l3-to-l2-voice-converter/converter.md` (for generate + later diff).
3. Read `../../references/rubric.md` and the 4 test case files (extract for each: L3 Input, Target L2 Characteristics + User's Feedback, test_case_id).
4. Read `../../references/history/README.md` for exact generation-*.md template.
5. Announce: "Starting evolutionary generation <gen>. Will produce <N> variants, evaluate each on 4 cases, apply winner. All logged."

**Step 1: Generate Variants (self-contained hybrid mutator logic)**
- Execute the population logic (equivalent to generate-variants executable procedure, inlined for autonomy):
  - Summarize latest style-feedback + any prior winning notes from recent history files (1-2).
  - Build mutator prompt with: mutation guidelines (mix 50% incremental on high-weight rubric axes especially bad_patterns, 30% recombine from style-feedback/history, 20% exploratory), current converter full, rubric, focus, history seeds.
  - Send this as the user message to Grok-4.3 → expect JSON array of {variant_id, prompt, note}.
  - Repair parse if needed. Validate distinct, non-identical to baseline, each note mentions rubric axis.
- Log the raw variants array to `../../references/history/variants-<ts>.json`.
- Stream: "Generated 6 variants: v01 (note: ...), v02 (...), ..."

**Step 2: Evaluate Each Variant (self-contained evaluate loop, inlined from evaluate runner)**
For **each** of the N variants (in order, stream progress):
  a. variant = the full prompt text from above.
  b. per_test_results = []
  c. For each of the 4 test_cases:
     - l3_input = ... (full for converter run call only)
     - target = ... (use summary of Target L2 Characteristics for judge prompt to control length; full details only in history log)
     - **Run candidate converter**: Build " [PASTE FULL variant prompt] \n\n L3 Input:\n\"\"\"\n{l3_input}\n\"\"\" " → send to Grok-4.3 → capture raw_l2_output exactly.
     - **Context guard**: If raw_l2_output or combined prompt would exceed practical limits, truncate raw_l2 to first 800 chars + append "[truncated; full preserved in history log]" for the judge turn only.
     - **Bad-pattern pre-scan**: Explicit follow-up or combined: "Scan the raw_l2_output for these patterns and count occurrences:
       - 'X is not Y, it’s Z' or close variants
       - 'The author argues', 'According to the source', 'The text states', 'X claims that'
       - Excessive hedging or meta-framing sentences
      Return a simple count + examples of each violation found."
     - **Judge**: At the beginning of Step 2 (or per test case), read `../../evaluate-variant/evaluator.md` in full. Build the judge prompt by starting with the *entire content* of its Critical Rules (Bad Patterns — Very High Weight with exact 5/4/3/2/1 scoring, Operator Framing, Signal Density, Other Criteria, Final Instructions) + Output Contract — STRICT (the exact JSON schema with overall_score, scores{operator_framing, signal_density, bad_patterns, faithfulness, mechanistic_clarity, overall_voice_alignment}, notes, per_test_case array containing test_case_id, scores, justification, bad_pattern_count, bad_pattern_examples, raw_output). Then append: the full rubric, this test_case's targets/feedback, the raw_l2_output, and the bad-pattern scan results. End with: "Output ONLY valid JSON matching the exact schema in evaluator.md. Be strict."
       Send this as the user message to Grok-4.3. If parsing fails, run a repair turn: "The previous output was not valid JSON. Re-output only the clean JSON object." Parse the result.
     - Store for this test: scores, justification, bad counts, raw_l2 (full for log, truncated for summary).
  d. Aggregate for the variant: avg per criterion (1 decimal), overall_score = mean of 6 (or weighted if rubric specifies; use simple mean), worst_case_id, short notes highlighting bad patterns if any.
  e. Stream live: "Variant v03 scored overall 4.3 (bad_patterns:5, operator:4.5, ...). Strong on density, minor note on 003."
  f. Record full per-variant data structure for later ranking + history.

**Step 3: Rank + Select Winner**
- Sort variants by:
  1. overall_score DESC
  2. tie: bad_patterns score DESC (Very High weight)
  3. tie: overall_voice_alignment + operator_framing DESC
- Winner = top. Log "Winner: <id> with <score>. Reason: ..."
- If all similar, still pick one + note "exploratory diversity preserved".

**Step 4: Apply Winner via Apply Logic (self-contained, see also apply-update/SKILL for details)**
- Build generation_meta from all data: scores table, per variant notes, test_cases="001-004", focus, winner details.
- Execute the apply-update procedure (inlined essentials):
  - Run secret scan on winning_prompt (as defined in apply-update).
  - If clean: write the generation-*.md history record (full template populated with before/after excerpts, full scores table, raw per-test summaries, mutation notes, "secrets: clean").
  - Print the full === APPLY-UPDATE PREVIEW === block (history path, diff summary, before/after excerpts, "Secret scan: CLEAN").
  - **TUI contract**: End this procedure here with: "History entry is durable. Reply with exactly 'YES' in your next message to perform the atomic replace of converter.md (or 'NO' / anything else to abort safely). This ensures explicit gate even in streaming TUI sessions."
  - Do *not* perform the replace in the same turn. (See apply-update/SKILL.md Step 5 for the follow-up invocation that does the write after YES.)
- (The full detailed safety/rollback steps from apply-update/SKILL.md are followed here on the confirming turn.)

**Step 5: Final Output & Logging**
- Full generation report (also written as the history file):
  Markdown with table of all variants' scores, winner highlighted, links to per-eval logs if separate, the history path.
- "Generation 001 complete. Live converter updated to v0.7-gen-001 (score 4.3 uplift on bad_patterns). History: references/history/generation-....md
  Next recommended: 1. Manually test the live l3-to-l2-voice-converter on a real raw/sessions/ L3 file. 2. Edit result to wiki/ and append concrete feedback to style-feedback.md. 3. Re-run generation to close the loop."
- Also write a compact machine JSON at end of history entry for future tools.

**Error / Robustness (throughout)**
- Any sub model call fails or context limit hit: retry 1x with shorter context / truncation, or skip that test/variant with conservative low score + note. Use repair turns aggressively.
- JSON parse after repair fails: use conservative fallback scores (overall 2.5) and continue. After two failed repairs on any JSON (mutator or judge), fall back to N=3 safe incremental variants or partial scores and log the fallback reason.
- No improvement (winner score <= baseline): still apply if exploratory value or ask user; otherwise abort with "No clear winner — manual review advised. History has the data."
- Always leave complete audit trail even on partial failure (write what you have to a gen-*-partial.md).

**References (loaded during run)**
- All under evolution/: rubric, test_cases, history/README + existing entries, the three sibling SKILLs for their contracts (but logic inlined here), ../l3-to-l2-voice-converter/converter.md + its style-feedback.

**Notes**
- **Maintenance Note (duplication hazard)**: This orchestrator contains condensed inlined copies of generate / evaluate / apply logic for one-command self-contained execution (user choice A). After edits to `evaluator.md` / `mutator.md` / apply-update/SKILL.md, review and sync the relevant inlined sections here. Prefer small targeted fixes over large rewrites.
- This is the primary invocable entrypoint ("run a generation..."). Provides the full autonomous loop with visibility.
- Uses only Grok-4.3 for quality steps + Hermes for fs + sequencing.
- **Context management (plan §6 risk mitigation)**: For first real runs, use num_variants=4 (or lower) to reduce 6×4 model calls and prompt bloat. Test cases use summaries for judge (full L3 only for converter execution). Raw outputs truncated for judge prompts (full always in durable history logs). Repair turns used aggressively; on context error fall back to partial scoring.
- After apply, the improved converter is immediately usable by the l3-to-l2-voice-converter skill.
- Dry-run future: stop before Step 4 apply.
- No Python. Pure Hermes/Grok skill.

Run this and the system compounds: real usage + human L2→L1 edits → style-feedback → better future generations.