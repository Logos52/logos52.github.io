# Explainers

Explainers is the index of every wiki note, a flat graph, six topic cards, and a view switcher. It replaces the old Map, Notes, and Vault graph pages. Those URLs redirect here.

Source: `src/pages/explainers.astro` (`section="explainers"`), `src/components/FlatGraph.astro`, `src/scripts/ndc-board.ts` (`bindViews`), `astro.config.ts` (redirects).

## Sub-features

- `explainers-title` is `header.mast span.title` text `Explainers`. `p.sum` is `Every note on the site, grouped by section.` `span.here` is `Explainers`. The nav link `Explainers` has class `current`.
- `explainers-graph` is `svg.diagram` (`role="img"`). The `aria-label` starts with `All` and includes `wiki pages grouped by domain`. Nodes are `a.node` with `aria-label` set to the note title. Hover uses `g[data-tip]` (`bindTips` in `src/scripts/ndc-search.ts`).
- `explainers-hubs` is `.ex-hubs`. Six links. The `Learning systems` card href is `/wiki/Dimensions/Dimensions-of-Learning/`. The `中文` card (`h3[lang="zh-Hant"]`) href is `/wiki/Language/Chinese/How-Chinese-Characters-Work/`.
- `explainers-views` is `div.vsw` (`role="group"`, `aria-label="View"`). Buttons: `Sections` (`data-view="sections"`, default `aria-pressed="true"`), `A to Z` (`az`), `Recently updated` (`recent`). `bindViews` puts class `on` on the matching `div.vw`.
- Section rows are `a.rw`. Hubs sort first inside a section, then title.

## How to get to it (user POV)

Click the nav link `Explainers`, or open http://127.0.0.1:4321/explainers/. Home's `All pages` link also lands here.

## Driving it with computerUse

Preconditions:

- Doctor passed.
- Laptop width, so the nav link `Explainers` is visible.

- **Open Explainers.** Go to `/explainers/`.
- **Read it.** URL stays on `/explainers/`. `header.mast span.title` is `Explainers`. `button[data-view="sections"]` has `aria-pressed="true"`. `svg.diagram` is present. `.ex-hubs` is present.
- **Switch view.** Click the button named `A to Z`.
- **View state.** That button has `aria-pressed="true"`. `div.vw[data-view="az"]` has class `on`. `div.vw[data-view="sections"]` does not.
- **Open a topic.** Click the `.ex-hubs a` whose `h3` is `Learning systems`.
- **Resulting state.** The URL is `/wiki/Dimensions/Dimensions-of-Learning/`. `header.mast span.title` is `Dimensions of Learning`.

- **Proof.** Screenshot the Explainers mast with the view switcher, and the note mast after the topic click.

## Gotchas

- `/map/`, `/notes/`, and `/graph/` redirect to `/explainers/` (`astro.config.ts`). Do not expect `h1` `The vault`, `h2` `Condensed`, or `h1` `Vault graph`.
- `/domains/learning/` and `/folder/wiki/Story-Craft/` are 301 to `/explainers/`. There is no `.moc__title` folder listing.
- There is no `input[data-map-search]`, no `button[data-map-domain]`, and no `section[data-content-map]`.
- The graph is inline SVG, not a canvas and not `/graph.json`.
- Do not assert a fixed page count. The graph `aria-label` includes the built wiki length (`All N wiki pages grouped by domain`). This page has no `p.kicker`. The page-count kicker is on Home, in the Explainers column.
