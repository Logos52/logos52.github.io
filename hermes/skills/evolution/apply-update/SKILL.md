# apply-update

**Description**  
Takes a winning prompt variant from an evolutionary generation and applies it to the live L3 → L2 voice converter skill. It also records the change with full before/after details for auditability and future reference.

> **Note:** The light voice evolution skill (`../../l3-to-l2-voice-converter/light-voice-evolution/SKILL.md`) is the recommended low-ceremony path for most improvements and produces only a one-line entry in `voice-changelog.md`. This apply-update skill is part of the heavy system and produces rich history entries under `references/history/`. See `../README.md` for guidance on choosing the right path.

**When to Use**  
- Called automatically by `run-generation` at the end of a successful evolutionary cycle.
- Can also be called manually if you want to apply a specific variant without running a full generation.

**Inputs**  
- The winning prompt variant (full text of the new L3 → L2 converter).
- Metadata about the generation, including:
  - Generation number / timestamp
  - Scores of the winning variant
  - Notes or reasoning for why it was selected
  - (Optional) Previous version for comparison

**Outputs**  
- Updated live L3 → L2 converter (auto-applied)
- New entry written to `references/history/` containing the full change record

**Executable Procedure (Follow Exactly — Safety First)**

Follow this procedure exactly, in order, without skipping steps (matches evaluate-variant/runner.md contract).

This turns apply-update into the safe promotion step. Invoked by run-generation at end of cycle (or manually with a specific winning variant + metadata). Uses direct atomic write to the skill file (internal capability definition, distinct from wiki/ content) after full audit + secret scan + visible summary. Matches chosen direct-write model with user-visible confirmation.

**Step 0: Inputs & Prep**
- Required: winning_prompt (full text of new converter), generation_meta (object or summary: gen_id e.g. "001", timestamp, overall_score, per-criterion avgs, notes, test_cases_used, mutation_notes, winner_variant_id, model="Grok-4.3").
- Optional: previous_version_text for diff (or read it now).
- Target file: always `../l3-to-l2-voice-converter/converter.md`
- History dir: `../../references/history/`

**Step 1: Safety — Secret Scan (MANDATORY, never skip)**
Before any write or backup:
- In a dedicated model turn, send this exact prompt to Grok-4.3 (or perform literal check): "Perform a literal substring scan of the following text for these exact patterns (and any 20+ char high-entropy base64/hex token after common prefixes): sk-, sk-proj-, sk-ant-, AIzaSy, hf_, xoxb-, -----BEGIN, PRIVATE KEY, OPENAI, ANTHROPIC_API, GROK_API, GOOGLE_API, Bearer +long, password=, token=, secret=, api_key=. Report every match with surrounding 10 chars (redact sensitive values). If none at all: exactly CLEAN. Text: [winning_prompt + notes]"
- If the result is not exactly "CLEAN": ABORT immediately. Output: "SECURITY ABORT: Potential secret detected... Report the matching line (redacted) and the generation meta."
- Log the *exact scan prompt sent* + full result ("CLEAN" or "MATCHES: ...") in the history entry under "Secret scan".
- (Rare for prompt text; this is r0b0tlab-aligned guard per AGENTS.md.)

**Step 2: Read Current + Backup**
- Read the full current content of target `converter.md` → store as before_text + current_version (parse any "Version:" or "v0." string present).
- **Physical backup (belt-and-suspenders)**: Write the full `before_text` to `../../references/history/converter-backup-<ts>.md` using Hermes fs (in addition to the rich generation-*.md which contains it).
- Create timestamped backup copy conceptually (in practice: the history entry will contain the full before; optionally the procedure can instruct "cp" equivalent via Hermes fs if supported, but primary safety is the immutable history record).
- Compute short diff summary (first changed lines or key sections that differ).

