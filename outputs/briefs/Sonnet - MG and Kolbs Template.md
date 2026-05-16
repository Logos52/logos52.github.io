---
title: "MG & Kolbs Template"
type: brief
status: draft
created: 2026-05-15
model: claude-sonnet-4-6
sources:
  - "raw/sources/MG and Kolbs/1. Notion template overview.md"
  - "raw/sources/MG and Kolbs/2. Action zone tour (Part 1).md"
  - "raw/sources/MG and Kolbs/3. Action zone tour (Part 2).md"
  - "raw/sources/MG and Kolbs/4. Progress zone tour.md"
  - "raw/sources/MG and Kolbs/5. Learning zone tour.md"
  - "mg-kolbs/mg-kolbs-template.md"
  - "Notion export: MG & Kolb's Template (Jan 2025)"
author: "[[Panpan Sawanpornpen]]"
tags:
  - output
  - mg-kolbs
  - marginal-gains
  - kolbs
  - template
  - notion
  - system
---

# MG & Kolbs Template

## Core Thesis

**The MG & Kolbs template is a stripped-down Progress Zone — not a full life operating system.**

The original Notion template Pan uses is a three-zone Command Center (Action, Progress, Learning) plus a Second Brain. The MG & Kolbs template deliberately cuts this down to five databases and the core reflection-improvement loop. It keeps Kolbs cycling, marginal gains tracking, and goal-linked skill development, while dropping most of the daily execution infrastructure, the full learning zone, and the second brain.

The result is a tool optimised for one thing: structured self-improvement through repeated reflection cycles. It is not designed to manage daily productivity. Using it as a full task manager or study system will create friction it was not built to handle.

## What the Template Actually Contains

Five databases — Tasks, Kolbs, Skills, Goal Tracking, Goals — and no more.

**Tasks** is not a general task manager. In practice it functions as an automation layer: it holds the repeating weekly evaluation, the bi-monthly skills audit, and the six-monthly Priority 0 check-in as recurring tasks. Two filler tasks (Task 1, Task 2) show the Eisenhower priority properties (important + urgent / important + not urgent), but general task management is not the template's purpose.

**Kolbs** holds reflection cycles linked to specific skills. Each entry stores: the session name (e.g. SIR 1), the skill it belongs to, start/finish time and duration, marginal gains identified, experiments listed, and links to the previous and next Kolbs in the chain. The purple ☑️ button marks the current entry complete and automatically creates and opens the next one — but it copies the same name, so a numbering system requires a manual rename after creation.

**Skills** is the central organising database. Each skill has a current level (/10), final level (/10), competency stage (CI / CC (low) / CC (high) / UC), final level metrics (what reaching the final level actually means), and links to all Kolbs entries and goal tracking for that skill. The two example skills — SIR (5/10 → 7/10, CC low) and Sleep (3/10 → 9/10, CC high) — show the intended structure. Skills are linked to Goals and drive the Kolbs cycling.

**Goal Tracking** is the weekly evaluation layer — the page where evaluation against active processes is recorded, 1% gains are logged, and the next week's marginal metrics are set. It is auto-created weekly as a recurring task.

**Goals** is explicitly flagged by Pan as "not optimised." In the export it contains one placeholder entry ("Insert goal title"). The goal template has fields for sub-goals, processes, performance goals, and plan tracking, but this part of the system is the least developed and the least automated.

## The Core Workflow

The intended cycle, assembled from the video walkthroughs:

```
Goal (anchored, dissected into processes/skills)
  → Skills database: rate current vs final level, define final level metrics
  → Kolbs: run a session, fill in MGs and experiments, press ☑️ to chain the next one
  → Weekly eval + goal tracking: rate progress, extract 1% gains, set marginal metrics for next week
  → Repeat
```

Priority 0 check-in (auto, every six months): review the goal itself, reassess whether active skills still map to the right processes.

Skills audit → feedback request (auto, every ~two months): review skill levels against final level metrics, seek external input on progress.

The three recurring tasks in the Tasks database — weekly eval, skills audit, and Priority 0 check-in — are the system's heartbeat. They run automatically as long as the Notion calendar integration is active.

## Marginal Metrics: The Weekly Measurable Target

The clippings introduce a concept not named explicitly in the Obsidian version: **marginal metrics**.

Marginal metrics are specific, measurable, day-by-day targets set during the weekly evaluation. They differ from 1% gains in precision: a 1% gain is a directional improvement ("improve morning routine"); a marginal metric is a trackable weekly target ("sleep 9 hours — check off each day it happens"). Marginal metrics appear on the @Today page automatically via the Notion database relation, making them visible during daily work without opening the goals system.

In practice: during the weekly evaluation, you rate your active process, then set one or two marginal metrics to track through the week. Each metric has a daily checkbox. At the end of the week, the completed checkboxes become part of the evaluation data for the next cycle.

This mechanic has no direct equivalent in the current Obsidian version.

## The Kolbs Chaining Mechanic

The ☑️ button in the Kolbs database enforces a specific workflow:

1. Complete a Kolbs session (fill in MGs and experiments, log duration).
2. Press ☑️ — marks the current entry Done and opens the next one automatically.
3. Rename the new entry (the button copies the previous name, so "SIR 1" needs to be manually changed to "SIR 2").
4. The new entry is pre-linked to the same skill and has the previous Kolbs linked in the "Previous Kolbs" field.

This creates a chain: SIR 1 → SIR 2 → SIR 3, each carrying forward the skill link and the sequence reference. The chain is the operational form of the REDO loop — each entry is one Reflect → Evaluate → Define → Optimise cycle.

