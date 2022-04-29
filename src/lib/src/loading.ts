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
      animation-duration: 0.8s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      animation-direction: normal;
      position: relative;
    }
    @keyframes exio-loading-bar {
      0% {
        width: 0px;
        left: 0px;
      }
      50% {
        width: 100%;
      }
      100% {
        width: 0px;
        right: 0px;
      }
    }
    .${s.id}::before {
      content: '';
      position: absolute;
      background-color: var(--exio-loading-bar-thumb-color);
      height: 100%;
      animation: exio-loading-bar;
      animation-duration: inherit;
      animation-iteration-count: inherit;
      animation-timing-function: inherit;
      animation-direction: inherit;
    }
  `;
  return destroyer(s.remove);
}
