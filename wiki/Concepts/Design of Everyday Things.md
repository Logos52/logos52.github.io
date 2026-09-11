---
title: "Design of Everyday Things"
type: book
status: developing
created: 2026-05-16
updated: 2026-09-11
method: plain-rewrite-2026-09-11
prose-model: fable
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

When a capable person cannot work a door, a stove, or a thermostat, the object's design has failed. The object was supposed to show what can be done, where to do it, and what state it is in. A small set of principles, based on how people perceive and act, would have made the next move obvious. Those principles stay the same when the technology changes.

The person who struggles with the object is not at fault. If you have difficulties with an everyday object, the cause is bad design.

## Core takeaways

- An object has to show what can be done, where to do it, and what state it is in. An object that needs an added instruction to do this has already failed.
- An affordance is what an object lets a particular kind of user do, and a signifier is the visible clue to where and how. For a designer, the signifier does most of the work.
- Every use passes through seven stages, four to carry out an action and three to check its result. A person who cannot find how to act and a person who cannot tell what happened have different problems with different fixes.
- Working memory holds about three to five items and is emptied by one interruption. Good design puts the needed information in the world, so nothing has to be remembered.
- What gets called human error is often a result of the design. Assume errors will happen, add constraints, make actions reversible, and give people undo.
- Requirements written at a desk are almost always wrong. Watch people where the work happens, and test with as few as five people per round, redesigning between rounds.

## What an object has to show on first contact

Two properties decide whether a person can use an object the first time. **Discoverability** is whether the possible actions can be found, and where and how they are done. **Understanding** is whether the person can tell what the thing is for, what the controls do, and what state it is in. Discoverability is built from affordances, signifiers, constraints, mappings, and feedback. Understanding rests on the conceptual model. A simple object that still needs an added instruction has already failed. If a door needs a sign taped to it, the door's design did not work.

An **affordance** is a relationship between the object's properties and what a particular kind of user can do with it. A chair offers sitting to a person of about the right size. It offers nothing of the kind to a mouse. The chair keeps offering sitting whether or not anyone has noticed it. For about twenty years, designers used "affordance" to mean any visible control. A second term, the signifier, was introduced to fix this.

A **signifier** is the visible or audible clue that shows where the action is done and how. A flat plate on a door shows that the door is pushed. A slot shows that something is inserted. An underline shows that text is a link. The affordance is what can be done. The signifier is where and how to do it. A usable object needs both. For a designer, the signifier does most of the work, because an action that is possible but not visible will not be taken.

A glass door with no hardware and a printed "PUSH" sign beside it is weak design. A push plate on the door is strong design, because the plate itself shows the action.

## Mapping and feedback

**Mapping** is how the controls line up with the things they change. A **natural mapping** puts that line-up into physical space, so nothing has to be memorized. Stove knobs laid out in the same pattern as the burners. A seat control shaped like the seat, so the part you press is the part that moves. Light switches arranged in the same pattern as the lights in the room. When the layout of the controls matches the layout of the things, labels become optional. When the layout is arbitrary, the person will get it wrong the next time they use the object after a break.

**Feedback** is immediate, informative confirmation of what the action did and of the new state. Speed matters: a delay of a tenth of a second is enough to make the person unsure whether the action worked. Poor feedback can be worse than none. When every alarm sounds at once, operators learn to silence all of them, and the alarms stop carrying information.

## The conceptual model and the system image

A **conceptual model** is a simple explanation of how the thing works, held in the person's mind. It can be incomplete or even wrong, as long as it is useful. The files and folders on a computer desktop are a conceptual model of this kind. A fridge with two dials, each labeled as if it controls one compartment, gives a false model when the dials do not work that way. Because the model is false, a simple adjustment becomes impossible.

The designer is not present when the person uses the object. The **system image** is everything the person can see, hear, and touch. The system image has to carry the designer's model. If the system image is wrong, the person's model will be wrong, and any later explanation comes too late.

## The seven stages of an action and the two gaps

Every use of an object is a loop of seven stages. Four stages carry out the action: form a goal, plan, specify the action, perform it. Three stages check the result: perceive the new state, interpret it, compare it with the goal.

1. Goal: what do I want.
2. Plan: what sequence would get it.
3. Specify: which action, exactly.
4. Perform: do that action.
5. Perceive: what changed.
6. Interpret: what does that change mean.
7. Compare: was that the goal.

Stages one to four are execution. Stages five to seven are evaluation. The design has to answer the questions the person asks at each stage: what do I want, what can I do, how do I do it, did it work.

The **Gulf of Execution** is the gap between what the person intends and the actions the system actually allows. Signifiers, constraints, mappings, and a conceptual model help the person across that gap before they act. The **Gulf of Evaluation** is the gap between the system's new state and the person's ability to tell what happened. Feedback and the same conceptual model help the person across that gap after they act.

