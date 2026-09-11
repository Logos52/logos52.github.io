---
title: "The Right vs Wrong Way to Work With AI"
type: concept
status: developing
created: 2026-05-14
updated: 2026-09-11
method: plain-rewrite-2026-09-11
prose-model: fable
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

A model can be used at two layers. At one layer the learner does the processing and the model supplies pieces. At the other layer the model does the processing and the learner memorizes the result. Only the first layer is retained.

## Core takeaways

- A model that chunks, connects, or ranks a topic hands the learner a finished structure. The learner then memorizes it instead of building it, and the understanding is never encoded.
- Ask the model for the specific piece of information that is missing. Do not ask it for the answer. The organised mental structure stays the learner's.
- Three uses keep the processing with the learner: keyword seeding, hypothesis validation, and gap-checking after a brain dump from memory.
- The damage depends on when the model enters. The amount of use matters less. Form a version first. The model goes second.
- Off limits: chunking new material, asking why something is important, ranking keywords, and analogies for first-time material. Each of these is the processing that builds the structure.
- Engineers learning a library with a model finished at the same speed as those without. Comprehension was 50% with the model and 67% without. In an essay study, 83% of model users could not quote a line of what they had just written.

## What is lost when the model builds the structure

Asking a model to chunk, connect, or rank is the same shortcut that appears in every other technique, described on [[wiki/Concepts/The Shortcut Problem|The Shortcut Problem]]. A model that produces the chunk structure, the connections, and the importance rankings produces the artifact. The learner's mind does not change in the process. The model's output lowers the order of the learner's task. The task that remains is memorizing what the model gave.

A mind map a model built looks like a mind map the learner built. The difference only shows up when the knowledge is used.

## How to ask a model

Do not ask for the answer. Ask for the information that lets the learner work out the answer.

The sequence is feeling, then thought, then question. Notice the not-understanding. Identify precisely what is not understood. Ask for the specific missing piece that would let the learner resolve it. The schema, the organised mental structure that says how the parts of a topic relate, stays the learner's throughout. The in-the-moment check: imagine a strict mentor who judges the quality of the questions.

"Why is this important?" and "How does this connect?" are the highest-value questions to ask oneself and the material. They are the lowest-value questions to hand to a model, because the model's answer is the schema the learner was supposed to build. [[wiki/Dimensions/Deep Processing/Aim|Aim]] puts those two questions at the centre of the method when they are asked of the work rather than of the chatbot. A good question exposes a specific gap in the existing model and requests only what is needed to resolve it.

Using a model has the same discipline as using a search: a question goes in, and the learner's judgment decides what comes out. Using a model differs from a search in one way: the default pull toward lower-order work is stronger. The value depends entirely on the quality of the question going in and what is done with the answer coming out.

## Three uses that keep the processing with the learner

**Keyword seeding.** Ask the model to generate the key terms and concepts for a topic before starting. Collecting keywords is necessary, but the cost is high and the benefit is small, so it is worth trading away. Something is still being traded. Outsourcing it is legitimate because the output is raw material for the learner's own chunking, and no substitute for it. Keyword seeding is a [[wiki/Dimensions/Deep Processing/Prestudy|Prestudy]] move. Do not ask a model to rank the keywords by importance. Deciding what matters is the processing that has to be done. A ranking is a framing delivered before the learner has judged anything.

**Hypothesis validation.** Once a tentative model exists, test it: A influences B in this specific way. The learner constructed the hypothesis. The model validates or corrects it. The schema stays the learner's. The model fills only the specific gap that blocked judgment. Never ask "is that right?" Ask for the case against the hypothesis, or state the hypothesis as if someone else held it. Treat agreement as information only when it arrives with a mechanism or a citation that can be checked. Under mild pushback, a model gives up a correct answer.

**Gap-checking after retrieval.** Do a full brain dump first: write out everything recallable about a topic from memory, with the source closed. Then ask the model to find gaps or missed perspectives. The value is in the dump: active reconstruction, and confronting what cannot be reproduced. The model flags the blind spots the learner would otherwise miss. That is a legitimate but small contribution. The retrieval theory is on [[wiki/Dimensions/Retrieval/Spaced Interleaved Retrieval|Spaced Interleaved Retrieval]].

