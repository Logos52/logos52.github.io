---
title: "Agent Track — Executable UI Technique Catalog"
type: resource-catalog
status: developing
created: 2026-06-30
updated: 2026-06-30
source-count: 2
last-audited: 2026-06-30
tags:
  - design
  - agentic-engineering
  - ui
  - front-end
  - tsumugu
---

# Agent Track — Executable UI Technique Catalog

Machine-consumable design rules — the part of UI a design/coding agent can apply deterministically. Extracted per [[wiki/Design/Design Two-Track Extraction|Design Two-Track Extraction]]. Each entry is atomic and prescriptive; where applying it well still needs an eye, a **seam →** link points to the judgment half in [[wiki/Design/Human Track — Taste & Judgment Catalog|the Human Track]]. Source tags: **[RUI]** = Refactoring UI; **[UPOD]** = Universal Principles of Design.

## Systems & constraints (meta-rules)

- **Define value systems in advance, choose by elimination.** For every recurring property — font size, weight, line-height, color, margin, padding, width, height, shadow, radius, border-width, opacity — pick from a fixed set, never a limitless pool. To choose: guess, then compare the neighbors on each side; two will look obviously wrong. [RUI] *(seam → the final pick is by eye)*
- **Constrain to the one right action.** Disable/hide invalid options, mask inputs to legal shape, gate submit on validity. Stack physical/cultural/semantic/logical constraints until instructions become unnecessary. [UPOD: Constraint, Poka-Yoke]
- **Consistency has four kinds — apply all.** Aesthetic (style), functional (same control = same behavior), internal (matches rest of system), external (matches platform conventions). [UPOD: Consistency]

## Spacing & layout

- **Spacing/sizing scale is non-linear.** Base 16px (browser default, divides well); pack values tightly at the small end, widen gaps toward the large end; **no two adjacent values closer than ~25%.** Use the scale for all margin/padding/width/height. [RUI]
- **Start with too much whitespace, then remove.** Default to generous space and subtract, rather than adding the minimum to avoid looking bad. [RUI] *(seam → "enough" is judged)*
- **Don't fill the whole screen.** Give each element only the space it needs; set a `max-width` and only force shrink when viewport < max-width. Don't make something full-width just to match a sibling. [RUI]
- **Fixed widths beat fluid % when an element shouldn't scale.** Sidebars get a fixed width optimized for contents; main content flexes. Don't use percentages unless you actually want scaling. [RUI]
- **Don't size relatively across breakpoints.** Use px/rem, not em, for the type scale; large elements must shrink faster than small ones on small screens (e.g. desktop headline 45px → mobile 20–24px). [RUI]
- **Avoid ambiguous spacing: more space around a group than within it.** Form-group gap > label-to-input gap; space above a section heading > line gap. [RUI]
- **Design mobile-first on a ~400px canvas**, then expand. [RUI]
- **Alignment: put every element on a shared edge/axis.** Strong alignment reads as order; misalignment reads as error. [UPOD: Alignment]
- **Layout to the reading path.** Even-weight layouts: place primary→terminal along the Z (Gutenberg diagram); for asymmetric/visual content use reading-gravity / Rule of Thirds intersections for focal placement. [UPOD: Gutenberg Diagram, Rule of Thirds]
- **Proportion systems:** golden ratio ≈1.618, Fibonacci (1,2,3,5,8,13…), and rule-of-thirds give ready aspect/size ratios when no other constraint dictates. [UPOD: Golden Ratio, Fibonacci, Rule of Thirds] *(seam → proportion ≠ guaranteed beauty)*

## Typography (mechanical)

