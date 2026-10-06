---
title: "Probability Distributions"
type: reference
status: developing
created: 2026-08-28
updated: 2026-09-27
description: "How to pick a probability distribution from the way a number is made, with the common shapes, how they connect, and three mistakes to check."
written-by: opus
prose-model: fable
method: outline-2026-09-27
tags:
  - statistics
  - probability
  - simulation
  - modelling
---

# Probability Distributions

Statisticians have named a set of standard shapes for how often each value of a changing quantity turns up, and the bell curve is the one most people have seen. Each shape comes from one way the number gets made, such as adding up many small effects or counting random arrivals in an hour. Picking the right shape lets you predict values you have not seen yet, and picking the wrong one gives confident wrong answers about queues, risk and budgets.

- Choose the shape from how the number is made.
- Fitting a curve to a chart of the data is the weaker way.
- Counts of independent arrivals follow the Poisson shape.
- Counts from people usually clump more than Poisson allows.
- Durations, delays and incomes are skewed, so use log-normal.
- A long tail: plan from a high percentile, never the average.
- A running tally of yeses and noes gives a belief about a rate.

## How to pick one

Start by saying in words how each value arises. A count of yeses out of a fixed number of tries is one story, a count of arrivals in an hour is another, and a time until something breaks is a third. Each story has one shape, and that shape comes with one or two settings, such as the average or the spread. The table groups the common cases.

| How the number is made | Shape |
| --- | --- |
| yeses out of n tries | binomial |
| arrivals in a fixed window | Poisson |
| arrivals that clump | negative binomial |
| tries until the first yes | geometric |
| wait for the next arrival | exponential |
| time until wear-out | Weibull |
| sum of many small effects | normal (bell curve) |
| product of many small effects | log-normal |
| a few giants hold most of the total | power law |
| belief about a success rate | beta |
| which item from a ranked list | Zipf |

## The shapes worth knowing

Most practical work uses a handful of these. The Poisson comes with a free test: its average and its spread squared are the same number, so dividing one by the other should give about 1. The log-normal is what you get when effects multiply, and it describes most waiting times. The power law has a tail so long that the average of a sample never settles.

- Binomial: 200 messages sent, how many got a reply.
- Poisson: support tickets per hour, typos per page.
- Negative binomial: page views per day, messages per person.
- Geometric: at a 25% chance, the first try is the likeliest success.
- Exponential: half of all gaps are shorter than 0.69 times the average.
- Weibull: a setting below 1 means early failures, above 1 means wear.
- Normal: 68% within one spread of the middle, 95% within two.
- Log-normal: reply delays, file sizes, message lengths.
- Power law: city sizes, wealth, follower counts.
- Student's t: with 5 points, the 95% range is 42% wider than normal.
- Beta: start at 1 and 1, and add 1 per yes or no.

The Weibull settles a common question about customers who leave. If early leaving dominates, people never got started, and if late leaving dominates, they wore out. The two need opposite fixes.

## How the shapes connect

Most shapes are one change away from another. Repeating a yes-or-no try and counting the yeses gives the binomial. Letting the Poisson rate vary from case to case gives the negative binomial. Looking at the gaps between Poisson arrivals gives the exponential.

```
yes/no try --count--> binomial --rare, many--> Poisson
                                                  |
             rate varies <------------------------+
                  |                               |
          negative binomial              gaps: exponential
                                                  |
                                     add k gaps: gamma
many effects added   --> normal
many effects multiplied --> log-normal
```

## Three common mistakes

Three errors cause most bad predictions, and each has a quick check. A normal shape put on a number that is always positive and skewed will predict negative values. The average of a heavy-tailed number keeps moving as more data arrive. A Poisson shape put on clumpy counts is the third, and the sign is a variance well above the average.

- Skewed positive number: take logs before fitting a normal.
- Heavy tail: quote the median and a high percentile, never the average.
- Clumpy counts: variance over average well above 1 means negative binomial.

Before any of these checks, turn raw counts into rates, per person or per hour, so that the shape describes like with like.

## Simulating a person's texting day

An agent that sends messages at a flat rate is easy to spot. A human-looking day stacks several shapes. Each person gets a daily volume drawn once from a log-normal, a sending rate that follows the hour of the day, bursts of a few messages with log-normal gaps inside each burst, and reply delays with a fast peak for live threads and a slow one for threads gone quiet. Without real logs to fit against, stop after the hourly rate curve and the log-normal gaps, since those two carry most of the realism.

- Test: daily count variance over average should be well above 1.
- Test: gaps on a log time axis show clump, dip, then tail.

Use the stack for test data, load tests and agents that say they are agents.

## Links

- [[wiki/Worldviews & the Political Order/Per Capita|Per Capita]] gives the division that turns a raw count into a rate. That division comes before any count here gets its distribution read.
- [[wiki/Decision Making/Positional Decisions and Expected Value|Positional Decisions and Expected Value]] gives what an average over many repeats is worth to a decision when any single result can fail.
- [[wiki/Decision Making/Expectancy in Wicked Environments|Expectancy in Wicked Environments]] gives a way to weigh chance times size when nobody posts the odds. The chance in that weighing is what a distribution here supplies.
- [[wiki/Dimensions/Mindset/Confidence Calibration|Confidence Calibration]] gives two checks on whether a certainty of yours deserves the weight you put on it. The beta here asks the same question with counted yeses and noes.

## Sources

- The section texts were written by Claude Haiku 4.5 on 2026-09-01, cold, from a spec naming the audience, the format, and the facts that had to appear. The spec and the method are in `01 - Workbench/GENERATOR-eli5-haiku-DRAFT-2026-09-01.md`.
- The figures are drawn from the real mass and density functions by `scripts/gen-distribution-diagrams.py`.
