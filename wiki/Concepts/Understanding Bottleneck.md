---
title: Understanding Bottleneck
type: concept
status: seed
created: 2026-05-02
updated: 2026-09-27
method: outline-2026-09-27
prose-model: fable
source-count: 1
written-by: opus
model: grok
description: "Why the person directing AI agents is limited by their own understanding, and how Karpathy raises that limit with a personal wiki."
tags:
  - llm
  - learning
  - metacognition
  - agents
---

# Understanding Bottleneck

The understanding bottleneck is the limit that a person's own understanding puts on how much work they can direct AI agents to do. Andrej Karpathy described it in April 2026: agents can now do much of the thinking, and the person directing them still has to know what is being built and why. For anyone running agents, the slow step is getting enough of the subject into their own head to give good directions.

## Core takeaways

- Thinking can be handed to a model, understanding stays with the person.
- The person directing agents must know what to build and why.
- Details like exact function names can be left to the model.
- The fundamentals still have to be understood by the person.
- A personal knowledge base can help raise understanding.
- Karpathy allows that models may take this over within a few years.

## How it works

An agent can write and fix code faster than a person can read it. Each instruction the person gives still depends on what they understand: which features matter, how the data should be tied together, and when a result is wrong. Models are uneven, strong in areas like code and maths and weak in odd places, so the person has to stay close enough to catch the mistakes. The person's understanding limits the quality of what gets built.

- Handed off: API details, syntax and argument names.
- Kept: the design, the taste, and what to ask for.
- Kept: enough of the fundamentals to spot waste and error.

Karpathy's own example is knowing how tensors, the blocks of numbers a model computes with, share memory, without remembering the exact function that does it.

```
agents:  fast output ---+
                        v
person:  understanding -> directions -> what gets built
         (the slow step)
```

## How to raise the limit

Karpathy's answer is to use the models to help the person understand the material. He keeps a wiki built from the articles he reads and asks it questions. Each new view of the same material, a summary, a comparison or an answer to a question, gives him a new insight. He calls this generating synthetic data, meaning model-made text, over a fixed set of information, for his own brain.

- Build a knowledge base from articles as they are read.
- Ask it questions from several angles.
- Read the answers to learn the subject itself.

## Related pages

- [[wiki/Dimensions/Self-Regulation/Metacognition - The Control Layer|Metacognition: The Control Layer]]: the control layer, the steering that the bottleneck names, as distinct from producing output
- [[wiki/Systems/AI & Agentic Systems/Context Engineering|Context Engineering]]: the wiki-as-projections setup the conversation describes
- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]]: the work being directed; the understanding bottleneck is the human limit on that work

## Sources

- Andrej Karpathy in conversation, Sequoia AI Ascent 2026. *From Vibe Coding to Agentic Engineering*. https://www.youtube.com/watch?v=96jN2OCOfLs Published 2026-04-29. The line about outsourcing thinking but not understanding is a tweet he endorsed and could not name. The bottleneck wording, and the remark at 29:33 that understanding might get automated too, are his.
