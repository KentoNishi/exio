import { destroyer } from './base';
import type { ExioNode } from './base';
import { exioPointerEffect } from './effects';

export function exioButton(node: HTMLButtonElement): ExioNode {
  const effect = exioPointerEffect(node);
  return destroyer(effect.destroy);
}
