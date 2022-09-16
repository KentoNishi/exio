import { destroyer, styler } from './base';
import type { ExioNode } from './base';
import { exioPointerEffect } from './effects';
import { exioComponent } from './component';

export const exioCheckbox = (node: HTMLInputElement): ExioNode => {
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
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0px;
      background-color: var(--exio-selected-background-color);
    }
    .${s1.id}:not(:checked) {
      background-color: transparent;
    }
  `;
  const s2 = styler(node);
  s2.innerHTML = `
    .${s2.id}::after {
      content: 'check';
      font-family: 'Exio Icons';
      position: absolute;
      width: ${node.clientHeight}px;
      height: ${node.clientHeight}px;
      transform: scale(0);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--exio-selected-indicator-color);
    }
    .${s2.id}:checked::after {
      transform: scale(1.1);
    }
  `;
  return destroyer(() => {
    effect.destroy();
    s1.remove();
    s2.remove();
    component.destroy();
  });
};
