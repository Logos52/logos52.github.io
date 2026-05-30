---
title: "PRD — wnab folder consolidation + Claude Code↔Cowork handoff"
type: PRD
status: draft
created: 2026-05-29
updated: 2026-05-29
tags:
  - PRD
  - wnab
  - workflow
  - tooling
links:
  - "[[PRDs/PRD-wnab-Budget-App]]"
  - "[[journal/2026-05-29-wnab-direction-decided]]"
---

# PRD — wnab folder consolidation + Claude Code↔Cowork handoff

## Problem

One project, two folders. `~/Projects/wnab` (272 KB, no git remote) is orphaned planning
scaffolding; `~/Projects/wnab-app` (3.1 GB) is the real Actual Budget fork and is what feeds
the GitHub repo `Logos52/wnab`. The split came from `wnab/docs/BUILD-AND-CARVE.md`, which told
the builder to `git clone … actual.git wnab-app` — contradicting SPIKE.md's plan to live at
`~/Projects/wnab`. Result: confusing two-folder layout, folder name ≠ repo name, and (separately)
a Claude Code session left an uncommitted lock and state Cowork couldn't see. Wedge wants one
folder and a seamless handoff between Claude Code and Cowork.

## Success criteria

- One project folder, `~/Projects/wnab`, tracking `origin = Logos52/wnab` on branch `wnab`.
- The orphan recon folder is gone from `~/Projects` but recoverable (archived, not deleted).
- Unique recon docs (SPIKE.md, BUILD-AND-CARVE.md) preserved inside the app repo under `docs/`.
- Public repo has defensive `.gitignore` patterns for secrets/financial data.
- A written handoff convention both Claude Code and Cowork follow, so neither leaves stranded
  state and either can pick up where the other left off.

## Scope

**In:**
- Salvage `wnab/docs/SPIKE.md` + `BUILD-AND-CARVE.md` → `wnab-app/docs/`.
- Port defensive secret/finance `.gitignore` patterns into wnab-app.
- Archive `~/Projects/wnab` → `~/Documents/Finances/wnab/_recon-archive/` (move, reversible).
- Rename `~/Projects/wnab-app` → `~/Projects/wnab`.
- Add a "Session handoff" section to wnab's `AGENTS.md` (already read by both tools via CLAUDE.md).

**Out:**
- No app/feature code changes. No theme changes (v3 is current; recon `wnab.css` is superseded).
- No `git push` and no GitHub repo rename — local only unless Wedge says otherwise.
- No new tooling built — reuse the existing AGENTS.md/CLAUDE.md bridge.

## Constraints / risks

- **Irreversible step:** the recon `wnab` folder has no git remote — a hard delete is unrecoverable.
  Mitigation: archive-move, never `rm`.
- **Rename breakage:** no tracked file references `wnab-app` (verified), but any open terminal,
  Claude Code cwd, or shell alias pointing at the old path breaks until updated. Reversible by
  renaming back.
- **Public repo + finances:** data is external by design, but confirm nothing financial is tracked
  before/after; defensive .gitignore is a backstop, not the primary control.

## Plan (sequencing)

1. Pre-flight: `git status` clean on wnab-app (it is); confirm no tracked financial data.
2. Copy SPIKE.md + BUILD-AND-CARVE.md into `wnab-app/docs/`; commit (local).
3. Add defensive `.gitignore` patterns (`.env*`, `*.qfx`, `*.ofx`, `finances*`, `secrets*`); commit.
4. Add "Session handoff" section to AGENTS.md; commit.
5. Archive-move `~/Projects/wnab` → `~/Documents/Finances/wnab/_recon-archive/`.
6. Rename `~/Projects/wnab-app` → `~/Projects/wnab`.
7. Verify: folder builds/opens, git remote intact, branch `wnab` tracking origin.

## Seamless Claude Code ↔ Cowork handoff

The bridge already exists: wnab-app has `AGENTS.md` (20 KB) + `CLAUDE.md` (imports AGENTS.md),
which both Claude Code and Cowork read. The gap is *discipline*, not tooling. Proposed convention,
added to AGENTS.md:

- **End every session clean.** Commit (and push) before ending; never leave a dirty tree or a
  stale `index.lock`. Cowork reads repo state via git — a clean, pushed tree = a clean handoff.
- **Decisions go to the vault.** Anything non-obvious (why, trade-offs, ruled-out paths) is logged
  to `llm-knowledge-base/journal/` so it survives outside the coding session.
- **One source of truth per concern:** code in `wnab` repo; decisions/PRDs in the vault.
- **Division of labor:** Claude Code = in-repo execution (builds, multi-file edits, tests);
  Cowork = discovery, PRDs, review of CC output, cross-workspace coherence + note capture.

## Open questions

- Push the consolidation commits to `origin/wnab`, or keep everything local until you've eyeballed it?
- Rename the GitHub repo too, or leave `Logos52/wnab` as-is (folder name will match it anyway)?
- Archive location OK (`~/Documents/Finances/wnab/_recon-archive/`), or somewhere else?
