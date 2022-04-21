import { destroyer, styler } from './base';
import type { ExioNode } from './base';

export function exioApp(node: HTMLElement): ExioNode {
  const s = styler(node);
  s.innerHTML = `
    .${s.id} {
      background-color: #222;
      min-width: 100%;
      min-height: 100%;
      position: absolute;
    }
    body {
      margin: 0;
      width: 50%;
      height: 50%;
    }
  `;
  return destroyer([node, s]);
}
