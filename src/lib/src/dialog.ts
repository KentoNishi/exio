import { destroyer, styler, updater } from './base';
import type { ExioNode } from './base';
import { exioComponent } from './component';
import { isFirefox } from './consts';

/**
 * HTMLDialogELement
 * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement
 */
interface HTMLDialogElement extends globalThis.HTMLDialogElement {
  /**
   * Reflects the open HTML attribute,
   * indicating that the dialog is available for interaction.
   */
  open: boolean;
  /**
   * Gets/sets the return value for the dialog.
   */
  returnValue: string;
  /**
   * Closes the dialog. An optional DOMString may be passed as an argument,
   * updating the returnValue of the the dialog.
   */
  close(): void;
  /**
   * Displays the dialog modelessly, i.e. still allowing interaction with
   * content outside of the dialog.
   * An optional Element or MouseEvent may be passed as an argument,
   * to specify an anchor point to which the dialog is fixed.
   */
  show(): void;
  /**
   * Displays the dialog for exclusive interaction, over the top of any
   * other dialogs that might be present.
   * An optional Element or MouseEvent may be passed as an argument,
   * to specify an anchor point to which the dialog is fixed.
   */
  showModal(): void;
}

export const dialogVars = {
  backgroundColor: {
    prop: 'background-color',
    val: '',
  },
  transitionDuration: {
    prop: '--exio-slow-transition-duration',
    val: '',
  },
  backdopColor: {
    prop: '--exio-backdrop-color',
    val: '',
  },
};

export type ExioDialogArgs = Partial<{
  [Prop in keyof typeof dialogVars]: typeof dialogVars[Prop]['val'] | string;
}>;

export function exioDialog(
  node: HTMLDialogElement,
  opts: ExioDialogArgs = {}
): ExioNode<ExioDialogArgs> {
  const component = exioComponent(node);
  let isOpen = Boolean(node.open);
  const s = styler(node);
  const computed = getComputedStyle(node);
  const topPadding = computed.getPropertyValue('padding-top');
  const bottomPadding = computed.getPropertyValue('padding-bottom');
  s.innerHTML = `
    @keyframes exio-dialog-fade-in {
      0% {
        opacity: 0;
        transform: scale(0);
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }
    @keyframes exio-dialog-fade-out {
      0% {
        opacity: 1;
        transform: ${isFirefox() ? 'translateY(-50%)' : ''} scale(1);
      }
      100% {
        opacity: 0;
        transform: ${isFirefox() ? 'translateY(-50%)' : ''} scale(0);
      }
    }
    .${s.id} {
      border-radius: 0px;
      border: 0px solid transparent;
      z-index: 69420;
      top: calc(0%);
    }
    .${s.id}::backdrop {
      background-color: transparent;
    }
    .${s.id}:not([open]) {
      display: block;
      position: fixed;
      ${isFirefox() ? 'top: calc(50%);' : ''}
      transform-origin: center center;
    }
    .${s.id}[open] {
      transform-origin: center center;
      animation-name: exio-dialog-fade-in;
      animation-duration: var(--exio-slow-transition-duration);
    }
  `;
  (async () => {
    const { default: dialogPolyfill } = await import('dialog-polyfill');
    dialogPolyfill.registerDialog(node);
    node.close();
    if (isOpen) {
      node.showModal();
    }
  })();
  const s2 = styler(node);
  s2.innerHTML = `
    .${s2.id}:not([open]) {
      display: none;
    }
  `;
  const anistarted = () => {
    s2.innerHTML = `
      .${s2.id}:not([open]) {
        animation-name: exio-dialog-fade-out;
        animation-duration: var(--exio-slow-transition-duration);
        animation-fill-mode: forwards;
        opacity: 0;
      }
    `;
    node.removeEventListener('animationstart', anistarted);
  };
  node.addEventListener('animationstart', anistarted, { passive: true });
  const backdrop = document.createElement('div');
  const s3 = styler(backdrop);
  const updateBackDrop = () => {
    const computed = getComputedStyle(node);
    const transitionDuration = computed.getPropertyValue(
      '--exio-slow-transition-duration'
    );
    const backdropColor = computed.getPropertyValue('--exio-backdrop-color');
    s3.innerHTML = `
      .${s3.id} {
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background-color: ${backdropColor};
        transition: opacity ${transitionDuration};
        pointer-events: none;
        touch-action: none;
        z-index: 42069;
      }
    `;
    backdrop.style.opacity = isOpen ? '1' : '0';
  };
  updateBackDrop();
  node.parentElement.appendChild(backdrop);
  const observe = () =>
    observer.observe(node, {
      attributes: true,
      attributeFilter: ['open'],
    });
  const observer = new MutationObserver(() => {
    isOpen = Boolean(node.open);
    observer.disconnect();
    node.show();
    node.close();
    updateBackDrop();
    if (isOpen) {
      node.showModal();
    }
    observe();
  });
  observe();
  const dialogCancel = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };
  node.addEventListener('cancel', dialogCancel);
  return {
    ...updater(opts, node, dialogVars),
    ...destroyer(() => {
      s.remove();
      node.removeEventListener('animationstart', anistarted);
      node.removeEventListener('cancel', dialogCancel);
      if (s2) s2.remove();
      s3.remove();
      observer.disconnect();
      component.destroy();
    }),
  };
}
