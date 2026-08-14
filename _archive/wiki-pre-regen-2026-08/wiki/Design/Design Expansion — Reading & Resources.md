---
type: resource-catalog
status: seed
created: 2026-06-30
updated: 2026-06-30
source-count: 19
last-audited:
tags:
  - design
  - typography
  - front-end
  - cjk
  - resources
  - tsumugu
---

# Design Expansion — Reading & Resources

A reading plan to push the Design notes past a single source. Both [[wiki/Design/Design, Condensed|Design, Condensed]] and [[wiki/Design/Front-End Web Design|Front-End Web Design]] are currently pure Norman (`source-count: 1`) — strong on *interaction*, silent on *craft*. The disciplines Norman deliberately punts on (typography, multi-script type, color, grid, reading research) are exactly what the [[projects/tsumugu-ed|tsumugu]] reader (Silk-Seam) and dictionary (Paper & Ink) are made of. Each resource below is tagged with the **note it should feed**, so this stays a set of named threads rather than a pile of bookmarks.

## Quick Use

- Work the Priority tier first — it closes the Norman-to-visual-craft gap fastest and is the most directly applicable to the tsumugu surfaces.
- Treat each row as a *source* that graduates a specific note, not as standalone reading. The **Feeds** column is the point.
- The CJK specs (jlreq / clreq) have no substitute in any general design book — they are the authority for ruby, line-breaking, and inter-class spacing.
- Cross-link, don't silo: Make It Stick bridges Design ↔ [[wiki/Syntheses/Learning, Condensed|Learning, Condensed]].

## Priority — closes the actual gap

