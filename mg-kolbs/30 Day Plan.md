# 30 Day Plan

## Public View (Website)

This is a static example of the 30 Day Plan.

| Week | Focus Area | Key Actions | Status | Notes |
|------|------------|-------------|--------|-------|
| Week 1 | SIR Consistency | 3 full SIR cycles per week | In Progress |  |
| Week 2 | Sleep Hygiene | 9 hours sleep + no screens after 10pm | Not Started |  |
| Week 3 | Insert Focus |  |  |  |
| Week 4 | Review & Adjust |  |  |  |

## Live View (Obsidian)

```dataview
TABLE 
  week AS Week,
  focus AS "Focus Area",
  actions AS "Key Actions",
  status AS Status,
  notes AS Notes
FROM "mg-kolbs/30 Day Plan" AND !#template
SORT week ASC
```

**How to use in Obsidian:**
- Create new 30 Day Plans in the `mg-kolbs/30 Day Plan` folder.
- Use properties: `week`, `focus`, `actions`, `status`, `notes`.
- The query will show your active plans.

---

**Back to MG & Kolbs** → [[MG & Kolbs]]