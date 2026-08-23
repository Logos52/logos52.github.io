---
title: "The Context Problem"
type: concept
status: developing
created: 2026-08-22
updated: 2026-08-22
description: "A sentence that uses something the page has not given looks complete to the writer and unreadable to everyone else. Rules about the output do not catch it. The repair changes what is in front of the writer, and who checks the draft."
tags:
  - writing
  - llm
  - llm-wiki
source-count: 18
---

# The Context Problem

You are partway down a page. A sentence uses a word as if you already know what it points at. You don't. Nothing above it introduced the thing, or the sense the word has here, or the reason two things are being treated as the same. A person writing that sentence is not usually skipping work on purpose. They already hold the whole subject, so from inside their head the sentence is complete. This page is about that gap: writing that uses something you were never given.

The name, once the gap is visible, is a context problem. The only context a sentence may rely on is what is on this page and what an earlier paragraph already established. A failing sentence is one that relies on more than that.

This site is a knowledge base of linked pages. The page you are on is here so a later draft can be checked for this gap, rather than for sounding like a machine or simply being thin. It also says why a new style rule will not stop the gap, and which slower way of making the page is worth the time.

## What a sentence can need

A sentence can depend on four things. Each one has to be on the page, above the sentence, said outright.

What the words point at. Every noun, and every "it," "one," and "they," points at something the page has already introduced. If the sentence says "the political wing" and no earlier sentence said what that wing is, the words point at a blank.

What the words mean here. A word is used in the sense the reader already has from ordinary life, or the page has said the sense it means. A familiar word in a new sense is a new term. If "bank" is being used to mean "a list of claims with the evidence for each one," the page has to say that in those words before it uses bank that way.

Why two things are treated as the same. If a sentence says one thing is a case of another, or works like another, the page has already shown why. It says what the first of those two things does, in its parts. Then it says what the second thing does, in the same parts. Those two sets of parts sit side by side. A reader sees them match. Only then does the page say the two things are the same. A sentence that says a face does the same job as a name on a page fails this, if the page has not first said what that name does, then what a face does, in those same parts.

Why the thing is on the page at all. The reader knows what question a new thing is answering before the page uses it.

The check for a sentence is one question. What does a reader have to already hold for this sentence to make sense? Every item in the answer is above the sentence, on the page, said outright. A missing item goes in first, as its own sentences, never as a clause hung on the sentence that needs it. The person writing checks against the page above, never against their own head. In that head everything is already connected.

The same mechanism shows up at the start of a page. An opening can ease a reader in and then dump the rest of the page as a list, each item arriving with nothing already said that would let a reader hold it. That failure lives on [[wiki/Writing Craft/Opening Doors|Opening Doors]]. A context problem can happen in sentence one or in sentence forty. Something is used as given before the page has given it.

## Why the writer cannot see it

Once a person knows a thing, they cannot reliably simulate the person who does not. A well-known classroom version has one person tap a song's rhythm on a table while another person only hears those taps. The tapper hears the song and predicts that the listener will guess it about half the time. The listener guesses it about three times in a hundred. The tapper has the song. The listener has only the taps. A writer who holds the whole argument has the song. A reader who has only the page has only the taps.

A language model is software that writes from a prompt and from whatever files it has open. The gap is not a private quirk of one such program. People who work with these models in public describe the same gap. The model writes as if the reader sat through the stretch of chat that just happened, or as if the reader had the same files open. One engineer, watching a coding assistant report on its own work, put it as being outside a codebase the model was deep inside. The assistant's replies assumed he already had every detail. He did not want shorter replies. He wanted replies written for someone who was not in the room with the model.

A public encyclopedia already tells its editors not to use a technical term before defining it, and not to treat a link as a stand-in for that definition. The article has to make sense if the reader cannot follow the links. This page's rule is that a sentence may rely only on what is already on the page. The encyclopedia's rule is that an article has to make sense without the links. Both refuse a missing piece that lives somewhere else. The encyclopedia enforces its rule after publish, with human tags. Thousands of articles still wear a banner that says the page is too technical for a non-expert. The convention is real. The method of catching it is a queue of tagged articles waiting to be rewritten.

