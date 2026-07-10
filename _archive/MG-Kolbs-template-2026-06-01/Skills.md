---
type: database
---
# Skills

```base
filters:
  and:
    - file.inFolder("pans-mg-kolbs-template/Skills")
views:
  - type: table
    name: Current
    filters:
      and:
        - status == "Active"
    order:
      - file.name
      - status
      - current-level
      - final-level
      - competency
      - final-level-metrics
    columnSize:
      note.current-level: 127
      note.final-level: 124
  - type: table
    name: All
    order:
      - status
      - file.name
      - current-level
      - final-level
      - competency

```
