---
type: system
status: developing
created: 2026-05-08
updated: 2026-05-15
tags:
  - system
  - writing
  - llm-wiki
---

# Writing Standards

These standards guide new pages and substantial rewrites in this wiki. They do not require retroactive rewrites of existing pages.

## Useful Operating Notes

Write useful operating notes, not generic articles.

A durable wiki page should help the reader use the idea, not merely recognize it. The page should extract the operating model underneath the source material: the mechanism, the causal chain, the failure modes, the practical feel, and the implications for the rest of the system.

A good page should usually make clear:

- what the idea is,
- when the user should use it,
- what problem or bad habit it replaces,
- what it produces,
- and what it connects to.

Do this naturally. Do not force every page into the same template.

Keep theory after usefulness. Background is welcome when it helps the user apply, diagnose, or connect the idea. A page can be substantial when the idea deserves it, especially for synthesis pages, hub pages, and high-value concepts. Concision should remove filler while preserving depth.

The target is the shortest note that still changes how the user thinks or acts.

## Voice

Prefer:

- short paragraphs,
- dense paragraphs when the idea needs real movement,
- plain, active sentences,
- concrete verbs,
- concrete examples,
- practical use,
- tradeoffs,
- failure modes,
- source-grounded claims,
- and internal links that reveal real relationships.

Avoid:

- hype,
- vague praise,
- rhetorical questions,
- AI-editorial transitions,
- generic encyclopedia entries,
- rigid templates,
- decorative formatting,
- and generic background that does not serve the page.

Preserve strong existing language unless there is a clear reason to change it.

## Brief Style Reference (Live Clinic & Source Syntheses)

For Live Clinic transcripts and other source briefs, the best current hybrid draws from three strong local examples (Grok, GPT, and Sonnet versions of the same material). The goal is a brief that feels both sharp and usable.

### Core Thesis
Use the direct Grok style:
- Start with a single strong, plain-language bolded sentence that carries the real insight.
- Follow with a short, natural explanation.
- Avoid long setup paragraphs that summarize the clinic, the guest, or the session context. Go straight to the operating principle.

Good:
```text
**You cannot usefully read dense sources until you have first built a low-load big-picture scaffold using easier material.**
```

Avoid starting the Core Thesis with "This clinic shows..." or "Live Clinic X demonstrates...".

### Compressed / Key Takeaways
Use the clean GPT style:
- A short, high-signal list (usually 6–8 items).
- Each takeaway should be one crisp sentence or a very tight paragraph.
- Focus on usable distinctions, failure modes, and rules rather than summaries of what the source said.

### Body Structure and Headings
Prefer the GPT structural approach:
- Use a small number of thematic sections with specific, idea-driven headings.
- Under major steps, layers, or sequences, add a short functional blurb: what this step/layer is and why it matters. Sonnet-style tables or one-sentence descriptions under each layer work well here.

Example of good layer/step treatment:
```text
| Layer | Source Type              | Function                                      |
|-------|--------------------------|-----------------------------------------------|
| 0     | Images & diagrams        | Fastest way to create a low-load intuitive chunk before verbal definitions |
| 1     | Wikipedia-style headings | Extract the organizing skeleton and relationships |
```

Or in prose:
**Layer 0 – Intuition anchor.** Use images and diagrams first. They reveal relationships with almost zero verbal decoding cost and give the brain something concrete to attach later information to.

### Process Flows and Concrete Examples
GPT-style arrow diagrams and process flows are valuable. When the source contains a clear sequence or failure chain, render it visually:

```text
images and diagrams
-> simple explanations
-> Wikipedia-style headings
-> textbook overview
-> research articles
-> details, methods, and edge cases
```

These flows make the operating model scannable and memorable. Use them when the source has a natural ordering or escalation.

### Overall Brief Shape (Flexible Default)
A useful default structure for Live Clinic and source briefs is:

```text
Core Thesis
Compressed / Key Takeaways
2–5 thematic source-specific sections (with functional blurbs under steps/layers)
Connection to existing wiki pages
Open Questions
Sources
```

The shape is a guide, not a requirement. Let the source's natural logic determine the final sections.

### Voice and Compression Goals
- Keep the brief tight but not skeletal.
- Every major section should give the reader both the "what" and the "why this matters."
- Concrete examples and process flows are currently under-used and should be added when they clarify the mechanism.
- Remove session chatter ("the clinic opened with...", "Justin then showed...") unless it carries the actual operating insight.

## Positive Openings

Start pages by opening with what the idea does, produces, changes, or connects.

