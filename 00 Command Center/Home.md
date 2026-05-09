---
type: command-center
created: 2026-05-02
updated: 2026-05-10
tags:
  - system
---

# LLM Knowledge Base

This is the operating surface for the public LLM knowledge base.

## System Pages

Public-facing root files:

- [[index|LLM Knowledge Base]] — public home page
- [[about|About]]
- [[notes/index|Notes Index]]
- [[log|Log]]
- [[AGENTS|AGENTS]] — LLM operating schema
- [[README|README]] — project explainer

Obsidian-only operational pages:

- [[Implementation Plan]]
- [[Open Questions]]
- [[Changelog]]
- [[Writing Standards]]
- [[raw/Source Index|Source Index]]

Reference pages in the wiki:

- [[wiki/Glossary|Glossary]]
- [[wiki/Bibliography|Bibliography]]
- [[wiki/Timeline|Timeline]]

## Templates

- [[templates/Source Note|Source Note]]
- [[templates/Paper Note|Paper Note]]
- [[templates/Concept Note|Concept Note]]
- [[templates/Tool Note|Tool Note]]
- [[templates/Q&A Output|Q&A Output]]
- [[templates/Audit Report|Audit Report]]
- [[templates/Kolbs Template|Kolbs Template]]
- [[templates/Writing Standard|Writing Standard]]

## Core Workflow

1. Add source notes to `raw/`.
2. Compile durable concepts into `wiki/`.
3. Save non-wiki-shaped artifacts (audits, briefs, diagrams, slides) in `outputs/`.
4. Promote durable insights from `outputs/` back into `wiki/`.
5. Run health checks and keep [[notes/index|notes/index.md]] plus [[log|log.md]] current.

## Main Areas

- Sources: `raw/sources`, `raw/papers`, `raw/repos`, `raw/datasets`, `raw/assets`, `raw/images`
- Clipper inbox: `Clippings`
- Wiki: `wiki/Concepts`, `wiki/Dimensions`, `wiki/Techniques`, `wiki/Syntheses`, `wiki/Workflows`, `wiki/Self Management`, `wiki/Decision Making`, `wiki/Language`, `wiki/Resources`
- Red Teaming: `wiki/Red Team`
- Books: `wiki/Books`
- Outputs: `outputs/answers`, `outputs/briefs`, `outputs/diagrams`, `outputs/slides`, `outputs/audits`
- Templates: `templates`
- Tools: `tools`

## Current Seed Scope

The initial scope is [[wiki/Concepts/LLM Knowledge Systems|LLM Knowledge Systems]]: LLM-maintained markdown wikis, source ingestion, context engineering, search, health checks, Q&A, and synthetic data paths.

## Current Research Thread

Metacognition and learning-to-learn:

- [[wiki/Syntheses/ICS System|ICS System]]
- [[wiki/Syntheses/Current Study System|Current Study System]]
- [[wiki/Dimensions/Dimensions of Learning|Dimensions of Learning]]
- [[wiki/Dimensions/Deep Processing|Deep Processing]]
- [[wiki/Dimensions/Self-Management|Self-Management]]
- [[wiki/Dimensions/Self-Regulation|Self-Regulation]]
- [[wiki/Dimensions/Mindset|Mindset]]
- [[wiki/Dimensions/Retrieval|Retrieval]]
- [[wiki/Techniques/Upgrading Your Dimensions|Upgrading Your Dimensions]]
- [[wiki/Techniques/Dimension Practice Tracks|Dimension Practice Tracks]]
- [[wiki/Techniques/Kolbs Experiential Cycle|Kolbs Experiential Cycle]]
- [[templates/Kolbs Template|Kolbs Template]]
- [[wiki/Techniques/Marginal Gains|Marginal Gains]]
- [[wiki/Techniques/Reverse Goal Setting|Reverse Goal Setting]]
- [[wiki/Techniques/Bear Hunter System|Bear Hunter System]]
- [[wiki/Techniques/Aim|Aim]]
- [[wiki/Techniques/Shoot|Shoot]]
- [[wiki/Techniques/Skin|Skin]]
- [[wiki/Techniques/Spaced Interleaved Retrieval|Spaced Interleaved Retrieval]]
- [[wiki/Techniques/WPW|WPW]]
- [[wiki/Concepts/Importance-Based Chunking|Importance-Based Chunking]]
- [[wiki/Concepts/Knowledge Mastery|Knowledge Mastery]]
- [[wiki/Concepts/Metacognition|Metacognition]]
- [[wiki/Techniques/Building the Radar|Building the Radar]]
- [[wiki/Concepts/Active vs Passive Learning|Active vs Passive Learning]]
- [[wiki/Concepts/Cognitive Load as Signal|Cognitive Load as Signal]]
- [[wiki/Concepts/Unlearning Learning Habits|Unlearning Learning Habits]]
- [[wiki/Concepts/Fixed vs Growth Mindset|Fixed vs Growth Mindset]]
- [[wiki/Concepts/Neuroticism|Neuroticism]]
- [[wiki/Concepts/Deep Processing Practice|Deep Processing Practice]]
- [[wiki/Concepts/Memory Handling|Memory Handling]]
- [[wiki/Techniques/Thinking on Paper|Thinking on Paper]]

