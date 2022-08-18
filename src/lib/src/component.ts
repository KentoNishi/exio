import { destroyer, styler } from './base';
import type { ExioNode } from './base';

export function exioComponent(node: HTMLElement): ExioNode {
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
        /* color of slider thumbs */
        --exio-slider-thumb-color: ${isDark ? 'white' : 'black'};
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
        color: ${isDark ? 'white' : 'black'};
        font-size: 1rem;
        font-family: Segoe UI, Frutiger, Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif;
      }
    `;
  };
  const mutationObserver = new MutationObserver(updateStyle);
  mutationObserver.observe(node, {
    attributes: true,
    attributeFilter: ['data-theme'],
  });
  updateStyle();
  return destroyer(() => {
    s.remove();
    mutationObserver.disconnect();
  });
}
