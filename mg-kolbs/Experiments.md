# Experiments

## Public View (Website)

This is a static example of how Experiments (COBEs) are tracked.

| Experiment | Related Goal / Process | Hypothesis | Status | Result | Notes |
|------------|------------------------|------------|--------|--------|-------|
| Test 45-min work blocks | Deep Work | Shorter blocks will improve consistency | In Progress | - |  |
| No screens after 10pm | Sleep | Better sleep quality | Completed | +1.5 hours average sleep | Very effective |
| Insert Experiment |  |  |  |  |  |

## Live View (Obsidian)

```dataview
TABLE 
  goal AS "Related Goal / Process",
  hypothesis AS Hypothesis,
  status AS Status,
  result AS Result,
  notes AS Notes
FROM "mg-kolbs/Experiments" AND !#template
SORT date DESC
LIMIT 15
```

**How to use in Obsidian:**
- Create new experiments in the `mg-kolbs/Experiments` folder.
- Use properties: `date`, `goal`, `hypothesis`, `status`, `result`, `notes`.
- The query will show your active and past experiments.

---

**Back to MG & Kolbs** → [[MG & Kolbs]]