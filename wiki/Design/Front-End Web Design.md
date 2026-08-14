---
title: "Front-End Web Design"
type: synthesis
status: developing
created: 2026-06-30
updated: 2026-08-14
source-count: 1
description: "A web page has no physical hardware, so every cue is placed on purpose, and the rendered surface is the whole system image."
written-by: grok
model: grok
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

A web page has no physical hardware, so every perceptible cue has to be placed on purpose. The rendered page is the whole **system image**, the only channel the design gets to speak through. Whether the surface explains itself or traps the person using it is whether those cues were supplied.

[[wiki/Concepts/Design of Everyday Things|Norman's principles]] predate the web and still govern it, once the old overload is held carefully. Screens have *perceived* affordances — a beveled control looks pressable — and they lack physical hardware. Every interface is a field of affordances, signifiers, mappings, and feedback. Constraints arrive later. The worked examples throughout are the [[projects/tsumugu-ed|tsumugu]] reader (Silk-Seam) and dictionary (Paper & Ink).

## Signifiers, then feedback

Appearance, not physics, carries the cue. Not every pixel has a handler, but anything that *looks* inert can still be wired, so a thing looks interactive only if it is styled to. The signifier lives in shape, elevation, an underline, the cursor change, and the hover, focus, and active states.

**A button has to look pressable. A link has to look like a link. An inert label has to look inert.** In a dense UI, not every link needs color; primary navigation still does. The flat-design trap is the digital version of the prize-winning post-office door with no visible hardware.

**A control that needs a tooltip to be understood is the hand-lettered PUSH sign taped to a badly designed door.** The fix is the signifier, not the tooltip. Signs do not correct a missing cue.

**tsumugu** is the language-learning project: a reader and a dictionary. **Silk-Seam** is the reader's visual system. Word-learning status lives in a reserved underline channel rather than recoloring the reading glyph:

```text
clay-new, solid
amber-learning, dotted
lesson target, a scarce violet wash
known, plain
```

A legend maps each mark — knowledge in the world for a vocabulary the reader has not yet internalized. Violet is held as a single reserved accent: brand, the **cognate bridge** (the shared morpheme on the Vietnamese rail), and the known-confirm. Color never overloads into meaning two things at once. The reading face stays calm while the signal stays legible.

Every action is acknowledged within about **100 ms**, the threshold below which a response feels instant. Optimistic UI, spinners, skeletons, and progress bars exist to close the [[wiki/Concepts/Design of Everyday Things|Gulf of Evaluation]] — the gap between doing something and knowing what happened. Long operations get progress and an honest ETA. When acknowledgment lags, the control is guarded against a second jab: debounce, disable-on-submit, idempotent operations. The jabbed elevator button is a web double-submit. Notifications are prioritized so the one alert that matters is not muted along with the noise — the alarm-cacophony failure.

Dictionary search on [[projects/tsumugu-ed|tsumugu-ed]] renders from client-side shards and logs to the console whenever a query crosses **150 ms**. That logger is a stricter project budget, not a second HCI figure. The empty state is honest copy — "no match yet — coverage grows level by level" — not a blank panel. A tapped word opens its gloss popover immediately, so the action is confirmed.

## Stages, memory, constraints

Any stuck flow can be run against [[wiki/Concepts/Design of Everyday Things|the seven stages of action]] to find the stage that breaks: goal, plan, specify, perform, perceive, interpret, compare. Cannot find how to start is stuck in execution — the **Gulf of Execution**, the gap between intending and doing. Close it with discoverable actions, a clear primary action, signified controls, and sensible defaults (feedforward). Acted but cannot tell what happened is stuck in evaluation. Close that gulf with visible status, confirmation, and results. Pair the two on every interaction: a control that signifies how to use it, then reports what it did.

The reader externalizes due, known, and coverage into a right rail and a Continue strip: where the last session left off, percent known, minutes left, a Resume button.

Working memory holds three to five items and is erased by a single interruption. That number lives with the mapping, not as a claim [[wiki/Concepts/Cognitive Load & What Mental Effort Is Trying to Cue|the working-memory constraint]] page itself states. The interface shows the options instead of demanding they be remembered: visible menus, autocomplete, recent and saved lists, breadcrumb context. Entered data does not vanish at the moment it is needed; it persists across navigation and across a failed submit. Long values are chunked and long forms are split so no single step exceeds the limit.

Each library card carries a coverage-percent meter, an in-range or stretch tag, estimated minutes, and a new-word count. The lesson-viewer heat-map colors each character by how many of **three** articles use it, externalizing exposure count.

The action space is narrowed: invalid options are disabled or hidden, inputs are masked to the legal shape, a wizard exposes only the next valid step. Submit is gated on validity. Unsaved changes get a prompt. Destructive actions take a real **forcing function** — a confirm, or type-to-confirm — and the friction stays local to that one risky step. A forcing function annoying enough to be worked around gets worked around, and then it is worse than useless.

The palette switcher is one such function. Selecting a dark-native palette auto-flips the theme to dark; a paper palette flips it back. A paper-on-dark combination that would render illegibly can never be produced.

## The system image at full magnification

Every interaction pairs a signifier with a report. The rendered DOM is the only channel. Signifier discipline costs visual restraint: every cue cannot be stripped for a minimalist look. [[wiki/Design/Design, Condensed|Design, Condensed]] holds the same doctrine one rule per line. [[wiki/Concepts/The Screen Inferiority Effect|The Screen Inferiority Effect]] is why a reading surface earns extra care.

## Error, model, disclosure, convention

Assume error and make it cheap. Undo and soft-delete beat a confirm dialog the person learns to dismiss reflexively. Undo is the strongest tool the mapping names. Input that is orders of magnitude off is sensibility-checked rather than meekly accepted; what gets typed is treated as an approximation. Destructive controls are differentiated in label, color, shape, and position. A row of identical critical buttons manufactures description-similarity slips.

When data is missing, the missing data is surfaced instead of a silent fallback that hides the state. A missing Vietnamese gloss on a character entry shows as an explicit `.vi-leak` marker rather than silently substituting English. Word entries still fall back to English without a mark. Two failure behaviors across types — the honesty tension, not a later confession.

UI, microcopy, empty states, and onboarding are the only channel to the user's mental model. When a "cloud" or "synced" model silently breaks, the offline, syncing, and error states have to appear, or the model becomes the false two-dial refrigerator.

**tsumugu-core** is the shared shell and token layer both surfaces assemble from. A two-layer token architecture — raw palette variables that a semantic layer points at, both driven by one attribute on the root — gives the whole UI a single canonical state source. Raw palette vars swap per `[data-palette]` and `[data-theme]`. Semantic `--tsg-*` names reference them. Every page assembles from one shared shell. The EN英 ⇄ VI越 rail swaps one stream's gloss and recolors the ruby. On the Vietnamese rail it surfaces the cognate bridge; the English rail swaps in a phonetic-series note.

Depth hidden behind a clear trigger keeps the default surface calm while the detail stays one interaction away. Mechanism and memory aid sit side by side rather than dumping everything at once — FORM and STORY. Native `<details>` carries no JavaScript state to get stuck in. Cognitive-load management is the strongest through-line in both projects.

Four worked disclosures. The sound-component "drift" line expands inside `<details>`. The `設⚙` gear hides four toggle axes. FORM and STORY cards split mechanism from mnemonic. Glossed words show nothing on hover and reveal the popup only while Shift is held.

**Shift-peek**, or guess-first, is that last one: hover shows nothing; holding Shift — or tapping, on touch — reveals the gloss, so the reader tries to retrieve the word first. The reader gets a retrieval rep before the answer appears, while the content itself always renders complete. That is desirable difficulty applied. [[wiki/Syntheses/Learning, Condensed|Learning, Condensed]] is the pedagogy half of the same choice.

When no better solution exists, the convention people already learned is adopted: cart top-right, a gear for settings, underlined links, the platform's date and number formats. A per-screen reinvented pattern is the arbitrary-stove-knob failure in software. Features only accrete, so deprecation is budgeted, usage is audited, and dead UI is removed before it becomes the 29-piece Lego set. Matching a competitor feature-for-feature converges every product toward sameness. On a redesign, familiar patterns and shortcuts are preserved and a migration path is given, because legacy habit beats a technically superior layout that demands relearning — the way QWERTY beats Dvorak on preference, not as a speed benchmark.

FORM leads every dictionary entry sitewide, with no per-entry override. Only first-language translations are gated.

What gets built for a special need helps everyone: large high-contrast type, full keyboard paths, semantic markup, captions, and visible focus states. The accessible path is the mainstream experience, not a stigmatizing bolt-on mode. Flexibility — adjustable font size, density, theme, and reading direction — exists because there is no average user. The toggle layer makes that concrete: gloss, reading, script, theme, writing direction, each a single persisted attribute with pre-baked sibling spans shown by CSS alone, working offline with no re-render.

## What the cues cost

Guess-first conceals a cue on purpose: hover is blank, Shift-peek is the reveal. The defense is difficulty in service of a retrieval rep. Anyone who never finds the Shift key meets a door with no hardware, and the keyboard never offers a tab-stop or a visible hint — touch gets a tap and nothing else. The repair is a peek that can be found without dropping the guess-first default. That repair is not on the surface yet.

A lone pictogram as the name of a control — `🔊` `☀` `☾` — is a missing cue. Each of those needs words beside it, or an `aria-label`.

Keeping Silk-Seam and Paper & Ink as separate systems is a learn-once tax: reserved-violet against seal-vermillion, Newsreader against Songti. The split is intentional per project, and it is still a tax.

Character entries mark a missing Vietnamese gloss. Word entries swap in English with no mark. The two types do not tell the same honesty story.

Putting every cue on the surface costs the right to look spare. Watching people between iterations costs calendar time. Hiding depth behind a trigger costs the moment of finding it; the hide is worth doing only when the calmer default outweighs that search. A forcing function spends friction at the protected step, and that friction has to remain bearable. Two token layers have to be designed before the first screen ships.

Usability machinery that no longer changes what anyone does can stop. After two test rounds, a flow that still produces the same actions is not a control problem — look at the model the surface induces, or at the offering itself. A guess-first or hidden-depth pattern that drops task completion has left desirable difficulty; put the cue back. A forcing function people walk around is overweight: reduce it, or relocate it.

| Check | Passes when |
|---|---|
| Keyboard | Every action is reachable and operable by keyboard alone, with a visible focus state. |
| Tooltip | No primary action depends on a tooltip to be discovered. |
| Feedback | Every action returns perceptible feedback within about 100 ms. |
| Destructive | Every destructive action is reversible (undo) or guarded by a forcing function, and is visually distinct from its neighbors. |
| Persistence | Entered data survives navigation and a failed submit. |
| Appearance | Each interactive element looks interactive; each inert element looks inert. |

The cues were supplied on purpose. The four tensions — a hidden peek, an unlabeled emoji, two design systems, two honesty behaviors — are what that costs.

## Related

- [[wiki/Concepts/Design of Everyday Things|Design of Everyday Things]] — the principles being mapped; applied here, not re-taught.
- [[projects/tsumugu-ed|tsumugu-ed]] — the dictionary surface in the worked examples.
- [[wiki/Concepts/Cognitive Load & What Mental Effort Is Trying to Cue|Cognitive Load]] — the related working-memory concept; that page does not itself state the 3–5 number.
- [[wiki/Design/Design, Condensed|Design, Condensed]] — the same doctrine, one rule per line.
- [[wiki/Concepts/The Screen Inferiority Effect|The Screen Inferiority Effect]] — why a reading surface earns extra design care.
- [[wiki/Syntheses/Learning, Condensed|Learning, Condensed]] — the pedagogy half of guess-first.

## Open Questions

Whether guess-first can gain a keyboard-reachable affordance without losing the retrieval-rep default.

Whether a shared token vocabulary could reconcile Silk-Seam and Paper & Ink without flattening the two identities.

## Sources

Norman, *The Design of Everyday Things*, revised and expanded (Basic Books, 2013). Card, Moran & Newell, *The Psychology of Human-Computer Interaction* (1983). Cowan, "The magical number 4 in short-term memory," *Behavioral and Brain Sciences* 24(1), 2001. WCAG 2.2 Success Criteria 2.1.1 Keyboard, 2.4.7 Focus Visible, 4.1.2 Name, Role, Value, 1.1.1 Non-text Content. Bjork, desirable difficulties; Brown, Roediger & McDaniel, *Make It Stick* (2014), as the pedagogy named on the guess-first tension, not as a second design extract.
