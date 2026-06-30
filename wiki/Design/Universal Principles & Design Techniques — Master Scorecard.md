---
title: "Universal Principles & Design Techniques — Master Scorecard"
type: resource-catalog
status: developing
created: 2026-06-30
updated: 2026-06-30
source-count: 2
last-audited: 2026-06-30
tags:
  - design
  - human-ai
  - scorecard
  - taste
  - judgment
  - naval
  - tsumugu
---

# Universal Principles & Design Techniques — Master Scorecard

Every principle from *Universal Principles of Design* (200) and every rule from *Refactoring UI* (50), scored on the [[wiki/Concepts/Human vs AI Capability Lens|Human vs AI Capability Lens]]: two independent 1–5 axes — **H** (human ownership) and **AI** (machine executability) — plus two relevance columns, **B** (Build = Tsumugu) and **L** (Learning = your growth), with a derived **Zone**.
<div style="font-family:ui-sans-serif,system-ui,sans-serif;display:grid;grid-template-columns:1fr 1fr;gap:8px 26px;max-width:520px;margin:6px 0 2px;font-size:12.5px;"><span style="display:grid;grid-template-columns:58px 1fr;gap:10px;align-items:center;"><span style="opacity:.65;">Human</span><span style="background:rgba(130,130,130,.1);border-radius:999px;height:6px;"><span style="display:block;width:60%;height:6px;border-radius:999px;background:#caa53d;"></span></span></span><span style="display:grid;grid-template-columns:58px 1fr;gap:10px;align-items:center;"><span style="opacity:.65;">Build</span><span style="background:rgba(130,130,130,.1);border-radius:999px;height:6px;"><span style="display:block;width:100%;height:6px;border-radius:999px;background:#3aa76d;"></span></span></span><span style="display:grid;grid-template-columns:58px 1fr;gap:10px;align-items:center;"><span style="opacity:.65;">AI</span><span style="background:rgba(130,130,130,.1);border-radius:999px;height:6px;"><span style="display:block;width:60%;height:6px;border-radius:999px;background:#caa53d;"></span></span></span><span style="display:grid;grid-template-columns:58px 1fr;gap:10px;align-items:center;"><span style="opacity:.65;">Learning</span><span style="background:rgba(130,130,130,.1);border-radius:999px;height:6px;"><span style="display:block;width:80%;height:6px;border-radius:999px;background:#3aa76d;"></span></span></span></div>
<p style="font-size:11px;opacity:.5;margin-top:2px;">This page · profile of the catalog itself.</p>

**Zones** (derived from H × AI): **Own** — yours to make, agents can't. **Augment** — both high; the agent drafts, you judge and own. **Delegate** — hand to the agent. **Low-leverage** — neither pulls hard.

Grades are dated judgment calls (`last-audited`), graded against the current frontier; the AI column drifts up as models improve. Detail on the axes and facets: [[wiki/Concepts/Human vs AI Capability Lens|Human vs AI Capability Lens]]; the source extraction: [[wiki/Design/Design Two-Track Extraction|Design Two-Track Extraction]].


## Own it — the human moat

High human ownership, agents can't carry it. Sorted by Human, then Learning.

| Principle | H | AI | B | L | Zone | Gloss |
| --- | :-: | :-: | :-: | :-: | --- | --- |
| Ackoff’s Law | 5 | 1 | 2 | 5 | Own | It is better to do the right things wrong than the wrong things right |
| Box’s Law | 5 | 2 | 2 | 5 | Own | All models are wrong, but some are useful |
| Causal Reductionism | 5 | 2 | 2 | 5 | Own | A tendency to fixate on one cause when solving problems, ignoring the reality of multiple  |
| Chesterton’s Fence | 5 | 2 | 3 | 5 | Own | Seek to understand why things exist the way they do before changing or removing them |
| Confirmation Bias | 5 | 2 | 2 | 5 | Own | A tendency to favor information that confirms pre-existing views |
| Creator Blindness | 5 | 2 | 3 | 5 | Own | The inability of a creator to see fundamental flaws in their creation |
| Dunning-Kruger Effect | 5 | 2 | 2 | 5 | Own | A tendency for unskilled people to overestimate their competence and performance |
| First Principles | 5 | 2 | 3 | 5 | Own | Things we know for certain to be true and that are not derived from anything else |
| Gall’s Law | 5 | 2 | 4 | 5 | Own | All successful complex things begin as simple things and become complex through iteration |
| Knowing-Doing Gap | 5 | 1 | 3 | 5 | Own | The divide that exists between knowing how to do something and actually doing it |
| Leverage Point | 5 | 2 | 3 | 5 | Own | A place within a system where small changes produce big effects |
| Maslow’s Hammer | 5 | 2 | 3 | 5 | Own | The tendency to approach problems based on the tools and expertise at hand |
| Nirvana Fallacy | 5 | 2 | 3 | 5 | Own | The tendency to disregard good solutions because they fall short of perfection |
| Ockham’s Razor | 5 | 2 | 4 | 5 | Own | Given a choice between functionally equivalent designs, the simplest design should be sele |
| Perverse Incentive | 5 | 2 | 2 | 5 | Own | An incentive that unintentionally worsens the problem it seeks to solve |
| Process Eats Goal | 5 | 2 | 3 | 5 | Own | A situation in which people follow a process that undermines the greater goal |
| Satisficing | 5 | 2 | 4 | 5 | Own | A problem-solving strategy that seeks a satisfactory versus optimal solution |
| Selection Bias | 5 | 3 | 2 | 5 | Own | A bias in the way evidence is collected that distorts analysis and conclusions |
| Status Quo Bias | 5 | 2 | 2 | 5 | Own | A preference for things as they are, even when a change would improve things |
| Streetlight Effect | 5 | 2 | 2 | 5 | Own | A bias to search for things where it is easiest |
| Sunk Cost Effect | 5 | 2 | 3 | 5 | Own | The tendency to keep investing in an endeavor because of past investments in that endeavor |
| Survivorship Bias | 5 | 2 | 2 | 5 | Own | The tendency to overemphasize things that survive a selection process |
| Back of the Dresser | 5 | 2 | 4 | 4 | Own | All parts of a design, visible and nonvisible, should be held to the same standard of qual |
| Paradox of Great Ideas | 5 | 1 | 2 | 4 | Own | Great ideas are indistinguishable from crazy ideas when first introduced |
| User-Centered vs. User-Driven Design | 5 | 2 | 4 | 4 | Own | A focus on understanding and meeting user needs versus simply implementing user requests |