## Two more uses under the same rule

Generating practice questions works well for low-to-mid items and for variations on higher-order ones. The model produces the test. It does not produce the answer. Keep writing some of the hard questions yourself.

In procedural learning, three uses fit: error-checking your own work, extracting the approach behind someone else's worked solution, and scoping the building blocks before starting. If the assessment is catching your own errors, delegating error-checking trains the wrong thing.

The positive route inside this boundary is [[wiki/Learning Craft/AI-Assisted Learning Workflow|AI-Assisted Learning Workflow]], a five-step loop. Its audit question is whether the model accelerated the learning or performed it.

## When the model enters

The damage depends on when the model enters. The amount of use matters less. Access at the start framed the whole problem. Form a version first. The model goes second. The three uses and the bans are all instances of this order. Doing the processing yourself takes time that the shortcut does not take.

## What not to ask a model

These are off limits because they are the processing that creates the schema. That processing is the workflow [[wiki/Dimensions/Deep Processing/Bear Hunter System|Bear Hunter System]] is protecting.

- Asking a model to chunk, group, or find similarities in new material.
- Asking a model why something is important. Importance is relational, so this asks the model to build the relational structure. The same two questions remain highest-value when asked of oneself.
- Asking a model to organize keywords by importance. The ranking frames the material before the learner has judged it. The learner no longer makes the decision.
- Generated analogies for first-time material. There is no way to evaluate whether the analogy is accurate. If it is wrong, the wrong model is encoded and may never be noticed. Across a few hundred trials, roughly ten or eleven generated analogies arrived before one was accurate enough to use.
- Kolb-style reflective feedback, a four-stage cycle of do, review, interpret, and decide what to change. This was too nuanced for reliable output on 2024/25 models. That is an open, testable claim. It is not a settled 2026 ban. The skill of giving useful self-feedback is more valuable to develop than getting fast model feedback, whether or not the ban still holds.

## Using a model for research

For research, a model over-indexes on high-citation, popular sources. Two biases compound. Training text over-represents what is widely written about. Retrieval over-represents what is reachable: a research agent that hits a paywalled article says so and goes elsewhere. The accessible open web is counted twice.

An ungrounded model hallucinates citations for niche queries. The current failure is more dangerous. The citation is real and clickable. Frequently it does not support the sentence it is attached to. Open the link and check that it supports the sentence. The reference list is not the check. The mechanism is on [[wiki/Domains/AI & Tooling/LLM Tool Use|LLM Tool Use]].

Generation from parameter memory cannot surface specific, recent, low-citation work. Retrieval-based deep-research increasingly can. Citation-graph traversal beats generative recall for finding the specific low-citation recent paper, because the graph is built from what authors actually cited.

## Which source to go to first

Go to whichever source gets reliable information fastest. First, what is already on hand: textbook, lecture slides, primary paper, library, official documentation. Then a search. Then a model. A model is the slower route roughly half the time. Ten seconds on the page already in hand is faster than writing a prompt, reading the answer, and checking whether the answer is real. When a question is specific enough that a general model will return a generalised answer, skip the model and find the primary source.

## What the studies found

Engineers learning a library with and without a model finished the tasks at the same speed. Comprehension was 50% with the model and 67% without. Inside the model group, conceptual questions scored above 65%. Copy-paste scored under 40%.

In an essay-writing study across model, search, and brain-only conditions, connectivity scaled down with every layer of support. 83% of model users could not quote a single line of what they had just written. That 83% is C3 measured.

Access at the start framed the whole problem. Even when the human did the rest, that anchoring produced worse decisions. Order mattered more than amount.

## Grounded mode and learning mode

A 2026 reader has a mode switch. For factual gaps, retrieval-grounded mode with visible citations is better, and its output can be checked. For schema work, grounding changes nothing. A well-cited chunk structure is still a chunk structure the learner did not build. Turn search on for a fact that can be verified. Turning it on does nothing for the prohibition that matters.

Socratic "learning mode" features now ship. Reported adoption for real production work is near zero. The feature is filed as "for students."

## Three checks at the end of a session

Close everything and rebuild the structure from memory. The 83% finding is this test, failed.

