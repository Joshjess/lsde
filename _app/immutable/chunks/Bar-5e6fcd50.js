import{S as f,i as m,s as g,M as i,N as l,O as d,w as p,x as b,y as C,P as B,Q as k,R as y,f as R,t as S,z as j,T as h}from"./index-b6e1c8ab.js";import{C as q,d as w,u as z}from"./Menu-06ae703f.js";import{C as E}from"./Chart-e889d008.js";function F(e){let a,n,s;const c=[{type:"bar"},e[1]];function o(t){e[4](t)}let _={};for(let t=0;t<c.length;t+=1)_=i(_,c[t]);return e[0]!==void 0&&(_.chart=e[0]),a=new E({props:_}),e[3](a),l.push(()=>d(a,"chart",o)),{c(){p(a.$$.fragment)},l(t){b(a.$$.fragment,t)},m(t,r){C(a,t,r),s=!0},p(t,[r]){const u=r&2?B(c,[c[0],k(t[1])]):{};!n&&r&1&&(n=!0,u.chart=t[0],y(()=>n=!1)),a.$set(u)},i(t){s||(R(a.$$.fragment,t),s=!0)},o(t){S(a.$$.fragment,t),s=!1},d(t){e[3](null),j(a,t)}}}function M(e,a,n){q.register(w);let{chart:s=null}=a,c,o;z(()=>o);function _(r){l[r?"unshift":"push"](()=>{o=r,n(2,o)})}function t(r){s=r,n(0,s)}return e.$$set=r=>{n(5,a=i(i({},a),h(r))),"chart"in r&&n(0,s=r.chart)},e.$$.update=()=>{n(1,c=a)},a=h(a),[s,c,o,_,t]}class Q extends f{constructor(a){super(),m(this,a,M,F,g,{chart:0})}}export{Q as B};
