# H6 — Blog → Journal fold

Blog (1 post + 1 collection) folds into Journal. Old URLs must keep working.

## 1. Move files (git mv, preserve history)

- `blog/on-red-teams-closure.md` → `journal/on-red-teams-closure.md`. Add frontmatter `aliases: ["blog/on-red-teams-closure"]`.
- `blog/experiences.md` → `journal/experiences.md`. Add `aliases: ["blog/experiences"]`.
- Delete `blog/index.md`; recreate as a one-line stub whose only purpose is the redirect — or, if Quartz's AliasRedirects supports it more cleanly, add `aliases: ["blog"]` to `journal/index.md` and delete the blog folder entirely. Use whichever produces a working `/blog` → `/journal` redirect; verify in build output (`public/blog/index.html` should be a redirect page).

## 2. Update references

- `grep -rn "blog/" --include="*.md"` across published folders; update every wikilink to the new paths (known: `notes/index.md` references `[[blog/experiences|Experiences]]`; `journal/index.md` may reference blog).
- `quartz.layout.ts` / SiteNav: confirm no Blog link remains (H1 already removed it).
- Any `isCleanPage` slug checks referencing `blog` — update.

## 3. Journal index gains an Essays section

In `journal/index.md`, after the `## Recent entries` section, insert (copy is final):

```
## Essays

Finished, stable pieces — the journal's open questions, settled enough to stand alone.

- [[journal/on-red-teams-closure|On Red Team's Closure]] — what a leaner military should have kept from Red Team, and what was right to cut.
- [[journal/experiences|Experiences]] — operating principles drawn from lived experience (Taiwan 2020, Red Team training).
```

Also update the journal index's intro: `…they graduate into the wiki once the thinking settles.` becomes `…they graduate into the wiki — or stand alone as essays — once the thinking settles.`

## Acceptance

- `/blog`, `/blog/on-red-teams-closure`, `/blog/experiences` all redirect to working journal pages in the build output.
- `grep -rn "\[\[blog/" --include="*.md"` over published folders returns nothing.
- Journal index shows the Essays section; RSS still builds.
- Commit: `atlas(H6): fold blog into journal with alias redirects`.
