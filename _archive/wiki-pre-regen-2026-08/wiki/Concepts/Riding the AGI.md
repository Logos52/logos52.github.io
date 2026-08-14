---
title: "Riding the AGI"
type: concept
status: developing
created: 2026-07-21
updated: 2026-07-26
source-count: 2
tags:
  - llm
  - agents
  - agentic-engineering
  - economics
  - leverage
  - open-source
  - naval
---

# Riding the AGI

Advantage in AI now decays in weeks instead of years, so the move stops being "defend a moat" and becomes "live in the future the technology is heading toward and ride it there." The operators here rest that on a second claim — every layer of the stack is being commoditized except the work of building the models themselves — which is the part of the page a later panel contests and the part to hold most loosely. This Naval podcast roundtable (nav.al/future, with Garry Tan of Y Combinator, Daniel Francis of Abel, and Farbood Nivi of A-LIST) is a field report from operators running that bet at the edge. Like [[wiki/Concepts/The AI Industrial Revolution|The AI Industrial Revolution]] before it, it strengthens the existing AI cluster more than it starts a new one: several threads below land on a page that already owns them, and this page keeps what is new to this episode.

## Core takeaways

- **Hardware and software are both commoditized; AI research is the one layer that isn't.** Hardware is owned by China at scale; software collapsed once an agent can one-shot any spec; the scarce, high-margin layer is now building the models, and unlike software that layer was never democratized.
- **Open source rarely surrenders a lead it takes.** Once an open project pulls ahead, an ecosystem accretes around it (the Linux pattern), and a closed lab can't justify spending its finite runway to re-pass something free.
- **The roundtable reads China's open-source flood as deliberate state strategy.** A commoditized software layer is what keeps Chinese hardware competitive, so funding open labs to stay "number two or number three" and publish anyway would be rational statecraft rather than charity — offered as a theory, with no evidence of the funding shown.
- **Advantage now decays in time.** You can hold the smartest model and have nothing to do with it two to four weeks later, once everyone else has one too — a game-theory variable prior eras never faced.
- **Live in the future, then work backwards.** Spending ~$100k/year on tokens today buys the working conditions of a normal 2028 user; the way to see where it goes is to run ahead of the curve, not argue about it.
- **Capability emerges by the order of magnitude.** Roughly 90,000x more inference is projected over 24–36 months (about five orders of magnitude), and each order historically unlocks new capabilities, not just more of the same.
- **The near-term unlock is context, not superintelligence.** A 1M-token window (~three Harry Potter books) against the seven-plus-or-minus-three items a human holds in mind lets an operator keep total awareness of a whole system at once — available now, no ASI required.
- **Pay for intelligence wherever errors compound.** In the speaker's illustration, looping a model 100 times collapses a 90%-reliable one while a 99.9% one drops only to 80–90%; a 100x lower error rate is decisive on matters of judgment, and cost only wins on cheap, repetitive tasks.
- **General models beat specialized ones.** The bitter lesson makes vertical AI SaaS fragile: a frontier model with tool use tends to out-perform a system trained narrowly on one domain, so the durable startup question is whether the labs stay open, not whether you can out-specialize them.
- **You are displaced only if you refuse the tools, and the one input a model can't supply is desire.** The people using AI have more work, not less; if capability tops out at expert level without ASI, humans stay the motivated element and become handlers of the fleet.

## The commoditization stack

The episode's sharpest frame is a three-layer map of where value is being squeezed out. Hardware is a commodity China owns: anything manufacturable in the US is manufacturable in China more cheaply, with the whole component ecosystem already sitting there — Shenzhen holds some 3,000 manufacturers of one tiny cable — and a state that subsidizes production up front to capture the scale economies then controls the supply chain across critical industries. Software, long the layer with the network effects and lock-in that made it worth funding, got commoditized the moment an agent could one-shot a specification — "software was eating the world, and AI ate software." What remains uncommoditized, on this roundtable's reading, is the building of the models themselves.

