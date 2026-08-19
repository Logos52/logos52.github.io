---
title: "Grok Bot Practitioner Bank"
type: research
status: reference
created: 2026-08-13
updated: 2026-08-15
description: "Claim-by-claim compile of Palmer's 2026-08-11 Grok Bot essay against official docs and the vault's standing-agent pages, plus the first Field packet (2026-08-15)."
tags:
  - research
  - grok-bot
  - agents
---

# Grok Bot Practitioner Bank

Verified research bank, compiled 2026-08-13 from one primary source plus an official-docs check. Raw reference material, not a wiki-register page. Confidence tags ride on every claim: [SOLID] is in the official docs or is Palmer describing a mechanism the docs confirm; [FIRST-PARTY] is Palmer's own usage, not independently checked; [DOCS GAP] is something Palmer names that the published docs do not; [APOCRYPHAL] is a claim that does not survive a search; [PRESS ERROR] is a claim the secondary coverage made that both Palmer and the docs contradict.

Primary source: Matt Palmer (@mattyp), *Intro to Grok Bot*, X article, 2026-08-11, post 2087252657589412119. Full text at [[raw/sources/2026-08-11-mattyp-intro-to-grok-bot|raw/sources/2026-08-11-mattyp-intro-to-grok-bot]]. Official check against docs.x.ai/grok-bot as fetched 2026-08-13 (overview, bots, computer-and-apps, skills-routines-and-automations, approvals-security-and-privacy), re-checked get-started + FAQ 2026-08-15.

Field evidence: first packet [[wiki/Research/Grok Bot Field Packet 2026-08-15|Grok Bot Field Packet 2026-08-15]], from the pinned list [[raw/sources/2026-08-15-grok-guides|raw/sources/2026-08-15-grok-guides]]. Lane 5 is that absorb. Wiki ingest (the table at the bottom) is still not written.

The vault already has three pages on this product, written the next day without this essay: [[wiki/Systems/AI & Agentic Systems/Standing Research Agents|Standing Research Agents]], [[wiki/Systems/AI & Agentic Systems/Grok Bot Fleet Structures|Grok Bot Fleet Structures]], [[wiki/Systems/AI & Agentic Systems/Bot Operating Rules|Bot Operating Rules]]. Lane 4 is the ingest map.

