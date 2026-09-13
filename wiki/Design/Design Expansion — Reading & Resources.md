---
title: "Design Expansion — Reading & Resources"
type: resource-catalog
status: developing
created: 2026-06-30
updated: 2026-09-13
method: plain-register-2026-09-13
prose-model: opus
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

Each resource is here to add a source to the note named in its Feeds column. It is meant to be read and cited in that note, and not saved as a bookmark and left unread. The first job is adding a second source to [[wiki/Design/Front-End Web Design|Front-End Web Design]]. That page still has `source-count: 1`, and its Sources section still cites only Norman. [[wiki/Design/Design, Condensed|Design, Condensed]] no longer fits that description: it has no `source-count` field, it was updated 2026-07-03, and it now also covers choice architecture, color-as-function, and owning-fewer-things. It still draws mostly on Norman.

## How to use it, then Priority

**Each row is a source to be read for one specific note.** Read the Priority tier first. It is the fastest way to add visual-craft sources to notes that cite mostly Norman, and it applies most directly to the [[projects/tsumugu-ed|tsumugu]] surfaces. **tsumugu** is the language-learning project: a reader (**Silk-Seam**: reserved underlines, a scarce violet accent, a calm reading face) and a dictionary (**Paper & Ink**: a different chrome). Norman deliberately does not cover typography, multi-script type, color, grid, or reading research. Those two surfaces are designed from exactly those disciplines.

**No general design book can replace jlreq and clreq.** They are the authority for ruby, line-breaking, and inter-class spacing. Bringhurst, Lupton, and the visual-craft book do not specify kinsoku or mojikumi.

The Multi-Script / CJK Typography page that those specs are meant to supply sources for **has not been created**, under Design or under Language. It is still needed.

| Resource | Type | Feeds |
|---|---|---|
| *Refactoring UI* (Wathan & Schoger) | book | Front-End. Written for developers who know the UX principles but whose output still looks amateur: hierarchy, spacing, color, depth, design-with-constraints. The second source Front-End lacks for *visual* decisions. Other sources could also supply that second source. |
| Butterick's Practical Typography | site (free) | Front-End. Measure, leading, scale, body text. Applies directly to the reader and dictionary CSS. |
| *Web Typography* (Richard Rutter) | site (free) | Front-End. The typographic-style rules, rewritten for CSS. |
| W3C jlreq — Japanese Text Layout | spec | A new Multi-Script / CJK Typography page (not created). Authority on ruby placement, kinsoku, mojikumi, vertical text. tsumugu's reserved-underline channel is documented in Front-End and does not come from jlreq. |
| W3C clreq — Chinese Text Layout | spec | The same page, not yet created. The Chinese counterpart of jlreq; CJK leading (~1.7, a practitioner convention), punctuation, line composition. |
| Typotheque — Typesetting CJK text | article, not a spec | The same page, not yet created. A step-by-step guide written at practitioner level. |
| Google Fonts Knowledge | site (free) | Front-End. Web-font fundamentals, plus subsetting and performance for very large CJK glyph sets. |

## Canon, interaction, learning, accessibility

The expansion has three named goals for the nineteen resources: raise Front-End above `source-count: 1`; create the Multi-Script / CJK Typography page; cite *Make It Stick* in both Design and [[wiki/Syntheses/Learning, Condensed|Learning, Condensed]]. The Nielsen Norman Group site is a source for [[wiki/Concepts/Design of Everyday Things|Design of Everyday Things]].

