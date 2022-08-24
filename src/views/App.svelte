<script lang="ts">
  import Router from 'svelte-spa-router';
  import { wrap } from 'svelte-spa-router/wrap';
  import Navbar from '../components/Navbar.svelte';
  let routes: {
    [key: string]: any;
  } = {
    '/': wrap({
      asyncComponent: () => import('../components/Home.svelte'),
    }),
    '/showcase': wrap({
      asyncComponent: () => import('../components/Showcase.svelte'),
    }),
    '/docs': wrap({
      asyncComponent: () => import('../components/docs/Docs.svelte'),
    }),
  };
</script>

<Navbar />
<Router {routes} />