The "New Kolbs" path (not pressing follow-on) creates an entry for a new skill or a first session. "Follow on" is for continuing an existing skill cycle.

## What This Template Is Not

From the video walkthroughs, the full Command Center has infrastructure this template deliberately omits:

- **Eisenhower Matrix + Star prioritisation**: daily task ordering by urgency/importance, feeding into Google Calendar time-blocks. Not in MG & Kolbs.
- **@Today page**: a daily planning and review page that pulls the active marginal gains process automatically and prompts a daily 1% reflection. Not in MG & Kolbs.
- **Office Breaks + focus training**: auto-timed rest blocks generated from Notion Calendar task durations, with focus training during breaks. Not in MG & Kolbs.
- **COBEs/Experiments as mini-tasks**: experiments nested inside tasks, with their own completion and duplication workflow. The MG & Kolbs template has an Experiments field inside Kolbs entries but not a standalone Experiments database with the mini-task mechanic.
- **Learning Zone**: SIR sessions database, syllabus tracking, generated questions bank, question papers, problem solving worksheets. Entirely absent from MG & Kolbs.
- **Second Brain**: subject-linked knowledge folders. Absent.

This is not a gap to fill — it is a design choice. The template trades completeness for maintainability. Each omitted piece adds overhead. The question is whether any specific omission is causing friction in practice that the template was supposed to solve.

## Automation and Calendar Dependency

The template's recurring tasks (weekly eval, skills audit, Priority 0 check-in) are driven by Notion's repeat functionality and, for timing, by Notion Calendar. In Notion Calendar, tasks from the Tasks database are given start and end times, which also generates the OFFrest break timing for Basecamp users.

In Obsidian, this automation does not exist natively. The recurring task cadence has to be maintained manually or through a separate scheduling tool. The Kolbs ☑️ button has a partial equivalent in the Obsidian Templater plugin (create next note from template), but the automatic chaining and skill-linking requires more setup.

This is the main structural gap between the Notion version and the current Obsidian implementation.

## Setup Notes (From Pan Directly)

From the template's own instructions:

- When duplicating the template, all database relation fields get a "(1)" appended to their names. Clean these up or relations will not work.
- Do not delete the filler/example pages first — use them to understand the structure, then delete.
- The Goals database is not optimised. Pan has not used it heavily and the structure is still being refined.
- The ☑️ button only cycles Kolbs — it does not create entries for other database types.
- Recommend keeping the weekly eval + goal tracking automation even if other repeating tasks are turned off.

## Connection to Existing Wiki Pages

- [[wiki/Techniques/Marginal Gains|Marginal Gains]] — the REDO loop (Reflect, Evaluate, Define, Optimise) maps directly to the Kolbs chaining mechanic. Marginal metrics are the operational form of the "Define" step made weekly and day-trackable.
- [[wiki/Techniques/Kolbs Experiential Cycle|Kolbs Experiential Cycle]] — the ☑️ chaining mechanic enforces the cycle structurally: no new Kolbs without completing the previous one. The "full Kolbs vs quick note" distinction from the wiki maps to the "new vs follow-on" distinction in the template.
- [[wiki/Techniques/Spaced Interleaved Retrieval|Spaced Interleaved Retrieval]] — SIR is the primary example skill in the template. The SIR Kolbs chain (SIR 1 → SIR 2) is the intended model for how any skill is developed through repeated reflection cycles.
- [[wiki/Dimensions/Self-Regulation|Self-Regulation]] — the three recurring cadences (weekly eval, skills audit, Priority 0 check-in) are the structural self-regulation mechanism. Without them running, the system degrades into a static snapshot.
- [[wiki/Techniques/Upgrading Your Dimensions|Upgrading Your Dimensions]] — the skills audit → feedback request cadence is the external calibration step for dimension upgrades.
- [[wiki/Syntheses/First Principles of ICS|First Principles of ICS]] — the Priority 0 check-in (six-monthly) maps to the meta-strategy level: stepping back to ask whether the current processes are still the right ones to be developing.

## Open Questions

- Does the Obsidian version need a marginal metrics equivalent — a weekly measurable target that appears in daily view — or is the weekly evaluation alone sufficient?
- Which of the three recurring cadences (weekly eval / skills audit / Priority 0 check-in) is actually being run, and which exists only as a recurring task that keeps being skipped?
- Is the Goals database worth developing, or should the goal layer be held somewhere else and only the skills + Kolbs layer actively used?
- What is the minimum viable version of the @Today automation in Obsidian — enough to surface the active process and the week's marginal metric without building a full daily page?
- Should the Kolbs ☑️ chaining logic be replicated in Obsidian via Templater, or is manually creating the next note and linking it back sufficient given current usage frequency?

## Sources

- *1. Notion template overview*, Panpan Sawanpornpen, YouTube (https://www.youtube.com/watch?v=tzyVuhEMnSM), 2024-07-01.
- *2. Action zone tour (Part 1)*, Panpan Sawanpornpen, YouTube (https://www.youtube.com/watch?v=gSWDYpA5tWE), 2024-07-01.
- *3. Action zone tour (Part 2)*, Panpan Sawanpornpen, YouTube (https://www.youtube.com/watch?v=0VTIrYPh5uQ), 2024-07-01.
- *4. Progress zone tour*, Panpan Sawanpornpen, YouTube (https://www.youtube.com/watch?v=MvOnI_eT4_c), 2024-07-01.
- *5. Learning zone tour*, Panpan Sawanpornpen, YouTube (https://www.youtube.com/watch?v=am9Hx93KvaU), 2024-07-01.
- Notion template export: MG & Kolb's Template (as of January 2025), Panpan Sawanpornpen.
