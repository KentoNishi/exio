import{y as lt,$ as at,I as st,S as G,i as tt,s as et,e as s,a as F,b as f,n as W,d as U,c as y,f as d,g as ct,h as l,r as dt,j as ut,m as ft,t as R,k as X,l as mt,o as pt,p as vt,q as ht,u as xt,v as yt}from"./vendor.8c4ab5ad.js";const bt=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}};bt();const gt="modulepreload",ot={},kt="/exio/",$t=function(t,n){return!n||n.length===0?t():Promise.all(n.map(o=>{if(o=`${kt}${o}`,o in ot)return;ot[o]=!0;const r=o.endsWith(".css"),i=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${i}`))return;const a=document.createElement("link");if(a.rel=r?"stylesheet":gt,r||(a.as="script",a.crossOrigin=""),a.href=o,document.head.appendChild(a),r)return new Promise((u,m)=>{a.addEventListener("load",u),a.addEventListener("error",m)})})).then(()=>t())};lt("en",()=>$t(()=>import("./en.9805afb4.js"),[]));at({fallbackLocale:"en",initialLocale:st()});function _t(e=10){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let n="";for(let o=0;o<e;o++){const r=Math.floor(Math.random()*t.length);n+=t.substring(r,r+1)}return n}function k(...e){return{destroy(){e.forEach(t=>{try{t()}catch{}})}}}function v(e){const t=_t(),n=document.getElementById(t)||document.createElement("style");return n.id=t,e.classList.add(t),document.head.appendChild(n),n}function wt(e,t){const{left:n,top:o,width:r,height:i}=e.getBoundingClientRect(),{clientX:a,clientY:u}=t,[m,p]=[a-n,u-o];return{x:m,y:p,width:r,height:i}}function Lt(e){const t=v(e);return t.innerHTML=`
    .${t.id} {
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
  `,k(e.remove,t.remove)}function D(e,t={borderStyle:"reactive",disableClicking:!1}){const n=v(e),o=(u=0,m=0,p=0,c=0)=>{const $=`calc(
      ${Math.max(p,c)}px * var(--exio-hover-border-scale)
    )`,h=t.borderStyle==="static",x=t.borderStyle==="hover",w=h||x?"border: var(--exio-border-width) solid var(--exio-hover-border-color)":`border-image: radial-gradient(
            ${$} ${$} at var(--exio-mouse-x) var(--exio-mouse-y),
            var(--exio-hover-border-color) 0%,
            transparent calc(100% * var(--exio-hover-border-scale))
          ) 9 / var(--exio-border-width) / 0px stretch`,b=x?"":`
        background-image: radial-gradient(
          calc(
            ${Math.max(p,c)}px *
            var(--exio-hover-background-scale)
          ) at ${u}px ${m}px,
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
        ${h?w:""};

        --exio-mouse-x: ${u}px;
        --exio-mouse-y: ${m}px;
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
        ${w};
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
    `};o();function r(u){const{x:m,y:p,width:c,height:$}=wt(e,u);o(m,p,c,$),e.addEventListener("mousemove",r)}e.addEventListener("mouseenter",r);const i=()=>{e.classList.add(`${n.id}-active`)},a=()=>{e.classList.remove(`${n.id}-active`)};return t.disableClicking||(e.addEventListener("touchstart",i),window.addEventListener("touchend",a),e.addEventListener("mousedown",i),window.addEventListener("mouseup",a)),k(e.remove,n.remove)}function P(e){const t=D(e),n=v(e);return n.innerHTML=`
    .${n.id} {
      user-select: none;
    }
  `,k(t.destroy,n.remove)}function N(e){const t=D(e,{borderStyle:"hover",disableClicking:!0}),n=v(e);return n.innerHTML=`
    .${n.id} {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0px;
    }
  `,k(t.destroy,n.remove)}function Ct(e){const t=D(e,{borderStyle:"static"}),n=v(e);n.innerHTML=`
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
  `;const o=v(e);return o.innerHTML=`
    .${o.id}::after {
      content: '';
      position: absolute;
      width: ${e.clientHeight}px;
      height: ${e.clientHeight}px;
      border-radius: 100%;
      transform: translateX(calc(
        ${-e.clientWidth/2}px + ${e.clientHeight/2}px
      )) scale(0.7);
      background-color: white;
      transition: transform var(--exio-transition-duration);
    }
    .${o.id}:checked::after {
      transform: translateX(calc(
        ${e.clientWidth/2}px - ${e.clientHeight/2}px
      )) scale(0.7);
    }
  `,k(t.destroy,n.remove,o.remove)}function Et(e){const t=v(e);return t.innerHTML=`
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
    .${t.id} {
      animation: exio-fly-in;
      animation-duration: 0.6s;
      animation-fill-mode: forwards;
      opacity: 0;
    }
  `,k(e.remove)}function qt(e){const t=v(e);return t.innerHTML=`
    @keyframes exio-fade-in {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    .${t.id} {
      animation: exio-fade-in;
      animation-duration: 0.6s;
      animation-fill-mode: forwards;
      opacity: 0;
    }
  `,k(e.remove)}function St(e){const t=v(e);return t.innerHTML=`
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
    .${t.id} {
      animation: exio-zoom-in;
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
      opacity: 0;
    }
  `,k(e.remove)}const nt=e=>{const t=v(e);return t.innerHTML=`
    @font-face {
      font-family: 'Exio Icons';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url('https://fonts.gstatic.com/s/materialicons/v126/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2') format('woff2');
    }
    .${t.id} {
      font-family: 'Exio Icons';
    }
  `,k(e.remove)};function Ht(e){const t=D(e),n=v(e);n.innerHTML=`
    .${n.id} {
      user-select: none;
    }
  `;const o=document.createElement("div"),r=v(o);let i=e.getBoundingClientRect(),a="";const u=c=>{a=e.style.getPropertyValue("transform"),e.style.setProperty("transform","none","important"),i=e.getBoundingClientRect(),c.preventDefault()};o.tabIndex=0;const m=[],p=()=>{e.style.setProperty("transform",a,"important");const c=getComputedStyle(e),$=c.getPropertyValue("--exio-transition-duration"),h=c.getPropertyValue("color"),x=c.getPropertyValue("background-color"),w=c.getPropertyValue("font-family"),b=c.getPropertyValue("font-size"),T=c.getPropertyValue("padding");r.innerHTML=`
      .${r.id} {
        position: fixed;
        top: ${i.bottom}px;
        left: ${i.left}px;
        width: ${i.width}px;
        background-color: ${x};
        transition: opacity ${$};
        color: ${h};
        font-family: ${w};
        font-size: ${b};
        padding: ${T};
        padding-left: 0px;
        padding-right: 0px;
        box-size: border-box;
        opacity: 0;
      }
      .${r.id}:focus {
        opacity: 1;
        outline: none;
      }
    `,o.innerHTML="",setTimeout(()=>{e.childNodes.forEach((_,L)=>{const g=document.createElement("div");g.style.padding=T,g.style.boxSizing="border-box",g.style.cursor="default",g.textContent=_.textContent,m.push(D(g)),o.appendChild(g),g.addEventListener("click",()=>{e.selectedIndex=L,o.blur()})})},0),o.focus()};return p(),document.body.appendChild(o),e.addEventListener("mousedown",u),e.addEventListener("touchstart",u),e.addEventListener("mouseup",p),e.addEventListener("touchend",p),k(t.destroy,n.remove,o.remove,r.remove,()=>{m.forEach(c=>c.destroy())})}function Mt(e){let t,n,o,r,i,a,u,m,p,c,$,h,x,w,b,T,_,L,g,B,Y,A,z,Z,E,q,J,S,K,V,C,H,M,I,O,Q;return{c(){t=s("div"),n=s("div"),o=s("button"),o.textContent="Default Button",r=y(),i=s("button"),i.textContent="Default Button",a=y(),u=s("div"),m=s("button"),m.textContent="Card Button",p=y(),c=s("button"),c.textContent="Card Button",$=y(),h=s("div"),x=s("button"),x.textContent="send",w=y(),b=s("button"),b.textContent="send",T=y(),_=s("div"),L=s("div"),L.textContent="Default Card",g=y(),B=s("div"),B.textContent="Default Card",Y=y(),A=s("div"),z=s("input"),Z=y(),E=s("div"),q=s("div"),q.textContent="Animated Card",J=y(),S=s("div"),S.textContent="Animated Card",K=y(),V=s("div"),C=s("select"),H=s("option"),H.textContent="Option 1",M=s("option"),M.textContent="Option 2",I=s("option"),I.textContent="Option 3",d(o,"class","gray svelte-1h6ktq"),d(i,"class","blue svelte-1h6ktq"),d(n,"class","block svelte-1h6ktq"),d(m,"class","card gray svelte-1h6ktq"),d(c,"class","card blue svelte-1h6ktq"),d(u,"class","block svelte-1h6ktq"),d(x,"class","gray svelte-1h6ktq"),d(b,"class","blue svelte-1h6ktq"),d(h,"class","block svelte-1h6ktq"),d(L,"class","card gray svelte-1h6ktq"),d(B,"class","card blue svelte-1h6ktq"),d(_,"class","block svelte-1h6ktq"),d(z,"class","blue svelte-1h6ktq"),d(z,"type","checkbox"),d(A,"class","block svelte-1h6ktq"),d(q,"class","card gray svelte-1h6ktq"),d(S,"class","card blue svelte-1h6ktq"),d(E,"class","block svelte-1h6ktq"),H.__value="1",H.value=H.__value,M.__value="2",M.value=M.__value,I.__value="3",I.value=I.__value,d(C,"class","gray svelte-1h6ktq"),d(V,"class","block svelte-1h6ktq"),ct(t,"transform-origin","center top")},m(j,it){F(j,t,it),l(t,n),l(n,o),l(n,r),l(n,i),l(t,a),l(t,u),l(u,m),l(u,p),l(u,c),l(t,$),l(t,h),l(h,x),l(h,w),l(h,b),l(t,T),l(t,_),l(_,L),l(_,g),l(_,B),l(t,Y),l(t,A),l(A,z),l(t,Z),l(t,E),l(E,q),l(E,J),l(E,S),l(t,K),l(t,V),l(V,C),l(C,H),l(C,M),l(C,I),O||(Q=[f(P.call(null,o)),f(P.call(null,i)),f(P.call(null,m)),f(P.call(null,c)),f(P.call(null,x)),f(nt.call(null,x)),f(P.call(null,b)),f(nt.call(null,b)),f(N.call(null,L)),f(N.call(null,B)),f(Ct.call(null,z)),f(N.call(null,q)),f(Et.call(null,q)),f(N.call(null,S)),f(qt.call(null,S)),f(Ht.call(null,C)),f(St.call(null,t))],O=!0)},d(j){j&&U(t),O=!1,dt(Q)}}}function It(e){let t,n,o,r=Mt();return{c(){t=s("div"),r&&r.c()},m(i,a){F(i,t,a),r&&r.m(t,null),n||(o=f(Lt.call(null,t)),n=!0)},p:W,i:W,o:W,d(i){i&&U(t),r&&r.d(),n=!1,o()}}}class Pt extends G{constructor(t){super();tt(this,t,null,It,et,{})}}function rt(e){let t,n;return t=new Pt({}),{c(){ut(t.$$.fragment)},m(o,r){ft(t,o,r),n=!0},i(o){n||(R(t.$$.fragment,o),n=!0)},o(o){X(t.$$.fragment,o),n=!1},d(o){mt(t,o)}}}function Tt(e){let t,n,o=!e[0]&&rt();return{c(){o&&o.c(),t=pt()},m(r,i){o&&o.m(r,i),F(r,t,i),n=!0},p(r,[i]){r[0]?o&&(xt(),X(o,1,1,()=>{o=null}),vt()):o?i&1&&R(o,1):(o=rt(),o.c(),R(o,1),o.m(t.parentNode,t))},i(r){n||(R(o),n=!0)},o(r){X(o),n=!1},d(r){o&&o.d(r),r&&U(t)}}}function Bt(e,t,n){let o;return ht(e,yt,r=>n(0,o=r)),[o]}class zt extends G{constructor(t){super();tt(this,t,Bt,Tt,et,{})}}new zt({target:document.getElementById("app")});
