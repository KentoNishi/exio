import { destroyer, getMouseInfo, styler } from './base';
import type { ExioNode } from './base';

export function exioPointerEffect(node: HTMLElement): ExioNode {
  const s = styler(node);
  const updateStyle = (mouseX = 0, mouseY = 0, width = 0, height = 0) => {
    const borderHoverRadius = `calc(${Math.max(
      width,
      height
    )}px * var(--exio-hover-radius))`;
    s.innerHTML = `
      .${s.id} {
        outline: none;
        border: var(--exio-border-width) solid transparent;
        color: inherit;
        font-size: inherit;
        font-family: inherit;
        padding: 0.25em 0.75em;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        border-radius: 1px;

        --exio-mouse-x: ${mouseX}px;
        --exio-mouse-y: ${mouseY}px;
        --exio-hover-radius: 1.5;
        --exio-hover-border-color: rgba(255, 255, 255, 1);
        --exio-hover-body-color: rgba(255, 255, 255, 0.1);
        --exio-hover-opacity: 50%;
        --exio-border-width: 1px;
        --exio-scale-size: 0.95;
        --exio-transition-duration: 0.2s;
        transition: transform var(--exio-transition-duration);
      }
      .${s.id}:hover:not(.${s.id}-active) {
        border-image: radial-gradient(
          ${borderHoverRadius} ${borderHoverRadius} at var(--exio-mouse-x) var(--exio-mouse-y),
          var(--exio-hover-border-color) 0%,
          transparent 100%
        ) 9 / var(--exio-border-width) / 0px stretch;
        background-size: calc(100% + 2 * var(--exio-border-width));
        background-position: center;
        background-image: radial-gradient(
          ${Math.max(width, height)}px at ${mouseX}px ${mouseY}px,
          var(--exio-hover-body-color) 0%,
          transparent 100%
        );
        transition: transform var(--exio-transition-duration);
      }
      .${s.id}.${s.id}-active {
        filter: brightness(0.8);
        transition: none;
        transform: scale(var(--exio-scale-size));
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
  const onMouseDown = () => {
    node.classList.add(`${s.id}-active`);
  };
  const onMouseUp = () => {
    node.classList.remove(`${s.id}-active`);
  };
  node.addEventListener('touchstart', onMouseDown);
  window.addEventListener('touchend', onMouseUp);
  node.addEventListener('mousedown', onMouseDown);
  window.addEventListener('mouseup', onMouseUp);
  return destroyer(node.remove, s.remove);
}
