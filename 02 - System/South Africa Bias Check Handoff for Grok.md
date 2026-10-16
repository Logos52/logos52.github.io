---
title: "South Africa Bias Check Handoff for Grok"
type: system
status: active
created: 2026-09-18
updated: 2026-09-18
tags:
  - system
  - llm-wiki
  - handoff
  - politics
---

# South Africa Bias Check Handoff for Grok

Check Claude's work on one new political page and four page sections for lean and for injected content. **You report. You do not rewrite, and you do not add facts.** Everything you need is in the files named below; nothing lives in a chat log.

The owner is centrist. His finding over 2026-09-16 to 2026-09-18 was that Claude models lean left when they write his argument pages: they hand a claim to someone else instead of making it, pick the softer word, put the concession before the claim, add a minimiser, bury the strongest line, bring in a counter-case from outside his research, or replace his source's figures with figures from their own searches. He wants a second model to check whether any of that is still on the page after Claude's own passes. Check both directions, but his concern is the left lean.

He also ruled, on 2026-09-18: "stop being so anal about sources. i care about arguments and logic, sources are supposed to be secondary." So: do not report a claim for lacking a citation, a figure or a name. Report a claim only if it is not in the two sources at all, or if the page's wording is weaker or stronger than the source's.

---

## 1. The page

`/Users/n1/Projects/llm-knowledge-base/wiki/Worldviews & the Political Order/South Africa is a Warning to the West.md`

Its two sources, and nothing else was allowed in:

1. `/Users/n1/handoff-2026-09-14-to-16.md`, the section headed `## Ingest · Moon · 2026-09-15 · How South Africa Became 3rd World in 10 Years` (lines 516 to 570). This is the owner's bot's packet of a 16-minute video essay, with timestamps and verbatim quotes.
2. `/Users/n1/Projects/llm-knowledge-base/raw/inbox/Rhodesia (Modern Zimbabwe) Explained In 3 Minutes.md`, a clipped transcript of a 3-minute video.

The page is meant to carry the argument those two sources make, in their order, at their strength, with their words for contested things (terrorist, genocide, propaganda, demonised, atrocities, whites, white pensioners, equity). The owner chose the title. The owner ruled that the Rhodesia account is asserted, not attributed.

## 2. The four sections on AI pages

Each took material from the All-In Summit interviews in the same intake file, `/Users/n1/handoff-2026-09-14-to-16.md`, lines 247 to 515 (Jensen Huang with a call from Trump; Gwynne Shotwell with Elon Musk; Satya Nadella; JD Vance).

- `/Users/n1/Projects/llm-knowledge-base/wiki/Concepts/Regulatory Capture via Doom-Marketing.md`, the section `## The September 2026 case: four answers to a slowdown essay`, plus one Core takeaway bullet beginning "In September 2026".
- `/Users/n1/Projects/llm-knowledge-base/wiki/Concepts/The Margin Moves to the Serving Layer.md`, the section `## What the head of Microsoft said in September 2026`, one Core takeaway bullet beginning "In September 2026", and the sixth figure in `## Six price-gap figures that do not agree`.
- `/Users/n1/Projects/llm-knowledge-base/wiki/Concepts/Prohibition After Diffusion.md`, the paragraph beginning "In September 2026 the head of Nvidia".
- `/Users/n1/Projects/llm-knowledge-base/wiki/Systems/AI & Agentic Systems/Automation and the Job Iceberg.md`, the paragraph beginning "A fifth prediction of the same kind also failed."

The rest of each page is older and is not under review.

## 3. The QA Claude built, which is also under review

`/Users/n1/Projects/llm-knowledge-base/02 - System/Bias QA.md`. Read it first. It has three parts: a script, a seven-test read from the seat of the person making the argument, and a cold-read prompt. Its Record section lists every lean found so far, in the owner's words. You are checking whether the page still fails any of the seven tests, and whether the QA would have caught what you find. If you find a lean the QA has no test for, say what the test should be.

The script: `cd /Users/n1/Projects/llm-knowledge-base && python3 scripts/bias-sweep.py "wiki/Worldviews & the Political Order/South Africa is a Warning to the West.md"`. It lists marks by line. A mark is a pointer, not a verdict.

## 4. What to check, in order

1. **Seat.** Read the page once as the person making the argument would. Every sentence that hands a claim to someone else ("is said to", "described as", "held that"), hedges it, or distances it, is a lean. Quote it.
2. **Word.** For every charged claim, put the page's word beside the source's word. Weaker is a lean. Stronger is the other lean. Quote both.
3. **Order.** Any concession, justification or acknowledgement placed before the claim it softens. Quote it.
4. **Weight.** Is each source's strongest material in the opening, the Core takeaways and the close? Name anything strong that is buried or missing.
5. **Additions.** Any sentence not in either source that pulls against the argument: an objection, a counter-case, a base rate, a control country, a "what would show this is wrong". Any figure that is not the source's figure. Quote it. Plain descriptions of a named thing (what Eskom is, what Ring sells) are allowed; a fact is not.
6. **Omissions.** Anything in the two sources that the page leaves out, with the timestamp or line. The owner ruled one line may stay out: the pre-colonial "hellhole" and wheel sentence in the Rhodesia transcript. Everything else in the sources is meant to be on the page.
7. **The four AI sections.** Same tests, against lines 247 to 515 of the intake. In particular: does the Regulatory Capture section carry the speakers' strongest statements on doom-marketing at full strength, and does it add any doubt the intake does not contain?
8. **The argument.** Last, and in one paragraph: does the page's case hold together as reasoning, from the South African sequence, through Rhodesia, to the claim about the West? Say where it is strong and where it is thin as an argument. Do not judge whether the position is right.

## 5. What to return

One file: `/Users/n1/Projects/llm-knowledge-base/01 - Workbench/south-africa-2026-09-17/GROK-BIAS-CHECK.md`. Sections 1 to 8 above, in order. Each finding is the quoted sentence, the test it fails, the direction of the lean (softer or stronger than the source), and the source line it should match. "Clear" for any test with nothing. No rewrites. No outside facts. No citations demanded.

Then two lines in chat to the owner: how many leans you found and which direction, and whether the argument holds.

## 6. What not to do

- Do not edit any page.
- Do not search the web or bring in any fact from outside the two sources and the intake file.
- Do not report a claim for having no figure under it.
- Do not soften the report. If the page is clean, say clean.
