import { destroyer, styler } from './base';
import type { ExioNode } from './base';
import dialogPolyfill from 'dialog-polyfill';

export function exioDialog(node: HTMLDialogElement): ExioNode {
  const s = styler(node);
  s.innerHTML = `
    @keyframes exio-dialog-fade-in {
      0% {
        opacity: 0;
        transform: scale(0);
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }
    @keyframes exio-dialog-fade-out {
      0% {
        opacity: 1;
        transform: scale(1);
      }
      100% {
        opacity: 0;
        transform: scale(0);
      }
    }
    .${s.id} {
      display: unset;
      position: fixed;
      margin: auto;
      top: 0px;
      left: 0px;
      --exio-transition-duration: 2s;
      border-radius: 0px;
      border: 0px solid transparent;
      animation: exio-dialog-fade-out var(--exio-transition-duration);
      top: 50vh;
      transform: translateY(-50%);
    }
    .${s.id}[open] {
      animation: exio-dialog-fade-in var(--exio-transition-duration);
      animation-fill-mode: forwards;
      top: revert;
      transform: revert;
    }
  `;
  dialogPolyfill.registerDialog(node);
  const isOpen = Boolean(node.getAttribute('open'));
  node.close();
  if (isOpen) {
    node.showModal();
  }
  return destroyer(s.remove);
}
