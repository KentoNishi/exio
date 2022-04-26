<script lang="ts">
  import { exioApp, exioButton, exioCard, exioSwitch } from 'exio/svelte';
  let render = true;
</script>

<div use:exioApp>
  {#if render}
    <div>
      <div class="block">
        <button class="gray" use:exioButton>Example Button</button>
        <button class="blue" use:exioButton>Example Button</button>
      </div>
      <div class="block">
        <div use:exioCard class="card gray">Example Card</div>
        <div use:exioCard class="card gray">Example Card</div>
      </div>
      <div class="block">
        <input use:exioSwitch class="blue" type="checkbox" />
      </div>
    </div>
  {/if}
</div>

<style>
  .card {
    width: 150px;
    height: 150px;
  }
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
