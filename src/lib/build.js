import {
  copyFileSync,
  mkdirSync,
  existsSync,
  writeFileSync,
  readFileSync,
} from 'fs';
import glob from 'glob';
import UglifyJS from 'uglify-js';
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

glob.sync('./dist/**/*.js').forEach((f) => {
  writeFileSync(
    f,
    UglifyJS.minify(readFileSync(f).toString())
      .code.replace(/\/\*(.|[\r\n])*?\*\//g, '')
      .replace(/\s{2,}/g, ' ')
  );
});
