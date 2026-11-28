# Logos52 design language

Drawn from what is built: `index.html` (Home), `about.html` (article template), and the three index pages. Fable's Home layout is the base; type follows iA's support pages.

## Page kinds
| Kind | File | Structure |
|---|---|---|
| Home | index.html | Wordmark and intro left, "Now" rail right; three columns (Projects, Journal, Explainers); Top of mind as a full-width bulleted band |
| Article | about.html | Title, one grey summary line, optional full-width opener picture, text column with figures, right rail for page facts, captions and side notes. Template for every explainer, journal entry and project page |
| Index | explainers.html, journal.html, projects.html | Title, one grey summary line, one figure, then the listing |

Index figures: Explainers has the constellation, Journal has a month calendar in its rail, Projects has picture cards.

## Top bar
Sticky, 49px, frosted. Left: mark, "Logos52 / Page". Right: Explainers, Projects, Journal, About, search (press / to focus), menu. The menu repeats the links and ends with sun and moon icons only.

## Colour
| Token | Light | Dark |
|---|---|---|
| Ground | #f6f6f5 | #1f2021 |
| Ink | #1a1a1a | #ececea |
| Surface (menus, search, tiles) | #ffffff | #2c2d2e |
| Accent | #00c3ff | #00c3ff |
| Link | #0090cc | #4cc9f5 |
| Muted text | ink at 70% | ink at 74% |
| Faded text, labels | ink at 46% | ink at 56% |
| Rules | ink at 10 to 14% | white at 12 to 18% |
| Highlighter | #e3f7fe | accent at 24% |

Graph nodes use one lightness and chroma, hue only varies: oklch(0.66 0.13 H) with H = 235, 150, 345, 85, 290, 30, plus grey #9a9a9a.

## Type
IBM Plex Sans (variable, embedded) for text; Monaspace Neon for diagram labels only.

Sizes are iA's scale multiplied by 45/43, so Plex's lowercase stands as tall as iA Sans's. Line heights are iA's divided by the same factor.

| Role | Size | Weight | Line height |
|---|---|---|---|
| Page title, wordmark | 29.3 to 35.6px | 700 | 1.05 |
| Section head | 23.0 to 27.2px | 700 | 1.10 |
| Article body | 16.7 to 18.8px | 450 | 1.43 |
| Home intro | 16.7 to 18.2px | 450 | 1.43 |
| List title | 15.7 to 16.7px | 700 | 1.19 |
| List description, rail, bar | 15.7 to 16.7px | 450 | 1.34 to 1.39 |
| Summary line under a title | about 15px, ink at 62% | 450 | 1.5 |
| Dates, rail labels | 12.6 to 13.6px | 450 / 700 caps | 1.2 to 1.39 |

All Plex text: letter-spacing 0.034em, word-spacing 0.064em. Titles: -0.015em. Diagram text: no added spacing. Regular text is never 400; it is 450.

## Layout
- Page width 1024px, 32px side padding, 960px inner.
- 40px under the top bar; 52px between an intro block and what follows; 44px between sections.
- Home columns 17 / 15 / 24 with a 40px gap. Index listings flow in three columns of about 250px.
- Article: text column about 656px, rail 260px, 44px gap.
- Lists: a section head with a hairline under it, then rows separated by hairlines, 11px above and below each row. No cards, borders or shadows around lists.

## Pictures and figures
- Every picture comes from the content it represents.
- Diagrams sit on a dot-paper panel (16px grid of pale dots on a faint tint), labels in Monaspace Neon, ink lines 1.5px, the usual path in blue 2px, return paths dashed.
- One drawing language per figure. Hand-placed figures (Figure 1 on About) use arrows with a slight bow, about 3% of their length. Grid figures (the statechart) use straight arrows. Do not mix.
- The constellation: real pages and real links only, flat (no link steeper than 45 degrees), dot size by link count, colour by section, titles on hover, no legend.
- Journal activity: Home keeps the single row of week dots; the Journal page shows one month calendar at the top of its rail.
- Project cards follow the NDC Whiteboard pattern: one picture in its own shape, a short bold title, one line beneath. A project without a picture gets its name set large on a plain tile.
- Screenshots of money tools use demo data.
- In dark mode diagrams are inverted; photographs and engravings are left as they are.

