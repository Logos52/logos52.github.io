---
title: "Don't Outsource the Learning"
type: concept
status: developing
created: 2026-05-23
updated: 2026-09-11
method: plain-rewrite-2026-09-11
prose-model: fable
written-by: grok
model: grok
source-count: 11
tags:
  - ai-use
  - learning
  - cognitive-offloading
flag-reason: "cluster held: Learning Craft; opener is owner-picked Opus A. Do not promote."
---

# Don't Outsource the Learning

Outsourcing the learning means letting a model do the part of a task you were supposed to learn from. The task still gets finished. The understanding does not get built, because the effort the tool removes is often the effort that was building it. Whether a session builds understanding depends on how the tool is used. The choice of tool does not decide it.

Three habits keep the learning in the session. Write your own hypothesis before you ask. Ask for the reasoning before the finished thing. Read what comes back the way you would read a colleague's work, instead of accepting it.

Schema formation is the internal structure that decides what is relevant, what groups with what, and what matters. [[wiki/Learning Craft/AI-Assisted Learning Workflow|AI-Assisted Learning Workflow]] describes a wider workflow that uses AI without handing over schema formation. Its stages are Goal → Research → Priming → Comprehension → Implementation. Resource discovery, format conversion, quizzing, and note cleanup can go to the machine. Relevance, organisation, and schema formation stay with the learner.

## Core takeaways

- The same model on the same bug can run a learning loop or a debt loop. The learning loop rebuilds the key move after the fix. The debt loop skips that step.
- In a January 2026 trial, fifty-two mostly junior engineers learned the same unfamiliar Python library. The group with AI scored 50% on the follow-up quiz. The group without AI scored 67%. Completion speed did not differ.
- Self-report does not measure learning. In a July 2025 trial, experienced developers took 19% longer with AI and still believed it had sped them up by 20%.
- The prompting order is: write a hypothesis, ask for explanation before code when there is time, review the output like a pull request, rebuild the move without looking, and ask what concepts were used.
- Under a deadline the order flips. In a 2026 timing study with ten minutes available, opening the model first scored 3.80 and working alone first scored 1.86.
- The one check that does not depend on self-report is whether the last generated move can be rebuilt with the model closed.

## Two ways a session can go

The same model, working on the same bug, can produce two different sessions. Both use AI. The difference is whether the AI replaces the learning loop or speeds it up.

The learning loop:

```text
task or bug appears
→ form initial hypothesis
→ ask AI to explain mechanisms, options, tradeoffs
→ compare answer against hypothesis
→ ask AI for code or fix
→ review output like a PR
→ reconstruct the key move
→ task closes, mental model improves
```

The debt loop:

```text
task or bug appears
→ paste into AI
→ accept generated fix
→ symptom disappears
→ no reconstruction happens
→ future debugging and architecture judgment weaken
```

The two loops differ at the reconstruction step. The learning loop includes it and the debt loop leaves it out.

## What the engineer study measured

A January 2026 randomised trial put fifty-two mostly junior engineers on the same unfamiliar Python library. One group had AI and one did not. The AI-assisted group scored 50% on the follow-up quiz. The manual group scored 67%. The largest gap was on debugging. Completion speed did not differ; the difference was about two minutes and not statistically significant. So the lower quiz score was not paid for with faster completion.

Seven interaction patterns were annotated from screen recordings after the study. Low-scoring patterns averaged under 40%: AI delegation, progressive AI reliance, and iterative AI debugging. High-scoring patterns averaged 65% or higher: generation-then-comprehension, hybrid code-explanation, and conceptual inquiry.

Only the AI-versus-no-AI assignment was randomised. The pattern split was observed after the study ended, so reverse causation is not ruled out. Engineers who already understood more may have been the ones asking conceptual questions. The sample is small. The quiz was immediate. The cohort was mostly junior. The result is about learning a new skill, not about exercising an established one.

AI can sharpen understanding as well as erode it. The sharpening needs active learning intent. That intent needs a workflow, because the tool's default is built to close tasks.

## Two results from every session

Every session produces two results: what shipped, and what improved in the person doing the work. The shipped work is visible. The improvement in the person is easy to overlook. Code can compile, tests can pass, and the issue can close while the mental model stays unchanged. Over a single session that is fine. Over months, the claim is that the gap grows. No study has tracked engineer capability across months of AI-assisted work, so that claim is a hypothesis.

