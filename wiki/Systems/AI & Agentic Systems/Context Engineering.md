---
title: "Context Engineering"
type: concept
status: developing
created: 2026-05-02
updated: 2026-08-14
written-by: grok
model: grok
source-count: 2
tags:
  - llm
  - context
  - agentic-engineering
  - agents
---

# Context Engineering

Context engineering is filling the model's visible window with the right information for the next step, not the whole pile. Too much drowns judgment the same way too little starves it. The lever is that selection, not a cleverer sentence.

## What that looks like here

The window on this vault is filled by a short set of files and habits. Those are instances of the definition, not the definition. An index is a short catalog the model reads first so it does not scan the whole vault. Operational memory is `log.md`: a dated record of what was done, so the next session does not re-discover it.

The instances in this vault are ordinary. Indexes get maintained. [[notes/index|notes/index.md]] is read first on a query or an ingest. `log.md` is kept as that operational memory. Summaries stay compact — the right information, not the whole pile again. Related pages get linked. Source metadata stays attached. Repeated outputs become reusable skills and specs the next session can load, the turn [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]] already uses. Stale or unsupported claims get audited, because a wrong sentence in the window is noise with authority.

At the scale of a small or medium markdown knowledge base, that organization can stand in for a heavier retrieval stack. [[wiki/Systems/AI & Agentic Systems/LLM Knowledge Systems|LLM Knowledge Systems]] owns that compiled-memory architecture. The model navigates through four handles: indexes, backlinks, filenames, and search. None of those handles is a license to accumulate. Selection is still the job.

## How it should feel, and the two failures

The test is whether the next thinking step has less friction. Workspace, files, instructions, and references should make the next right work more likely without rebuilding the situation from scratch.

Four signs that the window is doing its job:

- The relevant material is easy to find.
- Constraints are explicit.
- The next action is obvious.
- Judgment is helped rather than drowned.

Over-long or noisy context degrades the next step. Performance is not monotonic in window length. Models use the start and the end of a long window more reliably than the middle. Stuffing the window feels like diligence and measures worse. [[wiki/Domains/AI & Tooling/LLM Tool Use|LLM Tool Use]] is the other thing that occupies the same window: every tool result is more text the middle can lose.

A second failure is distinct from drowning. Context work has become a shortcut when it turns into sorting inputs instead of using them to think or build. The checklist becomes chores that postpone the work. A session spent organizing with no next thinking step is a quit signal.

[[wiki/Systems/AI & Agentic Systems/Automatic and Deliberate Work with AI|Automatic and Deliberate Work with AI]] spends the same window as the deliberate channel. [[wiki/Systems/AI & Agentic Systems/Working With a Model That Cannot Remember|Working With a Model That Cannot Remember]] is the rival explanation for a "bad model": the window was wrong.

The price is maintaining the index, the log, and the compact summaries. Index-first is a scale claim, not a law for every corpus. The checkable test is that the next action is obvious from what sits in front of the model, and a middle-of-the-window dump has been refused.

The next step is easier because something was left out, as much as because something was put in.

## Related

- [[notes/index|notes/index.md]] — read this first on query or ingest
- [[wiki/Systems/AI & Agentic Systems/LLM Knowledge Systems|LLM Knowledge Systems]] — the compiled-memory architecture this craft serves
- [[wiki/Workflows/Question Answering Against a Wiki|Question Answering Against a Wiki]] — the query workflow that starts from the index
- [[wiki/Domains/AI & Tooling/LLM Tool Use|LLM Tool Use]] — tools as another thing that occupies the window
- [[wiki/Systems/AI & Agentic Systems/Software 3.0|Software 3.0]] — context as the programming medium
- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]] — the hub. Its context section is this page's material at less depth
- [[wiki/Systems/AI & Agentic Systems/Automatic and Deliberate Work with AI|Automatic and Deliberate Work with AI]] — context as the deliberate channel
- [[wiki/Systems/AI & Agentic Systems/Working With a Model That Cannot Remember|Working With a Model That Cannot Remember]] — rival explanation: bad context, not bad model

## Sources

- Simon Willison, [Context engineering](https://simonwillison.net/2025/Jun/27/context-engineering/), 2025-06-27. Records the June 2025 public naming.
- Nelson F. Liu, Kevin Lin, John Hewitt, Ashwin Paranjape, Michele Bevilacqua, Fabio Petroni, and Percy Liang, "Lost in the Middle: How Language Models Use Long Contexts," *Transactions of the Association for Computational Linguistics* (2023).
