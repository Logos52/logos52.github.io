---
title: "MG & Kolbs"
type: project
status: parked
stack:
  - Obsidian
  - Bases
  - Templater
order: 3
blurb: "A learning-system template with Kolb's reflective cycles, skill tracking, and goal anchoring, rebuilt in Obsidian from Pan's Notion original. Vault path: mg-kolbs/."
created: 2026-06-02
updated: 2026-09-13
method: plain-register-2026-09-13
prose-model: opus
tags:
  - projects
---

## What it is

MG & Kolbs is a learning-system template based on **Kolb's reflective cycles**, **skill-level tracking**, **goal anchoring**, and task management with deliberate break timing. You run short reflective cycles, track the skills you develop in each cycle, and link the work to your goals. It is adapted to Obsidian from Pan's Notion original ([@pan.ps](https://panstemplates.notion.site/)). All credit for the underlying method goes to Pan. There is a [live demo on this site](../mg-kolbs-template).

**Vault folder (canonical):** `mg-kolbs/` (lowercase). The temporary dual root folder `MG & Kolbs/` was archived on 2026-07-09 to `_archive/MG-Kolbs-template-2026-06-01/`.

## How it's built

The original has these databases: Tasks, Kolbs, Skills, Goals, and Goal-tracking. Each one is an Obsidian **Base** (`.base`), with one markdown note per row and wikilinks between related notes. In Obsidian, graph view and backlinks let you move between connected skills, cycles, and goals. The template has two tiers on purpose. **Tier 1** runs fully without any AI, using plugins and small scripts. **Tier 2** optionally adds AI suggestions to the same triggers.

## What worked

Porting the Notion system to Obsidian Bases kept the workflow the same and added features Notion doesn't have: local markdown, version control, and graph navigation. The template was designed to work with no AI first, and AI was added afterward as an optional part. Anyone can use it, and it still works without the AI suggestions when the model is off.

## Lessons

- **Port the workflow instead of the screen layouts.** What worked was reproducing the *system* on Obsidian's primitives: cycles, skills, goals, and break timing. Graph view and backlinks, which the original couldn't offer, were then added to it.
- **Make AI optional, so the template does not depend on it.** Tier 1 was built to work on its own, so the method works without a model. AI only adds suggestions.

## Status

**Paused as daily workflow** (2026-07-09). The system stays at the vault root in `mg-kolbs/` because the method is still useful. Tsumugu is the active project instead. The showcase page is still public and uses illustrative data. To reopen it, use Command Center / `mg-kolbs/index.md`.

<!-- Design notes (TODO, Wedge): how it looks and why it's built this way. -->

