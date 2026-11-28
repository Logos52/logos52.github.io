import type { CollectionEntry } from 'astro:content';
import surfaceData from '../data/journal-surface.json';
import { journalEntriesFromNotes, type JournalEntry } from './journal';

export type SurfaceNews = {
  day: number;
  title: string;
  source: string;
  href: string;
};

export type SurfaceRow = {
  day: number;
  title: string;
  linked?: boolean;
};

export type SurfaceWeek = {
  id: string;
  label: string;
  syn: string;
  rows: SurfaceRow[];
  news: SurfaceNews[];
};

export type SurfaceMonth = {
  id: string;
  heading: string;
  syn: string;
  weeks: SurfaceWeek[];
};

export type BoardEntry = {
  day: number;
  title: string;
  href: string;
  date: string;
};

export type BoardWeek = {
  id: string;
  label: string;
  syn: string;
  entries: BoardEntry[];
  news: SurfaceNews[];
};

export type BoardMonth = {
  id: string;
  heading: string;
  syn: string;
  weeks: BoardWeek[];
};

export type BoardThread = {
  name: string;
  entries: BoardEntry[];
};

export type TitleChange = {
  date: string;
  repo: string;
  checked: string;
};

export type MonthParts = {
  year: number;
  month: number;
};

export type JournalBoard = {
  months: BoardMonth[];
  threads: BoardThread[];
  newest: BoardEntry[];
  titleChanges: TitleChange[];
};

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const THREADS = ['Tsumugu', 'Language study', 'Worldviews', 'Models and agents', 'Writing', 'Wiki and site', 'Other'] as const;

const surface = surfaceData as SurfaceMonth[];

function norm(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
}

function titlesMatch(a: string, b: string): boolean {
  const left = norm(a);
  const right = norm(b);
  if (!left || !right) return false;
  if (left === right || left.startsWith(right) || right.startsWith(left)) return true;
  const n = Math.min(left.length, right.length, 28);
  return n >= 16 && left.slice(0, n) === right.slice(0, n);
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

function threadOf(title: string): string {
  const t = title.toLowerCase();
  if (t.includes('tsumugu')) return 'Tsumugu';
  if (/chinese|mandarin|language|hán|han-|vietnamese|vocabular/.test(t)) return 'Language study';
  if (/worldview|political|exam|argument/.test(t)) return 'Worldviews';
  if (/grok|claude|agent|model|opus|fable|gpt|gemini/.test(t)) return 'Models and agents';
  if (/writ|prose|voice/.test(t)) return 'Writing';
  if (/wiki|site|page|design|map|home/.test(t)) return 'Wiki and site';
  return 'Other';
}

export function buildJournalBoard(notes: CollectionEntry<'notes'>[]): JournalBoard {
  const entries = journalEntriesFromNotes(notes);
  const byMonth = new Map<string, JournalEntry[]>();
  for (const entry of entries) {
    const id = entry.date.slice(0, 7);
    const list = byMonth.get(id) ?? [];
    list.push(entry);
    byMonth.set(id, list);
  }
  const surfaceById = new Map(surface.map((m) => [m.id, m]));
  const ids = [...new Set([...surface.map((m) => m.id), ...byMonth.keys()])].sort().reverse();
  const titleChanges: TitleChange[] = [];
  const months: BoardMonth[] = [];

  for (const id of ids) {
    const [yearText, monthText] = id.split('-');
    const year = Number(yearText);
    const month = Number(monthText);
    const known = surfaceById.get(id);
    const repo = byMonth.get(id) ?? [];
    const used = new Set<string>();
    const weeks: BoardWeek[] = [];
    for (let week = 4; week >= 1; week--) {
      const wid = `${id}-w${week}`;
      const fromExport = known?.weeks.find((w) => w.id === wid);
      const bucket = repo.filter((e) => weekNumber(Number(e.date.slice(8, 10))) === week);
      const rows = fromExport?.rows ?? [];
      const taken = new Set<number>();
      const shown: BoardEntry[] = bucket.map((entry) => {
        const day = Number(entry.date.slice(8, 10));
        let title = entry.title;
        const hit = rows.findIndex((row, index) => !taken.has(index) && row.day === day && titlesMatch(row.title, entry.title));
        if (hit >= 0) {
          taken.add(hit);
          const checked = rows[hit].title;
          if (checked !== entry.title) titleChanges.push({ date: entry.date, repo: entry.title, checked });
          title = checked;
        }
        used.add(entry.slug);
        return { day, title, href: entry.href, date: entry.date };
      });
      shown.sort((a, b) => b.day - a.day || a.title.localeCompare(b.title));
      const syn = fromExport?.syn ?? '';
      const news = fromExport?.news ?? [];
      if (!shown.length && !syn && !news.length) continue;
      weeks.push({
        id: wid,
        label: fromExport?.label || weekLabel(year, month, week),
        syn,
        entries: shown,
        news,
      });
    }
    if (!weeks.length && !known?.syn) continue;
    months.push({
      id,
      heading: known?.heading || `${MONTHS[month - 1]} ${year}`,
      syn: known?.syn ?? '',
      weeks,
    });
  }

  const flat: BoardEntry[] = [];
  for (const month of months) for (const week of month.weeks) flat.push(...week.entries);
  const threads: BoardThread[] = THREADS.map((name) => ({
    name,
    entries: flat.filter((e) => threadOf(e.title) === name),
  })).filter((t) => t.entries.length);
  return { months, threads, newest: flat.slice(0, 4), titleChanges };
}

export function monthParts(id: string): MonthParts {
  const [yearText, monthText] = id.split('-');
  return { year: Number(yearText), month: Number(monthText) };
}

export function daysInMonth(year: number, month: number): number {
  return new Date(Date.UTC(year, month, 0)).getUTCDate();
}

export function firstWeekday(year: number, month: number): number {
  return new Date(Date.UTC(year, month - 1, 1)).getUTCDay();
}
