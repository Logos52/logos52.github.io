# Goal Tracking

## Public View (Website)

This is a static example of the Goal Tracking database.

| Date | Type | Related Goal | Rating | 1% Gains | Notes |
|------|------|--------------|--------|----------|-------|
| 2025-05-12 | Weekly Evaluation | Insert Goal title | 7/10 | Improve morning routine | Good progress on consistency |
| 2025-05-05 | 1% Gains Review | Insert Goal title | 6/10 | Add 1 extra SIR cycle per week | Small but steady improvement |
| 2025-04-28 | Weekly Evaluation | Insert Goal title | 5/10 | - | Focus area identified |

## Live View (Obsidian)

```dataview
TABLE 
  type AS Type,
  goal AS "Related Goal",
  rating AS Rating,
  one-percent-gains AS "1% Gains",
  notes AS Notes
FROM "mg-kolbs/Goal Tracking" AND !#template
SORT date DESC
LIMIT 15
```

**How to use in Obsidian:**
- Create new entries in the `mg-kolbs/Goal Tracking` folder (or use a database).
- Use properties: `date`, `type` (Weekly Evaluation / 1% Gains Review), `goal`, `rating`, `one-percent-gains`, `notes`.
- The query above will automatically show your recent tracking.

---

**Back to MG & Kolbs** → [[MG & Kolbs]]