---
title: "Front-End Web Design"
type: practice
status: stable
description: "A web page has no physical hardware, so every cue is deliberate and the rendered DOM is the whole system image. This page maps Norman's interaction principles onto front-end work, tsumugu patterns, screen checks, and a seven-step loop for designing screens with bots."
created: 2026-06-30
updated: 2026-11-21
source-count: 7
tags:
  - design
  - front-end
  - web
  - ui
  - ux
  - human-centered-design
  - tsumugu
---

# Front-End Web Design

A web page has no physical hardware. Every affordance the user perceives must be styled on purpose, and the rendered page is the entire system image, the only channel through which the design reaches the person. When signifiers, mappings, feedback, and constraints are in place, the surface explains itself. When they are missing, capable users still fail, and the fault is in the UI. [[wiki/Design/Design, Condensed|Design, Condensed]] states the underlying doctrine; this page is how to practice it on the web, including how to explore screens faster with bots without surrendering judgment. Worked examples below come from [[projects/tsumugu-ed|tsumugu]]: the reader (Silk-Seam) and dictionary (Paper & Ink).

## Signifiers on a flat surface

On the web, appearance carries the cue, not physics. Not every pixel has a handler, yet anything that looks inert may still be wired. Rule: a thing looks interactive only if it is styled to look interactive. A button should look pressable, a link like a link, an inert label like inert text. Flat trends that strip elevation, underline, and cursor change repeat the prize-winning door with no hardware.

Shape, elevation, underline, cursor, and hover, focus, and active states are the signifier toolkit. A control that needs a tooltip to be discovered has failed: the tooltip is a taped-on PUSH sign. Fix the signifier, not the help text. Primary navigation still needs clear link styling even in dense UIs where body links can stay subtle.

## Feedback and the evaluation gulf

Every action should return something perceptible within about 100 milliseconds; below that threshold, response feels instant. Spinners, skeletons, progress bars, and optimistic UI exist to close the Gulf of Evaluation, the gap between doing something and knowing what happened. Long operations need honest progress. When acknowledgment lags, guard against double submit: debounce, disable-on-submit, idempotent server handlers. A second press on an elevator call button is the same failure mode.

Prioritize notifications so one important alert is not lost in alarm cacophony. On tsumugu dictionary search, client-side shards log queries over 150 ms, a project budget stricter than the generic HCI threshold. Empty states use honest copy ("no match yet: coverage grows level by level") instead of blank panels. A tapped word opens its gloss popover immediately so the action is confirmed.

## Run stuck flows through seven stages

Any stuck flow can be walked through goal, plan, specify, perform, perceive, interpret, compare. Cannot start is execution: fix discoverable actions, a clear primary, signified controls, sensible defaults. Acted but unsure what happened is evaluation: fix visible status, confirmation, and results compared to intent. Every interaction should pair a signifier with a report.

The reader externalizes due, known, and coverage in a right rail and Continue strip: where the last session stopped, percent known, minutes left, and Resume. That strip is feedforward plus feedback in one place.

## Working memory and persistence

Assume three to five items in working memory and a single interruption that can clear it (see [[wiki/Concepts/Cognitive Load & What Mental Effort Is Trying to Cue|Cognitive Load]]). Prefer recognition: visible menus, autocomplete, recent lists, breadcrumbs. Entered data must survive navigation and failed submit. Chunk long values; split long forms so no single step exceeds the limit.

Library cards carry coverage percent, in-range or stretch tags, minutes, and new-word counts. Lesson heat maps color characters by how many of three articles use them, putting exposure counts on the surface instead of in memory.

## Constraints, forcing functions, and cheap error

Narrow the action space: disable or hide invalid options, mask inputs to legal shapes, expose one wizard step at a time, gate submit on validity, prompt on unsaved leave. Destructive work gets undo, soft delete, or a local forcing function (confirm or type-to-delete) with friction only on that step. A forcing function people route around protects nothing and still costs friction.

