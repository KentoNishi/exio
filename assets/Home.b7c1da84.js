import{S as ct,i as ut,s as dt,z as Kt,A as Qt,B as en,C as tn,t as Ze,u as qe,D as bn,E as nn,a as xn,F as yn,e as u,b as $,c as o,g as G,h as i,j as E,k as W,G as wn,H as kn,n as Ue,p as bt,q as xt,v as yt,J as _n,m as wt,K as Y,f as y,r as Xe,l as Ye,L as pt,o as $n,M as An,N as Je,X as Fn}from"./vendor.6869aba0.js";import{e as Ae,a as Fe,s as K,d as Se,c as an,t as Sn,i as kt,b as ln,f as on,g as En,h as _t,j as rn,k as Ke,l as we,m as sn,n as gt}from"./index.999446a9.js";function Qe(n){const t=Ae(n),e=Fe(n,{borderStyle:"hover",disableClicking:!0}),a=K(n);return a.innerHTML=`
    .${a.id} {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0px;
    }
  `,Se(()=>{e.destroy(),a.remove(),t.destroy()})}function $t(n){const t=Ae(n),e=Fe(n),a=K(n);a.innerHTML=`
    .${a.id} {
      user-select: none;
    }
  `;const l=document.createElement("div"),d=K(l);let f=n.getBoundingClientRect(),c="",k=!1;const F=m=>{c=n.style.getPropertyValue("transform"),n.style.setProperty("transform","none","important"),f=n.getBoundingClientRect(),n.style.setProperty("transform",c,"important"),m==null||m.preventDefault(),k=!0},_=[],A=()=>{n.style.setProperty("transform",c,"important");const m=getComputedStyle(n);l.dataset.theme=m.getPropertyValue("--exio-theme").trim();const x=m.getPropertyValue("--exio-standard-transition-duration"),O=m.getPropertyValue("color"),s=m.getPropertyValue("background-color"),r=m.getPropertyValue("font-family"),p=m.getPropertyValue("font-size"),g=m.getPropertyValue("padding"),v=m.getPropertyValue("padding-top"),b=m.getPropertyValue("padding-bottom");d.innerHTML=`
      .${d.id} {
        position: fixed;
        top: ${f.bottom}px;
        left: ${f.left}px;
        width: ${f.width}px;
        background-color: ${s};
        transition: opacity ${x};
        color: ${O};
        font-family: ${r};
        font-size: ${p};
        opacity: 0;
        pointer-events: none;
        touch-action: none;
        user-select: none;
        z-index: 69420;
      }
      .${d.id}:focus {
        opacity: 1;
        outline: none;
        pointer-events: auto;
        touch-action: auto;
      }
    `,l.innerHTML="",setTimeout(()=>{const S=n.querySelectorAll("option");let h,L;S.forEach((I,C)=>{if(I.disabled)return;const M=document.createElement("div");h||(h=M),L=M,M.style.padding=g,M.style.boxSizing="border-box",M.style.cursor="default",M.textContent=I.textContent,_.push(Fe(M)),l.appendChild(M),M.addEventListener("click",()=>{n.selectedIndex=C,n.dispatchEvent(new Event("change")),l.blur()})}),h&&(h.style.marginTop=v),L&&(L.style.marginBottom=b);const{height:H,width:j,left:U}=l.getBoundingClientRect(),oe=H+f.bottom>=window.innerHeight?Math.max(0,window.innerHeight-H):f.bottom,R=j+f.left>=window.innerWidth?Math.max(0,window.innerWidth-j):U;d.innerHTML+=`
        .${d.id} {
          top: ${oe}px;
          left: ${R}px;
          overflow: auto;
          max-width: ${window.innerWidth}px;
          max-height: ${window.innerHeight}px;
        }
      `},0)};A(),document.body.appendChild(l),n.addEventListener("mousedown",F),n.addEventListener("touchstart",F);const D=()=>{!k||(k=!1,A(),l.tabIndex=0,l.focus())};n.addEventListener("click",D),n.addEventListener("touchend",D);const P=()=>{l.blur()},T=()=>{l.tabIndex=-1};return l.addEventListener("blur",T),window.addEventListener("scroll",P),window.addEventListener("resize",P),Se(()=>{_.forEach(m=>m.destroy()),window.removeEventListener("scroll",P),window.removeEventListener("resize",P),n.removeEventListener("mousedown",F),n.removeEventListener("touchstart",F),n.removeEventListener("click",D),n.removeEventListener("touchend",D),l.removeEventListener("blur",T),e.destroy(),a.remove(),l.remove(),d.remove(),t.destroy()})}const cn=n=>{const t=Ae(n),e=Fe(n,{borderStyle:"static"}),a=K(n);a.innerHTML=`
    .${a.id} {
      -webkit-appearance: none;
      width: 20px;
      height: 20px;
      border-radius: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0px;
      border-color: black;
    }
    [data-theme=dark] .${a.id} {
      border-color: white;
    }
    .${a.id}:not(:checked) {
      background-color: transparent;
    }
  `;const l=K(n);return l.innerHTML=`
    .${l.id}::after {
      content: '';
      position: absolute;
      width: ${n.clientHeight}px;
      height: ${n.clientHeight}px;
      border-radius: 100%;
      transform: scale(0);
      background-color: var(--exio-radio-indicator-color);
      transition: transform var(--exio-standard-transition-duration);
      z-index: -1000;
    }
    .${l.id}:checked::after {
      transform: scale(0.55);
    }
  `,Se(()=>{e.destroy(),a.remove(),l.remove(),t.destroy()})},un=n=>{const t=Ae(n);an();const e=Fe(n,{borderStyle:"static"}),a=K(n);a.innerHTML=`
    .${a.id} {
      -webkit-appearance: none;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0px;
      background-color: var(--exio-checkbox-selected-fill-color);
    }
    .${a.id}:not(:checked) {
      background-color: transparent;
    }
  `;const l=K(n);return l.innerHTML=`
    .${l.id}::after {
      content: 'check';
      font-family: 'Exio Icons';
      position: absolute;
      width: ${n.clientHeight}px;
      height: ${n.clientHeight}px;
      transform: scale(0);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--exio-checkbox-checkmark-color);
    }
    .${l.id}:checked::after {
      transform: scale(1.1);
    }
  `,Se(()=>{e.destroy(),a.remove(),l.remove(),t.destroy()})};function At(n){const t=Ae(n),e=Fe(n,{disableClicking:!0,borderStyle:"hover",focusable:!0}),a=K(n);return a.innerHTML=`
    .${a.id} {
      padding: 0.25em 0.25em;
    }
    .${a.id}:focus {
      color: var(--exio-focused-text-color);
    }
    .${a.id}:disabled {
      pointer-events: none;
      touch-action: none;
      filter: var(--exio-disabled-filter);
    }
  `,Se(()=>{e.destroy(),a.remove(),t.destroy()})}function dn(n){const t=Ae(n);an();const e=n.querySelector("summary"),a=Fe(e,{borderStyle:"reactive"}),l=K(e);l.innerHTML=`
    .${l.id} {
      cursor: default;
      user-select: none;
      position: relative;
    }
    .${l.id}::marker{
      font-size: 0px;
    }
    .${l.id}:after {
      content: 'expand_more';
      font-family: 'Exio Icons';
      font-size: 1.5em;
      position: absolute;
      right: 0.25em;
      transform: rotate(0deg);
      transition: transform var(--exio-slow-transition-duration);
    }
  `;const d=K(n);d.innerHTML=`
    .${d.id} {
      transition: max-height var(--exio-slow-transition-duration);
      overflow: hidden;
    }
  `;const f=n.querySelector("*:not(summary)"),c=K(n),k=K(e);let F;const _=A=>{F&&clearTimeout(F);const D=getComputedStyle(e),P=()=>Sn(D.getPropertyValue("--exio-slow-transition-duration")),T=()=>e.offsetHeight+f.offsetHeight;n.open?(A.preventDefault(),c.innerHTML=`
        .${c.id} {
          max-height: ${T()}px;
        }
      `,setTimeout(()=>{c.innerHTML=`
        .${c.id} {
          max-height: ${e.offsetHeight}px;
        }
      `,k.innerHTML=`
        .${k.id}:after {
          transform: rotate(0deg);
        }
      `,F=setTimeout(()=>{n.open=!1},P())},0)):(c.innerHTML=`
        .${c.id} {
          max-height: ${e.offsetHeight}px;
        }
      `,k.innerHTML=`
        .${k.id}:after {
          transform: rotate(180deg);
        }
      `,setTimeout(()=>{c.innerHTML=`
          .${c.id} {
            max-height: ${T()}px;
          }
        `,F=setTimeout(()=>{c.innerHTML=""},P())},0))};return e.addEventListener("click",_),Se(()=>{a.destroy(),l.remove(),d.remove(),c.remove(),t.destroy(),e.removeEventListener("click",_)})}function Ft(n){const t=Ae(n),e=K(n),a=`
    width: var(--exio-slider-thumb-size);
    height: var(--exio-slider-thumb-size);
    background-color: var(--exio-slider-thumb-color);
    transition:
      ${kt?"box-shadow":"outline"}
      var(--exio-standard-transition-duration);
    border: 0px solid transparent;
    box-sizing: border-box;
    border-radius: 1000px;
    outline: 0px solid var(--exio-hover-body-color);
    box-shadow: 0px 0px 0px 0px var(--exio-hover-body-color);
    cursor: grab;
    transform: translateZ(0);
  `,l=kt?"box-shadow: 0px 0px 0px var(--exio-slider-thumb-hover-outline-size) var(--exio-hover-body-color);":"outline: var(--exio-slider-thumb-hover-outline-size) solid var(--exio-hover-body-color);",f=`
    ${kt?"box-shadow: 0px 0px 0px var(--exio-slider-thumb-grab-outline-size) var(--exio-hover-body-color);":"outline: var(--exio-slider-thumb-grab-outline-size) solid var(--exio-hover-body-color);"}
    cursor: grabbing;
  `;return e.innerHTML=`
    .${e.id} {
      -webkit-appearance: none;
      width: 100%;
      height: var(--exio-slider-track-size);
      border-radius: var(--exio-slider-track-size);
      outline: none;
    }
    
    .${e.id}::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      ${a}
    }
    
    .${e.id}::-moz-range-thumb {
      ${a}
    }
    
    .${e.id}::-webkit-slider-thumb:hover {
      ${l}
    }

    .${e.id}::-moz-range-thumb:hover {
      ${l}
    }
    
    .${e.id}::-webkit-slider-thumb:active {
      ${f}
    }

    .${e.id}::-moz-range-thumb:active {
      ${f}
    }
  `,Se(()=>{e.remove(),t.destroy()})}const pn=Symbol("filename");function Cn(n){let t;const e=n[2].default,a=Kt(e,n,n[1],null);return{c(){a&&a.c()},m(l,d){a&&a.m(l,d),t=!0},p(l,[d]){a&&a.p&&(!t||d&2)&&Qt(a,e,l,l[1],t?tn(e,l[1],d,null):en(l[1]),null)},i(l){t||(Ze(a,l),t=!0)},o(l){qe(a,l),t=!1},d(l){a&&a.d(l)}}}function Tn(n,t,e){let{$$slots:a={},$$scope:l}=t,{filename:d=""}=t;return bn(pn,d),n.$$set=f=>{"filename"in f&&e(0,d=f.filename),"$$scope"in f&&e(1,l=f.$$scope)},[d,l,a]}class Ln extends ct{constructor(t){super();ut(this,t,Tn,Cn,dt,{filename:0})}}var gn={exports:{}};(function(n){var t=typeof window!="undefined"?window:typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var e=function(a){var l=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,d=0,f={},c={manual:a.Prism&&a.Prism.manual,disableWorkerMessageHandler:a.Prism&&a.Prism.disableWorkerMessageHandler,util:{encode:function s(r){return r instanceof k?new k(r.type,s(r.content),r.alias):Array.isArray(r)?r.map(s):r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(s){return Object.prototype.toString.call(s).slice(8,-1)},objId:function(s){return s.__id||Object.defineProperty(s,"__id",{value:++d}),s.__id},clone:function s(r,p){p=p||{};var g,v;switch(c.util.type(r)){case"Object":if(v=c.util.objId(r),p[v])return p[v];g={},p[v]=g;for(var b in r)r.hasOwnProperty(b)&&(g[b]=s(r[b],p));return g;case"Array":return v=c.util.objId(r),p[v]?p[v]:(g=[],p[v]=g,r.forEach(function(S,h){g[h]=s(S,p)}),g);default:return r}},getLanguage:function(s){for(;s;){var r=l.exec(s.className);if(r)return r[1].toLowerCase();s=s.parentElement}return"none"},setLanguage:function(s,r){s.className=s.className.replace(RegExp(l,"gi"),""),s.classList.add("language-"+r)},currentScript:function(){if(typeof document=="undefined")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(g){var s=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(g.stack)||[])[1];if(s){var r=document.getElementsByTagName("script");for(var p in r)if(r[p].src==s)return r[p]}return null}},isActive:function(s,r,p){for(var g="no-"+r;s;){var v=s.classList;if(v.contains(r))return!0;if(v.contains(g))return!1;s=s.parentElement}return!!p}},languages:{plain:f,plaintext:f,text:f,txt:f,extend:function(s,r){var p=c.util.clone(c.languages[s]);for(var g in r)p[g]=r[g];return p},insertBefore:function(s,r,p,g){g=g||c.languages;var v=g[s],b={};for(var S in v)if(v.hasOwnProperty(S)){if(S==r)for(var h in p)p.hasOwnProperty(h)&&(b[h]=p[h]);p.hasOwnProperty(S)||(b[S]=v[S])}var L=g[s];return g[s]=b,c.languages.DFS(c.languages,function(H,j){j===L&&H!=s&&(this[H]=b)}),b},DFS:function s(r,p,g,v){v=v||{};var b=c.util.objId;for(var S in r)if(r.hasOwnProperty(S)){p.call(r,S,r[S],g||S);var h=r[S],L=c.util.type(h);L==="Object"&&!v[b(h)]?(v[b(h)]=!0,s(h,p,null,v)):L==="Array"&&!v[b(h)]&&(v[b(h)]=!0,s(h,p,S,v))}}},plugins:{},highlightAll:function(s,r){c.highlightAllUnder(document,s,r)},highlightAllUnder:function(s,r,p){var g={callback:p,container:s,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};c.hooks.run("before-highlightall",g),g.elements=Array.prototype.slice.apply(g.container.querySelectorAll(g.selector)),c.hooks.run("before-all-elements-highlight",g);for(var v=0,b;b=g.elements[v++];)c.highlightElement(b,r===!0,g.callback)},highlightElement:function(s,r,p){var g=c.util.getLanguage(s),v=c.languages[g];c.util.setLanguage(s,g);var b=s.parentElement;b&&b.nodeName.toLowerCase()==="pre"&&c.util.setLanguage(b,g);var S=s.textContent,h={element:s,language:g,grammar:v,code:S};function L(j){h.highlightedCode=j,c.hooks.run("before-insert",h),h.element.innerHTML=h.highlightedCode,c.hooks.run("after-highlight",h),c.hooks.run("complete",h),p&&p.call(h.element)}if(c.hooks.run("before-sanity-check",h),b=h.element.parentElement,b&&b.nodeName.toLowerCase()==="pre"&&!b.hasAttribute("tabindex")&&b.setAttribute("tabindex","0"),!h.code){c.hooks.run("complete",h),p&&p.call(h.element);return}if(c.hooks.run("before-highlight",h),!h.grammar){L(c.util.encode(h.code));return}if(r&&a.Worker){var H=new Worker(c.filename);H.onmessage=function(j){L(j.data)},H.postMessage(JSON.stringify({language:h.language,code:h.code,immediateClose:!0}))}else L(c.highlight(h.code,h.grammar,h.language))},highlight:function(s,r,p){var g={code:s,grammar:r,language:p};if(c.hooks.run("before-tokenize",g),!g.grammar)throw new Error('The language "'+g.language+'" has no grammar.');return g.tokens=c.tokenize(g.code,g.grammar),c.hooks.run("after-tokenize",g),k.stringify(c.util.encode(g.tokens),g.language)},tokenize:function(s,r){var p=r.rest;if(p){for(var g in p)r[g]=p[g];delete r.rest}var v=new A;return D(v,v.head,s),_(s,v,r,v.head,0),T(v)},hooks:{all:{},add:function(s,r){var p=c.hooks.all;p[s]=p[s]||[],p[s].push(r)},run:function(s,r){var p=c.hooks.all[s];if(!(!p||!p.length))for(var g=0,v;v=p[g++];)v(r)}},Token:k};a.Prism=c;function k(s,r,p,g){this.type=s,this.content=r,this.alias=p,this.length=(g||"").length|0}k.stringify=function s(r,p){if(typeof r=="string")return r;if(Array.isArray(r)){var g="";return r.forEach(function(L){g+=s(L,p)}),g}var v={type:r.type,content:s(r.content,p),tag:"span",classes:["token",r.type],attributes:{},language:p},b=r.alias;b&&(Array.isArray(b)?Array.prototype.push.apply(v.classes,b):v.classes.push(b)),c.hooks.run("wrap",v);var S="";for(var h in v.attributes)S+=" "+h+'="'+(v.attributes[h]||"").replace(/"/g,"&quot;")+'"';return"<"+v.tag+' class="'+v.classes.join(" ")+'"'+S+">"+v.content+"</"+v.tag+">"};function F(s,r,p,g){s.lastIndex=r;var v=s.exec(p);if(v&&g&&v[1]){var b=v[1].length;v.index+=b,v[0]=v[0].slice(b)}return v}function _(s,r,p,g,v,b){for(var S in p)if(!(!p.hasOwnProperty(S)||!p[S])){var h=p[S];h=Array.isArray(h)?h:[h];for(var L=0;L<h.length;++L){if(b&&b.cause==S+","+L)return;var H=h[L],j=H.inside,U=!!H.lookbehind,V=!!H.greedy,oe=H.alias;if(V&&!H.pattern.global){var Q=H.pattern.toString().match(/[imsuy]*$/)[0];H.pattern=RegExp(H.pattern.source,Q+"g")}for(var R=H.pattern||H,I=g.next,C=v;I!==r.tail&&!(b&&C>=b.reach);C+=I.value.length,I=I.next){var M=I.value;if(r.length>s.length)return;if(!(M instanceof k)){var z=1,B;if(V){if(B=F(R,C,s,U),!B||B.index>=s.length)break;var ce=B.index,de=B.index+B[0].length,Z=C;for(Z+=I.value.length;ce>=Z;)I=I.next,Z+=I.value.length;if(Z-=I.value.length,C=Z,I.value instanceof k)continue;for(var pe=I;pe!==r.tail&&(Z<de||typeof pe.value=="string");pe=pe.next)z++,Z+=pe.value.length;z--,M=s.slice(C,Z),B.index-=C}else if(B=F(R,0,M,U),!B)continue;var ce=B.index,ke=B[0],re=M.slice(0,ce),ee=M.slice(ce+ke.length),Ee=C+M.length;b&&Ee>b.reach&&(b.reach=Ee);var ue=I.prev;re&&(ue=D(r,ue,re),C+=re.length),P(r,ue,z);var et=new k(S,j?c.tokenize(ke,j):ke,oe,ke);if(I=D(r,ue,et),ee&&D(r,I,ee),z>1){var ge={cause:S+","+L,reach:Ee};_(s,r,p,I.prev,C,ge),b&&ge.reach>b.reach&&(b.reach=ge.reach)}}}}}}function A(){var s={value:null,prev:null,next:null},r={value:null,prev:s,next:null};s.next=r,this.head=s,this.tail=r,this.length=0}function D(s,r,p){var g=r.next,v={value:p,prev:r,next:g};return r.next=v,g.prev=v,s.length++,v}function P(s,r,p){for(var g=r.next,v=0;v<p&&g!==s.tail;v++)g=g.next;r.next=g,g.prev=r,s.length-=v}function T(s){for(var r=[],p=s.head.next;p!==s.tail;)r.push(p.value),p=p.next;return r}if(!a.document)return a.addEventListener&&(c.disableWorkerMessageHandler||a.addEventListener("message",function(s){var r=JSON.parse(s.data),p=r.language,g=r.code,v=r.immediateClose;a.postMessage(c.highlight(g,c.languages[p],p)),v&&a.close()},!1)),c;var m=c.util.currentScript();m&&(c.filename=m.src,m.hasAttribute("data-manual")&&(c.manual=!0));function x(){c.manual||c.highlightAll()}if(!c.manual){var O=document.readyState;O==="loading"||O==="interactive"&&m&&m.defer?document.addEventListener("DOMContentLoaded",x):window.requestAnimationFrame?window.requestAnimationFrame(x):window.setTimeout(x,16)}return c}(t);n.exports&&(n.exports=e),typeof nn!="undefined"&&(nn.Prism=e),e.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.languages.markup.doctype.inside["internal-subset"].inside=e.languages.markup,e.hooks.add("wrap",function(a){a.type==="entity"&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Object.defineProperty(e.languages.markup.tag,"addInlined",{value:function(l,d){var f={};f["language-"+d]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[d]},f.cdata=/^<!\[CDATA\[|\]\]>$/i;var c={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:f}};c["language-"+d]={pattern:/[\s\S]+/,inside:e.languages[d]};var k={};k[l]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return l}),"i"),lookbehind:!0,greedy:!0,inside:c},e.languages.insertBefore("markup","cdata",k)}}),Object.defineProperty(e.languages.markup.tag,"addAttribute",{value:function(a,l){e.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+a+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[l,"language-"+l],inside:e.languages[l]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup,e.languages.xml=e.languages.extend("markup",{}),e.languages.ssml=e.languages.xml,e.languages.atom=e.languages.xml,e.languages.rss=e.languages.xml,function(a){var l=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;a.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+l.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+l.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+l.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+l.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:l,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},a.languages.css.atrule.inside.rest=a.languages.css;var d=a.languages.markup;d&&(d.tag.addInlined("style","css"),d.tag.addAttribute("style","css"))}(e),e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},e.languages.javascript=e.languages.extend("clike",{"class-name":[e.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),e.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,e.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:e.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:e.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:e.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:e.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),e.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:e.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),e.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),e.languages.markup&&(e.languages.markup.tag.addInlined("script","javascript"),e.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),e.languages.js=e.languages.javascript,function(){if(typeof e=="undefined"||typeof document=="undefined")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var a="Loading\u2026",l=function(m,x){return"\u2716 Error "+m+" while fetching file: "+x},d="\u2716 Error: File does not exist or is empty",f={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},c="data-src-status",k="loading",F="loaded",_="failed",A="pre[data-src]:not(["+c+'="'+F+'"]):not(['+c+'="'+k+'"])';function D(m,x,O){var s=new XMLHttpRequest;s.open("GET",m,!0),s.onreadystatechange=function(){s.readyState==4&&(s.status<400&&s.responseText?x(s.responseText):s.status>=400?O(l(s.status,s.statusText)):O(d))},s.send(null)}function P(m){var x=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(m||"");if(x){var O=Number(x[1]),s=x[2],r=x[3];return s?r?[O,Number(r)]:[O,void 0]:[O,O]}}e.hooks.add("before-highlightall",function(m){m.selector+=", "+A}),e.hooks.add("before-sanity-check",function(m){var x=m.element;if(x.matches(A)){m.code="",x.setAttribute(c,k);var O=x.appendChild(document.createElement("CODE"));O.textContent=a;var s=x.getAttribute("data-src"),r=m.language;if(r==="none"){var p=(/\.(\w+)$/.exec(s)||[,"none"])[1];r=f[p]||p}e.util.setLanguage(O,r),e.util.setLanguage(x,r);var g=e.plugins.autoloader;g&&g.loadLanguages(r),D(s,function(v){x.setAttribute(c,F);var b=P(x.getAttribute("data-range"));if(b){var S=v.split(/\r\n?|\n/g),h=b[0],L=b[1]==null?S.length:b[1];h<0&&(h+=S.length),h=Math.max(0,Math.min(h-1,S.length)),L<0&&(L+=S.length),L=Math.max(0,Math.min(L,S.length)),v=S.slice(h,L).join(`
`),x.hasAttribute("data-start")||x.setAttribute("data-start",String(h+1))}O.textContent=v,e.highlightElement(O)},function(v){x.setAttribute(c,_),O.textContent=v})}}),e.plugins.fileHighlight={highlight:function(x){for(var O=(x||document).querySelectorAll(A),s=0,r;r=O[s++];)e.highlightElement(r)}};var T=!1;e.fileHighlight=function(){T||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),T=!0),e.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(gn);var vt=gn.exports;const vn="(if|else if|await|then|catch|each|html|debug)";Prism.languages.svelte=Prism.languages.extend("markup",{each:{pattern:new RegExp("{[#/]each(?:(?:\\{(?:(?:\\{(?:[^{}])*\\})|(?:[^{}]))*\\})|(?:[^{}]))*}"),inside:{"language-javascript":[{pattern:/(as[\s\S]*)\([\s\S]*\)(?=\s*\})/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(as[\s]*)[\s\S]*(?=\s*)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(#each[\s]*)[\s\S]*(?=as)/,lookbehind:!0,inside:Prism.languages.javascript}],keyword:/[#/]each|as/,punctuation:/{|}/}},block:{pattern:new RegExp("{[#:/@]/s"+vn+"(?:(?:\\{(?:(?:\\{(?:[^{}])*\\})|(?:[^{}]))*\\})|(?:[^{}]))*}"),inside:{punctuation:/^{|}$/,keyword:[new RegExp("[#:/@]"+vn+"( )*"),/as/,/then/],"language-javascript":{pattern:/[\s\S]*/,inside:Prism.languages.javascript}}},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?:"[^"]*"|'[^']*'|{[\s\S]+?}(?=[\s/>])))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"language-javascript":{pattern:/\{(?:(?:\{(?:(?:\{(?:[^{}])*\})|(?:[^{}]))*\})|(?:[^{}]))*\}/,inside:Prism.languages.javascript},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}],"language-javascript":{pattern:/{[\s\S]+}/,inside:Prism.languages.javascript}}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},"language-javascript":{pattern:/\{(?:(?:\{(?:(?:\{(?:[^{}])*\})|(?:[^{}]))*\})|(?:[^{}]))*\}/,lookbehind:!0,inside:Prism.languages.javascript}});Prism.languages.svelte.tag.inside["attr-value"].inside.entity=Prism.languages.svelte.entity;Prism.hooks.add("wrap",n=>{n.type==="entity"&&(n.attributes.title=n.content.replace(/&amp;/,"&"))});Object.defineProperty(Prism.languages.svelte.tag,"addInlined",{value:function(t,e){const a={};a["language-"+e]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[e]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;const l={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};l["language-"+e]={pattern:/[\s\S]+/,inside:Prism.languages[e]};const d={};d[t]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,t),"i"),lookbehind:!0,greedy:!0,inside:l},Prism.languages.insertBefore("svelte","cdata",d)}});Prism.languages.svelte.tag.addInlined("style","css");Prism.languages.svelte.tag.addInlined("script","javascript");var In=`<script lang="ts">
  import {
    exioButton,
    exioCard,
    exioSwitch,
    exioFlyInAnimation,
    exioFadeInAnimation,
    exioIcon,
    exioZoomInAnimation,
    exioDropdown,
    exioRadio,
    exioTextbox,
    exioLoadingBarAnimation,
    exioCheckbox,
    exioAccordion,
    exioSlider,
  } from 'exio/svelte';
  import { tick } from 'svelte';
  import { dark, demoDialogOpen } from '../ts/stores';
  import Examples from './Examples.svelte';
  import Example from './Example.svelte';

  let render = true;
  let animate = true;
  let buttonDisabled = true;
  let textDisabled = true;
  const range = (len: number) => new Array(len);
  $: colorDefault = $dark ? 'black' : 'white';
  $: colorInverted = $dark ? 'white' : 'black';
  $: if ($dark) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
<\/script>

{#if render}
  <Examples filename="Demo.svelte">
    <div use:exioZoomInAnimation class="wrapper">
      <div class="block">
        <div class="items">
          <input
            use:exioSwitch
            type="checkbox"
            id="dark-mode"
            bind:checked={$dark}
            style="
                  border-color: {colorInverted};
                  --exio-switch-selected-fill-color: var(--accent);
                "
          />
          <label for="dark-mode">Dark Mode</label>
        </div>
      </div>
      <div class="block">
        <Example name="various-buttons">
          <button class="gray" use:exioButton>Default Button</button>
          <button class="blue" use:exioButton>Default Button</button>
          <button use:exioButton use:exioIcon class="gray">send</button>
          <button use:exioButton use:exioIcon class="cyan">send</button>
        </Example>
      </div>
      <div class="block" style="align-items: center;">
        <button use:exioButton class="gray" disabled={buttonDisabled}>
          Example Button
        </button>
        <div class="pair">
          <input
            use:exioSwitch
            type="checkbox"
            id="disable-button"
            style="
            border-color: {colorInverted};
            --exio-switch-selected-fill-color: var(--accent);
          "
            bind:checked={buttonDisabled}
          />
          <label for="disable-button"><code>disabled</code> Attribute</label>
        </div>
      </div>
      <div class="block">
        <div use:exioCard class="card gray">Default Card</div>
        <div use:exioCard class="card cyan">Default Card</div>
      </div>
      <div class="block">
        <div class="items">
          <div class="pair">
            <input
              use:exioSwitch
              type="checkbox"
              id="switch-option-1"
              style="
                  border-color: {colorInverted};
                  --exio-switch-selected-fill-color: var(--accent);
                "
            />
            <label for="switch-option-1">Switch Option 1</label>
          </div>
          <div class="pair">
            <input
              use:exioSwitch
              type="checkbox"
              id="switch-option-2"
              style="
                  border-color: var(--accent);
                  --exio-switch-selected-fill-color: {colorInverted};
                  --exio-switch-thumb-color: var(--accent);
                "
            />
            <label for="switch-option-2">Switch Option 2</label>
          </div>
        </div>
      </div>
      <div class="block">
        <div class="items">
          <div class="pair">
            <input
              use:exioCheckbox
              type="checkbox"
              id="checkbox-option-1"
              style="
                  border-color: {colorInverted};
                  --exio-checkbox-selected-fill-color: {colorInverted};
                  --exio-checkbox-checkmark-color: {colorDefault};
                "
            />
            <label for="checkbox-option-1">Checkbox Option 1</label>
          </div>
          <div class="pair">
            <input
              use:exioCheckbox
              type="checkbox"
              id="checkbox-option-2"
              style="
                  border-color: var(--accent);
                  --exio-checkbox-selected-fill-color: var(--accent);
                  --exio-checkbox-checkmark-color: {colorInverted};
                "
            />
            <label for="checkbox-option-2">Checkbox Option 2</label>
          </div>
        </div>
      </div>
      <div class="block">
        <div class="items">
          <div class="pair">
            <input
              type="radio"
              use:exioRadio
              id="radio-option-1"
              name="radio-options"
              style="
                  border-color: {colorInverted};
                "
            />
            <label for="radio-option-1">Radio Option 1</label>
          </div>
          <div class="pair">
            <input
              type="radio"
              use:exioRadio
              id="radio-option-2"
              name="radio-options"
              style="
                  border-color: var(--accent);
                  --exio-radio-indicator-color: var(--accent);
                "
            />
            <label for="radio-option-2">Radio Option 2</label>
          </div>
        </div>
      </div>
      <div class="block">
        <div class="items">
          <input
            type="range"
            min="0"
            max="69"
            use:exioSlider
            style="width: 150px; margin: 20px;"
            step="0.01"
            class="gray"
          />
          <input
            type="range"
            min="0"
            max="69"
            use:exioSlider
            style="
                  width: 150px;
                  --exio-slider-thumb-color: var(--cyan);
                  margin: 20px;
                "
            step="0.01"
            class="gray"
          />
          <input
            type="range"
            min="0"
            max="69"
            use:exioSlider
            style="
                  width: 150px;
                  background-color: gray;
                  --exio-slider-thumb-color: var(--accent);
                  margin: 20px;
                "
            step="0.01"
            class="gray"
          />
        </div>
      </div>
      <div class="block">
        <div class="items">
          <input class="gray" use:exioTextbox placeholder="Textfield" />
          <textarea class="gray" use:exioTextbox placeholder="Textarea" />
        </div>
      </div>
      <div class="block" style="align-items: center;">
        <input
          class="gray"
          use:exioTextbox
          placeholder="Textfield"
          disabled={textDisabled}
        />
        <div class="pair">
          <input
            use:exioSwitch
            type="checkbox"
            id="disable-text"
            style="
            border-color: {colorInverted};
            --exio-switch-selected-fill-color: var(--accent);
          "
            bind:checked={textDisabled}
          />
          <label for="disable-text"><code>disabled</code> Attribute</label>
        </div>
      </div>
      <div class="block">
        <select use:exioDropdown class="gray">
          {#each range(3) as _, index}
            <option value={index + 1}>Option {index + 1}</option>
          {/each}
        </select>
        <select use:exioDropdown class="blue">
          <option disabled selected>Placeholder</option>
          {#each range(3) as _, index}
            <option value={index + 1}>Option {index + 1}</option>
          {/each}
        </select>
        <select use:exioDropdown class="gray">
          <option disabled selected>Overflow</option>
          {#each range(69) as _, index}
            <option value={index + 1}>Option {index + 1}</option>
          {/each}
        </select>
      </div>
      <div class="block">
        <button
          class="gray"
          use:exioButton
          on:click={() => ($demoDialogOpen = true)}
        >
          Open Dialog
        </button>
      </div>
      <div class="block">
        <details use:exioAccordion style="width: 320px;">
          <summary class="cyan">Accordion</summary>
          <div style="padding: 1rem;" class="gray">
            Never gonna give you up <br />
            Never gonna let you down <br />
            Never gonna run around and desert you <br />
            Never gonna make you cry <br />
            Never gonna say goodbye <br />
            Never gonna tell a lie and hurt you <br />
          </div>
        </details>
      </div>
      <div class="block" style="flex-direction: column; padding: 10px 0px;">
        <div class="items">
          <div
            use:exioLoadingBarAnimation
            style="
                  width: 300px;
                  height: 5px;
                  --exio-loader-fill-color: var(--cyan);
                "
          />
          <div
            use:exioLoadingBarAnimation
            style="
                  width: 300px;
                  height: 5px;
                  --exio-loader-fill-color: var(--accent);
                  background-color: {colorInverted};
                "
          />
        </div>
        <div>
          <button
            use:exioButton
            class="cyan"
            on:click={async () => {
              animate = false;
              await tick();
              animate = true;
            }}
            style="
                  display: flex;
                  align-items: center;
                  gap: 0.25rem;
                "
          >
            <span use:exioIcon>refresh</span>
            <span>Reload Animations</span>
          </button>
        </div>
        {#if animate}
          <div class="items">
            <div use:exioCard use:exioFlyInAnimation class="card gray">
              Fly In Animation
            </div>
            <div
              use:exioCard
              use:exioZoomInAnimation
              class="card blue"
              style="--exio-zoom-in-animation-scale: 80%;"
            >
              Zoom In Animation
            </div>
            <div use:exioCard use:exioFadeInAnimation class="card cyan">
              Fade In Animation
            </div>
          </div>
        {/if}
      </div>
    </div>
  </Examples>
{/if}

<style>
  .card {
    width: 150px;
    height: 150px;
  }
  .block {
    display: flex;
    margin: 1rem;
    overflow: visible;
    flex-direction: row;
    gap: 10px;
    flex-wrap: wrap;
  }
  .items {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  }
  .wrapper {
    transform-origin: center top;
  }
  .pair {
    display: flex;
    gap: 0.25rem;
    align-items: center;
  }
</style>
`;const Dn=n=>yn("...",t=>{if(n==="Demo.svelte"){t(In);return}t(`ERR: did not find file '${n}'`)}),Pn=(n,t)=>xn(Dn(n),e=>{if(e==="..."||e.startsWith("ERR"))return e;const a=e.indexOf(`name="${t}"`),l=e.indexOf(`
`,a),d=e.indexOf("</Example>",l),f=e.substring(l,d),c=f.indexOf("<")-1;return f.replaceAll(`
${" ".repeat(c)}`,`
`).trim()});function Hn(n){let t,e,a,l,d,f,c,k,F=vt.highlight(n[1],vt.languages.svelte,"svelte")+"",_,A,D;const P=n[4].default,T=Kt(P,n,n[3],null);return{c(){t=u("div"),e=u("div"),T&&T.c(),a=$(),l=u("details"),d=u("summary"),d.textContent="View Source",f=$(),c=u("div"),k=u("pre"),o(e,"class","example-content"),o(d,"class","cyan"),o(k,"class","language-svelte"),o(c,"class","example-src"),o(l,"class","svelte-wemmyx"),o(t,"class","example svelte-wemmyx")},m(m,x){G(m,t,x),i(t,e),T&&T.m(e,null),i(t,a),i(t,l),i(l,d),i(l,f),i(l,c),i(c,k),k.innerHTML=F,_=!0,A||(D=E(dn.call(null,l)),A=!0)},p(m,[x]){T&&T.p&&(!_||x&8)&&Qt(T,P,m,m[3],_?tn(P,m[3],x,null):en(m[3]),null),(!_||x&2)&&F!==(F=vt.highlight(m[1],vt.languages.svelte,"svelte")+"")&&(k.innerHTML=F)},i(m){_||(Ze(T,m),_=!0)},o(m){qe(T,m),_=!1},d(m){m&&W(t),T&&T.d(m),A=!1,D()}}}function On(n,t,e){let a,l,d=Ue,f=()=>(d(),d=kn(a,A=>e(1,l=A)),a);n.$$.on_destroy.push(()=>d());let{$$slots:c={},$$scope:k}=t,{name:F=""}=t;const _=wn(pn);return n.$$set=A=>{"name"in A&&e(2,F=A.name),"$$scope"in A&&e(3,k=A.$$scope)},n.$$.update=()=>{n.$$.dirty&4&&f(e(0,a=Pn(_,F)))},[a,l,F,k,c]}class Mn extends ct{constructor(t){super();ut(this,t,On,Hn,dt,{name:2})}}function zn(n,t,e){const a=n.slice();return a[13]=t[e],a[15]=e,a}function jn(n,t,e){const a=n.slice();return a[13]=t[e],a[15]=e,a}function Rn(n,t,e){const a=n.slice();return a[13]=t[e],a[15]=e,a}function Bn(n){let t,e;return t=new Ln({props:{filename:"Demo.svelte",$$slots:{default:[Gn]},$$scope:{ctx:n}}}),{c(){bt(t.$$.fragment)},m(a,l){xt(t,a,l),e=!0},p(a,l){const d={};l&262271&&(d.$$scope={dirty:l,ctx:a}),t.$set(d)},i(a){e||(Ze(t.$$.fragment,a),e=!0)},o(a){qe(t.$$.fragment,a),e=!1},d(a){yt(t,a)}}}function Zn(n){let t,e,a,l,d,f,c,k,F;return{c(){t=u("button"),t.textContent="Default Button",e=$(),a=u("button"),a.textContent="Default Button",l=$(),d=u("button"),d.textContent="send",f=$(),c=u("button"),c.textContent="send",o(t,"class","gray"),o(a,"class","blue"),o(d,"class","gray"),o(c,"class","cyan")},m(_,A){G(_,t,A),G(_,e,A),G(_,a,A),G(_,l,A),G(_,d,A),G(_,f,A),G(_,c,A),k||(F=[E(we.call(null,t)),E(we.call(null,a)),E(we.call(null,d)),E(gt.call(null,d)),E(we.call(null,c)),E(gt.call(null,c))],k=!0)},d(_){_&&W(t),_&&W(e),_&&W(a),_&&W(l),_&&W(d),_&&W(f),_&&W(c),k=!1,Xe(F)}}}function qn(n){let t,e,a=n[15]+1+"",l,d;return{c(){t=u("option"),e=Y("Option "),l=Y(a),t.__value=d=n[15]+1,t.value=t.__value},m(f,c){G(f,t,c),i(t,e),i(t,l)},p:Ue,d(f){f&&W(t)}}}function Vn(n){let t,e,a=n[15]+1+"",l,d;return{c(){t=u("option"),e=Y("Option "),l=Y(a),t.__value=d=n[15]+1,t.value=t.__value},m(f,c){G(f,t,c),i(t,e),i(t,l)},p:Ue,d(f){f&&W(t)}}}function Nn(n){let t,e,a=n[15]+1+"",l,d;return{c(){t=u("option"),e=Y("Option "),l=Y(a),t.__value=d=n[15]+1,t.value=t.__value},m(f,c){G(f,t,c),i(t,e),i(t,l)},p:Ue,d(f){f&&W(t)}}}function fn(n){let t,e,a,l,d,f,c,k,F,_,A,D,P,T;return{c(){t=u("div"),e=u("div"),e.textContent="Fly In Animation",d=$(),f=u("div"),f.textContent="Zoom In Animation",F=$(),_=u("div"),_.textContent="Fade In Animation",o(e,"class","card gray svelte-o6w7o1"),o(f,"class","card blue svelte-o6w7o1"),y(f,"--exio-zoom-in-animation-scale","80%"),o(_,"class","card cyan svelte-o6w7o1"),o(t,"class","items svelte-o6w7o1")},m(m,x){G(m,t,x),i(t,e),i(t,d),i(t,f),i(t,F),i(t,_),P||(T=[E(a=Qe.call(null,e)),E(l=En.call(null,e)),E(c=Qe.call(null,f)),E(k=_t.call(null,f)),E(A=Qe.call(null,_)),E(D=rn.call(null,_))],P=!0)},d(m){m&&W(t),P=!1,Xe(T)}}}function Gn(n){let t,e,a,l,d,f,c,k,F,_,A,D,P,T,m,x,O,s,r,p,g,v,b,S,h,L,H,j,U,V,oe,Q,R,I,C,M,z,B,de,Z,pe,ce,ke,re,ee,Ee,ue,et,ge,Ce,Te,ve,St,tt,Et,Le,fe,Ct,nt,Tt,at,me,se,Lt,ne,It,te,Dt,it,Ie,Ve,Pt,Ne,Ht,_e,$e,Ot,De,ae,Mt,lt,zt,he,Ge,jt,Pe,be,Rt,He,xe,Bt,ot,Oe,Zt,rt,We,qt,ie,Me,ze,Vt,ye,Nt,ft,le,st,Gt,mt,Wt,N,ht,Ut;F=new Mn({props:{name:"various-buttons",$$slots:{default:[Zn]},$$scope:{ctx:n}}});let Xt=n[7](3),je=[];for(let w=0;w<Xt.length;w+=1)je[w]=qn(Rn(n,Xt,w));let Yt=n[7](3),Re=[];for(let w=0;w<Yt.length;w+=1)Re[w]=Vn(jn(n,Yt,w));let Jt=n[7](69),Be=[];for(let w=0;w<Jt.length;w+=1)Be[w]=Nn(zn(n,Jt,w));let J=n[1]&&fn();return{c(){t=u("div"),e=u("div"),a=u("div"),l=u("input"),d=$(),f=u("label"),f.textContent="Dark Mode",c=$(),k=u("div"),bt(F.$$.fragment),_=$(),A=u("div"),D=u("button"),P=Y("Example Button"),T=$(),m=u("div"),x=u("input"),O=$(),s=u("label"),s.innerHTML="<code>disabled</code> Attribute",r=$(),p=u("div"),g=u("div"),g.textContent="Default Card",v=$(),b=u("div"),b.textContent="Default Card",S=$(),h=u("div"),L=u("div"),H=u("div"),j=u("input"),U=$(),V=u("label"),V.textContent="Switch Option 1",oe=$(),Q=u("div"),R=u("input"),I=$(),C=u("label"),C.textContent="Switch Option 2",M=$(),z=u("div"),B=u("div"),de=u("div"),Z=u("input"),pe=$(),ce=u("label"),ce.textContent="Checkbox Option 1",ke=$(),re=u("div"),ee=u("input"),Ee=$(),ue=u("label"),ue.textContent="Checkbox Option 2",et=$(),ge=u("div"),Ce=u("div"),Te=u("div"),ve=u("input"),St=$(),tt=u("label"),tt.textContent="Radio Option 1",Et=$(),Le=u("div"),fe=u("input"),Ct=$(),nt=u("label"),nt.textContent="Radio Option 2",Tt=$(),at=u("div"),me=u("div"),se=u("input"),Lt=$(),ne=u("input"),It=$(),te=u("input"),Dt=$(),it=u("div"),Ie=u("div"),Ve=u("input"),Pt=$(),Ne=u("textarea"),Ht=$(),_e=u("div"),$e=u("input"),Ot=$(),De=u("div"),ae=u("input"),Mt=$(),lt=u("label"),lt.innerHTML="<code>disabled</code> Attribute",zt=$(),he=u("div"),Ge=u("select");for(let w=0;w<je.length;w+=1)je[w].c();jt=$(),Pe=u("select"),be=u("option"),be.textContent="Placeholder";for(let w=0;w<Re.length;w+=1)Re[w].c();Rt=$(),He=u("select"),xe=u("option"),xe.textContent="Overflow";for(let w=0;w<Be.length;w+=1)Be[w].c();Bt=$(),ot=u("div"),Oe=u("button"),Oe.textContent="Open Dialog",Zt=$(),rt=u("div"),We=u("details"),We.innerHTML=`<summary class="cyan">Accordion</summary> 
          <div style="padding: 1rem;" class="gray">Never gonna give you up <br/>
            Never gonna let you down <br/>
            Never gonna run around and desert you <br/>
            Never gonna make you cry <br/>
            Never gonna say goodbye <br/>
            Never gonna tell a lie and hurt you <br/></div>`,qt=$(),ie=u("div"),Me=u("div"),ze=u("div"),Vt=$(),ye=u("div"),Nt=$(),ft=u("div"),le=u("button"),st=u("span"),st.textContent="refresh",Gt=$(),mt=u("span"),mt.textContent="Reload Animations",Wt=$(),J&&J.c(),o(l,"type","checkbox"),o(l,"id","dark-mode"),y(l,"border-color",n[4]),y(l,"--exio-switch-selected-fill-color","var(--accent)"),o(f,"for","dark-mode"),o(a,"class","items svelte-o6w7o1"),o(e,"class","block svelte-o6w7o1"),o(k,"class","block svelte-o6w7o1"),o(D,"class","gray"),D.disabled=n[2],o(x,"type","checkbox"),o(x,"id","disable-button"),y(x,"border-color",n[4]),y(x,"--exio-switch-selected-fill-color","var(--accent)"),o(s,"for","disable-button"),o(m,"class","pair svelte-o6w7o1"),o(A,"class","block svelte-o6w7o1"),y(A,"align-items","center"),o(g,"class","card gray svelte-o6w7o1"),o(b,"class","card cyan svelte-o6w7o1"),o(p,"class","block svelte-o6w7o1"),o(j,"type","checkbox"),o(j,"id","switch-option-1"),y(j,"border-color",n[4]),y(j,"--exio-switch-selected-fill-color","var(--accent)"),o(V,"for","switch-option-1"),o(H,"class","pair svelte-o6w7o1"),o(R,"type","checkbox"),o(R,"id","switch-option-2"),y(R,"border-color","var(--accent)"),y(R,"--exio-switch-selected-fill-color",n[4]),y(R,"--exio-switch-thumb-color","var(--accent)"),o(C,"for","switch-option-2"),o(Q,"class","pair svelte-o6w7o1"),o(L,"class","items svelte-o6w7o1"),o(h,"class","block svelte-o6w7o1"),o(Z,"type","checkbox"),o(Z,"id","checkbox-option-1"),y(Z,"border-color",n[4]),y(Z,"--exio-checkbox-selected-fill-color",n[4]),y(Z,"--exio-checkbox-checkmark-color",n[5]),o(ce,"for","checkbox-option-1"),o(de,"class","pair svelte-o6w7o1"),o(ee,"type","checkbox"),o(ee,"id","checkbox-option-2"),y(ee,"border-color","var(--accent)"),y(ee,"--exio-checkbox-selected-fill-color","var(--accent)"),y(ee,"--exio-checkbox-checkmark-color",n[4]),o(ue,"for","checkbox-option-2"),o(re,"class","pair svelte-o6w7o1"),o(B,"class","items svelte-o6w7o1"),o(z,"class","block svelte-o6w7o1"),o(ve,"type","radio"),o(ve,"id","radio-option-1"),o(ve,"name","radio-options"),y(ve,"border-color",n[4]),o(tt,"for","radio-option-1"),o(Te,"class","pair svelte-o6w7o1"),o(fe,"type","radio"),o(fe,"id","radio-option-2"),o(fe,"name","radio-options"),y(fe,"border-color","var(--accent)"),y(fe,"--exio-radio-indicator-color","var(--accent)"),o(nt,"for","radio-option-2"),o(Le,"class","pair svelte-o6w7o1"),o(Ce,"class","items svelte-o6w7o1"),o(ge,"class","block svelte-o6w7o1"),o(se,"type","range"),o(se,"min","0"),o(se,"max","69"),y(se,"width","150px"),y(se,"margin","20px"),o(se,"step","0.01"),o(se,"class","gray"),o(ne,"type","range"),o(ne,"min","0"),o(ne,"max","69"),y(ne,"width","150px"),y(ne,"--exio-slider-thumb-color","var(--cyan)"),y(ne,"margin","20px"),o(ne,"step","0.01"),o(ne,"class","gray"),o(te,"type","range"),o(te,"min","0"),o(te,"max","69"),y(te,"width","150px"),y(te,"background-color","gray"),y(te,"--exio-slider-thumb-color","var(--accent)"),y(te,"margin","20px"),o(te,"step","0.01"),o(te,"class","gray"),o(me,"class","items svelte-o6w7o1"),o(at,"class","block svelte-o6w7o1"),o(Ve,"class","gray"),o(Ve,"placeholder","Textfield"),o(Ne,"class","gray"),o(Ne,"placeholder","Textarea"),o(Ie,"class","items svelte-o6w7o1"),o(it,"class","block svelte-o6w7o1"),o($e,"class","gray"),o($e,"placeholder","Textfield"),$e.disabled=n[3],o(ae,"type","checkbox"),o(ae,"id","disable-text"),y(ae,"border-color",n[4]),y(ae,"--exio-switch-selected-fill-color","var(--accent)"),o(lt,"for","disable-text"),o(De,"class","pair svelte-o6w7o1"),o(_e,"class","block svelte-o6w7o1"),y(_e,"align-items","center"),o(Ge,"class","gray"),be.disabled=!0,be.selected=!0,be.__value="Placeholder",be.value=be.__value,o(Pe,"class","blue"),xe.disabled=!0,xe.selected=!0,xe.__value="Overflow",xe.value=xe.__value,o(He,"class","gray"),o(he,"class","block svelte-o6w7o1"),o(Oe,"class","gray"),o(ot,"class","block svelte-o6w7o1"),y(We,"width","320px"),o(rt,"class","block svelte-o6w7o1"),y(ze,"width","300px"),y(ze,"height","5px"),y(ze,"--exio-loader-fill-color","var(--cyan)"),y(ye,"width","300px"),y(ye,"height","5px"),y(ye,"--exio-loader-fill-color","var(--accent)"),y(ye,"background-color",n[4]),o(Me,"class","items svelte-o6w7o1"),o(le,"class","cyan"),y(le,"display","flex"),y(le,"align-items","center"),y(le,"gap","0.25rem"),o(ie,"class","block svelte-o6w7o1"),y(ie,"flex-direction","column"),y(ie,"padding","10px 0px"),o(t,"class","wrapper svelte-o6w7o1")},m(w,q){G(w,t,q),i(t,e),i(e,a),i(a,l),l.checked=n[0],i(a,d),i(a,f),i(t,c),i(t,k),xt(F,k,null),i(t,_),i(t,A),i(A,D),i(D,P),i(A,T),i(A,m),i(m,x),x.checked=n[2],i(m,O),i(m,s),i(t,r),i(t,p),i(p,g),i(p,v),i(p,b),i(t,S),i(t,h),i(h,L),i(L,H),i(H,j),i(H,U),i(H,V),i(L,oe),i(L,Q),i(Q,R),i(Q,I),i(Q,C),i(t,M),i(t,z),i(z,B),i(B,de),i(de,Z),i(de,pe),i(de,ce),i(B,ke),i(B,re),i(re,ee),i(re,Ee),i(re,ue),i(t,et),i(t,ge),i(ge,Ce),i(Ce,Te),i(Te,ve),i(Te,St),i(Te,tt),i(Ce,Et),i(Ce,Le),i(Le,fe),i(Le,Ct),i(Le,nt),i(t,Tt),i(t,at),i(at,me),i(me,se),i(me,Lt),i(me,ne),i(me,It),i(me,te),i(t,Dt),i(t,it),i(it,Ie),i(Ie,Ve),i(Ie,Pt),i(Ie,Ne),i(t,Ht),i(t,_e),i(_e,$e),i(_e,Ot),i(_e,De),i(De,ae),ae.checked=n[3],i(De,Mt),i(De,lt),i(t,zt),i(t,he),i(he,Ge);for(let X=0;X<je.length;X+=1)je[X].m(Ge,null);i(he,jt),i(he,Pe),i(Pe,be);for(let X=0;X<Re.length;X+=1)Re[X].m(Pe,null);i(he,Rt),i(he,He),i(He,xe);for(let X=0;X<Be.length;X+=1)Be[X].m(He,null);i(t,Bt),i(t,ot),i(ot,Oe),i(t,Zt),i(t,rt),i(rt,We),i(t,qt),i(t,ie),i(ie,Me),i(Me,ze),i(Me,Vt),i(Me,ye),i(ie,Nt),i(ie,ft),i(ft,le),i(le,st),i(le,Gt),i(le,mt),i(ie,Wt),J&&J.m(ie,null),N=!0,ht||(Ut=[E(Ke.call(null,l)),Ye(l,"change",n[8]),E(we.call(null,D)),E(Ke.call(null,x)),Ye(x,"change",n[9]),E(Qe.call(null,g)),E(Qe.call(null,b)),E(Ke.call(null,j)),E(Ke.call(null,R)),E(un.call(null,Z)),E(un.call(null,ee)),E(cn.call(null,ve)),E(cn.call(null,fe)),E(Ft.call(null,se)),E(Ft.call(null,ne)),E(Ft.call(null,te)),E(At.call(null,Ve)),E(At.call(null,Ne)),E(At.call(null,$e)),E(Ke.call(null,ae)),Ye(ae,"change",n[10]),E($t.call(null,Ge)),E($t.call(null,Pe)),E($t.call(null,He)),E(we.call(null,Oe)),Ye(Oe,"click",n[11]),E(dn.call(null,We)),E(sn.call(null,ze)),E(sn.call(null,ye)),E(gt.call(null,st)),E(we.call(null,le)),Ye(le,"click",n[12]),E(_t.call(null,t))],ht=!0)},p(w,q){(!N||q&16)&&y(l,"border-color",w[4]),q&1&&(l.checked=w[0]);const X={};q&262144&&(X.$$scope={dirty:q,ctx:w}),F.$set(X),(!N||q&4)&&(D.disabled=w[2]),(!N||q&16)&&y(x,"border-color",w[4]),q&4&&(x.checked=w[2]),(!N||q&16)&&y(j,"border-color",w[4]),(!N||q&16)&&y(R,"--exio-switch-selected-fill-color",w[4]),(!N||q&16)&&y(Z,"border-color",w[4]),(!N||q&16)&&y(Z,"--exio-checkbox-selected-fill-color",w[4]),(!N||q&32)&&y(Z,"--exio-checkbox-checkmark-color",w[5]),(!N||q&16)&&y(ee,"--exio-checkbox-checkmark-color",w[4]),(!N||q&16)&&y(ve,"border-color",w[4]),(!N||q&8)&&($e.disabled=w[3]),(!N||q&16)&&y(ae,"border-color",w[4]),q&8&&(ae.checked=w[3]),(!N||q&16)&&y(ye,"background-color",w[4]),w[1]?J||(J=fn(),J.c(),J.m(ie,null)):J&&(J.d(1),J=null)},i(w){N||(Ze(F.$$.fragment,w),N=!0)},o(w){qe(F.$$.fragment,w),N=!1},d(w){w&&W(t),yt(F),pt(je,w),pt(Re,w),pt(Be,w),J&&J.d(),ht=!1,Xe(Ut)}}}function Wn(n){let t,e,a=Bn(n);return{c(){a&&a.c(),t=_n()},m(l,d){a&&a.m(l,d),G(l,t,d),e=!0},p(l,[d]){a.p(l,d)},i(l){e||(Ze(a),e=!0)},o(l){qe(a),e=!1},d(l){a&&a.d(l),l&&W(t)}}}function Un(n,t,e){let a,l,d,f;wt(n,ln,x=>e(0,d=x)),wt(n,on,x=>e(6,f=x));let c=!0,k=!0,F=!0;const _=x=>new Array(x);function A(){d=this.checked,ln.set(d)}function D(){k=this.checked,e(2,k)}function P(){F=this.checked,e(3,F)}const T=()=>$n(on,f=!0,f),m=async()=>{e(1,c=!1),await An(),e(1,c=!0)};return n.$$.update=()=>{n.$$.dirty&1&&e(5,a=d?"black":"white"),n.$$.dirty&1&&e(4,l=d?"white":"black"),n.$$.dirty&1&&(d?document.body.classList.add("dark"):document.body.classList.remove("dark"))},[d,c,k,F,l,a,f,_,A,D,P,T,m]}class Xn extends ct{constructor(t){super();ut(this,t,Un,Wn,dt,{})}}function mn(n,t,e){const a=n.slice();return a[4]=t[e],a}function hn(n){let t,e,a=n[4].title+"",l,d,f,c=n[4].icon+"",k,F,_,A,D,P,T,m;return{c(){t=u("a"),e=u("button"),l=Y(a),d=$(),f=u("span"),k=Y(c),A=$(),o(f,"class","svelte-1150wa2"),o(e,"class","bg-gray svelte-1150wa2"),y(e,"cursor","pointer"),o(t,"href",D=n[4].href),o(t,"target",P=n[4].newTab?"_blank":""),o(t,"class","svelte-1150wa2")},m(x,O){G(x,t,O),i(t,e),i(e,l),i(e,d),i(e,f),i(f,k),i(t,A),T||(m=[E(F=gt.call(null,f)),E(_=we.call(null,e))],T=!0)},p:Ue,d(x){x&&W(t),T=!1,Xe(m)}}}function Yn(n){let t,e,a,l=n[0]("title")+"",d,f,c,k=n[0]("description")+"",F,_,A,D,P,T,m,x=n[0]("about.title")+"",O,s,r,p=n[0]("about.description")+"",g,v,b,S,h,L=n[0]("demo.title")+"",H,j,U,V,oe,Q,R=n[1],I=[];for(let C=0;C<R.length;C+=1)I[C]=hn(mn(n,R,C));return U=new Xn({}),{c(){t=u("div"),e=u("div"),a=u("span"),d=Y(l),f=$(),c=u("span"),F=Y(k),_=$(),A=u("div");for(let C=0;C<I.length;C+=1)I[C].c();D=$(),P=u("div"),T=u("div"),m=u("div"),O=Y(x),s=$(),r=u("div"),g=Y(p),v=$(),b=u("div"),S=u("div"),h=u("div"),H=Y(L),j=$(),bt(U.$$.fragment),o(a,"class","title svelte-1150wa2"),o(c,"class","description svelte-1150wa2"),o(A,"class","buttons svelte-1150wa2"),o(e,"class","gradient-banner svelte-1150wa2"),o(m,"class","title svelte-1150wa2"),o(r,"class","desc svelte-1150wa2"),o(T,"class","content svelte-1150wa2"),o(P,"class","section svelte-1150wa2"),o(h,"class","title svelte-1150wa2"),o(S,"class","content svelte-1150wa2"),o(b,"class","section svelte-1150wa2"),y(t,"margin-top","50px"),o(t,"class","svelte-1150wa2")},m(C,M){G(C,t,M),i(t,e),i(e,a),i(a,d),i(e,f),i(e,c),i(c,F),i(e,_),i(e,A);for(let z=0;z<I.length;z+=1)I[z].m(A,null);i(t,D),i(t,P),i(P,T),i(T,m),i(m,O),i(T,s),i(T,r),i(r,g),i(t,v),i(t,b),i(b,S),i(S,h),i(h,H),i(S,j),xt(U,S,null),V=!0,oe||(Q=[E(rn.call(null,e)),E(_t.call(null,t))],oe=!0)},p(C,[M]){if((!V||M&1)&&l!==(l=C[0]("title")+"")&&Je(d,l),(!V||M&1)&&k!==(k=C[0]("description")+"")&&Je(F,k),M&2){R=C[1];let z;for(z=0;z<R.length;z+=1){const B=mn(C,R,z);I[z]?I[z].p(B,M):(I[z]=hn(B),I[z].c(),I[z].m(A,null))}for(;z<I.length;z+=1)I[z].d(1);I.length=R.length}(!V||M&1)&&x!==(x=C[0]("about.title")+"")&&Je(O,x),(!V||M&1)&&p!==(p=C[0]("about.description")+"")&&Je(g,p),(!V||M&1)&&L!==(L=C[0]("demo.title")+"")&&Je(H,L)},i(C){V||(Ze(U.$$.fragment,C),V=!0)},o(C){qe(U.$$.fragment,C),V=!1},d(C){C&&W(t),pt(I,C),yt(U),oe=!1,Xe(Q)}}}function Jn(n,t,e){let a;wt(n,Fn,d=>e(0,a=d));const l=[{title:a("banner.buttons.npm"),href:"https://www.npmjs.com/package/exio",icon:"open_in_new",newTab:!0},{title:a("banner.buttons.github"),href:"https://github.com/KentoNishi/exio",icon:"open_in_new",newTab:!0},{title:a("banner.buttons.docs"),href:"#/docs",icon:"description",newTab:!1}];return[a,l]}class ea extends ct{constructor(t){super();ut(this,t,Jn,Yn,dt,{})}}export{ea as default};
//# sourceMappingURL=Home.b7c1da84.js.map
