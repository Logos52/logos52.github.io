# Home / Start here

The home page is the visitor's first door into the wiki. The hero renders, three Start here doors are real links, and the domain chips open a domain list.

Source: `src/pages/index.astro`, `src/lib/home-page.ts` (`startHere`, `topOfMind`, `hubColumns`, `projectUpdates`), `src/lib/types.ts` (`DOMAINS`, `DOMAIN_LABELS`), `kb-astro/site-data/home.json` (hero title and lede, when the file exists).

## Sub-features

- `home-hero` is `h1.hero__title` and `p.hero__lede`. With `home.json` present the title is `LLM Knowledge Base`.
- `home-graph` is `[data-constellation-root][data-mode="spine"]` and six domain chips. Each chip is a link to `/domains/{learning,agentic,language,focus,mind,gen}/`. The visible labels are `Learning`, `Agentic`, `Language`, `Focus`, `Mind`, `Generativity`.
- `home-doors` is the section headed `Start here` (`h2.start-here__head`). Three `a.door` cards. The visible title is `.door__title`.
- `home-topmind` is `ul.topmind__list` under `h2.topmind__head`. Items are `li.topmind__item`. The build throws when the count is greater than 4.
- `home-hubs` is three columns titled `Five Dimensions`, `Life Systems`, and `Knowledge & Execution`.
- `home-updates` is `h2.updates__head` text `Project Updates`.

## How to get to it (user POV)

Open http://127.0.0.1:4321/. The wordmark `a.kb-brand` (`Logos52`) is the way back. On `/`, no nav link has class `on`.

## Driving it with computerUse

Preconditions:

- Doctor passed against the instance `launch.sh` started.
- The window is laptop width, so the six nav links are visible and `button#kb-menu-btn` is not.

- **Open home.** Go to `/`. Wait for `h1.hero__title` whose text is `LLM Knowledge Base`, and `h2` whose text is `Start here`.
- **Read the doors.** Three `a.door` cards. The `.door__title` texts are `Does a Study Technique Work?`, `How Chinese Characters Are Built`, `Map of the Site`.
- **Open the Decode door.** Click the card whose title is `How Chinese Characters Are Built`.
- **Resulting state.** The URL is `/wiki/Language/Chinese/How-Chinese-Characters-Work/`. `h1.kb-note-title` is `How Chinese Characters Work`.
- **Open a domain.** Go back to `/`. Click the chip whose label is `Learning`.
- **Domain state.** The URL is `/domains/learning/` or `/domains/learning`. The `h1` text is `Learning`. `a.head__kind` text `Map of Content` has href `/map/`. `ul.moc` is present. The nav link `Notes` has class `on`.

- **Proof.** Screenshot the hero and the Start here row before the door click, and the note heading after it. Both frames show the Logos52 header.

## Product gaps

These home links resolve through redirects to a different note than the label names. Leave the pages alone. Record the landing URL.

- Start here `Does a Study Technique Work?` href `/wiki/Syntheses/Are-You-Learning,-or-Just-Using-Techniques/` returns 301 to `/wiki/Dimensions/Dimensions-of-Learning/` (`src/redirects/doors/self.json`). That page returns 200. The heading there is `Dimensions of Learning`. The cut notes stay deleted.
- Life Systems `Health` href `/wiki/Dimensions/Self-Management/` is 301 to `/wiki/Self-Management/Time-Management,-Attention--and--Scheduling/` (`src/redirects/doors/self.json`).
- Knowledge & Execution `Learning Systems` uses the same Syntheses href and lands on `/wiki/Dimensions/Dimensions-of-Learning/`.
- Knowledge & Execution `Decision Making` href `/wiki/Decision-Making/Decision-Making/` is 301 to `/wiki/Razors/` (`src/redirects/doors/self.json`).
- Knowledge & Execution `Generativity` href `/wiki/Concepts/Higher-Order-Generativity-vs-Higher-Order-Judgment/` is 301 to `/wiki/Systems/AI--and--Agentic-Systems/Agentic-Engineering/` (`src/redirects/doors/ai.json`).
- Project Updates `Argument Validation` href `/wiki/Argument-Validation/Argument-Validation/` is 301 to `/wiki/Worldviews--and--the-Political-Order/Group-1---How-to-read-these-arguments/` (`src/redirects/doors/world.json`).
- Project Updates `East Asian Exams - The Arms Race` href `/wiki/Worldviews--and--the-Political-Order/East-Asian-Exams---The-Arms-Race/` is 301 to `/wiki/Worldviews--and--the-Political-Order/Group-3---Markets,-states-and-prosperity/` (`src/redirects/doors/world.json`).

## Gotchas

- `index.astro` reads `kb-astro/site-data/home.json` for `hero.title` and `hero.lede`. Do not wait for `data-home-objective` or `p.lede`. Those are gone.
- There is no `h2` `Where to start`, no `#start-head`, no `a.word__link` door, and no five-domain door row.
- Top of mind items are `li.topmind__item` inside `ul.topmind__list`, not bare `li` inside `ul.lines`.
- The home graph mode is `spine`. Do not require `[data-mode="full"]` on `/`.
- `button#theme-toggle` is in the header on this page. Clicking it flips `html[data-theme]`.
