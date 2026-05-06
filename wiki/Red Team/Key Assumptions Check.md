---
type: tool
status: developing
created: 2026-05-06
updated: 2026-05-06
source-count: 1
tags:
  - red-teaming
  - assumptions
---

# Key Assumptions Check

Key Assumptions Check identifies which assumptions a plan depends on and tests whether those assumptions are valid, necessary, and fragile.

## Core Idea

Every plan is built on claims that are not fully known. Some are harmless. Some are load-bearing. The Red Teamer's job is to find the load-bearing assumptions before they fail.

## Method

1. List the plan, belief, or decision.
2. Ask what must be true for it to work.
3. Separate facts from assumptions.
4. Mark which assumptions are necessary.
5. Mark which assumptions are likely to be true.
6. Identify the assumptions that are both necessary and uncertain.
7. Decide what evidence, branch plan, or mitigation is needed.

## Warning Signs

- "Obviously..."
- "Everyone knows..."
- "They will probably..."
- "That won't matter."
- "We can handle that later."
- "The model/source/agent said so."

## Link To Study

Use it before [[wiki/Techniques/Spaced Interleaved Retrieval|SIR]]:

- I assume I can retrieve this later.
- I assume my notes are organized enough.
- I assume this example represents the whole concept.
- I assume recognition means mastery.

Then test the dangerous assumptions with retrieval.

## Related Pages

- [[wiki/Red Team/Assumption Tools|Assumption Tools]]
- [[wiki/Red Team/String of Pearls|String of Pearls]]
- [[wiki/Concepts/Knowledge Mastery|Knowledge Mastery]]

## Sources

- TRADOC G-2 / UFMCS, *The Red Team Handbook*, Version 9.0.

## Open Questions

- What assumptions currently support the user's study system?
