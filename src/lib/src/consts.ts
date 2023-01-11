export const isSafari = /^((?!chrome|android).)*safari/i.test(
  navigator.userAgent
);
export const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
