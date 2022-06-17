import { destroyer, styler } from './base';
import type { ExioNode } from './base';
import { exioPointerEffect } from './effects';

export function exioSwitch(node: HTMLInputElement): ExioNode {
  const effect = exioPointerEffect(node, {
    borderStyle: 'static',
  });
  const s1 = styler(node);
  s1.innerHTML = `
    .${s1.id} {
      -webkit-appearance: none;
      width: 48px;
      height: 20px;
      border-radius: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: visible;

      --exio-border-width: 2px;
      --exio-transition-duration: 0.2s;
      --exio-selected-indicator-color: white;
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
      transform: translateX(calc(
        ${-node.clientWidth / 2}px + ${node.clientHeight / 2}px
      )) scale(0.7);
      background-color: var(--exio-selected-indicator-color);
      transition: transform var(--exio-transition-duration);
    }
    .${s2.id}:checked::after {
      transform: translateX(calc(
        ${node.clientWidth / 2}px - ${node.clientHeight / 2}px
      )) scale(0.7);
    }
  `;
  return destroyer(effect.destroy, s1.remove, s2.remove);
}
