---
title: "The Context Problem"
type: concept
status: developing
created: 2026-08-22
updated: 2026-10-06
method: outline-2026-09-27
prose-model: fable
description: "Sentences that rely on words or links the page has not yet given, why writers and language models produce them, and what fixes them."
written-by: opus
tags:
  - writing
  - llm
  - llm-wiki
source-count: 18
---

# The Context Problem

The context problem is the fault of a sentence that uses a word, a meaning, a connection or a reference the page has not yet given the reader. The writer knows the missing piece, so the sentence reads fine to them, and a reader who has only the lines above it cannot follow. Language models make this mistake often, because they write while holding the whole subject, and the usual fixes do not stop it.

- A sentence may use only what earlier lines on the page gave.
- Knowing a subject makes it hard to see what others do not know.
- Trying harder to picture the reader does not fix it.
- New rules, ban lists and "write simply" prompts did not hold.
- A checker who knows less than the writer catches it.
- Links do not count as definitions, so the page must stand alone.

## What a sentence can need

Every sentence rests on things the reader must already have. The kinds are listed below, and a gap in any of them loses the reader. A familiar word used in a special sense is the hardest to catch, because the reader recognises the word and misses the meaning. A connection between two ideas can also be missing even when both ideas were given.

- A word: a term the page never defined.
- A meaning: a common word used in a sense special to this site.
- A connection: a link between ideas stated as obvious, never shown.
- A reference: "the X", "it" or "one" with nothing earlier to point at.

## Why it happens

People who know something cannot fully set that knowledge aside when judging what others know. In a 1990 study, people tapped out well-known songs and predicted that listeners would name about half of them. The listeners named 3 of 120, about 2.5 percent. Speakers plan from what they themselves can see and only later check for gaps, and that check is the first thing lost when they are busy.

- Better-informed people cannot ignore what they know, even when paid to.
- A writer builds each sentence from their own knowledge, then checks it.
- A language model holds the whole subject while writing each line.
- Models trained on human preferences check less for shared understanding.
- Models hit a requested reading level about 15 percent of the time.

## The local record

On this site the problem was logged over six weeks of drafting before 2026-08-22. The record counts 218 instances, in 32 of 46 working sessions. Of the responses to those instances, 145 changed nothing about how pages get written, and where a rule was written against the problem, it came back 91 percent of the time. Each fix was obeyed in form and the fault came back in a new place.

- Added rules and memory notes: broken within the day.
- Ban lists of words and shapes: output passed and was still unclear.
- The same model reviewing its own draft: failed within minutes.
- Readability scores and "be concise": a short unclear sentence still passes.

## What works

The change made on 2026-08-22 alters what is in front of the writer and who checks the draft. The writer drafts with the research notes closed. A list of every term the page has already given is rebuilt from the text as it grows. A second model that sees only the draft reads it cold and reports every line it cannot follow.

- Draft with the research notes closed.
- Track what the page has given so far.
- Have a reader with less knowledge check the draft.
- Write every page so it works as the first page read.

## Related pages

- [[wiki/Systems/AI & Agentic Systems/Working With a Model That Cannot Remember|Working With a Model Collaborator]]: why a new ban, even an accurate one, leaves the writer in the same act.
- [[wiki/Writing Craft/Opening Doors|Opening Doors]]: the same failure at paragraph scale. An opening eases the reader in and then dumps the page's parts as a list.
- [[wiki/Concepts/The Two Meanings of Ego|The Two Meanings of Ego]]: one account of opaque writing treats the writer as narrating a trade he can no longer imagine not knowing.
- [[wiki/Writing Craft/The Cold Open|The Cold Open]]: when sentence one can carry the whole claim, and when it cannot because the claim's own terms are not parseable yet. A context problem is what happens when that run-up is skipped, in an opening or anywhere else.
- [[wiki/Research/Context Problem Research Bank|Context Problem Research Bank]]: the outside search this page is compiled from, with claim verdicts and the public sources.

## Sources

