---
type: tool
status: developing
created: 2026-05-06
updated: 2026-05-06
source-count: 1
tags:
  - red-teaming
  - planning
  - risk
---

# String of Pearls

String of Pearls examines a plan vertically by linking major tasks to assumptions, dependencies, and effects.

## Core Idea

Most plans are reviewed horizontally: task after task across time. String of Pearls asks what each major task depends on and what consequences ripple from it.

This reveals hidden risk in the plan itself.

## Method

1. Identify the major tasks: the pearls.
2. For each task, list assumptions, dependencies, and possible effects.
3. Look for repeated dependencies or assumptions across tasks.
4. Identify critical pearls that create disproportionate risk.
5. Recommend mitigation, branch plans, or task revision.

## Important Distinctions

- An **assumption** is something not known but treated as true to continue planning.
- A **dependency** is a condition that must exist for execution to work.
- A **first-order effect** is the direct physical/action effect.
- A **second-order effect** is the emotional or social reaction.
- A **third-order effect** is the cognitive or belief shift caused by the action.

## Personal Use

Use String of Pearls to review a study plan:

- Task: read source.
- Assumption: source is high quality.
- Dependency: enough focus and time.
- First-order effect: notes created.
- Second-order effect: confidence rises.
- Third-order effect: learner believes topic is mastered, possibly before retrieval proves it.

That last effect is where Red Teaming protects the learning system.

## Related Pages

- [[wiki/Red Team/Failure Analysis Tools|Failure Analysis Tools]]
- [[wiki/Red Team/Key Assumptions Check|Key Assumptions Check]]
- [[wiki/Techniques/Spaced Interleaved Retrieval|Spaced Interleaved Retrieval]]

## Sources

- TRADOC G-2 / UFMCS, *The Red Team Handbook*, Version 9.0.

## Open Questions

- Which user workflow should be mapped as a String of Pearls first?
