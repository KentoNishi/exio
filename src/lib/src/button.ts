import { destroyer, updater, styler } from './base';
import type { ExioNode } from './base';
import { exioPointerEffect, pointerEffectVars } from './effects';
import { exioComponent } from './component';

export const buttonVars = {
  backgroundColor: {
    prop: 'background-color',
    val: '',
  },
  textColor: {
    prop: 'color',
    val: '',
  },
  ...pointerEffectVars,
};

export type ExioButtonArgs = Partial<{
  [Prop in keyof typeof buttonVars]: typeof buttonVars[Prop]['val'] | string;
}>;

export function exioButton(
  node: HTMLButtonElement,
  opts: ExioButtonArgs = {}
): ExioNode<ExioButtonArgs> {
  const component = exioComponent(node);
  const effect = exioPointerEffect(node);
  const s = styler(node);
  s.innerHTML = `
    .${s.id} {
      user-select: none;
    }
  `;

  return {
    ...updater(opts, node, buttonVars),
    ...destroyer(() => {
      effect.destroy();
      s.remove();
      component.destroy();
    }),
  };
}
