<script>
  import { exioZoomInAnimation } from 'exio/svelte';
  import Button from './components/Button.svelte';
</script>

<div class="center">
  <div use:exioZoomInAnimation class="wrapper">
    <Button />
  </div>
</div>

<style>
  .wrapper {
    transform-origin: center top;
    padding: 20px;
    max-width: 900px;
    display: block;
    width: 100%;
    height: fit-content;
    margin-top: 50px;
  }
  .center {
    display: flex;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    background-color: white;
  }
  :global([data-theme='dark']) .center {
    background-color: black;
  }
</style>
