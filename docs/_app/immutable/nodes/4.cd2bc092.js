import{s as ie,n as O,o as ne}from"../chunks/scheduler.8b5db029.js";import{S as oe,i as ae,e as Q,a as N,f as c,g as w,m as I,h as z,j as V,n as S,k as u,x as _,o as B,s as W,c as q,y as re,l as L,z as R}from"../chunks/index.a074f25c.js";import{e as J}from"../chunks/each.e59479a4.js";function X(n,t,l){const e=n.slice();return e[6]=t[l],e}function Y(n,t,l){const e=n.slice();return e[9]=t[l],e[11]=l,e}function Z(n,t,l){const e=n.slice();return e[12]=t[l],e[11]=l,e}function fe(n){let t,l=n[0].msg+"",e;return{c(){t=w("div"),e=I(l),this.h()},l(o){t=z(o,"DIV",{class:!0});var a=V(t);e=S(a,l),a.forEach(c),this.h()},h(){u(t,"class","orr svelte-1n4bjm2")},m(o,a){N(o,t,a),_(t,e)},p(o,a){a&1&&l!==(l=o[0].msg+"")&&B(e,l)},d(o){o&&c(t)}}}function ce(n){let t,l,e,o,a,f,m="Órarend:",k,p=["Vasárnap","Hétfő","Kedd","Szerda","Csütörtök","Péntek","Szombat"][n[0].dow]+"",r,d,j,y=n[0].time[0]+"",D,T,A=n[0].time[1]+"",v,E,b,U=J(["Hétfő","Kedd","Szerda","Csütörtök","Péntek"]),P=[];for(let s=0;s<5;s+=1)P[s]=$(Z(n,U,s));let M=J(Array(41).fill(0)),g=[];for(let s=0;s<M.length;s+=1)g[s]=x(Y(n,M,s));let G=J(n[0].orak),C=[];for(let s=0;s<G.length;s+=1)C[s]=te(X(n,G,s));let H=n[0].dow<6&&le(n);return{c(){for(let s=0;s<5;s+=1)P[s].c();t=W();for(let s=0;s<g.length;s+=1)g[s].c();l=W();for(let s=0;s<C.length;s+=1)C[s].c();e=W(),o=w("div"),a=w("div"),f=w("b"),f.textContent=m,k=W(),r=I(p),d=I(", "),j=w("u"),D=I(y),T=I(":"),v=I(A),E=W(),H&&H.c(),b=Q(),this.h()},l(s){for(let F=0;F<5;F+=1)P[F].l(s);t=q(s);for(let F=0;F<g.length;F+=1)g[F].l(s);l=q(s);for(let F=0;F<C.length;F+=1)C[F].l(s);e=q(s),o=z(s,"DIV",{class:!0,style:!0});var h=V(o);a=z(h,"DIV",{class:!0});var i=V(a);f=z(i,"B",{class:!0,"data-svelte-h":!0}),re(f)!=="svelte-zehpx5"&&(f.textContent=m),k=q(i),r=S(i,p),d=S(i,", "),j=z(i,"U",{class:!0});var K=V(j);D=S(K,y),T=S(K,":"),v=S(K,A),K.forEach(c),i.forEach(c),h.forEach(c),E=q(s),H&&H.l(s),b=Q(),this.h()},h(){u(f,"class","svelte-1n4bjm2"),u(j,"class","svelte-1n4bjm2"),u(a,"class","ora svelte-1n4bjm2"),u(o,"class","orr svelte-1n4bjm2"),L(o,"left",n[0].left+107+"px"),L(o,"top",n[0].top-50+"px")},m(s,h){for(let i=0;i<5;i+=1)P[i]&&P[i].m(s,h);N(s,t,h);for(let i=0;i<g.length;i+=1)g[i]&&g[i].m(s,h);N(s,l,h);for(let i=0;i<C.length;i+=1)C[i]&&C[i].m(s,h);N(s,e,h),N(s,o,h),_(o,a),_(a,f),_(a,k),_(a,r),_(a,d),_(a,j),_(j,D),_(j,T),_(j,v),N(s,E,h),H&&H.m(s,h),N(s,b,h)},p(s,h){if(h&8){U=J(["Hétfő","Kedd","Szerda","Csütörtök","Péntek"]);let i;for(i=0;i<5;i+=1){const K=Z(s,U,i);P[i]?P[i].p(K,h):(P[i]=$(K),P[i].c(),P[i].m(t.parentNode,t))}for(;i<5;i+=1)P[i].d(1)}if(h&48){M=J(Array(41).fill(0));let i;for(i=0;i<M.length;i+=1){const K=Y(s,M,i);g[i]?g[i].p(K,h):(g[i]=x(K),g[i].c(),g[i].m(l.parentNode,l))}for(;i<g.length;i+=1)g[i].d(1);g.length=M.length}if(h&5){G=J(s[0].orak);let i;for(i=0;i<G.length;i+=1){const K=X(s,G,i);C[i]?C[i].p(K,h):(C[i]=te(K),C[i].c(),C[i].m(e.parentNode,e))}for(;i<C.length;i+=1)C[i].d(1);C.length=G.length}h&1&&p!==(p=["Vasárnap","Hétfő","Kedd","Szerda","Csütörtök","Péntek","Szombat"][s[0].dow]+"")&&B(r,p),h&1&&y!==(y=s[0].time[0]+"")&&B(D,y),h&1&&A!==(A=s[0].time[1]+"")&&B(v,A),h&1&&L(o,"left",s[0].left+107+"px"),h&1&&L(o,"top",s[0].top-50+"px"),s[0].dow<6?H?H.p(s,h):(H=le(s),H.c(),H.m(b.parentNode,b)):H&&(H.d(1),H=null)},d(s){s&&(c(t),c(l),c(e),c(o),c(E),c(b)),R(P,s),R(g,s),R(C,s),H&&H.d(s)}}}function $(n){let t,l,e;return{c(){t=w("div"),l=w("div"),e=I(n[12]),this.h()},l(o){t=z(o,"DIV",{class:!0,style:!0});var a=V(t);l=z(a,"DIV",{class:!0});var f=V(l);e=S(f,n[12]),f.forEach(c),a.forEach(c),this.h()},h(){u(l,"class","svelte-1n4bjm2"),u(t,"class","nn svelte-1n4bjm2"),u(t,"style",n[3](n[12],n[11]))},m(o,a){N(o,t,a),_(t,l),_(l,e)},p:O,d(o){o&&c(t)}}}function x(n){let t,l,e,o=se(n[11])+"",a,f,m,k=se(n[11])+"",p;return{c(){t=w("div"),l=W(),e=w("div"),a=I(o),f=W(),m=w("div"),p=I(k),this.h()},l(r){t=z(r,"DIV",{style:!0,class:!0}),V(t).forEach(c),l=q(r),e=z(r,"DIV",{style:!0,class:!0});var d=V(e);a=S(d,o),d.forEach(c),f=q(r),m=z(r,"DIV",{style:!0,class:!0});var j=V(m);p=S(j,k),j.forEach(c),this.h()},h(){u(t,"style",n[5](n[11])),u(t,"class","hr svelte-1n4bjm2"),u(e,"style",n[4](n[11],107)),u(e,"class","ip svelte-1n4bjm2"),u(m,"style",n[4](n[11],638)),u(m,"class","ip svelte-1n4bjm2")},m(r,d){N(r,t,d),N(r,l,d),N(r,e,d),_(e,a),N(r,f,d),N(r,m,d),_(m,p)},p:O,d(r){r&&(c(t),c(l),c(e),c(f),c(m))}}}function ee(n){let t,l,e,o=(n[6].it/45).toFixed(0)+"",a,f,m,k,p=n[6].it%45?`+ ${n[6].it%45}`:"",r,d,j;return{c(){t=w("div"),l=I("< "),e=w("i"),a=I(o),f=w("span"),m=I("x45 "),k=w("span"),r=I(p),d=I(" perc"),j=I(" >"),this.h()},l(y){t=z(y,"DIV",{class:!0});var D=V(t);l=S(D,"< "),e=z(D,"I",{class:!0});var T=V(e);a=S(T,o),T.forEach(c),f=z(D,"SPAN",{class:!0});var A=V(f);m=S(A,"x45 "),k=z(A,"SPAN",{id:!0,class:!0});var v=V(k);r=S(v,p),v.forEach(c),d=S(A," perc"),A.forEach(c),j=S(D," >"),D.forEach(c),this.h()},h(){u(e,"class","svelte-1n4bjm2"),u(k,"id","i"),u(k,"class","svelte-1n4bjm2"),u(f,"class","svelte-1n4bjm2"),u(t,"class","hsz svelte-1n4bjm2")},m(y,D){N(y,t,D),_(t,l),_(t,e),_(e,a),_(t,f),_(f,m),_(f,k),_(k,r),_(f,d),_(t,j)},p(y,D){D&1&&o!==(o=(y[6].it/45).toFixed(0)+"")&&B(a,o),D&1&&p!==(p=y[6].it%45?`+ ${y[6].it%45}`:"")&&B(r,p)},d(y){y&&c(t)}}}function te(n){let t,l,e=n[6].text+"",o,a,f,m,k=n[6].csop+"",p,r,d,j=n[6].helysz+"",y,D,T,A,v=n[6].it>45&&ee(n);return{c(){t=w("div"),l=w("div"),o=I(e),a=W(),f=w("div"),m=w("span"),p=I(k),r=I(` -
        `),d=w("span"),y=I(j),D=W(),v&&v.c(),this.h()},l(E){t=z(E,"DIV",{class:!0,style:!0});var b=V(t);l=z(b,"DIV",{class:!0});var U=V(l);o=S(U,e),U.forEach(c),a=q(b),f=z(b,"DIV",{class:!0});var P=V(f);m=z(P,"SPAN",{class:!0});var M=V(m);p=S(M,k),M.forEach(c),r=S(P,` -
        `),d=z(P,"SPAN",{class:!0});var g=V(d);y=S(g,j),g.forEach(c),P.forEach(c),D=q(b),v&&v.l(b),b.forEach(c),this.h()},h(){u(l,"class","text svelte-1n4bjm2"),u(m,"class","csop svelte-1n4bjm2"),u(d,"class","hsz svelte-1n4bjm2"),u(f,"class","csh svelte-1n4bjm2"),u(t,"class",T="cont "+n[6].type+" svelte-1n4bjm2"),u(t,"style",A=n[2](n[6]))},m(E,b){N(E,t,b),_(t,l),_(l,o),_(t,a),_(t,f),_(f,m),_(m,p),_(f,r),_(f,d),_(d,y),_(t,D),v&&v.m(t,null)},p(E,b){b&1&&e!==(e=E[6].text+"")&&B(o,e),b&1&&k!==(k=E[6].csop+"")&&B(p,k),b&1&&j!==(j=E[6].helysz+"")&&B(y,j),E[6].it>45?v?v.p(E,b):(v=ee(E),v.c(),v.m(t,null)):v&&(v.d(1),v=null),b&1&&T!==(T="cont "+E[6].type+" svelte-1n4bjm2")&&u(t,"class",T),b&1&&A!==(A=E[2](E[6]))&&u(t,"style",A)},d(E){E&&c(t),v&&v.d()}}}function le(n){let t,l;return{c(){t=w("div"),this.h()},l(e){t=z(e,"DIV",{class:!0,style:!0}),V(t).forEach(c),this.h()},h(){u(t,"class","ips svelte-1n4bjm2"),u(t,"style",l=n[1](n[0].dow,n[0].time))},m(e,o){N(e,t,o)},p(e,o){o&1&&l!==(l=e[1](e[0].dow,e[0].time))&&u(t,"style",l)},d(e){e&&c(t)}}}function pe(n){let t;function l(a,f){return a[0].mounted==!0?ce:fe}let e=l(n),o=e(n);return{c(){o.c(),t=Q()},l(a){o.l(a),t=Q()},m(a,f){o.m(a,f),N(a,t,f)},p(a,[f]){e===(e=l(a))&&o?o.p(a,f):(o.d(1),o=e(a),o&&(o.c(),o.m(t.parentNode,t)))},i:O,o:O,d(a){a&&c(t),o.d(a)}}}function se(n){let t=30+n*15,l=7+Math.trunc(t/60);return t=t%60,`${l}:${t<10?"0"+t:t}`}function _e(n,t,l){var e={mounted:!1,top:70,left:0,orak:[],msg:"Pozícionálás...",dow:"Sz",time:[8,0]};return ne(()=>{onresize=()=>{(e.mounted||e.msg=="Túl kicsi ablakméret...")&&setTimeout(()=>{l(0,e.left=(window.innerWidth-772)/2,e),l(0,e.top=(window.innerHeight-632)/2,e),e.left>-100&&e.top>20?(l(0,e.mounted=!0,e),l(0,e.msg="Pozícionálás...",e)):l(0,e.msg="Túl kicsi ablakméret...",e)},1e3),l(0,e.mounted=!1,e)},fetch("input.json").then(r=>r.json()).then(r=>{l(0,e.orak=r,e),l(0,e.left=(window.innerWidth-772)/2,e),l(0,e.top=(window.innerHeight-632)/2,e),e.left>-100&&e.top>20||(l(0,e.left=-100,e),l(0,e.top=-10,e)),l(0,e.mounted=!0,e)});function p(){var r=new Date,d=r.toString().split(" ");l(0,e.dow=r.getDay(),e),l(0,e.time=d[4].split(":"),e)}setInterval(p,6e4),p()}),[e,(p,r)=>r[0]*60+r[1]*1>7*60+30&&r[0]*60+r[1]*1<17*60+30?`
    top: ${e.top+20+(r[0]-7)*60+r[1]*1}px;
    left: ${e.left+140+100*(p-1)}px;
  `:"display: none;",p=>`
  top: ${e.top+20+(p.ok[0]-7)*60+p.ok[1]}px; 
  left:${e.left+140+{H:0,K:1,Sz:2,Cs:3,P:4}[p.n]*100}px; width: 90px; 
  height: ${p.it}px`,(p,r)=>`left:${e.left+137+r*100}px; top: ${e.top+17}px`,(p,r)=>`top: ${e.top+45+p*15}px; left: ${e.left+r}px;`,p=>`top: ${e.top+50+p*15}px; left: ${e.left+107}px;`]}class ve extends oe{constructor(t){super(),ae(this,t,_e,pe,ie,{})}}export{ve as component};