The same gap shows up in language models, and their training makes it worse, not better. Models trained to follow instructions write a dense style packed with nouns even when asked to write simply. A later training step that ranks answers the way users tend to like them reduces the moves that check shared ground, such as a clarifying question, and rewards answering as if that ground were already shared. Prompting for a named audience, such as an eleven-year-old or a college graduate, puts about fifteen percent of answers in the requested band. Naming the audience is not a control these models have.

## Why a rule about the output does not hold

A rule that says "define your terms" is read by the same head that wrote the sentence. The head already holds the terms, so the sentence passes. Output that satisfies the rule can still be unfollowable.

In this knowledge base the person who reads the drafts kept stopping on this gap. From mid-July to late August of 2026 the stop was logged two hundred and eighteen times, across thirty-two of forty-six stretches of work with a language model. About a hundred and forty-five of the replies that followed changed no standing file that later stretches would read. The same gap came back later in the same stretch a hundred and eighty-seven times. A new rule was the reply ninety-one percent of the time. One standing rule said not to crush several spoken turns into one line. It was written at 19:17 one evening and broken at 19:23. The writer then produced output that passed a new count of how many lines the speech used, and the speech was still crushed. The person who reads the drafts here rejected the rule itself. A rule just made and called permanent was wrong because the output that satisfied it was still unsatisfactory.

Lists of banned words fight a different problem: prose that sounds like a machine because it overuses a small set of polished phrases. A short unexplained sentence can pass every such ban and still fail this one.

Asking the same model to critique its own draft fails for the same reason the rule fails. The critic shares the writer's knowledge. Extra notes and stacks of source files given to a model that is judging the draft bias it further. A plan written before the paragraph, by the head that already knows the answer, asserts the missing link instead of showing it. That sequence was built here on 2026-08-21 at 18:35 and rejected at 18:38.

Answering a rejected line with a new ban is the same kind of miss, named on [[wiki/Systems/AI & Agentic Systems/The Prohibition Loop|The Prohibition Loop]]. Each round clears the last wording. The same writing habit arrives in a form no ban yet covers.

## What does hold

The fixes that stopped the fault replaced the writer's judgment of what the reader knows with something outside the writer.

A list of what this kind of reader already has, written once, not during the drafting of this page. For a page here, that reader has read no other page. They know ordinary English and ordinary life. They do not know terms coined on this site, the projects of the person who runs it, or what was said in the conversation that produced the page.

A list rebuilt from the paragraph that actually came out. It records every name, every familiar word used in a new sense, every pronoun, and every definite phrase such as "the X" that the paragraph used, and whether the page above gave it. The next paragraph may use only what that list holds. The list is not a plan.

Drafting with the source page, the research notes, and the interview closed. Only the two lists and the draft so far stay open. A writing system that kept the source pile open while it drafted encyclopedia-like articles produced more fabricated connections as more sources were added. The model treated a link that existed in the pile as a link the page had shown.

A second reader whose only context is the draft. No research notes, no interview, no conversation, no other page. It returns every word and reference it cannot resolve from the sentences above. Those paragraphs are written again. This is the check the writer cannot do, because the gap is invisible from inside the head that made it. The same idea appears as showing a draft to a representative reader in the writing advice that named this gap for human experts.

What those fixes share is a change of what the writer is looking at, not a new ban. Page openings derived from a researched set of real pages closed a run of failures that ten regenerated openings under accumulating bans had not. A vocabulary list of 4,961 entries, checked instead of "what feels familiar," killed words the reader had not been taught, in one stretch of work. Each of those two methods was used once and, until 2026-08-22, not kept as a standing step for later pages.

