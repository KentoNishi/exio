import { destroyer, styler, updater } from './base';
import type { ExioNode } from './base';
import { isSafari } from './consts';
import { exioComponent } from './component';

export const sliderArgs = {
  trackColor: {
    prop: 'background-color',
    val: '',
  },
  thumbSize: {
    prop: '--exio-slider-thumb-size',
    val: '',
  },
  thumbColor: {
    prop: '--exio-slider-thumb-color',
    val: '',
  },
  thumbHoverOutlineSize: {
    prop: '--exio-slider-thumb-hover-outline-size',
    val: '',
  },
  thumbHoverOutlineColor: {
    prop: '--exio-hover-body-color',
    val: '',
  },
  trackSize: {
    prop: '--exio-slider-track-size',
    val: '',
  },
};

export type SliderArgs = Partial<{
  [Prop in keyof typeof sliderArgs]: typeof sliderArgs[Prop]['val'] | string;
}>;

export function exioSlider(
  node: HTMLInputElement,
  opts: SliderArgs = {}
): ExioNode<SliderArgs> {
  const component = exioComponent(node);
  const s = styler(node);
  const thumb = `
    width: var(--exio-slider-thumb-size);
    height: var(--exio-slider-thumb-size);
    background-color: var(--exio-slider-thumb-color);
    transition:
      ${isSafari() ? 'box-shadow' : 'outline'}
      var(--exio-standard-transition-duration);
    border: 0px solid transparent;
    box-sizing: border-box;
    border-radius: 1000px;
    outline: 0px solid var(--exio-hover-body-color);
    box-shadow: 0px 0px 0px 0px var(--exio-hover-body-color);
    cursor: grab;
    transform: translateZ(0);
  `;
  const outline1 = isSafari()
    ? 'box-shadow: 0px 0px 0px var(--exio-slider-thumb-hover-outline-size) var(--exio-hover-body-color);'
    : 'outline: var(--exio-slider-thumb-hover-outline-size) solid var(--exio-hover-body-color);';
  const box2 = isSafari()
    ? 'box-shadow: 0px 0px 0px var(--exio-slider-thumb-grab-outline-size) var(--exio-hover-body-color);'
    : 'outline: var(--exio-slider-thumb-grab-outline-size) solid var(--exio-hover-body-color);';
  const outline2 = `
    ${box2}
    cursor: grabbing;
  `;
  s.innerHTML = `
    .${s.id} {
      -webkit-appearance: none;
      width: 100%;
      height: var(--exio-slider-track-size);
      border-radius: var(--exio-slider-track-size);
    }
    
    .${s.id}::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      ${thumb}
    }
    
    .${s.id}::-moz-range-thumb {
      ${thumb}
    }
    
    .${s.id}::-webkit-slider-thumb:hover {
      ${outline1}
    }

    .${s.id}::-moz-range-thumb:hover {
      ${outline1}
    }
    
    .${s.id}::-webkit-slider-thumb:active {
      ${outline2}
    }

    .${s.id}::-moz-range-thumb:active {
      ${outline2}
    }
  `;
  return {
    ...updater(opts, node, sliderArgs),
    ...destroyer(() => {
      s.remove();
      component.destroy();
    }),
  };
}
