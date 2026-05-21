# L3 → L2 Voice Converter Family

This directory contains the daily driver and recommended lightweight evolutionary tooling for converting raw agent first-pass synthesis (L3) into polished, high-signal, operator-oriented L2 content that matches the voice of the llm-knowledge-base wiki.

## Core Components

- `SKILL.md` — The main invocable skill (`l3-to-l2-voice-converter`). Handles conversion of individual L3 files or text, writes to the tiered `outputs/L3/` and `outputs/L2/` locations, and incorporates rules from `references/style-feedback.md` on every run via the Pre-Write Integrity Pass in `converter.md`.
- `converter.md` — The live prompt logic (Core Principles + mandatory Pre-Write Integrity Pass with style consultation, bad-pattern pre-scan, and post-draft 3-sentence silent audit).
- `light-voice-evolution/SKILL.md` — **The recommended daily evolution tool** (light, flexible, low-ceremony). "Run light voice evolution" to scan real usage + style feedback and propose improvements or produce L2 drafts.
- `kanban-integration.md` — Guidance for operating the skill on the `kb-synthesis` board.
- `references/` — Living support files:
  - `style-feedback.md` (primary; append after every L2 → L1 edit)
  - `voice-changelog.md` (light-mode one-line audit trail)
  - `references/README.md` (further details)

## Tiered Output Structure (Canonical)

All L3 drafts and L2 polished results belong in:

- `outputs/L3/{GPT,Grok,Opus,Hermes}/` — Model first-pass synthesis. Sonnet drafts are folded into `Opus/`. See the L3 README.
- `outputs/L2/{ready,revise,processed}/` — Curated synthesis after converter, light evolution, or human comparison. See the L2 README.

Never write L3/L2 material to old locations (`L2-drafts/`, `outputs/syntheses/`, etc.). The light skill and converter default to the correct tiers. L2 files are the staging area before human promotion to `wiki/` (L1).

## Recommended Workflow (Light Path First)

1. **Daily driver (zero ceremony)**: Produce or receive L3 material (e.g. from maintenance reports in `raw/sessions/`). Run the converter ("Convert this L3 file to L2" or via kanban). It automatically consults the latest `style-feedback.md`.

2. **After human L2 → L1 (wiki) polish**: Immediately append the concrete voice/signal improvements (with before/after examples) as a new dated section in `references/style-feedback.md`. This is the primary compounding habit.

3. **When you want help synthesizing improvements**: Invoke the light voice evolution skill ("Run light voice evolution", "Run light voice evolution on the last few maintenance reports", "Polish this L3..."). It performs a flexible scan of recent real L3 + `style-feedback.md` (optionally the 4 test cases) and produces whatever is most useful (revised converter text, targeted edits, observations, or ready L2 drafts). On apply: correct tiered files + one short line in `voice-changelog.md`.

4. **Occasional deep experiments (advanced)**: Use the heavy tools in `../evolution/` (see that README's prominent light-first callout) when you want multi-variant generation, rubric scoring on the 4 test cases, rich `references/history/` entries, and guarded apply-update with version comments.

5. **Close the loop**: After any real usage (light or heavy), test the improved converter on fresh L3 material, capture new insights in `style-feedback.md`, and (if using heavy) record measurements.

The light path keeps day-to-day voice improvement natural and low-friction while still delivering genuine evolutionary power from your actual work.

## Voice Evolution Quick Start

**Goal:** Keep the L3 → L2 converter (and your wiki voice) improving with minimal overhead.

**First time / setup (already done):**
- `outputs/L3/` and `outputs/L2/` exist with clear READMEs and naming rules.
- `references/style-feedback.md` has the seed 2026-05-18 Core Operator Voice Refinements.
- `converter.md` has the strong Pre-Write Integrity Pass.
- `light-voice-evolution/SKILL.md` is ready.

**Typical session:**
1. Do real work that produces L3 (or take existing in `raw/sessions/`).
2. "Convert <file> to L2 using l3-to-l2-voice-converter" (or let maintenance/kanban trigger it). Output lands in the right tier.
3. Human-edit the L2 result into `wiki/` as needed.
4. Append 1–4 concrete, dated rules + exact sentence before/after examples to `style-feedback.md`.
5. (Optional but powerful) "Run light voice evolution on the last few sessions" — review proposals, apply what helps. One-line changelog entry created automatically.
6. Repeat. The converter gets better on every subsequent real call because it reads the updated feedback file.

**Natural language invocations that work:**
- For conversion: "Run l3-to-l2 on the latest maintenance report"
- For evolution: "Run light voice evolution", "Suggest voice updates for the L3 to L2 converter", "Polish this L3 file into L2 using light voice evolution"

**When to reach for heavy evolution instead:**
- You want 4–6 scored variants + detailed per-test bad-pattern analysis.
- You want a full generation-*.md + eval-*.md audit trail.
- You are doing a deliberate measurement baseline or testing a hypothesis across the rubric.

See `../evolution/README.md` (top callout) and the individual heavy SKILLs (each now carries a light-preferred note).

**After any apply or manual converter tweak (light or heavy):** Test immediately on a real messy L3 file from `raw/sessions/`. Compare side-by-side with prior output. Capture surprises in `style-feedback.md` and/or the journal.

**Health check (occasional):**
- Confirm no new L3/L2 material is landing in old folders.
- `git diff hermes/skills/l3-to-l2-voice-converter/converter.md` + `tail references/voice-changelog.md` tells you the recent story.
- For heavy runs: inspect the latest `../evolution/references/history/generation-*.md`.

This system is designed so the *human* L2 → L1 edits are the source of truth that compounds. The tools (especially light) just make harvesting and applying that signal cheap.

## References & Further Reading
- `SKILL.md` and `light-voice-evolution/SKILL.md` (executable procedures)
- `converter.md` (current logic)
- `references/style-feedback.md` and `references/voice-changelog.md`
- `outputs/L3/README.md` and `outputs/L2/README.md` (tier details + workflow)
- `../../../00 Command Center/Writing Standards.md`
- `../evolution/README.md` and its SKILLs (advanced heavy path only)
- `journal/2026-05-22-evolution-mvp-first-runs.md` (historical template; adapt for light usage)
- The authoritative lighter plan (session plan.md that defined this 6-phase approach)

All changes respect the four-tier model (L4 raw → L3 first-pass → L2 voice-polished → L1 wiki), AGENTS.md safety model, and the preference for lightweight daily use with optional heavy ceremony only when explicitly wanted.
