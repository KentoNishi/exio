<script lang="ts">
  import { ExioButton, ExioIcon } from 'exio/svelte';
</script>

<button use:ExioButton>Clickable Button</button>
<button style="background-color: dodgerblue;" use:ExioButton>
  Clickable Button
</button>
<button class="material-icons" use:ExioButton use:ExioIcon>send</button>
<button style="width: 150px; height: 150px;" use:ExioButton>
  Tile Button
</button>

<style>
</style>
