import { destroyer, styler } from './base';
import type { ExioNode } from './base';

export function exioFlyInAnimation(node: HTMLElement): ExioNode {
  const s = styler(node);
  s.innerHTML = `
    @keyframes exio-fly-in {
      from {
        transform: translateY(50%);
        opacity: 0;
      }
      to {
        transform: translateY(0%);
        opacity: 1;
      }
    }
    .${s.id} {
      animation: exio-fly-in;
      animation-duration: 0.6s;
      animation-fill-mode: forwards;
      opacity: 0;
      transform: translateY(50%);
    }
  `;
  return destroyer(node.remove);
}

export function exioFadeInAnimation(node: HTMLElement): ExioNode {
  const s = styler(node);
  s.innerHTML = `
    @keyframes exio-fade-in {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    .${s.id} {
      animation: exio-fade-in;
      animation-duration: 0.6s;
      animation-fill-mode: forwards;
      opacity: 0;
    }
  `;
  return destroyer(node.remove);
}
