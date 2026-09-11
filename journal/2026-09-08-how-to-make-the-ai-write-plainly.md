---
title: "How to make the AI write plainly"
type: journal
status: current
created: 2026-09-08
updated: 2026-09-08
description: "The owner's ask for a new approach to plain writing in files, the research pass that answered it, the four options, and the one recommended."
tags:
  - writing
  - generation
  - research
---

# How to make the AI write plainly

The owner's words, 2026-09-08, after two independent writers opened the China page with the same rejected sentence: "i need a new approach. help me come up with something. do a research pass on writing and how to make AI write plainly." Then: "make sure you are actually answering my question. how to make AI write better. im not trying to ask 'how writers write'." His standard: "in general i don't like most writing. i want things to be plain and simple. most writing is flowery and verbose." And the place where the fault lives: "AI in the chat window is much different from ai writing in dedicated md files like what i want. i'm more interested in AI writing in dedicated md files."

## What the research found

The model writes flowery and verbose because its training put that in. Instructions cannot take it back out. Three findings carry the answer.

The flourish is measurable, and post-training adds it. A 2025 study in PNAS found instruction-tuned models use nominalizations at 1.5 to 2 times the human rate and participial clauses at up to 5.3 times. A nominalization is a verb turned into a noun, like "argument" for "argued". The owner's banned word list is a list of nominalizations. Base models show much less of this. So the fault is the register the model was trained to prefer for documents, and a file is a document.

Rules make it worse. Two papers on the pink elephant effect show that naming a thing to avoid raises the chance the model produces it. The owner's six weeks of record agree. Edit passes make it worse too. Gwern found Claude's edits individually defensible and collectively disastrous. The owner ruled the same on the rewrite pass on 2026-09-02.

What the writer continues matters more than what the writer is told. A 2025 study found few-shot examples gave up to 23.5 times the style match of instructions. Continuation, where the model carries on a document instead of answering a request, reached 99.9 percent. The owner's own record says the same. His accepted pages in front of the writer produced accepted pages. Two smaller findings: a named reading level is followed where "make it simpler" is not, and Anthropic's guide for Fable 5.1 gives a paragraph defining mannered prose, to go in the user message. That paragraph has never been used in this vault.

Why a file goes wrong and a chat reply does not. A reply is addressed to a person who will answer, so the model writes near the spoken end of the register scale. A file has no reader in it, so the model writes at the document end, where the training pushed hardest. No study compares the two modes directly. That explanation is inference from the register studies.

## The approach recommended

Stop giving the writer a task. Give it a document to continue. Two or three of the owner's accepted pages in full, then the new page's title, then the fact file marked as facts only, and Anthropic's one paragraph as the only instruction. Effort high, not xhigh. Test on the China Reasoning section against the writer B output of 2026-09-08. Before the owner reads the result, a script counts nominalizations per hundred words, participle openings, abstract subjects, sentences over 25 words, and grade level, against a baseline from his accepted pages. Plain becomes a number, and the gate becomes a lookup. The script is not built yet.

Three other options are written up beside that one: the Anthropic paragraph alone, five openings with probabilities for the owner to pick from, and one paragraph per turn to him.

## What the owner decides

1. Build the counter before the test, or run the test on his eye first.
2. Which two or three accepted pages seed the continuation. The candidates from the record are Two Meanings of Ego and Single-Sex Spaces.
3. Effort high or medium for the test.

## Files

- `/Users/n1/Projects/llm-knowledge-base/01 - Workbench/plain-writing-2026-09-08/RESEARCH.md`, the findings with 19 sources.
- `/Users/n1/Projects/llm-knowledge-base/01 - Workbench/plain-writing-2026-09-08/APPROACH.md`, the four options, the counter, the recommendation.
- `/Users/n1/Projects/llm-knowledge-base/02 - System/Plain AI Writing Handoff for Grok.md`, the X lane on getting plain prose out of a model in files. A first draft about how human writers write was struck by the owner and deleted.
- `/Users/n1/Projects/llm-knowledge-base/01 - Workbench/china-fakes-2026-09-06/side-by-side.html`, the two independent writers' outputs that opened this. Both copied the opening sentence the outline handed them.
