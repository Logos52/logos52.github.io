---
title: "Possible Paths: Self-Updating Wiki and LLM-Wiki Integration"
description: "Exploratory thinking on evolving the current synthesis pipeline and wiki toward more compounding, self-maintaining knowledge base patterns inspired by Karpathy's LLM Wiki and related agent skill implementations."
type: journal-entry
created: 2026-05-23
updated: 2026-05-23
tags:
  - system
  - architecture
  - wiki
  - skills
  - possible-paths
---

# Possible Paths: Self-Updating Wiki and LLM-Wiki Integration

**Date:** 2026-05-23  
**Status:** Exploratory / logged for future reference  
**Context:** Recent research into Karpathy's LLM Wiki gist and the Hermes Agent bundled `research/llm-wiki` skill, alongside ongoing work on the root `workbench/` synthesis system and the 4-tier (L4 → L3 → L2 → L1) pipeline.

## The Core Question

The current knowledge base is deliberately human-curated at the high-signal end:
- Raw material enters via `raw/inbox/`, `raw/sources/`, and sessions.
- High-value topics receive multi-model L3 drafting in `workbench/`.
- L2 applies strict voice and integrity standards (mechanism-first, no artifact-as-subject, artifact-as-subject avoided, density, provenance awareness).
- Finished L2s promote to `wiki/` under Dimensions, Concepts, Syntheses, Workflows, Systems, etc.

This produces excellent, readable, Five-Dimensions-aligned pages. The cost is friction and limited compounding on the long tail of smaller observations, clippings, and recurring patterns.

The question is whether (and how) to introduce elements of a **self-updating, compounding wiki** — where the base itself becomes an active participant that extracts, cross-references, maintains consistency, and surfaces gaps — without eroding the voice quality or the priority on deliberate human synthesis.

## The Reference Pattern (Karpathy + Hermes Implementation)

Karpathy's LLM Wiki gist describes a persistent markdown knowledge base that the LLM incrementally builds and maintains instead of treating every query as a fresh retrieval problem. The wiki *is* the compiled knowledge.

The Hermes Agent `research/llm-wiki` skill (version 2.1+) implements this with a concrete three-layer architecture that has proven practical:

- **Layer 1 – Raw (immutable)**: `raw/articles/`, `raw/papers/`, `raw/transcripts/`. Sources are captured once with frontmatter (source_url, ingested, sha256). They are never edited.
- **Layer 2 – Wiki pages**: `entities/`, `concepts/`, `comparisons/`, `queries/`. These are the living, agent-updated pages with YAML frontmatter (title, created/updated, type, tags, sources, confidence, contested, contradictions).
- **Layer 3 – Schema and navigation**: `SCHEMA.md` (domain conventions, tag taxonomy, page thresholds, update policy), `index.md` (sectioned catalog with one-line summaries), `log.md` (append-only action history).

Critical rituals and mechanisms:
- **Orientation on every session**: Always read SCHEMA + index + recent log before touching content. This prevents duplicates and contradictions.
- **Provenance**: `^[raw/...]` markers on synthesized claims; `sources:` frontmatter.
- **Page thresholds and splitting rules**: Only create pages when something meets centrality or multi-source criteria; split at ~200 lines.
- **Lint as a first-class operation**: Orphan detection, broken wikilinks, frontmatter validation, staleness, contradiction surfacing, tag audit, log rotation.
- **Obsidian-native**: Wikilinks, Dataview, graph view all work immediately.
- **Division of labor**: Human curates sources and direction; agent handles extraction, cross-referencing, filing, and consistency maintenance.

This produces a wiki that gets *smarter* over time with relatively low per-ingest human cost for routine material.

## How This Relates to the Existing System

The current setup already has pieces that point in similar directions:

- `wiki/Workflows/Raw to Wiki Compilation.md` and `Wiki Breakdown Pass.md`, `Wiki Health Checks.md` describe ingestion, backlinking, and maintenance.
- There are existing `index.md` patterns in various folders and a Source Index.
- The `workbench/` + normalized model-prefixed files + `index.md` per topic is already a strong "active synthesis cockpit".
- Strong emphasis on mechanism-first language and living style rules (style-feedback.md) that any automation must respect.
- Recent Claude Cowork synthesis work surfaces exactly the capability layers (skills, scheduled tasks, autonomous builders, mission control) that could drive periodic wiki maintenance.

