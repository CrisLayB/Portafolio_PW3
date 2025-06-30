function tf(e,t){return t.forEach(function(n){n&&typeof n!="string"&&!Array.isArray(n)&&Object.keys(n).forEach(function(r){if(r!=="default"&&!(r in e)){var i=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(e,r,i.get?i:{enumerable:!0,get:function(){return n[r]}})}})}),Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}const yh=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};yh();var Ai=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function Sh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Ah(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach(function(n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}),t}var bl={},Qo={exports:{}},at={},O={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ui=Symbol.for("react.element"),wh=Symbol.for("react.portal"),Ch=Symbol.for("react.fragment"),bh=Symbol.for("react.strict_mode"),kh=Symbol.for("react.profiler"),Ph=Symbol.for("react.provider"),Eh=Symbol.for("react.context"),Oh=Symbol.for("react.forward_ref"),Th=Symbol.for("react.suspense"),xh=Symbol.for("react.memo"),_h=Symbol.for("react.lazy"),ac=Symbol.iterator;function Dh(e){return e===null||typeof e!="object"?null:(e=ac&&e[ac]||e["@@iterator"],typeof e=="function"?e:null)}var nf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},rf=Object.assign,of={};function dr(e,t,n){this.props=e,this.context=t,this.refs=of,this.updater=n||nf}dr.prototype.isReactComponent={};dr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};dr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function af(){}af.prototype=dr.prototype;function Gs(e,t,n){this.props=e,this.context=t,this.refs=of,this.updater=n||nf}var Hs=Gs.prototype=new af;Hs.constructor=Gs;rf(Hs,dr.prototype);Hs.isPureReactComponent=!0;var lc=Array.isArray,lf=Object.prototype.hasOwnProperty,Ws={current:null},sf={key:!0,ref:!0,__self:!0,__source:!0};function uf(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)lf.call(t,r)&&!sf.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ui,type:e,key:o,ref:a,props:i,_owner:Ws.current}}function Ih(e,t){return{$$typeof:ui,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Qs(e){return typeof e=="object"&&e!==null&&e.$$typeof===ui}function Nh(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var sc=/\/+/g;function za(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Nh(""+e.key):t.toString(36)}function Gi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case ui:case wh:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+za(a,0):r,lc(i)?(n="",e!=null&&(n=e.replace(sc,"$&/")+"/"),Gi(i,t,n,"",function(c){return c})):i!=null&&(Qs(i)&&(i=Ih(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(sc,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",lc(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+za(o,l);a+=Gi(o,t,n,s,i)}else if(s=Dh(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+za(o,l++),a+=Gi(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function wi(e,t,n){if(e==null)return e;var r=[],i=0;return Gi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Mh(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Qe={current:null},Hi={transition:null},Rh={ReactCurrentDispatcher:Qe,ReactCurrentBatchConfig:Hi,ReactCurrentOwner:Ws};function cf(){throw Error("act(...) is not supported in production builds of React.")}X.Children={map:wi,forEach:function(e,t,n){wi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return wi(e,function(){t++}),t},toArray:function(e){return wi(e,function(t){return t})||[]},only:function(e){if(!Qs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};X.Component=dr;X.Fragment=Ch;X.Profiler=kh;X.PureComponent=Gs;X.StrictMode=bh;X.Suspense=Th;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rh;X.act=cf;X.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=rf({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Ws.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)lf.call(t,s)&&!sf.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var c=0;c<s;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:ui,type:e.type,key:i,ref:o,props:r,_owner:a}};X.createContext=function(e){return e={$$typeof:Eh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ph,_context:e},e.Consumer=e};X.createElement=uf;X.createFactory=function(e){var t=uf.bind(null,e);return t.type=e,t};X.createRef=function(){return{current:null}};X.forwardRef=function(e){return{$$typeof:Oh,render:e}};X.isValidElement=Qs;X.lazy=function(e){return{$$typeof:_h,_payload:{_status:-1,_result:e},_init:Mh}};X.memo=function(e,t){return{$$typeof:xh,type:e,compare:t===void 0?null:t}};X.startTransition=function(e){var t=Hi.transition;Hi.transition={};try{e()}finally{Hi.transition=t}};X.unstable_act=cf;X.useCallback=function(e,t){return Qe.current.useCallback(e,t)};X.useContext=function(e){return Qe.current.useContext(e)};X.useDebugValue=function(){};X.useDeferredValue=function(e){return Qe.current.useDeferredValue(e)};X.useEffect=function(e,t){return Qe.current.useEffect(e,t)};X.useId=function(){return Qe.current.useId()};X.useImperativeHandle=function(e,t,n){return Qe.current.useImperativeHandle(e,t,n)};X.useInsertionEffect=function(e,t){return Qe.current.useInsertionEffect(e,t)};X.useLayoutEffect=function(e,t){return Qe.current.useLayoutEffect(e,t)};X.useMemo=function(e,t){return Qe.current.useMemo(e,t)};X.useReducer=function(e,t,n){return Qe.current.useReducer(e,t,n)};X.useRef=function(e){return Qe.current.useRef(e)};X.useState=function(e){return Qe.current.useState(e)};X.useSyncExternalStore=function(e,t,n){return Qe.current.useSyncExternalStore(e,t,n)};X.useTransition=function(){return Qe.current.useTransition()};X.version="18.3.1";O.exports=X;var rt=O.exports,Ys=tf({__proto__:null,default:rt},[O.exports]),df={exports:{}},ff={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(D,G){var V=D.length;D.push(G);e:for(;0<V;){var te=V-1>>>1,N=D[te];if(0<i(N,G))D[te]=G,D[V]=N,V=te;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var G=D[0],V=D.pop();if(V!==G){D[0]=V;e:for(var te=0,N=D.length,B=N>>>1;te<B;){var L=2*(te+1)-1,W=D[L],b=L+1,J=D[b];if(0>i(W,V))b<N&&0>i(J,W)?(D[te]=J,D[b]=V,te=b):(D[te]=W,D[L]=V,te=L);else if(b<N&&0>i(J,V))D[te]=J,D[b]=V,te=b;else break e}}return G}function i(D,G){var V=D.sortIndex-G.sortIndex;return V!==0?V:D.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],c=[],p=1,d=null,h=3,w=!1,y=!1,v=!1,S=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(D){for(var G=n(c);G!==null;){if(G.callback===null)r(c);else if(G.startTime<=D)r(c),G.sortIndex=G.expirationTime,t(s,G);else break;G=n(c)}}function A(D){if(v=!1,g(D),!y)if(n(s)!==null)y=!0,Pe(k);else{var G=n(c);G!==null&&ve(A,G.startTime-D)}}function k(D,G){y=!1,v&&(v=!1,m(P),P=-1),w=!0;var V=h;try{for(g(G),d=n(s);d!==null&&(!(d.expirationTime>G)||D&&!U());){var te=d.callback;if(typeof te=="function"){d.callback=null,h=d.priorityLevel;var N=te(d.expirationTime<=G);G=e.unstable_now(),typeof N=="function"?d.callback=N:d===n(s)&&r(s),g(G)}else r(s);d=n(s)}if(d!==null)var B=!0;else{var L=n(c);L!==null&&ve(A,L.startTime-G),B=!1}return B}finally{d=null,h=V,w=!1}}var E=!1,_=null,P=-1,x=5,I=-1;function U(){return!(e.unstable_now()-I<x)}function F(){if(_!==null){var D=e.unstable_now();I=D;var G=!0;try{G=_(!0,D)}finally{G?j():(E=!1,_=null)}}else E=!1}var j;if(typeof f=="function")j=function(){f(F)};else if(typeof MessageChannel!="undefined"){var Ae=new MessageChannel,Z=Ae.port2;Ae.port1.onmessage=F,j=function(){Z.postMessage(null)}}else j=function(){S(F,0)};function Pe(D){_=D,E||(E=!0,j())}function ve(D,G){P=S(function(){D(e.unstable_now())},G)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(D){D.callback=null},e.unstable_continueExecution=function(){y||w||(y=!0,Pe(k))},e.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<D?Math.floor(1e3/D):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(D){switch(h){case 1:case 2:case 3:var G=3;break;default:G=h}var V=h;h=G;try{return D()}finally{h=V}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(D,G){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var V=h;h=D;try{return G()}finally{h=V}},e.unstable_scheduleCallback=function(D,G,V){var te=e.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?te+V:te):V=te,D){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=V+N,D={id:p++,callback:G,priorityLevel:D,startTime:V,expirationTime:N,sortIndex:-1},V>te?(D.sortIndex=V,t(c,D),n(s)===null&&D===n(c)&&(v?(m(P),P=-1):v=!0,ve(A,V-te))):(D.sortIndex=N,t(s,D),y||w||(y=!0,Pe(k))),D},e.unstable_shouldYield=U,e.unstable_wrapCallback=function(D){var G=h;return function(){var V=h;h=G;try{return D.apply(this,arguments)}finally{h=V}}}})(ff);df.exports=ff;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lh=O.exports,ot=df.exports;function T(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pf=new Set,Ur={};function xn(e,t){er(e,t),er(e+"Capture",t)}function er(e,t){for(Ur[e]=t,e=0;e<t.length;e++)pf.add(t[e])}var Lt=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),kl=Object.prototype.hasOwnProperty,Bh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,uc={},cc={};function zh(e){return kl.call(cc,e)?!0:kl.call(uc,e)?!1:Bh.test(e)?cc[e]=!0:(uc[e]=!0,!1)}function Fh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function jh(e,t,n,r){if(t===null||typeof t=="undefined"||Fh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ye(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Le[e]=new Ye(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Le[t]=new Ye(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Le[e]=new Ye(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Le[e]=new Ye(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Le[e]=new Ye(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Le[e]=new Ye(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Le[e]=new Ye(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Le[e]=new Ye(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Le[e]=new Ye(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ks=/[\-:]([a-z])/g;function qs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ks,qs);Le[t]=new Ye(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ks,qs);Le[t]=new Ye(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ks,qs);Le[t]=new Ye(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Le[e]=new Ye(e,1,!1,e.toLowerCase(),null,!1,!1)});Le.xlinkHref=new Ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Le[e]=new Ye(e,1,!1,e.toLowerCase(),null,!0,!0)});function Xs(e,t,n,r){var i=Le.hasOwnProperty(t)?Le[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(jh(t,n,i,r)&&(n=null),r||i===null?zh(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var jt=Lh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ci=Symbol.for("react.element"),Mn=Symbol.for("react.portal"),Rn=Symbol.for("react.fragment"),Js=Symbol.for("react.strict_mode"),Pl=Symbol.for("react.profiler"),mf=Symbol.for("react.provider"),hf=Symbol.for("react.context"),Zs=Symbol.for("react.forward_ref"),El=Symbol.for("react.suspense"),Ol=Symbol.for("react.suspense_list"),$s=Symbol.for("react.memo"),Gt=Symbol.for("react.lazy"),gf=Symbol.for("react.offscreen"),dc=Symbol.iterator;function vr(e){return e===null||typeof e!="object"?null:(e=dc&&e[dc]||e["@@iterator"],typeof e=="function"?e:null)}var ge=Object.assign,Fa;function Pr(e){if(Fa===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Fa=t&&t[1]||""}return`
`+Fa+e}var ja=!1;function Ua(e,t){if(!e||ja)return"";ja=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{ja=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Pr(e):""}function Uh(e){switch(e.tag){case 5:return Pr(e.type);case 16:return Pr("Lazy");case 13:return Pr("Suspense");case 19:return Pr("SuspenseList");case 0:case 2:case 15:return e=Ua(e.type,!1),e;case 11:return e=Ua(e.type.render,!1),e;case 1:return e=Ua(e.type,!0),e;default:return""}}function Tl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Rn:return"Fragment";case Mn:return"Portal";case Pl:return"Profiler";case Js:return"StrictMode";case El:return"Suspense";case Ol:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case hf:return(e.displayName||"Context")+".Consumer";case mf:return(e._context.displayName||"Context")+".Provider";case Zs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $s:return t=e.displayName||null,t!==null?t:Tl(e.type)||"Memo";case Gt:t=e._payload,e=e._init;try{return Tl(e(t))}catch{}}return null}function Vh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Tl(t);case 8:return t===Js?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function un(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function vf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Gh(e){var t=vf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function bi(e){e._valueTracker||(e._valueTracker=Gh(e))}function yf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=vf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ao(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function xl(e,t){var n=t.checked;return ge({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function fc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=un(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Sf(e,t){t=t.checked,t!=null&&Xs(e,"checked",t,!1)}function _l(e,t){Sf(e,t);var n=un(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Dl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Dl(e,t.type,un(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function pc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Dl(e,t,n){(t!=="number"||ao(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Er=Array.isArray;function Yn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+un(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Il(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(T(91));return ge({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function mc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(T(92));if(Er(n)){if(1<n.length)throw Error(T(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:un(n)}}function Af(e,t){var n=un(t.value),r=un(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function hc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function wf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?wf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ki,Cf=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ki=ki||document.createElement("div"),ki.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ki.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Vr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var _r={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hh=["Webkit","ms","Moz","O"];Object.keys(_r).forEach(function(e){Hh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),_r[t]=_r[e]})});function bf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||_r.hasOwnProperty(e)&&_r[e]?(""+t).trim():t+"px"}function kf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=bf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Wh=ge({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ml(e,t){if(t){if(Wh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(T(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(T(61))}if(t.style!=null&&typeof t.style!="object")throw Error(T(62))}}function Rl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ll=null;function eu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bl=null,Kn=null,qn=null;function gc(e){if(e=fi(e)){if(typeof Bl!="function")throw Error(T(280));var t=e.stateNode;t&&(t=Jo(t),Bl(e.stateNode,e.type,t))}}function Pf(e){Kn?qn?qn.push(e):qn=[e]:Kn=e}function Ef(){if(Kn){var e=Kn,t=qn;if(qn=Kn=null,gc(e),t)for(e=0;e<t.length;e++)gc(t[e])}}function Of(e,t){return e(t)}function Tf(){}var Va=!1;function xf(e,t,n){if(Va)return e(t,n);Va=!0;try{return Of(e,t,n)}finally{Va=!1,(Kn!==null||qn!==null)&&(Tf(),Ef())}}function Gr(e,t){var n=e.stateNode;if(n===null)return null;var r=Jo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(T(231,t,typeof n));return n}var zl=!1;if(Lt)try{var yr={};Object.defineProperty(yr,"passive",{get:function(){zl=!0}}),window.addEventListener("test",yr,yr),window.removeEventListener("test",yr,yr)}catch{zl=!1}function Qh(e,t,n,r,i,o,a,l,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(p){this.onError(p)}}var Dr=!1,lo=null,so=!1,Fl=null,Yh={onError:function(e){Dr=!0,lo=e}};function Kh(e,t,n,r,i,o,a,l,s){Dr=!1,lo=null,Qh.apply(Yh,arguments)}function qh(e,t,n,r,i,o,a,l,s){if(Kh.apply(this,arguments),Dr){if(Dr){var c=lo;Dr=!1,lo=null}else throw Error(T(198));so||(so=!0,Fl=c)}}function _n(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function _f(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function vc(e){if(_n(e)!==e)throw Error(T(188))}function Xh(e){var t=e.alternate;if(!t){if(t=_n(e),t===null)throw Error(T(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return vc(i),e;if(o===r)return vc(i),t;o=o.sibling}throw Error(T(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?e:t}function Df(e){return e=Xh(e),e!==null?If(e):null}function If(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=If(e);if(t!==null)return t;e=e.sibling}return null}var Nf=ot.unstable_scheduleCallback,yc=ot.unstable_cancelCallback,Jh=ot.unstable_shouldYield,Zh=ot.unstable_requestPaint,Ce=ot.unstable_now,$h=ot.unstable_getCurrentPriorityLevel,tu=ot.unstable_ImmediatePriority,Mf=ot.unstable_UserBlockingPriority,uo=ot.unstable_NormalPriority,eg=ot.unstable_LowPriority,Rf=ot.unstable_IdlePriority,Yo=null,Tt=null;function tg(e){if(Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(Yo,e,void 0,(e.current.flags&128)===128)}catch{}}var wt=Math.clz32?Math.clz32:ig,ng=Math.log,rg=Math.LN2;function ig(e){return e>>>=0,e===0?32:31-(ng(e)/rg|0)|0}var Pi=64,Ei=4194304;function Or(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function co(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=Or(l):(o&=a,o!==0&&(r=Or(o)))}else a=n&~i,a!==0?r=Or(a):o!==0&&(r=Or(o));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-wt(t),i=1<<n,r|=e[n],t&=~i;return r}function og(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ag(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-wt(o),l=1<<a,s=i[a];s===-1?((l&n)===0||(l&r)!==0)&&(i[a]=og(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}function jl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Lf(){var e=Pi;return Pi<<=1,(Pi&4194240)===0&&(Pi=64),e}function Ga(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ci(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-wt(t),e[t]=n}function lg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-wt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function nu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-wt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var oe=0;function Bf(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var zf,ru,Ff,jf,Uf,Ul=!1,Oi=[],Jt=null,Zt=null,$t=null,Hr=new Map,Wr=new Map,Qt=[],sg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sc(e,t){switch(e){case"focusin":case"focusout":Jt=null;break;case"dragenter":case"dragleave":Zt=null;break;case"mouseover":case"mouseout":$t=null;break;case"pointerover":case"pointerout":Hr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wr.delete(t.pointerId)}}function Sr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=fi(t),t!==null&&ru(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function ug(e,t,n,r,i){switch(t){case"focusin":return Jt=Sr(Jt,e,t,n,r,i),!0;case"dragenter":return Zt=Sr(Zt,e,t,n,r,i),!0;case"mouseover":return $t=Sr($t,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Hr.set(o,Sr(Hr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Wr.set(o,Sr(Wr.get(o)||null,e,t,n,r,i)),!0}return!1}function Vf(e){var t=vn(e.target);if(t!==null){var n=_n(t);if(n!==null){if(t=n.tag,t===13){if(t=_f(n),t!==null){e.blockedOn=t,Uf(e.priority,function(){Ff(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Vl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ll=r,n.target.dispatchEvent(r),Ll=null}else return t=fi(n),t!==null&&ru(t),e.blockedOn=n,!1;t.shift()}return!0}function Ac(e,t,n){Wi(e)&&n.delete(t)}function cg(){Ul=!1,Jt!==null&&Wi(Jt)&&(Jt=null),Zt!==null&&Wi(Zt)&&(Zt=null),$t!==null&&Wi($t)&&($t=null),Hr.forEach(Ac),Wr.forEach(Ac)}function Ar(e,t){e.blockedOn===t&&(e.blockedOn=null,Ul||(Ul=!0,ot.unstable_scheduleCallback(ot.unstable_NormalPriority,cg)))}function Qr(e){function t(i){return Ar(i,e)}if(0<Oi.length){Ar(Oi[0],e);for(var n=1;n<Oi.length;n++){var r=Oi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Jt!==null&&Ar(Jt,e),Zt!==null&&Ar(Zt,e),$t!==null&&Ar($t,e),Hr.forEach(t),Wr.forEach(t),n=0;n<Qt.length;n++)r=Qt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Qt.length&&(n=Qt[0],n.blockedOn===null);)Vf(n),n.blockedOn===null&&Qt.shift()}var Xn=jt.ReactCurrentBatchConfig,fo=!0;function dg(e,t,n,r){var i=oe,o=Xn.transition;Xn.transition=null;try{oe=1,iu(e,t,n,r)}finally{oe=i,Xn.transition=o}}function fg(e,t,n,r){var i=oe,o=Xn.transition;Xn.transition=null;try{oe=4,iu(e,t,n,r)}finally{oe=i,Xn.transition=o}}function iu(e,t,n,r){if(fo){var i=Vl(e,t,n,r);if(i===null)$a(e,t,r,po,n),Sc(e,r);else if(ug(i,e,t,n,r))r.stopPropagation();else if(Sc(e,r),t&4&&-1<sg.indexOf(e)){for(;i!==null;){var o=fi(i);if(o!==null&&zf(o),o=Vl(e,t,n,r),o===null&&$a(e,t,r,po,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else $a(e,t,r,null,n)}}var po=null;function Vl(e,t,n,r){if(po=null,e=eu(r),e=vn(e),e!==null)if(t=_n(e),t===null)e=null;else if(n=t.tag,n===13){if(e=_f(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return po=e,null}function Gf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($h()){case tu:return 1;case Mf:return 4;case uo:case eg:return 16;case Rf:return 536870912;default:return 16}default:return 16}}var Kt=null,ou=null,Qi=null;function Hf(){if(Qi)return Qi;var e,t=ou,n=t.length,r,i="value"in Kt?Kt.value:Kt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Qi=i.slice(e,1<r?1-r:void 0)}function Yi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ti(){return!0}function wc(){return!1}function lt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ti:wc,this.isPropagationStopped=wc,this}return ge(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ti)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ti)},persist:function(){},isPersistent:Ti}),t}var fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},au=lt(fr),di=ge({},fr,{view:0,detail:0}),pg=lt(di),Ha,Wa,wr,Ko=ge({},di,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wr&&(wr&&e.type==="mousemove"?(Ha=e.screenX-wr.screenX,Wa=e.screenY-wr.screenY):Wa=Ha=0,wr=e),Ha)},movementY:function(e){return"movementY"in e?e.movementY:Wa}}),Cc=lt(Ko),mg=ge({},Ko,{dataTransfer:0}),hg=lt(mg),gg=ge({},di,{relatedTarget:0}),Qa=lt(gg),vg=ge({},fr,{animationName:0,elapsedTime:0,pseudoElement:0}),yg=lt(vg),Sg=ge({},fr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ag=lt(Sg),wg=ge({},fr,{data:0}),bc=lt(wg),Cg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=kg[e])?!!t[e]:!1}function lu(){return Pg}var Eg=ge({},di,{key:function(e){if(e.key){var t=Cg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Yi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lu,charCode:function(e){return e.type==="keypress"?Yi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Og=lt(Eg),Tg=ge({},Ko,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kc=lt(Tg),xg=ge({},di,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lu}),_g=lt(xg),Dg=ge({},fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ig=lt(Dg),Ng=ge({},Ko,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Mg=lt(Ng),Rg=[9,13,27,32],su=Lt&&"CompositionEvent"in window,Ir=null;Lt&&"documentMode"in document&&(Ir=document.documentMode);var Lg=Lt&&"TextEvent"in window&&!Ir,Wf=Lt&&(!su||Ir&&8<Ir&&11>=Ir),Pc=String.fromCharCode(32),Ec=!1;function Qf(e,t){switch(e){case"keyup":return Rg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ln=!1;function Bg(e,t){switch(e){case"compositionend":return Yf(t);case"keypress":return t.which!==32?null:(Ec=!0,Pc);case"textInput":return e=t.data,e===Pc&&Ec?null:e;default:return null}}function zg(e,t){if(Ln)return e==="compositionend"||!su&&Qf(e,t)?(e=Hf(),Qi=ou=Kt=null,Ln=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Wf&&t.locale!=="ko"?null:t.data;default:return null}}var Fg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Oc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Fg[e.type]:t==="textarea"}function Kf(e,t,n,r){Pf(r),t=mo(t,"onChange"),0<t.length&&(n=new au("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Nr=null,Yr=null;function jg(e){op(e,0)}function qo(e){var t=Fn(e);if(yf(t))return e}function Ug(e,t){if(e==="change")return t}var qf=!1;if(Lt){var Ya;if(Lt){var Ka="oninput"in document;if(!Ka){var Tc=document.createElement("div");Tc.setAttribute("oninput","return;"),Ka=typeof Tc.oninput=="function"}Ya=Ka}else Ya=!1;qf=Ya&&(!document.documentMode||9<document.documentMode)}function xc(){Nr&&(Nr.detachEvent("onpropertychange",Xf),Yr=Nr=null)}function Xf(e){if(e.propertyName==="value"&&qo(Yr)){var t=[];Kf(t,Yr,e,eu(e)),xf(jg,t)}}function Vg(e,t,n){e==="focusin"?(xc(),Nr=t,Yr=n,Nr.attachEvent("onpropertychange",Xf)):e==="focusout"&&xc()}function Gg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qo(Yr)}function Hg(e,t){if(e==="click")return qo(t)}function Wg(e,t){if(e==="input"||e==="change")return qo(t)}function Qg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var bt=typeof Object.is=="function"?Object.is:Qg;function Kr(e,t){if(bt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!kl.call(t,i)||!bt(e[i],t[i]))return!1}return!0}function _c(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Dc(e,t){var n=_c(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=_c(n)}}function Jf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Jf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Zf(){for(var e=window,t=ao();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ao(e.document)}return t}function uu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Yg(e){var t=Zf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Jf(n.ownerDocument.documentElement,n)){if(r!==null&&uu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Dc(n,o);var a=Dc(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Kg=Lt&&"documentMode"in document&&11>=document.documentMode,Bn=null,Gl=null,Mr=null,Hl=!1;function Ic(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hl||Bn==null||Bn!==ao(r)||(r=Bn,"selectionStart"in r&&uu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Mr&&Kr(Mr,r)||(Mr=r,r=mo(Gl,"onSelect"),0<r.length&&(t=new au("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Bn)))}function xi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var zn={animationend:xi("Animation","AnimationEnd"),animationiteration:xi("Animation","AnimationIteration"),animationstart:xi("Animation","AnimationStart"),transitionend:xi("Transition","TransitionEnd")},qa={},$f={};Lt&&($f=document.createElement("div").style,"AnimationEvent"in window||(delete zn.animationend.animation,delete zn.animationiteration.animation,delete zn.animationstart.animation),"TransitionEvent"in window||delete zn.transitionend.transition);function Xo(e){if(qa[e])return qa[e];if(!zn[e])return e;var t=zn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in $f)return qa[e]=t[n];return e}var ep=Xo("animationend"),tp=Xo("animationiteration"),np=Xo("animationstart"),rp=Xo("transitionend"),ip=new Map,Nc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dn(e,t){ip.set(e,t),xn(t,[e])}for(var Xa=0;Xa<Nc.length;Xa++){var Ja=Nc[Xa],qg=Ja.toLowerCase(),Xg=Ja[0].toUpperCase()+Ja.slice(1);dn(qg,"on"+Xg)}dn(ep,"onAnimationEnd");dn(tp,"onAnimationIteration");dn(np,"onAnimationStart");dn("dblclick","onDoubleClick");dn("focusin","onFocus");dn("focusout","onBlur");dn(rp,"onTransitionEnd");er("onMouseEnter",["mouseout","mouseover"]);er("onMouseLeave",["mouseout","mouseover"]);er("onPointerEnter",["pointerout","pointerover"]);er("onPointerLeave",["pointerout","pointerover"]);xn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xn("onBeforeInput",["compositionend","keypress","textInput","paste"]);xn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Tr));function Mc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,qh(r,t,void 0,e),e.currentTarget=null}function op(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;Mc(i,l,c),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,c=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;Mc(i,l,c),o=s}}}if(so)throw e=Fl,so=!1,Fl=null,e}function ue(e,t){var n=t[ql];n===void 0&&(n=t[ql]=new Set);var r=e+"__bubble";n.has(r)||(ap(t,e,2,!1),n.add(r))}function Za(e,t,n){var r=0;t&&(r|=4),ap(n,e,r,t)}var _i="_reactListening"+Math.random().toString(36).slice(2);function qr(e){if(!e[_i]){e[_i]=!0,pf.forEach(function(n){n!=="selectionchange"&&(Jg.has(n)||Za(n,!1,e),Za(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[_i]||(t[_i]=!0,Za("selectionchange",!1,t))}}function ap(e,t,n,r){switch(Gf(t)){case 1:var i=dg;break;case 4:i=fg;break;default:i=iu}n=i.bind(null,t,n,e),i=void 0,!zl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function $a(e,t,n,r,i){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=vn(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}xf(function(){var c=o,p=eu(n),d=[];e:{var h=ip.get(e);if(h!==void 0){var w=au,y=e;switch(e){case"keypress":if(Yi(n)===0)break e;case"keydown":case"keyup":w=Og;break;case"focusin":y="focus",w=Qa;break;case"focusout":y="blur",w=Qa;break;case"beforeblur":case"afterblur":w=Qa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Cc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=hg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=_g;break;case ep:case tp:case np:w=yg;break;case rp:w=Ig;break;case"scroll":w=pg;break;case"wheel":w=Mg;break;case"copy":case"cut":case"paste":w=Ag;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=kc}var v=(t&4)!==0,S=!v&&e==="scroll",m=v?h!==null?h+"Capture":null:h;v=[];for(var f=c,g;f!==null;){g=f;var A=g.stateNode;if(g.tag===5&&A!==null&&(g=A,m!==null&&(A=Gr(f,m),A!=null&&v.push(Xr(f,A,g)))),S)break;f=f.return}0<v.length&&(h=new w(h,y,null,n,p),d.push({event:h,listeners:v}))}}if((t&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",h&&n!==Ll&&(y=n.relatedTarget||n.fromElement)&&(vn(y)||y[Bt]))break e;if((w||h)&&(h=p.window===p?p:(h=p.ownerDocument)?h.defaultView||h.parentWindow:window,w?(y=n.relatedTarget||n.toElement,w=c,y=y?vn(y):null,y!==null&&(S=_n(y),y!==S||y.tag!==5&&y.tag!==6)&&(y=null)):(w=null,y=c),w!==y)){if(v=Cc,A="onMouseLeave",m="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(v=kc,A="onPointerLeave",m="onPointerEnter",f="pointer"),S=w==null?h:Fn(w),g=y==null?h:Fn(y),h=new v(A,f+"leave",w,n,p),h.target=S,h.relatedTarget=g,A=null,vn(p)===c&&(v=new v(m,f+"enter",y,n,p),v.target=g,v.relatedTarget=S,A=v),S=A,w&&y)t:{for(v=w,m=y,f=0,g=v;g;g=In(g))f++;for(g=0,A=m;A;A=In(A))g++;for(;0<f-g;)v=In(v),f--;for(;0<g-f;)m=In(m),g--;for(;f--;){if(v===m||m!==null&&v===m.alternate)break t;v=In(v),m=In(m)}v=null}else v=null;w!==null&&Rc(d,h,w,v,!1),y!==null&&S!==null&&Rc(d,S,y,v,!0)}}e:{if(h=c?Fn(c):window,w=h.nodeName&&h.nodeName.toLowerCase(),w==="select"||w==="input"&&h.type==="file")var k=Ug;else if(Oc(h))if(qf)k=Wg;else{k=Gg;var E=Vg}else(w=h.nodeName)&&w.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=Hg);if(k&&(k=k(e,c))){Kf(d,k,n,p);break e}E&&E(e,h,c),e==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&Dl(h,"number",h.value)}switch(E=c?Fn(c):window,e){case"focusin":(Oc(E)||E.contentEditable==="true")&&(Bn=E,Gl=c,Mr=null);break;case"focusout":Mr=Gl=Bn=null;break;case"mousedown":Hl=!0;break;case"contextmenu":case"mouseup":case"dragend":Hl=!1,Ic(d,n,p);break;case"selectionchange":if(Kg)break;case"keydown":case"keyup":Ic(d,n,p)}var _;if(su)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Ln?Qf(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Wf&&n.locale!=="ko"&&(Ln||P!=="onCompositionStart"?P==="onCompositionEnd"&&Ln&&(_=Hf()):(Kt=p,ou="value"in Kt?Kt.value:Kt.textContent,Ln=!0)),E=mo(c,P),0<E.length&&(P=new bc(P,e,null,n,p),d.push({event:P,listeners:E}),_?P.data=_:(_=Yf(n),_!==null&&(P.data=_)))),(_=Lg?Bg(e,n):zg(e,n))&&(c=mo(c,"onBeforeInput"),0<c.length&&(p=new bc("onBeforeInput","beforeinput",null,n,p),d.push({event:p,listeners:c}),p.data=_))}op(d,t)})}function Xr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function mo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Gr(e,n),o!=null&&r.unshift(Xr(e,o,i)),o=Gr(e,t),o!=null&&r.push(Xr(e,o,i))),e=e.return}return r}function In(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Rc(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,c=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&c!==null&&(l=c,i?(s=Gr(n,o),s!=null&&a.unshift(Xr(n,s,l))):i||(s=Gr(n,o),s!=null&&a.push(Xr(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Zg=/\r\n?/g,$g=/\u0000|\uFFFD/g;function Lc(e){return(typeof e=="string"?e:""+e).replace(Zg,`
`).replace($g,"")}function Di(e,t,n){if(t=Lc(t),Lc(e)!==t&&n)throw Error(T(425))}function ho(){}var Wl=null,Ql=null;function Yl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Kl=typeof setTimeout=="function"?setTimeout:void 0,ev=typeof clearTimeout=="function"?clearTimeout:void 0,Bc=typeof Promise=="function"?Promise:void 0,tv=typeof queueMicrotask=="function"?queueMicrotask:typeof Bc!="undefined"?function(e){return Bc.resolve(null).then(e).catch(nv)}:Kl;function nv(e){setTimeout(function(){throw e})}function el(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Qr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Qr(t)}function en(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function zc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var pr=Math.random().toString(36).slice(2),Ot="__reactFiber$"+pr,Jr="__reactProps$"+pr,Bt="__reactContainer$"+pr,ql="__reactEvents$"+pr,rv="__reactListeners$"+pr,iv="__reactHandles$"+pr;function vn(e){var t=e[Ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Bt]||n[Ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=zc(e);e!==null;){if(n=e[Ot])return n;e=zc(e)}return t}e=n,n=e.parentNode}return null}function fi(e){return e=e[Ot]||e[Bt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Fn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function Jo(e){return e[Jr]||null}var Xl=[],jn=-1;function fn(e){return{current:e}}function ce(e){0>jn||(e.current=Xl[jn],Xl[jn]=null,jn--)}function se(e,t){jn++,Xl[jn]=e.current,e.current=t}var cn={},Ue=fn(cn),Ze=fn(!1),kn=cn;function tr(e,t){var n=e.type.contextTypes;if(!n)return cn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function $e(e){return e=e.childContextTypes,e!=null}function go(){ce(Ze),ce(Ue)}function Fc(e,t,n){if(Ue.current!==cn)throw Error(T(168));se(Ue,t),se(Ze,n)}function lp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(T(108,Vh(e)||"Unknown",i));return ge({},n,r)}function vo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||cn,kn=Ue.current,se(Ue,e),se(Ze,Ze.current),!0}function jc(e,t,n){var r=e.stateNode;if(!r)throw Error(T(169));n?(e=lp(e,t,kn),r.__reactInternalMemoizedMergedChildContext=e,ce(Ze),ce(Ue),se(Ue,e)):ce(Ze),se(Ze,n)}var Dt=null,Zo=!1,tl=!1;function sp(e){Dt===null?Dt=[e]:Dt.push(e)}function ov(e){Zo=!0,sp(e)}function pn(){if(!tl&&Dt!==null){tl=!0;var e=0,t=oe;try{var n=Dt;for(oe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Dt=null,Zo=!1}catch(i){throw Dt!==null&&(Dt=Dt.slice(e+1)),Nf(tu,pn),i}finally{oe=t,tl=!1}}return null}var Un=[],Vn=0,yo=null,So=0,ut=[],ct=0,Pn=null,It=1,Nt="";function hn(e,t){Un[Vn++]=So,Un[Vn++]=yo,yo=e,So=t}function up(e,t,n){ut[ct++]=It,ut[ct++]=Nt,ut[ct++]=Pn,Pn=e;var r=It;e=Nt;var i=32-wt(r)-1;r&=~(1<<i),n+=1;var o=32-wt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,It=1<<32-wt(t)+i|n<<i|r,Nt=o+e}else It=1<<o|n<<i|r,Nt=e}function cu(e){e.return!==null&&(hn(e,1),up(e,1,0))}function du(e){for(;e===yo;)yo=Un[--Vn],Un[Vn]=null,So=Un[--Vn],Un[Vn]=null;for(;e===Pn;)Pn=ut[--ct],ut[ct]=null,Nt=ut[--ct],ut[ct]=null,It=ut[--ct],ut[ct]=null}var it=null,nt=null,fe=!1,At=null;function cp(e,t){var n=dt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Uc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,it=e,nt=en(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,it=e,nt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Pn!==null?{id:It,overflow:Nt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=dt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,it=e,nt=null,!0):!1;default:return!1}}function Jl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Zl(e){if(fe){var t=nt;if(t){var n=t;if(!Uc(e,t)){if(Jl(e))throw Error(T(418));t=en(n.nextSibling);var r=it;t&&Uc(e,t)?cp(r,n):(e.flags=e.flags&-4097|2,fe=!1,it=e)}}else{if(Jl(e))throw Error(T(418));e.flags=e.flags&-4097|2,fe=!1,it=e}}}function Vc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;it=e}function Ii(e){if(e!==it)return!1;if(!fe)return Vc(e),fe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Yl(e.type,e.memoizedProps)),t&&(t=nt)){if(Jl(e))throw dp(),Error(T(418));for(;t;)cp(e,t),t=en(t.nextSibling)}if(Vc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){nt=en(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}nt=null}}else nt=it?en(e.stateNode.nextSibling):null;return!0}function dp(){for(var e=nt;e;)e=en(e.nextSibling)}function nr(){nt=it=null,fe=!1}function fu(e){At===null?At=[e]:At.push(e)}var av=jt.ReactCurrentBatchConfig;function Cr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,e))}return e}function Ni(e,t){throw e=Object.prototype.toString.call(t),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Gc(e){var t=e._init;return t(e._payload)}function fp(e){function t(m,f){if(e){var g=m.deletions;g===null?(m.deletions=[f],m.flags|=16):g.push(f)}}function n(m,f){if(!e)return null;for(;f!==null;)t(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=on(m,f),m.index=0,m.sibling=null,m}function o(m,f,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<f?(m.flags|=2,f):g):(m.flags|=2,f)):(m.flags|=1048576,f)}function a(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,f,g,A){return f===null||f.tag!==6?(f=sl(g,m.mode,A),f.return=m,f):(f=i(f,g),f.return=m,f)}function s(m,f,g,A){var k=g.type;return k===Rn?p(m,f,g.props.children,A,g.key):f!==null&&(f.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Gt&&Gc(k)===f.type)?(A=i(f,g.props),A.ref=Cr(m,f,g),A.return=m,A):(A=eo(g.type,g.key,g.props,null,m.mode,A),A.ref=Cr(m,f,g),A.return=m,A)}function c(m,f,g,A){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=ul(g,m.mode,A),f.return=m,f):(f=i(f,g.children||[]),f.return=m,f)}function p(m,f,g,A,k){return f===null||f.tag!==7?(f=Cn(g,m.mode,A,k),f.return=m,f):(f=i(f,g),f.return=m,f)}function d(m,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=sl(""+f,m.mode,g),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ci:return g=eo(f.type,f.key,f.props,null,m.mode,g),g.ref=Cr(m,null,f),g.return=m,g;case Mn:return f=ul(f,m.mode,g),f.return=m,f;case Gt:var A=f._init;return d(m,A(f._payload),g)}if(Er(f)||vr(f))return f=Cn(f,m.mode,g,null),f.return=m,f;Ni(m,f)}return null}function h(m,f,g,A){var k=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return k!==null?null:l(m,f,""+g,A);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ci:return g.key===k?s(m,f,g,A):null;case Mn:return g.key===k?c(m,f,g,A):null;case Gt:return k=g._init,h(m,f,k(g._payload),A)}if(Er(g)||vr(g))return k!==null?null:p(m,f,g,A,null);Ni(m,g)}return null}function w(m,f,g,A,k){if(typeof A=="string"&&A!==""||typeof A=="number")return m=m.get(g)||null,l(f,m,""+A,k);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Ci:return m=m.get(A.key===null?g:A.key)||null,s(f,m,A,k);case Mn:return m=m.get(A.key===null?g:A.key)||null,c(f,m,A,k);case Gt:var E=A._init;return w(m,f,g,E(A._payload),k)}if(Er(A)||vr(A))return m=m.get(g)||null,p(f,m,A,k,null);Ni(f,A)}return null}function y(m,f,g,A){for(var k=null,E=null,_=f,P=f=0,x=null;_!==null&&P<g.length;P++){_.index>P?(x=_,_=null):x=_.sibling;var I=h(m,_,g[P],A);if(I===null){_===null&&(_=x);break}e&&_&&I.alternate===null&&t(m,_),f=o(I,f,P),E===null?k=I:E.sibling=I,E=I,_=x}if(P===g.length)return n(m,_),fe&&hn(m,P),k;if(_===null){for(;P<g.length;P++)_=d(m,g[P],A),_!==null&&(f=o(_,f,P),E===null?k=_:E.sibling=_,E=_);return fe&&hn(m,P),k}for(_=r(m,_);P<g.length;P++)x=w(_,m,P,g[P],A),x!==null&&(e&&x.alternate!==null&&_.delete(x.key===null?P:x.key),f=o(x,f,P),E===null?k=x:E.sibling=x,E=x);return e&&_.forEach(function(U){return t(m,U)}),fe&&hn(m,P),k}function v(m,f,g,A){var k=vr(g);if(typeof k!="function")throw Error(T(150));if(g=k.call(g),g==null)throw Error(T(151));for(var E=k=null,_=f,P=f=0,x=null,I=g.next();_!==null&&!I.done;P++,I=g.next()){_.index>P?(x=_,_=null):x=_.sibling;var U=h(m,_,I.value,A);if(U===null){_===null&&(_=x);break}e&&_&&U.alternate===null&&t(m,_),f=o(U,f,P),E===null?k=U:E.sibling=U,E=U,_=x}if(I.done)return n(m,_),fe&&hn(m,P),k;if(_===null){for(;!I.done;P++,I=g.next())I=d(m,I.value,A),I!==null&&(f=o(I,f,P),E===null?k=I:E.sibling=I,E=I);return fe&&hn(m,P),k}for(_=r(m,_);!I.done;P++,I=g.next())I=w(_,m,P,I.value,A),I!==null&&(e&&I.alternate!==null&&_.delete(I.key===null?P:I.key),f=o(I,f,P),E===null?k=I:E.sibling=I,E=I);return e&&_.forEach(function(F){return t(m,F)}),fe&&hn(m,P),k}function S(m,f,g,A){if(typeof g=="object"&&g!==null&&g.type===Rn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ci:e:{for(var k=g.key,E=f;E!==null;){if(E.key===k){if(k=g.type,k===Rn){if(E.tag===7){n(m,E.sibling),f=i(E,g.props.children),f.return=m,m=f;break e}}else if(E.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Gt&&Gc(k)===E.type){n(m,E.sibling),f=i(E,g.props),f.ref=Cr(m,E,g),f.return=m,m=f;break e}n(m,E);break}else t(m,E);E=E.sibling}g.type===Rn?(f=Cn(g.props.children,m.mode,A,g.key),f.return=m,m=f):(A=eo(g.type,g.key,g.props,null,m.mode,A),A.ref=Cr(m,f,g),A.return=m,m=A)}return a(m);case Mn:e:{for(E=g.key;f!==null;){if(f.key===E)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(m,f.sibling),f=i(f,g.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else t(m,f);f=f.sibling}f=ul(g,m.mode,A),f.return=m,m=f}return a(m);case Gt:return E=g._init,S(m,f,E(g._payload),A)}if(Er(g))return y(m,f,g,A);if(vr(g))return v(m,f,g,A);Ni(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,g),f.return=m,m=f):(n(m,f),f=sl(g,m.mode,A),f.return=m,m=f),a(m)):n(m,f)}return S}var rr=fp(!0),pp=fp(!1),Ao=fn(null),wo=null,Gn=null,pu=null;function mu(){pu=Gn=wo=null}function hu(e){var t=Ao.current;ce(Ao),e._currentValue=t}function $l(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Jn(e,t){wo=e,pu=Gn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Je=!0),e.firstContext=null)}function pt(e){var t=e._currentValue;if(pu!==e)if(e={context:e,memoizedValue:t,next:null},Gn===null){if(wo===null)throw Error(T(308));Gn=e,wo.dependencies={lanes:0,firstContext:e}}else Gn=Gn.next=e;return t}var yn=null;function gu(e){yn===null?yn=[e]:yn.push(e)}function mp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,gu(t)):(n.next=i.next,i.next=n),t.interleaved=n,zt(e,r)}function zt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ht=!1;function vu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Rt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function tn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,($&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,zt(e,n)}return i=r.interleaved,i===null?(t.next=t,gu(r)):(t.next=i.next,i.next=t),r.interleaved=t,zt(e,n)}function Ki(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,nu(e,n)}}function Hc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Co(e,t,n,r){var i=e.updateQueue;Ht=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,c=s.next;s.next=null,a===null?o=c:a.next=c,a=s;var p=e.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==a&&(l===null?p.firstBaseUpdate=c:l.next=c,p.lastBaseUpdate=s))}if(o!==null){var d=i.baseState;a=0,p=c=s=null,l=o;do{var h=l.lane,w=l.eventTime;if((r&h)===h){p!==null&&(p=p.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,v=l;switch(h=t,w=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){d=y.call(w,d,h);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,h=typeof y=="function"?y.call(w,d,h):y,h==null)break e;d=ge({},d,h);break e;case 2:Ht=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else w={eventTime:w,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(c=p=w,s=d):p=p.next=w,a|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(p===null&&(s=d),i.baseState=s,i.firstBaseUpdate=c,i.lastBaseUpdate=p,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);On|=a,e.lanes=a,e.memoizedState=d}}function Wc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(T(191,i));i.call(r)}}}var pi={},xt=fn(pi),Zr=fn(pi),$r=fn(pi);function Sn(e){if(e===pi)throw Error(T(174));return e}function yu(e,t){switch(se($r,t),se(Zr,e),se(xt,pi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Nl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Nl(t,e)}ce(xt),se(xt,t)}function ir(){ce(xt),ce(Zr),ce($r)}function gp(e){Sn($r.current);var t=Sn(xt.current),n=Nl(t,e.type);t!==n&&(se(Zr,e),se(xt,n))}function Su(e){Zr.current===e&&(ce(xt),ce(Zr))}var me=fn(0);function bo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var nl=[];function Au(){for(var e=0;e<nl.length;e++)nl[e]._workInProgressVersionPrimary=null;nl.length=0}var qi=jt.ReactCurrentDispatcher,rl=jt.ReactCurrentBatchConfig,En=0,he=null,Ee=null,Te=null,ko=!1,Rr=!1,ei=0,lv=0;function ze(){throw Error(T(321))}function wu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!bt(e[n],t[n]))return!1;return!0}function Cu(e,t,n,r,i,o){if(En=o,he=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,qi.current=e===null||e.memoizedState===null?dv:fv,e=n(r,i),Rr){o=0;do{if(Rr=!1,ei=0,25<=o)throw Error(T(301));o+=1,Te=Ee=null,t.updateQueue=null,qi.current=pv,e=n(r,i)}while(Rr)}if(qi.current=Po,t=Ee!==null&&Ee.next!==null,En=0,Te=Ee=he=null,ko=!1,t)throw Error(T(300));return e}function bu(){var e=ei!==0;return ei=0,e}function Pt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Te===null?he.memoizedState=Te=e:Te=Te.next=e,Te}function mt(){if(Ee===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var t=Te===null?he.memoizedState:Te.next;if(t!==null)Te=t,Ee=e;else{if(e===null)throw Error(T(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},Te===null?he.memoizedState=Te=e:Te=Te.next=e}return Te}function ti(e,t){return typeof t=="function"?t(e):t}function il(e){var t=mt(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=Ee,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,c=o;do{var p=c.lane;if((En&p)===p)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var d={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(l=s=d,a=r):s=s.next=d,he.lanes|=p,On|=p}c=c.next}while(c!==null&&c!==o);s===null?a=r:s.next=l,bt(r,t.memoizedState)||(Je=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,he.lanes|=o,On|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ol(e){var t=mt(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);bt(o,t.memoizedState)||(Je=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function vp(){}function yp(e,t){var n=he,r=mt(),i=t(),o=!bt(r.memoizedState,i);if(o&&(r.memoizedState=i,Je=!0),r=r.queue,ku(wp.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Te!==null&&Te.memoizedState.tag&1){if(n.flags|=2048,ni(9,Ap.bind(null,n,r,i,t),void 0,null),xe===null)throw Error(T(349));(En&30)!==0||Sp(n,t,i)}return i}function Sp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=he.updateQueue,t===null?(t={lastEffect:null,stores:null},he.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ap(e,t,n,r){t.value=n,t.getSnapshot=r,Cp(t)&&bp(e)}function wp(e,t,n){return n(function(){Cp(t)&&bp(e)})}function Cp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!bt(e,n)}catch{return!0}}function bp(e){var t=zt(e,1);t!==null&&Ct(t,e,1,-1)}function Qc(e){var t=Pt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ti,lastRenderedState:e},t.queue=e,e=e.dispatch=cv.bind(null,he,e),[t.memoizedState,e]}function ni(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=he.updateQueue,t===null?(t={lastEffect:null,stores:null},he.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function kp(){return mt().memoizedState}function Xi(e,t,n,r){var i=Pt();he.flags|=e,i.memoizedState=ni(1|t,n,void 0,r===void 0?null:r)}function $o(e,t,n,r){var i=mt();r=r===void 0?null:r;var o=void 0;if(Ee!==null){var a=Ee.memoizedState;if(o=a.destroy,r!==null&&wu(r,a.deps)){i.memoizedState=ni(t,n,o,r);return}}he.flags|=e,i.memoizedState=ni(1|t,n,o,r)}function Yc(e,t){return Xi(8390656,8,e,t)}function ku(e,t){return $o(2048,8,e,t)}function Pp(e,t){return $o(4,2,e,t)}function Ep(e,t){return $o(4,4,e,t)}function Op(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Tp(e,t,n){return n=n!=null?n.concat([e]):null,$o(4,4,Op.bind(null,t,e),n)}function Pu(){}function xp(e,t){var n=mt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&wu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function _p(e,t){var n=mt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&wu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Dp(e,t,n){return(En&21)===0?(e.baseState&&(e.baseState=!1,Je=!0),e.memoizedState=n):(bt(n,t)||(n=Lf(),he.lanes|=n,On|=n,e.baseState=!0),t)}function sv(e,t){var n=oe;oe=n!==0&&4>n?n:4,e(!0);var r=rl.transition;rl.transition={};try{e(!1),t()}finally{oe=n,rl.transition=r}}function Ip(){return mt().memoizedState}function uv(e,t,n){var r=rn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Np(e))Mp(t,n);else if(n=mp(e,t,n,r),n!==null){var i=We();Ct(n,e,r,i),Rp(n,t,r)}}function cv(e,t,n){var r=rn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Np(e))Mp(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,bt(l,a)){var s=t.interleaved;s===null?(i.next=i,gu(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=mp(e,t,i,r),n!==null&&(i=We(),Ct(n,e,r,i),Rp(n,t,r))}}function Np(e){var t=e.alternate;return e===he||t!==null&&t===he}function Mp(e,t){Rr=ko=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rp(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,nu(e,n)}}var Po={readContext:pt,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useInsertionEffect:ze,useLayoutEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useMutableSource:ze,useSyncExternalStore:ze,useId:ze,unstable_isNewReconciler:!1},dv={readContext:pt,useCallback:function(e,t){return Pt().memoizedState=[e,t===void 0?null:t],e},useContext:pt,useEffect:Yc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Xi(4194308,4,Op.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Xi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Xi(4,2,e,t)},useMemo:function(e,t){var n=Pt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Pt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=uv.bind(null,he,e),[r.memoizedState,e]},useRef:function(e){var t=Pt();return e={current:e},t.memoizedState=e},useState:Qc,useDebugValue:Pu,useDeferredValue:function(e){return Pt().memoizedState=e},useTransition:function(){var e=Qc(!1),t=e[0];return e=sv.bind(null,e[1]),Pt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=he,i=Pt();if(fe){if(n===void 0)throw Error(T(407));n=n()}else{if(n=t(),xe===null)throw Error(T(349));(En&30)!==0||Sp(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Yc(wp.bind(null,r,o,e),[e]),r.flags|=2048,ni(9,Ap.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Pt(),t=xe.identifierPrefix;if(fe){var n=Nt,r=It;n=(r&~(1<<32-wt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ei++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=lv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},fv={readContext:pt,useCallback:xp,useContext:pt,useEffect:ku,useImperativeHandle:Tp,useInsertionEffect:Pp,useLayoutEffect:Ep,useMemo:_p,useReducer:il,useRef:kp,useState:function(){return il(ti)},useDebugValue:Pu,useDeferredValue:function(e){var t=mt();return Dp(t,Ee.memoizedState,e)},useTransition:function(){var e=il(ti)[0],t=mt().memoizedState;return[e,t]},useMutableSource:vp,useSyncExternalStore:yp,useId:Ip,unstable_isNewReconciler:!1},pv={readContext:pt,useCallback:xp,useContext:pt,useEffect:ku,useImperativeHandle:Tp,useInsertionEffect:Pp,useLayoutEffect:Ep,useMemo:_p,useReducer:ol,useRef:kp,useState:function(){return ol(ti)},useDebugValue:Pu,useDeferredValue:function(e){var t=mt();return Ee===null?t.memoizedState=e:Dp(t,Ee.memoizedState,e)},useTransition:function(){var e=ol(ti)[0],t=mt().memoizedState;return[e,t]},useMutableSource:vp,useSyncExternalStore:yp,useId:Ip,unstable_isNewReconciler:!1};function yt(e,t){if(e&&e.defaultProps){t=ge({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function es(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ge({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ea={isMounted:function(e){return(e=e._reactInternals)?_n(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=We(),i=rn(e),o=Rt(r,i);o.payload=t,n!=null&&(o.callback=n),t=tn(e,o,i),t!==null&&(Ct(t,e,i,r),Ki(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=We(),i=rn(e),o=Rt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=tn(e,o,i),t!==null&&(Ct(t,e,i,r),Ki(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=We(),r=rn(e),i=Rt(n,r);i.tag=2,t!=null&&(i.callback=t),t=tn(e,i,r),t!==null&&(Ct(t,e,r,n),Ki(t,e,r))}};function Kc(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Kr(n,r)||!Kr(i,o):!0}function Lp(e,t,n){var r=!1,i=cn,o=t.contextType;return typeof o=="object"&&o!==null?o=pt(o):(i=$e(t)?kn:Ue.current,r=t.contextTypes,o=(r=r!=null)?tr(e,i):cn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ea,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function qc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ea.enqueueReplaceState(t,t.state,null)}function ts(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},vu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=pt(o):(o=$e(t)?kn:Ue.current,i.context=tr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(es(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ea.enqueueReplaceState(i,i.state,null),Co(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function or(e,t){try{var n="",r=t;do n+=Uh(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function al(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function ns(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var mv=typeof WeakMap=="function"?WeakMap:Map;function Bp(e,t,n){n=Rt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Oo||(Oo=!0,fs=r),ns(e,t)},n}function zp(e,t,n){n=Rt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ns(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ns(e,t),typeof r!="function"&&(nn===null?nn=new Set([this]):nn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Xc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new mv;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Tv.bind(null,e,t,n),t.then(e,e))}function Jc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Zc(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Rt(-1,1),t.tag=2,tn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var hv=jt.ReactCurrentOwner,Je=!1;function Ge(e,t,n,r){t.child=e===null?pp(t,null,n,r):rr(t,e.child,n,r)}function $c(e,t,n,r,i){n=n.render;var o=t.ref;return Jn(t,i),r=Cu(e,t,n,r,o,i),n=bu(),e!==null&&!Je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ft(e,t,i)):(fe&&n&&cu(t),t.flags|=1,Ge(e,t,r,i),t.child)}function ed(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Nu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Fp(e,t,o,r,i)):(e=eo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&i)===0){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Kr,n(a,r)&&e.ref===t.ref)return Ft(e,t,i)}return t.flags|=1,e=on(o,r),e.ref=t.ref,e.return=t,t.child=e}function Fp(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Kr(o,r)&&e.ref===t.ref)if(Je=!1,t.pendingProps=r=o,(e.lanes&i)!==0)(e.flags&131072)!==0&&(Je=!0);else return t.lanes=e.lanes,Ft(e,t,i)}return rs(e,t,n,r,i)}function jp(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},se(Wn,tt),tt|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,se(Wn,tt),tt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,se(Wn,tt),tt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,se(Wn,tt),tt|=r;return Ge(e,t,i,n),t.child}function Up(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function rs(e,t,n,r,i){var o=$e(n)?kn:Ue.current;return o=tr(t,o),Jn(t,i),n=Cu(e,t,n,r,o,i),r=bu(),e!==null&&!Je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ft(e,t,i)):(fe&&r&&cu(t),t.flags|=1,Ge(e,t,n,i),t.child)}function td(e,t,n,r,i){if($e(n)){var o=!0;vo(t)}else o=!1;if(Jn(t,i),t.stateNode===null)Ji(e,t),Lp(t,n,r),ts(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=pt(c):(c=$e(n)?kn:Ue.current,c=tr(t,c));var p=n.getDerivedStateFromProps,d=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==c)&&qc(t,a,r,c),Ht=!1;var h=t.memoizedState;a.state=h,Co(t,r,a,i),s=t.memoizedState,l!==r||h!==s||Ze.current||Ht?(typeof p=="function"&&(es(t,n,p,r),s=t.memoizedState),(l=Ht||Kc(t,n,l,r,h,s,c))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=c,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,hp(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:yt(t.type,l),a.props=c,d=t.pendingProps,h=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=pt(s):(s=$e(n)?kn:Ue.current,s=tr(t,s));var w=n.getDerivedStateFromProps;(p=typeof w=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==d||h!==s)&&qc(t,a,r,s),Ht=!1,h=t.memoizedState,a.state=h,Co(t,r,a,i);var y=t.memoizedState;l!==d||h!==y||Ze.current||Ht?(typeof w=="function"&&(es(t,n,w,r),y=t.memoizedState),(c=Ht||Kc(t,n,c,r,h,y,s)||!1)?(p||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,y,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,y,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),a.props=r,a.state=y,a.context=s,r=c):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return is(e,t,n,r,o,i)}function is(e,t,n,r,i,o){Up(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&jc(t,n,!1),Ft(e,t,o);r=t.stateNode,hv.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=rr(t,e.child,null,o),t.child=rr(t,null,l,o)):Ge(e,t,l,o),t.memoizedState=r.state,i&&jc(t,n,!0),t.child}function Vp(e){var t=e.stateNode;t.pendingContext?Fc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Fc(e,t.context,!1),yu(e,t.containerInfo)}function nd(e,t,n,r,i){return nr(),fu(i),t.flags|=256,Ge(e,t,n,r),t.child}var os={dehydrated:null,treeContext:null,retryLane:0};function as(e){return{baseLanes:e,cachePool:null,transitions:null}}function Gp(e,t,n){var r=t.pendingProps,i=me.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),se(me,i&1),e===null)return Zl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=a):o=ra(a,r,0,null),e=Cn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=as(n),t.memoizedState=os,e):Eu(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return gv(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return(a&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=on(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=on(l,o):(o=Cn(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?as(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=os,r}return o=e.child,e=o.sibling,r=on(o,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Eu(e,t){return t=ra({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Mi(e,t,n,r){return r!==null&&fu(r),rr(t,e.child,null,n),e=Eu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function gv(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=al(Error(T(422))),Mi(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=ra({mode:"visible",children:r.children},i,0,null),o=Cn(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,(t.mode&1)!==0&&rr(t,e.child,null,a),t.child.memoizedState=as(a),t.memoizedState=os,o);if((t.mode&1)===0)return Mi(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(T(419)),r=al(o,r,void 0),Mi(e,t,a,r)}if(l=(a&e.childLanes)!==0,Je||l){if(r=xe,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|a))!==0?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,zt(e,i),Ct(r,e,i,-1))}return Iu(),r=al(Error(T(421))),Mi(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=xv.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,nt=en(i.nextSibling),it=t,fe=!0,At=null,e!==null&&(ut[ct++]=It,ut[ct++]=Nt,ut[ct++]=Pn,It=e.id,Nt=e.overflow,Pn=t),t=Eu(t,r.children),t.flags|=4096,t)}function rd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),$l(e.return,t,n)}function ll(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Hp(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ge(e,t,r.children,n),r=me.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rd(e,n,t);else if(e.tag===19)rd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(se(me,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&bo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ll(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&bo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ll(t,!0,n,null,o);break;case"together":ll(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ji(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ft(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),On|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(T(153));if(t.child!==null){for(e=t.child,n=on(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=on(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function vv(e,t,n){switch(t.tag){case 3:Vp(t),nr();break;case 5:gp(t);break;case 1:$e(t.type)&&vo(t);break;case 4:yu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;se(Ao,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(se(me,me.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Gp(e,t,n):(se(me,me.current&1),e=Ft(e,t,n),e!==null?e.sibling:null);se(me,me.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Hp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),se(me,me.current),r)break;return null;case 22:case 23:return t.lanes=0,jp(e,t,n)}return Ft(e,t,n)}var Wp,ls,Qp,Yp;Wp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ls=function(){};Qp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Sn(xt.current);var o=null;switch(n){case"input":i=xl(e,i),r=xl(e,r),o=[];break;case"select":i=ge({},i,{value:void 0}),r=ge({},r,{value:void 0}),o=[];break;case"textarea":i=Il(e,i),r=Il(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ho)}Ml(n,r);var a;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ur.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var s=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&s!==l&&(s!=null||l!=null))if(c==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ur.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&ue("scroll",e),o||l===s||(o=[])):(o=o||[]).push(c,s))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Yp=function(e,t,n,r){n!==r&&(t.flags|=4)};function br(e,t){if(!fe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function yv(e,t,n){var r=t.pendingProps;switch(du(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fe(t),null;case 1:return $e(t.type)&&go(),Fe(t),null;case 3:return r=t.stateNode,ir(),ce(Ze),ce(Ue),Au(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ii(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,At!==null&&(hs(At),At=null))),ls(e,t),Fe(t),null;case 5:Su(t);var i=Sn($r.current);if(n=t.type,e!==null&&t.stateNode!=null)Qp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(T(166));return Fe(t),null}if(e=Sn(xt.current),Ii(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ot]=t,r[Jr]=o,e=(t.mode&1)!==0,n){case"dialog":ue("cancel",r),ue("close",r);break;case"iframe":case"object":case"embed":ue("load",r);break;case"video":case"audio":for(i=0;i<Tr.length;i++)ue(Tr[i],r);break;case"source":ue("error",r);break;case"img":case"image":case"link":ue("error",r),ue("load",r);break;case"details":ue("toggle",r);break;case"input":fc(r,o),ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ue("invalid",r);break;case"textarea":mc(r,o),ue("invalid",r)}Ml(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Di(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Di(r.textContent,l,e),i=["children",""+l]):Ur.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ue("scroll",r)}switch(n){case"input":bi(r),pc(r,o,!0);break;case"textarea":bi(r),hc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ho)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=wf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Ot]=t,e[Jr]=r,Wp(e,t,!1,!1),t.stateNode=e;e:{switch(a=Rl(n,r),n){case"dialog":ue("cancel",e),ue("close",e),i=r;break;case"iframe":case"object":case"embed":ue("load",e),i=r;break;case"video":case"audio":for(i=0;i<Tr.length;i++)ue(Tr[i],e);i=r;break;case"source":ue("error",e),i=r;break;case"img":case"image":case"link":ue("error",e),ue("load",e),i=r;break;case"details":ue("toggle",e),i=r;break;case"input":fc(e,r),i=xl(e,r),ue("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ge({},r,{value:void 0}),ue("invalid",e);break;case"textarea":mc(e,r),i=Il(e,r),ue("invalid",e);break;default:i=r}Ml(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?kf(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Cf(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Vr(e,s):typeof s=="number"&&Vr(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ur.hasOwnProperty(o)?s!=null&&o==="onScroll"&&ue("scroll",e):s!=null&&Xs(e,o,s,a))}switch(n){case"input":bi(e),pc(e,r,!1);break;case"textarea":bi(e),hc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+un(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Yn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Yn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ho)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Fe(t),null;case 6:if(e&&t.stateNode!=null)Yp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(T(166));if(n=Sn($r.current),Sn(xt.current),Ii(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ot]=t,(o=r.nodeValue!==n)&&(e=it,e!==null))switch(e.tag){case 3:Di(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Di(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ot]=t,t.stateNode=r}return Fe(t),null;case 13:if(ce(me),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(fe&&nt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)dp(),nr(),t.flags|=98560,o=!1;else if(o=Ii(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(T(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(T(317));o[Ot]=t}else nr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Fe(t),o=!1}else At!==null&&(hs(At),At=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(me.current&1)!==0?Oe===0&&(Oe=3):Iu())),t.updateQueue!==null&&(t.flags|=4),Fe(t),null);case 4:return ir(),ls(e,t),e===null&&qr(t.stateNode.containerInfo),Fe(t),null;case 10:return hu(t.type._context),Fe(t),null;case 17:return $e(t.type)&&go(),Fe(t),null;case 19:if(ce(me),o=t.memoizedState,o===null)return Fe(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)br(o,!1);else{if(Oe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=bo(e),a!==null){for(t.flags|=128,br(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return se(me,me.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ce()>ar&&(t.flags|=128,r=!0,br(o,!1),t.lanes=4194304)}else{if(!r)if(e=bo(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),br(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!fe)return Fe(t),null}else 2*Ce()-o.renderingStartTime>ar&&n!==1073741824&&(t.flags|=128,r=!0,br(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ce(),t.sibling=null,n=me.current,se(me,r?n&1|2:n&1),t):(Fe(t),null);case 22:case 23:return Du(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(tt&1073741824)!==0&&(Fe(t),t.subtreeFlags&6&&(t.flags|=8192)):Fe(t),null;case 24:return null;case 25:return null}throw Error(T(156,t.tag))}function Sv(e,t){switch(du(t),t.tag){case 1:return $e(t.type)&&go(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ir(),ce(Ze),ce(Ue),Au(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Su(t),null;case 13:if(ce(me),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(T(340));nr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ce(me),null;case 4:return ir(),null;case 10:return hu(t.type._context),null;case 22:case 23:return Du(),null;case 24:return null;default:return null}}var Ri=!1,je=!1,Av=typeof WeakSet=="function"?WeakSet:Set,z=null;function Hn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Se(e,t,r)}else n.current=null}function ss(e,t,n){try{n()}catch(r){Se(e,t,r)}}var id=!1;function wv(e,t){if(Wl=fo,e=Zf(),uu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,c=0,p=0,d=e,h=null;t:for(;;){for(var w;d!==n||i!==0&&d.nodeType!==3||(l=a+i),d!==o||r!==0&&d.nodeType!==3||(s=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(w=d.firstChild)!==null;)h=d,d=w;for(;;){if(d===e)break t;if(h===n&&++c===i&&(l=a),h===o&&++p===r&&(s=a),(w=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=w}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ql={focusedElem:e,selectionRange:n},fo=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var y=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,S=y.memoizedState,m=t.stateNode,f=m.getSnapshotBeforeUpdate(t.elementType===t.type?v:yt(t.type,v),S);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(A){Se(t,t.return,A)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return y=id,id=!1,y}function Lr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&ss(t,n,o)}i=i.next}while(i!==r)}}function ta(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function us(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Kp(e){var t=e.alternate;t!==null&&(e.alternate=null,Kp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ot],delete t[Jr],delete t[ql],delete t[rv],delete t[iv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function qp(e){return e.tag===5||e.tag===3||e.tag===4}function od(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||qp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function cs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ho));else if(r!==4&&(e=e.child,e!==null))for(cs(e,t,n),e=e.sibling;e!==null;)cs(e,t,n),e=e.sibling}function ds(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ds(e,t,n),e=e.sibling;e!==null;)ds(e,t,n),e=e.sibling}var Me=null,St=!1;function Vt(e,t,n){for(n=n.child;n!==null;)Xp(e,t,n),n=n.sibling}function Xp(e,t,n){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(Yo,n)}catch{}switch(n.tag){case 5:je||Hn(n,t);case 6:var r=Me,i=St;Me=null,Vt(e,t,n),Me=r,St=i,Me!==null&&(St?(e=Me,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Me.removeChild(n.stateNode));break;case 18:Me!==null&&(St?(e=Me,n=n.stateNode,e.nodeType===8?el(e.parentNode,n):e.nodeType===1&&el(e,n),Qr(e)):el(Me,n.stateNode));break;case 4:r=Me,i=St,Me=n.stateNode.containerInfo,St=!0,Vt(e,t,n),Me=r,St=i;break;case 0:case 11:case 14:case 15:if(!je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&((o&2)!==0||(o&4)!==0)&&ss(n,t,a),i=i.next}while(i!==r)}Vt(e,t,n);break;case 1:if(!je&&(Hn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Se(n,t,l)}Vt(e,t,n);break;case 21:Vt(e,t,n);break;case 22:n.mode&1?(je=(r=je)||n.memoizedState!==null,Vt(e,t,n),je=r):Vt(e,t,n);break;default:Vt(e,t,n)}}function ad(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Av),t.forEach(function(r){var i=_v.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function vt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Me=l.stateNode,St=!1;break e;case 3:Me=l.stateNode.containerInfo,St=!0;break e;case 4:Me=l.stateNode.containerInfo,St=!0;break e}l=l.return}if(Me===null)throw Error(T(160));Xp(o,a,i),Me=null,St=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(c){Se(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Jp(t,e),t=t.sibling}function Jp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(vt(t,e),kt(e),r&4){try{Lr(3,e,e.return),ta(3,e)}catch(v){Se(e,e.return,v)}try{Lr(5,e,e.return)}catch(v){Se(e,e.return,v)}}break;case 1:vt(t,e),kt(e),r&512&&n!==null&&Hn(n,n.return);break;case 5:if(vt(t,e),kt(e),r&512&&n!==null&&Hn(n,n.return),e.flags&32){var i=e.stateNode;try{Vr(i,"")}catch(v){Se(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Sf(i,o),Rl(l,a);var c=Rl(l,o);for(a=0;a<s.length;a+=2){var p=s[a],d=s[a+1];p==="style"?kf(i,d):p==="dangerouslySetInnerHTML"?Cf(i,d):p==="children"?Vr(i,d):Xs(i,p,d,c)}switch(l){case"input":_l(i,o);break;case"textarea":Af(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?Yn(i,!!o.multiple,w,!1):h!==!!o.multiple&&(o.defaultValue!=null?Yn(i,!!o.multiple,o.defaultValue,!0):Yn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Jr]=o}catch(v){Se(e,e.return,v)}}break;case 6:if(vt(t,e),kt(e),r&4){if(e.stateNode===null)throw Error(T(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){Se(e,e.return,v)}}break;case 3:if(vt(t,e),kt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qr(t.containerInfo)}catch(v){Se(e,e.return,v)}break;case 4:vt(t,e),kt(e);break;case 13:vt(t,e),kt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(xu=Ce())),r&4&&ad(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(je=(c=je)||p,vt(t,e),je=c):vt(t,e),kt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!p&&(e.mode&1)!==0)for(z=e,p=e.child;p!==null;){for(d=z=p;z!==null;){switch(h=z,w=h.child,h.tag){case 0:case 11:case 14:case 15:Lr(4,h,h.return);break;case 1:Hn(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(v){Se(r,n,v)}}break;case 5:Hn(h,h.return);break;case 22:if(h.memoizedState!==null){sd(d);continue}}w!==null?(w.return=h,z=w):sd(d)}p=p.sibling}e:for(p=null,d=e;;){if(d.tag===5){if(p===null){p=d;try{i=d.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=d.stateNode,s=d.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=bf("display",a))}catch(v){Se(e,e.return,v)}}}else if(d.tag===6){if(p===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(v){Se(e,e.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;p===d&&(p=null),d=d.return}p===d&&(p=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:vt(t,e),kt(e),r&4&&ad(e);break;case 21:break;default:vt(t,e),kt(e)}}function kt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(qp(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Vr(i,""),r.flags&=-33);var o=od(e);ds(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=od(e);cs(e,l,a);break;default:throw Error(T(161))}}catch(s){Se(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Cv(e,t,n){z=e,Zp(e)}function Zp(e,t,n){for(var r=(e.mode&1)!==0;z!==null;){var i=z,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Ri;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||je;l=Ri;var c=je;if(Ri=a,(je=s)&&!c)for(z=i;z!==null;)a=z,s=a.child,a.tag===22&&a.memoizedState!==null?ud(i):s!==null?(s.return=a,z=s):ud(i);for(;o!==null;)z=o,Zp(o),o=o.sibling;z=i,Ri=l,je=c}ld(e)}else(i.subtreeFlags&8772)!==0&&o!==null?(o.return=i,z=o):ld(e)}}function ld(e){for(;z!==null;){var t=z;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:je||ta(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!je)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:yt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Wc(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Wc(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var d=p.dehydrated;d!==null&&Qr(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}je||t.flags&512&&us(t)}catch(h){Se(t,t.return,h)}}if(t===e){z=null;break}if(n=t.sibling,n!==null){n.return=t.return,z=n;break}z=t.return}}function sd(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,z=n;break}z=t.return}}function ud(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ta(4,t)}catch(s){Se(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){Se(t,i,s)}}var o=t.return;try{us(t)}catch(s){Se(t,o,s)}break;case 5:var a=t.return;try{us(t)}catch(s){Se(t,a,s)}}}catch(s){Se(t,t.return,s)}if(t===e){z=null;break}var l=t.sibling;if(l!==null){l.return=t.return,z=l;break}z=t.return}}var bv=Math.ceil,Eo=jt.ReactCurrentDispatcher,Ou=jt.ReactCurrentOwner,ft=jt.ReactCurrentBatchConfig,$=0,xe=null,be=null,Re=0,tt=0,Wn=fn(0),Oe=0,ri=null,On=0,na=0,Tu=0,Br=null,Xe=null,xu=0,ar=1/0,_t=null,Oo=!1,fs=null,nn=null,Li=!1,qt=null,To=0,zr=0,ps=null,Zi=-1,$i=0;function We(){return($&6)!==0?Ce():Zi!==-1?Zi:Zi=Ce()}function rn(e){return(e.mode&1)===0?1:($&2)!==0&&Re!==0?Re&-Re:av.transition!==null?($i===0&&($i=Lf()),$i):(e=oe,e!==0||(e=window.event,e=e===void 0?16:Gf(e.type)),e)}function Ct(e,t,n,r){if(50<zr)throw zr=0,ps=null,Error(T(185));ci(e,n,r),(($&2)===0||e!==xe)&&(e===xe&&(($&2)===0&&(na|=n),Oe===4&&Yt(e,Re)),et(e,r),n===1&&$===0&&(t.mode&1)===0&&(ar=Ce()+500,Zo&&pn()))}function et(e,t){var n=e.callbackNode;ag(e,t);var r=co(e,e===xe?Re:0);if(r===0)n!==null&&yc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&yc(n),t===1)e.tag===0?ov(cd.bind(null,e)):sp(cd.bind(null,e)),tv(function(){($&6)===0&&pn()}),n=null;else{switch(Bf(r)){case 1:n=tu;break;case 4:n=Mf;break;case 16:n=uo;break;case 536870912:n=Rf;break;default:n=uo}n=am(n,$p.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function $p(e,t){if(Zi=-1,$i=0,($&6)!==0)throw Error(T(327));var n=e.callbackNode;if(Zn()&&e.callbackNode!==n)return null;var r=co(e,e===xe?Re:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=xo(e,r);else{t=r;var i=$;$|=2;var o=tm();(xe!==e||Re!==t)&&(_t=null,ar=Ce()+500,wn(e,t));do try{Ev();break}catch(l){em(e,l)}while(1);mu(),Eo.current=o,$=i,be!==null?t=0:(xe=null,Re=0,t=Oe)}if(t!==0){if(t===2&&(i=jl(e),i!==0&&(r=i,t=ms(e,i))),t===1)throw n=ri,wn(e,0),Yt(e,r),et(e,Ce()),n;if(t===6)Yt(e,r);else{if(i=e.current.alternate,(r&30)===0&&!kv(i)&&(t=xo(e,r),t===2&&(o=jl(e),o!==0&&(r=o,t=ms(e,o))),t===1))throw n=ri,wn(e,0),Yt(e,r),et(e,Ce()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(T(345));case 2:gn(e,Xe,_t);break;case 3:if(Yt(e,r),(r&130023424)===r&&(t=xu+500-Ce(),10<t)){if(co(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){We(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Kl(gn.bind(null,e,Xe,_t),t);break}gn(e,Xe,_t);break;case 4:if(Yt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-wt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*bv(r/1960))-r,10<r){e.timeoutHandle=Kl(gn.bind(null,e,Xe,_t),r);break}gn(e,Xe,_t);break;case 5:gn(e,Xe,_t);break;default:throw Error(T(329))}}}return et(e,Ce()),e.callbackNode===n?$p.bind(null,e):null}function ms(e,t){var n=Br;return e.current.memoizedState.isDehydrated&&(wn(e,t).flags|=256),e=xo(e,t),e!==2&&(t=Xe,Xe=n,t!==null&&hs(t)),e}function hs(e){Xe===null?Xe=e:Xe.push.apply(Xe,e)}function kv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!bt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Yt(e,t){for(t&=~Tu,t&=~na,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-wt(t),r=1<<n;e[n]=-1,t&=~r}}function cd(e){if(($&6)!==0)throw Error(T(327));Zn();var t=co(e,0);if((t&1)===0)return et(e,Ce()),null;var n=xo(e,t);if(e.tag!==0&&n===2){var r=jl(e);r!==0&&(t=r,n=ms(e,r))}if(n===1)throw n=ri,wn(e,0),Yt(e,t),et(e,Ce()),n;if(n===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,gn(e,Xe,_t),et(e,Ce()),null}function _u(e,t){var n=$;$|=1;try{return e(t)}finally{$=n,$===0&&(ar=Ce()+500,Zo&&pn())}}function Tn(e){qt!==null&&qt.tag===0&&($&6)===0&&Zn();var t=$;$|=1;var n=ft.transition,r=oe;try{if(ft.transition=null,oe=1,e)return e()}finally{oe=r,ft.transition=n,$=t,($&6)===0&&pn()}}function Du(){tt=Wn.current,ce(Wn)}function wn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ev(n)),be!==null)for(n=be.return;n!==null;){var r=n;switch(du(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&go();break;case 3:ir(),ce(Ze),ce(Ue),Au();break;case 5:Su(r);break;case 4:ir();break;case 13:ce(me);break;case 19:ce(me);break;case 10:hu(r.type._context);break;case 22:case 23:Du()}n=n.return}if(xe=e,be=e=on(e.current,null),Re=tt=t,Oe=0,ri=null,Tu=na=On=0,Xe=Br=null,yn!==null){for(t=0;t<yn.length;t++)if(n=yn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}yn=null}return e}function em(e,t){do{var n=be;try{if(mu(),qi.current=Po,ko){for(var r=he.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ko=!1}if(En=0,Te=Ee=he=null,Rr=!1,ei=0,Ou.current=null,n===null||n.return===null){Oe=1,ri=t,be=null;break}e:{var o=e,a=n.return,l=n,s=t;if(t=Re,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,p=l,d=p.tag;if((p.mode&1)===0&&(d===0||d===11||d===15)){var h=p.alternate;h?(p.updateQueue=h.updateQueue,p.memoizedState=h.memoizedState,p.lanes=h.lanes):(p.updateQueue=null,p.memoizedState=null)}var w=Jc(a);if(w!==null){w.flags&=-257,Zc(w,a,l,o,t),w.mode&1&&Xc(o,c,t),t=w,s=c;var y=t.updateQueue;if(y===null){var v=new Set;v.add(s),t.updateQueue=v}else y.add(s);break e}else{if((t&1)===0){Xc(o,c,t),Iu();break e}s=Error(T(426))}}else if(fe&&l.mode&1){var S=Jc(a);if(S!==null){(S.flags&65536)===0&&(S.flags|=256),Zc(S,a,l,o,t),fu(or(s,l));break e}}o=s=or(s,l),Oe!==4&&(Oe=2),Br===null?Br=[o]:Br.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=Bp(o,s,t);Hc(o,m);break e;case 1:l=s;var f=o.type,g=o.stateNode;if((o.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(nn===null||!nn.has(g)))){o.flags|=65536,t&=-t,o.lanes|=t;var A=zp(o,l,t);Hc(o,A);break e}}o=o.return}while(o!==null)}rm(n)}catch(k){t=k,be===n&&n!==null&&(be=n=n.return);continue}break}while(1)}function tm(){var e=Eo.current;return Eo.current=Po,e===null?Po:e}function Iu(){(Oe===0||Oe===3||Oe===2)&&(Oe=4),xe===null||(On&268435455)===0&&(na&268435455)===0||Yt(xe,Re)}function xo(e,t){var n=$;$|=2;var r=tm();(xe!==e||Re!==t)&&(_t=null,wn(e,t));do try{Pv();break}catch(i){em(e,i)}while(1);if(mu(),$=n,Eo.current=r,be!==null)throw Error(T(261));return xe=null,Re=0,Oe}function Pv(){for(;be!==null;)nm(be)}function Ev(){for(;be!==null&&!Jh();)nm(be)}function nm(e){var t=om(e.alternate,e,tt);e.memoizedProps=e.pendingProps,t===null?rm(e):be=t,Ou.current=null}function rm(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=yv(n,t,tt),n!==null){be=n;return}}else{if(n=Sv(n,t),n!==null){n.flags&=32767,be=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Oe=6,be=null;return}}if(t=t.sibling,t!==null){be=t;return}be=t=e}while(t!==null);Oe===0&&(Oe=5)}function gn(e,t,n){var r=oe,i=ft.transition;try{ft.transition=null,oe=1,Ov(e,t,n,r)}finally{ft.transition=i,oe=r}return null}function Ov(e,t,n,r){do Zn();while(qt!==null);if(($&6)!==0)throw Error(T(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(lg(e,o),e===xe&&(be=xe=null,Re=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Li||(Li=!0,am(uo,function(){return Zn(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=ft.transition,ft.transition=null;var a=oe;oe=1;var l=$;$|=4,Ou.current=null,wv(e,n),Jp(n,e),Yg(Ql),fo=!!Wl,Ql=Wl=null,e.current=n,Cv(n),Zh(),$=l,oe=a,ft.transition=o}else e.current=n;if(Li&&(Li=!1,qt=e,To=i),o=e.pendingLanes,o===0&&(nn=null),tg(n.stateNode),et(e,Ce()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Oo)throw Oo=!1,e=fs,fs=null,e;return(To&1)!==0&&e.tag!==0&&Zn(),o=e.pendingLanes,(o&1)!==0?e===ps?zr++:(zr=0,ps=e):zr=0,pn(),null}function Zn(){if(qt!==null){var e=Bf(To),t=ft.transition,n=oe;try{if(ft.transition=null,oe=16>e?16:e,qt===null)var r=!1;else{if(e=qt,qt=null,To=0,($&6)!==0)throw Error(T(331));var i=$;for($|=4,z=e.current;z!==null;){var o=z,a=o.child;if((z.flags&16)!==0){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var c=l[s];for(z=c;z!==null;){var p=z;switch(p.tag){case 0:case 11:case 15:Lr(8,p,o)}var d=p.child;if(d!==null)d.return=p,z=d;else for(;z!==null;){p=z;var h=p.sibling,w=p.return;if(Kp(p),p===c){z=null;break}if(h!==null){h.return=w,z=h;break}z=w}}}var y=o.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var S=v.sibling;v.sibling=null,v=S}while(v!==null)}}z=o}}if((o.subtreeFlags&2064)!==0&&a!==null)a.return=o,z=a;else e:for(;z!==null;){if(o=z,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:Lr(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,z=m;break e}z=o.return}}var f=e.current;for(z=f;z!==null;){a=z;var g=a.child;if((a.subtreeFlags&2064)!==0&&g!==null)g.return=a,z=g;else e:for(a=f;z!==null;){if(l=z,(l.flags&2048)!==0)try{switch(l.tag){case 0:case 11:case 15:ta(9,l)}}catch(k){Se(l,l.return,k)}if(l===a){z=null;break e}var A=l.sibling;if(A!==null){A.return=l.return,z=A;break e}z=l.return}}if($=i,pn(),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(Yo,e)}catch{}r=!0}return r}finally{oe=n,ft.transition=t}}return!1}function dd(e,t,n){t=or(n,t),t=Bp(e,t,1),e=tn(e,t,1),t=We(),e!==null&&(ci(e,1,t),et(e,t))}function Se(e,t,n){if(e.tag===3)dd(e,e,n);else for(;t!==null;){if(t.tag===3){dd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(nn===null||!nn.has(r))){e=or(n,e),e=zp(t,e,1),t=tn(t,e,1),e=We(),t!==null&&(ci(t,1,e),et(t,e));break}}t=t.return}}function Tv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=We(),e.pingedLanes|=e.suspendedLanes&n,xe===e&&(Re&n)===n&&(Oe===4||Oe===3&&(Re&130023424)===Re&&500>Ce()-xu?wn(e,0):Tu|=n),et(e,t)}function im(e,t){t===0&&((e.mode&1)===0?t=1:(t=Ei,Ei<<=1,(Ei&130023424)===0&&(Ei=4194304)));var n=We();e=zt(e,t),e!==null&&(ci(e,t,n),et(e,n))}function xv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),im(e,n)}function _v(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(t),im(e,n)}var om;om=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ze.current)Je=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Je=!1,vv(e,t,n);Je=(e.flags&131072)!==0}else Je=!1,fe&&(t.flags&1048576)!==0&&up(t,So,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ji(e,t),e=t.pendingProps;var i=tr(t,Ue.current);Jn(t,n),i=Cu(null,t,r,e,i,n);var o=bu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,$e(r)?(o=!0,vo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,vu(t),i.updater=ea,t.stateNode=i,i._reactInternals=t,ts(t,r,e,n),t=is(null,t,r,!0,o,n)):(t.tag=0,fe&&o&&cu(t),Ge(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ji(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Iv(r),e=yt(r,e),i){case 0:t=rs(null,t,r,e,n);break e;case 1:t=td(null,t,r,e,n);break e;case 11:t=$c(null,t,r,e,n);break e;case 14:t=ed(null,t,r,yt(r.type,e),n);break e}throw Error(T(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:yt(r,i),rs(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:yt(r,i),td(e,t,r,i,n);case 3:e:{if(Vp(t),e===null)throw Error(T(387));r=t.pendingProps,o=t.memoizedState,i=o.element,hp(e,t),Co(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=or(Error(T(423)),t),t=nd(e,t,r,n,i);break e}else if(r!==i){i=or(Error(T(424)),t),t=nd(e,t,r,n,i);break e}else for(nt=en(t.stateNode.containerInfo.firstChild),it=t,fe=!0,At=null,n=pp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(nr(),r===i){t=Ft(e,t,n);break e}Ge(e,t,r,n)}t=t.child}return t;case 5:return gp(t),e===null&&Zl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Yl(r,i)?a=null:o!==null&&Yl(r,o)&&(t.flags|=32),Up(e,t),Ge(e,t,a,n),t.child;case 6:return e===null&&Zl(t),null;case 13:return Gp(e,t,n);case 4:return yu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=rr(t,null,r,n):Ge(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:yt(r,i),$c(e,t,r,i,n);case 7:return Ge(e,t,t.pendingProps,n),t.child;case 8:return Ge(e,t,t.pendingProps.children,n),t.child;case 12:return Ge(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,se(Ao,r._currentValue),r._currentValue=a,o!==null)if(bt(o.value,a)){if(o.children===i.children&&!Ze.current){t=Ft(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Rt(-1,n&-n),s.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?s.next=s:(s.next=p.next,p.next=s),c.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),$l(o.return,n,t),l.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(T(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),$l(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Ge(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Jn(t,n),i=pt(i),r=r(i),t.flags|=1,Ge(e,t,r,n),t.child;case 14:return r=t.type,i=yt(r,t.pendingProps),i=yt(r.type,i),ed(e,t,r,i,n);case 15:return Fp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:yt(r,i),Ji(e,t),t.tag=1,$e(r)?(e=!0,vo(t)):e=!1,Jn(t,n),Lp(t,r,i),ts(t,r,i,n),is(null,t,r,!0,e,n);case 19:return Hp(e,t,n);case 22:return jp(e,t,n)}throw Error(T(156,t.tag))};function am(e,t){return Nf(e,t)}function Dv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dt(e,t,n,r){return new Dv(e,t,n,r)}function Nu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Iv(e){if(typeof e=="function")return Nu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Zs)return 11;if(e===$s)return 14}return 2}function on(e,t){var n=e.alternate;return n===null?(n=dt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function eo(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Nu(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Rn:return Cn(n.children,i,o,t);case Js:a=8,i|=8;break;case Pl:return e=dt(12,n,t,i|2),e.elementType=Pl,e.lanes=o,e;case El:return e=dt(13,n,t,i),e.elementType=El,e.lanes=o,e;case Ol:return e=dt(19,n,t,i),e.elementType=Ol,e.lanes=o,e;case gf:return ra(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case mf:a=10;break e;case hf:a=9;break e;case Zs:a=11;break e;case $s:a=14;break e;case Gt:a=16,r=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return t=dt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Cn(e,t,n,r){return e=dt(7,e,r,t),e.lanes=n,e}function ra(e,t,n,r){return e=dt(22,e,r,t),e.elementType=gf,e.lanes=n,e.stateNode={isHidden:!1},e}function sl(e,t,n){return e=dt(6,e,null,t),e.lanes=n,e}function ul(e,t,n){return t=dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Nv(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ga(0),this.expirationTimes=Ga(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ga(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Mu(e,t,n,r,i,o,a,l,s){return e=new Nv(e,t,n,l,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=dt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vu(o),e}function Mv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function lm(e){if(!e)return cn;e=e._reactInternals;e:{if(_n(e)!==e||e.tag!==1)throw Error(T(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if($e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(T(171))}if(e.tag===1){var n=e.type;if($e(n))return lp(e,n,t)}return t}function sm(e,t,n,r,i,o,a,l,s){return e=Mu(n,r,!0,e,i,o,a,l,s),e.context=lm(null),n=e.current,r=We(),i=rn(n),o=Rt(r,i),o.callback=t!=null?t:null,tn(n,o,i),e.current.lanes=i,ci(e,i,r),et(e,r),e}function ia(e,t,n,r){var i=t.current,o=We(),a=rn(i);return n=lm(n),t.context===null?t.context=n:t.pendingContext=n,t=Rt(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=tn(i,t,a),e!==null&&(Ct(e,i,a,o),Ki(e,i,a)),a}function _o(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function fd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ru(e,t){fd(e,t),(e=e.alternate)&&fd(e,t)}function Rv(){return null}var um=typeof reportError=="function"?reportError:function(e){console.error(e)};function Lu(e){this._internalRoot=e}oa.prototype.render=Lu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(T(409));ia(e,t,null,null)};oa.prototype.unmount=Lu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Tn(function(){ia(null,e,null,null)}),t[Bt]=null}};function oa(e){this._internalRoot=e}oa.prototype.unstable_scheduleHydration=function(e){if(e){var t=jf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Qt.length&&t!==0&&t<Qt[n].priority;n++);Qt.splice(n,0,e),n===0&&Vf(e)}};function Bu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function aa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function pd(){}function Lv(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=_o(a);o.call(c)}}var a=sm(t,r,e,0,null,!1,!1,"",pd);return e._reactRootContainer=a,e[Bt]=a.current,qr(e.nodeType===8?e.parentNode:e),Tn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=_o(s);l.call(c)}}var s=Mu(e,0,!1,null,null,!1,!1,"",pd);return e._reactRootContainer=s,e[Bt]=s.current,qr(e.nodeType===8?e.parentNode:e),Tn(function(){ia(t,s,n,r)}),s}function la(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=_o(a);l.call(s)}}ia(t,a,e,i)}else a=Lv(n,t,e,i,r);return _o(a)}zf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Or(t.pendingLanes);n!==0&&(nu(t,n|1),et(t,Ce()),($&6)===0&&(ar=Ce()+500,pn()))}break;case 13:Tn(function(){var r=zt(e,1);if(r!==null){var i=We();Ct(r,e,1,i)}}),Ru(e,1)}};ru=function(e){if(e.tag===13){var t=zt(e,134217728);if(t!==null){var n=We();Ct(t,e,134217728,n)}Ru(e,134217728)}};Ff=function(e){if(e.tag===13){var t=rn(e),n=zt(e,t);if(n!==null){var r=We();Ct(n,e,t,r)}Ru(e,t)}};jf=function(){return oe};Uf=function(e,t){var n=oe;try{return oe=e,t()}finally{oe=n}};Bl=function(e,t,n){switch(t){case"input":if(_l(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Jo(r);if(!i)throw Error(T(90));yf(r),_l(r,i)}}}break;case"textarea":Af(e,n);break;case"select":t=n.value,t!=null&&Yn(e,!!n.multiple,t,!1)}};Of=_u;Tf=Tn;var Bv={usingClientEntryPoint:!1,Events:[fi,Fn,Jo,Pf,Ef,_u]},kr={findFiberByHostInstance:vn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zv={bundleType:kr.bundleType,version:kr.version,rendererPackageName:kr.rendererPackageName,rendererConfig:kr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Df(e),e===null?null:e.stateNode},findFiberByHostInstance:kr.findFiberByHostInstance||Rv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Bi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bi.isDisabled&&Bi.supportsFiber)try{Yo=Bi.inject(zv),Tt=Bi}catch{}}at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bv;at.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bu(t))throw Error(T(200));return Mv(e,t,null,n)};at.createRoot=function(e,t){if(!Bu(e))throw Error(T(299));var n=!1,r="",i=um;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Mu(e,1,!1,null,null,n,!1,r,i),e[Bt]=t.current,qr(e.nodeType===8?e.parentNode:e),new Lu(t)};at.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=Df(t),e=e===null?null:e.stateNode,e};at.flushSync=function(e){return Tn(e)};at.hydrate=function(e,t,n){if(!aa(t))throw Error(T(200));return la(null,e,t,!0,n)};at.hydrateRoot=function(e,t,n){if(!Bu(e))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=um;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=sm(t,null,e,1,n!=null?n:null,i,!1,o,a),e[Bt]=t.current,qr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new oa(t)};at.render=function(e,t,n){if(!aa(t))throw Error(T(200));return la(null,e,t,!1,n)};at.unmountComponentAtNode=function(e){if(!aa(e))throw Error(T(40));return e._reactRootContainer?(Tn(function(){la(null,null,e,!1,function(){e._reactRootContainer=null,e[Bt]=null})}),!0):!1};at.unstable_batchedUpdates=_u;at.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!aa(n))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return la(e,t,n,!1,r)};at.version="18.3.1-next-f1338f8080-20240426";function cm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cm)}catch(e){console.error(e)}}cm(),Qo.exports=at;var Fv=Qo.exports,jv=tf({__proto__:null,default:Fv},[Qo.exports]),md=Qo.exports;bl.createRoot=md.createRoot,bl.hydrateRoot=md.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ii(){return ii=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ii.apply(this,arguments)}var Xt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Xt||(Xt={}));const hd="popstate";function Uv(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return gs("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Do(i)}return Gv(t,n,null,e)}function ke(e,t){if(e===!1||e===null||typeof e=="undefined")throw new Error(t)}function dm(e,t){if(!e){typeof console!="undefined"&&console.warn(t);try{throw new Error(t)}catch{}}}function Vv(){return Math.random().toString(36).substr(2,8)}function gd(e,t){return{usr:e.state,key:e.key,idx:t}}function gs(e,t,n,r){return n===void 0&&(n=null),ii({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?mr(t):t,{state:n,key:t&&t.key||r||Vv()})}function Do(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function mr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Gv(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=Xt.Pop,s=null,c=p();c==null&&(c=0,a.replaceState(ii({},a.state,{idx:c}),""));function p(){return(a.state||{idx:null}).idx}function d(){l=Xt.Pop;let S=p(),m=S==null?null:S-c;c=S,s&&s({action:l,location:v.location,delta:m})}function h(S,m){l=Xt.Push;let f=gs(v.location,S,m);n&&n(f,S),c=p()+1;let g=gd(f,c),A=v.createHref(f);try{a.pushState(g,"",A)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(A)}o&&s&&s({action:l,location:v.location,delta:1})}function w(S,m){l=Xt.Replace;let f=gs(v.location,S,m);n&&n(f,S),c=p();let g=gd(f,c),A=v.createHref(f);a.replaceState(g,"",A),o&&s&&s({action:l,location:v.location,delta:0})}function y(S){let m=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof S=="string"?S:Do(S);return f=f.replace(/ $/,"%20"),ke(m,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,m)}let v={get action(){return l},get location(){return e(i,a)},listen(S){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(hd,d),s=S,()=>{i.removeEventListener(hd,d),s=null}},createHref(S){return t(i,S)},createURL:y,encodeLocation(S){let m=y(S);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:w,go(S){return a.go(S)}};return v}var vd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(vd||(vd={}));function Hv(e,t,n){return n===void 0&&(n="/"),Wv(e,t,n,!1)}function Wv(e,t,n,r){let i=typeof t=="string"?mr(t):t,o=zu(i.pathname||"/",n);if(o==null)return null;let a=fm(e);Qv(a);let l=null;for(let s=0;l==null&&s<a.length;++s){let c=ry(o);l=ty(a[s],c,r)}return l}function fm(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let s={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};s.relativePath.startsWith("/")&&(ke(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let c=an([r,s.relativePath]),p=n.concat(s);o.children&&o.children.length>0&&(ke(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),fm(o.children,t,p,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:$v(c,o.index),routesMeta:p})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let s of pm(o.path))i(o,a,s)}),t}function pm(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=pm(r.join("/")),l=[];return l.push(...a.map(s=>s===""?o:[o,s].join("/"))),i&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function Qv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:ey(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Yv=/^:[\w-]+$/,Kv=3,qv=2,Xv=1,Jv=10,Zv=-2,yd=e=>e==="*";function $v(e,t){let n=e.split("/"),r=n.length;return n.some(yd)&&(r+=Zv),t&&(r+=qv),n.filter(i=>!yd(i)).reduce((i,o)=>i+(Yv.test(o)?Kv:o===""?Xv:Jv),r)}function ey(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function ty(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,i={},o="/",a=[];for(let l=0;l<r.length;++l){let s=r[l],c=l===r.length-1,p=o==="/"?t:t.slice(o.length)||"/",d=Sd({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},p),h=s.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=Sd({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},p)),!d)return null;Object.assign(i,d.params),a.push({params:i,pathname:an([o,d.pathname]),pathnameBase:ly(an([o,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(o=an([o,d.pathnameBase]))}return a}function Sd(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ny(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,p,d)=>{let{paramName:h,isOptional:w}=p;if(h==="*"){let v=l[d]||"";a=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}const y=l[d];return w&&!y?c[h]=void 0:c[h]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:a,pattern:e}}function ny(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),dm(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,s)=>(r.push({paramName:l,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function ry(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return dm(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function zu(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function iy(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?mr(e):e;return{pathname:n?n.startsWith("/")?n:oy(n,t):t,search:sy(r),hash:uy(i)}}function oy(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function cl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ay(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function mm(e,t){let n=ay(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function hm(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=mr(e):(i=ii({},e),ke(!i.pathname||!i.pathname.includes("?"),cl("?","pathname","search",i)),ke(!i.pathname||!i.pathname.includes("#"),cl("#","pathname","hash",i)),ke(!i.search||!i.search.includes("#"),cl("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(a==null)l=n;else{let d=t.length-1;if(!r&&a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}l=d>=0?t[d]:"/"}let s=iy(i,l),c=a&&a!=="/"&&a.endsWith("/"),p=(o||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(c||p)&&(s.pathname+="/"),s}const an=e=>e.join("/").replace(/\/\/+/g,"/"),ly=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),sy=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,uy=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function cy(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const dy=["post","put","patch","delete"];[...dy];/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oi(){return oi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},oi.apply(this,arguments)}const Fu=O.exports.createContext(null),fy=O.exports.createContext(null),Dn=O.exports.createContext(null),sa=O.exports.createContext(null),mn=O.exports.createContext({outlet:null,matches:[],isDataRoute:!1}),gm=O.exports.createContext(null);function py(e,t){let{relative:n}=t===void 0?{}:t;mi()||ke(!1);let{basename:r,navigator:i}=O.exports.useContext(Dn),{hash:o,pathname:a,search:l}=Sm(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:an([r,a])),i.createHref({pathname:s,search:l,hash:o})}function mi(){return O.exports.useContext(sa)!=null}function hi(){return mi()||ke(!1),O.exports.useContext(sa).location}function vm(e){O.exports.useContext(Dn).static||O.exports.useLayoutEffect(e)}function ym(){let{isDataRoute:e}=O.exports.useContext(mn);return e?Oy():my()}function my(){mi()||ke(!1);let e=O.exports.useContext(Fu),{basename:t,future:n,navigator:r}=O.exports.useContext(Dn),{matches:i}=O.exports.useContext(mn),{pathname:o}=hi(),a=JSON.stringify(mm(i,n.v7_relativeSplatPath)),l=O.exports.useRef(!1);return vm(()=>{l.current=!0}),O.exports.useCallback(function(c,p){if(p===void 0&&(p={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let d=hm(c,JSON.parse(a),o,p.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:an([t,d.pathname])),(p.replace?r.replace:r.push)(d,p.state,p)},[t,r,a,o,e])}function hy(){let{matches:e}=O.exports.useContext(mn),t=e[e.length-1];return t?t.params:{}}function Sm(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=O.exports.useContext(Dn),{matches:i}=O.exports.useContext(mn),{pathname:o}=hi(),a=JSON.stringify(mm(i,r.v7_relativeSplatPath));return O.exports.useMemo(()=>hm(e,JSON.parse(a),o,n==="path"),[e,a,o,n])}function gy(e,t){return vy(e,t)}function vy(e,t,n,r){mi()||ke(!1);let{navigator:i}=O.exports.useContext(Dn),{matches:o}=O.exports.useContext(mn),a=o[o.length-1],l=a?a.params:{};a&&a.pathname;let s=a?a.pathnameBase:"/";a&&a.route;let c=hi(),p;if(t){var d;let S=typeof t=="string"?mr(t):t;s==="/"||((d=S.pathname)==null?void 0:d.startsWith(s))||ke(!1),p=S}else p=c;let h=p.pathname||"/",w=h;if(s!=="/"){let S=s.replace(/^\//,"").split("/"),m=h.replace(/^\//,"").split("/");w="/"+m.slice(S.length).join("/")}let y=Hv(e,{pathname:w}),v=Cy(y&&y.map(S=>Object.assign({},S,{params:Object.assign({},l,S.params),pathname:an([s,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?s:an([s,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),o,n,r);return t&&v?O.exports.createElement(sa.Provider,{value:{location:oi({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:Xt.Pop}},v):v}function yy(){let e=Ey(),t=cy(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return O.exports.createElement(O.exports.Fragment,null,O.exports.createElement("h2",null,"Unexpected Application Error!"),O.exports.createElement("h3",{style:{fontStyle:"italic"}},t),n?O.exports.createElement("pre",{style:i},n):null,o)}const Sy=O.exports.createElement(yy,null);class Ay extends O.exports.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?O.exports.createElement(mn.Provider,{value:this.props.routeContext},O.exports.createElement(gm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function wy(e){let{routeContext:t,match:n,children:r}=e,i=O.exports.useContext(Fu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),O.exports.createElement(mn.Provider,{value:t},r)}function Cy(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let p=a.findIndex(d=>d.route.id&&(l==null?void 0:l[d.route.id])!==void 0);p>=0||ke(!1),a=a.slice(0,Math.min(a.length,p+1))}let s=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let p=0;p<a.length;p++){let d=a[p];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=p),d.route.id){let{loaderData:h,errors:w}=n,y=d.route.loader&&h[d.route.id]===void 0&&(!w||w[d.route.id]===void 0);if(d.route.lazy||y){s=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((p,d,h)=>{let w,y=!1,v=null,S=null;n&&(w=l&&d.route.id?l[d.route.id]:void 0,v=d.route.errorElement||Sy,s&&(c<0&&h===0?(Ty("route-fallback",!1),y=!0,S=null):c===h&&(y=!0,S=d.route.hydrateFallbackElement||null)));let m=t.concat(a.slice(0,h+1)),f=()=>{let g;return w?g=v:y?g=S:d.route.Component?g=O.exports.createElement(d.route.Component,null):d.route.element?g=d.route.element:g=p,O.exports.createElement(wy,{match:d,routeContext:{outlet:p,matches:m,isDataRoute:n!=null},children:g})};return n&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?O.exports.createElement(Ay,{location:n.location,revalidation:n.revalidation,component:v,error:w,children:f(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):f()},null)}var Am=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Am||{}),Io=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Io||{});function by(e){let t=O.exports.useContext(Fu);return t||ke(!1),t}function ky(e){let t=O.exports.useContext(fy);return t||ke(!1),t}function Py(e){let t=O.exports.useContext(mn);return t||ke(!1),t}function wm(e){let t=Py(),n=t.matches[t.matches.length-1];return n.route.id||ke(!1),n.route.id}function Ey(){var e;let t=O.exports.useContext(gm),n=ky(Io.UseRouteError),r=wm(Io.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Oy(){let{router:e}=by(Am.UseNavigateStable),t=wm(Io.UseNavigateStable),n=O.exports.useRef(!1);return vm(()=>{n.current=!0}),O.exports.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,oi({fromRouteId:t},o)))},[e,t])}const Ad={};function Ty(e,t,n){!t&&!Ad[e]&&(Ad[e]=!0)}function xy(e,t){e==null||e.v7_startTransition,(e==null?void 0:e.v7_relativeSplatPath)===void 0&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}const _y="startTransition";Ys[_y];function xr(e){ke(!1)}function Dy(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Xt.Pop,navigator:o,static:a=!1,future:l}=e;mi()&&ke(!1);let s=t.replace(/^\/*/,"/"),c=O.exports.useMemo(()=>({basename:s,navigator:o,static:a,future:oi({v7_relativeSplatPath:!1},l)}),[s,l,o,a]);typeof r=="string"&&(r=mr(r));let{pathname:p="/",search:d="",hash:h="",state:w=null,key:y="default"}=r,v=O.exports.useMemo(()=>{let S=zu(p,s);return S==null?null:{location:{pathname:S,search:d,hash:h,state:w,key:y},navigationType:i}},[s,p,d,h,w,y,i]);return v==null?null:O.exports.createElement(Dn.Provider,{value:c},O.exports.createElement(sa.Provider,{children:n,value:v}))}function Iy(e){let{children:t,location:n}=e;return gy(vs(t),n)}new Promise(()=>{});function vs(e,t){t===void 0&&(t=[]);let n=[];return O.exports.Children.forEach(e,(r,i)=>{if(!O.exports.isValidElement(r))return;let o=[...t,i];if(r.type===O.exports.Fragment){n.push.apply(n,vs(r.props.children,o));return}r.type!==xr&&ke(!1),!r.props.index||!r.props.children||ke(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=vs(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ys(){return ys=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ys.apply(this,arguments)}function Ny(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function My(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ry(e,t){return e.button===0&&(!t||t==="_self")&&!My(e)}const Ly=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],By="6";try{window.__reactRouterVersion=By}catch{}const zy="startTransition",wd=Ys[zy],Fy="flushSync";jv[Fy];const jy="useId";Ys[jy];function Uy(e){let{basename:t,children:n,future:r,window:i}=e,o=O.exports.useRef();o.current==null&&(o.current=Uv({window:i,v5Compat:!0}));let a=o.current,[l,s]=O.exports.useState({action:a.action,location:a.location}),{v7_startTransition:c}=r||{},p=O.exports.useCallback(d=>{c&&wd?wd(()=>s(d)):s(d)},[s,c]);return O.exports.useLayoutEffect(()=>a.listen(p),[a,p]),O.exports.useEffect(()=>xy(r),[r]),O.exports.createElement(Dy,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a,future:r})}const Vy=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined",Gy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,He=O.exports.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:l,target:s,to:c,preventScrollReset:p,viewTransition:d}=t,h=Ny(t,Ly),{basename:w}=O.exports.useContext(Dn),y,v=!1;if(typeof c=="string"&&Gy.test(c)&&(y=c,Vy))try{let g=new URL(window.location.href),A=c.startsWith("//")?new URL(g.protocol+c):new URL(c),k=zu(A.pathname,w);A.origin===g.origin&&k!=null?c=k+A.search+A.hash:v=!0}catch{}let S=py(c,{relative:i}),m=Hy(c,{replace:a,state:l,target:s,preventScrollReset:p,relative:i,viewTransition:d});function f(g){r&&r(g),g.defaultPrevented||m(g)}return O.exports.createElement("a",ys({},h,{href:y||S,onClick:v||o?r:f,ref:n,target:s}))});var Cd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Cd||(Cd={}));var bd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(bd||(bd={}));function Hy(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a,viewTransition:l}=t===void 0?{}:t,s=ym(),c=hi(),p=Sm(e,{relative:a});return O.exports.useCallback(d=>{if(Ry(d,n)){d.preventDefault();let h=r!==void 0?r:Do(c)===Do(p);s(e,{replace:h,state:i,preventScrollReset:o,relative:a,viewTransition:l})}},[c,s,p,r,i,n,e,o,a,l])}var ua={exports:{}},ca={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wy=O.exports,Qy=Symbol.for("react.element"),Yy=Symbol.for("react.fragment"),Ky=Object.prototype.hasOwnProperty,qy=Wy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Xy={key:!0,ref:!0,__self:!0,__source:!0};function Cm(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Ky.call(t,r)&&!Xy.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Qy,type:e,key:o,ref:a,props:i,_owner:qy.current}}ca.Fragment=Yy;ca.jsx=Cm;ca.jsxs=Cm;ua.exports=ca;const u=ua.exports.jsx,C=ua.exports.jsxs,An=ua.exports.Fragment,Jy=[{title:"Game Development",description:"Unity 2D/3D and C# are my main tools. I also design game mechanics and storylines."},{title:"Full Stack Development",description:"I can work with both frontend (HTML, CSS, JavaScript, React) and backend (Node.js, Express). I prefer backend when required."},{title:"Project Managment",description:"I'm enable to coordinate and create a work flow for create amazing projects."}],Zy=()=>u("div",{className:"card-outer",children:u("div",{className:"container",children:Jy.map((e,t)=>C("div",{className:"card",children:[u("div",{className:"face face1",children:u("div",{className:"content",children:u("h3",{className:"title-card",children:e.title})})}),u("div",{className:"face face2",children:u("div",{className:"content",children:u("p",{children:e.description})})})]},t))})});const kd=({MainIcon:e,Data:t,Number:n})=>(rt.useEffect(()=>{(()=>{let i=document.querySelector(".toggle"+n),o=document.querySelector(".menu"+n);i.onclick=()=>{o.classList.toggle("active"+n)}})()}),u(An,{children:u("div",{className:"circular-nav",children:C("div",{className:"menu"+n,children:[u("div",{className:"toggle"+n,children:u("img",{className:"img-code",src:e,alt:"main_icon"})}),t.map((r,i)=>u("li",{style:{"--i":r.var},children:u("a",{className:"btn-circle-neon",href:r.ref_href,target:"_blank",title:r.title,rel:"noreferrer",children:u("img",{src:r.img_code,alt:""})})},i))]})})}));var $y="/Portafolio_PW3/assets/icons8-github-150.bb8c2705.png",e0="data:image/png;base64,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",t0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABmJLR0QA/wD/AP+gvaeTAAAG+0lEQVR4nO3dX4gdZxnH8e8z58x7Nk1IWqS2in/aSlbE0laqICJCKlTpdrtJStfghX9u2ptCqwipKGFNamMQbKMoIlR6o5VVYpakiaJ2eyOtIDTRCEKkNTRto94kMWl35j1nHi+qYDe76Tnnfedkct7nc7szv3k58zuzM3POeQeMMcYYY4wxxhhjjDHGGGOMMcYYM25kVBvSQ6wvCzcloreh3EzGdShXAvmoxtBQHuE0FX9HOKIiTzvKp2SGf49i47UXYGlfZzKTajvCNuCKurc3Jl5DeLLKsj0T08XxOjdUWwF0njW+k+9CeQBo17WdMecVecxtKHfIJpbq2EAtBVg60NmY9ap9wI115Cfoubznt8rdvBo7OHoByoX8Q8CvUa6OnZ0yQU9Wkk11Zso/xc2NaOlAZ2NWVb+3nV8PQU+28+5HZIpTsTKzWEG6yERWVT+3nV8fRd7lfX5Q51kTKzNaAfzZ/GGUm2PlmVXdWjr3UKywKP8ClvZ1JrOs+gt2tj8q5/Lcb4zxryDKESCTaju280dpne/mO2IEBR8B9BDrfZm/it3kGbXzufh3hN4xDD4ClIWbwnb+pbC2VHdHaEhwAUT0ttAMM5wYr334OYCd+V86yk2hEeEFEK4PzjDDuiE0IMZVwPoIGWY4G0IDYhTARcgww+mEBkS7E2guT00vwDGU+6pWNpm3/Nq85ddWrWwS4V4g6qdiqWrq3TsV0W+0n+/ukjmqN/+pOA4c1zke797S/qoiO2l+kRurkQUQdC6f6e686DJzVND9pt/fRpGHRzW2cdPEd86f20e6fe/Q9kz3EYSjdQ5onDWxAN+98LC/OhEU+H6N4xlrjStApdniwOtk2TN1jCUFjStAxxevDLwOxct1jCUFjSsAG4YYU0WrhpEkoXEFKAt33cDrqHt3HWNJQeMKkGn1qUHXEdVP1jGWFDSuAKrygC4y0ffyi7QR7q9zTOOscQUA3uPP5nv7Xbg843YBkzWOZ6w18k4gyr3lQt7LC/+gzFKuuMg8rdK5nYJuH/Xwxknwl0LL/bnGGMiKhBdQ9molv3F5eQKg9O69kukm4H7gA7Vt+zLhNvugfdjMI8D/KDcAeyVTfO+NaQQkq69vKWriOYAZIStA4qwAibMCJK7ZJ4HNcwbhEBXPIBzt9tovr1nz+lnO0S6duzaT6hqUWxW5C/g4I5yEa1iNvQzs9/Km3+0H5p0AdufOPyF3UPSTU+xzN2ZZ9Ygi0/0sP6zxvgy89BRhb575r8k0rw2yYmdreQy4q/xl/gWEHxLhK9x1sHOA1RUq8lk347806M7/f26Lf0LQO6G/I8eoWQFW1qvI7unMlD+LEZZv7v4WmvmBlRVgZV+e2FwciBmYz/jHUZ6OmRmDFWAZFTmcz/jvxc4VQassuw/wsbNDWAGWcZRf/O83jaObmCn+JqpRjyyhrADLyAz/qDU/0x/XmT8ouwx8C3qQq7zPP4/wGeD9vDG7+QlFDmtLfjToZM6toverymX/BN5ex3gHZUeAiygW3Dbfzf+K8CjwUeAqYB3wQUG/kvWqY36h/fVBMmWWnqB/qGO8w7ACrMLvbz8kqk9y8XeqU5Vd5UL+6IDxfwwYWlRWgBUUC26rIrv7XkF5sNjvtvS7uKBWgKbSRSZE9QeDrifot3Wuv9ezqrLG/JLJCrCMP51vA64ZYtX39W5q9TVvX09aZ4bIr4UVYBkRhp58scqy2/tZboKl08NuIzYrwDIKHw5Y/WN9LXWUswHbiMoKcKGhr88VeWc/yw0y/0HdrAAXWjvsioK+LeZARsEKENdlN2eiFSBxVoDEWQESZwVInBUgcVaAxFkBEmcFSJwVIHFWgMRZARJnBUicFSBxVoDEWQESZwVInBUgcVaAxFkBEmcFSJwVIHGNnSfQ9Cd0nkA7AiQuRgFWfKKHGYnguQdjFKAxv3NLUPCvjMMLoLwYnGGG9UJoQHgBhCPBGWZYwU9NDy6AijRu9stUqMjvQjOCC+CK8iBwPjTHDOy8K8rDoSHBBZBZziFEmVTZDOSnMsu50JAo9wGqLNtDw+bAHXNl1Wt9K0ZQlAJMTBfHFXksRpZ5a4p8Z+LupeArAIh4J9BtKHcAz8XKM6t61rlyLlZYtALIJpby3G8BXoqVad5M0Fe6rfY9/T63qB9RPwuQKU6pyJ2CnoyZawB4qSL79BXTr0edZLKWx5rpPFd7l/8C+EQd+Ql6Ns/9VpniVOzgWj4NlFn+lTt/uyI7sXsEIUpV2Z07v6mOnQ8jeLChPsW1vpvvQPkcAVOwJeY8wk+qbmtPrLP91YzsyZY6z7rSuSlBNwG3ANcDV3IZTq0WWQmcBl4EnleVRefLQzFu8hhjjDHGGGOMMcYYY4wxxhhjjDEmTf8BN/7j9iFKT0oAAAAASUVORK5CYII=";const ju=()=>C("div",{children:[u("h1",{children:"Contact me"}),u("br",{}),C("ul",{children:[u("a",{className:"a-social-media",target:"_blank",href:"mailto:cristianlaynezbachez@gmail.com",rel:"noreferrer",children:u("img",{className:"img-social-media",src:e0,alt:"gmail"})}),u("a",{className:"a-social-media",target:"_blank",href:"https://github.com/CrisLayB",rel:"noreferrer",children:u("img",{className:"img-social-media",src:$y,alt:"linkedin"})}),u("a",{className:"a-social-media",target:"_blank",href:"https://www.linkedin.com/in/cristian-laynez-b66a77173/",rel:"noreferrer",children:u("img",{className:"img-social-media",src:t0,alt:"linkedin"})})]})]});const bm=(e={})=>{const{smooth:t=!0,delay:n=100,top:r=0}=e,i=()=>{window.scrollTo({top:r,left:0,behavior:t?"smooth":"instant"})};n>0?setTimeout(i,n):i()},zi=()=>{const[e,t]=O.exports.useState(!1),[n,r]=O.exports.useState(!1),i=hi();O.exports.useEffect(()=>{const s=()=>{t(window.scrollY>50)};return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]);const a=(()=>{const s=i.pathname;return s==="/Portafolio_PW3/"||s==="/"?"home":s==="/Portafolio_PW3/about"?"about":s==="/Portafolio_PW3/games"?"games":""})();O.exports.useEffect(()=>{const s=c=>{n&&!c.target.closest(".mobile-menu-btn")&&!c.target.closest(".mobile-menu")&&r(!1)};return document.addEventListener("click",s),()=>document.removeEventListener("click",s)},[n]);const l=()=>{bm({smooth:!1,delay:0})};return C("nav",{className:`navbar-enhanced ${e?"scrolled":""}`,children:[C("div",{className:"navbar-container-enhanced",children:[C(He,{to:"/Portafolio_PW3/",className:"navbar-brand-enhanced",onClick:l,children:[u("span",{className:"brand-text",children:"Cristian Laynez"}),u("div",{className:"brand-underline"})]}),C("ul",{className:"navbar-menu-enhanced",children:[u("li",{className:"navbar-item-enhanced",children:C(He,{to:"/Portafolio_PW3/",className:`navbar-link-enhanced home-link ${a==="home"?"active":""}`,onClick:l,children:[u("span",{className:"link-text",children:"Home"}),u("div",{className:"link-background"}),C("div",{className:"neon-border",children:[u("span",{}),u("span",{}),u("span",{}),u("span",{})]})]})}),u("li",{className:"navbar-item-enhanced",children:C(He,{to:"/Portafolio_PW3/about",className:`navbar-link-enhanced about-link ${a==="about"?"active":""}`,onClick:l,children:[u("span",{className:"link-text",children:"About"}),u("div",{className:"link-background"}),C("div",{className:"neon-border",children:[u("span",{}),u("span",{}),u("span",{}),u("span",{})]})]})}),u("li",{className:"navbar-item-enhanced",children:C(He,{to:"/Portafolio_PW3/games",className:`navbar-link-enhanced games-link ${a==="games"?"active":""}`,onClick:l,children:[u("span",{className:"link-text",children:"Games"}),u("div",{className:"link-background"}),C("div",{className:"neon-border",children:[u("span",{}),u("span",{}),u("span",{}),u("span",{})]})]})})]}),C("button",{className:`mobile-menu-btn ${n?"open":""}`,onClick:()=>r(!n),"aria-label":"Toggle mobile menu",children:[u("span",{}),u("span",{}),u("span",{})]})]}),u("div",{className:`mobile-menu-overlay ${n?"open":""}`,children:C("div",{className:`mobile-menu ${n?"open":""}`,children:[C(He,{to:"/Portafolio_PW3/",className:`mobile-link home-link ${a==="home"?"active":""}`,onClick:()=>{r(!1),l()},children:[u("span",{className:"mobile-link-icon",children:"\u{1F3E0}"}),"Home"]}),C(He,{to:"/Portafolio_PW3/about",className:`mobile-link about-link ${a==="about"?"active":""}`,onClick:()=>{r(!1),l()},children:[u("span",{className:"mobile-link-icon",children:"\u{1F464}"}),"About"]}),C(He,{to:"/Portafolio_PW3/games",className:`mobile-link games-link ${a==="games"?"active":""}`,onClick:()=>{r(!1),l()},children:[u("span",{className:"mobile-link-icon",children:"\u{1F3AE}"}),"Games"]})]})})]})};var km={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Pd=rt.createContext&&rt.createContext(km),ln=globalThis&&globalThis.__assign||function(){return ln=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},ln.apply(this,arguments)},n0=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function Pm(e){return e&&e.map(function(t,n){return rt.createElement(t.tag,ln({key:n},t.attr),Pm(t.child))})}function r0(e){return function(t){return rt.createElement(i0,ln({attr:ln({},e.attr)},t),Pm(e.child))}}function i0(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,a=n0(e,["attr","size","title"]),l=i||n.size||"1em",s;return n.className&&(s=n.className),e.className&&(s=(s?s+" ":"")+e.className),rt.createElement("svg",ln({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:s,style:ln(ln({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&rt.createElement("title",null,o),e.children)};return Pd!==void 0?rt.createElement(Pd.Consumer,null,function(n){return t(n)}):t(km)}function o0(e){return r0({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm143.6 28.9l72.4-75.5V392c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V209.4l72.4 75.5c9.3 9.7 24.8 9.9 34.3.4l10.9-11c9.4-9.4 9.4-24.6 0-33.9L273 107.7c-9.4-9.4-24.6-9.4-33.9 0L106.3 240.4c-9.4 9.4-9.4 24.6 0 33.9l10.9 11c9.6 9.5 25.1 9.3 34.4-.4z"}}]})(e)}var Uu={exports:{}},le={};/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vu=Symbol.for("react.transitional.element"),Gu=Symbol.for("react.portal"),da=Symbol.for("react.fragment"),fa=Symbol.for("react.strict_mode"),pa=Symbol.for("react.profiler"),ma=Symbol.for("react.consumer"),ha=Symbol.for("react.context"),ga=Symbol.for("react.forward_ref"),va=Symbol.for("react.suspense"),ya=Symbol.for("react.suspense_list"),Sa=Symbol.for("react.memo"),Aa=Symbol.for("react.lazy"),a0=Symbol.for("react.view_transition"),l0=Symbol.for("react.client.reference");function ht(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Vu:switch(e=e.type,e){case da:case pa:case fa:case va:case ya:case a0:return e;default:switch(e=e&&e.$$typeof,e){case ha:case ga:case Aa:case Sa:return e;case ma:return e;default:return t}}case Gu:return t}}}le.ContextConsumer=ma;le.ContextProvider=ha;le.Element=Vu;le.ForwardRef=ga;le.Fragment=da;le.Lazy=Aa;le.Memo=Sa;le.Portal=Gu;le.Profiler=pa;le.StrictMode=fa;le.Suspense=va;le.SuspenseList=ya;le.isContextConsumer=function(e){return ht(e)===ma};le.isContextProvider=function(e){return ht(e)===ha};le.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Vu};le.isForwardRef=function(e){return ht(e)===ga};le.isFragment=function(e){return ht(e)===da};le.isLazy=function(e){return ht(e)===Aa};le.isMemo=function(e){return ht(e)===Sa};le.isPortal=function(e){return ht(e)===Gu};le.isProfiler=function(e){return ht(e)===pa};le.isStrictMode=function(e){return ht(e)===fa};le.isSuspense=function(e){return ht(e)===va};le.isSuspenseList=function(e){return ht(e)===ya};le.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===da||e===pa||e===fa||e===va||e===ya||typeof e=="object"&&e!==null&&(e.$$typeof===Aa||e.$$typeof===Sa||e.$$typeof===ha||e.$$typeof===ma||e.$$typeof===ga||e.$$typeof===l0||e.getModuleId!==void 0)};le.typeOf=ht;Uu.exports=le;function s0(e){function t(N,B,L,W,b){for(var J=0,M=0,ye=0,ne=0,ie,Y,De=0,Ke=0,ee,Be=ee=ie=0,re=0,Ie=0,hr=0,Ne=0,Si=L.length,gr=Si-1,gt,Q="",we="",La="",Ba="",Ut;re<Si;){if(Y=L.charCodeAt(re),re===gr&&M+ne+ye+J!==0&&(M!==0&&(Y=M===47?10:47),ne=ye=J=0,Si++,gr++),M+ne+ye+J===0){if(re===gr&&(0<Ie&&(Q=Q.replace(h,"")),0<Q.trim().length)){switch(Y){case 32:case 9:case 59:case 13:case 10:break;default:Q+=L.charAt(re)}Y=59}switch(Y){case 123:for(Q=Q.trim(),ie=Q.charCodeAt(0),ee=1,Ne=++re;re<Si;){switch(Y=L.charCodeAt(re)){case 123:ee++;break;case 125:ee--;break;case 47:switch(Y=L.charCodeAt(re+1)){case 42:case 47:e:{for(Be=re+1;Be<gr;++Be)switch(L.charCodeAt(Be)){case 47:if(Y===42&&L.charCodeAt(Be-1)===42&&re+2!==Be){re=Be+1;break e}break;case 10:if(Y===47){re=Be+1;break e}}re=Be}}break;case 91:Y++;case 40:Y++;case 34:case 39:for(;re++<gr&&L.charCodeAt(re)!==Y;);}if(ee===0)break;re++}switch(ee=L.substring(Ne,re),ie===0&&(ie=(Q=Q.replace(d,"").trim()).charCodeAt(0)),ie){case 64:switch(0<Ie&&(Q=Q.replace(h,"")),Y=Q.charCodeAt(1),Y){case 100:case 109:case 115:case 45:Ie=B;break;default:Ie=Pe}if(ee=t(B,Ie,ee,Y,b+1),Ne=ee.length,0<D&&(Ie=n(Pe,Q,hr),Ut=l(3,ee,Ie,B,j,F,Ne,Y,b,W),Q=Ie.join(""),Ut!==void 0&&(Ne=(ee=Ut.trim()).length)===0&&(Y=0,ee="")),0<Ne)switch(Y){case 115:Q=Q.replace(E,a);case 100:case 109:case 45:ee=Q+"{"+ee+"}";break;case 107:Q=Q.replace(f,"$1 $2"),ee=Q+"{"+ee+"}",ee=Z===1||Z===2&&o("@"+ee,3)?"@-webkit-"+ee+"@"+ee:"@"+ee;break;default:ee=Q+ee,W===112&&(ee=(we+=ee,""))}else ee="";break;default:ee=t(B,n(B,Q,hr),ee,W,b+1)}La+=ee,ee=hr=Ie=Be=ie=0,Q="",Y=L.charCodeAt(++re);break;case 125:case 59:if(Q=(0<Ie?Q.replace(h,""):Q).trim(),1<(Ne=Q.length))switch(Be===0&&(ie=Q.charCodeAt(0),ie===45||96<ie&&123>ie)&&(Ne=(Q=Q.replace(" ",":")).length),0<D&&(Ut=l(1,Q,B,N,j,F,we.length,W,b,W))!==void 0&&(Ne=(Q=Ut.trim()).length)===0&&(Q="\0\0"),ie=Q.charCodeAt(0),Y=Q.charCodeAt(1),ie){case 0:break;case 64:if(Y===105||Y===99){Ba+=Q+L.charAt(re);break}default:Q.charCodeAt(Ne-1)!==58&&(we+=i(Q,ie,Y,Q.charCodeAt(2)))}hr=Ie=Be=ie=0,Q="",Y=L.charCodeAt(++re)}}switch(Y){case 13:case 10:M===47?M=0:1+ie===0&&W!==107&&0<Q.length&&(Ie=1,Q+="\0"),0<D*V&&l(0,Q,B,N,j,F,we.length,W,b,W),F=1,j++;break;case 59:case 125:if(M+ne+ye+J===0){F++;break}default:switch(F++,gt=L.charAt(re),Y){case 9:case 32:if(ne+J+M===0)switch(De){case 44:case 58:case 9:case 32:gt="";break;default:Y!==32&&(gt=" ")}break;case 0:gt="\\0";break;case 12:gt="\\f";break;case 11:gt="\\v";break;case 38:ne+M+J===0&&(Ie=hr=1,gt="\f"+gt);break;case 108:if(ne+M+J+Ae===0&&0<Be)switch(re-Be){case 2:De===112&&L.charCodeAt(re-3)===58&&(Ae=De);case 8:Ke===111&&(Ae=Ke)}break;case 58:ne+M+J===0&&(Be=re);break;case 44:M+ye+ne+J===0&&(Ie=1,gt+="\r");break;case 34:case 39:M===0&&(ne=ne===Y?0:ne===0?Y:ne);break;case 91:ne+M+ye===0&&J++;break;case 93:ne+M+ye===0&&J--;break;case 41:ne+M+J===0&&ye--;break;case 40:if(ne+M+J===0){if(ie===0)switch(2*De+3*Ke){case 533:break;default:ie=1}ye++}break;case 64:M+ye+ne+J+Be+ee===0&&(ee=1);break;case 42:case 47:if(!(0<ne+J+ye))switch(M){case 0:switch(2*Y+3*L.charCodeAt(re+1)){case 235:M=47;break;case 220:Ne=re,M=42}break;case 42:Y===47&&De===42&&Ne+2!==re&&(L.charCodeAt(Ne+2)===33&&(we+=L.substring(Ne,re+1)),gt="",M=0)}}M===0&&(Q+=gt)}Ke=De,De=Y,re++}if(Ne=we.length,0<Ne){if(Ie=B,0<D&&(Ut=l(2,we,Ie,N,j,F,Ne,W,b,W),Ut!==void 0&&(we=Ut).length===0))return Ba+we+La;if(we=Ie.join(",")+"{"+we+"}",Z*Ae!==0){switch(Z!==2||o(we,2)||(Ae=0),Ae){case 111:we=we.replace(A,":-moz-$1")+we;break;case 112:we=we.replace(g,"::-webkit-input-$1")+we.replace(g,"::-moz-$1")+we.replace(g,":-ms-input-$1")+we}Ae=0}}return Ba+we+La}function n(N,B,L){var W=B.trim().split(S);B=W;var b=W.length,J=N.length;switch(J){case 0:case 1:var M=0;for(N=J===0?"":N[0]+" ";M<b;++M)B[M]=r(N,B[M],L).trim();break;default:var ye=M=0;for(B=[];M<b;++M)for(var ne=0;ne<J;++ne)B[ye++]=r(N[ne]+" ",W[M],L).trim()}return B}function r(N,B,L){var W=B.charCodeAt(0);switch(33>W&&(W=(B=B.trim()).charCodeAt(0)),W){case 38:return B.replace(m,"$1"+N.trim());case 58:return N.trim()+B.replace(m,"$1"+N.trim());default:if(0<1*L&&0<B.indexOf("\f"))return B.replace(m,(N.charCodeAt(0)===58?"":"$1")+N.trim())}return N+B}function i(N,B,L,W){var b=N+";",J=2*B+3*L+4*W;if(J===944){N=b.indexOf(":",9)+1;var M=b.substring(N,b.length-1).trim();return M=b.substring(0,N).trim()+M+";",Z===1||Z===2&&o(M,1)?"-webkit-"+M+M:M}if(Z===0||Z===2&&!o(b,1))return b;switch(J){case 1015:return b.charCodeAt(10)===97?"-webkit-"+b+b:b;case 951:return b.charCodeAt(3)===116?"-webkit-"+b+b:b;case 963:return b.charCodeAt(5)===110?"-webkit-"+b+b:b;case 1009:if(b.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+b+b;case 978:return"-webkit-"+b+"-moz-"+b+b;case 1019:case 983:return"-webkit-"+b+"-moz-"+b+"-ms-"+b+b;case 883:if(b.charCodeAt(8)===45)return"-webkit-"+b+b;if(0<b.indexOf("image-set(",11))return b.replace(U,"$1-webkit-$2")+b;break;case 932:if(b.charCodeAt(4)===45)switch(b.charCodeAt(5)){case 103:return"-webkit-box-"+b.replace("-grow","")+"-webkit-"+b+"-ms-"+b.replace("grow","positive")+b;case 115:return"-webkit-"+b+"-ms-"+b.replace("shrink","negative")+b;case 98:return"-webkit-"+b+"-ms-"+b.replace("basis","preferred-size")+b}return"-webkit-"+b+"-ms-"+b+b;case 964:return"-webkit-"+b+"-ms-flex-"+b+b;case 1023:if(b.charCodeAt(8)!==99)break;return M=b.substring(b.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+M+"-webkit-"+b+"-ms-flex-pack"+M+b;case 1005:return y.test(b)?b.replace(w,":-webkit-")+b.replace(w,":-moz-")+b:b;case 1e3:switch(M=b.substring(13).trim(),B=M.indexOf("-")+1,M.charCodeAt(0)+M.charCodeAt(B)){case 226:M=b.replace(k,"tb");break;case 232:M=b.replace(k,"tb-rl");break;case 220:M=b.replace(k,"lr");break;default:return b}return"-webkit-"+b+"-ms-"+M+b;case 1017:if(b.indexOf("sticky",9)===-1)break;case 975:switch(B=(b=N).length-10,M=(b.charCodeAt(B)===33?b.substring(0,B):b).substring(N.indexOf(":",7)+1).trim(),J=M.charCodeAt(0)+(M.charCodeAt(7)|0)){case 203:if(111>M.charCodeAt(8))break;case 115:b=b.replace(M,"-webkit-"+M)+";"+b;break;case 207:case 102:b=b.replace(M,"-webkit-"+(102<J?"inline-":"")+"box")+";"+b.replace(M,"-webkit-"+M)+";"+b.replace(M,"-ms-"+M+"box")+";"+b}return b+";";case 938:if(b.charCodeAt(5)===45)switch(b.charCodeAt(6)){case 105:return M=b.replace("-items",""),"-webkit-"+b+"-webkit-box-"+M+"-ms-flex-"+M+b;case 115:return"-webkit-"+b+"-ms-flex-item-"+b.replace(P,"")+b;default:return"-webkit-"+b+"-ms-flex-line-pack"+b.replace("align-content","").replace(P,"")+b}break;case 973:case 989:if(b.charCodeAt(3)!==45||b.charCodeAt(4)===122)break;case 931:case 953:if(I.test(N)===!0)return(M=N.substring(N.indexOf(":")+1)).charCodeAt(0)===115?i(N.replace("stretch","fill-available"),B,L,W).replace(":fill-available",":stretch"):b.replace(M,"-webkit-"+M)+b.replace(M,"-moz-"+M.replace("fill-",""))+b;break;case 962:if(b="-webkit-"+b+(b.charCodeAt(5)===102?"-ms-"+b:"")+b,L+W===211&&b.charCodeAt(13)===105&&0<b.indexOf("transform",10))return b.substring(0,b.indexOf(";",27)+1).replace(v,"$1-webkit-$2")+b}return b}function o(N,B){var L=N.indexOf(B===1?":":"{"),W=N.substring(0,B!==3?L:10);return L=N.substring(L+1,N.length-1),G(B!==2?W:W.replace(x,"$1"),L,B)}function a(N,B){var L=i(B,B.charCodeAt(0),B.charCodeAt(1),B.charCodeAt(2));return L!==B+";"?L.replace(_," or ($1)").substring(4):"("+B+")"}function l(N,B,L,W,b,J,M,ye,ne,ie){for(var Y=0,De=B,Ke;Y<D;++Y)switch(Ke=ve[Y].call(p,N,De,L,W,b,J,M,ye,ne,ie)){case void 0:case!1:case!0:case null:break;default:De=Ke}if(De!==B)return De}function s(N){switch(N){case void 0:case null:D=ve.length=0;break;default:if(typeof N=="function")ve[D++]=N;else if(typeof N=="object")for(var B=0,L=N.length;B<L;++B)s(N[B]);else V=!!N|0}return s}function c(N){return N=N.prefix,N!==void 0&&(G=null,N?typeof N!="function"?Z=1:(Z=2,G=N):Z=0),c}function p(N,B){var L=N;if(33>L.charCodeAt(0)&&(L=L.trim()),te=L,L=[te],0<D){var W=l(-1,B,L,L,j,F,0,0,0,0);W!==void 0&&typeof W=="string"&&(B=W)}var b=t(Pe,L,B,0,0);return 0<D&&(W=l(-2,b,L,L,j,F,b.length,0,0,0),W!==void 0&&(b=W)),te="",Ae=0,F=j=1,b}var d=/^\0+/g,h=/[\0\r\f]/g,w=/: */g,y=/zoo|gra/,v=/([,: ])(transform)/g,S=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,f=/@(k\w+)\s*(\S*)\s*/,g=/::(place)/g,A=/:(read-only)/g,k=/[svh]\w+-[tblr]{2}/,E=/\(\s*(.*)\s*\)/g,_=/([\s\S]*?);/g,P=/-self|flex-/g,x=/[^]*?(:[rp][el]a[\w-]+)[^]*/,I=/stretch|:\s*\w+\-(?:conte|avail)/,U=/([^-])(image-set\()/,F=1,j=1,Ae=0,Z=1,Pe=[],ve=[],D=0,G=null,V=0,te="";return p.use=s,p.set=c,e!==void 0&&c(e),p}var u0={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function c0(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var d0=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Ed=c0(function(e){return d0.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Em={exports:{}},ae={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _e=typeof Symbol=="function"&&Symbol.for,Hu=_e?Symbol.for("react.element"):60103,Wu=_e?Symbol.for("react.portal"):60106,wa=_e?Symbol.for("react.fragment"):60107,Ca=_e?Symbol.for("react.strict_mode"):60108,ba=_e?Symbol.for("react.profiler"):60114,ka=_e?Symbol.for("react.provider"):60109,Pa=_e?Symbol.for("react.context"):60110,Qu=_e?Symbol.for("react.async_mode"):60111,Ea=_e?Symbol.for("react.concurrent_mode"):60111,Oa=_e?Symbol.for("react.forward_ref"):60112,Ta=_e?Symbol.for("react.suspense"):60113,f0=_e?Symbol.for("react.suspense_list"):60120,xa=_e?Symbol.for("react.memo"):60115,_a=_e?Symbol.for("react.lazy"):60116,p0=_e?Symbol.for("react.block"):60121,m0=_e?Symbol.for("react.fundamental"):60117,h0=_e?Symbol.for("react.responder"):60118,g0=_e?Symbol.for("react.scope"):60119;function st(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Hu:switch(e=e.type,e){case Qu:case Ea:case wa:case ba:case Ca:case Ta:return e;default:switch(e=e&&e.$$typeof,e){case Pa:case Oa:case _a:case xa:case ka:return e;default:return t}}case Wu:return t}}}function Om(e){return st(e)===Ea}ae.AsyncMode=Qu;ae.ConcurrentMode=Ea;ae.ContextConsumer=Pa;ae.ContextProvider=ka;ae.Element=Hu;ae.ForwardRef=Oa;ae.Fragment=wa;ae.Lazy=_a;ae.Memo=xa;ae.Portal=Wu;ae.Profiler=ba;ae.StrictMode=Ca;ae.Suspense=Ta;ae.isAsyncMode=function(e){return Om(e)||st(e)===Qu};ae.isConcurrentMode=Om;ae.isContextConsumer=function(e){return st(e)===Pa};ae.isContextProvider=function(e){return st(e)===ka};ae.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Hu};ae.isForwardRef=function(e){return st(e)===Oa};ae.isFragment=function(e){return st(e)===wa};ae.isLazy=function(e){return st(e)===_a};ae.isMemo=function(e){return st(e)===xa};ae.isPortal=function(e){return st(e)===Wu};ae.isProfiler=function(e){return st(e)===ba};ae.isStrictMode=function(e){return st(e)===Ca};ae.isSuspense=function(e){return st(e)===Ta};ae.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===wa||e===Ea||e===ba||e===Ca||e===Ta||e===f0||typeof e=="object"&&e!==null&&(e.$$typeof===_a||e.$$typeof===xa||e.$$typeof===ka||e.$$typeof===Pa||e.$$typeof===Oa||e.$$typeof===m0||e.$$typeof===h0||e.$$typeof===g0||e.$$typeof===p0)};ae.typeOf=st;Em.exports=ae;var Yu=Em.exports,v0={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},y0={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},S0={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Tm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ku={};Ku[Yu.ForwardRef]=S0;Ku[Yu.Memo]=Tm;function Od(e){return Yu.isMemo(e)?Tm:Ku[e.$$typeof]||v0}var A0=Object.defineProperty,w0=Object.getOwnPropertyNames,Td=Object.getOwnPropertySymbols,C0=Object.getOwnPropertyDescriptor,b0=Object.getPrototypeOf,xd=Object.prototype;function xm(e,t,n){if(typeof t!="string"){if(xd){var r=b0(t);r&&r!==xd&&xm(e,r,n)}var i=w0(t);Td&&(i=i.concat(Td(t)));for(var o=Od(e),a=Od(t),l=0;l<i.length;++l){var s=i[l];if(!y0[s]&&!(n&&n[s])&&!(a&&a[s])&&!(o&&o[s])){var c=C0(t,s);try{A0(e,s,c)}catch{}}}}return e}var k0=xm;function Mt(){return(Mt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var _d=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},Ss=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Uu.exports.typeOf(e)},No=Object.freeze([]),sn=Object.freeze({});function ai(e){return typeof e=="function"}function Dd(e){return e.displayName||e.name||"Component"}function qu(e){return e&&typeof e.styledComponentId=="string"}var lr=typeof process!="undefined"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Xu=typeof window!="undefined"&&"HTMLElement"in window,P0=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1));function gi(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var E0=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,a=o;n>=a;)(a<<=1)<0&&gi(16,""+n);this.groupSizes=new Uint32Array(a),this.groupSizes.set(i),this.length=a;for(var l=o;l<a;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(n+1),c=0,p=r.length;c<p;c++)this.tag.insertRule(s,r[c])&&(this.groupSizes[n]++,s++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var a=i;a<o;a++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),a=o+i,l=o;l<a;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),to=new Map,Mo=new Map,Fr=1,Fi=function(e){if(to.has(e))return to.get(e);for(;Mo.has(Fr);)Fr++;var t=Fr++;return to.set(e,t),Mo.set(t,e),t},O0=function(e){return Mo.get(e)},T0=function(e,t){t>=Fr&&(Fr=t+1),to.set(e,t),Mo.set(t,e)},x0="style["+lr+'][data-styled-version="5.3.11"]',_0=new RegExp("^"+lr+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),D0=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},I0=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var a=n[i].trim();if(a){var l=a.match(_0);if(l){var s=0|parseInt(l[1],10),c=l[2];s!==0&&(T0(c,s),D0(e,c,l[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(a)}}},N0=function(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null},_m=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){for(var s=l.childNodes,c=s.length;c>=0;c--){var p=s[c];if(p&&p.nodeType===1&&p.hasAttribute(lr))return p}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(lr,"active"),r.setAttribute("data-styled-version","5.3.11");var a=N0();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},M0=function(){function e(n){var r=this.element=_m(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,a=0,l=o.length;a<l;a++){var s=o[a];if(s.ownerNode===i)return s}gi(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),R0=function(){function e(n){var r=this.element=_m(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),L0=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Id=Xu,B0={isServer:!Xu,useCSSOMInjection:!P0},Dm=function(){function e(n,r,i){n===void 0&&(n=sn),r===void 0&&(r={}),this.options=Mt({},B0,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Xu&&Id&&(Id=!1,function(o){for(var a=document.querySelectorAll(x0),l=0,s=a.length;l<s;l++){var c=a[l];c&&c.getAttribute(lr)!=="active"&&(I0(o,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(n){return Fi(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Mt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,a=r.target,n=i?new L0(a):o?new M0(a):new R0(a),new E0(n)));var n,r,i,o,a},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Fi(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Fi(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Fi(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",a=0;a<i;a++){var l=O0(a);if(l!==void 0){var s=n.names.get(l),c=r.getGroup(a);if(s&&c&&s.size){var p=lr+".g"+a+'[id="'+l+'"]',d="";s!==void 0&&s.forEach(function(h){h.length>0&&(d+=h+",")}),o+=""+c+p+'{content:"'+d+`"}/*!sc*/
`}}}return o}(this)},e}(),z0=/(a)(d)/gi,Nd=function(e){return String.fromCharCode(e+(e>25?39:97))};function As(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Nd(t%52)+n;return(Nd(t%52)+n).replace(z0,"$1-$2")}var Qn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Im=function(e){return Qn(5381,e)};function F0(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ai(n)&&!qu(n))return!1}return!0}var j0=Im("5.3.11"),U0=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&F0(t),this.componentId=n,this.baseHash=Qn(j0,n),this.baseStyle=r,Dm.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var a=sr(this.rules,t,n,r).join(""),l=As(Qn(this.baseHash,a)>>>0);if(!n.hasNameForId(i,l)){var s=r(a,"."+l,void 0,i);n.insertRules(i,l,s)}o.push(l),this.staticRulesId=l}else{for(var c=this.rules.length,p=Qn(this.baseHash,r.hash),d="",h=0;h<c;h++){var w=this.rules[h];if(typeof w=="string")d+=w;else if(w){var y=sr(w,t,n,r),v=Array.isArray(y)?y.join(""):y;p=Qn(p,v+h),d+=v}}if(d){var S=As(p>>>0);if(!n.hasNameForId(i,S)){var m=r(d,"."+S,void 0,i);n.insertRules(i,S,m)}o.push(S)}}return o.join(" ")},e}(),V0=/^\s*\/\/.*$/gm,G0=[":","[",".","#"];function H0(e){var t,n,r,i,o=e===void 0?sn:e,a=o.options,l=a===void 0?sn:a,s=o.plugins,c=s===void 0?No:s,p=new s0(l),d=[],h=function(v){function S(m){if(m)try{v(m+"}")}catch{}}return function(m,f,g,A,k,E,_,P,x,I){switch(m){case 1:if(x===0&&f.charCodeAt(0)===64)return v(f+";"),"";break;case 2:if(P===0)return f+"/*|*/";break;case 3:switch(P){case 102:case 112:return v(g[0]+f),"";default:return f+(I===0?"/*|*/":"")}case-2:f.split("/*|*/}").forEach(S)}}}(function(v){d.push(v)}),w=function(v,S,m){return S===0&&G0.indexOf(m[n.length])!==-1||m.match(i)?v:"."+t};function y(v,S,m,f){f===void 0&&(f="&");var g=v.replace(V0,""),A=S&&m?m+" "+S+" { "+g+" }":g;return t=f,n=S,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),p(m||!S?"":S,A)}return p.use([].concat(c,[function(v,S,m){v===2&&m.length&&m[0].lastIndexOf(n)>0&&(m[0]=m[0].replace(r,w))},h,function(v){if(v===-2){var S=d;return d=[],S}}])),y.hash=c.length?c.reduce(function(v,S){return S.name||gi(15),Qn(v,S.name)},5381).toString():"",y}var Nm=rt.createContext();Nm.Consumer;var Mm=rt.createContext(),W0=(Mm.Consumer,new Dm),ws=H0();function Q0(){return O.exports.useContext(Nm)||W0}function Y0(){return O.exports.useContext(Mm)||ws}var K0=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=ws);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.toString=function(){return gi(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=ws),this.name+t.hash},e}(),q0=/([A-Z])/,X0=/([A-Z])/g,J0=/^ms-/,Z0=function(e){return"-"+e.toLowerCase()};function Md(e){return q0.test(e)?e.replace(X0,Z0).replace(J0,"-ms-"):e}var Rd=function(e){return e==null||e===!1||e===""};function sr(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],a=0,l=e.length;a<l;a+=1)(i=sr(e[a],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(Rd(e))return"";if(qu(e))return"."+e.styledComponentId;if(ai(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!t)return e;var s=e(t);return sr(s,t,n,r)}var c;return e instanceof K0?n?(e.inject(n,r),e.getName(r)):e:Ss(e)?function p(d,h){var w,y,v=[];for(var S in d)d.hasOwnProperty(S)&&!Rd(d[S])&&(Array.isArray(d[S])&&d[S].isCss||ai(d[S])?v.push(Md(S)+":",d[S],";"):Ss(d[S])?v.push.apply(v,p(d[S],S)):v.push(Md(S)+": "+(w=S,(y=d[S])==null||typeof y=="boolean"||y===""?"":typeof y!="number"||y===0||w in u0||w.startsWith("--")?String(y).trim():y+"px")+";"));return h?[h+" {"].concat(v,["}"]):v}(e):e.toString()}var Ld=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function $0(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return ai(e)||Ss(e)?Ld(sr(_d(No,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Ld(sr(_d(e,n)))}var eS=function(e,t,n){return n===void 0&&(n=sn),e.theme!==n.theme&&e.theme||t||n.theme},tS=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,nS=/(^-|-$)/g;function dl(e){return e.replace(tS,"-").replace(nS,"")}var rS=function(e){return As(Im(e)>>>0)};function ji(e){return typeof e=="string"&&!0}var Cs=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},iS=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function oS(e,t,n){var r=e[n];Cs(t)&&Cs(r)?Rm(r,t):e[n]=t}function Rm(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var a=o[i];if(Cs(a))for(var l in a)iS(l)&&oS(e,a[l],l)}return e}var Lm=rt.createContext();Lm.Consumer;var fl={};function Bm(e,t,n){var r=qu(e),i=!ji(e),o=t.attrs,a=o===void 0?No:o,l=t.componentId,s=l===void 0?function(f,g){var A=typeof f!="string"?"sc":dl(f);fl[A]=(fl[A]||0)+1;var k=A+"-"+rS("5.3.11"+A+fl[A]);return g?g+"-"+k:k}(t.displayName,t.parentComponentId):l,c=t.displayName,p=c===void 0?function(f){return ji(f)?"styled."+f:"Styled("+Dd(f)+")"}(e):c,d=t.displayName&&t.componentId?dl(t.displayName)+"-"+t.componentId:t.componentId||s,h=r&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,w=t.shouldForwardProp;r&&e.shouldForwardProp&&(w=t.shouldForwardProp?function(f,g,A){return e.shouldForwardProp(f,g,A)&&t.shouldForwardProp(f,g,A)}:e.shouldForwardProp);var y,v=new U0(n,d,r?e.componentStyle:void 0),S=v.isStatic&&a.length===0,m=function(f,g){return function(A,k,E,_){var P=A.attrs,x=A.componentStyle,I=A.defaultProps,U=A.foldedComponentIds,F=A.shouldForwardProp,j=A.styledComponentId,Ae=A.target,Z=function(W,b,J){W===void 0&&(W=sn);var M=Mt({},b,{theme:W}),ye={};return J.forEach(function(ne){var ie,Y,De,Ke=ne;for(ie in ai(Ke)&&(Ke=Ke(M)),Ke)M[ie]=ye[ie]=ie==="className"?(Y=ye[ie],De=Ke[ie],Y&&De?Y+" "+De:Y||De):Ke[ie]}),[M,ye]}(eS(k,O.exports.useContext(Lm),I)||sn,k,P),Pe=Z[0],ve=Z[1],D=function(W,b,J,M){var ye=Q0(),ne=Y0(),ie=b?W.generateAndInjectStyles(sn,ye,ne):W.generateAndInjectStyles(J,ye,ne);return ie}(x,_,Pe),G=E,V=ve.$as||k.$as||ve.as||k.as||Ae,te=ji(V),N=ve!==k?Mt({},k,{},ve):k,B={};for(var L in N)L[0]!=="$"&&L!=="as"&&(L==="forwardedAs"?B.as=N[L]:(F?F(L,Ed,V):!te||Ed(L))&&(B[L]=N[L]));return k.style&&ve.style!==k.style&&(B.style=Mt({},k.style,{},ve.style)),B.className=Array.prototype.concat(U,j,D!==j?D:null,k.className,ve.className).filter(Boolean).join(" "),B.ref=G,O.exports.createElement(V,B)}(y,f,g,S)};return m.displayName=p,(y=rt.forwardRef(m)).attrs=h,y.componentStyle=v,y.displayName=p,y.shouldForwardProp=w,y.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):No,y.styledComponentId=d,y.target=r?e.target:e,y.withComponent=function(f){var g=t.componentId,A=function(E,_){if(E==null)return{};var P,x,I={},U=Object.keys(E);for(x=0;x<U.length;x++)P=U[x],_.indexOf(P)>=0||(I[P]=E[P]);return I}(t,["componentId"]),k=g&&g+"-"+(ji(f)?f:dl(Dd(f)));return Bm(f,Mt({},A,{attrs:h,componentId:k}),n)},Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(f){this._foldedDefaultProps=r?Rm({},e.defaultProps,f):f}}),Object.defineProperty(y,"toString",{value:function(){return"."+y.styledComponentId}}),i&&k0(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),y}var bs=function(e){return function t(n,r,i){if(i===void 0&&(i=sn),!Uu.exports.isValidElementType(r))return gi(1,String(r));var o=function(){return n(r,i,$0.apply(void 0,arguments))};return o.withConfig=function(a){return t(n,r,Mt({},i,{},a))},o.attrs=function(a){return t(n,r,Mt({},i,{attrs:Array.prototype.concat(i.attrs,a).filter(Boolean)}))},o}(Bm,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){bs[e]=bs(e)});var Ju=bs;Ju.h1`
  text-align: center;
  color: green;
`;Ju.div`
  overflowy: scroll;
  height: 2500px;
`;const aS=Ju.div`
  position: fixed;
  width: 100%;
  left: 50%;
  bottom: 40px;
  height: 20px;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
  color: red;
`,Ui=()=>{const[e,t]=O.exports.useState(!1),n=()=>{const i=document.documentElement.scrollTop;i>300?t(!0):i<=300&&t(!1)},r=()=>{window.scrollTo({top:0,behavior:"smooth"})};return window.addEventListener("scroll",n),u(aS,{children:u(o0,{onClick:r,style:{display:e?"inline":"none"}})})};var zm={},Fm={},Da={},jm={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0},n=t;e.default=n})(jm);var lS="Expected a function",Bd=0/0,sS="[object Symbol]",uS=/^\s+|\s+$/g,cS=/^[-+]0x[0-9a-f]+$/i,dS=/^0b[01]+$/i,fS=/^0o[0-7]+$/i,pS=parseInt,mS=typeof Ai=="object"&&Ai&&Ai.Object===Object&&Ai,hS=typeof self=="object"&&self&&self.Object===Object&&self,gS=mS||hS||Function("return this")(),vS=Object.prototype,yS=vS.toString,SS=Math.max,AS=Math.min,pl=function(){return gS.Date.now()};function wS(e,t,n){var r,i,o,a,l,s,c=0,p=!1,d=!1,h=!0;if(typeof e!="function")throw new TypeError(lS);t=zd(t)||0,ks(n)&&(p=!!n.leading,d="maxWait"in n,o=d?SS(zd(n.maxWait)||0,t):o,h="trailing"in n?!!n.trailing:h);function w(E){var _=r,P=i;return r=i=void 0,c=E,a=e.apply(P,_),a}function y(E){return c=E,l=setTimeout(m,t),p?w(E):a}function v(E){var _=E-s,P=E-c,x=t-_;return d?AS(x,o-P):x}function S(E){var _=E-s,P=E-c;return s===void 0||_>=t||_<0||d&&P>=o}function m(){var E=pl();if(S(E))return f(E);l=setTimeout(m,v(E))}function f(E){return l=void 0,h&&r?w(E):(r=i=void 0,a)}function g(){l!==void 0&&clearTimeout(l),c=0,r=s=i=l=void 0}function A(){return l===void 0?a:f(pl())}function k(){var E=pl(),_=S(E);if(r=arguments,i=this,s=E,_){if(l===void 0)return y(s);if(d)return l=setTimeout(m,t),w(s)}return l===void 0&&(l=setTimeout(m,t)),a}return k.cancel=g,k.flush=A,k}function ks(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function CS(e){return!!e&&typeof e=="object"}function bS(e){return typeof e=="symbol"||CS(e)&&yS.call(e)==sS}function zd(e){if(typeof e=="number")return e;if(bS(e))return Bd;if(ks(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=ks(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(uS,"");var n=dS.test(e);return n||fS.test(e)?pS(e.slice(2),n?2:8):cS.test(e)?Bd:+e}var kS=wS,vi={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var o="",a=0;a<arguments.length;a++){var l=arguments[a];l&&(o=i(o,r(l)))}return o}function r(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return n.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var a="";for(var l in o)t.call(o,l)&&o[l]&&(a=i(a,l));return a}function i(o,a){return a?o?o+" "+a:o+a:o}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(vi);var R={};Object.defineProperty(R,"__esModule",{value:!0});R.checkSpecKeys=R.checkNavigable=R.changeSlide=R.canUseDOM=R.canGoNext=void 0;R.clamp=Um;R.swipeStart=R.swipeMove=R.swipeEnd=R.slidesOnRight=R.slidesOnLeft=R.slideHandler=R.siblingDirection=R.safePreventDefault=R.lazyStartIndex=R.lazySlidesOnRight=R.lazySlidesOnLeft=R.lazyEndIndex=R.keyHandler=R.initializedState=R.getWidth=R.getTrackLeft=R.getTrackCSS=R.getTrackAnimateCSS=R.getTotalSlides=R.getSwipeDirection=R.getSlideCount=R.getRequiredLazySlides=R.getPreClones=R.getPostClones=R.getOnDemandLazySlides=R.getNavigableIndexes=R.getHeight=R.extractObject=void 0;var PS=ES(O.exports);function ES(e){return e&&e.__esModule?e:{default:e}}function Fd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function de(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Fd(Object(n),!0).forEach(function(r){OS(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Fd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function OS(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Um(e,t,n){return Math.max(t,Math.min(e,n))}var bn=function(t){var n=["onTouchStart","onTouchMove","onWheel"];n.includes(t._reactName)||t.preventDefault()};R.safePreventDefault=bn;var Zu=function(t){for(var n=[],r=$u(t),i=ec(t),o=r;o<i;o++)t.lazyLoadedList.indexOf(o)<0&&n.push(o);return n};R.getOnDemandLazySlides=Zu;var TS=function(t){for(var n=[],r=$u(t),i=ec(t),o=r;o<i;o++)n.push(o);return n};R.getRequiredLazySlides=TS;var $u=function(t){return t.currentSlide-Vm(t)};R.lazyStartIndex=$u;var ec=function(t){return t.currentSlide+Gm(t)};R.lazyEndIndex=ec;var Vm=function(t){return t.centerMode?Math.floor(t.slidesToShow/2)+(parseInt(t.centerPadding)>0?1:0):0};R.lazySlidesOnLeft=Vm;var Gm=function(t){return t.centerMode?Math.floor((t.slidesToShow-1)/2)+1+(parseInt(t.centerPadding)>0?1:0):t.slidesToShow};R.lazySlidesOnRight=Gm;var Ro=function(t){return t&&t.offsetWidth||0};R.getWidth=Ro;var tc=function(t){return t&&t.offsetHeight||0};R.getHeight=tc;var nc=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r,i,o,a;return r=t.startX-t.curX,i=t.startY-t.curY,o=Math.atan2(i,r),a=Math.round(o*180/Math.PI),a<0&&(a=360-Math.abs(a)),a<=45&&a>=0||a<=360&&a>=315?"left":a>=135&&a<=225?"right":n===!0?a>=35&&a<=135?"up":"down":"vertical"};R.getSwipeDirection=nc;var rc=function(t){var n=!0;return t.infinite||(t.centerMode&&t.currentSlide>=t.slideCount-1||t.slideCount<=t.slidesToShow||t.currentSlide>=t.slideCount-t.slidesToShow)&&(n=!1),n};R.canGoNext=rc;var xS=function(t,n){var r={};return n.forEach(function(i){return r[i]=t[i]}),r};R.extractObject=xS;var _S=function(t){var n=PS.default.Children.count(t.children),r=t.listRef,i=Math.ceil(Ro(r)),o=t.trackRef&&t.trackRef.node,a=Math.ceil(Ro(o)),l;if(t.vertical)l=i;else{var s=t.centerMode&&parseInt(t.centerPadding)*2;typeof t.centerPadding=="string"&&t.centerPadding.slice(-1)==="%"&&(s*=i/100),l=Math.ceil((i-s)/t.slidesToShow)}var c=r&&tc(r.querySelector('[data-index="0"]')),p=c*t.slidesToShow,d=t.currentSlide===void 0?t.initialSlide:t.currentSlide;t.rtl&&t.currentSlide===void 0&&(d=n-1-t.initialSlide);var h=t.lazyLoadedList||[],w=Zu(de(de({},t),{},{currentSlide:d,lazyLoadedList:h}));h=h.concat(w);var y={slideCount:n,slideWidth:l,listWidth:i,trackWidth:a,currentSlide:d,slideHeight:c,listHeight:p,lazyLoadedList:h};return t.autoplaying===null&&t.autoplay&&(y.autoplaying="playing"),y};R.initializedState=_S;var DS=function(t){var n=t.waitForAnimate,r=t.animating,i=t.fade,o=t.infinite,a=t.index,l=t.slideCount,s=t.lazyLoad,c=t.currentSlide,p=t.centerMode,d=t.slidesToScroll,h=t.slidesToShow,w=t.useCSS,y=t.lazyLoadedList;if(n&&r)return{};var v=a,S,m,f,g={},A={},k=o?a:Um(a,0,l-1);if(i){if(!o&&(a<0||a>=l))return{};a<0?v=a+l:a>=l&&(v=a-l),s&&y.indexOf(v)<0&&(y=y.concat(v)),g={animating:!0,currentSlide:v,lazyLoadedList:y,targetSlide:v},A={animating:!1,targetSlide:v}}else S=v,v<0?(S=v+l,o?l%d!==0&&(S=l-l%d):S=0):!rc(t)&&v>c?v=S=c:p&&v>=l?(v=o?l:l-1,S=o?0:l-1):v>=l&&(S=v-l,o?l%d!==0&&(S=0):S=l-h),!o&&v+h>=l&&(S=l-h),m=si(de(de({},t),{},{slideIndex:v})),f=si(de(de({},t),{},{slideIndex:S})),o||(m===f&&(v=S),m=f),s&&(y=y.concat(Zu(de(de({},t),{},{currentSlide:v})))),w?(g={animating:!0,currentSlide:S,trackStyle:ic(de(de({},t),{},{left:m})),lazyLoadedList:y,targetSlide:k},A={animating:!1,currentSlide:S,trackStyle:li(de(de({},t),{},{left:f})),swipeLeft:null,targetSlide:k}):g={currentSlide:S,trackStyle:li(de(de({},t),{},{left:f})),lazyLoadedList:y,targetSlide:k};return{state:g,nextState:A}};R.slideHandler=DS;var IS=function(t,n){var r,i,o,a,l,s=t.slidesToScroll,c=t.slidesToShow,p=t.slideCount,d=t.currentSlide,h=t.targetSlide,w=t.lazyLoad,y=t.infinite;if(a=p%s!==0,r=a?0:(p-d)%s,n.message==="previous")o=r===0?s:c-r,l=d-o,w&&!y&&(i=d-o,l=i===-1?p-1:i),y||(l=h-s);else if(n.message==="next")o=r===0?s:r,l=d+o,w&&!y&&(l=(d+s)%p+r),y||(l=h+s);else if(n.message==="dots")l=n.index*n.slidesToScroll;else if(n.message==="children"){if(l=n.index,y){var v=Ym(de(de({},t),{},{targetSlide:l}));l>n.currentSlide&&v==="left"?l=l-p:l<n.currentSlide&&v==="right"&&(l=l+p)}}else n.message==="index"&&(l=Number(n.index));return l};R.changeSlide=IS;var NS=function(t,n,r){return t.target.tagName.match("TEXTAREA|INPUT|SELECT")||!n?"":t.keyCode===37?r?"next":"previous":t.keyCode===39?r?"previous":"next":""};R.keyHandler=NS;var MS=function(t,n,r){return t.target.tagName==="IMG"&&bn(t),!n||!r&&t.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:t.touches?t.touches[0].pageX:t.clientX,startY:t.touches?t.touches[0].pageY:t.clientY,curX:t.touches?t.touches[0].pageX:t.clientX,curY:t.touches?t.touches[0].pageY:t.clientY}}};R.swipeStart=MS;var RS=function(t,n){var r=n.scrolling,i=n.animating,o=n.vertical,a=n.swipeToSlide,l=n.verticalSwiping,s=n.rtl,c=n.currentSlide,p=n.edgeFriction,d=n.edgeDragged,h=n.onEdge,w=n.swiped,y=n.swiping,v=n.slideCount,S=n.slidesToScroll,m=n.infinite,f=n.touchObject,g=n.swipeEvent,A=n.listHeight,k=n.listWidth;if(!r){if(i)return bn(t);o&&a&&l&&bn(t);var E,_={},P=si(n);f.curX=t.touches?t.touches[0].pageX:t.clientX,f.curY=t.touches?t.touches[0].pageY:t.clientY,f.swipeLength=Math.round(Math.sqrt(Math.pow(f.curX-f.startX,2)));var x=Math.round(Math.sqrt(Math.pow(f.curY-f.startY,2)));if(!l&&!y&&x>10)return{scrolling:!0};l&&(f.swipeLength=x);var I=(s?-1:1)*(f.curX>f.startX?1:-1);l&&(I=f.curY>f.startY?1:-1);var U=Math.ceil(v/S),F=nc(n.touchObject,l),j=f.swipeLength;return m||(c===0&&(F==="right"||F==="down")||c+1>=U&&(F==="left"||F==="up")||!rc(n)&&(F==="left"||F==="up"))&&(j=f.swipeLength*p,d===!1&&h&&(h(F),_.edgeDragged=!0)),!w&&g&&(g(F),_.swiped=!0),o?E=P+j*(A/k)*I:s?E=P-j*I:E=P+j*I,l&&(E=P+j*I),_=de(de({},_),{},{touchObject:f,swipeLeft:E,trackStyle:li(de(de({},n),{},{left:E}))}),Math.abs(f.curX-f.startX)<Math.abs(f.curY-f.startY)*.8||f.swipeLength>10&&(_.swiping=!0,bn(t)),_}};R.swipeMove=RS;var LS=function(t,n){var r=n.dragging,i=n.swipe,o=n.touchObject,a=n.listWidth,l=n.touchThreshold,s=n.verticalSwiping,c=n.listHeight,p=n.swipeToSlide,d=n.scrolling,h=n.onSwipe,w=n.targetSlide,y=n.currentSlide,v=n.infinite;if(!r)return i&&bn(t),{};var S=s?c/l:a/l,m=nc(o,s),f={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(d||!o.swipeLength)return f;if(o.swipeLength>S){bn(t),h&&h(m);var g,A,k=v?y:w;switch(m){case"left":case"up":A=k+Es(n),g=p?Ps(n,A):A,f.currentDirection=0;break;case"right":case"down":A=k-Es(n),g=p?Ps(n,A):A,f.currentDirection=1;break;default:g=k}f.triggerSlideHandler=g}else{var E=si(n);f.trackStyle=ic(de(de({},n),{},{left:E}))}return f};R.swipeEnd=LS;var Hm=function(t){for(var n=t.infinite?t.slideCount*2:t.slideCount,r=t.infinite?t.slidesToShow*-1:0,i=t.infinite?t.slidesToShow*-1:0,o=[];r<n;)o.push(r),r=i+t.slidesToScroll,i+=Math.min(t.slidesToScroll,t.slidesToShow);return o};R.getNavigableIndexes=Hm;var Ps=function(t,n){var r=Hm(t),i=0;if(n>r[r.length-1])n=r[r.length-1];else for(var o in r){if(n<r[o]){n=i;break}i=r[o]}return n};R.checkNavigable=Ps;var Es=function(t){var n=t.centerMode?t.slideWidth*Math.floor(t.slidesToShow/2):0;if(t.swipeToSlide){var r,i=t.listRef,o=i.querySelectorAll&&i.querySelectorAll(".slick-slide")||[];if(Array.from(o).every(function(s){if(t.vertical){if(s.offsetTop+tc(s)/2>t.swipeLeft*-1)return r=s,!1}else if(s.offsetLeft-n+Ro(s)/2>t.swipeLeft*-1)return r=s,!1;return!0}),!r)return 0;var a=t.rtl===!0?t.slideCount-t.currentSlide:t.currentSlide,l=Math.abs(r.dataset.index-a)||1;return l}else return t.slidesToScroll};R.getSlideCount=Es;var Ia=function(t,n){return n.reduce(function(r,i){return r&&t.hasOwnProperty(i)},!0)?null:console.error("Keys Missing:",t)};R.checkSpecKeys=Ia;var li=function(t){Ia(t,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var n,r,i=t.slideCount+2*t.slidesToShow;t.vertical?r=i*t.slideHeight:n=Qm(t)*t.slideWidth;var o={opacity:1,transition:"",WebkitTransition:""};if(t.useTransform){var a=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",l=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",s=t.vertical?"translateY("+t.left+"px)":"translateX("+t.left+"px)";o=de(de({},o),{},{WebkitTransform:a,transform:l,msTransform:s})}else t.vertical?o.top=t.left:o.left=t.left;return t.fade&&(o={opacity:1}),n&&(o.width=n),r&&(o.height=r),window&&!window.addEventListener&&window.attachEvent&&(t.vertical?o.marginTop=t.left+"px":o.marginLeft=t.left+"px"),o};R.getTrackCSS=li;var ic=function(t){Ia(t,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var n=li(t);return t.useTransform?(n.WebkitTransition="-webkit-transform "+t.speed+"ms "+t.cssEase,n.transition="transform "+t.speed+"ms "+t.cssEase):t.vertical?n.transition="top "+t.speed+"ms "+t.cssEase:n.transition="left "+t.speed+"ms "+t.cssEase,n};R.getTrackAnimateCSS=ic;var si=function(t){if(t.unslick)return 0;Ia(t,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var n=t.slideIndex,r=t.trackRef,i=t.infinite,o=t.centerMode,a=t.slideCount,l=t.slidesToShow,s=t.slidesToScroll,c=t.slideWidth,p=t.listWidth,d=t.variableWidth,h=t.slideHeight,w=t.fade,y=t.vertical,v=0,S,m,f=0;if(w||t.slideCount===1)return 0;var g=0;if(i?(g=-jr(t),a%s!==0&&n+s>a&&(g=-(n>a?l-(n-a):a%s)),o&&(g+=parseInt(l/2))):(a%s!==0&&n+s>a&&(g=l-a%s),o&&(g=parseInt(l/2))),v=g*c,f=g*h,y?S=n*h*-1+f:S=n*c*-1+v,d===!0){var A,k=r&&r.node;if(A=n+jr(t),m=k&&k.childNodes[A],S=m?m.offsetLeft*-1:0,o===!0){A=i?n+jr(t):n,m=k&&k.children[A],S=0;for(var E=0;E<A;E++)S-=k&&k.children[E]&&k.children[E].offsetWidth;S-=parseInt(t.centerPadding),S+=m&&(p-m.offsetWidth)/2}}return S};R.getTrackLeft=si;var jr=function(t){return t.unslick||!t.infinite?0:t.variableWidth?t.slideCount:t.slidesToShow+(t.centerMode?1:0)};R.getPreClones=jr;var Wm=function(t){return t.unslick||!t.infinite?0:t.slideCount};R.getPostClones=Wm;var Qm=function(t){return t.slideCount===1?1:jr(t)+t.slideCount+Wm(t)};R.getTotalSlides=Qm;var Ym=function(t){return t.targetSlide>t.currentSlide?t.targetSlide>t.currentSlide+Km(t)?"left":"right":t.targetSlide<t.currentSlide-qm(t)?"right":"left"};R.siblingDirection=Ym;var Km=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var a=(n-1)/2+1;return parseInt(o)>0&&(a+=1),i&&n%2===0&&(a+=1),a}return i?0:n-1};R.slidesOnRight=Km;var qm=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var a=(n-1)/2+1;return parseInt(o)>0&&(a+=1),!i&&n%2===0&&(a+=1),a}return i?n-1:0};R.slidesOnLeft=qm;var BS=function(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)};R.canUseDOM=BS;var Na={};function Os(e){return Os=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Os(e)}Object.defineProperty(Na,"__esModule",{value:!0});Na.Track=void 0;var Wt=Xm(O.exports),ml=Xm(vi.exports),hl=R;function Xm(e){return e&&e.__esModule?e:{default:e}}function Ts(){return Ts=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ts.apply(this,arguments)}function zS(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function jd(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function FS(e,t,n){return t&&jd(e.prototype,t),n&&jd(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function jS(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&xs(e,t)}function xs(e,t){return xs=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},xs(e,t)}function US(e){var t=GS();return function(){var r=Lo(e),i;if(t){var o=Lo(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return VS(this,i)}}function VS(e,t){if(t&&(Os(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return _s(e)}function _s(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function GS(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Lo(e){return Lo=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Lo(e)}function Ud(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function qe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ud(Object(n),!0).forEach(function(r){Ds(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ud(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ds(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var gl=function(t){var n,r,i,o,a;t.rtl?a=t.slideCount-1-t.index:a=t.index,i=a<0||a>=t.slideCount,t.centerMode?(o=Math.floor(t.slidesToShow/2),r=(a-t.currentSlide)%t.slideCount===0,a>t.currentSlide-o-1&&a<=t.currentSlide+o&&(n=!0)):n=t.currentSlide<=a&&a<t.currentSlide+t.slidesToShow;var l;t.targetSlide<0?l=t.targetSlide+t.slideCount:t.targetSlide>=t.slideCount?l=t.targetSlide-t.slideCount:l=t.targetSlide;var s=a===l;return{"slick-slide":!0,"slick-active":n,"slick-center":r,"slick-cloned":i,"slick-current":s}},HS=function(t){var n={};return(t.variableWidth===void 0||t.variableWidth===!1)&&(n.width=t.slideWidth),t.fade&&(n.position="relative",t.vertical?n.top=-t.index*parseInt(t.slideHeight):n.left=-t.index*parseInt(t.slideWidth),n.opacity=t.currentSlide===t.index?1:0,t.useCSS&&(n.transition="opacity "+t.speed+"ms "+t.cssEase+", visibility "+t.speed+"ms "+t.cssEase)),n},vl=function(t,n){return t.key||n},WS=function(t){var n,r=[],i=[],o=[],a=Wt.default.Children.count(t.children),l=(0,hl.lazyStartIndex)(t),s=(0,hl.lazyEndIndex)(t);return Wt.default.Children.forEach(t.children,function(c,p){var d,h={message:"children",index:p,slidesToScroll:t.slidesToScroll,currentSlide:t.currentSlide};!t.lazyLoad||t.lazyLoad&&t.lazyLoadedList.indexOf(p)>=0?d=c:d=Wt.default.createElement("div",null);var w=HS(qe(qe({},t),{},{index:p})),y=d.props.className||"",v=gl(qe(qe({},t),{},{index:p}));if(r.push(Wt.default.cloneElement(d,{key:"original"+vl(d,p),"data-index":p,className:(0,ml.default)(v,y),tabIndex:"-1","aria-hidden":!v["slick-active"],style:qe(qe({outline:"none"},d.props.style||{}),w),onClick:function(f){d.props&&d.props.onClick&&d.props.onClick(f),t.focusOnSelect&&t.focusOnSelect(h)}})),t.infinite&&t.fade===!1){var S=a-p;S<=(0,hl.getPreClones)(t)&&a!==t.slidesToShow&&(n=-S,n>=l&&(d=c),v=gl(qe(qe({},t),{},{index:n})),i.push(Wt.default.cloneElement(d,{key:"precloned"+vl(d,n),"data-index":n,tabIndex:"-1",className:(0,ml.default)(v,y),"aria-hidden":!v["slick-active"],style:qe(qe({},d.props.style||{}),w),onClick:function(f){d.props&&d.props.onClick&&d.props.onClick(f),t.focusOnSelect&&t.focusOnSelect(h)}}))),a!==t.slidesToShow&&(n=a+p,n<s&&(d=c),v=gl(qe(qe({},t),{},{index:n})),o.push(Wt.default.cloneElement(d,{key:"postcloned"+vl(d,n),"data-index":n,tabIndex:"-1",className:(0,ml.default)(v,y),"aria-hidden":!v["slick-active"],style:qe(qe({},d.props.style||{}),w),onClick:function(f){d.props&&d.props.onClick&&d.props.onClick(f),t.focusOnSelect&&t.focusOnSelect(h)}})))}}),t.rtl?i.concat(r,o).reverse():i.concat(r,o)},QS=function(e){jS(n,e);var t=US(n);function n(){var r;zS(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return r=t.call.apply(t,[this].concat(o)),Ds(_s(r),"node",null),Ds(_s(r),"handleRef",function(l){r.node=l}),r}return FS(n,[{key:"render",value:function(){var i=WS(this.props),o=this.props,a=o.onMouseEnter,l=o.onMouseOver,s=o.onMouseLeave,c={onMouseEnter:a,onMouseOver:l,onMouseLeave:s};return Wt.default.createElement("div",Ts({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},c),i)}}]),n}(Wt.default.PureComponent);Na.Track=QS;var Ma={};function Is(e){return Is=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Is(e)}Object.defineProperty(Ma,"__esModule",{value:!0});Ma.Dots=void 0;var Vi=Jm(O.exports),YS=Jm(vi.exports),Vd=R;function Jm(e){return e&&e.__esModule?e:{default:e}}function Gd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function KS(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Gd(Object(n),!0).forEach(function(r){qS(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Gd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function qS(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function XS(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Hd(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function JS(e,t,n){return t&&Hd(e.prototype,t),n&&Hd(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ZS(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Ns(e,t)}function Ns(e,t){return Ns=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Ns(e,t)}function $S(e){var t=n1();return function(){var r=Bo(e),i;if(t){var o=Bo(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return e1(this,i)}}function e1(e,t){if(t&&(Is(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return t1(e)}function t1(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function n1(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Bo(e){return Bo=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Bo(e)}var r1=function(t){var n;return t.infinite?n=Math.ceil(t.slideCount/t.slidesToScroll):n=Math.ceil((t.slideCount-t.slidesToShow)/t.slidesToScroll)+1,n},i1=function(e){ZS(n,e);var t=$S(n);function n(){return XS(this,n),t.apply(this,arguments)}return JS(n,[{key:"clickHandler",value:function(i,o){o.preventDefault(),this.props.clickHandler(i)}},{key:"render",value:function(){for(var i=this.props,o=i.onMouseEnter,a=i.onMouseOver,l=i.onMouseLeave,s=i.infinite,c=i.slidesToScroll,p=i.slidesToShow,d=i.slideCount,h=i.currentSlide,w=r1({slideCount:d,slidesToScroll:c,slidesToShow:p,infinite:s}),y={onMouseEnter:o,onMouseOver:a,onMouseLeave:l},v=[],S=0;S<w;S++){var m=(S+1)*c-1,f=s?m:(0,Vd.clamp)(m,0,d-1),g=f-(c-1),A=s?g:(0,Vd.clamp)(g,0,d-1),k=(0,YS.default)({"slick-active":s?h>=A&&h<=f:h===A}),E={message:"dots",index:S,slidesToScroll:c,currentSlide:h},_=this.clickHandler.bind(this,E);v=v.concat(Vi.default.createElement("li",{key:S,className:k},Vi.default.cloneElement(this.props.customPaging(S),{onClick:_})))}return Vi.default.cloneElement(this.props.appendDots(v),KS({className:this.props.dotsClass},y))}}]),n}(Vi.default.PureComponent);Ma.Dots=i1;var ur={};function Ms(e){return Ms=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ms(e)}Object.defineProperty(ur,"__esModule",{value:!0});ur.PrevArrow=ur.NextArrow=void 0;var $n=$m(O.exports),Zm=$m(vi.exports),o1=R;function $m(e){return e&&e.__esModule?e:{default:e}}function zo(){return zo=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zo.apply(this,arguments)}function Wd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Fo(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Wd(Object(n),!0).forEach(function(r){a1(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Wd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function a1(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function eh(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Qd(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function th(e,t,n){return t&&Qd(e.prototype,t),n&&Qd(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function nh(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Rs(e,t)}function Rs(e,t){return Rs=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Rs(e,t)}function rh(e){var t=u1();return function(){var r=jo(e),i;if(t){var o=jo(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return l1(this,i)}}function l1(e,t){if(t&&(Ms(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return s1(e)}function s1(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u1(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function jo(e){return jo=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},jo(e)}var c1=function(e){nh(n,e);var t=rh(n);function n(){return eh(this,n),t.apply(this,arguments)}return th(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-prev":!0},o=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(i["slick-disabled"]=!0,o=null);var a={key:"0","data-role":"none",className:(0,Zm.default)(i),style:{display:"block"},onClick:o},l={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},s;return this.props.prevArrow?s=$n.default.cloneElement(this.props.prevArrow,Fo(Fo({},a),l)):s=$n.default.createElement("button",zo({key:"0",type:"button"},a)," ","Previous"),s}}]),n}($n.default.PureComponent);ur.PrevArrow=c1;var d1=function(e){nh(n,e);var t=rh(n);function n(){return eh(this,n),t.apply(this,arguments)}return th(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-next":!0},o=this.clickHandler.bind(this,{message:"next"});(0,o1.canGoNext)(this.props)||(i["slick-disabled"]=!0,o=null);var a={key:"1","data-role":"none",className:(0,Zm.default)(i),style:{display:"block"},onClick:o},l={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},s;return this.props.nextArrow?s=$n.default.cloneElement(this.props.nextArrow,Fo(Fo({},a),l)):s=$n.default.createElement("button",zo({key:"1",type:"button"},a)," ","Next"),s}}]),n}($n.default.PureComponent);ur.NextArrow=d1;var ih=function(){if(typeof Map!="undefined")return Map;function e(t,n){var r=-1;return t.some(function(i,o){return i[0]===n?(r=o,!0):!1}),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var r=e(this.__entries__,n),i=this.__entries__[r];return i&&i[1]},t.prototype.set=function(n,r){var i=e(this.__entries__,n);~i?this.__entries__[i][1]=r:this.__entries__.push([n,r])},t.prototype.delete=function(n){var r=this.__entries__,i=e(r,n);~i&&r.splice(i,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var i=0,o=this.__entries__;i<o.length;i++){var a=o[i];n.call(r,a[1],a[0])}},t}()}(),Ls=typeof window!="undefined"&&typeof document!="undefined"&&window.document===document,Uo=function(){return typeof global!="undefined"&&global.Math===Math?global:typeof self!="undefined"&&self.Math===Math?self:typeof window!="undefined"&&window.Math===Math?window:Function("return this")()}(),f1=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(Uo):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),p1=2;function m1(e,t){var n=!1,r=!1,i=0;function o(){n&&(n=!1,e()),r&&l()}function a(){f1(o)}function l(){var s=Date.now();if(n){if(s-i<p1)return;r=!0}else n=!0,r=!1,setTimeout(a,t);i=s}return l}var h1=20,g1=["top","right","bottom","left","width","height","size","weight"],v1=typeof MutationObserver!="undefined",y1=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=m1(this.refresh.bind(this),h1)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,r=n.indexOf(t);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!Ls||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),v1?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!Ls||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,r=n===void 0?"":n,i=g1.some(function(o){return!!~r.indexOf(o)});i&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),oh=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},cr=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||Uo},ah=Ra(0,0,0,0);function Vo(e){return parseFloat(e)||0}function Yd(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(r,i){var o=e["border-"+i+"-width"];return r+Vo(o)},0)}function S1(e){for(var t=["top","right","bottom","left"],n={},r=0,i=t;r<i.length;r++){var o=i[r],a=e["padding-"+o];n[o]=Vo(a)}return n}function A1(e){var t=e.getBBox();return Ra(0,0,t.width,t.height)}function w1(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return ah;var r=cr(e).getComputedStyle(e),i=S1(r),o=i.left+i.right,a=i.top+i.bottom,l=Vo(r.width),s=Vo(r.height);if(r.boxSizing==="border-box"&&(Math.round(l+o)!==t&&(l-=Yd(r,"left","right")+o),Math.round(s+a)!==n&&(s-=Yd(r,"top","bottom")+a)),!b1(e)){var c=Math.round(l+o)-t,p=Math.round(s+a)-n;Math.abs(c)!==1&&(l-=c),Math.abs(p)!==1&&(s-=p)}return Ra(i.left,i.top,l,s)}var C1=function(){return typeof SVGGraphicsElement!="undefined"?function(e){return e instanceof cr(e).SVGGraphicsElement}:function(e){return e instanceof cr(e).SVGElement&&typeof e.getBBox=="function"}}();function b1(e){return e===cr(e).document.documentElement}function k1(e){return Ls?C1(e)?A1(e):w1(e):ah}function P1(e){var t=e.x,n=e.y,r=e.width,i=e.height,o=typeof DOMRectReadOnly!="undefined"?DOMRectReadOnly:Object,a=Object.create(o.prototype);return oh(a,{x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:i+n,left:t}),a}function Ra(e,t,n,r){return{x:e,y:t,width:n,height:r}}var E1=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Ra(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=k1(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),O1=function(){function e(t,n){var r=P1(n);oh(this,{target:t,contentRect:r})}return e}(),T1=function(){function e(t,n,r){if(this.activeObservations_=[],this.observations_=new ih,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element=="undefined"||!(Element instanceof Object))){if(!(t instanceof cr(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new E1(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element=="undefined"||!(Element instanceof Object))){if(!(t instanceof cr(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;!n.has(t)||(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(!!this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new O1(r.target,r.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),lh=typeof WeakMap!="undefined"?new WeakMap:new ih,sh=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=y1.getInstance(),r=new T1(t,n,this);lh.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){sh.prototype[e]=function(){var t;return(t=lh.get(this))[e].apply(t,arguments)}});var x1=function(){return typeof Uo.ResizeObserver!="undefined"?Uo.ResizeObserver:sh}(),_1=Object.freeze(Object.defineProperty({__proto__:null,default:x1},Symbol.toStringTag,{value:"Module"})),D1=Ah(_1);Object.defineProperty(Da,"__esModule",{value:!0});Da.InnerSlider=void 0;var Ve=yi(O.exports),I1=yi(jm),N1=yi(kS),M1=yi(vi.exports),pe=R,R1=Na,L1=Ma,Kd=ur,B1=yi(D1);function yi(e){return e&&e.__esModule?e:{default:e}}function Go(e){return Go=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Go(e)}function Ho(){return Ho=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ho.apply(this,arguments)}function z1(e,t){if(e==null)return{};var n=F1(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function F1(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function qd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?qd(Object(n),!0).forEach(function(r){q(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):qd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function j1(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Xd(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function U1(e,t,n){return t&&Xd(e.prototype,t),n&&Xd(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function V1(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Bs(e,t)}function Bs(e,t){return Bs=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Bs(e,t)}function G1(e){var t=W1();return function(){var r=Wo(e),i;if(t){var o=Wo(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return H1(this,i)}}function H1(e,t){if(t&&(Go(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return K(e)}function K(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function W1(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Wo(e){return Wo=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Wo(e)}function q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Q1=function(e){V1(n,e);var t=G1(n);function n(r){var i;j1(this,n),i=t.call(this,r),q(K(i),"listRefHandler",function(a){return i.list=a}),q(K(i),"trackRefHandler",function(a){return i.track=a}),q(K(i),"adaptHeight",function(){if(i.props.adaptiveHeight&&i.list){var a=i.list.querySelector('[data-index="'.concat(i.state.currentSlide,'"]'));i.list.style.height=(0,pe.getHeight)(a)+"px"}}),q(K(i),"componentDidMount",function(){if(i.props.onInit&&i.props.onInit(),i.props.lazyLoad){var a=(0,pe.getOnDemandLazySlides)(H(H({},i.props),i.state));a.length>0&&(i.setState(function(s){return{lazyLoadedList:s.lazyLoadedList.concat(a)}}),i.props.onLazyLoad&&i.props.onLazyLoad(a))}var l=H({listRef:i.list,trackRef:i.track},i.props);i.updateState(l,!0,function(){i.adaptHeight(),i.props.autoplay&&i.autoPlay("update")}),i.props.lazyLoad==="progressive"&&(i.lazyLoadTimer=setInterval(i.progressiveLazyLoad,1e3)),i.ro=new B1.default(function(){i.state.animating?(i.onWindowResized(!1),i.callbackTimers.push(setTimeout(function(){return i.onWindowResized()},i.props.speed))):i.onWindowResized()}),i.ro.observe(i.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(s){s.onfocus=i.props.pauseOnFocus?i.onSlideFocus:null,s.onblur=i.props.pauseOnFocus?i.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",i.onWindowResized):window.attachEvent("onresize",i.onWindowResized)}),q(K(i),"componentWillUnmount",function(){i.animationEndCallback&&clearTimeout(i.animationEndCallback),i.lazyLoadTimer&&clearInterval(i.lazyLoadTimer),i.callbackTimers.length&&(i.callbackTimers.forEach(function(a){return clearTimeout(a)}),i.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",i.onWindowResized):window.detachEvent("onresize",i.onWindowResized),i.autoplayTimer&&clearInterval(i.autoplayTimer),i.ro.disconnect()}),q(K(i),"componentDidUpdate",function(a){if(i.checkImagesLoad(),i.props.onReInit&&i.props.onReInit(),i.props.lazyLoad){var l=(0,pe.getOnDemandLazySlides)(H(H({},i.props),i.state));l.length>0&&(i.setState(function(p){return{lazyLoadedList:p.lazyLoadedList.concat(l)}}),i.props.onLazyLoad&&i.props.onLazyLoad(l))}i.adaptHeight();var s=H(H({listRef:i.list,trackRef:i.track},i.props),i.state),c=i.didPropsChange(a);c&&i.updateState(s,c,function(){i.state.currentSlide>=Ve.default.Children.count(i.props.children)&&i.changeSlide({message:"index",index:Ve.default.Children.count(i.props.children)-i.props.slidesToShow,currentSlide:i.state.currentSlide}),i.props.autoplay?i.autoPlay("update"):i.pause("paused")})}),q(K(i),"onWindowResized",function(a){i.debouncedResize&&i.debouncedResize.cancel(),i.debouncedResize=(0,N1.default)(function(){return i.resizeWindow(a)},50),i.debouncedResize()}),q(K(i),"resizeWindow",function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,l=Boolean(i.track&&i.track.node);if(!!l){var s=H(H({listRef:i.list,trackRef:i.track},i.props),i.state);i.updateState(s,a,function(){i.props.autoplay?i.autoPlay("update"):i.pause("paused")}),i.setState({animating:!1}),clearTimeout(i.animationEndCallback),delete i.animationEndCallback}}),q(K(i),"updateState",function(a,l,s){var c=(0,pe.initializedState)(a);a=H(H(H({},a),c),{},{slideIndex:c.currentSlide});var p=(0,pe.getTrackLeft)(a);a=H(H({},a),{},{left:p});var d=(0,pe.getTrackCSS)(a);(l||Ve.default.Children.count(i.props.children)!==Ve.default.Children.count(a.children))&&(c.trackStyle=d),i.setState(c,s)}),q(K(i),"ssrInit",function(){if(i.props.variableWidth){var a=0,l=0,s=[],c=(0,pe.getPreClones)(H(H(H({},i.props),i.state),{},{slideCount:i.props.children.length})),p=(0,pe.getPostClones)(H(H(H({},i.props),i.state),{},{slideCount:i.props.children.length}));i.props.children.forEach(function(_){s.push(_.props.style.width),a+=_.props.style.width});for(var d=0;d<c;d++)l+=s[s.length-1-d],a+=s[s.length-1-d];for(var h=0;h<p;h++)a+=s[h];for(var w=0;w<i.state.currentSlide;w++)l+=s[w];var y={width:a+"px",left:-l+"px"};if(i.props.centerMode){var v="".concat(s[i.state.currentSlide],"px");y.left="calc(".concat(y.left," + (100% - ").concat(v,") / 2 ) ")}return{trackStyle:y}}var S=Ve.default.Children.count(i.props.children),m=H(H(H({},i.props),i.state),{},{slideCount:S}),f=(0,pe.getPreClones)(m)+(0,pe.getPostClones)(m)+S,g=100/i.props.slidesToShow*f,A=100/f,k=-A*((0,pe.getPreClones)(m)+i.state.currentSlide)*g/100;i.props.centerMode&&(k+=(100-A*g/100)/2);var E={width:g+"%",left:k+"%"};return{slideWidth:A+"%",trackStyle:E}}),q(K(i),"checkImagesLoad",function(){var a=i.list&&i.list.querySelectorAll&&i.list.querySelectorAll(".slick-slide img")||[],l=a.length,s=0;Array.prototype.forEach.call(a,function(c){var p=function(){return++s&&s>=l&&i.onWindowResized()};if(!c.onclick)c.onclick=function(){return c.parentNode.focus()};else{var d=c.onclick;c.onclick=function(){d(),c.parentNode.focus()}}c.onload||(i.props.lazyLoad?c.onload=function(){i.adaptHeight(),i.callbackTimers.push(setTimeout(i.onWindowResized,i.props.speed))}:(c.onload=p,c.onerror=function(){p(),i.props.onLazyLoadError&&i.props.onLazyLoadError()}))})}),q(K(i),"progressiveLazyLoad",function(){for(var a=[],l=H(H({},i.props),i.state),s=i.state.currentSlide;s<i.state.slideCount+(0,pe.getPostClones)(l);s++)if(i.state.lazyLoadedList.indexOf(s)<0){a.push(s);break}for(var c=i.state.currentSlide-1;c>=-(0,pe.getPreClones)(l);c--)if(i.state.lazyLoadedList.indexOf(c)<0){a.push(c);break}a.length>0?(i.setState(function(p){return{lazyLoadedList:p.lazyLoadedList.concat(a)}}),i.props.onLazyLoad&&i.props.onLazyLoad(a)):i.lazyLoadTimer&&(clearInterval(i.lazyLoadTimer),delete i.lazyLoadTimer)}),q(K(i),"slideHandler",function(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=i.props,c=s.asNavFor,p=s.beforeChange,d=s.onLazyLoad,h=s.speed,w=s.afterChange,y=i.state.currentSlide,v=(0,pe.slideHandler)(H(H(H({index:a},i.props),i.state),{},{trackRef:i.track,useCSS:i.props.useCSS&&!l})),S=v.state,m=v.nextState;if(!!S){p&&p(y,S.currentSlide);var f=S.lazyLoadedList.filter(function(g){return i.state.lazyLoadedList.indexOf(g)<0});d&&f.length>0&&d(f),!i.props.waitForAnimate&&i.animationEndCallback&&(clearTimeout(i.animationEndCallback),w&&w(y),delete i.animationEndCallback),i.setState(S,function(){c&&i.asNavForIndex!==a&&(i.asNavForIndex=a,c.innerSlider.slideHandler(a)),m&&(i.animationEndCallback=setTimeout(function(){var g=m.animating,A=z1(m,["animating"]);i.setState(A,function(){i.callbackTimers.push(setTimeout(function(){return i.setState({animating:g})},10)),w&&w(S.currentSlide),delete i.animationEndCallback})},h))})}}),q(K(i),"changeSlide",function(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=H(H({},i.props),i.state),c=(0,pe.changeSlide)(s,a);if(!(c!==0&&!c)&&(l===!0?i.slideHandler(c,l):i.slideHandler(c),i.props.autoplay&&i.autoPlay("update"),i.props.focusOnSelect)){var p=i.list.querySelectorAll(".slick-current");p[0]&&p[0].focus()}}),q(K(i),"clickHandler",function(a){i.clickable===!1&&(a.stopPropagation(),a.preventDefault()),i.clickable=!0}),q(K(i),"keyHandler",function(a){var l=(0,pe.keyHandler)(a,i.props.accessibility,i.props.rtl);l!==""&&i.changeSlide({message:l})}),q(K(i),"selectHandler",function(a){i.changeSlide(a)}),q(K(i),"disableBodyScroll",function(){var a=function(s){s=s||window.event,s.preventDefault&&s.preventDefault(),s.returnValue=!1};window.ontouchmove=a}),q(K(i),"enableBodyScroll",function(){window.ontouchmove=null}),q(K(i),"swipeStart",function(a){i.props.verticalSwiping&&i.disableBodyScroll();var l=(0,pe.swipeStart)(a,i.props.swipe,i.props.draggable);l!==""&&i.setState(l)}),q(K(i),"swipeMove",function(a){var l=(0,pe.swipeMove)(a,H(H(H({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));!l||(l.swiping&&(i.clickable=!1),i.setState(l))}),q(K(i),"swipeEnd",function(a){var l=(0,pe.swipeEnd)(a,H(H(H({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));if(!!l){var s=l.triggerSlideHandler;delete l.triggerSlideHandler,i.setState(l),s!==void 0&&(i.slideHandler(s),i.props.verticalSwiping&&i.enableBodyScroll())}}),q(K(i),"touchEnd",function(a){i.swipeEnd(a),i.clickable=!0}),q(K(i),"slickPrev",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"previous"})},0))}),q(K(i),"slickNext",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"next"})},0))}),q(K(i),"slickGoTo",function(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(a=Number(a),isNaN(a))return"";i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"index",index:a,currentSlide:i.state.currentSlide},l)},0))}),q(K(i),"play",function(){var a;if(i.props.rtl)a=i.state.currentSlide-i.props.slidesToScroll;else if((0,pe.canGoNext)(H(H({},i.props),i.state)))a=i.state.currentSlide+i.props.slidesToScroll;else return!1;i.slideHandler(a)}),q(K(i),"autoPlay",function(a){i.autoplayTimer&&clearInterval(i.autoplayTimer);var l=i.state.autoplaying;if(a==="update"){if(l==="hovered"||l==="focused"||l==="paused")return}else if(a==="leave"){if(l==="paused"||l==="focused")return}else if(a==="blur"&&(l==="paused"||l==="hovered"))return;i.autoplayTimer=setInterval(i.play,i.props.autoplaySpeed+50),i.setState({autoplaying:"playing"})}),q(K(i),"pause",function(a){i.autoplayTimer&&(clearInterval(i.autoplayTimer),i.autoplayTimer=null);var l=i.state.autoplaying;a==="paused"?i.setState({autoplaying:"paused"}):a==="focused"?(l==="hovered"||l==="playing")&&i.setState({autoplaying:"focused"}):l==="playing"&&i.setState({autoplaying:"hovered"})}),q(K(i),"onDotsOver",function(){return i.props.autoplay&&i.pause("hovered")}),q(K(i),"onDotsLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),q(K(i),"onTrackOver",function(){return i.props.autoplay&&i.pause("hovered")}),q(K(i),"onTrackLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),q(K(i),"onSlideFocus",function(){return i.props.autoplay&&i.pause("focused")}),q(K(i),"onSlideBlur",function(){return i.props.autoplay&&i.state.autoplaying==="focused"&&i.autoPlay("blur")}),q(K(i),"render",function(){var a=(0,M1.default)("slick-slider",i.props.className,{"slick-vertical":i.props.vertical,"slick-initialized":!0}),l=H(H({},i.props),i.state),s=(0,pe.extractObject)(l,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),c=i.props.pauseOnHover;s=H(H({},s),{},{onMouseEnter:c?i.onTrackOver:null,onMouseLeave:c?i.onTrackLeave:null,onMouseOver:c?i.onTrackOver:null,focusOnSelect:i.props.focusOnSelect&&i.clickable?i.selectHandler:null});var p;if(i.props.dots===!0&&i.state.slideCount>=i.props.slidesToShow){var d=(0,pe.extractObject)(l,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),h=i.props.pauseOnDotsHover;d=H(H({},d),{},{clickHandler:i.changeSlide,onMouseEnter:h?i.onDotsLeave:null,onMouseOver:h?i.onDotsOver:null,onMouseLeave:h?i.onDotsLeave:null}),p=Ve.default.createElement(L1.Dots,d)}var w,y,v=(0,pe.extractObject)(l,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);v.clickHandler=i.changeSlide,i.props.arrows&&(w=Ve.default.createElement(Kd.PrevArrow,v),y=Ve.default.createElement(Kd.NextArrow,v));var S=null;i.props.vertical&&(S={height:i.state.listHeight});var m=null;i.props.vertical===!1?i.props.centerMode===!0&&(m={padding:"0px "+i.props.centerPadding}):i.props.centerMode===!0&&(m={padding:i.props.centerPadding+" 0px"});var f=H(H({},S),m),g=i.props.touchMove,A={className:"slick-list",style:f,onClick:i.clickHandler,onMouseDown:g?i.swipeStart:null,onMouseMove:i.state.dragging&&g?i.swipeMove:null,onMouseUp:g?i.swipeEnd:null,onMouseLeave:i.state.dragging&&g?i.swipeEnd:null,onTouchStart:g?i.swipeStart:null,onTouchMove:i.state.dragging&&g?i.swipeMove:null,onTouchEnd:g?i.touchEnd:null,onTouchCancel:i.state.dragging&&g?i.swipeEnd:null,onKeyDown:i.props.accessibility?i.keyHandler:null},k={className:a,dir:"ltr",style:i.props.style};return i.props.unslick&&(A={className:"slick-list"},k={className:a}),Ve.default.createElement("div",k,i.props.unslick?"":w,Ve.default.createElement("div",Ho({ref:i.listRefHandler},A),Ve.default.createElement(R1.Track,Ho({ref:i.trackRefHandler},s),i.props.children)),i.props.unslick?"":y,i.props.unslick?"":p)}),i.list=null,i.track=null,i.state=H(H({},I1.default),{},{currentSlide:i.props.initialSlide,slideCount:Ve.default.Children.count(i.props.children)}),i.callbackTimers=[],i.clickable=!0,i.debouncedResize=null;var o=i.ssrInit();return i.state=H(H({},i.state),o),i}return U1(n,[{key:"didPropsChange",value:function(i){for(var o=!1,a=0,l=Object.keys(this.props);a<l.length;a++){var s=l[a];if(!i.hasOwnProperty(s)){o=!0;break}if(!(Go(i[s])==="object"||typeof i[s]=="function")&&i[s]!==this.props[s]){o=!0;break}}return o||Ve.default.Children.count(this.props.children)!==Ve.default.Children.count(i.children)}}]),n}(Ve.default.Component);Da.InnerSlider=Q1;var Y1=function(e){return e.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()}).toLowerCase()},K1=Y1,q1=K1,X1=function(e){var t=/[height|width]$/;return t.test(e)},Jd=function(e){var t="",n=Object.keys(e);return n.forEach(function(r,i){var o=e[r];r=q1(r),X1(r)&&typeof o=="number"&&(o=o+"px"),o===!0?t+=r:o===!1?t+="not "+r:t+="("+r+": "+o+")",i<n.length-1&&(t+=" and ")}),t},J1=function(e){var t="";return typeof e=="string"?e:e instanceof Array?(e.forEach(function(n,r){t+=Jd(n),r<e.length-1&&(t+=", ")}),t):Jd(e)},Z1=J1,uh={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(O.exports);function n(o){return o&&o.__esModule?o:{default:o}}var r={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(a){return t.default.createElement("ul",{style:{display:"block"}},a)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(a){return t.default.createElement("button",null,a+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0},i=r;e.default=i})(uh);function zs(e){this.options=e,!e.deferSetup&&this.setup()}zs.prototype={constructor:zs,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(e){return this.options===e||this.options.match===e}};var $1=zs;function eA(e,t){var n=0,r=e.length,i;for(n;n<r&&(i=t(e[n],n),i!==!1);n++);}function tA(e){return Object.prototype.toString.apply(e)==="[object Array]"}function nA(e){return typeof e=="function"}var ch={isFunction:nA,isArray:tA,each:eA},rA=$1,yl=ch.each;function Fs(e,t){this.query=e,this.isUnconditional=t,this.handlers=[],this.mql=window.matchMedia(e);var n=this;this.listener=function(r){n.mql=r.currentTarget||r,n.assess()},this.mql.addListener(this.listener)}Fs.prototype={constuctor:Fs,addHandler:function(e){var t=new rA(e);this.handlers.push(t),this.matches()&&t.on()},removeHandler:function(e){var t=this.handlers;yl(t,function(n,r){if(n.equals(e))return n.destroy(),!t.splice(r,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){yl(this.handlers,function(e){e.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var e=this.matches()?"on":"off";yl(this.handlers,function(t){t[e]()})}};var iA=Fs,oA=iA,oc=ch,aA=oc.each,Zd=oc.isFunction,lA=oc.isArray;function js(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}js.prototype={constructor:js,register:function(e,t,n){var r=this.queries,i=n&&this.browserIsIncapable;return r[e]||(r[e]=new oA(e,i)),Zd(t)&&(t={match:t}),lA(t)||(t=[t]),aA(t,function(o){Zd(o)&&(o={match:o}),r[e].addHandler(o)}),this},unregister:function(e,t){var n=this.queries[e];return n&&(t?n.removeHandler(t):(n.clear(),delete this.queries[e])),this}};var sA=js,uA=sA,cA=new uA;(function(e){function t(P){return t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(x){return typeof x}:function(x){return x&&typeof Symbol=="function"&&x.constructor===Symbol&&x!==Symbol.prototype?"symbol":typeof x},t(P)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=l(O.exports),r=Da,i=l(Z1),o=l(uh),a=R;function l(P){return P&&P.__esModule?P:{default:P}}function s(){return s=Object.assign||function(P){for(var x=1;x<arguments.length;x++){var I=arguments[x];for(var U in I)Object.prototype.hasOwnProperty.call(I,U)&&(P[U]=I[U])}return P},s.apply(this,arguments)}function c(P,x){var I=Object.keys(P);if(Object.getOwnPropertySymbols){var U=Object.getOwnPropertySymbols(P);x&&(U=U.filter(function(F){return Object.getOwnPropertyDescriptor(P,F).enumerable})),I.push.apply(I,U)}return I}function p(P){for(var x=1;x<arguments.length;x++){var I=arguments[x]!=null?arguments[x]:{};x%2?c(Object(I),!0).forEach(function(U){k(P,U,I[U])}):Object.getOwnPropertyDescriptors?Object.defineProperties(P,Object.getOwnPropertyDescriptors(I)):c(Object(I)).forEach(function(U){Object.defineProperty(P,U,Object.getOwnPropertyDescriptor(I,U))})}return P}function d(P,x){if(!(P instanceof x))throw new TypeError("Cannot call a class as a function")}function h(P,x){for(var I=0;I<x.length;I++){var U=x[I];U.enumerable=U.enumerable||!1,U.configurable=!0,"value"in U&&(U.writable=!0),Object.defineProperty(P,U.key,U)}}function w(P,x,I){return x&&h(P.prototype,x),I&&h(P,I),Object.defineProperty(P,"prototype",{writable:!1}),P}function y(P,x){if(typeof x!="function"&&x!==null)throw new TypeError("Super expression must either be null or a function");P.prototype=Object.create(x&&x.prototype,{constructor:{value:P,writable:!0,configurable:!0}}),Object.defineProperty(P,"prototype",{writable:!1}),x&&v(P,x)}function v(P,x){return v=Object.setPrototypeOf||function(U,F){return U.__proto__=F,U},v(P,x)}function S(P){var x=g();return function(){var U=A(P),F;if(x){var j=A(this).constructor;F=Reflect.construct(U,arguments,j)}else F=U.apply(this,arguments);return m(this,F)}}function m(P,x){if(x&&(t(x)==="object"||typeof x=="function"))return x;if(x!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return f(P)}function f(P){if(P===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return P}function g(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function A(P){return A=Object.setPrototypeOf?Object.getPrototypeOf:function(I){return I.__proto__||Object.getPrototypeOf(I)},A(P)}function k(P,x,I){return x in P?Object.defineProperty(P,x,{value:I,enumerable:!0,configurable:!0,writable:!0}):P[x]=I,P}var E=(0,a.canUseDOM)()&&cA,_=function(P){y(I,P);var x=S(I);function I(U){var F;return d(this,I),F=x.call(this,U),k(f(F),"innerSliderRefHandler",function(j){return F.innerSlider=j}),k(f(F),"slickPrev",function(){return F.innerSlider.slickPrev()}),k(f(F),"slickNext",function(){return F.innerSlider.slickNext()}),k(f(F),"slickGoTo",function(j){var Ae=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return F.innerSlider.slickGoTo(j,Ae)}),k(f(F),"slickPause",function(){return F.innerSlider.pause("paused")}),k(f(F),"slickPlay",function(){return F.innerSlider.autoPlay("play")}),F.state={breakpoint:null},F._responsiveMediaHandlers=[],F}return w(I,[{key:"media",value:function(F,j){E.register(F,j),this._responsiveMediaHandlers.push({query:F,handler:j})}},{key:"componentDidMount",value:function(){var F=this;if(this.props.responsive){var j=this.props.responsive.map(function(Z){return Z.breakpoint});j.sort(function(Z,Pe){return Z-Pe}),j.forEach(function(Z,Pe){var ve;Pe===0?ve=(0,i.default)({minWidth:0,maxWidth:Z}):ve=(0,i.default)({minWidth:j[Pe-1]+1,maxWidth:Z}),(0,a.canUseDOM)()&&F.media(ve,function(){F.setState({breakpoint:Z})})});var Ae=(0,i.default)({minWidth:j.slice(-1)[0]});(0,a.canUseDOM)()&&this.media(Ae,function(){F.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(F){E.unregister(F.query,F.handler)})}},{key:"render",value:function(){var F=this,j,Ae;this.state.breakpoint?(Ae=this.props.responsive.filter(function(L){return L.breakpoint===F.state.breakpoint}),j=Ae[0].settings==="unslick"?"unslick":p(p(p({},o.default),this.props),Ae[0].settings)):j=p(p({},o.default),this.props),j.centerMode&&(j.slidesToScroll>1,j.slidesToScroll=1),j.fade&&(j.slidesToShow>1,j.slidesToScroll>1,j.slidesToShow=1,j.slidesToScroll=1);var Z=n.default.Children.toArray(this.props.children);Z=Z.filter(function(L){return typeof L=="string"?!!L.trim():!!L}),j.variableWidth&&(j.rows>1||j.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),j.variableWidth=!1);for(var Pe=[],ve=null,D=0;D<Z.length;D+=j.rows*j.slidesPerRow){for(var G=[],V=D;V<D+j.rows*j.slidesPerRow;V+=j.slidesPerRow){for(var te=[],N=V;N<V+j.slidesPerRow&&(j.variableWidth&&Z[N].props.style&&(ve=Z[N].props.style.width),!(N>=Z.length));N+=1)te.push(n.default.cloneElement(Z[N],{key:100*D+10*V+N,tabIndex:-1,style:{width:"".concat(100/j.slidesPerRow,"%"),display:"inline-block"}}));G.push(n.default.createElement("div",{key:10*D+V},te))}j.variableWidth?Pe.push(n.default.createElement("div",{key:D,style:{width:ve}},G)):Pe.push(n.default.createElement("div",{key:D},G))}if(j==="unslick"){var B="regular slider "+(this.props.className||"");return n.default.createElement("div",{className:B},Z)}else Pe.length<=j.slidesToShow&&(j.unslick=!0);return n.default.createElement(r.InnerSlider,s({style:this.props.style,ref:this.innerSliderRefHandler},j),Pe)}}]),I}(n.default.Component);e.default=_})(Fm);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(Fm);function n(i){return i&&i.__esModule?i:{default:i}}var r=t.default;e.default=r})(zm);var dA=Sh(zm);const Us=({data:e})=>u("div",{className:"slider-carousel",children:u(dA,{...{dots:!0,infinite:!1,speed:500,slidesToShow:1,slidesToScroll:1,initialSlide:0,responsive:[{breakpoint:1024,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]},children:e.map((n,r)=>C("div",{children:[n.type==="mp4"&&u("video",{className:"img-game",autoPlay:!0,loop:!0,src:n.img,children:u("track",{kind:"captions"})}),n.type!=="mp4"&&u("img",{className:"img-game",src:n.img,alt:n.title}),u("p",{children:n.description}),n.page_url!==void 0&&C(An,{children:[u("br",{}),u("a",{className:"see-page",href:n.page_url,target:"_blank",rel:"noreferrer",children:"Click para Ver P\xE1gina \u{1F440}"})]})]},r))})});var fA="/Portafolio_PW3/assets/Etambal2018_.aedc0ff0.png",pA="/Portafolio_PW3/assets/Etambal2018Pre.2fa2b8a5.png",mA="/Portafolio_PW3/assets/Etambal2019.978f70c5.png";const hA=[{img:pA,title:"etambal-2018",description:"Etambal 2018 - Robotics [San Marcos]: The development of a smart city (model size) was carried out, in which we used Arduino and Android Studio so they could communicate with each other."},{img:fA,title:"etambal-2018 Win",description:"Fortunately, we ended up winning the competition. We won a trophy and a medal for each team member. Without a doubt, it was a beautiful experience, enjoyable and full of learning."},{img:mA,title:"etambal-2019",description:"Etambal 2019 - Robotics [Peten]: We decided to participate again (but with fewer members). Like last year, Arduino was also used for the project and for the app, Xamarin together with C#."}];var gA="data:image/png;base64,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",vA="data:image/png;base64,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",yA="data:image/png;base64,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",SA="data:image/png;base64,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",AA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAASLSURBVHic7Zl9TJVVHMc/1wyVF8lhiIJBLSJZXvsjy8owsYKwWpDilkbDuZovZc7VqOQauGy5BDWz4WAuREtboZGxcCjTas5qZS0sRRBLM4vxKm8XvP1xducunOc+l8uV81x5vv89v/M7z/mez73PebU46nAwjDVCtQHVMgGoNqBaJgDVBlTLBKDagGqZAFQbUC0TgGoDqmUCUG1AtUwAqg2olglAtQHVMgGoNqBaJgDVBlTLBKDagGqZAFQbUC0TgGoDqjXsAYwc6gb/vgRvbeofDw+Ddav16/91EUpKoeoYnKmHhiYIDoTICIiJgpTZkD4XRgV45scy1LfDJ2sg/tH+8dgYOHVYu15nF2S9Cx+WQLfdfRuTJsDWHEhN0vfjF59ASxskpMPmHfqdB7jwDzyzFDYU6Of6BYBnV8L3vwysjsMh/jGflLnPMzyArw7DgUPe1XU4YFk2NDRq5wz5IDhQFe6Rx8eMhhUZcI8VLrdD6ddQVumaEx4G+dkQNk77/YYHUPmtPF5aAEkJV58z54sx4pVc8ZyRBnlr3HceDA6g9bIYAPsq4mbXzju1MhPqz0PyLHjsIc/aMDSAK1fk8fYO8X1bLP3L8tYMrA1DD4Jjg+ULmpY22PGpb9owNACLBaZb5WUvvgFvvgdt7YNrw9AAAOalyOM9vbD+A4iZCWvz4eK/3r3f8ACWLBDrfC01NELuFoh+EJZkQd2fA3u/4QEEBcLuzfqbm247FO2BuERY/JrnIAwPACDhXviiEEJD9HPtPWKAvCsJthbr5/sFABDz+olymJvoWX57B7y0FpbbxJSpJb8BABAdCV8WwbFSeMJDENt2ut8V+hUAp+67G8qK4Ph+WPg03KiznLPlwbkL8jK/BODUdCuU5EPtUbEM1gLRbRcHKTL5NQCnoiJgkw1+KIMJ4+U5B7+Rx68LAE5Z74SPNsrLas7K49cEwKHvtMv+0zicCA7SrvNHLaRkwu79+m0/PEMeb2mTb658CuBUHSRlwJyFsPeAPEfrlxgv2bc3t8Lqt2FqEpRXidOdEyfde9BaAIWGwAhJb30CoKMTsjeCNRkqjorYC6/Dz9WuefYe2P6x/B1xt7k+F38Od8yGvEJRDwSQWQvgs3L53N7UAs9rHK3fOlkeH/R5QFc3THscTp91jTe3woxUWJQK06aINfu+Cu1fMPEB1+fac3CpoX9ecyvMWwZT4yAtWdwFtLXD72dg1z4BQaYn58jjPrkXWG4TCw5vFRkBNVUwetTVWGcXzJwPP/46WHcQOAaqD4qFVF/55BPYkAXxsd7Xz13l2nkQz6UFcHv04LwBrH9V3nnwEYCgQKgo9g7CigxYnC4vmzwRjuzVHtn1ZLGA7WWxSNKSz2aByAixRl+6CEbeoJ8fGgLb1sH7Oe7zJoZD5S7Y/g7cMslzP/GxULETcla5z7smd4P158WAdOQ4VJ+GxmYICICwm8A6BRLvh+fSIMTN3C9Tb6+4FC2rhJ9+EwNlUws4gHFjITpK7BOeekRsoWWHpn015JejRtN1tRT2RiYA1QZUa9gD+B+ejy7SkCazDAAAAABJRU5ErkJggg==",wA="data:image/png;base64,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",CA="data:image/png;base64,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",bA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAUpSURBVHic7ZtbbBRVHIe/M9vdbbftbq/bAtYWSyjBltKKxMZiiNdAI0RiMEEb4otGjQ8IWjTxwYQQ8EaABDUqN28JiRoJIXJJhKgtYgLlkmBBW1NYeqeXtd3ttjvHByxpdGZZltozbfd7nP+ZM7/5tufMmZmO4AZSK6+pew8hqqWQ6Ug0JhMCXUjRrSP31m+qWAdCv74ZqNhQOyPol/UIkaU25TghZEdQhEsvbHygRQOpTamTB5AiO1FPqAep2crXL9mC4EHVmRSQnFt5xa0h9GdUJ1GFkLJak5IM1UGUoYkMjX8mwimJRJtcl7oYiAtQHUA1cQGqA6gmLkB1ANXEBagOoJq4ANUBVBMXoDqAauICVAdQTVyA6gCqiQtQHUA1cQGqA6hmygtIUB3gdrBpghyPA48rAaddoz8Ypi8wjD8QZiAUjqqPmAXkZyVSvWh6rLtHZPuhZnoHhg1rs3JcPDovk/uL0inMScKRYPxHPBAK03C1n5N/9HHgVAe+a0HDdjELyHY7WLEwJ9bdI7LzmO8/AnLTnKxZms/DxZmIKF7luBw2ygrclBW4sQnYceSyYbsJMQRK7kxlS3URGSn2Me/b8gK8bgfbVs/B4/p/olpewKuPF0Q8+bAuaeoI0OUfItlpw+txkJViR9Oie+UZs4CWnhC7j/tM69PSnDxWavw/F/vqWiPO0n8Fr9cyU+0snmv88lqX8NHRy3xV23Kj/QhJDo3KonQeKs5k8dz0iOcRswDftSDbvm82rS8s9JgK+OQHH53+0E2PUV7gxmbyS+443MzOY8Y/QCCkc+RcF0fOdTEj3UleVqLpMSw9BLLdDtPaTw09UfXh6x7E1z1oWrf0StBpN49XnJcyJsewtICOPvNh8kpVPvPzU2/7GJYWcLqpDymNay6HjY+fu5u1VQWkJcc+ki0twNc9yC+/95rWbZrg6cppHKy5h/XLZjIjw3yyM8PSAgDeOdDE4JAesU2iXWNlRS7frZ3P5lWzmT0tOer+LS+gqT3Aui8aCA1HlgCgaYJHSjL58uV5vLmiMKrVo+UFAPzc0MOzH56nudP4ju7faAKeuNfL3hdLuMubFLntWAQcDy74+lm59QzbDzXT3T8U1T55mYl8+nxxxLlhwggACA3r7Drmo2rzKTZ828il1oGb7uNxJfDWk4Wm9QklYITgkM43J9t4ausZXtp1gYst/RHbl890U2qyZpiQAkZTd7GHVdvPsml/E8Nhk0UDUFlkfFM04QXA9TvDfXWtvHvgT9M2BdnG84ClBUTz6Gs0X59sM71cupw2w+2WFrCkNIvqRdOJ8tkGdpt5wy6/8ZXD0gLsCRprluaz+4USFs/NiChCE1CzbKbpU+LG9oDhdks/DxihOC+F96uLaOsNceJSD2eb/XT6h+gfDONJSqDAm8SS0ixm5bpM+zh6vstw+4QQMEKOx8HyBV6WL/De0n6Hz3Zxpct4FWnpITAWtPYMsnl/k2l9Ugv47Wo/qz84H3HpbOkhUHuxh89+vEpVWfYtvRRpbA+w57iPg/WdhHXzxRGAmF9Tqwsx9t8Ned0OKucYr74Onu4geJN7/NEIAYVeF/PuTOWOTCe5aU5cDhtOu0ZYl/gDw7T2hmjuDPBrY5/peDfoWRdl6+s6QE6djyZHI2SHJqT8XHUOZQhtrwCplb1e24oU2arzjCcS2uo3VUzXQOhBES4FOlSHGkfaB7XhMhD6qMlPamVvnHgbndVABshJdokUOlK/hk3bc3rjfa+NfD7/Nyd/jHJDpjheAAAAAElFTkSuQmCC";const kA=[{var:"0",ref_href:"https://www.flaticon.com/free-icons/c-sharp",title:"c sharp icons",img_code:vA},{var:"1",ref_href:"https://www.flaticon.com/free-icons/typescript",title:"typescript icons",img_code:bA},{var:"2",ref_href:"https://www.flaticon.com/free-icons/javascript",title:"javascript icons",img_code:AA},{var:"3",ref_href:"https://www.flaticon.com/free-icons/postgre",title:"postgre icons",img_code:gA},{var:"4",ref_href:"https://www.flaticon.com/free-icons/java",title:"java icons",img_code:SA},{var:"5",ref_href:"https://www.flaticon.com/free-icons/python",title:"python icons",img_code:CA},{var:"6",ref_href:"https://www.flaticon.com/free-icons/letter-c",title:"letter c icons",img_code:wA},{var:"7",ref_href:"https://www.flaticon.com/free-icons/css-3",title:"css 3 icons",img_code:yA}];var PA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAABYJJREFUeJztmnuIFVUcx++9PlbM1XV1ZTXRzEJZTbPIR5qV+EdgJD12l0xTfIG2154uZpRgKWmlYRqiFZWhoFBYKkQUQZFWKoalK1praS+zh+9tXf31/d0zd5mdnTnnzNwzdy4xP/jAstxzzvf7mzPnOYlEHHHEEUccccQRRwRB6cQg8CloADvAgKg15S1gtgz8AMjGOVAL2katL/SAyevAv44EMJfB+6B71BpDDRjsA064JCDLUXBb1DpDC3ookYTBOdb775WEC2AR1STaRa03tIDBW8FPkiTwK/EhKI9aa2gBcz3Au5IkMD+DO6LWGlrAXDvwMDgvSQK/LmtBcdR6QwuYGwmOKHrD12BY1FpDC5jrBjZa779XEv4As6IQVwLuBrNDZi74TNETGsGboGu+zN8JjitERcE+MCJs81eCbwvArBd/gRqsL1JhJeA+ko/QhcBFsAmUhZEAfu/PFYBJHb4Do00ngEfmPQVgTpeTYIrpJIwCdSGKPgtet3rbAFCMfUAKtCWxWrwJzCCxNL6oUd9pMNt0Eq4Aw8F4BRPAbk3j/4BHSHM6w+94I3UtiVVho0bdlUaToCGwC4k9vWwhk2U76B2wnRQYCw4q2qgHQ0379BLVF+zVMM7JeQV0MNBmP1IvmraBIhMeZUImgmOa3X6Dm6Bk9fpy8BzYBU6CJtAAjoKtYDro6NJ2fxILIq/2GoyPBw4BaXBK0/wh0M1hvAgsAWcAKTgC7nXRwGPPWUm7u8j0ThIVtgcvkfxkx04TuMthvhhs0zBu5zxY4NDCW+pVil5gbmpEZV3BFnBJ0zxzAHSymW8D3vBpPgv3lskOTTeTOErzan+TKfP8zn3uw3iWpfZ6YGAUuBAwAcyeZPW6UpuuUvCJpH1ex+R2vGZl+VAA88ztjgS8lYN5sgbISTZtvEZ4WdI+rwuCH62hcCX4PaB53kxVNJuvygx8+3NMALPEobFWooGn35n+jc/LZPYJcCagebLKNl9/JavWdYL4OgMJWOFIwKMKHf6mQxToAFaT+02OH3jZOsSWgBTE7zSQgFqH3kXGEoAfdwdbST3Ss7knSYzyst9V2+uH+Pk5mj8Bxtj08rT8tpEE4IcDwZcaT/ZvUEW8e0snvlH8drMjAT3B8RwSsBFjScqmmZfFh3NOAIkbm+81zNeDWzJlajI7RVUCfiPH5gcmJgacCnkAvdqh+0ENzfIE4AeTSRwoqCri3jGwuZwYKGVzcJYXWiSgan0SRirBaR/md4MKh+5ysFPRNs8C7sfpmcOHdOIp0jv6eo9cFhT437MaZXk2aHVkBUPXgA2gUfHOLwAljnb50GSxRtu8X5ng9eSXkfqAgeH1dmePOkZq1vEj6O9WB1Z2vWDwHvAMeBWsBGke7ECrzQweHPc8PinS2Y/wrdNVbsJvBL8oCrOxx0myr+bEkP4qkb8ByOmKi8QGaB7pn1h/wFfzbhVNIvk8nx3p22iIekxTDMPndvPxFNsHMN8XbCb9zRjvRNNelY0Df3oUrCdrpNcUVmZ1cd0kMAetJyndr9PcTHfn6XmNRK8XvEbp6SWau9IWl0ItRnofSZjm48nY4a78BXgNLCTxFQkn5nkS3xDUWU/Sb71cZqFKdKnVEH+7w9PgCtDDr3mrriIS53B+hYYFnxmWqJUbDDTYi/QWU2HzK5m+KfKRhCEUfPtsAp73H4jEvC0JN5D4xiff5vnwY2qk5rNBYpPyVR7N81eo46P23SIgqCOJ5aruCXIQ+M7wHQp425SXgLgKEt8A6Vxw6sLT3EdgDGi90ivEIHHB+TSJhVZQ4/zJznJwPe9Go/YUKKxdKK/u7gcvkrj+5kONU1YvabL+5v99TOLUl7fsg//Xn9HGEUccccQRRxyhxn9+hZ32rBJsTgAAAABJRU5ErkJggg==",EA="data:image/png;base64,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",OA="data:image/png;base64,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",TA="data:image/png;base64,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",xA="data:image/png;base64,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",_A="/Portafolio_PW3/assets/physics.2ec94965.png",DA="/Portafolio_PW3/assets/postgre.2ae9dcb2.png",IA="data:image/png;base64,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";const NA=[{var:"0",ref_href:"https://www.flaticon.com/free-icons/unity",title:"unity icons",img_code:IA},{var:"1",ref_href:"https://www.flaticon.com/free-icons/react",title:"react icons",img_code:_A},{var:"2",ref_href:"https://www.flaticon.com/free-icons/photoshop",title:"photoshop icons",img_code:DA},{var:"3",ref_href:"https://www.flaticon.com/free-icons/google-cloud",title:"google-cloud icons",img_code:EA},{var:"4",ref_href:"",title:"blender icon",img_code:PA},{var:"5",ref_href:"https://www.flaticon.com/free-icons/photoshop",title:"photoshop icons",img_code:xA},{var:"6",ref_href:"https://www.flaticon.com/free-icons/nodejs",title:"nodejs icons",img_code:TA},{var:"7",ref_href:"https://www.flaticon.com/free-icons/linux",title:"linux icons",img_code:OA}];var no="/Portafolio_PW3/assets/shucos_maker.70d76e9a.png",dh="/Portafolio_PW3/assets/img_03.a673f675.png",fh="/Portafolio_PW3/assets/img_04.8c75108a.png",ph="/Portafolio_PW3/assets/img_02.b4ac15de.png";const MA=[{img:dh,title:"Platyfa"},{img:ph,title:"Robotic Slaughter"},{img:fh,title:"Procrastinate"},{img:no,title:"Shucos Maker"}];var RA="/Portafolio_PW3/assets/Aplaudo.bd869e1a.jpg",LA="/Portafolio_PW3/assets/DIPLOMA HT-26.5c867bce.jpg",BA="/Portafolio_PW3/assets/guate-find.35f99d60.jpg",zA="/Portafolio_PW3/assets/mypet_and_me.f525fafc.jpg";const FA=[{img:RA,title:"aplaudo",description:"The university provided a programming competition, so I participated and managed to solve several exercises. I won and qualified for the next round, then a technical interview was held, we were given several tips and thanks to this experience I learned what the process is like to apply for a job and what knowledge is necessary to apply for a job."},{img:BA,title:"guate-find",description:"One of my classmates invited me to join the group to participate in the Ficohsa 2021 Hackathon. We carried out the Guate-Find project, a project that aimed to find geolocated offers in Guatemala through a mobile application developed in Android Studio."},{img:LA,title:"victory-guate-find",description:"In the end, my team and I managed to win first place in the Geolocated Offers category."},{img:zA,title:"my-pet-and-me",description:"For the Software Engineering course we are working on an original project, which will be a directory of veterinary clinics so that people with pets have an emergency tool in case they cannot find a veterinary clinic at the most critical moment."}],jA=()=>u("div",{className:"App",children:C("div",{className:"page-scroll",children:[u("section",{className:"one-about",children:C("div",{children:[C("h1",{children:["Hello! I","'","m Cristian Laynez"]}),u("br",{}),u("p",{children:"I learned to program when I was 15 years old, my first language was C#"}),u("p",{children:"Since that day I tried to start learning on my own, I consider myself a self-taught person."}),u("p",{children:"Thanks to university education I have been able to learn more about programming and other skills"}),u("p",{children:"such as application design, mathematics, and I have competed in a few hackathons and competitions."})]})}),u("section",{className:"three-about",children:C("div",{children:[u("h1",{className:"slide-right",children:"Hobbies"}),C("ul",{className:"hobbies-list",children:[u("li",{children:"\u{1F3AE} Playing Video Games \u{1F3AE}"}),u("li",{children:"\u{1F4BB} Programming \u{1F4BB}"}),C("li",{children:["\u{1F3B5} Listening to Music \u{1F3B5} (especially from the 80","'","s and 90","'","s)"]}),u("li",{children:"\u2694 Watching Anime \u2694"})]})]})}),u("section",{className:"four-about",children:u("div",{children:u("h1",{children:"Academic History"})})}),u("section",{className:"five-about",children:C("div",{children:[u("h1",{children:"Adventist School JUBA - [2016 - 2019]"}),u("p",{children:"From 2016 to 2017 I attended 8th and 9th grade."}),u("p",{children:"From 2018 to 2019 I studied a Computer Science Baccalaureate."}),u("p",{children:"During that time I took the opportunity to learn several things about programming as well as 3D Art and video game development."})]})}),u("section",{className:"five-about-2",children:u(Us,{data:hA})}),u("section",{className:"six-about",children:C("div",{children:[u("h1",{children:"Universidad del Valle de Guatemala - [2020 - 2025]"}),u("br",{}),u("p",{children:"I will never forget that first day at University, my chances of getting in were very low despite having passed the admission exam and being granted a scholarship percentage."}),u("p",{children:"But thanks to my persistence and my family who supported and believed in me, I managed to enter the University and the career of my dreams."}),u("br",{}),u("p",{children:"To this day I have not forgotten my ideals, goals, and dreams, I remain faithful to my dreams and aspirations."}),u("br",{}),C("p",{children:["When I hold on to something I really want/desire, I don","'","t let go easily."]})]})}),u("section",{className:"six-about-1",children:u("div",{children:u("h2",{children:"Some outstanding activities and projects carried out at UVG:"})})}),u("section",{className:"six-about-2",children:u(Us,{data:FA})}),u("hr",{className:"hr-contact"}),u("section",{className:"seven-about",children:u(ju,{})})]})});var UA="/Portafolio_PW3/assets/debuse_the_bomb.68cb1176.png",Sl="/Portafolio_PW3/assets/defuse_the_bomb_2.f40216d0.png",Al="/Portafolio_PW3/assets/draculae.ca397b39.png",$d="/Portafolio_PW3/assets/img_00.af64a1d6.png",mh="/Portafolio_PW3/assets/img_01.14f512a7.png",VA="/Portafolio_PW3/assets/img_02.eb1acc56.png",GA="/Portafolio_PW3/assets/img_04.d0c73d5e.png",HA="/Portafolio_PW3/assets/img_05.b06f8304.png",WA="/Portafolio_PW3/assets/img_06.f5008ce2.png",QA="/Portafolio_PW3/assets/img_07.dbf6450e.png",YA="/Portafolio_PW3/assets/img_08.06f9ece4.png",hh="/Portafolio_PW3/assets/MainBackGroundV1_02.c446f5ae.jpg",gh="/Portafolio_PW3/assets/img_01.597f6788.png",KA="/Portafolio_PW3/assets/img_02.bc2c7a0c.png",qA="/Portafolio_PW3/assets/img_03.bbc65d67.png",XA="/Portafolio_PW3/assets/img_05.838150cb.png",JA="/Portafolio_PW3/assets/level_selector.a0d9655c.png",ro="/Portafolio_PW3/assets/main_title.79452a1d.png",ZA="/Portafolio_PW3/assets/img_0.6ad22c26.png",vh="/Portafolio_PW3/assets/img_01.2ed1b461.png",$A="/Portafolio_PW3/assets/img_03.f2d87167.png",io="/Portafolio_PW3/assets/main_title.29998975.png",oo="/Portafolio_PW3/assets/SvsM.dcb877f8.png",ew="/Portafolio_PW3/assets/SvsM_1.d114bdab.png",tw="/Portafolio_PW3/assets/SvsM_2.96b61d4c.png",nw="/Portafolio_PW3/assets/SvsM_3.cd0b90d5.png",rw="/Portafolio_PW3/assets/SvsM_4.b23c8633.png";const Vs=[{id:"platyfa",folder:"platyfa",title:"Platyfa",subtitle:"Goldenfy Studios - Action Adventure",description:"An innovative action-adventure game with unique platforming mechanics, immersive storytelling, and stunning visual design. Features dynamic combat system and exploration-based gameplay.",longDescription:"Platyfa represents our flagship project at Goldenfy Studios. This action-adventure game combines traditional platforming with innovative mechanics that challenge player expectations. The game features a rich narrative, diverse environments, and a unique art style that brings the world to life.",status:"In Development",category:"Action/Adventure",platform:"PC",year:"2024-2025",coverImage:$d,screenshots:[$d,mh,VA,dh,GA,HA,WA,QA,YA],backgroundImage:hh,featured:!0,technologies:["Unity","C#","Blender","Photoshop","New Input System","FMOD","Custom Editor Build Tools"],team:"Goldenfy Studios Team",teamSize:"6 developers and 3 musicans",development:{startDate:"2024-01",progress:45,estimatedRelease:"Q3 2025"},features:["Dynamic Combat System","Rich Narrative","Unique Art Style","Multiple Environments"]},{id:"procrastinate",folder:"procrastinate",title:"Procrastinate",subtitle:"Productivity Puzzle Game",description:"Procrastinate is a point-and-click game where you must procrastinate without getting caught.",longDescription:"Procrastinate is a point-and-click game where your goal is to procrastinate on your tasks without being discovered. Outsmart your supervisor, find clever distractions, and balance your time to avoid getting caught while slacking off.",status:"Released",category:"Puzzle and Mini Games",platform:"PC/Web",year:"2024",coverImage:ro,screenshots:[ro,JA,gh,KA,qA,fh,XA],backgroundImage:ro,link:"https://crislayb.itch.io/procrastinate",featured:!0,technologies:["Unity","C#","Development"],team:"Goldenfy Studios Team",teamSize:"2 developers",development:{startDate:"2023-01",progress:100,releaseDate:"2023-08"},features:["Psychology-based Mechanics","Progressive Difficulty","Achievement System","Funny simulations","Mini Games Diversity"]},{id:"robotic-slaughter",folder:"robotic_slaughter",title:"Robotic Slaughter",subtitle:"Sci-Fi Action Shooter",description:"Fast-paced action shooter featuring intense robot combat, advanced AI enemies, and adrenaline-pumping gameplay mechanics.",longDescription:"Robotic Slaughter is a high-octane action shooter that pits players against waves of robotic enemies. The game features advanced AI, destructible environments, and a variety of weapons. Developed as a university project, it showcases technical skills in AI programming and game mechanics.",status:"Paused",category:"Action/Shooter",platform:"PC",year:"2019",coverImage:io,screenshots:[io,ZA,vh,ph,$A],backgroundImage:io,link:"https://crislayb.itch.io/robotic-slaughter",featured:!0,technologies:["Unity","C#","AI Programming","Pixel Art","Photoshop"],team:"Solo Project (and then Goldenfy Studios Team)",teamSize:"2 developers and 2 musicans",development:{startDate:"2022-03",progress:50,completionDate:"2022-06"},features:["Enemy AI","Multiple Weapon Types",'Unique Events "Mini Games" System',"Wave-based Combat","Score System","Pixel Art 2D"]},{id:"samurais-vs-mongoles",folder:"samurais_vs_mongoles",title:"Samurais vs Mongoles",subtitle:"Historical Strategy Game",description:"Epic historical strategy game featuring tactical battles between samurai warriors and mongol forces in feudal Japan.",longDescription:"This strategy game recreates the historical conflicts between samurai and mongol forces. Players command armies, manage resources, and engage in tactical battles. The game emphasizes historical accuracy while providing engaging strategic gameplay.",status:"Prototype",category:"Strategy/Historical",platform:"PC",year:"2024",coverImage:oo,screenshots:[oo,ew,tw,nw,rw],backgroundImage:oo,featured:!1,technologies:["Unity","C#","Strategy AI"],team:"University Project",teamSize:"1 developer",development:{startDate:"2022-08",progress:100,completionDate:"2022-12"},features:["Turn-based Strategy","Historical Accuracy","Unit Management","Tactical Combat","Campaign Mode"]},{id:"defuse-the-bomb",folder:"_other_games",title:"Defuse the Bomb",subtitle:"Puzzle/Arcade Game",description:"Intense puzzle game where players must defuse complex bombs under extreme time pressure using logic and quick thinking.",longDescription:"Developed during a hackathon, this game challenges players to defuse increasingly complex bombs. Each level presents unique puzzle mechanics and time constraints, creating a thrilling experience that tests both logic and reflexes.",status:"Completed",category:"Puzzle/Arcade",platform:"PC",year:"2025",coverImage:Sl,screenshots:[UA,Sl],backgroundImage:Sl,link:"https://darielvilla.itch.io/defuse-the-bombs",featured:!1,technologies:["Unity","C#","Development"],team:"Hackathon Project",teamSize:"1 developer",development:{startDate:"2021-10",progress:100,completionDate:"2021-10",developmentTime:"48 hours"},features:["Time-based Puzzles","Progressive Difficulty","Optimized","Leaderboard System","Quick Play Mode"]},{id:"draculae",folder:"_other_games",title:"Draculae",subtitle:"Multiplayer",description:"You're stealing gold in a cave with your partner when you realize there's a massive dragon right next to you! But it's still asleep.",longDescription:"You're stealing gold in a cave with your partner when you realize there's a massive dragon right next to you! But it's still asleep.",status:"Prototype",category:"Adventure",platform:"PC",year:"2025",coverImage:Al,screenshots:[Al],backgroundImage:Al,link:"https://crislayb.itch.io/draculae",featured:!1,technologies:["Unity","C#","Development"],team:"Hackathon Project",teamSize:"5 developer",development:{startDate:"2021-05",progress:100,status:"On Hold"},features:["Atmospheric Horror","Dynamic Lighting","Audio-driven Gameplay","Gothic Art Style","Narrative Focus"]},{id:"shucos-maker",folder:"_other_games",title:"Shucos Maker",subtitle:"Cultural Cooking Simulation",description:"Fun cooking simulation game celebrating traditional Guatemalan street food culture with authentic recipes and cooking mechanics.",longDescription:"Shucos Maker is a cultural project that celebrates Guatemalan street food tradition. Players learn to prepare traditional shucos while experiencing the vibrant culture. The game combines education with entertainment, promoting cultural awareness.",status:"Paused",category:"Simulation/Cultural",platform:"PC/VR",year:"2022",coverImage:no,screenshots:[no],backgroundImage:no,featured:!1,technologies:["Unity","C#","Cultural Research","VR Development","Blender","Oculus Integration"],team:"Simulation Project",teamSize:"1 developer",development:{startDate:"2022-06",progress:100,completionDate:"2023-10"},features:["Authentic Recipes","Cultural Education","Cooking Mechanics","Local Ingredients","Traditional Music"]}],iw={platyfa:{contentSections:[{type:"hero",data:{showVideo:!1,showGallery:!0,galleryType:"carousel"}},{type:"overview",data:{showTechnicalSpecs:!0,showTeamInfo:!0,showDevelopmentTimeline:!0}},{type:"features",data:{displayStyle:"cards",showIcons:!0}},{type:"development",data:{showProgress:!0,showTimeline:!0,showChallenges:!0}},{type:"gallery",data:{layout:"masonry",showCaptions:!0}},{type:"code-showcase",data:{showCodeSnippets:!0,codeLanguage:"csharp",showArchitecture:!0}}],customContent:{challenges:["Implementing dynamic combat system with fluid animations","Creating seamless level transitions","Optimizing performance for complex environments","Balancing exploration with linear narrative progression"],developmentHighlights:["Custom editor tools development","Advanced shader programming","Multi-platform optimization","Procedural environment generation"],artStyleInfo:{concept:"Unique blend of realistic environments with stylized character design",influences:["Studio Ghibli animations","Ori and the Blind Forest","Hollow Knight"],techniques:["Hand-painted textures","Dynamic lighting","Particle effects"]},codeSnippets:[{title:"Third Person Movement",language:"csharp",description:"Movement for the main character Gaus",code:`using System.Collections;
using UnityEngine;
using Cinemachine;

public enum Camerastyle
{
    Exploration,
    Combat
}

public class ThirdPersonMovement : MonoBehaviour, IDamageable
{
    private GatherInput _gInput;
    
    [SerializeField] private CharacterController controller;    
    private float speed;
    private int _life = 5;

    [Header("Reference")]
    [SerializeField] private Transform player;
    [SerializeField] private Transform orientation;

    [Header("Camera")]
    [SerializeField] private Camera mainCamera;
    [SerializeField] private Transform _camera;
    [SerializeField] private GameObject explorationCam;
    [SerializeField] private GameObject combatCam;
    [SerializeField] private float turnSmoothTime = 0.1f; 
    [SerializeField] private Camerastyle currentStyle;        
    private CinemachineFreeLook _cinemachineExploration;
    private CinemachineFreeLook _cinemachineCombat;
    // [SerializeField] private Transform combatLookAt;

    [Header("Zoom")]
    [SerializeField] private CinemachineFreeLook _cameraZoom;
    [SerializeField] private float normalFOV = 40f;
    [SerializeField] private float zoomedFOV = 20f;
    [SerializeField] private float zoomSpeed = 10f;
    // bool isZoomed = false; 

    [Header("Movement")]
    [SerializeField] private float walkingSpeed = 8f;
    [SerializeField] private float sprintSpeed = 20f;
    [SerializeField] private float defenseSpeed = 2f;
    private bool _isRunning = false;
    private float _horizontal = 0f;
    private float _vertical = 0f;
 
    float turnSmoothVelocity;

    [Header("Jump")]
    [SerializeField] private float jumpHeight = 3f;
    [SerializeField] private float gravity = -9.81f;
    Vector3 velocity;
    [SerializeField] private Transform groundCheck;
    [SerializeField] private float groundDistance = 0.4f;
    [SerializeField] private LayerMask groundMask;
    private bool isGrounded;

    [Header("Attack")]
    [SerializeField] private Transform attackSphere;
    [SerializeField] private LayerMask _enemyLayers;
    [SerializeField] private float attackRange = 1f;        

    [Header("Invulnerable Effect")]
    [SerializeField] private float _effectDuration = 3f;
    [SerializeField] private SkinnedMeshRenderer _characterRenderer;
    [SerializeField] private MeshRenderer _armCharacterRenderer;
    [SerializeField] private Color _invulnerableColor = Color.gray;
    private Color _originalColorCharacter;
    private Color _originalColorArm;
    private bool _invulnerable = false;
    public bool Invulnerable { get { return _invulnerable;} }
    
    public int Health { get; set; }
    
    // ? ===>  Private Attributes
    private bool isInDefense = false;    
    
    // private Vector3 lastCameraForward;
    private Quaternion lastCameraRotation;

    // Animation Connection
    private GausAnimations _animations;
    
    public bool IsRunning { get { return _isRunning; }}
    public bool IsGrounded { get { return isGrounded; }}
    public bool IsInDefense { get { return isInDefense; }}

    private void Awake()
    {
        _gInput = GetComponent<GatherInput>();
    }

    private void Start() 
    {
        _animations = GetComponent<GausAnimations>();

        _cinemachineExploration = explorationCam.GetComponent<CinemachineFreeLook>();
        _cinemachineCombat = combatCam.GetComponent<CinemachineFreeLook>();
        
        Cursor.visible = false;
        Cursor.lockState = CursorLockMode.Locked;
        _originalColorCharacter = _characterRenderer.material.color;
        _originalColorArm = _armCharacterRenderer.material.color;
        Health = _life;
        // lastCameraForward = explorationCam.transform.forward;
        lastCameraRotation = explorationCam.transform.rotation;        
    }

    private void OnDrawGizmosSelected()
    {
        if (attackSphere == null)
            return;

        Gizmos.DrawWireSphere(attackSphere.position, attackRange);
    }

    // Update is called once per frame
    private void Update()
    {               
        if(!GameManager.Instance.Playing) return;
        
        if(GameManager.Instance.Paused) return;
        
        // Ground Check
        isGrounded = Physics.CheckSphere(groundCheck.position, groundDistance, groundMask);
        if(isGrounded && velocity.y < 0)
        {
            velocity.y = -2f; // A small downward force to ensure the character stays grounded
        }
        
        HandleInputs();
        Movement();        
        SprintLogic();
        // DefenseLogic();
        // ControlGunLookAt();
    }

    private void HandleInputs()
    {        
        //Jump -space        
        if(_gInput.Jump && isGrounded)
        {
            velocity.y = Mathf.Sqrt(jumpHeight * -2f * gravity);            
            GameManager.Instance.PlayerDataUpdate(PlayerDataEnum.jumps);
            AudioManager.Instance?.PlayOneShot(FMODEvents.instance.gaussJump, transform.position);
            _animations.Jumping();
            _gInput.ResetJump();
        }
        velocity.y += gravity * Time.deltaTime;        
        controller.Move(velocity * Time.deltaTime);

        //Crouch -ctrl
        if(_gInput.Attack)
        {
            StartCoroutine(Attack());
            _gInput.ResetAttack();
        }

        // Hide Cursor When Click is presed
        if((Cursor.visible || Cursor.lockState == CursorLockMode.None) && GameManager.Instance.Playing)
        {
            if(_gInput.Shoot || _gInput.Sight)
            {
                Cursor.visible = false;
                Cursor.lockState = CursorLockMode.Locked;
            }
        }
    }

    private void SprintLogic()
    {
        if(isInDefense) return;

        if(_gInput.Run) _isRunning = !_isRunning;

        if(_horizontal < 0.5f && _horizontal > -0.5f && _vertical < 0.5f && _vertical > -0.5f)
        {
            _isRunning = false;
        }
        
        speed = _isRunning ? sprintSpeed : walkingSpeed; 
        _gInput.ResetRun();
    }

    private void Movement()
    {
        Vector2 movement = _gInput.Movement;
        _horizontal = movement.x;
        _vertical = movement.y;

        // Camera Style Controll
        if (currentStyle == Camerastyle.Exploration)
        {            
            Vector3 direction = new Vector3(_horizontal, 0f, _vertical).normalized;

            if (direction.magnitude >= 0.1f)
            {
                float targetAngle = Mathf.Atan2(direction.x, direction.z) * Mathf.Rad2Deg + _camera.eulerAngles.y;
                float angle = Mathf.SmoothDampAngle(transform.eulerAngles.y, targetAngle, ref turnSmoothVelocity, turnSmoothTime);
                transform.rotation = Quaternion.Euler(0f, angle, 0f);

                Vector3 moveDir = Quaternion.Euler(0f, targetAngle, 0f) * Vector3.forward;
                controller.Move(moveDir.normalized * speed * Time.deltaTime);
            }            
        }

        else if (currentStyle == Camerastyle.Combat)
        {
            // Combat mode movement: Directly behind the player, player a bit to the left of screen
            Vector3 direction = transform.forward * _vertical + transform.right * _horizontal;

            if (direction.magnitude >= 0.1f)
            {
                Vector3 moveDir = direction.normalized;
                controller.Move(moveDir * speed * Time.deltaTime);
            }

            // Optionally, adjust the player's rotation to align with the camera's forward direction
            // This is if you want the player to always face the same direction as the camera in combat mode
            Vector3 forward = _camera.forward;
            forward.y = 0; // Keep the player rotation _horizontal
            transform.rotation = Quaternion.LookRotation(forward);                        
        }

        _animations.RuningAnimation(_isRunning);
        _animations.WalkingAnimation(_horizontal != 0 || _vertical != 0);
        _animations.JumpingInStop(!isGrounded);
    }
    
    public void SwitchCameraStyle(Camerastyle newStyle)
    {
        // Store the current camera's forward direction before switching
        if (currentStyle == Camerastyle.Exploration)
        {
            // lastCameraForward = explorationCam.transform.forward;
            lastCameraRotation = explorationCam.transform.rotation;
        }
        else if (currentStyle == Camerastyle.Combat)
        {
            // lastCameraForward = combatCam.transform.forward;
            lastCameraRotation = combatCam.transform.rotation;
        }

        if (newStyle == Camerastyle.Exploration)
        {
            explorationCam.SetActive(true);
            combatCam.SetActive(false);
            // Apply the stored camera rotation to the new active camera
            explorationCam.transform.rotation = lastCameraRotation;
        }
        else if (newStyle == Camerastyle.Combat)
        {
            float xValueToSet = _cinemachineExploration.m_XAxis.Value;            
                        
            explorationCam.SetActive(false);
            combatCam.SetActive(true);
            // Apply the stored camera rotation to the new active camera

            if(newStyle != currentStyle) _cinemachineCombat.m_XAxis.Value = xValueToSet;         
            combatCam.transform.rotation = lastCameraRotation;
        }

        currentStyle = newStyle;
    }

    private IEnumerator Attack()
    {        
        Collider[] hitEnemies = Physics.OverlapSphere(attackSphere.position, attackRange, _enemyLayers);
        GameManager.Instance.PlayerDataUpdate(PlayerDataEnum.frequency_melee_attack);

        foreach (Collider enemyColl2D in hitEnemies)
        {
            IDamageable enemyImpact = enemyColl2D.GetComponent<IDamageable>();
            if(enemyImpact != null)
            {
                GameManager.Instance.PlayerDataUpdate(PlayerDataEnum.impact_melee_attack);
                enemyImpact.TakeDamage(1);
            }
        }

        AudioManager.Instance?.PlayOneShot(FMODEvents.instance.gaussClaws, transform.position);
        _animations.Garrotazo();
        yield return new WaitForSeconds( 1.0f );        
    }

    public void TakeDamage(int pDamage)
    {
        int damage = Health - pDamage;

        if (damage > 0 && !_invulnerable)
        {
            Health = damage;
            StartCoroutine(InvulnerabilityEffect());
            GameManager.Instance.PlayerDataUpdate(PlayerDataEnum.damage_received);
        }

        if(damage <= 0)
        {
            Health = 0;            
            GameManager.Instance.GameOver();            
            Cursor.visible = true;
            Cursor.lockState = CursorLockMode.None;
            _animations.KO();
        }
    }

    private IEnumerator InvulnerabilityEffect()
    {
        _invulnerable = true;
        _characterRenderer.material.color = _invulnerableColor;
        _armCharacterRenderer.material.color = _invulnerableColor;
        yield return new WaitForSeconds(_effectDuration);
        _characterRenderer.material.color = _originalColorCharacter;
        _armCharacterRenderer.material.color = _originalColorArm;
        _invulnerable = false;
    }
}`},{title:"Food Box",language:"csharp",description:"Functionallity for the Food Box (The arm of the main character Gaus)",code:`using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Cinemachine;
using UnityEngine.Events;

[Serializable]
public struct Munitions
{
    public GameObject bulletPrefab;
    [Range(0, 100)] public int maximunAmmo;
    [Range(0, 100)] public int ammo;
    public Texture2D textureForFoodBox;
    [Range(0.1f, 1.0f)] public float shootRate;
}

[RequireComponent(typeof(ThirdPersonMovement))]
public class FoodBox : MonoBehaviour
{
    private GatherInput _gInput;

    [SerializeField] private List<Munitions> _bulletPrefabs;
    [SerializeField] float bulletVelocity = 30;
    [SerializeField] float bulletPrefabLifetime = 3f;
    [SerializeField] private Transform bulletSpawn;
    [SerializeField] private Renderer objRenderer;
    [SerializeField] private float maxRange = 100f;
    [SerializeField] private bool infiniteMunition = false;
    [SerializeField] private Mira mira;

    // Checkers for Important Attributes from SerializeField
    public bool LookExists () => mira;
    public bool RendererExists () => objRenderer;
    
    private Texture _originalTextureFoodBox;
    private MunitionDisplay _ammunitionDisplay;

    private MunitionType _bulletSelected = MunitionType.BARRINGTONIA;

    // For Change Bullets from the controller    
    private float crossThreshold = 0.1f; // Define the threshold for the axis    
    private float _canShoot = -1f;    

    private PlayerDataEnum[] _bulletsTypeRegister = new PlayerDataEnum[5]; // Register Data

    public MunitionType BulletSelected() => _bulletSelected;

    private Munitions _MuntionSelected { get { return _bulletPrefabs[(int)_bulletSelected]; }}

    private ThirdPersonMovement _player;
    private GausAnimations _animations;

    private Camera activeCamera;
    private Vector3 targetPoint;
    
    [Space]
    [Header("Bulls Eye Events")]
    [SerializeField] private UnityEvent bullsEyeDetected;
    [SerializeField] private UnityEvent bullsEyeFree;
        
    private void Awake()
    {
        _gInput = GetComponent<GatherInput>();
    }
        
    // Start is called before the first frame update
    private void Start()
    {        
        CinemachineBrain brainCamera = Camera.main.GetComponent<CinemachineBrain>();

         if (brainCamera != null)
        {
            brainCamera.m_CameraActivatedEvent.AddListener(OnCameraChanged);
        }
        else
        {
            Debug.LogError("CinemachineBrain not found on Main Camera!");
        }

        _player = GetComponent<ThirdPersonMovement>();
        _animations = GetComponent<GausAnimations>();

        if(_player == null) Debug.LogError("FoodBox.cs error: ThirdPersonMovement not found.");
        if(_animations == null) Debug.LogError("FoodBox.cs error: Gaus Animations not found.");
        
        // Start Bullets Type Register
        _bulletsTypeRegister[0] = PlayerDataEnum.frequency_barringtonia;
        _bulletsTypeRegister[1] = PlayerDataEnum.frequency_spaggetti;
        _bulletsTypeRegister[2] = PlayerDataEnum.frequency_jelly;
        _bulletsTypeRegister[3] = PlayerDataEnum.frequency_hot_tea;
        _bulletsTypeRegister[4] = PlayerDataEnum.frequency_cake;

        _ammunitionDisplay = FindObjectOfType<MunitionDisplay>();

        if(_bulletPrefabs.Count > 0)
        {
            _originalTextureFoodBox = objRenderer.material.mainTexture;
            ChangeTextureAndMaterialFoodBox();
        }
    }

    private void Update() 
    {
        ChangeBulletType();
        ChangeBulletWitKeys();
        ControlAim();        
    }

    private void ControlAim()
    {                
        bool aimButton = _gInput.Sight;

        if(aimButton) /// Activar Mira
        {
            _animations?.ShootAnimation(true);
            _player?.SwitchCameraStyle(Camerastyle.Combat);
            ControlShootInAimMode();
            if (!mira.isActive) mira.Show();
            return;
        }

        _animations?.ShootAnimation(false);
        _player?.SwitchCameraStyle(Camerastyle.Exploration);
        if(mira.isActive) mira.Hide();
    }

    private void ControlShootInAimMode() 
    {        
        if(_player == null) return;
        
        if(_player.IsInDefense) return;
                                
        bool shotButton = _gInput.Shoot;
                
        bool shootPressed = shotButton && Time.time > _canShoot;
    
        if(shootPressed && AmmoIsEnough())
        {
            // Play sound of munition empty
            return;
        }

        Ray ray = activeCamera.ViewportPointToRay(new Vector3(0.5f, 0.5f, 0));
                
        if (Physics.Raycast(ray, out RaycastHit hit, maxRange))
        {
            Shotable shotableTarget = hit.collider.GetComponent<Shotable>();
            
            if (shotableTarget != null)
            {
                targetPoint = hit.point;
                Debug.DrawLine(ray.origin, hit.point, Color.cyan, 2f);
                bullsEyeDetected.Invoke();
            }
            else
            {
                // targetPoint = hit.collider.transform.position;
                targetPoint = ray.origin + ray.direction * maxRange;
                bullsEyeFree.Invoke();
            }
        }
        else
        {
            targetPoint = ray.origin + ray.direction * maxRange;
            // Debug.DrawLine(ray.origin, targetPoint, Color.blue, 2f);
            bullsEyeFree.Invoke();
        }
                
        // Instantiate Bullet
        if (shootPressed)
        {       
            _animations?.ShootAnimation(true);                
            _canShoot = Time.time + _MuntionSelected.shootRate;
            Shoot();
        }
    }

    private void Shoot()
    {        
        Vector3 bulletDirection = (targetPoint - bulletSpawn.position).normalized;

        GameObject bullet = Instantiate(_bulletPrefabs[(int)_bulletSelected].bulletPrefab, 
                                        bulletSpawn.position, Quaternion.identity);

        Rigidbody rb = bullet.GetComponent<Rigidbody>();
        if (rb != null)
        {
            rb.velocity = bulletDirection * bulletVelocity;
            Debug.DrawLine(bulletSpawn.position, bulletSpawn.position + bulletDirection * maxRange, Color.yellow, 2f);
        }

        StartCoroutine(DestroyBulletAfterTime(bullet, bulletPrefabLifetime));
        Munitions munition = _bulletPrefabs[(int)_bulletSelected];

        if(!infiniteMunition) munition.ammo--;

        if(munition.ammo <= 0) 
        {
            munition.ammo = 0;
            objRenderer.material.mainTexture = _originalTextureFoodBox;
        }
        
        _bulletPrefabs[(int)_bulletSelected] = munition;
        _ammunitionDisplay.AmmoText(munition.ammo, munition.maximunAmmo);

        if (munition.ammo == 0)
        {
            objRenderer.material.mainTexture = _originalTextureFoodBox;
        }

        AudioManager.Instance?.PlayOneShot(FMODEvents.instance.foodArmShootNormal, transform.position);
    }


    void OnDestroy()
    {
        CinemachineBrain brainCamera = Camera.main.GetComponent<CinemachineBrain>();
        if (brainCamera != null)
        {
            brainCamera.m_CameraActivatedEvent.RemoveListener(OnCameraChanged);
        }
    }
    
    private void ChangeBulletType()
    {                
        float scrollAxis = _gInput.ScrollAxis;
        bool changingNext = _gInput.ChangeMunitionNext;
        bool changingPrevious = _gInput.ChangeMunitionBefore;
                
        if (scrollAxis > 0f || changingNext)
        {
            _bulletSelected++;
            if ((int)_bulletSelected >= _bulletPrefabs.Count)
                _bulletSelected = 0;

            _ammunitionDisplay.ChangeAmmo((int)_bulletSelected);
            ChangeTextureAndMaterialFoodBox();            
            mira.UpdateColor((int)_bulletSelected);

            _gInput.ResetChangeMunitionNext();
        }

        else if (scrollAxis < 0f || changingPrevious)
        {
            _bulletSelected--;
            if ((int)_bulletSelected < 0)
                _bulletSelected = (MunitionType)(_bulletPrefabs.Count - 1);

            _ammunitionDisplay.ChangeAmmo((int)_bulletSelected);
            ChangeTextureAndMaterialFoodBox();        
            mira.UpdateColor((int)_bulletSelected);

            _gInput.ResetChangeMunitionBefore();
        }        
    }

    private void ChangeBulletWitKeys()
    {        
        if (Input.GetKeyDown(KeyCode.Keypad1))
        {
            _bulletSelected = MunitionType.BARRINGTONIA;
            _ammunitionDisplay.ChangeAmmo((int)_bulletSelected);
            mira.UpdateColor((int)_bulletSelected);
            ChangeTextureAndMaterialFoodBox();
        }
        else if (Input.GetKeyDown(KeyCode.Keypad2) && _bulletPrefabs.Count >= 2)
        {
            _bulletSelected = MunitionType.SPAGGETTI;
            _ammunitionDisplay.ChangeAmmo((int)_bulletSelected);
            mira.UpdateColor((int)_bulletSelected);
            ChangeTextureAndMaterialFoodBox();
        }
        else if (Input.GetKeyDown(KeyCode.Keypad3) && _bulletPrefabs.Count >= 3)
        {
            _bulletSelected = MunitionType.JELLY;
            _ammunitionDisplay.ChangeAmmo((int)_bulletSelected);
            mira.UpdateColor((int)_bulletSelected);
            ChangeTextureAndMaterialFoodBox();
        }
        else if (Input.GetKeyDown(KeyCode.Keypad4) && _bulletPrefabs.Count >= 4)
        {
            _bulletSelected = MunitionType.HOT_TEA;
            _ammunitionDisplay.ChangeAmmo((int)_bulletSelected);
            mira.UpdateColor((int)_bulletSelected);
            ChangeTextureAndMaterialFoodBox();
        }
        else if (Input.GetKeyDown(KeyCode.Keypad5) && _bulletPrefabs.Count >= 5)
        {
            _bulletSelected = MunitionType.CAKE;
            _ammunitionDisplay.ChangeAmmo((int)_bulletSelected);
            mira.UpdateColor((int)_bulletSelected);
            ChangeTextureAndMaterialFoodBox();
        }                
    }

    private void ChangeTextureAndMaterialFoodBox()
    {        
        _ammunitionDisplay.AmmoText(_MuntionSelected.ammo, _MuntionSelected.maximunAmmo);
        objRenderer.material.mainTexture = _MuntionSelected.ammo > 0 ? _MuntionSelected.textureForFoodBox : _originalTextureFoodBox;
    }

    private void OnCameraChanged(ICinemachineCamera incomingCamera, ICinemachineCamera outgoingCamera)
    {
        Debug.Log($"Camera changed: Incoming = {incomingCamera?.Name}, Outgoing = {outgoingCamera?.Name}");

        // Update active camera if necessary
        activeCamera = CinemachineCore.Instance.GetActiveBrain(0)?.OutputCamera;

        if (activeCamera != null)
        {
            Debug.Log($"Active camera updated: {activeCamera.name}");
        }
    }

    private IEnumerator DestroyBulletAfterTime(GameObject bullet, float delay)
    {
        yield return new WaitForSeconds(delay);
        Destroy(bullet);
    }

    public void AddMoreMunition(MunitionType munitionSelected, int amount)
    {
        if((int)munitionSelected > _bulletPrefabs.Count)
        {
            print("Munition Selected Not Avaliable");
            return;
        }
        
        Munitions munition = _bulletPrefabs[(int)munitionSelected];
        munition.ammo += amount;
        
        if(munition.ammo > munition.maximunAmmo) munition.ammo = munition.maximunAmmo;

        _bulletPrefabs[(int)munitionSelected] = munition;
        
        _ammunitionDisplay.AmmoText(_MuntionSelected.ammo, _MuntionSelected.maximunAmmo);
        AudioManager.Instance?.PlayOneShot(FMODEvents.instance.brokeMunitionBox, transform.position);
        if(_MuntionSelected.ammo > 0) objRenderer.material.mainTexture = _MuntionSelected.textureForFoodBox;
    }

    public bool AmmoIsEnough() => _bulletPrefabs[(int)_bulletSelected].ammo <= 0;

    public void ReturnToNormalMunition() => infiniteMunition = false;
}`},{title:"Bullet",language:"csharp",description:"Main structure for the funcionallity of all munition of the game",code:`using System.Collections;
using System.Collections.Generic;
using System.Net.Http.Headers;
using UnityEngine;

public class Bullet : MonoBehaviour
{   
    [Header("Bullet Special Effects Properties")]
    [SerializeField] private GameObject _munitionObject;
    [SerializeField] private float _speedRotation;
    [SerializeField] private Vector3 _rotationVectors;
    private Rigidbody _rb;

    
    private void Start() 
    {
        if(!_munitionObject) Debug.LogError("Bullet.cs: Munition Object is null.");

        _rb = GetComponent<Rigidbody>();
        if(_rb == null) Debug.LogError("Bullet.cs: Rigidbody is null.");
    }
    
    // Update is called once per frame
    void Update()
    {
        if(!_munitionObject) return;
        
        _munitionObject.transform.Rotate(
            Mathf.Sin(_rotationVectors.x) * _speedRotation,  
            Mathf.Sin(_rotationVectors.y) * _speedRotation, 
            Mathf.Sin(_rotationVectors.z) * _speedRotation,
            Space.Self
        );
    }

    public void RandomizeDirection(float speedMultiplier = 1f)
    {
        if (_rb == null) return;
                
        Vector3 randomDirection = Random.insideUnitSphere.normalized;        
        _rb.velocity = randomDirection * _rb.velocity.magnitude * speedMultiplier;
    }
}`},{title:"Game Manager",language:"csharp",description:"Main template for the correctly functionallity of the game",code:`using System;
using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.EventSystems;

public abstract class GameManager : MonoBehaviour
{
    private static GameManager _instance;
    public static GameManager Instance
    {
        get
        {
            if (_instance == null)
                Debug.LogError("GameManager.cs error: The instance is Null");

            return _instance;
        }
    }

    [Header("Game Manager Properties")]
    protected Dictionary<PlayerDataEnum, int> sessionData = new Dictionary<PlayerDataEnum, int>();
    [SerializeField] private GameObject _gameOverUIPanel;
    [SerializeField] private GameObject _stageClearUIPanel;
    [SerializeField] private GameObject _HUD;

    protected LevelEnum _currentLevel;
    [SerializeField] private GameObject _gameOverUIPanelObjects;
    [SerializeField] private LevelEnum currentLevel;
    private bool _playing = true;

    private bool _dataSaved;
    [SerializeField] private GameObject _pauseMenuPanel;
    [SerializeField] private GameObject firstButtonGameOver;
    private bool _isPaused = false;

    public bool Playing { get { return _playing; }}
    public bool Paused { get { return _isPaused;}}

    private GatherInput _gInput;

    private void Awake() 
    {
        _gInput = FindObjectOfType<GatherInput>();       

        if(_gInput == null) Debug.LogError("Error: GatherInput is null");
        
        Time.timeScale = 1.0f;
        _instance = this;

        foreach (PlayerDataEnum playerdataEnum in Enum.GetValues(typeof(PlayerDataEnum)))
        {
            sessionData.Add(playerdataEnum, 0);
        }
    }

    private void Start()
    {
        _dataSaved = false;

        if(_gameOverUIPanel == null)
        {
            Debug.LogError("GameManager.cs: Game Over UI Panel is Null.");
        } else
        {
            _gameOverUIPanel.SetActive(false);
        }

        if (_pauseMenuPanel == null)
        {
            Debug.LogError("GameManager.cs: Pause Menu UI Panel is Null");
        } else
        {
            _pauseMenuPanel.SetActive(false);
        }

        if (_stageClearUIPanel == null) {
            Debug.LogError("GameManager.cs: Stage Clear Panel is Null");
        } else {
            _stageClearUIPanel.SetActive(false);
        }

        if (_HUD == null) {
            Debug.LogError("GameManager.cs: Stage Clear Panel is Null");
        } else {
            _HUD.SetActive(true);
        }

        Initialize();
    }

    public virtual void Update()
    {        
        bool isPausePressed = _gInput.PauseButtonPressed;
        
        if (_gInput != null && isPausePressed)  // Nueva propiedad en GatherInput
        {
            PauseGame();
        }

        if(_gInput != null && !_playing && _stageClearUIPanel.activeSelf && isPausePressed)
        {
            PlatyfaSceneManager.Instance.LoadLevel2Prototype();
        }
    }

    public void PauseGame()
    {
        GatherInput input = FindObjectOfType<GatherInput>();  // Buscar la instancia de GatherInput
        if (input == null) return;

        _isPaused = !_isPaused;
        input.SetPauseState(_isPaused);

        if (_isPaused)
        {
            Time.timeScale = 0;
            _pauseMenuPanel.SetActive(true);
            Cursor.visible = true;
            Cursor.lockState = CursorLockMode.None;
        }
        else
        {
            Time.timeScale = 1.0f;
            _pauseMenuPanel.SetActive(false);
            Cursor.visible = false;
            Cursor.lockState = CursorLockMode.Locked;
        }
    }

    public void GameOver()
    {
        if(!_playing) return;
        
        Debug.Log("GAME OVER");
        _playing = false;

        _gameOverUIPanel.SetActive(true);
        RectTransform _maskRectTransform = _gameOverUIPanel.transform.Find("Mask")?.GetComponent<RectTransform>();

        if (_maskRectTransform != null)
            _maskRectTransform.LeanScale(new Vector3(0, 0, 0), 2f);
        
        Transform objectsPanelTransform = _gameOverUIPanel.transform.Find("ObjectsPanel");
        StartCoroutine(TemporalGameOver());    
        AudioManager.Instance?.InitializeMusic(FMODEvents.instance.musicGameOver);
        EventSystem.current.SetSelectedGameObject(null);
        EventSystem.current.SetSelectedGameObject(firstButtonGameOver);
    }

    public void StageClear() {
        Debug.Log("STAGE CLEAR");
        Cursor.visible = true;
        Cursor.lockState = CursorLockMode.None;
        _playing = false;

        _HUD.SetActive(false);
        _stageClearUIPanel.SetActive(true);

        RectTransform potRectTransform = _stageClearUIPanel.transform.Find("pot")?.GetComponent<RectTransform>();
        RectTransform pipesTopRectTransform = _stageClearUIPanel.transform.Find("pipesTop")?.GetComponent<RectTransform>();
        GameObject titleObject = _stageClearUIPanel.transform.Find("Title")?.gameObject;
        RectTransform titleRectTransform = _stageClearUIPanel.transform.Find("Title")?.GetComponent<RectTransform>();
        RectTransform timerRectTransform = _stageClearUIPanel.transform.Find("timer")?.GetComponent<RectTransform>();

        if (potRectTransform != null && pipesTopRectTransform != null)
        {
            // Posiciones finales
            Vector3 potTargetPos = new Vector3(0, 0, 0); // Top-left corner
            Vector3 pipesTopTargetPos = new Vector3(0, 0, 0); // Bottom-right corner

            LeanTween.move(potRectTransform, potTargetPos, 1f).setEase(LeanTweenType.easeInOutQuad);
            LeanTween.move(pipesTopRectTransform, pipesTopTargetPos, 1f).setEase(LeanTweenType.easeInOutQuad);
        }

        if (titleRectTransform != null && timerRectTransform != null) {
            // Animate Title sliding in from the right
            LeanTween.move(titleRectTransform, Vector3.zero, 1f).setEase(LeanTweenType.easeOutQuad);
            LeanTween.move(timerRectTransform, Vector3.zero, 1f).setEase(LeanTweenType.easeOutQuad);
        }

        StartCoroutine(ProvisionalThanksScene());
    }

    private IEnumerator ProvisionalThanksScene()
    {
        yield return new WaitForSeconds(70f);
        PlatyfaSceneManager.Instance.LoadLevel2Prototype();
    }

    protected abstract void Initialize();

    private IEnumerator TemporalGameOver()
    {  
        _gameOverUIPanelObjects.SetActive(true);  
        yield return new WaitForSeconds(3f);
        _gameOverUIPanelObjects.transform.Find("HatAndGoogles")?.gameObject.SetActive(true); 
        // Time.timeScale = 0.0f;
        RectTransform gameOverTitle = _gameOverUIPanelObjects.transform.Find("GameOverText")?.gameObject.GetComponent<RectTransform>(); 
        if (gameOverTitle != null) {
            LeanTween.move(gameOverTitle, new Vector3(390, 110, 0f), 1f).setEase(LeanTweenType.easeOutQuad);
        }
        yield return new WaitForSeconds(1.5f);
        _gameOverUIPanelObjects.transform.Find("GameOverButtons")?.gameObject.SetActive(true); 
    }
    
    public void PlayerDataUpdate(PlayerDataEnum playerData)
    {
        sessionData[playerData] = sessionData[playerData] + 1;
    }
}`}]}},procrastinate:{contentSections:[{type:"hero",data:{showVideo:!1,showGallery:!0,galleryType:"carousel"}},{type:"overview",data:{showTechnicalSpecs:!0,showTeamInfo:!0,showDevelopmentTimeline:!1}},{type:"psychology-design",data:{showResearch:!0,showUserTesting:!0}},{type:"code-showcase",data:{showCodeSnippets:!0,codeLanguage:"csharp",showArchitecture:!0}},{type:"features",data:{displayStyle:"list",showIcons:!1}}],customContent:{codeSnippets:[{title:"Object Hover Action",language:"csharp",description:"Functionally for make work the principal tasks and activities",code:`using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[RequireComponent(typeof(Collider2D))]
public abstract class ObjectHover : MonoBehaviour
{
    [Header("Object Hover Attributes")]
    [SerializeField] private ManagerBase _manager;
    [SerializeField] private Texture2D hoverPointerTexture;
    [SerializeField] private Color colorHover = Color.green;
    private Color _color;
    private Renderer _renderer;
    private bool _canHover;

    // Escential Abstract Methods
    protected abstract void Action();

    protected virtual void Start()
    {
        _renderer = GetComponent<Renderer>();
        _color = _renderer.material.color;        

        if(hoverPointerTexture == null) Debug.LogError("ObjectHover.cs error: Hover Pointer Texture is Null");

        if(_manager == null) Debug.LogError("ObjectHover.cs error: Manager is Null");
    }

    protected virtual void Update()
    {
        _canHover = _manager.CanPlay;
    }

    private void OnMouseEnter()
    {
        if(!_canHover) return;
        
        Cursor.SetCursor(hoverPointerTexture, Vector2.zero, CursorMode.Auto);
        _renderer.material.color = colorHover;
    }

    private void OnMouseExit()
    {
        Cursor.SetCursor(null, Vector2.zero, CursorMode.Auto);
        _renderer.material.color = _color;
    }

    private void OnMouseDown() 
    {
        if(!_canHover) return;
        
        Action();
    }

    public void setCanHover(bool availability)
    {
        _canHover = availability;
    }
}`},{title:"Manager Base for Procrastination",language:"csharp",description:"Abstract class for adapt this base to the rest of the classes of the rest of the levels",code:`using System.Collections;
using System.Collections.Generic;
using TMPro;
using Unity.IO.LowLevel.Unsafe;
using UnityEngine;
using UnityEngine.UI;

public abstract class ManagerBase : MonoBehaviour
{
    [Header("Manager Main Attributes")]
    [SerializeField] private GameObject _uiPanelVictory;
    [SerializeField] private GameObject _uiPanelGameOver;
    [SerializeField] private GameObject _uiPanelPause;
    [SerializeField] private GameObject _uiPanelInstructions;
    [SerializeField] private Slider _pointsSlider;
    [SerializeField] private float _incrementRate = 0.14f;        
    [SerializeField] protected Timer _timer;
    [SerializeField] private Animator[] _starts;
    [SerializeField] private Animator _lostLifePanelAnimator;
    [SerializeField] Image _star1;
    [SerializeField] Image _star2;
    [SerializeField] Image _star3;
    [SerializeField] Sprite _Star_Big_Full;
    [SerializeField] TMP_Text _victoryText;

    // Protected Variables for Use in the children Classes
    protected Life _lifeUi;    
    protected bool pausedGame = false;

    // Only for administrate in the parent class
    private List<AudioSource> _audiosPlayedBeforePause = new List<AudioSource>();
    private int _life = 3;
    private float _points = 0f;
    private float _maxPoints = 1.0f;
    private float _pointsIncrement = 0.01f;
    private float _canIncrementPoints = -1f;    
    private bool _canPlay = false;
    private bool _finishedGame = false;

    public bool CanPlay
    {
        get { return _canPlay; }
    }

    protected virtual void Start()
    {
        _lifeUi = GameObject.FindObjectOfType<Life>();

        if(_uiPanelVictory == null)
            Debug.LogError("ManagerBase.cs error: Ui Panel Victory is null");

        if(_uiPanelGameOver == null)
            Debug.LogError("ManagerBase.cs error: Ui Panel Game Over is null");

        if(_pointsSlider == null)
            Debug.LogError("ManagerBase.cs error: Points Slider is null");

        if(_lifeUi == null)
            Debug.LogError("ManagerBase.cs error: Life UI is null");
        else
            _lifeUi.ChangeLife(_life);
        
        if(_timer == null)
            Debug.LogError("ManagerBase.cs error: Timer is null");

        if(_starts.Length != 3)
            Debug.LogError("ManagerBase.cs error: You need to set three starts");

        if(_lostLifePanelAnimator == null)
            Debug.LogError("ManagerBase.cs error: Lost Life Panel Animation is null");
        
        Time.timeScale = 0f;
        _uiPanelVictory.SetActive(false);
        _uiPanelGameOver.SetActive(false);
        _uiPanelInstructions.SetActive(true);
        AudioListener.pause = false;
    }

    protected virtual void Update()
    {
        if(_timer.TimeUp) 
        {
            ActiveUIPanelVictory();
        }

        if (Input.GetKeyDown(KeyCode.Escape))
        {
            PauseGame();
        }
    }

    protected void WinPoints()
    {
        if(_points <= _maxPoints && Time.time > _canIncrementPoints)
        {
            _canIncrementPoints = Time.time + _incrementRate;
            _points += _pointsIncrement;

            if(_points >= 1f)
            {
                _points = 1f;
            }

            CheckStarsUpdates();
        }
    }

    protected void WinExtraPoints()
    {
        if (_points <= _maxPoints && Time.time > _canIncrementPoints)
        {
            _points += 0.2f;
            Debug.Log("puntoss");
            CheckStarsUpdates();
        }
    }

    public void LostLife()
    {
        _lifeUi.ChangeLife(--_life);
        _points -= 0.20f;

        if(_points <= 0f)
        {
            _points = 0f;
        }
        
        CheckStarsUpdates();    
        ShakeCameras();    
        _lostLifePanelAnimator.SetTrigger("loseLife");

        if(_life <= 0)
        {
            ActiveUIPanelGameOver();            
            return;
        }
    }

    private void ShakeCameras()
    {
        CameraShake[] camerasWithShakeScript = FindObjectsOfType<CameraShake>();
        foreach(CameraShake cameraToShake in camerasWithShakeScript)
        {
            StartCoroutine(cameraToShake.Shake(0.5f, 0.15f));
        }
    }

    private void CheckStarsUpdates()
    {
        _pointsSlider.value = _points;

         // Stars Activation
        _starts[0].SetBool("activeStar", _points > 0.26f);
        _starts[1].SetBool("activeStar", _points > 0.60f);
        _starts[2].SetBool("activeStar", _points > 0.95f);
    }

    private void ActiveUIPanelVictory()
    {
        if(_finishedGame) return;        
        Time.timeScale = 0f;
        if (_star1 != null && _star2 != null && _star3 != null)
        {
            if (_points > 0.26f) _star1.sprite = _Star_Big_Full;
            if (_points > 0.60f) _star2.sprite = _Star_Big_Full;
            if (_points > 0.95f) _star3.sprite = _Star_Big_Full;
        }
        if (_victoryText != null)
        {
            if (_points > 0.26f) _victoryText.text = "Procrastinador Principiante";
            if (_points > 0.60f) _victoryText.text = "Procrastinador Promedio";
            if (_points > 0.95f) _victoryText.text = "Procrastinador Experto";
        }
        _uiPanelVictory.SetActive(true);
        _finishedGame = true; 
        AudioListener.pause = true;
    }

    private void ActiveUIPanelGameOver()
    {
        if(_finishedGame) return;        
        Time.timeScale = 0f;
        _uiPanelGameOver.SetActive(true);
        _finishedGame = true;
    }

    public virtual void PauseGame()
    {        
        if (pausedGame) 
        {
            // resume game
            pausedGame = false;
            Time.timeScale = 1.0f;
            _uiPanelPause.SetActive(false);

            foreach (AudioSource audio in _audiosPlayedBeforePause)
            {
                audio.Play();
            }
            _audiosPlayedBeforePause.Clear();

            StartCoroutine(StartGame());
        } 
        else 
        {
            // pause game
            pausedGame = true;
            Time.timeScale = 0f;
            _uiPanelPause.SetActive(true);

            AudioSource[] audios = FindObjectsOfType<AudioSource>();
            foreach (AudioSource audio in audios) 
            {
                if (audio.isPlaying)
                {
                    audio.Pause();
                    _audiosPlayedBeforePause.Add(audio);
                }
            }

            _canPlay = false;
        }
    }

    public void InitGame()
    {
        _uiPanelInstructions.SetActive(false);
        Time.timeScale = 1.0f;
        StartCoroutine(StartGame());
    }

    private IEnumerator StartGame()
    {
        _canPlay = false;
        yield return new WaitForSeconds(0.1f);
        _canPlay = true;
    }
}`},{title:"Game Manager Level 1 Example",language:"csharp",description:"Game Manager for Level1 in base with the script ManagerBase",code:`using System.Collections;
using System.Collections.Generic;
using Unity.VisualScripting;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.Video;

public class ManagerL1 : ManagerBase
{        
    public static ManagerL1 instance = null;
    
    protected void Awake()
    {
        if(instance == null)
        {
            instance = this;
            return;
        }

        Destroy(gameObject);
    }

    [Header("Manager For Level 1 Attributes")]
    [SerializeField] protected GameObject _uiButtonReturn;
    
    [SerializeField] private GameObject _cameraMain; 
    [SerializeField] private GameObject _cameraTv;
    [SerializeField] private GameObject _cameraTvForSeeLaptop;    
    [SerializeField] private VideoPlayer _videoPlayer;
    [SerializeField] private VideoClip[] _videosClips;
    [SerializeField] private GameObject _volumeTvGameObject;
    private Slider _volumeTvSlider;
    private int _numberLastVideoSelected = -1;

    public bool ActiveCameraTv
    {
        get { return _cameraTv.activeSelf; }
    }
    
    protected override void Start()
    {
        base.Start();
        
        if(_cameraMain == null)
            Debug.LogError("ManagerL1.cs error: Camera Main is null");

        if(_cameraTv == null)
            Debug.LogError("ManagerL1.cs error: Camera Tv is null");

        if(_cameraTvForSeeLaptop == null)
            Debug.LogError("ManagerL1.cs error: Camera Tv For See Laptop is null");

        if(_videoPlayer == null)
            Debug.LogError("ManagerL1.cs error: Video Player is null");

        if(_uiButtonReturn == null)
            Debug.LogError("ManagerL1.cs error: Ui Button Return is null");

        if(_volumeTvGameObject == null)
            Debug.LogError("ManagerL1.cs error: Volume Tv GameObject is null");
        else
        {
            _volumeTvSlider = _volumeTvGameObject.GetComponent<Slider>();
        }

        if(_volumeTvSlider == null)
            Debug.LogError("ManagerL1.cs error: Volume Tv Slider is null");
    }

    protected override void Update()
    {
        base.Update();
        if(_cameraTv.activeSelf && !base.pausedGame) WinPoints();

        if(_volumeTvGameObject.activeSelf)
        {
            _videoPlayer.SetDirectAudioVolume(0, _volumeTvSlider.value);
        }
    }
    
    public void ChangeCameraView()
    {
        _cameraMain.SetActive(!_cameraMain.activeSelf);
        _cameraTv.SetActive(!_cameraTv.activeSelf);
        _volumeTvGameObject.SetActive(!_volumeTvGameObject.activeSelf);
        _uiButtonReturn.SetActive(!_uiButtonReturn.activeSelf);
        if(_cameraTv.activeSelf)
        {
            _videoPlayer.SetDirectAudioVolume(0, 0.25f);
            _videoPlayer.Play();
        }
        else
            _videoPlayer.Pause();
        _volumeTvSlider.value = 0.25f;

        if(_cameraTv.activeSelf) ChangeVideo();
    }
    
    public void OnCameraForSeeLaptop()
    {
        if(!_cameraTv.activeSelf) return;
        
        _cameraTvForSeeLaptop.SetActive(true);
    }

    public void OffCameraForSeeLaptop()
    {        
        _cameraTvForSeeLaptop.SetActive(false);
    }

    private void ChangeVideo()
    {
        if(_videosClips.Length <= 0) return;

        int choosedVideo = Random.Range(0, _videosClips.Length);

        if(choosedVideo == _numberLastVideoSelected) return;

        _videoPlayer.clip = _videosClips[choosedVideo];
        _numberLastVideoSelected = choosedVideo;
    }

    public override void PauseGame()
    {
        base.PauseGame();

        _videoPlayer.SetDirectAudioVolume(0, !pausedGame ? 0.25f : 0f);
        _volumeTvSlider.value = 0.25f;
        
        // Avoid Conflict between videos and pause.
        if(pausedGame && !_cameraTv.activeSelf) 
            _videoPlayer.Pause();
        else if(pausedGame && _cameraTv.activeSelf)
            _videoPlayer.Pause();
        else if(!pausedGame && !_cameraTv.activeSelf)
            _videoPlayer.Pause();
        else if(!pausedGame && _cameraTv.activeSelf)
            _videoPlayer.Play();
    }
}`}]}},"robotic-slaughter":{contentSections:[{type:"hero",data:{showVideo:!1,showGallery:!0,galleryType:"carousel"}},{type:"overview",data:{showTechnicalSpecs:!0,showTeamInfo:!0,showDevelopmentTimeline:!0}},{type:"ai-showcase",data:{showAICode:!0,showBehaviorTrees:!0,showPerformanceMetrics:!0}},{type:"code-showcase",data:{showCodeSnippets:!0,codeLanguage:"csharp",showArchitecture:!0}}],customContent:{codeSnippets:[{title:"Main Character Actions",language:"csharp",description:"All the actions functionallity for the main character",code:`using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[RequireComponent(typeof(Rigidbody2D), typeof(CapsuleCollider2D))]
public class Adal : MonoBehaviour
{
    // ===> Properties Of Character
    [SerializeField] private float _movementSpeed = 5.0f;
    [SerializeField] private float _jumpForce = 14.0f;
    [SerializeField] private float _shootRate = 0.14f;
    [SerializeField] private float _jetpackSpeed = 3f;
    [SerializeField] private Transform HitBoxSword, _bombDirection, _bombObjetive;
    [SerializeField] private float _swordRate = 0.45f;
    [SerializeField] private float attackRange = 1f;
    [SerializeField] private LayerMask enemyLayers;
    [SerializeField] private float _lauchBombForce;
    [SerializeField] private float _bombRate = 0.45f;
    private int bombStateLaunch = -1;

    // ===> Prefabs
    [SerializeField] private GameObject _bulletPrefab;
    [SerializeField] private GameObject _bombPrefab;
    [SerializeField] private GameObject _pointPrefab;
    [SerializeField] private int _numberOfPoints;
    
    // ===> Private Properties for the gameplay
    [SerializeField] private int _life = 4;
    private int _defaultLife = 4;
    [SerializeField] private int _bullets = 175;
    [SerializeField] private int _limit_bullets = 250;
    
    // ===> Private thechnical Properties
    private bool _lookAhead = true;
    private bool _checkInvulnerable = false;
    private bool _win = false;
    private bool _death = false;
    private bool _stop = false;
    private float _canShoot = -1f;
    private float _canSwording = -1f;
    private float _canThrowBomb = -1f;
    private float _fallDeath = -6f;
    private GameObject[] _points;
    private Vector2 _direction;

    // ===> Vectors for Box Collider 2D
    private Vector2 _v2OffsetOriginal = new Vector2(-0.08f, 0.0f);
    private Vector2 _v2SizeOriginal = new Vector2(0.82f, 2.03f);
    private Vector2 _v2OffsetCrunched = new Vector2(-0.08f, -0.4f);
    private Vector2 _v2SizeCrunched = new Vector2(0.82f, 1.23f);

    // ===> Components of the Protagonist
    private Rigidbody2D _rigidbody2D;
    private Animator _animator;
    private CapsuleCollider2D _capsuleCollider2D;
    private Renderer _renderer;
    private Color _color;

    // ===> Comunication with the managers
    private LifeBar _uiLifeBar;
    private BulletsUI _uiBulletsUi;
    
    private void Start()
    {
        _rigidbody2D = GetComponent<Rigidbody2D>();
        _animator = GetComponent<Animator>();
        _capsuleCollider2D = GetComponent<CapsuleCollider2D>();    
        _uiLifeBar = FindObjectOfType<LifeBar>();
        _uiBulletsUi = FindObjectOfType<BulletsUI>();
        _renderer = GetComponent<Renderer>();
        _color = _renderer.material.color;

        if(_uiLifeBar == null) Debug.LogError("Adal.cs error: Life Bar Not Found");
        else _uiLifeBar.ChangeLife(_life);
        if(_uiBulletsUi == null) Debug.LogError("Adal.cs error: Bullets UI Not Found");
        else _uiBulletsUi.UpdateBulletsCount(_bullets);

        if(_bulletPrefab == null) Debug.LogError("Error from 'Protagonist.cs': Life Bar is NULL.");
        if(_bombDirection == null) Debug.LogError("Adal.cs error: Transform of Bomb is Null");

        if(_pointPrefab == null) Debug.LogError("Adal.cs error: Point Prefab is Null.");
        else InitializeTrajectoryOfBomb();

        // Check If Will be Charged
        _stop = false;
        StateMiniGameEvent state = IlusionEventManager.Instance.GetStateMiniGameEvent();

        switch (state)
        {
            case StateMiniGameEvent.Win:
                SetPosition(IlusionEventManager.Instance.PlayerPosition);
                break;

            case StateMiniGameEvent.Lose:
                ResetAdal();
                break;

            default:
                break;
        }
    }

    private void InitializeTrajectoryOfBomb()
    {
        _points = new GameObject[_numberOfPoints];

        for(int i = 0; i < _numberOfPoints; i++)
        {
            _points[i] = Instantiate(_pointPrefab, transform.position, Quaternion.identity);
        }

        seeTrajectoryPoints(false);
    }
    
    private void Update()
    {
        ControlsGamePlay();
        StatusPlayerChecking();
    }

    public void StopPlayer()
    {
        _stop = true;
        _rigidbody2D.velocity = Vector2.zero;
        _animator.SetBool("isMoving", false);
        _animator.SetBool("isJumping", false);
        _animator.SetBool("isCrounchedDown", false);        
        _animator.SetFloat("isJetActive", 0f);
        _animator.SetFloat("isShooting", 0f);
        _animator.SetBool("isDeath", false);
    }

    private void OnDrawGizmosSelected() 
    {
        if (HitBoxSword == null)
            return;
        
        Gizmos.DrawWireSphere(HitBoxSword.position, attackRange);
    }

    private void seeTrajectoryPoints(bool state)
    {
        for(int i = 0; i < _points.Length; i++)
        {
            _points[i].SetActive(state);
        }
    }    

    private void ControlsGamePlay()
    {
        if(_win)
        {
            _animator.SetBool("isWin", true);
            _rigidbody2D.velocity = new Vector2(0f, _rigidbody2D.velocity.y);
            return;
        }

        if(_stop)
        {
            _rigidbody2D.velocity = new Vector2(0f, _rigidbody2D.velocity.y);
            return;
        }

        if(_life == 0 && !_death) 
        {
            _death = true;
            _animator.SetBool("isDeath", true);            
            bool isGrounded = Mathf.Abs(_rigidbody2D.velocity.y) < 0.01f;
            _animator.SetBool("isJumping", !isGrounded);
            StartCoroutine(DeathDesition());
            return;
        }
        
        if(_life <= 0) return;

        // Player Controllers and Actions
        MovementHorizontal();
        VerticalControll();
        Jump();
        SwordAttack();
        Shoot();
        Jet();
        ThrowBomb();
    }

    private void StatusPlayerChecking()
    {
        // ===> If the player falls
        if(transform.position.y < _fallDeath && !_death){
            _life = 0;
            _death = true;
            _uiLifeBar.ChangeLife(_life);
            _rigidbody2D.velocity = new Vector2(0f, _rigidbody2D.velocity.y);
            AudioManager.Play(AudioClipName.death);
            StartCoroutine(DeathDesition());
        }
    }
    
    private void MovementHorizontal()
    {        
        float horizontalInput = Input.GetAxis("Horizontal");

        if(horizontalInput > 0) _lookAhead = true;        
        else if(horizontalInput < 0) _lookAhead = false;

        transform.localScale = new Vector2(_lookAhead ? 1 : -1, 1);

        if(bombStateLaunch == -1)
            _rigidbody2D.velocity = new Vector2(horizontalInput * _movementSpeed, _rigidbody2D.velocity.y);

        _animator.SetBool("isMoving", horizontalInput != 0);
    }

    private void VerticalControll()
    {
        float verticalInput = Input.GetAxis("Vertical");
        bool isGrounded = Mathf.Abs(_rigidbody2D.velocity.y) < 0.01f;

        if(verticalInput < -0.60f && isGrounded)
        {
            _rigidbody2D.velocity = new Vector2(0.0f, _rigidbody2D.velocity.y);
            IdleCrounchedPosition(true, _v2OffsetCrunched, _v2SizeCrunched);
            return;
        }

        IdleCrounchedPosition(false, _v2OffsetOriginal, _v2SizeOriginal);
    }

    private void IdleCrounchedPosition(bool isCrounched, Vector2 v2Offset, Vector2 v2Size)
    {
        _animator.SetBool("isCrounchedDown", isCrounched);
        _capsuleCollider2D.offset = v2Offset;
        _capsuleCollider2D.size = v2Size;
    }

    private void Jump()
    {
        bool jumpInput = Input.GetButtonDown("Jump");
        bool jumpInputReady = Input.GetButtonUp("Jump");
        bool isGrounded = Mathf.Abs(_rigidbody2D.velocity.y) < 0.01f;

        if(jumpInput && isGrounded)
        {
            _rigidbody2D.velocity = new Vector2(0, _jumpForce);
            AudioManager.Play(AudioClipName.jump_11);
        }

        if(jumpInputReady && _rigidbody2D.velocity.y > 0) 
            _rigidbody2D.velocity = new Vector2(0, 0);

        _animator.SetBool("isJumping", !isGrounded);
    }

    private void SwordAttack()
    {
        bool isAtackOfSword = Input.GetButtonDown("Atack");

        if(isAtackOfSword && Time.time > _canSwording && Input.GetAxis("Vertical") > -0.60f)
        {
            _canSwording = Time.time + _swordRate;

            Collider2D[] hitEnemies = Physics2D.OverlapCircleAll(HitBoxSword.position, attackRange, enemyLayers);

            // Hacerles da\xF1o a los enemigos
            foreach (Collider2D enemy in hitEnemies)
            {
                enemy.GetComponent<EnemyBase>()?.TakeSwordDamage();
                enemy.GetComponent<Meteor>()?.ReboundMeteor();
            }

            _animator.SetBool("isSwordAtack", true);
            AudioManager.Play(AudioClipName.laser7);
            return;
        }

        _animator.SetBool("isSwordAtack", false);
    }

    private void Shoot()
    {
        float shootInput = Input.GetAxis("Shoot");
        bool isGrounded = Mathf.Abs(_rigidbody2D.velocity.y) < 0.01f;

        if(shootInput > 0.02f && _bullets > 0 && Time.time > _canShoot)
        {
            _canShoot = Time.time + _shootRate;
            float positionXForBullet = _lookAhead ? 1.2f : -1.2f;
            float positionYForBullet =  Input.GetAxis("Vertical") < -0.60f && isGrounded ? -0.45f : 0.03f;
            Vector3 vectorForBullet =  transform.position + new Vector3(positionXForBullet, positionYForBullet, 0f);
            Quaternion rotForBullet = Quaternion.Euler(0, 0, _lookAhead ? 0.0f : 180.0f);
            Instantiate(_bulletPrefab, vectorForBullet, rotForBullet);
            _bullets--;
            _uiBulletsUi.UpdateBulletsCount(_bullets);
        }

        _animator.SetFloat("isShooting", shootInput);
        AudioContinueSoundManager.instance?.PlayContinueSound("shoot", shootInput > 0.02f && _bullets > 0);
    }

    private void Jet()
    {
        float jetInput = Input.GetAxis("JetMove");
                
        if(jetInput > 0.02f && Input.GetAxis("Shoot") < 0.01f)
        {
            _rigidbody2D.velocity = new Vector2(
                Input.GetAxis("Horizontal") * _jetpackSpeed * _movementSpeed, _rigidbody2D.velocity.y
            );
        }
        
        _animator.SetFloat("isJetActive", jetInput);
    }

    private void ThrowBomb()
    {
        bool bombThrow = Input.GetButton("ThrowBomb");
        bool isGrounded = Mathf.Abs(_rigidbody2D.velocity.y) < 0.01f;

        _animator.SetBool("isThrowBomb", bombThrow);

        if(bombThrow && isGrounded && Time.time > _canThrowBomb)
        {
            _rigidbody2D.velocity = new Vector2(0f, _rigidbody2D.velocity.y);

            bombStateLaunch = 0;            
            
            _direction = _bombObjetive.position - _bombDirection.position;

            seeTrajectoryPoints(true);

            for(int i = 0; i < _points.Length; i++)
            {
                _points[i].transform.position = PointPosition(i * 0.1f);
            }
        }

        if(!isGrounded) // Cancel Atack
        {
            bombStateLaunch = -1;
            seeTrajectoryPoints(false);
        }

        if(bombThrow == false && bombStateLaunch == 0 && isGrounded)        
        {
            bombStateLaunch = 1;
            seeTrajectoryPoints(false);
        }

        if(bombThrow == false && bombStateLaunch == 1)
        {            
            _canThrowBomb = Time.time + _bombRate;
            bombStateLaunch = -1;
            GameObject bomb = Instantiate(_bombPrefab, _bombDirection.position, _bombDirection.rotation);
            float pos = _lookAhead ? _lauchBombForce : -_lauchBombForce;
            bomb.GetComponent<Rigidbody2D>().velocity = transform.right * pos;      
        }
    }

    public void Damage()
    {
        if(_life <= 0) return;

        _uiLifeBar.ChangeLife(--_life);
    }

    public void RecoverLife()
    {
        if(_life >= 4) return;

        _uiLifeBar.ChangeLife(++_life);
    }

    public void RecoverBullets(int amountBullets)
    {
        _bullets = ((_bullets + amountBullets) > _limit_bullets) ? _limit_bullets : _bullets + amountBullets;
        _uiBulletsUi.UpdateBulletsCount(_bullets);
    }

    public void GameWinned()
    {
        _win = true;
    }
    
    private void OnCollisionEnter2D(Collision2D other) 
    {        
        if(!_checkInvulnerable && (other.gameObject.tag.Equals("Enemy") || other.gameObject.tag.Equals("Laser")))
        {
            _uiLifeBar.ChangeLife(--_life);

            if(_life > 0)
            {                
                AudioManager.Play(AudioClipName.hit1);
                StartCoroutine("Hurted");
                StartCoroutine("GetInvulnerable");      
            }
            
            if(_life == 0)
                AudioManager.Play(AudioClipName.death);
        }        
    }

    Vector2 PointPosition(float t)
    {
        return (Vector2)_bombObjetive.position + (_direction.normalized * _lauchBombForce * t) + 0.5f * Physics2D.gravity * (t * t);
    }

    IEnumerator Hurted()
    {        
        _rigidbody2D.velocity = Vector2.zero;
                                
        Vector2 vector2d = _lookAhead ? new Vector2(-2000f, 500f) : new Vector2(2000f, 500f);
        _rigidbody2D.AddForce(vector2d);

        yield return new WaitForSeconds(0.5f);
    }

    IEnumerator GetInvulnerable()
    {                                
        _color.a = 0.5f;
        _renderer.material.color = _color;
        _checkInvulnerable = true;
        yield return new WaitForSeconds(1.5f);
        _checkInvulnerable = false;
        _color.a = 1f;
        _renderer.material.color = _color;
    }

    private IEnumerator DeathDesition()
    {
        yield return new WaitForSeconds(3.5f);
        ResetAdal();
    }

    public void ResetAdal()
    {
        _rigidbody2D.velocity = Vector2.zero;
        _life = _defaultLife;
        _death = false;
        _uiLifeBar.ChangeLife(_life);
        _animator.SetTrigger("relive");
        Vector2 pos = Manager.instance.BeginInTheLastCheckPointMarked();
        SetPosition(pos);
        _animator.SetBool("isDeath", false);
    }

    public void SetPosition(Vector2 position)
    {
        transform.position = new Vector2(position.x, position.y);
    }
}`},{title:"AI Enemy Base",language:"csharp",description:"The main class template for make work the another enemies of the game",code:`using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public abstract class EnemyBase : MonoBehaviour
{
    #region ---> Atributos/Fields <---

    //****************************************************************
    private static int hurtBullet = 1;
    private static int hurtSword = 30;
    private static int hurtBomb = 50;
    //****************************************************************
    
    [SerializeField] private int life;
    [SerializeField] protected float speed = 2f;
    [SerializeField] protected Transform objetive;
    [SerializeField] private float distanceForAtack = 18f;    
    [SerializeField] protected Transform proyectileDirection;
    // Get Prefabs
    [SerializeField] private GameObject prefabExplosion;
    [SerializeField] private GameObject bulletsMunition, heartMunition;
    
    // Attributes for Use
    protected Vector2 playerFromAI;
    protected float finalDistanceForAtack = 0f;
    protected bool position;
    protected Rigidbody2D theRigidbody;

    // Private Attributes
    private Animator animator;
    private string currentAnimation;
    private Renderer _render2D;
    private Color colorDefault;
    private Color colorDamage = Color.red;    

    #endregion

    #region ---> Metodos Abstractos/Abstracts Methods <---

    protected abstract void Initialize();
    protected abstract void Movement();
    protected abstract void EnemyActions();
    
    #endregion

    # region ---> Metodos/Methods <---

    /// <summary>
    /// Start is llamado cuendo el script esta habilitado y se ejecuta
    /// antes del primer frame 
    /// </summary>
    void Start() 
    {
        animator = GetComponent<Animator>();
        _render2D = GetComponent<Renderer>();
        theRigidbody = GetComponent<Rigidbody2D>();

        if(distanceForAtack < 0) Debug.LogError("EnemyBase.cs error: Distance For Atack not must be negative numbers");
        
        if(objetive == null) Debug.LogError("EnemyBase.cs error: Objetive Transform is Null");
               
        if(animator == null) Debug.LogError("EnemyBase.cs error: Animator is Null");

        if(bulletsMunition == null) Debug.LogError("EnemyBase.cs error: BulletsMunition gameobject dont found");

        if(_render2D == null) Debug.LogError("EnemyBase.cs: Error, dont found _render2D component");
        else colorDefault = _render2D.material.color;

        if(theRigidbody == null) Debug.LogError("EnemyBase.cs error: Rigidbody is Null");

        Initialize();
    }

    /// <summary>
    /// Update es llamado por cada frame
    /// </summary>
    void Update()
    {        
        CheckLife(); // Para revisar la vida del enemigo constantemente
        Movement(); // Para darle movimiento al personaje
        Munition(); // Dar municion Ya sea balas o vida
        EnemyActions(); // Dar acciones al enemigo
        playerFromAI = objetive.position - transform.position;
        finalDistanceForAtack = playerFromAI.x < 0 ? -distanceForAtack : distanceForAtack;
    }
        
    /// <summary>
    /// Sent when another object enters a trigger collider attached to this
    /// object (2D physics only).
    /// </summary>
    /// <param name="other">The other Collider2D involved in this collision.</param>
    private void OnTriggerEnter2D(Collider2D other)
    {
        // Cuando recibe da\xF1o de una bala
        if(other.gameObject.CompareTag("Bullet"))
        {
            life -= hurtBullet;              
            Destroy(other.gameObject);
            StartCoroutine("GettingDamage");
        }
    }

    private void OnCollisionEnter2D(Collision2D other) 
    {
        DamageBomb(other);
    }

    protected void DamageBomb(Collision2D other)
    {
        if(other.gameObject.CompareTag("Bomb"))
        {
            life -= hurtBomb;                          
            StartCoroutine("GettingDamage");
        }
    }

    IEnumerator GettingDamage()
    {
        _render2D.material.color = colorDamage;
        yield return new WaitForSeconds(0.1f);
        _render2D.material.color = colorDefault;
    }
       
    /// <summary>
    /// Definir el da\xF1o que sufrira los enemigos.
    /// </summary>
    public void TakeSwordDamage()
    {
        life -= hurtSword;
        StartCoroutine("GettingDamage");
    }

    /// <summary>
    /// Revisar constantemente la vida del enemigo
    /// </summary> 
    private void CheckLife()
    {
        if(life <= 0)
        {
            AudioManager.Play(AudioClipName.Explosion);
            Instantiate(prefabExplosion, transform.position, Quaternion.identity);
            Destroy(this.gameObject);
        }
    }

    /// <summary>
    /// Soltar munici\xF3n para el jugador
    /// </summary>
    private void Munition()
    {
        if(life <= 0)
        {            
            int luckNum = Random.Range(1, 10);

            if (luckNum < 3 && bulletsMunition != null)
                Instantiate(bulletsMunition, transform.position, bulletsMunition.transform.rotation);

            if (luckNum > 7 && heartMunition != null)
                Instantiate(heartMunition, transform.position, heartMunition.transform.rotation);
        }
    }

    protected void LookToObjetive()
    {
        transform.localScale = new Vector2(playerFromAI.x < 0 ? 1 : -1, 1);        
    }

    /// <summary>
    /// Cambiar de animaci\xF3n por medio de estados de animaci\xF3n
    /// </summary>
    /// <param name="newAnimation">Nombre de la nueva animaci\xF3n a llamar</param>
    protected void ChangeAnimationState(string newAnimation)
    {
        if(currentAnimation == newAnimation) return;

        animator.Play(newAnimation);
        currentAnimation = newAnimation;
    }

    #endregion
}`},{title:"First Enemy",language:"csharp",description:"Script of the first enemy programmed",code:`using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Enemy01AI : EnemyBase
{
    #region ---> Atributos/Fields <---

    [SerializeField] private GameObject _laser_I_prefab;
    [SerializeField] private GameObject _laser_D_prefab;
    [SerializeField] private float _spawnTime;
    [SerializeField] private float _distanceForFollow = 12f;

    // Private Attributes
    private float counter;
    private float _finalDistanceForFollow = 0f;

    // Estados de animacion
    const string ENEMY_WALK = "Move_Enemy01";
    const string ENEMY_ATTACK = "Atack_Enemy01";

    # endregion

    # region ---> Override Methods <---

    protected override void Initialize()
    {
        if(_laser_I_prefab == null) Debug.LogError("Enemy01AI.cs error: Laser I Prefab is null");
        if(_laser_D_prefab == null) Debug.LogError("Enemy01AI.cs error: Laser D Prefab is null");
    }

    protected override void Movement()
    {
        _finalDistanceForFollow = playerFromAI.x < 0 ? -_distanceForFollow : _distanceForFollow;

        bool left = playerFromAI.x < 0 && playerFromAI.x > _finalDistanceForFollow && playerFromAI.x <= finalDistanceForAtack;
        bool right = playerFromAI.x > 0 && playerFromAI.x < _finalDistanceForFollow && playerFromAI.x >= finalDistanceForAtack;

        if(left || right)
            FollowObjetive();   
    }

    protected override void EnemyActions()
    {
        LookToObjetive();

        bool left = playerFromAI.x < 0 && playerFromAI.x > finalDistanceForAtack;
        bool right = playerFromAI.x > 0 && playerFromAI.x < finalDistanceForAtack;

        if(left || right)
            ShootLaser();
        else
            counter = 0; 
    }

    #endregion

    #region ---> Private Methods <---

    /// <summary>
    /// Disparar depende de la posici\xF3n de este mismo
    /// </summary>
    private void ShootLaser()
    {
        counter += Time.deltaTime;
        ChangeAnimationState(ENEMY_ATTACK);
        
        if(counter > _spawnTime)
        {
            CreateLaser(playerFromAI.x > 0 ? _laser_D_prefab : _laser_I_prefab);  
            counter = 0;
        }

        theRigidbody.velocity = new Vector2(0f, theRigidbody.velocity.y);
    }

    /// <summary>
    /// Crear laser tirado por el enemigo 01
    /// </summary>
    /// <param name="laser">El Laser para acomodarlo depende de su posici\xF3n</param>
    private void CreateLaser(GameObject laser)
    {
        AudioManager.Play(AudioClipName.fire3);
        Vector3 pos = transform.position + new Vector3(0, 0.7f, 0);
        Instantiate(laser, pos, laser.transform.rotation);
    }

    private void FollowObjetive()
    {
        float directionToGo = playerFromAI.x < 0 ? -1f : 1f;
        theRigidbody.velocity = new Vector2(directionToGo * speed, theRigidbody.velocity.y);
        ChangeAnimationState(ENEMY_WALK);
    }

    #endregion
}`}],aiFeatures:["Dynamic pathfinding with NavMesh and obstacle avoidance","Behavioral state machines with smooth transitions","Group AI coordination and communication systems","Adaptive difficulty scaling based on player performance","Memory system for last known player positions","Line of sight detection with raycasting","Predictive targeting for moving players"],technicalAchievements:["60 FPS with 50+ concurrent AI agents","Real-time pathfinding optimization","Custom behavior tree implementation","Memory-efficient state management"]}},"samurais-vs-mongoles":{contentSections:[{type:"hero",data:{showVideo:!1,showGallery:!0,galleryType:"carousel"}},{type:"overview",data:{showTechnicalSpecs:!0,showTeamInfo:!0,showDevelopmentTimeline:!0}},{type:"features",data:{displayStyle:"cards",showIcons:!0}},{type:"code-showcase",data:{showCodeSnippets:!0,codeLanguage:"csharp",showArchitecture:!0}}],customContent:{codeSnippets:[{title:"Samurai (Player)",language:"csharp",description:"Main Functionallity for the Samurai",code:`using System.Collections;
using System.Collections.Generic;
using Unity.VisualScripting;
using UnityEngine;
using UnityEngine.SceneManagement;

public class Samurai : MonoBehaviour
{
    // ===> Atributes
    [Header("Walk Settings")]
    [SerializeField] private float _walkSpeed;
    [Header("Attack of Sword Settings")]
    [SerializeField] private Transform _hitBoxAttack;
    [SerializeField] private LayerMask _enemyLayers;
    [SerializeField] private float _attackRangeForHitBox = 1f;
    [SerializeField] private float _attackRate = 1.0f;
    [Header("Dodge Settings")]
    [SerializeField] private float _dodgeSpeed = 35f;
    [Header("Audio Clips For Sounds")]
    [SerializeField] private AudioClip _blockSound;
    [SerializeField] private AudioClip _attackSound;
    [SerializeField] private AudioClip _dodgeSound;
    [SerializeField] private AudioClip _damageSound;
    [SerializeField] private AudioClip _deathSound;

    // ===> Components
    private Animator _animator;
    private Rigidbody2D _rigidbody2D;
    private SpriteRenderer _sprite;
    private AudioSource _audioSource;


    // ===> private Auxiliar Atributes
    private int _life = 100;
    private float _horizontalInput = 0.0f;
    private float _verticalInput = -1.0f;
    private float _canAtack = -1.0f;
    private bool _isBlocking;
    private bool _canDodge = true;

    // Start is called before the first frame update
    void Start()
    {
        _animator = GetComponent<Animator>();
        _rigidbody2D = GetComponent<Rigidbody2D>();
        _sprite = GetComponent<SpriteRenderer>();
        _audioSource = GetComponent<AudioSource>();

        if (_audioSource == null)        
            Debug.LogError("Samurai.cs error: AudioSource is null");
        
        if (_animator == null)
            Debug.LogError("Samurai.cs error: Animator is null");
        else
            _animator.SetFloat("Y", _verticalInput); // For Set Front View from the beggining

        if (_rigidbody2D == null)
            Debug.LogError("Samurai.cs error: Animator is null");

        if (_sprite == null)
            Debug.LogError("Samurai.cs error: Animator is null");

        if (_hitBoxAttack == null)
            Debug.LogError("Samurai.cs error: Hit Box Atack is null");
    }

    // Update is called once per frame
    void Update()
    {
        if(!GameManager.Instance.StartedGame())
        {
            if(Input.GetButtonDown("Atack"))
                GameManager.Instance.GameStart();
                
            return;
        }
        
        Controlls();
    }

    private void OnDrawGizmosSelected()
    {
        if (_hitBoxAttack == null)
            return;

        Gizmos.DrawWireSphere(_hitBoxAttack.position, _attackRangeForHitBox);
    }

    //========================================================================
    //============================ PRIVATE METHODS ===========================
    //========================================================================
    private void Controlls()
    {
        // Check if Samurai Wins the Battle
        if(GameManager.Instance.Win())
        {
            _rigidbody2D.velocity = new Vector2(0f, 0f);
            _animator.SetFloat("Y", -1f);
            _animator.SetBool("isWalk", false);
            return;
        }
        
        // Check if Samurai is Death
        if (_life <= 0f || GameManager.Instance.InvassionFull())
        {
            if(_life <= 0f) _animator.SetTrigger("isDeath");
            _rigidbody2D.velocity = new Vector2(0f, 0f);
            _animator.SetTrigger("isDeath");
            _audioSource.PlayOneShot(_deathSound);
            // Carga la escena de "game over"
            StartCoroutine(TriggerGameOver());
            return;
        }

        // Call the Actions
        Walk();
        Atack();
        Block();
        Dodge();
    }

    private IEnumerator TriggerGameOver()
    {
        yield return new WaitForSeconds(2f);
        SceneManager.LoadScene("GameOverScene");
    }

    private void Walk()
    {
        _horizontalInput = Input.GetAxis("Horizontal");
        _verticalInput = Input.GetAxis("Vertical");

        _rigidbody2D.velocity = new Vector2(_isBlocking ? 0f : _horizontalInput * _walkSpeed, _isBlocking ? 0f : _verticalInput * _walkSpeed);

        // Set limit for x position
        transform.position = new Vector2(Mathf.Clamp(transform.position.x, -8.12f, 8.12f), transform.position.y);
                
        // Set limit for y position
        transform.position = new Vector2(transform.position.x, Mathf.Clamp(transform.position.y, -2.773117f, -1.673084f));

        if (_horizontalInput > 0)
            _sprite.flipX = false;

        if (_horizontalInput < 0)
            _sprite.flipX = true;

        if (_horizontalInput != 0 || _verticalInput != 0)
        {
            _animator.SetFloat("X", _horizontalInput);
            _animator.SetFloat("Y", _verticalInput);

            // Set Directions for the Hit Box of Attack
            if (_horizontalInput > 0) // Right Position
                _hitBoxAttack.position = _rigidbody2D.position + new Vector2(1.0f, 0f);

            else if (_horizontalInput < 0) // Left Position
                _hitBoxAttack.position = _rigidbody2D.position + new Vector2(-1.0f, 0f);

            else if (_verticalInput > 0) // Up Position
                _hitBoxAttack.position = _rigidbody2D.position + new Vector2(0f, 1.0f);

            else if (_verticalInput < 0) // Down Position
                _hitBoxAttack.position = _rigidbody2D.position + new Vector2(0f, -1.0f);
        }

        _animator.SetBool("isWalk", _horizontalInput != 0 || _verticalInput != 0);
    }

    private void Atack()
    {
        bool atackInput = Input.GetButtonDown("Atack");

        if (atackInput && Time.time > _canAtack)
        {
            _canAtack = Time.time + _attackRate;

            Collider2D[] hitMongols = Physics2D.OverlapCircleAll(_hitBoxAttack.position, _attackRangeForHitBox, _enemyLayers);

            foreach (Collider2D mongol in hitMongols)
            {
                _audioSource.PlayOneShot(_damageSound);
                mongol.GetComponent<Mongol>().TakeDamage();
            }

            _animator.SetTrigger("isAtack");
            _audioSource.PlayOneShot(_attackSound);
        }
    }

    private void Block()
    {
        _isBlocking = Input.GetButton("Block");
        _animator.SetBool("isBlock", _isBlocking);
    }

    private void Dodge()
    {
        bool dodgeInput = Input.GetButtonDown("Dodge");

        if (dodgeInput && _canDodge && (_horizontalInput != 0 || _verticalInput != 0))
        {
            StartCoroutine(PerformDodge());
        }
    }

    private IEnumerator PerformDodge()
    {
        _canDodge = false;
        _audioSource.PlayOneShot(_dodgeSound);
        Vector2 dodgeDirection = new Vector2(_horizontalInput, _verticalInput).normalized;
        Vector2 dodgeDistance = dodgeDirection * _dodgeSpeed * Time.fixedDeltaTime;
        Vector2 newPosition = _rigidbody2D.position + dodgeDistance;
        _rigidbody2D.MovePosition(newPosition);
        _sprite.color = new Color(0, 255, 0); // Color of Dodge (Green)
        yield return new WaitForSeconds(0.2f);
        _sprite.color = new Color(255, 255, 255); // Return Original Color
        yield return new WaitForSeconds(0.05f);
        _canDodge = true;
    }

    //========================================================================
    //============================ PUBLIC METHODS ============================
    //========================================================================
    public void TakeDamage()
    {
        StartCoroutine(DamageEffects());
    }

    private IEnumerator DamageEffects()
    {
        bool detected = false;
        int damage = 15;

        Collider2D[] hitMongols = Physics2D.OverlapCircleAll(_hitBoxAttack.position, _attackRangeForHitBox, _enemyLayers);

        foreach (Collider2D mongol in hitMongols)
        {
            detected = true;
            Mongol mongolScript = mongol.GetComponent<Mongol>();
            if (mongolScript != null) // Block Stack
            {                
                int prediction = _life - (_isBlocking ? damage / 4 : damage);
                _life = prediction < 0 ? 0 : prediction;
                if (!_isBlocking) _sprite.color = new Color(255, 0, 0);
                _audioSource.PlayOneShot(_isBlocking ? _blockSound : _damageSound);
            }
        }

        if (!detected) // That Means That the Enemy is not on the circle and will be atacked
        {
            int prediction = _life - damage;
            _life = prediction < 0 ? 0 : prediction;
            _sprite.color = new Color(255, 0, 0);
            _audioSource.PlayOneShot(_damageSound);
        }

        GameManager.Instance.SamuraiLifeBar((float)_life / 100);
        yield return new WaitForSeconds(0.1f);
        _sprite.color = new Color(255, 255, 255); // Return Original Color
    }
}`},{title:"Mongol (Enemy)",language:"csharp",description:"Main Functionallity for the Enemy Mongol",code:`using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Mongol : MonoBehaviour
{
    // ===> Atributes
    [SerializeField] private float _walkSpeed;
    [SerializeField] private float _atackRate = 2.0f;
    [SerializeField] private int _life = 3;

    // ===> Components
    private Animator _animator;
    private Rigidbody2D _rigidbody2D;
    private SpriteRenderer _sprite;
    private Samurai _samurai;
    private Transform _samuraiPosition;

    // ===> private Auxiliar Atributes
    
    private float _distance;
    private bool _closeToTheSamurai => _distance < 1.5f;
    private bool _closeToTheDoor => transform.position.x > -0.6f && transform.position.x < 0.6f;
    private bool _frontOfTheDoor => transform.position.y > -1.6f && transform.position.x > -0.6f && transform.position.x < 0.6f;
    private float _canAtack = -1.0f;
    
    void Start()
    {
        _animator = GetComponent<Animator>();
        _rigidbody2D = GetComponent<Rigidbody2D>();
        _sprite = GetComponent<SpriteRenderer>();
        GameObject samuraiGameObject = GameObject.FindGameObjectWithTag("Player"); // Step 3

        if(_animator == null)
            Debug.LogError("Mongol.cs error: Animator is null");

        if(_rigidbody2D == null)
            Debug.LogError("Mongol.cs error: Animator is null");

        if(_sprite == null)
            Debug.LogError("Mongol.cs error: Animator is null");

        // Step 3
        if(samuraiGameObject != null)
        {
            _samurai = samuraiGameObject.GetComponent<Samurai>();
            _samuraiPosition = samuraiGameObject.GetComponent<Transform>();
        }

        if(_samurai == null)
            Debug.LogError("Mongol.cs error: Samurai is null");

        if(_samuraiPosition == null)
            Debug.LogError("Mongol.cs error: Position of Samurai is null");
    }

    void Update()
    {
        // ! =========================================================================================================
        // Steps to take for create Mongol
        // 1. Detect if the position.x is positive or negative, if is negative dont flipX, if is positive plifY
        // 2. Mongol need to walk
        // 3. Take distance Beetween mongol and samurai (if the distance is < 1f then stop walk and atack).
        // 4. If the Mongol is between the point -0.6 a 0.6 go up (position -1.673084f)
        // 5. If the Mongol is in the position -1.673084f then stop and start Atack and make damage to the Door
        // ! =========================================================================================================

        ActionsAI();
    }

    //========================================================================
    //============================ PRIVATE METHODS ===========================
    //========================================================================
    private void ActionsAI()
    {
        // Check if the enemy is Death  
        if(_life <= 0) 
        {
            _animator.SetTrigger("isDeath");
            _rigidbody2D.velocity = new Vector2(0f, 0f);
            Destroy(this.gameObject, 2.3f);
            return;
        }
        
        _sprite.flipX = FlipMongol(); // Step 1

        _rigidbody2D.velocity = new Vector2(HorizontalMovement(), VerticalMovement()); // Step 2

        // Step 3
        _distance = Vector2.Distance(transform.position, _samuraiPosition.position);        

        if(_closeToTheSamurai)
        {
            Atack();
        }

        // Step 5
        if(_frontOfTheDoor)
        {
            Atack();
        }
                
        _animator.SetBool("isWalk", HorizontalMovement() != 0 || VerticalMovement() != 0);
    }

    private void Atack()
    {
        if(Time.time > _canAtack)
        {            
            _canAtack = Time.time + _atackRate;
            StartCoroutine(AtackEffects());            
        }
    }

    private IEnumerator AtackEffects()
    {
        yield return new WaitForSeconds(0.4f); // Start Animation
        _animator.SetBool("isAtack", true);       

        yield return new WaitForSeconds(0.2f); // Enable Atack Colision        
        // ! ATACK FOR REST LIFE TO SAMURAI AND/OR DOOR
        if(_closeToTheSamurai) _samurai.TakeDamage(); // Samurai Damage
        if(_frontOfTheDoor) GameManager.Instance.InvasionProgressBar();
        _sprite.color = new Color(78, 78, 255, 255); // Blue Color

        yield return new WaitForSeconds(0.13f); // Disable Atack and return Color
        _sprite.color = new Color(255, 255, 255);

        yield return new WaitForSeconds(0.03f); // Finish Animation of Atack
        _animator.SetBool("isAtack", false);

        yield return new WaitForSeconds(3f);        
    }
    
    private float HorizontalMovement()
    {
        if(_closeToTheSamurai) return 0f;

        if(_closeToTheDoor) return 0f;

        return _sprite.flipX ? -1f : 1f * _walkSpeed;
    }

    private float VerticalMovement() // Step 4
    {
        if(_closeToTheSamurai) return 0f;

        if(_frontOfTheDoor) return 0f; // Step 5

        if(_closeToTheDoor) return 1f * _walkSpeed;
        
        return _rigidbody2D.velocity.y;
    }

    private bool FlipMongol()
    {
        if(_closeToTheSamurai)        
            return _samuraiPosition.position.x > 0;
        
        return transform.position.x > 0;
    }

    //========================================================================
    //============================ PUBLIC METHODS ============================
    //========================================================================
    public void TakeDamage()
    {
        if(_life > 0) StartCoroutine(DamageEffects());
    }

    private IEnumerator DamageEffects()
    {
        int prediction = _life - 1;
        _life = prediction < 0 ? 0 : prediction;
        if(_life > 0) _sprite.color = new Color(255, 0, 0); // Red
        if(_life == 0) GameManager.Instance.DefeatedEnemy();
        yield return new WaitForSeconds(0.1f);
        _sprite.color = new Color(255, 255, 255); // Return Original Color
    }
}`}]}},"defuse-the-bomb":{contentSections:[{type:"hero",data:{showVideo:!1,showGallery:!0,galleryType:"carousel"}},{type:"hackathon-story",data:{showTimeline:!0,showChallenges:!0,showTeamWork:!0,showTeamworkers:!0}},{type:"rapid-development",data:{showTimeConstraints:!0,showDecisionMaking:!0}}],customContent:{hackathonStory:{duration:"One Week (7 Days)",timeline:[{hour:0,event:"Team formation, brainstorming, and game concept establishment"},{hour:8,event:"Detailed game design document and technical architecture planning"},{hour:16,event:"Task assignment and development environment setup"},{hour:24,event:"Asset requirements defined and Unity project initialization"},{hour:32,event:"First-person controller and house environment implementation"},{hour:40,event:"Radar system prototype and random bomb spawn architecture"},{hour:48,event:"Object interaction mechanics and bomb detection system"},{hour:56,event:"Bomb inheritance structure and timer system implementation"},{hour:64,event:"Mini-games development: typing, cat launcher (Michil), water disposal"},{hour:72,event:"Physics-based throwing mechanics and UI event integration"},{hour:80,event:"Victory/defeat cinematics and sound effect implementation"},{hour:88,event:"Initial playtesting and core system debugging"},{hour:96,event:"Audio balancing, UI polish, and performance optimization"},{hour:104,event:"Final debugging, submission preparation, and team retrospective"}],challenges:["Coordinating multiple unique bomb mini-games with different interaction mechanics","Implementing random bomb placement system while ensuring balanced difficulty","Integrating physics-based object manipulation with responsive gameplay feel","Synchronizing audio feedback with radar detection and gameplay events","Managing scope and feature complexity within strict one-week deadline","Ensuring each bomb defusal event had clear instructions and intuitive gameplay","Balancing realistic development timeline with ambitious game design vision"],teamwork:["Strategic task division: Cristian (environment, bomb logic, cinematics, game manager), Dariel (radar, interaction, mini-games, audio), Eyunu (3D Models and Effects)","Daily coordination meetings during planning phase, then focused development sprints","Pair programming sessions for complex mechanics (physics integration, bomb inheritance system)","Continuous integration workflow with regular playtesting to catch issues early","Collaborative decision-making on scope adjustments and feature prioritization","Cross-review of implementations to maintain code quality and design consistency","Shared responsibility for final polish and submission preparation"]}}},draculae:{contentSections:[{type:"hero",data:{showVideo:!1,showGallery:!0,galleryType:"carousel"}},{type:"overview",data:{showTechnicalSpecs:!0,showTeamInfo:!0,showDevelopmentTimeline:!1}},{type:"features",data:{displayStyle:"list",showIcons:!0}},{type:"hackathon-story",data:{showTimeline:!0,showChallenges:!0,showTeamWork:!0,showTeamworkers:!0}}],customContent:{atmosphereDesign:["Dynamic lighting system for cave exploration","Procedural ambient sound generation","Tension-building through audio cues","Minimalist UI for immersion"],hackathonStory:{duration:"48-Hour",timeline:[{hour:0,event:"Team formation, brainstorming bubble-jumping concepts and dragon theme establishment"},{hour:2,event:"Game concept finalized: multiplayer coin-throwing bubble-popping with sleeping dragon"},{hour:4,event:"Task assignment across 6 team members and development environment setup"},{hour:8,event:"Character controller implementation and basic movement with multiple input support"},{hour:12,event:"Coin throwing mechanics and dragon model integration started"},{hour:16,event:"Bubble spawning system from dragon nose and collision detection implemented"},{hour:20,event:"Fire breathing mechanics and player burning effects with temporary invincibility"},{hour:24,event:"Coin collection system, player counters, and timer implementation"},{hour:28,event:"UI systems development: main game, controls explanation, and results screens"},{hour:32,event:"Audio integration: medieval cave ambience, sound effects, and music implementation"},{hour:36,event:"Introduction cutscene, physics interactions, and visual polish integration"},{hour:42,event:"Final playtesting, multiplayer balancing, and bug fixing"},{hour:48,event:"Final presentation preparation and team showcase"}],challenges:["Coordinating 6 team members across programming, art, audio, and design disciplines","Implementing responsive multiplayer mechanics with multiple controller support","Creating convincing fire breath effects that interact properly with player characters","Balancing bubble spawning rate and dragon sensitivity for fair competitive gameplay","Synchronizing audio cues with visual effects for immersive dragon interactions","Managing asset pipeline between 3D modelers, programmers, and UI designers",'Ensuring smooth character movement with "floaty" personality while maintaining control precision'],teamwork:["Clear role division: Cristian (core mechanics, UI, audio), Dariel (bubble/fire systems), Kenneth (cutscenes, physics, AI)","Parallel development streams: Elean (UI design, sounds), Michy (3D models), Ricardo (music composition)","Regular sync meetings every 8 hours to integrate assets and resolve dependencies","Collaborative playtesting sessions to validate multiplayer balance and fun factor","Cross-disciplinary problem solving for technical challenges like fire effect implementation","Shared asset repository with version control for seamless integration workflow","Agile scope adjustment to prioritize core multiplayer experience over bonus features"]}}},"shucos-maker":{contentSections:[{type:"hero",data:{showVideo:!1,showGallery:!0,galleryType:"carousel"}},{type:"overview",data:{showTechnicalSpecs:!0,showTeamInfo:!0,showDevelopmentTimeline:!0}},{type:"features",data:{displayStyle:"cards",showIcons:!0}},{type:"code-showcase",data:{showCodeSnippets:!0,codeLanguage:"csharp",showArchitecture:!0}}],customContent:{culturalResearch:["Traditional Guatemalan street food preparation","Cultural significance of shucos in Guatemala","Authentic ingredient sourcing and preparation methods","Community feedback and cultural accuracy validation"],vrFeatures:["Hand tracking for realistic cooking motions","Haptic feedback for ingredient handling","Immersive market environments","Cultural music and ambient sounds"],codeSnippets:[{title:"Shuco Script",language:"csharp",description:"For Simulate the coocking of the Shuco",code:`using System.Collections;
using System.Collections.Generic;
using UnityEngine;
// Importar librerias para UI
using UnityEngine.UI;
using TMPro;

/*
 * Shuco:
 * Script que tendra todo el control sobre el manejo del
 * montaje, que se habilitara y que no estara habilitado.
 * El shuco esta conformado por los siguientes game objects:
 * - Pan Normal
 * ***********************************************************
 * - Pan Abierto
 * - Aguacate
 * - Repollo (Antes de cerrar)
 * - Salami
 * - Salchicha
 * - Tocino
 * - Chorizo
 * - Ketchup
 * - Mayonesa
 * - Mostasa
 * ***********************************************************
 * - Pan Listo
 * - Repollo (Despues de cerrar)
 * - Papel
 * - Bolsa
 * ***********************************************************
 * PD: Can be Cook estara marcado en false para evitar que
 *     empiece a cocerse.
 */
public class Shuco : Cook
{
    // Gameobjects que conformaran al Shuco
    [SerializeField] private GameObject breadClosed, breadOpen, breadReady; // *PANES*
    [SerializeField] private GameObject guacamole, cabbageBefore, cabbageAfter; // *AGUACATE Y REPOLLO*
    [SerializeField] private GameObject saugue, bakon, salami, chorizo; // *EMBUTIDOS*
    [SerializeField] private GameObject ketchup, mayonese, mustard; // *SALSAS*
    [SerializeField] private Spoon spoonState; // *LOGICA CUCHARA*
    [SerializeField] private GameObject tray, paper, plasticBag; // *PLATO, PAPEL y BOLSA DE PLASTICO*

    // States para detectar de una manera SEGURA la condicion del shuco
    private bool isBreadHot = false, isBreadOpen = false, isBreadReady = false;

    // ==> Elementos para el UI y el counter
    [SerializeField] private TextMesh informationText;    
    public CountController countController;
    private UIForShuco uiForShuco;

    // ==> Para tener el control de los botones del VR
    [SerializeField] private OVRInput.Button buttonOneforVR;

    // ==> Para tener el control de las salsas
    // No me gusta como esta estructurado esto de los segundos pero bueno jaja
    [SerializeField] private int saugueTime = 5;
    private int secondsKetchup = 0, secondsMayonese = 0, secondsMostard = 0;

    private AudioSource saugueSound;

    // ==> Tener el contro lde todos los elementos por medio de un hashmap/diccionario
    
    private Dictionary<int, bool> elementsDone = new Dictionary<int, bool>();
    

    // * =============================================================================
    // * === UNITY METHODS ===========================================================
    // * =============================================================================

    private void Awake() // Para encontrar los elementos escenciales para continuar
    {
        spoonState = FindObjectOfType<Spoon>();
        informationText = FindObjectOfType<TextMesh>();
        countController = FindObjectOfType<CountController>();
        uiForShuco = FindObjectOfType<UIForShuco>();

        GameObject gameObjectSaugeSound = GameObject.Find("SaugueSound");

        if(gameObjectSaugeSound != null)
        {
            saugueSound = gameObjectSaugeSound.GetComponent<AudioSource>();

            if(saugueSound == null) Debug.LogError("Saugue Sound Audio Source is Null");
        }
        else Debug.LogError("Saugue Sound Game Object is Null");

        if(uiForShuco == null)
        {
            Debug.LogError("UI For Shuco Selected is Null");
        }

        for(int i = 0; i < uiForShuco.TotalElements; i++)
        {
            elementsDone.Add(i, false);
        }
    }
    
    private void OnCollisionEnter(Collision other)
    {
        // PASO 1) Vamos a abrir el pan (Si se hace contacto con el cuchillo)
        if (other.gameObject.tag.Equals("knife") && isBreadOpen == false)
        {
            AudioManager.Play(AudioClipName.knifesharpener1);
            isBreadOpen = true;            
            breadClosed.SetActive(false);
            breadOpen.SetActive(true);
            ChangueCookToTrue();
        }

        // PASO 2) Vamos a calentar el pan
        StartToCook(other); // other = objeto que esta colisionando

        // PASO 3) Vamos a ingresar todos los ingredientes para el shuco
        if (isBreadOpen == true && isBreadHot == true)
        {
            ActivateAndDestroyElementOfShuco("saugueDone", other, saugue, AudioClipName.pop2, 5);
            ActivateAndDestroyElementOfShuco("bakonDone", other, bakon, AudioClipName.pop2, 6);
            ActivateAndDestroyElementOfShuco("salamiDone", other, salami, AudioClipName.pop2, 7);
            ActivateAndDestroyElementOfShuco("chorizoDone", other, chorizo, AudioClipName.pop2, 8);

            if(other.gameObject.tag.Equals("spoon"))
            {
                // Agregar aguacate
                if(spoonState.contents == 1)
                {
                    guacamole.SetActive(true);
                    AudioManager.Play(AudioClipName.guacamole_sound);
                    elementsDone[0] = true;
                    uiForShuco.ChangeStateShuco(elementsDone);
                }
                // Agregar repollo
                if(spoonState.contents == 2)
                {
                    cabbageBefore.SetActive(true);
                    AudioManager.Play(AudioClipName.cabague_sound);
                    elementsDone[1] = true;
                    uiForShuco.ChangeStateShuco(elementsDone);
                }
            }
        }        

        // PASO 6) Cuando el shuco ya este cerrado se procedera a ingresar el plato, bolsa y papel
        if(isBreadReady)
        {
            ActivateAndDestroyElementOfShuco("tray", other, tray, AudioClipName.plastic_bag_sound); // Ingresar Plato
            ActivateAndDestroyElementOfShuco("plasticBag", other, plasticBag, AudioClipName.plastic_bag_sound); // Ingresar bolsa
            ActivateAndDestroyElementOfShuco("paper", other, paper, AudioClipName.plastic_bag_sound); // Ingresar papel
        }

        // PASO 7) Sellar el shuco con la parrilla (para sumar punteo)
        if (other.gameObject.tag.Equals("barbecue") && isShucoComplete())
        {
            AudioManager.Play(AudioClipName.bell);
            countController.addCount();
            Destroy(this.gameObject);
        }
    }

    private void OnTriggerStay(Collider other)
    {
        // PASO 4) Vamos a agregar las salsas correspondientes (Ketchup, Mayonesa y Mostaza)
        if (isBreadOpen == true && isBreadHot == true)
        {
            if(other.gameObject.CompareTag("ketchup"))
            {
                AudioManager.PlayContinueSound(saugueSound, true);
                StartCoroutine("AddKetchup");
            }

            if(other.gameObject.CompareTag("mayonese"))
            {
                AudioManager.PlayContinueSound(saugueSound, true);
                StartCoroutine("AddMayonese");
            }

            if(other.gameObject.CompareTag("mustard"))
            {
                AudioManager.PlayContinueSound(saugueSound, true);
                StartCoroutine("AddMustard");
            }
        }
        
        if(other.gameObject.tag.Equals("hitBoxHand")) // Detectar si las manos estan cerca del shuco
        {
            // PASO 5) Si el shuco tiene los ingredientes completos entonces se procedera a cerrar
            if(isShucoIngredientsComplete()) // Si dado caso el shuco ya tiene montado todos los ingredientes esperados
            {
                informationText.text = "Presiona 'A' o 'X' para cerrar el shuco"; // Cuando la mano este en el pan nostros podremos cerrar el shuco
                // Ahora vamos a esperar el input del boton A para cambiar el modelo del shuco
                if(OVRInput.GetDown(buttonOneforVR, OVRInput.Controller.RTouch) || OVRInput.GetDown(buttonOneforVR, OVRInput.Controller.LTouch))
                {
                    // Esto significa que el shuco ya se termino de cocinar de una forma exitosa
                    informationText.text = "";
                    breadOpen.SetActive(false);
                    cabbageBefore.SetActive(false);
                    breadReady.SetActive(true);
                    cabbageAfter.SetActive(true);
                    isBreadReady = true;
                    AudioManager.Play(AudioClipName.pop3);
                }
            }

            // PASO 7) Solo se indicara que el shuco ya esta completo cuando una de las manos del jugador este cerca del shuco
            if(isShucoComplete())
            {
                informationText.text = "Shuco Listo, mandalo a la parilla";
            }

            // EXTRA: Mostrar el estado del shuco que se esta preparando
            if(!isBreadHot)
            {
                uiForShuco.ActiveTextSelectedShuco(true);
            }

            if(isBreadHot)
            {
                uiForShuco.ActiveShucoElementsSelected(true);
                uiForShuco.ChangeStateShuco(elementsDone);
            }
        }
    }

    private void OnTriggerExit(Collider other)
    {
        informationText.text = "";
        AudioManager.PlayContinueSound(saugueSound, false);
        StopCoroutine("AddKetchup");
        StopCoroutine("AddMayonese");
        StopCoroutine("AddMustard");
        uiForShuco.ActiveTextSelectedShuco(false);
        uiForShuco.ActiveShucoElementsSelected(false);
    }

    // * =============================================================================
    // * === OWN METHODS =============================================================
    // * =============================================================================

    private void ActivateAndDestroyElementOfShuco(string tagElement, Collision other, GameObject obElement, AudioClipName audioClipName)
    {
        if(other.gameObject.tag.Equals(tagElement) && !obElement.activeSelf)
        {
            AudioManager.Play(audioClipName);
            obElement.SetActive(true);
            GameObject gameObjectTemp = other.gameObject;
            gameObjectTemp.transform.position = new Vector3(-1.3f, -0.50f, -5f);
        }
    }

    private void ActivateAndDestroyElementOfShuco(string tagElement, Collision other, GameObject obElement, AudioClipName audioClipName, int numElement)
    {
        if(other.gameObject.tag.Equals(tagElement) && !obElement.activeSelf)
        { 
            AudioManager.Play(audioClipName);
            obElement.SetActive(true);
            GameObject gameObjectTemp = other.gameObject;
            gameObjectTemp.transform.position = new Vector3(-1.3f, -0.50f, -5f);
            elementsDone[numElement] = true;
            uiForShuco.ChangeStateShuco(elementsDone);
        }
    }
    
    override public void ChangueMaterial()
    {
        AudioManager.Play(AudioClipName.point_bell);
        breadOpen.GetComponent<MeshRenderer>().material = materialReady;
        isBreadHot = true;
    }

    // Vamos a detectar si el shuco tiene todos los ingredientes y condiciones para denominarlo como completo
    private bool isShucoIngredientsComplete(){        
        return (breadOpen.activeSelf && saugue.activeSelf && bakon.activeSelf &&
                salami.activeSelf && chorizo.activeSelf &&
                guacamole.activeSelf && cabbageBefore.activeSelf &&
                ketchup.activeSelf && mayonese.activeSelf && mustard.activeSelf);
    }

    // Si el plato, bolsa de plastico y el papel estan activados indicaremos que el shuco ya esta completo
    public bool isShucoComplete(){
        return (tray.activeSelf && paper.activeSelf && plasticBag.activeSelf);
    }

    IEnumerator AddKetchup()
    {
        while(secondsKetchup <= saugueTime)
        {
            informationText.text = "ketchup: " + secondsKetchup + " s / " + saugueTime + " s";
            yield return new WaitForSeconds(1f);
            secondsKetchup++;
            if(secondsKetchup >= saugueTime)
            {
                ketchup.SetActive(true);
                elementsDone[2] = true;
                uiForShuco.ChangeStateShuco(elementsDone);
            }
        }
    }

    IEnumerator AddMayonese()
    {
        while(secondsMayonese <= saugueTime)
        {
            informationText.text = "Mayonese: " + secondsMayonese + " s / " + saugueTime + " s";
            yield return new WaitForSeconds(1f);
            secondsMayonese++;
            if(secondsMayonese >= saugueTime)
            {
                mayonese.SetActive(true);
                elementsDone[3] = true;
                uiForShuco.ChangeStateShuco(elementsDone);
            }
        }
    }

    IEnumerator AddMustard()
    {
        while(secondsMostard <= saugueTime)
        {
            informationText.text = "Mustard: " + secondsMostard + " s / " + saugueTime + " s";
            yield return new WaitForSeconds(1f);
            secondsMostard++;
            if(secondsMostard >= saugueTime)
            {
                mustard.SetActive(true);
                elementsDone[4] = true;
                uiForShuco.ChangeStateShuco(elementsDone);
            }
        }
    }

    // Pido perd\xF3n por repetir mucho c\xF3digo :(
}`},{title:"UI Element Mark",language:"csharp",description:"Handle all the scripts of the shucos process",code:`using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class UIElementMark : MonoBehaviour
{
    private Sprite spriteElementNotMarked;
    [SerializeField] private Sprite spriteElementMarked;


    // Start is called before the first frame update
    private void Start()
    {
        spriteElementNotMarked = this.GetComponent<Image>().sprite;

        if(spriteElementMarked == null)
        {
            Debug.LogError("You must need to put the image Element Done");
        }
    }

    public void ElementMarked()
    {
        this.GetComponent<Image>().sprite = spriteElementMarked;
    }

    public void ElementNotMarked()
    {
        this.GetComponent<Image>().sprite = spriteElementNotMarked;
    }
}`},{title:"UI For Shuco",language:"csharp",description:"Show dinamicly the elements of the shuco",code:`using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class UIForShuco : MonoBehaviour
{
    [SerializeField] private GameObject textSelectedShuco, shucoSelected;
    [SerializeField] private UIElementMark[] elementsMarked;
    private Dictionary<int, bool> elementsDone;

    public int TotalElements
    {
        get { return elementsMarked.Length;}
    }

    // Start is called before the first frame update
    private void Start()
    {
        if(textSelectedShuco == null)
        {
            Debug.LogError("the GameObject TextSelectedShuco is Null");
        }
        else
        {
            textSelectedShuco.SetActive(false);
        }

        if(shucoSelected == null)
        {
            Debug.LogError("the GameObject shucoSelected is Null");
        }
        else
        {
            shucoSelected.SetActive(false);
        }
    }

    private void Update()
    {
        if(elementsDone != null && shucoSelected.activeSelf)
        {
            // Iterar todo el diccionario
            foreach(KeyValuePair<int, bool> element in elementsDone)
            {
                int numElement = element.Key;
                bool isMark = element.Value;
                
                if(isMark) elementsMarked[numElement].ElementMarked();
                else elementsMarked[numElement].ElementNotMarked();
            }
        }
    }

    public void ActiveTextSelectedShuco(bool active)
    {
        textSelectedShuco.SetActive(active);
    }

    public void ActiveShucoElementsSelected(bool active)
    {
        shucoSelected.SetActive(active);
    }

    public void ChangeStateShuco(Dictionary<int, bool> elements)
    {
        elementsDone = elements;
    }
}`}]}}},Et=Vs.map(e=>({...e,contentConfig:iw[e.id]||{contentSections:[{type:"hero",data:{showGallery:!0,galleryType:"carousel"}},{type:"overview",data:{showTechnicalSpecs:!0,showTeamInfo:!0}}],customContent:{}}})),ef=[hh,ro,io,oo,mh,gh,vh],wl={totalGames:Vs.length,yearsExperience:new Date().getFullYear()-2020,studiosCreated:1,collaborations:Vs.filter(e=>e.teamSize!=="1 developer").length};const ow=()=>{const[e,t]=O.exports.useState(0),[n,r]=O.exports.useState("all");O.exports.useEffect(()=>{const d=setInterval(()=>{t(h=>(h+1)%ef.length)},4e3);return()=>clearInterval(d)},[]);const i=d=>{r(d),setTimeout(()=>{const h=document.getElementById("games-grid-section");if(h){const y=h.offsetTop-120;window.scrollTo({top:y,behavior:"smooth"})}},100)},o=({to:d,children:h,className:w,...y})=>u(He,{to:d,className:w,onClick:()=>{setTimeout(()=>{window.scrollTo({top:0,behavior:"smooth"})},200)},...y,children:h}),a=n==="all"?Et:n==="featured"?Et.filter(d=>d.featured):Et.filter(d=>d.status.toLowerCase()===n),l=d=>{switch(d.toLowerCase()){case"in development":return"#ffa500";case"released":return"#4caf50";case"completed":return"#2196f3";case"prototype":return"#9c27b0";case"paused":return"red";default:return"#666"}},s=()=>{const d=a.length;return d===0?"games-grid empty":d===1?"games-grid single":d===2?"games-grid double":d===3?"games-grid triple":d===4?"games-grid quad":d<=6?"games-grid medium":"games-grid large"},c=()=>{const d=a.length;return d===0?"games-grid-section empty":d===1?"games-grid-section single-game":d===2?"games-grid-section double-games":d===3?"games-grid-section triple-games":d===4?"games-grid-section quad-games":d<=6?"games-grid-section medium-games":"games-grid-section large-games"},p=()=>{const d=a.length;return Math.ceil(d/3)};return u("div",{className:"App",children:C("div",{className:"page-scroll",children:[C("section",{className:"games-hero",children:[C("div",{className:"games-bg-carousel",children:[ef.map((d,h)=>u("div",{className:`bg-slide ${h===e?"active":""}`,style:{backgroundImage:`url(${d})`}},h)),u("div",{className:"bg-overlay"})]}),C("div",{className:"games-hero-content",children:[u("h1",{className:"games-hero-title",children:"Game Development"}),C("p",{className:"games-hero-description",children:["My specialty is video game development and I","'","ve had the opportunity to create",u("span",{className:"highlight",children:" hackathons"}),","," ",u("span",{className:"highlight",children:"personal projects"}),",",u("span",{className:"highlight",children:" university projects"}),", and even as part of a",u("span",{className:"highlight",children:" startup studio"}),". I","'","m always open to new",u("span",{className:"highlight",children:" collaborations"})," and exciting game development challenges."]}),C("div",{className:"games-stats",children:[C("div",{className:"stat",children:[C("span",{className:"stat-number",children:[wl.totalGames,"+"]}),u("span",{className:"stat-label",children:"Games Created"})]}),C("div",{className:"stat",children:[C("span",{className:"stat-number",children:[wl.yearsExperience,"+"]}),u("span",{className:"stat-label",children:"Years Experience"})]}),C("div",{className:"stat",children:[u("span",{className:"stat-number",children:wl.studiosCreated}),u("span",{className:"stat-label",children:"Studio Founded"})]})]})]})]}),u("section",{className:"games-filter","data-button-count":"5",children:C("div",{className:"filter-container",children:[u("h2",{children:"Explore My Games"}),C("div",{className:"filter-buttons",children:[C("button",{className:`filter-btn ${n==="all"?"active":""}`,onClick:()=>i("all"),children:["All Games (",Et.length,")"]}),C("button",{className:`filter-btn ${n==="featured"?"active":""}`,onClick:()=>i("featured"),children:["Featured (",Et.filter(d=>d.featured).length,")"]}),C("button",{className:`filter-btn ${n==="in development"?"active":""}`,onClick:()=>i("in development"),children:["In Development (",Et.filter(d=>d.status.toLowerCase()==="in development").length,")"]}),C("button",{className:`filter-btn ${n==="released"?"active":""}`,onClick:()=>i("released"),children:["Released (",Et.filter(d=>d.status.toLowerCase()==="released").length,")"]}),C("button",{className:`filter-btn ${n==="completed"?"active":""}`,onClick:()=>i("completed"),children:["Completed (",Et.filter(d=>d.status.toLowerCase()==="completed").length,")"]})]})]})}),u("section",{id:"games-grid-section",className:c(),"data-game-count":a.length,"data-estimated-rows":p(),children:a.length===0?C("div",{className:"no-games-message",children:[u("h3",{children:"No games found"}),u("p",{children:"Try selecting a different filter to see more games."})]}):u("div",{className:s(),children:a.map(d=>C("div",{className:"game-card",children:[C("div",{className:"game-card-image",children:[u("img",{src:d.coverImage,alt:d.title}),u("div",{className:"game-card-overlay",children:u(o,{to:`/Portafolio_PW3/games/${d.id}`,className:"play-button",children:u("span",{children:"View Details"})})}),u("div",{className:"game-status",style:{backgroundColor:l(d.status)},children:d.status})]}),C("div",{className:"game-card-content",children:[u("h3",{className:"game-title",children:d.title}),u("p",{className:"game-subtitle",children:d.subtitle}),u("p",{className:"game-description",children:d.description}),C("div",{className:"game-meta",children:[C("div",{className:"game-info",children:[u("span",{className:"game-category",children:d.category}),u("span",{className:"game-year",children:d.year})]}),u("div",{className:"game-platform",children:d.platform})]}),u("div",{className:"game-tech",children:d.technologies.map((h,w)=>u("span",{className:"tech-tag",children:h},w))}),C("div",{className:"game-footer",children:[u("span",{className:"game-team",children:d.team}),u(o,{to:`/Portafolio_PW3/games/${d.id}`,className:"game-link",children:"Explore Game \u2192"})]})]})]},d.id))})}),u("section",{className:"itchio-content",children:C("div",{className:"itchio-container",children:[C("div",{className:"itchio-logo-section",children:[u("div",{className:"itchio-logo",children:u("div",{className:"itchio-icon",children:"\u{1F3AE}"})}),C("div",{className:"itchio-text",children:[u("h2",{className:"itchio-brand",children:"itch.io"}),u("p",{className:"itchio-subtitle",children:"Game Portfolio"})]})]}),C("div",{className:"itchio-info",children:[u("h1",{className:"itchio-title",children:"Play & Experience My Games"}),u("p",{className:"itchio-description",children:"Visit my itch.io profile to play and experience some of the games showcased above. Download, test, and enjoy interactive demos and full versions of my game development projects. Discover the creativity and passion behind each project!"}),u("a",{href:"https://crislayb.itch.io/",target:"_blank",rel:"noopener noreferrer",className:"btn-itchio",children:C("div",{className:"btn-neon-itchio",children:[u("span",{}),u("span",{}),u("span",{}),u("span",{}),u("p",{className:"text-itchio",children:"Visit My itch.io Profile"})]})})]})]})}),u("hr",{className:"hr-contact"}),u("section",{className:"eleven",children:u(ju,{})})]})})};var aw="/Portafolio_PW3/assets/cris_lay.79cc1072.jpg",lw="/Portafolio_PW3/assets/goldenfy_games_logo.e88f8f66.png",sw="/Portafolio_PW3/assets/tool-box.afc6fd6d.png",uw="/Portafolio_PW3/assets/window.98f348ee.png",cw="/Portafolio_PW3/assets/img-code-wars1.09f20f9e.png",dw="/Portafolio_PW3/assets/img-hackerrank.1a8a01d5.png",fw="/Portafolio_PW3/assets/my_self_in_3d.f1623073.png";const Cl=[aw,fw],Nn=[{id:1,title:"Platyfa - Goldenfy Studios (Videogame)",description:"Description and new updates about our latest game project...",link:"/Portafolio_PW3/games",date:"2025"},{id:2,title:"Instagram for Goldenfy Games Its Avaliable",description:"I'm exited to introduce all of you, the oficial instagram page",link:"https://www.instagram.com/goldenfy_studios?igsh=MWJpaXBnZGF3Nnhwcw==",date:"2025"}],pw=()=>{const[e,t]=O.exports.useState(0),[n,r]=O.exports.useState(0);return O.exports.useEffect(()=>{const i=setInterval(()=>{t(o=>(o+1)%Cl.length)},4e3);return()=>clearInterval(i)},[]),O.exports.useEffect(()=>{const i=setInterval(()=>{r(o=>(o+1)%Nn.length)},5e3);return()=>clearInterval(i)},[]),u("div",{className:"App",children:C("div",{className:"page-scroll",children:[C("section",{className:"hero-section",children:[C("div",{className:"shooting-stars",children:[u("div",{className:"star"}),u("div",{className:"star"}),u("div",{className:"star"}),u("div",{className:"star"}),u("div",{className:"star"}),u("div",{className:"star"}),u("div",{className:"star"}),u("div",{className:"star"}),u("div",{className:"star"}),u("div",{className:"star"})]}),C("div",{className:"hero-container",children:[u("div",{className:"profile-section",children:C("div",{className:"profile-image-container",children:[u("img",{className:"profile-image",src:Cl[e],alt:"Cristian Fernando Laynez Bachez"}),u("div",{className:"image-frame"}),u("div",{className:"image-indicators",children:Cl.map((i,o)=>u("button",{className:`indicator ${o===e?"active":""}`,onClick:()=>t(o)},o))})]})}),C("div",{className:"info-section",children:[u("h1",{className:"hero-name",children:"Cristian Fernando Laynez Bachez"}),u("p",{className:"hero-welcome",children:"Welcome to my web site and portfolio! You can know more about me and my projects. Be free to interact :)"}),C("div",{className:"roles-list",children:[u("p",{className:"role",children:"Computer Science Engineer"}),u("p",{className:"role",children:"Game Developer & Game Designer"}),u("p",{className:"role",children:"Full Stack Developer"}),u("p",{className:"role",children:"Project Manager"})]}),C("div",{className:"news-carousel",children:[C("div",{className:"news-item",children:[u("h3",{className:"news-title",children:Nn[n].title}),u("p",{className:"news-description",children:Nn[n].description}),C("div",{className:"news-footer",children:[u("span",{className:"news-date",children:Nn[n].date}),u(He,{to:Nn[n].link,className:"news-link",children:"Read More \u2192"})]})]}),u("div",{className:"news-indicators",children:Nn.map((i,o)=>u("button",{className:`indicator ${o===n?"active":""}`,onClick:()=>r(o)},o))})]})]})]})]}),u("section",{className:"about-me-section",children:u("div",{className:"about-me-container",children:C("div",{className:"about-me-content",children:[u("p",{className:"about-text",children:"I am an Engineer in Computer Science and Information Technology."}),u("p",{className:"about-text",children:"I consider myself a creative and analytical person"}),u("p",{className:"about-text",children:"capable of turning ideas and needs into reality."}),u("p",{className:"about-text highlight",children:"My greatest passion is video game development and design."}),u(He,{to:"/Portafolio_PW3/about",className:"btn-about-me",children:C("div",{className:"btn-neon-blue",children:[u("span",{}),u("span",{}),u("span",{}),u("span",{}),u("p",{className:"text-about-me",children:"Learn More About Me"})]})})]})})}),u("section",{className:"four",children:u("h1",{className:"habiltys",children:"Main Skills"})}),u("section",{className:"fourp",children:u(Zy,{})}),u("section",{className:"five",children:C("h1",{children:["Since I was a child, I have always liked playing video games. ",u("br",{}),"One of my biggest dreams and goals is to create the video games I have in my mind."," ",u("br",{}),"For this dream, I am studying Computer Science. ",u("br",{}),"Fortunately, I am achieving it with various projects ",u("br",{}),"that will be shown below."]})}),u("section",{className:"six",children:u("div",{children:u("h1",{children:"Video games developed and/or in development:"})})}),u("section",{className:"sixp",children:u(Us,{data:MA})}),u("br",{}),u("br",{}),u("section",{className:"goldenfy-header",children:u("div",{children:u("h1",{children:"Goldenfy Studios"})})}),u("section",{className:"goldenfy-content",children:C("div",{className:"goldenfy-container",children:[u("div",{className:"goldenfy-logo-section",children:u("img",{src:lw,alt:"Goldenfy Studios Logo",className:"goldenfy-logo-img"})}),C("div",{className:"goldenfy-info",children:[u("h1",{className:"startup-title",children:"The startup of a video game studio"}),u("p",{className:"startup-description",children:"Foundation and initiative of a small multidisciplinary group that seeks to create video games by mixing the best of gaming with new ideas and different contexts, among other varied experiences."}),u(He,{to:"https://www.instagram.com/goldenfy_studios?igsh=MWJpaXBnZGF3Nnhwcw==",className:"btn-learn-more",children:C("div",{className:"btn-neon",children:[u("span",{}),u("span",{}),u("span",{}),u("span",{}),u("p",{className:"text-learn-more",children:"Learn More About Goldenfy Studios"})]})})]})]})}),u("section",{className:"seven",children:C("div",{children:[C("h1",{children:["But I don","'","t just like video games."]}),u("h1",{children:"I also chose this career because I love computing and programming."})]})}),u("section",{className:"eight",children:C("div",{children:[u("h1",{children:"When I have the opportunity and time, I do several coding exercises and challenges on websites like:"}),u("br",{}),C("div",{className:"flex-competitive-code",children:[u("div",{className:"flex-item-left",children:u("a",{href:"https://www.codewars.com/users/CL%20The%20Dreamer",target:"_blank",rel:"noreferrer",children:u("img",{className:"img-competitive-code",src:cw,alt:"codewars"})})}),u("div",{className:"flex-item-right",children:u("a",{href:"https://www.hackerrank.com/cristianlaynezb1",target:"_blank",rel:"noreferrer",children:u("img",{className:"img-competitive-code",src:dw,alt:"hackerrank"})})})]}),u("br",{}),u("h1",{children:"Competitive Programming interests me"})]})}),u("hr",{className:"hr-langaugues"}),u("section",{className:"nine",children:C("div",{children:[u("h1",{children:"Programming Languages"}),u("br",{}),u("p",{children:"Press/click the icon \u{1F440}"})]})}),u("section",{className:"ninep",children:u("div",{children:u(kd,{MainIcon:uw,Data:kA,Number:"1"})})}),u("hr",{className:"hr-tools"}),u("section",{className:"ten",children:C("div",{children:[u("h1",{children:"Tools and Frameworks"}),u("br",{}),u("p",{children:"Press/click the icon \u{1F440}"})]})}),u("section",{className:"tenp",children:u("div",{children:u(kd,{MainIcon:sw,Data:NA,Number:"2"})})}),u("hr",{className:"hr-contact"}),u("section",{className:"eleven",children:u(ju,{})})]})})};const mw=({config:e,customContent:t})=>{const[n,r]=O.exports.useState(0);if(!t.codeSnippets)return null;const i=t.codeSnippets[n];return u("section",{className:"code-showcase-section",children:C("div",{className:"code-container",children:[u("h2",{children:"Code Showcase"}),u("p",{style:{textAlign:"center"},children:"Here are some key programming implementations from this project:"}),u("br",{}),u("div",{className:"code-navigation",children:t.codeSnippets.map((o,a)=>u("button",{className:`code-nav-btn ${a===n?"active":""}`,onClick:()=>r(a),children:o.title},a))}),C("div",{className:"code-display",children:[C("div",{className:"code-header",children:[u("h3",{children:i.title}),u("span",{className:"code-language",children:i.language})]}),u("pre",{className:"code-block",children:u("code",{className:`language-${i.language}`,children:i.code})})]}),e.showArchitecture&&C("div",{className:"architecture-info",children:[u("h3",{children:"Architecture Highlights"}),C("ul",{children:[u("li",{children:"Modular component-based design"}),u("li",{children:"Scalable state management"}),u("li",{children:"Performance-optimized algorithms"}),u("li",{children:"Clean code principles"})]})]})]})})},hw=({currentGame:e,allGames:t,maxGames:n=3,getStatusColor:r,handleScrollToTop:i})=>{const a=(()=>t.filter(d=>d.id!==e.id).sort((d,h)=>{const w=d.category===e.category?1:0,y=h.category===e.category?1:0,v=d.featured?1:0,S=h.featured?1:0,m=parseInt(d.year)||0,f=parseInt(h.year)||0;return y-w||S-v||f-m}).slice(0,n))();if(a.length===0)return null;const l=c=>c.slice(0,3),s=c=>c.length>120?c.substring(0,120)+"...":c;return u("section",{className:"related-games-section",children:C("div",{className:"related-games-container",children:[C("div",{className:"related-games-header",children:[u("h2",{children:"More Projects"}),u("p",{children:"Explore other games from my portfolio"})]}),u("div",{className:`related-games-grid games-count-${a.length}`,children:a.map(c=>C(He,{to:`/Portafolio_PW3/games/${c.id}`,className:"related-game-card",onClick:i,children:[C("div",{className:"related-game-image-container",children:[u("img",{src:c.coverImage,alt:c.title,className:"related-game-image",loading:"lazy"}),u("div",{className:"related-game-overlay",children:u("span",{className:"view-project-btn",children:"View Project"})}),u("div",{className:"related-game-status",style:{backgroundColor:r(c.status)},children:c.status}),c.featured&&u("div",{className:"featured-badge",children:"\u2B50 Featured"})]}),C("div",{className:"related-game-content",children:[C("div",{className:"related-game-meta",children:[u("span",{className:"game-category",children:c.category}),u("span",{className:"game-year",children:c.year})]}),u("h3",{className:"related-game-title",children:c.title}),u("p",{className:"related-game-subtitle",children:c.subtitle}),u("p",{className:"related-game-description",children:s(c.description)}),C("div",{className:"related-game-tech",children:[l(c.technologies).map((p,d)=>u("span",{className:"tech-badge",children:p},d)),c.technologies.length>3&&C("span",{className:"tech-more",children:["+",c.technologies.length-3," more"]})]}),C("div",{className:"related-game-footer",children:[u("div",{className:"team-info",children:u("span",{className:"team-size",children:c.teamSize})}),u("div",{className:"view-more",children:"View Details \u2192"})]})]})]},c.id))}),t.length>n+1&&u("div",{className:"view-all-games",children:C(He,{to:"/Portafolio_PW3/games",className:"view-all-btn",onClick:i,children:["View All Projects (",t.length-1," total)"]})})]})})},gw=({game:e,config:t={}})=>{const{displayStyle:n="cards",showIcons:r=!0}=t;if(!e.features||e.features.length===0)return null;const i=o=>{const a=o.toLowerCase();return a.includes("combat")||a.includes("battle")?"\u2694\uFE0F":a.includes("exploration")||a.includes("adventure")?"\u{1F5FA}\uFE0F":a.includes("narrative")||a.includes("story")?"\u{1F4D6}":a.includes("art")||a.includes("visual")?"\u{1F3A8}":a.includes("environment")||a.includes("world")?"\u{1F30D}":a.includes("puzzle")||a.includes("logic")?"\u{1F9E9}":a.includes("psychology")||a.includes("mind")?"\u{1F9E0}":a.includes("difficulty")||a.includes("challenge")?"\u{1F4C8}":a.includes("education")||a.includes("learning")?"\u{1F393}":a.includes("achievement")||a.includes("progress")?"\u{1F3C6}":a.includes("time")||a.includes("management")?"\u23F0":a.includes("ai")||a.includes("intelligence")?"\u{1F916}":a.includes("weapon")||a.includes("gun")?"\u{1F52B}":a.includes("destruct")||a.includes("break")?"\u{1F4A5}":a.includes("wave")||a.includes("horde")?"\u{1F47E}":a.includes("score")||a.includes("point")?"\u{1F4CA}":a.includes("strategy")||a.includes("tactical")?"\u265F\uFE0F":a.includes("historical")||a.includes("history")?"\u{1F3DB}\uFE0F":a.includes("unit")||a.includes("army")?"\u{1F465}":a.includes("campaign")||a.includes("mode")?"\u{1F3AF}":a.includes("authentic")||a.includes("real")?"\u2728":a.includes("cultural")||a.includes("tradition")?"\u{1F3EE}":a.includes("cooking")||a.includes("recipe")?"\u{1F468}\u200D\u{1F373}":a.includes("music")||a.includes("audio")?"\u{1F3B5}":a.includes("atmosphere")||a.includes("mood")?"\u{1F319}":a.includes("lighting")||a.includes("light")?"\u{1F4A1}":a.includes("gothic")||a.includes("dark")?"\u{1F987}":a.includes("focus")||a.includes("attention")?"\u{1F3AF}":"\u{1F3AE}"};return u("section",{className:"features-section",children:C("div",{className:"features-container",children:[C("div",{className:"features-header",children:[u("h2",{children:"Game Features"}),u("p",{children:"Key gameplay elements and mechanics that make this game special"})]}),u("div",{className:`features-grid ${n}`,children:e.features.map((o,a)=>C("div",{className:"feature-card",children:[r&&u("div",{className:"feature-icon",children:i(o)}),C("div",{className:"feature-content",children:[u("h3",{children:o}),u("div",{className:"feature-highlight"})]})]},a))})]})})},vw=({game:e,config:t={}})=>{const{layout:n="grid",showCaptions:r=!0}=t,[i,o]=O.exports.useState(null),[a,l]=O.exports.useState(0);if(!e.screenshots||e.screenshots.length===0)return null;const s=h=>{l(h),o(e.screenshots[h])},c=()=>{o(null)},p=()=>{const h=(a+1)%e.screenshots.length;l(h),o(e.screenshots[h])},d=()=>{const h=a===0?e.screenshots.length-1:a-1;l(h),o(e.screenshots[h])};return C("section",{className:"gallery-section",children:[C("div",{className:"gallery-container",children:[C("div",{className:"gallery-header",children:[u("h2",{children:"Screenshot Gallery"}),C("p",{children:["Visual showcase of ",e.title," gameplay and features"]}),u("div",{className:"gallery-stats",children:C("span",{children:[e.screenshots.length," Screenshots"]})})]}),u("div",{className:`gallery-grid ${n}`,children:e.screenshots.map((h,w)=>C("div",{className:"gallery-item",role:"button",tabIndex:0,onClick:()=>s(w),onKeyDown:y=>{(y.key==="Enter"||y.key===" ")&&s(w)},children:[u("img",{src:h,alt:`${e.title} screenshot ${w+1}`,className:"gallery-image",loading:"lazy"}),u("div",{className:"gallery-overlay",children:C("div",{className:"gallery-actions",children:[u("button",{className:"view-btn",children:"\u{1F50D} View"}),r&&C("span",{className:"image-number",children:[w+1," / ",e.screenshots.length]})]})})]},w))})]}),i&&u("div",{className:"lightbox-overlay",role:"button",tabIndex:0,onClick:c,onKeyDown:h=>{(h.key==="Enter"||h.key===" ")&&c()},children:C("div",{className:"lightbox-container",role:"dialog",children:[u("button",{className:"lightbox-close",onClick:c,children:"\xD7"}),u("button",{className:"lightbox-nav lightbox-prev",onClick:d,children:"\u276E"}),u("img",{src:i,alt:`${e.title} screenshot ${a+1}`,className:"lightbox-image"}),u("button",{className:"lightbox-nav lightbox-next",onClick:p,children:"\u276F"}),C("div",{className:"lightbox-info",children:[C("span",{children:[a+1," / ",e.screenshots.length]}),u("h3",{children:e.title})]})]})})]})},yw=({config:e,customContent:t})=>t.hackathonStory?u("section",{className:"hackathon-story-section",children:C("div",{className:"hackathon-container",children:[C("h2",{children:[t.hackathonStory.duration," Development Challenge"]}),e.showTimeline&&C("div",{className:"development-timeline",children:[u("h3",{children:"Development Timeline"}),u("div",{className:"timeline",children:t.hackathonStory.timeline.map((n,r)=>C("div",{className:"timeline-item",children:[C("div",{className:"timeline-hour",children:["Hour ",n.hour]}),u("div",{className:"timeline-event",children:n.event})]},r))})]}),e.showChallenges&&C("div",{className:"hackathon-challenges",children:[u("br",{}),u("h3",{children:"Challenges & Solutions"}),u("ul",{className:"challenges-list",children:t.hackathonStory.challenges.map((n,r)=>u("li",{children:n},r))})]}),e.showTeamworkers&&C("div",{className:"hackathon-challenges",children:[u("br",{}),u("h3",{children:"Tem work strategies"}),u("ul",{className:"challenges-list",children:t.hackathonStory.teamwork.map((n,r)=>u("li",{children:n},r))})]})]})}):null,Sw=({game:e,config:t})=>{const[n,r]=O.exports.useState(0),i=()=>{r(a=>(a+1)%e.screenshots.length)},o=()=>{r(a=>a===0?e.screenshots.length-1:a-1)};return C("section",{className:"hero-section",children:[C("div",{className:"hero-background",children:[u("img",{src:e.backgroundImage||e.coverImage,alt:e.title,className:"hero-bg-image"}),u("div",{className:"hero-overlay"})]}),C("div",{className:"hero-content",children:[C("div",{className:"hero-text",children:[u("h1",{className:"hero-title",children:e.title}),u("p",{className:"hero-subtitle",children:e.subtitle}),u("p",{className:"hero-description",children:e.description}),C("div",{className:"hero-meta",children:[u("span",{className:"hero-platform",children:e.platform}),u("span",{className:"hero-year",children:e.year}),u("span",{className:"hero-category",children:e.category})]})]}),t.showGallery&&u("div",{className:"hero-gallery",children:t.galleryType==="carousel"?C("div",{className:"image-carousel",children:[u("button",{className:"carousel-btn prev",onClick:o,children:"\u276E"}),u("img",{src:e.screenshots[n],alt:`${e.title} screenshot ${n+1}`,className:"carousel-image"}),u("button",{className:"carousel-btn next",onClick:i,children:"\u276F"}),u("div",{className:"carousel-indicators",children:e.screenshots.map((a,l)=>u("button",{className:`indicator ${l===n?"active":""}`,onClick:()=>r(l)},l))})]}):u("div",{className:"image-grid",children:e.screenshots.slice(0,4).map((a,l)=>u("button",{className:"grid-image-btn",onClick:()=>r(l),type:"button","aria-label":`Show screenshot ${l+1}`,children:u("img",{src:a,alt:`${e.title} screenshot ${l+1}`,className:"grid-image"})},l))})})]})]})},Aw=({game:e,config:t})=>u("section",{className:"overview-section",children:C("div",{className:"overview-container",children:[u("h2",{children:"Project Overview"}),C("div",{className:"overview-grid",children:[C("div",{className:"overview-description",children:[u("h3",{children:"About the Project"}),u("p",{children:e.longDescription}),e.features&&C("div",{className:"features-list",children:[u("h4",{children:"Key Features"}),u("ul",{children:e.features.map((n,r)=>u("li",{children:n},r))})]})]}),t.showTechnicalSpecs&&C("div",{className:"technical-specs",children:[u("h3",{children:"Technical Specifications"}),C("div",{className:"specs-grid",children:[C("div",{className:"spec-item",children:[u("span",{className:"spec-label",children:"Platform:"}),u("span",{children:e.platform})]}),C("div",{className:"spec-item",children:[u("span",{className:"spec-label",children:"Engine:"}),u("span",{children:e.technologies[0]||"Unity"})]}),C("div",{className:"spec-item",children:[u("span",{className:"spec-label",children:"Languages:"}),u("span",{children:e.technologies.join(", ")})]}),C("div",{className:"spec-item",children:[u("span",{className:"spec-label",children:"Status:"}),u("span",{children:e.status})]})]})]}),t.showTeamInfo&&C("div",{className:"team-info",children:[u("h3",{children:"Development Team"}),C("p",{children:[u("strong",{children:"Team:"})," ",e.team]}),C("p",{children:[u("strong",{children:"Size:"})," ",e.teamSize]}),e.development&&C(An,{children:[C("p",{children:[u("strong",{children:"Duration:"})," ",e.development.startDate," -"," ",e.development.estimatedRelease||e.development.completionDate]}),e.development.progress&&C("div",{className:"progress-bar",children:[C("label",{children:["Progress: ",e.development.progress,"%"]}),u("div",{className:"progress-container",children:u("div",{className:"progress-fill",style:{width:`${e.development.progress}%`}})})]})]})]})]})]})}),ww=()=>{const{gameId:e}=hy(),t=ym(),[n,r]=O.exports.useState(null),[i,o]=O.exports.useState(!0),a=()=>{bm({smooth:!0,delay:100})};O.exports.useEffect(()=>{window.scrollTo({top:0,behavior:"instant"})},[e]),O.exports.useEffect(()=>{const p=Et.find(d=>d.id===e);p?r(p):t("/Portafolio_PW3/games"),o(!1)},[e,t]);const l={hero:Sw,overview:Aw,"code-showcase":mw,features:gw,gallery:vw,"hackathon-story":yw},s=(p,d)=>{const h=l[p.type];return h?u(h,{game:n,config:p.data,customContent:n.contentConfig.customContent,sectionIndex:d},`${p.type}-${d}`):(console.warn(`Unknown section type: ${p.type}`),null)};if(i)return C("div",{className:"game-view-loading",children:[u("div",{className:"loading-spinner"}),u("p",{children:"Loading game details..."})]});if(!n)return C("div",{className:"game-view-error",children:[u("h2",{children:"Game Not Found"}),u("p",{children:"The game youre looking for doesnt exist."}),u(He,{to:"/Portafolio_PW3/games",className:"back-to-games-btn",onClick:a,children:"\u2190 Back to Games"})]});const c=p=>{switch(p.toLowerCase()){case"in development":return"#ffa500";case"released":return"#4caf50";case"completed":return"#2196f3";case"prototype":return"#9c27b0";case"paused":return"red";default:return"#666"}};return C("div",{className:"game-view",children:[u("nav",{className:"game-view-nav",children:C("div",{className:"nav-container",children:[C(He,{to:"/Portafolio_PW3/games",className:"back-btn",onClick:a,children:[u("span",{className:"back-icon",children:"\u2190"}),u("span",{className:"back-text",children:"Back to Games"})]}),C("div",{className:"game-nav-info",children:[u("h1",{className:"game-nav-title",children:n.title}),u("span",{className:"game-nav-status",style:{backgroundColor:c(n.status)},children:n.status})]}),u("div",{className:"nav-actions",children:n.link&&u("a",{href:n.link,target:"_blank",rel:"noopener noreferrer",className:"play-game-btn",children:u("span",{className:"play-text",children:"Play Game"})})})]})}),u("main",{className:"game-view-content",children:n.contentConfig.contentSections.map((p,d)=>s(p,d))}),u(hw,{currentGame:n,allGames:Et,maxGames:3,getStatusColor:c,handleScrollToTop:a})]})},Cw=()=>C(Iy,{children:[u(xr,{path:"/Portafolio_PW3/",element:C(An,{children:[u(zi,{}),u(pw,{}),u(Ui,{})]})}),u(xr,{path:"/Portafolio_PW3/about",element:C(An,{children:[u(zi,{}),u(jA,{}),u(Ui,{})]})}),u(xr,{path:"/Portafolio_PW3/games",element:C(An,{children:[u(zi,{}),u(ow,{}),u(Ui,{})]})}),u(xr,{path:"/Portafolio_PW3/games/:gameId",element:C(An,{children:[u(zi,{}),u(ww,{}),u(Ui,{})]})})]});bl.createRoot(document.getElementById("root")).render(u(Uy,{children:u(Cw,{})}));
