---
title: "Regulatory Capture via Doom-Marketing"
type: concept
status: developing
created: 2026-06-19
updated: 2026-09-27
method: outline-2026-09-27
prose-model: fable
source-count: 3
written-by: opus
description: "How a company's warning that its own AI is dangerous can win it control over who may build or sell AI, with the 2026 Fable case and later proposals."
tags:
  - economics
  - ai-policy
  - regulatory-capture
  - incentives
  - red-teaming
---

# Regulatory Capture via Doom-Marketing

Regulatory capture via doom-marketing is when a company warns loudly that its own technology is dangerous and then asks the government to decide who may build or sell it. The rules that follow tend to protect the few firms already in front and keep cheaper competitors out. Knowing the pattern lets a reader judge an AI safety warning by who gains from the rule it asks for.

- Warning of danger can win a company a say in the rules.
- An approval process favours the firms that already pass it.
- Check whether the company used the fixes it controls itself.
- Ask who gains from the rule, and whether its claim can be tested.
- The fear can also hand control of access to big cloud firms.
- Competition protects buyers and makes capture harder.

## How it works

The pattern runs in steps. A company describes its product as close to a weapon and presents itself as the one careful builder. Officials, now alarmed, set up a review before release, and the company offers to help design it. The review costs a small rival more than it costs the leader, and open or foreign rivals can be banned outright on the same grounds.

```
"our model is a weapon"
        |
officials alarmed --> pre-release approval
        |
approval favours incumbents --> rivals slowed or banned
        |
prices stay high, buyers have fewer choices
```

- Test it by whether the company applies the fixes it controls.
- Checking customer identity would stop most copying of a model.
- That check slows revenue, and it was not done.
- The same company pressed for bans on competing open models.

## The 2026 case

In April 2026 Anthropic told Washington it had built a model, Mythos, strong enough at hacking to act as a cyber weapon. It held the model back for testing and widened a preview to about 50 companies, one of which officials believed had links to China. On 9 June it released a guarded version, Fable 5. Amazon, a large investor and cloud partner, found a way around the guards and reported it to the White House.

- The company called the flaw narrow and did not pull the model.
- The government sent an export-control letter.
- Anthropic then shut the model off for everyone.
- Its warnings in April made the flaw look like a weapon release.
- Former government AI officials had gone to work at Anthropic.
- Anthropic describes competition between labs as a dangerous race.

## Who ends up holding the gate

The fear did not end with the labs writing the rules. It gave the large cloud companies a case to be the gatekeepers, with identity checks on every user, logs of every prompt, and approved models only. Smaller clouds cannot build that at the same scale, so the result could be a few firms controlling access to AI. The labs that raised the alarm would be gated as well.

- Using a model could require ID, like buying fertilizer.
- Small cloud providers would lose the business.
- This capture came through public warnings instead of a quiet bill.

## Other proposals

By September 2026 leaders at a major tech conference split on the danger itself. Jensen Huang of Nvidia called extinction predictions made up and said the actual incidents came from the leading labs. Elon Musk said the danger is real. All three leaders who proposed an answer put testing outside any one company's control.

- Musk: rival labs test each other's models before release, no state regime.
- Satya Nadella: outside testers with broad access and no private deals.
- Huang: several independent evaluators, like financial auditors.
- Industry self-certification, like film and game ratings, is another option.

## Related pages

- [[wiki/Red Team/Epistemic Exceptionalism|Epistemic Exceptionalism]]: supplies the "only we can be trusted" premise that doom-marketing turns into gatekeeping.
- [[wiki/Concepts/Prohibition After Diffusion|Prohibition After Diffusion]]: what a ban can still reach once the weights have already spread, and what enforcement meets when it arrives.
- [[wiki/Concepts/Riding the AGI|Riding the AGI]]: the commoditization counterforce in fuller form. Every layer of the stack goes generic, and an open project that takes a lead rarely gives it back.
- [[wiki/Concepts/The AI Productivity Curve|The AI Productivity Curve]]: the economic-side companion, written under the same rule of not using the convenient dataset.
- [[wiki/Red Team/Red Teaming|Red Teaming]]: the who-benefits and falsifiability checks are red-team moves.

## Sources

- All-In Podcast, *World's First Trillionaire, Anthropic Fable Banned, The New Oligarchs, Iran Peace Deal* (YouTube, 2026-06-20). The argument originates with the panel's read of the Mythos/Fable episode. Local transcript in `raw/processed`.
- Referenced reporting per the episode's show notes: Washington Post, WSJ, Semafor, Wired on the Mythos/Fable timeline.
- All-In Podcast, *The Fight Over Open Source AI, Anthropic's $1.5B Payout, NYC Socialists: Evictions = Violence?* (YouTube, 2026-07-25). The unpursued-KYC argument and the July 2026 open-weights ban fight. Reporting cited on the episode is Axios on the ban under consideration and Wired on the split inside the administration. Local transcript in `raw/processed`.
- All-In Podcast, All-In Summit interviews with Jensen Huang (2026-09-14), Gwynne Shotwell and Elon Musk (2026-09-15), Satya Nadella (2026-09-15), and Vice President JD Vance (2026-09-15). The September 2026 case and the mutual-testing proposal. First-party captions. Local copy: `/Users/n1/handoff-2026-09-14-to-16.md`; originating packets under `/workspace/recap/` on the collecting machine.
