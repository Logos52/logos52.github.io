export function byHubThen<T extends { type?: unknown }>(
  titleOrder: (a: T, b: T) => number,
): (a: T, b: T) => number {
  const rank = (item: T) => (typeof item.type === 'string' && item.type.trim() === 'hub' ? 0 : 1);
  return (a, b) => rank(a) - rank(b) || titleOrder(a, b);
}
