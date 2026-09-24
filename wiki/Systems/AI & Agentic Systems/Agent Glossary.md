---
title: "Agent Glossary"
type: reference
status: developing
created: 2026-08-28
updated: 2026-09-24
method: outline-2026-09-24
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
description: "Names for the agent loop, the window in front of it and the computer it runs on, across Claude, Cursor, Grok, Codex, Copilot and Devin, with the collisions."
written-by: fable
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

An agent is a language model run in a loop: it plans a step, calls a tool, reads what came back, and repeats until the job ends or a person has to step in. Vendors sell that loop under many names, and some names collide, so a name alone does not tell you who the run is for or whose computer does the work. The list below places each name against the job it does, with prices and plan lines last checked 28 August 2026.

## Core takeaways

- Every product name labels one of three jobs: the window a person types into, the loop that plans and calls tools, or the computer where the commands run.
- Pick a model for depth, cost and context size. Pick a product for what the model may touch and whose computer runs it.
- Before choosing, ask who the user of this run is and whose computer does the work. A job that can be written down in full can leave the laptop. A job that needs what is on the screen right now stays local.
- Same-name products differ by computer: Claude Managed Agents is a hosted runtime and a managed subagent is a file inside Claude Code; Codex CLI is local and Codex cloud is remote; Grok /goal and Cursor /goal share a slash and nothing else.
- This desk runs on subscriptions and local hardware. Claude Managed Agents, the Agent SDK and the Messages API, the raw per-token interface to the model, all bill per token, so none of them holds a seat here (ruled 2026-08-28).
- A term stays a heading here until its blurb outgrows a paragraph and this desk uses the product.

## The three jobs

```
 WINDOW            LOOP                COMPUTER
 person types  ->  model plans,    ->  commands run
 Chat, Slack,      calls a tool,       laptop, vendor
 editor pane       reads result,       VM, shared
                   repeats             cloud machine
```

- Window: the chat app, Slack, a Vercel Chat SDK bot, an editor pane. It is who the person talks to, not the worker.
- Loop: Claude Code, Grok Build, Cursor Agent, Managed Agents. It plans, calls tools, feeds results back, and stops when the job ends or waits for a person.
- Computer: the laptop, an Anthropic sandbox, a Cursor VM, a GitHub Actions runner, Grok Bot's shared cloud machine. Damage from a bad command or a planted instruction lands here.

## Shared terms

- Model: the program that reads text and writes the next action. It cannot open a file or post a message on its own.
- Tool: a named action the model asks for, such as run a command or read a file. The loop runs it or asks a person first.
- Harness: everything around the model: tools, system prompt, permissions, retries, sandbox. The model can be swapped; the harness is the product you operate.
- Sandbox: an isolated machine or container where tool calls run, so a bad command has a limited reach. A local agent's sandbox is still the laptop.
- Session: one run and its history. Memory: what should still be true in the next session. Compaction: an automatic summary when the context window fills, so early detail is lost unless it was written to a file.
- MCP: a standard plug for reaching an outside system such as GitHub or Slack. Skill: a written procedure loaded when the task matches. Hook: code that runs at a fixed point, before a command or after an edit, without the model deciding.
- Subagent: a fresh worker with its own context window that hands a summary back. It costs extra tokens and is not automatically parallel.
- Computer use: the agent driving a screen with mouse and keyboard. Slower and more fragile than a tool call; use it when the system has no API.

## Product names

| Name | Loop runs on | Use it when |
| --- | --- | --- |
| Claude Chat | Anthropic, in a chat window | the answer itself is the deliverable |
| Claude Code | the laptop, terminal | a folder of files must change and you steer |
| Claude Cowork | Anthropic cloud by default | the job spans documents, mail, calendar |
| Claude Agent SDK | a process you host, per token | you build your own harness as a product |
| Claude Managed Agents | Anthropic's hosted runtime and sandbox, per token plus session-hours | you ship an agent to other people |
| Cursor Agent mode | the laptop, editor pane | the task needs what is on your screen |
| Cursor Cloud Agents | an isolated Cursor VM per job, hands back a pull request | the task is fully written down and the laptop can close |
| Grok 4.6 | it is the model, not a worker | called from Grok Build or Cursor |
| Grok Build | the laptop, terminal | a scoped loop checked by a compiler, test or diff |
| Grok Bot | one shared cloud computer per account, keeps running | standing watch, fetch and file on public material |
| Codex CLI | the laptop, terminal | same slot as Claude Code |
| Codex cloud | isolated OpenAI cloud environments, returns a diff | same slot as Cursor Cloud Agents |
| Copilot cloud agent | a GitHub Actions runner, 59 minutes per session | the work already lives as a GitHub issue |
| Copilot agent mode | the laptop, inside the code editor | same slot as Cursor Agent mode |
| Devin | Cognition cloud, CLI with handoff, or Desktop | a ticket a person could finish in about three hours |