## Augment — the collaboration sweet spot

Both axes high: the agent drafts and scales, you judge and own.

| Principle | H | AI | B | L | Zone | Gloss |
| --- | :-: | :-: | :-: | :-: | --- | --- |
| Storytelling | 5 | 4 | 4 | 5 | Augment | Evoking imagery, emotions, and understanding through the presentation of events |
| Framing | 5 | 4 | 3 | 5 | Augment | A method of presenting choices in specific ways to influence decision-making and judgment |
| Mental Model | 4 | 4 | 5 | 4 | Augment | A mental simulation of how things work |
| Desire Line | 4 | 4 | 4 | 4 | Augment | Traces of use or wear that indicate preferred methods of interaction |
| Error, Design | 4 | 4 | 4 | 4 | Augment | A design-caused action or inaction that yields an unintended or undesirable result |
| Error, Human | 4 | 4 | 4 | 4 | Augment | An action, or omission of action, that leads to an unintended result |
| Five Hat Racks | 4 | 4 | 4 | 4 | Augment | A metaphor representing the five ways information can be organized |
| Iteration | 4 | 4 | 4 | 4 | Augment | Designing things in phases, each phase building on the last, until a desired result is ach |
| Minimum-Viable Product | 4 | 4 | 4 | 4 | Augment | A version of a product with just enough features to evaluate customer demand |
| Nudge | 4 | 4 | 4 | 4 | Augment | A method of influencing behavior without restricting options or changing incentives |
| Prototyping | 4 | 4 | 4 | 4 | Augment | Building low-fidelity models to explore ideas and deeply understand problems |
| Rosetta Stone | 4 | 4 | 4 | 4 | Augment | A strategy for communicating novel information using elements of common understanding |
| Anchoring | 4 | 4 | 3 | 4 | Augment | The subconscious influence of reference points on decision-making and judgment |
| Cost-Benefit | 4 | 4 | 3 | 5 | Augment | Value is a function of the costs of acquisition and use versus the benefits provided |
| Feedback Loop | 4 | 4 | 3 | 4 | Augment | A cycle in which output feeds back into a system as input, changing subsequent output |
| Kano Model | 4 | 4 | 3 | 3 | Augment | A model for understanding customer needs and then prioritizing design features accordingly |
| Pareto Principle | 4 | 4 | 3 | 5 | Augment | A small percentage of variables in any large system is responsible for most of its behavio |
| Priming | 4 | 4 | 3 | 4 | Augment | Activating specific concepts in memory to influence subsequent thoughts and behaviors |
| Root Cause | 4 | 4 | 3 | 5 | Augment | The key initiating cause in a sequence of events that leads to an event of interest |
| Stickiness | 4 | 4 | 3 | 4 | Augment | Properties of information that increase recognition, recall, and voluntary sharing |

## Delegate — hand to the agent

High AI, low human ownership. Sorted by Build relevance.

| Principle | H | AI | B | L | Zone | Gloss |
| --- | :-: | :-: | :-: | :-: | --- | --- |
| Alignment | 2 | 5 | 5 | 2 | Delegate | The arrangement of elements along a common axis based on their edges, centers, or areas |
| Constraint | 3 | 5 | 5 | 3 | Delegate | Limiting the actions that can be performed to simplify use and prevent error |
| Feedback | 3 | 5 | 5 | 3 | Delegate | Information about status or performance used for confirmation, decision-making, and improv |
| Proximity | 2 | 5 | 5 | 2 | Delegate | The brain automatically assumes elements that are close together are related |
| Similarity | 2 | 5 | 5 | 2 | Delegate | The brain automatically assumes elements that look alike are related |
| Spacing & sizing scale (base 16, =>25% jumps) | 2 | 5 | 5 | 2 | Delegate | Non-linear scale; no two values closer than ~25%. |
| px/rem, never em, for the type scale | 2 | 5 | 5 | 1 | Delegate | em compounds on nesting and drops off the scale. |
| Type scale, hand-picked & non-linear | 2 | 5 | 5 | 2 | Delegate | Constrained set; round any modular fractions. |
| Line length 45-75 characters | 2 | 5 | 5 | 2 | Delegate | ~20-35em for readable measure. |
| Weight floor 400; two weights | 2 | 5 | 5 | 2 | Delegate | 400/500 body, 600/700 emphasis. |
| Contrast minimums (WCAG 4.5:1 / 3:1) | 2 | 5 | 5 | 3 | Delegate | Flip contrast when white-on-color goes too dark. |
| Accessibility | 3 | 4 | 5 | 3 | Delegate | Things should be designed to be usable, without modification, by as many people as possibl |
| Affordance | 3 | 4 | 5 | 3 | Delegate | The physical characteristics of a thing that influence its function and use |
| Color Theory | 3 | 4 | 5 | 2 | Delegate | A body of practical knowledge regarding the application and mixing of colors |
| Consistency | 3 | 4 | 5 | 3 | Delegate | Usability and learnability improve when similar things have similar meanings and functions |
| Forgiveness | 3 | 4 | 5 | 3 | Delegate | Designs should help people avoid errors and protect them from harm when they do occur |
| Legibility | 3 | 4 | 5 | 2 | Delegate | The visual clarity of text, generally based on size, typeface, contrast, line length, and  |
| Mapping | 3 | 4 | 5 | 3 | Delegate | A correspondence in layout and movement between controls and the things they control |
| Performance Load | 3 | 4 | 5 | 3 | Delegate | The greater the effort required to complete a task, the less likely the task will be compl |
| Progressive Disclosure | 3 | 4 | 5 | 3 | Delegate | A method of managing complexity in which only necessary or requested information is displa |
| Readability | 3 | 4 | 5 | 4 | Delegate | The ease with which text can be understood, based on the complexity of words and sentences |
| Recognition over Recall | 3 | 4 | 5 | 4 | Delegate | Memory for recognizing things is better than memory for recalling things |
| Signal-to-Noise Ratio | 3 | 4 | 5 | 4 | Delegate | The ratio of relevant to irrelevant information |
| Visibility | 3 | 4 | 5 | 3 | Delegate | Locate important controls, information, and items to be clearly visible |
| Define value systems; choose by elimination | 3 | 4 | 5 | 3 | Delegate | Pick from fixed sets; guess then compare neighbours. |

## Pure human moat (Human 5)

The standouts — candidates for their own page.

