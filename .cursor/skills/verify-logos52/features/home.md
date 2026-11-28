# Home

The home page is the visitor's first door. The mast wordmark, the Now rail, and three columns (Projects, Journal, Explainers) are real links. A flat graph of wiki pages sits in the Explainers column.

Source: `src/pages/index.astro`, `src/layouts/Base.astro`, `src/data/home-intro.html`, `src/data/home-pieces.html`, `src/data/home-works.html`, `src/data/home-mind.html`, `src/components/FlatGraph.astro`.

## Sub-features

- `home-shell` is `div#page-home` inside `Base` with `section="home"`. The bar breadcrumb `nav.crumb span.here` is `Home`. `a.brand` (name `Logos52`) returns to `/`.
- `home-mast` is `a.wordmark` text `Logos52` and `#intro` (the lede paragraph from `home-intro.html`). There is no `h1.hero__title`.
- `home-pieces` is the band under the lede. `p.pieces-lead` introduces it. Four `.pc-row` blocks follow, from `home-pieces.html`: deep processing and retrieval, Tsumugu at `/projects/tsumugu/` plus the external dictionary, working with agents at `/explainers/#working-with-agents`, and the journal.
- `home-now` is `aside.org.now` (`aria-label="Now"`). `Updated` is the newest journal date. `Underway` links to `#work` with text `Tsumugu`.
- `home-projects` is `section#work` with `h1` `Projects` and `.works a` from `home-works.html`. The card title is `Tsumugu` and the href is `/projects/tsumugu/`.
- `home-journal` is `section#journal` with `h1` `Journal`, `svg.weeks`, `.journal a` rows, and `p.more a` text `All journal entries` to `/journal/`.
- `home-explainers` is `section#explainers` with `h1` `Explainers`, `p.kicker` linking to `/explainers/` whose text is the wiki length plus `pages`, `svg.diagram` (`FlatGraph`, `labels: false`), and `p.more a` text `All pages` to `/explainers/`. Nodes are `a.node` with `aria-label` set to the note title. Do not require a fixed page count. The kicker is this column, not a kicker on `/explainers/`.
- `home-mind` is `section.mind-wide` (`aria-label="Top of mind"`) and `h1` `Top of mind`.

## How to get to it (user POV)

Open http://127.0.0.1:4321/. On `/`, `span.here` is `Home` and no `nav.meta-links a` has class `current`.

## Driving it with computerUse

Preconditions:

- Doctor passed against the instance `launch.sh` started.
- The window is laptop width, so `nav.meta-links` is visible.

- **Open home.** Go to `/`. Wait for `div#page-home`, `span.here` text `Home`, and `section#work h1` text `Projects`. `p.pieces-lead` is present and `.pc-row` count is 4. `section#explainers p.kicker` links to `/explainers/` and its text ends with `pages`. Do not require a fixed count.
- **Open Explainers from the column.** Click `section#explainers p.more a` whose text is `All pages`.
- **Resulting state.** The URL is `/explainers/`. `header.mast span.title` is `Explainers`. `span.here` is `Explainers`. `nav.meta-links a[href="/explainers/"]` has class `current`.

- **Proof.** Screenshot the home columns before the click, and the Explainers mast after it. Both frames show the Logos52 bar.

## Product gaps

`npm run dev` (what `launch.sh` starts) returns Astro's 404 for `/projects/tsumugu/`. The home card `Tsumugu` uses that href. `npm run preview` returns 200 for the same path and the mast title is `Tsumugu` (`public/projects/tsumugu/index.html` is in `dist/`). On dev the file is served at `/projects/tsumugu/index.html`. The catch-all `[...slug].astro` owns the directory URL because `projects/tsumugu` is in the owned set, and dev does not fall through to the public `index.html`. Do not patch the route from this skill.

## Gotchas

- Do not wait for `h1.hero__title`, `h2` `Start here`, `a.door`, domain chips, or `[data-constellation-root]`. Those are gone. Copy is the HTML fragments in `src/data/home-*.html`, not `kb-astro/site-data/home.json`.
- `/projects/tsumugu/` is the static file `public/projects/tsumugu/index.html` (`id="page-project"`). `projects/tsumugu` is in the owned set in `[...slug].astro`, so the vault note is not the page. See Product gaps for the dev 404.
- The home graph does not fetch `/graph.json`. A node is an `a.node` link. Node titles depend on link rank at build time. Do not require a fixed node name on `/`.
- `button#theme-toggle` is not on this page. Theme buttons are `button[data-theme-set]` inside `details.menu`.
