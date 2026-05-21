# L2 — Curated Synthesis

This folder contains **L2** material: voice-polished, human-curated synthesis ready for review before promotion to `wiki/`.

L2 is where judgment enters. It should usually fuse the strongest parts of GPT, Grok, Opus, Hermes, or other L3 drafts into one usable version. L2 files should not be model-branded unless the model identity is the point.

## Folders

- `ready/` — polished drafts that are candidates for promotion to `wiki/`.
- `revise/` — useful drafts that need structural work before review.
- `processed/` — reviewed, superseded, rejected, or already-promoted L2 material kept as an audit trail.

## Naming

Use:

```text
YYYY-MM-DD-Short-Descriptive-Name-L2.md
```

For older imports or one-off briefs without dates, preserve the filename if renaming would break context.

## Workflow

1. Read the relevant L3 drafts from `outputs/L3/{GPT,Grok,Opus,Hermes}/`.
2. Choose the strongest base.
3. Incorporate useful elements from weaker versions.
4. Remove attribution drag, negative openings, meta-commentary, and template sameness.
5. Put the result in `ready/`, `revise/`, or `processed/`.
6. After L2 -> L1 promotion, update `notes/index.md`, `log.md`, and any relevant Journal entry.
