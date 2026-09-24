---
title: "Agentic Engineering"
type: hub
status: developing
created: 2026-05-02
updated: 2026-09-24
method: outline-2026-09-24
prose-model: fable
written-by: fable
model: grok
source-count: 10
description: "How a person keeps the quality bar when AI agents write the code: the spec, the checks and the sign-off, and where the section's pages sit."
tags:
  - llm
  - agents
  - engineering
  - software-3
  - ai-workflows
  - agentic-engineering
---

# Agentic Engineering

Agentic engineering is building software with AI agents, programs that run an AI model in a loop to carry out a job, while a person stays answerable for the result. Agents write more code than anyone reads line by line, so agentic engineering settles what the person still does: writing down what to build (the spec), running checks, and signing off.

## Core takeaways

- Vibe coding lets anyone describe an app in plain words and get one that runs. Agentic engineering keeps the old quality bar for professional software while agents make the work faster.
- The person keeps the spec, the architecture, the taste and the review. The agent takes the syntax, the API details and the repetitive steps.
- Models are strong where the output can be checked by a machine, such as code and maths, and weak where it cannot. One model can refactor a codebase of 100,000 lines and still give a wrong answer to a simple everyday question.
- A gap in the spec gets filled by the agent's own scheme. An agent once linked purchases to users by matching the email on the payment account with the email on the login account, which can differ, because no user id had been specified.
- Proof comes from checks that ran: a build, tests, a picture of the running app. An agent's account of what it did is no proof.
- In a 2025 METR study, 16 experienced developers took 19% longer on 246 tasks in their own repositories with AI allowed, and afterwards believed they had gone 20% faster, so a felt speedup is no measure.
- Learn one layer below the one you work at. Every abstraction leaks, and the agent's code gets fixed there.

## How it works

- Write the spec with the agent before any code: what to build, what must not change, the patterns to follow, the edge cases, and how the result will be checked.
- Hand the agent one bounded job of a few steps with a clear finish. Big work is cut into such jobs.
- The agent builds, and the person runs the build and the tests and reads the change for edits that were not asked for.
- Sign-off means the person understands the consequences and puts a name under them, or wrote the check that stands in for reading. It does not require reading every line.
- A correction the person has made twice goes into a file the agent reads or into a check that fails the build.
- Never give one agent all three of: private data, content from strangers, and a way to send data out. A model follows instructions it finds in content and cannot tell them from the instructions of the person running it.
- On the owner's own setup no agent merges code. A Cursor Cloud Agent writes application code on its own isolated machine and the owner merges the change himself.

```
spec ---> agent builds ---> checks run ---> person signs
               ^                |
               +---- fails -----+
```

## What the section holds

- Rules that stay true, in one line each: Agentic Engineering, Condensed.
- The looser practice, and apps made from one description: Vibe Coding, A Return to Code.
- Engineers judged on the machinery they build to make the output, and the size of the change: The AI Industrial Revolution.
- The person's part and its limits: Understanding Bottleneck, A Motorcycle for the Mind, Working With a Model That Cannot Remember, Interleaving for Complex Problem Solving.
- The files an agent reads: Context Engineering, Agent-Native Infrastructure.
- Which computer runs the job: Agent Glossary, Picking a computer, Current Agentic LLM Stack, Grok Bot Primer, Using Grok Bot, Grok Bot Galaxy, Cursor Cloud Agents.
- Checking the work: pstack, Poteto Paved Path, Red Teaming, Applied Critical Thinking, The Writing Pipeline.
- Sending cheap work to cheap models: Automatic and Deliberate Work with AI, Essential AI Skills 2026.

## Related pages

- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering, Condensed|Agentic Engineering, Condensed]]: rules that stay true versus tactics tied to a date; holds the one-line rules, which this hub does not copy
- [[wiki/Systems/AI & Agentic Systems/Vibe Coding|Vibe Coding]]: the practice that lets more people build at all; which work goes to disposable practice and which to durable practice
- [[wiki/Concepts/The AI Industrial Revolution|The AI Industrial Revolution]]: the factory framing and the claimed size of the gap; the waste-tokens boundary; the case against that this hub used to lack
- [[wiki/Dimensions/Deep Processing/Interleaving for Complex Problem Solving|Interleaving for Complex Problem Solving]]: the seven concrete interleaving moves this hub extends
- [[notes/index|notes/index.md]]: vault entry point, a hand-maintained list of hubs and doctrine pages
- [[wiki/Systems/AI & Agentic Systems/Current Agentic LLM Stack|Current Agentic LLM Stack]]: the stack in current use, with three agents split by kind of work and nothing paid per token
- [[wiki/Systems/AI & Agentic Systems/Agent Glossary|Agent Glossary]]: names for the agent loop, the environment it runs in, and the chat window; when to use each product
- [[wiki/Systems/AI & Agentic Systems/Grok Bot Primer|Grok Bot Primer]]: how this setup runs the standing teammate: one shared computer, helpers that only report, and an empty middle
- [[wiki/Systems/AI & Agentic Systems/Using Grok Bot|Using Grok Bot]]: standing watch after the laptop closes; public material only
- [[wiki/Systems/AI & Agentic Systems/Cursor Cloud Agents|Cursor Cloud Agents]]: overnight application code as a pull request on an isolated VM
- [[wiki/Systems/AI & Agentic Systems/pstack|pstack]]: a ban on calling a UI job done without a picture
- [[wiki/Systems/Agentic Workflows/Poteto Paved Path|Poteto Paved Path]]: a repeated correction moves into the files or into a check that fails the build, before you add more agents
- [[wiki/Systems/AI & Agentic Systems/Grok Bot Galaxy|Grok Bot Galaxy]]: which habits to keep in Grok Bot after the September 2026 public event, and which to refuse
- [[wiki/Systems/AI & Agentic Systems/Picking a computer|Picking a computer]]: which computer the next job opens
- [[wiki/Systems/AI & Agentic Systems/Working With a Model That Cannot Remember|Working With a Model Collaborator]]: measured operating rules for one model, covering price, the case against, when to quit, and a checkable test
- [[wiki/Systems/AI & Agentic Systems/Context Engineering|Context Engineering]]: natural language as the programming medium; the same artifacts as Software 3.0 objects
- [[wiki/Concepts/Agent-Native Infrastructure|Agent-Native Infrastructure]]: explains in full the four files this hub only names
- [[wiki/Concepts/Understanding Bottleneck|Understanding Bottleneck]]: covers in full the limit that understanding places on the work; this hub only names it
- [[wiki/Concepts/A Motorcycle for the Mind|A Motorcycle for the Mind]]: the claim that faster work still needs direction, and the layer-below idea, in their original form
- [[wiki/Concepts/A Return to Code|A Return to Code]]: the economics of apps built in one shot; the two practices stay separate
- [[wiki/Red Team/Red Teaming|Red Teaming]]: red-team output before trusting it
- [[wiki/Red Team/Applied Critical Thinking - Testing Frames|Applied Critical Thinking: Testing Frames]]: review passes of thirty seconds, three minutes, or thirty minutes
- [[wiki/Domains/AI & Tooling/Essential AI Skills 2026|Essential AI Skills 2026]]: diagram of tool versus agent; a capability scale with three levels
- [[wiki/Systems/AI & Agentic Systems/Automatic and Deliberate Work with AI|Automatic and Deliberate Work with AI]]: routing cheap work to cheap models; the practice this hub describes
- [[wiki/Systems/AI & Agentic Systems/The Writing Pipeline|The Writing Pipeline]]: stating verified and unverified claims with the same confidence

## Sources

- Andrej Karpathy, [From Vibe Coding to Agentic Engineering](https://www.youtube.com/watch?v=96jN2OCOfLs), AI Ascent 2026 (Sequoia Capital), 2026-04-29.
- Andrej Karpathy, [How I use LLMs](https://www.youtube.com/watch?v=EWvNQjAaOHw).
- Naval Ravikant et al., [The AI Industrial Revolution](https://nav.al/industrial), 2026-06-02.
- Anthropic, [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents).
- OpenAI, [Agents SDK](https://developers.openai.com/api/docs/guides/agents).
- HumanLayer, [12 Factor Agents](https://www.humanlayer.dev/blog/12-factor-agents).
- METR, [Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/), 2025-07-10.
- Simon Willison, [The lethal trifecta](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/), 2025-06-16.
- Google DORA, [2025 DORA Report](https://dora.dev/research/2025/dora-report/).
- Joel Spolsky, [The Law of Leaky Abstractions](https://www.joelonsoftware.com/2002/11/11/the-law-of-leaky-abstractions/), 2002-11-11.
