---
title: "Agent Glossary"
type: reference
status: developing
created: 2026-08-28
updated: 2026-09-11
method: plain-rewrite-2026-09-11
prose-model: fable
aliases:
  - How to Use the Claude Tools
  - Grok 4.6 and Grok Bot
  - What the Model Names Signal
merged-from:
  - How to Use the Claude Tools
  - Grok 4.6 and Grok Bot
  - What the Model Names Signal
source-count: 23
next-audit: 2026-09-28
description: "Names for the agent loop, the room it runs in, and the chat window in front of it: Claude, Cursor, Grok, and nearby products as of 28 August 2026, with when to use each."
tags:
  - ai
  - agentic-engineering
  - tooling
  - glossary
  - claude
  - cursor
  - grok
  - models
  - grok-bot
  - agents
  - composer
  - naming
  - llm
---

# Agent Glossary

*As of 28 August 2026. Product names and prices move; check the vendor docs before acting on a number.*

An agent is a language model running in a loop: the model plans a step, calls a tool, reads what the tool returned, and repeats until that work is finished or a person has to take over. A model set up to act on its own steps is called an agent. Vendors sell that loop under many names. Claude Code, Cursor Cloud Agents, Claude Managed Agents, Grok Build, and Cowork are all that loop in different rooms, on different computers, for different users. The names collide: Claude Managed Agents is Anthropic's hosted production runtime, and a managed subagent is an org-admin markdown file inside Claude Code, and those two are not the same product.

A product name is a label for one of three jobs: the **surface** a person types into, the **harness** that runs the loop, and the **hands** where commands actually execute. For which seat this desk actually assigns, use [[wiki/Systems/AI & Agentic Systems/Current Agentic LLM Stack|Current Agentic LLM Stack]]. When a run went to the wrong product, the miss is filed on [[wiki/Systems/AI & Agentic Systems/Current Agentic LLM Stack|Agent Wrong-Door Log]].

## Core takeaways

- An agent is a language model in a loop: plan a step, call a tool, read the result, repeat until the work is finished or a person takes over. "Agentic" names this loop, not a smarter autocomplete.
- Every product name labels one of three jobs: the surface a person types into, the harness that runs the loop, and the hands where commands execute. Ask who the user of the run is, then whose computer does the work.
- Anthropic sells four models: Haiku 4.5, Sonnet 5, Opus 5, and Fable 5. Haiku, Sonnet, and Opus are verse-forms whose size tracks the job inside one generation; Fable names a class above Opus, not a genre.
- Claude Chat answers, Claude Code changes a folder of files, Cowork spans tools and schedules. Managed Agents and the Agent SDK bill on the API meter, and this desk does not buy that meter (ruled 2026-08-28).
- Grok 4.6 is a model, Grok Build is the local coding agent on this Mac, and Grok Bot is a standing teammate on one cloud computer shared by every Bot on the account. Three jobs sit under one first name.
- Same words, different products: Claude Managed Agents against a managed subagent, Grok `/goal` against Cursor `/goal`, Grok `/dream` against Managed Agents Dreaming, Grok Agent mode against Cursor Agent mode.

## Surface, harness, and hands

<svg viewBox="0 0 720 220" width="680" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Surface, harness, and hands">
  <g font-size="9" fill="currentColor" opacity=".45" font-weight="700" letter-spacing=".08em">
    <text x="120" y="28" text-anchor="middle">SURFACE</text>
    <text x="360" y="28" text-anchor="middle">HARNESS</text>
    <text x="600" y="28" text-anchor="middle">HANDS</text>
  </g>
  <g style="cursor:help"><title>The chat window or thread a person types into</title>
    <rect x="16" y="44" width="208" height="152" rx="10" fill="rgba(91,108,176,.08)" stroke="#5b6cb0" stroke-opacity=".55"/>
    <text x="120" y="78" font-size="11" fill="currentColor" text-anchor="middle" font-weight="700">Chat window</text>
    <text x="120" y="100" font-size="9" fill="currentColor" text-anchor="middle" opacity=".7">Chat SDK · Slack · web</text>
    <text x="120" y="116" font-size="9" fill="currentColor" text-anchor="middle" opacity=".7">Cursor IDE · Claude Chat</text>
    <text x="120" y="144" font-size="9" fill="currentColor" text-anchor="middle" opacity=".65">Who the person talks to</text>
    <text x="120" y="160" font-size="9" fill="currentColor" text-anchor="middle" opacity=".65">Not the worker</text>
  </g>
  <g style="cursor:help"><title>The loop, tools, permissions, compaction, and session log</title>
    <rect x="256" y="44" width="208" height="152" rx="10" fill="rgba(47,158,143,.08)" stroke="#2f9e8f" stroke-opacity=".55"/>
    <text x="360" y="78" font-size="11" fill="currentColor" text-anchor="middle" font-weight="700">Agent loop</text>
    <text x="360" y="100" font-size="9" fill="currentColor" text-anchor="middle" opacity=".7">Claude Code · Grok Build</text>
    <text x="360" y="116" font-size="9" fill="currentColor" text-anchor="middle" opacity=".7">Managed Agents · Cursor Agent</text>
    <text x="360" y="144" font-size="9" fill="currentColor" text-anchor="middle" opacity=".65">Plans, calls tools, repeats</text>
    <text x="360" y="160" font-size="9" fill="currentColor" text-anchor="middle" opacity=".65">Until the job stops</text>
  </g>
  <g style="cursor:help"><title>Where bash, file edits, and browsers actually run</title>
    <rect x="496" y="44" width="208" height="152" rx="10" fill="rgba(198,146,52,.08)" stroke="#c69234" stroke-opacity=".55"/>
    <text x="600" y="78" font-size="11" fill="currentColor" text-anchor="middle" font-weight="700">Computer</text>
    <text x="600" y="100" font-size="9" fill="currentColor" text-anchor="middle" opacity=".7">This Mac · Anthropic sandbox</text>
    <text x="600" y="116" font-size="9" fill="currentColor" text-anchor="middle" opacity=".7">Cursor VM · Actions runner</text>
    <text x="600" y="144" font-size="9" fill="currentColor" text-anchor="middle" opacity=".65">Where commands execute</text>
    <text x="600" y="160" font-size="9" fill="currentColor" text-anchor="middle" opacity=".65">Blast radius lives here</text>
  </g>
</svg>

Ask who the user of the run is, then whose computer does the work. The names below are dated labels for those two answers. Prices and plan boundaries were last checked 28 August 2026; the next check is due 28 September 2026.

## Shared building blocks

The entries in this section name the jobs the products implement: model, tool, loop, harness, sandbox, session, window, compaction, memory, MCP, skill, hook, computer use, vault, outcome. Product names in the vendor sections are labels for where a vendor put one of those jobs.

### Model

A language model is the program that reads text and writes the next action or the next sentence. It does not, by itself, open a file, run a shell command, or post to Slack. Claude Fable 5, Grok 4.6, and Cursor's model menu are models. Pick a model for depth, cost, and context size. Pick a product for what the model is allowed to touch.

### Tool

A tool is a named action the model can request: read a file, run bash, search the web, comment on a pull request. The model proposes the call. The harness executes the call, or asks a person first. Without tools, the model can only talk.

### Agent loop

The agent loop is the cycle ask-the-model, run-a-tool, feed-the-result-back, repeat. A chatbot turn is one question and one answer. An agent is that cycle until the task ends or it waits. "Agentic" names this loop, not a smarter autocomplete.

### Harness

The harness is everything around the model: tools, system prompt, permissions, retries, compaction, and the sandbox. Claude Code is a harness. Claude Managed Agents is a hosted harness. Cursor and Grok Build each ship their own. The model can be swapped; the harness is the product you actually operate.

### Sandbox

A sandbox is an isolated machine or container where the agent's tool calls run, so a bad command or a prompt injection has a limited blast radius. Claude Managed Agents defaults to an Anthropic-hosted sandbox. Cursor Cloud Agents run on Cursor's virtual machines. Copilot cloud agent runs on a GitHub Actions runner. Codex cloud and Devin Cloud each give the task its own remote environment. Claude Code and Grok Build, used locally, run on the computer in front of you. Grok Build can add an OS-level sandbox (`--sandbox workspace`, `read-only`, or `strict`) that restricts writes and, on Linux, child-process network; that is still this Mac, not a vendor VM.

### Session

A session is one durable run of an agent, with its conversation history. In Claude Managed Agents the session lives on Anthropic's servers and can pause and resume. In Claude Code it is the local conversation. In Vercel's Chat SDK cookbook, one chat thread is one Managed Agents session, so follow-ups keep the thread's research without a database of your own.

### Context window

The context window is how much text the model can see at once. Search dumps, logs, and file contents fill it. When it fills, the start of the conversation drops out of view. Fable 5 and Opus 5 hold about a million tokens. That number is a budget, not a reason to paste everything.

### Compaction

