---
title: "Grok 4.6 and Grok Bot"
type: concept
status: developing
created: 2026-08-15
updated: 2026-08-15
source-count: 12
description: "Grok 4.6 is the model. Grok Bot is the standing teammate. SuperGrok Heavy also unlocks Grok Build and the Cursor IDE — different surfaces, same weights."
tags:
  - grok
  - grok-bot
  - models
  - agents
  - agentic-engineering
---

# Grok 4.6 and Grok Bot

SpaceXAI sells a model and a teammate under the same first name. Grok 4.6 is the model you call from an editor, an API, or a coding agent. Grok Bot is the teammate that keeps a cloud computer running after the chat ends.

A third product, Grok Build, sits between them on this desk: a local coding agent that runs the model against the Mac's real files. Calling the model, leaving a teammate overnight, and executing on disk are three jobs. The name collision is why they share a page.

## The model

**Grok 4.6 is a language model with a dated card, not a standing worker.** It shipped 12 August 2026 on the same sticker as 4.5: $2 per million input tokens, $6 per million output, 500k context. Reasoning effort is on by default and cannot be switched off; the extra setting is `xhigh`. Live surfaces the same day: Grok Build, Cursor, the API, OpenRouter, later GitHub Copilot.

The public composite that week put it on the frontier and not in the lead. Artificial Analysis scored it 61 on the Intelligence Index — tied with GPT-5.6 Sol, one to two points behind Claude Opus 5 and Claude Fable 5. The number that actually moved agent work was cheaper loops: on AA-Briefcase it finished in about 53 turns and half a billion input tokens against Opus 5 max at about 103 turns and two billion. DeepSWE and Terminal-Bench v3.0 were the gaps that survived the screenshot. Consumer Grok on the web and on X was still listed as later.

That is a card, not a stack change. Judgment work on this vault still sits on Fable in Cowork. Execution still sits on Grok Build. A week where 4.6 beats Opus 5 on the long knowledge-work loops and hard SWE this desk actually runs would reopen the ranking. A week where Fable's trust premium dies on the pages that currently stay in Cowork would reopen the stack. Neither week has happened. [[wiki/Systems/AI & Agentic Systems/Current Agentic LLM Stack|Current Agentic LLM Stack]] is the dated roster. [[wiki/Concepts/Human vs AI Capability Lens|Human vs AI Capability Lens]] still grades a 4.3 snapshot from July 2026; that row is stale and is not silently re-graded here.

## The teammate

**Grok Bot is a named agent with a job, a conversation, and a computer that does not die when the laptop closes.** Access rides on SuperGrok Heavy, Cursor Ultra, or Cursor Teams Premium. There is no standalone checkout. The desktop app is macOS and Windows; the companion is iOS 18. Linux desktop, Android, and iPad were unsupported at launch. Billing and sign-in live on a Cursor account. Docs live under the model company. Looking under one name for both fails.

Every Bot on one account uses one persistent cloud computer. They share its files, browser sessions, and logins so they can hand work off. Each Bot gets its own screen on that machine. Screens are work surfaces, not security boundaries. Separate Bots are not a security boundary. Deleting a Bot removes its profile, conversation, and routines; files and logins on the shared computer may remain.

When a step needs a person — password, passkey, two-factor code, CAPTCHA, payment, identity check — the Bot hands the screen over and takes it back. Those secrets do not go in ordinary chat. A first useful request names five things: the outcome, the sources, the constraints, the deliverable, and the review point. A **skill** is how a task is done. A **routine** is when one Bot runs that method, on a schedule or on an event. Teach-a-task, where it is available, records up to ten minutes of visible computer use and drafts a skill that still needs rules, failure handling, and approval boundaries written by hand. Approval stays in front of send, publish, purchase, delete, and production change.

Launch coverage said each Bot gets its own cloud computer. The FAQ's sentence is the other way: the computer is assigned per user, not per Bot.

## What this desk does with each

The split already on the stack page is the one that holds.

| Product | What it is | Where the work lives | What it is for here |
|---|---|---|---|
| Grok 4.6 | A model | API, Cursor, Grok Build | The weights either local surface can call |
| Grok Build | A terminal coding agent | This Mac, isolated profiles | Execution the agent drives: plan, edit, test, script |
| Cursor | A VS Code-fork IDE | This Mac, once installed | Sitting in the files: Tab, visual diffs, debugger, Agent as a pane |
| Grok Bot | Named teammates | One shared cloud computer | Standing watch, fetch, and file — public material only |

