# Wiki Status + Lightweight Health Check Report
**Date:** 2026-05-25  
**Performed by:** Grok (as part of requested audit + maintenance pass)  
**Scope:** Lightweight status check (per `wiki/Workflows/Wiki Status Checks.md`) + health check elements (per `wiki/Workflows/Wiki Health Checks.md`). Read-only analysis + synthesis; no destructive changes made during this pass.

## Executive Summary

The wiki is in **reasonable structural health** with a strong conceptual core around the Five Dimensions, BHS, SIR, and agentic engineering. Recent May 21–24 maintenance (workbench restructure, taxonomy normalization, frontmatter additions) cleaned up significant debt.

However, **maintenance rituals are largely dormant**, the central Open Questions queue is stale relative to May 23+ thinking, and there is a visible long tail of light "seed" pages. `Domains/` remains underdeveloped. Several high-signal items in `raw/inbox/` are uncompiled.

No critical broken links or contradictions were found in this pass, but lingering old path references and many self-referential maintenance workflow pages that have never been exercised are notable.

**Primary risks:** Maintenance debt accumulating as agentic/COS work accelerates; fragmentation of open questions; thin long-tail pages that dilute navigation value.

## Current Stats (as of this pass)

- **Total wiki pages:** 160 `.md` files
- **Heaviest sections:**
  - Dimensions/: 54 (including subfolders under Deep Processing, Self-Regulation, etc.)
  - Concepts/: 25
  - Language/: 14
  - Systems/: 11
- **Light sections (concern areas):**
  - Domains/: 5 total (mostly AI & Tooling; other subfolders are near-empty)
  - Red Team/: 2
  - Books/: 3
  - Experiences/: 3
  - Techniques/: 2 (most techniques now live under Dimensions/ after May cleanup)
- **notes/index.md** last updated: 2026-05-23 (still current for most high-value pages)
- **log.md** last entry: 2026-05-24 (workbench + taxonomy cleanup)

## Positive Observations

- Core syntheses (`First Principles of ICS`, `Prestudy, BHS, and SIR`, `Are You Learning or Just Using Techniques`, `Minimally Viable Learning System`) remain high-quality and well-linked.
- Writing Standards are being followed in newer pages.
- Recent maintenance successfully retired old `outputs/L3` paths and moved Hermes Agent.
- `notes/index.md` "Maps" and "Start Here" sections are useful orientation.
- Many individual pages have honest "Open Questions" sections.

## Specific Findings

### 1. Dormant Maintenance Workflows (Self-Referential Issue)
The following workflow pages are themselves "seed" with `source-count: 1` and blank or missing `last-audited`:
- `wiki/Workflows/Wiki Health Checks.md`
- `wiki/Workflows/Wiki Status Checks.md`
- `wiki/Workflows/Wiki Breakdown Pass.md`
- `wiki/Workflows/Question Answering Against a Wiki.md`

**Finding:** The system has documented how to do health checks but has not been running them. The May 24 journal entry explicitly defers "Wiki health pulse" due to lack of clear workflow for acting on results.

### 2. Low Source-Count / Seed Pages (Long Tail)
Multiple pages marked `status: seed` or `source-count: 1` in frontmatter, especially:
- All five pages under `Dimensions/30-Day Challenges/`
- `Books/Suicidal Empathy.md` (source-count: 1)
- Various early `Concepts/` entries (e.g., `Agent-Native Infrastructure.md` — short but useful; several others are similarly light)
- Maintenance workflows listed above

These pages are not harmful but contribute to navigation noise if they never receive a second source or promotion decision.

### 3. Lingering Stale References
Despite the May 24 "major stale links" cleanup, some references to old paths remain:
- `wiki/Techniques/Techniques - Learning Craft` (referenced from `Dimensions/30-Day Challenges/Self-Management.md`, `Techniques/Technique Training & Fundamentals.md`, `Systems/Obsidian Dashboard.md`)
- Occasional references to retired folder structures in older pages.

