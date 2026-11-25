---
title: "Design, Condensed"
type: concept
status: stable
description: "When a capable person fails at an everyday thing, the design failed. Put needed knowledge in the world, make errors reversible, treat defaults and environment as choice architecture, use color for function before decoration, and judge objects by what can be removed."
created: 2026-06-30
updated: 2026-11-21
source-count: 8
tags:
  - design
  - human-centered-design
  - affordances
  - signifiers
  - condensed
---

# Design, Condensed

When a capable person cannot work a door, a stove, or a screen control, the object's design has failed, not the person. Good design goes unnoticed because it matches how people perceive and act. Bad design surfaces as struggle, and the user often blames themselves. Two questions decide quality for any object or interface: can someone discover what actions are possible, and can they understand what those actions mean and what state the thing is in? The answers come from signifiers, mappings, feedback, constraints, and a conceptual model that the visible system image must carry without the designer present. Put what people need to know into the world instead of into memory. Assume errors, make them reversible, and read recurrence as a design defect. The same discipline applies off-screen: defaults and friction shape behavior before persuasion begins, color carries state before decoration, and the things a person keeps are part of the designed environment. Good design is found by asking what can be taken away.

## Blame the design, not the user

If you have difficulties with an everyday object, the cause is bad design. Treat every struggle as information about where the design can improve. A capable user who fails is evidence of a fault in the design, not a defect in the user. Good quality shows up as a lack of friction, which makes successes harder to notice than failures. Usability and aesthetics are not traded against each other by default: cues that help people act can be integrated into how a thing looks. Removing signifiers for a cleaner appearance is the same failure as a prize-winning door with no visible hardware. Beauty that hides the next move has not made the object work.

## Discoverability and understanding

An affordance is a relationship between an object's properties and what a particular kind of user can do with it. It exists whether or not anyone perceives it. A signifier is the perceptible cue that shows where and how to act. For designers, the signifier does most of the work, because an action that is possible but not visible will not be taken. A push plate on a door is a signifier. A taped-on "PUSH" sign is a repair for a door that already failed.

Mapping is how controls line up with the effects they produce. Natural mapping puts that relationship into physical or spatial layout (stove knobs in the same pattern as burners, seat controls shaped like the seat), so little has to be memorized. When layout is arbitrary, people will get it wrong after a break.

Feedback confirms what an action did and what the new state is. It should be immediate, informative, prioritized, and unobtrusive. Delays on the order of a tenth of a second are enough to make someone doubt whether an action registered. Poor feedback, or too much at once, can be worse than none.

The person holds a conceptual model of how the thing works. The designer is not there at use time, so the system image (everything the user can see, hear, and touch) must communicate that model. A wrong or incomplete model makes even simple adjustments impossible, as when two fridge dials imply independent compartments that do not exist.

On screens there are no physical affordances, only perceived ones. Every cue must be placed on purpose. A control that needs a tooltip to be understood has already failed its signifier. The tooltip is the same kind of repair as a hand-lettered sign on a bad door. See [[wiki/Design/Front-End Web Design|Front-End Web Design]] for how this maps onto web UI.

## Seven stages and two gulfs

Every use loops through seven stages: goal, plan, specify, perform, perceive, interpret, compare. The first four are execution. The last three are evaluation. "I cannot find how" is an execution problem. "I did something and cannot tell what happened" is an evaluation problem. Calling both "confusion" hides which fix is needed.

The Gulf of Execution is the gap between intention and the actions the system allows. Cross it with feedforward: signifiers, constraints, mappings, defaults, and a clear model. The Gulf of Evaluation is the gap between the system's new state and the user's ability to read it. Cross it with feedback, visible status, and results compared against the goal. Walk any stuck task through the seven stages and the breaking stage becomes visible.

## Knowledge in the world

Recognition is easier than recall. Good design shows options instead of demanding memory. Working memory holds roughly three to five items and can be cleared by a single interruption (see [[wiki/Concepts/Cognitive Load & What Mental Effort Is Trying to Cue|Cognitive Load]]). Break long values into chunks, split long flows into shorter steps, and never let needed information vanish at the moment it is needed: codes, half-filled forms, and results should survive navigation and failure.

Putting the cue in the environment is the same method in rooms and on devices. [[wiki/Minimalism/Minimalism as Systems Design|Minimalism as Systems Design]] applies the rule to physical space: arrange so the right action is the default.

## Constraints and forcing functions

Four kinds of constraint (physical, cultural, semantic, and logical) narrow possible actions toward the correct one. Combined well enough, they remove the need for instructions. Forcing functions use structure for safety: interlocks enforce order, lock-ins prevent premature exit, lockouts block unsafe entry. If a safeguard annoys people enough, they will disable it, so limit friction to the one risky step. When no better solution exists, standardize so the pattern is learned once and reused everywhere.

## Error is bad design

What gets labeled human error is often a system error. Root cause analysis that stops at the person is unfinished. Keep asking why until you reach the design, the procedure, or the missing signal. The Swiss-cheese model treats accidents as several defenses failing at once: add layers, shrink holes in each layer, and alert when multiple holes line up.

Slips are right goals with wrong execution (capture by a habitual action, confusing similar controls, opaque modes, memory lapses after interruption). Fixes live in the object: differentiate similar controls, make modes obvious or remove them, let interrupted steps resume. Mistakes are wrong goals or plans from faulty models. Fix them with clearer state, better feedback, and guidance toward sensible plans.

Assume error. Add constraints, make actions reversible (undo is the strongest tool) and never make people start over for a recoverable mistake. Sensibility checks on absurd input treat what was typed as an approximation, not gospel. The same discipline of getting the work right before speeding it up applies to design and to task work. See the accuracy-before-speed section of [[wiki/Dimensions/Self-Regulation|Self-Regulation]].

