---
title: "Ledger strip demoted to a footer line; slot reused for open questions + daily retrieval rep"
type: decision
status: decided
created: 2026-06-11
updated: 2026-06-12
ruled-out:
  - Keeping the ledger strip as a home-page feature (it counted activity, not thinking)
tags:
  - decisions
  - site
  - design
links:
  - "[[journal/2026-06-11-living-atlas-and-decision-writing]]"
  - "[[wiki/Dimensions/Retrieval/Opportunistic Retrieval|Opportunistic Retrieval]]"
---

# Ledger demoted (H7)

Decision: demote the home-page ledger strip to one footer line, the same day it shipped. Its slot now runs an open-questions block (from journal frontmatter) and a daily retrieval rep — one wiki page, 30+ days untouched, deterministic by date — the site practicing [[wiki/Dimensions/Retrieval/Opportunistic Retrieval|Opportunistic Retrieval]] on its owner.

The reasoning: the ledger serves visitors, but the primary audience is future-Wedge, who has `git log`. And the parser's actual output ("57 pages touched") counts activity, not thinking — a vanity metric on a site whose premise is legible thought.

Cost accepted: the home page loses its machine-layer moment.

What would flip it back: a real `/ledger` page (still on the later-phases list) whose parser surfaces decisions and page-level diffs instead of touch counts — at that point the strip would be reporting thinking, and a home slot could be argued again.
