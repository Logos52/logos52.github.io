---
title: "Grok Bot Galaxy"
type: research
status: developing
created: 2026-09-17
updated: 2026-09-18
description: "Grok Bot Galaxy was a three-day livestream in September 2026 where the maker of Grok Bot built a company on camera with bots. Most of its advice matches rules this wiki already had. Its rules for running coding agents and for keeping bots cheap were new. A manager bot in front of the others, and more logins for bots, stay refused."
method: explain-first-2026-09-18
prose-model: fable
tags:
  - grok-bot
  - research
  - agents
  - agentic-engineering
---

# Grok Bot Galaxy

Grok Bot Galaxy was a three-day public livestream, 15 to 17 September 2026, run by SpaceXAI, the company that makes Grok Bot. Three of its staff built a company on camera from The Howard in San Francisco and did every job through bots. A bot is a named helper with one job that works on a computer in the cloud. Between the building, guest speakers gave talks on how one kind of team uses the product. The company the three staff shipped is Thursday Arena, a browser card game.

Most of the advice given over the three days is advice this wiki already had. One bot gets one job. Lasting rules go in the bot's description. A bot prepares drafts and a person approves anything that leaves the account. Coding agents write the code and the owner merges. The people who build the product ran their own bots under the same rules. That is outside confirmation that the rules hold.

A smaller part of the advice was new here. It covers how to run Cursor Cloud Agents, and how to keep bots cheap and their reports checkable. A Cursor Cloud Agent is a coding agent. It runs on its own virtual machine, clones a repo, and hands back a pull request. A third part goes against rules this desk has already made, and it stays refused. This desk should put the new rules into the bots and coding runs it already has. It should not add a bot, a login or a manager bot because a livestream showed one.

## Core takeaways

- The maker's own staff ran their bots under rules this wiki already had: one job for each bot, lasting rules in the description, a person approving anything that reaches an outside person or system, and a person merging all code.
- Running coding agents has rules of its own. Use one agent for each pull request and its follow-ups. A pull request is done when it is merged. Proof is a video of the real product in the pull request text, and proof files stay out of git.
- A bot stays cheap when it uses a connector before a browser, runs on a coarse clock, and pings only for exceptions.
- A report can be checked when every figure in it carries its date and its source. A bot's duties can be checked when the bot writes them to a file the owner can cut.
- Adding bots did not remove the slow steps. The first slow step was the merge that waits on a person. The second was one person approving every task while status arrived in four chats.
- A manager bot in front, bots in group chats, more logins for bots, imported browser cookies, and a bot that merges its own fix all stay refused.

## Why the event was held

The organizer gave one aim: viewers "will see how Grok Bot fits into each stage of the development process" and "walk away with actionable use cases for your function." The timing follows the product's release dates. Grok Bot entered beta on 11 August 2026. Cursor, the code editor company, announced on 14 August that it had joined SpaceX. Access widened to more subscription plans on 21 August, and the enterprise version went live on 3 September. The livestream started twelve days after that.

Three more aims show in what was put on screen, and the organizer did not state them. The first is to move people from asking a chatbot questions to staffing a whole job function with a team of bots. Talk after talk opened on the same four steps: ask a chatbot, have a copilot do a task, hand a job to a bot, staff a function with a team of bots. The second is to fill the template marketplace. A template is a shareable copy of one bot's setup. Every giveaway at the event required one, and the card game the staff shipped uses shared templates as its cards. The third is to present Grok Bot as the product that starts Cursor Cloud Agents, now that both products belong to one company. Most of the talks were for teams outside engineering: sales engineers, sales, sales development, support, marketing operations, post-sales and marketing.

## Rules this wiki already had

**Scope a bot like a job description.** One bot gets one standing job. Bloated context and extra duties slow a bot down. Spend an hour or two writing out a bot's duties before creating it. The page that holds this rule is [[wiki/Systems/AI & Agentic Systems/Grok Bot Primer|Grok Bot Primer]].

**Lasting rules go in the description, and today's task goes in the chat.** Format rules and the line saying what the bot never does belong in the description or in a skill. Every run reads them there. "Do not invent" belongs there too. A routine is set up by asking the bot in the chat. The page that holds this rule is [[wiki/Systems/AI & Agentic Systems/Using Grok Bot|Using Grok Bot]].

**A bot prepares, and a person approves what leaves the account.** That covers anything that reaches an outside person or system. A bot writes drafts and sends nothing. It answers from public documents, uses internal policy only to decide, and never pastes that policy into a reply. Low confidence, missing information or an unclear request means handing the item to a person. The working setting sits between approving every step and approving nothing: the bot acts freely inside the account, and a person approves messages, writes to a customer database, refunds and changes to infrastructure. When a bot offers to pause a firewall so that another bot can get through, the answer is to hold and leave the firewall alone.

