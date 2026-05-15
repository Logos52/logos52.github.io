# 1% Gains

## Public View (Website)

This is a static example of how 1% Gains are tracked.

| Date | Related Goal | 1% Gain | Status | Notes |
|------|--------------|---------|--------|-------|
| 2025-05-14 | Insert Goal title | Add one extra SIR cycle per week | Active |  |
| 2025-05-10 | Insert Goal title | Improve morning routine by 15 min | Completed | Now consistent |
| 2025-05-05 | Insert Goal title | Reduce phone use before bed | In Progress |  |

## Live View (Obsidian)

```dataview
TABLE 
  goal AS "Related Goal",
  gain AS "1% Gain",
  status AS Status,
  notes AS Notes
FROM "mg-kolbs/1% Gains" AND !#template
SORT date DESC
LIMIT 15
```

**How to use in Obsidian:**
- Create new 1% Gains entries in the `mg-kolbs/1% Gains` folder.
- Use properties: `date`, `goal`, `gain`, `status`, `notes`.
- The query will show your recent small improvements.

---

**Back to MG & Kolbs** → [[MG & Kolbs]]