## Copy
- Keep the owner's wording. New copy is flagged.
- Never say what is not on the site. This is the one hard rule.
- Preference: reader-facing text usually leaves out production notes (how a picture or page was made) and tooling names.
- `tools/copy-lint.mjs` holds these as patterns with an allow list.
- One short summary line under a title, grey and smaller than the body. No bullets there, no label.

## Index pages (revised)
- Each section: a head with a hairline, one list of rows beneath, and a rail note beside it (count, plus the section hub's own description where one exists).
- Figures are quiet: small, mostly grey, accent used sparingly. The Journal month calendar sits at the top of the rail and is green.
- The Explainers graph follows the old Map: pages clustered into the five domain lobes in one flat band, the domain name above each lobe, dots sized by the square root of link count, faint links capped at three per page, titles on hover.
- Chinese text is Traditional only, set in a Traditional font.

## Home page
- The layout stays: an intro band with the wordmark and intro on the left and the "Now" rail on the right, a band of three columns, then Top of mind. The intro leads. A trial with the intro in a left rail was rejected: prose does not belong in a rail.
- Nothing on Home is typed in by hand if another page holds it. Updated is the date of the newest journal entry. The Journal column shows the four newest entries and the week dots. The Explainers count is the number of pages on the Explainers page. These are marked in the markup with `data-from` and `data-count`.
- Projects lists every project, in the order of the Projects page, with no "All projects" link.
- The page count appears once, beside the Explainers heading.
- The "Now" rail holds Updated and Underway. It sits at the far right; the intro runs wide to meet it with a 48px gap.
- 84px between the intro band and the three columns.
- Project rows have the icon on the right. In dark mode the icon tiles are inverted so they are not white.
- Top of mind highlights are quieter than the highlighter elsewhere: #edf9fe in light mode, accent at 9% in dark mode.
- Journal activity is green on every page: the week dots here and the calendar on the Journal page.
- On a phone the top bar shows the brand, the search box and the menu; the section links are in the menu.

## Journal page
- A rail on the left (220px) leads; the body is on the right, with a 44px gap. The rail stays in place while the body scrolls.
- Rail: the calendar of the month in view, the year, then the months, newest first. The month in view is bold and opens into its four weeks.
- Weeks are W1 to W4 (days 1–7, 8–14, 15–21, 22 to the end of the month), always shown with their days: "W4 22–30" in the rail, "W4 · 22–30 November" as a heading.
- Newest first at every level: months, weeks within a month, and days within a week.
- A view switcher sits above the month heading. Months is the default.
  - Months: one month at a time. Month summary, then each week: its summary, the entries with the day number to their left, then AI news under a dashed line.
  - Two tracks: one month at a time. Each week shows entries on the left and AI news on the right.
  - Year: one row per month with its calendar and the first sentence of its summary. A row opens that month in Months.
  - Threads: entries grouped by subject. The rail lists the threads.
- AI news rows are fainter than entries. Each links to its source and names the source after the headline. A toggle beside the switcher hides them in Months.
- On a phone the rail becomes one wrapping row of month names above the body.
- The thread of each entry is assigned by keywords in its title for now. It should come from a tag on the entry.

## Projects page
- In use now: a standard full-width list (name left, one sentence right) under "Current" and "Archived".
- Saved for later in `projects-cards.html`: the packed-column card layout below. It waits on real pictures.
- Packed columns after the NDC Whiteboard: three columns of fixed width (two on a tablet, one on a phone), each card placed in the shortest column, the same gap under every card.
- A card is one picture in its own proportion, a bold title, and one line of description. The picture alone dims on hover.
- Every picture is a different kind of image made from its project: a set character, a small linked graph, rows, a cell grid, a screenshot, writing that appears stroke by column.
- Retired projects sit under "Archived" as outlined name tiles, quieter than the rest.

## Open items
- The article template still needs its heading levels (h2, h3) styled; About has none.
- Index rows and constellation dots do not link to article pages yet.
- Dark-mode treatment for thumbnails and photographs.

## Tsumugu Story board and binder (27 Nov 2026)
- Two tool pages hang off the Tsumugu Story project page: `project-tsumugu-story-board.html` (Lanes, Grid, Wall) and `project-tsumugu-story-binder.html` (a tree, with index cards, an outline and one reading scroll). They are full-window tools, so they do not follow the about.html article template. Each links back to the project page and to the other.
- Both are generated. One script reads the story files in tsumugu-core and writes the pages. Per the owner (27 Nov), the copies here hold Books 1 and 2. Do not hand-edit them: change the template or the story files and rebuild.
- The project page carries a small lanes figure under the heading "Story board", with two rows that open the tools.
- Books 3, 4 and 5 are on the book lists by name and question only, per the owner (27 Nov). Lessons, thirds, cards and plant links stop at the end of Book 2.
- Status words on these pages are "drafted" and "outlined".
- Copy that is mine and not the owner's: the figure caption and the two row blurbs on the project page.

## Tsumugu Core page (28 Nov 2026)
- `project-tsumugu-core.html` follows the Story page's shell: up-link, title, the opening paragraph, then the page's own parts. The owner approved a mockup first (27 Nov).
- The reader is a working copy of the one on tsumugu.cc, cut down to four lines of podcast episode 1 (rows 24 to 27 of the episode). Each line has play, a wave (click plays from that point, drag loops a part), loop, speed (1×, .9×, .85×) and 譯. Clips sit in `media/core/`.
- Every word is a button that opens a card: reading, translation, one chip per character, the 形 line of components, and a link to the entry on tsumugu-ed.com. A chip turns the card to that character, with a way back.
- Reader level (A1 to B2) tints the words above the level and prints percent known with the labels stretch, in range and outgrown at 80 and 95, as `coverage.ts` in tsumugu-core does. A reader at a level is taken to know every word the dictionary bands at that level or lower.
- The page is generated. One script cuts the lines, clips and dictionary entries from tsumugu-core, and a second builds the page. Do not hand-edit the reader: change the cut or the scripts and rebuild.
- The second sentence of the opening does not mention AI, per the owner (27 Nov).
- Foundation figure, per the owner (27 Nov): Story, Podcast and Speak sit on Core; the Encoding Dictionary is part of Core, under every word and character.
- Copy that is mine and not the owner's: the reader's caption, the three small labels inside the Core box, the headings "Foundation" and "Links", the row names Reader, Episode 1 and Code, and the label "Reader level".
- Speakers are a colour dot plus the name, because the cast colours fail contrast behind small text. The card's link is ink with an underline for the same reason.
- The Tsumugu Core card on the Tsumugu page and the three Tsumugu Core entries on Projects open this page.

## Article format (28 Nov 2026)
- `article-template.html` is now a real page, Bear Hunter System, set the way About is set. The owner approved the mock, ruled on six suggestions and said proceed on the revision (28 Nov). The placeholder page it replaces is in the canvas history.
- Per the owner: an article mixes its text with diagrams, pictures, highlighted phrases, side comments and links, as About does. A page of prose alone asks for too much focus. Statecharts are planned heavily, perhaps one a page.
- Per the owner: the sidebar on an article holds added context, which is a quick TLDR of a paragraph, context, a comment, or a figure's caption. Comments are used sparingly and attach to important paragraphs and to figures, statecharts and images. Blank sidebar beside a paragraph that needs no comment is intended. Section lists and other ways of organising belong on hub pages.
- Kind and Updated sit at the top of the sidebar. On a phone they are one line under the summary line.
- One TLDR at the top: the grey summary line. The text starts at its first real paragraph or figure. 21 of the 121 pages on main open with a summary quote; here the grey line carries it and the quote is left out.
- About's diagram style is the standard for figures (owner, 28 Nov). 31 pages on main carry 48 figures drawn in another style.
- A figure opens larger on click or tap, in the lightbox the pictures use. On a phone it opens at full size to pan and pinch. The owner turned down a second, tall drawing for phones, because each chart would be drawn twice.
- Default for comments: about one a section, on the paragraph that carries the point, plus a caption on every figure. Test: the summary line, the figures and the comments alone give the page's point.
- The page ends with Related pages, Sources and Linked from. Every link there carries its sentence.
- Mine and not the owner's on this page: the three side comments, the figure caption, the redrawn statechart (its two return paths and the hand-off come from "Running the full system"), and the four sentences under Related pages. The page's own text is as it is on main.
- h2 is styled on this page, which covers part of the first open item above. h3 is not styled yet; 21 of the 121 pages use it.
- Not decided: who writes the side comments on the other pages; whether pictures go only where one fits (no page on main has a picture, 31 have drawn figures).
- About's own two diagrams are as they were and do not open larger.
- Contrast: the blue note text inside figures (#0094d0 at 12px, About's style) measures 3.2:1 on the dot paper.
