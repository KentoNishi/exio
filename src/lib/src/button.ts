import type { GlassOptions } from './base';
import { destroyer, applyGlassEffect, getMergedStyles } from './base';
import { tileDefaultOptions } from './tile';

export const buttonDefaultOptions = {
  ...tileDefaultOptions,
  padding: '0.3rem 0.6rem',
  backgroundColor: 'transparent',
} as Partial<CSSStyleDeclaration>;

export function CustomExioButton(options: Partial<GlassOptions> = {}) {
  const clonedOptions = getMergedStyles(
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

export function ExioButton(node: HTMLElement): ExioNode {
  return CustomExioButton()(node);
}
