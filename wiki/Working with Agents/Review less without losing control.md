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
wedge_reviewed: true
---

# Review less without losing control

Once agents finish more work than you can read, checking every line stops being possible, so control has to come from two other places. The first is a short list of actions the agent must ask about before it acts. The second is evidence you can check quickly after it acts, so that everything outside the list can run without you watching.

<div class="callout">

<b>At a glance</b>

1. Name the actions that need your yes first, such as replying to email, messaging an outside customer, deploying to production or using an internal system.
2. Let everything else run, and review its evidence and a daily sample afterwards.
3. Have the agent hand off work it is unsure about.
4. Let findings collect in a document and read them every few days for patterns.
5. Drop an approval once the agent has shown it gets that thing right.

</div>

<figure>
<svg viewBox="0 0 300 592" width="100%" style="max-width:300px;--qp-surface:light-dark(#ffffff,#1a1a1a);--qp-ink:light-dark(#090909,#f2f2f2);--qp-ink2:light-dark(#3a3a3a,#cfcfcf);--qp-mut:light-dark(#6b6b6b,#a3a3a3);--qp-rule:light-dark(#ededed,#262626);--qp-rule2:light-dark(#dedede,#333333);--qp-accent:light-dark(#1a7fe6,#5aa9f5);font-family:Inter,system-ui,sans-serif" role="img" aria-labelledby="rv-lanes-t">
<title id="rv-lanes-t">Your attention now goes to the few actions that need a yes and to evidence you can check in minutes, while the rest runs.</title>
<rect x="0.5" y="0.5" width="299" height="591" rx="16" style="fill:var(--qp-surface);stroke:var(--qp-rule);stroke-width:1"/>
<text x="20" y="40" text-anchor="start" style="fill:var(--qp-ink);font-size:17px;font-weight:600">Your attention now goes to</text>
<text x="20" y="64" text-anchor="start" style="fill:var(--qp-ink);font-size:17px;font-weight:600">the few actions that need a</text>
<text x="20" y="88" text-anchor="start" style="fill:var(--qp-ink);font-size:17px;font-weight:600">yes and to evidence you can</text>
<text x="20" y="112" text-anchor="start" style="fill:var(--qp-ink);font-size:17px;font-weight:600">check in minutes, while the</text>
<text x="20" y="136" text-anchor="start" style="fill:var(--qp-ink);font-size:17px;font-weight:600">rest runs.</text>
<line x1="20" y1="152" x2="280" y2="152" style="stroke:var(--qp-rule2);stroke-width:1"/>
<rect x="20" y="151" width="40" height="2" rx="1" style="fill:var(--qp-accent)"/>
<text x="20" y="180" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">Write ask-first rules for the</text>
<text x="20" y="202" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">actions that matter</text>
<text x="20" y="224" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">replying to email, sending a Slack</text>
<text x="20" y="246" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">message to an outside customer,</text>
<text x="20" y="268" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">deploying to production and using</text>
<text x="20" y="290" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">an internal system</text>
<line x1="20" y1="304" x2="280" y2="304" style="stroke:var(--qp-rule);stroke-width:1"/>
<text x="20" y="332" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">Review the evidence, not the</text>
<text x="20" y="354" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">code</text>
<text x="20" y="376" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">sample a few of the merged</text>
<text x="20" y="398" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">changes every day</text>
<line x1="20" y1="412" x2="280" y2="412" style="stroke:var(--qp-rule);stroke-width:1"/>
<text x="20" y="440" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">Collect findings before fixing</text>
<text x="20" y="462" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">them</text>
<text x="20" y="484" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">fixes the cause once</text>
<line x1="20" y1="498" x2="280" y2="498" style="stroke:var(--qp-rule);stroke-width:1"/>
<text x="20" y="526" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">Loosen a rule after the agent</text>
<text x="20" y="548" text-anchor="start" style="fill:var(--qp-ink);font-size:16px;font-weight:600">has earned it</text>
<text x="20" y="570" text-anchor="start" style="fill:var(--qp-ink2);font-size:15px">it no longer needs to ask</text>
</svg>
</figure>

## Why it works

Human review is the hardest part of the setup to scale, because at the rate agents land changes no one can read them all. A quality supervisor in a factory faces the same problem, so the supervisor samples the output each day and looks hard at what comes up. An ask-first rule removes the other reason to watch, since the risky actions now wait for you. One speaker set a personal rule that the bot must ask before replying to any email, which gives the fine-grained control that companies want over what a bot can and cannot do.

