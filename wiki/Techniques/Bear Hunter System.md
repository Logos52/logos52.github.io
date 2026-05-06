---
type: technique
status: developing
created: 2026-05-04
updated: 2026-05-06
source-count: 2
last-audited:
tags:
  - learning
  - encoding
  - chunking
  - higher-order-learning
---

# Bear Hunter System

Bear Hunter System is the user's main encoding system. It turns incoming material into a meaningful structure through inquiry, mapping, chunking, and final refinement.

[[wiki/Red Team/Red Teaming|Red Teaming]] strengthens BHS by making the Aim phase more adversarial: challenge the first frame, surface hidden assumptions, and look for missing perspectives before building the map.

## Summary

BHS is best understood as a disciplined encoding loop:

1. [[wiki/Techniques/Aim|Aim]]: decide what relationships are worth looking for.
2. [[wiki/Techniques/Shoot|Shoot]]: investigate, answer, map, and clarify those relationships.
3. [[wiki/Techniques/Skin|Skin]]: refine the final structure into a cleaner, more intuitive representation.

The system is not just a note-taking format. It is a way to force [[wiki/Dimensions/Deep Processing|Deep Processing]] early, before the learner falls into passive collection. It also depends on [[wiki/Dimensions/Self-Regulation|Self-Regulation]] because the learner has to monitor question quality, cognitive load, chunk quality, and when to move between steps.

## Aim

Main page: [[wiki/Techniques/Aim|Aim]]

Aim points attention before full study begins.

The goal is to generate a useful search pattern for the mind:

- What makes this concept matter?
- What role does it play in the larger topic?
- What nearby ideas does it influence or depend on?
- What would change if this concept were removed?
- What problem does this concept help solve?

The output of Aim is not a perfect answer. It is a set of productive questions and tentative chunks.

Good Aim work tends to:

- Reduce random reading.
- Activate curiosity.
- Create initial expectations.
- Make later source reading more purposeful.
- Pull the learner toward comparison and evaluation.

## Shoot

Main page: [[wiki/Techniques/Shoot|Shoot]]

Shoot is the active investigation phase.

The learner uses sources, lectures, examples, problems, or external help to answer the questions created during Aim. The emphasis is on constructing a map while learning, not reading everything first and organizing later.

Good Shoot work tends to:

- Clarify relationships.
- Add necessary detail.
- Test whether the initial chunk structure works.
- Keep notes non-linear enough to represent relationships.
- Prevent lower-order habits from taking over.

Shoot should feel easier when Aim is strong. If Shoot feels scattered, the problem may be weak Aim, too much detail too early, or a structure copied from the source instead of generated from importance.

## Skin

Main page: [[wiki/Techniques/Skin|Skin]]

Skin is the refinement phase.

After multiple Aim-Shoot cycles, the learner revises the structure into a final or near-final representation. The goal is to make the map cleaner, more intuitive, and more useful for future retrieval.

Good Skin work tends to:

- Remove unnecessary visual clutter.
- Collapse weak groupings into stronger chunks.
- Prioritize the most important relationships.
- Turn a rough map into a usable study artifact.
- Make the topic feel simpler without making it shallow.

Skin is where the learner decides which structure best represents their current understanding.

## When To Use

Use full BHS when:

- The topic is conceptually dense.
- The topic will be examined or reused.
- The source order is not the best learning order.
- Facts only make sense through relationships.
- The user needs flexible transfer, not just recall.

Use a lighter variation when:

- The topic is familiar.
- Time is constrained.
- The goal is quick orientation.
- The full structure already exists and only needs patching.

## Relationship To Retrieval

BHS creates the initial structure. [[wiki/Techniques/Spaced Interleaved Retrieval|Spaced Interleaved Retrieval]] tests and improves that structure.

The handoff should be explicit:

- Aim questions can become retrieval prompts.
- Shoot notes can become answer sheets or maps.
- Skin maps can become brain-dump targets.
- Weak retrieval performance can trigger re-Aim or re-Skin.

## Quality Criteria

A good BHS output should:

- Compress the topic without hiding important logic.
- Show why chunks exist.
- Make major relationships visible.
- Make detail easier to place.
- Support closed-book reconstruction.
- Generate good retrieval questions.
- Reduce reliance on rote memorization.

## Failure Modes

| Failure | Meaning | Fix |
| --- | --- | --- |
| Too many questions | Aim is unfocused | Keep only questions that change the structure. |
| Too many lines on the map | Relationships are not prioritized | Re-chunk around importance. |
| Notes follow the textbook order exactly | Order control is weak | Try an alternative structure before committing. |
| The map is pretty but not retrievable | Visual design replaced cognition | Rebuild from memory and compare. |
| Shoot feels like copying | The learner stopped problem-solving | Return to Aim and ask higher-quality questions. |
| Skin is skipped | The rough structure never gets consolidated | Schedule a short refinement pass after the main learning event. |

## LLM Use

LLMs can help BHS by:

- Generating possible question angles.
- Producing examples and counterexamples.
- Creating retrieval prompts from a map.
- Challenging a proposed chunk structure.
- Suggesting alternative organizations.

LLMs should not replace the user's own judgment about importance. If the model chunks the material for the user, the user may feel like they understand while skipping the processing that creates durable learning.

## Related Concepts

- [[wiki/Syntheses/Current Study System|Current Study System]]
- [[wiki/Dimensions/Dimensions of Learning|Dimensions of Learning]]
- [[wiki/Dimensions/Deep Processing|Deep Processing]]
- [[wiki/Dimensions/Self-Regulation|Self-Regulation]]
- [[wiki/Techniques/Aim|Aim]]
- [[wiki/Techniques/Shoot|Shoot]]
- [[wiki/Techniques/Skin|Skin]]
- [[wiki/Techniques/Spaced Interleaved Retrieval|Spaced Interleaved Retrieval]]
- [[wiki/Concepts/Importance-Based Chunking|Importance-Based Chunking]]
- [[wiki/Concepts/Knowledge Mastery|Knowledge Mastery]]
- [[wiki/Concepts/Deep Processing|Deep Processing Concept Note]]
- [[wiki/Concepts/Cognitive Load as Signal|Cognitive Load as Signal]]
- [[wiki/Techniques/Thinking on Paper|Thinking on Paper]]
- [[wiki/Red Team/Red Teaming|Red Teaming]]
- [[wiki/Red Team/Key Assumptions Check|Key Assumptions Check]]
- [[wiki/Red Team/Four Ways of Seeing|Four Ways of Seeing]]

## Sources

- Learning-system synthesis from the user's study materials.
- TRADOC G-2 / UFMCS, *The Red Team Handbook*, Version 9.0.

## Open Questions

- What is the user's preferred BHS artifact: hand-drawn map, Obsidian canvas, Excalidraw, markdown outline, or mixed format?
- Which current study topic should become the first worked BHS example in this vault?
- What is the minimum viable BHS pass for busy weeks?