- **Type scale: hand-picked, non-linear, px/rem (never em).** em compounds on nesting and drops you off the scale. Modular ratios (3:4, golden) produce fractional px — round them. Representative scale (illustrative): 12, 14, 16, 18, 20, 24, 30, 36, 48, 60, 72. [RUI]
- **Line length 45–75 characters (~20–35em).** Limit paragraph width even when the surrounding content area is wider. [RUI]
- **Line-height is proportional, two ways:** wider measure → taller leading (narrow ~1.5, wide up to 2.0); larger font → shorter leading (body small = tall, large headlines ≈1.0). CJK body runs higher (~1.7). [RUI; CJK from reading list]
- **Baseline-align mixed font sizes on one line, never center.** [RUI]
- **Font weight floor 400 for UI.** 400/500 = body, 600/700 = emphasis; weights <400 only for large headings. To de-emphasize, use lighter color or smaller size, not thinner weight. [RUI]
- **Letter-spacing: leave default; two exceptions —** tighten headlines set in a body-optimized face; widen all-caps for legibility. [RUI]
- **Alignment for readability:** left-align for LTR; never center >2–3 lines; right-align numeric columns (decimal aligns); enable hyphenation whenever justifying. [RUI]
- **Links in link-dense UI don't all need color** — use weight or a darker color; ancillary links get underline/color on hover only. [RUI]
- **Font picking heuristics (mechanizable filter):** neutral sans for UI or the system font stack; on a directory, filter to 10+ styles as a quality proxy; avoid condensed faces / short x-heights for body. [RUI] *(seam → "good font" is ultimately taste)*

## Color (systematic)

- **Author in HSL, not hex/RGB.** Browsers take HSL (not HSB). Hue 0/120/240 = R/G/B; saturation 0%→grey; lightness 0/50/100 = black/pure/white. [RUI]
- **You need ~10 colors × 5–10 shades.** Greys 8–10 shades; one or two primaries 5–10 shades; semantic accents (red/yellow/green) + categorical accents, each with shades. [RUI]
- **Define shades up front, numbered 100–900** (base 500, darkest 900, lightest 100). Fill from the edges: set 900/500/100, then 700/300, then 800/600/400/200. Never generate shades with runtime `lighten()`/`darken()`. [RUI]
- **Keep saturation up at the extremes.** As lightness leaves 50%, raise saturation or shades look washed out. [RUI]
- **Shift brightness by rotating hue, ≤20–30°.** Lighten toward 60/180/300; darken toward 0/120/240 (e.g. yellow→orange as it darkens). [RUI]
- **Greys carry temperature:** tint toward blue (cool) or yellow/orange (warm); keep the tint consistent across all shades. [RUI]
- **No grey text on colored backgrounds.** Hand-pick a same-hue color and lower contrast via S/L; don't use white + opacity. [RUI]
- **Contrast minimums (WCAG): 4.5:1 normal text (<~18px), 3:1 large.** When white-on-color goes too dark and grabs focus, flip it (dark color text on light color bg). [RUI; UPOD: Accessibility]
- **Never encode meaning in color alone.** Pair with icon/text/position; for colorblind safety distinguish by light–dark contrast, not by hue. [RUI; UPOD: Accessibility]
- **Background gradients: two hues ≤30° apart**, low contrast. [RUI]

## Hierarchy & emphasis

- **Carry hierarchy with weight + color, not size alone.** Cap at 2–3 text colors (dark primary / grey secondary / lighter-grey tertiary) and 2 weights. [RUI]
- **Emphasize by de-emphasizing competitors** — soften inactive items / drop a competing background rather than pushing the focal element harder. [RUI]
- **Balance weight against contrast.** Heavy elements (solid icons, bold) get lower contrast; too-subtle thin elements (1px borders) get more weight instead of a darker color. [RUI]
- **Button hierarchy:** primary = solid high-contrast; secondary = outline / low-contrast; tertiary = link-style. Destructive ≠ automatically big-red — give it a secondary/tertiary treatment and reserve the red-bold for the confirmation step where it's primary. [RUI]
- **Labels are a last resort.** Drop the label when format/context implies the field; fold it into the value ("12 left in stock"); when needed, style it as secondary. [RUI]
- **Separate visual from document hierarchy.** Choose the semantic tag for meaning, style independently; section titles often render small or visually hidden. [RUI]
- **Highlight ≤ ~10% of the visible field**, one technique at a time (bold, color, underline, inversion); over-highlighting cancels itself. [UPOD: Highlighting]
- **Maximize signal-to-noise:** remove or mute every element not doing a job; raise the contrast of the ones that are. [UPOD: Signal-to-Noise Ratio, Horror Vacui]
- **Isolate the exception to make it pop** (one item visually unlike its neighbors draws the eye). [UPOD: von Restorff Effect]

## Depth, elevation & shadows

