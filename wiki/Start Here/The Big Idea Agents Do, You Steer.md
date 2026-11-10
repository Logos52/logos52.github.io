---
title: "The Big Idea: Agents Do, You Steer"
type: concept
section: "Start Here"
status: seed
description: "How to steer an agent: turn a loose thought into a concrete ask, make the agent say it back, name the proof you will accept, and fix the setup when the same correction keeps coming back."
created: 2026-10-18
updated: 2026-10-19
kind: idea
tags:
  - agents
  - steering
  - delegation
  - judgment
wedge_reviewed: true
---

# The Big Idea: Agents Do, You Steer

To steer an agent, you turn what is in your head into a concrete ask, check what comes back, and change the setup when a miss keeps repeating. The moves come in the order you use them, followed by the general idea behind them.

<div class="callout">

<b>At a glance</b>

- Talk the thought out, then have the agent restate it before it starts.
- Name the first step, the condition and the proof you will accept.
- Say what to achieve and leave the method open.
- When the same correction keeps coming back, change the setup.

</div>

<figure>
<svg viewBox="0 0 520 456" width="100%" style="max-width:520px;--qp-surface:light-dark(#ffffff,#1a1a1a);--qp-ink:light-dark(#090909,#f2f2f2);--qp-mut:light-dark(#6b6b6b,#a3a3a3);--qp-rule:light-dark(#ededed,#262626);--qp-rule2:light-dark(#dedede,#333333);--qp-accent:light-dark(#1a7fe6,#5aa9f5);font-family:Inter,system-ui,sans-serif" role="img" aria-labelledby="sh-steer-t">
<title id="sh-steer-t">"Make this cooler" is a prompt an agent will not do well with, because it gets stuck and comes back with questions. A concrete ask, dictated by voice, points the agent at the feedback channel and asks it to triage each item, try to reproduce the issue and file a ticket, leaving automatic fixes for later.</title>
<rect x="0.5" y="0.5" width="519" height="455" rx="16" style="fill:var(--qp-surface);stroke:var(--qp-rule);stroke-width:1"/>
<rect x="20" y="20" width="480" height="108" rx="20" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/>
<text x="40" y="50" style="fill:var(--qp-ink);font-size:15px;font-weight:600">"Make this cooler"</text>
<text x="40" y="76" style="fill:var(--qp-ink);font-size:13px">is a prompt an agent will not do well with,</text>
<text x="40" y="96" style="fill:var(--qp-ink);font-size:13px">because it gets stuck and comes back with questions.</text>
<rect x="20" y="144" width="480" height="154" rx="20" style="fill:none;stroke:var(--qp-accent);stroke-width:1.25"/>
<text x="40" y="174" style="fill:var(--qp-ink);font-size:15px;font-weight:600">A concrete ask, dictated by voice</text>
<text x="40" y="200" style="fill:var(--qp-ink);font-size:13px">points the agent at the feedback channel and asks it to</text>
<text x="40" y="220" style="fill:var(--qp-ink);font-size:13px">triage each item, try to reproduce the issue</text>
<text x="40" y="240" style="fill:var(--qp-ink);font-size:13px">and file a ticket, leaving automatic fixes for later.</text>
<rect x="20" y="314" width="480" height="122" rx="20" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/>
<text x="40" y="344" style="fill:var(--qp-ink);font-size:15px;font-weight:600">A second ask</text>
<text x="40" y="370" style="fill:var(--qp-ink);font-size:13px">reproduce the bug,</text>
<text x="40" y="390" style="fill:var(--qp-ink);font-size:13px">apply a fix only when it shows up on the main branch,</text>
<text x="40" y="410" style="fill:var(--qp-ink);font-size:13px">and return a video as proof.</text>
</svg>
</figure>

## Talk it out, then have the agent say it back

When a thought is still loose, speak it for a few minutes and finish with "restate this in your own words before you start working." Reading a short restatement is quicker than rereading your own long block of text, and a misreading shows up before any work is done. The limit now is how clearly you express what you want.

