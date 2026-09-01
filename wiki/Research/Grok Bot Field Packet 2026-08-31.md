---
title: "Grok Bot Field Packet 2026-08-31"
type: research
status: packet
created: 2026-08-31
updated: 2026-08-31
description: "Second Field packet: the five first-party playbooks on x.ai/bot/guides, captured 31 August 2026, against the FAQ fetched the same day. Packet only. Does not change the stack."
tags:
  - research
  - grok-bot
  - field
  - agents
---

# Grok Bot Field Packet — 2026-08-31

**Verdict:** the company's own how-to hub does not change the stack. The people who ship the product run a chief of staff, put mail and ads and store listings on the shared computer, and let helpers hand work to helpers without a person in the middle. This desk already refused that middle. Three mechanisms are new enough to absorb: only one helper may declare a finding; a finding is handed as a spec, not a suggestion; reuse the helpers that already exist, add one only after a yes, and cap the group. Grocery, Gmail, Amazon, ads spend, and spend-without-a-gate stay refused. First-party pages now write "own computer" language the FAQ still kills.

**Novelty note.** Entries checked: [[wiki/Research/Grok Bot Practitioner Bank|Practitioner Bank]] (Palmer essay + docs, 2026-08-13), [[wiki/Research/Grok Bot Field Packet 2026-08-15|Field Packet 2026-08-15]] (docs + named X/LinkedIn/Substack runners; hub not opened), [[wiki/Systems/AI & Agentic Systems/Grok Bot Primer|Grok Bot Primer]] (2026-08-25), [[wiki/Systems/AI & Agentic Systems/Grok Bot, Condensed|Grok Bot, Condensed]] (2026-08-27, draft). This packet differs by compiling the five playbooks on [x.ai/bot/guides](https://x.ai/bot/guides), dated 15–27 August 2026, which the 15 August packet never opened. It is not a re-bank of Palmer or of the 11 August use-case catalog.

Pinned list: [[raw/sources/2026-08-31-xai-bot-guides|raw/sources/2026-08-31-xai-bot-guides]]. Each item is who / what they ran / mechanism / new-or-repeat / link / tag.

Zero items would have been legal. This packet is not zero.

## Items

1. **Eric Zakariasson** — *How I run multiple teams of Grok Bots*, 27 August 2026. Each project gets a Grok Bot channel, a roster, and a Notion board. A projects-manager helper opens the channel and staffs it. Staffing rules: reuse existing helpers first; at most five besides the manager, six in the channel as an arbitrary cap; create a new helper only when nothing on the bench fits, and only after a yes. The manager watches the board; a stuck helper marks the card Blocked and pings in the channel. He calls the pattern experimental. Mechanism: coordinate by project-channel, not by one chat per helper, and keep the bench small on purpose. `portable` on reuse-first + create-only-after-yes + cap. `refused-here` on a manager in the middle if that manager holds the logins. Repeat of one-duty if the specialists stay narrow. https://x.ai/bot/guides/how-i-run-multiple-teams-of-grok-bots — deposit [[raw/sources/2026-08-27-zakariasson-multiple-teams|raw/sources/2026-08-27-zakariasson-multiple-teams]].

2. **Ryan Perry** — *Grok Bot for mobile app development*, 25 August 2026. Six seats around the game Rank'em: Mobile Orchestrator, Analytics, Creatives, Engineer, GCS, Bug fix. Analytics is the only helper allowed to declare a finding. Creatives never buys the media. Engineer takes a finding as a spec, not a suggestion. GCS is the only path that reaches players. Bug fix sweeps Sentry overnight, fixes the obvious, and escalates the rest. Meta Ads API was blocked, so he recorded the web upload once and replayed the click-path; the bot was uploading at least one new creative a day. Claimed results: installs from $15 to $1 (15x CPI), D7 retention about 4x, after swapping a party ad for a partner-cut ad and shipping a hint feature. Handoffs go helper-to-helper without routing through him. He writes that each helper has "its own computer." Mechanism: one finder; finding-as-spec; GUI-as-API when the API is blocked; human gate before spend. `portable` on one-finder, finding-as-spec, GUI-as-API, spend gate. `killed` on per-helper computer (FAQ 31 August: per user, not per Bot). `refused-here` on Meta Ads, AppLovin, store logins, and helper-to-helper overnight without a file the owner can open. `crm-only` on the six-seat studio as a roster. https://x.ai/bot/guides/grok-bot-for-mobile-app-development — deposit [[raw/sources/2026-08-25-perry-mobile-app-development|raw/sources/2026-08-25-perry-mobile-app-development]].

3. **John Bai** — *Designing Grok Bot with Grok Bot*, 24 August 2026. Four design helpers: Figma Bro, Motion God, Experiments, Devbot. Experiments made three ambient-access prototypes (notch, corner peek, cursor-follower) before any of them was on a roadmap; none shipped as explored. Motion God worked against the real production animation file on localhost, not a screenshot. Figma Bro filled cards and placed logos through the Figma MCP, using exact positions rather than eyeballing. Judgment stays with him. He writes "agents with their own computers." Mechanism: make the idea tangible before it is sensible; work with the real asset; MCP over approximation. `portable` on real-asset + MCP-exact + Experiments-before-roadmap, for a design seat this desk does not run. `killed` on per-helper computer. Not a roster. https://x.ai/bot/guides/designing-grok-bot-with-grok-bot — deposit [[raw/sources/2026-08-24-bai-designing-grok-bot|raw/sources/2026-08-24-bai-designing-grok-bot]].

4. **Krista Letz** — *Grok Bot for GTM*, 16 August 2026. Chief of Staff owns meeting prep, inbox, post-call drafts, and orchestrates the rest. Other seats: prospecting overnight, one helper per strategic account, data analysis, "10x engineer" product expert, 1:1 prep, forecasting into Salesforce, slides in Figma, sales coach on Gong. Weekly media rundown prompt: save the buyer's industry and signal topics, keep a state file, consume new talks and posts, send one roundup, and if nothing new send a single line saying so. Teach-by-record on a first shared task. Style profile from sent mail. An anti-slop skill. Feedback becomes a skill. Parallel cloud agents. Mobile plus voice. Connects Salesforce, Gmail, Calendar, Sheets, Drive, Slack, Notion, Granola, Figma, X, LinkedIn, the warehouse. Caption: "Grok Bot has its own computer" / "Bot has its own computer that runs 24/7." Mechanism: quiet-when-nothing plus a state file is Recap and Brief; teach-by-record and feedback-becomes-skill are already in the docs. `portable` on weekly rundown + state file + quiet-when-nothing, if the sources are public. `repeat` on teach-by-record and style-from-outbox. `refused-here` on CoS-as-inbox, Gmail, Salesforce, Gong, and any login a sales book needs. `killed` if "its own computer" is read as one machine per helper; the caption can also mean the product computer, which the FAQ allows. https://x.ai/bot/guides/grok-bot-for-gtm — deposit [[raw/sources/2026-08-16-letz-grok-bot-for-gtm|raw/sources/2026-08-16-letz-grok-bot-for-gtm]].

5. **Kevin Niparko** — *Grok Bot for PMs*, 15 August 2026. Attention list: every hour, read email, Slack, Granola, and calendar, and write the projects he is actually in; agents then filter mail and chat against that list, and he can compare it with stated priorities. Chief of Staff is the only generalist, stays quiet if nothing changed, archives Gmail unless the thread names him and maps to the list; he still reviews external sends, purchases, and deletes. Eng mgr does not code: breaks work down, delegates to five eng helpers that spin Cloud Agents, checks output against the goal. Data analyst speaks in charts. PM Pete writes RFCs from threads; also researched a Raspberry Pi part and ordered it off Amazon. Recruiter. Named helpers, separate memory. Agents learn on the job (Slack style guide from past messages). Human on the important stuff. Claim: Grok Bot is a double-digit percent of internal merged PRs. "Always-on agents with their own computer." Mechanism: attention list as what he is actually in, not a stale priority list; quiet-when-nothing; manager does not do the IC work; human on send/buy/delete. `portable` on attention list as an idea, on quiet-when-nothing, on manager-does-not-code, on human-on-send-buy-delete. `refused-here` on Gmail archive, Amazon order, recruiter, and CoS on mail. `killed` if "their own computer" is read as one machine per helper. https://x.ai/bot/guides/grok-bot-for-pms — deposit [[raw/sources/2026-08-15-niparko-grok-bot-for-pms|raw/sources/2026-08-15-niparko-grok-bot-for-pms]].

6. **Official FAQ, re-fetched 2026-08-31** — [FAQ](https://docs.x.ai/grok-bot/faq). Unchanged from 15 August on the load-bearing sentence: "The computer is assigned per user, not per Bot. Do not use separate Bots as a security boundary." Screens are work surfaces on that computer. Delete does not clear files or logins. Teach a task is still ten minutes and gradual. Linux desktop, Android, and iPad still unsupported. Weekly usage with on-demand overage. Legacy Privacy Mode still blocks the product. Access list now names SuperGrok Plus, SuperGrok Heavy, Cursor Pro+, Cursor Ultra, and Cursor Teams Standard and Premium, which matches the 21 August widening already on [[wiki/Systems/AI & Agentic Systems/Grok 4.6 and Grok Bot|Grok 4.6 and Grok Bot]]. `repeat` on architecture. `killed` restated on per-helper computer, now against first-party playbook language, not only press.

## Killed, still dead

- Each helper gets its own cloud computer. FAQ 2026-08-31: "The computer is assigned per user, not per Bot." Perry writes "its own computer" for each of six helpers. Bai writes "their own computers." Niparko writes "their own computer." Letz's caption can be read either way. The FAQ is the spec. First-party marketing is now a vector for the same error the 11 August press made.
- Separate helpers are a security boundary. Same FAQ sentence.
- Trust-agents-more-than-ourselves. No new source revived it.

## Portable, and what this desk does with them

- **One helper declares a finding.** Watch writes whether a site answered. Field writes whether a public write-up would change a file. They do not both get to name the same fact. Absorbed into [[wiki/Systems/AI & Agentic Systems/Bot Operating Rules|Bot Operating Rules]].
- **A finding is a spec.** Watch's fault becomes a pull-request prompt with the file named, not a suggestion a coding agent is free to ignore. Same page.
- **Reuse first, create after a yes, cap the group.** Already the Primer's "new helper from a gap Steward can see." Zakariasson's six-in-a-channel number is his, not a roster limit. The rule is the yes, not the six.
- **Weekly rundown + state file + quiet-when-nothing.** Already Recap and Brief, if the sources are public.
- **GUI-as-API when the API is blocked.** Already in the 15 August packet from the 100-use-case catalog. Still not a reason to put Meta Ads on the shared computer.
- **Real production asset, not a screenshot; MCP for exact geometry.** Useful if a design helper is ever added. Not a seat.
- **Attention list.** Useful as an idea: what he actually opened, not what the week claimed. The method in the playbook reads mail and Slack. This desk would have to build it from public files Brief already reads, or not at all.

## Refused-here, restated

Chief of staff on mail. Gmail archive. Salesforce notes. Gong. Meta Ads and AppLovin spend. Amazon order. Store listings. Helper-to-helper overnight with no file the owner can open. Twelve-bot afternoons and six-seat studios as a roster to copy.

## What this packet does not do

It does not create Field in the product. It does not put a chief of staff on this account. It does not reopen [[journal/2026-08-13-grok-4-6-on-the-frontier|Grok 4.6 on the frontier, not the lead]] or [[journal/2026-08-15-what-works-grok-46-and-grok-bot|What works: Grok 4.6 and Grok Bot]]. Watch and Brief still meter first.

## Sources

- [[raw/sources/2026-08-31-xai-bot-guides|Hub capture, 2026-08-31]]
- [[raw/sources/2026-08-27-zakariasson-multiple-teams|Zakariasson, multiple teams]]
- [[raw/sources/2026-08-25-perry-mobile-app-development|Perry, mobile]]
- [[raw/sources/2026-08-24-bai-designing-grok-bot|Bai, design]]
- [[raw/sources/2026-08-16-letz-grok-bot-for-gtm|Letz, GTM]]
- [[raw/sources/2026-08-15-niparko-grok-bot-for-pms|Niparko, PMs]]
- docs.x.ai/grok-bot/faq, fetched 2026-08-31
- Prior packet: [[wiki/Research/Grok Bot Field Packet 2026-08-15|Grok Bot Field Packet 2026-08-15]]
- Bank: [[wiki/Research/Grok Bot Practitioner Bank|Grok Bot Practitioner Bank]]
