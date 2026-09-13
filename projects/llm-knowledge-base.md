---
title: "llm-knowledge-base"
type: project
status: current
stack:
  - Obsidian
  - Quartz
  - LLM agents
order: 1
image: projects/llm-knowledge-base.png
blurb: "This site. A public, LLM-maintained knowledge base published from an Obsidian vault. It turns source material into durable, linked notes."
created: 2026-06-02
updated: 2026-09-13
method: plain-register-2026-09-13
prose-model: opus
tags:
  - projects
---

![The knowledge base's public home page.](llm-knowledge-base.png)

## What it is

This site. `llm-knowledge-base` is a public, LLM-maintained second brain. It turns source material into durable markdown notes that link to each other, and each pass makes the base a little more useful. It is an Obsidian vault published to the web with [Quartz](https://quartz.jzhao.xyz/). It is also an ongoing experiment in using LLM agents to maintain a knowledge base over time.

## How it's built

The vault is kept in [Obsidian](https://obsidian.md). Quartz compiles it into a static site on GitHub Pages. The wiki is organized as a pipeline: raw sources are compiled into concept, technique, and synthesis pages. The pages are cross-linked so the link graph stays easy to navigate. LLM agents do much of the compilation, health-checking, and synthesis. The agents follow an operating contract that keeps private material out of the public build.

## What worked

Treating the knowledge base as the primary surface, the place where daily thinking happens, is what kept me using it. Writing durable pages worked better than working out the same answers again. Making pages public by default made me write more clearly. Agent contracts and publish guards let me work in public without exposing private notes or finances.

## Lessons

- **Build up pages that get reused.** The value is in pages that get reused and revised. A collection of captured sources does not have that value by itself. The pipeline exists to turn raw input into pages that can be used to answer future questions.
- **Keep the human in the loop.** The base supports a person's thinking and does not replace it. The open problem is how a person keeps thinking actively while the knowledge base gets more useful.
- **Safeguards are required for a public vault.** A clear split between public and private material, plus automated publish guards, is what makes it safe to keep an LLM-maintained vault on the open internet.

## Status

Current. Actively maintained. This Projects section is part of it.

<!-- Design notes (TODO, Wedge): how it looks and why it's built this way. -->
