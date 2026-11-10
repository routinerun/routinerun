// Checks every catalogue file in the repository, the way the app would refuse it.
// Run by .github/workflows/validate.yml; `node .github/scripts/validate.mjs` locally.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
// The same checks the relay makes and the app's own form describes, from the package here.
import { problems as routineProblems } from '../../packages/form/src/index.js';
import { problemsWithSkin } from '../../packages/form/src/skin.js';

const problems = [];
const say = (file, what) => problems.push(`${file}: ${what}`);

function walk(dir) {
  return readdirSync(dir).flatMap(f => {
    if (f.startsWith('.') && f !== '.github') return [];
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

const secretish = /\brr_[A-Za-z0-9]{8,}|-----BEGIN [A-Z ]*PRIVATE KEY-----|api\.routinerun\.com\/v1\/in\/[0-9a-fA-F-]{8,}|xox[abp]-[A-Za-z0-9-]{10,}|hooks\.slack\.com\/services\/[A-Z0-9]+\/[A-Z0-9]+\/[A-Za-z0-9]+/;

for (const file of walk('.')) {
  const text = readFileSync(file, 'utf8');
  if (secretish.test(text) && !file.startsWith('.github/')) say(file, 'holds something that looks like a secret');
  if (!file.endsWith('.json')) continue;
  let data;
  try { data = JSON.parse(text); } catch (e) { say(file, `is not JSON: ${e.message}`); continue; }

  if (file.startsWith('connections/')) {
    for (const k of ['id', 'kind', 'summary', 'rules', 'samples']) if (!(k in data)) say(file, `has no ${k}`);
    if (data.id && !file.endsWith(`/${data.id}.json`)) say(file, `is called ${data.id} inside`);
    if (!['any', 'planner', 'habits', 'tasks', 'oncall', 'home', 'chat', 'money'].includes(data.kind)) say(file, `kind ${data.kind} is not one the app knows`);
    for (const r of data.rules ?? []) {
      if (r.when?.pattern) { try { new RegExp(r.when.pattern); } catch { say(file, `pattern ${r.when.pattern} is not a regular expression`); } }
      if (r.in && !['title', 'body', 'both'].includes(r.in)) say(file, `in: ${r.in}`);
    }
    for (const s of data.samples ?? []) if (!('expect' in s)) say(file, 'has a sample with no expect');
  }

  if (file.includes('shortcuts/')) {
    for (const k of ['name', 'icloud', 'does']) if (!data[k]) say(file, `has no ${k}`);
    if (data.icloud && !/^[0-9a-f]{32}$/.test(data.icloud)) say(file, 'icloud is not a record id');
    if (!Array.isArray(data.sends)) say(file, 'does not say what it sends ("sends": [] for nothing)');
  }

  if (file.startsWith('routines/')) {
    const found = routineProblems(data);
    if (found.length) say(file, found[0]);
    else if (!Array.isArray(data.steps) || data.steps.length === 0) say(file, 'has no steps');
  }

  if (file.startsWith('skins/')) {
    const found = problemsWithSkin(data);
    if (found.length) say(file, found[0]);
  }
}

if (problems.length) {
  console.error(problems.join('\n'));
  process.exit(1);
}
console.log('Every file reads.');
