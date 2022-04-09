export const defaultToggleOptions = {
  activeFilter: 'grayscale(100%) brightness(75%)',
  hoverFilter: 'brightness(85%)',
  uncheckedColor: 'transparent',
  additionalStyles: {} as Partial<CSSStyleDeclaration>,
};

export type ToggleOptions = typeof defaultToggleOptions;
