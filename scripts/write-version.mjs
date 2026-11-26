import { mkdirSync, writeFileSync } from 'node:fs';

const sha = process.env.COMMIT_REF?.trim();
if (!sha || !/^[0-9a-f]{40}$/i.test(sha)) {
  throw new Error('COMMIT_REF must be the full Git SHA of the Netlify deployment.');
}

const publicDirectory = new URL('../public/', import.meta.url);
mkdirSync(publicDirectory, { recursive: true });
writeFileSync(new URL('version.txt', publicDirectory), sha + '\n');
