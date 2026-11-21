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
- [[wiki/Dimensions/Retrieval|Rules of Effective Memorization]]: understanding, organizing, and associating new material, which a copied fix never asks you to do.
- [[wiki/Working with Agents/Let an agent check its own work|Let an agent check its own work]]: a separate habit for checking output, which still leaves the learning of that output up to you.

## AI-Assisted Learning Workflow

> Not yet reviewed by Wedge.

An AI-assisted learning workflow uses language models to cut the slow parts of learning while the learner keeps doing the thinking. It starts by naming the artifact the learning should produce, such as an exam pass, an essay, an app or a financial plan. It then moves through five stages called goal, research, priming, comprehension and implementation, where priming is a quick first look at the material. Models save the most time in research, comprehension and implementation, by finding resources, reshaping material and drafting the final artifact. They cannot do the organizing, testing and struggling that build understanding, so any use of a model gets one check. If the learner skipped that step entirely, would the learning still happen? Applying knowledge early and testing often catch both the learner's mistakes and the model's.

## Core takeaways

- Decide what artifact the learning must produce before choosing any resource or tool.
- Comprehension takes most of the time, and models save the most time there.
- A model can find, reshape and draft. The learner still has to organize, test and apply.
- Effort spent early buys time back later, so a shortcut that removes the thinking costs more time overall.
- Model output is a hypothesis to check, not a fact to store.

## Name the artifact first

The workflow begins with a concrete end product. Wanting to learn about a field gives no direction, because a field can be learned in countless ways. Wanting to pass a named exam, write a report, build an application or set up a personal finance plan tells the learner what to gather and what to skip. Naming the artifact rarely takes long, often a few percent of total time, and a model cannot do it for the learner.

That artifact then sets the order of everything that follows.

## The five names and the seven steps

The five stages are goal, research, priming, comprehension and implementation. A jigsaw puzzle is a useful picture. The goal is choosing which puzzle to do. Research is finding the missing pieces, and priming, a quick first look, is sorting edges and color patches. Comprehension is assembling clusters, and implementation joins the clusters into the finished image. A rough time budget runs like this:

| Stage | Share of learning time |
|---|---|
| Goal | about 0 to 5 percent |
| Research | about 0 to 10 percent |
| Priming | about 2 to 5 percent |
| Comprehension | about 40 to 60 percent |
| Implementation | about 20 to 40 percent |

Adding two habits that run across all five stages, testing early and mixing subjects, gives seven working steps in total.

## What the model can do and what the learner keeps

A model helps most in research, comprehension and implementation. It can search widely and generate study guides and quizzes. It can convert material into a preferred format or pull out the one section that matters. It can answer follow-up questions in conversation and tidy rough notes into tables and diagrams. It can also draft outlines, reports, dashboards and code. One estimate puts the total saving at roughly two thirds of a 30-hour learning project.

The learner keeps the parts where learning happens in the brain. These are picking out which ideas matter, deciding how they fit together, recalling before checking, and judging whether an answer is right. Notes exist to produce understanding, not to exist as notes. A model that writes the notes finishes the task faster while delaying the learning.

The stages below show where that line falls in practice.

## Research: widen the search, keep the ranking

Research is often skipped, yet a goal rarely comes with every resource it needs, much like a puzzle box that holds only half its pieces. An answer engine can search forums for how other people reached the same goal and compile the courses they used. It can then filter that list to the learner's situation, such as listening and speaking only. A deep research tool goes further. This can save a few hours.

The learner still ranks what comes back. Choosing which course or source to trust depends on the artifact and on judgment the model does not have.

## Priming: a short pass before the real study

Priming is a quick first look that shows roughly what the material contains and how its parts fit, before trying to understand any of it. Skimming the headings, attempting the quiz or exam first, or opening a project's starter code all work. A model can turn a course or video into a study guide and a pre-quiz, which helps when the material has no built-in questions. Priming rarely needs more than half an hour.

## Comprehension: where most of the time goes

