var mt=Object.defineProperty,gt=Object.defineProperties;var yt=Object.getOwnPropertyDescriptors;var et=Object.getOwnPropertySymbols;var vt=Object.prototype.hasOwnProperty,xt=Object.prototype.propertyIsEnumerable;var nt=(o,e,t)=>e in o?mt(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,T=(o,e)=>{for(var t in e||(e={}))vt.call(e,t)&&nt(o,t,e[t]);if(et)for(var t of et(e))xt.call(e,t)&&nt(o,t,e[t]);return o},j=(o,e)=>gt(o,yt(e));import{y as kt,$ as $t,I as wt,S as ot,i as rt,s as it,e as s,a as p,b as c,c as D,d as lt,f as i,g as u,n as G,h as at,r as St,j as Ct,m as _t,t as F,k as q,l as It,o as Et,p as Ot,q as Lt,u as Bt,v as Rt}from"./vendor.80efb8ea.js";const Wt=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(r){if(r.ep)return;r.ep=!0;const l=t(r);fetch(r.href,l)}};Wt();const Mt="modulepreload",ct={},Tt="/exio/",Dt=function(e,t){return!t||t.length===0?e():Promise.all(t.map(n=>{if(n=`${Tt}${n}`,n in ct)return;ct[n]=!0;const r=n.endsWith(".css"),l=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${l}`))return;const a=document.createElement("link");if(a.rel=r?"stylesheet":Mt,r||(a.as="script",a.crossOrigin=""),a.href=n,document.head.appendChild(a),r)return new Promise((h,b)=>{a.addEventListener("load",h),a.addEventListener("error",b)})})).then(()=>e())};kt("en",()=>Dt(()=>import("./en.9805afb4.js"),[]));$t({fallbackLocale:"en",initialLocale:wt()});function O(o,e){const t={};for(const n in o)typeof o[n]=="object"?t[n]=O(o[n],e[n]):t[n]=o[n];if(!e)return t;for(const n in e)(!(n in t)||typeof t[n]!="object")&&(t[n]=e[n]);return t}function Ht(o=10){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let t="";for(let n=0;n<o;n++){const r=Math.floor(Math.random()*e.length);t+=e.substring(r,r+1)}return t}function H(o){return{destroy(){o.remove()}}}function st(o,e){const{left:t,top:n,width:r,height:l}=o.getBoundingClientRect(),{clientX:a,clientY:h}=e,[b,d]=[a-t,h-n];return{x:b,y:d,width:r,height:l}}function v(o,e,t=!1){for(const n in e)o.style[n]&&t||(o.style[n]=e[n])}const ut={clickable:!0,borderWidth:2,innerHoverRadius:200,outerHoverRadius:200,hoverOpacity:.3,hoverBorderOpacity:.7,clickDegrees:5,clickPerspective:5,transitionDuration:.6,clickScale:5,hoverRGB:"255, 255, 255",additionalStyles:{display:"inline-flex",alignItems:"center",justifyContent:"center",color:"white",fontFamily:"inherit",fontSize:"1.1rem",backgroundColor:"transparent",padding:void 0}};function z(o,e){const t=O(ut,e);console.log(JSON.stringify(t,null,2),JSON.stringify(e,null,2),JSON.stringify(ut,null,2)),v(o,t.additionalStyles,!0);const n=`rgba(${t.hoverRGB}, 0.3)`,r={outline:"none",border:`${t.borderWidth}px solid transparent`,backgroundPosition:`-${t.borderWidth}px -${t.borderWidth}px`,backgroundSize:`
      calc(100% + ${t.borderWidth*2}px)
      calc(100% + ${t.borderWidth*2}px)
    `,backgroundRepeat:"no-repeat",transformOrigin:"center center"};v(o,r);let l="none",a=!1,h=!1;o.addEventListener("mouseenter",()=>{h=!0;const b=d=>{const{x:m,y:x,width:f,height:C}=st(o,d),g=Math.max(f,C)*t.innerHoverRadius/100,w=Math.max(f,C)*t.outerHoverRadius/100;l=`
        radial-gradient(
          ${w}px ${w}px at ${m}px ${x}px,
          rgba(${t.hoverRGB}, ${t.hoverBorderOpacity}),
          ${n}
        ) 9 / ${t.borderWidth}px / 0px stretch
      `,!a&&v(o,{backgroundImage:`
          radial-gradient(
            ${g}px ${g}px at ${m}px ${x}px,
            rgba(${t.hoverRGB}, ${t.hoverOpacity}) 0%,
            rgba(${t.hoverRGB}, 0.0) 100%
          )
        `,borderImage:l})};window.addEventListener("mousemove",b),o.addEventListener("mouseleave",()=>{h=!1,window.removeEventListener("mousemove",b),a||v(o,{borderImage:"none",backgroundImage:"none"})})}),t.clickable&&o.addEventListener("mousedown",b=>{a=!0;const{x:d,y:m,width:x,height:f}=st(o,b),[C,g]=[2*(d/x)-1,2*(m/f)-1],w=t.clickPerspective*Math.min(x,f),y="center center",k=1-t.clickScale/Math.max(x,f);v(o,{transform:`
          perspective(${w}px)
          rotateX(${-g*t.clickDegrees}deg)
          rotateY(${C*t.clickDegrees}deg)
          scale(${k})
        `,transition:"0s",transformOrigin:y,borderImage:"none"});const W=()=>{a=!1,v(o,{transform:`perspective(${w}px)`,transition:`transform ${t.transitionDuration}s`,borderImage:l}),h||v(o,{borderImage:"none",backgroundImage:"none"}),window.removeEventListener("mouseup",W)};window.addEventListener("mouseup",W)})}const dt={innerHoverRadius:0,additionalStyles:{}};function Pt(o={}){const e=O(dt,o);return t=>(z(t,T({clickable:!1},e)),H(t))}function J(o){return Pt()(o)}const jt=j(T({},dt),{additionalStyles:{padding:"0.3rem 0.6rem",backgroundColor:"transparent"}});function Ft(o={}){const e=O(jt.additionalStyles,o.additionalStyles);return t=>(z(t,{clickable:!0,additionalStyles:e}),H(t))}function $(o){return Ft()(o)}const Nt={fontUrl:"https://fonts.gstatic.com/s/materialicons/v126/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2"};function At(o=Nt){return e=>{const t="exio-icon-font",n=document.getElementById(t),r=n||document.createElement("style");return r.id=t,r.innerHTML=`
      @font-face {
        font-family: 'Material Icons';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('${o.fontUrl}') format('woff2');
      }
    `,n||document.head.appendChild(r),e.style.setProperty("font-family","Material Icons","important"),H(e)}}function U(o){return At()(o)}const Gt={fillBody:!0,additionalStyles:{fontFamily:"Segoe UI, Frutiger, Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif",backgroundColor:"black",position:"absolute",minWidth:"100%",minHeight:"100%"}};function qt(o={}){const e=O(Gt,o);return t=>{if(v(t,e.additionalStyles),e.fillBody){v(document.body,{padding:"0",margin:"0",width:"100%",height:"100%"});const n="exio-body",r=document.getElementById(n)||document.createElement("style");r.id=n,r.innerHTML=`
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
      `,document.head.appendChild(r)}return H(t)}}function zt(o){return qt()(o)}const ft={activeFilter:"grayscale(100%) brightness(75%)",uncheckedColor:"transparent",additionalStyles:{}},Jt=j(T({},ft),{transitionDuration:.2,thumbColor:"white",additionalStyles:O(ft.additionalStyles,{outline:"none",webkitAppearance:"none",width:"2.75rem",height:"1.25rem",position:"relative",display:"inline-flex",alignItems:"center",justifyContent:"center",borderWidth:"2px",overflow:"visible"})});function Ut(o={}){const e=O(Jt,o);return t=>{t.type="checkbox",z(t,{borderWidth:0});const n=Ht(),r=document.getElementById(n)||document.createElement("style");return r.id=n,t.classList.add(n),r.innerHTML=`
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
    `,document.head.appendChild(r),v(t,j(T({},e.additionalStyles),{borderRadius:e.additionalStyles.height,border:`${e.additionalStyles.borderWidth} solid ${e.thumbColor}`})),H(t)}}function pt(o){return Ut()(o)}function Xt(o){let e,t,n,r,l,a,h,b,d,m,x,f,C,g,w,y,k,W,_,X,L,V,S,I,Y,E,K,B,Q,R,M,Z,P,N,tt;return{c(){e=s("div"),t=s("div"),n=s("button"),n.textContent="Clickable Button",r=p(),l=s("button"),l.textContent="Clickable Button",a=p(),h=s("button"),h.textContent="Clickable Button",b=p(),d=s("div"),m=s("button"),m.textContent="send",x=p(),f=s("button"),f.textContent="send",C=p(),g=s("button"),g.textContent="send",w=p(),y=s("div"),k=s("button"),k.textContent="Tile Button",W=p(),_=s("button"),_.textContent="Tile Button",X=p(),L=s("button"),L.textContent="Tile Button",V=p(),S=s("div"),I=s("div"),I.textContent="Tile Item",Y=p(),E=s("div"),E.textContent="Tile Item",K=p(),B=s("div"),B.textContent="Tile Item",Q=p(),R=s("div"),M=s("input"),Z=p(),P=s("input"),c(n,"background-color","var(--gray-fill)"),c(l,"background-color","var(--blue-accent)"),D(t,"class","block svelte-14i7bny"),c(m,"background-color","var(--gray-fill)"),c(f,"background-color","var(--blue-accent)"),D(d,"class","block svelte-14i7bny"),c(k,"width","150px"),c(k,"height","150px"),c(k,"background-color","var(--gray-fill)"),c(_,"width","300px"),c(_,"height","150px"),c(_,"background-color","var(--blue-accent)"),c(L,"width","150px"),c(L,"height","150px"),D(y,"class","block svelte-14i7bny"),c(I,"width","200px"),c(I,"height","100px"),c(I,"background-color","var(--gray-fill)"),c(E,"width","200px"),c(E,"height","100px"),c(E,"background-color","var(--blue-accent)"),c(B,"width","200px"),c(B,"height","100px"),D(S,"class","block svelte-14i7bny"),c(M,"background-color","var(--blue-accent)"),M.checked=!0,P.checked=!0,D(R,"class","block svelte-14i7bny")},m(A,bt){lt(A,e,bt),i(e,t),i(t,n),i(t,r),i(t,l),i(t,a),i(t,h),i(e,b),i(e,d),i(d,m),i(d,x),i(d,f),i(d,C),i(d,g),i(e,w),i(e,y),i(y,k),i(y,W),i(y,_),i(y,X),i(y,L),i(e,V),i(e,S),i(S,I),i(S,Y),i(S,E),i(S,K),i(S,B),i(e,Q),i(e,R),i(R,M),i(R,Z),i(R,P),N||(tt=[u($.call(null,n)),u($.call(null,l)),u($.call(null,h)),u($.call(null,m)),u(U.call(null,m)),u($.call(null,f)),u(U.call(null,f)),u($.call(null,g)),u(U.call(null,g)),u($.call(null,k)),u($.call(null,_)),u($.call(null,L)),u(J.call(null,I)),u(J.call(null,E)),u(J.call(null,B)),u(pt.call(null,M)),u(pt.call(null,P)),u(zt.call(null,e))],N=!0)},p:G,i:G,o:G,d(A){A&&at(e),N=!1,St(tt)}}}class Vt extends ot{constructor(e){super();rt(this,e,null,Xt,it,{})}}function ht(o){let e,t;return e=new Vt({}),{c(){Ct(e.$$.fragment)},m(n,r){_t(e,n,r),t=!0},i(n){t||(F(e.$$.fragment,n),t=!0)},o(n){q(e.$$.fragment,n),t=!1},d(n){It(e,n)}}}function Yt(o){let e,t,n=!o[0]&&ht();return{c(){n&&n.c(),e=Et()},m(r,l){n&&n.m(r,l),lt(r,e,l),t=!0},p(r,[l]){r[0]?n&&(Bt(),q(n,1,1,()=>{n=null}),Ot()):n?l&1&&F(n,1):(n=ht(),n.c(),F(n,1),n.m(e.parentNode,e))},i(r){t||(F(n),t=!0)},o(r){q(n),t=!1},d(r){n&&n.d(r),r&&at(e)}}}function Kt(o,e,t){let n;return Lt(o,Rt,r=>t(0,n=r)),[n]}class Qt extends ot{constructor(e){super();rt(this,e,Kt,Yt,it,{})}}new Qt({target:document.getElementById("app")});
