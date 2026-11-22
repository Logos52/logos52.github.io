# Home / Where to start

The home page is the visitor's first door into the wiki. The objective line renders, five domain doors are real links, and the spotlight opens a note.

Source: `src/pages/index.astro`, `src/lib/types.ts` (`DOMAINS`, `DOMAIN_LABELS`, `DOMAIN_STANCES`).

## Sub-features

- `home-hero` shows `p.hero__objective`. `/` has no `h1` and no `.hero__title`.
- `home-spotlight` is `a.spotlight__link` (`Open Builders' Logs 2026`) → `/wiki/Systems/AI--and--Agentic-Systems/Builders'-Logs-2026/`.
- `home-doors` is `section.doors`. The heading is `Where to start`. Five `a.door` links. The visible name is `.door__label`.
- `home-topmind` is `ul.topmind__lines` with exactly three `li`. The build throws when the count is not 3.

## How to get to it (user POV)

Open http://127.0.0.1:4321/. Chrome includes Home. On `/`, that link is `.on`. The brand lockup `.kb-brand` (mark `aria-label="Logos52"`) is the other way back.

## Driving it with computerUse

Preconditions:

- Doctor passed against the instance `launch.sh` started.

- **Open home.** Go to `/`. Wait for `p.hero__objective` and `h2#doors-head` whose text is `Where to start`.
- **Count doors.** Five `a.door`. The `.door__label` texts are `Working well with AI`, `Learning faster`, `Managing yourself`, `Making sense of the world`, `Money and craft`. The hrefs are `/domains/ai/`, `/domains/learning/`, `/domains/self/`, `/domains/world/`, `/domains/craft/`.
- **Open Learning faster.** Click the door whose label is `Learning faster`.
- **Resulting state.** The URL is `/domains/learning/` or `/domains/learning`. The `h1` text is `Learning faster`. Chrome `Map` has class `on` (domain pages set `active="map"`). `a.head__kind` href is `/map/` and its text includes `Map of Content`.

- **Proof.** Screenshot the objective and the Where to start row before the click, and the Learning faster heading after it. Both frames show the Logos52 chrome.

## Gotchas

- `kb-astro/site-data/home.json` is not imported by `index.astro`. Do not wait for `LLM Knowledge Base` or `.hero__title`. `.hero__title` is the Personal page heading.
- Home is a Chrome nav id. On `/`, `.kb-nav__link.on` is Home.
- There is no `section.start-here`, no `.door__intent`, and no Explore door to `/map/`.
- Top of mind lines are bare `li` elements inside `.topmind__lines`, not `.topmind__item`.
- Home does not mount a constellation. Do not look for `[data-mode="spine"]` here.
