---
title: "Pan's MG & Kolbs Template"
type: project
status: past
stack:
  - Obsidian
  - Bases
  - Git submodule
order: 6
blurb: "A faithful standalone Obsidian rebuild of Pan's Notion learning template. Archived once the system was folded natively into the vault."
created: 2026-06-02
updated: 2026-06-02
tags:
  - projects
---

## What it is

Pan's MG & Kolbs Template was a faithful, standalone Obsidian rebuild of Pan's Notion learning-system template ([@pan.ps](https://panstemplates.notion.site/)) — a fan reimplementation for people who would rather run the system in Obsidian than Notion. It reproduced the original's five linked databases on Obsidian Bases, structure for structure, and shipped as its own repo wired into the vault as a git submodule.

## What worked

The port itself was sound. The Notion workflow translated cleanly onto Bases, markdown, and version control, and it kept credit to the original method throughout. It proved the system was worth running locally.

## What broke

Carrying it as a separate submodule was more machinery than it earned. A faithful 1:1 mirror, maintained alongside the vault, added git-submodule friction and a second thing to keep in sync — for a system I mostly wanted to *use* inside my own vault.

## Lessons

- **Integrate the thing you use; archive the mirror.** The system became more useful folded directly into the working vault as [mg-kolbs](mg-kolbs), where it shares graph, backlinks, and daily context. The standalone copy was overhead.
- **A submodule is a commitment.** A separate repo with submodule wiring earns its keep for shared, reused code, and becomes a tax for a personal template that wants to live where you work.

## Status

Archived. The standalone repo is preserved (GitHub intact, credit to Pan kept); its living successor is [mg-kolbs](mg-kolbs). The June dual root `MG & Kolbs/` was later archived to `_archive/MG-Kolbs-template-2026-06-01/`.

<!-- Design notes (TODO, Wedge): how it looks and why it's built this way. -->

