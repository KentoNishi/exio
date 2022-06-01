import{y as le,$ as ae,I as se,S as G,i as ee,s as te,e as a,a as N,b as u,n as F,d as W,c as m,f as c,g as ce,h as l,r as ue,j as de,m as fe,t as P,k as U,l as me,o as ve,p as pe,q as he,u as xe,v as be}from"./vendor.8c4ab5ad.js";const ye=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}};ye();const ge="modulepreload",ne={},ke="/exio/",$e=function(e,n){return!n||n.length===0?e():Promise.all(n.map(o=>{if(o=`${ke}${o}`,o in ne)return;ne[o]=!0;const r=o.endsWith(".css"),i=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${i}`))return;const s=document.createElement("link");if(s.rel=r?"stylesheet":ge,r||(s.as="script",s.crossOrigin=""),s.href=o,document.head.appendChild(s),r)return new Promise((d,f)=>{s.addEventListener("load",d),s.addEventListener("error",f)})})).then(()=>e())};le("en",()=>$e(()=>import("./en.9805afb4.js"),[]));ae({fallbackLocale:"en",initialLocale:se()});function _e(t=10){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let n="";for(let o=0;o<t;o++){const r=Math.floor(Math.random()*e.length);n+=e.substring(r,r+1)}return n}function h(...t){return{destroy(){t.forEach(e=>{try{e()}catch{}})}}}function v(t){const e=_e(),n=document.getElementById(e)||document.createElement("style");return n.id=e,t.classList.add(e),document.head.appendChild(n),n}function we(t,e){const{left:n,top:o,width:r,height:i}=t.getBoundingClientRect(),{clientX:s,clientY:d}=e,[f,x]=[s-n,d-o];return{x:f,y:x,width:r,height:i}}function Le(t){const e=v(t);return e.innerHTML=`
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
  `,h(t.remove,e.remove)}function z(t,e={borderStyle:"reactive",disableClicking:!1}){const n=v(t),o=(d=0,f=0,x=0,p=0)=>{const k=`calc(
      ${Math.max(x,p)}px * var(--exio-hover-border-scale)
    )`,b=e.borderStyle==="static",y=e.borderStyle==="hover",S=b||y?"border: var(--exio-border-width) solid var(--exio-hover-border-color)":`border-image: radial-gradient(
            ${k} ${k} at var(--exio-mouse-x) var(--exio-mouse-y),
            var(--exio-hover-border-color) 0%,
            transparent calc(100% * var(--exio-hover-border-scale))
          ) 9 / var(--exio-border-width) / 0px stretch`,g=y?"":`
        background-image: radial-gradient(
          calc(
            ${Math.max(x,p)}px *
            var(--exio-hover-background-scale)
          ) at ${d}px ${f}px,
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

        --exio-mouse-x: ${d}px;
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
    `};o();function r(d){const{x:f,y:x,width:p,height:k}=we(t,d);o(f,x,p,k),t.addEventListener("mousemove",r)}t.addEventListener("mouseenter",r);const i=()=>{t.classList.add(`${n.id}-active`)},s=()=>{t.classList.remove(`${n.id}-active`)};return e.disableClicking||(t.addEventListener("touchstart",i),window.addEventListener("touchend",s),t.addEventListener("mousedown",i),window.addEventListener("mouseup",s)),h(t.remove,n.remove)}function M(t){const e=z(t),n=v(t);return n.innerHTML=`
    .${n.id} {
      user-select: none;
    }
  `,h(e.destroy,n.remove)}function O(t){const e=z(t,{borderStyle:"hover",disableClicking:!0}),n=v(t);return n.innerHTML=`
    .${n.id} {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0px;
    }
  `,h(e.destroy,n.remove)}function Ce(t){const e=z(t,{borderStyle:"static"}),n=v(t);n.innerHTML=`
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
  `,h(e.destroy,n.remove,o.remove)}function qe(t){const e=v(t);return e.innerHTML=`
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
  `,h(t.remove)}function Ee(t){const e=v(t);return e.innerHTML=`
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
  `,h(t.remove)}function He(t){const e=v(t);return e.innerHTML=`
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
  `,h(t.remove)}const oe=t=>{const e=v(t);return e.innerHTML=`
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
  `,h(t.remove)};function Me(t){const e=z(t),n=v(t);n.innerHTML=`
    .${n.id} {
      user-select: none;
    }
  `;const o=i=>{t.style.setProperty("transform","none","important"),t.getBoundingClientRect(),t.style.removeProperty("transform"),i.preventDefault()},r=i=>{};return t.addEventListener("mousedown",o),t.addEventListener("touchstart",o),t.addEventListener("mouseup",r),t.addEventListener("touchend",r),h(e.destroy,n.remove)}function Se(t){let e,n,o,r,i,s,d,f,x,p,k,b,y,S,g,V,_,I,X,B,Y,D,T,Z,w,L,J,C,K,A,$,q,E,H,R,Q;return{c(){e=a("div"),n=a("div"),o=a("button"),o.textContent="Default Button",r=m(),i=a("button"),i.textContent="Default Button",s=m(),d=a("div"),f=a("button"),f.textContent="Card Button",x=m(),p=a("button"),p.textContent="Card Button",k=m(),b=a("div"),y=a("button"),y.textContent="send",S=m(),g=a("button"),g.textContent="send",V=m(),_=a("div"),I=a("div"),I.textContent="Default Card",X=m(),B=a("div"),B.textContent="Default Card",Y=m(),D=a("div"),T=a("input"),Z=m(),w=a("div"),L=a("div"),L.textContent="Animated Card",J=m(),C=a("div"),C.textContent="Animated Card",K=m(),A=a("div"),$=a("select"),q=a("option"),q.textContent="Option 1",E=a("option"),E.textContent="Option 2",H=a("option"),H.textContent="Option 3",c(o,"class","gray svelte-1h6ktq"),c(i,"class","blue svelte-1h6ktq"),c(n,"class","block svelte-1h6ktq"),c(f,"class","card gray svelte-1h6ktq"),c(p,"class","card blue svelte-1h6ktq"),c(d,"class","block svelte-1h6ktq"),c(y,"class","gray svelte-1h6ktq"),c(g,"class","blue svelte-1h6ktq"),c(b,"class","block svelte-1h6ktq"),c(I,"class","card gray svelte-1h6ktq"),c(B,"class","card blue svelte-1h6ktq"),c(_,"class","block svelte-1h6ktq"),c(T,"class","blue svelte-1h6ktq"),c(T,"type","checkbox"),c(D,"class","block svelte-1h6ktq"),c(L,"class","card gray svelte-1h6ktq"),c(C,"class","card blue svelte-1h6ktq"),c(w,"class","block svelte-1h6ktq"),q.__value="1",q.value=q.__value,E.__value="2",E.value=E.__value,H.__value="3",H.value=H.__value,c($,"class","gray svelte-1h6ktq"),c(A,"class","block svelte-1h6ktq"),ce(e,"transform-origin","center top")},m(j,ie){N(j,e,ie),l(e,n),l(n,o),l(n,r),l(n,i),l(e,s),l(e,d),l(d,f),l(d,x),l(d,p),l(e,k),l(e,b),l(b,y),l(b,S),l(b,g),l(e,V),l(e,_),l(_,I),l(_,X),l(_,B),l(e,Y),l(e,D),l(D,T),l(e,Z),l(e,w),l(w,L),l(w,J),l(w,C),l(e,K),l(e,A),l(A,$),l($,q),l($,E),l($,H),R||(Q=[u(M.call(null,o)),u(M.call(null,i)),u(M.call(null,f)),u(M.call(null,p)),u(M.call(null,y)),u(oe.call(null,y)),u(M.call(null,g)),u(oe.call(null,g)),u(O.call(null,I)),u(O.call(null,B)),u(Ce.call(null,T)),u(O.call(null,L)),u(qe.call(null,L)),u(O.call(null,C)),u(Ee.call(null,C)),u(Me.call(null,$)),u(He.call(null,e))],R=!0)},d(j){j&&W(e),R=!1,ue(Q)}}}function Ie(t){let e,n,o,r=Se();return{c(){e=a("div"),r&&r.c()},m(i,s){N(i,e,s),r&&r.m(e,null),n||(o=u(Le.call(null,e)),n=!0)},p:F,i:F,o:F,d(i){i&&W(e),r&&r.d(),n=!1,o()}}}class Be extends G{constructor(e){super();ee(this,e,null,Ie,te,{})}}function re(t){let e,n;return e=new Be({}),{c(){de(e.$$.fragment)},m(o,r){fe(e,o,r),n=!0},i(o){n||(P(e.$$.fragment,o),n=!0)},o(o){U(e.$$.fragment,o),n=!1},d(o){me(e,o)}}}function Te(t){let e,n,o=!t[0]&&re();return{c(){o&&o.c(),e=ve()},m(r,i){o&&o.m(r,i),N(r,e,i),n=!0},p(r,[i]){r[0]?o&&(xe(),U(o,1,1,()=>{o=null}),pe()):o?i&1&&P(o,1):(o=re(),o.c(),P(o,1),o.m(e.parentNode,e))},i(r){n||(P(o),n=!0)},o(r){U(o),n=!1},d(r){o&&o.d(r),r&&W(e)}}}function De(t,e,n){let o;return he(t,be,r=>n(0,o=r)),[o]}class Ae extends G{constructor(e){super();ee(this,e,De,Te,te,{})}}new Ae({target:document.getElementById("app")});
