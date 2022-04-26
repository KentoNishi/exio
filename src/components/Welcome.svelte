<script lang="ts">
  import { exioApp, exioButton } from 'exio/svelte';
  let render = true;
</script>

<div use:exioApp>
  {#if render}
    <div>
      <div class="block">
        <button class="gray" use:exioButton>Example Button</button>
        <button class="blue" use:exioButton>Example Button</button>
      </div>
    </div>
  {/if}
</div>

<style>
  .gray {
    background-color: #333;
  }
  .blue {
    background-color: #0065c7;
  }

  .block {
    display: flex;
    margin: 1rem;
    overflow: visible;
    flex-direction: row;
    gap: 10px;
  }
  :global(#app) {
    min-height: 100%;
    min-width: 100%;
  }
</style>