The palette switcher on tsumugu is a forcing function: choosing a dark-native palette forces dark theme; choosing paper forces light; a paper-on-dark illegible combination cannot be produced.

Assume error. Undo beats a confirm dialog users learn to dismiss unread. Differentiate destructive controls by label, color, shape, and position so description-similarity slips are less likely. Check absurd input for sense; treat typed values as approximations.

## Honesty, model, and missing data

UI, microcopy, empty states, and onboarding are the only channel to the user's mental model. Cloud or sync metaphors need visible offline, syncing, and error states, or the user holds a false model like the two-dial refrigerator that lies about which compartment each control affects.

When data is missing, show the gap. A missing Vietnamese gloss on a character entry uses an explicit leak marker; word entries may fall back to English with a different, documented behavior so the two types do not pretend to be the same. [[wiki/Concepts/The Screen Inferiority Effect|The Screen Inferiority Effect]] is part of why reading surfaces need extra care: the screen is already a weaker channel than paper.

## Silk-Seam and shared shell

Silk-Seam marks word-learning status in a reserved underline channel without recoloring the reading glyph: new solid, learning dotted amber, lesson target a scarce violet wash, known plain. A legend holds knowledge in the world until the vocabulary is internalized. Violet is reserved for brand, cognate bridge on the Vietnamese rail, and known-confirm, one meaning per color.

tsumugu-core supplies shared shell and tokens: raw palette variables and a semantic layer pointing at them, driven by one root attribute so theme state has a single source. Pages assemble from one shell; the EN/VI rail swaps gloss streams and ruby coloring. FORM leads dictionary entries sitewide; only first-language glosses are guess-gated.

## Progressive disclosure

Hide depth behind a clear trigger so the default stays plain. Native `<details>` avoids stuck JS state. Examples: sound-component drift lines, a gear control for four toggle axes, FORM versus STORY cards, and guess-first gloss.

Shift-peek (guess-first) shows no gloss on hover; Shift or touch-tap reveals it so the reader attempts retrieval first, a desirable difficulty aligned with Learning, Condensed. The tradeoff is cost: users who never find Shift lack a visible affordance; keyboard paths still need a repair that does not drop the default. Emoji-only controls are missing signifiers; pair pictograms with words or `aria-label`.

Toggle layers persist gloss, reading, script, theme, and direction as attributes; sibling spans pre-baked and shown by CSS alone work offline without re-render. Flexibility matters because there is no average user.

## Conventions, featuritis, and accessibility

When no better pattern exists, adopt what people already learned: cart top-right, gear for settings, underlined primary links, locale formats. Reinventing mappings per screen is arbitrary stove-knob layout. Budget deprecation and remove dead UI before the product becomes the 29-piece kit. On redesign, preserve familiar shortcuts and offer migration; legacy habit can beat a technically superior layout.

What you build for a special need often helps everyone: large type, contrast, keyboard paths, semantic markup, captions, visible focus. The accessible path should be the mainstream path, not a bolt-on mode. WCAG keyboard, focus visible, name/role/value, and non-text content criteria are the baseline checks.

## What the cues cost

Guess-first hides a cue on purpose; the defense is the retrieval rep. Separate Silk-Seam and Paper & Ink identities tax learn-once (two palettes, two type voices) by intentional project split. Honesty behaviors differ by entry type. Every cue spends visual restraint. You cannot strip signifiers for minimalism and stay usable. Forcing functions spend friction at the protected step. Two token layers must be designed before the first screen ships. Watching users between iterations spends calendar time. Hiding depth spends search time; only worth it when the plain default buys more than that search.

Usability work can stop when another round no longer changes what anyone does: then question the induced model or the offering. If guess-first drops completion, put the cue back. If a forcing function is routed around, lighten or relocate it.

## Screen checks

