<script lang="ts">
  import { ExioButton } from 'exio';
</script>

<button use:ExioButton>Clickable Button</button>
<button style="background-color: dodgerblue;" use:ExioButton>
  Clickable Button
</button>
<button class="material-icons" use:ExioButton>send</button>
<button style="width: 150px; height: 150px;" use:ExioButton>
  Tile Button
</button>

<style>
  .material-icons {
    font-family: 'Material Icons' !important;
  }
</style>
