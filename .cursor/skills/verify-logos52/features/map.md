# Map

The Map is the vault graph, a filterable list of wiki pages, and a nested content map of every published note. It is the menu `Map` item, and the same link in the footer. `/notes/` and `/graph/` redirect here.

Source: `src/pages/map.astro` (`active="map"`), `src/islands/map-list.ts`, `src/lib/folder-order.ts`, `src/pages/domains/[domain].astro` (`active="map"`), `src/pages/graph.astro` (redirect).

## Sub-features

- `map-title` is `h1[data-map-title]` with text `Map`.
- `map-graph` is `[data-constellation-root][data-mode="full"][data-domain-labels]` with a `canvas`. The island fetches `/graph.json` (the default `data-src`).
- `map-list` is `input[data-map-search]` (`aria-label="Filter pages"`), `button.chip[data-map-domain]` for `ai`, `learning`, `self`, `world`, and `craft`, and `a.word__link` rows.
- `map-domain-page` is `/domains/{d}/`, opened from a home door, not from a chip on this page. The `h1` is `DOMAIN_LABELS[d]` (`Learning faster` for `learning`). A `ul.word` lists notes. Open the menu; Map is `aria-current="page"`. The trail link `Map of Content` returns to `/map/`. There is no `ul.moc`.
- `map-content` sits below the filter list: `section[data-content-map]`. `h2#content-map-title` is `Content map`. `p.page__dek` states the computed total (`{N} pages.`) and, when any page has no type, `{M} with no type.` Those numbers are `data-content-map-count` and `data-content-map-other`. Read the attributes. A past build's count is not the assertion.
- The tree is `div.cmap__tree`. Every `details` is closed (no `open` attribute). Level 1 is `details.cmap__type`: the front matter `type`, with a blank type labeled `Other`. Types are ordered by page count, then label. `Other` is last. Level 2 is `details.cmap__section`: the folder trail (`Top level`, or `wiki / Story Craft`) and `span.cmap__n`. Level 3 is `ul.cmap__pages` of `a.cmap__link` titles.
- The tree includes every published note except home and `notes/index`. The filter list above it is non-draft `wiki/` pages only.
- Titles in a folder group go through `byHubThen` (`src/lib/folder-order.ts`): a type that is exactly `hub` sorts first, then title. The tree already groups by type, so that rank does not reorder titles inside one content-map folder. The visitor sees hub-first order on a folder page. That check is on the Wiki page feature.

`/graph/` redirects to `/map/`. It is not a second graph page.

## How to get to it (user POV)

Open the menu (`button#menu-btn`) and click `Map`, follow the footer link `Map`, or follow the trail link `Map of Content` on a domain page. Home doors go to domain pages, not to Map.

## Driving it with computerUse

Preconditions:

- Doctor passed.
- The menu button is visible. Map itself is inside `#menu` until that button is clicked. The footer link is visible without the menu.

- **Open the map.** From `/`, click `button#menu-btn`, then the menu link named `Map`.
- **Read the map.** URL is `/map/` or `/map`. `h1[data-map-title]` is `Map`. Open the menu; Map is `aria-current="page"`. `[data-constellation-root][data-mode="full"]` contains a `canvas`. `input[aria-label="Filter pages"]` is present. At least one `button[data-map-domain]` is present.
- **Read the content map.** `h2#content-map-title` text is `Content map`. The number in `data-content-map-count` is the first number in `p.page__dek`. Each `details.cmap__type` is closed. When `data-content-map-other` is not `0`, the last type `summary` starts with `Other`.
- **Open a page from the tree.** Open the first `details.cmap__type`, then the first `details.cmap__section` inside it, then click the first `a.cmap__link`. The URL is that anchor's `href`. `h1.reading__title` is the link text. Return to `/map/`. The heading is `Map`.
- **Open a domain from Home.** Click the wordmark. Click the link whose `.word__title` is `Learning faster`.
- **Resulting state.** URL is `/domains/learning/`. The `h1` text is `Learning faster`. A `ul.word` list is present. Open the menu; Map is `aria-current="page"`.
- **Back.** Click the trail link `Map of Content`. URL is `/map/` and the heading is `Map` again.
- **Proof.** Screenshot `Map` with the filter and the closed Content map, the note opened from the tree, and the Learning faster heading after the door click.

## Gotchas

- The heading is `Map`, not `The vault`. `The vault` appears in the meta description (`The vault graph and every wiki page.`). Assert the `h1` text.
- There is no `h2` `The six domains`, no `section.domain`, and no `p.domain__blurb` on this page. Domains are five, not six (`src/lib/types.ts`).
- `button[data-map-domain]` filters the list. It does not navigate. It does not filter the content map.
- A closed `details` stays closed until the visitor opens it. Do not assert a fixed page count such as 276. Read `data-content-map-count`.
- Hub-first order is not visible inside one content-map folder, because that folder list is already a single type. Prove it on `/folder/wiki/Story-Craft/` from the Wiki page feature.
- The graph fetches `/graph.json`. A fallback paragraph `Graph data unavailable.` is a product or data miss. Do not mock the JSON.
- Canvas nodes have no ARIA name. Use the menu and the home doors when proving navigation.
- `/graph/` and `/notes/` redirect to `/map/`. Do not expect an `h1` of `Vault graph`.
- Domain pages set `active="map"`. There is no Notes nav item. Current is `aria-current="page"`, not a class `on`. `.on` on this page is the active filter chip.
