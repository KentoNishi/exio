import{y as w,$ as E,I as S,S as p,i as v,s as g,e as a,a as d,b as y,n as f,d as m,c as I,f as x,g as C,m as M,t as u,h,j as O,k as P,l as A,o as B,p as N,q as R}from"./vendor.41a6287b.js";const j=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}};j();const q="modulepreload",_={},H="/exio/",F=function(e,r){return!r||r.length===0?e():Promise.all(r.map(t=>{if(t=`${H}${t}`,t in _)return;_[t]=!0;const o=t.endsWith(".css"),n=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${n}`))return;const s=document.createElement("link");if(s.rel=o?"stylesheet":q,o||(s.as="script",s.crossOrigin=""),s.href=t,document.head.appendChild(s),o)return new Promise((l,c)=>{s.addEventListener("load",l),s.addEventListener("error",c)})})).then(()=>e())};w("en",()=>F(()=>import("./en.9805afb4.js"),[]));E({fallbackLocale:"en",initialLocale:S()});function T(i=10){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let r="";for(let t=0;t<i;t++){const o=Math.floor(Math.random()*e.length);r+=e.substring(o,o+1)}return r}function b(...i){return{destroy(){i.forEach(e=>e())}}}function $(i){const e=T(),r=document.getElementById(e)||document.createElement("style");return r.id=e,i.classList.add(e),document.body.appendChild(r),r}function W(i,e){const{left:r,top:t,width:o,height:n}=i.getBoundingClientRect(),{clientX:s,clientY:l}=e,[c,k]=[s-r,l-t];return{x:c,y:k,width:o,height:n}}function z(i){const e=$(i);return e.innerHTML=`
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
  `,b(i.remove,e.remove)}function D(i){const e=$(i),r=(o=0,n=0,s=0,l=0)=>{const c=`calc(${Math.max(s,l)}px * var(--exio-hover-radius))`;e.innerHTML=`
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
          ${c} ${c} at var(--exio-mouse-x) var(--exio-mouse-y),
          var(--exio-hover-color),
          var(--exio-unhover-color)
        ) 9 / var(--exio-border-width) / 0px stretch;
      }
    `};r();function t(o){const{x:n,y:s,width:l,height:c}=W(i,o);r(n,s,l,c),i.addEventListener("mousemove",t)}return i.addEventListener("mouseenter",t),b(i.remove,e.remove)}function K(i){let e,r,t,o,n;return{c(){e=a("div"),r=a("div"),t=a("button"),t.textContent="Example Button",I(r,"class","block svelte-2f70ou")},m(s,l){d(s,e,l),x(e,r),x(r,t),o||(n=y(D.call(null,t)),o=!0)},d(s){s&&m(e),o=!1,n()}}}function U(i){let e,r,t,o=K();return{c(){e=a("div"),o&&o.c()},m(n,s){d(n,e,s),o&&o.m(e,null),r||(t=y(z.call(null,e)),r=!0)},p:f,i:f,o:f,d(n){n&&m(e),o&&o.d(),r=!1,t()}}}class V extends p{constructor(e){super();v(this,e,null,U,g,{})}}function L(i){let e,r;return e=new V({}),{c(){C(e.$$.fragment)},m(t,o){M(e,t,o),r=!0},i(t){r||(u(e.$$.fragment,t),r=!0)},o(t){h(e.$$.fragment,t),r=!1},d(t){O(e,t)}}}function X(i){let e,r,t=!i[0]&&L();return{c(){t&&t.c(),e=P()},m(o,n){t&&t.m(o,n),d(o,e,n),r=!0},p(o,[n]){o[0]?t&&(N(),h(t,1,1,()=>{t=null}),A()):t?n&1&&u(t,1):(t=L(),t.c(),u(t,1),t.m(e.parentNode,e))},i(o){r||(u(t),r=!0)},o(o){h(t),r=!1},d(o){t&&t.d(o),o&&m(e)}}}function Y(i,e,r){let t;return B(i,R,o=>r(0,t=o)),[t]}class G extends p{constructor(e){super();v(this,e,Y,X,g,{})}}new G({target:document.getElementById("app")});
