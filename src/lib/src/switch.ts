import { getMergedObject, destroyer, getRandomString, applyStyle } from '..';
import { defaultToggleOptions } from './toggle';

const defaultSwitchOptions = {
  ...defaultToggleOptions,
  additionalStyles: getMergedObject(defaultToggleOptions.additionalStyles, {
    outline: 'none',
    border: 'none',
    webkitAppearance: 'none',
    width: '2.5rem',
    height: '1.5rem',
  } as Partial<CSSStyleDeclaration>),
};

type SwitchOptions = typeof defaultSwitchOptions;

export function customExioSwitch(options: Partial<SwitchOptions> = {}) {
  const clonedOptions = getMergedObject(defaultSwitchOptions, options);
  return (node: HTMLInputElement): ExioNode => {
    node.type = 'checkbox';
    applyStyle(node, defaultSwitchOptions.additionalStyles);
    const id = getRandomString();
    console.log(clonedOptions);
    const style =
      document.getElementById(id) || document.createElement('style');
    style.id = id;
    node.classList.add(id);
    style.innerHTML = `
      .${id}::after {
        content: '';
        position: absolute;
        width: ${clonedOptions.additionalStyles.height};
        height: ${clonedOptions.additionalStyles.height};
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
