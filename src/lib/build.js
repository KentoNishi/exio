// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { copyFileSync, mkdirSync, existsSync } from 'fs';
import { execSync } from 'child_process';

if (!existsSync('dist')) {
  mkdirSync('dist');
}

copyFileSync('../../tsconfig.json', './tsconfig.json');

execSync(
  'tsc --target es6 --declaration --moduleResolution node --outDir ./dist index.ts ./svelte/**'
);

[
  ['package.json', 'package.json'],
  ['../../README.md', 'README.md'],
  ['../../LICENSE', 'LICENSE'],
].forEach((file) => {
  copyFileSync(file[0], `dist/${file[1]}`);
});
