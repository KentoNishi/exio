import{y as ee,$ as te,I as ne,S as V,i as X,s as J,e as s,a as D,b as d,n as P,d as j,c as v,f as c,g as l,r as oe,h as re,m as ie,t as I,j as z,k as le,l as ae,o as se,p as ce,q as de,u as ue}from"./vendor.6f21331a.js";const fe=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}};fe();const me="modulepreload",K={},ve="/exio/",he=function(e,t){return!t||t.length===0?e():Promise.all(t.map(n=>{if(n=`${ve}${n}`,n in K)return;K[n]=!0;const r=n.endsWith(".css"),i=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${i}`))return;const a=document.createElement("link");if(a.rel=r?"stylesheet":me,r||(a.as="script",a.crossOrigin=""),a.href=n,document.head.appendChild(a),r)return new Promise((u,f)=>{a.addEventListener("load",u),a.addEventListener("error",f)})})).then(()=>e())};ee("en",()=>he(()=>import("./en.9805afb4.js"),[]));te({fallbackLocale:"en",initialLocale:ne()});function pe(o=10){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let t="";for(let n=0;n<o;n++){const r=Math.floor(Math.random()*e.length);t+=e.substring(r,r+1)}return t}function y(...o){return{destroy(){o.forEach(e=>{try{e()}catch{}})}}}function b(o){const e=pe(),t=document.getElementById(e)||document.createElement("style");return t.id=e,o.classList.add(e),document.head.appendChild(t),t}function xe(o,e){const{left:t,top:n,width:r,height:i}=o.getBoundingClientRect(),{clientX:a,clientY:u}=e,[f,h]=[a-t,u-n];return{x:f,y:h,width:r,height:i}}function be(o){const e=b(o);return e.innerHTML=`
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
  `,y(o.remove,e.remove)}function N(o,e={borderStyle:"reactive",disableClicking:!1}){const t=b(o),n=(u=0,f=0,h=0,m=0)=>{const k=`calc(
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
        display: flex;
        align-items: center;
        justify-content: center;
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
    `};n();function r(u){const{x:f,y:h,width:m,height:k}=xe(o,u);n(f,h,m,k),o.addEventListener("mousemove",r)}o.addEventListener("mouseenter",r);const i=()=>{o.classList.add(`${t.id}-active`)},a=()=>{o.classList.remove(`${t.id}-active`)};return e.disableClicking||(o.addEventListener("touchstart",i),window.addEventListener("touchend",a),o.addEventListener("mousedown",i),window.addEventListener("mouseup",a)),y(o.remove,t.remove)}function C(o){const e=N(o),t=b(o);return t.innerHTML=`
    .${t.id} {
      user-select: none;
    }
  `,y(e.destroy,t.remove)}function B(o){const e=N(o,{borderStyle:"hover",disableClicking:!0}),t=b(o);return t.innerHTML=`
    .${t.id} {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0px;
    }
  `,y(e.destroy,t.remove)}function ge(o){const e=N(o,{borderStyle:"static"}),t=b(o);t.innerHTML=`
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
  `;const n=b(o);return n.innerHTML=`
    .${n.id}::after {
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
    .${n.id}:checked::after {
      transform: translateX(calc(
        ${o.clientWidth/2}px - ${o.clientHeight/2}px
      )) scale(0.7);
    }
  `,y(e.destroy,t.remove,n.remove)}function ye(o){const e=b(o);return e.innerHTML=`
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
      transform: translateY(50%);
    }
  `,y(o.remove)}function ke(o){const e=b(o);return e.innerHTML=`
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
  `,y(o.remove)}const Q=o=>{const e=b(o);return e.innerHTML=`
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
  `,y(o.remove)};function $e(o){let e,t,n,r,i,a,u,f,h,m,k,p,x,q,g,R,$,E,F,S,W,M,H,O,_,w,U,L,T,Y;return{c(){e=s("div"),t=s("div"),n=s("button"),n.textContent="Default Button",r=v(),i=s("button"),i.textContent="Default Button",a=v(),u=s("div"),f=s("button"),f.textContent="Card Button",h=v(),m=s("button"),m.textContent="Card Button",k=v(),p=s("div"),x=s("button"),x.textContent="send",q=v(),g=s("button"),g.textContent="send",R=v(),$=s("div"),E=s("div"),E.textContent="Default Card",F=v(),S=s("div"),S.textContent="Default Card",W=v(),M=s("div"),H=s("input"),O=v(),_=s("div"),w=s("div"),w.textContent="Animated Card",U=v(),L=s("div"),L.textContent="Animated Card",c(n,"class","gray svelte-1h6ktq"),c(i,"class","blue svelte-1h6ktq"),c(t,"class","block svelte-1h6ktq"),c(f,"class","card gray svelte-1h6ktq"),c(m,"class","card blue svelte-1h6ktq"),c(u,"class","block svelte-1h6ktq"),c(x,"class","gray svelte-1h6ktq"),c(g,"class","blue svelte-1h6ktq"),c(p,"class","block svelte-1h6ktq"),c(E,"class","card gray svelte-1h6ktq"),c(S,"class","card blue svelte-1h6ktq"),c($,"class","block svelte-1h6ktq"),c(H,"class","blue svelte-1h6ktq"),c(H,"type","checkbox"),c(M,"class","block svelte-1h6ktq"),c(w,"class","card gray svelte-1h6ktq"),c(L,"class","card blue svelte-1h6ktq"),c(_,"class","block svelte-1h6ktq")},m(A,G){D(A,e,G),l(e,t),l(t,n),l(t,r),l(t,i),l(e,a),l(e,u),l(u,f),l(u,h),l(u,m),l(e,k),l(e,p),l(p,x),l(p,q),l(p,g),l(e,R),l(e,$),l($,E),l($,F),l($,S),l(e,W),l(e,M),l(M,H),l(e,O),l(e,_),l(_,w),l(_,U),l(_,L),T||(Y=[d(C.call(null,n)),d(C.call(null,i)),d(C.call(null,f)),d(C.call(null,m)),d(C.call(null,x)),d(Q.call(null,x)),d(C.call(null,g)),d(Q.call(null,g)),d(B.call(null,E)),d(B.call(null,S)),d(ge.call(null,H)),d(B.call(null,w)),d(ye.call(null,w)),d(B.call(null,L)),d(ke.call(null,L))],T=!0)},d(A){A&&j(e),T=!1,oe(Y)}}}function _e(o){let e,t,n,r=$e();return{c(){e=s("div"),r&&r.c()},m(i,a){D(i,e,a),r&&r.m(e,null),t||(n=d(be.call(null,e)),t=!0)},p:P,i:P,o:P,d(i){i&&j(e),r&&r.d(),t=!1,n()}}}class we extends V{constructor(e){super();X(this,e,null,_e,J,{})}}function Z(o){let e,t;return e=new we({}),{c(){re(e.$$.fragment)},m(n,r){ie(e,n,r),t=!0},i(n){t||(I(e.$$.fragment,n),t=!0)},o(n){z(e.$$.fragment,n),t=!1},d(n){le(e,n)}}}function Le(o){let e,t,n=!o[0]&&Z();return{c(){n&&n.c(),e=ae()},m(r,i){n&&n.m(r,i),D(r,e,i),t=!0},p(r,[i]){r[0]?n&&(de(),z(n,1,1,()=>{n=null}),se()):n?i&1&&I(n,1):(n=Z(),n.c(),I(n,1),n.m(e.parentNode,e))},i(r){t||(I(n),t=!0)},o(r){z(n),t=!1},d(r){n&&n.d(r),r&&j(e)}}}function Ce(o,e,t){let n;return ce(o,ue,r=>t(0,n=r)),[n]}class qe extends V{constructor(e){super();X(this,e,Ce,Le,J,{})}}new qe({target:document.getElementById("app")});
