---
title: "The Right vs Wrong Way to Work With AI"
type: concept
status: developing
created: 2026-05-14
updated: 2026-08-14
written-by: grok
model: grok
source-count: 6
tags:
  - ai-use
  - cognitive-offloading
  - higher-order
  - learning
  - meta-strategy
---

# The Right vs Wrong Way to Work With AI

A model that chunks a topic, names the connections, or ranks what matters produces a finished structure the learner did not build. The output looks correct. The encoding never happened.

## The processing that gets skipped

Asking a model to do that cognitive work is the same shortcut that appears in every other technique — [[wiki/Concepts/The Shortcut Problem|The Shortcut Problem]]. Paying someone else to lift a weight means the weight moves but the lifter does not get stronger. A model that produces the chunk structure, the connections, the importance rankings produces the artifact without the adaptation. It lowers the order, not raises it. The remaining task is memorizing what it gave.

A mind map a model built looks like a mind map the learner built. The difference only shows up when the knowledge is used.

Never ask for the answer. Ask for the information that helps figure out the answer.

The sequence is feeling → thought → question. Notice the not-understanding, identify precisely what is not understood, ask for the specific missing piece that would let the learner resolve it. The schema — the organised mental structure that says how the parts of a topic relate — stays the learner's throughout. The in-the-moment check: imagine a strict mentor who judges the quality of the questions.

"Why is this important?" and "How does this connect?" are the highest-value questions to ask oneself and the material, and the lowest-value questions to hand to a model — because the model's answer is the schema that was supposed to be built. [[wiki/Dimensions/Deep Processing/Aim|Aim]] puts those two questions at the heart of the method when they are asked of the work, not of the chatbot. A good question exposes a specific gap in the existing model and requests only what is needed to resolve it.

What is the same as a search is the discipline: question in, judgment out. What is not the same is the default pull, which is stronger and downward. The value depends entirely on the quality of the question going in and what is done with the answer coming out.

## What stays in the hands

These keep the heavy lifting in the learner's hands.

**Keyword seeding.** Generate the key terms and concepts for a topic before starting. Collecting keywords is necessary; the cost is high and the benefit is small, so trade it — something is being traded, not nothing. Outsourcing it is legitimate because the output is raw material for the learner's own chunking, not a substitute. Keyword seeding is a [[wiki/Dimensions/Deep Processing/Prestudy|Prestudy]] move. Do not ask a model to rank by importance — deciding what matters is the processing that has to be done. A ranking is a framing delivered first.

**Hypothesis validation.** Once a tentative model exists, test it: A influences B in this specific way. The learner constructed the hypothesis. The model validates or corrects it. The schema stays the learner's; the model fills only the specific gap that blocked judgment. Never ask "is that right?" Ask for the case against, or state the hypothesis without owning it. Treat agreement as information only when it arrives with a mechanism or a citation that can be checked. Mild pushback folds a correct answer.

**Gap-checking after retrieval.** A full brain dump first — writing out everything recallable about a topic from memory, source closed — then ask the model to find gaps or missed perspectives. The value is in the dump: active reconstruction, confronting what cannot be reproduced. The model flags the blind spots that would be circled past — a legitimate but small contribution. The retrieval theory sits on [[wiki/Dimensions/Retrieval/Spaced Interleaved Retrieval|Spaced Interleaved Retrieval]].

Two further uses sit inside the same rule. Generating practice questions is strong for low-to-mid items and for variations on higher-order ones. The model produces the *test*, never the *answer*. Keep writing some of the hard ones. Procedural learning: error-checking own work; extracting the *approach* behind someone else's worked solution; scoping building blocks before starting. If assessment is catching own errors, delegating error-checking trains the wrong thing.

The positive route inside this boundary is [[wiki/Learning Craft/AI-Assisted Learning Workflow|AI-Assisted Learning Workflow]] — a five-step loop whose audit question is whether the model accelerated the learning or performed it.

## The portable order

