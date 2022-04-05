<script lang="ts">
  import { ExioButton, ExioIcon, ExioTile } from 'exio/svelte';
</script>

<button style="background-color: var(--theme-color);" use:ExioButton>
  Clickable Button
</button>
<button style="background-color: dodgerblue;" use:ExioButton>
  Clickable Button
</button>
<button class="material-icons" use:ExioButton use:ExioIcon>send</button>
<button style="width: 150px; height: 150px;" use:ExioButton>
  Tile Button
</button>
<button style="width: 150px; height: 150px;" use:ExioTile>Tile Item</button>

<style>
  :root {
    --theme-color: #444;
  }
</style>
