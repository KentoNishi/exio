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

export function exioZoomInAnimation(node: HTMLElement): ExioNode {
  const s = styler(node);
  s.innerHTML = `
    @keyframes exio-zoom-in {
      from {
        transform: scale(var(--exio-zoom-in-animation-scale));
        opacity: 0;
      }
      to {
        transform: scale(1);
        opacity: 1;
      }
    }
    .${s.id} {
      animation: exio-zoom-in;
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
      opacity: 0;
    }
  `;
  return destroyer(node.remove);
}

export function exioLoadingBarAnimation(node: HTMLDivElement): ExioNode {
  const s = styler(node);
  s.innerHTML = `
    @keyframes exio-loading-bar {
      from {
        background-position: 100% 0;
      }
      to {
        background-position: 0 0;
      }
    }
    .${s.id} {
      background-image: linear-gradient(
        to right,
        var(--exio-loader-fill-color) 0%,
        var(--exio-loader-fill-color) 25%,
        transparent 25%,
        transparent 50%,
        var(--exio-loader-fill-color) 50%,
        var(--exio-loader-fill-color) 75%,
        transparent 75%,
        transparent 100%
      );
      background-size: 200% 100%;
      animation: exio-loading-bar var(--exio-loader-duration) linear infinite;
    }
  `;
  return destroyer(node.remove);
}
