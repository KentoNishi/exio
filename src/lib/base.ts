function destroyer(node: HTMLElement): SvaltiNode {
  return {
    destroy() {
      node.remove();
    },
  };
}

function getMouseInfo(node: HTMLElement, event: MouseEvent) {
  const { left, top, width, height } = node.getBoundingClientRect();
  const { clientX, clientY } = event;
  const [x, y] = [clientX - left, clientY - top];
  return {
    x,
    y,
    width,
    height,
  };
}

function applyStyle(node: HTMLElement, style: Partial<CSSStyleDeclaration>) {
  for (const key in style) {
    node.style[key] = style[key];
  }
}

function applyGlassEffect(
  node: HTMLElement,
  options?: {
    clickable?: boolean;
    disabled?: boolean;
  }
) {
  const borderWidth = 2;
  const hoverRadius = 100;
  const clickDepth = 8;
  const clickDegrees = 15;
  const transitionDuration = 0.6;
  const shade = '255, 255, 255';
  const defaultShade = `rgba(${shade}, 0.3)`;
  const defaultState: Partial<CSSStyleDeclaration> = {
    outline: 'none',
    border: `${borderWidth}px solid transparent`,
    backgroundPosition: `-${borderWidth}px -${borderWidth}px`,
    backgroundSize: `
      calc(100% + ${borderWidth * 2}px) calc(100% + ${borderWidth * 2}px)
    `,
    backgroundRepeat: 'no-repeat',
    transformOrigin: 'center center',
  };
  applyStyle(node, defaultState);
  let borderImage = 'none';
  node.addEventListener('mouseenter', () => {
    const callback = (event: MouseEvent) => {
      const { x, y, width, height } = getMouseInfo(node, event);
      /* 
        inspired by:
        https://dev.to/jashgopani/windows-10-button-hover-effect-using-css-and-vanilla-js-1io4
      */
      const r = (Math.max(width, height) * hoverRadius) / 100;
      borderImage = `
        radial-gradient(
          ${r}px ${r}px at ${x}px ${y}px,
          rgba(${shade}, 0.7),
          ${defaultShade}
        ) 9 / ${borderWidth}px / 0px stretch
      `;
      applyStyle(node, {
        backgroundImage: `
          radial-gradient(
            ${r}px ${r}px at ${x}px ${y}px,
            rgba(${shade}, 0.25) 0%,
            rgba(${shade}, 0.0) 100%
          )
        `,
        borderImage,
      });
    };
    window.addEventListener('mousemove', callback);
    node.addEventListener('mouseleave', () => {
      window.removeEventListener('mousemove', callback);
      applyStyle(node, {
        borderImage: 'none',
        backgroundImage: 'none',
      });
    });
  });
  node.addEventListener('mousedown', (event) => {
    const { x, y, width, height } = getMouseInfo(node, event);
    let [xFactor, yFactor] = [2 * (x / width) - 1, 2 * (y / height) - 1];
    if (Math.abs(xFactor) <= 0.2) xFactor = 0;
    if (Math.abs(yFactor) <= 0.2) yFactor = 0;
    const scale = clickDepth / Math.max(width, height);
    const transformOrigin = 'center center';
    applyStyle(node, {
      transform: `rotate3d(${yFactor}, ${-xFactor}, 0, ${clickDegrees}deg) scale(${
        1 - scale
      })`,
      transition: '0s',
      transformOrigin,
      borderImage: 'none',
    });
    const callback = () => {
      applyStyle(node, {
        transform: '',
        transition: `transform ${transitionDuration}s`,
        borderImage,
      });
      window.removeEventListener('mouseup', callback);
    };
    window.addEventListener('mouseup', callback);
  });
  return;
}

export function SvaltiButton() {
  return (node: HTMLElement): SvaltiNode => {
    applyGlassEffect(node, {
      clickable: true,
      disabled: false,
    });
    return destroyer(node);
  };
}