Compaction is automatic summarization when the context window fills, so the run can continue. Fine detail from early in the session is gone unless it was written into a file or a memory store. Use compaction to keep a long job alive. Do not treat compaction as a substitute for writing down the decisions that must survive.

### Memory

Memory is state that is supposed to survive into the next session: preferences, project facts, lessons. A session is one conversation's log. Memory is what should still be true after that conversation ends. Claude Managed Agents has memory stores plus Dreaming, a scheduled pass that reads old sessions and curates them. Claude Code keeps a memory file in the project. Grok Build's memory is off by default; when enabled it writes markdown under `~/.grok/memory/`, injects matches on the first turn, and can consolidate with `/dream`. These are different implementations of the same job. Grok's `/dream` is not Managed Agents Dreaming.

### MCP (Model Context Protocol)

MCP is a standard way to plug an external tool into an agent: GitHub, Notion, Linear, Slack, a private API. The agent does not bake those tools in. It connects to an MCP server. Use MCP when the job is "reach this existing system," not "invent a new API inside the prompt."

### Skill

A skill is a written procedure, usually a `SKILL.md` file, that an agent loads when the task matches. It is instructions in the current agent, not a new process. Claude Code, Cowork, Grok Build, and Cursor all use a version of this. Write a skill for a job you keep explaining. Do not write a skill for a one-off.

### Hook

A hook is deterministic code that runs at a lifecycle point: before bash, after an edit, when a turn ends. The model does not decide whether the hook runs. Use hooks for policy, logging, and checks you would not trust the model to remember.

### Computer use

Computer use is the agent driving a desktop or a browser with mouse and keyboard, not only calling APIs. Cursor Cloud Agents click through the app they built and attach a video to the pull request. Cowork can drive the screen when a job has no other route in. Use computer use when the system has a UI and no API. Driving a screen is slower and more fragile than a tool call.

### Vault (Managed Agents)

A vault in Claude Managed Agents is a per-user credential store. Tokens for MCP servers and environment variables sit here, not in the sandbox. A proxy injects them at the edge of an outbound call. Use a vault so a prompt-injected agent cannot print `GITHUB_TOKEN` from its own environment, because the token is not there.

### Outcome (Managed Agents)

An outcome in Claude Managed Agents is a written rubric the agent can grade its own work against, so "done" is a checkable statement rather than a vibe. Use an outcome when the hosted agent runs without you watching and you still need a stop condition.

## The Claude models

When you pay Anthropic for Claude, you are buying a model and the places that model is allowed to act. The model is a program trained on text that does the actual reading, thinking, and writing, priced by the amount of text that passes through it. The places are Chat (you talk, it answers), Claude Code (the model acts on a folder of files on your machine), Cowork (the model acts on documents and the other tools you grant it), and Claude Managed Agents (Anthropic hosts the loop and the sandbox so you can ship an agent to other people). The Agent SDK is Claude Code's loop as a library in a process you host.

Anthropic sells four models, priced by capability: Haiku 4.5, Sonnet 5, Opus 5, and Fable 5. Text is measured in tokens, where a token is roughly three quarters of an English word, and prices are quoted per million tokens going in and per million coming out. Haiku 4.5 is the small fast one, for bulk work: extraction, classification, summarizing at scale. Sonnet 5, released at the end of June 2026, is the default for everyday coding and drafting, at $3 in and $15 out. Opus 5, released in late July, is built for long agentic runs: hours of coding or research in one session. Fable 5, released in June 2026, is the strongest model Anthropic sells to the public, at $10 in and $50 out, and it thinks before answering on every request, deciding for itself how much thought a request deserves.

Beyond price, compare models on two numbers: context window and effort range. The context window is how much text the model can hold in front of it at once. Fable 5 and Opus 5 hold about a million tokens, which is several long books, and once a conversation outgrows that window, the model no longer sees the start. Effort is how hard the model thinks before it answers: while it judges for itself how much thought a request deserves, you hold a dial over how far that judgment is allowed to run, from low up to a maximum, with high as the default. More effort costs more time and money and returns more thorough answers, so you turn it up for hard diagnosis and down for routine work.

## What the model names signal

Anthropic's first three model names are verse-forms whose size tracks the job: a first look inside one generation, not a spec. Later names, and other vendors, do not play the same game. Reading the name can point at a tier before a benchmark, only inside that generation.

The poetic ladder is Haiku, Sonnet, and Opus: named verse-forms that track small and fast, then mid, then large and slow, inside one Anthropic generation.

**Haiku** is the 17-syllable miniature, in the English-school count. Smallest, fastest, cheapest. Built to condense, not to deliberate. Reach for it on high-volume, verifiable, low-stakes work.

**Sonnet** is the 14-line form. Structure, with space left over. Everyday default: mid-tier reasoning at ordinary speed and cost.

**Opus** is Latin for "work," as in *magnum opus*. The previous top of the family, still the named workhorse for complex, layered, creative problems where being right outweighs being cheap. It is the deepest of the original three. It is not the top of the current family. Match the form to the job.

| Name | The form | Reach for it when |
|---|---|---|
| Haiku | 17-syllable miniature · small · fast · cheap | High-volume, verifiable, low-stakes |
| Sonnet | 14-line structured form · balanced reasoning | The everyday default |
| Opus | A masterwork · deepest of the original three | Complex, high-stakes, creative calls |

The through-line, that length and ambition of the poetic form tracks capability, holds for those three. It breaks when the next name is a genre rather than a scale.

**Fable** is from Latin *fabula*, "that which is told," akin to Greek *mythos*. That is the etymology. It is not a causal encoder. On 9 June 2026 Anthropic named a new class above Opus: Mythos-class. Fable is the guarded public release of that class. Mythos 5 is the restricted twin: the same model with fewer of the built-in refusals, sold only to approved organizations, and you will not meet it. The safeguards distinguish them. The vendor's use is long-running agents and next-generation intelligence, not "pick this when you want a story."

Do not send a reader to Fable instead of Opus for storytelling on the strength of the word. Observed behavior of the public model, including taste-bound failure and an elicit-first habit, lives on [[wiki/Systems/AI & Agentic Systems/Working With a Model That Cannot Remember|Claude Fable]]. That is a reading of the model, not of the name.

A name marks a tier, and tiers blur across versions. A newer Sonnet can beat an older Opus, so the ladder holds within a generation, not across them. The metaphor is positioning, not a spec.

Vendor-reported numbers need independent confirmation. Treat the name as a first heuristic. A task's verifiability and the dated [[wiki/Concepts/Human vs AI Capability Lens|model snapshot]] decide the actual pick. Which model to spend where, by depth rather than by name, is [[wiki/Systems/AI & Agentic Systems/Automatic and Deliberate Work with AI|Thinking Models]]. The dated roster is [[wiki/Systems/AI & Agentic Systems/Current Agentic LLM Stack|Current Agentic LLM Stack]].

The case against the reading: the metaphor is positioning; the ladder is within a generation; other vendors never played; Fable is a new class above, named for telling, split by safeguards; every number on the cards above is dated. The name is a first look. The dated snapshot does the pick.

## Anthropic products

### Claude Chat

Claude Chat is the conversation app, on the web, on a phone, or on the desktop. You write, attach files, and the model answers; it can search the web when a question needs current facts. It can also produce documents and working web pages, published to a private link you can share. Use Chat when the answer itself is the deliverable: thinking a decision through, learning something, getting a draft you will carry away yourself. It requires no setup; there is a free tier, and paid plans start at $20 a month with the Pro plan.

### Claude Code

Claude Code lives in the terminal, the window where you type commands to your computer directly instead of clicking. It is the agent for file work: code, notes, anything organized in folders. Given a goal, it reads the relevant files itself, plans, edits across many of them, runs the result, reads the errors, fixes them, and records the finished change, without you naming which files matter. It uses git. It keeps a memory file in each project that it reads at the start of every session, so instructions survive between sittings. It can be given skills, which are written procedures it follows for recurring jobs. It can also spawn subagents: fresh copies of itself that start with empty memory and see only what you hand them. That matters most when it has written something and you want the writing checked, because the head that wrote a page cannot see what the page fails to say, since its own memory fills the gap, while a fresh copy holding only the page sees exactly what a stranger would. Use Claude Code when your work is a folder of files that must change correctly, code, a collection of notes, a vault, anything where a history of changes is kept, and you are at the keyboard to steer. It is not a hosted product for your users.

### Claude Cowork

Cowork is the agent for knowledge work rather than a git repo: research, documents, recurring reports, and jobs that use your other tools, spanning calendar, mail, and notes. It is a mode of the Claude desktop app: you state an end goal, and it plans the work, splits it into subtasks, and runs what it needs to run in a sandbox, a walled-off workspace where nothing it does can touch the rest of the machine, on Anthropic's computers by default, or inside a sealed computer simulated within your own. It runs remotely in the cloud by default. It hands you finished output. It can reach the folders you grant it, connect to your other tools through connectors you authorize once, drive your actual screen when a job crosses into an app that has no other route in, run on a schedule so a briefing appears every morning without being asked, and remember facts about you and your projects between sessions. Cowork sits on the paid plans only. Use Cowork when the job spans tools rather than a single folder of files: research that becomes a document, a recurring digest, work that touches your calendar, your mail, and your notes in one pass.

