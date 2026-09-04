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
