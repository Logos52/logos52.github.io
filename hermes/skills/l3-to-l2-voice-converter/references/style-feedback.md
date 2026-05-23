# Style Feedback Log

Living collection of corrections and refinements from wiki editing.
Consult before writing or converting any synthesis page.

---

## Voice and Framing

- Use action-first or noun-implicit sentence structures ("Treat mindset as...", "Track the key signals by...").
- Remove all meta-framing sections: no "This is designed to...", "Why This Matters", "How to Use", "Overview", or similar blocks.
- Let headings and structure communicate purpose. The reader is already the operator.
- Eliminate repetitive subject references and low-signal transitions.
- Keep language concise, mechanistic, and high-signal. Prefer specific decision points and failure modes over general description.
- After Key Takeaways, move straight into content without additional introductory paragraphs unless they add immediate operational value.
- Do not carry title analogies into the body. Even if the title uses a metaphor, avoid extending it in the prose unless it adds real clarity.
- Keep summary and thesis statements concise and benefit-oriented rather than dense or metaphorical.

---

## Opening Sentences

Open with a concrete mechanism, decision point, observable pattern, or direct operational statement. The first sentence should give the reader something specific to work with or notice.

Do not open with:
- A vague, high-level, or semi-clichéd statement that sounds insightful but carries little mechanism.
- The name of the artifact, technique, or challenge as the subject ("This challenge strengthens...", "This technique creates...").
- A negative definition ("X is not...", "The mistake is...", "Rather than...").

Do not explain purpose by saying something "strengthens the X dimension" or "creates better conditions for Y system." State the benefit directly from the operator's perspective.

**Avoid:** "This challenge strengthens the Mindset dimension while creating better operating conditions for Self-Regulation."  
**Preferred:** Lead with the actual shift the operator experiences ("Recovering from mistakes without losing momentum makes experimentation less expensive.").

---

## Negative Framing

Do not lead with what something does not or cannot do. Start with a positive statement of what the approach provides or what the operator needs. Negative framing can appear later in a section if it improves clarity, but never in the lead.

**Avoid:** "Larger context windows alone do not solve agent memory failures. Two additional layers are required..."  
**Preferred:** "Agents need two memory layers beyond the context window. Gbrain gives the agent access to the organization's accumulated knowledge across conversations and handoffs."

---

## Sentence Quality

Avoid constructions that feel slightly off or overly technical even when factually correct. Prioritize natural, clear flow that reads on a first pass.

**Avoid:** "Gbrain indexes a markdown wiki or knowledge repo so agents can retrieve stable facts before acting."  
**Preferred:** "Gbrain turns a collection of markdown files into a searchable knowledge base."

When describing technical behavior, use simpler, more human-readable language instead of precise but choppy system terminology.

**Avoid:** "Lossless preserves the raw messages of the current conversation even after the runtime compresses older turns into summaries."  
**Preferred:** "Lossless keeps the full original messages from the current conversation available. The runtime will eventually summarize older turns to stay inside the context window."

---

## Synthesis Discipline

Preserve the concrete mechanisms, analogies, examples, and specific details from the source. Do not over-generalize or strip content in the name of conciseness. Key details that make ideas land — resource analogies, real-world examples, ratios, monitoring signals, distinctions like cognitive vs physical skills — should be retained even if they make the page longer. Over-condensing produces pages that feel like generalized framing rather than grounded synthesis.

Vary headings based on the source's logic. Do not force every page into the same generic heading structure.

---

## Must Catch

These are hard checks before finishing any synthesis page.

- **Attribution openings:** "The source argues...", "The author explains...", "Justin says...", "This article shows..."
- **Negative definitions:** "X is not...", "The point is not...", "The bottleneck is not X — it is Y."
- **Subject-label openings:** first sentence starts with the page title or exact concept name.
- **Meta-commentary:** "This is one of the strongest ideas in the source", "This section is important", "This is high-signal."
- **Skeleton compression:** one-line definitions with no mechanism, causal chain, failure mode, or practical implication.
- **Template sameness:** every page uses the same generic headings even when the source calls for a different shape.

Replace with:
- A concrete mechanism, decision point, observable pattern, or practical action.
- Direct statement of the idea without attribution language unless the author is the topic.
- Contrast placed after the positive definition, not inside the opening definition.
- Concrete details, ratios, analogies, process flows, and examples when they make the idea usable.
- Protocol, diagnostic test, failure mode, or felt-sense section when the concept needs it.

**Good openings:**
```
Curvilinear design removes the decision points that keep attention awake and memory anchored.
Focus Management trains the ability to enter a work block, notice attention drifting, and return to the intended task quickly enough that the block remains useful.
Objects often preserve decisions the owner has stopped believing in.
```

**Bad openings to rewrite:**
```
The source argues that social media shortens your life.
Social media is not just a distraction.
Minimalism is not emptiness.
This is one of the strongest ideas in the source.
The NX system was an attempt to make thought operational.
```

---

## Title Format

For tool or technique pages, titles in the form "Name — Clear benefit statement" are preferred over abstract or clever phrasing.

---

## Adding New Entries

After editing an L2 draft into its final wiki location, note the specific voice, structural, or signal changes that made it better. Append a new dated entry at the bottom of this file with the rule and a concrete before/after example from the actual edit.
