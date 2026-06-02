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

Shared loaders for the finance views. Imported by both `00 Command Center/Home.md` (numberless finance card) and `00 Command Center/Finances.md` (rich drill-down) via `dc.require(dc.headerLink("tools/finance-helpers.md", "Helpers"))`. Single source of truth for the paths, the filename glob, and the parsers — change once, both views update.

Two loaders live here:
- `loadLatest()` — the legacy card CSV loader (float dollars). Still wired into both views.
- `loadSnapshot()` — the wnab→Obsidian snapshot reader (integer cents). Reads the single JSON file wnab's Settings "Export wnab snapshot" button writes. The Finances/Home rewrites that switch to this are gated on a real snapshot existing, so this is added alongside the CSV loader, not as a replacement yet.

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
    .filter(f => f.toLowerCase().endsWith('.csv') && f.startsWith('Card Transactions'))
    .map(f => ({ name: f, mtime: fs.statSync(path.join(folder, f)).mtimeMs }))
    .sort((a, b) => b.mtime - a.mtime);
  if (csvs.length === 0) return { error: 'No card CSV found.' };
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

// --- wnab snapshot loader (integer cents; see wnab docs/SNAPSHOT-SCHEMA.md) ---
//
// Single shared path constant. MUST match the wnab exporter, which writes to
// ~/Documents/Finances/wnab/snapshot.json (a sibling of the budget data).
// Change it in one place only — here and in the exporter.
function snapshotPath() {
  const os = require('os');
  const path = require('path');
  return path.join(os.homedir(), 'Documents', 'Finances', 'wnab', 'snapshot.json');
}

// Tolerant reader: returns { error } when the file is missing or unreadable;
// otherwise returns a snapshot object with every expected block defaulted so a
// view never throws on a partial/old file. Unknown fields pass through
// untouched (forward-compatible per the schema's reader obligations).
function loadSnapshot() {
  const fs = require('fs');
  const file = snapshotPath();

  let raw;
  try {
    raw = fs.readFileSync(file, 'utf-8');
  } catch (e) {
    return { error: 'No wnab snapshot found. Export one from wnab → Settings → "Export wnab snapshot".' };
  }

  let snap;
  try {
    snap = JSON.parse(raw);
  } catch (e) {
    return { error: 'wnab snapshot is not valid JSON.' };
  }
  if (!snap || typeof snap !== 'object') {
    return { error: 'wnab snapshot is empty or malformed.' };
  }

  // Default missing optional fields; keep any extra/unknown fields as-is.
  const safe = {
    schemaVersion: typeof snap.schemaVersion === 'number' ? snap.schemaVersion : 1,
    generatedAt: typeof snap.generatedAt === 'string' ? snap.generatedAt : null,
    generator: snap.generator || 'wnab-desktop',
    currency: snap.currency || 'USD',
    amountUnit: snap.amountUnit || 'cents',
    budgetName: snap.budgetName || '',
    month: snap.month || '',
    summary: snap.summary && typeof snap.summary === 'object' ? snap.summary : {},
    categoryGroups: Array.isArray(snap.categoryGroups) ? snap.categoryGroups : [],
    accounts: Array.isArray(snap.accounts) ? snap.accounts : [],
    ageOfMoney:
      snap.ageOfMoney && typeof snap.ageOfMoney === 'object'
        ? snap.ageOfMoney
        : { currentAge: 0, trend: 'stable', insufficientData: true },
    recentTransactions: Array.isArray(snap.recentTransactions) ? snap.recentTransactions : [],
    upcomingBills: Array.isArray(snap.upcomingBills) ? snap.upcomingBills : [],
    categoryHistory: Array.isArray(snap.categoryHistory) ? snap.categoryHistory : [],
  };

  // Staleness flag: amounts are integer cents — divide by 100 only at render.
  let stale = false;
  if (safe.generatedAt) {
    const ageMs = Date.now() - new Date(safe.generatedAt).getTime();
    stale = isFinite(ageMs) && ageMs > 24 * 60 * 60 * 1000; // older than ~24h
  }

  return { snapshot: { ...snap, ...safe }, file, generatedAt: safe.generatedAt, stale };
}

return { parseCSV, loadLatest, loadSnapshot, snapshotPath };
```
