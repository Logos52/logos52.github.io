---
title: "Front-End Web Design"
type: synthesis
status: developing
created: 2026-06-30
updated: 2026-09-27
method: draft-2026-09-27
prose-model: opus
source-count: 1
description: "Don Norman's design rules applied to web pages, with the accessibility rules that match them and the case of pages built for learning."
written-by: opus
model: grok
tags:
  - design
  - front-end
  - web
  - ui
  - ux
  - human-centered-design
  - tsumugu
---

# Front-End Web Design

Front-end web design is the work of deciding what a web page shows, where, and how it responds when someone clicks, types or waits. Don Norman's rules from The Design of Everyday Things apply directly to screens, and screens make them easier to break without anyone noticing. Applying them to a web page catches the problems that send visitors away before they find what they came for.

## Core takeaways

- Every clickable thing should look clickable.
- Every action should show a result within a tenth of a second.
- Keep what the visitor needs on screen, not in their memory.
- Make modes visible, or remove them.
- Let visitors undo instead of asking them to confirm.
- Keyboard and screen reader users need the same paths.
- A learning page may hide an answer on purpose.

## How it works

A visitor arrives with a goal and has two problems to solve: finding what to do, and telling whether it worked. On paper and in physical objects, shape and weight tell people much of what they can do. On a screen everything is flat pixels, so every clue has to be drawn on purpose. Most web design faults are a missing clue on one side or the other.

```
goal --> find the control --> act
                                |
check <-- read the change <-- page responds
```

- Finding what to do
  - Links look like links: underlined or clearly coloured.
  - Buttons look pressable and say what they do.
  - Controls sit next to the thing they change.
  - Impossible actions are disabled or hidden.
- Telling whether it worked
  - A response starts within about 100 milliseconds.
  - A long wait shows progress.
  - The new state stays visible after the action.
  - Error messages say what went wrong and how to fix it.

## Memory and errors

People hold about three to five items in working memory, and one interruption can wipe them. A page that asks the visitor to remember a code, a setting or a step from the previous screen will lose some of them. Slips happen most to experienced users acting quickly, so the page should expect them. Undo protects better than a confirmation box that people learn to click through.

- Show the current step and what comes next.
- Keep a search term visible in the box after searching.
- Show which mode is active, such as edit or view.
- Offer undo after deleting.
- Put a real barrier in front of actions that cannot be undone.

## Accessibility

A page that works only with a mouse and eyes shuts out many people. The Web Content Accessibility Guidelines, version 2.2, set testable rules for this. Four of its rules map closely onto Norman's rules: they make sure the clues and the feedback reach people who navigate differently.

- WCAG 2.1.1 Keyboard: every action works without a mouse.
- 2.4.7 Focus Visible: the keyboard position is always shown.
- 4.1.2 Name, Role, Value: screen readers can tell what a control is.
- 1.1.1 Non-text Content: images and icons have text alternatives.

## When ease is the wrong goal

On a page built for learning, such as a dictionary entry or a study tool, the easiest design can teach less. Asking a learner to guess a meaning before showing it makes the page slower to use and improves memory of the answer. The design problem is to make the guess optional and quick to skip, so a visitor who only wants the answer can get it. A long reading surface also needs extra care, since reading on screens tends to go less deep than reading on paper.

- Hide the answer behind one tap when learning is the goal.
- Keep the answer one tap away for lookups.
- Give long text generous spacing and a readable line length.

## Related pages

- [[wiki/Concepts/Design of Everyday Things|Design of Everyday Things]]: the principles being mapped; applied here, not re-taught.
- [[projects/tsumugu-ed|tsumugu-ed]]: the dictionary surface in the worked examples.
- [[wiki/Concepts/Cognitive Load & What Mental Effort Is Trying to Cue|Cognitive Load]]: the related working-memory concept; that page does not itself state the 3–5 number.
- [[wiki/Design/Design, Condensed|Design, Condensed]]: the same doctrine, one rule per line.
- [[wiki/Concepts/The Screen Inferiority Effect|The Screen Inferiority Effect]]: why a reading surface earns extra design care.
- [[wiki/Syntheses/Learning, Condensed|Learning, Condensed]]: the pedagogy half of guess-first.

## Sources

Norman, *The Design of Everyday Things*, revised and expanded (Basic Books, 2013). Card, Moran & Newell, *The Psychology of Human-Computer Interaction* (1983). Cowan, "The magical number 4 in short-term memory," *Behavioral and Brain Sciences* 24(1), 2001. WCAG 2.2 Success Criteria 2.1.1 Keyboard, 2.4.7 Focus Visible, 4.1.2 Name, Role, Value, 1.1.1 Non-text Content. Bjork, desirable difficulties; Brown, Roediger & McDaniel, *Make It Stick* (2014), as the pedagogy named on the guess-first tension, not as a second design extract.
