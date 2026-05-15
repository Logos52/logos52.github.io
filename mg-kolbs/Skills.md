# Skills

## Public View (Website)

This is a static example of the Skills database.

| Skill | Current Level | Final Level | Competency | Notes |
|-------|---------------|-------------|------------|-------|
| SIR | 5/10 | 7/10 | CC (low) | Focus on building consistency |
| Sleep | 3/10 | 9/10 | CC (high) | Major area of improvement |
| Deep Work | 6/10 | 8/10 | CC (high) | 90+ minute sessions |
| Focus | 7/10 | 9/10 | CC (low) | Distraction management |

## Live View (Obsidian)

```dataview
TABLE 
  file.link AS Skill,
  current-level AS "Current Level",
  final-level AS "Final Level",
  competency AS Competency,
  notes AS Notes
FROM "mg-kolbs/Skills" AND !#template
SORT file.name ASC
```

**How to use in Obsidian:**
- Create new skill pages inside the `mg-kolbs/Skills` folder.
- Add the properties `current-level`, `final-level`, `competency`, and `notes` in the frontmatter.
- The query above will automatically list all your skills with a direct link to each individual page.

---

**Back to MG & Kolbs** → [[MG & Kolbs]]