# Home / Start here

The home page is the visitor's first door into the wiki. The hero renders, the three intent cards are real links, and the Explore card opens the Map.

Source: `src/pages/index.astro`, `kb-astro/site-data/home.json`, `src/components/Constellation.astro` (default `mode="spine"`), `src/lib/spine.ts`, `src/islands/constellation.ts` (`selectSpineConstellation`).

## Sub-features

- `home-hero` shows `.hero__title` and `.hero__lede`. With `home.json` present, the `h1` text is `LLM Knowledge Base`.
- `home-graph` renders `[data-constellation-root][data-mode="spine"]` and a `canvas`. Domain chips `a.kb-domainchip[data-domain]` go to `/domains/{d}/`.
- `home-doors` shows three `a.door` whose `.door__intent` text is `Learn`, `Decode`, `Explore`.
- `home-topmind` shows three `.topmind__item`. The build throws when `topOfMind.length` is greater than 4.
- `home-hubs` shows three `.hub-card` columns and Project Updates links `a.updates__title`.

## How to get to it (user POV)

Open http://127.0.0.1:4321/. Chrome has no Home item. The brand lockup `.kb-brand` (mark `aria-label="Logos52"`) is the way back. Scroll to the heading `Start here`.

## Driving it with computerUse

Preconditions:

- Doctor passed against the instance `launch.sh` started.
- `kb-astro/site-data/home.json` is present, so the hero is the JSON title.

- **Open home.** Go to `/`. Wait for `h1.hero__title` and `section.start-here`. The heading text is `LLM Knowledge Base`. The graph root has `data-mode="spine"` and contains a `canvas`.
- **Count doors.** Read each `.door__intent`. The three DOM strings are `Learn`, `Decode`, `Explore`.
- **Open Explore.** Click the door whose intent is `Explore`. Its `href` is `/map/`.
- **Resulting state.** The URL is `/map/` or `/map`. `h1.map-head__title` is `The vault`. Chrome `Map` has class `on`.

Resolved hrefs for the other doors:

- Learn → `/wiki/Syntheses/Are-You-Learning,-or-Just-Using-Techniques/`
- Decode → `/wiki/Language/Chinese/How-Chinese-Characters-Work/`

- **Proof.** Screenshot the home hero and the Start here row before the click, and the Map heading after it. Both frames show the Logos52 chrome.

## Gotchas

- Explore is the only door with a hard-coded `href`. Learn and Decode go through `slugifyFilePath`.
- `active="home"` is not a Chrome nav id, so no `.kb-nav__link.on` on `/`.
- `.door__intent` is uppercased with CSS (`text-transform: uppercase`). Match the DOM text `Explore`.
- Top of mind on this tree is three items. Four is still inside the cap. More than four is a product bug. Record it.
- Project Updates on this tree is the `2026-09-16` group: `Argument Validation` and `East Asian Exams - The Arms Race`.
- `src/lib/spine.ts` still names `wiki/Systems/AI & Agentic Systems/Claude Fable`. That page is gone. `selectSpineConstellation` skips a hub that is not in the graph (`if (!valid.has(hub)) continue`). A home canvas with fewer than six hub labels is that gap. Record it. Do not edit `spine.ts` from this skill, and do not fail the spine mode check because the missing hub was skipped.
- Do not click constellation canvas nodes for this feature. That is Map.
