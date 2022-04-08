var mt=Object.defineProperty,gt=Object.defineProperties;var bt=Object.getOwnPropertyDescriptors;var Q=Object.getOwnPropertySymbols;var ht=Object.prototype.hasOwnProperty,yt=Object.prototype.propertyIsEnumerable;var Z=(o,e,t)=>e in o?mt(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,D=(o,e)=>{for(var t in e||(e={}))ht.call(e,t)&&Z(o,t,e[t]);if(Q)for(var t of Q(e))yt.call(e,t)&&Z(o,t,e[t]);return o},A=(o,e)=>gt(o,bt(e));import{y as vt,$ as xt,I as kt,S as tt,i as et,s as nt,e as s,a as m,b as c,c as T,d as ot,f as l,g as u,n as F,h as rt,r as $t,j as wt,m as St,t as H,k as G,l as _t,o as Et,p as It,q as Ot,u as Ct,v as Lt}from"./vendor.80efb8ea.js";const Bt=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}};Bt();const Rt="modulepreload",it={},Tt="/exio/",Mt=function(e,t){return!t||t.length===0?e():Promise.all(t.map(n=>{if(n=`${Tt}${n}`,n in it)return;it[n]=!0;const r=n.endsWith(".css"),i=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${i}`))return;const a=document.createElement("link");if(a.rel=r?"stylesheet":Rt,r||(a.as="script",a.crossOrigin=""),a.href=n,document.head.appendChild(a),r)return new Promise((p,g)=>{a.addEventListener("load",p),a.addEventListener("error",g)})})).then(()=>e())};vt("en",()=>Mt(()=>import("./en.9805afb4.js"),[]));xt({fallbackLocale:"en",initialLocale:kt()});function C(o,e){const t={};for(const n in o)typeof o[n]=="object"?t[n]=C(o[n],e[n]):t[n]=o[n];if(!e)return t;for(const n in e)(!(n in t)||typeof t[n]!="object")&&(t[n]=e[n]);return t}function Wt(){return(Math.random()+1).toString(36).substring(7)}function M(o){return{destroy(){o.remove()}}}function lt(o,e){const{left:t,top:n,width:r,height:i}=o.getBoundingClientRect(),{clientX:a,clientY:p}=e,[g,d]=[a-t,p-n];return{x:g,y:d,width:r,height:i}}function v(o,e,t=!1){for(const n in e)o.style[n]&&t||(o.style[n]=e[n])}const at={clickable:!0,borderWidth:2,innerHoverRadius:200,outerHoverRadius:200,hoverOpacity:.3,hoverBorderOpacity:.7,clickDegrees:5,clickPerspective:5,transitionDuration:.6,clickScale:5,hoverRGB:"255, 255, 255",additionalStyles:{display:"inline-flex",alignItems:"center",justifyContent:"center",color:"white",fontFamily:"inherit",fontSize:"1.1rem",backgroundColor:"transparent",padding:void 0}};function ct(o,e){const t=C(at,e);console.log(JSON.stringify(t,null,2),JSON.stringify(e,null,2),JSON.stringify(at,null,2)),v(o,t.additionalStyles,!0);const n=`rgba(${t.hoverRGB}, 0.3)`,r={outline:"none",border:`${t.borderWidth}px solid transparent`,backgroundPosition:`-${t.borderWidth}px -${t.borderWidth}px`,backgroundSize:`
      calc(100% + ${t.borderWidth*2}px)
      calc(100% + ${t.borderWidth*2}px)
    `,backgroundRepeat:"no-repeat",transformOrigin:"center center"};v(o,r);let i="none",a=!1,p=!1;o.addEventListener("mouseenter",()=>{p=!0;const g=d=>{const{x:b,y:x,width:f,height:_}=lt(o,d),h=Math.max(f,_)*t.innerHoverRadius/100,w=Math.max(f,_)*t.outerHoverRadius/100;i=`
        radial-gradient(
          ${w}px ${w}px at ${b}px ${x}px,
          rgba(${t.hoverRGB}, ${t.hoverBorderOpacity}),
          ${n}
        ) 9 / ${t.borderWidth}px / 0px stretch
      `,!a&&v(o,{backgroundImage:`
          radial-gradient(
            ${h}px ${h}px at ${b}px ${x}px,
            rgba(${t.hoverRGB}, ${t.hoverOpacity}) 0%,
            rgba(${t.hoverRGB}, 0.0) 100%
          )
        `,borderImage:i})};window.addEventListener("mousemove",g),o.addEventListener("mouseleave",()=>{p=!1,window.removeEventListener("mousemove",g),a||v(o,{borderImage:"none",backgroundImage:"none"})})}),t.clickable&&o.addEventListener("mousedown",g=>{a=!0;const{x:d,y:b,width:x,height:f}=lt(o,g),[_,h]=[2*(d/x)-1,2*(b/f)-1],w=t.clickPerspective*Math.min(x,f),y="center center",k=1-t.clickScale/Math.max(x,f);v(o,{transform:`
          perspective(${w}px)
          rotateX(${-h*t.clickDegrees}deg)
          rotateY(${_*t.clickDegrees}deg)
          scale(${k})
        `,transition:"0s",transformOrigin:y,borderImage:"none"});const R=()=>{a=!1,v(o,{transform:`perspective(${w}px)`,transition:`transform ${t.transitionDuration}s`,borderImage:i}),p||v(o,{borderImage:"none",backgroundImage:"none"}),window.removeEventListener("mouseup",R)};window.addEventListener("mouseup",R)})}const st={activeFilter:"grayscale(100%)",additionalStyles:{}},ut=A(D({},st),{additionalStyles:C(st.additionalStyles,{outline:"none",border:"none",webkitAppearance:"none",width:"2.5rem",height:"1.5rem"})});function Dt(o={}){const e=C(ut,o);return t=>{t.type="checkbox",v(t,ut.additionalStyles);const n=Wt();console.log(e);const r=document.getElementById(n)||document.createElement("style");return r.id=n,t.classList.add(n),r.innerHTML=`
      .${n}::after {
        content: '';
        position: absolute;
        width: ${e.additionalStyles.height};
        height: ${e.additionalStyles.height};
        background-color: white;
      }
    `,document.head.appendChild(r),M(t)}}function Ht(o){return Dt()(o)}const dt={innerHoverRadius:0,additionalStyles:{}};function Pt(o={}){const e=C(dt,o);return t=>(ct(t,D({clickable:!1},e)),M(t))}function q(o){return Pt()(o)}const Nt=A(D({},dt),{additionalStyles:{padding:"0.3rem 0.6rem",backgroundColor:"transparent"}});function jt(o={}){const e=C(Nt.additionalStyles,o.additionalStyles);return t=>(ct(t,{clickable:!0,additionalStyles:e}),M(t))}function $(o){return jt()(o)}const At={fontUrl:"https://fonts.gstatic.com/s/materialicons/v126/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2"};function Ft(o=At){return e=>{const t="exio-icon-font",n=document.getElementById(t),r=n||document.createElement("style");return r.id=t,r.innerHTML=`
      @font-face {
        font-family: 'Material Icons';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('${o.fontUrl}') format('woff2');
      }
    `,n||document.head.appendChild(r),e.style.setProperty("font-family","Material Icons","important"),M(e)}}function J(o){return Ft()(o)}const Gt={fillBody:!0,additionalStyles:{fontFamily:"Segoe UI, Frutiger, Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif",backgroundColor:"black",position:"absolute",minWidth:"100%",minHeight:"100%"}};function qt(o={}){const e=C(Gt,o);return t=>{if(v(t,e.additionalStyles),e.fillBody){v(document.body,{padding:"0",margin:"0",width:"100%",height:"100%"});const n="exio-body",r=document.getElementById(n)||document.createElement("style");r.id=n,r.innerHTML=`
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
      `,document.head.appendChild(r)}return M(t)}}function Jt(o){return qt()(o)}function Ut(o){let e,t,n,r,i,a,p,g,d,b,x,f,_,h,w,y,k,R,E,U,L,z,S,I,V,O,X,B,Y,W,P,N,K;return{c(){e=s("div"),t=s("div"),n=s("button"),n.textContent="Clickable Button",r=m(),i=s("button"),i.textContent="Clickable Button",a=m(),p=s("button"),p.textContent="Clickable Button",g=m(),d=s("div"),b=s("button"),b.textContent="send",x=m(),f=s("button"),f.textContent="send",_=m(),h=s("button"),h.textContent="send",w=m(),y=s("div"),k=s("button"),k.textContent="Tile Button",R=m(),E=s("button"),E.textContent="Tile Button",U=m(),L=s("button"),L.textContent="Tile Button",z=m(),S=s("div"),I=s("div"),I.textContent="Tile Item",V=m(),O=s("div"),O.textContent="Tile Item",X=m(),B=s("div"),B.textContent="Tile Item",Y=m(),W=s("div"),P=s("input"),c(n,"background-color","var(--gray-fill)"),c(i,"background-color","var(--blue-accent)"),T(t,"class","block svelte-14i7bny"),c(b,"background-color","var(--gray-fill)"),c(f,"background-color","var(--blue-accent)"),T(d,"class","block svelte-14i7bny"),c(k,"width","150px"),c(k,"height","150px"),c(k,"background-color","var(--gray-fill)"),c(E,"width","300px"),c(E,"height","150px"),c(E,"background-color","var(--blue-accent)"),c(L,"width","150px"),c(L,"height","150px"),T(y,"class","block svelte-14i7bny"),c(I,"width","200px"),c(I,"height","100px"),c(I,"background-color","var(--gray-fill)"),c(O,"width","200px"),c(O,"height","100px"),c(O,"background-color","var(--blue-accent)"),c(B,"width","200px"),c(B,"height","100px"),T(S,"class","block svelte-14i7bny"),T(W,"class","block svelte-14i7bny")},m(j,pt){ot(j,e,pt),l(e,t),l(t,n),l(t,r),l(t,i),l(t,a),l(t,p),l(e,g),l(e,d),l(d,b),l(d,x),l(d,f),l(d,_),l(d,h),l(e,w),l(e,y),l(y,k),l(y,R),l(y,E),l(y,U),l(y,L),l(e,z),l(e,S),l(S,I),l(S,V),l(S,O),l(S,X),l(S,B),l(e,Y),l(e,W),l(W,P),N||(K=[u($.call(null,n)),u($.call(null,i)),u($.call(null,p)),u($.call(null,b)),u(J.call(null,b)),u($.call(null,f)),u(J.call(null,f)),u($.call(null,h)),u(J.call(null,h)),u($.call(null,k)),u($.call(null,E)),u($.call(null,L)),u(q.call(null,I)),u(q.call(null,O)),u(q.call(null,B)),u(Ht.call(null,P)),u(Jt.call(null,e))],N=!0)},p:F,i:F,o:F,d(j){j&&rt(e),N=!1,$t(K)}}}class zt extends tt{constructor(e){super();et(this,e,null,Ut,nt,{})}}function ft(o){let e,t;return e=new zt({}),{c(){wt(e.$$.fragment)},m(n,r){St(e,n,r),t=!0},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){G(e.$$.fragment,n),t=!1},d(n){_t(e,n)}}}function Vt(o){let e,t,n=!o[0]&&ft();return{c(){n&&n.c(),e=Et()},m(r,i){n&&n.m(r,i),ot(r,e,i),t=!0},p(r,[i]){r[0]?n&&(Ct(),G(n,1,1,()=>{n=null}),It()):n?i&1&&H(n,1):(n=ft(),n.c(),H(n,1),n.m(e.parentNode,e))},i(r){t||(H(n),t=!0)},o(r){G(n),t=!1},d(r){n&&n.d(r),r&&rt(e)}}}function Xt(o,e,t){let n;return Ot(o,Lt,r=>t(0,n=r)),[n]}class Yt extends tt{constructor(e){super();et(this,e,Xt,Vt,nt,{})}}new Yt({target:document.getElementById("app")});
