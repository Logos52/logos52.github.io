---
title: "Fresh Start Personal Workflow OS Checklist"
description: "Independent execution checklist for designing a personal dashboard/workflow OS manually before asking AI to automate it."
type: journal-entry
created: 2026-05-24
updated: 2026-05-24
tags:
  - system
  - workflow
  - dashboard
  - planning
  - possible-paths
---

# Fresh Start Personal Workflow OS Checklist

**Date:** 2026-05-24  
**Status:** Draft plan for manual editing in Obsidian  
**Purpose:** Start fresh and design a personal workflow/dashboard system by hand before asking AI to automate or implement it.

## Guiding Principle

Build the manual dashboard first, then automate around the behavior that actually repeats.

The first version should make work visible, reduce decision friction, and help choose the next action. It should not begin as a full autonomous builder.

## Phase 1: Define The System

- [ ] Write a one-sentence purpose:

```text
This system exists to help me see, decide, and move my active work forward.
```

- [x] Decide the main surface:
  - [ ] Markdown dashboard
  - [ ] Obsidian note
  - [ ] HTML dashboard
  - [ ] Folder-based queue
  - [x] Textual
- [x] Pick a name for the system.
	cos
- [x] Pick the root folder name.
	Users/N1/Projects/cos
- [x] Decide what the system is allowed to track. *(see Notes below)*
- [x] Decide what the system should never touch automatically. *(see Notes below)*

## Phase 2: Choose The Core Objects

- [ ] Define what counts as an item.

Examples:

- task
- project
- source
- synthesis
- article
- idea
- decision
- draft

- [ ] Define item statuses:
  - [ ] `inbox`
  - [ ] `ready`
  - [ ] `active`
  - [ ] `waiting`
  - [ ] `review`
  - [ ] `done`
  - [ ] `archived`
- [ ] Define item priority levels:
  - [ ] `today`
  - [ ] `soon`
  - [ ] `someday`
  - [ ] `blocked`
- [ ] Decide what metadata every item needs:
  - [ ] title
  - [ ] status
  - [ ] priority
  - [ ] created date
  - [ ] next action
  - [ ] owner
  - [ ] notes
  - [ ] source/link

## Phase 3: Create The Folder Skeleton

Start simple:

```text
your-system/
  dashboard.md
  inbox/
  active/
  waiting/
  review/
  done/
  archive/
  logs/
  templates/
```

Optional later:

```text
your-system/
  prds/
  automations/
  reports/
  skills/
```

## Phase 4: Make The First Dashboard By Hand

- [ ] Create `dashboard.md`.
- [ ] Add these sections:

```md
# Dashboard

## Today

## Active Work

## Waiting For Me

## Ready For Review

## Inbox

## Recently Done

## Open Decisions

## Notes / Signals
```

- [ ] Fill it manually for a few days.
- [ ] Keep it short enough to actually use.
- [ ] Avoid automation until the manual version reveals what matters.

## Phase 5: Create Templates

### Work Item Template

```md
# Title

Status:
Priority:
Created:
Next action:
Deadline:
Related files:
Notes:
```

### PRD / Work Order Template

```md
# PRD - Title

## Goal

## Why This Matters

## Inputs

## Output Wanted

## Constraints

## Do Not Do

## Human Review Needed

## Done When
```

### Daily Log Template

```md
# YYYY-MM-DD

## What Changed

## What I Finished

## What Got Stuck

## What Needs Review

## Tomorrow
```

## Phase 6: Run It Manually For 3-5 Days

Each day:

- [ ] Add new items to `inbox/`.
- [ ] Move 1-3 items into `active/`.
- [ ] Write the next action for each active item.
- [ ] Move blocked items to `waiting/`.
- [ ] Move finished items to `done/`.
- [ ] Update `dashboard.md`.
- [ ] Write one short log entry.

The goal is to feel the workflow before automating it.

## Phase 7: Identify Repetition

After a few days, write down what keeps repeating:

- [ ] renaming files
- [ ] moving items between folders
- [ ] updating statuses
- [ ] summarizing inbox
- [ ] checking what is ready
- [ ] writing review notes
- [ ] creating daily summaries
- [ ] deciding what to work on next

