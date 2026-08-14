---
title: "Design of Everyday Things"
type: book
status: developing
created: 2026-05-16
updated: 2026-08-14
written-by: grok
model: grok
source-count: 8
tags:
  - design
  - affordances
  - signifiers
  - user-experience
  - human-centered-design
  - don-norman
---

# Design of Everyday Things

A capable person stuck on a door, a stove, or a thermostat has met a design failure. The object was supposed to explain what can be done, where, and what state it is in. A small set of principles, grounded in how people perceive and act, is what would have made the next move obvious, and those principles outlast the particular technology they sit on.

## What makes an object explain itself

Two properties decide the first contact. **Discoverability** is whether the possible actions are findable, and where and how they are done. **Understanding** is whether the person can tell what the thing is for, what the controls do, and what state it is in. Discoverability is built from affordances, signifiers, constraints, mappings, and feedback. Understanding rests on the conceptual model. A simple object that still needs an added instruction has already failed. When a sign has to be taped to a door, the door did not do its job.

An **affordance** is a relationship between the object's properties and what a particular kind of user can do. A chair offers sitting to someone of about the right size. It offers nothing of the kind to a mouse, and it does not stop offering sitting just because nobody has noticed the chair. The word was overused for a generation to mean "visible control." This edition repaired that. The repair is a second word.

A **signifier** is the visible or audible clue that shows the place and the manner of the action. A flat plate says push. A slot says insert. An underline says this text is a link. What can be done is the affordance. Where to do it is the signifier. Both are needed. For a designer, signifiers do the heavier work, because an unused possibility that nobody can see is not a usable action.

Weak: a glass door with no hardware and a printed "PUSH" beside it. Strong: a plate that *is* the instruction.

**Mapping** is how controls line up with what they change. A *natural mapping* puts that line-up into physical space so nothing has to be memorized. Stove knobs laid out like the burners. A seat control shaped like the seat, so the part you press is the part that moves. Light switches arranged like the lights in the room. When the layout matches the thing, labels become optional. When the layout is arbitrary, the person will get it wrong on the next cold start.

**Feedback** is immediate, informative confirmation of the result and of the new state. Speed matters: a tenth of a second of lag is already enough to unsettle. Poor feedback can be worse than none: when every alarm screams at once, operators learn to silence all of them, and the channel that was supposed to help becomes a reason to stop listening.

A **conceptual model** is a short story about how the thing works. It can be incomplete or even wrong, if it is useful. The desktop's files and folders are that kind of story. Two dials on a fridge that pretend to own one compartment each turn a simple job into an impossible one, because the story the panel tells is false. The designer is not in the room. Everything the person can see, hear, and touch has to carry the designer's model — that is the **system image**. If that image is wrong, the user's model will be wrong, and no amount of later explanation will arrive in time.

## The loop and the two gulfs

Every use is a loop of seven stages. On the way out: form a goal, plan, specify the action, perform it. On the way back: perceive the state, interpret it, compare it to the goal.

1. Goal — what do I want.
2. Plan — what sequence would get it.
3. Specify — which action, exactly.
4. Perform — do that action.
5. Perceive — what changed.
6. Interpret — what does that change mean.
7. Compare — was that the goal.

Execution runs down one side of the loop. Evaluation runs back up the other. The design is there to answer the questions the loop keeps asking: what do I want, what can I do, how do I do it, did it work.

The **Gulf of Execution** is the distance between the intention and the actions the system actually allows. Signifiers, constraints, mappings, and a conceptual model are feed-forward across that gulf. The **Gulf of Evaluation** is the distance between the system's new state and the person's ability to tell what happened. Feedback and the same conceptual model bridge that one.

Take any stuck flow through the seven stages and the break shows up. "I cannot find how" is an execution problem. "I did something and cannot tell what" is an evaluation problem. They take different fixes. Treating both as "the user is confused" is the reflex this page is for.

## Make remembering unnecessary

Exact action does not need exact memory, because some of the information lives in the room. The best memory help is to remove the need to remember.

