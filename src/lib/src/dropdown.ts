import { destroyer, styler, updater } from './base';
import type { ExioNode } from './base';
import { exioPointerEffect, pointerEffectVars } from './effects';
import { exioComponent } from './component';
import { isMobile } from './consts';

export const dropdownVars = {
  backgroundColor: {
    prop: 'background-color',
    val: '',
  },
  transitionDuration: {
    prop: '--exio-standard-transition-duration',
    val: '',
  },
  shadowColor: {
    prop: '--exio-shadow-color',
    val: '',
  },
  shadowSize: {
    prop: '--exio-shadow-size',
    val: '',
  },
  ...pointerEffectVars,
};

export type ExioDropdownArgs = Partial<{
  [Prop in keyof typeof dropdownVars]:
    | typeof dropdownVars[Prop]['val']
    | string;
}>;

export function exioDropdown(
  node: HTMLSelectElement,
  opts: ExioDropdownArgs = {}
): ExioNode<ExioDropdownArgs> {
  const component = exioComponent(node);
  const effect = exioPointerEffect(node);
  const s = styler(node);
  s.innerHTML = `
    .${s.id} {
      user-select: none;
    }
  `;
  const dropdown = document.createElement('div');
  const dropdownBackdrop = document.createElement('div');
  const ds = styler(dropdown);
  const dbs = styler(dropdownBackdrop);
  let rect = node.getBoundingClientRect();
  let before = '';
  let down = false;
  const onDown = (e?: MouseEvent | TouchEvent) => {
    if (isMobile) return;
    before = node.style.getPropertyValue('transform');
    node.style.setProperty('transform', 'none', 'important');
    rect = node.getBoundingClientRect();
    node.style.setProperty('transform', before, 'important');
    e?.preventDefault();
    down = true;
    return;
  };
  const items: ExioNode[] = [];
  let containerNode = node as HTMLElement;
  let isInDialog = false;
  while (containerNode !== document.body && !isInDialog) {
    containerNode = containerNode.parentNode as HTMLElement;
    isInDialog = containerNode.tagName === 'DIALOG';
  }
  const updateStyle = (isInitial = false) => {
    node.style.setProperty('transform', before, 'important');
    const initialGetter = {
      getPropertyValue: (_: string) => 'unset',
    };
    const computed = isInitial ? initialGetter : getComputedStyle(node);
    dropdown.dataset.theme = computed.getPropertyValue('--exio-theme').trim();
    const transitionDuration = computed.getPropertyValue(
      '--exio-standard-transition-duration'
    );
    const backdropColor = computed.getPropertyValue('--exio-shadow-color');
    const borderWidth = computed.getPropertyValue('--exio-shadow-size');
    const color = computed.getPropertyValue('color');
    const backgroundColor = computed.getPropertyValue('background-color');
    const fontFamily = computed.getPropertyValue('font-family');
    const fontSize = computed.getPropertyValue('font-size');
    const padding = computed.getPropertyValue('padding');
    const topPadding = computed.getPropertyValue('padding-top');
    const bottomPadding = computed.getPropertyValue('padding-bottom');
    const fallbackContainerObj = {
      left: 0,
      top: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
    const initialBounds = {
      left: 0,
      top: 0,
      width: 0,
      height: 0,
      right: 0,
    };
    const {
      left: containerX,
      top: containerY,
      height: containerHeight,
      width: containerWidth,
    } = isInitial
      ? initialBounds
      : isInDialog
      ? containerNode.getBoundingClientRect()
      : fallbackContainerObj;
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
        z-index: 69420;
      }
      .${ds.id}:focus {
        opacity: 1;
        outline: none;
        pointer-events: auto;
        touch-action: auto;
      }
    `;
    dbs.innerHTML = `
      .${dbs.id} {
        opacity: 0;
      }
    `;
    dropdown.innerHTML = '';
    if (isInitial) return;
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
        item.addEventListener(
          'click',
          () => {
            node.selectedIndex = index;
            node.dispatchEvent(new Event('change'));
            dropdown.blur();
          },
          { passive: true }
        );
      });
      if (firstItem) firstItem.style.marginTop = topPadding;
      if (lastItem) lastItem.style.marginBottom = bottomPadding;
      const { height, left, right } = isInitial
        ? initialBounds
        : dropdown.getBoundingClientRect();
      const width = right - left;
      const isOverflowingY =
        height + rect.bottom - (isInDialog ? containerY : 0) >= containerHeight;
      const topVal = isOverflowingY
        ? Math.max(0, containerHeight - height)
        : rect.bottom - containerY;
      const isOverflowingX =
        width + rect.left - (isInDialog ? containerX : 0) >= containerWidth;
      const leftVal = isOverflowingX
        ? Math.max(0, containerWidth - width)
        : left - containerX * 2;
      ds.innerHTML += `
        .${ds.id} {
          top: ${topVal}px;
          left: ${leftVal}px;
          overflow: auto;
          max-width: ${containerWidth}px;
          max-height: ${containerHeight}px;
        }
      `;
      const dropdownRect = dropdown.getBoundingClientRect();
      // const windowDim = 2; Math.max(window.outerWidth, window.outerHeight);
      const calcTop = Math.min(rect.top - containerY, topVal);
      let dbsHeight = Math.min(
        dropdownRect.bottom - calcTop,
        height + rect.height
      );
      if (isInDialog) {
        dbsHeight = Math.min(dbsHeight, containerHeight - calcTop);
      }
      dbs.innerHTML = `
        .${dbs.id} {
          position: fixed;
          top: calc(${calcTop}px - ${borderWidth} / 2);
          left: calc(${leftVal}px - ${borderWidth} / 2);
          width: calc(${rect.width}px - ${borderWidth} / 2);
          height: calc(${dbsHeight}px - ${borderWidth} / 2);
          z-index: 69421;
          border: ${borderWidth} solid ${backdropColor};
          transition: opacity ${transitionDuration};
          touch-action: none;
          user-select: none;
          pointer-events: none;
          opacity: 0;
          box-sizing: content-box;
        }
      `;
      setTimeout(() => {
        dbs.innerHTML += `
          .${ds.id}:focus ~ .${dbs.id} {
            opacity: 1;
          }
        `;
      }, 0);
    }, 0);
  };
  updateStyle(true);
  containerNode.appendChild(dropdown);
  containerNode.appendChild(dropdownBackdrop);
  node.addEventListener('mousedown', onDown);
  node.addEventListener('touchstart', onDown);
  const forceFocus = () => {
    if (!down) return;
    down = false;
    updateStyle();
    dropdown.tabIndex = 0;
    dropdown.focus();
  };
  node.addEventListener('click', forceFocus, { passive: true });
  node.addEventListener('touchend', forceFocus), { passive: true };
  const scroll = () => {
    dropdown.blur();
  };
  const onBlur = () => {
    dropdown.tabIndex = -1;
  };
  dropdown.addEventListener('blur', onBlur);
  window.addEventListener('scroll', scroll, { passive: true });
  window.addEventListener('resize', scroll, { passive: true });
  return {
    ...updater(opts, node, dropdownVars),
    ...destroyer(() => {
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
      dropdownBackdrop.remove();
      dbs.remove();
      component.destroy();
    }),
  };
}
