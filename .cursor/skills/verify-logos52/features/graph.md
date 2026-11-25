# Graph

The vault graph is its own page. A visitor opens `/graph/` and gets a full-graph canvas with a short hover/click legend. It does not redirect to Map.

Source: `src/pages/graph.astro` (`active="notes"`), `src/components/Constellation.astro`.

## Sub-features

- `graph-title` is an `h1` with text `Vault graph`. The `h1` has no extra class.
- `graph-canvas` is `[data-constellation-root][data-mode="full"]` with a `canvas`. The island fetches `/graph.json`.
- `graph-legend` is the paragraph under the heading: hover to highlight, click a node to open the note, scroll to zoom, drag to pan.

## How to get to it (user POV)

Open http://127.0.0.1:4321/graph/. The header nav has no Graph item. Map is a different page (`The vault`, domain sections, content map). Notes stays the current nav link, because this page sets `active="notes"`.

## Driving it with computerUse

Preconditions:

- Doctor passed.

- **Open the graph.** Go to `/graph/`.
- **Read it.** The address stays on `/graph/` or `/graph`. The `h1` text is `Vault graph`. `[data-constellation-root][data-mode="full"]` contains a `canvas`. The nav link `Notes` has class `on`.
- **Proof.** Screenshot the `Vault graph` heading and the canvas. The frame shows the Logos52 header.

## Gotchas

- Do not expect a redirect to `/map/`, and do not expect the Map heading `The vault` here.
- The noscript fallback points at `/notes/` (`Browse the notes index`). A failed fetch replaces the figure's message with `Graph data unavailable.` Do not mock `/graph.json`.
- Canvas nodes have no ARIA name. Proving a node click needs the canvas, not a link role. The page is verified when the heading and the canvas are present.
- This is not the home spine graph and not the local graph on a note rail. Those are `data-mode="spine"` and `data-mode="local"`.