**All code goes through Cloud Agents, and a person merges.** A bot that starts a Cloud Agent is a coordinator. It collects the proof and stops. The page that holds this rule is [[wiki/Systems/AI & Agentic Systems/Cursor Cloud Agents|Cursor Cloud Agents]].

**Lock a written spec before engineering starts.** One bot writes the spec as a file and marks it locked. It hands the file to the bot that starts the Cloud Agent. The spec names the outcome and the owner of the build, of the testing, and of any tracking. A finding handed on as a spec is already a rule in the Primer.

**Write a verification skill for each app.** A verification skill is a folder of instructions in the repo. It tells an agent how to launch the app and how to use each feature the way a user does, and it says what to save as proof. Run it before any group of agents is allowed to work unattended. The proof rule behind it is on [[wiki/Systems/AI & Agentic Systems/pstack|pstack]].

**Audit routines, and have them report exceptions only.** An hourly routine that finds nothing most hours becomes a weekly one. It pings only when something fails to match.

**Put a fork to the owner as three choices.** Lock means one named bot builds it for real. Iterate means another bot makes a throwaway version. Hold means nothing is built yet.

**Keep one status line for the whole roster.** For each bot it gives the last run and whether the bot stayed silent or pinged. The livestream kept a counter of bots, messages and working bots on screen all day. This desk carries the same idea as one line in an existing bot's report, with no new bot.

## Rules that were new here

Rules for running Cloud Agents:

- Use one Cloud Agent for each pull request and its follow-ups. Open no new pull request against the default branch.
- An agent that has finished is not a finished job. Done means merged. A pull request moves to ready for review only after its checks have come back clean several times in a row. A failed build, a failed security check or an open thread from a review bot blocks it.
- Visual proof is a playable video of the real product, placed in the pull request text. A mock on a white canvas does not count. Proof files stay on disk and are never committed.
- Write a row for the task before work starts: task, owner, stage, pull request, agent, last comment. For this desk the row can be a line in a file in the bots' shared folder, or GitHub's own list of pull requests.
- Give an urgent run a check every five minutes for stalling, long sleeps, too much caution, or drift from the goal, and interrupt the agent when the check finds one. The check deletes itself once the run is clean. This fits only as a check that ends. A standing five-minute clock is several hundred runs a day.
- Rebase only for a real conflict. Never merge the default branch into the working branch. Fix the root cause.
- One bot owns a shared document such as a playbook. Other bots read it and never edit it.

Habits for bots:

- Use a connector before a browser, because browser use costs more. Where no connector exists, have the bot watch the site's network requests once and call that API directly after that.
- Ask a bot to write a file listing all its own duties, so the owner can cut, split or add.
- Put the date and the source beside every figure in a report.
- Duplicate a bot to get the same setup with an empty memory. A long chat makes every routine on that bot cost more, and a duplicate starts short again.
- Record a decision as a yes or no answer, so later reports build on it.
- The product's approval setting is named Auto-review, under Settings, then General. An action it pauses shows two buttons, "Allow once" and "Deny".
- A reading bot can hand a Cloud Agent one small job a day. The bot picks one item from what it read. It starts a coding agent that builds a demo of the item. The agent checks the demo with screenshots and video, pushes a branch, and gets a preview deployment. The bot sends the preview link in the morning, and a person still decides what merges.

## What more bots did not fix

The roster on the livestream grew from 13 bots on the first morning to 43 on the last. An audit of that roster, run by one of its own bots, put the result in one line: "you're not under-botted. you're coordination-bound." It named two slow steps. Merging still waited on a person. One person approved every task while status updates arrived in four different chats. Neither step gets faster when a bot is added. This desk's answer to the same problem is the empty middle in the Primer: bots pass work through files, no bot routes work to the others, and the owner reads a small number of reports.

## Advice this desk refuses

- **Bots in group chats.** Here bots pass work through files. Bots talking to bots empties the weekly allowance fast.
- **A chief of staff bot in front, and manager bots over engineer bots.** A bot in front has to hold every login in order to route every job, and all the bots share one cloud computer, so every other bot then holds those logins too. A bot that starts a Cloud Agent is kept. The manager layer above it is not.
- **More access for bots.** The advice was to let bots run free, log them into your tools, import your browser cookies and let them use your IP address. Only public material goes on the shared computer.
- **A bot that fixes a failing build and merges its own pull request.** No bot merges. The written engineering rules shown at the same event also said humans own every merge.
- **An attention list built from mail, chat and meetings, and a bot that learns your voice from your texts and email.** Both need private material on the shared computer.
- **Routines that tune other routines.** In this setup a bot reports and changes nothing, and that includes another bot's routines.
- **A nightly pass that researches a whole repo and opens cleanup pull requests.** Cloud Agents here run a fully specified task.

