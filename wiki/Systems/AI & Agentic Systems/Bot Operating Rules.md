---
title: "Bot Operating Rules"
type: workflow
status: seed
created: 2026-08-12
updated: 2026-08-12
description: "Directions for working with the standing bots: reports are the product, fixes come home to the desk, one duty per bot, and the escalation ladder for recurring chores."
tags:
  - agents
  - grok-bot
  - workflows
---

# Bot Operating Rules

Bots watch; the desk changes things. Every rule on this page is that sentence applied to a situation that keeps coming up.

## The report is the product

A bot's job ends at the packet or the push. No bot fixes what it finds, for three stacked reasons:

1. **Constitutional.** The vault's one-writer law: automation reads, only the desk writes — and the wiki is a live public site, so a bot's edit is an unreviewed publish under its owner's name.
2. **Structural.** A bot that fixes its own findings grades its own homework. The durable pattern in the field is agent-proposes-human-merges; agents left to audit and repair their own corpus rot silently while reporting success.
3. **Honest.** Most findings are judgment wearing a chore costume. Merging near-duplicates decides which page dies. Resolving a contradiction declares which claim is the current position. Only the desk knows these things.

## The fix pipeline

Packet → skim and strike disagreements → paste the survivors into a session on the Mac → edits happen in the loop → push. Fixes never route to a second bot: the fleet is off-Mac and public-only by design, and both the vault's working half and the judgment live at the desk. A packet's mechanical items don't change the pipeline — they just move through it fast, approved in batch.

## One duty per bot

"Single task" in the agent guides means one **standing duty** — a job description — never one action. An audit bot's whole duty is "sweep weekly, report"; that is a complete single task. The principle exists for accountability: a one-duty bot has legible output, a clean canary, and a clean rent line, so it is visible the week it quietly breaks. Quiet breakage is how automations have died here before — silently, while looking fine — and multi-duty bots multiply the places that can happen unseen.

The companion distinction: the fleet holds standing duties; episodic judgment work — fixing, deciding, writing — happens in sessions. An episode that recurs is not, by itself, a reason to create a bot.

## The escalation ladder

When the same class of mechanical fix appears three weeks running, automate the class — as a Mac-side script behind a human gate, on the publish-guard pattern. Never as a cloud bot with write access to the live site. The report-only rule does have a price: batches of trivial fixes cost desk minutes a bot could theoretically spend. That price is the fee for a vault whose contents stay trustworthy under its owner's name; pay it, or move the class down the ladder to a gated script.

New bots get born from the quartermaster's rent reports and observed gaps, never from brainstorming. The weekly meter, not the seat count, is the roster limit.

## Quit signals

A lane whose packets go three consecutive runs without changing anything read or done gets retired, and retirement is the system working. The whole apparatus is working when deploy failures arrive as alerts instead of being found by hand, packets collect strikes and survivals every week, and the meter stays inside the included allowance.

## Related

- [[wiki/Systems/AI & Agentic Systems/Grok Bot Fleet Structures|Grok Bot Fleet Structures]] — the seats these rules govern
- [[wiki/Systems/AI & Agentic Systems/Standing Research Agents|Standing Research Agents]] — the structure one level up, and the trust line
- [[wiki/Workflows/Wiki Health Checks|Wiki Health Checks]] — the older manual checks the audit bot now runs on schedule
- [[wiki/Concepts/Human vs AI Capability Lens|Human vs AI Capability Lens]] — why judgment stays at the desk