### Claude Agent SDK

The Claude Agent SDK is Claude Code's loop as a Python or TypeScript library inside your own process. You host that process and the computer it runs on. It was previously named the Claude Code SDK. It is not the hosted Managed Agents product, and it is not the terminal you sit in. Calls still hit the Anthropic API and bill per token. This desk does not pick it, for the same reason it does not pick Managed Agents.

### Claude Managed Agents

Claude Managed Agents is Anthropic's hosted agent runtime, in beta as of April 2026 (`managed-agents-2026-04-01`). You define the agent, the tools, and the guardrails. Anthropic runs the loop, the sandbox, and the session, and you send events and stream results. Billing is the Messages API token meter plus $0.08 per session-hour while status is `running`; idle wait does not count. Sessions are stored on purpose, so Zero Data Retention and HIPAA BAA do not apply. This desk does not buy that meter. The stack runs on subscriptions and local hardware, not pay-per-token API. Ruled 2026-08-28: "i don't like anything with API." Do not stand up a Managed Agents session here. The product still exists for teams who will ship an agent to other people and accept API billing. Record: [[wiki/Systems/AI & Agentic Systems/Current Agentic LLM Stack|Current Agentic LLM Stack]] and [[wiki/Systems/AI & Agentic Systems/Current Agentic LLM Stack|Agent Wrong-Door Log]].

Managed Agents is built from an **agent** (model, prompt, tools, MCP, skills, versioned), an **environment** (where code runs: Anthropic cloud or a sandbox you host), a **session** (one running instance, with history and files), and **events** (the append-only log of messages, tool calls, and status). The loop that calls Claude is separate from the sandbox that runs commands, so Claude can start thinking before any container exists. Credentials live in a vault, not in the sandbox.

### Messages API / Client SDK

The Messages API is the raw model interface: tokens in, tokens out, billed per token, and you write the agent loop yourself. Same meter this desk refuses. Use it only if you are building a custom harness as a product and have accepted API billing. This desk uses Claude through the Chat / Code / Cowork subscription, not through platform.claude.com keys.

### CLAUDE.md

`CLAUDE.md` is always-on project instructions for Claude Code, loaded at the start of a session. Put standing constraints here. Put a reusable procedure in a skill. Put a specialist with a fresh context in a subagent.

### Subagent (Claude Code)

A Claude Code subagent is a worker with its own context window, its own system prompt, and a limited tool set. It reports a summary back to the parent. Use it when search results, logs, or a review pass would drown the main conversation: the vault's rewrite and cold-read passes run this way. It costs extra tokens because the window is duplicated. It is not automatically parallel.

### Managed subagent

A managed subagent is a Claude Code subagent deployed by an organization admin through managed settings. It outranks project and user subagents of the same name. It is not Claude Managed Agents. The adjective is the collision.

### Background agent (Claude Code)

A Claude Code background agent is a separate session you launch and monitor while you keep working in the parent. That is actual parallelism. A ordinary subagent, unless marked background, works inside the session and can block the parent until it finishes.

### Agent teams (Claude Code)

Agent teams are multiple Claude Code sessions that can message each other, not only report up to a parent. Use them when peers need to debate or cross-check. Skip them for parallel independent searches; subagents are cheaper for that. Token use is much higher when teammates run in plan mode.

### Plugin (Claude Code)

A Claude Code plugin packages skills, subagents, hooks, and MCP servers for install. Use a plugin to share a bundle across projects or people. A single skill file is enough when only you need the procedure.

### Claude Tag

Claude Tag is Anthropic's internal on-call pattern: a service account, skills in git, first response on CI or Slack incidents. It is an example of a production agent, not a consumer product you install.

### Dreaming (Managed Agents)

Dreaming is a scheduled process on Claude Managed Agents that reads past sessions and memory stores, extracts patterns, and curates memory so later sessions start smarter. It is a research preview on top of Managed Agents, not a Claude Code CLI flag. Request access; it is not on by default.

### MCP tunnels (Managed Agents)

An MCP tunnel lets a Claude Managed Agents session reach an MCP server that lives inside your private network. Self-hosted sandboxes control where the agent's *code* executes. MCP tunnels control how Anthropic *reaches* a private MCP server. Both are research-preview on Managed Agents. Use a tunnel when the tools are on your side of the firewall and the loop is hosted. Do not use a tunnel as a substitute for a self-hosted sandbox.

## Cursor products

Cursor does not ship a product named Persistent Agents. People use that phrase for Cloud Agents plus event subscriptions plus a long-lived `/goal`.

### Agent mode (Cursor)

Cursor Agent mode is the coding agent inside the editor. You are at the keyboard. It edits the repo in front of you. Use it when the task still needs what is on your screen. Use Cloud Agents when the task can be written down completely and the laptop can close.

### Cloud Agents

Cursor Cloud Agents run on isolated virtual machines that Cursor operates, not on your laptop. Each run clones the repo, can install dependencies, edits, tests, and usually opens a pull request, with screenshots or a video attached. You can start one from the editor, the web, Slack, GitHub, Linear, or the API. Use them for overnight or parallel coding work on a fully specified task. They start from a clean git state on the remote; local uncommitted files do not go with the run unless you commit or stash first. Formerly named Background Agents.

### Long-running agents (Cursor)

Long-running agents are a Cursor research-preview harness for multi-hour or multi-day jobs. The agent proposes a plan and waits for approval, then other agents check the work against that plan so the run does not lose the thread. Use this for ambitious work that would derail a normal Cloud Agent. Cloud is *where* the run happens. Long-running is *how* the harness keeps a large job on track.

### Subscriptions (Cursor)

A Cursor subscription, as of 19 August 2026, is an event source a Cloud Agent watches: a pull request, a Slack thread, or a schedule. The agent wakes when something happens. Cloud Agents auto-subscribe to pull requests they open and try to drive CI green. Example: in Slack, `@cursor check back in an hour and keep going until that feedback is in`. This is the always-on layer people mean by "persistent agents." It is Cloud Agents only for now.

### /goal (Cursor)

Cursor `/goal` gives a Cloud Agent a long-lived objective to work toward until it is complete, for example `/goal fix all flaky tests and make CI green`. Pair it with a Custom Mode for the playbook, or `/loop` for recurring check-ins. Use it when the finish line is a state of the repo, not a single patch. Grok `/goal` is a different product with the same slash name; see that heading.

### Custom Mode (Cursor)

A Custom Mode is a skill pinned for the whole Cursor chat, so the playbook stays on every turn. Use it when you would otherwise paste the same instructions at the start of every message.

### Subagents (Cursor)

Cursor subagents can run on their own virtual machines, each with a clean copy of the project. Use them to test the parent agent's changes in a fresh environment, or to swarm independent fixes without file collisions.

### Automations (Cursor)

Cursor Automations fire Cloud Agents on a cron, or on events from GitHub, Slack, Linear, PagerDuty, or a webhook. Use them for recurring coding work you would otherwise remember to start by hand.

## SpaceXAI and Grok products

Grok Build terms below are taken from the user guide under `~/.grok/docs/user-guide/` as of 28 August 2026.

SpaceXAI sells a model and a teammate under the same first name. Grok 4.6 is the model you call from an editor, an API, or a coding agent. Grok Bot is the teammate that keeps a cloud computer running after the chat ends. A third product, Grok Build, sits between them on this desk: a local coding agent that runs the model against the Mac's real files. Calling the model, leaving a teammate overnight, and executing on disk are three jobs.

| Product | What it is | Where the work lives | What it is for here |
|---|---|---|---|
| Grok 4.6 | A model | API, Cursor, Grok Build | The weights either local surface can call |
| Grok Build | A terminal coding agent | This Mac, isolated profiles | Execution the agent drives: plan, edit, test, script |
| Cursor | A VS Code-fork IDE | This Mac, once installed | Sitting in the files: Tab, visual diffs, debugger, Agent as a pane |
| Grok Bot | Named teammates | One shared cloud computer | Standing watch, fetch, and file, public material only |

The model card is not a reason to move judgment off Fable; that was the rejected reading from the day-after briefing, [[journal/2026-08-13-grok-4-6-on-the-frontier|Grok 4.6 on the frontier, not the lead]]. Twelve named Bots in an afternoon is not a recommended roster; that is the General Helper anti-pattern under a new count. The cost of keeping the split: four names to hold, and a weekly quota on the standing half that has to earn its rent. The cost of collapsing them: a login typed for one job becomes common property of every job on the account, and a model upgrade gets mistaken for a new worker. Quit if the next week of real work shows 4.6 taking the judgment seat, or if a standing Bot's packets stop changing what gets opened. The first is a stack decision. The second is a retirement. The shared name still covers two products. Call the model when the job is a turn. Leave the teammate running when the job is a duty. The computer that survives the closed laptop is the teammate's, and it is one computer.