| Principle | H | AI | B | L | Zone | Gloss |
| --- | :-: | :-: | :-: | :-: | --- | --- |
| Gall’s Law | 5 | 2 | 4 | 5 | Own | All successful complex things begin as simple things and become complex through iteration |
| Ockham’s Razor | 5 | 2 | 4 | 5 | Own | Given a choice between functionally equivalent designs, the simplest design should be sele |
| Satisficing | 5 | 2 | 4 | 5 | Own | A problem-solving strategy that seeks a satisfactory versus optimal solution |
| Storytelling | 5 | 4 | 4 | 5 | Augment | Evoking imagery, emotions, and understanding through the presentation of events |
| Chesterton’s Fence | 5 | 2 | 3 | 5 | Own | Seek to understand why things exist the way they do before changing or removing them |
| Creator Blindness | 5 | 2 | 3 | 5 | Own | The inability of a creator to see fundamental flaws in their creation |
| First Principles | 5 | 2 | 3 | 5 | Own | Things we know for certain to be true and that are not derived from anything else |
| Framing | 5 | 4 | 3 | 5 | Augment | A method of presenting choices in specific ways to influence decision-making and judgment |
| Knowing-Doing Gap | 5 | 1 | 3 | 5 | Own | The divide that exists between knowing how to do something and actually doing it |
| Leverage Point | 5 | 2 | 3 | 5 | Own | A place within a system where small changes produce big effects |
| Maslow’s Hammer | 5 | 2 | 3 | 5 | Own | The tendency to approach problems based on the tools and expertise at hand |
| Nirvana Fallacy | 5 | 2 | 3 | 5 | Own | The tendency to disregard good solutions because they fall short of perfection |
| Process Eats Goal | 5 | 2 | 3 | 5 | Own | A situation in which people follow a process that undermines the greater goal |
| Sunk Cost Effect | 5 | 2 | 3 | 5 | Own | The tendency to keep investing in an endeavor because of past investments in that endeavor |
| Ackoff’s Law | 5 | 1 | 2 | 5 | Own | It is better to do the right things wrong than the wrong things right |
| Box’s Law | 5 | 2 | 2 | 5 | Own | All models are wrong, but some are useful |
| Causal Reductionism | 5 | 2 | 2 | 5 | Own | A tendency to fixate on one cause when solving problems, ignoring the reality of multiple  |
| Confirmation Bias | 5 | 2 | 2 | 5 | Own | A tendency to favor information that confirms pre-existing views |
| Dunning-Kruger Effect | 5 | 2 | 2 | 5 | Own | A tendency for unskilled people to overestimate their competence and performance |
| Perverse Incentive | 5 | 2 | 2 | 5 | Own | An incentive that unintentionally worsens the problem it seeks to solve |
| Selection Bias | 5 | 3 | 2 | 5 | Own | A bias in the way evidence is collected that distorts analysis and conclusions |
| Status Quo Bias | 5 | 2 | 2 | 5 | Own | A preference for things as they are, even when a change would improve things |
| Streetlight Effect | 5 | 2 | 2 | 5 | Own | A bias to search for things where it is easiest |
| Survivorship Bias | 5 | 2 | 2 | 5 | Own | The tendency to overemphasize things that survive a selection process |
| Back of the Dresser | 5 | 2 | 4 | 4 | Own | All parts of a design, visible and nonvisible, should be held to the same standard of qual |
| User-Centered vs. User-Driven Design | 5 | 2 | 4 | 4 | Own | A focus on understanding and meeting user needs versus simply implementing user requests |
| Rebuild interfaces from scratch (eye drill) | 5 | 1 | 4 | 4 | Own | Matching the original surfaces the invisible tricks. |
| Look for decisions you wouldn't have made | 5 | 1 | 4 | 4 | Own | Collect the unintuitive moves on designs you like. |
| Paradox of Great Ideas | 5 | 1 | 2 | 4 | Own | Great ideas are indistinguishable from crazy ideas when first introduced |
| Choose a personality | 5 | 2 | 4 | 3 | Own | Font, color, radius, tone cohere to one character. |
| Wabi-Sabi | 5 | 1 | 3 | 3 | Own | An aesthetic style that emphasizes naturalness, simplicity, and subtle imperfection |

## Universal Principles — by category


### Interaction & UI (48)

