# H5 — Ledger strip (git-log parser)

Two mono lines on the homepage proving the system is alive. Build-time only; no client JS.

## 1. Parser: `tools/ledger.mjs`

Run via npm `prebuild` (and before `serve`). Reads `git log --since=60.days --pretty=format:'%as|%s' --name-only`, writes `quartz/components/ledgerData.json`.

Logic:
- Group commits by date. For each date, classify each commit by its conventional prefix (text before `:`; strip any `(scope)`): `wiki` → `wiki expansion` · `journal` → `journal entry` · `projects` → `projects` · `blog` → `essays` · `fix`/`chore`/`atlas` → `site maintenance` · anything else → `maintenance`.
- A date's label = the classification of the majority of its commits; count of distinct `.md` files touched = `pages touched`.
- Output: the **two most recent dates**, as `{ date, label, pages }`.
- If git history is unavailable (CI shallow clone), emit `[]` — the component renders nothing. Check whether the GitHub Actions workflow uses `fetch-depth: 0` (the CreatedModifiedDate git priority suggests it already does); if not, flag it in your report — do not edit the workflow yourself.

## 2. Component

In HomeLanding's ledger slot (H4), render from the JSON:

```
last pass  2026-06-11 · wiki expansion · 14 pages touched
previous   2026-06-09 · site maintenance · 3 pages touched
```

- JetBrains Mono 11px, line-height 1.9. `last pass` label in accent (`#c0a7ee` dark mode); its line in text-secondary. `previous` label and line in text-faded. Top and bottom 1px borders, no card.
- Singular/plural: `1 page touched`.

## Acceptance

- Home shows two ledger lines matching recent real commits; `npm run build` regenerates the JSON; empty data renders nothing (no empty borders).
- Commit: `atlas(H5): build-time git ledger strip on home`.