People store only partial descriptions — enough to discriminate among the choices actually present, not enough to reconstruct the object from nothing. Working memory holds roughly three to five items and is wiped by a single interruption. That is the number behind [[wiki/Concepts/Cognitive Load & What Mental Effort Is Trying to Cue|Cognitive Load]], not the older seven.

Knowledge in the world is easy to use and requires the cue to be sitting there. Knowledge in the head is fast and portable, costs learning, and is fragile under load. Good design tilts everyday action toward the world, and leaves fast paths for people who already know. [[wiki/Minimalism/Environment Design|Environment Design]] is that tilt applied to rooms: put the cue where the action happens.

**The most effective memory aid is an object that does not need one.**

## Constraints, then blame

Four classes of constraint, stacked, do the remembering.

- **Physical** — a plug that only fits one way.
- **Cultural** — conventions a group already shares.
- **Semantic** — a windshield belongs at the front of a vehicle, because that is what a windshield is for.
- **Logical** — the leftover part goes in the leftover hole.

A brick-toy motorcycle that uses all four lets the parts themselves be the guide. One part can do several jobs: scissor holes are the possible action, the clue, and the limit at the same time.

**Forcing functions** are those limits used for safety. **Interlocks** refuse the next step until the previous one is done — the card comes out before the cash; the dialog asks whether to save. **Lock-ins** refuse to end the activity prematurely. **Lockouts** refuse entry to a place that would be unsafe — a gate at the ground floor of a stairwell so a fire escape does not dump you in the basement. A safety lock that people hate enough to disable will be disabled, and then you have no lock and a practiced workaround.

When a famous nuclear plant came close to disaster, the operators were blamed. The inquiry found a control room that almost required the mistakes. What gets called human error is, in that shape, a design result — a system error. Root-cause analysis that stops at the person has not finished; the useful version keeps asking why until the design, the procedure, or the missing signal is on the table.

Accidents happen when several holes line up. The **Swiss-cheese model** treats that as the unit of design. Three levers: add layers, shrink the holes, and alert when several holes have already aligned.

The everyday version of the same blame is quieter. People who struggle assume they are at fault, hide the struggle, and the defect reads as personal. If you have difficulties, it is not your fault. It is bad design. That is the opening turn, at the scale of shame.

**Slips** are the move going wrong while the goal is right. Skilled people do this more, because they have gone automatic. Four kinds matter for design:

- **Capture** — a frequent action seizes a similar, less frequent one.
- **Description-similarity** — two controls look alike, and the wrong one is used.
- **Mode errors** — the same action means something else in this state. Mode error is really design error.
- **Memory-lapse** — an interrupted step is never resumed.

The cures live in the object: differentiate similar controls, make modes loud or eliminate them, let an interrupted step be picked up. **Mistakes** are the other family — wrong goal or wrong plan, from a faulty model or the wrong rule. Their cures are better state feedback, clearer models, and guidance toward a sensible plan.

Assume error will happen. Add constraints. Make actions reversible. **Undo is the single most powerful tool.** Make the irreversible hard. Check absurd input for sensibility and treat input as an approximation. Never make people start over.

People process at three levels: **visceral**, **behavioral**, **reflective**. One bad moment at the end can poison the reflective verdict on the whole encounter. Attractive things work better in a narrow, real sense: positive affect makes people more tolerant of minor trouble and more able to invent a way around it. Aesthetics and usability are not a trade. Prize-winning doors with no hardware still trapped a friend, because beauty that removes the signifier has not made the object work.

## Process, limits, how to use

The process is two diamonds. First discover and define the *right* problem. Then develop and deliver a solution. Finding the actual problem beats solving the wrong one cleanly. Written requirements invented at a desk are almost always wrong. They come from watching people in the place the work actually happens.

Iterate: observe, ideate, prototype, test. As few as five people per round, with a redesign between rounds, is enough to see the repeating failures. That number is a diminishing-returns argument for *iterative* tests, not a sample-size law. Most cases are special. There is no average person. Flexible beats optimized-for-the-mean.

