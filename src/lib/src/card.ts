import { destroyer, styler } from './base';
import type { ExioNode } from './base';
import { exioPointerEffect } from './effects';
import { exioComponent } from './component';

export function exioCard(node: HTMLElement): ExioNode {
  const component = exioComponent(node);
  const effect = exioPointerEffect(node, {
    borderStyle: 'hover',
    disableClicking: true,
  });
  const s = styler(node);
  s.innerHTML = `
    .${s.id} {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0px;
    }
  `;
  return destroyer(() => {
    effect.destroy();
    s.remove();
    component.destroy();
  });
}