The catch is that this last layer never had software's democratization. John Carmack and John Romero could build Doom in a small team and compete with the giants; nobody builds a frontier model in a garage, because it takes huge GPU clusters, proprietary data sets, and a scarce pool of researchers — then [[wiki/Concepts/Regulatory Capture via Doom-Marketing|regulatory capture]] narrows the field further. The value and the choke points are collecting into a layer that a handful of companies control. That extends [[wiki/Systems/AI & Agentic Systems/Software 3.0|Software 3.0]]'s natural language as a programming medium into its economic consequence: once specifying the thing is enough to get it built, the layer stops being scarce. It is also the claim here with the shortest shelf life, and the one [[wiki/Concepts/The Margin Moves to the Serving Layer|The Margin Moves to the Serving Layer]] contests in full.

## Open source keeps the lead it takes

On the roundtable's read, two kings remain where five stood two years ago, and the survivors are the two labs earning revenue directly off their models rather than cross-subsidizing from another business, with active user bases feeding the reinforcement-learning trajectories that keep them pulling away. That consolidation makes the open-source question load-bearing: the strongest open models (GLM, MiniMax) already run 5–10x cheaper and, given a good harness, close much of the gap. Once open source takes a lead, it tends to keep it, because the ecosystem that accretes around the leader is the moat and a closed competitor can't rationalize burning finite cash to re-pass something free.

The geopolitical read underneath has the longest reach, and it arrives as a theory the speaker offers without evidence: the flood of capable open models comes disproportionately from China, and he takes it for strategy rather than accident. If software is commoditized, hardware is where margins live, and China owns hardware — so a public-private partnership that funds labs to stay "number two or number three" and publish anyway keeps the whole software layer cheap and Chinese hardware competitive. A secondary pull runs the same direction: power users reach for open or jailbroken models to shed the refusal-and-tone-policing tax that frontier models charge, wanting the tool "maxed out" with no excuse for being worse than it could be.

## Advantage now decays in time

The prior world let you operationalize an edge against everyone else with some durability; that window is contracting toward zero. Holding the smartest model buys little when a comparable one is open-source a few months later, and the interval in which any advantage is exclusive is itself collapsing. This is a distinct axis from "moats erode" — the claim is about the *duration* of exclusivity, a game-theoretic variable that reframes how [[wiki/Decision Making/Positional Decisions and Expected Value|positional]] and [[wiki/Concepts/The Age Of Nonlinear Returns|nonlinear-return]] bets should be priced when the compounding surface is short-lived. The response the operators converge on is not to defend the edge but to keep moving to the next one.

## Live in the future and ride the AGI

The positioning method is a Paul Buchheit line: build the future by living in it and working backwards. In practice that means paying for compute far past what looks reasonable — around $100k/year in tokens reproduces the working conditions a normal user will have in 2028 — because token cost falls while inference climbs, and every order of magnitude tends to surface new capabilities rather than a faster version of the old ones. The climb the panel projects is roughly 90,000x over 24–36 months, a figure volunteered without a source and hedged on the spot by "a couple orders of magnitude," so the shape of the argument is worth more than the number. The felt inflection was recent and specific (Claude Code in December 2025 is named as the tipping point that forced a re-evaluation), which is the pattern: dismiss the tool at capability N, and the jump to N+1 makes the earlier verdict wrong.

The concrete near-term lever is context, not a future superintelligence. A 1M-token window holds about three Harry Potter books; on the speaker's figure a human keeps seven things in mind, plus or minus three. An agent can therefore keep a whole company's systems, meetings, and per-person signal in view at once and answer "which 20% should I cut" or "what is actually happening on every team" — total information awareness an unaided operator can't assemble. The leverage is available today, which is why the frame is riding the wave rather than waiting for ASI to arrive. This is the machine side of the [[wiki/Concepts/The Age Of Nonlinear Returns|nonlinear-returns]] lever and the practical payoff the [[wiki/Concepts/The AI Productivity Curve|productivity curve]] is waiting on.

## Where to spend intelligence

The rule for model choice follows from how errors behave under iteration. Intelligence looks cheap to economize on until you run a model in a recursive loop: at 100 steps the 90%-reliable model collapses in the speaker's own illustration, while the 99.9% one drops only to 80–90%, because errors compound rather than average out. So a 100x lower error rate is worth paying for on any high-leverage judgment call, and cost-sensitivity is reserved for cheap, highly repetitive tasks where a slip is contained. This is the compounding-error arithmetic of [[wiki/Concepts/Accuracy Before Speed|Accuracy Before Speed]] applied to buying the agent instead of doing the work, and it supplies the mechanism under [[wiki/Concepts/The AI Industrial Revolution|The AI Industrial Revolution]]'s "always want the smartest model."

