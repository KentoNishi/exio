import { destroyer, styler } from './base';
import type { ExioNode } from './base';
import { exioPointerEffect } from './effects';
import { exioComponent } from './component';

export const exioRadio = (node: HTMLInputElement): ExioNode => {
  const component = exioComponent(node);
  const effect = exioPointerEffect(node, {
    borderStyle: 'static',
  });
  const s1 = styler(node);
  s1.innerHTML = `
    .${s1.id} {
      -webkit-appearance: none;
      width: 20px;
      height: 20px;
      border-radius: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0px;
      border-color: black;
    }
    [data-theme=dark] .${s1.id} {
      border-color: white;
    }
    .${s1.id}:not(:checked) {
      background-color: transparent;
    }
  `;
  const s2 = styler(node);
  s2.innerHTML = `
    .${s2.id}::after {
      content: '';
      position: absolute;
      width: ${node.clientHeight}px;
      height: ${node.clientHeight}px;
      border-radius: 100%;
      transform: scale(0);
      background-color: var(--exio-radio-indicator-color);
      transition: transform var(--exio-standard-transition-duration);
      z-index: -1000;
    }
    .${s2.id}:checked::after {
      transform: scale(0.5);
    }
  `;
  return destroyer(() => {
    effect.destroy();
    s1.remove();
    s2.remove();
    component.destroy();
  });
};
