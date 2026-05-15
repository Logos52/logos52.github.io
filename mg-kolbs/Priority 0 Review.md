# Priority 0 Review

## Public View (Website)

This is a static example of a Priority 0 Review.

| Date | Energy | Focus | Top 3 Priorities | Blockers | Wins | Next Priority 0 Focus |
|------|--------|-------|------------------|----------|------|-----------------------|
| 2025-05-12 | 8/10 | High | Finish Tasks page, Review Kolbs, Plan next 30 days | Admin tasks | 3 major tasks done | Protect deep work time |
| 2025-05-05 | 6/10 | Medium | Sleep experiment, SIR consistency | Low energy | Better sleep | Morning routine |

## Live View (Obsidian)

```dataview
TABLE 
  energy AS Energy,
  focus AS Focus,
  priorities AS "Top 3 Priorities",
  blockers AS Blockers,
  wins AS Wins,
  next AS "Next Priority 0 Focus"
FROM "mg-kolbs/Priority 0 Review" AND !#template
SORT date DESC
LIMIT 10
```

**How to use in Obsidian:**
- Create new Priority 0 Reviews in the `mg-kolbs/Priority 0 Review` folder.
- Use properties: `date`, `energy`, `focus`, `priorities`, `blockers`, `wins`, `next`.
- The query will show your recent high-level reviews.

---

**Back to MG & Kolbs** → [[MG & Kolbs]]