================================================================================
LANE: practitioner-claims
SUMMARY: The essay's load-bearing argument is not a feature list. Personal-agent products have so far spent the user's time on configuration, provisioning, and triage — the work of running an agent rather than the work the agent was hired to do — and Grok Bot is the first one Palmer has used that inverts that. The mechanism he names is a persistent cloud computer the bots share: sign in once, hand the screen back when SSO or a payment blocks, record a workflow once, and let routines fire while the laptop is closed. Everything else in the piece is an instance of that inversion (Demo Bot, Content Bot, grocery, DoorDash) or a sermon about trusting the inversion.
------------------------------------------------------------------------
SOURCE: Palmer — opening frame (the optimization trap)
MECHANISM: Tool-chasing (notes apps, workflows, now personal agents) substitutes the construction of a custom setup for the work the setup was supposed to serve. Prior personal agents reproduced the trap: configuring, provisioning, delegating, and triaging consumed more time than the tools returned. The want-state is an agent that does the same manual computer-work the user already does, without a remote server to provision or a service-account estate to manage.
SPECIFIC: Two concrete sunk costs named — debugging flaky deployments, ignoring weekly iMessage check-ins. The desired object is "the manual things that live on my computer," not a new orchestration surface.
GOAL: Gives the page its problem statement. A standing bot whose output is itself more configuration is the failure mode this source exists to name. [FIRST-PARTY] on the personal history; the trap itself is the same pattern the vault already holds as Quiet Breakage / rent-earned retirement.
------------------------------------------------------------------------
SOURCE: Palmer — "an agent with a computer"
MECHANISM: The product is a persistent Linux VM in the cloud that feels like a fast always-on remote desktop. Bots live on that computer and share its files, browser, and sessions. A sign-in made for one bot is usable by every bot until the session expires. Local files are reachable when the user is chatting via desktop.
SPECIFIC: "Every bot you create lives there." "If you sign in on a website, any of your bots can use that session until it expires." Local access is gated on desktop chat, not automatic.
GOAL: The architectural sentence the rest of the essay spends. Confirmed by official docs (see Lane 2). The phrase "Grok's computer becomes your computer" is marketing compression of the session-sharing rule, not a claim that the VM is the user's Mac. [SOLID] on shared VM + shared sessions; [SOLID] on local access being a separate, setting-gated capability.
------------------------------------------------------------------------
SOURCE: Palmer — handoff
MECHANISM: When a bot hits a wall only the human can clear (login, SSO, 2FA, captcha, payment), it hands the computer over. The human does the blocked step and returns control. For API keys and similar text secrets, the bot sends a secure form rather than asking in chat.
SPECIFIC: The wall-list matches the official handoff list (password/passkey, 2FA, CAPTCHA, payment or identity check, site that requires a human). Official docs add: do not paste passwords or one-time codes into ordinary chat; the secure-secret request is masked, excluded from the transcript, and not shown to the model.
GOAL: The human-in-the-loop surface is takeover of a screen, not a chat confirmation. That is a different trust geometry than "approve this tool call." [SOLID]
------------------------------------------------------------------------
SOURCE: Palmer — record a workflow, then routine it
MECHANISM: Demonstrate the task once; the bot saves the steps; the saved path becomes a routine that fires on a schedule or on a Slack/GitHub event. GTM at Cursor has already built lead-optimization and routing workflows this way.
SPECIFIC: Official name is Teach a task, available gradually, records visible computer interaction for up to ten minutes, does not record microphone audio, and produces a draft skill that still needs decision rules, failure handling, and approval boundaries added by hand. A skill is the reusable method; a routine is the schedule or event that runs it. Event triggers are a separate Cursor-account integration from Slack/GitHub plugins. A bot may own up to 50 routines; the app keeps the 20 most recent run records per routine.
GOAL: The "record once" story is real and bounded. One demonstration is not a finished automation. [SOLID] on the mechanism; [FIRST-PARTY] on the GTM workflows.
------------------------------------------------------------------------
SOURCE: Palmer — three memory layers
MECHANISM: Long-term memory is split user / agent / project. User memory is name, timezone, preferences, writable by any bot. Agent memory is a profile file (explicitly compared to AGENTS.md) plus an interaction log. Project memory holds decisions and conventions that belong to the work rather than to one teammate. An orchestrator bot can collaborate with other bots inside a Project.
SPECIFIC: Official docs confirm named bots keep memory, files, browser sessions, and preferences across turns; they confirm group chats as the visible-handoff surface; they do not publish a three-layer memory model under those names. Official memory guidance is conservative: memory is not a substitute for an authoritative source; changing facts stay in the source system; safety boundaries go in the bot description, not in remembered chat. Account cap: 50 bots and group chats combined.
GOAL: Treat the three-layer taxonomy as Palmer's operating model of the product, not as a documented API. The AGENTS.md analogy is his, and it is the useful one for this vault — a bot's description is the standing rule file. [DOCS GAP] on the three-layer names; [SOLID] on per-bot durable state + group chats; [FIRST-PARTY] on orchestrator-in-a-Project.
------------------------------------------------------------------------
SOURCE: Palmer — when bots run
MECHANISM: Bots run when messaged, on routines, on Slack/git events, and when other bots trigger them. Composability is first-class: bots trigger bots, work in group threads, "thumbs up" messages, ask each other for help.
SPECIFIC: Official docs confirm message, schedule, and (where supported) event triggers, plus bot-to-bot messaging and group chats. They do not document a thumbs-up reaction as a product primitive.
GOAL: The trigger surface is what makes the standing half possible. The joy-of-composability sentences are product-feeling, not architecture. [SOLID] on triggers and bot-to-bot; [FIRST-PARTY] on thumbs-up.
------------------------------------------------------------------------
SOURCE: Palmer — Cursor coupling
MECHANISM: Grok Bot uses the same plugins, connectors, and skills as Cursor. Connectors named: Notion, Slack, GitHub, team MCP servers. For coding work, bots can fire Cursor Cloud Agents. GitHub MCP lets bots run `gh` from the CLI and spin up repos.
SPECIFIC: Official docs confirm connectors show as Plugins, are account-wide (not isolated per bot), and are preferred over clicking through a website when available. Cursor Cloud Agent dispatch is not in the pages checked on 2026-08-13.
GOAL: The setup-cost claim — "most of my context sources were already configured through Cursor" — is why this product is cheap for a Cursor user and expensive for anyone else. [SOLID] on shared plugin surface; [DOCS GAP] on Cloud Agent dispatch.
------------------------------------------------------------------------
SOURCE: Palmer — Demo / Content / Product / grocery / DoorDash
MECHANISM: Five worked examples of the inversion. Demo Bot: daily X-bookmark sweep → draft prompt → human approves → Cursor Cloud Agent in a tech-demos repo → working prototype in ~15 minutes, validated by screen recordings. Content Bot: hourly Slack scan of small ships → suggested social language + Typefully MCP. Product Bot: daily announcement-channel digest. Grocery agent: Instacart vs Amazon, two carts, Friday prompt for Saturday delivery. DoorDash agent: watches Slack for `drd.sh`, alerts, menu options, join-link.
SPECIFIC: Demo Bot is the only example that keeps a human approval in the loop before a write action. Grocery "prompts me to place an order" — the purchase itself is still human. DoorDash stops at a join-link. Content Bot's Typefully access is the closest of the five to an outbound publish surface.
GOAL: These are the ingest-useful specimens. Demo Bot is structurally identical to the vault's Watch/Brief/Intake pattern (sweep → packet → desk). Grocery and DoorDash are the specimens the vault's public-only trust line refuses. [FIRST-PARTY] on all five; none independently reproduced.
------------------------------------------------------------------------
SOURCE: Palmer — closing thesis
MECHANISM: The future on offer is not replacement of human work. It is the collapse of high-cognitive-load UIs into a thing you ask. "Everything is computer, and so is Grok Bot."
SPECIFIC: The sentence that does the work is the earlier one: "simplifying interfaces and eliminating tedium." The replacement-of-work denial is the same claim the vault already made as "judgment stays at the desk."
GOAL: Use the tedium sentence; do not ingest the eschatology. [FIRST-PARTY]