| Principle | H | AI | B | L | Zone | Gloss |
| --- | :-: | :-: | :-: | :-: | --- | --- |
| Desire Line | 4 | 4 | 4 | 4 | Augment | Traces of use or wear that indicate preferred methods of interaction |
| Error, Design | 4 | 4 | 4 | 4 | Augment | A design-caused action or inaction that yields an unintended or undesirable result |
| Error, Human | 4 | 4 | 4 | 4 | Augment | An action, or omission of action, that leads to an unintended result |
| Five Hat Racks | 4 | 4 | 4 | 4 | Augment | A metaphor representing the five ways information can be organized |
| Mental Model | 4 | 4 | 5 | 4 | Augment | A mental simulation of how things work |
| Control | 4 | 3 | 4 | 3 | Own | The level of user control should be related to the proficiency and experience of the user |
| Constraint | 3 | 5 | 5 | 3 | Delegate | Limiting the actions that can be performed to simplify use and prevent error |
| Feedback | 3 | 5 | 5 | 3 | Delegate | Information about status or performance used for confirmation, decision-making, and improv |
| Rule of Thirds | 3 | 5 | 4 | 2 | Delegate | A technique of composition in which a medium is divided into thirds |
| Accessibility | 3 | 4 | 5 | 3 | Delegate | Things should be designed to be usable, without modification, by as many people as possibl |
| Affordance | 3 | 4 | 5 | 3 | Delegate | The physical characteristics of a thing that influence its function and use |
| Closure | 3 | 4 | 4 | 2 | Delegate | The brain automatically completes recognizable forms when they are interrupted or incomple |
| Color Theory | 3 | 4 | 5 | 2 | Delegate | A body of practical knowledge regarding the application and mixing of colors |
| Comparison | 3 | 4 | 4 | 3 | Delegate | A method of highlighting relationships by depicting information in controlled ways |
| Consistency | 3 | 4 | 5 | 3 | Delegate | Usability and learnability improve when similar things have similar meanings and functions |
| Figure-Ground | 3 | 4 | 4 | 2 | Delegate | The brain automatically makes elements objects of focus or background |
| Forgiveness | 3 | 4 | 5 | 3 | Delegate | Designs should help people avoid errors and protect them from harm when they do occur |
| Iconic Representation | 3 | 4 | 4 | 2 | Delegate | The use of pictorial images to improve recognition and recall |
| Legibility | 3 | 4 | 5 | 2 | Delegate | The visual clarity of text, generally based on size, typeface, contrast, line length, and  |
| Mapping | 3 | 4 | 5 | 3 | Delegate | A correspondence in layout and movement between controls and the things they control |
| Performance Load | 3 | 4 | 5 | 3 | Delegate | The greater the effort required to complete a task, the less likely the task will be compl |
| Poka-Yoke | 3 | 4 | 4 | 3 | Delegate | A thing designed to prevent defects and errors |
| Progressive Disclosure | 3 | 4 | 5 | 3 | Delegate | A method of managing complexity in which only necessary or requested information is displa |
| Readability | 3 | 4 | 5 | 4 | Delegate | The ease with which text can be understood, based on the complexity of words and sentences |
| Recognition over Recall | 3 | 4 | 5 | 4 | Delegate | Memory for recognizing things is better than memory for recalling things |
| Signal-to-Noise Ratio | 3 | 4 | 5 | 4 | Delegate | The ratio of relevant to irrelevant information |
| Symmetry | 3 | 4 | 4 | 2 | Delegate | A property of similar or exact correspondence between the configuration of elements |
| Visibility | 3 | 4 | 5 | 3 | Delegate | Locate important controls, information, and items to be clearly visible |
| Entry Point | 3 | 3 | 4 | 2 | Low-lev | A point of physical or attentional entry that sets the emotional tone for subsequent inter |
| Five Tenets of Queuing | 3 | 3 | 2 | 2 | Low-lev | Five principles for improving the experience of waiting in lines |
| Learnability | 3 | 3 | 4 | 4 | Low-lev | The ease with which a new thing can be understood and productively used |
| Wayfinding | 3 | 3 | 4 | 3 | Low-lev | The process of using spatial and environmental information to navigate to a destination |
| Alignment | 2 | 5 | 5 | 2 | Delegate | The arrangement of elements along a common axis based on their edges, centers, or areas |
| Confirmation | 2 | 5 | 4 | 2 | Delegate | A technique for preventing errors by requiring verification before actions are performed |
| Highlighting | 2 | 5 | 4 | 2 | Delegate | A technique for focusing attention on an area of text or image |
| Proximity | 2 | 5 | 5 | 2 | Delegate | The brain automatically assumes elements that are close together are related |
| Similarity | 2 | 5 | 5 | 2 | Delegate | The brain automatically assumes elements that look alike are related |
| Top-Down Lighting Bias | 2 | 5 | 4 | 1 | Delegate | A tendency to interpret objects as being lit from a single light source from above |
| Apparent Motion | 2 | 4 | 3 | 1 | Delegate | The illusion of motion created when images are displayed in rapid succession |
| Common Fate | 2 | 4 | 3 | 1 | Delegate | The brain automatically assumes elements moving in similar ways are related |
| Fitts’ Law | 2 | 4 | 4 | 2 | Delegate | The time required to touch a target is a function of the target size and the distance to t |
| Good Continuation | 2 | 4 | 3 | 1 | Delegate | The brain automatically assumes elements in motion continue in their established direction |
| Gutenberg Diagram | 2 | 4 | 4 | 1 | Delegate | A diagram that describes the pattern followed by the eyes when looking at a page of inform |
| Hick’s Law | 2 | 4 | 4 | 2 | Delegate | Time to make a decision increases as the number of decision options increases |
| Orientation Sensitivity | 2 | 4 | 3 | 1 | Delegate | Certain line orientations are more quickly and easily processed and discriminated than oth |
| Perspective Cues | 2 | 4 | 3 | 1 | Delegate | Visual properties that create the perception of depth and three-dimensionality |
| Uniform Connectedness | 2 | 4 | 4 | 1 | Delegate | The brain automatically assumes elements connected by lines or boxes are related |
| WYSIWYG | 2 | 4 | 4 | 2 | Delegate | What a person sees in a design context should be what they get in a delivery context |

### Aesthetics & Form (26)

| Principle | H | AI | B | L | Zone | Gloss |
| --- | :-: | :-: | :-: | :-: | --- | --- |
| Wabi-Sabi | 5 | 1 | 3 | 3 | Own | An aesthetic style that emphasizes naturalness, simplicity, and subtle imperfection |
| Aesthetic-Usability Effect | 4 | 2 | 4 | 3 | Own | Aesthetic things are perceived to be easier to use than ugly things |
| Archetypes, Psychological | 4 | 2 | 2 | 3 | Own | Patterns that elicit a reflexive attentional or emotional response in humans |
| Progressive Subtraction | 4 | 2 | 4 | 4 | Own | Reducing the number of perceptible elements in a design over time |
| Propositional Density | 4 | 2 | 4 | 3 | Own | The number of independent meanings conveyed by a design |
| Horror Vacui | 3 | 4 | 4 | 3 | Delegate | A tendency to fill blank spaces with things rather than leaving spaces empty |
| Self-Similarity | 3 | 4 | 3 | 2 | Delegate | A property in which a thing is composed of similar patterns at multiple levels of scale |
| Anthropomorphism | 3 | 3 | 2 | 2 | Low-lev | The attribution of humanlike characteristics to nonhuman things |
| Color Effects | 3 | 3 | 3 | 2 | Low-lev | The cognitive and behavioral effects triggered by exposure to colors |
| Contour Bias | 3 | 3 | 3 | 2 | Low-lev | A tendency to favor things with contoured features over angular or rectilinear features |
| Gloss Bias | 3 | 3 | 3 | 2 | Low-lev | A preference for glossy versus dull objects People find glossy objects more interesting an |
| MAFA Effect | 3 | 3 | 1 | 1 | Low-lev | The average face of a local population is more attractive than any individual face |
| Mimicry | 3 | 3 | 3 | 3 | Low-lev | Copying properties from familiar things in order to realize benefits of those properties |
| Uncanny Valley | 3 | 3 | 3 | 3 | Low-lev | Abstract and realistic depictions of human faces are appealing but faces in between are no |
| Baby-Face Bias | 3 | 2 | 1 | 2 | Low-lev | A tendency to see things with baby-faced features as having the characteristics of babies |
| Biophilia Effect | 3 | 2 | 2 | 3 | Low-lev | A state of reduced stress and improved concentration resulting from nature views |
| Phonetic Symbolism | 3 | 2 | 3 | 2 | Low-lev | The meaning conveyed by the sounds of words |
| Prospect-Refuge | 3 | 2 | 2 | 2 | Low-lev | A preference for environments where people can see without being seen |
| Savanna Preference | 3 | 2 | 1 | 2 | Low-lev | A preference for savanna-like environments over other types of environments |
| Fibonacci Sequence | 2 | 5 | 3 | 2 | Delegate | A sequence of numbers that forms patterns commonly found in nature |
| Golden Ratio | 2 | 5 | 3 | 2 | Delegate | A ratio within the elements of a form, such as height to width, approximating 0 |
| Aposematism | 2 | 3 | 2 | 1 | Low-lev | The use of conspicuous markings to grab attention and signal danger |
| Magic Triangle | 2 | 3 | 2 | 1 | Low-lev | A triangular relationship between facial features that creates the illusion of sentience |
| Visuospatial Resonance | 2 | 3 | 1 | 1 | Low-lev | A phenomenon in which different images are visible at different distances |
| Defensible Space | 2 | 2 | 1 | 1 | Low-lev | An environment designed to signal ownership and deter crime |
| Waist-to-Hip Ratio | 2 | 2 | 1 | 1 | Low-lev | A preference for a particular ratio of waist size to hip size in men and women |

