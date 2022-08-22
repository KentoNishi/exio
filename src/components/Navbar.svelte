<script lang="ts">
  import { dark, dataTheme } from '../ts/stores';
  import {
    exioComponent,
    exioIcon,
    exioSwitch,
    exioZoomInAnimation,
  } from 'exio/svelte';
</script>

<div
  class="navbar"
  data-theme={$dataTheme}
  use:exioComponent
  use:exioZoomInAnimation
>
  <div class="toggler">
    <span use:exioIcon>light_mode</span>
    <input type="checkbox" use:exioSwitch id="dark-mode" bind:checked={$dark} />
    <span use:exioIcon>dark_mode</span>
  </div>
</div>

<style>
  [data-theme='dark'] input[type='checkbox'] {
    border-color: white;
    --exio-selected-indicator-color: white;
  }
  [data-theme='light'] input[type='checkbox'] {
    border-color: black;
    --exio-selected-indicator-color: black;
  }
  .toggler {
    display: flex;
    font-size: 1.6rem;
    align-items: center;
    margin-right: 0.5rem;
    color: black;
    cursor: default;
    user-select: none;
  }
  [data-theme='dark'] .toggler {
    color: white;
  }
  .navbar {
    position: fixed;
    z-index: 100;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    background-color: #85ccff;
    border-bottom: 2px solid gray;
  }
  .toggler > input {
    --exio-selected-background-color: transparent;
  }
  [data-theme='dark'].navbar {
    background-color: #00325a;
  }
  * {
    -webkit-tap-highlight-color: transparent;
  }
</style>
