---
title: "Probability Distributions Bank"
type: research
status: reference
created: 2026-08-28
updated: 2026-08-28
description: "Fact list for a cookbook page on the standard probability distributions, plus the layered model for simulating one person's text messages across a day. Raw material only. The first draft of the page was struck on its prose and deleted; the facts survive here."
tags:
  - research
  - statistics
  - probability
  - simulation
  - llm-wiki
---

# Probability Distributions Bank

Raw reference material, not a wiki-register page. Every line is one fact in the writer's own words. The page that gets written from this is closed to everything else while it is written.

## The strike that produced this bank

A first draft was written on 2026-08-28 and deleted the same day. The owner's words: "the writing is shit: the intro sentence: something happens, it leaves a number behind is the bullshit opus writing that i despise."

The struck opening, verbatim, so it is not written again:

> Something happens over and over, and each time it leaves a number behind. How many seconds a reply took. How many messages arrived before lunch. Whether anyone clicked.

What the struck opening does: a bare abstract event with no subject, then a run of three fragments with no verbs. Nothing in it is a thing the reader can see.

## The second strike, same day

A second draft was outlined by Fable, written, and rewritten twice. The owner struck it on its opening and on one sentence.

The struck opening, verbatim:

> A person counts the text messages they send, writing down one total for each day of one week, and gets 4, 0, 19, 6, 2, 31, 8. Nothing about the week explains why the totals swing so much, because the phone was the same, the people were the same, and no emergency caused the 31. The counting was done the same way every day, and the totals still came out different every time.

His words: "your intro sucks." What it does: it opens on a story, which is a part, and reaches what a distribution is only in the second paragraph and what the page gives only in the fourth. The whole never came first.

The struck sentence, verbatim, from the third paragraph of that opening:

> Drawing the year of totals as a bar chart and hunting for a curve that matches it is the tempting way to find that pattern, and it works backwards, because the shape of the pattern comes from how the number gets made.

His words: "this is too complicated." It carries three facts in one forty-word sentence. An earlier form of the same sentence, "the shape does not come from the chart; it comes from how the number gets made," he struck as "claudespeak": a denial and then an assertion on a semicolon.

His direction for the third draft: "i need it to be written in WPW format." The page and every section open on the whole, in plain sentences that carry one fact each, before any part. The figures carry over unchanged.

## The third round of strikes, 2026-08-29

Nine more openings were written in the conversation and struck, all by Fable. Every one is quoted so it is not written again.

Struck as "vague openings":

> Some numbers come out different every time you measure them. A distribution is the pattern of how often each value turns up over many repeats.

> The number of text messages a person sends in a day is different every day. The seconds a reply takes are different every time.

> A probability distribution is a bar chart. Along the bottom are the values a number can take.

> A support queue gets 12 tickets in one hour and 40 in the next. Nothing changed between the two hours.

> Pick a distribution by how the number gets made. A distribution is the list of how often each value of a number comes up over many repeats.

The owner's diagnosis, accepted: the nouns in each are categories ("some numbers", "a person", "the shape", "a number that varies"). The nouns the page is about, Poisson, the normal, the binomial, the exponential, the log-normal, are missing. Each also defines the word "distribution", which the reader already owns.

Struck as the same fault, with a subject that is an abstraction or a population:

> Match the shape to how the number was made. A count of arrivals in an hour is Poisson.

> The normal is the shape most people reach for first.

Passed on form, struck on subject ("the page is not about Poisson"):

> Poisson is the shape of a count of arrivals in a fixed stretch of time. Support tickets in an hour, typos on a page, failures in a thousand runs.

Struck as parts in the whole's seat ("Family first. but this is WHOLE content. not parts"):

> Probability distributions are the shapes of things that get counted, timed, or measured. Tickets in an hour, the wait for the next ticket, a person's height, a reply delay, and the yeses out of 200 sent messages each have one. Each shape has a name. Poisson is the shape of the tickets in an hour. The exponential is the shape of the wait for the next ticket.

After that the owner stopped the round and handed the writing to Grok. The last three offered, family first with whole content only, were not ruled on:

> The bell curve is the probability distribution everyone has seen. Heights settle onto it, and so do measurement errors. The bell curve has a family.

