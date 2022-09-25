var H=Object.defineProperty;var p=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var x=(e,t,o)=>t in e?H(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,c=(e,t)=>{for(var o in t||(t={}))$.call(t,o)&&x(e,o,t[o]);if(p)for(var o of p(t))v.call(t,o)&&x(e,o,t[o]);return e};import{e as L,c as M,a as E,s as m,u as w,d as k,p as S,t as C}from"./index.a3656670.js";const V=c({transitionDuration:{prop:"--exio-slow-transition-duration",val:""}},S);function z(e,t={}){const o=L(e);M();const r=e.querySelector("summary"),h=E(r,{borderStyle:"reactive"}),n=m(r);n.innerHTML=`
    .${n.id} {
      cursor: default;
      user-select: none;
      position: relative;
    }
    .${n.id}::marker{
      font-size: 0px;
    }
    .${n.id}::after {
      content: 'expand_more';
      font-family: 'Exio Icons';
      font-size: 1.5em;
      position: absolute;
      right: 0.25em;
      transform: rotate(0deg);
      transition: transform var(--exio-slow-transition-duration);
    }
  `;const f=m(e);f.innerHTML=`
    .${f.id} {
      transition: max-height var(--exio-slow-transition-duration);
      overflow: hidden;
    }
  `;const g=e.querySelector("*:not(summary)"),i=m(e),s=m(r);let a;const l=T=>{a&&clearTimeout(a);const y=getComputedStyle(r),u=()=>C(y.getPropertyValue("--exio-slow-transition-duration")),d=()=>r.offsetHeight+g.offsetHeight;e.open?(T.preventDefault(),i.innerHTML=`
        .${i.id} {
          max-height: ${d()}px;
        }
      `,setTimeout(()=>{i.innerHTML=`
        .${i.id} {
          max-height: ${r.offsetHeight}px;
        }
      `,s.innerHTML=`
        .${s.id}::after {
          transform: rotate(0deg);
        }
      `,a=setTimeout(()=>{e.open=!1},u())},0)):(i.innerHTML=`
        .${i.id} {
          max-height: ${r.offsetHeight}px;
        }
      `,s.innerHTML=`
        .${s.id}::after {
          transform: rotate(180deg);
        }
      `,setTimeout(()=>{i.innerHTML=`
          .${i.id} {
            max-height: ${d()}px;
          }
        `,a=setTimeout(()=>{i.innerHTML=""},u())},0))};return r.addEventListener("click",l),c(c({},w(t,e,V)),k(()=>{h.destroy(),n.remove(),f.remove(),i.remove(),o.destroy(),r.removeEventListener("click",l)}))}export{z as e};
//# sourceMappingURL=accordion.cdc0c65a.js.map
