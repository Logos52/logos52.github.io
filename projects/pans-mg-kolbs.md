---
title: "Pan's MG & Kolbs Template"
type: project
status: past
stack:
  - Obsidian
  - Bases
  - Git submodule
order: 6
blurb: "A standalone Obsidian rebuild of Pan's Notion learning template that copied the original's structure. Archived after the system was built directly into the vault."
created: 2026-06-02
updated: 2026-09-13
method: plain-register-2026-09-13
prose-model: opus
tags:
  - projects
---

## What it is

Pan's MG & Kolbs Template was a standalone Obsidian rebuild of Pan's Notion learning-system template ([@pan.ps](https://panstemplates.notion.site/)) that copied the original closely. It was a fan reimplementation for people who would rather run the system in Obsidian than in Notion. It rebuilt the original's five linked databases in Obsidian Bases, with the same structure for each database. It was kept in its own repo and connected to the vault as a git submodule.

## What worked

The port worked. The Notion workflow moved onto Bases, markdown, and version control without problems, and the port credited the original method throughout. Using the port showed that the system was worth running locally.

## What broke

Keeping it as a separate submodule took more setup and upkeep than it was worth. A 1:1 copy maintained next to the vault meant extra git-submodule steps and a second copy to keep in sync. I mostly wanted to use the system inside my own vault.

## Lessons

- **Build the system you use into your working vault, and archive the standalone copy.** The system was more useful once it was built directly into the working vault as [mg-kolbs](mg-kolbs), where it uses the same graph, backlinks, and daily context as the rest of the vault. The standalone copy was extra maintenance.
- **A submodule needs ongoing upkeep.** A separate repo connected as a submodule is worth that upkeep for code that is shared and reused. For a personal template that belongs in the vault where you work, the upkeep is not worth it.

## Status

Archived. The standalone repo is preserved: it is still on GitHub, and it still credits Pan. The system that replaced it and is in use now is [mg-kolbs](mg-kolbs). The June dual root `MG & Kolbs/` was later archived to `_archive/MG-Kolbs-template-2026-06-01/`.

<!-- Design notes (TODO, Wedge): how it looks and why it's built this way. -->
