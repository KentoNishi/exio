<script lang="ts">
  import { exioApp } from 'exio/svelte';
  import Demo from './Demo.svelte';
  import { dark } from '../ts/stores';
</script>

<div use:exioApp data-theme={$dark ? 'dark' : 'light'} class:dark-theme={$dark}>
  <Demo />
</div>
