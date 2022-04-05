import type { GlassOptions } from './base';
import { destroyer, applyGlassEffect, getMergedObject } from './base';
import { tileDefaultOptions } from './tile';

export const buttonDefaultOptions = {
  ...tileDefaultOptions,
  padding: '0.3rem 0.6rem',
  backgroundColor: 'transparent',
} as Partial<CSSStyleDeclaration>;

export function customExioButton(options: Partial<GlassOptions> = {}) {
  const clonedOptions = getMergedObject(
    buttonDefaultOptions,
    options.exioStyles
  );
  return (node: HTMLElement): ExioNode => {
    applyGlassEffect(node, {
      clickable: true,
      exioStyles: clonedOptions,
    });
    return destroyer(node);
  };
}

export function exioButton(node: HTMLElement): ExioNode {
  return customExioButton()(node);
}
