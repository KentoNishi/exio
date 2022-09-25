import { destroyer, styler, updater } from './base';
import type { ExioNode } from './base';
import { exioComponent } from './component';

export const animationVars = {
  animationDuration: {
    prop: 'animation-duration',
    val: '',
  },
};

export type ExioAnimationArgs = Partial<{
  [Prop in keyof typeof animationVars]:
    | typeof animationVars[Prop]['val']
    | string;
}>;

export function exioFlyInAnimation(
  node: HTMLElement,
  opts: ExioAnimationArgs = {}
): ExioNode<ExioAnimationArgs> {
  const component = exioComponent(node);
  const s = styler(node);
  s.innerHTML = `
    @keyframes exio-fly-in {
      from {
        transform: translateY(50%);
        opacity: 0;
      }
      to {
        transform: translateY(0%);
        opacity: 1;
      }
    }
    .${s.id} {
      animation: exio-fly-in;
      animation-duration: 0.6s;
      animation-fill-mode: forwards;
      opacity: 0;
    }
  `;
  return {
    ...updater(opts, node, animationVars),
    ...destroyer(() => {
      s.remove();
      component.destroy();
    }),
  };
}

export function exioFadeInAnimation(
  node: HTMLElement,
  opts: ExioAnimationArgs = {}
): ExioNode<ExioAnimationArgs> {
  const component = exioComponent(node);
  const s = styler(node);
  s.innerHTML = `
    @keyframes exio-fade-in {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    .${s.id} {
      animation: exio-fade-in;
      animation-duration: 0.6s;
      animation-fill-mode: forwards;
      opacity: 0;
    }
  `;
  return {
    ...updater(opts, node, animationVars),
    ...destroyer(() => {
      s.remove();
      component.destroy();
    }),
  };
}

export const zoomInAnimationVars = {
  animationScale: {
    prop: '--exio-zoom-in-animation-scale',
    val: '',
  },
  ...animationVars,
};

export type ExioZoomInAnimationArgs = Partial<{
  [Prop in keyof typeof zoomInAnimationVars]:
    | typeof zoomInAnimationVars[Prop]['val']
    | string;
}>;

export function exioZoomInAnimation(
  node: HTMLElement,
  opts: ExioZoomInAnimationArgs
): ExioNode<ExioZoomInAnimationArgs> {
  const component = exioComponent(node);
  const s = styler(node);
  s.innerHTML = `
    @keyframes exio-zoom-in {
      from {
        transform: scale(var(--exio-zoom-in-animation-scale));
        opacity: 0;
      }
      to {
        transform: scale(1);
        opacity: 1;
      }
    }
    .${s.id} {
      animation: exio-zoom-in;
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
      opacity: 0;
    }
  `;
  return {
    ...updater(opts, node, zoomInAnimationVars),
    ...destroyer(() => {
      s.remove();
      component.destroy();
    }),
  };
}

export const loadingBarVars = {
  ...animationVars,
  animationDuration: {
    prop: '--exio-loader-duration',
    val: '',
  },
  fillColor: {
    prop: '--exio-loader-fill-color',
    val: '',
  },
  backgroundColor: {
    prop: 'background-color',
    val: '',
  },
};

export type ExioLoadingBarArgs = Partial<{
  [Prop in keyof typeof loadingBarVars]:
    | typeof loadingBarVars[Prop]['val']
    | string;
}>;

export function exioLoadingBarAnimation(
  node: HTMLDivElement,
  opts: ExioLoadingBarArgs
): ExioNode<ExioLoadingBarArgs> {
  const component = exioComponent(node);
  const s = styler(node);
  s.innerHTML = `
    @keyframes exio-loading-bar {
      from {
        background-position: 100% 0;
      }
      to {
        background-position: 0 0;
      }
    }
    .${s.id} {
      background-image: linear-gradient(
        to right,
        var(--exio-loader-fill-color) 0%,
        var(--exio-loader-fill-color) 25%,
        transparent 25%,
        transparent 50%,
        var(--exio-loader-fill-color) 50%,
        var(--exio-loader-fill-color) 75%,
        transparent 75%,
        transparent 100%
      );
      background-size: 200% 100%;
      animation: exio-loading-bar var(--exio-loader-duration) linear infinite;
    }
  `;
  return {
    ...updater(opts, node, loadingBarVars),
    ...destroyer(() => {
      s.remove();
      component.destroy();
    }),
  };
}
