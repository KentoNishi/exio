# exio

A framework-independent UI library that extends native HTML elements!

## What's Included

### Components
* `exioApp`
* `exioButton`
* `exioCard`
* `exioSwitch`
* `exioIcon`
* `exioLoadingBar`

### Animations
* `exioFlyInAnimation`
* `exioFadeInAnimation`
* `exioZoomInAnimation`

### Typedefs
* `ExioNode`

## Usage

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

### Svelte Example

```html
<script lang="ts">
  import { exioButton } from 'exio/svelte';
</script>
<button use:exioButton>Example Button</button>
```

