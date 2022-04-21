import { destroyer, getMouseInfo, styler } from './base';
import type { ExioNode } from './base';

export function exioButton(node: HTMLButtonElement): ExioNode {
  const s = styler(node);
  const updateStyle = (mouseX = 0, mouseY = 0, width = 0, height = 0) => {
    const hoverRadius = `calc(${Math.max(
      width,
      height
    )}px * var(--exio-hover-radius))`;
    s.innerHTML = `
      .${s.id} {
        outline: none;
        border: var(--exio-border-width) solid var(--exio-unhover-color);
        background-color: rgba(255, 255, 255, 0.15);
        color: inherit;
        font-size: inherit;
        font-family: inherit;
        padding: 0.5rem 1rem;

        --exio-mouse-x: ${mouseX}px;
        --exio-mouse-y: ${mouseY}px;
        --exio-hover-radius: 0.5;
        --exio-hover-color: white;
        --exio-unhover-color: #888;
        --exio-border-width: 1px;
      }
      .${s.id}:hover {
        border-image: radial-gradient(
          ${hoverRadius} ${hoverRadius} at var(--exio-mouse-x) var(--exio-mouse-y),
          var(--exio-hover-color),
          var(--exio-unhover-color)
        ) 9 / var(--exio-border-width) / 0px stretch;
      }
    `;
  };
  updateStyle();
  function onHover(e: MouseEvent) {
    const { x, y, width, height } = getMouseInfo(node, e);
    updateStyle(x, y, width, height);
    node.addEventListener('mousemove', onHover);
  }
  node.addEventListener('mouseenter', onHover);
  return destroyer([node, s]);
}
