import { destroyer, styler, updater } from './base';
import type { ExioNode } from './base';
import { exioPointerEffect } from './effects';
import { exioComponent } from './component';
import { createExioIconsFont } from './icon';

export const checkboxVars = {
  backgroundColor: {
    prop: 'background-color',
    val: '',
  },
  checkedFillColor: {
    prop: '--exio-checkbox-checked-fill-color',
    val: '',
  },
  checkmarkColor: {
    prop: '--exio-checkbox-checkmark-color',
    val: '',
  },
  borderWidth: {
    prop: '--exio-border-width',
    val: '',
  },
  clickingScale: {
    prop: '--exio-clicking-scale',
    val: '',
  },
  disabledFilter: {
    prop: '--exio-disabled-filter',
    val: '',
  },
  hoverBackgroundScale: {
    prop: '--exio-hover-background-scale',
    val: '',
  },
  hoverBodyColor: {
    prop: '--exio-hover-body-color',
    val: '',
  },
  borderColor: {
    prop: 'border-color',
    val: '',
  },
  transitionDuration: {
    prop: '--exio-standard-transition-duration',
    val: '',
  },
};

export type ExioCheckboxArgs = Partial<{
  [Prop in keyof typeof checkboxVars]:
    | typeof checkboxVars[Prop]['val']
    | string;
}>;

export const exioCheckbox = (
  node: HTMLInputElement,
  opts: ExioCheckboxArgs = {}
): ExioNode<ExioCheckboxArgs> => {
  const component = exioComponent(node);
  createExioIconsFont();
  const effect = exioPointerEffect(node, {
    borderStyle: 'static',
  });
  const s1 = styler(node);
  s1.innerHTML = `
    .${s1.id} {
      -webkit-appearance: none;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0px;
      background-color: var(--exio-checkbox-checked-fill-color);
    }
    .${s1.id}:not(:checked) {
      background-color: transparent;
    }
  `;
  const s2 = styler(node);
  const timeout = setTimeout(() => {
    s2.innerHTML = `
      .${s2.id}::after {
        content: 'check';
        font-family: 'Material Icons';
        position: absolute;
        width: ${node.clientHeight}px;
        height: ${node.clientHeight}px;
        transform: scale(0);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--exio-checkbox-checkmark-color);
      }
      .${s2.id}:checked::after {
        transform: scale(1.1);
      }
    `;
  }, 0);
  return {
    ...updater(opts, node, checkboxVars),
    ...destroyer(() => {
      effect.destroy();
      s1.remove();
      s2.remove();
      component.destroy();
      clearTimeout(timeout);
    }),
  };
};
