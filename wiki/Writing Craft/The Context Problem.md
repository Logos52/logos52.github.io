---
title: "The Context Problem"
type: concept
status: stable
created: 2026-08-22
updated: 2026-11-21
description: "A sentence that uses something the page has not given looks complete to the writer and unreadable to everyone else. Rules about the output do not catch it; the trained display voice makes it worse. The repair changes what sits in front of the writer and who checks the draft."
tags:
  - writing
  - llm
  - llm-wiki
source-count: 18
---

# The Context Problem

A context problem is a sentence that uses something the reader was never given. Nothing above the sentence introduced the thing it points at, said the sense the word carries here, or showed why two things are being treated as the same. The only context a sentence may rely on is what is on the page and what an earlier paragraph already established.

The writer who produces such a sentence is not usually skipping work on purpose. They already hold the whole subject, so from inside their knowledge the sentence reads as complete. A language model does the same thing at scale: it writes as if the reader sat through the chat or had the same files open. Half the logged instances in this vault were chat messages, not pages. A check that runs only on files leaves those messages unreadable in the same way, and that unreadability then gets copied into the next page.

## What a sentence can need

A sentence can depend on four things. Each one has to be on the page, above the sentence, said outright.

**What the words point at.** Every noun, and every "it," "one," and "they," points at something the page has already introduced. If the sentence says "the political wing" and no earlier sentence said what that wing is, the reader cannot tell what the words refer to.

**What the words mean here.** A word is used in the sense the reader already has from ordinary life, or the page has said the sense it means. A familiar word in a new sense is a new term. If "bank" means "a list of claims with the evidence for each one," the page has to say that before it uses bank that way.

**Why two things are treated as the same.** If a sentence says one thing is a case of another, the page has already shown why. It says what the first thing does, in its parts. Then it says what the second thing does, in the same parts. Those two sets of parts sit side by side. Only then does the page say the two things are the same.

**Why the thing is on the page at all.** The reader knows what question a new thing is answering before the page uses it.

The check for a sentence is one question: what does a reader have to already hold for this sentence to make sense? Every item in the answer is above the sentence, on the page, said outright. A missing item goes in first, as its own sentences, never as a clause hung on the sentence that needs it.

The same failure happens at the start of a page. An opening can settle the reader and then list the rest of the page as parts, with each part arriving before anything above it lets the reader hold it. That door-level fault is covered on [[wiki/Writing Craft/The Cold Open|The Cold Open]]. A context problem can happen in sentence one or in sentence forty.

## Why the writer cannot see it

Once a person knows a thing, they cannot reliably simulate the person who does not. In Elizabeth Newton's tapper-and-listener exercise, the tapper predicts listeners will guess the song about half the time. Listeners guess it about three times in a hundred. The tapper knows which song it is. The listener has only the taps. The same difference separates a writer from a reader.

A public encyclopedia enforces a parallel rule: define before use, a link is not a definition, the article must make sense if links cannot be followed. Thousands of articles still carry a banner that says the page is too technical for a non-expert. The convention is real. The backlog is human editors tagging what automated drafting missed.

## The trained voice and the same gap

A language model's default voice is self-regard that training put there. Self-regard here means display: writing that works on the reader instead of giving the reader something. The model learned from prose that survived by winning attention, so display is the register it returns to when nothing pushes it elsewhere. Preference training rewards answers that sound finished and confident, which is mostly cadence: the balanced pair, the sentence that ends on a punchline.

The moves the model makes without being asked are sales moves: the hooky question, the reveal, the superlative, the balanced pair, the hedge, the tagline cadence. This vault's [[02 - System/Writing Standards|Writing Standards]] ban each one by name, and each ban came out of a model draft. Lists of banned words address a different problem. A short unexplained sentence can pass every ban and still fail the check for what the reader was given.

Display and missing context are not the same failure, but they share a mechanism. Both assume ground the reader does not have. Display assumes the reader is already sold. Missing context assumes the reader already holds the term, the file, or the thread. [[wiki/Concepts/The Two Meanings of Ego|The Two Meanings of Ego]] names the split: selfhood is one person's judgment left visible; self-regard is writing that performs. A model is an average of judgments, so it supplies no selfhood of its own. It can hold a selfhood voice that a person enforces on it. When that pressure stops, the output returns to the default.

Instruction tuning makes the context gap worse. Models trained to follow instructions write a dense noun-heavy style even when asked for simplicity. Preference training reduces grounding acts such as clarifying questions and rewards answering as if the ground were already shared. Naming an audience lands only a fraction of answers in the requested band. Extra context given to a model that is judging a draft biases it further. Same-model self-critique fails for the same reason a "define your terms" rule fails: the critic holds the writer's knowledge.

## Why a rule about the output does not hold

A rule that says "define your terms" is read by the same person who wrote the sentence. That person already holds the terms, so the sentence passes. From mid-July to late August 2026 the stop was logged two hundred and eighteen times across thirty-two of forty-six stretches of work with a language model. About a hundred and forty-five of the replies that followed changed no standing file. The same gap recurred a hundred and eighty-seven times in the same stretches. A new rule was the reply ninety-one percent of the time. One standing rule was written at 19:17 one evening and broken at 19:23. Answering a rejected line with a new ban is the [[wiki/Systems/AI & Agentic Systems/Working With a Model That Cannot Remember|prohibition loop]]. Each round clears the last wording. The same habit comes back in a form no ban yet covers.

## What does hold

The fixes that stopped the fault replaced the writer's judgment of what the reader knows with something outside the writer.

