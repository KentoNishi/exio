import{y as wt,$ as Lt,I as Ct,S as bt,i as xt,s as ht,e as a,a as Z,b as u,n as rt,d as J,c as m,f as s,g as T,h as r,r as Et,j as qt,m as Ht,t as tt,k as lt,l as St,o as Mt,p as Tt,q as It,u as Pt,v as zt}from"./vendor.8c4ab5ad.js";const Bt=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}};Bt();const Dt="modulepreload",yt={},Ot="/exio/",Rt=function(t,n){return!n||n.length===0?t():Promise.all(n.map(o=>{if(o=`${Ot}${o}`,o in yt)return;yt[o]=!0;const i=o.endsWith(".css"),l=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${l}`))return;const c=document.createElement("link");if(c.rel=i?"stylesheet":Dt,i||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),i)return new Promise((f,p)=>{c.addEventListener("load",f),c.addEventListener("error",p)})})).then(()=>t())};wt("en",()=>Rt(()=>import("./en.9805afb4.js"),[]));Lt({fallbackLocale:"en",initialLocale:Ct()});function At(e=10){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let n="";for(let o=0;o<e;o++){const i=Math.floor(Math.random()*t.length);n+=t.substring(i,i+1)}return n}function y(...e){return{destroy(){e.forEach(t=>{try{t()}catch{}})}}}function b(e){const t=At(),n=document.getElementById(t)||document.createElement("style");return n.id=t,e.classList.add(t),document.head.appendChild(n),n}function Vt(e,t){const{left:n,top:o,width:i,height:l}=e.getBoundingClientRect(),{clientX:c,clientY:f}=t,[p,v]=[c-n,f-o];return{x:p,y:v,width:i,height:l}}function jt(e){const t=b(e);return t.innerHTML=`
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
  `,y(e.remove,t.remove)}function N(e,t={borderStyle:"reactive",disableClicking:!1}){const n=b(e),o=(f=0,p=0,v=0,d=0)=>{const w=`calc(
      ${Math.max(v,d)}px * var(--exio-hover-border-scale)
    )`,x=t.borderStyle==="static",h=t.borderStyle==="hover",E=x||h?"border: var(--exio-border-width) solid var(--exio-hover-border-color)":`border-image: radial-gradient(
            ${w} ${w} at var(--exio-mouse-x) var(--exio-mouse-y),
            var(--exio-hover-border-color) 0%,
            transparent calc(100% * var(--exio-hover-border-scale))
          ) 9 / var(--exio-border-width) / 0px stretch`,g=h?"":`
        background-image: radial-gradient(
          calc(
            ${Math.max(v,d)}px *
            var(--exio-hover-background-scale)
          ) at ${f}px ${p}px,
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
        ${x?E:""};

        --exio-mouse-x: ${f}px;
        --exio-mouse-y: ${p}px;
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
        ${E};
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
    `};o();function i(f){const{x:p,y:v,width:d,height:w}=Vt(e,f);o(p,v,d,w),e.addEventListener("mousemove",i)}e.addEventListener("mouseenter",i);const l=()=>{e.classList.add(`${n.id}-active`)},c=()=>{e.classList.remove(`${n.id}-active`)};return t.disableClicking||(e.addEventListener("touchstart",l),window.addEventListener("touchend",c),e.addEventListener("mousedown",l),window.addEventListener("mouseup",c)),y(e.remove,n.remove)}function F(e){const t=N(e),n=b(e);return n.innerHTML=`
    .${n.id} {
      user-select: none;
    }
  `,y(t.destroy,n.remove)}function et(e){const t=N(e,{borderStyle:"hover",disableClicking:!0}),n=b(e);return n.innerHTML=`
    .${n.id} {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0px;
    }
  `,y(t.destroy,n.remove)}function Nt(e){const t=N(e,{borderStyle:"static"}),n=b(e);n.innerHTML=`
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
      --exio-selected-indicator-color: white;
    }
    .${n.id}:not(:checked) {
      background-color: transparent;
    }
  `;const o=b(e);return o.innerHTML=`
    .${o.id}::after {
      content: '';
      position: absolute;
      width: ${e.clientHeight}px;
      height: ${e.clientHeight}px;
      border-radius: 100%;
      transform: translateX(calc(
        ${-e.clientWidth/2}px + ${e.clientHeight/2}px
      )) scale(0.7);
      background-color: var(--exio-selected-indicator-color);
      transition: transform var(--exio-transition-duration);
    }
    .${o.id}:checked::after {
      transform: translateX(calc(
        ${e.clientWidth/2}px - ${e.clientHeight/2}px
      )) scale(0.7);
    }
  `,y(t.destroy,n.remove,o.remove)}function Ft(e){const t=b(e);return t.innerHTML=`
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
  `,y(e.remove)}function Wt(e){const t=b(e);return t.innerHTML=`
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
  `,y(e.remove)}function Ut(e){const t=b(e);return t.innerHTML=`
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
  `,y(e.remove)}const gt=e=>{const t=b(e);return t.innerHTML=`
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
  `,y(e.remove,t.remove)};function $t(e){const t=N(e),n=b(e);n.innerHTML=`
    .${n.id} {
      user-select: none;
    }
  `;const o=document.createElement("div"),i=b(o);let l=e.getBoundingClientRect(),c="";const f=d=>{c=e.style.getPropertyValue("transform"),e.style.setProperty("transform","none","important"),l=e.getBoundingClientRect(),d==null||d.preventDefault()};o.tabIndex=0;const p=[],v=()=>{e.style.setProperty("transform",c,"important");const d=getComputedStyle(e),w=d.getPropertyValue("--exio-transition-duration"),x=d.getPropertyValue("color"),h=d.getPropertyValue("background-color"),E=d.getPropertyValue("font-family"),g=d.getPropertyValue("font-size"),W=d.getPropertyValue("padding");i.innerHTML=`
      .${i.id} {
        position: fixed;
        top: ${l.bottom}px;
        left: ${l.left}px;
        width: ${l.width}px;
        background-color: ${h};
        transition: opacity ${w};
        color: ${x};
        font-family: ${E};
        font-size: ${g};
        padding: ${W};
        padding-left: 0px;
        padding-right: 0px;
        box-size: border-box;
        opacity: 0;
        pointer-events: none;
        touch-action: none;
      }
      .${i.id}:focus {
        opacity: 1;
        outline: none;
        pointer-events: auto;
        touch-action: auto;
      }
    `,o.innerHTML="",setTimeout(()=>{e.childNodes.forEach((L,q)=>{const $=document.createElement("div");$.style.padding=W,$.style.boxSizing="border-box",$.style.cursor="default",$.textContent=L.textContent,p.push(N($)),o.appendChild($),$.addEventListener("click",()=>{e.selectedIndex=q,o.blur()})})},0),o.focus()};return v(),document.body.appendChild(o),e.addEventListener("mousedown",f),e.addEventListener("touchstart",f),window.addEventListener("resize",d=>{f(),v()}),e.addEventListener("mouseup",v),e.addEventListener("touchend",v),y(t.destroy,n.remove,o.remove,i.remove,()=>{p.forEach(d=>d.destroy())})}const _t=e=>{const t=N(e,{borderStyle:"static"}),n=b(e);n.innerHTML=`
    .${n.id} {
      -webkit-appearance: none;
      width: 20px;
      height: 20px;
      border-radius: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0px;

      --exio-border-width: 2px;
      --exio-transition-duration: 0.2s;
      --exio-selected-indicator-color: white;
    }
    .${n.id}:not(:checked) {
      background-color: transparent;
    }
  `;const o=b(e);return o.innerHTML=`
    .${o.id}::after {
      content: '';
      position: absolute;
      width: ${e.clientHeight}px;
      height: ${e.clientHeight}px;
      border-radius: 100%;
      transform: scale(0);
      background-color: var(--exio-selected-indicator-color);
      transition: transform var(--exio-transition-duration);
    }
    .${o.id}:checked::after {
      transform: scale(0.7);
    }
  `,y(t.destroy,n.remove,o.remove)};function Xt(e){let t,n,o,i,l,c,f,p,v,d,w,x,h,E,g,W,L,q,$,U,at,K,X,st,I,P,ct,z,dt,_,H,B,D,O,ut,S,R,A,V,ot,Y,k,j,ft,Q,pt,C,mt,G,nt,vt;return{c(){t=a("div"),n=a("div"),o=a("button"),o.textContent="Default Button",i=m(),l=a("button"),l.textContent="Default Button",c=m(),f=a("div"),p=a("button"),p.textContent="Card Button",v=m(),d=a("button"),d.textContent="Card Button",w=m(),x=a("div"),h=a("button"),h.textContent="send",E=m(),g=a("button"),g.textContent="send",W=m(),L=a("div"),q=a("div"),q.textContent="Default Card",$=m(),U=a("div"),U.textContent="Default Card",at=m(),K=a("div"),X=a("input"),st=m(),I=a("div"),P=a("div"),P.textContent="Animated Card",ct=m(),z=a("div"),z.textContent="Animated Card",dt=m(),_=a("div"),H=a("select"),B=a("option"),B.textContent="Option 1",D=a("option"),D.textContent="Option 2",O=a("option"),O.textContent="Option 3",ut=m(),S=a("select"),R=a("option"),R.textContent="Option 1",A=a("option"),A.textContent="Option 2",V=a("option"),V.textContent="Option 3",ot=m(),Y=a("div"),k=a("div"),j=a("input"),ft=m(),Q=a("label"),Q.textContent="Radio Option 1",pt=m(),C=a("input"),mt=m(),G=a("label"),G.textContent="Radio Option 2",s(o,"class","gray svelte-6bqts8"),s(l,"class","blue svelte-6bqts8"),s(n,"class","block svelte-6bqts8"),s(p,"class","card gray svelte-6bqts8"),s(d,"class","card blue svelte-6bqts8"),s(f,"class","block svelte-6bqts8"),s(h,"class","gray svelte-6bqts8"),s(g,"class","blue svelte-6bqts8"),s(x,"class","block svelte-6bqts8"),s(q,"class","card gray svelte-6bqts8"),s(U,"class","card blue svelte-6bqts8"),s(L,"class","block svelte-6bqts8"),s(X,"class","blue svelte-6bqts8"),s(X,"type","checkbox"),s(K,"class","block svelte-6bqts8"),s(P,"class","card gray svelte-6bqts8"),s(z,"class","card blue svelte-6bqts8"),s(I,"class","block svelte-6bqts8"),B.__value="1",B.value=B.__value,D.__value="2",D.value=D.__value,O.__value="3",O.value=O.__value,s(H,"class","gray svelte-6bqts8"),R.__value="1",R.value=R.__value,A.__value="2",A.value=A.__value,V.__value="3",V.value=V.__value,s(S,"class","blue svelte-6bqts8"),s(_,"class","block svelte-6bqts8"),T(_,"width","min-content"),T(_,"padding","10px"),T(_,"padding-bottom","120px"),T(_,"border","2px solid white"),T(t,"transform-origin","center top"),s(j,"type","radio"),s(j,"id","radio-option-1"),s(j,"name","radio-options"),s(Q,"for","radio-option-1"),s(C,"type","radio"),s(C,"id","radio-option-2"),s(C,"name","radio-options"),T(C,"--exio-hover-border-color","var(--accent)"),T(C,"--exio-selected-indicator-color","var(--accent)"),s(G,"for","radio-option-2"),s(k,"class","paired svelte-6bqts8"),s(Y,"class","block svelte-6bqts8")},m(M,it){Z(M,t,it),r(t,n),r(n,o),r(n,i),r(n,l),r(t,c),r(t,f),r(f,p),r(f,v),r(f,d),r(t,w),r(t,x),r(x,h),r(x,E),r(x,g),r(t,W),r(t,L),r(L,q),r(L,$),r(L,U),r(t,at),r(t,K),r(K,X),r(t,st),r(t,I),r(I,P),r(I,ct),r(I,z),r(t,dt),r(t,_),r(_,H),r(H,B),r(H,D),r(H,O),r(_,ut),r(_,S),r(S,R),r(S,A),r(S,V),Z(M,ot,it),Z(M,Y,it),r(Y,k),r(k,j),r(k,ft),r(k,Q),r(k,pt),r(k,C),r(k,mt),r(k,G),nt||(vt=[u(F.call(null,o)),u(F.call(null,l)),u(F.call(null,p)),u(F.call(null,d)),u(F.call(null,h)),u(gt.call(null,h)),u(F.call(null,g)),u(gt.call(null,g)),u(et.call(null,q)),u(et.call(null,U)),u(Nt.call(null,X)),u(et.call(null,P)),u(Ft.call(null,P)),u(et.call(null,z)),u(Wt.call(null,z)),u($t.call(null,H)),u($t.call(null,S)),u(Ut.call(null,t)),u(_t.call(null,j)),u(_t.call(null,C))],nt=!0)},d(M){M&&J(t),M&&J(ot),M&&J(Y),nt=!1,Et(vt)}}}function Yt(e){let t,n,o,i=Xt();return{c(){t=a("div"),i&&i.c()},m(l,c){Z(l,t,c),i&&i.m(t,null),n||(o=u(jt.call(null,t)),n=!0)},p:rt,i:rt,o:rt,d(l){l&&J(t),i&&i.d(),n=!1,o()}}}class Zt extends bt{constructor(t){super();xt(this,t,null,Yt,ht,{})}}function kt(e){let t,n;return t=new Zt({}),{c(){qt(t.$$.fragment)},m(o,i){Ht(t,o,i),n=!0},i(o){n||(tt(t.$$.fragment,o),n=!0)},o(o){lt(t.$$.fragment,o),n=!1},d(o){St(t,o)}}}function Jt(e){let t,n,o=!e[0]&&kt();return{c(){o&&o.c(),t=Mt()},m(i,l){o&&o.m(i,l),Z(i,t,l),n=!0},p(i,[l]){i[0]?o&&(Pt(),lt(o,1,1,()=>{o=null}),Tt()):o?l&1&&tt(o,1):(o=kt(),o.c(),tt(o,1),o.m(t.parentNode,t))},i(i){n||(tt(o),n=!0)},o(i){lt(o),n=!1},d(i){o&&o.d(i),i&&J(t)}}}function Kt(e,t,n){let o;return It(e,zt,i=>n(0,o=i)),[o]}class Qt extends bt{constructor(t){super();xt(this,t,Kt,Jt,ht,{})}}new Qt({target:document.getElementById("app")});
