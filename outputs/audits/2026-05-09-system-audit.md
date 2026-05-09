---
type: audit
status: complete
created: 2026-05-09
audited-by: claude
scope: system-wide
---

# 2026-05-09 System Audit

System-wide architectural audit of the LLM Knowledge Base, covering both the Obsidian-vault and public-Quartz-site use cases. Conducted at user request.

## Strengths

- The three-layer model (raw → wiki → schema) holds up. The boundary between `raw/` (immutable evidence) and `wiki/` (compiled understanding) is real and respected.
- The publish/private split via `quartz.config.ts → ignorePatterns` is well-organized: Obsidian internals, vault-private folders, build artifacts, repo metadata, OS noise — each grouped and commented. No leakage of `raw/private/` content.
- `AGENTS.md` is unusually thorough: 355 lines, 25 sections, real governance for a wiki this size.
- The home/notes/about/blog/journal split is clean at the navigation level — each page pulls its own weight.

## Findings

### Architecture / structure

- **Empty wiki folders.** `wiki/Models/`, `wiki/Papers/`, `wiki/People/`, `wiki/Tools/` contained zero markdown. Pure ceremony in Obsidian's file tree. **Resolved this audit:** deleted.
- **Multiple index/home files.** `index.md` (public landing), `notes/index.md` (public catalog), `00 Command Center/Home.md` (Obsidian-only dashboard), `00 Command Center/Index.md` (Obsidian-only flat list). The Command Center Index duplicates `notes/index.md`. **Recommendation:** delete `Command Center/Index.md`, expand `Home.md` with system-pages and templates sections.
- **`outputs/` and `Clippings/` were both empty scaffolding.** User keeps Clippings (used as a manual web-clip inbox before moving to raw/). Outputs adopted as a "loose" workflow for non-wiki-shaped artifacts (audits, briefs, diagrams, slides).

### Wiki content / linking

- **Broken wikilinks pointing into excluded folders** (kind 1): 14 references to `[[raw/Source Index]]`, plus several `raw/sources/*`, `templates/Kolbs Template`. These render as broken on the public site but are valid in Obsidian. User decision: leave them.
- **Genuinely broken wikilinks** (kind 2): 21 references in `log.md` to deleted Red Team detail pages (Four Principles of Red Teaming, Premortem Analysis, Stakeholder Mapping, etc.) pruned in commit `5369e2d`. **Resolved this audit:** converted to italic plain text.
- **Red Team folder collapsed from 22 pages to 1.** The remaining hub captures the durable pattern; detail pages were intentional pruning. Pages recoverable from git if needed.
- **Two pages named "Deep Processing"** (Concepts and Dimensions) caused wikilink-resolution ambiguity. **Resolved this audit:** renamed `wiki/Concepts/Deep Processing.md` → `wiki/Concepts/Deep Processing Practice.md`, updated 8 references.

### Schema / governance

- **`AGENTS.md` is 355 lines.** Comprehensive but a maintenance burden. Watch for drift between schema and behavior.
- **Status field distribution was 59 developing / 21 seed / 1 draft** — `developing` was doing too much work. **Resolved this audit:** normalized all `developing` to `seed` (80 seed / 1 draft).
- **Type vocabulary had a long tail** (`tool-note`, `primer`, `pillar`, `bibliography`, `glossary`, `timeline` as one-offs). **Resolved this audit:** codified 12-type vocabulary in `AGENTS.md`, migrated long-tail pages to canonical types.
- **Three wiki-root reference pages** (Bibliography, Glossary, Timeline) had `type` but no `status` or `tags`. **Resolved this audit:** added `status: seed` and `tags: [reference]`.

### Privacy / publishing boundary

- `ignorePatterns` correctly excludes `raw/`, `Clippings/`, `outputs/`, `templates/`, `tools/`, `00 Command Center/`, build artifacts, and repo metadata.
- No automated check that `raw/private/` content isn't accidentally referenced from a published page. Worth adding as the wiki grows.

### Public site UX

- `index.md` and `notes/index.md` overlap in structure but serve different audiences (landing vs. catalog). Working correctly.
- `AGENTS.md` and `log.md` are public by user choice (transparency about the LLM-maintenance method). System tag hides them from graphs.

## Resolved this audit

- Deleted 4 empty wiki folders (`Models`, `Papers`, `People`, `Tools`).
- Added `status` and `tags` frontmatter to `wiki/Bibliography.md`, `wiki/Glossary.md`, `wiki/Timeline.md`.
- Renamed `wiki/Concepts/Deep Processing.md` → `wiki/Concepts/Deep Processing Practice.md`. Updated 8 references.
- Converted 21 broken Red Team wikilinks in `log.md` to italic plain text.
- Normalized status field: 59 `developing` → `seed`. Distribution now 80 seed / 1 draft.
- Codified 12-type vocabulary in `AGENTS.md` and migrated long-tail page types.
- Deleted redundant `00 Command Center/Index.md`.
- Expanded `00 Command Center/Home.md` with system-pages and templates sections.
- Adopted "loose" `outputs/` workflow for non-wiki-shaped artifacts.

## Open follow-ups

- Decide whether `outputs/` deserves a build-time link-check script (catch `raw/private/` references in published pages).
- Decide whether `Clippings/` should remain a separate inbox or be merged into a `raw/inbox/` folder.
- Periodically audit: how many `seed` pages have actually moved toward `mature` over the last 90 days? If zero, the status field still isn't doing useful work.
- Consider a wiki-root `Reference` folder if the three reference pages (Bibliography, Glossary, Timeline) grow into a category.

## Sources

- Direct inspection of repo state at HEAD on 2026-05-09.
- Git history (`git log`, `git show`).
- `quartz.config.ts → ignorePatterns`.
- `AGENTS.md` schema and Page Standards section.
