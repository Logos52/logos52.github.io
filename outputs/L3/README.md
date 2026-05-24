# L3 — Legacy Model First-Pass Draft Archive

This folder is a legacy/archive area for older **L3** material: first-pass model synthesis from L4 raw sources before human curation and voice polishing.

New active synthesis should happen in `workbench/`, not here.

## Folders

- `GPT/` — GPT first-pass drafts.
- `Grok/` — Grok first-pass drafts.
- `Opus/` — Opus-quality prose/synthesis drafts. Sonnet drafts are folded into this folder.
- `Hermes/` — local Hermes/agent first-pass drafts, usually from local workflow or maintenance runs.

Each model folder may contain a `processed/` subfolder for drafts that have already been compared, promoted, or superseded.

## Naming

Use model-first filenames in `workbench/` when comparing active model versions:

```text
workbench/GPT - How to Improve Your Focus Permanently.md
workbench/Grok - How to Improve Your Focus Permanently.md
workbench/Opus - How to Improve Your Focus Permanently.md
```

For Hermes/local-agent session drafts, date-prefixed names are fine:

```text
workbench/Hermes - Obsidian Dashboard.md
```

## Workflow

1. L4 raw sources live in `raw/inbox/`, `raw/sources/`, `raw/processed/`, `raw/private/`, and `raw/sessions/`.
2. First-pass model drafts go into `workbench/`.
3. Compare L3 versions and create one curated L2 draft in `workbench/`.
4. Promote only durable, edited synthesis into `wiki/`.

Do not put raw transcripts here. Do not put final wiki content here.
