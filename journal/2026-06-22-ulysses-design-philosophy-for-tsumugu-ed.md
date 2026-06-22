---
date: 2026-06-22
tags: [tsumugu, design, ulysses, ux, reader, dictionary, agentic-engineering, decision]
---

# Ulysses design philosophy → tsumugu-ed

**Verdict:** tsumugu-ed already carries the spine of the Ulysses philosophy — a semantic single-source layer (`entry@1`, richer than Markdown XL), an `html[data-*]` toggle matrix that treats appearance as a swappable layer over one canonical source, and a content-first client search. The fault line is authoring versus reading: Ulysses protects an uninterrupted writer, while a learner's interruptions (lookup, grade, reread) are the product, and our visual encodings (role color, ruby, status ramp, Hán-Việt rail) carry meaning — stripping them strips the lesson. We keep Ulysses' recede-the-chrome and content/presentation-separation instincts and drop its strip-all-meaning minimalism. Six moves are actioned; print-as-export and a "why it's free" manifesto are out.

Provenance: a 7-agent, ~408k-token grounded workflow — Ulysses' philosophy web-verified, the live repos read directly (`/Users/n1/Projects/tsumugu{,-ed,-wiki}`), four mapping lenses, one adversarial critique that filtered the cargo-cult.

## The hinge

Ulysses' conviction is that the editor is the product — roughly a year of an 18-month v1 cycle spent on the writing surface, because that is where the work lives. Its principles follow: plain text + semantic markup (WYSIWYM), one source rendered into many themeable Export Styles, a unified Library you retrieve by content, calm focus offered rather than enforced, opinionated minimalism over a surface you furnish yourself.

We already built the half that transfers:

- `entry@1` is more semantic than Markdown XL. Fields are `definition / form / story / meanings / hanViet` with role-tagged composition (義/聲/形/空) and grounding tags, where Ulysses has only "heading / emphasis."
- The toggle matrix (theme · gloss · reading · 繁/简) over a stdlib idempotent renderer is Ulysses' "appearance is a swappable layer," done as CSS show/hide with OpenCC precomputed offline.
- The sharded CJK search retrieves by meaning, sound, or shape — the Library's find-by-content, already shipped.

Where it inverts: Ulysses strips formatting because appearance is deferred to export; our appearance is the lesson, decided at render time. A learner rereads, looks up, and grades non-linearly, so total flow-protection works against comprehension here.

## Decision ledger

**Actioning** (the subset Wedge committed to):

| Move | Why it earns the pass | Cost |
|---|---|---|
| **VI translations of Simplified Stories** | Closes a VI-zero cell for the exact audience the bridge targets. The 982 authored Simplified stories carry EN + 簡明中文 and 0 Vietnamese. The one move that adds depth instead of re-presenting it. | Authoring capacity (loom) |
| **Static family pages** | Renders the component/phonetic graph as a navigable library instead of burying the sound-family inside one FORM card. `by-component.json` (2,949 keys) + `facet-phonetic.json` already on disk. | Medium, one render pass |
| **Realm switcher** | Three nav lines + a "full entry →" link from the reader hover popup to the stable `/c/{char}.html` URLs. Cheapest path to "one product" via wayfinding, no codebase or palette merge. | Small |
| **Cmd/Ctrl-K to focus search** | Matches the muscle memory the Quartz wiki already uses; the box is on every page. | Small, one listener |
| **Facets → URL hash** | `activeFacet` is in-memory only — reflect it into the URL and rehydrate, and every facet becomes a shareable saved view (Ulysses Filters). Redeems the browse H1 that already promises "browse by family." | Medium |
| **Reader Calm** | A calmer reading surface; see the printing note below. Wedge is considering a white/light background for simplicity and printability, or a minimalist color experiment. | Small–medium |

**Out:**

- **Print study sheets as an export feature** — exploitation risk. A "print every entry" leg makes wholesale scraping of the corpus into a redistributable compilation trivial, which is the wrong tradeoff for a free resource we have invested heavily in. The single-page printing need is met incidentally by the Reader Calm light theme (a learner prints the one page they are studying via the browser).
- **Surfacing a "why it's free" manifesto** — the least interesting part. No manifestos; the values show through the content and the work itself.

**Rejected as cargo-cult** (from the critique, endorsed):

- ePub / Anki export legs — they advertise the content gaps (word examples 26/7,001) and break the learning round-trip; the reader already does Anki-with-audio over richer reading content.
- Token refactor to merge dictionary (Paper & Ink) and reader (wnac/Copilot) skins — large effort to erase a useful cognitive distinction (bright lookup versus immersive reading).
- A dark "ink" skin on the dictionary — solves no learner problem.
- Dictionary-side mark-known state — a second source of truth for "what does Wedge know," exactly the duplicate/stale-state pain; the reader owns that model.
- Daily targets / streaks — anti-fit for a reference tool, and it violates "protect the student's attention."
- Live in-page "save as…" export preview — previews exports that should not ship.

**Agreed in principle, not yet scheduled:**

- Promote the mission-defining toggles (VI gloss, 繁/简, Hán-Việt) out of the 設⚙ popover into first sight — closes the discoverability gap without breaking the calm.
- A maker-facing coverage filter (`words missing examples`, `simplified missing VI`) that points the facet machinery inward to drive the loom. This is the deepest read (below).

## Why VI Simplified Stories is the pick that matters

Ulysses' real lesson for a maker: invest in the editor — the authoring pipeline — because presentation only redistributes content. Our biggest verified gap is content asymmetry (word examples 26/7,001 ≈ 0.4%, collocations ~0%, 982 Simplified stories at 0 VI). Of the six actioned moves, VI translations of Simplified Stories is the only one that adds depth rather than re-presenting it, and it fills a Vietnamese-zero cell for the audience the whole bridge exists to serve. The rejected export legs would have fanned that thinness onto more surfaces; this fills one.

## Reader Calm and the printing stance

A clean light or white reader theme answers the printing need that the rejected print-export would have served: a learner prints the single page in front of them through the browser, with no feature that turns the whole corpus into an easy bulk grab. The reader is already two-layer (`--wnac-*` raw → `--tsg-*` semantic), so a warm or white variant is a token swap under one selector with no component changes. Open thread: whether the experiment lands on a warm paper tone (bridging toward the dictionary's Paper & Ink) or a plain white minimalist surface.

## Open decisions

1. **Reader Calm palette:** warm paper (cross-surface continuity) versus plain white (maximum minimalism / print legibility) — to be settled by experiment.
2. **Sequence the six:** the three small moves (realm switcher, Cmd/Ctrl-K, facets→URL) are a single low-risk pass; family pages and VI Simplified Stories are the larger bets; VI stories compete with the character backlog for loom capacity.
3. **Whether the maker-facing coverage filter graduates from "agreed" to scheduled** — it serves the learner indirectly but more than any export format would.

## Links

- [[journal/2026-06-21-hanviet-bridge-deep-dive|Hán-Việt bridge deep dive]] — the same authoring-over-presentation discipline applied to the Sino-Vietnamese bridge.
- [[journal/2026-06-20-tsumugu-vietnamese-translation-campaign|VI translation campaign]] — the loom that will carry the Simplified-stories VI pass.
- [[journal/2026-06-19-simplified-edition-and-vn-toggle|Simplified edition + VN toggle]] — where the 982 Simplified stories were authored (EN + 簡明中文, VI left blank).
- [[projects/tsumugu-ed|Tsumugu Encoding Dictionary]]
