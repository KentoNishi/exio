import{y as Te,$ as He,I as Se,d as je,w as Pe,a as ze,b as Ie,S as W,i as Y,s as X,e as x,c as O,f as v,g as ue,h as G,j as b,k as C,l as me,n as z,m as K,r as pe,o as I,p as Ve,R as De,q as Z,t as J,u as Q,v as ee,x as oe,z as fe}from"./vendor.0c9474f7.js";const Be=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};Be();const Ae="modulepreload",he={},Re="/exio/",te=function(o,n){return!n||n.length===0?o():Promise.all(n.map(r=>{if(r=`${Re}${r}`,r in he)return;he[r]=!0;const t=r.endsWith(".css"),i=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const a=document.createElement("link");if(a.rel=t?"stylesheet":Ae,t||(a.as="script",a.crossOrigin=""),a.href=r,document.head.appendChild(a),t)return new Promise((s,l)=>{a.addEventListener("load",s),a.addEventListener("error",l)})})).then(()=>o())};Te("en",()=>te(()=>import("./en.d6ba8bc1.js"),[]));He({fallbackLocale:"en",initialLocale:Se()});function qe(e=10){var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let n="";for(;!n||document.querySelector("#"+n)!==null;){const t=["exio-"];for(let i=0;i<e;i++){var r=Math.floor(Math.random()*o.length);t.push(o.substring(r,r+1))}n=t.join("")}return n}function y(...e){return{destroy(){e.forEach(o=>{o()})}}}function w(e,o,n){let r=e;var t=i=>{Object.keys(r).forEach(a=>{o.style.removeProperty(n[a].prop)}),Object.entries(i).forEach(([a,s])=>{o.style.setProperty(n[a].prop,""+s)}),r=i};return t(e),{update:t}}function p(e){var o=qe();const n=document.getElementById(o)||document.createElement("style");return n.id=o,e.classList.add(o),document.head.appendChild(n),n}function Ue(e,o){var{left:e,top:n,width:r,height:t}=e.getBoundingClientRect(),{clientX:o,clientY:i}=o,[o,e]=[o-e,i-n];return{x:o,y:e,width:r,height:t}}function Fe(e){return parseFloat(e)*(/\ds$/.test(e)?1e3:1)}const Ne={};function k(e,o={}){e.classList.add("exio-component");let n=document.querySelector("#exio-styles");return n||((n=document.createElement("style")).id="exio-styles",n.innerHTML=` .exio-component { --exio-backdrop-color: rgba(128, 128, 128, 0.2); --exio-border-width: 2px; --exio-clicking-scale: 0.95; --exio-checkbox-checkmark-color: white; --exio-checkbox-checked-fill-color: black; --exio-disabled-filter: brightness(1.2) grayscale(0.5); --exio-focused-border-color: rgba(0, 0, 0, 0.5); --exio-hover-background-scale: 4; --exio-hover-body-color: rgba(128, 128, 128, 0.3); --exio-hover-border-color: rgba(0, 0, 0, 0.25); --exio-hover-border-scale: 2; --exio-loader-fill-color: black; --exio-loader-duration: 1s; --exio-radio-indicator-color: black; --exio-slider-thumb-color: black; --exio-slider-thumb-size: 12px; --exio-slider-thumb-hover-outline-size: 18px; --exio-slider-thumb-grab-outline-size: 25px; --exio-slider-track-size: 4px; --exio-fast-transition-duration: 0.1s; --exio-slow-transition-duration: 0.4s; --exio-standard-transition-duration: 0.2s; --exio-shadow-color: rgba(128, 128, 128, 0.2); --exio-shadow-size: 2px; --exio-switch-checked-fill-color: darkgray; --exio-switch-thumb-color: black; --exio-default-text-color: black; --exio-zoom-in-animation-scale: 97.5%; } .exio-component { --is-exio-component: true; --exio-theme: light; color: var(--exio-default-text-color); } [data-theme="dark"] .exio-component, .exio-component[data-theme="dark"] { --exio-disabled-filter: brightness(0.6) grayscale(0.5); --exio-focused-border-color: rgba(255, 255, 255, 1); --exio-hover-background-scale: 4; --exio-hover-body-color: rgba(128, 128, 128, 0.3); --exio-hover-border-color: rgba(255, 255, 255, 0.5); --exio-hover-border-scale: 2; --exio-loader-fill-color: white; --exio-loader-duration: 1s; --exio-switch-checked-fill-color: white; --exio-checkbox-checkmark-color: black; --exio-checkbox-checked-fill-color: white; --exio-slider-thumb-color: white; --exio-switch-thumb-color: white; --exio-radio-indicator-color: white; --exio-theme: dark; --exio-default-text-color: white; } @font-face { font-family: 'Segoe UI'; src: local('Segoe UI Light'), url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/light/latest.woff2) format('woff2'), url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/light/latest.woff) format('woff'), url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/light/latest.ttf) format('truetype'); font-weight: 100; } @font-face { font-family: 'Segoe UI'; src: local('Segoe UI Semilight'), url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semilight/latest.woff2) format('woff2'), url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semilight/latest.woff) format('woff'), url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semilight/latest.ttf) format('truetype'); font-weight: 200; } @font-face { font-family: 'Segoe UI'; src: local('Segoe UI'), url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/normal/latest.woff2) format('woff2'), url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/normal/latest.woff) format('woff'), url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/normal/latest.ttf) format('truetype'); font-weight: 400; } @font-face { font-family: 'Segoe UI'; src: local('Segoe UI Semibold'), url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semibold/latest.woff2) format('woff2'), url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semibold/latest.woff) format('woff'), url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semibold/latest.ttf) format('truetype'); font-weight: 600; } @font-face { font-family: 'Segoe UI'; src: local('Segoe UI Bold'), url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/bold/latest.woff2) format('woff2'), url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/bold/latest.woff) format('woff'), url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/bold/latest.ttf) format('truetype'); font-weight: 700; } `,document.head.appendChild(n)),Object.assign(Object.assign({},w(o,e,Ne)),y(()=>{e.classList.remove("exio-component")}))}const ge={borderStyle:"reactive",disableClicking:!1,focusable:!1},V={borderWidth:{prop:"--exio-border-width",val:""},clickingScale:{prop:"--exio-clicking-scale",val:""},disabledFilter:{prop:"--exio-disabled-filter",val:""},focusedBorderColor:{prop:"--exio-focused-border-color",val:""},hoverBackgroundScale:{prop:"--exio-hover-background-scale",val:""},hoverBodyColor:{prop:"--exio-hover-body-color",val:""},hoverBorderColor:{prop:"--exio-hover-border-color",val:""},hoverBorderScale:{prop:"--exio-hover-border-scale",val:""},transitionDuration:{prop:"--exio-standard-transition-duration",val:""}};function T(e,o=ge){const n=Object.assign(Object.assign({},ge),o),r=k(e),t=p(e),i=(u=0,f=0,g=0,m=0)=>{var h=`calc( ${Math.max(g,m)}px * var(--exio-hover-border-scale) )`,L=n.borderStyle==="static",E=n.borderStyle==="hover",h=n.borderStyle==="none"?"":L||E?"border: var(--exio-border-width) solid var(--exio-hover-border-color)":`border-image: radial-gradient( ${h} ${h} at var(--exio-mouse-x) var(--exio-mouse-y), var(--exio-hover-border-color) 0%, transparent calc(100% * var(--exio-hover-border-scale)) ) 9 / var(--exio-border-width) / 0px stretch`,E=E?"":` background-image: radial-gradient( calc( ${Math.max(g,m)}px * var(--exio-hover-background-scale) ) at ${u}px ${f}px, var(--exio-hover-body-color) 0%, transparent 100% ) `,g=n.focusable?"border: var(--exio-border-width) solid var(--exio-focused-border-color)":"",m=g?":not(:focus)":"";t.innerHTML=` .${t.id} { border: var(--exio-border-width) solid transparent; color: inherit; font-size: inherit; font-family: inherit; padding: 0.25em 0.75em; overflow: hidden; border-radius: 0px; ${L?h:""}; --exio-mouse-x: ${u}px; --exio-mouse-y: ${f}px; transition: transform var(--exio-standard-transition-duration); } .${t.id}:hover:not(.${t.id}-active)${m} { ${h}; background-size: calc(100% + 2 * var(--exio-border-width)); background-position: center; ${E}; transition: transform var(--exio-standard-transition-duration); } .${t.id}:focus { ${g}; } .${t.id}.${t.id}-active { filter: brightness(0.8); transition: none; transform: scale(var(--exio-clicking-scale)); } .${t.id}:disabled { pointer-events: none; touch-action: none; filter: var(--exio-disabled-filter); } `};function a(u){var{x:u,y:f,width:g,height:m}=Ue(e,u);e.removeEventListener("mousemove",a),e.matches(":hover")&&(i(u,f,g,m),e.addEventListener("mousemove",a,{passive:!0}))}i(),e.addEventListener("mouseenter",a,{passive:!0});let s=!1;const l=()=>{e.classList.add(t.id+"-active"),s=!0},d=u=>{s&&(e.classList.remove(t.id+"-active"),s=!1)},c=u=>{s&&(e.classList.remove(t.id+"-active"),u.button!==0||e.matches(":hover")||(u.preventDefault(),e.click()),s=!1)};return n.disableClicking||(e.addEventListener("touchstart",l,{passive:!0}),window.addEventListener("touchend",d),e.addEventListener("mousedown",l,{passive:!0}),window.addEventListener("mouseup",c),window.addEventListener("dragend",d)),y(()=>{e.removeEventListener("mouseenter",a),e.removeEventListener("mousemove",a),n.disableClicking||(e.removeEventListener("touchstart",l),window.removeEventListener("touchend",d),e.removeEventListener("mousedown",l),window.removeEventListener("mouseup",c),window.removeEventListener("dragend",d),e.remove(),t.remove()),r.destroy()})}const We=Object.assign({backgroundColor:{prop:"background-color",val:""},textColor:{prop:"color",val:""}},V);function ve(e,o={}){const n=k(e),r=T(e),t=p(e);return t.innerHTML=` .${t.id} { user-select: none; } `,Object.assign(Object.assign({},w(o,e,We)),y(()=>{r.destroy(),t.remove(),n.destroy()}))}const Ye={backgroundColor:{prop:"background-color",val:""},borderWidth:{prop:"--exio-border-width",val:""},checkedFillColor:{prop:"--exio-switch-checked-fill-color",val:""},switchThumbColor:{prop:"--exio-switch-thumb-color",val:""},transitionDuration:{prop:"--exio-standard-transition-duration",val:""},hoverBackgroundScale:{prop:"--exio-hover-background-scale",val:""},hoverBodyColor:{prop:"--exio-hover-body-color",val:""},clickingScale:{prop:"--exio-clicking-scale",val:""},disabledFilter:{prop:"--exio-disabled-filter",val:""}};function Xe(e,o={}){const n=k(e),r=T(e,{borderStyle:"static"}),t=p(e),i=(t.innerHTML=` .${t.id} { -webkit-appearance: none; width: 48px; height: 20px; border-radius: 100px; display: flex; align-items: center; justify-content: center; overflow: visible; border-color: black; background-color: var(--exio-switch-checked-fill-color); } [data-theme=dark] .${t.id} { border-color: white; } .${t.id}:not(:checked) { background-color: transparent; } `,p(e));return i.innerHTML=` .${i.id}::after { content: ''; position: absolute; width: ${e.clientHeight}px; height: ${e.clientHeight}px; border-radius: 100%; transform: translateX(calc( ${-e.clientWidth/2}px + ${e.clientHeight/2}px )) scale(0.55); background-color: var(--exio-switch-thumb-color); transition: transform var(--exio-standard-transition-duration); } .${i.id}:checked::after { transform: translateX(calc( ${e.clientWidth/2}px - ${e.clientHeight/2}px )) scale(0.5); } `,Object.assign(Object.assign({},w(o,e,Ye)),y(()=>{r.destroy(),t.remove(),i.remove(),n.destroy()}))}const D={animationDuration:{prop:"animation-duration",val:""}};function yo(e,o={}){const n=k(e),r=p(e);return r.innerHTML=` @keyframes exio-fly-in { from { transform: translateY(50%); opacity: 0; } to { transform: translateY(0%); opacity: 1; } } .${r.id} { animation: exio-fly-in; animation-duration: 0.6s; animation-fill-mode: forwards; opacity: 0; } `,Object.assign(Object.assign({},w(o,e,D)),y(()=>{r.remove(),n.destroy()}))}function wo(e,o={}){const n=k(e),r=p(e);return r.innerHTML=` @keyframes exio-fade-in { from { opacity: 0; } to { opacity: 1; } } .${r.id} { animation: exio-fade-in; animation-duration: 0.6s; animation-fill-mode: forwards; opacity: 0; } `,Object.assign(Object.assign({},w(o,e,D)),y(()=>{r.remove(),n.destroy()}))}const Ge=Object.assign({animationScale:{prop:"--exio-zoom-in-animation-scale",val:""}},D);function Ke(e,o={}){const n=k(e),r=p(e);return r.innerHTML=` @keyframes exio-zoom-in { from { transform: scale(var(--exio-zoom-in-animation-scale)); opacity: 0; } to { transform: scale(1); opacity: 1; } } .${r.id} { animation: exio-zoom-in; animation-duration: 0.5s; animation-fill-mode: forwards; opacity: 0; } `,Object.assign(Object.assign({},w(o,e,Ge)),y(()=>{r.remove(),n.destroy()}))}const Ze=Object.assign(Object.assign({},D),{animationDuration:{prop:"--exio-loader-duration",val:""},fillColor:{prop:"--exio-loader-fill-color",val:""},backgroundColor:{prop:"background-color",val:""}});function ko(e,o={}){const n=k(e),r=p(e);return r.innerHTML=` @keyframes exio-loading-bar { from { background-position: 100% 0; } to { background-position: 0 0; } } .${r.id} { background-image: linear-gradient( to right, var(--exio-loader-fill-color) 0%, var(--exio-loader-fill-color) 25%, transparent 25%, transparent 50%, var(--exio-loader-fill-color) 50%, var(--exio-loader-fill-color) 75%, transparent 75%, transparent 100% ); background-size: 200% 100%; animation: exio-loading-bar var(--exio-loader-duration) linear infinite; } `,Object.assign(Object.assign({},w(o,e,Ze)),y(()=>{r.remove(),n.destroy()}))}function be(){let e=document.querySelector("#exio-icons-font");var o;e||((e=document.createElement("link")).id="exio-icons-font",o=window.location.protocol==="http:"?"http:":"https:",e.href=o+"//fonts.googleapis.com/icon?family=Material+Icons",e.rel="stylesheet",document.body.appendChild(e))}const Je={},re=(e,o={})=>{const n=k(e),r=(be(),p(e));return r.innerHTML=` .${r.id} { font-family: 'Material Icons'; font-weight: normal; font-style: normal; display: inline-block; line-height: 1; text-transform: none; letter-spacing: normal; word-wrap: normal; white-space: nowrap; direction: ltr; -webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility; -moz-osx-font-smoothing: grayscale; font-feature-settings: 'liga'; } `,Object.assign(Object.assign({},w(o,e,Je)),y(()=>{r.remove(),n.destroy()}))},$o=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),Qe=-1<navigator.userAgent.toLowerCase().indexOf("firefox"),eo=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent),oo=Object.assign({backgroundColor:{prop:"background-color",val:""},transitionDuration:{prop:"--exio-standard-transition-duration",val:""},shadowColor:{prop:"--exio-shadow-color",val:""},shadowSize:{prop:"--exio-shadow-size",val:""}},V);function Lo(e,o={}){const n=k(e),r=T(e),t=p(e),i=(t.innerHTML=` .${t.id} { user-select: none; } `,document.createElement("div")),a=document.createElement("div"),s=p(i),l=p(a);let d=e.getBoundingClientRect(),c="",u=!1;const f=_=>{eo||(c=e.style.getPropertyValue("transform"),e.style.setProperty("transform","none","important"),d=e.getBoundingClientRect(),e.style.setProperty("transform",c,"important"),_!=null&&_.preventDefault(),u=!0)},g=[];let m=e,h=!1;for(;m!==document.body&&!h;)m=m.parentNode,h=m.tagName==="DIALOG";const L=(_=!1)=>{e.style.setProperty("transform",c,"important");const $=_?{getPropertyValue:ce=>"unset"}:getComputedStyle(e),ne=(i.dataset.theme=$.getPropertyValue("--exio-theme").trim(),$.getPropertyValue("--exio-standard-transition-duration")),ye=$.getPropertyValue("--exio-shadow-color"),A=$.getPropertyValue("--exio-shadow-size");var we=$.getPropertyValue("color"),ke=$.getPropertyValue("background-color"),$e=$.getPropertyValue("font-family"),Le=$.getPropertyValue("font-size");const Ee=$.getPropertyValue("padding"),_e=$.getPropertyValue("padding-top"),Ce=$.getPropertyValue("padding-bottom");var Me={left:0,top:0,width:window.innerWidth,height:window.innerHeight};const ae={left:0,top:0,width:0,height:0},{left:se,top:le,height:R,width:q}=_?ae:h?m.getBoundingClientRect():Me;s.innerHTML=` .${s.id} { position: fixed; top: ${d.bottom}px; left: ${d.left}px; width: ${d.width}px; background-color: ${ke}; transition: opacity ${ne}; color: ${we}; font-family: ${$e}; font-size: ${Le}; opacity: 0; pointer-events: none; touch-action: none; user-select: none; z-index: 69420; } .${s.id}:focus { opacity: 1; outline: none; pointer-events: auto; touch-action: auto; } `,l.innerHTML=` .${l.id} { opacity: 0; } `,i.innerHTML="",_||setTimeout(()=>{const ce=e.querySelectorAll("option");let P,U;ce.forEach((de,Oe)=>{if(!de.disabled){const M=document.createElement("div");P=P||M,(U=M).style.padding=Ee,M.style.boxSizing="border-box",M.style.cursor="default",M.textContent=de.textContent,g.push(T(M)),i.appendChild(M),M.addEventListener("click",()=>{e.selectedIndex=Oe,e.dispatchEvent(new Event("change")),i.blur()},{passive:!0})}}),P&&(P.style.marginTop=_e),U&&(U.style.marginBottom=Ce);var{height:F,width:H,left:S}=_?ae:i.getBoundingClientRect(),N=F+d.bottom-(h?le:0)>=R?Math.max(0,R-F):d.bottom-le,H=H+d.left-(h?se:0)>=q?Math.max(0,q-H):S-2*se,S=(s.innerHTML+=` .${s.id} { top: ${N}px; left: ${H}px; overflow: auto; max-width: ${q}px; max-height: ${R}px; } `,i.getBoundingClientRect()),S=Math.max(S.bottom-Math.min(d.top,N),F);l.innerHTML=` .${l.id} { position: fixed; top: calc(${Math.min(d.top,N)}px - ${A}); left: calc(${H}px - ${A}); width: ${d.width}px; height: ${S}px; z-index: 69419; border: ${A} solid ${ye}; transition: opacity ${ne}; touch-action: none; user-select: none; pointer-events: none; opacity: 0; box-sizing: content-box; } `,setTimeout(()=>{l.innerHTML+=` .${s.id}:focus ~ .${l.id} { opacity: 1; touch-action: unset !important; user-select: unset !important; pointer-events: unset !important; } `},0)},0)},E=(L(!0),m.appendChild(i),m.appendChild(a),e.addEventListener("mousedown",f),e.addEventListener("touchstart",f),()=>{u&&(u=!1,L(),i.tabIndex=0,i.focus())}),j=(e.addEventListener("click",E,{passive:!0}),e.addEventListener("touchend",E),()=>{i.blur()}),ie=()=>{i.tabIndex=-1};return i.addEventListener("blur",ie),window.addEventListener("scroll",j,{passive:!0}),window.addEventListener("resize",j,{passive:!0}),Object.assign(Object.assign({},w(o,e,oo)),y(()=>{g.forEach(_=>_.destroy()),window.removeEventListener("scroll",j),window.removeEventListener("resize",j),e.removeEventListener("mousedown",f),e.removeEventListener("touchstart",f),e.removeEventListener("click",E),e.removeEventListener("touchend",E),i.removeEventListener("blur",ie),r.destroy(),t.remove(),i.remove(),s.remove(),a.remove(),l.remove(),n.destroy()}))}const to=Object.assign({backgroundColor:{prop:"background-color",val:""},indicatorColor:{prop:"--exio-radio-indicator-color",val:""},transitionDuration:{prop:"--exio-standard-transition-duration",val:""},borderColor:{prop:"border-color",val:""}},V),Eo=(e,o={})=>{const n=k(e),r=T(e,{borderStyle:"none"}),t=p(e),i=(t.innerHTML=` .${t.id} { -webkit-appearance: none; width: 20px; height: 20px; border-radius: 100px; display: flex; align-items: center; justify-content: center; padding: 0px; border-color: black; } [data-theme=dark] .${t.id} { border-color: white; } .${t.id}:not(:checked) { background-color: transparent; } `,p(e)),a=setTimeout(()=>{i.innerHTML=` .${i.id}::after { content: ''; position: absolute; width: ${e.clientHeight}px; height: ${e.clientHeight}px; border-radius: 100%; transform: scale(0); background-color: var(--exio-radio-indicator-color); transition: transform var(--exio-standard-transition-duration); z-index: -1000; } .${i.id}:checked::after { transform: scale(0.55); } `},0);return Object.assign(Object.assign({},w(o,e,to)),y(()=>{r.destroy(),t.remove(),i.remove(),n.destroy(),clearTimeout(a)}))},ro={backgroundColor:{prop:"background-color",val:""},transitionDuration:{prop:"--exio-slow-transition-duration",val:""},backdopColor:{prop:"--exio-backdrop-color",val:""}};function io(e,o={}){const n=k(e);let r=Boolean(e.open);const t=p(e),i=(t.innerHTML=` @keyframes exio-dialog-fade-in { 0% { opacity: 0; transform: scale(0); } 100% { opacity: 1; transform: scale(1); } } @keyframes exio-dialog-fade-out { 0% { opacity: 1; transform: scale(1) translateY(-50%); } 100% { opacity: 0; transform: scale(0) translateY(-50%); } } .${t.id} { border-radius: 0px; border: 0px solid transparent; z-index: 69420; } .${t.id}::backdrop { background-color: transparent; } .${t.id}:not([open]) { display: block; position: fixed; top: 50%; transform-origin: top center; transform: translateY(-50%); } .${t.id}[open] { transform-origin: center center; animation-name: exio-dialog-fade-in; animation-duration: var(--exio-slow-transition-duration); animation-fill-mode: forwards; } `,je.registerDialog(e),e.close(),r&&e.showModal(),p(e)),a=(i.innerHTML=` .${i.id}:not([open]) { display: none; } `,()=>{i.innerHTML=` .${i.id}:not([open]) { animation-name: exio-dialog-fade-out; animation-duration: var(--exio-slow-transition-duration); animation-fill-mode: forwards; } `,e.removeEventListener("animationstart",a)}),s=(e.addEventListener("animationstart",a,{passive:!0}),document.createElement("div")),l=p(s),d=()=>{const f=getComputedStyle(e);var g=f.getPropertyValue("--exio-slow-transition-duration"),m=f.getPropertyValue("--exio-backdrop-color");l.innerHTML=` .${l.id} { position: fixed; top: 0px; left: 0px; width: 100%; height: 100%; background-color: ${m}; transition: opacity ${g}; pointer-events: none; touch-action: none; z-index: 42069; } `,s.style.opacity=r?"1":"0"},c=(d(),e.parentElement.appendChild(s),()=>u.observe(e,{attributes:!0,attributeFilter:["open"]})),u=new MutationObserver(()=>{r=Boolean(e.open),u.disconnect(),e.show(),e.close(),d(),r&&e.showModal(),c()});return c(),Object.assign(Object.assign({},w(o,e,ro)),y(()=>{t.remove(),e.removeEventListener("animationstart",a),i&&i.remove(),l.remove(),u.disconnect(),n.destroy()}))}const no=Object.assign({transitionDuration:{prop:"--exio-slow-transition-duration",val:""}},V);function _o(e,o={}){const n=k(e),r=(be(),e.querySelector("summary")),t=T(r,{borderStyle:"reactive"}),i=p(r),a=(i.innerHTML=` .${i.id} { cursor: default; user-select: none; position: relative; } .${i.id}::marker{ font-size: 0px; } .${i.id}::-webkit-details-marker { display: none; } .${i.id}::after { content: 'expand_more'; font-family: 'Material Icons'; font-size: 1.5em; position: absolute; right: 0.25em; top: ${Qe?"0px":"0.1em"}; transform: rotate(0deg); transition: transform var(--exio-slow-transition-duration); } `,p(e)),s=(a.innerHTML=` .${a.id} { transition: max-height var(--exio-slow-transition-duration); overflow: hidden; } `,e.querySelector("*:not(summary)")),l=p(e),d=p(r);let c;const u=f=>{c&&clearTimeout(c);const g=getComputedStyle(r),m=()=>Fe(g.getPropertyValue("--exio-slow-transition-duration")),h=()=>r.offsetHeight+s.offsetHeight;e.open?(f.preventDefault(),l.innerHTML=` .${l.id} { max-height: ${h()}px; } `,setTimeout(()=>{l.innerHTML=` .${l.id} { max-height: ${r.offsetHeight}px; } `,d.innerHTML=` .${d.id}::after { transform: rotate(0deg); } `,c=setTimeout(()=>{e.open=!1},m())},0)):(l.innerHTML=` .${l.id} { max-height: ${r.offsetHeight}px; } `,d.innerHTML=` .${d.id}::after { transform: rotate(180deg); } `,setTimeout(()=>{l.innerHTML=` .${l.id} { max-height: ${h()}px; } `,c=setTimeout(()=>{l.innerHTML=""},m())},0))};return r.addEventListener("click",u),Object.assign(Object.assign({},w(o,e,no)),y(()=>{t.destroy(),i.remove(),a.remove(),l.remove(),n.destroy(),r.removeEventListener("click",u)}))}const ao={};function so(e,o={}){const n=p(e);return n.innerHTML=" body { margin: 0; padding: 0; } * { font-family: 'Segoe UI'; } * ::-webkit-scrollbar { width: 8px; height: 8px; } * ::-webkit-scrollbar-track { background: transparent; } * ::-webkit-scrollbar-thumb { background: #888; } * ::-webkit-scrollbar-thumb:hover { background: #555; } * ::-webkit-scrollbar-corner { background: transparent; } * { scrollbar-width: thin; scrollbar-color: #888 transparent; } ",Object.assign(Object.assign({},w(o,e,ao)),y(()=>{n.remove()}))}const B=Pe("dark",!0),lo=ze(B,e=>e?"dark":"light"),xe=Ie(!1);function co(e){let o,n,r,t,i,a,s,l;return{c(){o=x("dialog"),n=x("h2"),n.textContent="Hello World!",r=O(),t=x("p"),t.textContent="Exio uses the HTML dialog element.",i=O(),a=x("button"),a.textContent="Close",v(n,"class","svelte-xxdtl1"),v(a,"class","blue"),ue(a,"float","right"),o.open=e[0],v(o,"class","dialog svelte-xxdtl1"),ue(o,"width","min(300px, 100%)")},m(d,c){G(d,o,c),b(o,n),b(o,r),b(o,t),b(o,i),b(o,a),s||(l=[C(ve.call(null,a)),me(a,"click",e[1]),C(io.call(null,o))],s=!0)},p(d,[c]){c&1&&(o.open=d[0])},i:z,o:z,d(d){d&&K(o),s=!1,pe(l)}}}function uo(e,o,n){let r;return I(e,xe,i=>n(0,r=i)),[r,()=>Ve(xe,r=!1,r)]}class mo extends W{constructor(o){super();Y(this,o,uo,co,X,{})}}function po(e){let o,n,r,t,i,a,s,l,d,c,u,f,g,m;return{c(){o=x("div"),n=x("div"),r=x("a"),t=x("button"),i=x("span"),i.textContent="home",a=O(),s=x("div"),l=x("span"),l.textContent="light_mode",d=O(),c=x("input"),u=O(),f=x("span"),f.textContent="dark_mode",v(i,"class","svelte-1yeho5w"),v(t,"class","home-button svelte-1yeho5w"),v(t,"tabindex","-1"),v(r,"href","#/"),v(r,"class","svelte-1yeho5w"),v(n,"class","home svelte-1yeho5w"),v(l,"class","svelte-1yeho5w"),v(c,"type","checkbox"),v(c,"id","dark-mode"),v(c,"class","svelte-1yeho5w"),v(f,"class","svelte-1yeho5w"),v(s,"class","toggler svelte-1yeho5w"),v(o,"class","navbar svelte-1yeho5w")},m(h,L){G(h,o,L),b(o,n),b(n,r),b(r,t),b(t,i),b(o,a),b(o,s),b(s,l),b(s,d),b(s,c),c.checked=e[0],b(s,u),b(s,f),g||(m=[C(re.call(null,i)),C(ve.call(null,t)),C(re.call(null,l)),C(Xe.call(null,c)),me(c,"change",e[1]),C(re.call(null,f)),C(Ke.call(null,o))],g=!0)},p(h,[L]){L&1&&(c.checked=h[0])},i:z,o:z,d(h){h&&K(o),g=!1,pe(m)}}}function fo(e,o,n){let r;I(e,B,i=>n(0,r=i));function t(){r=this.checked,B.set(r)}return[r,t]}class ho extends W{constructor(o){super();Y(this,o,fo,po,X,{})}}function go(e){let o,n,r,t,i,a,s,l,d;return n=new ho({}),t=new mo({}),a=new De({props:{routes:e[1]}}),{c(){o=x("div"),Z(n.$$.fragment),r=O(),Z(t.$$.fragment),i=O(),Z(a.$$.fragment),v(o,"data-theme",e[0])},m(c,u){G(c,o,u),J(n,o,null),b(o,r),J(t,o,null),b(o,i),J(a,o,null),s=!0,l||(d=C(so.call(null,o)),l=!0)},p(c,[u]){(!s||u&1)&&v(o,"data-theme",c[0])},i(c){s||(Q(n.$$.fragment,c),Q(t.$$.fragment,c),Q(a.$$.fragment,c),s=!0)},o(c){ee(n.$$.fragment,c),ee(t.$$.fragment,c),ee(a.$$.fragment,c),s=!1},d(c){c&&K(o),oe(n),oe(t),oe(a),l=!1,d()}}}function vo(e,o,n){let r,t;I(e,B,a=>n(2,r=a)),I(e,lo,a=>n(0,t=a));let i={"/":fe({asyncComponent:()=>te(()=>import("./Home.40e5dc4e.js"),["assets/Home.40e5dc4e.js","assets/Home.54f9aa24.css","assets/vendor.0c9474f7.js"])}),"/docs":fe({asyncComponent:()=>te(()=>import("./Docs.47fe95cd.js"),["assets/Docs.47fe95cd.js","assets/Docs.13382db5.css","assets/vendor.0c9474f7.js"])})};return e.$$.update=()=>{e.$$.dirty&1&&document.body.parentElement.style.setProperty("color-scheme",t),e.$$.dirty&4&&document.body.classList[r?"add":"remove"]("dark")},[t,i,r]}class bo extends W{constructor(o){super();Y(this,o,vo,go,X,{})}}new bo({target:document.getElementById("app")});export{T as a,Xe as b,be as c,y as d,k as e,ve as f,re as g,Eo as h,$o as i,Lo as j,_o as k,ko as l,Ke as m,yo as n,wo as o,B as p,xe as q,p as s,w as u};
//# sourceMappingURL=index.b272822b.js.map
