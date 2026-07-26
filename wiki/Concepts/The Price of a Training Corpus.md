---
title: "The Price of a Training Corpus"
type: concept
status: seed
created: 2026-07-26
updated: 2026-07-26
source-count: 3
tags:
  - ai-policy
  - copyright
  - training-data
  - economics
  - incentives
  - red-teaming
---

# The Price of a Training Corpus

Copyright liability for AI training is being priced by settlement rather than decided by doctrine, so the constraint that binds a lab is which positions it can hold at once without arming its own plaintiffs. All-In episode 282 (2026-07-25) works this through the $1.5B Anthropic piracy settlement, and the panel is not neutral about it: one speaker is an administration official on AI policy arguing his position from inside a live White House deliberation, the room is venture capitalists commenting on their own asset class, and it says out loud, twice, that "everyone's talking their books." The settlement is the first time any of this carries a number.

## Core takeaways

- **The payout priced acquisition and left training undecided.** The provable claim attached to downloading 7 million books from pirated sites without buying a single legitimate copy; no court had to rule on what the model did with them afterward.
- **$3,000 a book is the first observed price for an unlicensed training copy.** A lab sizing its exposure multiplies that by the works it cannot show a receipt for. The claim rate is still climbing and the total is fixed by the approved settlement; the per-book number is the one that travels.
- **Doctrine lands only where nobody can pay to stop it.** The largest matter so far ended in a negotiated number, so case law governs whoever must litigate and the going settlement rate governs whoever can afford to foreclose the ruling.
- **Weights are property; outputs are contract.** Lifting the parameter file would be theft, and one panelist says nobody has alleged it — though the same speaker elsewhere reports the labs telling government that Chinese companies can just steal their weights. Learning from outputs runs into terms of service, which makes it the provider's enforcement problem.
- **A policy position is discoverable.** A lab needs "training on the world's output is fair use" in court and "training on our output is theft" in Washington, and the second is an admission the first set of plaintiffs can quote.
- **Pick the cause of action that does not boomerang.** Bulk fake accounts, proxies and lying about who you are at signup can be framed as a deceptive business practice, with the government asked to help stop it, without ever asserting a property right in model outputs.
- **Market substitution is the test that survives the hypocrisy charge.** Training so a model can discuss a book displaces nobody; training on a professional database to sell a competing professional database is direct displacement.
- **Collective withholding is a fragmented rightsholder's only leverage, and one crawler destroys it.** A single Google bot performs both the search crawl and the AI crawl, so opting out of training means opting out of traffic.
- **Recurring supply turns a liability into a subscription.** A model that stops receiving the next book and the next wire story goes stale, which makes the forward pipeline the asset and the back settlement a sunk cost.

## What the $1.5B actually bought

The seam between acquisition and training is where the money attached. On the panel's account the corpus was pirated from LibGen and "they didn't even pay for one copy of them," so the claim that stuck was making an unauthorized copy — a decided offense — and no court had to rule on what the model learned from what it copied. The counterfactual offered on air is that buying one legitimate copy of each work removes the piracy hook and leaves only the undecided question. Treat that as a non-lawyer's reading, and one he hedges himself in the same breath: fair use is "still being litigated in the courts" and "has not been resolved yet."

The numbers, as the episode states them: $1.5B in total; roughly 7 million books downloaded from pirated websites to train Claude; $3,000 per book across 500,000 covered books. The per-book figure is the one that travels. It converts an unlicensed training copy from a legal abstraction into a line item, and it prices the corpus of any model retroactively.

## Settling sets the price and forecloses the ruling

This was the "first major AI training lawsuit to settle. There are many more in the pipeline," with a panel estimate of 150 major cases including the New York Times and the music industry — a figure nobody sourced on air. The largest matter therefore produced a price and no consolidating rule.

Doctrine is not absent so much as contested and unconsolidated. The same episode says courts "had ruled previously that AI on copyrighted books is legal under fair use," has another speaker call the same question unresolved two minutes later, and names a case it treats as "a final judgment on AI training copyright." What is missing is a rule that binds the next defendant, and the reason is structural: a defendant who can afford the number settles, and a settlement forecloses the ruling that would have bound everyone. The matters that run to judgment are the ones nobody could buy out. So case law governs a small builder, while the going settlement rate plus the counterparty's terms of service govern a frontier lab. That leaves the panel's own summary standing — "IP law does not actually have the nuance yet. So we're going to as a society have to make a decision here on what is fair" — with the decision route running through negotiated settlements, lobbying, and eventually legislation.

