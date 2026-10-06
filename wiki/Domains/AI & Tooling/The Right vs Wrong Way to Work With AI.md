---
title: "The Right vs Wrong Way to Work With AI"
type: concept
status: developing
created: 2026-05-14
updated: 2026-09-27
method: outline-2026-09-27
prose-model: fable
written-by: opus
model: grok
source-count: 6
description: "Which uses of AI while studying skip the thinking that builds knowledge, which uses keep it, and how to phrase a question to a model."
tags:
  - ai-use
  - cognitive-offloading
  - higher-order
  - learning
  - meta-strategy
---

# The Right vs Wrong Way to Work With AI

The wrong way to work with AI while studying is to let the AI model do the summarising, grouping and connecting, which is the thinking that would have built the knowledge in your head. The right way keeps that thinking with you and uses the model for chores, checks and pointed questions. The difference decides whether you end a study session understanding the topic or holding a tidy explanation you cannot use.

- Treat AI like a web search, a place to fill a specific gap.
- Asking AI to summarise and connect a topic skips the learning.
- A tidy AI answer feels like understanding without being it.
- Good uses: a list of key terms, testing your idea, finding gaps.
- Ask what you are missing, never for the finished answer.
- Do not ask for analogies on a topic you cannot yet judge.
- Models agree when pushed, so you make the final call.

## Why the wrong way fails

A person learning a trade from a master knows why each lesson matters and gets the lessons in small amounts. A student with a lecture and twenty pages of reading gets a large amount at once with little sense of why, and the brain struggles to sort it. The effort of sorting, grouping, comparing and deciding what matters is the work that builds lasting knowledge. When a model does that work, the student is left memorising the model's version, which is easier than the raw material and much weaker than a structure built in their own head.

- Summary, grouping, connections, importance: each is thinking handed away.
- It is like paying someone else to lift weights for you.
- Models are weakest on niche, new and complicated material.
- They also invent facts and sources that look real.

## What the studies show

Several recent studies point the same way. An Anthropic study of programmers found that they finished tasks at the same speed with and without AI help, and that they understood the code less afterwards when they had used AI. Inside that group, the people who asked conceptual questions kept most of their understanding, and the people who pasted code kept little. A study presented at the CHI 2026 conference found that when the AI comes in matters more than how much it is used.

- Anthropic, 2026: understanding scored 50% with AI help, 67% without.
- Conceptual askers scored above 65%, copy-pasters below 40%.
- MIT Media Lab: 83% of AI users could not quote their own line.
- CHI 2026: AI used at the start framed the whole problem.
- Learning modes in mainstream assistants see almost no use for real work.

## Where AI helps

A short list of uses keeps the thinking with the learner. At the start of a topic, collecting the key terms is slow work that teaches little, so a model can hand over a list of twenty or thirty terms, and you then work out how they fit together yourself. Once you have a working picture, you can state how you think two ideas relate and ask whether that is right. After you can recall the topic, you can write down everything you know and ask the model, acting as an expert, where the gaps and errors are.

```
start      model lists key terms ─> you build the structure
middle     you state a guess     ─> model checks it
late       you write all you know ─> model finds the gaps
```

- Checking code for errors saves days on a large project.
- A model can explain how someone else solved a problem.
- It can write practice questions, especially easy and middle ones.
- For simple facts, the book or a search is often faster.

## How to ask

The useful question asks for the fact that sits just before the answer, and leaves the final step to you. "Why is this important?" asks the model to place the idea among all the others, and that placing is the structure you were meant to build. "I think this affects that in this way. Is that right?" asks for one fact and leaves the placing to you. A detective works the same way, asking how a suspect could be in two places at once instead of asking who did it.

- Imagine a strict mentor who judges the quality of each question.
- Follow the feeling that something does not quite fit.
- Ask research tools for sources, since model suggestions skew to famous work.
- Skip analogies on new topics, since wrong ones feel right too.
- Skip ranking by importance, since it plants the model's frame.
- Skip feedback on written reflections, since models judge them poorly.

