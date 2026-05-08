---
title: "LLM Wiki"
description: "Public LLM-maintained knowledge base."
type: index
hideFolderListing: true
created: 2026-05-02
updated: 2026-05-08
tags:
  - system
---

# LLM Wiki

## LLM Knowledge Base

This is a personal, LLM-maintained knowledge base. The pattern is simple: I curate sources and ask questions; an LLM agent reads, summarizes, cross-references, and keeps a running synthesis here as durable, interlinked markdown pages. The goal is **accumulation** — every source ingested and every question asked makes the wiki a little richer, instead of disappearing into chat history.

If you're new to the idea, the [[wiki/Concepts/LLM Knowledge Systems|LLM Knowledge Systems]] page explains the pattern, and the [README](README.md) explains how this particular vault is set up.

## Start here

A few representative pages — pick one that catches your eye:

- [[wiki/Syntheses/ICS System|ICS System]] — high-level synthesis of the learning system that anchors the study notes.
- [[wiki/Techniques/Bear Hunter System|Bear Hunter System]] — practical encoding workflow built around Aim, Shoot, and Skin.
- [[wiki/Techniques/Spaced Interleaved Retrieval|Spaced Interleaved Retrieval]] — retrieval system for recall, spacing, interleaving, and gap repair.
- [[wiki/Red Team/Red Teaming|Red Teaming]] — decision-support principles from the Red Team handbook and Army/UFMCS tradition.
- [[wiki/Concepts/Agentic Engineering|Agentic Engineering]] — best practices for building with LLM agents.

> [!tip] How to navigate
> Use **Search** in the top-left, **Explorer** to browse by folder, or the **Graph** to see how pages connect. Every page has backlinks at the bottom.

## Main Areas

| Area | Start Here | What Lives There |
| --- | --- | --- |
| Learning systems | [[wiki/Syntheses/ICS System|ICS System]] | Metacognition, encoding, retrieval, self-regulation, and study workflows. |
| Core techniques | [[wiki/Techniques/Bear Hunter System|Bear Hunter System]] | BHS, SIR, WPW, Kolbs, marginal gains, and reverse goal setting. |
| Red Team | [[wiki/Red Team/Red Teaming|Red Teaming]] | Decision support, assumption checks, cultural empathy, groupthink mitigation, and critical thinking tools. |
| Agentic engineering | [[wiki/Concepts/Agentic Engineering|Agentic Engineering]] | Building with LLM agents, context engineering, tool use, and software practice. |
| Language learning | [[wiki/Language/Refold Language Learning System|Refold Language Learning System]] | Refold, immersion, noticing, comprehension hacking, grammar priming, and language resources. |
| Books | [[wiki/Books/The Book of Elon|The Book of Elon]] | Longform summaries and takeaways from books that shaped the wiki. |

## Full index

The full page catalog still lives at [[notes/index|LLM Wiki Index]]. It is the long version of this page: every public wiki page, organized by topic with a one-line summary.

## How this is built

This wiki lives in an [Obsidian](https://obsidian.md) vault and is published as a static site by [Quartz v4](https://quartz.jzhao.xyz/). The full source is on GitHub at [logos52/logos52.github.io](https://github.com/logos52/logos52.github.io). For the philosophy behind the project, see [[README]]; for how the LLM agent maintains the vault, see [[AGENTS]]; for chronological history, see [[log]].

Code is MIT-licensed; written content is released under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