Language learning resources:

- [[wiki/Language/Refold Language Learning System|Refold Language Learning System]]
- [[wiki/Language/Attention is Important|Attention is Important]]
- [[wiki/Language/Noticing Game|Noticing Game]]
- [[wiki/Language/YouTube Immersion Account|YouTube Immersion Account]]
- [[wiki/Language/Three Pillars of Language Learning|Three Pillars of Language Learning]]
- [[wiki/Language/Preparation|Preparation]]
- [[wiki/Language/Interactive Immersion|Interactive Immersion]]
- [[wiki/Language/Freeflow Immersion|Freeflow Immersion]]
- [[wiki/Language/Immersion Metalayers|Immersion Metalayers]]
- [[wiki/Language/Hacking Comprehension Menu|Hacking Comprehension Menu]]
- [[wiki/Language/Character Primer|Character Primer]]
- [[wiki/Language/Refold Grammar Primers|Refold Grammar Primers]]
- [[wiki/Language/Vietnamese Grammar Primer|Vietnamese Grammar Primer]]
- [[wiki/Language/Language Isn't Math|Language Isn't Math]]
- [[wiki/Resources/Vietnamese Language Learning Resources|Vietnamese Language Learning Resources]]
- [[wiki/Resources/Mandarin Chinese Language Learning Resources|Mandarin Chinese Language Learning Resources]]

LLM systems and agentic engineering:

- [[wiki/Concepts/Agentic Engineering|Agentic Engineering]]
- [[wiki/Concepts/Vibe Coding|Vibe Coding]]
- [[wiki/Concepts/Software 3.0|Software 3.0]]
- [[wiki/Concepts/Agent-Native Infrastructure|Agent-Native Infrastructure]]
- [[wiki/Concepts/Understanding Bottleneck|Understanding Bottleneck]]
- [[wiki/Concepts/LLM Tool Use|LLM Tool Use]]
- [[wiki/Concepts/Thinking Models|Thinking Models]]
- [[wiki/Concepts/A Motorcycle for the Mind|A Motorcycle for the Mind]]
- [[wiki/Concepts/A Return to Code|A Return to Code]]
- [[wiki/Concepts/Nothing Ever Happens Is Over|Nothing Ever Happens Is Over]]

Books and longform reviews:

- [[wiki/Books/The Parasitic Mind|The Parasitic Mind]]
- [[wiki/Books/The Book of Elon|The Book of Elon]]

Red Teaming:

- [[wiki/Red Team/Red Teaming|Red Teaming]]
- [[wiki/Concepts/Suicidal Empathy|Suicidal Empathy]]
- [[blog/on-red-teams-closure|On Red Team's Closure]]
- [[journal/red-team-pruning|Red Team Pruning Notes]]

## Next Actions

- Build a weekly SIR scheduler template for the user's actual subjects.
- Create a worked BHS example from one current topic.
- Create the first health check report.
- Add a small local search/index script.
