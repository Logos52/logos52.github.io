---
title: "Expectancy in Wicked Environments"
description: "Makes expected value usable outside games: cut the small fry, weigh only the heavyweights, and rate chance and magnitude in broad bands until a wicked decision shrinks enough for game logic to apply."
type: model
status: seed
created: 2026-06-11
updated: 2026-06-11
ics-stage: Higher Ground Decision-Making
tags:
  - decision-making
  - expected-value
  - uncertainty
---

# Expectancy in Wicked Environments

A game with posted odds lets you compute exactly whether playing is worth it: multiply the chance of the good outcome by its magnitude, subtract the chance of the bad outcome times its magnitude, and read the sign. Win $10 at 75% and lose $50 at 25%, and a hundred rounds nets $750 in wins against $1,250 in losses — expectancy is −$500, so don't play. Shrink the loss to $20 and the same odds flip to +$250. The sign turns on two levers per side: chance and magnitude.

That arithmetic assumes a kind environment — one that publishes its rules. Chess, golf, and most sports declare what winning and losing mean, so chances and magnitudes can actually be measured. Most of life is a wicked environment instead: the win condition is undefined, the loss condition is undefined, sometimes no win exists at all and the best available outcome is a less-bad loss, and the variable count runs into the thousands. No head computes expectancy over that, and waiting for the perfect calculation means never deciding. The perfect decision is off the table, which leaves the job of building a usable estimate. Three cuts shrink a wicked decision until the game logic applies again.

## Three Cuts That Make It Computable

- **Cut the small fry.** Of, say, ten thousand things that could go right or wrong, roughly 9,995 are low-chance, low-magnitude, or both. Small positives and small negatives roughly cancel, and whatever survives can be handled as it arises. Delete them wholesale — including outcomes that are guaranteed to happen but too insignificant to matter.
- **Weigh only the heavyweights.** Judge the decision on the few most significant positives against the few most significant negatives. After the first cut, the situation is small enough to plug into the expectancy comparison without drowning in variables.
- **Rate in broad bands.** Precision like 78% versus 79.3% is fake in a wicked environment. Rate significance as imperative / significant / convenient / insignificant (for a risk, imperative reads as unacceptable), and rate likelihood as guaranteed / very high / somewhat / low. Crossing the two bands over the surviving variables is the whole calculation.

## What Keeps the Cuts Honest

- **Discovery before deletion.** The danger in blanket simplification is deleting a major downside that was never noticed in the first place. A thorough information pass comes before any cutting, and speed compounds the benefit: the faster high-quality discovery runs, the cheaper good decisions become.
- **Engineer the biggest downside.** Ask whether its chance can drop (25% to 5%) or its magnitude can shrink ($50 to $20). Either move alone can flip overall expectancy from negative to positive — the same two levers as in the game, applied to the few variables that survived the cuts. Then do the mirror work on the upside: what is the chance of the gain, and how big is it.
- **Ratings ride on the information behind them.** The bands are subjective, but a rating assigned after extensive, high-quality discovery is an informed estimate; the same rating assigned cold is a guess wearing the framework's clothes. The legitimacy of the whole protocol lives in the quality of what was gathered before judging.

## The Bet on Running It at All

The estimate will sometimes be wrong; the decision to estimate still pays. Running a complex choice through this protocol produces better decisions on average than skipping it, so engaging the framework carries positive expectancy in its own right. Where a genuinely kind pocket of life appears, with real statistics and explicit win conditions, drop the bands and do the exact arithmetic instead.

## Links into the system

Grounds [[Positional Decisions and Expected Value]] — that page carries the position-improving move and downside protection across repeated choices; this one explains why the underlying calculation must be banded rather than computed. The cuts slot into the variable-naming and downside steps of the operating loop in [[Decision Making]], and [[wiki/Decision Making/Judging a Decision by Its Process|judging a decision by its process]] judges the result the same way this page does: by the quality of the process given the information held at the time.
