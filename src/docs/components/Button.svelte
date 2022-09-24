<script lang="ts">
  import Examples from '../../components/Examples.svelte';
  import Example from '../../components/Example.svelte';
  import { exioButton } from 'exio/svelte';
  import { dark } from '../../ts/stores.ts';
  import src from './Button.svelte?raw';
</script>

<Examples {src}>
  <Example name="various-buttons">
    <button class="gray" use:exioButton>Default Button</button>
    <button
      use:exioButton={{ backgroundColor: $dark ? 'var(--accent)' : '#85ccff' }}
    >
      lmao
    </button>
  </Example>
</Examples>