================================================================================
LANE: architecture-verified
SUMMARY: Official docs and Palmer agree on the load-bearing geometry: one persistent cloud computer per user account, shared by every bot; screens are separate work surfaces, not security boundaries; logins, files, cookies, and CLI credentials are common property. Secondary coverage (The Rundown, Instagram recaps) inverted this into "each bot gets its own cloud computer," which is false. The docs are stricter than Palmer on what a bot is allowed to be used as: do not use separate bots as a security boundary; Auto Review is model-based and complements least privilege rather than replacing it; Grok Bot requires data storage and does not support Legacy Privacy Mode.
------------------------------------------------------------------------
SOURCE: docs.x.ai/grok-bot/overview + computer-and-apps — one computer, many screens
MECHANISM: All bots on an account use the same persistent cloud VM (browser, filesystem, terminal). Each bot gets its own screen on that computer, so several bots can use browser and desktop tools in parallel; one bot can run only one computer-use task on its screen at a time. The computer is isolated to the account, not to a bot. `/workspace` is the durable shared filesystem. Files, browser state, and supported sign-ins are designed to survive normal computer updates; temporary directories and manually installed packages are replaceable. Closing the laptop does not stop cloud work.
SPECIFIC: "Treat a login or file placed on the computer as available to all of your Bots." "Do not place a credential or file on it if another Bot on your account should not be able to use it." Recovery/reset lives under Settings → Beta (Update / Recover / Reset Agent Computer).
GOAL: This is the sentence Standing Research Agents already uses ("one shared computer") and the reason that page's trust line is account-scoped rather than bot-scoped. Palmer and the docs agree. Press does not. [SOLID]
------------------------------------------------------------------------
SOURCE: The Rundown (2026-08-11) and downstream recaps — each bot gets its own computer
MECHANISM: Launch coverage compressed the product into "each Bot gets its own cloud computer." That reading is incompatible with both the official overview and Palmer's own "every bot you create lives there."
SPECIFIC: Facebook/Instagram recaps repeated the error within hours. Financial Express (2026-08-12) corrected toward the docs: one cloud VM, multiple named bots sharing sessions.
GOAL: Killed claim, keep dead. A future Intake packet that files "per-bot isolation" as a Grok Bot property is recycling this error. [PRESS ERROR]
------------------------------------------------------------------------
SOURCE: docs.x.ai/grok-bot/bots — what a bot is
MECHANISM: A bot is a durable named teammate with a job, a conversation, and working context. Create a separate bot when the work has a distinct goal, tool set, working style, approval boundary, or recurring schedule. "General Helper" is named as the anti-pattern: less guidance, harder-to-reuse saved context. Description holds standing rules; the conversation holds the task. Hiding a bot does not pause it or its routines. Deleting a bot removes its profile, conversation, and routines; shared-computer files and sign-ins remain. Duplicate copies profile, skills, routines, and avatar, and does not copy conversation history, learned memory, or attachments.
SPECIFIC: Account cap 50 bots and group chats combined. Official example jobs: Talent Scout, Expense Manager, Bug Reproduction. Official description example: "Never contact a customer or change an account without approval."
GOAL: Directly confirms Fleet Structures' "one duty per bot" and Bot Operating Rules' "single task means one standing duty." The official anti-pattern is the generalist. [SOLID]
------------------------------------------------------------------------
SOURCE: docs.x.ai/grok-bot/skills-routines-and-automations — skill vs routine vs event
MECHANISM: Skill = reusable method (when to use, inputs, sequence, validation, return, approval). Routine = when one bot runs a workflow (schedule or event). Event triggers are a separate Cursor-account integration from Slack/GitHub plugins. Broad listeners ("every new message") are explicitly warned against: noise, usage, acting on irrelevant input. Test run performs real work. Design rule: automate preparation before execution; draft/reconcile/recommend first; require approval for send/purchase/delete/publish/production change; include a no-data and stale-data policy.
SPECIFIC: Teach a task: up to ten minutes, no mic, draft skill, add the rules the demo did not show. A bot may be asked whether to keep routines running after a long period away, and routines pause if there is no response.
GOAL: The official design-for-trust list is stricter than Palmer's "I've yet to observe adverse behavior." It is the list Bot Operating Rules should cite when the ingest happens. [SOLID]

