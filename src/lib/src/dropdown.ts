import { destroyer, styler } from './base';
import type { ExioNode } from './base';
import { exioPointerEffect } from './effects';

export function exioDropdown(node: HTMLSelectElement): ExioNode {
  const effect = exioPointerEffect(node);
  const s = styler(node);
  s.innerHTML = `
    .${s.id} {
      user-select: none;
    }
  `;
  const dropdown = document.createElement('div');
  const ds = styler(dropdown);
  let rect = node.getBoundingClientRect();
  let before = '';
  let down = false;
  const onDown = (e?: MouseEvent | TouchEvent) => {
    before = node.style.getPropertyValue('transform');
    node.style.setProperty('transform', 'none', 'important');
    rect = node.getBoundingClientRect();
    node.style.setProperty('transform', before, 'important');
    e?.preventDefault();
    down = true;
    return;
  };
  const items: ExioNode[] = [];
  const updateStyle = () => {
    node.style.setProperty('transform', before, 'important');
    const computed = getComputedStyle(node);
    const transitionDuration = computed.getPropertyValue(
      '--exio-standard-transition-duration'
    );
    const color = computed.getPropertyValue('color');
    const backgroundColor = computed.getPropertyValue('background-color');
    const fontFamily = computed.getPropertyValue('font-family');
    const fontSize = computed.getPropertyValue('font-size');
    const padding = computed.getPropertyValue('padding');
    const topPadding = computed.getPropertyValue('padding-top');
    const bottomPadding = computed.getPropertyValue('padding-bottom');
    ds.innerHTML = `
      .${ds.id} {
        position: fixed;
        top: ${rect.bottom}px;
        left: ${rect.left}px;
        width: ${rect.width}px;
        background-color: ${backgroundColor};
        transition: opacity ${transitionDuration};
        color: ${color};
        font-family: ${fontFamily};
        font-size: ${fontSize};
        opacity: 0;
        pointer-events: none;
        touch-action: none;
        user-select: none;
      }
      .${ds.id}:focus {
        opacity: 1;
        outline: none;
        pointer-events: auto;
        touch-action: auto;
      }
    `;
    dropdown.innerHTML = '';
    setTimeout(() => {
      const options = node.querySelectorAll('option');
      let firstItem: HTMLDivElement | undefined;
      let lastItem: HTMLDivElement | undefined;
      options.forEach((child, index) => {
        if (child.disabled) return;
        const item = document.createElement('div');
        if (!firstItem) firstItem = item;
        lastItem = item;
        item.style.padding = padding;
        item.style.boxSizing = 'border-box';
        item.style.cursor = 'default';
        item.textContent = child.textContent;
        items.push(exioPointerEffect(item));
        dropdown.appendChild(item);
        item.addEventListener('click', () => {
          node.selectedIndex = index;
          dropdown.blur();
        });
      });
      if (firstItem) firstItem.style.marginTop = topPadding;
      if (lastItem) lastItem.style.marginBottom = bottomPadding;
      const { height, width, left } = dropdown.getBoundingClientRect();
      const isOverflowingY = height + rect.bottom >= window.innerHeight;
      const topVal = isOverflowingY
        ? Math.max(0, window.innerHeight - height)
        : rect.bottom;
      const isOverflowingX = width + rect.left >= window.innerWidth;
      const leftVal = isOverflowingX
        ? Math.max(0, window.innerWidth - width)
        : left;
      ds.innerHTML += `
        .${ds.id} {
          top: ${topVal}px;
          left: ${leftVal}px;
          overflow: auto;
          max-width: ${window.innerWidth}px;
          max-height: ${window.innerHeight}px;
        }
      `;
    }, 0);
  };
  updateStyle();
  document.body.appendChild(dropdown);
  node.addEventListener('mousedown', onDown);
  node.addEventListener('touchstart', onDown);
  const forceFocus = () => {
    if (!down) return;
    down = false;
    updateStyle();
    dropdown.tabIndex = 0;
    dropdown.focus();
  };
  node.addEventListener('click', forceFocus);
  node.addEventListener('touchend', forceFocus);
  const scroll = () => {
    dropdown.blur();
  };
  const onBlur = () => {
    dropdown.tabIndex = -1;
  };
  dropdown.addEventListener('blur', onBlur);
  window.addEventListener('scroll', scroll);
  window.addEventListener('resize', scroll);
  return destroyer(() => {
    items.forEach((item) => item.destroy());
    window.removeEventListener('scroll', scroll);
    window.removeEventListener('resize', scroll);
    node.removeEventListener('mousedown', onDown);
    node.removeEventListener('touchstart', onDown);
    node.removeEventListener('click', forceFocus);
    node.removeEventListener('touchend', forceFocus);
    dropdown.removeEventListener('blur', onBlur);
    effect.destroy();
    s.remove();
    dropdown.remove();
    ds.remove();
  });
}
