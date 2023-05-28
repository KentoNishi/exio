import { destroyer, getMouseInfo, styler } from './base';
import type { ExioNode } from './base';
import { exioComponent } from './component';

export type PointerEffectOptions = {
  borderStyle: 'reactive' | 'static' | 'hover' | 'none';
  disableClicking: boolean;
  focusable: boolean;
};

const defaultOptions: PointerEffectOptions = {
  borderStyle: 'reactive',
  disableClicking: false,
  focusable: false,
};

export const pointerEffectVars = {
  borderWidth: {
    prop: '--exio-border-width',
    val: '',
  },
  clickingScale: {
    prop: '--exio-clicking-scale',
    val: '',
  },
  disabledFilter: {
    prop: '--exio-disabled-filter',
    val: '',
  },
  focusedBorderColor: {
    prop: '--exio-focused-border-color',
    val: '',
  },
  hoverBackgroundScale: {
    prop: '--exio-hover-background-scale',
    val: '',
  },
  hoverBodyColor: {
    prop: '--exio-hover-body-color',
    val: '',
  },
  hoverBorderColor: {
    prop: '--exio-hover-border-color',
    val: '',
  },
  hoverBorderScale: {
    prop: '--exio-hover-border-scale',
    val: '',
  },
  transitionDuration: {
    prop: '--exio-standard-transition-duration',
    val: '',
  },
};

export function exioPointerEffect(
  node: HTMLElement,
  additionalOptions: Partial<PointerEffectOptions> = defaultOptions
): ExioNode {
  const options = { ...defaultOptions, ...additionalOptions };
  const component = exioComponent(node);
  const s = styler(node);
  const updateStyle = (mouseX = 0, mouseY = 0, width = 0, height = 0) => {
    const borderHoverRadius = `calc(
      ${Math.max(width, height)}px * var(--exio-hover-border-scale)
    )`;
    const useStaticBorder = options.borderStyle === 'static';
    const useHoverBorder = options.borderStyle === 'hover';
    const dontTouchBorder = options.borderStyle === 'none';
    const borderStr =
      useStaticBorder || useHoverBorder
        ? 'border: var(--exio-border-width) solid var(--exio-hover-border-color)'
        : `border-image: radial-gradient(
          ${borderHoverRadius} ${borderHoverRadius} at var(--exio-mouse-x) var(--exio-mouse-y),
          var(--exio-hover-border-color) 0%,
          transparent calc(100% * var(--exio-hover-border-scale))
        ) 9 / var(--exio-border-width) / 0px stretch`;
    const hoverBorder = dontTouchBorder ? '' : borderStr;
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
    const focusedBorder = options.focusable
      ? 'border: var(--exio-border-width) solid var(--exio-focused-border-color)'
      : '';
    const focusableActive = focusedBorder ? ':not(:focus)' : '';
    s.innerHTML = `
      .${s.id} {
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
      .${s.id}:hover:not(.${s.id}-active)${focusableActive} {
        ${hoverBorder};
        background-size: calc(100% + 2 * var(--exio-border-width));
        background-position: center;
        ${hoverBackground};
        transition: transform var(--exio-standard-transition-duration);
      }
      .${s.id}:focus {
        ${focusedBorder};
      }
      .${s.id}.${s.id}-active {
        filter: brightness(0.8);
        transition: none;
        transform: scale(var(--exio-clicking-scale));
      }
      .${s.id}:disabled {
        pointer-events: none;
        touch-action: none;
        filter: var(--exio-disabled-filter);
      }
    `;
  };
  updateStyle();
  function onHover(e: MouseEvent) {
    const { x, y, width, height } = getMouseInfo(node, e);
    node.removeEventListener('mousemove', onHover);
    if (node.matches(':hover')) {
      updateStyle(x, y, width, height);
      node.addEventListener('mousemove', onHover, { passive: true });
    }
  }
  node.addEventListener('mouseenter', onHover, { passive: true });
  let clicking = false;
  const onMouseDown = () => {
    node.classList.add(`${s.id}-active`);
    clicking = true;
  };
  const onTouchUp = (e: MouseEvent) => {
    if (!clicking) return;
    node.classList.remove(`${s.id}-active`);
    clicking = false;
  };
  const onMouseUp = (e: MouseEvent) => {
    if (!clicking) return;
    node.classList.remove(`${s.id}-active`);
    if (e.button === 0 && !node.matches(':hover')) {
      e.preventDefault();
      node.click();
    }
    clicking = false;
  };
  if (!options.disableClicking) {
    node.addEventListener('touchstart', onMouseDown, { passive: true });
    window.addEventListener('touchend', onTouchUp);
    node.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('dragend', onTouchUp);
  }
  return destroyer(() => {
    node.removeEventListener('mouseenter', onHover);
    node.removeEventListener('mousemove', onHover);
    if (!options.disableClicking) {
      node.removeEventListener('touchstart', onMouseDown);
      window.removeEventListener('touchend', onTouchUp);
      node.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('dragend', onTouchUp);
      node.remove();
      s.remove();
    }
    component.destroy();
  });
}
