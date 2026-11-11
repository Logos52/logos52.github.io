---
title: Understanding Bottleneck
type: concept
status: seed
created: 2026-05-02
updated: 2026-11-11
method: fresh-from-notes-2026-11-11
prose-model: fable
source-count: 1
written-by: grok
model: grok
tags:
  - llm
  - learning
  - metacognition
  - agents
wedge_reviewed: false
---

# Understanding Bottleneck

> Not yet reviewed by Wedge.

The understanding bottleneck is the limit that a person's own understanding places on how much work they can direct through AI agents. Agents can now take over much of the thinking and processing, including recall of small details, but a person can outsource thinking without outsourcing understanding. Someone still has to know what the work is for, why it is worth doing and how to steer the agents, and that knowledge has to get into one human head. Karpathy describes himself as becoming the bottleneck on exactly that knowledge. The response is to keep the fundamentals in mind while letting details go, and to use tools such as AI-built knowledge bases that help the person understand more.

## Core takeaways

- The understanding bottleneck is the limit that a person's own understanding places on how much work they can direct through AI agents.
- Agents can take over recall of small details, but a person can outsource thinking without outsourcing understanding.
- Someone still has to know what the work is for, why it is worth doing and how to steer the agents, and that knowledge has to get into one human head.
- Fundamentals stay with the person, because that is what lets them catch an agent's mistake.
- A personal wiki built from articles a person reads is one way to raise understanding under that limit.

## What agents do now and what the person keeps

Agents handle the details that once had to be memorized. A programmer working with arrays or tensors no longer needs to remember whether a function takes `keepdim` or `keepdims`, or whether an argument is called `dim` or `axis`. The agent has excellent recall for that kind of detail, much like a capable intern.

The work that stays with the person is the spec and the design. A person writes a detailed plan with the agent, oversees the top-level categories and checks that the design makes sense. Agents still make strange design choices, such as matching records across services by email address when emails can be arbitrary, and only a person who understands the system notices. Taste, engineering judgment and asking for the right things stay with the person, while the agents fill in the blanks.

Fundamentals stay with the person even when details go. In the tensor example, a programmer can forget the API names but still needs to know that a tensor has underlying storage with views onto it, so as to avoid copying memory needlessly. That kind of knowledge is what lets a person catch an agent's mistake.

## Where the line comes from

A person can outsource thinking without outsourcing understanding. Someone still has to know what the work is for, why it is worth doing and how to steer the agents, and that knowledge has to get into one human head. Directing the work is itself limited by understanding. A good director has to grasp the goal and the reasons for it, and language models do not yet excel at understanding. The person therefore remains uniquely in charge of it, which is why Karpathy says he is becoming the bottleneck.

## A personal wiki as one way to work under the limit

Tools that raise understanding attack the bottleneck directly. One example is a personal wiki that a language model builds up from articles a person reads, which they can then question. Each new view of the same information produces fresh insight, so the wiki works like a set of prompts for generating new angles on a fixed body of material.

## How to practice this

- When handing work to an agent, write down the spec, the goal and the fundamentals you still need to know in order to catch a mistake.
- After reading an article, put it into a personal wiki you can question, and look at the same material from a new angle.

## Related pages

- [[wiki/Concepts/Agent-Native Infrastructure|Agent-Native Infrastructure]]: the other side of the same talk, on making tools easier for agents to use.
- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]]: the working practice of directing agents.
- [[wiki/Dimensions/Self-Regulation/Metacognition - The Control Layer|Metacognition: The Control Layer]]: watching and steering one's own understanding.

## Open questions

- How does a person decide which fundamentals to keep while handing details to an agent?
- How does a personal knowledge base change what a reader understands from an article?
- How does running more agents change the kind of understanding a person needs?

## Sources

- Andrej Karpathy in conversation with Stephanie Zhan, "From Vibe Coding to Agentic Engineering", Sequoia Capital, AI Ascent 2026, <https://www.youtube.com/watch?v=96jN2OCOfLs>. Paraphrased, including one line he attributes to a tweet.
