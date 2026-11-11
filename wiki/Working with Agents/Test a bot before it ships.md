---
title: "Test a bot before it ships"
type: technique
section: "Working with Agents"
status: seed
description: "Test bots two ways: a playtester bot that runs the real product on every build that passes its checks, and evals, a suite of past cases with known right answers that a bot or skill must pass before each change goes out."
created: 2026-11-11
updated: 2026-11-11
aliases:
  - "Have a QA bot test before it ships"
  - "Test and improve a skill or bot with evals"
tags:
  - agents
  - testing
  - evals
wedge_reviewed: false
---

# Test a bot before it ships

> Not yet reviewed by Wedge.

Bots get tested in two ways. The first is a playtester bot that picks up every build that has passed the automated checks, runs the real product the way a user would and reports what broke. The second is an eval, a set of past cases where the right answer is already known. A bot or skill has to pass it each time it changes, much like a unit test for an agent. One team built its eval suite for a routing bot from old issues whose correct code repository was already known, and the bot passed 48 of the 50 cases in it. A bot that answers every incoming request has to behave the same way every time, so that kind of bot moves into code with evals around it. Fuzzy work that changes from day to day stays with an ordinary chat bot. In one live game, testing got stricter once real players arrived, and every fix had to reproduce the problem first and then pass the verify skill and a swarm of testing agents.

<figure>
<svg viewBox="0 0 520 146" width="100%" style="max-width:520px;--qp-surface:light-dark(#ffffff,#1a1a1a);--qp-ink:light-dark(#090909,#f2f2f2);--qp-mut:light-dark(#6b6b6b,#a3a3a3);--qp-rule:light-dark(#ededed,#262626);--qp-rule2:light-dark(#dedede,#333333);--qp-accent:light-dark(#1a7fe6,#5aa9f5);font-family:Inter,system-ui,sans-serif" role="img" aria-labelledby="tb-two-t">
<title id="tb-two-t">Bots get tested in two ways.</title>
<rect x="0.5" y="0.5" width="519" height="145" rx="16" style="fill:var(--qp-surface);stroke:var(--qp-rule);stroke-width:1"/>
<rect x="20" y="20" width="232" height="106" rx="20" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/><text x="136" y="50" text-anchor="middle" style="fill:var(--qp-ink);font-size:15px;font-weight:600">a playtester bot</text><text x="136" y="70" text-anchor="middle" style="fill:var(--qp-ink);font-size:12px">runs the real product</text><text x="136" y="90" text-anchor="middle" style="fill:var(--qp-ink);font-size:12px">the way a user would</text><text x="136" y="108" text-anchor="middle" style="fill:var(--qp-mut);font-size:12px">reports what broke</text>
<rect x="268" y="20" width="232" height="106" rx="20" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/><text x="384" y="50" text-anchor="middle" style="fill:var(--qp-ink);font-size:15px;font-weight:600">an eval</text><text x="384" y="70" text-anchor="middle" style="fill:var(--qp-ink);font-size:12px">a set of past cases where</text><text x="384" y="90" text-anchor="middle" style="fill:var(--qp-ink);font-size:12px">the right answer is already known</text><text x="384" y="108" text-anchor="middle" style="fill:var(--qp-mut);font-size:12px">much like a unit test for an agent</text>
</svg>
</figure>

## A playtester bot on every passing build

During the three-day Thursday Arena build, a playtester bot called Play watched the stream of code changes. Whenever a change passed the automated test suite, Play opened the preview build and played the whole game end to end. It knew how the game engine worked, and it posted feedback on what needed to change. A subscription to code-change events woke it for each passing change, so nobody had to ask.

That kind of bot rests on a verification skill, which gives every agent one standard script for driving the app. Without the script, each bot writes its own throwaway version, which burns tokens and gives results nobody can reproduce.

After the game went live, the hosts raised the bar. Every fix had to clear the game's verify skill and also a swarm of cloud agents, each running the game on its own computer and clicking around to break it. The bots also had to reproduce a reported issue before fixing it, and the reviewing bot checked that the triage had understood the report.

## Evals built from your own history

