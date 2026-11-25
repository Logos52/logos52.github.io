# Map

The Map is the vault graph, the six domain sections, and a nested content map of every published note. It is the nav `Map` item.

Source: `src/pages/map.astro` (`active="map"`), `src/lib/content-map.ts`, `src/lib/folder-order.ts`, `src/pages/domains/[domain].astro` (`active="notes"`), `src/components/Constellation.astro`.

## Sub-features

- `map-title` is `h1.map-head__title` with text `The vault`.
- `map-graph` is `[data-constellation-root][data-mode="full"][data-domain-labels]` with a `canvas`. The island fetches `/graph.json` (the default `data-src`).
- `map-domains` is `h2` `The six domains`. Each `section.domain` has a heading link to `/domains/{d}/`, `p.domain__blurb`, and a short list of note titles. There is no `input[data-map-search]` and no `button[data-map-domain]`.
- `map-domain-page` is `/domains/{d}/`, opened from a home chip or from a domain heading on this page. The `h1` is `DOMAIN_LABELS[d]` (`Learning` for `learning`). `ul.moc` lists notes. Notes is current (`a.kb-nav__link.on`). `a.head__kind` text `Map of Content` returns to `/map/`.
- `map-content` sits below the domain sections: `section[data-content-map]`. `h2#content-map-title` is `Content map`. `p.cmap__dek` states the computed total (`{N} pages.`) and, when any page has no type, `{M} with no type.` Those numbers are `data-content-map-count` and `data-content-map-other`. Read the attributes. A past build's count is not the assertion.
- The tree is `div.cmap__tree`. Every `details` is closed (no `open` attribute). Level 1 is `details.cmap__type`: the front matter `type`, with a blank type labeled `Other`. Types are ordered by page count, then label. `Other` is last. Level 2 is `details.cmap__section`: the folder trail (`Top level`, or `wiki / Story Craft`) and `span.cmap__n`. Level 3 is `ul.cmap__pages` of `a.cmap__link` titles.
- The tree includes every published note except home and `notes/index`.
- Titles in a folder group go through `byHubThen` (`src/lib/folder-order.ts`): a type that is exactly `hub` sorts first, then title. The tree already groups by type, so that rank does not reorder titles inside one content-map folder. The visitor sees hub-first order on a folder page. That check is on the Wiki page feature.

## How to get to it (user POV)

Click the nav link `Map`, or follow `Map of Content` on a domain page. The Explore door on home (`Map of the Site`) also hrefs `/map/`. Home chips go to domain pages.

## Driving it with computerUse

Preconditions:

- Doctor passed.
- Laptop width, so the nav link `Map` is visible without `button#kb-menu-btn`.

- **Open the map.** From `/`, click the nav link named `Map`.
- **Read the map.** URL is `/map/` or `/map`. `h1.map-head__title` is `The vault`. The nav link `Map` has class `on`. `[data-constellation-root][data-mode="full"]` contains a `canvas`. `h2` text `The six domains` is present. There is no `input[aria-label="Filter pages"]`.
- **Read the content map.** `h2#content-map-title` text is `Content map`. The number in `data-content-map-count` is the first number in `p.cmap__dek`. Each `details.cmap__type` is closed. When `data-content-map-other` is not `0`, the last type `summary` starts with `Other`.
- **Open a page from the tree.** Open the first `details.cmap__type`, then the first `details.cmap__section` inside it, then click the first `a.cmap__link`. The URL is that anchor's `href`. `h1.kb-note-title` is the link text. Return to `/map/`. The heading is `The vault`.
- **Open a domain from Home.** Click the wordmark. Click the chip whose label is `Learning`.
- **Resulting state.** URL is `/domains/learning/`. The `h1` text is `Learning`. `ul.moc` is present. The nav link `Notes` has class `on`.
- **Back.** Click `Map of Content`. URL is `/map/` and the heading is `The vault` again.
- **Proof.** Screenshot `The vault` with the closed Content map, the note opened from the tree, and the Learning heading after the chip click.

## Gotchas

- The heading is `The vault`, not `Map`. There is no `data-map-title`. The document title is `Map`.
- Domains are six (`src/lib/types.ts`): `learning`, `agentic`, `language`, `focus`, `mind`, `gen`. The section heading is `The six domains`.
- Domain headings on this page are links. They navigate. They do not filter a list, because there is no filter list.
- A closed `details` stays closed until the visitor opens it. Do not assert a fixed page count. Read `data-content-map-count`.
- Hub-first order is not visible inside one content-map folder, because that folder list is already a single type. Prove it on `/folder/wiki/Story-Craft/` from the Wiki page feature.
- The graph fetches `/graph.json`. A fallback paragraph `Graph data unavailable.` is a product or data miss. Do not mock the JSON.
- Canvas nodes have no ARIA name. Use the nav and the home chips when proving navigation.
- `/graph/` is a separate page. Do not expect opening Map to change the address to `/graph/`.
- Domain pages set `active="notes"`. Current is class `on`, not `aria-current`.