The first sentence is stricter than the rest of the page. It should give the reader a concrete handle immediately. After the first sentence, the prose can become more fluid, reflective, or expansive, but the opening line must land cleanly.

First sentence rules:

- Do not automatically start with the page title or subject label.
- Open with the live mechanism, pressure, condition, action, or concrete context when possible.
- Name the subject once the sentence has created a reason to care.
- Use a concrete verb.
- Say what it does, connects, changes, or produces.
- Avoid vague abstraction.
- Avoid evaluator framing.
- Avoid "attempt to," "seeks to," "is about," "captures," and similar distancing verbs.
- Avoid clever phrasing that draws attention to itself.

Strong first sentence:

```text
Capture, linking, writing, coding, publishing, and daily reflection all lived in one working environment.
Trust changes when the flaw appears before the pitch.
Social friction becomes visible when a culture gives it a name.
Switching topics before mastery forces knowledge to be reconstructed across changing contexts.
Every first schema is going to be wrong.
Objects often preserve decisions the owner has stopped believing in.
```

Weak first sentence:

```text
The NX system was an attempt to make thought operational.
This note captures one of the strongest ideas in the source.
Minimalism is not emptiness.
The deeper idea is that tools matter.
```

Starting with the subject label can make the page feel like a school report or encyclopedia entry:

```text
The NX system...
Minimalism...
Anti-marketing...
```

Do not open with the page title or subject label. This is a hard rule, not a default. A page titled "Best-attempt Encoding" should not start "Best-attempt encoding is..." A page titled "Meiwaku" should not start "Meiwaku is..." or "Meiwaku makes..."

This applies only to the page title or subject label — not to all subject-verb sentences. Opening with a different noun is fine:

```text
Empty space creates reserve capacity.
Trust changes when the flaw appears before the pitch.
Every first schema is going to be wrong.
```

These are clean because the subject is not the page title. The page title belongs in the sentence after the idea has created a reason to care about it. Stronger openings start with the activity, tension, condition, or a related noun first:

```text
Objects often preserve decisions the owner has stopped believing in.
Trust changes when the flaw appears before the pitch.
Some environments make the next useful action feel already started.
```

The subject should be easily implied based on the definition and context given in the core thesis.

Use contrast as a supporting move after the positive definition is already clear. Contrast should refine the idea, not carry the main definition.

## Not X, But Y

Avoid "Not X, but Y" as a definitional or thesis structure, especially in first sentences, core thesis paragraphs, and definitions.

The pattern puts the wrong thing in the reader's head first, then corrects it. The reader has to process the contrast before getting the actual idea — burning their first moment of attention on something about to be discarded. It also signals that the positive definition can't stand on its own. Strong definitions don't need that support. They land directly.

The pattern produces a defensive or corrective tone where the voice should be confident and mechanism-first.

Avoid:

```text
The unit of research quality is not the note — it is the mental schema.
Alignment is not about passion — it is about direction.
This is not a discipline problem — it is a structural one.
```

Replace with the positive claim directly:

```text
Research quality lives in the mental schema that places each source.
Energy accumulates when activity moves toward what actually matters.
The structure is what fails, not the person inside it.
```

The contrast can follow once the reader has a handle on the idea. It should never open the definition.

The pattern also surfaces at transition points — after a diagnosis, at the end of a section, before a repair — where contrast feels natural. It still applies. The positive claim comes first regardless of where in the page it appears.

Weak shapes to watch for anywhere in the text:

```text
X is not...
The point is not...
The useful version is not...
The bottleneck is not X — it is Y.
The solution is not X. The solution is Y.
A schema is not a list — it is a network.
```

Replace with the positive claim directly:

```text
The bottleneck is converting information into a schema.
Schema formation is the fix.
A schema is a mental network.
```

Positive definitions create momentum. They give the reader a usable handle before introducing caveats. A page can still distinguish the idea from nearby concepts, but the first paragraph should establish the thing directly.

Better first paragraph pattern:

```text
It turns A into B by...
Use it when...
```

Contrast can come after the positive definition:

```text
This differs from Y because...
The failure mode is...
The common mistake is...
```

## Definition Density

Definitions should carry substance. A durable page should open with enough structure for the reader to start using the idea, not just recognize the label.

A strong definition usually covers:

- **Function**: what job it performs.
- **Mechanism**: how it works.
- **Use condition**: when to apply it.
- **Output**: what it should produce.
- **System relationship**: what it connects to in the knowledge base.

Weak definition shape:

```text
X is a method for learning.
X is a mindset.
X is an important idea.
```