An eval needs cases where you already know the answer, and a team's past work supplies them. In a workshop on shipping code with bots, a field engineer built a routing bot that reads a new issue and decides which of several code repositories it belongs to. He had a bot pull the titles of past issues from each repository, so the right repository for each case was known, and turned them into a suite he could run like any test. The bot got 48 of the 50 cases right.

In the same demo the language model did very little. Plain code handled intake, duplicate checks, routing, a security gate and a hold for human approval, and the model only answered questions in chat by calling those tools. Its instructions told it never to pick a repository itself or override the tool. Each routing decision came with a confidence, 73% for one repository and 27% for another in the example, and a person had to approve it before any agent ran.

<figure>
<svg viewBox="0 0 520 398" width="100%" style="max-width:520px;--qp-surface:light-dark(#ffffff,#1a1a1a);--qp-ink:light-dark(#090909,#f2f2f2);--qp-mut:light-dark(#6b6b6b,#a3a3a3);--qp-rule:light-dark(#ededed,#262626);--qp-rule2:light-dark(#dedede,#333333);--qp-accent:light-dark(#1a7fe6,#5aa9f5);font-family:Inter,system-ui,sans-serif" role="img" aria-labelledby="tb-route-t">
<title id="tb-route-t">Plain code handled intake, duplicate checks, routing, a security gate and a hold for human approval, and the model only answered questions in chat by calling those tools.</title>
<rect x="0.5" y="0.5" width="519" height="397" rx="16" style="fill:var(--qp-surface);stroke:var(--qp-rule);stroke-width:1"/>
<text x="20" y="36" style="fill:var(--qp-mut);font-size:12px">Plain code handled</text>
<rect x="20" y="48" width="480" height="48" rx="20" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/><text x="40" y="78" style="fill:var(--qp-ink);font-size:13px">intake</text>
<path d="M260,98 L260,101" style="fill:none;stroke:var(--qp-rule2);stroke-width:1.25"/><polygon points="260,110 255.0,101.0 265.0,101.0" style="fill:var(--qp-mut)"/>
<rect x="20" y="112" width="480" height="48" rx="20" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/><text x="40" y="142" style="fill:var(--qp-ink);font-size:13px">duplicate checks</text>
<path d="M260,162 L260,165" style="fill:none;stroke:var(--qp-rule2);stroke-width:1.25"/><polygon points="260,174 255.0,165.0 265.0,165.0" style="fill:var(--qp-mut)"/>
<rect x="20" y="176" width="480" height="48" rx="20" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/><text x="40" y="206" style="fill:var(--qp-ink);font-size:13px">routing</text>
<path d="M260,226 L260,229" style="fill:none;stroke:var(--qp-rule2);stroke-width:1.25"/><polygon points="260,238 255.0,229.0 265.0,229.0" style="fill:var(--qp-mut)"/>
<rect x="20" y="240" width="480" height="48" rx="20" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/><text x="40" y="270" style="fill:var(--qp-ink);font-size:13px">a security gate</text>
<path d="M260,290 L260,293" style="fill:none;stroke:var(--qp-rule2);stroke-width:1.25"/><polygon points="260,302 255.0,293.0 265.0,293.0" style="fill:var(--qp-mut)"/>
<rect x="20" y="304" width="480" height="48" rx="20" style="fill:none;stroke:var(--qp-accent);stroke-width:1.25"/><text x="40" y="334" style="fill:var(--qp-ink);font-size:13px">a hold for human approval</text>
<text x="260" y="380" text-anchor="middle" style="fill:var(--qp-mut);font-size:12px">the model only answered questions in chat by calling those tools</text>
</svg>
</figure>

## Which bots need code and evals

Whether a bot belongs in code depends on whether it must give the same answer every time. Work that is fuzzy and keeps changing, such as reproducing an unusual network setup in a bot's own computer, suits a chat bot that you steer as you go. A front-line triage bot that answers every incoming item has to be predictable and checkable, so that team built it as code with evals. The rule of thumb is simple. A task that works twice becomes a skill and then a routine, a task that must come out identical every time moves into code with evals, and evals then gate every change. The workshop's suggested first project for a coded bot was a pull request reviewer, because the task is well defined.

