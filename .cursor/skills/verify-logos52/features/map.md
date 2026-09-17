# Map

The Map is the vault graph plus the six-domain index. It is the Explore door and the Chrome `Map` item. Prefer this over `/graph/` unless the bug is graph-page-only.

## Sub-features

- Header `h1.map-head__title` `The vault`
- Full-vault constellation `[data-constellation-root][data-mode="full"]` with `data-domain-labels`
- `h2.prose__head` `The six domains`
- Per-domain `section.domain` with an `h3 a` to `/domains/{d}/` and up to eight note links
- Domain pages (`src/pages/domains/[domain].astro`): heading + `.moc a` list + domain-filtered constellation

Related: `/graph/` (`h1` `Vault graph`, same island, hover/click/scroll/drag copy in the lede). Not in Chrome.

## How to get to it (user POV)

Click `Map` in Chrome, click the Explore door on Home, or follow the Map link on the Notes lede. Domain chips on Home go to `/domains/{d}/`, which links back to `/map/` via `a.head__kind`.

## Driving it with computerUse

1. From `/`, click the door whose `.door__intent` is `Explore`, or the nav link named `Map`.
2. Resulting state: `/map/` or `/map`, `h1.map-head__title` = `The vault`, Chrome `Map` is `.on`.
3. Assert `[data-constellation-root][data-mode="full"]` and a `canvas`.
4. Click a domain heading link (accessible name is the domain label, e.g. the `learning` chip's destination is `/domains/learning/`).
5. Resulting state: `/domains/{d}/`, an `h1` with that label, and a `.moc` list.
6. Optional: open `/graph/` directly and confirm `h1` `Vault graph`. Do not use canvas pixel clicks unless the bug is node-hit testing.

## Gotchas

- Chrome href is `/map`; the Explore door is `/map/`. Both should resolve (`trailingSlash: ignore`).
- The graph fetches `/graph.json`. A fallback paragraph `Graph data unavailable.` is a product/data miss, not a reason to mock the JSON.
- Canvas nodes have no ARIA name. Prefer the domain list and Notes/Home links when proving navigation.
- Home's constellation is `mode="spine"` (landmark subset). Map/Notes/Graph use `mode="full"`. A sparse home graph is not a Map failure.
- `/graph/` sets Chrome `active="notes"`, so the Notes nav item is `.on` while you are on the graph page. Record that if you land there; do not "correct" it in the map.
