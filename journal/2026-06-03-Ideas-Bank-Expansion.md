---
title: Ideas Bank — Expansion (2026-06-03)
description: High-signal ideas for later review across health, WNAC, vault, and Cowork OS. Not commitments.
type: journal-entry
created: 2026-06-03
tags:
  - ideas
  - cos
  - wnac
  - llm-knowledge-base
---

# Ideas Bank — Expansion

**Tone:** Backlog for review, not a roadmap. Link to PRDs where they exist. No Hermes-runtime dependencies (owner deprecating Hermes-as-agent refs).

---

## Health expansion (cos domain + vault)

- **cos `health/` domain folder** — PRD-cos already defers this as fifth domain; dashboard has placeholder card only (`generate_dashboard.py`). _Idea:_ minimal `health/data/weekly.json` hand-maintained (sleep hrs, training sessions, weight) before any wearable API.
- **Vault: Fitness goal note** — [[PRDs/PRD-Obsidian-LifeOS-Command-Center]] Task 4: add `mg-kolbs/Goals/Fitness.md` alongside Agentic Engineering / Learning Systems / Vietnamese so Direction embed is complete.
- **Dimensions ↔ body** — `wiki/Dimensions/Self-Regulation/Recovery.md` and energy-under-pressure pages exist; _idea:_ one hub `wiki/Domains/Health/` linking recovery, pacing, and sustainable pressure (avoid new seed pages — fuse into existing Self-Regulation cluster per May-28 bloat reflection).
- **Medical spend as signal, not health OS** — WNAC/wnab already tag Health category; _idea:_ cos health card shows "Health category MTD vs 3-mo avg" from WNAC export once [[PRDs/PRD-wnab-Obsidian-Bridge]] or WNAC snapshot path exists — spend proxy, not clinical tracking.
- **Morning Conductor slot** — `~/Projects/cos/prds/PRD-morning-conductor.md`: optional "body check-in" line in brief (1 sentence user types) before Grok/X layer; no automation required.

---

## WNAC investment section ideas (P2+, no implementation)

WNAC PRD **NG6** excludes trading analytics in v1; DESIGN.md reserves Copilot-style Investments UI for later. FEATURES.md prioritizes **sinking funds (B)** before flex rollover (A).

- **Sinking fund lanes** — Travel, big one-offs, annual insurance outside flex headline; rollover asymmetric per Monarch pattern (already in FEATURES.md). Maps to debt-from-lumpy-spend origin story.
- **Goals panel beyond debt dial** — cos `runway.json` already tracks "US relocation fund" and "Investment contribution". _Idea:_ WNAC read-only strip: goal name, % complete, months remaining — fed from same hand-edited JSON cos uses, not from bank CSV.
- **Portfolio snapshot (manual)** — gitignored `investments/holdings.json`: ticker, qty, cost basis, as-of date; dashboard section = allocation donut + total (DESIGN.md language). Monthly refresh with import cadence.
- **Investment contribution pacing** — tie flex underspend → optional route to investment goal (FEATURES flex rollover (A) as follow-on).
- **True-expense / sinking suggestions** — from [[PRDs/wnab-AI-Ideas]]: annualize irregular spend → suggest sinking targets (Cowork-over-exports only; no cloud txn upload).
- **Bridge to vault, not Obsidian finance host** — WNAC stays local HTML; Obsidian keeps numberless card per Bridge PRD — investment _ideas_ stay in WNAC/cos JSON, not wiki tables.

---

## Knowledge base / wiki expansion

