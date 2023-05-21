var ae=Object.defineProperty,se=Object.defineProperties;var le=Object.getOwnPropertyDescriptors;var W=Object.getOwnPropertySymbols;var ce=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable;var N=(e,o,t)=>o in e?ae(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,d=(e,o)=>{for(var t in o||(o={}))ce.call(o,t)&&N(e,t,o[t]);if(W)for(var t of W(o))de.call(o,t)&&N(e,t,o[t]);return e},Y=(e,o)=>se(e,le(o));import{y as fe,$ as ue,I as me,d as pe,w as he,a as ge,b as be,S as B,i as H,s as T,e as h,c as _,f as m,g as X,h as z,j as u,k as w,l as Z,n as S,m as A,r as G,o as C,p as ve,R as xe,q as D,t as P,u as O,v as V,x as U,z as K}from"./vendor.0c9474f7.js";const ye=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}};ye();const we="modulepreload",J={},ke="/exio/",R=function(o,t){return!t||t.length===0?o():Promise.all(t.map(i=>{if(i=`${ke}${i}`,i in J)return;J[i]=!0;const r=i.endsWith(".css"),n=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${n}`))return;const a=document.createElement("link");if(a.rel=r?"stylesheet":we,r||(a.as="script",a.crossOrigin=""),a.href=i,document.head.appendChild(a),r)return new Promise((l,c)=>{a.addEventListener("load",l),a.addEventListener("error",c)})})).then(()=>o())};fe("en",()=>R(()=>import("./en.2eef7fb2.js"),[]));ue({fallbackLocale:"en",initialLocale:me()});function $e(e=10){const o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let t="exio-";for(let i=0;i<e;i++){const r=Math.floor(Math.random()*o.length);t+=o.substring(r,r+1)}return t}function v(...e){return{destroy(){e.forEach(o=>{o()})}}}function y(e,o,t){let i=e;const r=n=>{Object.keys(i).forEach(a=>{o.style.removeProperty(t[a].prop)}),Object.entries(n).forEach(([a,l])=>{o.style.setProperty(t[a].prop,`${l}`)}),i=n};return r(e),{update:r}}function b(e){const o=$e(),t=document.getElementById(o)||document.createElement("style");return t.id=o,e.classList.add(o),document.head.appendChild(t),t}function Le(e,o){const{left:t,top:i,width:r,height:n}=e.getBoundingClientRect(),{clientX:a,clientY:l}=o,[c,f]=[a-t,l-i];return{x:c,y:f,width:r,height:n}}function Ke(e){return parseFloat(e)*(/\ds$/.test(e)?1e3:1)}const _e={};function k(e,o={}){e.classList.add("exio-component");let t=document.querySelector("#exio-styles");return t||(t=document.createElement("style"),t.id="exio-styles",t.innerHTML=`
      .exio-component {
        /* --------------------------- */
        /* CUSTOMIZABLE EXIO VARIABLES */
        /* --------------------------- */
        /* backdrop color for dialogs and other popups */
        --exio-backdrop-color: rgba(128, 128, 128, 0.2);
        /* border width for various effects */
        --exio-border-width: 2px;
        /* scaling factor for elements while being clicked */
        --exio-clicking-scale: 0.95;
        /* color of checkbox checkmarks when selected */
        --exio-checkbox-checkmark-color: white;
        /* color of checkbox fill when selected */
        --exio-checkbox-checked-fill-color: black;
        /* filter for disabled fields */
        --exio-disabled-filter: brightness(1.2) grayscale(0.5);
        /* border color for focused elements */
        --exio-focused-border-color: rgba(0, 0, 0, 0.5);
        /* scaling factor for the acrylic hover highlight effect */
        --exio-hover-background-scale: 4;
        /* body color for the acrylic hover highlight effect */
        --exio-hover-body-color: rgba(128, 128, 128, 0.3);
        /* border color for the acrylic hover highlight effect */
        --exio-hover-border-color: rgba(0, 0, 0, 0.25);
        /* scaling factor for the acrylic hover highlight effect */
        --exio-hover-border-scale: 2;
        /* fill color for progress bars and loaders */
        --exio-loader-fill-color: black;
        /* animation duration for progress bars and loaders */
        --exio-loader-duration: 1s;
        /* color of radio indicators */
        --exio-radio-indicator-color: black;
        /* color of slider thumbs */
        --exio-slider-thumb-color: black;
        /* size of slider thumbs */
        --exio-slider-thumb-size: 12px;
        /* size of slider thumbs outlines when hovered */
        --exio-slider-thumb-hover-outline-size: 18px;
        /* size of slider thumb outlines when grabbing */
        --exio-slider-thumb-grab-outline-size: 25px;
        /* size of slider tracks */
        --exio-slider-track-size: 4px;
        /* fast transition duration */
        --exio-fast-transition-duration: 0.1s;
        /* slow transition duration */
        --exio-slow-transition-duration: 0.4s;
        /* standard transition duration */
        --exio-standard-transition-duration: 0.2s;
        /* color of switch background when selected */
        --exio-switch-checked-fill-color: darkgray;
        /* switch thumb color */
        --exio-switch-thumb-color: black;
        /* default text color for components */
        --exio-default-text-color: black;
        /* scaling factor for the zoom in animation */
        --exio-zoom-in-animation-scale: 97.5%;
      }
      .exio-component {
        --is-exio-component: true;
        --exio-theme: light;
        color: var(--exio-default-text-color);
      }
      [data-theme="dark"] .exio-component, .exio-component[data-theme="dark"] {
        --exio-disabled-filter: brightness(0.6) grayscale(0.5);
        --exio-focused-border-color: rgba(255, 255, 255, 1);
        --exio-hover-background-scale: 4;
        --exio-hover-body-color: rgba(128, 128, 128, 0.3);
        --exio-hover-border-color: rgba(255, 255, 255, 0.5);
        --exio-hover-border-scale: 2;
        --exio-loader-fill-color: white;
        --exio-loader-duration: 1s;
        --exio-switch-checked-fill-color: white;
        --exio-checkbox-checkmark-color: black;
        --exio-checkbox-checked-fill-color: white;
        --exio-slider-thumb-color: white;
        --exio-switch-thumb-color: white;
        --exio-radio-indicator-color: white;
        --exio-theme: dark;
        --exio-default-text-color: white;
      }
      @font-face {
        font-family: 'Segoe UI';
        src: local('Segoe UI Light'),
          url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/light/latest.woff2) format('woff2'),
          url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/light/latest.woff) format('woff'),
          url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/light/latest.ttf) format('truetype');
        font-weight: 100;
      }
      @font-face {
        font-family: 'Segoe UI';
        src: local('Segoe UI Semilight'),
          url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semilight/latest.woff2) format('woff2'),
          url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semilight/latest.woff) format('woff'),
          url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semilight/latest.ttf) format('truetype');
        font-weight: 200;
      }
      @font-face {
        font-family: 'Segoe UI';
        src: local('Segoe UI'),
          url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/normal/latest.woff2) format('woff2'),
          url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/normal/latest.woff) format('woff'),
          url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/normal/latest.ttf) format('truetype');
        font-weight: 400;
      }
      @font-face {
        font-family: 'Segoe UI';
        src: local('Segoe UI Semibold'),
          url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semibold/latest.woff2) format('woff2'),
          url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semibold/latest.woff) format('woff'),
          url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semibold/latest.ttf) format('truetype');
        font-weight: 600;
      }
      @font-face {
        font-family: 'Segoe UI';
        src: local('Segoe UI Bold'),
          url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/bold/latest.woff2) format('woff2'),
          url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/bold/latest.woff) format('woff'),
          url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/bold/latest.ttf) format('truetype');
        font-weight: 700;
      }
    `,document.head.appendChild(t)),d(d({},y(o,e,_e)),v(()=>{e.classList.remove("exio-component")}))}const Q={borderStyle:"reactive",disableClicking:!1,focusable:!1},Ee={borderWidth:{prop:"--exio-border-width",val:""},clickingScale:{prop:"--exio-clicking-scale",val:""},disabledFilter:{prop:"--exio-disabled-filter",val:""},focusedBorderColor:{prop:"--exio-focused-border-color",val:""},hoverBackgroundScale:{prop:"--exio-hover-background-scale",val:""},hoverBodyColor:{prop:"--exio-hover-body-color",val:""},hoverBorderColor:{prop:"--exio-hover-border-color",val:""},hoverBorderScale:{prop:"--exio-hover-border-scale",val:""},transitionDuration:{prop:"--exio-standard-transition-duration",val:""}};function ee(e,o=Q){const t=d(d({},Q),o),i=k(e),r=b(e),n=(f=0,s=0,p=0,g=0)=>{const x=`calc(
      ${Math.max(p,g)}px * var(--exio-hover-border-scale)
    )`,L=t.borderStyle==="static",$=t.borderStyle==="hover",E=t.borderStyle==="none",re=L||$?"border: var(--exio-border-width) solid var(--exio-hover-border-color)":`border-image: radial-gradient(
          ${x} ${x} at var(--exio-mouse-x) var(--exio-mouse-y),
          var(--exio-hover-border-color) 0%,
          transparent calc(100% * var(--exio-hover-border-scale))
        ) 9 / var(--exio-border-width) / 0px stretch`,F=E?"":re,ie=$?"":`
        background-image: radial-gradient(
          calc(
            ${Math.max(p,g)}px *
            var(--exio-hover-background-scale)
          ) at ${f}px ${s}px,
          var(--exio-hover-body-color) 0%,
          transparent 100%
        )
      `,q=t.focusable?"border: var(--exio-border-width) solid var(--exio-focused-border-color)":"",ne=q?":not(:focus)":"";r.innerHTML=`
      .${r.id} {
        outline: none;
        border: var(--exio-border-width) solid transparent;
        color: inherit;
        font-size: inherit;
        font-family: inherit;
        padding: 0.25em 0.75em;
        overflow: hidden;
        border-radius: 0px;
        ${L?F:""};

        --exio-mouse-x: ${f}px;
        --exio-mouse-y: ${s}px;
        transition: transform var(--exio-standard-transition-duration);
      }
      .${r.id}:hover:not(.${r.id}-active)${ne} {
        ${F};
        background-size: calc(100% + 2 * var(--exio-border-width));
        background-position: center;
        ${ie};
        transition: transform var(--exio-standard-transition-duration);
      }
      .${r.id}:focus {
        ${q};
      }
      .${r.id}.${r.id}-active {
        filter: brightness(0.8);
        transition: none;
        transform: scale(var(--exio-clicking-scale));
      }
      .${r.id}:disabled {
        pointer-events: none;
        touch-action: none;
        filter: var(--exio-disabled-filter);
      }
    `};n();function a(f){const{x:s,y:p,width:g,height:x}=Le(e,f);e.removeEventListener("mousemove",a),e.matches(":hover")&&(n(s,p,g,x),e.addEventListener("mousemove",a))}e.addEventListener("mouseenter",a);const l=()=>{e.classList.add(`${r.id}-active`)},c=()=>{e.classList.remove(`${r.id}-active`)};return t.disableClicking||(e.addEventListener("touchstart",l),window.addEventListener("touchend",c),e.addEventListener("mousedown",l),window.addEventListener("mouseup",c),window.addEventListener("dragend",c)),v(()=>{e.removeEventListener("mouseenter",a),e.removeEventListener("mousemove",a),t.disableClicking||(e.removeEventListener("touchstart",l),window.removeEventListener("touchend",c),e.removeEventListener("mousedown",l),window.removeEventListener("mouseup",c),window.removeEventListener("dragend",c),e.remove(),r.remove()),i.destroy()})}const Se=d({backgroundColor:{prop:"background-color",val:""},textColor:{prop:"color",val:""}},Ee);function oe(e,o={}){const t=k(e),i=ee(e),r=b(e);return r.innerHTML=`
    .${r.id} {
      user-select: none;
    }
  `,d(d({},y(o,e,Se)),v(()=>{i.destroy(),r.remove(),t.destroy()}))}const Ce={backgroundColor:{prop:"background-color",val:""},borderWidth:{prop:"--exio-border-width",val:""},checkedFillColor:{prop:"--exio-switch-checked-fill-color",val:""},switchThumbColor:{prop:"--exio-switch-thumb-color",val:""},transitionDuration:{prop:"--exio-standard-transition-duration",val:""},hoverBackgroundScale:{prop:"--exio-hover-background-scale",val:""},hoverBodyColor:{prop:"--exio-hover-body-color",val:""},clickingScale:{prop:"--exio-clicking-scale",val:""},disabledFilter:{prop:"--exio-disabled-filter",val:""}};function Ie(e,o={}){const t=k(e),i=ee(e,{borderStyle:"static"}),r=b(e);r.innerHTML=`
    .${r.id} {
      -webkit-appearance: none;
      width: 48px;
      height: 20px;
      border-radius: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: visible;
      border-color: black;
      background-color: var(--exio-switch-checked-fill-color);
    }
    [data-theme=dark] .${r.id} {
      border-color: white;
    }
    .${r.id}:not(:checked) {
      background-color: transparent;
    }
  `;const n=b(e);return n.innerHTML=`
    .${n.id}::after {
      content: '';
      position: absolute;
      width: ${e.clientHeight}px;
      height: ${e.clientHeight}px;
      border-radius: 100%;
      transform: translateX(calc(
        ${-e.clientWidth/2}px + ${e.clientHeight/2}px
      )) scale(0.55);
      background-color: var(--exio-switch-thumb-color);
      transition: transform var(--exio-standard-transition-duration);
    }
    .${n.id}:checked::after {
      transform: translateX(calc(
        ${e.clientWidth/2}px - ${e.clientHeight/2}px
      )) scale(0.5);
    }
  `,d(d({},y(o,e,Ce)),v(()=>{i.destroy(),r.remove(),n.remove(),t.destroy()}))}const I={animationDuration:{prop:"animation-duration",val:""}};function Je(e,o={}){const t=k(e),i=b(e);return i.innerHTML=`
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
    .${i.id} {
      animation: exio-fly-in;
      animation-duration: 0.6s;
      animation-fill-mode: forwards;
      opacity: 0;
    }
  `,d(d({},y(o,e,I)),v(()=>{i.remove(),t.destroy()}))}function Qe(e,o={}){const t=k(e),i=b(e);return i.innerHTML=`
    @keyframes exio-fade-in {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    .${i.id} {
      animation: exio-fade-in;
      animation-duration: 0.6s;
      animation-fill-mode: forwards;
      opacity: 0;
    }
  `,d(d({},y(o,e,I)),v(()=>{i.remove(),t.destroy()}))}const Me=d({animationScale:{prop:"--exio-zoom-in-animation-scale",val:""}},I);function Be(e,o={}){const t=k(e),i=b(e);return i.innerHTML=`
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
    .${i.id} {
      animation: exio-zoom-in;
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
      opacity: 0;
    }
  `,d(d({},y(o,e,Me)),v(()=>{i.remove(),t.destroy()}))}const He=Y(d({},I),{animationDuration:{prop:"--exio-loader-duration",val:""},fillColor:{prop:"--exio-loader-fill-color",val:""},backgroundColor:{prop:"background-color",val:""}});function eo(e,o={}){const t=k(e),i=b(e);return i.innerHTML=`
    @keyframes exio-loading-bar {
      from {
        background-position: 100% 0;
      }
      to {
        background-position: 0 0;
      }
    }
    .${i.id} {
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
  `,d(d({},y(o,e,He)),v(()=>{i.remove(),t.destroy()}))}function Te(){let e=document.querySelector("#exio-icons-font");e||(e=document.createElement("link"),e.id="exio-icons-font",e.href="//fonts.googleapis.com/icon?family=Material+Icons",e.rel="stylesheet",document.body.appendChild(e))}const ze={},j=(e,o={})=>{const t=k(e);Te();const i=b(e);return i.innerHTML=`
    .${i.id} {
      font-family: 'Material Icons';
      font-weight: normal;
      font-style: normal;
      display: inline-block;
      line-height: 1;
      text-transform: none;
      letter-spacing: normal;
      word-wrap: normal;
      white-space: nowrap;
      direction: ltr;
      -webkit-font-smoothing: antialiased;
      text-rendering: optimizeLegibility;
      -moz-osx-font-smoothing: grayscale;
      font-feature-settings: 'liga';
    }
  `,d(d({},y(o,e,ze)),v(()=>{i.remove(),t.destroy()}))},oo=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),to=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent),Ae={backgroundColor:{prop:"background-color",val:""},transitionDuration:{prop:"--exio-slow-transition-duration",val:""},backdopColor:{prop:"--exio-backdrop-color",val:""}};function De(e,o={}){const t=k(e);let i=Boolean(e.open);const r=b(e);r.innerHTML=`
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
        transform: scale(1) translateY(-50%);
      }
      100% {
        opacity: 0;
        transform: scale(0) translateY(-50%);
      }
    }
    .${r.id} {
      border-radius: 0px;
      border: 0px solid transparent;
      z-index: 69420;
    }
    .${r.id}::backdrop {
      background-color: transparent;
    }
    .${r.id}:not([open]) {
      display: block;
      position: fixed;
      top: 50%;
      transform-origin: top center;
      transform: translateY(-50%);
    }
    .${r.id}[open] {
      transform-origin: center center;
      animation-name: exio-dialog-fade-in;
      animation-duration: var(--exio-slow-transition-duration);
      animation-fill-mode: forwards;
    }
  `,pe.registerDialog(e),e.close(),i&&e.showModal();const n=b(e);n.innerHTML=`
    .${n.id}:not([open]) {
      display: none;
    }
  `;const a=()=>{n.innerHTML=`
      .${n.id}:not([open]) {
        animation-name: exio-dialog-fade-out;
        animation-duration: var(--exio-slow-transition-duration);
        animation-fill-mode: forwards;
      }
    `,e.removeEventListener("animationstart",a)};e.addEventListener("animationstart",a);const l=document.createElement("div"),c=b(l),f=()=>{const g=getComputedStyle(e),x=g.getPropertyValue("--exio-slow-transition-duration"),L=g.getPropertyValue("--exio-backdrop-color");c.innerHTML=`
      .${c.id} {
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background-color: ${L};
        transition: opacity ${x};
        pointer-events: none;
        touch-action: none;
        z-index: 42069;
      }
    `,l.style.opacity=i?"1":"0"};f(),e.parentElement.appendChild(l);const s=()=>p.observe(e,{attributes:!0,attributeFilter:["open"]}),p=new MutationObserver(()=>{i=Boolean(e.open),p.disconnect(),e.show(),e.close(),f(),i&&e.showModal(),s()});return s(),d(d({},y(o,e,Ae)),v(()=>{r.remove(),e.removeEventListener("animationstart",a),n&&n.remove(),c.remove(),p.disconnect(),t.destroy()}))}const Pe={};function Oe(e,o={}){const t=b(e);return t.innerHTML=`
    body {
      margin: 0;
      padding: 0;
    }

    * {
      font-family: 'Segoe UI';
    }

    * ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    
    * ::-webkit-scrollbar-track {
      background: transparent;
    }
    
    * ::-webkit-scrollbar-thumb {
      background: #888;
    }
    
    * ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }

    * ::-webkit-scrollbar-corner {
      background: transparent;
    }
    
    * {
      scrollbar-width: thin;
      scrollbar-color: #888 transparent;
    }
  `,d(d({},y(o,e,Pe)),v(()=>{t.remove()}))}const M=he("dark",!0),Ve=ge(M,e=>e?"dark":"light"),te=be(!1);function Ue(e){let o,t,i,r,n,a,l,c;return{c(){o=h("dialog"),t=h("h2"),t.textContent="Hello World!",i=_(),r=h("p"),r.textContent="Exio uses the HTML dialog element.",n=_(),a=h("button"),a.textContent="Close",m(t,"class","svelte-xxdtl1"),m(a,"class","blue"),X(a,"float","right"),o.open=e[0],m(o,"class","dialog svelte-xxdtl1"),X(o,"width","min(300px, 100%)")},m(f,s){z(f,o,s),u(o,t),u(o,i),u(o,r),u(o,n),u(o,a),l||(c=[w(oe.call(null,a)),Z(a,"click",e[1]),w(De.call(null,o))],l=!0)},p(f,[s]){s&1&&(o.open=f[0])},i:S,o:S,d(f){f&&A(o),l=!1,G(c)}}}function Re(e,o,t){let i;return C(e,te,n=>t(0,i=n)),[i,()=>ve(te,i=!1,i)]}class je extends B{constructor(o){super();H(this,o,Re,Ue,T,{})}}function Fe(e){let o,t,i,r,n,a,l,c,f,s,p,g,x,L;return{c(){o=h("div"),t=h("div"),i=h("a"),r=h("button"),n=h("span"),n.textContent="home",a=_(),l=h("div"),c=h("span"),c.textContent="light_mode",f=_(),s=h("input"),p=_(),g=h("span"),g.textContent="dark_mode",m(n,"class","svelte-1yeho5w"),m(r,"class","home-button svelte-1yeho5w"),m(i,"href","#/"),m(i,"class","svelte-1yeho5w"),m(t,"class","home svelte-1yeho5w"),m(c,"class","svelte-1yeho5w"),m(s,"type","checkbox"),m(s,"id","dark-mode"),m(s,"class","svelte-1yeho5w"),m(g,"class","svelte-1yeho5w"),m(l,"class","toggler svelte-1yeho5w"),m(o,"class","navbar svelte-1yeho5w")},m($,E){z($,o,E),u(o,t),u(t,i),u(i,r),u(r,n),u(o,a),u(o,l),u(l,c),u(l,f),u(l,s),s.checked=e[0],u(l,p),u(l,g),x||(L=[w(j.call(null,n)),w(oe.call(null,r)),w(j.call(null,c)),w(Ie.call(null,s)),Z(s,"change",e[1]),w(j.call(null,g)),w(Be.call(null,o))],x=!0)},p($,[E]){E&1&&(s.checked=$[0])},i:S,o:S,d($){$&&A(o),x=!1,G(L)}}}function qe(e,o,t){let i;C(e,M,n=>t(0,i=n));function r(){i=this.checked,M.set(i)}return[i,r]}class We extends B{constructor(o){super();H(this,o,qe,Fe,T,{})}}function Ne(e){let o,t,i,r,n,a,l,c,f;return t=new We({}),r=new je({}),a=new xe({props:{routes:e[1]}}),{c(){o=h("div"),D(t.$$.fragment),i=_(),D(r.$$.fragment),n=_(),D(a.$$.fragment),m(o,"data-theme",e[0])},m(s,p){z(s,o,p),P(t,o,null),u(o,i),P(r,o,null),u(o,n),P(a,o,null),l=!0,c||(f=w(Oe.call(null,o)),c=!0)},p(s,[p]){(!l||p&1)&&m(o,"data-theme",s[0])},i(s){l||(O(t.$$.fragment,s),O(r.$$.fragment,s),O(a.$$.fragment,s),l=!0)},o(s){V(t.$$.fragment,s),V(r.$$.fragment,s),V(a.$$.fragment,s),l=!1},d(s){s&&A(o),U(t),U(r),U(a),c=!1,f()}}}function Ye(e,o,t){let i,r;C(e,M,a=>t(2,i=a)),C(e,Ve,a=>t(0,r=a));let n={"/":K({asyncComponent:()=>R(()=>import("./Home.e5ce1ff8.js"),["assets/Home.e5ce1ff8.js","assets/Home.54f9aa24.css","assets/vendor.0c9474f7.js","assets/accordion.1799433e.js"])}),"/docs":K({asyncComponent:()=>R(()=>import("./Docs.e741dcdd.js"),["assets/Docs.e741dcdd.js","assets/Docs.13382db5.css","assets/vendor.0c9474f7.js","assets/accordion.1799433e.js"])})};return e.$$.update=()=>{e.$$.dirty&1&&document.body.parentElement.style.setProperty("color-scheme",r),e.$$.dirty&4&&document.body.classList[i?"add":"remove"]("dark")},[r,n,i]}class Xe extends B{constructor(o){super();H(this,o,Ye,Ne,T,{})}}new Xe({target:document.getElementById("app")});export{ee as a,oo as b,Te as c,v as d,k as e,Ie as f,oe as g,j as h,to as i,eo as j,Be as k,Je as l,Qe as m,M as n,te as o,Ee as p,b as s,Ke as t,y as u};
//# sourceMappingURL=index.c88cedff.js.map
