import { destroyer, styler } from './base';
import type { ExioNode } from './base';
import { exioComponent } from './component';

export function exioApp(node: HTMLElement): ExioNode {
  const s = styler(node);
  const c = exioComponent(node);
  const updateStyle = () => {
    const isDark =
      (node.getAttribute('data-theme') || '').toLowerCase() === 'dark';
    s.innerHTML = `
      .${s.id} {
        background-color: ${isDark ? 'black' : 'white'};
      }

      body {
        margin: 0;
        padding: 0;
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
  };
  const mutationObserver = new MutationObserver(updateStyle);
  mutationObserver.observe(node, {
    attributes: true,
    attributeFilter: ['data-theme'],
  });
  updateStyle();
  return destroyer(() => {
    s.remove();
    c.destroy();
    mutationObserver.disconnect();
  });
}
