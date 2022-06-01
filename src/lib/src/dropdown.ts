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
    node.style.setProperty('transform', 'none', 'important');
    const { width, height, top, left } = node.getBoundingClientRect();
    node.style.removeProperty('transform');
    e.preventDefault();
    return;
  };
  const onUp = (e: MouseEvent | TouchEvent) => {
    return;
  };
  node.addEventListener('mousedown', onDown);
  node.addEventListener('touchstart', onDown);
  node.addEventListener('mouseup', onUp);
  node.addEventListener('touchend', onUp);
  return destroyer(effect.destroy, s.remove);
}
