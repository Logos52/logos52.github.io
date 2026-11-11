---
title: "Context Engineering"
type: concept
status: developing
created: 2026-05-02
updated: 2026-11-11
written-by: grok
model: grok
source-count: 2
method: fresh-from-notes-2026-11-11
prose-model: fable
aliases:
  - Software 3.0
  - LLM Knowledge Systems
merged-from:
  - Software 3.0
  - LLM Knowledge Systems
tags:
  - llm
  - context
  - agentic-engineering
  - agents
  - software
  - prompting
  - knowledge-base
  - obsidian
wedge_reviewed: false
---

# Context Engineering

> Not yet reviewed by Wedge.

<figure>
<svg viewBox="0 0 520 180" width="100%" style="max-width:520px;--qp-surface:light-dark(#ffffff,#1a1a1a);--qp-ink:light-dark(#090909,#f2f2f2);--qp-mut:light-dark(#6b6b6b,#a3a3a3);--qp-rule:light-dark(#ededed,#262626);--qp-rule2:light-dark(#dedede,#333333);--qp-accent:light-dark(#1a7fe6,#5aa9f5);font-family:Inter,system-ui,sans-serif" role="img" aria-labelledby="ce-two-t">
<title id="ce-two-t">A model has two kinds of knowledge. What it learned in training is broad but vague and dated, like a hazy memory. What sits in the window is sharp and directly usable, like working memory.</title>
<rect x="0.5" y="0.5" width="519" height="179" rx="16" style="fill:var(--qp-surface);stroke:var(--qp-rule);stroke-width:1"/>
<rect x="20" y="20" width="230" height="140" rx="20" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/>
<text x="135" y="44" text-anchor="middle" style="fill:var(--qp-ink);font-size:14px;font-weight:600">What it learned</text>
<text x="135" y="64" text-anchor="middle" style="fill:var(--qp-ink);font-size:14px;font-weight:600">in training</text>
<text x="135" y="94" text-anchor="middle" style="fill:var(--qp-ink);font-size:13px">broad but vague and dated</text>
<text x="135" y="118" text-anchor="middle" style="fill:var(--qp-mut);font-size:12px">like a hazy memory</text>
<rect x="270" y="20" width="230" height="140" rx="20" style="fill:none;stroke:var(--qp-accent);stroke-width:1.25"/>
<text x="385" y="48" text-anchor="middle" style="fill:var(--qp-ink);font-size:14px;font-weight:600">What sits in the window</text>
<text x="385" y="80" text-anchor="middle" style="fill:var(--qp-ink);font-size:13px">sharp and directly usable</text>
<text x="385" y="106" text-anchor="middle" style="fill:var(--qp-mut);font-size:12px">like working memory</text>
</svg>
</figure>

Context engineering is choosing what goes into a language model's context window, the stretch of text it can see while it works. A model has two kinds of knowledge. What it learned in training is broad but vague and dated, like a hazy memory. What sits in the window is sharp and directly usable, like working memory. Much of programming a model is writing the context a model receives: instructions, examples, documents and results from prior steps. The skill has two sides, putting in what the next step needs and keeping out what would distract it. A maintained wiki takes this further. A model compiles raw sources once into linked pages, and a schema file tells each new session how to work. Every later question then starts from organized knowledge instead of rediscovering it.

## Core takeaways

- The context window works like the model's working memory, and anything in it is directly available.
- Knowledge from training is a vague recollection, so important facts belong in the window.
- Irrelevant tokens distract the model and cost more, so start fresh when the topic changes.
- Now the text you hand an agent is the program.
- A wiki the model maintains turns raw sources into knowledge that builds up over time.
- The human still supplies the sources, the questions and the judgment.

## The program is now written text

Software has gone through three stages. First people wrote explicit code, and then they trained neural networks on curated data. Now a large model trained on broad data acts like a programmable computer, and the program is the prompt. Whatever sits in the context window is the lever over that computer.

One example is software installation. A traditional installer is a shell script that grows complicated as it tries to handle every kind of machine. The newer approach is a block of text you paste into your agent. The agent reads your system, follows the instructions, adapts to what it finds and fixes problems as they come up.

## Filling the window with the right information

