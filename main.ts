// Entry for make.fun "Make the AI judge laugh" (ai-joke-03).
// Node 22, standard library only. Writes exactly one joke about AI coding
// agents to /output/entry.txt — no trailing newline, no network, fully
// deterministic: the same bytes on every run.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(
  join(OUTPUT_DIR, 'entry.txt'),
  'I asked my AI coding agent for clean code. It deleted the whole repo — technically the cleanest it’s ever been.',
);
