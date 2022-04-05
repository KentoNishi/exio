import type { GlassOptions } from '.';
import { destroyer, applyGlassEffect } from './base';

export function CustomExioButton(options: Partial<GlassOptions> = {}) {
  return (node: HTMLElement): ExioNode => {
    applyGlassEffect(node, {
      clickable: true,
      disabled: false,
      ...options,
    });
    return destroyer(node);
  };
}

export function ExioButton(node: HTMLElement): ExioNode {
  return CustomExioButton()(node);
}
