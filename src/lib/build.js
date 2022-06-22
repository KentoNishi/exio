// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { copyFileSync, mkdirSync, existsSync } from 'fs';
import { execSync } from 'child_process';

if (!existsSync('dist')) {
  mkdirSync('dist');
}

execSync(
  'tsc --target es6 --declaration --moduleResolution node --outDir ./dist index.ts ./svelte/**',
  { stdio: 'inherit' }
);

[
  ['package.json', 'package.json'],
  ['../../README.md', 'README.md'],
  ['../../LICENSE', 'LICENSE'],
].forEach((file) => {
  copyFileSync(file[0], `dist/${file[1]}`);
});
