import { destroyer, styler, toMillis } from './base';
import type { ExioNode } from './base';
import { exioPointerEffect } from './effects';

export function exioAccordion(node: HTMLDetailsElement): ExioNode {
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
    .${s1.id}:after {
      content: 'expand_more';
      font-family: 'Exio Icons';
      font-size: 1.5em;
      position: absolute;
      right: 0.25em;
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
  summary.addEventListener('click', (e) => {
    const computed = getComputedStyle(summary);
    if (node.open) {
      e.preventDefault();
      s3.innerHTML = `
        .${s3.id} {
          max-height: ${summary.offsetHeight}px;
        }
      `;
      s4.innerHTML = `
        .${s4.id}:after {
          transform: rotate(0deg);
        }
      `;
      setTimeout(() => {
        node.open = false;
      }, toMillis(computed.getPropertyValue('--exio-slow-transition-duration')));
    } else {
      s3.innerHTML = `
        .${s3.id} {
          max-height: ${summary.offsetHeight}px;
        }
      `;
      s4.innerHTML = `
        .${s4.id}:after {
          transform: rotate(180deg);
        }
      `;
      setTimeout(() => {
        s3.innerHTML = `
          .${s3.id} {
            max-height: ${summary.offsetHeight + child.offsetHeight}px;
          }
        `;
      }, 0);
    }
  });
  return destroyer(effect.destroy, s1.remove, s2.remove, s3.remove);
}