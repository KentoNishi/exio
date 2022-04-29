import{y as ie,$ as re,I as ae,S as K,i as Q,s as G,e as s,a as P,b as d,n as j,d as N,c as m,f as c,g as R,h as a,r as le,j as se,m as ce,t as T,k as F,l as de,o as ue,p as fe,q as me,u as ve,v as he}from"./vendor.8c4ab5ad.js";const pe=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}};pe();const xe="modulepreload",ee={},be="/exio/",ge=function(e,n){return!n||n.length===0?e():Promise.all(n.map(o=>{if(o=`${be}${o}`,o in ee)return;ee[o]=!0;const i=o.endsWith(".css"),r=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${r}`))return;const l=document.createElement("link");if(l.rel=i?"stylesheet":xe,i||(l.as="script",l.crossOrigin=""),l.href=o,document.head.appendChild(l),i)return new Promise((u,f)=>{l.addEventListener("load",u),l.addEventListener("error",f)})})).then(()=>e())};ie("en",()=>ge(()=>import("./en.9805afb4.js"),[]));re({fallbackLocale:"en",initialLocale:ae()});function ye(t=10){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let n="";for(let o=0;o<t;o++){const i=Math.floor(Math.random()*e.length);n+=e.substring(i,i+1)}return n}function p(...t){return{destroy(){t.forEach(e=>{try{e()}catch{}})}}}function v(t){const e=ye(),n=document.getElementById(e)||document.createElement("style");return n.id=e,t.classList.add(e),document.head.appendChild(n),n}function ke(t,e){const{left:n,top:o,width:i,height:r}=t.getBoundingClientRect(),{clientX:l,clientY:u}=e,[f,x]=[l-n,u-o];return{x:f,y:x,width:i,height:r}}function $e(t){const e=v(t);return e.innerHTML=`
    .${e.id} {
      background-color: black;
      min-width: 100%;
      min-height: 100%;
      position: absolute;
      color: #fff;
      font-size: 1rem;
      font-family: Segoe UI, Frutiger, Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif;
    }
    body {
      margin: 0;
      width: 50%;
      height: 50%;
    }
  `,p(t.remove,e.remove)}function W(t,e={borderStyle:"reactive",disableClicking:!1}){const n=v(t),o=(u=0,f=0,x=0,h=0)=>{const k=`calc(
      ${Math.max(x,h)}px * var(--exio-hover-border-scale)
    )`,b=e.borderStyle==="static",g=e.borderStyle==="hover",q=b||g?"border: var(--exio-border-width) solid var(--exio-hover-border-color)":`border-image: radial-gradient(
            ${k} ${k} at var(--exio-mouse-x) var(--exio-mouse-y),
            var(--exio-hover-border-color) 0%,
            transparent calc(100% * var(--exio-hover-border-scale))
          ) 9 / var(--exio-border-width) / 0px stretch`,y=g?"":`
        background-image: radial-gradient(
          calc(
            ${Math.max(x,h)}px *
            var(--exio-hover-background-scale)
          ) at ${u}px ${f}px,
          var(--exio-hover-body-color) 0%,
          transparent 100%
        )
      `;n.innerHTML=`
      .${n.id} {
        outline: none;
        border: var(--exio-border-width) solid transparent;
        color: inherit;
        font-size: inherit;
        font-family: inherit;
        padding: 0.25em 0.75em;
        overflow: hidden;
        border-radius: 1px;
        ${b?q:""};

        --exio-mouse-x: ${u}px;
        --exio-mouse-y: ${f}px;
        --exio-hover-border-color: rgba(255, 255, 255, 1);
        --exio-hover-body-color: rgba(255, 255, 255, 0.2);
        --exio-border-width: 2px;
        --exio-scale-size: 0.95;
        --exio-transition-duration: 0.2s;
        --exio-hover-background-scale: 4;
        --exio-hover-border-scale: 2;
        transition: transform var(--exio-transition-duration);
      }
      .${n.id}:hover:not(.${n.id}-active) {
        ${q};
        background-size: calc(100% + 2 * var(--exio-border-width));
        background-position: center;
        ${y};
        transition: transform var(--exio-transition-duration);
      }
      .${n.id}.${n.id}-active {
        filter: brightness(0.8);
        transition: none;
        transform: scale(var(--exio-scale-size));
      }
    `};o();function i(u){const{x:f,y:x,width:h,height:k}=ke(t,u);o(f,x,h,k),t.addEventListener("mousemove",i)}t.addEventListener("mouseenter",i);const r=()=>{t.classList.add(`${n.id}-active`)},l=()=>{t.classList.remove(`${n.id}-active`)};return e.disableClicking||(t.addEventListener("touchstart",r),window.addEventListener("touchend",l),t.addEventListener("mousedown",r),window.addEventListener("mouseup",l)),p(t.remove,n.remove)}function C(t){const e=W(t),n=v(t);return n.innerHTML=`
    .${n.id} {
      user-select: none;
    }
  `,p(e.destroy,n.remove)}function A(t){const e=W(t,{borderStyle:"hover",disableClicking:!0}),n=v(t);return n.innerHTML=`
    .${n.id} {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0px;
    }
  `,p(e.destroy,n.remove)}function we(t){const e=W(t,{borderStyle:"static"}),n=v(t);n.innerHTML=`
    .${n.id} {
      -webkit-appearance: none;
      width: 50px;
      height: 20px;
      border-radius: 100px;
      display: flex;
      align-items: center;
      justify-content: center;

      --exio-border-width: 2px;
      --exio-transition-duration: 0.2s;
    }
    .${n.id}:not(:checked) {
      background-color: transparent;
    }
  `;const o=v(t);return o.innerHTML=`
    .${o.id}::after {
      content: '';
      position: absolute;
      width: ${t.clientHeight}px;
      height: ${t.clientHeight}px;
      border-radius: 100%;
      transform: translateX(calc(
        ${-t.clientWidth/2}px + ${t.clientHeight/2}px
      )) scale(0.7);
      background-color: white;
      transition: transform var(--exio-transition-duration);
    }
    .${o.id}:checked::after {
      transform: translateX(calc(
        ${t.clientWidth/2}px - ${t.clientHeight/2}px
      )) scale(0.7);
    }
  `,p(e.destroy,n.remove,o.remove)}function _e(t){const e=v(t);return e.innerHTML=`
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
    .${e.id} {
      animation: exio-fly-in;
      animation-duration: 0.6s;
      animation-fill-mode: forwards;
      opacity: 0;
    }
  `,p(t.remove)}function Le(t){const e=v(t);return e.innerHTML=`
    @keyframes exio-fade-in {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    .${e.id} {
      animation: exio-fade-in;
      animation-duration: 0.6s;
      animation-fill-mode: forwards;
      opacity: 0;
    }
  `,p(t.remove)}function Ce(t){const e=v(t);return e.innerHTML=`
    @keyframes exio-zoom-in {
      from {
        transform: scale(97.5%);
        opacity: 0;
      }
      to {
        transform: scale(1);
        opacity: 1;
      }
    }
    .${e.id} {
      animation: exio-zoom-in;
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
      opacity: 0;
    }
  `,p(t.remove)}const te=t=>{const e=v(t);return e.innerHTML=`
    @font-face {
      font-family: 'Exio Icons';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url('https://fonts.gstatic.com/s/materialicons/v126/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2') format('woff2');
    }
    .${e.id} {
      font-family: 'Exio Icons';
    }
  `,p(t.remove)};function qe(t){const e=v(t);return e.innerHTML=`
    .${e.id} {
      --exio-loading-bar-thumb-color: dodgerblue;
      display: flex;
      align-items: center;
      overflow: hidden;
      animation-duration: 0.8s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      animation-direction: normal;
      position: relative;
    }
    @keyframes exio-loading-bar {
      0% {
        width: 0px;
        left: 0px;
      }
      50% {
        width: 100%;
      }
      100% {
        width: 0px;
        right: 0px;
      }
    }
    .${e.id}::before {
      content: '';
      position: absolute;
      background-color: var(--exio-loading-bar-thumb-color);
      height: 100%;
      animation: exio-loading-bar;
      animation-duration: inherit;
      animation-iteration-count: inherit;
      animation-timing-function: inherit;
      animation-direction: inherit;
    }
  `,p(e.remove)}function Ee(t){let e,n,o,i,r,l,u,f,x,h,k,b,g,q,y,O,$,E,U,H,V,I,M,X,w,_,Y,L,Z,B,S,z,J;return{c(){e=s("div"),n=s("div"),o=s("button"),o.textContent="Default Button",i=m(),r=s("button"),r.textContent="Default Button",l=m(),u=s("div"),f=s("button"),f.textContent="Card Button",x=m(),h=s("button"),h.textContent="Card Button",k=m(),b=s("div"),g=s("button"),g.textContent="send",q=m(),y=s("button"),y.textContent="send",O=m(),$=s("div"),E=s("div"),E.textContent="Default Card",U=m(),H=s("div"),H.textContent="Default Card",V=m(),I=s("div"),M=s("input"),X=m(),w=s("div"),_=s("div"),_.textContent="Animated Card",Y=m(),L=s("div"),L.textContent="Animated Card",Z=m(),B=s("div"),S=s("div"),c(o,"class","gray svelte-1h6ktq"),c(r,"class","blue svelte-1h6ktq"),c(n,"class","block svelte-1h6ktq"),c(f,"class","card gray svelte-1h6ktq"),c(h,"class","card blue svelte-1h6ktq"),c(u,"class","block svelte-1h6ktq"),c(g,"class","gray svelte-1h6ktq"),c(y,"class","blue svelte-1h6ktq"),c(b,"class","block svelte-1h6ktq"),c(E,"class","card gray svelte-1h6ktq"),c(H,"class","card blue svelte-1h6ktq"),c($,"class","block svelte-1h6ktq"),c(M,"class","blue svelte-1h6ktq"),c(M,"type","checkbox"),c(I,"class","block svelte-1h6ktq"),c(_,"class","card gray svelte-1h6ktq"),c(L,"class","card blue svelte-1h6ktq"),c(w,"class","block svelte-1h6ktq"),R(S,"width","150px"),R(S,"height","5px"),c(B,"class","block svelte-1h6ktq"),R(e,"transform-origin","center top")},m(D,oe){P(D,e,oe),a(e,n),a(n,o),a(n,i),a(n,r),a(e,l),a(e,u),a(u,f),a(u,x),a(u,h),a(e,k),a(e,b),a(b,g),a(b,q),a(b,y),a(e,O),a(e,$),a($,E),a($,U),a($,H),a(e,V),a(e,I),a(I,M),a(e,X),a(e,w),a(w,_),a(w,Y),a(w,L),a(e,Z),a(e,B),a(B,S),z||(J=[d(C.call(null,o)),d(C.call(null,r)),d(C.call(null,f)),d(C.call(null,h)),d(C.call(null,g)),d(te.call(null,g)),d(C.call(null,y)),d(te.call(null,y)),d(A.call(null,E)),d(A.call(null,H)),d(we.call(null,M)),d(A.call(null,_)),d(_e.call(null,_)),d(A.call(null,L)),d(Le.call(null,L)),d(qe.call(null,S)),d(Ce.call(null,e))],z=!0)},d(D){D&&N(e),z=!1,le(J)}}}function He(t){let e,n,o,i=Ee();return{c(){e=s("div"),i&&i.c()},m(r,l){P(r,e,l),i&&i.m(e,null),n||(o=d($e.call(null,e)),n=!0)},p:j,i:j,o:j,d(r){r&&N(e),i&&i.d(),n=!1,o()}}}class Me extends K{constructor(e){super();Q(this,e,null,He,G,{})}}function ne(t){let e,n;return e=new Me({}),{c(){se(e.$$.fragment)},m(o,i){ce(e,o,i),n=!0},i(o){n||(T(e.$$.fragment,o),n=!0)},o(o){F(e.$$.fragment,o),n=!1},d(o){de(e,o)}}}function Se(t){let e,n,o=!t[0]&&ne();return{c(){o&&o.c(),e=ue()},m(i,r){o&&o.m(i,r),P(i,e,r),n=!0},p(i,[r]){i[0]?o&&(ve(),F(o,1,1,()=>{o=null}),fe()):o?r&1&&T(o,1):(o=ne(),o.c(),T(o,1),o.m(e.parentNode,e))},i(i){n||(T(o),n=!0)},o(i){F(o),n=!1},d(i){o&&o.d(i),i&&N(e)}}}function Ie(t,e,n){let o;return me(t,he,i=>n(0,o=i)),[o]}class Be extends K{constructor(e){super();Q(this,e,Ie,Se,G,{})}}new Be({target:document.getElementById("app")});