The question to ask at the end of a session is still: **Did I learn anything today, or did I only close issues?** The answer is not a reliable measurement on its own. A July 2025 trial gave sixteen experienced open-source developers two hundred and forty-six real issues from their own repositories, randomised to AI-allowed or AI-disallowed. Developers took 19% longer with AI. Before the trial they had forecast a 24% speedup. After the slowdown they still believed AI had sped them up by 20%. Their self-assessment was off by roughly thirty-nine points, in the direction they had hoped for. So the shipping result is not reliably visible either. The check that self-report cannot alter is whether the generated move can be rebuilt with the tool closed.

A healthy workflow does not require every task to be a lesson. Some work should be handed off cleanly. The risk appears when issue closure is the only measure for long enough that calibration erodes. That erosion is the same months-long hypothesis, not a measured finding.

[[wiki/Concepts/Are You Thinking, or Just Consuming|Are You Thinking, or Just Consuming?]] describes the general form of the same split. The visible behaviour looks identical either way. Active means comparing, predicting, explaining, retrieving, deciding, or building.

## The prompting order

The fix is a different order of prompts, with the same amount of AI use. The effort the product removes, prediction, explanation, critique, and reconstruction, is where comprehension was being built. Some of that effort has to stay.

**Write a hypothesis first.** Before asking for a fix, write two or three sentences on what seems to be happening. The model's answer then tests your model instead of replacing it.

> I think the bug is caused by X because Y. Check my hypothesis, explain what I'm missing, then suggest the smallest fix.

