---
title: "Distributions Handoff for Grok"
type: system
status: active
created: 2026-08-29
updated: 2026-08-29
tags:
  - system
  - llm-wiki
  - handoff
  - writing
---

# Distributions Handoff for Grok

You are writing one wiki page: a cookbook of the standard probability distributions, ending with a worked case that simulates one person's text messages across a day. Fable wrote it three times on 2026-08-28 and 29 and the owner struck every opening. The writing is yours now. Read this once, then the files it names, in the order given.

## 2026-09-01: the page was replaced. This lane is closed unless the owner reopens it.

The owner replaced `/Users/n1/Projects/llm-knowledge-base/wiki/Concepts/Probability Distributions.md` with the picture-board version: his accepted opening definition, a contents bar, the four groups, one Haiku-written paragraph per distribution with real-world examples, the family figure, links, and sources. Every reader-facing sentence was written by Haiku from a spec, and the method is in `/Users/n1/Projects/llm-knowledge-base/01 - Workbench/GENERATOR-eli5-haiku-DRAFT-2026-09-01.md`. The three-stage lane below and the outline work are superseded. Do not start them without his word.

## Rulings since your outline, 2026-08-29 afternoon

Read this section first. It changes the lane below. Fable's turn on the page ended at the owner's word: "stop everything. pass to Grok."

1. **The opening is ruled.** The owner asked for four cold intros to "Probability Distribution", one each from Opus, Fable, Sonnet, and Haiku, same prompt, no examples. He picked Haiku's: "in this case, seems like Haiku is the best." Then: "keep that Haiku definition then." It is on the live page now, verbatim, and in your DRAFT.md. It is of the form "X is a Y", which G-B struck earlier that day. His later pick wins. Do not write another opening. Do not touch this one. The catalog entry is H-1.

2. **Every shape section is ruled, in this order.** His words: "the distributions need to start with use cases, and examples first. then the definition. and the definition probably also needs to be written by Haiku." Then: "WHY is more important than WHAT."
   - First, a short bullet list of simple everyday examples. Under a plain noun as the label, "Examples", and nothing else. "Where it turns up:" was struck: "oh my god. you stupid fuck. just forget it." A run of verbless fragments in prose was struck: "no. i don't want assembled sentences. we talked about that." Catalog entries P-1 and P-2.
   - Second, why the number takes that distribution, and what breaks it, in whole sentences.
   - Third, the definition, from `/Users/n1/Projects/llm-knowledge-base/01 - Workbench/distributions-2026-08-29-grok/DEFINITIONS-haiku.md`, verbatim. Sixteen definitions, written by Haiku cold on 2026-08-29, each naming the distribution in its first words and using the standard terms. Do not rewrite them. If one is wrong on a fact, ask Haiku again, do not patch it yourself.
   - Fourth, the reference lines, as the page has them.

3. **Not ruled, for you to raise with the owner.** The page as it stands says dial, middle, spread, and shape where the Haiku definitions say parameter, mean, standard deviation, and distribution. The owner has not ruled on the house words. Fable read them as the same fault as the withheld name. Ask him before writing a section either way.

4. **On disk, uncommitted.** The live page with the Haiku opening. Your lane files with the Haiku opening. The catalog with H-1, P-1, P-2, and the section ruling. Nothing has been pushed.

## What is already done and stays

- The facts. Every fact the page may carry is in `/Users/n1/Projects/llm-knowledge-base/wiki/Research/Probability Distributions Bank.md`. Fifteen shapes, the turnings between them, three mistakes, a seven-layer simulation, four checks, costs, five sources. Nothing outside the bank goes on the page.
- The figures. Twenty finished SVG figures, drawn from the real density or mass functions, in `/Users/n1/Projects/llm-knowledge-base/assets/distribution-diagrams/`. The bank's table "Diagrams already built" names each one and says what it shows. The page carries each as an empty marker pair on its own lines, with a blank line above and below:

```
<!-- diagram:NAME -->
<!-- /diagram -->
```

  `python3 scripts/gen-distribution-diagrams.py --inject "<page path>"` fills every pair. You do not redraw, describe as drawn, or drop any of the twenty.
