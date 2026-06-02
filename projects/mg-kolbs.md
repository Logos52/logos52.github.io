---
title: "MG & Kolbs"
type: project
status: current
stack:
  - Obsidian
  - Bases
  - Templater
order: 3
blurb: "A learning-system template — Kolb's reflective cycles, skill tracking, and goal anchoring — rebuilt in Obsidian from Pan's Notion original."
created: 2026-06-02
updated: 2026-06-02
tags:
  - projects
---

## What it is

MG & Kolbs is a learning-system template built around **Kolb's reflective cycles**, **skill-level tracking**, **goal anchoring**, and task management with deliberate break timing. You run short reflective cycles, track the skills each one develops, and tie the work back to goals. It is adapted to Obsidian from Pan's Notion original ([@pan.ps](https://panstemplates.notion.site/)) — all credit for the underlying method goes to Pan. There is a [live demo on this site](../mg-kolbs-template).

## How it's built

Each database in the original — Tasks, Kolbs, Skills, Goals, Goal-tracking — is an Obsidian **Base** (`.base`), one markdown note per row, related by wikilinks. Running in Obsidian adds graph view and backlinks for navigating how skills, cycles, and goals connect. It is deliberately two-tier: **Tier 1** runs fully without any AI (plugins plus small scripts), and **Tier 2** optionally layers AI suggestions onto the same triggers.

## What worked

Porting a Notion system onto Obsidian Bases kept the workflow intact while adding what Notion can't do — local markdown, version control, graph navigation. Designing it to work with zero AI first, then adding AI as an optional layer, keeps it usable for anyone and degrades gracefully when the model is off.

## Lessons

- **Port the workflow, not the screens.** The win was reproducing the *system* — cycles, skills, goals, break timing — on Obsidian's primitives, then using graph and backlinks the original couldn't offer.
- **AI as a layer, not a dependency.** Building Tier 1 to stand alone keeps the template honest: the method works without a model, and AI only sweetens it.

## Status

Current. Published as a showcase; the [live demo](../mg-kolbs-template) runs on illustrative data.

<!-- Design notes (TODO, Wedge): how it looks and why it's built this way. -->