## Weights are property; outputs are contract

What can be priced depends on what can be owned, and the line runs between the parameter file and what the model emits. Weights are "the file of numbers... the numerical parameters in the software code," and lifting them out of a lab would be theft. One panelist adds that "that's not what we're talking about here because no one's accused that" — which the same speaker undercuts earlier in the episode, reporting Anthropic and OpenAI "running around saying, listen, we can't continue to invest billions of dollars if Chinese companies can just steal our weights." Learning from outputs has industrial pedigree by contrast: one carmaker studies how the other's car operates and uses it to design a better car, and early Google "would submit millions of search queries to Yahoo and Microsoft search engines to see what the result sets were," compared them, and called it benchmarking.

Outputs arrive under a contract, which is why the live question on distillation is terms-of-service enforcement by the provider rather than copyright. The panel's position is that the providers should "do a better job enforcing their terms of service" and stop the extraction at the source. The New York Times case against OpenAI is pleaded on the same seam — going onto the site in violation of its terms of service, scraping, and training on the result. Nothing on that side of the line has a number attached to it yet, which is the practical difference: unauthorized copying now has an observed clearing price and contract breach does not.

## A policy position is litigation exposure

The bind is that a frontier lab needs two incompatible claims at once. In court it needs training on the world's copyrighted output to be fair use. In Washington it needs training on its own output to be theft. "They believe it is fair use to train their models and derive their own weights... However, they say that the one type of content that you should never be able to train on is their output" — "IP for we but not for thee." The reason the strong claim never appears in writing, per the same speaker, is that putting it in writing would poison the fair-use lawsuits the lab is already defending. The escalation he then sketches is the actual risk: a content lobby that sees a lab tell the government training without consent is IP theft has been handed a confession, and the ask stops being a tithe and becomes the whole revenue line.

A diagnostic comes attached to that, and it is worth separating from its conclusion. A February blog post is said to have coined the phrase "industrial scale distillation attack" — "No one used the terms distillation and attack together until Anthropic wrote that blog post" — while the phrase "IP theft" is claimed absent from the same post. The check takes one search: open the document and look for the phrase its author is said to have used. The inference from absence is where it breaks, since a post that never says "IP theft" is equally consistent with a post about detection engineering.

The reframe offered next is the reusable part. A lab could describe bulk fake-account creation, proxy use and lying about who you are at signup as a deceptive business practice, ask for the government's help stopping it, and say nothing about IP theft. That theory keeps the enforcement and drops the liability, because it never asserts a property right in model outputs and so never hands content plaintiffs an admission. Choose the cause of action whose theory does not boomerang onto your own conduct.

## Market substitution is the test that survives

Displacement is the one test that survives the hypocrisy charge, because it turns on what the training does to the market for a work rather than on who is asserting it. Training so a model can discuss a book does not stop anyone buying the book; training on a professional database in order to sell a competing professional database does. The case the episode names as "Thompson Reuters versus Ross" is described on air as "a final judgment on AI training copyright," over claims that a competitor could train on the outputs of Westlaw, and the reason it lands differently is that "when you're in the same business as me that has a special place in copyright law."

Running against that is diffusion. Reviews, metadata and third-party analysis sit on the open web, so a model can end up able to discuss a work it never ingested, with Cliff's Notes as the pre-AI proof that you cannot contain what a good book generates around itself. The floor goes unchallenged in the room: "I cannot lift text out of your book, reprint it, and claim it as my own. That is a violation of copyright." The hypothetical is doing lighter work than it appears to, though — it wins an argument about a model that learned from reviews, while the case on the table is a model that ingested roughly 7 million pirated books.

## Whoever can force a settlement sets the price

If price is set by settlement, then whoever can force settlements sets the price, and rightsholder strategy has a known shape: litigate until the counterparty settles, treat the settlement as an admission that the use was licensed, and carry that to the next counterparty and the next. Music is the worked example — "they will fight tooth and nail and keep you in the courts until you submit." What defeats the flywheel is a fragmented rightsholder base that settles cheap and early, which is where the panel puts book authors, newspapers and magazines, calling them "very meek."

