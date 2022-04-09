import type { GlassOptions, ExioNode } from './base';
import { destroyer, applyGlassEffect, getMergedObject } from './base';
import { tileDefaultOptions } from './tile';

export const buttonDefaultOptions = {
  ...tileDefaultOptions,
  additionalStyles: {
    padding: '0.3rem 0.6rem',
    backgroundColor: 'transparent',
  } as Partial<CSSStyleDeclaration>,
};

export type ButtonOptions = typeof buttonDefaultOptions;

export function customExioButton(options: Partial<GlassOptions> = {}) {
  const clonedOptions = getMergedObject(
    buttonDefaultOptions.additionalStyles,
    options.additionalStyles
  );
  return (node: HTMLElement): ExioNode => {
    applyGlassEffect(node, {
      clickable: true,
      additionalStyles: clonedOptions,
    });
    return destroyer(node);
  };
}

export function exioButton(node: HTMLElement): ExioNode {
  return customExioButton()(node);
}
