import { destroyer, styler } from './base';
import type { ExioNode } from './base';
import { exioPointerEffect } from './effects';

export function exioTextbox(
  node: HTMLInputElement | HTMLTextAreaElement
): ExioNode {
  const effect = exioPointerEffect(node, {
    disableClicking: true,
    borderStyle: 'hover',
    focusable: true,
  });
  const s = styler(node);
  s.innerHTML = `
    .${s.id} {
      padding: 0.25em 0.25em;
    }
    .${s.id}:focus {
      color: var(--exio-focused-text-color);
    }
  `;
  return destroyer(() => {
    effect.destroy();
    s.remove();
  });
}