## Related pages

- [[wiki/Learning Craft/AI-Assisted Learning Workflow|AI-Assisted Learning Workflow]]: the positive counterpart; five-step loop; audit: did the model accelerate the learning, or perform it
- [[wiki/Concepts/The Shortcut Problem|The Shortcut Problem]]: the parent mechanism; AI offloading is one instance
- [[wiki/Concepts/Understanding Bottleneck|Understanding Bottleneck]]: thinking can be outsourced, understanding cannot
- [[wiki/Domains/AI & Tooling/LLM Tool Use|LLM Tool Use]]: tool-use layer; grounded versus ungrounded; check the link, not the reference list
- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]]: professional-work analogue: keep judgment human
- [[wiki/Dimensions/Retrieval/Spaced Interleaved Retrieval|Spaced Interleaved Retrieval]]: retrieval theory behind dump-then-gap-check
- [[wiki/Dimensions/Deep Processing/Bear Hunter System|Bear Hunter System]]: encoding workflow the off-limits list is protecting
- [[wiki/Domains/AI & Tooling/Essential AI Skills 2026|Essential AI Skills 2026]]: ladder sibling; thematic adjacency, not mechanism
- [[wiki/Systems/AI & Agentic Systems/Automatic and Deliberate Work with AI|Automatic and Deliberate Work with AI]]: automatic work is cheap; deliberate work is where errors concentrate
- [[wiki/Learning Craft/Don't Outsource the Learning|Don't Outsource the Learning]]: empirical sibling; posture, not tool, drives comprehension
- [[wiki/Concepts/Are You Thinking, or Just Consuming|Are You Thinking, or Just Consuming]]: passive-versus-active posture under the level claim
- [[wiki/Concepts/Cognitive Load & What Mental Effort Is Trying to Cue|Cognitive Load & What Mental Effort Is Trying to Cue]]: effort not spent now is understanding not built
- [[wiki/Dimensions/Deep Processing/Prestudy|Prestudy]]: keyword seeding is a prestudy move
- [[wiki/Dimensions/Deep Processing/Aim|Aim]]: those two questions are the heart of the method when asked of oneself and the material
- [[wiki/Concepts/Social Media - Curvilinear Design & the Theft of Time|Social Media - Curvilinear Design & the Theft of Time]]: tools optimised for ease degrade capacity across habitual use, not in any one session

## Sources

Compiled from recorded coaching sessions, late 2024 / early 2025. Models, tools, and some specifics (citation failure, source-finding, reflective-feedback quality) have shifted. The public studies below are the reachable evidence.

- [Evaluating the impact of AI assistance on developer productivity and competency](https://www.anthropic.com/research/AI-assistance-coding-skills). Anthropic, early 2026. Same task speed; comprehension 50% vs 67%; inside the model group, conceptual questions >65%, copy-paste <40%.
- [Your Brain on ChatGPT](https://www.media.mit.edu/publications/your-brain-on-chatgpt/). MIT Media Lab. Connectivity scaled down with every layer of support; 83% of model users could not quote a single line of what they had just written.
- [When AI Frames the Problem](https://arxiv.org/html/2603.08849v1). CHI 2026. Access at the start framed the whole problem; order mattered more than amount.
- [Learning-mode features in mainstream assistants](https://www.engadget.com/ai/anthropic-brings-claudes-learning-mode-to-regular-users-and-devs-170018471/). Reported adoption for real production work near zero, filed as "for students."
- [How I use LLMs](https://www.youtube.com/watch?v=EWvNQjAaOHw). Andrej Karpathy, 2025-02-28. Search token → pages into context → answer from that text, usually with citations to check.
- [How To Learn So Fast That AI Can Never Replace You](https://www.youtube.com/watch?v=-Xc_ExgwLs8). Public video, 2026-06-13. Same position, freely reachable.
- Sharma, M., et al. Towards Understanding Sycophancy in Language Models. [arXiv:2310.13548](https://arxiv.org/abs/2310.13548). Agreement bias on "is that right?"
