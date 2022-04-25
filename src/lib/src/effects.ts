import { destroyer, getMouseInfo, styler } from './base';
import type { ExioNode } from './base';

export function exioPointerEffect(node: HTMLElement): ExioNode {
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
        color: inherit;
        font-size: inherit;
        font-family: inherit;
        padding: 0.25em 0.75em;
        display: flex;
        align-items: center;
        justify-content: center;

        --exio-mouse-x: ${mouseX}px;
        --exio-mouse-y: ${mouseY}px;
        --exio-hover-radius: 0.5;
        --exio-hover-color: white;
        --exio-unhover-color: #888;
        --exio-border-width: 1px;
        --exio-shadow-distance: 2px;
        --exio-underglow-color: dodgerblue;
        --exio-underglow-size: 3px;
        box-shadow: 0px 0px 0.2em 0em transparent;
        transition: box-shadow 0.1s;
      }
      .${s.id}:hover:not(${s.id}-active) {
        border-image: radial-gradient(
          ${hoverRadius} ${hoverRadius} at var(--exio-mouse-x) var(--exio-mouse-y),
          var(--exio-hover-color),
          var(--exio-unhover-color)
        ) 9 / var(--exio-border-width) / 0px stretch;
        box-shadow: inset 0px calc(0px - var(--exio-underglow-size)) var(--exio-underglow-color);
        transition: none;
      }
      .${s.id}.${s.id}-active {
        filter: brightness(0.8);
        transition: none;
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
  return destroyer(node.remove, s.remove);
}
