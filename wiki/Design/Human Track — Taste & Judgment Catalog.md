---
title: "Human Track — Taste & Judgment Catalog"
type: resource-catalog
status: developing
created: 2026-06-30
updated: 2026-11-11
method: fresh-from-notes-2026-11-11
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
wedge_reviewed: false
---

# Human Track — Taste & Judgment Catalog

> Not yet reviewed by Wedge.

Some design skills cannot be reduced to rules, and this catalog collects them. They are judgments a person makes by looking. Examples include when to break a rule, whether a design holds together, how heavy an element looks and which problem to solve first. The eye for them is trained by rebuilding admired interfaces and by hunting for decisions one would not have made. Each judgment pairs with a principle from design research that explains why it matters, from the aesthetic-usability effect to the peak-end rule.

## Developing the eye

The eye improves through deliberate copying and noticing. The best way to see the small details that make a design look polished is to rebuild an admired interface from scratch without looking at the developer tools. Trying to explain why the copy looks different from the original turns up specific tricks, such as tighter line height on headings, letter spacing on uppercase text and stacked shadows. A second habit is to ask, of any design one likes, whether the designer did something one would never have thought to do. Typography improves the same way, since paying close attention to type on well-designed sites soon makes it easy to tell a strong typeface from a weak one.

The eye also has to watch itself. People often judge attractive designs easier to use even where tests show no usability advantage, and they make people more forgiving of small problems. Research on the effect is mixed, with some studies finding no link. A designer judging their own polished work can fall for the same effect.

## When to break the rule

Good rules have known exceptions, and taste includes knowing them.

- Generous white space usually feels cleaner, but a dashboard that must show a lot at once can be packed tight on purpose.
- A grid simplifies layout, but letting a grid make every layout decision often backfires, since not every element should have a fluid width.
- Lines of 45 to 75 characters are the safe range for reading. Going a little wider can work, though it is a risk.
- Justified text suits print and can work on the web for a formal look, but without hyphenation it leaves awkward gaps between words.
- Novelty has a ceiling. The Most Advanced Yet Acceptable principle holds that the most advanced form that people still recognize as familiar sells best, balancing typicality against novelty.
- Perfection is not always the goal. Satisficing means accepting a solution that meets the requirements roughly, which is better when time or resources are short and is the basis of prototyping and minimum viable products.

## What looking actually is

Looking, in this sense, is noticing decisions. A design that works is a stack of small choices, and seeing them means asking why each element looks the way it does. Unexpected choices teach the most, such as inverting the background color on a date picker, placing a button inside a text input instead of beside it, or using two colors within one headline.

## Aesthetic coherence

A coherent design has one personality, and the concrete choices carry it. A bank might aim to feel secure and professional, while a young startup might aim to feel fun. Font choice shapes the feel strongly, with serif type suggesting elegance and rounded sans serif suggesting play. Corner rounding matters too. A small border radius is neutral, and a large one feels playful.

Color psychology works better as an explanation than as a method. In practice the choice comes down to how a color feels, such as blue reading as safe and gold as expensive, and the psychology helps explain afterward why a color seems right.

Several principles mark the edges of coherence:

- Function comes first. Form follows function, and faith follows function warns against letting a designer's beliefs, such as sacred geometry or a passing style, override what the design is for.
- People find glossy surfaces more appealing than dull ones, even when matte is more usable, as with laptop displays.
- People prefer rounded forms to sharp ones, which trigger a fear response in the brain.
- Wabi-sabi offers the opposite pull, toward subtle imperfection and natural materials.
- Symmetry is the most basic form of beauty and its appeal is likely innate, but people trained in the arts often find asymmetry more beautiful.

## Visual perception

How a design is perceived is often judged by eye. The brain groups elements automatically when they sit close together, look alike, move together or form an incomplete shape it can close. Visual weight follows surface area, which is why bold text reads as emphasized, since it covers more pixels than regular text in the same space. Hue also carries its own brightness apart from a color's lightness value. Yellow looks lighter than blue at the same setting. Perceived brightness peaks at yellow, cyan and magenta and falls to its lowest points at red, green and blue.

## Problem-framing

Taste also applies before any pixels are drawn, in deciding what to design.

- Start with a feature, not a layout. An app is a collection of features, and without a few designed features there is no basis for deciding how navigation should work.
- Leave details for later. Early on, typefaces, shadows and icons do not matter yet. Sketching with a thick marker makes fussing over details impossible, and working in grayscale forces spacing, contrast and size to create the hierarchy.
- Be a pessimist. A design should not promise features that are not ready to build, because one hard feature can block the whole release when a smaller version could have shipped.
- Serve needs, not requests. User-centered design means understanding and solving people's problems, not simply building what they ask for, since users are not trained designers.
- Design the peak and the end. People remember an experience mainly by its most intense moment and its ending, so those moments deserve extra investment.
- Follow the desire lines. Worn paths and other traces of use show how things are actually used, without bias.

## Examples

Concrete cases make the judgments easier to see. A product line of laptops once dropped matte displays for glossy ones, and the glossy models outsold the matte ones even among buyers who knew matte was easier to use. Students crossing a campus quad wear paths that follow the route of least resistance, while tourists' paths follow the best attractions. The sculptor Deborah Butterfield builds horses from found scraps of metal and wood, a working example of wabi-sabi.

## Related pages

- [[wiki/Design/Front-End Web Design|Front-End Web Design]]: the same judgments applied to web pages.
- [[wiki/Concepts/Wabi-Sabi|Wabi-Sabi]]: the aesthetic of subtle imperfection in full.

## Open questions

- How does a designer check their own work against the aesthetic-usability effect?
- How does someone decide when a dense layout serves the user better than open space?
- How can rebuilding an interface be turned into a regular practice?

## Sources

- Adam Wathan and Steve Schoger, *Refactoring UI* (2018), sections on starting from scratch, choosing a personality, white space, grids, typography, color and leveling up. Paraphrased.
- William Lidwell, Kritina Holden and Jill Butler, *Universal Principles of Design*, entries on the aesthetic-usability effect, closure, common fate, contour bias, desire line, faith follows function, form follows function, gloss bias, MAYA, peak-end rule, proximity, satisficing, similarity, symmetry, user-centered vs. user-driven design and wabi-sabi. Paraphrased.
