import{y as Ee,$ as _e,I as Oe,d as Ce,w as je,a as Me,b as Se,S as R,i as q,s as U,e as x,c as C,f as b,g as ne,h as F,j as h,k as E,l as ae,n as H,m as N,r as se,o as P,p as Te,R as He,q as W,t as Y,u as X,v as G,x as K,z as le}from"./vendor.0c9474f7.js";const Pe=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};Pe();const Ie="modulepreload",ce={},Ve="/exio/",Z=function(o,n){return!n||n.length===0?o():Promise.all(n.map(r=>{if(r=`${Ve}${r}`,r in ce)return;ce[r]=!0;const t=r.endsWith(".css"),i=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const a=document.createElement("link");if(a.rel=t?"stylesheet":Ie,t||(a.as="script",a.crossOrigin=""),a.href=r,document.head.appendChild(a),t)return new Promise((l,c)=>{a.addEventListener("load",l),a.addEventListener("error",c)})})).then(()=>o())};Ee("en",()=>Z(()=>import("./en.d6ba8bc1.js"),[]));_e({fallbackLocale:"en",initialLocale:Oe()});function ze(e=10){var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let n="";for(;!n||document.querySelector("#"+n)!==null;){const t=["exio-"];for(let i=0;i<e;i++){var r=Math.floor(Math.random()*o.length);t.push(o.substring(r,r+1))}n=t.join("")}return n}function v(...e){return{destroy(){e.forEach(o=>{o()})}}}function w(e,o,n){let r=e;var t=i=>{Object.keys(r).forEach(a=>{o.style.removeProperty(n[a].prop)}),Object.entries(i).forEach(([a,l])=>{o.style.setProperty(n[a].prop,""+l)}),r=i};return t(e),{update:t}}function f(e){var o=ze();const n=document.getElementById(o)||document.createElement("style");return n.id=o,e.classList.add(o),document.head.appendChild(n),n}function De(e,o){var{left:e,top:n,width:r,height:t}=e.getBoundingClientRect(),{clientX:o,clientY:i}=o,[o,e]=[o-e,i-n];return{x:o,y:e,width:r,height:t}}function Be(e){return parseFloat(e)*(/\ds$/.test(e)?1e3:1)}const Ae={};function k(e,o={}){e.classList.add("exio-component");let n=document.querySelector("#exio-styles");return n||((n=document.createElement("style")).id="exio-styles",n.innerHTML=` .exio-component { --exio-backdrop-color: rgba(128, 128, 128, 0.2); --exio-border-width: 2px; --exio-clicking-scale: 0.95; --exio-checkbox-checkmark-color: white; --exio-checkbox-checked-fill-color: black; --exio-disabled-filter: brightness(1.2) grayscale(0.5); --exio-focused-border-color: rgba(0, 0, 0, 0.5); --exio-hover-background-scale: 4; --exio-hover-body-color: rgba(128, 128, 128, 0.3); --exio-hover-border-color: rgba(0, 0, 0, 0.25); --exio-hover-border-scale: 2; --exio-loader-fill-color: black; --exio-loader-duration: 1s; --exio-radio-indicator-color: black; --exio-slider-thumb-color: black; --exio-slider-thumb-size: 12px; --exio-slider-thumb-hover-outline-size: 18px; --exio-slider-thumb-grab-outline-size: 25px; --exio-slider-track-size: 4px; --exio-fast-transition-duration: 0.1s; --exio-slow-transition-duration: 0.4s; --exio-standard-transition-duration: 0.2s; --exio-switch-checked-fill-color: darkgray; --exio-switch-thumb-color: black; --exio-default-text-color: black; --exio-zoom-in-animation-scale: 97.5%; } .exio-component { --is-exio-component: true; --exio-theme: light; color: var(--exio-default-text-color); } [data-theme="dark"] .exio-component, .exio-component[data-theme="dark"] { --exio-disabled-filter: brightness(0.6) grayscale(0.5); --exio-focused-border-color: rgba(255, 255, 255, 1); --exio-hover-background-scale: 4; --exio-hover-body-color: rgba(128, 128, 128, 0.3); --exio-hover-border-color: rgba(255, 255, 255, 0.5); --exio-hover-border-scale: 2; --exio-loader-fill-color: white; --exio-loader-duration: 1s; --exio-switch-checked-fill-color: white; --exio-checkbox-checkmark-color: black; --exio-checkbox-checked-fill-color: white; --exio-slider-thumb-color: white; --exio-switch-thumb-color: white; --exio-radio-indicator-color: white; --exio-theme: dark; --exio-default-text-color: white; } @font-face { font-family: 'Segoe UI'; src: local('Segoe UI Light'), url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/light/latest.woff2) format('woff2'), url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/light/latest.woff) format('woff'), url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/light/latest.ttf) format('truetype'); font-weight: 100; } @font-face { font-family: 'Segoe UI'; src: local('Segoe UI Semilight'), url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semilight/latest.woff2) format('woff2'), url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semilight/latest.woff) format('woff'), url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semilight/latest.ttf) format('truetype'); font-weight: 200; } @font-face { font-family: 'Segoe UI'; src: local('Segoe UI'), url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/normal/latest.woff2) format('woff2'), url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/normal/latest.woff) format('woff'), url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/normal/latest.ttf) format('truetype'); font-weight: 400; } @font-face { font-family: 'Segoe UI'; src: local('Segoe UI Semibold'), url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semibold/latest.woff2) format('woff2'), url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semibold/latest.woff) format('woff'), url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semibold/latest.ttf) format('truetype'); font-weight: 600; } @font-face { font-family: 'Segoe UI'; src: local('Segoe UI Bold'), url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/bold/latest.woff2) format('woff2'), url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/bold/latest.woff) format('woff'), url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/bold/latest.ttf) format('truetype'); font-weight: 700; } `,document.head.appendChild(n)),Object.assign(Object.assign({},w(o,e,Ae)),v(()=>{e.classList.remove("exio-component")}))}const de={borderStyle:"reactive",disableClicking:!1,focusable:!1},I={borderWidth:{prop:"--exio-border-width",val:""},clickingScale:{prop:"--exio-clicking-scale",val:""},disabledFilter:{prop:"--exio-disabled-filter",val:""},focusedBorderColor:{prop:"--exio-focused-border-color",val:""},hoverBackgroundScale:{prop:"--exio-hover-background-scale",val:""},hoverBodyColor:{prop:"--exio-hover-body-color",val:""},hoverBorderColor:{prop:"--exio-hover-border-color",val:""},hoverBorderScale:{prop:"--exio-hover-border-scale",val:""},transitionDuration:{prop:"--exio-standard-transition-duration",val:""}};function j(e,o=de){const n=Object.assign(Object.assign({},de),o),r=k(e),t=f(e),i=(d=0,s=0,u=0,m=0)=>{var p=`calc( ${Math.max(u,m)}px * var(--exio-hover-border-scale) )`,y=n.borderStyle==="static",g=n.borderStyle==="hover",p=n.borderStyle==="none"?"":y||g?"border: var(--exio-border-width) solid var(--exio-hover-border-color)":`border-image: radial-gradient( ${p} ${p} at var(--exio-mouse-x) var(--exio-mouse-y), var(--exio-hover-border-color) 0%, transparent calc(100% * var(--exio-hover-border-scale)) ) 9 / var(--exio-border-width) / 0px stretch`,g=g?"":` background-image: radial-gradient( calc( ${Math.max(u,m)}px * var(--exio-hover-background-scale) ) at ${d}px ${s}px, var(--exio-hover-body-color) 0%, transparent 100% ) `,u=n.focusable?"border: var(--exio-border-width) solid var(--exio-focused-border-color)":"",m=u?":not(:focus)":"";t.innerHTML=` .${t.id} { outline: none; border: var(--exio-border-width) solid transparent; color: inherit; font-size: inherit; font-family: inherit; padding: 0.25em 0.75em; overflow: hidden; border-radius: 0px; ${y?p:""}; --exio-mouse-x: ${d}px; --exio-mouse-y: ${s}px; transition: transform var(--exio-standard-transition-duration); } .${t.id}:hover:not(.${t.id}-active)${m} { ${p}; background-size: calc(100% + 2 * var(--exio-border-width)); background-position: center; ${g}; transition: transform var(--exio-standard-transition-duration); } .${t.id}:focus { ${u}; } .${t.id}.${t.id}-active { filter: brightness(0.8); transition: none; transform: scale(var(--exio-clicking-scale)); } .${t.id}:disabled { pointer-events: none; touch-action: none; filter: var(--exio-disabled-filter); } `};function a(d){var{x:d,y:s,width:u,height:m}=De(e,d);e.removeEventListener("mousemove",a),e.matches(":hover")&&(i(d,s,u,m),e.addEventListener("mousemove",a,{passive:!0}))}i(),e.addEventListener("mouseenter",a,{passive:!0});const l=()=>{e.classList.add(t.id+"-active")},c=()=>{e.classList.remove(t.id+"-active")};return n.disableClicking||(e.addEventListener("touchstart",l,{passive:!0}),window.addEventListener("touchend",c,{passive:!0}),e.addEventListener("mousedown",l,{passive:!0}),window.addEventListener("mouseup",c,{passive:!0}),window.addEventListener("dragend",c,{passive:!0})),v(()=>{e.removeEventListener("mouseenter",a),e.removeEventListener("mousemove",a),n.disableClicking||(e.removeEventListener("touchstart",l),window.removeEventListener("touchend",c),e.removeEventListener("mousedown",l),window.removeEventListener("mouseup",c),window.removeEventListener("dragend",c),e.remove(),t.remove()),r.destroy()})}const Re=Object.assign({backgroundColor:{prop:"background-color",val:""},textColor:{prop:"color",val:""}},I);function ue(e,o={}){const n=k(e),r=j(e),t=f(e);return t.innerHTML=` .${t.id} { user-select: none; } `,Object.assign(Object.assign({},w(o,e,Re)),v(()=>{r.destroy(),t.remove(),n.destroy()}))}const qe={backgroundColor:{prop:"background-color",val:""},borderWidth:{prop:"--exio-border-width",val:""},checkedFillColor:{prop:"--exio-switch-checked-fill-color",val:""},switchThumbColor:{prop:"--exio-switch-thumb-color",val:""},transitionDuration:{prop:"--exio-standard-transition-duration",val:""},hoverBackgroundScale:{prop:"--exio-hover-background-scale",val:""},hoverBodyColor:{prop:"--exio-hover-body-color",val:""},clickingScale:{prop:"--exio-clicking-scale",val:""},disabledFilter:{prop:"--exio-disabled-filter",val:""}};function Ue(e,o={}){const n=k(e),r=j(e,{borderStyle:"static"}),t=f(e),i=(t.innerHTML=` .${t.id} { -webkit-appearance: none; width: 48px; height: 20px; border-radius: 100px; display: flex; align-items: center; justify-content: center; overflow: visible; border-color: black; background-color: var(--exio-switch-checked-fill-color); } [data-theme=dark] .${t.id} { border-color: white; } .${t.id}:not(:checked) { background-color: transparent; } `,f(e));return i.innerHTML=` .${i.id}::after { content: ''; position: absolute; width: ${e.clientHeight}px; height: ${e.clientHeight}px; border-radius: 100%; transform: translateX(calc( ${-e.clientWidth/2}px + ${e.clientHeight/2}px )) scale(0.55); background-color: var(--exio-switch-thumb-color); transition: transform var(--exio-standard-transition-duration); } .${i.id}:checked::after { transform: translateX(calc( ${e.clientWidth/2}px - ${e.clientHeight/2}px )) scale(0.5); } `,Object.assign(Object.assign({},w(o,e,qe)),v(()=>{r.destroy(),t.remove(),i.remove(),n.destroy()}))}const V={animationDuration:{prop:"animation-duration",val:""}};function po(e,o={}){const n=k(e),r=f(e);return r.innerHTML=` @keyframes exio-fly-in { from { transform: translateY(50%); opacity: 0; } to { transform: translateY(0%); opacity: 1; } } .${r.id} { animation: exio-fly-in; animation-duration: 0.6s; animation-fill-mode: forwards; opacity: 0; } `,Object.assign(Object.assign({},w(o,e,V)),v(()=>{r.remove(),n.destroy()}))}function go(e,o={}){const n=k(e),r=f(e);return r.innerHTML=` @keyframes exio-fade-in { from { opacity: 0; } to { opacity: 1; } } .${r.id} { animation: exio-fade-in; animation-duration: 0.6s; animation-fill-mode: forwards; opacity: 0; } `,Object.assign(Object.assign({},w(o,e,V)),v(()=>{r.remove(),n.destroy()}))}const Fe=Object.assign({animationScale:{prop:"--exio-zoom-in-animation-scale",val:""}},V);function Ne(e,o={}){const n=k(e),r=f(e);return r.innerHTML=` @keyframes exio-zoom-in { from { transform: scale(var(--exio-zoom-in-animation-scale)); opacity: 0; } to { transform: scale(1); opacity: 1; } } .${r.id} { animation: exio-zoom-in; animation-duration: 0.5s; animation-fill-mode: forwards; opacity: 0; } `,Object.assign(Object.assign({},w(o,e,Fe)),v(()=>{r.remove(),n.destroy()}))}const We=Object.assign(Object.assign({},V),{animationDuration:{prop:"--exio-loader-duration",val:""},fillColor:{prop:"--exio-loader-fill-color",val:""},backgroundColor:{prop:"background-color",val:""}});function ho(e,o={}){const n=k(e),r=f(e);return r.innerHTML=` @keyframes exio-loading-bar { from { background-position: 100% 0; } to { background-position: 0 0; } } .${r.id} { background-image: linear-gradient( to right, var(--exio-loader-fill-color) 0%, var(--exio-loader-fill-color) 25%, transparent 25%, transparent 50%, var(--exio-loader-fill-color) 50%, var(--exio-loader-fill-color) 75%, transparent 75%, transparent 100% ); background-size: 200% 100%; animation: exio-loading-bar var(--exio-loader-duration) linear infinite; } `,Object.assign(Object.assign({},w(o,e,We)),v(()=>{r.remove(),n.destroy()}))}function me(){let e=document.querySelector("#exio-icons-font");e||((e=document.createElement("link")).id="exio-icons-font",e.href="//fonts.googleapis.com/icon?family=Material+Icons",e.rel="stylesheet",document.body.appendChild(e))}const Ye={},J=(e,o={})=>{const n=k(e),r=(me(),f(e));return r.innerHTML=` .${r.id} { font-family: 'Material Icons'; font-weight: normal; font-style: normal; display: inline-block; line-height: 1; text-transform: none; letter-spacing: normal; word-wrap: normal; white-space: nowrap; direction: ltr; -webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility; -moz-osx-font-smoothing: grayscale; font-feature-settings: 'liga'; } `,Object.assign(Object.assign({},w(o,e,Ye)),v(()=>{r.remove(),n.destroy()}))},bo=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),Xe=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent),Ge=Object.assign({backgroundColor:{prop:"background-color",val:""},transitionDuration:{prop:"--exio-standard-transition-duration",val:""}},I);function xo(e,o={}){const n=k(e),r=j(e),t=f(e),i=(t.innerHTML=` .${t.id} { user-select: none; } `,document.createElement("div")),a=f(i);let l=e.getBoundingClientRect(),c="",d=!1;const s=$=>{Xe||(c=e.style.getPropertyValue("transform"),e.style.setProperty("transform","none","important"),l=e.getBoundingClientRect(),e.style.setProperty("transform",c,"important"),$!=null&&$.preventDefault(),d=!0)},u=[];let m=e,p=!1;for(;m!==document.body&&!p;)m=m.parentNode,p=m.tagName==="DIALOG";const y=($=!1)=>{e.style.setProperty("transform",c,"important");const L=$?{getPropertyValue:re=>"unset"}:getComputedStyle(e);i.dataset.theme=L.getPropertyValue("--exio-theme").trim();var pe=L.getPropertyValue("--exio-standard-transition-duration"),ge=L.getPropertyValue("color"),he=L.getPropertyValue("background-color"),be=L.getPropertyValue("font-family"),xe=L.getPropertyValue("font-size");const ve=L.getPropertyValue("padding"),ye=L.getPropertyValue("padding-top"),we=L.getPropertyValue("padding-bottom");var ke={left:0,top:0,width:window.innerWidth,height:window.innerHeight};const ee={left:0,top:0,width:0,height:0},{left:oe,top:te,height:D,width:B}=$?ee:p?m.getBoundingClientRect():ke;a.innerHTML=` .${a.id} { position: fixed; top: ${l.bottom}px; left: ${l.left}px; width: ${l.width}px; background-color: ${he}; transition: opacity ${pe}; color: ${ge}; font-family: ${be}; font-size: ${xe}; opacity: 0; pointer-events: none; touch-action: none; user-select: none; z-index: 69420; } .${a.id}:focus { opacity: 1; outline: none; pointer-events: auto; touch-action: auto; } `,i.innerHTML="",$||setTimeout(()=>{const re=e.querySelectorAll("option");let M,A;re.forEach((ie,Le)=>{if(!ie.disabled){const O=document.createElement("div");M=M||O,(A=O).style.padding=ve,O.style.boxSizing="border-box",O.style.cursor="default",O.textContent=ie.textContent,u.push(j(O)),i.appendChild(O),O.addEventListener("click",()=>{e.selectedIndex=Le,e.dispatchEvent(new Event("change")),i.blur()},{passive:!0})}}),M&&(M.style.marginTop=ye),A&&(A.style.marginBottom=we);var{height:S,width:T,left:$e}=$?ee:i.getBoundingClientRect(),S=S+l.bottom-(p?te:0)>=D?Math.max(0,D-S):l.bottom-te,T=T+l.left-(p?oe:0)>=B?Math.max(0,B-T):$e-2*oe;a.innerHTML+=` .${a.id} { top: ${S}px; left: ${T}px; overflow: auto; max-width: ${B}px; max-height: ${D}px; } `},0)},g=(y(!0),m.appendChild(i),e.addEventListener("mousedown",s),e.addEventListener("touchstart",s),()=>{d&&(d=!1,y(),i.tabIndex=0,i.focus())}),_=(e.addEventListener("click",g,{passive:!0}),e.addEventListener("touchend",g),()=>{i.blur()}),Q=()=>{i.tabIndex=-1};return i.addEventListener("blur",Q),window.addEventListener("scroll",_,{passive:!0}),window.addEventListener("resize",_,{passive:!0}),Object.assign(Object.assign({},w(o,e,Ge)),v(()=>{u.forEach($=>$.destroy()),window.removeEventListener("scroll",_),window.removeEventListener("resize",_),e.removeEventListener("mousedown",s),e.removeEventListener("touchstart",s),e.removeEventListener("click",g),e.removeEventListener("touchend",g),i.removeEventListener("blur",Q),r.destroy(),t.remove(),i.remove(),a.remove(),n.destroy()}))}const Ke=Object.assign({backgroundColor:{prop:"background-color",val:""},indicatorColor:{prop:"--exio-radio-indicator-color",val:""},transitionDuration:{prop:"--exio-standard-transition-duration",val:""},borderColor:{prop:"border-color",val:""}},I),vo=(e,o={})=>{const n=k(e),r=j(e,{borderStyle:"none"}),t=f(e),i=(t.innerHTML=` .${t.id} { -webkit-appearance: none; width: 20px; height: 20px; border-radius: 100px; display: flex; align-items: center; justify-content: center; padding: 0px; border-color: black; } [data-theme=dark] .${t.id} { border-color: white; } .${t.id}:not(:checked) { background-color: transparent; } `,f(e)),a=setTimeout(()=>{i.innerHTML=` .${i.id}::after { content: ''; position: absolute; width: ${e.clientHeight}px; height: ${e.clientHeight}px; border-radius: 100%; transform: scale(0); background-color: var(--exio-radio-indicator-color); transition: transform var(--exio-standard-transition-duration); z-index: -1000; } .${i.id}:checked::after { transform: scale(0.55); } `},0);return Object.assign(Object.assign({},w(o,e,Ke)),v(()=>{r.destroy(),t.remove(),i.remove(),n.destroy(),clearTimeout(a)}))},Ze={backgroundColor:{prop:"background-color",val:""},transitionDuration:{prop:"--exio-slow-transition-duration",val:""},backdopColor:{prop:"--exio-backdrop-color",val:""}};function Je(e,o={}){const n=k(e);let r=Boolean(e.open);const t=f(e),i=(t.innerHTML=` @keyframes exio-dialog-fade-in { 0% { opacity: 0; transform: scale(0); } 100% { opacity: 1; transform: scale(1); } } @keyframes exio-dialog-fade-out { 0% { opacity: 1; transform: scale(1) translateY(-50%); } 100% { opacity: 0; transform: scale(0) translateY(-50%); } } .${t.id} { border-radius: 0px; border: 0px solid transparent; z-index: 69420; } .${t.id}::backdrop { background-color: transparent; } .${t.id}:not([open]) { display: block; position: fixed; top: 50%; transform-origin: top center; transform: translateY(-50%); } .${t.id}[open] { transform-origin: center center; animation-name: exio-dialog-fade-in; animation-duration: var(--exio-slow-transition-duration); animation-fill-mode: forwards; } `,Ce.registerDialog(e),e.close(),r&&e.showModal(),f(e)),a=(i.innerHTML=` .${i.id}:not([open]) { display: none; } `,()=>{i.innerHTML=` .${i.id}:not([open]) { animation-name: exio-dialog-fade-out; animation-duration: var(--exio-slow-transition-duration); animation-fill-mode: forwards; } `,e.removeEventListener("animationstart",a)}),l=(e.addEventListener("animationstart",a,{passive:!0}),document.createElement("div")),c=f(l),d=()=>{const m=getComputedStyle(e);var p=m.getPropertyValue("--exio-slow-transition-duration"),y=m.getPropertyValue("--exio-backdrop-color");c.innerHTML=` .${c.id} { position: fixed; top: 0px; left: 0px; width: 100%; height: 100%; background-color: ${y}; transition: opacity ${p}; pointer-events: none; touch-action: none; z-index: 42069; } `,l.style.opacity=r?"1":"0"},s=(d(),e.parentElement.appendChild(l),()=>u.observe(e,{attributes:!0,attributeFilter:["open"]})),u=new MutationObserver(()=>{r=Boolean(e.open),u.disconnect(),e.show(),e.close(),d(),r&&e.showModal(),s()});return s(),Object.assign(Object.assign({},w(o,e,Ze)),v(()=>{t.remove(),e.removeEventListener("animationstart",a),i&&i.remove(),c.remove(),u.disconnect(),n.destroy()}))}const Qe=Object.assign({transitionDuration:{prop:"--exio-slow-transition-duration",val:""}},I);function yo(e,o={}){const n=k(e),r=(me(),e.querySelector("summary")),t=j(r,{borderStyle:"reactive"}),i=f(r),a=(i.innerHTML=` .${i.id} { cursor: default; user-select: none; position: relative; } .${i.id}::marker{ font-size: 0px; } .${i.id}::-webkit-details-marker { display: none; } .${i.id}::after { content: 'expand_more'; font-family: 'Material Icons'; font-size: 1.5em; position: absolute; right: 0.25em; top: 0.1em; transform: rotate(0deg); transition: transform var(--exio-slow-transition-duration); } `,f(e)),l=(a.innerHTML=` .${a.id} { transition: max-height var(--exio-slow-transition-duration); overflow: hidden; } `,e.querySelector("*:not(summary)")),c=f(e),d=f(r);let s;const u=m=>{s&&clearTimeout(s);const p=getComputedStyle(r),y=()=>Be(p.getPropertyValue("--exio-slow-transition-duration")),g=()=>r.offsetHeight+l.offsetHeight;e.open?(m.preventDefault(),c.innerHTML=` .${c.id} { max-height: ${g()}px; } `,setTimeout(()=>{c.innerHTML=` .${c.id} { max-height: ${r.offsetHeight}px; } `,d.innerHTML=` .${d.id}::after { transform: rotate(0deg); } `,s=setTimeout(()=>{e.open=!1},y())},0)):(c.innerHTML=` .${c.id} { max-height: ${r.offsetHeight}px; } `,d.innerHTML=` .${d.id}::after { transform: rotate(180deg); } `,setTimeout(()=>{c.innerHTML=` .${c.id} { max-height: ${g()}px; } `,s=setTimeout(()=>{c.innerHTML=""},y())},0))};return r.addEventListener("click",u),Object.assign(Object.assign({},w(o,e,Qe)),v(()=>{t.destroy(),i.remove(),a.remove(),c.remove(),n.destroy(),r.removeEventListener("click",u)}))}const eo={};function oo(e,o={}){const n=f(e);return n.innerHTML=" body { margin: 0; padding: 0; } * { font-family: 'Segoe UI'; } * ::-webkit-scrollbar { width: 8px; height: 8px; } * ::-webkit-scrollbar-track { background: transparent; } * ::-webkit-scrollbar-thumb { background: #888; } * ::-webkit-scrollbar-thumb:hover { background: #555; } * ::-webkit-scrollbar-corner { background: transparent; } * { scrollbar-width: thin; scrollbar-color: #888 transparent; } ",Object.assign(Object.assign({},w(o,e,eo)),v(()=>{n.remove()}))}const z=je("dark",!0),to=Me(z,e=>e?"dark":"light"),fe=Se(!1);function ro(e){let o,n,r,t,i,a,l,c;return{c(){o=x("dialog"),n=x("h2"),n.textContent="Hello World!",r=C(),t=x("p"),t.textContent="Exio uses the HTML dialog element.",i=C(),a=x("button"),a.textContent="Close",b(n,"class","svelte-xxdtl1"),b(a,"class","blue"),ne(a,"float","right"),o.open=e[0],b(o,"class","dialog svelte-xxdtl1"),ne(o,"width","min(300px, 100%)")},m(d,s){F(d,o,s),h(o,n),h(o,r),h(o,t),h(o,i),h(o,a),l||(c=[E(ue.call(null,a)),ae(a,"click",e[1]),E(Je.call(null,o))],l=!0)},p(d,[s]){s&1&&(o.open=d[0])},i:H,o:H,d(d){d&&N(o),l=!1,se(c)}}}function io(e,o,n){let r;return P(e,fe,i=>n(0,r=i)),[r,()=>Te(fe,r=!1,r)]}class no extends R{constructor(o){super();q(this,o,io,ro,U,{})}}function ao(e){let o,n,r,t,i,a,l,c,d,s,u,m,p,y;return{c(){o=x("div"),n=x("div"),r=x("a"),t=x("button"),i=x("span"),i.textContent="home",a=C(),l=x("div"),c=x("span"),c.textContent="light_mode",d=C(),s=x("input"),u=C(),m=x("span"),m.textContent="dark_mode",b(i,"class","svelte-1yeho5w"),b(t,"class","home-button svelte-1yeho5w"),b(r,"href","#/"),b(r,"class","svelte-1yeho5w"),b(n,"class","home svelte-1yeho5w"),b(c,"class","svelte-1yeho5w"),b(s,"type","checkbox"),b(s,"id","dark-mode"),b(s,"class","svelte-1yeho5w"),b(m,"class","svelte-1yeho5w"),b(l,"class","toggler svelte-1yeho5w"),b(o,"class","navbar svelte-1yeho5w")},m(g,_){F(g,o,_),h(o,n),h(n,r),h(r,t),h(t,i),h(o,a),h(o,l),h(l,c),h(l,d),h(l,s),s.checked=e[0],h(l,u),h(l,m),p||(y=[E(J.call(null,i)),E(ue.call(null,t)),E(J.call(null,c)),E(Ue.call(null,s)),ae(s,"change",e[1]),E(J.call(null,m)),E(Ne.call(null,o))],p=!0)},p(g,[_]){_&1&&(s.checked=g[0])},i:H,o:H,d(g){g&&N(o),p=!1,se(y)}}}function so(e,o,n){let r;P(e,z,i=>n(0,r=i));function t(){r=this.checked,z.set(r)}return[r,t]}class lo extends R{constructor(o){super();q(this,o,so,ao,U,{})}}function co(e){let o,n,r,t,i,a,l,c,d;return n=new lo({}),t=new no({}),a=new He({props:{routes:e[1]}}),{c(){o=x("div"),W(n.$$.fragment),r=C(),W(t.$$.fragment),i=C(),W(a.$$.fragment),b(o,"data-theme",e[0])},m(s,u){F(s,o,u),Y(n,o,null),h(o,r),Y(t,o,null),h(o,i),Y(a,o,null),l=!0,c||(d=E(oo.call(null,o)),c=!0)},p(s,[u]){(!l||u&1)&&b(o,"data-theme",s[0])},i(s){l||(X(n.$$.fragment,s),X(t.$$.fragment,s),X(a.$$.fragment,s),l=!0)},o(s){G(n.$$.fragment,s),G(t.$$.fragment,s),G(a.$$.fragment,s),l=!1},d(s){s&&N(o),K(n),K(t),K(a),c=!1,d()}}}function uo(e,o,n){let r,t;P(e,z,a=>n(2,r=a)),P(e,to,a=>n(0,t=a));let i={"/":le({asyncComponent:()=>Z(()=>import("./Home.98036394.js"),["assets/Home.98036394.js","assets/Home.54f9aa24.css","assets/vendor.0c9474f7.js"])}),"/docs":le({asyncComponent:()=>Z(()=>import("./Docs.572948d2.js"),["assets/Docs.572948d2.js","assets/Docs.13382db5.css","assets/vendor.0c9474f7.js"])})};return e.$$.update=()=>{e.$$.dirty&1&&document.body.parentElement.style.setProperty("color-scheme",t),e.$$.dirty&4&&document.body.classList[r?"add":"remove"]("dark")},[t,i,r]}class mo extends R{constructor(o){super();q(this,o,uo,co,U,{})}}new mo({target:document.getElementById("app")});export{j as a,Ue as b,me as c,v as d,k as e,ue as f,J as g,vo as h,bo as i,xo as j,yo as k,ho as l,Ne as m,po as n,go as o,z as p,fe as q,f as s,w as u};
//# sourceMappingURL=index.122f7902.js.map