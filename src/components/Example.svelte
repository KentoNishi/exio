<script lang="ts" context="module">
  import prismDark from 'prismjs/themes/prism-okaidia.min.css';
  import prismLight from 'prismjs/themes/prism.min.css';
  import { _ } from 'svelte-i18n';

  import { dark } from '../ts/stores';

  const getStyleEl = (): HTMLElement => {
    const styleEl = document.head.querySelector('.prism-styles') as HTMLElement;
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
  export let title = '';

  const src = getContext(exampleSrcKey) as string;

  $: exampleSource = getExample(src, name);
</script>

<div class="example">
  <h2 style="margin: 0px;">{title}</h2>
  <div class="example-content">
    <slot />
  </div>
  <details use:exioAccordion style="width: 100%">
    <summary class="cyan">{$_('docs.view-source')}</summary>
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
    margin-bottom: 1rem;
  }
  pre {
    margin: 0px !important;
    max-width: 100%;
    width: 100%;
    border-radius: 0px !important;
    box-sizing: border-box;
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

  /**
   * prismjs puts an annoying background on operators (like ? and :)
   * prism-okaidia theme doesn't give tokens a nice color
   *   so we yoink the color from prism default light theme
   */
  :global(.token.operator) {
    color: #9a6e3a !important;
    background-color: transparent !important;
  }
</style>
