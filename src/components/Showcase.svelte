<script lang="ts">
  import {
    exioApp,
    exioButton,
    exioCard,
    exioSwitch,
    exioFlyInAnimation,
    exioFadeInAnimation,
    exioIcon,
    exioZoomInAnimation,
    exioDropdown,
    exioRadio,
    exioDialog,
  } from 'exio/svelte';
  let render = true;
  let open = false;
</script>

<div use:exioApp>
  {#if render}
    <div use:exioZoomInAnimation class="wrapper">
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
      <div
        class="block"
        style="
          width: min-content;
          padding: 10px;
          padding-bottom: 120px;
          border: 2px solid white;
        "
      >
        <select use:exioDropdown class="gray">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
        <select use:exioDropdown class="blue">
          <option disabled selected>Placeholder</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
      </div>
    </div>
    <div class="block">
      <div class="paired">
        <input
          type="radio"
          use:exioRadio
          id="radio-option-1"
          name="radio-options"
        />
        <label for="radio-option-1">Radio Option 1</label>
        <input
          type="radio"
          use:exioRadio
          id="radio-option-2"
          name="radio-options"
          style="
            --exio-hover-border-color: var(--accent);
            --exio-selected-indicator-color: var(--accent);
          "
        />
        <label for="radio-option-2">Radio Option 2</label>
      </div>
    </div>
    <div class="block">
      <button class="gray" use:exioButton on:click={() => (open = true)}>
        Open Dialog
      </button>
      <dialog
        use:exioDialog
        {open}
        class="black"
        style="width: min(300px, 100%);"
      >
        <h2>Hello World!</h2>
        <p>Exio uses the HTML dialog element.</p>
        <button
          use:exioButton
          class="blue"
          style="float: right;"
          on:click={() => (open = false)}
        >
          Close
        </button>
      </dialog>
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
  h2 {
    margin: 0;
  }
  .black {
    background-color: black;
    color: white;
  }
  .blue {
    background-color: var(--accent);
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
    --accent: #0065c7;
  }
  .paired {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }
  .wrapper {
    transform-origin: center top;
  }
</style>
