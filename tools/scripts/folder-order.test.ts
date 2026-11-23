import assert from 'node:assert/strict';
import { test } from 'node:test';
import { byHubThen } from '../../src/lib/folder-order.ts';

function titles(pages) {
  return [...pages]
    .sort(byHubThen((a, b) => a.title.localeCompare(b.title), (page) => page.type))
    .map((page) => page.title);
}

test('a hub sorts ahead of other types', () => {
  assert.deepEqual(
    titles([
      { title: 'Stakes Without Mortality', type: 'concept' },
      { title: 'Story Craft', type: 'hub' },
      { title: 'Diagnosing a Character', type: 'practice' },
    ]),
    ['Story Craft', 'Diagnosing a Character', 'Stakes Without Mortality'],
  );
});

test('topic hub stays in title order', () => {
  assert.deepEqual(
    titles([
      { title: 'Worldviews and the Political Order', type: 'topic hub' },
      { title: 'Group 1', type: 'concept' },
      { title: 'Per Capita', type: 'practice' },
    ]),
    ['Group 1', 'Per Capita', 'Worldviews and the Political Order'],
  );
});

test('hubs keep title order among themselves', () => {
  assert.deepEqual(
    titles([
      { title: 'Mindset', type: 'hub' },
      { title: 'Deep Processing', type: 'hub' },
      { title: 'Retrieval', type: 'concept' },
      { title: 'Dimensions of Learning', type: 'hub' },
    ]),
    ['Deep Processing', 'Dimensions of Learning', 'Mindset', 'Retrieval'],
  );
});