- **Act on health check, don't add rituals** — May-25 report: maintenance workflows documented but dormant; 13 inbox items uncompiled; Domains/ near-empty; 30-Day Challenges at `source-count: 1`. _Idea:_ quarterly "compile or kill" pass on seeds, not more workflow pages.
- **Curated open questions (3–5)** — LifeOS PRD: stop auto-bloat of `02 - System/Open Questions.md` (~554 items in coherence scan); mirror Active Questions on Home only.
- **Red Team scope** — Journal 2026-05-28: keep Applied Critical Thinking only; _idea:_ 2–3 worked examples under BHS/SIR, not a Red Team folder sprawl.
- **Domains/ fill** — AI & Tooling exists; Decision Making, Language, Minimalism folders empty — either one synthesis each or remove from public index to cut noise.
- **Publish guard + PRD folders** — AGENTS.md: `PRDs/` raw-exposed on GitHub; audit for finance-adjacent prose in tracked PRDs.
- **Site / aesthetic** — [[PRDs/PRD-Site-Aesthetic-Refresh]] when wiki promotion pace justifies it.
- **MG Kolbs** — [[PRDs/PRD-MG-Kolbs-System]], relocate/publish PRD; complete SMARTER rows on Learning Systems goal note.
- **Tools: healthchecks** — AGENTS.md suggests `tools/healthchecks/` when wiki shape justifies; wire to cos `wiki-health.json` per `~/Projects/cos/prds/PRD-llm-wiki-dashboard.md` instead of duplicate scanners.

---

## Cowork OS expansion

- **Morning Conductor** — `~/Projects/cos/prds/PRD-morning-conductor.md`: `cos morning` as primary (scan → refresh all → brief); LaunchAgent 07:15 ICT; retire redundant Cowork-only schedules.
- **WNAC → cos runway** — PRD-morning-conductor defers finance bridge (leak risk); _idea:_ read-only `wnac/data.json` aggregates into `finances/data/` (flex remaining, debt dial %) — no txn detail in cos repo.
- **Learning pipeline Phase 2** — `learning-pipeline/data/intake-queue.json` + `inputs/sources.json` exist; connect to vault `raw/inbox` count in brief (read-only).
- **Mission-control dashboard** — `~/Projects/cos/prds/PRD-llm-wiki-dashboard.md`: fuse overview brief + kb-pipeline + wiki-health + skills-goals contracts; vault stays write-protected except explicit capture.
- **Health domain** — same as first section; slots in as folder + refresh without restructuring four core domains.
- **Autonomy** — `~/Projects/cos/prds/AUTONOMY-CHARTER.md`: builder stages wait for sign-off; aligns with L3 discard / L2 keep policy ([[02 - System/L3-Brief-Policy-Options]]).

---

## Cross-stack synergies

| Synergy                             | Idea                                                                                                                                                   |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **WNAC + cos brief**                | Single morning narrative: flex pace + debt dial + runway goals + wiki stale count                                                                      |
| **Vault Dimensions + cos learning** | Promote one L2/week from inbox → wiki; cos intake-queue reflects "in flight" title                                                                     |
| **wnab retirement**                 | Journal 2026-06-29 direction: WNAC replaces daily wnab; Obsidian finance card waits on snapshot schema (Bridge PRD) — don't deepen CSV charts in vault |
| **Budget journal**                  | [[PRDs/PRD-wnab-Budget-Journal]] narrative + WNAC AI analyze command = same monthly ritual                                                             |
| **Private goals**                   | `private/Goals/Priority 0.md` (tracked) ↔ Direction embed + cos skills-goals.json                                                                      |
| **Modularity export**               | Archived journal 2026-05-27: Finance Card, Cleanup Ritual, Decisions convention as companion repos when patterns mature                                |
| **Anti-bloat guard**                | Self-updating wiki paths (May-23 journal) + cos experiment lesson: automation proposes; human promotes L2→wiki only                                    |
| **GitHub modularity**               | Public method (vault, cos patterns) vs private money (WNAC gitignored, finances kept local + out of the repos) — keep contract explicit in agent docs  |

---

## Parking lot (explicitly later)

- Electron wnab launch, onboarding coaching PRDs — only if WNAC slips.
- Grok Build / X-brief auto-refresh — cos briefs still stale since 2026-05-27; Phase 2 wiring.
- qmd / hybrid search — AGENTS.md "when wiki justifies."
- Calendar system direction — archived journal 2026-05-27; integrate with tasks-calendar domain.

---

_Review cadence suggestion: skim this note during monthly finance refresh or quarterly wiki pulse — promote one row to a PRD or delete._
