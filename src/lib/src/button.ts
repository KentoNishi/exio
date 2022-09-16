import { destroyer, styler } from './base';
import type { ExioNode } from './base';
import { exioPointerEffect } from './effects';
import { exioComponent } from './component';

export function exioButton(node: HTMLButtonElement): ExioNode {
  const component = exioComponent(node);
  const effect = exioPointerEffect(node);
  const s = styler(node);
  s.innerHTML = `
    .${s.id} {
      user-select: none;
    }
  `;
  return destroyer(() => {
    effect.destroy();
    s.remove();
    component.destroy();
  });
}