### 4. Underdeveloped Areas
- **Domains/**: Only `AI & Tooling/` has meaningful content (Claude Cowork, LLM Tool Use, Right vs Wrong Way to Work With AI). Decision Making/, Language/, Minimalism/, Red Team/, and Miscellaneous/ are empty or near-empty folders. This section looks abandoned in the public index.
- **Red Team/**: Only two pages. Strong conceptual desire in Open Questions to integrate Red Teaming tools into BHS/SIR/Kolbs, but almost no actual pages or examples yet.
- **30-Day Challenges/**: All five dimension challenge pages exist at `source-count: 1`. They feel like placeholders rather than lived practice artifacts.

### 5. Uncompiled Sources in raw/inbox (13 items)
Recent high-signal clippings not yet synthesized or promoted:
- Multiple Claude Cowork / Hermes Agent Operator items (directly relevant to current COS and agentic engineering thread).
- `r0b0tlabllm-wiki_obsidian_hermes...` (filesystem-first LLM-Wiki patterns — extremely relevant to the May 23 self-updating wiki exploration).
- Study technique upgrade clips and social media attention items.
- Language learning (Chinese textbook) material.

**Risk:** The "long tail" is growing while the high-craft synthesis pipeline is focused elsewhere (COS scoping).

### 6. Central Open Questions Queue is Stale
`00 Command Center/Open Questions.md` last updated 2026-05-07.

Major recent threads missing or underrepresented:
- Everything from the 2026-05-23 "Self-Updating Wiki and LLM-Wiki Integration" journal entry (SCHEMA.md, provenance, long-tail strategy, skill-driven lint vs. human synthesis).
- COS / autonomous OS implications for wiki maintenance.
- Specific questions around agent-assisted weekly reviews and "self-updating" definitions in the context of strict voice standards.
- Updated agentic engineering + wiki interaction questions post-Cowork synthesis work.

Individual wiki pages continue to accumulate "Open Questions" sections that are not rolled up.

### 7. Navigation / Index Notes
- `notes/index.md` is solid but does not yet reflect the full weight of the May 23 self-updating wiki exploration or the new `cos/` project relationship.
- No top-level `wiki/index.md` (relies on notes/index + Quartz).
- Focus/attention material remains somewhat fragmented (journal index itself flags the overlap between Focus Management and Social Media curvilinear pages).

### 8. No Critical Broken Links or Contradictions Found
This pass did not surface major contradictions or dead wikilinks. The May 24 cleanup was effective on the biggest offenders.

## Recommended Next Actions (Prioritized)

**High Priority (this week)**
1. Refresh central `00 Command Center/Open Questions.md` with the specific questions from the May 23 self-updating wiki entry + any surfaced in this report.
2. Run a targeted "seed page review" pass: for each low source-count page in Concepts/ and 30-Day Challenges/, decide deepen / merge / prune / archive. Update status in frontmatter and notes/index.md.
3. Clean remaining old `wiki/Techniques/` references.
4. Decide ownership for `Domains/`: either populate meaningfully or demote/remove empty sections from the public index.

**Medium Priority (next 2 weeks)**
5. Produce the first real exercised `Wiki Health Check` or `Status Check` output (this report can serve as the seed).
6. Ingest or synthesize at least the highest-signal raw/inbox items related to Claude Cowork + LLM-wiki patterns.
7. Add at least one concrete worked example (BHS on a real topic) and one 30-Day Challenge that reflects actual practice rather than theory.
8. Draft an initial `wiki/SCHEMA.md` (even a minimal version) capturing current conventions + useful Karpathy/Hermes-inspired fields.

**Lower / Ongoing**
9. Establish a recurring (e.g., monthly) lightweight health check ritual and log the results.
10. Improve cross-linking between Focus Management and Social Media curvilinear pages (or decide on consolidation).
11. Consider whether Red Teaming integration deserves its own synthesis page or should be distributed into existing dimension pages.

## Proposed Additions to Central Open Questions

(These will be appended to `00 Command Center/Open Questions.md` after review.)

### Wiki Maintenance & Self-Updating (new section or under LLM Workflows)
- Where should the "long tail" live — inside the main wiki with lighter standards, in a parallel compiler layer, or primarily in workbench topic indexes until they earn promotion?
- How much of the lint/audit/cross-ref work should be skill-driven (Grok Build skills in cos/) vs. simple scripts vs. occasional Hermes sessions?
- What does "self-updating" actually mean in practice for this specific voice and Five Dimensions commitment — nightly digests? On-ingest proposals? Weekly contradiction reports?
- How does a self-updating layer interact with the public Quartz surface and the desire for a meta-dashboard / Start Here experience?
- Should COS eventually own wiki health pulse, lint, and daily/weekly digest generation, or should that stay strictly inside the knowledge base?
- What minimal SCHEMA.md + provenance conventions would give an agent enough guardrails to propose safe wiki updates without violating voice or source-discipline rules?

### Agentic Engineering + Wiki Interaction
- Which parts of this wiki should be agent-maintained vs. require human taste and final voice pass?
- How should we review agent-proposed pages or backlinks for correctness, source discipline, and usefulness?
- What is the interaction model between the high-craft L4→L3→L2→L1 pipeline and any future wiki-compiler skill?

### Specific Content & Practice Gaps
- Which Red Team tools (premortem, Analysis of Competing Hypotheses, Four Ways of Seeing, etc.) should become default parts of BHS, SIR, and Kolbs, and what would a minimal weekly personal Red Team review actually look like?
- What would a real, lived 30-Day Challenge across one or more Dimensions actually contain (vs. the current placeholder pages)?
- How do we want the relationship between Focus Management and Social Media curvilinear design pages to evolve — explicit cross-links, consolidation, or separate but deliberately linked angles?

## Appendix: Files Sampled During This Pass
- notes/index.md
- log.md (full recent history)
- 00 Command Center/Open Questions.md + Writing Standards.md + Home.md
- Multiple seed pages in Concepts/, Books/, Dimensions/30-Day Challenges/, Workflows/
- raw/inbox/ (current 13 items)
- workbench/ (currently empty post-restructure)
- Specific lingering link references

**Next step after this report:** Human review → append selected questions to Open Questions → log the completion of this health check pass.

---
*Report written following the spirit of the documented Wiki Status Checks and Wiki Health Checks workflows. No pages were created, edited, or moved during analysis.*