---
title: "Probability Distributions"
type: reference
status: developing
created: 2026-08-28
updated: 2026-09-01
description: "The common probability distributions, each with a picture, a plain definition, and real-world examples, grouped by the kind of number they fit."
tags:
  - statistics
  - probability
  - simulation
  - modelling
---

# Probability Distributions

A probability distribution is a way of describing how likely each possible outcome is when something is uncertain. It assigns a probability—a number between 0 and 1—to each outcome, where a higher number means the outcome is more likely to occur.

Start by asking what kind of number you have. The chart moves from your number to its pattern.

<!-- diagram:chooser -->
<svg viewBox="0 0 680 487" width="680" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Chooser from what the number is to which distribution fits" style="max-width:100%;height:auto">
  <defs><marker id="ar-chooser" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="rgba(130,130,130,.6)"/></marker></defs>
  <text x="12" y="20" font-size="9.5" font-weight="700" letter-spacing=".09em" fill="currentColor" opacity=".45">WHAT THE NUMBER IS</text>
  <text x="212" y="20" font-size="9.5" font-weight="700" letter-spacing=".09em" fill="currentColor" opacity=".45">WHAT MAKES IT</text>
  <text x="500" y="20" font-size="9.5" font-weight="700" letter-spacing=".09em" fill="currentColor" opacity=".45">THE SHAPE</text>
  <rect x="12" y="34" width="186" height="130" rx="6" fill="rgba(47,158,143,.08)" stroke="#2f9e8f" stroke-opacity=".55"/>
  <text x="105.0" y="103.0" font-size="11" font-weight="600" fill="currentColor" text-anchor="middle">A count of how many</text>
  <line x1="198" y1="45" x2="210" y2="45" stroke="rgba(130,130,130,.35)"/>
  <text x="214" y="49" font-size="10.5" fill="currentColor" opacity=".78">one yes-or-no try</text>
  <line x1="492" y1="45" x2="500" y2="45" stroke="rgba(130,130,130,.35)"/>
  <rect x="502" y="35" width="166" height="21" rx="4" fill="rgba(47,158,143,.10)" stroke="#2f9e8f" stroke-opacity=".5"/>
  <g style="cursor:help"><title>One trial with a fixed chance of yes.</title><text x="585" y="49.5" font-size="10.5" font-weight="600" fill="currentColor" text-anchor="middle">Bernoulli</text></g>
  <line x1="198" y1="72" x2="210" y2="72" stroke="rgba(130,130,130,.35)"/>
  <text x="214" y="76" font-size="10.5" fill="currentColor" opacity=".78">a fixed number of tries</text>
  <line x1="492" y1="72" x2="500" y2="72" stroke="rgba(130,130,130,.35)"/>
  <rect x="502" y="62" width="166" height="21" rx="4" fill="rgba(47,158,143,.10)" stroke="#2f9e8f" stroke-opacity=".5"/>
  <g style="cursor:help"><title>Count of yeses out of n independent tries at the same chance.</title><text x="585" y="76.5" font-size="10.5" font-weight="600" fill="currentColor" text-anchor="middle">Binomial</text></g>
  <line x1="198" y1="99" x2="210" y2="99" stroke="rgba(130,130,130,.35)"/>
  <text x="214" y="103" font-size="10.5" fill="currentColor" opacity=".78">a window of time, steady rate</text>
  <line x1="492" y1="99" x2="500" y2="99" stroke="rgba(130,130,130,.35)"/>
  <rect x="502" y="89" width="166" height="21" rx="4" fill="rgba(47,158,143,.10)" stroke="#2f9e8f" stroke-opacity=".5"/>
  <g style="cursor:help"><title>Count of events in a window when events do not affect each other.</title><text x="585" y="103.5" font-size="10.5" font-weight="600" fill="currentColor" text-anchor="middle">Poisson</text></g>
  <line x1="198" y1="126" x2="210" y2="126" stroke="rgba(130,130,130,.35)"/>
  <text x="214" y="130" font-size="10.5" fill="currentColor" opacity=".78">a window of time, clumpy</text>
  <line x1="492" y1="126" x2="500" y2="126" stroke="rgba(130,130,130,.35)"/>
  <rect x="502" y="116" width="166" height="21" rx="4" fill="rgba(47,158,143,.10)" stroke="#2f9e8f" stroke-opacity=".5"/>
  <g style="cursor:help"><title>Poisson counts whose rate itself varies. More zeros and more big days.</title><text x="585" y="130.5" font-size="10.5" font-weight="600" fill="currentColor" text-anchor="middle">Negative binomial</text></g>
  <line x1="198" y1="153" x2="210" y2="153" stroke="rgba(130,130,130,.35)"/>
  <text x="214" y="157" font-size="10.5" fill="currentColor" opacity=".78">tries until the first yes</text>
  <line x1="492" y1="153" x2="500" y2="153" stroke="rgba(130,130,130,.35)"/>
  <rect x="502" y="143" width="166" height="21" rx="4" fill="rgba(47,158,143,.10)" stroke="#2f9e8f" stroke-opacity=".5"/>
  <g style="cursor:help"><title>Number of tries up to and including the first success.</title><text x="585" y="157.5" font-size="10.5" font-weight="600" fill="currentColor" text-anchor="middle">Geometric</text></g>
  <rect x="12" y="180" width="186" height="76" rx="6" fill="rgba(198,146,52,.08)" stroke="#c69234" stroke-opacity=".55"/>
  <text x="105.0" y="222.0" font-size="11" font-weight="600" fill="currentColor" text-anchor="middle">A length of waiting</text>
  <line x1="198" y1="191" x2="210" y2="191" stroke="rgba(130,130,130,.35)"/>
  <text x="214" y="195" font-size="10.5" fill="currentColor" opacity=".78">until the next event</text>
  <line x1="492" y1="191" x2="500" y2="191" stroke="rgba(130,130,130,.35)"/>
  <rect x="502" y="181" width="166" height="21" rx="4" fill="rgba(198,146,52,.10)" stroke="#c69234" stroke-opacity=".5"/>
  <g style="cursor:help"><title>Gap between Poisson events. Memoryless: waiting longer buys nothing.</title><text x="585" y="195.5" font-size="10.5" font-weight="600" fill="currentColor" text-anchor="middle">Exponential</text></g>
  <line x1="198" y1="218" x2="210" y2="218" stroke="rgba(130,130,130,.35)"/>
  <text x="214" y="222" font-size="10.5" fill="currentColor" opacity=".78">until the k-th event</text>
  <line x1="492" y1="218" x2="500" y2="218" stroke="rgba(130,130,130,.35)"/>
  <rect x="502" y="208" width="166" height="21" rx="4" fill="rgba(198,146,52,.10)" stroke="#c69234" stroke-opacity=".5"/>
  <g style="cursor:help"><title>Sum of k exponential gaps.</title><text x="585" y="222.5" font-size="10.5" font-weight="600" fill="currentColor" text-anchor="middle">Gamma</text></g>
  <line x1="198" y1="245" x2="210" y2="245" stroke="rgba(130,130,130,.35)"/>
  <text x="214" y="249" font-size="10.5" fill="currentColor" opacity=".78">until a thing gives out</text>
  <line x1="492" y1="245" x2="500" y2="245" stroke="rgba(130,130,130,.35)"/>
  <rect x="502" y="235" width="166" height="21" rx="4" fill="rgba(198,146,52,.10)" stroke="#c69234" stroke-opacity=".5"/>
  <g style="cursor:help"><title>Failure time where the danger rises or falls with age.</title><text x="585" y="249.5" font-size="10.5" font-weight="600" fill="currentColor" text-anchor="middle">Weibull</text></g>
  <rect x="12" y="272" width="186" height="103" rx="6" fill="rgba(91,108,176,.08)" stroke="#5b6cb0" stroke-opacity=".55"/>
  <text x="105.0" y="327.5" font-size="11" font-weight="600" fill="currentColor" text-anchor="middle">A measured amount</text>
  <line x1="198" y1="283" x2="210" y2="283" stroke="rgba(130,130,130,.35)"/>
  <text x="214" y="287" font-size="10.5" fill="currentColor" opacity=".78">many small effects added</text>
  <line x1="492" y1="283" x2="500" y2="283" stroke="rgba(130,130,130,.35)"/>
  <rect x="502" y="273" width="166" height="21" rx="4" fill="rgba(91,108,176,.10)" stroke="#5b6cb0" stroke-opacity=".5"/>
  <g style="cursor:help"><title>Sums of many independent small contributions.</title><text x="585" y="287.5" font-size="10.5" font-weight="600" fill="currentColor" text-anchor="middle">Normal</text></g>
  <line x1="198" y1="310" x2="210" y2="310" stroke="rgba(130,130,130,.35)"/>
  <text x="214" y="314" font-size="10.5" fill="currentColor" opacity=".78">many small factors multiplied</text>
  <line x1="492" y1="310" x2="500" y2="310" stroke="rgba(130,130,130,.35)"/>
  <rect x="502" y="300" width="166" height="21" rx="4" fill="rgba(91,108,176,.10)" stroke="#5b6cb0" stroke-opacity=".5"/>
  <g style="cursor:help"><title>Products of many independent small factors. Positive, right-skewed.</title><text x="585" y="314.5" font-size="10.5" font-weight="600" fill="currentColor" text-anchor="middle">Log-normal</text></g>
  <line x1="198" y1="337" x2="210" y2="337" stroke="rgba(130,130,130,.35)"/>
  <text x="214" y="341" font-size="10.5" fill="currentColor" opacity=".78">a few giants carry the total</text>
  <line x1="492" y1="337" x2="500" y2="337" stroke="rgba(130,130,130,.35)"/>
  <rect x="502" y="327" width="166" height="21" rx="4" fill="rgba(91,108,176,.10)" stroke="#5b6cb0" stroke-opacity=".5"/>
  <g style="cursor:help"><title>Pareto. The largest few items dominate the sum.</title><text x="585" y="341.5" font-size="10.5" font-weight="600" fill="currentColor" text-anchor="middle">Power law</text></g>
  <line x1="198" y1="364" x2="210" y2="364" stroke="rgba(130,130,130,.35)"/>
  <text x="214" y="368" font-size="10.5" fill="currentColor" opacity=".78">an average from a small sample</text>
  <line x1="492" y1="364" x2="500" y2="364" stroke="rgba(130,130,130,.35)"/>
  <rect x="502" y="354" width="166" height="21" rx="4" fill="rgba(91,108,176,.10)" stroke="#5b6cb0" stroke-opacity=".5"/>
  <g style="cursor:help"><title>Normal shape with thicker ends, from estimating the spread on few points.</title><text x="585" y="368.5" font-size="10.5" font-weight="600" fill="currentColor" text-anchor="middle">Student's t</text></g>
  <rect x="12" y="391" width="186" height="76" rx="6" fill="rgba(129,86,166,.08)" stroke="#8156a6" stroke-opacity=".55"/>
  <text x="105.0" y="433.0" font-size="11" font-weight="600" fill="currentColor" text-anchor="middle">A choice or a share</text>
  <line x1="198" y1="402" x2="210" y2="402" stroke="rgba(130,130,130,.35)"/>
  <text x="214" y="406" font-size="10.5" fill="currentColor" opacity=".78">one of several named options</text>
  <line x1="492" y1="402" x2="500" y2="402" stroke="rgba(130,130,130,.35)"/>
  <rect x="502" y="392" width="166" height="21" rx="4" fill="rgba(129,86,166,.10)" stroke="#8156a6" stroke-opacity=".5"/>
  <g style="cursor:help"><title>Pick one label out of k, each with its own chance.</title><text x="585" y="406.5" font-size="10.5" font-weight="600" fill="currentColor" text-anchor="middle">Categorical</text></g>
  <line x1="198" y1="429" x2="210" y2="429" stroke="rgba(130,130,130,.35)"/>
  <text x="214" y="433" font-size="10.5" fill="currentColor" opacity=".78">a proportion you are unsure about</text>
  <line x1="492" y1="429" x2="500" y2="429" stroke="rgba(130,130,130,.35)"/>
  <rect x="502" y="419" width="166" height="21" rx="4" fill="rgba(129,86,166,.10)" stroke="#8156a6" stroke-opacity=".5"/>
  <g style="cursor:help"><title>A distribution over a probability between 0 and 1.</title><text x="585" y="433.5" font-size="10.5" font-weight="600" fill="currentColor" text-anchor="middle">Beta</text></g>
  <line x1="198" y1="456" x2="210" y2="456" stroke="rgba(130,130,130,.35)"/>
  <text x="214" y="460" font-size="10.5" fill="currentColor" opacity=".78">anywhere in a range, no preference</text>
  <line x1="492" y1="456" x2="500" y2="456" stroke="rgba(130,130,130,.35)"/>
  <rect x="502" y="446" width="166" height="21" rx="4" fill="rgba(129,86,166,.10)" stroke="#8156a6" stroke-opacity=".5"/>
  <g style="cursor:help"><title>Every value in the range equally likely.</title><text x="585" y="460.5" font-size="10.5" font-weight="600" fill="currentColor" text-anchor="middle">Uniform</text></g>
</svg>
<!-- /diagram -->

