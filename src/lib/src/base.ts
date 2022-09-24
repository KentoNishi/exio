export interface ExioNode<T = any> {
  update?: (opts: T) => void;
  destroy: () => void;
}

export function getRandomString(len = 10) {
  const charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let randomString = 'exio-';
  for (let i = 0; i < len; i++) {
    const pos = Math.floor(Math.random() * charSet.length);
    randomString += charSet.substring(pos, pos + 1);
  }
  return randomString;
}

export function destroyer(...destroyers: ExioNode['destroy'][]): {
  destroy(): void;
} {
  return {
    destroy() {
      destroyers.forEach((d) => {
        d();
      });
    },
  };
}

/**
 * Generate update() function for ExioNode.
 *
 * use: actions can have an update method to enable reactive props to the action.
 *
 * This updater assumes that the options given to the update function are for styling
 * purposes. It will update the style based upon the props given and a map between
 * a prop name the css property it references.
 */
export function updater<T>(
  initialOpts: T,
  node: HTMLElement,
  optMap: Record<keyof T, { prop: string }>
): { update(opts: T): void } {
  let prevOpts = initialOpts;
  const update = (opts: T) => {
    Object.keys(prevOpts).forEach((opt) => {
      node.style.removeProperty(optMap[opt].prop);
    });
    Object.entries(opts).forEach(([prop, val]) => {
      node.style.setProperty(optMap[prop].prop, `${val}`);
    });
    prevOpts = opts;
  };
  update(initialOpts);
  return { update };
}

export function styler(node: HTMLElement) {
  const id = getRandomString();
  const style = document.getElementById(id) || document.createElement('style');
  style.id = id;
  node.classList.add(id);
  document.head.appendChild(style);
  return style as HTMLStyleElement;
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

export function toMillis(s: string) {
  return parseFloat(s) * (/\ds$/.test(s) ? 1000 : 1);
}
