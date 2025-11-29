import{j as C,r as A,d as oa,g as aa,H as la}from"./app-CJCVARNj.js";import{u as ca,G as ha,d as ua,l as da,M as fa,I as pa}from"./esm-3NOLTqn_.js";import{B as Et,u as ht,c as ir}from"./app-logo-icon-BeDNOJ6m.js";import{C as sr,c as rr,a as _a,b as ma,d as ga}from"./card-ZgvQFN3w.js";import{C as va}from"./car-DQpB9OvT.js";import{U as ya}from"./users-DSRqZGMI.js";import{B as or}from"./badge-BdEkYunb.js";import{D as Ca,e as Ea,a as wa,b as ba,c as Sa,f as Ia}from"./dialog-ZFwspdSP.js";import{L as ar}from"./label-JrOw2ca1.js";import{S as xa,a as Ta,b as Na,c as Ra,d as An,e as Aa}from"./select-B0vd_qu1.js";import{T as Pa,S as Da,u as ka,i as Ve,a as Ma}from"./app-layout-Dy8GBmGi.js";import{M as Oa}from"./map-pin-C95MauxI.js";import{R as La}from"./refresh-cw-CfzjPfyz.js";import{c as lr}from"./createLucideIcon-CM6y0crb.js";import{T as Fa,a as Ba,b as Ki,c as Qi}from"./tabs-Cw_weiab.js";import{P as Bt}from"./index-iIk5azCI.js";import{c as Wa,P as gn,a as ze,d as Ha}from"./index-BDGEmB7i.js";import{S as ja}from"./separator-DvkxnkPU.js";/* empty css            */import"./index-DZaF1fJo.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ua=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Va=lr("Layers",Ua);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ya=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],za=lr("Maximize",Ya),qa={width:"100%",height:"100%"},$a={lat:10.6676,lng:122.9456},Ga=["places"];function Xa({theme:n,drivers:e}){const{isLoaded:t}=ca({googleMapsApiKey:"AIzaSyAicbS4J0S5M2DRMdOsImk3FGYFb8tJCPY",libraries:Ga});return t?C.jsx("div",{className:"h-full w-full",children:C.jsx(ha,{mapContainerStyle:qa,center:$a,zoom:12,options:{mapTypeId:n==="satellite"?"satellite":"roadmap",styles:n==="dark"?ua:n==="light"?da:[],disableDefaultUI:!0,zoomControl:!0,gestureHandling:"greedy"},children:e.map(i=>C.jsx(fa,{position:{lat:i.latitude,lng:i.longitude},label:"🚍"},i.drivers_id))})}):C.jsxs("div",{className:"relative h-[450px] flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden",children:[C.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"}),C.jsx("span",{className:"absolute mt-16 text-gray-700 dark:text-gray-200",children:"Loading map..."})]})}function Ka({theme:n,drivers:e,showDrivers:t}){return C.jsxs("div",{className:"flex-1 relative",children:[C.jsx(sr,{className:"h-full rounded-none border-t-0 border-r-0",children:C.jsx(rr,{className:"p-0 h-full",children:C.jsx(Xa,{theme:n,drivers:t?e:[]})})}),C.jsxs("div",{className:"absolute top-4 right-4 flex flex-col gap-2",children:[C.jsx(Et,{size:"sm",variant:"secondary",className:"shadow-lg",children:C.jsx(va,{className:"h-4 w-4"})}),C.jsx(Et,{size:"sm",variant:"secondary",className:"shadow-lg",children:C.jsx(ya,{className:"h-4 w-4"})})]})]})}function Qa({isFullScreen:n,handleFullscreen:e,handleRefresh:t,theme:i,setTheme:s}){return C.jsx("div",{className:"flex flex-col gap-4 p-4 bg-background border-b",children:C.jsxs("div",{className:"flex items-center justify-between",children:[C.jsxs("div",{className:"flex items-center gap-3",children:[C.jsx("div",{className:"p-2.5 bg-primary rounded-xl",children:C.jsx(Oa,{className:"h-6 w-6 text-primary-foreground"})}),C.jsxs("div",{children:[C.jsx(Pa,{size:"xl",weight:"bold",children:"Driver Tracker"}),C.jsxs(or,{variant:"secondary",className:"bg-primary text-primary-foreground",children:[C.jsx("div",{className:"w-2 h-2 bg-primary-foreground rounded-full animate-pulse"}),"Live Data"]})]})]}),C.jsxs("div",{className:"flex items-center gap-2",children:[C.jsxs(Et,{variant:"outline",size:"sm",onClick:t,children:[C.jsx(La,{className:"h-4 w-4 mr-2"}),"Refresh"]}),C.jsxs(Ca,{children:[C.jsx(Ea,{asChild:!0,children:C.jsxs(Et,{variant:"outline",size:"sm",children:[C.jsx(Da,{className:"h-4 w-4 mr-2"}),"Settings"]})}),C.jsxs(wa,{children:[C.jsxs(ba,{children:[C.jsx(Sa,{children:"Map Settings"}),C.jsx(Ia,{children:"Configure map display options and preferences"})]}),C.jsx("div",{className:"grid gap-4 py-4",children:C.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[C.jsx(ar,{htmlFor:"theme",className:"text-right",children:"Theme"}),C.jsxs(xa,{defaultValue:"light",value:i,onValueChange:s,children:[C.jsx(Ta,{className:"col-span-3",children:C.jsx(Na,{})}),C.jsxs(Ra,{children:[C.jsx(An,{value:"light",children:"Light"}),C.jsx(An,{value:"dark",children:"Dark"}),C.jsx(An,{value:"satellite",children:"Satellite"})]})]})]})})]})]}),C.jsxs(Et,{variant:"outline",size:"sm",onClick:e,children:[C.jsx(za,{className:"h-4 w-4 mr-2"}),n?"Exit":"Fullscreen"]})]})]})})}function Ja(n,e){return A.useReducer((t,i)=>e[t][i]??t,n)}var ui="ScrollArea",[cr,ap]=Wa(ui),[Za,Ce]=cr(ui),hr=A.forwardRef((n,e)=>{const{__scopeScrollArea:t,type:i="hover",dir:s,scrollHideDelay:r=600,...o}=n,[a,l]=A.useState(null),[c,d]=A.useState(null),[f,h]=A.useState(null),[v,b]=A.useState(null),[N,P]=A.useState(null),[L,p]=A.useState(0),[g,u]=A.useState(0),[_,m]=A.useState(!1),[y,w]=A.useState(!1),E=ht(e,x=>l(x)),S=ka(s);return C.jsx(Za,{scope:t,type:i,dir:S,scrollHideDelay:r,scrollArea:a,viewport:c,onViewportChange:d,content:f,onContentChange:h,scrollbarX:v,onScrollbarXChange:b,scrollbarXEnabled:_,onScrollbarXEnabledChange:m,scrollbarY:N,onScrollbarYChange:P,scrollbarYEnabled:y,onScrollbarYEnabledChange:w,onCornerWidthChange:p,onCornerHeightChange:u,children:C.jsx(Bt.div,{dir:S,...o,ref:E,style:{position:"relative","--radix-scroll-area-corner-width":L+"px","--radix-scroll-area-corner-height":g+"px",...n.style}})})});hr.displayName=ui;var ur="ScrollAreaViewport",dr=A.forwardRef((n,e)=>{const{__scopeScrollArea:t,children:i,nonce:s,...r}=n,o=Ce(ur,t),a=A.useRef(null),l=ht(e,a,o.onViewportChange);return C.jsxs(C.Fragment,{children:[C.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"},nonce:s}),C.jsx(Bt.div,{"data-radix-scroll-area-viewport":"",...r,ref:l,style:{overflowX:o.scrollbarXEnabled?"scroll":"hidden",overflowY:o.scrollbarYEnabled?"scroll":"hidden",...n.style},children:C.jsx("div",{ref:o.onContentChange,style:{minWidth:"100%",display:"table"},children:i})})]})});dr.displayName=ur;var Ne="ScrollAreaScrollbar",di=A.forwardRef((n,e)=>{const{forceMount:t,...i}=n,s=Ce(Ne,n.__scopeScrollArea),{onScrollbarXEnabledChange:r,onScrollbarYEnabledChange:o}=s,a=n.orientation==="horizontal";return A.useEffect(()=>(a?r(!0):o(!0),()=>{a?r(!1):o(!1)}),[a,r,o]),s.type==="hover"?C.jsx(el,{...i,ref:e,forceMount:t}):s.type==="scroll"?C.jsx(tl,{...i,ref:e,forceMount:t}):s.type==="auto"?C.jsx(fr,{...i,ref:e,forceMount:t}):s.type==="always"?C.jsx(fi,{...i,ref:e}):null});di.displayName=Ne;var el=A.forwardRef((n,e)=>{const{forceMount:t,...i}=n,s=Ce(Ne,n.__scopeScrollArea),[r,o]=A.useState(!1);return A.useEffect(()=>{const a=s.scrollArea;let l=0;if(a){const c=()=>{window.clearTimeout(l),o(!0)},d=()=>{l=window.setTimeout(()=>o(!1),s.scrollHideDelay)};return a.addEventListener("pointerenter",c),a.addEventListener("pointerleave",d),()=>{window.clearTimeout(l),a.removeEventListener("pointerenter",c),a.removeEventListener("pointerleave",d)}}},[s.scrollArea,s.scrollHideDelay]),C.jsx(gn,{present:t||r,children:C.jsx(fr,{"data-state":r?"visible":"hidden",...i,ref:e})})}),tl=A.forwardRef((n,e)=>{const{forceMount:t,...i}=n,s=Ce(Ne,n.__scopeScrollArea),r=n.orientation==="horizontal",o=yn(()=>l("SCROLL_END"),100),[a,l]=Ja("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return A.useEffect(()=>{if(a==="idle"){const c=window.setTimeout(()=>l("HIDE"),s.scrollHideDelay);return()=>window.clearTimeout(c)}},[a,s.scrollHideDelay,l]),A.useEffect(()=>{const c=s.viewport,d=r?"scrollLeft":"scrollTop";if(c){let f=c[d];const h=()=>{const v=c[d];f!==v&&(l("SCROLL"),o()),f=v};return c.addEventListener("scroll",h),()=>c.removeEventListener("scroll",h)}},[s.viewport,r,l,o]),C.jsx(gn,{present:t||a!=="hidden",children:C.jsx(fi,{"data-state":a==="hidden"?"hidden":"visible",...i,ref:e,onPointerEnter:ze(n.onPointerEnter,()=>l("POINTER_ENTER")),onPointerLeave:ze(n.onPointerLeave,()=>l("POINTER_LEAVE"))})})}),fr=A.forwardRef((n,e)=>{const t=Ce(Ne,n.__scopeScrollArea),{forceMount:i,...s}=n,[r,o]=A.useState(!1),a=n.orientation==="horizontal",l=yn(()=>{if(t.viewport){const c=t.viewport.offsetWidth<t.viewport.scrollWidth,d=t.viewport.offsetHeight<t.viewport.scrollHeight;o(a?c:d)}},10);return rt(t.viewport,l),rt(t.content,l),C.jsx(gn,{present:i||r,children:C.jsx(fi,{"data-state":r?"visible":"hidden",...s,ref:e})})}),fi=A.forwardRef((n,e)=>{const{orientation:t="vertical",...i}=n,s=Ce(Ne,n.__scopeScrollArea),r=A.useRef(null),o=A.useRef(0),[a,l]=A.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),c=vr(a.viewport,a.content),d={...i,sizes:a,onSizesChange:l,hasThumb:c>0&&c<1,onThumbChange:h=>r.current=h,onThumbPointerUp:()=>o.current=0,onThumbPointerDown:h=>o.current=h};function f(h,v){return al(h,o.current,a,v)}return t==="horizontal"?C.jsx(nl,{...d,ref:e,onThumbPositionChange:()=>{if(s.viewport&&r.current){const h=s.viewport.scrollLeft,v=Ji(h,a,s.dir);r.current.style.transform=`translate3d(${v}px, 0, 0)`}},onWheelScroll:h=>{s.viewport&&(s.viewport.scrollLeft=h)},onDragScroll:h=>{s.viewport&&(s.viewport.scrollLeft=f(h,s.dir))}}):t==="vertical"?C.jsx(il,{...d,ref:e,onThumbPositionChange:()=>{if(s.viewport&&r.current){const h=s.viewport.scrollTop,v=Ji(h,a);r.current.style.transform=`translate3d(0, ${v}px, 0)`}},onWheelScroll:h=>{s.viewport&&(s.viewport.scrollTop=h)},onDragScroll:h=>{s.viewport&&(s.viewport.scrollTop=f(h))}}):null}),nl=A.forwardRef((n,e)=>{const{sizes:t,onSizesChange:i,...s}=n,r=Ce(Ne,n.__scopeScrollArea),[o,a]=A.useState(),l=A.useRef(null),c=ht(e,l,r.onScrollbarXChange);return A.useEffect(()=>{l.current&&a(getComputedStyle(l.current))},[l]),C.jsx(_r,{"data-orientation":"horizontal",...s,ref:c,sizes:t,style:{bottom:0,left:r.dir==="rtl"?"var(--radix-scroll-area-corner-width)":0,right:r.dir==="ltr"?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":vn(t)+"px",...n.style},onThumbPointerDown:d=>n.onThumbPointerDown(d.x),onDragScroll:d=>n.onDragScroll(d.x),onWheelScroll:(d,f)=>{if(r.viewport){const h=r.viewport.scrollLeft+d.deltaX;n.onWheelScroll(h),Cr(h,f)&&d.preventDefault()}},onResize:()=>{l.current&&r.viewport&&o&&i({content:r.viewport.scrollWidth,viewport:r.viewport.offsetWidth,scrollbar:{size:l.current.clientWidth,paddingStart:Jt(o.paddingLeft),paddingEnd:Jt(o.paddingRight)}})}})}),il=A.forwardRef((n,e)=>{const{sizes:t,onSizesChange:i,...s}=n,r=Ce(Ne,n.__scopeScrollArea),[o,a]=A.useState(),l=A.useRef(null),c=ht(e,l,r.onScrollbarYChange);return A.useEffect(()=>{l.current&&a(getComputedStyle(l.current))},[l]),C.jsx(_r,{"data-orientation":"vertical",...s,ref:c,sizes:t,style:{top:0,right:r.dir==="ltr"?0:void 0,left:r.dir==="rtl"?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":vn(t)+"px",...n.style},onThumbPointerDown:d=>n.onThumbPointerDown(d.y),onDragScroll:d=>n.onDragScroll(d.y),onWheelScroll:(d,f)=>{if(r.viewport){const h=r.viewport.scrollTop+d.deltaY;n.onWheelScroll(h),Cr(h,f)&&d.preventDefault()}},onResize:()=>{l.current&&r.viewport&&o&&i({content:r.viewport.scrollHeight,viewport:r.viewport.offsetHeight,scrollbar:{size:l.current.clientHeight,paddingStart:Jt(o.paddingTop),paddingEnd:Jt(o.paddingBottom)}})}})}),[sl,pr]=cr(Ne),_r=A.forwardRef((n,e)=>{const{__scopeScrollArea:t,sizes:i,hasThumb:s,onThumbChange:r,onThumbPointerUp:o,onThumbPointerDown:a,onThumbPositionChange:l,onDragScroll:c,onWheelScroll:d,onResize:f,...h}=n,v=Ce(Ne,t),[b,N]=A.useState(null),P=ht(e,E=>N(E)),L=A.useRef(null),p=A.useRef(""),g=v.viewport,u=i.content-i.viewport,_=Ve(d),m=Ve(l),y=yn(f,10);function w(E){if(L.current){const S=E.clientX-L.current.left,x=E.clientY-L.current.top;c({x:S,y:x})}}return A.useEffect(()=>{const E=S=>{const x=S.target;b?.contains(x)&&_(S,u)};return document.addEventListener("wheel",E,{passive:!1}),()=>document.removeEventListener("wheel",E,{passive:!1})},[g,b,u,_]),A.useEffect(m,[i,m]),rt(b,y),rt(v.content,y),C.jsx(sl,{scope:t,scrollbar:b,hasThumb:s,onThumbChange:Ve(r),onThumbPointerUp:Ve(o),onThumbPositionChange:m,onThumbPointerDown:Ve(a),children:C.jsx(Bt.div,{...h,ref:P,style:{position:"absolute",...h.style},onPointerDown:ze(n.onPointerDown,E=>{E.button===0&&(E.target.setPointerCapture(E.pointerId),L.current=b.getBoundingClientRect(),p.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",v.viewport&&(v.viewport.style.scrollBehavior="auto"),w(E))}),onPointerMove:ze(n.onPointerMove,w),onPointerUp:ze(n.onPointerUp,E=>{const S=E.target;S.hasPointerCapture(E.pointerId)&&S.releasePointerCapture(E.pointerId),document.body.style.webkitUserSelect=p.current,v.viewport&&(v.viewport.style.scrollBehavior=""),L.current=null})})})}),Qt="ScrollAreaThumb",mr=A.forwardRef((n,e)=>{const{forceMount:t,...i}=n,s=pr(Qt,n.__scopeScrollArea);return C.jsx(gn,{present:t||s.hasThumb,children:C.jsx(rl,{ref:e,...i})})}),rl=A.forwardRef((n,e)=>{const{__scopeScrollArea:t,style:i,...s}=n,r=Ce(Qt,t),o=pr(Qt,t),{onThumbPositionChange:a}=o,l=ht(e,f=>o.onThumbChange(f)),c=A.useRef(void 0),d=yn(()=>{c.current&&(c.current(),c.current=void 0)},100);return A.useEffect(()=>{const f=r.viewport;if(f){const h=()=>{if(d(),!c.current){const v=ll(f,a);c.current=v,a()}};return a(),f.addEventListener("scroll",h),()=>f.removeEventListener("scroll",h)}},[r.viewport,d,a]),C.jsx(Bt.div,{"data-state":o.hasThumb?"visible":"hidden",...s,ref:l,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...i},onPointerDownCapture:ze(n.onPointerDownCapture,f=>{const v=f.target.getBoundingClientRect(),b=f.clientX-v.left,N=f.clientY-v.top;o.onThumbPointerDown({x:b,y:N})}),onPointerUp:ze(n.onPointerUp,o.onThumbPointerUp)})});mr.displayName=Qt;var pi="ScrollAreaCorner",gr=A.forwardRef((n,e)=>{const t=Ce(pi,n.__scopeScrollArea),i=!!(t.scrollbarX&&t.scrollbarY);return t.type!=="scroll"&&i?C.jsx(ol,{...n,ref:e}):null});gr.displayName=pi;var ol=A.forwardRef((n,e)=>{const{__scopeScrollArea:t,...i}=n,s=Ce(pi,t),[r,o]=A.useState(0),[a,l]=A.useState(0),c=!!(r&&a);return rt(s.scrollbarX,()=>{const d=s.scrollbarX?.offsetHeight||0;s.onCornerHeightChange(d),l(d)}),rt(s.scrollbarY,()=>{const d=s.scrollbarY?.offsetWidth||0;s.onCornerWidthChange(d),o(d)}),c?C.jsx(Bt.div,{...i,ref:e,style:{width:r,height:a,position:"absolute",right:s.dir==="ltr"?0:void 0,left:s.dir==="rtl"?0:void 0,bottom:0,...n.style}}):null});function Jt(n){return n?parseInt(n,10):0}function vr(n,e){const t=n/e;return isNaN(t)?0:t}function vn(n){const e=vr(n.viewport,n.content),t=n.scrollbar.paddingStart+n.scrollbar.paddingEnd,i=(n.scrollbar.size-t)*e;return Math.max(i,18)}function al(n,e,t,i="ltr"){const s=vn(t),r=s/2,o=e||r,a=s-o,l=t.scrollbar.paddingStart+o,c=t.scrollbar.size-t.scrollbar.paddingEnd-a,d=t.content-t.viewport,f=i==="ltr"?[0,d]:[d*-1,0];return yr([l,c],f)(n)}function Ji(n,e,t="ltr"){const i=vn(e),s=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,r=e.scrollbar.size-s,o=e.content-e.viewport,a=r-i,l=t==="ltr"?[0,o]:[o*-1,0],c=Aa(n,l);return yr([0,o],[0,a])(c)}function yr(n,e){return t=>{if(n[0]===n[1]||e[0]===e[1])return e[0];const i=(e[1]-e[0])/(n[1]-n[0]);return e[0]+i*(t-n[0])}}function Cr(n,e){return n>0&&n<e}var ll=(n,e=()=>{})=>{let t={left:n.scrollLeft,top:n.scrollTop},i=0;return(function s(){const r={left:n.scrollLeft,top:n.scrollTop},o=t.left!==r.left,a=t.top!==r.top;(o||a)&&e(),t=r,i=window.requestAnimationFrame(s)})(),()=>window.cancelAnimationFrame(i)};function yn(n,e){const t=Ve(n),i=A.useRef(0);return A.useEffect(()=>()=>window.clearTimeout(i.current),[]),A.useCallback(()=>{window.clearTimeout(i.current),i.current=window.setTimeout(t,e)},[t,e])}function rt(n,e){const t=Ve(e);Ha(()=>{let i=0;if(n){const s=new ResizeObserver(()=>{cancelAnimationFrame(i),i=window.requestAnimationFrame(t)});return s.observe(n),()=>{window.cancelAnimationFrame(i),s.unobserve(n)}}},[n,t])}var Er=hr,cl=dr,hl=gr;const zn=A.forwardRef(({className:n,children:e,...t},i)=>C.jsxs(Er,{ref:i,className:ir("relative overflow-hidden",n),...t,children:[C.jsx(cl,{className:"h-full w-full rounded-[inherit]",children:e}),C.jsx(wr,{}),C.jsx(hl,{})]}));zn.displayName=Er.displayName;const wr=A.forwardRef(({className:n,orientation:e="vertical",...t},i)=>C.jsx(di,{ref:i,orientation:e,className:ir("flex touch-none select-none transition-colors",e==="vertical"&&"h-full w-2.5 border-l border-l-transparent p-[1px]",e==="horizontal"&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",n),...t,children:C.jsx(mr,{className:"relative flex-1 rounded-full bg-border"})}));wr.displayName=di.displayName;function ul({drivers:n,showDrivers:e,setShowDrivers:t,coverageArea:i}){const s=[{label:"Active Drivers",checked:e,toggle:()=>t(!e),count:n.length}];return C.jsxs(sr,{className:"w-80 rounded-none border-r border-t-0",children:[C.jsxs(_a,{className:"pb-3",children:[C.jsx(ma,{className:"text-lg",children:"Map Layers"}),C.jsx(ga,{children:"View driver locations and manage tracking layers"})]}),C.jsx(rr,{className:"pt-0",children:C.jsxs(Fa,{defaultValue:"layers",className:"w-full",children:[C.jsxs(Ba,{className:"grid w-full grid-cols-2",children:[C.jsxs(Ki,{value:"layers",children:[C.jsx(Va,{className:"h-4 w-4 mr-2"}),"Layers"]}),C.jsxs(Ki,{value:"info",children:[C.jsx(pa,{className:"h-4 w-4 mr-2"}),"Info"]})]}),C.jsx(Qi,{value:"layers",className:"mt-4",children:C.jsx(zn,{className:"h-64",children:C.jsx("div",{className:"space-y-3",children:s.map(r=>C.jsxs("div",{className:"flex items-center justify-between",children:[C.jsxs("div",{className:"flex items-center space-x-2",children:[C.jsx("input",{type:"checkbox",checked:r.checked,onChange:r.toggle,className:"rounded border-gray-300"}),C.jsx(ar,{className:"text-sm font-medium",children:r.label})]}),C.jsx(or,{variant:"outline",className:"text-xs",children:r.count})]},r.label))})})}),C.jsx(Qi,{value:"info",className:"mt-4",children:C.jsx(zn,{className:"h-64",children:C.jsxs("div",{className:"space-y-3",children:[C.jsxs("div",{className:"text-sm",children:[C.jsx("div",{className:"font-medium mb-1",children:"Coverage Area"}),C.jsxs("div",{className:"text-muted-foreground",children:[i," km²"]})]}),C.jsx(ja,{}),C.jsxs("div",{className:"text-sm",children:[C.jsx("div",{className:"font-medium mb-1",children:"Last Updated"}),C.jsx("div",{className:"text-muted-foreground",children:"2 minutes ago"})]})]})})})]})})]})}const dl=()=>{};var Zi={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=function(n,e){if(!n)throw ut(e)},ut=function(n){return new Error("Firebase Database ("+br.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},fl=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},_i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,c=l?n[s+2]:0,d=r>>2,f=(r&3)<<4|a>>4;let h=(a&15)<<2|c>>6,v=c&63;l||(v=64,o||(h=64)),i.push(t[d],t[f],t[h],t[v])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Sr(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):fl(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const f=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||c==null||f==null)throw new pl;const h=r<<2|a>>4;if(i.push(h),c!==64){const v=a<<4&240|c>>2;if(i.push(v),f!==64){const b=c<<6&192|f;i.push(b)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class pl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ir=function(n){const e=Sr(n);return _i.encodeByteArray(e,!0)},Zt=function(n){return Ir(n).replace(/\./g,"")},qn=function(n){try{return _i.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(n){return xr(void 0,n)}function xr(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!ml(t)||(n[t]=xr(n[t],e[t]));return n}function ml(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vl=()=>gl().__FIREBASE_DEFAULTS__,yl=()=>{if(typeof process>"u"||typeof Zi>"u")return;const n=Zi.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Cl=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&qn(n[1]);return e&&JSON.parse(e)},Tr=()=>{try{return dl()||vl()||yl()||Cl()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},El=n=>Tr()?.emulatorHosts?.[n],wl=n=>{const e=El(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Nr=()=>Tr()?.config;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function bl(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Zt(JSON.stringify(t)),Zt(JSON.stringify(o)),""].join(".")}const wt={};function Il(){const n={prod:[],emulator:[]};for(const e of Object.keys(wt))wt[e]?n.emulator.push(e):n.prod.push(e);return n}function xl(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let es=!1;function Tl(n,e){if(typeof window>"u"||typeof document>"u"||!gi(window.location.host)||wt[n]===e||wt[n]||es)return;wt[n]=e;function t(h){return`__firebase__banner__${h}`}const i="__firebase__banner",r=Il().prod.length>0;function o(){const h=document.getElementById(i);h&&h.remove()}function a(h){h.style.display="flex",h.style.background="#7faaf0",h.style.position="fixed",h.style.bottom="5px",h.style.left="5px",h.style.padding=".5em",h.style.borderRadius="5px",h.style.alignItems="center"}function l(h,v){h.setAttribute("width","24"),h.setAttribute("id",v),h.setAttribute("height","24"),h.setAttribute("viewBox","0 0 24 24"),h.setAttribute("fill","none"),h.style.marginLeft="-6px"}function c(){const h=document.createElement("span");return h.style.cursor="pointer",h.style.marginLeft="16px",h.style.fontSize="24px",h.innerHTML=" &times;",h.onclick=()=>{es=!0,o()},h}function d(h,v){h.setAttribute("id",v),h.innerText="Learn more",h.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",h.setAttribute("target","__blank"),h.style.paddingLeft="5px",h.style.textDecoration="underline"}function f(){const h=xl(i),v=t("text"),b=document.getElementById(v)||document.createElement("span"),N=t("learnmore"),P=document.getElementById(N)||document.createElement("a"),L=t("preprendIcon"),p=document.getElementById(L)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(h.created){const g=h.element;a(g),d(P,N);const u=c();l(p,L),g.append(p,b,P,u),document.body.appendChild(g)}r?(b.innerText="Preview backend disconnected.",p.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(p.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,b.innerText="Preview backend running in this workspace."),b.setAttribute("id",v)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Rr(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Nl())}function Rl(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Al(){return br.NODE_ADMIN===!0}function Pl(){try{return typeof indexedDB=="object"}catch{return!1}}function Dl(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl="FirebaseError";class Wt extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=kl,Object.setPrototypeOf(this,Wt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ar.prototype.create)}}class Ar{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Ml(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Wt(s,a,i)}}function Ml(n,e){return n.replace(Ol,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Ol=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(n){return JSON.parse(n)}function le(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=Nt(qn(r[0])||""),t=Nt(qn(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},Ll=function(n){const e=Pr(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Fl=function(n){const e=Pr(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function ot(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function ts(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function en(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function tn(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(ns(r)&&ns(o)){if(!tn(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function ns(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)i[f]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let f=0;f<16;f++)i[f]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let f=16;f<80;f++){const h=i[f-3]^i[f-8]^i[f-14]^i[f-16];i[f]=(h<<1|h>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,d;for(let f=0;f<80;f++){f<40?f<20?(c=a^r&(o^a),d=1518500249):(c=r^o^a,d=1859775393):f<60?(c=r&o|a&(r|o),d=2400959708):(c=r^o^a,d=3395469782);const h=(s<<5|s>>>27)+c+l+d+i[f]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=h}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function Dr(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,I(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Cn=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(n){return n&&n._delegate?n._delegate:n}class Rt{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new mi;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),i=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Vl(e))try{this.getOrInitializeService({instanceIdentifier:je})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=je){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=je){return this.instances.has(e)}getOptions(e=je){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){const i=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(i)??new Set;s.add(e),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Ul(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=je){return this.component?this.component.multipleInstances?e:je:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ul(n){return n===je?void 0:n}function Vl(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new jl(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Q||(Q={}));const zl={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},ql=Q.INFO,$l={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},Gl=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=$l[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class kr{constructor(e){this.name=e,this._logLevel=ql,this._logHandler=Gl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zl[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const Xl=(n,e)=>e.some(t=>n instanceof t);let is,ss;function Kl(){return is||(is=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ql(){return ss||(ss=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Mr=new WeakMap,$n=new WeakMap,Or=new WeakMap,Pn=new WeakMap,vi=new WeakMap;function Jl(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Oe(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Mr.set(t,n)}).catch(()=>{}),vi.set(e,n),e}function Zl(n){if($n.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});$n.set(n,e)}let Gn={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return $n.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Or.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Oe(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function ec(n){Gn=n(Gn)}function tc(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Dn(this),e,...t);return Or.set(i,e.sort?e.sort():[e]),Oe(i)}:Ql().includes(n)?function(...e){return n.apply(Dn(this),e),Oe(Mr.get(this))}:function(...e){return Oe(n.apply(Dn(this),e))}}function nc(n){return typeof n=="function"?tc(n):(n instanceof IDBTransaction&&Zl(n),Xl(n,Kl())?new Proxy(n,Gn):n)}function Oe(n){if(n instanceof IDBRequest)return Jl(n);if(Pn.has(n))return Pn.get(n);const e=nc(n);return e!==n&&(Pn.set(n,e),vi.set(e,n)),e}const Dn=n=>vi.get(n);function ic(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),a=Oe(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Oe(o.result),l.oldVersion,l.newVersion,Oe(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const sc=["get","getKey","getAll","getAllKeys","count"],rc=["put","add","delete","clear"],kn=new Map;function rs(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(kn.get(e))return kn.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=rc.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||sc.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),s&&l.done]))[0]};return kn.set(e,r),r}ec(n=>({...n,get:(e,t,i)=>rs(e,t)||n.get(e,t,i),has:(e,t)=>!!rs(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(ac(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function ac(n){return n.getComponent()?.type==="VERSION"}const Xn="@firebase/app",os="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe=new kr("@firebase/app"),lc="@firebase/app-compat",cc="@firebase/analytics-compat",hc="@firebase/analytics",uc="@firebase/app-check-compat",dc="@firebase/app-check",fc="@firebase/auth",pc="@firebase/auth-compat",_c="@firebase/database",mc="@firebase/data-connect",gc="@firebase/database-compat",vc="@firebase/functions",yc="@firebase/functions-compat",Cc="@firebase/installations",Ec="@firebase/installations-compat",wc="@firebase/messaging",bc="@firebase/messaging-compat",Sc="@firebase/performance",Ic="@firebase/performance-compat",xc="@firebase/remote-config",Tc="@firebase/remote-config-compat",Nc="@firebase/storage",Rc="@firebase/storage-compat",Ac="@firebase/firestore",Pc="@firebase/ai",Dc="@firebase/firestore-compat",kc="firebase",Mc="12.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn="[DEFAULT]",Oc={[Xn]:"fire-core",[lc]:"fire-core-compat",[hc]:"fire-analytics",[cc]:"fire-analytics-compat",[dc]:"fire-app-check",[uc]:"fire-app-check-compat",[fc]:"fire-auth",[pc]:"fire-auth-compat",[_c]:"fire-rtdb",[mc]:"fire-data-connect",[gc]:"fire-rtdb-compat",[vc]:"fire-fn",[yc]:"fire-fn-compat",[Cc]:"fire-iid",[Ec]:"fire-iid-compat",[wc]:"fire-fcm",[bc]:"fire-fcm-compat",[Sc]:"fire-perf",[Ic]:"fire-perf-compat",[xc]:"fire-rc",[Tc]:"fire-rc-compat",[Nc]:"fire-gcs",[Rc]:"fire-gcs-compat",[Ac]:"fire-fst",[Dc]:"fire-fst-compat",[Pc]:"fire-vertex","fire-js":"fire-js",[kc]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At=new Map,Lc=new Map,Qn=new Map;function as(n,e){try{n.container.addComponent(e)}catch(t){Pe.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function nn(n){const e=n.name;if(Qn.has(e))return Pe.debug(`There were multiple attempts to register component ${e}.`),!1;Qn.set(e,n);for(const t of At.values())as(t,n);for(const t of Lc.values())as(t,n);return!0}function Fc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Bc(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Le=new Ar("app","Firebase",Wc);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Rt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Le.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc=Mc;function Lr(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i={name:Kn,automaticDataCollectionEnabled:!0,...e},s=i.name;if(typeof s!="string"||!s)throw Le.create("bad-app-name",{appName:String(s)});if(t||(t=Nr()),!t)throw Le.create("no-options");const r=At.get(s);if(r){if(tn(t,r.options)&&tn(i,r.config))return r;throw Le.create("duplicate-app",{appName:s})}const o=new Yl(s);for(const l of Qn.values())o.addComponent(l);const a=new Hc(t,i,o);return At.set(s,a),a}function Uc(n=Kn){const e=At.get(n);if(!e&&n===Kn&&Nr())return Lr();if(!e)throw Le.create("no-app",{appName:n});return e}function ls(){return Array.from(At.values())}function tt(n,e,t){let i=Oc[n]??n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),r=e.match(/\s|\//);if(s||r){const o=[`Unable to register library "${i}" with version "${e}":`];s&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pe.warn(o.join(" "));return}nn(new Rt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc="firebase-heartbeat-database",Yc=1,Pt="firebase-heartbeat-store";let Mn=null;function Fr(){return Mn||(Mn=ic(Vc,Yc,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Pt)}catch(t){console.warn(t)}}}}).catch(n=>{throw Le.create("idb-open",{originalErrorMessage:n.message})})),Mn}async function zc(n){try{const t=(await Fr()).transaction(Pt),i=await t.objectStore(Pt).get(Br(n));return await t.done,i}catch(e){if(e instanceof Wt)Pe.warn(e.message);else{const t=Le.create("idb-get",{originalErrorMessage:e?.message});Pe.warn(t.message)}}}async function cs(n,e){try{const i=(await Fr()).transaction(Pt,"readwrite");await i.objectStore(Pt).put(e,Br(n)),await i.done}catch(t){if(t instanceof Wt)Pe.warn(t.message);else{const i=Le.create("idb-set",{originalErrorMessage:t?.message});Pe.warn(i.message)}}}function Br(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qc=1024,$c=30;class Gc{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Kc(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=hs();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats.length>$c){const s=Qc(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Pe.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=hs(),{heartbeatsToSend:t,unsentEntries:i}=Xc(this._heartbeatsCache.heartbeats),s=Zt(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return Pe.warn(e),""}}}function hs(){return new Date().toISOString().substring(0,10)}function Xc(n,e=qc){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),us(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),us(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Kc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Pl()?Dl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await zc(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return cs(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return cs(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function us(n){return Zt(JSON.stringify({version:2,heartbeats:n})).length}function Qc(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jc(n){nn(new Rt("platform-logger",e=>new oc(e),"PRIVATE")),nn(new Rt("heartbeat",e=>new Gc(e),"PRIVATE")),tt(Xn,os,n),tt(Xn,os,"esm2020"),tt("fire-js","")}Jc("");var ds={};const fs="@firebase/database",ps="1.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wr="";function Zc(n){Wr=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),le(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Nt(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return ke(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new eh(e)}}catch{}return new th},Ye=Hr("localStorage"),nh=Hr("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt=new kr("@firebase/database"),ih=(function(){let n=1;return function(){return n++}})(),jr=function(n){const e=Hl(n),t=new Wl;t.update(e);const i=t.digest();return _i.encodeByteArray(i)},Ht=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Ht.apply(null,i):typeof i=="object"?e+=le(i):e+=i,e+=" "}return e};let bt=null,_s=!0;const sh=function(n,e){I(!0,"Can't turn on custom loggers persistently."),nt.logLevel=Q.VERBOSE,bt=nt.log.bind(nt)},ce=function(...n){if(_s===!0&&(_s=!1,bt===null&&nh.get("logging_enabled")===!0&&sh()),bt){const e=Ht.apply(null,n);bt(e)}},jt=function(n){return function(...e){ce(n,...e)}},Jn=function(...n){const e="FIREBASE INTERNAL ERROR: "+Ht(...n);nt.error(e)},De=function(...n){const e=`FIREBASE FATAL ERROR: ${Ht(...n)}`;throw nt.error(e),new Error(e)},ye=function(...n){const e="FIREBASE WARNING: "+Ht(...n);nt.warn(e)},rh=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ye("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ur=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},oh=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},at="[MIN_NAME]",qe="[MAX_NAME]",dt=function(n,e){if(n===e)return 0;if(n===at||e===qe)return-1;if(e===at||n===qe)return 1;{const t=ms(n),i=ms(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},ah=function(n,e){return n===e?0:n<e?-1:1},_t=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+le(e))},yi=function(n){if(typeof n!="object"||n===null)return le(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=le(e[i]),t+=":",t+=yi(n[e[i]]);return t+="}",t},Vr=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function ve(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Yr=function(n){I(!Ur(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,a,l;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const d=c.join("");let f="";for(l=0;l<64;l+=8){let h=parseInt(d.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),f=f+h}return f.toLowerCase()},lh=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},ch=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function hh(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const uh=new RegExp("^-?(0*)\\d{1,10}$"),dh=-2147483648,fh=2147483647,ms=function(n){if(uh.test(n)){const e=Number(n);if(e>=dh&&e<=fh)return e}return null},Ut=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw ye("Exception was thrown by user callback.",t),e},Math.floor(0))}},ph=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},St=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Bc(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(i=>this.appCheck=i)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){ye(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(ce("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ye(e)}}class Xt{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Xt.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci="5",zr="v",qr="s",$r="r",Gr="f",Xr=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Kr="ls",Qr="p",Zn="ac",Jr="websocket",Zr="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e,t,i,s,r=!1,o="",a=!1,l=!1,c=null){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ye.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ye.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function gh(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function to(n,e,t){I(typeof e=="string","typeof type must == string"),I(typeof t=="object","typeof params must == object");let i;if(e===Jr)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Zr)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);gh(n)&&(t.ns=n.namespace);const s=[];return ve(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(){this.counters_={}}incrementCounter(e,t=1){ke(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return _l(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On={},Ln={};function Ei(n){const e=n.toString();return On[e]||(On[e]=new vh),On[e]}function yh(n,e){const t=n.toString();return Ln[t]||(Ln[t]=e()),Ln[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Ut(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs="start",Eh="close",wh="pLPCommand",bh="pRTLPCB",no="id",io="pw",so="ser",Sh="cb",Ih="seg",xh="ts",Th="d",Nh="dframe",ro=1870,oo=30,Rh=ro-oo,Ah=25e3,Ph=3e4;class Ze{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=jt(e),this.stats_=Ei(t),this.urlFn=l=>(this.appCheckToken&&(l[Zn]=this.appCheckToken),to(t,Zr,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Ch(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Ph)),oh(()=>{if(this.isClosed_)return;this.scriptTagHolder=new wi((...r)=>{const[o,a,l,c,d]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===gs)this.id=a,this.password=l;else if(o===Eh)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[gs]="t",i[so]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[Sh]=this.scriptTagHolder.uniqueCallbackIdentifier),i[zr]=Ci,this.transportSessionId&&(i[qr]=this.transportSessionId),this.lastSessionId&&(i[Kr]=this.lastSessionId),this.applicationId&&(i[Qr]=this.applicationId),this.appCheckToken&&(i[Zn]=this.appCheckToken),typeof location<"u"&&location.hostname&&Xr.test(location.hostname)&&(i[$r]=Gr);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ze.forceAllow_=!0}static forceDisallow(){Ze.forceDisallow_=!0}static isAvailable(){return Ze.forceAllow_?!0:!Ze.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!lh()&&!ch()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=le(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Ir(t),s=Vr(i,Rh);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[Nh]="t",i[no]=e,i[io]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=le(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class wi{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=ih(),window[wh+this.uniqueCallbackIdentifier]=e,window[bh+this.uniqueCallbackIdentifier]=t,this.myIFrame=wi.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ce("frame writing exception"),a.stack&&ce(a.stack),ce(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ce("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[no]=this.myID,e[io]=this.myPW,e[so]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+oo+i.length<=ro;){const o=this.pendingSegs.shift();i=i+"&"+Ih+s+"="+o.seg+"&"+xh+s+"="+o.ts+"&"+Th+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(Ah)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{ce("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh=16384,kh=45e3;let sn=null;typeof MozWebSocket<"u"?sn=MozWebSocket:typeof WebSocket<"u"&&(sn=WebSocket);class be{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=jt(this.connId),this.stats_=Ei(t),this.connURL=be.connectionURL_(t,o,a,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[zr]=Ci,typeof location<"u"&&location.hostname&&Xr.test(location.hostname)&&(o[$r]=Gr),t&&(o[qr]=t),i&&(o[Kr]=i),s&&(o[Zn]=s),r&&(o[Qr]=r),to(e,Jr,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ye.set("previous_websocket_failure",!0);try{let i;Al(),this.mySock=new sn(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){be.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&sn!==null&&!be.forceDisallow_}static previouslyFailed(){return Ye.isInMemoryStorage||Ye.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ye.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=Nt(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(I(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=le(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Vr(t,Dh);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(kh))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}be.responsesRequiredToBeHealthy=2;be.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{static get ALL_TRANSPORTS(){return[Ze,be]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=be&&be.isAvailable();let i=t&&!be.previouslyFailed();if(e.webSocketOnly&&(t||ye("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[be];else{const s=this.transports_=[];for(const r of Dt.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);Dt.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Dt.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mh=6e4,Oh=5e3,Lh=10*1024,Fh=100*1024,Fn="t",vs="d",Bh="s",ys="r",Wh="e",Cs="o",Es="a",ws="n",bs="p",Hh="h";class jh{constructor(e,t,i,s,r,o,a,l,c,d){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=jt("c:"+this.id+":"),this.transportManager_=new Dt(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=St(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Fh?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Lh?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Fn in e){const t=e[Fn];t===Es?this.upgradeIfSecondaryHealthy_():t===ys?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Cs&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=_t("t",e),i=_t("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:bs,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Es,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ws,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=_t("t",e),i=_t("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=_t(Fn,e);if(vs in e){const i=e[vs];if(t===Hh){const s={...i};this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===ws){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Bh?this.onConnectionShutdown_(i):t===ys?this.onReset_(i):t===Wh?Jn("Server Error: "+i):t===Cs?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Jn("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Ci!==i&&ye("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),St(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Mh))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):St(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Oh))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:bs,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ye.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e){this.allowedEvents_=e,this.listeners_={},I(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){I(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn extends lo{static getInstance(){return new rn}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Rr()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return I(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss=32,Is=768;class K{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function $(){return new K("")}function H(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Be(n){return n.pieces_.length-n.pieceNum_}function J(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new K(n.pieces_,e)}function co(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Uh(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function ho(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function uo(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new K(e,0)}function se(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof K)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new K(t,0)}function j(n){return n.pieceNum_>=n.pieces_.length}function me(n,e){const t=H(n),i=H(e);if(t===null)return e;if(t===i)return me(J(n),J(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function bi(n,e){if(Be(n)!==Be(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function Se(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(Be(n)>Be(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class Vh{constructor(e,t){this.errorPrefix_=t,this.parts_=ho(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Cn(this.parts_[i]);fo(this)}}function Yh(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Cn(e),fo(n)}function zh(n){const e=n.parts_.pop();n.byteLength_-=Cn(e),n.parts_.length>0&&(n.byteLength_-=1)}function fo(n){if(n.byteLength_>Is)throw new Error(n.errorPrefix_+"has a key path longer than "+Is+" bytes ("+n.byteLength_+").");if(n.parts_.length>Ss)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ss+") or object contains a cycle "+Ue(n))}function Ue(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si extends lo{static getInstance(){return new Si}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return I(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt=1e3,qh=300*1e3,xs=30*1e3,$h=1.3,Gh=3e4,Xh="server_kill",Ts=3;class Ae extends ao{constructor(e,t,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Ae.nextPersistentConnectionId_++,this.log_=jt("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=mt,this.maxReconnectDelay_=qh,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Si.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&rn.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(le(r)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new mi,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Ae.warnOnListenWarnings_(l,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&ke(e,"w")){const i=ot(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();ye(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Fl(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=xs)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Ll(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+le(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Jn("Unrecognized action received from server: "+le(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=mt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=mt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Gh&&(this.reconnectDelay_=mt),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*$h)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Ae.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(f){I(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?ce("getToken() completed but was canceled"):(ce("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=h&&h.token,a=new jh(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,v=>{ye(v+" ("+this.repoInfo_.toString()+")"),this.interrupt(Xh)},r))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&ye(f),l())}}}interrupt(e){ce("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ce("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ts(this.interruptReasons_)&&(this.reconnectDelay_=mt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>yi(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new K(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){ce("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ts&&(this.reconnectDelay_=xs,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){ce("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ts&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Wr.replace(/\./g,"-")]=1,Rr()?e["framework.cordova"]=1:Rl()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=rn.getInstance().currentlyOnline();return ts(this.interruptReasons_)&&e}}Ae.nextPersistentConnectionId_=0;Ae.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new W(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new W(at,e),s=new W(at,t);return this.compare(i,s)!==0}minPost(){return W.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qt;class po extends wn{static get __EMPTY_NODE(){return qt}static set __EMPTY_NODE(e){qt=e}compare(e,t){return dt(e.name,t.name)}isDefinedOn(e){throw ut("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return W.MIN}maxPost(){return new W(qe,qt)}makePost(e,t){return I(typeof e=="string","KeyIndex indexValue must always be a string."),new W(e,qt)}toString(){return".key"}}const it=new po;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ae{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??ae.RED,this.left=s??ge.EMPTY_NODE,this.right=r??ge.EMPTY_NODE}copy(e,t,i,s,r){return new ae(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return ge.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return ge.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ae.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ae.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ae.RED=!0;ae.BLACK=!1;class Kh{copy(e,t,i,s,r){return this}insert(e,t,i){return new ae(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ge{constructor(e,t=ge.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new ge(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,ae.BLACK,null,null))}remove(e){return new ge(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ae.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new $t(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new $t(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new $t(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new $t(this.root_,null,this.comparator_,!0,e)}}ge.EMPTY_NODE=new Kh;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qh(n,e){return dt(n.name,e.name)}function Ii(n,e){return dt(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ei;function Jh(n){ei=n}const _o=function(n){return typeof n=="number"?"number:"+Yr(n):"string:"+n},mo=function(n){if(n.isLeafNode()){const e=n.val();I(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ke(e,".sv"),"Priority must be a string or number.")}else I(n===ei||n.isEmpty(),"priority of unexpected type.");I(n===ei||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ns;class oe{static set __childrenNodeConstructor(e){Ns=e}static get __childrenNodeConstructor(){return Ns}constructor(e,t=oe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),mo(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new oe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:oe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return j(e)?this:H(e)===".priority"?this.priorityNode_:oe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:oe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=H(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(I(i!==".priority"||Be(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,oe.__childrenNodeConstructor.EMPTY_NODE.updateChild(J(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+_o(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Yr(this.value_):e+=this.value_,this.lazyHash_=jr(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===oe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof oe.__childrenNodeConstructor?-1:(I(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=oe.VALUE_TYPE_ORDER.indexOf(t),r=oe.VALUE_TYPE_ORDER.indexOf(i);return I(s>=0,"Unknown leaf type: "+t),I(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}oe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let go,vo;function Zh(n){go=n}function eu(n){vo=n}class tu extends wn{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?dt(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return W.MIN}maxPost(){return new W(qe,new oe("[PRIORITY-POST]",vo))}makePost(e,t){const i=go(e);return new W(t,new oe("[PRIORITY-POST]",i))}toString(){return".priority"}}const ne=new tu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nu=Math.log(2);class iu{constructor(e){const t=r=>parseInt(Math.log(r)/nu,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const on=function(n,e,t,i){n.sort(e);const s=function(l,c){const d=c-l;let f,h;if(d===0)return null;if(d===1)return f=n[l],h=t?t(f):f,new ae(h,f.node,ae.BLACK,null,null);{const v=parseInt(d/2,10)+l,b=s(l,v),N=s(v+1,c);return f=n[v],h=t?t(f):f,new ae(h,f.node,ae.BLACK,b,N)}},r=function(l){let c=null,d=null,f=n.length;const h=function(b,N){const P=f-b,L=f;f-=b;const p=s(P+1,L),g=n[P],u=t?t(g):g;v(new ae(u,g.node,N,null,p))},v=function(b){c?(c.left=b,c=b):(d=b,c=b)};for(let b=0;b<l.count;++b){const N=l.nextBitIsOne(),P=Math.pow(2,l.count-(b+1));N?h(P,ae.BLACK):(h(P,ae.BLACK),h(P,ae.RED))}return d},o=new iu(n.length),a=r(o);return new ge(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bn;const Je={};class Re{static get Default(){return I(Je&&ne,"ChildrenNode.ts has not been loaded"),Bn=Bn||new Re({".priority":Je},{".priority":ne}),Bn}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=ot(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof ge?t:null}hasIndex(e){return ke(this.indexSet_,e.toString())}addIndex(e,t){I(e!==it,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(W.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=on(i,e.getCompare()):a=Je;const l=e.toString(),c={...this.indexSet_};c[l]=e;const d={...this.indexes_};return d[l]=a,new Re(d,c)}addToIndexes(e,t){const i=en(this.indexes_,(s,r)=>{const o=ot(this.indexSet_,r);if(I(o,"Missing index implementation for "+r),s===Je)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(W.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),on(a,o.getCompare())}else return Je;else{const a=t.get(e.name);let l=s;return a&&(l=l.remove(new W(e.name,a))),l.insert(e,e.node)}});return new Re(i,this.indexSet_)}removeFromIndexes(e,t){const i=en(this.indexes_,s=>{if(s===Je)return s;{const r=t.get(e.name);return r?s.remove(new W(e.name,r)):s}});return new Re(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gt;class M{static get EMPTY_NODE(){return gt||(gt=new M(new ge(Ii),null,Re.Default))}constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&mo(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||gt}updatePriority(e){return this.children_.isEmpty()?this:new M(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?gt:t}}getChild(e){const t=H(e);return t===null?this:this.getImmediateChild(t).getChild(J(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(I(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new W(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?gt:this.priorityNode_;return new M(s,o,r)}}updateChild(e,t){const i=H(e);if(i===null)return t;{I(H(e)!==".priority"||Be(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(J(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(ne,(o,a)=>{t[o]=a.val(e),i++,r&&M.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+_o(this.getPriority().val())+":"),this.forEachChild(ne,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":jr(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new W(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new W(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new W(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,W.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,W.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Vt?-1:0}withIndex(e){if(e===it||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new M(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===it||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(ne),s=t.getIterator(ne);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===it?null:this.indexMap_.get(e.toString())}}M.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class su extends M{constructor(){super(new ge(Ii),M.EMPTY_NODE,Re.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return M.EMPTY_NODE}isEmpty(){return!1}}const Vt=new su;Object.defineProperties(W,{MIN:{value:new W(at,M.EMPTY_NODE)},MAX:{value:new W(qe,Vt)}});po.__EMPTY_NODE=M.EMPTY_NODE;oe.__childrenNodeConstructor=M;Jh(Vt);eu(Vt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru=!0;function he(n,e=null){if(n===null)return M.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),I(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new oe(t,he(e))}if(!(n instanceof Array)&&ru){const t=[];let i=!1;if(ve(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=he(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),t.push(new W(o,l)))}}),t.length===0)return M.EMPTY_NODE;const r=on(t,Qh,o=>o.name,Ii);if(i){const o=on(t,ne.getCompare());return new M(r,he(e),new Re({".priority":o},{".priority":ne}))}else return new M(r,he(e),Re.Default)}else{let t=M.EMPTY_NODE;return ve(n,(i,s)=>{if(ke(n,i)&&i.substring(0,1)!=="."){const r=he(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(he(e))}}Zh(he);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou extends wn{constructor(e){super(),this.indexPath_=e,I(!j(e)&&H(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?dt(e.name,t.name):r}makePost(e,t){const i=he(e),s=M.EMPTY_NODE.updateChild(this.indexPath_,i);return new W(t,s)}maxPost(){const e=M.EMPTY_NODE.updateChild(this.indexPath_,Vt);return new W(qe,e)}toString(){return ho(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au extends wn{compare(e,t){const i=e.node.compareTo(t.node);return i===0?dt(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return W.MIN}maxPost(){return W.MAX}makePost(e,t){const i=he(e);return new W(t,i)}toString(){return".value"}}const lu=new au;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(n){return{type:"value",snapshotNode:n}}function lt(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function kt(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Mt(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function cu(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){I(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(kt(t,a)):I(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(lt(t,i)):o.trackChildChange(Mt(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(ne,(s,r)=>{t.hasChild(s)||i.trackChildChange(kt(s,r))}),t.isLeafNode()||t.forEachChild(ne,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(Mt(s,r,o))}else i.trackChildChange(lt(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?M.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.indexedFilter_=new xi(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ot.getStartPost_(e),this.endPost_=Ot.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,o){return this.matches(new W(t,i))||(i=M.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=M.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(M.EMPTY_NODE);const r=this;return t.forEachChild(ne,(o,a)=>{r.matches(new W(o,a))||(s=s.updateImmediateChild(o,M.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new Ot(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new W(t,i))||(i=M.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=M.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=M.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(M.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,M.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const f=this.index_.getCompare();o=(h,v)=>f(v,h)}else o=this.index_.getCompare();const a=e;I(a.numChildren()===this.limit_,"");const l=new W(t,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(t)){const f=a.getImmediateChild(t);let h=s.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===t||a.hasChild(h.name));)h=s.getChildAfterChild(this.index_,h,this.reverse_);const v=h==null?1:o(h,l);if(d&&!i.isEmpty()&&v>=0)return r?.trackChildChange(Mt(t,i,f)),a.updateImmediateChild(t,i);{r?.trackChildChange(kt(t,f));const N=a.updateImmediateChild(t,M.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r?.trackChildChange(lt(h.name,h.node)),N.updateImmediateChild(h.name,h.node)):N}}else return i.isEmpty()?e:d&&o(c,l)>=0?(r!=null&&(r.trackChildChange(kt(c.name,c.node)),r.trackChildChange(lt(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(c.name,M.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ne}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:at}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:qe}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ne}copy(){const e=new Ti;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function uu(n){return n.loadsAllData()?new xi(n.getIndex()):n.hasLimit()?new hu(n):new Ot(n)}function Rs(n){const e={};if(n.isDefault())return e;let t;if(n.index_===ne?t="$priority":n.index_===lu?t="$value":n.index_===it?t="$key":(I(n.index_ instanceof ou,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=le(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=le(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+le(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=le(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+le(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function As(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==ne&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an extends ao{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(I(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=jt("p:rest:"),this.listens_={}}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=an.getListenId_(e,i),a={};this.listens_[o]=a;const l=Rs(e._queryParams);this.restRequest_(r+".json",l,(c,d)=>{let f=d;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(r,f,!1,i),ot(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",s(h,null)}})}unlisten(e,t){const i=an.getListenId_(e,t);delete this.listens_[i]}get(e){const t=Rs(e._queryParams),i=e._path.toString(),s=new mi;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Bl(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Nt(a.responseText)}catch{ye("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&ye("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(){this.rootNode_=M.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(){return{value:null,children:new Map}}function Co(n,e,t){if(j(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=H(e);n.children.has(i)||n.children.set(i,ln());const s=n.children.get(i);e=J(e),Co(s,e,t)}}function ti(n,e,t){n.value!==null?t(e,n.value):fu(n,(i,s)=>{const r=new K(e.toString()+"/"+i);ti(s,r,t)})}function fu(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&ve(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps=10*1e3,_u=30*1e3,mu=300*1e3;class gu{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new pu(e);const i=Ps+(_u-Ps)*Math.random();St(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;ve(e,(s,r)=>{r>0&&ke(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),St(this.reportStats_.bind(this),Math.floor(Math.random()*2*mu))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ie||(Ie={}));function Eo(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ni(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ri(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=Ie.ACK_USER_WRITE,this.source=Eo()}operationForChild(e){if(j(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new K(e));return new cn($(),t,this.revert)}}else return I(H(this.path)===e,"operationForChild called for unrelated child."),new cn(J(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e,t){this.source=e,this.path=t,this.type=Ie.LISTEN_COMPLETE}operationForChild(e){return j(this.path)?new Lt(this.source,$()):new Lt(this.source,J(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=Ie.OVERWRITE}operationForChild(e){return j(this.path)?new $e(this.source,$(),this.snap.getImmediateChild(e)):new $e(this.source,J(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=Ie.MERGE}operationForChild(e){if(j(this.path)){const t=this.children.subtree(new K(e));return t.isEmpty()?null:t.value?new $e(this.source,$(),t.value):new Ft(this.source,$(),t)}else return I(H(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ft(this.source,J(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(j(e))return this.isFullyInitialized()&&!this.filtered_;const t=H(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function yu(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(cu(o.childName,o.snapshotNode))}),vt(n,s,"child_removed",e,i,t),vt(n,s,"child_added",e,i,t),vt(n,s,"child_moved",r,i,t),vt(n,s,"child_changed",e,i,t),vt(n,s,"value",e,i,t),s}function vt(n,e,t,i,s,r){const o=i.filter(a=>a.type===t);o.sort((a,l)=>Eu(n,a,l)),o.forEach(a=>{const l=Cu(n,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function Cu(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Eu(n,e,t){if(e.childName==null||t.childName==null)throw ut("Should only compare child_ events.");const i=new W(e.childName,e.snapshotNode),s=new W(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(n,e){return{eventCache:n,serverCache:e}}function It(n,e,t,i){return bn(new Ge(e,t,i),n.serverCache)}function wo(n,e,t,i){return bn(n.eventCache,new Ge(e,t,i))}function ni(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Xe(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wn;const wu=()=>(Wn||(Wn=new ge(ah)),Wn);class Z{static fromObject(e){let t=new Z(null);return ve(e,(i,s)=>{t=t.set(new K(i),s)}),t}constructor(e,t=wu()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:$(),value:this.value};if(j(e))return null;{const i=H(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(J(e),t);return r!=null?{path:se(new K(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(j(e))return this;{const t=H(e),i=this.children.get(t);return i!==null?i.subtree(J(e)):new Z(null)}}set(e,t){if(j(e))return new Z(t,this.children);{const i=H(e),r=(this.children.get(i)||new Z(null)).set(J(e),t),o=this.children.insert(i,r);return new Z(this.value,o)}}remove(e){if(j(e))return this.children.isEmpty()?new Z(null):new Z(null,this.children);{const t=H(e),i=this.children.get(t);if(i){const s=i.remove(J(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new Z(null):new Z(this.value,r)}else return this}}get(e){if(j(e))return this.value;{const t=H(e),i=this.children.get(t);return i?i.get(J(e)):null}}setTree(e,t){if(j(e))return t;{const i=H(e),r=(this.children.get(i)||new Z(null)).setTree(J(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new Z(this.value,o)}}fold(e){return this.fold_($(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(se(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,$(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(j(e))return null;{const r=H(e),o=this.children.get(r);return o?o.findOnPath_(J(e),se(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,$(),t)}foreachOnPath_(e,t,i){if(j(e))return this;{this.value&&i(t,this.value);const s=H(e),r=this.children.get(s);return r?r.foreachOnPath_(J(e),se(t,s),i):new Z(null)}}foreach(e){this.foreach_($(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(se(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e){this.writeTree_=e}static empty(){return new xe(new Z(null))}}function xt(n,e,t){if(j(e))return new xe(new Z(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=me(s,e);return r=r.updateChild(o,t),new xe(n.writeTree_.set(s,r))}else{const s=new Z(t),r=n.writeTree_.setTree(e,s);return new xe(r)}}}function Ds(n,e,t){let i=n;return ve(t,(s,r)=>{i=xt(i,se(e,s),r)}),i}function ks(n,e){if(j(e))return xe.empty();{const t=n.writeTree_.setTree(e,new Z(null));return new xe(t)}}function ii(n,e){return Ke(n,e)!=null}function Ke(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(me(t.path,e)):null}function Ms(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(ne,(i,s)=>{e.push(new W(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new W(i,s.value))}),e}function Fe(n,e){if(j(e))return n;{const t=Ke(n,e);return t!=null?new xe(new Z(t)):new xe(n.writeTree_.subtree(e))}}function si(n){return n.writeTree_.isEmpty()}function ct(n,e){return bo($(),n.writeTree_,e)}function bo(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(I(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=bo(se(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(se(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(n,e){return To(e,n)}function bu(n,e,t,i,s){I(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=xt(n.visibleWrites,e,t)),n.lastWriteId=i}function Su(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function Iu(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);I(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&xu(a,i.path)?s=!1:Se(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return Tu(n),!0;if(i.snap)n.visibleWrites=ks(n.visibleWrites,i.path);else{const a=i.children;ve(a,l=>{n.visibleWrites=ks(n.visibleWrites,se(i.path,l))})}return!0}else return!1}function xu(n,e){if(n.snap)return Se(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Se(se(n.path,t),e))return!0;return!1}function Tu(n){n.visibleWrites=So(n.allWrites,Nu,$()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Nu(n){return n.visible}function So(n,e,t){let i=xe.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let a;if(r.snap)Se(t,o)?(a=me(t,o),i=xt(i,a,r.snap)):Se(o,t)&&(a=me(o,t),i=xt(i,$(),r.snap.getChild(a)));else if(r.children){if(Se(t,o))a=me(t,o),i=Ds(i,a,r.children);else if(Se(o,t))if(a=me(o,t),j(a))i=Ds(i,$(),r.children);else{const l=ot(r.children,H(a));if(l){const c=l.getChild(J(a));i=xt(i,$(),c)}}}else throw ut("WriteRecord should have .snap or .children")}}return i}function Io(n,e,t,i,s){if(!i&&!s){const r=Ke(n.visibleWrites,e);if(r!=null)return r;{const o=Fe(n.visibleWrites,e);if(si(o))return t;if(t==null&&!ii(o,$()))return null;{const a=t||M.EMPTY_NODE;return ct(o,a)}}}else{const r=Fe(n.visibleWrites,e);if(!s&&si(r))return t;if(!s&&t==null&&!ii(r,$()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(Se(c.path,e)||Se(e,c.path))},a=So(n.allWrites,o,e),l=t||M.EMPTY_NODE;return ct(a,l)}}}function Ru(n,e,t){let i=M.EMPTY_NODE;const s=Ke(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(ne,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=Fe(n.visibleWrites,e);return t.forEachChild(ne,(o,a)=>{const l=ct(Fe(r,new K(o)),a);i=i.updateImmediateChild(o,l)}),Ms(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Fe(n.visibleWrites,e);return Ms(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function Au(n,e,t,i,s){I(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=se(e,t);if(ii(n.visibleWrites,r))return null;{const o=Fe(n.visibleWrites,r);return si(o)?s.getChild(t):ct(o,s.getChild(t))}}function Pu(n,e,t,i){const s=se(e,t),r=Ke(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=Fe(n.visibleWrites,s);return ct(o,i.getNode().getImmediateChild(t))}else return null}function Du(n,e){return Ke(n.visibleWrites,e)}function ku(n,e,t,i,s,r,o){let a;const l=Fe(n.visibleWrites,e),c=Ke(l,$());if(c!=null)a=c;else if(t!=null)a=ct(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],f=o.getCompare(),h=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let v=h.getNext();for(;v&&d.length<s;)f(v,i)!==0&&d.push(v),v=h.getNext();return d}else return[]}function Mu(){return{visibleWrites:xe.empty(),allWrites:[],lastWriteId:-1}}function hn(n,e,t,i){return Io(n.writeTree,n.treePath,e,t,i)}function Pi(n,e){return Ru(n.writeTree,n.treePath,e)}function Os(n,e,t,i){return Au(n.writeTree,n.treePath,e,t,i)}function un(n,e){return Du(n.writeTree,se(n.treePath,e))}function Ou(n,e,t,i,s,r){return ku(n.writeTree,n.treePath,e,t,i,s,r)}function Di(n,e,t){return Pu(n.writeTree,n.treePath,e,t)}function xo(n,e){return To(se(n.treePath,e),n.writeTree)}function To(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;I(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),I(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,Mt(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,kt(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,lt(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,Mt(i,e.snapshotNode,s.oldSnap));else throw ut("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const No=new Fu;class ki{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Ge(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Di(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Xe(this.viewCache_),r=Ou(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu(n){return{filter:n}}function Wu(n,e){I(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),I(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Hu(n,e,t,i,s){const r=new Lu;let o,a;if(t.type===Ie.OVERWRITE){const c=t;c.source.fromUser?o=ri(n,e,c.path,c.snap,i,s,r):(I(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!j(c.path),o=dn(n,e,c.path,c.snap,i,s,a,r))}else if(t.type===Ie.MERGE){const c=t;c.source.fromUser?o=Uu(n,e,c.path,c.children,i,s,r):(I(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=oi(n,e,c.path,c.children,i,s,a,r))}else if(t.type===Ie.ACK_USER_WRITE){const c=t;c.revert?o=zu(n,e,c.path,i,s,r):o=Vu(n,e,c.path,c.affectedTree,i,s,r)}else if(t.type===Ie.LISTEN_COMPLETE)o=Yu(n,e,t.path,i,r);else throw ut("Unknown operation type: "+t.type);const l=r.getChanges();return ju(e,o,l),{viewCache:o,changes:l}}function ju(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=ni(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(yo(ni(e)))}}function Ro(n,e,t,i,s,r){const o=e.eventCache;if(un(i,t)!=null)return e;{let a,l;if(j(t))if(I(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Xe(e),d=c instanceof M?c:M.EMPTY_NODE,f=Pi(i,d);a=n.filter.updateFullNode(e.eventCache.getNode(),f,r)}else{const c=hn(i,Xe(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=H(t);if(c===".priority"){I(Be(t)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const f=Os(i,t,d,l);f!=null?a=n.filter.updatePriority(d,f):a=o.getNode()}else{const d=J(t);let f;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=Os(i,t,o.getNode(),l);h!=null?f=o.getNode().getImmediateChild(c).updateChild(d,h):f=o.getNode().getImmediateChild(c)}else f=Di(i,c,e.serverCache);f!=null?a=n.filter.updateChild(o.getNode(),c,f,d,s,r):a=o.getNode()}}return It(e,a,o.isFullyInitialized()||j(t),n.filter.filtersNodes())}}function dn(n,e,t,i,s,r,o,a){const l=e.serverCache;let c;const d=o?n.filter:n.filter.getIndexedFilter();if(j(t))c=d.updateFullNode(l.getNode(),i,null);else if(d.filtersNodes()&&!l.isFiltered()){const v=l.getNode().updateChild(t,i);c=d.updateFullNode(l.getNode(),v,null)}else{const v=H(t);if(!l.isCompleteForPath(t)&&Be(t)>1)return e;const b=J(t),P=l.getNode().getImmediateChild(v).updateChild(b,i);v===".priority"?c=d.updatePriority(l.getNode(),P):c=d.updateChild(l.getNode(),v,P,b,No,null)}const f=wo(e,c,l.isFullyInitialized()||j(t),d.filtersNodes()),h=new ki(s,f,r);return Ro(n,f,t,s,h,a)}function ri(n,e,t,i,s,r,o){const a=e.eventCache;let l,c;const d=new ki(s,e,r);if(j(t))c=n.filter.updateFullNode(e.eventCache.getNode(),i,o),l=It(e,c,!0,n.filter.filtersNodes());else{const f=H(t);if(f===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),i),l=It(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=J(t),v=a.getNode().getImmediateChild(f);let b;if(j(h))b=i;else{const N=d.getCompleteChild(f);N!=null?co(h)===".priority"&&N.getChild(uo(h)).isEmpty()?b=N:b=N.updateChild(h,i):b=M.EMPTY_NODE}if(v.equals(b))l=e;else{const N=n.filter.updateChild(a.getNode(),f,b,h,d,o);l=It(e,N,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function Ls(n,e){return n.eventCache.isCompleteForChild(e)}function Uu(n,e,t,i,s,r,o){let a=e;return i.foreach((l,c)=>{const d=se(t,l);Ls(e,H(d))&&(a=ri(n,a,d,c,s,r,o))}),i.foreach((l,c)=>{const d=se(t,l);Ls(e,H(d))||(a=ri(n,a,d,c,s,r,o))}),a}function Fs(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function oi(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;j(t)?c=i:c=new Z(null).setTree(t,i);const d=e.serverCache.getNode();return c.children.inorderTraversal((f,h)=>{if(d.hasChild(f)){const v=e.serverCache.getNode().getImmediateChild(f),b=Fs(n,v,h);l=dn(n,l,new K(f),b,s,r,o,a)}}),c.children.inorderTraversal((f,h)=>{const v=!e.serverCache.isCompleteForChild(f)&&h.value===null;if(!d.hasChild(f)&&!v){const b=e.serverCache.getNode().getImmediateChild(f),N=Fs(n,b,h);l=dn(n,l,new K(f),N,s,r,o,a)}}),l}function Vu(n,e,t,i,s,r,o){if(un(s,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(j(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return dn(n,e,t,l.getNode().getChild(t),s,r,a,o);if(j(t)){let c=new Z(null);return l.getNode().forEachChild(it,(d,f)=>{c=c.set(new K(d),f)}),oi(n,e,t,c,s,r,a,o)}else return e}else{let c=new Z(null);return i.foreach((d,f)=>{const h=se(t,d);l.isCompleteForPath(h)&&(c=c.set(d,l.getNode().getChild(h)))}),oi(n,e,t,c,s,r,a,o)}}function Yu(n,e,t,i,s){const r=e.serverCache,o=wo(e,r.getNode(),r.isFullyInitialized()||j(t),r.isFiltered());return Ro(n,o,t,i,No,s)}function zu(n,e,t,i,s,r){let o;if(un(i,t)!=null)return e;{const a=new ki(i,e,s),l=e.eventCache.getNode();let c;if(j(t)||H(t)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=hn(i,Xe(e));else{const f=e.serverCache.getNode();I(f instanceof M,"serverChildren would be complete if leaf node"),d=Pi(i,f)}d=d,c=n.filter.updateFullNode(l,d,r)}else{const d=H(t);let f=Di(i,d,e.serverCache);f==null&&e.serverCache.isCompleteForChild(d)&&(f=l.getImmediateChild(d)),f!=null?c=n.filter.updateChild(l,d,f,J(t),a,r):e.eventCache.getNode().hasChild(d)?c=n.filter.updateChild(l,d,M.EMPTY_NODE,J(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=hn(i,Xe(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||un(i,$())!=null,It(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new xi(i.getIndex()),r=uu(i);this.processor_=Bu(r);const o=t.serverCache,a=t.eventCache,l=s.updateFullNode(M.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(M.EMPTY_NODE,a.getNode(),null),d=new Ge(l,o.isFullyInitialized(),s.filtersNodes()),f=new Ge(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=bn(f,d),this.eventGenerator_=new vu(this.query_)}get query(){return this.query_}}function $u(n){return n.viewCache_.serverCache.getNode()}function Gu(n,e){const t=Xe(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!j(e)&&!t.getImmediateChild(H(e)).isEmpty())?t.getChild(e):null}function Bs(n){return n.eventRegistrations_.length===0}function Xu(n,e){n.eventRegistrations_.push(e)}function Ws(n,e,t){const i=[];if(t){I(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function Hs(n,e,t,i){e.type===Ie.MERGE&&e.source.queryId!==null&&(I(Xe(n.viewCache_),"We should always have a full cache before handling merges"),I(ni(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=Hu(n.processor_,s,e,t,i);return Wu(n.processor_,r.viewCache),I(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Ao(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Ku(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(ne,(r,o)=>{i.push(lt(r,o))}),t.isFullyInitialized()&&i.push(yo(t.getNode())),Ao(n,i,t.getNode(),e)}function Ao(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return yu(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fn;class Qu{constructor(){this.views=new Map}}function Ju(n){I(!fn,"__referenceConstructor has already been defined"),fn=n}function Zu(){return I(fn,"Reference.ts has not been loaded"),fn}function ed(n){return n.views.size===0}function Mi(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return I(r!=null,"SyncTree gave us an op for an invalid query."),Hs(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(Hs(o,e,t,i));return r}}function td(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=hn(t,s?i:null),l=!1;a?l=!0:i instanceof M?(a=Pi(t,i),l=!1):(a=M.EMPTY_NODE,l=!1);const c=bn(new Ge(a,l,!1),new Ge(i,s,!1));return new qu(e,c)}return o}function nd(n,e,t,i,s,r){const o=td(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Xu(o,t),Ku(o,t)}function id(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const a=We(n);if(s==="default")for(const[l,c]of n.views.entries())o=o.concat(Ws(c,t,i)),Bs(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(s);l&&(o=o.concat(Ws(l,t,i)),Bs(l)&&(n.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!We(n)&&r.push(new(Zu())(e._repo,e._path)),{removed:r,events:o}}function Po(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function st(n,e){let t=null;for(const i of n.views.values())t=t||Gu(i,e);return t}function Do(n,e){if(e._queryParams.loadsAllData())return Sn(n);{const i=e._queryIdentifier;return n.views.get(i)}}function ko(n,e){return Do(n,e)!=null}function We(n){return Sn(n)!=null}function Sn(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pn;function sd(n){I(!pn,"__referenceConstructor has already been defined"),pn=n}function rd(){return I(pn,"Reference.ts has not been loaded"),pn}let od=1;class js{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Z(null),this.pendingWriteTree_=Mu(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ad(n,e,t,i,s){return bu(n.pendingWriteTree_,e,t,i,s),s?Yt(n,new $e(Eo(),e,t)):[]}function et(n,e,t=!1){const i=Su(n.pendingWriteTree_,e);if(Iu(n.pendingWriteTree_,e)){let r=new Z(null);return i.snap!=null?r=r.set($(),!0):ve(i.children,o=>{r=r.set(new K(o),!0)}),Yt(n,new cn(i.path,r,t))}else return[]}function In(n,e,t){return Yt(n,new $e(Ni(),e,t))}function ld(n,e,t){const i=Z.fromObject(t);return Yt(n,new Ft(Ni(),e,i))}function cd(n,e){return Yt(n,new Lt(Ni(),e))}function hd(n,e,t){const i=Oi(n,t);if(i){const s=Li(i),r=s.path,o=s.queryId,a=me(r,e),l=new Lt(Ri(o),a);return Fi(n,r,l)}else return[]}function ai(n,e,t,i,s=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||ko(o,e))){const l=id(o,e,t,i);ed(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const d=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,f=n.syncPointTree_.findOnPath(r,(h,v)=>We(v));if(d&&!f){const h=n.syncPointTree_.subtree(r);if(!h.isEmpty()){const v=fd(h);for(let b=0;b<v.length;++b){const N=v[b],P=N.query,L=Fo(n,N);n.listenProvider_.startListening(Tt(P),_n(n,P),L.hashFn,L.onComplete)}}}!f&&c.length>0&&!i&&(d?n.listenProvider_.stopListening(Tt(e),null):c.forEach(h=>{const v=n.queryToTagMap.get(xn(h));n.listenProvider_.stopListening(Tt(h),v)}))}pd(n,c)}return a}function ud(n,e,t,i){const s=Oi(n,i);if(s!=null){const r=Li(s),o=r.path,a=r.queryId,l=me(o,e),c=new $e(Ri(a),l,t);return Fi(n,o,c)}else return[]}function dd(n,e,t,i){const s=Oi(n,i);if(s){const r=Li(s),o=r.path,a=r.queryId,l=me(o,e),c=Z.fromObject(t),d=new Ft(Ri(a),l,c);return Fi(n,o,d)}else return[]}function Us(n,e,t,i=!1){const s=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(s,(h,v)=>{const b=me(h,s);r=r||st(v,b),o=o||We(v)});let a=n.syncPointTree_.get(s);a?(o=o||We(a),r=r||st(a,$())):(a=new Qu,n.syncPointTree_=n.syncPointTree_.set(s,a));let l;r!=null?l=!0:(l=!1,r=M.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((v,b)=>{const N=st(b,$());N&&(r=r.updateImmediateChild(v,N))}));const c=ko(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=xn(e);I(!n.queryToTagMap.has(h),"View does not exist, but we have a tag");const v=_d();n.queryToTagMap.set(h,v),n.tagToQueryMap.set(v,h)}const d=Ai(n.pendingWriteTree_,s);let f=nd(a,e,t,d,r,l);if(!c&&!o&&!i){const h=Do(a,e);f=f.concat(md(n,e,h))}return f}function Mo(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=me(o,e),c=st(a,l);if(c)return c});return Io(s,e,r,t,!0)}function Yt(n,e){return Oo(e,n.syncPointTree_,null,Ai(n.pendingWriteTree_,$()))}function Oo(n,e,t,i){if(j(n.path))return Lo(n,e,t,i);{const s=e.get($());t==null&&s!=null&&(t=st(s,$()));let r=[];const o=H(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,d=xo(i,o);r=r.concat(Oo(a,l,c,d))}return s&&(r=r.concat(Mi(s,n,i,t))),r}}function Lo(n,e,t,i){const s=e.get($());t==null&&s!=null&&(t=st(s,$()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=xo(i,o),d=n.operationForChild(o);d&&(r=r.concat(Lo(d,a,l,c)))}),s&&(r=r.concat(Mi(s,n,i,t))),r}function Fo(n,e){const t=e.query,i=_n(n,t);return{hashFn:()=>($u(e)||M.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?hd(n,t._path,i):cd(n,t._path);{const r=hh(s,t);return ai(n,t,null,r)}}}}function _n(n,e){const t=xn(e);return n.queryToTagMap.get(t)}function xn(n){return n._path.toString()+"$"+n._queryIdentifier}function Oi(n,e){return n.tagToQueryMap.get(e)}function Li(n){const e=n.indexOf("$");return I(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new K(n.substr(0,e))}}function Fi(n,e,t){const i=n.syncPointTree_.get(e);I(i,"Missing sync point for query tag that we're tracking");const s=Ai(n.pendingWriteTree_,e);return Mi(i,t,s,null)}function fd(n){return n.fold((e,t,i)=>{if(t&&We(t))return[Sn(t)];{let s=[];return t&&(s=Po(t)),ve(i,(r,o)=>{s=s.concat(o)}),s}})}function Tt(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(rd())(n._repo,n._path):n}function pd(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=xn(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function _d(){return od++}function md(n,e,t){const i=e._path,s=_n(n,e),r=Fo(n,t),o=n.listenProvider_.startListening(Tt(e),s,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(i);if(s)I(!We(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,d,f)=>{if(!j(c)&&d&&We(d))return[Sn(d).query];{let h=[];return d&&(h=h.concat(Po(d).map(v=>v.query))),ve(f,(v,b)=>{h=h.concat(b)}),h}});for(let c=0;c<l.length;++c){const d=l[c];n.listenProvider_.stopListening(Tt(d),_n(n,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Bi(t)}node(){return this.node_}}class Wi{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=se(this.path_,e);return new Wi(this.syncTree_,t)}node(){return Mo(this.syncTree_,this.path_)}}const gd=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Vs=function(n,e,t){if(!n||typeof n!="object")return n;if(I(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return vd(n[".sv"],e,t);if(typeof n[".sv"]=="object")return yd(n[".sv"],e);I(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},vd=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:I(!1,"Unexpected server value: "+n)}},yd=function(n,e,t){n.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&I(!1,"Unexpected increment value: "+i);const s=e.node();if(I(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},Cd=function(n,e,t,i){return Hi(e,new Wi(t,n),i)},Ed=function(n,e,t){return Hi(n,new Bi(e),t)};function Hi(n,e,t){const i=n.getPriority().val(),s=Vs(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=Vs(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new oe(a,he(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new oe(s))),o.forEachChild(ne,(a,l)=>{const c=Hi(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function Ui(n,e){let t=e instanceof K?e:new K(e),i=n,s=H(t);for(;s!==null;){const r=ot(i.node.children,s)||{children:{},childCount:0};i=new ji(s,i,r),t=J(t),s=H(t)}return i}function ft(n){return n.node.value}function Bo(n,e){n.node.value=e,li(n)}function Wo(n){return n.node.childCount>0}function wd(n){return ft(n)===void 0&&!Wo(n)}function Tn(n,e){ve(n.node.children,(t,i)=>{e(new ji(t,n,i))})}function Ho(n,e,t,i){t&&e(n),Tn(n,s=>{Ho(s,e,!0)})}function bd(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function zt(n){return new K(n.parent===null?n.name:zt(n.parent)+"/"+n.name)}function li(n){n.parent!==null&&Sd(n.parent,n.name,n)}function Sd(n,e,t){const i=wd(t),s=ke(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,li(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,li(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id=/[\[\].#$\/\u0000-\u001F\u007F]/,xd=/[\[\].#$\u0000-\u001F\u007F]/,Hn=10*1024*1024,jo=function(n){return typeof n=="string"&&n.length!==0&&!Id.test(n)},Uo=function(n){return typeof n=="string"&&n.length!==0&&!xd.test(n)},Td=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Uo(n)},Vo=function(n,e,t){const i=t instanceof K?new Vh(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Ue(i));if(typeof e=="function")throw new Error(n+"contains a function "+Ue(i)+" with contents = "+e.toString());if(Ur(e))throw new Error(n+"contains "+e.toString()+" "+Ue(i));if(typeof e=="string"&&e.length>Hn/3&&Cn(e)>Hn)throw new Error(n+"contains a string greater than "+Hn+" utf8 bytes "+Ue(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(ve(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!jo(o)))throw new Error(n+" contains an invalid key ("+o+") "+Ue(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Yh(i,o),Vo(n,a,i),zh(i)}),s&&r)throw new Error(n+' contains ".value" child '+Ue(i)+" in addition to actual children.")}},Yo=function(n,e,t,i){if(!Uo(t))throw new Error(Dr(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Nd=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Yo(n,e,t)},Rd=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!jo(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Td(t))throw new Error(Dr(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function zo(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!bi(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function qo(n,e,t){zo(n,t),$o(n,i=>bi(i,e))}function Qe(n,e,t){zo(n,t),$o(n,i=>Se(i,e)||Se(e,i))}function $o(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(Pd(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Pd(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();bt&&ce("event: "+t.toString()),Ut(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dd="repo_interrupt",kd=25;class Md{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Ad,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ln(),this.transactionQueueTree_=new ji,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Od(n,e,t){if(n.stats_=Ei(n.repoInfo_),n.forceRestClient_||ph())n.server_=new an(n.repoInfo_,(i,s,r,o)=>{Ys(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>zs(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{le(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new Ae(n.repoInfo_,e,(i,s,r,o)=>{Ys(n,i,s,r,o)},i=>{zs(n,i)},i=>{Fd(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=yh(n.repoInfo_,()=>new gu(n.stats_,n.server_)),n.infoData_=new du,n.infoSyncTree_=new js({startListening:(i,s,r,o)=>{let a=[];const l=n.infoData_.getNode(i._path);return l.isEmpty()||(a=In(n.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Vi(n,"connected",!1),n.serverSyncTree_=new js({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);Qe(n.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function Ld(n){const t=n.infoData_.getNode(new K(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Go(n){return gd({timestamp:Ld(n)})}function Ys(n,e,t,i,s){n.dataUpdateCount++;const r=new K(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const l=en(t,c=>he(c));o=dd(n.serverSyncTree_,r,l,s)}else{const l=he(t);o=ud(n.serverSyncTree_,r,l,s)}else if(i){const l=en(t,c=>he(c));o=ld(n.serverSyncTree_,r,l)}else{const l=he(t);o=In(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=zi(n,r)),Qe(n.eventQueue_,a,o)}function zs(n,e){Vi(n,"connected",e),e===!1&&Wd(n)}function Fd(n,e){ve(e,(t,i)=>{Vi(n,t,i)})}function Vi(n,e,t){const i=new K("/.info/"+e),s=he(t);n.infoData_.updateSnapshot(i,s);const r=In(n.infoSyncTree_,i,s);Qe(n.eventQueue_,i,r)}function Bd(n){return n.nextWriteId_++}function Wd(n){Xo(n,"onDisconnectEvents");const e=Go(n),t=ln();ti(n.onDisconnect_,$(),(s,r)=>{const o=Cd(s,r,n.serverSyncTree_,e);Co(t,s,o)});let i=[];ti(t,$(),(s,r)=>{i=i.concat(In(n.serverSyncTree_,s,r));const o=zd(n,s);zi(n,o)}),n.onDisconnect_=ln(),Qe(n.eventQueue_,$(),i)}function Hd(n,e,t){let i;H(e._path)===".info"?i=Us(n.infoSyncTree_,e,t):i=Us(n.serverSyncTree_,e,t),qo(n.eventQueue_,e._path,i)}function jd(n,e,t){let i;H(e._path)===".info"?i=ai(n.infoSyncTree_,e,t):i=ai(n.serverSyncTree_,e,t),qo(n.eventQueue_,e._path,i)}function Ud(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Dd)}function Xo(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),ce(t,...e)}function Ko(n,e,t){return Mo(n.serverSyncTree_,e,t)||M.EMPTY_NODE}function Yi(n,e=n.transactionQueueTree_){if(e||Nn(n,e),ft(e)){const t=Jo(n,e);I(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&Vd(n,zt(e),t)}else Wo(e)&&Tn(e,t=>{Yi(n,t)})}function Vd(n,e,t){const i=t.map(c=>c.currentWriteId),s=Ko(n,e,i);let r=s;const o=s.hash();for(let c=0;c<t.length;c++){const d=t[c];I(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const f=me(e,d.path);r=r.updateChild(f,d.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{Xo(n,"transaction put response",{path:l.toString(),status:c});let d=[];if(c==="ok"){const f=[];for(let h=0;h<t.length;h++)t[h].status=2,d=d.concat(et(n.serverSyncTree_,t[h].currentWriteId)),t[h].onComplete&&f.push(()=>t[h].onComplete(null,!0,t[h].currentOutputSnapshotResolved)),t[h].unwatcher();Nn(n,Ui(n.transactionQueueTree_,e)),Yi(n,n.transactionQueueTree_),Qe(n.eventQueue_,e,d);for(let h=0;h<f.length;h++)Ut(f[h])}else{if(c==="datastale")for(let f=0;f<t.length;f++)t[f].status===3?t[f].status=4:t[f].status=0;else{ye("transaction at "+l.toString()+" failed: "+c);for(let f=0;f<t.length;f++)t[f].status=4,t[f].abortReason=c}zi(n,e)}},o)}function zi(n,e){const t=Qo(n,e),i=zt(t),s=Jo(n,t);return Yd(n,s,i),i}function Yd(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=me(t,l.path);let d=!1,f;if(I(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,f=l.abortReason,s=s.concat(et(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=kd)d=!0,f="maxretry",s=s.concat(et(n.serverSyncTree_,l.currentWriteId,!0));else{const h=Ko(n,l.path,o);l.currentInputSnapshot=h;const v=e[a].update(h.val());if(v!==void 0){Vo("transaction failed: Data returned ",v,l.path);let b=he(v);typeof v=="object"&&v!=null&&ke(v,".priority")||(b=b.updatePriority(h.getPriority()));const P=l.currentWriteId,L=Go(n),p=Ed(b,h,L);l.currentOutputSnapshotRaw=b,l.currentOutputSnapshotResolved=p,l.currentWriteId=Bd(n),o.splice(o.indexOf(P),1),s=s.concat(ad(n.serverSyncTree_,l.path,p,l.currentWriteId,l.applyLocally)),s=s.concat(et(n.serverSyncTree_,P,!0))}else d=!0,f="nodata",s=s.concat(et(n.serverSyncTree_,l.currentWriteId,!0))}Qe(n.eventQueue_,t,s),s=[],d&&(e[a].status=2,(function(h){setTimeout(h,Math.floor(0))})(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(f),!1,null))))}Nn(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)Ut(i[a]);Yi(n,n.transactionQueueTree_)}function Qo(n,e){let t,i=n.transactionQueueTree_;for(t=H(e);t!==null&&ft(i)===void 0;)i=Ui(i,t),e=J(e),t=H(e);return i}function Jo(n,e){const t=[];return Zo(n,e,t),t.sort((i,s)=>i.order-s.order),t}function Zo(n,e,t){const i=ft(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);Tn(e,s=>{Zo(n,s,t)})}function Nn(n,e){const t=ft(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,Bo(e,t.length>0?t:void 0)}Tn(e,i=>{Nn(n,i)})}function zd(n,e){const t=zt(Qo(n,e)),i=Ui(n.transactionQueueTree_,e);return bd(i,s=>{jn(n,s)}),jn(n,i),Ho(i,s=>{jn(n,s)}),t}function jn(n,e){const t=ft(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(I(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(I(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(et(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Bo(e,void 0):t.length=r+1,Qe(n.eventQueue_,zt(e),s);for(let o=0;o<i.length;o++)Ut(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function $d(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):ye(`Invalid query segment '${t}' in query '${n}'`)}return e}const qs=function(n,e){const t=Gd(n),i=t.namespace;t.domain==="firebase.com"&&De(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&De("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||rh();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new eo(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new K(t.pathString)}},Gd=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let d=n.indexOf("/");d===-1&&(d=n.length);let f=n.indexOf("?");f===-1&&(f=n.length),e=n.substring(0,Math.min(d,f)),d<f&&(s=qd(n.substring(d,f)));const h=$d(n.substring(Math.min(n.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const v=e.slice(0,c);if(v.toLowerCase()==="localhost")t="localhost";else if(v.split(".").length<=2)t=v;else{const b=e.indexOf(".");i=e.substring(0,b).toLowerCase(),t=e.substring(b+1),r=i}"ns"in h&&(r=h.ns)}return{host:e,port:l,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+le(this.snapshot.exportVal())}}class Kd{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return j(this._path)?null:co(this._path)}get ref(){return new He(this._repo,this._path)}get _queryIdentifier(){const e=As(this._queryParams),t=yi(e);return t==="{}"?"default":t}get _queryObject(){return As(this._queryParams)}isEqual(e){if(e=En(e),!(e instanceof qi))return!1;const t=this._repo===e._repo,i=bi(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+Uh(this._path)}}class He extends qi{constructor(e,t){super(e,t,new Ti,!1)}get parent(){const e=uo(this._path);return e===null?null:new He(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class mn{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new K(e),i=ci(this.ref,e);return new mn(this._node.getChild(t),i,ne)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new mn(s,ci(this.ref,i),ne)))}hasChild(e){const t=new K(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Jd(n,e){return n=En(n),n._checkNotDeleted("ref"),ci(n._root,e)}function ci(n,e){return n=En(n),H(n._path)===null?Nd("child","path",e):Yo("child","path",e),new He(n._repo,se(n._path,e))}class $i{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new Xd("value",this,new mn(e.snapshotNode,new He(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Kd(this,e,t):null}matches(e){return e instanceof $i?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Zd(n,e,t,i,s){const r=new Qd(t,void 0),o=new $i(r);return Hd(n._repo,n,o),()=>jd(n._repo,n,o)}function ef(n,e,t,i){return Zd(n,"value",e)}Ju(He);sd(He);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf="FIREBASE_DATABASE_EMULATOR_HOST",hi={};let nf=!1;function sf(n,e,t,i){const s=e.lastIndexOf(":"),r=e.substring(0,s),o=gi(r);n.repoInfo_=new eo(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),i&&(n.authTokenProvider_=i)}function rf(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||De("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ce("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=qs(r,s),a=o.repoInfo,l;typeof process<"u"&&ds&&(l=ds[tf]),l?(r=`http://${l}?ns=${a.namespace}`,o=qs(r,s),a=o.repoInfo):o.repoInfo.secure;const c=new mh(n.name,n.options,e);Rd("Invalid Firebase Database URL",o),j(o.path)||De("Database URL must point to the root of a Firebase Database (not including a child path).");const d=af(a,n,c,new _h(n,t));return new lf(d,n)}function of(n,e){const t=hi[e];(!t||t[n.key]!==n)&&De(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Ud(n),delete t[n.key]}function af(n,e,t,i){let s=hi[e.name];s||(s={},hi[e.name]=s);let r=s[n.toURLString()];return r&&De("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Md(n,nf,t,i),s[n.toURLString()]=r,r}class lf{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Od(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new He(this._repo,$())),this._rootInternal}_delete(){return this._rootInternal!==null&&(of(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&De("Cannot call "+e+" on a deleted database.")}}function cf(n=Uc(),e){const t=Fc(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=wl("database");i&&hf(t,...i)}return t}function hf(n,e,t,i={}){n=En(n),n._checkNotDeleted("useEmulator");const s=`${e}:${t}`,r=n._repoInternal;if(n._instanceStarted){if(s===n._repoInternal.repoInfo_.host&&tn(i,r.repoInfo_.emulatorOptions))return;De("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&De('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Xt(Xt.OWNER);else if(i.mockUserToken){const a=typeof i.mockUserToken=="string"?i.mockUserToken:Sl(i.mockUserToken,n.app.options.projectId);o=new Xt(a)}gi(e)&&(bl(e),Tl("Database",!0)),sf(r,s,i,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uf(n){Zc(jc),nn(new Rt("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return rf(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),tt(fs,ps,n),tt(fs,ps,"esm2020")}Ae.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Ae.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};uf();var df="firebase",ff="12.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tt(df,ff,"app");const pf={apiKey:"AIzaSyBLWJ7csymq4FIN6iid6t0wlfl3U5sJqpM",authDomain:"jeepney-tracking-9d0bd.firebaseapp.com",projectId:"jeepney-tracking-9d0bd",storageBucket:"jeepney-tracking-9d0bd.appspot.com",messagingSenderId:"842260338285",appId:"1:842260338285:web:2c3541109e52b57a271164",measurementId:"G-DN1HCMHGLQ",databaseURL:"https://jeepney-tracking-9d0bd-default-rtdb.asia-southeast1.firebasedatabase.app/"},_f=ls().length===0?Lr(pf):ls()[0],mf=cf(_f);var $s=63710088e-1;function ea(n,e,t={}){const i={type:"Feature"};return(t.id===0||t.id)&&(i.id=t.id),t.bbox&&(i.bbox=t.bbox),i.properties={},i.geometry=n,i}function gf(n,e,t={}){if(!n)throw new Error("coordinates is required");if(!Array.isArray(n))throw new Error("coordinates must be an Array");if(n.length<2)throw new Error("coordinates must be at least 2 numbers long");if(!Gs(n[0])||!Gs(n[1]))throw new Error("coordinates must contain numbers");return ea({type:"Point",coordinates:n},e,t)}function vf(n,e,t={}){for(const s of n){if(s.length<4)throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");if(s[s.length-1].length!==s[0].length)throw new Error("First and last Position are not equivalent.");for(let r=0;r<s[s.length-1].length;r++)if(s[s.length-1][r]!==s[0][r])throw new Error("First and last Position are not equivalent.")}return ea({type:"Polygon",coordinates:n},e,t)}function yf(n,e={}){const t={type:"FeatureCollection"};return e.id&&(t.id=e.id),e.bbox&&(t.bbox=e.bbox),t.features=n,t}function Gs(n){return!isNaN(n)&&n!==null&&!Array.isArray(n)}function ta(n,e,t){if(n!==null)for(var i,s,r,o,a,l,c,d=0,f=0,h,v=n.type,b=v==="FeatureCollection",N=v==="Feature",P=b?n.features.length:1,L=0;L<P;L++){c=b?n.features[L].geometry:N?n.geometry:n,h=c?c.type==="GeometryCollection":!1,a=h?c.geometries.length:1;for(var p=0;p<a;p++){var g=0,u=0;if(o=h?c.geometries[p]:c,o!==null){l=o.coordinates;var _=o.type;switch(d=0,_){case null:break;case"Point":if(e(l,f,L,g,u)===!1)return!1;f++,g++;break;case"LineString":case"MultiPoint":for(i=0;i<l.length;i++){if(e(l[i],f,L,g,u)===!1)return!1;f++,_==="MultiPoint"&&g++}_==="LineString"&&g++;break;case"Polygon":case"MultiLineString":for(i=0;i<l.length;i++){for(s=0;s<l[i].length-d;s++){if(e(l[i][s],f,L,g,u)===!1)return!1;f++}_==="MultiLineString"&&g++,_==="Polygon"&&u++}_==="Polygon"&&g++;break;case"MultiPolygon":for(i=0;i<l.length;i++){for(u=0,s=0;s<l[i].length;s++){for(r=0;r<l[i][s].length-d;r++){if(e(l[i][s][r],f,L,g,u)===!1)return!1;f++}u++}g++}break;case"GeometryCollection":for(i=0;i<o.geometries.length;i++)if(ta(o.geometries[i],e)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function Cf(n,e){var t,i,s,r,o,a,l,c,d,f,h=0,v=n.type==="FeatureCollection",b=n.type==="Feature",N=v?n.features.length:1;for(t=0;t<N;t++){for(a=v?n.features[t].geometry:b?n.geometry:n,c=v?n.features[t].properties:b?n.properties:{},d=v?n.features[t].bbox:b?n.bbox:void 0,f=v?n.features[t].id:b?n.id:void 0,l=a?a.type==="GeometryCollection":!1,o=l?a.geometries.length:1,s=0;s<o;s++){if(r=l?a.geometries[s]:a,r===null){if(e(null,h,c,d,f)===!1)return!1;continue}switch(r.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":{if(e(r,h,c,d,f)===!1)return!1;break}case"GeometryCollection":{for(i=0;i<r.geometries.length;i++)if(e(r.geometries[i],h,c,d,f)===!1)return!1;break}default:throw new Error("Unknown Geometry Type")}}h++}}function Ef(n,e,t){var i=t;return Cf(n,function(s,r,o,a,l){r===0&&t===void 0?i=s:i=e(i,s,r,o,a,l)}),i}function wf(n){return Ef(n,(e,t)=>e+bf(t),0)}function bf(n){let e=0,t;switch(n.type){case"Polygon":return Xs(n.coordinates);case"MultiPolygon":for(t=0;t<n.coordinates.length;t++)e+=Xs(n.coordinates[t]);return e;case"Point":case"MultiPoint":case"LineString":case"MultiLineString":return 0}return 0}function Xs(n){let e=0;if(n&&n.length>0){e+=Math.abs(Ks(n[0]));for(let t=1;t<n.length;t++)e-=Math.abs(Ks(n[t]))}return e}var Sf=$s*$s/2,Un=Math.PI/180;function Ks(n){const e=n.length-1;if(e<=2)return 0;let t=0,i=0;for(;i<e;){const s=n[i],r=n[i+1===e?0:i+1],o=n[i+2>=e?(i+2)%e:i+2],a=s[0]*Un,l=r[1]*Un,c=o[0]*Un;t+=(c-a)*Math.sin(l),i++}return t*Sf}var Gt={exports:{}},Kt={exports:{}},If=Kt.exports,Qs;function xf(){return Qs||(Qs=1,(function(n,e){(function(t,i){n.exports=i()})(If,function(){function t(p,g,u,_,m){(function y(w,E,S,x,R){for(;x>S;){if(x-S>600){var O=x-S+1,U=E-S+1,re=Math.log(O),F=.5*Math.exp(2*re/3),V=.5*Math.sqrt(re*F*(O-F)/O)*(U-O/2<0?-1:1),Y=Math.max(S,Math.floor(E-U*F/O+V)),X=Math.min(x,Math.floor(E+(O-U)*F/O+V));y(w,E,Y,X,R)}var T=w[E],D=S,k=x;for(i(w,S,E),R(w[x],T)>0&&i(w,S,x);D<k;){for(i(w,D,k),D++,k--;R(w[D],T)<0;)D++;for(;R(w[k],T)>0;)k--}R(w[S],T)===0?i(w,S,k):i(w,++k,x),k<=E&&(S=k+1),E<=k&&(x=k-1)}})(p,g,u||0,_||p.length-1,m||s)}function i(p,g,u){var _=p[g];p[g]=p[u],p[u]=_}function s(p,g){return p<g?-1:p>g?1:0}var r=function(p){p===void 0&&(p=9),this._maxEntries=Math.max(4,p),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),this.clear()};function o(p,g,u){if(!u)return g.indexOf(p);for(var _=0;_<g.length;_++)if(u(p,g[_]))return _;return-1}function a(p,g){l(p,0,p.children.length,g,p)}function l(p,g,u,_,m){m||(m=P(null)),m.minX=1/0,m.minY=1/0,m.maxX=-1/0,m.maxY=-1/0;for(var y=g;y<u;y++){var w=p.children[y];c(m,p.leaf?_(w):w)}return m}function c(p,g){return p.minX=Math.min(p.minX,g.minX),p.minY=Math.min(p.minY,g.minY),p.maxX=Math.max(p.maxX,g.maxX),p.maxY=Math.max(p.maxY,g.maxY),p}function d(p,g){return p.minX-g.minX}function f(p,g){return p.minY-g.minY}function h(p){return(p.maxX-p.minX)*(p.maxY-p.minY)}function v(p){return p.maxX-p.minX+(p.maxY-p.minY)}function b(p,g){return p.minX<=g.minX&&p.minY<=g.minY&&g.maxX<=p.maxX&&g.maxY<=p.maxY}function N(p,g){return g.minX<=p.maxX&&g.minY<=p.maxY&&g.maxX>=p.minX&&g.maxY>=p.minY}function P(p){return{children:p,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function L(p,g,u,_,m){for(var y=[g,u];y.length;)if(!((u=y.pop())-(g=y.pop())<=_)){var w=g+Math.ceil((u-g)/_/2)*_;t(p,w,g,u,m),y.push(g,w,w,u)}}return r.prototype.all=function(){return this._all(this.data,[])},r.prototype.search=function(p){var g=this.data,u=[];if(!N(p,g))return u;for(var _=this.toBBox,m=[];g;){for(var y=0;y<g.children.length;y++){var w=g.children[y],E=g.leaf?_(w):w;N(p,E)&&(g.leaf?u.push(w):b(p,E)?this._all(w,u):m.push(w))}g=m.pop()}return u},r.prototype.collides=function(p){var g=this.data;if(!N(p,g))return!1;for(var u=[];g;){for(var _=0;_<g.children.length;_++){var m=g.children[_],y=g.leaf?this.toBBox(m):m;if(N(p,y)){if(g.leaf||b(p,y))return!0;u.push(m)}}g=u.pop()}return!1},r.prototype.load=function(p){if(!p||!p.length)return this;if(p.length<this._minEntries){for(var g=0;g<p.length;g++)this.insert(p[g]);return this}var u=this._build(p.slice(),0,p.length-1,0);if(this.data.children.length)if(this.data.height===u.height)this._splitRoot(this.data,u);else{if(this.data.height<u.height){var _=this.data;this.data=u,u=_}this._insert(u,this.data.height-u.height-1,!0)}else this.data=u;return this},r.prototype.insert=function(p){return p&&this._insert(p,this.data.height-1),this},r.prototype.clear=function(){return this.data=P([]),this},r.prototype.remove=function(p,g){if(!p)return this;for(var u,_,m,y=this.data,w=this.toBBox(p),E=[],S=[];y||E.length;){if(y||(y=E.pop(),_=E[E.length-1],u=S.pop(),m=!0),y.leaf){var x=o(p,y.children,g);if(x!==-1)return y.children.splice(x,1),E.push(y),this._condense(E),this}m||y.leaf||!b(y,w)?_?(u++,y=_.children[u],m=!1):y=null:(E.push(y),S.push(u),u=0,_=y,y=y.children[0])}return this},r.prototype.toBBox=function(p){return p},r.prototype.compareMinX=function(p,g){return p.minX-g.minX},r.prototype.compareMinY=function(p,g){return p.minY-g.minY},r.prototype.toJSON=function(){return this.data},r.prototype.fromJSON=function(p){return this.data=p,this},r.prototype._all=function(p,g){for(var u=[];p;)p.leaf?g.push.apply(g,p.children):u.push.apply(u,p.children),p=u.pop();return g},r.prototype._build=function(p,g,u,_){var m,y=u-g+1,w=this._maxEntries;if(y<=w)return a(m=P(p.slice(g,u+1)),this.toBBox),m;_||(_=Math.ceil(Math.log(y)/Math.log(w)),w=Math.ceil(y/Math.pow(w,_-1))),(m=P([])).leaf=!1,m.height=_;var E=Math.ceil(y/w),S=E*Math.ceil(Math.sqrt(w));L(p,g,u,S,this.compareMinX);for(var x=g;x<=u;x+=S){var R=Math.min(x+S-1,u);L(p,x,R,E,this.compareMinY);for(var O=x;O<=R;O+=E){var U=Math.min(O+E-1,R);m.children.push(this._build(p,O,U,_-1))}}return a(m,this.toBBox),m},r.prototype._chooseSubtree=function(p,g,u,_){for(;_.push(g),!g.leaf&&_.length-1!==u;){for(var m=1/0,y=1/0,w=void 0,E=0;E<g.children.length;E++){var S=g.children[E],x=h(S),R=(O=p,U=S,(Math.max(U.maxX,O.maxX)-Math.min(U.minX,O.minX))*(Math.max(U.maxY,O.maxY)-Math.min(U.minY,O.minY))-x);R<y?(y=R,m=x<m?x:m,w=S):R===y&&x<m&&(m=x,w=S)}g=w||g.children[0]}var O,U;return g},r.prototype._insert=function(p,g,u){var _=u?p:this.toBBox(p),m=[],y=this._chooseSubtree(_,this.data,g,m);for(y.children.push(p),c(y,_);g>=0&&m[g].children.length>this._maxEntries;)this._split(m,g),g--;this._adjustParentBBoxes(_,m,g)},r.prototype._split=function(p,g){var u=p[g],_=u.children.length,m=this._minEntries;this._chooseSplitAxis(u,m,_);var y=this._chooseSplitIndex(u,m,_),w=P(u.children.splice(y,u.children.length-y));w.height=u.height,w.leaf=u.leaf,a(u,this.toBBox),a(w,this.toBBox),g?p[g-1].children.push(w):this._splitRoot(u,w)},r.prototype._splitRoot=function(p,g){this.data=P([p,g]),this.data.height=p.height+1,this.data.leaf=!1,a(this.data,this.toBBox)},r.prototype._chooseSplitIndex=function(p,g,u){for(var _,m,y,w,E,S,x,R=1/0,O=1/0,U=g;U<=u-g;U++){var re=l(p,0,U,this.toBBox),F=l(p,U,u,this.toBBox),V=(m=re,y=F,w=void 0,E=void 0,S=void 0,x=void 0,w=Math.max(m.minX,y.minX),E=Math.max(m.minY,y.minY),S=Math.min(m.maxX,y.maxX),x=Math.min(m.maxY,y.maxY),Math.max(0,S-w)*Math.max(0,x-E)),Y=h(re)+h(F);V<R?(R=V,_=U,O=Y<O?Y:O):V===R&&Y<O&&(O=Y,_=U)}return _||u-g},r.prototype._chooseSplitAxis=function(p,g,u){var _=p.leaf?this.compareMinX:d,m=p.leaf?this.compareMinY:f;this._allDistMargin(p,g,u,_)<this._allDistMargin(p,g,u,m)&&p.children.sort(_)},r.prototype._allDistMargin=function(p,g,u,_){p.children.sort(_);for(var m=this.toBBox,y=l(p,0,g,m),w=l(p,u-g,u,m),E=v(y)+v(w),S=g;S<u-g;S++){var x=p.children[S];c(y,p.leaf?m(x):x),E+=v(y)}for(var R=u-g-1;R>=g;R--){var O=p.children[R];c(w,p.leaf?m(O):O),E+=v(w)}return E},r.prototype._adjustParentBBoxes=function(p,g,u){for(var _=u;_>=0;_--)c(g[_],p)},r.prototype._condense=function(p){for(var g=p.length-1,u=void 0;g>=0;g--)p[g].children.length===0?g>0?(u=p[g-1].children).splice(u.indexOf(p[g]),1):this.clear():a(p[g],this.toBBox)},r})})(Kt)),Kt.exports}class Tf{constructor(e=[],t=Nf){if(this.data=e,this.length=this.data.length,this.compare=t,this.length>0)for(let i=(this.length>>1)-1;i>=0;i--)this._down(i)}push(e){this.data.push(e),this.length++,this._up(this.length-1)}pop(){if(this.length===0)return;const e=this.data[0],t=this.data.pop();return this.length--,this.length>0&&(this.data[0]=t,this._down(0)),e}peek(){return this.data[0]}_up(e){const{data:t,compare:i}=this,s=t[e];for(;e>0;){const r=e-1>>1,o=t[r];if(i(s,o)>=0)break;t[e]=o,e=r}t[e]=s}_down(e){const{data:t,compare:i}=this,s=this.length>>1,r=t[e];for(;e<s;){let o=(e<<1)+1,a=t[o];const l=o+1;if(l<this.length&&i(t[l],a)<0&&(o=l,a=t[l]),i(a,r)>=0)break;t[e]=a,e=o}t[e]=r}}function Nf(n,e){return n<e?-1:n>e?1:0}const Rf=Object.freeze(Object.defineProperty({__proto__:null,default:Tf},Symbol.toStringTag,{value:"Module"})),Af=oa(Rf);var yt={exports:{}},Vn,Js;function Pf(){return Js||(Js=1,Vn=function(e,t,i,s){var r=e[0],o=e[1],a=!1;i===void 0&&(i=0),s===void 0&&(s=t.length);for(var l=(s-i)/2,c=0,d=l-1;c<l;d=c++){var f=t[i+c*2+0],h=t[i+c*2+1],v=t[i+d*2+0],b=t[i+d*2+1],N=h>o!=b>o&&r<(v-f)*(o-h)/(b-h)+f;N&&(a=!a)}return a}),Vn}var Yn,Zs;function Df(){return Zs||(Zs=1,Yn=function(e,t,i,s){var r=e[0],o=e[1],a=!1;i===void 0&&(i=0),s===void 0&&(s=t.length);for(var l=s-i,c=0,d=l-1;c<l;d=c++){var f=t[c+i][0],h=t[c+i][1],v=t[d+i][0],b=t[d+i][1],N=h>o!=b>o&&r<(v-f)*(o-h)/(b-h)+f;N&&(a=!a)}return a}),Yn}var er;function kf(){if(er)return yt.exports;er=1;var n=Pf(),e=Df();return yt.exports=function(i,s,r,o){return s.length>0&&Array.isArray(s[0])?e(i,s,r,o):n(i,s,r,o)},yt.exports.nested=e,yt.exports.flat=n,yt.exports}var Ct={exports:{}},Mf=Ct.exports,tr;function Of(){return tr||(tr=1,(function(n,e){(function(t,i){i(e)})(Mf,function(t){const s=33306690738754706e-32;function r(N,P,L,p,g){let u,_,m,y,w=P[0],E=p[0],S=0,x=0;E>w==E>-w?(u=w,w=P[++S]):(u=E,E=p[++x]);let R=0;if(S<N&&x<L)for(E>w==E>-w?(m=u-((_=w+u)-w),w=P[++S]):(m=u-((_=E+u)-E),E=p[++x]),u=_,m!==0&&(g[R++]=m);S<N&&x<L;)E>w==E>-w?(m=u-((_=u+w)-(y=_-u))+(w-y),w=P[++S]):(m=u-((_=u+E)-(y=_-u))+(E-y),E=p[++x]),u=_,m!==0&&(g[R++]=m);for(;S<N;)m=u-((_=u+w)-(y=_-u))+(w-y),w=P[++S],u=_,m!==0&&(g[R++]=m);for(;x<L;)m=u-((_=u+E)-(y=_-u))+(E-y),E=p[++x],u=_,m!==0&&(g[R++]=m);return u===0&&R!==0||(g[R++]=u),R}function o(N){return new Float64Array(N)}const a=33306690738754716e-32,l=22204460492503146e-32,c=11093356479670487e-47,d=o(4),f=o(8),h=o(12),v=o(16),b=o(4);t.orient2d=function(N,P,L,p,g,u){const _=(P-u)*(L-g),m=(N-g)*(p-u),y=_-m;if(_===0||m===0||_>0!=m>0)return y;const w=Math.abs(_+m);return Math.abs(y)>=a*w?y:-(function(E,S,x,R,O,U,re){let F,V,Y,X,T,D,k,ee,G,z,B,q,ie,te,ue,de,Te,fe;const pe=E-O,_e=x-O,Ee=S-U,we=R-U;T=(ue=(ee=pe-(k=(D=134217729*pe)-(D-pe)))*(z=we-(G=(D=134217729*we)-(D-we)))-((te=pe*we)-k*G-ee*G-k*z))-(B=ue-(Te=(ee=Ee-(k=(D=134217729*Ee)-(D-Ee)))*(z=_e-(G=(D=134217729*_e)-(D-_e)))-((de=Ee*_e)-k*G-ee*G-k*z))),d[0]=ue-(B+T)+(T-Te),T=(ie=te-((q=te+B)-(T=q-te))+(B-T))-(B=ie-de),d[1]=ie-(B+T)+(T-de),T=(fe=q+B)-q,d[2]=q-(fe-T)+(B-T),d[3]=fe;let Me=(function(ra,Gi){let Xi=Gi[0];for(let Rn=1;Rn<ra;Rn++)Xi+=Gi[Rn];return Xi})(4,d),pt=l*re;if(Me>=pt||-Me>=pt||(F=E-(pe+(T=E-pe))+(T-O),Y=x-(_e+(T=x-_e))+(T-O),V=S-(Ee+(T=S-Ee))+(T-U),X=R-(we+(T=R-we))+(T-U),F===0&&V===0&&Y===0&&X===0)||(pt=c*re+s*Math.abs(Me),(Me+=pe*X+we*F-(Ee*Y+_e*V))>=pt||-Me>=pt))return Me;T=(ue=(ee=F-(k=(D=134217729*F)-(D-F)))*(z=we-(G=(D=134217729*we)-(D-we)))-((te=F*we)-k*G-ee*G-k*z))-(B=ue-(Te=(ee=V-(k=(D=134217729*V)-(D-V)))*(z=_e-(G=(D=134217729*_e)-(D-_e)))-((de=V*_e)-k*G-ee*G-k*z))),b[0]=ue-(B+T)+(T-Te),T=(ie=te-((q=te+B)-(T=q-te))+(B-T))-(B=ie-de),b[1]=ie-(B+T)+(T-de),T=(fe=q+B)-q,b[2]=q-(fe-T)+(B-T),b[3]=fe;const na=r(4,d,4,b,f);T=(ue=(ee=pe-(k=(D=134217729*pe)-(D-pe)))*(z=X-(G=(D=134217729*X)-(D-X)))-((te=pe*X)-k*G-ee*G-k*z))-(B=ue-(Te=(ee=Ee-(k=(D=134217729*Ee)-(D-Ee)))*(z=Y-(G=(D=134217729*Y)-(D-Y)))-((de=Ee*Y)-k*G-ee*G-k*z))),b[0]=ue-(B+T)+(T-Te),T=(ie=te-((q=te+B)-(T=q-te))+(B-T))-(B=ie-de),b[1]=ie-(B+T)+(T-de),T=(fe=q+B)-q,b[2]=q-(fe-T)+(B-T),b[3]=fe;const ia=r(na,f,4,b,h);T=(ue=(ee=F-(k=(D=134217729*F)-(D-F)))*(z=X-(G=(D=134217729*X)-(D-X)))-((te=F*X)-k*G-ee*G-k*z))-(B=ue-(Te=(ee=V-(k=(D=134217729*V)-(D-V)))*(z=Y-(G=(D=134217729*Y)-(D-Y)))-((de=V*Y)-k*G-ee*G-k*z))),b[0]=ue-(B+T)+(T-Te),T=(ie=te-((q=te+B)-(T=q-te))+(B-T))-(B=ie-de),b[1]=ie-(B+T)+(T-de),T=(fe=q+B)-q,b[2]=q-(fe-T)+(B-T),b[3]=fe;const sa=r(ia,h,4,b,v);return v[sa-1]})(N,P,L,p,g,u,w)},t.orient2dfast=function(N,P,L,p,g,u){return(P-u)*(L-g)-(N-g)*(p-u)},Object.defineProperty(t,"__esModule",{value:!0})})})(Ct,Ct.exports)),Ct.exports}var nr;function Lf(){if(nr)return Gt.exports;nr=1;var n=xf(),e=Af,t=kf(),i=Of().orient2d;e.default&&(e=e.default),Gt.exports=s,Gt.exports.default=s;function s(u,_,m){_=Math.max(0,_===void 0?2:_),m=m||0;var y=v(u),w=new n(16);w.toBBox=function(k){return{minX:k[0],minY:k[1],maxX:k[0],maxY:k[1]}},w.compareMinX=function(k,ee){return k[0]-ee[0]},w.compareMinY=function(k,ee){return k[1]-ee[1]},w.load(u);for(var E=[],S=0,x;S<y.length;S++){var R=y[S];w.remove(R),x=b(R,x),E.push(x)}var O=new n(16);for(S=0;S<E.length;S++)O.insert(h(E[S]));for(var U=_*_,re=m*m;E.length;){var F=E.shift(),V=F.p,Y=F.next.p,X=N(V,Y);if(!(X<re)){var T=X/U;R=r(w,F.prev.p,V,Y,F.next.next.p,T,O),R&&Math.min(N(R,V),N(R,Y))<=T&&(E.push(F),E.push(b(R,F)),w.remove(R),O.remove(F),O.insert(h(F)),O.insert(h(F.next)))}}F=x;var D=[];do D.push(F.p),F=F.next;while(F!==x);return D.push(F.p),D}function r(u,_,m,y,w,E,S){for(var x=new e([],o),R=u.data;R;){for(var O=0;O<R.children.length;O++){var U=R.children[O],re=R.leaf?P(U,m,y):a(m,y,U);re>E||x.push({node:U,dist:re})}for(;x.length&&!x.peek().node.children;){var F=x.pop(),V=F.node,Y=P(V,_,m),X=P(V,y,w);if(F.dist<Y&&F.dist<X&&c(m,V,S)&&c(y,V,S))return V}R=x.pop(),R&&(R=R.node)}return null}function o(u,_){return u.dist-_.dist}function a(u,_,m){if(l(u,m)||l(_,m))return 0;var y=L(u[0],u[1],_[0],_[1],m.minX,m.minY,m.maxX,m.minY);if(y===0)return 0;var w=L(u[0],u[1],_[0],_[1],m.minX,m.minY,m.minX,m.maxY);if(w===0)return 0;var E=L(u[0],u[1],_[0],_[1],m.maxX,m.minY,m.maxX,m.maxY);if(E===0)return 0;var S=L(u[0],u[1],_[0],_[1],m.minX,m.maxY,m.maxX,m.maxY);return S===0?0:Math.min(y,w,E,S)}function l(u,_){return u[0]>=_.minX&&u[0]<=_.maxX&&u[1]>=_.minY&&u[1]<=_.maxY}function c(u,_,m){for(var y=Math.min(u[0],_[0]),w=Math.min(u[1],_[1]),E=Math.max(u[0],_[0]),S=Math.max(u[1],_[1]),x=m.search({minX:y,minY:w,maxX:E,maxY:S}),R=0;R<x.length;R++)if(f(x[R].p,x[R].next.p,u,_))return!1;return!0}function d(u,_,m){return i(u[0],u[1],_[0],_[1],m[0],m[1])}function f(u,_,m,y){return u!==y&&_!==m&&d(u,_,m)>0!=d(u,_,y)>0&&d(m,y,u)>0!=d(m,y,_)>0}function h(u){var _=u.p,m=u.next.p;return u.minX=Math.min(_[0],m[0]),u.minY=Math.min(_[1],m[1]),u.maxX=Math.max(_[0],m[0]),u.maxY=Math.max(_[1],m[1]),u}function v(u){for(var _=u[0],m=u[0],y=u[0],w=u[0],E=0;E<u.length;E++){var S=u[E];S[0]<_[0]&&(_=S),S[0]>y[0]&&(y=S),S[1]<m[1]&&(m=S),S[1]>w[1]&&(w=S)}var x=[_,m,y,w],R=x.slice();for(E=0;E<u.length;E++)t(u[E],x)||R.push(u[E]);return g(R)}function b(u,_){var m={p:u,prev:null,next:null,minX:0,minY:0,maxX:0,maxY:0};return _?(m.next=_.next,m.prev=_,_.next.prev=m,_.next=m):(m.prev=m,m.next=m),m}function N(u,_){var m=u[0]-_[0],y=u[1]-_[1];return m*m+y*y}function P(u,_,m){var y=_[0],w=_[1],E=m[0]-y,S=m[1]-w;if(E!==0||S!==0){var x=((u[0]-y)*E+(u[1]-w)*S)/(E*E+S*S);x>1?(y=m[0],w=m[1]):x>0&&(y+=E*x,w+=S*x)}return E=u[0]-y,S=u[1]-w,E*E+S*S}function L(u,_,m,y,w,E,S,x){var R=m-u,O=y-_,U=S-w,re=x-E,F=u-w,V=_-E,Y=R*R+O*O,X=R*U+O*re,T=U*U+re*re,D=R*F+O*V,k=U*F+re*V,ee=Y*T-X*X,G,z,B,q,ie=ee,te=ee;ee===0?(z=0,ie=1,q=k,te=T):(z=X*k-T*D,q=Y*k-X*D,z<0?(z=0,q=k,te=T):z>ie&&(z=ie,q=k+X,te=T)),q<0?(q=0,-D<0?z=0:-D>Y?z=ie:(z=-D,ie=Y)):q>te&&(q=te,-D+X<0?z=0:-D+X>Y?z=ie:(z=-D+X,ie=Y)),G=z===0?0:z/ie,B=q===0?0:q/te;var ue=(1-G)*u+G*m,de=(1-G)*_+G*y,Te=(1-B)*w+B*S,fe=(1-B)*E+B*x,pe=Te-ue,_e=fe-de;return pe*pe+_e*_e}function p(u,_){return u[0]===_[0]?u[1]-_[1]:u[0]-_[0]}function g(u){u.sort(p);for(var _=[],m=0;m<u.length;m++){for(;_.length>=2&&d(_[_.length-2],_[_.length-1],u[m])<=0;)_.pop();_.push(u[m])}for(var y=[],w=u.length-1;w>=0;w--){for(;y.length>=2&&d(y[y.length-2],y[y.length-1],u[w])<=0;)y.pop();y.push(u[w])}return y.pop(),_.pop(),_.concat(y)}return Gt.exports}var Ff=Lf();const Bf=aa(Ff);function Wf(n,e={}){e.concavity=e.concavity||1/0;const t=[];if(ta(n,s=>{t.push([s[0],s[1]])}),!t.length)return null;const i=Bf(t,e.concavity);return i.length>3?vf([i]):null}const Hf=[{title:"Map",href:"/map"}];function lp(){const[n,e]=A.useState(!1),[t,i]=A.useState("light"),[s,r]=A.useState([]),[o,a]=A.useState(!0),[l,c]=A.useState(0);A.useEffect(()=>{const v=Jd(mf,"drivers"),b=ef(v,N=>{const P=N.val();if(P){const L=Object.keys(P).map(g=>({drivers_id:g,latitude:P[g].location.latitude,longitude:P[g].location.longitude}));r(L);const p=d(L);c(p)}});return()=>{b()}},[]);function d(v){const p=v.filter(m=>m.latitude>=10.639&&m.latitude<=10.706&&m.longitude>=122.935&&m.longitude<=122.98);if(p.length===0)return 0;const g=p.map(m=>gf([m.longitude,m.latitude])),u=Wf(yf(g));if(!u)return 0;const _=wf(u);return Math.round(_/1e6)}const f=()=>{const v=document.documentElement;document.fullscreenElement?document.exitFullscreen().then(()=>e(!1)).catch(b=>{console.error(`Error exiting fullscreen: ${b.message}`)}):v.requestFullscreen().then(()=>e(!0)).catch(b=>{console.error(`Error attempting fullscreen: ${b.message}`)})},h=()=>{};return C.jsxs(Ma,{breadcrumbs:Hf,children:[C.jsx(la,{title:"Map"}),C.jsxs("div",{className:"flex flex-col h-full",children:[C.jsx(Qa,{isFullScreen:n,handleFullscreen:f,handleRefresh:h,theme:t,setTheme:i}),C.jsxs("div",{className:"flex flex-1 overflow-hidden",children:[C.jsx(ul,{drivers:s,showDrivers:o,setShowDrivers:a,coverageArea:l}),C.jsx(Ka,{theme:t,drivers:s,showDrivers:o})]})]})]})}export{lp as default};
