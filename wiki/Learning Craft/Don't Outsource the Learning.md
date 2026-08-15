---
title: "Don't Outsource the Learning"
type: concept
status: developing
created: 2026-05-23
updated: 2026-08-14
written-by: grok
model: grok
source-count: 11
tags:
  - ai-use
  - learning
  - cognitive-offloading
flag-reason: "cluster held — Learning Craft; opener is owner-picked Opus A. Do not promote."
---

# Don't Outsource the Learning

This page is about the part of a task you were supposed to learn from, and what happens to it when a model does that part instead. The mechanism is unglamorous: the friction the tool removes is often exactly where the understanding was being built, so the work still gets finished and nothing arrives in you. Which side you end up on is decided by how you use the tool rather than by which tool it is. The posture that holds is a sequence — form your own hypothesis before you ask, request the reasoning before the finished thing, and read what comes back the way you would read a colleague's work rather than accepting it.

A broader workflow that uses AI without handing over schema formation — the internal structure that decides what is relevant, what groups with what, and what matters — lives at [[wiki/Learning Craft/AI-Assisted Learning Workflow|AI-Assisted Learning Workflow]]: Goal → Research → Priming → Comprehension → Implementation, with resource discovery, format conversion, quizzing and note cleanup available to the machine, and relevance, organisation and schema formation staying with the learner.

## Two loops, two metrics

The same model, on the same bug, produces two different sessions. The difference is not whether AI is used. It is whether AI replaces the learning loop or accelerates it.

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

The divergence is the reconstruction. One loop has it. The other does not.

A January 2026 randomised trial put fifty-two mostly junior engineers on the same unfamiliar Python library, one group with AI and one without. The AI-assisted group scored 50% on the follow-up quiz. The manual group scored 67%. The largest gap was on debugging. Completion speed did not differ — about two minutes, not statistically significant — which is the end of the defence that the cheaper comprehension was bought with speed.

Seven interaction patterns were annotated from screen recordings after the fact. Low-scoring patterns averaged under 40%: AI delegation, progressive AI reliance, iterative AI debugging. High-scoring patterns averaged 65% or higher: generation-then-comprehension, hybrid code-explanation, conceptual inquiry. Only the AI-versus-no-AI assignment was randomised. The posture split was observed after the study ended, so reverse causation is not ruled out — engineers who already understood more may have been the ones asking conceptual questions. The sample is small, the quiz was immediate, the cohort was mostly junior, and the result is about learning a new skill, not exercising an established one. AI can sharpen understanding rather than erode it. The sharpening needs active learning intent, and that intent needs a workflow, because the default is built to close tasks.

Every session has two outcomes: what shipped, and what improved in the operator. The first is easy to see. The second is easy to ignore. Code can compile, tests can pass, and the issue can close with the mental model unchanged. Over a single session that is fine. Over months the gap is the working hypothesis — no study has tracked engineer capability across months of AI-assisted work, and the claim is stated as that.

The session-ending check is still the right question: **Did I learn anything today, or did I only close issues?** It is not a reliable instrument on its own. A July 2025 trial gave sixteen experienced open-source developers two hundred and forty-six real issues from their own repositories, randomised to AI-allowed or AI-disallowed. Developers took 19% longer with AI. They had forecast a 24% speedup. After living through the slowdown they still believed AI had sped them up by 20%. Self-assessment missed by roughly thirty-nine points, in the direction of the wish. The shipping metric is not reliably visible either. The check that cannot be talked away is whether the generated move can be rebuilt with the tool closed.

A healthy workflow does not require every task to be a lesson. Some work should be delegated cleanly. The risk appears when issue closure is the only metric for long enough that calibration quietly erodes — that erosion is the same hypothesis, not a measured longitudinal finding. [[wiki/Concepts/Are You Thinking, or Just Consuming|Are You Thinking, or Just Consuming?]] is the general form of the same split: the visible behaviour looks identical, and active means comparing, predicting, explaining, retrieving, deciding or building.

## The sequence, with the switch

The fix is not to use AI less. It is to restructure the prompting sequence. Friction the product removes — prediction, explanation, critique, reconstruction — is also where comprehension was being built. Some of that struggle should remain. Which struggle is a question for later.

**Form a hypothesis first.** Before a fix is requested, two or three sentences get written on what seems to be happening. The model's answer becomes a test of that model rather than a replacement for it.

> I think the bug is caused by X because Y. Check my hypothesis, explain what I'm missing, then suggest the smallest fix.

