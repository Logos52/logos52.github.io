# Evaluation

## Public View (Website)

This is a static example of how Evaluations are done.

### How to Evaluate

1. Recheck the target level (what is needed for 10/10) and stage of learning (CI, CC, UC)
2. Current rating /10
3. Justify this rating as objectively as possible. **Why do you think you have improved?**
4. Find the 1% gains for next week

### Example Evaluation

| Date | Related Goal | Rating | Justification | 1% Gain for Next Week |
|------|--------------|--------|---------------|------------------------|
| 2025-05-12 | Insert Goal title | 7/10 | Improved consistency in morning routine | Add one extra SIR cycle per week |

## Live View (Obsidian)

```dataview
TABLE 
  goal AS "Related Goal",
  rating AS Rating,
  justification AS Justification,
  one-percent AS "1% Gain for Next Week"
FROM "mg-kolbs/Evaluation" AND !#template
SORT date DESC
LIMIT 10
```

**How to use in Obsidian:**
- Create new Evaluation entries in the `mg-kolbs/Evaluation` folder.
- Use properties: `date`, `goal`, `rating`, `justification`, `one-percent`.
- The query will show your recent evaluations.

---

**Back to MG & Kolbs** → [[MG & Kolbs]]