These repeated actions become the first automation candidates.

## Phase 8: Decide The First AI Tasks

Start with low-risk tasks:

- [ ] generate a daily dashboard summary
- [ ] scan inbox and group items
- [ ] suggest next actions
- [ ] identify stale items
- [ ] draft a weekly review
- [ ] create PRDs from rough ideas
- [ ] summarize done items

Avoid automating:

- [ ] deleting files
- [ ] publishing final work
- [ ] making irreversible decisions
- [ ] silently changing the system
- [ ] promoting drafts without review

## Phase 9: Add Guardrails

Write a short operating rule file:

```md
# System Rules

- Never delete files automatically.
- Never publish without explicit approval.
- Always show proposed changes before making structural changes.
- Keep the dashboard short.
- Prefer moving items to archive over deleting.
- The system exists to reduce decision friction, not create more maintenance.
```

## Phase 10: First AI Prompt

Once the manual system has been used for a few days, ask AI:

```text
Read my dashboard, inbox, active, waiting, and logs folders.
Do not change files yet.
Give me:
1. current system status
2. stale items
3. suggested next actions
4. items that should move folders
5. automation opportunities
```

The first AI interaction should be observation before action.

## Notes To Fill In

### Candidate Names

- `cos` *(decided 2026-05-24)*
- Considered: `kos`, `los`, `helm`, `dispatch`, `ops`

### Root Folder

- `/Users/N1/Projects/cos`

### Surface Decision

- **Textual** (Python TUI) — proper terminal app, navigable like Doom Emacs, not an HTML skin.
- Textual gives real panels, keyboard navigation, widget-based layout.
- Run with one command or alias. One `.py` file to maintain.

### What I Want This System To Track

**Confirmed sections:**

- **Research brief** — AI developments, US politics (some), Tesla + SpaceX. Not labeled "morning."
- **Tasks** — active task list.
- **Important dates** — upcoming deadlines and events.
- **Production block** — midday-style focused work block. Not labeled "midday."
- **End of session wrap-up** — review and close. Not labeled "end of day."
- **Budget** — graphs only by default; numbers visible on drill-in (privacy in public).
- **Quick capture** — one keystroke to drop a task, thought, or link without leaving the TUI.
- **Active focus** — single visible line showing current north star project or initiative.
- **Yesterday's focus** — what was active in the last session, for continuity.
- **AI link** — link to Grok Build (XAI OAuth like Hermes setup) or Claude/Codex. No expensive API. Entry point to AI from inside the dashboard.

**Deferred sections (come last, after core system is built):**

- Skills & experiments — Kolbs-based, tied to llm-knowledge-base workflow. Build after Kolbs system is more developed.
- Weekly refinement — retrospective and planning pass. Come last.
- Wiki health pulse — deferred. No clear workflow yet for how to act on it.
- Habit / health signals — deferred. Currently only Apple Watch workout tracking; no unified health data source.

### What I Do Not Want Automated

- L3/L2 wiki pipeline — `cos` is independent from `llm-knowledge-base`. Pipeline status not surfaced here.
- Inbox management — handled by Obsidian Web Clipper. Not part of this system.
- Deleting files — never automatically.
- Publishing or promoting drafts — always requires human action.
- Irreversible decisions of any kind.
- Budget numbers — never exposed by default; only on explicit drill-in.
- Any write to `llm-knowledge-base/` — `cos` reads the vault at most; never writes to it autonomously.

### Privacy Model

Budget section as the template: graphs visible, numbers behind a drill-in. Apply the same principle across the dashboard — sensitive data is accessible but not the default view.

### First Dashboard Sections I Actually Want

In rough priority order for first build:

1. Active focus
2. Tasks
3. Quick capture
4. Research brief
5. Important dates
6. Production block
7. End of session wrap-up
8. Yesterday's focus
9. Budget
10. AI link

### First Manual Experiment

- Run `cos` daily for a few days with only Active Focus + Tasks + Quick Capture before adding the remaining sections.

### First AI-Assisted Experiment

- TBD after manual version is stable.
