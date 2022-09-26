import { derived, writable } from 'svelte/store';
import { writable as persistentWritable } from 'svelte-local-storage-store';

export const dark = persistentWritable('dark', true);
export const dataTheme = derived(dark, ($dark) => {
  return $dark ? 'dark' : 'light';
});
export const demoDialogOpen = writable(false);
