import{y as mt,$ as pt,I as vt,S as rt,i as it,s as lt,e as a,a as Y,b as f,n as Z,d as J,c as v,f as d,g as at,h as l,r as ht,j as xt,m as yt,t as F,k as K,l as bt,o as gt,p as kt,q as $t,u as _t,v as wt}from"./vendor.8c4ab5ad.js";const Lt=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}};Lt();const Ct="modulepreload",st={},Et="/exio/",qt=function(t,n){return!n||n.length===0?t():Promise.all(n.map(o=>{if(o=`${Et}${o}`,o in st)return;st[o]=!0;const r=o.endsWith(".css"),i=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${i}`))return;const s=document.createElement("link");if(s.rel=r?"stylesheet":Ct,r||(s.as="script",s.crossOrigin=""),s.href=o,document.head.appendChild(s),r)return new Promise((u,m)=>{s.addEventListener("load",u),s.addEventListener("error",m)})})).then(()=>t())};mt("en",()=>qt(()=>import("./en.9805afb4.js"),[]));pt({fallbackLocale:"en",initialLocale:vt()});function St(e=10){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let n="";for(let o=0;o<e;o++){const r=Math.floor(Math.random()*t.length);n+=t.substring(r,r+1)}return n}function k(...e){return{destroy(){e.forEach(t=>{try{t()}catch{}})}}}function h(e){const t=St(),n=document.getElementById(t)||document.createElement("style");return n.id=t,e.classList.add(t),document.head.appendChild(n),n}function Ht(e,t){const{left:n,top:o,width:r,height:i}=e.getBoundingClientRect(),{clientX:s,clientY:u}=t,[m,p]=[s-n,u-o];return{x:m,y:p,width:r,height:i}}function Mt(e){const t=h(e);return t.innerHTML=`
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
  `,k(e.remove,t.remove)}function N(e,t={borderStyle:"reactive",disableClicking:!1}){const n=h(e),o=(u=0,m=0,p=0,c=0)=>{const $=`calc(
      ${Math.max(p,c)}px * var(--exio-hover-border-scale)
    )`,x=t.borderStyle==="static",y=t.borderStyle==="hover",w=x||y?"border: var(--exio-border-width) solid var(--exio-hover-border-color)":`border-image: radial-gradient(
            ${$} ${$} at var(--exio-mouse-x) var(--exio-mouse-y),
            var(--exio-hover-border-color) 0%,
            transparent calc(100% * var(--exio-hover-border-scale))
          ) 9 / var(--exio-border-width) / 0px stretch`,b=y?"":`
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
        ${b};
        transition: transform var(--exio-transition-duration);
      }
      .${n.id}.${n.id}-active {
        filter: brightness(0.8);
        transition: none;
        transform: scale(var(--exio-scale-size));
      }
    `};o();function r(u){const{x:m,y:p,width:c,height:$}=Ht(e,u);o(m,p,c,$),e.addEventListener("mousemove",r)}e.addEventListener("mouseenter",r);const i=()=>{e.classList.add(`${n.id}-active`)},s=()=>{e.classList.remove(`${n.id}-active`)};return t.disableClicking||(e.addEventListener("touchstart",i),window.addEventListener("touchend",s),e.addEventListener("mousedown",i),window.addEventListener("mouseup",s)),k(e.remove,n.remove)}function A(e){const t=N(e),n=h(e);return n.innerHTML=`
    .${n.id} {
      user-select: none;
    }
  `,k(t.destroy,n.remove)}function W(e){const t=N(e,{borderStyle:"hover",disableClicking:!0}),n=h(e);return n.innerHTML=`
    .${n.id} {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0px;
    }
  `,k(t.destroy,n.remove)}function It(e){const t=N(e,{borderStyle:"static"}),n=h(e);n.innerHTML=`
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
  `,k(t.destroy,n.remove,o.remove)}function Pt(e){const t=h(e);return t.innerHTML=`
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
  `,k(e.remove)}function Tt(e){const t=h(e);return t.innerHTML=`
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
  `,k(e.remove)}function zt(e){const t=h(e);return t.innerHTML=`
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
  `,k(e.remove)}const ct=e=>{const t=h(e);return t.innerHTML=`
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
  `,k(e.remove)};function dt(e){const t=N(e),n=h(e);n.innerHTML=`
    .${n.id} {
      user-select: none;
    }
  `;const o=document.createElement("div"),r=h(o);let i=e.getBoundingClientRect(),s="";const u=c=>{s=e.style.getPropertyValue("transform"),e.style.setProperty("transform","none","important"),i=e.getBoundingClientRect(),c==null||c.preventDefault()};o.tabIndex=0;const m=[],p=()=>{e.style.setProperty("transform",s,"important");const c=getComputedStyle(e),$=c.getPropertyValue("--exio-transition-duration"),x=c.getPropertyValue("color"),y=c.getPropertyValue("background-color"),w=c.getPropertyValue("font-family"),b=c.getPropertyValue("font-size"),O=c.getPropertyValue("padding");r.innerHTML=`
      .${r.id} {
        position: fixed;
        top: ${i.bottom}px;
        left: ${i.left}px;
        width: ${i.width}px;
        background-color: ${y};
        transition: opacity ${$};
        color: ${x};
        font-family: ${w};
        font-size: ${b};
        padding: ${O};
        padding-left: 0px;
        padding-right: 0px;
        box-size: border-box;
        opacity: 0;
      }
      .${r.id}:focus {
        opacity: 1;
        outline: none;
      }
    `,o.innerHTML="",setTimeout(()=>{e.childNodes.forEach((_,L)=>{const g=document.createElement("div");g.style.padding=O,g.style.boxSizing="border-box",g.style.cursor="default",g.textContent=_.textContent,m.push(N(g)),o.appendChild(g),g.addEventListener("click",()=>{e.selectedIndex=L,o.blur()})})},0),o.focus()};return p(),document.body.appendChild(o),e.addEventListener("mousedown",u),e.addEventListener("touchstart",u),window.addEventListener("resize",c=>{u(),p()}),e.addEventListener("mouseup",p),e.addEventListener("touchend",p),k(t.destroy,n.remove,o.remove,r.remove,()=>{m.forEach(c=>c.destroy())})}function Bt(e){let t,n,o,r,i,s,u,m,p,c,$,x,y,w,b,O,_,L,g,V,Q,j,R,G,S,H,tt,M,et,C,E,I,P,T,ot,q,z,B,D,U,nt;return{c(){t=a("div"),n=a("div"),o=a("button"),o.textContent="Default Button",r=v(),i=a("button"),i.textContent="Default Button",s=v(),u=a("div"),m=a("button"),m.textContent="Card Button",p=v(),c=a("button"),c.textContent="Card Button",$=v(),x=a("div"),y=a("button"),y.textContent="send",w=v(),b=a("button"),b.textContent="send",O=v(),_=a("div"),L=a("div"),L.textContent="Default Card",g=v(),V=a("div"),V.textContent="Default Card",Q=v(),j=a("div"),R=a("input"),G=v(),S=a("div"),H=a("div"),H.textContent="Animated Card",tt=v(),M=a("div"),M.textContent="Animated Card",et=v(),C=a("div"),E=a("select"),I=a("option"),I.textContent="Option 1",P=a("option"),P.textContent="Option 2",T=a("option"),T.textContent="Option 3",ot=v(),q=a("select"),z=a("option"),z.textContent="Option 1",B=a("option"),B.textContent="Option 2",D=a("option"),D.textContent="Option 3",d(o,"class","gray svelte-1h6ktq"),d(i,"class","blue svelte-1h6ktq"),d(n,"class","block svelte-1h6ktq"),d(m,"class","card gray svelte-1h6ktq"),d(c,"class","card blue svelte-1h6ktq"),d(u,"class","block svelte-1h6ktq"),d(y,"class","gray svelte-1h6ktq"),d(b,"class","blue svelte-1h6ktq"),d(x,"class","block svelte-1h6ktq"),d(L,"class","card gray svelte-1h6ktq"),d(V,"class","card blue svelte-1h6ktq"),d(_,"class","block svelte-1h6ktq"),d(R,"class","blue svelte-1h6ktq"),d(R,"type","checkbox"),d(j,"class","block svelte-1h6ktq"),d(H,"class","card gray svelte-1h6ktq"),d(M,"class","card blue svelte-1h6ktq"),d(S,"class","block svelte-1h6ktq"),I.__value="1",I.value=I.__value,P.__value="2",P.value=P.__value,T.__value="3",T.value=T.__value,d(E,"class","gray svelte-1h6ktq"),z.__value="1",z.value=z.__value,B.__value="2",B.value=B.__value,D.__value="3",D.value=D.__value,d(q,"class","blue svelte-1h6ktq"),d(C,"class","block svelte-1h6ktq"),at(C,"margin-bottom","150px"),at(t,"transform-origin","center top")},m(X,ft){Y(X,t,ft),l(t,n),l(n,o),l(n,r),l(n,i),l(t,s),l(t,u),l(u,m),l(u,p),l(u,c),l(t,$),l(t,x),l(x,y),l(x,w),l(x,b),l(t,O),l(t,_),l(_,L),l(_,g),l(_,V),l(t,Q),l(t,j),l(j,R),l(t,G),l(t,S),l(S,H),l(S,tt),l(S,M),l(t,et),l(t,C),l(C,E),l(E,I),l(E,P),l(E,T),l(C,ot),l(C,q),l(q,z),l(q,B),l(q,D),U||(nt=[f(A.call(null,o)),f(A.call(null,i)),f(A.call(null,m)),f(A.call(null,c)),f(A.call(null,y)),f(ct.call(null,y)),f(A.call(null,b)),f(ct.call(null,b)),f(W.call(null,L)),f(W.call(null,V)),f(It.call(null,R)),f(W.call(null,H)),f(Pt.call(null,H)),f(W.call(null,M)),f(Tt.call(null,M)),f(dt.call(null,E)),f(dt.call(null,q)),f(zt.call(null,t))],U=!0)},d(X){X&&J(t),U=!1,ht(nt)}}}function Dt(e){let t,n,o,r=Bt();return{c(){t=a("div"),r&&r.c()},m(i,s){Y(i,t,s),r&&r.m(t,null),n||(o=f(Mt.call(null,t)),n=!0)},p:Z,i:Z,o:Z,d(i){i&&J(t),r&&r.d(),n=!1,o()}}}class At extends rt{constructor(t){super();it(this,t,null,Dt,lt,{})}}function ut(e){let t,n;return t=new At({}),{c(){xt(t.$$.fragment)},m(o,r){yt(t,o,r),n=!0},i(o){n||(F(t.$$.fragment,o),n=!0)},o(o){K(t.$$.fragment,o),n=!1},d(o){bt(t,o)}}}function Ot(e){let t,n,o=!e[0]&&ut();return{c(){o&&o.c(),t=gt()},m(r,i){o&&o.m(r,i),Y(r,t,i),n=!0},p(r,[i]){r[0]?o&&(_t(),K(o,1,1,()=>{o=null}),kt()):o?i&1&&F(o,1):(o=ut(),o.c(),F(o,1),o.m(t.parentNode,t))},i(r){n||(F(o),n=!0)},o(r){K(o),n=!1},d(r){o&&o.d(r),r&&J(t)}}}function Vt(e,t,n){let o;return $t(e,wt,r=>n(0,o=r)),[o]}class Rt extends rt{constructor(t){super();it(this,t,Vt,Ot,lt,{})}}new Rt({target:document.getElementById("app")});