## The method

1. **Write ask-first rules for the actions that matter.** The actions speakers gated were replying to email, sending a Slack message to an outside customer, deploying to production and using an internal system. You can be as strict as you like, down to asking before making a new folder, and you can name the things the agent may do freely, such as creating slides.
2. **Make each approval quick to give.** Offer a clear choice per item, such as the approve and hold buttons that appeared on screen in one demo. One speaker reviewed and approved bot work from a phone, so a pending yes did not tie them to a laptop.
3. **Review the evidence, not the code.** One engineer mostly reviews the videos and screenshots her agents record ([reply](https://x.com/poteto/status/2107529532144234937)). An artifact shows that the work is correct and matches what she meant faster than reading the whole pull request. One speaker's support bot writes a trace of every run, dry runs included, listing how long it took and which files it looked at. Those traces show where an answer went wrong, and a self-improvement bot reads them to improve the system. Then sample a few of the merged changes every day.
4. **Have the agent hand off when unsure.** One speaker's support bot follows written rules with high, medium and low confidence levels. It replies only when it is confident, and it hands low-confidence, missing or ambiguous cases to a person.
5. **Collect findings before fixing them.** The same engineer has an agent look for bad patterns and append each one to a document rather than fix it ([live Q&A](https://www.youtube.com/watch?v=MN9dGgmLyso&t=2863s)). Every couple of days she reads the document, sees that several entries are the same problem and fixes the cause once.
6. **Loosen a rule after the agent has earned it.** When the agent asks about something you always approve, tell it that it no longer needs to ask, which builds trust one rule at a time.

### Ask-first rules to copy

> Ask me before you send any email or message to someone outside the team, before you deploy to production, and before you use an internal system. You can create drafts, documents and slides without asking. If you are not confident in an answer, hand it to me instead of guessing. For each run, write a short note of what you checked and what you decided.

## Signals and failure points

| What you notice | Why it happens | What to try |
|---|---|---|
| You still read every chat as it runs | No ask-first rules are set | Write rules for the risky actions and stop watching the rest |
| The agent asks for approval on nearly everything | The rules are too strict for what it has shown | Tell it which approvals it can skip from now on |
| A wrong answer reached a customer | The agent may have guessed rather than handed off | Add the confidence hand-off |

Your attention now goes to the few actions that need a yes and to evidence you can check in minutes, while the rest runs.

## Open questions

Which actions belong on the ask-first list for a coding fleet, beyond production deploys and outside messages? The sources give examples, not a rule.

How many changes make a useful daily sample? No source gives a number.

What should the agent do with a request that waits a long time for approval? No source says.

## Related pages

- [[wiki/Working with Agents/Let an agent check its own work|Let an agent check its own work]] explains the proof and the verifier agents that make evidence worth reviewing.
- [[wiki/Working with Agents/Trust agents more over time|Trust agents more over time]] covers the steps from watching every chat to merging overnight.
- [[wiki/Working with Agents/Turn a repeated correction into a permanent fix|Turn a repeated correction into a permanent fix]] describes what to change once a sample shows the same mistake twice.
- [[wiki/Working with Agents/Give an agent a task without micromanaging it|Give an agent a task without micromanaging it]] is about the brief you write at the start.

## Sources

- [Matt](https://www.youtube.com/watch?v=MN9dGgmLyso) with [Lauren](https://www.youtube.com/watch?v=MN9dGgmLyso), live Q&A (2026-10-02, transcript). Sampling like a factory supervisor, the findings document read every couple of days. Paraphrased.
- [Lauren](https://x.com/poteto/status/2107529532144234937), X reply (2026-10-06). Videos and screenshots as what she mainly reviews. Paraphrased.
- [Lauren](https://x.com/poteto/status/2109436202554372476), X post on verification (2026-10-11). An artifact shows the work is correct and matches intent, and is easier to review than the whole pull request. Paraphrased.
- [Lauren](https://x.com/poteto/status/2111133080526495985), X post on trusting agents' work (2026-10-16). Human review as the hardest part to scale. Paraphrased.
- Grok Bot Galaxy event, days 1 to 3 (2026-09-15 to 2026-09-17, community named transcripts and visual notes). Speakers other than Lauren, with unreliable speaker labels. The ask-before-email rule, strict and free rules, dropping an approval through memory, approving from a phone, gating production deploys and internal systems, support traces and the self-improvement bot, the confidence hand-off, and the approve and hold buttons (on screen only). Paraphrased.
