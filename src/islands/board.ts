/** Pack a whiteboard list into equal columns, shortest column first. NDC's whiteboard script. */
export function packBoard(list: HTMLElement): () => void {
  const place = () => {
    const items = [...list.querySelectorAll<HTMLElement>('[data-board-item]')];
    if (!items.length) return;
    list.classList.remove('is-packed');
    items.forEach((item) => {
      item.style.position = '';
      item.style.width = '';
      item.style.top = '';
      item.style.left = '';
    });
    list.style.height = '';
    const cols = getComputedStyle(list).gridTemplateColumns.split(' ').filter(Boolean).length || 1;
    const gap = parseFloat(getComputedStyle(list).columnGap) || 0;
    const rowGap = parseFloat(getComputedStyle(list).rowGap) || 0;
    const width = (list.clientWidth - gap * (cols - 1)) / cols;
    const heights = Array(cols).fill(0);
    list.classList.add('is-packed');
    items.forEach((item) => {
      const col = heights.indexOf(Math.min(...heights));
      const top = heights[col] > 0 ? heights[col] + rowGap : 0;
      item.style.width = `${width}px`;
      item.style.top = `${top}px`;
      item.style.left = `${(width + gap) * col}px`;
      heights[col] = top + item.offsetHeight;
    });
    list.style.height = `${Math.max(...heights)}px`;
  };
  place();
  list.querySelectorAll('img').forEach((img) => {
    if (!img.complete) img.addEventListener('load', place, { once: true });
  });
  window.addEventListener('resize', place);
  return () => window.removeEventListener('resize', place);
}
