import { destroyer, styler } from './base';
import type { ExioNode } from './base';

export function exioComponent(node: HTMLElement): ExioNode {
  const style = getComputedStyle(node);
  if (style.getPropertyValue('--is-exio-component') === 'true') {
    return destroyer();
  }
  const s = styler(node);
  s.innerHTML = `
    :root {
      /* --------------------------- */
      /* CUSTOMIZABLE EXIO VARIABLES */
      /* --------------------------- */
      /* backdrop color for dialogs and other popups */
      --exio-backdrop-color: rgba(128, 128, 128, 0.2);
      /* border width for various effects */
      --exio-border-width: 2px;
      /* scaling factor for elements while being clicked */
      --exio-clicking-scale: 0.95;
      /* filter for disabled fields */
      --exio-disabled-filter: brightness(1.2) grayscale(0.5);
      /* border color for focused elements */
      --exio-focused-border-color: rgba(0, 0, 0, 0.5);
      --exio-focused-text-color: black;
      /* scaling factor for the acrylic hover highlight effect */
      --exio-hover-background-scale: 4;
      /* body color for the acrylic hover highlight effect */
      --exio-hover-body-color: rgba(0, 0, 0, 0.1);
      /* border color for the acrylic hover highlight effect */
      --exio-hover-border-color: rgba(0, 0, 0, 0.25);
      /* scaling factor for the acrylic hover highlight effect */
      --exio-hover-border-scale: 2;
      /* fill color for progress bars and loaders */
      --exio-loader-fill-color: black;
      /* animation duration for progress bars and loaders */
      --exio-loader-duration: 1s;
      /* color of radio/switch backgrounds when selected */
      --exio-selected-background-color: black;
      /* color of radio/switch indicators when selected */
      --exio-selected-indicator-color: black;
      /* color of slider thumbs */
      --exio-slider-thumb-color: black;
      /* size of slider thumbs */
      --exio-slider-thumb-size: 12px;
      /* size of slider thumbs outlines when hovered */
      --exio-slider-thumb-hover-outline-size: 18px;
      /* size of slider thumb outlines when grabbing */
      --exio-slider-thumb-grab-outline-size: 25px;
      /* size of slider tracks */
      --exio-slider-track-size: 4px;
      /* fast transition duration */
      --exio-fast-transition-duration: 0.1s;
      /* slow transition duration */
      --exio-slow-transition-duration: 0.4s;
      /* standard transition duration */
      --exio-standard-transition-duration: 0.2s;
      /* scaling factor for the zoom in animation */
      --exio-zoom-in-animation-scale: 97.5%;
    }
    .${s.id} {
      --is-exio-component: true;
      --exio-theme: light;
      color: black;
      font-family: Segoe UI, Frutiger, Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif;
    }
    [data-theme="dark"] .${s.id}, .${s.id}[data-theme="dark"] {
      color: white;
      --exio-disabled-filter: brightness(0.6) grayscale(0.5);
      --exio-focused-border-color: rgba(255, 255, 255, 1);
      --exio-focused-text-color: white;
      --exio-hover-background-scale: 4;
      --exio-hover-body-color: rgba(255, 255, 255, 0.2);
      --exio-hover-border-color: rgba(255, 255, 255, 0.5);
      --exio-hover-border-scale: 2;
      --exio-loader-fill-color: white;
      --exio-loader-duration: 1s;
      --exio-selected-background-color: black;
      --exio-selected-indicator-color: white;
      --exio-slider-thumb-color: white;
      --exio-theme: dark;
    }
  `;
  return destroyer(() => {
    s.remove();
  });
}
