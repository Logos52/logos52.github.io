import assert from 'node:assert/strict';
import { test } from 'node:test';
import { resolveDomain } from '../../src/lib/domain.ts';
import { slugifyFilePath } from '../../src/lib/slug.ts';

const agentsPage = slugifyFilePath(
  "wiki/Working with Agents/Give an agent a task without micromanaging it.md",
);
const agentsApostrophe = slugifyFilePath(
  "wiki/Working with Agents/Make a codebase agents can't easily mess up.md",
);

test('a Working with Agents slug resolves to ai', () => {
  assert.equal(agentsPage, 'wiki/Working-with-Agents/Give-an-agent-a-task-without-micromanaging-it');
  assert.equal(resolveDomain(agentsPage), 'ai');
  assert.equal(resolveDomain(agentsApostrophe), 'ai');
});

test('an explicit domain wins over the Working with Agents folder', () => {
  assert.equal(resolveDomain(agentsPage, 'world'), 'world');
  assert.equal(resolveDomain(agentsPage, 'craft'), 'craft');
});

test('legacy frontmatter domains map forward', () => {
  assert.equal(resolveDomain(agentsPage, 'agentic'), 'ai');
  assert.equal(resolveDomain(agentsPage, 'gen'), 'craft');
});

test('a non-domain explicit value falls through to the folder', () => {
  assert.equal(resolveDomain(agentsPage, 'not-a-domain'), 'ai');
  assert.equal(resolveDomain(agentsPage, ''), 'ai');
  assert.equal(resolveDomain(agentsPage, 3), 'ai');
});

test('the unslugified folder path resolves after space normalization', () => {
  assert.equal(resolveDomain('wiki/Working with Agents/example'), 'ai');
});

test('other folder fallbacks stay in place', () => {
  assert.equal(resolveDomain(slugifyFilePath('wiki/Systems/example.md')), 'ai');
  assert.equal(resolveDomain(slugifyFilePath('wiki/Language/example.md')), 'world');
  assert.equal(resolveDomain(slugifyFilePath('wiki/Money/example.md')), 'craft');
  assert.equal(resolveDomain(slugifyFilePath('wiki/Decision Making/example.md')), 'world');
  assert.equal(resolveDomain('notes/example'), 'craft');
});