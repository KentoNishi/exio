import { destroyer, styler, updater } from './base';
import type { ExioNode } from './base';
import { exioPointerEffect } from './effects';
import { exioComponent } from './component';

export const cardVars = {
  backgroundColor: {
    prop: 'background-color',
    val: '',
  },
  borderWidth: {
    prop: '--exio-border-width',
    val: '',
  },
  hoverBorderColor: {
    prop: '--exio-hover-border-color',
    val: '',
  },
};

export type ExioCardArgs = Partial<{
  [Prop in keyof typeof cardVars]: typeof cardVars[Prop]['val'] | string;
}>;

export function exioCard(
  node: HTMLElement,
  opts: ExioCardArgs = {}
): ExioNode<ExioCardArgs> {
  const component = exioComponent(node);
  const effect = exioPointerEffect(node, {
    borderStyle: 'hover',
    disableClicking: true,
  });
  const s = styler(node);
  s.innerHTML = `
    .${s.id} {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0px;
    }
  `;
  return {
    ...updater(opts, node, cardVars),
    ...destroyer(() => {
      effect.destroy();
      s.remove();
      component.destroy();
    }),
  };
}
