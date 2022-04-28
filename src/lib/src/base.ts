export interface ExioNode {
  destroy(): void;
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

export function destroyer(...destroyers: ExioNode['destroy'][]): ExioNode {
  return {
    destroy() {
      destroyers.forEach((destroyer) => {
        try {
          destroyer();
        } catch (e) {}
      });
    },
  };
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
