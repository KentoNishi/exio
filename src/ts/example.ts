/* eslint-disable prettier/prettier */
import { readable } from 'svelte/store';
import type { Readable } from 'svelte/store';


export const getSource = (filename: string): Readable<string> =>
  readable('...', (set) => {
    if (filename === 'Demo.svelte') {
      set(demoSrc);
      return;
    }
    set(`ERR: did not find file '${filename}'`);
  });

export const getExample = (source: string, name: string): string => {
  if (source === '...' || source.startsWith('ERR')) return source;
  // parsing html with regex will cause zalgo to come
  // so we use string methods like the sigma males that we are

  // Find start of sequence, then find idx of newline
  // <Example name="test-example-name" {filename}>
  //          ^^^^^^^^^^^^^^^^^^^^^^^^
  const exampleStartMidLineIdx = source.indexOf(`name="${name}"`);
  const exampleStartIdx = source.indexOf('\n', exampleStartMidLineIdx);
  const exampleEndIdx = source.indexOf('</Example>', exampleStartIdx);
  const exampleSource = source.substring(exampleStartIdx, exampleEndIdx);

  // exampleSource will start like
  // \n      <Component
  // ^^^^^^^^
  // whitespace to remove
  const amountSpaces = exampleSource.indexOf('<') - 1;
  return exampleSource
    .replaceAll(`\n${' '.repeat(amountSpaces)}`, '\n')
    .trim();
};