Damage tracks *when* the model enters, not how much it is used. Access at the start framed the whole problem. Form a version first; the model goes second. The three uses and the bans are instances of this. The hard layer costs time the shortcut does not.

## Off-limits, sources, cheapest first

Off-limits because they are the processing that creates the schema, the workflow [[wiki/Dimensions/Deep Processing/Bear Hunter System|Bear Hunter System]] is protecting:

- Asking a model to chunk, group, or find similarities in new material.
- Asking a model why something is important. Importance is relational — that is asking it to build the relational structure. The same two questions remain highest-value when asked of oneself.
- Asking a model to organize keywords by importance. Framing bias; the decision leaves the room.
- Generated analogies for first-time material. No way to evaluate whether the analogy is accurate. If it is wrong, the wrong model is encoded and may never be noticed. Across a few hundred trials, roughly ten or eleven generated analogies arrived before one was accurate enough to use.
- Kolb-style reflective feedback — a four-stage cycle of do, review, interpret, decide what to change — was too nuanced for reliable output on 2024/25 models. That is an open, testable claim, not a settled 2026 ban. The skill of giving useful self-feedback is more valuable to develop than getting fast model feedback, whether or not the ban still holds.

For research, a model over-indexes on high-citation, popular sources. Two compounding biases: training text over-represents what is widely written about, and retrieval over-represents what is *reachable* — a research agent that hits a paywalled article says so and goes elsewhere. The accessible open web is weighted twice. An ungrounded model hallucinates citations for niche queries. The current, more dangerous failure is a citation that is real, clickable, and frequently does not support the sentence it is attached to. Check the *link*, not the reference list — the mechanism is on [[wiki/Domains/AI & Tooling/LLM Tool Use|LLM Tool Use]]. Generation from parameter memory cannot surface specific, recent, low-citation work. Retrieval-based deep-research increasingly can. Citation-graph traversal beats generative recall for finding the specific low-citation recent paper, because the graph is built from what authors actually cited.

Go to whichever source gets reliable information fastest — first what is already on hand (textbook, lecture slides, primary paper, library, official documentation), then a search, then a model. A model is not the fastest route roughly half the time. Ten seconds on the page already in hand beats a prompt, a read, and an "is this even real?" pass. When a question is specific enough that a general model will return a generalised answer, skip it and find the primary source.

## What is actually known

Engineers learning a library with and without a model finished the tasks at the same speed. Comprehension was 50% with the model and 67% without. Inside the model group, conceptual questions scored above 65%; copy-paste scored under 40%. Essay writing across model / search / brain-only: connectivity scaled down with every layer of support; 83% of model users could not quote a single line of what they had just written. That is C3 measured. Access at the start framed the whole problem; even when the human did the rest, that anchoring produced worse decisions. Order mattered more than amount.

A 2026 reader has a mode switch. For factual gaps, retrieval-grounded mode with visible citations is better and checkable. For schema work, grounding changes nothing: a well-cited chunk structure is still a chunk structure the learner did not build. Turn search on for a fact that can be verified; know that turning it on does nothing for the prohibition that matters.

Socratic "learning mode" features now ship. Reported adoption for real production work is near zero, filed as "for students."

Three checks. Close everything and rebuild the structure from memory — the 83% finding is this test, failed. End the session by asking whether anything was learned or only closed; months of only-closed is the debt accumulating. Make the good mode the default rather than the disciplined choice.

The page is a posture, not a measured curriculum. Use 2 is sycophancy-exposed even after the guard. The Kolb claim is untested at 2026 capability. The old search-equivalence number was wrong as stated. The hard layer is slower in-session. Quit signal: a week of clean artifacts that cannot be rebuilt closed-book. Checkable: the reproduce-it test.

Same tool. Which layer. The hard layer is the one that sticks.

## Related

