import type { GlassOptions } from './base';
import { destroyer, applyGlassEffect } from './base';

export function CustomExioTile(options: Partial<GlassOptions> = {}) {
  if (!options.exioStyles) options.exioStyles = {};
  return (node: HTMLElement): ExioNode => {
    applyGlassEffect(node, {
      clickable: false,
      hoverRadius: 0,
      ...options,
    });
    return destroyer(node);
  };
}

export function ExioTile(node: HTMLElement): ExioNode {
  return CustomExioTile()(node);
}