### Grok 4.6

Grok 4.6 is the model. It is not a standing worker. This desk calls it from Grok Build and from Cursor. It is a language model with a dated card. It shipped 12 August 2026 on the same sticker as 4.5: $2 per million input tokens, $6 per million output, 500k context. Reasoning effort is on by default and cannot be switched off; the extra setting is `xhigh`. Live surfaces the same day: Grok Build, Cursor, the API, OpenRouter, later GitHub Copilot.

The public composite that week put it on the frontier and not in the lead. Artificial Analysis scored it 61 on the Intelligence Index, tied with GPT-5.6 Sol, one to two points behind Claude Opus 5 and Claude Fable 5. The number that actually moved agent work was cheaper loops: on AA-Briefcase it finished in about 53 turns and half a billion input tokens against Opus 5 max at about 103 turns and two billion. DeepSWE and Terminal-Bench v3.0 were the gaps that survived the screenshot. Consumer Grok on the web and on X was still listed as later.

That is a card, not a stack change. Judgment work on this vault still sits on Fable in Cowork. Execution still sits on Grok Build. A week where 4.6 beats Opus 5 on the long knowledge-work loops and hard SWE this desk actually runs would reopen the ranking. A week where Fable's trust premium dies on the pages that currently stay in Cowork would reopen the stack. Neither week has happened. [[wiki/Systems/AI & Agentic Systems/Current Agentic LLM Stack|Current Agentic LLM Stack]] is the dated roster. [[wiki/Concepts/Human vs AI Capability Lens|Human vs AI Capability Lens]] still grades a 4.3 snapshot from July 2026; that row is stale and is not silently re-graded here.

### Grok Build

Grok Build is the local coding agent on this Mac. You launch it in a project directory (`grok`). It plans, edits, runs the real toolchain, and can spawn subagents, workflows, and scheduled tasks. Use it when the agent should drive a scoped execution loop whose check is a compiler, a test, or a diff. Personal and work histories stay in separate profiles: `grok-n1` (`GROK_HOME=~/.grok`) and `grok-admin` (`~/.grok-admin`). Wrong launcher is the usual leak across those two histories.

### Grok Bot

Grok Bot is a named teammate with a job, a conversation, and a cloud computer that keeps running after the chat ends and does not die when the laptop closes. Every Bot on one account shares that computer. Use it for standing watch, fetch, and file on public material. Do not give it private logins or a spend that does not stop for a person. Depth: [[wiki/Systems/AI & Agentic Systems/Grok Bot Primer|Grok Bot Primer]]. The first drawing is [[wiki/Systems/AI & Agentic Systems/Grok Bot Primer|Standing Research Agents]].

Access rode on SuperGrok Heavy, Cursor Ultra, or Cursor Teams Premium at launch; on 21 August it widened to SuperGrok Plus, Cursor Pro+, and Cursor Teams subscribers, with a limited free trial for everyone else. An account holding both a Cursor and a SuperGrok subscription draws on whichever has more usage. There is still no standalone checkout. The desktop app is macOS and Windows; the companion is iOS 18. Linux desktop, Android, and iPad were unsupported at launch. Billing and sign-in live on a Cursor account. Docs live under the model company. Looking under one name for both fails.

Every Bot on one account uses one persistent cloud computer. They share its files, browser sessions, and logins so they can hand work off. Each Bot gets its own screen on that machine. Screens are work surfaces, not security boundaries. Separate Bots are not a security boundary. Deleting a Bot removes its profile, conversation, and routines; files and logins on the shared computer may remain. Launch coverage said each Bot gets its own cloud computer, and some of SpaceXAI's how-to pages still write that each helper has its own machine. SpaceXAI's Grok Bot FAQ, re-fetched 31 August 2026, says the other way: the computer is assigned per user, not per Bot.

When a step needs a person, a password, passkey, two-factor code, CAPTCHA, payment, or identity check, the Bot hands the screen over and takes it back. Those secrets do not go in ordinary chat. A first useful request names five things: the outcome, its sources, the constraints, the deliverable, and the review point. A **skill** is how a task is done. A **routine** is when one Bot runs that method, on a schedule or on an event. Teach-a-task, where it is available, records up to ten minutes of visible computer use and drafts a skill that still needs rules, failure handling, and approval boundaries written by hand. Approval stays in front of send, publish, purchase, delete, and production change.

[[wiki/Systems/AI & Agentic Systems/Grok Bot Primer|Standing Research Agents]] is the always-on half: Watch, Brief, Intake, Corpus, packets to the desk. [[wiki/Systems/AI & Agentic Systems/Grok Bot Primer|Grok Bot Fleet Structures]] is that half at seat resolution. [[wiki/Systems/AI & Agentic Systems/Grok Bot Primer|Bot Operating Rules]] is the operating claim those seats already run: the report is the product, and no Bot fixes what it finds. The cloud computer holds only what is already public. A grocery cart, a Gmail session, an Amazon login, or a spend that does not stop for a person is the usage that line exists to refuse. Other people's write-ups of those setups are field evidence, not a roster to copy. SpaceXAI's own how-to pages put a chief of staff on mail and ads; that is still field evidence. [[wiki/Research/Grok Bot Practitioner Bank|Grok Bot Practitioner Bank]] is that evidence compiled; [[wiki/Research/Grok Bot Field Packet 2026-08-15|the 15 August Field packet]] is the first named-runner pass; [[wiki/Research/Grok Bot Field Packet 2026-08-31|the 31 August Field packet]] is the first-party playbook pass.

### Grok Build against the Cursor IDE

SuperGrok Heavy is how this desk reaches both local surfaces. Grok Build is native to the Grok account and is already on this Mac, with personal and work histories isolated by profile. The Cursor IDE arrived by linking that Heavy account; Ultra was created at $0 and includes Grok Bot. Cursor's own help said the month ends, on 13 August, and said it lasts while Heavy renews, on 15 August. A third fetch of the same page, 26 August, says linking SuperGrok now grants Grok Bot usage only and does not change the Cursor plan; press has links made after about 21 August no longer receiving Ultra, while earlier links keep it while Heavy renews. Ultra is active on this account, confirmed by the owner 26 August: the free month from the Heavy link, expiring 12 September 2026. Plan as if the month can end. Do not plan as if the IDE is free forever.

Composer 2.5 is a cheap model on Cursor's menu. It is not the IDE. The IDE is the window: syntax, peek, debugger, extensions, git UI, multi-cursor, a visual diff you accept hunk by hunk, and Tab, gray completions while you type, including the next edit and a jump into another file. Agent (Cmd-I) is a pane in that window, not the window. Plan Mode writes a plan and waits. Checkpoints undo Agent edits locally and are not git.

Grok Build is the other way around. You launch it from a project directory. The session is a TUI, or headless `grok -p` for scripts, or the Agent Client Protocol into another app. Plan mode here gates file edits until the plan is approved. Profiles isolate personal history from work. Worktrees, workflows, `/loop`, and this machine's real toolchain live here. There is no Tab. You are not in the file. The agent is.

**Use Grok Build when the agent should drive the session**: a scoped execution loop whose check is a compiler, a test, or a diff you read after. Banks, regen scripts, tsumugu lanes, 多恩刊 paste-into-Build, anything that should run with the editor closed. That is already the stack's execution seat.

**Use the Cursor IDE when you should be in the files**: reading a large tree, accepting hunks by eye, debugging, or letting Tab take the next edit while your hands stay on the keys. Use it also when one turn needs a model Build does not make cheap: Fable or Opus from Cursor's Other Models pool, Privacy Mode on for Fable. Cloud Agents are not this pick. They are Cursor's isolated VM that opens a PR, closer to a Grok Bot handoff than to sitting in the IDE.

Same 4.6 in both is a harness pick, not a model pick. Two writers on one tree failed on 12 June: independent cribs on separate budgets caught a confident misquote, and two agents editing the same files spent the hour merging. Same day, different jobs. One writer per tree. Cursor.app is on this Mac as of 26 August, with no CLI on the PATH; the last scored hands-on is still that June bake-off. A week of Tab-plus-visual-review on tsumugu or wnab is what would make Ultra a habit instead of an access line. Until that week, Build stays the default execution surface.

### Profile (Grok)

A Grok profile is a `GROK_HOME` directory: sessions, skills, hooks, memory, and config. `grok-n1` is personal. `grok-admin` is work. They do not share history. Use the launcher that matches the context. Do not assume work-machine state from n1 history.

### Headless mode (`grok -p`)

Headless mode runs one prompt with full tools and prints the result, then exits. `grok -p "fix the tests"` is the scripting door. Use it for CI, automations, and one-shot jobs that should not open the TUI. `--yolo` auto-approves tools. `--output-format json` is for a parser, not a person.

### Agent mode (ACP)

Grok Agent mode runs Grok as a long-lived server that an IDE or SDK talks to over ACP (JSON-RPC): `grok agent stdio` locally, or `grok agent serve` as a WebSocket you host. It is not Cursor Agent mode. Use it to embed Grok Build in Zed, Neovim, or a custom client. Hosted Grok cloud sandboxes do not run `grok agent serve`.

