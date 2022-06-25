import { destroyer, styler } from './base';
import type { ExioNode } from './base';

export const exioIcon = (node: HTMLElement): ExioNode => {
  const s = styler(node);
  s.innerHTML = `
    .${s.id} {
      font-family: 'Exio Icons';
    }
  `;
  return destroyer(node.remove, s.remove);
};
