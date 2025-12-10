import{j as S,d as xo,g as No,r as Ge,H as Ro}from"./app-Dld7NnO4.js";import{u as Ao,G as ko,d as Do,l as Mo,M as Po,I as Oo}from"./esm-DRh2z_9d.js";import{B as _t}from"./app-logo-icon-C-uc16_a.js";import{C as Hs,c as Us,a as Lo,b as Fo,d as Bo}from"./card-B42-UKcj.js";import{C as Wo}from"./car-DqtsGHeA.js";import{U as Ho}from"./users-LQK_sUr5.js";import{D as Uo,e as jo,a as Vo,b as Yo,c as qo,f as $o}from"./dialog-Bt64mUIF.js";import{L as js}from"./label-CKD4QTHX.js";import{S as Go,a as zo,b as Xo,c as Ko,d as yn}from"./select-DBcVdvDL.js";import{T as Qo,S as Jo,a as Zo}from"./app-layout-CBSw1I6o.js";import{M as ea}from"./map-pin-XdH7LFEu.js";import{R as ta}from"./refresh-cw-C9Ek7f-c.js";import{c as Vs}from"./createLucideIcon-Cd4LM0SZ.js";import{T as na,a as ia,b as Mi,c as Pi}from"./tabs-BTLsV_17.js";import{S as Oi}from"./scroll-area-g2AMpr5i.js";import{B as sa}from"./badge-D_6xUwgG.js";import{S as ra}from"./separator-DjOI2z_8.js";/* empty css            */import"./index-BL2unmmd.js";import"./index-BdQq_4o_.js";import"./index-D18Ky27P.js";import"./index-CcqWftAJ.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oa=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aa=Vs("Layers",oa);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const la=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],ca=Vs("Maximize",la),ha={width:"100%",height:"100%"},ua={lat:10.6676,lng:122.9456},da=["places"];function fa({theme:n,drivers:e}){const{isLoaded:t}=Ao({googleMapsApiKey:"AIzaSyAicbS4J0S5M2DRMdOsImk3FGYFb8tJCPY",libraries:da});return t?S.jsx("div",{className:"h-full w-full",children:S.jsx(ko,{mapContainerStyle:ha,center:ua,zoom:12,options:{mapTypeId:n==="satellite"?"satellite":"roadmap",styles:n==="dark"?Do:n==="light"?Mo:[],disableDefaultUI:!0,zoomControl:!0,gestureHandling:"greedy"},children:e.map(i=>S.jsx(Po,{position:{lat:i.latitude,lng:i.longitude},label:"🚍"},i.drivers_id))})}):S.jsxs("div",{className:"relative h-[450px] flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden",children:[S.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"}),S.jsx("span",{className:"absolute mt-16 text-gray-700 dark:text-gray-200",children:"Loading map..."})]})}function pa({theme:n,drivers:e,showDrivers:t}){return S.jsxs("div",{className:"flex-1 relative",children:[S.jsx(Hs,{className:"h-full rounded-none border-t-0 border-r-0",children:S.jsx(Us,{className:"p-0 h-full",children:S.jsx(fa,{theme:n,drivers:t?e:[]})})}),S.jsxs("div",{className:"absolute top-4 right-4 flex flex-col gap-2",children:[S.jsx(_t,{size:"sm",variant:"secondary",className:"shadow-lg",children:S.jsx(Wo,{className:"h-4 w-4"})}),S.jsx(_t,{size:"sm",variant:"secondary",className:"shadow-lg",children:S.jsx(Ho,{className:"h-4 w-4"})})]})]})}function _a({isFullScreen:n,handleFullscreen:e,handleRefresh:t,theme:i,setTheme:s}){return S.jsx("div",{className:"flex flex-col gap-4 p-4 bg-background border-b",children:S.jsxs("div",{className:"flex items-center justify-between",children:[S.jsxs("div",{className:"flex items-center gap-3",children:[S.jsx("div",{className:"p-2.5 bg-primary rounded-xl",children:S.jsx(ea,{className:"h-6 w-6 text-primary-foreground"})}),S.jsx("div",{children:S.jsx(Qo,{size:"xl",weight:"bold",children:"Driver Tracker"})})]}),S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsxs(_t,{variant:"outline",size:"sm",onClick:t,children:[S.jsx(ta,{className:"h-4 w-4 mr-2"}),"Refresh"]}),S.jsxs(Uo,{children:[S.jsx(jo,{asChild:!0,children:S.jsxs(_t,{variant:"outline",size:"sm",children:[S.jsx(Jo,{className:"h-4 w-4 mr-2"}),"Settings"]})}),S.jsxs(Vo,{children:[S.jsxs(Yo,{children:[S.jsx(qo,{children:"Map Settings"}),S.jsx($o,{children:"Configure map display options and preferences"})]}),S.jsx("div",{className:"grid gap-4 py-4",children:S.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[S.jsx(js,{htmlFor:"theme",className:"text-right",children:"Theme"}),S.jsxs(Go,{defaultValue:"light",value:i,onValueChange:s,children:[S.jsx(zo,{className:"col-span-3",children:S.jsx(Xo,{})}),S.jsxs(Ko,{children:[S.jsx(yn,{value:"light",children:"Light"}),S.jsx(yn,{value:"dark",children:"Dark"}),S.jsx(yn,{value:"satellite",children:"Satellite"})]})]})]})})]})]}),S.jsxs(_t,{variant:"outline",size:"sm",onClick:e,children:[S.jsx(ca,{className:"h-4 w-4 mr-2"}),n?"Exit":"Fullscreen"]})]})]})})}function ma({drivers:n,showDrivers:e,setShowDrivers:t,coverageArea:i}){const s=[{label:"Active Drivers",checked:e,toggle:()=>t(!e),count:n.length}];return S.jsxs(Hs,{className:"w-80 rounded-none border-r border-t-0",children:[S.jsxs(Lo,{className:"pb-3",children:[S.jsx(Fo,{className:"text-lg",children:"Map Layers"}),S.jsx(Bo,{children:"View driver locations and manage tracking layers"})]}),S.jsx(Us,{className:"pt-0",children:S.jsxs(na,{defaultValue:"layers",className:"w-full",children:[S.jsxs(ia,{className:"grid w-full grid-cols-2",children:[S.jsxs(Mi,{value:"layers",children:[S.jsx(aa,{className:"h-4 w-4 mr-2"}),"Layers"]}),S.jsxs(Mi,{value:"info",children:[S.jsx(Oo,{className:"h-4 w-4 mr-2"}),"Info"]})]}),S.jsx(Pi,{value:"layers",className:"mt-4",children:S.jsx(Oi,{className:"h-64",children:S.jsx("div",{className:"space-y-3",children:s.map(r=>S.jsxs("div",{className:"flex items-center justify-between",children:[S.jsxs("div",{className:"flex items-center space-x-2",children:[S.jsx("input",{type:"checkbox",checked:r.checked,onChange:r.toggle,className:"rounded border-gray-300"}),S.jsx(js,{className:"text-sm font-medium",children:r.label})]}),S.jsx(sa,{variant:"outline",className:"text-xs",children:r.count})]},r.label))})})}),S.jsx(Pi,{value:"info",className:"mt-4",children:S.jsx(Oi,{className:"h-64",children:S.jsxs("div",{className:"space-y-3",children:[S.jsxs("div",{className:"text-sm",children:[S.jsx("div",{className:"font-medium mb-1",children:"Coverage Area"}),S.jsxs("div",{className:"text-muted-foreground",children:[i," km²"]})]}),S.jsx(ra,{}),S.jsxs("div",{className:"text-sm",children:[S.jsx("div",{className:"font-medium mb-1",children:"Last Updated"}),S.jsx("div",{className:"text-muted-foreground",children:"2 minutes ago"})]})]})})})]})})]})}const ga=()=>{};var Li={};/**
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
 */const Ys={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const I=function(n,e){if(!n)throw rt(e)},rt=function(n){return new Error("Firebase Database ("+Ys.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const qs=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},ya=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Jn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,c=l?n[s+2]:0,p=r>>2,d=(r&3)<<4|a>>4;let u=(a&15)<<2|c>>6,C=c&63;l||(C=64,o||(u=64)),i.push(t[p],t[d],t[u],t[C])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(qs(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):ya(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const d=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||c==null||d==null)throw new va;const u=r<<2|a>>4;if(i.push(u),c!==64){const C=a<<4&240|c>>2;if(i.push(C),d!==64){const E=c<<6&192|d;i.push(E)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class va extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $s=function(n){const e=qs(n);return Jn.encodeByteArray(e,!0)},Yt=function(n){return $s(n).replace(/\./g,"")},Mn=function(n){try{return Jn.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ca(n){return Gs(void 0,n)}function Gs(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Ea(t)||(n[t]=Gs(n[t],e[t]));return n}function Ea(n){return n!=="__proto__"}/**
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
 */function wa(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ia=()=>wa().__FIREBASE_DEFAULTS__,Sa=()=>{if(typeof process>"u"||typeof Li>"u")return;const n=Li.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ba=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Mn(n[1]);return e&&JSON.parse(e)},zs=()=>{try{return ga()||Ia()||Sa()||ba()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ta=n=>zs()?.emulatorHosts?.[n],xa=n=>{const e=Ta(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Xs=()=>zs()?.config;/**
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
 */class Zn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function ei(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Na(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Ra(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Yt(JSON.stringify(t)),Yt(JSON.stringify(o)),""].join(".")}const mt={};function Aa(){const n={prod:[],emulator:[]};for(const e of Object.keys(mt))mt[e]?n.emulator.push(e):n.prod.push(e);return n}function ka(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Fi=!1;function Da(n,e){if(typeof window>"u"||typeof document>"u"||!ei(window.location.host)||mt[n]===e||mt[n]||Fi)return;mt[n]=e;function t(u){return`__firebase__banner__${u}`}const i="__firebase__banner",r=Aa().prod.length>0;function o(){const u=document.getElementById(i);u&&u.remove()}function a(u){u.style.display="flex",u.style.background="#7faaf0",u.style.position="fixed",u.style.bottom="5px",u.style.left="5px",u.style.padding=".5em",u.style.borderRadius="5px",u.style.alignItems="center"}function l(u,C){u.setAttribute("width","24"),u.setAttribute("id",C),u.setAttribute("height","24"),u.setAttribute("viewBox","0 0 24 24"),u.setAttribute("fill","none"),u.style.marginLeft="-6px"}function c(){const u=document.createElement("span");return u.style.cursor="pointer",u.style.marginLeft="16px",u.style.fontSize="24px",u.innerHTML=" &times;",u.onclick=()=>{Fi=!0,o()},u}function p(u,C){u.setAttribute("id",C),u.innerText="Learn more",u.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",u.setAttribute("target","__blank"),u.style.paddingLeft="5px",u.style.textDecoration="underline"}function d(){const u=ka(i),C=t("text"),E=document.getElementById(C)||document.createElement("span"),R=t("learnmore"),D=document.getElementById(R)||document.createElement("a"),L=t("preprendIcon"),f=document.getElementById(L)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(u.created){const m=u.element;a(m),p(D,R);const h=c();l(f,L),m.append(f,E,D,h),document.body.appendChild(m)}r?(E.innerText="Preview backend disconnected.",f.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(f.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,E.innerText="Preview backend running in this workspace."),E.setAttribute("id",C)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}/**
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
 */function Ma(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ks(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ma())}function Pa(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Oa(){return Ys.NODE_ADMIN===!0}function La(){try{return typeof indexedDB=="object"}catch{return!1}}function Fa(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(t){e(t)}})}/**
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
 */const Ba="FirebaseError";class Dt extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Ba,Object.setPrototypeOf(this,Dt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qs.prototype.create)}}class Qs{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Wa(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Dt(s,a,i)}}function Wa(n,e){return n.replace(Ha,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Ha=/\{\$([^}]+)}/g;/**
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
 */function wt(n){return JSON.parse(n)}function ae(n){return JSON.stringify(n)}/**
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
 */const Js=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=wt(Mn(r[0])||""),t=wt(Mn(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},Ua=function(n){const e=Js(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},ja=function(n){const e=Js(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Ae(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function tt(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Bi(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function qt(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function $t(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(Wi(r)&&Wi(o)){if(!$t(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function Wi(n){return n!==null&&typeof n=="object"}/**
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
 */function Va(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
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
 */class Ya{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)i[d]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let d=0;d<16;d++)i[d]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let d=16;d<80;d++){const u=i[d-3]^i[d-8]^i[d-14]^i[d-16];i[d]=(u<<1|u>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,p;for(let d=0;d<80;d++){d<40?d<20?(c=a^r&(o^a),p=1518500249):(c=r^o^a,p=1859775393):d<60?(c=r&o|a&(r|o),p=2400959708):(c=r^o^a,p=3395469782);const u=(s<<5|s>>>27)+c+l+p+i[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=u}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function Zs(n,e){return`${n} failed: ${e} argument `}/**
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
 */const qa=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,I(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},ln=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function cn(n){return n&&n._delegate?n._delegate:n}class It{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Be="[DEFAULT]";/**
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
 */class $a{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Zn;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),i=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(za(e))try{this.getOrInitializeService({instanceIdentifier:Be})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Be){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Be){return this.instances.has(e)}getOptions(e=Be){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){const i=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(i)??new Set;s.add(e),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Ga(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Be){return this.component?this.component.multipleInstances?e:Be:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ga(n){return n===Be?void 0:n}function za(n){return n.instantiationMode==="EAGER"}/**
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
 */class Xa{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new $a(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var K;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(K||(K={}));const Ka={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},Qa=K.INFO,Ja={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},Za=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=Ja[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class er{constructor(e){this.name=e,this._logLevel=Qa,this._logHandler=Za,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in K))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ka[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...e),this._logHandler(this,K.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...e),this._logHandler(this,K.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,K.INFO,...e),this._logHandler(this,K.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,K.WARN,...e),this._logHandler(this,K.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...e),this._logHandler(this,K.ERROR,...e)}}const el=(n,e)=>e.some(t=>n instanceof t);let Hi,Ui;function tl(){return Hi||(Hi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nl(){return Ui||(Ui=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tr=new WeakMap,Pn=new WeakMap,nr=new WeakMap,vn=new WeakMap,ti=new WeakMap;function il(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(De(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&tr.set(t,n)}).catch(()=>{}),ti.set(e,n),e}function sl(n){if(Pn.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Pn.set(n,e)}let On={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Pn.get(n);if(e==="objectStoreNames")return n.objectStoreNames||nr.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return De(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function rl(n){On=n(On)}function ol(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Cn(this),e,...t);return nr.set(i,e.sort?e.sort():[e]),De(i)}:nl().includes(n)?function(...e){return n.apply(Cn(this),e),De(tr.get(this))}:function(...e){return De(n.apply(Cn(this),e))}}function al(n){return typeof n=="function"?ol(n):(n instanceof IDBTransaction&&sl(n),el(n,tl())?new Proxy(n,On):n)}function De(n){if(n instanceof IDBRequest)return il(n);if(vn.has(n))return vn.get(n);const e=al(n);return e!==n&&(vn.set(n,e),ti.set(e,n)),e}const Cn=n=>ti.get(n);function ll(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),a=De(o);return i&&o.addEventListener("upgradeneeded",l=>{i(De(o.result),l.oldVersion,l.newVersion,De(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const cl=["get","getKey","getAll","getAllKeys","count"],hl=["put","add","delete","clear"],En=new Map;function ji(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(En.get(e))return En.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=hl.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||cl.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),s&&l.done]))[0]};return En.set(e,r),r}rl(n=>({...n,get:(e,t,i)=>ji(e,t)||n.get(e,t,i),has:(e,t)=>!!ji(e,t)||n.has(e,t)}));/**
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
 */class ul{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(dl(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function dl(n){return n.getComponent()?.type==="VERSION"}const Ln="@firebase/app",Vi="0.14.4";/**
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
 */const Ne=new er("@firebase/app"),fl="@firebase/app-compat",pl="@firebase/analytics-compat",_l="@firebase/analytics",ml="@firebase/app-check-compat",gl="@firebase/app-check",yl="@firebase/auth",vl="@firebase/auth-compat",Cl="@firebase/database",El="@firebase/data-connect",wl="@firebase/database-compat",Il="@firebase/functions",Sl="@firebase/functions-compat",bl="@firebase/installations",Tl="@firebase/installations-compat",xl="@firebase/messaging",Nl="@firebase/messaging-compat",Rl="@firebase/performance",Al="@firebase/performance-compat",kl="@firebase/remote-config",Dl="@firebase/remote-config-compat",Ml="@firebase/storage",Pl="@firebase/storage-compat",Ol="@firebase/firestore",Ll="@firebase/ai",Fl="@firebase/firestore-compat",Bl="firebase",Wl="12.4.0";/**
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
 */const Fn="[DEFAULT]",Hl={[Ln]:"fire-core",[fl]:"fire-core-compat",[_l]:"fire-analytics",[pl]:"fire-analytics-compat",[gl]:"fire-app-check",[ml]:"fire-app-check-compat",[yl]:"fire-auth",[vl]:"fire-auth-compat",[Cl]:"fire-rtdb",[El]:"fire-data-connect",[wl]:"fire-rtdb-compat",[Il]:"fire-fn",[Sl]:"fire-fn-compat",[bl]:"fire-iid",[Tl]:"fire-iid-compat",[xl]:"fire-fcm",[Nl]:"fire-fcm-compat",[Rl]:"fire-perf",[Al]:"fire-perf-compat",[kl]:"fire-rc",[Dl]:"fire-rc-compat",[Ml]:"fire-gcs",[Pl]:"fire-gcs-compat",[Ol]:"fire-fst",[Fl]:"fire-fst-compat",[Ll]:"fire-vertex","fire-js":"fire-js",[Bl]:"fire-js-all"};/**
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
 */const St=new Map,Ul=new Map,Bn=new Map;function Yi(n,e){try{n.container.addComponent(e)}catch(t){Ne.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Gt(n){const e=n.name;if(Bn.has(e))return Ne.debug(`There were multiple attempts to register component ${e}.`),!1;Bn.set(e,n);for(const t of St.values())Yi(t,n);for(const t of Ul.values())Yi(t,n);return!0}function jl(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Vl(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Yl={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Me=new Qs("app","Firebase",Yl);/**
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
 */class ql{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new It("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Me.create("app-deleted",{appName:this._name})}}/**
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
 */const $l=Wl;function ir(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i={name:Fn,automaticDataCollectionEnabled:!0,...e},s=i.name;if(typeof s!="string"||!s)throw Me.create("bad-app-name",{appName:String(s)});if(t||(t=Xs()),!t)throw Me.create("no-options");const r=St.get(s);if(r){if($t(t,r.options)&&$t(i,r.config))return r;throw Me.create("duplicate-app",{appName:s})}const o=new Xa(s);for(const l of Bn.values())o.addComponent(l);const a=new ql(t,i,o);return St.set(s,a),a}function Gl(n=Fn){const e=St.get(n);if(!e&&n===Fn&&Xs())return ir();if(!e)throw Me.create("no-app",{appName:n});return e}function qi(){return Array.from(St.values())}function Qe(n,e,t){let i=Hl[n]??n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),r=e.match(/\s|\//);if(s||r){const o=[`Unable to register library "${i}" with version "${e}":`];s&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ne.warn(o.join(" "));return}Gt(new It(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const zl="firebase-heartbeat-database",Xl=1,bt="firebase-heartbeat-store";let wn=null;function sr(){return wn||(wn=ll(zl,Xl,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(bt)}catch(t){console.warn(t)}}}}).catch(n=>{throw Me.create("idb-open",{originalErrorMessage:n.message})})),wn}async function Kl(n){try{const t=(await sr()).transaction(bt),i=await t.objectStore(bt).get(rr(n));return await t.done,i}catch(e){if(e instanceof Dt)Ne.warn(e.message);else{const t=Me.create("idb-get",{originalErrorMessage:e?.message});Ne.warn(t.message)}}}async function $i(n,e){try{const i=(await sr()).transaction(bt,"readwrite");await i.objectStore(bt).put(e,rr(n)),await i.done}catch(t){if(t instanceof Dt)Ne.warn(t.message);else{const i=Me.create("idb-set",{originalErrorMessage:t?.message});Ne.warn(i.message)}}}function rr(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Ql=1024,Jl=30;class Zl{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new tc(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Gi();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats.length>Jl){const s=nc(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Ne.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Gi(),{heartbeatsToSend:t,unsentEntries:i}=ec(this._heartbeatsCache.heartbeats),s=Yt(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return Ne.warn(e),""}}}function Gi(){return new Date().toISOString().substring(0,10)}function ec(n,e=Ql){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),zi(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),zi(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class tc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return La()?Fa().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Kl(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return $i(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return $i(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function zi(n){return Yt(JSON.stringify({version:2,heartbeats:n})).length}function nc(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
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
 */function ic(n){Gt(new It("platform-logger",e=>new ul(e),"PRIVATE")),Gt(new It("heartbeat",e=>new Zl(e),"PRIVATE")),Qe(Ln,Vi,n),Qe(Ln,Vi,"esm2020"),Qe("fire-js","")}ic("");var Xi={};const Ki="@firebase/database",Qi="1.1.0";/**
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
 */let or="";function sc(n){or=n}/**
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
 */class rc{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ae(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:wt(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class oc{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Ae(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const ar=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new rc(e)}}catch{}return new oc},He=ar("localStorage"),ac=ar("sessionStorage");/**
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
 */const Je=new er("@firebase/database"),lc=(function(){let n=1;return function(){return n++}})(),lr=function(n){const e=qa(n),t=new Ya;t.update(e);const i=t.digest();return Jn.encodeByteArray(i)},Mt=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Mt.apply(null,i):typeof i=="object"?e+=ae(i):e+=i,e+=" "}return e};let gt=null,Ji=!0;const cc=function(n,e){I(!0,"Can't turn on custom loggers persistently."),Je.logLevel=K.VERBOSE,gt=Je.log.bind(Je)},le=function(...n){if(Ji===!0&&(Ji=!1,gt===null&&ac.get("logging_enabled")===!0&&cc()),gt){const e=Mt.apply(null,n);gt(e)}},Pt=function(n){return function(...e){le(n,...e)}},Wn=function(...n){const e="FIREBASE INTERNAL ERROR: "+Mt(...n);Je.error(e)},Re=function(...n){const e=`FIREBASE FATAL ERROR: ${Mt(...n)}`;throw Je.error(e),new Error(e)},ye=function(...n){const e="FIREBASE WARNING: "+Mt(...n);Je.warn(e)},hc=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ye("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},cr=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},uc=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},nt="[MIN_NAME]",Ue="[MAX_NAME]",ot=function(n,e){if(n===e)return 0;if(n===nt||e===Ue)return-1;if(e===nt||n===Ue)return 1;{const t=Zi(n),i=Zi(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},dc=function(n,e){return n===e?0:n<e?-1:1},ct=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+ae(e))},ni=function(n){if(typeof n!="object"||n===null)return ae(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=ae(e[i]),t+=":",t+=ni(n[e[i]]);return t+="}",t},hr=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function ge(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const ur=function(n){I(!cr(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,a,l;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const p=c.join("");let d="";for(l=0;l<64;l+=8){let u=parseInt(p.substr(l,8),2).toString(16);u.length===1&&(u="0"+u),d=d+u}return d.toLowerCase()},fc=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},pc=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function _c(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const mc=new RegExp("^-?(0*)\\d{1,10}$"),gc=-2147483648,yc=2147483647,Zi=function(n){if(mc.test(n)){const e=Number(n);if(e>=gc&&e<=yc)return e}return null},Ot=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw ye("Exception was thrown by user callback.",t),e},Math.floor(0))}},vc=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},yt=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Cc{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Vl(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(i=>this.appCheck=i)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){ye(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Ec{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(le("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ye(e)}}class jt{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}jt.OWNER="owner";/**
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
 */const ii="5",dr="v",fr="s",pr="r",_r="f",mr=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,gr="ls",yr="p",Hn="ac",vr="websocket",Cr="long_polling";/**
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
 */class Er{constructor(e,t,i,s,r=!1,o="",a=!1,l=!1,c=null){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=He.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&He.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function wc(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function wr(n,e,t){I(typeof e=="string","typeof type must == string"),I(typeof t=="object","typeof params must == object");let i;if(e===vr)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Cr)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);wc(n)&&(t.ns=n.namespace);const s=[];return ge(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
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
 */class Ic{constructor(){this.counters_={}}incrementCounter(e,t=1){Ae(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Ca(this.counters_)}}/**
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
 */const In={},Sn={};function si(n){const e=n.toString();return In[e]||(In[e]=new Ic),In[e]}function Sc(n,e){const t=n.toString();return Sn[t]||(Sn[t]=e()),Sn[t]}/**
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
 */class bc{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Ot(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const es="start",Tc="close",xc="pLPCommand",Nc="pRTLPCB",Ir="id",Sr="pw",br="ser",Rc="cb",Ac="seg",kc="ts",Dc="d",Mc="dframe",Tr=1870,xr=30,Pc=Tr-xr,Oc=25e3,Lc=3e4;class Xe{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Pt(e),this.stats_=si(t),this.urlFn=l=>(this.appCheckToken&&(l[Hn]=this.appCheckToken),wr(t,Cr,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new bc(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Lc)),uc(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ri((...r)=>{const[o,a,l,c,p]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===es)this.id=a,this.password=l;else if(o===Tc)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[es]="t",i[br]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[Rc]=this.scriptTagHolder.uniqueCallbackIdentifier),i[dr]=ii,this.transportSessionId&&(i[fr]=this.transportSessionId),this.lastSessionId&&(i[gr]=this.lastSessionId),this.applicationId&&(i[yr]=this.applicationId),this.appCheckToken&&(i[Hn]=this.appCheckToken),typeof location<"u"&&location.hostname&&mr.test(location.hostname)&&(i[pr]=_r);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Xe.forceAllow_=!0}static forceDisallow(){Xe.forceDisallow_=!0}static isAvailable(){return Xe.forceAllow_?!0:!Xe.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!fc()&&!pc()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=ae(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=$s(t),s=hr(i,Pc);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[Mc]="t",i[Ir]=e,i[Sr]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=ae(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class ri{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=lc(),window[xc+this.uniqueCallbackIdentifier]=e,window[Nc+this.uniqueCallbackIdentifier]=t,this.myIFrame=ri.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){le("frame writing exception"),a.stack&&le(a.stack),le(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||le("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ir]=this.myID,e[Sr]=this.myPW,e[br]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+xr+i.length<=Tr;){const o=this.pendingSegs.shift();i=i+"&"+Ac+s+"="+o.seg+"&"+kc+s+"="+o.ts+"&"+Dc+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(Oc)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{le("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const Fc=16384,Bc=45e3;let zt=null;typeof MozWebSocket<"u"?zt=MozWebSocket:typeof WebSocket<"u"&&(zt=WebSocket);class Ee{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Pt(this.connId),this.stats_=si(t),this.connURL=Ee.connectionURL_(t,o,a,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[dr]=ii,typeof location<"u"&&location.hostname&&mr.test(location.hostname)&&(o[pr]=_r),t&&(o[fr]=t),i&&(o[gr]=i),s&&(o[Hn]=s),r&&(o[yr]=r),wr(e,vr,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,He.set("previous_websocket_failure",!0);try{let i;Oa(),this.mySock=new zt(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Ee.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&zt!==null&&!Ee.forceDisallow_}static previouslyFailed(){return He.isInMemoryStorage||He.get("previous_websocket_failure")===!0}markConnectionHealthy(){He.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=wt(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(I(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=ae(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=hr(t,Fc);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Bc))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ee.responsesRequiredToBeHealthy=2;Ee.healthyTimeout=3e4;/**
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
 */class Tt{static get ALL_TRANSPORTS(){return[Xe,Ee]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Ee&&Ee.isAvailable();let i=t&&!Ee.previouslyFailed();if(e.webSocketOnly&&(t||ye("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Ee];else{const s=this.transports_=[];for(const r of Tt.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);Tt.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Tt.globalTransportInitialized_=!1;/**
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
 */const Wc=6e4,Hc=5e3,Uc=10*1024,jc=100*1024,bn="t",ts="d",Vc="s",ns="r",Yc="e",is="o",ss="a",rs="n",os="p",qc="h";class $c{constructor(e,t,i,s,r,o,a,l,c,p){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=p,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Pt("c:"+this.id+":"),this.transportManager_=new Tt(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=yt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>jc?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Uc?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(bn in e){const t=e[bn];t===ss?this.upgradeIfSecondaryHealthy_():t===ns?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===is&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=ct("t",e),i=ct("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:os,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ss,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:rs,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=ct("t",e),i=ct("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=ct(bn,e);if(ts in e){const i=e[ts];if(t===qc){const s={...i};this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===rs){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Vc?this.onConnectionShutdown_(i):t===ns?this.onReset_(i):t===Yc?Wn("Server Error: "+i):t===is?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Wn("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),ii!==i&&ye("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),yt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Wc))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):yt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Hc))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:os,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(He.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Nr{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class Rr{constructor(e){this.allowedEvents_=e,this.listeners_={},I(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){I(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class Xt extends Rr{static getInstance(){return new Xt}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ks()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return I(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const as=32,ls=768;class X{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function $(){return new X("")}function W(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Oe(n){return n.pieces_.length-n.pieceNum_}function Q(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new X(n.pieces_,e)}function Ar(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Gc(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function kr(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Dr(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new X(e,0)}function ie(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof X)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new X(t,0)}function H(n){return n.pieceNum_>=n.pieces_.length}function _e(n,e){const t=W(n),i=W(e);if(t===null)return e;if(t===i)return _e(Q(n),Q(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function oi(n,e){if(Oe(n)!==Oe(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function we(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(Oe(n)>Oe(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class zc{constructor(e,t){this.errorPrefix_=t,this.parts_=kr(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=ln(this.parts_[i]);Mr(this)}}function Xc(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=ln(e),Mr(n)}function Kc(n){const e=n.parts_.pop();n.byteLength_-=ln(e),n.parts_.length>0&&(n.byteLength_-=1)}function Mr(n){if(n.byteLength_>ls)throw new Error(n.errorPrefix_+"has a key path longer than "+ls+" bytes ("+n.byteLength_+").");if(n.parts_.length>as)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+as+") or object contains a cycle "+We(n))}function We(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class ai extends Rr{static getInstance(){return new ai}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return I(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ht=1e3,Qc=300*1e3,cs=30*1e3,Jc=1.3,Zc=3e4,eh="server_kill",hs=3;class xe extends Nr{constructor(e,t,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=xe.nextPersistentConnectionId_++,this.log_=Pt("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ht,this.maxReconnectDelay_=Qc,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ai.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Xt.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(ae(r)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new Zn,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;xe.warnOnListenWarnings_(l,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Ae(e,"w")){const i=tt(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();ye(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||ja(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=cs)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Ua(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ae(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Wn("Unrecognized action received from server: "+ae(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ht,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ht,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Zc&&(this.reconnectDelay_=ht),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Jc)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+xe.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(d){I(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const p=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,u]=await Promise.all([this.authTokenProvider_.getToken(p),this.appCheckTokenProvider_.getToken(p)]);o?le("getToken() completed but was canceled"):(le("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=u&&u.token,a=new $c(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,C=>{ye(C+" ("+this.repoInfo_.toString()+")"),this.interrupt(eh)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&ye(d),l())}}}interrupt(e){le("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){le("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Bi(this.interruptReasons_)&&(this.reconnectDelay_=ht,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>ni(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new X(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){le("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=hs&&(this.reconnectDelay_=cs,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){le("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=hs&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+or.replace(/\./g,"-")]=1,Ks()?e["framework.cordova"]=1:Pa()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Xt.getInstance().currentlyOnline();return Bi(this.interruptReasons_)&&e}}xe.nextPersistentConnectionId_=0;xe.nextConnectionId_=0;/**
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
 */class B{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new B(e,t)}}/**
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
 */class hn{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new B(nt,e),s=new B(nt,t);return this.compare(i,s)!==0}minPost(){return B.MIN}}/**
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
 */let Wt;class Pr extends hn{static get __EMPTY_NODE(){return Wt}static set __EMPTY_NODE(e){Wt=e}compare(e,t){return ot(e.name,t.name)}isDefinedOn(e){throw rt("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return B.MIN}maxPost(){return new B(Ue,Wt)}makePost(e,t){return I(typeof e=="string","KeyIndex indexValue must always be a string."),new B(e,Wt)}toString(){return".key"}}const Ze=new Pr;/**
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
 */class Ht{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class oe{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??oe.RED,this.left=s??me.EMPTY_NODE,this.right=r??me.EMPTY_NODE}copy(e,t,i,s,r){return new oe(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return me.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return me.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,oe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,oe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}oe.RED=!0;oe.BLACK=!1;class th{copy(e,t,i,s,r){return this}insert(e,t,i){return new oe(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class me{constructor(e,t=me.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new me(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,oe.BLACK,null,null))}remove(e){return new me(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,oe.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ht(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Ht(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Ht(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Ht(this.root_,null,this.comparator_,!0,e)}}me.EMPTY_NODE=new th;/**
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
 */function nh(n,e){return ot(n.name,e.name)}function li(n,e){return ot(n,e)}/**
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
 */let Un;function ih(n){Un=n}const Or=function(n){return typeof n=="number"?"number:"+ur(n):"string:"+n},Lr=function(n){if(n.isLeafNode()){const e=n.val();I(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ae(e,".sv"),"Priority must be a string or number.")}else I(n===Un||n.isEmpty(),"priority of unexpected type.");I(n===Un||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let us;class re{static set __childrenNodeConstructor(e){us=e}static get __childrenNodeConstructor(){return us}constructor(e,t=re.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Lr(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new re(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:re.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return H(e)?this:W(e)===".priority"?this.priorityNode_:re.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:re.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=W(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(I(i!==".priority"||Oe(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,re.__childrenNodeConstructor.EMPTY_NODE.updateChild(Q(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Or(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=ur(this.value_):e+=this.value_,this.lazyHash_=lr(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===re.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof re.__childrenNodeConstructor?-1:(I(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=re.VALUE_TYPE_ORDER.indexOf(t),r=re.VALUE_TYPE_ORDER.indexOf(i);return I(s>=0,"Unknown leaf type: "+t),I(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}re.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Fr,Br;function sh(n){Fr=n}function rh(n){Br=n}class oh extends hn{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?ot(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return B.MIN}maxPost(){return new B(Ue,new re("[PRIORITY-POST]",Br))}makePost(e,t){const i=Fr(e);return new B(t,new re("[PRIORITY-POST]",i))}toString(){return".priority"}}const te=new oh;/**
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
 */const ah=Math.log(2);class lh{constructor(e){const t=r=>parseInt(Math.log(r)/ah,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Kt=function(n,e,t,i){n.sort(e);const s=function(l,c){const p=c-l;let d,u;if(p===0)return null;if(p===1)return d=n[l],u=t?t(d):d,new oe(u,d.node,oe.BLACK,null,null);{const C=parseInt(p/2,10)+l,E=s(l,C),R=s(C+1,c);return d=n[C],u=t?t(d):d,new oe(u,d.node,oe.BLACK,E,R)}},r=function(l){let c=null,p=null,d=n.length;const u=function(E,R){const D=d-E,L=d;d-=E;const f=s(D+1,L),m=n[D],h=t?t(m):m;C(new oe(h,m.node,R,null,f))},C=function(E){c?(c.left=E,c=E):(p=E,c=E)};for(let E=0;E<l.count;++E){const R=l.nextBitIsOne(),D=Math.pow(2,l.count-(E+1));R?u(D,oe.BLACK):(u(D,oe.BLACK),u(D,oe.RED))}return p},o=new lh(n.length),a=r(o);return new me(i||e,a)};/**
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
 */let Tn;const ze={};class Te{static get Default(){return I(ze&&te,"ChildrenNode.ts has not been loaded"),Tn=Tn||new Te({".priority":ze},{".priority":te}),Tn}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=tt(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof me?t:null}hasIndex(e){return Ae(this.indexSet_,e.toString())}addIndex(e,t){I(e!==Ze,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(B.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Kt(i,e.getCompare()):a=ze;const l=e.toString(),c={...this.indexSet_};c[l]=e;const p={...this.indexes_};return p[l]=a,new Te(p,c)}addToIndexes(e,t){const i=qt(this.indexes_,(s,r)=>{const o=tt(this.indexSet_,r);if(I(o,"Missing index implementation for "+r),s===ze)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(B.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Kt(a,o.getCompare())}else return ze;else{const a=t.get(e.name);let l=s;return a&&(l=l.remove(new B(e.name,a))),l.insert(e,e.node)}});return new Te(i,this.indexSet_)}removeFromIndexes(e,t){const i=qt(this.indexes_,s=>{if(s===ze)return s;{const r=t.get(e.name);return r?s.remove(new B(e.name,r)):s}});return new Te(i,this.indexSet_)}}/**
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
 */let ut;class M{static get EMPTY_NODE(){return ut||(ut=new M(new me(li),null,Te.Default))}constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Lr(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ut}updatePriority(e){return this.children_.isEmpty()?this:new M(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?ut:t}}getChild(e){const t=W(e);return t===null?this:this.getImmediateChild(t).getChild(Q(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(I(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new B(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?ut:this.priorityNode_;return new M(s,o,r)}}updateChild(e,t){const i=W(e);if(i===null)return t;{I(W(e)!==".priority"||Oe(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(Q(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(te,(o,a)=>{t[o]=a.val(e),i++,r&&M.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Or(this.getPriority().val())+":"),this.forEachChild(te,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":lr(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new B(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new B(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new B(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,B.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,B.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Lt?-1:0}withIndex(e){if(e===Ze||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new M(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ze||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(te),s=t.getIterator(te);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ze?null:this.indexMap_.get(e.toString())}}M.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class ch extends M{constructor(){super(new me(li),M.EMPTY_NODE,Te.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return M.EMPTY_NODE}isEmpty(){return!1}}const Lt=new ch;Object.defineProperties(B,{MIN:{value:new B(nt,M.EMPTY_NODE)},MAX:{value:new B(Ue,Lt)}});Pr.__EMPTY_NODE=M.EMPTY_NODE;re.__childrenNodeConstructor=M;ih(Lt);rh(Lt);/**
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
 */const hh=!0;function ce(n,e=null){if(n===null)return M.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),I(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new re(t,ce(e))}if(!(n instanceof Array)&&hh){const t=[];let i=!1;if(ge(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=ce(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),t.push(new B(o,l)))}}),t.length===0)return M.EMPTY_NODE;const r=Kt(t,nh,o=>o.name,li);if(i){const o=Kt(t,te.getCompare());return new M(r,ce(e),new Te({".priority":o},{".priority":te}))}else return new M(r,ce(e),Te.Default)}else{let t=M.EMPTY_NODE;return ge(n,(i,s)=>{if(Ae(n,i)&&i.substring(0,1)!=="."){const r=ce(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(ce(e))}}sh(ce);/**
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
 */class uh extends hn{constructor(e){super(),this.indexPath_=e,I(!H(e)&&W(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?ot(e.name,t.name):r}makePost(e,t){const i=ce(e),s=M.EMPTY_NODE.updateChild(this.indexPath_,i);return new B(t,s)}maxPost(){const e=M.EMPTY_NODE.updateChild(this.indexPath_,Lt);return new B(Ue,e)}toString(){return kr(this.indexPath_,0).join("/")}}/**
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
 */class dh extends hn{compare(e,t){const i=e.node.compareTo(t.node);return i===0?ot(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return B.MIN}maxPost(){return B.MAX}makePost(e,t){const i=ce(e);return new B(t,i)}toString(){return".value"}}const fh=new dh;/**
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
 */function Wr(n){return{type:"value",snapshotNode:n}}function it(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function xt(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Nt(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function ph(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class ci{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){I(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(xt(t,a)):I(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(it(t,i)):o.trackChildChange(Nt(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(te,(s,r)=>{t.hasChild(s)||i.trackChildChange(xt(s,r))}),t.isLeafNode()||t.forEachChild(te,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(Nt(s,r,o))}else i.trackChildChange(it(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?M.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Rt{constructor(e){this.indexedFilter_=new ci(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Rt.getStartPost_(e),this.endPost_=Rt.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,o){return this.matches(new B(t,i))||(i=M.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=M.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(M.EMPTY_NODE);const r=this;return t.forEachChild(te,(o,a)=>{r.matches(new B(o,a))||(s=s.updateImmediateChild(o,M.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class _h{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new Rt(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new B(t,i))||(i=M.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=M.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=M.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(M.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,M.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(u,C)=>d(C,u)}else o=this.index_.getCompare();const a=e;I(a.numChildren()===this.limit_,"");const l=new B(t,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),p=this.rangedFilter_.matches(l);if(a.hasChild(t)){const d=a.getImmediateChild(t);let u=s.getChildAfterChild(this.index_,c,this.reverse_);for(;u!=null&&(u.name===t||a.hasChild(u.name));)u=s.getChildAfterChild(this.index_,u,this.reverse_);const C=u==null?1:o(u,l);if(p&&!i.isEmpty()&&C>=0)return r?.trackChildChange(Nt(t,i,d)),a.updateImmediateChild(t,i);{r?.trackChildChange(xt(t,d));const R=a.updateImmediateChild(t,M.EMPTY_NODE);return u!=null&&this.rangedFilter_.matches(u)?(r?.trackChildChange(it(u.name,u.node)),R.updateImmediateChild(u.name,u.node)):R}}else return i.isEmpty()?e:p&&o(c,l)>=0?(r!=null&&(r.trackChildChange(xt(c.name,c.node)),r.trackChildChange(it(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(c.name,M.EMPTY_NODE)):e}}/**
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
 */class hi{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=te}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:nt}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ue}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===te}copy(){const e=new hi;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function mh(n){return n.loadsAllData()?new ci(n.getIndex()):n.hasLimit()?new _h(n):new Rt(n)}function ds(n){const e={};if(n.isDefault())return e;let t;if(n.index_===te?t="$priority":n.index_===fh?t="$value":n.index_===Ze?t="$key":(I(n.index_ instanceof uh,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=ae(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=ae(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+ae(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=ae(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+ae(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function fs(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==te&&(e.i=n.index_.toString()),e}/**
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
 */class Qt extends Nr{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(I(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Pt("p:rest:"),this.listens_={}}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Qt.getListenId_(e,i),a={};this.listens_[o]=a;const l=ds(e._queryParams);this.restRequest_(r+".json",l,(c,p)=>{let d=p;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,i),tt(this.listens_,o)===a){let u;c?c===401?u="permission_denied":u="rest_error:"+c:u="ok",s(u,null)}})}unlisten(e,t){const i=Qt.getListenId_(e,t);delete this.listens_[i]}get(e){const t=ds(e._queryParams),i=e._path.toString(),s=new Zn;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Va(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=wt(a.responseText)}catch{ye("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&ye("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class gh{constructor(){this.rootNode_=M.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function Jt(){return{value:null,children:new Map}}function Hr(n,e,t){if(H(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=W(e);n.children.has(i)||n.children.set(i,Jt());const s=n.children.get(i);e=Q(e),Hr(s,e,t)}}function jn(n,e,t){n.value!==null?t(e,n.value):yh(n,(i,s)=>{const r=new X(e.toString()+"/"+i);jn(s,r,t)})}function yh(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
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
 */class vh{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&ge(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
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
 */const ps=10*1e3,Ch=30*1e3,Eh=300*1e3;class wh{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new vh(e);const i=ps+(Ch-ps)*Math.random();yt(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;ge(e,(s,r)=>{r>0&&Ae(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),yt(this.reportStats_.bind(this),Math.floor(Math.random()*2*Eh))}}/**
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
 */var Ie;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ie||(Ie={}));function Ur(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ui(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function di(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class Zt{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=Ie.ACK_USER_WRITE,this.source=Ur()}operationForChild(e){if(H(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new X(e));return new Zt($(),t,this.revert)}}else return I(W(this.path)===e,"operationForChild called for unrelated child."),new Zt(Q(this.path),this.affectedTree,this.revert)}}/**
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
 */class At{constructor(e,t){this.source=e,this.path=t,this.type=Ie.LISTEN_COMPLETE}operationForChild(e){return H(this.path)?new At(this.source,$()):new At(this.source,Q(this.path))}}/**
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
 */class je{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=Ie.OVERWRITE}operationForChild(e){return H(this.path)?new je(this.source,$(),this.snap.getImmediateChild(e)):new je(this.source,Q(this.path),this.snap)}}/**
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
 */class kt{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=Ie.MERGE}operationForChild(e){if(H(this.path)){const t=this.children.subtree(new X(e));return t.isEmpty()?null:t.value?new je(this.source,$(),t.value):new kt(this.source,$(),t)}else return I(W(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new kt(this.source,Q(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Ve{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(H(e))return this.isFullyInitialized()&&!this.filtered_;const t=W(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Ih{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Sh(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(ph(o.childName,o.snapshotNode))}),dt(n,s,"child_removed",e,i,t),dt(n,s,"child_added",e,i,t),dt(n,s,"child_moved",r,i,t),dt(n,s,"child_changed",e,i,t),dt(n,s,"value",e,i,t),s}function dt(n,e,t,i,s,r){const o=i.filter(a=>a.type===t);o.sort((a,l)=>Th(n,a,l)),o.forEach(a=>{const l=bh(n,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function bh(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Th(n,e,t){if(e.childName==null||t.childName==null)throw rt("Should only compare child_ events.");const i=new B(e.childName,e.snapshotNode),s=new B(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
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
 */function un(n,e){return{eventCache:n,serverCache:e}}function vt(n,e,t,i){return un(new Ve(e,t,i),n.serverCache)}function jr(n,e,t,i){return un(n.eventCache,new Ve(e,t,i))}function Vn(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Ye(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let xn;const xh=()=>(xn||(xn=new me(dc)),xn);class J{static fromObject(e){let t=new J(null);return ge(e,(i,s)=>{t=t.set(new X(i),s)}),t}constructor(e,t=xh()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:$(),value:this.value};if(H(e))return null;{const i=W(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(Q(e),t);return r!=null?{path:ie(new X(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(H(e))return this;{const t=W(e),i=this.children.get(t);return i!==null?i.subtree(Q(e)):new J(null)}}set(e,t){if(H(e))return new J(t,this.children);{const i=W(e),r=(this.children.get(i)||new J(null)).set(Q(e),t),o=this.children.insert(i,r);return new J(this.value,o)}}remove(e){if(H(e))return this.children.isEmpty()?new J(null):new J(null,this.children);{const t=W(e),i=this.children.get(t);if(i){const s=i.remove(Q(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new J(null):new J(this.value,r)}else return this}}get(e){if(H(e))return this.value;{const t=W(e),i=this.children.get(t);return i?i.get(Q(e)):null}}setTree(e,t){if(H(e))return t;{const i=W(e),r=(this.children.get(i)||new J(null)).setTree(Q(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new J(this.value,o)}}fold(e){return this.fold_($(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(ie(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,$(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(H(e))return null;{const r=W(e),o=this.children.get(r);return o?o.findOnPath_(Q(e),ie(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,$(),t)}foreachOnPath_(e,t,i){if(H(e))return this;{this.value&&i(t,this.value);const s=W(e),r=this.children.get(s);return r?r.foreachOnPath_(Q(e),ie(t,s),i):new J(null)}}foreach(e){this.foreach_($(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(ie(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
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
 */class Se{constructor(e){this.writeTree_=e}static empty(){return new Se(new J(null))}}function Ct(n,e,t){if(H(e))return new Se(new J(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=_e(s,e);return r=r.updateChild(o,t),new Se(n.writeTree_.set(s,r))}else{const s=new J(t),r=n.writeTree_.setTree(e,s);return new Se(r)}}}function _s(n,e,t){let i=n;return ge(t,(s,r)=>{i=Ct(i,ie(e,s),r)}),i}function ms(n,e){if(H(e))return Se.empty();{const t=n.writeTree_.setTree(e,new J(null));return new Se(t)}}function Yn(n,e){return qe(n,e)!=null}function qe(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(_e(t.path,e)):null}function gs(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(te,(i,s)=>{e.push(new B(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new B(i,s.value))}),e}function Pe(n,e){if(H(e))return n;{const t=qe(n,e);return t!=null?new Se(new J(t)):new Se(n.writeTree_.subtree(e))}}function qn(n){return n.writeTree_.isEmpty()}function st(n,e){return Vr($(),n.writeTree_,e)}function Vr(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(I(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=Vr(ie(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(ie(n,".priority"),i)),t}}/**
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
 */function fi(n,e){return Gr(e,n)}function Nh(n,e,t,i,s){I(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=Ct(n.visibleWrites,e,t)),n.lastWriteId=i}function Rh(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function Ah(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);I(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&kh(a,i.path)?s=!1:we(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return Dh(n),!0;if(i.snap)n.visibleWrites=ms(n.visibleWrites,i.path);else{const a=i.children;ge(a,l=>{n.visibleWrites=ms(n.visibleWrites,ie(i.path,l))})}return!0}else return!1}function kh(n,e){if(n.snap)return we(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&we(ie(n.path,t),e))return!0;return!1}function Dh(n){n.visibleWrites=Yr(n.allWrites,Mh,$()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Mh(n){return n.visible}function Yr(n,e,t){let i=Se.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let a;if(r.snap)we(t,o)?(a=_e(t,o),i=Ct(i,a,r.snap)):we(o,t)&&(a=_e(o,t),i=Ct(i,$(),r.snap.getChild(a)));else if(r.children){if(we(t,o))a=_e(t,o),i=_s(i,a,r.children);else if(we(o,t))if(a=_e(o,t),H(a))i=_s(i,$(),r.children);else{const l=tt(r.children,W(a));if(l){const c=l.getChild(Q(a));i=Ct(i,$(),c)}}}else throw rt("WriteRecord should have .snap or .children")}}return i}function qr(n,e,t,i,s){if(!i&&!s){const r=qe(n.visibleWrites,e);if(r!=null)return r;{const o=Pe(n.visibleWrites,e);if(qn(o))return t;if(t==null&&!Yn(o,$()))return null;{const a=t||M.EMPTY_NODE;return st(o,a)}}}else{const r=Pe(n.visibleWrites,e);if(!s&&qn(r))return t;if(!s&&t==null&&!Yn(r,$()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(we(c.path,e)||we(e,c.path))},a=Yr(n.allWrites,o,e),l=t||M.EMPTY_NODE;return st(a,l)}}}function Ph(n,e,t){let i=M.EMPTY_NODE;const s=qe(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(te,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=Pe(n.visibleWrites,e);return t.forEachChild(te,(o,a)=>{const l=st(Pe(r,new X(o)),a);i=i.updateImmediateChild(o,l)}),gs(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Pe(n.visibleWrites,e);return gs(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function Oh(n,e,t,i,s){I(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=ie(e,t);if(Yn(n.visibleWrites,r))return null;{const o=Pe(n.visibleWrites,r);return qn(o)?s.getChild(t):st(o,s.getChild(t))}}function Lh(n,e,t,i){const s=ie(e,t),r=qe(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=Pe(n.visibleWrites,s);return st(o,i.getNode().getImmediateChild(t))}else return null}function Fh(n,e){return qe(n.visibleWrites,e)}function Bh(n,e,t,i,s,r,o){let a;const l=Pe(n.visibleWrites,e),c=qe(l,$());if(c!=null)a=c;else if(t!=null)a=st(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const p=[],d=o.getCompare(),u=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let C=u.getNext();for(;C&&p.length<s;)d(C,i)!==0&&p.push(C),C=u.getNext();return p}else return[]}function Wh(){return{visibleWrites:Se.empty(),allWrites:[],lastWriteId:-1}}function en(n,e,t,i){return qr(n.writeTree,n.treePath,e,t,i)}function pi(n,e){return Ph(n.writeTree,n.treePath,e)}function ys(n,e,t,i){return Oh(n.writeTree,n.treePath,e,t,i)}function tn(n,e){return Fh(n.writeTree,ie(n.treePath,e))}function Hh(n,e,t,i,s,r){return Bh(n.writeTree,n.treePath,e,t,i,s,r)}function _i(n,e,t){return Lh(n.writeTree,n.treePath,e,t)}function $r(n,e){return Gr(ie(n.treePath,e),n.writeTree)}function Gr(n,e){return{treePath:n,writeTree:e}}/**
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
 */class Uh{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;I(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),I(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,Nt(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,xt(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,it(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,Nt(i,e.snapshotNode,s.oldSnap));else throw rt("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class jh{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const zr=new jh;class mi{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Ve(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return _i(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ye(this.viewCache_),r=Hh(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
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
 */function Vh(n){return{filter:n}}function Yh(n,e){I(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),I(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function qh(n,e,t,i,s){const r=new Uh;let o,a;if(t.type===Ie.OVERWRITE){const c=t;c.source.fromUser?o=$n(n,e,c.path,c.snap,i,s,r):(I(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!H(c.path),o=nn(n,e,c.path,c.snap,i,s,a,r))}else if(t.type===Ie.MERGE){const c=t;c.source.fromUser?o=Gh(n,e,c.path,c.children,i,s,r):(I(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Gn(n,e,c.path,c.children,i,s,a,r))}else if(t.type===Ie.ACK_USER_WRITE){const c=t;c.revert?o=Kh(n,e,c.path,i,s,r):o=zh(n,e,c.path,c.affectedTree,i,s,r)}else if(t.type===Ie.LISTEN_COMPLETE)o=Xh(n,e,t.path,i,r);else throw rt("Unknown operation type: "+t.type);const l=r.getChanges();return $h(e,o,l),{viewCache:o,changes:l}}function $h(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Vn(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(Wr(Vn(e)))}}function Xr(n,e,t,i,s,r){const o=e.eventCache;if(tn(i,t)!=null)return e;{let a,l;if(H(t))if(I(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Ye(e),p=c instanceof M?c:M.EMPTY_NODE,d=pi(i,p);a=n.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=en(i,Ye(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=W(t);if(c===".priority"){I(Oe(t)===1,"Can't have a priority with additional path components");const p=o.getNode();l=e.serverCache.getNode();const d=ys(i,t,p,l);d!=null?a=n.filter.updatePriority(p,d):a=o.getNode()}else{const p=Q(t);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const u=ys(i,t,o.getNode(),l);u!=null?d=o.getNode().getImmediateChild(c).updateChild(p,u):d=o.getNode().getImmediateChild(c)}else d=_i(i,c,e.serverCache);d!=null?a=n.filter.updateChild(o.getNode(),c,d,p,s,r):a=o.getNode()}}return vt(e,a,o.isFullyInitialized()||H(t),n.filter.filtersNodes())}}function nn(n,e,t,i,s,r,o,a){const l=e.serverCache;let c;const p=o?n.filter:n.filter.getIndexedFilter();if(H(t))c=p.updateFullNode(l.getNode(),i,null);else if(p.filtersNodes()&&!l.isFiltered()){const C=l.getNode().updateChild(t,i);c=p.updateFullNode(l.getNode(),C,null)}else{const C=W(t);if(!l.isCompleteForPath(t)&&Oe(t)>1)return e;const E=Q(t),D=l.getNode().getImmediateChild(C).updateChild(E,i);C===".priority"?c=p.updatePriority(l.getNode(),D):c=p.updateChild(l.getNode(),C,D,E,zr,null)}const d=jr(e,c,l.isFullyInitialized()||H(t),p.filtersNodes()),u=new mi(s,d,r);return Xr(n,d,t,s,u,a)}function $n(n,e,t,i,s,r,o){const a=e.eventCache;let l,c;const p=new mi(s,e,r);if(H(t))c=n.filter.updateFullNode(e.eventCache.getNode(),i,o),l=vt(e,c,!0,n.filter.filtersNodes());else{const d=W(t);if(d===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),i),l=vt(e,c,a.isFullyInitialized(),a.isFiltered());else{const u=Q(t),C=a.getNode().getImmediateChild(d);let E;if(H(u))E=i;else{const R=p.getCompleteChild(d);R!=null?Ar(u)===".priority"&&R.getChild(Dr(u)).isEmpty()?E=R:E=R.updateChild(u,i):E=M.EMPTY_NODE}if(C.equals(E))l=e;else{const R=n.filter.updateChild(a.getNode(),d,E,u,p,o);l=vt(e,R,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function vs(n,e){return n.eventCache.isCompleteForChild(e)}function Gh(n,e,t,i,s,r,o){let a=e;return i.foreach((l,c)=>{const p=ie(t,l);vs(e,W(p))&&(a=$n(n,a,p,c,s,r,o))}),i.foreach((l,c)=>{const p=ie(t,l);vs(e,W(p))||(a=$n(n,a,p,c,s,r,o))}),a}function Cs(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Gn(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;H(t)?c=i:c=new J(null).setTree(t,i);const p=e.serverCache.getNode();return c.children.inorderTraversal((d,u)=>{if(p.hasChild(d)){const C=e.serverCache.getNode().getImmediateChild(d),E=Cs(n,C,u);l=nn(n,l,new X(d),E,s,r,o,a)}}),c.children.inorderTraversal((d,u)=>{const C=!e.serverCache.isCompleteForChild(d)&&u.value===null;if(!p.hasChild(d)&&!C){const E=e.serverCache.getNode().getImmediateChild(d),R=Cs(n,E,u);l=nn(n,l,new X(d),R,s,r,o,a)}}),l}function zh(n,e,t,i,s,r,o){if(tn(s,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(H(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return nn(n,e,t,l.getNode().getChild(t),s,r,a,o);if(H(t)){let c=new J(null);return l.getNode().forEachChild(Ze,(p,d)=>{c=c.set(new X(p),d)}),Gn(n,e,t,c,s,r,a,o)}else return e}else{let c=new J(null);return i.foreach((p,d)=>{const u=ie(t,p);l.isCompleteForPath(u)&&(c=c.set(p,l.getNode().getChild(u)))}),Gn(n,e,t,c,s,r,a,o)}}function Xh(n,e,t,i,s){const r=e.serverCache,o=jr(e,r.getNode(),r.isFullyInitialized()||H(t),r.isFiltered());return Xr(n,o,t,i,zr,s)}function Kh(n,e,t,i,s,r){let o;if(tn(i,t)!=null)return e;{const a=new mi(i,e,s),l=e.eventCache.getNode();let c;if(H(t)||W(t)===".priority"){let p;if(e.serverCache.isFullyInitialized())p=en(i,Ye(e));else{const d=e.serverCache.getNode();I(d instanceof M,"serverChildren would be complete if leaf node"),p=pi(i,d)}p=p,c=n.filter.updateFullNode(l,p,r)}else{const p=W(t);let d=_i(i,p,e.serverCache);d==null&&e.serverCache.isCompleteForChild(p)&&(d=l.getImmediateChild(p)),d!=null?c=n.filter.updateChild(l,p,d,Q(t),a,r):e.eventCache.getNode().hasChild(p)?c=n.filter.updateChild(l,p,M.EMPTY_NODE,Q(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=en(i,Ye(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||tn(i,$())!=null,vt(e,c,o,n.filter.filtersNodes())}}/**
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
 */class Qh{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new ci(i.getIndex()),r=mh(i);this.processor_=Vh(r);const o=t.serverCache,a=t.eventCache,l=s.updateFullNode(M.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(M.EMPTY_NODE,a.getNode(),null),p=new Ve(l,o.isFullyInitialized(),s.filtersNodes()),d=new Ve(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=un(d,p),this.eventGenerator_=new Ih(this.query_)}get query(){return this.query_}}function Jh(n){return n.viewCache_.serverCache.getNode()}function Zh(n,e){const t=Ye(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!H(e)&&!t.getImmediateChild(W(e)).isEmpty())?t.getChild(e):null}function Es(n){return n.eventRegistrations_.length===0}function eu(n,e){n.eventRegistrations_.push(e)}function ws(n,e,t){const i=[];if(t){I(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function Is(n,e,t,i){e.type===Ie.MERGE&&e.source.queryId!==null&&(I(Ye(n.viewCache_),"We should always have a full cache before handling merges"),I(Vn(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=qh(n.processor_,s,e,t,i);return Yh(n.processor_,r.viewCache),I(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Kr(n,r.changes,r.viewCache.eventCache.getNode(),null)}function tu(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(te,(r,o)=>{i.push(it(r,o))}),t.isFullyInitialized()&&i.push(Wr(t.getNode())),Kr(n,i,t.getNode(),e)}function Kr(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return Sh(n.eventGenerator_,e,t,s)}/**
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
 */let sn;class nu{constructor(){this.views=new Map}}function iu(n){I(!sn,"__referenceConstructor has already been defined"),sn=n}function su(){return I(sn,"Reference.ts has not been loaded"),sn}function ru(n){return n.views.size===0}function gi(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return I(r!=null,"SyncTree gave us an op for an invalid query."),Is(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(Is(o,e,t,i));return r}}function ou(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=en(t,s?i:null),l=!1;a?l=!0:i instanceof M?(a=pi(t,i),l=!1):(a=M.EMPTY_NODE,l=!1);const c=un(new Ve(a,l,!1),new Ve(i,s,!1));return new Qh(e,c)}return o}function au(n,e,t,i,s,r){const o=ou(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),eu(o,t),tu(o,t)}function lu(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const a=Le(n);if(s==="default")for(const[l,c]of n.views.entries())o=o.concat(ws(c,t,i)),Es(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(s);l&&(o=o.concat(ws(l,t,i)),Es(l)&&(n.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Le(n)&&r.push(new(su())(e._repo,e._path)),{removed:r,events:o}}function Qr(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function et(n,e){let t=null;for(const i of n.views.values())t=t||Zh(i,e);return t}function Jr(n,e){if(e._queryParams.loadsAllData())return dn(n);{const i=e._queryIdentifier;return n.views.get(i)}}function Zr(n,e){return Jr(n,e)!=null}function Le(n){return dn(n)!=null}function dn(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let rn;function cu(n){I(!rn,"__referenceConstructor has already been defined"),rn=n}function hu(){return I(rn,"Reference.ts has not been loaded"),rn}let uu=1;class Ss{constructor(e){this.listenProvider_=e,this.syncPointTree_=new J(null),this.pendingWriteTree_=Wh(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function du(n,e,t,i,s){return Nh(n.pendingWriteTree_,e,t,i,s),s?Ft(n,new je(Ur(),e,t)):[]}function Ke(n,e,t=!1){const i=Rh(n.pendingWriteTree_,e);if(Ah(n.pendingWriteTree_,e)){let r=new J(null);return i.snap!=null?r=r.set($(),!0):ge(i.children,o=>{r=r.set(new X(o),!0)}),Ft(n,new Zt(i.path,r,t))}else return[]}function fn(n,e,t){return Ft(n,new je(ui(),e,t))}function fu(n,e,t){const i=J.fromObject(t);return Ft(n,new kt(ui(),e,i))}function pu(n,e){return Ft(n,new At(ui(),e))}function _u(n,e,t){const i=yi(n,t);if(i){const s=vi(i),r=s.path,o=s.queryId,a=_e(r,e),l=new At(di(o),a);return Ci(n,r,l)}else return[]}function zn(n,e,t,i,s=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Zr(o,e))){const l=lu(o,e,t,i);ru(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const p=c.findIndex(u=>u._queryParams.loadsAllData())!==-1,d=n.syncPointTree_.findOnPath(r,(u,C)=>Le(C));if(p&&!d){const u=n.syncPointTree_.subtree(r);if(!u.isEmpty()){const C=yu(u);for(let E=0;E<C.length;++E){const R=C[E],D=R.query,L=io(n,R);n.listenProvider_.startListening(Et(D),on(n,D),L.hashFn,L.onComplete)}}}!d&&c.length>0&&!i&&(p?n.listenProvider_.stopListening(Et(e),null):c.forEach(u=>{const C=n.queryToTagMap.get(pn(u));n.listenProvider_.stopListening(Et(u),C)}))}vu(n,c)}return a}function mu(n,e,t,i){const s=yi(n,i);if(s!=null){const r=vi(s),o=r.path,a=r.queryId,l=_e(o,e),c=new je(di(a),l,t);return Ci(n,o,c)}else return[]}function gu(n,e,t,i){const s=yi(n,i);if(s){const r=vi(s),o=r.path,a=r.queryId,l=_e(o,e),c=J.fromObject(t),p=new kt(di(a),l,c);return Ci(n,o,p)}else return[]}function bs(n,e,t,i=!1){const s=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(s,(u,C)=>{const E=_e(u,s);r=r||et(C,E),o=o||Le(C)});let a=n.syncPointTree_.get(s);a?(o=o||Le(a),r=r||et(a,$())):(a=new nu,n.syncPointTree_=n.syncPointTree_.set(s,a));let l;r!=null?l=!0:(l=!1,r=M.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((C,E)=>{const R=et(E,$());R&&(r=r.updateImmediateChild(C,R))}));const c=Zr(a,e);if(!c&&!e._queryParams.loadsAllData()){const u=pn(e);I(!n.queryToTagMap.has(u),"View does not exist, but we have a tag");const C=Cu();n.queryToTagMap.set(u,C),n.tagToQueryMap.set(C,u)}const p=fi(n.pendingWriteTree_,s);let d=au(a,e,t,p,r,l);if(!c&&!o&&!i){const u=Jr(a,e);d=d.concat(Eu(n,e,u))}return d}function eo(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=_e(o,e),c=et(a,l);if(c)return c});return qr(s,e,r,t,!0)}function Ft(n,e){return to(e,n.syncPointTree_,null,fi(n.pendingWriteTree_,$()))}function to(n,e,t,i){if(H(n.path))return no(n,e,t,i);{const s=e.get($());t==null&&s!=null&&(t=et(s,$()));let r=[];const o=W(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,p=$r(i,o);r=r.concat(to(a,l,c,p))}return s&&(r=r.concat(gi(s,n,i,t))),r}}function no(n,e,t,i){const s=e.get($());t==null&&s!=null&&(t=et(s,$()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=$r(i,o),p=n.operationForChild(o);p&&(r=r.concat(no(p,a,l,c)))}),s&&(r=r.concat(gi(s,n,i,t))),r}function io(n,e){const t=e.query,i=on(n,t);return{hashFn:()=>(Jh(e)||M.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?_u(n,t._path,i):pu(n,t._path);{const r=_c(s,t);return zn(n,t,null,r)}}}}function on(n,e){const t=pn(e);return n.queryToTagMap.get(t)}function pn(n){return n._path.toString()+"$"+n._queryIdentifier}function yi(n,e){return n.tagToQueryMap.get(e)}function vi(n){const e=n.indexOf("$");return I(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new X(n.substr(0,e))}}function Ci(n,e,t){const i=n.syncPointTree_.get(e);I(i,"Missing sync point for query tag that we're tracking");const s=fi(n.pendingWriteTree_,e);return gi(i,t,s,null)}function yu(n){return n.fold((e,t,i)=>{if(t&&Le(t))return[dn(t)];{let s=[];return t&&(s=Qr(t)),ge(i,(r,o)=>{s=s.concat(o)}),s}})}function Et(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(hu())(n._repo,n._path):n}function vu(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=pn(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function Cu(){return uu++}function Eu(n,e,t){const i=e._path,s=on(n,e),r=io(n,t),o=n.listenProvider_.startListening(Et(e),s,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(i);if(s)I(!Le(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,p,d)=>{if(!H(c)&&p&&Le(p))return[dn(p).query];{let u=[];return p&&(u=u.concat(Qr(p).map(C=>C.query))),ge(d,(C,E)=>{u=u.concat(E)}),u}});for(let c=0;c<l.length;++c){const p=l[c];n.listenProvider_.stopListening(Et(p),on(n,p))}}return o}/**
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
 */class Ei{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Ei(t)}node(){return this.node_}}class wi{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=ie(this.path_,e);return new wi(this.syncTree_,t)}node(){return eo(this.syncTree_,this.path_)}}const wu=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Ts=function(n,e,t){if(!n||typeof n!="object")return n;if(I(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Iu(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Su(n[".sv"],e);I(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Iu=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:I(!1,"Unexpected server value: "+n)}},Su=function(n,e,t){n.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&I(!1,"Unexpected increment value: "+i);const s=e.node();if(I(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},bu=function(n,e,t,i){return Ii(e,new wi(t,n),i)},Tu=function(n,e,t){return Ii(n,new Ei(e),t)};function Ii(n,e,t){const i=n.getPriority().val(),s=Ts(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=Ts(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new re(a,ce(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new re(s))),o.forEachChild(te,(a,l)=>{const c=Ii(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class Si{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function bi(n,e){let t=e instanceof X?e:new X(e),i=n,s=W(t);for(;s!==null;){const r=tt(i.node.children,s)||{children:{},childCount:0};i=new Si(s,i,r),t=Q(t),s=W(t)}return i}function at(n){return n.node.value}function so(n,e){n.node.value=e,Xn(n)}function ro(n){return n.node.childCount>0}function xu(n){return at(n)===void 0&&!ro(n)}function _n(n,e){ge(n.node.children,(t,i)=>{e(new Si(t,n,i))})}function oo(n,e,t,i){t&&e(n),_n(n,s=>{oo(s,e,!0)})}function Nu(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Bt(n){return new X(n.parent===null?n.name:Bt(n.parent)+"/"+n.name)}function Xn(n){n.parent!==null&&Ru(n.parent,n.name,n)}function Ru(n,e,t){const i=xu(t),s=Ae(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,Xn(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,Xn(n))}/**
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
 */const Au=/[\[\].#$\/\u0000-\u001F\u007F]/,ku=/[\[\].#$\u0000-\u001F\u007F]/,Nn=10*1024*1024,ao=function(n){return typeof n=="string"&&n.length!==0&&!Au.test(n)},lo=function(n){return typeof n=="string"&&n.length!==0&&!ku.test(n)},Du=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),lo(n)},co=function(n,e,t){const i=t instanceof X?new zc(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+We(i));if(typeof e=="function")throw new Error(n+"contains a function "+We(i)+" with contents = "+e.toString());if(cr(e))throw new Error(n+"contains "+e.toString()+" "+We(i));if(typeof e=="string"&&e.length>Nn/3&&ln(e)>Nn)throw new Error(n+"contains a string greater than "+Nn+" utf8 bytes "+We(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(ge(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!ao(o)))throw new Error(n+" contains an invalid key ("+o+") "+We(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Xc(i,o),co(n,a,i),Kc(i)}),s&&r)throw new Error(n+' contains ".value" child '+We(i)+" in addition to actual children.")}},ho=function(n,e,t,i){if(!lo(t))throw new Error(Zs(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Mu=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ho(n,e,t)},Pu=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ao(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Du(t))throw new Error(Zs(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Ou{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function uo(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!oi(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function fo(n,e,t){uo(n,t),po(n,i=>oi(i,e))}function $e(n,e,t){uo(n,t),po(n,i=>we(i,e)||we(e,i))}function po(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(Lu(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Lu(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();gt&&le("event: "+t.toString()),Ot(i)}}}/**
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
 */const Fu="repo_interrupt",Bu=25;class Wu{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Ou,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Jt(),this.transactionQueueTree_=new Si,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Hu(n,e,t){if(n.stats_=si(n.repoInfo_),n.forceRestClient_||vc())n.server_=new Qt(n.repoInfo_,(i,s,r,o)=>{xs(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Ns(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ae(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new xe(n.repoInfo_,e,(i,s,r,o)=>{xs(n,i,s,r,o)},i=>{Ns(n,i)},i=>{ju(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=Sc(n.repoInfo_,()=>new wh(n.stats_,n.server_)),n.infoData_=new gh,n.infoSyncTree_=new Ss({startListening:(i,s,r,o)=>{let a=[];const l=n.infoData_.getNode(i._path);return l.isEmpty()||(a=fn(n.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ti(n,"connected",!1),n.serverSyncTree_=new Ss({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);$e(n.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function Uu(n){const t=n.infoData_.getNode(new X(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function _o(n){return wu({timestamp:Uu(n)})}function xs(n,e,t,i,s){n.dataUpdateCount++;const r=new X(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const l=qt(t,c=>ce(c));o=gu(n.serverSyncTree_,r,l,s)}else{const l=ce(t);o=mu(n.serverSyncTree_,r,l,s)}else if(i){const l=qt(t,c=>ce(c));o=fu(n.serverSyncTree_,r,l)}else{const l=ce(t);o=fn(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Ni(n,r)),$e(n.eventQueue_,a,o)}function Ns(n,e){Ti(n,"connected",e),e===!1&&Yu(n)}function ju(n,e){ge(e,(t,i)=>{Ti(n,t,i)})}function Ti(n,e,t){const i=new X("/.info/"+e),s=ce(t);n.infoData_.updateSnapshot(i,s);const r=fn(n.infoSyncTree_,i,s);$e(n.eventQueue_,i,r)}function Vu(n){return n.nextWriteId_++}function Yu(n){mo(n,"onDisconnectEvents");const e=_o(n),t=Jt();jn(n.onDisconnect_,$(),(s,r)=>{const o=bu(s,r,n.serverSyncTree_,e);Hr(t,s,o)});let i=[];jn(t,$(),(s,r)=>{i=i.concat(fn(n.serverSyncTree_,s,r));const o=Ku(n,s);Ni(n,o)}),n.onDisconnect_=Jt(),$e(n.eventQueue_,$(),i)}function qu(n,e,t){let i;W(e._path)===".info"?i=bs(n.infoSyncTree_,e,t):i=bs(n.serverSyncTree_,e,t),fo(n.eventQueue_,e._path,i)}function $u(n,e,t){let i;W(e._path)===".info"?i=zn(n.infoSyncTree_,e,t):i=zn(n.serverSyncTree_,e,t),fo(n.eventQueue_,e._path,i)}function Gu(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Fu)}function mo(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),le(t,...e)}function go(n,e,t){return eo(n.serverSyncTree_,e,t)||M.EMPTY_NODE}function xi(n,e=n.transactionQueueTree_){if(e||mn(n,e),at(e)){const t=vo(n,e);I(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&zu(n,Bt(e),t)}else ro(e)&&_n(e,t=>{xi(n,t)})}function zu(n,e,t){const i=t.map(c=>c.currentWriteId),s=go(n,e,i);let r=s;const o=s.hash();for(let c=0;c<t.length;c++){const p=t[c];I(p.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),p.status=1,p.retryCount++;const d=_e(e,p.path);r=r.updateChild(d,p.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{mo(n,"transaction put response",{path:l.toString(),status:c});let p=[];if(c==="ok"){const d=[];for(let u=0;u<t.length;u++)t[u].status=2,p=p.concat(Ke(n.serverSyncTree_,t[u].currentWriteId)),t[u].onComplete&&d.push(()=>t[u].onComplete(null,!0,t[u].currentOutputSnapshotResolved)),t[u].unwatcher();mn(n,bi(n.transactionQueueTree_,e)),xi(n,n.transactionQueueTree_),$e(n.eventQueue_,e,p);for(let u=0;u<d.length;u++)Ot(d[u])}else{if(c==="datastale")for(let d=0;d<t.length;d++)t[d].status===3?t[d].status=4:t[d].status=0;else{ye("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<t.length;d++)t[d].status=4,t[d].abortReason=c}Ni(n,e)}},o)}function Ni(n,e){const t=yo(n,e),i=Bt(t),s=vo(n,t);return Xu(n,s,i),i}function Xu(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=_e(t,l.path);let p=!1,d;if(I(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)p=!0,d=l.abortReason,s=s.concat(Ke(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Bu)p=!0,d="maxretry",s=s.concat(Ke(n.serverSyncTree_,l.currentWriteId,!0));else{const u=go(n,l.path,o);l.currentInputSnapshot=u;const C=e[a].update(u.val());if(C!==void 0){co("transaction failed: Data returned ",C,l.path);let E=ce(C);typeof C=="object"&&C!=null&&Ae(C,".priority")||(E=E.updatePriority(u.getPriority()));const D=l.currentWriteId,L=_o(n),f=Tu(E,u,L);l.currentOutputSnapshotRaw=E,l.currentOutputSnapshotResolved=f,l.currentWriteId=Vu(n),o.splice(o.indexOf(D),1),s=s.concat(du(n.serverSyncTree_,l.path,f,l.currentWriteId,l.applyLocally)),s=s.concat(Ke(n.serverSyncTree_,D,!0))}else p=!0,d="nodata",s=s.concat(Ke(n.serverSyncTree_,l.currentWriteId,!0))}$e(n.eventQueue_,t,s),s=[],p&&(e[a].status=2,(function(u){setTimeout(u,Math.floor(0))})(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(d),!1,null))))}mn(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)Ot(i[a]);xi(n,n.transactionQueueTree_)}function yo(n,e){let t,i=n.transactionQueueTree_;for(t=W(e);t!==null&&at(i)===void 0;)i=bi(i,t),e=Q(e),t=W(e);return i}function vo(n,e){const t=[];return Co(n,e,t),t.sort((i,s)=>i.order-s.order),t}function Co(n,e,t){const i=at(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);_n(e,s=>{Co(n,s,t)})}function mn(n,e){const t=at(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,so(e,t.length>0?t:void 0)}_n(e,i=>{mn(n,i)})}function Ku(n,e){const t=Bt(yo(n,e)),i=bi(n.transactionQueueTree_,e);return Nu(i,s=>{Rn(n,s)}),Rn(n,i),oo(i,s=>{Rn(n,s)}),t}function Rn(n,e){const t=at(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(I(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(I(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(Ke(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?so(e,void 0):t.length=r+1,$e(n.eventQueue_,Bt(e),s);for(let o=0;o<i.length;o++)Ot(i[o])}}/**
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
 */function Qu(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function Ju(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):ye(`Invalid query segment '${t}' in query '${n}'`)}return e}const Rs=function(n,e){const t=Zu(n),i=t.namespace;t.domain==="firebase.com"&&Re(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&Re("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||hc();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Er(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new X(t.pathString)}},Zu=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let p=n.indexOf("/");p===-1&&(p=n.length);let d=n.indexOf("?");d===-1&&(d=n.length),e=n.substring(0,Math.min(p,d)),p<d&&(s=Qu(n.substring(p,d)));const u=Ju(n.substring(Math.min(n.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const C=e.slice(0,c);if(C.toLowerCase()==="localhost")t="localhost";else if(C.split(".").length<=2)t=C;else{const E=e.indexOf(".");i=e.substring(0,E).toLowerCase(),t=e.substring(E+1),r=i}"ns"in u&&(r=u.ns)}return{host:e,port:l,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
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
 */class ed{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ae(this.snapshot.exportVal())}}class td{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class nd{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Ri{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return H(this._path)?null:Ar(this._path)}get ref(){return new Fe(this._repo,this._path)}get _queryIdentifier(){const e=fs(this._queryParams),t=ni(e);return t==="{}"?"default":t}get _queryObject(){return fs(this._queryParams)}isEqual(e){if(e=cn(e),!(e instanceof Ri))return!1;const t=this._repo===e._repo,i=oi(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+Gc(this._path)}}class Fe extends Ri{constructor(e,t){super(e,t,new hi,!1)}get parent(){const e=Dr(this._path);return e===null?null:new Fe(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class an{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new X(e),i=Kn(this.ref,e);return new an(this._node.getChild(t),i,te)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new an(s,Kn(this.ref,i),te)))}hasChild(e){const t=new X(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function id(n,e){return n=cn(n),n._checkNotDeleted("ref"),Kn(n._root,e)}function Kn(n,e){return n=cn(n),W(n._path)===null?Mu("child","path",e):ho("child","path",e),new Fe(n._repo,ie(n._path,e))}class Ai{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new ed("value",this,new an(e.snapshotNode,new Fe(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new td(this,e,t):null}matches(e){return e instanceof Ai?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function sd(n,e,t,i,s){const r=new nd(t,void 0),o=new Ai(r);return qu(n._repo,n,o),()=>$u(n._repo,n,o)}function rd(n,e,t,i){return sd(n,"value",e)}iu(Fe);cu(Fe);/**
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
 */const od="FIREBASE_DATABASE_EMULATOR_HOST",Qn={};let ad=!1;function ld(n,e,t,i){const s=e.lastIndexOf(":"),r=e.substring(0,s),o=ei(r);n.repoInfo_=new Er(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),i&&(n.authTokenProvider_=i)}function cd(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||Re("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),le("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Rs(r,s),a=o.repoInfo,l;typeof process<"u"&&Xi&&(l=Xi[od]),l?(r=`http://${l}?ns=${a.namespace}`,o=Rs(r,s),a=o.repoInfo):o.repoInfo.secure;const c=new Ec(n.name,n.options,e);Pu("Invalid Firebase Database URL",o),H(o.path)||Re("Database URL must point to the root of a Firebase Database (not including a child path).");const p=ud(a,n,c,new Cc(n,t));return new dd(p,n)}function hd(n,e){const t=Qn[e];(!t||t[n.key]!==n)&&Re(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Gu(n),delete t[n.key]}function ud(n,e,t,i){let s=Qn[e.name];s||(s={},Qn[e.name]=s);let r=s[n.toURLString()];return r&&Re("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Wu(n,ad,t,i),s[n.toURLString()]=r,r}class dd{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Hu(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Fe(this._repo,$())),this._rootInternal}_delete(){return this._rootInternal!==null&&(hd(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Re("Cannot call "+e+" on a deleted database.")}}function fd(n=Gl(),e){const t=jl(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=xa("database");i&&pd(t,...i)}return t}function pd(n,e,t,i={}){n=cn(n),n._checkNotDeleted("useEmulator");const s=`${e}:${t}`,r=n._repoInternal;if(n._instanceStarted){if(s===n._repoInternal.repoInfo_.host&&$t(i,r.repoInfo_.emulatorOptions))return;Re("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&Re('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new jt(jt.OWNER);else if(i.mockUserToken){const a=typeof i.mockUserToken=="string"?i.mockUserToken:Ra(i.mockUserToken,n.app.options.projectId);o=new jt(a)}ei(e)&&(Na(e),Da("Database",!0)),ld(r,s,i,o)}/**
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
 */function _d(n){sc($l),Gt(new It("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return cd(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),Qe(Ki,Qi,n),Qe(Ki,Qi,"esm2020")}xe.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};xe.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};_d();var md="firebase",gd="12.4.0";/**
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
 */Qe(md,gd,"app");const yd={apiKey:"AIzaSyBLWJ7csymq4FIN6iid6t0wlfl3U5sJqpM",authDomain:"jeepney-tracking-9d0bd.firebaseapp.com",projectId:"jeepney-tracking-9d0bd",storageBucket:"jeepney-tracking-9d0bd.appspot.com",messagingSenderId:"842260338285",appId:"1:842260338285:web:2c3541109e52b57a271164",measurementId:"G-DN1HCMHGLQ",databaseURL:"https://jeepney-tracking-9d0bd-default-rtdb.asia-southeast1.firebasedatabase.app/"},vd=qi().length===0?ir(yd):qi()[0],Cd=fd(vd);var As=63710088e-1;function Eo(n,e,t={}){const i={type:"Feature"};return(t.id===0||t.id)&&(i.id=t.id),t.bbox&&(i.bbox=t.bbox),i.properties={},i.geometry=n,i}function Ed(n,e,t={}){if(!n)throw new Error("coordinates is required");if(!Array.isArray(n))throw new Error("coordinates must be an Array");if(n.length<2)throw new Error("coordinates must be at least 2 numbers long");if(!ks(n[0])||!ks(n[1]))throw new Error("coordinates must contain numbers");return Eo({type:"Point",coordinates:n},e,t)}function wd(n,e,t={}){for(const s of n){if(s.length<4)throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");if(s[s.length-1].length!==s[0].length)throw new Error("First and last Position are not equivalent.");for(let r=0;r<s[s.length-1].length;r++)if(s[s.length-1][r]!==s[0][r])throw new Error("First and last Position are not equivalent.")}return Eo({type:"Polygon",coordinates:n},e,t)}function Id(n,e={}){const t={type:"FeatureCollection"};return e.id&&(t.id=e.id),e.bbox&&(t.bbox=e.bbox),t.features=n,t}function ks(n){return!isNaN(n)&&n!==null&&!Array.isArray(n)}function wo(n,e,t){if(n!==null)for(var i,s,r,o,a,l,c,p=0,d=0,u,C=n.type,E=C==="FeatureCollection",R=C==="Feature",D=E?n.features.length:1,L=0;L<D;L++){c=E?n.features[L].geometry:R?n.geometry:n,u=c?c.type==="GeometryCollection":!1,a=u?c.geometries.length:1;for(var f=0;f<a;f++){var m=0,h=0;if(o=u?c.geometries[f]:c,o!==null){l=o.coordinates;var _=o.type;switch(p=0,_){case null:break;case"Point":if(e(l,d,L,m,h)===!1)return!1;d++,m++;break;case"LineString":case"MultiPoint":for(i=0;i<l.length;i++){if(e(l[i],d,L,m,h)===!1)return!1;d++,_==="MultiPoint"&&m++}_==="LineString"&&m++;break;case"Polygon":case"MultiLineString":for(i=0;i<l.length;i++){for(s=0;s<l[i].length-p;s++){if(e(l[i][s],d,L,m,h)===!1)return!1;d++}_==="MultiLineString"&&m++,_==="Polygon"&&h++}_==="Polygon"&&m++;break;case"MultiPolygon":for(i=0;i<l.length;i++){for(h=0,s=0;s<l[i].length;s++){for(r=0;r<l[i][s].length-p;r++){if(e(l[i][s][r],d,L,m,h)===!1)return!1;d++}h++}m++}break;case"GeometryCollection":for(i=0;i<o.geometries.length;i++)if(wo(o.geometries[i],e)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function Sd(n,e){var t,i,s,r,o,a,l,c,p,d,u=0,C=n.type==="FeatureCollection",E=n.type==="Feature",R=C?n.features.length:1;for(t=0;t<R;t++){for(a=C?n.features[t].geometry:E?n.geometry:n,c=C?n.features[t].properties:E?n.properties:{},p=C?n.features[t].bbox:E?n.bbox:void 0,d=C?n.features[t].id:E?n.id:void 0,l=a?a.type==="GeometryCollection":!1,o=l?a.geometries.length:1,s=0;s<o;s++){if(r=l?a.geometries[s]:a,r===null){if(e(null,u,c,p,d)===!1)return!1;continue}switch(r.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":{if(e(r,u,c,p,d)===!1)return!1;break}case"GeometryCollection":{for(i=0;i<r.geometries.length;i++)if(e(r.geometries[i],u,c,p,d)===!1)return!1;break}default:throw new Error("Unknown Geometry Type")}}u++}}function bd(n,e,t){var i=t;return Sd(n,function(s,r,o,a,l){r===0&&t===void 0?i=s:i=e(i,s,r,o,a,l)}),i}function Td(n){return bd(n,(e,t)=>e+xd(t),0)}function xd(n){let e=0,t;switch(n.type){case"Polygon":return Ds(n.coordinates);case"MultiPolygon":for(t=0;t<n.coordinates.length;t++)e+=Ds(n.coordinates[t]);return e;case"Point":case"MultiPoint":case"LineString":case"MultiLineString":return 0}return 0}function Ds(n){let e=0;if(n&&n.length>0){e+=Math.abs(Ms(n[0]));for(let t=1;t<n.length;t++)e-=Math.abs(Ms(n[t]))}return e}var Nd=As*As/2,An=Math.PI/180;function Ms(n){const e=n.length-1;if(e<=2)return 0;let t=0,i=0;for(;i<e;){const s=n[i],r=n[i+1===e?0:i+1],o=n[i+2>=e?(i+2)%e:i+2],a=s[0]*An,l=r[1]*An,c=o[0]*An;t+=(c-a)*Math.sin(l),i++}return t*Nd}var Ut={exports:{}},Vt={exports:{}},Rd=Vt.exports,Ps;function Ad(){return Ps||(Ps=1,(function(n,e){(function(t,i){n.exports=i()})(Rd,function(){function t(f,m,h,_,g){(function y(v,w,b,T,N){for(;T>b;){if(T-b>600){var P=T-b+1,U=w-b+1,se=Math.log(P),O=.5*Math.exp(2*se/3),j=.5*Math.sqrt(se*O*(P-O)/P)*(U-P/2<0?-1:1),V=Math.max(b,Math.floor(w-U*O/P+j)),z=Math.min(T,Math.floor(w+(P-U)*O/P+j));y(v,w,V,z,N)}var x=v[w],A=b,k=T;for(i(v,b,w),N(v[T],x)>0&&i(v,b,T);A<k;){for(i(v,A,k),A++,k--;N(v[A],x)<0;)A++;for(;N(v[k],x)>0;)k--}N(v[b],x)===0?i(v,b,k):i(v,++k,T),k<=w&&(b=k+1),w<=k&&(T=k-1)}})(f,m,h||0,_||f.length-1,g||s)}function i(f,m,h){var _=f[m];f[m]=f[h],f[h]=_}function s(f,m){return f<m?-1:f>m?1:0}var r=function(f){f===void 0&&(f=9),this._maxEntries=Math.max(4,f),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),this.clear()};function o(f,m,h){if(!h)return m.indexOf(f);for(var _=0;_<m.length;_++)if(h(f,m[_]))return _;return-1}function a(f,m){l(f,0,f.children.length,m,f)}function l(f,m,h,_,g){g||(g=D(null)),g.minX=1/0,g.minY=1/0,g.maxX=-1/0,g.maxY=-1/0;for(var y=m;y<h;y++){var v=f.children[y];c(g,f.leaf?_(v):v)}return g}function c(f,m){return f.minX=Math.min(f.minX,m.minX),f.minY=Math.min(f.minY,m.minY),f.maxX=Math.max(f.maxX,m.maxX),f.maxY=Math.max(f.maxY,m.maxY),f}function p(f,m){return f.minX-m.minX}function d(f,m){return f.minY-m.minY}function u(f){return(f.maxX-f.minX)*(f.maxY-f.minY)}function C(f){return f.maxX-f.minX+(f.maxY-f.minY)}function E(f,m){return f.minX<=m.minX&&f.minY<=m.minY&&m.maxX<=f.maxX&&m.maxY<=f.maxY}function R(f,m){return m.minX<=f.maxX&&m.minY<=f.maxY&&m.maxX>=f.minX&&m.maxY>=f.minY}function D(f){return{children:f,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function L(f,m,h,_,g){for(var y=[m,h];y.length;)if(!((h=y.pop())-(m=y.pop())<=_)){var v=m+Math.ceil((h-m)/_/2)*_;t(f,v,m,h,g),y.push(m,v,v,h)}}return r.prototype.all=function(){return this._all(this.data,[])},r.prototype.search=function(f){var m=this.data,h=[];if(!R(f,m))return h;for(var _=this.toBBox,g=[];m;){for(var y=0;y<m.children.length;y++){var v=m.children[y],w=m.leaf?_(v):v;R(f,w)&&(m.leaf?h.push(v):E(f,w)?this._all(v,h):g.push(v))}m=g.pop()}return h},r.prototype.collides=function(f){var m=this.data;if(!R(f,m))return!1;for(var h=[];m;){for(var _=0;_<m.children.length;_++){var g=m.children[_],y=m.leaf?this.toBBox(g):g;if(R(f,y)){if(m.leaf||E(f,y))return!0;h.push(g)}}m=h.pop()}return!1},r.prototype.load=function(f){if(!f||!f.length)return this;if(f.length<this._minEntries){for(var m=0;m<f.length;m++)this.insert(f[m]);return this}var h=this._build(f.slice(),0,f.length-1,0);if(this.data.children.length)if(this.data.height===h.height)this._splitRoot(this.data,h);else{if(this.data.height<h.height){var _=this.data;this.data=h,h=_}this._insert(h,this.data.height-h.height-1,!0)}else this.data=h;return this},r.prototype.insert=function(f){return f&&this._insert(f,this.data.height-1),this},r.prototype.clear=function(){return this.data=D([]),this},r.prototype.remove=function(f,m){if(!f)return this;for(var h,_,g,y=this.data,v=this.toBBox(f),w=[],b=[];y||w.length;){if(y||(y=w.pop(),_=w[w.length-1],h=b.pop(),g=!0),y.leaf){var T=o(f,y.children,m);if(T!==-1)return y.children.splice(T,1),w.push(y),this._condense(w),this}g||y.leaf||!E(y,v)?_?(h++,y=_.children[h],g=!1):y=null:(w.push(y),b.push(h),h=0,_=y,y=y.children[0])}return this},r.prototype.toBBox=function(f){return f},r.prototype.compareMinX=function(f,m){return f.minX-m.minX},r.prototype.compareMinY=function(f,m){return f.minY-m.minY},r.prototype.toJSON=function(){return this.data},r.prototype.fromJSON=function(f){return this.data=f,this},r.prototype._all=function(f,m){for(var h=[];f;)f.leaf?m.push.apply(m,f.children):h.push.apply(h,f.children),f=h.pop();return m},r.prototype._build=function(f,m,h,_){var g,y=h-m+1,v=this._maxEntries;if(y<=v)return a(g=D(f.slice(m,h+1)),this.toBBox),g;_||(_=Math.ceil(Math.log(y)/Math.log(v)),v=Math.ceil(y/Math.pow(v,_-1))),(g=D([])).leaf=!1,g.height=_;var w=Math.ceil(y/v),b=w*Math.ceil(Math.sqrt(v));L(f,m,h,b,this.compareMinX);for(var T=m;T<=h;T+=b){var N=Math.min(T+b-1,h);L(f,T,N,w,this.compareMinY);for(var P=T;P<=N;P+=w){var U=Math.min(P+w-1,N);g.children.push(this._build(f,P,U,_-1))}}return a(g,this.toBBox),g},r.prototype._chooseSubtree=function(f,m,h,_){for(;_.push(m),!m.leaf&&_.length-1!==h;){for(var g=1/0,y=1/0,v=void 0,w=0;w<m.children.length;w++){var b=m.children[w],T=u(b),N=(P=f,U=b,(Math.max(U.maxX,P.maxX)-Math.min(U.minX,P.minX))*(Math.max(U.maxY,P.maxY)-Math.min(U.minY,P.minY))-T);N<y?(y=N,g=T<g?T:g,v=b):N===y&&T<g&&(g=T,v=b)}m=v||m.children[0]}var P,U;return m},r.prototype._insert=function(f,m,h){var _=h?f:this.toBBox(f),g=[],y=this._chooseSubtree(_,this.data,m,g);for(y.children.push(f),c(y,_);m>=0&&g[m].children.length>this._maxEntries;)this._split(g,m),m--;this._adjustParentBBoxes(_,g,m)},r.prototype._split=function(f,m){var h=f[m],_=h.children.length,g=this._minEntries;this._chooseSplitAxis(h,g,_);var y=this._chooseSplitIndex(h,g,_),v=D(h.children.splice(y,h.children.length-y));v.height=h.height,v.leaf=h.leaf,a(h,this.toBBox),a(v,this.toBBox),m?f[m-1].children.push(v):this._splitRoot(h,v)},r.prototype._splitRoot=function(f,m){this.data=D([f,m]),this.data.height=f.height+1,this.data.leaf=!1,a(this.data,this.toBBox)},r.prototype._chooseSplitIndex=function(f,m,h){for(var _,g,y,v,w,b,T,N=1/0,P=1/0,U=m;U<=h-m;U++){var se=l(f,0,U,this.toBBox),O=l(f,U,h,this.toBBox),j=(g=se,y=O,v=void 0,w=void 0,b=void 0,T=void 0,v=Math.max(g.minX,y.minX),w=Math.max(g.minY,y.minY),b=Math.min(g.maxX,y.maxX),T=Math.min(g.maxY,y.maxY),Math.max(0,b-v)*Math.max(0,T-w)),V=u(se)+u(O);j<N?(N=j,_=U,P=V<P?V:P):j===N&&V<P&&(P=V,_=U)}return _||h-m},r.prototype._chooseSplitAxis=function(f,m,h){var _=f.leaf?this.compareMinX:p,g=f.leaf?this.compareMinY:d;this._allDistMargin(f,m,h,_)<this._allDistMargin(f,m,h,g)&&f.children.sort(_)},r.prototype._allDistMargin=function(f,m,h,_){f.children.sort(_);for(var g=this.toBBox,y=l(f,0,m,g),v=l(f,h-m,h,g),w=C(y)+C(v),b=m;b<h-m;b++){var T=f.children[b];c(y,f.leaf?g(T):T),w+=C(y)}for(var N=h-m-1;N>=m;N--){var P=f.children[N];c(v,f.leaf?g(P):P),w+=C(v)}return w},r.prototype._adjustParentBBoxes=function(f,m,h){for(var _=h;_>=0;_--)c(m[_],f)},r.prototype._condense=function(f){for(var m=f.length-1,h=void 0;m>=0;m--)f[m].children.length===0?m>0?(h=f[m-1].children).splice(h.indexOf(f[m]),1):this.clear():a(f[m],this.toBBox)},r})})(Vt)),Vt.exports}class kd{constructor(e=[],t=Dd){if(this.data=e,this.length=this.data.length,this.compare=t,this.length>0)for(let i=(this.length>>1)-1;i>=0;i--)this._down(i)}push(e){this.data.push(e),this.length++,this._up(this.length-1)}pop(){if(this.length===0)return;const e=this.data[0],t=this.data.pop();return this.length--,this.length>0&&(this.data[0]=t,this._down(0)),e}peek(){return this.data[0]}_up(e){const{data:t,compare:i}=this,s=t[e];for(;e>0;){const r=e-1>>1,o=t[r];if(i(s,o)>=0)break;t[e]=o,e=r}t[e]=s}_down(e){const{data:t,compare:i}=this,s=this.length>>1,r=t[e];for(;e<s;){let o=(e<<1)+1,a=t[o];const l=o+1;if(l<this.length&&i(t[l],a)<0&&(o=l,a=t[l]),i(a,r)>=0)break;t[e]=a,e=o}t[e]=r}}function Dd(n,e){return n<e?-1:n>e?1:0}const Md=Object.freeze(Object.defineProperty({__proto__:null,default:kd},Symbol.toStringTag,{value:"Module"})),Pd=xo(Md);var ft={exports:{}},kn,Os;function Od(){return Os||(Os=1,kn=function(e,t,i,s){var r=e[0],o=e[1],a=!1;i===void 0&&(i=0),s===void 0&&(s=t.length);for(var l=(s-i)/2,c=0,p=l-1;c<l;p=c++){var d=t[i+c*2+0],u=t[i+c*2+1],C=t[i+p*2+0],E=t[i+p*2+1],R=u>o!=E>o&&r<(C-d)*(o-u)/(E-u)+d;R&&(a=!a)}return a}),kn}var Dn,Ls;function Ld(){return Ls||(Ls=1,Dn=function(e,t,i,s){var r=e[0],o=e[1],a=!1;i===void 0&&(i=0),s===void 0&&(s=t.length);for(var l=s-i,c=0,p=l-1;c<l;p=c++){var d=t[c+i][0],u=t[c+i][1],C=t[p+i][0],E=t[p+i][1],R=u>o!=E>o&&r<(C-d)*(o-u)/(E-u)+d;R&&(a=!a)}return a}),Dn}var Fs;function Fd(){if(Fs)return ft.exports;Fs=1;var n=Od(),e=Ld();return ft.exports=function(i,s,r,o){return s.length>0&&Array.isArray(s[0])?e(i,s,r,o):n(i,s,r,o)},ft.exports.nested=e,ft.exports.flat=n,ft.exports}var pt={exports:{}},Bd=pt.exports,Bs;function Wd(){return Bs||(Bs=1,(function(n,e){(function(t,i){i(e)})(Bd,function(t){const s=33306690738754706e-32;function r(R,D,L,f,m){let h,_,g,y,v=D[0],w=f[0],b=0,T=0;w>v==w>-v?(h=v,v=D[++b]):(h=w,w=f[++T]);let N=0;if(b<R&&T<L)for(w>v==w>-v?(g=h-((_=v+h)-v),v=D[++b]):(g=h-((_=w+h)-w),w=f[++T]),h=_,g!==0&&(m[N++]=g);b<R&&T<L;)w>v==w>-v?(g=h-((_=h+v)-(y=_-h))+(v-y),v=D[++b]):(g=h-((_=h+w)-(y=_-h))+(w-y),w=f[++T]),h=_,g!==0&&(m[N++]=g);for(;b<R;)g=h-((_=h+v)-(y=_-h))+(v-y),v=D[++b],h=_,g!==0&&(m[N++]=g);for(;T<L;)g=h-((_=h+w)-(y=_-h))+(w-y),w=f[++T],h=_,g!==0&&(m[N++]=g);return h===0&&N!==0||(m[N++]=h),N}function o(R){return new Float64Array(R)}const a=33306690738754716e-32,l=22204460492503146e-32,c=11093356479670487e-47,p=o(4),d=o(8),u=o(12),C=o(16),E=o(4);t.orient2d=function(R,D,L,f,m,h){const _=(D-h)*(L-m),g=(R-m)*(f-h),y=_-g;if(_===0||g===0||_>0!=g>0)return y;const v=Math.abs(_+g);return Math.abs(y)>=a*v?y:-(function(w,b,T,N,P,U,se){let O,j,V,z,x,A,k,Z,G,Y,F,q,ne,ee,he,ue,be,de;const fe=w-P,pe=T-P,ve=b-U,Ce=N-U;x=(he=(Z=fe-(k=(A=134217729*fe)-(A-fe)))*(Y=Ce-(G=(A=134217729*Ce)-(A-Ce)))-((ee=fe*Ce)-k*G-Z*G-k*Y))-(F=he-(be=(Z=ve-(k=(A=134217729*ve)-(A-ve)))*(Y=pe-(G=(A=134217729*pe)-(A-pe)))-((ue=ve*pe)-k*G-Z*G-k*Y))),p[0]=he-(F+x)+(x-be),x=(ne=ee-((q=ee+F)-(x=q-ee))+(F-x))-(F=ne-ue),p[1]=ne-(F+x)+(x-ue),x=(de=q+F)-q,p[2]=q-(de-x)+(F-x),p[3]=de;let ke=(function(To,ki){let Di=ki[0];for(let gn=1;gn<To;gn++)Di+=ki[gn];return Di})(4,p),lt=l*se;if(ke>=lt||-ke>=lt||(O=w-(fe+(x=w-fe))+(x-P),V=T-(pe+(x=T-pe))+(x-P),j=b-(ve+(x=b-ve))+(x-U),z=N-(Ce+(x=N-Ce))+(x-U),O===0&&j===0&&V===0&&z===0)||(lt=c*se+s*Math.abs(ke),(ke+=fe*z+Ce*O-(ve*V+pe*j))>=lt||-ke>=lt))return ke;x=(he=(Z=O-(k=(A=134217729*O)-(A-O)))*(Y=Ce-(G=(A=134217729*Ce)-(A-Ce)))-((ee=O*Ce)-k*G-Z*G-k*Y))-(F=he-(be=(Z=j-(k=(A=134217729*j)-(A-j)))*(Y=pe-(G=(A=134217729*pe)-(A-pe)))-((ue=j*pe)-k*G-Z*G-k*Y))),E[0]=he-(F+x)+(x-be),x=(ne=ee-((q=ee+F)-(x=q-ee))+(F-x))-(F=ne-ue),E[1]=ne-(F+x)+(x-ue),x=(de=q+F)-q,E[2]=q-(de-x)+(F-x),E[3]=de;const Io=r(4,p,4,E,d);x=(he=(Z=fe-(k=(A=134217729*fe)-(A-fe)))*(Y=z-(G=(A=134217729*z)-(A-z)))-((ee=fe*z)-k*G-Z*G-k*Y))-(F=he-(be=(Z=ve-(k=(A=134217729*ve)-(A-ve)))*(Y=V-(G=(A=134217729*V)-(A-V)))-((ue=ve*V)-k*G-Z*G-k*Y))),E[0]=he-(F+x)+(x-be),x=(ne=ee-((q=ee+F)-(x=q-ee))+(F-x))-(F=ne-ue),E[1]=ne-(F+x)+(x-ue),x=(de=q+F)-q,E[2]=q-(de-x)+(F-x),E[3]=de;const So=r(Io,d,4,E,u);x=(he=(Z=O-(k=(A=134217729*O)-(A-O)))*(Y=z-(G=(A=134217729*z)-(A-z)))-((ee=O*z)-k*G-Z*G-k*Y))-(F=he-(be=(Z=j-(k=(A=134217729*j)-(A-j)))*(Y=V-(G=(A=134217729*V)-(A-V)))-((ue=j*V)-k*G-Z*G-k*Y))),E[0]=he-(F+x)+(x-be),x=(ne=ee-((q=ee+F)-(x=q-ee))+(F-x))-(F=ne-ue),E[1]=ne-(F+x)+(x-ue),x=(de=q+F)-q,E[2]=q-(de-x)+(F-x),E[3]=de;const bo=r(So,u,4,E,C);return C[bo-1]})(R,D,L,f,m,h,v)},t.orient2dfast=function(R,D,L,f,m,h){return(D-h)*(L-m)-(R-m)*(f-h)},Object.defineProperty(t,"__esModule",{value:!0})})})(pt,pt.exports)),pt.exports}var Ws;function Hd(){if(Ws)return Ut.exports;Ws=1;var n=Ad(),e=Pd,t=Fd(),i=Wd().orient2d;e.default&&(e=e.default),Ut.exports=s,Ut.exports.default=s;function s(h,_,g){_=Math.max(0,_===void 0?2:_),g=g||0;var y=C(h),v=new n(16);v.toBBox=function(k){return{minX:k[0],minY:k[1],maxX:k[0],maxY:k[1]}},v.compareMinX=function(k,Z){return k[0]-Z[0]},v.compareMinY=function(k,Z){return k[1]-Z[1]},v.load(h);for(var w=[],b=0,T;b<y.length;b++){var N=y[b];v.remove(N),T=E(N,T),w.push(T)}var P=new n(16);for(b=0;b<w.length;b++)P.insert(u(w[b]));for(var U=_*_,se=g*g;w.length;){var O=w.shift(),j=O.p,V=O.next.p,z=R(j,V);if(!(z<se)){var x=z/U;N=r(v,O.prev.p,j,V,O.next.next.p,x,P),N&&Math.min(R(N,j),R(N,V))<=x&&(w.push(O),w.push(E(N,O)),v.remove(N),P.remove(O),P.insert(u(O)),P.insert(u(O.next)))}}O=T;var A=[];do A.push(O.p),O=O.next;while(O!==T);return A.push(O.p),A}function r(h,_,g,y,v,w,b){for(var T=new e([],o),N=h.data;N;){for(var P=0;P<N.children.length;P++){var U=N.children[P],se=N.leaf?D(U,g,y):a(g,y,U);se>w||T.push({node:U,dist:se})}for(;T.length&&!T.peek().node.children;){var O=T.pop(),j=O.node,V=D(j,_,g),z=D(j,y,v);if(O.dist<V&&O.dist<z&&c(g,j,b)&&c(y,j,b))return j}N=T.pop(),N&&(N=N.node)}return null}function o(h,_){return h.dist-_.dist}function a(h,_,g){if(l(h,g)||l(_,g))return 0;var y=L(h[0],h[1],_[0],_[1],g.minX,g.minY,g.maxX,g.minY);if(y===0)return 0;var v=L(h[0],h[1],_[0],_[1],g.minX,g.minY,g.minX,g.maxY);if(v===0)return 0;var w=L(h[0],h[1],_[0],_[1],g.maxX,g.minY,g.maxX,g.maxY);if(w===0)return 0;var b=L(h[0],h[1],_[0],_[1],g.minX,g.maxY,g.maxX,g.maxY);return b===0?0:Math.min(y,v,w,b)}function l(h,_){return h[0]>=_.minX&&h[0]<=_.maxX&&h[1]>=_.minY&&h[1]<=_.maxY}function c(h,_,g){for(var y=Math.min(h[0],_[0]),v=Math.min(h[1],_[1]),w=Math.max(h[0],_[0]),b=Math.max(h[1],_[1]),T=g.search({minX:y,minY:v,maxX:w,maxY:b}),N=0;N<T.length;N++)if(d(T[N].p,T[N].next.p,h,_))return!1;return!0}function p(h,_,g){return i(h[0],h[1],_[0],_[1],g[0],g[1])}function d(h,_,g,y){return h!==y&&_!==g&&p(h,_,g)>0!=p(h,_,y)>0&&p(g,y,h)>0!=p(g,y,_)>0}function u(h){var _=h.p,g=h.next.p;return h.minX=Math.min(_[0],g[0]),h.minY=Math.min(_[1],g[1]),h.maxX=Math.max(_[0],g[0]),h.maxY=Math.max(_[1],g[1]),h}function C(h){for(var _=h[0],g=h[0],y=h[0],v=h[0],w=0;w<h.length;w++){var b=h[w];b[0]<_[0]&&(_=b),b[0]>y[0]&&(y=b),b[1]<g[1]&&(g=b),b[1]>v[1]&&(v=b)}var T=[_,g,y,v],N=T.slice();for(w=0;w<h.length;w++)t(h[w],T)||N.push(h[w]);return m(N)}function E(h,_){var g={p:h,prev:null,next:null,minX:0,minY:0,maxX:0,maxY:0};return _?(g.next=_.next,g.prev=_,_.next.prev=g,_.next=g):(g.prev=g,g.next=g),g}function R(h,_){var g=h[0]-_[0],y=h[1]-_[1];return g*g+y*y}function D(h,_,g){var y=_[0],v=_[1],w=g[0]-y,b=g[1]-v;if(w!==0||b!==0){var T=((h[0]-y)*w+(h[1]-v)*b)/(w*w+b*b);T>1?(y=g[0],v=g[1]):T>0&&(y+=w*T,v+=b*T)}return w=h[0]-y,b=h[1]-v,w*w+b*b}function L(h,_,g,y,v,w,b,T){var N=g-h,P=y-_,U=b-v,se=T-w,O=h-v,j=_-w,V=N*N+P*P,z=N*U+P*se,x=U*U+se*se,A=N*O+P*j,k=U*O+se*j,Z=V*x-z*z,G,Y,F,q,ne=Z,ee=Z;Z===0?(Y=0,ne=1,q=k,ee=x):(Y=z*k-x*A,q=V*k-z*A,Y<0?(Y=0,q=k,ee=x):Y>ne&&(Y=ne,q=k+z,ee=x)),q<0?(q=0,-A<0?Y=0:-A>V?Y=ne:(Y=-A,ne=V)):q>ee&&(q=ee,-A+z<0?Y=0:-A+z>V?Y=ne:(Y=-A+z,ne=V)),G=Y===0?0:Y/ne,F=q===0?0:q/ee;var he=(1-G)*h+G*g,ue=(1-G)*_+G*y,be=(1-F)*v+F*b,de=(1-F)*w+F*T,fe=be-he,pe=de-ue;return fe*fe+pe*pe}function f(h,_){return h[0]===_[0]?h[1]-_[1]:h[0]-_[0]}function m(h){h.sort(f);for(var _=[],g=0;g<h.length;g++){for(;_.length>=2&&p(_[_.length-2],_[_.length-1],h[g])<=0;)_.pop();_.push(h[g])}for(var y=[],v=h.length-1;v>=0;v--){for(;y.length>=2&&p(y[y.length-2],y[y.length-1],h[v])<=0;)y.pop();y.push(h[v])}return y.pop(),_.pop(),_.concat(y)}return Ut.exports}var Ud=Hd();const jd=No(Ud);function Vd(n,e={}){e.concavity=e.concavity||1/0;const t=[];if(wo(n,s=>{t.push([s[0],s[1]])}),!t.length)return null;const i=jd(t,e.concavity);return i.length>3?wd([i]):null}const Yd=[{title:"Map",href:"/map"}];function pf(){const[n,e]=Ge.useState(!1),[t,i]=Ge.useState("light"),[s,r]=Ge.useState([]),[o,a]=Ge.useState(!0),[l,c]=Ge.useState(0);Ge.useEffect(()=>{const C=id(Cd,"drivers"),E=rd(C,R=>{const D=R.val();if(D){const L=Object.keys(D).map(m=>({drivers_id:m,latitude:D[m].location.latitude,longitude:D[m].location.longitude}));r(L);const f=p(L);c(f)}});return()=>{E()}},[]);function p(C){const f=C.filter(g=>g.latitude>=10.639&&g.latitude<=10.706&&g.longitude>=122.935&&g.longitude<=122.98);if(f.length===0)return 0;const m=f.map(g=>Ed([g.longitude,g.latitude])),h=Vd(Id(m));if(!h)return 0;const _=Td(h);return Math.round(_/1e6)}const d=()=>{const C=document.documentElement;document.fullscreenElement?document.exitFullscreen().then(()=>e(!1)).catch(E=>{console.error(`Error exiting fullscreen: ${E.message}`)}):C.requestFullscreen().then(()=>e(!0)).catch(E=>{console.error(`Error attempting fullscreen: ${E.message}`)})},u=()=>{};return S.jsxs(Zo,{breadcrumbs:Yd,children:[S.jsx(Ro,{title:"Map"}),S.jsxs("div",{className:"flex flex-col h-full",children:[S.jsx(_a,{isFullScreen:n,handleFullscreen:d,handleRefresh:u,theme:t,setTheme:i}),S.jsxs("div",{className:"flex flex-1 overflow-hidden",children:[S.jsx(ma,{drivers:s,showDrivers:o,setShowDrivers:a,coverageArea:l}),S.jsx(pa,{theme:t,drivers:s,showDrivers:o})]})]})]})}export{pf as default};
