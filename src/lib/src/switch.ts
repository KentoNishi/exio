import {
  getMergedObject,
  destroyer,
  getRandomString,
  applyStyle,
} from './base';
import { defaultToggleOptions } from './toggle';

const defaultSwitchOptions = {
  ...defaultToggleOptions,
  transitionDuration: 0.2,
  thumbColor: 'white',
  additionalStyles: getMergedObject(defaultToggleOptions.additionalStyles, {
    outline: 'none',
    webkitAppearance: 'none',
    width: '2.75rem',
    height: '1.25rem',
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: '2px',
  } as Partial<CSSStyleDeclaration>),
};

type SwitchOptions = typeof defaultSwitchOptions;

export function customExioSwitch(options: Partial<SwitchOptions> = {}) {
  const clonedOptions = getMergedObject(
    defaultSwitchOptions,
    options
  ) as Partial<SwitchOptions>;
  return (node: HTMLInputElement): ExioNode => {
    node.type = 'checkbox';
    applyStyle(node, {
      ...clonedOptions.additionalStyles,
      borderRadius: clonedOptions.additionalStyles.height,
      border: `${clonedOptions.additionalStyles.borderWidth} solid ${clonedOptions.thumbColor}`,
    });
    const id = getRandomString();
    const style =
      document.getElementById(id) || document.createElement('style');
    style.id = id;
    node.classList.add(id);
    style.innerHTML = `
      .${id}::after {
        content: '';
        width: calc(${clonedOptions.additionalStyles.height} / 2);
        height: calc(${clonedOptions.additionalStyles.height} / 2);
        transform: translateX(calc(
          100% - ${clonedOptions.additionalStyles.width} / 2
        ));
        top: 0px;
        left: 0px;
        background-color: ${clonedOptions.thumbColor};
        border-radius: 50%;
        transition: transform ${clonedOptions.transitionDuration}s;
      }
      .${id}:checked::after {
        transform: translateX(calc(
          ${clonedOptions.additionalStyles.width} / 2 - 100%
        ));
      }
      .${id}:hover {
        filter: ${clonedOptions.hoverFilter};
      }
      .${id}:active {
        filter: ${clonedOptions.activeFilter};
      }
      .${id}:not(:checked):not(:active) {
        background-color: ${clonedOptions.uncheckedColor} !important;
      }
    `;
    document.head.appendChild(style);
    return destroyer(node);
  };
}

export function exioSwitch(node: HTMLInputElement): ExioNode {
  return customExioSwitch()(node);
}
