import{s as O,n as A,o as Q}from"../chunks/scheduler.b0c1c2c3.js";import{S as R,i as U,e as W,a as y,f as p,g,m as D,h as b,j as z,n as I,k as m,x as k,o as N,s as w,c as P,y as X,l as C,z as H}from"../chunks/index.b0b833de.js";import{e as V}from"../chunks/each.e59479a4.js";function q(n,l,o){const e=n.slice();return e[5]=l[o],e}function x(n,l,o){const e=n.slice();return e[8]=l[o],e[10]=o,e}function B(n,l,o){const e=n.slice();return e[11]=l[o],e[10]=o,e}function Y(n){let l,o=n[0].msg+"",e;return{c(){l=g("div"),e=D(o),this.h()},l(a){l=b(a,"DIV",{class:!0});var r=z(l);e=I(r,o),r.forEach(p),this.h()},h(){m(l,"class","orr svelte-1v44ajj")},m(a,r){y(a,l,r),k(l,e)},p(a,r){r&1&&o!==(o=a[0].msg+"")&&N(e,o)},d(a){a&&p(l)}}}function Z(n){let l,o,e,a,r,f="Órarend",d=V(["Hétfő","Kedd","Szerda","Csütörtök","Péntek"]),i=[];for(let s=0;s<5;s+=1)i[s]=F(B(n,d,s));let j=V(Array(41).fill(0)),c=[];for(let s=0;s<j.length;s+=1)c[s]=G(x(n,j,s));let v=V(n[0].orak),h=[];for(let s=0;s<v.length;s+=1)h[s]=J(q(n,v,s));return{c(){for(let s=0;s<5;s+=1)i[s].c();l=w();for(let s=0;s<c.length;s+=1)c[s].c();o=w();for(let s=0;s<h.length;s+=1)h[s].c();e=w(),a=g("div"),r=g("span"),r.textContent=f,this.h()},l(s){for(let t=0;t<5;t+=1)i[t].l(s);l=P(s);for(let t=0;t<c.length;t+=1)c[t].l(s);o=P(s);for(let t=0;t<h.length;t+=1)h[t].l(s);e=P(s),a=b(s,"DIV",{class:!0,style:!0});var _=z(a);r=b(_,"SPAN",{class:!0,"data-svelte-h":!0}),X(r)!=="svelte-uuzvef"&&(r.textContent=f),_.forEach(p),this.h()},h(){m(r,"class","svelte-1v44ajj"),m(a,"class","orr svelte-1v44ajj"),C(a,"left",n[0].left+107+"px"),C(a,"top",n[0].top-50+"px")},m(s,_){for(let t=0;t<5;t+=1)i[t]&&i[t].m(s,_);y(s,l,_);for(let t=0;t<c.length;t+=1)c[t]&&c[t].m(s,_);y(s,o,_);for(let t=0;t<h.length;t+=1)h[t]&&h[t].m(s,_);y(s,e,_),y(s,a,_),k(a,r)},p(s,_){if(_&4){d=V(["Hétfő","Kedd","Szerda","Csütörtök","Péntek"]);let t;for(t=0;t<5;t+=1){const u=B(s,d,t);i[t]?i[t].p(u,_):(i[t]=F(u),i[t].c(),i[t].m(l.parentNode,l))}for(;t<5;t+=1)i[t].d(1)}if(_&24){j=V(Array(41).fill(0));let t;for(t=0;t<j.length;t+=1){const u=x(s,j,t);c[t]?c[t].p(u,_):(c[t]=G(u),c[t].c(),c[t].m(o.parentNode,o))}for(;t<c.length;t+=1)c[t].d(1);c.length=j.length}if(_&3){v=V(s[0].orak);let t;for(t=0;t<v.length;t+=1){const u=q(s,v,t);h[t]?h[t].p(u,_):(h[t]=J(u),h[t].c(),h[t].m(e.parentNode,e))}for(;t<h.length;t+=1)h[t].d(1);h.length=v.length}_&1&&C(a,"left",s[0].left+107+"px"),_&1&&C(a,"top",s[0].top-50+"px")},d(s){s&&(p(l),p(o),p(e),p(a)),H(i,s),H(c,s),H(h,s)}}}function F(n){let l,o,e;return{c(){l=g("div"),o=g("div"),e=D(n[11]),this.h()},l(a){l=b(a,"DIV",{class:!0,style:!0});var r=z(l);o=b(r,"DIV",{class:!0});var f=z(o);e=I(f,n[11]),f.forEach(p),r.forEach(p),this.h()},h(){m(o,"class","svelte-1v44ajj"),m(l,"class","nn svelte-1v44ajj"),m(l,"style",n[2](n[11],n[10]))},m(a,r){y(a,l,r),k(l,o),k(o,e)},p:A,d(a){a&&p(l)}}}function G(n){let l,o,e,a=L(n[10])+"",r,f,d,i=L(n[10])+"",j;return{c(){l=g("div"),o=w(),e=g("div"),r=D(a),f=w(),d=g("div"),j=D(i),this.h()},l(c){l=b(c,"DIV",{style:!0,class:!0}),z(l).forEach(p),o=P(c),e=b(c,"DIV",{style:!0,class:!0});var v=z(e);r=I(v,a),v.forEach(p),f=P(c),d=b(c,"DIV",{style:!0,class:!0});var h=z(d);j=I(h,i),h.forEach(p),this.h()},h(){m(l,"style",n[4](n[10])),m(l,"class","hr svelte-1v44ajj"),m(e,"style",n[3](n[10],107)),m(e,"class","ip svelte-1v44ajj"),m(d,"style",n[3](n[10],638)),m(d,"class","ip svelte-1v44ajj")},m(c,v){y(c,l,v),y(c,o,v),y(c,e,v),k(e,r),y(c,f,v),y(c,d,v),k(d,j)},p:A,d(c){c&&(p(l),p(o),p(e),p(f),p(d))}}}function J(n){let l,o,e=n[5].text+"",a,r,f,d,i=n[5].csop+"",j,c,v,h=n[5].helysz+"",s,_,t;return{c(){l=g("div"),o=g("div"),a=D(e),r=w(),f=g("div"),d=g("span"),j=D(i),c=D(" - "),v=g("span"),s=D(h),this.h()},l(u){l=b(u,"DIV",{class:!0,style:!0});var E=z(l);o=b(E,"DIV",{class:!0});var T=z(o);a=I(T,e),T.forEach(p),r=P(E),f=b(E,"DIV",{class:!0});var S=z(f);d=b(S,"SPAN",{class:!0});var K=z(d);j=I(K,i),K.forEach(p),c=I(S," - "),v=b(S,"SPAN",{class:!0});var M=z(v);s=I(M,h),M.forEach(p),S.forEach(p),E.forEach(p),this.h()},h(){m(o,"class","text svelte-1v44ajj"),m(d,"class","csop svelte-1v44ajj"),m(v,"class","hsz svelte-1v44ajj"),m(f,"class","csh svelte-1v44ajj"),m(l,"class",_="cont "+n[5].type+" svelte-1v44ajj"),m(l,"style",t=n[1](n[5]))},m(u,E){y(u,l,E),k(l,o),k(o,a),k(l,r),k(l,f),k(f,d),k(d,j),k(f,c),k(f,v),k(v,s)},p(u,E){E&1&&e!==(e=u[5].text+"")&&N(a,e),E&1&&i!==(i=u[5].csop+"")&&N(j,i),E&1&&h!==(h=u[5].helysz+"")&&N(s,h),E&1&&_!==(_="cont "+u[5].type+" svelte-1v44ajj")&&m(l,"class",_),E&1&&t!==(t=u[1](u[5]))&&m(l,"style",t)},d(u){u&&p(l)}}}function $(n){let l;function o(r,f){return r[0].mounted==!0?Z:Y}let e=o(n),a=e(n);return{c(){a.c(),l=W()},l(r){a.l(r),l=W()},m(r,f){a.m(r,f),y(r,l,f)},p(r,[f]){e===(e=o(r))&&a?a.p(r,f):(a.d(1),a=e(r),a&&(a.c(),a.m(l.parentNode,l)))},i:A,o:A,d(r){r&&p(l),a.d(r)}}}function L(n){let l=30+n*15,o=7+Math.trunc(l/60);return l=l%60,`${o}:${l<10?"0"+l:l}`}function ee(n,l,o){var e={mounted:!1,top:70,left:0,orak:[],msg:"Pozícionálás..."};return Q(()=>{onresize=()=>{(e.mounted||e.msg=="Túl kicsi ablakméret...")&&setTimeout(()=>{o(0,e.left=(window.innerWidth-772)/2,e),o(0,e.top=(window.innerHeight-632)/2,e),e.left>-100&&e.top>20?(o(0,e.mounted=!0,e),o(0,e.msg="Pozícionálás...",e)):o(0,e.msg="Túl kicsi ablakméret...",e)},1e3),o(0,e.mounted=!1,e)},fetch("input.json").then(i=>i.json()).then(i=>{o(0,e.orak=i,e),o(0,e.left=(window.innerWidth-772)/2,e),o(0,e.top=(window.innerHeight-632)/2,e),e.left>-100&&e.top>20?o(0,e.mounted=!0,e):o(0,e.msg="Túl kicsi ablakméret...",e)})}),[e,i=>`
  top: ${e.top+20+(i.ok[0]-7)*60+i.ok[1]}px; 
  left:${e.left+140+{H:0,K:1,Sz:2,Cs:3,P:4}[i.n]*100}px; width: 90px; 
  height: ${i.it}px`,(i,j)=>`left:${e.left+137+j*100}px; top: ${e.top+17}px`,(i,j)=>`top: ${e.top+45+i*15}px; left: ${e.left+j}px;`,i=>`top: ${e.top+50+i*15}px; left: ${e.left+107}px;`]}class oe extends R{constructor(l){super(),U(this,l,ee,$,O,{})}}export{oe as component};