### Cognition & Perception (23)

| Principle | H | AI | B | L | Zone | Gloss |
| --- | :-: | :-: | :-: | :-: | --- | --- |
| Framing | 5 | 4 | 3 | 5 | Augment | A method of presenting choices in specific ways to influence decision-making and judgment |
| Causal Reductionism | 5 | 2 | 2 | 5 | Own | A tendency to fixate on one cause when solving problems, ignoring the reality of multiple  |
| Confirmation Bias | 5 | 2 | 2 | 5 | Own | A tendency to favor information that confirms pre-existing views |
| Dunning-Kruger Effect | 5 | 2 | 2 | 5 | Own | A tendency for unskilled people to overestimate their competence and performance |
| Status Quo Bias | 5 | 2 | 2 | 5 | Own | A preference for things as they are, even when a change would improve things |
| Anchoring | 4 | 4 | 3 | 4 | Augment | The subconscious influence of reference points on decision-making and judgment |
| Priming | 4 | 4 | 3 | 4 | Augment | Activating specific concepts in memory to influence subsequent thoughts and behaviors |
| Cognitive Dissonance | 4 | 2 | 2 | 4 | Own | A state of mental discomfort due to incompatible attitudes, thoughts, and beliefs |
| Expectation Effects | 4 | 2 | 3 | 4 | Own | Changes in perception or behavior resulting from personal expectations or expectations of  |
| Habituation | 4 | 2 | 3 | 4 | Own | Repeated exposure to a stimulus reduces the response to that stimulus |
| Inattentional Blindness | 4 | 2 | 3 | 4 | Own | A failure to perceive an unexpected stimulus presented in clear view |
| Peak-End Rule | 4 | 2 | 4 | 4 | Own | People remember and judge an experience based on its most intense moment and its end |
| Zeigarnik Effect | 4 | 2 | 3 | 4 | Own | Incomplete or interrupted tasks are more likely to hold attention and be remembered |
| Appeal to Nature | 4 | 1 | 1 | 4 | Own | The tendency to believe natural things are inherently better than human-created things |
| Normal Distribution | 3 | 4 | 2 | 4 | Delegate | A bell-shaped curve formed by plotting the frequency of a variable within a population |
| von Restorff Effect | 3 | 4 | 4 | 3 | Delegate | The most distinctive or isolated item in a set is the most remembered |
| Interference Effects | 3 | 3 | 3 | 3 | Low-lev | Things that trigger conflicting thought processes, reducing reaction and thinking efficien |
| Threat Detection | 3 | 3 | 2 | 2 | Low-lev | Threatening things are detected more efficiently than nonthreatening things |
| Freeze-Flight-Fight-Forfeit | 3 | 1 | 1 | 3 | Low-lev | The ordered, instinctive response to acute stress |
| Miller’s Law | 2 | 4 | 4 | 3 | Delegate | The number of objects an average person can hold in working memory is 7± 2 |
| Face Detection | 2 | 3 | 2 | 1 | Low-lev | The tendency to find or see human faces in objects and patterns |
| Number-Space Associations | 2 | 3 | 3 | 2 | Low-lev | The intuition that serial information is spatially organized by magnitude along an axis |
| Cathedral Effect | 2 | 2 | 1 | 2 | Low-lev | High ceilings promote abstract thinking |

### Learning & Communication (9)

| Principle | H | AI | B | L | Zone | Gloss |
| --- | :-: | :-: | :-: | :-: | --- | --- |
| Storytelling | 5 | 4 | 4 | 5 | Augment | Evoking imagery, emotions, and understanding through the presentation of events |
| Rosetta Stone | 4 | 4 | 4 | 4 | Augment | A strategy for communicating novel information using elements of common understanding |
| Stickiness | 4 | 4 | 3 | 4 | Augment | Properties of information that increase recognition, recall, and voluntary sharing |
| Depth of Processing | 4 | 2 | 2 | 5 | Own | Thinking hard about a thing improves the likelihood that it can be recalled |
| Flow | 4 | 2 | 3 | 5 | Own | A state of immersion so intense that awareness of the real world is lost |
| Inverted Pyramid | 3 | 4 | 4 | 4 | Delegate | The presentation of information from most important to least important |
| Serial Position Effects | 3 | 4 | 4 | 4 | Delegate | Things at the beginnings and ends of sequences are more memorable than things in the middl |
| Mnemonic Device | 3 | 3 | 2 | 5 | Low-lev | Techniques for making things more meaningful and memorable |
| Picture Superiority Effect | 3 | 3 | 3 | 4 | Low-lev | Pictures are remembered better than words |

### Strategy & Decision (40)

