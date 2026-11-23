---
title: "Lessons learned"
type: hub
section: "Working with Agents"
status: seed
description: "The problems that keep coming up when working with agents, each with the fix that worked and a link to its full page: shelved work that returns, micromanaged tasks, unverified changes, copied bad patterns, repeated corrections, scaling past a few agents, bots without one job, untested bots, guessed bug fixes and review that cannot keep up."
created: 2026-11-23
updated: 2026-11-23
tags:
  - agents
  - hub
  - lessons
wedge_reviewed: false
---

# Lessons learned

> Not yet reviewed by Wedge.

Ten problems keep coming up when people work with agents, and each has a fix that worked. Rejected work left nearby comes back, so delete it instead of shelving it. A task spelled out step by step limits the agent, so give it one target and the proof you want. An agent that cannot run the app turns you into its tester, so give it a way to check its own work. Since an agent copies whatever is in the codebase, keep the code worth copying and make the easy path the right one. A mistake that repeats belongs in the code or a check rather than another message. More agents need cloud computers and a coordinator, and verification has to grow with them. A bot with no single job tries to do everything, so scope it like a role for a new teammate. Bots need a playtester and evals before changes ship. A bug fix written before anyone saw the bug is a guess, so reproduce first. Once agents land more than you can read, decide what needs your approval and sample the rest.
<figure>
<svg viewBox="0 0 300 1018" width="100%" style="max-width:300px;--qp-surface:light-dark(#ffffff,#1a1a1a);--qp-ink:light-dark(#090909,#f2f2f2);--qp-ink2:light-dark(#3a3a3a,#cfcfcf);--qp-mut:light-dark(#6b6b6b,#a3a3a3);--qp-rule:light-dark(#ededed,#262626);--qp-rule2:light-dark(#dedede,#333333);--qp-accent:light-dark(#1a7fe6,#5aa9f5);font-family:Inter,system-ui,sans-serif" role="img" aria-labelledby="ll-glance-t">
<title id="ll-glance-t">Ten problems keep coming up when people work with agents, and each has a fix that worked.</title>
<rect x="0.5" y="0.5" width="299" height="1017" rx="16" style="fill:var(--qp-surface);stroke:var(--qp-rule);stroke-width:1"/>
<text x="20" y="40" text-anchor="start" style="fill:var(--qp-ink);font-size:17px;font-weight:600">Ten problems keep coming up</text>
<text x="20" y="64" text-anchor="start" style="fill:var(--qp-ink);font-size:17px;font-weight:600">when people work with</text>
<text x="20" y="88" text-anchor="start" style="fill:var(--qp-ink);font-size:17px;font-weight:600">agents, and each has a fix</text>
<text x="20" y="112" text-anchor="start" style="fill:var(--qp-ink);font-size:17px;font-weight:600">that worked.</text>
<line x1="20" y1="128" x2="280" y2="128" style="stroke:var(--qp-rule2);stroke-width:1"/>
<rect x="20" y="127" width="40" height="2" rx="1" style="fill:var(--qp-accent)"/>
<text x="20" y="156" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">Shelved work comes back</text>
<text x="20" y="178" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">delete rejected work instead of</text>
<text x="20" y="200" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">shelving it</text>
<line x1="20" y1="214" x2="280" y2="214" style="stroke:var(--qp-rule);stroke-width:1"/>
<text x="20" y="242" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">Dictated steps hold an agent</text>
<text x="20" y="264" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">back</text>
<text x="20" y="286" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">give it one target and the proof you</text>
<text x="20" y="308" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">want</text>
<line x1="20" y1="322" x2="280" y2="322" style="stroke:var(--qp-rule);stroke-width:1"/>
<text x="20" y="350" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">You become the tester</text>
<text x="20" y="372" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">give it a way to check its own work</text>
<line x1="20" y1="386" x2="280" y2="386" style="stroke:var(--qp-rule);stroke-width:1"/>
<text x="20" y="414" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">Agents copy bad patterns</text>
<text x="20" y="436" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">keep the code worth copying and</text>
<text x="20" y="458" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">make the easy path the right one</text>
<line x1="20" y1="472" x2="280" y2="472" style="stroke:var(--qp-rule);stroke-width:1"/>
<text x="20" y="500" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">The same correction, again and</text>
<text x="20" y="522" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">again</text>
<text x="20" y="544" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">move each repeated correction to</text>
<text x="20" y="566" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">the strongest place that works</text>
<line x1="20" y1="580" x2="280" y2="580" style="stroke:var(--qp-rule);stroke-width:1"/>
<text x="20" y="608" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">A few agents, then a wall</text>
<text x="20" y="630" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">cloud agents with their own</text>
<text x="20" y="652" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">computers</text>
<line x1="20" y1="666" x2="280" y2="666" style="stroke:var(--qp-rule);stroke-width:1"/>
<text x="20" y="694" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">A bot that tries to do everything</text>
<text x="20" y="716" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">scope it like a role for a new</text>
<text x="20" y="738" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">teammate</text>
<line x1="20" y1="752" x2="280" y2="752" style="stroke:var(--qp-rule);stroke-width:1"/>
<text x="20" y="780" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">Untested bots ship broken</text>
<text x="20" y="802" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">changes</text>
<text x="20" y="824" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">a playtester and evals before</text>
<text x="20" y="846" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">changes ship</text>
<line x1="20" y1="860" x2="280" y2="860" style="stroke:var(--qp-rule);stroke-width:1"/>
<text x="20" y="888" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">Fixes for bugs nobody saw</text>
<text x="20" y="910" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">reproduce first</text>
<line x1="20" y1="924" x2="280" y2="924" style="stroke:var(--qp-rule);stroke-width:1"/>
<text x="20" y="952" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">More work than you can read</text>
<text x="20" y="974" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">decide what needs your approval</text>
<text x="20" y="996" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">and sample the rest</text>
</svg>
</figure>