> Probability distributions are the shapes numbers settle into when you keep measuring them. The bell curve is the one everyone has seen, and heights and measurement errors settle onto it.

What the owner has said he wants, in his words across the round: "WPW format", "no vagueness", "family first", "this is WHOLE content, not parts", "don't speak claudish", "present me options".

## Grok's first three, struck 2026-08-29

Grok wrote three openings from its outline. The owner struck all three, one reason each, verbatim:

> Probability distributions are a family that Poisson, the bell curve, and exponential belong to. A count of tickets in an hour, a reply delay, and a person's height belong to that family.

"A. do not use circular definitions."

> Probability distributions are a family you use for a count of tickets in an hour, a reply delay, and a person's height. Poisson, the bell curve, and exponential belong to that family.

"B. do not use copular definitions."

> Probability distributions let you say what tickets in an hour, a reply delay, and a person's height will do later. Probability distributions are a family that Poisson, the bell curve, and exponential belong to.

"C. do not use definitions that have too many items."

Three more rules from those strikes, standing for every further opening on this page. No definition that uses the thing to define itself. No sentence of the form "X is a Y". No definition that lists more than a couple of things.

## The reader

A person who has read no other page in this vault. They know ordinary English and ordinary life. They studied some statistics at some point and do not hold it now. They do not know what a density is, what a parameter is, or what any of the fifteen names below mean.

## The question the friend asks

I have a number that comes out different every time I measure it. How do I work out which of these named shapes it has, and what does knowing that let me do that I could not do before?

## Facts, by shape

### The organising fact

- A distribution is the pattern of how often each value turns up, over many repeats.
- Each named shape below comes from one particular way a number gets made.
- The shape is chosen by naming how the number gets made, not by matching a curve to a histogram.
- Knowing the shape lets you say what unseen values will do. That is the only reason to pick one.
- There are about fifteen shapes worth holding.

### Bernoulli

- One try, two outcomes, written 1 or 0.
- One dial: p, the chance of a 1.
- Average over many tries is p.
- Spread is largest at p = 0.5.
- Every counting shape below is built from repeats of this.

### Binomial

- n independent tries, the same chance p each time, count the yeses.
- Two dials: n and p.
- Average is n × p. Spread is the square root of n × p × (1 − p).
- Fits: conversion counts, pass rate on a fixed test set, how many of 200 sent messages got a reply, how many of 50 agent runs returned valid output.
- Breaks when tries influence each other, or when p drifts between tries. Real counts then come out wider than this allows.

### Poisson

- Count of events in a fixed window, when events do not affect each other and the long-run rate is steady.
- One dial: λ, the average count in the window.
- Average and variance are the same number. This is the free test.
- The test: variance of the counts divided by their average. Near 1 means Poisson holds. Well above 1 means the events clump.
- Fits: support tickets per hour, arrivals at a queue, typos per page, rare failures per thousand runs.
- Using it on clumpy counts sizes queues, retry budgets, and alert thresholds for a calm that the data says does not exist.

### Negative binomial

- Same counting job as Poisson, with the rate itself varying from window to window.
- Produced by drawing a rate from a gamma, then drawing a Poisson count from that rate.
- Two dials. Easiest set as the average wanted plus how much wider than Poisson.
- At an average of six messages a day it gives far more silent days and far more twenty-message days than Poisson at the same average.
- Fits almost every count coming from people or the internet: page views per day, purchases per customer, messages per person, defects per batch, claims per policy.

### Geometric

- Count of tries up to and including the first yes.
- One dial: the chance of a yes on one try.
- Average number of tries is 1 divided by that chance.
- At a 25 percent chance, the single most likely outcome is succeeding on try one, and every later try is less likely than the one before it. Reaching try five needs four failures first.
- No memory. Ten failures tell you nothing about how many more are coming.
- Fits: retry budgets, prompts before an agent returns a parseable answer, cold approaches before one lands.
- Breaks when failure makes the next failure more likely.

### Exponential

