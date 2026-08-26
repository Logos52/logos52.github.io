---
title: "How to Use the Claude Tools"
type: reference
status: developing
created: 2026-08-26
updated: 2026-08-26
source-count: 6
description: "The Claude products as of August 2026 — the model family, Chat, Claude Code, and Cowork — and which to use for which job."
tags:
  - ai
  - agentic-engineering
  - tooling
  - models
---

# How to Use the Claude Tools

*As of August 2026. The prices and product details on this page change often; check them before acting on them.*

When you pay Anthropic for Claude, you are getting two distinct software products: Claude Code and Claude Chat+Cowork. Underneath both runs a model: a program trained on text that does the actual reading, thinking, and writing, and is priced by the amount of text that passes through it. Anthropic sells one family of models with three specializations built on top: chat (Claude Chat), coding (Claude Code), and general agent work (Claude Cowork). In Chat you talk and the model answers. Claude Code and Cowork let the same model act — open your files, run programs, use your other tools — and a model set up to act on its own steps is called an agent.

## The models

Anthropic sells four models, priced by capability: Haiku 4.5, Sonnet 5, Opus 5, and Fable 5. Text is measured in tokens, where a token is roughly three quarters of an English word, and prices are quoted per million tokens going in and per million coming out. Haiku 4.5 is the small fast one, for bulk work: extraction, classification, summarizing at scale. Sonnet 5, released at the end of June 2026, is the default for everyday coding and drafting, at $3 in and $15 out. Opus 5, released in late July, is built for long agentic runs: hours of coding or research in one session. Fable 5, released in June 2026, is the strongest model Anthropic sells to the public, at $10 in and $50 out — it opened a new tier above Opus, and it thinks before answering on every request, deciding for itself how much thought a request deserves. A sibling called Mythos 5 is the same model with fewer of the built-in refusals, sold only to approved organizations, and you will not meet it.

Beyond price, compare models on two numbers: context window and effort range. The context window is how much text the model can hold in front of it at once. Fable 5 and Opus 5 hold about a million tokens, which is several long books, and once a conversation outgrows that window, the model no longer sees the start. Effort is how hard the model thinks before it answers: while it judges for itself how much thought a request deserves, you hold a dial over how far that judgment is allowed to run, from low up to a maximum, with high as the default. More effort costs more time and money and returns more thorough answers, so you turn it up for hard diagnosis and down for routine work.

## Claude Chat

Claude Chat is the conversation app, on the web, on a phone, or on the desktop. You write, attach files, and the model answers; it can search the web when a question needs current facts. It can also produce documents and working web pages, published to a private link you can share. Use Chat when the answer itself is what you need: thinking a decision through, learning something, getting a draft you will carry away yourself. It requires no setup; there is a free tier, and paid plans start at $20 a month with the Pro plan.

## Claude Code

Claude Code lives in the terminal — the window where you type commands to your computer directly instead of clicking. It is the agent for file work: code, notes, anything organized in folders. Given a goal, it reads the relevant files itself, plans, edits across many of them, runs the result, reads the errors, fixes them, and records the finished change, without you naming which files matter. It keeps a memory file in each project that it reads at the start of every session, so instructions survive between sittings. It can be given skills, which are written procedures it follows for recurring jobs. It can also spawn subagents: fresh copies of itself that start with empty memory and see only what you hand them. That matters most when it has written something and you want the writing checked, because the head that wrote a page cannot see what the page fails to say — its own memory fills the gap — while a fresh copy holding only the page sees exactly what a stranger would. Use Claude Code when your work is a folder of files that must change correctly: code, a collection of notes, anything where a history of changes is kept.

## Claude Cowork

Cowork is the agent for knowledge work: research, documents, recurring reports, and jobs that use your other tools. It is a mode of the Claude desktop app: you state an end goal, and it plans the work, splits it into subtasks, runs what it needs to run in a sandbox — a walled-off workspace where nothing it does can touch the rest of the machine, on Anthropic's computers by default, or inside a sealed computer simulated within your own — and hands you finished output. It can reach the folders you grant it, connect to your other tools through connectors you authorize once, drive your actual screen when a job crosses into an app that has no other route in, run on a schedule so a briefing appears every morning without being asked, and remember facts about you and your projects between sessions. Cowork sits on the paid plans only. Use Cowork when the job spans tools rather than files: research that becomes a document, a recurring digest, work that touches your calendar, your mail, and your notes in one pass.

## Choosing between them

All three products run the same models. They differ only in what the model can see and touch. A question you want to think through out loud goes to Chat, because nothing needs touching. A change to a project that lives in folders — code, a knowledge base — goes to Claude Code, because the work is the files, and files are what Code can see and change. A job that crosses tools or repeats on a calendar goes to Cowork, because tools and schedules are what Cowork can reach. Costs rank the same way: Chat spends the least, Code spends tokens on exactly the files in play, Cowork carries the most machinery and spends accordingly, so putting a file-shaped job in Cowork buys overhead without buying capability. Start in Chat, move to Code the first time you catch yourself copying Chat's answers into files by hand, and open Cowork the first time a job needs two of your tools at once. To choose: list what the job needs to see and touch, and pick the product that has exactly that access.

## Links Into the Knowledge Base

- [[wiki/Systems/AI & Agentic Systems/Claude Fable|Claude Fable]] — operating notes on the top model: where it earns its keep on this desk and where it fails
- [[wiki/Systems/AI & Agentic Systems/Grok 4.6 and Grok Bot|Grok 4.6 and Grok Bot]] — the other vendor's tools, which split the same way: a model, a terminal agent, a standing teammate
- [[wiki/Systems/AI & Agentic Systems/Current Agentic LLM Stack|Current Agentic LLM Stack]] — how this desk actually assigns the products, job by job
- [[wiki/Systems/AI & Agentic Systems/Thinking Models|Thinking Models]] — the effort dial in depth: when extra thinking pays and when it is decoration
- [[wiki/Systems/AI & Agentic Systems/The Writing Pipeline|The Writing Pipeline]] — the clean-context subagent mechanism this vault's writing runs on

## Open Questions

- Prices and plan boundaries moved three times in the three months before this page was written; which of this page's numbers is stale by the time you read it?
- Cowork began as a desktop app and now runs in the cloud by default; how long does the local-machine mode stay a supported path?

## Sources

- [Introducing Claude Fable 5 and Claude Mythos 5](https://platform.claude.com/docs/en/about-claude/models/introducing-claude-fable-5-and-claude-mythos-5) — Anthropic, June 2026: the tier, the safeguards split
- [Claude model and effort level in Claude Code](https://claude.com/blog/claude-model-and-effort-level-in-claude-code) — the effort dial and its levels
- [Get started with Claude Cowork](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork) and [architecture overview](https://support.claude.com/en/articles/14479288-claude-cowork-architecture-overview) — cloud default, local VM mode, plan requirements
- [Claude pricing](https://claude.com/pricing) — plan tiers, fetched 2026-08-26
- [TechCrunch on Cowork's web and mobile expansion](https://techcrunch.com/2026/07/07/the-coding-agent-wars-are-spilling-into-the-rest-of-the-office-claude-cowork/) — July 2026
- Sonnet 5 and Opus 5 launch coverage: [codersera](https://codersera.com/blog/claude-sonnet-5-launch-guide-2026/), [claudefa.st](https://claudefa.st/blog/models) — release dates and launch pricing
