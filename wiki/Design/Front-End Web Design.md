---
title: "Front-End Web Design"
type: synthesis
status: developing
created: 2026-06-30
updated: 2026-09-11
method: plain-rewrite-2026-09-11
prose-model: fable
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

A web page has no physical hardware. Every cue the person can perceive has to be placed there on purpose. The rendered page is the whole **system image**. It is the only channel through which the design reaches the person. When those cues are supplied, the surface explains itself. When they are missing, the person cannot work out what to do.

[[wiki/Concepts/Design of Everyday Things|Norman's principles]] were written before the web and still govern it, as long as the older physical examples are carried over with care. Screens have *perceived* affordances: a beveled control looks pressable. Screens lack physical hardware. Every interface is a field of affordances, signifiers, mappings, feedback, and constraints. The worked examples throughout are the [[projects/tsumugu-ed|tsumugu]] reader (Silk-Seam) and dictionary (Paper & Ink).

## Core takeaways

- On a web page, appearance carries the cue. A control looks interactive only if it is styled to look interactive. A button has to look pressable, a link has to look like a link, and an inert label has to look inert.
- Every action is acknowledged within about 100 ms. Below that threshold a response feels instant. Spinners, skeletons, progress bars, and optimistic UI close the gap between doing something and knowing what happened.
- Working memory holds three to five items, and a single interruption erases it. The interface shows options instead of asking the person to remember them. Entered data survives navigation and a failed submit.
- Destructive actions get undo, or a forcing function such as a confirm. The friction stays at that one step. A forcing function annoying enough to be worked around gets worked around.
- Depth is hidden behind a clear trigger. The default surface stays plain and the detail stays one interaction away.
- Every cue on the surface has a cost. In tsumugu the costs are a hidden peek, an unlabeled emoji, two design systems, and two honesty behaviors.

## How a control shows what it does

On a web page, appearance carries the cue, not physics. Not every pixel has a handler. Anything that looks inert can still be wired to one. So a thing looks interactive only if it is styled to look interactive. The signifier lives in shape, elevation, an underline, a cursor change, and the hover, focus, and active states.

**A button has to look pressable. A link has to look like a link. An inert label has to look inert.** In a dense UI, not every link needs color. Primary navigation still does. Flat design that removes these cues fails the same way as the prize-winning post-office door with no visible hardware: the person cannot tell where to act.

**A control that needs a tooltip to be understood is missing its signifier.** The tooltip is the same repair as a hand-lettered PUSH sign taped to a badly designed door. The fix is the signifier, not the tooltip. A sign does not correct a missing cue.

## How Silk-Seam marks word status

**tsumugu** is the language-learning project: a reader and a dictionary. **Silk-Seam** is the reader's visual system. Word-learning status is shown in a reserved underline channel. The reading glyph itself is not recolored:

```text
clay-new, solid
amber-learning, dotted
lesson target, a scarce violet wash
known, plain
```

A legend maps each mark. The legend is knowledge in the world for a vocabulary the reader has not yet internalized. Violet is held as a single reserved accent. It is used for three things: brand, the **cognate bridge** (the shared morpheme on the Vietnamese rail), and the known-confirm. A color never means two things at once. The reading text keeps its plain appearance, and the marks stay readable.

## How the page reports what happened

Every action is acknowledged within about **100 ms**. Below that threshold a response feels instant. Optimistic UI, spinners, skeletons, and progress bars exist to close the [[wiki/Concepts/Design of Everyday Things|Gulf of Evaluation]], the gap between doing something and knowing what happened. Long operations get progress and an honest ETA. When acknowledgment lags, the control is guarded against a second press: debounce, disable-on-submit, idempotent operations. A web double-submit is the same failure as a person pressing an elevator button again because nothing confirmed the first press. Notifications are prioritized so the one alert that matters is not muted along with the noise. The case where every alert fires at the same weight and the important one is lost is the alarm-cacophony failure.

Dictionary search on [[projects/tsumugu-ed|tsumugu-ed]] renders from client-side shards. It logs to the console whenever a query takes more than **150 ms**. That logger is a stricter project budget, not a second HCI figure. The empty state shows honest copy, "no match yet: coverage grows level by level", not a blank panel. A tapped word opens its gloss popover immediately, so the action is confirmed.

## Finding the stage where a flow breaks

Any stuck flow can be run against [[wiki/Concepts/Design of Everyday Things|the seven stages of action]] to find the stage that breaks: goal, plan, specify, perform, perceive, interpret, compare. A person who cannot find how to start is stuck in execution. That gap between intending and doing is the **Gulf of Execution**. It is closed with discoverable actions, a clear primary action, signified controls, and sensible defaults (feedforward). A person who acted but cannot tell what happened is stuck in evaluation. That gulf is closed with visible status, confirmation, and results. Every interaction pairs the two: a control that signifies how to use it, then reports what it did.

The reader externalizes due, known, and coverage into a right rail and a Continue strip. The strip shows where the last session left off, percent known, minutes left, and a Resume button.

## Working memory and what the page holds for the person

Working memory holds three to five items, and a single interruption erases it. The page on [[wiki/Concepts/Cognitive Load & What Mental Effort Is Trying to Cue|the working-memory constraint]] does not itself state the three-to-five figure. The interface shows the options instead of demanding they be remembered: visible menus, autocomplete, recent and saved lists, breadcrumb context. Entered data does not vanish at the moment it is needed. It persists across navigation and across a failed submit. Long values are chunked and long forms are split so no single step exceeds the limit.

Each library card carries a coverage-percent meter, an in-range or stretch tag, estimated minutes, and a new-word count. The lesson-viewer heat map colors each character by how many of **three** articles use it. That puts the exposure count on the surface.

## Narrowing what the person can do

The action space is narrowed. Invalid options are disabled or hidden. Inputs are masked to the legal shape. A wizard exposes only the next valid step. Submit is gated on validity. Unsaved changes get a prompt. Destructive actions take a real **forcing function**, a confirm or a type-to-confirm, and the friction stays local to that one risky step. A forcing function that annoys people enough to be worked around gets worked around. After that it protects nothing and still costs friction.

The palette switcher is one such function. Selecting a dark-native palette flips the theme to dark on its own. Selecting a paper palette flips it back. A paper-on-dark combination that would render illegibly can never be produced.

## The rendered page is the only channel

Every interaction pairs a signifier with a report. The rendered DOM is the only channel. Signifier discipline costs visual restraint. The cues cannot be stripped away for a minimalist look. [[wiki/Design/Design, Condensed|Design, Condensed]] holds the same doctrine one rule per line. [[wiki/Concepts/The Screen Inferiority Effect|The Screen Inferiority Effect]] is the reason a reading surface gets extra care.

## Making errors cheap

Assume error and make it cheap. Undo and soft-delete beat a confirm dialog that the person learns to dismiss without reading. Undo is the strongest of these tools. Input that is orders of magnitude off is checked for sensibility rather than accepted as typed. What gets typed is treated as an approximation. Destructive controls are differentiated in label, color, shape, and position. A row of identical critical buttons produces description-similarity slips.

## Showing missing data

When data is missing, the gap is shown. A silent fallback would hide the state. A missing Vietnamese gloss on a character entry shows as an explicit `.vi-leak` marker rather than English substituted without a mark. Word entries still fall back to English with no mark. The two types have two failure behaviors. That is the honesty tension.

## What the person's mental model is built from

UI, microcopy, empty states, and onboarding are the only channel to the user's mental model. When a "cloud" or "synced" model breaks with no sign, the offline, syncing, and error states have to appear. Otherwise the person holds a model of the system that does not match how it works, the false two-dial refrigerator.

## The shared shell and token layer

**tsumugu-core** is the shared shell and token layer that both surfaces assemble from. The token architecture has two layers: raw palette variables, and a semantic layer that points at them. One attribute on the root drives both. This gives the whole UI a single canonical state source. Raw palette vars swap per `[data-palette]` and `[data-theme]`. Semantic `--tsg-*` names reference them. Every page assembles from one shared shell. The EN英 ⇄ VI越 rail swaps one stream's gloss and recolors the ruby. On the Vietnamese rail it surfaces the cognate bridge. On the English rail it swaps in a phonetic-series note.

## Hiding depth behind a trigger

Depth hidden behind a clear trigger keeps the default surface plain while the detail stays one interaction away. Mechanism and memory aid sit side by side instead of everything appearing at once: FORM and STORY. Native `<details>` carries no JavaScript state that can get stuck. Cognitive-load management is the strongest through-line in both projects.

There are four worked disclosures. The sound-component "drift" line expands inside `<details>`. The `設⚙` gear hides four toggle axes. FORM and STORY cards split mechanism from mnemonic. Glossed words show nothing on hover and reveal the popup only while Shift is held.

## Guess-first and Shift-peek

**Shift-peek**, or guess-first, is that last disclosure. Hover shows nothing. Holding Shift, or tapping on touch, reveals the gloss. So the reader tries to retrieve the word first. The reader gets a retrieval rep before the answer appears, and the content itself always renders complete. That is desirable difficulty applied. [[wiki/Syntheses/Learning, Condensed|Learning, Condensed]] is the pedagogy half of the same choice.

FORM leads every dictionary entry sitewide, with no per-entry override. Only first-language translations are gated.

## Using conventions people already know

When no better solution exists, the convention people already learned is adopted: cart top-right, a gear for settings, underlined links, the platform's date and number formats. A pattern reinvented on every screen fails the way an arbitrary stove-knob layout fails: the person has to work out the mapping each time. Features only accrete, so deprecation is budgeted, usage is audited, and dead UI is removed before the product carries as many parts as the 29-piece Lego set. Matching a competitor feature for feature converges every product toward sameness. On a redesign, familiar patterns and shortcuts are preserved and a migration path is given. Legacy habit beats a technically superior layout that demands relearning. QWERTY beats Dvorak on preference in the same way. That is a preference result, not a speed benchmark.

## What is built for a special need helps everyone

What gets built for a special need helps everyone: large high-contrast type, full keyboard paths, semantic markup, captions, and visible focus states. The accessible path is the mainstream experience, not a separate bolt-on mode that marks the person out. Flexibility exists because there is no average user: adjustable font size, density, theme, and reading direction. The toggle layer makes that concrete. Gloss, reading, script, theme, and writing direction are each a single persisted attribute. Sibling spans are pre-baked and shown by CSS alone. The toggles work offline with no re-render.

## What the cues cost

Guess-first hides a cue on purpose. Hover is blank, and Shift-peek is the reveal. The defense is that the difficulty buys a retrieval rep. Anyone who never finds the Shift key has no visible way to open the gloss. The keyboard offers no tab-stop and no visible hint. Touch gets a tap and nothing else. The repair is a peek that can be found without dropping the guess-first default. That repair is not built yet.

A lone pictogram as the name of a control, `🔊` `☀` `☾`, is a missing cue. Each of those needs words beside it, or an `aria-label`.

Keeping Silk-Seam and Paper & Ink as separate systems is a learn-once tax. The person learns two systems: reserved violet against seal vermillion, Newsreader against Songti. The split is intentional per project, and it is still a tax.

Character entries mark a missing Vietnamese gloss. Word entries swap in English with no mark. The two types do not handle missing data the same way.

A surface that carries every cue cannot also look spare. Watching people between iterations costs calendar time. Hiding depth behind a trigger costs the person the time spent finding the trigger. The hide is worth doing only when the plainer default is worth more than that search. A forcing function spends friction at the protected step, and that friction has to stay bearable. Two token layers have to be designed before the first screen ships.

The cues were supplied on purpose. The four tensions are the cost: a hidden peek, an unlabeled emoji, two design systems, and two honesty behaviors.

## When usability work can stop

Usability work that no longer changes what anyone does can stop. After two test rounds, a flow that still produces the same actions is not a control problem. Look at the model the surface induces, or at the offering itself. A guess-first or hidden-depth pattern that drops task completion has stopped being desirable difficulty. Put the cue back. A forcing function people walk around is too heavy. Reduce it, or move it.

## Checks a screen has to pass

| Check | Passes when |
|---|---|
| Keyboard | Every action is reachable and operable by keyboard alone, with a visible focus state. |
| Tooltip | No primary action depends on a tooltip to be discovered. |
| Feedback | Every action returns perceptible feedback within about 100 ms. |
| Destructive | Every destructive action is reversible (undo) or guarded by a forcing function, and is visually distinct from its neighbors. |
| Persistence | Entered data survives navigation and a failed submit. |
| Appearance | Each interactive element looks interactive; each inert element looks inert. |

## How to practice this

1. Run one stuck flow against the seven stages: goal, plan, specify, perform, perceive, interpret, compare. Notice which stage breaks. Cannot start means execution; cannot tell what happened means evaluation.
2. Press one control on your page and time the response. Notice whether anything perceptible comes back within about 100 ms. If the wait is longer, notice whether a second press is blocked.
3. Use one screen with the keyboard alone. Notice whether every action is reachable and whether the focused element is visible.
4. Find each control that depends on a tooltip to be understood. Notice whether its shape, underline, or cursor change carries the cue on its own. If not, the signifier is what is missing, not the tooltip.
5. Find each destructive action on a screen. Notice whether it has undo or a confirm. Notice whether it differs from its neighbors in label, color, shape, and position.
6. Enter data in a form, then navigate away and come back. Notice whether the data is still there. Do the same with a submit that fails.

## Related pages

- [[wiki/Concepts/Design of Everyday Things|Design of Everyday Things]]: the principles being mapped; applied here, not re-taught.
- [[projects/tsumugu-ed|tsumugu-ed]]: the dictionary surface in the worked examples.
- [[wiki/Concepts/Cognitive Load & What Mental Effort Is Trying to Cue|Cognitive Load]]: the related working-memory concept; that page does not itself state the 3–5 number.
- [[wiki/Design/Design, Condensed|Design, Condensed]]: the same doctrine, one rule per line.
- [[wiki/Concepts/The Screen Inferiority Effect|The Screen Inferiority Effect]]: why a reading surface earns extra design care.
- [[wiki/Syntheses/Learning, Condensed|Learning, Condensed]]: the pedagogy half of guess-first.

## Open questions

Whether guess-first can gain a keyboard-reachable affordance without losing the retrieval-rep default.

Whether a shared token vocabulary could reconcile Silk-Seam and Paper & Ink without flattening the two identities.

## Sources

Norman, *The Design of Everyday Things*, revised and expanded (Basic Books, 2013). Card, Moran & Newell, *The Psychology of Human-Computer Interaction* (1983). Cowan, "The magical number 4 in short-term memory," *Behavioral and Brain Sciences* 24(1), 2001. WCAG 2.2 Success Criteria 2.1.1 Keyboard, 2.4.7 Focus Visible, 4.1.2 Name, Role, Value, 1.1.1 Non-text Content. Bjork, desirable difficulties; Brown, Roediger & McDaniel, *Make It Stick* (2014), as the pedagogy named on the guess-first tension, not as a second design extract.
