import { destroyer, getMergedObject, getRandomString } from './base';
import type { ExioNode } from './base';

export const defaultTransitionOptions = {
  duration: 0.3,
};

export type TransitionOptions = typeof defaultTransitionOptions;

export function customExioFlyInAnimation(
  options: Partial<TransitionOptions> = {}
) {
  const clonedOptions = getMergedObject(
    defaultTransitionOptions,
    options
  ) as Partial<TransitionOptions>;
  return (node: HTMLElement): ExioNode => {
    const id = getRandomString();
    const style =
      document.getElementById(id) || document.createElement('style');
    style.id = id;
    node.classList.add(id);
    style.innerHTML += `
      .${id} {
        opacity: 0;
        animation: exio-fly-transition ${clonedOptions.duration}s;
        animation-fill-mode: forwards;
      }
      @keyframes exio-fly-transition {
        from {
          transform: translateY(50%);
          opacity: 0;
        }
        to {
          transform: translateY(0);
          opacity: 1;
        }
      }
    `;
    document.body.appendChild(style);
    return destroyer(node);
  };
}

export function exioFlyInAnimation(node: HTMLElement): ExioNode {
  return customExioFlyInAnimation()(node);
}

export function customExioFadeInAnimation(
  options: Partial<TransitionOptions> = {}
) {
  const clonedOptions = getMergedObject(
    defaultTransitionOptions,
    options
  ) as Partial<TransitionOptions>;
  return (node: HTMLElement): ExioNode => {
    const id = getRandomString();
    const style =
      document.getElementById(id) || document.createElement('style');
    style.id = id;
    node.classList.add(id);
    style.innerHTML += `
      .${id} {
        opacity: 0;
        animation: exio-fade-transition ${clonedOptions.duration}s;
        animation-fill-mode: forwards;
      }
      @keyframes exio-fade-transition {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    `;
    document.body.appendChild(style);
    return destroyer(node);
  };
}

export function exioFadeInAnimation(node: HTMLElement): ExioNode {
  return customExioFadeInAnimation()(node);
}
