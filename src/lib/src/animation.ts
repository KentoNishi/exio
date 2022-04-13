import { destroyer, getMergedObject, getRandomString } from './base';
import type { ExioNode } from './base';

export const defaultAnimationOptions = {
  duration: 0.3,
};

export type AnimationOptions = typeof defaultAnimationOptions;

export function customExioFlyInAnimation(
  options: Partial<AnimationOptions> = {}
) {
  const clonedOptions = getMergedObject(
    defaultAnimationOptions,
    options
  ) as Partial<AnimationOptions>;
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
  options: Partial<AnimationOptions> = {}
) {
  const clonedOptions = getMergedObject(
    defaultAnimationOptions,
    options
  ) as Partial<AnimationOptions>;
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

export const defaultOpenAnimationOptions = {
  ...defaultAnimationOptions,
  duration: 0.5,
  scale: 0.95,
};

export type OpenAnimationOptions = typeof defaultOpenAnimationOptions;

export function customExioOpenAnimation(
  options: Partial<OpenAnimationOptions> = {}
) {
  const clonedOptions = getMergedObject(
    defaultOpenAnimationOptions,
    options
  ) as Partial<OpenAnimationOptions>;
  return (node: HTMLElement): ExioNode => {
    const id = getRandomString();
    const style =
      document.getElementById(id) || document.createElement('style');
    style.id = id;
    node.classList.add(id);
    style.innerHTML += `
      .${id} {
        opacity: 0;
        animation: exio-open-transition ${clonedOptions.duration}s;
        animation-fill-mode: forwards;
      }
      @keyframes exio-open-transition {
        from {
          opacity: 0;
          transform: scale(${clonedOptions.scale});
        }
        to {
          opacity: 1;
          scale: 1;
        }
      }
    `;
    document.body.appendChild(style);
    return destroyer(node);
  };
}

export function exioOpenAnimation(node: HTMLElement): ExioNode {
  return customExioOpenAnimation()(node);
}
