---
title: "Full-send WNAB design language for the public site (readability held as a constraint)"
type: decision
status: decided
created: 2026-05-30
updated: 2026-05-30
ruled-out:
  - Subtle accents only
  - Balanced intensity
  - Keeping the current flat/restrained theme
tags:
  - decisions
  - site
  - quartz
  - design
links:
  - "[[PRDs/PRD-Site-Aesthetic-Refresh]]"
---

# Full-send WNAB design language for the public site

Push WNAB's "playful but cool" language hard into the Quartz site — vivid indigo-violet/electric-blue accent, filled coloured tag pills, mono metadata labels, Space Grotesk display headings, bolder cards and chrome, and a friendlier content-focused home page. Accents and pill colours are pulled from the site's **own knowledge-graph category palette** so the look feels native rather than imported.

Chosen over *subtle* and *balanced* intensities after the readability tension was explicitly flagged: a knowledge base is reading-focused, and WNAB is a dense data app whose chrome can fight long-form text. Wedge chose full send with eyes open. The mitigation is a **hard constraint**: character is pushed into chrome/accent/headings/landing/pills, but **body copy stays calm and legible** (Lora serif body, generous line-height, low-contrast reading surface preserved). Implemented on a branch with a local preview as the review gate, so intensity can be dialled before merge. The flat/restrained status quo was ruled out as the thing being replaced.
