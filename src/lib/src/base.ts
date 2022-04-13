export interface ExioNode {
  destroy(): void;
}

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

export function getRandomString(len = 10) {
  const charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let randomString = '';
  for (let i = 0; i < len; i++) {
    const pos = Math.floor(Math.random() * charSet.length);
    randomString += charSet.substring(pos, pos + 1);
  }
  return randomString;
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
  event: MouseEvent | Touch
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
  innerHoverRadius: 500,
  outerHoverRadius: 250,
  hoverOpacity: 0.3,
  hoverBorderOpacity: 0.7,
  clickDegrees: 5,
  clickPerspective: 5,
  transitionDuration: 0.6,
  clickScale: 5,
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
  const registerHover = (touch = false) => {
    const start = touch ? 'touchstart' : 'mouseenter';
    const end = touch ? 'touchend' : 'mouseleave';
    const blur = touch ? 'blur' : 'mousemove';
    node.addEventListener(start, (rootEvent: MouseEvent | TouchEvent) => {
      hovering = true;
      const callback = (event: MouseEvent | TouchEvent) => {
        const { x, y, width, height } = getMouseInfo(
          node,
          'touches' in event ? event.touches[0] : event
        );
        /* 
          inspired by:
          https://dev.to/jashgopani/windows-10-button-hover-effect-using-css-and-vanilla-js-1io4
        */
        const rInner =
          (Math.max(width, height) * options.innerHoverRadius) / 100;
        const rOuter =
          (Math.max(width, height) * options.outerHoverRadius) / 100;
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
      if ('touches' in rootEvent) callback(rootEvent);

      window.addEventListener(blur, callback);
      node.addEventListener(end, () => {
        hovering = false;
        window.removeEventListener(blur, callback);
        if (!clicking) {
          applyStyle(node, {
            borderImage: 'none',
            backgroundImage: 'none',
          });
        }
      });
    });
  };
  registerHover(false);
  registerHover(true);
  if (options.clickable) {
    const registerActive = (touch = false) => {
      const start = touch ? 'touchstart' : 'mousedown';
      const end = touch ? 'touchend' : 'mouseup';
      node.addEventListener(start, (event: MouseEvent | TouchEvent) => {
        if (!touch) event.preventDefault();
        clicking = true;
        const { x, y, width, height } = getMouseInfo(
          node,
          'touches' in event ? event.touches[0] : event
        );
        const [xFactor, yFactor] = [2 * (x / width) - 1, 2 * (y / height) - 1];
        const p = options.clickPerspective * Math.min(width, height);
        // if (Math.abs(xFactor) + Math.abs(yFactor) !== 0) {
        //   xFactor /= Math.abs(xFactor) + Math.abs(yFactor);
        //   yFactor /= Math.abs(xFactor) + Math.abs(yFactor);
        // }
        const transformOrigin = 'center center';
        const scaling = 1 - options.clickScale / Math.max(width, height);
        applyStyle(node, {
          transform: `
          perspective(${p}px)
          rotateX(${-yFactor * options.clickDegrees}deg)
          rotateY(${xFactor * options.clickDegrees}deg)
          scale(${scaling})
        `,
          transition: '0s',
          transformOrigin,
          borderImage: 'none',
        });
        const callback = () => {
          clicking = false;
          applyStyle(node, {
            transform: `perspective(${p}px)`,
            transition: `transform ${options.transitionDuration}s`,
            borderImage,
          });
          if (!hovering) {
            applyStyle(node, {
              borderImage: 'none',
              backgroundImage: 'none',
            });
          }
          window.removeEventListener(end, callback);
        };
        window.addEventListener(end, callback);
      });
    };
    registerActive(false);
    registerActive(true);
  }
}
