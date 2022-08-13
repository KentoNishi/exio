import { destroyer, styler } from './base';
import type { ExioNode } from './base';
import { exioPointerEffect } from './effects';

export function exioAccordion(node: HTMLDetailsElement): ExioNode {
  const effect = exioPointerEffect(node, {
    borderStyle: 'hover',
    disableClicking: true,
  });
  const s = styler(node);
  s.innerHTML = `
    .${s.id} {
    }
  `;
  return destroyer(effect.destroy, s.remove);
}
