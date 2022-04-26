<script lang="ts">
  import {
    exioApp,
    exioButton,
    exioCard,
    exioSwitch,
    exioFlyInAnimation,
    exioFadeInAnimation,
    exioIcon,
  } from 'exio/svelte';
  let render = true;
</script>

<div use:exioApp>
  {#if render}
    <div>
      <div class="block">
        <button class="gray" use:exioButton>Default Button</button>
        <button class="blue" use:exioButton>Default Button</button>
      </div>
      <div class="block">
        <button class="card gray" use:exioButton>Card Button</button>
        <button class="card blue" use:exioButton>Card Button</button>
      </div>
      <div class="block">
        <button use:exioButton use:exioIcon class="gray">send</button>
        <button use:exioButton use:exioIcon class="blue">send</button>
      </div>
      <div class="block">
        <div use:exioCard class="card gray">Default Card</div>
        <div use:exioCard class="card blue">Default Card</div>
      </div>
      <div class="block">
        <input use:exioSwitch class="blue" type="checkbox" />
      </div>
      <div class="block">
        <div use:exioCard use:exioFlyInAnimation class="card gray">
          Animated Card
        </div>
        <div use:exioCard use:exioFadeInAnimation class="card blue">
          Animated Card
        </div>
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
