---
title: "Make a codebase agents can't easily mess up"
type: practice
section: "Working with Agents"
status: seed
description: "Arrange your code and tools so the easy path for an agent is the right one: keep the codebase worth copying, give each pattern one paved path, enforce boundaries in code, and give agents tools instead of letting them improvise."
created: 2026-10-20
updated: 2026-10-20
effort: ongoing
needs: a codebase you can change
cost_note: no
aliases:
  - "Software That Agents Can Work With"
tags:
  - agents
  - codebase
  - architecture
wedge_reviewed: true
---

# Make a codebase agents can't easily mess up

Agents copy whatever they find in your code and take the shortest path to a working change, so the codebase is the strongest constraint on what they produce. If the shortest path is also the right one, even an agent with little context can open a good pull request. Getting there means keeping the code worth copying, giving each pattern one paved path, enforcing the boundaries in code, and handing agents tools rather than leaving them to improvise.

<div class="callout">

<b>At a glance</b>

1. Treat the codebase as the agents' memory and keep it in a state you would be happy to see copied.
2. Give each common task one conventional way to do it, and put related code in one place.
3. Enforce boundaries in code rather than in review.
4. Ban patterns that agents use to excuse workarounds, as Dune did with code comments.
5. Give agents a tool for routine work instead of letting each session write its own scripts.
6. Make someone the gardener who pulls bad patterns before they spread.

</div>

<figure>
<svg viewBox="0 0 360 458" width="100%" style="max-width:360px;--qp-surface:light-dark(#ffffff,#1a1a1a);--qp-ink:light-dark(#090909,#f2f2f2);--qp-ink2:light-dark(#3a3a3a,#cfcfcf);--qp-mut:light-dark(#6b6b6b,#a3a3a3);--qp-rule:light-dark(#ededed,#262626);--qp-rule2:light-dark(#dedede,#333333);--qp-accent:light-dark(#1a7fe6,#5aa9f5);font-family:Inter,system-ui,sans-serif" role="img" aria-labelledby="cb-paved-t">
<title id="cb-paved-t">If the shortest path is also the right one, even an agent with little context can open a good pull request.</title>
<rect x="0.5" y="0.5" width="359" height="457" rx="16" style="fill:var(--qp-surface);stroke:var(--qp-rule);stroke-width:1"/>
<text x="20" y="40" text-anchor="start" style="fill:var(--qp-ink);font-size:17px;font-weight:600">If the shortest path is also the</text>
<text x="20" y="64" text-anchor="start" style="fill:var(--qp-ink);font-size:17px;font-weight:600">right one, even an agent with little</text>
<text x="20" y="88" text-anchor="start" style="fill:var(--qp-ink);font-size:17px;font-weight:600">context can open a good pull</text>
<text x="20" y="112" text-anchor="start" style="fill:var(--qp-ink);font-size:17px;font-weight:600">request.</text>
<line x1="20" y1="128" x2="340" y2="128" style="stroke:var(--qp-rule2);stroke-width:1"/>
<rect x="20" y="127" width="40" height="2" rx="1" style="fill:var(--qp-accent)"/>
<text x="20" y="156" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">Give each pattern one paved path.</text>
<text x="20" y="178" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">Common work should have a single</text>
<text x="20" y="200" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">conventional path</text>
<line x1="20" y1="214" x2="340" y2="214" style="stroke:var(--qp-rule);stroke-width:1"/>
<text x="20" y="242" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">Enforce boundaries in code rather</text>
<text x="20" y="264" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">than in review.</text>
<line x1="20" y1="278" x2="340" y2="278" style="stroke:var(--qp-rule);stroke-width:1"/>
<text x="20" y="306" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">Build the Lever: give agents tools</text>
<text x="20" y="328" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">instead of relying only on markdown.</text>
<text x="20" y="350" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">run one command instead of writing a</text>
<text x="20" y="372" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">throwaway script</text>
<line x1="20" y1="386" x2="340" y2="386" style="stroke:var(--qp-rule);stroke-width:1"/>
<text x="20" y="414" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">Make someone the gardener who pulls</text>
<text x="20" y="436" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">bad patterns before they spread.</text>
</svg>
</figure>

## Why it works