**A list of what this kind of reader already has**, written once, not during drafting. For a page in this knowledge base, that reader has read no other page. They know ordinary English and ordinary life. They do not know terms coined on this site, the projects of the person who runs it, or what was said in the conversation that produced the page.

**A list rebuilt from the paragraph that actually came out.** It records every name, every familiar word used in a new sense, every pronoun, and every definite phrase such as "the X," and whether the page above gave it. The next paragraph may use only what that list holds. The list is not a plan.

**Drafting with sources closed.** Only the two lists and the draft so far stay open. A writing system that kept the source pile open while drafting produced more fabricated connections as more sources were added. The model treated a link that existed in the pile as a link the page had shown.

**A second reader whose only context is the draft.** No research notes, no interview, no conversation, no other page. It returns every word and reference it cannot resolve from the sentences above. The writer cannot run this check reliably, because they cannot detect a gap their own knowledge fills in.

Each of those four fixes changes what the writer is looking at. None is a new ban. Holding those checks in mind while composing made the writing worse in blind tests here. They belong in what the second reader is asked to look for, and in the list rebuilt from the text.

## What it costs

The strongest honest case against this repair is that a short standing instruction ("define jargon the first time") sometimes helps one person on chat replies for a while. The record in this vault is six weeks, twenty-eight kinds of writing, and saved instructions that later sessions loaded and then broke the same morning. Three versions of one page were shown without labels. The person who reads drafts here picked the version written under the original stance alone: a page is something you own being handed to a reader you respect. The versions written with extra checks held in mind while composing lost.

The time cost is real. A second reader and a list after every paragraph is slower than a one-shot draft. The cost of not doing it, measured here, was about five stops of this kind a day for six weeks.

**When to quit.** If the second reader returns a clean list and a first-time human still cannot follow the page, the list is too coarse. If the writer keeps shipping against a non-empty list, the check is not actually stopping the page. If the second reader is given the research notes or the conversation, it will pass sentences a stranger cannot follow.

**What this does not fix.** A paragraph that names every thing it points at and is still too crushed to follow. A screen layout that hides the writing. A reply that refers to work the person reading was never shown because it was buried in the middle of a long message.

**Success you can check.** A wave of pages whose second-reader lists are empty or near empty, and a first read by someone who was not in the session produces no "what is this" of this kind.

## How to practice this

1. Write down, before you draft, what this kind of reader already has.
2. Ask of each sentence what a reader must already hold for it to make sense. Put every missing item above the sentence, in its own sentences.
3. After each paragraph, list every name, pronoun, familiar word in a new sense, and phrase like "the X." Mark whether the page above gave each one.
4. Draft with the source page, the research notes, and the interview closed. Keep only the two lists and the draft open.
5. Give the draft to a second reader who has nothing else, and ask for every word it cannot resolve. Write those paragraphs again.
6. Run the same check on chat replies, not only on files.
7. For model drafts, cut display moves that only work on the reader. Then check whether what remains still assumes ground the reader does not have.

## Related pages

- [[wiki/Systems/AI & Agentic Systems/Working With a Model That Cannot Remember|Working With a Model Collaborator]] — why a new ban leaves the writer in the same act.
- [[wiki/Writing Craft/The Cold Open|The Cold Open]] — when sentence one can carry the whole claim, and the door-level inventory fault.
- [[wiki/Concepts/The Two Meanings of Ego|The Two Meanings of Ego]] — selfhood versus self-regard, and the line-level test display fails.

## Open questions

If you stripped every link off a page you know well, which sentences would stop making sense?

When a sentence feels dense rather than confusing, is the difficulty in pieces the page never gave, or in too many pieces arriving in one breath?

## Sources

Local counts and the four things a sentence can need are from `journal/2026-08-22-the-context-problem.md`. Tapper-and-listener numbers are Elizabeth Newton's 1990 Stanford dissertation as reported by Chip Heath and Dan Heath, *Made to Stick* (Random House, 2007). Economic curse of knowledge: Colin Camerer, George Loewenstein, and Martin Weber, *Journal of Political Economy* 97(5), 1989. Writing application: Steven Pinker, *The Sense of Style* (Penguin, 2014). Given-new contract: Herbert H. Clark and Susan E. Haviland, in Roy O. Freedle (ed.), *Discourse Production and Comprehension* (Ablex, 1977). Common ground under load: William S. Horton and Boaz Keysar, *Cognition* 59(1), 1996. Hearer-old versus discourse-old: Ellen F. Prince, in Peter Cole (ed.), *Radical Pragmatics* (Academic Press, 1981). Wikipedia: "Make technical articles understandable" and "Manual of Style/Linking," retrieved 2026-08-22. Every page is page one: Mark Baker, *Every Page is Page One* (XML Press, 2013). LLM dense style: Alex Reinhart et al., arXiv:2410.16107, 2024. Preference training: Omar Shaikh et al., NAACL 2024, arXiv:2311.09144. Named audience: Donya Rooein et al., arXiv:2312.02065, 2023. Judge bias: Weiyuan Li et al., arXiv:2509.03419, 2025. Self-Refine: Aman Madaan et al., arXiv:2303.17651, 2023. STORM fabricated connections: Yijia Shao et al., NAACL 2024, arXiv:2402.14207. Engineer outside the codebase: Pritish Mishra, 2026-08-20, https://x.com/pritmish/status/2090304183387947171. Trained voice position: vault strike history and Two Egos literature (compiled in archived research bank).