Writing a hypothesis and then testing it is [[wiki/Dimensions/Self-Management/Kolbs Experiential Cycle|Kolb's Experiential Cycle]] running inside the session: experience, reflection, abstraction, the next attempt.

**Ask for explanation before code when there is time to think.** On unfamiliar territory, ask for the mechanism and the tradeoffs first.

> Explain how this works, what alternatives exist, and what tradeoffs matter. Don't write code yet.

The earlier version of this rule said explanation always comes before code. A 2026 timing study of three hundred and ninety-three people deciding a contamination case found that the effect depends on time. With thirty minutes available, early model access scored 4.51 and late access scored 5.77. With ten minutes, early access scored 3.80 and late access scored 1.86. Working independently first was the worst option for a time-pressed participant. With time to think, build the frame before the model opens. Against a deadline, open the model first, and put the re-derivation on the calendar for after the ship.

Conceptual inquiry is one of three high-scoring routes. Generation-then-comprehension and hybrid code-explanation sat in the same cluster at or above 65%. Letting the model generate first and then doing the work of understanding the output scored as well as asking conceptually first. A reader who cannot sustain explanation-before-code has two other routes that measured fine.

**Review the output like a pull request.** Read generated code as if a fast junior engineer wrote it. Question its assumptions, look for what it broke, and decline it if the design is wrong even when the tests pass.

1. Does this fit the architecture?
2. What assumption is it making?
3. What failure case is missing?
4. What did it change that I didn't ask for?
5. Would I merge this if tests passed but the design felt wrong?

Passing tests are useful. They do not replace judgment. The fifth question is about accepting passing tests in place of judgment.

A sixth question is about the team: *Who else here understands this?* Comprehension debt is the growing gap between how much code exists in a system and how much of it any human being genuinely understands. Unlike technical debt, it gives no signal that something is wrong: tests pass and metrics stay clean, so it grows while confidence holds. A junior can now generate code faster than a senior can critically audit it. Code review used to spread understanding across a team, and at that speed it stops doing so.

**Rebuild the move periodically.** Recreate a generated function, pattern, or fix from scratch without looking. If you cannot rebuild it, the code shipped without the capability. This does not need to happen on every task. It needs to happen often enough that a weak mental model gets found, because it is the only check whose result self-report cannot alter.

**Ask what concepts were used.** After a useful generated solution:

> What concepts did this solution use, and what would I need to understand to design this myself next time?

That one extra prompt turns a finished task into a learning asset.

## Turning the posture on in the tool

Discipline is no longer the only way to hold the posture. Three labs shipped a learning posture as a product setting within six weeks in 2025. Claude Code today ships Explanatory and Learning output styles. To enable one, run `/config`, then Output style, or set `"outputStyle": "Learning"` in the local settings file. Learning inserts `TODO(human)` markers for you to fill in. Explanatory adds Insights between steps. The defaults are still tuned for task closure, and almost nobody enables the learning setting for production work. The posture is available. It still has to be turned on.

A purpose-built tutor, with the posture engineered into the tool rather than left to the user's discipline, beat in-class active learning that used the same teaching practices: sequential scaffolding, pre-written step-by-step solutions to keep the model from inventing, personalised feedback, and self-pacing. Students learned more in less time. The result came from how the tutor was configured. Small changes inside the same tools, a setting flipped once or a hypothesis written before the paste, decide whether the person grows alongside the model or slowly loses skill.

[[wiki/Domains/AI & Tooling/The Right vs Wrong Way to Work With AI|The Right vs Wrong Way to Work With AI]] rests on the same principle: never ask for the answer; ask for the information that helps figure out the answer. It moves from feeling, to thought, to question. That page was compiled from late-2024 and early-2025 material. The principle holds. The specifics of that season may not.

## What to hand off and what to keep

Keep ownership of the parts that future judgment depends on. Not every part needs to be learned.

Clean handoff is a rule of thumb, not a measured split by task type. Good candidates: boilerplate, glue code, one-off scripts, familiar syntax lookup, small formatting transformations, and low-risk repetitive tasks. The handoff is appropriate when three conditions hold: the output does not affect future judgment much, the domain is already understood, and the cost of learning the detail exceeds its value.

Understanding becomes necessary in these cases: something breaks and needs diagnosing; the generated answer is plausible but wrong; the architecture has long-term consequences; a dependency, framework, or security requirement changes; the problem leaves the median path of problems already solved on GitHub, meaning the thousands of solved public examples a model saw in training; the code becomes part of a system other people depend on; the work justifies senior judgment. The off-median condition comes from practitioner consensus, not from a controlled study. In these cases, prompting around the problem is not enough. Enough understanding has to remain to steer, reject, debug, and migrate.

## Signs it is working and signs it is not

Good AI-assisted learning resembles an apprenticeship that runs faster than usual. Useful signs: a prediction lands before the ask; the answer changes or refines your model; the fix can be explained afterward; you know which approach was chosen over which; plausible but wrong output gets rejected; the next similar task feels easier; speed goes up without losing comprehension.

Warning signs: bugs vanish and your model does not change; what was merged cannot be explained; every unfamiliar task starts with paste-and-wait; the AI frames the problem first; code is accepted because tests passed; the session feels faster, and you are less capable without the tool. That last sign matches the July 2025 developers, who were slower with AI and still reported a speedup.

## What the evidence shows and what it does not

The idea that the effort is where the learning happens has a name: desirable difficulty. It is effort during learning that feels like it slows acquisition and in fact produces retention and transfer. The word desirable matters. Difficulty that does not produce encoding is wasted capacity. [[wiki/Dimensions/Self-Regulation|Self-Regulation]] names desirable difficulty as one of its three requirements, next to metacognition and learning theory. [[wiki/Concepts/Cognitive Load & What Mental Effort Is Trying to Cue|Cognitive Load]] supplies the test for which effort to keep: high effort with progress is productive deep processing, so continue; high effort with confusion is working-memory overload, so narrow the scope.

Cognitive debt is mental effort saved now and repaid later as weaker understanding. A 2025 essay-writing study found the weakest EEG connectivity and the lowest sense of ownership in the LLM group, and those writers struggled to quote their own work. A later crossover showed LLM users moving to unaided writing under-engaged, and unaided writers moving onto the model showing higher recall. The paper is not peer-reviewed. The authors ask that it not be described as harm, damage, or as models making people stop thinking. The qualitative pattern is what can be taken from it.

Compounding across months is a hypothesis. Every cited study measures immediately, over two weeks, on single tasks, or over four months with eighteen of fifty-four completers. Nobody has tracked engineer capability across months of AI-assisted work.

The tutor result, in numbers: a crossover trial of one hundred and ninety-four students, an effect of around 0.63 standard deviations by linear regression and 0.73 to 1.3 by quantile, and a median time on task of 49 minutes against about 60 in class.

The evidence also limits the claim. The posture split in the engineer study is correlational. Early model access helps under time pressure. A purpose-built tutor can carry the posture better than user discipline. Not every task should be a lesson.

The cost of the posture: two or three sentences before the ask, a re-derivation that will not feel like doing work, and a setting that has to be turned on at every new surface. Signs that the posture is not holding: two sessions in a row that start with paste-and-wait; a merge that cannot be explained; feeling faster with the tool and less capable without it, with the rebuild skipped. The checkable expectation is whether the last generated move rebuilds closed-book. Fail that twice in a week and the debt loop is the one running.

The measure is whether the move can be rebuilt with the model closed. How the afternoon felt is not the measure.

## How to practice this

1. Before asking for a fix, write two or three sentences on what you think is happening. Then ask the model to check the hypothesis, explain what you are missing, and suggest the smallest fix. Notice whether the answer changes or refines your model; that is one of the signs the learning is happening.
2. With time to think, ask how it works, what alternatives exist, and what tradeoffs matter, and say no code yet. Against a deadline, open the model first and put the re-derivation on the calendar for after the ship. Notice afterward whether you can say which approach was chosen over which.
3. Read generated code as if a fast junior engineer wrote it. Ask whether it fits the architecture, what it assumes, what failure case is missing, and what it changed unasked. Notice whether you would merge it if tests passed but the design felt wrong.
4. After a useful solution, ask what concepts it used and what you would need to design it yourself. Notice whether you can explain the fix afterward.
5. Every so often, recreate a generated function, pattern, or fix from scratch without looking. If you cannot rebuild it, the code shipped without the capability. Failing this twice in a week means the debt loop is the one running.
6. In Claude Code, run `/config`, then Output style, and pick Learning or Explanatory. Learning inserts `TODO(human)` markers for you to fill in, and Explanatory adds Insights between steps. Notice that the setting has to be turned on again at every new surface.

## Related pages

- [[wiki/Learning Craft/AI-Assisted Learning Workflow|AI-Assisted Learning Workflow]]: the positive counterpart: where the machine may accelerate (resource discovery, format conversion, quizzing, note cleanup) while schema formation stays with the learner.
- [[wiki/Dimensions/Self-Management/Kolbs Experiential Cycle|Kolb's Experiential Cycle]]: the four-stage experience → reflection → abstraction → experimentation loop; hypothesis-then-test is that cycle inside an AI session.
- [[wiki/Dimensions/Self-Regulation|Self-Regulation]]: in-session monitoring and steering; names metacognition, desirable difficulty, and learning theory.
- [[wiki/Concepts/Are You Thinking, or Just Consuming|Are You Thinking, or Just Consuming?]]: the same visible behaviour is active or passive depending on cognition.
- [[wiki/Concepts/Cognitive Load & What Mental Effort Is Trying to Cue|Cognitive Load]]: mental effort as a signal, with the table that separates productive friction from overload.
- [[wiki/Domains/AI & Tooling/The Right vs Wrong Way to Work With AI|The Right vs Wrong Way to Work With AI]]: posture over tool; ask for the information that helps figure out the answer, not the answer.

## Open questions

Which parts of the current AI workflow improve judgment, and which only close tasks?

Which recurring tasks can be delegated without capability loss, and which are too load-bearing to outsource?

Before a model opens on an unfamiliar topic, spend five to ten minutes writing the questions the session should answer. Did the model's first reply change those questions, or replace them?

Should every AI-assisted session end with a short "what did I learn?" note, and if so, where does that note live? The rebuild is the preferred check; the filing question is still open.

## Sources

- Addy Osmani, "Don't Outsource the Learning," 16 May 2026. <https://addyosmani.com/blog/dont-outsource-learning/>
- Addy Osmani, "Comprehension Debt: the hidden cost of AI generated code," 14 March 2026. <https://addyosmani.com/blog/comprehension-debt/>
- Addy Osmani, "Cognitive Surrender," 5 May 2026. <https://addyosmani.com/blog/cognitive-surrender/>
- Anthropic, "AI assistance and coding skills," 29 January 2026. <https://www.anthropic.com/research/AI-assistance-coding-skills>
- Zhi, Kumar & Lee, "Investigating the Effects of LLM Use on Critical Thinking Under Time Constraints," CHI 2026. <https://arxiv.org/html/2603.08849v1>
- Kosmyna et al., "Your Brain on ChatGPT: Accumulation of Cognitive Debt when Using an AI Assistant for Essay Writing Task," 10 June 2025. <https://arxiv.org/abs/2506.08872>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity," 10 July 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- Kestin, Miller, Klales, Milbourne & Ponti, "AI tutoring outperforms in-class active learning," *Scientific Reports*, June 2025. DOI 10.1038/s41598-025-97652-6. <https://pmc.ncbi.nlm.nih.gov/articles/PMC12179260/>
- Google, Guided Learning, 6 August 2025. <https://blog.google/outreach-initiatives/education/guided-learning/>
- Engadget, Anthropic Learning Mode to regular users and Claude Code, 14 August 2025. <https://www.engadget.com/ai/anthropic-brings-claudes-learning-mode-to-regular-users-and-devs-170018471/>
- Claude Code output styles, checked 13 August 2026. <https://code.claude.com/docs/en/output-styles>
