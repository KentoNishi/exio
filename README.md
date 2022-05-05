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
  import {
    exioApp,
    exioZoomInAnimation,
    exioButton
  } from 'exio/svelte';
</script>
<div use:exioApp use:exioZoomInAnimation>
  <button use:exioButton>Example Button</button>
</div>
```

### Vanilla JS/TS Example

```ts
// import
import { exioButton } from 'exio';
// create a standard button element
const button = document.createElement('button');
button.innerText = 'Example Button';
document.body.appendChild(button);
// initialize the exioButton
const exioButton = exioButton(button);
// ...
// destroy the exioButton
exioButton.destroy();
```
