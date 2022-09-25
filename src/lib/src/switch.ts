import { destroyer, styler, updater } from './base';
import type { ExioNode } from './base';
import { exioPointerEffect } from './effects';
import { exioComponent } from './component';

export const switchVars = {
  backgroundColor: {
    prop: 'background-color',
    val: '',
  },
  borderWidth: {
    prop: '--exio-border-width',
    val: '',
  },
  checkedFillColor: {
    prop: '--exio-switch-checked-fill-color',
    val: '',
  },
  switchThumbColor: {
    prop: '--exio-switch-thumb-color',
    val: '',
  },
  transitionDuration: {
    prop: '--exio-standard-transition-duration',
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
  clickingScale: {
    prop: '--exio-clicking-scale',
    val: '',
  },
  disabledFilter: {
    prop: '--exio-disabled-filter',
    val: '',
  },
};

export type ExioSwitchArgs = Partial<{
  [Prop in keyof typeof switchVars]: typeof switchVars[Prop]['val'] | string;
}>;

export function exioSwitch(
  node: HTMLInputElement,
  opts: ExioSwitchArgs = {}
): ExioNode<ExioSwitchArgs> {
  const component = exioComponent(node);
  const effect = exioPointerEffect(node, {
    borderStyle: 'static',
  });
  const s1 = styler(node);
  s1.innerHTML = `
    .${s1.id} {
      -webkit-appearance: none;
      width: 48px;
      height: 20px;
      border-radius: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: visible;
      border-color: black;
      background-color: var(--exio-switch-checked-fill-color);
    }
    [data-theme=dark] .${s1.id} {
      border-color: white;
    }
    .${s1.id}:not(:checked) {
      background-color: transparent;
    }
  `;
  const s2 = styler(node);
  s2.innerHTML = `
    .${s2.id}::after {
      content: '';
      position: absolute;
      width: ${node.clientHeight}px;
      height: ${node.clientHeight}px;
      border-radius: 100%;
      transform: translateX(calc(
        ${-node.clientWidth / 2}px + ${node.clientHeight / 2}px
      )) scale(0.55);
      background-color: var(--exio-switch-thumb-color);
      transition: transform var(--exio-standard-transition-duration);
    }
    .${s2.id}:checked::after {
      transform: translateX(calc(
        ${node.clientWidth / 2}px - ${node.clientHeight / 2}px
      )) scale(0.5);
    }
  `;
  return {
    ...updater(opts, node, switchVars),
    ...destroyer(() => {
      effect.destroy();
      s1.remove();
      s2.remove();
      component.destroy();
    }),
  };
}