### Plan mode (Grok)

Grok plan mode is a read-only planning phase: the agent writes `plan.md` in the session directory and cannot edit any other file until you approve. Enter with `/plan` or Shift+Tab. Use it when the approach is genuinely ambiguous. Skip it for a typo, a named one-file fix, or research (use an `explore` subagent). Subagents are not covered by the parent's plan-mode gate: a `general-purpose` child can still edit while the parent is planning.

### Session (Grok)

A Grok session is one conversation stored under `~/.grok/sessions/<encoded-cwd>/<session-id>/`, with the log, plan, rewind points, and child subagent metadata. `/new` starts fresh. `/resume` or `grok -c` continues. Compaction is automatic at 85% of the context window by default. A sandbox profile is fixed for the life of a session; you cannot widen it on resume.

### Subagent (Grok Build)

A Grok Build subagent is a child session with its own context window. The parent calls `spawn_subagent` and gets a summary back. Built-in types: `general-purpose` (full tools), `explore` (search and shell, no edits), `plan` (produces a plan, no edits). Only the top-level session can spawn children; nesting depth is one. Background subagents return a task id immediately. `resume_from` continues a completed child's transcript. Use a subagent to isolate a noisy search or a review pass. Do not use one for tight back-and-forth with the person.

### Capability mode (Grok)

A capability mode is a coarse filter on a Grok subagent's tools: `read-only` (read and search, no edits, no shell), `read-write` (files, no shell), `execute` (shell, no file edits), or `all`. If omitted, the agent type's toolset applies. `explore` and `plan` already cannot edit. Use `read-only` for a review pass you would not trust to touch the tree.

### Isolation / worktree (Grok)

`isolation: worktree` gives a Grok subagent its own git worktree so its edits do not collide with the parent. The child's result includes the worktree path. Merge is a separate apply step. `cwd` and worktree isolation cannot be set together. Use a worktree when two writers would otherwise fight over the same files. The 12 June 2026 miss of two agents editing one tree is why this exists.

### Persona (Grok)

A Grok persona is a behavioral overlay on a subagent (tone, output contract), not a new agent type. Agents live in `.grok/agents/` and set model, tools, and prompt. Personas live in `config.toml` or `.grok/personas/` and inject a system reminder. Use an agent file when the child needs different tools. Use a persona when the child needs different manners on the same tools.

### Workflow (Grok Build)

A Grok workflow is a deterministic Rhai script (`.rhai`) that orchestrates subagents with `agent()`, `parallel()`, `phase()`, and `complete()`. It is not Claude Managed Agents and not Claude Code dynamic workflows, though it occupies the same "fan-out with a known list" slot. Default cap is 128 logical agent calls per run. Use a workflow when the work-list is known and you want bounded parallel judgment. Do not use it when the next step depends on a conversation with you; that stays in the parent TUI.

### Background command (Grok)

A background command is `run_terminal_command` with `background: true`: a build, test suite, or dev server that returns a task id so the conversation can continue. Ctrl+B backgrounds a command that has already started. Use it for one-shot long processes. Use `/loop` for periodic checks. Use `monitor` for a live event stream.

### /loop and scheduler (Grok)

`/loop 5m <prompt>` fires that prompt on an interval (minimum 60 seconds). It wraps the scheduler. Recurring tasks auto-expire after 7 days; at most 50 can be active. `scheduler_create` is the same job with `durable` (survive session restart) and `fire_immediately`. Cursor Automations and Copilot cloud-agent automations occupy this slot on those vendors. Use `/loop` for "check CI every five minutes in this session." Use a durable scheduler for a standing ping that should outlive `/quit`.

### Monitor (Grok)

The `monitor` tool streams each stdout line from a long-running script into the conversation. Use `grep --line-buffered` in pipes or events arrive minutes late. Use a monitor for log tails and CI watches. Use `/loop` when you want a fresh agent turn on a timer instead of a raw stream.

### Skill (Grok)

A Grok skill is a `SKILL.md` directory Grok loads when the task matches. Discovery order: `./.grok/skills/`, repo `.grok/skills/`, `~/.grok/skills/`, then Claude and Cursor skill dirs if compatibility is on. Higher-priority location wins on name collision. Use a skill for a repeatable procedure too specific for `AGENTS.md` and too long to retype. Project skills belong in the repo. User skills belong in `~/.grok/skills/`.

### Plugin (Grok)

A Grok plugin bundles skills, slash commands, agents, hooks, and MCP servers from a marketplace. Nothing runs until you install and trust it. Same job as a Claude Code plugin, different installer.

### Hook (Grok)

A Grok hook is a shell command or HTTP POST at a lifecycle event: `SessionStart`, `PreToolUse`, `Stop`, `SubagentStart`, and the rest. `PreToolUse` can deny a tool call. `Stop` can keep the agent working until a check passes. Project hooks need folder trust. Global hooks in `~/.grok/hooks/` always run. Use a hook for policy you would not trust the model to remember.

### Project rules (Grok)

Project rules are `AGENTS.md` / `CLAUDE.md` files, plus `*.md` in `.grok/rules/`, loaded from home, then repo root down to the working directory. Deeper files win on conflict. This is Grok's always-on project instruction, the same job as Claude Code's `CLAUDE.md`.

### Sandbox (Grok Build)

Grok sandbox mode restricts the whole Grok process with kernel primitives (Seatbelt on macOS, Landlock on Linux). Profiles: `off` (default), `workspace` (write CWD and temp), `read-only`, `strict`. Custom profiles add a kernel `deny` list. The profile is fixed for the session. Use `workspace` for everyday write protection. Use `read-only` for a review of untrusted code. Skip the sandbox when the agent must install packages or write outside CWD.

### Memory (Grok)

Grok memory is experimental and off by default (`GROK_MEMORY=1` or `[memory] enabled = true`). It stores markdown under `~/.grok/memory/`, injects matches on the first turn, and consolidates with `/dream` (or auto-dream after enough sessions). `/remember` appends a note. `/flush` writes a richer session summary before compaction. This is not Managed Agents Dreaming. Use it when a fact should survive `/new`. Leave it off when you do not want prior sessions in the window.

### Permission modes (Grok)

Grok permission modes set how often the agent asks before a tool runs. `default` / ask: read-only tools pass, everything else waits. `acceptEdits`: file edits pass, shell still asks. `auto`: a safety check lets routine local work through and blocks or escalates the rest. `dontAsk`: only pre-approved tools. `bypassPermissions` / always-approve / `--yolo`: tools run without a click. Deny rules and hooks still apply on every mode. Always-approve and auto cannot both be on; always-approve wins. Use ask in the TUI. Use always-approve plus deny rules for `grok -p` and ACP servers. Do not use always-approve on a tree you cannot rebuild.

### MCP (Grok)

Grok MCP servers are configured in `~/.grok/config.toml` under `[mcp_servers.<name>]`, as a local stdio process or a remote HTTP/SSE URL. Subagents inherit already-connected parent MCP servers unless the agent file sets `mcpInheritance`. Large tool results are truncated (default 20,000 bytes) with the rest spilled under the session `mcp/` folder. Use MCP when the job is reach GitHub, a database, or another existing system. Same protocol as Claude Code and Cursor; different config file.

### Agent Dashboard (Grok)

