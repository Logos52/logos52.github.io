---
title: "Using Grok Bot"
type: concept
status: developing
created: 2026-09-17
updated: 2026-09-17
description: "A job that must keep running after the laptop closes cannot live in Grok Build or Cursor. Grok Bot is the app for that standing job. This desk uses it for public watch, not for the notes site, dictionary files, or a login every helper could share."
tags:
  - grok-bot
  - agents
  - agentic-engineering
  - workflows
---

# Using Grok Bot

Grok Build is the coding agent on this Mac. It stops when the session stops. Cursor is the editor. It needs you sitting in the files. A job that has to keep running after you close the laptop cannot live in Grok Build or in Cursor. If you use those two for standing watch, you are the clock.

Grok Bot is the desktop app for that standing job. You create a named helper, give it a job, and it works on a computer in the cloud. You talk to the helper in a chat. When a method works, you save it as a skill, which is a written procedure the helper can run again. When that skill should fire without you sitting there, you put it on a clock as a routine. The cloud computer is one machine for every helper on the Cursor account that signs into Grok Bot, so a login typed for one job is there for every other job.

This desk should open Grok Bot for standing watch on public material: fetch, file, report. This desk should not open it to write the notes site, to edit dictionary JSON, or to hold a login you would miss if every helper could use it. How this desk staffs the readers, what it refuses, and how they report is [[wiki/Systems/AI & Agentic Systems/Grok Bot Primer|Grok Bot Primer]]. The dated roster of seats is [[wiki/Systems/AI & Agentic Systems/Current Agentic LLM Stack|Current Agentic LLM Stack]].

## Core takeaways

- Open this app when the work should continue after the laptop closes, on public material. Open Grok Build when the work is files on this Mac. Open Cursor when you need to sit in the files and accept diffs by eye.
- Create one helper with one job. The first message names five things: the outcome, the sources, the constraints, the deliverable, and the review point.
- The cloud computer is one machine for every helper. Take over the screen yourself for passwords, codes, payments, and identity checks. Do not paste those into chat.
- Save a skill after a method works. Run that skill by hand three times. Only then create a routine, on a coarse clock, a few times a day at most.
- A helper that writes application code still does not write the notes site. Proof on a clickable reader is [[wiki/Systems/AI & Agentic Systems/pstack|pstack]]'s rule, not a reason to install that plugin on this app first.
- A three-day public event in September 2026 showed the same objects at company scale. Keep named roles, rules in the description, Lock / Iterate / Hold forks, and draft-only outbound mail. Leave auto-merge, mail on the shared computer, and a chief of staff that holds every login. Depth: [[wiki/Systems/AI & Agentic Systems/Grok Bot Galaxy|Grok Bot Galaxy]].

## Whether this desk should

Use Grok Bot when the duty is standing and the material is already public. Skip it when the work is wiki prose, dictionary entries, tan files on disk, or anything that needs a password you would not type onto a machine every other helper can reach.

A Bot that starts a Cursor Cloud Agent is a coordinator, not a second writer on the same tree. Two writers on one tree failed on 12 June 2026. You merge.

pstack is a coding plugin whose ban is proof from the running app. Do not install it here as the default personality. Install it, if at all, on a reader that already launches, after an agent can drive that reader without you. That page is [[wiki/Systems/AI & Agentic Systems/pstack|pstack]].

## The four objects

A **Bot** is a named helper with a short name, one primary job, and a description of how it should work. The description ends with a line saying what it never does. Focused helpers build more useful context than one catch-all helper. You add another helper with **New → Create new agent** when the work splits into a distinct role.

The **computer** is a persistent cloud desktop: browser, command line, files, connected tools. Every helper on the account uses it. Browser cookies, signed-in sessions, files, and command-line credentials are shared. Each helper gets its own screen, which is a work surface, not a security boundary. Durable files belong in `/workspace`. Temporary directories and packages you install by hand are replaceable when the computer updates.

A **skill** is a reusable method: when to use it, required inputs, the sequence, how to check the result, what to return, and what needs your approval. Skills can be used by more than one helper, but a helper still needs the login or connector the skill calls. Type `/` in the composer to attach a saved skill. Type `@` to attach a helper, a group, a routine, or a connector.

