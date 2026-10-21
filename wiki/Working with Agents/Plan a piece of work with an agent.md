---
title: "Plan a piece of work with an agent"
type: technique
section: "Working with Agents"
status: seed
description: "Plan a feature, redesign or migration by investigating first, splitting the job into blocks, letting the agent prototype a few options you can see, and only then turning the chosen design into small, verified steps."
created: 2026-10-20
updated: 2026-10-20
effort: an afternoon
needs: an agent that can run your app
cost_note: no
aliases:
  - "Breaking a Job into Small Steps"
  - "Try it before you plan it"
tags:
  - agents
  - planning
  - prototyping
---

# Plan a piece of work with an agent

Planning with an agent usually fails in one of two ways: you accept the first design it gives back, or you polish an abstract plan that no one has tried. The way out is to plan by trying things. The agent first investigates and reports what it found, the job gets split into blocks, the agent builds a few throwaway prototypes you can see and compare, and once you have chosen a design, it becomes a plan of small steps that each prove themselves.

**Scope.** This follows [Lauren](https://x.com/poteto/status/2097732320606507506)'s planning workflow from her guide to pstack, together with how speakers at the Grok Bot Galaxy livestream had bots investigate before fixing and split a job into blocks. It fits features, redesigns, migrations and unclear bugs, wherever the agent can run your app and show you the result.

<div class="callout">

<b>At a glance</b>

1. Have the agent investigate and report before it changes anything.
2. Split the job into blocks, and do only the first stage now.
3. Ask for a few prototypes with videos or screenshots, then choose.
4. For shared code or a new subsystem, compare competing sketches and scrap the design if it proves wrong.
5. Turn the chosen design into a plan of small pull requests, each verified by running the code.

</div>

<figure>
<svg viewBox="0 0 500 601" width="100%" style="max-width:500px" role="img" aria-labelledby="pl-path-t">
<title id="pl-path-t">Plan by trying. Planning fails in one of two ways, both crossed out: accept the first design, and polish an abstract plan. Step 1, investigate: findings, not a change. Don't open a PR yet. Step 2, split the job into blocks: three blocks, the first marked do now and the other two marked later. Step 3, prototype a few options: variation 1, variation 2 and variation 3 behind a switcher, when testing an interaction. Videos or screenshots, then choose. Step 4, a side branch from step 3 for a bigger design: competing sketches, and a judge agent compares them. If the design is wrong, scrap the sketch and start over, with a dashed arrow looping back to the sketches. Step 5, plan of small pull requests: a row of tasks each marked verified. Verified only when the agent has run the code.</title>
<g style="fill:var(--mut,#666);font-family:inherit;font-size:12px" text-anchor="middle"><text x="240" y="20">Planning fails in one of two ways</text></g>
<rect x="30" y="30" width="200" height="34" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;stroke-dasharray:5 4"/>
<g style="fill:var(--mut,#666);font-family:inherit;font-size:13px" text-anchor="middle"><text x="130" y="52">Accept the first design</text></g>
<line x1="48" y1="47.0" x2="212" y2="47.0" style="stroke:var(--mut,#666);stroke-width:1.3"/>
<rect x="250" y="30" width="200" height="34" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;stroke-dasharray:5 4"/>
<g style="fill:var(--mut,#666);font-family:inherit;font-size:13px" text-anchor="middle"><text x="350" y="52">Polish an abstract plan</text></g>
<line x1="268" y1="47.0" x2="432" y2="47.0" style="stroke:var(--mut,#666);stroke-width:1.3"/>
<rect x="20" y="90" width="300" height="67" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="30" y="110" style="font-weight:600">1. Investigate</text><text x="30" y="127">Findings, not a change.</text><text x="30" y="144">Don't open a PR yet.</text></g>
<path d="M170,157 L170,181" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="170.0,181.0 165.0,172.0 175.0,172.0" style="fill:var(--mut,#666)"/>
<rect x="20" y="183" width="300" height="84" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="30" y="203" style="font-weight:600">2. Split the job into blocks</text></g>
<rect x="30" y="217" width="88" height="36" rx="5" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;stroke:var(--accent,#2a6)"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:12px" text-anchor="middle"><text x="74.0" y="240">Do now</text></g>
<rect x="126" y="217" width="88" height="36" rx="5" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;stroke-dasharray:4 3"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:12px" text-anchor="middle"><text x="170.0" y="240">Later</text></g>
<rect x="222" y="217" width="88" height="36" rx="5" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;stroke-dasharray:4 3"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:12px" text-anchor="middle"><text x="266.0" y="240">Later</text></g>
<path d="M170,267 L170,291" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="170.0,291.0 165.0,282.0 175.0,282.0" style="fill:var(--mut,#666)"/>
<rect x="20" y="293" width="300" height="152" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="30" y="313" style="font-weight:600">3. Prototype a few options</text></g>
<rect x="30" y="325" width="280" height="72" rx="6" style="fill:none;stroke:var(--mut,#666);stroke-width:1.2;stroke-dasharray:5 4"/>
<g style="fill:var(--mut,#666);font-family:inherit;font-size:12px" text-anchor="start"><text x="40" y="343">Switcher, when testing an interaction</text></g>
<rect x="40" y="353" width="82" height="34" rx="5" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:12px" text-anchor="middle"><text x="81.0" y="375">Variation 1</text></g>
<rect x="132" y="353" width="82" height="34" rx="5" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:12px" text-anchor="middle"><text x="173.0" y="375">Variation 2</text></g>
<rect x="224" y="353" width="82" height="34" rx="5" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:12px" text-anchor="middle"><text x="265.0" y="375">Variation 3</text></g>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="30" y="417">Videos or screenshots,</text><text x="30" y="434">then choose</text></g>
<rect x="344" y="303" width="146" height="84" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;stroke:var(--accent,#2a6)"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="354" y="323" style="font-weight:600">4. Bigger design</text><text x="354" y="340">Competing sketches</text><text x="354" y="357">Judge agent</text><text x="354" y="374">compares them</text></g>
<path d="M320,333 L343,333" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="343.0,333.0 334.0,338.0 334.0,328.0" style="fill:var(--mut,#666)"/>
<path d="M417.0,387 L417.0,411" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="417.0,411.0 412.0,402.0 422.0,402.0" style="fill:var(--mut,#666)"/>
<rect x="344" y="413" width="146" height="67" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;stroke-dasharray:5 4"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="354" y="433" style="font-weight:600">Design wrong?</text><text x="354" y="450">Scrap the sketch</text><text x="354" y="467">and start over</text></g>
<path d="M490,446.5 L498,446.5 L498,345.0" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5;stroke-dasharray:5 4"/>
<path d="M498,345.0 L491,345.0" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5;stroke-dasharray:5 4"/><polygon points="491.0,345.0 500.0,340.0 500.0,350.0" style="fill:var(--mut,#666)"/>
<path d="M170,445 L170,473" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="170.0,473.0 165.0,464.0 175.0,464.0" style="fill:var(--mut,#666)"/>
<rect x="20" y="475" width="300" height="118" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="30" y="495" style="font-weight:600">5. Plan of small pull requests</text></g>
<rect x="30" y="507" width="64" height="34" rx="5" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:12px" text-anchor="middle"><text x="62.0" y="529">Verified</text></g>
<rect x="102" y="507" width="64" height="34" rx="5" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:12px" text-anchor="middle"><text x="134.0" y="529">Verified</text></g>
<rect x="174" y="507" width="64" height="34" rx="5" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:12px" text-anchor="middle"><text x="206.0" y="529">Verified</text></g>
<rect x="246" y="507" width="64" height="34" rx="5" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:12px" text-anchor="middle"><text x="278.0" y="529">Verified</text></g>
<g style="fill:var(--mut,#666);font-family:inherit;font-size:12px" text-anchor="start"><text x="30" y="563">Verified only when the agent</text><text x="30" y="578">has run the code</text></g>
</svg>
<figcaption>Plan by trying. Findings come first, then blocks, then prototypes you choose from, and then a plan of small, verified pull requests.</figcaption>
</figure>

## Why it works

[Lauren](https://x.com/poteto/status/2097732320606507506) finds that the plan modes in most agent tools over-specify implementation details and under-specify everything else, so she plans through code instead. A prototype lets the agent answer its own open questions with evidence rather than waiting for your input, and it leaves room for the agent to surprise you with an option you would not have thought of. Abstract plans go the other way, because when agents review them adversarially, they start inventing theoretical risks and edge cases for problems that will never happen, and a long plan can look productive while lacking substance.

## The method

1. **Investigate before you fix or plan.** Ask for findings, not a change. On the livestream, one speaker asked an engineering bot to dig into odd matchmaking scores with a cloud agent, and added "Don't open a PR yet, just come back to me with what you think is going on". For an unclear production bug, [Lauren](https://x.com/poteto/status/2097732320606507506) asks for a breakdown of what is known, what data the agent used and its best hypotheses.
2. **Split the job into blocks, and start with the first.** One livestream speaker thinks about the fundamental blocks of a job before automating it: log in to the platform and look at the analytics, download a report, then read that data alongside everything else. Writing detailed instructions for each block gives the bot clarity, and each block can go to its own specialized bot. Another speaker asked a bot to set up only the first stage of a feedback workflow, in which a bot triages player feedback, tries to reproduce each issue and files a ticket. The speaker saved automatic fixing for later.
3. **Prototype a few options and choose.** Ask the agent for several options and for videos or screenshots you can review and choose from. For visual changes, it builds throwaway sketches, and when it is testing an interaction it puts two or three variations behind a simple switcher. It then drives each variation, takes screenshots and measures the actual timing or layout. Prototyping works for features and bug fixes too, not just visual changes. A livestream speaker made the same case for products, preferring a prototype the team can click through and debate over a detailed requirements document.
4. **Sketch and compare when the design is bigger.** For shared code others will use, [Lauren](https://x.com/poteto/status/2097732320606507506) favours readme-driven development. For Dune she started by having the agent write a tutorial for it, which forces the design to begin from how it will be used, though getting anything good or readable out of the agent was a real struggle. For a new subsystem, several agents draft competing designs from the same brief, usually as type signatures, and a judge agent on a different model compares them against a rubric. If the same workaround shows up in unrelated places, or the types need escape hatches like `any`, the design is wrong. In that case the agent throws the sketch away and starts over. In a separate example, after the agent writes the plan, she asks it to prove that the new approach is better than the current one.
5. **Turn the chosen design into small, verified steps.** [Lauren](https://x.com/poteto/status/2097732320606507506) typically asks for a plan once the agent has come up with a design she is happy with. Every task in it is built around proof, and a task counts as verified only when the agent has run the code, since tests alone are not enough. The plan then runs item by item, with each pull request small, self-contained and easy to review. For a week-long project she may commit the plan to the codebase for a while so other agents can see the work in progress, then delete it when done.

### Prompts to copy

> Investigate why <problem>. Give me a breakdown of what we know, what data you used and your best hypotheses. Don't open a PR yet.

> Prototype a few options for <feature request>. Take videos or screenshots for me to review and choose from.

> Turn this design into a plan. Break it into small, verifiable pull requests, each with its own checks and live verification steps.

## Signals and failure points

| What you notice | What it means | What to do |
|---|---|---|
| You are about to accept the agent's first design | No options were compared | Ask for a few prototypes |
| A review of the plan keeps finding new edge cases | The plan is still abstract | Prototype to answer the open questions |
| The same workaround appears in unrelated places, or the types need `any` | The design is wrong | Scrap the sketch and start over |
| A plan task is marked done because its tests pass | It has not been run | Ask the agent to run the code and show it working |

Planning this way swaps a long document for things you can see: findings first, then options you can click, then small steps that each come with proof.

## Related pages

- [[wiki/Working with Agents/Give an agent a task without micromanaging it|Give an agent a task without micromanaging it]] covers restating the request and writing the brief.
- [[wiki/Working with Agents/Let an agent check its own work|Let an agent check its own work]] covers the skill that lets an agent run the app and record videos and screenshots.
- [[wiki/Working with Agents/Handle a bug report - reproduce first|Handle a bug report: reproduce first]] covers the path from a report to a verified fix.

## Sources

- [Lauren](https://x.com/poteto/status/2097732320606507506), "The Complete Guide to pstack Pt. 2" (X Article, 2026-09-09). Plan modes and abstract plans, prototyping options, the tutorial-first and competing-sketch design steps, the planning playbook, and the investigate, prototype and migration prompts. Paraphrased; prompts adapted.
- Grok Bot Galaxy livestream, day 3 (2026-09-17, caption transcript; speaker labels unreliable). Investigating the matchmaking bug before opening a pull request, the blocks of a job, and building the first stage of a feedback workflow. Paraphrased, one short quote.
- Grok Bot Galaxy livestream, day 1 (2026-09-15, caption transcript). Prototypes the team can click through instead of a detailed requirements document. Paraphrased.

## Open questions

What should a plan look like on the page? The sources give prompts and say every task is built around proof, but no template.

How many prototypes are enough before choosing? The sources say "a few" and "two or three variations".

When is a design big enough to need competing sketches rather than a few prototypes? The sources give examples (shared code, a new subsystem) but no rule.