Comprehension works best layer by layer. A first fast pass catches the overall concepts, and later passes add depth. Going deep on one concept and getting stuck is slower than building a rough whole first. On the first pass, a useful filter is to note only three kinds of item: definitions, major concepts, and full worked examples. Worked examples show how the concepts combine in a concrete case.

A model speeds this stage in several ways. It can reshape a text into audio for fast listening, extract only the relevant section, and talk through a confusing point with examples until it clicks. The thinking still has to come from the learner. While reading or listening, the learner keeps asking how the material could be organized. It also asks which ideas outrank which and how they connect.

## Implementation: build the artifact while studying

Implementation is tied to comprehension from the start. With the artifact in mind, the learner notes during study which parts apply to their own case and works the numbers along the way. By the end of study, much of the plan already exists, and implementation means carrying it out, such as setting up the accounts and automations a finance plan calls for. Models can draft outlines, write with the learner, build dashboards from data, generate slides, or help code an application.

## How to check whether the model did the learning

The check is whether the learner can now do something they could not do before. Testing right after studying a section, without looking back, shows whether the material was understood and organized. If recall fails, the organizing was weak or the effort was too low. A good test is hard and looks for mistakes, not reassurance. Neat notes or a finished summary prove nothing about what the learner knows.

## Why format conversion is still allowed

The idea that each person has one fixed learning style is a myth. Nearly everyone processes visual information far faster than text, and reading and listening are trained habits. Converting a text into audio or a diagram is still allowed because it changes the input, not the thinking. The learner must still organize the material actively in whatever form it arrives. Being able to learn from every format is the deeper skill, because work rarely lets anyone pick the format.

## The skip test

Before handing any step to a model, ask whether the learning would still happen if that step were skipped completely. Finding resources, converting formats and tidying notes pass, because the learning never lived in those steps. Writing the summary, deciding what is important and answering the practice question fail, because those steps are the learning. Reducing effort makes the task quicker and the learning slower, so the time comes back later as relearning.

## The machine can be wrong

A model's answer may rest on nothing solid. Treat it like any hypothesis about how ideas connect, and check it early. A wrong connection accepted early carries into every later idea built on it, and fixing it late means relearning everything attached. Checking an answer against its premises, and testing it in use, keeps such errors from spreading.

## Apply on the first pass

Using knowledge right after learning it is the fastest feedback. Solving a problem, building something or writing code with a fresh idea shows at once whether it was understood. Learning aimed at a real problem also makes the purpose of each tool obvious, much as taking an engine apart shows what each tool is for. Tools taught in isolation feel irrelevant and fade, because the brain drops information it sees no use for.

## Mixing subjects across a day

Interleaving means studying several subjects within one day instead of giving each subject its own day. Someone learning to build agents, a language and personal finance would do a block of each daily. Mixing improves learning and keeps motivation up through variety. Scheduling study for high-energy hours, such as before work, matters as much as finding free time.

## When the workflow fits and when it does not

The workflow fits self-directed learning toward a defined artifact, especially when resources are scattered and material is long. It fits less well when the goal is vague, since the model has nothing to aim at. It also fits less well when the learning lives in the steps a model would take over, such as practicing recall or building fluency by hand. It fails outright when the model's output is accepted without testing.

## How to practice this

1. Write one sentence naming the artifact and how you will know it is done.
2. Ask a model to find and compile resources, then rank them yourself.
3. Prime for under half an hour with a skim and a pre-quiz.
4. Study in layers, noting only definitions, concepts and worked examples on the first pass.
5. After each section, test yourself without looking, then apply the idea to the artifact.
6. Run the skip test before handing any step to a model.
7. Check what a model says by testing it early, and mix subjects within each day.

## Related pages

