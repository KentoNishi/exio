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
    exioTextbox,
    exioLoadingBarAnimation,
  } from 'exio/svelte';
  import { tick } from 'svelte';
  let render = true;
  let open = false;
  let animate = true;
  const range = (len: number) => new Array(len);
</script>

<div use:exioApp>
  {#if render}
    <div use:exioZoomInAnimation class="wrapper">
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
              border-color: white;
              --exio-selected-background-color: var(--accent);
              --exio-selected-indicator-color: white;
            "
          />
          <label for="switch-option-1">Switch Option 1</label>
          <input
            use:exioSwitch
            type="checkbox"
            id="switch-option-2"
            style="
              border-color: var(--accent);
              --exio-selected-background-color: white;
              --exio-selected-indicator-color: var(--accent);
            "
          />
          <label for="switch-option-2">Switch Option 2</label>
        </div>
      </div>
      <div class="block">
        <div class="items">
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
              border-color: var(--accent);
              --exio-selected-indicator-color: var(--accent);
            "
          />
          <label for="radio-option-2">Radio Option 2</label>
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
      <div class="block" style="flex-direction: column; padding: 10px 0px;">
        <div class="items">
          <div
            use:exioLoadingBarAnimation
            style="
              width: 200px;
              height: 5px;
              --exio-loader-fill-color: cyan;
            "
          />
          <div
            use:exioLoadingBarAnimation
            style="
              width: 200px;
              height: 5px;
              --exio-loader-fill-color: var(--accent);
              background-color: white;
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
  .cyan {
    background-color: darkcyan;
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
    --accent: #0065c7;
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
