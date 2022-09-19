import{e as p,c as g,a as T,s,d as y,t as H}from"./index.bfb30096.js";function v(o){const l=p(o);g();const t=o.querySelector("summary"),d=T(t,{borderStyle:"reactive"}),i=s(t);i.innerHTML=`
    .${i.id} {
      cursor: default;
      user-select: none;
      position: relative;
    }
    .${i.id}::marker{
      font-size: 0px;
    }
    .${i.id}:after {
      content: 'expand_more';
      font-family: 'Exio Icons';
      font-size: 1.5em;
      position: absolute;
      right: 0.25em;
      transform: rotate(0deg);
      transition: transform var(--exio-slow-transition-duration);
    }
  `;const a=s(o);a.innerHTML=`
    .${a.id} {
      transition: max-height var(--exio-slow-transition-duration);
      overflow: hidden;
    }
  `;const u=o.querySelector("*:not(summary)"),e=s(o),r=s(t);let n;const m=x=>{n&&clearTimeout(n);const h=getComputedStyle(t),c=()=>H(h.getPropertyValue("--exio-slow-transition-duration")),f=()=>t.offsetHeight+u.offsetHeight;o.open?(x.preventDefault(),e.innerHTML=`
        .${e.id} {
          max-height: ${f()}px;
        }
      `,setTimeout(()=>{e.innerHTML=`
        .${e.id} {
          max-height: ${t.offsetHeight}px;
        }
      `,r.innerHTML=`
        .${r.id}:after {
          transform: rotate(0deg);
        }
      `,n=setTimeout(()=>{o.open=!1},c())},0)):(e.innerHTML=`
        .${e.id} {
          max-height: ${t.offsetHeight}px;
        }
      `,r.innerHTML=`
        .${r.id}:after {
          transform: rotate(180deg);
        }
      `,setTimeout(()=>{e.innerHTML=`
          .${e.id} {
            max-height: ${f()}px;
          }
        `,n=setTimeout(()=>{e.innerHTML=""},c())},0))};return t.addEventListener("click",m),y(()=>{d.destroy(),i.remove(),a.remove(),e.remove(),l.destroy(),t.removeEventListener("click",m)})}export{v as e};
//# sourceMappingURL=accordion.0a3bd3ab.js.map