- [[wiki/Learning Craft/AI-Assisted Learning Workflow|AI-Assisted Learning Workflow]] — the positive counterpart; five-step loop; audit: did the model accelerate the learning, or perform it
- [[wiki/Concepts/The Shortcut Problem|The Shortcut Problem]] — the parent mechanism; AI offloading is one instance
- [[wiki/Concepts/Understanding Bottleneck|Understanding Bottleneck]] — thinking can be outsourced, understanding cannot
- [[wiki/Domains/AI & Tooling/LLM Tool Use|LLM Tool Use]] — tool-use layer; grounded versus ungrounded; check the link, not the reference list
- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]] — professional-work analogue: keep judgment human
- [[wiki/Dimensions/Retrieval/Spaced Interleaved Retrieval|Spaced Interleaved Retrieval]] — retrieval theory behind dump-then-gap-check
- [[wiki/Dimensions/Deep Processing/Bear Hunter System|Bear Hunter System]] — encoding workflow the off-limits list is protecting
- [[wiki/Domains/AI & Tooling/Essential AI Skills 2026|Essential AI Skills 2026]] — ladder sibling; thematic adjacency, not mechanism
- [[wiki/Systems/AI & Agentic Systems/Automatic and Deliberate Work with AI|Automatic and Deliberate Work with AI]] — automatic work is cheap; deliberate work is where errors concentrate
- [[wiki/Learning Craft/Don't Outsource the Learning|Don't Outsource the Learning]] — empirical sibling; posture, not tool, drives comprehension
- [[wiki/Concepts/Are You Thinking, or Just Consuming|Are You Thinking, or Just Consuming]] — passive-versus-active posture under the level claim
- [[wiki/Concepts/Cognitive Load & What Mental Effort Is Trying to Cue|Cognitive Load & What Mental Effort Is Trying to Cue]] — effort not spent now is understanding not built
- [[wiki/Dimensions/Deep Processing/Prestudy|Prestudy]] — keyword seeding is a prestudy move
- [[wiki/Dimensions/Deep Processing/Aim|Aim]] — those two questions are the heart of the method when asked of oneself and the material
- [[wiki/Concepts/Social Media - Curvilinear Design & the Theft of Time|Social Media - Curvilinear Design & the Theft of Time]] — tools optimised for ease degrade capacity across habitual use, not in any one session

## Open Questions

- How to keep the brain from falling back to passive modes when a model is available.
- How to offset the lower-order pull and keep thinking at higher levels.
- Why the mode that works — question instead of answer, produce first — ships and almost nobody uses it for real work.
- Where the line is between cognitive tool and cognitive crutch. Short-form video shows the damage is habitual use, not a single session.

## Sources

Compiled from recorded coaching sessions, late 2024 / early 2025. Models, tools, and some specifics (citation failure, source-finding, reflective-feedback quality) have shifted. The public studies below are the reachable evidence.

- [Evaluating the impact of AI assistance on developer productivity and competency](https://www.anthropic.com/research/AI-assistance-coding-skills). Anthropic, early 2026. Same task speed; comprehension 50% vs 67%; inside the model group, conceptual questions >65%, copy-paste <40%.
- [Your Brain on ChatGPT](https://www.media.mit.edu/publications/your-brain-on-chatgpt/). MIT Media Lab. Connectivity scaled down with every layer of support; 83% of model users could not quote a single line of what they had just written.
- [When AI Frames the Problem](https://arxiv.org/html/2603.08849v1). CHI 2026. Access at the start framed the whole problem; order mattered more than amount.
- [Learning-mode features in mainstream assistants](https://www.engadget.com/ai/anthropic-brings-claudes-learning-mode-to-regular-users-and-devs-170018471/). Reported adoption for real production work near zero, filed as "for students."
- [How I use LLMs](https://www.youtube.com/watch?v=EWvNQjAaOHw). Andrej Karpathy, 2025-02-28. Search token → pages into context → answer from that text, usually with citations to check.
- [How To Learn So Fast That AI Can Never Replace You](https://www.youtube.com/watch?v=-Xc_ExgwLs8). Public video, 2026-06-13. Same position, freely reachable.
- Sharma, M., et al. Towards Understanding Sycophancy in Language Models. [arXiv:2310.13548](https://arxiv.org/abs/2310.13548). Agreement bias on "is that right?"
