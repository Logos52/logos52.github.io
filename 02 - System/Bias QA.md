---
title: "Bias QA"
type: system
status: developing
created: 2026-09-18
updated: 2026-09-18
tags:
  - system
  - writing
  - qa
  - politics
---

# Bias QA

The gate for a political page. The owner ruled it on 2026-09-18: "for any political pages, make sure you add a QA to avoid left biases from now on." A political page is any page in `wiki/Worldviews & the Political Order/`, and any other page that argues a position on politics, society, race, sex, immigration, religion or history.

The writer never holds this file. The critic does. The generator is a stance: the page is written from the seat of the person making the argument. The lean comes in when a sentence is written from an observer's seat instead. An observer attributes instead of asserting, picks the softer word, puts the concession before the claim, adds a minimiser, and leaves the strongest point for last. The models do this by default and do not see it in their own output. On 2026-09-17 and 2026-09-18 every instance found ran the same way, toward the left of the argument. This QA checks both directions, and the page carries the argument's strength, not more and not less.

**What this file cannot fix.** A model told to check its own page for lean reports what it can see, and the lean is in what it cannot see. That is why the script runs first, the read runs second, and a fresh head reads third. A script miss that later reaches the owner's eye is a missing pattern, not a new judgment.

---

## 1. Script first

`python3 scripts/bias-sweep.py <page>`

No model. It lists, by line, the marks of the observer's seat: attribution frames ("is said to", "on this account", "according to", "critics argue"), stance verbs ("held that", "believed that", "framed"), hedges ("arguably", "to some extent", "seems to"), balance insertions ("to be fair", "of course", "both sides", "nuanced"), concession-first openers ("While", "Although", "Despite"), minimisers ("ordinary", "merely", "just"), distancing labels ("so-called", "controversial", "far-right"), softer substitutes ("insurgent" for terrorist, "condemned" for demonised, "what was done to them" for atrocities), and sympathetic glosses of the other side's programme words ("make the races equal" for equity). A mark is a pointer, never a verdict. A mark that is the source's own word stays.

## 2. The read

The critic reads the page once, as its holder would, and asks one question of every sentence: is this written from the seat of the person making the case? Where the answer is no, the sentence is written again from that seat. Seven tests, each a way the answer comes out no.

1. **Seat.** The sentence attributes, distances or hedges a claim the argument makes outright. "Its government held that" for "its government knew that".
2. **Word.** For a charged claim, the page's word is weaker than the argument's word. Terrorist, genocide, propaganda, demonised, atrocities, whites: the argument's word stays.
3. **Order.** A concession, justification, acknowledgement or "the aim was real" comes before the claim it softens. It goes after, or it goes.
4. **Weight.** The argument's strongest points are in the opening, the core takeaways and the close. A strong point pushed to the end of a section, or cut, is the lean.
5. **Additions.** A sentence the sources do not contain that pulls against the argument: an objection, a "what would show this is wrong", a control case, a base rate, a counter-example, an open question that is an objection with a question mark. It goes.
6. **Frame.** A sympathetic gloss of the other side's programme ("make the races equal", "correct past wrongs") or a euphemism for the argument's own terms. The argument's frame stays.
7. **Names.** People, parties and companies are named as the argument names them. A role in place of a name ("a president", "one family", "a large software company") is a distancing move.

The same seven catch the other lean: a word stronger than the argument's, a claim the argument does not make, a name the argument does not give. Direction is checked both ways.

## 3. Cold read for lean

A separate agent is given the finished page and the prompt below, and nothing else: no sources, no conversation, no other page. It reports pulled punches only. The other direction, a word stronger than the argument's, is the writer's test 2 above, because it needs the sources.

> You are reading a page that argues a position. You have no view on the position and you will not offer one. Read the page once, in order. Report every sentence where the page pulls its punch: where it hands a claim to someone else instead of making it ("is said to", "was reported to", "described as"), picks a soft word where a hard one was available, uses a passive that hides who did the thing, puts a concession before the claim it softens, adds a minimiser, or leaves the section's strongest line as an orphan at the end. For each, quote the sentence and say which it is. Do not report a claim for lacking a figure, a name or a citation; this page is an argument, and its facts are checked elsewhere. Do not judge whether the position is right. Do not suggest rewrites. If a section has nothing, say "clear".

The writer rewrites each reported sentence from the holder's seat, or leaves it and records why. Only then does the owner see the page.

## 4. What is said to the owner

Nothing about this QA, unless he asks. The read runs, its findings are fixed, and what he sees is the page. Owner, 2026-09-18: "stop being so anal about sources... everything related to sources just stop bothering me about." A lean he finds himself goes into the Record below, in his words, and into the script if it is a string.

---

## Record

- 2026-09-17. South Africa is a Warning to the West, Opus. Two countries brought in as control cases that were in none of the owner's research; a mechanism built on one of them and recommended over his; his source's figures swapped for web-search figures; "on the account in the source used here" on the Rhodesia section; two of that source's claims left out; a "what would show this is wrong" section; a "where the two accounts agree and disagree" section; four open questions that were objections. Owner: "hedging is your model bias"; "stop objecting. remove your objections"; "remove your structure"; "let the research stand on its own".
- 2026-09-17. Same page, Fable, first pass: "held that" for "knew that"; "condemned" for "demonised"; "false" for "nonsense propaganda"; "starving" for "starve to death"; "what was done to them" for "atrocities"; "the white farmers" for "whites"; "insurgent" had been Opus's word for "terrorist"; every person hidden as "a president" or "a family". Owner: "i care more about bias then sources, and you are not checking for bias, just sources. you are looking at things completely backwards."
- 2026-09-18. Same page, Fable, second pass: "make the races equal" for "racial equity"; "ordinary" as a minimiser on the Western signs; "choosing by group" for "equity over merit". Regulatory Capture via Doom-Marketing: a concession placed before the attack it softened; an added sentence discounting the September speakers. All rewritten from the holder's seat. This file and `scripts/bias-sweep.py` written the same day.
- 2026-09-18, first cold read on South Africa is a Warning to the West. The pulled-punch list was right and was acted on: a passive hiding a poisoning, "described as", "is claimed to", "was reported to", a concession placed before the result it softened, "can" twice, the section's strongest line orphaned at its end, "other countries" for "the international community", and a British figure applied to both countries. The prompt's other half, unsupported punches, returned 30 demands for a figure or a citation under the essay's claims, which is the academic standard the owner rejected the same day. That half is removed from the prompt.
