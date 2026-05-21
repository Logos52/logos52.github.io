# Style Feedback Log

Living collection of corrections and refinements from L2 → L1 edits.  
Each entry is a concrete rule or example that improved the final wiki voice.

Use these to strengthen the L3 → L2 converter prompt over time.

---

## 2026-05-18 — Core Operator Voice Refinements

- Start directly with action after any heading. Never open with explanatory framing or purpose statements.
- Use action-first or noun-implicit sentence structures ("Treat mindset as...", "Track the key signals by...").
- Remove all meta-framing sections: no "This is designed to...", "Why This Matters", "How to Use", "Overview", or similar blocks.
- Let headings and structure communicate purpose. The reader is already the operator.
- Eliminate repetitive subject references and low-signal transitions.
- Keep language concise, mechanistic, and high-signal. Prefer specific decision points and failure modes over general description.
- After Key Takeaways, move straight into content without additional introductory paragraphs unless they add immediate operational value.

---

## 2026-05-22 — Feedback from Gbrain and Lossless L2 Review (L3→L2 automation)

- **Do not lead with negative framing.** Avoid opening sentences that start with what something "does not" or "cannot" solve (e.g. "Larger context windows alone do not solve..."). Start instead with a positive statement of what the agent needs or what the approach provides. Negative framing can be used later in a section if it improves clarity, but do not lead with it.
  - Bad lead: "Larger context windows alone do not solve agent memory failures. Two additional layers are required..."
  - Good lead: "Agents need two memory layers beyond the context window. Gbrain gives the agent access to the organization's accumulated knowledge across different conversations and handoffs."

- **Reduce sentence density and awkward phrasing.** Avoid constructions that feel slightly off or overly technical even when factually correct. Prioritize natural, clear flow that reads easily on a first pass.
  - Example to avoid: "Gbrain indexes a markdown wiki or knowledge repo so agents can retrieve stable facts before acting."
  - Preferred: "Gbrain turns a collection of markdown files into a searchable knowledge base."

- **Minimize runtime/system jargon in explanations.** When describing technical behavior, use simpler, more human-readable language instead of precise but choppy system terminology.
  - Example to avoid: "Lossless preserves the raw messages of the current conversation even after the runtime compresses older turns into summaries."
  - Preferred: "Lossless keeps the full original messages from the current conversation available. The runtime will eventually summarize older turns to stay inside the context window."

- **Do not carry title analogies into the body.** Even if the title uses a metaphor (e.g. "not a bigger desk"), avoid extending that metaphor in the prose unless it adds real clarity.
  - Example to avoid: "Bigger context only widens the agent’s immediate desk."

- **Keep summary / thesis statements concise and low-jargon.** Final summary paragraphs should feel direct and benefit-oriented rather than dense or metaphorical.
  - Example to avoid: "Together they turn the agent from an amnesiac intern into a coworker who knows how the organization actually runs."
  - Preferred direction: "With both layers in place, the agent can work with the continuity a teammate would have."

- **Title preference (emerging).** For tool or technique explanations, titles in the form "Tool Name - [Clear benefit statement]" are preferred over more abstract or clever phrasing.

- **Do not lead with the artifact when explaining purpose or value.** When describing why a technique, challenge, or section matters, avoid starting the sentence with the name of the artifact itself (e.g. “This challenge…”, “This technique…”, “The 30-Day Mindset Challenge…”). Do not explain its purpose by saying it “strengthens the X dimension” or “creates better conditions for Y system.” Instead, state the benefit directly from the operator’s perspective.

  - **Avoid:** “This challenge strengthens the Mindset dimension while creating better operating conditions for Self-Regulation and Self-Management.”
  - **Preferred:** Lead with the actual shift or outcome the operator experiences (e.g. “Recovering from mistakes without losing momentum makes experimentation less emotionally expensive.”).

---

## How to Add New Feedback

**Primary daily habit (zero ceremony, always do this):**

1. After you edit an L2 draft into its final wiki location (L2 → L1 promotion), note the specific voice, signal, or structural changes that made it better.
2. Append a new dated section (or extend the latest) here with the exact rule(s) + concrete before/after sentence examples from the edit.
3. The converter consults this file on *every* L3 → L2 run via its Pre-Write Integrity Pass, so your refinements immediately improve future output with no extra steps.

**For larger or systematic improvements:**

- Run the recommended light tool: "Run light voice evolution" (see `../light-voice-evolution/SKILL.md`).
- It scans recent real L3 material from `raw/sessions/`, this `style-feedback.md`, and (optionally) the 4 test cases.
- It produces flexible, useful proposals (revised converter logic, targeted edits, observations, or polished L2 drafts).
- On apply it writes to the correct `outputs/L3/` / `outputs/L2/` tiers and appends one line to `references/voice-changelog.md`.

This file (`style-feedback.md`) + the light evolution skill together form the lightweight, compounding daily improvement loop. The heavy evolutionary tools in `../evolution/` are available when you want multi-variant scored experiments.

This file is the single source of truth for making L3 → L2 proposals match your personal wiki voice with minimal manual intervention.

## 2026-05-23 — Synthesis Density and Source Fidelity

When synthesizing clippings into wiki pages, preserve the concrete mechanisms, analogies, examples, and specific details from the source. Do not over-generalize or strip content in the name of conciseness. Key details that make ideas land (such as resource analogies, real-world examples, ratios, monitoring signals, and distinctions like cognitive vs physical skills) should be retained even if they make the page longer. Over-condensing produces pages that feel like generalized framing rather than grounded synthesis.
## 2026-05-23 — Opening Sentence Quality

Avoid opening a page or section with a vague, high-level, or semi-clichéd statement that sounds insightful but carries little mechanism (e.g. “The fastest way to improve at a new skill is often to move more slowly than expected”).

