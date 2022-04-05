import type { GlassOptions } from './base';
import { destroyer, applyGlassEffect, getMergedStyles } from './base';

export const tileDefaultOptions = {
  color: 'white',
  fontFamily: 'inherit',
  fontSize: '1.1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'transparent',
  padding: undefined,
} as Partial<CSSStyleDeclaration>;

export function customExioTile(options: Partial<GlassOptions> = {}) {
  const clonedOptions = getMergedStyles(tileDefaultOptions, options.exioStyles);
  return (node: HTMLElement): ExioNode => {
    applyGlassEffect(node, {
      clickable: false,
      innerHoverRadius: 0,
      exioStyles: clonedOptions,
    });
    return destroyer(node);
  };
}

export function exioTile(node: HTMLElement): ExioNode {
  return customExioTile()(node);
}
