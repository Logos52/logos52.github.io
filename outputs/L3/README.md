# L3 — Model First-Pass Drafts

This folder contains **L3** material: first-pass model synthesis from L4 raw sources before human curation and voice polishing.

## Folders

- `GPT/` — GPT first-pass drafts.
- `Grok/` — Grok first-pass drafts.
- `Opus/` — Opus-quality prose/synthesis drafts. Sonnet drafts are folded into this folder.
- `Hermes/` — local Hermes/agent first-pass drafts, usually from local workflow or maintenance runs.

Each model folder may contain a `processed/` subfolder for drafts that have already been compared, promoted, or superseded.

## Naming

Use the source title as the filename when comparing model versions:

```text
outputs/L3/GPT/How to Improve Your Focus Permanently.md
outputs/L3/Grok/How to Improve Your Focus Permanently.md
outputs/L3/Opus/How to Improve Your Focus Permanently.md
```

For Hermes/local-agent session drafts, date-prefixed names are fine:

```text
outputs/L3/Hermes/2026-05-22-Obsidian-Dashboard-L3.md
```

## Workflow

1. L4 raw sources live in `raw/inbox/`, `raw/sources/`, `raw/processed/`, `raw/private/`, and `raw/sessions/`.
2. First-pass model drafts go into the matching `outputs/L3/` model folder.
3. Compare L3 versions and create one curated L2 draft in `outputs/L2/`.
4. Promote only durable, edited synthesis into `wiki/`.

Do not put raw transcripts here. Do not put final wiki content here.
