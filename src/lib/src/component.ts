import { destroyer, updater } from './base';
import type { ExioNode } from './base';
import { font } from './consts';

export const componentVars = {};

export type ExioComponentArgs = Partial<{
  [Prop in keyof typeof componentVars]:
    | typeof componentVars[Prop]['val']
    | string;
}>;

export function exioComponent(
  node: HTMLElement,
  opts: ExioComponentArgs = {}
): ExioNode<ExioComponentArgs> {
  node.classList.add('exio-component');
  let style = document.querySelector('#exio-styles') as HTMLStyleElement | null;
  if (!style) {
    style = document.createElement('style');
    style.id = 'exio-styles';
    style.innerHTML = `
      .exio-component {
        /* --------------------------- */
        /* CUSTOMIZABLE EXIO VARIABLES */
        /* --------------------------- */
        /* backdrop color for dialogs and other popups */
        --exio-backdrop-color: rgba(128, 128, 128, 0.2);
        /* border width for various effects */
        --exio-border-width: 2px;
        /* scaling factor for elements while being clicked */
        --exio-clicking-scale: 0.95;
        /* color of checkbox checkmarks when selected */
        --exio-checkbox-checkmark-color: white;
        /* color of checkbox fill when selected */
        --exio-checkbox-selected-fill-color: black;
        /* filter for disabled fields */
        --exio-disabled-filter: brightness(1.2) grayscale(0.5);
        /* border color for focused elements */
        --exio-focused-border-color: rgba(0, 0, 0, 0.5);
        /* scaling factor for the acrylic hover highlight effect */
        --exio-hover-background-scale: 4;
        /* body color for the acrylic hover highlight effect */
        --exio-hover-body-color: rgba(128, 128, 128, 0.3);
        /* border color for the acrylic hover highlight effect */
        --exio-hover-border-color: rgba(0, 0, 0, 0.25);
        /* scaling factor for the acrylic hover highlight effect */
        --exio-hover-border-scale: 2;
        /* fill color for progress bars and loaders */
        --exio-loader-fill-color: black;
        /* animation duration for progress bars and loaders */
        --exio-loader-duration: 1s;
        /* color of radio indicators */
        --exio-radio-indicator-color: black;
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
        /* color of switch background when selected */
        --exio-switch-selected-fill-color: darkgray;
        /* switch thumb color */
        --exio-switch-thumb-color: black;
        /* default text color for components */
        --exio-default-text-color: black;
        /* scaling factor for the zoom in animation */
        --exio-zoom-in-animation-scale: 97.5%;
      }
      .exio-component {
        --is-exio-component: true;
        --exio-theme: light;
        color: var(--exio-default-text-color);
        ${font}
      }
      [data-theme="dark"] .exio-component, .exio-component[data-theme="dark"] {
        --exio-disabled-filter: brightness(0.6) grayscale(0.5);
        --exio-focused-border-color: rgba(255, 255, 255, 1);
        --exio-hover-background-scale: 4;
        --exio-hover-body-color: rgba(128, 128, 128, 0.3);
        --exio-hover-border-color: rgba(255, 255, 255, 0.5);
        --exio-hover-border-scale: 2;
        --exio-loader-fill-color: white;
        --exio-loader-duration: 1s;
        --exio-switch-selected-fill-color: white;
        --exio-checkbox-checkmark-color: black;
        --exio-checkbox-selected-fill-color: white;
        --exio-slider-thumb-color: white;
        --exio-switch-thumb-color: white;
        --exio-radio-indicator-color: white;
        --exio-theme: dark;
        --exio-default-text-color: white;
      }
    `;
    document.head.appendChild(style);
  }
  return {
    ...updater(opts, node, componentVars),
    ...destroyer(() => {
      node.classList.remove('exio-component');
    }),
  };
}
