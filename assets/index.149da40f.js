var re=Object.defineProperty,ae=Object.defineProperties;var ce=Object.getOwnPropertyDescriptors;var wt=Object.getOwnPropertySymbols;var se=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable;var It=(o,t,n)=>t in o?re(o,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[t]=n,q=(o,t)=>{for(var n in t||(t={}))se.call(t,n)&&It(o,n,t[n]);if(wt)for(var n of wt(t))de.call(t,n)&&It(o,n,t[n]);return o},Y=(o,t)=>ae(o,ce(t));import{y as ue,$ as fe,I as pe,S as St,i as Ct,s as Et,e as s,a as u,b as r,c as M,d as it,f as l,g as c,l as me,n as lt,h as rt,r as he,t as be,j as ge,m as ye,k as K,o as at,p as xe,q as ve,u as ke,v as _e,w as $e,x as we}from"./vendor.5aa4192a.js";const Ie=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))e(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&e(d)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function e(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}};Ie();const Se="modulepreload",Bt={},Ce="/exio/",Ee=function(t,n){return!n||n.length===0?t():Promise.all(n.map(e=>{if(e=`${Ce}${e}`,e in Bt)return;Bt[e]=!0;const i=e.endsWith(".css"),a=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${a}`))return;const d=document.createElement("link");if(d.rel=i?"stylesheet":Se,i||(d.as="script",d.crossOrigin=""),d.href=e,document.head.appendChild(d),i)return new Promise((f,p)=>{d.addEventListener("load",f),d.addEventListener("error",p)})})).then(()=>t())};ue("en",()=>Ee(()=>import("./en.9805afb4.js"),[]));fe({fallbackLocale:"en",initialLocale:pe()});function y(o,t){const n={};for(const e in o)typeof o[e]=="object"?n[e]=y(o[e],t[e]):n[e]=o[e];if(!t)return n;for(const e in t)(!(e in n)||typeof n[e]!="object")&&(n[e]=t[e]);return n}function Q(o=10){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let n="";for(let e=0;e<o;e++){const i=Math.floor(Math.random()*t.length);n+=t.substring(i,i+1)}return n}function O(o){return{destroy(){o.remove()}}}function Ot(o,t){const{left:n,top:e,width:i,height:a}=o.getBoundingClientRect(),{clientX:d,clientY:f}=t,[p,L]=[d-n,f-e];return{x:p,y:L,width:i,height:a}}function x(o,t,n=!1){for(const e in t)o.style[e]&&n||(o.style[e]=t[e])}const Be={clickable:!0,borderWidth:2,innerHoverRadius:200,outerHoverRadius:200,hoverOpacity:.3,hoverBorderOpacity:.7,clickDegrees:5,clickPerspective:5,transitionDuration:.6,clickScale:5,hoverRGB:"255, 255, 255",additionalStyles:{display:"inline-flex",alignItems:"center",justifyContent:"center",color:"white",fontFamily:"inherit",fontSize:"1.1rem",backgroundColor:"transparent",padding:void 0}};function ct(o,t){const n=y(Be,t);x(o,n.additionalStyles,!0);const e=`rgba(${n.hoverRGB}, 0.3)`,i={outline:"none",border:`${n.borderWidth}px solid transparent`,backgroundPosition:`-${n.borderWidth}px -${n.borderWidth}px`,backgroundSize:`
      calc(100% + ${n.borderWidth*2}px)
      calc(100% + ${n.borderWidth*2}px)
    `,backgroundRepeat:"no-repeat",transformOrigin:"center center"};x(o,i);let a="none",d=!1,f=!1;if(o.addEventListener("mouseenter",()=>{f=!0;const p=L=>{const{x:w,y:m,width:D,height:T}=Ot(o,L),h=Math.max(D,T)*n.innerHoverRadius/100,I=Math.max(D,T)*n.outerHoverRadius/100;a=`
        radial-gradient(
          ${I}px ${I}px at ${w}px ${m}px,
          rgba(${n.hoverRGB}, ${n.hoverBorderOpacity}),
          ${e}
        ) 9 / ${n.borderWidth}px / 0px stretch
      `,!d&&x(o,{backgroundImage:`
          radial-gradient(
            ${h}px ${h}px at ${w}px ${m}px,
            rgba(${n.hoverRGB}, ${n.hoverOpacity}) 0%,
            rgba(${n.hoverRGB}, 0.0) 100%
          )
        `,borderImage:a})};window.addEventListener("mousemove",p),o.addEventListener("mouseleave",()=>{f=!1,window.removeEventListener("mousemove",p),d||x(o,{borderImage:"none",backgroundImage:"none"})})}),n.clickable){const p=(L="mousedown",w="mouseup")=>{o.addEventListener(L,m=>{m.preventDefault(),d=!0;const{x:D,y:T,width:h,height:I}=Ot(o,"touches"in m?m.touches[0]:m),[V,b]=[2*(D/h)-1,2*(T/I)-1],k=n.clickPerspective*Math.min(h,I),tt="center center",et=1-n.clickScale/Math.max(h,I);x(o,{transform:`
          perspective(${k}px)
          rotateX(${-b*n.clickDegrees}deg)
          rotateY(${V*n.clickDegrees}deg)
          scale(${et})
        `,transition:"0s",transformOrigin:tt,borderImage:"none"});const z=()=>{d=!1,x(o,{transform:`perspective(${k}px)`,transition:`transform ${n.transitionDuration}s`,borderImage:a}),f||x(o,{borderImage:"none",backgroundImage:"none"}),window.removeEventListener(w,z)};window.addEventListener(w,z)})};p("mousedown","mouseup"),p("touchstart","touchend")}}const Lt={activeFilter:"grayscale(100%) brightness(75%)",uncheckedColor:"transparent",additionalStyles:{}},Oe=Y(q({},Lt),{transitionDuration:.2,thumbColor:"white",additionalStyles:y(Lt.additionalStyles,{outline:"none",webkitAppearance:"none",width:"2.75rem",height:"1.25rem",position:"relative",display:"inline-flex",alignItems:"center",justifyContent:"center",borderWidth:"2px",overflow:"visible"})});function Le(o={}){const t=y(Oe,o);return n=>{n.type="checkbox",ct(n,{borderWidth:0});const e=Q(),i=document.getElementById(e)||document.createElement("style");return i.id=e,n.classList.add(e),i.innerHTML+=`
      .${e}::after {
        content: '';
        width: calc(${t.additionalStyles.height} / 2);
        height: calc(${t.additionalStyles.height} / 2);
        transform: translateX(calc(
          100% - ${t.additionalStyles.width} / 2
        ));
        top: 0px;
        left: 0px;
        background-color: ${t.thumbColor};
        border-radius: 50%;
        transition: transform ${t.transitionDuration}s;
      }
      .${e}:checked::after {
        transform: translateX(calc(
          ${t.additionalStyles.width} / 2 - 100%
        ));
      }
      .${e}:active {
        filter: ${t.activeFilter};
      }
      .${e}:not(:checked):not(:active) {
        background-color: ${t.uncheckedColor} !important;
      }
      .${e}::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border: ${t.additionalStyles.borderWidth} solid ${t.thumbColor};
        border-radius: inherit;
        z-index: 100;
      }
    `,document.body.appendChild(i),x(n,Y(q({},t.additionalStyles),{borderRadius:t.additionalStyles.height,border:`${t.additionalStyles.borderWidth} solid ${t.thumbColor}`})),O(n)}}function Tt(o){return Le()(o)}const At={innerHoverRadius:0,additionalStyles:{}};function Te(o={}){const t=y(At,o);return n=>(ct(n,q({clickable:!1},t)),O(n))}function W(o){return Te()(o)}const Ae=Y(q({},At),{additionalStyles:{padding:"0.3rem 0.6rem",backgroundColor:"transparent"}});function Fe(o={}){const t=y(Ae.additionalStyles,o.additionalStyles);return n=>(ct(n,{clickable:!0,additionalStyles:t}),O(n))}function v(o){return Fe()(o)}const Re={fontUrl:"https://fonts.gstatic.com/s/materialicons/v126/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2"};function je(o=Re){return t=>{const n="exio-icon-font",e=document.getElementById(n),i=e||document.createElement("style");return i.id=n,i.innerHTML+=`
      @font-face {
        font-family: 'Material Icons';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('${o.fontUrl}') format('woff2');
      }
    `,e||document.body.appendChild(i),t.style.setProperty("font-family","Material Icons","important"),O(t)}}function Z(o){return je()(o)}const Me={fillBody:!0,additionalStyles:{fontFamily:"Segoe UI, Frutiger, Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif",backgroundColor:"black",position:"absolute",minWidth:"100%",minHeight:"100%"}};function We(o={}){const t=y(Me,o);return n=>{if(x(n,t.additionalStyles),t.fillBody){x(document.body,{padding:"0",margin:"0",width:"100%",height:"100%"});const e="exio-body",i=document.getElementById(e)||document.createElement("style");i.id=e,i.innerHTML+=`
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
      `,document.body.appendChild(i)}return O(n)}}function De(o){return We()(o)}const st={duration:.3};function He(o={}){const t=y(st,o);return n=>{const e=Q(),i=document.getElementById(e)||document.createElement("style");return i.id=e,n.classList.add(e),i.innerHTML+=`
      .${e} {
        opacity: 0;
        animation: exio-fly-transition ${t.duration}s;
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
    `,document.body.appendChild(i),O(n)}}function Ft(o){return He()(o)}function Pe(o={}){const t=y(st,o);return n=>{const e=Q(),i=document.getElementById(e)||document.createElement("style");return i.id=e,n.classList.add(e),i.innerHTML+=`
      .${e} {
        opacity: 0;
        animation: exio-fade-transition ${t.duration}s;
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
    `,document.body.appendChild(i),O(n)}}function Rt(o){return Pe()(o)}const Ge=Y(q({},st),{duration:.5,scale:.95});function Ne(o={}){const t=y(Ge,o);return n=>{const e=Q(),i=document.getElementById(e)||document.createElement("style");return i.id=e,n.classList.add(e),i.innerHTML+=`
      .${e} {
        opacity: 0;
        animation: exio-open-transition ${t.duration}s;
        animation-fill-mode: forwards;
      }
      @keyframes exio-open-transition {
        from {
          opacity: 0;
          transform: scale(${t.scale});
        }
        to {
          opacity: 1;
          scale: 1;
        }
      }
    `,document.body.appendChild(i),O(n)}}function qe(o){return Ne()(o)}function jt(o){let t,n,e,i,a,d,f,p,L,w,m,D,T,h,I,V,b,k,tt,et,z,H,Wt,Dt,dt,U,Ht,Pt,ut,S,A,Gt,ft,F,Nt,pt,P,qt,mt,C,R,zt,ht,j,Ut,bt,G,Xt,gt,N,X,Yt,yt,J,Vt,xt,g,E,Jt,Kt,vt,B,Qt,Zt,kt,_,te,ee,_t,$,ne,oe,ie,nt,$t;return{c(){t=s("div"),n=s("div"),e=s("button"),e.textContent="refresh",d=u(),f=s("div"),p=s("button"),p.textContent="Clickable Button",w=u(),m=s("button"),m.textContent="Clickable Button",T=u(),h=s("button"),h.textContent="Clickable Button",V=u(),b=s("div"),k=s("button"),k.textContent="send",z=u(),H=s("button"),H.textContent="send",dt=u(),U=s("button"),U.textContent="send",ut=u(),S=s("div"),A=s("button"),A.textContent="Tile Button",ft=u(),F=s("button"),F.textContent="Tile Button",pt=u(),P=s("button"),P.textContent="Tile Button",mt=u(),C=s("div"),R=s("div"),R.textContent="Tile Item",ht=u(),j=s("div"),j.textContent="Tile Item",bt=u(),G=s("div"),G.textContent="Tile Item",gt=u(),N=s("div"),X=s("input"),yt=u(),J=s("input"),xt=u(),g=s("div"),E=s("div"),E.textContent="Tile Item",vt=u(),B=s("div"),B.textContent="Tile Item",kt=u(),_=s("div"),_.textContent="Tile Item",_t=u(),$=s("div"),$.textContent="Tile Item",r(e,"background-color","var(--gray-fill)"),M(n,"class","block svelte-htfejp"),r(p,"background-color","var(--gray-fill)"),r(m,"background-color","var(--blue-accent)"),M(f,"class","block svelte-htfejp"),r(k,"background-color","var(--gray-fill)"),r(H,"background-color","var(--blue-accent)"),M(b,"class","block svelte-htfejp"),r(A,"width","150px"),r(A,"height","150px"),r(A,"background-color","var(--gray-fill)"),r(F,"width","300px"),r(F,"height","150px"),r(F,"background-color","var(--blue-accent)"),r(P,"width","150px"),r(P,"height","150px"),M(S,"class","block svelte-htfejp"),r(R,"width","200px"),r(R,"height","100px"),r(R,"background-color","var(--gray-fill)"),r(j,"width","200px"),r(j,"height","100px"),r(j,"background-color","var(--blue-accent)"),r(G,"width","200px"),r(G,"height","100px"),M(C,"class","block svelte-htfejp"),r(X,"background-color","var(--blue-accent)"),X.checked=!0,J.checked=!0,M(N,"class","block svelte-htfejp"),r(E,"width","200px"),r(E,"height","100px"),r(E,"background-color","var(--gray-fill)"),r(B,"width","200px"),r(B,"height","100px"),r(B,"background-color","var(--blue-accent)"),r(_,"width","200px"),r(_,"height","100px"),r(_,"background-color","var(--gray-fill)"),r(_,"animation-delay","0.5s"),r($,"width","200px"),r($,"height","100px"),r($,"background-color","var(--blue-accent)"),r($,"animation-delay","0.5s"),M(g,"class","block svelte-htfejp")},m(ot,le){it(ot,t,le),l(t,n),l(n,e),l(t,d),l(t,f),l(f,p),l(f,w),l(f,m),l(f,T),l(f,h),l(t,V),l(t,b),l(b,k),l(b,z),l(b,H),l(b,dt),l(b,U),l(t,ut),l(t,S),l(S,A),l(S,ft),l(S,F),l(S,pt),l(S,P),l(t,mt),l(t,C),l(C,R),l(C,ht),l(C,j),l(C,bt),l(C,G),l(t,gt),l(t,N),l(N,X),l(N,yt),l(N,J),l(t,xt),l(t,g),l(g,E),l(g,vt),l(g,B),l(g,kt),l(g,_),l(g,_t),l(g,$),nt||($t=[c(i=v.call(null,e)),me(e,"click",o[1]),c(a=Z.call(null,e)),c(L=v.call(null,p)),c(D=v.call(null,m)),c(I=v.call(null,h)),c(tt=v.call(null,k)),c(et=Z.call(null,k)),c(Wt=v.call(null,H)),c(Dt=Z.call(null,H)),c(Ht=v.call(null,U)),c(Pt=Z.call(null,U)),c(Gt=v.call(null,A)),c(Nt=v.call(null,F)),c(qt=v.call(null,P)),c(zt=W.call(null,R)),c(Ut=W.call(null,j)),c(Xt=W.call(null,G)),c(Yt=Tt.call(null,X)),c(Vt=Tt.call(null,J)),c(Jt=W.call(null,E)),c(Kt=Rt.call(null,E)),c(Qt=W.call(null,B)),c(Zt=Ft.call(null,B)),c(te=W.call(null,_)),c(ee=Rt.call(null,_)),c(ne=W.call(null,$)),c(oe=Ft.call(null,$)),c(ie=qe.call(null,t))],nt=!0)},p:lt,d(ot){ot&&rt(t),nt=!1,he($t)}}}function ze(o){let t,n,e,i=o[0]&&jt(o);return{c(){t=s("div"),i&&i.c()},m(a,d){it(a,t,d),i&&i.m(t,null),n||(e=c(De.call(null,t)),n=!0)},p(a,[d]){a[0]?i?i.p(a,d):(i=jt(a),i.c(),i.m(t,null)):i&&(i.d(1),i=null)},i:lt,o:lt,d(a){a&&rt(t),i&&i.d(),n=!1,e()}}}function Ue(o,t,n){let e=!0;return[e,async()=>{n(0,e=!1),await be(),n(0,e=!0)}]}class Xe extends St{constructor(t){super();Ct(this,t,Ue,ze,Et,{})}}function Mt(o){let t,n;return t=new Xe({}),{c(){ge(t.$$.fragment)},m(e,i){ye(t,e,i),n=!0},i(e){n||(K(t.$$.fragment,e),n=!0)},o(e){at(t.$$.fragment,e),n=!1},d(e){xe(t,e)}}}function Ye(o){let t,n,e=!o[0]&&Mt();return{c(){e&&e.c(),t=ve()},m(i,a){e&&e.m(i,a),it(i,t,a),n=!0},p(i,[a]){i[0]?e&&($e(),at(e,1,1,()=>{e=null}),ke()):e?a&1&&K(e,1):(e=Mt(),e.c(),K(e,1),e.m(t.parentNode,t))},i(i){n||(K(e),n=!0)},o(i){at(e),n=!1},d(i){e&&e.d(i),i&&rt(t)}}}function Ve(o,t,n){let e;return _e(o,we,i=>n(0,e=i)),[e]}class Je extends St{constructor(t){super();Ct(this,t,Ve,Ye,Et,{})}}new Je({target:document.getElementById("app")});
