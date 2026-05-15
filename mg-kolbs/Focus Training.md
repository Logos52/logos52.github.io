# Focus Training

## Public View (Website)

This is a static example of how Focus Training sessions are tracked.

| Date | Duration | Focus Score | Technique Used | Notes |
|------|----------|-------------|----------------|-------|
| 2025-05-14 | 25 min | 8/10 | 5-4-3-2-1 grounding | Good morning session |
| 2025-05-12 | 20 min | 6/10 | Pomodoro (short) | Interrupted by notification |
| 2025-05-10 | 30 min | 9/10 | Deep work ritual | Best session this week |

## Live View (Obsidian)

```dataview
TABLE 
  duration AS Duration,
  score AS "Focus Score",
  technique AS "Technique Used",
  notes AS Notes
FROM "mg-kolbs/Focus Training" AND !#template
SORT date DESC
LIMIT 15
```

**How to use in Obsidian:**
- Create new Focus Training entries in the `mg-kolbs/Focus Training` folder.
- Use properties: `date`, `duration`, `score`, `technique`, `notes`.
- The query will show your recent focus training sessions.

---

**Back to MG & Kolbs** → [[MG & Kolbs]]