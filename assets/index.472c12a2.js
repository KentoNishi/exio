var pt=Object.defineProperty,mt=Object.defineProperties;var ht=Object.getOwnPropertyDescriptors;var Q=Object.getOwnPropertySymbols;var bt=Object.prototype.hasOwnProperty,gt=Object.prototype.propertyIsEnumerable;var Z=(o,e,t)=>e in o?pt(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,T=(o,e)=>{for(var t in e||(e={}))bt.call(e,t)&&Z(o,t,e[t]);if(Q)for(var t of Q(e))gt.call(e,t)&&Z(o,t,e[t]);return o},H=(o,e)=>mt(o,ht(e));import{y as yt,$ as vt,I as xt,S as tt,i as et,s as nt,e as s,a as m,b as c,c as W,d as ot,f as l,g as u,n as A,h as rt,r as kt,j as $t,m as wt,t as P,k as G,l as St,o as Ct,p as _t,q as It,u as Et,v as Ot}from"./vendor.80efb8ea.js";const Lt=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}};Lt();const Bt="modulepreload",it={},Rt="/exio/",Tt=function(e,t){return!t||t.length===0?e():Promise.all(t.map(n=>{if(n=`${Rt}${n}`,n in it)return;it[n]=!0;const r=n.endsWith(".css"),i=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${i}`))return;const a=document.createElement("link");if(a.rel=r?"stylesheet":Bt,r||(a.as="script",a.crossOrigin=""),a.href=n,document.head.appendChild(a),r)return new Promise((p,h)=>{a.addEventListener("load",p),a.addEventListener("error",h)})})).then(()=>e())};yt("en",()=>Tt(()=>import("./en.9805afb4.js"),[]));vt({fallbackLocale:"en",initialLocale:xt()});function O(o,e){const t={};for(const n in o)typeof o[n]=="object"?t[n]=O(o[n],e[n]):t[n]=o[n];if(!e)return t;for(const n in e)(!(n in t)||typeof t[n]!="object")&&(t[n]=e[n]);return t}function Wt(){return(Math.random()+1).toString(36).substring(7)}function D(o){return{destroy(){o.remove()}}}function lt(o,e){const{left:t,top:n,width:r,height:i}=o.getBoundingClientRect(),{clientX:a,clientY:p}=e,[h,d]=[a-t,p-n];return{x:h,y:d,width:r,height:i}}function v(o,e,t=!1){for(const n in e)o.style[n]&&t||(o.style[n]=e[n])}const at={clickable:!0,borderWidth:2,innerHoverRadius:200,outerHoverRadius:200,hoverOpacity:.3,hoverBorderOpacity:.7,clickDegrees:5,clickPerspective:5,transitionDuration:.6,clickScale:5,hoverRGB:"255, 255, 255",additionalStyles:{display:"inline-flex",alignItems:"center",justifyContent:"center",color:"white",fontFamily:"inherit",fontSize:"1.1rem",backgroundColor:"transparent",padding:void 0}};function ct(o,e){const t=O(at,e);console.log(JSON.stringify(t,null,2),JSON.stringify(e,null,2),JSON.stringify(at,null,2)),v(o,t.additionalStyles,!0);const n=`rgba(${t.hoverRGB}, 0.3)`,r={outline:"none",border:`${t.borderWidth}px solid transparent`,backgroundPosition:`-${t.borderWidth}px -${t.borderWidth}px`,backgroundSize:`
      calc(100% + ${t.borderWidth*2}px)
      calc(100% + ${t.borderWidth*2}px)
    `,backgroundRepeat:"no-repeat",transformOrigin:"center center"};v(o,r);let i="none",a=!1,p=!1;o.addEventListener("mouseenter",()=>{p=!0;const h=d=>{const{x:b,y:x,width:f,height:C}=lt(o,d),g=Math.max(f,C)*t.innerHoverRadius/100,w=Math.max(f,C)*t.outerHoverRadius/100;i=`
        radial-gradient(
          ${w}px ${w}px at ${b}px ${x}px,
          rgba(${t.hoverRGB}, ${t.hoverBorderOpacity}),
          ${n}
        ) 9 / ${t.borderWidth}px / 0px stretch
      `,!a&&v(o,{backgroundImage:`
          radial-gradient(
            ${g}px ${g}px at ${b}px ${x}px,
            rgba(${t.hoverRGB}, ${t.hoverOpacity}) 0%,
            rgba(${t.hoverRGB}, 0.0) 100%
          )
        `,borderImage:i})};window.addEventListener("mousemove",h),o.addEventListener("mouseleave",()=>{p=!1,window.removeEventListener("mousemove",h),a||v(o,{borderImage:"none",backgroundImage:"none"})})}),t.clickable&&o.addEventListener("mousedown",h=>{a=!0;const{x:d,y:b,width:x,height:f}=lt(o,h),[C,g]=[2*(d/x)-1,2*(b/f)-1],w=t.clickPerspective*Math.min(x,f),y="center center",k=1-t.clickScale/Math.max(x,f);v(o,{transform:`
          perspective(${w}px)
          rotateX(${-g*t.clickDegrees}deg)
          rotateY(${C*t.clickDegrees}deg)
          scale(${k})
        `,transition:"0s",transformOrigin:y,borderImage:"none"});const R=()=>{a=!1,v(o,{transform:`perspective(${w}px)`,transition:`transform ${t.transitionDuration}s`,borderImage:i}),p||v(o,{borderImage:"none",backgroundImage:"none"}),window.removeEventListener("mouseup",R)};window.addEventListener("mouseup",R)})}const st={activeFilter:"grayscale(100%) brightness(75%)",hoverFilter:"brightness(85%)",uncheckedColor:"transparent",additionalStyles:{}},Dt=H(T({},st),{transitionDuration:.2,thumbColor:"white",additionalStyles:O(st.additionalStyles,{outline:"none",webkitAppearance:"none",width:"2.75rem",height:"1.25rem",position:"relative",display:"inline-flex",alignItems:"center",justifyContent:"center",borderWidth:"2px"})});function Mt(o={}){const e=O(Dt,o);return t=>{t.type="checkbox",v(t,H(T({},e.additionalStyles),{borderRadius:e.additionalStyles.height,border:`${e.additionalStyles.borderWidth} solid ${e.thumbColor}`}));const n=Wt(),r=document.getElementById(n)||document.createElement("style");return r.id=n,t.classList.add(n),r.innerHTML=`
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
      .${n}:hover {
        filter: ${e.hoverFilter};
      }
      .${n}:active {
        filter: ${e.activeFilter};
      }
      .${n}:not(:checked):not(:active) {
        background-color: ${e.uncheckedColor} !important;
      }
    `,document.head.appendChild(r),D(t)}}function Ft(o){return Mt()(o)}const ut={innerHoverRadius:0,additionalStyles:{}};function Ht(o={}){const e=O(ut,o);return t=>(ct(t,T({clickable:!1},e)),D(t))}function q(o){return Ht()(o)}const Pt=H(T({},ut),{additionalStyles:{padding:"0.3rem 0.6rem",backgroundColor:"transparent"}});function jt(o={}){const e=O(Pt.additionalStyles,o.additionalStyles);return t=>(ct(t,{clickable:!0,additionalStyles:e}),D(t))}function $(o){return jt()(o)}const Nt={fontUrl:"https://fonts.gstatic.com/s/materialicons/v126/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2"};function At(o=Nt){return e=>{const t="exio-icon-font",n=document.getElementById(t),r=n||document.createElement("style");return r.id=t,r.innerHTML=`
      @font-face {
        font-family: 'Material Icons';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('${o.fontUrl}') format('woff2');
      }
    `,n||document.head.appendChild(r),e.style.setProperty("font-family","Material Icons","important"),D(e)}}function J(o){return At()(o)}const Gt={fillBody:!0,additionalStyles:{fontFamily:"Segoe UI, Frutiger, Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif",backgroundColor:"black",position:"absolute",minWidth:"100%",minHeight:"100%"}};function qt(o={}){const e=O(Gt,o);return t=>{if(v(t,e.additionalStyles),e.fillBody){v(document.body,{padding:"0",margin:"0",width:"100%",height:"100%"});const n="exio-body",r=document.getElementById(n)||document.createElement("style");r.id=n,r.innerHTML=`
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
      `,document.head.appendChild(r)}return D(t)}}function Jt(o){return qt()(o)}function Ut(o){let e,t,n,r,i,a,p,h,d,b,x,f,C,g,w,y,k,R,_,U,L,X,S,I,z,E,V,B,Y,M,F,j,K;return{c(){e=s("div"),t=s("div"),n=s("button"),n.textContent="Clickable Button",r=m(),i=s("button"),i.textContent="Clickable Button",a=m(),p=s("button"),p.textContent="Clickable Button",h=m(),d=s("div"),b=s("button"),b.textContent="send",x=m(),f=s("button"),f.textContent="send",C=m(),g=s("button"),g.textContent="send",w=m(),y=s("div"),k=s("button"),k.textContent="Tile Button",R=m(),_=s("button"),_.textContent="Tile Button",U=m(),L=s("button"),L.textContent="Tile Button",X=m(),S=s("div"),I=s("div"),I.textContent="Tile Item",z=m(),E=s("div"),E.textContent="Tile Item",V=m(),B=s("div"),B.textContent="Tile Item",Y=m(),M=s("div"),F=s("input"),c(n,"background-color","var(--gray-fill)"),c(i,"background-color","var(--blue-accent)"),W(t,"class","block svelte-14i7bny"),c(b,"background-color","var(--gray-fill)"),c(f,"background-color","var(--blue-accent)"),W(d,"class","block svelte-14i7bny"),c(k,"width","150px"),c(k,"height","150px"),c(k,"background-color","var(--gray-fill)"),c(_,"width","300px"),c(_,"height","150px"),c(_,"background-color","var(--blue-accent)"),c(L,"width","150px"),c(L,"height","150px"),W(y,"class","block svelte-14i7bny"),c(I,"width","200px"),c(I,"height","100px"),c(I,"background-color","var(--gray-fill)"),c(E,"width","200px"),c(E,"height","100px"),c(E,"background-color","var(--blue-accent)"),c(B,"width","200px"),c(B,"height","100px"),W(S,"class","block svelte-14i7bny"),c(F,"background-color","var(--blue-accent)"),W(M,"class","block svelte-14i7bny")},m(N,ft){ot(N,e,ft),l(e,t),l(t,n),l(t,r),l(t,i),l(t,a),l(t,p),l(e,h),l(e,d),l(d,b),l(d,x),l(d,f),l(d,C),l(d,g),l(e,w),l(e,y),l(y,k),l(y,R),l(y,_),l(y,U),l(y,L),l(e,X),l(e,S),l(S,I),l(S,z),l(S,E),l(S,V),l(S,B),l(e,Y),l(e,M),l(M,F),j||(K=[u($.call(null,n)),u($.call(null,i)),u($.call(null,p)),u($.call(null,b)),u(J.call(null,b)),u($.call(null,f)),u(J.call(null,f)),u($.call(null,g)),u(J.call(null,g)),u($.call(null,k)),u($.call(null,_)),u($.call(null,L)),u(q.call(null,I)),u(q.call(null,E)),u(q.call(null,B)),u(Ft.call(null,F)),u(Jt.call(null,e))],j=!0)},p:A,i:A,o:A,d(N){N&&rt(e),j=!1,kt(K)}}}class Xt extends tt{constructor(e){super();et(this,e,null,Ut,nt,{})}}function dt(o){let e,t;return e=new Xt({}),{c(){$t(e.$$.fragment)},m(n,r){wt(e,n,r),t=!0},i(n){t||(P(e.$$.fragment,n),t=!0)},o(n){G(e.$$.fragment,n),t=!1},d(n){St(e,n)}}}function zt(o){let e,t,n=!o[0]&&dt();return{c(){n&&n.c(),e=Ct()},m(r,i){n&&n.m(r,i),ot(r,e,i),t=!0},p(r,[i]){r[0]?n&&(Et(),G(n,1,1,()=>{n=null}),_t()):n?i&1&&P(n,1):(n=dt(),n.c(),P(n,1),n.m(e.parentNode,e))},i(r){t||(P(n),t=!0)},o(r){G(n),t=!1},d(r){n&&n.d(r),r&&rt(e)}}}function Vt(o,e,t){let n;return It(o,Ot,r=>t(0,n=r)),[n]}class Yt extends tt{constructor(e){super();et(this,e,Vt,zt,nt,{})}}new Yt({target:document.getElementById("app")});
