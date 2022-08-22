import { derived, writable } from 'svelte/store';

export const dark = writable(true);
export const dataTheme = derived(dark, ($dark) => {
  return $dark ? 'dark' : 'light';
});
