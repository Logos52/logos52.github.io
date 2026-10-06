---
title: "PRD: visual aids on wiki pages"
type: prd
status: active
created: 2026-10-06
owner: Wedge
---

# PRD: visual aids on wiki pages

## What

Diagrams and small HTML displays on wiki pages, where a picture or a layout shows a mechanism better than bullets. They break the one-shape-per-page sameness of the 2026-09-27 rewrite and act as visual aids for a reader.

## Owner's words, 2026-10-06

- "i'm also interested in adding some diagrams and html displays in appropriate places to break the monotony and act as visual aids."
- "i don't care about obsidian, i prefer them to be rendered in html for the webpage, i actually haven't opened obsidian in months."
- "i prefer html artifacts and html for reading, i can edit the html using claude code or grok build if need be."

## Decisions

- The aids are inline HTML and SVG written into the page's Markdown body. Astro renders them as they are. No Mermaid, no image files, no renderer added to the build.
- The site styles them from one stylesheet, `src/styles/ds/aids.css`, using the existing paper tokens so they follow light and dark mode and the domain hues.
- Each aid is one of a small set of forms with a fixed class name, so a model or a person can write a new one by copying an existing one.
- An aid replaces the ASCII code block it stands in for. A page gets an aid only where the content already has that shape. No aid for decoration.
- Everything else about the pages stays: opening, bullets, section paragraphs, kept blocks, the frontmatter keys.

## The forms

| Form | Class | Shape it fits | Replaces |
| --- | --- | --- | --- |
| Flow | `aid aid-flow` (HTML for a chain, SVG inside `aid-figure` for a fork or a loop) | a sequence of states or steps joined by arrows | ASCII flows with arrows |
| Ladder | `aid aid-ladder` (HTML) | an ordered set of levels or stages, bottom to top or first to last | ASCII ladders and numbered lists of stages |
| Compare | `aid aid-compare` (HTML) | two to four things set side by side, each with a few lines | ASCII side-by-side drawings and small tables |
| Before and after | `aid aid-pair` (HTML) | one thing in two states | ASCII before/after pairs |
| Figure | `aid aid-figure` (SVG) | a drawing that fits none of the above, drawn to the page | the rest |

Every aid carries a `<figcaption>` of one plain sentence saying what it shows. Text inside an aid uses the page's words. Lines use `currentColor` and fills use the paper tokens, so both themes read. Width is fluid to 100 percent with a max of the prose column; nothing scrolls sideways on a phone.

## Where

Of the 324 pages, 204 carry an ASCII drawing and 72 a table. The first pass goes over the 204 drawings and converts each to the form that fits, or drops it where the bullets already say it. Tables stay tables unless one is a two-to-four-thing comparison that reads better as cards. The 83 pages with neither get an aid only if a later read finds a mechanism that wants one.

## Order

1. Wire the site: `aids.css`, imported once from `Base.astro`. Three sample pages, one each of flow, ladder and compare: Context Engineering, Four Stages of Competence, Per Capita.
2. Visual check at phone (390 wide) and laptop (1280 wide) widths in both themes, screenshots read, no sideways scroll, no console errors. The owner looks and picks the forms he keeps.
3. The batch pass over the remaining drawings, in folder batches, by a model given this file and one finished sample of each form. Each batch gets the same visual check.

## Rules carried over

The writing rules in `HANDOFF-web-outline-regen-2026-09-24.md` sections 3 and 4 apply to any words inside an aid. Kept blocks stay byte for byte. The kept-check script still passes on every page touched.
