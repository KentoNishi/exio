<script lang="ts">
  import Examples from '../../components/Examples.svelte';
  import Example from '../../components/Example.svelte';
  import { exioButton } from 'exio/svelte';
  import src from './Button.svelte?raw';
  let toggled = true;
</script>

<Examples {src}>
  <Example name="prop-buttons" title="Buttons with prop styles">
    <!-- elements can be styled with props -->
    <button
      use:exioButton={{
        textColor: 'white',
        backgroundColor: toggled ? 'crimson' : 'darkgoldenrod',
      }}
      on:click={() => (toggled = !toggled)}
    >
      Example Button
    </button>
  </Example>
  <Example name="inline-buttons" title="Buttons with inline styles">
    <!-- elements can be styled with inline styles -->
    <button use:exioButton style="background-color: var(--accent);">
      Example Button
    </button>
  </Example>
  <Example name="styled-buttons" title="Buttons with style tags">
    <!-- elements can be customized with style tags -->
    <button use:exioButton class="purple-btn">Example<br />Button</button>
    <button class="square-btn" use:exioButton>Example<br />Button</button>
    <button class="purple-btn square-btn" use:exioButton>
      Example<br />Button
    </button>
    <style>
      .square-btn {
        background-color: var(--accent);
        width: 100px;
        height: 100px;
      }
      .purple-btn {
        background-color: mediumpurple;
        color: white;
      }
    </style>
  </Example>
</Examples>
