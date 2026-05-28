---
title: "Finance helpers"
type: helpers
status: active
created: 2026-05-27
updated: 2026-05-27
tags:
  - tools
  - finances
  - datacore
---

# Helpers

Shared CSV loader for the Apple Card finance views. Imported by both `00 Command Center/Home.md` (numberless finance card) and `00 Command Center/Finances.md` (rich drill-down) via `dc.require(dc.headerLink("tools/finance-helpers.md", "Helpers"))`. Single source of truth for the path, the filename glob, and the parser — change once, both views update.

```datacorejsx
function parseCSV(text) {
  const rows = [];
  let cur = "", row = [], inQ = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQ) {
      if (c === '"' && text[i + 1] === '"') { cur += '"'; i++; }
      else if (c === '"') inQ = false;
      else cur += c;
    } else {
      if (c === '"') inQ = true;
      else if (c === ',') { row.push(cur); cur = ""; }
      else if (c === '\n' || c === '\r') {
        if (cur !== "" || row.length > 0) { row.push(cur); rows.push(row); }
        row = []; cur = "";
        if (c === '\r' && text[i + 1] === '\n') i++;
      } else cur += c;
    }
  }
  if (cur !== "" || row.length > 0) { row.push(cur); rows.push(row); }
  return rows;
}

function loadLatest() {
  const fs = require('fs');
  const os = require('os');
  const path = require('path');
  const folder = path.join(os.homedir(), 'Documents', 'Finances');
  let entries;
  try { entries = fs.readdirSync(folder); }
  catch (e) { return { error: 'No finances folder found.' }; }
  const csvs = entries
    .filter(f => f.toLowerCase().endsWith('.csv') && f.startsWith('Apple Card Transactions'))
    .map(f => ({ name: f, mtime: fs.statSync(path.join(folder, f)).mtimeMs }))
    .sort((a, b) => b.mtime - a.mtime);
  if (csvs.length === 0) return { error: 'No Apple Card CSV found.' };
  const text = fs.readFileSync(path.join(folder, csvs[0].name), 'utf-8');
  const rows = parseCSV(text).filter(r => r.some(c => c && c.length));
  if (rows.length < 2) return { error: 'CSV appears empty.' };
  const headers = rows[0].map(h => h.trim());
  const items = rows.slice(1).map(r => {
    const o = {};
    headers.forEach((h, i) => o[h] = (r[i] || '').trim());
    o._amount = parseFloat(o['Amount (USD)']) || 0;
    o._date = new Date(o['Transaction Date']);
    return o;
  });
  return { items, file: csvs[0].name };
}

return { parseCSV, loadLatest };
```
