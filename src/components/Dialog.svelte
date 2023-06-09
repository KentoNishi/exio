<script lang="ts">
  import { exioButton, exioDialog } from 'exio/svelte';
  import { demoDialogOpen } from '../ts/stores';
</script>

<dialog
  use:exioDialog
  open={$demoDialogOpen}
  class="dialog"
  style="width: min(300px, 100%);"
>
  <!-- <select use:exioDropdown class="gray">
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select> -->
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
  :global([data-theme='dark']) .dialog {
    background-color: black;
    color: white;
  }
</style>
