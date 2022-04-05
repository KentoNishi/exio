<script lang="ts">
  import { ExioButton, ExioIcon, ExioTile } from 'exio/svelte';
</script>

<div class="block">
  <button style="background-color: var(--gray-fill);" use:ExioButton>
    Clickable Button
  </button>
  <button style="background-color: var(--blue-accent);" use:ExioButton>
    Clickable Button
  </button>
  <button use:ExioButton>Clickable Button</button>
</div>
<div class="block">
  <button
    style="background-color: var(--gray-fill);"
    use:ExioButton
    use:ExioIcon
  >
    send
  </button>
  <button
    style="background-color: var(--blue-accent);"
    use:ExioButton
    use:ExioIcon
  >
    send
  </button>
  <button use:ExioButton use:ExioIcon>send</button>
</div>
<div class="block">
  <button
    style="width: 150px; height: 150px; background-color: var(--gray-fill);"
    use:ExioButton
  >
    Tile Button
  </button>
  <button
    style="width: 150px; height: 150px; background-color: var(--blue-accent);"
    use:ExioButton
  >
    Tile Button
  </button>
  <button style="width: 150px; height: 150px;" use:ExioButton>
    Tile Button
  </button>
</div>
<div class="block">
  <div
    style="width: 200px; height: 200px; background-color: var(--gray-fill);"
    use:ExioTile
  >
    Tile Item
  </div>
  <div
    style="width: 200px; height: 200px; background-color: var(--blue-accent);"
    use:ExioTile
  >
    Tile Item
  </div>
  <div style="width: 200px; height: 200px;" use:ExioTile>Tile Item</div>
</div>

<style>
  :root {
    --gray-fill: #444;
    --blue-accent: dodgerblue;
  }
  .block > * {
    display: inline-flex !important;
  }

  .block {
    display: block;
    margin: 1rem;
  }
</style>