A **routine** tells one helper when to run a workflow: on a schedule, or on an event such as a Slack message or a GitHub notification. Background routines can run while the laptop is closed. A helper can own up to fifty routines. Hiding a helper from the list does not pause its routines; pause the routines first.

A **plugin** is a pack of skills, connectors, or both, installed from **Settings → Plugins**. Connectors are structured links to services. Prefer a connector over clicking through a website when one exists. Installed connectors are account-wide.

## If you sit down at the app

1. Open Grok Bot and sign in with the Cursor account. Computer setup runs in the background. The last step of first-run setup is **Meet a future teammate**.
2. Create a helper with a short name (the setup form rejects a name longer than 255 characters and can report that as a connection error), one job, and a description that ends with what it never does. Example: never change production settings; never send mail; never write the notes site.
3. Send a first task that names the five parts. For a five-minute first result that needs no login, attach a document and ask for a summary with dates, decisions, and open questions cited to a page, and tell it not to change the source file.
4. Open **Agent Computer** from the conversation if the helper needs the browser. Closing the app does not stop cloud work.
5. When the helper hits a password, passkey, two-factor code, CAPTCHA, payment, or identity check, take over the computer, complete only that step, and hand control back. Do not paste secrets into chat.
6. If the method worked, ask the helper to save it as a skill, including the sources, the output format, and the approval boundary.
7. Run that skill by hand three times on safe inputs. Then, if the job should repeat, ask the owning helper to create a routine: schedule, time zone, input, expected result, approval boundary, and what to do when the source is missing. Use **Test run**. A test run does real work.

A first request that is missing any of the five parts is how a helper invents a job you did not ask for.

The product's own order is task, then skill, then routine. Skip the middle and the clock schedules a method that has never worked. A useful skill states when to use it, required inputs, the sequence, how to validate the result, what to return, and what requires approval. If a skill does not appear in the `/` menu, open **Settings → Plugins → Yours** and enable it for the current helper.

**Teach a task**, where it is available, records up to ten minutes of visible computer use and drafts a skill. It does not record microphone audio. The draft still needs decision rules, failure handling, and approval boundaries written by hand.

Event-triggered routines need a narrow matching rule. “Every new message” burns the weekly allowance. Automate preparation before execution. Require approval for sending, purchasing, deleting, publishing, or changing a live system. If the source is missing, report the failure instead of using old data. A fifteen-minute clock is about a hundred runs a day. Coarse clocks, a few times a day at most, are the ones this desk keeps.

## The case against, the cost, and when to quit

The case for this app is that a standing duty on public material should not occupy the laptop. The case against is the shared computer. One account, one machine, every login in common. First-party how-to pages still write “own computer” language for each helper. The FAQ, re-fetched 31 August 2026, is the spec: the computer is assigned per user, not per Bot. Separate helpers are not a security boundary.

The cost is weekly allowance, description maintenance, and attention. A single cheap run can be about one hundredth of one percent of that allowance. Long conversations, fifteen-minute clocks, and helpers talking to helpers are what empty the allowance. One public write-up of a chatty middle helper burned a week's allowance in hours.

Quit a helper whose reports go three runs without changing what you read or do. Quit a routine that fires on every message. Quit a path that needs a login you would miss if it leaked to every other helper. Quit treating Grok Bot as the writer of this notes site.

Checkable expectation: after two weeks, count which notifications you opened. If the count is zero, the helper is not earning its share of the allowance.

## How to practice this

1. Create one helper with one job and a closing line saying what it never does. Send a five-part first task. Notice that a request missing the review point does not stop.
2. Take over the computer for one password or CAPTCHA. Notice that the session then belongs to every helper.
3. Save a skill from a run that worked. Run it by hand three times. Notice what the draft skill left out: failure handling, stale data, approval.
4. Put that skill on a coarse clock. Use Test run. Notice that Test run does real work.
5. When a fork appears, answer Lock, Iterate, or Hold, and name which helper builds. Notice that a fork without those three labels is the helper choosing.

