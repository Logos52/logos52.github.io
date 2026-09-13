---
title: "Agent Track — Executable UI Technique Catalog"
type: resource-catalog
status: developing
created: 2026-06-30
updated: 2026-09-13
method: plain-register-2026-09-13
prose-model: opus
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

The Agent Track is a list of interface rules that a machine can apply without a person judging the result by eye. Each entry is atomic and numbered. Where applying a rule well still requires a person to look at the result, a seam note marks the part that needs judgment. A seam note is a reminder and is not a link. The entries were sorted by [[wiki/Design/Design Two-Track Extraction|Design Two-Track Extraction]]. The judgments that still require looking are listed on [[wiki/Design/Human Track — Taste & Judgment Catalog|the Human Track]].

## Systems & constraints

A **value system** is a fixed set of allowed sizes, weights, colors, or radii, chosen in advance so nothing is picked from a continuous range. [RUI]

**Value systems are defined in advance, and values are chosen from them by elimination.** Every recurring property takes its value from a fixed set. The recurring properties are font size, weight, line-height, color, margin, padding, width, height, shadow, radius, border-width, and opacity. The method is to guess a value, then compare it with the neighboring value on each side; two of the three values will look obviously wrong. *(seam → a person makes the final choice by looking)*

**Only the correct action is available.** Invalid options are disabled or hidden, input masks restrict entries to a valid format, and the submit control works only when the input is valid. Physical, cultural, semantic, and logical constraints are combined until the interface needs no instructions. [UPOD]

**There are four kinds of consistency, and the interface follows all four.** Aesthetic consistency is consistency of style. Functional consistency means the same control does the same thing. Internal consistency means matching the rest of the system. External consistency means matching the platform. [UPOD]

## Spacing & layout

**The spacing and sizing scale is non-linear.** The base is 16px, because it is the browser default and it divides evenly. The steps between values are small at the small end of the scale and larger at the large end. No two adjacent values differ by less than about 25 percent; adjacent values that differ by less than that do not look like separate steps of a scale. The same scale is used for margin, padding, width, and height. [RUI]

**Whitespace is set too large at first and then reduced.** Space is set generously by default, and the editing step removes space. [RUI] *(seam → deciding what is "enough" is a visual judgment)*

**Elements are not stretched to fill the screen.** Each element gets only the space it needs. A `max-width` is set, and the element is made to shrink only when the viewport is narrower than that width. Matching the width of a sibling element is not a reason to make an element full-width. [RUI]

**Fixed widths are used instead of fluid percentage widths when the element should not scale.** A sidebar gets a fixed width that fits its contents, and the main column changes width. Percentage widths are used only when the element should scale. [RUI]

**Sizes do not scale by a common proportion across breakpoints.** The type scale is written in px or rem, never em. Em values multiply when elements are nested, which produces sizes that are not on the scale. Large elements shrink more than small ones: a 45px desktop headline becomes 20–24px on mobile. [RUI]

**Spacing around a group is larger than spacing inside it.** The gap between form groups is larger than the gap from a label to its input. The space above a section heading is larger than the gap between lines. [RUI]

**Design starts on a canvas about 400px wide, and the canvas is widened after that.** [RUI]

**Every element is aligned to an edge or axis shared with other elements.** When elements are clearly aligned, the layout looks organized. A misaligned element looks like a mistake. [UPOD]

**A reading path is an optional tool for placing elements.** On a page where elements have even visual weight, one available order runs from the primary element to the terminal element along a Z shape (the Gutenberg newspaper diagram). For asymmetric visual content, another available order uses reading gravity or the intersections of the rule of thirds. Neither order is a law measured from how eyes move on screens. [UPOD]

**When no other constraint sets a size, a proportion system provides ratios to use.** Proportion systems include the golden ratio (≈1.618), the Fibonacci sequence (1, 2, 3, 5, 8, 13…), and the rule of thirds. [UPOD] *(seam → using a proportion system does not guarantee that the result looks good)*

## Typography

**The type scale is hand-picked, non-linear, and written in px or rem, never em.** Modular ratios produce fractional pixel values, which are rounded. An example scale: 12, 14, 16, 18, 20, 24, 30, 36, 48, 60, 72. [RUI]

**Line length is 45–75 characters, about 20–35em.** Paragraph width is limited even when the surrounding content area is wider. [RUI]

