import{y as at,$ as lt,I as st,S as G,i as tt,s as et,e as s,a as j,b as f,n as F,d as W,c as b,f as d,g as ct,h as a,r as dt,j as ut,m as ft,t as V,k as U,l as mt,o as pt,p as vt,q as ht,u as xt,v as yt}from"./vendor.8c4ab5ad.js";const bt=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}};bt();const gt="modulepreload",ot={},$t="/exio/",kt=function(t,n){return!n||n.length===0?t():Promise.all(n.map(o=>{if(o=`${$t}${o}`,o in ot)return;ot[o]=!0;const r=o.endsWith(".css"),i=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${i}`))return;const l=document.createElement("link");if(l.rel=r?"stylesheet":gt,r||(l.as="script",l.crossOrigin=""),l.href=o,document.head.appendChild(l),r)return new Promise((u,m)=>{l.addEventListener("load",u),l.addEventListener("error",m)})})).then(()=>t())};at("en",()=>kt(()=>import("./en.9805afb4.js"),[]));lt({fallbackLocale:"en",initialLocale:st()});function _t(e=10){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let n="";for(let o=0;o<e;o++){const r=Math.floor(Math.random()*t.length);n+=t.substring(r,r+1)}return n}function $(...e){return{destroy(){e.forEach(t=>{try{t()}catch{}})}}}function h(e){const t=_t(),n=document.getElementById(t)||document.createElement("style");return n.id=t,e.classList.add(t),document.head.appendChild(n),n}function wt(e,t){const{left:n,top:o,width:r,height:i}=e.getBoundingClientRect(),{clientX:l,clientY:u}=t,[m,p]=[l-n,u-o];return{x:m,y:p,width:r,height:i}}function Lt(e){const t=h(e);return t.innerHTML=`
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
  `,$(e.remove,t.remove)}function z(e,t={borderStyle:"reactive",disableClicking:!1}){const n=h(e),o=(u=0,m=0,p=0,c=0)=>{const k=`calc(
      ${Math.max(p,c)}px * var(--exio-hover-border-scale)
    )`,x=t.borderStyle==="static",y=t.borderStyle==="hover",w=x||y?"border: var(--exio-border-width) solid var(--exio-hover-border-color)":`border-image: radial-gradient(
            ${k} ${k} at var(--exio-mouse-x) var(--exio-mouse-y),
            var(--exio-hover-border-color) 0%,
            transparent calc(100% * var(--exio-hover-border-scale))
          ) 9 / var(--exio-border-width) / 0px stretch`,g=y?"":`
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
        ${x?w:""};

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
        ${g};
        transition: transform var(--exio-transition-duration);
      }
      .${n.id}.${n.id}-active {
        filter: brightness(0.8);
        transition: none;
        transform: scale(var(--exio-scale-size));
      }
    `};o();function r(u){const{x:m,y:p,width:c,height:k}=wt(e,u);o(m,p,c,k),e.addEventListener("mousemove",r)}e.addEventListener("mouseenter",r);const i=()=>{e.classList.add(`${n.id}-active`)},l=()=>{e.classList.remove(`${n.id}-active`)};return t.disableClicking||(e.addEventListener("touchstart",i),window.addEventListener("touchend",l),e.addEventListener("mousedown",i),window.addEventListener("mouseup",l)),$(e.remove,n.remove)}function P(e){const t=z(e),n=h(e);return n.innerHTML=`
    .${n.id} {
      user-select: none;
    }
  `,$(t.destroy,n.remove)}function R(e){const t=z(e,{borderStyle:"hover",disableClicking:!0}),n=h(e);return n.innerHTML=`
    .${n.id} {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0px;
    }
  `,$(t.destroy,n.remove)}function Ct(e){const t=z(e,{borderStyle:"static"}),n=h(e);n.innerHTML=`
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
  `;const o=h(e);return o.innerHTML=`
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
  `,$(t.destroy,n.remove,o.remove)}function Et(e){const t=h(e);return t.innerHTML=`
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
  `,$(e.remove)}function qt(e){const t=h(e);return t.innerHTML=`
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
  `,$(e.remove)}function St(e){const t=h(e);return t.innerHTML=`
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
  `,$(e.remove)}const nt=e=>{const t=h(e);return t.innerHTML=`
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
  `,$(e.remove)};function Ht(e){const t=z(e),n=h(e);n.innerHTML=`
    .${n.id} {
      user-select: none;
    }
  `;const o=document.createElement("div"),r=h(o);let i=e.getBoundingClientRect(),l="";const u=c=>{l=e.style.getPropertyValue("transform"),e.style.setProperty("transform","none","important"),i=e.getBoundingClientRect(),c.preventDefault()};o.tabIndex=0;const m=[],p=()=>{e.style.setProperty("transform",l,"important");const c=getComputedStyle(e),k=c.getPropertyValue("--exio-transition-duration"),x=c.getPropertyValue("color"),y=c.getPropertyValue("background-color"),w=c.getPropertyValue("font-family"),g=c.getPropertyValue("font-size"),I=c.getPropertyValue("padding");r.innerHTML=`
      .${r.id} {
        position: fixed;
        top: ${i.bottom}px;
        left: ${i.left}px;
        width: ${i.width}px;
        background-color: ${y};
        transition: opacity ${k};
        color: ${x};
        font-family: ${w};
        font-size: ${g};
        padding: ${I};
        padding-left: 0px;
        padding-right: 0px;
        box-size: border-box;
        opacity: 0;
      }
      .${r.id}:focus {
        opacity: 1;
        outline: none;
      }
    `,o.innerHTML="",setTimeout(()=>{e.childNodes.forEach(_=>{const v=document.createElement("div");v.style.padding=I,v.style.boxSizing="border-box",v.style.cursor="default",v.textContent=_.textContent,m.push(z(v)),o.appendChild(v)})},0),o.focus()};return p(),document.body.appendChild(o),e.addEventListener("mousedown",u),e.addEventListener("touchstart",u),e.addEventListener("mouseup",p),e.addEventListener("touchend",p),$(t.destroy,n.remove,o.remove,r.remove,()=>{m.forEach(c=>c.destroy())})}function Mt(e){let t,n,o,r,i,l,u,m,p,c,k,x,y,w,g,I,_,v,X,T,Y,D,B,Z,C,E,J,q,K,A,L,S,H,M,N,Q;return{c(){t=s("div"),n=s("div"),o=s("button"),o.textContent="Default Button",r=b(),i=s("button"),i.textContent="Default Button",l=b(),u=s("div"),m=s("button"),m.textContent="Card Button",p=b(),c=s("button"),c.textContent="Card Button",k=b(),x=s("div"),y=s("button"),y.textContent="send",w=b(),g=s("button"),g.textContent="send",I=b(),_=s("div"),v=s("div"),v.textContent="Default Card",X=b(),T=s("div"),T.textContent="Default Card",Y=b(),D=s("div"),B=s("input"),Z=b(),C=s("div"),E=s("div"),E.textContent="Animated Card",J=b(),q=s("div"),q.textContent="Animated Card",K=b(),A=s("div"),L=s("select"),S=s("option"),S.textContent="Option 1",H=s("option"),H.textContent="Option 2",M=s("option"),M.textContent="Option 3",d(o,"class","gray svelte-1h6ktq"),d(i,"class","blue svelte-1h6ktq"),d(n,"class","block svelte-1h6ktq"),d(m,"class","card gray svelte-1h6ktq"),d(c,"class","card blue svelte-1h6ktq"),d(u,"class","block svelte-1h6ktq"),d(y,"class","gray svelte-1h6ktq"),d(g,"class","blue svelte-1h6ktq"),d(x,"class","block svelte-1h6ktq"),d(v,"class","card gray svelte-1h6ktq"),d(T,"class","card blue svelte-1h6ktq"),d(_,"class","block svelte-1h6ktq"),d(B,"class","blue svelte-1h6ktq"),d(B,"type","checkbox"),d(D,"class","block svelte-1h6ktq"),d(E,"class","card gray svelte-1h6ktq"),d(q,"class","card blue svelte-1h6ktq"),d(C,"class","block svelte-1h6ktq"),S.__value="1",S.value=S.__value,H.__value="2",H.value=H.__value,M.__value="3",M.value=M.__value,d(L,"class","gray svelte-1h6ktq"),d(A,"class","block svelte-1h6ktq"),ct(t,"transform-origin","center top")},m(O,it){j(O,t,it),a(t,n),a(n,o),a(n,r),a(n,i),a(t,l),a(t,u),a(u,m),a(u,p),a(u,c),a(t,k),a(t,x),a(x,y),a(x,w),a(x,g),a(t,I),a(t,_),a(_,v),a(_,X),a(_,T),a(t,Y),a(t,D),a(D,B),a(t,Z),a(t,C),a(C,E),a(C,J),a(C,q),a(t,K),a(t,A),a(A,L),a(L,S),a(L,H),a(L,M),N||(Q=[f(P.call(null,o)),f(P.call(null,i)),f(P.call(null,m)),f(P.call(null,c)),f(P.call(null,y)),f(nt.call(null,y)),f(P.call(null,g)),f(nt.call(null,g)),f(R.call(null,v)),f(R.call(null,T)),f(Ct.call(null,B)),f(R.call(null,E)),f(Et.call(null,E)),f(R.call(null,q)),f(qt.call(null,q)),f(Ht.call(null,L)),f(St.call(null,t))],N=!0)},d(O){O&&W(t),N=!1,dt(Q)}}}function Pt(e){let t,n,o,r=Mt();return{c(){t=s("div"),r&&r.c()},m(i,l){j(i,t,l),r&&r.m(t,null),n||(o=f(Lt.call(null,t)),n=!0)},p:F,i:F,o:F,d(i){i&&W(t),r&&r.d(),n=!1,o()}}}class It extends G{constructor(t){super();tt(this,t,null,Pt,et,{})}}function rt(e){let t,n;return t=new It({}),{c(){ut(t.$$.fragment)},m(o,r){ft(t,o,r),n=!0},i(o){n||(V(t.$$.fragment,o),n=!0)},o(o){U(t.$$.fragment,o),n=!1},d(o){mt(t,o)}}}function Tt(e){let t,n,o=!e[0]&&rt();return{c(){o&&o.c(),t=pt()},m(r,i){o&&o.m(r,i),j(r,t,i),n=!0},p(r,[i]){r[0]?o&&(xt(),U(o,1,1,()=>{o=null}),vt()):o?i&1&&V(o,1):(o=rt(),o.c(),V(o,1),o.m(t.parentNode,t))},i(r){n||(V(o),n=!0)},o(r){U(o),n=!1},d(r){o&&o.d(r),r&&W(t)}}}function Bt(e,t,n){let o;return ht(e,yt,r=>n(0,o=r)),[o]}class zt extends G{constructor(t){super();tt(this,t,Bt,Tt,et,{})}}new zt({target:document.getElementById("app")});
