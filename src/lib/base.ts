function destroyer(node: HTMLElement): SvaltiNode {
  return {
    destroy() {
      node.remove();
    },
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
  const b = 1;
  const r = 25;
  const shade = '200, 200, 200';
  const defaultShade = `rgba(${shade}, 0.25)`;
  const defaultState: Partial<CSSStyleDeclaration> = {
    outline: 'none',
    cursor: 'default',
    border: `${b}px solid ${defaultShade}`,
    margin: `${b}px`,
    backgroundPosition: `-${b}px -${b}px`,
    backgroundSize: `calc(100% + ${b * 2}px) calc(100% + ${b * 2}px)`,
    backgroundRepeat: 'no-repeat',
  };
  applyStyle(node, defaultState);
  node.addEventListener('mouseenter', () => {
    const callback = (event: MouseEvent) => {
      const { left, top, width, height } = node.getBoundingClientRect();
      const { clientX, clientY } = event;
      /* 
        inspired by:
        https://dev.to/jashgopani/windows-10-button-hover-effect-using-css-and-vanilla-js-1io4
      */
      const [x, y] = [clientX - left, clientY - top];
      defaultState.backgroundImage = `
        radial-gradient(
          circle at ${x}px ${y}px,
          rgba(${shade}, 0.5) 0%,
          rgba(${shade}, 0.0) 100%
        )
      `;
      defaultState.borderImage = `
        radial-gradient(
          ${r}px ${r}px at ${x}px ${y}px,
          rgba(${shade}, 0.7),
          ${defaultShade}
        ) 9 / ${b}px / 0px stretch
      `;
      applyStyle(node, defaultState);
    };
    window.addEventListener('mousemove', callback);
    node.addEventListener('mouseleave', () => {
      window.removeEventListener('mousemove', callback);
      defaultState.borderImage = 'none';
      defaultState.backgroundImage = 'none';
      applyStyle(node, defaultState);
    });
  });
  return;
}

export function SvaltiButton(node: HTMLElement): SvaltiNode {
  applyGlassEffect(node, {
    clickable: true,
    disabled: false,
  });
  return destroyer(node);
}
