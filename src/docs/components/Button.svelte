<script lang="ts">
  import Examples from '../../components/Examples.svelte';
  import Example from '../../components/Example.svelte';
  import { exioButton } from 'exio/svelte';
  import src from './Button.svelte?raw';
  let toggled = false;
</script>

<Examples {src}>
  <Example name="various-buttons">
    <!-- "gray" is a user-defined css class -->
    <button class="gray" use:exioButton>Default Button</button>

    <!-- exio elements can be customized with pure css -->
    <button use:exioButton style="background-color: var(--accent);">
      Styling with css
    </button>

    <!-- some convenient reactive props are provided too! -->
    <button
      use:exioButton={{
        textColor: 'white',
        backgroundColor: toggled ? 'crimson' : 'darkgoldenrod',
      }}
      on:click={() => (toggled = !toggled)}
    >
      Styling with props
    </button>
  </Example>
</Examples>