The Grok Agent Dashboard (`/dashboard`, aliases `/agents-dashboard` and `/sessions`, or `Ctrl+\`) is the live roster of top-level sessions in this pager: peek, reply, dispatch, pin, stop. Subagents are not listed. It is not `/config-agents` (alias `/agents`), which edits agent *definitions* and personas. It is not `/resume`, which reloads a past conversation from disk. It is not `/workflows`, which lists workflow runs. It is not cursor.com/agents, which is Cursor Cloud Agents.

### /config-agents (Grok)

`/config-agents` (alias `/agents`) opens the modal for agent definition files and personas. Use it to change what a subagent *is*. Use `/dashboard` to see which sessions are running.

### /goal (Grok)

Grok `/goal` sets a long-lived objective that runs across rounds and only completes after an independent evidence review can reproduce the claim. `/goal status`, `pause`, `resume`, `clear`. Optional `--budget` is a **token** budget, not the workflow agent-count budget. It appears when goal mode is enabled. With background workflows on, the host verifies completion; with them off, a legacy `update_goal` path does. Same slash name as Cursor `/goal`. Cursor `/goal` is a Cloud Agent objective. Grok `/goal` is a local TUI loop with a verifier. Do not treat them as one feature.

### /fork (Grok)

`/fork` branches the current Grok session into a new agent, keeping history up to that point. Use it when you want a second writer with the same context and a different job. That is still one tree unless you also set worktree isolation. Two forked sessions editing the same files is the 12 June miss.

### /deep-research (Grok)

`/deep-research <query>` launches a background research workflow: bounded questions, sourced claims, an independent verifier shard, and a report that marks Partial when anything failed. Follow it in `/workflows`. Use it for a sourced comparison you will read. Do not use it as a wiki compile.

### /workflow vs /workflows (Grok)

`/workflow <name>` launches or pauses a saved Rhai workflow. `/workflows` is the run dashboard for live and retained runs, not the catalog of saved `.rhai` files. Launching the same workflow twice numbers the display name (`review-changes-2`). Users never need the internal run id.

### Effort (Grok)

Reasoning effort on Grok is a dial: `none`, `minimal`, `low`, `medium`, `high`, `xhigh`, `max`, and only the levels the current model advertises. `/effort` and `--effort` set it. This desk's stack page sets `xhigh` in Build for hidden bugs. Same job as Claude Code's effort dial; different ladder.

### Theming (Grok)

Theming is TUI colors only. Built-ins: GrokNight (default dark), GrokDay (light), TokyoNight, RosePineMoon, OscuraMidnight, plus `auto` which follows the OS light/dark setting. Switch with `/theme` or `[ui] theme` in `~/.grok/config.toml`. Minimal mode ignores themes and uses the terminal's own 16 colors. Theming does not change tools, models, sandbox, or which computer runs the loop.

### Custom-model endpoints (Grok)

A custom-model endpoint is a `[model.<name>]` block in `~/.grok/config.toml` that points Grok Build at another provider: `base_url`, `api_key` or `env_key`, and `api_backend` of `chat_completions`, `responses`, or `messages` (Anthropic). Then `/model that-name`. The loop, tools, and session stay Grok Build. The brain can be Claude, a self-hosted model, or a gateway. This is not a new product. A custom endpoint that bills per token is the same API meter this desk refuses. Pointing Grok Build at Fable that way would still be Grok Build, and it would still be API-metered.

### OpenTelemetry (Grok)

Grok can export usage metrics and events to a collector **you** run, not to SpaceXAI. Status: alpha (`grok_code.schema.version = v1`). Off by default. Double opt-in: `GROK_EXTERNAL_OTEL=1` and an exporter such as `OTEL_METRICS_EXPORTER=otlp`. Default payload is content-free: no prompts, no code, no full paths, no bash. Optional gates can put some of that back. This pipe is separate from SpaceXAI product telemetry (`GROK_TELEMETRY_ENABLED`, `/privacy`). A company with many Grok sessions would use it for adoption and token-burn dashboards. This desk is one operator; it does not need a collector.

OpenTelemetry is not `/privacy` and is not SpaceXAI's own telemetry switch. Three knobs, three destinations.

## Names that never rode the poetry

Two other names are two different bets on the same agentic-coding job. They do not ride the poetry scheme at all. They answer to throughput, price, and a coding bench.

Composer 2.5 is Cursor's in-house model, built on an open checkpoint. It is a speed specialist and a mechanical workhorse: fast, cheap, verifiable code loops. On Cursor's 18 May 2026 table it scores 79.8% on SWE-Bench Multilingual against 80.5% for Opus 4.7 on the same table. That is one dated bench, vendor-reported. Other benches on the same table are mixed; one number is not the model. The Standard card is $0.50 / $2.50 per million tokens. A Fast card exists at $3 / $15. Do not collapse those into a ratio against Opus.

Grok in Grok Build is the generalist: reasoning plus vision, broader in scope, slower. The 29 May 2026 card is ~100+ tokens per second and ~$1 / $2 per million tokens, vendor-reported.

On the [[wiki/Concepts/Human vs AI Capability Lens|capability lens]] these are two different polygons. One spikes Scale, Verifiability, and Autonomy. The other spreads wider into reasoning and multimodal work. The facet scores stay on that lens.

## Chat surfaces and other vendors

### Chat SDK (Vercel)

Vercel's Chat SDK is a universal chat layer: one typed handler (`onDirectMessage` and siblings) and adapters for Slack, Teams, Discord, web, WhatsApp, and more. It is the doorbell and the room. It is not an agent. The 27 August 2026 cookbook puts Claude Managed Agents behind it so one persistent session per conversation owns the research, and swapping a few lines moves the same agent to another surface.

### Vercel Sandbox

Vercel Sandbox is isolated compute for running an agent's tools on Vercel, as an alternative to Anthropic's default Managed Agents sandbox. Use it when the hands should live on Vercel and the brain stays on Managed Agents.

### Vercel Connect

Vercel Connect holds Slack or GitHub app credentials so bot code does not store the platform secret. Use it when the Chat SDK adapter would otherwise need those tokens in your env.

### Codex CLI

Codex CLI is OpenAI's local coding agent. It reads, edits, and runs code in the selected directory from a terminal TUI (`codex`), and `codex exec` is the non-interactive door. Install via the standalone installer, npm `@openai/codex`, or Homebrew. Sign in with ChatGPT (Plus, Pro, Business, Edu, Enterprise) or an API key. Same slot as Claude Code and Grok Build: you are at the keyboard, the loop runs on this machine. Docs: [Codex CLI](https://developers.openai.com/codex/cli).

### Codex cloud

Codex cloud runs coding tasks in isolated cloud environments, in parallel, started from the web, GitHub, GitLab, Linear, or Slack. You connect a repo, create an environment (dependencies, secrets, setup), describe the result, and review a summary and diff before opening a pull request. Use it when the task can leave the laptop. Same slot as Cursor Cloud Agents. It is not Codex CLI. Docs: [Codex cloud](https://learn.chatgpt.com/docs/cloud).

### Copilot cloud agent

Copilot cloud agent (formerly Copilot coding agent; GitHub renamed it) is GitHub's asynchronous coding agent. It researches a repository, can write a plan, makes changes on a branch in an ephemeral GitHub Actions environment, and opens a pull request when you ask. Start from an issue, `@copilot` on a PR, the agents panel, IDE, CLI, API, Slack, or Teams. Automations fire it on a schedule or on events. Paid Copilot plans. Hard limit: 59 minutes per session; one branch and one PR per task; GitHub-hosted repos only. Distinct from Copilot **agent mode** in the IDE, which edits locally. Use the cloud agent when the work already lives as a GitHub issue and the laptop can close. Docs: [About Copilot cloud agent](https://docs.github.com/en/copilot/concepts/agents/coding-agent/about-coding-agent).

### Copilot agent mode (IDE)

Copilot agent mode is the local, synchronous agent inside VS Code and the other IDEs. You pair with it in your working tree. Same slot as Cursor Agent mode. It is not Copilot cloud agent.

### Devin

Devin is Cognition's autonomous software engineer. Official rule of thumb: if a person can do the task in about three hours, Devin can likely do it. Strengths they name: parallel tickets, migrations, repetitive engineering, customer-engineering support. Surfaces: `app.devin.ai` (cloud session with shell, IDE, and browser), Devin CLI (`curl -fsSL https://cli.devin.ai/install.sh | bash`, then `/handoff` to cloud), Devin Desktop (the former Windsurf IDE, renamed 2 June 2026), Slack/Teams. Managed Devins are parallel child VMs under a coordinator. Use Devin Cloud when the ticket is specified and the laptop can close. Use Devin CLI when you want the local loop with a later handoff. This desk does not currently assign Devin a seat. Docs: [Introducing Devin](https://docs.devin.ai/get-started/devin-intro).

## Same name, different product

### Claude Managed Agents vs managed subagent

Claude Managed Agents is a hosted REST API where Anthropic runs the loop and the sandbox for a production agent. A managed subagent is an org-admin Claude Code markdown file. If the job is "ship a Slack bot," you want Managed Agents. If the job is "every engineer in this org gets the same code-reviewer worker in Claude Code," you want a managed subagent.

### Skill vs subagent

A skill is a procedure loaded into the current agent. A subagent is a new agent with a new context window. Use a skill when the same head should follow a playbook. Use a subagent when the work would pollute the parent's window, or when you need a fresh head that cannot see how the parent got there.

### Session vs memory

A session is one conversation's log, including tool calls. Memory is what should still be true in the next conversation. Compaction summarizes a session. Memory is curated across sessions.

### Cloud Agent vs long-running agent (Cursor)

A Cloud Agent is *where* the run happens: Cursor's VM, not your laptop. A long-running agent is *how* the harness keeps a multi-hour job from drifting: plan first, then check against the plan. You can have a short Cloud Agent run. You can have a long-running run that is also in the cloud.

### Chat SDK vs Managed Agents

Chat SDK is the chat window and the adapters. Managed Agents is the worker behind the window. The cookbook stacks them: Chat SDK in front, Managed Agents behind, sandbox for the hands.

### Agent SDK vs Managed Agents

The Agent SDK runs Claude Code's loop in a process you host. Managed Agents runs a loop Anthropic hosts. Prototype with the SDK when you need the loop on your machine. Move to Managed Agents when session durability, a hosted sandbox, and no ops are the point.

### Grok Build vs Grok Bot vs Grok 4.6

Grok 4.6 is the model. Grok Build is the local coding agent on this Mac. Grok Bot is the standing teammate on a shared cloud computer. Calling the model, executing on disk, and leaving a duty running overnight are three jobs.

### Grok /dream vs Managed Agents Dreaming

Grok `/dream` consolidates markdown memory files under `~/.grok/memory/` when Grok memory is enabled. Managed Agents Dreaming is a scheduled pass over hosted sessions and memory stores on Anthropic's side. Same verb. Different products. Neither is a Claude Code CLI flag.

### Grok /goal vs Cursor /goal

Grok `/goal` is a local TUI loop that only completes after an independent evidence review. Cursor `/goal` is a long-lived objective on a Cloud Agent. Same slash. Different computer. If you type `/goal` in Grok Build you are not launching a Cursor Cloud Agent.

### /agents vs /dashboard vs /resume vs /workflows (Grok)

In Grok, `/agents` is `/config-agents`: definitions and personas. `/dashboard` is the live session roster. `/resume` is past conversations on disk. `/workflows` is running Rhai workflow jobs. Cursor's agents page is Cloud Agents. Claude Code `/agents` is the subagent picker. If a sentence says "open agents" without which product, it is underspecified.

### Grok Agent mode vs Cursor Agent mode

Grok Agent mode is ACP: Grok as a server an IDE talks to. Cursor Agent mode is the coding pane inside Cursor. Both words are "agent mode." The first is a protocol. The second is an editor feature.

### Grok sandbox vs Managed Agents sandbox

Grok sandbox is kernel policy on the Grok process on this Mac. Managed Agents sandbox is a container Anthropic (or you) host. Grok `strict` still has your disk in the blast radius of anything the profile allows. A Managed Agents sandbox does not.

### Grok subagent depth vs Claude Code nested subagents

A Grok subagent cannot spawn another subagent; nesting depth is one. Claude Code subagents can nest (the live cap has moved; check current Claude Code docs before depending on depth). If a Grok child needs its own workers, the parent fans them out, or a workflow script does.

### Persona vs subagent

A Grok persona changes manners on an existing agent type. A subagent is a new session with a new context. A Claude Code subagent file often bundles both jobs (prompt plus tools) in one markdown file.

### Copilot cloud agent vs Copilot coding agent vs Copilot agent mode

Copilot **coding agent** is the old name. GitHub's current name is Copilot **cloud agent**. Copilot **agent mode** is the local IDE agent. If a sentence says "Copilot agent" without cloud or IDE, it is underspecified.

### Copilot cloud agent vs Cursor Cloud Agents vs Codex cloud vs Devin Cloud

Four vendors, one job: specified coding work on a remote machine, PR as the handoff. Copilot cloud agent is GitHub Actions, GitHub repos, 59-minute cap. Cursor Cloud Agents are Cursor VMs with desktop/browser computer use. Codex cloud is ChatGPT-account environments started from web, GitHub, GitLab, Linear, or Slack. Devin Cloud is Cognition's session with shell, IDE, and browser, plus CLI `/handoff`. Pick the one whose git host and subscription you already have.

### Codex CLI vs Codex cloud

Codex CLI is local, like Claude Code. Codex cloud is remote, like Cursor Cloud Agents. The word "Codex" alone does not say which computer.

### Devin Desktop vs Devin Cloud vs Devin CLI

Devin Desktop is the local IDE (formerly Windsurf). Devin Cloud is the remote session. Devin CLI is the local terminal agent that can `/handoff` to Cloud. Same first name, three computers.

## Choosing

**Who is the user?** If it is you, in a repo, use Claude Code, Cursor Agent, or Grok Build. If it is you, away from the repo, use Cursor Cloud Agents, Claude Code in the cloud, or Cowork. If it is your users, in Slack, a web app, or support, the industry pattern is Managed Agents plus a chat surface. This desk does not take that pattern, because Managed Agents bills on the API meter.

**Whose computer?** Your laptop: local agent. Cursor Cloud Agents when the overnight PR seat already holds it (subscription). Not the Anthropic API, not session-hour runtime.

A task that can be written down completely can leave the laptop. A task that needs the thing on the screen right now should stay local. Putting a file-shaped job in Cowork or Managed Agents buys hosted machinery without buying capability you already have on this machine.

The Claude products run the same models. They differ in what the model can see and touch, and whose computer it runs on. A question you want to think through out loud goes to Chat, because nothing needs touching. A change to a project that lives in folders, code or a knowledge base, goes to Claude Code, because the work is the files, and files are what Code can see and change. A job that crosses tools or repeats on a calendar goes to Cowork, because tools and schedules are what Cowork can reach. A loop you need inside your own server, billed per token, is the Agent SDK; this desk does not pick it. Managed Agents is the hosted version of that same meter. Start in Chat, move to Code the first time you catch yourself copying Chat's answers into files by hand, and open Cowork the first time a job needs two of your tools at once. To choose: list what the job needs to see and touch, and whose computer should hold it. Do not open a platform.claude.com key for agent work on this desk.

## When a term gets its own page

A term stays a heading on this glossary until both of these are true: the blurb no longer fits in a short paragraph, and this desk actually uses the product. Claude Managed Agents and Cursor Cloud Agents are the first candidates. Do not split a page we do not run.

A miss, where we picked the wrong product for a job, is filed on [[wiki/Systems/AI & Agentic Systems/Current Agentic LLM Stack|Agent Wrong-Door Log]] the same day, with the job, the product we used, the product we should have used, and the ruling in the owner's words when there is one.

## What this desk assigns

The roster is dated and lives on [[wiki/Systems/AI & Agentic Systems/Current Agentic LLM Stack|Current Agentic LLM Stack]]; the assignment is not reopened here. Grok Build is the default local loop. Claude Code is the clean-context writer for vault prose. Cursor Agent is for sitting in application files. Cursor Cloud Agent is the overnight PR seat. Grok Bot is standing watch. Managed Agents is not a seat: it bills on the Anthropic API, and this desk does not buy that meter.

| Job | Seat that already holds it |
|---|---|
| Prose that has to read well | Fable in Cowork; rewrite and cold read as Claude Code subagents |
| Vault scripts, banks, regen | Grok Build |
| Sitting in application code | Cursor IDE |
| Overnight PR on a non-wiki repo | Cursor Cloud Agent |
| Standing watch on public sources | Grok Bot |
| Shipping an agent to other people | Not a seat. Managed Agents is API-metered (tokens plus $0.08/session-hour). This desk does not buy that meter. |

## How to practice this

1. Before opening a product, write down who the user of the run is and whose computer does the work. Notice that the product name follows from those two answers.
2. Start in Chat. Move to Claude Code the first time you catch yourself copying Chat's answers into files by hand. Open Cowork the first time a job needs two of your tools at once.
3. Launch Grok Build with the launcher that matches the context: `grok-n1` for personal, `grok-admin` for work. Notice that the wrong launcher leaks history across the two profiles.
4. Give a second writer on the same tree its own worktree with `isolation: worktree`. Notice that two agents editing the same files on 12 June spent the hour merging.
5. When a first request goes to a Grok Bot, name the outcome, its sources, the constraints, the deliverable, and the review point. Notice that approval stays in front of send, publish, purchase, delete, and production change.
6. When a run went to the wrong product, file the miss on Agent Wrong-Door Log the same day. Record the job, the product used, the product that fit, and the ruling in the owner's words.

## Related pages

- [[wiki/Systems/AI & Agentic Systems/Current Agentic LLM Stack|Current Agentic LLM Stack]]: which seat this desk assigns, job by job; the dated roster, where this glossary is the dictionary
- [[wiki/Systems/AI & Agentic Systems/Working With a Model That Cannot Remember|Working With a Model Collaborator]]: operating notes on the top model, where it earns its keep on this desk and where it fails; observed behavior of the public model, including taste-bound failure, not what the name encodes; the judgment model this desk has not moved off
- [[wiki/Systems/AI & Agentic Systems/Automatic and Deliberate Work with AI|Automatic and Deliberate Work with AI]]: the effort dial in depth, when extra thinking pays and when it is decoration; which model to spend where, by depth, not by name
- [[wiki/Systems/AI & Agentic Systems/The Writing Pipeline|The Writing Pipeline]]: the clean-context subagent pattern this vault's writing already runs on
- [[wiki/Systems/AI & Agentic Systems/Grok Bot Primer|Grok Bot Primer]]: always-on Grok Bots, the standing half the teammate actually runs here; the Cursor subscription and Managed Agents session are other vendors' version of "stays up"
- [[wiki/Systems/AI & Agentic Systems/Context Engineering|Context Engineering]]: filling the window the loop can see; the loop itself is named here
- [[wiki/Domains/AI & Tooling/LLM Tool Use|LLM Tool Use]]: tools as channels into a closed model; the harness around those channels is named here
- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]]: the bar on work agents produce; this glossary is only the names
- [[wiki/Glossary|Glossary]]: learning-system terms (encoding, retrieval, WPW); product names stay here
- [[wiki/Concepts/Human vs AI Capability Lens|Human vs AI Capability Lens]]: the facet snapshot that actually decides the pick; the July 4.3 grade that 4.6 has not yet replaced
- [[wiki/Research/Grok Bot Practitioner Bank|Grok Bot Practitioner Bank]]: official docs plus named-runner claims, confidence-tagged
- [[wiki/Research/Grok Bot Field Packet 2026-08-31|Grok Bot Field Packet 2026-08-31]]: five first-party playbooks on x.ai/bot/guides; CoS and per-helper-computer language filed, not copied
- [[journal/2026-08-13-grok-4-6-on-the-frontier|Grok 4.6 on the frontier, not the lead]]: the day-after ranking the Grok 4.6 entry inherits
- [[journal/2026-08-15-what-works-grok-46-and-grok-bot|What works: Grok 4.6 and Grok Bot]]: dated ranking by job, 15 Aug. Not a stack change.
- [[wiki/Research/Grok Build and Cursor Bank|Grok Build and Cursor Bank]]: the lane behind the Build / IDE addendum
- [[journal/2026-08-13-cursor-ultra-month|One month of Cursor Ultra, not a stack change]]: the two assigned harness jobs, still unboarded