**Contents:** [A count of how many](#a-count-of-how-many) · [A length of waiting](#a-length-of-waiting) · [A measured amount](#a-measured-amount) · [A choice or a share](#a-choice-or-a-share) · [One family](#one-family)

## A count of how many

These distributions describe the number of occurrences or successes in a fixed setting.

### Bernoulli

<!-- diagram:bernoulli -->
<svg viewBox="0 0 680 226" width="680" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bernoulli distribution with p equals 0.3" style="max-width:100%;height:auto">
  <line x1="52" y1="158" x2="656" y2="158" stroke="rgba(130,130,130,.35)"/>
  <line x1="203.0" y1="158" x2="203.0" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="203.0" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">0  ·  no</text>
  <line x1="505.0" y1="158" x2="505.0" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="505.0" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">1  ·  yes</text>
  <text x="4" y="16" font-size="9" fill="currentColor" opacity=".45" text-anchor="start" letter-spacing=".06em">chance</text>
  <rect x="142.6" y="61.4" width="120.8" height="96.6" rx="2" fill="rgba(91,108,176,.30)" stroke="#5b6cb0" stroke-opacity=".8"/>
  <text x="203.0" y="53.4" font-size="12" fill="currentColor" opacity=".7" text-anchor="middle">0.7</text>
  <rect x="444.6" y="116.6" width="120.8" height="41.4" rx="2" fill="rgba(91,108,176,.30)" stroke="#5b6cb0" stroke-opacity=".8"/>
  <text x="505.0" y="108.6" font-size="12" fill="currentColor" opacity=".7" text-anchor="middle">0.3</text>
  <text x="52" y="194" font-size="10.5" fill="currentColor" opacity=".62" text-anchor="start">One flip with a 30 percent chance of yes. Two outcomes, two heights, and the heights add to 1.</text>
</svg>
<!-- /diagram -->

The Bernoulli distribution models a single event that either happens or does not. It has one parameter: the probability that the event occurs.

**Examples:** whether a message gets a reply · whether a visitor signs up

### Binomial

<!-- diagram:binomial -->
<svg viewBox="0 0 680 226" width="680" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Binomial distribution over twenty trials at two success rates" style="max-width:100%;height:auto">
  <line x1="52" y1="158" x2="656" y2="158" stroke="rgba(130,130,130,.35)"/>
  <line x1="66.4" y1="158" x2="66.4" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="66.4" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">0</text>
  <line x1="123.9" y1="158" x2="123.9" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="123.9" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">2</text>
  <line x1="181.4" y1="158" x2="181.4" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="181.4" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">4</text>
  <line x1="239.0" y1="158" x2="239.0" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="239.0" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">6</text>
  <line x1="296.5" y1="158" x2="296.5" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="296.5" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">8</text>
  <line x1="354.0" y1="158" x2="354.0" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="354.0" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">10</text>
  <line x1="411.5" y1="158" x2="411.5" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="411.5" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">12</text>
  <line x1="469.0" y1="158" x2="469.0" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="469.0" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">14</text>
  <line x1="526.6" y1="158" x2="526.6" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="526.6" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">16</text>
  <line x1="584.1" y1="158" x2="584.1" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="584.1" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">18</text>
  <line x1="641.6" y1="158" x2="641.6" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="641.6" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">20</text>
  <text x="4" y="16" font-size="9" fill="currentColor" opacity=".45" text-anchor="start" letter-spacing=".06em">chance</text>
  <path d="M52.0,158.0 L52.0,135.7 L80.8,135.7 L80.8,79.3 L109.5,79.3 L109.5,26.1 L138.3,26.1 L138.3,20.0 L167.0,20.0 L167.0,53.3 L195.8,53.3 L195.8,98.9 L224.6,98.9 L224.6,131.9 L253.3,131.9 L253.3,148.8 L282.1,148.8 L282.1,155.4 L310.9,155.4 L310.9,157.4 L339.6,157.4 L339.6,157.9 L368.4,157.9 L368.4,158.0 L397.1,158.0 L397.1,158.0 L425.9,158.0 L425.9,158.0 L454.7,158.0 L454.7,158.0 L483.4,158.0 L483.4,158.0 L512.2,158.0 L512.2,158.0 L541.0,158.0 L541.0,158.0 L569.7,158.0 L569.7,158.0 L598.5,158.0 L598.5,158.0 L627.2,158.0 L627.2,158.0 L656.0,158.0 L656.0,158.0" fill="none" stroke="#b0895e" stroke-width="1.7" stroke-dasharray="5 4" stroke-linejoin="round"/>
  <path d="M52.0,158.0 L52.0,158.0 L80.8,158.0 L80.8,158.0 L109.5,158.0 L109.5,157.9 L138.3,157.9 L138.3,157.4 L167.0,157.4 L167.0,155.3 L195.8,155.3 L195.8,149.5 L224.6,149.5 L224.6,136.7 L253.3,136.7 L253.3,115.5 L282.1,115.5 L282.1,88.9 L310.9,88.9 L310.9,65.9 L339.6,65.9 L339.6,56.7 L368.4,56.7 L368.4,65.9 L397.1,65.9 L397.1,88.9 L425.9,88.9 L425.9,115.5 L454.7,115.5 L454.7,136.7 L483.4,136.7 L483.4,149.5 L512.2,149.5 L512.2,155.3 L541.0,155.3 L541.0,157.4 L569.7,157.4 L569.7,157.9 L598.5,157.9 L598.5,158.0 L627.2,158.0 L627.2,158.0 L656.0,158.0 L656.0,158.0 Z" fill="rgba(91,108,176,0.13)" stroke="none"/>
  <path d="M52.0,158.0 L52.0,158.0 L80.8,158.0 L80.8,158.0 L109.5,158.0 L109.5,157.9 L138.3,157.9 L138.3,157.4 L167.0,157.4 L167.0,155.3 L195.8,155.3 L195.8,149.5 L224.6,149.5 L224.6,136.7 L253.3,136.7 L253.3,115.5 L282.1,115.5 L282.1,88.9 L310.9,88.9 L310.9,65.9 L339.6,65.9 L339.6,56.7 L368.4,56.7 L368.4,65.9 L397.1,65.9 L397.1,88.9 L425.9,88.9 L425.9,115.5 L454.7,115.5 L454.7,136.7 L483.4,136.7 L483.4,149.5 L512.2,149.5 L512.2,155.3 L541.0,155.3 L541.0,157.4 L569.7,157.4 L569.7,157.9 L598.5,157.9 L598.5,158.0 L627.2,158.0 L627.2,158.0 L656.0,158.0 L656.0,158.0" fill="none" stroke="#5b6cb0" stroke-width="1.7" stroke-linejoin="round"/>
  <rect x="52.0" y="206" width="9" height="9" rx="2" fill="rgba(176,137,94,.30)" stroke="#b0895e" stroke-opacity=".85"/>
  <text x="66.0" y="214" font-size="10.5" fill="currentColor" opacity=".68">p = 0.15</text>
  <rect x="135.2" y="206" width="9" height="9" rx="2" fill="rgba(91,108,176,.30)" stroke="#5b6cb0" stroke-opacity=".85"/>
  <text x="149.2" y="214" font-size="10.5" fill="currentColor" opacity=".68">p = 0.5</text>
  <text x="52" y="194" font-size="10.5" fill="currentColor" opacity=".62" text-anchor="start">Twenty flips. The step over 6 is the chance of getting exactly six yeses out of the twenty.</text>
</svg>
<!-- /diagram -->

The Binomial distribution models a fixed number of independent trials, each with the same probability of success. It has two parameters: the number of trials and the probability of success on each trial.

**Examples:** replies to 200 sent messages · signups from 50 demo calls

### Poisson

<!-- diagram:poisson -->
<svg viewBox="0 0 680 226" width="680" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Poisson distribution at three rates" style="max-width:100%;height:auto">
  <line x1="52" y1="158" x2="656" y2="158" stroke="rgba(130,130,130,.35)"/>
  <line x1="65.1" y1="158" x2="65.1" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="65.1" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">0</text>
  <line x1="117.7" y1="158" x2="117.7" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="117.7" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">2</text>
  <line x1="170.2" y1="158" x2="170.2" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="170.2" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">4</text>
  <line x1="222.7" y1="158" x2="222.7" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="222.7" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">6</text>
  <line x1="275.2" y1="158" x2="275.2" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="275.2" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">8</text>
  <line x1="327.7" y1="158" x2="327.7" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="327.7" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">10</text>
  <line x1="380.3" y1="158" x2="380.3" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="380.3" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">12</text>
  <line x1="432.8" y1="158" x2="432.8" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="432.8" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">14</text>
  <line x1="485.3" y1="158" x2="485.3" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="485.3" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">16</text>
  <line x1="537.8" y1="158" x2="537.8" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="537.8" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">18</text>
  <line x1="590.3" y1="158" x2="590.3" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="590.3" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">20</text>
  <line x1="642.9" y1="158" x2="642.9" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="642.9" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">22</text>
  <text x="4" y="16" font-size="9" fill="currentColor" opacity=".45" text-anchor="start" letter-spacing=".06em">chance</text>
  <path d="M52.0,158.0 L52.0,31.1 L78.3,31.1 L78.3,31.1 L104.5,31.1 L104.5,94.5 L130.8,94.5 L130.8,136.8 L157.0,136.8 L157.0,152.7 L183.3,152.7 L183.3,156.9 L209.6,156.9 L209.6,157.8 L235.8,157.8 L235.8,158.0 L262.1,158.0 L262.1,158.0 L288.3,158.0 L288.3,158.0 L314.6,158.0 L314.6,158.0 L340.9,158.0 L340.9,158.0 L367.1,158.0 L367.1,158.0 L393.4,158.0 L393.4,158.0 L419.7,158.0 L419.7,158.0 L445.9,158.0 L445.9,158.0 L472.2,158.0 L472.2,158.0 L498.4,158.0 L498.4,158.0 L524.7,158.0 L524.7,158.0 L551.0,158.0 L551.0,158.0 L577.2,158.0 L577.2,158.0 L603.5,158.0 L603.5,158.0 L629.7,158.0 L629.7,158.0 L656.0,158.0 L656.0,158.0" fill="none" stroke="#b0895e" stroke-width="1.7" stroke-dasharray="5 4" stroke-linejoin="round"/>
  <path d="M52.0,158.0 L52.0,151.7 L78.3,151.7 L78.3,132.7 L104.5,132.7 L104.5,107.4 L130.8,107.4 L130.8,90.6 L157.0,90.6 L157.0,90.6 L183.3,90.6 L183.3,104.1 L209.6,104.1 L209.6,122.1 L235.8,122.1 L235.8,137.5 L262.1,137.5 L262.1,147.7 L288.3,147.7 L288.3,153.4 L314.6,153.4 L314.6,156.2 L340.9,156.2 L340.9,157.3 L367.1,157.3 L367.1,157.8 L393.4,157.8 L393.4,157.9 L419.7,157.9 L419.7,158.0 L445.9,158.0 L445.9,158.0 L472.2,158.0 L472.2,158.0 L498.4,158.0 L498.4,158.0 L524.7,158.0 L524.7,158.0 L551.0,158.0 L551.0,158.0 L577.2,158.0 L577.2,158.0 L603.5,158.0 L603.5,158.0 L629.7,158.0 L629.7,158.0 L656.0,158.0 L656.0,158.0 Z" fill="rgba(47,158,143,0.13)" stroke="none"/>
  <path d="M52.0,158.0 L52.0,151.7 L78.3,151.7 L78.3,132.7 L104.5,132.7 L104.5,107.4 L130.8,107.4 L130.8,90.6 L157.0,90.6 L157.0,90.6 L183.3,90.6 L183.3,104.1 L209.6,104.1 L209.6,122.1 L235.8,122.1 L235.8,137.5 L262.1,137.5 L262.1,147.7 L288.3,147.7 L288.3,153.4 L314.6,153.4 L314.6,156.2 L340.9,156.2 L340.9,157.3 L367.1,157.3 L367.1,157.8 L393.4,157.8 L393.4,157.9 L419.7,157.9 L419.7,158.0 L445.9,158.0 L445.9,158.0 L472.2,158.0 L472.2,158.0 L498.4,158.0 L498.4,158.0 L524.7,158.0 L524.7,158.0 L551.0,158.0 L551.0,158.0 L577.2,158.0 L577.2,158.0 L603.5,158.0 L603.5,158.0 L629.7,158.0 L629.7,158.0 L656.0,158.0 L656.0,158.0" fill="none" stroke="#2f9e8f" stroke-width="1.7" stroke-linejoin="round"/>
  <path d="M52.0,158.0 L52.0,158.0 L78.3,158.0 L78.3,157.8 L104.5,157.8 L104.5,157.2 L130.8,157.2 L130.8,155.4 L157.0,155.4 L157.0,151.5 L183.3,151.5 L183.3,144.9 L209.6,144.9 L209.6,136.2 L235.8,136.2 L235.8,126.9 L262.1,126.9 L262.1,119.2 L288.3,119.2 L288.3,114.8 L314.6,114.8 L314.6,114.8 L340.9,114.8 L340.9,118.8 L367.1,118.8 L367.1,125.3 L393.4,125.3 L393.4,132.8 L419.7,132.8 L419.7,140.0 L445.9,140.0 L445.9,146.0 L472.2,146.0 L472.2,150.5 L498.4,150.5 L498.4,153.6 L524.7,153.6 L524.7,155.6 L551.0,155.6 L551.0,156.7 L577.2,156.7 L577.2,157.4 L603.5,157.4 L603.5,157.7 L629.7,157.7 L629.7,157.9 L656.0,157.9 L656.0,158.0" fill="none" stroke="#8156a6" stroke-width="1.7" stroke-dasharray="2 3" stroke-linejoin="round"/>
  <rect x="52.0" y="206" width="9" height="9" rx="2" fill="rgba(176,137,94,.30)" stroke="#b0895e" stroke-opacity=".85"/>
  <text x="66.0" y="214" font-size="10.5" fill="currentColor" opacity=".68">average 1 per hour</text>
  <rect x="194.2" y="206" width="9" height="9" rx="2" fill="rgba(47,158,143,.30)" stroke="#2f9e8f" stroke-opacity=".85"/>
  <text x="208.2" y="214" font-size="10.5" fill="currentColor" opacity=".68">average 4 per hour</text>
  <rect x="336.4" y="206" width="9" height="9" rx="2" fill="rgba(129,86,166,.30)" stroke="#8156a6" stroke-opacity=".85"/>
  <text x="350.4" y="214" font-size="10.5" fill="currentColor" opacity=".68">average 10 per hour</text>
  <text x="52" y="194" font-size="10.5" fill="currentColor" opacity=".62" text-anchor="start">How many arrivals land in one hour at three long-run averages. The spread widens as the average rises.</text>
</svg>
<!-- /diagram -->

The Poisson distribution models the count of events that occur at a constant rate over a period of time or space. It has one parameter: the average count during that period—and in this distribution, the mean and variance are equal.

**Examples:** emails in an hour · typos on a page

### Negative binomial

<!-- diagram:nbinom -->
<svg viewBox="0 0 680 226" width="680" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Negative binomial compared with Poisson at the same average" style="max-width:100%;height:auto">
  <line x1="52" y1="158" x2="656" y2="158" stroke="rgba(130,130,130,.35)"/>
  <line x1="63.2" y1="158" x2="63.2" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="63.2" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">0</text>
  <line x1="107.9" y1="158" x2="107.9" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="107.9" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">2</text>
  <line x1="152.7" y1="158" x2="152.7" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="152.7" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">4</text>
  <line x1="197.4" y1="158" x2="197.4" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="197.4" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">6</text>
  <line x1="242.1" y1="158" x2="242.1" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="242.1" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">8</text>
  <line x1="286.9" y1="158" x2="286.9" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="286.9" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">10</text>
  <line x1="331.6" y1="158" x2="331.6" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="331.6" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">12</text>
  <line x1="376.4" y1="158" x2="376.4" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="376.4" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">14</text>
  <line x1="421.1" y1="158" x2="421.1" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="421.1" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">16</text>
  <line x1="465.9" y1="158" x2="465.9" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="465.9" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">18</text>
  <line x1="510.6" y1="158" x2="510.6" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="510.6" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">20</text>
  <line x1="555.3" y1="158" x2="555.3" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="555.3" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">22</text>
  <line x1="600.1" y1="158" x2="600.1" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="600.1" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">24</text>
  <line x1="644.8" y1="158" x2="644.8" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="644.8" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">26</text>
  <text x="4" y="16" font-size="9" fill="currentColor" opacity=".45" text-anchor="start" letter-spacing=".06em">chance</text>
  <path d="M52.0,158.0 L52.0,156.3 L74.4,156.3 L74.4,147.7 L96.7,147.7 L96.7,127.2 L119.1,127.2 L119.1,96.4 L141.5,96.4 L141.5,65.6 L163.9,65.6 L163.9,47.2 L186.2,47.2 L186.2,47.2 L208.6,47.2 L208.6,63.0 L231.0,63.0 L231.0,86.8 L253.3,86.8 L253.3,110.5 L275.7,110.5 L275.7,129.5 L298.1,129.5 L298.1,142.5 L320.4,142.5 L320.4,150.2 L342.8,150.2 L342.8,154.4 L365.2,154.4 L365.2,156.5 L387.6,156.5 L387.6,157.4 L409.9,157.4 L409.9,157.8 L432.3,157.8 L432.3,157.9 L454.7,157.9 L454.7,158.0 L477.0,158.0 L477.0,158.0 L499.4,158.0 L499.4,158.0 L521.8,158.0 L521.8,158.0 L544.1,158.0 L544.1,158.0 L566.5,158.0 L566.5,158.0 L588.9,158.0 L588.9,158.0 L611.3,158.0 L611.3,158.0 L633.6,158.0 L633.6,158.0 L656.0,158.0 L656.0,158.0" fill="none" stroke="#2f9e8f" stroke-width="1.5" stroke-dasharray="5 4" stroke-linejoin="round"/>
  <path d="M52.0,158.0 L52.0,96.3 L74.4,96.3 L74.4,83.9 L96.7,83.9 L96.7,83.9 L119.1,83.9 L119.1,88.9 L141.5,88.9 L141.5,95.8 L163.9,95.8 L163.9,103.3 L186.2,103.3 L186.2,110.6 L208.6,110.6 L208.6,117.3 L231.0,117.3 L231.0,123.4 L253.3,123.4 L253.3,128.8 L275.7,128.8 L275.7,133.5 L298.1,133.5 L298.1,137.5 L320.4,137.5 L320.4,140.9 L342.8,140.9 L342.8,143.8 L365.2,143.8 L365.2,146.2 L387.6,146.2 L387.6,148.3 L409.9,148.3 L409.9,150.0 L432.3,150.0 L432.3,151.4 L454.7,151.4 L454.7,152.6 L477.0,152.6 L477.0,153.5 L499.4,153.5 L499.4,154.3 L521.8,154.3 L521.8,155.0 L544.1,155.0 L544.1,155.5 L566.5,155.5 L566.5,156.0 L588.9,156.0 L588.9,156.4 L611.3,156.4 L611.3,156.7 L633.6,156.7 L633.6,156.9 L656.0,156.9 L656.0,158.0 Z" fill="rgba(198,146,52,0.13)" stroke="none"/>
  <path d="M52.0,158.0 L52.0,96.3 L74.4,96.3 L74.4,83.9 L96.7,83.9 L96.7,83.9 L119.1,83.9 L119.1,88.9 L141.5,88.9 L141.5,95.8 L163.9,95.8 L163.9,103.3 L186.2,103.3 L186.2,110.6 L208.6,110.6 L208.6,117.3 L231.0,117.3 L231.0,123.4 L253.3,123.4 L253.3,128.8 L275.7,128.8 L275.7,133.5 L298.1,133.5 L298.1,137.5 L320.4,137.5 L320.4,140.9 L342.8,140.9 L342.8,143.8 L365.2,143.8 L365.2,146.2 L387.6,146.2 L387.6,148.3 L409.9,148.3 L409.9,150.0 L432.3,150.0 L432.3,151.4 L454.7,151.4 L454.7,152.6 L477.0,152.6 L477.0,153.5 L499.4,153.5 L499.4,154.3 L521.8,154.3 L521.8,155.0 L544.1,155.0 L544.1,155.5 L566.5,155.5 L566.5,156.0 L588.9,156.0 L588.9,156.4 L611.3,156.4 L611.3,156.7 L633.6,156.7 L633.6,156.9 L656.0,156.9 L656.0,158.0" fill="none" stroke="#c69234" stroke-width="1.7" stroke-linejoin="round"/>
  <rect x="52.0" y="206" width="9" height="9" rx="2" fill="rgba(47,158,143,.30)" stroke="#2f9e8f" stroke-opacity=".85"/>
  <text x="66.0" y="214" font-size="10.5" fill="currentColor" opacity=".68">Poisson, average 6</text>
  <rect x="194.2" y="206" width="9" height="9" rx="2" fill="rgba(198,146,52,.30)" stroke="#c69234" stroke-opacity=".85"/>
  <text x="208.2" y="214" font-size="10.5" fill="currentColor" opacity=".68">negative binomial, average 6</text>
  <text x="52" y="194" font-size="10.5" fill="currentColor" opacity=".62" text-anchor="start">Both average six messages a day. The gold shape has far more silent days and far more twenty-message days.</text>
</svg>
<!-- /diagram -->

The Negative binomial distribution describes event counts in a period when the underlying rate varies from one period to the next. When rates vary this way, you get both more zero-count periods and more very large counts than a Poisson distribution with the same average—the spread is wider. This distribution has two parameters: the average count and how much wider the counts run compared to Poisson with that average. The same distribution also describes the number of failures before you achieve a fixed number of successes in repeated yes-or-no trials—these are two views of the same mathematical shape.

**Examples:** messages sent per day · page views per day

### Geometric

<!-- diagram:geometric -->
<svg viewBox="0 0 680 226" width="680" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Geometric distribution with p equals 0.25" style="max-width:100%;height:auto">
  <line x1="52" y1="158" x2="656" y2="158" stroke="rgba(130,130,130,.35)"/>
  <line x1="64.6" y1="158" x2="64.6" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="64.6" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">1</text>
  <line x1="114.9" y1="158" x2="114.9" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="114.9" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">3</text>
  <line x1="165.3" y1="158" x2="165.3" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="165.3" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">5</text>
  <line x1="215.6" y1="158" x2="215.6" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="215.6" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">7</text>
  <line x1="265.9" y1="158" x2="265.9" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="265.9" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">9</text>
  <line x1="316.2" y1="158" x2="316.2" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="316.2" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">11</text>
  <line x1="366.6" y1="158" x2="366.6" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="366.6" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">13</text>
  <line x1="416.9" y1="158" x2="416.9" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="416.9" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">15</text>
  <line x1="467.2" y1="158" x2="467.2" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="467.2" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">17</text>
  <line x1="517.6" y1="158" x2="517.6" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="517.6" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">19</text>
  <line x1="567.9" y1="158" x2="567.9" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="567.9" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">21</text>
  <line x1="618.3" y1="158" x2="618.3" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="618.3" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">23</text>
  <text x="4" y="16" font-size="9" fill="currentColor" opacity=".45" text-anchor="start" letter-spacing=".06em">chance</text>
  <path d="M52.0,158.0 L52.0,30.2 L77.2,30.2 L77.2,62.2 L102.3,62.2 L102.3,86.1 L127.5,86.1 L127.5,104.1 L152.7,104.1 L152.7,117.6 L177.8,117.6 L177.8,127.7 L203.0,127.7 L203.0,135.3 L228.2,135.3 L228.2,140.9 L253.3,140.9 L253.3,145.2 L278.5,145.2 L278.5,148.4 L303.7,148.4 L303.7,150.8 L328.8,150.8 L328.8,152.6 L354.0,152.6 L354.0,154.0 L379.2,154.0 L379.2,155.0 L404.3,155.0 L404.3,155.7 L429.5,155.7 L429.5,156.3 L454.7,156.3 L454.7,156.7 L479.8,156.7 L479.8,157.0 L505.0,157.0 L505.0,157.3 L530.2,157.3 L530.2,157.5 L555.3,157.5 L555.3,157.6 L580.5,157.6 L580.5,157.7 L605.7,157.7 L605.7,157.8 L630.8,157.8 L630.8,157.8 L656.0,157.8 L656.0,158.0 Z" fill="rgba(47,158,143,0.13)" stroke="none"/>
  <path d="M52.0,158.0 L52.0,30.2 L77.2,30.2 L77.2,62.2 L102.3,62.2 L102.3,86.1 L127.5,86.1 L127.5,104.1 L152.7,104.1 L152.7,117.6 L177.8,117.6 L177.8,127.7 L203.0,127.7 L203.0,135.3 L228.2,135.3 L228.2,140.9 L253.3,140.9 L253.3,145.2 L278.5,145.2 L278.5,148.4 L303.7,148.4 L303.7,150.8 L328.8,150.8 L328.8,152.6 L354.0,152.6 L354.0,154.0 L379.2,154.0 L379.2,155.0 L404.3,155.0 L404.3,155.7 L429.5,155.7 L429.5,156.3 L454.7,156.3 L454.7,156.7 L479.8,156.7 L479.8,157.0 L505.0,157.0 L505.0,157.3 L530.2,157.3 L530.2,157.5 L555.3,157.5 L555.3,157.6 L580.5,157.6 L580.5,157.7 L605.7,157.7 L605.7,157.8 L630.8,157.8 L630.8,157.8 L656.0,157.8 L656.0,158.0" fill="none" stroke="#2f9e8f" stroke-width="1.7" stroke-linejoin="round"/>
  <text x="52" y="194" font-size="10.5" fill="currentColor" opacity=".62" text-anchor="start">Tries until the first yes, when each try has a 25 percent chance. The first try is the most likely place to succeed.</text>
</svg>
<!-- /diagram -->

The Geometric distribution models the number of trials until the first success. It has one parameter: the probability of success on each trial.

**Examples:** retries until a download works · applications until an offer

## A length of waiting

These distributions describe how long you wait for an event or collection of events.

### Exponential

<!-- diagram:exponential -->
<svg viewBox="0 0 680 226" width="680" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Exponential distribution of waiting times" style="max-width:100%;height:auto">
  <line x1="52" y1="158" x2="656" y2="158" stroke="rgba(130,130,130,.35)"/>
  <line x1="52.0" y1="158" x2="52.0" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="52.0" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">0</text>
  <line x1="172.8" y1="158" x2="172.8" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="172.8" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">1× average</text>
  <line x1="293.6" y1="158" x2="293.6" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="293.6" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">2×</text>
  <line x1="414.4" y1="158" x2="414.4" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="414.4" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">3×</text>
  <line x1="535.2" y1="158" x2="535.2" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="535.2" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">4×</text>
  <line x1="656.0" y1="158" x2="656.0" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="656.0" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">5×</text>
  <text x="4" y="16" font-size="9" fill="currentColor" opacity=".45" text-anchor="start" letter-spacing=".06em">density</text>
  <path d="M52.0,20.0 L57.5,26.1 L63.0,32.0 L68.5,37.6 L74.0,42.9 L79.5,48.1 L84.9,52.9 L90.4,57.6 L95.9,62.1 L101.4,66.3 L106.9,70.4 L112.4,74.3 L117.9,78.0 L123.4,81.6 L128.9,85.0 L134.4,88.2 L139.9,91.3 L145.3,94.3 L150.8,97.1 L156.3,99.8 L161.8,102.4 L167.3,104.9 L172.8,107.2 L178.3,109.5 L183.8,111.6 L189.3,113.7 L194.8,115.7 L200.3,117.6 L205.7,119.4 L211.2,121.1 L216.7,122.7 L222.2,124.3 L227.7,125.8 L233.2,127.2 L238.7,128.6 L244.2,129.9 L249.7,131.1 L255.2,132.3 L260.7,133.5 L266.1,134.6 L271.6,135.6 L277.1,136.6 L282.6,137.5 L288.1,138.5 L293.6,139.3 L299.1,140.2 L304.6,140.9 L310.1,141.7 L315.6,142.4 L321.1,143.1 L326.5,143.8 L332.0,144.4 L337.5,145.0 L343.0,145.6 L348.5,146.1 L354.0,146.7 L359.5,147.2 L365.0,147.7 L370.5,148.1 L376.0,148.6 L381.5,149.0 L386.9,149.4 L392.4,149.8 L397.9,150.1 L403.4,150.5 L408.9,150.8 L414.4,151.1 L419.9,151.4 L425.4,151.7 L430.9,152.0 L436.4,152.3 L441.9,152.5 L447.3,152.8 L452.8,153.0 L458.3,153.2 L463.8,153.4 L469.3,153.6 L474.8,153.8 L480.3,154.0 L485.8,154.2 L491.3,154.4 L496.8,154.5 L502.3,154.7 L507.7,154.8 L513.2,155.0 L518.7,155.1 L524.2,155.2 L529.7,155.4 L535.2,155.5 L540.7,155.6 L546.2,155.7 L551.7,155.8 L557.2,155.9 L562.7,156.0 L568.1,156.1 L573.6,156.2 L579.1,156.2 L584.6,156.3 L590.1,156.4 L595.6,156.5 L601.1,156.5 L606.6,156.6 L612.1,156.7 L617.6,156.7 L623.1,156.8 L628.5,156.8 L634.0,156.9 L639.5,156.9 L645.0,157.0 L650.5,157.0 L656.0,157.1 L656.0,158 L52.0,158 Z" fill="rgba(47,158,143,0.13)" stroke="none"/>
  <path d="M52.0,20.0 L57.5,26.1 L63.0,32.0 L68.5,37.6 L74.0,42.9 L79.5,48.1 L84.9,52.9 L90.4,57.6 L95.9,62.1 L101.4,66.3 L106.9,70.4 L112.4,74.3 L117.9,78.0 L123.4,81.6 L128.9,85.0 L134.4,88.2 L139.9,91.3 L145.3,94.3 L150.8,97.1 L156.3,99.8 L161.8,102.4 L167.3,104.9 L172.8,107.2 L178.3,109.5 L183.8,111.6 L189.3,113.7 L194.8,115.7 L200.3,117.6 L205.7,119.4 L211.2,121.1 L216.7,122.7 L222.2,124.3 L227.7,125.8 L233.2,127.2 L238.7,128.6 L244.2,129.9 L249.7,131.1 L255.2,132.3 L260.7,133.5 L266.1,134.6 L271.6,135.6 L277.1,136.6 L282.6,137.5 L288.1,138.5 L293.6,139.3 L299.1,140.2 L304.6,140.9 L310.1,141.7 L315.6,142.4 L321.1,143.1 L326.5,143.8 L332.0,144.4 L337.5,145.0 L343.0,145.6 L348.5,146.1 L354.0,146.7 L359.5,147.2 L365.0,147.7 L370.5,148.1 L376.0,148.6 L381.5,149.0 L386.9,149.4 L392.4,149.8 L397.9,150.1 L403.4,150.5 L408.9,150.8 L414.4,151.1 L419.9,151.4 L425.4,151.7 L430.9,152.0 L436.4,152.3 L441.9,152.5 L447.3,152.8 L452.8,153.0 L458.3,153.2 L463.8,153.4 L469.3,153.6 L474.8,153.8 L480.3,154.0 L485.8,154.2 L491.3,154.4 L496.8,154.5 L502.3,154.7 L507.7,154.8 L513.2,155.0 L518.7,155.1 L524.2,155.2 L529.7,155.4 L535.2,155.5 L540.7,155.6 L546.2,155.7 L551.7,155.8 L557.2,155.9 L562.7,156.0 L568.1,156.1 L573.6,156.2 L579.1,156.2 L584.6,156.3 L590.1,156.4 L595.6,156.5 L601.1,156.5 L606.6,156.6 L612.1,156.7 L617.6,156.7 L623.1,156.8 L628.5,156.8 L634.0,156.9 L639.5,156.9 L645.0,157.0 L650.5,157.0 L656.0,157.1" fill="none" stroke="#2f9e8f" stroke-width="1.8" stroke-linejoin="round"/>
  <line x1="135.7" y1="158" x2="135.7" y2="76" stroke="#2f9e8f" stroke-opacity=".55" stroke-dasharray="3 3"/>
  <text x="143.7" y="74" font-size="10.5" fill="currentColor" opacity=".62">half of all gaps are shorter than this</text>
  <text x="52" y="194" font-size="10.5" fill="currentColor" opacity=".62" text-anchor="start">The gap between one arrival and the next when arrivals are Poisson. Short gaps are the common case.</text>
</svg>
<!-- /diagram -->

The Exponential distribution models the time until a single event occurs in a process where events happen at a constant rate. It has one parameter: the rate at which events occur.

**Examples:** the wait for the next email · the gap between two customers

### Gamma

<!-- diagram:gamma -->
<svg viewBox="0 0 680 226" width="680" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Gamma distribution for waiting on the first, second and fifth arrival" style="max-width:100%;height:auto">
  <line x1="52" y1="158" x2="656" y2="158" stroke="rgba(130,130,130,.35)"/>
  <line x1="52.0" y1="158" x2="52.0" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="52.0" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">0</text>
  <line x1="138.3" y1="158" x2="138.3" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="138.3" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">2</text>
  <line x1="224.6" y1="158" x2="224.6" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="224.6" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">4</text>
  <line x1="310.9" y1="158" x2="310.9" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="310.9" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">6</text>
  <line x1="397.1" y1="158" x2="397.1" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="397.1" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">8</text>
  <line x1="483.4" y1="158" x2="483.4" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="483.4" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">10</text>
  <line x1="569.7" y1="158" x2="569.7" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="569.7" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">12</text>
  <line x1="656.0" y1="158" x2="656.0" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="656.0" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">14</text>
  <text x="4" y="16" font-size="9" fill="currentColor" opacity=".45" text-anchor="start" letter-spacing=".06em">density</text>
  <path d="M52.0,158.0 L57.5,119.3 L63.0,89.9 L68.5,68.1 L74.0,52.4 L79.5,41.8 L84.9,35.2 L90.4,31.9 L95.9,31.1 L101.4,32.3 L106.9,35.0 L112.4,38.9 L117.9,43.6 L123.4,48.9 L128.9,54.5 L134.4,60.4 L139.9,66.3 L145.3,72.2 L150.8,78.0 L156.3,83.7 L161.8,89.1 L167.3,94.3 L172.8,99.3 L178.3,103.9 L183.8,108.3 L189.3,112.4 L194.8,116.3 L200.3,119.8 L205.7,123.2 L211.2,126.2 L216.7,129.1 L222.2,131.7 L227.7,134.1 L233.2,136.3 L238.7,138.3 L244.2,140.1 L249.7,141.8 L255.2,143.4 L260.7,144.8 L266.1,146.0 L271.6,147.2 L277.1,148.2 L282.6,149.2 L288.1,150.1 L293.6,150.9 L299.1,151.6 L304.6,152.2 L310.1,152.8 L315.6,153.3 L321.1,153.8 L326.5,154.2 L332.0,154.6 L337.5,154.9 L343.0,155.3 L348.5,155.5 L354.0,155.8 L359.5,156.0 L365.0,156.2 L370.5,156.4 L376.0,156.6 L381.5,156.7 L386.9,156.9 L392.4,157.0 L397.9,157.1 L403.4,157.2 L408.9,157.3 L414.4,157.3 L419.9,157.4 L425.4,157.5 L430.9,157.5 L436.4,157.6 L441.9,157.6 L447.3,157.7 L452.8,157.7 L458.3,157.7 L463.8,157.8 L469.3,157.8 L474.8,157.8 L480.3,157.8 L485.8,157.9 L491.3,157.9 L496.8,157.9 L502.3,157.9 L507.7,157.9 L513.2,157.9 L518.7,157.9 L524.2,157.9 L529.7,157.9 L535.2,157.9 L540.7,158.0 L546.2,158.0 L551.7,158.0 L557.2,158.0 L562.7,158.0 L568.1,158.0 L573.6,158.0 L579.1,158.0 L584.6,158.0 L590.1,158.0 L595.6,158.0 L601.1,158.0 L606.6,158.0 L612.1,158.0 L617.6,158.0 L623.1,158.0 L628.5,158.0 L634.0,158.0 L639.5,158.0 L645.0,158.0 L650.5,158.0 L656.0,158.0 L656.0,158 L52.0,158 Z" fill="rgba(47,158,143,0.12)" stroke="none"/>
  <path d="M52.0,158.0 L57.5,119.3 L63.0,89.9 L68.5,68.1 L74.0,52.4 L79.5,41.8 L84.9,35.2 L90.4,31.9 L95.9,31.1 L101.4,32.3 L106.9,35.0 L112.4,38.9 L117.9,43.6 L123.4,48.9 L128.9,54.5 L134.4,60.4 L139.9,66.3 L145.3,72.2 L150.8,78.0 L156.3,83.7 L161.8,89.1 L167.3,94.3 L172.8,99.3 L178.3,103.9 L183.8,108.3 L189.3,112.4 L194.8,116.3 L200.3,119.8 L205.7,123.2 L211.2,126.2 L216.7,129.1 L222.2,131.7 L227.7,134.1 L233.2,136.3 L238.7,138.3 L244.2,140.1 L249.7,141.8 L255.2,143.4 L260.7,144.8 L266.1,146.0 L271.6,147.2 L277.1,148.2 L282.6,149.2 L288.1,150.1 L293.6,150.9 L299.1,151.6 L304.6,152.2 L310.1,152.8 L315.6,153.3 L321.1,153.8 L326.5,154.2 L332.0,154.6 L337.5,154.9 L343.0,155.3 L348.5,155.5 L354.0,155.8 L359.5,156.0 L365.0,156.2 L370.5,156.4 L376.0,156.6 L381.5,156.7 L386.9,156.9 L392.4,157.0 L397.9,157.1 L403.4,157.2 L408.9,157.3 L414.4,157.3 L419.9,157.4 L425.4,157.5 L430.9,157.5 L436.4,157.6 L441.9,157.6 L447.3,157.7 L452.8,157.7 L458.3,157.7 L463.8,157.8 L469.3,157.8 L474.8,157.8 L480.3,157.8 L485.8,157.9 L491.3,157.9 L496.8,157.9 L502.3,157.9 L507.7,157.9 L513.2,157.9 L518.7,157.9 L524.2,157.9 L529.7,157.9 L535.2,157.9 L540.7,158.0 L546.2,158.0 L551.7,158.0 L557.2,158.0 L562.7,158.0 L568.1,158.0 L573.6,158.0 L579.1,158.0 L584.6,158.0 L590.1,158.0 L595.6,158.0 L601.1,158.0 L606.6,158.0 L612.1,158.0 L617.6,158.0 L623.1,158.0 L628.5,158.0 L634.0,158.0 L639.5,158.0 L645.0,158.0 L650.5,158.0 L656.0,158.0" fill="none" stroke="#2f9e8f" stroke-width="1.8" stroke-linejoin="round"/>
  <path d="M52.0,158.0 L57.5,155.5 L63.0,149.3 L68.5,140.8 L74.0,131.1 L79.5,121.0 L84.9,111.1 L90.4,101.8 L95.9,93.4 L101.4,86.0 L106.9,79.7 L112.4,74.6 L117.9,70.6 L123.4,67.7 L128.9,65.8 L134.4,64.8 L139.9,64.6 L145.3,65.2 L150.8,66.4 L156.3,68.1 L161.8,70.3 L167.3,72.9 L172.8,75.8 L178.3,78.9 L183.8,82.1 L189.3,85.5 L194.8,89.0 L200.3,92.4 L205.7,95.9 L211.2,99.4 L216.7,102.8 L222.2,106.1 L227.7,109.3 L233.2,112.4 L238.7,115.4 L244.2,118.2 L249.7,120.9 L255.2,123.5 L260.7,126.0 L266.1,128.3 L271.6,130.5 L277.1,132.6 L282.6,134.5 L288.1,136.3 L293.6,138.0 L299.1,139.6 L304.6,141.0 L310.1,142.4 L315.6,143.7 L321.1,144.9 L326.5,146.0 L332.0,147.0 L337.5,147.9 L343.0,148.8 L348.5,149.6 L354.0,150.3 L359.5,151.0 L365.0,151.6 L370.5,152.1 L376.0,152.7 L381.5,153.1 L386.9,153.6 L392.4,154.0 L397.9,154.3 L403.4,154.7 L408.9,155.0 L414.4,155.3 L419.9,155.5 L425.4,155.7 L430.9,156.0 L436.4,156.1 L441.9,156.3 L447.3,156.5 L452.8,156.6 L458.3,156.8 L463.8,156.9 L469.3,157.0 L474.8,157.1 L480.3,157.2 L485.8,157.3 L491.3,157.3 L496.8,157.4 L502.3,157.4 L507.7,157.5 L513.2,157.6 L518.7,157.6 L524.2,157.6 L529.7,157.7 L535.2,157.7 L540.7,157.7 L546.2,157.8 L551.7,157.8 L557.2,157.8 L562.7,157.8 L568.1,157.8 L573.6,157.9 L579.1,157.9 L584.6,157.9 L590.1,157.9 L595.6,157.9 L601.1,157.9 L606.6,157.9 L612.1,157.9 L617.6,157.9 L623.1,157.9 L628.5,158.0 L634.0,158.0 L639.5,158.0 L645.0,158.0 L650.5,158.0 L656.0,158.0" fill="none" stroke="#b0895e" stroke-width="1.8" stroke-dasharray="5 4" stroke-linejoin="round"/>
  <path d="M52.0,158.0 L57.5,158.0 L63.0,158.0 L68.5,157.8 L74.0,157.4 L79.5,156.8 L84.9,155.7 L90.4,154.3 L95.9,152.4 L101.4,150.1 L106.9,147.4 L112.4,144.4 L117.9,141.0 L123.4,137.4 L128.9,133.6 L134.4,129.7 L139.9,125.7 L145.3,121.8 L150.8,117.9 L156.3,114.2 L161.8,110.7 L167.3,107.3 L172.8,104.3 L178.3,101.5 L183.8,99.0 L189.3,96.8 L194.8,95.0 L200.3,93.5 L205.7,92.3 L211.2,91.4 L216.7,90.9 L222.2,90.6 L227.7,90.6 L233.2,90.9 L238.7,91.4 L244.2,92.2 L249.7,93.2 L255.2,94.3 L260.7,95.6 L266.1,97.0 L271.6,98.6 L277.1,100.3 L282.6,102.0 L288.1,103.8 L293.6,105.7 L299.1,107.6 L304.6,109.6 L310.1,111.5 L315.6,113.5 L321.1,115.4 L326.5,117.4 L332.0,119.3 L337.5,121.2 L343.0,123.0 L348.5,124.8 L354.0,126.5 L359.5,128.2 L365.0,129.9 L370.5,131.4 L376.0,133.0 L381.5,134.4 L386.9,135.8 L392.4,137.1 L397.9,138.4 L403.4,139.6 L408.9,140.8 L414.4,141.9 L419.9,143.0 L425.4,143.9 L430.9,144.9 L436.4,145.8 L441.9,146.6 L447.3,147.4 L452.8,148.1 L458.3,148.8 L463.8,149.5 L469.3,150.1 L474.8,150.6 L480.3,151.2 L485.8,151.7 L491.3,152.2 L496.8,152.6 L502.3,153.0 L507.7,153.4 L513.2,153.7 L518.7,154.1 L524.2,154.4 L529.7,154.6 L535.2,154.9 L540.7,155.2 L546.2,155.4 L551.7,155.6 L557.2,155.8 L562.7,156.0 L568.1,156.1 L573.6,156.3 L579.1,156.4 L584.6,156.5 L590.1,156.7 L595.6,156.8 L601.1,156.9 L606.6,157.0 L612.1,157.1 L617.6,157.1 L623.1,157.2 L628.5,157.3 L634.0,157.3 L639.5,157.4 L645.0,157.4 L650.5,157.5 L656.0,157.5" fill="none" stroke="#8156a6" stroke-width="1.8" stroke-dasharray="2 3" stroke-linejoin="round"/>
  <rect x="52.0" y="206" width="9" height="9" rx="2" fill="rgba(47,158,143,.30)" stroke="#2f9e8f" stroke-opacity=".85"/>
  <text x="66.0" y="214" font-size="10.5" fill="currentColor" opacity=".68">wait for the 2nd arrival</text>
  <rect x="229.6" y="206" width="9" height="9" rx="2" fill="rgba(176,137,94,.30)" stroke="#b0895e" stroke-opacity=".85"/>
  <text x="243.6" y="214" font-size="10.5" fill="currentColor" opacity=".68">wait for the 3rd</text>
  <rect x="360.0" y="206" width="9" height="9" rx="2" fill="rgba(129,86,166,.30)" stroke="#8156a6" stroke-opacity=".85"/>
  <text x="374.0" y="214" font-size="10.5" fill="currentColor" opacity=".68">wait for the 5th</text>
  <text x="52" y="194" font-size="10.5" fill="currentColor" opacity=".62" text-anchor="start">Waiting for several arrivals instead of one. Each extra arrival pushes the peak right and evens the shape out.</text>
</svg>
<!-- /diagram -->

The Gamma distribution models the time until a fixed number of events occur in a constant-rate process. It has two parameters: the number of events you are waiting for and the rate at which events occur.

**Examples:** the wait for the tenth customer · a batch of ten jobs finishing

### Weibull

<!-- diagram:weibull -->
<svg viewBox="0 0 680 226" width="680" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Weibull distribution at three shape settings" style="max-width:100%;height:auto">
  <line x1="52" y1="158" x2="656" y2="158" stroke="rgba(130,130,130,.35)"/>
  <line x1="52.0" y1="158" x2="52.0" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="52.0" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">0</text>
  <line x1="152.7" y1="158" x2="152.7" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="152.7" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">0.5</text>
  <line x1="253.3" y1="158" x2="253.3" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="253.3" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">1</text>
  <line x1="354.0" y1="158" x2="354.0" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="354.0" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">1.5</text>
  <line x1="454.7" y1="158" x2="454.7" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="454.7" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">2</text>
  <line x1="555.3" y1="158" x2="555.3" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="555.3" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">2.5</text>
  <line x1="656.0" y1="158" x2="656.0" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="656.0" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">3</text>
  <text x="4" y="16" font-size="9" fill="currentColor" opacity=".45" text-anchor="start" letter-spacing=".06em">density</text>
  <path d="M52.0,35.9 L57.5,35.9 L63.0,35.9 L68.5,50.4 L74.0,63.1 L79.5,72.3 L84.9,79.6 L90.4,85.5 L95.9,90.5 L101.4,94.7 L106.9,98.4 L112.4,101.7 L117.9,104.6 L123.4,107.2 L128.9,109.6 L134.4,111.8 L139.9,113.8 L145.3,115.6 L150.8,117.3 L156.3,118.9 L161.8,120.4 L167.3,121.7 L172.8,123.0 L178.3,124.2 L183.8,125.4 L189.3,126.5 L194.8,127.5 L200.3,128.5 L205.7,129.4 L211.2,130.3 L216.7,131.1 L222.2,131.9 L227.7,132.7 L233.2,133.4 L238.7,134.1 L244.2,134.7 L249.7,135.4 L255.2,136.0 L260.7,136.6 L266.1,137.1 L271.6,137.7 L277.1,138.2 L282.6,138.7 L288.1,139.2 L293.6,139.6 L299.1,140.1 L304.6,140.5 L310.1,140.9 L315.6,141.4 L321.1,141.7 L326.5,142.1 L332.0,142.5 L337.5,142.8 L343.0,143.2 L348.5,143.5 L354.0,143.8 L359.5,144.1 L365.0,144.4 L370.5,144.7 L376.0,145.0 L381.5,145.3 L386.9,145.6 L392.4,145.8 L397.9,146.1 L403.4,146.3 L408.9,146.6 L414.4,146.8 L419.9,147.0 L425.4,147.3 L430.9,147.5 L436.4,147.7 L441.9,147.9 L447.3,148.1 L452.8,148.3 L458.3,148.5 L463.8,148.6 L469.3,148.8 L474.8,149.0 L480.3,149.2 L485.8,149.3 L491.3,149.5 L496.8,149.7 L502.3,149.8 L507.7,150.0 L513.2,150.1 L518.7,150.3 L524.2,150.4 L529.7,150.5 L535.2,150.7 L540.7,150.8 L546.2,150.9 L551.7,151.1 L557.2,151.2 L562.7,151.3 L568.1,151.4 L573.6,151.5 L579.1,151.6 L584.6,151.7 L590.1,151.9 L595.6,152.0 L601.1,152.1 L606.6,152.2 L612.1,152.3 L617.6,152.4 L623.1,152.5 L628.5,152.5 L634.0,152.6 L639.5,152.7 L645.0,152.8 L650.5,152.9 L656.0,153.0" fill="none" stroke="#c69234" stroke-width="1.8" stroke-dasharray="5 4" stroke-linejoin="round"/>
  <path d="M52.0,76.8 L57.5,76.8 L63.0,76.8 L68.5,78.5 L74.0,80.7 L79.5,82.7 L84.9,84.8 L90.4,86.7 L95.9,88.7 L101.4,90.5 L106.9,92.3 L112.4,94.1 L117.9,95.8 L123.4,97.5 L128.9,99.1 L134.4,100.7 L139.9,102.2 L145.3,103.7 L150.8,105.2 L156.3,106.6 L161.8,108.0 L167.3,109.4 L172.8,110.7 L178.3,111.9 L183.8,113.2 L189.3,114.4 L194.8,115.6 L200.3,116.7 L205.7,117.8 L211.2,118.9 L216.7,119.9 L222.2,121.0 L227.7,122.0 L233.2,122.9 L238.7,123.9 L244.2,124.8 L249.7,125.7 L255.2,126.6 L260.7,127.4 L266.1,128.2 L271.6,129.0 L277.1,129.8 L282.6,130.6 L288.1,131.3 L293.6,132.0 L299.1,132.7 L304.6,133.4 L310.1,134.1 L315.6,134.7 L321.1,135.3 L326.5,135.9 L332.0,136.5 L337.5,137.1 L343.0,137.7 L348.5,138.2 L354.0,138.8 L359.5,139.3 L365.0,139.8 L370.5,140.3 L376.0,140.7 L381.5,141.2 L386.9,141.7 L392.4,142.1 L397.9,142.5 L403.4,142.9 L408.9,143.3 L414.4,143.7 L419.9,144.1 L425.4,144.5 L430.9,144.9 L436.4,145.2 L441.9,145.6 L447.3,145.9 L452.8,146.2 L458.3,146.5 L463.8,146.8 L469.3,147.1 L474.8,147.4 L480.3,147.7 L485.8,148.0 L491.3,148.3 L496.8,148.5 L502.3,148.8 L507.7,149.0 L513.2,149.3 L518.7,149.5 L524.2,149.7 L529.7,150.0 L535.2,150.2 L540.7,150.4 L546.2,150.6 L551.7,150.8 L557.2,151.0 L562.7,151.2 L568.1,151.4 L573.6,151.5 L579.1,151.7 L584.6,151.9 L590.1,152.0 L595.6,152.2 L601.1,152.4 L606.6,152.5 L612.1,152.7 L617.6,152.8 L623.1,152.9 L628.5,153.1 L634.0,153.2 L639.5,153.3 L645.0,153.5 L650.5,153.6 L656.0,153.7 L656.0,158 L52.0,158 Z" fill="rgba(91,108,176,0.1)" stroke="none"/>
  <path d="M52.0,76.8 L57.5,76.8 L63.0,76.8 L68.5,78.5 L74.0,80.7 L79.5,82.7 L84.9,84.8 L90.4,86.7 L95.9,88.7 L101.4,90.5 L106.9,92.3 L112.4,94.1 L117.9,95.8 L123.4,97.5 L128.9,99.1 L134.4,100.7 L139.9,102.2 L145.3,103.7 L150.8,105.2 L156.3,106.6 L161.8,108.0 L167.3,109.4 L172.8,110.7 L178.3,111.9 L183.8,113.2 L189.3,114.4 L194.8,115.6 L200.3,116.7 L205.7,117.8 L211.2,118.9 L216.7,119.9 L222.2,121.0 L227.7,122.0 L233.2,122.9 L238.7,123.9 L244.2,124.8 L249.7,125.7 L255.2,126.6 L260.7,127.4 L266.1,128.2 L271.6,129.0 L277.1,129.8 L282.6,130.6 L288.1,131.3 L293.6,132.0 L299.1,132.7 L304.6,133.4 L310.1,134.1 L315.6,134.7 L321.1,135.3 L326.5,135.9 L332.0,136.5 L337.5,137.1 L343.0,137.7 L348.5,138.2 L354.0,138.8 L359.5,139.3 L365.0,139.8 L370.5,140.3 L376.0,140.7 L381.5,141.2 L386.9,141.7 L392.4,142.1 L397.9,142.5 L403.4,142.9 L408.9,143.3 L414.4,143.7 L419.9,144.1 L425.4,144.5 L430.9,144.9 L436.4,145.2 L441.9,145.6 L447.3,145.9 L452.8,146.2 L458.3,146.5 L463.8,146.8 L469.3,147.1 L474.8,147.4 L480.3,147.7 L485.8,148.0 L491.3,148.3 L496.8,148.5 L502.3,148.8 L507.7,149.0 L513.2,149.3 L518.7,149.5 L524.2,149.7 L529.7,150.0 L535.2,150.2 L540.7,150.4 L546.2,150.6 L551.7,150.8 L557.2,151.0 L562.7,151.2 L568.1,151.4 L573.6,151.5 L579.1,151.7 L584.6,151.9 L590.1,152.0 L595.6,152.2 L601.1,152.4 L606.6,152.5 L612.1,152.7 L617.6,152.8 L623.1,152.9 L628.5,153.1 L634.0,153.2 L639.5,153.3 L645.0,153.5 L650.5,153.6 L656.0,153.7" fill="none" stroke="#5b6cb0" stroke-width="1.8" stroke-linejoin="round"/>
  <path d="M52.0,154.8 L57.5,154.8 L63.0,154.8 L68.5,153.0 L74.0,150.3 L79.5,147.2 L84.9,143.9 L90.4,140.3 L95.9,136.5 L101.4,132.5 L106.9,128.5 L112.4,124.3 L117.9,120.0 L123.4,115.8 L128.9,111.5 L134.4,107.3 L139.9,103.2 L145.3,99.2 L150.8,95.4 L156.3,91.7 L161.8,88.3 L167.3,85.1 L172.8,82.2 L178.3,79.6 L183.8,77.3 L189.3,75.3 L194.8,73.7 L200.3,72.4 L205.7,71.6 L211.2,71.0 L216.7,70.9 L222.2,71.1 L227.7,71.7 L233.2,72.6 L238.7,73.9 L244.2,75.4 L249.7,77.3 L255.2,79.4 L260.7,81.8 L266.1,84.4 L271.6,87.1 L277.1,90.0 L282.6,93.1 L288.1,96.2 L293.6,99.5 L299.1,102.7 L304.6,106.0 L310.1,109.3 L315.6,112.5 L321.1,115.7 L326.5,118.9 L332.0,121.9 L337.5,124.8 L343.0,127.6 L348.5,130.3 L354.0,132.8 L359.5,135.2 L365.0,137.5 L370.5,139.6 L376.0,141.5 L381.5,143.3 L386.9,145.0 L392.4,146.5 L397.9,147.9 L403.4,149.1 L408.9,150.2 L414.4,151.3 L419.9,152.2 L425.4,153.0 L430.9,153.7 L436.4,154.3 L441.9,154.9 L447.3,155.3 L452.8,155.7 L458.3,156.1 L463.8,156.4 L469.3,156.7 L474.8,156.9 L480.3,157.1 L485.8,157.3 L491.3,157.4 L496.8,157.5 L502.3,157.6 L507.7,157.7 L513.2,157.7 L518.7,157.8 L524.2,157.8 L529.7,157.9 L535.2,157.9 L540.7,157.9 L546.2,157.9 L551.7,157.9 L557.2,158.0 L562.7,158.0 L568.1,158.0 L573.6,158.0 L579.1,158.0 L584.6,158.0 L590.1,158.0 L595.6,158.0 L601.1,158.0 L606.6,158.0 L612.1,158.0 L617.6,158.0 L623.1,158.0 L628.5,158.0 L634.0,158.0 L639.5,158.0 L645.0,158.0 L650.5,158.0 L656.0,158.0" fill="none" stroke="#2f9e8f" stroke-width="1.8" stroke-dasharray="2 3" stroke-linejoin="round"/>
  <rect x="52.0" y="206" width="9" height="9" rx="2" fill="rgba(198,146,52,.30)" stroke="#c69234" stroke-opacity=".85"/>
  <text x="66.0" y="214" font-size="10.5" fill="currentColor" opacity=".68">k = 0.7, danger falls with age</text>
  <rect x="265.0" y="206" width="9" height="9" rx="2" fill="rgba(91,108,176,.30)" stroke="#5b6cb0" stroke-opacity=".85"/>
  <text x="279.0" y="214" font-size="10.5" fill="currentColor" opacity=".68">k = 1, danger flat</text>
  <rect x="407.2" y="206" width="9" height="9" rx="2" fill="rgba(47,158,143,.30)" stroke="#2f9e8f" stroke-opacity=".85"/>
  <text x="421.2" y="214" font-size="10.5" fill="currentColor" opacity=".68">k = 2.5, danger rises with age</text>
  <text x="52" y="194" font-size="10.5" fill="currentColor" opacity=".62" text-anchor="start">Time until something fails, with one dial for whether surviving this long makes the next moment safer or more dangerous.</text>
</svg>
<!-- /diagram -->

The Weibull distribution models the time until failure of a system, and handles situations where the failure rate changes over time. It has two parameters: a shape parameter that controls whether failures become more or less likely as time passes, and a scale parameter that sets the overall timespan.

**Examples:** the life of a hard drive · how long a subscription is kept

## A measured amount

These distributions describe continuous quantities like heights, weights, or errors.

### Normal

<!-- diagram:normal -->
<svg viewBox="0 0 680 226" width="680" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Normal distribution with standard deviation bands" style="max-width:100%;height:auto">
  <line x1="52" y1="158" x2="656" y2="158" stroke="rgba(130,130,130,.35)"/>
  <line x1="127.5" y1="158" x2="127.5" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="127.5" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">-3σ</text>
  <line x1="203.0" y1="158" x2="203.0" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="203.0" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">-2σ</text>
  <line x1="278.5" y1="158" x2="278.5" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="278.5" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">-1σ</text>
  <line x1="354.0" y1="158" x2="354.0" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="354.0" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">mean</text>
  <line x1="429.5" y1="158" x2="429.5" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="429.5" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">+1σ</text>
  <line x1="505.0" y1="158" x2="505.0" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="505.0" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">+2σ</text>
  <line x1="580.5" y1="158" x2="580.5" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="580.5" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">+3σ</text>
  <text x="4" y="16" font-size="9" fill="currentColor" opacity=".45" text-anchor="start" letter-spacing=".06em">density</text>
  <path d="M278.5,158 L278.5,74.3 L282.3,70.1 L286.1,66.0 L289.8,61.8 L293.6,57.8 L297.4,53.8 L301.1,50.0 L304.9,46.3 L308.7,42.7 L312.5,39.4 L316.2,36.2 L320.0,33.3 L323.8,30.6 L327.6,28.2 L331.4,26.1 L335.1,24.2 L338.9,22.7 L342.7,21.5 L346.4,20.7 L350.2,20.2 L354.0,20.0 L357.8,20.2 L361.5,20.7 L365.3,21.5 L369.1,22.7 L372.9,24.2 L376.6,26.1 L380.4,28.2 L384.2,30.6 L388.0,33.3 L391.8,36.2 L395.5,39.4 L399.3,42.7 L403.1,46.3 L406.9,50.0 L410.6,53.8 L414.4,57.8 L418.2,61.8 L422.0,66.0 L425.7,70.1 L429.5,74.3 L429.5,158 Z" fill="rgba(91,108,176,0.16)"/>
  <path d="M203.0,158 L203.0,139.3 L204.9,138.4 L206.8,137.4 L208.7,136.4 L210.6,135.3 L212.4,134.2 L214.3,133.1 L216.2,131.9 L218.1,130.7 L220.0,129.4 L221.9,128.2 L223.8,126.8 L225.6,125.5 L227.5,124.1 L229.4,122.6 L231.3,121.1 L233.2,119.6 L235.1,118.1 L237.0,116.5 L238.9,114.9 L240.8,113.2 L242.6,111.5 L244.5,109.8 L246.4,108.0 L248.3,106.2 L250.2,104.4 L252.1,102.5 L254.0,100.6 L255.9,98.7 L257.7,96.8 L259.6,94.8 L261.5,92.8 L263.4,90.8 L265.3,88.8 L267.2,86.8 L269.1,84.7 L270.9,82.6 L272.8,80.6 L274.7,78.5 L276.6,76.4 L278.5,74.3 L278.5,158 Z" fill="rgba(91,108,176,0.09)"/>
  <path d="M429.5,158 L429.5,74.3 L431.4,76.4 L433.3,78.5 L435.2,80.6 L437.0,82.6 L438.9,84.7 L440.8,86.8 L442.7,88.8 L444.6,90.8 L446.5,92.8 L448.4,94.8 L450.3,96.8 L452.1,98.7 L454.0,100.6 L455.9,102.5 L457.8,104.4 L459.7,106.2 L461.6,108.0 L463.5,109.8 L465.4,111.5 L467.2,113.2 L469.1,114.9 L471.0,116.5 L472.9,118.1 L474.8,119.6 L476.7,121.1 L478.6,122.6 L480.5,124.1 L482.4,125.5 L484.2,126.8 L486.1,128.2 L488.0,129.4 L489.9,130.7 L491.8,131.9 L493.7,133.1 L495.6,134.2 L497.5,135.3 L499.3,136.4 L501.2,137.4 L503.1,138.4 L505.0,139.3 L505.0,158 Z" fill="rgba(91,108,176,0.09)"/>
  <path d="M127.5,158 L127.5,156.5 L129.4,156.3 L131.3,156.2 L133.2,156.1 L135.1,155.9 L136.9,155.8 L138.8,155.6 L140.7,155.4 L142.6,155.3 L144.5,155.1 L146.4,154.9 L148.3,154.6 L150.1,154.4 L152.0,154.1 L153.9,153.9 L155.8,153.6 L157.7,153.3 L159.6,153.0 L161.5,152.7 L163.4,152.3 L165.2,151.9 L167.1,151.5 L169.0,151.1 L170.9,150.7 L172.8,150.3 L174.7,149.8 L176.6,149.3 L178.5,148.8 L180.4,148.2 L182.2,147.6 L184.1,147.0 L186.0,146.4 L187.9,145.7 L189.8,145.0 L191.7,144.3 L193.6,143.6 L195.4,142.8 L197.3,142.0 L199.2,141.1 L201.1,140.2 L203.0,139.3 L203.0,158 Z" fill="rgba(91,108,176,0.05)"/>
  <path d="M505.0,158 L505.0,139.3 L506.9,140.2 L508.8,141.1 L510.7,142.0 L512.5,142.8 L514.4,143.6 L516.3,144.3 L518.2,145.0 L520.1,145.7 L522.0,146.4 L523.9,147.0 L525.8,147.6 L527.6,148.2 L529.5,148.8 L531.4,149.3 L533.3,149.8 L535.2,150.3 L537.1,150.7 L539.0,151.1 L540.9,151.5 L542.8,151.9 L544.6,152.3 L546.5,152.7 L548.4,153.0 L550.3,153.3 L552.2,153.6 L554.1,153.9 L556.0,154.1 L557.9,154.4 L559.7,154.6 L561.6,154.9 L563.5,155.1 L565.4,155.3 L567.3,155.4 L569.2,155.6 L571.1,155.8 L573.0,155.9 L574.8,156.1 L576.7,156.2 L578.6,156.3 L580.5,156.5 L580.5,158 Z" fill="rgba(91,108,176,0.05)"/>
  <path d="M52.0,158.0 L57.5,157.9 L63.0,157.9 L68.5,157.9 L74.0,157.9 L79.5,157.8 L84.9,157.8 L90.4,157.7 L95.9,157.6 L101.4,157.5 L106.9,157.3 L112.4,157.2 L117.9,157.0 L123.4,156.7 L128.9,156.4 L134.4,156.0 L139.9,155.5 L145.3,155.0 L150.8,154.3 L156.3,153.5 L161.8,152.6 L167.3,151.5 L172.8,150.3 L178.3,148.8 L183.8,147.1 L189.3,145.2 L194.8,143.1 L200.3,140.6 L205.7,137.9 L211.2,134.9 L216.7,131.6 L222.2,127.9 L227.7,123.9 L233.2,119.6 L238.7,115.0 L244.2,110.1 L249.7,104.9 L255.2,99.4 L260.7,93.7 L266.1,87.9 L271.6,81.9 L277.1,75.8 L282.6,69.7 L288.1,63.7 L293.6,57.8 L299.1,52.1 L304.6,46.6 L310.1,41.5 L315.6,36.8 L321.1,32.5 L326.5,28.8 L332.0,25.7 L337.5,23.2 L343.0,21.5 L348.5,20.4 L354.0,20.0 L359.5,20.4 L365.0,21.5 L370.5,23.2 L376.0,25.7 L381.5,28.8 L386.9,32.5 L392.4,36.8 L397.9,41.5 L403.4,46.6 L408.9,52.1 L414.4,57.8 L419.9,63.7 L425.4,69.7 L430.9,75.8 L436.4,81.9 L441.9,87.9 L447.3,93.7 L452.8,99.4 L458.3,104.9 L463.8,110.1 L469.3,115.0 L474.8,119.6 L480.3,123.9 L485.8,127.9 L491.3,131.6 L496.8,134.9 L502.3,137.9 L507.7,140.6 L513.2,143.1 L518.7,145.2 L524.2,147.1 L529.7,148.8 L535.2,150.3 L540.7,151.5 L546.2,152.6 L551.7,153.5 L557.2,154.3 L562.7,155.0 L568.1,155.5 L573.6,156.0 L579.1,156.4 L584.6,156.7 L590.1,157.0 L595.6,157.2 L601.1,157.3 L606.6,157.5 L612.1,157.6 L617.6,157.7 L623.1,157.8 L628.5,157.8 L634.0,157.9 L639.5,157.9 L645.0,157.9 L650.5,157.9 L656.0,158.0" fill="none" stroke="#5b6cb0" stroke-width="1.8" stroke-linejoin="round"/>
  <text x="56" y="38" font-size="10.5" fill="currentColor" opacity=".6">68 in 100 land inside one σ of the mean</text>
  <text x="56" y="54" font-size="10.5" fill="currentColor" opacity=".48">95 in 100 land inside two</text>
  <text x="52" y="194" font-size="10.5" fill="currentColor" opacity=".62" text-anchor="start">Add up many small independent nudges and the total lands here, even and symmetric, with ends that thin out fast.</text>
</svg>
<!-- /diagram -->

The Normal distribution, also called the Gaussian distribution, is a bell curve symmetric around its center. It has two parameters: the mean (center) and the standard deviation (spread).

**Examples:** people's heights · measurement error

### Log-normal

<!-- diagram:lognormal -->
<svg viewBox="0 0 680 226" width="680" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Log-normal distribution against a normal with the same average" style="max-width:100%;height:auto">
  <line x1="52" y1="158" x2="656" y2="158" stroke="rgba(130,130,130,.35)"/>
  <line x1="52.0" y1="158" x2="52.0" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="52.0" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">0</text>
  <line x1="127.5" y1="158" x2="127.5" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="127.5" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">1</text>
  <line x1="203.0" y1="158" x2="203.0" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="203.0" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">2</text>
  <line x1="278.5" y1="158" x2="278.5" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="278.5" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">3</text>
  <line x1="354.0" y1="158" x2="354.0" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="354.0" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">4</text>
  <line x1="429.5" y1="158" x2="429.5" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="429.5" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">5</text>
  <line x1="505.0" y1="158" x2="505.0" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="505.0" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">6</text>
  <line x1="580.5" y1="158" x2="580.5" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="580.5" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">7</text>
  <line x1="656.0" y1="158" x2="656.0" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="656.0" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">8</text>
  <text x="4" y="16" font-size="9" fill="currentColor" opacity=".45" text-anchor="start" letter-spacing=".06em">density</text>
  <path d="M52.0,158.0 L57.5,154.4 L63.0,128.1 L68.5,88.9 L74.0,53.0 L79.5,26.9 L84.9,20.0 L90.4,20.0 L95.9,20.0 L101.4,20.0 L106.9,20.0 L112.4,20.0 L117.9,24.6 L123.4,33.1 L128.9,41.8 L134.4,50.2 L139.9,58.3 L145.3,66.0 L150.8,73.2 L156.3,79.9 L161.8,86.2 L167.3,91.9 L172.8,97.2 L178.3,102.1 L183.8,106.5 L189.3,110.6 L194.8,114.3 L200.3,117.8 L205.7,120.9 L211.2,123.8 L216.7,126.4 L222.2,128.8 L227.7,131.0 L233.2,133.0 L238.7,134.9 L244.2,136.6 L249.7,138.2 L255.2,139.6 L260.7,140.9 L266.1,142.1 L271.6,143.2 L277.1,144.3 L282.6,145.2 L288.1,146.1 L293.6,146.9 L299.1,147.6 L304.6,148.3 L310.1,149.0 L315.6,149.5 L321.1,150.1 L326.5,150.6 L332.0,151.1 L337.5,151.5 L343.0,151.9 L348.5,152.3 L354.0,152.6 L359.5,153.0 L365.0,153.3 L370.5,153.5 L376.0,153.8 L381.5,154.1 L386.9,154.3 L392.4,154.5 L397.9,154.7 L403.4,154.9 L408.9,155.1 L414.4,155.2 L419.9,155.4 L425.4,155.5 L430.9,155.7 L436.4,155.8 L441.9,155.9 L447.3,156.0 L452.8,156.1 L458.3,156.2 L463.8,156.3 L469.3,156.4 L474.8,156.5 L480.3,156.6 L485.8,156.6 L491.3,156.7 L496.8,156.8 L502.3,156.8 L507.7,156.9 L513.2,156.9 L518.7,157.0 L524.2,157.0 L529.7,157.1 L535.2,157.1 L540.7,157.2 L546.2,157.2 L551.7,157.3 L557.2,157.3 L562.7,157.3 L568.1,157.4 L573.6,157.4 L579.1,157.4 L584.6,157.4 L590.1,157.5 L595.6,157.5 L601.1,157.5 L606.6,157.5 L612.1,157.6 L617.6,157.6 L623.1,157.6 L628.5,157.6 L634.0,157.6 L639.5,157.6 L645.0,157.7 L650.5,157.7 L656.0,157.7 L656.0,158 L52.0,158 Z" fill="rgba(198,146,52,0.13)" stroke="none"/>
  <path d="M52.0,158.0 L57.5,154.4 L63.0,128.1 L68.5,88.9 L74.0,53.0 L79.5,26.9 L84.9,20.0 L90.4,20.0 L95.9,20.0 L101.4,20.0 L106.9,20.0 L112.4,20.0 L117.9,24.6 L123.4,33.1 L128.9,41.8 L134.4,50.2 L139.9,58.3 L145.3,66.0 L150.8,73.2 L156.3,79.9 L161.8,86.2 L167.3,91.9 L172.8,97.2 L178.3,102.1 L183.8,106.5 L189.3,110.6 L194.8,114.3 L200.3,117.8 L205.7,120.9 L211.2,123.8 L216.7,126.4 L222.2,128.8 L227.7,131.0 L233.2,133.0 L238.7,134.9 L244.2,136.6 L249.7,138.2 L255.2,139.6 L260.7,140.9 L266.1,142.1 L271.6,143.2 L277.1,144.3 L282.6,145.2 L288.1,146.1 L293.6,146.9 L299.1,147.6 L304.6,148.3 L310.1,149.0 L315.6,149.5 L321.1,150.1 L326.5,150.6 L332.0,151.1 L337.5,151.5 L343.0,151.9 L348.5,152.3 L354.0,152.6 L359.5,153.0 L365.0,153.3 L370.5,153.5 L376.0,153.8 L381.5,154.1 L386.9,154.3 L392.4,154.5 L397.9,154.7 L403.4,154.9 L408.9,155.1 L414.4,155.2 L419.9,155.4 L425.4,155.5 L430.9,155.7 L436.4,155.8 L441.9,155.9 L447.3,156.0 L452.8,156.1 L458.3,156.2 L463.8,156.3 L469.3,156.4 L474.8,156.5 L480.3,156.6 L485.8,156.6 L491.3,156.7 L496.8,156.8 L502.3,156.8 L507.7,156.9 L513.2,156.9 L518.7,157.0 L524.2,157.0 L529.7,157.1 L535.2,157.1 L540.7,157.2 L546.2,157.2 L551.7,157.3 L557.2,157.3 L562.7,157.3 L568.1,157.4 L573.6,157.4 L579.1,157.4 L584.6,157.4 L590.1,157.5 L595.6,157.5 L601.1,157.5 L606.6,157.5 L612.1,157.6 L617.6,157.6 L623.1,157.6 L628.5,157.6 L634.0,157.6 L639.5,157.6 L645.0,157.7 L650.5,157.7 L656.0,157.7" fill="none" stroke="#c69234" stroke-width="1.8" stroke-linejoin="round"/>
  <path d="M52.0,119.9 L57.5,116.5 L63.0,113.1 L68.5,109.7 L74.0,106.2 L79.5,102.7 L84.9,99.3 L90.4,95.9 L95.9,92.7 L101.4,89.6 L106.9,86.7 L112.4,84.1 L117.9,81.7 L123.4,79.6 L128.9,77.8 L134.4,76.3 L139.9,75.3 L145.3,74.6 L150.8,74.2 L156.3,74.3 L161.8,74.8 L167.3,75.7 L172.8,76.9 L178.3,78.5 L183.8,80.4 L189.3,82.7 L194.8,85.2 L200.3,87.9 L205.7,90.9 L211.2,94.1 L216.7,97.3 L222.2,100.7 L227.7,104.2 L233.2,107.7 L238.7,111.1 L244.2,114.6 L249.7,118.0 L255.2,121.3 L260.7,124.4 L266.1,127.5 L271.6,130.4 L277.1,133.1 L282.6,135.7 L288.1,138.1 L293.6,140.3 L299.1,142.4 L304.6,144.3 L310.1,146.0 L315.6,147.5 L321.1,148.9 L326.5,150.1 L332.0,151.3 L337.5,152.2 L343.0,153.1 L348.5,153.8 L354.0,154.5 L359.5,155.1 L365.0,155.5 L370.5,156.0 L376.0,156.3 L381.5,156.6 L386.9,156.9 L392.4,157.1 L397.9,157.2 L403.4,157.4 L408.9,157.5 L414.4,157.6 L419.9,157.7 L425.4,157.8 L430.9,157.8 L436.4,157.8 L441.9,157.9 L447.3,157.9 L452.8,157.9 L458.3,157.9 L463.8,158.0 L469.3,158.0 L474.8,158.0 L480.3,158.0 L485.8,158.0 L491.3,158.0 L496.8,158.0 L502.3,158.0 L507.7,158.0 L513.2,158.0 L518.7,158.0 L524.2,158.0 L529.7,158.0 L535.2,158.0 L540.7,158.0 L546.2,158.0 L551.7,158.0 L557.2,158.0 L562.7,158.0 L568.1,158.0 L573.6,158.0 L579.1,158.0 L584.6,158.0 L590.1,158.0 L595.6,158.0 L601.1,158.0 L606.6,158.0 L612.1,158.0 L617.6,158.0 L623.1,158.0 L628.5,158.0 L634.0,158.0 L639.5,158.0 L645.0,158.0 L650.5,158.0 L656.0,158.0" fill="none" stroke="#5b6cb0" stroke-width="1.4" stroke-dasharray="5 4" stroke-linejoin="round"/>
  <rect x="52.0" y="206" width="9" height="9" rx="2" fill="rgba(198,146,52,.30)" stroke="#c69234" stroke-opacity=".85"/>
  <text x="66.0" y="214" font-size="10.5" fill="currentColor" opacity=".68">log-normal</text>
  <rect x="147.0" y="206" width="9" height="9" rx="2" fill="rgba(91,108,176,.30)" stroke="#5b6cb0" stroke-opacity=".85"/>
  <text x="161.0" y="214" font-size="10.5" fill="currentColor" opacity=".68">normal, same average</text>
  <line x1="127.5" y1="158" x2="127.5" y2="66" stroke="#c69234" stroke-opacity=".5" stroke-dasharray="3 3"/>
  <text x="133.5" y="64" font-size="10.5" fill="currentColor" opacity=".62">half of all values sit left of here</text>
  <text x="406.9" y="140" font-size="10.5" fill="currentColor" opacity=".55">and the tail runs on</text>
  <text x="52" y="194" font-size="10.5" fill="currentColor" opacity=".62" text-anchor="start">Multiply many small factors instead of adding them and you get this: a floor at zero, a peak on the left, a long right tail.</text>
</svg>
<!-- /diagram -->

The Log-normal distribution models quantities that cannot be negative and have a long tail toward larger values. It arises when the logarithm of the quantity follows a normal distribution.

**Examples:** reply delays · file sizes · incomes

### Power law

<!-- diagram:powerlaw -->
<svg viewBox="0 0 680 226" width="680" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Power law tail against an exponential tail on a log height axis" style="max-width:100%;height:auto">
  <line x1="52" y1="158" x2="656" y2="158" stroke="rgba(130,130,130,.35)"/>
  <line x1="52.0" y1="158" x2="52.0" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="52.0" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">1</text>
  <line x1="106.9" y1="158" x2="106.9" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="106.9" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">2</text>
  <line x1="216.7" y1="158" x2="216.7" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="216.7" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">4</text>
  <line x1="326.5" y1="158" x2="326.5" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="326.5" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">6</text>
  <line x1="436.4" y1="158" x2="436.4" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="436.4" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">8</text>
  <line x1="546.2" y1="158" x2="546.2" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="546.2" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">10</text>
  <line x1="656.0" y1="158" x2="656.0" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="656.0" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">12</text>
  <text x="4" y="16" font-size="9" fill="currentColor" opacity=".45" text-anchor="start" letter-spacing=".06em">how often, each line ten times the one below</text>
  <line x1="52" y1="29.7" x2="656" y2="29.7" stroke="rgba(130,130,130,.16)"/>
  <text x="48" y="33.2" font-size="9" fill="currentColor" opacity=".45" text-anchor="end">1</text>
  <line x1="52" y1="61.7" x2="656" y2="61.7" stroke="rgba(130,130,130,.16)"/>
  <text x="48" y="65.2" font-size="9" fill="currentColor" opacity=".45" text-anchor="end">1/10</text>
  <line x1="52" y1="93.8" x2="656" y2="93.8" stroke="rgba(130,130,130,.16)"/>
  <text x="48" y="97.3" font-size="9" fill="currentColor" opacity=".45" text-anchor="end">1/100</text>
  <line x1="52" y1="125.9" x2="656" y2="125.9" stroke="rgba(130,130,130,.16)"/>
  <text x="48" y="129.4" font-size="9" fill="currentColor" opacity=".45" text-anchor="end">1/1000</text>
  <line x1="52" y1="158.0" x2="656" y2="158.0" stroke="rgba(130,130,130,.16)"/>
  <text x="48" y="161.5" font-size="9" fill="currentColor" opacity=".45" text-anchor="end">1/10000</text>
  <path d="M52.0,23.1 L55.8,25.5 L59.5,27.8 L63.3,29.9 L67.1,31.9 L70.9,33.8 L74.7,35.6 L78.4,37.3 L82.2,39.0 L86.0,40.6 L89.8,42.1 L93.5,43.5 L97.3,44.9 L101.1,46.2 L104.8,47.5 L108.6,48.8 L112.4,50.0 L116.2,51.2 L119.9,52.3 L123.7,53.4 L127.5,54.4 L131.3,55.5 L135.1,56.5 L138.8,57.5 L142.6,58.4 L146.4,59.3 L150.2,60.3 L153.9,61.1 L157.7,62.0 L161.5,62.8 L165.2,63.7 L169.0,64.5 L172.8,65.2 L176.6,66.0 L180.3,66.8 L184.1,67.5 L187.9,68.2 L191.7,68.9 L195.4,69.6 L199.2,70.3 L203.0,71.0 L206.8,71.7 L210.6,72.3 L214.3,72.9 L218.1,73.6 L221.9,74.2 L225.6,74.8 L229.4,75.4 L233.2,76.0 L237.0,76.5 L240.8,77.1 L244.5,77.7 L248.3,78.2 L252.1,78.7 L255.9,79.3 L259.6,79.8 L263.4,80.3 L267.2,80.8 L270.9,81.3 L274.7,81.8 L278.5,82.3 L282.3,82.8 L286.1,83.3 L289.8,83.7 L293.6,84.2 L297.4,84.7 L301.1,85.1 L304.9,85.6 L308.7,86.0 L312.5,86.4 L316.2,86.9 L320.0,87.3 L323.8,87.7 L327.6,88.1 L331.4,88.5 L335.1,89.0 L338.9,89.4 L342.7,89.8 L346.4,90.1 L350.2,90.5 L354.0,90.9 L357.8,91.3 L361.6,91.7 L365.3,92.1 L369.1,92.4 L372.9,92.8 L376.6,93.2 L380.4,93.5 L384.2,93.9 L388.0,94.2 L391.8,94.6 L395.5,94.9 L399.3,95.3 L403.1,95.6 L406.9,95.9 L410.6,96.3 L414.4,96.6 L418.2,96.9 L421.9,97.2 L425.7,97.6 L429.5,97.9 L433.3,98.2 L437.0,98.5 L440.8,98.8 L444.6,99.1 L448.4,99.4 L452.1,99.7 L455.9,100.0 L459.7,100.3 L463.5,100.6 L467.2,100.9 L471.0,101.2 L474.8,101.5 L478.6,101.8 L482.4,102.1 L486.1,102.3 L489.9,102.6 L493.7,102.9 L497.5,103.2 L501.2,103.4 L505.0,103.7 L508.8,104.0 L512.5,104.2 L516.3,104.5 L520.1,104.8 L523.9,105.0 L527.6,105.3 L531.4,105.5 L535.2,105.8 L539.0,106.1 L542.8,106.3 L546.5,106.6 L550.3,106.8 L554.1,107.0 L557.9,107.3 L561.6,107.5 L565.4,107.8 L569.2,108.0 L573.0,108.3 L576.7,108.5 L580.5,108.7 L584.3,109.0 L588.0,109.2 L591.8,109.4 L595.6,109.7 L599.4,109.9 L603.1,110.1 L606.9,110.3 L610.7,110.6 L614.5,110.8 L618.2,111.0 L622.0,111.2 L625.8,111.4 L629.6,111.7 L633.4,111.9 L637.1,112.1 L640.9,112.3 L644.7,112.5 L648.5,112.7 L652.2,112.9 L656.0,113.1" fill="none" stroke="#b0895e" stroke-width="1.9"/>
  <path d="M52.0,23.1 L55.8,24.6 L59.5,26.2 L63.3,27.7 L67.1,29.2 L70.9,30.8 L74.7,32.3 L78.4,33.8 L82.2,35.4 L86.0,36.9 L89.8,38.4 L93.5,40.0 L97.3,41.5 L101.1,43.0 L104.8,44.6 L108.6,46.1 L112.4,47.6 L116.2,49.2 L119.9,50.7 L123.7,52.2 L127.5,53.8 L131.3,55.3 L135.1,56.8 L138.8,58.4 L142.6,59.9 L146.4,61.4 L150.2,63.0 L153.9,64.5 L157.7,66.0 L161.5,67.6 L165.2,69.1 L169.0,70.6 L172.8,72.2 L176.6,73.7 L180.3,75.2 L184.1,76.8 L187.9,78.3 L191.7,79.8 L195.4,81.4 L199.2,82.9 L203.0,84.4 L206.8,86.0 L210.6,87.5 L214.3,89.0 L218.1,90.6 L221.9,92.1 L225.6,93.6 L229.4,95.2 L233.2,96.7 L237.0,98.2 L240.8,99.7 L244.5,101.3 L248.3,102.8 L252.1,104.3 L255.9,105.9 L259.6,107.4 L263.4,108.9 L267.2,110.5 L270.9,112.0 L274.7,113.5 L278.5,115.1 L282.3,116.6 L286.1,118.1 L289.8,119.7 L293.6,121.2 L297.4,122.7 L301.1,124.3 L304.9,125.8 L308.7,127.3 L312.5,128.9 L316.2,130.4 L320.0,131.9 L323.8,133.5 L327.6,135.0 L331.4,136.5 L335.1,138.1 L338.9,139.6 L342.7,141.1 L346.4,142.7 L350.2,144.2 L354.0,145.7 L357.8,147.3 L361.6,148.8 L365.3,150.3 L369.1,151.9 L372.9,153.4 L376.6,154.9 L380.4,156.5 L384.2,158.0" fill="none" stroke="#5b6cb0" stroke-width="1.5" stroke-dasharray="5 4"/>
  <rect x="52.0" y="206" width="9" height="9" rx="2" fill="rgba(176,137,94,.30)" stroke="#b0895e" stroke-opacity=".85"/>
  <text x="66.0" y="214" font-size="10.5" fill="currentColor" opacity=".68">power law</text>
  <rect x="141.1" y="206" width="9" height="9" rx="2" fill="rgba(91,108,176,.30)" stroke="#5b6cb0" stroke-opacity=".85"/>
  <text x="155.1" y="214" font-size="10.5" fill="currentColor" opacity=".68">exponential</text>
  <text x="348.5" y="144.0" font-size="10.5" fill="currentColor" opacity=".58">the dashed line has already left the bottom of the chart</text>
  <text x="52" y="194" font-size="10.5" fill="currentColor" opacity=".62" text-anchor="start">Each grey line is a tenth of the one above it. The dashed tail is gone by 7. The solid one is still there at 12.</text>
</svg>
<!-- /diagram -->

The Power law distribution describes quantities where larger values are rarer than smaller values, with no natural peak. It has one parameter: an exponent that controls how steeply the tail falls off.

**Examples:** city sizes · follower counts

### Student's t

<!-- diagram:student_t -->
<svg viewBox="0 0 680 226" width="680" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Student t distribution against the normal" style="max-width:100%;height:auto">
  <line x1="52" y1="158" x2="656" y2="158" stroke="rgba(130,130,130,.35)"/>
  <line x1="112.4" y1="158" x2="112.4" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="112.4" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">-4</text>
  <line x1="172.8" y1="158" x2="172.8" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="172.8" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">-3</text>
  <line x1="233.2" y1="158" x2="233.2" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="233.2" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">-2</text>
  <line x1="293.6" y1="158" x2="293.6" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="293.6" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">-1</text>
  <line x1="354.0" y1="158" x2="354.0" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="354.0" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">0</text>
  <line x1="414.4" y1="158" x2="414.4" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="414.4" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">1</text>
  <line x1="474.8" y1="158" x2="474.8" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="474.8" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">2</text>
  <line x1="535.2" y1="158" x2="535.2" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="535.2" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">3</text>
  <line x1="595.6" y1="158" x2="595.6" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="595.6" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">4</text>
  <text x="4" y="16" font-size="9" fill="currentColor" opacity=".45" text-anchor="start" letter-spacing=".06em">density</text>
  <path d="M52.0,158.0 L57.5,158.0 L63.0,158.0 L68.5,158.0 L74.0,158.0 L79.5,158.0 L84.9,158.0 L90.4,158.0 L95.9,158.0 L101.4,158.0 L106.9,158.0 L112.4,158.0 L117.9,157.9 L123.4,157.9 L128.9,157.9 L134.4,157.8 L139.9,157.7 L145.3,157.6 L150.8,157.5 L156.3,157.3 L161.8,157.1 L167.3,156.8 L172.8,156.5 L178.3,156.0 L183.8,155.4 L189.3,154.7 L194.8,153.7 L200.3,152.6 L205.7,151.2 L211.2,149.6 L216.7,147.6 L222.2,145.2 L227.7,142.5 L233.2,139.3 L238.7,135.7 L244.2,131.6 L249.7,127.0 L255.2,121.8 L260.7,116.2 L266.1,110.1 L271.6,103.5 L277.1,96.6 L282.6,89.4 L288.1,81.9 L293.6,74.3 L299.1,66.7 L304.6,59.3 L310.1,52.1 L315.6,45.3 L321.1,39.1 L326.5,33.5 L332.0,28.8 L337.5,25.0 L343.0,22.3 L348.5,20.6 L354.0,20.0 L359.5,20.6 L365.0,22.3 L370.5,25.0 L376.0,28.8 L381.5,33.5 L386.9,39.1 L392.4,45.3 L397.9,52.1 L403.4,59.3 L408.9,66.7 L414.4,74.3 L419.9,81.9 L425.4,89.4 L430.9,96.6 L436.4,103.5 L441.9,110.1 L447.3,116.2 L452.8,121.8 L458.3,127.0 L463.8,131.6 L469.3,135.7 L474.8,139.3 L480.3,142.5 L485.8,145.2 L491.3,147.6 L496.8,149.6 L502.3,151.2 L507.7,152.6 L513.2,153.7 L518.7,154.7 L524.2,155.4 L529.7,156.0 L535.2,156.5 L540.7,156.8 L546.2,157.1 L551.7,157.3 L557.2,157.5 L562.7,157.6 L568.1,157.7 L573.6,157.8 L579.1,157.9 L584.6,157.9 L590.1,157.9 L595.6,158.0 L601.1,158.0 L606.6,158.0 L612.1,158.0 L617.6,158.0 L623.1,158.0 L628.5,158.0 L634.0,158.0 L639.5,158.0 L645.0,158.0 L650.5,158.0 L656.0,158.0 L656.0,158 L52.0,158 Z" fill="rgba(91,108,176,0.1)" stroke="none"/>
  <path d="M52.0,158.0 L57.5,158.0 L63.0,158.0 L68.5,158.0 L74.0,158.0 L79.5,158.0 L84.9,158.0 L90.4,158.0 L95.9,158.0 L101.4,158.0 L106.9,158.0 L112.4,158.0 L117.9,157.9 L123.4,157.9 L128.9,157.9 L134.4,157.8 L139.9,157.7 L145.3,157.6 L150.8,157.5 L156.3,157.3 L161.8,157.1 L167.3,156.8 L172.8,156.5 L178.3,156.0 L183.8,155.4 L189.3,154.7 L194.8,153.7 L200.3,152.6 L205.7,151.2 L211.2,149.6 L216.7,147.6 L222.2,145.2 L227.7,142.5 L233.2,139.3 L238.7,135.7 L244.2,131.6 L249.7,127.0 L255.2,121.8 L260.7,116.2 L266.1,110.1 L271.6,103.5 L277.1,96.6 L282.6,89.4 L288.1,81.9 L293.6,74.3 L299.1,66.7 L304.6,59.3 L310.1,52.1 L315.6,45.3 L321.1,39.1 L326.5,33.5 L332.0,28.8 L337.5,25.0 L343.0,22.3 L348.5,20.6 L354.0,20.0 L359.5,20.6 L365.0,22.3 L370.5,25.0 L376.0,28.8 L381.5,33.5 L386.9,39.1 L392.4,45.3 L397.9,52.1 L403.4,59.3 L408.9,66.7 L414.4,74.3 L419.9,81.9 L425.4,89.4 L430.9,96.6 L436.4,103.5 L441.9,110.1 L447.3,116.2 L452.8,121.8 L458.3,127.0 L463.8,131.6 L469.3,135.7 L474.8,139.3 L480.3,142.5 L485.8,145.2 L491.3,147.6 L496.8,149.6 L502.3,151.2 L507.7,152.6 L513.2,153.7 L518.7,154.7 L524.2,155.4 L529.7,156.0 L535.2,156.5 L540.7,156.8 L546.2,157.1 L551.7,157.3 L557.2,157.5 L562.7,157.6 L568.1,157.7 L573.6,157.8 L579.1,157.9 L584.6,157.9 L590.1,157.9 L595.6,158.0 L601.1,158.0 L606.6,158.0 L612.1,158.0 L617.6,158.0 L623.1,158.0 L628.5,158.0 L634.0,158.0 L639.5,158.0 L645.0,158.0 L650.5,158.0 L656.0,158.0" fill="none" stroke="#5b6cb0" stroke-width="1.8" stroke-linejoin="round"/>
  <path d="M52.0,156.5 L57.5,156.4 L63.0,156.3 L68.5,156.2 L74.0,156.1 L79.5,156.0 L84.9,155.8 L90.4,155.6 L95.9,155.5 L101.4,155.3 L106.9,155.1 L112.4,154.8 L117.9,154.6 L123.4,154.3 L128.9,154.0 L134.4,153.7 L139.9,153.3 L145.3,152.9 L150.8,152.4 L156.3,151.9 L161.8,151.4 L167.3,150.7 L172.8,150.1 L178.3,149.3 L183.8,148.4 L189.3,147.5 L194.8,146.4 L200.3,145.3 L205.7,144.0 L211.2,142.5 L216.7,140.8 L222.2,139.0 L227.7,136.9 L233.2,134.6 L238.7,132.1 L244.2,129.2 L249.7,126.0 L255.2,122.5 L260.7,118.6 L266.1,114.3 L271.6,109.5 L277.1,104.4 L282.6,98.8 L288.1,92.8 L293.6,86.5 L299.1,79.8 L304.6,73.0 L310.1,66.1 L315.6,59.3 L321.1,52.8 L326.5,46.7 L332.0,41.4 L337.5,36.9 L343.0,33.6 L348.5,31.6 L354.0,30.9 L359.5,31.6 L365.0,33.6 L370.5,36.9 L376.0,41.4 L381.5,46.7 L386.9,52.8 L392.4,59.3 L397.9,66.1 L403.4,73.0 L408.9,79.8 L414.4,86.5 L419.9,92.8 L425.4,98.8 L430.9,104.4 L436.4,109.5 L441.9,114.3 L447.3,118.6 L452.8,122.5 L458.3,126.0 L463.8,129.2 L469.3,132.1 L474.8,134.6 L480.3,136.9 L485.8,139.0 L491.3,140.8 L496.8,142.5 L502.3,144.0 L507.7,145.3 L513.2,146.4 L518.7,147.5 L524.2,148.4 L529.7,149.3 L535.2,150.1 L540.7,150.7 L546.2,151.4 L551.7,151.9 L557.2,152.4 L562.7,152.9 L568.1,153.3 L573.6,153.7 L579.1,154.0 L584.6,154.3 L590.1,154.6 L595.6,154.8 L601.1,155.1 L606.6,155.3 L612.1,155.5 L617.6,155.6 L623.1,155.8 L628.5,156.0 L634.0,156.1 L639.5,156.2 L645.0,156.3 L650.5,156.4 L656.0,156.5" fill="none" stroke="#c69234" stroke-width="1.8" stroke-linejoin="round"/>
  <rect x="52.0" y="206" width="9" height="9" rx="2" fill="rgba(91,108,176,.30)" stroke="#5b6cb0" stroke-opacity=".85"/>
  <text x="66.0" y="214" font-size="10.5" fill="currentColor" opacity=".68">normal</text>
  <rect x="123.4" y="206" width="9" height="9" rx="2" fill="rgba(198,146,52,.30)" stroke="#c69234" stroke-opacity=".85"/>
  <text x="137.4" y="214" font-size="10.5" fill="currentColor" opacity=".68">t, 3 degrees of freedom</text>
  <circle cx="565.4" cy="151.0" r="15" fill="none" stroke="#c69234" stroke-opacity=".45" stroke-dasharray="3 3"/>
  <text x="543.4" y="126.0" font-size="10.5" fill="currentColor" opacity=".6" text-anchor="middle">far-out values stay possible</text>
  <text x="52" y="194" font-size="10.5" fill="currentColor" opacity=".62" text-anchor="start">Same middle, thicker ends. A small sample produces these ends, so its extreme readings are less surprising than they look.</text>
</svg>
<!-- /diagram -->

Student's t distribution is a bell curve like the normal distribution but with heavier tails, arising when you average a small sample from a normal population. It has one parameter: the degrees of freedom, which relates to the sample size.

**Examples:** the average of five test runs

## A choice or a share

These distributions describe proportions, probabilities, or selections among categories.

### Categorical and Zipf

<!-- diagram:zipf -->
<svg viewBox="0 0 680 226" width="680" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ranked share of message volume by contact" style="max-width:100%;height:auto">
  <line x1="52" y1="158" x2="656" y2="158" stroke="rgba(130,130,130,.35)"/>
  <line x1="67.1" y1="158" x2="67.1" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="67.1" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">1</text>
  <line x1="97.3" y1="158" x2="97.3" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="97.3" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">2</text>
  <line x1="127.5" y1="158" x2="127.5" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="127.5" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">3</text>
  <line x1="157.7" y1="158" x2="157.7" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="157.7" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">4</text>
  <line x1="187.9" y1="158" x2="187.9" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="187.9" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">5</text>
  <line x1="218.1" y1="158" x2="218.1" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="218.1" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">6</text>
  <line x1="248.3" y1="158" x2="248.3" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="248.3" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">7</text>
  <line x1="278.5" y1="158" x2="278.5" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="278.5" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">8</text>
  <line x1="308.7" y1="158" x2="308.7" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="308.7" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">9</text>
  <line x1="338.9" y1="158" x2="338.9" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="338.9" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">10</text>
  <line x1="369.1" y1="158" x2="369.1" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="369.1" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">11</text>
  <line x1="399.3" y1="158" x2="399.3" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="399.3" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">12</text>
  <line x1="429.5" y1="158" x2="429.5" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="429.5" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">13</text>
  <line x1="459.7" y1="158" x2="459.7" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="459.7" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">14</text>
  <line x1="489.9" y1="158" x2="489.9" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="489.9" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">15</text>
  <line x1="520.1" y1="158" x2="520.1" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="520.1" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">16</text>
  <line x1="550.3" y1="158" x2="550.3" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="550.3" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">17</text>
  <line x1="580.5" y1="158" x2="580.5" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="580.5" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">18</text>
  <line x1="610.7" y1="158" x2="610.7" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="610.7" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">19</text>
  <line x1="640.9" y1="158" x2="640.9" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="640.9" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">20</text>
  <text x="4" y="16" font-size="9" fill="currentColor" opacity=".45" text-anchor="start" letter-spacing=".06em">share of all messages sent</text>
  <rect x="56.2" y="51.8" width="21.7" height="106.2" rx="1.5" fill="rgba(129,86,166,0.3)" stroke="#8156a6" stroke-opacity=".75" stroke-width="1"/>
  <rect x="86.4" y="108.5" width="21.7" height="49.5" rx="1.5" fill="rgba(129,86,166,0.3)" stroke="#8156a6" stroke-opacity=".75" stroke-width="1"/>
  <rect x="116.6" y="126.3" width="21.7" height="31.7" rx="1.5" fill="rgba(129,86,166,0.3)" stroke="#8156a6" stroke-opacity=".75" stroke-width="1"/>
  <rect x="146.8" y="134.9" width="21.7" height="23.1" rx="1.5" fill="rgba(129,86,166,0.3)" stroke="#8156a6" stroke-opacity=".75" stroke-width="1"/>
  <rect x="177.0" y="139.9" width="21.7" height="18.1" rx="1.5" fill="rgba(129,86,166,0.3)" stroke="#8156a6" stroke-opacity=".75" stroke-width="1"/>
  <rect x="207.2" y="143.2" width="21.7" height="14.8" rx="1.5" fill="rgba(129,86,166,0.3)" stroke="#8156a6" stroke-opacity=".75" stroke-width="1"/>
  <rect x="237.4" y="145.5" width="21.7" height="12.5" rx="1.5" fill="rgba(129,86,166,0.3)" stroke="#8156a6" stroke-opacity=".75" stroke-width="1"/>
  <rect x="267.6" y="147.2" width="21.7" height="10.8" rx="1.5" fill="rgba(129,86,166,0.3)" stroke="#8156a6" stroke-opacity=".75" stroke-width="1"/>
  <rect x="297.8" y="148.5" width="21.7" height="9.5" rx="1.5" fill="rgba(129,86,166,0.3)" stroke="#8156a6" stroke-opacity=".75" stroke-width="1"/>
  <rect x="328.0" y="149.6" width="21.7" height="8.4" rx="1.5" fill="rgba(129,86,166,0.3)" stroke="#8156a6" stroke-opacity=".75" stroke-width="1"/>
  <rect x="358.2" y="150.4" width="21.7" height="7.6" rx="1.5" fill="rgba(129,86,166,0.3)" stroke="#8156a6" stroke-opacity=".75" stroke-width="1"/>
  <rect x="388.4" y="151.1" width="21.7" height="6.9" rx="1.5" fill="rgba(129,86,166,0.3)" stroke="#8156a6" stroke-opacity=".75" stroke-width="1"/>
  <rect x="418.6" y="151.7" width="21.7" height="6.3" rx="1.5" fill="rgba(129,86,166,0.3)" stroke="#8156a6" stroke-opacity=".75" stroke-width="1"/>
  <rect x="448.8" y="152.2" width="21.7" height="5.8" rx="1.5" fill="rgba(129,86,166,0.3)" stroke="#8156a6" stroke-opacity=".75" stroke-width="1"/>
  <rect x="479.0" y="152.6" width="21.7" height="5.4" rx="1.5" fill="rgba(129,86,166,0.3)" stroke="#8156a6" stroke-opacity=".75" stroke-width="1"/>
  <rect x="509.2" y="153.0" width="21.7" height="5.0" rx="1.5" fill="rgba(129,86,166,0.3)" stroke="#8156a6" stroke-opacity=".75" stroke-width="1"/>
  <rect x="539.4" y="153.3" width="21.7" height="4.7" rx="1.5" fill="rgba(129,86,166,0.3)" stroke="#8156a6" stroke-opacity=".75" stroke-width="1"/>
  <rect x="569.6" y="153.6" width="21.7" height="4.4" rx="1.5" fill="rgba(129,86,166,0.3)" stroke="#8156a6" stroke-opacity=".75" stroke-width="1"/>
  <rect x="599.8" y="153.8" width="21.7" height="4.2" rx="1.5" fill="rgba(129,86,166,0.3)" stroke="#8156a6" stroke-opacity=".75" stroke-width="1"/>
  <rect x="630.0" y="154.1" width="21.7" height="3.9" rx="1.5" fill="rgba(129,86,166,0.3)" stroke="#8156a6" stroke-opacity=".75" stroke-width="1"/>
  <text x="130.5" y="36" font-size="10.5" fill="currentColor" opacity=".62">the top three contacts take 55 percent of everything sent</text>
  <text x="52" y="194" font-size="10.5" fill="currentColor" opacity=".62" text-anchor="start">Contacts ranked by how much gets written to them. Rank 1 takes about twice rank 2 and about three times rank 3.</text>
</svg>
<!-- /diagram -->

The Categorical distribution models the outcome when you choose one item from a fixed set of categories, each with its own probability. The Zipf distribution is a special categorical distribution where category popularity follows a power law—the first category is most popular, the second half as popular, and so on.

**Examples:** which friend you text most · which words a language uses most

### Beta

<!-- diagram:beta -->
<svg viewBox="0 0 680 226" width="680" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Beta distribution at four parameter settings" style="max-width:100%;height:auto">
  <line x1="52" y1="158" x2="656" y2="158" stroke="rgba(130,130,130,.35)"/>
  <line x1="52.0" y1="158" x2="52.0" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="52.0" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">0</text>
  <line x1="203.0" y1="158" x2="203.0" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="203.0" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">0.25</text>
  <line x1="354.0" y1="158" x2="354.0" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="354.0" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">0.5</text>
  <line x1="505.0" y1="158" x2="505.0" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="505.0" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">0.75</text>
  <line x1="656.0" y1="158" x2="656.0" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="656.0" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">1</text>
  <text x="4" y="16" font-size="9" fill="currentColor" opacity=".45" text-anchor="start" letter-spacing=".06em">density</text>
  <path d="M52.0,118.8 L57.5,118.8 L63.0,118.8 L68.5,118.8 L74.0,118.8 L79.5,118.8 L84.9,118.8 L90.4,118.8 L95.9,118.8 L101.4,118.8 L106.9,118.8 L112.4,118.8 L117.9,118.8 L123.4,118.8 L128.9,118.8 L134.4,118.8 L139.9,118.8 L145.3,118.8 L150.8,118.8 L156.3,118.8 L161.8,118.8 L167.3,118.8 L172.8,118.8 L178.3,118.8 L183.8,118.8 L189.3,118.8 L194.8,118.8 L200.3,118.8 L205.7,118.8 L211.2,118.8 L216.7,118.8 L222.2,118.8 L227.7,118.8 L233.2,118.8 L238.7,118.8 L244.2,118.8 L249.7,118.8 L255.2,118.8 L260.7,118.8 L266.1,118.8 L271.6,118.8 L277.1,118.8 L282.6,118.8 L288.1,118.8 L293.6,118.8 L299.1,118.8 L304.6,118.8 L310.1,118.8 L315.6,118.8 L321.1,118.8 L326.5,118.8 L332.0,118.8 L337.5,118.8 L343.0,118.8 L348.5,118.8 L354.0,118.8 L359.5,118.8 L365.0,118.8 L370.5,118.8 L376.0,118.8 L381.5,118.8 L386.9,118.8 L392.4,118.8 L397.9,118.8 L403.4,118.8 L408.9,118.8 L414.4,118.8 L419.9,118.8 L425.4,118.8 L430.9,118.8 L436.4,118.8 L441.9,118.8 L447.3,118.8 L452.8,118.8 L458.3,118.8 L463.8,118.8 L469.3,118.8 L474.8,118.8 L480.3,118.8 L485.8,118.8 L491.3,118.8 L496.8,118.8 L502.3,118.8 L507.7,118.8 L513.2,118.8 L518.7,118.8 L524.2,118.8 L529.7,118.8 L535.2,118.8 L540.7,118.8 L546.2,118.8 L551.7,118.8 L557.2,118.8 L562.7,118.8 L568.1,118.8 L573.6,118.8 L579.1,118.8 L584.6,118.8 L590.1,118.8 L595.6,118.8 L601.1,118.8 L606.6,118.8 L612.1,118.8 L617.6,118.8 L623.1,118.8 L628.5,118.8 L634.0,118.8 L639.5,118.8 L645.0,118.8 L650.5,118.8 L656.0,118.8" fill="none" stroke="#5b6cb0" stroke-width="1.8" stroke-dasharray="5 4" stroke-linejoin="round"/>
  <path d="M52.0,156.4 L57.5,142.2 L63.0,129.4 L68.5,117.7 L74.0,107.2 L79.5,97.8 L84.9,89.4 L90.4,81.9 L95.9,75.3 L101.4,69.6 L106.9,64.7 L112.4,60.5 L117.9,56.9 L123.4,54.1 L128.9,51.8 L134.4,50.0 L139.9,48.8 L145.3,48.1 L150.8,47.8 L156.3,47.9 L161.8,48.3 L167.3,49.1 L172.8,50.2 L178.3,51.6 L183.8,53.2 L189.3,55.1 L194.8,57.1 L200.3,59.3 L205.7,61.7 L211.2,64.2 L216.7,66.8 L222.2,69.5 L227.7,72.3 L233.2,75.1 L238.7,78.0 L244.2,80.9 L249.7,83.9 L255.2,86.8 L260.7,89.8 L266.1,92.7 L271.6,95.6 L277.1,98.5 L282.6,101.3 L288.1,104.1 L293.6,106.9 L299.1,109.5 L304.6,112.2 L310.1,114.7 L315.6,117.2 L321.1,119.6 L326.5,121.9 L332.0,124.1 L337.5,126.3 L343.0,128.4 L348.5,130.4 L354.0,132.3 L359.5,134.1 L365.0,135.8 L370.5,137.5 L376.0,139.1 L381.5,140.6 L386.9,142.0 L392.4,143.3 L397.9,144.6 L403.4,145.7 L408.9,146.8 L414.4,147.9 L419.9,148.8 L425.4,149.7 L430.9,150.6 L436.4,151.3 L441.9,152.0 L447.3,152.7 L452.8,153.3 L458.3,153.8 L463.8,154.3 L469.3,154.8 L474.8,155.2 L480.3,155.6 L485.8,155.9 L491.3,156.2 L496.8,156.4 L502.3,156.7 L507.7,156.9 L513.2,157.1 L518.7,157.2 L524.2,157.4 L529.7,157.5 L535.2,157.6 L540.7,157.7 L546.2,157.7 L551.7,157.8 L557.2,157.8 L562.7,157.9 L568.1,157.9 L573.6,157.9 L579.1,158.0 L584.6,158.0 L590.1,158.0 L595.6,158.0 L601.1,158.0 L606.6,158.0 L612.1,158.0 L617.6,158.0 L623.1,158.0 L628.5,158.0 L634.0,158.0 L639.5,158.0 L645.0,158.0 L650.5,158.0 L656.0,158.0" fill="none" stroke="#c69234" stroke-width="1.8" stroke-linejoin="round"/>
  <path d="M52.0,158.0 L57.5,158.0 L63.0,158.0 L68.5,158.0 L74.0,158.0 L79.5,158.0 L84.9,158.0 L90.4,157.9 L95.9,157.8 L101.4,157.7 L106.9,157.6 L112.4,157.3 L117.9,157.0 L123.4,156.6 L128.9,156.1 L134.4,155.5 L139.9,154.7 L145.3,153.8 L150.8,152.7 L156.3,151.4 L161.8,150.0 L167.3,148.3 L172.8,146.5 L178.3,144.4 L183.8,142.2 L189.3,139.7 L194.8,137.0 L200.3,134.2 L205.7,131.1 L211.2,127.9 L216.7,124.5 L222.2,120.9 L227.7,117.3 L233.2,113.5 L238.7,109.6 L244.2,105.6 L249.7,101.6 L255.2,97.6 L260.7,93.6 L266.1,89.7 L271.6,85.8 L277.1,82.0 L282.6,78.3 L288.1,74.8 L293.6,71.4 L299.1,68.3 L304.6,65.3 L310.1,62.6 L315.6,60.2 L321.1,58.0 L326.5,56.2 L332.0,54.7 L337.5,53.5 L343.0,52.6 L348.5,52.1 L354.0,51.9 L359.5,52.1 L365.0,52.6 L370.5,53.5 L376.0,54.7 L381.5,56.2 L386.9,58.0 L392.4,60.2 L397.9,62.6 L403.4,65.3 L408.9,68.3 L414.4,71.4 L419.9,74.8 L425.4,78.3 L430.9,82.0 L436.4,85.8 L441.9,89.7 L447.3,93.6 L452.8,97.6 L458.3,101.6 L463.8,105.6 L469.3,109.6 L474.8,113.5 L480.3,117.3 L485.8,120.9 L491.3,124.5 L496.8,127.9 L502.3,131.1 L507.7,134.2 L513.2,137.0 L518.7,139.7 L524.2,142.2 L529.7,144.4 L535.2,146.5 L540.7,148.3 L546.2,150.0 L551.7,151.4 L557.2,152.7 L562.7,153.8 L568.1,154.7 L573.6,155.5 L579.1,156.1 L584.6,156.6 L590.1,157.0 L595.6,157.3 L601.1,157.6 L606.6,157.7 L612.1,157.8 L617.6,157.9 L623.1,158.0 L628.5,158.0 L634.0,158.0 L639.5,158.0 L645.0,158.0 L650.5,158.0 L656.0,158.0" fill="none" stroke="#2f9e8f" stroke-width="1.8" stroke-linejoin="round"/>
  <path d="M52.0,158.0 L57.5,158.0 L63.0,158.0 L68.5,158.0 L74.0,158.0 L79.5,158.0 L84.9,158.0 L90.4,158.0 L95.9,158.0 L101.4,158.0 L106.9,158.0 L112.4,158.0 L117.9,158.0 L123.4,158.0 L128.9,158.0 L134.4,158.0 L139.9,158.0 L145.3,158.0 L150.8,158.0 L156.3,158.0 L161.8,158.0 L167.3,158.0 L172.8,158.0 L178.3,158.0 L183.8,157.9 L189.3,157.9 L194.8,157.9 L200.3,157.9 L205.7,157.8 L211.2,157.8 L216.7,157.7 L222.2,157.6 L227.7,157.5 L233.2,157.4 L238.7,157.2 L244.2,157.0 L249.7,156.8 L255.2,156.6 L260.7,156.3 L266.1,156.0 L271.6,155.6 L277.1,155.1 L282.6,154.6 L288.1,154.1 L293.6,153.4 L299.1,152.7 L304.6,151.8 L310.1,150.9 L315.6,149.9 L321.1,148.7 L326.5,147.5 L332.0,146.1 L337.5,144.5 L343.0,142.9 L348.5,141.0 L354.0,139.1 L359.5,136.9 L365.0,134.6 L370.5,132.1 L376.0,129.5 L381.5,126.6 L386.9,123.6 L392.4,120.4 L397.9,117.1 L403.4,113.5 L408.9,109.8 L414.4,106.0 L419.9,101.9 L425.4,97.8 L430.9,93.5 L436.4,89.1 L441.9,84.7 L447.3,80.2 L452.8,75.6 L458.3,71.0 L463.8,66.5 L469.3,62.0 L474.8,57.5 L480.3,53.3 L485.8,49.1 L491.3,45.3 L496.8,41.6 L502.3,38.3 L507.7,35.3 L513.2,32.8 L518.7,30.7 L524.2,29.2 L529.7,28.2 L535.2,27.8 L540.7,28.1 L546.2,29.1 L551.7,30.9 L557.2,33.4 L562.7,36.8 L568.1,40.9 L573.6,45.9 L579.1,51.7 L584.6,58.3 L590.1,65.7 L595.6,73.8 L601.1,82.4 L606.6,91.5 L612.1,101.0 L617.6,110.6 L623.1,120.2 L628.5,129.5 L634.0,138.1 L639.5,145.7 L645.0,151.9 L650.5,156.2 L656.0,158.0" fill="none" stroke="#8156a6" stroke-width="1.8" stroke-dasharray="2 3" stroke-linejoin="round"/>
  <rect x="52.0" y="206" width="9" height="9" rx="2" fill="rgba(91,108,176,.30)" stroke="#5b6cb0" stroke-opacity=".85"/>
  <text x="66.0" y="214" font-size="10.5" fill="currentColor" opacity=".68">1 and 1</text>
  <rect x="129.3" y="206" width="9" height="9" rx="2" fill="rgba(198,146,52,.30)" stroke="#c69234" stroke-opacity=".85"/>
  <text x="143.3" y="214" font-size="10.5" fill="currentColor" opacity=".68">2 and 6</text>
  <rect x="206.6" y="206" width="9" height="9" rx="2" fill="rgba(47,158,143,.30)" stroke="#2f9e8f" stroke-opacity=".85"/>
  <text x="220.6" y="214" font-size="10.5" fill="currentColor" opacity=".68">6 and 6</text>
  <rect x="283.9" y="206" width="9" height="9" rx="2" fill="rgba(129,86,166,.30)" stroke="#8156a6" stroke-opacity=".85"/>
  <text x="297.9" y="214" font-size="10.5" fill="currentColor" opacity=".68">9 and 3</text>
  <text x="52" y="194" font-size="10.5" fill="currentColor" opacity=".62" text-anchor="start">A belief about an unknown chance. The two numbers count yeses and noes, both starting at 1, and more of either narrows the shape.</text>
</svg>
<!-- /diagram -->

The Beta distribution describes an uncertain probability—how likely an event is to occur—based on observed successes and failures. It has two parameters: the count of observed successes and the count of observed failures.

**Examples:** how often customers click, after watching 40 of them

### Uniform

<!-- diagram:uniform -->
<svg viewBox="0 0 680 226" width="680" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Uniform distribution between zero and one" style="max-width:100%;height:auto">
  <line x1="52" y1="158" x2="656" y2="158" stroke="rgba(130,130,130,.35)"/>
  <line x1="52.0" y1="158" x2="52.0" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="52.0" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">0</text>
  <line x1="203.0" y1="158" x2="203.0" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="203.0" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">0.25</text>
  <line x1="354.0" y1="158" x2="354.0" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="354.0" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">0.5</text>
  <line x1="505.0" y1="158" x2="505.0" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="505.0" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">0.75</text>
  <line x1="656.0" y1="158" x2="656.0" y2="162" stroke="rgba(130,130,130,.35)"/>
  <text x="656.0" y="176" font-size="10" fill="currentColor" opacity=".55" text-anchor="middle">1</text>
  <text x="4" y="16" font-size="9" fill="currentColor" opacity=".45" text-anchor="start" letter-spacing=".06em">density</text>
  <path d="M52.0,158.0 L57.5,158.0 L63.0,158.0 L68.5,47.6 L74.0,47.6 L79.5,47.6 L84.9,47.6 L90.4,47.6 L95.9,47.6 L101.4,47.6 L106.9,47.6 L112.4,47.6 L117.9,47.6 L123.4,47.6 L128.9,47.6 L134.4,47.6 L139.9,47.6 L145.3,47.6 L150.8,47.6 L156.3,47.6 L161.8,47.6 L167.3,47.6 L172.8,47.6 L178.3,47.6 L183.8,47.6 L189.3,47.6 L194.8,47.6 L200.3,47.6 L205.7,47.6 L211.2,47.6 L216.7,47.6 L222.2,47.6 L227.7,47.6 L233.2,47.6 L238.7,47.6 L244.2,47.6 L249.7,47.6 L255.2,47.6 L260.7,47.6 L266.1,47.6 L271.6,47.6 L277.1,47.6 L282.6,47.6 L288.1,47.6 L293.6,47.6 L299.1,47.6 L304.6,47.6 L310.1,47.6 L315.6,47.6 L321.1,47.6 L326.5,47.6 L332.0,47.6 L337.5,47.6 L343.0,47.6 L348.5,47.6 L354.0,47.6 L359.5,47.6 L365.0,47.6 L370.5,47.6 L376.0,47.6 L381.5,47.6 L386.9,47.6 L392.4,47.6 L397.9,47.6 L403.4,47.6 L408.9,47.6 L414.4,47.6 L419.9,47.6 L425.4,47.6 L430.9,47.6 L436.4,47.6 L441.9,47.6 L447.3,47.6 L452.8,47.6 L458.3,47.6 L463.8,47.6 L469.3,47.6 L474.8,47.6 L480.3,47.6 L485.8,47.6 L491.3,47.6 L496.8,47.6 L502.3,47.6 L507.7,47.6 L513.2,47.6 L518.7,47.6 L524.2,47.6 L529.7,47.6 L535.2,47.6 L540.7,47.6 L546.2,47.6 L551.7,47.6 L557.2,47.6 L562.7,47.6 L568.1,47.6 L573.6,47.6 L579.1,47.6 L584.6,47.6 L590.1,47.6 L595.6,47.6 L601.1,47.6 L606.6,47.6 L612.1,47.6 L617.6,47.6 L623.1,47.6 L628.5,47.6 L634.0,47.6 L639.5,47.6 L645.0,158.0 L650.5,158.0 L656.0,158.0 L656.0,158 L52.0,158 Z" fill="rgba(129,86,166,0.13)" stroke="none"/>
  <path d="M52.0,158.0 L57.5,158.0 L63.0,158.0 L68.5,47.6 L74.0,47.6 L79.5,47.6 L84.9,47.6 L90.4,47.6 L95.9,47.6 L101.4,47.6 L106.9,47.6 L112.4,47.6 L117.9,47.6 L123.4,47.6 L128.9,47.6 L134.4,47.6 L139.9,47.6 L145.3,47.6 L150.8,47.6 L156.3,47.6 L161.8,47.6 L167.3,47.6 L172.8,47.6 L178.3,47.6 L183.8,47.6 L189.3,47.6 L194.8,47.6 L200.3,47.6 L205.7,47.6 L211.2,47.6 L216.7,47.6 L222.2,47.6 L227.7,47.6 L233.2,47.6 L238.7,47.6 L244.2,47.6 L249.7,47.6 L255.2,47.6 L260.7,47.6 L266.1,47.6 L271.6,47.6 L277.1,47.6 L282.6,47.6 L288.1,47.6 L293.6,47.6 L299.1,47.6 L304.6,47.6 L310.1,47.6 L315.6,47.6 L321.1,47.6 L326.5,47.6 L332.0,47.6 L337.5,47.6 L343.0,47.6 L348.5,47.6 L354.0,47.6 L359.5,47.6 L365.0,47.6 L370.5,47.6 L376.0,47.6 L381.5,47.6 L386.9,47.6 L392.4,47.6 L397.9,47.6 L403.4,47.6 L408.9,47.6 L414.4,47.6 L419.9,47.6 L425.4,47.6 L430.9,47.6 L436.4,47.6 L441.9,47.6 L447.3,47.6 L452.8,47.6 L458.3,47.6 L463.8,47.6 L469.3,47.6 L474.8,47.6 L480.3,47.6 L485.8,47.6 L491.3,47.6 L496.8,47.6 L502.3,47.6 L507.7,47.6 L513.2,47.6 L518.7,47.6 L524.2,47.6 L529.7,47.6 L535.2,47.6 L540.7,47.6 L546.2,47.6 L551.7,47.6 L557.2,47.6 L562.7,47.6 L568.1,47.6 L573.6,47.6 L579.1,47.6 L584.6,47.6 L590.1,47.6 L595.6,47.6 L601.1,47.6 L606.6,47.6 L612.1,47.6 L617.6,47.6 L623.1,47.6 L628.5,47.6 L634.0,47.6 L639.5,47.6 L645.0,158.0 L650.5,158.0 L656.0,158.0" fill="none" stroke="#8156a6" stroke-width="1.8" stroke-linejoin="round"/>
  <text x="52" y="194" font-size="10.5" fill="currentColor" opacity=".62" text-anchor="start">Every value between the two ends is equally likely, and nothing outside them ever happens.</text>
</svg>
<!-- /diagram -->

The Uniform distribution gives equal probability to all values in a range. It has two parameters: the minimum and maximum of the range.

**Examples:** a computer's raw random number · a delivery window between 9 and 5, nothing else known

## One family

Many distributions arise from one another through simple modifications. The exponential distribution is a special case of the gamma distribution; the geometric distribution is a special case of the negative binomial; and the normal distribution emerges as the limit of many other distributions when samples grow large.

<!-- diagram:family -->
<svg viewBox="0 0 680 380" width="680" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="How the distributions turn into each other" style="max-width:100%;height:auto">
  <defs><marker id="ar-family" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="rgba(130,130,130,.6)"/></marker></defs>
  <g style="cursor:help"><title>One yes-or-no trial. Every other counting shape is built from repeats of this.</title>
  <rect x="24" y="20" width="126" height="40" rx="6" fill="rgba(47,158,143,.08)" stroke="#2f9e8f" stroke-opacity=".55"/>
  <text x="87.0" y="40.0" font-size="11" font-weight="600" fill="currentColor" text-anchor="middle">Bernoulli</text>
  <text x="87.0" y="54.0" font-size="9.5" fill="currentColor" opacity=".62" text-anchor="middle">one yes-or-no try</text>
  </g>
  <g style="cursor:help"><title>Count of yeses in n fixed tries.</title>
  <rect x="24" y="104" width="126" height="40" rx="6" fill="rgba(47,158,143,.08)" stroke="#2f9e8f" stroke-opacity=".55"/>
  <text x="87.0" y="124.0" font-size="11" font-weight="600" fill="currentColor" text-anchor="middle">Binomial</text>
  <text x="87.0" y="138.0" font-size="9.5" fill="currentColor" opacity=".62" text-anchor="middle">count over n tries</text>
  </g>
  <g style="cursor:help"><title>A distribution over the chance p itself. Update it with yeses and noes.</title>
  <rect x="24" y="188" width="126" height="40" rx="6" fill="rgba(129,86,166,.08)" stroke="#8156a6" stroke-opacity=".55"/>
  <text x="87.0" y="208.0" font-size="11" font-weight="600" fill="currentColor" text-anchor="middle">Beta</text>
  <text x="87.0" y="222.0" font-size="9.5" fill="currentColor" opacity=".62" text-anchor="middle">the chance itself</text>
  </g>
  <g style="cursor:help"><title>Tries until the first yes.</title>
  <rect x="24" y="288" width="126" height="40" rx="6" fill="rgba(47,158,143,.08)" stroke="#2f9e8f" stroke-opacity=".55"/>
  <text x="87.0" y="308.0" font-size="11" font-weight="600" fill="currentColor" text-anchor="middle">Geometric</text>
  <text x="87.0" y="322.0" font-size="9.5" fill="currentColor" opacity=".62" text-anchor="middle">tries to first yes</text>
  </g>
  <g style="cursor:help"><title>Count of events in a window at a steady rate.</title>
  <rect x="272" y="104" width="136" height="40" rx="6" fill="rgba(47,158,143,.08)" stroke="#2f9e8f" stroke-opacity=".55"/>
  <text x="340.0" y="124.0" font-size="11" font-weight="600" fill="currentColor" text-anchor="middle">Poisson</text>
  <text x="340.0" y="138.0" font-size="9.5" fill="currentColor" opacity=".62" text-anchor="middle">count in a window</text>
  </g>
  <g style="cursor:help"><title>Sums of many small independent effects.</title>
  <rect x="272" y="20" width="136" height="40" rx="6" fill="rgba(91,108,176,.08)" stroke="#5b6cb0" stroke-opacity=".55"/>
  <text x="340.0" y="40.0" font-size="11" font-weight="600" fill="currentColor" text-anchor="middle">Normal</text>
  <text x="340.0" y="54.0" font-size="9.5" fill="currentColor" opacity=".62" text-anchor="middle">sums of many effects</text>
  </g>
  <g style="cursor:help"><title>Poisson whose rate is itself random. Clumpier counts.</title>
  <rect x="272" y="188" width="136" height="40" rx="6" fill="rgba(47,158,143,.08)" stroke="#2f9e8f" stroke-opacity=".55"/>
  <text x="340.0" y="208.0" font-size="11" font-weight="600" fill="currentColor" text-anchor="middle">Negative binomial</text>
  <text x="340.0" y="222.0" font-size="9.5" fill="currentColor" opacity=".62" text-anchor="middle">clumpy counts</text>
  </g>
  <g style="cursor:help"><title>Gap between Poisson events.</title>
  <rect x="272" y="288" width="136" height="40" rx="6" fill="rgba(198,146,52,.08)" stroke="#c69234" stroke-opacity=".55"/>
  <text x="340.0" y="308.0" font-size="11" font-weight="600" fill="currentColor" text-anchor="middle">Exponential</text>
  <text x="340.0" y="322.0" font-size="9.5" fill="currentColor" opacity=".62" text-anchor="middle">gap to the next event</text>
  </g>
  <g style="cursor:help"><title>Exponential of a normal. Products of many small factors.</title>
  <rect x="516" y="20" width="140" height="40" rx="6" fill="rgba(198,146,52,.08)" stroke="#c69234" stroke-opacity=".55"/>
  <text x="586.0" y="40.0" font-size="11" font-weight="600" fill="currentColor" text-anchor="middle">Log-normal</text>
  <text x="586.0" y="54.0" font-size="9.5" fill="currentColor" opacity=".62" text-anchor="middle">products of factors</text>
  </g>
  <g style="cursor:help"><title>Normal with the spread estimated from few points.</title>
  <rect x="516" y="104" width="140" height="40" rx="6" fill="rgba(91,108,176,.08)" stroke="#5b6cb0" stroke-opacity=".55"/>
  <text x="586.0" y="124.0" font-size="11" font-weight="600" fill="currentColor" text-anchor="middle">Student's t</text>
  <text x="586.0" y="138.0" font-size="9.5" fill="currentColor" opacity=".62" text-anchor="middle">small-sample normal</text>
  </g>
  <g style="cursor:help"><title>Sum of k exponential gaps.</title>
  <rect x="516" y="288" width="140" height="40" rx="6" fill="rgba(198,146,52,.08)" stroke="#c69234" stroke-opacity=".55"/>
  <text x="586.0" y="308.0" font-size="11" font-weight="600" fill="currentColor" text-anchor="middle">Gamma</text>
  <text x="586.0" y="322.0" font-size="9.5" fill="currentColor" opacity=".62" text-anchor="middle">wait for the k-th</text>
  </g>
  <path d="M150,40 Q211.0,24.0 272,40" fill="none" stroke="rgba(130,130,130,.5)" stroke-width="1.2" marker-end="url(#ar-family)"/>
  <text x="211.0" y="26.2" font-size="9.5" fill="currentColor" opacity=".6" text-anchor="middle">add up many</text>
  <path d="M87,60 L87,104" fill="none" stroke="rgba(130,130,130,.5)" stroke-width="1.2" marker-end="url(#ar-family)"/>
  <path d="M150,124 L272,124" fill="none" stroke="rgba(130,130,130,.5)" stroke-width="1.2" marker-end="url(#ar-family)"/>
  <text x="211.0" y="119.0" font-size="9.5" fill="currentColor" opacity=".6" text-anchor="middle">n large, p small</text>
  <path d="M87,188 L87,148" fill="none" stroke="rgba(130,130,130,.5)" stroke-width="1.2" marker-end="url(#ar-family)"/>
  <text x="96" y="172" font-size="9.5" fill="currentColor" opacity=".6">the chance p, drawn</text>
  <path d="M150,308 L272,308" fill="none" stroke="rgba(130,130,130,.5)" stroke-width="1.2" marker-end="url(#ar-family)"/>
  <text x="211.0" y="303.0" font-size="9.5" fill="currentColor" opacity=".6" text-anchor="middle">continuous cousin</text>
  <path d="M340,144 L340,188" fill="none" stroke="rgba(130,130,130,.5)" stroke-width="1.2" marker-end="url(#ar-family)"/>
  <path d="M408,40 Q462.0,26.0 516,40" fill="none" stroke="rgba(130,130,130,.5)" stroke-width="1.2" marker-end="url(#ar-family)"/>
  <text x="462.0" y="27.299999999999997" font-size="9.5" fill="currentColor" opacity=".6" text-anchor="middle">exponentiate</text>
  <path d="M408,124 L516,124" fill="none" stroke="rgba(130,130,130,.5)" stroke-width="1.2" marker-end="url(#ar-family)"/>
  <text x="462.0" y="119.0" font-size="9.5" fill="currentColor" opacity=".6" text-anchor="middle">estimate the spread</text>
  <path d="M408,308 L516,308" fill="none" stroke="rgba(130,130,130,.5)" stroke-width="1.2" marker-end="url(#ar-family)"/>
  <text x="462.0" y="303.0" font-size="9.5" fill="currentColor" opacity=".6" text-anchor="middle">add k of them</text>
  <text x="340" y="170" font-size="9.5" fill="currentColor" opacity=".55" text-anchor="middle">rate itself varies</text>
  <text x="24" y="360" font-size="10" fill="currentColor" opacity=".55">Hover any box for what it is. Follow an arrow to see what one change to the story does to the shape.</text>
</svg>
<!-- /diagram -->

## Links

- [[wiki/Worldviews & the Political Order/Per Capita|Per Capita]] gives the division that turns a raw count into a rate. That division comes before any count here gets its distribution read.
- [[wiki/Decision Making/Positional Decisions and Expected Value|Positional Decisions and Expected Value]] gives what an average over many repeats is worth to a decision when any single result can fail.
- [[wiki/Decision Making/Expectancy in Wicked Environments|Expectancy in Wicked Environments]] gives a way to weigh chance times size when nobody posts the odds. The chance in that weighing is what a distribution here supplies.
- [[wiki/Dimensions/Mindset/Confidence Calibration|Confidence Calibration]] gives two checks on whether a certainty of yours deserves the weight you put on it. The beta here asks the same question with counted yeses and noes.

## Open questions

- A computer's random number generator produces uniform draws. How it bends those draws into the other distributions here is not on this page.

## Sources

- The section texts were written by Claude Haiku 4.5 on 2026-09-01, cold, from a spec naming the audience, the format, and the facts that had to appear. The spec and the method are in `01 - Workbench/GENERATOR-eli5-haiku-DRAFT-2026-09-01.md`.
- The figures are drawn from the real mass and density functions by `scripts/gen-distribution-diagrams.py`.
