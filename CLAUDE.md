# CLAUDE.md

Writing and behavioral guidelines for LLM-assisted brief work. Merge with project-specific instructions as needed.

**Tradeoff:** These guidelines bias toward accuracy and scope discipline over speed. For trivial tasks, use judgment.

**Decision documents** (PRDs, proposals, decision notes, memos) additionally follow the High-Signal Decision Writing section of `02 - System/Writing Standards.md`.

## 1. Before You Write

**Identify the mechanism. Scope the brief. Resolve ambiguity first.**

Before drafting:
- Name the core claim the source makes and what process or system it describes.
- If the source's main argument is ambiguous, present the interpretations — don't pick silently.
- If the source is too thin to support a full brief, say so before starting.
- Scope to what the source actually argues. Don't add connections or implications the source doesn't make.

## 2. Writing Principles

**Mechanism first. Concrete over abstract. No named people.**

- Open with how something works and what it produces — not with failures, caveats, or what to avoid.
- The Core Thesis should move like a mechanism, not like a summary. Prefer a causal arc: what capability/process exists, why it works at first, what condition exposes the limit, what changes in the system, and what repair restores or improves it. A good thesis lets the reader recognize the pattern before they read the body.
- In the Core Thesis, choose the sharpest framing rather than averaging all source points. Put tactical lists, related mechanisms, and implementation detail in the body unless they are essential to the causal claim.
- When the source describes a problem, keep the framing constructive. Describe the surface experience and the underlying process without implying the reader was foolish or wrong. Prefer "what it feels like" and "what is happening underneath" over "mistake", "misdiagnosis", or "wrong approach".
- When the source describes a repair, state why the repair should work. Do not only list what to do; name the leverage point it changes.
- Failure modes and where-this-goes-wrong content belongs at the bottom, when needed at all.
- Name the activity directly: what the reader does — reads, applies, tracks, practices — not an abstract noun that wraps it.
- No named people in the body. Use anonymous references throughout: "one documented case", "in a controlled comparison", "a practitioner who applied this". Named frameworks and models (PACER, BHS, ACE) are fine. The Sources section is the one place where sources can be named.

## 3. Simplicity First

**Minimum content that serves the brief. Nothing speculative.**

- No connections beyond what the source actually makes.
- No extending the argument into territory the source doesn't cover.
- No sections added because they might be useful.
- If a brief can be 400 words, don't make it 800.

Ask: "Does this brief say more than the source warrants?" If yes, cut.

## 4. Surgical Changes

**When updating an existing page, touch only what the new source changes.**

- Don't improve adjacent sections you weren't asked to touch.
- Don't rewrite for style when the task is to integrate new material.
- Match the existing voice and structure.
- Every changed line should trace to the new source or the user's request.
- If you notice something unrelated that looks wrong, mention it — don't silently fix it.

## Brief Structure

Required anchors, in this order:

1. **Core Thesis** — mechanism first, dense with meaning, no hedging
2. **Compressed Takeaways** — the most portable points, stripped of context
3. *Body sections* — flexible; use whatever sections serve the material
4. **The Operating Model** — include when the source describes a repeatable workflow or loop
5. **Links Into the Knowledge Base**
6. **Open Questions**
7. **Sources**

Sections 1, 2, 5, 6, and 7 appear in every brief. Sections 3 and 4 depend on what the source offers.

### Core Thesis Standard

The Core Thesis is not an abstract, introduction, or compressed table of contents. It should usually answer:

```text
What is the mechanism?
Why does it work or appear to work at first?
Where does it break or become visible?
What does the surface experience feel like, and what is happening underneath?
What repair changes the underlying system?
```

Good Core Thesis writing is specific, causal, and recognitional. It should make the reader think, "That is the pattern," before they reach the details.

### Body Standard

The body should be structured, operational, and complete enough to use. After the Core Thesis chooses the sharp frame, the body should do the coverage work:

- Define the mechanism in plain terms.
- Break the mechanism into parts, stages, levers, or failure modes.
- Separate similar ideas that readers may confuse.
- Include tables only when they clarify a real distinction.
- Preserve concrete numbers, thresholds, sequences, and tests from the source.
- Add clarifying questions, operating models, and boundary conditions when the source supports them.
- Keep the source's strongest practical details, but organize them into a reusable page rather than following transcript order.
- Make links into the knowledge base specific: explain what each linked page contributes or should absorb.

The body may be more systematic than the Core Thesis. The thesis should be sharp; the body should be useful.

## File Conventions

- L3/model first-pass filename: `[Model] - [Title].md`
- L2/fused synthesis filename: `L2 - [Title].md`
- Location: `01 - Workbench/`
- Frontmatter: title, type: brief, status: draft, created, updated, model, source, source_url, tags

---

**These guidelines are working if:** briefs stay within what sources actually argue, mechanisms are identified before drafting starts, and questions about scope come before writing rather than after.


## Feedback protocol (standing rule — canonical in ~/Projects/AGENTS.md)

Deep read before execution, always: enumerate everything Wedge asked, details included, never the gist; find the general principle behind the specific complaint; then execute against both, and record the principle in the appropriate standard. Prose is generated as a continuous explanation to a real person first, then filtered through the writing standards — never assembled from rule-compliant fragments.
