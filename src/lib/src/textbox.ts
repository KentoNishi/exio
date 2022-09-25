import { destroyer, styler, updater } from './base';
import type { ExioNode } from './base';
import { exioPointerEffect } from './effects';
import { exioComponent } from './component';

export const textboxVars = {
  backgroundColor: {
    prop: 'background-color',
    val: '',
  },
  borderWidth: {
    prop: '--exio-border-width',
    val: '',
  },
  disabledFilter: {
    prop: '--exio-disabled-filter',
    val: '',
  },
  focusedBorderColor: {
    prop: '--exio-focused-border-color',
    val: '',
  },
  hoverBorderColor: {
    prop: '--exio-hover-border-color',
    val: '',
  },
};

export type ExioTextboxArgs = Partial<{
  [Prop in keyof typeof textboxVars]: typeof textboxVars[Prop]['val'] | string;
}>;

export function exioTextbox(
  node: HTMLInputElement | HTMLTextAreaElement,
  opts: ExioTextboxArgs = {}
): ExioNode<ExioTextboxArgs> {
  const component = exioComponent(node);
  const effect = exioPointerEffect(node, {
    disableClicking: true,
    borderStyle: 'hover',
    focusable: true,
  });
  const s = styler(node);
  s.innerHTML = `
    .${s.id} {
      padding: 0.25em 0.25em;
    }
  `;
  return {
    ...updater(opts, node, textboxVars),
    ...destroyer(() => {
      effect.destroy();
      s.remove();
      component.destroy();
    }),
  };
}
