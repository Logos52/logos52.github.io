---
type: principle
status: developing
created: 2026-05-06
updated: 2026-05-06
source-count: 1
tags:
  - red-teaming
  - groupthink
  - decision-making
---

# Groupthink Mitigation and Decision Support

Groupthink Mitigation and Decision Support protects decisions from the social failures of groups: hierarchy, conformity, silence, personality dominance, and premature consensus.

## Core Idea

Groups should improve decisions because they contain more experience and perspective than one person. But groups often make decisions worse because people manage status, avoid conflict, defer to rank, and confuse consensus with truth.

Red Teaming treats this as a design problem. Better group process can make dissent safer and decision support stronger.

## Common Failure Modes

- The leader's preference becomes the group's answer.
- Senior people speak first and anchor the room.
- Junior people stay silent despite seeing the flaw.
- Extroverts dominate while introverts process privately.
- "Everyone knows" replaces evidence.
- The group converges before it has diverged.
- A subject matter expert becomes a mind guard.

## Fundamentals

The handbook emphasizes three practical fundamentals:

- **Counter hierarchy.** Structure input so rank does not decide which ideas enter the room.
- **Use anonymity.** Separate ideas from names when status or fear would distort evaluation.
- **Provide time and space.** Let people think privately before group discussion.

## Tool Links

- [[wiki/Red Team/Group Process Tools|Group Process Tools]]
- [[wiki/Red Team/Team A Team B Analysis|Team A Team B Analysis]]
- [[wiki/Red Team/Devils Advocacy|Devils Advocacy]]

## Personal Translation

This applies even when working alone with LLMs. The agent can become an artificial consensus machine if the user only asks it to confirm a plan. Groupthink mitigation becomes:

- Ask the LLM to argue the opposite.
- Ask what a junior person might notice.
- Ask what the plan assumes.
- Ask what an adversary would exploit.
- Separate idea generation from idea selection.

## Sources

- TRADOC G-2 / UFMCS, *The Red Team Handbook*, Version 9.0.

## Open Questions

- How should this wiki use AI agents to create structured dissent instead of agreeable summaries?
- What group process tools can be adapted for solo learning?
