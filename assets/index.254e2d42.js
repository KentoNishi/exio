var _t=Object.defineProperty,Ot=Object.defineProperties;var Lt=Object.getOwnPropertyDescriptors;var ut=Object.getOwnPropertySymbols;var Bt=Object.prototype.hasOwnProperty,Tt=Object.prototype.propertyIsEnumerable;var ft=(o,e,t)=>e in o?_t(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,N=(o,e)=>{for(var t in e||(e={}))Bt.call(e,t)&&ft(o,t,e[t]);if(ut)for(var t of ut(e))Tt.call(e,t)&&ft(o,t,e[t]);return o},U=(o,e)=>Ot(o,Lt(e));import{y as Rt,$ as jt,I as Mt,S as pt,i as mt,s as ht,e as s,a as u,b as r,c as H,d as bt,f as l,g as c,n as J,h as gt,r as Wt,j as At,m as Dt,t as X,k as K,l as Ft,o as Ht,p as Pt,q as Gt,u as Nt,v as qt}from"./vendor.80efb8ea.js";const zt=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}};zt();const Ut="modulepreload",yt={},Xt="/exio/",Yt=function(e,t){return!t||t.length===0?e():Promise.all(t.map(n=>{if(n=`${Xt}${n}`,n in yt)return;yt[n]=!0;const i=n.endsWith(".css"),a=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${a}`))return;const d=document.createElement("link");if(d.rel=i?"stylesheet":Ut,i||(d.as="script",d.crossOrigin=""),d.href=n,document.head.appendChild(d),i)return new Promise((p,m)=>{d.addEventListener("load",p),d.addEventListener("error",m)})})).then(()=>e())};Rt("en",()=>Yt(()=>import("./en.9805afb4.js"),[]));jt({fallbackLocale:"en",initialLocale:Mt()});function _(o,e){const t={};for(const n in o)typeof o[n]=="object"?t[n]=_(o[n],e[n]):t[n]=o[n];if(!e)return t;for(const n in e)(!(n in t)||typeof t[n]!="object")&&(t[n]=e[n]);return t}function Q(o=10){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let t="";for(let n=0;n<o;n++){const i=Math.floor(Math.random()*e.length);t+=e.substring(i,i+1)}return t}function W(o){return{destroy(){o.remove()}}}function vt(o,e){const{left:t,top:n,width:i,height:a}=o.getBoundingClientRect(),{clientX:d,clientY:p}=e,[m,f]=[d-t,p-n];return{x:m,y:f,width:i,height:a}}function k(o,e,t=!1){for(const n in e)o.style[n]&&t||(o.style[n]=e[n])}const Vt={clickable:!0,borderWidth:2,innerHoverRadius:200,outerHoverRadius:200,hoverOpacity:.3,hoverBorderOpacity:.7,clickDegrees:5,clickPerspective:5,transitionDuration:.6,clickScale:5,hoverRGB:"255, 255, 255",additionalStyles:{display:"inline-flex",alignItems:"center",justifyContent:"center",color:"white",fontFamily:"inherit",fontSize:"1.1rem",backgroundColor:"transparent",padding:void 0}};function Z(o,e){const t=_(Vt,e);k(o,t.additionalStyles,!0);const n=`rgba(${t.hoverRGB}, 0.3)`,i={outline:"none",border:`${t.borderWidth}px solid transparent`,backgroundPosition:`-${t.borderWidth}px -${t.borderWidth}px`,backgroundSize:`
      calc(100% + ${t.borderWidth*2}px)
      calc(100% + ${t.borderWidth*2}px)
    `,backgroundRepeat:"no-repeat",transformOrigin:"center center"};k(o,i);let a="none",d=!1,p=!1;if(o.addEventListener("mouseenter",()=>{p=!0;const m=f=>{const{x:h,y,width:g,height:R}=vt(o,f),b=Math.max(g,R)*t.innerHoverRadius/100,$=Math.max(g,R)*t.outerHoverRadius/100;a=`
        radial-gradient(
          ${$}px ${$}px at ${h}px ${y}px,
          rgba(${t.hoverRGB}, ${t.hoverBorderOpacity}),
          ${n}
        ) 9 / ${t.borderWidth}px / 0px stretch
      `,!d&&k(o,{backgroundImage:`
          radial-gradient(
            ${b}px ${b}px at ${h}px ${y}px,
            rgba(${t.hoverRGB}, ${t.hoverOpacity}) 0%,
            rgba(${t.hoverRGB}, 0.0) 100%
          )
        `,borderImage:a})};window.addEventListener("mousemove",m),o.addEventListener("mouseleave",()=>{p=!1,window.removeEventListener("mousemove",m),d||k(o,{borderImage:"none",backgroundImage:"none"})})}),t.clickable){const m=(f="mousedown",h="mouseup")=>{o.addEventListener(f,y=>{y.preventDefault(),d=!0;const{x:g,y:R,width:b,height:$}=vt(o,"touches"in y?y.touches[0]:y),[v,w]=[2*(g/b)-1,2*(R/$)-1],P=t.clickPerspective*Math.min(b,$),S="center center",q=1-t.clickScale/Math.max(b,$);k(o,{transform:`
          perspective(${P}px)
          rotateX(${-w*t.clickDegrees}deg)
          rotateY(${v*t.clickDegrees}deg)
          scale(${q})
        `,transition:"0s",transformOrigin:S,borderImage:"none"});const C=()=>{d=!1,k(o,{transform:`perspective(${P}px)`,transition:`transform ${t.transitionDuration}s`,borderImage:a}),p||k(o,{borderImage:"none",backgroundImage:"none"}),window.removeEventListener(h,C)};window.addEventListener(h,C)})};m("mousedown","mouseup"),m("touchstart","touchend")}}const xt={activeFilter:"grayscale(100%) brightness(75%)",uncheckedColor:"transparent",additionalStyles:{}},Jt=U(N({},xt),{transitionDuration:.2,thumbColor:"white",additionalStyles:_(xt.additionalStyles,{outline:"none",webkitAppearance:"none",width:"2.75rem",height:"1.25rem",position:"relative",display:"inline-flex",alignItems:"center",justifyContent:"center",borderWidth:"2px",overflow:"visible"})});function Kt(o={}){const e=_(Jt,o);return t=>{t.type="checkbox",Z(t,{borderWidth:0});const n=Q(),i=document.getElementById(n)||document.createElement("style");return i.id=n,t.classList.add(n),i.innerHTML+=`
      .${n}::after {
        content: '';
        width: calc(${e.additionalStyles.height} / 2);
        height: calc(${e.additionalStyles.height} / 2);
        transform: translateX(calc(
          100% - ${e.additionalStyles.width} / 2
        ));
        top: 0px;
        left: 0px;
        background-color: ${e.thumbColor};
        border-radius: 50%;
        transition: transform ${e.transitionDuration}s;
      }
      .${n}:checked::after {
        transform: translateX(calc(
          ${e.additionalStyles.width} / 2 - 100%
        ));
      }
      .${n}:active {
        filter: ${e.activeFilter};
      }
      .${n}:not(:checked):not(:active) {
        background-color: ${e.uncheckedColor} !important;
      }
      .${n}::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border: ${e.additionalStyles.borderWidth} solid ${e.thumbColor};
        border-radius: inherit;
        z-index: 100;
      }
    `,document.body.appendChild(i),k(t,U(N({},e.additionalStyles),{borderRadius:e.additionalStyles.height,border:`${e.additionalStyles.borderWidth} solid ${e.thumbColor}`})),W(t)}}function kt(o){return Kt()(o)}const $t={innerHoverRadius:0,additionalStyles:{}};function Qt(o={}){const e=_($t,o);return t=>(Z(t,N({clickable:!1},e)),W(t))}function A(o){return Qt()(o)}const Zt=U(N({},$t),{additionalStyles:{padding:"0.3rem 0.6rem",backgroundColor:"transparent"}});function te(o={}){const e=_(Zt.additionalStyles,o.additionalStyles);return t=>(Z(t,{clickable:!0,additionalStyles:e}),W(t))}function O(o){return te()(o)}const ee={fontUrl:"https://fonts.gstatic.com/s/materialicons/v126/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2"};function ne(o=ee){return e=>{const t="exio-icon-font",n=document.getElementById(t),i=n||document.createElement("style");return i.id=t,i.innerHTML+=`
      @font-face {
        font-family: 'Material Icons';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('${o.fontUrl}') format('woff2');
      }
    `,n||document.body.appendChild(i),e.style.setProperty("font-family","Material Icons","important"),W(e)}}function tt(o){return ne()(o)}const oe={fillBody:!0,additionalStyles:{fontFamily:"Segoe UI, Frutiger, Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif",backgroundColor:"black",position:"absolute",minWidth:"100%",minHeight:"100%"}};function ie(o={}){const e=_(oe,o);return t=>{if(k(t,e.additionalStyles),e.fillBody){k(document.body,{padding:"0",margin:"0",width:"100%",height:"100%"});const n="exio-body",i=document.getElementById(n)||document.createElement("style");i.id=n,i.innerHTML+=`
        ::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: #888;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
        ::-webkit-scrollbar-corner {
          background: transparent;
        }
        * {
          scrollbar-width: thin;
          overflow: overlay;
        }
      `,document.body.appendChild(i)}return W(t)}}function le(o){return ie()(o)}const wt={duration:.3};function re(o={}){const e=_(wt,o);return t=>{const n=Q(),i=document.getElementById(n)||document.createElement("style");return i.id=n,t.classList.add(n),i.innerHTML+=`
      .${n} {
        opacity: 0;
        animation: exio-fly-transition ${e.duration}s;
        animation-fill-mode: forwards;
      }
      @keyframes exio-fly-transition {
        from {
          transform: translateY(50%);
          opacity: 0;
        }
        to {
          transform: translateY(0);
          opacity: 1;
        }
      }
    `,document.body.appendChild(i),W(t)}}function St(o){return re()(o)}function ae(o={}){const e=_(wt,o);return t=>{const n=Q(),i=document.getElementById(n)||document.createElement("style");return i.id=n,t.classList.add(n),i.innerHTML+=`
      .${n} {
        opacity: 0;
        animation: exio-fade-transition ${e.duration}s;
        animation-fill-mode: forwards;
      }
      @keyframes exio-fade-transition {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    `,document.body.appendChild(i),W(t)}}function Ct(o){return ae()(o)}function ce(o){let e,t,n,i,a,d,p,m,f,h,y,g,R,b,$,v,w,P,S,q,C,et,L,j,nt,M,ot,D,it,F,G,lt,z,rt,x,B,at,T,ct,I,st,E,Y,dt;return{c(){e=s("div"),t=s("div"),n=s("button"),n.textContent="Clickable Button",i=u(),a=s("button"),a.textContent="Clickable Button",d=u(),p=s("button"),p.textContent="Clickable Button",m=u(),f=s("div"),h=s("button"),h.textContent="send",y=u(),g=s("button"),g.textContent="send",R=u(),b=s("button"),b.textContent="send",$=u(),v=s("div"),w=s("button"),w.textContent="Tile Button",P=u(),S=s("button"),S.textContent="Tile Button",q=u(),C=s("button"),C.textContent="Tile Button",et=u(),L=s("div"),j=s("div"),j.textContent="Tile Item",nt=u(),M=s("div"),M.textContent="Tile Item",ot=u(),D=s("div"),D.textContent="Tile Item",it=u(),F=s("div"),G=s("input"),lt=u(),z=s("input"),rt=u(),x=s("div"),B=s("div"),B.textContent="Tile Item",at=u(),T=s("div"),T.textContent="Tile Item",ct=u(),I=s("div"),I.textContent="Tile Item",st=u(),E=s("div"),E.textContent="Tile Item",r(n,"background-color","var(--gray-fill)"),r(a,"background-color","var(--blue-accent)"),H(t,"class","block svelte-htfejp"),r(h,"background-color","var(--gray-fill)"),r(g,"background-color","var(--blue-accent)"),H(f,"class","block svelte-htfejp"),r(w,"width","150px"),r(w,"height","150px"),r(w,"background-color","var(--gray-fill)"),r(S,"width","300px"),r(S,"height","150px"),r(S,"background-color","var(--blue-accent)"),r(C,"width","150px"),r(C,"height","150px"),H(v,"class","block svelte-htfejp"),r(j,"width","200px"),r(j,"height","100px"),r(j,"background-color","var(--gray-fill)"),r(M,"width","200px"),r(M,"height","100px"),r(M,"background-color","var(--blue-accent)"),r(D,"width","200px"),r(D,"height","100px"),H(L,"class","block svelte-htfejp"),r(G,"background-color","var(--blue-accent)"),G.checked=!0,z.checked=!0,H(F,"class","block svelte-htfejp"),r(B,"width","200px"),r(B,"height","100px"),r(B,"background-color","var(--gray-fill)"),r(T,"width","200px"),r(T,"height","100px"),r(T,"background-color","var(--blue-accent)"),r(I,"width","200px"),r(I,"height","100px"),r(I,"background-color","var(--gray-fill)"),r(I,"animation-delay","0.5s"),r(E,"width","200px"),r(E,"height","100px"),r(E,"background-color","var(--blue-accent)"),r(E,"animation-delay","0.5s"),H(x,"class","block svelte-htfejp")},m(V,Et){bt(V,e,Et),l(e,t),l(t,n),l(t,i),l(t,a),l(t,d),l(t,p),l(e,m),l(e,f),l(f,h),l(f,y),l(f,g),l(f,R),l(f,b),l(e,$),l(e,v),l(v,w),l(v,P),l(v,S),l(v,q),l(v,C),l(e,et),l(e,L),l(L,j),l(L,nt),l(L,M),l(L,ot),l(L,D),l(e,it),l(e,F),l(F,G),l(F,lt),l(F,z),l(e,rt),l(e,x),l(x,B),l(x,at),l(x,T),l(x,ct),l(x,I),l(x,st),l(x,E),Y||(dt=[c(O.call(null,n)),c(O.call(null,a)),c(O.call(null,p)),c(O.call(null,h)),c(tt.call(null,h)),c(O.call(null,g)),c(tt.call(null,g)),c(O.call(null,b)),c(tt.call(null,b)),c(O.call(null,w)),c(O.call(null,S)),c(O.call(null,C)),c(A.call(null,j)),c(A.call(null,M)),c(A.call(null,D)),c(kt.call(null,G)),c(kt.call(null,z)),c(A.call(null,B)),c(Ct.call(null,B)),c(A.call(null,T)),c(St.call(null,T)),c(A.call(null,I)),c(Ct.call(null,I)),c(A.call(null,E)),c(St.call(null,E)),c(le.call(null,e))],Y=!0)},p:J,i:J,o:J,d(V){V&&gt(e),Y=!1,Wt(dt)}}}class se extends pt{constructor(e){super();mt(this,e,null,ce,ht,{})}}function It(o){let e,t;return e=new se({}),{c(){At(e.$$.fragment)},m(n,i){Dt(e,n,i),t=!0},i(n){t||(X(e.$$.fragment,n),t=!0)},o(n){K(e.$$.fragment,n),t=!1},d(n){Ft(e,n)}}}function de(o){let e,t,n=!o[0]&&It();return{c(){n&&n.c(),e=Ht()},m(i,a){n&&n.m(i,a),bt(i,e,a),t=!0},p(i,[a]){i[0]?n&&(Nt(),K(n,1,1,()=>{n=null}),Pt()):n?a&1&&X(n,1):(n=It(),n.c(),X(n,1),n.m(e.parentNode,e))},i(i){t||(X(n),t=!0)},o(i){K(n),t=!1},d(i){n&&n.d(i),i&&gt(e)}}}function ue(o,e,t){let n;return Gt(o,qt,i=>t(0,n=i)),[n]}class fe extends pt{constructor(e){super();mt(this,e,ue,de,ht,{})}}new fe({target:document.getElementById("app")});
