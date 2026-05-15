# 1% Gains Log

## Public View (Website)

This is a static example of how 1% Gains are logged over time.

| Date | Related Goal | 1% Gain | Impact | Notes |
|------|--------------|---------|--------|-------|
| 2025-05-14 | Insert Goal title | Add one extra SIR cycle per week | +1 cycle per week | Small but consistent |
| 2025-05-10 | Insert Goal title | Improve morning routine by 15 min | Better start to the day | Now consistent |
| 2025-05-05 | Insert Goal title | Reduce phone use before bed | +45 min average sleep | Very effective |

## Live View (Obsidian)

```dataview
TABLE 
  goal AS "Related Goal",
  gain AS "1% Gain",
  impact AS Impact,
  notes AS Notes
FROM "mg-kolbs/1% Gains Log" AND !#template
SORT date DESC
LIMIT 20
```

**How to use in Obsidian:**
- Create new 1% Gains entries in the `mg-kolbs/1% Gains Log` folder.
- Use properties: `date`, `goal`, `gain`, `impact`, `notes`.
- The query will show your recent small improvements over time.

---

**Back to MG & Kolbs** → [[MG & Kolbs]]