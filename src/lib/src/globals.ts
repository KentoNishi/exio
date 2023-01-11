import { destroyer, styler, updater } from './base';
import type { ExioNode } from './base';

export const globalStylerVars = {};

export type ExioGlobalStylerArgs = Partial<{
  [Prop in keyof typeof globalStylerVars]:
    | typeof globalStylerVars[Prop]['val']
    | string;
}>;

export function exioGlobalStyler(
  node: HTMLElement,
  opts: ExioGlobalStylerArgs = {}
): ExioNode<ExioGlobalStylerArgs> {
  const s = styler(node);
  s.innerHTML = `
    body {
      margin: 0;
      padding: 0;
    }

    * {
      font-family: 'Exio UI';
    }

    * ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    
    * ::-webkit-scrollbar-track {
      background: transparent;
    }
    
    * ::-webkit-scrollbar-thumb {
      background: #888;
    }
    
    * ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }

    * ::-webkit-scrollbar-corner {
      background: transparent;
    }
    
    * {
      scrollbar-width: thin;
      scrollbar-color: #888 transparent;
    }
  `;
  return {
    ...updater(opts, node, globalStylerVars),
    ...destroyer(() => {
      s.remove();
    }),
  };
}
