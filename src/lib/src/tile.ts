import type { GlassOptions } from './base';
import { destroyer, applyGlassEffect, getMergedObject } from './base';
import type { ExioNode } from './base';

export const tileDefaultOptions = {
  innerHoverRadius: 0,
  additionalStyles: {} as Partial<CSSStyleDeclaration>,
} as Partial<GlassOptions>;

export type TileOptions = typeof tileDefaultOptions;

export function customExioTile(options: Partial<GlassOptions> = {}) {
  const clonedOptions = getMergedObject(
    tileDefaultOptions,
    options
  ) as Partial<GlassOptions>;
  return (node: HTMLElement): ExioNode => {
    applyGlassEffect(node, {
      clickable: false,
      ...clonedOptions,
    });
    return destroyer(node);
  };
}

export function exioTile(node: HTMLElement): ExioNode {
  return customExioTile()(node);
}
