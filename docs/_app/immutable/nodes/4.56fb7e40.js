import{s as ie,n as O,o as oe}from"../chunks/scheduler.8b5db029.js";import{S as ne,i as fe,e as Q,a as H,f as c,g as z,m as S,h as D,j as P,n as V,k as u,x as _,o as B,s as W,c as q,y as ae,l as L,z as R}from"../chunks/index.a074f25c.js";import{e as J}from"../chunks/each.e59479a4.js";function X(o,t,l){const e=o.slice();return e[6]=t[l],e}function Y(o,t,l){const e=o.slice();return e[9]=t[l],e[11]=l,e}function Z(o,t,l){const e=o.slice();return e[12]=t[l],e[11]=l,e}function re(o){let t,l=o[0].msg+"",e;return{c(){t=z("div"),e=S(l),this.h()},l(n){t=D(n,"DIV",{class:!0});var f=P(t);e=V(f,l),f.forEach(c),this.h()},h(){u(t,"class","orr svelte-17f5t3n")},m(n,f){H(n,t,f),_(t,e)},p(n,f){f&1&&l!==(l=n[0].msg+"")&&B(e,l)},d(n){n&&c(t)}}}function ce(o){let t,l,e,n,f,r,m="Órarend:",b,p=["Vasárnap","Hétfő","Kedd","Szerda","Csütörtök","Péntek","Szombat"][o[0].dow]+"",a,d,y,w=o[0].time[0]+"",I,T,K=o[0].time[1]+"",v,E,k,U=J(["Hétfő","Kedd","Szerda","Csütörtök","Péntek"]),C=[];for(let s=0;s<5;s+=1)C[s]=$(Z(o,U,s));let M=J(Array(42).fill(0)),g=[];for(let s=0;s<M.length;s+=1)g[s]=x(Y(o,M,s));let G=J(o[0].orak),N=[];for(let s=0;s<G.length;s+=1)N[s]=te(X(o,G,s));let A=o[0].dow>0&&o[0].dow<6&&le(o);return{c(){for(let s=0;s<5;s+=1)C[s].c();t=W();for(let s=0;s<g.length;s+=1)g[s].c();l=W();for(let s=0;s<N.length;s+=1)N[s].c();e=W(),n=z("div"),f=z("div"),r=z("b"),r.textContent=m,b=W(),a=S(p),d=S(", "),y=z("u"),I=S(w),T=S(":"),v=S(K),E=W(),A&&A.c(),k=Q(),this.h()},l(s){for(let F=0;F<5;F+=1)C[F].l(s);t=q(s);for(let F=0;F<g.length;F+=1)g[F].l(s);l=q(s);for(let F=0;F<N.length;F+=1)N[F].l(s);e=q(s),n=D(s,"DIV",{class:!0,style:!0});var h=P(n);f=D(h,"DIV",{class:!0});var i=P(f);r=D(i,"B",{class:!0,"data-svelte-h":!0}),ae(r)!=="svelte-zehpx5"&&(r.textContent=m),b=q(i),a=V(i,p),d=V(i,", "),y=D(i,"U",{class:!0});var j=P(y);I=V(j,w),T=V(j,":"),v=V(j,K),j.forEach(c),i.forEach(c),h.forEach(c),E=q(s),A&&A.l(s),k=Q(),this.h()},h(){u(r,"class","svelte-17f5t3n"),u(y,"class","svelte-17f5t3n"),u(f,"class","ora svelte-17f5t3n"),u(n,"class","orr svelte-17f5t3n"),L(n,"left",o[0].left+107+"px"),L(n,"top",o[0].top-50+"px")},m(s,h){for(let i=0;i<5;i+=1)C[i]&&C[i].m(s,h);H(s,t,h);for(let i=0;i<g.length;i+=1)g[i]&&g[i].m(s,h);H(s,l,h);for(let i=0;i<N.length;i+=1)N[i]&&N[i].m(s,h);H(s,e,h),H(s,n,h),_(n,f),_(f,r),_(f,b),_(f,a),_(f,d),_(f,y),_(y,I),_(y,T),_(y,v),H(s,E,h),A&&A.m(s,h),H(s,k,h)},p(s,h){if(h&8){U=J(["Hétfő","Kedd","Szerda","Csütörtök","Péntek"]);let i;for(i=0;i<5;i+=1){const j=Z(s,U,i);C[i]?C[i].p(j,h):(C[i]=$(j),C[i].c(),C[i].m(t.parentNode,t))}for(;i<5;i+=1)C[i].d(1)}if(h&48){M=J(Array(42).fill(0));let i;for(i=0;i<M.length;i+=1){const j=Y(s,M,i);g[i]?g[i].p(j,h):(g[i]=x(j),g[i].c(),g[i].m(l.parentNode,l))}for(;i<g.length;i+=1)g[i].d(1);g.length=M.length}if(h&5){G=J(s[0].orak);let i;for(i=0;i<G.length;i+=1){const j=X(s,G,i);N[i]?N[i].p(j,h):(N[i]=te(j),N[i].c(),N[i].m(e.parentNode,e))}for(;i<N.length;i+=1)N[i].d(1);N.length=G.length}h&1&&p!==(p=["Vasárnap","Hétfő","Kedd","Szerda","Csütörtök","Péntek","Szombat"][s[0].dow]+"")&&B(a,p),h&1&&w!==(w=s[0].time[0]+"")&&B(I,w),h&1&&K!==(K=s[0].time[1]+"")&&B(v,K),h&1&&L(n,"left",s[0].left+107+"px"),h&1&&L(n,"top",s[0].top-50+"px"),s[0].dow>0&&s[0].dow<6?A?A.p(s,h):(A=le(s),A.c(),A.m(k.parentNode,k)):A&&(A.d(1),A=null)},d(s){s&&(c(t),c(l),c(e),c(n),c(E),c(k)),R(C,s),R(g,s),R(N,s),A&&A.d(s)}}}function $(o){let t,l,e;return{c(){t=z("div"),l=z("div"),e=S(o[12]),this.h()},l(n){t=D(n,"DIV",{class:!0,style:!0});var f=P(t);l=D(f,"DIV",{class:!0});var r=P(l);e=V(r,o[12]),r.forEach(c),f.forEach(c),this.h()},h(){u(l,"class","svelte-17f5t3n"),u(t,"class","nn svelte-17f5t3n"),u(t,"style",o[3](o[12],o[11]))},m(n,f){H(n,t,f),_(t,l),_(l,e)},p:O,d(n){n&&c(t)}}}function x(o){let t,l,e,n=se(o[11])+"",f,r,m,b=se(o[11])+"",p;return{c(){t=z("div"),l=W(),e=z("div"),f=S(n),r=W(),m=z("div"),p=S(b),this.h()},l(a){t=D(a,"DIV",{style:!0,class:!0}),P(t).forEach(c),l=q(a),e=D(a,"DIV",{style:!0,class:!0});var d=P(e);f=V(d,n),d.forEach(c),r=q(a),m=D(a,"DIV",{style:!0,class:!0});var y=P(m);p=V(y,b),y.forEach(c),this.h()},h(){u(t,"style",o[5](o[11])),u(t,"class","hr svelte-17f5t3n"),u(e,"style",o[4](o[11],107)),u(e,"class","ip svelte-17f5t3n"),u(m,"style",o[4](o[11],638)),u(m,"class","ip svelte-17f5t3n")},m(a,d){H(a,t,d),H(a,l,d),H(a,e,d),_(e,f),H(a,r,d),H(a,m,d),_(m,p)},p:O,d(a){a&&(c(t),c(l),c(e),c(r),c(m))}}}function ee(o){let t,l,e,n=(o[6].it/45).toFixed(0)+"",f,r,m,b,p=o[6].it%45?`+ ${o[6].it%45}`:"",a,d,y;return{c(){t=z("div"),l=S("< "),e=z("i"),f=S(n),r=z("span"),m=S("x45 "),b=z("span"),a=S(p),d=S(" perc"),y=S(" >"),this.h()},l(w){t=D(w,"DIV",{class:!0});var I=P(t);l=V(I,"< "),e=D(I,"I",{class:!0});var T=P(e);f=V(T,n),T.forEach(c),r=D(I,"SPAN",{class:!0});var K=P(r);m=V(K,"x45 "),b=D(K,"SPAN",{id:!0,class:!0});var v=P(b);a=V(v,p),v.forEach(c),d=V(K," perc"),K.forEach(c),y=V(I," >"),I.forEach(c),this.h()},h(){u(e,"class","svelte-17f5t3n"),u(b,"id","i"),u(b,"class","svelte-17f5t3n"),u(r,"class","svelte-17f5t3n"),u(t,"class","hsz svelte-17f5t3n")},m(w,I){H(w,t,I),_(t,l),_(t,e),_(e,f),_(t,r),_(r,m),_(r,b),_(b,a),_(r,d),_(t,y)},p(w,I){I&1&&n!==(n=(w[6].it/45).toFixed(0)+"")&&B(f,n),I&1&&p!==(p=w[6].it%45?`+ ${w[6].it%45}`:"")&&B(a,p)},d(w){w&&c(t)}}}function te(o){let t,l,e=o[6].text+"",n,f,r,m,b=o[6].csop+"",p,a,d,y=o[6].helysz+"",w,I,T,K,v=o[6].it>45&&ee(o);return{c(){t=z("div"),l=z("div"),n=S(e),f=W(),r=z("div"),m=z("span"),p=S(b),a=S(` -
        `),d=z("span"),w=S(y),I=W(),v&&v.c(),this.h()},l(E){t=D(E,"DIV",{class:!0,style:!0});var k=P(t);l=D(k,"DIV",{class:!0});var U=P(l);n=V(U,e),U.forEach(c),f=q(k),r=D(k,"DIV",{class:!0});var C=P(r);m=D(C,"SPAN",{class:!0});var M=P(m);p=V(M,b),M.forEach(c),a=V(C,` -
        `),d=D(C,"SPAN",{class:!0});var g=P(d);w=V(g,y),g.forEach(c),C.forEach(c),I=q(k),v&&v.l(k),k.forEach(c),this.h()},h(){u(l,"class","text svelte-17f5t3n"),u(m,"class","csop svelte-17f5t3n"),u(d,"class","hsz svelte-17f5t3n"),u(r,"class","csh svelte-17f5t3n"),u(t,"class",T="cont "+o[6].type+" svelte-17f5t3n"),u(t,"style",K=o[2](o[6]))},m(E,k){H(E,t,k),_(t,l),_(l,n),_(t,f),_(t,r),_(r,m),_(m,p),_(r,a),_(r,d),_(d,w),_(t,I),v&&v.m(t,null)},p(E,k){k&1&&e!==(e=E[6].text+"")&&B(n,e),k&1&&b!==(b=E[6].csop+"")&&B(p,b),k&1&&y!==(y=E[6].helysz+"")&&B(w,y),E[6].it>45?v?v.p(E,k):(v=ee(E),v.c(),v.m(t,null)):v&&(v.d(1),v=null),k&1&&T!==(T="cont "+E[6].type+" svelte-17f5t3n")&&u(t,"class",T),k&1&&K!==(K=E[2](E[6]))&&u(t,"style",K)},d(E){E&&c(t),v&&v.d()}}}function le(o){let t,l;return{c(){t=z("div"),this.h()},l(e){t=D(e,"DIV",{class:!0,style:!0}),P(t).forEach(c),this.h()},h(){u(t,"class","ips svelte-17f5t3n"),u(t,"style",l=o[1](o[0].dow,o[0].time))},m(e,n){H(e,t,n)},p(e,n){n&1&&l!==(l=e[1](e[0].dow,e[0].time))&&u(t,"style",l)},d(e){e&&c(t)}}}function pe(o){let t;function l(f,r){return f[0].mounted==!0?ce:re}let e=l(o),n=e(o);return{c(){n.c(),t=Q()},l(f){n.l(f),t=Q()},m(f,r){n.m(f,r),H(f,t,r)},p(f,[r]){e===(e=l(f))&&n?n.p(f,r):(n.d(1),n=e(f),n&&(n.c(),n.m(t.parentNode,t)))},i:O,o:O,d(f){f&&c(t),n.d(f)}}}function se(o){let t=30+o*15,l=7+Math.trunc(t/60);return t=t%60,`${l}:${t<10?"0"+t:t}`}function _e(o,t,l){var e={mounted:!1,top:70,left:0,orak:[],msg:"Pozícionálás...",dow:"Sz",time:[8,0]};return oe(()=>{onresize=()=>{(e.mounted||e.msg=="Túl kicsi ablakméret...")&&setTimeout(()=>{l(0,e.left=(window.innerWidth-772)/2,e),l(0,e.top=(window.innerHeight-712)/2,e),e.left>-100&&e.top>20?(l(0,e.mounted=!0,e),l(0,e.msg="Pozícionálás...",e)):l(0,e.msg="Túl kicsi ablakméret...",e)},1e3),l(0,e.mounted=!1,e)},fetch("input.json").then(a=>a.json()).then(a=>{l(0,e.orak=a,e),l(0,e.left=(window.innerWidth-772)/2,e),l(0,e.top=(window.innerHeight-712)/2,e),e.left>-100&&e.top>20||(l(0,e.left=-100,e),l(0,e.top=-10,e)),l(0,e.mounted=!0,e)});function p(){var a=new Date,d=a.toString().split(" ");l(0,e.dow=a.getDay(),e),l(0,e.time=d[4].split(":"),e)}setInterval(p,6e4),p()}),[e,(p,a)=>a[0]*60+a[1]*1>7*60+30&&a[0]*60+a[1]*1<17*60+30?`
    top: ${e.top+20+(a[0]-7)*60+a[1]*1}px;
    left: ${e.left+140+100*(p-1)}px;
  `:"display: none;",p=>`
  top: ${e.top+20+(p.ok[0]-7)*60+p.ok[1]}px; 
  left:${e.left+140+{H:0,K:1,Sz:2,Cs:3,P:4}[p.n]*100}px; width: 90px; 
  height: ${p.it}px`,(p,a)=>`left:${e.left+137+a*100}px; top: ${e.top+17}px`,(p,a)=>`top: ${e.top+45+p*15}px; left: ${e.left+a}px;`,p=>`top: ${e.top+50+p*15}px; left: ${e.left+107}px;`]}class ve extends ne{constructor(t){super(),fe(this,t,_e,pe,ie,{})}}export{ve as component};