- **Light comes from above.** Raised = lighter top edge + small dark shadow below with slight +y offset and sharp (small blur); inset = dark inset at top + lighter bottom lip. Hand-pick the lighter color (don't overlay semi-transparent white). [RUI; UPOD: Top-Down Lighting Bias]
- **Elevation = shadow size, ~5 fixed steps.** Tight/small = barely raised (buttons); medium = dropdowns; large/blurred = modals. Pick by where the element sits on the z-axis. [RUI]
- **Two-part shadows:** large soft (direct light) + tight dark (ambient occlusion); fade the tight one as elevation rises. [RUI]
- **Flat depth without shadows:** lighter-than-bg = raised, darker = inset; or solid shadows (offset, zero blur). [RUI]
- **Overlap elements to build layers**; give overlapping images an invisible border matching the bg to prevent clashing. [RUI]

## Components, states & interaction

- **Acknowledge every action within ~100 ms** (optimistic UI, skeletons, spinners); long ops get progress + honest ETA. [RUI; UPOD: Feedback]
- **Guard against double-fire** while acknowledgment lags: debounce, disable-on-submit, idempotent ops. [RUI]
- **Shadow as interaction cue:** press = smaller/removed shadow; drag = added shadow. [RUI]
- **Forgiveness: prefer undo / soft-delete over confirm dialogs;** reserve a forcing function (confirm / type-to-confirm) for the genuinely destructive, and keep the friction local to that one step. [RUI; UPOD: Forgiveness]
- **Place frequent / important targets large or near; edges and corners are infinite-depth targets.** Make rare or dangerous targets smaller/farther. [UPOD: Fitts' Law — MT = a + b·log₂(d/s + 1)]
- **Fewer choices = faster decisions** — reduce or group options on a path to lower decision time. [UPOD: Hick's Law]
- **Chunk to working-memory limits;** Miller's classic span is 7±2 chunks, but design for the modern effective limit of ~3–5 (matches [[wiki/Concepts/Cognitive Load & What Mental Effort Is Trying to Cue|Cognitive Load]]). Split long forms/values into stages. [UPOD: Miller's Law; Performance Load]
- **Recognition over recall:** show options (menus, autocomplete, recents); persist entered data across navigation and failed submits. [UPOD: Recognition over Recall; RUI]
- **Progressive disclosure:** hide depth behind a clear trigger; prefer native `<details>` (no JS state). [UPOD: Progressive Disclosure]
- **Order by primacy/recency** — most important items first or last in a list (serial position). [UPOD: Serial Position Effects]
- **Front-load the conclusion** in text blocks (inverted pyramid: most important first). [UPOD: Inverted Pyramid]
- **Map controls to effects spatially** (control layout mirrors the thing controlled). [UPOD: Mapping]
- **Use conventional icons; pair with a text label** (similar-, example-, symbolic-, arbitrary-reference types — the more arbitrary, the more a label is required). [UPOD: Iconic Representation]
- **Make state visible / direct-manipulable (WYSIWYG)** where the user edits the rendered result, not a hidden proxy. [UPOD: WYSIWYG]
- **Empty states are first impressions:** illustration + emphasized CTA; hide tabs/filters until content exists. [RUI]
- **Fewer borders:** separate with box-shadow, a second bg color, or extra spacing before reaching for a border. [RUI]
- **Supercharge defaults:** icon bullets, promoted pull-quotes, custom link underlines, brand-colored form controls, accent borders (card top / active nav / alert side / headline underline). [RUI]

## Images & media

- **Everything has an intended size.** Don't scale tiny icons up (enclose in a shape instead); don't scale screenshots down (shoot at a smaller layout, crop partial, or redraw simplified); redraw favicons at target size. [RUI]
- **Make text-on-image contrast consistent:** semi-transparent overlay (black for light text / white for dark), or lower image contrast + rebalance brightness, or colorize (low-contrast + desaturate + multiply fill), or a text shadow used as a soft glow (large blur, no offset). [RUI]
- **Tame user-uploaded images:** fix container shape/size with `background-size: cover`; prevent bg bleed with an inner box-shadow or semi-transparent inner border (not a hard border). [RUI]

## Sources

- Wathan, A. & Schoger, S. *Refactoring UI* — `raw/sources/design/Refactoring UI.pdf`.
- Lidwell, W., Holden, K. & Butler, J. *Universal Principles of Design*, 3rd ed. (2023) — `raw/sources/design/Universal Principles of Design.pdf`. UI-scoped per the book's UI / UX / Graphic / Product Designer "most useful" lists plus core Gestalt and interaction laws.
