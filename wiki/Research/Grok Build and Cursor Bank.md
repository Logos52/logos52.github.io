---
title: "Grok Build and Cursor Bank"
type: research
status: reference
created: 2026-08-15
updated: 2026-08-15
description: "Claim-by-claim compile of Grok Build (TUI/CLI) against the Cursor IDE — not Composer — plus SuperGrok Heavy access and this desk's dual-use record."
tags:
  - research
  - grok
  - cursor
  - agents
---

# Grok Build and Cursor Bank

Verified research bank, compiled 2026-08-15. Raw reference material, not a wiki-register page. The question is when to sit in which surface. Composer 2.5 is a model inside Cursor, not the IDE, and is out of the comparison except as a named item on Cursor's model menu.

Confidence tags: [SOLID] official docs or a mechanism this desk has run; [FIRST-PARTY] a named practitioner; [DOCS GAP] named in one place and missing in the other; [CONTRADICTION] two official or vault sources disagree; [PRESS] secondary writeup.

Primary check: Grok Build docs at docs.x.ai/build (overview, modes-and-commands) and the local user guide under `~/.grok/docs/user-guide/` as of this machine; Cursor docs at cursor.com/docs (quickstart, agent, tab, models-and-pricing, cloud-agent) and help/grok-bot/supergrok-heavy, fetched 2026-08-15. Desk record: [[journal/2026-08-13-cursor-ultra-month|Cursor Ultra month]], [[journal/2026-06-12-tsumugu-bakeoff-and-dual-crib-line|12 Jun bake-off]], [[journal/2026-06-12-grok-workstream-maximum-offload|12 Jun roster cut]].

This desk's `grok` binary is installed and aliased to `grok-n1`. Cursor.app is not in `/Applications` and `which cursor` is empty as of this compile.

================================================================================
LANE: what-each-product-is
SUMMARY: Grok Build is a terminal coding agent you launch from a project directory. Cursor is a VS Code fork you sit inside. Both can call Grok 4.6. That shared model is why people collapse them. The surfaces do not collapse.
------------------------------------------------------------------------
SOURCE: docs.x.ai/build/overview + local 01-getting-started.md — Grok Build
MECHANISM: Interactive TUI, headless (`grok -p`), or Agent Client Protocol into other apps. Install is a curl script. First launch authenticates in a browser, or via `XAI_API_KEY`. Custom models can be added in `~/.grok/config.toml`. The same `grok-4.6` weights are on the xAI API.
SPECIFIC: Local help lists worktrees, plan mode, headless, subagents, workflows, sandbox, permissions, `/loop` background tasks, isolated `GROK_HOME` sessions. This desk already uses two profiles: `grok-n1` → `~/.grok`, `grok-admin` → isolated work history. `grok --help` on this Mac advertises `--worktree`, `--always-approve`, `--continue`, `--cwd`.
GOAL: Build is the session. You are not in an editor. You are in a TUI that edits files and runs the toolchain. [SOLID]
------------------------------------------------------------------------
SOURCE: cursor.com/docs/get-started/quickstart + agent/overview + tab/overview — Cursor IDE
MECHANISM: Download an editor, sign in, pick a folder. The window is a code editor. Agent (Cmd-I) is a pane: search, edit, terminal, web, browser, image gen, queued follow-ups, checkpoints stored locally and separate from Git. Plan Mode (Shift-Tab) researches, asks, writes a plan, waits. Ask is read-only. Tab is gray inline completion as you type, including multi-line, jump-to-next-edit, and cross-file portals.
SPECIFIC: Official Tab page: accept with Tab, word-by-word with Cmd-Right, snooze or disable per extension. Agent has no documented cap on tool calls per task. Checkpoints undo Agent edits; Git remains the permanent history. The editor still has the VS Code surface: diffs, debugger, extensions, git UI, multi-cursor, peek. Those are not Agent features. They are why the product is an IDE.
GOAL: Cursor is the editor. Agent is one pane. Tab is the thing Grok Build cannot do. Composer 2.5 is a cheap model in the Cursor Models pool, not this surface. [SOLID]
------------------------------------------------------------------------
SOURCE: cursor.com/docs/cloud-agent — Cloud Agents
MECHANISM: Same agent fundamentals in an isolated cloud VM: clone, install, test, browser, MCP, artifacts, remote desktop. Kickoff from desktop (Cloud dropdown), iOS, cursor.com/agents, Slack, GitHub comment, Linear, API. Needs source-control connected. Charged at API rates for the selected model. Formerly called Background Agents.
SPECIFIC: Multi-repo supported; long-running not available for multi-repo yet. Hooks from `.cursor/hooks.json` run in the cloud VM; `~/.cursor/hooks.json` does not, because the VM has no home directory. Palmer's Demo Bot launches this after a human approval — already in the Grok Bot Practitioner Bank.
GOAL: Cloud Agents are Cursor's standing-ish write surface, not the IDE. They overlap Grok Bot more than they overlap Grok Build. [SOLID]
------------------------------------------------------------------------
SOURCE: docs.x.ai/build/overview — ACP
MECHANISM: Grok Build can be driven from other apps through the Agent Client Protocol. A community VS Code/Cursor extension exists that gives the Build agent workflow (diffs, permissions, sessions) inside those editors.
SPECIFIC: Third-party how-tos describe "Grok Build for VS Code (Community)" on VS Code 1.106+ and Cursor 3.x. Not opened as a first-party xAI page this pass.
GOAL: Putting Build *inside* Cursor is a third surface, not a reason to pick one product. [PRESS] on the extension; [SOLID] that ACP is a documented Build mode.

