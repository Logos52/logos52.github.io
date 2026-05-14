---
title: "Opus - Live Clinic 60: The Right vs Wrong Way to Use AI"
type: brief
status: draft
created: 2026-05-14
updated: 2026-05-14
model: claude-sonnet-4-6
source: "raw/private/ICS/Live Clinic 60 - The right vs wrong way to use AI.md"
source_url: "https://learning.icanstudy.com/supplementary-learning/pr-academic/st-live-clinics/ls-lc60/pg-lc60"
tags:
  - output
  - ics
  - justin-sung
  - live-clinic
  - ai-use
  - cognitive-offloading
  - meta-level
---

# Opus - Live Clinic 60: The Right vs Wrong Way to Use AI

## Core Thesis

Every person Sung has seen use AI harmfully in learning made the same mistake: they used it to skip the processing rather than support it. The clinic's claim is blunt — AI for learning is 95% the same as a Google search, and if your mental model of it is significantly different from that, you are probably outsourcing the cognitive work that creates learning. The failure mode is not unique to AI; it is the same shortcut the brain always prefers. AI just makes the shortcut faster, more convincing, and harder to detect because the output looks exactly like what you would have produced if you had actually done the thinking.

## Compressed Takeaways

1. **AI = Google search.** If your approach to AI isn't 95% the same as your approach to a Google search, the gap is probably where your learning is being compromised.
2. **The gym analogy.** Asking AI to chunk, connect, or evaluate for you is paying someone else to lift the weight. The output moves, but you don't get stronger.
3. **AI downgrades the order.** When AI synthesizes and structures, all you're left with is the lower-order task of memorizing what it gave you. It takes a higher-order problem and hands you a lower-order artifact.
4. **Three valid uses exist.** Keyword seeding, hypothesis validation, and brain-dump gap-checking. These keep the heavy lifting in your hands.
5. **Meta-level rule.** Never ask for the answer. Ask for the information you need to figure out the answer yourself.
6. **Don't outsource importance judgments.** If AI tells you what's most important, you've handed it the framing decision. Even asking it to rank keywords by importance is too much.
7. **Analogies from AI are unreliable.** If you can't evaluate whether the analogy is correct, you risk learning the wrong model and never knowing.
8. **Avoid AI for Kolbs.** Too nuanced. It consistently gives inaccurate feedback. Trust yourself — and self-feedback is the skill worth developing anyway.

## The Processing That Gets Skipped

The background model Sung opens with is essential: modern learning suffers from high density and low context. You're consuming six hundred years of accumulated knowledge in an hour, with no apprenticeship frame to tell your brain why any of it matters. Learning techniques exist to restore that context and control the density — to help the brain perform in an environment it wasn't built for.

AI arrives and looks like a solution to this problem. It isn't. What it does, in the most common failure pattern, is take the part of the process that is hardest for your brain — forming chunks, finding similarities, seeing connections — and produce a finished version of those outputs without your brain doing the work. You read the result. It feels like understanding. Nothing was encoded.

The specific example Sung walks through: you encounter complicated new material, so you ask AI to summarize it, then to group the keywords, then to explain how they connect and why they matter. At each step, your brain was about to do something hard. At each step, AI did it instead. By the end, you have a polished artifact representing learning that didn't happen. The brain did the memorization of what AI produced. That's a lower-order task on lower-order material. The higher-order work — comparison, evaluation, schema formation — was never touched.

## What a Good AI Interaction Looks Like

The operative standard Sung offers: think of a strict mentor who judges you by the quality of your questions. Not one who teaches when asked, but one who becomes impatient with low-level questions and only engages with genuine ones. You want to construct that internal pressure before you open the prompt.

A good AI question operates one level above the answer you're looking for. You're not asking "why is A important?" — that asks AI to construct the relational schema for you. You're asking "I think A influences B in this specific way — is that right?" You've done the thinking. You've formed the hypothesis. You're using AI to validate or correct it.

The structure Sung describes: *feeling → thought → question.* You notice you don't understand something. You try to articulate what specifically you don't understand. The gap in your understanding becomes a targeted question. That question is what you ask AI. The answer fills the specific missing piece that allows you to keep building your own structure. The schema remains yours.