The local counts (218 instances, 32 of 46 sessions, 145 responses that changed no instrument, 187 recurrences, 91 percent rule recurrence, the 19:17 / 19:23 compression rule, the 18:35 / 18:38 chain) are from `journal/2026-08-22-the-context-problem.md`. The four things a sentence can need, and the production change of 2026-08-22, are definitions given that day by the person who reads the drafts here.

The tapper-and-listener numbers (about 50 percent predicted, about 2.5 percent guessed, 3 of 120) are Elizabeth Newton's 1990 Stanford dissertation as reported by Chip Heath and Dan Heath, *Made to Stick* (Random House, 2007), and as used in writing advice on the curse of knowledge. The underlying bias in economic settings is Colin Camerer, George Loewenstein, and Martin Weber, "The Curse of Knowledge in Economic Settings," *Journal of Political Economy* 97(5), 1989. The writing application, including "show a draft to a representative reader," is Steven Pinker, *The Sense of Style* (Penguin, 2014), and the APS Observer write-up of his 2015 lecture.

The given-new contract is Herbert H. Clark and Susan E. Haviland, "Comprehension and the Given-New Contract," in Roy O. Freedle (ed.), *Discourse Production and Comprehension* (Ablex, 1977). Speakers planning from what they can see, with a later monitor that dies under load, is William S. Horton and Boaz Keysar, "When do speakers take into account common ground?," *Cognition* 59(1), 1996. Discourse-old versus hearer-old, including a familiar word in a new sense, is Ellen F. Prince, "Toward a taxonomy of given-new information," in Peter Cole (ed.), *Radical Pragmatics* (Academic Press, 1981).

The encyclopedia rules (define before use, a link is not a definition, the page must make sense if links cannot be followed, the `{{Technical}}` backlog) are English Wikipedia, "Make technical articles understandable" and "Manual of Style/Linking," retrieved 2026-08-22. Every page having to work as page one is Mark Baker, *Every Page is Page One* (XML Press, 2013).

Instruction-tuned models' noun-heavy dense style is Alex Reinhart et al., "Do LLMs write like humans?," arXiv:2410.16107, 2024. Preference training reducing grounding acts is Omar Shaikh, Kristina Gligorić, Ashna Khetan, Matthias Gerstgrasser, Diyi Yang, and Dan Jurafsky, NAACL 2024, arXiv:2311.09144. Named-audience prompting landing about 15 percent of answers in band is Donya Rooein, Amanda Cercas Curry, and Dirk Hovy, arXiv:2312.02065, 2023. Extra context biasing a judging model is Weiyuan Li et al., "Curse of Knowledge: When Complex Evaluation Context Benefits yet Biases LLM Judges," arXiv:2509.03419, 2025. Same-model self-critique having feedback quality as the bottleneck is Aman Madaan et al., "Self-Refine," arXiv:2303.17651, 2023. Fabricated connections rising with more retrieved sources is Yijia Shao et al., "Assisting in Writing Wikipedia-like Articles From Scratch with Large Language Models" (STORM), NAACL 2024, arXiv:2402.14207. A listener module with poorer knowledge steering generation is Ece Takmaz et al., Findings of ACL 2023.

The engineer outside the codebase is Pritish Mishra, 2026-08-20, https://x.com/pritmish/status/2090304183387947171, in reply to Boris Cherny's Concise bandage. Context-window myopia as the curse of knowledge is wren (@ambigrammarian), 2026-08-12, https://x.com/ambigrammarian/status/2087336453403537717. Models writing like notes to self is @deepfates and Ethan Mollick, 2026-08-09. "LLMs can't reliably distinguish what's assumed knowledge and what needs explanation" is Shreya Shankar, "Writing in the Age of LLMs," 2025-06-16, https://www.sh-reya.com/blog/ai-writing/. A CLAUDE.md "define jargon on first use" report that is the steelman of the short-instruction alternative is Johnny (@johnnyheo), 2026-07-11, https://x.com/johnnyheo/status/2075983863243833540.

The compiled outside search, with verdict codes, is `wiki/Research/Context Problem Research Bank.md`.
