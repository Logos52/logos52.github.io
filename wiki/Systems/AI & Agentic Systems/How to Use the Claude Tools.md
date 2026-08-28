---
title: "How to Use the Claude Tools"
type: reference
status: developing
created: 2026-08-26
updated: 2026-08-28
source-count: 8
description: "The Claude products as of August 2026 — the model family, Chat, Claude Code, Cowork, and the hosted runtime — and which to use for which job."
tags:
  - ai
  - agentic-engineering
  - tooling
  - models
---

# How to Use the Claude Tools

*As of August 2026. The prices and product details on this page change often; check them before acting on them.*

When you pay Anthropic for Claude, you are buying a model and the places that model is allowed to act. The model is a program trained on text that does the actual reading, thinking, and writing, priced by the amount of text that passes through it. The places are Chat (you talk, it answers), Claude Code (the model acts on a folder of files on your machine), Cowork (the model acts on documents and the other tools you grant it), and Claude Managed Agents (Anthropic hosts the loop and the sandbox so you can ship an agent to other people). A model set up to act on its own steps is called an agent. The Agent SDK is Claude Code's loop as a library in a process you host. Names for those pieces live on [[wiki/Systems/AI & Agentic Systems/Agent Glossary|Agent Glossary]].

## The models

Anthropic sells four models, priced by capability: Haiku 4.5, Sonnet 5, Opus 5, and Fable 5. Text is measured in tokens, where a token is roughly three quarters of an English word, and prices are quoted per million tokens going in and per million coming out. Haiku 4.5 is the small fast one, for bulk work: extraction, classification, summarizing at scale. Sonnet 5, released at the end of June 2026, is the default for everyday coding and drafting, at $3 in and $15 out. Opus 5, released in late July, is built for long agentic runs: hours of coding or research in one session. Fable 5, released in June 2026, is the strongest model Anthropic sells to the public, at $10 in and $50 out — it opened a new tier above Opus, and it thinks before answering on every request, deciding for itself how much thought a request deserves. A sibling called Mythos 5 is the same model with fewer of the built-in refusals, sold only to approved organizations, and you will not meet it.

Beyond price, compare models on two numbers: context window and effort range. The context window is how much text the model can hold in front of it at once. Fable 5 and Opus 5 hold about a million tokens, which is several long books, and once a conversation outgrows that window, the model no longer sees the start. Effort is how hard the model thinks before it answers: while it judges for itself how much thought a request deserves, you hold a dial over how far that judgment is allowed to run, from low up to a maximum, with high as the default. More effort costs more time and money and returns more thorough answers, so you turn it up for hard diagnosis and down for routine work.

## Claude Chat

Claude Chat is the conversation app, on the web, on a phone, or on the desktop. You write, attach files, and the model answers; it can search the web when a question needs current facts. It can also produce documents and working web pages, published to a private link you can share. Use Chat when the answer itself is what you need: thinking a decision through, learning something, getting a draft you will carry away yourself. It requires no setup; there is a free tier, and paid plans start at $20 a month with the Pro plan.

## Claude Code

Claude Code lives in the terminal — the window where you type commands to your computer directly instead of clicking. It is the agent for file work: code, notes, anything organized in folders. Given a goal, it reads the relevant files itself, plans, edits across many of them, runs the result, reads the errors, fixes them, and records the finished change, without you naming which files matter. It keeps a memory file in each project that it reads at the start of every session, so instructions survive between sittings. It can be given skills, which are written procedures it follows for recurring jobs. It can also spawn subagents: fresh copies of itself that start with empty memory and see only what you hand them. That matters most when it has written something and you want the writing checked, because the head that wrote a page cannot see what the page fails to say — its own memory fills the gap — while a fresh copy holding only the page sees exactly what a stranger would. Use Claude Code when your work is a folder of files that must change correctly: code, a collection of notes, anything where a history of changes is kept.

## Claude Cowork

Cowork is the agent for knowledge work: research, documents, recurring reports, and jobs that use your other tools. It is a mode of the Claude desktop app: you state an end goal, and it plans the work, splits it into subtasks, runs what it needs to run in a sandbox — a walled-off workspace where nothing it does can touch the rest of the machine, on Anthropic's computers by default, or inside a sealed computer simulated within your own — and hands you finished output. It can reach the folders you grant it, connect to your other tools through connectors you authorize once, drive your actual screen when a job crosses into an app that has no other route in, run on a schedule so a briefing appears every morning without being asked, and remember facts about you and your projects between sessions. Cowork sits on the paid plans only. Use Cowork when the job spans tools rather than files: research that becomes a document, a recurring digest, work that touches your calendar, your mail, and your notes in one pass.

## Claude Agent SDK