- The strikes. The bank opens with three sections quoting every struck opening in the owner's words. Read them twice before you read the facts.

## What the owner wants, in his words

- "WPW format." Whole, part, whole. The page opens on the whole, every group of shapes opens on its own whole, the page closes on the whole again, advanced. `Writing Standards.md` §2 defines it.
- "Family first." Sentence one is about probability distributions, the family, and not about any one member.
- "This is WHOLE content, not parts." The opening says what the thing is, what it gives, how you pick one. It does not define Poisson or the normal one by one. It does not count the shapes or the kinds. Those belong to the parts.
- "No vagueness." The nouns in the opening are things, not categories. "Some numbers", "a person", "the shape", "most people", "a number that varies" were all struck. Poisson, the bell curve, a count of tickets in an hour, a reply delay are things.
- "Don't speak claudish." One fact per sentence. Everyday words. No sentence that says what a thing is not and then what it is. No dash, colon, or semicolon joining two facts. No clever noun. No sentence that would work as a quote on a card.
- "Present me options." For the opening, bring three, from three different moves in `/Users/n1/Projects/llm-knowledge-base/wiki/Writing Craft/Opening Moves Catalog.md`, each written out in full.

## The lane

Three stages, in order. Each stage's owner file wins over this summary.

1. **Outline.** Read `/Users/n1/Projects/llm-knowledge-base/02 - System/The Generator.md`, then `/Users/n1/Projects/llm-knowledge-base/02 - System/The Generator - Selfhood v2.md` step 2a, then `/Users/n1/Projects/llm-knowledge-base/02 - System/Writing Standards.md` §2, §4, §6, then `/Users/n1/Projects/llm-knowledge-base/02 - System/Readers.md` ("A wiki page" is your reader), then `/Users/n1/Projects/llm-knowledge-base/02 - System/Rejected Specimens.md`. Then the bank. Put an outline to the owner: every section, whole or part, what it carries, its register, which of the twenty figures sit in it, what stays out. The two struck outlines are in `/Users/n1/Projects/llm-knowledge-base/01 - Workbench/distributions-2026-08-28/round-1/OUTLINE.md` and `/Users/n1/Projects/llm-knowledge-base/01 - Workbench/distributions-2026-08-28/OUTLINE.md`. Their shape order for the fifteen shapes and their figure placements were sound. Their openings were not.
2. **Writing.** One paragraph at a time, to the owner, never the whole page at once. After each paragraph run `python3 scripts/holdings.py <draft>` from the vault root and use only what the ledger holds. Write to `/Users/n1/Projects/llm-knowledge-base/01 - Workbench/distributions-2026-08-29-grok/DRAFT.md`, with the frontmatter the previous drafts used (title, type reference, status developing, created, updated, description, tags: statistics, probability, simulation, modelling, agents).
3. **Rewrite.** A fresh head with nothing but the draft and the block in `/Users/n1/Projects/llm-knowledge-base/02 - System/Rewrite Prompt.md` rewrites the page. The writer never runs it on his own draft in the same context. Output to `REWRITTEN.md` beside the draft.

Then the gate in Writing Standards §3, then the page goes to `/Users/n1/Projects/llm-knowledge-base/wiki/Concepts/Probability Distributions.md`, then the inject script, then `npm run build` and `npm run guard`. The owner rules on the page by eye before it is committed.

## Where things are

- Vault root: `/Users/n1/Projects/llm-knowledge-base/`
- Current page on disk, Fable's round two with the struck opening, for facts only, closed while you write: `/Users/n1/Projects/llm-knowledge-base/wiki/Concepts/Probability Distributions.md`
- Your working folder: `/Users/n1/Projects/llm-knowledge-base/01 - Workbench/distributions-2026-08-29-grok/`
- Figure script: `/Users/n1/Projects/llm-knowledge-base/scripts/gen-distribution-diagrams.py`
- The owner's operating rules for you: `~/.grok/AGENTS.md`
