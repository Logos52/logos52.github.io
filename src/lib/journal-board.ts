import type { CollectionEntry } from 'astro:content';
import surfaceData from '../data/journal-surface.json';
import { journalEntriesFromNotes, type JournalEntry } from './journal';
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const THREADS = ['Tsumugu', 'Language study', 'Worldviews', 'Models and agents', 'Writing', 'Wiki and site', 'Other'];
const surface = surfaceData;
function change(date: string, repo: string, checked: string) {
  return { date, repo, checked };
}
function norm(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
}
function sharedHead(left: string, right: string): boolean {
  const n = Math.min(left.length, right.length, 28);
  return n >= 16 && left.slice(0, n) === right.slice(0, n);
}
function titlesMatch(a: string, b: string): boolean {
  const left = norm(a);
  const right = norm(b);
  if (!left || !right) return false;
  if (left === right || left.startsWith(right) || right.startsWith(left)) return true;
  return sharedHead(left, right);
}
function weekNumber(day: number): number {
  if (day <= 7) return 1;
  if (day <= 14) return 2;
  if (day <= 21) return 3;
  return 4;
}
function weekLabel(year: number, month: number, week: number): string {
  const last = new Date(Date.UTC(year, month, 0)).getUTCDate();
  const start = week === 1 ? 1 : week === 2 ? 8 : week === 3 ? 15 : 22;
  const end = week === 4 ? last : start + 6;
  return `W${week} · ${start}–${end} ${MONTHS[month - 1]}`;
}
function threadStudy(title: string): string {
  if (/chinese|mandarin|language|hán|han-|vietnamese|vocabular/.test(title)) return 'Language study';
  if (/worldview|political|exam|argument/.test(title)) return 'Worldviews';
  if (/grok|claude|agent|model|opus|fable|gpt|gemini/.test(title)) return 'Models and agents';
  return '';
}
function threadCraft(title: string): string {
  if (/writ|prose|voice/.test(title)) return 'Writing';
  if (/wiki|site|page|design|map|home/.test(title)) return 'Wiki and site';
  return 'Other';
}
function threadOf(title: string): string {
  const text = title.toLowerCase();
  if (text.includes('tsumugu')) return 'Tsumugu';
  return threadStudy(text) || threadCraft(text);
}
function dayOf(date: string): number {
  return Number(date.slice(8, 10));
}
export function monthParts(id: string) {
  const [yearText, monthText] = id.split('-');
  return { year: Number(yearText), month: Number(monthText) };
}
export function daysInMonth(year: number, month: number): number {
  return new Date(Date.UTC(year, month, 0)).getUTCDate();
}
export function firstWeekday(year: number, month: number): number {
  return new Date(Date.UTC(year, month - 1, 1)).getUTCDay();
}
function pushMonth(byMonth: Map<string, JournalEntry[]>, entry: JournalEntry) {
  const id = entry.date.slice(0, 7);
  const list = byMonth.get(id) ?? [];
  list.push(entry);
  byMonth.set(id, list);
}
function repoByMonth(notes: CollectionEntry<'notes'>[]) {
  const byMonth = new Map<string, JournalEntry[]>();
  for (const entry of journalEntriesFromNotes(notes)) pushMonth(byMonth, entry);
  return byMonth;
}
function monthIds(byMonth: ReturnType<typeof repoByMonth>) {
  const ids = new Set<string>();
  for (const month of surface) ids.add(month.id);
  for (const id of byMonth.keys()) ids.add(id);
  return [...ids].sort().reverse();
}
function surfaceMonth(id: string) {
  return surface.find((month) => month.id === id);
}
function weekInput(id: string, week: number, repo: JournalEntry[]) {
  return { id, week, repo, known: surfaceMonth(id), parts: monthParts(id) };
}
function exportWeek(input: ReturnType<typeof weekInput>) {
  return input.known?.weeks.find((week) => week.id === `${input.id}-w${input.week}`);
}
function trackOf(changes: ReturnType<typeof change>[]) {
  return { taken: new Set<number>(), changes };
}
function wantOf(day: number, title: string, taken: Set<number>) {
  return { day, title, taken };
}
function rowOpen(row: NonNullable<ReturnType<typeof exportWeek>>['rows'][number], index: number, want: ReturnType<typeof wantOf>) {
  if (want.taken.has(index)) return false;
  return row.day === want.day && titlesMatch(row.title, want.title);
}
function shown(entry: JournalEntry, day: number, title: string) {
  return { day, title, href: entry.href, date: entry.date };
}
function takeTitle(entry: JournalEntry, checked: string, track: ReturnType<typeof trackOf>) {
  if (checked !== entry.title) track.changes.push(change(entry.date, entry.title, checked));
  return checked;
}
function applyRow(entry: JournalEntry, rows: NonNullable<ReturnType<typeof exportWeek>>['rows'], track: ReturnType<typeof trackOf>) {
  const day = dayOf(entry.date);
  const hit = rows.findIndex((row, index) => rowOpen(row, index, wantOf(day, entry.title, track.taken)));
  if (hit < 0) return shown(entry, day, entry.title);
  track.taken.add(hit);
  return shown(entry, day, takeTitle(entry, rows[hit].title, track));
}
function byDay(a: ReturnType<typeof shown>, b: ReturnType<typeof shown>) {
  return b.day - a.day || a.title.localeCompare(b.title);
}
function shownEntries(bucket: JournalEntry[], rows: NonNullable<ReturnType<typeof exportWeek>>['rows'], track: ReturnType<typeof trackOf>) {
  const rowsShown = bucket.map((entry) => applyRow(entry, rows, track));
  rowsShown.sort(byDay);
  return rowsShown;
}
function weekEmpty(count: number, syn: string, news: number) {
  return count === 0 && syn === '' && news === 0;
}
function oneWeek(input: ReturnType<typeof weekInput>, track: ReturnType<typeof trackOf>) {
  const fromExport = exportWeek(input);
  const bucket = input.repo.filter((entry) => weekNumber(dayOf(entry.date)) === input.week);
  const entries = shownEntries(bucket, fromExport?.rows ?? [], track);
  const syn = fromExport?.syn ?? '';
  const news = fromExport?.news ?? [];
  if (weekEmpty(entries.length, syn, news.length)) return undefined;
  return {
    id: `${input.id}-w${input.week}`,
    label: fromExport?.label || weekLabel(input.parts.year, input.parts.month, input.week),
    syn,
    entries,
    news,
  };
}
function weeksFor(id: string, repo: JournalEntry[], changes: ReturnType<typeof change>[]) {
  const weeks: NonNullable<ReturnType<typeof oneWeek>>[] = [];
  for (let week = 4; week >= 1; week--) {
    const built = oneWeek(weekInput(id, week, repo), trackOf(changes));
    if (built) weeks.push(built);
  }
  return weeks;
}
function monthOf(id: string, repo: JournalEntry[], changes: ReturnType<typeof change>[]) {
  const known = surfaceMonth(id);
  const weeks = weeksFor(id, repo, changes);
  if (!weeks.length && !known?.syn) return undefined;
  const parts = monthParts(id);
  return {
    id,
    heading: known?.heading || `${MONTHS[parts.month - 1]} ${parts.year}`,
    syn: known?.syn ?? '',
    weeks,
  };
}
function flatten(months: NonNullable<ReturnType<typeof monthOf>>[]) {
  const flat: ReturnType<typeof shown>[] = [];
  for (const month of months) {
    for (const week of month.weeks) flat.push(...week.entries);
  }
  return flat;
}
function threadRow(name: string, entries: ReturnType<typeof flatten>) {
  return { name, entries };
}
function threadsOf(flat: ReturnType<typeof flatten>) {
  const threads: ReturnType<typeof threadRow>[] = [];
  for (const name of THREADS) {
    const entries = flat.filter((entry) => threadOf(entry.title) === name);
    if (entries.length) threads.push(threadRow(name, entries));
  }
  return threads;
}
export function buildJournalBoard(notes: CollectionEntry<'notes'>[]) {
  const byMonth = repoByMonth(notes);
  const changes: ReturnType<typeof change>[] = [];
  const months: NonNullable<ReturnType<typeof monthOf>>[] = [];
  for (const id of monthIds(byMonth)) {
    const month = monthOf(id, byMonth.get(id) ?? [], changes);
    if (month) months.push(month);
  }
  const flat = flatten(months);
  return { months, threads: threadsOf(flat), newest: flat.slice(0, 4), titleChanges: changes };
}