**Line-height is set in proportion to both line length and font size.** Longer lines get taller line-height (about 1.5 for narrow text, up to 2.0 for wide text). Larger fonts get shorter line-height (tall for body text, about 1.0 for headlines). CJK body text is conventionally set higher, at about 1.7. This is a convention, and no spec requires it. [RUI]

**When different font sizes appear on one line, they are aligned to a shared baseline and are never vertically centered on each other.** [RUI]

**Font weights in UI text start at 400.** Weights 400 and 500 are for body text, and weights 600 and 700 are for emphasis. Weights below 400 are used only on large headings. Text is de-emphasized with a lighter color or a smaller size, and not with a thinner weight. [RUI]

**Letter-spacing is left at the default, with two exceptions.** Headlines set in a typeface designed for body text get tighter letter-spacing. Text in all capitals gets wider letter-spacing. [RUI]

**Text alignment is chosen for readability.** Left-to-right text is left-aligned. No more than two or three lines are centered. Numeric columns are right-aligned so the decimal points line up. Hyphenation is turned on whenever text is justified. [RUI]

**In an interface with many links, not every link needs color.** A heavier weight or a darker color can mark the links, and ancillary links show an underline or color only on hover. This rule applies only to dense UI. Primary navigation still has to look like links. [RUI]

**Font choice uses filters, and the filters are not rules of taste.** Use a neutral sans-serif for UI, or the system font stack. On a font directory, a typeface with ten or more styles is a *proxy* for quality. Condensed typefaces and typefaces with short x-heights are not used for body text. [RUI] *(seam → whether a font is a "good font" is a matter of taste)*

## Color

**Colors are written in HSL instead of hex or RGB.** Browsers accept HSL but not HSB, and confusing the two is a common mistake. Hue 0 / 120 / 240 is red / green / blue. Saturation 0 percent is grey. Lightness 0 / 50 / 100 is black / the pure hue / white. [RUI]

**A working palette has about ten colors, each with five to ten shades.** Greys get eight to ten shades. One or two primary colors get five to ten shades. Semantic accent colors (red, yellow, green) and categorical accent colors each get their own shade ramps. These numbers are a heuristic and are not a measured count. [RUI]

**Shades are defined in advance and numbered 100–900.** The base shade is 500, the darkest is 900, and the lightest is 100. The shades are defined in this order: 900 / 500 / 100 first, then 700 / 300, then 800 / 600 / 400 / 200. Runtime `lighten()` and `darken()` are not used. [RUI]

**Saturation is kept high for the lightest and darkest shades.** As lightness moves away from 50 percent, saturation is increased; otherwise the shades look faded. [RUI]

**Brightness is changed by rotating the hue, by at most 20–30 degrees.** To lighten a color, its hue is rotated toward 60 / 180 / 300. To darken a color, its hue is rotated toward 0 / 120 / 240. A darker yellow has its hue rotated toward orange. [RUI]

**Greys are tinted to be cool or warm.** A grey is tinted toward blue to make it cool, or toward yellow or orange to make it warm. The same tint is used across every shade. [RUI]

**Grey text is not used on a colored background.** The text color is hand-picked in the same hue as the background, and its contrast is lowered by adjusting saturation and lightness. White with lowered opacity is not used. [RUI]

**The minimum contrast ratio is 4.5:1 for normal text under about 18px and 3:1 for large text.** When a colored background has become so dark for white text that it draws attention, the colors are reversed: dark colored text on a light colored background. [RUI] [UPOD]

**Meaning is never shown with color alone.** An icon, a word, or a position is used along with the color. To keep items distinguishable for colorblind people, they are separated by light-versus-dark contrast instead of by hue. [RUI] [UPOD]

**Background gradients use two hues at most 30 degrees apart, at low contrast.** [RUI]

## What "executable" actually means here

Almost every number in the Agent Track already appears in a named law. A few of those numbers were not measured. The Gutenberg Z-path, the golden ratio, and a highlight of about 10 percent of the field are optional tools for placement and emphasis. They are not facts about perception. For one number, working memory, the Agent Track uses a more accurate figure than its source does. Miller's classic span is 7±2 chunks. The Agent Track designs for the modern effective limit of about **3–5** chunks, which is the same limit given on [[wiki/Concepts/Cognitive Load & What Mental Effort Is Trying to Cue|Cognitive Load]]. The catalog holds 66 rules. Seam notes remain reminders and do not link to anchors on the Human Track.