| Resource | Type | Feeds | Why |
| --- | --- | --- | --- |
| [Refactoring UI](https://www.refactoringui.com/) (Wathan & Schoger) | Book | [[wiki/Design/Front-End Web Design|Front-End Web Design]] | Written for developers who hold the UX principles but whose output still looks amateur — the exact Norman-to-craft jump. Hierarchy, spacing, color, depth, design-with-constraints. Your missing second source for *visual* decisions. |
| [Butterick's Practical Typography](https://practicaltypography.com/) | Site (free) | [[wiki/Design/Front-End Web Design|Front-End Web Design]] | Opinionated, web-native type craft: measure, leading, scale, body text. Maps straight onto reader/dictionary CSS. |
| [Web Typography](http://webtypography.net/) (Richard Rutter) | Site (free) | [[wiki/Design/Front-End Web Design|Front-End Web Design]] | Bringhurst's rules ported to CSS. The bridge from canon to your stylesheets. |
| [W3C jlreq — Japanese Text Layout](https://www.w3.org/TR/jlreq/) | Spec | New: Multi-Script / CJK Typography | Authority on ruby placement, kinsoku (line-break prohibition), mojikumi (inter-class spacing), vertical text. tsumugu uses ruby + a reserved underline channel — correctness lives here. |
| [W3C clreq — Chinese Text Layout](https://www.w3.org/TR/clreq/) | Spec | New: Multi-Script / CJK Typography | The Chinese-side counterpart to jlreq; CJK leading (~1.7), punctuation, line composition. |
| [Typotheque — Typesetting CJK text](https://www.typotheque.com/articles/typesetting-cjk-text) | Article | New: Multi-Script / CJK Typography | Deep, practitioner-grade walkthrough of CJK typesetting principles. |
| [Google Fonts Knowledge](https://fonts.google.com/knowledge) | Site (free) | [[wiki/Design/Front-End Web Design|Front-End Web Design]] | Web-font fundamentals + subsetting/performance for huge CJK glyph sets. |

## Canon — typography & visual craft (depth, after the above works)

| Resource | Type | Feeds | Why |
| --- | --- | --- | --- |
| [Thinking with Type](https://thinkingwithtype.com/) (Ellen Lupton) | Book | [[wiki/Design/Design, Condensed|Design, Condensed]] | Accessible, screen-aware grounding. Start here over Bringhurst. |
| Type on Screen (Ellen Lupton) | Book | [[wiki/Design/Front-End Web Design|Front-End Web Design]] | The digital follow-up to Thinking with Type. |
| The Elements of Typographic Style (Robert Bringhurst) | Book | [[wiki/Design/Design, Condensed|Design, Condensed]] | The deep reference. Read second, as lookup, not cover-to-cover. |
| Grid Systems in Graphic Design (Müller-Brockmann) | Book | [[wiki/Design/Design, Condensed|Design, Condensed]] | Layout/structure rigor — relevant to a calm reading column + right-rail/Continue-strip. |
| Interaction of Color (Josef Albers) | Book | [[wiki/Design/Front-End Web Design|Front-End Web Design]] | Color is relational — the theory behind "violet as a single reserved accent, never meaning two things." |
| Universal Principles of Design (Lidwell, Holden, Butler) | Book | [[wiki/Design/Design, Condensed|Design, Condensed]] | Broad pattern catalog that extends Norman's vocabulary without re-reading him. |

## Interaction — beyond Norman

| Resource | Type | Feeds | Why |
| --- | --- | --- | --- |
| [Nielsen Norman Group](https://www.nngroup.com/) | Site | [[wiki/Concepts/Design of Everyday Things|Design of Everyday Things]] | Direct continuation of Norman: 10 heuristics + ongoing research. Easiest source to deepen the existing notes. |
| About Face (Alan Cooper) | Book | [[wiki/Design/Front-End Web Design|Front-End Web Design]] | Interaction-design depth; goal-directed design and patterns. |
| Microinteractions (Dan Saffer) | Book | [[wiki/Design/Front-End Web Design|Front-End Web Design]] | Feedback/state at the detail level — your 100 ms / optimistic-UI / debounce territory. |

## Learning product — desirable difficulty

| Resource | Type | Feeds | Why |
| --- | --- | --- | --- |
| Make It Stick (Brown, Roediger, McDaniel) | Book | [[wiki/Syntheses/Learning, Condensed|Learning, Condensed]] ↔ [[wiki/Design/Front-End Web Design|Front-End Web Design]] | The science behind guess-first / Shift-peek "desirable difficulty." The design choice and the pedagogy should cite a shared source. |

## Accessibility — deeper

| Resource | Type | Feeds | Why |
| --- | --- | --- | --- |
| [Inclusive Components](https://inclusive-components.design/) (Heydon Pickering) | Site | [[wiki/Design/Front-End Web Design|Front-End Web Design]] | Code-level inclusive patterns — answers the emoji-label and keyboard-peek open questions directly. |
| Inclusive Design Patterns (Heydon Pickering) | Book | [[wiki/Design/Front-End Web Design|Front-End Web Design]] | Book-length companion to the above. |

## How these feed the vault

The expansion is three named threads, not nineteen loose links:

1. **Graduate `Front-End Web Design` past `source-count: 1`** — Refactoring UI, Rutter, Butterick, and About Face give it real second/third sources for visual + interaction craft.
2. **Stand up a new `Multi-Script / CJK Typography` page** — jlreq, clreq, and Typotheque. The reader and dictionary work should link *into* it; nothing in the general design canon covers ruby, kinsoku, or mojikumi.
3. **Bridge Design ↔ Learning** — Make It Stick lets the guess-first design decision and the `Learning, Condensed` pedagogy cite the same source instead of asserting "desirable difficulty" twice.

## Open Questions

- Should the CJK typography page live under `wiki/Design/` or `wiki/Language/`? It serves both.
- Which one source gets read first to graduate `Front-End Web Design` — Refactoring UI (visual craft) or Rutter (web type), given limited reading time?

## Related Pages

- [[wiki/Design/Design, Condensed|Design, Condensed]]
- [[wiki/Design/Front-End Web Design|Front-End Web Design]]
- [[wiki/Concepts/Design of Everyday Things|Design of Everyday Things]]
- [[wiki/Concepts/Cognitive Load & What Mental Effort Is Trying to Cue|Cognitive Load]]
- [[wiki/Concepts/The Screen Inferiority Effect|The Screen Inferiority Effect]]
- [[wiki/Syntheses/Learning, Condensed|Learning, Condensed]]
