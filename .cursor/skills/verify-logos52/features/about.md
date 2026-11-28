# About

About is the static article "How this wiki works". The header link `About` opens it. The vault file `about.md` is not this page.

Source: `public/about/index.html`. The nav href is `/about/` in `src/layouts/Base.astro`. `[...slug].astro` lists `about` in the owned set, so the markdown note is not rendered at this URL. There is no `src/pages/about.astro`.

## Sub-features

- `about-title` is `header.mast span.title` text `How this wiki works`. The document title is `How this wiki works — Logos52`. `span.here` is `About`. `nav.meta-links a[href="/about/"]` has class `current`.
- `about-theme` is `button[data-theme-set="dark"]` (`aria-label="Dark"`) and `button[data-theme-set="light"]` (`aria-label="Light"`), inside `details.menu`. The click sets `html[data-theme]` and `localStorage` key `logos52-theme`. The buttons are in the menu, so the menu has to be open.
- `about-search` is the same `input#site-search` markup, with its own inline filter script in this file.
- `about-notes` are three `aside.note` elements (`note-1`, `note-2`, `note-3`) and three `a.sidenote-ref` markers, written in this file. They do not come from `src/lib/article-extras.ts`. An inline `placeRail` in this file sets `position: absolute` and `top` so each note sits in the same column as `#article-facts`, level with its marker, at width above `46rem`.
- `about-lightbox` is `dialog.lightbox`. Clicking `.essay-body figure img` calls `showModal`. The opener figure is the first of those images. This page does not use `button.fig-open`.

## How to get to it (user POV)

Click the nav link `About`, or open http://127.0.0.1:4321/about/. The Projects whiteboard card `llm-knowledge-base` also hrefs `/about/`.

## Driving it with computerUse

Preconditions:

- Doctor passed.
- Laptop width.

- **Open About.** On `npm run preview`, go to `/about/`. On the dev server `launch.sh` starts, `/about/` is a 404; open `/about/index.html` instead (same file).
- **Read it.** `header.mast span.title` is `How this wiki works`. `span.here` is `About`. `aside.note` count is 3 and `a.sidenote-ref` count is 3. At laptop width each note has computed `position: absolute`, a non-empty inline `top`, and the same left edge as `#article-facts`.
- **Open the figure.** Click the first `.essay-body figure img`.
- **Lightbox.** `dialog.lightbox` is open and its `img` src is the figure. Click `button.lightbox-close`. The dialog is no longer open.
- **Open the menu.** Click `summary[aria-label="Menu"]`.
- **Set dark.** Click `button[data-theme-set="dark"]` (`aria-label="Dark"`).
- **Resulting state.** `html` has `data-theme="dark"`. That button has `aria-pressed="true"`.

- **Proof.** Screenshot the About mast in the default theme, and the same mast after the dark button (the page background is the dark paper).

## Product gaps

`GET /about/` on `npm run dev` is Astro's 404 (`Path: /about/`). `GET /about/index.html` on that same server is 200 and the mast is `How this wiki works`. `npm run preview` returns 200 for `/about/`. The header link uses `/about/`.

## Gotchas

- This file does not load `src/scripts/ndc-ui.ts`. Theme, menu, and search are inline scripts in `public/about/index.html`. The selectors match `Base.astro`.
- `about.md` is a different document (a short bio). Do not assert its title `About` on this URL.
- There is no `button#theme-toggle` and no `a.kb-nav__link`.