Collective withholding is the only leverage a fragmented base has, and crawler bundling destroys it. A replayed clip has one host urging content providers to organize and tell the AI firms as a group "either give us these terms or don't index us," answered on air with "You're going to get steamrolled." The current version of the trap is mechanical: one Google bot performs both the search crawl and the AI crawl, so opting out of training means opting out of search traffic, which is why the industry demand is to split the two bots apart. The newspaper–Google indexing standoff is the precedent for how that ends. On the panel's account it collapsed into a negotiated paywall-exclusion arrangement, because the publishers wanted Google's user base and never held a united front.

## The forward pipeline is the asset

A settled corpus is a sunk cost, and the price it set only travels because the buying never stops. A model that stops receiving the next book, the next New York Times story, the next Reuters story goes stale, so the durable arrangement is a licence on the forward pipeline rather than a settlement over the back catalogue. Take the mechanism and leave the number: the proposed pool of 10% of model-builder revenue has no derivation, no defined base and no allocation rule, and is countered in the room with the observation that the rightsholders "are going to go for 100%."

## No clean hands, so enforcement is selective

The provenance is circular and everyone in the chain is downstream of someone. One lab trained on publishers and settled for $1.5B; another is being sued by the New York Times over scraped content; the Chinese labs trained on American model output. The panel's own hedge is the honest part: "I don't want to call it stealing because it's not clear who actually owns the copyright in the first place." With ownership of model output unsettled and no participant holding clean hands, an enforcement regime built on IP is necessarily selective, and the question it actually answers is who gets protected rather than who infringed. When price is set by settlement, the lever that moves outcomes is positional: a company's exposure is the set of claims it has made in public about everyone else, and the corpus it cannot show receipts for is only the part that already has a number on it.

## Boundaries

All of this is US copyright and stops there. A jurisdiction that answers the training question by statute rather than through litigation is outside the frame, and none of the positional reasoning applies where a legislature has already ruled. It says nothing about personality and voice rights, which run on their own track. And it does not reach a lab whose acquisition is clean: with no provable unauthorized copy there is no line item to price, and the undecided fair-use question is the only one left standing. For anyone whose corpus is licensed or open, the binding constraint is the licence, not the settlement rate.

## Checkable expectations

- In the matters now pending, a rightsholder whose product is the licensed corpus itself — music catalogues, legal research databases — either wins on the merits or settles above the $3,000-a-book rate, while claims over commentary-level use of general trade books settle at or below it. If the New York Times matter resolves below the book rate, market substitution is not carrying the weight this page puts on it.
- Watch whether any frontier lab puts "training without consent is IP theft" into a filed brief or a signed public document rather than into a meeting. If one does and its fair-use defense survives anyway, the discoverability argument here was overpriced.
- Watch whether Google splits the search crawl from the AI crawl. If it does without a collective demand forcing it, collective withholding was never the leverage this page says it is.
- Watch the next AI training settlement's per-work number. A figure within the same order as $3,000 supports treating this as a rate; a figure an order away means one negotiation was mistaken for a market.

## The case against

One settlement is not a market. $3,000 a book is the clearing price of a single negotiation, between one defendant holding a piracy hook it could not defend and a class whose counsel had a fee to collect, so it prices that hook rather than a training copy. A lab with clean acquisition faces a different case and possibly no number at all, and the next settlement can land at a fraction of this one without anything about training having changed. Sizing exposure off one point is extrapolating a curve. The doctrine-lands-only-where-nobody-can-pay mechanism has the same weakness: it is assembled from two data points inside one episode, and any well-financed defendant that litigates a training case to judgment falsifies it quietly.

The load-bearing fact of the hypocrisy chapter is asserted and denied by the same speaker inside one minute, and the assertion returns ten minutes later. He says the lab "never claimed that this was IP theft by the Chinese companies" and that neither lab will "publicly admit that what China is doing is IP theft," then builds the entire hypocrisy case on the premise that they did — the argument found no purchase until Anthropic "started claiming oh this is IP theft," and "Anthropic has just told the government that training on a creator's output without their consent is IP theft." He does draw the distinction himself: the claim goes to government, and "they have not been willing to make that argument publicly." What he never does is source it, which leaves the central charge resting on an unsourced account of non-public conversations he was positioned to hear. He is an administration official on AI policy speaking from inside the live White House deliberation, on a panel of venture capitalists whose asset class benefits from fair use surviving, and he names the stake himself: if the IP-theft framing sticks then "all derivative works of Chinese models are tainted now too" and "the whole startup ecosystem is now at risk." He opens with the conclusion, calling himself no fan of the company and saying it is "potentially destroying the whole ecosystem for their own purposes of regulatory capture." He calls the books stolen and the acquisition piracy, then argues only the other side's consistency and sets the legal question aside outright: "I don't even want to get into whether you're right or not on the fair use question. Maybe you are right. I don't know... But my point is about the hypocrisy." His own co-host supplies the material for a non-hypocritical reconciliation forty lines later — the market-substitution test — without drawing it, and nobody engages it.

