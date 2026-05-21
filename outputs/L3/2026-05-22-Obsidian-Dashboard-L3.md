# Obsidian Dashboard L3 Synthesis

**Source:** X post by @cyrilXBT (2026-05-19), "How to Build an Obsidian Dashboard That Shows You Everything That Matters Today"
**Context:** A detailed guide for building a live, self-updating Obsidian dashboard using Dataview that surfaces priorities, projects, clients, deadlines, open loops, and revenue in one note.

## The Core Problem

Most people begin their day by manually assembling context across multiple tools: email, Slack, project folders, calendar, and task lists. This process takes 30-45 minutes and leaves the morning already fragmented.

The information already exists in the vault (project notes, client files, daily notes, tasks, calendar). The real bottleneck is that the user becomes the integration layer — manually connecting and interpreting scattered data every day.

## The Solution: A Read-Only Dashboard

An Obsidian dashboard is not a place to store new information. It is a single note that **reads** live data from the rest of the vault using queries. Because it only contains queries (not stored content), it updates automatically whenever the underlying notes change.

The user updates their normal project, task, client, and daily notes as usual. The dashboard reflects those changes instantly when opened.

## What the Dashboard Surfaces

A complete business-oriented dashboard displays six live categories:

1. **Today's Priorities** — Tasks due today or overdue, limited to the top 10, sorted by priority.
2. **Active Project Status** — All active projects with completion %, deadline, and the current next action.
3. **Upcoming Deadlines (Next 7 Days)** — Projects, tasks, and deliverables with deadlines in the next week.
4. **Client Health** — Active clients with health status (healthy / attention / atrisk), last contact, next touchpoint, and MRR.
5. **Open Loops** — Unfinished items carried forward from yesterday's daily note using an "OPEN:" prefix convention.
6. **Revenue Pulse** — Active clients sorted by MRR contribution with a running total.

## Technical Foundation

Two Obsidian features enable this:

- **Dataview** plugin: Acts as a query engine. Writes queries inside any note that dynamically pull and render results from other notes based on frontmatter properties, tags, or content.
- **YAML Properties**: Structured metadata at the top of notes (e.g. `type`, `status`, `due`, `deadline`, `priority`, `client`, `mrr`, `health`).

Consistent property naming across note types is essential. Inconsistent or mistyped properties cause queries to return incomplete or empty results.

## Note Structuring Conventions

The system relies on consistent YAML frontmatter for different note types:

- **Project notes** (`type: project`): status, client, deadline, priority, next_action, completion
- **Task notes** (`type: task`): status, project, due, priority, energy
- **Client notes** (`type: client`): status, mrr, last_contact, next_touchpoint, health
- **Daily notes** (`type: daily`): date, energy, focus + "OPEN:" items for carry-over

## Building the Dashboard

Create a root-level `Dashboard.md` note. The entire note consists of headers and Dataview queries (no manual content after initial setup).

The post provides specific Dataview queries for each of the six sections, including:
- TABLE queries with column aliases and filters
- A LIST query for open loops using the OPEN: convention
- An inline JavaScript calculation for total MRR

A full template structure is given with placeholders for the date header and each section.

## Claude Code Integration via MCP

Connecting the dashboard to Claude (via Filesystem MCP and automation like n8n) adds two powerful capabilities:

- **Intelligent morning briefing**: Claude reads the entire dashboard and produces a synthesized natural-language summary (most important thing today, what needs attention before noon, at-risk items, key client relationship, open decisions). The briefing is delivered automatically into the daily note before the user starts work.
- **Automatic property updates**: User writes simple "DONE:" and "UPDATE:" entries in their daily note. Claude parses them and updates the corresponding project/task properties in the vault.

## Daily Workflow

With the system running:
- 6:00 AM — Automated briefing appears in daily note
- 6:02 AM — User reads the synthesized briefing
- 6:05 AM — User opens the dashboard for visual confirmation and adds any new items
- 6:10 AM — User begins work with clear priorities

The goal is to eliminate the 45-minute manual context-gathering phase.

## Maintenance Habits for Accuracy

Three practices keep the data reliable over time:
- Update properties the moment status changes
- Consistently use the OPEN: prefix for non-task carry-over items
- Review the dashboard at end of day (not just morning) to make updates before the next briefing runs

## Troubleshooting

Common issues include:
- Property name mismatches between notes and queries
- YAML frontmatter not at the very top of the note
- Incorrect date formats (must be YYYY-MM-DD)
- Queries running too broadly (use folder filters like FROM "01 - PROJECTS")
- Inline calculations failing due to string vs number values

## Long-Term Effects

After 30+ days the system compounds:
- Consistent property updates create a highly accurate data layer
- OPEN: convention reduces lost items
- Morning briefings become increasingly calibrated to the user's actual patterns
- The user eventually cannot remember starting the day without the dashboard

The initial build takes one afternoon. The value increases significantly after the first month of disciplined use.