- The gap between one Poisson event and the next.
- One dial: the rate, or its reciprocal the average gap.
- Half of all gaps are shorter than 0.693 × the average, so the average sits well above the middle value.
- No memory. After ten minutes of nothing, the remaining wait has the same distribution it had at the start.
- Wrong for anything that ages, wears out, or builds pressure.
- The gamma and the Weibull are both built from it.

### Gamma

- The sum of k exponential gaps. The wait for the k-th event.
- Two dials: how many events, and the average gap.
- Each extra event pushes the peak right and evens the shape out, because long and short gaps cancel.
- Same reason a batch of ten jobs finishes on a more predictable schedule than any one of them.
- Also the standard way to describe an uncertain Poisson rate. Gamma on the rate plus a Poisson draw gives the negative binomial.

### Weibull

- Time until something gives out, where the danger changes with age.
- Two dials: a scale for the typical lifetime, and a shape number k.
- k below 1: danger falls with age. Hardware infant mortality, the first week of a subscription.
- k = 1: danger flat. This is the exponential.
- k above 1: danger rises with age. Wear.
- Fitting k and reading which side of 1 it lands on says whether churn is people who never started or people who wore out. Those two need opposite fixes.

### Uniform

- Every value between two ends equally likely, nothing outside them.
- Two dials: the two ends.
- Almost always wrong as a description of a real quantity, because real quantities have a typical value and this says there is none.
- Right when only the range is known.
- It is what every random number generator produces before the number is bent into another shape.

### Normal

- The total of many small independent effects added together, whatever shape each effect had.
- Two dials: the middle and the spread.
- 68 of every 100 values land within one spread of the middle, 95 within two, 99.7 within three.
- Puts real weight below its middle, so it is wrong for anything that cannot go below zero.
- Very thin ends, so it calls a value five spreads out impossible, which is false for most quantities from people or markets.
- Fits: heights, measurement error, sums of many independent contributions.
- Does not fit: durations, incomes, file sizes, message lengths.

### Log-normal

- The same many-small-effects story with multiplying instead of adding.
- Take the log of the value and a normal shape comes back.
- Two dials: the median, and how wide the spread is on the log scale.
- Positive by construction, peaks left of its own average, runs a long way right.
- Fits: most durations, reply delays, message lengths, file sizes, incomes inside one band.
- The median describes the typical case. The average describes a case rarer than it sounds. Both are honest; swapping one for the other is not.
- Test for it: take logs of the data and look for the even symmetric shape.

### Power law (Pareto)

- The extreme long right tail. A few giants carry the total.
- One dial: an exponent that sets how slowly the tail falls, plus a floor where it starts.
- Exponent at or below 2: variance is not finite, so sample variance keeps growing with more data instead of settling.
- Exponent at or below 1: the average does not settle either.
- Consequence: no amount of extra data makes the average trustworthy, and a capacity plan built on a mean is wrong by construction. Use a named quantile.
- Fits: city sizes, wealth, word frequencies, follower counts, outage lengths, the largest file in a bucket.

### Student's t

- The shape of a sample average judged against the truth, when the spread is estimated from the same sample.
- One dial: the sample size minus one.
- Same middle as the normal, thicker ends.
- At 5 observations a 95 percent interval runs 2.78 standard errors each side, against 1.96 for the normal. That is 42 percent wider.
- At 30 observations it is 2.05 and the difference has mostly gone.

### Beta

- A belief about a chance, living between 0 and 1.
- Two dials. Both start at 1 when nothing is known. Every yes adds 1 to the first, every no adds 1 to the second.
- 1 and 1 is flat. 2 and 6 leans low and stays wide. 9 and 3 leans high and is narrowing.
- Updating costs one addition, so a live belief about a click rate, a conversion rate, or an agent's success rate is free to maintain.
- The standard partner to the yes-or-no shapes, and the standard way to choose which of several options to try next when each has its own unknown success rate.

### Categorical, multinomial, Zipf

- Categorical: pick one label from a fixed list, each label with its own chance.
- Multinomial: counts over many picks. The binomial with more than two outcomes.
- Zipf: rank the labels by how often they get picked and the share of rank r falls off like 1 over r to some power.
- Holds for words in a language, pages on a site, and who a person messages.
- At 20 contacts with exponent 1.1, the top three take 55 percent of everything sent.
- Equal chances across options is the fastest way to make simulated behaviour look wrong, because the flatness shows in any ranking.