================================================================================
LANE: access-and-price
SUMMARY: SuperGrok Heavy is how this desk reaches both. Build is native to the Grok account. Cursor Ultra is a linked promo. The duration of that promo moved between 13 Aug and 15 Aug in Cursor's own help page.
------------------------------------------------------------------------
SOURCE: cursor.com/help/grok-bot/supergrok-heavy, fetched 2026-08-15
MECHANISM: Link one SuperGrok Heavy Grok account to one Cursor/Grok Bot account. Qualifying customers get Cursor Ultra created at $0, which includes Grok Bot. No Cursor card. Already-on-Ultra gets nothing extra. Team accounts ineligible. One Grok account cannot run the promo on two Cursor accounts.
SPECIFIC: 15 Aug text: "The subscription remains active at no charge so long as the SuperGrok Heavy plan is active on renewal." 13 Aug journal, same URL, recorded: one free month at $0, no repeat, no auto-renew, month scheduled to end. Those two fetches disagree.
GOAL: Do not settle the duration in the wiki addendum as a fact. Record the contradiction. This desk's 13 Aug plan (score two jobs before day 25) still works under either reading. [CONTRADICTION]
------------------------------------------------------------------------
SOURCE: cursor.com/docs/models-and-pricing, fetched 2026-08-15
MECHANISM: Two pools. Cursor Models (Grok 4.6, Grok 4.5, Composer 2.5) have generous included usage. Other Models (Fable 5 $10/$50, Opus 5 $5/$25, Sol $5/$30, Terra, Gemini, …) are API-priced; Ultra includes $400 of that pool. Tab completions unlimited on Pro and above. Ultra $200/mo if paid. Grok 4.6 in Cursor is $2/$6, jointly trained, cache read $0.50. Fast variant is 2×. Fable 5 in Cursor requires Privacy Mode on individual accounts.
SPECIFIC: Ultra also includes Cloud Agents and Bugbot. Start (India) has Cursor Models only, fixed medium effort, no Fast. Power-user guidance: $200+/mo total usage.
GOAL: Same 4.6 sticker in Cursor and on the API. Fable-in-Cursor is the expensive harness test, not the daily default. [SOLID]
------------------------------------------------------------------------
SOURCE: this Mac, 2026-08-15
MECHANISM: `grok` is on PATH, aliased to `grok-n1`, `GROK_HOME=~/.grok`. Cursor.app is not installed.
SPECIFIC: The 13 Aug journal already said this. Two days later it is still true. Heavy access to Cursor Ultra is unused until an install.
GOAL: An addendum that says "when you are in Cursor" is describing a surface this desk has not sat in this month. The June bake-off is the last hands-on. [SOLID]

