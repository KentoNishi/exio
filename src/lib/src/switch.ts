import {
  getMergedStyles,
  applyGlassEffect,
  destroyer,
  getRandomString,
} from '..';
import { defaultToggleOptions } from './toggle';
import type { ToggleOptions } from './toggle';

export function customExioSwitch(options: Partial<ToggleOptions> = {}) {
  const clonedOptions = getMergedStyles(
    defaultToggleOptions,
    options.exioStyles
  );
  return (node: HTMLInputElement): ExioNode => {
    node.type = 'checkbox';
    node.style.webkitAppearance = 'none';
    applyGlassEffect(node, {
      clickable: false,
      innerHoverRadius: 0,
      exioStyles: clonedOptions,
    });
    const id = getRandomString();
    console.log(getRandomString);
    const style =
      document.getElementById(id) || document.createElement('style');
    style.id = id;
    node.classList.add(id);
    style.innerHTML = `
      .${id}::after {
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        background-color: white;
      }
    `;
    document.head.appendChild(style);
    return destroyer(node);
  };
}

export function exioSwitch(node: HTMLInputElement): ExioNode {
  return customExioSwitch()(node);
}
