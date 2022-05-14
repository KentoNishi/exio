import { destroyer, styler } from './base';
import type { ExioNode } from './base';
import { exioPointerEffect } from './effects';

export function exioDropdown(node: HTMLSelectElement): ExioNode {
  const effect = exioPointerEffect(node);
  const s = styler(node);
  s.innerHTML = `
    .${s.id} {
      user-select: none;
    }
  `;
  const onDown = (e: MouseEvent | TouchEvent) => {
    return;
  };
  node.addEventListener('mousedown', onDown);
  node.addEventListener('touchstart', onDown);
  return destroyer(effect.destroy, s.remove, () => {
    node.removeEventListener('mousedown', onDown);
    node.removeEventListener('touchstart', onDown);
  });
}