Definitions should be dense enough to prevent skeleton pages. A short page can still be good, but it needs a real center of gravity: mechanism, use, failure mode, or consequence.

If a page cannot support a dense definition yet, treat it as a candidate note rather than a durable wiki page.

## Synthesis Depth

Synthesis pages should have enough body to carry the idea. They should usually be closer to the developed pages in [[wiki/Syntheses/First Principles of ICS|First Principles of ICS]], [[wiki/Syntheses/Are You Learning, or Just Using Techniques|Are You Learning, or Just Using Techniques]], and [[wiki/Syntheses/Prestudy, BHS, and SIR - Turning Information into Usable Structure|Prestudy, BHS, and SIR: Turning Information into Usable Structure]] than to a short glossary entry.

Strong synthesis usually makes some of the following clear, in whatever order fits the note:

- what makes the idea work;
- how one condition produces the next;
- how the idea degrades, gets faked, or becomes counterproductive;
- what correct use feels like from the inside;
- what changes in the user's study system, decision system, environment, or workflow;
- where the idea plugs into existing pages.

Compression should preserve the mechanism. Remove repetitive bullets, source chatter, and decorative framing. Keep the sentence or paragraph that changes action.

## Structural Variety

Do not let the page structure become a template that every note inherits.

Headings should emerge from the idea. A page about a workflow may need sequence headings. A page about a failure mode may need symptoms, causes, and repairs. A page about a concept may need definition, examples, boundaries, and implications. A page about a source synthesis may need the source's natural shape preserved.

Avoid repeating the same default skeleton across pages:

```text
Core Mechanism
What Changes
Relationship To...
Failure Modes
Practical Use
```

Those headings are available tools, not required slots. If several recent pages all use the same section sequence, deliberately vary the next page.

Better heading choices are specific to the note:

```text
Why The Method Breaks
The Approach Layer
What The Graph Reveals
When The System Becomes Fragile
How The Environment Primes Action
The Cost Of Keeping It
What To Practice Next
```

Use headings that name the actual move inside the page. The reader should be able to scan the headings and feel the unique shape of that idea.

Before writing a new page, choose the structure by asking:

- Is this a workflow, concept, diagnosis, synthesis, hub, source brief, reflection, or practice guide?
- What is the natural sequence of the idea?
- Which headings would only fit this page?
- Which default headings can be removed or renamed?
- Does the page look too much like the last few pages?

## Distilled Models, Not Expanded Summaries

Wiki pages should be distilled models — self-standing operating notes that help the reader use the idea — not expanded summaries of a source. A distilled model can be read without knowing the source existed. A summary cannot.

The test: if removing every reference to the source would break the page, the page is a summary. A well-distilled page holds its shape because the mechanism is present in the prose, not because the source is named.

Practical implication: write the page as if the ideas belong to the wiki, not to a transcript or author. The idea becomes a concept the reader can use, not a report of what someone said.

## Sources Section Policy

Wiki pages do not include a Sources section that links to private source material. Private sources (anything under `raw/private/`) are inaccessible to readers and waste their attention. Linking to the ICS website or brief outputs is also discouraged — the reader cannot see them, and the link creates a dead end.

If a source is public and directly useful (a published article, a public video, a book), it may be included. Otherwise, omit the Sources section entirely. Attribution for the thinking lives in the frontmatter `sources:` field and in the corresponding brief in `outputs/briefs/`, not on the wiki page itself.

## Source Attribution in Body Content

Source names, author names, and source references belong in the Sources section at the bottom of the page. They do not belong in the body.

Avoid:

```text
Sung's framing is deliberately flat.
The clinic opens with the gym analogy.
Karpathy argues that Software 3.0...
The source makes the point that...
This live clinic covers three uses.
The author's central claim is...
```

Replace with the idea directly:

```text
The failure mode is structural, not disciplinary.
Paying someone else to lift the weight means the weight moves but you don't get stronger.
Natural language is now a programming medium for LLM interpreters.
```

This applies equally to named sources, unnamed sources ("the transcript," "the video"), and indirect attribution ("as discussed in"). The body of the page should read as if the ideas emerged from thought, not as a report of what a source said. The Sources section carries the attribution.

## Source-Evaluation Residue

Do not write sentences that evaluate the source, the section, or the idea instead of explaining the mechanism.

These lines break immersion by reminding the reader that the page came from an outside document, transcript, or clipping.

Avoid:

```text
This is one of the strongest ideas in the source.
The source makes an important point.
One of the highest-signal takeaways is...
This section matters because...
The most useful concept here is...
The author argues that...
```

Replace with the mechanism directly:

