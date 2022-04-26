import{y as O,$ as D,I as U,S as P,i as j,s as z,e as d,a as q,b as m,n as H,d as M,c as _,f as u,g as a,r as X,h as Y,m as K,t as L,j as B,k as V,l as G,o as J,p as Q,q as Z,u as ee}from"./vendor.6f21331a.js";const te=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}};te();const re="modulepreload",F={},ne="/exio/",oe=function(e,r){return!r||r.length===0?e():Promise.all(r.map(t=>{if(t=`${ne}${t}`,t in F)return;F[t]=!0;const o=t.endsWith(".css"),i=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${i}`))return;const s=document.createElement("link");if(s.rel=o?"stylesheet":re,o||(s.as="script",s.crossOrigin=""),s.href=t,document.head.appendChild(s),o)return new Promise((l,c)=>{s.addEventListener("load",l),s.addEventListener("error",c)})})).then(()=>e())};O("en",()=>oe(()=>import("./en.9805afb4.js"),[]));D({fallbackLocale:"en",initialLocale:U()});function ie(n=10){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let r="";for(let t=0;t<n;t++){const o=Math.floor(Math.random()*e.length);r+=e.substring(o,o+1)}return r}function g(...n){return{destroy(){n.forEach(e=>{try{e()}catch{}})}}}function y(n){const e=ie(),r=document.getElementById(e)||document.createElement("style");return r.id=e,n.classList.add(e),document.body.appendChild(r),r}function se(n,e){const{left:r,top:t,width:o,height:i}=n.getBoundingClientRect(),{clientX:s,clientY:l}=e,[c,v]=[s-r,l-t];return{x:c,y:v,width:o,height:i}}function ae(n){const e=y(n);return e.innerHTML=`
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
  `,g(n.remove,e.remove)}function I(n,e={borderStyle:"reactive",disableClicking:!1}){const r=y(n),t=(l=0,c=0,v=0,f=0)=>{const x=`calc(${Math.max(v,f)}px * var(--exio-hover-radius))`,b=e.borderStyle==="static",p=e.borderStyle==="hover",w=b||p?"border: var(--exio-border-width) solid var(--exio-hover-border-color)":`border-image: radial-gradient(
            ${x} ${x} at var(--exio-mouse-x) var(--exio-mouse-y),
            var(--exio-hover-border-color) 0%,
            transparent 100%
          ) 9 / var(--exio-border-width) / 0px stretch`,h=p?"":`
        background-image: radial-gradient(
          ${Math.max(v,f)}px at ${l}px ${c}px,
          var(--exio-hover-body-color) 0%,
          transparent 100%
        )
      `;r.innerHTML=`
      .${r.id} {
        outline: none;
        border: var(--exio-border-width) solid transparent;
        color: inherit;
        font-size: inherit;
        font-family: inherit;
        padding: 0.25em 0.75em;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        border-radius: 1px;
        ${b?w:""};

        --exio-mouse-x: ${l}px;
        --exio-mouse-y: ${c}px;
        --exio-hover-radius: 1.5;
        --exio-hover-border-color: rgba(255, 255, 255, 1);
        --exio-hover-body-color: rgba(255, 255, 255, 0.2);
        --exio-border-width: 1px;
        --exio-scale-size: 0.95;
        --exio-transition-duration: 0.2s;
        transition: transform var(--exio-transition-duration);
      }
      .${r.id}:hover:not(.${r.id}-active) {
        ${w};
        background-size: calc(100% + 2 * var(--exio-border-width));
        background-position: center;
        ${h};
        transition: transform var(--exio-transition-duration);
      }
      .${r.id}.${r.id}-active {
        filter: brightness(0.8);
        transition: none;
        transform: scale(var(--exio-scale-size));
      }
    `};t();function o(l){const{x:c,y:v,width:f,height:x}=se(n,l);t(c,v,f,x),n.addEventListener("mousemove",o)}n.addEventListener("mouseenter",o);const i=()=>{n.classList.add(`${r.id}-active`)},s=()=>{n.classList.remove(`${r.id}-active`)};return e.disableClicking||(n.addEventListener("touchstart",i),window.addEventListener("touchend",s),n.addEventListener("mousedown",i),window.addEventListener("mouseup",s)),g(n.remove,r.remove)}function N(n){const e=I(n);return g(e.destroy)}function E(n){const e=I(n,{borderStyle:"hover",disableClicking:!0}),r=y(n);return r.innerHTML=`
    .${r.id} {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0px;
      user-select: none;
    }
  `,g(e.destroy,r.remove)}function le(n){const e=I(n,{borderStyle:"static"}),r=y(n);r.innerHTML=`
    .${r.id} {
      -webkit-appearance: none;
      width: 50px;
      height: 20px;
      border-radius: 100px;

      --exio-border-width: 2px;
      --exio-transition-duration: 0.2s;
    }
    .${r.id}:not(:checked) {
      background-color: transparent;
    }
  `;const t=y(n);return t.innerHTML=`
    .${t.id}::after {
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
    .${t.id}:checked::after {
      transform: translateX(calc(
        ${n.clientWidth/2}px - ${n.clientHeight/2}px
      )) scale(0.7);
    }
  `,g(e.destroy,r.remove,t.remove)}function ce(n){const e=y(n);return e.innerHTML=`
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
    }
  `,g(n.remove)}function de(n){const e=y(n);return e.innerHTML=`
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
    }
  `,g(n.remove)}function ue(n){let e,r,t,o,i,s,l,c,v,f,x,b,p,w,h,$,T,k,C,A;return{c(){e=d("div"),r=d("div"),t=d("button"),t.textContent="Example Button",o=_(),i=d("button"),i.textContent="Example Button",s=_(),l=d("div"),c=d("div"),c.textContent="Example Card",v=_(),f=d("div"),f.textContent="Example Card",x=_(),b=d("div"),p=d("input"),w=_(),h=d("div"),$=d("div"),$.textContent="Example Card",T=_(),k=d("div"),k.textContent="Example Card",u(t,"class","gray svelte-1h6ktq"),u(i,"class","blue svelte-1h6ktq"),u(r,"class","block svelte-1h6ktq"),u(c,"class","card gray svelte-1h6ktq"),u(f,"class","card blue svelte-1h6ktq"),u(l,"class","block svelte-1h6ktq"),u(p,"class","blue svelte-1h6ktq"),u(p,"type","checkbox"),u(b,"class","block svelte-1h6ktq"),u($,"class","card gray svelte-1h6ktq"),u(k,"class","card blue svelte-1h6ktq"),u(h,"class","block svelte-1h6ktq")},m(S,W){q(S,e,W),a(e,r),a(r,t),a(r,o),a(r,i),a(e,s),a(e,l),a(l,c),a(l,v),a(l,f),a(e,x),a(e,b),a(b,p),a(e,w),a(e,h),a(h,$),a(h,T),a(h,k),C||(A=[m(N.call(null,t)),m(N.call(null,i)),m(E.call(null,c)),m(E.call(null,f)),m(le.call(null,p)),m(E.call(null,$)),m(ce.call(null,$)),m(E.call(null,k)),m(de.call(null,k))],C=!0)},d(S){S&&M(e),C=!1,X(A)}}}function fe(n){let e,r,t,o=ue();return{c(){e=d("div"),o&&o.c()},m(i,s){q(i,e,s),o&&o.m(e,null),r||(t=m(ae.call(null,e)),r=!0)},p:H,i:H,o:H,d(i){i&&M(e),o&&o.d(),r=!1,t()}}}class me extends P{constructor(e){super();j(this,e,null,fe,z,{})}}function R(n){let e,r;return e=new me({}),{c(){Y(e.$$.fragment)},m(t,o){K(e,t,o),r=!0},i(t){r||(L(e.$$.fragment,t),r=!0)},o(t){B(e.$$.fragment,t),r=!1},d(t){V(e,t)}}}function ve(n){let e,r,t=!n[0]&&R();return{c(){t&&t.c(),e=G()},m(o,i){t&&t.m(o,i),q(o,e,i),r=!0},p(o,[i]){o[0]?t&&(Z(),B(t,1,1,()=>{t=null}),J()):t?i&1&&L(t,1):(t=R(),t.c(),L(t,1),t.m(e.parentNode,e))},i(o){r||(L(t),r=!0)},o(o){B(t),r=!1},d(o){t&&t.d(o),o&&M(e)}}}function pe(n,e,r){let t;return Q(n,ee,o=>r(0,t=o)),[t]}class he extends P{constructor(e){super();j(this,e,pe,ve,z,{})}}new he({target:document.getElementById("app")});