A model's training squeezes a huge amount of internet text into its parameters, much like a lossy compressed file. It remembers often-repeated facts better than rare ones, and its knowledge stops at a cutoff date. For anything recent, rare or exact, the reliable move is to put the source into the window. Search tools do this automatically. They fetch web pages and insert their text, so the model answers from that text rather than from memory.

Relevant material helps and irrelevant material hurts. Each new chat starts with an empty window, and the window fills as the conversation grows. When you switch topics, starting a fresh chat clears out tokens that no longer help.

## The files in this vault that program the next session

A model-maintained wiki relies on a few files that every new session reads first.

- The schema file sets out how the wiki is structured, which conventions apply, and what to do when adding a source, answering a question or checking the pages. Coding agents read files with names like AGENTS.md for this purpose. The person and the model refine it together over time.
- The index lists every page with a link and a one-line summary, grouped by type. The model updates it on every ingest and reads it first when answering a question.
- The log is an append-only record of ingests, queries and checks in date order. With a consistent prefix on each entry, simple command-line tools can read the latest entries.

## The compiled layer: raw, wiki, schema

<figure>
<svg viewBox="0 0 520 268" width="100%" style="max-width:520px;--qp-surface:light-dark(#ffffff,#1a1a1a);--qp-ink:light-dark(#090909,#f2f2f2);--qp-mut:light-dark(#6b6b6b,#a3a3a3);--qp-rule:light-dark(#ededed,#262626);--qp-rule2:light-dark(#dedede,#333333);--qp-accent:light-dark(#1a7fe6,#5aa9f5);font-family:Inter,system-ui,sans-serif" role="img" aria-labelledby="ce-layers-t">
<title id="ce-layers-t">A model compiles raw sources once into linked pages, and a schema file tells each new session how to work.</title>
<rect x="0.5" y="0.5" width="519" height="267" rx="16" style="fill:var(--qp-surface);stroke:var(--qp-rule);stroke-width:1"/>
<rect x="20" y="20" width="480" height="68" rx="20" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/><text x="260" y="50" text-anchor="middle" style="fill:var(--qp-ink);font-size:14px;font-weight:600">Raw sources</text><text x="260" y="70" text-anchor="middle" style="fill:var(--qp-ink);font-size:13px">the articles, papers and files you collect</text>
<rect x="20" y="100" width="480" height="68" rx="20" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/><text x="260" y="130" text-anchor="middle" style="fill:var(--qp-ink);font-size:14px;font-weight:600">The wiki</text><text x="260" y="150" text-anchor="middle" style="fill:var(--qp-ink);font-size:13px">a folder of markdown pages</text>
<rect x="20" y="180" width="480" height="68" rx="20" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/><text x="260" y="210" text-anchor="middle" style="fill:var(--qp-ink);font-size:14px;font-weight:600">The schema</text><text x="260" y="230" text-anchor="middle" style="fill:var(--qp-ink);font-size:13px">the rules file</text>
</svg>
</figure>

The pattern has three layers.

- Raw sources are the articles, papers and files you collect. They stay unchanged and act as the source of truth.
- The wiki is a folder of markdown pages that the model writes and maintains, including summaries, topic pages, comparisons and syntheses.
- The schema is the rules file that turns the model from a general chatbot into a disciplined maintainer.

Three operations run on these layers. Ingest reads a new source, discusses it, writes a summary and updates related pages, often ten to fifteen pages at once. Query searches the wiki and answers with citations, and a good answer can be saved back as a new page. Lint periodically checks for contradictions, outdated statements, orphan pages and missing links.

## Why a maintained wiki can stand in for a retrieval stack

Most document tools retrieve fragments at question time. The model rebuilds the answer from scratch on every question, and nothing accumulates. A maintained wiki does that synthesis once and keeps it current. Cross-references already exist, contradictions are already flagged, and summaries already reflect everything read so far. At moderate scale, around a hundred sources and a few hundred pages, an index file is enough to find the right pages without embedding search. A local search tool becomes useful as the wiki grows.

## What a working window feels like

A well-filled window holds the source text the task depends on, the rules for the task and little else. The model then answers from what it can see, cites it and stays on topic. Answers drawn from vague memory sound plausible but cannot be traced. When the window is right, its answers can be checked against the pages that are actually in front of it.

