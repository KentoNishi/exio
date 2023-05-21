import { destroyer, styler, toMillis, updater } from './base';
import type { ExioNode } from './base';
import { exioPointerEffect, pointerEffectVars } from './effects';
import { exioComponent } from './component';
import { createExioIconsFont } from './icon';

export const accordionVars = {
  transitionDuration: {
    prop: '--exio-slow-transition-duration',
    val: '',
  },
  ...pointerEffectVars,
};

export type ExioAccordionArgs = Partial<{
  [Prop in keyof typeof accordionVars]:
    | typeof accordionVars[Prop]['val']
    | string;
}>;

export function exioAccordion(
  node: HTMLDetailsElement,
  opts: ExioAccordionArgs = {}
): ExioNode<ExioAccordionArgs> {
  const component = exioComponent(node);
  createExioIconsFont();
  const summary = node.querySelector('summary');
  const effect = exioPointerEffect(summary, {
    borderStyle: 'reactive',
  });
  const s1 = styler(summary);
  s1.innerHTML = `
    .${s1.id} {
      cursor: default;
      user-select: none;
      position: relative;
    }
    .${s1.id}::marker{
      font-size: 0px;
    }
    .${s1.id}::-webkit-details-marker {
      display: none;
    }
    .${s1.id}::after {
      content: 'expand_more';
      font-family: 'Material Icons';
      font-size: 1.5em;
      position: absolute;
      right: 0.25em;
      top: 0px;
      transform: rotate(0deg);
      transition: transform var(--exio-slow-transition-duration);
    }
  `;
  const s2 = styler(node);
  s2.innerHTML = `
    .${s2.id} {
      transition: max-height var(--exio-slow-transition-duration);
      overflow: hidden;
    }
  `;
  const child = node.querySelector('*:not(summary)') as HTMLElement;
  const s3 = styler(node);
  const s4 = styler(summary);
  let timeout: ReturnType<typeof setTimeout> | undefined;
  const summaryClickListener = (e) => {
    if (timeout) clearTimeout(timeout);
    const computed = getComputedStyle(summary);
    const getT = () =>
      toMillis(computed.getPropertyValue('--exio-slow-transition-duration'));
    const fullHeight = () => summary.offsetHeight + child.offsetHeight;
    if (node.open) {
      e.preventDefault();
      s3.innerHTML = `
        .${s3.id} {
          max-height: ${fullHeight()}px;
        }
      `;
      setTimeout(() => {
        s3.innerHTML = `
        .${s3.id} {
          max-height: ${summary.offsetHeight}px;
        }
      `;
        s4.innerHTML = `
        .${s4.id}::after {
          transform: rotate(0deg);
        }
      `;
        timeout = setTimeout(() => {
          node.open = false;
        }, getT());
      }, 0);
    } else {
      s3.innerHTML = `
        .${s3.id} {
          max-height: ${summary.offsetHeight}px;
        }
      `;
      s4.innerHTML = `
        .${s4.id}::after {
          transform: rotate(180deg);
        }
      `;
      setTimeout(() => {
        s3.innerHTML = `
          .${s3.id} {
            max-height: ${fullHeight()}px;
          }
        `;
        timeout = setTimeout(() => {
          s3.innerHTML = '';
        }, getT());
      }, 0);
    }
  };
  summary.addEventListener('click', summaryClickListener);
  return {
    ...updater(opts, node, accordionVars),
    ...destroyer(() => {
      effect.destroy();
      s1.remove();
      s2.remove();
      s3.remove();
      component.destroy();
      summary.removeEventListener('click', summaryClickListener);
    }),
  };
}