## Hierarchy & emphasis

**Visual hierarchy is created with font weight and color, and not with size alone.** The limit is two or three text colors and two weights. The text colors are dark for primary text, grey for secondary text, and lighter grey for tertiary text. [RUI]

**Emphasis is created by making competing elements less prominent.** Inactive items are made less prominent. A background that draws attention away from the focal element is toned down. The focal element itself is not made more prominent. [RUI]

**Visual weight and contrast are adjusted together.** Heavy elements (solid icons, bold text) get lower contrast. A thin element that is too subtle (a 1px border) gets more weight instead of a darker color. [RUI]

**Buttons have three levels.** A primary button is solid and high-contrast. A secondary button is outlined or low-contrast. A tertiary button is styled like a link. A destructive action does not automatically get a big red button. It gets secondary or tertiary styling, and the bold red style is used only in the confirmation step, where the destructive action is the primary action. [RUI]

**Visible labels are used only when nothing else identifies the field.** The label is removed when the format or the context already identifies the field. The label can also be combined with the value ("12 left in stock"). When a label is kept, it is styled as secondary text. A label can be removed from view while its accessible name is still present, through `aria-label` or visually hidden text. Removing a label from view is different from deleting its accessible name. [RUI]

**Visual hierarchy and document hierarchy are separate.** The semantic tag is chosen for its meaning, and its styling is set separately. Section titles are often displayed small or visually hidden. [RUI]

**Highlighting is kept to about 10 percent of the visible field and uses one technique at a time:** bold, color, underline, or inversion. When too much is highlighted, nothing stands out. The 10 percent figure is a heuristic and not a measured threshold. [UPOD]

**The proportion of useful elements to unneeded elements is raised.** Every element that does no job is removed or muted. The elements that remain get higher contrast. [UPOD]

**An item meant to stand out is made visually different from the items around it.** A single item that looks different from the items next to it attracts attention. [UPOD]

## Depth

**Light is assumed to come from above.** A raised element has a lighter top edge and a small dark shadow below it, with a slight +y offset and a small blur. An inset element has a dark inset shadow at the top and a lighter bottom edge. The lighter color is hand-picked, and a semi-transparent white overlay is not used. [RUI] [UPOD]

**Elevation is shown by shadow size, in about five fixed steps.** Buttons get a tight, small shadow. Dropdowns get a medium shadow. Modals get a large, blurred shadow. [RUI]

**A shadow is made of two layers.** A large, soft layer represents the direct light. A tight, dark layer represents the ambient occlusion. The tight layer becomes fainter as elevation increases. [RUI]

**Depth in a flat design can be shown without blur.** An element lighter than the background looks raised, and an element darker than the background looks inset. Another method is a solid shadow with an offset and zero blur. [RUI]

**Overlapping elements create the look of layers.** Overlapping images get a border in the background color, which makes the border invisible, so that the image edges do not clash. [RUI]

## Components & states

**Every action is acknowledged within about 100 ms**, using optimistic UI, skeletons, or spinners. Long operations show progress and an accurate ETA. [RUI] [UPOD]

**An action is prevented from firing twice while the acknowledgment is delayed.** The three guards are debounce, disable-on-submit, and idempotent operations. All three are used. [RUI]

**Shadow also signals interaction.** Pressing an element removes or shrinks its shadow. Dragging an element adds a shadow. [RUI]

**To let people recover from mistakes, undo and soft-delete are preferred over a confirm dialog.** A **forcing function**, a confirm step or type-to-confirm, is used only for a step that is actually destructive, and the extra effort applies only to that one step. [RUI] [UPOD]

**Frequently used or important targets are large or close. Screen edges and corners are targets of infinite depth.** Rarely used or dangerous targets are smaller and farther away. Fitts: MT = a + b·log₂(d/s + 1). [UPOD]

**Decisions are faster when there are fewer choices.** The options along a path are reduced in number or grouped. Reducing or grouping options is the rule to apply. The Hick–Hyman formula does not measure decision times in a UI, because its linear-in-log(n) form assumes that all choices are equally probable. [UPOD]

**Long forms and long values are split into stages.** Design for about 3–5 chunks instead of 7±2. [UPOD]