## Startups, and what stays human

The bitter lesson runs through the startup question: general models beat specialized ones, so a company trained narrowly on one vertical (legal, say) is exposed to a frontier model with tool use doing the same job better without entering the vertical on purpose. Small, leveraged teams reaching $100M in revenue is real, but selling commoditizing software is a shrinking base, and the deeper risk is structural — if the harness war of 2027 collapses to a single dominant provider, or the labs nationalize, startups face a true monopolist at the top of the chain. Two competing platforms force each other to behave; one does not. Routes to [[wiki/Concepts/The AI Industrial Revolution|The AI Industrial Revolution]]'s "explosion of founders" read as the optimistic half of the same tension.

What stays human closes the loop back to riding the wave. If capability reaches expert level but not ASI, humans remain the motivated element in the system — handlers guiding a fleet, supplying the taste, judgment, and accountability the models don't own ([[wiki/Concepts/Higher-Order Generativity vs Higher-Order Judgment|generativity vs judgment]], [[wiki/Concepts/Human vs AI Capability Lens|the capability lens]]) and, above all, the desire that nothing downstream can generate. Displacement then concentrates exactly where [[wiki/Systems/AI & Agentic Systems/Automation and the Job Iceberg|the job-iceberg record]] predicts: on the people who refuse the tools, not on those who pick them up. The AI-writing argument is a special case — writing and speaking are the output of thinking, so outsourcing them wholesale atrophies the thinking, and prose a human never compressed wastes the reader's time (the degenerate end state is your agent writing to my agent while neither of us is in the loop). The open counter the operators press: a large enough personal corpus run through an eval harness can make a "skill file" indistinguishable, at which point the objection is about quality, not authorship. The panel's harder claim — good writing is novelty, and a machine guessing the next token from a regression cannot produce it — grades badly against [[wiki/Concepts/Higher-Order Generativity vs Higher-Order Judgment|the generativity-vs-judgment split]], where generativity is the capability that has fallen fastest and the durable human edge is the accountable call; the caution that survives is [[wiki/Domains/AI & Tooling/The Right vs Wrong Way to Work With AI|the offloading line]] for learning, where the artifact arrives and the encoding never happens. [[wiki/Concepts/A Motorcycle for the Mind|A Motorcycle for the Mind]] already owns the tutor-that-meets-you-at-your-level and desire-as-the-human-input threads.

## The case against

This is three founders and Naval talking their own book, in a room selected for people for whom AI is already working: A-LIST spins up thousands of agents on demand and runs a personal agent for every user in its app, YC sells the founder path, and every claim about "ride it or be left behind" flatters the speakers' position. The forecasts are the softest part — 90,000x in 24–36 months is offered with "we might be off by a couple orders of magnitude," and the timelines rot fastest. The geopolitics is contestable and partisan (no one beating China on hardware "in the next decade," Taiwan "slowly reunit[ing] with China" across 10–20 years) and is not load-bearing for the durable ideas here, which is why the COVID, Taiwan, and California threads are left in the transcript rather than folded. The strongest internal counter is the one the panel keeps circling: the same commoditization and concentration they describe drives toward an AI oligopoly, where "just ride it" is a bet on a window staying open, not a stable position.

