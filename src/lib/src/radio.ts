import { destroyer, styler } from './base';
import type { ExioNode } from './base';
import { exioPointerEffect } from './effects';

export const exioRadio = (node: HTMLInputElement): ExioNode => {
  const effect = exioPointerEffect(node, {
    borderStyle: 'static',
  });
  const s1 = styler(node);
  s1.innerHTML = `
    .${s1.id} {
      -webkit-appearance: none;
      width: 30px;
      height: 30px;
      border-radius: 100px;
      display: flex;
      align-items: center;
      justify-content: center;

      --exio-border-width: 2px;
      --exio-transition-duration: 0.2s;
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
      background-color: white;
      transition: transform var(--exio-transition-duration);
    }
    .${s2.id}:checked::after {
      transform: scale(0.7);
    }
  `;
  return destroyer(effect.destroy, s1.remove, s2.remove);
};