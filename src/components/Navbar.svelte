<script lang="ts">
  import { dark } from '../ts/stores';
  import {
    exioIcon,
    exioSwitch,
    exioZoomInAnimation,
    exioButton,
  } from 'exio/svelte';
</script>

<div class="navbar" use:exioZoomInAnimation>
  <div class="home">
    <a href="#/">
      <button use:exioButton class="home-button">
        <span use:exioIcon>home</span>
      </button>
    </a>
  </div>
  <div class="toggler">
    <span use:exioIcon>light_mode</span>
    <input type="checkbox" use:exioSwitch id="dark-mode" bind:checked={$dark} />
    <span use:exioIcon>dark_mode</span>
  </div>
</div>

<style>
  :global([data-theme='dark']) input[type='checkbox'] {
    border-color: white;
    --exio-switch-thumb-color: white;
  }
  :global([data-theme='light']) input[type='checkbox'] {
    border-color: black;
    --exio-switch-thumb-color: black;
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
  .home {
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
    color: black;
    cursor: default;
    user-select: none;
  }
  :global([data-theme='dark']) .toggler {
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
    justify-content: space-between;
    background-color: #85ccff;
    border-bottom: 2px solid gray;
  }
  .home-button {
    cursor: pointer;
    width: 50px;
    height: 50px;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
  }
  :global([data-theme='dark']) .home-button {
    color: white;
  }
  :global([data-theme='light']) .home-button {
    color: black;
  }
  .toggler > input {
    --exio-switch-checked-fill-color: transparent;
  }
  :global([data-theme='dark']) .navbar {
    background-color: #00325a;
  }
  * {
    -webkit-tap-highlight-color: transparent;
  }
</style>
