import { applyGlassEffect, styler } from './base';
import { getMergedObject, destroyer, applyStyle } from './base';
import type { ExioNode } from './base';
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
    overflow: 'visible',
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
    applyGlassEffect(node, {
      borderWidth: 0,
    });
    const style = styler(node);
    style.innerHTML += `
      .${style.id}::after {
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
      .${style.id}:checked::after {
        transform: translateX(calc(
          ${clonedOptions.additionalStyles.width} / 2 - 100%
        ));
      }
      .${style.id}:active {
        filter: ${clonedOptions.activeFilter};
      }
      .${style.id}:not(:checked):not(:active) {
        background-color: ${clonedOptions.uncheckedColor} !important;
      }
      .${style.id}::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border: ${clonedOptions.additionalStyles.borderWidth} solid ${clonedOptions.thumbColor};
        border-radius: inherit;
        z-index: 100;
      }
    `;
    applyStyle(node, {
      ...clonedOptions.additionalStyles,
      borderRadius: clonedOptions.additionalStyles.height,
      border: `${clonedOptions.additionalStyles.borderWidth} solid ${clonedOptions.thumbColor}`,
    });
    return destroyer(node, () => style.remove());
  };
}

export function exioSwitch(node: HTMLInputElement): ExioNode {
  return customExioSwitch()(node);
}
