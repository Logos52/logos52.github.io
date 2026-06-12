---
title: "KB standards batch committed; push must run host-side (Cowork sandbox can't auth)"
type: journal
created: 2026-06-12
updated: 2026-06-12
tags:
  - journal
  - llm-knowledge-base
  - decisions
  - ops
---

# Standards batch shipped to a commit; push blocked at the sandbox boundary (2026-06-12)

Picked up the LLM-Knowledge-Base redesign thread to push it to GitHub. The redesign's already-committed work was one commit ahead of `origin/main` (the 06-12 journal entries, `f7eb64c`); the open piece was the "review before they ship" batch from the prior session, still sitting uncommitted in the working tree. Reviewed it, committed it, and hit a hard boundary on the push.

## Decisions

**The review batch is sound — committed as `bd5adc9` (8 files, +326/−194).** Verified before committing rather than trusting the prior session's summary:

- `Writing Standards.md` reorder is content-preserving. Headings confirmed: the three High-Signal sections (Decision Writing, Wiki Pages, Condensed Pages) moved to the top as the primary standard; the May material moved below a new `## Supporting Detail — The May Standard (subordinate)` divider, original order intact. Word count 5,929 → 5,982 (+53 = the divider plus fixed self-references). Nothing deleted.
- `GROK.md` — authority order now stated explicitly (High-Signal sections lead; May material subordinate, loses conflicts). Consistent with the reorder.
- `PRD-Site-Aesthetic-Refresh.md` and `2026-05-30-site-full-send-wnab-aesthetic.md` — `status: superseded` with `superseded-by` pointers to the Living Atlas redesign; Lora + JetBrains Mono + amethyst noted as the surviving tokens.
- Four backfilled `decisions/` notes (engine Quartz-over-Astro, Living Atlas design, ledger demotion H7, High-Signal standards), all `type: decision` so the Command Center log picks them up.

**Wedge reviewed locally before sign-off.** Asked to see diffs first, reviewed in Obsidian, then authorised "commit all." No blind commit.

## Constraints discovered (ops — these will recur)

**Pushes can't originate from the Cowork sandbox.** `git push` to the HTTPS remote fails `could not read Username for 'https://github.com'` — the sandbox has no GitHub credentials and can't prompt. This is why the prior session's pushes/merges were done host-side too. **Standing rule: Cowork commits; Wedge pushes** from `/Users/n1/Projects/llm-knowledge-base` where his git auth lives.

**The sandbox mount forbids `unlink` inside `.git`.** Every git command that touches the index leaves an `index.lock` it can't delete, which then blocks the next command (`File exists`). Workaround that works: `mv` the lock out of the way (rename is permitted where unlink isn't), then run the target git op as the *only* git call in that shell invocation — no preceding `git status`, or it re-poisons the lock. Commit succeeded this way. Cosmetic residue left behind in `.git/`: `index.lock.stale`, `index.lock.old2`, `HEAD.lock.old` (0-byte; Wedge to `rm` host-side).

## Open / outstanding

- **Push still pending.** Two commits queued on `main` ahead of origin: `bd5adc9` (standards) + `f7eb64c` (journal). Wedge runs `git push origin main` to publish to the live Pages site. *(This entry will be a third commit once written.)*
- **Dangling-link risk, unresolved.** The new `superseded-by` pointers reference `journal/2026-06-11-living-atlas-and-decision-writing` and `PRDs/atlas/`. The prior session flagged that the Living Atlas PRD and the two parent redesign proposals cited in `PRDs/atlas/README.md` **may not exist in the repo**. Confirm these resolve before/after the rebuild, or the live site ships broken links.
- **Inherited threads still open** (from the redesign-review session, not closed here): Living Atlas PRD reconstruction handed to Grok/Composer; the `enableSPA` test is still unmeasured though the engine decision leans on it; auto-catalog PRD scheduled "after Atlas ships"; ~105MB worktree duplicates + four merged branches left un-pruned (never approved).