<figure>
<svg viewBox="0 0 520 144" width="100%" style="max-width:520px;--qp-surface:light-dark(#ffffff,#1a1a1a);--qp-ink:light-dark(#090909,#f2f2f2);--qp-mut:light-dark(#6b6b6b,#a3a3a3);--qp-rule:light-dark(#ededed,#262626);--qp-rule2:light-dark(#dedede,#333333);--qp-accent:light-dark(#1a7fe6,#5aa9f5);font-family:Inter,system-ui,sans-serif" role="img" aria-labelledby="ce-fails-t">
<title id="ce-fails-t">The skill has two sides, putting in what the next step needs and keeping out what would distract it.</title>
<rect x="0.5" y="0.5" width="519" height="143" rx="16" style="fill:var(--qp-surface);stroke:var(--qp-rule);stroke-width:1"/>
<rect x="20" y="20" width="230" height="104" rx="20" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/><text x="135" y="50" text-anchor="middle" style="fill:var(--qp-ink);font-size:15px;font-weight:600">Too little</text><text x="135" y="70" text-anchor="middle" style="fill:var(--qp-ink);font-size:13px">The needed facts are missing</text><text x="135" y="88" text-anchor="middle" style="fill:var(--qp-mut);font-size:12px">a hazy and possibly</text><text x="135" y="106" text-anchor="middle" style="fill:var(--qp-mut);font-size:12px">outdated memory</text>
<rect x="270" y="20" width="230" height="104" rx="20" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/><text x="385" y="50" text-anchor="middle" style="fill:var(--qp-ink);font-size:15px;font-weight:600">Too much</text><text x="385" y="70" text-anchor="middle" style="fill:var(--qp-ink);font-size:13px">Old or unrelated tokens</text><text x="385" y="90" text-anchor="middle" style="fill:var(--qp-ink);font-size:13px">crowd the window</text>
</svg>
</figure>

## The two failures

- Too little. The needed facts are missing, so the model falls back on a hazy and possibly outdated memory.
- Too much. Old or unrelated tokens crowd the window, distract the model and lower its accuracy. They also make each reply a little slower and more expensive.

## Where the human still completes the model

The model does the bookkeeping, which means summarizing, cross-referencing, filing and keeping pages consistent. People abandon wikis because upkeep grows faster than the value. A model does not get bored and can update many files in one pass. The person still chooses the sources, directs the analysis, asks good questions and decides what it all means. Thinking can be handed off, but understanding cannot, because a person who does not understand the work cannot direct it.

## The price and the checkable test

Tokens are a limited resource, since each one adds a little cost and some risk of distraction. A maintained wiki also takes setup and ongoing ingest work. A simple test shows whether the context is doing its job. Start a fresh session and give it only the schema, the index and the relevant pages. Then see whether it can continue the task without being told things again.

## How to practice this

- Start a new chat whenever you change topic.
- For any fact that must be exact or recent, paste the source instead of asking from memory.
- Write a short rules file for one recurring task and reuse it each session.
- When a model answer is useful, save it as a page instead of leaving it in chat history.
- Once a month, ask the model to check your notes for contradictions and orphan pages.

## Open questions

- How do I decide which parts of a long project belong in the schema file and which belong in pages?
- How do I tell when the wiki has grown large enough to need a search tool?
- How should summaries cite private material that must not be copied?
- How do I measure whether a fresh session is actually using the context I give it?

## Sources

- Andrej Karpathy, [llm-wiki](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f), GitHub Gist.
- Andrej Karpathy, [How I use LLMs](https://www.youtube.com/watch?v=EWvNQjAaOHw).
- Andrej Karpathy, [From Vibe Coding to Agentic Engineering](https://www.youtube.com/watch?v=96jN2OCOfLs), AI Ascent 2026 (Sequoia Capital), 2026-04-29.

## Related pages

- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]]: keeping a quality bar while agents do the work
- [[wiki/Systems/AI & Agentic Systems/Working With a Model That Cannot Remember|Working With a Model That Cannot Remember]]: working with a collaborator that starts fresh each session
- [[wiki/Systems/AI & Agentic Systems/Automatic and Deliberate Work with AI|Automatic and Deliberate Work with AI]]: when to let a model think longer
- [[wiki/Concepts/Understanding Bottleneck|Understanding Bottleneck]]: the part that stays with the person
- [[wiki/Workflows/Knowledge Base as Thinking Partner|Knowledge Base as Thinking Partner]]: using the wiki to think
