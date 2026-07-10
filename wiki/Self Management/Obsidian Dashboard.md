---
type: system
status: stable
created: 2026-05-22
updated: 2026-07-09
source-count: 1
tags:
  - self-management
  - systems
  - obsidian
  - tooling
---

# Obsidian Dashboard - Surface Everything That Matters Today in One Note

An Obsidian dashboard removes the need to manually assemble context across tools each morning. One note pulls live data from your projects, tasks, clients, and daily notes and displays exactly what requires attention today.

## Core Principle

The dashboard works by reading live data rather than storing anything itself. It contains only Dataview queries that pull current information from your project, task, client, and daily notes. When you update any of those source notes, the dashboard reflects the changes automatically the next time you open it.

You continue working in your normal notes. The dashboard reflects those changes the next time you open it.

## Six Sections the Dashboard Shows

A complete dashboard surfaces six categories of live information:

- **Today's Priorities** — Tasks due today or overdue, limited to the top ten and sorted by priority
- **Active Projects** — Every active project with completion percentage, deadline, and the current next action
- **Next Seven Days** — All items with deadlines in the coming week across projects, tasks, and clients
- **Client Health** — Active clients sorted by health status, with last contact date, next touchpoint, and MRR
- **Open Loops** — Carry-over items from yesterday's daily note marked with an OPEN: prefix
- **Revenue Pulse** — Active clients sorted by monthly revenue with a running total

## Required Setup

Two Obsidian features make this possible:

**Dataview** provides the query engine. Install it from Community Plugins and enable it.

**YAML Properties** give every note structured metadata that Dataview can read. Consistent property names across note types are required for reliable results.

Create four main note types with these minimum properties:

- Projects: `type: project`, `status`, `client`, `deadline`, `priority`, `next_action`, `completion`
- Tasks: `type: task`, `status`, `project`, `due`, `priority`
- Clients: `type: client`, `status`, `mrr`, `last_contact`, `next_touchpoint`, `health`
- Daily notes: `type: daily`, `date` plus any items prefixed with `OPEN:`

## Building the Dashboard

Create a root note called `Dashboard.md`. The entire note consists of a date header and Dataview queries. No manual content is added after the initial setup.

Each section uses a TABLE or LIST query that pulls from the appropriate folder and filters by properties. Examples include:

- Today's tasks due or overdue, limited to ten
- Active projects with next actions and deadlines
- All vault items with deadlines in the next seven days
- Clients sorted by health status
- Yesterday's OPEN: items pulled from the daily note
- Active clients with MRR and an inline calculation for the total

The dashboard note stays small and fast because it only contains queries.

## Claude Integration

Connect the dashboard to Claude through the Filesystem MCP for two additional capabilities.

**Morning briefing**: Claude reads the full dashboard and produces a short natural-language summary each morning. The briefing highlights the single most important item, what needs attention before noon, at-risk clients or deadlines, and any open decisions. It can run automatically via automation (such as n8n) and land in your daily note before you start work.

**Automatic updates**: Write simple `DONE:` and `UPDATE:` lines in your daily note. Claude parses them and updates the corresponding properties in your project and task files. The dashboard reflects the changes immediately.

## Daily Workflow

With the system in place, the first ten minutes of the day change:

- An automated briefing appears in your daily note
- You review the synthesized priorities
- You open the dashboard for visual confirmation and add any new items
- You begin work with clear context instead of spending 30–45 minutes gathering it

## Keeping the Data Reliable

Three habits maintain accuracy over time:

- Update properties the moment status changes
- Use the `OPEN:` prefix consistently for items that must carry forward
- Review the dashboard at the end of the day so updates are already in place before the next morning's briefing

## Long-Term Effect

After consistent use for 30–60 days the system compounds. Your vault data becomes trustworthy, fewer items fall through the cracks, and the morning briefings become increasingly accurate reflections of your actual work. The dashboard eventually becomes the single starting point for the day.

## Related

- [[wiki/Dimensions/Self-Management|Self-Management]] — This dashboard is a concrete implementation of strong external self-management systems.
- [[wiki/Self Management/Attention Management - Preserving Flow|Attention Management]]
- [[wiki/Dimensions/Self-Regulation|Self-Regulation]] — The dashboard reduces the self-regulation load by making priorities and context immediately visible.
- [[wiki/Systems/AI & Agentic Systems/LLM Knowledge Systems|LLM Knowledge Systems]] — Example of using agents (Claude) on top of a structured personal knowledge base.