- [[wiki/Learning Craft/Don't Outsource the Learning|Don't Outsource the Learning]]: why the thinking cannot be handed off.
- [[wiki/Concepts/The Shortcut Problem|The Shortcut Problem]]: how reduced effort delays learning.
- [[wiki/Learning Craft/Don't Outsource the Learning|The Right vs Wrong Way to Work With AI]]: the broader use of models at work.
- [[wiki/Dimensions/Dimensions of Learning|Learning Styles Myth and Multimodal Learning]]: why format choice is not a learning style.
- [[wiki/Dimensions/Deep Processing|Prestudy]]: priming in more depth.
- [[wiki/Dimensions/Deep Processing|Layers of Learning]]: studying in layers.
- [[wiki/Dimensions/Deep Processing|Problem-First Learning]]: learning aimed at a problem.
- [[wiki/Dimensions/Retrieval/Spaced Interleaved Retrieval|Spaced Interleaved Retrieval]]: testing and mixing over time.
- [[wiki/Dimensions/Deep Processing|Interleaving for Complex Problem Solving]]: mixing subjects in depth.
- [[wiki/Dimensions/Deep Processing|Deep Processing]]: the organizing work the learner keeps.
- [[wiki/Syntheses/ICS System|ICS System]]: the wider learning system.

## Open questions

- How can a learner tell quickly whether a model-made study guide left out something important?
- How should the skip test change for skills that are mostly procedural?
- How can a model be set up to quiz the learner without giving away the answers?

## Sources

- Tina Huang, "How I Learn Things Really Fast (with AI)", YouTube talk.
- Justin Sung, "How to Learn ANYTHING Faster Than Everyone", YouTube talk.
- Elon Musk, "How To Learn Anything", YouTube interview.

## Let code keep the score in an AI tutor

> Not yet reviewed by Wedge.

A chat model that both teaches and grades can flatter the learner and forget their mistakes, so several small tutor projects split the work. The model teaches, writes the material and judges single answers. Plain code decides what to practise and what counts as learnt, and outside tools check what they can. Mastery then comes only from evidence the code logged. That means unaided first tries spread over separate sessions and days, a second judge besides the tutor model for the highest levels, and a refusal to draw conclusions from too few answers. The model may record a miss but may never mark something as known. Mistakes become patterns tied to the word that triggered them and come back as retests on a schedule. A further check replays the log to see whether the review schedule's predictions match what the learner actually remembered. All four designs come from small, new open-source projects, and the numbers in them are their authors' own choices.

<figure>
<svg viewBox="0 0 520 194" width="100%" style="max-width:520px;--qp-surface:light-dark(#ffffff,#1a1a1a);--qp-ink:light-dark(#090909,#f2f2f2);--qp-mut:light-dark(#6b6b6b,#a3a3a3);--qp-rule:light-dark(#ededed,#262626);--qp-rule2:light-dark(#dedede,#333333);--qp-accent:light-dark(#1a7fe6,#5aa9f5);font-family:Inter,system-ui,sans-serif" role="img" aria-labelledby="tu-split-t">
<title id="tu-split-t">The model teaches, writes the material and judges single answers.</title>
<rect x="0.5" y="0.5" width="519" height="193" rx="16" style="fill:var(--qp-surface);stroke:var(--qp-rule);stroke-width:1"/>
<rect x="20" y="20" width="152" height="128" rx="20" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/><text x="96" y="50" text-anchor="middle" style="fill:var(--qp-ink);font-size:15px;font-weight:600">The model</text><text x="96" y="70" text-anchor="middle" style="fill:var(--qp-ink);font-size:13px">teaches</text><text x="96" y="90" text-anchor="middle" style="fill:var(--qp-ink);font-size:12px">judges single answers</text>
<rect x="184" y="20" width="152" height="128" rx="20" style="fill:none;stroke:var(--qp-accent);stroke-width:1.25"/><text x="260" y="50" text-anchor="middle" style="fill:var(--qp-ink);font-size:15px;font-weight:600">Plain code</text><text x="260" y="70" text-anchor="middle" style="fill:var(--qp-ink);font-size:13px">decides what</text><text x="260" y="90" text-anchor="middle" style="fill:var(--qp-ink);font-size:13px">to practise</text><text x="260" y="110" text-anchor="middle" style="fill:var(--qp-ink);font-size:13px">and what counts</text><text x="260" y="130" text-anchor="middle" style="fill:var(--qp-ink);font-size:13px">as learnt</text>
<rect x="348" y="20" width="152" height="128" rx="20" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/><text x="424" y="50" text-anchor="middle" style="fill:var(--qp-ink);font-size:15px;font-weight:600">outside tools</text><text x="424" y="70" text-anchor="middle" style="fill:var(--qp-ink);font-size:12px">check what they can</text>
<text x="260" y="176" text-anchor="middle" style="fill:var(--qp-mut);font-size:12px">The model may record a miss but may never mark something as known.</text>
</svg>
</figure>

## Split the jobs between model and code

One German tutor engine puts the rule in its tagline, that the model teaches, code keeps score and tools verify. Choosing the next exercise and logging every session is the engine's job, which leaves the tutor no room to flatter the learner or lose track of their errors. When the optional add-ons are installed, grammar and spelling go to a local checking tool and noun genders go to a dictionary, so a mark never rests on the model recalling der, die or das.

A vocabulary coach for spoken English draws the line the same way. Code picks the words, sets the test times and rules on what is learnt. The model writes the words and judges how well the learner used each one. Its authors give the reason as keeping scheduling and mastery testable and consistent. Speech goes through a dedicated recogniser, never the model, because a model can quietly fix a learner's errors or hear the word it expected. Every action goes into a log, and the learner's record is rebuilt by replaying that log.

## Count only evidence the code can trust

The German engine sets out its mastery rule in numbers. A learner reaches a level once 5 or more of the 8 most recent answers in that context come from 2 or more sessions, with 80% or more correct on the first try. The log keeps answers given after a hint, guesses with no explanation and answers the tutor itself doubted, yet none of them adds to the score. Free use of a structure counts only when nothing in the session primed it. It also needs a judge besides the tutor model, such as the grammar checker or a human. The top level also needs that unprimed use to happen again at least 7 days after the first. A word's meaning counts as known only when the learner shows it unprimed on 2 separate days after their latest miss. The tutor model can record a miss or a use, yet it can never record a meaning as known, because understanding a text does not prove each word in it.

The vocabulary coach uses a ladder of evidence. Recalling a word with a hint reaches level 2 of 5, recalling it unaided reaches level 3, using it in a sentence reaches level 4 and using it unprompted reaches level 5. Mastery needs level 4 on two different days, one use at level 5, and a correct answer a week or more after the learner first met the word. The coach never shows or says the target word before the third hint, since showing it turns recall into recognition.

<figure>
<svg viewBox="0 0 520 240" width="100%" style="max-width:520px;--qp-surface:light-dark(#ffffff,#1a1a1a);--qp-ink:light-dark(#090909,#f2f2f2);--qp-mut:light-dark(#6b6b6b,#a3a3a3);--qp-rule:light-dark(#ededed,#262626);--qp-rule2:light-dark(#dedede,#333333);--qp-accent:light-dark(#1a7fe6,#5aa9f5);font-family:Inter,system-ui,sans-serif" role="img" aria-labelledby="tu-ladder-t">
<title id="tu-ladder-t">Recalling a word with a hint reaches level 2 of 5, recalling it unaided reaches level 3, using it in a sentence reaches level 4 and using it unprompted reaches level 5.</title>
<rect x="0.5" y="0.5" width="519" height="239" rx="16" style="fill:var(--qp-surface);stroke:var(--qp-rule);stroke-width:1"/>
<rect x="20" y="130" width="112" height="90" rx="16" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/>
<text x="76" y="156" text-anchor="middle" style="fill:var(--qp-ink);font-size:14px;font-weight:600">level 2</text>
<text x="76" y="178" text-anchor="middle" style="fill:var(--qp-ink);font-size:12px">Recalling a word</text>
<text x="76" y="195" text-anchor="middle" style="fill:var(--qp-ink);font-size:12px">with a hint</text>
<rect x="142" y="100" width="112" height="120" rx="16" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/>
<text x="198" y="126" text-anchor="middle" style="fill:var(--qp-ink);font-size:14px;font-weight:600">level 3</text>
<text x="198" y="148" text-anchor="middle" style="fill:var(--qp-ink);font-size:12px">recalling it</text>
<text x="198" y="165" text-anchor="middle" style="fill:var(--qp-ink);font-size:12px">unaided</text>
<rect x="264" y="70" width="112" height="150" rx="16" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/>
<text x="320" y="96" text-anchor="middle" style="fill:var(--qp-ink);font-size:14px;font-weight:600">level 4</text>
<text x="320" y="118" text-anchor="middle" style="fill:var(--qp-ink);font-size:12px">using it in</text>
<text x="320" y="135" text-anchor="middle" style="fill:var(--qp-ink);font-size:12px">a sentence</text>
<rect x="386" y="40" width="112" height="180" rx="16" style="fill:none;stroke:var(--qp-accent);stroke-width:1.25"/>
<text x="442" y="66" text-anchor="middle" style="fill:var(--qp-ink);font-size:14px;font-weight:600">level 5</text>
<text x="442" y="88" text-anchor="middle" style="fill:var(--qp-ink);font-size:12px">using it</text>
<text x="442" y="105" text-anchor="middle" style="fill:var(--qp-ink);font-size:12px">unprompted</text>
</svg>
</figure>

An exam-prep coaching skill takes the same caution further. It reports mastery as a count of evidence on four levels and never as a probability, and with fewer than 5 samples it reports only that the evidence is not enough. It grades a multi-step practice card by its weakest step.

## Turn mistakes into patterns with retests

Logging an error only helps if it comes back. The German engine files each error together with its trigger, the word that called for the rule, such as weil pushing the verb to the end of the clause. The same structure and trigger make one pattern, which returns as a fresh retest in the next session, then 4 days later and again 10 days on. A pass on the third retest closes the pattern, and another error resets it. The exam coach files every mistake under one of five causes, which are concept, calculation, expression, choice of method and misreading the question. A script also rejects a worked explanation that is missing any of its required parts.

<figure>
<svg viewBox="0 0 520 206" width="100%" style="max-width:520px;--qp-surface:light-dark(#ffffff,#1a1a1a);--qp-ink:light-dark(#090909,#f2f2f2);--qp-mut:light-dark(#6b6b6b,#a3a3a3);--qp-rule:light-dark(#ededed,#262626);--qp-rule2:light-dark(#dedede,#333333);--qp-accent:light-dark(#1a7fe6,#5aa9f5);font-family:Inter,system-ui,sans-serif" role="img" aria-labelledby="tu-retest-t">
<title id="tu-retest-t">The same structure and trigger make one pattern, which returns as a fresh retest in the next session, then 4 days later and again 10 days on.</title>
<rect x="0.5" y="0.5" width="519" height="205" rx="16" style="fill:var(--qp-surface);stroke:var(--qp-rule);stroke-width:1"/>
<path d="M60,70 L405,70" style="fill:none;stroke:var(--qp-rule2);stroke-width:1.25"/>
<circle cx="60" cy="70" r="5" style="fill:var(--qp-mut)"/>
<text x="60" y="52" text-anchor="middle" style="fill:var(--qp-ink);font-size:14px;font-weight:600">one pattern</text>
<circle cx="175" cy="70" r="5" style="fill:var(--qp-mut)"/>
<text x="175" y="52" text-anchor="middle" style="fill:var(--qp-ink);font-size:12px">the next session</text>
<circle cx="290" cy="70" r="5" style="fill:var(--qp-mut)"/>
<text x="290" y="52" text-anchor="middle" style="fill:var(--qp-ink);font-size:12px">4 days later</text>
<circle cx="405" cy="70" r="5" style="fill:var(--qp-accent)"/>
<text x="405" y="52" text-anchor="middle" style="fill:var(--qp-ink);font-size:12px">10 days on</text>
<text x="175" y="94" text-anchor="middle" style="fill:var(--qp-mut);font-size:12px">retest</text>
<text x="290" y="94" text-anchor="middle" style="fill:var(--qp-mut);font-size:12px">retest</text>
<text x="405" y="94" text-anchor="middle" style="fill:var(--qp-mut);font-size:12px">retest</text>
<rect x="205" y="112" width="295" height="40" rx="20" style="fill:none;stroke:var(--qp-accent);stroke-width:1.25"/>
<text x="352.5" y="137" text-anchor="middle" style="fill:var(--qp-ink);font-size:12px">A pass on the third retest closes the pattern</text>
<path d="M405,102 L405,100" style="fill:none;stroke:var(--qp-rule2);stroke-width:1.25"/><polygon points="405,109 400.0,100.0 410.0,100.0" style="fill:var(--qp-mut)"/>
<path d="M110,180 L60,180 L60,80" style="fill:none;stroke:var(--qp-rule2);stroke-width:1.25;stroke-dasharray:4 4"/>
<polygon points="60,77 55,86 65,86" style="fill:var(--qp-mut)"/>
<text x="118" y="184" style="fill:var(--qp-mut);font-size:12px">another error resets it</text>
</svg>
</figure>

## Check the schedule against real recall

A review scheduler predicts how likely a learner is to remember an item, and that prediction can be wrong in either direction. One fork of an open-source tutor replays the learner's evidence log through the scheduler and compares each predicted chance of recall with what the learner actually did. If the model is too optimistic, intervals get too long, and if it is too pessimistic, the learner wastes reviews. With fewer than 20 paired events the audit reports numbers but draws no conclusion, and it also reports the retention target that would deliver what the current target promises.

These designs come with limits their authors state. In the German engine's code, every threshold carries a mark saying it is a judgment call. The vocabulary coach's judge agreed with all 30 of its clear-cut test sentences, a result that shows the judge runs but says nothing about how it handles subtle mistakes. Its review schedule comes from a model fitted to flashcard self-grades, so mapping spoken evidence onto it remains a hypothesis. The exam coach's check covers the structure of an explanation and says nothing about its teaching quality.

## Open questions

How should a tutor decide when an answer counts as unaided?

What should a second judge look for that the tutor model misses?

How many sessions of evidence does a learner need before a mastery level means something?

## Sources

- Yasirdora, [Redefluss](https://github.com/Yasirdora/Redefluss), GitHub, created 6 November 2026, README sections "How it teaches", "Rules the code enforces" and "Not built yet". Paraphrased, with the tagline quoted in part.
- FarazO7, [vocab-coach](https://github.com/FarazO7/vocab-coach), GitHub, 27 October 2026, README sections "How it works", "Decisions and why" and "Known limitations". Paraphrased.
- geyadawang-boop, [study-coach](https://github.com/geyadawang-boop/study-coach), GitHub, 7 November 2026, README sections on explanations and follow-ups, on grading, memory and review, and on known limits. Read in Chinese and paraphrased.
- llinok111, [retentionproof](https://github.com/llinok111/retentionproof), fork of HKUDS/DeepTutor, GitHub, 29 October 2026, CALIBRATION.md. Read in Chinese and paraphrased.

## Related pages

- [[wiki/Learning Craft/Don't Outsource the Learning|Don't Outsource the Learning]]
- [[wiki/Learning Craft/Don't Outsource the Learning|AI-Assisted Learning Workflow]]
- [[wiki/Dimensions/Retrieval|Rules of Effective Memorization]]
- [[wiki/Tsumugu/Tsumugu|Tsumugu]]

## The Right vs Wrong Way to Work With AI

> Not yet reviewed by Wedge.

# The Right vs Wrong Way to Work With AI

For learning, a model is almost the same tool as an ordinary web search. Think of it as about 95 percent the same as ordinary search. If your picture of the tool drifts far from that, the way you are fitting it into your system is probably hurting the quality of the learning. The right use asks for information that lets you do the thinking. The wrong use asks the model to do the thinking and then hands you something that only looks like the result.

Modern study is often low in context and high in density. An apprenticeship ties each new piece to a job you can see, and the information arrives slowly. A lecture plus 20 pages of recommended reading dumps a large volume at several steps of remove from what is immediately relevant, and the brain does not process that well on its own. Learning techniques exist to raise context and to control density, rate, and complexity so your own thinking can work. A model looks as if it can skip that struggle by teaching, summarizing, grouping, and connecting the material for you. That skip is the problem.

A common wrong loop starts with a new, complicated topic. You ask the model to teach it or summarize it, and the summary feels easier. Chunking and comparison are hard, so you ask it to find similarities and tell you how to group the words. Connections are hard, so you ask how the pieces fit and why they matter, and it tells you. Your brain has left the work. The output looks like what you would have produced if you had processed the material, which is like hiring another person to do the lifting and calling it a workout because the bar moved. The connections, the evaluation, the schemas, and the memory that processing would have built are skipped. A task that needed higher-order work has been turned into the lower-order job of memorizing what the model said.

That path can still beat staring at raw, overwhelming material at a low level, because the model has at least organized something. It is worse than transforming the material yourself. Whenever the processing is difficult and you hand that difficulty to the model, the quality of the learning is at risk.

Search does not answer until you ask, and the quality of what comes back depends on the question, so you have to think about what to ask and what you will do with the answer. A model should be used the same way. You need a clear idea of what you want it to do, how that helps, and what you will do next. If you are using it because you do not know how to think about the topic, and you want it to think for you, that is the wrong use.

Uses that stay on the right side of the line include checking a hypothesis you already formed, running a fine-toothed pass for issues, and handing it manual labor such as collecting keywords. Outside those, other uses for learning are unnecessary or actually harmful. Checking code sits near the fine-toothed pass. Whether you should still practise finding your own errors depends on how you will be assessed and on the size of the work. Hunting bugs by hand through a huge system you built alone can take days, which changes the tradeoff.

Stay one level above the schema. Do not ask the model to build the structure or to tell you how it should be built. Ask what you would need to know so you can make that judgment yourself. The parallel from teaching is useful here. A lesson that flows logically can still leave each listener understanding something different. A stronger move is to ask what a student would need to know so they can figure out the hard idea themselves, then teach that missing knowledge and let them build it. You do the same for yourself. Notice why the idea feels difficult, locate the gap that blocks your own judgment, and ask for that missing piece. What you then do with the piece stays yours.

Generating analogies is a frequent trap. If you already understand the topic, you could have made the analogy, and you get more from making it. If you do not understand the topic yet, you cannot tell whether the analogy is correct, and a fluent wrong picture will teach you the wrong thing. After hundreds of trials, it often took 10 to 11 generated analogies before one was accurate enough to keep, and that check was only possible because the topic was already known. Do not ask a model for analogies while you are learning something for the first time.

Treat the model as a strict mentor who judges the quality of the question. "Why is this important?" is a weak question, because importance is relational. Asking it is asking the model to relate the idea to other ideas and to evaluate those links, which is asking it to build the schema. A better question starts from the gap. You might say you think one thing influences another in a particular way, and ask whether that is right. You still decide how the piece belongs. Across coaching work, every harmful use of a model for learning boiled down to asking for the final answer rather than asking for information that would let the person find the answer. A detective cannot open with who did it. A detective can ask how one suspect could be in two places at once.

Do not ask the model to rank keywords by importance. That ranking introduces framing bias and shuts down the evaluation you need to do. You are the last step. If you push back, the model will often agree and offer a new story, which is why its ranking is a poor thing to lean on. Anything you decide to understand should carry your own seal of approval.

## Open questions

How would you rephrase a request for the finished schema as a request for the one fact that would let you build it?

When you feel that faint sense that an explanation does not quite click, what missing piece is that feeling pointing at?

## Sources

- iCanStudy, "Live Clinic 60: The right vs wrong way to use AI", Live clinics. Private course notes, paraphrased.

## Related pages

- [[wiki/Learning Craft/Don't Outsource the Learning|Don't Outsource the Learning]]
- [[wiki/Syntheses/Are You Learning, or Just Using Techniques|Are You Learning, or Just Using Techniques]]
