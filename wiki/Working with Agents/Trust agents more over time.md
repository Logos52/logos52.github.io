---
title: "Trust agents more over time"
type: technique
section: "Working with Agents"
status: seed
description: "Climb from watching every agent chat to agents that merge their own work, one step at a time, giving each step evidence to rest on and holding back the changes you cannot undo."
created: 2026-10-19
updated: 2026-10-19
effort: weeks
needs: a codebase
cost_note: no
aliases:
  - "Case: Shipping Thousands of Changes a Month"
tags:
  - agents
  - trust
  - autonomy
wedge_reviewed: true
---

# Trust agents more over time

How much agents can do for you depends on how much you trust their work. Trust grows in steps, and each step lets agents do more while you watch less.

**Scope.** This is one engineer's path from watching every chat to agents that merge their own pull requests overnight ([talk on trusting agents](https://www.youtube.com/watch?v=Zc07HI9Ppxk)). It fits software work you can check and revert, and changes you cannot undo are a harder case.

<div class="callout">

<b>At a glance</b>

- Start on your own machine, where you can watch the agent work.
- Move to cloud agents, then to merging with review afterwards.
- Keep a hold on any change you cannot undo.
- Climb one step at a time.

</div>

<figure>
<svg viewBox="0 0 300 522" width="100%" style="max-width:300px;--qp-surface:light-dark(#ffffff,#1a1a1a);--qp-ink:light-dark(#090909,#f2f2f2);--qp-ink2:light-dark(#3a3a3a,#cfcfcf);--qp-mut:light-dark(#6b6b6b,#a3a3a3);--qp-rule:light-dark(#ededed,#262626);--qp-rule2:light-dark(#dedede,#333333);--qp-accent:light-dark(#1a7fe6,#5aa9f5);font-family:Inter,system-ui,sans-serif" role="img" aria-labelledby="tr-steps-t">
<title id="tr-steps-t">Trust grows in steps, and each step lets agents do more while you watch less.</title>
<rect x="0.5" y="0.5" width="299" height="521" rx="16" style="fill:var(--qp-surface);stroke:var(--qp-rule);stroke-width:1"/>
<text x="20" y="40" text-anchor="start" style="fill:var(--qp-ink);font-size:17px;font-weight:600">Trust grows in steps, and</text>
<text x="20" y="64" text-anchor="start" style="fill:var(--qp-ink);font-size:17px;font-weight:600">each step lets agents do more</text>
<text x="20" y="88" text-anchor="start" style="fill:var(--qp-ink);font-size:17px;font-weight:600">while you watch less.</text>
<line x1="20" y1="104" x2="280" y2="104" style="stroke:var(--qp-rule2);stroke-width:1"/>
<rect x="20" y="103" width="40" height="2" rx="1" style="fill:var(--qp-accent)"/>
<text x="20" y="132" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">Start local and watch</text>
<text x="20" y="154" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">Move on once you trust what it</text>
<text x="20" y="176" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">reports</text>
<line x1="20" y1="190" x2="280" y2="190" style="stroke:var(--qp-rule);stroke-width:1"/>
<text x="20" y="218" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">Move to cloud agents that pick</text>
<text x="20" y="240" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">up work on their own</text>
<text x="20" y="262" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">reproduce it on its own computer</text>
<text x="20" y="284" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">and return a pull request</text>
<line x1="20" y1="298" x2="280" y2="298" style="stroke:var(--qp-rule);stroke-width:1"/>
<text x="20" y="326" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">Let agents merge, and review</text>
<text x="20" y="348" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">afterwards</text>
<text x="20" y="370" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">revert, modify or tighten the setup</text>
<text x="20" y="392" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">where you see a problem</text>
<line x1="20" y1="406" x2="280" y2="406" style="stroke:var(--qp-rule);stroke-width:1"/>
<text x="20" y="434" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">Keep a hold on what you cannot</text>
<text x="20" y="456" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">undo</text>
<text x="20" y="478" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">Some changes lose data or cannot</text>
<text x="20" y="500" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">be reverted</text>
</svg>
</figure>

## Why it works

Low trust forces micromanagement, the way a manager who does not trust a team ends up looking over every shoulder. Micromanaging then eats the time you would need to build the skills and tools that earn trust.

