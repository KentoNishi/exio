<script lang="ts">
  import { setContext } from 'svelte';
  import { exampleFilenameKey } from '../ts/constants';

  export let filename = '';

  setContext(exampleFilenameKey, filename);
</script>

<slot />
