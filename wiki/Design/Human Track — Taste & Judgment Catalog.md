---
title: "Human Track — Taste & Judgment Catalog"
type: resource-catalog
status: developing
created: 2026-06-30
updated: 2026-06-30
source-count: 2
last-audited: 2026-06-30
tags:
  - design
  - taste
  - aesthetics
  - human-judgment
  - tsumugu
---

# Human Track — Taste & Judgment Catalog

What the eye must judge — the design that doesn't reduce to a rule an agent can run. This is the catalog Wedge actually reads and looks at: where an agent can produce a candidate but not tell whether it's *good*. Extracted per [[wiki/Design/Design Two-Track Extraction|Design Two-Track Extraction]]. The mechanical core of anything here lives in [[wiki/Design/Agent Track — Executable UI Technique Catalog|the Agent Track]]. Source tags: **[RUI]** = Refactoring UI; **[UPOD]** = Universal Principles of Design.

## Developing the eye

- **Rebuild interfaces you admire from scratch, no peeking at devtools.** The friction of matching the original is what surfaces the invisible tricks (tighter heading line-height, letter-spaced caps, doubled shadows). This is the single highest-yield calibration drill. [RUI]
- **Hunt for "decisions you wouldn't have made."** On any design you like, ask what the designer did that you'd never have thought to do (inverted datepicker, button inside the input, two-color headline). Collect these. [RUI]
- **Run the elimination exercise to train comparison.** Given a system, the *act of seeing* that two of three options are obviously wrong is the trainable perception; the scale itself is agent-work. [RUI; UPOD: Comparison]
- **Become a type snob on purpose.** Sustained attention to typography on good sites converts "I can't say why" into fast good/bad calls. [RUI]
- **Trust your eyes over the numbers at the finish.** Systematic palettes, proportions, and scales get you 90% there; the last S/L tweak is made by eye. [RUI]
- **The aesthetic-usability effect is real and it's a trap.** People rate attractive things as more usable, so beauty buys forgiveness — but it can also mask genuine usability faults from *you*. Judge both, separately. [UPOD: Aesthetic-Usability Effect]

## When to break the rule

- **Dense UIs are legitimate** — deliberately overriding "start with too much whitespace" for dashboards. The test is whether density is a choice, not a default. [RUI]
- **Grids are overrated; don't be a slave.** Break to fixed widths the moment fluid columns make something wider-on-medium-than-large or shrink past a usable minimum. [RUI]
- **>75 characters per line "can sometimes work"** — a judgment call you only make knowing you're in risky territory. [RUI]
- **Justify only to mimic print** (magazine/newspaper feel), and even then left-align is usually fine. [RUI]
- **MAYA — Most Advanced Yet Acceptable.** Push novelty exactly as far as the audience will tolerate and no further; where that line sits is pure read-of-the-room. [UPOD: MAYA]
- **Satisfice.** Knowing when a solution is good enough to ship vs. worth more polish is a judgment the rules can't make for you. [UPOD: Satisficing]

## Aesthetic coherence & feel

- **Choose a personality and make every choice serve it.** Font, color feel, border-radius, and copy tone must cohere toward one character (serious / playful / elegant). Often a gut call; calibrate against the sites your audience already uses, but don't ape direct competitors. [RUI]
- **Border-radius: consistency is a rule, amount is a feel.** Mixing square and round looks worse; *how much* round communicates personality. [RUI]
- **Color "psychology" in practice = what looks right to you.** Use it to explain a choice after the fact, not to derive one. [RUI]
- **Restraint with realism.** Once you can simulate light, the temptation is to over-tune toward photo-realism; knowing when to stop is taste. [RUI]
- **Hierarchy is what makes something "feel designed"** — and noticing when it's *off* (noisy, flat, competing) is a perceptual skill, not a checklist. [RUI]
- **Form follows function — but "faith follows function" warns the inverse fails:** functional-looking ≠ functional. Judge whether honest form actually fits, vs. mere styling cues of competence. [UPOD: Form Follows Function, Faith Follows Function]
- **Wabi-sabi / Gloss & Contour bias.** Humans are drawn to glossy and to curved-over-angular, and find beauty in imperfection and age. Whether to lean into polish, softness, or deliberate roughness is an aesthetic stance. [UPOD: Gloss Bias, Contour Bias, Wabi-Sabi]
- **Symmetry vs. dynamic balance.** Symmetry reads as stable/formal; asymmetry reads as energetic. Which one fits the feel is judgment. [UPOD: Symmetry]
- **Back of the dresser:** finish the parts no one inspects (code, empty states, edge layouts) — a craft standard you hold yourself to, not a checkable rule. [UPOD: Back of the Dresser]

## Visual perception (gestalt & attention)

- **Gestalt grouping is *perceived*, not measured.** Proximity, similarity, closure, common fate, good continuation, figure-ground — an agent can space things, but whether the eye reads the intended groups (and where figure/ground flips ambiguously) needs a human look. [UPOD: Proximity, Similarity, Closure, Common Fate, Good Continuation, Figure-Ground]
- **Surface area drives perceived weight.** Why bold and solid icons "feel heavy" — train the eye to feel imbalance before you can fix it with contrast. [RUI]
- **Hue has perceived brightness independent of HSL lightness** (yellow reads lighter than blue at equal L). The formula is agent-work; judging "rich vs. dull / warm vs. muddy" after a hue rotation is the eye. [RUI]
- **Where attention lands first** — focal point, entry point, reading gravity. Verify the eye actually goes where you intended; only looking tells you. [UPOD: Entry Point, Inattentional Blindness]

## Problem-framing & audience

- **Start with a feature, not a layout.** Frame the real problem before any pixels; the shell can't be designed until a few features exist. [RUI]
- **Design the smallest shippable version; be a pessimist.** Don't imply functionality you can't build; work in short build-test cycles rather than imagining every edge case. [RUI]
- **Detail comes later — design in grayscale first** to force spacing/contrast/size to carry the hierarchy before color rescues it. [RUI]
- **User-centered vs. user-driven.** Users report problems well and prescribe solutions badly; deciding how much to weight what they *ask for* vs. what they *need* is judgment. [UPOD: User-Centered vs. User-Driven Design]
- **Mental model is the whole game.** The user's model is built only from what you show; judging whether your surface actually induces the right model (and surfacing it when "synced/cloud" breaks) is interpretive. [UPOD: Mental Model]
- **Design the remembered experience (peak-end).** People judge an experience by its peak and its end, not its average; deciding which moment to make the peak and how to end well is a taste/empathy call. [UPOD: Peak-End Rule]
- **Desire lines tell the truth.** Watch where users actually go and pave that, rather than enforcing the path you drew. [UPOD: Desire Line]

## Examples to study

- **Real-world light cues:** a raised door panel vs. an inset cabinet panel — the source of every UI shadow decision. [RUI]
- **Well-designed sites' typography** — inspect and "steal from people who care." [RUI]
- **Asset sources worth knowing:** Unsplash (free photography), Hero Patterns (subtle backgrounds). [RUI]
- *(Add tsumugu surfaces here as worked good/bad pairs once the reader and dictionary chrome stabilize — see [[wiki/Design/Front-End Web Design|Front-End Web Design]].)*

## Sources

- Wathan, A. & Schoger, S. *Refactoring UI* — `raw/sources/design/Refactoring UI.pdf`.
- Lidwell, W., Holden, K. & Butler, J. *Universal Principles of Design*, 3rd ed. (2023) — `raw/sources/design/Universal Principles of Design.pdf`.
