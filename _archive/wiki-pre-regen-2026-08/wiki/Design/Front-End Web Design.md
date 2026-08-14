---
type: synthesis
status: developing
created: 2026-06-30
updated: 2026-06-30
source-count: 1
description: "The Design of Everyday Things mapped onto web UI: a screen owns no physical affordances, so the front-end supplies every signifier and the rendered surface is the whole system image — worked through the tsumugu reader (Silk-Seam) and dictionary (Paper & Ink)."
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

A screen owns no physical affordances, so a front-end developer must deliberately supply every perceptible cue, and the rendered DOM is the entire system image — the only channel through which the design speaks. [[wiki/Concepts/Design of Everyday Things|Norman's principles]] predate the web and govern it exactly: every interface is a field of affordances, signifiers, mappings, and feedback, and the difference between a surface that explains itself and one that traps the user is whether those cues were supplied on purpose. The [[projects/tsumugu-ed|tsumugu]] reader and dictionary run as the worked examples throughout, surfaces where the cost of each choice is already paid in a concrete decision.

## Signifiers are the front-end's main job

Everything on a screen is technically clickable, which means a thing looks interactive only if it is *styled* to. The signifier is carried entirely by appearance and behavior: shape, elevation, an underline, the cursor change, the hover and focus and active states. A button has to look pressable; a link has to look like a link; an inert label has to look inert. The flat-design trap is the digital version of the prize-winning post-office door with no visible hardware — strip the cues for the sake of a clean look and you ship an invisible affordance. The reliable test: any control that needs a tooltip to be understood is the hand-lettered "PUSH" sign taped to a badly designed door, and the fix is the signifier, not the tooltip.

In tsumugu's reader, word-learning status lives in a reserved underline channel (clay-new solid, amber-learning dotted, a scarce violet wash for lesson targets, plain for known) rather than recoloring the reading glyph, so the reading face stays calm while the signal stays legible; a legend maps each mark — knowledge in the world for a vocabulary the reader has not yet internalized (`mockups/site/reader.html`). Violet is held as a single reserved accent — brand, the cognate bridge, and the known-confirm — so color never overloads into meaning two things at once.

## Feedback and visible system status

Acknowledge every action within about 100 ms, the threshold below which a response feels instant; optimistic UI, spinners, skeletons, and progress bars all exist to close [[wiki/Concepts/Design of Everyday Things|the Gulf of Evaluation]]. Long operations get progress and an honest ETA. When acknowledgment lags, guard against the user jabbing the control again — debounce, disable on submit, make the operation idempotent — because the jabbed elevator button is a web double-submit. Notifications get prioritized so the one alert that matters is not muted along with the noise, which is the alarm-cacophony failure ported to a notification center.

tsumugu's dictionary search renders instantly from client-side shards and logs to the console whenever a query crosses 150 ms, treating its own latency as a measured defect; it shows honest empty and unavailable states ("no match yet — coverage grows level by level") instead of a blank panel, and a tapped word opens its gloss popover immediately so the action is confirmed (`exports/site/assets/search.js`).

## Trace a broken flow through the seven stages

Any stuck flow can be run against [[wiki/Concepts/Design of Everyday Things|the seven stages of action]] to find the stage that breaks. A user who cannot find how to start is stuck in execution: close that gulf with discoverable actions, a clear primary call-to-action, signified controls, and sensible defaults (feedforward). A user who acted but cannot tell what happened is stuck in evaluation: close that gulf with visible status, confirmation, and results. Pair the two on every interaction — a control that signifies how to use it and then reports what it did.

tsumugu's reader externalizes due/known/coverage state into a right rail and a Continue strip (where you left off, percent known, minutes left, a Resume button), so the prose column stays uncluttered while the system's state stays visible (`mockups/site/library.html`).

## Recognition over recall

Working memory holds three to five items and is erased by a single interruption, so the interface should show the options instead of demanding the user remember them: visible menus, autocomplete, recent and saved lists, breadcrumb context. Never let entered data — a confirmation code, a half-typed form, a search query — vanish at the moment it is needed; persist it across navigation and across a failed submit. Chunk long values and split long forms so no single step exceeds the limit. This is [[wiki/Concepts/Cognitive Load & What Mental Effort Is Trying to Cue|the working-memory constraint]] turned into a layout rule.

tsumugu's library makes readiness legible *before* the reader opens anything — each card carries a coverage-percent meter, an in-range/stretch tag, estimated minutes, and a new-word count — and the lesson-viewer heat-map colors each character by how many of three articles use it, externalizing exposure count so nobody has to track it in their head.

## Constraints and forcing functions

Narrow the action space so the wrong move is hard or impossible: disable or hide invalid options, mask inputs to the legal shape, and order a wizard so only the next valid step is reachable. Gate submit on validity; prompt on unsaved changes; and for destructive actions use a real forcing function — a confirm, or type-to-confirm for the destructive one. Keep the friction *local* to the single risky step, because a forcing function annoying enough to be worked around gets worked around and then it is worse than useless.

tsumugu uses a quiet forcing function in its palette switcher: selecting a dark-native palette auto-flips the theme to dark and a paper palette flips it back, so a paper-on-dark combination that would render illegibly can never be produced (`mockups/site/_shell.html`).

## Design for error, and keep the surface calm

Assume error and make it cheap. Prefer undo and soft-delete over a confirm dialog the user learns to dismiss reflexively — undo is the strongest tool Norman names. Sensibility-check input that is orders of magnitude off rather than meekly accepting it, and treat what the user types as an approximation to help toward the intended result. Differentiate destructive controls in label, color, shape, and position; never ship a row of identical critical buttons, which manufactures description-similarity slips. When data is missing, surface the missing data instead of a silent fallback that hides the state.

tsumugu shows a missing Vietnamese gloss on a character entry as an explicit `.vi-leak` marker rather than silently substituting English, making the gap visible to the maintainer who has to fill it (`exports/site/assets/site.css`).

## The conceptual model and audience rails

UI, microcopy, empty states, and onboarding are the only channel to the user's mental model, so they carry the whole burden of communication; when a "cloud" or "synced" model silently breaks, surface the offline, syncing, and error states or the model becomes the false two-dial refrigerator. A two-layer token architecture — raw palette variables that a semantic layer points at, both driven by one attribute on the root element — gives the whole UI a single canonical state source, so chrome cannot drift between surfaces. tsumugu-core builds exactly this: raw palette vars swap per `[data-palette]` and `[data-theme]`, semantic `--tsg-*` names reference them, and every page is assembled from one shared shell so the chrome is byte-identical everywhere (`mockups/site/_shell.html`).

tsumugu treats audience as an axis of the same surface rather than a separate site: an EN英 ⇄ VI越 rail swaps one stream's gloss and recolors the ruby, and on the Vietnamese rail it surfaces the cognate bridge — the shared morpheme of a word the learner already says — while the English rail swaps in a phonetic-series note. The conceptual model adapts to who is reading, and the new word is anchored to morphemes the learner already owns.

## Progressive disclosure and cognitive load

Depth hidden behind a clear trigger keeps the default surface calm while the detail stays one interaction away. Reveal mechanism and memory aid side by side rather than dumping everything at once; prefer the native `<details>` element where you can, since it carries no JavaScript state to get stuck in. Cognitive-load management is the strongest through-line in both tsumugu projects: the sound-component "drift" line collapses a phonology micro-lesson into one plain sentence with a `<details>` expansion into the named sound-family and a say-it cue; the `設⚙` gear hides four toggle axes behind one control; the FORM and STORY cards split a character's mechanism from its mnemonic; and glossed words show nothing on hover, revealing the popup only while Shift is held, so the reader gets a retrieval rep before the answer appears while the content itself always renders complete (`DECISIONS.md`, `exports/drift-redesign-mockup.html`).

## Standardization and resisting featuritis

When no better solution exists, adopt the convention people already learned — cart top-right, a gear for settings, underlined links, the platform's date and number formats — because a per-screen reinvented pattern is the arbitrary-stove-knob failure in software. Features only accrete, so budget for deprecation, audit usage, and remove dead UI before it becomes the 29-piece Lego set; resist matching a competitor feature-for-feature, which converges every product toward sameness. On a redesign, preserve the familiar patterns and shortcuts and give a migration path, because legacy habit beats a technically superior layout that demands relearning, the way QWERTY beats Dvorak. tsumugu enforces this against itself: FORM leads every dictionary entry sitewide with no per-entry override, and only first-language translations are gated — a deliberate constraint against per-entry drift.

## Accessibility is inclusive design

What gets built for a special need helps everyone: large high-contrast type, full keyboard paths, semantic markup, captions, and visible focus states are good design for every user under load, in sunlight, or in a hurry. Make the accessible path the mainstream experience rather than a stigmatizing bolt-on mode, and provide flexibility — adjustable font size, density, theme, and reading direction — because there is no average user. tsumugu's toggle layer (gloss, reading, script, theme, writing direction) is this flexibility made concrete, each axis a single persisted attribute with pre-baked sibling spans shown by CSS alone, working offline with no re-render.

## The case against — where this tensions tsumugu

The principles are not free, and tsumugu's own choices show where they pull against each other:

- **Guess-first hides a signifier on purpose.** Hover shows nothing; Shift-peek reveals. This is defensible as Norman's "deliberately difficult" design in service of a retrieval rep, but to a user who never discovers the Shift gesture it reads as a Norman door, and there is no keyboard-tab or visible-cue equivalent — touch only gets tap. The principle (discoverability) and the pedagogy (desirable difficulty) conflict here, and the resolution is to add a discoverable affordance for the peek without removing the guess-first default.
- **Emoji as the only label is a missing signifier.** `🔊` `☀` `☾` carry no text for a screen reader or a low-vision user; every emoji control needs a paired text label or `aria-label`.
- **Two design systems is a standardization cost.** Silk-Seam in the reader and Paper & Ink in the dictionary mean a user crossing reader↔dictionary meets two chromes (reserved-violet vs seal-vermillion, Newsreader vs Songti). Intentional per-project, and a real cross-surface consistency tax by Norman's learn-once principle.
- **Honesty behaves differently across entry types.** Character entries surface a missing Vietnamese gloss; word entries silently fall back to English. The per-type choice is intentional, but a user crossing types meets two failure behaviors, so the rule belongs in the documented conceptual model.

## Price the method

Signifier discipline costs visual restraint — you cannot strip every cue for a minimalist look. Human-centered testing costs the time of watching real users between iterations. Progressive disclosure costs the user finding the trigger, and a hidden affordance only pays when the surface it calms is worth more than the discovery it risks. Forcing functions cost friction at the protected step, which has to stay tolerable. A token architecture costs the up-front design of two layers before the first screen ships.

## Quit signals

Stop adding usability machinery when it stops changing behavior. If two rounds of testing a flow change nothing a user does, the problem is elsewhere — look at the conceptual model or the offering, not the controls. If a guess-first or progressive-disclosure pattern depresses task completion, the difficulty stopped being desirable; add the signifier back. If a forcing function is being routed around, it is too heavy — lighten it or move it.

## Checkable expectations

A finished surface should pass these, each verifiable without asking what was meant:

- Every action is reachable and operable by keyboard alone, with a visible focus state.
- No primary action depends on a tooltip to be discovered.
- Every action returns perceptible feedback within ~100 ms.
- Every destructive action is reversible (undo) or guarded by a forcing function, and is visually distinct from its neighbors.
- Entered data survives navigation and a failed submit.
- Each interactive element looks interactive; each inert element looks inert.

## Related Pages

- [[wiki/Concepts/Design of Everyday Things|Design of Everyday Things]] — the principles applied here.
- [[wiki/Design/Design, Condensed|Design, Condensed]] — the same doctrine compressed to one rule per line.
- [[wiki/Concepts/Cognitive Load & What Mental Effort Is Trying to Cue|Cognitive Load]] — the working-memory limits behind recognition-over-recall.
- [[wiki/Concepts/The Screen Inferiority Effect|The Screen Inferiority Effect]] — why a reading surface earns extra design care.
- [[projects/tsumugu-ed|tsumugu-ed]] — the dictionary surface in the worked examples.

## Sources

- Don Norman, *The Design of Everyday Things*, revised and expanded edition (Basic Books, 2013).
- tsumugu-core front-end: `mockups/site/_shell.html`, `reader.html`, `library.html`, `lesson-viewer.html` (Silk-Seam reader and Reading Wall).
- tsumugu-ed front-end: `exports/site/assets/site.css`, `site.js`, `search.js`, `c/投.html`, `DECISIONS.md`, `drift-redesign-mockup.html` (Paper & Ink dictionary).

## Open Questions

- Whether the guess-first peek can gain a discoverable, keyboard-reachable affordance without losing the retrieval-rep default.
- Whether a shared token vocabulary could reconcile Silk-Seam and Paper & Ink across reader and dictionary without flattening the two product identities.
