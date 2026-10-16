import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { slugifyFilePath } from './lib/slug';

// A date in vault frontmatter may arrive as a YAML Date or a raw string — accept both, never coerce-fail.
const looseDate = z.union([z.string(), z.date()]).optional();

// `tags` (and `aliases`) may be a list, a single string, or absent.
const looseStringList = z
  .preprocess((v) => (Array.isArray(v) ? v : v == null ? [] : [v]), z.array(z.string()))
  .optional();

// Reader fields are what the site shows. Pipeline fields are kept so old notes still
// parse, and the note template does not render them. Unknown keys still pass through
// so one odd key cannot break the build. (CONTRACTS.md §1.)
const pipelineField = z.any().optional();

const noteFrontmatter = z
  .object({
    // Reader fields
    title: z.string().optional(),
    type: z.string().optional(),
    status: z.string().optional(),
    created: looseDate,
    updated: looseDate,
    tags: looseStringList,
    order: z.number().optional(),
    image: z.string().optional(),
    blurb: z.string().optional(),
    cardHref: z.string().optional(), // projects index: override the card link (e.g. a standalone HTML page in public/)
    draft: z.boolean().optional(),
    aliases: looseStringList,
    description: z.string().optional(),
    domain: z.enum(['learning', 'agentic', 'language', 'focus', 'mind', 'gen']).optional(),
    // Pipeline fields. Not rendered.
    method: pipelineField,
    'prose-model': pipelineField,
    'written-by': pipelineField,
    model: pipelineField,
    'source-count': pipelineField,
    'flag-reason': pipelineField,
    'last-audited': pipelineField,
    'merged-from': pipelineField,
    provenance: pipelineField,
    date: pipelineField,
    diagrams: pipelineField,
    stack: pipelineField,
    project: pipelineField,
    source: pipelineField,
    'ics-stage': pipelineField,
    links: pipelineField,
    hideFolderListing: pipelineField,
    'in-reply-to': pipelineField,
    'part-of': pipelineField,
    locked: pipelineField,
    sources: pipelineField,
    genre: pipelineField,
    depth: pipelineField,
    'edited-sections': pipelineField,
    'next-audit': pipelineField,
    openQuestions: pipelineField,
    addendum: pipelineField,
    'superseded-by': pipelineField,
    elsewhere: pipelineField,
    practicing: pipelineField,
    enableToc: pipelineField,
  })
  .passthrough();

const notes = defineCollection({
  // src/content/notes is a build-time copy of the PUBLIC vault subset, produced by
  // `scripts/copy-public-notes.mjs` (the publish guard). Private notes are never copied here.
  // generateId → Quartz-identical slugs (folder-based, 1:1 with the old URLs).
  loader: glob({ pattern: '**/*.md', base: './src/content/notes', generateId: ({ entry }) => slugifyFilePath(entry) }),
  schema: noteFrontmatter,
});

export const collections = { notes };