## Beyond bare usability

People process experience at visceral, behavioral, and reflective levels. One bad moment at the end can poison the reflective judgment of an otherwise good product. Attractive things work better in one narrow, real sense: positive affect makes people more tolerant of minor trouble and more creative when workarounds are needed.

## Process and the long term

Find the right problem before solving the wrong one well (the double diamond: diverge and converge twice, first on the problem, then on the solution). Requirements written at a desk are almost always wrong. Watch people where the work happens, prototype, and test with small rounds, redesigning between them. Most cases are special cases, and there is no average person. Design for the activity, not a feature list, and prefer flexibility over optimization for a fictional average.

Featuritis adds capabilities and rarely removes them. Matching competitors feature for feature converges products toward sameness. An older, worse layout everyone already knows can beat a better layout that must be relearned (lock-in by switching cost, not necessarily by inherent superiority). Standardization is the fallback when no better shared pattern exists: people learn once. The underlying psychology of interaction changes slowly, and devices change fast, so these principles outlast particular technologies.


## Choice architecture

The default is among the most powerful decisions a designer makes, because most people keep it. Friction steers behavior: making the good action slightly easier and the harmful action slightly harder changes what people do without removing choice. The same levers aimed at the user without transparency are dark patterns. Salience must be allocated on purpose. For most users, hiding an option is close to removing it. A nudge that would be rejected once explained is manipulation dressed as design. The test is whether the affected person would still accept the architecture after it is described.

## Color

Use color for function before decoration: state, grouping, and hierarchy come first. Contrast has to be high enough to read, because low-contrast interfaces fail the people with the least margin. Do not rely on color alone for meaning (roughly one in twelve men has difficulty distinguishing red and green), so pair color with shape, position, or label. Few hues with more shades look intentional. Many hues at equal weight look noisy. A stable 60-30-10 split is a workable starting ratio. Once a color means danger, warning, or success on one screen, keep that meaning consistent everywhere.

## Owning things is design

Every object kept costs attention, space, and maintenance. A room is an interface, and clutter is featuritis at home scale. Discarding follows rules, not mood: kept for someday, guilt, duplication, or a year without use usually means the reason to keep is not use. Possessions signal identity, so choosing what remains is designing what you express. Before buying, apply designer standards (one clear job, honest materials, signifiers intact, repairable, still wanted after novelty fades) and the discard rules above.

## Finding good design

Focus is saying no repeatedly so the product stays coherent. Say no a thousand times for every yes. The work is deciding what the product will not do, and featuritis is what happens when the people making a product keep saying yes. Simplicity is complexity worked through, not features left out. Making something simple is hard work that the designer does so that the user does not have to. A thing made simple by leaving parts out is only missing a feature. Design is how it works. Appearance is the last part of a design and does not define it, and a beautiful thing that works badly is bad design with a good-looking surface. Good design is useful, understandable, honest, long-lasting, and unobtrusive, and as little design as possible: ask what could be removed without losing function. Taste trains like any skill: study objects that are still in use after decades, name the things those objects do not do, and ask the removal question until you ask it automatically. That is the design version of comparing yourself to standards instead of to a small local group, which is the comparison stance in [[wiki/Dimensions/Mindset|Mindset]].

## When difficulty is on purpose

Making actions discoverable and making them deliberately hard oppose each other. Security, games, and skill-building sometimes need friction or hidden affordances: a lock that stays closed to the wrong person, a puzzle that stays a puzzle, or a drill that has to be practiced. That is justified only when the difficulty serves the user, and even then there must be a discoverable way in. [[wiki/Design/Front-End Web Design|Front-End Web Design]] covers tradeoffs on surfaces. A signifier with no real function behind it is the design analogue of [[wiki/Concepts/The Shortcut Problem|The Shortcut Problem]]: visible activity that skips the cognition the interface was meant to support.

## Related pages

- [[wiki/Design/Front-End Web Design|Front-End Web Design]] (Norman's principles applied to web UI and agent-assisted screen work.)
- [[wiki/Concepts/Cognitive Load & What Mental Effort Is Trying to Cue|Cognitive Load]] (working-memory limits behind knowledge-in-the-world.)
- [[wiki/Minimalism/Minimalism as Systems Design|Minimalism as Systems Design]] (cues and defaults in physical space, and the ownership cost of what is kept.)
- [[wiki/Minimalism/Minimalism, Condensed|Minimalism, Condensed]] (overlapping doctrine from the cost-of-ownership side.)

## Sources

- Don Norman, *The Design of Everyday Things*, revised and expanded edition, Basic Books, 2013.
- James J. Gibson, *The Ecological Approach to Visual Perception*, 1979.
- Edwin Hutchins, James Hollan, and Don Norman, "Direct Manipulation Interfaces," 1985.
- James Reason, *Human Error*, 1990.
- Jakob Nielsen, "Why You Only Need to Test with 5 Users," Nielsen Norman Group, 2000.
- Stuart Card, Thomas Moran, and Allen Newell, *The Psychology of Human-Computer Interaction*, 1983.
- Noam Tractinsky, Adi Katz, and D. Ikar, "What is beautiful is usable," *Interacting with Computers*, 2000.
- Richard Thaler and Cass Sunstein, *Nudge*, 2008.
- Fumio Sasaki, *Goodbye, Things*, 2017.
- Dieter Rams, ten principles of good design.
- Steve Jobs, via Tim Cook interview. The focus, simplicity, and "design is how it works" lines in Finding good design.
- S. J. Liebowitz and Stephen Margolis, "The Fable of the Keys," *Journal of Law and Economics*, 1990.