[Lauren](https://x.com/poteto/status/2102050467505430555) calls the codebase the best form of memory, because agents extend whatever patterns they see in their context and rarely refactor along the way. Good patterns spread that way, and so do bad ones: one small workaround, or a comment explaining it, can become the default for every agent within days or weeks. Since agents also love taking shortcuts, she asks what happens if the framework is designed so that the shortcut is the right path. A locked-down codebase can feel annoying to humans, but it lets a contributor with little context, or an agent with little reasoning, write good code by default.

## The method

1. **Keep the code worth copying.** Start by deleting the tech debt you already have, since agents will extend it otherwise. [Lauren](https://x.com/poteto/status/2102050467505430555)'s test is whether you would be happy if an agent copied any part of the codebase, and in [her post on slop](https://x.com/poteto/status/2109699980248408574) every nit, mistake and bad pattern you notice from agents should become a constraint.
2. **Give each pattern one paved path.** Common work should have a single conventional path, so that agents don't need to guess. Dune puts each feature's code in a single folder and has firm conventions about where code lives and how it is imported.
3. **Enforce boundaries in code.** In the code editor whose agent window inspired Dune, slow code sometimes got imported into the thread that draws the interface. Dune now enforces that boundary in code through the import graph, because the interface thread must keep every task under the 16 milliseconds each frame gets at 60 frames per second. Lessons that used to live in a style guide or in review comments belong in the codebase itself.
4. **Ban the patterns that excuse workarounds.** Dune bans code comments because agents were using them to justify a band-aid instead of solving the actual problem, and other agents then copied the comment and the workaround together.
5. **Give agents tools rather than notes.** pstack, [Lauren](https://x.com/poteto/status/2094457600259842065)'s skill set, has a principle called Build the Lever: give agents tools instead of relying only on markdown. For verification, that means a small command-line tool, so agents run one command instead of writing a throwaway script. She wants that tool to have these properties:
   1. Commands that are easy to combine.
   2. A dry-run option for anything destructive.
   3. Subcommands that reveal features gradually.
   4. Rich help text and machine-readable output.
   5. Error messages that tell the agent what to do instead.
6. **Appoint a gardener.** Someone has to notice bad patterns creeping in and stop them early. When one appears, the instinct should be to write a lint rule against it, which stops the bleeding even if the cleanup comes later. [Her post on slop](https://x.com/poteto/status/2109699980248408574) goes further: use type systems and frameworks that shrink the space of designs an agent can choose from, so that the bad pattern becomes impossible.

### A prompt to copy

> Look through this codebase for patterns an agent would copy that we don't want copied: workarounds, comments that excuse a workaround, and tasks that can be done more than one way. For each, propose the one paved path, the lint rule or type change that would block the bad version, and the old code to delete.

## Signals and failure points

| What you notice | What it means | What to do |
|---|---|---|
| The same workaround shows up across many pull requests | An existing pattern is spreading | Delete it and block it with a lint rule |
| Agents do one task several different ways | There is no paved path | Choose one way and enforce it |
| A comment explains why the real fix was skipped | The agent is excusing a band-aid | Remove the comment and fix the cause |
| Agents write their own scripts to run the app | They have no shared tool | Build one command-line tool for it |

A codebase that agents can't easily mess up is one where copying what is already there produces good work, so each cleanup you make teaches every future agent.

## Related pages

- [[wiki/Working with Agents/Turn a repeated correction into a permanent fix|Turn a repeated correction into a permanent fix]] covers where a single correction belongs, from code to lint rule to skill.
- [[wiki/Working with Agents/Let an agent check its own work|Let an agent check its own work]] covers the verification tool and the feature map.
- [[wiki/Working with Agents/Trust agents more over time|Trust agents more over time]] covers why a locked-down codebase lets you run more agents.

## Sources

- [Lauren](https://x.com/poteto/status/2102050467505430555), talk on shipping 2,500 pull requests (posted 2026-09-21, captions). The codebase as memory, the easy path as the right path, Dune's principles, banning comments, the frame budget, the gardener. Paraphrased.
- [Lauren](https://youtu.be/Zc07HI9Ppxk?t=1968), workshop talk (2026-08-12, auto-captions via synthesis). The case for constraining greenfield code early or rewriting it (used in Open questions). Paraphrased.
- [Lauren](https://x.com/poteto/status/2109699980248408574), X post on slop (2026-10-12). The codebase is memory, every bad pattern becomes a constraint, and making anti-patterns categorically impossible. Paraphrased.
- [Lauren](https://x.com/poteto/status/2094457600259842065), "The Complete Guide to pstack Pt. 1" (X Article, 2026-08-31). Tools instead of written guidance, and the properties of an agent-friendly command-line tool. Paraphrased.

## Open questions

How should a team choose its gardener, and how much of their time does the role take? The sources name the role but give no detail.

How do you get from a codebase that grew without constraints to a locked-down one: rebuild, or add lint rules first? [Lauren](https://youtu.be/Zc07HI9Ppxk?t=1968) says vibe-coded greenfield apps should be constrained early or rebuilt, and the talk on 2,500 pull requests says a lint rule stops the bleeding before cleanup. The Aug 12 talk describes refactoring all of Grok Bot to the new architecture over more than 600 pull requests, but none of them gives a step-by-step migration path.

Banning comments worked for Dune. The sources don't say whether it suits other codebases.
