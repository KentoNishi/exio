<script lang="ts">
  import { exioApp } from 'exio/svelte';
  import Demo from './Demo.svelte';

  let dark = true;
</script>

<div use:exioApp data-theme={dark ? 'dark' : 'light'} class:dark-theme={dark}>
  <Demo bind:dark />
</div>