================================================================================
LANE: trust-and-safety
SUMMARY: Palmer's safety section and the official security page describe the same three controls — permissions, a review agent, allow/block lists written in natural language — and then they part company. Palmer concludes we are in the "trusting agents era" and that "recent research suggests we're at the point where we should trust agents more than we trust ourselves." The official page says Auto Review is model-based, should complement rather than replace least privilege, and names an explicit list of actions that stay behind approval. The research sentence does not survive a search. The empirical record around computer-use agents includes unauthorized purchases and production-data deletion.
------------------------------------------------------------------------
SOURCE: Palmer — "the answer is mostly trust" + Auto Review
MECHANISM: Logging into Amazon with a computer-use agent means the agent can buy whatever a human at that session could buy. The check is: permissions, a separate review agent, allow/block lists, written in Settings → General → Agent in natural language. "The rules are basically a prompt." Isolated environment. "In my testing, I've yet to observe adverse behavior."
SPECIFIC: Official page (Settings → General → Auto-review) confirms the mechanism and tightens it. Require Approval always stops matching actions. Always Allow proceeds only when automated review does not identify another reason to stop. If both match, Require Approval wins. Write narrow rules around a known action and scope. "Avoid broad rules such as 'allow everything in the browser.'" Auto Review is model-based. Personal Auto-review rules are stored on the current desktop and synced to its Grok Bot computer; verify them separately on another desktop. Default for local-computer execution is Ask every time; Never allowed unless a bot has a specific reason to work on local files. Grok Bot requires data storage and does not support Legacy Privacy Mode.
GOAL: The prompt-as-policy design is real. Palmer's "mostly trust" is a mood; the official page is a constraint list. Ingest the constraint list. [SOLID] on the mechanism; [FIRST-PARTY] on "no adverse behavior in my testing."
------------------------------------------------------------------------
SOURCE: Palmer — "recent research suggests we should trust agents more than we trust ourselves"
MECHANISM: Offered as the intellectual warrant for conditioning ourselves that "rules imposed on agents will hold." No paper, author, or venue is named.
SPECIFIC: Search on 2026-08-13 for the claim and close paraphrases returned Palmer's own sentence being quoted, not a source underneath it. Adjacent published work points the other way: Capgemini's agentic-AI report (trust in fully autonomous agents falling 43% → 27% in one year); PwC 2025 agent survey (trust drops for financial transactions and autonomous employee interactions); *Towards a Science of AI Agent Reliability* (arXiv 2602.16666, Feb 2026) — capability scores rising while reliability lags, citing Replit's July 2025 production-database deletion despite an explicit forbid, and the Washington Post Operator case (unauthorized $31.43 Instacart purchase that violated the product's own confirmation safeguard).
GOAL: Dead claim. Do not cite. The closest empirical neighbour to Palmer's grocery agent is the Operator Instacart purchase, and it is a failure, not a warrant. [APOCRYPHAL]
------------------------------------------------------------------------
SOURCE: docs.x.ai/grok-bot/approvals-security-and-privacy — the actions that stay behind approval
MECHANISM: Prefer explicit boundaries for: sending messages or invitations; publishing content; purchases and financial transfers; deleting or overwriting data; changing permissions; production changes; accepting legal terms. An approval controls the proposed action; it does not reverse work already completed. Do not approve an action whose target or effect you cannot identify.
SPECIFIC: Least-privilege setup: connect only the tools a workflow needs; scoped service accounts where the source system supports them; start with read-only tasks and draft outputs; review connectors and routines regularly; pause a routine when its source system or expected workflow changes. Sign out of a service when it should no longer be available. Deleting a bot does not remove shared-computer files or browser sessions.
GOAL: This is the official quit-signal list. It is also the list that makes grocery-cart-and-Amazon-login usage a chosen risk rather than a recommended pattern. [SOLID]