Walk any stuck task through the seven stages and the stage where it breaks becomes visible. "I cannot find how" is an execution problem. "I did something and cannot tell what" is an evaluation problem. The two take different fixes. Calling both "the user is confused" hides which fix is needed.

## Knowledge in the world and knowledge in the head

Precise action does not need precise memory, because part of the needed information is in the surroundings. The best memory aid is to remove the need to remember.

People store only partial descriptions of things: enough to tell the present choices apart, and not enough to reconstruct the object from nothing. Working memory holds roughly three to five items and is emptied by a single interruption. That is the number behind [[wiki/Concepts/Cognitive Load & What Mental Effort Is Trying to Cue|Cognitive Load]], and it replaces the older figure of seven.

Knowledge in the world is easy to use and requires the cue to be present. Knowledge in the head is fast and portable, costs learning, and fails under load. Good design puts the information for everyday action in the world, and leaves fast paths for people who already know. [[wiki/Minimalism/Environment Design|Environment Design]] applies the same rule to rooms: put the cue where the action happens.

The most effective memory aid is an object that does not require the person to remember anything.

## Constraints and forcing functions

Four classes of constraint, used together, remove the need to remember.

- **Physical**: a plug that only fits one way.
- **Cultural**: conventions that a group already shares.
- **Semantic**: a windshield belongs at the front of a vehicle, because that is what a windshield is for.
- **Logical**: the one part left over goes in the one hole left over.

A brick-toy motorcycle that uses all four can be assembled from the parts alone, because each part shows where it goes. One part can do several jobs at once. The holes in a pair of scissors are the possible action, the clue to it, and the limit on it, all at the same time.

**Forcing functions** are constraints used for safety. **Interlocks** refuse the next step until the previous one is done: the card comes out before the cash, and the dialog asks whether to save. **Lock-ins** refuse to end an activity before it is finished. **Lockouts** refuse entry to a place that would be unsafe: a gate at the ground floor of a stairwell, so a fire escape does not lead into the basement. If people dislike a safety lock enough to disable it, they will disable it. Then there is no lock, and there is a workaround that people have practiced.

## Human error as a design result

When a well-known nuclear plant came close to disaster, the operators were blamed. The inquiry found a control room whose design made the mistakes nearly unavoidable. In cases of this shape, what is called human error is a result of the design. It is a system error. Root-cause analysis that stops at the person is unfinished. The useful version keeps asking why until it reaches the design, the procedure, or the missing signal.

The **Swiss-cheese model** treats an accident as the result of several defenses failing at once. Each defense is drawn as a slice with holes, and the accident happens when holes in several slices line up. The model gives three levers: add layers, shrink the holes, and raise an alert when several holes have already lined up.

The same blame happens in everyday life on a smaller scale. People who struggle with an object assume the fault is theirs, hide the struggle, and the defect is taken as a personal failing. If you have difficulties with an object, the cause is bad design, and the fault is not yours.

## Slips, mistakes, and designing for error

A **slip** is an action that goes wrong while the goal is right. Skilled people make more slips, because their actions have become automatic. Four kinds matter for design:

- **Capture**: a frequent action takes over a similar, less frequent one.
- **Description-similarity**: two controls look alike, and the wrong one is used.
- **Mode errors**: the same action means something different in the current state. Mode error is really design error.
- **Memory-lapse**: an interrupted step is never resumed.

The cures are in the object: make similar controls different, make modes obvious or remove them, and let an interrupted step be picked up again. A **mistake** is the other kind of error: a wrong goal or a wrong plan, from a faulty model or the wrong rule. The cures for mistakes are better feedback about state, clearer models, and guidance toward a sensible plan.

Design on the assumption that errors will happen. Add constraints. Make actions reversible. Undo is the single most powerful tool. Make irreversible actions hard to do. Check unlikely input for sense, and treat all input as an approximation. Never make people start over.

## Three levels of processing, and why attractive things work better

People process an experience at three levels: **visceral**, **behavioral**, and **reflective**. One bad moment at the end can make the reflective judgment of the whole experience negative. Attractive things work better in one narrow, real way: positive feeling makes people more tolerant of minor trouble and better at finding a way around it. Good looks and usability do not have to be traded against each other. Prize-winning doors with no hardware still trapped a friend, because beauty that removes the signifier has not made the object work.

## Finding the right problem and testing with a few people

The design process is drawn as two diamonds. The first is to discover and define the right problem. The second is to develop and deliver a solution. Finding the actual problem matters more than solving the wrong problem well. Requirements written at a desk are almost always wrong. Good requirements come from watching people in the place where the work happens.

The work is a cycle: observe, come up with ideas, prototype, test. As few as five people per round, with a redesign between rounds, is enough to see the failures that repeat. That number is a diminishing-returns argument for iterative tests, and it is not a rule about sample size. Most cases are special cases. There is no average person. A flexible design works better than one optimized for the average.

