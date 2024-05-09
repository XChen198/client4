import{ao as m,X as p,ak as K,ap as G,a9 as N,aq as S,ar as Y,ai as H,al as X,W as C,as as z,at as h,a6 as Z,ae as J,au as f,av as Q,aa as O,a4 as D}from"./DV-9RaXj.js";import{A as j,z as ee,r as y,m as v,j as V,h as te,q as re,a7 as ae,Y as oe,K as se}from"./DPhSw6dP.js";var _=m(p,"WeakMap");function ne(e){return e!=null&&K(e.length)&&!G(e)}var ie=Object.prototype;function ue(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||ie;return e===r}function ce(e,t){for(var r=-1,a=Array(e);++r<e;)a[r]=t(r);return a}function le(){return!1}var R=typeof exports=="object"&&exports&&!exports.nodeType&&exports,x=R&&typeof module=="object"&&module&&!module.nodeType&&module,pe=x&&x.exports===R,P=pe?p.Buffer:void 0,fe=P?P.isBuffer:void 0,de=fe||le,ve="[object Arguments]",be="[object Array]",ge="[object Boolean]",ye="[object Date]",he="[object Error]",me="[object Function]",je="[object Map]",Te="[object Number]",_e="[object Object]",Ae="[object RegExp]",we="[object Set]",Ie="[object String]",Se="[object WeakMap]",ze="[object ArrayBuffer]",Oe="[object DataView]",xe="[object Float32Array]",Pe="[object Float64Array]",$e="[object Int8Array]",Be="[object Int16Array]",Fe="[object Int32Array]",Me="[object Uint8Array]",Ue="[object Uint8ClampedArray]",ke="[object Uint16Array]",Ee="[object Uint32Array]",o={};o[xe]=o[Pe]=o[$e]=o[Be]=o[Fe]=o[Me]=o[Ue]=o[ke]=o[Ee]=!0;o[ve]=o[be]=o[ze]=o[ge]=o[Oe]=o[ye]=o[he]=o[me]=o[je]=o[Te]=o[_e]=o[Ae]=o[we]=o[Ie]=o[Se]=!1;function Le(e){return N(e)&&K(e.length)&&!!o[S(e)]}function Ke(e){return function(t){return e(t)}}var W=typeof exports=="object"&&exports&&!exports.nodeType&&exports,d=W&&typeof module=="object"&&module&&!module.nodeType&&module,Ce=d&&d.exports===W,T=Ce&&Y.process,$=function(){try{var e=d&&d.require&&d.require("util").types;return e||T&&T.binding&&T.binding("util")}catch{}}(),B=$&&$.isTypedArray,De=B?Ke(B):Le,Ve=Object.prototype,Re=Ve.hasOwnProperty;function We(e,t){var r=C(e),a=!r&&H(e),s=!r&&!a&&de(e),i=!r&&!a&&!s&&De(e),u=r||a||s||i,c=u?ce(e.length,String):[],g=c.length;for(var n in e)(t||Re.call(e,n))&&!(u&&(n=="length"||s&&(n=="offset"||n=="parent")||i&&(n=="buffer"||n=="byteLength"||n=="byteOffset")||X(n,g)))&&c.push(n);return c}function qe(e,t){return function(r){return e(t(r))}}var Ge=qe(Object.keys,Object),Ne=Object.prototype,Ye=Ne.hasOwnProperty;function He(e){if(!ue(e))return Ge(e);var t=[];for(var r in Object(e))Ye.call(e,r)&&r!="constructor"&&t.push(r);return t}function Xe(e){return ne(e)?We(e):He(e)}function Ze(){this.__data__=new z,this.size=0}function Je(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}function Qe(e){return this.__data__.get(e)}function et(e){return this.__data__.has(e)}var tt=200;function rt(e,t){var r=this.__data__;if(r instanceof z){var a=r.__data__;if(!h||a.length<tt-1)return a.push([e,t]),this.size=++r.size,this;r=this.__data__=new Z(a)}return r.set(e,t),this.size=r.size,this}function b(e){var t=this.__data__=new z(e);this.size=t.size}b.prototype.clear=Ze;b.prototype.delete=Je;b.prototype.get=Qe;b.prototype.has=et;b.prototype.set=rt;function at(e,t){for(var r=-1,a=e==null?0:e.length,s=0,i=[];++r<a;){var u=e[r];t(u,r,e)&&(i[s++]=u)}return i}function ot(){return[]}var st=Object.prototype,nt=st.propertyIsEnumerable,F=Object.getOwnPropertySymbols,it=F?function(e){return e==null?[]:(e=Object(e),at(F(e),function(t){return nt.call(e,t)}))}:ot;function ut(e,t,r){var a=t(e);return C(e)?a:J(a,r(e))}function yt(e){return ut(e,Xe,it)}var A=m(p,"DataView"),w=m(p,"Promise"),I=m(p,"Set"),M="[object Map]",ct="[object Object]",U="[object Promise]",k="[object Set]",E="[object WeakMap]",L="[object DataView]",lt=f(A),pt=f(h),ft=f(w),dt=f(I),vt=f(_),l=S;(A&&l(new A(new ArrayBuffer(1)))!=L||h&&l(new h)!=M||w&&l(w.resolve())!=U||I&&l(new I)!=k||_&&l(new _)!=E)&&(l=function(e){var t=S(e),r=t==ct?e.constructor:void 0,a=r?f(r):"";if(a)switch(a){case lt:return L;case pt:return M;case ft:return U;case dt:return k;case vt:return E}return t});var ht=p.Uint8Array;const q=e=>{const t=ee();return j(()=>{var r,a;return(a=(r=t==null?void 0:t.proxy)==null?void 0:r.$props)==null?void 0:a[e]})},mt=(e,t={})=>{const r=y(void 0),a=t.prop?r:q("size"),s=t.global?r:Q(),i=t.form?{size:void 0}:v(O,void 0),u=t.formItem?{size:void 0}:v(D,void 0);return j(()=>a.value||V(e)||(u==null?void 0:u.size)||(i==null?void 0:i.size)||s.value||"")},jt=e=>{const t=q("disabled"),r=v(O,void 0);return j(()=>t.value||V(e)||(r==null?void 0:r.disabled)||!1)},Tt=()=>{const e=v(O,void 0),t=v(D,void 0);return{form:e,formItem:t}},_t=(e,{formItemContext:t,disableIdGeneration:r,disableIdManagement:a})=>{r||(r=y(!1)),a||(a=y(!1));const s=y();let i;const u=j(()=>{var c;return!!(!(e.label||e.ariaLabel)&&t&&t.inputIds&&((c=t.inputIds)==null?void 0:c.length)<=1)});return te(()=>{i=re([oe(e,"id"),r],([c,g])=>{const n=c??(g?void 0:ae().value);n!==s.value&&(t!=null&&t.removeInputId&&(s.value&&t.removeInputId(s.value),!(a!=null&&a.value)&&!g&&n&&t.addInputId(n)),s.value=n)},{immediate:!0})}),se(()=>{i&&i(),t!=null&&t.removeInputId&&s.value&&t.removeInputId(s.value)}),{isLabeledByFormItem:u,inputId:s}};export{b as S,ht as U,mt as a,Tt as b,_t as c,l as d,De as e,ue as f,yt as g,ne as h,de as i,We as j,Xe as k,it as l,ut as m,$ as n,qe as o,Ke as p,ot as s,jt as u};
