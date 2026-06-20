# Grok lane — KB Astro site (updated 2026-06-19)

You are **Grok**, the corpus-side lane. You own everything that touches the **content** of the
`llm-knowledge-base` vault rather than the Astro framework: audits, taxonomy, link integrity,
redirects, home curation. Your output is `kb-astro/site-data/*.json` that Opus's builders and
Composer's pages consume. **Read `kb-astro/CONTRACTS.md` first.** **Do not auto-edit note content** —
produce review lists; the human applies content changes in Obsidian.

> **What changed from the first brief** (read this): the build is now an **in-place re-platform** of
> the `llm-knowledge-base` repo on branch **`astro-replatform`** (not a separate `kb-astro/` repo).
> Privacy is **pure 1:1 Quartz parity** (denylist), and `AGENTS.md`/`CLAUDE.md`/`GROK.md`/`README.md`
> are **intentionally public** — do not treat them as leaks. Domains collapsed from the old **8 to 6**
> (new DS colors). You can **start now** — your work has no dependency on Opus's code.

## Locked decisions you honor
- **6 domains**: `learning, agentic, language, focus, mind, gen`. Colors fixed in CONTRACTS §2.
- **Pure 1:1 privacy**: the `ignorePatterns` denylist is the boundary (CONTRACTS §8). Everything not
  denied + not `draft:true` is public. Never surface `private/`, `finances/`, or privacy-tagged notes
  in any output file. The content-leak patterns live in `tools/scripts/publish-guard.mjs` — align with them.
- **Folder-based URLs kept** → redirects only cover slugs that genuinely change (≈none).
- Output location: **`kb-astro/site-data/`**. Match the shapes in CONTRACTS §7 exactly.

## Steps

### G1 — Frontmatter audit → `kb-astro/site-data/audit.json`
Scan every **public** `.md` (apply the denylist + `draft:true`). Flag: missing `title`/`type`/`updated`;
`type` values worth normalizing (34 distinct exist — propose a canonical mapping, don't enforce);
empty/duplicate `tags`; `status` outside the known set; missing `blurb` on `project` notes. Output
`{ file, issues[] }[]`, worst-first. **List only — don't edit.** (Known gaps to expect: `title` absent on
~153 wiki notes; `updated` absent on ~29; two real notes lack `type`.)

### G2 — Domain taxonomy → `kb-astro/site-data/domains.json`
Map **every** public note slug → exactly one of the 6 domains. Start from the 8→6 table in CONTRACTS §2
(decisions→mind, minimalism→gen, money→gen, reference→per-topic are the judgment calls — you decide and
record why). Use folder + tags; **coverage must be 100%** (fallback: folder root → domain, default `gen`).
Output `{ slug: domain }`. Add a short rationale doc for ambiguous calls. This is what the graph + cards color by.

### G3 — Link-integrity sweep → `kb-astro/site-data/links-report.json`
Resolve every `[[wikilink]]` (~3,134 of them) against the public note set. List broken targets, ambiguous
targets (same basename in two folders), alias mismatches. **Watch the escaped-pipe quirk**: some links use
`\|` instead of `|` (e.g. `[[…Syntopical Reading\|alias]]`) — treat `\|` and `|` as equivalent, and flag the
raw ones for cleanup. Honor `aliases:` frontmatter (3 notes) as valid targets. Output
`{ file, link, problem, suggestion }[]`. Don't rewrite links.

### G4 — Redirects → `kb-astro/site-data/redirects.json`
Slugs are 1:1 with Quartz (CONTRACTS §3), so this should be **nearly empty** — that's expected and good.
Emit `{ from, to }` only where a new Astro slug differs from the old Quartz URL, plus any `aliases:`-driven
redirects. Derive Quartz URLs from the folder structure using the §3 slug rules.

### G5 — Home curation → `kb-astro/site-data/home.json`
From the **real vault** (no invented notes), choose the atlas home content; shapes in CONTRACTS §7:
- `landmarkMap.nodes`: ~7 central notes `{slug,title,domain}`. Good seeds: the 6 spine hubs already chosen —
  `Syntheses/Learning, Condensed`, `Systems/AI & Agentic Systems/Claude Fable`, `Dimensions/Self-Regulation`,
  `Concepts/Higher-Order Generativity vs Higher-Order Judgment`, `Systems/AI & Agentic Systems/Agentic Engineering, Condensed`, `Money/Money, Condensed`.
- `trails`: the real index/MOC notes as guided paths.
- `dimensions`: the five ICS learning-dimension hubs.
- `hubs`: the life/operating hubs (Health, Money, 中文, Minimalism, Condensed Notes…).
- `questions`: 2–3 real open questions from the journal/active-questions notes.
- `todaysRetrieval`: one technique note to feature.

## Definition of done
- [ ] `kb-astro/site-data/{audit,domains,links-report,redirects,home}.json` produced, matching CONTRACTS §7
- [ ] 100% domain coverage; no private content in any output
- [ ] Home curation uses only real vault notes
- [ ] Reports are review-lists (no unreviewed content edits)
