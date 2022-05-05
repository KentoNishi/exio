# exio

A framework-independent UI library that extends native HTML elements!

## What's Included

<details>
  <summary><strong>Components</strong></summary>
  <ul>
    <li><code>exioApp</code></li>
    <li><code>exioButton</code></li>
    <li><code>exioCard</code></li>
    <li><code>exioSwitch</code></li>
    <li><code>exioIcon</code></li>
    <li><code>exioLoadingBar</code></li>
    </ul>
</details>

<details>
  <summary><strong>Animations</strong></summary>
  <ul>
    <li><code>exioFlyInAnimation</code></li>
    <li><code>exioFadeInAnimation</code></li>
    <li><code>exioZoomInAnimation</code></li>
    </ul>
</details>

<details>
  <summary><strong>Typedefs</strong></summary>
  <ul>
    <li><code>ExioNode</code></li>
    </ul>
</details>

## Usage

### Svelte Example

```html
<script lang="ts">
  import { exioButton } from 'exio/svelte';
</script>
<button use:exioButton>Example Button</button>
```

### Vanilla JS/TS Example

```ts
import { exioButton } from 'exio';
const button = document.querySelector('#my-button');
const exioButton = exioButton(button);
exioButton.destroy();
```
