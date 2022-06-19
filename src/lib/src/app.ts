import { destroyer, styler } from './base';
import type { ExioNode } from './base';

export function exioApp(node: HTMLElement): ExioNode {
  const s = styler(node);
  s.innerHTML = `
    .${s.id} {
      background-color: black;
      min-width: 100%;
      min-height: 100%;
      position: absolute;
      color: white;
      font-size: 1rem;
      font-family: Segoe UI, Frutiger, Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif;
    }

    body {
      margin: 0;
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
    
    * {
      scrollbar-width: thin;
      scrollbar-color: #888 transparent;
    }
  `;
  return destroyer(node.remove, s.remove);
}
