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
  const onDown = (e: MouseEvent | TouchEvent) => {
    before = node.style.getPropertyValue('transform');
    node.style.setProperty('transform', 'none', 'important');
    rect = node.getBoundingClientRect();
    e.preventDefault();
    return;
  };
  dropdown.tabIndex = 0;
  const items: ExioNode[] = [];
  const updateStyle = () => {
    node.style.setProperty('transform', before, 'important');
    const computed = getComputedStyle(node);
    const transitionDuration = computed.getPropertyValue(
      '--exio-transition-duration'
    );
    const color = computed.getPropertyValue('color');
    const backgroundColor = computed.getPropertyValue('background-color');
    const fontFamily = computed.getPropertyValue('font-family');
    const fontSize = computed.getPropertyValue('font-size');
    const padding = computed.getPropertyValue('padding');
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
        padding: ${padding};
        padding-left: 0px;
        padding-right: 0px;
        box-size: border-box;
        opacity: 0;
      }
      .${ds.id}:focus {
        opacity: 1;
        outline: none;
      }
    `;
    dropdown.innerHTML = '';
    setTimeout(() => {
      node.childNodes.forEach((child) => {
        const item = document.createElement('div');
        item.style.padding = padding;
        item.style.boxSizing = 'border-box';
        item.style.cursor = 'default';
        item.textContent = child.textContent;
        items.push(exioPointerEffect(item));
        dropdown.appendChild(item);
      });
    }, 0);
    dropdown.focus();
  };
  updateStyle();
  document.body.appendChild(dropdown);
  node.addEventListener('mousedown', onDown);
  node.addEventListener('touchstart', onDown);
  node.addEventListener('mouseup', updateStyle);
  node.addEventListener('touchend', updateStyle);
  return destroyer(effect.destroy, s.remove, dropdown.remove, ds.remove, () => {
    items.forEach((item) => item.destroy());
  });
}
