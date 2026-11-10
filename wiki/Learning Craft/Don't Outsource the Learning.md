---
title: "Don't Outsource the Learning"
type: concept
status: developing
created: 2026-05-08
updated: 2026-11-10
method: fresh-from-notes-2026-11-10
description: "AI can close the task while your mental model stays still. Keep the struggle that teaches you, and treat shipping and learning as two separate scores."
tags:
  - ai
  - learning
  - skill
wedge_reviewed: false
---

> Not yet reviewed by Wedge.

# Don't Outsource the Learning

A model makes it easy to write the code and skip the learning. The bug gets fixed and your picture of the system does not move. It can get worse over time. Present speed is being traded for future skill, and the tools will not stop you. That part has to come from you.

A common loop starts when you paste a spec or an error, the model returns a patch, the symptom disappears, and you ship. The messy work of moving from problem to solution stops happening. Across thousands of those small turns, what you can build without a model nearby fades a bit with each passing week. None of those turns feel costly while they are happening.

This is not an argument against the tools. People who use them every day can ship more with them than they did before. The default setup is tuned for closing tasks, which is not the same aim as remaining sharp enough to guide the tools across a long career.

## What the studies keep showing

When engineers had to pick up an unfamiliar Python library, one group used a model and the other did not. Both groups completed the work equally fast. On a later comprehension quiz, the group that used the model scored 50 percent and the group that worked by hand scored 67 percent, with a wider gap on debugging. Inside the group that used the model, the split mattered more than the tool. People who asked conceptual questions scored above 65 percent. People who copied the generated code scored under 40 percent.

In another comparison, people wrote essays with a model, with a search engine, or with no extra aid. Brain coupling was weaker with each added layer of outside support, and weakest with the model. After writing, 83 percent of the people who had used a model could not repeat even one sentence of the essay they had just written. The people running the study described this as cognitive debt, meaning you save effort today and pay for it later in weaker thinking.

A third study found that giving people model access at the start of a task let the model frame the whole problem. Even when the person did the rest of the work, that early frame led to worse decisions. The order of use mattered more than how much help they took overall.

Using a model without an intent to learn quietly wears down the skill you are paid for.

## Where handing everything over breaks

The defaults are set to finish the job, so the model writes and you accept. Nothing asks what you think the problem is, or asks you to write the first few lines yourself. Product teams are rewarded for merged changes and shorter cycles, not for making you sharper. The friction that used to hold the learning has been sanded off.

Some products now include a mode that asks questions and pauses so you can write before it continues. Those modes are easy to file away as something for students. The same pause that helps a newcomer learn a library also helps an experienced engineer learn an unfamiliar language, if they are willing to feel like a beginner again.

For boilerplate, glue, or a script you will never look at again, handing the work over can be fine. For real software, full delegation fails in several places. Generated code crashes the same way handwritten code does, and "the model wrote it" does not debug an architecture. Models can still sound sure and be wrong, and the only defense is enough expertise to notice. When a framework changes or a review flags a structural problem, you cannot prompt your way through a migration you do not understand. The further a problem sits from the well-worn middle of public examples, the weaker the help becomes. People who can ship only with a model beside them are also entering a market that is already changing what expertise is worth.

## Change what you ask for

Before you request a fix, write two or three sentences stating your own guess about the fault, and use the answer to test that idea rather than to replace it. In unfamiliar territory, ask how the thing works, which other approaches exist, and what you give up with each. Ask for code only after the ideas are clear. Turn on a teaching mode when you are out of your depth, even though it feels slower. Read the output the way you would read a change from a junior colleague, and push back on it. Now and then, take a piece the model wrote and try to recreate it from scratch, which shows you how much you have quietly lost. After a clever function appears, ask what concepts it used and what you would need to read to understand the design.

None of those moves are dramatic. They are small shifts of posture inside the same tools.

A useful close to a session asks whether you learned anything today, or only closed issues. "I only closed issues" is fine some days. If it is the answer for months in a row, debt is building in the background. Shipping and learning are two separate scores, and other people will ask about the first while the second stays yours. Shipping 80 percent of what you could have, while learning 100 percent of what you needed, produces a different engineer over the years than the reverse. Using the tools and learning do not have to be opposites. You do have to pick a way of working that holds onto both, because the factory settings will not pick it for you.

## Open questions

If I wrote two or three sentences of my own guess before I asked for a fix, what would I notice in the answer that I currently miss?

When was the last session where I could recreate, from scratch, the thing the model had just written for me?

## Sources

- Addy Osmani, "Don't Outsource the Learning" (public essay, 2026-05-18).

## Related pages

- [[wiki/Concepts/Cognitive Load & What Mental Effort Is Trying to Cue|Cognitive Load & What Mental Effort Is Trying to Cue]]: the effort you skip today is often the effort that would have built the model in your head.
- [[wiki/Concepts/Four Stages of Competence|Four Stages of Competence]]: staying in the comfortable default loop keeps you from the awkward stage where real skill forms.
- [[wiki/Learning Craft/Rules of Effective Memorization|Rules of Effective Memorization]]: understanding, organizing, and associating new material, which a copied fix never asks you to do.
- [[wiki/Working with Agents/Let an agent check its own work|Let an agent check its own work]]: a separate habit for checking output, which still leaves the learning of that output up to you.
