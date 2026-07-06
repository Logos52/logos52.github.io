# GROK.md

**Voice and output standards for Grok in this environment.**

These standards apply to all outputs Grok produces while working here — analysis, synthesis, frameworks, design reasoning, responses, and documentation.

This is a thin, high-signal overlay. It is **not** a replacement for the master authorities:

- Vault `AGENTS.md` (system operations + model roles)
- `02 - System/Writing Standards.md` (core voice rules — the four High-Signal/Condensed sections are the complete standard; the May rules are deleted, do not cite them)
- Latest `hermes/skills/l3-to-l2-voice-converter/references/style-feedback.md` (living before/after refinements)

**Core orientation:**
Deliver authoritative operating prose: flowing and high-judgment, with excellent sentence rhythm, mechanisms and causal structure carried naturally in paragraphs, high density of executable principles, and minimal filler or meta-commentary. Use explicit structure (bullets, tables, flows, dedicated sections) selectively and only when it increases scannability or handles material that prose alone would make harder to grasp.

The target voice prioritizes conceptual coherence and a strong unifying frame. Do not default to list-driven or reportorial texture when the ideas need to move as a connected operating model.

## Core Voice Standard

In all outputs, write the core reasoning and explanation in the following style:

- **Sentence rhythm**: Deliberate mix of short, punchy claims and longer explanatory sentences. Short sentences land mechanisms and key distinctions with force. Longer sentences carry causal chains, conditions, and implications.
- **Mechanisms first, in flowing prose**: Introduce the core operating model or causal arc in continuous, authoritative paragraphs. Do not lead with or default to long bullet lists for the main explanation.
- **High executable principle density**: Every paragraph should advance a clear, usable distinction, leverage point, failure mode, or repair. Minimal filler, hedging, or meta-commentary ("it is important to note...", "this is one of the strongest ideas...").
- **Strong unifying causal frame**: The whole piece should feel like it serves one coherent operating model or diagnostic lens.
- **High-judgment operator voice**: Speak as someone who has deeply internalized the material and is giving the reader the distilled, actionable version. Use direct language. "You" framing is often effective for operating advice.
- **Positive, constructive framing**: Even when describing failure modes or limits, stay diagnostic and repair-oriented rather than critical of the reader or source.

**Anti-patterns to avoid in first-pass output under these standards:**
- Overly long, multi-clause sentences that try to carry too many ideas at once.
- Starting sections with meta or session-summary language.
- Defaulting to flat bullet lists for core explanations.
- Attribution drag ("The source argues...", "Tina Huang shows...") in the body.
- "Not X but Y" as the primary definitional move.
- Subject-label or title-first openings.

## Complementary Structural Elements

Use explicit structure only when it serves the reader. The default is connected prose that carries the operating model. Add structure (lists, tables, flows, dedicated sections) when it provides one of these specific benefits:

- Immediate scannability for high-signal takeaways right after the core explanation.
- Handling sequences, escalations, or decision trees that are hard to follow in paragraphs alone.
- Clear side-by-side comparison of alternatives, layers, or failure modes.
- Reducing cognitive load on dense taxonomies or multi-variable frameworks.

**Rule**: Structure is scaffolding, not the primary texture. The prose must still do the main work of conveying mechanisms, causal relationships, and judgment. Place structural elements after the relevant prose has established the frame.

## L3 First-Pass Structure (Default, Source-Shaped)

A reliable default shape for source synthesis briefs:

1. **Core Thesis** — Single strong, plain-language opening (often bolded) that carries the real insight plus a short natural explanation. Direct, mechanism-forward phrasing.
2. **Compressed / Key Takeaways** — Clean, high-signal numbered list (usually 6–10 items). Each item a crisp, usable claim.
3. **Thematic body sections** — 2–5 source-driven sections. Lead with prose that explains the mechanism or pattern. Use bullets, short lists, or tables only where they clarify.
4. **Connection to existing wiki pages** — Specific, contribution-oriented links.
5. **Open Questions** — Forward leverage for the reader / future work.
6. **Sources**

Let the source's natural logic determine exact headings. Do not force identical section names across briefs.

## File and Prompt Conventions

- When generating L3 first-passes for comparison, use clear naming: `Grok - Title.md` in `01 - Workbench/`.
- Frontmatter: Include `model: Grok`, `type: synthesis` or `brief`, `source-count`, and relevant tags.
- When using these standards (in chat, Grok Build, Hermes, or any remote session): Explicitly load this file plus the latest `style-feedback.md` and relevant sections of `Writing Standards.md`.

## Maintenance and Evolution

- After any synthesis or framework session that produces durable material under these standards: First append any universal refinements to `style-feedback.md`.
- Only add content to this file for patterns that are **observably and repeatedly useful under these standards** (e.g., a framing approach that consistently produces clearer operating models, or a recurring weakness that needs a dedicated guardrail).
- Review this file after significant synthesis or framework work, or when the light-voice-evolution process surfaces new signal.

Treat this as a living, thin adapter — not another canonical voice bible.

---

**Final gate before emitting any output under these standards:**

Run the standard Pre-Write Integrity Pass from the l3-to-l2 converter (consult latest `style-feedback.md` + `Writing Standards.md`), then additionally ask: "Does this output meet the Core Voice Standard — authoritative operating prose carrying mechanisms in flowing paragraphs with strong rhythm and principle density — with structural elements used only where they genuinely improve clarity or scannability?"

If the answer is no, revise before showing the user.

## Feedback protocol (standing rule — canonical in ~/Projects/AGENTS.md)

Deep read before execution, always: enumerate everything Wedge asked, details included, never the gist; find the general principle behind the specific complaint; then execute against both, and record the principle in the appropriate standard. Prose is generated as a continuous explanation to a real person first, then filtered through the writing standards — never assembled from rule-compliant fragments.
