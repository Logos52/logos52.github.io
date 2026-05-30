---
title: "Home"
type: command-center
status: active
created: 2026-05-27
updated: 2026-05-27
cssclasses:
  - command-center
tags:
  - command-center
---

<div class="cc-head">
<p class="cc-eyebrow">Command center</p>
<h1 class="cc-title">Knowledge base</h1>
<p class="cc-date">Knowledge · life · direction</p>
<div class="cc-chips">
<span class="cc-chip">+ source</span>
<span class="cc-chip">+ note</span>
<span class="cc-chip">+ question</span>
</div>
</div>

## Active questions

![[Active Questions]]

## Decisions

```datacorejsx
return function RecentDecisions() {
  const items = dc.useQuery('@page and type = "decision"');
  const sorted = [...items].sort((a, b) => {
    const ad = String(a.value('created') || '');
    const bd = String(b.value('created') || '');
    return bd.localeCompare(ad);
  }).slice(0, 5);
  if (sorted.length === 0) {
    return <div class="cc-card"><p class="cc-meta" style={{margin:0}}>No decisions yet. Open <a class="internal-link" href="Decisions" data-href="Decisions">Decisions</a> to start.</p></div>;
  }
  return (
    <div class="cc-card">
      <ul class="decisions-mini">
        {sorted.map(d => {
          const title = String(d.value('title') || (d.$name || '').replace(/\.md$/, ''));
          return (
            <li class="decision-mini-item">
              <a class="internal-link decision-mini-link" href={d.$path} data-href={d.$path}>{title}</a>
              <span class="decision-mini-date">{String(d.value('created') || '')}</span>
            </li>
          );
        })}
      </ul>
      <a class="internal-link task-card-meta" href="Decisions" data-href="Decisions">Open the log →</a>
    </div>
  );
}
```

## Flow — unsorted inbox

![[flow.base]]

## Workbench — what's in motion

<p class="cc-meta">Drafts on the bench in <code>01 - Workbench/</code>. An empty table here means the bench is clear — nothing in motion, by design.</p>

![[workbench.base]]

## Direction — where I'm going

![[direction.base]]

## Skills & Kolbs

```datacorejsx
const COLUMNS = [
  {
    id: "Skill",
    value: s => (<a class="internal-link" href={s.$path} data-href={s.$path}>{(s.$name || "").replace(/\.md$/, "")}</a>)
  },
  {
    id: "Competency",
    value: s => {
      const c = String(s.value("competency") || "");
      return c.startsWith("CI") ? "CI" : c;
    }
  },
  {
    id: "Progress",
    value: s => {
      const cur = Number(s.value("current-level")) || 0;
      const target = Number(s.value("final-level")) || 0;
      const pct = target > 0 ? Math.max(0, Math.min(100, Math.round((cur / target) * 100))) : 0;
      const notches = Array.from({length: Math.max(0, target - 1)}, (_, k) => (
        <span class="notch" style={{ left: (((k + 1) / target) * 100) + "%" }}></span>
      ));
      return (<span class="skill-bar"><i style={{ width: pct + "%" }}></i>{notches}</span>);
    }
  }
];

return function SkillsTable() {
  const skills = dc.useQuery('@page and path("mg-kolbs") and exists(competency)');
  return <div class="cc-card"><dc.Table columns={COLUMNS} rows={skills} /></div>;
}
```

## Finances

```datacorejsx
// CSV loader is shared via tools/finance-helpers.md (also used by the Finances drill-down).
const { loadLatest } = await dc.require(dc.headerLink("tools/finance-helpers.md", "Helpers"));

return function FinanceCard() {
  const data = dc.useMemo(() => loadLatest(), []);
  if (!data || data.error) {
    return <div class="cc-card"><p style={{margin:0}}>{data ? data.error : 'Loading…'}</p></div>;
  }
  const purchases = data.items.filter(t => t._amount > 0);
  const byMonth = {};
  purchases.forEach(t => {
    if (!isNaN(t._date)) {
      const k = t._date.getFullYear() + '-' + String(t._date.getMonth() + 1).padStart(2, '0');
      byMonth[k] = (byMonth[k] || 0) + t._amount;
    }
  });
  const months = Object.keys(byMonth).sort();
  const values = months.map(m => byMonth[m]);
  const max = Math.max(...values, 1);

  // Per-day directional arrow vs prior month (normalizes for partial current month)
  let arrow = '';
  if (months.length >= 2) {
    const lk = months[months.length - 1], pk = months[months.length - 2];
    const [lY, lM] = lk.split('-').map(Number);
    const [pY, pM] = pk.split('-').map(Number);
    const today = new Date();
    const lastDays = (today.getFullYear() === lY && today.getMonth() + 1 === lM)
      ? today.getDate()
      : new Date(lY, lM, 0).getDate();
    const prevDays = new Date(pY, pM, 0).getDate();
    const lpd = byMonth[lk] / Math.max(1, lastDays);
    const ppd = byMonth[pk] / Math.max(1, prevDays);
    arrow = lpd > ppd * 1.1 ? '↑' : lpd < ppd * 0.9 ? '↓' : '→';
  }

  return (
    <div class="cc-card finance-card">
      <div class="finance-card-row">
        <span class="finance-card-title">Finances</span>
        {arrow && <span class="finance-card-arrow">{arrow}</span>}
      </div>
      <div class="finance-card-spark">
        {values.map(v => (
          <span class="spark-bar" style={{height: Math.max(2, (v / max) * 28) + "px"}}></span>
        ))}
      </div>
      <a class="internal-link finance-card-meta" href="Finances" data-href="Finances">Open the drill-down →</a>
    </div>
  );
}
```

## Tasks

```datacorejsx
return function Tasks() {
  const tasks = dc.useQuery('@task and $completed = false and childof(@page and path("00 Command Center"))');
  if (!tasks || tasks.length === 0) {
    return <div class="cc-card"><p class="cc-meta" style={{margin:0}}>No open tasks. Add some in <a class="internal-link" href="Tasks" data-href="Tasks">Tasks</a>.</p></div>;
  }
  return (
    <div class="cc-card">
      <ul class="task-list">
        {tasks.map(t => {
          const text = t.$text || t.$cleantext || t.$name || '';
          return (
            <li class="task-item">
              <span class="task-check">○</span>
              <span class="task-text">{text}</span>
            </li>
          );
        })}
      </ul>
      <a class="internal-link task-card-meta" href="Tasks" data-href="Tasks">Open task list →</a>
    </div>
  );
}
```

## System & nav

> [!nav]- Pages, reference, ops, templates
> **Pages** — [[index|Public home]] · [[about|About]] · [[notes/index|Notes index]] · [[log|Log]] · [[AGENTS|AGENTS]] · [[README|README]]
>
> **Reference** — [[wiki/Glossary|Glossary]] · [[wiki/Bibliography|Bibliography]] · [[wiki/Timeline|Timeline]]
>
> **Ops** — [[Implementation Plan]] · [[Open Questions]] · [[Changelog]] · [[Writing Standards]] · [[raw/Source Index|Source Index]]
>
> **Templates** — [[templates/Source Note|Source]] · [[templates/Concept Note|Concept]] · [[templates/Tool Note|Tool]] · [[templates/Kolbs Template|Kolbs]]
