---
title: "Review less without losing control"
type: technique
section: "Working with Agents"
status: seed
description: "When agents do more than you can read, decide which actions need your yes first, check the rest afterwards through evidence and samples, and loosen each rule once the agent has earned it."
created: 2026-10-19
updated: 2026-10-19
effort: an hour
needs: a bot
cost_note: no
aliases:
  - "Checking Agent Work"
  - "Approval Before Anything You Cannot Undo"
tags:
  - agents
  - review
  - approval
draft: true
---

# Review less without losing control

Once agents land more work than you can read, checking every line stops being possible, so control has to come from two other places. The first is a short list of actions the agent must ask about before it acts, and the second is evidence you can check quickly after it acts, so that everything outside the list can run without you watching.

**Scope.** This draws on [Lauren](https://www.youtube.com/watch?v=MN9dGgmLyso&t=2863s)'s way of reviewing a coding fleet by sampling and collecting findings. The approval rules and hand-offs come from other speakers at the Grok Bot Galaxy livestream, whose bots reply to email, answer support tickets and plan sales work. It fits any agent that acts in outside tools or merges its own changes.

<div class="callout">

<b>At a glance</b>

1. Name the actions that need your yes first, such as replying to email, messaging an outside customer, deploying to production or using an internal system.
2. Let everything else run, and review its evidence and a daily sample afterwards.
3. Have the agent hand off work it is unsure about.
4. Let findings collect in a document and read them every few days for patterns.
5. Drop an approval once the agent has shown it gets that thing right.

</div>

<figure>
<svg viewBox="0 0 480 627" width="100%" style="max-width:480px" role="img" aria-labelledby="rv-split-t">
<title id="rv-split-t">Review split. An agent action goes one of two ways. Ask first: replying to email, messaging an outside customer, deploying to production or using an internal system waits for your yes, with approve and hold buttons. Approve lets the action run, and hold keeps it in the digest. Everything else runs without you watching. When the agent is unsure, with low confidence, missing or ambiguous cases, it hands the work to a person. The rest leaves evidence: videos and screenshots, and a trace of every run, dry runs included. A self-improvement bot reads the traces. You review afterwards by sampling a few merged changes every day, and an agent appends bad patterns to a findings document that you read every couple of days. The sample and the findings lead to fixing the cause once. Separately, when the agent asks, a dashed arrow goes back to the ask-first list: drop an approval once the agent has shown it gets that thing right.</title>
<rect x="150" y="8" width="180" height="36" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="middle"><text x="240" y="31" style="font-weight:600">An agent action</text></g>
<path d="M200,44 L130,78" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="130.0,78.0 135.9,69.6 140.3,78.6" style="fill:var(--mut,#666)"/>
<path d="M280,44 L360,78" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="360.0,78.0 349.8,79.1 353.7,69.9" style="fill:var(--mut,#666)"/>
<rect x="30" y="80" width="200" height="101" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;stroke:var(--accent,#2a6)"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="40" y="100" style="font-weight:600">Ask first</text><text x="40" y="117">Replying to email, messaging</text><text x="40" y="134">an outside customer, deploying</text><text x="40" y="151">to production, using an</text><text x="40" y="168">internal system</text></g>
<path d="M130,181 L130,205" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="130.0,205.0 125.0,196.0 135.0,196.0" style="fill:var(--mut,#666)"/>
<rect x="30" y="207" width="200" height="96" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="40" y="227" style="font-weight:600">Waits for your yes</text></g>
<g style="fill:var(--mut,#666);font-family:inherit;font-size:12px" text-anchor="start"><text x="135" y="285">Hold keeps it</text><text x="135" y="299">in the digest</text></g>
<rect x="40" y="241" width="85" height="28" rx="6" style="fill:none;stroke:var(--ink,currentColor);stroke-width:1.2"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="middle"><text x="82.5" y="260">Approve</text></g>
<rect x="135" y="241" width="85" height="28" rx="6" style="fill:none;stroke:var(--ink,currentColor);stroke-width:1.2"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="middle"><text x="177.5" y="260">Hold</text></g>
<path d="M82.5,269 L82.5,327" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="82.5,327.0 77.5,318.0 87.5,318.0" style="fill:var(--mut,#666)"/>
<rect x="30" y="329" width="200" height="33" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="40" y="349" style="font-weight:600">Then the action runs</text></g>
<rect x="250" y="80" width="220" height="50" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="260" y="100" style="font-weight:600">Everything else</text><text x="260" y="117">Runs without you watching</text></g>
<rect x="300" y="152" width="170" height="84" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;stroke-dasharray:5 4"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="310" y="172" style="font-weight:600">Unsure: hand it</text><text x="310" y="189">to a person</text><text x="310" y="206">Low confidence, missing</text><text x="310" y="223">or ambiguous cases</text></g>
<path d="M385,130 L385,150" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5;stroke-dasharray:5 4"/><polygon points="385.0,150.0 380.0,141.0 390.0,141.0" style="fill:var(--mut,#666)"/>
<path d="M270,130 L270,258" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="270.0,258.0 265.0,249.0 275.0,249.0" style="fill:var(--mut,#666)"/>
<rect x="250" y="260" width="220" height="101" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="260" y="280" style="font-weight:600">Leaves evidence</text><text x="260" y="297">Videos and screenshots, and a</text><text x="260" y="314">trace of every run, dry runs</text><text x="260" y="331">included. A self-improvement</text><text x="260" y="348">bot reads the traces</text></g>
<path d="M360,361 L360,385" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="360.0,385.0 355.0,376.0 365.0,376.0" style="fill:var(--mut,#666)"/>
<rect x="250" y="387" width="220" height="67" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="260" y="407" style="font-weight:600">You review afterwards</text><text x="260" y="424">A few merged changes,</text><text x="260" y="441">sampled every day</text></g>
<rect x="250" y="470" width="220" height="84" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="260" y="490" style="font-weight:600">Findings document</text><text x="260" y="507">An agent adds bad patterns,</text><text x="260" y="524">and you read it every</text><text x="260" y="541">couple of days</text></g>
<rect x="250" y="580" width="220" height="33" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;stroke:var(--accent,#2a6)"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="260" y="600" style="font-weight:600">Fix the cause once</text></g>
<path d="M250,420.5 L240,420.5 M250,512.0 L240,512.0 M240,420.5 L240,596.5" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/>
<path d="M240,596.5 L249,596.5" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="249.0,596.5 240.0,601.5 240.0,591.5" style="fill:var(--mut,#666)"/>
<path d="M30,255 L12,255 L12,130.5" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5;stroke-dasharray:5 4"/>
<path d="M12,130.5 L29,130.5" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5;stroke-dasharray:5 4"/><polygon points="29.0,130.5 20.0,135.5 20.0,125.5" style="fill:var(--mut,#666)"/>
<line x1="14" y1="392" x2="40" y2="392" style="stroke:var(--mut,#666);stroke-width:1.5;stroke-dasharray:5 4"/>
<g style="fill:var(--mut,#666);font-family:inherit;font-size:12px" text-anchor="start"><text x="48" y="396">When the agent asks:</text></g>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="14" y="414">Drop an approval once the</text><text x="14" y="431">agent has shown it gets that</text><text x="14" y="448">thing right</text></g>
</svg>
<figcaption>The review split. A short list of actions waits for your yes, and everything else runs and leaves evidence you check afterwards.</figcaption>
</figure>


## Why it works

Human review is the hardest part of the setup to scale, because at the rate agents land changes no one can read them all. A quality supervisor in a factory faces the same problem, so the supervisor samples the output each day and looks hard at what comes up. An ask-first rule removes the other reason to watch, since the risky actions now wait for you. One speaker set a personal rule that the bot must ask before replying to any email, which gives the fine-grained control that companies want over what a bot can and cannot do.

## The method

1. **Write ask-first rules for the actions that matter.** The actions speakers gated were replying to email, sending a Slack message to an outside customer, deploying to production and using an internal system. You can be as strict as you like, down to asking before making a new folder, and you can name the things the agent may do freely, such as creating slides.
2. **Make each approval quick to give.** Offer a clear choice per item, such as the approve and hold buttons that appeared on screen in one demo. One speaker reviewed and approved bot work from a phone, so a pending yes did not tie them to a laptop.
3. **Review the evidence, not the code.** [Lauren](https://x.com/poteto/status/2107529532144234937) mostly reviews the videos and screenshots her agents record, because an artifact shows that the work is correct and matches what she meant faster than reading the whole pull request. One speaker's support bot writes a trace of every run, dry runs included, listing how long it took and which files it looked at. Those traces show where an answer went wrong, and a self-improvement bot reads them to improve the system. Then sample a few merged changes every day.
4. **Have the agent hand off when unsure.** One speaker's support bot follows written rules with high, medium and low confidence levels, so it replies only when it is confident and hands low-confidence, missing or ambiguous cases to a person.
5. **Collect findings before fixing them.** [Lauren](https://www.youtube.com/watch?v=MN9dGgmLyso&t=2863s) has an agent look for bad patterns and append each one to a document rather than fix it. Every couple of days she reads the document, sees that several entries are the same problem and fixes the cause once.
6. **Loosen a rule once the agent earns it.** When the agent asks about something you always approve, tell it that it no longer needs to ask, which builds trust one rule at a time.

### Ask-first rules to copy

> Ask me before you send any email or message to someone outside the team, before you deploy to production, and before you use an internal system. You can create drafts, documents and slides without asking. If you are not confident in an answer, hand it to me instead of guessing. Keep a short record of each run: what you looked at and what you decided.

## Signals and failure points

| What you notice | What it means | What to do |
|---|---|---|
| You still read every chat as it runs | No ask-first rules are set | Write rules for the risky actions and stop watching the rest |
| The agent asks for approval on nearly everything | The rules are too strict for what it has shown | Tell it which approvals it can skip from now on |
| A wrong answer reached a customer | The agent may have guessed rather than handed off | Add the confidence hand-off |

Your attention now goes to the few actions that need a yes and to evidence you can check in minutes, while the rest runs.

## Related pages

- [[wiki/Working with Agents/Let an agent check its own work|Let an agent check its own work]] covers the proof and the verifier agents that make evidence worth reviewing.
- [[wiki/Working with Agents/Trust agents more over time|Trust agents more over time]] covers the steps from watching every chat to merging overnight.
- [[wiki/Working with Agents/Turn a repeated correction into a permanent fix|Turn a repeated correction into a permanent fix]] covers what to change when a sample shows the same mistake twice.
- [[wiki/Working with Agents/Give an agent a task without micromanaging it|Give an agent a task without micromanaging it]] covers the brief at the start.

## Sources

- [Matt](https://www.youtube.com/watch?v=MN9dGgmLyso) with [Lauren](https://www.youtube.com/watch?v=MN9dGgmLyso), live Q&A (2026-10-02, transcript). Sampling like a factory supervisor, the findings document read every couple of days. Paraphrased.
- [Lauren](https://x.com/poteto/status/2107529532144234937), X reply (2026-10-06). Videos and screenshots as what she mainly reviews. Paraphrased.
- [Lauren](https://x.com/poteto/status/2109436202554372476), X post on verification (2026-10-11). An artifact shows the work is correct and matches intent, and is easier to review than the whole pull request. Paraphrased.
- [Lauren](https://x.com/poteto/status/2111133080526495985), X post on trusting agents' work (2026-10-16). Human review as the hardest part to scale. Paraphrased.
- Grok Bot Galaxy event, days 1 to 3 (2026-09-15 to 2026-09-17, community named transcripts and visual notes). Speakers other than Lauren, with unreliable speaker labels. The ask-before-email rule, strict and free rules, dropping an approval through memory, approving from a phone, gating production deploys and internal systems, support traces and the self-improvement bot, the confidence hand-off, and the approve and hold buttons (on screen only). Paraphrased.

## Open questions

Which actions belong on the ask-first list for a coding fleet, beyond production deploys and outside messages? The sources give examples, not a rule.

How many changes make a useful daily sample? No source gives a number.

What should the agent do with a request that waits a long time for approval? No source says.
