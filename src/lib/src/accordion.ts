import { destroyer, styler } from './base';
import type { ExioNode } from './base';
import { exioPointerEffect } from './effects';

export function exioAccordion(node: HTMLDetailsElement): ExioNode {
  const summary = node.querySelector('summary');
  const effect = exioPointerEffect(summary, {
    borderStyle: 'reactive',
  });
  const s1 = styler(summary);
  s1.innerHTML = `
    .${s1.id} {
      cursor: default;
      user-select: none;
    }
  `;
  const s2 = styler(node);
  s2.innerHTML = `
    .${s2.id} > *:not(summary) {
      background-color: red;
    }
  `;
  const child = node.querySelector('*:not(summary)');
  const s3 = styler(node);
  node.addEventListener('toggle', () => {
    const c = getComputedStyle(child);
    s3.innerHTML = `
      .${s3.id} {
      }
    `;
  });
  return destroyer(effect.destroy, s1.remove, s2.remove, s3.remove);
}
