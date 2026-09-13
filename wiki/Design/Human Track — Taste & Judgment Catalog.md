---
title: "Human Track — Taste & Judgment Catalog"
type: resource-catalog
status: developing
created: 2026-06-30
updated: 2026-09-13
method: plain-register-2026-09-13
prose-model: opus
source-count: 2
last-audited: 2026-06-30
written-by: grok
model: grok
tags:
  - design
  - taste
  - aesthetics
  - human-judgment
  - tsumugu
---

# Human Track — Taste & Judgment Catalog

The Human Track is the catalog of design decisions that a machine can draft but cannot grade. Using it means looking at designs. Memorizing a list of named effects is not the goal. Entries were sorted by [[wiki/Design/Design Two-Track Extraction|Design Two-Track Extraction]]. The mechanical core of each entry here is kept on [[wiki/Design/Agent Track — Executable UI Technique Catalog|the Agent Track]]. A **seam** is the point where an entry is split: the mechanical core goes on the Agent Track, and the judgment that remains goes in this catalog. People read this catalog and look at its examples.

## Developing the eye

**Interfaces worth admiring are rebuilt from scratch, without opening devtools.** The effort of matching the original exposes techniques that are hard to see: tighter line-height on headings, letter-spaced capitals, doubled shadows. Doing the rebuild is what trains the judgment. The book calls it the highest-yield drill, but the book did not measure that. [RUI]

**The search is for design decisions the observer would never have made.** For any design that works, the question is which of the designer's choices would not have occurred to the observer: an inverted datepicker, a button placed inside the input, a two-color headline. These choices are collected. [RUI]

**Eliminating options trains comparison.** Given a value system, the skill that can be trained is seeing that two of three options are obviously wrong. Building the fixed set of values is work for an agent. [RUI]

**Attention to typography is practiced on purpose.** Looking at the typography on good sites over a long period changes "I can't say why" into a fast judgment of good or bad. [RUI]

**The final adjustments are made by looking, not by numbers.** Systematic palettes, proportions, and scales produce most of the result. The last adjustment to saturation or lightness is made by looking. [RUI]

**The aesthetic-usability effect is real, and it can mislead the designer.** People rate attractive things as more usable, so they excuse problems in attractive things. The same effect can hide real faults from the designer. The look and the usability are judged separately. [UPOD]

## When to break the rule

**Dense interfaces are legitimate.** A dashboard can deliberately ignore the advice "Start with too much whitespace". The test is whether the density was chosen on purpose or left as a default. [RUI]

**A grid is a tool, and it is set aside when it causes problems.** Fixed widths replace fluid columns as soon as the columns make an element wider on a medium screen than on a large screen, or narrower than its minimum usable width. [RUI]

**A line longer than seventy-five characters can sometimes work.** That choice is made only with the knowledge that it is risky. The safe range is listed on the Agent Track. [RUI]

**Justified text is for imitating print**, such as the look of a magazine or newspaper. Even then, left-aligned text is usually fine. [RUI]

**MAYA is Most Advanced Yet Acceptable.** Novelty goes as far as the audience will accept and stops there. Where that limit sits has to be judged from the specific audience. [UPOD]

**Satisficing is knowing when a solution is good enough to ship, and when more polish is still worth the effort.** This decision cannot be made by following rules. [UPOD]

## What looking actually is

The last adjustment is made by looking. The claim that the systems get "ninety percent" of the way is an assertion in the book, not a measured finding. People excuse problems in attractive designs, and attractiveness can hide faults from the person who made the surface. Judge the look and the use separately. Each named effect below is a judgment with a visible sign to look for. The list is not something to memorize.

## Aesthetic coherence

**One personality is chosen for the design, and every choice supports it.** Font, the feel of the colors, border-radius, and the tone of the copy all match one character: serious, playful, or elegant. The design is compared with sites the audience already uses. Direct competitors are not copied. [RUI]

**Border-radius must be consistent, and the amount is chosen by feel.** Mixing square and rounded corners looks worse. The amount of rounding tells the viewer something about the design's personality. [RUI]

**Color "psychology" is used to explain a color choice after it has been made. It is not a method for making the choice.** In practice, the color is chosen by what looks right. [RUI]

**Realism should stop at some point.** Once light can be simulated, it is tempting to keep adjusting until the result looks like a photograph. Knowing when to stop is a matter of taste. [RUI]

**Hierarchy is what makes something look designed.** Noticing when the hierarchy is *off*, meaning noisy, flat, or competing, is a perceptual skill. It cannot be done with a checklist. [RUI]

**Form follows function. Faith-follows-function is the warning that the reverse does not hold.** Something that looks functional is not necessarily functional. The judgment is whether the form honestly fits what the thing does, or only uses styling that suggests competence. [UPOD]

**Wabi-sabi is listed with gloss bias and contour bias. It is a stance, not a law.** People prefer glossy surfaces, and they prefer curved forms to angular ones. People also find beauty in imperfection and age. The judgment is whether to emphasize polish, softness, or deliberate roughness. [UPOD]

