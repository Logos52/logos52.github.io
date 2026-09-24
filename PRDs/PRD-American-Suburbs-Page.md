---
title: "PRD — The American Suburb page"
type: prd
status: unsigned
created: 2026-09-18
updated: 2026-09-18
tags:
  - prd
  - llm-wiki
  - worldviews
  - writing
---

# PRD — The American Suburb page

**Recommendation: write one argument page from the Front Page suburbs documentary and file it in Worldviews & the Political Order, under "Markets and the state".** This was decided against two alternatives: a new Economics section, which would move eight pages and change their live addresses for the sake of one new page, and the Money section, whose pages are practice pages about a reader's own money while this one is an argument about rules. Grok writes it, under Explain First with Wedge in the chat, from the banked transcript only, with the Bias QA run before Wedge sees it. The section question stays open and is Wedge's; nothing in this PRD depends on it.

**What it costs.** One Grok session, one or two rounds of Wedge's time on the explanation, and a separate cold read for lean. On disk it adds one wiki page, one blurb on the Worldviews hub, one Bibliography line, and one Error Index line. Nothing moves.

**What would flip it.** If Wedge reads the explanation and does not want the belief tested, only the numbers kept, the page is a record page and does not belong in Worldviews. If he decides the Economics section first, the page is written the same way and filed there instead; the writing does not change, only the folder.

**Retreat.** Delete the page, the hub line and the Bibliography line. No other page changes.

## The source

Front Page, *Why American Suburbs F*cking SUCK*, YouTube, 2026-08-06, 62 minutes. Banked 2026-09-18 as `/Users/n1/Research/raw/money/2026-09-18-front-page-why-american-suburbs-f-cking-suck.md`, about 10,400 words of auto-captions. The channel is already the source of six Worldviews and Concepts pages. Its per-documentary source list is at https://frontpagedocumentaries.com/#sources and may be fetched with curl, as a first-party page, for the Sources block. The analysis with the full outline of the argument and the caption garbles is `/Users/n1/Research/american-suburbs/ANALYSIS.md`.

## The page

**Job.** Answer the friend's question: why are American suburbs built this way, and who decided? The video's answer, which the page tests, is that the suburb was produced by rules written between 1916 and 1980 that no voter approved, and that a market left to itself would have built something else. The rules are single-family-only zoning, the 1926 Supreme Court ruling that allowed it everywhere, federal mortgage insurance, federally paid highways with no matching transit money, and parking minimums copied city to city from guesses. The page carries the bill those rules produced, why the rules survive, and what the places that changed them look like.

**Anti-jobs.** Not a page on housing policy in general. Not a page on retail theft, US fertility, or autonomous vehicles; those appear only where the argument uses them. Not a page that takes a position of Wedge's; he has none on record on this subject.

**Working title.** *The American Suburb - A Legal Regime*. It states the video's thesis in the section's pattern. Two alternatives were offered: *Suburbs - The Growth Ponzi Scheme* and *Zoning - The Rules Nobody Voted On*. The title is Wedge's to change.

**Shape.** The simple page shape ruled 2026-09-11: frontmatter, the title, the main statement as plain paragraphs with no heading, Core takeaways, plain sections with everyday headings, Related pages, Open questions, Sources. A Worldviews page carries How to practice this only when it gives the reader something to do; this one does not. No figure unless a picture shows what a sentence cannot; the default since 2026-09-17 is none. The one candidate is the fiscal comparison, a wide-lot street losing $326 per home against a townhouse lot gaining $51, and a sentence carries that.

**Facts.** Every number, name and case comes from the banked transcript, or from the channel's source list for the Sources block. Nothing from a model's memory or from outside research. The caption garbles in the analysis are corrected on the page: Proposition 47, single-family zoning, the Coastal Act passed in 1976, $40,000 a year. The federal highway cost split is given two ways in the video, 90/10 and 80/20; the page uses one and the Sources block says the source gives both.

**Names.** People, studies and organisations go in the Sources block. The body carries the findings as facts about the world. The one exception the wiki already allows: a named law, court case or place is a fact about the world and stays in the body.

**Links.** Related pages, each with a clause on what it contributes: Britain - Poorer Than Mississippi (refusing permission to build on land the country has), Europe - The Slow Agony (housing costs in Berlin, London and Lisbon, and pensions paid year to year, which is the shape of deferred infrastructure), Per Capita (the division the pedestrian-death comparison depends on), Socialism - The Calculation Problem (rules standing in for prices), Democracy as Sacred Cow (rules that no voter approved).

**Bias QA.** A Worldviews page passes `02 - System/Bias QA.md` before Wedge sees it: the script, the read from the holder's seat, the cold read by a separate agent with nothing but the page. The page is written from the seat of the person making the argument. The video's own concessions, such as the theft narrative being partly true, stay as the argument states them and are not enlarged.

## Success criteria

Each of these can be checked without asking what was meant.

1. Wedge accepted the explanation in the chat before any page text was written. The accepted explanation is on disk.
2. The page is at `/Users/n1/Projects/llm-knowledge-base/wiki/Worldviews & the Political Order/<title>.md` with `draft: true` until he has read it.
3. Every number on the page appears in the banked transcript or the channel's source list, checked by script, with any exception listed in the handoff report.
4. `scripts/holdings.py`, printed whole, shows no COUNT and no SLOP line outside figures. LOAD lines are handled by saying the thing in the order a person would say it, with a cut as the last resort.
5. `scripts/source-words-check.py` passes. `node scripts/lint-frontmatter.mjs` passes.
6. `scripts/bias-sweep.py` was run, the seven-test read was done, the cold read was done, and each finding was fixed or recorded with a reason.
7. Screenshots at phone and laptop width in both themes were read by the writer; nothing scrolls sideways.
8. The Worldviews hub has a blurb for the page under "Markets and the state", written under Eggbot Tight; the Bibliography has a line; the Error Index has a dated line with Wedge's words.
9. Nothing is committed or pushed until he says so.

## Out of scope

The Economics section. The three options and a recommendation are in the analysis file, section 5. It is a separate decision.