| Resource | Type | Feeds |
|---|---|---|
| *Thinking with Type* (Ellen Lupton) | book | Design, Condensed. An accessible introduction that accounts for screens. Read it before Bringhurst. |
| *Type on Screen* (Ellen Lupton) | book | Front-End. Follow-up book on digital type. |
| *The Elements of Typographic Style* (Robert Bringhurst) | book | Design, Condensed. The detailed reference. Read it second, to look things up in, and do not read it cover to cover. |
| *Grid Systems in Graphic Design* (Müller-Brockmann) | book | Design, Condensed. Strict rules for layout and structure, relevant to a calm reading column plus a right-rail / Continue-strip. The book is the standard text on grid systems. The reading column and right-rail layout is tsumugu's own design, and the book does not describe it. |
| *Interaction of Color* (Josef Albers) | book | Front-End. Color is relational: that is Albers's theory. The rule "violet as a single reserved accent, never meaning two things" is tsumugu's rule. Albers does not prescribe it. |
| *Universal Principles of Design* (Lidwell, Holden, Butler) | book | Design, Condensed, as this row originally stated. The extract already exists in the adjacent two-track catalogs and the scorecard. Design, Condensed was never updated with it. |
| Nielsen Norman Group | site | Design of Everyday Things. A direct continuation: ten heuristics plus ongoing research. A commercial firm; the heuristics article is free to read. The easiest source for adding detail to the existing notes. |
| *About Face* (Alan Cooper) | book | Front-End. Goal-directed design and patterns. |
| *Microinteractions* (Dan Saffer) | book | Front-End. Feedback and state at the detail level: the subject *area* that includes 100 ms responses, optimistic UI, and debounce. The 100 ms figure comes from earlier work (Card, Moran & Newell, 1983). Cite Saffer for the microinteraction framework. |
| *Make It Stick* (Brown, Roediger, McDaniel) | book | Learning, Condensed and Front-End. The research that explains guess-first / Shift-peek "desirable difficulty." The design choice and the pedagogy should cite a shared source. Front-End already uses the design and does not yet cite the book. |
| Inclusive Components (Heydon Pickering) | site (free) | Front-End. Code-level inclusive patterns. Answers the emoji-label and keyboard-peek questions directly. |
| *Inclusive Design Patterns* (Heydon Pickering) | book | Front-End. A book-length companion to Inclusive Components. |

With nineteen resources, it is easy to collect titles and not read them. The Priority tier has seven items; the full list has nineteen. If Front-End's `source-count` is unchanged after the Priority tier is opened, the resources were saved as bookmarks and not read. The plan is working when Front-End's `source-count` is greater than one, or a CJK typography page exists, or *Make It Stick* is cited in both Front-End and Learning, Condensed.

The plan still consists of those three goals. Goal 2, the CJK typography page, has not been started. Which Priority source to read first, the visual-craft book or Rutter, is still undecided, and Front-End still has one source.

## Related

- [[wiki/Design/Design, Condensed|Design, Condensed]]: a condensed summary of design doctrine; still draws mostly on Norman; no longer accurately described as `source-count: 1`.
- [[wiki/Design/Front-End Web Design|Front-End Web Design]]: the note these resources are meant to add sources to; still `source-count: 1`.
- [[projects/tsumugu-ed|tsumugu]]: the reader and dictionary that need the missing visual-craft sources.
- [[wiki/Syntheses/Learning, Condensed|Learning, Condensed]]: the other note that should cite *Make It Stick*.
- [[wiki/Concepts/Design of Everyday Things|Design of Everyday Things]]: the Norman source the existing notes already cite.
- [[wiki/Concepts/Cognitive Load & What Mental Effort Is Trying to Cue|Cognitive Load]]: related; explains why a reading surface needs extra care; not an item on this list.
- [[wiki/Concepts/The Screen Inferiority Effect|The Screen Inferiority Effect]]: related; gives the same reason a reading surface needs extra care.

## Open Questions

Whether the CJK typography page goes under `wiki/Design/` or `wiki/Language/`. It is relevant to both. No such page exists under either path.

Which one source to read first for Front-End's second source, the visual-craft book or Rutter, given limited reading time.

## Sources

Butterick's Practical Typography: [practicaltypography.com](https://practicaltypography.com/). Rutter, *Web Typography*: [webtypography.net](https://webtypography.net/). W3C [jlreq](https://www.w3.org/TR/jlreq/), [clreq](https://www.w3.org/TR/clreq/). Typotheque, [Typesetting CJK text](https://www.typotheque.com/articles/typesetting-cjk-text). [Google Fonts Knowledge](https://fonts.google.com/knowledge). [Nielsen Norman Group](https://www.nngroup.com/). [Inclusive Components](https://inclusive-components.design/).

Wathan & Schoger, *Refactoring UI* (2018). Lupton, *Thinking with Type*; *Type on Screen*. Bringhurst, *The Elements of Typographic Style*. Müller-Brockmann, *Grid Systems in Graphic Design*. Albers, *Interaction of Color*. Lidwell, Holden & Butler, *Universal Principles of Design*. Cooper, *About Face*. Saffer, *Microinteractions*. Brown, Roediger & McDaniel, *Make It Stick* (2014). Pickering, *Inclusive Design Patterns*. Card, Moran & Newell (1983) for the 100 ms figure.
