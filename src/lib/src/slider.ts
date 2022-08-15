import { destroyer, styler } from './base';
import type { ExioNode } from './base';

export function exioSlider(node: HTMLInputElement): ExioNode {
  const s = styler(node);
  const thumb = `
    width: var(--exio-slider-thumb-size);
    height: var(--exio-slider-thumb-size);
    background-color: var(--exio-slider-thumb-color);
    transition: outline var(--exio-standard-transition-duration);
    border: 0px solid transparent;
    box-sizing: border-box;
    border-radius: 1000px;
    outline: 0px solid var(--exio-hover-body-color);
    cursor: grab;
    transform: translateZ(0);
  `;
  const outline1 =
    'outline: var(--exio-slider-thumb-hover-outline-size) solid var(--exio-hover-body-color);';
  const outline2 = `
    outline: var(--exio-slider-thumb-grab-outline-size) solid var(--exio-hover-body-color);
    cursor: grabbing;
  `;
  s.innerHTML = `
    .${s.id} {
      -webkit-appearance: none;
      width: 100%;
      height: var(--exio-slider-track-size);
      border-radius: var(--exio-slider-track-size);
      outline: none;
    }
    
    .${s.id}::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      ${thumb}
    }
    
    .${s.id}::-moz-range-thumb {
      ${thumb}
    }
    
    .${s.id}::-webkit-slider-thumb:hover {
      ${outline1}
    }

    .${s.id}::-moz-range-thumb:hover {
      ${outline1}
    }
    
    .${s.id}::-webkit-slider-thumb:active {
      ${outline2}
    }

    .${s.id}::-moz-range-thumb:active {
      ${outline2}
    }
  `;
  return destroyer(() => {
    s.remove();
  });
}