<figure>
<svg viewBox="0 0 520 284" width="100%" style="max-width:520px;--qp-surface:light-dark(#ffffff,#1a1a1a);--qp-ink:light-dark(#090909,#f2f2f2);--qp-mut:light-dark(#6b6b6b,#a3a3a3);--qp-rule:light-dark(#ededed,#262626);--qp-rule2:light-dark(#dedede,#333333);--qp-accent:light-dark(#1a7fe6,#5aa9f5);font-family:Inter,system-ui,sans-serif" role="img" aria-labelledby="tb-rule-t">
<title id="tb-rule-t">A task that works twice becomes a skill and then a routine, a task that must come out identical every time moves into code with evals, and evals then gate every change.</title>
<rect x="0.5" y="0.5" width="519" height="283" rx="16" style="fill:var(--qp-surface);stroke:var(--qp-rule);stroke-width:1"/>
<rect x="20" y="20" width="232" height="68" rx="20" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/><text x="136" y="50" text-anchor="middle" style="fill:var(--qp-ink);font-size:14px;font-weight:600">A task that works twice</text>
<rect x="20" y="118" width="232" height="68" rx="20" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/><text x="136" y="148" text-anchor="middle" style="fill:var(--qp-ink);font-size:13px">becomes a skill</text><text x="136" y="168" text-anchor="middle" style="fill:var(--qp-ink);font-size:13px">and then a routine</text>
<rect x="268" y="20" width="232" height="68" rx="20" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/><text x="384" y="50" text-anchor="middle" style="fill:var(--qp-ink);font-size:14px;font-weight:600">a task that must come out</text><text x="384" y="70" text-anchor="middle" style="fill:var(--qp-ink);font-size:14px;font-weight:600">identical every time</text>
<rect x="268" y="118" width="232" height="68" rx="20" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/><text x="384" y="148" text-anchor="middle" style="fill:var(--qp-ink);font-size:13px">moves into code with evals</text>
<rect x="268" y="216" width="232" height="48" rx="20" style="fill:none;stroke:var(--qp-accent);stroke-width:1.25"/><text x="384" y="246" text-anchor="middle" style="fill:var(--qp-ink);font-size:14px;font-weight:600">evals then gate every change</text>
<path d="M136,91 L136,106" style="fill:none;stroke:var(--qp-rule2);stroke-width:1.25"/><polygon points="136,115 131.0,106.0 141.0,106.0" style="fill:var(--qp-mut)"/>
<path d="M384,91 L384,106" style="fill:none;stroke:var(--qp-rule2);stroke-width:1.25"/><polygon points="384,115 379.0,106.0 389.0,106.0" style="fill:var(--qp-mut)"/>
<path d="M384,189 L384,204" style="fill:none;stroke:var(--qp-rule2);stroke-width:1.25"/><polygon points="384,213 379.0,204.0 389.0,204.0" style="fill:var(--qp-mut)"/>
</svg>
</figure>

## Testing a skill before you change it

Keeping skills working is hard, so one engineer runs an eval every time she changes one. A coordinating agent writes a rubric for what the skill should do and then spawns subagents to try it. Each subagent works in a folder named so it cannot tell it is being tested, because agents change their behaviour when they can tell. The same eval can run across several models, and a judge agent running on another model cross-checks the scores so the first model's bias does not decide the result. The engineer can loop the eval until every case scores 10 out of 10 on the rubric, and she built her own verification skill that way.