**Symmetry looks stable and formal. Asymmetry looks energetic.** Choosing which one fits the intended feel is a judgment. [UPOD]

**Parts that nobody usually sees, such as the back of a dresser, are finished anyway.** This applies to code, empty states, and edge layouts. It is a standard of craft that the maker holds, not a rule that can be checked. [UPOD]

## Visual perception

**Gestalt grouping is perceived, and it is not measured.** Gestalt grouping covers proximity, similarity, closure, common fate, good continuation, and figure-ground. An agent can set the spacing between elements. A person still has to look to check whether viewers see the intended groups, and where figure and ground switch in an ambiguous way. [UPOD]

**The more surface area an element covers, the heavier it looks.** Bold type and solid icons look heavy. The designer trains the ability to see an imbalance before using contrast to correct it. [RUI]

**Hue has a perceived brightness independent of HSL lightness.** Yellow looks lighter than blue at the same L value. Computing the formula is work for an agent. After a hue rotation, judging whether the color is rich or dull, warm or muddy, is done by looking. [RUI]

**Where a viewer looks first is checked by looking.** This covers focal point, entry point, and reading gravity. Only looking shows whether the viewer's eye actually went to the place the design directed it. [UPOD]

## Problem-framing

**A feature is designed before a layout.** The real problem is defined before any pixels are drawn. The shell cannot be designed until a few features exist. [RUI]

**The smallest shippable version is designed with pessimistic assumptions.** The design does not suggest any functionality that cannot be built. Short cycles of building and testing are used instead of trying to imagine every edge case. [RUI]

**Details are added later.** Designing in grayscale first means spacing, contrast, and size have to create the hierarchy. Color is added afterward, so color cannot be used to compensate for a weak hierarchy. [RUI]

**User-centered design is not the same as user-driven design.** People describe their problems accurately. The solutions they propose are poor. Deciding how much weight to give what they ask for, compared with what they need, is a judgment. [UPOD]

**Everything depends on the user's mental model.** Users build their model only from what the surface shows. Judging whether that surface actually leads to the correct model, and making the model visible when "synced" or "cloud" breaks, requires interpretation. [UPOD]

**The remembered experience is designed at its peak and its end, not at its average.** Deciding which moment is the peak, and how the experience ends, takes taste and empathy. [UPOD]

**Desire lines show where people actually walk.** The path people actually take is paved, instead of the path that was planned. [UPOD]

## Examples

```text
A raised door panel vs an inset cabinet panel.
Light from above: the source of every UI shadow decision.
```

Typography on well-designed sites is inspected. Copy from people who care about typography. [RUI]

The asset sources worth knowing are types of source, not specific shops: a free photo library, an SVG pattern library. [RUI]

**tsumugu** is the language-learning reader and dictionary that these catalogs are used to judge. Here are two pairs from its surfaces, shown as things to look at instead of as named effects:

```text
Guess-first vs the answer shown.
Good: the reader has to produce the word before the gloss arrives.
Bad: a peek that hands the answer and calls it practice.

A control vs an emoji standing in for a name.
Good: the action is labeled in words the hand and the reader can both use.
Bad: a lone pictogram carrying the only name the control has.
```

Readers of a judgment catalog tend to collect named effects, in the same way readers of a rules catalog tend to collect numbers. Looking at two surfaces is more useful than naming twelve effects. Rebuilding from scratch without devtools is the expensive drill. The search for decisions the observer would not have made, the elimination drill, and attention to typography take less effort and train the same visual judgment. If a pass through the catalog finds no "decision I would not have made", and finds no hierarchy that is noisy, flat, or competing, then the catalog was only read and was not applied. After one rebuild, it is possible to name one hard-to-see technique that would not have been thought of otherwise. After designing in grayscale first, the hierarchy does not depend on color.

Following the rules is not enough to tell whether the result is good. That takes trained visual judgment, and the trained judgment matters more than this written catalog.

## Related

- [[wiki/Design/Design Two-Track Extraction|Design Two-Track Extraction]]: the classification test used to sort entries into this catalog.
- [[wiki/Design/Agent Track — Executable UI Technique Catalog|the Agent Track]]: where the mechanical core of each entry here is kept.
- [[wiki/Design/Front-End Web Design|Front-End Web Design]]: the tsumugu surfaces that these good/bad pairs come from.

## Open Questions

Whether more tsumugu pairs are added here once the reader and dictionary chrome stop changing.

Whether seam notes on the Agent Track become jump anchors once these headings stop changing.

## Sources

Wathan & Schoger, *Refactoring UI* (2018). Lidwell, Holden & Butler, *Universal Principles of Design*, 3rd ed. (2023). Kurosu & Kashimura (1995); Tractinsky, Katz & Ikar (2000), aesthetic-usability. Loewy, MAYA. Simon (1956), satisficing. Bar & Neta (2006), contour bias. Wertheimer, Gestalt grouping. Helmholtz–Kohlrausch effect. Mack & Rock (1998); Simons & Chabris (1999), inattentional blindness. Kahneman, Fredrickson, Schreiber & Redelmeier (1993), peak-end.
