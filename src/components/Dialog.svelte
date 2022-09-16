<script lang="ts">
  import { exioButton, exioDialog, exioComponent } from 'exio/svelte';
  import { demoDialogOpen, dataTheme } from '../ts/stores';
</script>

<dialog
  use:exioDialog
  use:exioComponent
  open={$demoDialogOpen}
  class="dialog"
  style="width: min(300px, 100%);"
  data-theme={$dataTheme}
>
  <h2>Hello World!</h2>
  <p>Exio uses the HTML dialog element.</p>
  <button
    use:exioButton
    class="blue"
    style="float: right;"
    on:click={() => ($demoDialogOpen = false)}
  >
    Close
  </button>
</dialog>

<style>
  h2 {
    margin: 0;
  }
  .dialog {
    background-color: white;
    color: black;
  }
  :global([data-theme='dark']).dialog {
    background-color: black;
    color: white;
  }
</style>
