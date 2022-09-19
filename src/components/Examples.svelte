<script lang="ts">
  import { setContext } from 'svelte';
  import { exampleSrcKey } from '../ts/constants';

  export let src = '';

  setContext(exampleSrcKey, src);
</script>

<slot />
