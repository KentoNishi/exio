<script lang="ts">
  import { exioApp } from 'exio/svelte';
  import Demo from './Demo.svelte';
  import { dark, dataTheme } from '../ts/stores';
</script>

<div use:exioApp data-theme={$dataTheme} class:dark-theme={$dark}>
  <Demo />
</div>