[[wiki/Systems/AI & Agentic Systems/Standing Research Agents|Standing Research Agents]] is the always-on half: Watch, Brief, Intake, Corpus, packets to the desk. [[wiki/Systems/AI & Agentic Systems/Grok Bot Fleet Structures|Grok Bot Fleet Structures]] is that half at seat resolution. [[wiki/Systems/AI & Agentic Systems/Bot Operating Rules|Bot Operating Rules]] is the operating claim those seats already run: the report is the product, and no Bot fixes what it finds.

The cloud computer holds only what is already public. A grocery cart, a Gmail session, an Amazon login, or a spend that does not stop for a person is the usage that line exists to refuse. Other people's write-ups of those setups are field evidence, not a roster to copy. [[wiki/Research/Grok Bot Practitioner Bank|Grok Bot Practitioner Bank]] is that evidence compiled; [[wiki/Research/Grok Bot Field Packet 2026-08-15|the 15 August Field packet]] is the first named-runner pass.

## Grok Build and the Cursor IDE

SuperGrok Heavy is how this desk reaches both local surfaces. Grok Build is native to the Grok account and is already on this Mac, with personal and work histories isolated by profile. The Cursor IDE arrives by linking that Heavy account; Ultra is created at $0 and includes Grok Bot. Cursor's own help said the month ends, on 13 August, and said it lasts while Heavy renews, on 15 August. Plan as if the month can end. Do not plan as if the IDE is free forever.

Composer 2.5 is a cheap model on Cursor's menu. It is not the IDE. The IDE is the window: syntax, peek, debugger, extensions, git UI, multi-cursor, a visual diff you accept hunk by hunk, and Tab — gray completions while you type, including the next edit and a jump into another file. Agent (Cmd-I) is a pane in that window, not the window. Plan Mode writes a plan and waits. Checkpoints undo Agent edits locally and are not git.

Grok Build is the other way around. You launch it from a project directory. The session is a TUI, or headless `grok -p` for scripts, or the Agent Client Protocol into another app. Plan mode here gates file edits until the plan is approved. Profiles isolate personal history from work. Worktrees, workflows, `/loop`, and this machine's real toolchain live here. There is no Tab. You are not in the file. The agent is.

**Use Grok Build when the agent should drive the session** — a scoped execution loop whose check is a compiler, a test, or a diff you read after. Banks, regen scripts, tsumugu lanes, 多恩刊 paste-into-Build, anything that should run with the editor closed. That is already the stack's execution seat.

**Use the Cursor IDE when you should be in the files** — reading a large tree, accepting hunks by eye, debugging, or letting Tab take the next edit while your hands stay on the keys. Use it also when one turn needs a model Build does not make cheap: Fable or Opus from Cursor's Other Models pool, Privacy Mode on for Fable. Cloud Agents are not this pick. They are Cursor's isolated VM that opens a PR, closer to a Grok Bot handoff than to sitting in the IDE.

Same 4.6 in both is a harness pick, not a model pick. Two writers on one tree failed on 12 June: independent cribs on separate budgets caught a confident misquote, and two agents editing the same files spent the hour merging. Same day, different jobs. One writer per tree. Cursor.app is still not on this Mac; the last hands-on is that June bake-off. A week of Tab-plus-visual-review on tsumugu or wnab is what would make Ultra a habit instead of an access line. Until that week, Build stays the default execution surface.

## What the page is not

This is not a how-to for either product, not a bench table, and not a fleet design. A page that treated the model card as a reason to move judgment off Fable would be doing the rejected reading from the day-after briefing. A page that treated twelve named Bots in an afternoon as a recommended roster would be doing the General Helper anti-pattern under a new count. The cost of keeping the split: four names to hold, and a weekly quota on the standing half that has to earn its rent. The cost of collapsing them: a login typed for one job becomes common property of every job on the account, and a model upgrade gets mistaken for a new worker.

Quit if the next week of real work shows 4.6 taking the judgment seat, or if a standing Bot's packets stop changing what gets opened. The first is a stack decision. The second is a retirement.

