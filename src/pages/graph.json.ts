import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { buildGraph, type NoteInput } from '../lib/graph';
import { deriveTitle } from '../lib/note';

// Emits /graph.json (GraphData) at build time — consumed by the /graph island + local-graph rail.
export const GET: APIRoute = async () => {
  const notes = await getCollection('notes');
  const input: NoteInput[] = notes.map((n) => ({
    slug: n.id,
    title: deriveTitle(n.data, n.id, n.body),
    type: typeof n.data.type === 'string' ? n.data.type : '',
    body: n.body ?? '',
  }));
  return new Response(JSON.stringify(buildGraph(input)), {
    headers: { 'Content-Type': 'application/json' },
  });
};
