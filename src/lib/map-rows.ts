/** Row shape for the /map/ filterable list (built at compile time). */
export type MapRow = {
  slug: string;
  title: string;
  url: string;
  source: string;
  domain: string;
  thumb?: string;
};