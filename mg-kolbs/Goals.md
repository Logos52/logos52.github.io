# Goals

## Public View (Website)

This is a static example of the Goals database.

| Goal | Status | Current Level | Final Level | Last Evaluation | Notes |
|------|--------|---------------|-------------|-----------------|-------|
| Insert Goal title | Active | 4/10 | 8/10 | 2025-05-10 |  |
| Insert Goal title | Active | 6/10 | 9/10 | 2025-05-12 |  |
| Insert Goal title | Paused | 2/10 | 7/10 | 2025-04-28 |  |

## Live View (Obsidian)

```dataview
TABLE 
  status AS Status,
  current-level AS "Current Level",
  final-level AS "Final Level",
  last-evaluation AS "Last Evaluation",
  notes AS Notes
FROM "mg-kolbs/Goals" AND !#template
SORT file.name ASC
```

**How to use in Obsidian:**
- Create new goals in the `mg-kolbs/Goals` folder using the Goal Template below.
- Add the properties `status`, `current-level`, `final-level`, `last-evaluation`, and `notes`.
- The query will automatically list your active goals.

---

## Goal Template (How to Create a New Goal)

Use this structure when creating a new goal (copy the template below).

### Insert Goal Title

> [!NOTE] Checklist
> 
> - [ ] Make a relationship action plan  
>     - **Guidelines:**  
>         **Interior**  
>         - [ ] Create a list of goals and dreams  
>         - [ ] Write down the things that you like  
>         
>         **Exterior**  
>         - [ ] Ask others about your strengths and weaknesses  
>         - [ ] Find similarities between interior and exterior  
> 
> - [ ] **What is your general direction?**  
> - [ ] **Anchor the goal** (medium term)  
> - [ ] **Dissect the goal:** What skills, attributes, and mindsets are needed in the perfect person who achieves this?  
>     - [ ] Fill in the simple table below  
> - [ ] **Add** new skills/attributes/mindsets to the Skills database  
> - [ ] Where **am I** relative to where **I need** to be?  
>     - [ ] Fill in ‘current’ and ‘final’ level  
> - [ ] **Mindset planning** – How will you keep your mindset in check?  
> - [ ] Choose the most important skills and set **SMARTER performance goals**  
> - [ ] Create an accountability board of 4 people  
> - [ ] Create a list of potential mentors and connect with them  
> - [ ] Schedule reviews of this page  
> - [ ] Schedule Priority 0 reviews  
> 
> **Optional**  
> - [ ] Schedule 30 Day Plans

### Anchoring & Dissecting the Goal

**General direction:**

**Medium term anchored goal:**

#### What mindsets and attributes are needed? (Who achieves this?)

| Mindset / Attribute | Current | Final | Notes |
|---------------------|---------|-------|-------|
|                     |         |       |       |

#### What skills are needed? (How do they achieve this?)

| Skill | Current | Final | Notes |
|-------|---------|-------|-------|
|       |         |       |       |

#### Checklist processes required for this skill

- [ ] 

---

**Back to Goals** → [[Goals]]

**Back to MG & Kolbs** → [[MG & Kolbs]]