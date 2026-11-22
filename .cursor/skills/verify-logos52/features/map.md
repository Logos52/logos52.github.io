# Map

The Map is the vault graph plus a filterable list of wiki pages. It is the Chrome `Map` item. `/notes/` and `/graph/` redirect here.

Source: `src/pages/map.astro` (`active="map"`), `src/islands/map-list.ts`, `src/pages/domains/[domain].astro` (`active="map"`), `src/pages/graph.astro` (redirect).

## Sub-features

- `map-title` is `h1.map-head__title` with text `Map`.
- `map-graph` is `[data-constellation-root][data-mode="full"][data-domain-labels]` with a `canvas`. The island fetches `/graph.json` (the default `data-src`).
- `map-list` is `input[data-map-search]` (`aria-label="Filter pages"`), `button.map-list-chip[data-map-domain]` for `ai`, `learning`, `self`, `world`, and `craft`, and `a.map-row__link` rows.
- `map-domain-page` is `/domains/{d}/`, opened from a home door, not from a heading on this page. The `h1` is `DOMAIN_LABELS[d]` (`Learning faster` for `learning`). A `ul.moc` lists notes. Chrome `Map` is `.on`. `a.head__kind` returns to `/map/`.

`/graph/` redirects to `/map/`. It is not a second graph page.

## How to get to it (user POV)

Click `Map` in Chrome, or follow `a.head__kind` (`Map of Content`) on a domain page. Home doors go to domain pages, not to Map.

## Driving it with computerUse

Preconditions:

- Doctor passed.
- Chrome `Map` is visible.

- **Open the map.** From `/`, click the nav link named `Map`.
- **Read the map.** URL is `/map/` or `/map`. `h1.map-head__title` is `Map`. Chrome `Map` is `.on`. `[data-constellation-root][data-mode="full"]` contains a `canvas`. `input[aria-label="Filter pages"]` is present. At least one `button[data-map-domain]` is present.
- **Open a domain from Home.** Click the brand (or the nav link named `Home`). Click the door whose `.door__label` is `Learning faster`.
- **Resulting state.** URL is `/domains/learning/`. The `h1` text is `Learning faster`. A `.moc` list is present. Chrome `Map` is `.on`.
- **Back.** Click `a.head__kind` (`Map of Content`). URL is `/map/` and the heading is `Map` again.
- **Proof.** Screenshot `Map` with the filter, and the Learning faster heading after the door click.

## Gotchas

- The heading is `Map`, not `The vault`. `The vault` appears in the meta description (`The vault graph and every wiki page.`). Assert the `h1` text.
- There is no `h2` `The six domains`, no `section.domain`, and no `p.domain__blurb` on this page. Domains are five, not six (`src/lib/types.ts`).
- `button[data-map-domain]` filters the list. It does not navigate.
- The graph fetches `/graph.json`. A fallback paragraph `Graph data unavailable.` is a product or data miss. Do not mock the JSON.
- Canvas nodes have no ARIA name. Use Chrome and the home doors when proving navigation.
- `/graph/` and `/notes/` redirect to `/map/`. Do not expect an `h1` of `Vault graph`.
- Domain pages set `active="map"`. There is no Notes nav item to mark `.on`.
