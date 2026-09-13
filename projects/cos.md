---
title: "cos / Cowork OS"
type: project
status: current
stack:
  - Python
  - HTML/CSS
order: 4
blurb: "A personal operating system for daily life: finances, tasks, and dates in one view. It moved from terminal apps to a static HTML dashboard that uses WNAC's design language."
created: 2026-06-02
updated: 2026-09-13
method: plain-register-2026-09-13
prose-model: opus
tags:
  - projects
---

## What it is

cos ("Cowork OS") is my personal operating system. It shows my finances, tasks, and upcoming dates in one place, so they are not spread across separate apps. Its current form is a single static, self-contained `dashboard.html`. It is generated from local data and uses the same design language as [WNAC](wnac) (WNAC dark, cos light).

## What worked

The core idea was sound. One readable page is easier to use than five separate tools. With finances, tasks, and dates in one view, I can see the state of my day with a quick look. Because I built it myself, it fits my workflow.

## What broke

cos started as a terminal app: first a Textual mission-control, then a terminal-primary rebuild. Both were retired. The terminal was a fast way to build a first version of the idea. It was not a good format for the intended form of cos, which was a Copilot-style dashboard that can be read at a glance. cos moved to HTML, and to a design language shared with WNAC, because it needed to be easy to read visually.

## Lessons

- **Choose the interface by how the tool is used.** cos is something you look at briefly throughout the day. A visual dashboard suits that use. The terminal versions made that use harder.
- **Reuse your own design language.** Moving cos and WNAC to one Copilot-derived design system (cos light, WNAC dark) means one set of design decisions applies to both projects.
- **Owning the tool has a benefit and a risk.** Because I built the tool myself, I use it, and I am also tempted to over-build it.

## Status

Current, and in the middle of a redesign. The terminal versions are retired. A static HTML dashboard is the current form. The visual rebuild is shared with [WNAC](wnac) and is in progress.

<!-- Design notes (TODO, Wedge): how it looks and why it's built this way. -->