## Shelved work comes back

Rejected work that stays where an agent can find it gets reused, because agents copy what is in their context. In one engineer's words, "agents love to copy what exists and take the shortest path, so make the easy thing the right thing" ([post on trusting agents' work](https://x.com/poteto/status/2111133080526495985)). A second post adds that "your codebase is a form of memory to agents" ([post on the codebase as memory](https://x.com/poteto/status/2109699980248408574)). Unless each bad pattern becomes a constraint, "the agents will just keep repeating those same mistakes like a virus in your code". Old branches, notes that mark an idea as deprioritized, copies kept just in case and dead code all look like material to build on. Marking them as old does not take them out of reach. The site's owner has run into this in his own agent work, where rejected work kept returning in new changes. Since agents copy what is there, the fix that follows is to delete rejected work instead of shelving it. A failed attempt counts as rejected work too, and starting again is the cheapest way to delete it. [[wiki/Working with Agents/Delete rejected work, don't shelve it|Delete rejected work, don't shelve it]]

## Dictated steps hold an agent back

An agent misses when the intent is vague or the context is missing, and spelling out every step only narrows the solutions it can find. Loose targets led to agents stalling with a string of questions, and restatements sometimes fixed on an irrelevant detail. The fix is one narrow target, a spoken brief that the agent repeats back in its own words, and a clear statement of the result and the proof you will accept. [[wiki/Working with Agents/Give an agent a task without micromanaging it|Give an agent a task without micromanaging it]]

## You become the tester

An agent with no way to run the app keeps asking you to run it and click around, so your own testing caps how much it can finish. Pull requests also arrived without videos or screenshots when the prompt never asked for them. The fix is a skill that lets the agent use the real app the way a user would, plus a proof line in every request. Spot checks of that proof then replace testing every change yourself. [[wiki/Working with Agents/Let an agent check its own work|Let an agent check its own work]]

## Agents copy bad patterns

Every agent extends the patterns it finds and takes the shortest route to a working change. One workaround can then spread to every agent within days or weeks, and so can the comment that explains it. The fix is to treat the codebase as the agents' memory. Delete existing tech debt, give each common task one conventional way to do it, enforce boundaries in code, and give agents tools instead of letting each session improvise its own scripts. [[wiki/Working with Agents/Make a codebase agents can't easily mess up|Make a codebase agents can't easily mess up]]

## The same correction, again and again

Correcting one agent leaves the cause of a mistake in place, so other agents keep making it. The fix is to move each repeated correction to the strongest place that works. Make the mistake impossible in the code first, then add a lint rule or test, and keep written rules for judgment calls. [[wiki/Working with Agents/Turn a repeated correction into a permanent fix|Turn a repeated correction into a permanent fix]]

## A few agents, then a wall

Running agents in local copies of a repository takes so much storage and computing power that a machine may top out at about 10 agents. A bot that does the work itself also fills its own context. Pull requests also arrived in numbers that nobody could trust. The fix is cloud agents with their own computers, a bot or coordinator that hands out and supervises the work, and verifier agents that scale before the number of workers does. [[wiki/Working with Agents/Run more agents in parallel|Run more agents in parallel]]

## A bot that tries to do everything

A bot without one job tries everything, gives different output from run to run when its standing rules are missing, and becomes too specific when its description fills with notes from single sessions. The fix is to write the description like a role for a new teammate, with its lane, its standing rules and the materials and access an expert would need, kept at the level of principles. [[wiki/Working with Agents/Scope a bot like a job description|Scope a bot like a job description]]

## Untested bots ship broken changes

A build that passes its automated checks has still not been used the way a user would. The fix is two kinds of test. A playtester bot runs the real product on each build that passed its checks and reports what broke. An eval is a set of past cases with known right answers, which a bot or skill must pass before each change goes out. In an eval of 50 cases, one routing bot passed 48 cases. [[wiki/Working with Agents/Test a bot before it ships|Test a bot before it ships]]

## Fixes for bugs nobody saw

Most bug reports are vague, and an agent that proposes a fix before seeing the bug is guessing. Duplicate tickets for one bug also piled up when nothing merged them at intake. The fix is to triage each report as it arrives, have the agent reproduce the bug before touching code, fix only what reproduced, and prove the fix with screenshots from before and after. [[wiki/Working with Agents/Handle a bug report - reproduce first|Handle a bug report - reproduce first]]

## More work than you can read

At the rate agents land changes, nobody can read every line, and people kept watching every chat because no rules said which actions were risky. The fix is a short list of actions the agent must ask about first, evidence and samples to check everything else afterwards, and looser rules once the agent has earned them. [[wiki/Working with Agents/Review less without losing control|Review less without losing control]]

## Open questions

- Which of these problems tends to show up first for a new team?
- How does a fix for one problem change the next problem a team runs into?
- What makes a lesson general enough to apply across different agent tools?

## Related pages

- [[wiki/Working with Agents/Trust agents more over time|Trust agents more over time]] covers how the fixes above add up to agents that merge their own work.
- [[wiki/Working with Agents/Organize a fleet of bots|Organize a fleet of bots]] covers keeping many bots from getting in each other's way.

## Sources

- [Lauren Tan](https://x.com/poteto/status/2111133080526495985), X post on how to trust agents' work more (2026-10-16). Agents copying what exists and taking the shortest path, and making the easy thing the right thing. Quoted.
- [Lauren Tan](https://x.com/poteto/status/2109699980248408574), X post on why slop is fixable (2026-10-12). The codebase as a form of memory to agents, and mistakes that repeat like a virus unless they become constraints. Quoted.
- The Working with Agents pages linked under each lesson, and the sources listed on each of those pages. Paraphrased.