```text
When the floor is overloaded, object manipulation becomes expensive.
Empty space creates reserve capacity.
Storage lowers the pressure to choose.
Old habits win because they are cheap and automatic.
```

If an idea is important, the paragraph should prove it by showing the mechanism, consequence, or use case. Do not announce that it is important.

## Ranking Voice

Avoid ranking-language openings that announce the page's judgment of importance before explaining the idea.

This style creates distance. It sounds like an evaluator hovering above the material instead of a usable note entering directly into the mechanism. It also makes pages feel repetitive because every synthesis begins to say "the strongest pattern," "the real idea," or "the deeper point."

Avoid:

```text
The strongest pattern is...
The strongest practical idea is...
The real insight is...
The deeper idea is...
The key takeaway is...
The most important thing here is...
```

Replace with the idea itself:

```text
Value accumulates when a tool functions as an enabling environment.
The gap between idea and implementation collapses when a capable interpreter handles execution.
Sustained exposure to fast, shallow content reshapes attention and depth.
What reads as overwhelm is usually first contact with an unorganized field.
```

The page should not tell the reader that something is strong. It should make the strength visible through mechanism, consequence, and practical use.

## Page Standard

Every durable page needs enough structure to be useful. It does not need the same structure as every other page.

Most pages should include some version of:

- frontmatter,
- a short summary or core idea,
- practical implications,
- related links,
- sources,
- and open questions when uncertainty remains.

This standard is flexible. Some pages need a full operating model. Some pages only need a concise note. The deciding factor is the value of the idea and how much the page is expected to support future thinking.

High-value pages may include sections such as:

- Core Thesis
- Operating Model
- What It Changes
- Failure Modes
- What It Should Feel Like
- Practical Use
- Links Into The System
- Open Questions

Do not use these headings mechanically. Rename, merge, reorder, or skip them when another structure fits better.

## Hub And Detail Discipline

Hub pages orient. Detail pages carry the load.

If a subtopic needs several substantial paragraphs inside a hub, consider splitting it into its own page and linking back to the hub.

Do not create weak stubs. A new page should have enough material to explain its role, practical use, and links to related pages.

## Updating Existing Pages

Before updating an existing page, re-read it.

Integrate new material into the page's structure instead of appending disconnected notes at the bottom. A touched page should become more coherent, more useful, or better linked.

When updating a page, remove source residue, duplicated definitions, and generic transitions. Preserve strong phrasing when it carries the user's meaning. Do not flatten good language merely to make it shorter.

## Section-Level Style Split

Different sections of a page call for different styles. Apply this split consistently:

**Framing sections use dense prose.** The Core Thesis, opening paragraphs, and Open Questions sections should be written in compressed, active prose with causal motion — claim → mechanism → consequence → implication. These sections carry the page's intellectual weight and should not be flattened into bullets.

**Body sections use compressed bullets.** The main content sections — coverage of mechanisms, techniques, use cases, failure modes, and practical rules — should use tight, labelled bullet points rather than prose paragraphs. Each bullet should be a complete thought: one point, one mechanism, stated directly. Do not use bullets as fragments or headers; each should stand on its own without the surrounding context.

The rationale: prose framing gives the page its center of gravity and stops it from feeling like a listicle. Bulleted body sections give the reader fast, scannable access to the operating content without burying the practical material in dense paragraph walls.

Example shape for a page section:

```
## The Three Valid Uses

Each use keeps the heavy lifting in your hands:

- **Keyword seeding.** Ask AI to generate the key terms for a topic before you start. Collecting keywords is a necessary but cognitively worthless step — outsourcing it is legitimate because the output is raw material for your own chunking, not a substitute for it. Do not ask it to rank by importance.
- **Hypothesis validation.** Once you've built a tentative model, ask AI whether the specific relationship you've identified holds. You constructed the hypothesis; AI validates or corrects it. The schema remains yours.
- **Gap-checking after retrieval.** Do a full brain dump, then ask AI to find gaps or missed perspectives. The value is in the brain dump. AI is flagging blind spots you'd circle past repeatedly on your own.
```

Headings for body sections should still follow the specificity rule — name the actual idea inside the section, not a template slot.

## Related

- [[AGENTS]]
- [[wiki/Workflows/Raw to Wiki Compilation|Raw to Wiki Compilation]]
- [[wiki/Workflows/Wiki Health Checks|Wiki Health Checks]]
- [[wiki/Workflows/Wiki Status Checks|Wiki Status Checks]]
- [[wiki/Workflows/Wiki Breakdown Pass|Wiki Breakdown Pass]]
