import{s as O,n as A,o as Q}from"../chunks/scheduler.b0c1c2c3.js";import{S as R,i as U,e as M,a as g,f as p,g as b,m as D,h as q,j as z,n as I,k as m,x as y,o as N,s as w,c as P,y as X,l as C,z as H}from"../chunks/index.b0b833de.js";import{e as V}from"../chunks/each.e59479a4.js";function W(r,l,o){const e=r.slice();return e[5]=l[o],e}function x(r,l,o){const e=r.slice();return e[8]=l[o],e[10]=o,e}function B(r,l,o){const e=r.slice();return e[11]=l[o],e[10]=o,e}function Y(r){let l,o=r[0].msg+"",e;return{c(){l=b("div"),e=D(o),this.h()},l(n){l=q(n,"DIV",{class:!0});var i=z(l);e=I(i,o),i.forEach(p),this.h()},h(){m(l,"class","orr svelte-1qshk19")},m(n,i){g(n,l,i),y(l,e)},p(n,i){i&1&&o!==(o=n[0].msg+"")&&N(e,o)},d(n){n&&p(l)}}}function Z(r){let l,o,e,n,i,f="Órarend",d=V(["Hétfő","Kedd","Szerda","Csütörtök","Péntek"]),a=[];for(let s=0;s<5;s+=1)a[s]=F(B(r,d,s));let k=V(Array(41).fill(0)),c=[];for(let s=0;s<k.length;s+=1)c[s]=G(x(r,k,s));let u=V(r[0].orak),h=[];for(let s=0;s<u.length;s+=1)h[s]=J(W(r,u,s));return{c(){for(let s=0;s<5;s+=1)a[s].c();l=w();for(let s=0;s<c.length;s+=1)c[s].c();o=w();for(let s=0;s<h.length;s+=1)h[s].c();e=w(),n=b("div"),i=b("span"),i.textContent=f,this.h()},l(s){for(let t=0;t<5;t+=1)a[t].l(s);l=P(s);for(let t=0;t<c.length;t+=1)c[t].l(s);o=P(s);for(let t=0;t<h.length;t+=1)h[t].l(s);e=P(s),n=q(s,"DIV",{class:!0,style:!0});var _=z(n);i=q(_,"SPAN",{class:!0,"data-svelte-h":!0}),X(i)!=="svelte-uuzvef"&&(i.textContent=f),_.forEach(p),this.h()},h(){m(i,"class","svelte-1qshk19"),m(n,"class","orr svelte-1qshk19"),C(n,"left",r[0].left+107+"px"),C(n,"top",r[0].top-50+"px")},m(s,_){for(let t=0;t<5;t+=1)a[t]&&a[t].m(s,_);g(s,l,_);for(let t=0;t<c.length;t+=1)c[t]&&c[t].m(s,_);g(s,o,_);for(let t=0;t<h.length;t+=1)h[t]&&h[t].m(s,_);g(s,e,_),g(s,n,_),y(n,i)},p(s,_){if(_&4){d=V(["Hétfő","Kedd","Szerda","Csütörtök","Péntek"]);let t;for(t=0;t<5;t+=1){const v=B(s,d,t);a[t]?a[t].p(v,_):(a[t]=F(v),a[t].c(),a[t].m(l.parentNode,l))}for(;t<5;t+=1)a[t].d(1)}if(_&24){k=V(Array(41).fill(0));let t;for(t=0;t<k.length;t+=1){const v=x(s,k,t);c[t]?c[t].p(v,_):(c[t]=G(v),c[t].c(),c[t].m(o.parentNode,o))}for(;t<c.length;t+=1)c[t].d(1);c.length=k.length}if(_&3){u=V(s[0].orak);let t;for(t=0;t<u.length;t+=1){const v=W(s,u,t);h[t]?h[t].p(v,_):(h[t]=J(v),h[t].c(),h[t].m(e.parentNode,e))}for(;t<h.length;t+=1)h[t].d(1);h.length=u.length}_&1&&C(n,"left",s[0].left+107+"px"),_&1&&C(n,"top",s[0].top-50+"px")},d(s){s&&(p(l),p(o),p(e),p(n)),H(a,s),H(c,s),H(h,s)}}}function F(r){let l,o,e;return{c(){l=b("div"),o=b("div"),e=D(r[11]),this.h()},l(n){l=q(n,"DIV",{class:!0,style:!0});var i=z(l);o=q(i,"DIV",{class:!0});var f=z(o);e=I(f,r[11]),f.forEach(p),i.forEach(p),this.h()},h(){m(o,"class","svelte-1qshk19"),m(l,"class","nn svelte-1qshk19"),m(l,"style",r[2](r[11],r[10]))},m(n,i){g(n,l,i),y(l,o),y(o,e)},p:A,d(n){n&&p(l)}}}function G(r){let l,o,e,n=L(r[10])+"",i,f,d,a=L(r[10])+"",k;return{c(){l=b("div"),o=w(),e=b("div"),i=D(n),f=w(),d=b("div"),k=D(a),this.h()},l(c){l=q(c,"DIV",{style:!0,class:!0}),z(l).forEach(p),o=P(c),e=q(c,"DIV",{style:!0,class:!0});var u=z(e);i=I(u,n),u.forEach(p),f=P(c),d=q(c,"DIV",{style:!0,class:!0});var h=z(d);k=I(h,a),h.forEach(p),this.h()},h(){m(l,"style",r[4](r[10])),m(l,"class","hr svelte-1qshk19"),m(e,"style",r[3](r[10],107)),m(e,"class","ip svelte-1qshk19"),m(d,"style",r[3](r[10],638)),m(d,"class","ip svelte-1qshk19")},m(c,u){g(c,l,u),g(c,o,u),g(c,e,u),y(e,i),g(c,f,u),g(c,d,u),y(d,k)},p:A,d(c){c&&(p(l),p(o),p(e),p(f),p(d))}}}function J(r){let l,o,e=r[5].text+"",n,i,f,d,a=r[5].csop+"",k,c,u,h=r[5].helysz+"",s,_,t;return{c(){l=b("div"),o=b("div"),n=D(e),i=w(),f=b("div"),d=b("span"),k=D(a),c=D(" - "),u=b("span"),s=D(h),this.h()},l(v){l=q(v,"DIV",{class:!0,style:!0});var E=z(l);o=q(E,"DIV",{class:!0});var T=z(o);n=I(T,e),T.forEach(p),i=P(E),f=q(E,"DIV",{class:!0});var S=z(f);d=q(S,"SPAN",{class:!0});var j=z(d);k=I(j,a),j.forEach(p),c=I(S," - "),u=q(S,"SPAN",{class:!0});var K=z(u);s=I(K,h),K.forEach(p),S.forEach(p),E.forEach(p),this.h()},h(){m(o,"class","text svelte-1qshk19"),m(d,"class","csop svelte-1qshk19"),m(u,"class","hsz svelte-1qshk19"),m(f,"class","csh svelte-1qshk19"),m(l,"class",_="cont "+r[5].type+" svelte-1qshk19"),m(l,"style",t=r[1](r[5]))},m(v,E){g(v,l,E),y(l,o),y(o,n),y(l,i),y(l,f),y(f,d),y(d,k),y(f,c),y(f,u),y(u,s)},p(v,E){E&1&&e!==(e=v[5].text+"")&&N(n,e),E&1&&a!==(a=v[5].csop+"")&&N(k,a),E&1&&h!==(h=v[5].helysz+"")&&N(s,h),E&1&&_!==(_="cont "+v[5].type+" svelte-1qshk19")&&m(l,"class",_),E&1&&t!==(t=v[1](v[5]))&&m(l,"style",t)},d(v){v&&p(l)}}}function $(r){let l;function o(i,f){return i[0].mounted==!0?Z:Y}let e=o(r),n=e(r);return{c(){n.c(),l=M()},l(i){n.l(i),l=M()},m(i,f){n.m(i,f),g(i,l,f)},p(i,[f]){e===(e=o(i))&&n?n.p(i,f):(n.d(1),n=e(i),n&&(n.c(),n.m(l.parentNode,l)))},i:A,o:A,d(i){i&&p(l),n.d(i)}}}function L(r){let l=30+r*15,o=7+Math.trunc(l/60);return l=l%60,`${o}:${l<10?"0"+l:l}`}function ee(r,l,o){var e={mounted:!1,top:70,left:0,orak:[],msg:"Pozícionálás..."};return Q(()=>{onresize=()=>{(e.mounted||e.msg=="Túl kicsi ablakméret...")&&setTimeout(()=>{o(0,e.left=(window.innerWidth-772)/2,e),o(0,e.top=(window.innerHeight-632)/2,e),e.left>-100&&e.top>20?(o(0,e.mounted=!0,e),o(0,e.msg="Pozícionálás...",e)):o(0,e.msg="Túl kicsi ablakméret...",e)},1e3),o(0,e.mounted=!1,e)},fetch("input.json").then(a=>a.json()).then(a=>{o(0,e.orak=a,e),o(0,e.left=(window.innerWidth-772)/2,e),o(0,e.top=(window.innerHeight-632)/2,e),e.left>-100&&e.top>20?o(0,e.mounted=!0,e):o(0,e.msg="Túl kicsi ablakméret...",e)})}),[e,a=>`
  top: ${e.top+20+(a.ok[0]-7)*60+a.ok[1]}px; 
  left:${e.left+140+{H:0,K:1,Sz:2,Cs:3,P:4}[a.n]*100}px; width: 90px; 
  height: ${a.it}px`,(a,k)=>`left:${e.left+137+k*100}px; top: ${e.top+17}px`,(a,k)=>`top: ${e.top+45+a*15}px; left: ${e.left+k}px;`,a=>`top: ${e.top+50+a*15}px; left: ${e.left+107}px;`]}class oe extends R{constructor(l){super(),U(this,l,ee,$,O,{})}}export{oe as component};
