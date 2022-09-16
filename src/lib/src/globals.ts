import { destroyer, styler } from './base';
import type { ExioNode } from './base';
import { font } from './consts';

export function exioGlobalStyler(node: HTMLElement): ExioNode {
  const s = styler(node);
  s.innerHTML = `
    body {
      margin: 0;
      padding: 0;
    }

    * {
      ${font}
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
  return destroyer(() => {
    s.remove();
  });
}