The gaps relative to the Karpathy/Hermes pattern are mainly:
- No single top-level `SCHEMA.md` with explicit tag taxonomy and page-creation thresholds for the whole base.
- Limited automatic provenance tracking across the long tail.
- Cross-referencing and contradiction surfacing are manual or semi-manual.
- The "long tail" raw material does not reliably become lightweight wiki entities/concepts.
- No equivalent to the "always orient first" ritual that keeps an agent from drifting when the wiki grows large.

## Possible Paths (Exploratory Options)

These are not mutually exclusive and can be staged. They are logged here as possibilities to revisit when friction or scale makes the trade-offs clearer.

**Path 1 — Schema + Provenance Hardening (Lowest friction, highest compatibility)**

- Add a root-level `wiki/SCHEMA.md` (or per major area) that codifies current conventions plus new rules drawn from the Karpathy pattern: file naming, frontmatter fields (including `confidence`, `contested`, `contradictions`), tag taxonomy aligned with Five Dimensions + Concepts, page thresholds, update policy, provenance marker syntax.
- Introduce lightweight `raw/wiki-ingest/` or mirror selected raw sources with sha256 frontmatter.
- Update the existing Raw to Wiki Compilation workflow and the L3→L2 converter to emit provenance markers and required frontmatter fields.
- Enhance `index.md` generation (possibly via a skill) so every new L2 promotion automatically appears in the right section.
- Add a recurring "wiki lint" pass (manual at first, later skill- or script-driven) that surfaces orphans, broken links, low-confidence pages, and contradictions.

This path strengthens what already exists without changing the human-heavy high-signal synthesis loop.

**Path 2 — Dedicated Wiki Compiler Skill + Workbench Handoff**

- Build (or evolve the previous attempt at) a `synthesis-workbench` skill that understands the current root `workbench/` layout, normalized filenames, and topic `index.md`.
- Add a companion or extension skill: `wiki-ingest` or `wiki-compiler` that can:
  - Take a finished L2 (or a batch of raw clippings).
  - Perform entity/concept extraction against the current wiki SCHEMA.
  - Propose new pages or updates with draft wikilinks and provenance.
  - Update navigation files.
  - Generate a lint report for human review.
- The workbench remains the place for deliberate voice-polished synthesis. The compiler skill handles the "compile the long tail and maintain the graph" work.
- Trigger phrases could include "ingest this into the wiki", "run wiki compilation on recent inbox", "lint the knowledge base".

This creates a clean division: workbench for high-craft L3/L2 work; wiki compiler for compounding and hygiene.

**Path 3 — Parallel Lightweight LLM-Wiki Layer (More ambitious)**

- Maintain the current curated `wiki/` as the "reviewed, voice-aligned, Five-Dimensions-spined" layer.
- Introduce a second directory (e.g., `wiki-llm/` or `data/wiki-raw/`) that follows the Hermes/Karpathy three-layer structure more strictly.
- New raw material can flow into the LLM-wiki layer with lower ceremony.
- Periodic (or skill-triggered) "promotion" passes move high-value, well-supported entities/concepts into the main curated wiki, with human voice editing.
- This gives the best of both worlds: fast compounding on volume + protected high-signal core.
- Requires clearer boundaries and possibly different Obsidian vault settings or symlinks.

**Path 4 — Hybrid with External Agent (Hermes or similar)**

- Continue primary work in the current Grok Build + Obsidian + Quartz environment.
- Periodically hand off batches or the entire raw/ + workbench/ output to a Hermes session (which already has the excellent llm-wiki skill and supports Grok models).
- Use Hermes for heavy lifting on cross-referencing, lint, and entity extraction, then pull the resulting markdown back into the main vault for voice review and promotion.
- This leverages the fact that Hermes already ships the exact skill and has strong Grok integration.

**Path 5 — Skills-First Evolution (Meta-path)**

Regardless of which architectural path is chosen, the highest-leverage near-term move is probably skills that reduce the activation energy of the current pipeline while making future wiki-style behaviors cheap:

