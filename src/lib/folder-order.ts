function hubRank(type: unknown): number {
  return typeof type === 'string' && type.trim() === 'hub' ? 0 : 1;
}

export function byHubThen<T>(
  titleOrder: (a: T, b: T) => number,
  typeOf: (item: T) => unknown,
): (a: T, b: T) => number {
  return (a, b) => hubRank(typeOf(a)) - hubRank(typeOf(b)) || titleOrder(a, b);
}
