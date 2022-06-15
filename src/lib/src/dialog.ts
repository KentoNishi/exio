import { destroyer, styler } from './base';
import type { ExioNode } from './base';
import dialogPolyfill from 'dialog-polyfill';

export function exioDialog(node: HTMLDialogElement): ExioNode {
  const s = styler(node);
  s.innerHTML = `
    .${s.id}::backdrop {
      background: repeating-linear-gradient(
        45deg,
        rgba(255, 0, 0, 0.2),
        rgba(255, 0, 0, 0.2) 1px,
        rgba(255, 0, 0, 0.3) 1px,
        rgba(255, 0, 0, 0.3) 20px
      );
    }
  `;
  dialogPolyfill.registerDialog(node);
  const isOpen = Boolean(node.getAttribute('open'));
  node.close();
  if (isOpen) {
    node.showModal();
  }
  return destroyer(node.remove, s.remove);
}
