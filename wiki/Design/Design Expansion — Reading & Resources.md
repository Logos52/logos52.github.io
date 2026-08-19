---
title: "Design Expansion — Reading & Resources"
type: resource-catalog
status: developing
created: 2026-06-30
updated: 2026-08-14
source-count: 19
last-audited:
written-by: grok
model: grok
tags:
  - design
  - typography
  - front-end
  - cjk
  - resources
  - tsumugu
---

# Design Expansion — Reading & Resources

Feeds is the rule that each resource exists to graduate a named note rather than sit in a pile of bookmarks. The first job is getting [[wiki/Design/Front-End Web Design|Front-End Web Design]] past its single source. That page is still `source-count: 1` and still Norman-only in its Sources. [[wiki/Design/Design, Condensed|Design, Condensed]] is no longer accurately described that way — it has no such field, was updated 2026-07-03, and now also carries choice architecture, color-as-function, and owning-fewer-things — but it remains Norman-heavy.

## How to use it, then Priority

**Each row is a source that graduates a specific note, not standalone reading.** Work the Priority tier first. It closes the Norman-to-visual-craft gap fastest, and it is the most directly applicable to the [[projects/tsumugu-ed|tsumugu]] surfaces. **tsumugu** is the language-learning project: a reader (**Silk-Seam** — reserved underlines, a scarce violet accent, a calm reading face) and a dictionary (**Paper & Ink** — a different chrome). Typography, multi-script type, color, grid, and reading research are the disciplines Norman deliberately punts on, and they are exactly what those two surfaces are made of.

**jlreq and clreq have no substitute in any general design book.** They are the authority for ruby, line-breaking, and inter-class spacing. Bringhurst, Lupton, and the visual-craft book do not specify kinsoku or mojikumi.

The Multi-Script / CJK Typography page those specs are supposed to feed **has not been created**, under Design or under Language. Still needed.

| Resource | Type | Feeds |
|---|---|---|
| *Refactoring UI* (Wathan & Schoger) | book | Front-End. Developers who hold the UX principles but whose output still looks amateur — hierarchy, spacing, color, depth, design-with-constraints. The missing second source for *visual* decisions. Not the only way to close the gap. |
| Butterick's Practical Typography | site (free) | Front-End. Measure, leading, scale, body text. Maps onto reader and dictionary CSS. |
| *Web Typography* (Richard Rutter) | site (free) | Front-End. The typographic-style rules ported to CSS. |
| W3C jlreq — Japanese Text Layout | spec | A new Multi-Script / CJK Typography page (not created). Authority on ruby placement, kinsoku, mojikumi, vertical text. tsumugu's reserved-underline channel is a Front-End fact, not a jlreq fact. |
| W3C clreq — Chinese Text Layout | spec | The same unbuilt page. Chinese-side counterpart; CJK leading (~1.7, a practitioner convention), punctuation, line composition. |
| Typotheque — Typesetting CJK text | article, not a spec | The same unbuilt page. Practitioner-grade walkthrough. |
| Google Fonts Knowledge | site (free) | Front-End. Web-font fundamentals, plus subsetting and performance for huge CJK glyph sets. |

## Canon, interaction, learning, accessibility

The expansion is three named threads, not nineteen loose links: graduate Front-End past `source-count: 1`; stand up the Multi-Script / CJK Typography page; bridge Design and [[wiki/Syntheses/Learning, Condensed|Learning, Condensed]] through *Make It Stick*. The Nielsen Norman Group site feeds [[wiki/Concepts/Design of Everyday Things|Design of Everyday Things]].