Instead, open with a concrete mechanism, decision point, observable pattern, or direct operational statement. The first sentence should give the reader something specific to work with or notice, not a softened general claim.

## 2026-05-23 — Preferred Synthesis Style (Briefs Model)

This is the target voice and structure for most synthesis pages.

### Core Thesis (Opus-style)
- Thoughtful, nuanced, and high-quality.
- Synthesizes the source rather than summarizing it.
- States the central insight clearly and directly.
- Avoids vague or semi-clichéd claims. The thesis should feel like it was arrived at through careful reading, not generated.

### Body (GPT-style)
- Clear, structured, and concrete.
- Uses specific mechanisms, examples, and distinctions from the source.
- Favors practical language over abstract principles.
- Maintains good flow and readability without becoming overly dense or overly sparse.
- Includes observable patterns, failure modes, and operating rules where relevant.

### Key Rules
- Preserve concrete details from the source (analogies, ratios, real examples, distinctions like cognitive vs physical load).
- Do not over-generalize or strip mechanism for the sake of conciseness.

## 2026-05-23 — Successful Wiki Promotion Example: Focus Management - Training the Return Mechanism

This page (`wiki/Self Management/Focus Management - How to Enter & Recover Inside a Work Block.md`) is a strong positive example of a well-evolved synthesis page. It took the GPT version as the base and selectively incorporated useful elements from the Sonnet and Grok briefs while avoiding the bad patterns identified in earlier analysis.

**Positive patterns observed and to be reinforced:**

- **Mechanism-first opening**  
  Opens directly with the operational definition and value:  
  “Focus Management trains the ability to enter a work block, notice attention drifting, and return to the intended task quickly enough that the block remains useful.”  
  This is clear, positive, and gives the reader something concrete immediately.

- **Strong use of operating models**  
  Uses clean text diagrams to show the force balance and the repair sequence. These diagrams make the system feel runnable and diagnosable.

- **“Two jobs” framing without negative contrast**  
  Clearly states the dual responsibility (“Lower the amount of force needed to focus” and “Increase the brain’s ability to return”) without leading with “Most people only do one.”

- **Balance of mechanism and felt experience**  
  Includes both the technical protocol (FIT, cheat sheet, neural entrainment) *and* a “What It Should Feel Like” section. This combination increases adoption and realism.

- **Practical tables and metrics**  
  The Failure Modes table and the two specific tracking questions (“How long does it take me to become usable?” and “How long does it take me to return after drift?”) make the page highly actionable.

- **Clean “Relationship To” linking**  
  Links to related pages with precision and without artifact-as-subject or meta framing. Each link explains the specific relationship rather than just listing pages.

- **Living document elements**  
  Ends with an “Open Questions” section. This signals that the page is a working system, not a finished artifact.

- **Title format**  
  “Focus Management: Training the Return Mechanism” — combines the system name with the core mechanism/benefit. This is more specific and useful than the original video title.

**Guidance for future conversions:**
- When multiple model briefs exist for the same source, treat the most complete and system-aware one (often GPT-style) as the structural base, then selectively import strong elements from the others (e.g., emotional realism from Sonnet, payoff language from Grok).
- Prioritize preserving operating models, concrete protocols, failure modes, and felt-experience sections.
- Ensure the final page has clear diagnostic and repair language so the reader can actually run and improve the system.
- Open with a strong, specific thesis or mechanism rather than a softened insight.
- Balance depth with usability. The reader should finish with both understanding and something they can apply.
- Connect to existing wiki concepts when natural, but do not force links.

## 2026-05-23 — Core Thesis Requirements

When writing the Core Thesis for a synthesis page:

- Lead with the practical solution or mechanism, not the problem or mistake.
- Avoid negative framing (do not start with “not”, “rather than”, “instead of”, or “the mistake is…”).
- Stay close to the source’s actual message instead of creating your own interpretation.
- Make the thesis specific and mechanistic rather than vague or general.
- the thesis should derive directly from careful reading of the source.

## 2026-05-21 — Catch More Style Failures

The current converter still misses several recurring patterns. Treat these as hard checks during L3 → L2 conversion and wiki promotion.

### Must Catch

- Attribution openings: “The source argues...”, “The author explains...”, “Justin says...”, “This article shows...”, “The video is about...”
- Negative definitions: “X is not...”, “The point is not...”, “The useful version is not...”, “The bottleneck is not X — it is Y.”
- Subject-label openings: the first sentence starts with the page title or exact concept name.
- Meta-commentary: “This is one of the strongest ideas in the source”, “This section is important”, “This is high-signal.”
- Skeleton compression: one-line definitions with no mechanism, causal chain, failure mode, or practical implication.
- Template sameness: every page uses the same generic headings even when the source calls for a different shape.

### Required Replacement Behavior

- Start with a concrete mechanism, decision point, observable pattern, or practical action.
- State the idea directly without attribution language unless the author is the topic.
- Put contrast after the positive definition, not inside the opening definition.
- Preserve concrete details, ratios, analogies, process flows, and examples when they make the idea usable.
- Add practical protocol, diagnostic test, failure mode, felt-sense section, or system implication when the concept needs it.
- Vary headings based on the source’s logic.

Positive examples:

```text
Curvilinear design removes the decision points that keep attention awake and memory anchored.
Focus Management trains the ability to enter a work block, notice attention drifting, and return to the intended task quickly enough that the block remains useful.
Objects often preserve decisions the owner has stopped believing in.
```

Bad openings to rewrite:

```text
The source argues that social media shortens your life.
Social media is not just a distraction.
Minimalism is not emptiness.
This is one of the strongest ideas in the source.
The NX system was an attempt to make thought operational.
```
