const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export function monthName(month: number): string {
  return MONTHS[month - 1] ?? '';
}

function norm(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
}

function sharedHead(left: string, right: string): boolean {
  const n = Math.min(left.length, right.length, 28);
  return n >= 16 && left.slice(0, n) === right.slice(0, n);
}

export function titlesMatch(a: string, b: string): boolean {
  const left = norm(a);
  const right = norm(b);
  if (!left || !right) return false;
  if (left === right || left.startsWith(right) || right.startsWith(left)) return true;
  return sharedHead(left, right);
}

export function weekNumber(day: number): number {
  if (day <= 7) return 1;
  if (day <= 14) return 2;
  if (day <= 21) return 3;
  return 4;
}

export function weekLabel(year: number, month: number, week: number): string {
  const last = new Date(Date.UTC(year, month, 0)).getUTCDate();
  const start = week === 1 ? 1 : week === 2 ? 8 : week === 3 ? 15 : 22;
  const end = week === 4 ? last : start + 6;
  return `W${week} · ${start}–${end} ${monthName(month)}`;
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

export function threadOf(title: string): string {
  const text = title.toLowerCase();
  if (text.includes('tsumugu')) return 'Tsumugu';
  return threadStudy(text) || threadCraft(text);
}
