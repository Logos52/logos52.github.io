---
title: "Bot Operating Rules"
type: workflow
status: seed
created: 2026-08-12
updated: 2026-09-01
description: "Directions for working with the standing bots: reports are the product, one helper declares a finding, a finding is handed as a spec, fixes come home to the desk, one duty per bot, and the escalation ladder for recurring chores."
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

Only one helper may declare a finding. The helper that checks whether a site answered and the helper that reads a public write-up do not both get to declare that finding, because two helpers naming the same event is how a quiet disagreement hides. When a finding has to become work, it is handed as a spec: what is wrong, which file, and how you will know the fix worked, not as a suggestion the next agent is free to ignore. A fault on a public site becomes a pull-request prompt with the file named. That is the rule that the report is the product, applied to a handoff.

## The fix pipeline

Packet → skim and strike disagreements → paste the survivors into a session on the Mac → edits happen in the loop → push. Fixes never route to a second bot: the fleet is off-Mac and public-only by design, and both the vault's working half and the judgment live at the desk. A packet's mechanical items don't change the pipeline — they just move through it fast, approved in batch.

## One duty per bot

"Single task" in the agent guides means one **standing duty** — a job description — never one action. An audit bot's whole duty is "sweep weekly, report"; that is a complete single task. The principle exists for accountability: a one-duty bot has legible output, a clean canary, and a clean rent line, so it is visible the week it quietly breaks. Quiet breakage is how automations have died here before — silently, while looking fine — and multi-duty bots multiply the places that can happen unseen. The product's own bot list names a catch-all helper as the thing not to create: less guidance, and saved context that is harder to reuse. A first useful request names five things: the outcome, the sources, the constraints, the deliverable, and the review point.

The companion distinction: the fleet holds standing duties; episodic judgment work — fixing, deciding, writing — happens in sessions. An episode that recurs is not, by itself, a reason to create a bot.

Automate preparation before execution. Draft, reconcile, and recommend first. Approval stays in front of send, purchase, delete, publish, and a change to a live system. A run with no new data, or with stale data, has a stated policy, not a guess.

## The escalation ladder

When the same class of mechanical fix appears three weeks running, automate the class — as a Mac-side script behind a human gate, on the publish-guard pattern. Never as a cloud bot with write access to the live site. The report-only rule does have a price: batches of trivial fixes cost desk minutes a bot could theoretically spend. That price is the fee for a vault whose contents stay trustworthy under its owner's name; pay it, or move the class down the ladder to a gated script.

New bots get born from the quartermaster's rent reports and observed gaps, never from brainstorming. The weekly meter, not the seat count, is the roster limit.

## Quit signals

A lane whose packets go three consecutive runs without changing anything read or done gets retired, and retirement is the system working. The whole apparatus is working when deploy failures arrive as alerts instead of being found by hand, packets collect strikes and survivals every week, and the meter stays inside the included allowance.

## Related

- [[wiki/Systems/AI & Agentic Systems/Grok 4.6 and Grok Bot|Grok 4.6 and Grok Bot]] — the teammate these rules govern, against the model that shares its name
- [[wiki/Systems/AI & Agentic Systems/Grok Bot Primer|Grok Bot Primer]] — the live setup these rules govern
- [[wiki/Systems/AI & Agentic Systems/Grok Bot Fleet Structures|Grok Bot Fleet Structures]] — the seats these rules govern
- [[wiki/Systems/AI & Agentic Systems/Standing Research Agents|Standing Research Agents]] — the structure one level up, and the trust line
- [[wiki/Research/Grok Bot Field Packet 2026-08-31|Grok Bot Field Packet 2026-08-31]] — one-finder and finding-as-spec as they showed up in a first-party studio playbook
- [[wiki/Workflows/Wiki Health Checks|Wiki Health Checks]] — the older manual checks the audit bot now runs on schedule
- [[wiki/Concepts/Human vs AI Capability Lens|Human vs AI Capability Lens]] — why judgment stays at the desk

## Sources

- [Grok Bot FAQ](https://docs.x.ai/grok-bot/faq) — one computer per user; bots are not a security boundary. Re-fetched 2026-08-31.
- [Create and manage Bots](https://docs.x.ai/grok-bot/bots) — catch-all helper named as the anti-pattern.
- [Get started](https://docs.x.ai/grok-bot/get-started) — first request names outcome, sources, constraints, deliverable, review point.
- [Skills, routines, and automations](https://docs.x.ai/grok-bot/skills-routines-and-automations) — prepare before execute; approval for send, purchase, delete, publish, production change; no-data and stale-data policy.
- [Grok Bot Guides](https://x.ai/bot/guides) — one-finder and finding-as-spec from the 25 August studio playbook. Packet: [[wiki/Research/Grok Bot Field Packet 2026-08-31|Grok Bot Field Packet 2026-08-31]]
