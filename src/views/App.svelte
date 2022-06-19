<script lang="ts">
  import { isLoading } from 'svelte-i18n';
  import Showcase from '../components/Showcase.svelte';
</script>

{#if !$isLoading}
  <Showcase />
{/if}