## The Three Valid Uses

**Keyword seeding.** Collecting keywords is a necessary but cognitively worthless step. You need to know what terms exist before you can start chunking and connecting. Asking AI to generate the 20–30 most important keywords for a topic at your level is legitimate because the output is raw material for your thinking, not a substitute for it. One caveat: don't ask AI to rank them by importance. Importance is relational — figuring out what matters and why is the processing you're supposed to do.

**Hypothesis validation.** Once you've been working through material and have a tentative model — "I think A leads to B, which splits into C and D, but I'm unsure if C and D are interchangeable" — AI can evaluate the hypothesis. You constructed it. You made the judgment. AI is returning information about whether the structure holds, not building the structure for you. This is valid because your brain did the schema formation; the AI is acting as a fast expert check.

**Brain-dump gap-checking.** After you've encoded a topic, you do a full retrieval dump of everything you know. Then you ask AI to act as a domain expert and identify gaps, inaccuracies, or missed perspectives in what you produced. The benefit is in the brain dump — active recall, reconstruction, confronting what you can and can't reproduce. Finding the gaps is a small component of that value, and AI can spot blind spots you'd circle past repeatedly on your own. The processing is yours; the gap-detection is the small piece AI legitimately handles faster.

## The Analogy Problem

Sung tested this extensively. When you ask AI to generate an analogy for something you're learning for the first time, one of two things happens: the analogy is one you could have generated yourself (in which case your brain would have gotten more from the attempt), or the analogy is wrong, and because you don't know the material well enough to evaluate it, you learn it anyway and build a subtly corrupted model. Sung reports needing to generate ten or eleven AI analogies before finding one that actually holds up — and that was for topics he already knew deeply. The failure mode is silent and long-lasting.

## Source-Finding: AI vs Better Tools

For research contexts, AI recommends popular sources, not necessarily relevant ones. It defaults to high-citation items and produces citation hallucinations for niche queries. Sung recommends Research Rabbit for academic source discovery — it catalogs papers you've already engaged with and surfaces new work by similar authors and adjacent topics through its own algorithm. That approach finds recent, specific, low-citation work that ChatGPT would never surface because it isn't mainstream enough to appear in training data.

## Connection to existing wiki pages

- [[wiki/Concepts/LLM Tool Use|LLM Tool Use]] — this clinic is the practical operating model for the LLM use case.
- [[wiki/Concepts/Understanding Bottleneck|Understanding Bottleneck]] — AI offloading is the failure mode of the understanding bottleneck: outsourcing the comprehension instead of building it.
- [[wiki/Concepts/The Shortcut Problem|The Shortcut Problem]] — AI-assisted shortcuts are a specific and seductive instance of the general shortcut pattern.
- [[wiki/Techniques/Bear Hunter System|Bear Hunter System]] — keyword seeding maps to Aim; hypothesis validation maps to late Shoot; gap-checking maps to post-Skin retrieval.
- [[wiki/Techniques/Spaced Interleaved Retrieval|Spaced Interleaved Retrieval]] — the brain dump gap-check is a valid AI assist within an SIR retrieval session.
- [[wiki/Syntheses/ICS System|ICS System]] — the context/density problem Sung opens with is the foundational justification for why ICS techniques exist at all.
- [[wiki/Concepts/Agentic Engineering|Agentic Engineering]] — the meta-level question principle applies directly to directing coding agents: ask for the information or constraint that helps you decide, not the finished output.

## Open Questions

- Which of the user's current AI uses fall into the valid three (keyword seeding, hypothesis validation, gap-checking) and which are outsourcing the processing?
- Where in the user's agentic engineering workflow is the "asking for the answer" failure pattern most likely to appear?
- What does a Kolbs cycle look like when the self-feedback skill is genuinely developed — and what is the user's current self-feedback quality on their own practice?
- For the wiki itself: when is asking Claude to compile or synthesize a source legitimate (parallels the gap-checking use) and when does it skip the processing that should stay with the human?

## Sources

- *Live Clinic 60: The right vs wrong way to use AI*, Justin Sung with Peter, ICS Live Clinics.
