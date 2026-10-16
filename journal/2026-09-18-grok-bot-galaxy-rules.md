---
title: "Grok Bot Galaxy: the rules on one page"
description: "Grok Bot Galaxy was the three-day livestream in September 2026 where the maker of Grok Bot built a company on camera with bots. Its advice comes down to a short set of rules: one job for each bot, a person approving what leaves the account, coding agents that write the code while a person merges, cheap clocks, and reports with a date and a source on every figure."
type: journal
status: active
created: 2026-09-18
updated: 2026-09-18
prose-model: fable
tags:
  - ai
  - grok-bot
  - agents
  - agentic-engineering
---

# Grok Bot Galaxy: the rules on one page

Grok Bot Galaxy was a three-day public livestream, 15 to 17 September 2026. It was run by SpaceXAI, the company that makes Grok Bot. Three of its staff built a company on camera with bots, and guest speakers gave talks between the building. A bot is a named helper with one job that works on a computer in the cloud. The rules below are the event's advice in short form, written for any setup. The longer account is [[wiki/Systems/AI & Agentic Systems/Grok Bot Galaxy|Grok Bot Galaxy]]. It says which of these rules this wiki already had and which were new.

## Why the event was held

The organizer's stated aim was to show how Grok Bot fits each stage of building a business, and to send each viewer home with uses for their own job. The event came five weeks after the product's beta and twelve days after its enterprise release.

Three more aims show in what was put on screen. The first is to move people from asking a chatbot questions to staffing a whole job function with a team of bots. The second is to fill the template marketplace, where people publish shareable copies of a bot's setup. Every giveaway required a template, and the card game the staff shipped uses templates as its cards. The third is to present Grok Bot as the product that starts Cursor Cloud Agents. A Cursor Cloud Agent is a coding agent that runs on its own virtual machine and hands back a pull request.

## Setting up a bot

- **Scope a bot like a job description.** One bot gets one standing job. Bloated context and extra duties slow a bot down. Spend an hour or two writing out the duties before creating the bot.
- **Lasting rules go in the description, and today's task goes in the chat.** Format rules and the line saying what the bot never does sit where every run reads them.
- **Ask a bot to write a file of all its own duties.** Then cut, split or add.
- **Duplicate a bot to get the same setup with an empty memory.** A long chat makes every routine on that bot cost more.

## Keeping bots cheap

- **Use a connector before a browser.** Browser use costs more. Where no connector exists, have the bot watch the site's network requests once and call that API directly after that.
- **Audit routines, and have them report exceptions only.** An hourly routine that finds nothing most hours becomes a weekly one.
- **Adding bots does not remove the slow steps.** The slow steps are the merge that waits on a person, and one person approving every task while status arrives in several chats.

## What a bot may do on its own

- **A bot prepares, and a person approves what leaves the account.** The bot writes drafts and sends nothing. A person approves messages, writes to a customer database, refunds and changes to infrastructure.
- **Answer from public documents.** Internal policy is for deciding and is never pasted into a reply. Low confidence, missing information or an unclear request means handing the item to a person.
- **Hold is the default for anything protective.** When a bot offers to pause a firewall so another bot can get through, leave the firewall alone.
- **Put a fork to the owner as three choices.** Lock, iterate or hold, with the bot that would build it named.
- **Record a decision as a yes or no answer.** Later reports then build on it.

## Running coding agents

- **All code goes through Cloud Agents, and a person merges.** The bot that starts the agent is a coordinator. It collects the proof and stops.
- **Lock a written spec before engineering starts.** One bot writes the spec as a file and marks it locked. The bot that starts the Cloud Agent works from that file.
- **One Cloud Agent for each pull request and its follow-ups.** Open no new pull request against the default branch.
- **Done means merged.** An agent that has finished is not a finished job. A pull request is ready for review only after its checks come back clean several times in a row.
- **Proof is a playable video of the real product, in the pull request text.** A mock does not count. Proof files stay on disk and out of git.
- **Write a verification skill for each app.** It is a folder of instructions in the repo that tells an agent how to launch the app, use each feature the way a user does, and save proof. Run it before agents work unattended.
- **Write a row before work starts.** Task, owner, stage, pull request, agent, last comment.
- **An urgent run gets a short check that ends.** Every five minutes it looks for stalling, long sleeps, too much caution or drift, and it deletes itself once the run is clean.
- **A reading bot can hand a Cloud Agent one small job a day.** The bot picks one item, the agent builds a demo and checks it with screenshots and video, and the bot sends a preview link in the morning. A person still decides what merges.

## Reports

- **Put the date and the source beside every figure.**
- **Keep one status line for the whole roster.** For each bot: the last run, and whether it stayed silent or pinged.
- **One bot owns a shared document such as a playbook.** Other bots read it and never edit it.

## Advice this desk refuses

- Bots in group chats. Here bots pass work through files.
- A chief of staff bot in front of the others, and manager bots over engineer bots. A bot in front has to hold every login, and all the bots share one cloud computer.
- More logins for bots, imported browser cookies, and bots using the owner's IP address. Only public material goes on the shared computer.
- A bot that merges its own fix. No bot merges.
- A bot that learns the owner's voice from texts and email, or builds a list from mail and meetings. Both need private material.
- Routines that tune other routines, and a nightly pass that opens cleanup pull requests across a whole repo.

## What was done with it

The wiki page was rebuilt through Explain First on 18 September 2026. The owner ruled the same day that the page keeps the first day's talks and the advice repeated across talks, and drops the sales, support and marketing talks of the second and third days. He also ruled that the advice is written as general rules, with where each rule came from left to the Sources block. The new rules have not yet been added to the operating pages, [[wiki/Systems/AI & Agentic Systems/Cursor Cloud Agents|Cursor Cloud Agents]] and [[wiki/Systems/AI & Agentic Systems/Using Grok Bot|Using Grok Bot]].

## Sources

- Event hub: https://x.ai/galaxy
- Event page on Luma: https://luma.com/3ifrgttw
- Day 1 X broadcast: https://x.com/i/broadcasts/1AxRnZbVpjaxl
- Day 2 X broadcast: https://x.com/i/broadcasts/1PKqrNyvmYwGb
- Day 3 X broadcast: https://x.com/i/broadcasts/1YGNrbXEeazGw
- Public notes on all three days, taken from slides and shared screens: https://github.com/Roenel/Grok-Bot-Galaxy-Notes
- This desk's own notes on the three broadcasts, taken the same way by a note-taking bot. The broadcasts had no captions, so nothing the speakers said out loud is recorded.