## Open questions

- Would a subscription SKU for hosted agents (no per-token, no session-hour) reopen Managed Agents, or does "hosted by Anthropic" stay out even then?
- Prices and plan boundaries moved three times in the three months before August 2026; which of the numbers above is stale by the time you read it?
- Cowork began as a desktop app and now runs in the cloud by default; how long does the local-machine mode stay a supported path?
- What week of this desk's actual loops would move 4.6 from "frontier, not lead" into the judgment seat?
- When does a standing teammate earn a login its owner would not type onto a machine every other teammate can reach?
- After a week in the Cursor IDE, does Tab-plus-visual-review take any daily loop off Grok Build?
- Has the dropped July projection, a Grok release trained on Composer-style data, near Opus parity, been re-graded on a dated card?

## Sources

- [Claude Managed Agents overview](https://platform.claude.com/docs/en/managed-agents/overview): four resources, when to use, beta header, ZDR/HIPAA exclusion; hosted runtime, session-hour billing
- [The evolution of agentic surfaces](https://claude.com/blog/building-with-claude-managed-agents): Anthropic, 10 June 2026: brain/hands split, vaults, session events
- [Agent SDK overview](https://code.claude.com/docs/en/agent-sdk/overview): SDK vs CLI vs Client SDK vs Managed Agents; loop as a library you host
- [Claude Platform pricing](https://platform.claude.com/docs/en/about-claude/pricing): token rates plus $0.08 per session-hour while `running`
- [Chat SDK × Claude Managed Agents cookbook](https://github.com/anthropics/claude-quickstarts/tree/main/managed-agents/chat-sdk): one session per conversation, Chat SDK in front
- [ClaudeDevs, 27 August 2026](https://x.com/ClaudeDevs/status/2092984433649283284): cookbook announcement: Chat SDK surface, Managed Agents harness, optional Vercel Sandbox
- [Build Claude Managed Agents with Chat SDK](https://vercel.com/kb/guide/claude-managed-agents-chat-sdk): Slack thread maps to one session
- [Cursor Cloud Agents](https://cursor.com/help/ai-features/cloud-agents): isolated VMs, PR artifacts, start points
- [Cloud Agents and Cursor Harness Improvements](https://cursor.com/changelog/08-19-26): subscriptions, `/goal`, subagent VMs, Custom Modes, 19 August 2026
- [What are background agents?](https://cursor.com/help/ai-features/background-agents): old name; now Cloud Agents
- Grok Build user guide, `~/.grok/docs/user-guide/`: subagents, skills, hooks, sandbox, plan mode, background tasks, sessions, memory, plugins, project rules, headless, agent mode (ACP), theming (`06-theming.md`), custom models (`11-custom-models.md`), OpenTelemetry (`24-monitoring-usage.md`); read 28 August 2026
- [Codex CLI](https://developers.openai.com/codex/cli): local TUI agent; npm `@openai/codex` 0.150.1 as of 27 August 2026
- [Codex cloud](https://learn.chatgpt.com/docs/cloud): isolated cloud environments, parallel tasks, GitHub/GitLab/Linear/Slack start
- [About Copilot cloud agent](https://docs.github.com/en/copilot/concepts/agents/coding-agent/about-coding-agent): formerly coding agent; Actions environment; 59-minute cap; not IDE agent mode
- [Introducing Devin](https://docs.devin.ai/get-started/devin-intro): three-hour rule of thumb; cloud, CLI, Desktop; `/handoff` to cloud
- [Devin CLI](https://cognition.ai/blog/devin-for-terminal): local start, cloud handoff, 27 April 2026
- [Introducing Claude Fable 5 and Claude Mythos 5](https://platform.claude.com/docs/en/about-claude/models/introducing-claude-fable-5-and-claude-mythos-5): Anthropic, June 2026: the tier, the safeguards split
- [Claude model and effort level in Claude Code](https://claude.com/blog/claude-model-and-effort-level-in-claude-code): the effort dial and its levels
- [Get started with Claude Cowork](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork) and [architecture overview](https://support.claude.com/en/articles/14479288-claude-cowork-architecture-overview): cloud default, local VM mode, plan requirements
- [Claude pricing](https://claude.com/pricing): plan tiers, fetched 2026-08-26
- [TechCrunch on Cowork's web and mobile expansion](https://techcrunch.com/2026/07/07/the-coding-agent-wars-are-spilling-into-the-rest-of-the-office-claude-cowork/): July 2026
- Sonnet 5 and Opus 5 launch coverage: [codersera](https://codersera.com/blog/claude-sonnet-5-launch-guide-2026/), [claudefa.st](https://claudefa.st/blog/models): release dates and launch pricing
- [Grok 4.6 model page](https://docs.x.ai/developers/grok-4-6): call shape, 500k context, reasoning including `xhigh`, $2 / $6
- [Introducing Grok 4.6](https://x.ai/news/grok-4-6): SpaceXAI, 2026-08-12. Launch surfaces
- [Reasoning](https://docs.x.ai/developers/model-capabilities/text/reasoning): effort levels; default high; cannot disable
- [Grok 4.6 in GitHub Copilot](https://x.ai/news/grok-4-6-github-copilot): SpaceXAI, 2026-08-14
- [Get started](https://docs.x.ai/grok-bot/get-started): first-task shape; platforms; Cursor sign-in
- [FAQ](https://docs.x.ai/grok-bot/faq): one computer per user; delete does not clear files or logins; weekly usage. Re-fetched 2026-08-31. Eligible plans, fetched 2026-08-26: both-subscription accounts draw on whichever has more usage
- [Grok Bot Guides](https://x.ai/bot/guides): five first-party playbooks captured 2026-08-31. Packet: [[wiki/Research/Grok Bot Field Packet 2026-08-31|Grok Bot Field Packet 2026-08-31]]
- [Overview](https://docs.x.ai/grok-bot/overview), [Bots](https://docs.x.ai/grok-bot/bots), [Computer and apps](https://docs.x.ai/grok-bot/computer-and-apps), [Skills, routines, and automations](https://docs.x.ai/grok-bot/skills-routines-and-automations), [Approvals, security, and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy)
- [Artificial Analysis on Grok 4.6](https://x.com/ArtificialAnlys/status/2087564648325530099): Intelligence Index 61; Briefcase turn counts
- [Grok Build overview](https://docs.x.ai/build/overview), [Modes and commands](https://docs.x.ai/build/modes-and-commands): TUI, headless, plan mode
- [Cursor quickstart](https://cursor.com/docs/get-started/quickstart), [Agent](https://cursor.com/docs/agent/overview), [Tab](https://cursor.com/docs/tab/overview), [Models & pricing](https://cursor.com/docs/models-and-pricing), [Cloud Agents](https://cursor.com/docs/cloud-agent)
- [Get access with SuperGrok Heavy](https://cursor.com/help/grok-bot/supergrok-heavy): Ultra at $0; duration disagreed with the 13 Aug fetch; the 26 Aug fetch grants Grok Bot usage only
- [Wider availability](https://x.com/bot/status/2090852881373311369): official @bot, 2026-08-21: SuperGrok Plus, Cursor Pro+, Cursor Teams, plus a limited free trial
- Anthropic, [Introducing the next generation of Claude](https://www.anthropic.com/news/claude-3-family), March 2024. Haiku / Sonnet / Opus as a named family.
- Anthropic, [Claude Fable 5 and Claude Mythos 5](https://www.anthropic.com/news/claude-fable-5-mythos-5), 9 June 2026, footnotes 1–2. Mythos-class above Opus; Fable public, Mythos restricted; named for telling.
- Cursor, [Composer 2.5](https://cursor.com/blog/composer-2-5), 18 May 2026. Standard card and the SWE-Bench Multilingual table.
- xAI, [Grok Build 0.1](https://x.ai/news/grok-build-0-1), 29 May 2026. Throughput and unit price, vendor-reported.