================================================================================
LANE: vault-friction
SUMMARY: This source does not overturn the vault's standing-agent pages. It supplies the missing first-party specimens for the architecture those pages already described, and it supplies the concrete usage the vault's trust line refuses. Ingest should strengthen the architecture and the refused-usage boundary; it should not import Palmer's "trusting agents era" mood or his grocery/DoorDash pattern as recommended practice.
------------------------------------------------------------------------
SOURCE: Standing Research Agents (2026-08-12) vs Palmer
MECHANISM: The vault page already has the split (standing half / session half), the one-shared-computer geometry, the public-only trust line, and the four lanes (Watch, Brief, Intake, Corpus). Palmer's Demo / Content / Product bots are the same shape as Watch/Brief: sweep a feed, file a packet, wait for a human. Palmer's grocery and DoorDash bots are the opposite shape: the cloud computer holds Amazon/Instacart/DoorDash sessions and acts inside paid consumer UIs.
SPECIFIC: Vault: "the cloud side carries only what is already public." Palmer: "If you log into Amazon with an agent that has access to a computer, technically it can buy whatever it wants." Both sentences are true of the product. Only the first is the vault's rule.
GOAL: Ingest Palmer as a cited practitioner source on architecture and on the configuration-trap problem statement. Do not relax the public-only line. The grocery/DoorDash examples belong on the page as the usage the trust line exists to refuse, not as inspiration. [SOLID] as a contradiction to surface, not to reconcile.
------------------------------------------------------------------------
SOURCE: Bot Operating Rules vs official design-for-trust
MECHANISM: The vault's "the report is the product / no bot fixes what it finds" is stricter than Palmer and aligned with the official "automate preparation before execution; draft first; approval for send/purchase/delete/publish/production." Official docs also confirm the vault's one-duty rule via the named anti-pattern "General Helper."
SPECIFIC: Official event-trigger warning ("avoid broad listeners such as every new message") is the missing citation under Brief's exception-only voice and Intake's scored-packet design. Official "routines may pause after a long period away" is a canary the Steward sketch does not yet name.
GOAL: Ingest two citations into Bot Operating Rules and Fleet Structures: the General Helper anti-pattern, and the pause-after-absence canary. No rule change. [SOLID]
------------------------------------------------------------------------
SOURCE: Current Agentic LLM Stack (updated 2026-08-12)
MECHANISM: The stack page already dates Grok Bot as "beta 2026-08-11" and places it as the standing half. It does not cite a practitioner source.
SPECIFIC: This bank is that source. The Cursor-coupling claim (same plugins/skills, Cloud Agent dispatch) is the one stack fact the page does not currently carry.
GOAL: One source line and, if wanted, one sentence on the Cursor plugin share. Not a stack change. [SOLID]

