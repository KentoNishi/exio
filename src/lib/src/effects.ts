import { destroyer, getMouseInfo, styler } from './base';
import type { ExioNode } from './base';

export type PointerEffectOptions = {
  borderStyle?: 'reactive' | 'static' | 'hover';
  disableClicking?: boolean;
};

export function exioPointerEffect(
  node: HTMLElement,
  additionalOptions: PointerEffectOptions = {
    borderStyle: 'reactive',
    disableClicking: false,
  }
): ExioNode {
  const s = styler(node);
  const updateStyle = (mouseX = 0, mouseY = 0, width = 0, height = 0) => {
    const borderHoverRadius = `calc(
      ${Math.max(width, height)}px * var(--exio-hover-border-scale)
    )`;
    const useStaticBorder = additionalOptions.borderStyle === 'static';
    const useHoverBorder = additionalOptions.borderStyle === 'hover';
    const hoverBorder =
      useStaticBorder || useHoverBorder
        ? 'border: var(--exio-border-width) solid var(--exio-hover-border-color)'
        : `border-image: radial-gradient(
            ${borderHoverRadius} ${borderHoverRadius} at var(--exio-mouse-x) var(--exio-mouse-y),
            var(--exio-hover-border-color) 0%,
            transparent calc(100% * var(--exio-hover-border-scale))
          ) 9 / var(--exio-border-width) / 0px stretch`;
    const hoverBackground = !useHoverBorder
      ? `
        background-image: radial-gradient(
          calc(
            ${Math.max(width, height)}px *
            var(--exio-hover-background-scale)
          ) at ${mouseX}px ${mouseY}px,
          var(--exio-hover-body-color) 0%,
          transparent 100%
        )
      `
      : '';
    s.innerHTML = `
      .${s.id} {
        outline: none;
        border: var(--exio-border-width) solid transparent;
        color: inherit;
        font-size: inherit;
        font-family: inherit;
        padding: 0.25em 0.75em;
        overflow: hidden;
        border-radius: 0px;
        ${useStaticBorder ? hoverBorder : ''};

        --exio-mouse-x: ${mouseX}px;
        --exio-mouse-y: ${mouseY}px;
        transition: transform var(--exio-standard-transition-duration);
      }
      .${s.id}:hover:not(.${s.id}-active) {
        ${hoverBorder};
        background-size: calc(100% + 2 * var(--exio-border-width));
        background-position: center;
        ${hoverBackground};
        transition: transform var(--exio-standard-transition-duration);
      }
      .${s.id}.${s.id}-active {
        filter: brightness(0.8);
        transition: none;
        transform: scale(var(--exio-clicking-scale));
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
  if (!additionalOptions.disableClicking) {
    node.addEventListener('touchstart', onMouseDown);
    window.addEventListener('touchend', onMouseUp);
    node.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
  }
  return destroyer(node.remove, s.remove);
}
