<script lang="ts" context="module">
  import prismDark from 'prismjs/themes/prism-okaidia.css';
  import prismLight from 'prismjs/themes/prism.css';

  import { dark } from '../ts/stores';

  const getStyleEl = (): HTMLElement => {
    const styleEl = document.head.querySelector('.prism-styles');
    if (styleEl !== null) return styleEl;

    const newStyle = document.createElement('style');
    newStyle.className = 'prism-styles';
    document.head.appendChild(newStyle);
    return newStyle;
  };
  const styleEl = getStyleEl();

  dark.subscribe(($dark) => {
    styleEl.innerHTML = $dark ? prismDark : prismLight;
  });
</script>

<script lang="ts">
  import Prism from 'prismjs';
  import 'prism-svelte';

  import { getContext } from 'svelte';
  import { exioAccordion } from 'exio/svelte';

  import { getExample } from '../ts/example';
  import { exampleSrcKey } from '../ts/constants';

  export let name = '';

  const src = getContext(exampleSrcKey) as string;

  $: exampleSource = getExample(src, name);
  $: console.log(exampleSource);
</script>

<div class="example">
  <div class="example-content">
    <slot />
  </div>
  <details use:exioAccordion style="width: 100%">
    <summary class="cyan">View Source</summary>
    <div class="example-src">
      <pre
        class="language-svelte">
        {@html Prism.highlight(exampleSource, Prism.languages.svelte, 'svelte')}
      </pre>
    </div>
  </details>
</div>

<style>
  .example {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-bottom: 1rem;
  }
  pre {
    margin: 0px;
  }

  /* .example::before {
    content: '';
    position: absolute;
    bottom: 0;
    width: 70vw;
    height: 1px;
    background-color: white;
  } */

  details {
    width: 100%;
  }
</style>