## How the shapes turn into each other

- Repeat a Bernoulli try and count → binomial.
- Binomial with n growing and p shrinking → Poisson.
- Poisson with the rate itself varying → negative binomial.
- Poisson counting turned around to look at gaps → exponential.
- Several exponential gaps added → gamma.
- Many of anything added → normal.
- Many of anything multiplied → log-normal.
- Normal with the spread estimated from few points → Student's t.
- Beta supplies the chance p that a Bernoulli or binomial uses.
- Geometric is the discrete version of the exponential.

## The three mistakes

1. Reaching for the normal on a positive skewed quantity. It hands back negative predictions and calls the slow tail impossible. Take logs, then use log-normal or gamma.
2. Planning from an average when the tail is heavy. The sample average is still moving and will keep moving. Quote a median and a named high quantile.
3. Using Poisson on counts that clump. The variance-over-average test catches it. Move to negative binomial.

## Simulating one person's texting day

The case: an agent sends messages across a day so the timing looks like a person rather than a cron job. Volume is easy. Timing is where it fails.

Seven layers. The first four decide when messages get sent. The last three decide what is sent and to whom.

1. **The person.** Draw one set of parameters per simulated person and keep them for that person's life: daily volume, wake time, sleep time, typing speed, chattiness. Daily volume from a log-normal across the population. Skipping this makes a fleet detectable even when each account looks fine alone, because 500 accounts sharing one day-shape gives the aggregate away.
2. **When a conversation starts.** A Poisson process whose rate follows the hour of day, called a non-homogeneous Poisson process. Rate curve: a low overnight floor plus two or three bumps for the hours that person is reachable. Sample by thinning: draw candidate times at the peak rate using exponential gaps, keep each candidate with probability equal to the rate at that hour divided by the peak rate. Weekday and weekend need different curves.
3. **How many messages in a burst.** Heavy-tailed, not fixed. Geometric with an average around four as a start. A discrete power law if the occasional forty-message spree is wanted.
4. **Gaps inside a burst.** Log-normal, median 30 to 60 seconds, log-scale spread around 0.8. Never uniform. A uniform gap between 30 and 90 seconds gives a flat histogram no person has produced.
5. **Typing time.** Message length log-normal, median six to eight words for chat. Typing throughput a per-person constant, 25 to 40 words per minute on a phone. Send time is length divided by throughput, plus a few fixed seconds to start, times a log-normal jitter. This is what makes long messages take longer, which is a correlation any check looks for.
6. **Reply delay.** Two shapes added, not one. Fast hump is a reply while the thread is live, median in tens of seconds. Slow hump is a reply after the thread went quiet, median in hours. Weight on the slow hump rises with how long the thread has been idle, and rises again overnight. One log-normal fitted to all replies at once lands between the humps and gives delays too slow to be live and too fast to be next-morning.
7. **Who gets the message.** Zipf over the contact list. Uniform choice across contacts is as detectable as uniform timing.

Every number above is a starting value, not a measurement. The point of the layering is that each layer can be fitted separately against a real corpus.

### Four checks on a simulated log against a real one

- Variance of daily counts divided by their average. Real logs come back well above 1. A simulation near 1 is missing the per-person and per-day variance.
- Inter-message gaps on a log time axis. Real logs show a fast clump, then a dip, then a long tail. A single exponential shows one smooth curve and no dip.
- Hour-of-day histogram. Catches a flat rate at once, and catches a whole fleet sharing one curve.
- Burstiness of the gaps: (standard deviation − average) divided by (standard deviation + average). A Poisson process gives exactly 0, because exponential gaps have standard deviation equal to the average. Human logs come back positive. A simulation at 0 has no burst layer working.

### Cost, and when not to build it

