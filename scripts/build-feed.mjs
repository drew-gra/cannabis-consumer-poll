// Builds feed.json — a single aggregate of every poll in polls/.
//
// Why: consumers (e.g. the breadandlaw.com microsite) can load the entire poll
// set in ONE request to raw.githubusercontent.com (a CDN) instead of calling
// the GitHub contents API, which is unauthenticated-rate-limited to 60 req/hr
// per IP and unreliable from shared serverless hosts.
//
// Deterministic: no timestamps, sorted newest-first by the date in the
// filename — so feed.json only changes when the polls do (no churn commits).
//
// Run from the repo root:  node scripts/build-feed.mjs

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const POLLS_DIR = 'polls';
const OUT = 'feed.json';

function dateKey(filename) {
  const m = filename.match(/poll_json_(\d{4})_(\d{2})_(\d{2})/);
  return m ? `${m[1]}${m[2]}${m[3]}` : '00000000';
}

const files = readdirSync(POLLS_DIR)
  .filter((f) => f.startsWith('poll_json') && f.endsWith('.json'))
  .sort((a, b) => dateKey(b).localeCompare(dateKey(a))); // newest first

const polls = files.map((filename) => ({
  filename,
  data: JSON.parse(readFileSync(join(POLLS_DIR, filename), 'utf8')),
}));

writeFileSync(OUT, JSON.stringify({ polls }) + '\n');
console.log(`Wrote ${OUT}: ${polls.length} polls (newest: ${polls[0]?.filename})`);
