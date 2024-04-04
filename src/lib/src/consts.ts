export const isSafari = (): boolean =>
  /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
export const isFirefox = (): boolean =>
  navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
export const isMobile = (): boolean =>
  /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
