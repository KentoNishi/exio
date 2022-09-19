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
    max-width: 900px;
    display: block;
    width: calc(100% - 40px);
    margin-top: 20px;
    margin-bottom: 20px;
    height: fit-content;
  }
  .center {
    display: flex;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    padding-top: 50px;
    background-color: white;
  }
  :global([data-theme='dark']) .center {
    background-color: black;
  }
</style>
