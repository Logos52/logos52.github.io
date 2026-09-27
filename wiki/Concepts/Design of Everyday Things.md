---
title: "Design of Everyday Things"
type: book
status: developing
created: 2026-05-16
updated: 2026-09-24
method: outline-2026-09-24
prose-model: fable
written-by: fable
model: grok
source-count: 8
description: "Don Norman's terms for why everyday objects and screens are hard to use, how people act on them, and how to design for error."
tags:
  - design
  - affordances
  - signifiers
  - user-experience
  - human-centered-design
  - don-norman
---

# Design of Everyday Things

The Design of Everyday Things is a book by Don Norman about why doors, stoves, thermostats and screens are hard to use and what a designer can do about it. It gives a short list of terms and principles for checking any object or interface, and it settles one question: when a capable person fails at an everyday object, the fault is in the design.

## Core takeaways

- When a capable person cannot work a door, a stove or a form, the object failed. A taped sign on a door means the door failed.
- An object should show what can be done, where to do it, and what state it is in, without a manual.
- Put a cue on the object or in the room. Knowledge held in the head costs learning and is lost under interruption.
- Lay controls out in the same pattern as the things they change. An arbitrary layout fails on first use.
- Assume the user will make errors. Make actions reversible, make the irreversible ones hard, and treat an error that keeps recurring as a design fault.
- Watch people use the thing in the place they use it. Requirements written at a desk miss what people do.
- The principles rest on how people see and act, so they outlast any one technology.

## The terms

- Affordance: a relationship between an object and what a kind of user can do with it. A chair affords sitting. It holds whether or not the user notices it.
- Signifier: a visible or audible clue to where and how to act. A flat plate says push, a slot says insert, an underline says link. The affordance is what is possible; the signifier is where.
  - The word affordance was overused to mean a visible control, so the 2013 edition added signifier.
  - Weak: a glass door with no hardware and a PUSH sticker. Strong: the plate itself is the instruction.
- Mapping: controls laid out like the things they change. Stove knobs in the pattern of the burners, a seat control shaped like the seat. With a good mapping, labels are optional.
- Feedback: immediate confirmation that says what happened. A lag of about a tenth of a second is where people start to notice. Too much feedback is worse than none; people silence every alarm.
- Conceptual model: the short story a user holds of how the thing works. It can be incomplete or wrong as long as it helps, like files and folders on a desktop. A fridge with two dials that look like one per compartment tells a false story.
- System image: everything the user can see, hear and touch. The designer is not in the room, so the system image is the only thing carrying the model. A wrong image gives the user a wrong model.
- Constraints: limits on what can be done. The kinds are physical, cultural, semantic and logical. A kit whose parts only fit together in the right places needs no instructions.
- Forcing functions: constraints for safety. A cash machine returns the card before the cash. A save dialog appears before a window closes. A hated lock gets disabled, and then the workaround is the design.

## How a person acts

```
  goal
   |  plan -> specify -> perform      (execution)
   v                        |
  [ the world changes ]     |
   ^                        v
   |  compare <- interpret <- perceive (evaluation)
```

- Execution runs down the left of the drawing: the user forms a goal, plans, chooses an action, does it.
- Evaluation runs up the right: the user perceives the new state, interprets it, compares it with the goal.
- The gulf of execution is the gap between what the user intends and what the object lets them do. Signifiers, constraints, mappings and the model close it. "I cannot find how" is this gap.
- The gulf of evaluation is the gap between the new state and the user knowing what happened. Feedback and the model close it. "I did something and cannot tell what" is this gap.
- Working memory holds about three to five items and an interruption wipes it. Precise action does not need precise memory when the information is in the room. The best memory aid is an object that does not need one.

## Errors

- A slip is the right goal with the wrong movement. Skilled people slip more, because the action runs without attention. The fix goes in the object.
- A mistake is the wrong goal or the wrong plan. The fixes are feedback, a good model and guidance.
- Human error is system error. At the Three Mile Island nuclear plant the operators were blamed for the accident, and the inquiry found the control room almost required the mistake. Root cause means asking why until the design answers.
- An accident needs holes in several layers to line up. The levers are add a layer, shrink the holes, or alert when they align.
- People who struggle with an object assume it is their fault and hide it. That is why a bad design goes unreported.
- Design for error: constrain, make undo available, treat input as approximate, check it for sense, and never make the user start over.

## How to design

- Find the right problem before the right solution. The first problem stated is usually a symptom.
- Iterate: observe, come up with ideas, prototype, test. About five people per round, then a redesign, then another round. After five, a round finds few new problems.
- There is no average person. Design for a range.
- Design around what the person is trying to do. A music player covers acquire, organize and listen.
- Attractive things work better. People tolerate more and try more with a thing they like. A bad ending still poisons how the person remembers the thing.
- Matching competitors feature by feature makes products the same and bloated.
- A known layout beats a better one that has to be relearned. The typewriter keyboard layout survives because switching costs relearning; whether it was ever the fastest layout is contested and does not matter.
- Radical innovation is rare, usually fails, and does not come from asking users. Most useful innovation is incremental.

## Where it fails

- Friction is sometimes wanted: security, games, skill-building.
- Watching users is slow and expensive and weak for invention.
- The method says little about aesthetics or business.
- The terms are sharpest on physical objects. On screens, a cue is easy to fake: a control that looks pressable and does nothing.

## Related pages

- [[wiki/Design/Design, Condensed|Design, Condensed]]: this book's doctrine compressed to one rule per line.
- [[wiki/Design/Front-End Web Design|Front-End Web Design]]: these principles mapped onto web UI.
- [[wiki/Concepts/Cognitive Load & What Mental Effort Is Trying to Cue|Cognitive Load]]: working-memory limits behind knowledge-in-the-world.
- [[wiki/Minimalism/Environment Design|Environment Design]]: put the cue in the world, applied to rooms.
- [[wiki/Concepts/The Shortcut Problem|The Shortcut Problem]]: visible activity that bypasses intended cognition, a signifier with nothing behind it.
- [[wiki/Red Team/Applied Critical Thinking - Testing Frames|Applied Critical Thinking]]: re-examining assumptions baked into an interface.

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
