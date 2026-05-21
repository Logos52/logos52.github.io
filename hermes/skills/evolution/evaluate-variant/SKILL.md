# evaluate-variant

**Description**  
Evaluates a single version of the L3 → L2 voice converter prompt against the test cases using the defined rubric. Returns structured scores and notes so the evolutionary system can compare variants during a generation. This is the core fitness function for the evolutionary loop.

> **Note:** For normal daily improvements to voice quality, use the lighter `../../l3-to-l2-voice-converter/light-voice-evolution/SKILL.md` first. This evaluate skill (and the heavy evolution suite) is for rigorous experimental scoring against the fixed test cases when you want detailed metrics. See `../README.md`.

**When to Use**  
- Called by `run-generation` during an evolutionary cycle (primary use).
- Called manually to score any candidate prompt variant (including the live converter or experimental drafts).

**Invocation**

### Natural Language (Recommended inside Hermes TUI)
- "Evaluate this prompt variant against the test cases"
- "Run evaluate-variant on the current l3-to-l2 converter"
- "Score this variant using test cases 001 and 003 only"
- "Evaluate the prompt at /tmp/my-variant.md"

### From Other Skills (structured)
Pass `variant` (full prompt text or path) and optional `test_cases`.

**Inputs**  
- `variant`: Full text of the L3 → L2 converter prompt to evaluate (required).
- `test_cases`: Comma-separated list of IDs (e.g. "001,003") or "all". Default: all four.
- `log_to_history`: Whether to write a durable audit log (default true).

**Outputs**  
- Structured JSON (overall_score, per-criterion averages, per-test breakdown with raw outputs and justifications).
- Human-readable Markdown summary with score table and key notes.
- Durable log file written to `references/history/eval-*.md` containing every raw input/output for full auditability.

**Implementation**  
When invoked, **follow the complete executable procedure in `runner.md`** exactly. The runner orchestrates:
- Loading rubric + test cases
- Running the candidate variant on each L3 input (Grok-4.3 call)
- Strict bad-pattern pre-scan + LLM-as-judge scoring via the prompt in `evaluator.md`
- Aggregation, JSON enforcement, and rich history logging

**References**  
- `runner.md` — the precise step-by-step execution procedure (source of truth for Hermes)
- `evaluator.md` — the reusable LLM judge prompt
- `../../references/rubric.md`
- `../../references/test_cases/`
- `../../references/history/`

**Notes**  
- Designed for speed and repeatability (many calls per generation).
- Always uses Grok-4.3 via the current Hermes session for high-quality scoring and candidate execution.
- Never modifies any live converter — evaluation only.
- The bad-pattern penalty (Very High weight) is applied via explicit pre-scan + judge instructions.
- Future: caching, parallel evaluation, self-evaluation of the evaluator.