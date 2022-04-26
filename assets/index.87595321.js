import{y as ee,$ as te,I as ne,S as X,i as Y,s as J,e as a,a as D,b as d,n as P,d as j,c as v,f as c,g as l,r as oe,h as re,m as ie,t as I,j as z,k as le,l as se,o as ae,p as ce,q as de,u as ue}from"./vendor.6f21331a.js";const fe=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}};fe();const me="modulepreload",K={},ve="/exio/",he=function(e,n){return!n||n.length===0?e():Promise.all(n.map(t=>{if(t=`${ve}${t}`,t in K)return;K[t]=!0;const r=t.endsWith(".css"),i=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${i}`))return;const s=document.createElement("link");if(s.rel=r?"stylesheet":me,r||(s.as="script",s.crossOrigin=""),s.href=t,document.head.appendChild(s),r)return new Promise((u,f)=>{s.addEventListener("load",u),s.addEventListener("error",f)})})).then(()=>e())};ee("en",()=>he(()=>import("./en.9805afb4.js"),[]));te({fallbackLocale:"en",initialLocale:ne()});function pe(o=10){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let n="";for(let t=0;t<o;t++){const r=Math.floor(Math.random()*e.length);n+=e.substring(r,r+1)}return n}function g(...o){return{destroy(){o.forEach(e=>{try{e()}catch{}})}}}function y(o){const e=pe(),n=document.getElementById(e)||document.createElement("style");return n.id=e,o.classList.add(e),document.body.appendChild(n),n}function xe(o,e){const{left:n,top:t,width:r,height:i}=o.getBoundingClientRect(),{clientX:s,clientY:u}=e,[f,h]=[s-n,u-t];return{x:f,y:h,width:r,height:i}}function be(o){const e=y(o);return e.innerHTML=`
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
  `,g(o.remove,e.remove)}function N(o,e={borderStyle:"reactive",disableClicking:!1}){const n=y(o),t=(u=0,f=0,h=0,m=0)=>{const k=`calc(${Math.max(h,m)}px * var(--exio-hover-radius))`,p=e.borderStyle==="static",x=e.borderStyle==="hover",q=p||x?"border: var(--exio-border-width) solid var(--exio-hover-border-color)":`border-image: radial-gradient(
            ${k} ${k} at var(--exio-mouse-x) var(--exio-mouse-y),
            var(--exio-hover-border-color) 0%,
            transparent 100%
          ) 9 / var(--exio-border-width) / 0px stretch`,b=x?"":`
        background-image: radial-gradient(
          ${Math.max(h,m)}px at ${u}px ${f}px,
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
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        border-radius: 1px;
        ${p?q:""};

        --exio-mouse-x: ${u}px;
        --exio-mouse-y: ${f}px;
        --exio-hover-radius: 2;
        --exio-hover-border-color: rgba(255, 255, 255, 1);
        --exio-hover-body-color: rgba(255, 255, 255, 0.2);
        --exio-border-width: 2px;
        --exio-scale-size: 0.95;
        --exio-transition-duration: 0.2s;
        transition: transform var(--exio-transition-duration);
      }
      .${n.id}:hover:not(.${n.id}-active) {
        ${q};
        background-size: calc(100% + 2 * var(--exio-border-width));
        background-position: center;
        ${b};
        transition: transform var(--exio-transition-duration);
      }
      .${n.id}.${n.id}-active {
        filter: brightness(0.8);
        transition: none;
        transform: scale(var(--exio-scale-size));
      }
    `};t();function r(u){const{x:f,y:h,width:m,height:k}=xe(o,u);t(f,h,m,k),o.addEventListener("mousemove",r)}o.addEventListener("mouseenter",r);const i=()=>{o.classList.add(`${n.id}-active`)},s=()=>{o.classList.remove(`${n.id}-active`)};return e.disableClicking||(o.addEventListener("touchstart",i),window.addEventListener("touchend",s),o.addEventListener("mousedown",i),window.addEventListener("mouseup",s)),g(o.remove,n.remove)}function C(o){const e=N(o);return g(e.destroy)}function B(o){const e=N(o,{borderStyle:"hover",disableClicking:!0}),n=y(o);return n.innerHTML=`
    .${n.id} {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0px;
      user-select: none;
    }
  `,g(e.destroy,n.remove)}function ge(o){const e=N(o,{borderStyle:"static"}),n=y(o);n.innerHTML=`
    .${n.id} {
      -webkit-appearance: none;
      width: 50px;
      height: 20px;
      border-radius: 100px;

      --exio-border-width: 2px;
      --exio-transition-duration: 0.2s;
    }
    .${n.id}:not(:checked) {
      background-color: transparent;
    }
  `;const t=y(o);return t.innerHTML=`
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
  `,g(e.destroy,n.remove,t.remove)}function ye(o){const e=y(o);return e.innerHTML=`
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
  `,g(o.remove)}function ke(o){const e=y(o);return e.innerHTML=`
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
  `,g(o.remove)}const Q=o=>{const e=y(o);return e.innerHTML=`
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
  `,g(o.remove)};function $e(o){let e,n,t,r,i,s,u,f,h,m,k,p,x,q,b,R,$,E,F,S,W,M,H,O,_,w,U,L,A,V;return{c(){e=a("div"),n=a("div"),t=a("button"),t.textContent="Default Button",r=v(),i=a("button"),i.textContent="Default Button",s=v(),u=a("div"),f=a("button"),f.textContent="Card Button",h=v(),m=a("button"),m.textContent="Card Button",k=v(),p=a("div"),x=a("button"),x.textContent="send",q=v(),b=a("button"),b.textContent="send",R=v(),$=a("div"),E=a("div"),E.textContent="Default Card",F=v(),S=a("div"),S.textContent="Default Card",W=v(),M=a("div"),H=a("input"),O=v(),_=a("div"),w=a("div"),w.textContent="Animated Card",U=v(),L=a("div"),L.textContent="Animated Card",c(t,"class","gray svelte-1h6ktq"),c(i,"class","blue svelte-1h6ktq"),c(n,"class","block svelte-1h6ktq"),c(f,"class","card gray svelte-1h6ktq"),c(m,"class","card blue svelte-1h6ktq"),c(u,"class","block svelte-1h6ktq"),c(x,"class","gray svelte-1h6ktq"),c(b,"class","blue svelte-1h6ktq"),c(p,"class","block svelte-1h6ktq"),c(E,"class","card gray svelte-1h6ktq"),c(S,"class","card blue svelte-1h6ktq"),c($,"class","block svelte-1h6ktq"),c(H,"class","blue svelte-1h6ktq"),c(H,"type","checkbox"),c(M,"class","block svelte-1h6ktq"),c(w,"class","card gray svelte-1h6ktq"),c(L,"class","card blue svelte-1h6ktq"),c(_,"class","block svelte-1h6ktq")},m(T,G){D(T,e,G),l(e,n),l(n,t),l(n,r),l(n,i),l(e,s),l(e,u),l(u,f),l(u,h),l(u,m),l(e,k),l(e,p),l(p,x),l(p,q),l(p,b),l(e,R),l(e,$),l($,E),l($,F),l($,S),l(e,W),l(e,M),l(M,H),l(e,O),l(e,_),l(_,w),l(_,U),l(_,L),A||(V=[d(C.call(null,t)),d(C.call(null,i)),d(C.call(null,f)),d(C.call(null,m)),d(C.call(null,x)),d(Q.call(null,x)),d(C.call(null,b)),d(Q.call(null,b)),d(B.call(null,E)),d(B.call(null,S)),d(ge.call(null,H)),d(B.call(null,w)),d(ye.call(null,w)),d(B.call(null,L)),d(ke.call(null,L))],A=!0)},d(T){T&&j(e),A=!1,oe(V)}}}function _e(o){let e,n,t,r=$e();return{c(){e=a("div"),r&&r.c()},m(i,s){D(i,e,s),r&&r.m(e,null),n||(t=d(be.call(null,e)),n=!0)},p:P,i:P,o:P,d(i){i&&j(e),r&&r.d(),n=!1,t()}}}class we extends X{constructor(e){super();Y(this,e,null,_e,J,{})}}function Z(o){let e,n;return e=new we({}),{c(){re(e.$$.fragment)},m(t,r){ie(e,t,r),n=!0},i(t){n||(I(e.$$.fragment,t),n=!0)},o(t){z(e.$$.fragment,t),n=!1},d(t){le(e,t)}}}function Le(o){let e,n,t=!o[0]&&Z();return{c(){t&&t.c(),e=se()},m(r,i){t&&t.m(r,i),D(r,e,i),n=!0},p(r,[i]){r[0]?t&&(de(),z(t,1,1,()=>{t=null}),ae()):t?i&1&&I(t,1):(t=Z(),t.c(),I(t,1),t.m(e.parentNode,e))},i(r){n||(I(t),n=!0)},o(r){z(t),n=!1},d(r){t&&t.d(r),r&&j(e)}}}function Ce(o,e,n){let t;return ce(o,ue,r=>n(0,t=r)),[t]}class qe extends X{constructor(e){super();Y(this,e,Ce,Le,J,{})}}new qe({target:document.getElementById("app")});
