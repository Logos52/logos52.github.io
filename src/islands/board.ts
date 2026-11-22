function columnCount(list: HTMLElement): number {
  const raw = getComputedStyle(list).gridTemplateColumns.split(' ').filter(Boolean);
  return raw.length || 1;
}

function clearItem(item: HTMLElement): void {
  item.style.position = '';
  item.style.width = '';
  item.style.top = '';
  item.style.left = '';
}

function shortest(heights: number[]): number {
  let col = 0;
  for (let i = 1; i < heights.length; i += 1) {
    if ((heights[i] ?? 0) < (heights[col] ?? 0)) col = i;
  }
  return col;
}

function place(list: HTMLElement): void {
  const items = [...list.querySelectorAll<HTMLElement>('[data-board-item]')];
  if (!items.length) return;
  list.classList.remove('is-packed');
  items.forEach(clearItem);
  list.style.height = '';
  const cols = columnCount(list);
  const gap = parseFloat(getComputedStyle(list).columnGap) || 0;
  const rowGap = parseFloat(getComputedStyle(list).rowGap) || 0;
  const width = (list.clientWidth - gap * (cols - 1)) / cols;
  const heights: number[] = Array.from({ length: cols }, () => 0);
  list.classList.add('is-packed');
  items.forEach((item) => {
    const col = shortest(heights);
    const top = (heights[col] ?? 0) > 0 ? (heights[col] ?? 0) + rowGap : 0;
    item.style.width = `${width}px`;
    item.style.top = `${top}px`;
    item.style.left = `${(width + gap) * col}px`;
    heights[col] = top + item.offsetHeight;
  });
  const tallest = heights.reduce((max, value) => (value > max ? value : max), 0);
  list.style.height = `${tallest}px`;
}

export function packBoard(list: HTMLElement): () => void {
  place(list);
  list.querySelectorAll('img').forEach((img) => {
    if (!img.complete) img.addEventListener('load', () => place(list), { once: true });
  });
  const onResize = () => place(list);
  window.addEventListener('resize', onResize);
  return () => window.removeEventListener('resize', onResize);
}