<figure>
<svg viewBox="0 0 520 388" width="100%" style="max-width:520px;--qp-surface:light-dark(#ffffff,#1a1a1a);--qp-ink:light-dark(#090909,#f2f2f2);--qp-mut:light-dark(#6b6b6b,#a3a3a3);--qp-rule:light-dark(#ededed,#262626);--qp-rule2:light-dark(#dedede,#333333);--qp-accent:light-dark(#1a7fe6,#5aa9f5);font-family:Inter,system-ui,sans-serif" role="img" aria-labelledby="tb-loop-t">
<title id="tb-loop-t">The engineer can loop the eval until every case scores 10 out of 10 on the rubric, and she built her own verification skill that way.</title>
<rect x="0.5" y="0.5" width="519" height="387" rx="16" style="fill:var(--qp-surface);stroke:var(--qp-rule);stroke-width:1"/>
<rect x="20" y="20" width="440" height="48" rx="20" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/><text x="40" y="50" style="fill:var(--qp-ink);font-size:13px">A coordinating agent writes a rubric</text>
<path d="M240,70 L240,75" style="fill:none;stroke:var(--qp-rule2);stroke-width:1.25"/><polygon points="240,84 235.0,75.0 245.0,75.0" style="fill:var(--qp-mut)"/>
<rect x="20" y="86" width="440" height="66" rx="20" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/><text x="40" y="116" style="fill:var(--qp-ink);font-size:13px">spawns subagents to try it</text><text x="40" y="134" style="fill:var(--qp-mut);font-size:12px">in a folder named so it cannot tell it is being tested</text>
<path d="M240,154 L240,159" style="fill:none;stroke:var(--qp-rule2);stroke-width:1.25"/><polygon points="240,168 235.0,159.0 245.0,159.0" style="fill:var(--qp-mut)"/>
<rect x="20" y="170" width="440" height="48" rx="20" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/><text x="40" y="200" style="fill:var(--qp-ink);font-size:13px">The same eval can run across several models</text>
<path d="M240,220 L240,225" style="fill:none;stroke:var(--qp-rule2);stroke-width:1.25"/><polygon points="240,234 235.0,225.0 245.0,225.0" style="fill:var(--qp-mut)"/>
<rect x="20" y="236" width="440" height="66" rx="20" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/><text x="40" y="266" style="fill:var(--qp-ink);font-size:13px">a judge agent running on another model</text><text x="40" y="284" style="fill:var(--qp-mut);font-size:12px">cross-checks the scores</text>
<path d="M240,304 L240,309" style="fill:none;stroke:var(--qp-rule2);stroke-width:1.25"/><polygon points="240,318 235.0,309.0 245.0,309.0" style="fill:var(--qp-mut)"/>
<rect x="20" y="320" width="440" height="48" rx="20" style="fill:none;stroke:var(--qp-accent);stroke-width:1.25"/><text x="40" y="350" style="fill:var(--qp-ink);font-size:14px;font-weight:600">until every case scores 10 out of 10</text>
<path d="M460,342 L488,342 L488,45 L466,45" style="fill:none;stroke:var(--qp-rule2);stroke-width:1.25;stroke-dasharray:4 4"/>
<polygon points="461,45 470,40 470,50" style="fill:var(--qp-mut)"/>
<text x="498" y="206.5" text-anchor="middle" transform="rotate(90 498 206.5)" style="fill:var(--qp-mut);font-size:12px">The engineer can loop the eval</text>
</svg>
</figure>

### Prompts to copy

> Watch for changes that pass the test suite. For each one, open the preview build, use the whole product as a user would and post what broke.

> Pull the last 50 cases where we already know the right answer and turn them into an eval for this bot. Run it and tell me which cases fail.

## Open questions

How does a playtester bot decide what counts as broken in a product it did not build?

How many known cases does an eval need before its score means something?

When does a skill that works twice deserve a full eval suite?

## Sources

- Ryan Perry and Zoë Barnswell, ["Ship Code at Scale with Grok Bot and Cursor"](https://www.youtube.com/watch?v=lpi-9F5KJJo), workshop recording, 15 October 2026. Routing eval at 38:00, the routing thread and approval hold at 35:00, the project's instructions at 37:31, Grok Bot versus coded bots at 31:00, the Monday checklist slide at 49:59, the first coded project at 52:10. Paraphrased.
- Grok Bot Galaxy livestream, day 1 lines 492-498 and day 3 lines 16-17 and 239-245, 15 and 17 September 2026, machine caption transcripts. Paraphrased.
- Lauren Tan ([poteto](https://x.com/poteto)), Zoom workshop recorded about 12 August 2026, [recording](https://www.youtube.com/watch?v=Zc07HI9Ppxk), 19:47 to 24:10. Evals as unit tests, the eval playbook, disguised folders, the cross-model judge and looping to 10 out of 10. Paraphrased.

## Related pages

- [[wiki/Working with Agents/Let an agent check its own work|Let an agent check its own work]]
- [[wiki/Working with Agents/Handle a bug report - reproduce first|Handle a bug report: reproduce first]]
- [[wiki/Working with Agents/Turn a repeated correction into a permanent fix|Turn a repeated correction into a permanent fix]]
- [[wiki/Systems/AI & Agentic Systems/Thursday Arena|Thursday Arena]]
