import { destroyer, styler } from './base';
import type { ExioNode } from './base';
import dialogPolyfill from 'dialog-polyfill';

export function exioDialog(node: HTMLDialogElement): ExioNode {
  const isOpen = node.getAttribute('open') !== null;
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
        transform: scale(1) translateY(-50%);
      }
      100% {
        opacity: 0;
        transform: scale(0) translateY(-50%);
      }
    }
    .${s.id} {
      --exio-transition-duration: 0.5s;
      border-radius: 0px;
      border: 0px solid transparent;
    }
    .${s.id}:not([open]) {
      display: block;
      position: fixed;
      left: 0px;
      top: 50%;
      margin: auto auto;
      transform: translateY(-50%);
      transform-origin: top center;
    }
    .${s.id}[open] {
      transform-origin: center center;
      animation: exio-dialog-fade-in var(--exio-transition-duration);
      animation-fill-mode: forwards;
    }
  `;
  dialogPolyfill.registerDialog(node);
  node.close();
  if (isOpen) {
    node.showModal();
  }
  const s2 = styler(node);
  s2.innerHTML = `
    .${s2.id}:not([open]) {
      display: none;
    }
  `;
  const anistarted = () => {
    s2.innerHTML = `
      .${s2.id}:not([open]) {
        animation: exio-dialog-fade-out var(--exio-transition-duration);
        animation-fill-mode: forwards;
      }
    `;
    node.removeEventListener('animationstart', anistarted);
  };
  node.addEventListener('animationstart', anistarted);
  return destroyer(s.remove, () => {
    if (s2) s2.remove();
  });
}