The same move works on a noisy team chat thread. Asking for the underlying problem in plain English makes the agent compress the thread into one problem statement. A red herring then shows up early, and your own possibly wrong guess stays out of its starting point.

## Name the first step, the condition and the proof

"Make this cooler" is a prompt an agent will not do well with, because it gets stuck and comes back with questions. A concrete ask, dictated by voice, points the agent at the feedback channel and asks it to triage each item, try to reproduce the issue and file a ticket, leaving automatic fixes for later.

A second ask says to reproduce the bug, apply a fix only when it shows up on the main branch, and return a video as proof. Reproduction comes first because you can trust that the agent understood the problem only once it has reproduced it.

## Say what to achieve, not every step

Tell the agent what to achieve and leave it room to solve the problem in ways you would not have thought of. When one bot's description came out too specific, the fix was to have it rewrite the description as principles. When individual commands start to feel like micromanaging, step back and change how the whole team of bots is set up.

## When the same correction keeps coming back, fix the setup

Each time you correct an agent, ask where that correction is best made. The strongest fix changes the code so the mistake is impossible. The next is an automated check such as a lint rule, and the weakest is a written rule or skill that the agent might forget. Past chats help, because the agent can find the times you intervened so that you can turn them into rules.

A vague report shows why. When a user posts a small screenshot with three question marks, an agent that cannot tell which feature it shows can only guess. With a map of how users reach each feature, it can work out what the report means.

## The mental model underneath

The split underneath is that the agent does the detail work while you keep the outcome, the direction and the decision to accept. You can hand your thinking to an agent but not your understanding, because someone has to know what is being built and why. An agent also agrees with you even when you are wrong, so you keep close oversight.

The usual failure is accepting results without steering. In a trial of engineers learning a new software library, the group using AI finished as fast as the group without it but scored 50% on the follow-up quiz, against 67%. The split can shift as models improve.

## Related pages

- [[wiki/Working with Agents/Give an agent a task without micromanaging it|Give an agent a task without micromanaging it]]: how to set the direction in a message.
- [[wiki/Working with Agents/Scope a bot like a job description|Scope a bot like a job description]]: how to give a bot one job and the rules and access it needs.
- [[wiki/Working with Agents/Let an agent check its own work|Let an agent check its own work]]: how to get proof from the agent so you decide what to accept.

## Sources

- Grok Bot Galaxy event transcripts, days 1 to 3 (2026-09-15 to 2026-09-17), community named transcripts. Restate-first habit, the voice-dictated ask, "make this cooler", the too-specific bot description, micromanaging as a signal. Paraphrased.
- Lauren Tan, talk on shipping pull requests to production, posted 2026-09-21 (transcript). The feature map, the vague screenshot, the ordering of fixes for a repeated correction. Paraphrased.
- Matt Pocock with Lauren Tan, live Q&A (2026-10-02, captions). Expressing intent as the limit, mining past chats. Paraphrased.
- Lauren Tan, "The Complete Guide to pstack Pt. 2" (X Article, 2026-09-09). Restating a thread, reproduce first, balance between telling and freedom. Paraphrased.
- Sequoia Capital, Andrej Karpathy, "From Vibe Coding to Agentic Engineering" (published 2026-04-29, captured 2026-05-02). The split of work, understanding, taste. Paraphrased.
- Addy Osmani, "Don't Outsource the Learning" (2026-05-18). The trial results. Paraphrased.
- Dwarkesh Patel with Schulman, Millidge and O'Neill (2026-09-11). Taste on long projects. Paraphrased.

## Open questions

When should you speak your own hypothesis to the agent and when should you leave it out, since one source asks for two or three sentences on what you think the problem is and another asks the agent to restate the problem without your assumptions?

How much should a person learn about tool-specific workflows, since one source says they last only weeks or months at best?

Which jobs are small enough to delegate with no understanding of the result?

How long will the person keep the share of direction and judgment as models improve?
