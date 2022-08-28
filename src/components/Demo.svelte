<script lang="ts">
  import {
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
    exioTextbox,
    exioLoadingBarAnimation,
    exioCheckbox,
    exioAccordion,
    exioSlider,
  } from 'exio/svelte';
  import { tick } from 'svelte';
  import { dark } from '../ts/stores';
  let render = true;
  let open = false;
  let animate = true;
  const range = (len: number) => new Array(len);
  $: colorDefault = $dark ? 'black' : 'white';
  $: colorInverted = $dark ? 'white' : 'black';
  $: if ($dark) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
</script>

<dialog use:exioDialog {open} class="dialog" style="width: min(300px, 100%);">
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
{#if render}
  <div use:exioZoomInAnimation class="wrapper">
    <div class="block">
      <div class="items">
        <input
          use:exioSwitch
          type="checkbox"
          id="dark-mode"
          bind:checked={$dark}
          style="
                border-color: {colorInverted};
                --exio-selected-background-color: var(--accent);
                --exio-selected-indicator-color: {colorInverted};
              "
        />
        <label for="dark-mode">Dark Mode</label>
      </div>
    </div>
    <div class="block">
      <button class="gray" use:exioButton>Default Button</button>
      <button class="blue" use:exioButton>Default Button</button>
      <button use:exioButton use:exioIcon class="gray">send</button>
      <button use:exioButton use:exioIcon class="cyan">send</button>
    </div>
    <div class="block">
      <div use:exioCard class="card gray">Default Card</div>
      <div use:exioCard class="card cyan">Default Card</div>
    </div>
    <div class="block">
      <div class="items">
        <input
          use:exioSwitch
          type="checkbox"
          id="switch-option-1"
          style="
                border-color: {colorInverted};
                --exio-selected-background-color: var(--accent);
                --exio-selected-indicator-color: {colorInverted};
              "
        />
        <label for="switch-option-1">Switch Option 1</label>
        <input
          use:exioSwitch
          type="checkbox"
          id="switch-option-2"
          style="
                border-color: var(--accent);
                --exio-selected-background-color: {colorInverted};
                --exio-selected-indicator-color: var(--accent);
              "
        />
        <label for="switch-option-2">Switch Option 2</label>
      </div>
    </div>
    <div class="block">
      <div class="items">
        <input
          use:exioCheckbox
          type="checkbox"
          id="checkbox-option-1"
          style="
                border-color: {colorInverted};
                --exio-selected-background-color: {colorInverted};
                --exio-selected-indicator-color: {colorDefault};
              "
        />
        <label for="checkbox-option-1">Checkbox Option 1</label>
        <input
          use:exioCheckbox
          type="checkbox"
          id="checkbox-option-2"
          style="
                border-color: var(--accent);
                --exio-selected-background-color: var(--accent);
                --exio-selected-indicator-color: {colorInverted};
              "
        />
        <label for="checkbox-option-2">Checkbox Option 2</label>
      </div>
    </div>
    <div class="block">
      <div class="items">
        <input
          type="radio"
          use:exioRadio
          id="radio-option-1"
          name="radio-options"
          style="
                border-color: {colorInverted};
              "
        />
        <label for="radio-option-1">Radio Option 1</label>
        <input
          type="radio"
          use:exioRadio
          id="radio-option-2"
          name="radio-options"
          style="
                border-color: var(--accent);
                --exio-selected-indicator-color: var(--accent);
              "
        />
        <label for="radio-option-2">Radio Option 2</label>
      </div>
    </div>
    <div class="block">
      <div class="items">
        <input
          type="range"
          min="0"
          max="69"
          use:exioSlider
          style="width: 150px; margin: 20px;"
          step="0.01"
          class="gray"
        />
        <input
          type="range"
          min="0"
          max="69"
          use:exioSlider
          style="
                width: 150px;
                --exio-slider-thumb-color: var(--cyan);
                margin: 20px;
              "
          step="0.01"
          class="gray"
        />
        <input
          type="range"
          min="0"
          max="69"
          use:exioSlider
          style="
                width: 150px;
                background-color: gray;
                --exio-slider-thumb-color: var(--accent);
                margin: 20px;
              "
          step="0.01"
          class="gray"
        />
      </div>
    </div>
    <div class="block">
      <div class="items">
        <input class="gray" use:exioTextbox placeholder="Textfield" />
        <textarea class="gray" use:exioTextbox placeholder="Textarea" />
      </div>
    </div>
    <div class="block">
      <select use:exioDropdown class="gray">
        {#each range(3) as _, index}
          <option value={index + 1}>Option {index + 1}</option>
        {/each}
      </select>
      <select use:exioDropdown class="blue">
        <option disabled selected>Placeholder</option>
        {#each range(3) as _, index}
          <option value={index + 1}>Option {index + 1}</option>
        {/each}
      </select>
      <select use:exioDropdown class="gray">
        <option disabled selected>Overflow</option>
        {#each range(69) as _, index}
          <option value={index + 1}>Option {index + 1}</option>
        {/each}
      </select>
    </div>
    <div class="block">
      <button class="gray" use:exioButton on:click={() => (open = true)}>
        Open Dialog
      </button>
    </div>
    <div class="block">
      <details use:exioAccordion style="width: 320px;">
        <summary class="cyan">Accordion</summary>
        <div style="padding: 1rem;" class="gray">
          Never gonna give you up <br />
          Never gonna let you down <br />
          Never gonna run around and desert you <br />
          Never gonna make you cry <br />
          Never gonna say goodbye <br />
          Never gonna tell a lie and hurt you <br />
        </div>
      </details>
    </div>
    <div class="block" style="flex-direction: column; padding: 10px 0px;">
      <div class="items">
        <div
          use:exioLoadingBarAnimation
          style="
                width: 300px;
                height: 5px;
                --exio-loader-fill-color: var(--cyan);
              "
        />
        <div
          use:exioLoadingBarAnimation
          style="
                width: 300px;
                height: 5px;
                --exio-loader-fill-color: var(--accent);
                background-color: {colorInverted};
              "
        />
      </div>
      <div>
        <button
          use:exioButton
          class="cyan"
          on:click={async () => {
            animate = false;
            await tick();
            animate = true;
          }}
          style="
                display: flex;
                align-items: center;
                gap: 0.25rem;
              "
        >
          <span use:exioIcon>refresh</span>
          <span>Reload Animations</span>
        </button>
      </div>
      {#if animate}
        <div class="items">
          <div use:exioCard use:exioFlyInAnimation class="card gray">
            Fly In Animation
          </div>
          <div
            use:exioCard
            use:exioZoomInAnimation
            class="card blue"
            style="--exio-zoom-in-animation-scale: 80%;"
          >
            Zoom In Animation
          </div>
          <div use:exioCard use:exioFadeInAnimation class="card cyan">
            Fade In Animation
          </div>
        </div>
      {/if}
    </div>
  </div>
{/if}

<style>
  .card {
    width: 150px;
    height: 150px;
  }
  :global([data-theme='dark']) .gray {
    background-color: #333;
  }
  .gray {
    background-color: #cacaca;
  }
  h2 {
    margin: 0;
  }
  .dialog {
    background-color: white;
    color: black;
  }
  :global([data-theme='dark']) .dialog {
    background-color: black;
    color: white;
  }
  :global([data-theme='dark']) .cyan {
    background-color: darkcyan;
  }
  .cyan {
    background-color: turquoise;
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
    flex-wrap: wrap;
  }
  :global(#app) {
    min-height: 100%;
    min-width: 100%;
    --accent: #5dceff;
    --cyan: turquoise;
  }
  :global(#app [data-theme='dark']) {
    --accent: #0065c7;
    --cyan: darkcyan;
  }
  .items {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  }
  .wrapper {
    transform-origin: center top;
  }
</style>