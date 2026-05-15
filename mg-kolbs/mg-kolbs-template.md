---
title: "MG & Kolbs Template"
type: operational-guide
status: active
created: 2026-05-15
updated: 2026-05-15
tags:
  - mg-kolbs
  - system
  - template
  - marginal-gains
  - kolbs
---

# MG & Kolbs Template

This page explains how the MG & Kolbs system works — what it contains, how to run it, and what it is not designed to do. Read this before setting up or resetting the system.

---

## What the Template Contains

Five databases: **Goals, Skills, Kolbs, Goal Tracking, Tasks** — and nothing else.

**Goals** holds the anchored goals that are currently active. Each goal page dissects what skills, attributes, and mindsets are needed to reach it. The goal page is also where performance goals and process lists live. See: [[Goals/Learning Systems|Learning Systems]], [[Goals/Agentic Engineering|Agentic Engineering]], [[Goals/Vietnamese|Vietnamese]].

**Skills** is the central organising database. Each skill has a current level (/10), a final level (/10), a competency stage (CI / CC low / CC high / UC), and final level metrics — a description of what reaching the final level actually looks like in practice. Skills link to both the goal they serve and the Kolbs entries that cycle them. See: [[Skills]].

**Kolbs** holds individual reflection cycles linked to specific skills. Each entry logs: the skill it belongs to, session duration, marginal gains identified, experiments to run next, and links to the previous and next Kolbs in the chain. A Kolbs entry is completed when the reflection section is full and the next experiments are named. See: [[Kolbs]].

**Goal Tracking** is the weekly evaluation layer. This is where you rate your active processes, log 1% gains, and set marginal metrics for the coming week. It runs as a recurring weekly task. See: [[Weekly Evaluation]].

**Tasks** holds the active and recurring task list — both one-off session tasks and the three recurring cadences. See: [[Tasks]].

---

## The Core Workflow

```
Goal (anchored, dissected into skills and processes)
  → Skills: rate current vs final level, define final level metrics
  → Kolbs: run a session, complete the reflection, name next experiments
  → Weekly eval + goal tracking: rate progress, log 1% gains, set marginal metrics
  → Repeat
```

The entry point is always the goal. Without a clear goal, skills become an arbitrary list and Kolbs entries become journal entries. The dissection step — *what skills does a person who achieves this goal actually need?* — is what gives the rest of the system its direction.

---

## Marginal Metrics: The Weekly Operational Target

A **marginal metric** is a specific, trackable daily target set during the weekly evaluation. It is the operational form of a 1% gain: not a direction ("get better at BHS") but a concrete weekly commitment ("complete one BHS Aim + Shoot block — check off each day it happens").

Marginal metrics have daily checkboxes. They appear in the [[Weekly Evaluation]] and optionally in the [[templates/Kolbs Template|Kolbs Template]] for the current week. At the end of the week, the completed checkboxes feed into the next evaluation cycle.

**What makes a good marginal metric:**
- Binary — it either happened or it didn't
- Tied directly to one active process or skill
- Small enough to be achievable in a low-energy session
- Specific enough that there is no ambiguity about whether it was done

**What a marginal metric is not:** a rating, a feeling, a vague intention, or a weekly summary.

---

## Kolbs Chaining: How to Keep the Cycle Running

Each Kolbs entry links to the previous one and sets up the next. The intended sequence:

1. Complete a Kolbs session — fill in Experience, Reflection, Abstraction, Experimentation sections fully.
2. Before closing: name the specific experiments for the next cycle (Experimentation section).
3. Create the next Kolbs entry and link it back to the current one ("Previous Kolbs" field).
4. The new entry opens with the experiments from the previous one visible — those become the experience to reflect on next time.

This creates a chain: Kolbs 1 → Kolbs 2 → Kolbs 3, each carrying forward the skill link and the experiment sequence. The chain is what makes Kolbs a cycle rather than a set of disconnected journal entries.

**When to start a new chain vs continue an existing one:**
- Continue (follow-on): the new session is building on an experiment from the previous Kolbs for the same skill.
- New chain: the session is the first Kolbs for a skill, or the previous chain was completed and a new one is starting.

