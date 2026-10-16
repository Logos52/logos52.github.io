---
name: verify-wiki
description: After a wiki batch, run the kept-blocks check, frontmatter lint, the production build, then render one page in a 390px iframe, read the JS console, and save phone and laptop screenshots. Stop at the first failure.
---

# verify-wiki

Run this after a batch of wiki pages, before calling the batch done.

The ordered list below is the whole list. This skill does not edit `02 - System/Writing Standards.md`.

## Run

From the checkout you are checking, when this skill is in that checkout:

```sh
bash .cursor/skills/verify-wiki/run.sh
```

To check a different checkout while the skill stays where it is:

```sh
bash /path/to/repo/.cursor/skills/verify-wiki/run.sh /path/to/checkout
```

The script does not install npm packages. `npm ci` first when `node_modules` is missing. It does not kill a process already listening on port 4321. It does not drive https://logos52.github.io.

A step is a pass only when its command exits 0. The script prints `step N/6 PASS` after that exit and not before. On a non-zero exit it prints `FAILED at step N`, quotes the failing command's output, and does not start the next step.

## Checks, in order

### 1. Kept-blocks check

```sh
python3 scripts/kept-blocks-check.py
```

A kept block is the tail of a wiki page from the first of these headings through the end of the file:

- `## Sources`
- `## Related pages`
- `## Related`
- `## Links`
- `## Links into the knowledge base`
- `## See also`

Regeneration may replace the prose between the H1 and that heading. It may not change the H1, the heading, or anything after the heading. Frontmatter keys other than `updated`, `written-by`, `prose-model`, `method`, and `description` stay as they were on the skeleton. The frontmatter must parse as YAML. A page that differs from the skeleton must also carry non-empty `updated`, `written-by`, `method`, and `description`, which is the stamp `scripts/outline-splice.py` writes. A file still byte-identical to the skeleton was not regenerated; the hash is the proof the kept blocks did not move, and the stamp is not required.

The skeleton is git commit `6e20c69` on `outline-regen-2026-09-24`, the commit that stripped every wiki page to frontmatter, the H1, and these blocks. Pass `--base REF` or set `KEPT_BLOCKS_BASE` when a batch used a different skeleton. If that commit is not in the repo, step 1 fails and says so.

On a checkout that still has `scripts/outline-kept-check.py`, every changed page is handed to that script. `scripts/kept-blocks-check.py` repeats the same rules in-process only when the original file is absent.

This is not `scripts/source-words-check.py`. That script flags a video, a transcript, or an episode named outside the Sources block. Writing Standards lists that under "What never ships". The kept-blocks check is the survival of the blocks themselves.

The script reads `wiki/**/*.md` only. It refuses `raw/private/`.

### 2. Frontmatter lint

```sh
npm run lint:fm
```

### 3. Production build

```sh
npm run build
```

### 4. Render one page in a 390px-wide iframe

`npm run preview` on `127.0.0.1:4321`, then one published wiki note inside an iframe whose CSS box is 390 by 844. The note is the lexicographically first `wiki/**/*.md` that the publish denylist does not exclude. Set `VERIFY_PAGE` to a vault-relative path to render a different note.

The step fails when preview is not serving, the note is not HTTP 200, the iframe never loads, or the measured iframe box is not 390 by 844.

### 5. Read the JS console for errors

From the page inside that iframe, and from the same URL loaded at laptop size: `console.error`, uncaught exceptions, and browser log entries at error level. Any of those fails the step. Warnings are printed and do not fail it. Screenshot files are not written when this step fails.

### 6. Save phone and laptop screenshots

Phone: the 390×844 iframe viewport, `phone-390.png`. Laptop: the same note at 1280×800, `laptop-1280.png`.

The directory is `/opt/cursor/artifacts/verify-wiki/` when `/opt/cursor/artifacts` exists, otherwise `/tmp/verify-wiki/evidence/`. Override with `VERIFY_EVIDENCE_DIR`. `console.txt` records step 5. `page.txt` names the note.

## Stop rule

Do not start step N+1 after step N fails. The report names the step and the output that failed. Do not describe a later step as passed, failed, or skipped-with-a-green. It did not run.

## What this skill leaves alone

It does not edit Writing Standards. It does not merge. It does not replace `verify-logos52`. It uses one preview server, and it never kills a server this run did not start. Evidence stays after the preview process is stopped.
