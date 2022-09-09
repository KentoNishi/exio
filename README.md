# exio

A framework-independent UI library that extends native HTML elements! Compatible with React, Vue, Svelte, vanilla TS/JS, etc.

## What's Included

<details open>
  <summary><strong>Wrappers</strong></summary>
  <ul>
    <li><code>exioApp</code></li>
    <li><code>exioComponent</code></li>
  </ul>
  <summary><strong>Components</strong></summary>
  <ul>
    <li><code>exioAccordion</code></li>
    <li><code>exioButton</code></li>
    <li><code>exioCard</code></li>
    <li><code>exioCheckbox</code></li>
    <li><code>exioDialog</code></li>
    <li><code>exioDropdown</code></li>
    <li><code>exioIcon</code></li>
    <li><code>exioRadio</code></li>
    <li><code>exioSlider</code></li>
    <li><code>exioSwitch</code></li>
    <li><code>exioTextbox</code></li>
  </ul>
</details>

<details open>
  <summary><strong>Animations</strong></summary>
  <ul>
    <li><code>exioFlyInAnimation</code></li>
    <li><code>exioFadeInAnimation</code></li>
    <li><code>exioZoomInAnimation</code></li>
    <li><code>exioLoadingBarAnimation</code></li>
  </ul>
</details>

## Usage

### Svelte Example

```html
<script lang="ts">
  import { exioApp, exioButton, exioComponent } from 'exio/svelte';
</script>

<!-- exioApp overrides some global body styles -->
<div use:exioApp>
  <button use:exioButton>Example Button 1</button>
</div>

<!-- exioComponent styles are scoped -->
<div use:exioComponent>
  <button use:exioButton>Example Button 2</button>
</div>

<!-- Use exioComponent for standalone elements -->
<button use:exioComponent use:exioButton>Example Button 3</button>
```

### Vanilla JS/TS Example

```ts
import { exioApp, exioButton } from 'exio';
const app = document.querySelector('#app');
const exioApp = exioButton(app);
const button = document.querySelector('#my-button');
const exioButton = exioButton(button);
app.appendChild(button);

// to destroy exio instances
exioApp.destroy();
exioButton.destroy();
```
