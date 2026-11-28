# Tsumugu Core reader

Tsumugu Core is a static project page. A level switch changes which words in a four-line reader count as known. The Projects whiteboard, list, and activity views link here.

Source: `public/projects/tsumugu-core/index.html` (the level switch is the inline script that binds `button[data-level]`). The card href is in `src/data/projects-views.html`. No Astro page generates this URL. There is no `projects/tsumugu-core.md`.

## Sub-features

- `core-title` is `header.mast span.title` text `Tsumugu Core`. The page is `div#page-project`.
- `core-reader` is `section#core-reader` (`aria-label` starts with `Reader:`). It starts at `data-level="A2"`.
- `core-level` is `span.cr-seg` (`role="group"`). Buttons are `button[data-level]` for `A1`, `A2`, `B1`, and `B2`. `A2` starts at `aria-pressed="true"`. A click sets `#core-reader` `data-level` to that button and moves `aria-pressed="true"` onto it.
- Playback, the dictionary popup, and the foundation diagram sit on the same page. The mapped control is the level switch.

## How to get to it (user POV)

From Projects, click the card or list row `Tsumugu Core`. Or open http://127.0.0.1:4321/projects/tsumugu-core/.

## Driving it with computerUse

Preconditions:

- Doctor passed.

- **Open the page.** On `npm run preview`, go to `/projects/tsumugu-core/`. On the dev server `launch.sh` starts, that path is a 404; open `/projects/tsumugu-core/index.html` (same file).
- **Read it.** `header.mast span.title` is `Tsumugu Core`. `#core-reader` has `data-level="A2"`. `button[data-level="A2"]` has `aria-pressed="true"`.
- **Switch level.** Click `button[data-level="B1"]`.
- **Level state.** `#core-reader` has `data-level="B1"`. That button has `aria-pressed="true"`. `button[data-level="A2"]` has `aria-pressed="false"`. The address stays on the URL you opened.

- **Proof.** Screenshot the reader with B1 pressed (the level group visible).

## Product gaps

`GET /projects/tsumugu-core/` on `npm run dev` is Astro's 404. The Projects card, list, and activity row use that href. `npm run preview` returns 200 and the mast is `Tsumugu Core`. On dev, `/projects/tsumugu-core/index.html` is 200. The level switch above was driven on that `index.html` URL.

## Gotchas

- Do not click `button.vp` (line playback) or a word button as the proof. The switch is `button[data-level]`.
- The known-percent output changes with the level. Do not require a fixed percent.
