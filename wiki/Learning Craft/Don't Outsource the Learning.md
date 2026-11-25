---
title: "Don't Outsource the Learning"
type: concept
status: stable
domain: learning
created: 2026-05-08
updated: 2026-11-21
source-count: 9
description: "A model can close the task while your mental model stays still. Keep the struggle that teaches you, and treat shipping and learning as two separate scores."
tags:
  - ai
  - learning
  - skill
---

# Don't Outsource the Learning

A language model makes it easy to ship without learning. Paste a spec or an error, accept the patch, move on. The symptom disappears and your picture of the system does not move. Present speed is traded for future skill, and the tools will not stop you. That part has to come from you.

For study, treat a model as almost the same tool as an ordinary web search. The right use asks for information that lets you do the thinking. The wrong use asks the model to do the thinking and hands you something that only looks like the result. This page covers work habits, the study mistake, a five-stage workflow, and why tutor software should let code keep the score.

## Shipping without a mental model

The default product setup is tuned for closing tasks. Nothing asks what you think the problem is before it suggests a fix. Teams are rewarded for merged changes, not for keeping engineers sharp across a long career.

Studies on this pattern are consistent. Engineers learning an unfamiliar Python library finished equally fast with or without a model, but scored worse on a later comprehension quiz, with a wider gap on debugging. Inside the model group, people who asked conceptual questions did far better than people who copied generated code. Essay writers with model help showed weaker brain coupling; most could not repeat a single sentence they had just written. Giving model access at the start of a task let the model frame the problem and worsened decisions even when the person did the rest of the work.

For boilerplate you will never touch again, delegation can be fine. For real systems, you still need enough expertise to catch wrong-but-fluent answers and to survive migrations you cannot prompt through.

Before you request a fix, state your own guess in two or three sentences and use the answer to test it. Ask how things work before you ask for code. Use teaching modes when you are out of depth. Occasionally recreate from scratch what the model just wrote. End sessions by asking whether you learned anything or only closed issues. Shipping and learning are two separate scores.

## The wrong loop in study

Modern study is low in context and high in density. A model looks as if it can skip struggle by summarizing, grouping, and connecting material for you. The common failure loop: ask for a lesson or summary, then ask it to chunk and rank ideas, then ask how pieces connect, and your brain never does the work. The output resembles what you would have produced after real processing, but the schemas and memory that processing builds are missing.

Search only answers after you think about what to ask. Use a model the same way: check a hypothesis you formed, run a fine-toothed review, or assign manual labor like collecting keywords. Stay one level above the schema. Ask for the fact that would let you judge the structure, not for the structure itself. Do not request analogies on first exposure, because you cannot verify them. Do not ask the model to rank keyword importance; you are the last step of evaluation.

## AI-assisted workflow without outsourcing thought

Name the artifact before you choose tools: pass this exam, ship this app, write this report. Vague goals give no filter on what to skip.

Five stages structure the work:

| Stage | Share of learning time |
|---|---|
| Goal | about 0 to 5 percent |
| Research | about 0 to 10 percent |
| Priming | about 2 to 5 percent |
| Comprehension | about 40 to 60 percent |
| Implementation | about 20 to 40 percent |

Priming is a quick map of what the material contains. Comprehension is layer-by-layer understanding. Implementation builds the artifact while you study. Models help find resources, reshape formats, and draft, but the learner still decides what matters, how ideas connect, recalls before checking, and judges correctness.

**The skip test:** if you handed this step to a model and skipped it entirely, would learning still happen? Finding resources and converting formats usually pass. Summarizing, prioritizing, and answering practice questions fail. They are the learning. Treat every model answer as a hypothesis and test it early. Test yourself without looking back after each section. Converting text to audio is fine; learning styles as fixed identities are not. The organizing work stays yours. Mix subjects within a day when that helps retrieval.

## Let code keep the score in tutors

A model that teaches and grades in one chat can flatter you and forget errors. Small tutor projects split roles: the model explains and judges single answers; code schedules practice and records mastery; external tools verify grammar, speech, or facts when they can.

Mastery should require evidence the code trusts (unaided tries on separate days, patterns that return as scheduled retests, and sometimes a second judge besides the tutor model). The model may log a miss; it should not alone mark something as known. That split matters for language coaches and exam prep alike: the person still does the thinking; the scoreboard stays honest.

## Open questions

- If you stated your own guess before every fix request, what would you notice in the answers?
- How would you rephrase a request for a finished schema as a request for one missing fact?
- When should the skip test treat procedural drills differently?

## Sources

- Addy Osmani, "Don't Outsource the Learning" (public essay, 2026-05-18).
- iCanStudy, "Live Clinic 60: The right vs wrong way to use AI", Live clinics. Private course notes, paraphrased.
- Tina Huang, "How I Learn Things Really Fast (with AI)", YouTube talk.
- Justin Sung, "How to Learn ANYTHING Faster Than Everyone", YouTube talk.
- Elon Musk, "How To Learn Anything", YouTube interview.
- Yasirdora, [Redefluss](https://github.com/Yasirdora/Redefluss), GitHub. Paraphrased.
- FarazO7, [vocab-coach](https://github.com/FarazO7/vocab-coach), GitHub. Paraphrased.
- geyadawang-boop, [study-coach](https://github.com/geyadawang-boop/study-coach), GitHub. Paraphrased.
- llinok111, [retentionproof](https://github.com/llinok111/retentionproof), GitHub. Paraphrased.

## Related pages

- [[wiki/Concepts/Cognitive Load & What Mental Effort Is Trying to Cue|Cognitive Load & What Mental Effort Is Trying to Cue]]
- [[wiki/Concepts/Four Stages of Competence|Four Stages of Competence]]
- [[wiki/Concepts/The Shortcut Problem|The Shortcut Problem]]
- [[wiki/Dimensions/Retrieval|Retrieval]]
- [[wiki/Razors|Are You Learning, or Just Using Techniques]]
- [[wiki/Working with Agents/Let an agent check its own work|Let an agent check its own work]]
- [[wiki/Tsumugu/Tsumugu|Tsumugu]]