**Recognition is preferred over recall.** Options are shown through menus, autocomplete, and recent items. Entered data is kept across navigation and after a failed submit. [UPOD] [RUI]

**Additional detail is hidden behind a clearly marked control that reveals it.** The native `<details>` element is this kind of tool, and it needs no JavaScript state. [UPOD]

**Order is set by primacy and recency.** The most important items are placed first or last. [UPOD]

**A block of text states its conclusion first.** This is the inverted pyramid: the important sentence comes first. [UPOD]

**The arrangement of controls corresponds to the arrangement of what they affect.** The layout of the control matches the layout of the thing it controls. [UPOD]

**Icons are conventional and paired with a text label.** Icons come in four types: similar-reference, example-reference, symbolic-reference, arbitrary-reference. The need for a label increases with how arbitrary the icon is. The accessible name can still be hidden visually, as with field labels. [UPOD]

**State is visible and can be changed directly** where the person edits the rendered result itself and not a hidden proxy. [UPOD]

**Empty states are designed as a first impression.** An empty state has an illustration and an emphasized action. Tabs and filters are hidden until there is content. [RUI]

**A border is the last method tried for separating elements.** To separate elements, try a box-shadow first, then a second background color, then extra spacing, and only then a border. [RUI]

**Default styles are restyled to match the brand.** The restyled elements are icon bullets, promoted pull-quotes, custom link underlines, brand-colored form controls, and accent borders. Accent borders go on a card top, the active nav item, an alert side, and a headline underline. [RUI]

## Images

**Every image has an intended size.** Tiny icons are not scaled up; they are placed inside a shape. Screenshots are not scaled down. They are taken of a smaller layout, cropped to show part of the screen, or redrawn in simplified form. Favicons are redrawn at the target size. [RUI]

**There are four ways to keep contrast for text on an image.** The first is a semi-transparent overlay (black under light text, white under dark text). The second is lowering the image contrast and adjusting the brightness. The third is colorizing the image: lower its contrast, desaturate it, and multiply a fill color over it. The fourth is a text shadow used as a soft glow, with a large blur and no offset. [RUI]

**User-uploaded images are controlled by their container.** `background-size: cover` sets a fixed shape and size. Background bleed is prevented with an inner box-shadow or a semi-transparent inner border instead of a hard border. [RUI]

If the "~" and the seam note are removed, the Gutenberg Z-path, the golden ratio, and the 10 percent highlight are stated as laws, and those statements are false. If the dense-UI link rule is applied without its scope, it removes underlines from primary navigation. If the folded-label clause is skipped, applying the rules deletes accessible names. Applying the catalog does not produce taste.

Applying the full set of rules is a constraints pass, which is a different task from a restyle. The time is spent defining the value systems and the 100–900 ramps in advance, and values are not picked separately for each screen. If two adjacent scale values are less than about 25 percent apart, or if a pass produces no seam notes, the catalog was not actually applied. A person new to this material can implement the 16px / 25 percent scale, the 45–75 character measure, the 4.5:1 contrast minimum, the 100 ms acknowledgment, and the 3–5 chunk split from the numbers in the Agent Track, without opening either source book.

The rules can be used without the books. The judgments that still require looking are in the other catalog, the Human Track.

## Related

- [[wiki/Design/Design Two-Track Extraction|Design Two-Track Extraction]]: the classification test that produced this catalog.
- [[wiki/Design/Human Track — Taste & Judgment Catalog|the Human Track]]: the catalog of the judgment part of every seam note.
- [[wiki/Concepts/Cognitive Load & What Mental Effort Is Trying to Cue|Cognitive Load]]: the 3–5 working-memory limit used to correct Miller's 7±2 span.

## Open Questions

Whether the CJK body leading of about 1.7 becomes a rule extracted from a spec, or stays a convention until a CJK typography page exists.

Whether seam notes become jump anchors once the Human Track has stable headings.

## Sources

Wathan & Schoger, *Refactoring UI* (2018). Lidwell, Holden & Butler, *Universal Principles of Design*, 3rd ed. (2023). WCAG 2.2 Success Criteria 1.4.3 Contrast (Minimum) and 1.4.1 Use of Color. Card, Moran & Newell, *The Psychology of Human-Computer Interaction* (1983). Cowan, "The magical number 4 in short-term memory," *Behavioral and Brain Sciences* 24(1), 2001.