**Step 3: Prepare New Content + Version Bump**
- New content = winning_prompt (ensure it starts with the standard "# L3 → L2 Voice Converter (Current Logic)" header).
- Append or update version metadata inside the prompt (as comment block at top after header):
  ```
  <!-- Version: v0.7-gen-001 (2026-05-22, score 4.3, winner v03) | Previous: v0.6 -->
  ```
  (Find/replace or insert after the first --- or header. Bump minor or use gen-N.)
- If no version was present, insert one.

**Step 4: Write Rich History Entry (append-only, before the skill file change)**
- Compute filename: `generation-YYYY-MM-DD_NNN.md` (NNN = next integer, start at 001; scan *only* existing generation-*.md files. If collision on same day, increment NNN to next free or append -HHMM suffix for uniqueness).
- Build the full Markdown record using the exact template from `../../references/history/README.md` + the provided meta:
  - Header with gen id, model, focus (from meta.notes), variants count, winner.
  - Summary scores table (from meta).
  - Winning prompt (full or "see snapshot in this entry").
  - Per notes, applied change (before excerpt 200 chars vs after, reason).
  - Full raw: include the per-test scores, bad_pattern counts if available, the scan result ("secrets: clean").
  - End with machine JSON block for the generation_meta.
- Write this file to history/ using Hermes fs write (durable audit).
- This is the required audit record — never proceed to replace without it succeeding.

**Step 5: Atomic Replace of Live Converter (after visible confirmation)**
- Present to user / in TUI output the full PREVIEW block (as shown in run-generation or manual call).
- **TUI reality contract (streaming-safe)**: The procedure *always prints the complete preview + history path first*, then requires an explicit follow-up user reply of "YES" (case-insensitive) in the *next* turn/message before writing. In run-generation one-command flow, the orchestrator ends after printing preview (history already durable) and instructs "Reply YES to apply now". Standalone apply-update behaves the same: print preview, end turn, wait for YES on re-invocation or next message. Never auto-apply in the same response that showed the preview. This satisfies AGENTS explicit approval + prevents bypass in single-stream TUI.
- On receiving explicit "YES" (or user confirmation in manual flow): perform the write:
  - Write the new_content (with bumped version) to the target converter.md file.
  - Verify the write by re-reading first 100 chars and confirming the version bump is present.
- On "NO" or any other reply / no confirmation: abort, leave everything as-is, point to the history entry for manual apply or rollback later.

**Step 6: Rollback / List Helper (always available)**
- After success: "Update complete. Live converter is now v0.7-gen-001. To rollback: 1. Read the generation-*.md for the desired prior state, 2. Call apply-update again with that prior prompt as 'winning' (or manually cp the before from history into converter.md). History remains the source of truth."
- To list: "List all generation-*.md in references/history/ and their winner scores from the headers."

**Step 7: Return**
- Confirmation + path to the new history entry + new version string.
- "The evolutionary update is now live. Re-run evaluate-variant on the live converter to confirm score uplift. Then use the improved l3-to-l2-voice-converter on real L3 material."

**Error / Edge Handling**
- Write fails (permissions): write the full proposed new converter + diff to a new `raw/sessions/apply-failed-*.md` and instruct user to apply manually.
- No history write possible: abort before touching converter.
- Version parse fails: use "v0.6 -> v0.7-gen-NNN" default.
- Always keep history/ as the rollback mechanism + git.

**References**  
- Target converter and `../../references/history/README.md` (for template)
- `../l3-to-l2-voice-converter/converter.md`

**Notes**  
- Now fully executable. Enforces "never write without full audit record" + secret scan.
- Direct write chosen for this internal skill self-evolution (capability code, not user wiki content) with mandatory visible preview + history-first.
- Rollback always possible via history or git.
- For normal L3/L2 artifact production, the light voice evolution skill (and the main l3-to-l2-voice-converter) write to the canonical `outputs/L3/` and `outputs/L2/` tiers (see their READMEs). This heavy apply path is focused on converter prompt evolution only.

This skill guarantees safe, auditable, one-way promotion of better voice converters.