import{aq as Sl,ae as Ve,P as X,r as E,A as g,f as H,m as fe,n as le,X as St,Y as ct,o as O,i as A,w as B,L as ce,a as M,x as y,j as R,y as j,M as Me,a1 as Ct,c as V,b as F,N as Ae,G as de,q as Y,v as q,C as He,J as ye,h as ze,B as Cl,D as N,Q as Re,k as D,a5 as ie,U as W,ar as wt,z as Ke,a7 as Ot,as as Et,t as x,R as Q,E as wl,a4 as Ol,at as Pe,F as El,a6 as ae,au as Tl,O as ft,T as be,av as Il}from"./DPhSw6dP.js";import{i as Rl,u as kl,U as _,C as Tt,E as $l,c as Vl}from"./CcrDRzMA.js";import{u as Ml,b as zl,E as Ll,C as Bl}from"./CQeKHPxD.js";import{Q as Dl,R as ke,S as It,T as Rt,U as te,V as Pl,W as Nl,X as Al,b as pe,K as Wl,_ as ne,t as Fl,Y as We,d as ge,I as pt,u as ee,w as Ue,M as Hl,h as vt,a as Fe,r as Kl,Z as Ul,A as Gl,i as ql,$ as Ql,B as mt,n as Xl,G as Yl,a0 as jl,j as kt}from"./DV-9RaXj.js";import{h as Jl,i as Zl,u as $t}from"./BLuCr3G4.js";import{S as _l,k as xl,a as Vt,b as en,c as tn}from"./D3eqFg9O.js";import{b as Mt,i as $e}from"./DWXxeDNc.js";var ln=/\s/;function nn(e){for(var t=e.length;t--&&ln.test(e.charAt(t)););return t}var sn=/^\s+/;function on(e){return e&&e.slice(0,nn(e)+1).replace(sn,"")}var ht=NaN,an=/^[-+]0x[0-9a-f]+$/i,rn=/^0b[01]+$/i,un=/^0o[0-7]+$/i,dn=parseInt;function bt(e){if(typeof e=="number")return e;if(Dl(e))return ht;if(ke(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=ke(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=on(e);var s=rn.test(e);return s||un.test(e)?dn(e.slice(2),s?2:8):an.test(e)?ht:+e}function cn(e,t,s,r){e.length;for(var o=s+1;o--;)if(t(e[o],o,e))return o;return-1}var fn=1,pn=2;function vn(e,t,s,r){var o=s.length,f=o;if(e==null)return!f;for(e=Object(e);o--;){var l=s[o];if(l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++o<f;){l=s[o];var c=l[0],i=e[c],p=l[1];if(l[2]){if(i===void 0&&!(c in e))return!1}else{var b=new _l,u;if(!(u===void 0?Mt(p,i,fn|pn,r,b):u))return!1}}return!0}function zt(e){return e===e&&!ke(e)}function mn(e){for(var t=xl(e),s=t.length;s--;){var r=t[s],o=e[r];t[s]=[r,o,zt(o)]}return t}function Lt(e,t){return function(s){return s==null?!1:s[e]===t&&(t!==void 0||e in Object(s))}}function hn(e){var t=mn(e);return t.length==1&&t[0][2]?Lt(t[0][0],t[0][1]):function(s){return s===e||vn(s,e,t)}}var bn=1,gn=2;function yn(e,t){return It(e)&&zt(t)?Lt(Rt(e),t):function(s){var r=te(s,e);return r===void 0&&r===t?Jl(s,e):Mt(t,r,bn|gn)}}function Sn(e){return function(t){return t==null?void 0:t[e]}}function Cn(e){return function(t){return Pl(t,e)}}function wn(e){return It(e)?Sn(Rt(e)):Cn(e)}function On(e){return typeof e=="function"?e:e==null?Zl:typeof e=="object"?Nl(e)?yn(e[0],e[1]):hn(e):wn(e)}var Ne=function(){return Al.Date.now()},En="Expected a function",Tn=Math.max,In=Math.min;function Rn(e,t,s){var r,o,f,l,c,i,p=0,b=!1,u=!1,m=!0;if(typeof e!="function")throw new TypeError(En);t=bt(t)||0,ke(s)&&(b=!!s.leading,u="maxWait"in s,f=u?Tn(bt(s.maxWait)||0,t):f,m="trailing"in s?!!s.trailing:m);function v(C){var w=r,L=o;return r=o=void 0,p=C,l=e.apply(L,w),l}function S(C){return p=C,c=setTimeout(z,t),b?v(C):l}function d(C){var w=C-i,L=C-p,G=t-w;return u?In(G,f-L):G}function I(C){var w=C-i,L=C-p;return i===void 0||w>=t||w<0||u&&L>=f}function z(){var C=Ne();if(I(C))return k(C);c=setTimeout(z,d(C))}function k(C){return c=void 0,m&&r?v(C):(r=o=void 0,l)}function h(){c!==void 0&&clearTimeout(c),p=0,r=i=o=c=void 0}function K(){return c===void 0?l:k(Ne())}function J(){var C=Ne(),w=I(C);if(r=arguments,o=this,i=C,w){if(c===void 0)return S(i);if(u)return clearTimeout(c),c=setTimeout(z,t),v(i)}return c===void 0&&(c=setTimeout(z,t)),l}return J.cancel=h,J.flush=K,J}function kn(e,t,s){var r=e==null?0:e.length;if(!r)return-1;var o=r-1;return cn(e,On(t),o)}const $n=(e="")=>e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d"),Rs=e=>Sl(e);let Ie;const ks=e=>{var t;if(!Ve)return 0;if(Ie!==void 0)return Ie;const s=document.createElement("div");s.className=`${e}-scrollbar__wrap`,s.style.visibility="hidden",s.style.width="100px",s.style.position="absolute",s.style.top="-9999px",document.body.appendChild(s);const r=s.offsetWidth;s.style.overflow="scroll";const o=document.createElement("div");o.style.width="100%",s.appendChild(o);const f=o.offsetWidth;return(t=s.parentNode)==null||t.removeChild(s),Ie=r-f,Ie};function Vn(e,t){if(!Ve)return;if(!t){e.scrollTop=0;return}const s=[];let r=t.offsetParent;for(;r!==null&&e!==r&&e.contains(r);)s.push(r),r=r.offsetParent;const o=t.offsetTop+s.reduce((i,p)=>i+p.offsetTop,0),f=o+t.offsetHeight,l=e.scrollTop,c=l+e.clientHeight;o<l?e.scrollTop=o:f>c&&(e.scrollTop=f-e.clientHeight)}const Mn=["",void 0,null],zn=void 0,Ln=pe({emptyValues:Array,valueOnClear:{type:[String,Number,Boolean,Function],default:void 0,validator:e=>X(e)?!e():!e}}),Bn=(e,t)=>{let s=Wl();s.value||(s=E({}));const r=g(()=>e.emptyValues||s.value.emptyValues||Mn),o=g(()=>X(e.valueOnClear)?e.valueOnClear():e.valueOnClear!==void 0?e.valueOnClear:X(s.value.valueOnClear)?s.value.valueOnClear():s.value.valueOnClear!==void 0?s.value.valueOnClear:zn),f=l=>r.value.includes(l);return r.value.includes(o.value),{emptyValues:r,valueOnClear:o,isEmptyValue:f}},ue=4,Dn={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}},Pn=({move:e,size:t,bar:s})=>({[s.size]:t,transform:`translate${s.axis}(${e}%)`}),Ge=Symbol("scrollbarContextKey"),Nn=pe({vertical:Boolean,size:String,move:Number,ratio:{type:Number,required:!0},always:Boolean}),An="Thumb",Wn=H({__name:"thumb",props:Nn,setup(e){const t=e,s=fe(Ge),r=le("scrollbar");s||Fl(An,"can not inject scrollbar context");const o=E(),f=E(),l=E({}),c=E(!1);let i=!1,p=!1,b=Ve?document.onselectstart:null;const u=g(()=>Dn[t.vertical?"vertical":"horizontal"]),m=g(()=>Pn({size:t.size,move:t.move,bar:u.value})),v=g(()=>o.value[u.value.offset]**2/s.wrapElement[u.value.scrollSize]/t.ratio/f.value[u.value.offset]),S=C=>{var w;if(C.stopPropagation(),C.ctrlKey||[1,2].includes(C.button))return;(w=window.getSelection())==null||w.removeAllRanges(),I(C);const L=C.currentTarget;L&&(l.value[u.value.axis]=L[u.value.offset]-(C[u.value.client]-L.getBoundingClientRect()[u.value.direction]))},d=C=>{if(!f.value||!o.value||!s.wrapElement)return;const w=Math.abs(C.target.getBoundingClientRect()[u.value.direction]-C[u.value.client]),L=f.value[u.value.offset]/2,G=(w-L)*100*v.value/o.value[u.value.offset];s.wrapElement[u.value.scroll]=G*s.wrapElement[u.value.scrollSize]/100},I=C=>{C.stopImmediatePropagation(),i=!0,document.addEventListener("mousemove",z),document.addEventListener("mouseup",k),b=document.onselectstart,document.onselectstart=()=>!1},z=C=>{if(!o.value||!f.value||i===!1)return;const w=l.value[u.value.axis];if(!w)return;const L=(o.value.getBoundingClientRect()[u.value.direction]-C[u.value.client])*-1,G=f.value[u.value.offset]-w,se=(L-G)*100*v.value/o.value[u.value.offset];s.wrapElement[u.value.scroll]=se*s.wrapElement[u.value.scrollSize]/100},k=()=>{i=!1,l.value[u.value.axis]=0,document.removeEventListener("mousemove",z),document.removeEventListener("mouseup",k),J(),p&&(c.value=!1)},h=()=>{p=!1,c.value=!!t.size},K=()=>{p=!0,c.value=i};St(()=>{J(),document.removeEventListener("mouseup",k)});const J=()=>{document.onselectstart!==b&&(document.onselectstart=b)};return We(ct(s,"scrollbarElement"),"mousemove",h),We(ct(s,"scrollbarElement"),"mouseleave",K),(C,w)=>(O(),A(Ct,{name:R(r).b("fade"),persisted:""},{default:B(()=>[ce(M("div",{ref_key:"instance",ref:o,class:y([R(r).e("bar"),R(r).is(R(u).key)]),onMousedown:d},[M("div",{ref_key:"thumb",ref:f,class:y(R(r).e("thumb")),style:j(R(m)),onMousedown:S},null,38)],34),[[Me,C.always||c.value]])]),_:1},8,["name"]))}});var gt=ne(Wn,[["__file","thumb.vue"]]);const Fn=pe({always:{type:Boolean,default:!0},minSize:{type:Number,required:!0}}),Hn=H({__name:"bar",props:Fn,setup(e,{expose:t}){const s=e,r=fe(Ge),o=E(0),f=E(0),l=E(""),c=E(""),i=E(1),p=E(1);return t({handleScroll:m=>{if(m){const v=m.offsetHeight-ue,S=m.offsetWidth-ue;f.value=m.scrollTop*100/v*i.value,o.value=m.scrollLeft*100/S*p.value}},update:()=>{const m=r==null?void 0:r.wrapElement;if(!m)return;const v=m.offsetHeight-ue,S=m.offsetWidth-ue,d=v**2/m.scrollHeight,I=S**2/m.scrollWidth,z=Math.max(d,s.minSize),k=Math.max(I,s.minSize);i.value=d/(v-d)/(z/(v-z)),p.value=I/(S-I)/(k/(S-k)),c.value=z+ue<v?`${z}px`:"",l.value=k+ue<S?`${k}px`:""}}),(m,v)=>(O(),V(Ae,null,[F(gt,{move:o.value,ratio:p.value,size:l.value,always:m.always},null,8,["move","ratio","size","always"]),F(gt,{move:f.value,ratio:i.value,size:c.value,vertical:"",always:m.always},null,8,["move","ratio","size","always"])],64))}});var Kn=ne(Hn,[["__file","bar.vue"]]);const Un=pe({height:{type:[String,Number],default:""},maxHeight:{type:[String,Number],default:""},native:{type:Boolean,default:!1},wrapStyle:{type:ge([String,Object,Array]),default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array,Object],default:""},noresize:Boolean,tag:{type:String,default:"div"},always:Boolean,minSize:{type:Number,default:20},id:String,role:String,...$t(["ariaLabel","ariaOrientation"])}),Gn={scroll:({scrollTop:e,scrollLeft:t})=>[e,t].every(de)},qn="ElScrollbar",Qn=H({name:qn}),Xn=H({...Qn,props:Un,emits:Gn,setup(e,{expose:t,emit:s}){const r=e,o=le("scrollbar");let f,l;const c=E(),i=E(),p=E(),b=E(),u=g(()=>{const h={};return r.height&&(h.height=pt(r.height)),r.maxHeight&&(h.maxHeight=pt(r.maxHeight)),[r.wrapStyle,h]}),m=g(()=>[r.wrapClass,o.e("wrap"),{[o.em("wrap","hidden-default")]:!r.native}]),v=g(()=>[o.e("view"),r.viewClass]),S=()=>{var h;i.value&&((h=b.value)==null||h.handleScroll(i.value),s("scroll",{scrollTop:i.value.scrollTop,scrollLeft:i.value.scrollLeft}))};function d(h,K){ie(h)?i.value.scrollTo(h):de(h)&&de(K)&&i.value.scrollTo(h,K)}const I=h=>{de(h)&&(i.value.scrollTop=h)},z=h=>{de(h)&&(i.value.scrollLeft=h)},k=()=>{var h;(h=b.value)==null||h.update()};return Y(()=>r.noresize,h=>{h?(f==null||f(),l==null||l()):({stop:f}=ee(p,k),l=We("resize",k))},{immediate:!0}),Y(()=>[r.maxHeight,r.height],()=>{r.native||q(()=>{var h;k(),i.value&&((h=b.value)==null||h.handleScroll(i.value))})}),He(Ge,ye({scrollbarElement:c,wrapElement:i})),ze(()=>{r.native||q(()=>{k()})}),Cl(()=>k()),t({wrapRef:i,update:k,scrollTo:d,setScrollTop:I,setScrollLeft:z,handleScroll:S}),(h,K)=>(O(),V("div",{ref_key:"scrollbarRef",ref:c,class:y(R(o).b())},[M("div",{ref_key:"wrapRef",ref:i,class:y(R(m)),style:j(R(u)),onScroll:S},[(O(),A(Re(h.tag),{id:h.id,ref_key:"resizeRef",ref:p,class:y(R(v)),style:j(h.viewStyle),role:h.role,"aria-label":h.ariaLabel,"aria-orientation":h.ariaOrientation},{default:B(()=>[N(h.$slots,"default")]),_:3},8,["id","class","style","role","aria-label","aria-orientation"]))],38),h.native?D("v-if",!0):(O(),A(Kn,{key:0,ref_key:"barRef",ref:b,always:h.always,"min-size":h.minSize},null,8,["always","min-size"]))],2))}});var Yn=ne(Xn,[["__file","scrollbar.vue"]]);const jn=Ue(Yn),Bt=pe({type:{type:String,values:["primary","success","info","warning","danger"],default:"primary"},closable:Boolean,disableTransitions:Boolean,hit:Boolean,color:String,size:{type:String,values:Hl},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),Jn={close:e=>e instanceof MouseEvent,click:e=>e instanceof MouseEvent},Zn=H({name:"ElTag"}),_n=H({...Zn,props:Bt,emits:Jn,setup(e,{emit:t}){const s=e,r=Vt(),o=le("tag"),f=g(()=>{const{type:i,hit:p,effect:b,closable:u,round:m}=s;return[o.b(),o.is("closable",u),o.m(i||"primary"),o.m(r.value),o.m(b),o.is("hit",p),o.is("round",m)]}),l=i=>{t("close",i)},c=i=>{t("click",i)};return(i,p)=>i.disableTransitions?(O(),V("span",{key:0,class:y(R(f)),style:j({backgroundColor:i.color}),onClick:c},[M("span",{class:y(R(o).e("content"))},[N(i.$slots,"default")],2),i.closable?(O(),A(R(Fe),{key:0,class:y(R(o).e("close")),onClick:W(l,["stop"])},{default:B(()=>[F(R(vt))]),_:1},8,["class","onClick"])):D("v-if",!0)],6)):(O(),A(Ct,{key:1,name:`${R(o).namespace.value}-zoom-in-center`,appear:""},{default:B(()=>[M("span",{class:y(R(f)),style:j({backgroundColor:i.color}),onClick:c},[M("span",{class:y(R(o).e("content"))},[N(i.$slots,"default")],2),i.closable?(O(),A(R(Fe),{key:0,class:y(R(o).e("close")),onClick:W(l,["stop"])},{default:B(()=>[F(R(vt))]),_:1},8,["class","onClick"])):D("v-if",!0)],6)]),_:3},8,["name"]))}});var xn=ne(_n,[["__file","tag.vue"]]);const es=Ue(xn),Dt=Symbol("ElSelectGroup"),Le=Symbol("ElSelect");function ts(e,t){const s=fe(Le),r=fe(Dt,{disabled:!1}),o=g(()=>s.props.multiple?b(s.props.modelValue,e.value):b([s.props.modelValue],e.value)),f=g(()=>{if(s.props.multiple){const v=s.props.modelValue||[];return!o.value&&v.length>=s.props.multipleLimit&&s.props.multipleLimit>0}else return!1}),l=g(()=>e.label||(ie(e.value)?"":e.value)),c=g(()=>e.value||e.label||""),i=g(()=>e.disabled||t.groupDisabled||f.value),p=Ke(),b=(v=[],S)=>{if(ie(e.value)){const d=s.props.valueKey;return v&&v.some(I=>wt(te(I,d))===te(S,d))}else return v&&v.includes(S)},u=()=>{!e.disabled&&!r.disabled&&(s.states.hoveringIndex=s.optionsArray.indexOf(p.proxy))},m=v=>{const S=new RegExp($n(v),"i");t.visible=S.test(l.value)||e.created};return Y(()=>l.value,()=>{!e.created&&!s.props.remote&&s.setSelected()}),Y(()=>e.value,(v,S)=>{const{remote:d,valueKey:I}=s.props;if($e(v,S)||(s.onOptionDestroy(S,p.proxy),s.onOptionCreate(p.proxy)),!e.created&&!d){if(I&&ie(v)&&ie(S)&&v[I]===S[I])return;s.setSelected()}}),Y(()=>r.disabled,()=>{t.groupDisabled=r.disabled},{immediate:!0}),{select:s,currentLabel:l,currentValue:c,itemSelected:o,isDisabled:i,hoverItem:u,updateOption:m}}const ls=H({name:"ElOption",componentName:"ElOption",props:{value:{required:!0,type:[String,Number,Boolean,Object]},label:[String,Number],created:Boolean,disabled:Boolean},setup(e){const t=le("select"),s=Ot(),r=g(()=>[t.be("dropdown","item"),t.is("disabled",R(c)),t.is("selected",R(l)),t.is("hovering",R(m))]),o=ye({index:-1,groupDisabled:!1,visible:!0,hover:!1}),{currentLabel:f,itemSelected:l,isDisabled:c,select:i,hoverItem:p,updateOption:b}=ts(e,o),{visible:u,hover:m}=Et(o),v=Ke().proxy;i.onOptionCreate(v),St(()=>{const d=v.value,{selected:I}=i.states,k=(i.props.multiple?I:[I]).some(h=>h.value===v.value);q(()=>{i.states.cachedOptions.get(d)===v&&!k&&i.states.cachedOptions.delete(d)}),i.onOptionDestroy(d,v)});function S(){e.disabled!==!0&&o.groupDisabled!==!0&&i.handleOptionSelect(v)}return{ns:t,id:s,containerKls:r,currentLabel:f,itemSelected:l,isDisabled:c,select:i,hoverItem:p,updateOption:b,visible:u,hover:m,selectOptionClick:S,states:o}}}),ns=["id","aria-disabled","aria-selected"];function ss(e,t,s,r,o,f){return ce((O(),V("li",{id:e.id,class:y(e.containerKls),role:"option","aria-disabled":e.isDisabled||void 0,"aria-selected":e.itemSelected,onMouseenter:t[0]||(t[0]=(...l)=>e.hoverItem&&e.hoverItem(...l)),onClick:t[1]||(t[1]=W((...l)=>e.selectOptionClick&&e.selectOptionClick(...l),["stop"]))},[N(e.$slots,"default",{},()=>[M("span",null,x(e.currentLabel),1)])],42,ns)),[[Me,e.visible]])}var qe=ne(ls,[["render",ss],["__file","option.vue"]]);const os=H({name:"ElSelectDropdown",componentName:"ElSelectDropdown",setup(){const e=fe(Le),t=le("select"),s=g(()=>e.props.popperClass),r=g(()=>e.props.multiple),o=g(()=>e.props.fitInputWidth),f=E("");function l(){var c;f.value=`${(c=e.selectRef)==null?void 0:c.offsetWidth}px`}return ze(()=>{l(),ee(e.selectRef,l)}),{ns:t,minWidth:f,popperClass:s,isMultiple:r,isFitInputWidth:o}}});function as(e,t,s,r,o,f){return O(),V("div",{class:y([e.ns.b("dropdown"),e.ns.is("multiple",e.isMultiple),e.popperClass]),style:j({[e.isFitInputWidth?"width":"minWidth"]:e.minWidth})},[e.$slots.header?(O(),V("div",{key:0,class:y(e.ns.be("dropdown","header"))},[N(e.$slots,"header")],2)):D("v-if",!0),N(e.$slots,"default"),e.$slots.footer?(O(),V("div",{key:1,class:y(e.ns.be("dropdown","footer"))},[N(e.$slots,"footer")],2)):D("v-if",!0)],6)}var is=ne(os,[["render",as],["__file","select-dropdown.vue"]]);function rs(e){const t=E(!1);return{handleCompositionStart:()=>{t.value=!0},handleCompositionUpdate:f=>{const l=f.target.value,c=l[l.length-1]||"";t.value=!Rl(c)},handleCompositionEnd:f=>{t.value&&(t.value=!1,X(e)&&e(f))}}}const us=11,ds=(e,t)=>{const{t:s}=Kl(),r=Ot(),o=le("select"),f=le("input"),l=ye({inputValue:"",options:new Map,cachedOptions:new Map,disabledOptions:new Map,optionValues:[],selected:e.multiple?[]:{},selectionWidth:0,calculatorWidth:0,collapseItemWidth:0,selectedLabel:"",hoveringIndex:-1,previousQuery:null,inputHovering:!1,menuVisibleOnFocus:!1,isBeforeHide:!1}),c=E(null),i=E(null),p=E(null),b=E(null),u=E(null),m=E(null),v=E(null),S=E(null),d=E(null),I=E(null),z=E(null),k=E(null),{wrapperRef:h,isFocused:K,handleFocus:J,handleBlur:C}=kl(u,{afterFocus(){e.automaticDropdown&&!w.value&&(w.value=!0,l.menuVisibleOnFocus=!0)},beforeBlur(n){var a,T;return((a=p.value)==null?void 0:a.isFocusInsideContent(n))||((T=b.value)==null?void 0:T.isFocusInsideContent(n))},afterBlur(){w.value=!1,l.menuVisibleOnFocus=!1}}),w=E(!1),L=E(),{form:G,formItem:se}=en(),{inputId:Nt}=tn(e,{formItemContext:se}),{valueOnClear:At,isEmptyValue:Wt}=Bn(e),Se=g(()=>e.disabled||(G==null?void 0:G.disabled)),Be=g(()=>e.multiple?Q(e.modelValue)&&e.modelValue.length>0:!Wt(e.modelValue)),Ft=g(()=>e.clearable&&!Se.value&&l.inputHovering&&Be.value),Qe=g(()=>e.remote&&e.filterable&&!e.remoteShowSuffix?"":e.suffixIcon),Ht=g(()=>o.is("reverse",Qe.value&&w.value)),Xe=g(()=>(se==null?void 0:se.validateState)||""),Kt=g(()=>Ul[Xe.value]),Ut=g(()=>e.remote?300:0),Ye=g(()=>e.loading?e.loadingText||s("el.select.loading"):e.remote&&!l.inputValue&&l.options.size===0?!1:e.filterable&&l.inputValue&&l.options.size>0&&ve.value===0?e.noMatchText||s("el.select.noMatch"):l.options.size===0?e.noDataText||s("el.select.noData"):null),ve=g(()=>P.value.filter(n=>n.visible).length),P=g(()=>{const n=Array.from(l.options.values()),a=[];return l.optionValues.forEach(T=>{const $=n.findIndex(Z=>Z.value===T);$>-1&&a.push(n[$])}),a.length>=n.length?a:n}),Gt=g(()=>Array.from(l.cachedOptions.values())),qt=g(()=>{const n=P.value.filter(a=>!a.created).some(a=>a.currentLabel===l.inputValue);return e.filterable&&e.allowCreate&&l.inputValue!==""&&!n}),je=()=>{e.filterable&&X(e.filterMethod)||e.filterable&&e.remote&&X(e.remoteMethod)||P.value.forEach(n=>{var a;(a=n.updateOption)==null||a.call(n,l.inputValue)})},Je=Vt(),Qt=g(()=>["small"].includes(Je.value)?"small":"default"),Xt=g({get(){return w.value&&Ye.value!==!1},set(n){w.value=n}}),Yt=g(()=>Q(e.modelValue)?e.modelValue.length===0&&!l.inputValue:e.filterable?!l.inputValue:!0),jt=g(()=>{var n;const a=(n=e.placeholder)!=null?n:s("el.select.placeholder");return e.multiple||!Be.value?a:l.selectedLabel});Y(()=>e.modelValue,(n,a)=>{e.multiple&&e.filterable&&!e.reserveKeyword&&(l.inputValue="",Ce("")),we(),!$e(n,a)&&e.validateEvent&&(se==null||se.validate("change").catch(T=>Gl()))},{flush:"post",deep:!0}),Y(()=>w.value,n=>{n?Ce(l.inputValue):(l.inputValue="",l.previousQuery=null,l.isBeforeHide=!0),t("visible-change",n)}),Y(()=>l.options.entries(),()=>{var n;if(!Ve)return;const a=((n=c.value)==null?void 0:n.querySelectorAll("input"))||[];(!e.filterable&&!e.defaultFirstOption&&!wl(e.modelValue)||!Array.from(a).includes(document.activeElement))&&we(),e.defaultFirstOption&&(e.filterable||e.remote)&&ve.value&&Ze()},{flush:"post"}),Y(()=>l.hoveringIndex,n=>{de(n)&&n>-1?L.value=P.value[n]||{}:L.value={},P.value.forEach(a=>{a.hover=L.value===a})}),Ol(()=>{l.isBeforeHide||je()});const Ce=n=>{l.previousQuery!==n&&(l.previousQuery=n,e.filterable&&X(e.filterMethod)?e.filterMethod(n):e.filterable&&e.remote&&X(e.remoteMethod)&&e.remoteMethod(n),e.defaultFirstOption&&(e.filterable||e.remote)&&ve.value?q(Ze):q(Jt))},Ze=()=>{const n=P.value.filter($=>$.visible&&!$.disabled&&!$.states.groupDisabled),a=n.find($=>$.created),T=n[0];l.hoveringIndex=at(P.value,a||T)},we=()=>{if(e.multiple)l.selectedLabel="";else{const a=_e(e.modelValue);l.selectedLabel=a.currentLabel,l.selected=a;return}const n=[];Q(e.modelValue)&&e.modelValue.forEach(a=>{n.push(_e(a))}),l.selected=n},_e=n=>{let a;const T=Pe(n).toLowerCase()==="object",$=Pe(n).toLowerCase()==="null",Z=Pe(n).toLowerCase()==="undefined";for(let oe=l.cachedOptions.size-1;oe>=0;oe--){const U=Gt.value[oe];if(T?te(U.value,e.valueKey)===te(n,e.valueKey):U.value===n){a={value:n,currentLabel:U.currentLabel,get isDisabled(){return U.isDisabled}};break}}if(a)return a;const re=T?n.label:!$&&!Z?n:"";return{value:n,currentLabel:re}},Jt=()=>{e.multiple?l.hoveringIndex=P.value.findIndex(n=>l.selected.some(a=>he(a)===he(n))):l.hoveringIndex=P.value.findIndex(n=>he(n)===he(l.selected))},Zt=()=>{l.selectionWidth=i.value.getBoundingClientRect().width},xe=()=>{l.calculatorWidth=m.value.getBoundingClientRect().width},_t=()=>{l.collapseItemWidth=z.value.getBoundingClientRect().width},De=()=>{var n,a;(a=(n=p.value)==null?void 0:n.updatePopper)==null||a.call(n)},et=()=>{var n,a;(a=(n=b.value)==null?void 0:n.updatePopper)==null||a.call(n)},tt=()=>{l.inputValue.length>0&&!w.value&&(w.value=!0),Ce(l.inputValue)},lt=n=>{if(l.inputValue=n.target.value,e.remote)nt();else return tt()},nt=Rn(()=>{tt()},Ut.value),me=n=>{$e(e.modelValue,n)||t(Tt,n)},xt=n=>kn(n,a=>!l.disabledOptions.has(a)),el=n=>{if(e.multiple&&n.code!==ql.delete&&n.target.value.length<=0){const a=e.modelValue.slice(),T=xt(a);if(T<0)return;a.splice(T,1),t(_,a),me(a)}},tl=(n,a)=>{const T=l.selected.indexOf(a);if(T>-1&&!Se.value){const $=e.modelValue.slice();$.splice(T,1),t(_,$),me($),t("remove-tag",a.value)}n.stopPropagation(),Ee()},st=n=>{n.stopPropagation();const a=e.multiple?[]:At.value;if(e.multiple)for(const T of l.selected)T.isDisabled&&a.push(T.value);t(_,a),me(a),l.hoveringIndex=-1,w.value=!1,t("clear"),Ee()},ot=n=>{if(e.multiple){const a=(e.modelValue||[]).slice(),T=at(a,n.value);T>-1?a.splice(T,1):(e.multipleLimit<=0||a.length<e.multipleLimit)&&a.push(n.value),t(_,a),me(a),n.created&&Ce(""),e.filterable&&!e.reserveKeyword&&(l.inputValue="")}else t(_,n.value),me(n.value),w.value=!1;Ee(),!w.value&&q(()=>{Oe(n)})},at=(n=[],a)=>{if(!ie(a))return n.indexOf(a);const T=e.valueKey;let $=-1;return n.some((Z,re)=>wt(te(Z,T))===te(a,T)?($=re,!0):!1),$},Oe=n=>{var a,T,$,Z,re;const Te=Q(n)?n[0]:n;let oe=null;if(Te!=null&&Te.value){const U=P.value.filter(dt=>dt.value===Te.value);U.length>0&&(oe=U[0].$el)}if(p.value&&oe){const U=(Z=($=(T=(a=p.value)==null?void 0:a.popperRef)==null?void 0:T.contentRef)==null?void 0:$.querySelector)==null?void 0:Z.call($,`.${o.be("dropdown","wrap")}`);U&&Vn(U,oe)}(re=k.value)==null||re.handleScroll()},ll=n=>{l.options.set(n.value,n),l.cachedOptions.set(n.value,n),n.disabled&&l.disabledOptions.set(n.value,n)},nl=(n,a)=>{l.options.get(n)===a&&l.options.delete(n)},{handleCompositionStart:sl,handleCompositionUpdate:ol,handleCompositionEnd:al}=rs(n=>lt(n)),il=g(()=>{var n,a;return(a=(n=p.value)==null?void 0:n.popperRef)==null?void 0:a.contentRef}),rl=()=>{l.isBeforeHide=!1,q(()=>Oe(l.selected))},Ee=()=>{var n;(n=u.value)==null||n.focus()},ul=()=>{it()},dl=n=>{st(n)},it=n=>{if(w.value=!1,K.value){const a=new FocusEvent("focus",n);q(()=>C(a))}},cl=()=>{l.inputValue.length>0?l.inputValue="":w.value=!1},rt=()=>{Se.value||(l.menuVisibleOnFocus?l.menuVisibleOnFocus=!1:w.value=!w.value)},fl=()=>{w.value?P.value[l.hoveringIndex]&&ot(P.value[l.hoveringIndex]):rt()},he=n=>ie(n.value)?te(n.value,e.valueKey):n.value,pl=g(()=>P.value.filter(n=>n.visible).every(n=>n.disabled)),vl=g(()=>e.multiple?e.collapseTags?l.selected.slice(0,e.maxCollapseTags):l.selected:[]),ml=g(()=>e.multiple?e.collapseTags?l.selected.slice(e.maxCollapseTags):[]:[]),ut=n=>{if(!w.value){w.value=!0;return}if(!(l.options.size===0||ve.value===0)&&!pl.value){n==="next"?(l.hoveringIndex++,l.hoveringIndex===l.options.size&&(l.hoveringIndex=0)):n==="prev"&&(l.hoveringIndex--,l.hoveringIndex<0&&(l.hoveringIndex=l.options.size-1));const a=P.value[l.hoveringIndex];(a.disabled===!0||a.states.groupDisabled===!0||!a.visible)&&ut(n),q(()=>Oe(L.value))}},hl=()=>{if(!i.value)return 0;const n=window.getComputedStyle(i.value);return Number.parseFloat(n.gap||"6px")},bl=g(()=>{const n=hl();return{maxWidth:`${z.value&&e.maxCollapseTags===1?l.selectionWidth-l.collapseItemWidth-n:l.selectionWidth}px`}}),gl=g(()=>({maxWidth:`${l.selectionWidth}px`})),yl=g(()=>({width:`${Math.max(l.calculatorWidth,us)}px`}));return e.multiple&&!Q(e.modelValue)&&t(_,[]),!e.multiple&&Q(e.modelValue)&&t(_,""),ee(i,Zt),ee(m,xe),ee(d,De),ee(h,De),ee(I,et),ee(z,_t),ze(()=>{we()}),{inputId:Nt,contentId:r,nsSelect:o,nsInput:f,states:l,isFocused:K,expanded:w,optionsArray:P,hoverOption:L,selectSize:Je,filteredOptionsCount:ve,resetCalculatorWidth:xe,updateTooltip:De,updateTagTooltip:et,debouncedOnInputChange:nt,onInput:lt,deletePrevTag:el,deleteTag:tl,deleteSelected:st,handleOptionSelect:ot,scrollToOption:Oe,hasModelValue:Be,shouldShowPlaceholder:Yt,currentPlaceholder:jt,showClose:Ft,iconComponent:Qe,iconReverse:Ht,validateState:Xe,validateIcon:Kt,showNewOption:qt,updateOptions:je,collapseTagSize:Qt,setSelected:we,selectDisabled:Se,emptyText:Ye,handleCompositionStart:sl,handleCompositionUpdate:ol,handleCompositionEnd:al,onOptionCreate:ll,onOptionDestroy:nl,handleMenuEnter:rl,handleFocus:J,focus:Ee,blur:ul,handleBlur:C,handleClearClick:dl,handleClickOutside:it,handleEsc:cl,toggleMenu:rt,selectOption:fl,getValueKey:he,navigateOptions:ut,dropdownMenuVisible:Xt,showTagList:vl,collapseTagList:ml,tagStyle:bl,collapseTagStyle:gl,inputStyle:yl,popperRef:il,inputRef:u,tooltipRef:p,tagTooltipRef:b,calculatorRef:m,prefixRef:v,suffixRef:S,selectRef:c,wrapperRef:h,selectionRef:i,scrollbarRef:k,menuRef:d,tagMenuRef:I,collapseItemRef:z}};var cs=H({name:"ElOptions",setup(e,{slots:t}){const s=fe(Le);let r=[];return()=>{var o,f;const l=(o=t.default)==null?void 0:o.call(t),c=[];function i(p){Q(p)&&p.forEach(b=>{var u,m,v,S;const d=(u=(b==null?void 0:b.type)||{})==null?void 0:u.name;d==="ElOptionGroup"?i(!El(b.children)&&!Q(b.children)&&X((m=b.children)==null?void 0:m.default)?(v=b.children)==null?void 0:v.default():b.children):d==="ElOption"?c.push((S=b.props)==null?void 0:S.value):Q(b.children)&&i(b.children)})}return l.length&&i((f=l[0])==null?void 0:f.children),$e(c,r)||(r=c,s&&(s.states.optionValues=c)),l}}});const fs=pe({name:String,id:String,modelValue:{type:[Array,String,Number,Boolean,Object],default:void 0},autocomplete:{type:String,default:"off"},automaticDropdown:Boolean,size:Ql,effect:{type:ge(String),default:"light"},disabled:Boolean,clearable:Boolean,filterable:Boolean,allowCreate:Boolean,loading:Boolean,popperClass:{type:String,default:""},popperOptions:{type:ge(Object),default:()=>({})},remote:Boolean,loadingText:String,noMatchText:String,noDataText:String,remoteMethod:Function,filterMethod:Function,multiple:Boolean,multipleLimit:{type:Number,default:0},placeholder:{type:String},defaultFirstOption:Boolean,reserveKeyword:{type:Boolean,default:!0},valueKey:{type:String,default:"value"},collapseTags:Boolean,collapseTagsTooltip:Boolean,maxCollapseTags:{type:Number,default:1},teleported:Ml.teleported,persistent:{type:Boolean,default:!0},clearIcon:{type:mt,default:Xl},fitInputWidth:Boolean,suffixIcon:{type:mt,default:Yl},tagType:{...Bt.type,default:"info"},validateEvent:{type:Boolean,default:!0},remoteShowSuffix:Boolean,placement:{type:ge(String),values:zl,default:"bottom-start"},fallbackPlacements:{type:ge(Array),default:["bottom-start","top-start","right","left"]},...Ln,...$t(["ariaLabel"])}),yt="ElSelect",ps=H({name:yt,componentName:yt,components:{ElInput:$l,ElSelectMenu:is,ElOption:qe,ElOptions:cs,ElTag:es,ElScrollbar:jn,ElTooltip:Ll,ElIcon:Fe},directives:{ClickOutside:Bl},props:fs,emits:[_,Tt,"remove-tag","clear","visible-change","focus","blur"],setup(e,{emit:t}){const s=ds(e,t);return He(Le,ye({props:e,states:s.states,optionsArray:s.optionsArray,handleOptionSelect:s.handleOptionSelect,onOptionCreate:s.onOptionCreate,onOptionDestroy:s.onOptionDestroy,selectRef:s.selectRef,setSelected:s.setSelected})),{...s}}}),vs=["id","disabled","autocomplete","readonly","aria-activedescendant","aria-controls","aria-expanded","aria-label"],ms=["textContent"];function hs(e,t,s,r,o,f){const l=ae("el-tag"),c=ae("el-tooltip"),i=ae("el-icon"),p=ae("el-option"),b=ae("el-options"),u=ae("el-scrollbar"),m=ae("el-select-menu"),v=Tl("click-outside");return ce((O(),V("div",{ref:"selectRef",class:y([e.nsSelect.b(),e.nsSelect.m(e.selectSize)]),onMouseenter:t[16]||(t[16]=S=>e.states.inputHovering=!0),onMouseleave:t[17]||(t[17]=S=>e.states.inputHovering=!1),onClick:t[18]||(t[18]=W((...S)=>e.toggleMenu&&e.toggleMenu(...S),["prevent","stop"]))},[F(c,{ref:"tooltipRef",visible:e.dropdownMenuVisible,placement:e.placement,teleported:e.teleported,"popper-class":[e.nsSelect.e("popper"),e.popperClass],"popper-options":e.popperOptions,"fallback-placements":e.fallbackPlacements,effect:e.effect,pure:"",trigger:"click",transition:`${e.nsSelect.namespace.value}-zoom-in-top`,"stop-popper-mouse-event":!1,"gpu-acceleration":!1,persistent:e.persistent,onBeforeShow:e.handleMenuEnter,onHide:t[15]||(t[15]=S=>e.states.isBeforeHide=!1)},{default:B(()=>{var S;return[M("div",{ref:"wrapperRef",class:y([e.nsSelect.e("wrapper"),e.nsSelect.is("focused",e.isFocused),e.nsSelect.is("hovering",e.states.inputHovering),e.nsSelect.is("filterable",e.filterable),e.nsSelect.is("disabled",e.selectDisabled)])},[e.$slots.prefix?(O(),V("div",{key:0,ref:"prefixRef",class:y(e.nsSelect.e("prefix"))},[N(e.$slots,"prefix")],2)):D("v-if",!0),M("div",{ref:"selectionRef",class:y([e.nsSelect.e("selection"),e.nsSelect.is("near",e.multiple&&!e.$slots.prefix&&!!e.states.selected.length)])},[e.multiple?N(e.$slots,"tag",{key:0},()=>[(O(!0),V(Ae,null,ft(e.showTagList,d=>(O(),V("div",{key:e.getValueKey(d),class:y(e.nsSelect.e("selected-item"))},[F(l,{closable:!e.selectDisabled&&!d.isDisabled,size:e.collapseTagSize,type:e.tagType,"disable-transitions":"",style:j(e.tagStyle),onClose:I=>e.deleteTag(I,d)},{default:B(()=>[M("span",{class:y(e.nsSelect.e("tags-text"))},x(d.currentLabel),3)]),_:2},1032,["closable","size","type","style","onClose"])],2))),128)),e.collapseTags&&e.states.selected.length>e.maxCollapseTags?(O(),A(c,{key:0,ref:"tagTooltipRef",disabled:e.dropdownMenuVisible||!e.collapseTagsTooltip,"fallback-placements":["bottom","top","right","left"],effect:e.effect,placement:"bottom",teleported:e.teleported},{default:B(()=>[M("div",{ref:"collapseItemRef",class:y(e.nsSelect.e("selected-item"))},[F(l,{closable:!1,size:e.collapseTagSize,type:e.tagType,"disable-transitions":"",style:j(e.collapseTagStyle)},{default:B(()=>[M("span",{class:y(e.nsSelect.e("tags-text"))}," + "+x(e.states.selected.length-e.maxCollapseTags),3)]),_:1},8,["size","type","style"])],2)]),content:B(()=>[M("div",{ref:"tagMenuRef",class:y(e.nsSelect.e("selection"))},[(O(!0),V(Ae,null,ft(e.collapseTagList,d=>(O(),V("div",{key:e.getValueKey(d),class:y(e.nsSelect.e("selected-item"))},[F(l,{class:"in-tooltip",closable:!e.selectDisabled&&!d.isDisabled,size:e.collapseTagSize,type:e.tagType,"disable-transitions":"",onClose:I=>e.deleteTag(I,d)},{default:B(()=>[M("span",{class:y(e.nsSelect.e("tags-text"))},x(d.currentLabel),3)]),_:2},1032,["closable","size","type","onClose"])],2))),128))],2)]),_:1},8,["disabled","effect","teleported"])):D("v-if",!0)]):D("v-if",!0),e.selectDisabled?D("v-if",!0):(O(),V("div",{key:1,class:y([e.nsSelect.e("selected-item"),e.nsSelect.e("input-wrapper"),e.nsSelect.is("hidden",!e.filterable)])},[ce(M("input",{id:e.inputId,ref:"inputRef","onUpdate:modelValue":t[0]||(t[0]=d=>e.states.inputValue=d),type:"text",class:y([e.nsSelect.e("input"),e.nsSelect.is(e.selectSize)]),disabled:e.selectDisabled,autocomplete:e.autocomplete,style:j(e.inputStyle),role:"combobox",readonly:!e.filterable,spellcheck:"false","aria-activedescendant":((S=e.hoverOption)==null?void 0:S.id)||"","aria-controls":e.contentId,"aria-expanded":e.dropdownMenuVisible,"aria-label":e.ariaLabel,"aria-autocomplete":"none","aria-haspopup":"listbox",onFocus:t[1]||(t[1]=(...d)=>e.handleFocus&&e.handleFocus(...d)),onBlur:t[2]||(t[2]=(...d)=>e.handleBlur&&e.handleBlur(...d)),onKeydown:[t[3]||(t[3]=be(W(d=>e.navigateOptions("next"),["stop","prevent"]),["down"])),t[4]||(t[4]=be(W(d=>e.navigateOptions("prev"),["stop","prevent"]),["up"])),t[5]||(t[5]=be(W((...d)=>e.handleEsc&&e.handleEsc(...d),["stop","prevent"]),["esc"])),t[6]||(t[6]=be(W((...d)=>e.selectOption&&e.selectOption(...d),["stop","prevent"]),["enter"])),t[7]||(t[7]=be(W((...d)=>e.deletePrevTag&&e.deletePrevTag(...d),["stop"]),["delete"]))],onCompositionstart:t[8]||(t[8]=(...d)=>e.handleCompositionStart&&e.handleCompositionStart(...d)),onCompositionupdate:t[9]||(t[9]=(...d)=>e.handleCompositionUpdate&&e.handleCompositionUpdate(...d)),onCompositionend:t[10]||(t[10]=(...d)=>e.handleCompositionEnd&&e.handleCompositionEnd(...d)),onInput:t[11]||(t[11]=(...d)=>e.onInput&&e.onInput(...d)),onClick:t[12]||(t[12]=W((...d)=>e.toggleMenu&&e.toggleMenu(...d),["stop"]))},null,46,vs),[[Il,e.states.inputValue]]),e.filterable?(O(),V("span",{key:0,ref:"calculatorRef","aria-hidden":"true",class:y(e.nsSelect.e("input-calculator")),textContent:x(e.states.inputValue)},null,10,ms)):D("v-if",!0)],2)),e.shouldShowPlaceholder?(O(),V("div",{key:2,class:y([e.nsSelect.e("selected-item"),e.nsSelect.e("placeholder"),e.nsSelect.is("transparent",!e.hasModelValue||e.expanded&&!e.states.inputValue)])},[M("span",null,x(e.currentPlaceholder),1)],2)):D("v-if",!0)],2),M("div",{ref:"suffixRef",class:y(e.nsSelect.e("suffix"))},[e.iconComponent&&!e.showClose?(O(),A(i,{key:0,class:y([e.nsSelect.e("caret"),e.nsSelect.e("icon"),e.iconReverse])},{default:B(()=>[(O(),A(Re(e.iconComponent)))]),_:1},8,["class"])):D("v-if",!0),e.showClose&&e.clearIcon?(O(),A(i,{key:1,class:y([e.nsSelect.e("caret"),e.nsSelect.e("icon")]),onClick:e.handleClearClick},{default:B(()=>[(O(),A(Re(e.clearIcon)))]),_:1},8,["class","onClick"])):D("v-if",!0),e.validateState&&e.validateIcon?(O(),A(i,{key:2,class:y([e.nsInput.e("icon"),e.nsInput.e("validateIcon")])},{default:B(()=>[(O(),A(Re(e.validateIcon)))]),_:1},8,["class"])):D("v-if",!0)],2)],2)]}),content:B(()=>[F(m,{ref:"menuRef"},{default:B(()=>[e.$slots.header?(O(),V("div",{key:0,class:y(e.nsSelect.be("dropdown","header")),onClick:t[13]||(t[13]=W(()=>{},["stop"]))},[N(e.$slots,"header")],2)):D("v-if",!0),ce(F(u,{id:e.contentId,ref:"scrollbarRef",tag:"ul","wrap-class":e.nsSelect.be("dropdown","wrap"),"view-class":e.nsSelect.be("dropdown","list"),class:y([e.nsSelect.is("empty",e.filteredOptionsCount===0)]),role:"listbox","aria-label":e.ariaLabel,"aria-orientation":"vertical"},{default:B(()=>[e.showNewOption?(O(),A(p,{key:0,value:e.states.inputValue,created:!0},null,8,["value"])):D("v-if",!0),F(b,null,{default:B(()=>[N(e.$slots,"default")]),_:3})]),_:3},8,["id","wrap-class","view-class","class","aria-label"]),[[Me,e.states.options.size>0&&!e.loading]]),e.$slots.loading&&e.loading?(O(),V("div",{key:1,class:y(e.nsSelect.be("dropdown","loading"))},[N(e.$slots,"loading")],2)):e.loading||e.filteredOptionsCount===0?(O(),V("div",{key:2,class:y(e.nsSelect.be("dropdown","empty"))},[N(e.$slots,"empty",{},()=>[M("span",null,x(e.emptyText),1)])],2)):D("v-if",!0),e.$slots.footer?(O(),V("div",{key:3,class:y(e.nsSelect.be("dropdown","footer")),onClick:t[14]||(t[14]=W(()=>{},["stop"]))},[N(e.$slots,"footer")],2)):D("v-if",!0)]),_:3},512)]),_:3},8,["visible","placement","teleported","popper-class","popper-options","fallback-placements","effect","transition","persistent","onBeforeShow"])],34)),[[v,e.handleClickOutside,e.popperRef]])}var bs=ne(ps,[["render",hs],["__file","select.vue"]]);const gs=H({name:"ElOptionGroup",componentName:"ElOptionGroup",props:{label:String,disabled:Boolean},setup(e){const t=le("select"),s=E(null),r=Ke(),o=E([]);He(Dt,ye({...Et(e)}));const f=g(()=>o.value.some(p=>p.visible===!0)),l=p=>{var b,u;return((b=p.type)==null?void 0:b.name)==="ElOption"&&!!((u=p.component)!=null&&u.proxy)},c=p=>{const b=Vl(p),u=[];return b.forEach(m=>{var v,S;l(m)?u.push(m.component.proxy):(v=m.children)!=null&&v.length?u.push(...c(m.children)):(S=m.component)!=null&&S.subTree&&u.push(...c(m.component.subTree))}),u},i=()=>{o.value=c(r.subTree)};return ze(()=>{i()}),jl(s,i,{attributes:!0,subtree:!0,childList:!0}),{groupRef:s,visible:f,ns:t}}});function ys(e,t,s,r,o,f){return ce((O(),V("ul",{ref:"groupRef",class:y(e.ns.be("group","wrap"))},[M("li",{class:y(e.ns.be("group","title"))},x(e.label),3),M("li",null,[M("ul",{class:y(e.ns.b("group"))},[N(e.$slots,"default")],2)])],2)),[[Me,e.visible]])}var Pt=ne(gs,[["render",ys],["__file","option-group.vue"]]);const $s=Ue(bs,{Option:qe,OptionGroup:Pt}),Vs=kt(qe);kt(Pt);export{$s as E,Vs as a,Rs as c,ks as g};
