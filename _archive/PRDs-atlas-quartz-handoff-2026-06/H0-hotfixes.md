# H0 — Catalog hotfixes (content only, no code)

**File:** `notes/index.md` only. These are verified defects on the live site.

## Tasks

1. **Delete stale duplicate rows.** These three pages each appear twice in the Full Catalog tables — once at an old path that no longer exists, once at the current `wiki/Dimensions/Self-Regulation/` path. Delete the row whose link path does NOT exist on disk; keep the Self-Regulation row:
   - `Building the Radar` — delete the row linking `wiki/Techniques/Building the Radar` (in the "Metacognition and learning" table).
   - `The Technique Is Only as Good as the Thinking It Produces` — delete the row linking `wiki/Concepts/The Technique Is Only as Good as the Thinking It Produces`.
   - `Metacognition - The Control Layer` — delete the row linking `wiki/Dimensions/Self-Regulation/Metacognition - The Control Layer` **only if duplicated**; exactly one row for this page must remain. Verify each kept link target exists on disk before committing.

2. **Delete the dead row.** Remove the `Writing Standards` row (links `00 Command Center/Writing Standards` — file doesn't exist and the folder is unpublished).

3. **Repair three truncated summaries.** These rows end mid-sentence. Replace each Summary cell with the `description` field from the target page's own frontmatter (read the target file; if its description is also missing/truncated, report back instead of writing your own):
   - `The 30-Day Plan` (ends "…attribute-based performance goals")
   - `Building a Schedule That Survives` (ends "…failure modes (n")
   - `Aim-Shoot-Skin for Language Learning` (ends "…target the just-not")

4. **Sweep for more of the same.** Check every remaining Summary cell for mid-word truncation and every link path against disk. Fix truncations per rule 3; report (don't guess) any other dead paths found.

5. **Leave alone:** the two `Suicidal Empathy` rows (Books + Concepts) — pending a merge/rename decision from Wedge.

## Acceptance

- Each catalog page appears exactly once; every link target exists on disk; no summary ends mid-word.
- `npm run build` passes. Commit: `atlas(H0): fix catalog dead links, duplicate rows, truncated summaries`.