| Resource | Type | Feeds |
|---|---|---|
| *Thinking with Type* (Ellen Lupton) | book | Design, Condensed. Accessible, screen-aware grounding. Start here over Bringhurst. |
| *Type on Screen* (Ellen Lupton) | book | Front-End. Digital follow-up. |
| *The Elements of Typographic Style* (Robert Bringhurst) | book | Design, Condensed. The deep reference. Read second, as lookup, not cover-to-cover. |
| *Grid Systems in Graphic Design* (Müller-Brockmann) | book | Design, Condensed. Layout and structure rigor — relevant to a calm reading column plus a right-rail / Continue-strip. The application is tsumugu's; the book is the grid canon. |
| *Interaction of Color* (Josef Albers) | book | Front-End. Color is relational. That is the theory; "violet as a single reserved accent, never meaning two things" is tsumugu's rule, not Albers's prescription. |
| *Universal Principles of Design* (Lidwell, Holden, Butler) | book | Design, Condensed, as the cell originally promised. The extract already exists next door in the two-track catalogs and the scorecard; Condensed was never updated. |
| Nielsen Norman Group | site | Design of Everyday Things. Direct continuation: ten heuristics plus ongoing research. Commercial firm; the heuristics article is freely readable. Easiest source to deepen the existing notes. |
| *About Face* (Alan Cooper) | book | Front-End. Goal-directed design and patterns. |
| *Microinteractions* (Dan Saffer) | book | Front-End. Feedback and state at the detail level — the 100 ms / optimistic-UI / debounce *territory*. The 100 ms figure is older (Card, Moran & Newell, 1983). Saffer is the microinteraction frame. |
| *Make It Stick* (Brown, Roediger, McDaniel) | book | Learning, Condensed and Front-End. The science behind guess-first / Shift-peek "desirable difficulty." The design choice and the pedagogy should cite a shared source. Front-End already uses the design and does not yet share the citation. |
| Inclusive Components (Heydon Pickering) | site (free) | Front-End. Code-level inclusive patterns. Answers the emoji-label and keyboard-peek questions directly. |
| *Inclusive Design Patterns* (Heydon Pickering) | book | Front-End. Book-length companion. |

A list this long invites collecting titles. Priority is seven items, not nineteen. If Front-End's `source-count` has not moved after the Priority tier is opened, the plan was used as a bookmark pile. The plan is working when Front-End's `source-count` is greater than one, or a CJK typography page exists, or *Make It Stick* is cited on both sides of the bridge.

The plan is still those three threads. Thread 2 is unstarted. Which Priority source is read first — the visual-craft book or Rutter — is still open, and Front-End is still one source.

## Related

- [[wiki/Design/Design, Condensed|Design, Condensed]] — doctrine compression; still Norman-heavy, no longer accurately `source-count: 1`.
- [[wiki/Design/Front-End Web Design|Front-End Web Design]] — the note this list is trying to graduate; still `source-count: 1`.
- [[projects/tsumugu-ed|tsumugu]] — the reader and dictionary the craft gap is about.
- [[wiki/Syntheses/Learning, Condensed|Learning, Condensed]] — the other half of the *Make It Stick* bridge.
- [[wiki/Concepts/Design of Everyday Things|Design of Everyday Things]] — the Norman source the existing notes already rest on.
- [[wiki/Concepts/Cognitive Load & What Mental Effort Is Trying to Cue|Cognitive Load]] — related; why a reading surface earns extra care, not an item on this list.
- [[wiki/Concepts/The Screen Inferiority Effect|The Screen Inferiority Effect]] — related; the same reason a reading surface earns extra care.

## Open Questions

Whether the CJK typography page lives under `wiki/Design/` or `wiki/Language/`. It serves both. No such page exists under either path.

Which one source gets read first to graduate Front-End — the visual-craft book or Rutter — given limited reading time.

## Sources

Butterick's Practical Typography: [practicaltypography.com](https://practicaltypography.com/). Rutter, *Web Typography*: [webtypography.net](https://webtypography.net/). W3C [jlreq](https://www.w3.org/TR/jlreq/), [clreq](https://www.w3.org/TR/clreq/). Typotheque, [Typesetting CJK text](https://www.typotheque.com/articles/typesetting-cjk-text). [Google Fonts Knowledge](https://fonts.google.com/knowledge). [Nielsen Norman Group](https://www.nngroup.com/). [Inclusive Components](https://inclusive-components.design/).

Wathan & Schoger, *Refactoring UI* (2018). Lupton, *Thinking with Type*; *Type on Screen*. Bringhurst, *The Elements of Typographic Style*. Müller-Brockmann, *Grid Systems in Graphic Design*. Albers, *Interaction of Color*. Lidwell, Holden & Butler, *Universal Principles of Design*. Cooper, *About Face*. Saffer, *Microinteractions*. Brown, Roediger & McDaniel, *Make It Stick* (2014). Pickering, *Inclusive Design Patterns*. Card, Moran & Newell (1983) for the 100 ms figure.
