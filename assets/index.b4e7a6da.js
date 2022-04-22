import{y as E,$ as w,I as S,S as v,i as g,s as y,e as a,a as f,b as x,n as d,d as m,c as I,f as _,g as P,m as C,t as u,h,j as M,k as O,l as A,o as B,p as N,q as R}from"./vendor.41a6287b.js";const j=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}};j();const q="modulepreload",b={},H="/exio/",F=function(e,r){return!r||r.length===0?e():Promise.all(r.map(t=>{if(t=`${H}${t}`,t in b)return;b[t]=!0;const o=t.endsWith(".css"),n=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${n}`))return;const s=document.createElement("link");if(s.rel=o?"stylesheet":q,o||(s.as="script",s.crossOrigin=""),s.href=t,document.head.appendChild(s),o)return new Promise((c,l)=>{s.addEventListener("load",c),s.addEventListener("error",l)})})).then(()=>e())};E("en",()=>F(()=>import("./en.9805afb4.js"),[]));w({fallbackLocale:"en",initialLocale:S()});function T(i=10){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let r="";for(let t=0;t<i;t++){const o=Math.floor(Math.random()*e.length);r+=e.substring(o,o+1)}return r}function p(...i){return{destroy(){i.forEach(e=>e())}}}function $(i){const e=T(),r=document.getElementById(e)||document.createElement("style");return r.id=e,i.classList.add(e),document.body.appendChild(r),r}function W(i,e){const{left:r,top:t,width:o,height:n}=i.getBoundingClientRect(),{clientX:s,clientY:c}=e,[l,k]=[s-r,c-t];return{x:l,y:k,width:o,height:n}}function z(i){const e=$(i);return e.innerHTML=`
    .${e.id} {
      background-color: #222;
      min-width: 100%;
      min-height: 100%;
      position: absolute;
      color: #fff;
      font-size: 1.25rem;
      font-family: Segoe UI, Frutiger, Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif;
    }
    body {
      margin: 0;
      width: 50%;
      height: 50%;
    }
  `,p(i.remove,e.remove)}function D(i){const e=$(i),r=(o=0,n=0,s=0,c=0)=>{const l=`calc(${Math.max(s,c)}px * var(--exio-hover-radius))`;e.innerHTML=`
      .${e.id} {
        outline: none;
        border: var(--exio-border-width) solid var(--exio-unhover-color);
        background-color: rgba(255, 255, 255, 0.15);
        color: inherit;
        font-size: inherit;
        font-family: inherit;
        padding: 0.5rem 1rem;

        --exio-mouse-x: ${o}px;
        --exio-mouse-y: ${n}px;
        --exio-hover-radius: 0.5;
        --exio-hover-color: white;
        --exio-unhover-color: #888;
        --exio-border-width: 1px;
      }
      .${e.id}:hover {
        border-image: radial-gradient(
          ${l} ${l} at var(--exio-mouse-x) var(--exio-mouse-y),
          var(--exio-hover-color),
          var(--exio-unhover-color)
        ) 9 / var(--exio-border-width) / 0px stretch;
      }
    `};r();function t(o){const{x:n,y:s,width:c,height:l}=W(i,o);r(n,s,c,l),i.addEventListener("mousemove",t)}return i.addEventListener("mouseenter",t),p(i.remove,e.remove)}function K(i){const e=D(i);return p(e.destroy)}function U(i){let e,r,t,o,n;return{c(){e=a("div"),r=a("div"),t=a("button"),t.textContent="Example Button",I(r,"class","block svelte-2f70ou")},m(s,c){f(s,e,c),_(e,r),_(r,t),o||(n=x(K.call(null,t)),o=!0)},d(s){s&&m(e),o=!1,n()}}}function V(i){let e,r,t,o=U();return{c(){e=a("div"),o&&o.c()},m(n,s){f(n,e,s),o&&o.m(e,null),r||(t=x(z.call(null,e)),r=!0)},p:d,i:d,o:d,d(n){n&&m(e),o&&o.d(),r=!1,t()}}}class X extends v{constructor(e){super();g(this,e,null,V,y,{})}}function L(i){let e,r;return e=new X({}),{c(){P(e.$$.fragment)},m(t,o){C(e,t,o),r=!0},i(t){r||(u(e.$$.fragment,t),r=!0)},o(t){h(e.$$.fragment,t),r=!1},d(t){M(e,t)}}}function Y(i){let e,r,t=!i[0]&&L();return{c(){t&&t.c(),e=O()},m(o,n){t&&t.m(o,n),f(o,e,n),r=!0},p(o,[n]){o[0]?t&&(N(),h(t,1,1,()=>{t=null}),A()):t?n&1&&u(t,1):(t=L(),t.c(),u(t,1),t.m(e.parentNode,e))},i(o){r||(u(t),r=!0)},o(o){h(t),r=!1},d(o){t&&t.d(o),o&&m(e)}}}function G(i,e,r){let t;return B(i,R,o=>r(0,t=o)),[t]}class J extends v{constructor(e){super();g(this,e,G,Y,y,{})}}new J({target:document.getElementById("app")});