The Agent SDK is Claude Code's loop as a Python or TypeScript library inside a process you run. You host the computer. Calls still hit the Anthropic API and bill per token. This desk does not pick it. It is not the hosted Managed Agents product, and it is not the terminal you sit in.

## Claude Managed Agents

Claude Managed Agents is Anthropic's hosted agent runtime. You define the agent, the tools, and the guardrails. Anthropic runs the loop, the sandbox, and the session. You send events and stream results. Billing is the Messages API token meter plus $0.08 per session-hour while the session is `running`. Sessions are stored on purpose, so Zero Data Retention does not apply. This desk does not buy that meter: subscriptions and local hardware only, not pay-per-token API. Ruled 2026-08-28. The product still exists for teams who will ship an agent to other people and accept API billing. Do not stand up a Managed Agents session here. Record: [[wiki/Systems/AI & Agentic Systems/Current Agentic LLM Stack|Current Agentic LLM Stack]] and [[wiki/Systems/AI & Agentic Systems/Agent Wrong-Door Log|Agent Wrong-Door Log]].

A managed subagent is a different thing: an org-admin markdown file inside Claude Code. The adjective is the collision. Full names: [[wiki/Systems/AI & Agentic Systems/Agent Glossary|Agent Glossary]].

## Choosing between them

The products run the same models. They differ in what the model can see and touch, and whose computer it runs on. A question you want to think through out loud goes to Chat, because nothing needs touching. A change to a project that lives in folders — code, a knowledge base — goes to Claude Code, because the work is the files, and files are what Code can see and change. A job that crosses tools or repeats on a calendar goes to Cowork, because tools and schedules are what Cowork can reach. A loop you need inside your own server, billed per token, is the Agent SDK; this desk does not pick it. Managed Agents is the hosted version of that same meter. Start in Chat, move to Code the first time you catch yourself copying Chat's answers into files by hand, and open Cowork the first time a job needs two of your tools at once. To choose: list what the job needs to see and touch, and whose computer should hold it. Do not open a platform.claude.com key for agent work on this desk.

## Links Into the Knowledge Base

- [[wiki/Systems/AI & Agentic Systems/Claude Fable|Claude Fable]] — operating notes on the top model: where it earns its keep on this desk and where it fails
- [[wiki/Systems/AI & Agentic Systems/Grok 4.6 and Grok Bot|Grok 4.6 and Grok Bot]] — the other vendor's tools, which split the same way: a model, a terminal agent, a standing teammate
- [[wiki/Systems/AI & Agentic Systems/Current Agentic LLM Stack|Current Agentic LLM Stack]] — how this desk actually assigns the products, job by job
- [[wiki/Systems/AI & Agentic Systems/Thinking Models|Thinking Models]] — the effort dial in depth: when extra thinking pays and when it is decoration
- [[wiki/Systems/AI & Agentic Systems/The Writing Pipeline|The Writing Pipeline]] — the clean-context subagent mechanism this vault's writing runs on
- [[wiki/Systems/AI & Agentic Systems/Agent Glossary|Agent Glossary]] — Managed Agents, the Agent SDK, Cursor Cloud Agents, Grok Build grain, and the other names around these doors
- [[wiki/Systems/AI & Agentic Systems/Agent Wrong-Door Log|Agent Wrong-Door Log]] — dated misses when a job went to the wrong product

## Open Questions

- Prices and plan boundaries moved three times in the three months before this page was written; which of this page's numbers is stale by the time you read it?
- Cowork began as a desktop app and now runs in the cloud by default; how long does the local-machine mode stay a supported path?

## Sources

- [Introducing Claude Fable 5 and Claude Mythos 5](https://platform.claude.com/docs/en/about-claude/models/introducing-claude-fable-5-and-claude-mythos-5) — Anthropic, June 2026: the tier, the safeguards split
- [Claude model and effort level in Claude Code](https://claude.com/blog/claude-model-and-effort-level-in-claude-code) — the effort dial and its levels
- [Get started with Claude Cowork](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork) and [architecture overview](https://support.claude.com/en/articles/14479288-claude-cowork-architecture-overview) — cloud default, local VM mode, plan requirements
- [Claude pricing](https://claude.com/pricing) — plan tiers, fetched 2026-08-26
- [Claude Managed Agents overview](https://platform.claude.com/docs/en/managed-agents/overview) — hosted runtime, session-hour billing
- [Agent SDK overview](https://code.claude.com/docs/en/agent-sdk/overview) — loop as a library you host
- [TechCrunch on Cowork's web and mobile expansion](https://techcrunch.com/2026/07/07/the-coding-agent-wars-are-spilling-into-the-rest-of-the-office-claude-cowork/) — July 2026
- Sonnet 5 and Opus 5 launch coverage: [codersera](https://codersera.com/blog/claude-sonnet-5-launch-guide-2026/), [claudefa.st](https://claudefa.st/blog/models) — release dates and launch pricing
