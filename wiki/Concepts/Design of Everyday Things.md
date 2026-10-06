---
title: "Design of Everyday Things"
type: book
status: developing
created: 2026-05-16
updated: 2026-09-27
method: outline-2026-09-27
prose-model: fable
written-by: opus
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

The Design of Everyday Things is a book by Don Norman about why doors, stoves, thermostats and screens are hard to use, and what a designer can do about it. It gives a short set of terms for checking any object or interface. It also settles one question: when a capable person fails at an everyday object, the fault is in the design.

- A taped sign on a door means the door failed.
- An object should show what it does and what state it is in.
- Put cues on the object, since memory fails under interruption.
- Lay controls out like the things they change.
- Assume errors: make actions reversible, and irreversible ones hard.
- Watch people use the thing where they use it.
- The principles rest on how people see and act, so they last.

## The terms

Norman's vocabulary names the parts of an object that tell a person what to do. An affordance is what an object lets a kind of user do, whether or not they notice it, so a chair affords sitting. A signifier is a visible or audible clue to where and how to act, such as a flat plate that says push or an underline that says link. The 2013 edition added the word signifier because "affordance" had come to be used for any visible control.

- Weak signifier: a glass door with a PUSH sticker.
- Strong signifier: a push plate that is itself the instruction.
- Mapping: stove knobs arranged like the burners they control.
- With a good mapping, labels are optional.
- Feedback: an immediate sign of what just happened.
- People notice a lag of about a tenth of a second.
- Too much feedback is worse than none, and people silence alarms.

A conceptual model is the user's short story of how the thing works, and it can be wrong and still help, the way desktop files and folders do. A fridge whose two dials look like one per compartment gives a wrong model. The system image is everything the user can see, hear and touch, and since the designer is absent, the system image is what carries the model. Constraints limit what a person can do with the object, and they are physical, cultural, semantic or logical.

- A kit whose parts only fit together the right way needs no instructions.
- Forcing functions are constraints for safety.
- A cash machine returns the card before the cash.
- A hated lock gets disabled, and the workaround becomes the design.

## How a person acts

Using an object runs as a loop. On the way out, the person forms a goal, plans, chooses an action and does it, which Norman calls execution. On the way back, the person perceives the new state, interprets it and compares it with the goal, which he calls evaluation. Each half has a gap where people get stuck.

```
goal
 |  plan -> specify -> perform      (execution)
 v                        |
[ the world changes ]     |
 ^                        v
 |  compare <- interpret <- perceive (evaluation)
```

- Gulf of execution: intent outruns what the object allows.
- "I cannot find how" is this gulf.
- Signifiers, constraints, mappings and the model close it.
- Gulf of evaluation: the user cannot tell what happened.
- Feedback and the conceptual model close it.
- Working memory holds about three to five items.
- An interruption wipes it.
- Information placed in the room removes the need to remember it.

## Errors

Norman splits errors into slips and mistakes. A slip is the right goal carried out with the wrong movement, and skilled people slip more because their actions run without attention. A mistake is the wrong goal or the wrong plan. In both cases he treats human error as a fault in the system, and the fix goes into the design.

- Fix slips in the object itself.
- Fix mistakes with feedback, a good model and guidance.
- At the Three Mile Island nuclear plant, operators were blamed for an accident.
- An inquiry found the control room almost required their mistake.
- Keep asking why until the design answers.
- Accidents need holes in several safety layers to line up.
- Add a layer, shrink the holes, or alert when they align.
- Constrain input, offer undo, check input for sense.
- Never make the user start over.

People who struggle with an object blame themselves and hide it, so bad designs go unreported.

## How to design

The first problem someone states is usually a symptom, so the work starts with finding the right problem before the right solution. Designs then improve in rounds of observing, generating ideas, prototyping and testing. About five people per round is enough, because after five a round finds few new problems.

- There is no average person, so design for a range.
- Design around the whole activity the person is doing.
- A music player covers acquiring, organising and listening.
- People tolerate more and try more with an attractive thing.
- A bad ending still spoils how the thing is remembered.
- Copying competitors feature by feature makes bloated, identical products.
- A known layout beats a better one that must be relearned.
- The typewriter keyboard survives because switching costs relearning.
- Whether it was ever the fastest layout is contested.
- Radical innovation is rare, usually fails, and does not come from users.
- Most useful innovation is incremental.

## Where it fails

The method has limits. Some friction is wanted, watching users is slow and does little for invention, and the book says little about looks or business. The terms are sharpest on physical objects, because on a screen a cue is easy to fake.

- Security, games and skill-building want friction.
- Observation is slow, expensive and weak for invention.
- Little on aesthetics or business.
- A screen control can look pressable and do nothing.

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
