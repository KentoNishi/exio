var se=Object.defineProperty,ue=Object.defineProperties;var de=Object.getOwnPropertyDescriptors;var Ct=Object.getOwnPropertySymbols;var fe=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable;var Ot=(o,t,e)=>t in o?se(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,Y=(o,t)=>{for(var e in t||(t={}))fe.call(t,e)&&Ot(o,e,t[e]);if(Ct)for(var e of Ct(t))pe.call(t,e)&&Ot(o,e,t[e]);return o},Q=(o,t)=>ue(o,de(t));import{y as me,$ as he,I as be,S as Bt,i as Tt,s as Lt,e as s,a as d,b as r,c as P,d as rt,f as l,g as c,l as ge,n as at,h as ct,r as xe,t as ye,j as ve,m as ke,k as et,o as st,p as _e,q as $e,u as we,v as Ie,w as Se,x as Ce}from"./vendor.5aa4192a.js";const Oe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function e(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=e(i);fetch(i.href,a)}};Oe();const Be="modulepreload",Et={},Te="/exio/",Le=function(t,e){return!e||e.length===0?t():Promise.all(e.map(n=>{if(n=`${Te}${n}`,n in Et)return;Et[n]=!0;const i=n.endsWith(".css"),a=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${a}`))return;const u=document.createElement("link");if(u.rel=i?"stylesheet":Be,i||(u.as="script",u.crossOrigin=""),u.href=n,document.head.appendChild(u),i)return new Promise((f,m)=>{u.addEventListener("load",f),u.addEventListener("error",m)})})).then(()=>t())};me("en",()=>Le(()=>import("./en.9805afb4.js"),[]));he({fallbackLocale:"en",initialLocale:be()});function _(o,t){const e={};for(const n in o)typeof o[n]=="object"?e[n]=_(o[n],t[n]):e[n]=o[n];if(!t)return e;for(const n in t)(!(n in e)||typeof e[n]!="object")&&(e[n]=t[n]);return e}function Ee(o=10){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let e="";for(let n=0;n<o;n++){const i=Math.floor(Math.random()*t.length);e+=t.substring(i,i+1)}return e}function A(o,t){return{destroy(){o.remove(),t&&t()}}}function V(o){const t=Ee(),e=document.getElementById(t)||document.createElement("style");return e.id=t,o.classList.add(t),document.body.appendChild(e),e}function At(o,t){const{left:e,top:n,width:i,height:a}=o.getBoundingClientRect(),{clientX:u,clientY:f}=t,[m,y]=[u-e,f-n];return{x:m,y,width:i,height:a}}function $(o,t,e=!1){for(const n in t)o.style[n]&&e||(o.style[n]=t[n])}const Ae={clickable:!0,borderWidth:2,innerHoverRadius:500,outerHoverRadius:250,hoverOpacity:.3,hoverBorderOpacity:.7,clickDegrees:5,clickPerspective:2.5,transitionDuration:.6,clickScalePixels:5,hoverRGB:"255, 255, 255",additionalStyles:{display:"inline-flex",alignItems:"center",justifyContent:"center",color:"white",fontFamily:"inherit",fontSize:"1.1rem",backgroundColor:"transparent",padding:void 0}};function ut(o,t){const e=_(Ae,t);$(o,e.additionalStyles,!0);const n=`rgba(${e.hoverRGB}, 0.3)`,i={outline:"none",border:`${e.borderWidth}px solid transparent`,backgroundPosition:`-${e.borderWidth}px -${e.borderWidth}px`,backgroundSize:`
      calc(100% + ${e.borderWidth*2}px)
      calc(100% + ${e.borderWidth*2}px)
    `,backgroundRepeat:"no-repeat",transformOrigin:"center center"};$(o,i);let a="none",u=!1,f=!1;const m=(y=!1)=>{const w=y?"touchstart":"mouseenter",I=y?"touchend":"mouseleave",F=y?"touchstart":"mousemove";o.addEventListener(w,v=>{f=!0;const h=M=>{const{x:S,y:b,width:N,height:R}=At(o,"touches"in M?M.touches[0]:M),p=Math.max(N,R)*e.innerHoverRadius/100,g=Math.max(N,R)*e.outerHoverRadius/100;a=`
          radial-gradient(
            ${g}px ${g}px at ${S}px ${b}px,
            rgba(${e.hoverRGB}, ${e.hoverBorderOpacity}),
            ${n}
          ) 9 / ${e.borderWidth}px / 0px stretch
        `,!u&&$(o,{backgroundImage:`
            radial-gradient(
              ${p}px ${p}px at ${S}px ${b}px,
              rgba(${e.hoverRGB}, ${e.hoverOpacity}) 0%,
              rgba(${e.hoverRGB}, 0.0) 100%
            )
          `,borderImage:a})};"touches"in v&&h(v),window.addEventListener(F,h),o.addEventListener(I,()=>{window.removeEventListener(F,h),u||setTimeout(()=>{f||$(o,{borderImage:"none",backgroundImage:"none"})},0)})})};if(m(!1),m(!0),e.clickable){const y=(w=!1)=>{const I=w?"touchstart":"mousedown",F=w?"touchend":"mouseup";o.addEventListener(I,v=>{if(w||v.preventDefault(),u)return;u=!0;const{x:h,y:M,width:S,height:b}=At(o,"touches"in v?v.touches[0]:v),[N,R]=[2*(h/S)-1,2*(M/b)-1],p=e.clickPerspective*Math.max(S,b),g="center center",ot=1-e.clickScalePixels/Math.max(S,b);$(o,{transform:`
            perspective(${p}px)
            rotateX(${-R*e.clickDegrees}deg)
            rotateY(${N*e.clickDegrees}deg)
            scale(${ot})
          `,transition:"0s",transformOrigin:g,borderImage:"none"});const Z=()=>{$(o,{transform:`perspective(${p}px)`,transition:`transform ${e.transitionDuration}s`,borderImage:a}),setTimeout(()=>{u=!1},0),!f&&!w&&$(o,{borderImage:"none",backgroundImage:"none"}),window.removeEventListener(F,Z)};window.addEventListener(F,Z)})};y(!1),y(!0)}}const Ft={activeFilter:"grayscale(100%) brightness(75%)",uncheckedColor:"transparent",additionalStyles:{}},Fe=Q(Y({},Ft),{transitionDuration:.2,thumbColor:"white",additionalStyles:_(Ft.additionalStyles,{outline:"none",webkitAppearance:"none",width:"2.75rem",height:"1.25rem",position:"relative",display:"inline-flex",alignItems:"center",justifyContent:"center",borderWidth:"2px",overflow:"visible"})});function Me(o={}){const t=_(Fe,o);return e=>{e.type="checkbox",ut(e,{borderWidth:0});const n=V(e);return n.innerHTML+=`
      .${n.id}::after {
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
      .${n.id}:checked::after {
        transform: translateX(calc(
          ${t.additionalStyles.width} / 2 - 100%
        ));
      }
      .${n.id}:active {
        filter: ${t.activeFilter};
      }
      .${n.id}:not(:checked):not(:active) {
        background-color: ${t.uncheckedColor} !important;
      }
      .${n.id}::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border: ${t.additionalStyles.borderWidth} solid ${t.thumbColor};
        border-radius: inherit;
        z-index: 100;
      }
    `,$(e,Q(Y({},t.additionalStyles),{borderRadius:t.additionalStyles.height,border:`${t.additionalStyles.borderWidth} solid ${t.thumbColor}`})),A(e,()=>n.remove())}}function Mt(o){return Me()(o)}const Rt={innerHoverRadius:0,additionalStyles:{}};function Re(o={}){const t=_(Rt,o);return e=>(ut(e,Y({clickable:!1},t)),A(e))}function G(o){return Re()(o)}const je=Q(Y({},Rt),{additionalStyles:{padding:"0.3rem 0.6rem",backgroundColor:"transparent"}});function He(o={}){const t=_(je.additionalStyles,o.additionalStyles);return e=>(ut(e,{clickable:!0,additionalStyles:t}),A(e))}function x(o){return He()(o)}const We={fontUrl:"https://fonts.gstatic.com/s/materialicons/v126/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2"};function De(o=We){return t=>{const e=V(t);return e.innerHTML+=`
      @font-face {
        font-family: 'Material Icons';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('${o.fontUrl}') format('woff2');
      }
    `,t.style.setProperty("font-family","Material Icons","important"),A(t,()=>e.remove())}}function nt(o){return De()(o)}const Pe={fillBody:!0,additionalStyles:{fontFamily:"Segoe UI, Frutiger, Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif",backgroundColor:"black",position:"absolute",minWidth:"100%",minHeight:"100%"}};function Ge(o={}){const t=_(Pe,o);return e=>{$(e,t.additionalStyles);let n=null;return t.fillBody&&($(document.body,{padding:"0",margin:"0",width:"100%",height:"100%"}),n=V(e),n.innerHTML+=`
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
      `),A(e,()=>n.remove())}}function Ne(o){return Ge()(o)}const dt={duration:.3};function qe(o={}){const t=_(dt,o);return e=>{const n=V(e);return n.innerHTML+=`
      .${n.id} {
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
    `,A(e,()=>n.remove())}}function jt(o){return qe()(o)}function ze(o={}){const t=_(dt,o);return e=>{const n=V(e);return n.innerHTML+=`
      .${n.id} {
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
    `,A(e,()=>n.remove())}}function Ht(o){return ze()(o)}const Ue=Q(Y({},dt),{duration:.5,scale:.95});function Xe(o={}){const t=_(Ue,o);return e=>{const n=V(e);return n.innerHTML+=`
      .${n.id} {
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
    `,A(e,()=>n.remove())}}function Ye(o){return Xe()(o)}function Wt(o){let t,e,n,i,a,u,f,m,y,w,I,F,v,h,M,S,b,N,R,p,g,ot,Z,ft,q,Pt,Gt,pt,J,Nt,qt,mt,B,j,zt,ht,H,Ut,bt,z,Xt,gt,T,W,Yt,xt,D,Vt,yt,U,Jt,vt,X,K,Kt,kt,tt,Qt,_t,k,L,Zt,te,$t,E,ee,ne,wt,C,oe,ie,It,O,le,re,ae,it,St;return{c(){t=s("div"),e=s("div"),n=s("button"),n.textContent="refresh",u=d(),f=s("div"),m=s("button"),m.textContent="Clickable Button",w=d(),I=s("button"),I.textContent="Horizontally Long Button with More Text",v=d(),h=s("button"),h.textContent="Clickable Button",S=d(),b=s("button"),b.textContent="Clickable Button",R=d(),p=s("div"),g=s("button"),g.textContent="send",ft=d(),q=s("button"),q.textContent="send",pt=d(),J=s("button"),J.textContent="send",mt=d(),B=s("div"),j=s("button"),j.textContent="Tile Button",ht=d(),H=s("button"),H.textContent="Tile Button",bt=d(),z=s("button"),z.textContent="Tile Button",gt=d(),T=s("div"),W=s("div"),W.textContent="Tile Item",xt=d(),D=s("div"),D.textContent="Tile Item",yt=d(),U=s("div"),U.textContent="Tile Item",vt=d(),X=s("div"),K=s("input"),kt=d(),tt=s("input"),_t=d(),k=s("div"),L=s("div"),L.textContent="Tile Item",$t=d(),E=s("div"),E.textContent="Tile Item",wt=d(),C=s("div"),C.textContent="Tile Item",It=d(),O=s("div"),O.textContent="Tile Item",r(n,"background-color","var(--gray-fill)"),P(e,"class","block svelte-htfejp"),r(m,"background-color","var(--gray-fill)"),r(I,"background-color","var(--gray-fill)"),r(h,"background-color","var(--blue-accent)"),P(f,"class","block svelte-htfejp"),r(g,"background-color","var(--gray-fill)"),r(q,"background-color","var(--blue-accent)"),P(p,"class","block svelte-htfejp"),r(j,"width","150px"),r(j,"height","150px"),r(j,"background-color","var(--gray-fill)"),r(H,"width","300px"),r(H,"height","150px"),r(H,"background-color","var(--blue-accent)"),r(z,"width","150px"),r(z,"height","150px"),P(B,"class","block svelte-htfejp"),r(W,"width","200px"),r(W,"height","100px"),r(W,"background-color","var(--gray-fill)"),r(D,"width","200px"),r(D,"height","100px"),r(D,"background-color","var(--blue-accent)"),r(U,"width","200px"),r(U,"height","100px"),P(T,"class","block svelte-htfejp"),r(K,"background-color","var(--blue-accent)"),K.checked=!0,tt.checked=!0,P(X,"class","block svelte-htfejp"),r(L,"width","200px"),r(L,"height","100px"),r(L,"background-color","var(--gray-fill)"),r(E,"width","200px"),r(E,"height","100px"),r(E,"background-color","var(--blue-accent)"),r(C,"width","200px"),r(C,"height","100px"),r(C,"background-color","var(--gray-fill)"),r(C,"animation-delay","0.5s"),r(O,"width","200px"),r(O,"height","100px"),r(O,"background-color","var(--blue-accent)"),r(O,"animation-delay","0.5s"),P(k,"class","block svelte-htfejp")},m(lt,ce){rt(lt,t,ce),l(t,e),l(e,n),l(t,u),l(t,f),l(f,m),l(f,w),l(f,I),l(f,v),l(f,h),l(f,S),l(f,b),l(t,R),l(t,p),l(p,g),l(p,ft),l(p,q),l(p,pt),l(p,J),l(t,mt),l(t,B),l(B,j),l(B,ht),l(B,H),l(B,bt),l(B,z),l(t,gt),l(t,T),l(T,W),l(T,xt),l(T,D),l(T,yt),l(T,U),l(t,vt),l(t,X),l(X,K),l(X,kt),l(X,tt),l(t,_t),l(t,k),l(k,L),l(k,$t),l(k,E),l(k,wt),l(k,C),l(k,It),l(k,O),it||(St=[c(i=x.call(null,n)),ge(n,"click",o[1]),c(a=nt.call(null,n)),c(y=x.call(null,m)),c(F=x.call(null,I)),c(M=x.call(null,h)),c(N=x.call(null,b)),c(ot=x.call(null,g)),c(Z=nt.call(null,g)),c(Pt=x.call(null,q)),c(Gt=nt.call(null,q)),c(Nt=x.call(null,J)),c(qt=nt.call(null,J)),c(zt=x.call(null,j)),c(Ut=x.call(null,H)),c(Xt=x.call(null,z)),c(Yt=G.call(null,W)),c(Vt=G.call(null,D)),c(Jt=G.call(null,U)),c(Kt=Mt.call(null,K)),c(Qt=Mt.call(null,tt)),c(Zt=G.call(null,L)),c(te=Ht.call(null,L)),c(ee=G.call(null,E)),c(ne=jt.call(null,E)),c(oe=G.call(null,C)),c(ie=Ht.call(null,C)),c(le=G.call(null,O)),c(re=jt.call(null,O)),c(ae=Ye.call(null,t))],it=!0)},p:at,d(lt){lt&&ct(t),it=!1,xe(St)}}}function Ve(o){let t,e,n,i=o[0]&&Wt(o);return{c(){t=s("div"),i&&i.c()},m(a,u){rt(a,t,u),i&&i.m(t,null),e||(n=c(Ne.call(null,t)),e=!0)},p(a,[u]){a[0]?i?i.p(a,u):(i=Wt(a),i.c(),i.m(t,null)):i&&(i.d(1),i=null)},i:at,o:at,d(a){a&&ct(t),i&&i.d(),e=!1,n()}}}function Je(o,t,e){let n=!0;return[n,async()=>{e(0,n=!1),await ye(),e(0,n=!0),window.scrollTo(0,0)}]}class Ke extends Bt{constructor(t){super();Tt(this,t,Je,Ve,Lt,{})}}function Dt(o){let t,e;return t=new Ke({}),{c(){ve(t.$$.fragment)},m(n,i){ke(t,n,i),e=!0},i(n){e||(et(t.$$.fragment,n),e=!0)},o(n){st(t.$$.fragment,n),e=!1},d(n){_e(t,n)}}}function Qe(o){let t,e,n=!o[0]&&Dt();return{c(){n&&n.c(),t=$e()},m(i,a){n&&n.m(i,a),rt(i,t,a),e=!0},p(i,[a]){i[0]?n&&(Se(),st(n,1,1,()=>{n=null}),we()):n?a&1&&et(n,1):(n=Dt(),n.c(),et(n,1),n.m(t.parentNode,t))},i(i){e||(et(n),e=!0)},o(i){st(n),e=!1},d(i){n&&n.d(i),i&&ct(t)}}}function Ze(o,t,e){let n;return Ie(o,Ce,i=>e(0,n=i)),[n]}class tn extends Bt{constructor(t){super();Tt(this,t,Ze,Qe,Lt,{})}}new tn({target:document.getElementById("app")});