================================================================================
LANE: desk-record
SUMMARY: This desk has already paid the dual-use bill once. Independent cribs on separate budgets caught a confident misquote. Two writers on one tree was the failure. The roster was cut and restored inside an hour. That is the load-bearing specimen, not a Medium post.
------------------------------------------------------------------------
SOURCE: journal 2026-06-12 bake-off
MECHANISM: Grok Build and Cursor ran the same 10 research cribs on separate budgets. Fable judged. Both viable, differently fallible. Cursor caught a 說文 split Grok missed. Cursor also misquoted 敵's line with the adjacent entry's gloss (勍). `crib_diff.py` on that pair caught the leak. Dual-use earned its keep as a cross-check, then coordination cost was priced.
SPECIFIC: Stories stayed Fable-only (Grok announcing tails; Cursor vignette-stapling). Words stayed Sonnet. Grok-shell panicked on CJK bytes in plan-mode path display — exec-mode with ASCII filenames used instead.
GOAL: Two agents on the *same* characters, different budgets, merge by script. Not two agents editing `entries/`. [SOLID]
------------------------------------------------------------------------
SOURCE: journal 2026-06-12 evening roster
MECHANISM: Owner cut Cursor (and Sonnet, Composer) to three seats, then reversed within the hour because the cross-check and the cheap word lane justified the coordination cost.
SPECIFIC: "two writers on one tree" is the named failure in the 15 Aug what-works journal, pointing at this day.
GOAL: Dual-use is legal as reviewer/cross-check. Dual-use as two writers is the June failure. [SOLID]
------------------------------------------------------------------------
SOURCE: journal 2026-08-13 Cursor Ultra month
MECHANISM: Two assigned jobs, then stop. Arm D: Fable 5 pinned in Cursor Agent on the three A/B/C pages. One Grok 4.6 bank in Cursor, compared to a Build bank. Flip: Cursor Fable beats Cowork Fable blind; or the Cursor bank finds a miss a Build bank would drop; or Tab-plus-visual-review is how the owner wants to sit with tsumugu/wnab for a week.
SPECIFIC: Those two jobs have not been boarded as of this bank. Harness remains unscored. The journal's "not a fourth standing agent" still holds.
GOAL: An addendum can route by surface. It cannot claim Cursor won a job this desk has not scored since June. [SOLID]

================================================================================
LANE: routing
SUMMARY: Pick by where your hands are and whether a check is cheap. Same 4.6 in both is a harness pick. The IDE is for sitting in the files. Build is for running an agent against the files. Cloud Agents and Grok Bot are the overnight write/watch pair, and they are not this comparison except as a pointer.
------------------------------------------------------------------------
SOURCE: derived — when Grok Build is the better surface
MECHANISM: The work is a session the agent should drive: plan, edit, test, commit, from a project directory, with this machine's real toolchain. Isolation by `GROK_HOME` / profile matters (n1 vs admin). The job is scriptable (`grok -p`, workflows, `/loop`). The output is a diff you read in the terminal or in git, not a file you are mid-edit. Headless CI and worktrees belong here.
SPECIFIC: This desk already runs wiki regen, banks, and tsumugu execution this way. 多恩刊 is Bot packet → paste → Build. Official Build plan mode gates file edits until the plan is approved, independent of permission mode.
GOAL: Default for execution on this stack. [SOLID] as this desk's practice; official plan-gate is [SOLID]
------------------------------------------------------------------------
SOURCE: derived — when the Cursor IDE is the better surface
MECHANISM: You are in the files. You need the editor: syntax, peek, debugger, extensions, git UI, multi-cursor, a visual diff you accept hunk by hunk. Tab should complete the next edit while you type. You want Agent as a pane, not as the whole window. You want to pick Fable or Opus or Sol for one Agent turn without leaving the repo. You want checkpoints as a local undo of Agent edits, separate from git.
SPECIFIC: Official Tab and Agent pages are the evidence that these features exist. This desk has not sat in them since June. Cloud Agents are a different pick: overnight, isolated VM, PR as the handoff — closer to Palmer's Bot→Cloud Agent than to "open the IDE."
GOAL: Default for hands-on reading and editing, and for any turn that needs a model Build does not make cheap (Fable/Opus in the Other Models pool). Unscored as a daily habit on this Mac until install + a week. [SOLID] on the features; [FIRST-PARTY] pending on whether this desk wants that week.
------------------------------------------------------------------------
SOURCE: derived — when neither, or both
MECHANISM: Taste-bound wiki prose stays Fable in Cowork. Standing public watch stays Grok Bot. Two writers on one tree stay forbidden. Same-day, different jobs is the documented dual-use: Build runs a lane; Cursor is used to read or to run an independent crib; `crib_diff` merges. Putting Build-via-ACP inside Cursor is optional sugar, not a routing rule.
SPECIFIC: Reddit majority frames SuperGrok vs Cursor as an *or*. Named dual-use (Morgan Linton; this desk on 12 Jun) is the minority and it is job-split, not brand-split.
GOAL: Access through Heavy is not a reason to run both on every task. [SOLID] on the desk rule; [PRESS] on the Reddit majority.

