---
title: "Agentic Engineering"
type: hub
status: developing
created: 2026-05-02
updated: 2026-09-27
method: outline-2026-09-27
prose-model: fable
written-by: opus
model: grok
source-count: 10
description: "How a person keeps the quality bar when AI agents write the code, and where each page of the section sits."
tags:
  - llm
  - agents
  - engineering
  - software-3
  - ai-workflows
  - agentic-engineering
---

# Agentic Engineering

# Agentic Engineering

Agentic engineering is building software with AI agents, programs that run an AI model in a loop until a job is done, while a person stays answerable for the result. An agent writes more code than anyone reads line by line, so the practice settles what the person still does: write down what to build, called the spec, run checks, and sign off.

## Takeaways

- Agent-written code meets the same standard as any professional code.
- The agent writes the code, and the person decides what to build.
- Models are strong where a machine can check the output, like code.
- A gap in the spec gets filled by a choice the agent makes alone.
- Proof is a build, a test or a screenshot.
- Measure the speed-up instead of trusting how fast it felt.
- Agent code is often bloated, and the model resists simplifying it.

## How it works

The person and the agent pass the work back and forth in a loop. Before any code, the person writes the spec with the agent: what to build, what must not change, which patterns to follow, which edge cases to handle, and how the result will be checked. The agent builds, the checks run, and a failure goes back to the agent. The person signs off only when they understand what the change does, and a check the person wrote can stand in for reading every line, while the agent's own report that it finished cannot.

- Give the agent one bounded job of a few steps with a clear finish.
- Cut big work into such jobs.
- Run the build and the tests, and read the change for unasked edits.
- A correction made twice goes into an agent file or a build check.
- Never give one agent private data, strangers' content and a way out together.
- On the owner's setup, no agent merges code.

A model follows instructions it finds in content and cannot tell them apart from its user's instructions, so an agent that holds private data, reads strangers' content and can send data out can be told by a stranger to leak the data. On the owner's setup a Cursor Cloud Agent writes application code on its own isolated machine, and the owner merges the change himself.

## Where it goes wrong

Models do well where a machine can check the output, such as code and maths, and badly where it cannot. One model can refactor a codebase of 100,000 lines and still answer a simple everyday question wrongly. Given no user ID in the spec, one agent matched purchases to users by email address, taking one address from a payment account and one from a login account, and the two can differ. In a 2025 METR study, 16 experienced developers worked on 246 tasks in their own repositories, took 19% longer with AI allowed, and believed they had gone 20% faster.

- The person still has to know the code underneath.
- No bug or security hole is excused because an agent wrote it.
- Agent code is often copied, pasted and built on fragile abstractions.

Knowing the code underneath includes things such as whether memory gets copied.

## What the section holds

The pages in this section cover the practice from the rules down to the tools. Each line below names one topic and the pages that hold it.

- The rules in one line each: Agentic Engineering, Condensed.
- A looser practice, and apps made from one description: Vibe Coding, A Return to Code.
- Engineers judged by the machinery they build: The AI Industrial Revolution.
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