- Correctly scoped `synthesis-workbench` skill for the new root layout (create topic folders, normalize files, generate comparison `index.md`, archive completed topics).
- Upgraded `light-voice-evolution` skill that embeds the latest artifact-as-subject, negative-framing, and Pre-Write Integrity Pass rules.
- New skills: `wiki-promoter` (L2 → L1 with backlink and index hygiene), `entity-extractor`, `contradiction-surfacer`, `blueprint-extractor` (neutral mechanism extraction from ambitious workflow posts like the recent Claude Cowork sources).
- Scheduled or on-demand tasks that run lint + daily/weekly wiki briefings back into the journal or a "Knowledge Base as Thinking Partner" page.

These skills can be built incrementally and will pay dividends on any of the paths above.

## Tensions and Guardrails

- **Voice quality vs. scale**: Any automation must pass through or be reviewable against the living style rules. The Pre-Write Integrity Pass and Light Voice Evolution process are non-negotiable for anything that reaches L2 or promoted wiki pages.
- **Human agency**: The knowledge base is a thinking partner, not a replacement. Automatic updates should surface candidates and contradictions for human resolution, not silently harden claims.
- **Five Dimensions spine**: New structures must continue to make the Dimensions (Mindset, Self-Management, Self-Regulation, Deep Processing, Retrieval) the primary navigation and meaning-making frame.
- **Reversibility**: Any new layer or schema should be easy to unwind or migrate if it increases friction instead of reducing it.
- **Obsidian + Quartz dual surface**: Everything must remain pleasant to read and navigate in both the local vault and the public static site.

## Relation to Existing Thinking

This exploration directly extends:
- [[journal/knowledge-base-as-thinking-partner-reflection|Knowledge Base as Thinking Partner]] — the wiki becomes a more active, compounding second brain while keeping the first brain in the loop.
- [[wiki/Workflows/Knowledge Base as Thinking Partner|Workflows page]] and the various Wiki Health / Compilation workflows.
- The Claude Cowork as Personal Work OS synthesis (especially the ambitious blueprint layer around skills, scheduled autonomous work, mission control, and self-documenting systems).
- The recent directory and pipeline cleanup that made `workbench/` the single cockpit for active L3/L2 work.

## Concrete Next Micro-Steps (Low Commitment)

1. Read the full Hermes llm-wiki SKILL.md and Karpathy gist side-by-side with the existing Raw to Wiki Compilation and Wiki Health Checks pages.
2. Draft a first version of `wiki/SCHEMA.md` that captures current practice plus the most useful new conventions (frontmatter fields, provenance syntax, tag taxonomy starter set).
3. Once the synthesis-workbench skill is correctly aligned with the root `workbench/` structure, use it to create the next few topics and observe what additional automation would feel natural.
4. Log any recurring pain points during the next 5–10 L3→L2→L1 cycles; those become the spec for the first wiki-oriented skills.
5. Revisit this entry after the next major synthesis (e.g., finishing the Claude Cowork ambitious blueprint work) and decide whether Path 1 + skills or Path 2 feels like the right increment.

## Open Questions

- Where should the "long tail" live — inside the main wiki with lighter standards, in a parallel compiler layer, or primarily in workbench topic indexes until they earn promotion?
- How much of the lint/audit/cross-ref work should be skill-driven vs. simple scripts vs. occasional Hermes sessions?
- What does "self-updating" actually mean in practice for this specific voice and Five Dimensions commitment — nightly digests? On-ingest proposals? Weekly contradiction reports?
- How does this interact with the public Quartz surface and the desire for a meta-dashboard / Start Here experience?

This entry exists primarily as a seed. The paths are options to be stress-tested against real usage rather than implemented on principle.

---

**Logged:** 2026-05-23 as part of ongoing architecture and skills exploration.  
**Related:** [[journal/index|Journal Index]] · [[wiki/Workflows/Raw to Wiki Compilation|Raw to Wiki Compilation]] · [[wiki/Workflows/Wiki Health Checks|Wiki Health Checks]] · Claude Cowork synthesis in workbench.

[[journal/calendar|Journal Calendar]] · [[journal/index|Back to Journal]]