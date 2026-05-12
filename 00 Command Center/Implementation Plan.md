---
type: implementation-plan
created: 2026-05-02
updated: 2026-05-06
tags:
  - system
---

# Implementation Plan

This plan instantiates the LLM-wiki pattern for this vault.

## Current Architecture

The vault has three layers:

1. Raw sources: `raw/` and `Clippings/`
2. Compiled wiki: `wiki/`
3. Schema and operations: [[AGENTS]], [[notes/index]], [[log]], [[raw/Source Index|Source Index]]

## Phase 1 — Scaffold And Schema

Status: done

- Created separate Obsidian/Git vault.
- Added `raw/`, `wiki/`, `outputs/`, `templates/`, and `tools/`.
- Added [[AGENTS]] as the operating schema.
- Added [[notes/index]] as the content-oriented wiki catalog.
- Added [[log]] as the append-only operation history.
- Added command center pages for Obsidian navigation.

## Phase 2 — Source Ingest

Status: active

- Raw transcript sources were added to `raw/`.
- Web clippings were added to `Clippings/`.
- [[raw/Source Index|Source Index]] tracks raw sources, statuses, topics, and compile targets.

Policy:

- Flat dumping into `raw/` is acceptable at this scale.
- `Clippings/` is acceptable as the Obsidian Web Clipper inbox.
- Do not force subfolder sorting until navigation becomes painful.
- The invariant is that every source must appear in [[raw/Source Index|Source Index]].

## Phase 3 — Wiki Compilation

Status: active

First compiled thread: metacognition and learning-to-learn.

Created pages:

- [[wiki/Concepts/Metacognition|Metacognition]]
- [[wiki/Techniques/Building the Radar|Building the Radar]]
- [[wiki/Concepts/Active vs Passive Learning|Active vs Passive Learning]]
- [[wiki/Concepts/Cognitive Load as Signal|Cognitive Load as Signal]]
- [[wiki/Concepts/How to Unlearn Old or Bad Habits Efficiently|How to Unlearn Old or Bad Habits Efficiently]]
- [[wiki/Dimensions/Dimensions of Learning|Dimensions of Learning]]
- [[wiki/Dimensions/Deep Processing|Deep Processing]]
- [[wiki/Dimensions/Retrieval|Retrieval]]
- [[wiki/Dimensions/Self-Regulation|Self-Regulation]]
- [[wiki/Dimensions/Self-Management|Self-Management]]
- [[wiki/Dimensions/Mindset|Mindset]]
- [[wiki/Concepts/Deep Processing Practice|Deep Processing Practice]]
- [[wiki/Concepts/Memory Handling|Memory Handling]]
- [[wiki/Techniques/Thinking on Paper|Thinking on Paper]]
- [[wiki/Syntheses/Current Study System|Current Study System]]
- [[wiki/Techniques/Bear Hunter System|Bear Hunter System]]
- [[wiki/Techniques/Aim|Aim]]
- [[wiki/Techniques/Shoot|Shoot]]
- [[wiki/Techniques/Skin|Skin]]
- [[wiki/Techniques/Spaced Interleaved Retrieval|Spaced Interleaved Retrieval]]
- [[wiki/Techniques/WPW|WPW]]
- [[wiki/Techniques/Kolbs Experiential Cycle|Kolbs Experiential Cycle]]
- [[wiki/Techniques/Marginal Gains|Marginal Gains]]
- [[wiki/Techniques/Dimension Practice Tracks|Dimension Practice Tracks]]
- [[wiki/Techniques/Upgrading Your Dimensions|Upgrading Your Dimensions]]

Next compile candidates:

- [[How I use LLMs|How I use LLMs]]
- [[Private Workshop - How to Learn Anything Faster|Private Workshop - How to Learn Anything Faster]]
- [[Learn to Learn in 4hrs 54mins - Full Course|Learn to Learn in 4hrs 54mins - Full Course]] deeper section-level pass

## Phase 4 — Query Outputs

Status: not started

When asking durable questions, answers should be written to `outputs/answers/`, then promoted back into `wiki/` if they create reusable insight.

Candidate first queries:

- What is my practical metacognition training loop?
- How do I distinguish productive cognitive effort from overload?
- How should an Obsidian note-taking workflow support thinking on paper?
- How should LLMs operate this wiki without drifting into generic summaries?

## Phase 5 — Lint And Health Checks

Status: not started

First health check should inspect:

- Uncompiled sources.
- Wiki pages with no sources.
- Missing backlinks.
- Duplicate or overlapping concepts.
- Public/private publication risk.
- Candidate pages implied by repeated terms.

Reports should go to `outputs/audits/`.

## Phase 6 — Tools

Status: deferred

Do not add tooling until the wiki grows enough to need it.

Likely first tools:

- Simple markdown search over `wiki/`, `raw/`, `Clippings/`, and `outputs/`.
- Health-check script for orphan pages, missing sources, and unindexed files.
- Optional qmd integration if the wiki outgrows `notes/index.md` plus `rg`.
