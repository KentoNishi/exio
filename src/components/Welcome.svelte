<script lang="ts">
  import { exioApp, exioButton } from 'exio/svelte';
  let render = true;
</script>

<div use:exioApp>
  {#if render}
    <div>
      <div class="block">
        <button id="example-button" use:exioButton> Example Button </button>
      </div>
    </div>
  {/if}
</div>

<style>
  #example-button {
    background-color: #333;
  }
  :root {
    --blue-accent: dodgerblue;
  }

  .block {
    display: block;
    margin: 1rem;
    overflow: visible;
  }
  :global(#app) {
    min-height: 100%;
    min-width: 100%;
  }
</style>
