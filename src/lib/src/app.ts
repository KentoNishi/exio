import { destroyer, applyStyle, getMergedObject } from './base';

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
    if (clonedOptions.fillBody) {
      applyStyle(document.body, {
        padding: '0',
        margin: '0',
        width: '100%',
        height: '100%',
      });
    }
    return destroyer(node);
  };
}

export function exioApp(node: HTMLElement): ExioNode {
  return customExioApp()(node);
}
