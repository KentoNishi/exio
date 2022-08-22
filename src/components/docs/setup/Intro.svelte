<script lang="ts">
  import { exioApp, exioZoomInAnimation } from 'exio/svelte';
  import { dataTheme } from '../../../ts/stores';
</script>

<div use:exioApp data-theme={$dataTheme} use:exioZoomInAnimation />
