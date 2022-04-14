<script lang="ts">
  import { exioSwitch } from 'exio/src/switch';
  import {
    exioApp,
    exioButton,
    exioIcon,
    exioTile,
    exioFadeInAnimation,
    exioFlyInAnimation,
    exioOpenAnimation,
  } from 'exio/svelte';
  import { tick } from 'svelte';
  let render = true;
</script>

<div use:exioApp>
  {#if render}
    <div use:exioOpenAnimation>
      <div class="block">
        <button
          style="
            background-color: var(--gray-fill);
          "
          use:exioButton
          on:click={async () => {
            render = false;
            await tick();
            render = true;
            window.scrollTo(0, 0);
          }}
          use:exioIcon
        >
          refresh
        </button>
      </div>
      <div class="block">
        <button style="background-color: var(--gray-fill);" use:exioButton>
          Clickable Button
        </button>
        <button style="background-color: var(--gray-fill);" use:exioButton>
          Horizontally Long Button with More Text
        </button>
        <button style="background-color: var(--blue-accent);" use:exioButton>
          Clickable Button
        </button>
        <button use:exioButton>Clickable Button</button>
      </div>
      <div class="block">
        <button
          style="background-color: var(--gray-fill);"
          use:exioButton
          use:exioIcon
        >
          send
        </button>
        <button
          style="background-color: var(--blue-accent);"
          use:exioButton
          use:exioIcon
        >
          send
        </button>
        <button use:exioButton use:exioIcon>send</button>
      </div>
      <div class="block">
        <button
          style="
            width: 150px;
            height: 150px;
            background-color: var(--gray-fill);
          "
          use:exioButton
        >
          Tile Button
        </button>
        <button
          style="
          width: 300px;
          height: 150px;
          background-color: var(--blue-accent);
        "
          use:exioButton
        >
          Tile Button
        </button>
        <button style="width: 150px; height: 150px;" use:exioButton>
          Tile Button
        </button>
      </div>
      <div class="block">
        <div
          style="
            width: 200px;
            height: 100px;
            background-color: var(--gray-fill);
          "
          use:exioTile
        >
          Tile Item
        </div>
        <div
          style="
          width: 200px;
          height: 100px;
          background-color: var(--blue-accent);
        "
          use:exioTile
        >
          Tile Item
        </div>
        <div style="width: 200px; height: 100px;" use:exioTile>Tile Item</div>
      </div>
      <div class="block">
        <input
          use:exioSwitch
          style="background-color: var(--blue-accent);"
          checked
        />
        <input use:exioSwitch checked />
      </div>
      <div class="block">
        <div
          style="
            width: 200px;
            height: 100px;
            background-color: var(--gray-fill);
          "
          use:exioTile
          use:exioFadeInAnimation
        >
          Tile Item
        </div>
        <div
          style="
          width: 200px;
          height: 100px;
          background-color: var(--blue-accent);
        "
          use:exioTile
          use:exioFlyInAnimation
        >
          Tile Item
        </div>
        <div
          style="
        width: 200px;
        height: 100px;
        background-color: var(--gray-fill);
        animation-delay: 0.5s;
      "
          use:exioTile
          use:exioFadeInAnimation
        >
          Tile Item
        </div>
        <div
          style="
        width: 200px;
        height: 100px;
        background-color: var(--blue-accent);
        animation-delay: 0.5s;
      "
          use:exioTile
          use:exioFlyInAnimation
        >
          Tile Item
        </div>
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
</style>
