---
title: "Deep Processing for Research"
type: concept
status: developing
created: 2026-05-14
updated: 2026-09-24
method: outline-2026-09-24
prose-model: fable
written-by: fable
model: grok
source-count: 8
description: "How to read a field of papers so each one is placed against the others, what a review can and cannot see, and how to keep references and use a language model at the edge."
tags:
  - research
  - higher-order
  - deep-processing
  - schema-building
  - expertise
  - schema
---

# Deep Processing for Research

Deep processing for research is a way of reading a field of published papers so that each paper is placed in a picture of the field while it is read: what it supports, what it leaves out, which open question it answers. Done this way, the reader knows when to stop collecting papers, and the review written at the end has an argument instead of a list of summaries.

## Core takeaways

- Place every paper while reading it. A paper read and summarised on its own is stored, not understood.
- Time spent organising the papers already read buys more than time spent reading new ones.
- Overload on first contact with a field is normal, and it passes with more organising.
- Ask what a field can see as well as what it says. Every review has a gap, and the gap is what was never measured.
- Reading gets cheaper as the picture forms. The first paper takes hours; a paper read once the picture holds takes minutes.
- A language model can check the edge of a picture the reader already holds. If it holds the picture instead, the skill is never built.

## How it works

- Six moves per paper, in order:
  - understand the claim
  - locate it in the picture of the field so far
  - compare it with the papers already placed: who agrees, on what
  - detect what it does not see: the population, the time cost, whether the result transfers
  - evaluate it by the kind of evidence it is (see below)
  - build from the gap: a question the field has left open
- The last move needs a picture to work from, so the first few papers get only the first five.
- Groups are provisional: papers are sorted into camps, compared directly, and re-sorted when a new paper breaks the sort.
- Work in passes of ten to twenty minutes. Overload comes and goes, and a new perspective resets the picture.
- Order in a new field: broad reviews first, then the papers that disagree with them, then the methods, authors and gaps that keep recurring, then a first drawing of the picture, then a focused question, then study design. A thesis question set before the picture exists slows every step after it.
- Open sources in order of how much support they need: images and diagrams, then an encyclopedia article for headings and vocabulary, then a textbook or review, then the research papers. The mental work is the same at every layer, and the important paper is opened last, once there is somewhere to put it. [[wiki/Dimensions/Deep Processing/Prestudy|Prestudy]] does the same at the scale of one session; the [[wiki/Dimensions/Deep Processing/Bear Hunter System|Bear Hunter System]] does it over a whole field.

```
cost per paper as the picture forms (~20 papers)

 hours |*
       | *
       |   *
       |      *
  mins |         *   *    *    *    *
       +-------------------------------
        1st     5th    10th   15th  20th
```

## What a field can see

- Kinds of evidence, weakest to strongest: a single case or anecdote; observational and cohort studies; trials that change something for one group and compare, at their strongest randomised and double-blind, meaning neither the participants nor the people measuring know who got what; systematic reviews and meta-analyses that pool many trials.
- A trial of thirty people cannot transfer to a population. A hundred trials pooled reach hundreds of thousands of people, and pooling still cannot add what no trial measured.
- A review is the best summary to date through the field's own framing. In a thin field the framing shows.
- A thing a field never measured has not been shown absent (Altman and Bland, 1995). Assume the gap and name it: which population, what time cost, what transfer.
- Example, hedged: the owner reads about forty years of spaced-repetition studies ending around 2010 as tests on short word lists over short delays, with little on time cost, sustainability, or long retention of higher-order knowledge. The literature reads as overwhelming because it is narrow.

## Where it fails

- One summary per paper and nothing placing them against each other.
- Notes keep growing while the picture stays vague.
- A generated summary reads clearer than the reader's own. The reader's picture is not there yet.
- The question was narrowed before the picture existed, so every later paper confuses.
- Writing before the picture is organised: the review has no narrative, the discussion will not write, the presentation will not compress. Weak writing is usually weak organisation, and the repair is to reorganise what is already read. Sometimes the writing skill itself is the limit, and that is a separate, slow fix.
- The ramp costs four to six months of committed practice by a teaching estimate, longer when interrupted. Quitting in week three misreads a slow start. The ramp does not pay on a short one-off project.

## Working with a language model

- Good uses, at the edge of the held picture: state the understanding and ask what is missing; check a suspected gap; find keywords, contrary positions, weaknesses, authors and concepts; a short orientation in an unfamiliar domain.
- Poor uses: summarise the field, write the review, state the consensus, pick the best theory, or read a generated summary before the paper has set its own frame.
- The model is bounded by what it can retrieve. Paywalled work is missing, mainstream work is over-represented, and it can give confident citations that do not exist. Check every citation.
- A citation-network mapper suggests papers and makes no claims. It beats walking reference lists by hand.
- Authors send a copy of a paywalled paper on polite request. The journal is paid nothing either way.

## Keeping references

Maps and other non-linear notes do not keep track of who said what, so references need a parallel system.

| Way | What it is | Best for |
| --- | --- | --- |
| Synthesise as you go | After every two or three papers, write a referenced linear piece and keep extending it | One piece of writing |
| Second brain | One page per paper with a short summary and tags, in a notes app with a graph view; trial with a handful first | References reused across projects |
| Reference chunking | Sort references by job in a citation manager: core, high-leverage applied, contextual, counterpoint, methods | Someone deep in one field, once they can judge a paper's job |

- Citing the right paper at the right moment comes from knowing how the papers relate and from using them often in writing, which works as retrieval practice.

## How to tell it is working

- The field can be explained to a colleague in eight minutes without notes.
- A new paper slots into the picture on contact, or lands in a gap that has a name.
- The camps are visible, the gaps are specific, and the questions get sharper with each paper.

## Sources

Adler, M. J., & Van Doren, C. (1972). *How to Read a Book* (rev. ed.), ch. 20. Syntopical reading: the point is the conversation, not the book.

Hart, C. (1998). *Doing a Literature Review*. Sage. The review as an argument, not a pile.

Booth, W. C., Colomb, G. G., & Williams, J. M. *The Craft of Research*. University of Chicago Press. Research as a conversation with a claim.

Nestojko, J. F., Bui, D. C., Kornell, N., & Bjork, E. L. (2014). Expecting to teach enhances learning and organization of knowledge in free recall of text passages. *Memory & Cognition*, 42, 1038–1048. Preparing to explain as a test of organization.

Altman, D. G., & Bland, J. M. (1995). Absence of evidence is not evidence of absence. *BMJ*, 311, 485. The measurement gap.

Ioannidis, J. P. A. (2005). Why most published research findings are false. *PLOS Medicine*, 2(8), e124. Reviews inherit a field's framing, measures, and populations. GRADE and ROBIS are the later instruments for that inheritance.

Walters, W. H., & Wilder, E. I. (2023). Fabrication and errors in the bibliographic citations generated by ChatGPT. *Scientific Reports*, 13, 14045. Fabricated citations as a documented failure mode, not a permanent scoreboard.