None of that is a description of good prose. Each one changes what is in front of the writer, or who gets to say no.

## What it costs, and when to quit

The strongest honest case against this repair is that a short standing instruction ("define jargon the first time") sometimes helps one person, on chat replies, for a while. A public report in 2026 claimed exactly that. The record here is six weeks, twenty-eight kinds of writing, and saved instructions that later sessions loaded and then broke the same morning. Three versions of one page were shown without labels for which method produced them. The person who reads the drafts here picked the version written under the original stance alone. That stance says a page is something you own being handed to a reader you respect. The versions written with extra checks in mind while composing lost. Checks held while writing produce a page put together from pieces, not an explanation. That is the cost of putting the four things a sentence can need into the writer's head as a list to consult. They belong in what the second reader is asked to look for, and in the list rebuilt from the text. They do not belong in the head that is explaining.

The time cost is real. A second reader and a list after every paragraph is slower than a one-shot draft. The cost of not doing it, measured here, was about five stops of this kind a day for six weeks.

Quit signals. If the second reader returns a clean list and a first-time human still cannot follow the page, the list is too coarse. It is catching "the X" and missing a familiar word used in a new sense, or a connection stated but never shown. If the writer keeps shipping against a non-empty list, the check is not actually stopping the page from going out. If the second reader is given the research notes or the conversation, it will start passing sentences a stranger cannot follow. Extra context biases the judge.

What success looks like, in a form you can check: a wave of pages here whose second-reader lists are empty or near empty, and a first read by someone who was not in the session produces no "what is this" of this kind.

This repair does not touch a paragraph that names every thing it points at and is still too crushed to follow, a screen layout that hides the writing, or a reply that refers to work the person reading it was never shown because it was buried in the middle of a long message. Those fail for other reasons.

Chat replies count too. Half the logged instances here were not a page. They were messages in the conversation. A check that only runs on files leaves those messages producing the same unreadability, which then gets copied into the next page.

## The opening again

The kind of stuck sentence this page opened on is now diagnosable. Either a word pointed at nothing above it, or a familiar word was used in a sense the page never gave, or two things were called the same before the parts had been shown to match, or a new thing arrived without the question it was answering. The writer who produced it was checking against a head that already held the missing piece. A rule about the finished sentence is read by that same head. The move that changes the sentence is to take the picture of the reader, and the check, out of that head. The picture of the reader is the list of what this kind of reader already has. The check is the second reader who has only the draft.

## Related

- [[wiki/Systems/AI & Agentic Systems/The Prohibition Loop|The Prohibition Loop]] — why a new ban, even an accurate one, leaves the writer in the same act.
- [[wiki/Writing Craft/Opening Doors|Opening Doors]] — a neighbor at paragraph scale: an opening that eases the reader in and then dumps the page's parts as a list.
- [[wiki/Concepts/The Two Meanings of Ego|The Two Meanings of Ego]] — one account of opaque writing treats the writer as narrating a trade he can no longer imagine not knowing.
- [[wiki/Writing Craft/The Cold Open|The Cold Open]] — when sentence one can carry the whole claim, and when it cannot because the claim's own terms are not parseable yet. Sentence one of this page is the run-up that page describes. A context problem is what happens when that run-up is skipped, in an opening or anywhere else.
- [[wiki/Research/Context Problem Research Bank|Context Problem Research Bank]] — the outside search this page is compiled from, with claim verdicts and the public sources.

## Open questions

If you stripped every link off a page you know well, which sentences would stop making sense? The encyclopedia already asks that as a print test, and it is a test you can run on your own work.

When a sentence feels dense rather than confusing, is the difficulty in pieces the page never gave, or in too many pieces arriving in one breath? Those two fail differently, and a shorter sentence can make the first one worse.

## Sources

The local counts (218 instances, 32 of 46 sessions, 145 responses that changed no instrument, 187 recurrences, 91 percent rule recurrence, the 19:17 / 19:23 compression rule, the 18:35 / 18:38 chain) are from `journal/2026-08-22-the-context-problem.md`. The four things a sentence can need, and the production change of 2026-08-22, are definitions given that day by the person who reads the drafts here.

