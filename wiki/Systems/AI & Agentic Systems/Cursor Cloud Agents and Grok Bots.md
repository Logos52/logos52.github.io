---
title: "Cursor Cloud Agents & this fleet"
type: concept
status: seed
created: 2026-09-16
updated: 2026-09-16
source-count: 4
description: "Eggbot-voice operating note: a Cursor Cloud Agent is isolated-VM repo surgery that opens a PR; Grok Bots own lanes and dispatch; Wedge merges. Galaxy Day 1 said manage cloud agents, not replace the fleet."
aliases:
  - Cursor Cloud Agents
  - cursor-cloud-agents-and-grok-bots
tags:
  - cursor
  - grok-bot
  - agents
  - agentic-engineering
  - tooling
---

# Cursor Cloud Agents & this fleet

*wiki note for logos52 — dr eggbot voice. sourced from cursor docs + Grok Bot Galaxy Day 1 (2026-09-15).*

## what they are (one sentence)

a **Cursor Cloud Agent** is a coding agent that runs in its **own isolated cloud VM**, clones a repo, works on a **branch**, and hands you a **PR** (plus screenshots / logs / desktop demos) — not a chat buddy living in your Grok Bot sidebar.

formerly called Background Agents. product names: [[wiki/Systems/AI & Agentic Systems/Agent Glossary|Agent Glossary]]. docs: [Cloud Agents](https://cursor.com/docs/cloud-agent.md).

## what galaxy day 1 hammered home

from the Grok Bot Galaxy livestream (Day 1, [broadcast](https://x.com/i/broadcasts/1AxRnZbVpjaxl) — notes via Galaxy bot):

1. **product pillar: “Manage Cursor Cloud Agents”** — grok bots aren’t a replacement for cloud agents; they’re how you *orchestrate* them (scale workflow, first-party cursor integration).
2. **agents as colleagues** — long-running context, independence (own computer + service access + routines), messaging so you’re not stuck in one chat turn. cloud agents are the colleague that **owns the repo VM**; grok bots are the colleagues that **own the lane**.
3. **auto-fix everything (slide claim)** — monitor CI / integration / deploy → agent jumps in, fixes, proves locally, opens/merges PR. **our fleet version is safer:** Watch *notices* red CI → eggbot launches a cloud agent → **Wedge merges**. no silent auto-merge from Watch/Corpus.
4. **artifacts & proof** — day-1 demos lived on screen shares and overlays; cloud agents attach screenshots/videos/logs to the PR so you don’t have to check out the branch to believe it.
5. **fleet health is visible** — galaxy showed bots/working/messages overlays. we mirror that with Watch’s fleet pulse + Steward friday — cloud agent runs are another row in that honesty story (PR open? CI green?).

takeaway for us: **day 1 wasn’t “replace your bots with cloud.”** it was “bots + cloud agents as one org chart.”

## what they are *not*

| thing | job |
| --- | --- |
| **Grok Bot** (Brief, Watch, Yuedu, eggbot…) | one recurring lane: digest, health, notes, design |
| **box desktop / browser** | signed-in UI chores on the shared machine |
| **Cloud Agent** | **repo surgery** — feature, bugfix, greenfield app, CI-ish coding |

steward’s honesty pin still holds: **shared box ≠ security boundary**. see [[wiki/Systems/AI & Agentic Systems/Grok Bot Primer|Grok Bot Primer]]. cloud agents are *more* isolated (own VM), but they still get whatever secrets and network you give them. humans merge PRs.

## how this plugs into SuperGrok + Cursor

account has **GitHub connected** for Cloud Agents (Logos52 repos: `logos52.github.io`, `tsumugu*`, `grok-bot-packets`, …). cloud runs bill on the **Cursor** side (API pricing / spend limit), separate from “how many bots pinged today.”

kickoff surfaces that matter for us:

- **Grok Bot chat** — eggbot launches via CloudAgent and stays coordinator (galaxy: manage cloud agents from the bot layer)
- **cursor.com/agents** / Desktop “Cloud” — you start one yourself
- **GitHub** — `@cursor` on a PR/issue
- Slack / Linear / API — same agent, different doorbell

seat map for the rest of the desk: [[wiki/Systems/AI & Agentic Systems/Current Agentic LLM Stack|Current Agentic LLM Stack]].

## the mental model for *this* fleet

```
Wedge asks
   │
   ├─ research / life / cast  → existing Grok Bots (Intake, Yuedu, 星野…)
   ├─ design a bot            → eggbot → CreateAgent
   └─ change code in a repo   → eggbot (or you) → Cloud Agent → PR → you merge
                                        ↑
                         Watch may *see* CI red; Cloud Agent may *fix* it
                         Corpus *reports* wiki mold; Cloud Agent may *PR* a fix
                         Galaxy notes livestreams; Cloud Agent implements code lessons
```

don’t make Watch or Corpus into merge bots. keep the fence: **report-only feeders**, **cloud for writes**. that’s how we absorb galaxy’s auto-fix pitch without giving estate bots a merge button.

## how to incorporate — concrete plays

### 1. eggbot as dispatcher (default — galaxy “manage cloud agents”)

when you say “fix X in tsumugu” or “add a page to the wiki”:

1. eggbot scopes the outcome (not line-by-line edits)
2. launches a Cloud Agent on `https://github.com/Logos52/<repo>`
3. you get a card + PR; eggbot can dump the transcript
4. you review / merge

poteto-mode still applies on *our* side: one job, prove it works, unslopped ask. the cloud agent does the coding bar (day 1 chat already mapped to poteto / @poteto culture).

### 2. Watch finds red → Cloud Agent fixes (human gate)

Watch lists Logos52 Actions failures. next step is **not** auto-merge:

- Watch (or you): “CI red on `tsumugu-ed` — here’s the run url”
- eggbot: launch cloud agent — “make CI green; open PR; don’t merge”
- you approve

galaxy slide: auto-fix + merge. **our policy: auto-propose, human merge.**

### 3. Corpus finds mold → Cloud Agent PR

Corpus is report-only. when a monday packet says “dead wikilink / sourceless page”:

- eggbot launches cloud on `logos52.github.io` with the finding
- PR the fix; Corpus’s next run verifies

older manual version of that audit: [[wiki/Workflows/Wiki Health Checks|Wiki Health Checks]].

### 4. Galaxy day-N notes → implementable chores

when Galaxy’s livestream notes include a concrete product lesson (“encode rules in profiles,” “fleet overlay,” “lock/iterate/hold”), eggbot turns the **coding** slice into a cloud-agent task and leaves the **bot-design** slice to CreateAgent / UpdateAgent.

### 5. greenfield without polluting GitHub

“build a small tool” → Cloud Agent with **new Origin repo** (`new_repo`). don’t invent a Logos52 repo just to have a place to push.

### 6. multi-repo when the cut spans packages

tsumugu-core + tsumugu-ed: saved multi-repo environment; keep tasks finite (long-running multi-repo not fully there yet).

### 7. away from laptop

cursor.com/agents or iOS while Brief stays your morning brain. cloud doesn’t need your laptop online — same independence galaxy pitched for “agents with their own computers.”

## environment setup (the boring part that wins)

a cloud agent that can’t run tests is a fancy autocomplete. for Logos52 / tsumugu:

- connect GitHub (done)
- add **secrets** in the Cloud Agents dashboard (not chat, not a shared-box `.env` dump)
- prefer a **saved environment** or `.cursor/environment.json`
- restrict egress if sensitive; Tailscale only if you truly need private nets

## anti-jobs (please keep these)

- don’t launch cloud agents for **Yuedu / Recap / 多恩刊** harvest — wrong tool
- don’t give cloud agents **deploy / DNS / CF write** tokens “because Watch has read tokens”
- don’t treat a draft PR as done — **you** merge
- don’t clone Logos52 onto the Grok Bot box “for a quick look” — cloud or `gh` remote read instead
- don’t ask Brief to “also ship the PR” — Brief is five lines, not a forge
- don’t confuse galaxy’s **demo merge** with our **production merge policy**

## suggested first experiments

1. **this page** — cloud agent PR into logos52.github.io (you’re reading the draft that was meant to land that way)
2. **one CI red** — next Watch flag → eggbot launches a fix-PR agent
3. **packets hygiene** — small supervised chore on `grok-bot-packets`

## Related

- [[wiki/Systems/AI & Agentic Systems/Agent Glossary|Agent Glossary]]: product name, old Background Agents name, start surfaces
- [[wiki/Systems/AI & Agentic Systems/Grok Bot Primer|Grok Bot Primer]]: shared-box fleet, report-only helpers, owner merges
- [[wiki/Systems/AI & Agentic Systems/Current Agentic LLM Stack|Current Agentic LLM Stack]]: Cloud Agent as the overnight / PR-handoff seat
- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]]: cluster hub; person still signs the merge
- [[wiki/Systems/AI & Agentic Systems/Grok Bot, Condensed|Grok Bot, Condensed]]: short rules; same fence (draft until the friends' research is on the wiki)
- [[wiki/Workflows/Wiki Health Checks|Wiki Health Checks]]: the audit Corpus now runs on a clock

## Sources

- [Cursor Cloud Agents docs](https://cursor.com/docs/cloud-agent.md)
- [Capabilities](https://cursor.com/docs/cloud-agent/capabilities.md)
- [Security overview](https://cursor.com/docs/cloud-agent/security.md)
- Galaxy Day 1 notes: Grok Bot Galaxy Livestream, 2026-09-15 — `Galaxy/notes/2026-09-15-day-1-grok-bot-galaxy.md` (broadcast https://x.com/i/broadcasts/1AxRnZbVpjaxl)

---

*written by dr eggbot for wedge’s fleet. day-1 galaxy said manage cloud agents; we actually do. lowercase mad science, uppercase merge button.*
