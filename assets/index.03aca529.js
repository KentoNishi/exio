import{y as ee,$ as te,I as oe,S as X,i as Y,s as Z,e as s,a as z,b as d,n as D,d as P,c as v,f as c,g as ne,h as a,r as re,j as ie,m as ae,t as I,k as N,l as le,o as se,p as ce,q as de,u as ue,v as fe}from"./vendor.8c4ab5ad.js";const me=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}};me();const ve="modulepreload",J={},he="/exio/",pe=function(e,t){return!t||t.length===0?e():Promise.all(t.map(n=>{if(n=`${he}${n}`,n in J)return;J[n]=!0;const r=n.endsWith(".css"),i=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${i}`))return;const l=document.createElement("link");if(l.rel=r?"stylesheet":ve,r||(l.as="script",l.crossOrigin=""),l.href=n,document.head.appendChild(l),r)return new Promise((u,f)=>{l.addEventListener("load",u),l.addEventListener("error",f)})})).then(()=>e())};ee("en",()=>pe(()=>import("./en.9805afb4.js"),[]));te({fallbackLocale:"en",initialLocale:oe()});function xe(o=10){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let t="";for(let n=0;n<o;n++){const r=Math.floor(Math.random()*e.length);t+=e.substring(r,r+1)}return t}function b(...o){return{destroy(){o.forEach(e=>{try{e()}catch{}})}}}function y(o){const e=xe(),t=document.getElementById(e)||document.createElement("style");return t.id=e,o.classList.add(e),document.head.appendChild(t),t}function be(o,e){const{left:t,top:n,width:r,height:i}=o.getBoundingClientRect(),{clientX:l,clientY:u}=e,[f,h]=[l-t,u-n];return{x:f,y:h,width:r,height:i}}function ye(o){const e=y(o);return e.innerHTML=`
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
  `,b(o.remove,e.remove)}function R(o,e={borderStyle:"reactive",disableClicking:!1}){const t=y(o),n=(u=0,f=0,h=0,m=0)=>{const k=`calc(
      ${Math.max(h,m)}px * var(--exio-hover-border-scale)
    )`,p=e.borderStyle==="static",x=e.borderStyle==="hover",q=p||x?"border: var(--exio-border-width) solid var(--exio-hover-border-color)":`border-image: radial-gradient(
            ${k} ${k} at var(--exio-mouse-x) var(--exio-mouse-y),
            var(--exio-hover-border-color) 0%,
            transparent calc(100% * var(--exio-hover-border-scale))
          ) 9 / var(--exio-border-width) / 0px stretch`,g=x?"":`
        background-image: radial-gradient(
          calc(
            ${Math.max(h,m)}px *
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
        ${p?q:""};

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
    `};n();function r(u){const{x:f,y:h,width:m,height:k}=be(o,u);n(f,h,m,k),o.addEventListener("mousemove",r)}o.addEventListener("mouseenter",r);const i=()=>{o.classList.add(`${t.id}-active`)},l=()=>{o.classList.remove(`${t.id}-active`)};return e.disableClicking||(o.addEventListener("touchstart",i),window.addEventListener("touchend",l),o.addEventListener("mousedown",i),window.addEventListener("mouseup",l)),b(o.remove,t.remove)}function C(o){const e=R(o),t=y(o);return t.innerHTML=`
    .${t.id} {
      user-select: none;
    }
  `,b(e.destroy,t.remove)}function B(o){const e=R(o,{borderStyle:"hover",disableClicking:!0}),t=y(o);return t.innerHTML=`
    .${t.id} {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0px;
    }
  `,b(e.destroy,t.remove)}function ge(o){const e=R(o,{borderStyle:"static"}),t=y(o);return t.innerHTML=`
    .${t.id} {
      -webkit-appearance: none;
      width: 50px;
      height: 20px;
      border-radius: 100px;

      --exio-border-width: 2px;
      --exio-transition-duration: 0.2s;
    }
    .${t.id}:not(:checked) {
      background-color: transparent;
    }
    .${t.id}::after {
      content: '';
      position: absolute;
      width: ${o.clientHeight}px;
      height: ${o.clientHeight}px;
      border-radius: 100%;
      transform: translateX(calc(
        ${-o.clientWidth/2}px + ${o.clientHeight/2}px
      )) scale(0.7);
      background-color: white;
      transition: transform var(--exio-transition-duration);
    }
    .${t.id}:checked::after {
      transform: translateX(calc(
        ${o.clientWidth/2}px - ${o.clientHeight/2}px
      )) scale(0.7);
    }
  `,b(e.destroy,t.remove)}function ke(o){const e=y(o);return e.innerHTML=`
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
  `,b(o.remove)}function $e(o){const e=y(o);return e.innerHTML=`
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
  `,b(o.remove)}function _e(o){const e=y(o);return e.innerHTML=`
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
  `,b(o.remove)}const K=o=>{const e=y(o);return e.innerHTML=`
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
  `,b(o.remove)};function we(o){let e,t,n,r,i,l,u,f,h,m,k,p,x,q,g,j,$,E,F,S,W,M,H,O,_,w,U,L,A,V;return{c(){e=s("div"),t=s("div"),n=s("button"),n.textContent="Default Button",r=v(),i=s("button"),i.textContent="Default Button",l=v(),u=s("div"),f=s("button"),f.textContent="Card Button",h=v(),m=s("button"),m.textContent="Card Button",k=v(),p=s("div"),x=s("button"),x.textContent="send",q=v(),g=s("button"),g.textContent="send",j=v(),$=s("div"),E=s("div"),E.textContent="Default Card",F=v(),S=s("div"),S.textContent="Default Card",W=v(),M=s("div"),H=s("input"),O=v(),_=s("div"),w=s("div"),w.textContent="Animated Card",U=v(),L=s("div"),L.textContent="Animated Card",c(n,"class","gray svelte-1h6ktq"),c(i,"class","blue svelte-1h6ktq"),c(t,"class","block svelte-1h6ktq"),c(f,"class","card gray svelte-1h6ktq"),c(m,"class","card blue svelte-1h6ktq"),c(u,"class","block svelte-1h6ktq"),c(x,"class","gray svelte-1h6ktq"),c(g,"class","blue svelte-1h6ktq"),c(p,"class","block svelte-1h6ktq"),c(E,"class","card gray svelte-1h6ktq"),c(S,"class","card blue svelte-1h6ktq"),c($,"class","block svelte-1h6ktq"),c(H,"class","blue svelte-1h6ktq"),c(H,"type","checkbox"),c(M,"class","block svelte-1h6ktq"),c(w,"class","card gray svelte-1h6ktq"),c(L,"class","card blue svelte-1h6ktq"),c(_,"class","block svelte-1h6ktq"),ne(e,"transform-origin","center top")},m(T,G){z(T,e,G),a(e,t),a(t,n),a(t,r),a(t,i),a(e,l),a(e,u),a(u,f),a(u,h),a(u,m),a(e,k),a(e,p),a(p,x),a(p,q),a(p,g),a(e,j),a(e,$),a($,E),a($,F),a($,S),a(e,W),a(e,M),a(M,H),a(e,O),a(e,_),a(_,w),a(_,U),a(_,L),A||(V=[d(C.call(null,n)),d(C.call(null,i)),d(C.call(null,f)),d(C.call(null,m)),d(C.call(null,x)),d(K.call(null,x)),d(C.call(null,g)),d(K.call(null,g)),d(B.call(null,E)),d(B.call(null,S)),d(ge.call(null,H)),d(B.call(null,w)),d(ke.call(null,w)),d(B.call(null,L)),d($e.call(null,L)),d(_e.call(null,e))],A=!0)},d(T){T&&P(e),A=!1,re(V)}}}function Le(o){let e,t,n,r=we();return{c(){e=s("div"),r&&r.c()},m(i,l){z(i,e,l),r&&r.m(e,null),t||(n=d(ye.call(null,e)),t=!0)},p:D,i:D,o:D,d(i){i&&P(e),r&&r.d(),t=!1,n()}}}class Ce extends X{constructor(e){super();Y(this,e,null,Le,Z,{})}}function Q(o){let e,t;return e=new Ce({}),{c(){ie(e.$$.fragment)},m(n,r){ae(e,n,r),t=!0},i(n){t||(I(e.$$.fragment,n),t=!0)},o(n){N(e.$$.fragment,n),t=!1},d(n){le(e,n)}}}function qe(o){let e,t,n=!o[0]&&Q();return{c(){n&&n.c(),e=se()},m(r,i){n&&n.m(r,i),z(r,e,i),t=!0},p(r,[i]){r[0]?n&&(ue(),N(n,1,1,()=>{n=null}),ce()):n?i&1&&I(n,1):(n=Q(),n.c(),I(n,1),n.m(e.parentNode,e))},i(r){t||(I(n),t=!0)},o(r){N(n),t=!1},d(r){n&&n.d(r),r&&P(e)}}}function Ee(o,e,t){let n;return de(o,fe,r=>t(0,n=r)),[n]}class Se extends X{constructor(e){super();Y(this,e,Ee,qe,Z,{})}}new Se({target:document.getElementById("app")});