================================================================================
## Killed claims

- **Cursor is Composer.** Composer 2.5 is a $0.50 / $2.50 model in the Cursor Models pool. The IDE is the window.
- **Grok Build and Cursor are the same product because both run 4.6.** Shared weights. Different surfaces. Different isolation (GROK_HOME profiles vs Cursor account). Different thing you cannot do in the other (headless/profiles vs Tab/editor).
- **SuperGrok Heavy Ultra is settled as one month.** Cursor help 15 Aug contradicts the 13 Aug fetch. Leave open.
- **Installing Cursor makes it a standing agent.** The 13 Aug journal already refused this. An IDE you sit in is not Watch/Brief.

## Open questions

- Which Ultra-duration sentence is current on renewal? In-product check, not more fetching.
- Does Tab-plus-visual-review become how this desk sits with tsumugu or wnab for a week? Only a week of sitting answers it.
- Arm D and the one Cursor bank are still unrun. Until they board, Cursor has no new scored win on this desk.

## Ingest map

| Page | Absorb | Refuse |
|---|---|---|
| [[wiki/Systems/AI & Agentic Systems/Grok 4.6 and Grok Bot\|Grok 4.6 and Grok Bot]] | Addendum: Heavy unlocks Build and the Cursor IDE; routing table by surface; one writer per tree; Ultra-duration contradiction named | Composer as the comparison; Cursor as a fourth standing agent; settling Ultra as one month or as forever-while-Heavy |
| [[journal/2026-08-13-cursor-ultra-month\|Cursor Ultra month]] | Footnote: 15 Aug help text disagrees with this entry's duration | Silent overwrite of the 13 Aug verdict |
| [[journal/2026-08-15-what-works-grok-46-and-grok-bot\|What works]] | Harness row can now say "route by surface; still unscored as a habit" | Claiming Cursor won |

## Sources

- [Grok Build overview](https://docs.x.ai/build/overview), [Modes and commands](https://docs.x.ai/build/modes-and-commands) — fetched 2026-08-15
- Local user guide: `~/.grok/docs/user-guide/01-getting-started.md`, `14-headless-mode.md` — this machine
- [Cursor quickstart](https://cursor.com/docs/get-started/quickstart), [Agent](https://cursor.com/docs/agent/overview), [Tab](https://cursor.com/docs/tab/overview), [Models & pricing](https://cursor.com/docs/models-and-pricing), [Cloud Agents](https://cursor.com/docs/cloud-agent) — fetched 2026-08-15
- [Get access with SuperGrok Heavy](https://cursor.com/help/grok-bot/supergrok-heavy) — fetched 2026-08-15; contradicts [[journal/2026-08-13-cursor-ultra-month|the 13 Aug fetch]] on duration
- [[journal/2026-06-12-tsumugu-bakeoff-and-dual-crib-line|12 Jun bake-off]], [[journal/2026-06-12-grok-workstream-maximum-offload|12 Jun roster]]
