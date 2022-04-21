<script lang="ts">
  import { exioApp, exioButton } from 'exio/svelte';
  let render = true;
</script>

<div use:exioApp>
  {#if render}
    <div>
      <div class="block">
        <button use:exioButton>Example Button</button>
      </div>
    </div>
  {/if}
</div>

<style>
  :root {
    --gray-fill: #444;
    --blue-accent: dodgerblue;
  }

  .block {
    display: block;
    margin: 1rem;
    overflow: hidden;
  }
  :global(#app) {
    min-height: 100%;
    min-width: 100%;
  }
</style>
