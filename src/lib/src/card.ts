import { destroyer, styler } from './base';
import type { ExioNode } from './base';
import { exioPointerEffect } from './effects';

export function exioCard(node: HTMLElement): ExioNode {
  const effect = exioPointerEffect(node);
  const s = styler(node);
  s.innerHTML = `
    .${s.id} {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0px;
      user-select: none;
    }
  `;
  return destroyer(effect.destroy, s.remove);
}