| Principle | H | AI | B | L | Zone | Gloss |
| --- | :-: | :-: | :-: | :-: | --- | --- |
| Selection Bias | 5 | 3 | 2 | 5 | Own | A bias in the way evidence is collected that distorts analysis and conclusions |
| Box’s Law | 5 | 2 | 2 | 5 | Own | All models are wrong, but some are useful |
| Chesterton’s Fence | 5 | 2 | 3 | 5 | Own | Seek to understand why things exist the way they do before changing or removing them |
| Creator Blindness | 5 | 2 | 3 | 5 | Own | The inability of a creator to see fundamental flaws in their creation |
| First Principles | 5 | 2 | 3 | 5 | Own | Things we know for certain to be true and that are not derived from anything else |
| Maslow’s Hammer | 5 | 2 | 3 | 5 | Own | The tendency to approach problems based on the tools and expertise at hand |
| Nirvana Fallacy | 5 | 2 | 3 | 5 | Own | The tendency to disregard good solutions because they fall short of perfection |
| Ockham’s Razor | 5 | 2 | 4 | 5 | Own | Given a choice between functionally equivalent designs, the simplest design should be sele |
| Process Eats Goal | 5 | 2 | 3 | 5 | Own | A situation in which people follow a process that undermines the greater goal |
| Satisficing | 5 | 2 | 4 | 5 | Own | A problem-solving strategy that seeks a satisfactory versus optimal solution |
| Streetlight Effect | 5 | 2 | 2 | 5 | Own | A bias to search for things where it is easiest |
| Sunk Cost Effect | 5 | 2 | 3 | 5 | Own | The tendency to keep investing in an endeavor because of past investments in that endeavor |
| Survivorship Bias | 5 | 2 | 2 | 5 | Own | The tendency to overemphasize things that survive a selection process |
| User-Centered vs. User-Driven Design | 5 | 2 | 4 | 4 | Own | A focus on understanding and meeting user needs versus simply implementing user requests |
| Ackoff’s Law | 5 | 1 | 2 | 5 | Own | It is better to do the right things wrong than the wrong things right |
| Knowing-Doing Gap | 5 | 1 | 3 | 5 | Own | The divide that exists between knowing how to do something and actually doing it |
| Paradox of Great Ideas | 5 | 1 | 2 | 4 | Own | Great ideas are indistinguishable from crazy ideas when first introduced |
| Cost-Benefit | 4 | 4 | 3 | 5 | Augment | Value is a function of the costs of acquisition and use versus the benefits provided |
| Kano Model | 4 | 4 | 3 | 3 | Augment | A model for understanding customer needs and then prioritizing design features accordingly |
| Minimum-Viable Product | 4 | 4 | 4 | 4 | Augment | A version of a product with just enough features to evaluate customer demand |
| Pareto Principle | 4 | 4 | 3 | 5 | Augment | A small percentage of variables in any large system is responsible for most of its behavio |
| Gates’ Rule of Automation | 4 | 3 | 3 | 5 | Own | Automation applied to an operation will magnify both its efficiencies and deficiencies |
| KISS | 4 | 3 | 4 | 5 | Own | Simple designs work better and are more reliable than complex designs |
| Feature Creep | 4 | 2 | 4 | 4 | Own | A continuous expansion or addition of new product features beyond the original scope |
| Form Follows Function | 4 | 2 | 4 | 4 | Own | Aesthetic considerations should be secondary to functional considerations |
| Hanlon’s Razor | 4 | 2 | 1 | 4 | Own | Never attribute to malice what can be adequately explained by incompetence |
| Icarus Matrix | 4 | 2 | 1 | 3 | Own | A 2 × 2 matrix representing the possible success- failure outcomes of a design iteration |
| Iron Triangle | 4 | 2 | 3 | 4 | Own | A model that proposes three constraints for all projects: time, cost, and scope |
| Levels of Invention | 4 | 2 | 1 | 3 | Own | A model that classifies inventions based on complexity, nonobviousness, and impact |
| MAYA | 4 | 2 | 4 | 4 | Own | A strategy for determining the most commercially viable aesthetic for a design |
| Not Invented Here | 4 | 2 | 3 | 4 | Own | A tendency to oppose ideas and innovations that originate outside of your social group |
| Paradox of Unanimity | 4 | 2 | 1 | 4 | Own | Extreme agreement in a diverse population is more likely the result of error than of conse |
| Performance vs. Preference | 4 | 2 | 3 | 4 | Own | Increasing performance does not necessarily increase desirability |
| Scaling Fallacy | 4 | 2 | 3 | 4 | Own | The assumption that designs that work at one scale will work at smaller or larger scales |
| Uncertainty Principle | 4 | 2 | 2 | 4 | Own | Measuring things can change them, often making the results invalid |
| Clarke’s Laws | 4 | 1 | 1 | 3 | Own | Three maxims that offer insights into the nature of innovation |
| Design by Committee | 4 | 1 | 2 | 3 | Own | A design process based on consensus building, group decision-making, and extensive iterati |
| Faith Follows Function | 4 | 1 | 2 | 3 | Own | Ideological and spiritual considerations should be secondary to functional considerations |
| Hierarchy of Needs | 3 | 3 | 4 | 3 | Low-lev | A hierarchy of user-centered goals that a design must satisfy to achieve optimal success |
| Product Life Cycle | 3 | 2 | 2 | 3 | Low-lev | The common stages of life for products |

### Process & Systems (30)

| Principle | H | AI | B | L | Zone | Gloss |
| --- | :-: | :-: | :-: | :-: | --- | --- |
| Back of the Dresser | 5 | 2 | 4 | 4 | Own | All parts of a design, visible and nonvisible, should be held to the same standard of qual |
| Gall’s Law | 5 | 2 | 4 | 5 | Own | All successful complex things begin as simple things and become complex through iteration |
| Leverage Point | 5 | 2 | 3 | 5 | Own | A place within a system where small changes produce big effects |
| Feedback Loop | 4 | 4 | 3 | 4 | Augment | A cycle in which output feeds back into a system as input, changing subsequent output |
| Iteration | 4 | 4 | 4 | 4 | Augment | Designing things in phases, each phase building on the last, until a desired result is ach |
| Prototyping | 4 | 4 | 4 | 4 | Augment | Building low-fidelity models to explore ideas and deeply understand problems |
| Root Cause | 4 | 4 | 3 | 5 | Augment | The key initiating cause in a sequence of events that leads to an event of interest |
| Brown M&M’s | 4 | 3 | 2 | 4 | Own | The use of covert, embedded tests to verify that quality standards have been met |
| Reverse Salient | 4 | 3 | 3 | 4 | Own | An element that limits the overall performance of the system of which it is part |
| Archetypes, System | 4 | 2 | 2 | 4 | Own | Universal structures and resulting patterns of behavior found across system types |
| Brooks’ Law | 4 | 2 | 2 | 4 | Own | For certain types of projects, adding people to speed things up inadvertently slows them d |
| Conway’s Law | 4 | 2 | 3 | 4 | Own | The structure of an organization is expressed in the design of the things it produces |
| Don’t Eat the Daisies | 4 | 2 | 3 | 4 | Own | The fallacy that exhaustive requirements and specification documents lead to better design |
| Flexibility Tradeoffs | 4 | 2 | 3 | 4 | Own | As the flexibility of a design increases, the performance of the design decreases |
| Premature Optimization | 4 | 2 | 4 | 4 | Own | Making elements of a design efficient before they are recognized as important or even need |
| Garbage In – Garbage Out | 3 | 4 | 3 | 4 | Delegate | The quality of output depends on the quality of input |
| Modularity | 3 | 4 | 4 | 4 | Delegate | Managing system complexity by dividing large systems into smaller, self-contained systems |
| Bus Factor | 3 | 3 | 2 | 3 | Low-lev | The number of team members who, if lost, would put a project in jeopardy |
| Factor of Safety | 3 | 3 | 2 | 3 | Low-lev | The design of a system beyond expected loads to offset unknowns and prevent failure |
| Maintainability | 3 | 3 | 4 | 3 | Low-lev | The ease with which a thing can be accessed, inspected, repaired, and serviced |
| No Single Point of Failure | 3 | 3 | 3 | 3 | Low-lev | The design of systems to be able to continue operating even when components fail |
| Redundancy | 3 | 3 | 3 | 3 | Low-lev | Using backup or fail-safe elements to maintain system performance in the event of failure |
| Swiss Cheese Model | 3 | 3 | 3 | 4 | Low-lev | A model describing how risks combine to cause accidents and other bad outcomes |
| Weakest Link | 3 | 3 | 2 | 3 | Low-lev | An element designed to fail in order to protect more important elements from harm |
| Convergence | 3 | 2 | 1 | 3 | Low-lev | A tendency for similar characteristics to evolve independently in similar environments |
| Testing Pyramid | 2 | 4 | 4 | 2 | Delegate | A multilayered framework to systematize testing and reduce defects |
| Abbe Principle | 2 | 3 | 1 | 1 | Low-lev | Measure things so that the measuring scale is aligned with the distance being measured |
| Development Cycle | 2 | 3 | 3 | 2 | Low-lev | The stages of product creation: requirements, design, development, and testing |
| Saint-Venant’s Principle | 2 | 3 | 1 | 1 | Low-lev | Local effects of loads on structures have negligible global effects |
| Structural Forms | 2 | 3 | 1 | 2 | Low-lev | There are three ways to create rigid things: solids, frames, and shells |

