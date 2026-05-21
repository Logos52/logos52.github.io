# evaluate-variant Runner (Executable Procedure)

This file contains the precise, repeatable procedure that Hermes follows when the `evaluate-variant` skill is invoked. It turns the design into an executable loop inside the Hermes TUI using Grok-4.3 for both candidate conversion and judging.

## Invocation Contract

**Natural language (preferred):**
- "Evaluate this prompt variant against the test cases"
- "Run evaluate-variant on [paste or path to variant] using test cases 001 and 003"
- "Score this L3-to-L2 converter version with the full suite"

**Explicit / structured inputs (when calling from another skill):**
- `variant`: full text of the candidate L3→L2 prompt (or path to .md containing it)
- `test_cases`: comma-separated IDs or "all" (default: all 4)
- `log_to_history`: true/false (default true when part of a generation)

**Outputs (always produced):**
- Structured JSON summary (overall_score, per-criterion averages, per-test details)
- Human-readable Markdown report (for display in TUI)
- Full raw logs written to `references/history/eval-YYYYMMDD-HHMM-<variant-id>.md` (or temp if manual)

## Step-by-Step Execution (Follow Exactly — Do Not Skip)

### Step 0: Preparation
1. Confirm you have access to the variant text (ask user or read file if path given).
2. Resolve test cases to run:
   - Default: 001, 002, 003, 004 from `../../references/test_cases/`
   - Load the full content of each selected `NNN_*.md`
3. Load the current rubric: read `../../references/rubric.md` in full.
4. Load the base evaluator judge prompt: read `evaluator.md` in full.

### Step 1: Per-Test-Case Loop (repeat for every selected test case)

For each test_case:

**1a. Extract from test case file**
- `l3_input`: the "L3 Input" section
- `target_characteristics`: the "Target L2 Characteristics" + "User's Feedback & Corrections"
- `test_case_id`: the 001 etc.

**1b. Run the candidate converter (first model call — use Grok-4.3)**
- Build the exact prompt to send:
  ```
  [PASTE THE ENTIRE CANDIDATE VARIANT PROMPT TEXT HERE]

  L3 Input:
  """
  {l3_input}
  """
  ```
- Send this as the user message to Grok-4.3 (no extra system prompt unless the variant itself expects one).
- Capture the **raw_l2_output** exactly (preserve all formatting).

**1c. Strict bad-pattern pre-scan (in the same turn or immediate follow-up)**
- Before judging, explicitly ask (or include in judge prompt):
  "Scan the raw_l2_output for these patterns and count occurrences:
   - 'X is not Y, it’s Z' or close variants
   - 'The author argues', 'According to the source', 'The text states', 'X claims that'
   - Excessive hedging or meta-framing sentences
  Return a simple count + examples of each violation found."

**1d. Run the evaluator judge (second model call — Grok-4.3)**
- Build the full judge prompt:
  - Start with the entire content of `evaluator.md`
  - Append the full `rubric.md`
  - Append the current test_case's target characteristics and notes
  - Append the raw_l2_output from 1b
  - Append the bad-pattern scan results from 1c
  - End with: "Output ONLY valid JSON matching the exact schema in evaluator.md. Be strict."

- Send to Grok-4.3.
- Parse the returned JSON. If parsing fails, run a repair turn: "The previous output was not valid JSON. Re-output only the clean JSON object."

**1e. Record per-test result**
Store:
- test_case_id
- raw_l2_output (truncated for summary, full in log)
- bad_pattern_violations (count + examples)
- scores dict (all 6 criteria 1-5)
- justification (short)
- overall_for_this_case (if provided, else average)

### Step 2: Aggregation
After all test cases:
- Compute average per criterion across cases (round to 1 decimal)
- Compute overall_score (weighted or simple average — prefer the rubric's spirit; currently unweighted mean of the 6)
- Produce short "notes" highlighting the strongest and weakest areas (especially call out any bad-pattern repeats)
- Identify the single worst test case for the variant

### Step 3: Logging & Output
**Always write a durable log file** (even for manual runs):
- Path: `../../references/history/eval-YYYY-MM-DD-HHMM-<short-variant-id>.md`
- Content must include:
  - Timestamp + model (Grok-4.3)
  - The variant prompt (full or hash + first 500 chars)
  - Per-test-case: input summary, raw output, bad pattern counts, scores, justification
  - Aggregated scores table (Markdown)
  - Final notes + winner recommendation if this is part of a generation
- If this evaluation is part of `run-generation`, also append a machine-readable JSON block at the bottom.

**Return to caller / user:**
1. Clean human-readable summary (Markdown table of scores + top notes + "Recommended action")
2. The full structured JSON (for downstream skills to parse)
3. Link to the written history log file

### Step 4: Error Handling & Robustness
- If any model call fails or times out: retry once with shorter context.
- If JSON is still broken after repair: fall back to a structured Markdown table that you (Hermes) parse manually and convert to the expected JSON shape.
- Never invent scores. If uncertain on a criterion, score conservatively (lower) and note it.
- Always preserve the raw outputs — they are the evidence.

## Example Manual Invocation Flow (in Hermes TUI)

User: "Evaluate the current l3-to-l2 converter against all test cases"

Hermes:
1. Reads the live `../l3-to-l2-voice-converter/converter.md` as the variant
2. Runs the 4-step loop above
3. Prints a nice table:
   ```
   Test Case | Overall | Bad Patterns | Signal Density | ...
   001       | 4.1     | 5 (clean)    | 3.5            | ...
   ...
   Aggregate | 3.9     | ...
   ```
4. Writes the full log
5. Says "Evaluation complete. Log: references/history/eval-....md . Would you like to generate variants now?"

## Notes for Future Refinements (Do Not Implement Yet)
- Parallel test case evaluation if Hermes supports concurrent calls
- Caching of identical (variant + test_case) pairs
- Automatic extraction of "variant_id" from frontmatter or hash
- Support for "focus" instructions that temporarily increase weight on one rubric dimension

This runner turns the evaluate skill into a reliable, auditable fitness function for the evolutionary loop.