## The case against, the cost, and when to quit

The case against taking any of this advice is its source. It comes from the company that sells the product. The event was built to sell it, and every giveaway pushed people toward publishing templates. The broadcasts had no captions. Everything known about them comes from slides and shared screens, and nothing the speakers said out loud was recorded. No cost figure was shown on any day, while viewers in the chat complained about token use on all three.

The cost of the new rules is a step each: a row before work starts, a video in the pull request text, a date and a source beside each figure. Drop a rule the way this desk drops a bot. If three uses of the rule changed nothing the owner read or did, the rule goes.

Checkable expectation: two weeks after the rules go in, every Cloud Agent pull request opened in those two weeks is either merged or closed.

## How to practice this

1. Ask one existing bot to write a file listing all its duties, and cut one. Notice which duty you did not know the bot had.
2. On the next Cloud Agent run, write the task row first and require a video of the real product in the pull request text. Notice whether you could judge the pull request without cloning the branch.
3. Count a run as done only when its pull request is merged or closed. Notice how many runs the agent finished that are still open.
4. Find one routine that clicks through a website. Look for a connector, or have the bot find the site's API once. Notice whether the run gets shorter.
5. Open one report and look for a date and a source beside every figure. Notice which figures have neither.

## Related pages

- [[wiki/Systems/AI & Agentic Systems/Picking a computer|Picking a computer]]: which computer the next job opens, which this event does not change
- [[wiki/Systems/AI & Agentic Systems/Cursor Cloud Agents|Cursor Cloud Agents]]: the isolated machine that writes the code and hands back a pull request
- [[wiki/Systems/AI & Agentic Systems/Using Grok Bot|Using Grok Bot]]: the product's four objects, and the order of task, then skill, then routine
- [[wiki/Systems/AI & Agentic Systems/pstack|pstack]]: the ban on calling a visual job done without a picture, and the verification skill
- [[wiki/Systems/AI & Agentic Systems/Grok Bot Primer|Grok Bot Primer]]: one job for each bot, reports only, files between bots, and no bot in the middle
- [[wiki/Research/Grok Bot Field Packet 2026-08-31|Grok Bot Field Packet 2026-08-31]]: the maker's earlier how-to pages, which put the same manager bot in front
- [[wiki/Systems/AI & Agentic Systems/Current Agentic LLM Stack|Current Agentic LLM Stack]]: which product holds which job, which this event does not change
- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]]: proof on the finished thing, which the rules for pull requests apply

## Open questions

- Does "done means merged" shorten the time a finished pull request waits for its owner, or does it only give the wait a name?
- What was said in the question and answer segments, which no notes captured?
- After an agent can drive the local Yuedu harvest reader without a person, does any coordinator prompt still need the pstack plugin?

## Sources

- Event hub: https://x.ai/galaxy. Schedule for 15 to 17 September 2026 at The Howard, 661 Howard Street, San Francisco, 8:30 AM to 6:00 PM Pacific each day.
- Event page on Luma: https://luma.com/3ifrgttw. The organizer's stated aim, the three builders (Matt Palmer, Lauren Tan, Roshan Sadanani), and the schedule of talks.
- Day 1 X broadcast, 8 hours 45 minutes: https://x.com/i/broadcasts/1AxRnZbVpjaxl. Talks: Grok Bot 101, Engineering, Product Managers, Founders.
- Day 2 X broadcast, 8 hours 23 minutes: https://x.com/i/broadcasts/1PKqrNyvmYwGb
- Day 3 X broadcast, 7 hours 58 minutes: https://x.com/i/broadcasts/1YGNrbXEeazGw
- Public notes on all three days, taken from slides and shared screens: https://github.com/Roenel/Grok-Bot-Galaxy-Notes
- This desk's own notes on the three broadcasts, taken the same way by a note-taking bot.
- [Get started](https://docs.x.ai/grok-bot/get-started) and [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations): five-part task, skill before routine, ask in chat.
- [FAQ](https://docs.x.ai/grok-bot/faq): the computer is assigned per user, not per Bot.
- [[wiki/Research/Grok Bot Field Packet 2026-08-31|Grok Bot Field Packet 2026-08-31]]: chief of staff, mail, ads, finding as a spec.
- Owner's ruling, 18 September 2026: the page keeps the first day's talks and the advice repeated across talks, and drops the sales, support and marketing talks of the second and third days.
