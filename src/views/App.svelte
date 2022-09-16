<script lang="ts">
  import Router from 'svelte-spa-router';
  import { wrap } from 'svelte-spa-router/wrap';
  import Dialog from '../components/Dialog.svelte';
  import Navbar from '../components/Navbar.svelte';
  import { dataTheme } from '../ts/stores';
  import { exioGlobalStyler } from 'exio/svelte';
  let routes: {
    [key: string]: any;
  } = {
    '/': wrap({
      asyncComponent: () => import('../components/Home.svelte'),
    }),
    '/docs': wrap({
      asyncComponent: () => import('../components/docs/Docs.svelte'),
    }),
  };
  $: document.body.parentElement.style.setProperty('color-scheme', $dataTheme);
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
