---
type: tool
status: developing
created: 2026-05-06
updated: 2026-05-06
source-count: 1
tags:
  - red-teaming
  - explanation
  - learning
---

# SEE-I

SEE-I is a communication and clarification tool: State, Elaborate, Exemplify, Illustrate.

## Method

1. **State** the idea clearly in one sentence.
2. **Elaborate** in your own words.
3. **Exemplify** with a concrete example or counterexample.
4. **Illustrate** with an analogy, image, or comparison.

## Why It Works

SEE-I forces a concept through multiple forms:

- compressed statement,
- expanded explanation,
- concrete case,
- analogy.

That makes it useful for both teaching and learning. If you cannot do all four, the concept may not be fully understood.

## Personal Use

SEE-I belongs inside [[wiki/Techniques/Bear Hunter System|BHS]] and [[wiki/Dimensions/Retrieval|Retrieval]]:

- Use it during encoding to clarify a concept.
- Use it during retrieval to test whether understanding transfers.
- Use it when explaining a Red Team concern to someone else.
- Use it when asking an LLM to improve a note.

## Prompt Template

```text
Apply SEE-I to this concept:

State:
Elaborate:
Example:
Illustration:

Then identify which section is weakest and what I should study next.
```

## Related Pages

- [[wiki/Red Team/Communication Tools|Communication Tools]]
- [[wiki/Concepts/Deep Processing|Deep Processing Concept Note]]
- [[wiki/Techniques/Thinking on Paper|Thinking on Paper]]

## Sources

- TRADOC G-2 / UFMCS, *The Red Team Handbook*, Version 9.0.

## Open Questions

- Should SEE-I become a default block in concept-note templates?