## Activity-centered design, featuritis, and lock-in

**Activity-centered design** builds the conceptual model on the whole activity, and not on a list of features. Design for the activity, and the result will be usable by the people who do that activity. A music player became the leading product of its time by supporting three verbs: acquire, organize, listen. It did not win by adding another button.

**Featuritis**, also called creeping featurism, is what happens instead. Features get added and never removed. Matching a competitor's features makes products converge toward sameness. A brick-toy set that had fifteen pieces becomes one with twenty-nine.

An older, worse layout that everyone already knows will beat a better layout that has to be learned again. The standard typewriter arrangement stays in place over a rearranged one, because the cost of switching is higher than the gain. This is lock-in. It holds whether or not the rearranged layout is faster. Standardization locks in whatever was standardized. It is called the fundamental principle of desperation: the fallback when no better solution can be reached. It is valuable because people learn the pattern once.

Most innovation is incremental: small improvements on what already exists. Radical changes are rare, usually fail, and rarely come from asking users, because users cannot ask for what does not yet exist.

## Where the principles apply and where they stop

After two decades of designing for screens, "affordance" had been stretched to mean any visible control. That is why "signifier" had to be introduced. The principles are clearest on physical objects. On a screen, the same terms still apply, and on a screen they are easier to fake.

Difficulty is sometimes the purpose. Security, games, and deliberate skill-building are exceptions: in those, the difficulty is the product. Watching people is slow and expensive, and it is a weak way to invent something nobody has seen. The model also says little about aesthetics and business. It will not tell you what to charge, or which of two beautiful objects to ship.

The principles of interaction stay the same when technologies change. A new device can still fail a capable person, and when it does, the object failed to show the next move.

## How to practice this

1. Take an object that a capable person got stuck on. Ask whether they could find the possible actions, and whether they could tell what state it was in. Notice which of the two questions fails first.
2. Walk the stuck task through the seven stages, from goal to comparison. Notice whether the person could not find how, or acted and could not tell what changed. The two breaks take different fixes.
3. Before writing a help article, check the object's signifier, its mapping, and its feedback. Notice whether the object needs an added instruction to be used. An object that needs one has already failed.
4. Before adding instructions or confirmation dialogs, look for a constraint or an undo. Notice whether the action can be made reversible, or, if it cannot, made hard to do.
5. Read a person's difficulty with an object as information about the design. Notice whether the person blames themselves or hides the struggle. That reaction is a sign of a design defect.
6. Watch people use the object where the work happens, instead of writing requirements at a desk. Test with about five people, redesign, and test again. Notice which failures repeat between rounds.

## Related pages

- [[wiki/Design/Design, Condensed|Design, Condensed]]: this book's doctrine compressed to one rule per line.
- [[wiki/Design/Front-End Web Design|Front-End Web Design]]: these principles mapped onto web UI.
- [[wiki/Concepts/Cognitive Load & What Mental Effort Is Trying to Cue|Cognitive Load]]: working-memory limits behind knowledge-in-the-world.
- [[wiki/Minimalism/Environment Design|Environment Design]]: put the cue in the world, applied to rooms.
- [[wiki/Concepts/The Shortcut Problem|The Shortcut Problem]]: visible activity that bypasses intended cognition, a signifier with nothing behind it.
- [[wiki/Red Team/Applied Critical Thinking - Testing Frames|Applied Critical Thinking]]: re-examining assumptions baked into an interface.

## Open questions

Whether these principles later get seven owner pages of their own.

## Sources

- Don Norman, *The Design of Everyday Things*, revised and expanded edition, Basic Books, 2013. The book is the source of the principles, the worked objects, and the rule that difficulty with an object is the fault of the design.
- James J. Gibson, *The Ecological Approach to Visual Perception*, 1979. Affordance as a relationship between object and agent.
- Edwin Hutchins, James Hollan, and Don Norman, "Direct Manipulation Interfaces," 1985. The two gulfs.
- James Reason, *Human Error*, 1990. Swiss-cheese model of accidents.
- Jakob Nielsen, "Why You Only Need to Test with 5 Users," Nielsen Norman Group, 2000. A diminishing-returns argument for iterative tests, and not a rule about sample size.
- Stuart Card, Thomas Moran, and Allen Newell, *The Psychology of Human-Computer Interaction*, 1983; the 100 ms feedback threshold as an HCI convention.
- Noam Tractinsky, Adi Katz, and D. Ikar, "What is beautiful is usable," *Interacting with Computers*, 2000. Aesthetics and judged usability.
- S. J. Liebowitz and Stephen Margolis, "The Fable of the Keys," *Journal of Law and Economics*, 1990. Contests the speed claim often attached to a rearranged typewriter layout; lock-in by switching cost does not depend on that figure.
- A vault design-extraction restates handle-versus-plate and the self-blame reflex. The book remains the source.