================================================================================
LANE: field-2026-08-15
SUMMARY: First Field packet. The 15 Aug pinned list plus a same-day docs re-fetch do not overturn the 13 Aug architecture. They add three portable items and restates the refused-usage boundary. Unfetched: Nate's body (paywall), both LinkedIn posts, HN 49261514, VentureBeat. People stay named.
------------------------------------------------------------------------
SOURCE: docs.x.ai/grok-bot/get-started (fetched 2026-08-15) — first-task template
MECHANISM: A first request names five things: outcome, sources, constraints, deliverable, review point. Official example for a no-login start is "summarize this document"; the next example is a dashboard comparison that must not change the dashboard and must ask before a sign-in.
SPECIFIC: "Focused Bots build more useful context than one catch-all Bot." Matches the vault's one-duty rule and the official General Helper anti-pattern. Suggested first teammate on Meet a future teammate is optional; Create your own is the path this vault would take.
GOAL: Citation for Bot Operating Rules ingest — the five-part request is the packet shape, not a new duty. [SOLID]
------------------------------------------------------------------------
SOURCE: Nate, Grok Bot review (2026-08-14) — theme, not task
MECHANISM: After twelve Bots in about eight hours, the rule he kept is that a Bot owns a theme, not a task. Public TOC also names the shared Linux box as both the thing that makes the roster work and the security boundary, and a mom-login handoff.
SPECIFIC: Body not retrieved (Substack paywall). Claims are from the public table of contents and the pinned-list gloss. Theme is wider than one standing duty; left as a watch against General Helper, not as a roster rule.
GOAL: Competitor-diff item, same class as Finn's "ask one agent to design the fleet." Do not ingest as a replacement for one-duty. [FIRST-PARTY] on the rule's existence; body unverified.
------------------------------------------------------------------------
SOURCE: Zakariasson #50 + #70 — fleet spend canary; quiet-when-nothing
MECHANISM: One catalog row is "vet your whole Bot fleet for spend and kill the wasteful ones." Another is an hourly support pass that only pings when a human is needed.
SPECIFIC: #34 (GUI when the API permission is missing) and #39–40 (reconstruct the promise; flag the human-only questions) were already named in the Field-tracker journal. #8 and #75–88 are spend/send/book actions; those stay behind approval or stay refused.
GOAL: #50 is the missing citation under Fleet Structures' Steward / rent-earned retirement. #70 is Brief's exception-only voice in someone else's support queue. [FIRST-PARTY] as setups he had seen, not as jobs this desk will run.
------------------------------------------------------------------------
SOURCE: Atomic Bot explainer + official Teach-a-task bound — short recordings hold
MECHANISM: Official cap is ten minutes, gradual rollout, draft skill that still needs rules. A second-hand day-one review (quoted by Atomic Bot, 2026-08-13) says short recordings worked and a ten-step routine was hard to debug when it broke.
SPECIFIC: Not a named runner in this packet. Keep as [DOCS GAP] / second-hand until someone on the pinned list says it in their own voice.
GOAL: Bounds the "record once" story the same way the 13 Aug bank already did. Do not treat Teach-a-task as a finished automation. [DOCS GAP] on the brittleness claim.
------------------------------------------------------------------------
SOURCE: Palmer overnight follow-up (2026-08-11, post 2087314806596641159)
MECHANISM: Same Demo/Content pipeline and grocery pair, restated against ChatGPT Work. Adds "the ability to run overnight" and a Wii-baseball emulator grind as the persistence specimen.
SPECIFIC: Grocery still "tells me when / where I should order" — purchase stays human in this telling; Zakariasson #78 ("place the grocery order") is the hotter variant. Full text: [[raw/sources/2026-08-11-mattyp-content-bot-overnight|raw/sources/2026-08-11-mattyp-content-bot-overnight]].
GOAL: Persistence already [SOLID] from the docs. Do not ingest the emulator. Grocery stays the usage the public-only line refuses. [FIRST-PARTY]
------------------------------------------------------------------------
SOURCE: Ruben Hassid daily digest via Gmail (public half, 2026-08-12)
MECHANISM: A scored three-beat digest, then "send it to me via Gmail instead." Same shape as Brief. Method is a mail login on the shared computer.
SPECIFIC: The post's UI caption calls the VM "its own computer." FAQ 2026-08-15: one computer per user. Paid section not retrieved.
GOAL: Digest pattern is already Brief. Gmail-as-method is refused. Caption is a vector for the killed per-bot-computer claim. [FIRST-PARTY] on the digest; [PRESS ERROR] risk on the caption.

