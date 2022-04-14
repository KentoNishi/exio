var se=Object.defineProperty,de=Object.defineProperties;var ue=Object.getOwnPropertyDescriptors;var St=Object.getOwnPropertySymbols;var fe=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable;var Bt=(o,t,n)=>t in o?se(o,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[t]=n,Y=(o,t)=>{for(var n in t||(t={}))fe.call(t,n)&&Bt(o,n,t[n]);if(St)for(var n of St(t))pe.call(t,n)&&Bt(o,n,t[n]);return o},K=(o,t)=>de(o,ue(t));import{y as me,$ as he,I as be,S as Et,i as Ot,s as Lt,e as s,a as u,b as r,c as P,d as rt,f as l,g as c,l as ge,n as at,h as ct,r as ye,t as xe,j as ve,m as ke,k as tt,o as st,p as _e,q as $e,u as we,v as Ie,w as Ce,x as Se}from"./vendor.5aa4192a.js";const Be=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))e(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&e(d)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function e(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}};Be();const Ee="modulepreload",Tt={},Oe="/exio/",Le=function(t,n){return!n||n.length===0?t():Promise.all(n.map(e=>{if(e=`${Oe}${e}`,e in Tt)return;Tt[e]=!0;const i=e.endsWith(".css"),a=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${a}`))return;const d=document.createElement("link");if(d.rel=i?"stylesheet":Ee,i||(d.as="script",d.crossOrigin=""),d.href=e,document.head.appendChild(d),i)return new Promise((f,m)=>{d.addEventListener("load",f),d.addEventListener("error",m)})})).then(()=>t())};me("en",()=>Le(()=>import("./en.9805afb4.js"),[]));he({fallbackLocale:"en",initialLocale:be()});function _(o,t){const n={};for(const e in o)typeof o[e]=="object"?n[e]=_(o[e],t[e]):n[e]=o[e];if(!t)return n;for(const e in t)(!(e in n)||typeof n[e]!="object")&&(n[e]=t[e]);return n}function et(o=10){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let n="";for(let e=0;e<o;e++){const i=Math.floor(Math.random()*t.length);n+=t.substring(i,i+1)}return n}function A(o){return{destroy(){o.remove()}}}function At(o,t){const{left:n,top:e,width:i,height:a}=o.getBoundingClientRect(),{clientX:d,clientY:f}=t,[m,y]=[d-n,f-e];return{x:m,y,width:i,height:a}}function $(o,t,n=!1){for(const e in t)o.style[e]&&n||(o.style[e]=t[e])}const Te={clickable:!0,borderWidth:2,innerHoverRadius:500,outerHoverRadius:250,hoverOpacity:.3,hoverBorderOpacity:.7,clickDegrees:5,clickPerspective:2.5,transitionDuration:.6,clickScale:.975,hoverRGB:"255, 255, 255",additionalStyles:{display:"inline-flex",alignItems:"center",justifyContent:"center",color:"white",fontFamily:"inherit",fontSize:"1.1rem",backgroundColor:"transparent",padding:void 0}};function dt(o,t){const n=_(Te,t);$(o,n.additionalStyles,!0);const e=`rgba(${n.hoverRGB}, 0.3)`,i={outline:"none",border:`${n.borderWidth}px solid transparent`,backgroundPosition:`-${n.borderWidth}px -${n.borderWidth}px`,backgroundSize:`
      calc(100% + ${n.borderWidth*2}px)
      calc(100% + ${n.borderWidth*2}px)
    `,backgroundRepeat:"no-repeat",transformOrigin:"center center"};$(o,i);let a="none",d=!1,f=!1;const m=(y=!1)=>{const S=y?"touchstart":"mouseenter",w=y?"touchend":"mouseleave",F=y?"blur":"mousemove";o.addEventListener(S,x=>{f=!0;const h=R=>{const{x:B,y:v,width:N,height:j}=At(o,"touches"in R?R.touches[0]:R),p=Math.max(N,j)*n.innerHoverRadius/100,b=Math.max(N,j)*n.outerHoverRadius/100;a=`
          radial-gradient(
            ${b}px ${b}px at ${B}px ${v}px,
            rgba(${n.hoverRGB}, ${n.hoverBorderOpacity}),
            ${e}
          ) 9 / ${n.borderWidth}px / 0px stretch
        `,!d&&$(o,{backgroundImage:`
            radial-gradient(
              ${p}px ${p}px at ${B}px ${v}px,
              rgba(${n.hoverRGB}, ${n.hoverOpacity}) 0%,
              rgba(${n.hoverRGB}, 0.0) 100%
            )
          `,borderImage:a})};"touches"in x&&h(x),window.addEventListener(F,h),o.addEventListener(w,()=>{f=!1,window.removeEventListener(F,h),d||$(o,{borderImage:"none",backgroundImage:"none"})})})};if(m(!1),m(!0),n.clickable){const y=(S=!1)=>{const w=S?"touchstart":"mousedown",F=S?"touchend":"mouseup";o.addEventListener(w,x=>{S||x.preventDefault(),d=!0;const{x:h,y:R,width:B,height:v}=At(o,"touches"in x?x.touches[0]:x),[N,j]=[2*(h/B)-1,2*(R/v)-1],p=n.clickPerspective*Math.max(B,v),b="center center",ot=n.clickScale;$(o,{transform:`
          perspective(${p}px)
          rotateX(${-j*n.clickDegrees}deg)
          rotateY(${N*n.clickDegrees}deg)
          scale(${ot})
        `,transition:"0s",transformOrigin:b,borderImage:"none"});const Q=()=>{d=!1,$(o,{transform:`perspective(${p}px)`,transition:`transform ${n.transitionDuration}s`,borderImage:a}),f||$(o,{borderImage:"none",backgroundImage:"none"}),window.removeEventListener(F,Q)};window.addEventListener(F,Q)})};y(!1),y(!0)}}const Ft={activeFilter:"grayscale(100%) brightness(75%)",uncheckedColor:"transparent",additionalStyles:{}},Ae=K(Y({},Ft),{transitionDuration:.2,thumbColor:"white",additionalStyles:_(Ft.additionalStyles,{outline:"none",webkitAppearance:"none",width:"2.75rem",height:"1.25rem",position:"relative",display:"inline-flex",alignItems:"center",justifyContent:"center",borderWidth:"2px",overflow:"visible"})});function Fe(o={}){const t=_(Ae,o);return n=>{n.type="checkbox",dt(n,{borderWidth:0});const e=et(),i=document.getElementById(e)||document.createElement("style");return i.id=e,n.classList.add(e),i.innerHTML+=`
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
    `,document.body.appendChild(i),$(n,K(Y({},t.additionalStyles),{borderRadius:t.additionalStyles.height,border:`${t.additionalStyles.borderWidth} solid ${t.thumbColor}`})),A(n)}}function Rt(o){return Fe()(o)}const jt={innerHoverRadius:0,additionalStyles:{}};function Re(o={}){const t=_(jt,o);return n=>(dt(n,Y({clickable:!1},t)),A(n))}function G(o){return Re()(o)}const je=K(Y({},jt),{additionalStyles:{padding:"0.3rem 0.6rem",backgroundColor:"transparent"}});function Me(o={}){const t=_(je.additionalStyles,o.additionalStyles);return n=>(dt(n,{clickable:!0,additionalStyles:t}),A(n))}function g(o){return Me()(o)}const He={fontUrl:"https://fonts.gstatic.com/s/materialicons/v126/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2"};function We(o=He){return t=>{const n="exio-icon-font",e=document.getElementById(n),i=e||document.createElement("style");return i.id=n,i.innerHTML+=`
      @font-face {
        font-family: 'Material Icons';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('${o.fontUrl}') format('woff2');
      }
    `,e||document.body.appendChild(i),t.style.setProperty("font-family","Material Icons","important"),A(t)}}function nt(o){return We()(o)}const De={fillBody:!0,additionalStyles:{fontFamily:"Segoe UI, Frutiger, Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif",backgroundColor:"black",position:"absolute",minWidth:"100%",minHeight:"100%"}};function Pe(o={}){const t=_(De,o);return n=>{if($(n,t.additionalStyles),t.fillBody){$(document.body,{padding:"0",margin:"0",width:"100%",height:"100%"});const e="exio-body",i=document.getElementById(e)||document.createElement("style");i.id=e,i.innerHTML+=`
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
      `,document.body.appendChild(i)}return A(n)}}function Ge(o){return Pe()(o)}const ut={duration:.3};function Ne(o={}){const t=_(ut,o);return n=>{const e=et(),i=document.getElementById(e)||document.createElement("style");return i.id=e,n.classList.add(e),i.innerHTML+=`
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
    `,document.body.appendChild(i),A(n)}}function Mt(o){return Ne()(o)}function qe(o={}){const t=_(ut,o);return n=>{const e=et(),i=document.getElementById(e)||document.createElement("style");return i.id=e,n.classList.add(e),i.innerHTML+=`
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
    `,document.body.appendChild(i),A(n)}}function Ht(o){return qe()(o)}const ze=K(Y({},ut),{duration:.5,scale:.95});function Ue(o={}){const t=_(ze,o);return n=>{const e=et(),i=document.getElementById(e)||document.createElement("style");return i.id=e,n.classList.add(e),i.innerHTML+=`
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
    `,document.body.appendChild(i),A(n)}}function Xe(o){return Ue()(o)}function Wt(o){let t,n,e,i,a,d,f,m,y,S,w,F,x,h,R,B,v,N,j,p,b,ot,Q,ft,q,Pt,Gt,pt,V,Nt,qt,mt,E,M,zt,ht,H,Ut,bt,z,Xt,gt,O,W,Yt,yt,D,Vt,xt,U,Jt,vt,X,J,Kt,kt,Z,Qt,_t,k,L,Zt,te,$t,T,ee,ne,wt,I,oe,ie,It,C,le,re,ae,it,Ct;return{c(){t=s("div"),n=s("div"),e=s("button"),e.textContent="refresh",d=u(),f=s("div"),m=s("button"),m.textContent="Clickable Button",S=u(),w=s("button"),w.textContent="Horizontally Long Button with More Text",x=u(),h=s("button"),h.textContent="Clickable Button",B=u(),v=s("button"),v.textContent="Clickable Button",j=u(),p=s("div"),b=s("button"),b.textContent="send",ft=u(),q=s("button"),q.textContent="send",pt=u(),V=s("button"),V.textContent="send",mt=u(),E=s("div"),M=s("button"),M.textContent="Tile Button",ht=u(),H=s("button"),H.textContent="Tile Button",bt=u(),z=s("button"),z.textContent="Tile Button",gt=u(),O=s("div"),W=s("div"),W.textContent="Tile Item",yt=u(),D=s("div"),D.textContent="Tile Item",xt=u(),U=s("div"),U.textContent="Tile Item",vt=u(),X=s("div"),J=s("input"),kt=u(),Z=s("input"),_t=u(),k=s("div"),L=s("div"),L.textContent="Tile Item",$t=u(),T=s("div"),T.textContent="Tile Item",wt=u(),I=s("div"),I.textContent="Tile Item",It=u(),C=s("div"),C.textContent="Tile Item",r(e,"background-color","var(--gray-fill)"),P(n,"class","block svelte-htfejp"),r(m,"background-color","var(--gray-fill)"),r(w,"background-color","var(--gray-fill)"),r(h,"background-color","var(--blue-accent)"),P(f,"class","block svelte-htfejp"),r(b,"background-color","var(--gray-fill)"),r(q,"background-color","var(--blue-accent)"),P(p,"class","block svelte-htfejp"),r(M,"width","150px"),r(M,"height","150px"),r(M,"background-color","var(--gray-fill)"),r(H,"width","300px"),r(H,"height","150px"),r(H,"background-color","var(--blue-accent)"),r(z,"width","150px"),r(z,"height","150px"),P(E,"class","block svelte-htfejp"),r(W,"width","200px"),r(W,"height","100px"),r(W,"background-color","var(--gray-fill)"),r(D,"width","200px"),r(D,"height","100px"),r(D,"background-color","var(--blue-accent)"),r(U,"width","200px"),r(U,"height","100px"),P(O,"class","block svelte-htfejp"),r(J,"background-color","var(--blue-accent)"),J.checked=!0,Z.checked=!0,P(X,"class","block svelte-htfejp"),r(L,"width","200px"),r(L,"height","100px"),r(L,"background-color","var(--gray-fill)"),r(T,"width","200px"),r(T,"height","100px"),r(T,"background-color","var(--blue-accent)"),r(I,"width","200px"),r(I,"height","100px"),r(I,"background-color","var(--gray-fill)"),r(I,"animation-delay","0.5s"),r(C,"width","200px"),r(C,"height","100px"),r(C,"background-color","var(--blue-accent)"),r(C,"animation-delay","0.5s"),P(k,"class","block svelte-htfejp")},m(lt,ce){rt(lt,t,ce),l(t,n),l(n,e),l(t,d),l(t,f),l(f,m),l(f,S),l(f,w),l(f,x),l(f,h),l(f,B),l(f,v),l(t,j),l(t,p),l(p,b),l(p,ft),l(p,q),l(p,pt),l(p,V),l(t,mt),l(t,E),l(E,M),l(E,ht),l(E,H),l(E,bt),l(E,z),l(t,gt),l(t,O),l(O,W),l(O,yt),l(O,D),l(O,xt),l(O,U),l(t,vt),l(t,X),l(X,J),l(X,kt),l(X,Z),l(t,_t),l(t,k),l(k,L),l(k,$t),l(k,T),l(k,wt),l(k,I),l(k,It),l(k,C),it||(Ct=[c(i=g.call(null,e)),ge(e,"click",o[1]),c(a=nt.call(null,e)),c(y=g.call(null,m)),c(F=g.call(null,w)),c(R=g.call(null,h)),c(N=g.call(null,v)),c(ot=g.call(null,b)),c(Q=nt.call(null,b)),c(Pt=g.call(null,q)),c(Gt=nt.call(null,q)),c(Nt=g.call(null,V)),c(qt=nt.call(null,V)),c(zt=g.call(null,M)),c(Ut=g.call(null,H)),c(Xt=g.call(null,z)),c(Yt=G.call(null,W)),c(Vt=G.call(null,D)),c(Jt=G.call(null,U)),c(Kt=Rt.call(null,J)),c(Qt=Rt.call(null,Z)),c(Zt=G.call(null,L)),c(te=Ht.call(null,L)),c(ee=G.call(null,T)),c(ne=Mt.call(null,T)),c(oe=G.call(null,I)),c(ie=Ht.call(null,I)),c(le=G.call(null,C)),c(re=Mt.call(null,C)),c(ae=Xe.call(null,t))],it=!0)},p:at,d(lt){lt&&ct(t),it=!1,ye(Ct)}}}function Ye(o){let t,n,e,i=o[0]&&Wt(o);return{c(){t=s("div"),i&&i.c()},m(a,d){rt(a,t,d),i&&i.m(t,null),n||(e=c(Ge.call(null,t)),n=!0)},p(a,[d]){a[0]?i?i.p(a,d):(i=Wt(a),i.c(),i.m(t,null)):i&&(i.d(1),i=null)},i:at,o:at,d(a){a&&ct(t),i&&i.d(),n=!1,e()}}}function Ve(o,t,n){let e=!0;return[e,async()=>{n(0,e=!1),await xe(),n(0,e=!0),window.scrollTo(0,0)}]}class Je extends Et{constructor(t){super();Ot(this,t,Ve,Ye,Lt,{})}}function Dt(o){let t,n;return t=new Je({}),{c(){ve(t.$$.fragment)},m(e,i){ke(t,e,i),n=!0},i(e){n||(tt(t.$$.fragment,e),n=!0)},o(e){st(t.$$.fragment,e),n=!1},d(e){_e(t,e)}}}function Ke(o){let t,n,e=!o[0]&&Dt();return{c(){e&&e.c(),t=$e()},m(i,a){e&&e.m(i,a),rt(i,t,a),n=!0},p(i,[a]){i[0]?e&&(Ce(),st(e,1,1,()=>{e=null}),we()):e?a&1&&tt(e,1):(e=Dt(),e.c(),tt(e,1),e.m(t.parentNode,t))},i(i){n||(tt(e),n=!0)},o(i){st(e),n=!1},d(i){e&&e.d(i),i&&ct(t)}}}function Qe(o,t,n){let e;return Ie(o,Se,i=>n(0,e=i)),[e]}class Ze extends Et{constructor(t){super();Ot(this,t,Qe,Ke,Lt,{})}}new Ze({target:document.getElementById("app")});