### Persuasion & Social (24)

| Principle | H | AI | B | L | Zone | Gloss |
| --- | :-: | :-: | :-: | :-: | --- | --- |
| Perverse Incentive | 5 | 2 | 2 | 5 | Own | An incentive that unintentionally worsens the problem it seeks to solve |
| Nudge | 4 | 4 | 4 | 4 | Augment | A method of influencing behavior without restricting options or changing incentives |
| Exposure Effect | 4 | 3 | 3 | 3 | Own | The more people are exposed to a thing, the more they like and trust it |
| Scarcity | 4 | 3 | 2 | 3 | Own | Things become more desirable when they are in short supply or occur infrequently |
| Social Proof | 4 | 3 | 3 | 3 | Own | When people don’t know how to act, think, or feel, they tend to copy others |
| Attractiveness Bias | 4 | 2 | 1 | 3 | Own | A tendency to view attractive people as intelligent, competent, moral, and sociable |
| Death Spiral | 4 | 2 | 1 | 3 | Own | A phenomenon in which a social organization persists in behaviors that lead to self-destru |
| Diffusion of Innovations | 4 | 2 | 2 | 3 | Own | A theory describing how new things gain acceptance in a population over time |
| Groupthink | 4 | 2 | 1 | 4 | Own | A decision-making phenomenon that occurs when group harmony is overprioritized |
| IKEA Effect | 4 | 2 | 2 | 4 | Own | The act of creating a thing increases the perceived value of that thing to the creator |
| Identifiable Victim Effect | 4 | 2 | 1 | 3 | Own | A single, identifiable victim elicits more helping behaviors than a group of anonymous vic |
| Reciprocity | 4 | 2 | 2 | 4 | Own | The tendency for people to give back to those who have given to them |
| Social Trap | 4 | 2 | 1 | 4 | Own | A tendency to pursue short-term gains that create long-term losses for the greater group |
| Supernormal Stimulus | 4 | 2 | 2 | 3 | Own | An exaggerated feature that elicits a stronger response than the real feature |
| Veblen Effect | 4 | 2 | 1 | 3 | Own | A tendency to find a product more desirable because it has a high price |
| Classical Conditioning | 3 | 3 | 2 | 2 | Low-lev | A method of influencing how a person viscerally responds to a thing |
| Crowd Intelligence | 3 | 3 | 1 | 3 | Low-lev | An emergent intelligence arising from the unwitting collaboration of many people |
| Face-ism Ratio | 3 | 3 | 2 | 1 | Low-lev | The ratio of face to body in an image that influences how the person is perceived |
| Gamification | 3 | 3 | 3 | 3 | Low-lev | Using gaming strategies in nongame contexts to enhance experience and modify behavior |
| Operant Conditioning | 3 | 3 | 2 | 3 | Low-lev | Using rewards and punishments to change the frequency and durability of a behavior |
| Shaping | 3 | 3 | 2 | 3 | Low-lev | Training a target behavior by reinforcing successive approximations of that behavior |
| Dunbar’s Number | 3 | 2 | 1 | 3 | Low-lev | The maximum number of relationships a person can comfortably maintain |
| Play Preferences | 3 | 2 | 1 | 2 | Low-lev | A tendency for male children and female children to like different kinds of play |
| Left-Digit Effect | 2 | 4 | 2 | 2 | Delegate | People give more weight to the left-most digits of prices in buying decisions |

## Refactoring UI — executable rules (50)

Mostly Interaction & UI; the production half of the design work.

