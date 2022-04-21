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

export function destroyer(nodes: HTMLElement[]): ExioNode {
  return {
    destroy() {
      nodes.forEach((node) => node.remove());
    },
  };
}

export function styler(node: HTMLElement) {
  const id = getRandomString();
  const style = document.getElementById(id) || document.createElement('style');
  style.id = id;
  node.classList.add(id);
  document.body.appendChild(style);
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