Hypothesis-then-test is not an arbitrary prompting trick. It is [[wiki/Dimensions/Self-Management/Kolbs Experiential Cycle|Kolb's Experiential Cycle]] running inside the session: experience, reflection, abstraction, the next attempt.

**Ask for explanation before code when there is time to deliberate.** On unfamiliar territory, mechanism and tradeoffs first.

> Explain how this works, what alternatives exist, and what tradeoffs matter. Don't write code yet.

The inherited rule treated that order as a law. A 2026 timing study of three hundred and ninety-three people deciding a contamination case found the effect reverses. With thirty minutes available, early model access scored 4.51 against 5.77 for late access. With ten minutes, early access scored 3.80 against 1.86 for late access, and working independently first was the worst thing a time-pressed participant could do. Time to think: the frame is built before the model opens. Against a deadline: the model opens first, and the re-derivation is put on the calendar for after the ship.

Conceptual inquiry is not the only high-scoring route. Generation-then-comprehension and hybrid code-explanation sat in the same cluster at or above 65%. Letting the model generate and then doing the work of understanding the output scored with asking conceptually first. Readers who cannot sustain explanation-before-code have two other routes that already measured fine.

**Treat output like a pull request.** Generated code is reviewed as if it came from a fast junior engineer — read, question the assumptions, look for what it broke, and decline it if the design is wrong even when the tests pass.

1. Does this fit the architecture?
2. What assumption is it making?
3. What failure case is missing?
4. What did it change that I didn't ask for?
5. Would I merge this if tests passed but the design felt wrong?

Passing tests are useful. They are not a substitute for judgment. The fifth question names the substitution the page is about.

A sixth question is not first-person. *Who else here understands this?* Comprehension debt is the growing gap between how much code exists in a system and how much of it any human being genuinely understands. Unlike technical debt it produces no friction signal — tests pass, metrics stay clean — so it accumulates while confidence holds. A junior can now generate faster than a senior can critically audit, which is the review process that used to distribute understanding breaking down.

**Re-derive periodically.** A generated function, pattern, or fix is recreated from scratch without looking. Failure to rebuild the move is the signal that code shipped without the capability. This does not need to happen on every task. It needs to happen often enough that the mental model cannot hide, because it is the only check on the page whose result cannot be talked away.

**Ask what concepts were used.** After a useful generated solution:

> What concepts did this solution use, and what would I need to understand to design this myself next time?

One extra prompt turns a finished task into a learning asset.

## Posture can be a setting

Willpower is no longer the only instrument. Three labs shipped a learning posture in six weeks in 2025. Claude Code today ships Explanatory and Learning output styles: `/config`, then Output style, or `"outputStyle": "Learning"` in the local settings file. Learning inserts `TODO(human)` markers to fill in. Explanatory adds Insights between steps. Defaults are still tuned for task closure, and almost nobody enables the learning setting for production work. The posture is available. It still has to be turned on.

A purpose-built tutor, with the posture engineered into the tool rather than left to the user's discipline, beat in-class active learning that used the same pedagogical practices: sequential scaffolding, pre-written step-by-step solutions to keep the model from inventing, personalised feedback, self-pacing. Students learned more in less time. The configuration is the finding. Small posture shifts inside the same tools — a setting flipped once, a hypothesis written before the paste — are what separate growth alongside the model from quiet loss of ground.

[[wiki/Domains/AI & Tooling/The Right vs Wrong Way to Work With AI|The Right vs Wrong Way to Work With AI]] overlaps on the same principle: never ask for the answer; ask for the information that helps figure out the answer. Feeling to thought to question. That page was compiled from late-2024 and early-2025 material; the principle holds and the specifics of that season may not.

## What to keep, what to hand off

Keep ownership of the parts that future judgment depends on. The rule is not "always learn everything."

Clean delegation is a heuristic, not a measured split by task type. Good candidates: boilerplate, glue code, one-off scripts, familiar syntax lookup, small formatting transformations, low-risk repetitive tasks. The conditions that make that handoff appropriate: the output does not affect future judgment much, the domain is already understood, and the cost of learning the detail exceeds the value.

Comprehension becomes load-bearing when something breaks and needs diagnosing; when the generated answer is plausible but wrong; when the architecture has long-term consequences; when a dependency, framework, or security requirement changes; when the problem leaves the median solved-on-GitHub path — the thousands of already-solved public examples a model saw in training; when the code becomes part of a system other people depend on; when the work justifies senior judgment. Off-median is practitioner consensus, not a controlled finding. In those cases prompting around the problem is not enough. Enough understanding has to remain to steer, reject, debug, and migrate.

Good AI-assisted learning feels like accelerated apprenticeship. Useful signs: a prediction lands before the ask; the answer changes or refines the model; the fix can be explained afterward; one approach is known to have been chosen over another; plausible but wrong output can be rejected; the next similar task feels easier; speed increases without losing comprehension.

Warning signs: bugs vanish and the model does not change; what was merged cannot be explained; every unfamiliar task starts with paste-and-wait; the AI frames the problem first; code is accepted because tests passed; the session feels faster and less capable without the tool. That last sign is the one the July 2025 developers were living inside while still reporting a speedup.

## What is actually known

"Friction is where the learning lives" is a named idea: desirable difficulty — effort during learning that feels like it is slowing acquisition and is in fact what makes retention and transfer. The qualifier is load-bearing. Difficulty that does not produce encoding is wasted capacity. [[wiki/Dimensions/Self-Regulation|Self-Regulation]] already names desirable difficulty as one of its three requirements, next to metacognition and learning theory. [[wiki/Concepts/Cognitive Load & What Mental Effort Is Trying to Cue|Cognitive Load]] supplies the test the page otherwise lacked: high effort with progress is productive deep processing and continues; high effort with confusion is working-memory overload and the scope narrows.

Cognitive debt is mental effort saved now and repaid later as weaker understanding. A 2025 essay-writing study found the weakest EEG connectivity and the lowest ownership in the LLM arm, and those writers struggled to quote their own work. A later crossover showed LLM users moved to unaided writing under-engaged, and unaided writers moved onto the model showing higher recall. The paper is not peer-reviewed. The authors ask that it not be described as harm, damage, or as models making people stop thinking. The qualitative pattern is what this page uses.

Compounding across months remains a hypothesis. Every cited study measures immediately, over two weeks, on single tasks, or over four months with eighteen of fifty-four completers. Nobody has tracked engineer capability across months of AI-assisted work.

The tutor result, stated as numbers: a crossover trial of one hundred and ninety-four students, effect around 0.63 standard deviations by linear regression and 0.73 to 1.3 by quantile, median time on task 49 minutes against about 60 in class.

The case against this page is already in the evidence. The posture split in the engineer study is correlational. Early model access helps under time pressure. A purpose-built tutor can carry the posture better than user discipline. Not every task should be a lesson. The price is two or three sentences before the ask, a re-derivation that will not feel like doing, and a setting that has to be turned on at every new surface. Quit signals: two sessions in a row that start paste-and-wait; a merge that cannot be explained; faster-and-less-capable without the tool, and the rebuild skipped. The checkable expectation is whether the last generated move rebuilds closed-book. Fail that twice in a week and the debt loop is the one running.

The instrument is not a feeling about the afternoon. It is whether the move can be rebuilt with the model closed.

## Links into the knowledge base

- [[wiki/Learning Craft/AI-Assisted Learning Workflow|AI-Assisted Learning Workflow]] — the positive counterpart: where the machine may accelerate (resource discovery, format conversion, quizzing, note cleanup) while schema formation stays with the learner.
- [[wiki/Dimensions/Self-Management/Kolbs Experiential Cycle|Kolb's Experiential Cycle]] — the four-stage experience → reflection → abstraction → experimentation loop; hypothesis-then-test is that cycle inside an AI session.
- [[wiki/Dimensions/Self-Regulation|Self-Regulation]] — in-session monitoring and steering; names metacognition, desirable difficulty, and learning theory.
- [[wiki/Concepts/Are You Thinking, or Just Consuming|Are You Thinking, or Just Consuming?]] — the same visible behaviour is active or passive depending on cognition.
- [[wiki/Concepts/Cognitive Load & What Mental Effort Is Trying to Cue|Cognitive Load]] — mental effort as a signal, with the table that separates productive friction from overload.
- [[wiki/Domains/AI & Tooling/The Right vs Wrong Way to Work With AI|The Right vs Wrong Way to Work With AI]] — posture over tool; ask for the information that helps figure out the answer, not the answer.

## Open Questions

Which parts of the current AI workflow improve judgment, and which only close tasks?

Which recurring tasks can be delegated without capability loss, and which are too load-bearing to outsource?

Before a model opens on an unfamiliar topic, five to ten minutes spent writing the questions the session should answer. Did the model's first reply change those questions, or replace them?

Should every AI-assisted session end with a short "what did I learn?" note — and if so, where does that note live? The rebuild is the preferred check; the filing question is still open.

## Sources

- Addy Osmani, "Don't Outsource the Learning," 16 May 2026. <https://addyosmani.com/blog/dont-outsource-learning/>
- Addy Osmani, "Comprehension Debt — the hidden cost of AI generated code," 14 March 2026. <https://addyosmani.com/blog/comprehension-debt/>
- Addy Osmani, "Cognitive Surrender," 5 May 2026. <https://addyosmani.com/blog/cognitive-surrender/>
- Anthropic, "AI assistance and coding skills," 29 January 2026. <https://www.anthropic.com/research/AI-assistance-coding-skills>
- Zhi, Kumar & Lee, "Investigating the Effects of LLM Use on Critical Thinking Under Time Constraints," CHI 2026. <https://arxiv.org/html/2603.08849v1>
- Kosmyna et al., "Your Brain on ChatGPT: Accumulation of Cognitive Debt when Using an AI Assistant for Essay Writing Task," 10 June 2025. <https://arxiv.org/abs/2506.08872>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity," 10 July 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- Kestin, Miller, Klales, Milbourne & Ponti, "AI tutoring outperforms in-class active learning," *Scientific Reports*, June 2025. DOI 10.1038/s41598-025-97652-6. <https://pmc.ncbi.nlm.nih.gov/articles/PMC12179260/>
- Google, Guided Learning, 6 August 2025. <https://blog.google/outreach-initiatives/education/guided-learning/>
- Engadget, Anthropic Learning Mode to regular users and Claude Code, 14 August 2025. <https://www.engadget.com/ai/anthropic-brings-claudes-learning-mode-to-regular-users-and-devs-170018471/>
- Claude Code output styles, checked 13 August 2026. <https://code.claude.com/docs/en/output-styles>
