import recursiveAssign from 'recursive-object-assign';

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

function applyStyle(
  node: HTMLElement,
  style: Partial<CSSStyleDeclaration>,
  skipIfSet = false
) {
  for (const key in style) {
    if (node.style[key] && skipIfSet) continue;
    node.style[key] = style[key];
  }
}

const defaultGlassOptions = {
  clickable: true,
  disabled: false,
  borderWidth: 2,
  hoverRadius: 100,
  clickDepth: 8,
  clickDegrees: 10,
  transitionDuration: 0.6,
  shade: '255, 255, 255',
  svaltiStyles: {
    padding: '0.3rem 0.6rem',
    backgroundColor: '#444',
    color: 'white',
    fontFamily: 'inherit',
    fontSize: '1.1rem',
    margin: '3px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  } as Partial<CSSStyleDeclaration>,
};

export type GlassOptions = typeof defaultGlassOptions;

function applyGlassEffect(
  node: HTMLElement,
  customOptions: Partial<GlassOptions>
) {
  const options = { ...defaultGlassOptions };
  recursiveAssign(options, customOptions);
  applyStyle(node, options.svaltiStyles, true);
  const defaultShade = `rgba(${options.shade}, 0.3)`;
  const defaultState: Partial<CSSStyleDeclaration> = {
    outline: 'none',
    border: `${options.borderWidth}px solid transparent`,
    backgroundPosition: `-${options.borderWidth}px -${options.borderWidth}px`,
    backgroundSize: `
      calc(100% + ${options.borderWidth * 2}px)
      calc(100% + ${options.borderWidth * 2}px)
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
      const r = (Math.max(width, height) * options.hoverRadius) / 100;
      borderImage = `
        radial-gradient(
          ${r}px ${r}px at ${x}px ${y}px,
          rgba(${options.shade}, 0.7),
          ${defaultShade}
        ) 9 / ${options.borderWidth}px / 0px stretch
      `;
      applyStyle(node, {
        backgroundImage: `
          radial-gradient(
            ${r}px ${r}px at ${x}px ${y}px,
            rgba(${options.shade}, 0.25) 0%,
            rgba(${options.shade}, 0.0) 100%
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
  if (options.clickable) {
    node.addEventListener('mousedown', (event) => {
      const { x, y, width, height } = getMouseInfo(node, event);
      let [xFactor, yFactor] = [2 * (x / width) - 1, 2 * (y / height) - 1];
      if (Math.abs(xFactor) + Math.abs(yFactor) !== 0) {
        xFactor /= Math.abs(xFactor) + Math.abs(yFactor);
        yFactor /= Math.abs(xFactor) + Math.abs(yFactor);
      }
      const scale = options.clickDepth / Math.max(width, height);
      const transformOrigin = 'center center';
      applyStyle(node, {
        transform: `rotate3d(${yFactor}, ${-xFactor}, 0, ${
          options.clickDegrees
        }deg) scale(${1 - scale})`,
        transition: '0s',
        transformOrigin,
        borderImage: 'none',
      });
      const callback = () => {
        applyStyle(node, {
          transform: '',
          transition: `transform ${options.transitionDuration}s`,
          borderImage,
        });
        window.removeEventListener('mouseup', callback);
      };
      window.addEventListener('mouseup', callback);
    });
  }
}

export function CustomSvaltiButton(options: Partial<GlassOptions> = {}) {
  return (node: HTMLElement): SvaltiNode => {
    applyGlassEffect(node, {
      clickable: true,
      disabled: false,
      ...options,
    });
    return destroyer(node);
  };
}

export function SvaltiButton(node: HTMLElement): SvaltiNode {
  return CustomSvaltiButton()(node);
}