Cursor Cloud Agents, Codex cloud, Copilot cloud agent and Devin Cloud do one job, specified coding work on a remote machine with a pull request as the handoff. Pick the one whose git host and subscription you already have.

## Same name, different product

- Claude Managed Agents is a hosted REST product for shipping an agent. A managed subagent is a Claude Code worker file an organisation admin deploys to every engineer.
- Cursor Cloud Agent says where the run happens. A Cursor long-running agent says how the harness keeps a multi-hour job on plan. A run can be both.
- Grok /goal is a local loop that finishes only after an evidence review. Cursor /goal is a standing objective on a Cloud Agent.
- Grok /dream consolidates local memory files. Managed Agents Dreaming is a scheduled pass over hosted sessions. Neither is a Claude Code flag.
- Grok agent mode is a protocol (ACP) for an editor to talk to Grok Build. Cursor agent mode is the coding pane in the editor.
- Copilot cloud agent is the current name for Copilot coding agent. Copilot agent mode is the local agent inside the code editor.
- Persistent Agents is not a Cursor product. People mean Cloud Agents plus event subscriptions plus a long-lived /goal.

## On this desk

- Grok Bot bots only report; work passes between them as files in a repository, and only public material goes on the shared cloud computer.
- Application code is written by a Cursor Cloud Agent on its own machine, and the owner merges the pull request. No bot merges.
- One writer per tree. Two agents editing the same files failed on 12 June 2026, and Grok Build's worktree isolation exists for two writers on one tree.
- The dated seat roster lives on Current Agentic LLM Stack.

## Related pages

- [[wiki/Systems/AI & Agentic Systems/Current Agentic LLM Stack|Current Agentic LLM Stack]]: which seat this desk assigns, job by job; the dated roster, where this glossary is the dictionary
- [[wiki/Systems/AI & Agentic Systems/Working With a Model That Cannot Remember|Working With a Model Collaborator]]: operating notes on the top model, where it earns its keep on this desk and where it fails; observed behavior of the public model, including taste-bound failure, not what the name encodes; the judgment model this desk has not moved off
- [[wiki/Systems/AI & Agentic Systems/Automatic and Deliberate Work with AI|Automatic and Deliberate Work with AI]]: the effort dial in depth, when extra thinking pays and when it is decoration; which model to spend where, by depth, not by name
- [[wiki/Systems/AI & Agentic Systems/The Writing Pipeline|The Writing Pipeline]]: the clean-context subagent pattern this vault's writing already runs on
- [[wiki/Systems/AI & Agentic Systems/Grok Bot Primer|Grok Bot Primer]]: always-on Grok Bots, the standing half the teammate actually runs here; the Cursor subscription and Managed Agents session are other vendors' version of "stays up"
- [[wiki/Systems/AI & Agentic Systems/Using Grok Bot|Using Grok Bot]]: standing job vs laptop job
- [[wiki/Systems/AI & Agentic Systems/Cursor Cloud Agents|Cursor Cloud Agents]]: isolated VM, pull request, you merge
- [[wiki/Systems/AI & Agentic Systems/pstack|pstack]]: proof from the running app; this desk uses the rule, not the plugin yet
- [[wiki/Systems/AI & Agentic Systems/Grok Bot Galaxy|Grok Bot Galaxy]]: which habits to keep in Grok Bot after the September 2026 public event, and which to refuse
- [[wiki/Systems/AI & Agentic Systems/Picking a computer|Picking a computer]]: which of the four computers the next job opens
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