- Every layer adds parameters. Each parameter needs a real corpus to fit, or an admission it was guessed.
- The per-person layer multiplies the fitting work by the fleet size.
- A two-part reply delay needs thread state carried through the simulation. That is structural, not a tuning change.
- The case against: for most agent work the timing is not being judged. If messages are labelled as coming from an agent, or the recipient is a test harness, realistic timing buys nothing and a flat rate is correct engineering.
- The layers pay when timing is what someone is looking at: synthetic data for training or testing a detector, load generation matched to a real traffic shape, and agents whose pacing is part of the product.
- Quit signal: with no corpus to fit against, stop after the day-rate curve and log-normal gaps. Those two carry most of the realism anyone sees. The rest are guesses that look plausible and match nothing.
- Boundary: this is for synthetic data, load testing, and agents whose nature is disclosed. Timing realism used to hide an agent from a person who has not been told is a different activity.

## Diagrams already built

Twenty inline SVG figures exist and are drawn from the real density or mass function. They are not to be redrawn. The page carries each one as `<!-- diagram:NAME -->` and `<!-- /diagram -->` on their own lines, and the generator fills the gap between them.

| Marker name | What it shows |
|---|---|
| `chooser` | Four groups of quantity, the condition that decides, and the shape it lands on. Fifteen rows. Hover gives a one-line description. |
| `bernoulli` | Two bars at 0.7 and 0.3. |
| `binomial` | Twenty flips at p = 0.15 and p = 0.5, as stepped outlines. |
| `poisson` | Averages of 1, 4 and 10 per hour, as stepped outlines. |
| `nbinom` | Poisson and negative binomial, both at average 6. |
| `geometric` | Tries until the first yes at a 25 percent chance. |
| `exponential` | Waiting time, with the half-of-all-gaps line marked. |
| `gamma` | Waiting for the 2nd, 3rd and 5th arrival. |
| `weibull` | k = 0.7, k = 1 and k = 2.5. |
| `uniform` | A flat block between 0 and 1. |
| `normal` | Standard deviation bands with the 68 and 95 counts. |
| `lognormal` | Log-normal against a normal of the same average, with the median marked. |
| `powerlaw` | Power law against exponential on a log height axis, each grey line a tenth of the one above. |
| `student_t` | t with 3 degrees of freedom against the normal, with the far ends circled. |
| `beta` | 1 and 1, 2 and 6, 6 and 6, 9 and 3. |
| `zipf` | Twenty contacts ranked, top three at 55 percent. |
| `family` | Box and arrow map of which shape turns into which, each arrow one change to the story. |
| `bot_timelines` | A flat-rate sender against the layered model, same count on the same day, plus twelve minutes of one burst opened up. |
| `circadian` | One person's sending rate across 24 hours, with sleep, commute, lunch and evening marked. |
| `reply_delay` | Reply delay on a log time axis, showing the live hump and the gone-quiet hump. |

Machinery: `/Users/n1/Projects/llm-knowledge-base/scripts/gen-distribution-diagrams.py` draws all twenty into `/Users/n1/Projects/llm-knowledge-base/assets/distribution-diagrams/`, and `--inject <page>` fills every marker pair. The figures survive the rewrite of the prose.

## Sources

- Barabási, A.-L. (2005). The origins of bursts and heavy tails in human dynamics. *Nature* 435, 207–211. Gaps between human communications are heavy-tailed rather than exponential.
- Malmgren, R. D., Stouffer, D. B., Motter, A. E., & Amaral, L. A. N. (2008). A Poissonian explanation for heavy tails in e-mail communication. *PNAS* 105(47). A Poisson process with a daily and weekly rate cycle reproduces the heavy tails. This is the layered construction in the simulation section.
- Goh, K.-I., & Barabási, A.-L. (2008). Burstiness and memory in complex systems. *EPL* 81, 48002. Source of the burstiness measure.
- Gelman, A., Carlin, J. B., Stern, H. S., Dunson, D. B., Vehtari, A., & Rubin, D. B. (2013). *Bayesian Data Analysis*, 3rd edition. Beta with binomial, and gamma with Poisson.
- Jaynes, E. T. (2003). *Probability Theory: The Logic of Science*. A distribution is chosen by what the generating story constrains.

## What stays out

- No mathematical notation beyond λ, p, n and k, each said in words first.
- No derivations, no integrals, no moment generating functions.
- No cumulative distribution functions. Every figure is a density or a mass.
- No R or Python code blocks. The parameters are given in words.
- No named people in the body. Provenance lives in Sources.
