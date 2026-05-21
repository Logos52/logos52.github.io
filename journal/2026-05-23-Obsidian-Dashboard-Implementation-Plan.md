# Obsidian Dashboard Implementation Plan

**Date:** 2026-05-23  
**Focus:** Designing a unified daily operating + learning systems dashboard using MG & Kolbs principles.

## Objective

Create a single front-facing Obsidian note that serves as the primary dashboard. It should combine:

- Daily operational awareness (tasks, recent notes, open loops, quick actions)
- Learning and self-improvement tracking (Kolb’s Experiential Cycle + Marginal Gains)

The goal is to have one note that answers both “What needs my attention today?” and “How am I actively improving over time?”

## Proposed Structure

### 1. Header / Quick Actions
- Button/link to create a new journal entry
- Button/link to create a new Kolbs entry
- Current date (auto-updating)

### 2. Daily Operating Dashboard (Top Section)

**Tasks Due Today / Overdue**
- Dataview query showing tasks due today or overdue, sorted by priority.

**Recent Notes**
- Last 5–7 notes created or modified.

**Open Loops**
- Items carried over from previous daily notes or tagged as `OPEN`.

**Recently Completed**
- Items completed in the last 3–7 days (can pull from GitHub activity or a dedicated log).

### 3. Learning / Systems Dashboard (Bottom Section)

**Current Kolbs Cycle Status**
- Overview of recent Kolbs entries.
- Suggested Dataview grouped by skill, showing the current stage in the cycle (Experience → Reflect → Abstract → Experiment).
- Quick link to start a new Kolbs cycle on a specific skill.

**Active Marginal Gains**
- List of current 1% improvements being worked on.
- Columns could include: Skill, Current Goal, Last Update, Status.
- Link to the full Marginal Gains tracker.

**Skill Tracking Overview**
- High-level view of key skills under active development (e.g. Sleep, SIR, Focus, Note-taking, etc.).
- Shows current level, recent marginal gains, and trend.

**Reflection & Logging Prompts**
- Quick actions to:
  - Run a Kolbs cycle
  - Log a new marginal gain
  - Review weekly progress

### 4. Footer / Meta
- Last refreshed timestamp
- Link to full MG & Kolbs system documentation
- Link to relevant Self Management principles from ICS

## Key Design Principles

- **Top = Operating System** — What requires attention right now.
- **Bottom = Learning System** — Long-term improvement engine using Kolb’s Cycle + Marginal Gains.
- **Skill-based organization** for Kolbs and Marginal Gains tracking.
- **Low friction** for daily use (quick links, minimal manual updates).
- **Self Management integration** — The dashboard should reflect principles from the ICS material (e.g. balancing input with digestion, maintaining ownership of the learning process, avoiding overconsumption).

## Open Questions

- Should the Kolbs Dataview be skill-first or cycle-stage-first?
- How should “Recently Completed” be sourced (GitHub, manual log, or both)?
- Do we want a dedicated “Theory Queue” or “Marginal Gains Backlog” section?
- How much of the Self Management principles from ICS should be surfaced directly on the dashboard vs. linked?

## Next Steps

1. Review and refine this proposal.
2. Decide on exact Dataview queries (especially for Kolbs by skill).
3. Build the initial version of the dashboard note.
4. Iterate based on real usage.

---

*This document is saved as a journal entry for future reference and review.*