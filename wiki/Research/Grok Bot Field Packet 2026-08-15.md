---
title: "Grok Bot Field Packet 2026-08-15"
type: research
status: draft
created: 2026-08-15
updated: 2026-11-10
method: fresh-from-notes-2026-11-10
description: "A desk compilation from 15 August 2026 of official Grok 4.6 and Grok Bot pages, plus named public writeups of setups people had actually run that week."
tags:
  - grok-bot
  - research
  - field-packet
wedge_reviewed: false
---

> Not yet reviewed by Wedge.

# Grok Bot Field Packet 2026-08-15

A pinned source list compiled on 15 August 2026 records first-party pages that were opened or confirmed that day, plus public writeups of setups people had already run. The X connector was down, so the list used public fetches only. It is a packet, not a rewrite of the product docs.

## The model half of the list

Published pages describe how to call the 4.6 model through the API, an SDK, or curl. Those pages record a 500k context window, reasoning settings of low, medium, high, and xhigh, tool use, and pricing of $2 input and $6 output per 1 million tokens. A launch post dated 12 August 2026 presents long-running agents and visual, interactive work, available in Cursor, the coding-agent product, the API, and listed third-party hosts. A 14 August 2026 page explains how to pick the model inside Copilot. Reasoning docs say the default effort is high and cannot be turned off. Release notes and a model card from 12 August 2026 cover pricing tiers, including cached input and prompts over 200k tokens. Consumer web and X surfaces were said to come later. The coding-agent docs name 4.6 as the default model.

Unofficial walkthroughs exist. One repeats an end-to-end API setup and once writes the name with a hyphen, which is not the official form. Another warns that a one-line swap from 4.5 can fail on that same hyphen-versus-dot difference. Generic how-to posts aimed at earlier models were marked thin and skipped.

## The teammate-app half of the list

How-to pages cover install and sign-in, creating a first teammate, and a first-task template with outcome, sources, constraints, deliverable, and a review point. Other pages cover what a teammate agent is and the role recipes for outbound sales, scouting talent, paid-media work, managing expenses, product performance, reproducing bugs, watching account health, and chief of staff. They also cover creating and managing agents, the shared cloud computer, skills and routines, and chat and handoffs. Further pages cover files and evidence, approvals and privacy, a FAQ, troubleshooting, mobile, and the 11 August 2026 launch post. The FAQ states that there is one computer per user, not one computer per agent. A secondary explainer was kept because it helps kill the opposite claim.

Named public writeups from launch week describe setups people actually ran. One demo agent turns bookmarks into a prompt, waits for approval, then starts a cloud coding agent. A second post covers that content pipeline and an overnight computer, including a grocery and delivery example. One catalog of about 100 use cases is offered as a menu rather than a how-to. One review built 12 agents in about 8 hours, with the rule that an agent owns a theme rather than a task. Other writeups describe an executive-assistant-plus-specialists pattern with a human gate, and a named chief-of-staff agent. Still others describe a sourcing workflow that drove a chat app's interface as if it were an API. A quiet daily digest stays silent when nothing changed. One more writeup is a secondary account of another launch-week run.

## What this packet does not do

The packet does not replace first-party docs as a spec. Practitioner writeups are not treated as primary product claims. It does not record later playbooks that were published on the company's guides hub after this compilation date.

## Open questions

If a first task named the outcome, the sources, the constraints, the deliverable, and the review point before any agent started work, what would I stop asking it to invent?

When would one shared computer per person, rather than one computer per agent, change how I hand off a login?

## Sources

- Desk compilation, "Guides and useful posts: Grok 4.6 + Grok Bot," 2026-08-15 (public first-party and named-runner links).
- Model and teammate-app documentation listed in that compilation (public).

## Related pages

- [[wiki/Research/Grok Bot Field Packet 2026-08-31|Grok Bot Field Packet 2026-08-31]]: the later capture of five first-party playbooks on the company's guides hub.
- [[wiki/Research/Grok Bot Practitioner Bank|Grok Bot Practitioner Bank]]: claim-level reading of the launch-week essay and the playbooks.
- [[wiki/Working with Agents/Let an agent check its own work|Let an agent check its own work]]: the review habit those first-task templates are asking for.
- [[wiki/Learning Craft/Don't Outsource the Learning|Don't Outsource the Learning]]: why closing the task and keeping the skill are different scores, including when a Bot is doing the clicking.
