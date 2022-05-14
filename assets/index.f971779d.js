import{y as le,$ as ae,I as se,S as G,i as ee,s as te,e as a,a as R,b as d,n as F,d as W,c as m,f as c,g as ce,h as l,r as de,j as ue,m as fe,t as z,k as U,l as me,o as ve,p as he,q as pe,u as xe,v as be}from"./vendor.8c4ab5ad.js";const ye=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}};ye();const ge="modulepreload",oe={},ke="/exio/",$e=function(e,n){return!n||n.length===0?e():Promise.all(n.map(o=>{if(o=`${ke}${o}`,o in oe)return;oe[o]=!0;const r=o.endsWith(".css"),i=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${i}`))return;const s=document.createElement("link");if(s.rel=r?"stylesheet":ge,r||(s.as="script",s.crossOrigin=""),s.href=o,document.head.appendChild(s),r)return new Promise((u,f)=>{s.addEventListener("load",u),s.addEventListener("error",f)})})).then(()=>e())};le("en",()=>$e(()=>import("./en.9805afb4.js"),[]));ae({fallbackLocale:"en",initialLocale:se()});function _e(t=10){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let n="";for(let o=0;o<t;o++){const r=Math.floor(Math.random()*e.length);n+=e.substring(r,r+1)}return n}function p(...t){return{destroy(){t.forEach(e=>{try{e()}catch{}})}}}function v(t){const e=_e(),n=document.getElementById(e)||document.createElement("style");return n.id=e,t.classList.add(e),document.head.appendChild(n),n}function we(t,e){const{left:n,top:o,width:r,height:i}=t.getBoundingClientRect(),{clientX:s,clientY:u}=e,[f,x]=[s-n,u-o];return{x:f,y:x,width:r,height:i}}function Le(t){const e=v(t);return e.innerHTML=`
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
  `,p(t.remove,e.remove)}function O(t,e={borderStyle:"reactive",disableClicking:!1}){const n=v(t),o=(u=0,f=0,x=0,h=0)=>{const k=`calc(
      ${Math.max(x,h)}px * var(--exio-hover-border-scale)
    )`,b=e.borderStyle==="static",y=e.borderStyle==="hover",S=b||y?"border: var(--exio-border-width) solid var(--exio-hover-border-color)":`border-image: radial-gradient(
            ${k} ${k} at var(--exio-mouse-x) var(--exio-mouse-y),
            var(--exio-hover-border-color) 0%,
            transparent calc(100% * var(--exio-hover-border-scale))
          ) 9 / var(--exio-border-width) / 0px stretch`,g=y?"":`
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
        ${b?S:""};

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
        ${S};
        background-size: calc(100% + 2 * var(--exio-border-width));
        background-position: center;
        ${g};
        transition: transform var(--exio-transition-duration);
      }
      .${n.id}.${n.id}-active {
        filter: brightness(0.8);
        transition: none;
        transform: scale(var(--exio-scale-size));
      }
    `};o();function r(u){const{x:f,y:x,width:h,height:k}=we(t,u);o(f,x,h,k),t.addEventListener("mousemove",r)}t.addEventListener("mouseenter",r);const i=()=>{t.classList.add(`${n.id}-active`)},s=()=>{t.classList.remove(`${n.id}-active`)};return e.disableClicking||(t.addEventListener("touchstart",i),window.addEventListener("touchend",s),t.addEventListener("mousedown",i),window.addEventListener("mouseup",s)),p(t.remove,n.remove)}function M(t){const e=O(t),n=v(t);return n.innerHTML=`
    .${n.id} {
      user-select: none;
    }
  `,p(e.destroy,n.remove)}function P(t){const e=O(t,{borderStyle:"hover",disableClicking:!0}),n=v(t);return n.innerHTML=`
    .${n.id} {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0px;
    }
  `,p(e.destroy,n.remove)}function Ce(t){const e=O(t,{borderStyle:"static"}),n=v(t);n.innerHTML=`
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
  `,p(e.destroy,n.remove,o.remove)}function qe(t){const e=v(t);return e.innerHTML=`
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
  `,p(t.remove)}function Ee(t){const e=v(t);return e.innerHTML=`
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
  `,p(t.remove)}function He(t){const e=v(t);return e.innerHTML=`
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
  `,p(t.remove)}const ne=t=>{const e=v(t);return e.innerHTML=`
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
  `,p(t.remove)};function Me(t){const e=O(t),n=v(t);n.innerHTML=`
    .${n.id} {
      user-select: none;
    }
  `;const o=r=>{};return t.addEventListener("mousedown",o),t.addEventListener("touchstart",o),p(e.destroy,n.remove,()=>{t.removeEventListener("mousedown",o),t.removeEventListener("touchstart",o)})}function Se(t){let e,n,o,r,i,s,u,f,x,h,k,b,y,S,g,V,_,I,X,B,Y,A,T,Z,w,L,J,C,K,D,$,q,E,H,j,Q;return{c(){e=a("div"),n=a("div"),o=a("button"),o.textContent="Default Button",r=m(),i=a("button"),i.textContent="Default Button",s=m(),u=a("div"),f=a("button"),f.textContent="Card Button",x=m(),h=a("button"),h.textContent="Card Button",k=m(),b=a("div"),y=a("button"),y.textContent="send",S=m(),g=a("button"),g.textContent="send",V=m(),_=a("div"),I=a("div"),I.textContent="Default Card",X=m(),B=a("div"),B.textContent="Default Card",Y=m(),A=a("div"),T=a("input"),Z=m(),w=a("div"),L=a("div"),L.textContent="Animated Card",J=m(),C=a("div"),C.textContent="Animated Card",K=m(),D=a("div"),$=a("select"),q=a("option"),q.textContent="Option 1",E=a("option"),E.textContent="Option 2",H=a("option"),H.textContent="Option 3",c(o,"class","gray svelte-1h6ktq"),c(i,"class","blue svelte-1h6ktq"),c(n,"class","block svelte-1h6ktq"),c(f,"class","card gray svelte-1h6ktq"),c(h,"class","card blue svelte-1h6ktq"),c(u,"class","block svelte-1h6ktq"),c(y,"class","gray svelte-1h6ktq"),c(g,"class","blue svelte-1h6ktq"),c(b,"class","block svelte-1h6ktq"),c(I,"class","card gray svelte-1h6ktq"),c(B,"class","card blue svelte-1h6ktq"),c(_,"class","block svelte-1h6ktq"),c(T,"class","blue svelte-1h6ktq"),c(T,"type","checkbox"),c(A,"class","block svelte-1h6ktq"),c(L,"class","card gray svelte-1h6ktq"),c(C,"class","card blue svelte-1h6ktq"),c(w,"class","block svelte-1h6ktq"),q.__value="1",q.value=q.__value,E.__value="2",E.value=E.__value,H.__value="3",H.value=H.__value,c($,"class","gray svelte-1h6ktq"),c(D,"class","block svelte-1h6ktq"),ce(e,"transform-origin","center top")},m(N,ie){R(N,e,ie),l(e,n),l(n,o),l(n,r),l(n,i),l(e,s),l(e,u),l(u,f),l(u,x),l(u,h),l(e,k),l(e,b),l(b,y),l(b,S),l(b,g),l(e,V),l(e,_),l(_,I),l(_,X),l(_,B),l(e,Y),l(e,A),l(A,T),l(e,Z),l(e,w),l(w,L),l(w,J),l(w,C),l(e,K),l(e,D),l(D,$),l($,q),l($,E),l($,H),j||(Q=[d(M.call(null,o)),d(M.call(null,i)),d(M.call(null,f)),d(M.call(null,h)),d(M.call(null,y)),d(ne.call(null,y)),d(M.call(null,g)),d(ne.call(null,g)),d(P.call(null,I)),d(P.call(null,B)),d(Ce.call(null,T)),d(P.call(null,L)),d(qe.call(null,L)),d(P.call(null,C)),d(Ee.call(null,C)),d(Me.call(null,$)),d(He.call(null,e))],j=!0)},d(N){N&&W(e),j=!1,de(Q)}}}function Ie(t){let e,n,o,r=Se();return{c(){e=a("div"),r&&r.c()},m(i,s){R(i,e,s),r&&r.m(e,null),n||(o=d(Le.call(null,e)),n=!0)},p:F,i:F,o:F,d(i){i&&W(e),r&&r.d(),n=!1,o()}}}class Be extends G{constructor(e){super();ee(this,e,null,Ie,te,{})}}function re(t){let e,n;return e=new Be({}),{c(){ue(e.$$.fragment)},m(o,r){fe(e,o,r),n=!0},i(o){n||(z(e.$$.fragment,o),n=!0)},o(o){U(e.$$.fragment,o),n=!1},d(o){me(e,o)}}}function Te(t){let e,n,o=!t[0]&&re();return{c(){o&&o.c(),e=ve()},m(r,i){o&&o.m(r,i),R(r,e,i),n=!0},p(r,[i]){r[0]?o&&(xe(),U(o,1,1,()=>{o=null}),he()):o?i&1&&z(o,1):(o=re(),o.c(),z(o,1),o.m(e.parentNode,e))},i(r){n||(z(o),n=!0)},o(r){U(o),n=!1},d(r){o&&o.d(r),r&&W(e)}}}function Ae(t,e,n){let o;return pe(t,be,r=>n(0,o=r)),[o]}class De extends G{constructor(e){super();ee(this,e,Ae,Te,te,{})}}new De({target:document.getElementById("app")});
