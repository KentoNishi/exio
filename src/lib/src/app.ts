import { destroyer, styler } from './base';
import type { ExioNode } from './base';

export function exioApp(node: HTMLElement): ExioNode {
  const s = styler(node);
  const updateStyle = () => {
    const isDark =
      (node.getAttribute('data-theme') || '').toLowerCase() === 'dark';
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
        /* text color for textboxes when focused */
        /* border color for focused elements */
        --exio-focused-border-color:
          ${isDark ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 0.5)'};
        --exio-focused-text-color: ${isDark ? 'white' : 'black'};
        /* scaling factor for the acrylic hover highlight effect */
        --exio-hover-background-scale: 4;
        /* body color for the acrylic hover highlight effect */
        --exio-hover-body-color:
          ${isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)'};
        /* border color for the acrylic hover highlight effect */
        --exio-hover-border-color:
          ${isDark ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.25)'};
        /* scaling factor for the acrylic hover highlight effect */
        --exio-hover-border-scale: 2;
        /* fill color for progress bars and loaders */
        --exio-loader-fill-color: ${isDark ? 'white' : 'black'};
        /* animation duration for progress bars and loaders */
        --exio-loader-duration: 1s;
        /* color of radio/switch backgrounds when selected */
        --exio-selected-background-color: black;
        /* color of radio/switch indicators when selected */
        --exio-selected-indicator-color: ${isDark ? 'white' : 'black'};
        /* slow transition duration */
        --exio-slow-transition-duration: 0.4s;
        /* standard transition duration */
        --exio-standard-transition-duration: 0.2s;
        /* scaling factor for the zoom in animation */
        --exio-zoom-in-animation-scale: 97.5%;
      }

      .${s.id} {
        background-color: ${isDark ? 'black' : 'white'};
        min-width: 100%;
        min-height: 100%;
        position: absolute;
        color: ${isDark ? 'white' : 'black'};
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
    if (isDark) {
      node.classList.add('exio-dark');
    } else {
      node.classList.remove('exio-dark');
    }
  };
  const mutationObserver = new MutationObserver(updateStyle);
  mutationObserver.observe(node, {
    attributes: true,
    attributeFilter: ['data-theme'],
  });
  updateStyle();
  return destroyer(node.remove, s.remove, () => {
    mutationObserver.disconnect();
  });
}
