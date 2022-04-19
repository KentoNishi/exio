import { destroyer, applyStyle, getMergedObject, styler } from './base';
import type { ExioNode } from './base';

export const defaultAppOptions = {
  fillBody: true,
  additionalStyles: {
    fontFamily:
      'Segoe UI, Frutiger, Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif',
    backgroundColor: 'black',
    position: 'absolute',
    minWidth: '100%',
    minHeight: '100%',
  } as Partial<CSSStyleDeclaration>,
};

export type AppOptions = typeof defaultAppOptions;

export function customExioApp(options: Partial<AppOptions> = {}) {
  const clonedOptions = getMergedObject(
    defaultAppOptions,
    options
  ) as Partial<AppOptions>;
  return (node: HTMLElement): ExioNode => {
    applyStyle(node, clonedOptions.additionalStyles);
    let style: HTMLStyleElement | null = null;
    if (clonedOptions.fillBody) {
      applyStyle(document.body, {
        padding: '0',
        margin: '0',
        width: '100%',
        height: '100%',
      });
      style = styler(node);
      style.innerHTML += `
        ::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: #888;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
        ::-webkit-scrollbar-corner {
          background: transparent;
        }
        * {
          scrollbar-width: thin;
          overflow: overlay;
        }
      `;
    }
    return destroyer(node, () => style.remove());
  };
}

export function exioApp(node: HTMLElement): ExioNode {
  return customExioApp()(node);
}
