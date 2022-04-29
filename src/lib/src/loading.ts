import { destroyer, styler } from './base';
import type { ExioNode } from './base';

export function exioLoadingBar(node: HTMLElement): ExioNode {
  const s = styler(node);
  s.innerHTML = `
    .${s.id} {
      --exio-loading-bar-thumb-color: dodgerblue;
      display: flex;
      align-items: center;
      overflow: hidden;
      animation-duration: 1s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      animation-direction: normal;
      position: relative;
    }
    @keyframes exio-loading-bar {
      0% {
        left: -100%;
      }
      50% {
      }
      100% {
        left: 100%;
      }
    }
    .${s.id}::before {
      content: '';
      position: absolute;
      background-image: linear-gradient(to left, var(--exio-loading-bar-thumb-color), transparent);
      height: 100%;
      width: 100%;
      animation: exio-loading-bar;
      animation-duration: inherit;
      animation-iteration-count: inherit;
      animation-timing-function: inherit;
      animation-direction: inherit;
    }
  `;
  return destroyer(s.remove);
}
