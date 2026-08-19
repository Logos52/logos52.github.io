---
title: "Agent Track — Executable UI Technique Catalog"
type: resource-catalog
status: developing
created: 2026-06-30
updated: 2026-08-14
source-count: 2
last-audited: 2026-06-30
written-by: grok
model: grok
tags:
  - design
  - agentic-engineering
  - ui
  - front-end
  - tsumugu
---

# Agent Track — Executable UI Technique Catalog

The Agent Track is a list of interface rules a machine can apply without looking. Each entry is atomic and numbered. Where applying a rule well still needs an eye, a seam note marks the leftover judgment — a reminder, not a jump. The entries were sorted by [[wiki/Design/Design Two-Track Extraction|Design Two-Track Extraction]]; leftover looking lives on [[wiki/Design/Human Track — Taste & Judgment Catalog|the Human Track]].

## Systems & constraints

A **value system** is a fixed set of allowed sizes, weights, colors, or radii, chosen in advance so nothing is picked from a continuous range. [RUI]

**Value systems are defined in advance and chosen by elimination.** For every recurring property — font size, weight, line-height, color, margin, padding, width, height, shadow, radius, border-width, opacity — the pick comes from a fixed set. The method is to guess, then compare the neighbors on each side; two will look obviously wrong. *(seam → the final pick is by eye)*

**The one right action is the only action left open.** Invalid options are disabled or hidden, inputs are masked to legal shape, and submit is gated on validity. Physical, cultural, semantic, and logical constraints stack until instructions become unnecessary. [UPOD]

**Consistency has four kinds, and all four apply.** Aesthetic is style. Functional is the same control doing the same thing. Internal is a match with the rest of the system. External is a match with the platform. [UPOD]

## Spacing & layout

**The spacing and sizing scale is non-linear.** The base is 16px, because it is the browser default and it divides well. Values pack tight at the small end and widen toward the large end. No two adjacent values sit closer than about 25 percent; closer than that, they stop reading as a scale. The same scale covers margin, padding, width, and height. [RUI]

**Whitespace starts too large, then comes off.** Generous space is the default; subtraction is the edit. [RUI] *(seam → "enough" is judged)*

**The screen is not filled.** Each element gets only the space it needs. A `max-width` is set, and shrink is forced only when the viewport drops below that width. Full-width to match a sibling is not a reason. [RUI]

**Fixed widths beat fluid percentages when the element should not scale.** Sidebars take a fixed width fitted to their contents; the main column flexes. Percentages appear only when scaling is actually wanted. [RUI]

**Sizes do not travel relatively across breakpoints.** The type scale is px or rem, never em — em compounds on nesting and drops the size off the scale. Large elements shrink faster than small ones: a 45px desktop headline becomes 20–24px on mobile. [RUI]

**Spacing around a group is larger than spacing inside it.** The gap between form groups is larger than the gap from label to input. Space above a section heading is larger than the line gap. [RUI]

**The first canvas is about 400px, then it expands.** [RUI]

**Every element sits on a shared edge or axis.** Strong alignment reads as order. Misalignment reads as error. [UPOD]

**Layout can follow a reading path as an optional placement tool.** On an even-weight page, primary-to-terminal along a Z (the Gutenberg newspaper diagram) is one available order. On asymmetric visual content, reading-gravity or rule-of-thirds intersections are another. Neither is a measured law of how eyes move on screens. [UPOD]

**Proportion systems supply ready ratios when nothing else dictates a size.** Golden ratio ≈1.618, Fibonacci (1, 2, 3, 5, 8, 13…), rule of thirds. [UPOD] *(seam → proportion is not guaranteed beauty)*

## Typography

**The type scale is hand-picked, non-linear, and written in px or rem, never em.** Modular ratios produce fractional pixels; those get rounded. An illustrative scale: 12, 14, 16, 18, 20, 24, 30, 36, 48, 60, 72. [RUI]

**Line length is 45–75 characters, about 20–35em.** Paragraph width is limited even when the surrounding content area is wider. [RUI]

**Line-height is proportional in two directions.** A wider measure takes taller leading (narrow about 1.5, wide up to 2.0). A larger font takes shorter leading (body tall, headlines about 1.0). CJK body conventionally runs higher, about 1.7 — a convention, not a spec mandate. [RUI]

**Mixed font sizes on one line share a baseline. They are never centered on each other.** [RUI]

**UI weight starts at 400.** 400 and 500 are body; 600 and 700 are emphasis. Weights below 400 appear only on large headings. De-emphasis is a lighter color or a smaller size, not a thinner weight. [RUI]

**Letter-spacing stays at the default, with two exceptions.** Headlines set in a body-optimized face get tightened. All-caps get widened. [RUI]

**Alignment follows readability.** Left-align for left-to-right. Never center more than two or three lines. Right-align numeric columns so the decimals line up. Hyphenation is on whenever type is justified. [RUI]

**In a link-dense interface, not every link needs color.** Weight or a darker color can carry the set; ancillary links take underline or color on hover only. The scope is dense UI. Primary navigation still has to look like a link. [RUI]

