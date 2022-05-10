import{y as ee,$ as te,I as oe,S as X,i as Y,s as Z,e as s,a as z,b as d,n as D,d as P,c as v,f as c,g as ne,h as a,r as re,j as ie,m as ae,t as I,k as j,l as le,o as se,p as ce,q as de,u as ue,v as fe}from"./vendor.8c4ab5ad.js";const me=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}};me();const ve="modulepreload",J={},he="/exio/",pe=function(e,t){return!t||t.length===0?e():Promise.all(t.map(o=>{if(o=`${he}${o}`,o in J)return;J[o]=!0;const r=o.endsWith(".css"),i=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${i}`))return;const l=document.createElement("link");if(l.rel=r?"stylesheet":ve,r||(l.as="script",l.crossOrigin=""),l.href=o,document.head.appendChild(l),r)return new Promise((u,f)=>{l.addEventListener("load",u),l.addEventListener("error",f)})})).then(()=>e())};ee("en",()=>pe(()=>import("./en.9805afb4.js"),[]));te({fallbackLocale:"en",initialLocale:oe()});function xe(n=10){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let t="";for(let o=0;o<n;o++){const r=Math.floor(Math.random()*e.length);t+=e.substring(r,r+1)}return t}function y(...n){return{destroy(){n.forEach(e=>{try{e()}catch{}})}}}function h(n){const e=xe(),t=document.getElementById(e)||document.createElement("style");return t.id=e,n.classList.add(e),document.head.appendChild(t),t}function be(n,e){const{left:t,top:o,width:r,height:i}=n.getBoundingClientRect(),{clientX:l,clientY:u}=e,[f,p]=[l-t,u-o];return{x:f,y:p,width:r,height:i}}function ye(n){const e=h(n);return e.innerHTML=`
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
  `,y(n.remove,e.remove)}function N(n,e={borderStyle:"reactive",disableClicking:!1}){const t=h(n),o=(u=0,f=0,p=0,m=0)=>{const k=`calc(
      ${Math.max(p,m)}px * var(--exio-hover-border-scale)
    )`,x=e.borderStyle==="static",b=e.borderStyle==="hover",q=x||b?"border: var(--exio-border-width) solid var(--exio-hover-border-color)":`border-image: radial-gradient(
            ${k} ${k} at var(--exio-mouse-x) var(--exio-mouse-y),
            var(--exio-hover-border-color) 0%,
            transparent calc(100% * var(--exio-hover-border-scale))
          ) 9 / var(--exio-border-width) / 0px stretch`,g=b?"":`
        background-image: radial-gradient(
          calc(
            ${Math.max(p,m)}px *
            var(--exio-hover-background-scale)
          ) at ${u}px ${f}px,
          var(--exio-hover-body-color) 0%,
          transparent 100%
        )
      `;t.innerHTML=`
      .${t.id} {
        outline: none;
        border: var(--exio-border-width) solid transparent;
        color: inherit;
        font-size: inherit;
        font-family: inherit;
        padding: 0.25em 0.75em;
        overflow: hidden;
        border-radius: 1px;
        ${x?q:""};

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
      .${t.id}:hover:not(.${t.id}-active) {
        ${q};
        background-size: calc(100% + 2 * var(--exio-border-width));
        background-position: center;
        ${g};
        transition: transform var(--exio-transition-duration);
      }
      .${t.id}.${t.id}-active {
        filter: brightness(0.8);
        transition: none;
        transform: scale(var(--exio-scale-size));
      }
    `};o();function r(u){const{x:f,y:p,width:m,height:k}=be(n,u);o(f,p,m,k),n.addEventListener("mousemove",r)}n.addEventListener("mouseenter",r);const i=()=>{n.classList.add(`${t.id}-active`)},l=()=>{n.classList.remove(`${t.id}-active`)};return e.disableClicking||(n.addEventListener("touchstart",i),window.addEventListener("touchend",l),n.addEventListener("mousedown",i),window.addEventListener("mouseup",l)),y(n.remove,t.remove)}function C(n){const e=N(n),t=h(n);return t.innerHTML=`
    .${t.id} {
      user-select: none;
    }
  `,y(e.destroy,t.remove)}function B(n){const e=N(n,{borderStyle:"hover",disableClicking:!0}),t=h(n);return t.innerHTML=`
    .${t.id} {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0px;
    }
  `,y(e.destroy,t.remove)}function ge(n){const e=N(n,{borderStyle:"static"}),t=h(n);t.innerHTML=`
    .${t.id} {
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
    .${t.id}:not(:checked) {
      background-color: transparent;
    }
  `;const o=h(n);return o.innerHTML=`
    .${o.id}::after {
      content: '';
      position: absolute;
      width: ${n.clientHeight}px;
      height: ${n.clientHeight}px;
      border-radius: 100%;
      transform: translateX(calc(
        ${-n.clientWidth/2}px + ${n.clientHeight/2}px
      )) scale(0.7);
      background-color: white;
      transition: transform var(--exio-transition-duration);
    }
    .${o.id}:checked::after {
      transform: translateX(calc(
        ${n.clientWidth/2}px - ${n.clientHeight/2}px
      )) scale(0.7);
    }
  `,y(e.destroy,t.remove,o.remove)}function ke(n){const e=h(n);return e.innerHTML=`
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
  `,y(n.remove)}function $e(n){const e=h(n);return e.innerHTML=`
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
  `,y(n.remove)}function _e(n){const e=h(n);return e.innerHTML=`
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
  `,y(n.remove)}const K=n=>{const e=h(n);return e.innerHTML=`
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
  `,y(n.remove)};function we(n){let e,t,o,r,i,l,u,f,p,m,k,x,b,q,g,R,$,E,F,H,W,M,S,O,_,w,U,L,T,V;return{c(){e=s("div"),t=s("div"),o=s("button"),o.textContent="Default Button",r=v(),i=s("button"),i.textContent="Default Button",l=v(),u=s("div"),f=s("button"),f.textContent="Card Button",p=v(),m=s("button"),m.textContent="Card Button",k=v(),x=s("div"),b=s("button"),b.textContent="send",q=v(),g=s("button"),g.textContent="send",R=v(),$=s("div"),E=s("div"),E.textContent="Default Card",F=v(),H=s("div"),H.textContent="Default Card",W=v(),M=s("div"),S=s("input"),O=v(),_=s("div"),w=s("div"),w.textContent="Animated Card",U=v(),L=s("div"),L.textContent="Animated Card",c(o,"class","gray svelte-1h6ktq"),c(i,"class","blue svelte-1h6ktq"),c(t,"class","block svelte-1h6ktq"),c(f,"class","card gray svelte-1h6ktq"),c(m,"class","card blue svelte-1h6ktq"),c(u,"class","block svelte-1h6ktq"),c(b,"class","gray svelte-1h6ktq"),c(g,"class","blue svelte-1h6ktq"),c(x,"class","block svelte-1h6ktq"),c(E,"class","card gray svelte-1h6ktq"),c(H,"class","card blue svelte-1h6ktq"),c($,"class","block svelte-1h6ktq"),c(S,"class","blue svelte-1h6ktq"),c(S,"type","checkbox"),c(M,"class","block svelte-1h6ktq"),c(w,"class","card gray svelte-1h6ktq"),c(L,"class","card blue svelte-1h6ktq"),c(_,"class","block svelte-1h6ktq"),ne(e,"transform-origin","center top")},m(A,G){z(A,e,G),a(e,t),a(t,o),a(t,r),a(t,i),a(e,l),a(e,u),a(u,f),a(u,p),a(u,m),a(e,k),a(e,x),a(x,b),a(x,q),a(x,g),a(e,R),a(e,$),a($,E),a($,F),a($,H),a(e,W),a(e,M),a(M,S),a(e,O),a(e,_),a(_,w),a(_,U),a(_,L),T||(V=[d(C.call(null,o)),d(C.call(null,i)),d(C.call(null,f)),d(C.call(null,m)),d(C.call(null,b)),d(K.call(null,b)),d(C.call(null,g)),d(K.call(null,g)),d(B.call(null,E)),d(B.call(null,H)),d(ge.call(null,S)),d(B.call(null,w)),d(ke.call(null,w)),d(B.call(null,L)),d($e.call(null,L)),d(_e.call(null,e))],T=!0)},d(A){A&&P(e),T=!1,re(V)}}}function Le(n){let e,t,o,r=we();return{c(){e=s("div"),r&&r.c()},m(i,l){z(i,e,l),r&&r.m(e,null),t||(o=d(ye.call(null,e)),t=!0)},p:D,i:D,o:D,d(i){i&&P(e),r&&r.d(),t=!1,o()}}}class Ce extends X{constructor(e){super();Y(this,e,null,Le,Z,{})}}function Q(n){let e,t;return e=new Ce({}),{c(){ie(e.$$.fragment)},m(o,r){ae(e,o,r),t=!0},i(o){t||(I(e.$$.fragment,o),t=!0)},o(o){j(e.$$.fragment,o),t=!1},d(o){le(e,o)}}}function qe(n){let e,t,o=!n[0]&&Q();return{c(){o&&o.c(),e=se()},m(r,i){o&&o.m(r,i),z(r,e,i),t=!0},p(r,[i]){r[0]?o&&(ue(),j(o,1,1,()=>{o=null}),ce()):o?i&1&&I(o,1):(o=Q(),o.c(),I(o,1),o.m(e.parentNode,e))},i(r){t||(I(o),t=!0)},o(r){j(o),t=!1},d(r){o&&o.d(r),r&&P(e)}}}function Ee(n,e,t){let o;return de(n,fe,r=>t(0,o=r)),[o]}class He extends X{constructor(e){super();Y(this,e,Ee,qe,Z,{})}}new He({target:document.getElementById("app")});