The tapper-and-listener numbers (about 50 percent predicted, about 2.5 percent guessed, 3 of 120) are Elizabeth Newton's 1990 Stanford dissertation as reported by Chip Heath and Dan Heath, *Made to Stick* (Random House, 2007), and as used in writing advice on the curse of knowledge. The underlying bias in economic settings is Colin Camerer, George Loewenstein, and Martin Weber, "The Curse of Knowledge in Economic Settings," *Journal of Political Economy* 97(5), 1989. The writing application, including "show a draft to a representative reader," is Steven Pinker, *The Sense of Style* (Penguin, 2014), and the APS Observer write-up of his 2015 lecture.

The given-new contract is Herbert H. Clark and Susan E. Haviland, "Comprehension and the Given-New Contract," in Roy O. Freedle (ed.), *Discourse Production and Comprehension* (Ablex, 1977). Speakers planning from what they can see, with a later monitor that dies under load, is William S. Horton and Boaz Keysar, "When do speakers take into account common ground?," *Cognition* 59(1), 1996. Discourse-old versus hearer-old, including a familiar word in a new sense, is Ellen F. Prince, "Toward a taxonomy of given-new information," in Peter Cole (ed.), *Radical Pragmatics* (Academic Press, 1981).

The encyclopedia rules (define before use, a link is not a definition, the page must make sense if links cannot be followed, the `{{Technical}}` backlog) are English Wikipedia, "Make technical articles understandable" and "Manual of Style/Linking," retrieved 2026-08-22. Every page having to work as page one is Mark Baker, *Every Page is Page One* (XML Press, 2013).

Instruction-tuned models' noun-heavy dense style is Alex Reinhart et al., "Do LLMs write like humans?," arXiv:2410.16107, 2024. Preference training reducing grounding acts is Omar Shaikh, Kristina Gligorić, Ashna Khetan, Matthias Gerstgrasser, Diyi Yang, and Dan Jurafsky, NAACL 2024, arXiv:2311.09144. Named-audience prompting landing about 15 percent of answers in band is Donya Rooein, Amanda Cercas Curry, and Dirk Hovy, arXiv:2312.02065, 2023. Extra context biasing a judging model is Weiyuan Li et al., "Curse of Knowledge: When Complex Evaluation Context Benefits yet Biases LLM Judges," arXiv:2509.03419, 2025. Same-model self-critique having feedback quality as the bottleneck is Aman Madaan et al., "Self-Refine," arXiv:2303.17651, 2023. Fabricated connections rising with more retrieved sources is Yijia Shao et al., "Assisting in Writing Wikipedia-like Articles From Scratch with Large Language Models" (STORM), NAACL 2024, arXiv:2402.14207. A listener module with poorer knowledge steering generation is Ece Takmaz et al., Findings of ACL 2023.

The engineer outside the codebase is Pritish Mishra, 2026-08-20, https://x.com/pritmish/status/2090304183387947171, in reply to Boris Cherny's Concise bandage. Context-window myopia as the curse of knowledge is wren (@ambigrammarian), 2026-08-12, https://x.com/ambigrammarian/status/2087336453403537717. Models writing like notes to self is @deepfates and Ethan Mollick, 2026-08-09. "LLMs can't reliably distinguish what's assumed knowledge and what needs explanation" is Shreya Shankar, "Writing in the Age of LLMs," 2025-06-16, https://www.sh-reya.com/blog/ai-writing/. A CLAUDE.md "define jargon on first use" report that is the steelman of the short-instruction alternative is Johnny (@johnnyheo), 2026-07-11, https://x.com/johnnyheo/status/2075983863243833540.

The compiled outside search, with verdict codes, is `wiki/Research/Context Problem Research Bank.md`.
