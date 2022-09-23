import { destroyer, styler } from './base';
import type { ExioNode } from './base';
import { exioPointerEffect } from './effects';
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
  borderColor: {
    prop: '--exio-hover-border-color',
    val: '',
  },
};

export type ExioButtonArgs = Partial<{
  [Prop in keyof typeof buttonVars]: string;
}>;

export function exioButton(
  node: HTMLButtonElement,
  opts: ExioButtonArgs = {}
): ExioNode {
  const component = exioComponent(node);
  const effect = exioPointerEffect(node);
  const s = styler(node);
  s.innerHTML = `
    .${s.id} {
      user-select: none;
    }
  `;

  Object.entries(opts).forEach(([prop, val]) => {
    node.style.setProperty(buttonVars[prop].prop, `${val}`);
  });

  return destroyer(() => {
    effect.destroy();
    s.remove();
    component.destroy();
  });
}
