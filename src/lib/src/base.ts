export function getMergedObject<T>(a: Partial<T>, b: Partial<T>) {
  const c = {} as any;
  for (const key in a) {
    if (typeof a[key] === 'object') c[key] = getMergedObject(a[key], b[key]);
    else c[key] = a[key];
  }
  if (!b) return c;
  for (const key in b) {
    if (!(key in c) || typeof c[key] !== 'object') {
      c[key] = b[key];
    }
  }
  return c;
}

export function getRandomString() {
  return (Math.random() + 1).toString(36).substring(7);
}

export function destroyer(node: HTMLElement): ExioNode {
  return {
    destroy() {
      node.remove();
    },
  };
}

export function getMouseInfo(
  node: HTMLElement,
  event: MouseEvent
): {
  x: number;
  y: number;
  width: number;
  height: number;
} {
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

export function applyStyle(
  node: HTMLElement,
  style: Partial<CSSStyleDeclaration>,
  skipIfSet = false
): void {
  for (const key in style) {
    if (node.style[key] && skipIfSet) continue;
    node.style[key] = style[key];
  }
}

export const defaultGlassOptions = {
  clickable: true,
  borderWidth: 2,
  innerHoverRadius: 200,
  outerHoverRadius: 200,
  clickDepth: 5,
  hoverOpacity: 0.3,
  hoverBorderOpacity: 0.7,
  clickDegrees: 5,
  clickPerspective: 5,
  transitionDuration: 0.6,
  clickScale: 0.95,
  hoverRGB: '255, 255, 255',
  additionalStyles: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontFamily: 'inherit',
    fontSize: '1.1rem',
    backgroundColor: 'transparent',
    padding: undefined,
  } as Partial<CSSStyleDeclaration>,
};

export type GlassOptions = typeof defaultGlassOptions;

export function applyGlassEffect(
  node: HTMLElement,
  customOptions: Partial<GlassOptions>
): void {
  const options = getMergedObject(defaultGlassOptions, customOptions);
  console.log(
    JSON.stringify(options, null, 2),
    JSON.stringify(customOptions, null, 2),
    JSON.stringify(defaultGlassOptions, null, 2)
  );
  applyStyle(node, options.additionalStyles, true);
  const defaultShade = `rgba(${options.hoverRGB}, 0.3)`;
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
  let clicking = false;
  let hovering = false;
  node.addEventListener('mouseenter', () => {
    hovering = true;
    const callback = (event: MouseEvent) => {
      const { x, y, width, height } = getMouseInfo(node, event);
      /* 
        inspired by:
        https://dev.to/jashgopani/windows-10-button-hover-effect-using-css-and-vanilla-js-1io4
      */
      const rInner = (Math.max(width, height) * options.innerHoverRadius) / 100;
      const rOuter = (Math.max(width, height) * options.outerHoverRadius) / 100;
      borderImage = `
        radial-gradient(
          ${rOuter}px ${rOuter}px at ${x}px ${y}px,
          rgba(${options.hoverRGB}, ${options.hoverBorderOpacity}),
          ${defaultShade}
        ) 9 / ${options.borderWidth}px / 0px stretch
      `;
      if (clicking) return;
      applyStyle(node, {
        backgroundImage: `
          radial-gradient(
            ${rInner}px ${rInner}px at ${x}px ${y}px,
            rgba(${options.hoverRGB}, ${options.hoverOpacity}) 0%,
            rgba(${options.hoverRGB}, 0.0) 100%
          )
        `,
        borderImage,
      });
    };
    window.addEventListener('mousemove', callback);
    node.addEventListener('mouseleave', () => {
      hovering = false;
      window.removeEventListener('mousemove', callback);
      if (!clicking) {
        applyStyle(node, {
          borderImage: 'none',
          backgroundImage: 'none',
        });
      }
    });
  });
  if (options.clickable) {
    node.addEventListener('mousedown', (event) => {
      clicking = true;
      const { x, y, width, height } = getMouseInfo(node, event);
      const [xFactor, yFactor] = [2 * (x / width) - 1, 2 * (y / height) - 1];
      const p = options.clickPerspective * Math.min(width, height);
      // if (Math.abs(xFactor) + Math.abs(yFactor) !== 0) {
      //   xFactor /= Math.abs(xFactor) + Math.abs(yFactor);
      //   yFactor /= Math.abs(xFactor) + Math.abs(yFactor);
      // }
      const transformOrigin = 'center center';
      applyStyle(node, {
        transform: `
          perspective(${p}px)
          rotateX(${-yFactor * options.clickDegrees}deg)
          rotateY(${xFactor * options.clickDegrees}deg)
          scale(${options.clickScale})
        `,
        transition: '0s',
        transformOrigin,
        borderImage: 'none',
      });
      const callback = () => {
        clicking = false;
        applyStyle(node, {
          transform: '',
          transition: `transform ${options.transitionDuration}s`,
          borderImage,
        });
        if (!hovering) {
          applyStyle(node, {
            borderImage: 'none',
            backgroundImage: 'none',
          });
        }
        window.removeEventListener('mouseup', callback);
      };
      window.addEventListener('mouseup', callback);
    });
  }
}
