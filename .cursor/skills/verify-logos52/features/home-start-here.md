# Home / Start here

The home page is the visitor's first door into the wiki. Prove that the hero renders, the five intent cards are real links, and one card changes the route. This is the first mapped feature.

## Sub-features

- Hero `.hero__title` + `.hero__lede` (from `kb-astro/site-data/home.json` when present, else the fallback strings in `src/pages/index.astro`). On this tree the JSON is present, so the live `h1` is `LLM Knowledge Base` — do not assert the longer fallback title.
- Constellation spine (`[data-constellation-root][data-mode="spine"]`) and domain chips `a.kb-domainchip[data-domain]` → `/domains/{d}/`
- Start here: five `a.door` with `.door__intent` Understand / Apply / Learn / Decode / Explore
- Top of mind: exactly four `.topmind__item` (build dies if a fifth is added)
- Hub columns `.hub-card` and Project Updates `.updates a.updates__title`

## How to get to it (user POV)

Open http://localhost:4321/. There is no Home item in Chrome; the brand lockup `.kb-brand` (name `Logos52`) is the way back. Scroll to the heading `Start here`.

## Driving it with computerUse

1. Go to `/`. Wait for `h1.hero__title` and `section.start-here`.
2. Assert five `a.door`. Read each `.door__intent`.
3. Click the door whose intent is `Explore` (href `/map/`).
4. Resulting state: URL is `/map/` or `/map`, `h1.map-head__title` is `The vault`, Chrome `Map` has class `on`.
5. Optional second path: click Understand (title `What Engineers Are Judged On`) and land on a note `h1.kb-note-title`. Understand resolves to `/wiki/Concepts/The-AI-Industrial-Revolution/`.

Resolved hrefs for the other doors (spaces → `-`, `&` → `-and-`):

- Apply → `/wiki/Systems/AI--and--Agentic-Systems/Vibe-Coding/`
- Learn → `/wiki/Syntheses/Are-You-Learning,-or-Just-Using-Techniques/`
- Decode → `/wiki/Language/Chinese/How-Chinese-Characters-Work/`

## Gotchas

- Explore is the only door with a hard-coded `href`. The others go through `slugifyFilePath`. Apply's folder `AI & Agentic Systems` becomes `AI--and--Agentic-Systems` (space on each side of `&`).
- `active="home"` is not a Chrome nav id, so no `.kb-nav__link.on` on `/`.
- Do not click constellation canvas nodes for this feature; that is Map/Graph.
- Top-of-mind count is a build invariant, not a runtime check. If you see more than four items, that is a product bug — record it.