Before shipping, pass six checks. Keyboard alone can reach and operate every action with visible focus. No primary action depends on a tooltip to be discovered. Every action returns perceptible feedback within about 100 ms. Destructive actions are reversible or guarded, and visually distinct from neighbors. Entered data survives navigation and failed submit. Interactive elements look interactive; inert elements look inert.

## Designing a screen with bots

Bots widen exploration; they do not replace the designer's choice. The loop used on agent products such as Grok Bot and in code prototyping with agents:

1. **Cut vocabulary first.** Decide the few concepts a user must learn; hide the rest until needed. Five recurring concepts beat a sprawl of new terms.
2. **Frame each surface with questions.** Who is this, what are they doing, how much do I need to know right now, answered together for every major view.
3. **Explore widely, then pick by a stated criterion.** Generate many directions (initials, emoji, illustration styles, layout variants) and eliminate against a named standard, for example consistent construction at small size, or three levels of computer access instead of one prominent machine that turns users into supervisors.
4. **Make options real before deciding.** Live prototypes in code or design tools beat slides. None may ship as explored; the point is comparable judgment. Ask an agent for three options using real components, with screenshots or video for review (see [[wiki/Planning and Automation|Plan a piece of work with an agent]]).
5. **Tune with the real asset.** Motion and spacing adjust against the production spec or Figma source of truth, not a screenshot guess. Hand-tune timing, springs, distance, scale, and easing; give short comparative feedback ("bounce is too exaggerated").
6. **Build one, let the bot scale.** One auto-layout card or component becomes twenty variants when the bot reads real measurements through MCP instead of eyeballing.
7. **Take things away.** End on removal: did this help someone delegate, or give them one more thing to manage?

Signals: many new terms mean vocabulary was not cut; picking the first option means exploration was shallow; inconsistent spacing means the bot worked from pictures; features that add user work fail the removal test. Bots make versions; you keep the criterion and the cut.

Example prompt shape: name the screen, list required concepts and surface questions, request three live prototypes from real components and assets, capture screenshots or video for choice, and note what could be removed. Scope individual bots like job descriptions when splitting exploration, production, and motion (see [[wiki/Working with Agents/Scope a bot like a job description|Scope a bot like a job description]]).

## Related pages

- [[wiki/Design/Design, Condensed|Design, Condensed]] (principles this page applies.)
- [[projects/tsumugu-ed|tsumugu-ed]] (dictionary surface in the examples.)
- [[wiki/Concepts/Cognitive Load & What Mental Effort Is Trying to Cue|Cognitive Load]] (memory limits behind persistence and chunking.)
- [[wiki/Concepts/The Screen Inferiority Effect|The Screen Inferiority Effect]] (why reading UI needs extra discipline.)
- Learning, Condensed (pedagogy behind guess-first.)

## Open questions

Whether guess-first can gain a keyboard-reachable peek without losing the retrieval default. Whether a shared token vocabulary could reconcile Silk-Seam and Paper & Ink without flattening two identities. What post-launch metrics validated bot-assisted exploration on shipped screens (the public guides describe process, not outcomes).

## Sources

- Don Norman, *The Design of Everyday Things*, revised and expanded (Basic Books, 2013).
- Stuart Card, Thomas Moran, and Allen Newell, *The Psychology of Human-Computer Interaction* (1983).
- Nelson Cowan, "The magical number 4 in short-term memory," *Behavioral and Brain Sciences* 24(1), 2001.
- W3C, Web Content Accessibility Guidelines 2.2 (keyboard, focus visible, name/role/value, non-text content).
- Robert Bjork, desirable difficulties; Peter Brown, Henry Roediger, and Mark McDaniel, *Make It Stick* (2014).
- Grok Bot team, "Designing Grok Bot for a world of persistent agents" (x.ai essay).
- Grok Bot design guide, "Designing Grok Bot with Grok Bot" (x.ai, 2026-08-24).
- Lauren, "The Complete Guide to pstack Pt. 2" (X Article, prototyping options in code).