Each step rests on evidence from the one below. You move to the cloud after watching the agent check its work locally, and you let agents merge once those checks have held. The checks can still be wrong, as with trusting that a colleague ran their code, but a change you can revert keeps a wrong call cheap.

## The method

1. **Start local and watch.** Have the agent bring up your app on your own machine, so you can see how it drives the app and checks its work. Move on once you trust what it reports.
2. **Move to cloud agents that pick up work on their own.** Let a cloud agent take each new bug report, reproduce it on its own computer and return a pull request. In one case it found that a bug still appeared, yet the fix was already on the main branch, which saved an hour of checking.
3. **Let agents merge, and review afterwards.** Read what landed on the main branch the next morning, and revert, modify or tighten the setup where you see a problem. The first night is scary, but one morning brought about 20 merged pull requests, and they were good.
4. **Keep a hold on what you cannot undo.** Some changes lose data or cannot be reverted, and how far you can trust those depends on how well the work can be verified. When a team put its live game's bug fixes on full autopilot, it still required each bug to be reproduced and checked first.
5. **Climb one rung at a time.** Jumping from a handful of agents to hundreds wastes tokens and money. Start with something simple and low risk, and let your own standards set the pace rather than another person's setup.

### A loop to copy

> Watch [channel] for feedback about the app and open a ticket for each item. For each ticket, start a cloud agent to triage it and reproduce the issue on its own computer. If the issue clearly reproduces, put up a fix and have a small group of agents test the pull request. If they find no issues, message me, then rebase and merge it after 1 hour unless I ask for changes.

## Signals and failure points

| Sign | What it tells you | Response |
|---|---|---|
| Your day goes to watching chats and correcting | You are low on the ladder | Spend the time on the setup instead |
| More agents bring sloppy pull requests and regressions | You scaled before you had trust | Go back a step and run fewer agents |
| You hesitate to let a kind of change merge itself | It may not be reversible | Keep a hold for that kind of change |

You now have the whole climb, from watching locally to reviewing after the merge, with each step resting on evidence from the one before and a hold on what you cannot undo.

## Open questions

How do you know you trust a step enough to climb? The sources describe the feeling and the evidence but give no test or threshold.

What hold fits work that cannot be undone and is hard to verify? The Q&A leaves it open.

How small should each merged change be so that reverting stays cheap? No source says.

## Related pages

- [[wiki/Working with Agents/Let an agent check its own work|Let an agent check its own work]] covers the checks every step rests on.
- [[wiki/Working with Agents/Turn a repeated correction into a permanent fix|Turn a repeated correction into a permanent fix]] sets out what to change once you find a problem after merging.
- [[wiki/Working with Agents/Give an agent a task without micromanaging it|Give an agent a task without micromanaging it]] explains how to brief an agent at the start.
- [[wiki/Start Here/The Big Idea Agents Do, You Steer|The Big Idea: Agents Do, You Steer]] sums up the whole approach.

## Sources

- [Lauren](https://www.youtube.com/watch?v=Zc07HI9Ppxk), talk on trusting agents (2026-08-12, auto-captions). Trust and micromanagement, start local, the bug-reproduction cloud agent, about 20 merged pull requests, not jumping to hundreds of agents, no shortcut and no blind trust. Paraphrased.
- [Lauren](https://x.com/poteto/status/2102050467505430555), talk on shipping pull requests to production (posted 2026-09-21, transcript). One to five agents as the hardest phase, a hundred untrusted agents giving slop pull requests. Paraphrased.
- [Matt](https://www.youtube.com/watch?v=MN9dGgmLyso) with [Lauren](https://www.youtube.com/watch?v=MN9dGgmLyso), live Q&A (2026-10-02, transcript). Stuck micromanaging at low trust, agents merging overnight with review in the morning, the scary first night, reversible and irreversible changes. Paraphrased.
- [Lauren](https://x.com/poteto/status/2107510472601985336), X post on the first and last mile (2026-10-06). The feedback loop with a 1-hour hold before merging. Paraphrased.
- [Lauren](https://x.com/poteto/status/2109436202554372476), X post on verification (2026-10-11). Checks are an approximation and can be wrong, like trusting a colleague ran their code. Paraphrased.
- Grok Bot Galaxy event, day 3 (2026-09-17, caption transcript). Full autopilot on the live game with reproduction and checks first, starting simple and low risk. Paraphrased.
