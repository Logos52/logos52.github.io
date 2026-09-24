---
title: "Grok Bot Galaxy: the rules"
description: "SpaceXAI ran Grok Bot Galaxy so people would see how Grok Bot fits into each stage of building a product, and would leave with uses for their own job. The rules from that livestream, shortened, with the ones this setup already refuses named as refused."
type: journal
status: active
draft: true
created: 2026-09-18
updated: 2026-09-18
prose-model: grok
tags:
  - grok-bot
  - research
  - agents
---

# Grok Bot Galaxy: the rules

SpaceXAI ran Grok Bot Galaxy so people would see how Grok Bot fits into each stage of building a product, and would leave with uses for their own job. Grok Bot is a desktop app where you give a named helper one job and it works on a computer in the cloud. SpaceXAI makes it. Three of its staff built a company on camera with bots, so viewers would see the product in each stage. The company shipped as Thursday Arena, a browser card game whose cards are shareable copies of a bot's setup.

Grok Bot entered beta on 11 August 2026. Cursor, the code editor company, announced on 14 August that it had joined SpaceX. On 21 August Grok Bot opened to more SuperGrok and Cursor plans. On 3 September Grok Bot for Enterprise went live. Galaxy started twelve days later, 15 to 17 September 2026.

What was put on screen also did these things. The organizer did not state them.

Most sessions opened with a curve: ask a chatbot, have a copilot do a task, hand a whole job to a bot, staff a function with a team of bots. Then came a "Meet the team" slide with named bots for that function.

A template is a shareable copy of one bot's setup. People publish those copies on the [template marketplace](https://x.ai/bot/marketplace). Giveaways required a template. The game the builders shipped uses shared templates as its playing cards.

A Cursor Cloud Agent is a coding agent that runs on its own virtual machine, clones a GitHub repo, and opens a pull request. The builders used Cloud Agents for all the code in their company. One of the product pillars on screen was managing those agents through Grok Bot.

Most of the sessions were for people outside engineering: sales engineers, sales, sales development, support, marketing operations, post-sales, and marketing.

## The rules

Scope a bot like a job description. One bot per job. Bloated context and duties slow a bot down. Spend the time writing the duties before creating the bot.

Lasting rules go in the description. The current task goes in chat. Format rules, never-do lines, and how the bot should work live in the profile. Routines are set up by asking the bot in chat.

Audit routines and make them report exceptions only. An hourly run that almost always finds nothing should move to a weekly clock, with a ping only when something fails to match.

Browser use costs more than connectors. Use a connector when one exists. When none exists, watch the site's network requests once and call that programming interface the next time.

All code goes through Cursor Cloud Agents, and a person merges. One Cloud Agent per stream of pull requests. Put a row on the task board before starting work: task, owner, stage, pull request, agent, last comment. Finished by the agent does not mean done. Done means merged. Visual proof must be a playable video of the real product in the pull request body. Proof files stay on disk and out of git. One slide claimed the opposite: the bot fixes a failing build and merges its own pull request. The written rules said humans own every merge. This setup follows the written rule.

Write a verification skill for each app. A verification skill is a folder in the repo with instructions for an agent: how to launch the app, how to check the app is healthy, how to use each feature the way a user does, what to save as proof, and how to clean up.

Lock a written spec before engineering starts. The coding agent starts from that file, not from a chat that is still moving.

Let bots act, with a person approving anything that reaches an outside person or system. That sits between approving every step and approving nothing. Drafts, sheets, and reply text stop until a person says yes. When an agent hits a firewall block, hold: leave the firewall alone.

A bot can hand a Cloud Agent one small job a day. A reading bot picks one item from public material, starts a Cursor agent that builds a demo of it, checks the demo with screenshots and video, pushes a branch, and gets a preview link. The person still merges.

Duplicate a bot when you want the same setup with an empty memory. Ask a bot to write a file of all its own duties, so you can cut or split them. Put the date and the source beside every figure in a report.

More bots did not make the work faster. An audit of the livestream's own bots said "you're not under-botted. you're coordination-bound." Merging still waited on a person. One person was approving every task while status updates landed in four different chats.

## Refused

Put one bot in front. This setup already refused that design. A manager bot has to hold every login to route every job, and on one shared computer every other bot then holds those logins too. Bots talking to bots empties the weekly allowance. The middle here is the person with a phone. The helper that reports on the others and backs up their files administers and never routes work.

Extra logins, imported browser cookies, and a bot that merges its own pull request stay refused for the same reason. Whatever is on the shared computer is there for every bot. You merge.

None of the three broadcasts had captions. These notes come from slides and shared screens. Nothing spoken was recorded. The hosts showed no cost figures.

The wiki page is [[wiki/Systems/AI & Agentic Systems/Grok Bot Galaxy|Grok Bot Galaxy]].
