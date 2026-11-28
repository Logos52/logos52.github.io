# Project instructions

## How to read these notes
What the owner says is a preference to weigh, not a rule. Do not turn the owner's remarks into rules or bans, here or in any other note. Use judgment, and ask when unsure. The one exception is "never say what is not on the site", which the owner keeps as a hard rule because it keeps being broken.

## Hard rule: never say what is NOT on the site
Confirmed by the owner: a sentence adds no value when the reader learns nothing they can use from it. Telling the reader what is absent, withheld, or kept off the site is useless to them. The rule is about the idea, in any wording and on any page, not about one sentence.

Do not write, keep, or re-add sentences whose point is that private, raw, financial, or draft material is not published. Removed so far:
- "Raw sources, private notes, financial detail, and workbench drafts stay out of the published wiki." (Home and About)
- "Private material stays out of the public build." (About summary)
- "They follow an operating contract that keeps private material out of the public build." (About article)
- "A clear split between public and private material, plus automated publish guards, is what makes it safe to keep an LLM-maintained vault on the open internet." (About article)

Summaries are the main way this comes back: when condensing an article, leave this idea out even if the source text contains it.

Before finishing any change to a page, search the page text for: private, stay out, stays out, kept out, public build, publish guard, off the public site, never, not shown, not included. Delete any match that describes what the site leaves out. If a match is in copy the owner has not yet ruled on, list it for the owner.

More generally: no filler lines that state a policy or disclaimer without telling the reader anything about the content.

## Preference: production notes and tech stack
The owner usually prefers reader-facing copy that does not explain how a page or picture was made, and does not name the tooling. This is a preference. Keep such a detail where it helps the reader, for example on a page whose subject is the tooling.
- Removed earlier, for context: "Labels are set in Monaspace Neon." and "Engraving, ink only, with one blue wash on the subject."
- Also removed earlier: "The vault is kept in Obsidian. Astro compiles it into a static site on GitHub Pages." and the list of page types.

## Preference: first person
The owner dislikes "I" language in reader-facing copy and usually prefers neutral phrasing. This is a preference. "We" and "our" meaning people in general are fine, and the owner's own sentences keep their voice. Earlier changes, for context: the first-person introduction on Explainers was removed, and the heading "What I write about" became "Topics".

## Copy lint
`tools/copy-lint.mjs` holds patterns for not-on-site, production-note, tech-stack and first-person wording, with an allow list for sentences the owner has approved. Treat a not-on-site match as an error. Treat the others as prompts to look again, not as failures.

## Working style
- Talk about the design first. For any new page or layout, explain the plan in words and wait for the owner's go-ahead before building. Do not build and then explain.
- One change per step. Do not restyle a whole page unasked.
- No metadata lines on index pages: no entry counts or sort notes such as "130 entries" or "newest first".
- Figures are subtle: small, mostly grey, accent used sparingly.
- Chinese text is Traditional only.
- Do not name things "Group 1", "Group 2" and so on.
- Home (index.html) keeps Fable's layout. About (about.html) is the article style.
- about.html is the template for every article page on the site (explainers, journal entries, project pages): title, one-line grey summary, optional full-width opener picture, text column with figures, and the right rail for page facts, captions and side notes. Build new article pages from it rather than inventing a layout.
- Keep the owner's wording. New copy is flagged as mine.
