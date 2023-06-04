import { destroyer, styler, updater } from './base';
import type { ExioNode } from './base';
import { exioComponent } from './component';

export function createExioIconsFont(): void {
  let font = document.querySelector(
    '#exio-icons-font'
  ) as HTMLLinkElement | null;
  if (!font) {
    font = document.createElement('link');
    font.id = 'exio-icons-font';
    const protocol = window.location.protocol === 'http:' ? 'http:' : 'https:';
    font.href = `${protocol}//fonts.googleapis.com/icon?family=Material+Icons`;
    font.rel = 'stylesheet';
    document.documentElement.appendChild(font);
  }
}

export const iconVars = {};

export type ExioIconArgs = Partial<{
  [Prop in keyof typeof iconVars]: typeof iconVars[Prop]['val'] | string;
}>;

export const exioIcon = (
  node: HTMLElement,
  opts: ExioIconArgs = {}
): ExioNode<ExioIconArgs> => {
  const component = exioComponent(node);
  createExioIconsFont();
  const s = styler(node);
  // https://developers.google.com/fonts/docs/material_icons
  s.innerHTML = `
    .${s.id} {
      font-family: 'Material Icons';
      font-weight: normal;
      font-style: normal;
      display: inline-block;
      line-height: 1;
      text-transform: none;
      letter-spacing: normal;
      word-wrap: normal;
      white-space: nowrap;
      direction: ltr;
      -webkit-font-smoothing: antialiased;
      text-rendering: optimizeLegibility;
      -moz-osx-font-smoothing: grayscale;
      font-feature-settings: 'liga';
    }
  `;
  return {
    ...updater(opts, node, iconVars),
    ...destroyer(() => {
      s.remove();
      component.destroy();
    }),
  };
};