================================================================================
## Killed claims

- **Each bot gets its own cloud computer.** Press, 2026-08-11. False. One computer per account; screens are not security boundaries.
- **Recent research says trust agents more than ourselves.** Palmer, unsourced. No paper found. Adjacent evidence runs the other way, including an Instacart computer-use purchase that bypassed the product's own confirmation step.
- **Separate bots are a security boundary.** Implied by any roster that puts Amazon on one bot and the wiki on another and treats that as isolation. Official docs forbid this reading.

## Open questions

- Teach-a-task availability: official docs say the control may be enabled gradually. Whether it is on for this account is a five-minute in-product check, not a research question.
- Cursor Cloud Agent dispatch from a Grok Bot is in Palmer and not in the docs pages checked on 2026-08-13.
- The three-layer memory taxonomy (user / agent / project) is Palmer's. Whether the product exposes those layers under those names, or whether "Project" is just the group-chat surface, is unverified.
- No independent reproduction of Demo Bot, Content Bot, grocery, or DoorDash exists in this bank.
- Nate's "theme, not a task" body is paywalled. Whether theme collapses to one duty or to General Helper is a Field watch, not a ruling.
- Teach-a-task brittleness on long routines is second-hand (Atomic Bot quoting a day-one reviewer). Wait for a named runner.
- LinkedIn (Gavrilenko, Gupta), HN 49261514 (jjcm), and VentureBeat/Shumer were not retrieved this packet.

