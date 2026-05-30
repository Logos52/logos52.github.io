---
title: "Site Aesthetic Refresh — WNAB design language for the Quartz site"
description: "Full-send visual refresh of the public Quartz site: friendlier content-focused home, characterful typography, vivid cool palette, and pill/mono component language borrowed from WNAB and the site's own knowledge-graph colors."
type: prd
status: done
created: 2026-05-30
updated: 2026-05-30
tags:
  - prd
  - site
  - quartz
  - design
links:
  - "[[about]]"
  - "[[index]]"
---

# Site Aesthetic Refresh

> Implemented on branch `redesign/wnab-aesthetic`. **The design evolved substantially during the build** — the sections below record the original direction; the **Implementation (final state)** section at the bottom and [[decisions/2026-05-30-site-full-send-wnab-aesthetic]] describe what actually shipped.

## Problem

The published site (`logos52.github.io`, Quartz v4) reads as flat and a little boring. The home page dropped its short intro and now opens straight into the "what's on your mind" search + Current Focus, with no friendly orientation. Wedge wants to carry the **"playful but cool"** atmosphere from **WNAB** (his Actual Budget fork) into the knowledge base, and to experiment with layout, fonts, and colour.

## Success criteria

1. **Home page orients the reader.** A short, friendly "what this is" intro sits above Current Focus on the landing page.
2. **Typography has more character** while long-form body copy stays highly readable (serif body preserved).
3. **Palette feels vivid and cool**, not flat — and, crucially, the body text remains comfortable for long reading (hard constraint, even at "full send").
4. **Component language borrows from WNAB:** filled rounded **tag pills**, **mono** treatment for metadata/labels (the "vault aesthetic"), bolder cards with motion on hover, more characterful site chrome.
5. **Coherence:** accents and tag-pill colours echo the site's own **knowledge-graph category palette** (already defined in `quartz.layout.ts`), so the redesign feels native, not bolted on.
6. **Reversible & reviewable:** all work on a branch; site builds cleanly (`npm run build`); Wedge reviews the rendered preview before merge.

## Scope

**In:** `index.md` (home intro), `quartz.config.ts` (fonts + colours), `quartz/styles/custom.scss` (pills, mono metadata, hero, cards, chrome), light `quartz.layout.ts` touch only if needed. Both light and dark modes.

**Out:** content rewrites beyond the home intro; new Quartz components requiring TSX (this round is config + SCSS); per-note layout overhauls; anything outside the public site.

## Design direction (full send, craft-preserved)

- **Decision intensity = full send**, chosen by Wedge after the readability tension was flagged. Character is pushed hard into *chrome, accent, headings, landing, and pills*; **body copy legibility is held as a hard constraint** (Lora serif body, generous line-height, calm contrast retained).
- **Accent (cool + playful):** primary shifts from muted teal-blue (`#3a6080`) to a **vivid indigo-violet** with an electric-blue secondary — pulled from the existing graph palette (`#00a7ff`, `#b968ff`).
- **Tag pills:** filled, rounded, coloured — the WNAB "colored pill" language — tinted by category to match graph colours where practical.
- **Mono metadata:** JetBrains Mono for dates, reading time, breadcrumbs, tag labels (the WNAB "mono labels/numbers, vault aesthetic").
- **Header font:** swap Geist → **Space Grotesk** for a playful-but-cool display voice; body stays **Lora**; code stays **JetBrains Mono**.
- **Cards/chrome:** stronger card treatment + hover lift, a characterful header underline/accent, livelier landing.

## Plan

1. Branch `redesign/wnab-aesthetic` off current state (commit only design files; leave Wedge's pending wnab changes untouched).
2. Home intro in `index.md`.
3. Fonts + colours in `quartz.config.ts`.
4. Pills / mono / hero / cards / chrome in `custom.scss`.
5. `npm run build` to verify clean compile.
6. Present diff + `npm run serve` preview path; Wedge reviews rendered site, dials intensity, then merges.

## Open questions

- Exact accent hue — ship a first vivid indigo-violet; Wedge tunes in preview.
- Per-category pill colours: base implementation tints common categories; full coverage can extend later.
- Whether to later convert Current Focus into the existing `.home-card` grid (deferred; low risk to leave as list this round).

---

## Implementation (final state)

What shipped differs from the initial "vivid indigo-violet / Space Grotesk" direction above — it landed calmer and more cohesive after iterating in live preview.

**Typography.** All **Lora** (headings, body, and chrome) for one cohesive serif voice — every sans display face tried against Lora (Space Grotesk, Nunito, Inter, Fraunces+Literata) read as uneven. **JetBrains Mono** for metadata/labels. Character comes from colour and layout, not the typeface.

**Colour.** Jewel-tone family: muted **amethyst** primary (`#734bb2` light / `#c0a7ee` dark) leading, with a quieter **jewel-teal** companion (`#1f9e86` / `#88c4b7`) for gradient/secondary accents only. Body text darkened for presence; light-mode tints and gradients kept restrained.

**Home page = `quartz/components/HomeLanding.tsx`** (registered in `components/index.ts`, wired for the `index` slug in `quartz.layout.ts`; `index.md` body emptied). Sections, each in its own subtle panel:
- Hero (gradient title + trimmed blurb).
- Row: **Recently updated** (live, newest 5 across wiki/journal/blog, with an "All notes →" link) beside a thinned, category-clustered **Knowledge Graph** panel.
- **Start here** — three hand-picked notes (matched by title) as one-line `title — blurb`.
- **Browse by topic** — three grouped columns (Frameworks / Practice / Reference) with **Tabler icons** (webfont added in `Head.tsx`) + live per-folder counts.

**Graph script (`graph.inline.ts`) additions:** opacity scales with node connectivity; layout pre-settles instantly (no entrance wobble); new `pinnedSlugs` (force-keep specific notes) and `clusterForce` (per-category lobes) options. Home panel uses ~26 nodes ranked by degree + pinned Start-here/recent notes; the Index page keeps the full-density graph as its centrepiece.

**Other:** active-section highlight in `SiteNav.tsx`; About page wrapped in a matching panel; colored tag-pill language + mono metadata retained from the original direction.

**Dependencies added:** Tabler icons webfont (CDN, in `Head.tsx`).

**Resolved open questions:** accent = amethyst+jewel-teal (not indigo-violet); home is a component (not the `.home-card` markdown grid); per-category colours handled in both the topic columns and a distinct home-graph palette.

