<script lang="ts">
  import Router from 'svelte-spa-router';
  import { wrap } from 'svelte-spa-router/wrap';
  import Dialog from '../components/Dialog.svelte';
  import Navbar from '../components/Navbar.svelte';
  import { dark, dataTheme } from '../ts/stores';
  import { exioGlobalStyler } from 'exio/svelte';
  let routes: {
    [key: string]: any;
  } = {
    '/': wrap({
      asyncComponent: () => import('../components/Home.svelte') as any,
    }),
    '/docs': wrap({
      asyncComponent: () => import('../docs/Docs.svelte') as any,
    }),
  };
  $: document.body.parentElement.style.setProperty('color-scheme', $dataTheme);
  $: document.body.classList[$dark ? 'add' : 'remove']('dark');
</script>

<div data-theme={$dataTheme} use:exioGlobalStyler>
  <Navbar />
  <Dialog />
  <Router {routes} />
</div>

<style>
  :global([data-theme='dark'] .gray) {
    background-color: #333;
  }
  :global([data-theme='dark'] .cyan) {
    background-color: darkcyan;
  }
  :global(#app) {
    min-height: 100%;
    min-width: 100%;
    --accent: #5dceff;
    --cyan: turquoise;
  }
  :global(#app [data-theme='dark']) {
    --accent: #0065c7;
    --cyan: darkcyan;
  }
  :global(.cyan) {
    background-color: turquoise;
  }
  :global(.blue) {
    background-color: var(--accent);
  }
  :global(.gray) {
    background-color: #cacaca;
  }
</style>
