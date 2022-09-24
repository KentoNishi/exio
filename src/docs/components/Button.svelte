<script lang="ts">
  import Examples from '../../components/Examples.svelte';
  import Example from '../../components/Example.svelte';
  import { exioButton } from 'exio/svelte';
  import src from './Button.svelte?raw';
  let toggled = false;
</script>

<Examples {src}>
  <Example name="various-buttons">
    <button class="gray" use:exioButton>Default Button</button>

    <button use:exioButton style="background-color: var(--accent);">
      Styling with css
    </button>

    <button
      use:exioButton={{
        textColor: 'white',
        backgroundColor: toggled ? 'blue' : 'green',
      }}
      on:click={() => (toggled = !toggled)}
    >
      Styling with props
    </button>
  </Example>
</Examples>