**Font picking is a filter, not a taste law.** Neutral sans for UI, or the system font stack. On a directory, a face with ten or more styles is a quality *proxy*. Condensed faces and short x-heights stay off body text. [RUI] *(seam → "good font" is taste)*

## Color

**Color is authored in HSL, not hex or RGB.** Browsers take HSL, not HSB — a common trap. Hue 0 / 120 / 240 is red / green / blue. Saturation 0 percent is grey. Lightness 0 / 50 / 100 is black / the pure hue / white. [RUI]

**A working palette is about ten colors, each with five to ten shades.** Greys take eight to ten. One or two primaries take five to ten. Semantic accents (red, yellow, green) and categorical accents each get their own shade ramps. This is a heuristic, not a census. [RUI]

**Shades are defined up front and numbered 100–900.** Base is 500, darkest 900, lightest 100. Fill from the edges: 900 / 500 / 100, then 700 / 300, then 800 / 600 / 400 / 200. Runtime `lighten()` and `darken()` are not used. [RUI]

**Saturation stays up at the extremes.** As lightness leaves 50 percent, saturation rises, or the shades wash out. [RUI]

**Brightness shifts by rotating hue, at most 20–30 degrees.** Lighten toward 60 / 180 / 300. Darken toward 0 / 120 / 240. Yellow moves toward orange as it darkens. [RUI]

**Greys carry a temperature.** Tint toward blue (cool) or toward yellow or orange (warm), and keep that tint consistent across every shade. [RUI]

**Grey text does not sit on a colored background.** A same-hue color is hand-picked and contrast is lowered through saturation and lightness. White plus opacity is the anti-move. [RUI]

**Contrast floors are 4.5:1 for normal text under about 18px, and 3:1 for large text.** When white-on-color has gone so dark it grabs focus, the pair flips: dark-color text on a light-color ground. [RUI] [UPOD]

**Meaning is never encoded in color alone.** An icon, a word, or a position travels with it. Colorblind-safe distinction is light-versus-dark contrast, not hue. [RUI] [UPOD]

**Background gradients use two hues at most 30 degrees apart, at low contrast.** [RUI]

## What "executable" actually means here

Almost every number above already lives in a named law. A few of those numbers are tools, not measurements. The Gutenberg Z-path, the golden ratio, and a highlight of about 10 percent of the field are optional placement and emphasis tools. They are not perception facts. The one number this catalog is truer about than its source: working memory. Miller's classic span is 7±2 chunks. Design is for the modern effective limit of about **3–5**, the same limit [[wiki/Concepts/Cognitive Load & What Mental Effort Is Trying to Cue|Cognitive Load]] names. The catalog holds 66 rules. Seam notes stay reminders, not anchors into the Human Track.

## Hierarchy & emphasis

**Hierarchy is carried with weight and color, not size alone.** The cap is two or three text colors — dark primary, grey secondary, lighter-grey tertiary — and two weights. [RUI]

**Emphasis is the competitors going quiet.** Inactive items soften. A competing background drops. The focal element is not pushed harder. [RUI]

**Weight is balanced against contrast.** Heavy elements (solid icons, bold) take lower contrast. A too-subtle thin element (a 1px border) takes more weight, not a darker color. [RUI]

**Buttons have three ranks.** Primary is solid and high-contrast. Secondary is outline or low-contrast. Tertiary is link-style. Destructive is not automatically big and red; it takes secondary or tertiary treatment, and red-bold is reserved for the confirmation step where that action is primary. [RUI]

**Labels are a last resort.** The label drops when format or context already names the field. It folds into the value ("12 left in stock"). When it stays, it is styled as secondary. The accessible name can be visually folded and still present — `aria-label`, or visually hidden text. Folding is not deleting. [RUI]

**Visual hierarchy and document hierarchy are separate.** The semantic tag is chosen for meaning and styled independently. Section titles often render small, or visually hidden. [RUI]

**Highlight stays at about 10 percent of the visible field, one technique at a time** — bold, color, underline, or inversion. Over-highlighting cancels itself. The 10 percent is a heuristic, not a measured threshold. [UPOD]

**Signal rises and noise falls.** Every element not doing a job is removed or muted. Contrast rises on the ones that remain. [UPOD]

**The exception is isolated.** One item visually unlike its neighbors draws the eye. [UPOD]

## Depth

**Light comes from above.** Raised is a lighter top edge plus a small dark shadow below, with a slight +y offset and a small blur. Inset is a dark inset at the top plus a lighter bottom lip. The lighter color is hand-picked; a semi-transparent white overlay is the anti-move. [RUI] [UPOD]

**Elevation is shadow size, in about five fixed steps.** Tight and small is buttons. Medium is dropdowns. Large and blurred is modals. [RUI]

**Shadows come in two parts.** A large soft layer is the direct light. A tight dark layer is the ambient occlusion. The tight layer fades as elevation rises. [RUI]

**Flat depth does not need a blur.** Lighter-than-background reads as raised; darker reads as inset. Or a solid shadow: offset, zero blur. [RUI]

