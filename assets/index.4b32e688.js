var Ot=Object.defineProperty,Lt=Object.defineProperties;var Bt=Object.getOwnPropertyDescriptors;var ut=Object.getOwnPropertySymbols;var Tt=Object.prototype.hasOwnProperty,Rt=Object.prototype.propertyIsEnumerable;var ft=(o,e,t)=>e in o?Ot(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,G=(o,e)=>{for(var t in e||(e={}))Tt.call(e,t)&&ft(o,t,e[t]);if(ut)for(var t of ut(e))Rt.call(e,t)&&ft(o,t,e[t]);return o},z=(o,e)=>Lt(o,Bt(e));import{y as jt,$ as Mt,I as Wt,S as pt,i as mt,s as ht,e as s,a as u,b as r,c as H,d as bt,f as l,g as c,n as Y,h as gt,r as Ft,j as At,m as Dt,t as J,k as V,l as Ht,o as Pt,p as Nt,q as Gt,u as qt,v as zt}from"./vendor.80efb8ea.js";const Jt=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}};Jt();const Ut="modulepreload",yt={},Xt="/exio/",Yt=function(e,t){return!t||t.length===0?e():Promise.all(t.map(n=>{if(n=`${Xt}${n}`,n in yt)return;yt[n]=!0;const i=n.endsWith(".css"),a=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${a}`))return;const d=document.createElement("link");if(d.rel=i?"stylesheet":Ut,i||(d.as="script",d.crossOrigin=""),d.href=n,document.head.appendChild(d),i)return new Promise((m,h)=>{d.addEventListener("load",m),d.addEventListener("error",h)})})).then(()=>e())};jt("en",()=>Yt(()=>import("./en.9805afb4.js"),[]));Mt({fallbackLocale:"en",initialLocale:Wt()});function C(o,e){const t={};for(const n in o)typeof o[n]=="object"?t[n]=C(o[n],e[n]):t[n]=o[n];if(!e)return t;for(const n in e)(!(n in t)||typeof t[n]!="object")&&(t[n]=e[n]);return t}function K(o=10){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let t="";for(let n=0;n<o;n++){const i=Math.floor(Math.random()*e.length);t+=e.substring(i,i+1)}return t}function M(o){return{destroy(){o.remove()}}}function vt(o,e){const{left:t,top:n,width:i,height:a}=o.getBoundingClientRect(),{clientX:d,clientY:m}=e,[h,f]=[d-t,m-n];return{x:h,y:f,width:i,height:a}}function x(o,e,t=!1){for(const n in e)o.style[n]&&t||(o.style[n]=e[n])}const xt={clickable:!0,borderWidth:2,innerHoverRadius:200,outerHoverRadius:200,hoverOpacity:.3,hoverBorderOpacity:.7,clickDegrees:5,clickPerspective:5,transitionDuration:.6,clickScale:5,hoverRGB:"255, 255, 255",additionalStyles:{display:"inline-flex",alignItems:"center",justifyContent:"center",color:"white",fontFamily:"inherit",fontSize:"1.1rem",backgroundColor:"transparent",padding:void 0}};function Q(o,e){const t=C(xt,e);console.log(JSON.stringify(t,null,2),JSON.stringify(e,null,2),JSON.stringify(xt,null,2)),x(o,t.additionalStyles,!0);const n=`rgba(${t.hoverRGB}, 0.3)`,i={outline:"none",border:`${t.borderWidth}px solid transparent`,backgroundPosition:`-${t.borderWidth}px -${t.borderWidth}px`,backgroundSize:`
      calc(100% + ${t.borderWidth*2}px)
      calc(100% + ${t.borderWidth*2}px)
    `,backgroundRepeat:"no-repeat",transformOrigin:"center center"};x(o,i);let a="none",d=!1,m=!1;o.addEventListener("mouseenter",()=>{m=!0;const h=f=>{const{x:b,y:k,width:p,height:B}=vt(o,f),g=Math.max(p,B)*t.innerHoverRadius/100,E=Math.max(p,B)*t.outerHoverRadius/100;a=`
        radial-gradient(
          ${E}px ${E}px at ${b}px ${k}px,
          rgba(${t.hoverRGB}, ${t.hoverBorderOpacity}),
          ${n}
        ) 9 / ${t.borderWidth}px / 0px stretch
      `,!d&&x(o,{backgroundImage:`
          radial-gradient(
            ${g}px ${g}px at ${b}px ${k}px,
            rgba(${t.hoverRGB}, ${t.hoverOpacity}) 0%,
            rgba(${t.hoverRGB}, 0.0) 100%
          )
        `,borderImage:a})};window.addEventListener("mousemove",h),o.addEventListener("mouseleave",()=>{m=!1,window.removeEventListener("mousemove",h),d||x(o,{borderImage:"none",backgroundImage:"none"})})}),t.clickable&&o.addEventListener("mousedown",h=>{d=!0;const{x:f,y:b,width:k,height:p}=vt(o,h),[B,g]=[2*(f/k)-1,2*(b/p)-1],E=t.clickPerspective*Math.min(k,p),y="center center",$=1-t.clickScale/Math.max(k,p);x(o,{transform:`
          perspective(${E}px)
          rotateX(${-g*t.clickDegrees}deg)
          rotateY(${B*t.clickDegrees}deg)
          scale(${$})
        `,transition:"0s",transformOrigin:y,borderImage:"none"});const P=()=>{d=!1,x(o,{transform:`perspective(${E}px)`,transition:`transform ${t.transitionDuration}s`,borderImage:a}),m||x(o,{borderImage:"none",backgroundImage:"none"}),window.removeEventListener("mouseup",P)};window.addEventListener("mouseup",P)})}const kt={activeFilter:"grayscale(100%) brightness(75%)",uncheckedColor:"transparent",additionalStyles:{}},Vt=z(G({},kt),{transitionDuration:.2,thumbColor:"white",additionalStyles:C(kt.additionalStyles,{outline:"none",webkitAppearance:"none",width:"2.75rem",height:"1.25rem",position:"relative",display:"inline-flex",alignItems:"center",justifyContent:"center",borderWidth:"2px",overflow:"visible"})});function Kt(o={}){const e=C(Vt,o);return t=>{t.type="checkbox",Q(t,{borderWidth:0});const n=K(),i=document.getElementById(n)||document.createElement("style");return i.id=n,t.classList.add(n),i.innerHTML+=`
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
    `,document.body.appendChild(i),x(t,z(G({},e.additionalStyles),{borderRadius:e.additionalStyles.height,border:`${e.additionalStyles.borderWidth} solid ${e.thumbColor}`})),M(t)}}function $t(o){return Kt()(o)}const wt={innerHoverRadius:0,additionalStyles:{}};function Qt(o={}){const e=C(wt,o);return t=>(Q(t,G({clickable:!1},e)),M(t))}function W(o){return Qt()(o)}const Zt=z(G({},wt),{additionalStyles:{padding:"0.3rem 0.6rem",backgroundColor:"transparent"}});function te(o={}){const e=C(Zt.additionalStyles,o.additionalStyles);return t=>(Q(t,{clickable:!0,additionalStyles:e}),M(t))}function I(o){return te()(o)}const ee={fontUrl:"https://fonts.gstatic.com/s/materialicons/v126/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2"};function ne(o=ee){return e=>{const t="exio-icon-font",n=document.getElementById(t),i=n||document.createElement("style");return i.id=t,i.innerHTML+=`
      @font-face {
        font-family: 'Material Icons';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('${o.fontUrl}') format('woff2');
      }
    `,n||document.body.appendChild(i),e.style.setProperty("font-family","Material Icons","important"),M(e)}}function Z(o){return ne()(o)}const oe={fillBody:!0,additionalStyles:{fontFamily:"Segoe UI, Frutiger, Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif",backgroundColor:"black",position:"absolute",minWidth:"100%",minHeight:"100%"}};function ie(o={}){const e=C(oe,o);return t=>{if(x(t,e.additionalStyles),e.fillBody){x(document.body,{padding:"0",margin:"0",width:"100%",height:"100%"});const n="exio-body",i=document.getElementById(n)||document.createElement("style");i.id=n,i.innerHTML+=`
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
      `,document.body.appendChild(i)}return M(t)}}function le(o){return ie()(o)}const St={duration:.3};function re(o={}){const e=C(St,o);return t=>{const n=K(),i=document.getElementById(n)||document.createElement("style");return i.id=n,t.classList.add(n),i.innerHTML+=`
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
    `,document.body.appendChild(i),M(t)}}function Ct(o){return re()(o)}function ae(o={}){const e=C(St,o);return t=>{const n=K(),i=document.getElementById(n)||document.createElement("style");return i.id=n,t.classList.add(n),i.innerHTML+=`
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
    `,document.body.appendChild(i),M(t)}}function It(o){return ae()(o)}function ce(o){let e,t,n,i,a,d,m,h,f,b,k,p,B,g,E,y,$,P,T,tt,F,et,_,R,nt,j,ot,A,it,D,N,lt,q,rt,v,O,at,L,ct,w,st,S,U,dt;return{c(){e=s("div"),t=s("div"),n=s("button"),n.textContent="Clickable Button",i=u(),a=s("button"),a.textContent="Clickable Button",d=u(),m=s("button"),m.textContent="Clickable Button",h=u(),f=s("div"),b=s("button"),b.textContent="send",k=u(),p=s("button"),p.textContent="send",B=u(),g=s("button"),g.textContent="send",E=u(),y=s("div"),$=s("button"),$.textContent="Tile Button",P=u(),T=s("button"),T.textContent="Tile Button",tt=u(),F=s("button"),F.textContent="Tile Button",et=u(),_=s("div"),R=s("div"),R.textContent="Tile Item",nt=u(),j=s("div"),j.textContent="Tile Item",ot=u(),A=s("div"),A.textContent="Tile Item",it=u(),D=s("div"),N=s("input"),lt=u(),q=s("input"),rt=u(),v=s("div"),O=s("div"),O.textContent="Tile Item",at=u(),L=s("div"),L.textContent="Tile Item",ct=u(),w=s("div"),w.textContent="Tile Item",st=u(),S=s("div"),S.textContent="Tile Item",r(n,"background-color","var(--gray-fill)"),r(a,"background-color","var(--blue-accent)"),H(t,"class","block svelte-htfejp"),r(b,"background-color","var(--gray-fill)"),r(p,"background-color","var(--blue-accent)"),H(f,"class","block svelte-htfejp"),r($,"width","150px"),r($,"height","150px"),r($,"background-color","var(--gray-fill)"),r(T,"width","300px"),r(T,"height","150px"),r(T,"background-color","var(--blue-accent)"),r(F,"width","150px"),r(F,"height","150px"),H(y,"class","block svelte-htfejp"),r(R,"width","200px"),r(R,"height","100px"),r(R,"background-color","var(--gray-fill)"),r(j,"width","200px"),r(j,"height","100px"),r(j,"background-color","var(--blue-accent)"),r(A,"width","200px"),r(A,"height","100px"),H(_,"class","block svelte-htfejp"),r(N,"background-color","var(--blue-accent)"),N.checked=!0,q.checked=!0,H(D,"class","block svelte-htfejp"),r(O,"width","200px"),r(O,"height","100px"),r(O,"background-color","var(--gray-fill)"),r(L,"width","200px"),r(L,"height","100px"),r(L,"background-color","var(--blue-accent)"),r(w,"width","200px"),r(w,"height","100px"),r(w,"background-color","var(--gray-fill)"),r(w,"animation-delay","0.5s"),r(S,"width","200px"),r(S,"height","100px"),r(S,"background-color","var(--blue-accent)"),r(S,"animation-delay","0.5s"),H(v,"class","block svelte-htfejp")},m(X,_t){bt(X,e,_t),l(e,t),l(t,n),l(t,i),l(t,a),l(t,d),l(t,m),l(e,h),l(e,f),l(f,b),l(f,k),l(f,p),l(f,B),l(f,g),l(e,E),l(e,y),l(y,$),l(y,P),l(y,T),l(y,tt),l(y,F),l(e,et),l(e,_),l(_,R),l(_,nt),l(_,j),l(_,ot),l(_,A),l(e,it),l(e,D),l(D,N),l(D,lt),l(D,q),l(e,rt),l(e,v),l(v,O),l(v,at),l(v,L),l(v,ct),l(v,w),l(v,st),l(v,S),U||(dt=[c(I.call(null,n)),c(I.call(null,a)),c(I.call(null,m)),c(I.call(null,b)),c(Z.call(null,b)),c(I.call(null,p)),c(Z.call(null,p)),c(I.call(null,g)),c(Z.call(null,g)),c(I.call(null,$)),c(I.call(null,T)),c(I.call(null,F)),c(W.call(null,R)),c(W.call(null,j)),c(W.call(null,A)),c($t.call(null,N)),c($t.call(null,q)),c(W.call(null,O)),c(It.call(null,O)),c(W.call(null,L)),c(Ct.call(null,L)),c(W.call(null,w)),c(It.call(null,w)),c(W.call(null,S)),c(Ct.call(null,S)),c(le.call(null,e))],U=!0)},p:Y,i:Y,o:Y,d(X){X&&gt(e),U=!1,Ft(dt)}}}class se extends pt{constructor(e){super();mt(this,e,null,ce,ht,{})}}function Et(o){let e,t;return e=new se({}),{c(){At(e.$$.fragment)},m(n,i){Dt(e,n,i),t=!0},i(n){t||(J(e.$$.fragment,n),t=!0)},o(n){V(e.$$.fragment,n),t=!1},d(n){Ht(e,n)}}}function de(o){let e,t,n=!o[0]&&Et();return{c(){n&&n.c(),e=Pt()},m(i,a){n&&n.m(i,a),bt(i,e,a),t=!0},p(i,[a]){i[0]?n&&(qt(),V(n,1,1,()=>{n=null}),Nt()):n?a&1&&J(n,1):(n=Et(),n.c(),J(n,1),n.m(e.parentNode,e))},i(i){t||(J(n),t=!0)},o(i){V(n),t=!1},d(i){n&&n.d(i),i&&gt(e)}}}function ue(o,e,t){let n;return Gt(o,zt,i=>t(0,n=i)),[n]}class fe extends pt{constructor(e){super();mt(this,e,ue,de,ht,{})}}new fe({target:document.getElementById("app")});