## Ingest map (not yet done)

What this bank would change if folded into the wiki. Nothing below has been written.

| Page | Absorb | Refuse |
| --- | --- | --- |
| [[wiki/Systems/AI & Agentic Systems/Standing Research Agents\|Standing Research Agents]] | Palmer as a Sources line; the configuration-trap problem statement; Demo/Content/Product as same-shape specimens of Watch/Brief; grocery/DoorDash named as the usage the public-only line refuses | "trusting agents era"; trust-agents-more-than-ourselves; any relaxation of public-only |
| [[wiki/Systems/AI & Agentic Systems/Bot Operating Rules\|Bot Operating Rules]] | Official "General Helper" anti-pattern as the citation under one-duty; official design-for-trust list (prepare before execute; no-data/stale-data policy); official first-task template (outcome / sources / constraints / deliverable / review point) | Prompt-as-policy as sufficient; "I've yet to observe adverse behavior" as evidence; Nate's theme-not-task as a replacement for one-duty |
| [[wiki/Systems/AI & Agentic Systems/Grok Bot Fleet Structures\|Grok Bot Fleet Structures]] | Official pause-after-absence as a Steward canary; official 50-bot and 50-routine caps as roster limits; Zakariasson #50 (vet fleet spend, kill waste) as the rent-report specimen | Per-bot isolation as a structure option |
| [[wiki/Systems/AI & Agentic Systems/Current Agentic LLM Stack\|Current Agentic LLM Stack]] | Source line; optional one sentence on shared Cursor plugins | Stack-diagram change |

## Sources

- Matt Palmer, *Intro to Grok Bot*, X article, 2026-08-11, https://x.com/mattyp/status/2087252657589412119 — full text: [[raw/sources/2026-08-11-mattyp-intro-to-grok-bot|raw/sources/2026-08-11-mattyp-intro-to-grok-bot]]
- Matt Palmer, Content Bot + overnight computer, X post, 2026-08-11, https://x.com/mattyp/status/2087314806596641159 — [[raw/sources/2026-08-11-mattyp-content-bot-overnight|raw/sources/2026-08-11-mattyp-content-bot-overnight]]
- Eric Zakariasson, 100 use cases, X thread, 2026-08-11, https://x.com/ericzakariasson/status/2087258914060664902 — [[raw/sources/2026-08-11-zakariasson-100-use-cases|raw/sources/2026-08-11-zakariasson-100-use-cases]]
- Field gold file / pinned list, 2026-08-15 — [[raw/sources/2026-08-15-grok-guides|raw/sources/2026-08-15-grok-guides]]; packet [[wiki/Research/Grok Bot Field Packet 2026-08-15|Grok Bot Field Packet 2026-08-15]]
- Grok Bot docs, fetched 2026-08-13: [overview](https://docs.x.ai/grok-bot/overview), [create and manage bots](https://docs.x.ai/grok-bot/bots), [computer and apps](https://docs.x.ai/grok-bot/computer-and-apps), [skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations), [approvals, security, and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy). Re-fetched 2026-08-15: [get started](https://docs.x.ai/grok-bot/get-started), [FAQ](https://docs.x.ai/grok-bot/faq)
- *Towards a Science of AI Agent Reliability*, arXiv:2602.16666, Feb 2026 — reliability lag; Replit production-DB deletion (July 2025); Washington Post / OpenAI Operator unauthorized Instacart purchase
- Capgemini Research Institute, *Rise of agentic AI* — trust in fully autonomous agents 43% → 27%
- PwC, *AI agent survey* (2025) — trust drop on financial transactions and autonomous employee interactions
