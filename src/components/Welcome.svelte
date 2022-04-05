<script lang="ts">
  import { _ } from 'svelte-i18n';
  import { SvaltiButton } from 'svalti';
</script>

<div>{$_('hello_world')}</div>

<!-- <div class="grid">
  {#each Array(100) as _, i}
    <button use:SvaltiButton>
      Button<br />#{i}
    </button>
  {/each}
</div> -->
<button use:SvaltiButton()>Clickable Button</button>

<style>
  /* .grid {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 1fr);
  } */
  button {
    padding: 0.3rem 0.6rem;
    background-color: #444;
    color: white;
    font-family: inherit;
    font-size: 1.1rem;
    margin: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
