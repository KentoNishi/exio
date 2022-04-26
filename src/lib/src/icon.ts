import { destroyer, styler } from './base';
import type { ExioNode } from './base';

export const exioIcon = (node: HTMLElement): ExioNode => {
  const s = styler(node);
  s.innerHTML = `
    @font-face {
      font-family: 'Exio Icons';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url('https://fonts.gstatic.com/s/materialicons/v126/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2') format('woff2');
    }
    .${s.id} {
      font-family: 'Exio Icons';
    }
  `;
  return destroyer(node.remove);
};
