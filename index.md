---
title: "LLM Knowledge Base"
description: "A personal LLM-maintained wiki of concepts, techniques, and syntheses, built up incrementally from sources over time."
type: index
created: 2026-05-02
updated: 2026-05-06
tags:
  - system
---

# LLM Knowledge Base

> [!note] Welcome
> _Replace this paragraph with a short intro tomorrow. Two or three sentences are plenty: who you are, what this wiki is, and what someone should expect to find. Keep it conversational._

This is a personal, LLM-maintained knowledge base. The pattern is simple: I curate sources and ask questions; an LLM agent reads, summarizes, cross-references, and keeps a running synthesis here as durable, interlinked markdown pages. The goal is **accumulation** — every source ingested and every question asked makes the wiki a little richer, instead of disappearing into chat history.

If you're new to the idea, the [[wiki/Concepts/LLM Knowledge Systems|LLM Knowledge Systems]] page explains the pattern, and the [README](README.md) explains how this particular vault is set up.

## Start here

A few representative pages — pick one that catches your eye:

- _[[wiki/Concepts/PAGE NAME|Page name]] — one-line description._ <!-- TODO: pick a favorite concept page -->
- _[[wiki/Techniques/PAGE NAME|Page name]] — one-line description._ <!-- TODO: pick a favorite technique page -->
- _[[wiki/Workflows/PAGE NAME|Page name]] — one-line description._ <!-- TODO: pick a favorite workflow page -->
- _[[wiki/Syntheses/PAGE NAME|Page name]] — one-line description._ <!-- TODO: pick a favorite synthesis page -->
- _[[wiki/Language/PAGE NAME|Page name]] — one-line description._ <!-- TODO: pick a favorite language page -->

> [!tip] How to navigate
> Use **Search** in the top-left, **Explorer** to browse by folder, or the **Graph** in the right sidebar to see how pages connect. Every page has backlinks at the bottom.

## Full index

The complete catalog of pages, organized by topic. This is the long version — if you'd rather wander, just click around the graph.

### LLM wiki architecture

| Page | Type | Status | Summary |
| --- | --- | --- | --- |
| [[wiki/Concepts/LLM Knowledge Systems\|LLM Knowledge Systems]] | concept | seed | Pattern for using LLMs to maintain a persistent markdown wiki instead of only querying raw sources. |
| [[wiki/Workflows/Raw to Wiki Compilation\|Raw to Wiki Compilation]] | workflow | seed | Process for converting source material into durable, linked wiki pages. |
| [[wiki/Workflows/Question Answering Against a Wiki\|Question Answering Against a Wiki]] | workflow | seed | Workflow for answering questions by reading the compiled wiki first, then sources as needed. |
| [[wiki/Workflows/Wiki Health Checks\|Wiki Health Checks]] | workflow | seed | Periodic audits for contradictions, stale claims, orphan pages, and missing concepts. |
| [[wiki/Techniques/Context Engineering\|Context Engineering]] | technique | seed | Shaping available context so LLMs can navigate and use the wiki effectively. |
| [[wiki/Concepts/LLM Tool Use\|LLM Tool Use]] | concept | seed | Search, file upload, code execution, IDE agents, and other tools as context channels. |
| [[wiki/Concepts/Thinking Models\|Thinking Models]] | concept | seed | Reasoning models are useful for hard tasks where extra latency can buy accuracy. |

### Agentic engineering

| Page | Type | Status | Summary |
| --- | --- | --- | --- |
| [[wiki/Concepts/Agentic Engineering\|Agentic Engineering]] | concept | seed | Discipline of coordinating agents while preserving professional quality bars. |
| [[wiki/Concepts/Vibe Coding\|Vibe Coding]] | concept | seed | Letting an AI coding agent take substantial implementation control under human steering. |
| [[wiki/Concepts/Software 3.0\|Software 3.0]] | concept | seed | Natural-language context and prompts as a programming medium for LLM interpreters. |
| [[wiki/Concepts/Agent-Native Infrastructure\|Agent-Native Infrastructure]] | concept | seed | Infrastructure designed for agents to use directly through legible instructions and APIs. |
| [[wiki/Concepts/Understanding Bottleneck\|Understanding Bottleneck]] | concept | seed | Even when thinking is outsourced, the human must understand enough to direct the work. |