End the session by asking whether anything was learned or only closed. Months of sessions that only closed tasks is months of learning that did not happen.

Make the good mode the default. Do not leave it as the disciplined choice.

## Limits of these rules

The rules above describe a posture. They have not been measured as a curriculum. The second use, hypothesis validation, is exposed to sycophancy even after the guard against asking "is that right?" The Kolb claim is untested at 2026 capability. The old search-equivalence number was wrong as stated. Doing the processing yourself is slower in-session. The quit signal is a week of clean artifacts that cannot be rebuilt closed-book. The checkable part is the reproduce-it test.

## How to practice this

1. Before starting a topic, ask the model only for the key terms and concepts. Do not ask it to rank them. Notice that grouping and ranking the terms is still your work.
2. When you feel you do not understand, name exactly what is not understood. Ask the model for only that missing piece. Notice whether your question exposes one specific gap or asks for the whole answer.
3. Build a tentative model first, in the form "A influences B in this specific way." Ask the model for the case against it, or state it as if someone else held it. Notice whether any agreement comes with a mechanism or a citation you can check.
4. Close the source and write out everything you can recall about the topic. Then ask the model for gaps or missed perspectives. Notice what you could not reproduce before the model said anything.
5. When you need a fact, check the textbook, slides, paper, or documentation in hand first. Then search. Then ask a model. Notice how often the page in hand answers within ten seconds.
6. At the end of a session, close everything and rebuild the structure from memory. Ask whether you learned anything or only closed a task. Notice a week of clean artifacts you cannot rebuild closed-book. That is the signal to stop.

## Related pages

- [[wiki/Learning Craft/AI-Assisted Learning Workflow|AI-Assisted Learning Workflow]]: the positive counterpart; five-step loop; audit: did the model accelerate the learning, or perform it
- [[wiki/Concepts/The Shortcut Problem|The Shortcut Problem]]: the parent mechanism; AI offloading is one instance
- [[wiki/Concepts/Understanding Bottleneck|Understanding Bottleneck]]: thinking can be outsourced, understanding cannot
- [[wiki/Domains/AI & Tooling/LLM Tool Use|LLM Tool Use]]: tool-use layer; grounded versus ungrounded; check the link, not the reference list
- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]]: professional-work analogue: keep judgment human
- [[wiki/Dimensions/Retrieval/Spaced Interleaved Retrieval|Spaced Interleaved Retrieval]]: retrieval theory behind dump-then-gap-check
- [[wiki/Dimensions/Deep Processing/Bear Hunter System|Bear Hunter System]]: encoding workflow the off-limits list is protecting
- [[wiki/Domains/AI & Tooling/Essential AI Skills 2026|Essential AI Skills 2026]]: ladder sibling; thematic adjacency, not mechanism
- [[wiki/Systems/AI & Agentic Systems/Automatic and Deliberate Work with AI|Automatic and Deliberate Work with AI]]: automatic work is cheap; deliberate work is where errors concentrate
- [[wiki/Learning Craft/Don't Outsource the Learning|Don't Outsource the Learning]]: empirical sibling; posture, not tool, drives comprehension
- [[wiki/Concepts/Are You Thinking, or Just Consuming|Are You Thinking, or Just Consuming]]: passive-versus-active posture under the level claim
- [[wiki/Concepts/Cognitive Load & What Mental Effort Is Trying to Cue|Cognitive Load & What Mental Effort Is Trying to Cue]]: effort not spent now is understanding not built
- [[wiki/Dimensions/Deep Processing/Prestudy|Prestudy]]: keyword seeding is a prestudy move
- [[wiki/Dimensions/Deep Processing/Aim|Aim]]: those two questions are the heart of the method when asked of oneself and the material
- [[wiki/Concepts/Social Media - Curvilinear Design & the Theft of Time|Social Media - Curvilinear Design & the Theft of Time]]: tools optimised for ease degrade capacity across habitual use, not in any one session

## Open questions

- How to keep the brain from falling back to passive modes when a model is available.
- How to offset the lower-order pull and keep thinking at higher levels.
- Why the mode that works, asking a question instead of an answer and producing first, ships and almost nobody uses it for real work.
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