The shared name still covers two products. Call the model when the job is a turn. Leave the teammate running when the job is a duty. The computer that survives the closed laptop is the teammate's, and it is one computer.

## Related

- [[wiki/Systems/AI & Agentic Systems/Current Agentic LLM Stack|Current Agentic LLM Stack]] — the dated roster this page does not replace
- [[wiki/Systems/AI & Agentic Systems/Standing Research Agents|Standing Research Agents]] — the standing half the teammate actually runs here
- [[wiki/Systems/AI & Agentic Systems/Grok Bot Fleet Structures|Grok Bot Fleet Structures]] — seats and duties, still unruled past Structure A
- [[wiki/Systems/AI & Agentic Systems/Bot Operating Rules|Bot Operating Rules]] — report-only, one duty, the escalation ladder
- [[wiki/Systems/AI & Agentic Systems/What the Model Names Signal|What the Model Names Signal]] — names as a first look; Grok never rode the verse-form ladder
- [[wiki/Systems/AI & Agentic Systems/Claude Fable|Claude Fable]] — the judgment model this desk has not moved off
- [[wiki/Concepts/Human vs AI Capability Lens|Human vs AI Capability Lens]] — the July 4.3 grade that 4.6 has not yet replaced
- [[wiki/Research/Grok Bot Practitioner Bank|Grok Bot Practitioner Bank]] — official docs plus named-runner claims, confidence-tagged
- [[journal/2026-08-13-grok-4-6-on-the-frontier|Grok 4.6 on the frontier, not the lead]] — the day-after ranking this page inherits
- [[journal/2026-08-15-what-works-grok-46-and-grok-bot|What works: Grok 4.6 and Grok Bot]] — dated ranking by job, 15 Aug. Not a stack change.
- [[wiki/Research/Grok Build and Cursor Bank|Grok Build and Cursor Bank]] — the lane behind the Build / IDE addendum
- [[journal/2026-08-13-cursor-ultra-month|One month of Cursor Ultra, not a stack change]] — the two assigned harness jobs, still unboarded

## Open Questions

- What week of this desk's actual loops would move 4.6 from "frontier, not lead" into the judgment seat?
- When does a standing teammate earn a login its owner would not type onto a machine every other teammate can reach?
- After a week in the Cursor IDE, does Tab-plus-visual-review take any daily loop off Grok Build?

## Sources

- [Grok 4.6 model page](https://docs.x.ai/developers/grok-4-6) — call shape, 500k context, reasoning including `xhigh`, $2 / $6
- [Introducing Grok 4.6](https://x.ai/news/grok-4-6) — SpaceXAI, 2026-08-12. Launch surfaces
- [Reasoning](https://docs.x.ai/developers/model-capabilities/text/reasoning) — effort levels; default high; cannot disable
- [Grok 4.6 in GitHub Copilot](https://x.ai/news/grok-4-6-github-copilot) — SpaceXAI, 2026-08-14
- [Get started](https://docs.x.ai/grok-bot/get-started) — first-task shape; platforms; Cursor sign-in
- [FAQ](https://docs.x.ai/grok-bot/faq) — one computer per user; delete does not clear files or logins; weekly usage
- [Overview](https://docs.x.ai/grok-bot/overview), [Bots](https://docs.x.ai/grok-bot/bots), [Computer and apps](https://docs.x.ai/grok-bot/computer-and-apps), [Skills, routines, and automations](https://docs.x.ai/grok-bot/skills-routines-and-automations), [Approvals, security, and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy)
- [Artificial Analysis on Grok 4.6](https://x.com/ArtificialAnlys/status/2087564648325530099) — Intelligence Index 61; Briefcase turn counts
- [Grok Build overview](https://docs.x.ai/build/overview), [Modes and commands](https://docs.x.ai/build/modes-and-commands) — TUI, headless, plan mode
- [Cursor quickstart](https://cursor.com/docs/get-started/quickstart), [Agent](https://cursor.com/docs/agent/overview), [Tab](https://cursor.com/docs/tab/overview), [Models & pricing](https://cursor.com/docs/models-and-pricing), [Cloud Agents](https://cursor.com/docs/cloud-agent)
- [Get access with SuperGrok Heavy](https://cursor.com/help/grok-bot/supergrok-heavy) — Ultra at $0; duration disagreed with the 13 Aug fetch of the same page
