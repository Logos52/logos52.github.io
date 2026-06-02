---
title: "Front-facing redesign — Projects section + declutter"
type: journal
created: 2026-06-02
updated: 2026-06-02
tags:
  - journal
  - site
  - decisions
---

# Front-facing redesign (2026-06-02)

We reworked the public front of the site — a new Projects section plus a declutter pass on the existing pages — prompted by a friend's feedback that the site impressed him even where it sat outside his field. The aim: keep the depth, add a plain-language on-ramp, and cut clutter.

## What we built

**Projects section (new).** A `projects/` folder with a data-driven gallery and one page per project, replacing "MG & Kolbs" in the top nav. Six honest post-mortems — *Building now:* llm-knowledge-base, WNAC, MG & Kolbs, cos; *Archived:* wnab, Pan's MG & Kolbs Template — each covering what it is, what worked, what broke, and the lesson. Cards carry screenshots where we have safe ones.

**Declutter.** Journal cut to three sections with a rebuilt sidebar (dead and "private" links removed, template stubs unpublished); Index folded its two redundant top lists into one "Start here" and dropped the internal status column from the catalog; About leads with a plain-language on-ramp; Home's hero reads plainer with a newcomer cue; Blog splits posts from collections.

## Decisions worth keeping

- **Privacy held by construction.** Finance projects follow the "method public, money private" doctrine. The WNAC card screenshot is rendered from entirely fake data, never the real dashboard, so no balances reach the public site.
- **cos lineage corrected.** cos is a current project with a failed terminal chapter: the Textual terminal surfaces were retired, and a static HTML dashboard on WNAC's design language (cos light, WNAC dark) is the living form. The earlier "Basecamp-style" framing is dropped.
- **llm-knowledge-base listed as a project.** Including the site in its own Projects section felt recursive, but it is a project, so it stays — first in the row.

## Outstanding

- Design notes per project — placeholders sit in each page to fill in.
- Optional: shrink the heavier project screenshots.
- The redesign is committed on the `worktree-front-pages-projects` branch, not yet merged or pushed live.
