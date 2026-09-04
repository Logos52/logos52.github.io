---
title: "ELI5 is a format, not a writer"
type: journal
status: settled
created: 2026-09-05
updated: 2026-09-05
description: "Wedge retired Haiku as the ELI5 writer. The ELI5 treatment is now the format (contents bar, subject defined in sentence one, example bullets, a figure per idea) on top of the Fable 5.1 one-pass method with no rewrite pass. First page built this way: Dating Apps - The Gini Coefficient, with twenty figures."
tags:
  - journal
  - writing
  - generator
  - eli5
  - decision-making
---

# ELI5 is a format, not a writer

On 5 September 2026 Wedge asked for a wiki page on a YouTube video about dating apps and the Gini coefficient, written "using our typical workflow", and then added: "dont forget i need the ELI5 skill treatment, so basically add lots of diagrams and graphs." Fable built the page under The Generator with a fresh Grok rewrite pass and a fresh Grok cold read, put twenty figures on it, and had Haiku write the opening definition cold, the way the ELI5-Haiku draft generator said to.

Wedge then said the Haiku part was wrong. His words: "Haiku generator is not necessary anymore, i've been wanting to change the ELI5-Haiku generator. actually i thought i already changed it but seems like Fable didn't get my directions." And: "what i wanted is the format of ELI5 with the writing and prose of the Fable 5.1 generator we already built. the one without the rewrite prompt."

What that settles. The ELI5 treatment is a format: a contents bar, the subject defined in sentence one, two or three example bullets opening every section, a figure for each main idea with the prose under it, and the gate script that checks those things. The prose under it comes from the Fable 5.1 one-pass method that he ruled for on 2 September: a fact list made from the source in the writer's own words with the source then closed, an outline, the stance paragraph, two accepted pages of the same kind in front of the writer, one pass in the main window, the fact gate at dropped 0 and added 0, the sieve, and the holdings ledger for LOAD. No rewrite pass and no cold read. Haiku writes nothing.

Where the change landed the same day: the pick paragraph of `02 - System/Writing Pipeline.md`, a new Working row in `01 - Workbench/WRITING-PIPELINE-CATALOG.md`, and a ruling block at the top of `01 - Workbench/GENERATOR-eli5-haiku-DRAFT-2026-09-01.md`. His earlier direction to change the generator had not landed anywhere on disk, which is why Fable did not have it.

The page was rewritten in one pass under the method, with the twenty figures and the format kept, and pushed. The diagrams are drawn by `scripts/gen-dating-gini-diagrams.py` so they regenerate from the numbers.

## Later the same day: the three-part layout

After reading the finished Gini page, Wedge said: "i need core takeaways (kind of like a TLDR) close to the top of the page. maybe just bullet point arguments of the primary things. because um the pages are too source and data heavy." Then: "i tell you i like them but you never do it. so maybe make this a standard practice for almost all the pages." Then: "i basically don't want statistics to lead the page, i want it to be maybe secondary. the first section is just reasoning & maybe some small diagrams. the second section is the full stats bloat that i see. third section is sources. first section should have the abstract, core takeaways, small essay and conclusion all together. maybe a couple of key diagrams. i think that's an easier format for the reader." And: "i prefer to read just the first section myself personally."

So every page built this way now has three top-level sections. Reasoning holds an abstract, four to six core takeaways, a short essay with one or two key diagrams, and a conclusion, with few numbers. The numbers holds every statistic with its figure. Sources and links holds the links into the knowledge base, the open questions, and the sources. The assembler writes that shape, the gate script fails a page without it, Writing Standards §4 lists it under what every wiki page owes, and five pages carry it: Dating Apps - The Gini Coefficient, The Gen Z Gender War - The Split, Single-Sex Spaces - The Asymmetry, Socialism - The Calculation Problem, and Britain - Poorer Than Mississippi.
