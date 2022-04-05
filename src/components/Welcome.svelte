<script lang="ts">
  import { _ } from 'svelte-i18n';
  import { SvaltiButton } from '../lib';
</script>

<div>{$_('hello_world')}</div>

<div class="grid">
  {#each Array(100) as _, i}
    <button use:SvaltiButton>
      Button<br />#{i}
    </button>
  {/each}
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 1fr);
  }
</style>