**Activity-centered design** builds the conceptual model on the whole activity, not on a feature list. Design for the activity and the result will be usable by the people who do that activity. A music player won its generation by supporting three verbs — acquire, organize, listen — not by adding another button.

**Featuritis** (creeping featurism) is what happens instead. Features get added and never removed. Matching a competitor converges products toward sameness. A brick-toy set that was fifteen pieces becomes twenty-nine.

An older, worse layout that everyone already knows will beat a better layout that has to be relearned. A standard typewriter arrangement stays in place over a rearranged one because the cost of switching exceeds the gain. That is lock-in. It does not need a speed contest to be true. Standardization locks in whatever was standardized. It is the fundamental principle of desperation — a fallback when no better solution is reachable, and valuable because people learn the pattern once.

Innovation is mostly incremental hill-climbing. Radical leaps are rare, usually fail, and rarely come from asking users, who cannot request what does not yet exist.

The vocabulary itself needed repairing. After two decades of screen work, "affordance" had been stretched to mean any visible control, which is why "signifier" had to be introduced. The principles are sharpest on physical objects. On a screen, the same words still work, and they are easier to fake.

Friction is sometimes the point. Security, games, and deliberate skill-building are granted exceptions: the difficulty is the product. Watching people is slow, expensive, and a weak way to invent something nobody has seen. The model also underdetermines aesthetics and business. It will not tell you what to charge, or which of two beautiful objects to ship.

How to use the page, as an operator:

- Audit a stuck object against the two first-contact questions and the seven stages.
- Read the difficulty as design data, not as a report on the person.
- Check the signifier, the mapping, and the feedback before writing a help article.
- Reach for constraints and undo before you reach for instructions and confirmations.

Technologies change. The principles of interaction do not. A new device can still fail a capable person, and the object still failed to explain the next move.

## Open questions

Whether these principles later earn seven owner pages of their own.

## Related

- [[wiki/Design/Design, Condensed|Design, Condensed]] — this book's doctrine compressed to one rule per line.
- [[wiki/Design/Front-End Web Design|Front-End Web Design]] — these principles mapped onto web UI.
- [[wiki/Concepts/Cognitive Load & What Mental Effort Is Trying to Cue|Cognitive Load]] — working-memory limits behind knowledge-in-the-world.
- [[wiki/Minimalism/Environment Design|Environment Design]] — put the cue in the world, applied to rooms.
- [[wiki/Concepts/The Shortcut Problem|The Shortcut Problem]] — visible activity that bypasses intended cognition, a signifier with nothing behind it.
- [[wiki/Red Team/Applied Critical Thinking - Testing Frames|Applied Critical Thinking]] — re-examining assumptions baked into an interface.

## Sources

- Don Norman, *The Design of Everyday Things*, revised and expanded edition, Basic Books, 2013. The book is the source of the principles, the worked objects, and the turn.
- James J. Gibson, *The Ecological Approach to Visual Perception*, 1979. Affordance as a relationship between object and agent.
- Edwin Hutchins, James Hollan, and Don Norman, "Direct Manipulation Interfaces," 1985. The two gulfs.
- James Reason, *Human Error*, 1990. Swiss-cheese model of accidents.
- Jakob Nielsen, "Why You Only Need to Test with 5 Users," Nielsen Norman Group, 2000. A diminishing-returns argument for iterative tests, not a sample-size law.
- Stuart Card, Thomas Moran, and Allen Newell, *The Psychology of Human-Computer Interaction*, 1983; the 100 ms feedback threshold as an HCI convention.
- Noam Tractinsky, Adi Katz, and D. Ikar, "What is beautiful is usable," *Interacting with Computers*, 2000. Aesthetics and judged usability.
- S. J. Liebowitz and Stephen Margolis, "The Fable of the Keys," *Journal of Law and Economics*, 1990. Contests the speed claim often attached to a rearranged typewriter layout; lock-in by switching cost does not depend on that figure.
- A vault design-extraction restates handle-versus-plate and the self-blame reflex. The book remains the source.
