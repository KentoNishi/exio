export const isSafari = /^((?!chrome|android).)*safari/i.test(
  navigator.userAgent
);
export const isFirefox =
  navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
export const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