### Metacognition and learning

| Page | Type | Status | Summary |
| --- | --- | --- | --- |
| [[wiki/Syntheses/Current Study System\|Current Study System]] | synthesis | developing | User's current encoding and retrieval loop built around BHS plus SIR. |
| [[wiki/Dimensions/Dimensions of Learning\|Dimensions of Learning]] | model | developing | Central hub model for Deep Processing, Self-Management, Self-Regulation, Mindset, and Retrieval. |
| [[wiki/Dimensions/Deep Processing\|Deep Processing]] | dimension | developing | Dimension for encoding through comparison, chunking, prioritization, and meaning-making. |
| [[wiki/Dimensions/Self-Management\|Self-Management]] | dimension | developing | Dimension for time, task, focus, energy, habits, and environment. |
| [[wiki/Dimensions/Self-Regulation\|Self-Regulation]] | dimension | developing | Dimension for monitoring, diagnosing, and adjusting the learning process. |
| [[wiki/Dimensions/Mindset\|Mindset]] | dimension | developing | Dimension for interpreting difficulty, mistakes, feedback, identity, and growth. |
| [[wiki/Dimensions/Retrieval\|Retrieval]] | dimension | developing | Dimension for recall, reconstruction, interleaving, spacing, and transfer. |
| [[wiki/Concepts/Metacognition\|Metacognition]] | concept | seed | Awareness and control of thinking during learning; the control layer for learning-to-learn. |
| [[wiki/Techniques/Building the Radar\|Building the Radar]] | technique | seed | Practice for detecting shifts from active processing into passive consumption. |
| [[wiki/Concepts/Active vs Passive Learning\|Active vs Passive Learning]] | concept | seed | Distinguishes visible learning behaviors from the thought quality they produce. |
| [[wiki/Concepts/Cognitive Load as Signal\|Cognitive Load as Signal]] | concept | seed | Interprets mental effort, overload, and drowsiness as metacognitive signals. |
| [[wiki/Concepts/Unlearning Learning Habits\|Unlearning Learning Habits]] | concept | seed | How old learning habits persist and how to replace them. |
| [[wiki/Concepts/Deep Processing\|Deep Processing Concept Note]] | concept | seed | Supporting concept note for meaning-making through comparison, evaluation, connection, and schema formation. |
| [[wiki/Concepts/Memory Handling\|Memory Handling]] | concept | seed | Deliberately shaping new information so it can be encoded and retrieved. |
| [[wiki/Techniques/Thinking on Paper\|Thinking on Paper]] | technique | seed | Using notes as an external workbench for reasoning and cognitive offload. |
| [[wiki/Techniques/Bear Hunter System\|Bear Hunter System]] | technique | developing | Encoding system for aiming inquiry, shooting through sources, and skinning a final structure. |
| [[wiki/Techniques/Aim\|Aim]] | technique | developing | BHS step for directing attention toward importance and relationships. |
| [[wiki/Techniques/Shoot\|Shoot]] | technique | developing | BHS step for investigating Aim questions and constructing a working structure. |
| [[wiki/Techniques/Skin\|Skin]] | technique | developing | BHS step for refining the final chunk structure into a cleaner map. |
| [[wiki/Techniques/Spaced Interleaved Retrieval\|Spaced Interleaved Retrieval]] | technique | developing | Retrieval system combining recall, widening spacing, interleaving, and gap repair. |
| [[wiki/Techniques/WPW\|WPW]] | technique | developing | High-volume retrieval technique moving between whole-topic structure and detailed parts. |
| [[wiki/Techniques/Kolbs Experiential Cycle\|Kolbs Experiential Cycle]] | technique | developing | Reflection loop for converting experience into better experiments. |
| [[wiki/Techniques/Marginal Gains\|Marginal Gains]] | technique | developing | Improvement model for choosing small, compounding gains. |
| [[wiki/Techniques/Dimension Practice Tracks\|Dimension Practice Tracks]] | technique | developing | Four-step practice tracks for Deep Processing, Self-Regulation, Self-Management, and Mindset. |
| [[wiki/Techniques/Upgrading Your Dimensions\|Upgrading Your Dimensions]] | technique | developing | Strategy for improving dimensions through foundation and growth horizons. |
| [[wiki/Concepts/Importance-Based Chunking\|Importance-Based Chunking]] | concept | developing | Grouping information by why it matters and how it should be used. |
| [[wiki/Concepts/Knowledge Mastery\|Knowledge Mastery]] | concept | developing | Practical levels for diagnosing whether knowledge is isolated, relational, evaluative, or transferable. |

