---
type: prd
status: approved
created: 2026-06-01
---
# PRD — MG & Kolbs: Relocate working copy · Public showcase · Archive Pan's repo

## Problem
Pan's faithful template currently lives inside `llm-knowledge-base` as a submodule and clutters the vault. Wedge wants to (1) keep a clean working copy of the template in his main workflow, (2) put a polished public showcase of it on the site, and (3) move Pan's source repo out of the vault and archive it. Direction change: this reverses the earlier "don't put the full MG & Kolbs on the public site" and "submodule lives in the vault" calls.

## Success criteria
- **1a — Relocated working copy.** A full multi-note MG & Kolbs template (faithful structure, all 5 Bases views, relations/links, scripts, CSS classes) lives in a new top-level vault folder. Every `.base` folder-filter is repointed to the new location; the dashboard page renders with the two-column layout and all DB views resolve.
- **1b — Public showcase.** One public page on logos52.github.io that visually recreates the template — Tasks board, Kolbs, Skills with progress bars, Goals, radar — with **dummy data** and **styled but non-functional** buttons, matching the site aesthetic. `npm run build` passes.
- **2 — Archive Pan's repo.** `pans-mg-kolbs-template` deinitialized as a submodule and removed from the vault; a local copy (with its `.git`) moved to `~/Projects/_archive/pans-mg-kolbs-template`; the GitHub repo stays intact; vault `.gitmodules`/index cleaned; build still passes.

## Scope
**In:** relocation + path fixes; one static public showcase page (dummy data, visual buttons); submodule deinit + archive move.
**Out:** making public buttons functional beyond the existing radar; migrating your real data into the relocated copy; any other site redesign.

## Constraints / risks
- **No GitHub write creds in this environment.** Any submodule commit/push (e.g., the pending row-height "Medium" edit) must run on your Mac / Claude Code. Deinit + move + local cleanup can be done here.
- **Relocation breaks `.base` filters** — `file.inFolder("pans-mg-kolbs-template/…")` must be rewritten to the new path in all 5 `.base` files; scripts that reference paths get updated too.
- **Destructive ops** (deinit, move, rm): I show exact commands + what they touch and get explicit "proceed" before running.
- This reverses the in-vault submodule; the standalone GitHub repo is the safety net.

## Plan (sequenced)
1. **1a** — copy the faithful template into the new folder; repoint `.base` filters + script paths; verify renders + Bases resolve. (Additive, non-destructive.)
2. **1b** — build the public showcase (reuse `LearningRadar`; faithful static tables + styled buttons; dummy data); build-verify.
3. **2** — (you/Claude Code) commit+push any pending submodule edit; then I deinit the submodule, move it to `~/Projects/_archive`, clean `.gitmodules`, build-verify.

## Open questions — RESOLVED
1. **Destination for 1a** → `MG & Kolbs/` at the vault root.
2. **Relationship to `mg-kolbs/`** → the clean faithful copy **becomes** the working MG & Kolbs; `mg-kolbs/` is retired/folded in (its personal additions — radar + `Dimensions/` — fold into the new copy; the rest is archived, not deleted).
3. **1a starter data** → keep Pan's example data; Wedge edits manually once the workflow settles.
4. **1b page** → upgrade the existing `content/mg-kolbs-template.md` in place (same URL).
5. **Radar in the relocated copy** → yes, fold the radar + `Dimensions/` (real data) into the working copy's front page.

## Sequencing note
1a (build new folder, additive) and 1b (public page) run first and are non-destructive. Retiring `mg-kolbs/` and archiving `pans-mg-kolbs-template` are destructive and gated on an explicit "proceed" at the end.
