---
title: "Don't Outsource the Learning"
type: concept
status: developing
created: 2026-05-23
updated: 2026-09-27
method: outline-2026-09-27
prose-model: fable
written-by: opus
model: grok
source-count: 11
description: "How handing tasks to AI weakens a person's own skill, what the 2025 and 2026 studies found, and how to use AI and still learn."
tags:
  - ai-use
  - learning
  - cognitive-offloading
flag-reason: "cluster held: Learning Craft; opener is owner-picked Opus A. Do not promote."
---

# Don't Outsource the Learning

When a person lets an AI write the code or the essay, the task gets done but their own understanding stays where it was. Over months of small handoffs, what the person can do without the tool gets weaker, and nothing on any single day shows it. The fix is to change how the tool is asked, since the same tool used for questions instead of answers produced better understanding in a controlled trial.

- Getting the task done and learning the skill are separate results.
- Default AI tools are tuned to finish tasks quickly.
- Asking conceptual questions kept comprehension high in trials.
- Copying generated answers left comprehension lowest.
- Write your own guess before asking the model.
- Delegate throwaway work, and learn the parts you must maintain.

## What the studies found

Several studies from 2025 and 2026 point the same way. In a randomized trial that Anthropic ran in early 2026, engineers learned a new Python library with or without AI help. Both groups finished at about the same speed, but the AI group scored 50% on the follow-up quiz against 67% for the other group, with the widest gap on debugging. Inside the AI group, the people who asked conceptual questions scored above 65%, and the people who pasted generated code scored below 40%.

- Anthropic trial: same speed, lower quiz scores with AI.
- MIT essay study: 83% of chatbot users could not quote their essay.
- MIT essay study: brain connectivity was lowest in the chatbot group.
- CHI 2026: AI framing a task first led to worse decisions.
- METR 2025: experienced developers were slower with AI, while believing otherwise.
- Harvard physics: a tutor built to teach beat an active-learning class.

## Why the default loop fails

The usual loop is to paste an error into the tool, take the fix and ship it, and the struggle between problem and solution, where learning happens, drops out. The tools do not stop to ask what you think the problem is, because they are built and rewarded for finished tasks. Learning modes exist, such as Anthropic's learning mode for Claude, Google's Guided Learning and Claude Code's learning output style, but few people use them for real work. Someone on a team still has to understand the system in the cases below.

- Code breaks and someone has to debug it.
- The model gives a plausible, wrong answer.
- A framework update forces a migration.
- The problem is far from ones solved many times online.

## How to use AI and still learn

The changes are small and happen inside the same tools. The main one is order: form your own view first, then use the model to test it. The model can also teach what it just did, if it is asked to. Delegating boilerplate, glue code and one-off scripts costs little, because nobody needs to understand them later.

- Write two or three sentences on the likely cause first.
- Ask for an explanation and the trade-offs before any code.
- Turn on a learning mode in unfamiliar territory.
- Review output like a junior colleague's pull request.
- Rebuild a piece of generated code by hand now and then.
- Ask which concepts the model used and what to read.
- End a session by asking whether anything was learned.

## Related pages

- [[wiki/Learning Craft/AI-Assisted Learning Workflow|AI-Assisted Learning Workflow]]: the positive counterpart: where the machine may accelerate (resource discovery, format conversion, quizzing, note cleanup) while schema formation stays with the learner.
- [[wiki/Dimensions/Self-Management/Kolbs Experiential Cycle|Kolb's Experiential Cycle]]: the four-stage experience → reflection → abstraction → experimentation loop; hypothesis-then-test is that cycle inside an AI session.
- [[wiki/Dimensions/Self-Regulation|Self-Regulation]]: in-session monitoring and steering; names metacognition, desirable difficulty, and learning theory.
- [[wiki/Concepts/Are You Thinking, or Just Consuming|Are You Thinking, or Just Consuming?]]: the same visible behaviour is active or passive depending on cognition.
- [[wiki/Concepts/Cognitive Load & What Mental Effort Is Trying to Cue|Cognitive Load]]: mental effort as a signal, with the table that separates productive friction from overload.
- [[wiki/Domains/AI & Tooling/The Right vs Wrong Way to Work With AI|The Right vs Wrong Way to Work With AI]]: posture over tool; ask for the information that helps figure out the answer, not the answer.

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