### Language learning

| Page | Type | Status | Summary |
| --- | --- | --- | --- |
| [[wiki/Resources/Vietnamese Language Learning Resources\|Vietnamese Language Learning Resources]] | resource-catalog | developing | Compiled Refold resource catalog for Vietnamese immersion, sound/script work, tooling, and review resources. |
| [[wiki/Resources/Mandarin Chinese Language Learning Resources\|Mandarin Chinese Language Learning Resources]] | resource-catalog | developing | Compiled Refold resource catalog for Mandarin comprehensible input, pinyin, character tools, immersion tooling, and review resources. |
| [[wiki/Language/Refold Language Learning System\|Refold Language Learning System]] | synthesis | developing | Hub for Refold-based language learning notes and workflows. |
| [[wiki/Language/Attention is Important\|Attention is Important]] | concept | developing | Why immersion must remain a high-attention activity. |
| [[wiki/Language/Noticing Game\|Noticing Game]] | technique | developing | Beginner attention technique for finding recognizable pieces in real input. |
| [[wiki/Language/YouTube Immersion Account\|YouTube Immersion Account]] | workflow | developing | Separate recommendation environment for target-language YouTube immersion. |
| [[wiki/Language/Three Pillars of Language Learning\|Three Pillars of Language Learning]] | model | developing | Balance model for Preparation, Interactive Immersion, and Freeflow. |
| [[wiki/Language/Preparation\|Preparation]] | pillar | developing | Priming layer for vocabulary, sounds, script, characters, grammar, and tools. |
| [[wiki/Language/Interactive Immersion\|Interactive Immersion]] | pillar | developing | Tool-assisted active immersion for unlocking meaning in real input. |
| [[wiki/Language/Freeflow Immersion\|Freeflow Immersion]] | pillar | developing | Attentive lower-friction exposure without constant lookup. |
| [[wiki/Language/Immersion Metalayers\|Immersion Metalayers]] | tool-note | developing | Tools such as Migaku and Language Reactor that layer lookup/subtitle support onto content. |
| [[wiki/Language/Hacking Comprehension Menu\|Hacking Comprehension Menu]] | technique | developing | Menu of tool, technique, and content levers for making input more comprehensible. |
| [[wiki/Language/Character Primer\|Character Primer]] | concept | developing | Orientation to Chinese/Japanese characters, components, context, and recognition. |
| [[wiki/Language/Refold Grammar Primers\|Refold Grammar Primers]] | technique | developing | Grammar priming as a comprehension aid rather than memorization. |
| [[wiki/Language/Vietnamese Grammar Primer\|Vietnamese Grammar Primer]] | primer | draft | Original draft grammar primer for Vietnamese, structured after the Refold primer workflow. |
| [[wiki/Language/Language Isn't Math\|Language Isn't Math]] | concept | developing | Language-learning mindset: natural speech is acquired from patterns and examples, not deduced from grammar formulas. |

### Reference

| Page | Type | Status | Summary |
| --- | --- | --- | --- |
| [[wiki/Glossary\|Glossary]] | glossary | seed | Short definitions of recurring terms. |
| [[wiki/Bibliography\|Bibliography]] | bibliography | seed | Source bibliography for the wiki. |
| [[wiki/Timeline\|Timeline]] | timeline | seed | Timeline of important developments and repo events. |

## How this is built

This wiki lives in an [Obsidian](https://obsidian.md) vault and is published as a static site by [Quartz v4](https://quartz.jzhao.xyz/). The full source is on GitHub at [logos52/llm-knowledge-base](https://github.com/Logos52/llm-knowledge-base). For the philosophy behind the project, see [[README]]; for how the LLM agent maintains the vault, see [[AGENTS]]; for chronological history, see [[log]].

Code is MIT-licensed; written content is released under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
