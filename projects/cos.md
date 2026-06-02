---
title: "cos / Cowork OS"
type: project
status: current
stack:
  - Python
  - HTML/CSS
order: 4
blurb: "A personal operating system for daily life — finances, tasks, and dates on one surface. Pivoted from terminal apps to a static HTML dashboard, sharing WNAC's design language."
created: 2026-06-02
updated: 2026-06-02
tags:
  - projects
---

## What it is

cos ("Cowork OS") is my personal operating system: one place to see the things that run a day — finances, tasks, upcoming dates — without scattering them across separate apps. Its current form is a single static, self-contained `dashboard.html`, generated from local data and built on the same design language as [WNAC](wnac) (WNAC dark, cos light).

## What worked

The core idea held up. A single legible surface beats juggling five tools, and pulling finances, tasks, and dates into one view makes the day's state readable at a glance. Building it myself means it fits my workflow.

## What broke

cos started in the terminal — a Textual mission-control, then a terminal-primary rebuild. Both were retired. The terminal was a fast way to scaffold the idea and a poor home for what cos actually wanted to be: a glanceable, Copilot-style dashboard. That pull toward visual legibility is what moved it to HTML and onto a shared design language with WNAC.

## Lessons

- **Let the surface follow the job.** cos is something you glance at through the day; a visual dashboard fits that, and a terminal fought it.
- **Reuse your own design language.** Converging cos and WNAC on one Copilot-derived system (cos light, WNAC dark) means one set of design decisions serves both projects.
- **Ownership is the motivation and the trap.** Building my own tool is what makes me use it, and what tempts me to over-build.

## Status

Current, mid-redesign. The terminal versions are retired; a static HTML dashboard is the living form, and the visual rebuild — shared with [WNAC](wnac) — is in progress.

<!-- Design notes (TODO, Wedge): how it looks and why it's built this way. -->

