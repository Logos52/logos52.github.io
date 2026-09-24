---
title: L3 Brief Retention — Policy Options
description: Sign-off options for what to do with L3 first-pass drafts vs L2 curated synthesis. For cos/RECOMMENDATIONS-REVIEW §5.3 or standalone review.
created: 2026-06-03
status: draft-for-sign-off
tags:
  - system
  - pipeline
  - L3
  - L2
---

# L3 Brief Retention — Policy Options

**Context (owner):** Most L3 material is not worth keeping long-term; **L2 should probably be kept** as the audit trail and reusable synthesis layer before wiki promotion.

**Current pipeline (canonical):** `raw/` → **`01 - Workbench/`** (active L3 + L2) → `wiki/`. See `AGENTS.md` § Workbench and Archives.

| Layer | Role | Active location | Legacy location |
|-------|------|-----------------|-----------------|
| **L4** | Raw sources | `raw/` | — |
| **L3** | Model first-pass, source-shaped briefs (`[Model] - [Title].md`) | `01 - Workbench/` (gitignored contents) | `outputs/L3/{GPT,Grok,Opus,Hermes}/` (~100+ files, **tracked**) |
| **L2** | Fused, voice-polished synthesis (`L2 - [Title].md`) | `01 - Workbench/` | `outputs/L2/{ready,revise,processed}/` (~29 files, **tracked**) |
| **L1** | Durable wiki pages | `wiki/` | — |

**Tension:** Active work already follows the new model (workbench private, wiki public). **`outputs/L3/` is dead weight in the public repo** — comparison artifacts from May ingest waves, largely superseded by L2 in `outputs/L2/ready/` or already promoted. **`outputs/L2/`** still holds promotable or historical syntheses the owner may want. Coherence scan (2026-05-27) flags many `outputs/L2/*` as orphans — expected until linked from wiki or index.

---

## Option A — Gitignore all L3 everywhere (workbench + legacy)

**Policy:** Treat L3 as ephemeral scratch. Add `outputs/L3/**` to `.gitignore`; untrack existing L3 from git (keep local copy optional). Workbench L3 already gitignored via `01 - Workbench/*`. Document: "never commit L3; only L2+ may be archived in repo if needed."

| Pros | Cons |
|------|------|
| Smallest public repo; aligns with owner indifference to L3 | Loses git history of model-comparison runs |
| Matches privacy pattern (workbench = local WIP) | Can't diff "which model said what" without local backup |
| Zero maintenance of `outputs/L3/` | Requires one-time `git rm --cached` + team/agent discipline |

**Best if:** You will never re-open multi-model diffs and only care about L2 → wiki.

---

## Option B — One-time archive `outputs/L3/` → `_archive/outputs/L3/`, stop new writes

**Policy:** Move entire legacy tree to `_archive/outputs/L3/` (or tarball outside repo). Keep folder README pointing to workbench. New L3 only in `01 - Workbench/`; never recreate `outputs/L3/`.

| Pros | Cons |
|------|------|
| Preserves local/historical comparison without bloating active tree | Archived L3 may still be **tracked** unless archive path is gitignored |
| Clear "legacy vs active" boundary | Two archive locations if workbench drafts also pile up locally |
| Low risk; reversible | Doesn't reduce repo size unless archive is untracked or stripped |

**Best if:** You want a safety net for old briefs but no ongoing L3 surface in `outputs/`.

---

## Option C — Promote-only workflow (retain L2, discard L3 on fusion)

**Policy:** After L2 is written and reviewed, **delete or move L3 drafts off the active workbench** within 7 days. Keep L2 in workbench until wiki promotion, then move L2 to `outputs/L2/processed/` or `_archive/L2/`. Legacy `outputs/L3/` handled by A or B.

| Pros | Cons |
|------|------|
| Enforces "L2 is the artifact" — matches owner preference | Occasional regret if L2 dropped a good paragraph only in a weak model's L3 |
| Active workbench stays scannable | Needs agent/human checklist on every ingest |
| Reduces duplicate prose maintenance | Hermes/GPT/Grok folders in legacy remain until B/A applied |

**Best if:** Pipeline throughput matters more than model archaeology.

---

## Option D — Auto-delete L3 after L2 promotion (timed retention)

**Policy:** L3 TTL = until `L2 - [Title].md` reaches `status: ready` (or wiki promoted). Optional 14-day grace in `01 - Workbench/.trash/` for human override. L2 retention: **indefinite in `outputs/L2/`** until wiki promotion → `processed/`.

| Pros | Cons |
|------|------|
| Automatable (script: if matching L2 exists, purge sibling `* - Title.md` L3s) | Script must handle naming collisions and partial fusions |
| Bounded disk use on active machine | Wrong auto-match could delete wrong draft |
| Clear lifecycle: L3 = disposable input, L2 = kept record | Legacy `outputs/L3/` still needs one-time B or A |

**Best if:** You want hygiene without thinking about cleanup each session.

---

## L2-specific note (all options)

Regardless of L3 choice, **keep L2**:

- In **active** flow: `01 - Workbench/L2 - *.md` until promotion.
- In **legacy** flow: retain `outputs/L2/ready/` and `processed/` as promotion candidates and audit trail; consider linking from `notes/index.md` or wiki `source` frontmatter to reduce orphan noise in `cos scan`.

Do **not** gitignore L2 unless you move all durable synthesis to `wiki/` only (loses pre-promotion edit history).

---

## Recommendation for sign-off

**Bundle: Option B (legacy) + Option C (ongoing) + explicit L2 keep.**

1. **One-time:** Move `outputs/L3/` → `_archive/outputs/L3/` and add `outputs/L3/` to `.gitignore` (or untrack archive if it must not be public). Stops public-repo bloat from model drafts you don't care about.
2. **Ongoing:** Promote-only — all new L3 in gitignored workbench only; on L2 acceptance, drop L3 from active workbench (Option C). Add Option D script later if cleanup slips.
3. **L2:** No mass delete. Leave `outputs/L2/` as-is until each file is promoted or explicitly rejected → `processed/`.

**Sign-off questions:**

- [ ] Confirm L3 in public repo can go (B + gitignore)?
- [ ] Confirm L2 archive stays tracked until wiki promotion?
- [ ] TTL for workbench L3 after L2 (immediate vs 14-day)?

**References:** `outputs/L3/README.md`, `outputs/L2/README.md`, `AGENTS.md`, `GROK.md` (L3 structure), `01 - Workbench/README.md`, wiki health report `01 - Workbench/2026-05-25 Wiki Status + Health Check Report.md`.