Use the [[templates/Kolbs Template|Kolbs Template]] for all new entries.

---

## Three Recurring Cadences

These are the system's heartbeat. Without them, the system degrades into a static snapshot.

| Cadence | Frequency | What it does |
|---------|-----------|--------------|
| **Weekly Evaluation** | Weekly | Rate active processes, log 1% gains, set marginal metrics for next week |
| **Skills Audit** | Every ~2 months | Review skill levels against final level metrics; seek external feedback on progress |
| **Priority 0 Check-in** | Every 6 months | Step back from the skills level — ask whether the current processes are still the right ones to develop. See: [[private/Goals/Priority 0\|Priority 0]] |

The weekly evaluation is the minimum viable cadence. If only one thing runs, it should be this.

---

## What This System Is Not

The original Notion template is a three-zone Command Center: Action (daily execution), Progress (goals + reflection), and Learning (SIR infrastructure, question banks, syllabus tracking). MG & Kolbs is the Progress Zone, focused on one thing: structured self-improvement through repeated reflection cycles.

It deliberately omits:

- **Daily execution infrastructure** — Eisenhower Matrix, time-blocking, @Today page. Use a separate tool for daily task management if needed.
- **Office Breaks / focus training** — not included. Manage attention separately.
- **Standalone Experiments database** — experiments live inside Kolbs entries, not as a separate database with their own workflow.
- **Learning Zone** — SIR sessions database, syllabus tracking, generated questions bank, question papers. Absent by design. SIR as a *skill* is tracked here; SIR as an *infrastructure system* is not.
- **Second Brain** — knowledge folders and document storage. Out of scope.

These are not gaps to fill. Each omitted piece adds overhead. The trade is completeness for maintainability.

---

## Setup Notes

When setting this system up from scratch:

- Start with one goal only. Attempting to dissect three goals at once produces a skills list too long to cycle through.
- Fill in final level metrics for each skill before starting Kolbs. Without them, you cannot evaluate progress — you can only note what happened.
- The weekly evaluation is the highest-leverage recurring task. Set it as a repeating calendar event before doing anything else.
- If Kolbs entries are piling up without the Experimentation section filled in, the cycle is broken. Fix that before starting new entries.
- Delete or archive any skill that is not connected to an active goal. An unanchored skill does not improve — it just sits on the list.

---

## Wiki Connections

- [[wiki/Techniques/Marginal Gains|Marginal Gains]] — the REDO loop (Reflect, Evaluate, Define, Optimise) maps directly to the Kolbs chaining mechanic. Marginal metrics are the operational form of the Define step made weekly and day-trackable.
- [[wiki/Techniques/Kolbs Experiential Cycle|Kolbs Experiential Cycle]] — the chaining mechanic enforces the cycle structurally: no new Kolbs without completing the previous one. The full vs quick Kolbs distinction maps to the new chain vs follow-on distinction here.
- [[wiki/Techniques/Spaced Interleaved Retrieval|Spaced Interleaved Retrieval]] — SIR is tracked as a skill in this system. The SIR Kolbs chain is the intended model for how any technique-based skill is developed through repeated reflection.
- [[wiki/Techniques/Bear Hunter System|Bear Hunter System]] — BHS sessions are tasks connected to the Learning Systems goal. Each session should produce a Kolbs entry.
- [[wiki/Dimensions/Self-Regulation|Self-Regulation]] — the three recurring cadences are the structural self-regulation mechanism. Without them running, the system is not a system.
- [[wiki/Syntheses/First Principles of ICS|First Principles of ICS]] — the Priority 0 check-in maps to the meta-strategy level: stepping back to ask whether the current processes are still the right ones.

---

## Open Questions

- Which of the three recurring cadences is actually running, and which exists only as a recurring task that keeps being skipped?
- Is the Goals database being used as an anchor and dissection tool, or just as a label? A goal page with no dissected processes is not functioning as a goal.
- What is the minimum viable version of the marginal metrics mechanism for daily visibility — enough to surface the active target without requiring a full planning session?
- Should Kolbs entries eventually move to a dedicated folder as the chain grows, or is the flat structure sufficient?
