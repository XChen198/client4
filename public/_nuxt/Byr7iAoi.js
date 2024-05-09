import{_ as oe,i as k,C as K,D as ue,F as Ae,b as ve,t as Z,G as ze,g as He,a as Ee,B as q,u as Le,d as de,m as De,H as We,q as Ce,w as je,j as fe}from"./DV-9RaXj.js";import{f as z,n as w,o as A,i as he,w as Q,D as _,$ as Te,a2 as Re,j as Fe,a1 as Se,A as f,m as ee,r as E,J as be,q as U,C as pe,h as ge,X as ke,a0 as M,F as j,L as we,M as qe,N as Me,z as ye,a3 as xe,a4 as Ve,a5 as Ge,v as Je,Y as Ke,a6 as Ue,c as te,a as me,x as ne,d as Xe,t as Ye}from"./DPhSw6dP.js";import{E as $e,C as Ze}from"./CQeKHPxD.js";import{T as Qe}from"./r5W6hzzQ.js";import{f as et}from"./BMRdXg3M.js";const X=function(e,o,...n){let i;o.includes("mouse")||o.includes("click")?i="MouseEvents":o.includes("key")?i="KeyboardEvent":i="HTMLEvents";const t=document.createEvent(i);return t.initEvent(o,...n),e.dispatchEvent(t),e},tt=z({name:"ElCollapseTransition"}),nt=z({...tt,setup(e){const o=w("collapse-transition"),n=t=>{t.style.maxHeight="",t.style.overflow=t.dataset.oldOverflow,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom},i={beforeEnter(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.style.height&&(t.dataset.elExistsHeight=t.style.height),t.style.maxHeight=0,t.style.paddingTop=0,t.style.paddingBottom=0},enter(t){requestAnimationFrame(()=>{t.dataset.oldOverflow=t.style.overflow,t.dataset.elExistsHeight?t.style.maxHeight=t.dataset.elExistsHeight:t.scrollHeight!==0?t.style.maxHeight=`${t.scrollHeight}px`:t.style.maxHeight=0,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom,t.style.overflow="hidden"})},afterEnter(t){t.style.maxHeight="",t.style.overflow=t.dataset.oldOverflow},enterCancelled(t){n(t)},beforeLeave(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.dataset.oldOverflow=t.style.overflow,t.style.maxHeight=`${t.scrollHeight}px`,t.style.overflow="hidden"},leave(t){t.scrollHeight!==0&&(t.style.maxHeight=0,t.style.paddingTop=0,t.style.paddingBottom=0)},afterLeave(t){n(t)},leaveCancelled(t){n(t)}};return(t,I)=>(A(),he(Se,Te({name:Fe(o).b()},Re(i)),{default:Q(()=>[_(t.$slots,"default")]),_:3},16,["name"]))}});var Y=oe(nt,[["__file","collapse-transition.vue"]]);Y.install=e=>{e.component(Y.name,Y)};const ot=Y;let st=class{constructor(o,n){this.parent=o,this.domNode=n,this.subIndex=0,this.subIndex=0,this.init()}init(){this.subMenuItems=this.domNode.querySelectorAll("li"),this.addListeners()}gotoSubIndex(o){o===this.subMenuItems.length?o=0:o<0&&(o=this.subMenuItems.length-1),this.subMenuItems[o].focus(),this.subIndex=o}addListeners(){const o=this.parent.domNode;Array.prototype.forEach.call(this.subMenuItems,n=>{n.addEventListener("keydown",i=>{let t=!1;switch(i.code){case k.down:{this.gotoSubIndex(this.subIndex+1),t=!0;break}case k.up:{this.gotoSubIndex(this.subIndex-1),t=!0;break}case k.tab:{X(o,"mouseleave");break}case k.enter:case k.space:{t=!0,i.currentTarget.click();break}}return t&&(i.preventDefault(),i.stopPropagation()),!1})})}},at=class{constructor(o,n){this.domNode=o,this.submenu=null,this.submenu=null,this.init(n)}init(o){this.domNode.setAttribute("tabindex","0");const n=this.domNode.querySelector(`.${o}-menu`);n&&(this.submenu=new st(this,n)),this.addListeners()}addListeners(){this.domNode.addEventListener("keydown",o=>{let n=!1;switch(o.code){case k.down:{X(o.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(0),n=!0;break}case k.up:{X(o.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(this.submenu.subMenuItems.length-1),n=!0;break}case k.tab:{X(o.currentTarget,"mouseleave");break}case k.enter:case k.space:{n=!0,o.currentTarget.click();break}}n&&o.preventDefault()})}},lt=class{constructor(o,n){this.domNode=o,this.init(n)}init(o){const n=this.domNode.childNodes;Array.from(n).forEach(i=>{i.nodeType===1&&new at(i,o)})}};const ut=z({name:"ElMenuCollapseTransition",setup(){const e=w("menu");return{listeners:{onBeforeEnter:n=>n.style.opacity="0.2",onEnter(n,i){K(n,`${e.namespace.value}-opacity-transition`),n.style.opacity="1",i()},onAfterEnter(n){ue(n,`${e.namespace.value}-opacity-transition`),n.style.opacity=""},onBeforeLeave(n){n.dataset||(n.dataset={}),Ae(n,e.m("collapse"))?(ue(n,e.m("collapse")),n.dataset.oldOverflow=n.style.overflow,n.dataset.scrollWidth=n.clientWidth.toString(),K(n,e.m("collapse"))):(K(n,e.m("collapse")),n.dataset.oldOverflow=n.style.overflow,n.dataset.scrollWidth=n.clientWidth.toString(),ue(n,e.m("collapse"))),n.style.width=`${n.scrollWidth}px`,n.style.overflow="hidden"},onLeave(n){K(n,"horizontal-collapse-transition"),n.style.width=`${n.dataset.scrollWidth}px`}}}}});function it(e,o,n,i,t,I){return A(),he(Se,Te({mode:"out-in"},e.listeners),{default:Q(()=>[_(e.$slots,"default")]),_:3},16)}var rt=oe(ut,[["render",it],["__file","menu-collapse-transition.vue"]]);function Oe(e,o){const n=f(()=>{let t=e.parent;const I=[o.value];for(;t.type.name!=="ElMenu";)t.props.index&&I.unshift(t.props.index),t=t.parent;return I});return{parentMenu:f(()=>{let t=e.parent;for(;t&&!["ElMenu","ElSubMenu"].includes(t.type.name);)t=t.parent;return t}),indexPath:n}}function ct(e){return f(()=>{const n=e.backgroundColor;return n?new Qe(n).shade(20).toString():""})}const _e=(e,o)=>{const n=w("menu");return f(()=>n.cssVarBlock({"text-color":e.textColor||"","hover-text-color":e.textColor||"","bg-color":e.backgroundColor||"","hover-bg-color":ct(e).value||"","active-color":e.activeTextColor||"",level:`${o}`}))},dt=ve({index:{type:String,required:!0},showTimeout:Number,hideTimeout:Number,popperClass:String,disabled:Boolean,teleported:{type:Boolean,default:void 0},popperOffset:Number,expandCloseIcon:{type:q},expandOpenIcon:{type:q},collapseCloseIcon:{type:q},collapseOpenIcon:{type:q}}),ie="ElSubMenu";var Ie=z({name:ie,props:dt,setup(e,{slots:o,expose:n}){const i=ye(),{indexPath:t,parentMenu:I}=Oe(i,f(()=>e.index)),p=w("menu"),b=w("sub-menu"),u=ee("rootMenu");u||Z(ie,"can not inject root menu");const d=ee(`subMenu:${I.value.uid}`);d||Z(ie,"can not inject sub menu");const m=E({}),y=E({});let C;const $=E(!1),se=E(),V=E(null),N=f(()=>B.value==="horizontal"&&P.value?"bottom-start":"right-start"),H=f(()=>B.value==="horizontal"&&P.value||B.value==="vertical"&&!u.props.collapse?e.expandCloseIcon&&e.expandOpenIcon?T.value?e.expandOpenIcon:e.expandCloseIcon:ze:e.collapseCloseIcon&&e.collapseOpenIcon?T.value?e.collapseOpenIcon:e.collapseCloseIcon:He),P=f(()=>d.level===0),R=f(()=>{const l=e.teleported;return l===void 0?P.value:l}),ae=f(()=>u.props.collapse?`${p.namespace.value}-zoom-in-left`:`${p.namespace.value}-zoom-in-top`),le=f(()=>B.value==="horizontal"&&P.value?["bottom-start","bottom-end","top-start","top-end","right-start","left-start"]:["right-start","right","right-end","left-start","bottom-start","bottom-end","top-start","top-end"]),T=f(()=>u.openedMenus.includes(e.index)),L=f(()=>{let l=!1;return Object.values(m.value).forEach(c=>{c.active&&(l=!0)}),Object.values(y.value).forEach(c=>{c.active&&(l=!0)}),l}),B=f(()=>u.props.mode),D=be({index:e.index,indexPath:t,active:L}),F=_e(u.props,d.level+1),G=f(()=>{var l;return(l=e.popperOffset)!=null?l:u.props.popperOffset}),W=f(()=>{var l;return(l=e.popperClass)!=null?l:u.props.popperClass}),J=f(()=>{var l;return(l=e.showTimeout)!=null?l:u.props.showTimeout}),s=f(()=>{var l;return(l=e.hideTimeout)!=null?l:u.props.hideTimeout}),a=()=>{var l,c,g;return(g=(c=(l=V.value)==null?void 0:l.popperRef)==null?void 0:c.popperInstanceRef)==null?void 0:g.destroy()},r=l=>{l||a()},h=()=>{u.props.menuTrigger==="hover"&&u.props.mode==="horizontal"||u.props.collapse&&u.props.mode==="vertical"||e.disabled||u.handleSubMenuClick({index:e.index,indexPath:t.value,active:L.value})},v=(l,c=J.value)=>{var g;if(l.type!=="focus"){if(u.props.menuTrigger==="click"&&u.props.mode==="horizontal"||!u.props.collapse&&u.props.mode==="vertical"||e.disabled){d.mouseInChild.value=!0;return}d.mouseInChild.value=!0,C==null||C(),{stop:C}=xe(()=>{u.openMenu(e.index,t.value)},c),R.value&&((g=I.value.vnode.el)==null||g.dispatchEvent(new MouseEvent("mouseenter")))}},S=(l=!1)=>{var c;if(u.props.menuTrigger==="click"&&u.props.mode==="horizontal"||!u.props.collapse&&u.props.mode==="vertical"){d.mouseInChild.value=!1;return}C==null||C(),d.mouseInChild.value=!1,{stop:C}=xe(()=>!$.value&&u.closeMenu(e.index,t.value),s.value),R.value&&l&&((c=d.handleMouseleave)==null||c.call(d,!0))};U(()=>u.props.collapse,l=>r(!!l));{const l=g=>{y.value[g.index]=g},c=g=>{delete y.value[g.index]};pe(`subMenu:${i.uid}`,{addSubMenu:l,removeSubMenu:c,handleMouseleave:S,mouseInChild:$,level:d.level+1})}return n({opened:T}),ge(()=>{u.addSubMenu(D),d.addSubMenu(D)}),ke(()=>{d.removeSubMenu(D),u.removeSubMenu(D)}),()=>{var l;const c=[(l=o.title)==null?void 0:l.call(o),M(Ee,{class:b.e("icon-arrow"),style:{transform:T.value?e.expandCloseIcon&&e.expandOpenIcon||e.collapseCloseIcon&&e.collapseOpenIcon&&u.props.collapse?"none":"rotateZ(180deg)":"none"}},{default:()=>j(H.value)?M(i.appContext.components[H.value]):M(H.value)})],g=u.isMenuPopup?M($e,{ref:V,visible:T.value,effect:"light",pure:!0,offset:G.value,showArrow:!1,persistent:!0,popperClass:W.value,placement:N.value,teleported:R.value,fallbackPlacements:le.value,transition:ae.value,gpuAcceleration:!1},{content:()=>{var x;return M("div",{class:[p.m(B.value),p.m("popup-container"),W.value],onMouseenter:O=>v(O,100),onMouseleave:()=>S(!0),onFocus:O=>v(O,100)},[M("ul",{class:[p.b(),p.m("popup"),p.m(`popup-${N.value}`)],style:F.value},[(x=o.default)==null?void 0:x.call(o)])])},default:()=>M("div",{class:b.e("title"),onClick:h},c)}):M(Me,{},[M("div",{class:b.e("title"),ref:se,onClick:h},c),M(ot,{},{default:()=>{var x;return we(M("ul",{role:"menu",class:[p.b(),p.m("inline")],style:F.value},[(x=o.default)==null?void 0:x.call(o)]),[[qe,T.value]])}})]);return M("li",{class:[b.b(),b.is("active",L.value),b.is("opened",T.value),b.is("disabled",e.disabled)],role:"menuitem",ariaHaspopup:!0,ariaExpanded:T.value,onMouseenter:v,onMouseleave:()=>S(),onFocus:v},[g])}}});const pt=ve({mode:{type:String,values:["horizontal","vertical"],default:"vertical"},defaultActive:{type:String,default:""},defaultOpeneds:{type:de(Array),default:()=>De([])},uniqueOpened:Boolean,router:Boolean,menuTrigger:{type:String,values:["hover","click"],default:"hover"},collapse:Boolean,backgroundColor:String,textColor:String,activeTextColor:String,closeOnClickOutside:Boolean,collapseTransition:{type:Boolean,default:!0},ellipsis:{type:Boolean,default:!0},popperOffset:{type:Number,default:6},ellipsisIcon:{type:q,default:()=>We},popperEffect:{type:String,values:["dark","light"],default:"dark"},popperClass:String,showTimeout:{type:Number,default:300},hideTimeout:{type:Number,default:300}}),re=e=>Array.isArray(e)&&e.every(o=>j(o)),mt={close:(e,o)=>j(e)&&re(o),open:(e,o)=>j(e)&&re(o),select:(e,o,n,i)=>j(e)&&re(o)&&Ge(n)&&(i===void 0||i instanceof Promise)};var vt=z({name:"ElMenu",props:pt,emits:mt,setup(e,{emit:o,slots:n,expose:i}){const t=ye(),I=t.appContext.config.globalProperties.$router,p=E(),b=w("menu"),u=w("sub-menu"),d=E(-1),m=E(e.defaultOpeneds&&!e.collapse?e.defaultOpeneds.slice(0):[]),y=E(e.defaultActive),C=E({}),$=E({}),se=f(()=>e.mode==="horizontal"||e.mode==="vertical"&&e.collapse),V=()=>{const s=y.value&&C.value[y.value];if(!s||e.mode==="horizontal"||e.collapse)return;s.indexPath.forEach(r=>{const h=$.value[r];h&&N(r,h.indexPath)})},N=(s,a)=>{m.value.includes(s)||(e.uniqueOpened&&(m.value=m.value.filter(r=>a.includes(r))),m.value.push(s),o("open",s,a))},H=s=>{const a=m.value.indexOf(s);a!==-1&&m.value.splice(a,1)},P=(s,a)=>{H(s),o("close",s,a)},R=({index:s,indexPath:a})=>{m.value.includes(s)?P(s,a):N(s,a)},ae=s=>{(e.mode==="horizontal"||e.collapse)&&(m.value=[]);const{index:a,indexPath:r}=s;if(!(Ce(a)||Ce(r)))if(e.router&&I){const h=s.route||a,v=I.push(h).then(S=>(S||(y.value=a),S));o("select",a,r,{index:a,indexPath:r,route:h},v)}else y.value=a,o("select",a,r,{index:a,indexPath:r})},le=s=>{const a=C.value,r=a[s]||y.value&&a[y.value]||a[e.defaultActive];r?y.value=r.index:y.value=s},T=s=>{const a=getComputedStyle(s),r=Number.parseInt(a.marginLeft,10),h=Number.parseInt(a.marginRight,10);return s.offsetWidth+r+h||0},L=()=>{var s,a;if(!p.value)return-1;const r=Array.from((a=(s=p.value)==null?void 0:s.childNodes)!=null?a:[]).filter(O=>O.nodeName!=="#comment"&&(O.nodeName!=="#text"||O.nodeValue)),h=64,v=getComputedStyle(p.value),S=Number.parseInt(v.paddingLeft,10),l=Number.parseInt(v.paddingRight,10),c=p.value.clientWidth-S-l;let g=0,x=0;return r.forEach((O,Be)=>{g+=T(O),g<=c-h&&(x=Be+1)}),x===r.length?-1:x},B=s=>$.value[s].indexPath,D=(s,a=33.34)=>{let r;return()=>{r&&clearTimeout(r),r=setTimeout(()=>{s()},a)}};let F=!0;const G=()=>{if(d.value===L())return;const s=()=>{d.value=-1,Je(()=>{d.value=L()})};F?s():D(s)(),F=!1};U(()=>e.defaultActive,s=>{C.value[s]||(y.value=""),le(s)}),U(()=>e.collapse,s=>{s&&(m.value=[])}),U(C.value,V);let W;Ve(()=>{e.mode==="horizontal"&&e.ellipsis?W=Le(p,G).stop:W==null||W()});const J=E(!1);{const s=v=>{$.value[v.index]=v},a=v=>{delete $.value[v.index]};pe("rootMenu",be({props:e,openedMenus:m,items:C,subMenus:$,activeIndex:y,isMenuPopup:se,addMenuItem:v=>{C.value[v.index]=v},removeMenuItem:v=>{delete C.value[v.index]},addSubMenu:s,removeSubMenu:a,openMenu:N,closeMenu:P,handleMenuItemClick:ae,handleSubMenuClick:R})),pe(`subMenu:${t.uid}`,{addSubMenu:s,removeSubMenu:a,mouseInChild:J,level:0})}return ge(()=>{e.mode==="horizontal"&&new lt(t.vnode.el,b.namespace.value)}),i({open:a=>{const{indexPath:r}=$.value[a];r.forEach(h=>N(h,r))},close:H,handleResize:G}),()=>{var s,a;let r=(a=(s=n.default)==null?void 0:s.call(n))!=null?a:[];const h=[];if(e.mode==="horizontal"&&p.value){const c=et(r),g=d.value===-1?c:c.slice(0,d.value),x=d.value===-1?[]:c.slice(d.value);x!=null&&x.length&&e.ellipsis&&(r=g,h.push(M(Ie,{index:"sub-menu-more",class:u.e("hide-arrow"),popperOffset:e.popperOffset},{title:()=>M(Ee,{class:u.e("icon-more")},{default:()=>M(e.ellipsisIcon)}),default:()=>x})))}const v=_e(e,0),S=e.closeOnClickOutside?[[Ze,()=>{m.value.length&&(J.value||(m.value.forEach(c=>o("close",c,B(c))),m.value=[]))}]]:[],l=we(M("ul",{key:String(e.collapse),role:"menubar",ref:p,style:v.value,class:{[b.b()]:!0,[b.m(e.mode)]:!0,[b.m("collapse")]:e.collapse}},[...r,...h]),S);return e.collapseTransition&&e.mode==="vertical"?M(rt,()=>l):l}}});const ft=ve({index:{type:de([String,null]),default:null},route:{type:de([String,Object])},disabled:Boolean}),ht={click:e=>j(e.index)&&Array.isArray(e.indexPath)},ce="ElMenuItem",bt=z({name:ce,components:{ElTooltip:$e},props:ft,emits:ht,setup(e,{emit:o}){const n=ye(),i=ee("rootMenu"),t=w("menu"),I=w("menu-item");i||Z(ce,"can not inject root menu");const{parentMenu:p,indexPath:b}=Oe(n,Ke(e,"index")),u=ee(`subMenu:${p.value.uid}`);u||Z(ce,"can not inject sub menu");const d=f(()=>e.index===i.activeIndex),m=be({index:e.index,indexPath:b,active:d}),y=()=>{e.disabled||(i.handleMenuItemClick({index:e.index,indexPath:b.value,route:e.route}),o("click",m))};return ge(()=>{u.addSubMenu(m),i.addMenuItem(m)}),ke(()=>{u.removeSubMenu(m),i.removeMenuItem(m)}),{parentMenu:p,rootMenu:i,active:d,nsMenu:t,nsMenuItem:I,handleClick:y}}});function gt(e,o,n,i,t,I){const p=Ue("el-tooltip");return A(),te("li",{class:ne([e.nsMenuItem.b(),e.nsMenuItem.is("active",e.active),e.nsMenuItem.is("disabled",e.disabled)]),role:"menuitem",tabindex:"-1",onClick:o[0]||(o[0]=(...b)=>e.handleClick&&e.handleClick(...b))},[e.parentMenu.type.name==="ElMenu"&&e.rootMenu.props.collapse&&e.$slots.title?(A(),he(p,{key:0,effect:e.rootMenu.props.popperEffect,placement:"right","fallback-placements":["left"],persistent:""},{content:Q(()=>[_(e.$slots,"title")]),default:Q(()=>[me("div",{class:ne(e.nsMenu.be("tooltip","trigger"))},[_(e.$slots,"default")],2)]),_:3},8,["effect"])):(A(),te(Me,{key:1},[_(e.$slots,"default"),_(e.$slots,"title")],64))],2)}var Ne=oe(bt,[["render",gt],["__file","menu-item.vue"]]);const Mt={title:String},yt="ElMenuItemGroup",It=z({name:yt,props:Mt,setup(){return{ns:w("menu-item-group")}}});function Ct(e,o,n,i,t,I){return A(),te("li",{class:ne(e.ns.b())},[me("div",{class:ne(e.ns.e("title"))},[e.$slots.title?_(e.$slots,"title",{key:1}):(A(),te(Me,{key:0},[Xe(Ye(e.title),1)],64))],2),me("ul",null,[_(e.$slots,"default")])],2)}var Pe=oe(It,[["render",Ct],["__file","menu-item-group.vue"]]);const _t=je(vt,{MenuItem:Ne,MenuItemGroup:Pe,SubMenu:Ie}),Nt=fe(Ne);fe(Pe);const Pt=fe(Ie);export{Nt as E,Pt as a,_t as b};