If the duty still needs you at the laptop, this was the wrong app. If the duty ran overnight on public material and you only opened a report, this was the right one.

## Related pages

- [[wiki/Systems/AI & Agentic Systems/Picking a computer|Picking a computer]]: which computer the next job opens; this page is the standing-watch computer
- [[wiki/Systems/AI & Agentic Systems/Cursor Cloud Agents|Cursor Cloud Agents]]: isolated VM for overnight diffs; a Bot may start one and must not merge
- [[wiki/Systems/AI & Agentic Systems/Grok Bot Primer|Grok Bot Primer]]: how this desk staffs readers and friends, and what it refuses
- [[wiki/Systems/AI & Agentic Systems/Grok Bot, Condensed|Grok Bot, Condensed]]: the same setup as short rules
- [[wiki/Systems/AI & Agentic Systems/pstack|pstack]]: proof from the running app; not a reason to install a coding plugin on this app first
- [[wiki/Systems/AI & Agentic Systems/Grok Bot Galaxy|Grok Bot Galaxy]]: the advice from the September 2026 event as rules, with the new ones for coding agents and for keeping bots cheap; not a roster to copy
- [[wiki/Systems/AI & Agentic Systems/Agent Glossary|Agent Glossary]]: Bot, computer, skill, routine, plugin, Cloud Agents
- [[wiki/Systems/AI & Agentic Systems/Current Agentic LLM Stack|Current Agentic LLM Stack]]: which seat already holds each job
- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]]: the bar that a helper's output still has to meet
- [[wiki/Research/Grok Bot Field Packet 2026-08-31|Grok Bot Field Packet 2026-08-31]]: the maker's how-to hub this desk already chose against on mail, ads, and a chief of staff

## Open questions

- After two weeks of using `/` and `@` in the composer, which skills actually appear for which helpers, and which stay buried under Settings → Plugins → Yours?
- Does Teach a task stay hidden on this account, and if it appears, does a ten-minute recording still need the approval boundaries written by hand?
- When a coding helper starts a Cloud Agent, is the pull request small enough to review, or does the coordinator dump a stack that nobody reads?

## Sources

- [Get started](https://docs.x.ai/grok-bot/get-started): install, sign-in, first Bot, five-part first task, takeover for auth, review then skill or routine. Read 2026-09-17.
- [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations): skill before routine, `/` and `@`, Teach a task (ten minutes, no microphone), fifty routines per Bot, Test run does real work, event triggers, design-for-trust list. Read 2026-09-17.
- [Computer and apps](https://docs.x.ai/grok-bot/computer-and-apps): one computer per user, screens are not a security boundary, `/workspace`, connectors as Plugins, recover vs reset. Read 2026-09-17.
- [FAQ](https://docs.x.ai/grok-bot/faq): computer assigned per user, not per Bot. Re-fetched 2026-08-31; load-bearing sentence unchanged in the 17 September read of the computer page.
- [Create and manage Bots](https://docs.x.ai/grok-bot/bots): hide does not pause a routine; catch-all helper named as the thing not to create.
- Forum, 10 September 2026: first-run “Can’t reach your computer” can be a Bot name longer than 255 characters reported as a connection error. https://forum.cursor.com/t/grok-bot-macos-initial-setup-fails-agent-computer-unreachable/171270
- [[wiki/Research/Grok Bot Field Packet 2026-08-31|Grok Bot Field Packet 2026-08-31]]: one-finder, finding-as-spec, refused chief of staff and mail.
- Day 1 X broadcast, 15 September 2026: https://x.com/i/broadcasts/1AxRnZbVpjaxl
- Day 2 X broadcast, 16 September 2026: https://x.com/i/broadcasts/1PKqrNyvmYwGb
- Day 2 public timeline: https://github.com/Roenel/Grok-Bot-Galaxy-Notes/blob/main/TIMELINE-day2.md
- Compiled findings: [[wiki/Systems/AI & Agentic Systems/Grok Bot Galaxy|Grok Bot Galaxy]]
