# Map

The Map is the vault graph plus the six-domain index. It is the Explore door and the Chrome `Map` item.

Source: `src/pages/map.astro` (`active="map"`), `src/pages/domains/[domain].astro` (`active="notes"`), `src/pages/graph.astro` (`active="notes"`).

## Sub-features

- `map-title` is `h1.map-head__title` with text `The vault`.
- `map-graph` is `[data-constellation-root][data-mode="full"][data-domain-labels]` with a `canvas`. The island fetches `/graph.json` (the default `data-src`).
- `map-domains` is `h2.prose__head` `The six domains`, then one `section.domain` per domain. Each has an `h3 a` to `/domains/{d}/`, a `p.domain__blurb`, and up to eight note links.
- `map-domain-page` is `/domains/{d}/`: an `h1` with the domain label, a `.moc` list, and a domain-filtered constellation. Chrome `Notes` is `.on`.

`/graph/` (`h1` `Vault graph`, same island) is related. It is not in Chrome.

## How to get to it (user POV)

Click `Map` in Chrome, click the Explore door on Home, or follow the Map link on the Notes lede. Domain chips on Home go to `/domains/{d}/`. That page links back to `/map/` via `a.head__kind`.

## Driving it with computerUse

Preconditions:

- Doctor passed.
- Home is loaded, or Chrome `Map` is visible.

- **Open the map.** From `/`, click the door whose `.door__intent` is `Explore`, or the nav link named `Map`.
- **Read the map.** URL is `/map/` or `/map`. `h1.map-head__title` is `The vault`. Chrome `Map` is `.on`. `[data-constellation-root][data-mode="full"]` contains a `canvas`. `h2` text `The six domains` is present. At least one `p.domain__blurb` is present.
- **Open a domain.** Click the domain heading whose accessible name is `Learning` (href `/domains/learning/`).
- **Resulting state.** URL is `/domains/learning/`. The `h1` text includes `Learning`. A `.moc` list is present. Chrome `Notes` is `.on` (domain pages set `active="notes"`).
- **Proof.** Screenshot `The vault` with the domain list, and the Learning heading after the click.

## Gotchas

- Chrome href is `/map`. The Explore door is `/map/`. Both resolve (`trailingSlash: ignore`).
- The graph fetches `/graph.json`. A fallback paragraph `Graph data unavailable.` is a product or data miss. Do not mock the JSON.
- Canvas nodes have no ARIA name. Use the domain list and the Chrome links when proving navigation.
- Home's constellation is `mode="spine"`. Map, Notes, and Graph use `mode="full"`. A home graph without an outer ring is not a Map failure.
- `/graph/` and domain pages set `active="notes"`, so the Notes nav item is `.on` there. `a.head__kind` (`Map of Content`) is the way back to `/map/` from a domain page.
- Domain blurbs are `DOMAIN_BLURB` in `map.astro`. Six paragraphs, one per domain. A missing blurb is a product gap. Record it.
