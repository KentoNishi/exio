import{S as _e,i as fe,s as ge,e as o,b as k,f as b,g as t,h as q,j as de,k as e,l as g,n as V,o as ve,r as pe,p as me,q as H,u as je,v as ke,X as Be}from"./vendor.4de8a817.js";import{e as W,a as Y,b as ye,c as we,d as $e,f as Ce}from"./consts.9c7cfb71.js";function be(n,l,a){const i=n.slice();return i[7]=l[a],i}function he(n){let l,a,i=n[7].title+"",r,w,c,$,m,C,h,p,_;return{c(){l=o("a"),a=o("button"),r=k(i),w=b(),c=o("span"),c.textContent="open_in_new",C=b(),t(c,"class","svelte-1e4acj2"),t(a,"class","bg-gray svelte-1e4acj2"),q(a,"cursor","pointer"),t(l,"href",h=n[7].href),t(l,"target","_blank"),t(l,"class","svelte-1e4acj2")},m(B,j){de(B,l,j),e(l,a),e(a,r),e(a,w),e(a,c),e(l,C),p||(_=[g($=W.call(null,c)),g(m=Y.call(null,a))],p=!0)},p:V,d(B){B&&ve(l),p=!1,pe(_)}}}function Ie(n){let l,a,i,r,w,c,$,m,C,h,p=n[2]("title")+"",_,B,j,F=n[2]("description")+"",M,ee,x,te,K,S,N,T=n[2]("about.title")+"",O,le,X,Z=n[2]("about.description")+"",P,se,z,f,D,E=n[2]("demo.title")+"",Q,ae,G,J=n[4](`
          <button class="cyan" use:exioButton>
            Button 1
          </button>
          <button class="cyan" style="width: 120px;" use:exioButton>
            Button 2
          </button>
        `,`
          .cyan-bg {
            background-color: ${n[1]};
          }
        `)+"",R,ne,I,oe,ce,y,ie,L,U,ue,A=n[3],d=[];for(let s=0;s<A.length;s+=1)d[s]=he(be(n,A,s));return{c(){l=o("div"),a=o("div"),i=o("div"),r=o("span"),r.textContent="light_mode",w=b(),c=o("input"),$=b(),m=o("span"),m.textContent="dark_mode",C=b(),h=o("span"),_=k(p),B=b(),j=o("span"),M=k(F),ee=b(),x=o("div");for(let s=0;s<d.length;s+=1)d[s].c();te=b(),K=o("div"),S=o("div"),N=o("div"),O=k(T),le=b(),X=o("div"),P=k(Z),se=b(),z=o("div"),f=o("div"),D=o("div"),Q=k(E),ae=b(),G=o("pre"),R=k(J),ne=b(),I=o("button"),oe=k("Button"),ce=b(),y=o("button"),ie=k("Button 2"),t(r,"class","svelte-1e4acj2"),t(c,"type","checkbox"),t(c,"id","dark-mode"),t(c,"class","svelte-1e4acj2"),t(m,"class","svelte-1e4acj2"),t(i,"class","toggler svelte-1e4acj2"),t(h,"class","title svelte-1e4acj2"),t(j,"class","description svelte-1e4acj2"),t(x,"class","buttons svelte-1e4acj2"),t(a,"class","gradient-banner svelte-1e4acj2"),t(N,"class","title svelte-1e4acj2"),t(X,"class","desc svelte-1e4acj2"),t(S,"class","content svelte-1e4acj2"),t(K,"class","section svelte-1e4acj2"),t(D,"class","title svelte-1e4acj2"),t(G,"class","svelte-1e4acj2"),q(I,"background-color",n[1]),t(I,"class","svelte-1e4acj2"),q(y,"background-color",n[1]),q(y,"width","120px"),t(y,"class","svelte-1e4acj2"),t(f,"class","content svelte-1e4acj2"),t(z,"class","section svelte-1e4acj2"),t(l,"data-theme",L=n[0]?"dark":"light"),t(l,"class","svelte-1e4acj2")},m(s,v){de(s,l,v),e(l,a),e(a,i),e(i,r),e(i,w),e(i,c),c.checked=n[0],e(i,$),e(i,m),e(a,C),e(a,h),e(h,_),e(a,B),e(a,j),e(j,M),e(a,ee),e(a,x);for(let u=0;u<d.length;u+=1)d[u].m(x,null);e(l,te),e(l,K),e(K,S),e(S,N),e(N,O),e(S,le),e(S,X),e(X,P),e(l,se),e(l,z),e(z,f),e(f,D),e(D,Q),e(f,ae),e(f,G),e(G,R),e(f,ne),e(f,I),e(I,oe),e(f,ce),e(f,y),e(y,ie),U||(ue=[g(W.call(null,r)),g(ye.call(null,c)),me(c,"change",n[5]),g(W.call(null,m)),g(we.call(null,a)),g(Y.call(null,I)),g(Y.call(null,y)),g($e.call(null,l)),g(Ce.call(null,l))],U=!0)},p(s,[v]){if(v&1&&(c.checked=s[0]),v&4&&p!==(p=s[2]("title")+"")&&H(_,p),v&4&&F!==(F=s[2]("description")+"")&&H(M,F),v&8){A=s[3];let u;for(u=0;u<A.length;u+=1){const re=be(s,A,u);d[u]?d[u].p(re,v):(d[u]=he(re),d[u].c(),d[u].m(x,null))}for(;u<d.length;u+=1)d[u].d(1);d.length=A.length}v&4&&T!==(T=s[2]("about.title")+"")&&H(O,T),v&4&&Z!==(Z=s[2]("about.description")+"")&&H(P,Z),v&4&&E!==(E=s[2]("demo.title")+"")&&H(Q,E),v&2&&J!==(J=s[4](`
          <button class="cyan" use:exioButton>
            Button 1
          </button>
          <button class="cyan" style="width: 120px;" use:exioButton>
            Button 2
          </button>
        `,`
          .cyan-bg {
            background-color: ${s[1]};
          }
        `)+"")&&H(R,J),v&2&&q(I,"background-color",s[1]),v&2&&q(y,"background-color",s[1]),v&1&&L!==(L=s[0]?"dark":"light")&&t(l,"data-theme",L)},i:V,o:V,d(s){s&&ve(l),je(d,s),U=!1,pe(ue)}}}function Se(n,l,a){let i,r;ke(n,Be,h=>a(2,r=h));const w=[{title:r("banner.buttons.npm"),href:"https://www.npmjs.com/package/exio"},{title:r("banner.buttons.github"),href:"https://github.com/KentoNishi/exio"},{title:r("banner.buttons.docs"),href:"#/docs"}];let c=!0;const $=(h,p=0)=>{let _=h.split(`
`);const B=_[1].search(/\S|$/);return _=_.splice(p?0:1).map(j=>(j.replace(/ /g,"")!==""?" ".repeat(p):"")+j.substr(B)),_.join(`
`)},m=(h,p)=>$(h)+`
<style>${$(p,2)}</style>`;function C(){c=this.checked,a(0,c)}return n.$$.update=()=>{n.$$.dirty&1&&a(1,i=c?"darkcyan":"cyan")},[c,i,r,w,m,C]}class He extends _e{constructor(l){super();fe(this,l,Se,Ie,ge,{})}}export{He as default};
