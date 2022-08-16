import{S as Ct,i as Ht,s as Tt,e as r,f as u,g as i,h as a,j as ve,k as o,l as p,p as Ie,o as he,r as Re,u as Ne,x as yt,n as ke,b as fe,z as Mt}from"./vendor.4de8a817.js";import{g as Q,s as w,h as X,i as Et,t as St,j as Ye,b as qe,a as U,e as We,k as kt,f as wt,l as Pt,c as Ot,d as Dt}from"./consts.9c7cfb71.js";function we(t){const e=Q(t,{borderStyle:"hover",disableClicking:!0}),l=w(t);return l.innerHTML=`
    .${l.id} {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0px;
    }
  `,X(()=>{e.destroy(),l.remove()})}function Ze(t){const e=Q(t),l=w(t);l.innerHTML=`
    .${l.id} {
      user-select: none;
    }
  `;const n=document.createElement("div"),s=w(n);let v=t.getBoundingClientRect(),c="",f=!1;const h=x=>{c=t.style.getPropertyValue("transform"),t.style.setProperty("transform","none","important"),v=t.getBoundingClientRect(),t.style.setProperty("transform",c,"important"),x==null||x.preventDefault(),f=!0},m=[],k=()=>{t.style.setProperty("transform",c,"important");const x=getComputedStyle(t),B=x.getPropertyValue("--exio-standard-transition-duration"),_e=x.getPropertyValue("color"),j=x.getPropertyValue("background-color"),G=x.getPropertyValue("font-family"),ze=x.getPropertyValue("font-size"),J=x.getPropertyValue("padding"),$e=x.getPropertyValue("padding-top"),ee=x.getPropertyValue("padding-bottom");s.innerHTML=`
      .${s.id} {
        position: fixed;
        top: ${v.bottom}px;
        left: ${v.left}px;
        width: ${v.width}px;
        background-color: ${j};
        transition: opacity ${B};
        color: ${_e};
        font-family: ${G};
        font-size: ${ze};
        opacity: 0;
        pointer-events: none;
        touch-action: none;
        user-select: none;
      }
      .${s.id}:focus {
        opacity: 1;
        outline: none;
        pointer-events: auto;
        touch-action: auto;
      }
    `,n.innerHTML="",setTimeout(()=>{const H=t.querySelectorAll("option");let _,te;H.forEach(($,L)=>{if($.disabled)return;const T=document.createElement("div");_||(_=T),te=T,T.style.padding=J,T.style.boxSizing="border-box",T.style.cursor="default",T.textContent=$.textContent,m.push(Q(T)),n.appendChild(T),T.addEventListener("click",()=>{t.selectedIndex=L,n.blur()})}),_&&(_.style.marginTop=$e),te&&(te.style.marginBottom=ee);const{height:K,width:me,left:E}=n.getBoundingClientRect(),oe=K+v.bottom>=window.innerHeight?Math.max(0,window.innerHeight-K):v.bottom,le=me+v.left>=window.innerWidth?Math.max(0,window.innerWidth-me):E;s.innerHTML+=`
        .${s.id} {
          top: ${oe}px;
          left: ${le}px;
          overflow: auto;
          max-width: ${window.innerWidth}px;
          max-height: ${window.innerHeight}px;
        }
      `},0)};k(),document.body.appendChild(n),t.addEventListener("mousedown",h),t.addEventListener("touchstart",h);const y=()=>{!f||(f=!1,k(),n.tabIndex=0,n.focus())};t.addEventListener("click",y),t.addEventListener("touchend",y);const g=()=>{n.blur()},b=()=>{n.tabIndex=-1};return n.addEventListener("blur",b),window.addEventListener("scroll",g),window.addEventListener("resize",g),X(()=>{m.forEach(x=>x.destroy()),window.removeEventListener("scroll",g),window.removeEventListener("resize",g),t.removeEventListener("mousedown",h),t.removeEventListener("touchstart",h),t.removeEventListener("click",y),t.removeEventListener("touchend",y),n.removeEventListener("blur",b),e.destroy(),l.remove(),n.remove(),s.remove()})}const _t=t=>{const e=Q(t,{borderStyle:"static"}),l=w(t);l.innerHTML=`
    .${l.id} {
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
    [data-theme=dark] .${l.id} {
      border-color: white;
    }
    .${l.id}:not(:checked) {
      background-color: transparent;
    }
  `;const n=w(t);return n.innerHTML=`
    .${n.id}::after {
      content: '';
      position: absolute;
      width: ${t.clientHeight}px;
      height: ${t.clientHeight}px;
      border-radius: 100%;
      transform: scale(0);
      background-color: var(--exio-selected-indicator-color);
      transition: transform var(--exio-standard-transition-duration);
    }
    .${n.id}:checked::after {
      transform: scale(0.5);
    }
  `,X(()=>{e.destroy(),l.remove(),n.remove()})},zt=t=>{const e=Q(t,{borderStyle:"static"}),l=w(t);l.innerHTML=`
    .${l.id} {
      -webkit-appearance: none;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0px;
      background-color: var(--exio-selected-background-color);
    }
    .${l.id}:not(:checked) {
      background-color: transparent;
    }
  `;const n=w(t);return n.innerHTML=`
    .${n.id}::after {
      content: 'check';
      font-family: 'Exio Icons';
      position: absolute;
      width: ${t.clientHeight}px;
      height: ${t.clientHeight}px;
      transform: scale(0);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--exio-selected-indicator-color);
    }
    .${n.id}:checked::after {
      transform: scale(1.1);
    }
  `,X(()=>{e.destroy(),l.remove(),n.remove()})};function It(t){let e=Boolean(t.open);const l=w(t);l.innerHTML=`
    @keyframes exio-dialog-fade-in {
      0% {
        opacity: 0;
        transform: scale(0);
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }
    @keyframes exio-dialog-fade-out {
      0% {
        opacity: 1;
        transform: scale(1) translateY(-50%);
      }
      100% {
        opacity: 0;
        transform: scale(0) translateY(-50%);
      }
    }
    .${l.id} {
      border-radius: 0px;
      border: 0px solid transparent;
      z-index: 69420;
    }
    .${l.id}::backdrop {
      background-color: transparent;
    }
    .${l.id}:not([open]) {
      display: block;
      position: fixed;
      left: 0px;
      top: 50%;
      margin: auto auto;
      transform: translateY(-50%);
      transform-origin: top center;
    }
    .${l.id}[open] {
      transform-origin: center center;
      animation-name: exio-dialog-fade-in;
      animation-duration: var(--exio-slow-transition-duration);
      animation-fill-mode: forwards;
    }
  `,Et.registerDialog(t),t.close(),e&&t.showModal();const n=w(t);n.innerHTML=`
    .${n.id}:not([open]) {
      display: none;
    }
  `;const s=()=>{n.innerHTML=`
      .${n.id}:not([open]) {
        animation-name: exio-dialog-fade-out;
        animation-duration: var(--exio-slow-transition-duration);
        animation-fill-mode: forwards;
      }
    `,t.removeEventListener("animationstart",s)};t.addEventListener("animationstart",s);const v=document.createElement("div"),c=w(v),f=()=>{const k=getComputedStyle(t),y=k.getPropertyValue("--exio-slow-transition-duration"),g=k.getPropertyValue("--exio-backdrop-color");c.innerHTML=`
      .${c.id} {
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background-color: ${g};
        transition: opacity ${y};
        pointer-events: none;
        touch-action: none;
        z-index: 42069;
      }
    `,v.style.opacity=e?"1":"0"};f(),t.parentElement.appendChild(v);const h=()=>m.observe(t,{attributes:!0,attributeFilter:["open"]}),m=new MutationObserver(()=>{e=Boolean(t.open),m.disconnect(),t.show(),t.close(),f(),e&&t.showModal(),h()});return h(),X(()=>{l.remove(),t.removeEventListener("animationstart",s),n&&n.remove(),c.remove(),m.disconnect()})}function $t(t){const e=Q(t,{disableClicking:!0,borderStyle:"hover",focusable:!0}),l=w(t);return l.innerHTML=`
    .${l.id} {
      padding: 0.25em 0.25em;
    }
    .${l.id}:focus {
      color: var(--exio-focused-text-color);
    }
  `,X(()=>{e.destroy(),l.remove()})}function Vt(t){const e=t.querySelector("summary"),l=Q(e,{borderStyle:"reactive"}),n=w(e);n.innerHTML=`
    .${n.id} {
      cursor: default;
      user-select: none;
      position: relative;
    }
    .${n.id}::marker{
      font-size: 0px;
    }
    .${n.id}:after {
      content: 'expand_more';
      font-family: 'Exio Icons';
      font-size: 1.5em;
      position: absolute;
      right: 0.25em;
      transform: rotate(0deg);
      transition: transform var(--exio-slow-transition-duration);
    }
  `;const s=w(t);s.innerHTML=`
    .${s.id} {
      transition: max-height var(--exio-slow-transition-duration);
      overflow: hidden;
    }
  `;const v=t.querySelector("*:not(summary)"),c=w(t),f=w(e);let h;const m=k=>{h&&clearTimeout(h);const y=getComputedStyle(e),g=()=>St(y.getPropertyValue("--exio-slow-transition-duration")),b=e.offsetHeight+v.offsetHeight;t.open?(k.preventDefault(),c.innerHTML=`
        .${c.id} {
          max-height: ${b}px;
        }
      `,setTimeout(()=>{c.innerHTML=`
        .${c.id} {
          max-height: ${e.offsetHeight}px;
        }
      `,f.innerHTML=`
        .${f.id}:after {
          transform: rotate(0deg);
        }
      `,h=setTimeout(()=>{t.open=!1},g())},0)):(c.innerHTML=`
        .${c.id} {
          max-height: ${e.offsetHeight}px;
        }
      `,f.innerHTML=`
        .${f.id}:after {
          transform: rotate(180deg);
        }
      `,setTimeout(()=>{c.innerHTML=`
          .${c.id} {
            max-height: ${b}px;
          }
        `,h=setTimeout(()=>{c.innerHTML=""},g())},0))};return e.addEventListener("click",m),X(()=>{l.destroy(),n.remove(),s.remove(),c.remove(),e.removeEventListener("click",m)})}function Xe(t){const e=w(t),l=`
    width: var(--exio-slider-thumb-size);
    height: var(--exio-slider-thumb-size);
    background-color: var(--exio-slider-thumb-color);
    transition:
      ${Ye?"box-shadow":"outline"}
      var(--exio-standard-transition-duration);
    border: 0px solid transparent;
    box-sizing: border-box;
    border-radius: 1000px;
    outline: 0px solid var(--exio-hover-body-color);
    box-shadow: 0px 0px 0px 0px var(--exio-hover-body-color);
    cursor: grab;
    transform: translateZ(0);
  `,n=Ye?"box-shadow: 0px 0px 0px var(--exio-slider-thumb-hover-outline-size) var(--exio-hover-body-color);":"outline: var(--exio-slider-thumb-hover-outline-size) solid var(--exio-hover-body-color);",v=`
    ${Ye?"box-shadow: 0px 0px 0px var(--exio-slider-thumb-grab-outline-size) var(--exio-hover-body-color);":"outline: var(--exio-slider-thumb-grab-outline-size) solid var(--exio-hover-body-color);"}
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
      ${l}
    }
    
    .${e.id}::-moz-range-thumb {
      ${l}
    }
    
    .${e.id}::-webkit-slider-thumb:hover {
      ${n}
    }

    .${e.id}::-moz-range-thumb:hover {
      ${n}
    }
    
    .${e.id}::-webkit-slider-thumb:active {
      ${v}
    }

    .${e.id}::-moz-range-thumb:active {
      ${v}
    }
  `,X(()=>{e.remove()})}function At(t,e,l){const n=t.slice();return n[10]=e[l],n[12]=l,n}function Bt(t,e,l){const n=t.slice();return n[10]=e[l],n[12]=l,n}function jt(t,e,l){const n=t.slice();return n[10]=e[l],n[12]=l,n}function Ft(t){let e,l,n,s,v,c,f,h,m,k,y,g,b,x,B,_e,j,G,ze,J,$e,ee,H,_,te,K,me,E,Ve,oe,Ae,le,$,L,T,Le,Ge,A,Je,Ce,Ke,He,I,F,Qe,Te,Ue,R,et,Me,tt,Ee,N,V,ot,S,lt,M,it,Se,ie,xe,nt,be,rt,Y,ge,at,ne,q,st,re,W,ct,Pe,ae,dt,Oe,ye,ut,P,se,ce,pt,Z,vt,Be,O,De,ht,je,ft,Fe,mt,xt=t[5](3),de=[];for(let d=0;d<xt.length;d+=1)de[d]=Rt(jt(t,xt,d));let bt=t[5](3),ue=[];for(let d=0;d<bt.length;d+=1)ue[d]=Nt(Bt(t,bt,d));let gt=t[5](69),pe=[];for(let d=0;d<gt.length;d+=1)pe[d]=Yt(At(t,gt,d));let C=t[2]&&Lt();return{c(){e=r("div"),l=r("div"),n=r("div"),s=r("input"),v=u(),c=r("label"),c.textContent="Dark Mode",f=u(),h=r("div"),m=r("button"),m.textContent="Default Button",k=u(),y=r("button"),y.textContent="Default Button",g=u(),b=r("button"),b.textContent="send",x=u(),B=r("button"),B.textContent="send",_e=u(),j=r("div"),G=r("div"),G.textContent="Default Card",ze=u(),J=r("div"),J.textContent="Default Card",$e=u(),ee=r("div"),H=r("div"),_=r("input"),te=u(),K=r("label"),K.textContent="Switch Option 1",me=u(),E=r("input"),Ve=u(),oe=r("label"),oe.textContent="Switch Option 2",Ae=u(),le=r("div"),$=r("div"),L=r("input"),T=u(),Le=r("label"),Le.textContent="Checkbox Option 1",Ge=u(),A=r("input"),Je=u(),Ce=r("label"),Ce.textContent="Checkbox Option 2",Ke=u(),He=r("div"),I=r("div"),F=r("input"),Qe=u(),Te=r("label"),Te.textContent="Radio Option 1",Ue=u(),R=r("input"),et=u(),Me=r("label"),Me.textContent="Radio Option 2",tt=u(),Ee=r("div"),N=r("div"),V=r("input"),ot=u(),S=r("input"),lt=u(),M=r("input"),it=u(),Se=r("div"),ie=r("div"),xe=r("input"),nt=u(),be=r("textarea"),rt=u(),Y=r("div"),ge=r("select");for(let d=0;d<de.length;d+=1)de[d].c();at=u(),ne=r("select"),q=r("option"),q.textContent="Placeholder";for(let d=0;d<ue.length;d+=1)ue[d].c();st=u(),re=r("select"),W=r("option"),W.textContent="Overflow";for(let d=0;d<pe.length;d+=1)pe[d].c();ct=u(),Pe=r("div"),ae=r("button"),ae.textContent="Open Dialog",dt=u(),Oe=r("div"),ye=r("details"),ye.innerHTML=`<summary class="cyan svelte-oxhi3z">Accordion</summary> 
          <div style="padding: 1rem;" class="gray svelte-oxhi3z">Never gonna give you up <br/>
            Never gonna let you down <br/>
            Never gonna run around and desert you <br/>
            Never gonna make you cry <br/>
            Never gonna say goodbye <br/>
            Never gonna tell a lie and hurt you <br/></div>`,ut=u(),P=r("div"),se=r("div"),ce=r("div"),pt=u(),Z=r("div"),vt=u(),Be=r("div"),O=r("button"),De=r("span"),De.textContent="refresh",ht=u(),je=r("span"),je.textContent="Reload Animations",ft=u(),C&&C.c(),i(s,"type","checkbox"),i(s,"id","dark-mode"),a(s,"border-color",t[3]),a(s,"--exio-selected-background-color","var(--accent)"),a(s,"--exio-selected-indicator-color",t[3]),i(c,"for","dark-mode"),i(n,"class","items svelte-oxhi3z"),i(l,"class","block svelte-oxhi3z"),i(m,"class","gray svelte-oxhi3z"),i(y,"class","blue svelte-oxhi3z"),i(b,"class","gray svelte-oxhi3z"),i(B,"class","cyan svelte-oxhi3z"),i(h,"class","block svelte-oxhi3z"),i(G,"class","card gray svelte-oxhi3z"),i(J,"class","card cyan svelte-oxhi3z"),i(j,"class","block svelte-oxhi3z"),i(_,"type","checkbox"),i(_,"id","switch-option-1"),a(_,"border-color",t[3]),a(_,"--exio-selected-background-color","var(--accent)"),a(_,"--exio-selected-indicator-color",t[3]),i(K,"for","switch-option-1"),i(E,"type","checkbox"),i(E,"id","switch-option-2"),a(E,"border-color","var(--accent)"),a(E,"--exio-selected-background-color",t[3]),a(E,"--exio-selected-indicator-color","var(--accent)"),i(oe,"for","switch-option-2"),i(H,"class","items svelte-oxhi3z"),i(ee,"class","block svelte-oxhi3z"),i(L,"type","checkbox"),i(L,"id","checkbox-option-1"),a(L,"border-color",t[3]),a(L,"--exio-selected-background-color",t[3]),a(L,"--exio-selected-indicator-color",t[4]),i(Le,"for","checkbox-option-1"),i(A,"type","checkbox"),i(A,"id","checkbox-option-2"),a(A,"border-color","var(--accent)"),a(A,"--exio-selected-background-color","var(--accent)"),a(A,"--exio-selected-indicator-color",t[3]),i(Ce,"for","checkbox-option-2"),i($,"class","items svelte-oxhi3z"),i(le,"class","block svelte-oxhi3z"),i(F,"type","radio"),i(F,"id","radio-option-1"),i(F,"name","radio-options"),a(F,"border-color",t[3]),i(Te,"for","radio-option-1"),i(R,"type","radio"),i(R,"id","radio-option-2"),i(R,"name","radio-options"),a(R,"border-color","var(--accent)"),a(R,"--exio-selected-indicator-color","var(--accent)"),i(Me,"for","radio-option-2"),i(I,"class","items svelte-oxhi3z"),i(He,"class","block svelte-oxhi3z"),i(V,"type","range"),i(V,"min","0"),i(V,"max","69"),a(V,"width","150px"),a(V,"margin","20px"),i(V,"step","0.01"),i(V,"class","gray svelte-oxhi3z"),i(S,"type","range"),i(S,"min","0"),i(S,"max","69"),a(S,"width","150px"),a(S,"--exio-slider-thumb-color","var(--cyan)"),a(S,"margin","20px"),i(S,"step","0.01"),i(S,"class","gray svelte-oxhi3z"),i(M,"type","range"),i(M,"min","0"),i(M,"max","69"),a(M,"width","150px"),a(M,"background-color","gray"),a(M,"--exio-slider-thumb-color","var(--accent)"),a(M,"margin","20px"),i(M,"step","0.01"),i(M,"class","gray svelte-oxhi3z"),i(N,"class","items svelte-oxhi3z"),i(Ee,"class","block svelte-oxhi3z"),i(xe,"class","gray svelte-oxhi3z"),i(xe,"placeholder","Textfield"),i(be,"class","gray svelte-oxhi3z"),i(be,"placeholder","Textarea"),i(ie,"class","items svelte-oxhi3z"),i(Se,"class","block svelte-oxhi3z"),i(ge,"class","gray svelte-oxhi3z"),q.disabled=!0,q.selected=!0,q.__value="Placeholder",q.value=q.__value,i(ne,"class","blue svelte-oxhi3z"),W.disabled=!0,W.selected=!0,W.__value="Overflow",W.value=W.__value,i(re,"class","gray svelte-oxhi3z"),i(Y,"class","block svelte-oxhi3z"),i(ae,"class","gray svelte-oxhi3z"),i(Pe,"class","block svelte-oxhi3z"),a(ye,"width","320px"),i(Oe,"class","block svelte-oxhi3z"),a(ce,"width","300px"),a(ce,"height","5px"),a(ce,"--exio-loader-fill-color","var(--cyan)"),a(Z,"width","300px"),a(Z,"height","5px"),a(Z,"--exio-loader-fill-color","var(--accent)"),a(Z,"background-color",t[3]),i(se,"class","items svelte-oxhi3z"),i(O,"class","cyan svelte-oxhi3z"),a(O,"display","flex"),a(O,"align-items","center"),a(O,"gap","0.25rem"),i(P,"class","block svelte-oxhi3z"),a(P,"flex-direction","column"),a(P,"padding","10px 0px"),i(e,"class","wrapper svelte-oxhi3z")},m(d,z){ve(d,e,z),o(e,l),o(l,n),o(n,s),s.checked=t[0],o(n,v),o(n,c),o(e,f),o(e,h),o(h,m),o(h,k),o(h,y),o(h,g),o(h,b),o(h,x),o(h,B),o(e,_e),o(e,j),o(j,G),o(j,ze),o(j,J),o(e,$e),o(e,ee),o(ee,H),o(H,_),o(H,te),o(H,K),o(H,me),o(H,E),o(H,Ve),o(H,oe),o(e,Ae),o(e,le),o(le,$),o($,L),o($,T),o($,Le),o($,Ge),o($,A),o($,Je),o($,Ce),o(e,Ke),o(e,He),o(He,I),o(I,F),o(I,Qe),o(I,Te),o(I,Ue),o(I,R),o(I,et),o(I,Me),o(e,tt),o(e,Ee),o(Ee,N),o(N,V),o(N,ot),o(N,S),o(N,lt),o(N,M),o(e,it),o(e,Se),o(Se,ie),o(ie,xe),o(ie,nt),o(ie,be),o(e,rt),o(e,Y),o(Y,ge);for(let D=0;D<de.length;D+=1)de[D].m(ge,null);o(Y,at),o(Y,ne),o(ne,q);for(let D=0;D<ue.length;D+=1)ue[D].m(ne,null);o(Y,st),o(Y,re),o(re,W);for(let D=0;D<pe.length;D+=1)pe[D].m(re,null);o(e,ct),o(e,Pe),o(Pe,ae),o(e,dt),o(e,Oe),o(Oe,ye),o(e,ut),o(e,P),o(P,se),o(se,ce),o(se,pt),o(se,Z),o(P,vt),o(P,Be),o(Be,O),o(O,De),o(O,ht),o(O,je),o(P,ft),C&&C.m(P,null),Fe||(mt=[p(qe.call(null,s)),Ie(s,"change",t[7]),p(U.call(null,m)),p(U.call(null,y)),p(U.call(null,b)),p(We.call(null,b)),p(U.call(null,B)),p(We.call(null,B)),p(we.call(null,G)),p(we.call(null,J)),p(qe.call(null,_)),p(qe.call(null,E)),p(zt.call(null,L)),p(zt.call(null,A)),p(_t.call(null,F)),p(_t.call(null,R)),p(Xe.call(null,V)),p(Xe.call(null,S)),p(Xe.call(null,M)),p($t.call(null,xe)),p($t.call(null,be)),p(Ze.call(null,ge)),p(Ze.call(null,ne)),p(Ze.call(null,re)),p(U.call(null,ae)),Ie(ae,"click",t[8]),p(Vt.call(null,ye)),p(kt.call(null,ce)),p(kt.call(null,Z)),p(We.call(null,De)),p(U.call(null,O)),Ie(O,"click",t[9]),p(wt.call(null,e))],Fe=!0)},p(d,z){z&8&&a(s,"border-color",d[3]),z&8&&a(s,"--exio-selected-indicator-color",d[3]),z&1&&(s.checked=d[0]),z&8&&a(_,"border-color",d[3]),z&8&&a(_,"--exio-selected-indicator-color",d[3]),z&8&&a(E,"--exio-selected-background-color",d[3]),z&8&&a(L,"border-color",d[3]),z&8&&a(L,"--exio-selected-background-color",d[3]),z&16&&a(L,"--exio-selected-indicator-color",d[4]),z&8&&a(A,"--exio-selected-indicator-color",d[3]),z&8&&a(F,"border-color",d[3]),z&8&&a(Z,"background-color",d[3]),d[2]?C||(C=Lt(),C.c(),C.m(P,null)):C&&(C.d(1),C=null)},d(d){d&&he(e),Ne(de,d),Ne(ue,d),Ne(pe,d),C&&C.d(),Fe=!1,Re(mt)}}}function Rt(t){let e,l,n=t[12]+1+"",s,v;return{c(){e=r("option"),l=fe("Option "),s=fe(n),e.__value=v=t[12]+1,e.value=e.__value},m(c,f){ve(c,e,f),o(e,l),o(e,s)},p:ke,d(c){c&&he(e)}}}function Nt(t){let e,l,n=t[12]+1+"",s,v;return{c(){e=r("option"),l=fe("Option "),s=fe(n),e.__value=v=t[12]+1,e.value=e.__value},m(c,f){ve(c,e,f),o(e,l),o(e,s)},p:ke,d(c){c&&he(e)}}}function Yt(t){let e,l,n=t[12]+1+"",s,v;return{c(){e=r("option"),l=fe("Option "),s=fe(n),e.__value=v=t[12]+1,e.value=e.__value},m(c,f){ve(c,e,f),o(e,l),o(e,s)},p:ke,d(c){c&&he(e)}}}function Lt(t){let e,l,n,s,v,c,f,h;return{c(){e=r("div"),l=r("div"),l.textContent="Fly In Animation",n=u(),s=r("div"),s.textContent="Zoom In Animation",v=u(),c=r("div"),c.textContent="Fade In Animation",i(l,"class","card gray svelte-oxhi3z"),i(s,"class","card blue svelte-oxhi3z"),a(s,"--exio-zoom-in-animation-scale","80%"),i(c,"class","card cyan svelte-oxhi3z"),i(e,"class","items svelte-oxhi3z")},m(m,k){ve(m,e,k),o(e,l),o(e,n),o(e,s),o(e,v),o(e,c),f||(h=[p(we.call(null,l)),p(Pt.call(null,l)),p(we.call(null,s)),p(wt.call(null,s)),p(we.call(null,c)),p(Ot.call(null,c))],f=!0)},d(m){m&&he(e),f=!1,Re(h)}}}function qt(t){let e,l,n,s,v,c,f,h,m,k,y,g=Ft(t);return{c(){e=r("div"),l=r("dialog"),n=r("h2"),n.textContent="Hello World!",s=u(),v=r("p"),v.textContent="Exio uses the HTML dialog element.",c=u(),f=r("button"),f.textContent="Close",h=u(),g&&g.c(),i(n,"class","svelte-oxhi3z"),i(f,"class","blue svelte-oxhi3z"),a(f,"float","right"),l.open=t[1],i(l,"class","dialog svelte-oxhi3z"),a(l,"width","min(300px, 100%)"),i(e,"data-theme",m=t[0]?"dark":"light"),i(e,"class","svelte-oxhi3z"),yt(e,"dark-theme",t[0])},m(b,x){ve(b,e,x),o(e,l),o(l,n),o(l,s),o(l,v),o(l,c),o(l,f),o(e,h),g&&g.m(e,null),k||(y=[p(U.call(null,f)),Ie(f,"click",t[6]),p(It.call(null,l)),p(Dt.call(null,e))],k=!0)},p(b,[x]){x&2&&(l.open=b[1]),g.p(b,x),x&1&&m!==(m=b[0]?"dark":"light")&&i(e,"data-theme",m),x&1&&yt(e,"dark-theme",b[0])},i:ke,o:ke,d(b){b&&he(e),g&&g.d(),k=!1,Re(y)}}}function Wt(t,e,l){let n,s,v=!1,c=!0;const f=b=>new Array(b);let h=!0;const m=()=>l(1,v=!1);function k(){h=this.checked,l(0,h)}const y=()=>l(1,v=!0),g=async()=>{l(2,c=!1),await Mt(),l(2,c=!0)};return t.$$.update=()=>{t.$$.dirty&1&&l(4,n=h?"black":"white"),t.$$.dirty&1&&l(3,s=h?"white":"black"),t.$$.dirty&1&&(h?document.body.classList.add("dark"):document.body.classList.remove("dark"))},[h,v,c,s,n,f,m,k,y,g]}class Gt extends Ct{constructor(e){super();Ht(this,e,Wt,qt,Tt,{})}}export{Gt as default};
