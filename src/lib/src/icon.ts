import { destroyer, styler } from './base';
import type { ExioNode } from './base';

const defaultIconOptions = {
  fontUrl:
    'https://fonts.gstatic.com/s/materialicons/v126/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2',
};

export type IconOptions = typeof defaultIconOptions;

export function customExioIcon(options = defaultIconOptions) {
  return (node: HTMLElement): ExioNode => {
    const style = styler(node);
    style.innerHTML += `
      @font-face {
        font-family: 'Material Icons';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('${options.fontUrl}') format('woff2');
      }
    `;
    node.style.setProperty('font-family', 'Material Icons', 'important');
    return destroyer(node, () => style.remove());
  };
}

export function exioIcon(node: HTMLElement): ExioNode {
  return customExioIcon()(node);
}