The claim the rest of the map rests on is the one with a live counter. Three weeks later, on All-In episode 282, Chamath Palihapitiya argued the reverse about the same layer: publishing a benchmark score turns an open-ended search into a target, and distillation — firing questions at a model and training on its answers, tens of millions of times over, until trillions of question-and-answer pairs have left the building — lets a follower reach that target within weeks. That is why he reads the exclusive-to-commodity cycle, which historically ran 5–10 years, as compressing into a few here, and why he puts the durable money in the application layer above the model and in the cloud and the chips below it rather than in the foundation model. He is talking his book as hard as this panel is: he runs 8090, which sells enterprises the implementation work for bringing these models in-house, and the cohort he names as wanting open weights to survive — the clouds and the chip vendors, who capture margin on volume served — is the one his own business sits inside. David Sacks argued the opposite from the next seat on the same episode — China has not caught up, the American labs are six months ahead and growing exponentially — so that episode is split rather than unanimous. It is still the later one, newest wins, and [[wiki/Concepts/The Margin Moves to the Serving Layer|The Margin Moves to the Serving Layer]] carries the argument in full: treat the model layer as contested. What survives whichever layer turns out to be scarce is everything downstream of that question — advantage decaying in weeks, the compounding-error math, the context lever — and that is the part of this page to run on. Weight the rest as operating intelligence from inside the bubble, against how much each claim already matches what the vault has run.

## Related

- [[wiki/Concepts/The AI Industrial Revolution|The AI Industrial Revolution]] — the sibling Naval field report (nav.al/industrial); factory-not-artifact, verifier role, smartest-model logic.
- [[wiki/Systems/AI & Agentic Systems/Software 3.0|Software 3.0]] — natural language as a programming medium, here extended to its economic consequence: once specifying it is enough, the layer stops being scarce.
- [[wiki/Concepts/Regulatory Capture via Doom-Marketing|Regulatory Capture via Doom-Marketing]] — how the uncommoditized model layer concentrates into a few gatekeepers.
- [[wiki/Concepts/The Margin Moves to the Serving Layer|The Margin Moves to the Serving Layer]] — the counter-position on the same layer: parity within weeks of a published benchmark, and the value moving up into applications and down into cloud and chips.
- [[wiki/Concepts/The Age Of Nonlinear Returns|The Age Of Nonlinear Returns]] — the compounding-surface lever, here shortened by time-contracted advantage.
- [[wiki/Concepts/The AI Productivity Curve|The AI Productivity Curve]] — whether the compute build-out shows up in the productivity numbers.
- [[wiki/Concepts/Accuracy Before Speed|Accuracy Before Speed]] — the compounding-error arithmetic behind "pay for intelligence."
- [[wiki/Systems/AI & Agentic Systems/Automation and the Job Iceberg|Automation and the Job Iceberg]] — the displacement record: transformed roles, and the risk on those who refuse the tools.
- [[wiki/Concepts/Higher-Order Generativity vs Higher-Order Judgment|Higher-Order Generativity vs Higher-Order Judgment]] — the split that grades the AI-writing argument: generativity fell fastest, judgment is what held.
- [[wiki/Concepts/Human vs AI Capability Lens|Human vs AI Capability Lens]] — what stays human, graded on two axes.
- [[wiki/Concepts/A Motorcycle for the Mind|A Motorcycle for the Mind]] — AI as leverage that still needs a rider who supplies desire.
- [[wiki/Domains/AI & Tooling/The Right vs Wrong Way to Work With AI|The Right vs Wrong Way to Work With AI]] — offloading at the wrong level: the artifact arrives, the encoding never happens.

## Sources

- Naval Ravikant, Nivi, with Garry Tan, Daniel Francis, and Farbood Nivi, "Riding AGI, AI Anxiety, Who Funded COVID, Defending Taiwan, and California Empire," [nav.al/future](http://nav.al/future) (2026-07-03). Local transcript in `raw/processed`.
- All-In Podcast, episode 282, "The Fight Over Open Source AI, Anthropic's $1.5B Payout, NYC Socialists: Evictions = Violence?" [youtube.com/watch?v=wcV0SRPFK9s](https://www.youtube.com/watch?v=wcV0SRPFK9s) (2026-07-25). Local transcript in `raw/processed`.

## Open Questions

- If advantage decays in weeks, which of my own compounding surfaces are still long-lived enough to be worth defending, and which should I treat as disposable and ride?
- Where is verification actually cheap enough in my work to run the cheaper model, and where does the compounding-error math force the frontier one?
- "Live in the future" costs real money in tokens; what is the smallest spend that actually puts me a year ahead rather than just burning budget?
- If the skill-file-plus-eval-harness bet is right, what would make my own writing indistinguishable — and do I want it to be, given writing is how the thinking happens?