The diffusion hypothetical has the same problem from the other direction: it wins an easier version of the question than the case at hand, and its conclusion — that digitally processed knowledge will not end up violating copyright — is unfalsifiable on any horizon a reader could use. And the outcome the panel converges on, no bans plus one host's proposed 10% revenue pool, is the cheapest available for every business in the room, including the podcast, which is itself licensable content. The conflict is stated out loud and then argued straight past.

## Related

- [[wiki/Concepts/Regulatory Capture via Doom-Marketing|Regulatory Capture via Doom-Marketing]] — a ten-figure liability behaves like the fixed cost in that page's step 3, absorbable only by the largest incumbents; that page owns who ends up holding the gate, this page owns how the corpus gets priced.
- [[wiki/Red Team/Epistemic Exceptionalism|Epistemic Exceptionalism]] — its loop test, what a framework can output other than "trust me / my group," is the check to run on the hypocrisy case here, subject to that page's own gate: turn it outward only when the position treats all disagreement as error by definition.
- [[wiki/Concepts/Riding the AGI|Riding the AGI]] — carries proprietary data sets as a one-clause barrier to entry; the settlement price is what that clause costs.
- [[wiki/Concepts/Prohibition After Diffusion|Prohibition After Diffusion]] — the ban question from the same episode; this page supplies the liability channel by which an IP-theft framing taints derivative work downstream of a banned model.
- [[wiki/Concepts/The Margin Moves to the Serving Layer|The Margin Moves to the Serving Layer]] — where value settles once models commoditize; a licensed forward pipeline is a cost that lands on whoever is holding the model layer.
- [[wiki/Red Team/Applied Critical Thinking - Testing Frames|Applied Critical Thinking - Testing Frames]] — owns the detection drill this page needs: what language is doing emotional work, who benefits if the frame becomes the default. "Industrial scale distillation attack" is a live specimen.

## Sources

- All-In Podcast, episode 282, *The Fight Over Open Source AI, Anthropic's $1.5B Payout, NYC Socialists: Evictions = Violence?* (YouTube, 2026-07-25) — the settlement segment (48:29–1:07:12) and the distillation segment from 0:18. Panel: Jason Calacanis, Chamath Palihapitiya, David Sacks, David Friedberg. The transcript carries no speaker labels, so positions here are attributed by seat — the policy official, the co-host, the replayed clip — inferred from vocatives and cross-references and not checked against the audio. Quotations are cleaned of transcriber fillers only. The case discussed as "Thompson Reuters versus Ross" is given that way on air; neither the spelling nor the judgment has been checked against a court record. Local transcript in `raw/processed`.
- Reuters, *US judge approves Anthropic's $1.5 billion settlement in copyright lawsuit* (2026-07-20), per the episode's show notes; not independently verified here.
- Anthropic's distillation-attacks post, linked in the show notes as [anthropic.com/news/detecting-and-preventing-distillation-attacks](https://www.anthropic.com/news/detecting-and-preventing-distillation-attacks). The episode dates it only "in February" and never gives a title. Both the coined-phrase claim and the absent-phrase test above are the panel's; neither was re-run against the document for this page.

## Open Questions

- If $3,000 per work is the going rate for an unlicensed training copy, does that change anything about what I publish openly, or is a per-author claim too small to be worth the administration?
- My vault ingests transcripts, books and podcasts and republishes compressed versions of them. Where is my own line between learning from a source and displacing it, and does the market-substitution test actually govern what ships to the public wiki?
- Which of my ingestion paths run against a terms of service I have never read, and would I change any of them if enforcement arrived?
- If enforcement under this regime is selective by construction, what check do I run before repeating any "they stole it" claim about a lab — including the ones I am inclined to believe?