| Principle | H | AI | B | L | Zone | Gloss |
| --- | :-: | :-: | :-: | :-: | --- | --- |
| Contrast minimums (WCAG 4.5:1 / 3:1) | 2 | 5 | 5 | 3 | Delegate | Flip contrast when white-on-color goes too dark. |
| Line length 45-75 characters | 2 | 5 | 5 | 2 | Delegate | ~20-35em for readable measure. |
| Spacing & sizing scale (base 16, =>25% jumps) | 2 | 5 | 5 | 2 | Delegate | Non-linear scale; no two values closer than ~25%. |
| Type scale, hand-picked & non-linear | 2 | 5 | 5 | 2 | Delegate | Constrained set; round any modular fractions. |
| Weight floor 400; two weights | 2 | 5 | 5 | 2 | Delegate | 400/500 body, 600/700 emphasis. |
| px/rem, never em, for the type scale | 2 | 5 | 5 | 1 | Delegate | em compounds on nesting and drops off the scale. |
| Author color in HSL | 2 | 5 | 4 | 2 | Delegate | Browsers take HSL, not HSB. |
| Baseline-align mixed font sizes | 2 | 5 | 4 | 1 | Delegate | Align on the baseline, never center. |
| Text alignment for readability | 2 | 5 | 4 | 2 | Delegate | Left for LTR; right-align numerals; hyphenate justified. |
| Tame user-uploaded images | 2 | 5 | 3 | 2 | Delegate | Fixed container, cover; inner shadow for bleed. |
| Avoid ambiguous spacing | 3 | 4 | 5 | 2 | Delegate | More space around a group than within it. |
| Button hierarchy; destructive treatment | 3 | 4 | 5 | 2 | Delegate | Primary solid, secondary outline, tertiary link. |
| Define shades up front (100-900) | 3 | 4 | 5 | 2 | Delegate | Fill from the edges; no runtime lighten/darken. |
| Define value systems; choose by elimination | 3 | 4 | 5 | 3 | Delegate | Pick from fixed sets; guess then compare neighbours. |
| Hierarchy via weight + color, not size alone | 3 | 4 | 5 | 2 | Delegate | 2-3 text colors, 2 weights. |
| Line-height is proportional | 3 | 4 | 5 | 2 | Delegate | Taller for small/narrow text, ~1 for headlines. |
| Never encode meaning in color alone | 3 | 4 | 5 | 3 | Delegate | Pair with icon/text; distinguish by contrast. |
| ~100ms feedback; guard double-fire | 3 | 4 | 5 | 3 | Delegate | Optimistic UI; debounce; disable-on-submit. |
| Don't fill the screen; use max-width | 3 | 4 | 4 | 2 | Delegate | Give elements only the space they need. |
| Elevation shadow system (~5 steps) | 3 | 4 | 4 | 2 | Delegate | Tight=raised, large/blurred=closer. |
| Fixed vs fluid widths | 3 | 4 | 4 | 2 | Delegate | Fixed when it shouldn't scale; flex the rest. |
| Keep saturation up at the extremes | 3 | 4 | 4 | 2 | Delegate | Raise saturation as lightness leaves 50%. |
| Letter-spacing: tighten headlines, widen caps | 3 | 4 | 4 | 2 | Delegate | Otherwise leave the designer's default. |
| Light comes from above (raised/inset) | 3 | 4 | 4 | 2 | Delegate | Lighter top edge + dark bottom shadow. |
| No grey text on colored backgrounds | 3 | 4 | 4 | 2 | Delegate | Hand-pick a same-hue color; never white+opacity. |
| Not every link needs a color | 3 | 4 | 4 | 2 | Delegate | Weight/darker color in link-dense UI. |
| Palette size (~10 colors x 5-10 shades) | 2 | 4 | 4 | 2 | Delegate | Greys 8-10; primaries & accents 5-10 each. |
| Separate visual from document hierarchy | 3 | 4 | 4 | 2 | Delegate | Pick the tag for meaning; style independently. |
| Shadow as interaction cue | 3 | 4 | 4 | 2 | Delegate | Press shrinks, drag adds shadow. |
| Everything has an intended size (images) | 3 | 4 | 3 | 2 | Delegate | Don't scale icons up or screenshots down. |
| Flat depth via color or solid shadow | 3 | 4 | 3 | 2 | Delegate | Lighter=raised, darker=inset. |
| Text-on-image contrast | 3 | 4 | 3 | 2 | Delegate | Overlay, lower contrast, colorize, or text-shadow glow. |
| Two-part shadows | 3 | 4 | 3 | 1 | Delegate | Large soft (direct) + tight dark (ambient). |
| Emphasize by de-emphasizing | 4 | 3 | 5 | 3 | Own | Soften competitors instead of pushing the focal harder. |
| Balance weight against contrast | 4 | 3 | 4 | 2 | Own | Heavy elements get lower contrast. |
| Empty states as first impressions | 4 | 3 | 4 | 3 | Own | Illustration + emphasized CTA; hide idle controls. |
| Font-picking heuristics | 4 | 3 | 4 | 3 | Own | Neutral sans / system stack; filter to 10+ styles. |
| Labels are a last resort | 4 | 3 | 4 | 2 | Own | Drop or fold into the value when format implies it. |
| Shift brightness by rotating hue (=<30 deg) | 4 | 3 | 4 | 2 | Own | Toward 60/180/300 to lighten. |
| Supercharge the defaults | 4 | 3 | 4 | 2 | Own | Icon bullets, accent borders, custom controls. |
| Use fewer borders | 4 | 3 | 4 | 2 | Own | Prefer shadow, second bg color, or spacing. |
| Greys carry temperature | 4 | 3 | 3 | 2 | Own | Tint warm or cool, consistently across shades. |
| Overlap elements to build layers | 4 | 3 | 3 | 2 | Own | Invisible border to stop image clash. |
| Choose a personality | 5 | 2 | 4 | 3 | Own | Font, color, radius, tone cohere to one character. |
| Design in grayscale first | 4 | 2 | 4 | 2 | Own | Force spacing/contrast/size to carry hierarchy. |
| Design the smallest shippable version | 4 | 2 | 4 | 4 | Own | Work in cycles; don't imply unbuilt functionality. |
| Start with a feature, not a layout | 4 | 2 | 4 | 4 | Own | Frame the real problem before the shell. |
| Start with too much whitespace | 4 | 2 | 4 | 2 | Own | Default generous, then subtract. |
| Look for decisions you wouldn't have made | 5 | 1 | 4 | 4 | Own | Collect the unintuitive moves on designs you like. |
| Rebuild interfaces from scratch (eye drill) | 5 | 1 | 4 | 4 | Own | Matching the original surfaces the invisible tricks. |

## Sources

- Lidwell, W., Holden, K. & Butler, J. *Universal Principles of Design*, 3rd ed. (2023) — `raw/sources/design/Universal Principles of Design.pdf`.
- Wathan, A. & Schoger, S. *Refactoring UI* — `raw/sources/design/Refactoring UI.pdf`.

## Related

- [[wiki/Concepts/Human vs AI Capability Lens|Human vs AI Capability Lens]] — the scoring model.
- [[wiki/Design/Design Two-Track Extraction|Design Two-Track Extraction]] — the agent/human split.
- [[wiki/Design/Agent Track — Executable UI Technique Catalog|Agent Track]] · [[wiki/Design/Human Track — Taste & Judgment Catalog|Human Track]]
- [[wiki/Design/Design Expansion — Reading & Resources|Design Expansion — Reading & Resources]]
