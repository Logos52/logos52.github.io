# Home / Where to start

The home page is the visitor's first door into the wiki. The objective line renders, five domain doors are real links, and the spotlight opens a note.

Source: `src/pages/index.astro`, `src/lib/types.ts` (`DOMAINS`, `DOMAIN_LABELS`, `DOMAIN_STANCES`).

## Sub-features

- `home-hero` shows `p.lede[data-home-objective]`. `/` has no `h1`.
- `home-spotlight` is the `a.word__link` whose text is `Open Builders' Logs 2026` → `/wiki/Systems/AI--and--Agentic-Systems/Builders'-Logs-2026/`.
- `home-doors` is the section headed `Where to start` (`#start-head`). Five `a.word__link` links. The visible name is `.word__title`.
- `home-topmind` is the `ul.lines` under `#mind-head` with exactly three `li`. The build throws when the count is not 3.

## How to get to it (user POV)

Open http://127.0.0.1:4321/. Open the menu with `button#menu-btn`. On `/`, the Home link is `aria-current="page"`. The wordmark `.mast__mark` (`Logos52`) is the other way back.

## Driving it with computerUse

Preconditions:

- Doctor passed against the instance `launch.sh` started.

- **Open home.** Go to `/`. Wait for `p.lede[data-home-objective]` and `h2#start-head` whose text is `Where to start`.
- **Count doors.** Five links under that heading. The `.word__title` texts are `Working well with AI`, `Learning faster`, `Managing yourself`, `Making sense of the world`, `Money and craft`. The hrefs are `/domains/ai/`, `/domains/learning/`, `/domains/self/`, `/domains/world/`, `/domains/craft/`.
- **Open Learning faster.** Click the door whose label is `Learning faster`.
- **Resulting state.** The URL is `/domains/learning/` or `/domains/learning`. The `h1` text is `Learning faster`. Domain pages set `active="map"`. The trail link `Map of Content` href is `/map/`.

- **Proof.** Screenshot the objective and the Where to start row before the click, and the Learning faster heading after it. Both frames show the Logos52 chrome.

## Gotchas

- `kb-astro/site-data/home.json` is not imported by `index.astro`. Do not wait for `LLM Knowledge Base` or `.hero__title`. That class is not on this page or on Personal.
- Home is a menu id. On `/`, the menu link Home has `aria-current="page"`.
- There is no `section.start-here`, no `section.doors`, no `a.door`, no `.door__intent`, and no Explore door to `/map/`.
- Top of mind lines are bare `li` elements inside `ul.lines`, not `.topmind__item` or `.topmind__lines`.
- Home does not mount a constellation. Do not look for `[data-mode="spine"]` here.
