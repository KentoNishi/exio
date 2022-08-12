import { destroyer, styler } from './base';
import type { ExioNode } from './base';

export function exioApp(node: HTMLElement): ExioNode {
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
      /* background color for textboxes when focused */
      --exio-focused-background-color: white;
      /* text color for textboxes when focused */
      --exio-focused-text-color: black;
      /* scaling factor for the acrylic hover highlight effect */
      --exio-hover-background-scale: 4;
      /* body color for the acrylic hover highlight effect */
      --exio-hover-body-color: rgba(255, 255, 255, 0.2);
      /* border color for the acrylic hover highlight effect */
      --exio-hover-border-color: rgba(255, 255, 255, 1);
      /* scaling factor for the acrylic hover highlight effect */
      --exio-hover-border-scale: 2;
      /* fill color for progress bars and loaders */
      --exio-loader-fill-color: white;
      /* animation duration for progress bars and loaders */
      --exio-loader-duration: 1s;
      /* color of radio/switch backgrounds when selected */
      --exio-selected-background-color: black;
      /* color of radio/switch indicators when selected */
      --exio-selected-indicator-color: white;
      /* slow transition duration */
      --exio-slow-transition-duration: 0.4s;
      /* standard transition duration */
      --exio-standard-transition-duration: 0.2s;
      /* scaling factor for the zoom in animation */
      --exio-zoom-in-animation-scale: 97.5%;
    }

    .${s.id} {
      background-color: black;
      min-width: 100%;
      min-height: 100%;
      position: absolute;
      color: white;
      font-size: 1rem;
      font-family: Segoe UI, Frutiger, Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif;
    }

    body {
      margin: 0;
      padding: 0;
    }

    * ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    
    * ::-webkit-scrollbar-track {
      background: transparent;
    }
    
    * ::-webkit-scrollbar-thumb {
      background: #888;
    }
    
    * ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }

    * ::-webkit-scrollbar-corner {
      background: transparent;
    }
    
    * {
      scrollbar-width: thin;
      scrollbar-color: #888 transparent;
    }
  `;
  return destroyer(node.remove, s.remove);
}
