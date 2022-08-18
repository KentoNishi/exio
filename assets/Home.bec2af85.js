import{S as re,i as ue,s as he,e as o,b as q,f as m,g as l,h as pe,j as L,k as t,l as g,n as ve,o as M,r as ie,p as _e,q as fe,c as me,m as be,u as ge,v as H,x as ke,t as we,a as Ce,z as je,d as Ae,A as Ie,X as $e}from"./vendor.48e04785.js";import{e as W,a as De,D as Se,b as qe,c as Be,d as He,f as ze,g as Fe}from"./Demo.2d4c6ba1.js";function oe(s,n,a){const h=s.slice();return h[9]=n[a],h}function ce(s){let n,a,h=s[9].title+"",v,r,c,b,C,i,_,k,j;return{c(){n=o("a"),a=o("button"),v=q(h),r=m(),c=o("span"),c.textContent="open_in_new",i=m(),l(c,"class","svelte-10h020s"),l(a,"class","bg-gray svelte-10h020s"),pe(a,"cursor","pointer"),l(n,"href",_=s[9].href),l(n,"target","_blank"),l(n,"class","svelte-10h020s")},m(A,z){L(A,n,z),t(n,a),t(a,v),t(a,r),t(a,c),t(n,i),k||(j=[g(b=W.call(null,c)),g(C=De.call(null,a))],k=!0)},p:ve,d(A){A&&M(n),k=!1,ie(j)}}}function Ke(s){let n,a,h,v,r,c,b,C,i,_,k,j=s[2]("title")+"",A,z,F,K=s[2]("description")+"",O,Y,B,x,N,I,T,X=s[2]("about.title")+"",P,ee,Z,y=s[2]("about.description")+"",Q,te,E,$,G,J=s[2]("demo.title")+"",R,le,w,U,f,V,se,D=s[3],u=[];for(let e=0;e<D.length;e+=1)u[e]=ce(oe(s,D,e));function de(e){s[5](e)}let ae={};return s[0]!==void 0&&(ae.dark=s[0]),w=new Se({props:ae}),_e.push(()=>fe(w,"dark",de)),{c(){n=o("div"),a=o("div"),h=o("span"),h.textContent="light_mode",v=m(),r=o("input"),c=m(),b=o("span"),b.textContent="dark_mode",C=m(),i=o("div"),_=o("div"),k=o("span"),A=q(j),z=m(),F=o("span"),O=q(K),Y=m(),B=o("div");for(let e=0;e<u.length;e+=1)u[e].c();x=m(),N=o("div"),I=o("div"),T=o("div"),P=q(X),ee=m(),Z=o("div"),Q=q(y),te=m(),E=o("div"),$=o("div"),G=o("div"),R=q(J),le=m(),me(w.$$.fragment),l(h,"class","svelte-10h020s"),l(r,"type","checkbox"),l(r,"id","dark-mode"),l(r,"class","svelte-10h020s"),l(b,"class","svelte-10h020s"),l(a,"class","toggler svelte-10h020s"),l(n,"class","navbar svelte-10h020s"),l(n,"data-theme",s[1]),l(k,"class","title svelte-10h020s"),l(F,"class","description svelte-10h020s"),l(B,"class","buttons svelte-10h020s"),l(_,"class","gradient-banner svelte-10h020s"),l(T,"class","title svelte-10h020s"),l(Z,"class","desc svelte-10h020s"),l(I,"class","content svelte-10h020s"),l(N,"class","section svelte-10h020s"),l(G,"class","title svelte-10h020s"),l($,"class","content svelte-10h020s"),l(E,"class","section svelte-10h020s"),l(i,"data-theme",s[1]),l(i,"class","svelte-10h020s")},m(e,d){L(e,n,d),t(n,a),t(a,h),t(a,v),t(a,r),r.checked=s[0],t(a,c),t(a,b),L(e,C,d),L(e,i,d),t(i,_),t(_,k),t(k,A),t(_,z),t(_,F),t(F,O),t(_,Y),t(_,B);for(let S=0;S<u.length;S+=1)u[S].m(B,null);t(i,x),t(i,N),t(N,I),t(I,T),t(T,P),t(I,ee),t(I,Z),t(Z,Q),t(i,te),t(i,E),t(E,$),t($,G),t(G,R),t($,le),be(w,$,null),f=!0,V||(se=[g(W.call(null,h)),g(qe.call(null,r)),ge(r,"change",s[4]),g(W.call(null,b)),g(Be.call(null,n)),g(He.call(null,_)),g(ze.call(null,i)),g(Fe.call(null,i))],V=!0)},p(e,[d]){if(d&1&&(r.checked=e[0]),(!f||d&2)&&l(n,"data-theme",e[1]),(!f||d&4)&&j!==(j=e[2]("title")+"")&&H(A,j),(!f||d&4)&&K!==(K=e[2]("description")+"")&&H(O,K),d&8){D=e[3];let p;for(p=0;p<D.length;p+=1){const ne=oe(e,D,p);u[p]?u[p].p(ne,d):(u[p]=ce(ne),u[p].c(),u[p].m(B,null))}for(;p<u.length;p+=1)u[p].d(1);u.length=D.length}(!f||d&4)&&X!==(X=e[2]("about.title")+"")&&H(P,X),(!f||d&4)&&y!==(y=e[2]("about.description")+"")&&H(Q,y),(!f||d&4)&&J!==(J=e[2]("demo.title")+"")&&H(R,J);const S={};!U&&d&1&&(U=!0,S.dark=e[0],ke(()=>U=!1)),w.$set(S),(!f||d&2)&&l(i,"data-theme",e[1])},i(e){f||(we(w.$$.fragment,e),f=!0)},o(e){Ce(w.$$.fragment,e),f=!1},d(e){e&&M(n),e&&M(C),e&&M(i),je(u,e),Ae(w),V=!1,ie(se)}}}function Ne(s,n,a){let h,v;Ie(s,$e,i=>a(2,v=i));const r=[{title:v("banner.buttons.npm"),href:"https://www.npmjs.com/package/exio"},{title:v("banner.buttons.github"),href:"https://github.com/KentoNishi/exio"},{title:v("banner.buttons.docs"),href:"#/docs"}];let c=!0;function b(){c=this.checked,a(0,c)}function C(i){c=i,a(0,c)}return s.$$.update=()=>{s.$$.dirty&1,s.$$.dirty&1&&a(1,h=c?"dark":"light")},[c,h,v,r,b,C]}class Ze extends re{constructor(n){super();ue(this,n,Ne,Ke,he,{})}}export{Ze as default};
