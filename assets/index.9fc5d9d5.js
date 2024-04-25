import{y as Se,$ as je,I as Pe,w as Ve,d as Ie,a as ze,S as K,i as Z,s as J,e as x,b as O,c as v,f as me,g as Q,h as b,j as C,l as fe,n as D,k as ee,r as he,m as B,o as De,R as Be,p as oe,q as te,t as re,u as ie,v as ne,x as ge}from"./vendor.23a855b8.js";const Ae=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=i(r);fetch(r.href,n)}};Ae();const Re="modulepreload",ve={},Ue="/exio/",A=function(t,i){return!i||i.length===0?t():Promise.all(i.map(o=>{if(o=`${Ue}${o}`,o in ve)return;ve[o]=!0;const r=o.endsWith(".css"),n=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${n}`))return;const a=document.createElement("link");if(a.rel=r?"stylesheet":Re,r||(a.as="script",a.crossOrigin=""),a.href=o,document.head.appendChild(a),r)return new Promise((c,l)=>{a.addEventListener("load",c),a.addEventListener("error",l)})})).then(()=>t())};Se("en",()=>A(()=>import("./en.d6ba8bc1.js"),[]));je({fallbackLocale:"en",initialLocale:Pe()});function qe(e=10){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let i="";for(;!i||document.querySelector("#"+i)!==null;){const r=["exio-"];for(let n=0;n<e;n++){var o=Math.floor(Math.random()*t.length);r.push(t.substring(o,o+1))}i=r.join("")}return i}function y(...e){return{destroy(){e.forEach(t=>{t()})}}}function w(e,t,i){let o=e;var r=n=>{Object.keys(o).forEach(a=>{t.style.removeProperty(i[a].prop)}),Object.entries(n).forEach(([a,c])=>{t.style.setProperty(i[a].prop,""+c)}),o=n};return r(e),{update:r}}function f(e){var t=qe();const i=document.getElementById(t)||document.createElement("style");return i.id=t,e.classList.add(t),document.head.appendChild(i),i}function Fe(e,t){var{left:e,top:i,width:o,height:r}=e.getBoundingClientRect(),{clientX:t,clientY:n}=t,[t,e]=[t-e,n-i];return{x:t,y:e,width:o,height:r}}function Ne(e){return parseFloat(e)*(/\ds$/.test(e)?1e3:1)}const We={};function $(e,t={}){e.classList.add("exio-component");let i=document.querySelector("#exio-styles");var o;return i||((i=document.createElement("style")).id="exio-styles",o=window.location.protocol==="http:"?"http:":"https:",i.innerHTML=` .exio-component { --exio-backdrop-color: rgba(128, 128, 128, 0.2); --exio-border-width: 2px; --exio-clicking-scale: 0.95; --exio-checkbox-checkmark-color: white; --exio-checkbox-checked-fill-color: black; --exio-disabled-filter: brightness(1.2) grayscale(0.5); --exio-focused-border-color: rgba(0, 0, 0, 0.5); --exio-hover-background-scale: 4; --exio-hover-body-color: rgba(128, 128, 128, 0.3); --exio-hover-border-color: rgba(0, 0, 0, 0.25); --exio-hover-border-scale: 2; --exio-loader-fill-color: black; --exio-loader-duration: 1s; --exio-radio-indicator-color: black; --exio-slider-thumb-color: black; --exio-slider-thumb-size: 12px; --exio-slider-thumb-hover-outline-size: 18px; --exio-slider-thumb-grab-outline-size: 25px; --exio-slider-track-size: 4px; --exio-fast-transition-duration: 0.1s; --exio-slow-transition-duration: 0.4s; --exio-standard-transition-duration: 0.2s; --exio-shadow-color: rgba(220, 230, 230, 1); --exio-shadow-size: 2px; --exio-switch-checked-fill-color: darkgray; --exio-switch-thumb-color: black; --exio-default-text-color: black; --exio-zoom-in-animation-scale: 97.5%; } .exio-component { --is-exio-component: true; --exio-theme: light; color: var(--exio-default-text-color); font-family: Segoe UI; } [data-theme="dark"] .exio-component, .exio-component[data-theme="dark"] { --exio-disabled-filter: brightness(0.6) grayscale(0.5); --exio-focused-border-color: rgba(255, 255, 255, 1); --exio-hover-background-scale: 4; --exio-hover-body-color: rgba(128, 128, 128, 0.3); --exio-hover-border-color: rgba(255, 255, 255, 0.5); --exio-hover-border-scale: 2; --exio-loader-fill-color: white; --exio-loader-duration: 1s; --exio-switch-checked-fill-color: white; --exio-checkbox-checkmark-color: black; --exio-checkbox-checked-fill-color: white; --exio-shadow-color: rgba(25, 25, 25, 1); --exio-slider-thumb-color: white; --exio-switch-thumb-color: white; --exio-radio-indicator-color: white; --exio-theme: dark; --exio-default-text-color: white; } @font-face { font-family: 'Segoe UI'; src: local('Segoe UI Light'), url(${o}//c.s-microsoft.com/static/fonts/segoe-ui/west-european/light/latest.woff2) format('woff2'), url(${o}//c.s-microsoft.com/static/fonts/segoe-ui/west-european/light/latest.woff) format('woff'), url(${o}//c.s-microsoft.com/static/fonts/segoe-ui/west-european/light/latest.ttf) format('truetype'); font-weight: 100; } @font-face { font-family: 'Segoe UI'; src: local('Segoe UI Semilight'), url(${o}//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semilight/latest.woff2) format('woff2'), url(${o}//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semilight/latest.woff) format('woff'), url(${o}//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semilight/latest.ttf) format('truetype'); font-weight: 200; } @font-face { font-family: 'Segoe UI'; src: local('Segoe UI'), url(${o}//c.s-microsoft.com/static/fonts/segoe-ui/west-european/normal/latest.woff2) format('woff2'), url(${o}//c.s-microsoft.com/static/fonts/segoe-ui/west-european/normal/latest.woff) format('woff'), url(${o}//c.s-microsoft.com/static/fonts/segoe-ui/west-european/normal/latest.ttf) format('truetype'); font-weight: 400; } @font-face { font-family: 'Segoe UI'; src: local('Segoe UI Semibold'), url(${o}//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semibold/latest.woff2) format('woff2'), url(${o}//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semibold/latest.woff) format('woff'), url(${o}//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semibold/latest.ttf) format('truetype'); font-weight: 600; } @font-face { font-family: 'Segoe UI'; src: local('Segoe UI Bold'), url(${o}//c.s-microsoft.com/static/fonts/segoe-ui/west-european/bold/latest.woff2) format('woff2'), url(${o}//c.s-microsoft.com/static/fonts/segoe-ui/west-european/bold/latest.woff) format('woff'), url(${o}//c.s-microsoft.com/static/fonts/segoe-ui/west-european/bold/latest.ttf) format('truetype'); font-weight: 700; } `,document.head.appendChild(i)),Object.assign(Object.assign({},w(t,e,We)),y(()=>{e.classList.remove("exio-component")}))}const be={borderStyle:"reactive",disableClicking:!1,focusable:!1},R={borderWidth:{prop:"--exio-border-width",val:""},clickingScale:{prop:"--exio-clicking-scale",val:""},disabledFilter:{prop:"--exio-disabled-filter",val:""},focusedBorderColor:{prop:"--exio-focused-border-color",val:""},hoverBackgroundScale:{prop:"--exio-hover-background-scale",val:""},hoverBodyColor:{prop:"--exio-hover-body-color",val:""},hoverBorderColor:{prop:"--exio-hover-border-color",val:""},hoverBorderScale:{prop:"--exio-hover-border-scale",val:""},transitionDuration:{prop:"--exio-standard-transition-duration",val:""}};function S(e,t=be){const i=Object.assign(Object.assign({},be),t),o=$(e),r=f(e),n=(u=0,h=0,g=0,p=0)=>{var m=`calc( ${Math.max(g,p)}px * var(--exio-hover-border-scale) )`,k=i.borderStyle==="static",E=i.borderStyle==="hover",m=i.borderStyle==="none"?"":k||E?"border: var(--exio-border-width) solid var(--exio-hover-border-color)":`border-image: radial-gradient( ${m} ${m} at var(--exio-mouse-x) var(--exio-mouse-y), var(--exio-hover-border-color) 0%, transparent calc(100% * var(--exio-hover-border-scale)) ) 9 / var(--exio-border-width) / 0px stretch`,E=E?"":` background-image: radial-gradient( calc( ${Math.max(g,p)}px * var(--exio-hover-background-scale) ) at ${u}px ${h}px, var(--exio-hover-body-color) 0%, transparent 100% ) `,g=i.focusable?"border: var(--exio-border-width) solid var(--exio-focused-border-color)":"",p=g?":not(:focus)":"";r.innerHTML=` .${r.id} { border: var(--exio-border-width) solid transparent; color: inherit; font-size: inherit; padding: 0.25em 0.75em; overflow: hidden; border-radius: 0px; ${k?m:""}; --exio-mouse-x: ${u}px; --exio-mouse-y: ${h}px; transition: transform var(--exio-standard-transition-duration); } .${r.id}:hover:not(.${r.id}-active)${p} { ${m}; background-size: calc(100% + 2 * var(--exio-border-width)); background-position: center; ${E}; transition: transform var(--exio-standard-transition-duration); } .${r.id}:focus { ${g}; } .${r.id}.${r.id}-active { filter: brightness(0.8); transition: none; transform: scale(var(--exio-clicking-scale)); } .${r.id}:disabled { pointer-events: none; touch-action: none; filter: var(--exio-disabled-filter); } `};function a(u){var{x:u,y:h,width:g,height:p}=Fe(e,u);e.removeEventListener("mousemove",a),e.matches(":hover")&&(n(u,h,g,p),e.addEventListener("mousemove",a,{passive:!0}))}n(),e.addEventListener("mouseenter",a,{passive:!0});let c=!1;const l=()=>{e.classList.add(r.id+"-active"),c=!0},d=u=>{c&&(e.classList.remove(r.id+"-active"),c=!1)},s=u=>{c&&(e.classList.remove(r.id+"-active"),u.button!==0||e.matches(":hover")||(u.preventDefault(),e.click()),c=!1)};return i.disableClicking||(e.addEventListener("touchstart",l,{passive:!0}),window.addEventListener("touchend",d),e.addEventListener("mousedown",l,{passive:!0}),window.addEventListener("mouseup",s),window.addEventListener("dragend",d)),y(()=>{e.removeEventListener("mouseenter",a),e.removeEventListener("mousemove",a),i.disableClicking||(e.removeEventListener("touchstart",l),window.removeEventListener("touchend",d),e.removeEventListener("mousedown",l),window.removeEventListener("mouseup",s),window.removeEventListener("dragend",d),e.remove(),r.remove()),o.destroy()})}const Ye=Object.assign({backgroundColor:{prop:"background-color",val:""},textColor:{prop:"color",val:""}},R);function xe(e,t={}){const i=$(e),o=S(e),r=f(e);return r.innerHTML=` .${r.id} { user-select: none; } `,Object.assign(Object.assign({},w(t,e,Ye)),y(()=>{o.destroy(),r.remove(),i.destroy()}))}const Xe={backgroundColor:{prop:"background-color",val:""},borderWidth:{prop:"--exio-border-width",val:""},checkedFillColor:{prop:"--exio-switch-checked-fill-color",val:""},switchThumbColor:{prop:"--exio-switch-thumb-color",val:""},transitionDuration:{prop:"--exio-standard-transition-duration",val:""},hoverBackgroundScale:{prop:"--exio-hover-background-scale",val:""},hoverBodyColor:{prop:"--exio-hover-body-color",val:""},clickingScale:{prop:"--exio-clicking-scale",val:""},disabledFilter:{prop:"--exio-disabled-filter",val:""}};function Ge(e,t={}){const i=$(e),o=S(e,{borderStyle:"static"}),r=f(e),n=(r.innerHTML=` .${r.id} { -webkit-appearance: none; width: 48px; height: 20px; border-radius: 100px; display: flex; align-items: center; justify-content: center; overflow: visible; border-color: black; background-color: var(--exio-switch-checked-fill-color); } [data-theme=dark] .${r.id} { border-color: white; } .${r.id}:not(:checked) { background-color: transparent; } `,f(e));return n.innerHTML=` .${n.id}::after { content: ''; position: absolute; width: ${e.clientHeight}px; height: ${e.clientHeight}px; border-radius: 100%; transform: translateX(calc( ${-e.clientWidth/2}px + ${e.clientHeight/2}px )) scale(0.55); background-color: var(--exio-switch-thumb-color); transition: transform var(--exio-standard-transition-duration); } .${n.id}:checked::after { transform: translateX(calc( ${e.clientWidth/2}px - ${e.clientHeight/2}px )) scale(0.5); } `,Object.assign(Object.assign({},w(t,e,Xe)),y(()=>{o.destroy(),r.remove(),n.remove(),i.destroy()}))}const U={animationDuration:{prop:"animation-duration",val:""}};function wo(e,t={}){const i=$(e),o=f(e);return o.innerHTML=` @keyframes exio-fly-in { from { transform: translateY(50%); opacity: 0; } to { transform: translateY(0%); opacity: 1; } } .${o.id} { animation: exio-fly-in; animation-duration: 0.6s; animation-fill-mode: forwards; opacity: 0; } `,Object.assign(Object.assign({},w(t,e,U)),y(()=>{o.remove(),i.destroy()}))}function $o(e,t={}){const i=$(e),o=f(e);return o.innerHTML=` @keyframes exio-fade-in { from { opacity: 0; } to { opacity: 1; } } .${o.id} { animation: exio-fade-in; animation-duration: 0.6s; animation-fill-mode: forwards; opacity: 0; } `,Object.assign(Object.assign({},w(t,e,U)),y(()=>{o.remove(),i.destroy()}))}const Ke=Object.assign({animationScale:{prop:"--exio-zoom-in-animation-scale",val:""}},U);function Ze(e,t={}){const i=$(e),o=f(e);return o.innerHTML=` @keyframes exio-zoom-in { from { transform: scale(var(--exio-zoom-in-animation-scale)); opacity: 0; } to { transform: scale(1); opacity: 1; } } .${o.id} { animation: exio-zoom-in; animation-duration: 0.5s; animation-fill-mode: forwards; opacity: 0; } `,Object.assign(Object.assign({},w(t,e,Ke)),y(()=>{o.remove(),i.destroy()}))}const Je=Object.assign(Object.assign({},U),{animationDuration:{prop:"--exio-loader-duration",val:""},fillColor:{prop:"--exio-loader-fill-color",val:""},backgroundColor:{prop:"background-color",val:""}});function ko(e,t={}){const i=$(e),o=f(e);return o.innerHTML=` @keyframes exio-loading-bar { from { background-position: 100% 0; } to { background-position: 0 0; } } .${o.id} { background-image: linear-gradient( to right, var(--exio-loader-fill-color) 0%, var(--exio-loader-fill-color) 25%, transparent 25%, transparent 50%, var(--exio-loader-fill-color) 50%, var(--exio-loader-fill-color) 75%, transparent 75%, transparent 100% ); background-size: 200% 100%; animation: exio-loading-bar var(--exio-loader-duration) linear infinite; } `,Object.assign(Object.assign({},w(t,e,Je)),y(()=>{o.remove(),i.destroy()}))}function ye(){let e=document.querySelector("#exio-icons-font");var t;e||((e=document.createElement("link")).id="exio-icons-font",t=window.location.protocol==="http:"?"http:":"https:",e.href=t+"//fonts.googleapis.com/icon?family=Material+Icons",e.rel="stylesheet",document.head.appendChild(e))}const Qe={},ae=(e,t={})=>{const i=$(e),o=(ye(),f(e));return o.innerHTML=` .${o.id} { font-family: 'Material Icons'; font-weight: normal; font-style: normal; display: inline-block; line-height: 1; text-transform: none; letter-spacing: normal; word-wrap: normal; white-space: nowrap; direction: ltr; -webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility; -moz-osx-font-smoothing: grayscale; font-feature-settings: 'liga'; } `,Object.assign(Object.assign({},w(t,e,Qe)),y(()=>{o.remove(),i.destroy()}))},Lo=()=>/^((?!chrome|android).)*safari/i.test(navigator.userAgent),q=()=>-1<navigator.userAgent.toLowerCase().indexOf("firefox"),eo=()=>/iPhone|iPad|iPod|Android/i.test(navigator.userAgent),oo=Object.assign({backgroundColor:{prop:"background-color",val:""},transitionDuration:{prop:"--exio-standard-transition-duration",val:""},shadowColor:{prop:"--exio-shadow-color",val:""},shadowSize:{prop:"--exio-shadow-size",val:""}},R);function Eo(e,t={}){const i=$(e),o=S(e),r=f(e),n=(r.innerHTML=` .${r.id} { user-select: none; } `,document.createElement("div")),a=document.createElement("div"),c=f(n),l=f(a);let d=e.getBoundingClientRect(),s="",u=!1;const h=_=>{eo()||(s=e.style.getPropertyValue("transform"),e.style.setProperty("transform","none","important"),d=e.getBoundingClientRect(),e.style.setProperty("transform",s,"important"),_!=null&&_.preventDefault(),u=!0)},g=[];let p=e,m=!1;for(;p!==document.body&&!m;)p=p.parentNode,m=p.tagName==="DIALOG";const k=(_=!1)=>{e.style.setProperty("transform",s,"important");const L=_?{getPropertyValue:ue=>"unset"}:getComputedStyle(e),le=(n.dataset.theme=L.getPropertyValue("--exio-theme").trim(),L.getPropertyValue("--exio-standard-transition-duration")),$e=L.getPropertyValue("--exio-shadow-color"),j=L.getPropertyValue("--exio-shadow-size");var ke=L.getPropertyValue("color"),Le=L.getPropertyValue("background-color"),Ee=L.getPropertyValue("font-family"),_e=L.getPropertyValue("font-size");const Ce=L.getPropertyValue("padding"),Te=L.getPropertyValue("padding-top"),Me=L.getPropertyValue("padding-bottom");var Oe={left:0,top:0,width:window.innerWidth,height:window.innerHeight};const ce={left:0,top:0,width:0,height:0,right:0},{left:de,top:N,height:V,width:W}=_?ce:m?p.getBoundingClientRect():Oe;c.innerHTML=` .${c.id} { position: fixed; top: ${d.bottom}px; left: ${d.left}px; width: ${d.width}px; background-color: ${Le}; transition: opacity ${le}; color: ${ke}; font-family: ${Ee}; font-size: ${_e}; opacity: 0; pointer-events: none; touch-action: none; user-select: none; z-index: 69420; } .${c.id}:focus { opacity: 1; outline: none; pointer-events: auto; touch-action: auto; } `,l.innerHTML=` .${l.id} { opacity: 0; } `,n.innerHTML="",_||setTimeout(()=>{const ue=e.querySelectorAll("option");let I,Y;ue.forEach((pe,He)=>{if(!pe.disabled){const T=document.createElement("div");I=I||T,(Y=T).style.padding=Ce,T.style.boxSizing="border-box",T.style.cursor="default",T.textContent=pe.textContent,g.push(S(T)),n.appendChild(T),T.addEventListener("click",()=>{e.selectedIndex=He,e.dispatchEvent(new Event("change")),n.blur()},{passive:!0})}}),I&&(I.style.marginTop=Te),Y&&(Y.style.marginBottom=Me);var{height:X,left:z,right:M}=_?ce:n.getBoundingClientRect(),M=M-z,H=X+d.bottom-(m?N:0)>=V?Math.max(0,V-X):d.bottom-N,M=M+d.left-(m?de:0)>=W?Math.max(0,W-M):z-2*de,z=(c.innerHTML+=` .${c.id} { overflow: auto; max-width: ${W}px; max-height: ${V}px; } ${m?"":` .${c.id} { top: ${H}px; left: ${M}px; } `} `,n.getBoundingClientRect()),H=Math.min(d.top-N,H);let G=Math.min(z.bottom-H,X+d.height);m&&(G=Math.min(G,V-H)),l.innerHTML=` .${l.id} { position: fixed; top: calc(${H}px - ${j} / 2); left: calc(${M}px - ${j} / 2); width: calc(${d.width}px - ${j} / 2); height: calc(${G}px - ${j} / 2); z-index: 69421; border: ${j} solid ${$e}; transition: opacity ${le}; touch-action: none; user-select: none; pointer-events: none; opacity: 0; box-sizing: content-box; } `,setTimeout(()=>{l.innerHTML+=` .${c.id}:focus ~ .${l.id} { opacity: 1; } `},0)},0)},E=(k(!0),p.appendChild(n),p.appendChild(a),e.addEventListener("mousedown",h),e.addEventListener("touchstart",h),()=>{u&&(u=!1,k(),n.tabIndex=0,n.focus())}),P=(e.addEventListener("click",E,{passive:!0}),e.addEventListener("touchend",E),()=>{n.blur()}),se=()=>{n.tabIndex=-1};return n.addEventListener("blur",se),window.addEventListener("scroll",P,{passive:!0}),window.addEventListener("resize",P,{passive:!0}),Object.assign(Object.assign({},w(t,e,oo)),y(()=>{g.forEach(_=>_.destroy()),window.removeEventListener("scroll",P),window.removeEventListener("resize",P),e.removeEventListener("mousedown",h),e.removeEventListener("touchstart",h),e.removeEventListener("click",E),e.removeEventListener("touchend",E),n.removeEventListener("blur",se),o.destroy(),r.remove(),n.remove(),c.remove(),a.remove(),l.remove(),i.destroy()}))}const to=Object.assign({backgroundColor:{prop:"background-color",val:""},indicatorColor:{prop:"--exio-radio-indicator-color",val:""},transitionDuration:{prop:"--exio-standard-transition-duration",val:""},borderColor:{prop:"border-color",val:""}},R),_o=(e,t={})=>{const i=$(e),o=S(e,{borderStyle:"none"}),r=f(e),n=(r.innerHTML=` .${r.id} { -webkit-appearance: none; width: 20px; height: 20px; border-radius: 100px; display: flex; align-items: center; justify-content: center; padding: 0px; border-color: black; } [data-theme=dark] .${r.id} { border-color: white; } .${r.id}:not(:checked) { background-color: transparent; } `,f(e)),a=setTimeout(()=>{n.innerHTML=` .${n.id}::after { content: ''; position: absolute; width: ${e.clientHeight}px; height: ${e.clientHeight}px; border-radius: 100%; transform: scale(0); transform-origin: ${e.clientHeight/2}px ${e.clientHeight/2}px; background-color: var(--exio-radio-indicator-color); transition: transform var(--exio-standard-transition-duration); z-index: -1000; } .${n.id}:checked::after { transform: scale(0.55); } `},0);return Object.assign(Object.assign({},w(t,e,to)),y(()=>{o.destroy(),r.remove(),n.remove(),i.destroy(),clearTimeout(a)}))};var ro=globalThis&&globalThis.__awaiter||function(e,t,i,o){return new(i=i||Promise)(function(r,n){function a(d){try{l(o.next(d))}catch(s){n(s)}}function c(d){try{l(o.throw(d))}catch(s){n(s)}}function l(d){var s;d.done?r(d.value):((s=d.value)instanceof i?s:new i(function(u){u(s)})).then(a,c)}l((o=o.apply(e,t||[])).next())})};const io={backgroundColor:{prop:"background-color",val:""},transitionDuration:{prop:"--exio-slow-transition-duration",val:""},backdopColor:{prop:"--exio-backdrop-color",val:""}};function no(e,t={}){const i=$(e);let o=Boolean(e.open);const r=f(e),n=getComputedStyle(e);n.getPropertyValue("padding-top"),n.getPropertyValue("padding-bottom"),r.innerHTML=` @keyframes exio-dialog-fade-in { 0% { opacity: 0; transform: scale(0); } 100% { opacity: 1; transform: scale(1); } } @keyframes exio-dialog-fade-out { 0% { opacity: 1; transform: ${q()?"translateY(-50%)":""} scale(1); } 100% { opacity: 0; transform: ${q()?"translateY(-50%)":""} scale(0); } } .${r.id} { border-radius: 0px; border: 0px solid transparent; z-index: 69420; top: calc(0%); } .${r.id}::backdrop { background-color: transparent; } .${r.id}:not([open]) { display: block; position: fixed; ${q()?"top: calc(50%);":""} transform-origin: center center; } .${r.id}[open] { transform-origin: center center; animation-name: exio-dialog-fade-in; animation-duration: var(--exio-slow-transition-duration); } `,ro(this,void 0,void 0,function*(){(yield A(()=>import("./dialog-polyfill.esm.8bcb7267.js"),[])).default.registerDialog(e),e.close(),o&&e.showModal()});const a=f(e),c=(a.innerHTML=` .${a.id}:not([open]) { display: none; } `,()=>{a.innerHTML=` .${a.id}:not([open]) { animation-name: exio-dialog-fade-out; animation-duration: var(--exio-slow-transition-duration); animation-fill-mode: forwards; } `,e.removeEventListener("animationstart",c)}),l=(e.addEventListener("animationstart",c,{passive:!0}),document.createElement("div")),d=f(l),s=()=>{const p=getComputedStyle(e);var m=p.getPropertyValue("--exio-slow-transition-duration"),k=p.getPropertyValue("--exio-backdrop-color");d.innerHTML=` .${d.id} { position: fixed; top: 0px; left: 0px; width: 100%; height: 100%; background-color: ${k}; transition: opacity ${m}; pointer-events: none; touch-action: none; z-index: 42069; } `,l.style.opacity=o?"1":"0"},u=(s(),e.parentElement.appendChild(l),()=>h.observe(e,{attributes:!0,attributeFilter:["open"]})),h=new MutationObserver(()=>{o=Boolean(e.open),h.disconnect(),e.show(),e.close(),s(),o&&e.showModal(),u()}),g=(u(),p=>{p.preventDefault(),p.stopPropagation()});return e.addEventListener("cancel",g),Object.assign(Object.assign({},w(t,e,io)),y(()=>{r.remove(),e.removeEventListener("animationstart",c),e.removeEventListener("cancel",g),a&&a.remove(),d.remove(),h.disconnect(),i.destroy()}))}const ao=Object.assign({transitionDuration:{prop:"--exio-slow-transition-duration",val:""}},R);function Co(e,t={}){const i=$(e),o=(ye(),e.querySelector("summary")),r=S(o,{borderStyle:"reactive"}),n=f(o),a=(n.innerHTML=` .${n.id} { cursor: default; user-select: none; position: relative; } .${n.id}::marker{ font-size: 0px; } .${n.id}::-webkit-details-marker { display: none; } .${n.id}::after { content: 'expand_more'; font-family: 'Material Icons'; font-size: 1.5em; position: absolute; right: 0.25em; top: ${q()?"0px":"0.1em"}; transform: rotate(0deg); transition: transform var(--exio-slow-transition-duration); } `,f(e)),c=(a.innerHTML=` .${a.id} { transition: max-height var(--exio-slow-transition-duration); overflow: hidden; } `,e.querySelector("*:not(summary)")),l=f(e),d=f(o);let s;const u=h=>{s&&clearTimeout(s);const g=getComputedStyle(o),p=()=>Ne(g.getPropertyValue("--exio-slow-transition-duration")),m=()=>o.offsetHeight+c.offsetHeight;e.open?(h.preventDefault(),l.innerHTML=` .${l.id} { max-height: ${m()}px; } `,setTimeout(()=>{l.innerHTML=` .${l.id} { max-height: ${o.offsetHeight}px; } `,d.innerHTML=` .${d.id}::after { transform: rotate(0deg); } `,s=setTimeout(()=>{e.open=!1},p())},0)):(l.innerHTML=` .${l.id} { max-height: ${o.offsetHeight}px; } `,d.innerHTML=` .${d.id}::after { transform: rotate(180deg); } `,setTimeout(()=>{l.innerHTML=` .${l.id} { max-height: ${m()}px; } `,s=setTimeout(()=>{l.innerHTML=""},p())},0))};return o.addEventListener("click",u),Object.assign(Object.assign({},w(t,e,ao)),y(()=>{r.destroy(),n.remove(),a.remove(),l.remove(),i.destroy(),o.removeEventListener("click",u)}))}const so={};function lo(e,t={}){const i=f(e);return i.innerHTML=" body { margin: 0; padding: 0; } * { font-family: 'Segoe UI'; } * ::-webkit-scrollbar { width: 8px; height: 8px; } * ::-webkit-scrollbar-track { background: transparent; } * ::-webkit-scrollbar-thumb { background: #888; } * ::-webkit-scrollbar-thumb:hover { background: #555; } * ::-webkit-scrollbar-corner { background: transparent; } * { scrollbar-width: thin; scrollbar-color: #888 transparent; } ",Object.assign(Object.assign({},w(t,e,so)),y(()=>{i.remove()}))}const F=Ve("dark",!0),co=Ie(F,e=>e?"dark":"light"),we=ze(!1);function uo(e){let t,i,o,r,n,a,c,l;return{c(){t=x("dialog"),i=x("h2"),i.textContent="Hello World!",o=O(),r=x("p"),r.textContent="Exio uses the HTML dialog element.",n=O(),a=x("button"),a.textContent="Close",v(i,"class","svelte-xxdtl1"),v(a,"class","blue"),me(a,"float","right"),t.open=e[0],v(t,"class","dialog svelte-xxdtl1"),me(t,"width","min(300px, 100%)")},m(d,s){Q(d,t,s),b(t,i),b(t,o),b(t,r),b(t,n),b(t,a),c||(l=[C(xe.call(null,a)),fe(a,"click",e[1]),C(no.call(null,t))],c=!0)},p(d,[s]){s&1&&(t.open=d[0])},i:D,o:D,d(d){d&&ee(t),c=!1,he(l)}}}function po(e,t,i){let o;return B(e,we,n=>i(0,o=n)),[o,()=>De(we,o=!1,o)]}class mo extends K{constructor(t){super();Z(this,t,po,uo,J,{})}}function fo(e){let t,i,o,r,n,a,c,l,d,s,u,h,g,p;return{c(){t=x("div"),i=x("div"),o=x("a"),r=x("button"),n=x("span"),n.textContent="home",a=O(),c=x("div"),l=x("span"),l.textContent="light_mode",d=O(),s=x("input"),u=O(),h=x("span"),h.textContent="dark_mode",v(n,"class","svelte-1yeho5w"),v(r,"class","home-button svelte-1yeho5w"),v(r,"tabindex","-1"),v(o,"href","#/"),v(o,"class","svelte-1yeho5w"),v(i,"class","home svelte-1yeho5w"),v(l,"class","svelte-1yeho5w"),v(s,"type","checkbox"),v(s,"id","dark-mode"),v(s,"class","svelte-1yeho5w"),v(h,"class","svelte-1yeho5w"),v(c,"class","toggler svelte-1yeho5w"),v(t,"class","navbar svelte-1yeho5w")},m(m,k){Q(m,t,k),b(t,i),b(i,o),b(o,r),b(r,n),b(t,a),b(t,c),b(c,l),b(c,d),b(c,s),s.checked=e[0],b(c,u),b(c,h),g||(p=[C(ae.call(null,n)),C(xe.call(null,r)),C(ae.call(null,l)),C(Ge.call(null,s)),fe(s,"change",e[1]),C(ae.call(null,h)),C(Ze.call(null,t))],g=!0)},p(m,[k]){k&1&&(s.checked=m[0])},i:D,o:D,d(m){m&&ee(t),g=!1,he(p)}}}function ho(e,t,i){let o;B(e,F,n=>i(0,o=n));function r(){o=this.checked,F.set(o)}return[o,r]}class go extends K{constructor(t){super();Z(this,t,ho,fo,J,{})}}function vo(e){let t,i,o,r,n,a,c,l,d;return i=new go({}),r=new mo({}),a=new Be({props:{routes:e[1]}}),{c(){t=x("div"),oe(i.$$.fragment),o=O(),oe(r.$$.fragment),n=O(),oe(a.$$.fragment),v(t,"data-theme",e[0])},m(s,u){Q(s,t,u),te(i,t,null),b(t,o),te(r,t,null),b(t,n),te(a,t,null),c=!0,l||(d=C(lo.call(null,t)),l=!0)},p(s,[u]){(!c||u&1)&&v(t,"data-theme",s[0])},i(s){c||(re(i.$$.fragment,s),re(r.$$.fragment,s),re(a.$$.fragment,s),c=!0)},o(s){ie(i.$$.fragment,s),ie(r.$$.fragment,s),ie(a.$$.fragment,s),c=!1},d(s){s&&ee(t),ne(i),ne(r),ne(a),l=!1,d()}}}function bo(e,t,i){let o,r;B(e,F,a=>i(2,o=a)),B(e,co,a=>i(0,r=a));let n={"/":ge({asyncComponent:()=>A(()=>import("./Home.b1e62990.js"),["assets/Home.b1e62990.js","assets/Home.54f9aa24.css","assets/vendor.23a855b8.js"])}),"/docs":ge({asyncComponent:()=>A(()=>import("./Docs.bc3f8bbb.js"),["assets/Docs.bc3f8bbb.js","assets/Docs.13382db5.css","assets/vendor.23a855b8.js"])})};return e.$$.update=()=>{e.$$.dirty&1&&document.body.parentElement.style.setProperty("color-scheme",r),e.$$.dirty&4&&document.body.classList[o?"add":"remove"]("dark")},[r,n,o]}class xo extends K{constructor(t){super();Z(this,t,bo,vo,J,{})}}new xo({target:document.getElementById("app")});export{S as a,Ge as b,ye as c,y as d,$ as e,xe as f,ae as g,_o as h,Lo as i,Eo as j,Co as k,ko as l,Ze as m,wo as n,$o as o,F as p,we as q,f as s,w as u};
//# sourceMappingURL=index.9fc5d9d5.js.map