**Overlap builds layers.** Overlapping images get an invisible border matching the background, so the edges do not clash. [RUI]

## Components & states

**Every action is acknowledged within about 100 ms** — optimistic UI, skeletons, or spinners. Long operations get progress and an honest ETA. [RUI] [UPOD]

**Double-fire is guarded while that acknowledgment lags.** Debounce, disable-on-submit, idempotent operations. All three. [RUI]

**Shadow is also an interaction cue.** Press removes or shrinks the shadow. Drag adds one. [RUI]

**Forgiveness prefers undo and soft-delete over a confirm dialog.** A **forcing function** — confirm, or type-to-confirm — is reserved for the genuinely destructive step, and the friction stays local to that one step. [RUI] [UPOD]

**Frequent or important targets are large or near. Edges and corners are infinite-depth targets.** Rare or dangerous targets sit smaller and farther. Fitts: MT = a + b·log₂(d/s + 1). [UPOD]

**Fewer choices make faster decisions.** Options on a path are reduced or grouped. That is the instruction. The Hick–Hyman formula is not a UI stopwatch; the linear-in-log(n) form assumes equally probable choices. [UPOD]

**Long forms and long values split into stages.** Design for about 3–5 chunks, not 7±2. [UPOD]

**Recognition beats recall.** Options are shown — menus, autocomplete, recents. Entered data persists across navigation and across a failed submit. [UPOD] [RUI]

**Depth hides behind a clear trigger.** Native `<details>` is the tool class; it needs no JavaScript state. [UPOD]

**Order follows primacy and recency.** The most important items sit first or last. [UPOD]

**Text blocks front-load the conclusion.** Inverted pyramid: the important sentence first. [UPOD]

**Controls map spatially to their effects.** The layout of the control mirrors the thing controlled. [UPOD]

**Icons are conventional and paired with a text label.** Four types: similar-reference, example-reference, symbolic-reference, arbitrary-reference. The more arbitrary the icon, the more a label is required. The accessible name can still be visually folded, as with field labels. [UPOD]

**State is visible and directly manipulable** where the person edits the rendered result, not a hidden proxy. [UPOD]

**Empty states are first impressions.** An illustration plus an emphasized action. Tabs and filters stay hidden until content exists. [RUI]

**Borders are a last reach.** Separation tries box-shadow, then a second background color, then extra spacing, before a border. [RUI]

**Defaults get a brand pass.** Icon bullets, promoted pull-quotes, custom link underlines, brand-colored form controls, and accent borders — card top, active nav, alert side, headline underline. [RUI]

## Images

**Everything has an intended size.** Tiny icons are not scaled up; they are enclosed in a shape. Screenshots are not scaled down; they are shot at a smaller layout, cropped partial, or redrawn simplified. Favicons are redrawn at the target size. [RUI]

**Text on an image keeps contrast four ways.** A semi-transparent overlay (black under light text, white under dark). Or lower image contrast and rebalance brightness. Or colorize: low-contrast, desaturate, multiply a fill. Or a text shadow used as a soft glow — large blur, no offset. [RUI]

**User-uploaded images are tamed in the container.** `background-size: cover` fixes shape and size. Background bleed is stopped with an inner box-shadow or a semi-transparent inner border, not a hard border. [RUI]

Gutenberg, the golden ratio, and the 10 percent highlight become false laws if the "~" and the seam drop. Unscoped, the dense-UI link rule strips underlines from primary navigation. Skipped, the folded-label clause deletes accessible names. The catalog cannot produce taste.

Applying the whole set is a constraints pass, not a restyle. Time goes to defining the value systems and the 100–900 ramps up front, not to picking per screen. If two adjacent scale values sit closer than about 25 percent, or if a pass produces no seams, the catalog was used as decoration. A stranger can implement the 16px / 25 percent scale, the 45–75 measure, the 4.5:1 floor, the 100 ms acknowledgment, and the 3–5 chunk split from the numbers on this page, with neither book open.

The ruleset stands without the books. Leftover looking is the other catalog.

## Related

- [[wiki/Design/Design Two-Track Extraction|Design Two-Track Extraction]] — the classification test that produced this catalog.
- [[wiki/Design/Human Track — Taste & Judgment Catalog|the Human Track]] — the judgment half of every seam.
- [[wiki/Concepts/Cognitive Load & What Mental Effort Is Trying to Cue|Cognitive Load]] — the 3–5 working-memory limit behind the Miller correction.

## Open Questions

Whether CJK body leading of about 1.7 becomes a spec extract, or stays a convention until a CJK typography page exists.

Whether seam notes become jump anchors once the Human Track has stable headings.

## Sources

Wathan & Schoger, *Refactoring UI* (2018). Lidwell, Holden & Butler, *Universal Principles of Design*, 3rd ed. (2023). WCAG 2.2 Success Criteria 1.4.3 Contrast (Minimum) and 1.4.1 Use of Color. Card, Moran & Newell, *The Psychology of Human-Computer Interaction* (1983). Cowan, "The magical number 4 in short-term memory," *Behavioral and Brain Sciences* 24(1), 2001.
