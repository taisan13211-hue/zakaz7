(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}})();var at=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function $f(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function zf(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var r=function n(){return this instanceof n?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach(function(n){var s=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(r,n,s.get?s:{enumerable:!0,get:function(){return e[n]}})}),r}var $u={exports:{}},zi={},zu={exports:{}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xs=Symbol.for("react.element"),Uf=Symbol.for("react.portal"),Df=Symbol.for("react.fragment"),Ff=Symbol.for("react.strict_mode"),Bf=Symbol.for("react.profiler"),Wf=Symbol.for("react.provider"),Vf=Symbol.for("react.context"),Hf=Symbol.for("react.forward_ref"),Gf=Symbol.for("react.suspense"),qf=Symbol.for("react.memo"),Kf=Symbol.for("react.lazy"),rc=Symbol.iterator;function Jf(e){return e===null||typeof e!="object"?null:(e=rc&&e[rc]||e["@@iterator"],typeof e=="function"?e:null)}var Uu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Du=Object.assign,Fu={};function xn(e,t,r){this.props=e,this.context=t,this.refs=Fu,this.updater=r||Uu}xn.prototype.isReactComponent={};xn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};xn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Bu(){}Bu.prototype=xn.prototype;function Zo(e,t,r){this.props=e,this.context=t,this.refs=Fu,this.updater=r||Uu}var el=Zo.prototype=new Bu;el.constructor=Zo;Du(el,xn.prototype);el.isPureReactComponent=!0;var nc=Array.isArray,Wu=Object.prototype.hasOwnProperty,tl={current:null},Vu={key:!0,ref:!0,__self:!0,__source:!0};function Hu(e,t,r){var n,s={},a=null,o=null;if(t!=null)for(n in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)Wu.call(t,n)&&!Vu.hasOwnProperty(n)&&(s[n]=t[n]);var l=arguments.length-2;if(l===1)s.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];s.children=c}if(e&&e.defaultProps)for(n in l=e.defaultProps,l)s[n]===void 0&&(s[n]=l[n]);return{$$typeof:xs,type:e,key:a,ref:o,props:s,_owner:tl.current}}function Qf(e,t){return{$$typeof:xs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function rl(e){return typeof e=="object"&&e!==null&&e.$$typeof===xs}function Xf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var sc=/\/+/g;function ca(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Xf(""+e.key):t.toString(36)}function Qs(e,t,r,n,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case xs:case Uf:o=!0}}if(o)return o=e,s=s(o),e=n===""?"."+ca(o,0):n,nc(s)?(r="",e!=null&&(r=e.replace(sc,"$&/")+"/"),Qs(s,t,r,"",function(u){return u})):s!=null&&(rl(s)&&(s=Qf(s,r+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(sc,"$&/")+"/")+e)),t.push(s)),1;if(o=0,n=n===""?".":n+":",nc(e))for(var l=0;l<e.length;l++){a=e[l];var c=n+ca(a,l);o+=Qs(a,t,r,c,s)}else if(c=Jf(e),typeof c=="function")for(e=c.call(e),l=0;!(a=e.next()).done;)a=a.value,c=n+ca(a,l++),o+=Qs(a,t,r,c,s);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Cs(e,t,r){if(e==null)return e;var n=[],s=0;return Qs(e,n,"","",function(a){return t.call(r,a,s++)}),n}function Yf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ue={current:null},Xs={transition:null},Zf={ReactCurrentDispatcher:Ue,ReactCurrentBatchConfig:Xs,ReactCurrentOwner:tl};function Gu(){throw Error("act(...) is not supported in production builds of React.")}G.Children={map:Cs,forEach:function(e,t,r){Cs(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Cs(e,function(){t++}),t},toArray:function(e){return Cs(e,function(t){return t})||[]},only:function(e){if(!rl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};G.Component=xn;G.Fragment=Df;G.Profiler=Bf;G.PureComponent=Zo;G.StrictMode=Ff;G.Suspense=Gf;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zf;G.act=Gu;G.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Du({},e.props),s=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=tl.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Wu.call(t,c)&&!Vu.hasOwnProperty(c)&&(n[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)n.children=r;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];n.children=l}return{$$typeof:xs,type:e.type,key:s,ref:a,props:n,_owner:o}};G.createContext=function(e){return e={$$typeof:Vf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Wf,_context:e},e.Consumer=e};G.createElement=Hu;G.createFactory=function(e){var t=Hu.bind(null,e);return t.type=e,t};G.createRef=function(){return{current:null}};G.forwardRef=function(e){return{$$typeof:Hf,render:e}};G.isValidElement=rl;G.lazy=function(e){return{$$typeof:Kf,_payload:{_status:-1,_result:e},_init:Yf}};G.memo=function(e,t){return{$$typeof:qf,type:e,compare:t===void 0?null:t}};G.startTransition=function(e){var t=Xs.transition;Xs.transition={};try{e()}finally{Xs.transition=t}};G.unstable_act=Gu;G.useCallback=function(e,t){return Ue.current.useCallback(e,t)};G.useContext=function(e){return Ue.current.useContext(e)};G.useDebugValue=function(){};G.useDeferredValue=function(e){return Ue.current.useDeferredValue(e)};G.useEffect=function(e,t){return Ue.current.useEffect(e,t)};G.useId=function(){return Ue.current.useId()};G.useImperativeHandle=function(e,t,r){return Ue.current.useImperativeHandle(e,t,r)};G.useInsertionEffect=function(e,t){return Ue.current.useInsertionEffect(e,t)};G.useLayoutEffect=function(e,t){return Ue.current.useLayoutEffect(e,t)};G.useMemo=function(e,t){return Ue.current.useMemo(e,t)};G.useReducer=function(e,t,r){return Ue.current.useReducer(e,t,r)};G.useRef=function(e){return Ue.current.useRef(e)};G.useState=function(e){return Ue.current.useState(e)};G.useSyncExternalStore=function(e,t,r){return Ue.current.useSyncExternalStore(e,t,r)};G.useTransition=function(){return Ue.current.useTransition()};G.version="18.3.1";zu.exports=G;var I=zu.exports;const Ha=$f(I);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var em=I,tm=Symbol.for("react.element"),rm=Symbol.for("react.fragment"),nm=Object.prototype.hasOwnProperty,sm=em.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,im={key:!0,ref:!0,__self:!0,__source:!0};function qu(e,t,r){var n,s={},a=null,o=null;r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(n in t)nm.call(t,n)&&!im.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)s[n]===void 0&&(s[n]=t[n]);return{$$typeof:tm,type:e,key:a,ref:o,props:s,_owner:sm.current}}zi.Fragment=rm;zi.jsx=qu;zi.jsxs=qu;$u.exports=zi;var i=$u.exports,Ku={exports:{}},Ze={},Ju={exports:{}},Qu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(f,k){var S=f.length;f.push(k);e:for(;0<S;){var b=S-1>>>1,C=f[b];if(0<s(C,k))f[b]=k,f[S]=C,S=b;else break e}}function r(f){return f.length===0?null:f[0]}function n(f){if(f.length===0)return null;var k=f[0],S=f.pop();if(S!==k){f[0]=S;e:for(var b=0,C=f.length,R=C>>>1;b<R;){var z=2*(b+1)-1,Q=f[z],se=z+1,Z=f[se];if(0>s(Q,S))se<C&&0>s(Z,Q)?(f[b]=Z,f[se]=S,b=se):(f[b]=Q,f[z]=S,b=z);else if(se<C&&0>s(Z,S))f[b]=Z,f[se]=S,b=se;else break e}}return k}function s(f,k){var S=f.sortIndex-k.sortIndex;return S!==0?S:f.id-k.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var c=[],u=[],d=1,h=null,m=3,x=!1,w=!1,j=!1,v=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(f){for(var k=r(u);k!==null;){if(k.callback===null)n(u);else if(k.startTime<=f)n(u),k.sortIndex=k.expirationTime,t(c,k);else break;k=r(u)}}function _(f){if(j=!1,y(f),!w)if(r(c)!==null)w=!0,Y(E);else{var k=r(u);k!==null&&A(_,k.startTime-f)}}function E(f,k){w=!1,j&&(j=!1,g(P),P=-1),x=!0;var S=m;try{for(y(k),h=r(c);h!==null&&(!(h.expirationTime>k)||f&&!de());){var b=h.callback;if(typeof b=="function"){h.callback=null,m=h.priorityLevel;var C=b(h.expirationTime<=k);k=e.unstable_now(),typeof C=="function"?h.callback=C:h===r(c)&&n(c),y(k)}else n(c);h=r(c)}if(h!==null)var R=!0;else{var z=r(u);z!==null&&A(_,z.startTime-k),R=!1}return R}finally{h=null,m=S,x=!1}}var N=!1,T=null,P=-1,B=5,D=-1;function de(){return!(e.unstable_now()-D<B)}function pe(){if(T!==null){var f=e.unstable_now();D=f;var k=!0;try{k=T(!0,f)}finally{k?_e():(N=!1,T=null)}}else N=!1}var _e;if(typeof p=="function")_e=function(){p(pe)};else if(typeof MessageChannel<"u"){var Ne=new MessageChannel,Oe=Ne.port2;Ne.port1.onmessage=pe,_e=function(){Oe.postMessage(null)}}else _e=function(){v(pe,0)};function Y(f){T=f,N||(N=!0,_e())}function A(f,k){P=v(function(){f(e.unstable_now())},k)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(f){f.callback=null},e.unstable_continueExecution=function(){w||x||(w=!0,Y(E))},e.unstable_forceFrameRate=function(f){0>f||125<f?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<f?Math.floor(1e3/f):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(f){switch(m){case 1:case 2:case 3:var k=3;break;default:k=m}var S=m;m=k;try{return f()}finally{m=S}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(f,k){switch(f){case 1:case 2:case 3:case 4:case 5:break;default:f=3}var S=m;m=f;try{return k()}finally{m=S}},e.unstable_scheduleCallback=function(f,k,S){var b=e.unstable_now();switch(typeof S=="object"&&S!==null?(S=S.delay,S=typeof S=="number"&&0<S?b+S:b):S=b,f){case 1:var C=-1;break;case 2:C=250;break;case 5:C=1073741823;break;case 4:C=1e4;break;default:C=5e3}return C=S+C,f={id:d++,callback:k,priorityLevel:f,startTime:S,expirationTime:C,sortIndex:-1},S>b?(f.sortIndex=S,t(u,f),r(c)===null&&f===r(u)&&(j?(g(P),P=-1):j=!0,A(_,S-b))):(f.sortIndex=C,t(c,f),w||x||(w=!0,Y(E))),f},e.unstable_shouldYield=de,e.unstable_wrapCallback=function(f){var k=m;return function(){var S=m;m=k;try{return f.apply(this,arguments)}finally{m=S}}}})(Qu);Ju.exports=Qu;var am=Ju.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var om=I,Ye=am;function O(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xu=new Set,Zn={};function Or(e,t){cn(e,t),cn(e+"Capture",t)}function cn(e,t){for(Zn[e]=t,e=0;e<t.length;e++)Xu.add(t[e])}var At=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ga=Object.prototype.hasOwnProperty,lm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ic={},ac={};function cm(e){return Ga.call(ac,e)?!0:Ga.call(ic,e)?!1:lm.test(e)?ac[e]=!0:(ic[e]=!0,!1)}function um(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function dm(e,t,r,n){if(t===null||typeof t>"u"||um(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function De(e,t,r,n,s,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=s,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var Pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Pe[e]=new De(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Pe[t]=new De(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Pe[e]=new De(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Pe[e]=new De(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Pe[e]=new De(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Pe[e]=new De(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Pe[e]=new De(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Pe[e]=new De(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Pe[e]=new De(e,5,!1,e.toLowerCase(),null,!1,!1)});var nl=/[\-:]([a-z])/g;function sl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(nl,sl);Pe[t]=new De(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(nl,sl);Pe[t]=new De(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(nl,sl);Pe[t]=new De(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Pe[e]=new De(e,1,!1,e.toLowerCase(),null,!1,!1)});Pe.xlinkHref=new De("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Pe[e]=new De(e,1,!1,e.toLowerCase(),null,!0,!0)});function il(e,t,r,n){var s=Pe.hasOwnProperty(t)?Pe[t]:null;(s!==null?s.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(dm(t,r,s,n)&&(r=null),n||s===null?cm(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):s.mustUseProperty?e[s.propertyName]=r===null?s.type===3?!1:"":r:(t=s.attributeName,n=s.attributeNamespace,r===null?e.removeAttribute(t):(s=s.type,r=s===3||s===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var zt=om.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Es=Symbol.for("react.element"),Vr=Symbol.for("react.portal"),Hr=Symbol.for("react.fragment"),al=Symbol.for("react.strict_mode"),qa=Symbol.for("react.profiler"),Yu=Symbol.for("react.provider"),Zu=Symbol.for("react.context"),ol=Symbol.for("react.forward_ref"),Ka=Symbol.for("react.suspense"),Ja=Symbol.for("react.suspense_list"),ll=Symbol.for("react.memo"),Wt=Symbol.for("react.lazy"),ed=Symbol.for("react.offscreen"),oc=Symbol.iterator;function Sn(e){return e===null||typeof e!="object"?null:(e=oc&&e[oc]||e["@@iterator"],typeof e=="function"?e:null)}var ce=Object.assign,ua;function Mn(e){if(ua===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);ua=t&&t[1]||""}return`
`+ua+e}var da=!1;function ha(e,t){if(!e||da)return"";da=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var n=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){n=u}e.call(t.prototype)}else{try{throw Error()}catch(u){n=u}e()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var s=u.stack.split(`
`),a=n.stack.split(`
`),o=s.length-1,l=a.length-1;1<=o&&0<=l&&s[o]!==a[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==a[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==a[l]){var c=`
`+s[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=l);break}}}finally{da=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Mn(e):""}function hm(e){switch(e.tag){case 5:return Mn(e.type);case 16:return Mn("Lazy");case 13:return Mn("Suspense");case 19:return Mn("SuspenseList");case 0:case 2:case 15:return e=ha(e.type,!1),e;case 11:return e=ha(e.type.render,!1),e;case 1:return e=ha(e.type,!0),e;default:return""}}function Qa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Hr:return"Fragment";case Vr:return"Portal";case qa:return"Profiler";case al:return"StrictMode";case Ka:return"Suspense";case Ja:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Zu:return(e.displayName||"Context")+".Consumer";case Yu:return(e._context.displayName||"Context")+".Provider";case ol:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ll:return t=e.displayName||null,t!==null?t:Qa(e.type)||"Memo";case Wt:t=e._payload,e=e._init;try{return Qa(e(t))}catch{}}return null}function fm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qa(t);case 8:return t===al?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function sr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function td(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function mm(e){var t=td(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var s=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(o){n=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ps(e){e._valueTracker||(e._valueTracker=mm(e))}function rd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=td(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function ci(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Xa(e,t){var r=t.checked;return ce({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function lc(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=sr(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function nd(e,t){t=t.checked,t!=null&&il(e,"checked",t,!1)}function Ya(e,t){nd(e,t);var r=sr(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Za(e,t.type,r):t.hasOwnProperty("defaultValue")&&Za(e,t.type,sr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function cc(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Za(e,t,r){(t!=="number"||ci(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var $n=Array.isArray;function rn(e,t,r,n){if(e=e.options,t){t={};for(var s=0;s<r.length;s++)t["$"+r[s]]=!0;for(r=0;r<e.length;r++)s=t.hasOwnProperty("$"+e[r].value),e[r].selected!==s&&(e[r].selected=s),s&&n&&(e[r].defaultSelected=!0)}else{for(r=""+sr(r),t=null,s=0;s<e.length;s++){if(e[s].value===r){e[s].selected=!0,n&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function eo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(O(91));return ce({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function uc(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(O(92));if($n(r)){if(1<r.length)throw Error(O(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:sr(r)}}function sd(e,t){var r=sr(t.value),n=sr(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function dc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function id(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function to(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?id(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ts,ad=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,s){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ts=Ts||document.createElement("div"),Ts.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ts.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function es(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Fn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pm=["Webkit","ms","Moz","O"];Object.keys(Fn).forEach(function(e){pm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Fn[t]=Fn[e]})});function od(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Fn.hasOwnProperty(e)&&Fn[e]?(""+t).trim():t+"px"}function ld(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,s=od(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,s):e[r]=s}}var gm=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ro(e,t){if(t){if(gm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(O(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(O(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(O(61))}if(t.style!=null&&typeof t.style!="object")throw Error(O(62))}}function no(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var so=null;function cl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var io=null,nn=null,sn=null;function hc(e){if(e=ws(e)){if(typeof io!="function")throw Error(O(280));var t=e.stateNode;t&&(t=Wi(t),io(e.stateNode,e.type,t))}}function cd(e){nn?sn?sn.push(e):sn=[e]:nn=e}function ud(){if(nn){var e=nn,t=sn;if(sn=nn=null,hc(e),t)for(e=0;e<t.length;e++)hc(t[e])}}function dd(e,t){return e(t)}function hd(){}var fa=!1;function fd(e,t,r){if(fa)return e(t,r);fa=!0;try{return dd(e,t,r)}finally{fa=!1,(nn!==null||sn!==null)&&(hd(),ud())}}function ts(e,t){var r=e.stateNode;if(r===null)return null;var n=Wi(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(O(231,t,typeof r));return r}var ao=!1;if(At)try{var Cn={};Object.defineProperty(Cn,"passive",{get:function(){ao=!0}}),window.addEventListener("test",Cn,Cn),window.removeEventListener("test",Cn,Cn)}catch{ao=!1}function xm(e,t,r,n,s,a,o,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(d){this.onError(d)}}var Bn=!1,ui=null,di=!1,oo=null,ym={onError:function(e){Bn=!0,ui=e}};function vm(e,t,r,n,s,a,o,l,c){Bn=!1,ui=null,xm.apply(ym,arguments)}function wm(e,t,r,n,s,a,o,l,c){if(vm.apply(this,arguments),Bn){if(Bn){var u=ui;Bn=!1,ui=null}else throw Error(O(198));di||(di=!0,oo=u)}}function Ir(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function md(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function fc(e){if(Ir(e)!==e)throw Error(O(188))}function jm(e){var t=e.alternate;if(!t){if(t=Ir(e),t===null)throw Error(O(188));return t!==e?null:e}for(var r=e,n=t;;){var s=r.return;if(s===null)break;var a=s.alternate;if(a===null){if(n=s.return,n!==null){r=n;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===r)return fc(s),e;if(a===n)return fc(s),t;a=a.sibling}throw Error(O(188))}if(r.return!==n.return)r=s,n=a;else{for(var o=!1,l=s.child;l;){if(l===r){o=!0,r=s,n=a;break}if(l===n){o=!0,n=s,r=a;break}l=l.sibling}if(!o){for(l=a.child;l;){if(l===r){o=!0,r=a,n=s;break}if(l===n){o=!0,n=a,r=s;break}l=l.sibling}if(!o)throw Error(O(189))}}if(r.alternate!==n)throw Error(O(190))}if(r.tag!==3)throw Error(O(188));return r.stateNode.current===r?e:t}function pd(e){return e=jm(e),e!==null?gd(e):null}function gd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=gd(e);if(t!==null)return t;e=e.sibling}return null}var xd=Ye.unstable_scheduleCallback,mc=Ye.unstable_cancelCallback,bm=Ye.unstable_shouldYield,km=Ye.unstable_requestPaint,fe=Ye.unstable_now,_m=Ye.unstable_getCurrentPriorityLevel,ul=Ye.unstable_ImmediatePriority,yd=Ye.unstable_UserBlockingPriority,hi=Ye.unstable_NormalPriority,Nm=Ye.unstable_LowPriority,vd=Ye.unstable_IdlePriority,Ui=null,jt=null;function Sm(e){if(jt&&typeof jt.onCommitFiberRoot=="function")try{jt.onCommitFiberRoot(Ui,e,void 0,(e.current.flags&128)===128)}catch{}}var pt=Math.clz32?Math.clz32:Pm,Cm=Math.log,Em=Math.LN2;function Pm(e){return e>>>=0,e===0?32:31-(Cm(e)/Em|0)|0}var Os=64,Is=4194304;function zn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function fi(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,s=e.suspendedLanes,a=e.pingedLanes,o=r&268435455;if(o!==0){var l=o&~s;l!==0?n=zn(l):(a&=o,a!==0&&(n=zn(a)))}else o=r&~s,o!==0?n=zn(o):a!==0&&(n=zn(a));if(n===0)return 0;if(t!==0&&t!==n&&!(t&s)&&(s=n&-n,a=t&-t,s>=a||s===16&&(a&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-pt(t),s=1<<r,n|=e[r],t&=~s;return n}function Tm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Om(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-pt(a),l=1<<o,c=s[o];c===-1?(!(l&r)||l&n)&&(s[o]=Tm(l,t)):c<=t&&(e.expiredLanes|=l),a&=~l}}function lo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function wd(){var e=Os;return Os<<=1,!(Os&4194240)&&(Os=64),e}function ma(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function ys(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-pt(t),e[t]=r}function Im(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var s=31-pt(r),a=1<<s;t[s]=0,n[s]=-1,e[s]=-1,r&=~a}}function dl(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-pt(r),s=1<<n;s&t|e[n]&t&&(e[n]|=t),r&=~s}}var X=0;function jd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var bd,hl,kd,_d,Nd,co=!1,As=[],Qt=null,Xt=null,Yt=null,rs=new Map,ns=new Map,Ht=[],Am="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pc(e,t){switch(e){case"focusin":case"focusout":Qt=null;break;case"dragenter":case"dragleave":Xt=null;break;case"mouseover":case"mouseout":Yt=null;break;case"pointerover":case"pointerout":rs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ns.delete(t.pointerId)}}function En(e,t,r,n,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:a,targetContainers:[s]},t!==null&&(t=ws(t),t!==null&&hl(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Rm(e,t,r,n,s){switch(t){case"focusin":return Qt=En(Qt,e,t,r,n,s),!0;case"dragenter":return Xt=En(Xt,e,t,r,n,s),!0;case"mouseover":return Yt=En(Yt,e,t,r,n,s),!0;case"pointerover":var a=s.pointerId;return rs.set(a,En(rs.get(a)||null,e,t,r,n,s)),!0;case"gotpointercapture":return a=s.pointerId,ns.set(a,En(ns.get(a)||null,e,t,r,n,s)),!0}return!1}function Sd(e){var t=yr(e.target);if(t!==null){var r=Ir(t);if(r!==null){if(t=r.tag,t===13){if(t=md(r),t!==null){e.blockedOn=t,Nd(e.priority,function(){kd(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ys(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=uo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);so=n,r.target.dispatchEvent(n),so=null}else return t=ws(r),t!==null&&hl(t),e.blockedOn=r,!1;t.shift()}return!0}function gc(e,t,r){Ys(e)&&r.delete(t)}function Lm(){co=!1,Qt!==null&&Ys(Qt)&&(Qt=null),Xt!==null&&Ys(Xt)&&(Xt=null),Yt!==null&&Ys(Yt)&&(Yt=null),rs.forEach(gc),ns.forEach(gc)}function Pn(e,t){e.blockedOn===t&&(e.blockedOn=null,co||(co=!0,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,Lm)))}function ss(e){function t(s){return Pn(s,e)}if(0<As.length){Pn(As[0],e);for(var r=1;r<As.length;r++){var n=As[r];n.blockedOn===e&&(n.blockedOn=null)}}for(Qt!==null&&Pn(Qt,e),Xt!==null&&Pn(Xt,e),Yt!==null&&Pn(Yt,e),rs.forEach(t),ns.forEach(t),r=0;r<Ht.length;r++)n=Ht[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<Ht.length&&(r=Ht[0],r.blockedOn===null);)Sd(r),r.blockedOn===null&&Ht.shift()}var an=zt.ReactCurrentBatchConfig,mi=!0;function Mm(e,t,r,n){var s=X,a=an.transition;an.transition=null;try{X=1,fl(e,t,r,n)}finally{X=s,an.transition=a}}function $m(e,t,r,n){var s=X,a=an.transition;an.transition=null;try{X=4,fl(e,t,r,n)}finally{X=s,an.transition=a}}function fl(e,t,r,n){if(mi){var s=uo(e,t,r,n);if(s===null)_a(e,t,n,pi,r),pc(e,n);else if(Rm(s,e,t,r,n))n.stopPropagation();else if(pc(e,n),t&4&&-1<Am.indexOf(e)){for(;s!==null;){var a=ws(s);if(a!==null&&bd(a),a=uo(e,t,r,n),a===null&&_a(e,t,n,pi,r),a===s)break;s=a}s!==null&&n.stopPropagation()}else _a(e,t,n,null,r)}}var pi=null;function uo(e,t,r,n){if(pi=null,e=cl(n),e=yr(e),e!==null)if(t=Ir(e),t===null)e=null;else if(r=t.tag,r===13){if(e=md(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return pi=e,null}function Cd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_m()){case ul:return 1;case yd:return 4;case hi:case Nm:return 16;case vd:return 536870912;default:return 16}default:return 16}}var Kt=null,ml=null,Zs=null;function Ed(){if(Zs)return Zs;var e,t=ml,r=t.length,n,s="value"in Kt?Kt.value:Kt.textContent,a=s.length;for(e=0;e<r&&t[e]===s[e];e++);var o=r-e;for(n=1;n<=o&&t[r-n]===s[a-n];n++);return Zs=s.slice(e,1<n?1-n:void 0)}function ei(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Rs(){return!0}function xc(){return!1}function et(e){function t(r,n,s,a,o){this._reactName=r,this._targetInst=s,this.type=n,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Rs:xc,this.isPropagationStopped=xc,this}return ce(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Rs)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Rs)},persist:function(){},isPersistent:Rs}),t}var yn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pl=et(yn),vs=ce({},yn,{view:0,detail:0}),zm=et(vs),pa,ga,Tn,Di=ce({},vs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Tn&&(Tn&&e.type==="mousemove"?(pa=e.screenX-Tn.screenX,ga=e.screenY-Tn.screenY):ga=pa=0,Tn=e),pa)},movementY:function(e){return"movementY"in e?e.movementY:ga}}),yc=et(Di),Um=ce({},Di,{dataTransfer:0}),Dm=et(Um),Fm=ce({},vs,{relatedTarget:0}),xa=et(Fm),Bm=ce({},yn,{animationName:0,elapsedTime:0,pseudoElement:0}),Wm=et(Bm),Vm=ce({},yn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Hm=et(Vm),Gm=ce({},yn,{data:0}),vc=et(Gm),qm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Km={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Jm[e])?!!t[e]:!1}function gl(){return Qm}var Xm=ce({},vs,{key:function(e){if(e.key){var t=qm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ei(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Km[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gl,charCode:function(e){return e.type==="keypress"?ei(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ei(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ym=et(Xm),Zm=ce({},Di,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wc=et(Zm),ep=ce({},vs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gl}),tp=et(ep),rp=ce({},yn,{propertyName:0,elapsedTime:0,pseudoElement:0}),np=et(rp),sp=ce({},Di,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ip=et(sp),ap=[9,13,27,32],xl=At&&"CompositionEvent"in window,Wn=null;At&&"documentMode"in document&&(Wn=document.documentMode);var op=At&&"TextEvent"in window&&!Wn,Pd=At&&(!xl||Wn&&8<Wn&&11>=Wn),jc=" ",bc=!1;function Td(e,t){switch(e){case"keyup":return ap.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Od(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gr=!1;function lp(e,t){switch(e){case"compositionend":return Od(t);case"keypress":return t.which!==32?null:(bc=!0,jc);case"textInput":return e=t.data,e===jc&&bc?null:e;default:return null}}function cp(e,t){if(Gr)return e==="compositionend"||!xl&&Td(e,t)?(e=Ed(),Zs=ml=Kt=null,Gr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Pd&&t.locale!=="ko"?null:t.data;default:return null}}var up={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!up[e.type]:t==="textarea"}function Id(e,t,r,n){cd(n),t=gi(t,"onChange"),0<t.length&&(r=new pl("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Vn=null,is=null;function dp(e){Wd(e,0)}function Fi(e){var t=Jr(e);if(rd(t))return e}function hp(e,t){if(e==="change")return t}var Ad=!1;if(At){var ya;if(At){var va="oninput"in document;if(!va){var _c=document.createElement("div");_c.setAttribute("oninput","return;"),va=typeof _c.oninput=="function"}ya=va}else ya=!1;Ad=ya&&(!document.documentMode||9<document.documentMode)}function Nc(){Vn&&(Vn.detachEvent("onpropertychange",Rd),is=Vn=null)}function Rd(e){if(e.propertyName==="value"&&Fi(is)){var t=[];Id(t,is,e,cl(e)),fd(dp,t)}}function fp(e,t,r){e==="focusin"?(Nc(),Vn=t,is=r,Vn.attachEvent("onpropertychange",Rd)):e==="focusout"&&Nc()}function mp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fi(is)}function pp(e,t){if(e==="click")return Fi(t)}function gp(e,t){if(e==="input"||e==="change")return Fi(t)}function xp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var xt=typeof Object.is=="function"?Object.is:xp;function as(e,t){if(xt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var s=r[n];if(!Ga.call(t,s)||!xt(e[s],t[s]))return!1}return!0}function Sc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Cc(e,t){var r=Sc(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Sc(r)}}function Ld(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ld(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Md(){for(var e=window,t=ci();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=ci(e.document)}return t}function yl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function yp(e){var t=Md(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Ld(r.ownerDocument.documentElement,r)){if(n!==null&&yl(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=r.textContent.length,a=Math.min(n.start,s);n=n.end===void 0?a:Math.min(n.end,s),!e.extend&&a>n&&(s=n,n=a,a=s),s=Cc(r,a);var o=Cc(r,n);s&&o&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),a>n?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var vp=At&&"documentMode"in document&&11>=document.documentMode,qr=null,ho=null,Hn=null,fo=!1;function Ec(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;fo||qr==null||qr!==ci(n)||(n=qr,"selectionStart"in n&&yl(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Hn&&as(Hn,n)||(Hn=n,n=gi(ho,"onSelect"),0<n.length&&(t=new pl("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=qr)))}function Ls(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Kr={animationend:Ls("Animation","AnimationEnd"),animationiteration:Ls("Animation","AnimationIteration"),animationstart:Ls("Animation","AnimationStart"),transitionend:Ls("Transition","TransitionEnd")},wa={},$d={};At&&($d=document.createElement("div").style,"AnimationEvent"in window||(delete Kr.animationend.animation,delete Kr.animationiteration.animation,delete Kr.animationstart.animation),"TransitionEvent"in window||delete Kr.transitionend.transition);function Bi(e){if(wa[e])return wa[e];if(!Kr[e])return e;var t=Kr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in $d)return wa[e]=t[r];return e}var zd=Bi("animationend"),Ud=Bi("animationiteration"),Dd=Bi("animationstart"),Fd=Bi("transitionend"),Bd=new Map,Pc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ar(e,t){Bd.set(e,t),Or(t,[e])}for(var ja=0;ja<Pc.length;ja++){var ba=Pc[ja],wp=ba.toLowerCase(),jp=ba[0].toUpperCase()+ba.slice(1);ar(wp,"on"+jp)}ar(zd,"onAnimationEnd");ar(Ud,"onAnimationIteration");ar(Dd,"onAnimationStart");ar("dblclick","onDoubleClick");ar("focusin","onFocus");ar("focusout","onBlur");ar(Fd,"onTransitionEnd");cn("onMouseEnter",["mouseout","mouseover"]);cn("onMouseLeave",["mouseout","mouseover"]);cn("onPointerEnter",["pointerout","pointerover"]);cn("onPointerLeave",["pointerout","pointerover"]);Or("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Or("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Or("onBeforeInput",["compositionend","keypress","textInput","paste"]);Or("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Or("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Or("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Un="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Un));function Tc(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,wm(n,t,void 0,e),e.currentTarget=null}function Wd(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],s=n.event;n=n.listeners;e:{var a=void 0;if(t)for(var o=n.length-1;0<=o;o--){var l=n[o],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==a&&s.isPropagationStopped())break e;Tc(s,l,u),a=c}else for(o=0;o<n.length;o++){if(l=n[o],c=l.instance,u=l.currentTarget,l=l.listener,c!==a&&s.isPropagationStopped())break e;Tc(s,l,u),a=c}}}if(di)throw e=oo,di=!1,oo=null,e}function re(e,t){var r=t[yo];r===void 0&&(r=t[yo]=new Set);var n=e+"__bubble";r.has(n)||(Vd(t,e,2,!1),r.add(n))}function ka(e,t,r){var n=0;t&&(n|=4),Vd(r,e,n,t)}var Ms="_reactListening"+Math.random().toString(36).slice(2);function os(e){if(!e[Ms]){e[Ms]=!0,Xu.forEach(function(r){r!=="selectionchange"&&(bp.has(r)||ka(r,!1,e),ka(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ms]||(t[Ms]=!0,ka("selectionchange",!1,t))}}function Vd(e,t,r,n){switch(Cd(t)){case 1:var s=Mm;break;case 4:s=$m;break;default:s=fl}r=s.bind(null,t,r,e),s=void 0,!ao||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),n?s!==void 0?e.addEventListener(t,r,{capture:!0,passive:s}):e.addEventListener(t,r,!0):s!==void 0?e.addEventListener(t,r,{passive:s}):e.addEventListener(t,r,!1)}function _a(e,t,r,n,s){var a=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var o=n.tag;if(o===3||o===4){var l=n.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=n.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;o=o.return}for(;l!==null;){if(o=yr(l),o===null)return;if(c=o.tag,c===5||c===6){n=a=o;continue e}l=l.parentNode}}n=n.return}fd(function(){var u=a,d=cl(r),h=[];e:{var m=Bd.get(e);if(m!==void 0){var x=pl,w=e;switch(e){case"keypress":if(ei(r)===0)break e;case"keydown":case"keyup":x=Ym;break;case"focusin":w="focus",x=xa;break;case"focusout":w="blur",x=xa;break;case"beforeblur":case"afterblur":x=xa;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=yc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Dm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=tp;break;case zd:case Ud:case Dd:x=Wm;break;case Fd:x=np;break;case"scroll":x=zm;break;case"wheel":x=ip;break;case"copy":case"cut":case"paste":x=Hm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=wc}var j=(t&4)!==0,v=!j&&e==="scroll",g=j?m!==null?m+"Capture":null:m;j=[];for(var p=u,y;p!==null;){y=p;var _=y.stateNode;if(y.tag===5&&_!==null&&(y=_,g!==null&&(_=ts(p,g),_!=null&&j.push(ls(p,_,y)))),v)break;p=p.return}0<j.length&&(m=new x(m,w,null,r,d),h.push({event:m,listeners:j}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&r!==so&&(w=r.relatedTarget||r.fromElement)&&(yr(w)||w[Rt]))break e;if((x||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,x?(w=r.relatedTarget||r.toElement,x=u,w=w?yr(w):null,w!==null&&(v=Ir(w),w!==v||w.tag!==5&&w.tag!==6)&&(w=null)):(x=null,w=u),x!==w)){if(j=yc,_="onMouseLeave",g="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(j=wc,_="onPointerLeave",g="onPointerEnter",p="pointer"),v=x==null?m:Jr(x),y=w==null?m:Jr(w),m=new j(_,p+"leave",x,r,d),m.target=v,m.relatedTarget=y,_=null,yr(d)===u&&(j=new j(g,p+"enter",w,r,d),j.target=y,j.relatedTarget=v,_=j),v=_,x&&w)t:{for(j=x,g=w,p=0,y=j;y;y=Lr(y))p++;for(y=0,_=g;_;_=Lr(_))y++;for(;0<p-y;)j=Lr(j),p--;for(;0<y-p;)g=Lr(g),y--;for(;p--;){if(j===g||g!==null&&j===g.alternate)break t;j=Lr(j),g=Lr(g)}j=null}else j=null;x!==null&&Oc(h,m,x,j,!1),w!==null&&v!==null&&Oc(h,v,w,j,!0)}}e:{if(m=u?Jr(u):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var E=hp;else if(kc(m))if(Ad)E=gp;else{E=mp;var N=fp}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(E=pp);if(E&&(E=E(e,u))){Id(h,E,r,d);break e}N&&N(e,m,u),e==="focusout"&&(N=m._wrapperState)&&N.controlled&&m.type==="number"&&Za(m,"number",m.value)}switch(N=u?Jr(u):window,e){case"focusin":(kc(N)||N.contentEditable==="true")&&(qr=N,ho=u,Hn=null);break;case"focusout":Hn=ho=qr=null;break;case"mousedown":fo=!0;break;case"contextmenu":case"mouseup":case"dragend":fo=!1,Ec(h,r,d);break;case"selectionchange":if(vp)break;case"keydown":case"keyup":Ec(h,r,d)}var T;if(xl)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Gr?Td(e,r)&&(P="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(P="onCompositionStart");P&&(Pd&&r.locale!=="ko"&&(Gr||P!=="onCompositionStart"?P==="onCompositionEnd"&&Gr&&(T=Ed()):(Kt=d,ml="value"in Kt?Kt.value:Kt.textContent,Gr=!0)),N=gi(u,P),0<N.length&&(P=new vc(P,e,null,r,d),h.push({event:P,listeners:N}),T?P.data=T:(T=Od(r),T!==null&&(P.data=T)))),(T=op?lp(e,r):cp(e,r))&&(u=gi(u,"onBeforeInput"),0<u.length&&(d=new vc("onBeforeInput","beforeinput",null,r,d),h.push({event:d,listeners:u}),d.data=T))}Wd(h,t)})}function ls(e,t,r){return{instance:e,listener:t,currentTarget:r}}function gi(e,t){for(var r=t+"Capture",n=[];e!==null;){var s=e,a=s.stateNode;s.tag===5&&a!==null&&(s=a,a=ts(e,r),a!=null&&n.unshift(ls(e,a,s)),a=ts(e,t),a!=null&&n.push(ls(e,a,s))),e=e.return}return n}function Lr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Oc(e,t,r,n,s){for(var a=t._reactName,o=[];r!==null&&r!==n;){var l=r,c=l.alternate,u=l.stateNode;if(c!==null&&c===n)break;l.tag===5&&u!==null&&(l=u,s?(c=ts(r,a),c!=null&&o.unshift(ls(r,c,l))):s||(c=ts(r,a),c!=null&&o.push(ls(r,c,l)))),r=r.return}o.length!==0&&e.push({event:t,listeners:o})}var kp=/\r\n?/g,_p=/\u0000|\uFFFD/g;function Ic(e){return(typeof e=="string"?e:""+e).replace(kp,`
`).replace(_p,"")}function $s(e,t,r){if(t=Ic(t),Ic(e)!==t&&r)throw Error(O(425))}function xi(){}var mo=null,po=null;function go(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xo=typeof setTimeout=="function"?setTimeout:void 0,Np=typeof clearTimeout=="function"?clearTimeout:void 0,Ac=typeof Promise=="function"?Promise:void 0,Sp=typeof queueMicrotask=="function"?queueMicrotask:typeof Ac<"u"?function(e){return Ac.resolve(null).then(e).catch(Cp)}:xo;function Cp(e){setTimeout(function(){throw e})}function Na(e,t){var r=t,n=0;do{var s=r.nextSibling;if(e.removeChild(r),s&&s.nodeType===8)if(r=s.data,r==="/$"){if(n===0){e.removeChild(s),ss(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=s}while(r);ss(t)}function Zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Rc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var vn=Math.random().toString(36).slice(2),wt="__reactFiber$"+vn,cs="__reactProps$"+vn,Rt="__reactContainer$"+vn,yo="__reactEvents$"+vn,Ep="__reactListeners$"+vn,Pp="__reactHandles$"+vn;function yr(e){var t=e[wt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Rt]||r[wt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Rc(e);e!==null;){if(r=e[wt])return r;e=Rc(e)}return t}e=r,r=e.parentNode}return null}function ws(e){return e=e[wt]||e[Rt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Jr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(O(33))}function Wi(e){return e[cs]||null}var vo=[],Qr=-1;function or(e){return{current:e}}function ne(e){0>Qr||(e.current=vo[Qr],vo[Qr]=null,Qr--)}function te(e,t){Qr++,vo[Qr]=e.current,e.current=t}var ir={},Me=or(ir),Ge=or(!1),Nr=ir;function un(e,t){var r=e.type.contextTypes;if(!r)return ir;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var s={},a;for(a in r)s[a]=t[a];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function qe(e){return e=e.childContextTypes,e!=null}function yi(){ne(Ge),ne(Me)}function Lc(e,t,r){if(Me.current!==ir)throw Error(O(168));te(Me,t),te(Ge,r)}function Hd(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var s in n)if(!(s in t))throw Error(O(108,fm(e)||"Unknown",s));return ce({},r,n)}function vi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ir,Nr=Me.current,te(Me,e),te(Ge,Ge.current),!0}function Mc(e,t,r){var n=e.stateNode;if(!n)throw Error(O(169));r?(e=Hd(e,t,Nr),n.__reactInternalMemoizedMergedChildContext=e,ne(Ge),ne(Me),te(Me,e)):ne(Ge),te(Ge,r)}var Pt=null,Vi=!1,Sa=!1;function Gd(e){Pt===null?Pt=[e]:Pt.push(e)}function Tp(e){Vi=!0,Gd(e)}function lr(){if(!Sa&&Pt!==null){Sa=!0;var e=0,t=X;try{var r=Pt;for(X=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Pt=null,Vi=!1}catch(s){throw Pt!==null&&(Pt=Pt.slice(e+1)),xd(ul,lr),s}finally{X=t,Sa=!1}}return null}var Xr=[],Yr=0,wi=null,ji=0,tt=[],rt=0,Sr=null,Tt=1,Ot="";function mr(e,t){Xr[Yr++]=ji,Xr[Yr++]=wi,wi=e,ji=t}function qd(e,t,r){tt[rt++]=Tt,tt[rt++]=Ot,tt[rt++]=Sr,Sr=e;var n=Tt;e=Ot;var s=32-pt(n)-1;n&=~(1<<s),r+=1;var a=32-pt(t)+s;if(30<a){var o=s-s%5;a=(n&(1<<o)-1).toString(32),n>>=o,s-=o,Tt=1<<32-pt(t)+s|r<<s|n,Ot=a+e}else Tt=1<<a|r<<s|n,Ot=e}function vl(e){e.return!==null&&(mr(e,1),qd(e,1,0))}function wl(e){for(;e===wi;)wi=Xr[--Yr],Xr[Yr]=null,ji=Xr[--Yr],Xr[Yr]=null;for(;e===Sr;)Sr=tt[--rt],tt[rt]=null,Ot=tt[--rt],tt[rt]=null,Tt=tt[--rt],tt[rt]=null}var Xe=null,Qe=null,ae=!1,mt=null;function Kd(e,t){var r=nt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function $c(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Xe=e,Qe=Zt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Xe=e,Qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Sr!==null?{id:Tt,overflow:Ot}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=nt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Xe=e,Qe=null,!0):!1;default:return!1}}function wo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function jo(e){if(ae){var t=Qe;if(t){var r=t;if(!$c(e,t)){if(wo(e))throw Error(O(418));t=Zt(r.nextSibling);var n=Xe;t&&$c(e,t)?Kd(n,r):(e.flags=e.flags&-4097|2,ae=!1,Xe=e)}}else{if(wo(e))throw Error(O(418));e.flags=e.flags&-4097|2,ae=!1,Xe=e}}}function zc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Xe=e}function zs(e){if(e!==Xe)return!1;if(!ae)return zc(e),ae=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!go(e.type,e.memoizedProps)),t&&(t=Qe)){if(wo(e))throw Jd(),Error(O(418));for(;t;)Kd(e,t),t=Zt(t.nextSibling)}if(zc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(O(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Qe=Zt(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Qe=null}}else Qe=Xe?Zt(e.stateNode.nextSibling):null;return!0}function Jd(){for(var e=Qe;e;)e=Zt(e.nextSibling)}function dn(){Qe=Xe=null,ae=!1}function jl(e){mt===null?mt=[e]:mt.push(e)}var Op=zt.ReactCurrentBatchConfig;function On(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(O(309));var n=r.stateNode}if(!n)throw Error(O(147,e));var s=n,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var l=s.refs;o===null?delete l[a]:l[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(O(284));if(!r._owner)throw Error(O(290,e))}return e}function Us(e,t){throw e=Object.prototype.toString.call(t),Error(O(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Uc(e){var t=e._init;return t(e._payload)}function Qd(e){function t(g,p){if(e){var y=g.deletions;y===null?(g.deletions=[p],g.flags|=16):y.push(p)}}function r(g,p){if(!e)return null;for(;p!==null;)t(g,p),p=p.sibling;return null}function n(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function s(g,p){return g=nr(g,p),g.index=0,g.sibling=null,g}function a(g,p,y){return g.index=y,e?(y=g.alternate,y!==null?(y=y.index,y<p?(g.flags|=2,p):y):(g.flags|=2,p)):(g.flags|=1048576,p)}function o(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,p,y,_){return p===null||p.tag!==6?(p=Aa(y,g.mode,_),p.return=g,p):(p=s(p,y),p.return=g,p)}function c(g,p,y,_){var E=y.type;return E===Hr?d(g,p,y.props.children,_,y.key):p!==null&&(p.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Wt&&Uc(E)===p.type)?(_=s(p,y.props),_.ref=On(g,p,y),_.return=g,_):(_=oi(y.type,y.key,y.props,null,g.mode,_),_.ref=On(g,p,y),_.return=g,_)}function u(g,p,y,_){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=Ra(y,g.mode,_),p.return=g,p):(p=s(p,y.children||[]),p.return=g,p)}function d(g,p,y,_,E){return p===null||p.tag!==7?(p=br(y,g.mode,_,E),p.return=g,p):(p=s(p,y),p.return=g,p)}function h(g,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Aa(""+p,g.mode,y),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Es:return y=oi(p.type,p.key,p.props,null,g.mode,y),y.ref=On(g,null,p),y.return=g,y;case Vr:return p=Ra(p,g.mode,y),p.return=g,p;case Wt:var _=p._init;return h(g,_(p._payload),y)}if($n(p)||Sn(p))return p=br(p,g.mode,y,null),p.return=g,p;Us(g,p)}return null}function m(g,p,y,_){var E=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return E!==null?null:l(g,p,""+y,_);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Es:return y.key===E?c(g,p,y,_):null;case Vr:return y.key===E?u(g,p,y,_):null;case Wt:return E=y._init,m(g,p,E(y._payload),_)}if($n(y)||Sn(y))return E!==null?null:d(g,p,y,_,null);Us(g,y)}return null}function x(g,p,y,_,E){if(typeof _=="string"&&_!==""||typeof _=="number")return g=g.get(y)||null,l(p,g,""+_,E);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Es:return g=g.get(_.key===null?y:_.key)||null,c(p,g,_,E);case Vr:return g=g.get(_.key===null?y:_.key)||null,u(p,g,_,E);case Wt:var N=_._init;return x(g,p,y,N(_._payload),E)}if($n(_)||Sn(_))return g=g.get(y)||null,d(p,g,_,E,null);Us(p,_)}return null}function w(g,p,y,_){for(var E=null,N=null,T=p,P=p=0,B=null;T!==null&&P<y.length;P++){T.index>P?(B=T,T=null):B=T.sibling;var D=m(g,T,y[P],_);if(D===null){T===null&&(T=B);break}e&&T&&D.alternate===null&&t(g,T),p=a(D,p,P),N===null?E=D:N.sibling=D,N=D,T=B}if(P===y.length)return r(g,T),ae&&mr(g,P),E;if(T===null){for(;P<y.length;P++)T=h(g,y[P],_),T!==null&&(p=a(T,p,P),N===null?E=T:N.sibling=T,N=T);return ae&&mr(g,P),E}for(T=n(g,T);P<y.length;P++)B=x(T,g,P,y[P],_),B!==null&&(e&&B.alternate!==null&&T.delete(B.key===null?P:B.key),p=a(B,p,P),N===null?E=B:N.sibling=B,N=B);return e&&T.forEach(function(de){return t(g,de)}),ae&&mr(g,P),E}function j(g,p,y,_){var E=Sn(y);if(typeof E!="function")throw Error(O(150));if(y=E.call(y),y==null)throw Error(O(151));for(var N=E=null,T=p,P=p=0,B=null,D=y.next();T!==null&&!D.done;P++,D=y.next()){T.index>P?(B=T,T=null):B=T.sibling;var de=m(g,T,D.value,_);if(de===null){T===null&&(T=B);break}e&&T&&de.alternate===null&&t(g,T),p=a(de,p,P),N===null?E=de:N.sibling=de,N=de,T=B}if(D.done)return r(g,T),ae&&mr(g,P),E;if(T===null){for(;!D.done;P++,D=y.next())D=h(g,D.value,_),D!==null&&(p=a(D,p,P),N===null?E=D:N.sibling=D,N=D);return ae&&mr(g,P),E}for(T=n(g,T);!D.done;P++,D=y.next())D=x(T,g,P,D.value,_),D!==null&&(e&&D.alternate!==null&&T.delete(D.key===null?P:D.key),p=a(D,p,P),N===null?E=D:N.sibling=D,N=D);return e&&T.forEach(function(pe){return t(g,pe)}),ae&&mr(g,P),E}function v(g,p,y,_){if(typeof y=="object"&&y!==null&&y.type===Hr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Es:e:{for(var E=y.key,N=p;N!==null;){if(N.key===E){if(E=y.type,E===Hr){if(N.tag===7){r(g,N.sibling),p=s(N,y.props.children),p.return=g,g=p;break e}}else if(N.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Wt&&Uc(E)===N.type){r(g,N.sibling),p=s(N,y.props),p.ref=On(g,N,y),p.return=g,g=p;break e}r(g,N);break}else t(g,N);N=N.sibling}y.type===Hr?(p=br(y.props.children,g.mode,_,y.key),p.return=g,g=p):(_=oi(y.type,y.key,y.props,null,g.mode,_),_.ref=On(g,p,y),_.return=g,g=_)}return o(g);case Vr:e:{for(N=y.key;p!==null;){if(p.key===N)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){r(g,p.sibling),p=s(p,y.children||[]),p.return=g,g=p;break e}else{r(g,p);break}else t(g,p);p=p.sibling}p=Ra(y,g.mode,_),p.return=g,g=p}return o(g);case Wt:return N=y._init,v(g,p,N(y._payload),_)}if($n(y))return w(g,p,y,_);if(Sn(y))return j(g,p,y,_);Us(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(r(g,p.sibling),p=s(p,y),p.return=g,g=p):(r(g,p),p=Aa(y,g.mode,_),p.return=g,g=p),o(g)):r(g,p)}return v}var hn=Qd(!0),Xd=Qd(!1),bi=or(null),ki=null,Zr=null,bl=null;function kl(){bl=Zr=ki=null}function _l(e){var t=bi.current;ne(bi),e._currentValue=t}function bo(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function on(e,t){ki=e,bl=Zr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ve=!0),e.firstContext=null)}function ot(e){var t=e._currentValue;if(bl!==e)if(e={context:e,memoizedValue:t,next:null},Zr===null){if(ki===null)throw Error(O(308));Zr=e,ki.dependencies={lanes:0,firstContext:e}}else Zr=Zr.next=e;return t}var vr=null;function Nl(e){vr===null?vr=[e]:vr.push(e)}function Yd(e,t,r,n){var s=t.interleaved;return s===null?(r.next=r,Nl(t)):(r.next=s.next,s.next=r),t.interleaved=r,Lt(e,n)}function Lt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Vt=!1;function Sl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function It(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function er(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,q&2){var s=n.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),n.pending=t,Lt(e,r)}return s=n.interleaved,s===null?(t.next=t,Nl(n)):(t.next=s.next,s.next=t),n.interleaved=t,Lt(e,r)}function ti(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,dl(e,r)}}function Dc(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var s=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?s=a=o:a=a.next=o,r=r.next}while(r!==null);a===null?s=a=t:a=a.next=t}else s=a=t;r={baseState:n.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function _i(e,t,r,n){var s=e.updateQueue;Vt=!1;var a=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var c=l,u=c.next;c.next=null,o===null?a=u:o.next=u,o=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(a!==null){var h=s.baseState;o=0,d=u=c=null,l=a;do{var m=l.lane,x=l.eventTime;if((n&m)===m){d!==null&&(d=d.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var w=e,j=l;switch(m=t,x=r,j.tag){case 1:if(w=j.payload,typeof w=="function"){h=w.call(x,h,m);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=j.payload,m=typeof w=="function"?w.call(x,h,m):w,m==null)break e;h=ce({},h,m);break e;case 2:Vt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=s.effects,m===null?s.effects=[l]:m.push(l))}else x={eventTime:x,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=x,c=h):d=d.next=x,o|=m;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;m=l,l=m.next,m.next=null,s.lastBaseUpdate=m,s.shared.pending=null}}while(!0);if(d===null&&(c=h),s.baseState=c,s.firstBaseUpdate=u,s.lastBaseUpdate=d,t=s.shared.interleaved,t!==null){s=t;do o|=s.lane,s=s.next;while(s!==t)}else a===null&&(s.shared.lanes=0);Er|=o,e.lanes=o,e.memoizedState=h}}function Fc(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],s=n.callback;if(s!==null){if(n.callback=null,n=r,typeof s!="function")throw Error(O(191,s));s.call(n)}}}var js={},bt=or(js),us=or(js),ds=or(js);function wr(e){if(e===js)throw Error(O(174));return e}function Cl(e,t){switch(te(ds,t),te(us,e),te(bt,js),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:to(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=to(t,e)}ne(bt),te(bt,t)}function fn(){ne(bt),ne(us),ne(ds)}function eh(e){wr(ds.current);var t=wr(bt.current),r=to(t,e.type);t!==r&&(te(us,e),te(bt,r))}function El(e){us.current===e&&(ne(bt),ne(us))}var oe=or(0);function Ni(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ca=[];function Pl(){for(var e=0;e<Ca.length;e++)Ca[e]._workInProgressVersionPrimary=null;Ca.length=0}var ri=zt.ReactCurrentDispatcher,Ea=zt.ReactCurrentBatchConfig,Cr=0,le=null,xe=null,we=null,Si=!1,Gn=!1,hs=0,Ip=0;function Ie(){throw Error(O(321))}function Tl(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!xt(e[r],t[r]))return!1;return!0}function Ol(e,t,r,n,s,a){if(Cr=a,le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ri.current=e===null||e.memoizedState===null?Mp:$p,e=r(n,s),Gn){a=0;do{if(Gn=!1,hs=0,25<=a)throw Error(O(301));a+=1,we=xe=null,t.updateQueue=null,ri.current=zp,e=r(n,s)}while(Gn)}if(ri.current=Ci,t=xe!==null&&xe.next!==null,Cr=0,we=xe=le=null,Si=!1,t)throw Error(O(300));return e}function Il(){var e=hs!==0;return hs=0,e}function vt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?le.memoizedState=we=e:we=we.next=e,we}function lt(){if(xe===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var t=we===null?le.memoizedState:we.next;if(t!==null)we=t,xe=e;else{if(e===null)throw Error(O(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},we===null?le.memoizedState=we=e:we=we.next=e}return we}function fs(e,t){return typeof t=="function"?t(e):t}function Pa(e){var t=lt(),r=t.queue;if(r===null)throw Error(O(311));r.lastRenderedReducer=e;var n=xe,s=n.baseQueue,a=r.pending;if(a!==null){if(s!==null){var o=s.next;s.next=a.next,a.next=o}n.baseQueue=s=a,r.pending=null}if(s!==null){a=s.next,n=n.baseState;var l=o=null,c=null,u=a;do{var d=u.lane;if((Cr&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var h={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=h,o=n):c=c.next=h,le.lanes|=d,Er|=d}u=u.next}while(u!==null&&u!==a);c===null?o=n:c.next=l,xt(n,t.memoizedState)||(Ve=!0),t.memoizedState=n,t.baseState=o,t.baseQueue=c,r.lastRenderedState=n}if(e=r.interleaved,e!==null){s=e;do a=s.lane,le.lanes|=a,Er|=a,s=s.next;while(s!==e)}else s===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Ta(e){var t=lt(),r=t.queue;if(r===null)throw Error(O(311));r.lastRenderedReducer=e;var n=r.dispatch,s=r.pending,a=t.memoizedState;if(s!==null){r.pending=null;var o=s=s.next;do a=e(a,o.action),o=o.next;while(o!==s);xt(a,t.memoizedState)||(Ve=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),r.lastRenderedState=a}return[a,n]}function th(){}function rh(e,t){var r=le,n=lt(),s=t(),a=!xt(n.memoizedState,s);if(a&&(n.memoizedState=s,Ve=!0),n=n.queue,Al(ih.bind(null,r,n,e),[e]),n.getSnapshot!==t||a||we!==null&&we.memoizedState.tag&1){if(r.flags|=2048,ms(9,sh.bind(null,r,n,s,t),void 0,null),ke===null)throw Error(O(349));Cr&30||nh(r,t,s)}return s}function nh(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=le.updateQueue,t===null?(t={lastEffect:null,stores:null},le.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function sh(e,t,r,n){t.value=r,t.getSnapshot=n,ah(t)&&oh(e)}function ih(e,t,r){return r(function(){ah(t)&&oh(e)})}function ah(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!xt(e,r)}catch{return!0}}function oh(e){var t=Lt(e,1);t!==null&&gt(t,e,1,-1)}function Bc(e){var t=vt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fs,lastRenderedState:e},t.queue=e,e=e.dispatch=Lp.bind(null,le,e),[t.memoizedState,e]}function ms(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=le.updateQueue,t===null?(t={lastEffect:null,stores:null},le.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function lh(){return lt().memoizedState}function ni(e,t,r,n){var s=vt();le.flags|=e,s.memoizedState=ms(1|t,r,void 0,n===void 0?null:n)}function Hi(e,t,r,n){var s=lt();n=n===void 0?null:n;var a=void 0;if(xe!==null){var o=xe.memoizedState;if(a=o.destroy,n!==null&&Tl(n,o.deps)){s.memoizedState=ms(t,r,a,n);return}}le.flags|=e,s.memoizedState=ms(1|t,r,a,n)}function Wc(e,t){return ni(8390656,8,e,t)}function Al(e,t){return Hi(2048,8,e,t)}function ch(e,t){return Hi(4,2,e,t)}function uh(e,t){return Hi(4,4,e,t)}function dh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function hh(e,t,r){return r=r!=null?r.concat([e]):null,Hi(4,4,dh.bind(null,t,e),r)}function Rl(){}function fh(e,t){var r=lt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Tl(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function mh(e,t){var r=lt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Tl(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function ph(e,t,r){return Cr&21?(xt(r,t)||(r=wd(),le.lanes|=r,Er|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ve=!0),e.memoizedState=r)}function Ap(e,t){var r=X;X=r!==0&&4>r?r:4,e(!0);var n=Ea.transition;Ea.transition={};try{e(!1),t()}finally{X=r,Ea.transition=n}}function gh(){return lt().memoizedState}function Rp(e,t,r){var n=rr(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},xh(e))yh(t,r);else if(r=Yd(e,t,r,n),r!==null){var s=ze();gt(r,e,n,s),vh(r,t,n)}}function Lp(e,t,r){var n=rr(e),s={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(xh(e))yh(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,l=a(o,r);if(s.hasEagerState=!0,s.eagerState=l,xt(l,o)){var c=t.interleaved;c===null?(s.next=s,Nl(t)):(s.next=c.next,c.next=s),t.interleaved=s;return}}catch{}finally{}r=Yd(e,t,s,n),r!==null&&(s=ze(),gt(r,e,n,s),vh(r,t,n))}}function xh(e){var t=e.alternate;return e===le||t!==null&&t===le}function yh(e,t){Gn=Si=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function vh(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,dl(e,r)}}var Ci={readContext:ot,useCallback:Ie,useContext:Ie,useEffect:Ie,useImperativeHandle:Ie,useInsertionEffect:Ie,useLayoutEffect:Ie,useMemo:Ie,useReducer:Ie,useRef:Ie,useState:Ie,useDebugValue:Ie,useDeferredValue:Ie,useTransition:Ie,useMutableSource:Ie,useSyncExternalStore:Ie,useId:Ie,unstable_isNewReconciler:!1},Mp={readContext:ot,useCallback:function(e,t){return vt().memoizedState=[e,t===void 0?null:t],e},useContext:ot,useEffect:Wc,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,ni(4194308,4,dh.bind(null,t,e),r)},useLayoutEffect:function(e,t){return ni(4194308,4,e,t)},useInsertionEffect:function(e,t){return ni(4,2,e,t)},useMemo:function(e,t){var r=vt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=vt();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Rp.bind(null,le,e),[n.memoizedState,e]},useRef:function(e){var t=vt();return e={current:e},t.memoizedState=e},useState:Bc,useDebugValue:Rl,useDeferredValue:function(e){return vt().memoizedState=e},useTransition:function(){var e=Bc(!1),t=e[0];return e=Ap.bind(null,e[1]),vt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=le,s=vt();if(ae){if(r===void 0)throw Error(O(407));r=r()}else{if(r=t(),ke===null)throw Error(O(349));Cr&30||nh(n,t,r)}s.memoizedState=r;var a={value:r,getSnapshot:t};return s.queue=a,Wc(ih.bind(null,n,a,e),[e]),n.flags|=2048,ms(9,sh.bind(null,n,a,r,t),void 0,null),r},useId:function(){var e=vt(),t=ke.identifierPrefix;if(ae){var r=Ot,n=Tt;r=(n&~(1<<32-pt(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=hs++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Ip++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},$p={readContext:ot,useCallback:fh,useContext:ot,useEffect:Al,useImperativeHandle:hh,useInsertionEffect:ch,useLayoutEffect:uh,useMemo:mh,useReducer:Pa,useRef:lh,useState:function(){return Pa(fs)},useDebugValue:Rl,useDeferredValue:function(e){var t=lt();return ph(t,xe.memoizedState,e)},useTransition:function(){var e=Pa(fs)[0],t=lt().memoizedState;return[e,t]},useMutableSource:th,useSyncExternalStore:rh,useId:gh,unstable_isNewReconciler:!1},zp={readContext:ot,useCallback:fh,useContext:ot,useEffect:Al,useImperativeHandle:hh,useInsertionEffect:ch,useLayoutEffect:uh,useMemo:mh,useReducer:Ta,useRef:lh,useState:function(){return Ta(fs)},useDebugValue:Rl,useDeferredValue:function(e){var t=lt();return xe===null?t.memoizedState=e:ph(t,xe.memoizedState,e)},useTransition:function(){var e=Ta(fs)[0],t=lt().memoizedState;return[e,t]},useMutableSource:th,useSyncExternalStore:rh,useId:gh,unstable_isNewReconciler:!1};function dt(e,t){if(e&&e.defaultProps){t=ce({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function ko(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:ce({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Gi={isMounted:function(e){return(e=e._reactInternals)?Ir(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=ze(),s=rr(e),a=It(n,s);a.payload=t,r!=null&&(a.callback=r),t=er(e,a,s),t!==null&&(gt(t,e,s,n),ti(t,e,s))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=ze(),s=rr(e),a=It(n,s);a.tag=1,a.payload=t,r!=null&&(a.callback=r),t=er(e,a,s),t!==null&&(gt(t,e,s,n),ti(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=ze(),n=rr(e),s=It(r,n);s.tag=2,t!=null&&(s.callback=t),t=er(e,s,n),t!==null&&(gt(t,e,n,r),ti(t,e,n))}};function Vc(e,t,r,n,s,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,a,o):t.prototype&&t.prototype.isPureReactComponent?!as(r,n)||!as(s,a):!0}function wh(e,t,r){var n=!1,s=ir,a=t.contextType;return typeof a=="object"&&a!==null?a=ot(a):(s=qe(t)?Nr:Me.current,n=t.contextTypes,a=(n=n!=null)?un(e,s):ir),t=new t(r,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Gi,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=a),t}function Hc(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Gi.enqueueReplaceState(t,t.state,null)}function _o(e,t,r,n){var s=e.stateNode;s.props=r,s.state=e.memoizedState,s.refs={},Sl(e);var a=t.contextType;typeof a=="object"&&a!==null?s.context=ot(a):(a=qe(t)?Nr:Me.current,s.context=un(e,a)),s.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(ko(e,t,a,r),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Gi.enqueueReplaceState(s,s.state,null),_i(e,r,s,n),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function mn(e,t){try{var r="",n=t;do r+=hm(n),n=n.return;while(n);var s=r}catch(a){s=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:s,digest:null}}function Oa(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function No(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Up=typeof WeakMap=="function"?WeakMap:Map;function jh(e,t,r){r=It(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Pi||(Pi=!0,Lo=n),No(e,t)},r}function bh(e,t,r){r=It(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var s=t.value;r.payload=function(){return n(s)},r.callback=function(){No(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){No(e,t),typeof n!="function"&&(tr===null?tr=new Set([this]):tr.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),r}function Gc(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new Up;var s=new Set;n.set(t,s)}else s=n.get(t),s===void 0&&(s=new Set,n.set(t,s));s.has(r)||(s.add(r),e=Zp.bind(null,e,t,r),t.then(e,e))}function qc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Kc(e,t,r,n,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=It(-1,1),t.tag=2,er(r,t,1))),r.lanes|=1),e)}var Dp=zt.ReactCurrentOwner,Ve=!1;function $e(e,t,r,n){t.child=e===null?Xd(t,null,r,n):hn(t,e.child,r,n)}function Jc(e,t,r,n,s){r=r.render;var a=t.ref;return on(t,s),n=Ol(e,t,r,n,a,s),r=Il(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Mt(e,t,s)):(ae&&r&&vl(t),t.flags|=1,$e(e,t,n,s),t.child)}function Qc(e,t,r,n,s){if(e===null){var a=r.type;return typeof a=="function"&&!Bl(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=a,kh(e,t,a,n,s)):(e=oi(r.type,null,n,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&s)){var o=a.memoizedProps;if(r=r.compare,r=r!==null?r:as,r(o,n)&&e.ref===t.ref)return Mt(e,t,s)}return t.flags|=1,e=nr(a,n),e.ref=t.ref,e.return=t,t.child=e}function kh(e,t,r,n,s){if(e!==null){var a=e.memoizedProps;if(as(a,n)&&e.ref===t.ref)if(Ve=!1,t.pendingProps=n=a,(e.lanes&s)!==0)e.flags&131072&&(Ve=!0);else return t.lanes=e.lanes,Mt(e,t,s)}return So(e,t,r,n,s)}function _h(e,t,r){var n=t.pendingProps,s=n.children,a=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},te(tn,Je),Je|=r;else{if(!(r&1073741824))return e=a!==null?a.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,te(tn,Je),Je|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=a!==null?a.baseLanes:r,te(tn,Je),Je|=n}else a!==null?(n=a.baseLanes|r,t.memoizedState=null):n=r,te(tn,Je),Je|=n;return $e(e,t,s,r),t.child}function Nh(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function So(e,t,r,n,s){var a=qe(r)?Nr:Me.current;return a=un(t,a),on(t,s),r=Ol(e,t,r,n,a,s),n=Il(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Mt(e,t,s)):(ae&&n&&vl(t),t.flags|=1,$e(e,t,r,s),t.child)}function Xc(e,t,r,n,s){if(qe(r)){var a=!0;vi(t)}else a=!1;if(on(t,s),t.stateNode===null)si(e,t),wh(t,r,n),_o(t,r,n,s),n=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var c=o.context,u=r.contextType;typeof u=="object"&&u!==null?u=ot(u):(u=qe(r)?Nr:Me.current,u=un(t,u));var d=r.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==n||c!==u)&&Hc(t,o,n,u),Vt=!1;var m=t.memoizedState;o.state=m,_i(t,n,o,s),c=t.memoizedState,l!==n||m!==c||Ge.current||Vt?(typeof d=="function"&&(ko(t,r,d,n),c=t.memoizedState),(l=Vt||Vc(t,r,l,n,m,c,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=c),o.props=n,o.state=c,o.context=u,n=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{o=t.stateNode,Zd(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:dt(t.type,l),o.props=u,h=t.pendingProps,m=o.context,c=r.contextType,typeof c=="object"&&c!==null?c=ot(c):(c=qe(r)?Nr:Me.current,c=un(t,c));var x=r.getDerivedStateFromProps;(d=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==h||m!==c)&&Hc(t,o,n,c),Vt=!1,m=t.memoizedState,o.state=m,_i(t,n,o,s);var w=t.memoizedState;l!==h||m!==w||Ge.current||Vt?(typeof x=="function"&&(ko(t,r,x,n),w=t.memoizedState),(u=Vt||Vc(t,r,u,n,m,w,c)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,w,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,w,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=w),o.props=n,o.state=w,o.context=c,n=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),n=!1)}return Co(e,t,r,n,a,s)}function Co(e,t,r,n,s,a){Nh(e,t);var o=(t.flags&128)!==0;if(!n&&!o)return s&&Mc(t,r,!1),Mt(e,t,a);n=t.stateNode,Dp.current=t;var l=o&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&o?(t.child=hn(t,e.child,null,a),t.child=hn(t,null,l,a)):$e(e,t,l,a),t.memoizedState=n.state,s&&Mc(t,r,!0),t.child}function Sh(e){var t=e.stateNode;t.pendingContext?Lc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Lc(e,t.context,!1),Cl(e,t.containerInfo)}function Yc(e,t,r,n,s){return dn(),jl(s),t.flags|=256,$e(e,t,r,n),t.child}var Eo={dehydrated:null,treeContext:null,retryLane:0};function Po(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ch(e,t,r){var n=t.pendingProps,s=oe.current,a=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(s&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),te(oe,s&1),e===null)return jo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=n.children,e=n.fallback,a?(n=t.mode,a=t.child,o={mode:"hidden",children:o},!(n&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Ji(o,n,0,null),e=br(e,n,r,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Po(r),t.memoizedState=Eo,e):Ll(t,o));if(s=e.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return Fp(e,t,o,n,l,s,r);if(a){a=n.fallback,o=t.mode,s=e.child,l=s.sibling;var c={mode:"hidden",children:n.children};return!(o&1)&&t.child!==s?(n=t.child,n.childLanes=0,n.pendingProps=c,t.deletions=null):(n=nr(s,c),n.subtreeFlags=s.subtreeFlags&14680064),l!==null?a=nr(l,a):(a=br(a,o,r,null),a.flags|=2),a.return=t,n.return=t,n.sibling=a,t.child=n,n=a,a=t.child,o=e.child.memoizedState,o=o===null?Po(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~r,t.memoizedState=Eo,n}return a=e.child,e=a.sibling,n=nr(a,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function Ll(e,t){return t=Ji({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ds(e,t,r,n){return n!==null&&jl(n),hn(t,e.child,null,r),e=Ll(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Fp(e,t,r,n,s,a,o){if(r)return t.flags&256?(t.flags&=-257,n=Oa(Error(O(422))),Ds(e,t,o,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=n.fallback,s=t.mode,n=Ji({mode:"visible",children:n.children},s,0,null),a=br(a,s,o,null),a.flags|=2,n.return=t,a.return=t,n.sibling=a,t.child=n,t.mode&1&&hn(t,e.child,null,o),t.child.memoizedState=Po(o),t.memoizedState=Eo,a);if(!(t.mode&1))return Ds(e,t,o,null);if(s.data==="$!"){if(n=s.nextSibling&&s.nextSibling.dataset,n)var l=n.dgst;return n=l,a=Error(O(419)),n=Oa(a,n,void 0),Ds(e,t,o,n)}if(l=(o&e.childLanes)!==0,Ve||l){if(n=ke,n!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(n.suspendedLanes|o)?0:s,s!==0&&s!==a.retryLane&&(a.retryLane=s,Lt(e,s),gt(n,e,s,-1))}return Fl(),n=Oa(Error(O(421))),Ds(e,t,o,n)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=eg.bind(null,e),s._reactRetry=t,null):(e=a.treeContext,Qe=Zt(s.nextSibling),Xe=t,ae=!0,mt=null,e!==null&&(tt[rt++]=Tt,tt[rt++]=Ot,tt[rt++]=Sr,Tt=e.id,Ot=e.overflow,Sr=t),t=Ll(t,n.children),t.flags|=4096,t)}function Zc(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),bo(e.return,t,r)}function Ia(e,t,r,n,s){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:s}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=n,a.tail=r,a.tailMode=s)}function Eh(e,t,r){var n=t.pendingProps,s=n.revealOrder,a=n.tail;if($e(e,t,n.children,r),n=oe.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zc(e,r,t);else if(e.tag===19)Zc(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(te(oe,n),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(r=t.child,s=null;r!==null;)e=r.alternate,e!==null&&Ni(e)===null&&(s=r),r=r.sibling;r=s,r===null?(s=t.child,t.child=null):(s=r.sibling,r.sibling=null),Ia(t,!1,s,r,a);break;case"backwards":for(r=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Ni(e)===null){t.child=s;break}e=s.sibling,s.sibling=r,r=s,s=e}Ia(t,!0,r,null,a);break;case"together":Ia(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function si(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Mt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Er|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(O(153));if(t.child!==null){for(e=t.child,r=nr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=nr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Bp(e,t,r){switch(t.tag){case 3:Sh(t),dn();break;case 5:eh(t);break;case 1:qe(t.type)&&vi(t);break;case 4:Cl(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,s=t.memoizedProps.value;te(bi,n._currentValue),n._currentValue=s;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(te(oe,oe.current&1),t.flags|=128,null):r&t.child.childLanes?Ch(e,t,r):(te(oe,oe.current&1),e=Mt(e,t,r),e!==null?e.sibling:null);te(oe,oe.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return Eh(e,t,r);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),te(oe,oe.current),n)break;return null;case 22:case 23:return t.lanes=0,_h(e,t,r)}return Mt(e,t,r)}var Ph,To,Th,Oh;Ph=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};To=function(){};Th=function(e,t,r,n){var s=e.memoizedProps;if(s!==n){e=t.stateNode,wr(bt.current);var a=null;switch(r){case"input":s=Xa(e,s),n=Xa(e,n),a=[];break;case"select":s=ce({},s,{value:void 0}),n=ce({},n,{value:void 0}),a=[];break;case"textarea":s=eo(e,s),n=eo(e,n),a=[];break;default:typeof s.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=xi)}ro(r,n);var o;r=null;for(u in s)if(!n.hasOwnProperty(u)&&s.hasOwnProperty(u)&&s[u]!=null)if(u==="style"){var l=s[u];for(o in l)l.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Zn.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in n){var c=n[u];if(l=s!=null?s[u]:void 0,n.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(r||(r={}),r[o]=c[o])}else r||(a||(a=[]),a.push(u,r)),r=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(a=a||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(a=a||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Zn.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&re("scroll",e),a||l===c||(a=[])):(a=a||[]).push(u,c))}r&&(a=a||[]).push("style",r);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};Oh=function(e,t,r,n){r!==n&&(t.flags|=4)};function In(e,t){if(!ae)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var s=e.child;s!==null;)r|=s.lanes|s.childLanes,n|=s.subtreeFlags&14680064,n|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)r|=s.lanes|s.childLanes,n|=s.subtreeFlags,n|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Wp(e,t,r){var n=t.pendingProps;switch(wl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(t),null;case 1:return qe(t.type)&&yi(),Ae(t),null;case 3:return n=t.stateNode,fn(),ne(Ge),ne(Me),Pl(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(zs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,mt!==null&&(zo(mt),mt=null))),To(e,t),Ae(t),null;case 5:El(t);var s=wr(ds.current);if(r=t.type,e!==null&&t.stateNode!=null)Th(e,t,r,n,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(O(166));return Ae(t),null}if(e=wr(bt.current),zs(t)){n=t.stateNode,r=t.type;var a=t.memoizedProps;switch(n[wt]=t,n[cs]=a,e=(t.mode&1)!==0,r){case"dialog":re("cancel",n),re("close",n);break;case"iframe":case"object":case"embed":re("load",n);break;case"video":case"audio":for(s=0;s<Un.length;s++)re(Un[s],n);break;case"source":re("error",n);break;case"img":case"image":case"link":re("error",n),re("load",n);break;case"details":re("toggle",n);break;case"input":lc(n,a),re("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!a.multiple},re("invalid",n);break;case"textarea":uc(n,a),re("invalid",n)}ro(r,a),s=null;for(var o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="children"?typeof l=="string"?n.textContent!==l&&(a.suppressHydrationWarning!==!0&&$s(n.textContent,l,e),s=["children",l]):typeof l=="number"&&n.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&$s(n.textContent,l,e),s=["children",""+l]):Zn.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&re("scroll",n)}switch(r){case"input":Ps(n),cc(n,a,!0);break;case"textarea":Ps(n),dc(n);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(n.onclick=xi)}n=s,t.updateQueue=n,n!==null&&(t.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=id(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=o.createElement(r,{is:n.is}):(e=o.createElement(r),r==="select"&&(o=e,n.multiple?o.multiple=!0:n.size&&(o.size=n.size))):e=o.createElementNS(e,r),e[wt]=t,e[cs]=n,Ph(e,t,!1,!1),t.stateNode=e;e:{switch(o=no(r,n),r){case"dialog":re("cancel",e),re("close",e),s=n;break;case"iframe":case"object":case"embed":re("load",e),s=n;break;case"video":case"audio":for(s=0;s<Un.length;s++)re(Un[s],e);s=n;break;case"source":re("error",e),s=n;break;case"img":case"image":case"link":re("error",e),re("load",e),s=n;break;case"details":re("toggle",e),s=n;break;case"input":lc(e,n),s=Xa(e,n),re("invalid",e);break;case"option":s=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},s=ce({},n,{value:void 0}),re("invalid",e);break;case"textarea":uc(e,n),s=eo(e,n),re("invalid",e);break;default:s=n}ro(r,s),l=s;for(a in l)if(l.hasOwnProperty(a)){var c=l[a];a==="style"?ld(e,c):a==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&ad(e,c)):a==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&es(e,c):typeof c=="number"&&es(e,""+c):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Zn.hasOwnProperty(a)?c!=null&&a==="onScroll"&&re("scroll",e):c!=null&&il(e,a,c,o))}switch(r){case"input":Ps(e),cc(e,n,!1);break;case"textarea":Ps(e),dc(e);break;case"option":n.value!=null&&e.setAttribute("value",""+sr(n.value));break;case"select":e.multiple=!!n.multiple,a=n.value,a!=null?rn(e,!!n.multiple,a,!1):n.defaultValue!=null&&rn(e,!!n.multiple,n.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=xi)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ae(t),null;case 6:if(e&&t.stateNode!=null)Oh(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(O(166));if(r=wr(ds.current),wr(bt.current),zs(t)){if(n=t.stateNode,r=t.memoizedProps,n[wt]=t,(a=n.nodeValue!==r)&&(e=Xe,e!==null))switch(e.tag){case 3:$s(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&$s(n.nodeValue,r,(e.mode&1)!==0)}a&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[wt]=t,t.stateNode=n}return Ae(t),null;case 13:if(ne(oe),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ae&&Qe!==null&&t.mode&1&&!(t.flags&128))Jd(),dn(),t.flags|=98560,a=!1;else if(a=zs(t),n!==null&&n.dehydrated!==null){if(e===null){if(!a)throw Error(O(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(O(317));a[wt]=t}else dn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ae(t),a=!1}else mt!==null&&(zo(mt),mt=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||oe.current&1?ye===0&&(ye=3):Fl())),t.updateQueue!==null&&(t.flags|=4),Ae(t),null);case 4:return fn(),To(e,t),e===null&&os(t.stateNode.containerInfo),Ae(t),null;case 10:return _l(t.type._context),Ae(t),null;case 17:return qe(t.type)&&yi(),Ae(t),null;case 19:if(ne(oe),a=t.memoizedState,a===null)return Ae(t),null;if(n=(t.flags&128)!==0,o=a.rendering,o===null)if(n)In(a,!1);else{if(ye!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Ni(e),o!==null){for(t.flags|=128,In(a,!1),n=o.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)a=r,e=n,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return te(oe,oe.current&1|2),t.child}e=e.sibling}a.tail!==null&&fe()>pn&&(t.flags|=128,n=!0,In(a,!1),t.lanes=4194304)}else{if(!n)if(e=Ni(o),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),In(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!ae)return Ae(t),null}else 2*fe()-a.renderingStartTime>pn&&r!==1073741824&&(t.flags|=128,n=!0,In(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(r=a.last,r!==null?r.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=fe(),t.sibling=null,r=oe.current,te(oe,n?r&1|2:r&1),t):(Ae(t),null);case 22:case 23:return Dl(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Je&1073741824&&(Ae(t),t.subtreeFlags&6&&(t.flags|=8192)):Ae(t),null;case 24:return null;case 25:return null}throw Error(O(156,t.tag))}function Vp(e,t){switch(wl(t),t.tag){case 1:return qe(t.type)&&yi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fn(),ne(Ge),ne(Me),Pl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return El(t),null;case 13:if(ne(oe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(O(340));dn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ne(oe),null;case 4:return fn(),null;case 10:return _l(t.type._context),null;case 22:case 23:return Dl(),null;case 24:return null;default:return null}}var Fs=!1,Le=!1,Hp=typeof WeakSet=="function"?WeakSet:Set,L=null;function en(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){ue(e,t,n)}else r.current=null}function Oo(e,t,r){try{r()}catch(n){ue(e,t,n)}}var eu=!1;function Gp(e,t){if(mo=mi,e=Md(),yl(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var s=n.anchorOffset,a=n.focusNode;n=n.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var o=0,l=-1,c=-1,u=0,d=0,h=e,m=null;t:for(;;){for(var x;h!==r||s!==0&&h.nodeType!==3||(l=o+s),h!==a||n!==0&&h.nodeType!==3||(c=o+n),h.nodeType===3&&(o+=h.nodeValue.length),(x=h.firstChild)!==null;)m=h,h=x;for(;;){if(h===e)break t;if(m===r&&++u===s&&(l=o),m===a&&++d===n&&(c=o),(x=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=x}r=l===-1||c===-1?null:{start:l,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(po={focusedElem:e,selectionRange:r},mi=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var j=w.memoizedProps,v=w.memoizedState,g=t.stateNode,p=g.getSnapshotBeforeUpdate(t.elementType===t.type?j:dt(t.type,j),v);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(O(163))}}catch(_){ue(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return w=eu,eu=!1,w}function qn(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var s=n=n.next;do{if((s.tag&e)===e){var a=s.destroy;s.destroy=void 0,a!==void 0&&Oo(t,r,a)}s=s.next}while(s!==n)}}function qi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function Io(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Ih(e){var t=e.alternate;t!==null&&(e.alternate=null,Ih(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[wt],delete t[cs],delete t[yo],delete t[Ep],delete t[Pp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ah(e){return e.tag===5||e.tag===3||e.tag===4}function tu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ah(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ao(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=xi));else if(n!==4&&(e=e.child,e!==null))for(Ao(e,t,r),e=e.sibling;e!==null;)Ao(e,t,r),e=e.sibling}function Ro(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Ro(e,t,r),e=e.sibling;e!==null;)Ro(e,t,r),e=e.sibling}var Se=null,ht=!1;function Ut(e,t,r){for(r=r.child;r!==null;)Rh(e,t,r),r=r.sibling}function Rh(e,t,r){if(jt&&typeof jt.onCommitFiberUnmount=="function")try{jt.onCommitFiberUnmount(Ui,r)}catch{}switch(r.tag){case 5:Le||en(r,t);case 6:var n=Se,s=ht;Se=null,Ut(e,t,r),Se=n,ht=s,Se!==null&&(ht?(e=Se,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Se.removeChild(r.stateNode));break;case 18:Se!==null&&(ht?(e=Se,r=r.stateNode,e.nodeType===8?Na(e.parentNode,r):e.nodeType===1&&Na(e,r),ss(e)):Na(Se,r.stateNode));break;case 4:n=Se,s=ht,Se=r.stateNode.containerInfo,ht=!0,Ut(e,t,r),Se=n,ht=s;break;case 0:case 11:case 14:case 15:if(!Le&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){s=n=n.next;do{var a=s,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&Oo(r,t,o),s=s.next}while(s!==n)}Ut(e,t,r);break;case 1:if(!Le&&(en(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(l){ue(r,t,l)}Ut(e,t,r);break;case 21:Ut(e,t,r);break;case 22:r.mode&1?(Le=(n=Le)||r.memoizedState!==null,Ut(e,t,r),Le=n):Ut(e,t,r);break;default:Ut(e,t,r)}}function ru(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Hp),t.forEach(function(n){var s=tg.bind(null,e,n);r.has(n)||(r.add(n),n.then(s,s))})}}function ct(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var s=r[n];try{var a=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:Se=l.stateNode,ht=!1;break e;case 3:Se=l.stateNode.containerInfo,ht=!0;break e;case 4:Se=l.stateNode.containerInfo,ht=!0;break e}l=l.return}if(Se===null)throw Error(O(160));Rh(a,o,s),Se=null,ht=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(u){ue(s,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Lh(t,e),t=t.sibling}function Lh(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ct(t,e),yt(e),n&4){try{qn(3,e,e.return),qi(3,e)}catch(j){ue(e,e.return,j)}try{qn(5,e,e.return)}catch(j){ue(e,e.return,j)}}break;case 1:ct(t,e),yt(e),n&512&&r!==null&&en(r,r.return);break;case 5:if(ct(t,e),yt(e),n&512&&r!==null&&en(r,r.return),e.flags&32){var s=e.stateNode;try{es(s,"")}catch(j){ue(e,e.return,j)}}if(n&4&&(s=e.stateNode,s!=null)){var a=e.memoizedProps,o=r!==null?r.memoizedProps:a,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&nd(s,a),no(l,o);var u=no(l,a);for(o=0;o<c.length;o+=2){var d=c[o],h=c[o+1];d==="style"?ld(s,h):d==="dangerouslySetInnerHTML"?ad(s,h):d==="children"?es(s,h):il(s,d,h,u)}switch(l){case"input":Ya(s,a);break;case"textarea":sd(s,a);break;case"select":var m=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!a.multiple;var x=a.value;x!=null?rn(s,!!a.multiple,x,!1):m!==!!a.multiple&&(a.defaultValue!=null?rn(s,!!a.multiple,a.defaultValue,!0):rn(s,!!a.multiple,a.multiple?[]:"",!1))}s[cs]=a}catch(j){ue(e,e.return,j)}}break;case 6:if(ct(t,e),yt(e),n&4){if(e.stateNode===null)throw Error(O(162));s=e.stateNode,a=e.memoizedProps;try{s.nodeValue=a}catch(j){ue(e,e.return,j)}}break;case 3:if(ct(t,e),yt(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{ss(t.containerInfo)}catch(j){ue(e,e.return,j)}break;case 4:ct(t,e),yt(e);break;case 13:ct(t,e),yt(e),s=e.child,s.flags&8192&&(a=s.memoizedState!==null,s.stateNode.isHidden=a,!a||s.alternate!==null&&s.alternate.memoizedState!==null||(zl=fe())),n&4&&ru(e);break;case 22:if(d=r!==null&&r.memoizedState!==null,e.mode&1?(Le=(u=Le)||d,ct(t,e),Le=u):ct(t,e),yt(e),n&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(L=e,d=e.child;d!==null;){for(h=L=d;L!==null;){switch(m=L,x=m.child,m.tag){case 0:case 11:case 14:case 15:qn(4,m,m.return);break;case 1:en(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){n=m,r=m.return;try{t=n,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(j){ue(n,r,j)}}break;case 5:en(m,m.return);break;case 22:if(m.memoizedState!==null){su(h);continue}}x!==null?(x.return=m,L=x):su(h)}d=d.sibling}e:for(d=null,h=e;;){if(h.tag===5){if(d===null){d=h;try{s=h.stateNode,u?(a=s.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=h.stateNode,c=h.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=od("display",o))}catch(j){ue(e,e.return,j)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(j){ue(e,e.return,j)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ct(t,e),yt(e),n&4&&ru(e);break;case 21:break;default:ct(t,e),yt(e)}}function yt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Ah(r)){var n=r;break e}r=r.return}throw Error(O(160))}switch(n.tag){case 5:var s=n.stateNode;n.flags&32&&(es(s,""),n.flags&=-33);var a=tu(e);Ro(e,a,s);break;case 3:case 4:var o=n.stateNode.containerInfo,l=tu(e);Ao(e,l,o);break;default:throw Error(O(161))}}catch(c){ue(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function qp(e,t,r){L=e,Mh(e)}function Mh(e,t,r){for(var n=(e.mode&1)!==0;L!==null;){var s=L,a=s.child;if(s.tag===22&&n){var o=s.memoizedState!==null||Fs;if(!o){var l=s.alternate,c=l!==null&&l.memoizedState!==null||Le;l=Fs;var u=Le;if(Fs=o,(Le=c)&&!u)for(L=s;L!==null;)o=L,c=o.child,o.tag===22&&o.memoizedState!==null?iu(s):c!==null?(c.return=o,L=c):iu(s);for(;a!==null;)L=a,Mh(a),a=a.sibling;L=s,Fs=l,Le=u}nu(e)}else s.subtreeFlags&8772&&a!==null?(a.return=s,L=a):nu(e)}}function nu(e){for(;L!==null;){var t=L;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Le||qi(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!Le)if(r===null)n.componentDidMount();else{var s=t.elementType===t.type?r.memoizedProps:dt(t.type,r.memoizedProps);n.componentDidUpdate(s,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Fc(t,a,n);break;case 3:var o=t.updateQueue;if(o!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Fc(t,o,r)}break;case 5:var l=t.stateNode;if(r===null&&t.flags&4){r=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&ss(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(O(163))}Le||t.flags&512&&Io(t)}catch(m){ue(t,t.return,m)}}if(t===e){L=null;break}if(r=t.sibling,r!==null){r.return=t.return,L=r;break}L=t.return}}function su(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var r=t.sibling;if(r!==null){r.return=t.return,L=r;break}L=t.return}}function iu(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{qi(4,t)}catch(c){ue(t,r,c)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var s=t.return;try{n.componentDidMount()}catch(c){ue(t,s,c)}}var a=t.return;try{Io(t)}catch(c){ue(t,a,c)}break;case 5:var o=t.return;try{Io(t)}catch(c){ue(t,o,c)}}}catch(c){ue(t,t.return,c)}if(t===e){L=null;break}var l=t.sibling;if(l!==null){l.return=t.return,L=l;break}L=t.return}}var Kp=Math.ceil,Ei=zt.ReactCurrentDispatcher,Ml=zt.ReactCurrentOwner,it=zt.ReactCurrentBatchConfig,q=0,ke=null,me=null,Ce=0,Je=0,tn=or(0),ye=0,ps=null,Er=0,Ki=0,$l=0,Kn=null,Be=null,zl=0,pn=1/0,St=null,Pi=!1,Lo=null,tr=null,Bs=!1,Jt=null,Ti=0,Jn=0,Mo=null,ii=-1,ai=0;function ze(){return q&6?fe():ii!==-1?ii:ii=fe()}function rr(e){return e.mode&1?q&2&&Ce!==0?Ce&-Ce:Op.transition!==null?(ai===0&&(ai=wd()),ai):(e=X,e!==0||(e=window.event,e=e===void 0?16:Cd(e.type)),e):1}function gt(e,t,r,n){if(50<Jn)throw Jn=0,Mo=null,Error(O(185));ys(e,r,n),(!(q&2)||e!==ke)&&(e===ke&&(!(q&2)&&(Ki|=r),ye===4&&Gt(e,Ce)),Ke(e,n),r===1&&q===0&&!(t.mode&1)&&(pn=fe()+500,Vi&&lr()))}function Ke(e,t){var r=e.callbackNode;Om(e,t);var n=fi(e,e===ke?Ce:0);if(n===0)r!==null&&mc(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&mc(r),t===1)e.tag===0?Tp(au.bind(null,e)):Gd(au.bind(null,e)),Sp(function(){!(q&6)&&lr()}),r=null;else{switch(jd(n)){case 1:r=ul;break;case 4:r=yd;break;case 16:r=hi;break;case 536870912:r=vd;break;default:r=hi}r=Vh(r,$h.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function $h(e,t){if(ii=-1,ai=0,q&6)throw Error(O(327));var r=e.callbackNode;if(ln()&&e.callbackNode!==r)return null;var n=fi(e,e===ke?Ce:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=Oi(e,n);else{t=n;var s=q;q|=2;var a=Uh();(ke!==e||Ce!==t)&&(St=null,pn=fe()+500,jr(e,t));do try{Xp();break}catch(l){zh(e,l)}while(!0);kl(),Ei.current=a,q=s,me!==null?t=0:(ke=null,Ce=0,t=ye)}if(t!==0){if(t===2&&(s=lo(e),s!==0&&(n=s,t=$o(e,s))),t===1)throw r=ps,jr(e,0),Gt(e,n),Ke(e,fe()),r;if(t===6)Gt(e,n);else{if(s=e.current.alternate,!(n&30)&&!Jp(s)&&(t=Oi(e,n),t===2&&(a=lo(e),a!==0&&(n=a,t=$o(e,a))),t===1))throw r=ps,jr(e,0),Gt(e,n),Ke(e,fe()),r;switch(e.finishedWork=s,e.finishedLanes=n,t){case 0:case 1:throw Error(O(345));case 2:pr(e,Be,St);break;case 3:if(Gt(e,n),(n&130023424)===n&&(t=zl+500-fe(),10<t)){if(fi(e,0)!==0)break;if(s=e.suspendedLanes,(s&n)!==n){ze(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=xo(pr.bind(null,e,Be,St),t);break}pr(e,Be,St);break;case 4:if(Gt(e,n),(n&4194240)===n)break;for(t=e.eventTimes,s=-1;0<n;){var o=31-pt(n);a=1<<o,o=t[o],o>s&&(s=o),n&=~a}if(n=s,n=fe()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Kp(n/1960))-n,10<n){e.timeoutHandle=xo(pr.bind(null,e,Be,St),n);break}pr(e,Be,St);break;case 5:pr(e,Be,St);break;default:throw Error(O(329))}}}return Ke(e,fe()),e.callbackNode===r?$h.bind(null,e):null}function $o(e,t){var r=Kn;return e.current.memoizedState.isDehydrated&&(jr(e,t).flags|=256),e=Oi(e,t),e!==2&&(t=Be,Be=r,t!==null&&zo(t)),e}function zo(e){Be===null?Be=e:Be.push.apply(Be,e)}function Jp(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var s=r[n],a=s.getSnapshot;s=s.value;try{if(!xt(a(),s))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Gt(e,t){for(t&=~$l,t&=~Ki,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-pt(t),n=1<<r;e[r]=-1,t&=~n}}function au(e){if(q&6)throw Error(O(327));ln();var t=fi(e,0);if(!(t&1))return Ke(e,fe()),null;var r=Oi(e,t);if(e.tag!==0&&r===2){var n=lo(e);n!==0&&(t=n,r=$o(e,n))}if(r===1)throw r=ps,jr(e,0),Gt(e,t),Ke(e,fe()),r;if(r===6)throw Error(O(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,pr(e,Be,St),Ke(e,fe()),null}function Ul(e,t){var r=q;q|=1;try{return e(t)}finally{q=r,q===0&&(pn=fe()+500,Vi&&lr())}}function Pr(e){Jt!==null&&Jt.tag===0&&!(q&6)&&ln();var t=q;q|=1;var r=it.transition,n=X;try{if(it.transition=null,X=1,e)return e()}finally{X=n,it.transition=r,q=t,!(q&6)&&lr()}}function Dl(){Je=tn.current,ne(tn)}function jr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Np(r)),me!==null)for(r=me.return;r!==null;){var n=r;switch(wl(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&yi();break;case 3:fn(),ne(Ge),ne(Me),Pl();break;case 5:El(n);break;case 4:fn();break;case 13:ne(oe);break;case 19:ne(oe);break;case 10:_l(n.type._context);break;case 22:case 23:Dl()}r=r.return}if(ke=e,me=e=nr(e.current,null),Ce=Je=t,ye=0,ps=null,$l=Ki=Er=0,Be=Kn=null,vr!==null){for(t=0;t<vr.length;t++)if(r=vr[t],n=r.interleaved,n!==null){r.interleaved=null;var s=n.next,a=r.pending;if(a!==null){var o=a.next;a.next=s,n.next=o}r.pending=n}vr=null}return e}function zh(e,t){do{var r=me;try{if(kl(),ri.current=Ci,Si){for(var n=le.memoizedState;n!==null;){var s=n.queue;s!==null&&(s.pending=null),n=n.next}Si=!1}if(Cr=0,we=xe=le=null,Gn=!1,hs=0,Ml.current=null,r===null||r.return===null){ye=1,ps=t,me=null;break}e:{var a=e,o=r.return,l=r,c=t;if(t=Ce,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var x=qc(o);if(x!==null){x.flags&=-257,Kc(x,o,l,a,t),x.mode&1&&Gc(a,u,t),t=x,c=u;var w=t.updateQueue;if(w===null){var j=new Set;j.add(c),t.updateQueue=j}else w.add(c);break e}else{if(!(t&1)){Gc(a,u,t),Fl();break e}c=Error(O(426))}}else if(ae&&l.mode&1){var v=qc(o);if(v!==null){!(v.flags&65536)&&(v.flags|=256),Kc(v,o,l,a,t),jl(mn(c,l));break e}}a=c=mn(c,l),ye!==4&&(ye=2),Kn===null?Kn=[a]:Kn.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var g=jh(a,c,t);Dc(a,g);break e;case 1:l=c;var p=a.type,y=a.stateNode;if(!(a.flags&128)&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(tr===null||!tr.has(y)))){a.flags|=65536,t&=-t,a.lanes|=t;var _=bh(a,l,t);Dc(a,_);break e}}a=a.return}while(a!==null)}Fh(r)}catch(E){t=E,me===r&&r!==null&&(me=r=r.return);continue}break}while(!0)}function Uh(){var e=Ei.current;return Ei.current=Ci,e===null?Ci:e}function Fl(){(ye===0||ye===3||ye===2)&&(ye=4),ke===null||!(Er&268435455)&&!(Ki&268435455)||Gt(ke,Ce)}function Oi(e,t){var r=q;q|=2;var n=Uh();(ke!==e||Ce!==t)&&(St=null,jr(e,t));do try{Qp();break}catch(s){zh(e,s)}while(!0);if(kl(),q=r,Ei.current=n,me!==null)throw Error(O(261));return ke=null,Ce=0,ye}function Qp(){for(;me!==null;)Dh(me)}function Xp(){for(;me!==null&&!bm();)Dh(me)}function Dh(e){var t=Wh(e.alternate,e,Je);e.memoizedProps=e.pendingProps,t===null?Fh(e):me=t,Ml.current=null}function Fh(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Vp(r,t),r!==null){r.flags&=32767,me=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ye=6,me=null;return}}else if(r=Wp(r,t,Je),r!==null){me=r;return}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);ye===0&&(ye=5)}function pr(e,t,r){var n=X,s=it.transition;try{it.transition=null,X=1,Yp(e,t,r,n)}finally{it.transition=s,X=n}return null}function Yp(e,t,r,n){do ln();while(Jt!==null);if(q&6)throw Error(O(327));r=e.finishedWork;var s=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(O(177));e.callbackNode=null,e.callbackPriority=0;var a=r.lanes|r.childLanes;if(Im(e,a),e===ke&&(me=ke=null,Ce=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Bs||(Bs=!0,Vh(hi,function(){return ln(),null})),a=(r.flags&15990)!==0,r.subtreeFlags&15990||a){a=it.transition,it.transition=null;var o=X;X=1;var l=q;q|=4,Ml.current=null,Gp(e,r),Lh(r,e),yp(po),mi=!!mo,po=mo=null,e.current=r,qp(r),km(),q=l,X=o,it.transition=a}else e.current=r;if(Bs&&(Bs=!1,Jt=e,Ti=s),a=e.pendingLanes,a===0&&(tr=null),Sm(r.stateNode),Ke(e,fe()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)s=t[r],n(s.value,{componentStack:s.stack,digest:s.digest});if(Pi)throw Pi=!1,e=Lo,Lo=null,e;return Ti&1&&e.tag!==0&&ln(),a=e.pendingLanes,a&1?e===Mo?Jn++:(Jn=0,Mo=e):Jn=0,lr(),null}function ln(){if(Jt!==null){var e=jd(Ti),t=it.transition,r=X;try{if(it.transition=null,X=16>e?16:e,Jt===null)var n=!1;else{if(e=Jt,Jt=null,Ti=0,q&6)throw Error(O(331));var s=q;for(q|=4,L=e.current;L!==null;){var a=L,o=a.child;if(L.flags&16){var l=a.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(L=u;L!==null;){var d=L;switch(d.tag){case 0:case 11:case 15:qn(8,d,a)}var h=d.child;if(h!==null)h.return=d,L=h;else for(;L!==null;){d=L;var m=d.sibling,x=d.return;if(Ih(d),d===u){L=null;break}if(m!==null){m.return=x,L=m;break}L=x}}}var w=a.alternate;if(w!==null){var j=w.child;if(j!==null){w.child=null;do{var v=j.sibling;j.sibling=null,j=v}while(j!==null)}}L=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,L=o;else e:for(;L!==null;){if(a=L,a.flags&2048)switch(a.tag){case 0:case 11:case 15:qn(9,a,a.return)}var g=a.sibling;if(g!==null){g.return=a.return,L=g;break e}L=a.return}}var p=e.current;for(L=p;L!==null;){o=L;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,L=y;else e:for(o=p;L!==null;){if(l=L,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:qi(9,l)}}catch(E){ue(l,l.return,E)}if(l===o){L=null;break e}var _=l.sibling;if(_!==null){_.return=l.return,L=_;break e}L=l.return}}if(q=s,lr(),jt&&typeof jt.onPostCommitFiberRoot=="function")try{jt.onPostCommitFiberRoot(Ui,e)}catch{}n=!0}return n}finally{X=r,it.transition=t}}return!1}function ou(e,t,r){t=mn(r,t),t=jh(e,t,1),e=er(e,t,1),t=ze(),e!==null&&(ys(e,1,t),Ke(e,t))}function ue(e,t,r){if(e.tag===3)ou(e,e,r);else for(;t!==null;){if(t.tag===3){ou(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(tr===null||!tr.has(n))){e=mn(r,e),e=bh(t,e,1),t=er(t,e,1),e=ze(),t!==null&&(ys(t,1,e),Ke(t,e));break}}t=t.return}}function Zp(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=ze(),e.pingedLanes|=e.suspendedLanes&r,ke===e&&(Ce&r)===r&&(ye===4||ye===3&&(Ce&130023424)===Ce&&500>fe()-zl?jr(e,0):$l|=r),Ke(e,t)}function Bh(e,t){t===0&&(e.mode&1?(t=Is,Is<<=1,!(Is&130023424)&&(Is=4194304)):t=1);var r=ze();e=Lt(e,t),e!==null&&(ys(e,t,r),Ke(e,r))}function eg(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Bh(e,r)}function tg(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,s=e.memoizedState;s!==null&&(r=s.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(O(314))}n!==null&&n.delete(t),Bh(e,r)}var Wh;Wh=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ge.current)Ve=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return Ve=!1,Bp(e,t,r);Ve=!!(e.flags&131072)}else Ve=!1,ae&&t.flags&1048576&&qd(t,ji,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;si(e,t),e=t.pendingProps;var s=un(t,Me.current);on(t,r),s=Ol(null,t,n,e,s,r);var a=Il();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,qe(n)?(a=!0,vi(t)):a=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Sl(t),s.updater=Gi,t.stateNode=s,s._reactInternals=t,_o(t,n,e,r),t=Co(null,t,n,!0,a,r)):(t.tag=0,ae&&a&&vl(t),$e(null,t,s,r),t=t.child),t;case 16:n=t.elementType;e:{switch(si(e,t),e=t.pendingProps,s=n._init,n=s(n._payload),t.type=n,s=t.tag=ng(n),e=dt(n,e),s){case 0:t=So(null,t,n,e,r);break e;case 1:t=Xc(null,t,n,e,r);break e;case 11:t=Jc(null,t,n,e,r);break e;case 14:t=Qc(null,t,n,dt(n.type,e),r);break e}throw Error(O(306,n,""))}return t;case 0:return n=t.type,s=t.pendingProps,s=t.elementType===n?s:dt(n,s),So(e,t,n,s,r);case 1:return n=t.type,s=t.pendingProps,s=t.elementType===n?s:dt(n,s),Xc(e,t,n,s,r);case 3:e:{if(Sh(t),e===null)throw Error(O(387));n=t.pendingProps,a=t.memoizedState,s=a.element,Zd(e,t),_i(t,n,null,r);var o=t.memoizedState;if(n=o.element,a.isDehydrated)if(a={element:n,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){s=mn(Error(O(423)),t),t=Yc(e,t,n,r,s);break e}else if(n!==s){s=mn(Error(O(424)),t),t=Yc(e,t,n,r,s);break e}else for(Qe=Zt(t.stateNode.containerInfo.firstChild),Xe=t,ae=!0,mt=null,r=Xd(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(dn(),n===s){t=Mt(e,t,r);break e}$e(e,t,n,r)}t=t.child}return t;case 5:return eh(t),e===null&&jo(t),n=t.type,s=t.pendingProps,a=e!==null?e.memoizedProps:null,o=s.children,go(n,s)?o=null:a!==null&&go(n,a)&&(t.flags|=32),Nh(e,t),$e(e,t,o,r),t.child;case 6:return e===null&&jo(t),null;case 13:return Ch(e,t,r);case 4:return Cl(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=hn(t,null,n,r):$e(e,t,n,r),t.child;case 11:return n=t.type,s=t.pendingProps,s=t.elementType===n?s:dt(n,s),Jc(e,t,n,s,r);case 7:return $e(e,t,t.pendingProps,r),t.child;case 8:return $e(e,t,t.pendingProps.children,r),t.child;case 12:return $e(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,s=t.pendingProps,a=t.memoizedProps,o=s.value,te(bi,n._currentValue),n._currentValue=o,a!==null)if(xt(a.value,o)){if(a.children===s.children&&!Ge.current){t=Mt(e,t,r);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){o=a.child;for(var c=l.firstContext;c!==null;){if(c.context===n){if(a.tag===1){c=It(-1,r&-r),c.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}a.lanes|=r,c=a.alternate,c!==null&&(c.lanes|=r),bo(a.return,r,t),l.lanes|=r;break}c=c.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(O(341));o.lanes|=r,l=o.alternate,l!==null&&(l.lanes|=r),bo(o,r,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}$e(e,t,s.children,r),t=t.child}return t;case 9:return s=t.type,n=t.pendingProps.children,on(t,r),s=ot(s),n=n(s),t.flags|=1,$e(e,t,n,r),t.child;case 14:return n=t.type,s=dt(n,t.pendingProps),s=dt(n.type,s),Qc(e,t,n,s,r);case 15:return kh(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,s=t.pendingProps,s=t.elementType===n?s:dt(n,s),si(e,t),t.tag=1,qe(n)?(e=!0,vi(t)):e=!1,on(t,r),wh(t,n,s),_o(t,n,s,r),Co(null,t,n,!0,e,r);case 19:return Eh(e,t,r);case 22:return _h(e,t,r)}throw Error(O(156,t.tag))};function Vh(e,t){return xd(e,t)}function rg(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nt(e,t,r,n){return new rg(e,t,r,n)}function Bl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ng(e){if(typeof e=="function")return Bl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ol)return 11;if(e===ll)return 14}return 2}function nr(e,t){var r=e.alternate;return r===null?(r=nt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function oi(e,t,r,n,s,a){var o=2;if(n=e,typeof e=="function")Bl(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Hr:return br(r.children,s,a,t);case al:o=8,s|=8;break;case qa:return e=nt(12,r,t,s|2),e.elementType=qa,e.lanes=a,e;case Ka:return e=nt(13,r,t,s),e.elementType=Ka,e.lanes=a,e;case Ja:return e=nt(19,r,t,s),e.elementType=Ja,e.lanes=a,e;case ed:return Ji(r,s,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Yu:o=10;break e;case Zu:o=9;break e;case ol:o=11;break e;case ll:o=14;break e;case Wt:o=16,n=null;break e}throw Error(O(130,e==null?e:typeof e,""))}return t=nt(o,r,t,s),t.elementType=e,t.type=n,t.lanes=a,t}function br(e,t,r,n){return e=nt(7,e,n,t),e.lanes=r,e}function Ji(e,t,r,n){return e=nt(22,e,n,t),e.elementType=ed,e.lanes=r,e.stateNode={isHidden:!1},e}function Aa(e,t,r){return e=nt(6,e,null,t),e.lanes=r,e}function Ra(e,t,r){return t=nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function sg(e,t,r,n,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ma(0),this.expirationTimes=ma(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ma(0),this.identifierPrefix=n,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Wl(e,t,r,n,s,a,o,l,c){return e=new sg(e,t,r,l,c),t===1?(t=1,a===!0&&(t|=8)):t=0,a=nt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sl(a),e}function ig(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vr,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Hh(e){if(!e)return ir;e=e._reactInternals;e:{if(Ir(e)!==e||e.tag!==1)throw Error(O(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(qe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(O(171))}if(e.tag===1){var r=e.type;if(qe(r))return Hd(e,r,t)}return t}function Gh(e,t,r,n,s,a,o,l,c){return e=Wl(r,n,!0,e,s,a,o,l,c),e.context=Hh(null),r=e.current,n=ze(),s=rr(r),a=It(n,s),a.callback=t??null,er(r,a,s),e.current.lanes=s,ys(e,s,n),Ke(e,n),e}function Qi(e,t,r,n){var s=t.current,a=ze(),o=rr(s);return r=Hh(r),t.context===null?t.context=r:t.pendingContext=r,t=It(a,o),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=er(s,t,o),e!==null&&(gt(e,s,o,a),ti(e,s,o)),o}function Ii(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function lu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Vl(e,t){lu(e,t),(e=e.alternate)&&lu(e,t)}function ag(){return null}var qh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Hl(e){this._internalRoot=e}Xi.prototype.render=Hl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(O(409));Qi(e,t,null,null)};Xi.prototype.unmount=Hl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Pr(function(){Qi(null,e,null,null)}),t[Rt]=null}};function Xi(e){this._internalRoot=e}Xi.prototype.unstable_scheduleHydration=function(e){if(e){var t=_d();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Ht.length&&t!==0&&t<Ht[r].priority;r++);Ht.splice(r,0,e),r===0&&Sd(e)}};function Gl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Yi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function cu(){}function og(e,t,r,n,s){if(s){if(typeof n=="function"){var a=n;n=function(){var u=Ii(o);a.call(u)}}var o=Gh(t,n,e,0,null,!1,!1,"",cu);return e._reactRootContainer=o,e[Rt]=o.current,os(e.nodeType===8?e.parentNode:e),Pr(),o}for(;s=e.lastChild;)e.removeChild(s);if(typeof n=="function"){var l=n;n=function(){var u=Ii(c);l.call(u)}}var c=Wl(e,0,!1,null,null,!1,!1,"",cu);return e._reactRootContainer=c,e[Rt]=c.current,os(e.nodeType===8?e.parentNode:e),Pr(function(){Qi(t,c,r,n)}),c}function Zi(e,t,r,n,s){var a=r._reactRootContainer;if(a){var o=a;if(typeof s=="function"){var l=s;s=function(){var c=Ii(o);l.call(c)}}Qi(t,o,e,s)}else o=og(r,t,e,s,n);return Ii(o)}bd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=zn(t.pendingLanes);r!==0&&(dl(t,r|1),Ke(t,fe()),!(q&6)&&(pn=fe()+500,lr()))}break;case 13:Pr(function(){var n=Lt(e,1);if(n!==null){var s=ze();gt(n,e,1,s)}}),Vl(e,1)}};hl=function(e){if(e.tag===13){var t=Lt(e,134217728);if(t!==null){var r=ze();gt(t,e,134217728,r)}Vl(e,134217728)}};kd=function(e){if(e.tag===13){var t=rr(e),r=Lt(e,t);if(r!==null){var n=ze();gt(r,e,t,n)}Vl(e,t)}};_d=function(){return X};Nd=function(e,t){var r=X;try{return X=e,t()}finally{X=r}};io=function(e,t,r){switch(t){case"input":if(Ya(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var s=Wi(n);if(!s)throw Error(O(90));rd(n),Ya(n,s)}}}break;case"textarea":sd(e,r);break;case"select":t=r.value,t!=null&&rn(e,!!r.multiple,t,!1)}};dd=Ul;hd=Pr;var lg={usingClientEntryPoint:!1,Events:[ws,Jr,Wi,cd,ud,Ul]},An={findFiberByHostInstance:yr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cg={bundleType:An.bundleType,version:An.version,rendererPackageName:An.rendererPackageName,rendererConfig:An.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=pd(e),e===null?null:e.stateNode},findFiberByHostInstance:An.findFiberByHostInstance||ag,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ws=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ws.isDisabled&&Ws.supportsFiber)try{Ui=Ws.inject(cg),jt=Ws}catch{}}Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lg;Ze.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gl(t))throw Error(O(200));return ig(e,t,null,r)};Ze.createRoot=function(e,t){if(!Gl(e))throw Error(O(299));var r=!1,n="",s=qh;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=Wl(e,1,!1,null,null,r,!1,n,s),e[Rt]=t.current,os(e.nodeType===8?e.parentNode:e),new Hl(t)};Ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(O(188)):(e=Object.keys(e).join(","),Error(O(268,e)));return e=pd(t),e=e===null?null:e.stateNode,e};Ze.flushSync=function(e){return Pr(e)};Ze.hydrate=function(e,t,r){if(!Yi(t))throw Error(O(200));return Zi(null,e,t,!0,r)};Ze.hydrateRoot=function(e,t,r){if(!Gl(e))throw Error(O(405));var n=r!=null&&r.hydratedSources||null,s=!1,a="",o=qh;if(r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),t=Gh(t,null,e,1,r??null,s,!1,a,o),e[Rt]=t.current,os(e),n)for(e=0;e<n.length;e++)r=n[e],s=r._getVersion,s=s(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,s]:t.mutableSourceEagerHydrationData.push(r,s);return new Xi(t)};Ze.render=function(e,t,r){if(!Yi(t))throw Error(O(200));return Zi(null,e,t,!1,r)};Ze.unmountComponentAtNode=function(e){if(!Yi(e))throw Error(O(40));return e._reactRootContainer?(Pr(function(){Zi(null,null,e,!1,function(){e._reactRootContainer=null,e[Rt]=null})}),!0):!1};Ze.unstable_batchedUpdates=Ul;Ze.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Yi(r))throw Error(O(200));if(e==null||e._reactInternals===void 0)throw Error(O(38));return Zi(e,t,r,!1,n)};Ze.version="18.3.1-next-f1338f8080-20240426";function Kh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kh)}catch(e){console.error(e)}}Kh(),Ku.exports=Ze;var ug=Ku.exports,Jh,uu=ug;Jh=uu.createRoot,uu.hydrateRoot;const dg="modulepreload",hg=function(e){return"/"+e},du={},bs=function(t,r,n){let s=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(r.map(c=>{if(c=hg(c),c in du)return;du[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":dg,u||(h.as="script"),h.crossOrigin="",h.href=c,l&&h.setAttribute("nonce",l),document.head.appendChild(h),u)return new Promise((m,x)=>{h.addEventListener("load",m),h.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${c}`)))})}))}function a(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return s.then(o=>{for(const l of o||[])l.status==="rejected"&&a(l.reason);return t().catch(a)})},fg=e=>{let t;return e?t=e:typeof fetch>"u"?t=(...r)=>bs(async()=>{const{default:n}=await Promise.resolve().then(()=>wn);return{default:n}},void 0).then(({default:n})=>n(...r)):t=fetch,(...r)=>t(...r)};class ql extends Error{constructor(t,r="FunctionsError",n){super(t),this.name=r,this.context=n}}class mg extends ql{constructor(t){super("Failed to send a request to the Edge Function","FunctionsFetchError",t)}}class hu extends ql{constructor(t){super("Relay Error invoking the Edge Function","FunctionsRelayError",t)}}class fu extends ql{constructor(t){super("Edge Function returned a non-2xx status code","FunctionsHttpError",t)}}var Uo;(function(e){e.Any="any",e.ApNortheast1="ap-northeast-1",e.ApNortheast2="ap-northeast-2",e.ApSouth1="ap-south-1",e.ApSoutheast1="ap-southeast-1",e.ApSoutheast2="ap-southeast-2",e.CaCentral1="ca-central-1",e.EuCentral1="eu-central-1",e.EuWest1="eu-west-1",e.EuWest2="eu-west-2",e.EuWest3="eu-west-3",e.SaEast1="sa-east-1",e.UsEast1="us-east-1",e.UsWest1="us-west-1",e.UsWest2="us-west-2"})(Uo||(Uo={}));var pg=function(e,t,r,n){function s(a){return a instanceof r?a:new r(function(o){o(a)})}return new(r||(r=Promise))(function(a,o){function l(d){try{u(n.next(d))}catch(h){o(h)}}function c(d){try{u(n.throw(d))}catch(h){o(h)}}function u(d){d.done?a(d.value):s(d.value).then(l,c)}u((n=n.apply(e,t||[])).next())})};class gg{constructor(t,{headers:r={},customFetch:n,region:s=Uo.Any}={}){this.url=t,this.headers=r,this.region=s,this.fetch=fg(n)}setAuth(t){this.headers.Authorization=`Bearer ${t}`}invoke(t,r={}){var n;return pg(this,void 0,void 0,function*(){try{const{headers:s,method:a,body:o}=r;let l={},{region:c}=r;c||(c=this.region);const u=new URL(`${this.url}/${t}`);c&&c!=="any"&&(l["x-region"]=c,u.searchParams.set("forceFunctionRegion",c));let d;o&&(s&&!Object.prototype.hasOwnProperty.call(s,"Content-Type")||!s)&&(typeof Blob<"u"&&o instanceof Blob||o instanceof ArrayBuffer?(l["Content-Type"]="application/octet-stream",d=o):typeof o=="string"?(l["Content-Type"]="text/plain",d=o):typeof FormData<"u"&&o instanceof FormData?d=o:(l["Content-Type"]="application/json",d=JSON.stringify(o)));const h=yield this.fetch(u.toString(),{method:a||"POST",headers:Object.assign(Object.assign(Object.assign({},l),this.headers),s),body:d}).catch(j=>{throw new mg(j)}),m=h.headers.get("x-relay-error");if(m&&m==="true")throw new hu(h);if(!h.ok)throw new fu(h);let x=((n=h.headers.get("Content-Type"))!==null&&n!==void 0?n:"text/plain").split(";")[0].trim(),w;return x==="application/json"?w=yield h.json():x==="application/octet-stream"?w=yield h.blob():x==="text/event-stream"?w=h:x==="multipart/form-data"?w=yield h.formData():w=yield h.text(),{data:w,error:null,response:h}}catch(s){return{data:null,error:s,response:s instanceof fu||s instanceof hu?s.context:void 0}}})}}var We={},Kl={},ea={},ks={},ta={},ra={},xg=function(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")},gn=xg();const yg=gn.fetch,Qh=gn.fetch.bind(gn),Xh=gn.Headers,vg=gn.Request,wg=gn.Response,wn=Object.freeze(Object.defineProperty({__proto__:null,Headers:Xh,Request:vg,Response:wg,default:Qh,fetch:yg},Symbol.toStringTag,{value:"Module"})),jg=zf(wn);var na={};Object.defineProperty(na,"__esModule",{value:!0});let bg=class extends Error{constructor(t){super(t.message),this.name="PostgrestError",this.details=t.details,this.hint=t.hint,this.code=t.code}};na.default=bg;var Yh=at&&at.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ra,"__esModule",{value:!0});const kg=Yh(jg),_g=Yh(na);let Ng=class{constructor(t){this.shouldThrowOnError=!1,this.method=t.method,this.url=t.url,this.headers=t.headers,this.schema=t.schema,this.body=t.body,this.shouldThrowOnError=t.shouldThrowOnError,this.signal=t.signal,this.isMaybeSingle=t.isMaybeSingle,t.fetch?this.fetch=t.fetch:typeof fetch>"u"?this.fetch=kg.default:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(t,r){return this.headers=Object.assign({},this.headers),this.headers[t]=r,this}then(t,r){this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers["Accept-Profile"]=this.schema:this.headers["Content-Profile"]=this.schema),this.method!=="GET"&&this.method!=="HEAD"&&(this.headers["Content-Type"]="application/json");const n=this.fetch;let s=n(this.url.toString(),{method:this.method,headers:this.headers,body:JSON.stringify(this.body),signal:this.signal}).then(async a=>{var o,l,c;let u=null,d=null,h=null,m=a.status,x=a.statusText;if(a.ok){if(this.method!=="HEAD"){const g=await a.text();g===""||(this.headers.Accept==="text/csv"||this.headers.Accept&&this.headers.Accept.includes("application/vnd.pgrst.plan+text")?d=g:d=JSON.parse(g))}const j=(o=this.headers.Prefer)===null||o===void 0?void 0:o.match(/count=(exact|planned|estimated)/),v=(l=a.headers.get("content-range"))===null||l===void 0?void 0:l.split("/");j&&v&&v.length>1&&(h=parseInt(v[1])),this.isMaybeSingle&&this.method==="GET"&&Array.isArray(d)&&(d.length>1?(u={code:"PGRST116",details:`Results contain ${d.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},d=null,h=null,m=406,x="Not Acceptable"):d.length===1?d=d[0]:d=null)}else{const j=await a.text();try{u=JSON.parse(j),Array.isArray(u)&&a.status===404&&(d=[],u=null,m=200,x="OK")}catch{a.status===404&&j===""?(m=204,x="No Content"):u={message:j}}if(u&&this.isMaybeSingle&&(!((c=u==null?void 0:u.details)===null||c===void 0)&&c.includes("0 rows"))&&(u=null,m=200,x="OK"),u&&this.shouldThrowOnError)throw new _g.default(u)}return{error:u,data:d,count:h,status:m,statusText:x}});return this.shouldThrowOnError||(s=s.catch(a=>{var o,l,c;return{error:{message:`${(o=a==null?void 0:a.name)!==null&&o!==void 0?o:"FetchError"}: ${a==null?void 0:a.message}`,details:`${(l=a==null?void 0:a.stack)!==null&&l!==void 0?l:""}`,hint:"",code:`${(c=a==null?void 0:a.code)!==null&&c!==void 0?c:""}`},data:null,count:null,status:0,statusText:""}})),s.then(t,r)}returns(){return this}overrideTypes(){return this}};ra.default=Ng;var Sg=at&&at.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ta,"__esModule",{value:!0});const Cg=Sg(ra);let Eg=class extends Cg.default{select(t){let r=!1;const n=(t??"*").split("").map(s=>/\s/.test(s)&&!r?"":(s==='"'&&(r=!r),s)).join("");return this.url.searchParams.set("select",n),this.headers.Prefer&&(this.headers.Prefer+=","),this.headers.Prefer+="return=representation",this}order(t,{ascending:r=!0,nullsFirst:n,foreignTable:s,referencedTable:a=s}={}){const o=a?`${a}.order`:"order",l=this.url.searchParams.get(o);return this.url.searchParams.set(o,`${l?`${l},`:""}${t}.${r?"asc":"desc"}${n===void 0?"":n?".nullsfirst":".nullslast"}`),this}limit(t,{foreignTable:r,referencedTable:n=r}={}){const s=typeof n>"u"?"limit":`${n}.limit`;return this.url.searchParams.set(s,`${t}`),this}range(t,r,{foreignTable:n,referencedTable:s=n}={}){const a=typeof s>"u"?"offset":`${s}.offset`,o=typeof s>"u"?"limit":`${s}.limit`;return this.url.searchParams.set(a,`${t}`),this.url.searchParams.set(o,`${r-t+1}`),this}abortSignal(t){return this.signal=t,this}single(){return this.headers.Accept="application/vnd.pgrst.object+json",this}maybeSingle(){return this.method==="GET"?this.headers.Accept="application/json":this.headers.Accept="application/vnd.pgrst.object+json",this.isMaybeSingle=!0,this}csv(){return this.headers.Accept="text/csv",this}geojson(){return this.headers.Accept="application/geo+json",this}explain({analyze:t=!1,verbose:r=!1,settings:n=!1,buffers:s=!1,wal:a=!1,format:o="text"}={}){var l;const c=[t?"analyze":null,r?"verbose":null,n?"settings":null,s?"buffers":null,a?"wal":null].filter(Boolean).join("|"),u=(l=this.headers.Accept)!==null&&l!==void 0?l:"application/json";return this.headers.Accept=`application/vnd.pgrst.plan+${o}; for="${u}"; options=${c};`,o==="json"?this:this}rollback(){var t;return((t=this.headers.Prefer)!==null&&t!==void 0?t:"").trim().length>0?this.headers.Prefer+=",tx=rollback":this.headers.Prefer="tx=rollback",this}returns(){return this}};ta.default=Eg;var Pg=at&&at.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ks,"__esModule",{value:!0});const Tg=Pg(ta);let Og=class extends Tg.default{eq(t,r){return this.url.searchParams.append(t,`eq.${r}`),this}neq(t,r){return this.url.searchParams.append(t,`neq.${r}`),this}gt(t,r){return this.url.searchParams.append(t,`gt.${r}`),this}gte(t,r){return this.url.searchParams.append(t,`gte.${r}`),this}lt(t,r){return this.url.searchParams.append(t,`lt.${r}`),this}lte(t,r){return this.url.searchParams.append(t,`lte.${r}`),this}like(t,r){return this.url.searchParams.append(t,`like.${r}`),this}likeAllOf(t,r){return this.url.searchParams.append(t,`like(all).{${r.join(",")}}`),this}likeAnyOf(t,r){return this.url.searchParams.append(t,`like(any).{${r.join(",")}}`),this}ilike(t,r){return this.url.searchParams.append(t,`ilike.${r}`),this}ilikeAllOf(t,r){return this.url.searchParams.append(t,`ilike(all).{${r.join(",")}}`),this}ilikeAnyOf(t,r){return this.url.searchParams.append(t,`ilike(any).{${r.join(",")}}`),this}is(t,r){return this.url.searchParams.append(t,`is.${r}`),this}in(t,r){const n=Array.from(new Set(r)).map(s=>typeof s=="string"&&new RegExp("[,()]").test(s)?`"${s}"`:`${s}`).join(",");return this.url.searchParams.append(t,`in.(${n})`),this}contains(t,r){return typeof r=="string"?this.url.searchParams.append(t,`cs.${r}`):Array.isArray(r)?this.url.searchParams.append(t,`cs.{${r.join(",")}}`):this.url.searchParams.append(t,`cs.${JSON.stringify(r)}`),this}containedBy(t,r){return typeof r=="string"?this.url.searchParams.append(t,`cd.${r}`):Array.isArray(r)?this.url.searchParams.append(t,`cd.{${r.join(",")}}`):this.url.searchParams.append(t,`cd.${JSON.stringify(r)}`),this}rangeGt(t,r){return this.url.searchParams.append(t,`sr.${r}`),this}rangeGte(t,r){return this.url.searchParams.append(t,`nxl.${r}`),this}rangeLt(t,r){return this.url.searchParams.append(t,`sl.${r}`),this}rangeLte(t,r){return this.url.searchParams.append(t,`nxr.${r}`),this}rangeAdjacent(t,r){return this.url.searchParams.append(t,`adj.${r}`),this}overlaps(t,r){return typeof r=="string"?this.url.searchParams.append(t,`ov.${r}`):this.url.searchParams.append(t,`ov.{${r.join(",")}}`),this}textSearch(t,r,{config:n,type:s}={}){let a="";s==="plain"?a="pl":s==="phrase"?a="ph":s==="websearch"&&(a="w");const o=n===void 0?"":`(${n})`;return this.url.searchParams.append(t,`${a}fts${o}.${r}`),this}match(t){return Object.entries(t).forEach(([r,n])=>{this.url.searchParams.append(r,`eq.${n}`)}),this}not(t,r,n){return this.url.searchParams.append(t,`not.${r}.${n}`),this}or(t,{foreignTable:r,referencedTable:n=r}={}){const s=n?`${n}.or`:"or";return this.url.searchParams.append(s,`(${t})`),this}filter(t,r,n){return this.url.searchParams.append(t,`${r}.${n}`),this}};ks.default=Og;var Ig=at&&at.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ea,"__esModule",{value:!0});const Rn=Ig(ks);let Ag=class{constructor(t,{headers:r={},schema:n,fetch:s}){this.url=t,this.headers=r,this.schema=n,this.fetch=s}select(t,{head:r=!1,count:n}={}){const s=r?"HEAD":"GET";let a=!1;const o=(t??"*").split("").map(l=>/\s/.test(l)&&!a?"":(l==='"'&&(a=!a),l)).join("");return this.url.searchParams.set("select",o),n&&(this.headers.Prefer=`count=${n}`),new Rn.default({method:s,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}insert(t,{count:r,defaultToNull:n=!0}={}){const s="POST",a=[];if(this.headers.Prefer&&a.push(this.headers.Prefer),r&&a.push(`count=${r}`),n||a.push("missing=default"),this.headers.Prefer=a.join(","),Array.isArray(t)){const o=t.reduce((l,c)=>l.concat(Object.keys(c)),[]);if(o.length>0){const l=[...new Set(o)].map(c=>`"${c}"`);this.url.searchParams.set("columns",l.join(","))}}return new Rn.default({method:s,url:this.url,headers:this.headers,schema:this.schema,body:t,fetch:this.fetch,allowEmpty:!1})}upsert(t,{onConflict:r,ignoreDuplicates:n=!1,count:s,defaultToNull:a=!0}={}){const o="POST",l=[`resolution=${n?"ignore":"merge"}-duplicates`];if(r!==void 0&&this.url.searchParams.set("on_conflict",r),this.headers.Prefer&&l.push(this.headers.Prefer),s&&l.push(`count=${s}`),a||l.push("missing=default"),this.headers.Prefer=l.join(","),Array.isArray(t)){const c=t.reduce((u,d)=>u.concat(Object.keys(d)),[]);if(c.length>0){const u=[...new Set(c)].map(d=>`"${d}"`);this.url.searchParams.set("columns",u.join(","))}}return new Rn.default({method:o,url:this.url,headers:this.headers,schema:this.schema,body:t,fetch:this.fetch,allowEmpty:!1})}update(t,{count:r}={}){const n="PATCH",s=[];return this.headers.Prefer&&s.push(this.headers.Prefer),r&&s.push(`count=${r}`),this.headers.Prefer=s.join(","),new Rn.default({method:n,url:this.url,headers:this.headers,schema:this.schema,body:t,fetch:this.fetch,allowEmpty:!1})}delete({count:t}={}){const r="DELETE",n=[];return t&&n.push(`count=${t}`),this.headers.Prefer&&n.unshift(this.headers.Prefer),this.headers.Prefer=n.join(","),new Rn.default({method:r,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}};ea.default=Ag;var sa={},ia={};Object.defineProperty(ia,"__esModule",{value:!0});ia.version=void 0;ia.version="0.0.0-automated";Object.defineProperty(sa,"__esModule",{value:!0});sa.DEFAULT_HEADERS=void 0;const Rg=ia;sa.DEFAULT_HEADERS={"X-Client-Info":`postgrest-js/${Rg.version}`};var Zh=at&&at.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Kl,"__esModule",{value:!0});const Lg=Zh(ea),Mg=Zh(ks),$g=sa;let zg=class ef{constructor(t,{headers:r={},schema:n,fetch:s}={}){this.url=t,this.headers=Object.assign(Object.assign({},$g.DEFAULT_HEADERS),r),this.schemaName=n,this.fetch=s}from(t){const r=new URL(`${this.url}/${t}`);return new Lg.default(r,{headers:Object.assign({},this.headers),schema:this.schemaName,fetch:this.fetch})}schema(t){return new ef(this.url,{headers:this.headers,schema:t,fetch:this.fetch})}rpc(t,r={},{head:n=!1,get:s=!1,count:a}={}){let o;const l=new URL(`${this.url}/rpc/${t}`);let c;n||s?(o=n?"HEAD":"GET",Object.entries(r).filter(([d,h])=>h!==void 0).map(([d,h])=>[d,Array.isArray(h)?`{${h.join(",")}}`:`${h}`]).forEach(([d,h])=>{l.searchParams.append(d,h)})):(o="POST",c=r);const u=Object.assign({},this.headers);return a&&(u.Prefer=`count=${a}`),new Mg.default({method:o,url:l,headers:u,schema:this.schemaName,body:c,fetch:this.fetch,allowEmpty:!1})}};Kl.default=zg;var jn=at&&at.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(We,"__esModule",{value:!0});We.PostgrestError=We.PostgrestBuilder=We.PostgrestTransformBuilder=We.PostgrestFilterBuilder=We.PostgrestQueryBuilder=We.PostgrestClient=void 0;const tf=jn(Kl);We.PostgrestClient=tf.default;const rf=jn(ea);We.PostgrestQueryBuilder=rf.default;const nf=jn(ks);We.PostgrestFilterBuilder=nf.default;const sf=jn(ta);We.PostgrestTransformBuilder=sf.default;const af=jn(ra);We.PostgrestBuilder=af.default;const of=jn(na);We.PostgrestError=of.default;var Ug=We.default={PostgrestClient:tf.default,PostgrestQueryBuilder:rf.default,PostgrestFilterBuilder:nf.default,PostgrestTransformBuilder:sf.default,PostgrestBuilder:af.default,PostgrestError:of.default};const{PostgrestClient:Dg,PostgrestQueryBuilder:qy,PostgrestFilterBuilder:Ky,PostgrestTransformBuilder:Jy,PostgrestBuilder:Qy,PostgrestError:Xy}=Ug;function Fg(){if(typeof WebSocket<"u")return WebSocket;if(typeof global.WebSocket<"u")return global.WebSocket;if(typeof window.WebSocket<"u")return window.WebSocket;if(typeof self.WebSocket<"u")return self.WebSocket;throw new Error("`WebSocket` is not supported in this environment")}const Bg=Fg(),Wg="2.11.15",Vg=`realtime-js/${Wg}`,Hg="1.0.0",lf=1e4,Gg=1e3;var Qn;(function(e){e[e.connecting=0]="connecting",e[e.open=1]="open",e[e.closing=2]="closing",e[e.closed=3]="closed"})(Qn||(Qn={}));var Re;(function(e){e.closed="closed",e.errored="errored",e.joined="joined",e.joining="joining",e.leaving="leaving"})(Re||(Re={}));var ft;(function(e){e.close="phx_close",e.error="phx_error",e.join="phx_join",e.reply="phx_reply",e.leave="phx_leave",e.access_token="access_token"})(ft||(ft={}));var Do;(function(e){e.websocket="websocket"})(Do||(Do={}));var xr;(function(e){e.Connecting="connecting",e.Open="open",e.Closing="closing",e.Closed="closed"})(xr||(xr={}));class qg{constructor(){this.HEADER_LENGTH=1}decode(t,r){return t.constructor===ArrayBuffer?r(this._binaryDecode(t)):r(typeof t=="string"?JSON.parse(t):{})}_binaryDecode(t){const r=new DataView(t),n=new TextDecoder;return this._decodeBroadcast(t,r,n)}_decodeBroadcast(t,r,n){const s=r.getUint8(1),a=r.getUint8(2);let o=this.HEADER_LENGTH+2;const l=n.decode(t.slice(o,o+s));o=o+s;const c=n.decode(t.slice(o,o+a));o=o+a;const u=JSON.parse(n.decode(t.slice(o,t.byteLength)));return{ref:null,topic:l,event:c,payload:u}}}class cf{constructor(t,r){this.callback=t,this.timerCalc=r,this.timer=void 0,this.tries=0,this.callback=t,this.timerCalc=r}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}}var ee;(function(e){e.abstime="abstime",e.bool="bool",e.date="date",e.daterange="daterange",e.float4="float4",e.float8="float8",e.int2="int2",e.int4="int4",e.int4range="int4range",e.int8="int8",e.int8range="int8range",e.json="json",e.jsonb="jsonb",e.money="money",e.numeric="numeric",e.oid="oid",e.reltime="reltime",e.text="text",e.time="time",e.timestamp="timestamp",e.timestamptz="timestamptz",e.timetz="timetz",e.tsrange="tsrange",e.tstzrange="tstzrange"})(ee||(ee={}));const mu=(e,t,r={})=>{var n;const s=(n=r.skipTypes)!==null&&n!==void 0?n:[];return Object.keys(t).reduce((a,o)=>(a[o]=Kg(o,e,t,s),a),{})},Kg=(e,t,r,n)=>{const s=t.find(l=>l.name===e),a=s==null?void 0:s.type,o=r[e];return a&&!n.includes(a)?uf(a,o):Fo(o)},uf=(e,t)=>{if(e.charAt(0)==="_"){const r=e.slice(1,e.length);return Yg(t,r)}switch(e){case ee.bool:return Jg(t);case ee.float4:case ee.float8:case ee.int2:case ee.int4:case ee.int8:case ee.numeric:case ee.oid:return Qg(t);case ee.json:case ee.jsonb:return Xg(t);case ee.timestamp:return Zg(t);case ee.abstime:case ee.date:case ee.daterange:case ee.int4range:case ee.int8range:case ee.money:case ee.reltime:case ee.text:case ee.time:case ee.timestamptz:case ee.timetz:case ee.tsrange:case ee.tstzrange:return Fo(t);default:return Fo(t)}},Fo=e=>e,Jg=e=>{switch(e){case"t":return!0;case"f":return!1;default:return e}},Qg=e=>{if(typeof e=="string"){const t=parseFloat(e);if(!Number.isNaN(t))return t}return e},Xg=e=>{if(typeof e=="string")try{return JSON.parse(e)}catch(t){return console.log(`JSON parse error: ${t}`),e}return e},Yg=(e,t)=>{if(typeof e!="string")return e;const r=e.length-1,n=e[r];if(e[0]==="{"&&n==="}"){let a;const o=e.slice(1,r);try{a=JSON.parse("["+o+"]")}catch{a=o?o.split(","):[]}return a.map(l=>uf(t,l))}return e},Zg=e=>typeof e=="string"?e.replace(" ","T"):e,df=e=>{let t=e;return t=t.replace(/^ws/i,"http"),t=t.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i,""),t.replace(/\/+$/,"")};class La{constructor(t,r,n={},s=lf){this.channel=t,this.event=r,this.payload=n,this.timeout=s,this.sent=!1,this.timeoutTimer=void 0,this.ref="",this.receivedResp=null,this.recHooks=[],this.refEvent=null}resend(t){this.timeout=t,this._cancelRefEvent(),this.ref="",this.refEvent=null,this.receivedResp=null,this.sent=!1,this.send()}send(){this._hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload,ref:this.ref,join_ref:this.channel._joinRef()}))}updatePayload(t){this.payload=Object.assign(Object.assign({},this.payload),t)}receive(t,r){var n;return this._hasReceived(t)&&r((n=this.receivedResp)===null||n===void 0?void 0:n.response),this.recHooks.push({status:t,callback:r}),this}startTimeout(){if(this.timeoutTimer)return;this.ref=this.channel.socket._makeRef(),this.refEvent=this.channel._replyEventName(this.ref);const t=r=>{this._cancelRefEvent(),this._cancelTimeout(),this.receivedResp=r,this._matchReceive(r)};this.channel._on(this.refEvent,{},t),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}trigger(t,r){this.refEvent&&this.channel._trigger(this.refEvent,{status:t,response:r})}destroy(){this._cancelRefEvent(),this._cancelTimeout()}_cancelRefEvent(){this.refEvent&&this.channel._off(this.refEvent,{})}_cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=void 0}_matchReceive({status:t,response:r}){this.recHooks.filter(n=>n.status===t).forEach(n=>n.callback(r))}_hasReceived(t){return this.receivedResp&&this.receivedResp.status===t}}var pu;(function(e){e.SYNC="sync",e.JOIN="join",e.LEAVE="leave"})(pu||(pu={}));class Xn{constructor(t,r){this.channel=t,this.state={},this.pendingDiffs=[],this.joinRef=null,this.caller={onJoin:()=>{},onLeave:()=>{},onSync:()=>{}};const n=(r==null?void 0:r.events)||{state:"presence_state",diff:"presence_diff"};this.channel._on(n.state,{},s=>{const{onJoin:a,onLeave:o,onSync:l}=this.caller;this.joinRef=this.channel._joinRef(),this.state=Xn.syncState(this.state,s,a,o),this.pendingDiffs.forEach(c=>{this.state=Xn.syncDiff(this.state,c,a,o)}),this.pendingDiffs=[],l()}),this.channel._on(n.diff,{},s=>{const{onJoin:a,onLeave:o,onSync:l}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(s):(this.state=Xn.syncDiff(this.state,s,a,o),l())}),this.onJoin((s,a,o)=>{this.channel._trigger("presence",{event:"join",key:s,currentPresences:a,newPresences:o})}),this.onLeave((s,a,o)=>{this.channel._trigger("presence",{event:"leave",key:s,currentPresences:a,leftPresences:o})}),this.onSync(()=>{this.channel._trigger("presence",{event:"sync"})})}static syncState(t,r,n,s){const a=this.cloneDeep(t),o=this.transformState(r),l={},c={};return this.map(a,(u,d)=>{o[u]||(c[u]=d)}),this.map(o,(u,d)=>{const h=a[u];if(h){const m=d.map(v=>v.presence_ref),x=h.map(v=>v.presence_ref),w=d.filter(v=>x.indexOf(v.presence_ref)<0),j=h.filter(v=>m.indexOf(v.presence_ref)<0);w.length>0&&(l[u]=w),j.length>0&&(c[u]=j)}else l[u]=d}),this.syncDiff(a,{joins:l,leaves:c},n,s)}static syncDiff(t,r,n,s){const{joins:a,leaves:o}={joins:this.transformState(r.joins),leaves:this.transformState(r.leaves)};return n||(n=()=>{}),s||(s=()=>{}),this.map(a,(l,c)=>{var u;const d=(u=t[l])!==null&&u!==void 0?u:[];if(t[l]=this.cloneDeep(c),d.length>0){const h=t[l].map(x=>x.presence_ref),m=d.filter(x=>h.indexOf(x.presence_ref)<0);t[l].unshift(...m)}n(l,d,c)}),this.map(o,(l,c)=>{let u=t[l];if(!u)return;const d=c.map(h=>h.presence_ref);u=u.filter(h=>d.indexOf(h.presence_ref)<0),t[l]=u,s(l,u,c),u.length===0&&delete t[l]}),t}static map(t,r){return Object.getOwnPropertyNames(t).map(n=>r(n,t[n]))}static transformState(t){return t=this.cloneDeep(t),Object.getOwnPropertyNames(t).reduce((r,n)=>{const s=t[n];return"metas"in s?r[n]=s.metas.map(a=>(a.presence_ref=a.phx_ref,delete a.phx_ref,delete a.phx_ref_prev,a)):r[n]=s,r},{})}static cloneDeep(t){return JSON.parse(JSON.stringify(t))}onJoin(t){this.caller.onJoin=t}onLeave(t){this.caller.onLeave=t}onSync(t){this.caller.onSync=t}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel._joinRef()}}var gu;(function(e){e.ALL="*",e.INSERT="INSERT",e.UPDATE="UPDATE",e.DELETE="DELETE"})(gu||(gu={}));var xu;(function(e){e.BROADCAST="broadcast",e.PRESENCE="presence",e.POSTGRES_CHANGES="postgres_changes",e.SYSTEM="system"})(xu||(xu={}));var Ct;(function(e){e.SUBSCRIBED="SUBSCRIBED",e.TIMED_OUT="TIMED_OUT",e.CLOSED="CLOSED",e.CHANNEL_ERROR="CHANNEL_ERROR"})(Ct||(Ct={}));class Jl{constructor(t,r={config:{}},n){this.topic=t,this.params=r,this.socket=n,this.bindings={},this.state=Re.closed,this.joinedOnce=!1,this.pushBuffer=[],this.subTopic=t.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:""},private:!1},r.config),this.timeout=this.socket.timeout,this.joinPush=new La(this,ft.join,this.params,this.timeout),this.rejoinTimer=new cf(()=>this._rejoinUntilConnected(),this.socket.reconnectAfterMs),this.joinPush.receive("ok",()=>{this.state=Re.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(s=>s.send()),this.pushBuffer=[]}),this._onClose(()=>{this.rejoinTimer.reset(),this.socket.log("channel",`close ${this.topic} ${this._joinRef()}`),this.state=Re.closed,this.socket._remove(this)}),this._onError(s=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,s),this.state=Re.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("timeout",()=>{this._isJoining()&&(this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),this.state=Re.errored,this.rejoinTimer.scheduleTimeout())}),this._on(ft.reply,{},(s,a)=>{this._trigger(this._replyEventName(a),s)}),this.presence=new Xn(this),this.broadcastEndpointURL=df(this.socket.endPoint)+"/api/broadcast",this.private=this.params.config.private||!1}subscribe(t,r=this.timeout){var n,s;if(this.socket.isConnected()||this.socket.connect(),this.state==Re.closed){const{config:{broadcast:a,presence:o,private:l}}=this.params;this._onError(d=>t==null?void 0:t(Ct.CHANNEL_ERROR,d)),this._onClose(()=>t==null?void 0:t(Ct.CLOSED));const c={},u={broadcast:a,presence:o,postgres_changes:(s=(n=this.bindings.postgres_changes)===null||n===void 0?void 0:n.map(d=>d.filter))!==null&&s!==void 0?s:[],private:l};this.socket.accessTokenValue&&(c.access_token=this.socket.accessTokenValue),this.updateJoinPayload(Object.assign({config:u},c)),this.joinedOnce=!0,this._rejoin(r),this.joinPush.receive("ok",async({postgres_changes:d})=>{var h;if(this.socket.setAuth(),d===void 0){t==null||t(Ct.SUBSCRIBED);return}else{const m=this.bindings.postgres_changes,x=(h=m==null?void 0:m.length)!==null&&h!==void 0?h:0,w=[];for(let j=0;j<x;j++){const v=m[j],{filter:{event:g,schema:p,table:y,filter:_}}=v,E=d&&d[j];if(E&&E.event===g&&E.schema===p&&E.table===y&&E.filter===_)w.push(Object.assign(Object.assign({},v),{id:E.id}));else{this.unsubscribe(),this.state=Re.errored,t==null||t(Ct.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=w,t&&t(Ct.SUBSCRIBED);return}}).receive("error",d=>{this.state=Re.errored,t==null||t(Ct.CHANNEL_ERROR,new Error(JSON.stringify(Object.values(d).join(", ")||"error")))}).receive("timeout",()=>{t==null||t(Ct.TIMED_OUT)})}return this}presenceState(){return this.presence.state}async track(t,r={}){return await this.send({type:"presence",event:"track",payload:t},r.timeout||this.timeout)}async untrack(t={}){return await this.send({type:"presence",event:"untrack"},t)}on(t,r,n){return this._on(t,r,n)}async send(t,r={}){var n,s;if(!this._canPush()&&t.type==="broadcast"){const{event:a,payload:o}=t,c={method:"POST",headers:{Authorization:this.socket.accessTokenValue?`Bearer ${this.socket.accessTokenValue}`:"",apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"},body:JSON.stringify({messages:[{topic:this.subTopic,event:a,payload:o,private:this.private}]})};try{const u=await this._fetchWithTimeout(this.broadcastEndpointURL,c,(n=r.timeout)!==null&&n!==void 0?n:this.timeout);return await((s=u.body)===null||s===void 0?void 0:s.cancel()),u.ok?"ok":"error"}catch(u){return u.name==="AbortError"?"timed out":"error"}}else return new Promise(a=>{var o,l,c;const u=this._push(t.type,t,r.timeout||this.timeout);t.type==="broadcast"&&!(!((c=(l=(o=this.params)===null||o===void 0?void 0:o.config)===null||l===void 0?void 0:l.broadcast)===null||c===void 0)&&c.ack)&&a("ok"),u.receive("ok",()=>a("ok")),u.receive("error",()=>a("error")),u.receive("timeout",()=>a("timed out"))})}updateJoinPayload(t){this.joinPush.updatePayload(t)}unsubscribe(t=this.timeout){this.state=Re.leaving;const r=()=>{this.socket.log("channel",`leave ${this.topic}`),this._trigger(ft.close,"leave",this._joinRef())};this.joinPush.destroy();let n=null;return new Promise(s=>{n=new La(this,ft.leave,{},t),n.receive("ok",()=>{r(),s("ok")}).receive("timeout",()=>{r(),s("timed out")}).receive("error",()=>{s("error")}),n.send(),this._canPush()||n.trigger("ok",{})}).finally(()=>{n==null||n.destroy()})}teardown(){this.pushBuffer.forEach(t=>t.destroy()),this.rejoinTimer&&clearTimeout(this.rejoinTimer.timer),this.joinPush.destroy()}async _fetchWithTimeout(t,r,n){const s=new AbortController,a=setTimeout(()=>s.abort(),n),o=await this.socket.fetch(t,Object.assign(Object.assign({},r),{signal:s.signal}));return clearTimeout(a),o}_push(t,r,n=this.timeout){if(!this.joinedOnce)throw`tried to push '${t}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;let s=new La(this,t,r,n);return this._canPush()?s.send():(s.startTimeout(),this.pushBuffer.push(s)),s}_onMessage(t,r,n){return r}_isMember(t){return this.topic===t}_joinRef(){return this.joinPush.ref}_trigger(t,r,n){var s,a;const o=t.toLocaleLowerCase(),{close:l,error:c,leave:u,join:d}=ft;if(n&&[l,c,u,d].indexOf(o)>=0&&n!==this._joinRef())return;let m=this._onMessage(o,r,n);if(r&&!m)throw"channel onMessage callbacks must return the payload, modified or unmodified";["insert","update","delete"].includes(o)?(s=this.bindings.postgres_changes)===null||s===void 0||s.filter(x=>{var w,j,v;return((w=x.filter)===null||w===void 0?void 0:w.event)==="*"||((v=(j=x.filter)===null||j===void 0?void 0:j.event)===null||v===void 0?void 0:v.toLocaleLowerCase())===o}).map(x=>x.callback(m,n)):(a=this.bindings[o])===null||a===void 0||a.filter(x=>{var w,j,v,g,p,y;if(["broadcast","presence","postgres_changes"].includes(o))if("id"in x){const _=x.id,E=(w=x.filter)===null||w===void 0?void 0:w.event;return _&&((j=r.ids)===null||j===void 0?void 0:j.includes(_))&&(E==="*"||(E==null?void 0:E.toLocaleLowerCase())===((v=r.data)===null||v===void 0?void 0:v.type.toLocaleLowerCase()))}else{const _=(p=(g=x==null?void 0:x.filter)===null||g===void 0?void 0:g.event)===null||p===void 0?void 0:p.toLocaleLowerCase();return _==="*"||_===((y=r==null?void 0:r.event)===null||y===void 0?void 0:y.toLocaleLowerCase())}else return x.type.toLocaleLowerCase()===o}).map(x=>{if(typeof m=="object"&&"ids"in m){const w=m.data,{schema:j,table:v,commit_timestamp:g,type:p,errors:y}=w;m=Object.assign(Object.assign({},{schema:j,table:v,commit_timestamp:g,eventType:p,new:{},old:{},errors:y}),this._getPayloadRecords(w))}x.callback(m,n)})}_isClosed(){return this.state===Re.closed}_isJoined(){return this.state===Re.joined}_isJoining(){return this.state===Re.joining}_isLeaving(){return this.state===Re.leaving}_replyEventName(t){return`chan_reply_${t}`}_on(t,r,n){const s=t.toLocaleLowerCase(),a={type:s,filter:r,callback:n};return this.bindings[s]?this.bindings[s].push(a):this.bindings[s]=[a],this}_off(t,r){const n=t.toLocaleLowerCase();return this.bindings[n]=this.bindings[n].filter(s=>{var a;return!(((a=s.type)===null||a===void 0?void 0:a.toLocaleLowerCase())===n&&Jl.isEqual(s.filter,r))}),this}static isEqual(t,r){if(Object.keys(t).length!==Object.keys(r).length)return!1;for(const n in t)if(t[n]!==r[n])return!1;return!0}_rejoinUntilConnected(){this.rejoinTimer.scheduleTimeout(),this.socket.isConnected()&&this._rejoin()}_onClose(t){this._on(ft.close,{},t)}_onError(t){this._on(ft.error,{},r=>t(r))}_canPush(){return this.socket.isConnected()&&this._isJoined()}_rejoin(t=this.timeout){this._isLeaving()||(this.socket._leaveOpenTopic(this.topic),this.state=Re.joining,this.joinPush.resend(t))}_getPayloadRecords(t){const r={new:{},old:{}};return(t.type==="INSERT"||t.type==="UPDATE")&&(r.new=mu(t.columns,t.record)),(t.type==="UPDATE"||t.type==="DELETE")&&(r.old=mu(t.columns,t.old_record)),r}}const yu=()=>{},e0=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class t0{constructor(t,r){var n;this.accessTokenValue=null,this.apiKey=null,this.channels=new Array,this.endPoint="",this.httpEndpoint="",this.headers={},this.params={},this.timeout=lf,this.heartbeatIntervalMs=25e3,this.heartbeatTimer=void 0,this.pendingHeartbeatRef=null,this.heartbeatCallback=yu,this.ref=0,this.logger=yu,this.conn=null,this.sendBuffer=[],this.serializer=new qg,this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.accessToken=null,this._resolveFetch=a=>{let o;return a?o=a:typeof fetch>"u"?o=(...l)=>bs(async()=>{const{default:c}=await Promise.resolve().then(()=>wn);return{default:c}},void 0).then(({default:c})=>c(...l)):o=fetch,(...l)=>o(...l)},this.endPoint=`${t}/${Do.websocket}`,this.httpEndpoint=df(t),r!=null&&r.transport?this.transport=r.transport:this.transport=null,r!=null&&r.params&&(this.params=r.params),r!=null&&r.timeout&&(this.timeout=r.timeout),r!=null&&r.logger&&(this.logger=r.logger),(r!=null&&r.logLevel||r!=null&&r.log_level)&&(this.logLevel=r.logLevel||r.log_level,this.params=Object.assign(Object.assign({},this.params),{log_level:this.logLevel})),r!=null&&r.heartbeatIntervalMs&&(this.heartbeatIntervalMs=r.heartbeatIntervalMs);const s=(n=r==null?void 0:r.params)===null||n===void 0?void 0:n.apikey;if(s&&(this.accessTokenValue=s,this.apiKey=s),this.reconnectAfterMs=r!=null&&r.reconnectAfterMs?r.reconnectAfterMs:a=>[1e3,2e3,5e3,1e4][a-1]||1e4,this.encode=r!=null&&r.encode?r.encode:(a,o)=>o(JSON.stringify(a)),this.decode=r!=null&&r.decode?r.decode:this.serializer.decode.bind(this.serializer),this.reconnectTimer=new cf(async()=>{this.disconnect(),this.connect()},this.reconnectAfterMs),this.fetch=this._resolveFetch(r==null?void 0:r.fetch),r!=null&&r.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.worker=(r==null?void 0:r.worker)||!1,this.workerUrl=r==null?void 0:r.workerUrl}this.accessToken=(r==null?void 0:r.accessToken)||null}connect(){if(!this.conn){if(this.transport||(this.transport=Bg),!this.transport)throw new Error("No transport provided");this.conn=new this.transport(this.endpointURL()),this.setupConnection()}}endpointURL(){return this._appendParams(this.endPoint,Object.assign({},this.params,{vsn:Hg}))}disconnect(t,r){this.conn&&(this.conn.onclose=function(){},t?this.conn.close(t,r??""):this.conn.close(),this.conn=null,this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.reconnectTimer.reset(),this.channels.forEach(n=>n.teardown()))}getChannels(){return this.channels}async removeChannel(t){const r=await t.unsubscribe();return this.channels.length===0&&this.disconnect(),r}async removeAllChannels(){const t=await Promise.all(this.channels.map(r=>r.unsubscribe()));return this.channels=[],this.disconnect(),t}log(t,r,n){this.logger(t,r,n)}connectionState(){switch(this.conn&&this.conn.readyState){case Qn.connecting:return xr.Connecting;case Qn.open:return xr.Open;case Qn.closing:return xr.Closing;default:return xr.Closed}}isConnected(){return this.connectionState()===xr.Open}channel(t,r={config:{}}){const n=`realtime:${t}`,s=this.getChannels().find(a=>a.topic===n);if(s)return s;{const a=new Jl(`realtime:${t}`,r,this);return this.channels.push(a),a}}push(t){const{topic:r,event:n,payload:s,ref:a}=t,o=()=>{this.encode(t,l=>{var c;(c=this.conn)===null||c===void 0||c.send(l)})};this.log("push",`${r} ${n} (${a})`,s),this.isConnected()?o():this.sendBuffer.push(o)}async setAuth(t=null){let r=t||this.accessToken&&await this.accessToken()||this.accessTokenValue;this.accessTokenValue!=r&&(this.accessTokenValue=r,this.channels.forEach(n=>{const s={access_token:r,version:Vg};r&&n.updateJoinPayload(s),n.joinedOnce&&n._isJoined()&&n._push(ft.access_token,{access_token:r})}))}async sendHeartbeat(){var t;if(!this.isConnected()){this.heartbeatCallback("disconnected");return}if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.log("transport","heartbeat timeout. Attempting to re-establish connection"),this.heartbeatCallback("timeout"),(t=this.conn)===null||t===void 0||t.close(Gg,"hearbeat timeout");return}this.pendingHeartbeatRef=this._makeRef(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef}),this.heartbeatCallback("sent"),await this.setAuth()}onHeartbeat(t){this.heartbeatCallback=t}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(t=>t()),this.sendBuffer=[])}_makeRef(){let t=this.ref+1;return t===this.ref?this.ref=0:this.ref=t,this.ref.toString()}_leaveOpenTopic(t){let r=this.channels.find(n=>n.topic===t&&(n._isJoined()||n._isJoining()));r&&(this.log("transport",`leaving duplicate topic "${t}"`),r.unsubscribe())}_remove(t){this.channels=this.channels.filter(r=>r.topic!==t.topic)}setupConnection(){this.conn&&(this.conn.binaryType="arraybuffer",this.conn.onopen=()=>this._onConnOpen(),this.conn.onerror=t=>this._onConnError(t),this.conn.onmessage=t=>this._onConnMessage(t),this.conn.onclose=t=>this._onConnClose(t))}_onConnMessage(t){this.decode(t.data,r=>{let{topic:n,event:s,payload:a,ref:o}=r;n==="phoenix"&&s==="phx_reply"&&this.heartbeatCallback(r.payload.status=="ok"?"ok":"error"),o&&o===this.pendingHeartbeatRef&&(this.pendingHeartbeatRef=null),this.log("receive",`${a.status||""} ${n} ${s} ${o&&"("+o+")"||""}`,a),Array.from(this.channels).filter(l=>l._isMember(n)).forEach(l=>l._trigger(s,a,o)),this.stateChangeCallbacks.message.forEach(l=>l(r))})}_onConnOpen(){this.log("transport",`connected to ${this.endpointURL()}`),this.flushSendBuffer(),this.reconnectTimer.reset(),this.worker?this.workerRef||this._startWorkerHeartbeat():this._startHeartbeat(),this.stateChangeCallbacks.open.forEach(t=>t())}_startHeartbeat(){this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(()=>this.sendHeartbeat(),this.heartbeatIntervalMs)}_startWorkerHeartbeat(){this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const t=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(t),this.workerRef.onerror=r=>{this.log("worker","worker error",r.message),this.workerRef.terminate()},this.workerRef.onmessage=r=>{r.data.event==="keepAlive"&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}_onConnClose(t){this.log("transport","close",t),this._triggerChanError(),this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.reconnectTimer.scheduleTimeout(),this.stateChangeCallbacks.close.forEach(r=>r(t))}_onConnError(t){this.log("transport",`${t}`),this._triggerChanError(),this.stateChangeCallbacks.error.forEach(r=>r(t))}_triggerChanError(){this.channels.forEach(t=>t._trigger(ft.error))}_appendParams(t,r){if(Object.keys(r).length===0)return t;const n=t.match(/\?/)?"&":"?",s=new URLSearchParams(r);return`${t}${n}${s}`}_workerObjectUrl(t){let r;if(t)r=t;else{const n=new Blob([e0],{type:"application/javascript"});r=URL.createObjectURL(n)}return r}}class Ql extends Error{constructor(t){super(t),this.__isStorageError=!0,this.name="StorageError"}}function ve(e){return typeof e=="object"&&e!==null&&"__isStorageError"in e}class r0 extends Ql{constructor(t,r,n){super(t),this.name="StorageApiError",this.status=r,this.statusCode=n}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}}class Bo extends Ql{constructor(t,r){super(t),this.name="StorageUnknownError",this.originalError=r}}var n0=function(e,t,r,n){function s(a){return a instanceof r?a:new r(function(o){o(a)})}return new(r||(r=Promise))(function(a,o){function l(d){try{u(n.next(d))}catch(h){o(h)}}function c(d){try{u(n.throw(d))}catch(h){o(h)}}function u(d){d.done?a(d.value):s(d.value).then(l,c)}u((n=n.apply(e,t||[])).next())})};const hf=e=>{let t;return e?t=e:typeof fetch>"u"?t=(...r)=>bs(async()=>{const{default:n}=await Promise.resolve().then(()=>wn);return{default:n}},void 0).then(({default:n})=>n(...r)):t=fetch,(...r)=>t(...r)},s0=()=>n0(void 0,void 0,void 0,function*(){return typeof Response>"u"?(yield bs(()=>Promise.resolve().then(()=>wn),void 0)).Response:Response}),Wo=e=>{if(Array.isArray(e))return e.map(r=>Wo(r));if(typeof e=="function"||e!==Object(e))return e;const t={};return Object.entries(e).forEach(([r,n])=>{const s=r.replace(/([-_][a-z])/gi,a=>a.toUpperCase().replace(/[-_]/g,""));t[s]=Wo(n)}),t},i0=e=>{if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)};var Ar=function(e,t,r,n){function s(a){return a instanceof r?a:new r(function(o){o(a)})}return new(r||(r=Promise))(function(a,o){function l(d){try{u(n.next(d))}catch(h){o(h)}}function c(d){try{u(n.throw(d))}catch(h){o(h)}}function u(d){d.done?a(d.value):s(d.value).then(l,c)}u((n=n.apply(e,t||[])).next())})};const Ma=e=>e.msg||e.message||e.error_description||e.error||JSON.stringify(e),a0=(e,t,r)=>Ar(void 0,void 0,void 0,function*(){const n=yield s0();e instanceof n&&!(r!=null&&r.noResolveJson)?e.json().then(s=>{const a=e.status||500,o=(s==null?void 0:s.statusCode)||a+"";t(new r0(Ma(s),a,o))}).catch(s=>{t(new Bo(Ma(s),s))}):t(new Bo(Ma(e),e))}),o0=(e,t,r,n)=>{const s={method:e,headers:(t==null?void 0:t.headers)||{}};return e==="GET"||!n?s:(i0(n)?(s.headers=Object.assign({"Content-Type":"application/json"},t==null?void 0:t.headers),s.body=JSON.stringify(n)):s.body=n,Object.assign(Object.assign({},s),r))};function _s(e,t,r,n,s,a){return Ar(this,void 0,void 0,function*(){return new Promise((o,l)=>{e(r,o0(t,n,s,a)).then(c=>{if(!c.ok)throw c;return n!=null&&n.noResolveJson?c:c.json()}).then(c=>o(c)).catch(c=>a0(c,l,n))})})}function Ai(e,t,r,n){return Ar(this,void 0,void 0,function*(){return _s(e,"GET",t,r,n)})}function Et(e,t,r,n,s){return Ar(this,void 0,void 0,function*(){return _s(e,"POST",t,n,s,r)})}function Vo(e,t,r,n,s){return Ar(this,void 0,void 0,function*(){return _s(e,"PUT",t,n,s,r)})}function l0(e,t,r,n){return Ar(this,void 0,void 0,function*(){return _s(e,"HEAD",t,Object.assign(Object.assign({},r),{noResolveJson:!0}),n)})}function ff(e,t,r,n,s){return Ar(this,void 0,void 0,function*(){return _s(e,"DELETE",t,n,s,r)})}var Fe=function(e,t,r,n){function s(a){return a instanceof r?a:new r(function(o){o(a)})}return new(r||(r=Promise))(function(a,o){function l(d){try{u(n.next(d))}catch(h){o(h)}}function c(d){try{u(n.throw(d))}catch(h){o(h)}}function u(d){d.done?a(d.value):s(d.value).then(l,c)}u((n=n.apply(e,t||[])).next())})};const c0={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},vu={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};class u0{constructor(t,r={},n,s){this.url=t,this.headers=r,this.bucketId=n,this.fetch=hf(s)}uploadOrUpdate(t,r,n,s){return Fe(this,void 0,void 0,function*(){try{let a;const o=Object.assign(Object.assign({},vu),s);let l=Object.assign(Object.assign({},this.headers),t==="POST"&&{"x-upsert":String(o.upsert)});const c=o.metadata;typeof Blob<"u"&&n instanceof Blob?(a=new FormData,a.append("cacheControl",o.cacheControl),c&&a.append("metadata",this.encodeMetadata(c)),a.append("",n)):typeof FormData<"u"&&n instanceof FormData?(a=n,a.append("cacheControl",o.cacheControl),c&&a.append("metadata",this.encodeMetadata(c))):(a=n,l["cache-control"]=`max-age=${o.cacheControl}`,l["content-type"]=o.contentType,c&&(l["x-metadata"]=this.toBase64(this.encodeMetadata(c)))),s!=null&&s.headers&&(l=Object.assign(Object.assign({},l),s.headers));const u=this._removeEmptyFolders(r),d=this._getFinalPath(u),h=yield(t=="PUT"?Vo:Et)(this.fetch,`${this.url}/object/${d}`,a,Object.assign({headers:l},o!=null&&o.duplex?{duplex:o.duplex}:{}));return{data:{path:u,id:h.Id,fullPath:h.Key},error:null}}catch(a){if(ve(a))return{data:null,error:a};throw a}})}upload(t,r,n){return Fe(this,void 0,void 0,function*(){return this.uploadOrUpdate("POST",t,r,n)})}uploadToSignedUrl(t,r,n,s){return Fe(this,void 0,void 0,function*(){const a=this._removeEmptyFolders(t),o=this._getFinalPath(a),l=new URL(this.url+`/object/upload/sign/${o}`);l.searchParams.set("token",r);try{let c;const u=Object.assign({upsert:vu.upsert},s),d=Object.assign(Object.assign({},this.headers),{"x-upsert":String(u.upsert)});typeof Blob<"u"&&n instanceof Blob?(c=new FormData,c.append("cacheControl",u.cacheControl),c.append("",n)):typeof FormData<"u"&&n instanceof FormData?(c=n,c.append("cacheControl",u.cacheControl)):(c=n,d["cache-control"]=`max-age=${u.cacheControl}`,d["content-type"]=u.contentType);const h=yield Vo(this.fetch,l.toString(),c,{headers:d});return{data:{path:a,fullPath:h.Key},error:null}}catch(c){if(ve(c))return{data:null,error:c};throw c}})}createSignedUploadUrl(t,r){return Fe(this,void 0,void 0,function*(){try{let n=this._getFinalPath(t);const s=Object.assign({},this.headers);r!=null&&r.upsert&&(s["x-upsert"]="true");const a=yield Et(this.fetch,`${this.url}/object/upload/sign/${n}`,{},{headers:s}),o=new URL(this.url+a.url),l=o.searchParams.get("token");if(!l)throw new Ql("No token returned by API");return{data:{signedUrl:o.toString(),path:t,token:l},error:null}}catch(n){if(ve(n))return{data:null,error:n};throw n}})}update(t,r,n){return Fe(this,void 0,void 0,function*(){return this.uploadOrUpdate("PUT",t,r,n)})}move(t,r,n){return Fe(this,void 0,void 0,function*(){try{return{data:yield Et(this.fetch,`${this.url}/object/move`,{bucketId:this.bucketId,sourceKey:t,destinationKey:r,destinationBucket:n==null?void 0:n.destinationBucket},{headers:this.headers}),error:null}}catch(s){if(ve(s))return{data:null,error:s};throw s}})}copy(t,r,n){return Fe(this,void 0,void 0,function*(){try{return{data:{path:(yield Et(this.fetch,`${this.url}/object/copy`,{bucketId:this.bucketId,sourceKey:t,destinationKey:r,destinationBucket:n==null?void 0:n.destinationBucket},{headers:this.headers})).Key},error:null}}catch(s){if(ve(s))return{data:null,error:s};throw s}})}createSignedUrl(t,r,n){return Fe(this,void 0,void 0,function*(){try{let s=this._getFinalPath(t),a=yield Et(this.fetch,`${this.url}/object/sign/${s}`,Object.assign({expiresIn:r},n!=null&&n.transform?{transform:n.transform}:{}),{headers:this.headers});const o=n!=null&&n.download?`&download=${n.download===!0?"":n.download}`:"";return a={signedUrl:encodeURI(`${this.url}${a.signedURL}${o}`)},{data:a,error:null}}catch(s){if(ve(s))return{data:null,error:s};throw s}})}createSignedUrls(t,r,n){return Fe(this,void 0,void 0,function*(){try{const s=yield Et(this.fetch,`${this.url}/object/sign/${this.bucketId}`,{expiresIn:r,paths:t},{headers:this.headers}),a=n!=null&&n.download?`&download=${n.download===!0?"":n.download}`:"";return{data:s.map(o=>Object.assign(Object.assign({},o),{signedUrl:o.signedURL?encodeURI(`${this.url}${o.signedURL}${a}`):null})),error:null}}catch(s){if(ve(s))return{data:null,error:s};throw s}})}download(t,r){return Fe(this,void 0,void 0,function*(){const s=typeof(r==null?void 0:r.transform)<"u"?"render/image/authenticated":"object",a=this.transformOptsToQueryString((r==null?void 0:r.transform)||{}),o=a?`?${a}`:"";try{const l=this._getFinalPath(t);return{data:yield(yield Ai(this.fetch,`${this.url}/${s}/${l}${o}`,{headers:this.headers,noResolveJson:!0})).blob(),error:null}}catch(l){if(ve(l))return{data:null,error:l};throw l}})}info(t){return Fe(this,void 0,void 0,function*(){const r=this._getFinalPath(t);try{const n=yield Ai(this.fetch,`${this.url}/object/info/${r}`,{headers:this.headers});return{data:Wo(n),error:null}}catch(n){if(ve(n))return{data:null,error:n};throw n}})}exists(t){return Fe(this,void 0,void 0,function*(){const r=this._getFinalPath(t);try{return yield l0(this.fetch,`${this.url}/object/${r}`,{headers:this.headers}),{data:!0,error:null}}catch(n){if(ve(n)&&n instanceof Bo){const s=n.originalError;if([400,404].includes(s==null?void 0:s.status))return{data:!1,error:n}}throw n}})}getPublicUrl(t,r){const n=this._getFinalPath(t),s=[],a=r!=null&&r.download?`download=${r.download===!0?"":r.download}`:"";a!==""&&s.push(a);const l=typeof(r==null?void 0:r.transform)<"u"?"render/image":"object",c=this.transformOptsToQueryString((r==null?void 0:r.transform)||{});c!==""&&s.push(c);let u=s.join("&");return u!==""&&(u=`?${u}`),{data:{publicUrl:encodeURI(`${this.url}/${l}/public/${n}${u}`)}}}remove(t){return Fe(this,void 0,void 0,function*(){try{return{data:yield ff(this.fetch,`${this.url}/object/${this.bucketId}`,{prefixes:t},{headers:this.headers}),error:null}}catch(r){if(ve(r))return{data:null,error:r};throw r}})}list(t,r,n){return Fe(this,void 0,void 0,function*(){try{const s=Object.assign(Object.assign(Object.assign({},c0),r),{prefix:t||""});return{data:yield Et(this.fetch,`${this.url}/object/list/${this.bucketId}`,s,{headers:this.headers},n),error:null}}catch(s){if(ve(s))return{data:null,error:s};throw s}})}encodeMetadata(t){return JSON.stringify(t)}toBase64(t){return typeof Buffer<"u"?Buffer.from(t).toString("base64"):btoa(t)}_getFinalPath(t){return`${this.bucketId}/${t.replace(/^\/+/,"")}`}_removeEmptyFolders(t){return t.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}transformOptsToQueryString(t){const r=[];return t.width&&r.push(`width=${t.width}`),t.height&&r.push(`height=${t.height}`),t.resize&&r.push(`resize=${t.resize}`),t.format&&r.push(`format=${t.format}`),t.quality&&r.push(`quality=${t.quality}`),r.join("&")}}const d0="2.10.4",h0={"X-Client-Info":`storage-js/${d0}`};var Mr=function(e,t,r,n){function s(a){return a instanceof r?a:new r(function(o){o(a)})}return new(r||(r=Promise))(function(a,o){function l(d){try{u(n.next(d))}catch(h){o(h)}}function c(d){try{u(n.throw(d))}catch(h){o(h)}}function u(d){d.done?a(d.value):s(d.value).then(l,c)}u((n=n.apply(e,t||[])).next())})};class f0{constructor(t,r={},n,s){const a=new URL(t);s!=null&&s.useNewHostname&&/supabase\.(co|in|red)$/.test(a.hostname)&&!a.hostname.includes("storage.supabase.")&&(a.hostname=a.hostname.replace("supabase.","storage.supabase.")),this.url=a.href,this.headers=Object.assign(Object.assign({},h0),r),this.fetch=hf(n)}listBuckets(){return Mr(this,void 0,void 0,function*(){try{return{data:yield Ai(this.fetch,`${this.url}/bucket`,{headers:this.headers}),error:null}}catch(t){if(ve(t))return{data:null,error:t};throw t}})}getBucket(t){return Mr(this,void 0,void 0,function*(){try{return{data:yield Ai(this.fetch,`${this.url}/bucket/${t}`,{headers:this.headers}),error:null}}catch(r){if(ve(r))return{data:null,error:r};throw r}})}createBucket(t,r={public:!1}){return Mr(this,void 0,void 0,function*(){try{return{data:yield Et(this.fetch,`${this.url}/bucket`,{id:t,name:t,type:r.type,public:r.public,file_size_limit:r.fileSizeLimit,allowed_mime_types:r.allowedMimeTypes},{headers:this.headers}),error:null}}catch(n){if(ve(n))return{data:null,error:n};throw n}})}updateBucket(t,r){return Mr(this,void 0,void 0,function*(){try{return{data:yield Vo(this.fetch,`${this.url}/bucket/${t}`,{id:t,name:t,public:r.public,file_size_limit:r.fileSizeLimit,allowed_mime_types:r.allowedMimeTypes},{headers:this.headers}),error:null}}catch(n){if(ve(n))return{data:null,error:n};throw n}})}emptyBucket(t){return Mr(this,void 0,void 0,function*(){try{return{data:yield Et(this.fetch,`${this.url}/bucket/${t}/empty`,{},{headers:this.headers}),error:null}}catch(r){if(ve(r))return{data:null,error:r};throw r}})}deleteBucket(t){return Mr(this,void 0,void 0,function*(){try{return{data:yield ff(this.fetch,`${this.url}/bucket/${t}`,{},{headers:this.headers}),error:null}}catch(r){if(ve(r))return{data:null,error:r};throw r}})}}class m0 extends f0{constructor(t,r={},n,s){super(t,r,n,s)}from(t){return new u0(this.url,this.headers,t,this.fetch)}}const p0="2.53.0";let Dn="";typeof Deno<"u"?Dn="deno":typeof document<"u"?Dn="web":typeof navigator<"u"&&navigator.product==="ReactNative"?Dn="react-native":Dn="node";const g0={"X-Client-Info":`supabase-js-${Dn}/${p0}`},x0={headers:g0},y0={schema:"public"},v0={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},w0={};var j0=function(e,t,r,n){function s(a){return a instanceof r?a:new r(function(o){o(a)})}return new(r||(r=Promise))(function(a,o){function l(d){try{u(n.next(d))}catch(h){o(h)}}function c(d){try{u(n.throw(d))}catch(h){o(h)}}function u(d){d.done?a(d.value):s(d.value).then(l,c)}u((n=n.apply(e,t||[])).next())})};const b0=e=>{let t;return e?t=e:typeof fetch>"u"?t=Qh:t=fetch,(...r)=>t(...r)},k0=()=>typeof Headers>"u"?Xh:Headers,_0=(e,t,r)=>{const n=b0(r),s=k0();return(a,o)=>j0(void 0,void 0,void 0,function*(){var l;const c=(l=yield t())!==null&&l!==void 0?l:e;let u=new s(o==null?void 0:o.headers);return u.has("apikey")||u.set("apikey",e),u.has("Authorization")||u.set("Authorization",`Bearer ${c}`),n(a,Object.assign(Object.assign({},o),{headers:u}))})};var N0=function(e,t,r,n){function s(a){return a instanceof r?a:new r(function(o){o(a)})}return new(r||(r=Promise))(function(a,o){function l(d){try{u(n.next(d))}catch(h){o(h)}}function c(d){try{u(n.throw(d))}catch(h){o(h)}}function u(d){d.done?a(d.value):s(d.value).then(l,c)}u((n=n.apply(e,t||[])).next())})};function S0(e){return e.endsWith("/")?e:e+"/"}function C0(e,t){var r,n;const{db:s,auth:a,realtime:o,global:l}=e,{db:c,auth:u,realtime:d,global:h}=t,m={db:Object.assign(Object.assign({},c),s),auth:Object.assign(Object.assign({},u),a),realtime:Object.assign(Object.assign({},d),o),storage:{},global:Object.assign(Object.assign(Object.assign({},h),l),{headers:Object.assign(Object.assign({},(r=h==null?void 0:h.headers)!==null&&r!==void 0?r:{}),(n=l==null?void 0:l.headers)!==null&&n!==void 0?n:{})}),accessToken:()=>N0(this,void 0,void 0,function*(){return""})};return e.accessToken?m.accessToken=e.accessToken:delete m.accessToken,m}const mf="2.71.1",Br=30*1e3,Ho=3,$a=Ho*Br,E0="http://localhost:9999",P0="supabase.auth.token",T0={"X-Client-Info":`gotrue-js/${mf}`},Go="X-Supabase-Api-Version",pf={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}},O0=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,I0=10*60*1e3;class Xl extends Error{constructor(t,r,n){super(t),this.__isAuthError=!0,this.name="AuthError",this.status=r,this.code=n}}function F(e){return typeof e=="object"&&e!==null&&"__isAuthError"in e}class A0 extends Xl{constructor(t,r,n){super(t,r,n),this.name="AuthApiError",this.status=r,this.code=n}}function R0(e){return F(e)&&e.name==="AuthApiError"}class gf extends Xl{constructor(t,r){super(t),this.name="AuthUnknownError",this.originalError=r}}class cr extends Xl{constructor(t,r,n,s){super(t,n,s),this.name=r,this.status=n}}class Bt extends cr{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function L0(e){return F(e)&&e.name==="AuthSessionMissingError"}class Vs extends cr{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class Hs extends cr{constructor(t){super(t,"AuthInvalidCredentialsError",400,void 0)}}class Gs extends cr{constructor(t,r=null){super(t,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=r}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}function M0(e){return F(e)&&e.name==="AuthImplicitGrantRedirectError"}class wu extends cr{constructor(t,r=null){super(t,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=r}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}class qo extends cr{constructor(t,r){super(t,"AuthRetryableFetchError",r,void 0)}}function za(e){return F(e)&&e.name==="AuthRetryableFetchError"}class ju extends cr{constructor(t,r,n){super(t,"AuthWeakPasswordError",r,"weak_password"),this.reasons=n}}class Ko extends cr{constructor(t){super(t,"AuthInvalidJwtError",400,"invalid_jwt")}}const Ri="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),bu=` 	
\r=`.split(""),$0=(()=>{const e=new Array(128);for(let t=0;t<e.length;t+=1)e[t]=-1;for(let t=0;t<bu.length;t+=1)e[bu[t].charCodeAt(0)]=-2;for(let t=0;t<Ri.length;t+=1)e[Ri[t].charCodeAt(0)]=t;return e})();function ku(e,t,r){if(e!==null)for(t.queue=t.queue<<8|e,t.queuedBits+=8;t.queuedBits>=6;){const n=t.queue>>t.queuedBits-6&63;r(Ri[n]),t.queuedBits-=6}else if(t.queuedBits>0)for(t.queue=t.queue<<6-t.queuedBits,t.queuedBits=6;t.queuedBits>=6;){const n=t.queue>>t.queuedBits-6&63;r(Ri[n]),t.queuedBits-=6}}function xf(e,t,r){const n=$0[e];if(n>-1)for(t.queue=t.queue<<6|n,t.queuedBits+=6;t.queuedBits>=8;)r(t.queue>>t.queuedBits-8&255),t.queuedBits-=8;else{if(n===-2)return;throw new Error(`Invalid Base64-URL character "${String.fromCharCode(e)}"`)}}function _u(e){const t=[],r=o=>{t.push(String.fromCodePoint(o))},n={utf8seq:0,codepoint:0},s={queue:0,queuedBits:0},a=o=>{D0(o,n,r)};for(let o=0;o<e.length;o+=1)xf(e.charCodeAt(o),s,a);return t.join("")}function z0(e,t){if(e<=127){t(e);return}else if(e<=2047){t(192|e>>6),t(128|e&63);return}else if(e<=65535){t(224|e>>12),t(128|e>>6&63),t(128|e&63);return}else if(e<=1114111){t(240|e>>18),t(128|e>>12&63),t(128|e>>6&63),t(128|e&63);return}throw new Error(`Unrecognized Unicode codepoint: ${e.toString(16)}`)}function U0(e,t){for(let r=0;r<e.length;r+=1){let n=e.charCodeAt(r);if(n>55295&&n<=56319){const s=(n-55296)*1024&65535;n=(e.charCodeAt(r+1)-56320&65535|s)+65536,r+=1}z0(n,t)}}function D0(e,t,r){if(t.utf8seq===0){if(e<=127){r(e);return}for(let n=1;n<6;n+=1)if(!(e>>7-n&1)){t.utf8seq=n;break}if(t.utf8seq===2)t.codepoint=e&31;else if(t.utf8seq===3)t.codepoint=e&15;else if(t.utf8seq===4)t.codepoint=e&7;else throw new Error("Invalid UTF-8 sequence");t.utf8seq-=1}else if(t.utf8seq>0){if(e<=127)throw new Error("Invalid UTF-8 sequence");t.codepoint=t.codepoint<<6|e&63,t.utf8seq-=1,t.utf8seq===0&&r(t.codepoint)}}function F0(e){const t=[],r={queue:0,queuedBits:0},n=s=>{t.push(s)};for(let s=0;s<e.length;s+=1)xf(e.charCodeAt(s),r,n);return new Uint8Array(t)}function B0(e){const t=[];return U0(e,r=>t.push(r)),new Uint8Array(t)}function W0(e){const t=[],r={queue:0,queuedBits:0},n=s=>{t.push(s)};return e.forEach(s=>ku(s,r,n)),ku(null,r,n),t.join("")}function V0(e){return Math.round(Date.now()/1e3)+e}function H0(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){const t=Math.random()*16|0;return(e=="x"?t:t&3|8).toString(16)})}const ut=()=>typeof window<"u"&&typeof document<"u",dr={tested:!1,writable:!1},yf=()=>{if(!ut())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(dr.tested)return dr.writable;const e=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(e,e),globalThis.localStorage.removeItem(e),dr.tested=!0,dr.writable=!0}catch{dr.tested=!0,dr.writable=!1}return dr.writable};function G0(e){const t={},r=new URL(e);if(r.hash&&r.hash[0]==="#")try{new URLSearchParams(r.hash.substring(1)).forEach((s,a)=>{t[a]=s})}catch{}return r.searchParams.forEach((n,s)=>{t[s]=n}),t}const vf=e=>{let t;return e?t=e:typeof fetch>"u"?t=(...r)=>bs(async()=>{const{default:n}=await Promise.resolve().then(()=>wn);return{default:n}},void 0).then(({default:n})=>n(...r)):t=fetch,(...r)=>t(...r)},q0=e=>typeof e=="object"&&e!==null&&"status"in e&&"ok"in e&&"json"in e&&typeof e.json=="function",Wr=async(e,t,r)=>{await e.setItem(t,JSON.stringify(r))},hr=async(e,t)=>{const r=await e.getItem(t);if(!r)return null;try{return JSON.parse(r)}catch{return r}},Dt=async(e,t)=>{await e.removeItem(t)};class aa{constructor(){this.promise=new aa.promiseConstructor((t,r)=>{this.resolve=t,this.reject=r})}}aa.promiseConstructor=Promise;function Ua(e){const t=e.split(".");if(t.length!==3)throw new Ko("Invalid JWT structure");for(let n=0;n<t.length;n++)if(!O0.test(t[n]))throw new Ko("JWT not in base64url format");return{header:JSON.parse(_u(t[0])),payload:JSON.parse(_u(t[1])),signature:F0(t[2]),raw:{header:t[0],payload:t[1]}}}async function K0(e){return await new Promise(t=>{setTimeout(()=>t(null),e)})}function J0(e,t){return new Promise((n,s)=>{(async()=>{for(let a=0;a<1/0;a++)try{const o=await e(a);if(!t(a,null,o)){n(o);return}}catch(o){if(!t(a,o)){s(o);return}}})()})}function Q0(e){return("0"+e.toString(16)).substr(-2)}function X0(){const t=new Uint32Array(56);if(typeof crypto>"u"){const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",n=r.length;let s="";for(let a=0;a<56;a++)s+=r.charAt(Math.floor(Math.random()*n));return s}return crypto.getRandomValues(t),Array.from(t,Q0).join("")}async function Y0(e){const r=new TextEncoder().encode(e),n=await crypto.subtle.digest("SHA-256",r),s=new Uint8Array(n);return Array.from(s).map(a=>String.fromCharCode(a)).join("")}async function Z0(e){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),e;const r=await Y0(e);return btoa(r).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function $r(e,t,r=!1){const n=X0();let s=n;r&&(s+="/PASSWORD_RECOVERY"),await Wr(e,`${t}-code-verifier`,s);const a=await Z0(n);return[a,n===a?"plain":"s256"]}const ex=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function tx(e){const t=e.headers.get(Go);if(!t||!t.match(ex))return null;try{return new Date(`${t}T00:00:00.0Z`)}catch{return null}}function rx(e){if(!e)throw new Error("Missing exp claim");const t=Math.floor(Date.now()/1e3);if(e<=t)throw new Error("JWT has expired")}function nx(e){switch(e){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}};case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}};default:throw new Error("Invalid alg claim")}}const sx=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function zr(e){if(!sx.test(e))throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")}function Da(){const e={};return new Proxy(e,{get:(t,r)=>{if(r==="__isUserNotAvailableProxy")return!0;if(typeof r=="symbol"){const n=r.toString();if(n==="Symbol(Symbol.toPrimitive)"||n==="Symbol(Symbol.toStringTag)"||n==="Symbol(util.inspect.custom)")return}throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${r}" property of the session object is not supported. Please use getUser() instead.`)},set:(t,r)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(t,r)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function Nu(e){return JSON.parse(JSON.stringify(e))}var ix=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const gr=e=>e.msg||e.message||e.error_description||e.error||JSON.stringify(e),ax=[502,503,504];async function Su(e){var t;if(!q0(e))throw new qo(gr(e),0);if(ax.includes(e.status))throw new qo(gr(e),e.status);let r;try{r=await e.json()}catch(a){throw new gf(gr(a),a)}let n;const s=tx(e);if(s&&s.getTime()>=pf["2024-01-01"].timestamp&&typeof r=="object"&&r&&typeof r.code=="string"?n=r.code:typeof r=="object"&&r&&typeof r.error_code=="string"&&(n=r.error_code),n){if(n==="weak_password")throw new ju(gr(r),e.status,((t=r.weak_password)===null||t===void 0?void 0:t.reasons)||[]);if(n==="session_not_found")throw new Bt}else if(typeof r=="object"&&r&&typeof r.weak_password=="object"&&r.weak_password&&Array.isArray(r.weak_password.reasons)&&r.weak_password.reasons.length&&r.weak_password.reasons.reduce((a,o)=>a&&typeof o=="string",!0))throw new ju(gr(r),e.status,r.weak_password.reasons);throw new A0(gr(r),e.status||500,n)}const ox=(e,t,r,n)=>{const s={method:e,headers:(t==null?void 0:t.headers)||{}};return e==="GET"?s:(s.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},t==null?void 0:t.headers),s.body=JSON.stringify(n),Object.assign(Object.assign({},s),r))};async function H(e,t,r,n){var s;const a=Object.assign({},n==null?void 0:n.headers);a[Go]||(a[Go]=pf["2024-01-01"].name),n!=null&&n.jwt&&(a.Authorization=`Bearer ${n.jwt}`);const o=(s=n==null?void 0:n.query)!==null&&s!==void 0?s:{};n!=null&&n.redirectTo&&(o.redirect_to=n.redirectTo);const l=Object.keys(o).length?"?"+new URLSearchParams(o).toString():"",c=await lx(e,t,r+l,{headers:a,noResolveJson:n==null?void 0:n.noResolveJson},{},n==null?void 0:n.body);return n!=null&&n.xform?n==null?void 0:n.xform(c):{data:Object.assign({},c),error:null}}async function lx(e,t,r,n,s,a){const o=ox(t,n,s,a);let l;try{l=await e(r,Object.assign({},o))}catch(c){throw console.error(c),new qo(gr(c),0)}if(l.ok||await Su(l),n!=null&&n.noResolveJson)return l;try{return await l.json()}catch(c){await Su(c)}}function Nt(e){var t;let r=null;hx(e)&&(r=Object.assign({},e),e.expires_at||(r.expires_at=V0(e.expires_in)));const n=(t=e.user)!==null&&t!==void 0?t:e;return{data:{session:r,user:n},error:null}}function Cu(e){const t=Nt(e);return!t.error&&e.weak_password&&typeof e.weak_password=="object"&&Array.isArray(e.weak_password.reasons)&&e.weak_password.reasons.length&&e.weak_password.message&&typeof e.weak_password.message=="string"&&e.weak_password.reasons.reduce((r,n)=>r&&typeof n=="string",!0)&&(t.data.weak_password=e.weak_password),t}function qt(e){var t;return{data:{user:(t=e.user)!==null&&t!==void 0?t:e},error:null}}function cx(e){return{data:e,error:null}}function ux(e){const{action_link:t,email_otp:r,hashed_token:n,redirect_to:s,verification_type:a}=e,o=ix(e,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),l={action_link:t,email_otp:r,hashed_token:n,redirect_to:s,verification_type:a},c=Object.assign({},o);return{data:{properties:l,user:c},error:null}}function dx(e){return e}function hx(e){return e.access_token&&e.refresh_token&&e.expires_in}const Fa=["global","local","others"];var fx=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};class mx{constructor({url:t="",headers:r={},fetch:n}){this.url=t,this.headers=r,this.fetch=vf(n),this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)}}async signOut(t,r=Fa[0]){if(Fa.indexOf(r)<0)throw new Error(`@supabase/auth-js: Parameter scope must be one of ${Fa.join(", ")}`);try{return await H(this.fetch,"POST",`${this.url}/logout?scope=${r}`,{headers:this.headers,jwt:t,noResolveJson:!0}),{data:null,error:null}}catch(n){if(F(n))return{data:null,error:n};throw n}}async inviteUserByEmail(t,r={}){try{return await H(this.fetch,"POST",`${this.url}/invite`,{body:{email:t,data:r.data},headers:this.headers,redirectTo:r.redirectTo,xform:qt})}catch(n){if(F(n))return{data:{user:null},error:n};throw n}}async generateLink(t){try{const{options:r}=t,n=fx(t,["options"]),s=Object.assign(Object.assign({},n),r);return"newEmail"in n&&(s.new_email=n==null?void 0:n.newEmail,delete s.newEmail),await H(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:s,headers:this.headers,xform:ux,redirectTo:r==null?void 0:r.redirectTo})}catch(r){if(F(r))return{data:{properties:null,user:null},error:r};throw r}}async createUser(t){try{return await H(this.fetch,"POST",`${this.url}/admin/users`,{body:t,headers:this.headers,xform:qt})}catch(r){if(F(r))return{data:{user:null},error:r};throw r}}async listUsers(t){var r,n,s,a,o,l,c;try{const u={nextPage:null,lastPage:0,total:0},d=await H(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(n=(r=t==null?void 0:t.page)===null||r===void 0?void 0:r.toString())!==null&&n!==void 0?n:"",per_page:(a=(s=t==null?void 0:t.perPage)===null||s===void 0?void 0:s.toString())!==null&&a!==void 0?a:""},xform:dx});if(d.error)throw d.error;const h=await d.json(),m=(o=d.headers.get("x-total-count"))!==null&&o!==void 0?o:0,x=(c=(l=d.headers.get("link"))===null||l===void 0?void 0:l.split(","))!==null&&c!==void 0?c:[];return x.length>0&&(x.forEach(w=>{const j=parseInt(w.split(";")[0].split("=")[1].substring(0,1)),v=JSON.parse(w.split(";")[1].split("=")[1]);u[`${v}Page`]=j}),u.total=parseInt(m)),{data:Object.assign(Object.assign({},h),u),error:null}}catch(u){if(F(u))return{data:{users:[]},error:u};throw u}}async getUserById(t){zr(t);try{return await H(this.fetch,"GET",`${this.url}/admin/users/${t}`,{headers:this.headers,xform:qt})}catch(r){if(F(r))return{data:{user:null},error:r};throw r}}async updateUserById(t,r){zr(t);try{return await H(this.fetch,"PUT",`${this.url}/admin/users/${t}`,{body:r,headers:this.headers,xform:qt})}catch(n){if(F(n))return{data:{user:null},error:n};throw n}}async deleteUser(t,r=!1){zr(t);try{return await H(this.fetch,"DELETE",`${this.url}/admin/users/${t}`,{headers:this.headers,body:{should_soft_delete:r},xform:qt})}catch(n){if(F(n))return{data:{user:null},error:n};throw n}}async _listFactors(t){zr(t.userId);try{const{data:r,error:n}=await H(this.fetch,"GET",`${this.url}/admin/users/${t.userId}/factors`,{headers:this.headers,xform:s=>({data:{factors:s},error:null})});return{data:r,error:n}}catch(r){if(F(r))return{data:null,error:r};throw r}}async _deleteFactor(t){zr(t.userId),zr(t.id);try{return{data:await H(this.fetch,"DELETE",`${this.url}/admin/users/${t.userId}/factors/${t.id}`,{headers:this.headers}),error:null}}catch(r){if(F(r))return{data:null,error:r};throw r}}}function Eu(e={}){return{getItem:t=>e[t]||null,setItem:(t,r)=>{e[t]=r},removeItem:t=>{delete e[t]}}}function px(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}const Ur={debug:!!(globalThis&&yf()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug")==="true")};class wf extends Error{constructor(t){super(t),this.isAcquireTimeout=!0}}class gx extends wf{}async function xx(e,t,r){Ur.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquire lock",e,t);const n=new globalThis.AbortController;return t>0&&setTimeout(()=>{n.abort(),Ur.debug&&console.log("@supabase/gotrue-js: navigatorLock acquire timed out",e)},t),await Promise.resolve().then(()=>globalThis.navigator.locks.request(e,t===0?{mode:"exclusive",ifAvailable:!0}:{mode:"exclusive",signal:n.signal},async s=>{if(s){Ur.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquired",e,s.name);try{return await r()}finally{Ur.debug&&console.log("@supabase/gotrue-js: navigatorLock: released",e,s.name)}}else{if(t===0)throw Ur.debug&&console.log("@supabase/gotrue-js: navigatorLock: not immediately available",e),new gx(`Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`);if(Ur.debug)try{const a=await globalThis.navigator.locks.query();console.log("@supabase/gotrue-js: Navigator LockManager state",JSON.stringify(a,null,"  "))}catch(a){console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state",a)}return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"),await r()}}))}px();const yx={url:E0,storageKey:P0,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:T0,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1};async function Pu(e,t,r){return await r()}const Dr={};class gs{constructor(t){var r,n;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log,this.instanceID=gs.nextInstanceID,gs.nextInstanceID+=1,this.instanceID>0&&ut()&&console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");const s=Object.assign(Object.assign({},yx),t);if(this.logDebugMessages=!!s.debug,typeof s.debug=="function"&&(this.logger=s.debug),this.persistSession=s.persistSession,this.storageKey=s.storageKey,this.autoRefreshToken=s.autoRefreshToken,this.admin=new mx({url:s.url,headers:s.headers,fetch:s.fetch}),this.url=s.url,this.headers=s.headers,this.fetch=vf(s.fetch),this.lock=s.lock||Pu,this.detectSessionInUrl=s.detectSessionInUrl,this.flowType=s.flowType,this.hasCustomAuthorizationHeader=s.hasCustomAuthorizationHeader,s.lock?this.lock=s.lock:ut()&&(!((r=globalThis==null?void 0:globalThis.navigator)===null||r===void 0)&&r.locks)?this.lock=xx:this.lock=Pu,this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this)},this.persistSession?(s.storage?this.storage=s.storage:yf()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=Eu(this.memoryStorage)),s.userStorage&&(this.userStorage=s.userStorage)):(this.memoryStorage={},this.storage=Eu(this.memoryStorage)),ut()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(a){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",a)}(n=this.broadcastChannel)===null||n===void 0||n.addEventListener("message",async a=>{this._debug("received broadcast notification from other tab or client",a),await this._notifyAllSubscribers(a.data.event,a.data.session,!1)})}this.initialize()}get jwks(){var t,r;return(r=(t=Dr[this.storageKey])===null||t===void 0?void 0:t.jwks)!==null&&r!==void 0?r:{keys:[]}}set jwks(t){Dr[this.storageKey]=Object.assign(Object.assign({},Dr[this.storageKey]),{jwks:t})}get jwks_cached_at(){var t,r;return(r=(t=Dr[this.storageKey])===null||t===void 0?void 0:t.cachedAt)!==null&&r!==void 0?r:Number.MIN_SAFE_INTEGER}set jwks_cached_at(t){Dr[this.storageKey]=Object.assign(Object.assign({},Dr[this.storageKey]),{cachedAt:t})}_debug(...t){return this.logDebugMessages&&this.logger(`GoTrueClient@${this.instanceID} (${mf}) ${new Date().toISOString()}`,...t),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>await this._acquireLock(-1,async()=>await this._initialize()))(),await this.initializePromise)}async _initialize(){var t;try{const r=G0(window.location.href);let n="none";if(this._isImplicitGrantCallback(r)?n="implicit":await this._isPKCECallback(r)&&(n="pkce"),ut()&&this.detectSessionInUrl&&n!=="none"){const{data:s,error:a}=await this._getSessionFromURL(r,n);if(a){if(this._debug("#_initialize()","error detecting session from URL",a),M0(a)){const c=(t=a.details)===null||t===void 0?void 0:t.code;if(c==="identity_already_exists"||c==="identity_not_found"||c==="single_identity_not_deletable")return{error:a}}return await this._removeSession(),{error:a}}const{session:o,redirectType:l}=s;return this._debug("#_initialize()","detected session in URL",o,"redirect type",l),await this._saveSession(o),setTimeout(async()=>{l==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",o):await this._notifyAllSubscribers("SIGNED_IN",o)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(r){return F(r)?{error:r}:{error:new gf("Unexpected error during initialization",r)}}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(t){var r,n,s;try{const a=await H(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(n=(r=t==null?void 0:t.options)===null||r===void 0?void 0:r.data)!==null&&n!==void 0?n:{},gotrue_meta_security:{captcha_token:(s=t==null?void 0:t.options)===null||s===void 0?void 0:s.captchaToken}},xform:Nt}),{data:o,error:l}=a;if(l||!o)return{data:{user:null,session:null},error:l};const c=o.session,u=o.user;return o.session&&(await this._saveSession(o.session),await this._notifyAllSubscribers("SIGNED_IN",c)),{data:{user:u,session:c},error:null}}catch(a){if(F(a))return{data:{user:null,session:null},error:a};throw a}}async signUp(t){var r,n,s;try{let a;if("email"in t){const{email:d,password:h,options:m}=t;let x=null,w=null;this.flowType==="pkce"&&([x,w]=await $r(this.storage,this.storageKey)),a=await H(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:m==null?void 0:m.emailRedirectTo,body:{email:d,password:h,data:(r=m==null?void 0:m.data)!==null&&r!==void 0?r:{},gotrue_meta_security:{captcha_token:m==null?void 0:m.captchaToken},code_challenge:x,code_challenge_method:w},xform:Nt})}else if("phone"in t){const{phone:d,password:h,options:m}=t;a=await H(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:d,password:h,data:(n=m==null?void 0:m.data)!==null&&n!==void 0?n:{},channel:(s=m==null?void 0:m.channel)!==null&&s!==void 0?s:"sms",gotrue_meta_security:{captcha_token:m==null?void 0:m.captchaToken}},xform:Nt})}else throw new Hs("You must provide either an email or phone number and a password");const{data:o,error:l}=a;if(l||!o)return{data:{user:null,session:null},error:l};const c=o.session,u=o.user;return o.session&&(await this._saveSession(o.session),await this._notifyAllSubscribers("SIGNED_IN",c)),{data:{user:u,session:c},error:null}}catch(a){if(F(a))return{data:{user:null,session:null},error:a};throw a}}async signInWithPassword(t){try{let r;if("email"in t){const{email:a,password:o,options:l}=t;r=await H(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:a,password:o,gotrue_meta_security:{captcha_token:l==null?void 0:l.captchaToken}},xform:Cu})}else if("phone"in t){const{phone:a,password:o,options:l}=t;r=await H(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:a,password:o,gotrue_meta_security:{captcha_token:l==null?void 0:l.captchaToken}},xform:Cu})}else throw new Hs("You must provide either an email or phone number and a password");const{data:n,error:s}=r;return s?{data:{user:null,session:null},error:s}:!n||!n.session||!n.user?{data:{user:null,session:null},error:new Vs}:(n.session&&(await this._saveSession(n.session),await this._notifyAllSubscribers("SIGNED_IN",n.session)),{data:Object.assign({user:n.user,session:n.session},n.weak_password?{weakPassword:n.weak_password}:null),error:s})}catch(r){if(F(r))return{data:{user:null,session:null},error:r};throw r}}async signInWithOAuth(t){var r,n,s,a;return await this._handleProviderSignIn(t.provider,{redirectTo:(r=t.options)===null||r===void 0?void 0:r.redirectTo,scopes:(n=t.options)===null||n===void 0?void 0:n.scopes,queryParams:(s=t.options)===null||s===void 0?void 0:s.queryParams,skipBrowserRedirect:(a=t.options)===null||a===void 0?void 0:a.skipBrowserRedirect})}async exchangeCodeForSession(t){return await this.initializePromise,this._acquireLock(-1,async()=>this._exchangeCodeForSession(t))}async signInWithWeb3(t){const{chain:r}=t;if(r==="solana")return await this.signInWithSolana(t);throw new Error(`@supabase/auth-js: Unsupported chain "${r}"`)}async signInWithSolana(t){var r,n,s,a,o,l,c,u,d,h,m,x;let w,j;if("message"in t)w=t.message,j=t.signature;else{const{chain:v,wallet:g,statement:p,options:y}=t;let _;if(ut())if(typeof g=="object")_=g;else{const N=window;if("solana"in N&&typeof N.solana=="object"&&("signIn"in N.solana&&typeof N.solana.signIn=="function"||"signMessage"in N.solana&&typeof N.solana.signMessage=="function"))_=N.solana;else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")}else{if(typeof g!="object"||!(y!=null&&y.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");_=g}const E=new URL((r=y==null?void 0:y.url)!==null&&r!==void 0?r:window.location.href);if("signIn"in _&&_.signIn){const N=await _.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},y==null?void 0:y.signInWithSolana),{version:"1",domain:E.host,uri:E.href}),p?{statement:p}:null));let T;if(Array.isArray(N)&&N[0]&&typeof N[0]=="object")T=N[0];else if(N&&typeof N=="object"&&"signedMessage"in N&&"signature"in N)T=N;else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");if("signedMessage"in T&&"signature"in T&&(typeof T.signedMessage=="string"||T.signedMessage instanceof Uint8Array)&&T.signature instanceof Uint8Array)w=typeof T.signedMessage=="string"?T.signedMessage:new TextDecoder().decode(T.signedMessage),j=T.signature;else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")}else{if(!("signMessage"in _)||typeof _.signMessage!="function"||!("publicKey"in _)||typeof _!="object"||!_.publicKey||!("toBase58"in _.publicKey)||typeof _.publicKey.toBase58!="function")throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");w=[`${E.host} wants you to sign in with your Solana account:`,_.publicKey.toBase58(),...p?["",p,""]:[""],"Version: 1",`URI: ${E.href}`,`Issued At: ${(s=(n=y==null?void 0:y.signInWithSolana)===null||n===void 0?void 0:n.issuedAt)!==null&&s!==void 0?s:new Date().toISOString()}`,...!((a=y==null?void 0:y.signInWithSolana)===null||a===void 0)&&a.notBefore?[`Not Before: ${y.signInWithSolana.notBefore}`]:[],...!((o=y==null?void 0:y.signInWithSolana)===null||o===void 0)&&o.expirationTime?[`Expiration Time: ${y.signInWithSolana.expirationTime}`]:[],...!((l=y==null?void 0:y.signInWithSolana)===null||l===void 0)&&l.chainId?[`Chain ID: ${y.signInWithSolana.chainId}`]:[],...!((c=y==null?void 0:y.signInWithSolana)===null||c===void 0)&&c.nonce?[`Nonce: ${y.signInWithSolana.nonce}`]:[],...!((u=y==null?void 0:y.signInWithSolana)===null||u===void 0)&&u.requestId?[`Request ID: ${y.signInWithSolana.requestId}`]:[],...!((h=(d=y==null?void 0:y.signInWithSolana)===null||d===void 0?void 0:d.resources)===null||h===void 0)&&h.length?["Resources",...y.signInWithSolana.resources.map(T=>`- ${T}`)]:[]].join(`
`);const N=await _.signMessage(new TextEncoder().encode(w),"utf8");if(!N||!(N instanceof Uint8Array))throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");j=N}}try{const{data:v,error:g}=await H(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"solana",message:w,signature:W0(j)},!((m=t.options)===null||m===void 0)&&m.captchaToken?{gotrue_meta_security:{captcha_token:(x=t.options)===null||x===void 0?void 0:x.captchaToken}}:null),xform:Nt});if(g)throw g;return!v||!v.session||!v.user?{data:{user:null,session:null},error:new Vs}:(v.session&&(await this._saveSession(v.session),await this._notifyAllSubscribers("SIGNED_IN",v.session)),{data:Object.assign({},v),error:g})}catch(v){if(F(v))return{data:{user:null,session:null},error:v};throw v}}async _exchangeCodeForSession(t){const r=await hr(this.storage,`${this.storageKey}-code-verifier`),[n,s]=(r??"").split("/");try{const{data:a,error:o}=await H(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:t,code_verifier:n},xform:Nt});if(await Dt(this.storage,`${this.storageKey}-code-verifier`),o)throw o;return!a||!a.session||!a.user?{data:{user:null,session:null,redirectType:null},error:new Vs}:(a.session&&(await this._saveSession(a.session),await this._notifyAllSubscribers("SIGNED_IN",a.session)),{data:Object.assign(Object.assign({},a),{redirectType:s??null}),error:o})}catch(a){if(F(a))return{data:{user:null,session:null,redirectType:null},error:a};throw a}}async signInWithIdToken(t){try{const{options:r,provider:n,token:s,access_token:a,nonce:o}=t,l=await H(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:n,id_token:s,access_token:a,nonce:o,gotrue_meta_security:{captcha_token:r==null?void 0:r.captchaToken}},xform:Nt}),{data:c,error:u}=l;return u?{data:{user:null,session:null},error:u}:!c||!c.session||!c.user?{data:{user:null,session:null},error:new Vs}:(c.session&&(await this._saveSession(c.session),await this._notifyAllSubscribers("SIGNED_IN",c.session)),{data:c,error:u})}catch(r){if(F(r))return{data:{user:null,session:null},error:r};throw r}}async signInWithOtp(t){var r,n,s,a,o;try{if("email"in t){const{email:l,options:c}=t;let u=null,d=null;this.flowType==="pkce"&&([u,d]=await $r(this.storage,this.storageKey));const{error:h}=await H(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:l,data:(r=c==null?void 0:c.data)!==null&&r!==void 0?r:{},create_user:(n=c==null?void 0:c.shouldCreateUser)!==null&&n!==void 0?n:!0,gotrue_meta_security:{captcha_token:c==null?void 0:c.captchaToken},code_challenge:u,code_challenge_method:d},redirectTo:c==null?void 0:c.emailRedirectTo});return{data:{user:null,session:null},error:h}}if("phone"in t){const{phone:l,options:c}=t,{data:u,error:d}=await H(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:l,data:(s=c==null?void 0:c.data)!==null&&s!==void 0?s:{},create_user:(a=c==null?void 0:c.shouldCreateUser)!==null&&a!==void 0?a:!0,gotrue_meta_security:{captcha_token:c==null?void 0:c.captchaToken},channel:(o=c==null?void 0:c.channel)!==null&&o!==void 0?o:"sms"}});return{data:{user:null,session:null,messageId:u==null?void 0:u.message_id},error:d}}throw new Hs("You must provide either an email or phone number.")}catch(l){if(F(l))return{data:{user:null,session:null},error:l};throw l}}async verifyOtp(t){var r,n;try{let s,a;"options"in t&&(s=(r=t.options)===null||r===void 0?void 0:r.redirectTo,a=(n=t.options)===null||n===void 0?void 0:n.captchaToken);const{data:o,error:l}=await H(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},t),{gotrue_meta_security:{captcha_token:a}}),redirectTo:s,xform:Nt});if(l)throw l;if(!o)throw new Error("An error occurred on token verification.");const c=o.session,u=o.user;return c!=null&&c.access_token&&(await this._saveSession(c),await this._notifyAllSubscribers(t.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",c)),{data:{user:u,session:c},error:null}}catch(s){if(F(s))return{data:{user:null,session:null},error:s};throw s}}async signInWithSSO(t){var r,n,s;try{let a=null,o=null;return this.flowType==="pkce"&&([a,o]=await $r(this.storage,this.storageKey)),await H(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in t?{provider_id:t.providerId}:null),"domain"in t?{domain:t.domain}:null),{redirect_to:(n=(r=t.options)===null||r===void 0?void 0:r.redirectTo)!==null&&n!==void 0?n:void 0}),!((s=t==null?void 0:t.options)===null||s===void 0)&&s.captchaToken?{gotrue_meta_security:{captcha_token:t.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:a,code_challenge_method:o}),headers:this.headers,xform:cx})}catch(a){if(F(a))return{data:null,error:a};throw a}}async reauthenticate(){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._reauthenticate())}async _reauthenticate(){try{return await this._useSession(async t=>{const{data:{session:r},error:n}=t;if(n)throw n;if(!r)throw new Bt;const{error:s}=await H(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:r.access_token});return{data:{user:null,session:null},error:s}})}catch(t){if(F(t))return{data:{user:null,session:null},error:t};throw t}}async resend(t){try{const r=`${this.url}/resend`;if("email"in t){const{email:n,type:s,options:a}=t,{error:o}=await H(this.fetch,"POST",r,{headers:this.headers,body:{email:n,type:s,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken}},redirectTo:a==null?void 0:a.emailRedirectTo});return{data:{user:null,session:null},error:o}}else if("phone"in t){const{phone:n,type:s,options:a}=t,{data:o,error:l}=await H(this.fetch,"POST",r,{headers:this.headers,body:{phone:n,type:s,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken}}});return{data:{user:null,session:null,messageId:o==null?void 0:o.message_id},error:l}}throw new Hs("You must provide either an email or phone number and a type")}catch(r){if(F(r))return{data:{user:null,session:null},error:r};throw r}}async getSession(){return await this.initializePromise,await this._acquireLock(-1,async()=>this._useSession(async r=>r))}async _acquireLock(t,r){this._debug("#_acquireLock","begin",t);try{if(this.lockAcquired){const n=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),s=(async()=>(await n,await r()))();return this.pendingInLock.push((async()=>{try{await s}catch{}})()),s}return await this.lock(`lock:${this.storageKey}`,t,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const n=r();for(this.pendingInLock.push((async()=>{try{await n}catch{}})()),await n;this.pendingInLock.length;){const s=[...this.pendingInLock];await Promise.all(s),this.pendingInLock.splice(0,s.length)}return await n}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(t){this._debug("#_useSession","begin");try{const r=await this.__loadSession();return await t(r)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lockAcquired||this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let t=null;const r=await hr(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",r),r!==null&&(this._isValidSession(r)?t=r:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!t)return{data:{session:null},error:null};const n=t.expires_at?t.expires_at*1e3-Date.now()<$a:!1;if(this._debug("#__loadSession()",`session has${n?"":" not"} expired`,"expires_at",t.expires_at),!n){if(this.userStorage){const o=await hr(this.userStorage,this.storageKey+"-user");o!=null&&o.user?t.user=o.user:t.user=Da()}if(this.storage.isServer&&t.user){let o=this.suppressGetSessionWarning;t=new Proxy(t,{get:(c,u,d)=>(!o&&u==="user"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),o=!0,this.suppressGetSessionWarning=!0),Reflect.get(c,u,d))})}return{data:{session:t},error:null}}const{session:s,error:a}=await this._callRefreshToken(t.refresh_token);return a?{data:{session:null},error:a}:{data:{session:s},error:null}}finally{this._debug("#__loadSession()","end")}}async getUser(t){return t?await this._getUser(t):(await this.initializePromise,await this._acquireLock(-1,async()=>await this._getUser()))}async _getUser(t){try{return t?await H(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:t,xform:qt}):await this._useSession(async r=>{var n,s,a;const{data:o,error:l}=r;if(l)throw l;return!(!((n=o.session)===null||n===void 0)&&n.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new Bt}:await H(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(a=(s=o.session)===null||s===void 0?void 0:s.access_token)!==null&&a!==void 0?a:void 0,xform:qt})})}catch(r){if(F(r))return L0(r)&&(await this._removeSession(),await Dt(this.storage,`${this.storageKey}-code-verifier`)),{data:{user:null},error:r};throw r}}async updateUser(t,r={}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._updateUser(t,r))}async _updateUser(t,r={}){try{return await this._useSession(async n=>{const{data:s,error:a}=n;if(a)throw a;if(!s.session)throw new Bt;const o=s.session;let l=null,c=null;this.flowType==="pkce"&&t.email!=null&&([l,c]=await $r(this.storage,this.storageKey));const{data:u,error:d}=await H(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:r==null?void 0:r.emailRedirectTo,body:Object.assign(Object.assign({},t),{code_challenge:l,code_challenge_method:c}),jwt:o.access_token,xform:qt});if(d)throw d;return o.user=u.user,await this._saveSession(o),await this._notifyAllSubscribers("USER_UPDATED",o),{data:{user:o.user},error:null}})}catch(n){if(F(n))return{data:{user:null},error:n};throw n}}async setSession(t){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._setSession(t))}async _setSession(t){try{if(!t.access_token||!t.refresh_token)throw new Bt;const r=Date.now()/1e3;let n=r,s=!0,a=null;const{payload:o}=Ua(t.access_token);if(o.exp&&(n=o.exp,s=n<=r),s){const{session:l,error:c}=await this._callRefreshToken(t.refresh_token);if(c)return{data:{user:null,session:null},error:c};if(!l)return{data:{user:null,session:null},error:null};a=l}else{const{data:l,error:c}=await this._getUser(t.access_token);if(c)throw c;a={access_token:t.access_token,refresh_token:t.refresh_token,user:l.user,token_type:"bearer",expires_in:n-r,expires_at:n},await this._saveSession(a),await this._notifyAllSubscribers("SIGNED_IN",a)}return{data:{user:a.user,session:a},error:null}}catch(r){if(F(r))return{data:{session:null,user:null},error:r};throw r}}async refreshSession(t){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._refreshSession(t))}async _refreshSession(t){try{return await this._useSession(async r=>{var n;if(!t){const{data:o,error:l}=r;if(l)throw l;t=(n=o.session)!==null&&n!==void 0?n:void 0}if(!(t!=null&&t.refresh_token))throw new Bt;const{session:s,error:a}=await this._callRefreshToken(t.refresh_token);return a?{data:{user:null,session:null},error:a}:s?{data:{user:s.user,session:s},error:null}:{data:{user:null,session:null},error:null}})}catch(r){if(F(r))return{data:{user:null,session:null},error:r};throw r}}async _getSessionFromURL(t,r){try{if(!ut())throw new Gs("No browser detected.");if(t.error||t.error_description||t.error_code)throw new Gs(t.error_description||"Error in URL with unspecified error_description",{error:t.error||"unspecified_error",code:t.error_code||"unspecified_code"});switch(r){case"implicit":if(this.flowType==="pkce")throw new wu("Not a valid PKCE flow url.");break;case"pkce":if(this.flowType==="implicit")throw new Gs("Not a valid implicit grant flow url.");break;default:}if(r==="pkce"){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!t.code)throw new wu("No code detected.");const{data:p,error:y}=await this._exchangeCodeForSession(t.code);if(y)throw y;const _=new URL(window.location.href);return _.searchParams.delete("code"),window.history.replaceState(window.history.state,"",_.toString()),{data:{session:p.session,redirectType:null},error:null}}const{provider_token:n,provider_refresh_token:s,access_token:a,refresh_token:o,expires_in:l,expires_at:c,token_type:u}=t;if(!a||!l||!o||!u)throw new Gs("No session defined in URL");const d=Math.round(Date.now()/1e3),h=parseInt(l);let m=d+h;c&&(m=parseInt(c));const x=m-d;x*1e3<=Br&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${x}s, should have been closer to ${h}s`);const w=m-h;d-w>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",w,m,d):d-w<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",w,m,d);const{data:j,error:v}=await this._getUser(a);if(v)throw v;const g={provider_token:n,provider_refresh_token:s,access_token:a,expires_in:h,expires_at:m,refresh_token:o,token_type:u,user:j.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),{data:{session:g,redirectType:t.type},error:null}}catch(n){if(F(n))return{data:{session:null,redirectType:null},error:n};throw n}}_isImplicitGrantCallback(t){return!!(t.access_token||t.error_description)}async _isPKCECallback(t){const r=await hr(this.storage,`${this.storageKey}-code-verifier`);return!!(t.code&&r)}async signOut(t={scope:"global"}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._signOut(t))}async _signOut({scope:t}={scope:"global"}){return await this._useSession(async r=>{var n;const{data:s,error:a}=r;if(a)return{error:a};const o=(n=s.session)===null||n===void 0?void 0:n.access_token;if(o){const{error:l}=await this.admin.signOut(o,t);if(l&&!(R0(l)&&(l.status===404||l.status===401||l.status===403)))return{error:l}}return t!=="others"&&(await this._removeSession(),await Dt(this.storage,`${this.storageKey}-code-verifier`)),{error:null}})}onAuthStateChange(t){const r=H0(),n={id:r,callback:t,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",r),this.stateChangeEmitters.delete(r)}};return this._debug("#onAuthStateChange()","registered callback with id",r),this.stateChangeEmitters.set(r,n),(async()=>(await this.initializePromise,await this._acquireLock(-1,async()=>{this._emitInitialSession(r)})))(),{data:{subscription:n}}}async _emitInitialSession(t){return await this._useSession(async r=>{var n,s;try{const{data:{session:a},error:o}=r;if(o)throw o;await((n=this.stateChangeEmitters.get(t))===null||n===void 0?void 0:n.callback("INITIAL_SESSION",a)),this._debug("INITIAL_SESSION","callback id",t,"session",a)}catch(a){await((s=this.stateChangeEmitters.get(t))===null||s===void 0?void 0:s.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",t,"error",a),console.error(a)}})}async resetPasswordForEmail(t,r={}){let n=null,s=null;this.flowType==="pkce"&&([n,s]=await $r(this.storage,this.storageKey,!0));try{return await H(this.fetch,"POST",`${this.url}/recover`,{body:{email:t,code_challenge:n,code_challenge_method:s,gotrue_meta_security:{captcha_token:r.captchaToken}},headers:this.headers,redirectTo:r.redirectTo})}catch(a){if(F(a))return{data:null,error:a};throw a}}async getUserIdentities(){var t;try{const{data:r,error:n}=await this.getUser();if(n)throw n;return{data:{identities:(t=r.user.identities)!==null&&t!==void 0?t:[]},error:null}}catch(r){if(F(r))return{data:null,error:r};throw r}}async linkIdentity(t){var r;try{const{data:n,error:s}=await this._useSession(async a=>{var o,l,c,u,d;const{data:h,error:m}=a;if(m)throw m;const x=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,t.provider,{redirectTo:(o=t.options)===null||o===void 0?void 0:o.redirectTo,scopes:(l=t.options)===null||l===void 0?void 0:l.scopes,queryParams:(c=t.options)===null||c===void 0?void 0:c.queryParams,skipBrowserRedirect:!0});return await H(this.fetch,"GET",x,{headers:this.headers,jwt:(d=(u=h.session)===null||u===void 0?void 0:u.access_token)!==null&&d!==void 0?d:void 0})});if(s)throw s;return ut()&&!(!((r=t.options)===null||r===void 0)&&r.skipBrowserRedirect)&&window.location.assign(n==null?void 0:n.url),{data:{provider:t.provider,url:n==null?void 0:n.url},error:null}}catch(n){if(F(n))return{data:{provider:t.provider,url:null},error:n};throw n}}async unlinkIdentity(t){try{return await this._useSession(async r=>{var n,s;const{data:a,error:o}=r;if(o)throw o;return await H(this.fetch,"DELETE",`${this.url}/user/identities/${t.identity_id}`,{headers:this.headers,jwt:(s=(n=a.session)===null||n===void 0?void 0:n.access_token)!==null&&s!==void 0?s:void 0})})}catch(r){if(F(r))return{data:null,error:r};throw r}}async _refreshAccessToken(t){const r=`#_refreshAccessToken(${t.substring(0,5)}...)`;this._debug(r,"begin");try{const n=Date.now();return await J0(async s=>(s>0&&await K0(200*Math.pow(2,s-1)),this._debug(r,"refreshing attempt",s),await H(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:t},headers:this.headers,xform:Nt})),(s,a)=>{const o=200*Math.pow(2,s);return a&&za(a)&&Date.now()+o-n<Br})}catch(n){if(this._debug(r,"error",n),F(n))return{data:{session:null,user:null},error:n};throw n}finally{this._debug(r,"end")}}_isValidSession(t){return typeof t=="object"&&t!==null&&"access_token"in t&&"refresh_token"in t&&"expires_at"in t}async _handleProviderSignIn(t,r){const n=await this._getUrlForProvider(`${this.url}/authorize`,t,{redirectTo:r.redirectTo,scopes:r.scopes,queryParams:r.queryParams});return this._debug("#_handleProviderSignIn()","provider",t,"options",r,"url",n),ut()&&!r.skipBrowserRedirect&&window.location.assign(n),{data:{provider:t,url:n},error:null}}async _recoverAndRefresh(){var t,r;const n="#_recoverAndRefresh()";this._debug(n,"begin");try{const s=await hr(this.storage,this.storageKey);if(s&&this.userStorage){let o=await hr(this.userStorage,this.storageKey+"-user");!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!o&&(o={user:s.user},await Wr(this.userStorage,this.storageKey+"-user",o)),s.user=(t=o==null?void 0:o.user)!==null&&t!==void 0?t:Da()}else if(s&&!s.user&&!s.user){const o=await hr(this.storage,this.storageKey+"-user");o&&(o!=null&&o.user)?(s.user=o.user,await Dt(this.storage,this.storageKey+"-user"),await Wr(this.storage,this.storageKey,s)):s.user=Da()}if(this._debug(n,"session from storage",s),!this._isValidSession(s)){this._debug(n,"session is not valid"),s!==null&&await this._removeSession();return}const a=((r=s.expires_at)!==null&&r!==void 0?r:1/0)*1e3-Date.now()<$a;if(this._debug(n,`session has${a?"":" not"} expired with margin of ${$a}s`),a){if(this.autoRefreshToken&&s.refresh_token){const{error:o}=await this._callRefreshToken(s.refresh_token);o&&(console.error(o),za(o)||(this._debug(n,"refresh failed with a non-retryable error, removing the session",o),await this._removeSession()))}}else if(s.user&&s.user.__isUserNotAvailableProxy===!0)try{const{data:o,error:l}=await this._getUser(s.access_token);!l&&(o!=null&&o.user)?(s.user=o.user,await this._saveSession(s),await this._notifyAllSubscribers("SIGNED_IN",s)):this._debug(n,"could not get user data, skipping SIGNED_IN notification")}catch(o){console.error("Error getting user data:",o),this._debug(n,"error getting user data, skipping SIGNED_IN notification",o)}else await this._notifyAllSubscribers("SIGNED_IN",s)}catch(s){this._debug(n,"error",s),console.error(s);return}finally{this._debug(n,"end")}}async _callRefreshToken(t){var r,n;if(!t)throw new Bt;if(this.refreshingDeferred)return this.refreshingDeferred.promise;const s=`#_callRefreshToken(${t.substring(0,5)}...)`;this._debug(s,"begin");try{this.refreshingDeferred=new aa;const{data:a,error:o}=await this._refreshAccessToken(t);if(o)throw o;if(!a.session)throw new Bt;await this._saveSession(a.session),await this._notifyAllSubscribers("TOKEN_REFRESHED",a.session);const l={session:a.session,error:null};return this.refreshingDeferred.resolve(l),l}catch(a){if(this._debug(s,"error",a),F(a)){const o={session:null,error:a};return za(a)||await this._removeSession(),(r=this.refreshingDeferred)===null||r===void 0||r.resolve(o),o}throw(n=this.refreshingDeferred)===null||n===void 0||n.reject(a),a}finally{this.refreshingDeferred=null,this._debug(s,"end")}}async _notifyAllSubscribers(t,r,n=!0){const s=`#_notifyAllSubscribers(${t})`;this._debug(s,"begin",r,`broadcast = ${n}`);try{this.broadcastChannel&&n&&this.broadcastChannel.postMessage({event:t,session:r});const a=[],o=Array.from(this.stateChangeEmitters.values()).map(async l=>{try{await l.callback(t,r)}catch(c){a.push(c)}});if(await Promise.all(o),a.length>0){for(let l=0;l<a.length;l+=1)console.error(a[l]);throw a[0]}}finally{this._debug(s,"end")}}async _saveSession(t){this._debug("#_saveSession()",t),this.suppressGetSessionWarning=!0;const r=Object.assign({},t),n=r.user&&r.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!n&&r.user&&await Wr(this.userStorage,this.storageKey+"-user",{user:r.user});const s=Object.assign({},r);delete s.user;const a=Nu(s);await Wr(this.storage,this.storageKey,a)}else{const s=Nu(r);await Wr(this.storage,this.storageKey,s)}}async _removeSession(){this._debug("#_removeSession()"),await Dt(this.storage,this.storageKey),await Dt(this.storage,this.storageKey+"-code-verifier"),await Dt(this.storage,this.storageKey+"-user"),this.userStorage&&await Dt(this.userStorage,this.storageKey+"-user"),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const t=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{t&&ut()&&(window!=null&&window.removeEventListener)&&window.removeEventListener("visibilitychange",t)}catch(r){console.error("removing visibilitychange callback failed",r)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const t=setInterval(()=>this._autoRefreshTokenTick(),Br);this.autoRefreshTicker=t,t&&typeof t=="object"&&typeof t.unref=="function"?t.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(t),setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const t=this.autoRefreshTicker;this.autoRefreshTicker=null,t&&clearInterval(t)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async _autoRefreshTokenTick(){this._debug("#_autoRefreshTokenTick()","begin");try{await this._acquireLock(0,async()=>{try{const t=Date.now();try{return await this._useSession(async r=>{const{data:{session:n}}=r;if(!n||!n.refresh_token||!n.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const s=Math.floor((n.expires_at*1e3-t)/Br);this._debug("#_autoRefreshTokenTick()",`access token expires in ${s} ticks, a tick lasts ${Br}ms, refresh threshold is ${Ho} ticks`),s<=Ho&&await this._callRefreshToken(n.refresh_token)})}catch(r){console.error("Auto refresh tick failed with error. This is likely a transient error.",r)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(t){if(t.isAcquireTimeout||t instanceof wf)this._debug("auto refresh token tick lock not available");else throw t}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!ut()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>await this._onVisibilityChanged(!1),window==null||window.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(t){console.error("_handleVisibilityChange",t)}}async _onVisibilityChanged(t){const r=`#_onVisibilityChanged(${t})`;this._debug(r,"visibilityState",document.visibilityState),document.visibilityState==="visible"?(this.autoRefreshToken&&this._startAutoRefresh(),t||(await this.initializePromise,await this._acquireLock(-1,async()=>{if(document.visibilityState!=="visible"){this._debug(r,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()}))):document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(t,r,n){const s=[`provider=${encodeURIComponent(r)}`];if(n!=null&&n.redirectTo&&s.push(`redirect_to=${encodeURIComponent(n.redirectTo)}`),n!=null&&n.scopes&&s.push(`scopes=${encodeURIComponent(n.scopes)}`),this.flowType==="pkce"){const[a,o]=await $r(this.storage,this.storageKey),l=new URLSearchParams({code_challenge:`${encodeURIComponent(a)}`,code_challenge_method:`${encodeURIComponent(o)}`});s.push(l.toString())}if(n!=null&&n.queryParams){const a=new URLSearchParams(n.queryParams);s.push(a.toString())}return n!=null&&n.skipBrowserRedirect&&s.push(`skip_http_redirect=${n.skipBrowserRedirect}`),`${t}?${s.join("&")}`}async _unenroll(t){try{return await this._useSession(async r=>{var n;const{data:s,error:a}=r;return a?{data:null,error:a}:await H(this.fetch,"DELETE",`${this.url}/factors/${t.factorId}`,{headers:this.headers,jwt:(n=s==null?void 0:s.session)===null||n===void 0?void 0:n.access_token})})}catch(r){if(F(r))return{data:null,error:r};throw r}}async _enroll(t){try{return await this._useSession(async r=>{var n,s;const{data:a,error:o}=r;if(o)return{data:null,error:o};const l=Object.assign({friendly_name:t.friendlyName,factor_type:t.factorType},t.factorType==="phone"?{phone:t.phone}:{issuer:t.issuer}),{data:c,error:u}=await H(this.fetch,"POST",`${this.url}/factors`,{body:l,headers:this.headers,jwt:(n=a==null?void 0:a.session)===null||n===void 0?void 0:n.access_token});return u?{data:null,error:u}:(t.factorType==="totp"&&(!((s=c==null?void 0:c.totp)===null||s===void 0)&&s.qr_code)&&(c.totp.qr_code=`data:image/svg+xml;utf-8,${c.totp.qr_code}`),{data:c,error:null})})}catch(r){if(F(r))return{data:null,error:r};throw r}}async _verify(t){return this._acquireLock(-1,async()=>{try{return await this._useSession(async r=>{var n;const{data:s,error:a}=r;if(a)return{data:null,error:a};const{data:o,error:l}=await H(this.fetch,"POST",`${this.url}/factors/${t.factorId}/verify`,{body:{code:t.code,challenge_id:t.challengeId},headers:this.headers,jwt:(n=s==null?void 0:s.session)===null||n===void 0?void 0:n.access_token});return l?{data:null,error:l}:(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+o.expires_in},o)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",o),{data:o,error:l})})}catch(r){if(F(r))return{data:null,error:r};throw r}})}async _challenge(t){return this._acquireLock(-1,async()=>{try{return await this._useSession(async r=>{var n;const{data:s,error:a}=r;return a?{data:null,error:a}:await H(this.fetch,"POST",`${this.url}/factors/${t.factorId}/challenge`,{body:{channel:t.channel},headers:this.headers,jwt:(n=s==null?void 0:s.session)===null||n===void 0?void 0:n.access_token})})}catch(r){if(F(r))return{data:null,error:r};throw r}})}async _challengeAndVerify(t){const{data:r,error:n}=await this._challenge({factorId:t.factorId});return n?{data:null,error:n}:await this._verify({factorId:t.factorId,challengeId:r.id,code:t.code})}async _listFactors(){const{data:{user:t},error:r}=await this.getUser();if(r)return{data:null,error:r};const n=(t==null?void 0:t.factors)||[],s=n.filter(o=>o.factor_type==="totp"&&o.status==="verified"),a=n.filter(o=>o.factor_type==="phone"&&o.status==="verified");return{data:{all:n,totp:s,phone:a},error:null}}async _getAuthenticatorAssuranceLevel(){return this._acquireLock(-1,async()=>await this._useSession(async t=>{var r,n;const{data:{session:s},error:a}=t;if(a)return{data:null,error:a};if(!s)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const{payload:o}=Ua(s.access_token);let l=null;o.aal&&(l=o.aal);let c=l;((n=(r=s.user.factors)===null||r===void 0?void 0:r.filter(h=>h.status==="verified"))!==null&&n!==void 0?n:[]).length>0&&(c="aal2");const d=o.amr||[];return{data:{currentLevel:l,nextLevel:c,currentAuthenticationMethods:d},error:null}}))}async fetchJwk(t,r={keys:[]}){let n=r.keys.find(l=>l.kid===t);if(n)return n;const s=Date.now();if(n=this.jwks.keys.find(l=>l.kid===t),n&&this.jwks_cached_at+I0>s)return n;const{data:a,error:o}=await H(this.fetch,"GET",`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(o)throw o;return!a.keys||a.keys.length===0||(this.jwks=a,this.jwks_cached_at=s,n=a.keys.find(l=>l.kid===t),!n)?null:n}async getClaims(t,r={}){try{let n=t;if(!n){const{data:x,error:w}=await this.getSession();if(w||!x.session)return{data:null,error:w};n=x.session.access_token}const{header:s,payload:a,signature:o,raw:{header:l,payload:c}}=Ua(n);r!=null&&r.allowExpired||rx(a.exp);const u=!s.alg||s.alg.startsWith("HS")||!s.kid||!("crypto"in globalThis&&"subtle"in globalThis.crypto)?null:await this.fetchJwk(s.kid,r!=null&&r.keys?{keys:r.keys}:r==null?void 0:r.jwks);if(!u){const{error:x}=await this.getUser(n);if(x)throw x;return{data:{claims:a,header:s,signature:o},error:null}}const d=nx(s.alg),h=await crypto.subtle.importKey("jwk",u,d,!0,["verify"]);if(!await crypto.subtle.verify(d,h,o,B0(`${l}.${c}`)))throw new Ko("Invalid JWT signature");return{data:{claims:a,header:s,signature:o},error:null}}catch(n){if(F(n))return{data:null,error:n};throw n}}}gs.nextInstanceID=0;const vx=gs;class wx extends vx{constructor(t){super(t)}}var jx=function(e,t,r,n){function s(a){return a instanceof r?a:new r(function(o){o(a)})}return new(r||(r=Promise))(function(a,o){function l(d){try{u(n.next(d))}catch(h){o(h)}}function c(d){try{u(n.throw(d))}catch(h){o(h)}}function u(d){d.done?a(d.value):s(d.value).then(l,c)}u((n=n.apply(e,t||[])).next())})};class bx{constructor(t,r,n){var s,a,o;if(this.supabaseUrl=t,this.supabaseKey=r,!t)throw new Error("supabaseUrl is required.");if(!r)throw new Error("supabaseKey is required.");const l=S0(t),c=new URL(l);this.realtimeUrl=new URL("realtime/v1",c),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace("http","ws"),this.authUrl=new URL("auth/v1",c),this.storageUrl=new URL("storage/v1",c),this.functionsUrl=new URL("functions/v1",c);const u=`sb-${c.hostname.split(".")[0]}-auth-token`,d={db:y0,realtime:w0,auth:Object.assign(Object.assign({},v0),{storageKey:u}),global:x0},h=C0(n??{},d);this.storageKey=(s=h.auth.storageKey)!==null&&s!==void 0?s:"",this.headers=(a=h.global.headers)!==null&&a!==void 0?a:{},h.accessToken?(this.accessToken=h.accessToken,this.auth=new Proxy({},{get:(m,x)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(x)} is not possible`)}})):this.auth=this._initSupabaseAuthClient((o=h.auth)!==null&&o!==void 0?o:{},this.headers,h.global.fetch),this.fetch=_0(r,this._getAccessToken.bind(this),h.global.fetch),this.realtime=this._initRealtimeClient(Object.assign({headers:this.headers,accessToken:this._getAccessToken.bind(this)},h.realtime)),this.rest=new Dg(new URL("rest/v1",c).href,{headers:this.headers,schema:h.db.schema,fetch:this.fetch}),this.storage=new m0(this.storageUrl.href,this.headers,this.fetch,n==null?void 0:n.storage),h.accessToken||this._listenForAuthEvents()}get functions(){return new gg(this.functionsUrl.href,{headers:this.headers,customFetch:this.fetch})}from(t){return this.rest.from(t)}schema(t){return this.rest.schema(t)}rpc(t,r={},n={}){return this.rest.rpc(t,r,n)}channel(t,r={config:{}}){return this.realtime.channel(t,r)}getChannels(){return this.realtime.getChannels()}removeChannel(t){return this.realtime.removeChannel(t)}removeAllChannels(){return this.realtime.removeAllChannels()}_getAccessToken(){var t,r;return jx(this,void 0,void 0,function*(){if(this.accessToken)return yield this.accessToken();const{data:n}=yield this.auth.getSession();return(r=(t=n.session)===null||t===void 0?void 0:t.access_token)!==null&&r!==void 0?r:null})}_initSupabaseAuthClient({autoRefreshToken:t,persistSession:r,detectSessionInUrl:n,storage:s,storageKey:a,flowType:o,lock:l,debug:c},u,d){const h={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new wx({url:this.authUrl.href,headers:Object.assign(Object.assign({},h),u),storageKey:a,autoRefreshToken:t,persistSession:r,detectSessionInUrl:n,storage:s,flowType:o,lock:l,debug:c,fetch:d,hasCustomAuthorizationHeader:"Authorization"in this.headers})}_initRealtimeClient(t){return new t0(this.realtimeUrl.href,Object.assign(Object.assign({},t),{params:Object.assign({apikey:this.supabaseKey},t==null?void 0:t.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((r,n)=>{this._handleTokenChanged(r,"CLIENT",n==null?void 0:n.access_token)})}_handleTokenChanged(t,r,n){(t==="TOKEN_REFRESHED"||t==="SIGNED_IN")&&this.changedAccessToken!==n?this.changedAccessToken=n:t==="SIGNED_OUT"&&(this.realtime.setAuth(),r=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}}const kx=(e,t,r)=>new bx(e,t,r);function _x(){if(typeof window<"u"||typeof process>"u"||process.version===void 0||process.version===null)return!1;const e=process.version.match(/^v(\d+)\./);return e?parseInt(e[1],10)<=18:!1}_x()&&console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");const Nx="https://fbhuktuwetvycjqhkqhr.supabase.co",Sx="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZiaHVrdHV3ZXR2eWNqcWhrcWhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkyMzA5NjUsImV4cCI6MjA3NDgwNjk2NX0.JcRVVEi6nmu160QKkgh9r_gsbgZ02yOHHP1EpGeDGys",he=kx(Nx,Sx);function Cx(){const[e,t]=I.useState(null),[r,n]=I.useState(null),[s,a]=I.useState(!0);I.useEffect(()=>{console.log("useSupabaseAuth: Initializing..."),he.auth.getSession().then(({data:{session:m}})=>{console.log("useSupabaseAuth: Got session:",m?"yes":"no"),t((m==null?void 0:m.user)??null),m!=null&&m.user?(console.log("useSupabaseAuth: Fetching profile for user:",m.user.id),o(m.user.id)):(console.log("useSupabaseAuth: No session, setting loading to false"),a(!1))}).catch(m=>{console.error("useSupabaseAuth: Error getting session:",m),a(!1)});const{data:{subscription:h}}=he.auth.onAuthStateChange(async(m,x)=>{console.log("useSupabaseAuth: Auth state changed:",m),t((x==null?void 0:x.user)??null),x!=null&&x.user?await o(x.user.id):(n(null),a(!1))});return()=>h.unsubscribe()},[]);const o=async h=>{console.log("fetchProfile: Starting for user:",h);try{const m=new Promise((v,g)=>setTimeout(()=>g(new Error("Profile fetch timeout")),1e4)),x=he.from("profiles").select("*").eq("id",h).maybeSingle(),{data:w,error:j}=await Promise.race([x,m]);console.log("fetchProfile: Query completed",{hasData:!!w,hasError:!!j}),j?(console.error("fetchProfile: Error fetching profile:",j),n(null)):w?(console.log("fetchProfile: Profile found:",w.email),n(w)):(console.warn("fetchProfile: Profile not found for user:",h),n(null))}catch(m){console.error("fetchProfile: Exception:",m),n(null)}finally{console.log("fetchProfile: Setting loading to false"),a(!1)}};return{user:e,profile:r,loading:s,signIn:async(h,m)=>{const{data:x,error:w}=await he.auth.signInWithPassword({email:h,password:m});if(w)throw w;return x},signUp:async(h,m,x)=>{const{data:w,error:j}=await he.auth.signUp({email:h,password:m,options:{data:x}});if(j)throw j;return w},signOut:async()=>{const{error:h}=await he.auth.signOut();if(h)throw h},updateProfile:async h=>{if(!e)throw new Error("No user logged in");const{data:m,error:x}=await he.from("profiles").update(h).eq("id",e.id).select().single();if(x)throw x;return n(m),m},isAuthenticated:!!e,setProfile:n}}const jf=I.createContext(void 0),Ex=({children:e})=>{const{user:t,profile:r,loading:n,signIn:s,signOut:a,signUp:o}=Cx(),[l,c]=I.useState([]),[u,d]=I.useState([]),[h,m]=I.useState(!1),x=async(A,f)=>{try{return await s(A,f),!0}catch(k){return console.error("Login error:",k),!1}},w=async()=>{await a()},j=async A=>{try{return await o(A.email,A.password,{name:A.name,role:A.role,department:A.department||void 0,position:A.position||void 0,salary:A.salary||void 0,phone:A.phone||void 0,telegram:A.telegram||void 0}),!0}catch(f){return console.error("Register error:",f),!1}},v=async A=>{const{data:{session:f}}=await he.auth.getSession();if(!f)throw new Error("Not authenticated");const S=await fetch("https://fbhuktuwetvycjqhkqhr.supabase.co/functions/v1/create-user",{method:"POST",headers:{Authorization:`Bearer ${f.access_token}`,"Content-Type":"application/json"},body:JSON.stringify(A)});if(!S.ok){const b=await S.json();throw new Error(b.error||"Failed to create user")}await _()},g=async(A,f)=>{const{error:k}=await he.from("profiles").update(f).eq("id",A);if(k)throw k;await _()},p=async(A,f)=>{const{data:{session:k}}=await he.auth.getSession();if(!k)throw new Error("Not authenticated");const b=await fetch("https://fbhuktuwetvycjqhkqhr.supabase.co/functions/v1/update-user-password",{method:"POST",headers:{Authorization:`Bearer ${k.access_token}`,"Content-Type":"application/json"},body:JSON.stringify({userId:A,password:f})});if(!b.ok){const C=await b.json();throw new Error(C.error||"Failed to update password")}},y=async A=>{const{data:{session:f}}=await he.auth.getSession();if(!f)throw new Error("Not authenticated");const k=`https://fbhuktuwetvycjqhkqhr.supabase.co/functions/v1/delete-user/${A}`,S=await fetch(k,{method:"DELETE",headers:{Authorization:`Bearer ${f.access_token}`,"Content-Type":"application/json"}});if(!S.ok){const b=await S.json();throw new Error(b.error||"Failed to delete user")}await _()},_=async()=>{try{console.log("Fetching users...");const{data:A,error:f}=await he.from("profiles").select("*").order("created_at",{ascending:!1});if(f)console.error("Error fetching users:",f),c([]);else{console.log("Users fetched:",A);const k=(A||[]).map(S=>({...S,createdAt:new Date(S.created_at),updatedAt:new Date(S.updated_at)}));c(k)}}catch(A){console.error("Exception fetching users:",A),c([])}},E=async()=>{try{console.log("Fetching projects...");const{data:A,error:f}=await he.from("projects").select(`
          *,
          manager:profiles!projects_manager_id_fkey(*),
          project_members(
            user_id,
            role,
            profiles(*)
          ),
          project_files(*)
        `).order("created_at",{ascending:!1});if(f)console.error("Error fetching projects:",f),d([]);else{console.log("Projects fetched:",A);const k=(A||[]).map(S=>{var b,C,R,z,Q,se,Z;return{id:S.id,title:S.title,albumType:S.album_type,description:S.description,status:S.status,manager:S.manager,photographers:((C=(b=S.project_members)==null?void 0:b.filter(ie=>ie.role==="photographer"))==null?void 0:C.map(ie=>ie.profiles))||[],designers:((z=(R=S.project_members)==null?void 0:R.filter(ie=>ie.role==="designer"))==null?void 0:z.map(ie=>ie.profiles))||[],deadline:new Date(S.deadline),createdAt:new Date(S.created_at),updatedAt:new Date(S.updated_at),photosCount:((Q=S.project_files)==null?void 0:Q.filter(ie=>ie.file_type.startsWith("image/")).length)||0,designsCount:((se=S.project_files)==null?void 0:se.filter(ie=>ie.file_type.includes("design")||ie.name.toLowerCase().includes("макет")||ie.name.toLowerCase().includes("design")).length)||0,files:((Z=S.project_files)==null?void 0:Z.map(ie=>({id:ie.id,name:ie.name,type:ie.file_type,size:ie.file_size,preview:ie.preview_url,uploadedBy:l.find(Rr=>Rr.id===ie.uploaded_by)||{name:"Unknown"},uploadedAt:new Date(ie.uploaded_at)})))||[]}});d(k)}}catch(A){console.error("Exception fetching projects:",A),d([])}};Ha.useEffect(()=>{r&&(m(!0),Promise.all([_(),E()]).finally(()=>m(!1)))},[r]);const Y={user:r,users:l,projects:u,login:x,logout:w,register:j,addUser:v,updateUser:g,updateUserPassword:p,deleteUser:y,addProject:r?async A=>{var b;const{data:f,error:k}=await he.from("projects").insert({title:A.title,album_type:A.albumType,description:A.description,status:A.status,manager_id:(b=A.manager)==null?void 0:b.id,deadline:A.deadline.toISOString().split("T")[0]}).select().single();if(k)throw k;const S=[...A.photographers.map(C=>({project_id:f.id,user_id:C.id,role:"photographer"})),...A.designers.map(C=>({project_id:f.id,user_id:C.id,role:"designer"}))];if(S.length>0){const{error:C}=await he.from("project_members").insert(S);if(C)throw C}await E()}:async A=>{const f={...A,id:Math.random().toString(36).substr(2,9),createdAt:new Date,updatedAt:new Date,photosCount:0,designsCount:0,files:[]};d(k=>{const S=[...k,f];return localStorage.setItem("projects",JSON.stringify(S)),S})},updateProject:r?async(A,f)=>{const k={};f.title&&(k.title=f.title),f.albumType&&(k.album_type=f.albumType),f.description!==void 0&&(k.description=f.description),f.status&&(k.status=f.status),f.manager&&(k.manager_id=f.manager.id),f.deadline&&(k.deadline=f.deadline.toISOString().split("T")[0]);const{error:S}=await he.from("projects").update(k).eq("id",A);if(S)throw S;if(f.photographers||f.designers){await he.from("project_members").delete().eq("project_id",A);const b=[...(f.photographers||[]).map(C=>({project_id:A,user_id:C.id,role:"photographer"})),...(f.designers||[]).map(C=>({project_id:A,user_id:C.id,role:"designer"}))];if(b.length>0){const{error:C}=await he.from("project_members").insert(b);if(C)throw C}}await E()}:async(A,f)=>{d(k=>{const S=k.map(b=>b.id===A?{...b,...f,updatedAt:new Date,photosCount:f.files?f.files.filter(C=>C.type.startsWith("image/")).length:b.photosCount,designsCount:f.files?f.files.filter(C=>C.type.includes("design")||C.name.toLowerCase().includes("макет")||C.name.toLowerCase().includes("design")).length:b.designsCount}:b);return localStorage.setItem("projects",JSON.stringify(S)),S})},deleteProject:r?async A=>{const{error:f}=await he.from("projects").delete().eq("id",A);if(f)throw f;await E()}:async A=>{d(f=>{const k=f.filter(S=>S.id!==A);return localStorage.setItem("projects",JSON.stringify(k)),k})},addFileToProject:r?async(A,f)=>{const{error:k}=await he.from("project_files").insert({project_id:A,name:f.name,file_type:f.type,file_size:f.size,preview_url:f.preview,file_url:f.preview||"#",uploaded_by:r==null?void 0:r.id});if(k)throw k;await E()}:async(A,f)=>{const k={...f,id:Math.random().toString(36).substr(2,9),uploadedAt:new Date};d(S=>{const b=S.map(C=>{if(C.id===A){const R=[...C.files,k];return{...C,files:R,photosCount:R.filter(z=>z.type.startsWith("image/")).length,designsCount:R.filter(z=>z.type.includes("design")||z.name.toLowerCase().includes("макет")||z.name.toLowerCase().includes("design")).length,updatedAt:new Date}}return C});return localStorage.setItem("projects",JSON.stringify(b)),b})},removeFileFromProject:r?async(A,f)=>{const{error:k}=await he.from("project_files").delete().eq("id",f);if(k)throw k;await E()}:async(A,f)=>{d(k=>{const S=k.map(b=>{if(b.id===A){const C=b.files.filter(R=>R.id!==f);return{...b,files:C,photosCount:C.filter(R=>R.type.startsWith("image/")).length,designsCount:C.filter(R=>R.type.includes("design")||R.name.toLowerCase().includes("макет")||R.name.toLowerCase().includes("design")).length,updatedAt:new Date}}return b});return localStorage.setItem("projects",JSON.stringify(S)),S})},isAuthenticated:!!r,loading:n,dataLoading:h};return i.jsx(jf.Provider,{value:Y,children:e})},Te=()=>{const e=I.useContext(jf);if(e===void 0)throw new Error("useAuth must be used within an AuthProvider");return e};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Px={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),V=(e,t)=>{const r=I.forwardRef(({color:n="currentColor",size:s=24,strokeWidth:a=2,absoluteStrokeWidth:o,className:l="",children:c,...u},d)=>I.createElement("svg",{ref:d,...Px,width:s,height:s,stroke:n,strokeWidth:o?Number(a)*24/Number(s):a,className:["lucide",`lucide-${Tx(e)}`,l].join(" "),...u},[...t.map(([h,m])=>I.createElement(h,m)),...Array.isArray(c)?c:[c]]));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=V("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tu=V("Baby",[["path",{d:"M9 12h.01",key:"157uk2"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"5yv0yz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qs=V("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $t=V("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kr=V("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=V("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix=V("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax=V("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yl=V("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx=V("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Li=V("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zl=V("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kf=V("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bn=V("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _r=V("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _f=V("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mi=V("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx=V("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nf=V("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx=V("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=V("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jo=V("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx=V("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const He=V("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $i=V("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ba=V("Paperclip",[["path",{d:"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",key:"1u3ebp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yn=V("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const st=V("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=V("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ur=V("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dx=V("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx=V("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z",key:"1lpok0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ec=V("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kt=V("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const li=V("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oa=V("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tr=V("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ee=V("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function Sf(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(r=Sf(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function Bx(){for(var e,t,r=0,n="",s=arguments.length;r<s;r++)(e=arguments[r])&&(t=Sf(e))&&(n&&(n+=" "),n+=t);return n}const tc="-",Wx=e=>{const t=Hx(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:n}=e;return{getClassGroupId:o=>{const l=o.split(tc);return l[0]===""&&l.length!==1&&l.shift(),Cf(l,t)||Vx(o)},getConflictingClassGroupIds:(o,l)=>{const c=r[o]||[];return l&&n[o]?[...c,...n[o]]:c}}},Cf=(e,t)=>{var o;if(e.length===0)return t.classGroupId;const r=e[0],n=t.nextPart.get(r),s=n?Cf(e.slice(1),n):void 0;if(s)return s;if(t.validators.length===0)return;const a=e.join(tc);return(o=t.validators.find(({validator:l})=>l(a)))==null?void 0:o.classGroupId},Ou=/^\[(.+)\]$/,Vx=e=>{if(Ou.test(e)){const t=Ou.exec(e)[1],r=t==null?void 0:t.substring(0,t.indexOf(":"));if(r)return"arbitrary.."+r}},Hx=e=>{const{theme:t,classGroups:r}=e,n={nextPart:new Map,validators:[]};for(const s in r)Qo(r[s],n,s,t);return n},Qo=(e,t,r,n)=>{e.forEach(s=>{if(typeof s=="string"){const a=s===""?t:Iu(t,s);a.classGroupId=r;return}if(typeof s=="function"){if(Gx(s)){Qo(s(n),t,r,n);return}t.validators.push({validator:s,classGroupId:r});return}Object.entries(s).forEach(([a,o])=>{Qo(o,Iu(t,a),r,n)})})},Iu=(e,t)=>{let r=e;return t.split(tc).forEach(n=>{r.nextPart.has(n)||r.nextPart.set(n,{nextPart:new Map,validators:[]}),r=r.nextPart.get(n)}),r},Gx=e=>e.isThemeGetter,qx=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,r=new Map,n=new Map;const s=(a,o)=>{r.set(a,o),t++,t>e&&(t=0,n=r,r=new Map)};return{get(a){let o=r.get(a);if(o!==void 0)return o;if((o=n.get(a))!==void 0)return s(a,o),o},set(a,o){r.has(a)?r.set(a,o):s(a,o)}}},Xo="!",Yo=":",Kx=Yo.length,Jx=e=>{const{prefix:t,experimentalParseClassName:r}=e;let n=s=>{const a=[];let o=0,l=0,c=0,u;for(let w=0;w<s.length;w++){let j=s[w];if(o===0&&l===0){if(j===Yo){a.push(s.slice(c,w)),c=w+Kx;continue}if(j==="/"){u=w;continue}}j==="["?o++:j==="]"?o--:j==="("?l++:j===")"&&l--}const d=a.length===0?s:s.substring(c),h=Qx(d),m=h!==d,x=u&&u>c?u-c:void 0;return{modifiers:a,hasImportantModifier:m,baseClassName:h,maybePostfixModifierPosition:x}};if(t){const s=t+Yo,a=n;n=o=>o.startsWith(s)?a(o.substring(s.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:o,maybePostfixModifierPosition:void 0}}if(r){const s=n;n=a=>r({className:a,parseClassName:s})}return n},Qx=e=>e.endsWith(Xo)?e.substring(0,e.length-1):e.startsWith(Xo)?e.substring(1):e,Xx=e=>{const t=Object.fromEntries(e.orderSensitiveModifiers.map(n=>[n,!0]));return n=>{if(n.length<=1)return n;const s=[];let a=[];return n.forEach(o=>{o[0]==="["||t[o]?(s.push(...a.sort(),o),a=[]):a.push(o)}),s.push(...a.sort()),s}},Yx=e=>({cache:qx(e.cacheSize),parseClassName:Jx(e),sortModifiers:Xx(e),...Wx(e)}),Zx=/\s+/,ey=(e,t)=>{const{parseClassName:r,getClassGroupId:n,getConflictingClassGroupIds:s,sortModifiers:a}=t,o=[],l=e.trim().split(Zx);let c="";for(let u=l.length-1;u>=0;u-=1){const d=l[u],{isExternal:h,modifiers:m,hasImportantModifier:x,baseClassName:w,maybePostfixModifierPosition:j}=r(d);if(h){c=d+(c.length>0?" "+c:c);continue}let v=!!j,g=n(v?w.substring(0,j):w);if(!g){if(!v){c=d+(c.length>0?" "+c:c);continue}if(g=n(w),!g){c=d+(c.length>0?" "+c:c);continue}v=!1}const p=a(m).join(":"),y=x?p+Xo:p,_=y+g;if(o.includes(_))continue;o.push(_);const E=s(g,v);for(let N=0;N<E.length;++N){const T=E[N];o.push(y+T)}c=d+(c.length>0?" "+c:c)}return c};function ty(){let e=0,t,r,n="";for(;e<arguments.length;)(t=arguments[e++])&&(r=Ef(t))&&(n&&(n+=" "),n+=r);return n}const Ef=e=>{if(typeof e=="string")return e;let t,r="";for(let n=0;n<e.length;n++)e[n]&&(t=Ef(e[n]))&&(r&&(r+=" "),r+=t);return r};function ry(e,...t){let r,n,s,a=o;function o(c){const u=t.reduce((d,h)=>h(d),e());return r=Yx(u),n=r.cache.get,s=r.cache.set,a=l,l(c)}function l(c){const u=n(c);if(u)return u;const d=ey(c,r);return s(c,d),d}return function(){return a(ty.apply(null,arguments))}}const ge=e=>{const t=r=>r[e]||[];return t.isThemeGetter=!0,t},Pf=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Tf=/^\((?:(\w[\w-]*):)?(.+)\)$/i,ny=/^\d+\/\d+$/,sy=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,iy=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,ay=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,oy=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,ly=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Fr=e=>ny.test(e),W=e=>!!e&&!Number.isNaN(Number(e)),Ft=e=>!!e&&Number.isInteger(Number(e)),Wa=e=>e.endsWith("%")&&W(e.slice(0,-1)),_t=e=>sy.test(e),cy=()=>!0,uy=e=>iy.test(e)&&!ay.test(e),Of=()=>!1,dy=e=>oy.test(e),hy=e=>ly.test(e),fy=e=>!M(e)&&!$(e),my=e=>kn(e,Rf,Of),M=e=>Pf.test(e),fr=e=>kn(e,Lf,uy),Va=e=>kn(e,vy,W),Au=e=>kn(e,If,Of),py=e=>kn(e,Af,hy),Ks=e=>kn(e,Mf,dy),$=e=>Tf.test(e),Ln=e=>_n(e,Lf),gy=e=>_n(e,wy),Ru=e=>_n(e,If),xy=e=>_n(e,Rf),yy=e=>_n(e,Af),Js=e=>_n(e,Mf,!0),kn=(e,t,r)=>{const n=Pf.exec(e);return n?n[1]?t(n[1]):r(n[2]):!1},_n=(e,t,r=!1)=>{const n=Tf.exec(e);return n?n[1]?t(n[1]):r:!1},If=e=>e==="position"||e==="percentage",Af=e=>e==="image"||e==="url",Rf=e=>e==="length"||e==="size"||e==="bg-size",Lf=e=>e==="length",vy=e=>e==="number",wy=e=>e==="family-name",Mf=e=>e==="shadow",jy=()=>{const e=ge("color"),t=ge("font"),r=ge("text"),n=ge("font-weight"),s=ge("tracking"),a=ge("leading"),o=ge("breakpoint"),l=ge("container"),c=ge("spacing"),u=ge("radius"),d=ge("shadow"),h=ge("inset-shadow"),m=ge("text-shadow"),x=ge("drop-shadow"),w=ge("blur"),j=ge("perspective"),v=ge("aspect"),g=ge("ease"),p=ge("animate"),y=()=>["auto","avoid","all","avoid-page","page","left","right","column"],_=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],E=()=>[..._(),$,M],N=()=>["auto","hidden","clip","visible","scroll"],T=()=>["auto","contain","none"],P=()=>[$,M,c],B=()=>[Fr,"full","auto",...P()],D=()=>[Ft,"none","subgrid",$,M],de=()=>["auto",{span:["full",Ft,$,M]},Ft,$,M],pe=()=>[Ft,"auto",$,M],_e=()=>["auto","min","max","fr",$,M],Ne=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],Oe=()=>["start","end","center","stretch","center-safe","end-safe"],Y=()=>["auto",...P()],A=()=>[Fr,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...P()],f=()=>[e,$,M],k=()=>[..._(),Ru,Au,{position:[$,M]}],S=()=>["no-repeat",{repeat:["","x","y","space","round"]}],b=()=>["auto","cover","contain",xy,my,{size:[$,M]}],C=()=>[Wa,Ln,fr],R=()=>["","none","full",u,$,M],z=()=>["",W,Ln,fr],Q=()=>["solid","dashed","dotted","double"],se=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],Z=()=>[W,Wa,Ru,Au],ie=()=>["","none",w,$,M],Rr=()=>["none",W,$,M],Ns=()=>["none",W,$,M],la=()=>[W,$,M],Ss=()=>[Fr,"full",...P()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[_t],breakpoint:[_t],color:[cy],container:[_t],"drop-shadow":[_t],ease:["in","out","in-out"],font:[fy],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[_t],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[_t],shadow:[_t],spacing:["px",W],text:[_t],"text-shadow":[_t],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Fr,M,$,v]}],container:["container"],columns:[{columns:[W,M,$,l]}],"break-after":[{"break-after":y()}],"break-before":[{"break-before":y()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:E()}],overflow:[{overflow:N()}],"overflow-x":[{"overflow-x":N()}],"overflow-y":[{"overflow-y":N()}],overscroll:[{overscroll:T()}],"overscroll-x":[{"overscroll-x":T()}],"overscroll-y":[{"overscroll-y":T()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:B()}],"inset-x":[{"inset-x":B()}],"inset-y":[{"inset-y":B()}],start:[{start:B()}],end:[{end:B()}],top:[{top:B()}],right:[{right:B()}],bottom:[{bottom:B()}],left:[{left:B()}],visibility:["visible","invisible","collapse"],z:[{z:[Ft,"auto",$,M]}],basis:[{basis:[Fr,"full","auto",l,...P()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[W,Fr,"auto","initial","none",M]}],grow:[{grow:["",W,$,M]}],shrink:[{shrink:["",W,$,M]}],order:[{order:[Ft,"first","last","none",$,M]}],"grid-cols":[{"grid-cols":D()}],"col-start-end":[{col:de()}],"col-start":[{"col-start":pe()}],"col-end":[{"col-end":pe()}],"grid-rows":[{"grid-rows":D()}],"row-start-end":[{row:de()}],"row-start":[{"row-start":pe()}],"row-end":[{"row-end":pe()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":_e()}],"auto-rows":[{"auto-rows":_e()}],gap:[{gap:P()}],"gap-x":[{"gap-x":P()}],"gap-y":[{"gap-y":P()}],"justify-content":[{justify:[...Ne(),"normal"]}],"justify-items":[{"justify-items":[...Oe(),"normal"]}],"justify-self":[{"justify-self":["auto",...Oe()]}],"align-content":[{content:["normal",...Ne()]}],"align-items":[{items:[...Oe(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...Oe(),{baseline:["","last"]}]}],"place-content":[{"place-content":Ne()}],"place-items":[{"place-items":[...Oe(),"baseline"]}],"place-self":[{"place-self":["auto",...Oe()]}],p:[{p:P()}],px:[{px:P()}],py:[{py:P()}],ps:[{ps:P()}],pe:[{pe:P()}],pt:[{pt:P()}],pr:[{pr:P()}],pb:[{pb:P()}],pl:[{pl:P()}],m:[{m:Y()}],mx:[{mx:Y()}],my:[{my:Y()}],ms:[{ms:Y()}],me:[{me:Y()}],mt:[{mt:Y()}],mr:[{mr:Y()}],mb:[{mb:Y()}],ml:[{ml:Y()}],"space-x":[{"space-x":P()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":P()}],"space-y-reverse":["space-y-reverse"],size:[{size:A()}],w:[{w:[l,"screen",...A()]}],"min-w":[{"min-w":[l,"screen","none",...A()]}],"max-w":[{"max-w":[l,"screen","none","prose",{screen:[o]},...A()]}],h:[{h:["screen","lh",...A()]}],"min-h":[{"min-h":["screen","lh","none",...A()]}],"max-h":[{"max-h":["screen","lh",...A()]}],"font-size":[{text:["base",r,Ln,fr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[n,$,Va]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Wa,M]}],"font-family":[{font:[gy,M,t]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[s,$,M]}],"line-clamp":[{"line-clamp":[W,"none",$,Va]}],leading:[{leading:[a,...P()]}],"list-image":[{"list-image":["none",$,M]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",$,M]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:f()}],"text-color":[{text:f()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Q(),"wavy"]}],"text-decoration-thickness":[{decoration:[W,"from-font","auto",$,fr]}],"text-decoration-color":[{decoration:f()}],"underline-offset":[{"underline-offset":[W,"auto",$,M]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:P()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",$,M]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",$,M]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:k()}],"bg-repeat":[{bg:S()}],"bg-size":[{bg:b()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Ft,$,M],radial:["",$,M],conic:[Ft,$,M]},yy,py]}],"bg-color":[{bg:f()}],"gradient-from-pos":[{from:C()}],"gradient-via-pos":[{via:C()}],"gradient-to-pos":[{to:C()}],"gradient-from":[{from:f()}],"gradient-via":[{via:f()}],"gradient-to":[{to:f()}],rounded:[{rounded:R()}],"rounded-s":[{"rounded-s":R()}],"rounded-e":[{"rounded-e":R()}],"rounded-t":[{"rounded-t":R()}],"rounded-r":[{"rounded-r":R()}],"rounded-b":[{"rounded-b":R()}],"rounded-l":[{"rounded-l":R()}],"rounded-ss":[{"rounded-ss":R()}],"rounded-se":[{"rounded-se":R()}],"rounded-ee":[{"rounded-ee":R()}],"rounded-es":[{"rounded-es":R()}],"rounded-tl":[{"rounded-tl":R()}],"rounded-tr":[{"rounded-tr":R()}],"rounded-br":[{"rounded-br":R()}],"rounded-bl":[{"rounded-bl":R()}],"border-w":[{border:z()}],"border-w-x":[{"border-x":z()}],"border-w-y":[{"border-y":z()}],"border-w-s":[{"border-s":z()}],"border-w-e":[{"border-e":z()}],"border-w-t":[{"border-t":z()}],"border-w-r":[{"border-r":z()}],"border-w-b":[{"border-b":z()}],"border-w-l":[{"border-l":z()}],"divide-x":[{"divide-x":z()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":z()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...Q(),"hidden","none"]}],"divide-style":[{divide:[...Q(),"hidden","none"]}],"border-color":[{border:f()}],"border-color-x":[{"border-x":f()}],"border-color-y":[{"border-y":f()}],"border-color-s":[{"border-s":f()}],"border-color-e":[{"border-e":f()}],"border-color-t":[{"border-t":f()}],"border-color-r":[{"border-r":f()}],"border-color-b":[{"border-b":f()}],"border-color-l":[{"border-l":f()}],"divide-color":[{divide:f()}],"outline-style":[{outline:[...Q(),"none","hidden"]}],"outline-offset":[{"outline-offset":[W,$,M]}],"outline-w":[{outline:["",W,Ln,fr]}],"outline-color":[{outline:f()}],shadow:[{shadow:["","none",d,Js,Ks]}],"shadow-color":[{shadow:f()}],"inset-shadow":[{"inset-shadow":["none",h,Js,Ks]}],"inset-shadow-color":[{"inset-shadow":f()}],"ring-w":[{ring:z()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:f()}],"ring-offset-w":[{"ring-offset":[W,fr]}],"ring-offset-color":[{"ring-offset":f()}],"inset-ring-w":[{"inset-ring":z()}],"inset-ring-color":[{"inset-ring":f()}],"text-shadow":[{"text-shadow":["none",m,Js,Ks]}],"text-shadow-color":[{"text-shadow":f()}],opacity:[{opacity:[W,$,M]}],"mix-blend":[{"mix-blend":[...se(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":se()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[W]}],"mask-image-linear-from-pos":[{"mask-linear-from":Z()}],"mask-image-linear-to-pos":[{"mask-linear-to":Z()}],"mask-image-linear-from-color":[{"mask-linear-from":f()}],"mask-image-linear-to-color":[{"mask-linear-to":f()}],"mask-image-t-from-pos":[{"mask-t-from":Z()}],"mask-image-t-to-pos":[{"mask-t-to":Z()}],"mask-image-t-from-color":[{"mask-t-from":f()}],"mask-image-t-to-color":[{"mask-t-to":f()}],"mask-image-r-from-pos":[{"mask-r-from":Z()}],"mask-image-r-to-pos":[{"mask-r-to":Z()}],"mask-image-r-from-color":[{"mask-r-from":f()}],"mask-image-r-to-color":[{"mask-r-to":f()}],"mask-image-b-from-pos":[{"mask-b-from":Z()}],"mask-image-b-to-pos":[{"mask-b-to":Z()}],"mask-image-b-from-color":[{"mask-b-from":f()}],"mask-image-b-to-color":[{"mask-b-to":f()}],"mask-image-l-from-pos":[{"mask-l-from":Z()}],"mask-image-l-to-pos":[{"mask-l-to":Z()}],"mask-image-l-from-color":[{"mask-l-from":f()}],"mask-image-l-to-color":[{"mask-l-to":f()}],"mask-image-x-from-pos":[{"mask-x-from":Z()}],"mask-image-x-to-pos":[{"mask-x-to":Z()}],"mask-image-x-from-color":[{"mask-x-from":f()}],"mask-image-x-to-color":[{"mask-x-to":f()}],"mask-image-y-from-pos":[{"mask-y-from":Z()}],"mask-image-y-to-pos":[{"mask-y-to":Z()}],"mask-image-y-from-color":[{"mask-y-from":f()}],"mask-image-y-to-color":[{"mask-y-to":f()}],"mask-image-radial":[{"mask-radial":[$,M]}],"mask-image-radial-from-pos":[{"mask-radial-from":Z()}],"mask-image-radial-to-pos":[{"mask-radial-to":Z()}],"mask-image-radial-from-color":[{"mask-radial-from":f()}],"mask-image-radial-to-color":[{"mask-radial-to":f()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":_()}],"mask-image-conic-pos":[{"mask-conic":[W]}],"mask-image-conic-from-pos":[{"mask-conic-from":Z()}],"mask-image-conic-to-pos":[{"mask-conic-to":Z()}],"mask-image-conic-from-color":[{"mask-conic-from":f()}],"mask-image-conic-to-color":[{"mask-conic-to":f()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:k()}],"mask-repeat":[{mask:S()}],"mask-size":[{mask:b()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",$,M]}],filter:[{filter:["","none",$,M]}],blur:[{blur:ie()}],brightness:[{brightness:[W,$,M]}],contrast:[{contrast:[W,$,M]}],"drop-shadow":[{"drop-shadow":["","none",x,Js,Ks]}],"drop-shadow-color":[{"drop-shadow":f()}],grayscale:[{grayscale:["",W,$,M]}],"hue-rotate":[{"hue-rotate":[W,$,M]}],invert:[{invert:["",W,$,M]}],saturate:[{saturate:[W,$,M]}],sepia:[{sepia:["",W,$,M]}],"backdrop-filter":[{"backdrop-filter":["","none",$,M]}],"backdrop-blur":[{"backdrop-blur":ie()}],"backdrop-brightness":[{"backdrop-brightness":[W,$,M]}],"backdrop-contrast":[{"backdrop-contrast":[W,$,M]}],"backdrop-grayscale":[{"backdrop-grayscale":["",W,$,M]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[W,$,M]}],"backdrop-invert":[{"backdrop-invert":["",W,$,M]}],"backdrop-opacity":[{"backdrop-opacity":[W,$,M]}],"backdrop-saturate":[{"backdrop-saturate":[W,$,M]}],"backdrop-sepia":[{"backdrop-sepia":["",W,$,M]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":P()}],"border-spacing-x":[{"border-spacing-x":P()}],"border-spacing-y":[{"border-spacing-y":P()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",$,M]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[W,"initial",$,M]}],ease:[{ease:["linear","initial",g,$,M]}],delay:[{delay:[W,$,M]}],animate:[{animate:["none",p,$,M]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[j,$,M]}],"perspective-origin":[{"perspective-origin":E()}],rotate:[{rotate:Rr()}],"rotate-x":[{"rotate-x":Rr()}],"rotate-y":[{"rotate-y":Rr()}],"rotate-z":[{"rotate-z":Rr()}],scale:[{scale:Ns()}],"scale-x":[{"scale-x":Ns()}],"scale-y":[{"scale-y":Ns()}],"scale-z":[{"scale-z":Ns()}],"scale-3d":["scale-3d"],skew:[{skew:la()}],"skew-x":[{"skew-x":la()}],"skew-y":[{"skew-y":la()}],transform:[{transform:[$,M,"","none","gpu","cpu"]}],"transform-origin":[{origin:E()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Ss()}],"translate-x":[{"translate-x":Ss()}],"translate-y":[{"translate-y":Ss()}],"translate-z":[{"translate-z":Ss()}],"translate-none":["translate-none"],accent:[{accent:f()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:f()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",$,M]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":P()}],"scroll-mx":[{"scroll-mx":P()}],"scroll-my":[{"scroll-my":P()}],"scroll-ms":[{"scroll-ms":P()}],"scroll-me":[{"scroll-me":P()}],"scroll-mt":[{"scroll-mt":P()}],"scroll-mr":[{"scroll-mr":P()}],"scroll-mb":[{"scroll-mb":P()}],"scroll-ml":[{"scroll-ml":P()}],"scroll-p":[{"scroll-p":P()}],"scroll-px":[{"scroll-px":P()}],"scroll-py":[{"scroll-py":P()}],"scroll-ps":[{"scroll-ps":P()}],"scroll-pe":[{"scroll-pe":P()}],"scroll-pt":[{"scroll-pt":P()}],"scroll-pr":[{"scroll-pr":P()}],"scroll-pb":[{"scroll-pb":P()}],"scroll-pl":[{"scroll-pl":P()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",$,M]}],fill:[{fill:["none",...f()]}],"stroke-w":[{stroke:[W,Ln,fr,Va]}],stroke:[{stroke:["none",...f()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},by=ry(jy);function Nn(...e){return by(Bx(e))}function U({variant:e="primary",size:t="md",className:r,children:n,...s}){const a="inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",o={primary:"bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-sm",secondary:"bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500",outline:"border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-gray-500",ghost:"text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:ring-gray-500"},l={sm:"px-3 py-1.5 text-sm",md:"px-4 py-2 text-sm",lg:"px-6 py-3 text-base"};return i.jsx("button",{className:Nn(a,o[e],l[t],r),...s,children:n})}function K({children:e,className:t,onClick:r}){return i.jsx("div",{className:Nn("bg-white rounded-xl shadow-sm border border-gray-100 p-6 transition-all duration-200",r&&"cursor-pointer hover:shadow-md hover:border-gray-200",t),onClick:r,children:e})}function je({children:e,className:t}){return i.jsx("div",{className:Nn("mb-4",t),children:e})}function be({children:e,className:t}){return i.jsx("h3",{className:Nn("text-lg font-semibold text-gray-900",t),children:e})}function J({children:e,className:t}){return i.jsx("div",{className:Nn("text-gray-600",t),children:e})}function ky(){I.useState("");const[e,t]=I.useState(""),[r,n]=I.useState(""),[s,a]=I.useState(!1),[o,l]=I.useState(!1),[c,u]=I.useState(""),{login:d}=Te(),h=async m=>{m.preventDefault(),l(!0),u("");try{await d(e,r)||u("Неверный логин или пароль")}catch(x){u(x instanceof Error?x.message:"Произошла ошибка")}finally{l(!1)}};return i.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4",children:i.jsxs("div",{className:"w-full max-w-md space-y-6",children:[i.jsxs("div",{className:"text-center",children:[i.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4",children:i.jsx(Mx,{className:"h-8 w-8 text-white"})}),i.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"PhotoAlbums"}),i.jsx("p",{className:"text-gray-600 mt-2",children:"Вход в систему"})]}),i.jsx(K,{children:i.jsxs("form",{onSubmit:h,className:"space-y-4",children:[i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Логин"}),i.jsx("input",{type:"text",value:e,onChange:m=>t(m.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"",required:!0})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Пароль"}),i.jsxs("div",{className:"relative",children:[i.jsx("input",{type:s?"text":"password",value:r,onChange:m=>n(m.target.value),className:"w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"",required:!0}),i.jsx("button",{type:"button",onClick:()=>a(!s),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600",children:s?i.jsx(kf,{className:"h-4 w-4"}):i.jsx(bn,{className:"h-4 w-4"})})]})]}),c&&i.jsx("div",{className:"text-red-600 text-sm bg-red-50 p-3 rounded-lg",children:c}),i.jsx(U,{type:"submit",className:"w-full",disabled:o,children:o?"Вход...":"Войти"})]})})]})})}function _y({activeTab:e,onTabChange:t}){const{user:r}=Te(),[n,s]=I.useState(!1),o=(()=>{try{const c=localStorage.getItem("messenger_chats");if(c)return JSON.parse(c).reduce((d,h)=>{const m=h.unreadCount&&h.unreadCount[r==null?void 0:r.id]?h.unreadCount[r.id]:0;return d+m},0)}catch(c){console.error("Ошибка при подсчете непрочитанных сообщений:",c)}return 0})(),l=()=>{const c=[{id:"dashboard",label:"Главная",icon:Lx},{id:"projects",label:"Проекты",icon:Mi},{id:"reports",label:"Отчеты",icon:He}],u={photographer:[],designer:[],admin:[{id:"add-employee",label:"Добавить сотрудника",icon:li}]},d=[{id:"employees",label:"Сотрудники",icon:Tr},{id:"salary",label:"Зарплаты",icon:Li},{id:"calendar",label:"Календарь",icon:$t},{id:"messenger",label:"Мессенджер",icon:He,badge:o},{id:"script",label:"Скрипт",icon:_r}];return[...c,...u[(r==null?void 0:r.role)||"photographer"]||[],...d]};return i.jsxs(i.Fragment,{children:[n&&i.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden",onClick:()=>s(!1)}),i.jsx("button",{onClick:()=>s(!n),className:"md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md border border-gray-200",children:n?i.jsx(Ee,{className:"w-5 h-5"}):i.jsx(zx,{className:"w-5 h-5"})}),i.jsxs("div",{className:`
        bg-white border-r border-gray-200 h-full flex flex-col transition-all duration-300 z-50
        fixed md:relative
        ${n?"translate-x-0":"-translate-x-full md:translate-x-0"}
        w-64 md:w-64
      `,children:[i.jsx("div",{className:"p-4 md:p-6 border-b border-gray-200",children:i.jsxs("div",{className:"flex items-center space-x-3",children:[i.jsx("div",{className:"bg-blue-600 w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center",children:i.jsx(kr,{className:"h-4 w-4 md:h-6 md:w-6 text-white"})}),i.jsxs("div",{children:[i.jsx("h1",{className:"text-lg md:text-xl font-bold text-gray-900",children:"PhotoAlbums"}),i.jsx("p",{className:"text-xs md:text-sm text-gray-500",children:"Управление проектами"})]})]})}),i.jsx("nav",{className:"flex-1 p-3 md:p-4 overflow-y-auto",children:i.jsx("ul",{className:"space-y-1",children:l().map(c=>{const u=c.icon;return i.jsx("li",{children:i.jsxs("button",{onClick:()=>{t(c.id),s(!1)},className:Nn("w-full flex items-center space-x-3 px-3 py-2.5 md:py-2 rounded-lg text-left transition-colors relative",e===c.id?"bg-blue-50 text-blue-700 border-blue-200":"text-gray-600 hover:bg-gray-50 hover:text-gray-900",(r==null?void 0:r.role)!=="admin"&&c.id==="add-employee"?"opacity-50 cursor-not-allowed":""),disabled:(r==null?void 0:r.role)!=="admin"&&c.id==="add-employee",children:[i.jsx(u,{className:"h-5 w-5 flex-shrink-0"}),i.jsx("span",{className:"font-medium text-sm md:text-base",children:c.label}),c.badge&&c.badge>0&&i.jsx("span",{className:"bg-red-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center ml-auto",children:c.badge>99?"99+":c.badge})]})},c.id)})})}),i.jsx("div",{className:"p-3 md:p-4 border-t border-gray-200",children:i.jsxs("div",{className:"flex items-center space-x-3",children:[i.jsx("img",{src:(r==null?void 0:r.avatar)||"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop",alt:r==null?void 0:r.name,className:"w-8 h-8 md:w-10 md:h-10 rounded-full object-cover flex-shrink-0"}),i.jsxs("div",{className:"flex-1 min-w-0",children:[i.jsx("p",{className:"font-medium text-gray-900 truncate text-sm md:text-base",children:r==null?void 0:r.name}),i.jsx("p",{className:"text-xs md:text-sm text-gray-500 capitalize",children:r==null?void 0:r.role})]})]})})]})]})}function Ny(){const{user:e,logout:t}=Te();return i.jsx("header",{className:"bg-white border-b border-gray-200 px-4 md:px-6 py-3 md:py-4",children:i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsx("div",{className:"w-10 md:w-0"}),i.jsx("div",{className:"flex-1 max-w-lg mx-4 md:mx-0",children:i.jsxs("div",{className:"relative",children:[i.jsx(ur,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"}),i.jsx("input",{type:"text",placeholder:"Поиск проектов, файлов, пользователей...",className:"w-full pl-10 pr-4 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]})}),i.jsxs("div",{className:"flex items-center space-x-2 md:space-x-4",children:[i.jsxs("div",{className:"flex items-center space-x-2 md:space-x-3",children:[i.jsx("img",{src:(e==null?void 0:e.avatar)||"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop",alt:e==null?void 0:e.name,className:"w-6 h-6 md:w-8 md:h-8 rounded-full object-cover"}),i.jsxs("div",{className:"hidden lg:block",children:[i.jsx("p",{className:"text-sm font-medium text-gray-900 truncate max-w-32",children:e==null?void 0:e.name}),i.jsx("p",{className:"text-xs text-gray-500 capitalize",children:e==null?void 0:e.role})]})]}),i.jsx(U,{variant:"ghost",size:"sm",onClick:t,className:"text-gray-500 hover:text-red-600",children:i.jsx($x,{className:"h-4 w-4 md:h-5 md:w-5"})})]})]})})}function Lu(){const{user:e}=Te(),t=()=>{const a=new Date().getHours();let o="Добро пожаловать";return a<12?o="Доброе утро":a<18?o="Добрый день":o="Добрый вечер",`${o}, ${e==null?void 0:e.name}!`},r=()=>{switch(e==null?void 0:e.role){case"photographer":return{title:"Руководство для фотографа",sections:[{title:"Ваши основные задачи:",items:['Просматривать назначенные вам проекты в разделе "Проекты"','Загружать фотографии для проектов через "Загрузить фото"','Просматривать свою галерею в разделе "Моя галерея"',"Отслеживать дедлайны в календаре"]},{title:"Как работать с проектами:",items:['1. Перейдите в раздел "Проекты" - там вы увидите все проекты, где вы назначены фотографом',"2. Выберите проект и ознакомьтесь с техническим заданием",'3. После съемки загрузите фотографии через "Загрузить фото"',"4. Выберите нужный проект и загрузите все отснятые материалы","5. Уведомите менеджера о завершении съемки"]}]};case"designer":return{title:"Руководство для дизайнера",sections:[{title:"Ваши основные задачи:",items:["Работать с проектами, где вы назначены дизайнером","Создавать макеты альбомов на основе загруженных фотографий",'Использовать готовые шаблоны из раздела "Шаблоны"','Загружать готовые макеты через "Дизайн-макеты"']},{title:"Рабочий процесс:",items:['1. Проверяйте раздел "Проекты" на наличие новых заданий',"2. Дождитесь загрузки фотографий от фотографа","3. Скачайте фотографии и создайте макеты альбома","4. Загрузите готовые макеты через соответствующий раздел","5. Отправьте проект на согласование менеджеру"]}]};case"admin":return{title:"Руководство для менеджера",sections:[{title:"Управление проектами:",items:['Создавайте новые проекты через кнопку "Создать проект"',"Назначайте фотографов и дизайнеров на проекты","Контролируйте сроки выполнения через календарь","Отслеживайте статус всех проектов"]},{title:"Управление персоналом:",items:['Добавляйте новых сотрудников через "Добавить сотрудника"','Редактируйте информацию о сотрудниках в разделе "Сотрудники"','Просматривайте зарплаты в разделе "Зарплаты"',"Связывайтесь с сотрудниками через контактную информацию"]}]};default:return{title:"Общее руководство",sections:[]}}},n=[{title:"Общие функции для всех сотрудников:",items:['Просматривайте информацию о коллегах в разделе "Сотрудники"','Проверяйте зарплатную информацию в разделе "Зарплаты"','Планируйте события в "Календаре" - все могут добавлять события',"Используйте поиск для быстрого нахождения проектов и сотрудников","Связывайтесь с коллегами через контактную информацию"]},{title:"Работа с календарем:",items:["Кликните на любую дату для просмотра событий",'Добавляйте новые события через кнопку "Добавить событие"',"Выбирайте тип события: встреча, фотосессия, дизайн, дедлайн","Все сотрудники видят события, добавленные коллегами","Удалять можно только свои события (админы могут удалять любые)"]},{title:"Контакты и связь:",items:['В разделах "Сотрудники" и "Зарплаты" есть кнопка "Связаться"',"Кликните на email для отправки письма","Кликните на телефон для звонка","Вся контактная информация доступна всем сотрудникам"]},{title:"Поиск и фильтрация:",items:["Используйте поиск в верхней части страницы","В проектах можно искать по названию и описанию","В сотрудниках поиск работает по имени, email и отделу","Фильтруйте проекты по статусу для удобства"]}],s=r();return i.jsxs("div",{className:"p-4 md:p-6 space-y-4 md:space-y-6",children:[i.jsxs("div",{className:"text-center mb-8",children:[i.jsx("h1",{className:"text-2xl md:text-3xl font-bold text-gray-900 mb-2",children:t()}),i.jsx("p",{className:"text-sm md:text-base text-gray-600",children:"Добро пожаловать в корпоративную платформу управления фотоальбомами"})]}),i.jsxs(K,{children:[i.jsx(je,{children:i.jsxs(be,{className:"flex items-center text-lg md:text-xl",children:[i.jsx(kr,{className:"h-6 w-6 mr-2 text-blue-600"}),s.title]})}),i.jsx(J,{children:i.jsx("div",{className:"space-y-4 md:space-y-6",children:s.sections.map((a,o)=>i.jsxs("div",{children:[i.jsx("h3",{className:"text-base md:text-lg font-semibold text-gray-900 mb-3",children:a.title}),i.jsx("ul",{className:"space-y-2",children:a.items.map((l,c)=>i.jsxs("li",{className:"flex items-start",children:[i.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"}),i.jsx("span",{className:"text-sm md:text-base text-gray-700",children:l})]},c))})]},o))})})]}),n.map((a,o)=>i.jsxs(K,{children:[i.jsx(je,{children:i.jsxs(be,{className:"flex items-center text-lg md:text-xl",children:[o===0&&i.jsx(Tr,{className:"h-5 w-5 mr-2 text-green-600"}),o===1&&i.jsx($t,{className:"h-5 w-5 mr-2 text-purple-600"}),o===2&&i.jsx(He,{className:"h-5 w-5 mr-2 text-orange-600"}),o===3&&i.jsx(ur,{className:"h-5 w-5 mr-2 text-indigo-600"}),a.title]})}),i.jsx(J,{children:i.jsx("ul",{className:"space-y-2",children:a.items.map((l,c)=>i.jsxs("li",{className:"flex items-start",children:[i.jsx("div",{className:"w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"}),i.jsx("span",{className:"text-sm md:text-base text-gray-700",children:l})]},c))})})]},o)),i.jsxs(K,{children:[i.jsx(je,{children:i.jsxs(be,{className:"flex items-center text-lg md:text-xl",children:[i.jsx(Mi,{className:"h-5 w-5 mr-2 text-blue-600"}),"Быстрая навигация"]})}),i.jsx(J,{children:i.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4",children:[i.jsxs("div",{className:"flex items-center p-3 bg-blue-50 rounded-lg",children:[i.jsx(Mi,{className:"h-6 w-6 md:h-8 md:w-8 text-blue-600 mr-3 flex-shrink-0"}),i.jsxs("div",{children:[i.jsx("h4",{className:"font-medium text-gray-900 text-sm md:text-base",children:"Проекты"}),i.jsx("p",{className:"text-xs md:text-sm text-gray-600",children:"Управление проектами"})]})]}),i.jsxs("div",{className:"flex items-center p-3 bg-green-50 rounded-lg",children:[i.jsx(Tr,{className:"h-6 w-6 md:h-8 md:w-8 text-green-600 mr-3 flex-shrink-0"}),i.jsxs("div",{children:[i.jsx("h4",{className:"font-medium text-gray-900 text-sm md:text-base",children:"Сотрудники"}),i.jsx("p",{className:"text-xs md:text-sm text-gray-600",children:"Контакты коллег"})]})]}),i.jsxs("div",{className:"flex items-center p-3 bg-purple-50 rounded-lg",children:[i.jsx($t,{className:"h-6 w-6 md:h-8 md:w-8 text-purple-600 mr-3 flex-shrink-0"}),i.jsxs("div",{children:[i.jsx("h4",{className:"font-medium text-gray-900 text-sm md:text-base",children:"Календарь"}),i.jsx("p",{className:"text-xs md:text-sm text-gray-600",children:"Планирование событий"})]})]}),i.jsxs("div",{className:"flex items-center p-3 bg-yellow-50 rounded-lg",children:[i.jsx(Li,{className:"h-6 w-6 md:h-8 md:w-8 text-yellow-600 mr-3 flex-shrink-0"}),i.jsxs("div",{children:[i.jsx("h4",{className:"font-medium text-gray-900 text-sm md:text-base",children:"Зарплаты"}),i.jsx("p",{className:"text-xs md:text-sm text-gray-600",children:"Информация о выплатах"})]})]}),i.jsxs("div",{className:"flex items-center p-3 bg-indigo-50 rounded-lg",children:[i.jsx(kt,{className:"h-6 w-6 md:h-8 md:w-8 text-indigo-600 mr-3 flex-shrink-0"}),i.jsxs("div",{children:[i.jsx("h4",{className:"font-medium text-gray-900 text-sm md:text-base",children:"Загрузка"}),i.jsx("p",{className:"text-xs md:text-sm text-gray-600",children:"Файлы и материалы"})]})]}),i.jsxs("div",{className:"flex items-center p-3 bg-red-50 rounded-lg",children:[i.jsx(He,{className:"h-6 w-6 md:h-8 md:w-8 text-red-600 mr-3 flex-shrink-0"}),i.jsxs("div",{children:[i.jsx("h4",{className:"font-medium text-gray-900 text-sm md:text-base",children:"Скрипт"}),i.jsx("p",{className:"text-xs md:text-sm text-gray-600",children:"Общение с клиентами"})]})]})]})})]}),i.jsxs(K,{children:[i.jsx(je,{children:i.jsxs(be,{className:"flex items-center text-lg md:text-xl",children:[i.jsx(Yn,{className:"h-5 w-5 mr-2 text-green-600"}),"Нужна помощь?"]})}),i.jsx(J,{children:i.jsxs("div",{className:"text-center",children:[i.jsx("p",{className:"text-sm md:text-base text-gray-600 mb-4",children:"Если у вас остались вопросы по работе с системой, обратитесь к администратору"}),i.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6",children:[i.jsxs("div",{className:"flex items-center",children:[i.jsx(Jo,{className:"h-4 w-4 text-gray-500 mr-2"}),i.jsx("span",{className:"text-sm text-gray-600",children:"admin@photoalbums.com"})]}),i.jsxs("div",{className:"flex items-center",children:[i.jsx(Yn,{className:"h-4 w-4 text-gray-500 mr-2"}),i.jsx("span",{className:"text-sm text-gray-600",children:"+7 (495) 123-45-67"})]})]})]})})]})]})}function Sy({isOpen:e,onClose:t,onSave:r}){const{user:n,users:s}=Te(),[a,o]=I.useState({title:"",albumType:"",description:"",managerId:(n==null?void 0:n.id)||"",photographerIds:[],designerIds:[],deadline:""}),[l,c]=I.useState(!1),u=["Свадебный альбом","Выпускной альбом","Детский альбом","Корпоративный альбом","Семейный альбом","Портретная съемка"],d=s.filter(v=>v.role==="photographer"),h=s.filter(v=>v.role==="designer"),m=s.filter(v=>v.role==="admin"),x=async v=>{v.preventDefault(),c(!0);const g=s.find(E=>E.id===a.managerId),p=s.filter(E=>a.photographerIds.includes(E.id)),y=s.filter(E=>a.designerIds.includes(E.id)),_={title:a.title,albumType:a.albumType,description:a.description,status:"planning",manager:g||void 0,photographers:p,designers:y,deadline:new Date(a.deadline),photosCount:0,designsCount:0,files:[]};await r(_),c(!1),o({title:"",albumType:"",description:"",managerId:(n==null?void 0:n.id)||"",photographerIds:[],designerIds:[],deadline:""}),t()},w=v=>{o(g=>({...g,[v.target.name]:v.target.value}))},j=(v,g)=>{o(p=>({...p,[v]:p[v].includes(g)?p[v].filter(y=>y!==g):[...p[v],g]}))};return e?i.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:i.jsxs("div",{className:"bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-auto",children:[i.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200",children:[i.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:"Создать новый проект"}),i.jsx("button",{onClick:t,className:"text-gray-400 hover:text-gray-600 transition-colors",children:i.jsx(Ee,{className:"h-6 w-6"})})]}),i.jsxs("form",{onSubmit:x,className:"p-6 space-y-4",children:[i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Название проекта *"}),i.jsx("input",{type:"text",name:"title",value:a.title,onChange:w,required:!0,className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"Например: Свадебный альбом Анны и Михаила"})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Тип альбома *"}),i.jsxs("select",{name:"albumType",value:a.albumType,onChange:w,required:!0,className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",children:[i.jsx("option",{value:"",children:"Выберите тип альбома"}),u.map(v=>i.jsx("option",{value:v,children:v},v))]})]})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Описание проекта"}),i.jsx("textarea",{name:"description",value:a.description,onChange:w,rows:3,className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"Опишите детали проекта, особые требования или пожелания клиента"})]}),i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Менеджер *"}),i.jsxs("select",{name:"managerId",value:a.managerId,onChange:w,required:!0,className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",children:[i.jsx("option",{value:"",children:"Выберите менеджера"}),m.map(v=>i.jsx("option",{value:v.id,children:v.name},v.id))]})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Фотографы"}),i.jsx("div",{className:"space-y-2 max-h-32 overflow-y-auto border border-gray-300 rounded-lg p-2",children:d.map(v=>i.jsxs("label",{className:"flex items-center space-x-2 cursor-pointer",children:[i.jsx("input",{type:"checkbox",checked:a.photographerIds.includes(v.id),onChange:()=>j("photographerIds",v.id),className:"rounded border-gray-300 text-blue-600 focus:ring-blue-500"}),i.jsx("span",{className:"text-sm text-gray-700",children:v.name})]},v.id))})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Дизайнеры"}),i.jsx("div",{className:"space-y-2 max-h-32 overflow-y-auto border border-gray-300 rounded-lg p-2",children:h.map(v=>i.jsxs("label",{className:"flex items-center space-x-2 cursor-pointer",children:[i.jsx("input",{type:"checkbox",checked:a.designerIds.includes(v.id),onChange:()=>j("designerIds",v.id),className:"rounded border-gray-300 text-blue-600 focus:ring-blue-500"}),i.jsx("span",{className:"text-sm text-gray-700",children:v.name})]},v.id))})]})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Дата завершения *"}),i.jsx("input",{type:"date",name:"deadline",value:a.deadline,onChange:w,required:!0,min:new Date().toISOString().split("T")[0],className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),i.jsxs("div",{className:"flex justify-end space-x-3 pt-4",children:[i.jsx(U,{type:"button",variant:"outline",onClick:t,children:"Отмена"}),i.jsx(U,{type:"submit",disabled:l,children:l?"Создание...":"Создать проект"})]})]})]})}):null}function Mu({onProjectSelect:e}){const{user:t,users:r,projects:n,addProject:s}=Te(),[a,o]=I.useState(""),[l,c]=I.useState("all"),[u,d]=I.useState(!1),h=v=>{var g;return t?!!(t.role==="admin"||((g=v.manager)==null?void 0:g.id)===t.id||t.role==="photographer"&&v.photographers.some(p=>p.id===t.id)||t.role==="designer"&&v.designers.some(p=>p.id===t.id)):!1},m=v=>t?t.role==="admin"?!0:h(v):!1,x=v=>{const g={planning:{label:"Планирование",color:"bg-gray-100 text-gray-800",icon:Yl},"in-progress":{label:"В работе",color:"bg-blue-100 text-blue-800",icon:kr},review:{label:"На проверке",color:"bg-yellow-100 text-yellow-800",icon:$i},completed:{label:"Завершен",color:"bg-green-100 text-green-800",icon:bf}};return g[v]||g.planning},w=n.filter(v=>{const g=v.title.toLowerCase().includes(a.toLowerCase())||v.description.toLowerCase().includes(a.toLowerCase()),p=l==="all"||v.status===l;return g&&p&&m(v)}),j=async v=>{s(v)};return i.jsxs("div",{className:"p-4 md:p-6 space-y-4 md:space-y-6",children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("div",{children:[i.jsx("h1",{className:"text-2xl md:text-3xl font-bold text-gray-900",children:"Проекты"}),i.jsx("p",{className:"text-sm md:text-base text-gray-600 mt-1",children:"Управляйте вашими проектами фотоальбомов"})]}),i.jsxs(U,{onClick:()=>d(!0),size:"sm",className:"md:text-base",children:[i.jsx(st,{className:"h-4 w-4 mr-2"}),i.jsx("span",{className:"hidden sm:inline",children:"Создать проект"}),i.jsx("span",{className:"sm:hidden",children:"Создать"})]})]}),i.jsx(K,{children:i.jsx(J,{className:"p-4",children:i.jsxs("div",{className:"flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4",children:[i.jsxs("div",{className:"flex-1 relative",children:[i.jsx(ur,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"}),i.jsx("input",{type:"text",placeholder:"Поиск проектов...",value:a,onChange:v=>o(v.target.value),className:"w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),i.jsxs("div",{className:"flex items-center space-x-2 sm:flex-shrink-0",children:[i.jsx(_f,{className:"h-4 w-4 text-gray-500"}),i.jsxs("select",{value:l,onChange:v=>c(v.target.value),className:"border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",children:[i.jsx("option",{value:"all",children:"Все статусы"}),i.jsx("option",{value:"planning",children:"Планирование"}),i.jsx("option",{value:"in-progress",children:"В работе"}),i.jsx("option",{value:"review",children:"На проверке"}),i.jsx("option",{value:"completed",children:"Завершен"})]})]})]})})}),i.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6",children:w.map(v=>{var y;const g=x(v.status),p=g.icon;return i.jsxs(K,{className:`transition-all duration-200 ${h(v)?"hover:shadow-lg cursor-pointer":"opacity-75 cursor-not-allowed"}`,onClick:()=>h(v)&&(e==null?void 0:e(v.id)),children:[i.jsx(je,{children:i.jsxs("div",{className:"flex items-start justify-between",children:[i.jsxs("div",{className:"flex-1",children:[i.jsxs("div",{className:"flex items-center space-x-2 mb-2",children:[i.jsx(be,{className:"text-base md:text-lg truncate",children:v.title}),!h(v)&&i.jsx("span",{className:"px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full",children:"Только просмотр"})]}),i.jsx("p",{className:"text-sm font-medium text-blue-600 mb-1",children:v.albumType}),i.jsx("p",{className:"text-gray-600 text-sm line-clamp-2",children:v.description})]}),i.jsxs("span",{className:`px-2 md:px-3 py-1 rounded-full text-xs font-medium flex items-center flex-shrink-0 ml-2 ${g.color}`,children:[i.jsx(p,{className:"h-3 w-3 mr-1"}),i.jsx("span",{className:"hidden sm:inline",children:g.label})]})]})}),i.jsx(J,{children:i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{className:"space-y-2 text-sm",children:[i.jsxs("div",{className:"flex items-center space-x-1",children:[i.jsx(oa,{className:"h-4 w-4 text-gray-400"}),i.jsx("span",{className:"text-gray-500",children:"Менеджер:"}),i.jsx("span",{className:"text-gray-600 truncate",children:((y=v.manager)==null?void 0:y.name)||"Не назначен"})]}),i.jsxs("div",{className:"flex items-center space-x-1",children:[i.jsx(kr,{className:"h-4 w-4 text-gray-400"}),i.jsx("span",{className:"text-gray-500",children:"Фотографы:"}),i.jsx("span",{className:"text-gray-600 truncate",children:v.photographers.length>0?v.photographers.map(_=>_.name).join(", "):"Не назначены"})]}),i.jsxs("div",{className:"flex items-center space-x-1",children:[i.jsx($i,{className:"h-4 w-4 text-gray-400"}),i.jsx("span",{className:"text-gray-500",children:"Дизайнеры:"}),i.jsx("span",{className:"text-gray-600 truncate",children:v.designers.length>0?v.designers.map(_=>_.name).join(", "):"Не назначены"})]})]}),i.jsxs("div",{className:"space-y-2 text-sm",children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("span",{className:"text-gray-600",children:["Фото: ",v.files.filter(_=>_.type.startsWith("image/")).length]}),i.jsxs("span",{className:"text-gray-600",children:["Макеты: ",v.files.filter(_=>_.type.includes("design")||_.name.toLowerCase().includes("макет")||_.name.toLowerCase().includes("design")).length]}),i.jsxs("span",{className:"text-gray-600",children:["Файлов: ",v.files.length]})]}),i.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1",children:[i.jsxs("div",{className:"flex items-center space-x-1 text-gray-500",children:[i.jsx($t,{className:"h-4 w-4"}),i.jsxs("span",{className:"text-xs",children:["Создан: ",v.createdAt.toLocaleDateString("ru-RU")]})]}),i.jsxs("div",{className:"flex items-center space-x-1 text-gray-500",children:[i.jsx($t,{className:"h-4 w-4"}),i.jsxs("span",{className:"text-xs",children:["Дедлайн: ",v.deadline.toLocaleDateString("ru-RU")]})]})]})]})]})}),!h(v)&&i.jsx("div",{className:"px-6 pb-4",children:i.jsx("div",{className:"bg-yellow-50 border border-yellow-200 rounded-lg p-3",children:i.jsxs("p",{className:"text-sm text-yellow-800",children:[i.jsx("strong",{children:"Ограниченный доступ:"})," Вы можете просматривать этот проект, но не можете его редактировать или загружать файлы."]})})})]},v.id)})}),w.length===0&&i.jsx(K,{className:"text-center py-12",children:i.jsxs(J,{children:[i.jsx("div",{className:"text-gray-400 mb-4",children:i.jsx(Mi,{className:"h-16 w-16 mx-auto"})}),i.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-2",children:"Проекты не найдены"}),i.jsx("p",{className:"text-gray-600 mb-4",children:a||l!=="all"?"Попробуйте изменить параметры поиска или фильтрации":"У вас пока нет проектов. Создайте первый проект, чтобы начать работу."}),!a&&l==="all"&&i.jsxs(U,{onClick:()=>d(!0),children:[i.jsx(st,{className:"h-4 w-4 mr-2"}),"Создать первый проект"]})]})}),i.jsx(Sy,{isOpen:u,onClose:()=>d(!1),onSave:j})]})}function Cy(){const{user:e,addUser:t}=Te(),[r,n]=I.useState({name:"",email:"",phone:"",telegram:"",password:"",role:"photographer",department:"",position:"",salary:"",avatar:""}),[s,a]=I.useState(null),[o,l]=I.useState(null),[c,u]=I.useState(!1),[d,h]=I.useState(!1),[m,x]=I.useState(!1),[w,j]=I.useState(""),v=_=>{var N;const E=(N=_.target.files)==null?void 0:N[0];if(E){if(E.size>5*1024*1024){j("Размер файла не должен превышать 5MB");return}if(!E.type.startsWith("image/")){j("Можно загружать только изображения");return}a(E);const T=new FileReader;T.onload=P=>{var B;l((B=P.target)==null?void 0:B.result)},T.readAsDataURL(E),j("")}},g=()=>{a(null),l(null),n(_=>({..._,avatar:""}))},p=async _=>{if(_.preventDefault(),(e==null?void 0:e.role)!=="admin"){alert("У вас нет прав для выполнения этого действия");return}h(!0),j("");try{await t({name:r.name,email:r.email,password:r.password,phone:r.phone,telegram:r.telegram,role:r.role,department:r.department,position:r.position,salary:r.salary?parseInt(r.salary):void 0,avatar:o||void 0}),h(!1),x(!0),a(null),l(null),n({name:"",email:"",phone:"",telegram:"",password:"",role:"photographer",department:"",position:"",salary:"",avatar:""}),setTimeout(()=>x(!1),3e3)}catch(E){console.error("Error adding employee:",E),j((E==null?void 0:E.message)||"Ошибка при создании сотрудника"),h(!1)}},y=_=>{n(E=>({...E,[_.target.name]:_.target.value}))};return(e==null?void 0:e.role)!=="admin"?i.jsx("div",{className:"p-6",children:i.jsx(K,{className:"text-center py-12",children:i.jsxs(J,{children:[i.jsx("div",{className:"text-red-500 mb-4",children:i.jsx(li,{className:"h-16 w-16 mx-auto"})}),i.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-2",children:"Доступ запрещен"}),i.jsx("p",{className:"text-gray-600",children:"Только администраторы могут добавлять новых сотрудников"})]})})}):i.jsxs("div",{className:"p-6 space-y-6",children:[i.jsxs("div",{children:[i.jsx("h1",{className:"text-3xl font-bold text-gray-900",children:"Добавить сотрудника"}),i.jsx("p",{className:"text-gray-600 mt-1",children:"Создайте новый аккаунт для сотрудника компании"})]}),m&&i.jsx("div",{className:"bg-green-50 border border-green-200 rounded-lg p-4",children:i.jsxs("div",{className:"flex items-center",children:[i.jsx("div",{className:"text-green-600",children:i.jsx(li,{className:"h-5 w-5"})}),i.jsxs("div",{className:"ml-3",children:[i.jsx("p",{className:"text-green-800 font-medium",children:"Сотрудник успешно добавлен!"}),i.jsx("p",{className:"text-green-700 text-sm",children:"Данные для входа отправлены на указанный email"})]})]})}),w&&i.jsx("div",{className:"bg-red-50 border border-red-200 rounded-lg p-4",children:i.jsxs("div",{className:"flex items-center",children:[i.jsx("div",{className:"text-red-600",children:i.jsx(li,{className:"h-5 w-5"})}),i.jsx("div",{className:"ml-3",children:i.jsx("p",{className:"text-red-800 font-medium",children:w})})]})}),i.jsxs("div",{className:"max-w-2xl",children:[i.jsxs(K,{children:[i.jsx(je,{children:i.jsx(be,{children:"Информация о сотруднике"})}),i.jsx(J,{children:i.jsxs("form",{onSubmit:p,className:"space-y-6",children:[i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Фото профиля"}),i.jsxs("div",{className:"flex items-center space-x-4",children:[i.jsx("div",{className:"relative",children:o?i.jsxs("div",{className:"relative",children:[i.jsx("img",{src:o,alt:"Предпросмотр аватара",className:"w-20 h-20 rounded-full object-cover border-2 border-gray-200"}),i.jsx("button",{type:"button",onClick:g,className:"absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors",children:i.jsx(Ee,{className:"h-3 w-3"})})]}):i.jsx("div",{className:"w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center border-2 border-dashed border-gray-300",children:i.jsx(kt,{className:"h-8 w-8 text-gray-400"})})}),i.jsxs("div",{children:[i.jsx("input",{type:"file",accept:"image/*",onChange:v,className:"hidden",id:"avatar-upload"}),i.jsxs("label",{htmlFor:"avatar-upload",className:"cursor-pointer inline-flex items-center px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors",children:[i.jsx(kt,{className:"h-4 w-4 mr-2"}),"Выбрать фото"]}),i.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"JPG, PNG до 5MB"})]})]})]}),i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Полное имя *"}),i.jsx("input",{type:"text",name:"name",value:r.name,onChange:y,className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",required:!0})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Email для входа *"}),i.jsx("input",{type:"email",name:"email",value:r.email,onChange:y,placeholder:"Этот email будет использоваться для входа",className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",required:!0})]})]}),i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Телефон"}),i.jsx("input",{type:"tel",name:"phone",value:r.phone,onChange:y,placeholder:"+7 (495) 123-45-67",className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Telegram"}),i.jsx("input",{type:"text",name:"telegram",value:r.telegram,onChange:y,placeholder:"@username",className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Пароль *"}),i.jsxs("div",{className:"relative",children:[i.jsx("input",{type:c?"text":"password",name:"password",value:r.password,onChange:y,className:"w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",required:!0}),i.jsx("button",{type:"button",onClick:()=>u(!c),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600",children:c?i.jsx(kf,{className:"h-4 w-4"}):i.jsx(bn,{className:"h-4 w-4"})})]})]}),i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Роль *"}),i.jsxs("select",{name:"role",value:r.role,onChange:y,className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",required:!0,children:[i.jsx("option",{value:"photographer",children:"Фотограф"}),i.jsx("option",{value:"designer",children:"Дизайнер"}),i.jsx("option",{value:"admin",children:"Администратор"})]})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Отдел"}),i.jsx("input",{type:"text",name:"department",value:r.department,onChange:y,placeholder:"Например: Фотостудия, Дизайн",className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]})]}),i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Должность"}),i.jsx("input",{type:"text",name:"position",value:r.position,onChange:y,placeholder:"Например: Старший фотограф",className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Зарплата (руб.)"}),i.jsx("input",{type:"number",name:"salary",value:r.salary,onChange:y,placeholder:"50000",className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]})]}),i.jsxs("div",{className:"flex justify-end space-x-3",children:[i.jsx(U,{type:"button",variant:"outline",children:"Отмена"}),i.jsx(U,{type:"submit",disabled:d,children:d?"Создание...":"Создать сотрудника"})]})]})})]}),i.jsx(K,{className:"bg-blue-50 border-blue-200",children:i.jsxs(J,{className:"p-4",children:[i.jsx("h4",{className:"font-medium text-blue-900 mb-3",children:"Информация для входа:"}),i.jsxs("div",{className:"text-sm text-blue-700",children:[i.jsx("p",{children:"Сотрудники смогут войти в систему используя:"}),i.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[i.jsxs("li",{children:[i.jsx("strong",{children:"Email:"}),' тот который вы укажете в поле "Email для входа"']}),i.jsxs("li",{children:[i.jsx("strong",{children:"Пароль:"}),' тот который вы укажете в поле "Пароль"']})]}),i.jsx("p",{className:"mt-2 text-xs",children:"Убедитесь, что сообщили сотруднику его данные для входа"})]})]})})]})]})}function Ey({employee:e,isOpen:t,onClose:r,onSave:n}){var g;const{updateUserPassword:s}=Te(),[a,o]=I.useState({name:e.name,email:e.email,phone:e.phone||"",telegram:e.telegram||"",role:e.role,department:e.department||"",position:e.position||"",salary:((g=e.salary)==null?void 0:g.toString())||"",avatar:e.avatar||"",newPassword:""}),[l,c]=I.useState(null),[u,d]=I.useState(e.avatar||null),[h,m]=I.useState(!1),x=p=>{var _;const y=(_=p.target.files)==null?void 0:_[0];if(y){if(y.size>5*1024*1024){alert("Размер файла не должен превышать 5MB");return}if(!y.type.startsWith("image/")){alert("Можно загружать только изображения");return}c(y);const E=new FileReader;E.onload=N=>{var T;d((T=N.target)==null?void 0:T.result)},E.readAsDataURL(y)}},w=()=>{c(null),d(null),o(p=>({...p,avatar:""}))},j=async p=>{p.preventDefault(),m(!0);try{const y={name:a.name,email:a.email,phone:a.phone,telegram:a.telegram,role:a.role,department:a.department,position:a.position,salary:a.salary?parseInt(a.salary):void 0};u&&u!==e.avatar&&(y.avatar=u),await n(e.id,y),a.newPassword&&await s(e.id,a.newPassword),r()}catch(y){alert(y.message||"Ошибка при сохранении")}finally{m(!1)}},v=p=>{o(y=>({...y,[p.target.name]:p.target.value}))};return t?i.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:i.jsxs("div",{className:"bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-auto",children:[i.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200",children:[i.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:"Редактировать сотрудника"}),i.jsx("button",{onClick:r,className:"text-gray-400 hover:text-gray-600 transition-colors",children:i.jsx(Ee,{className:"h-6 w-6"})})]}),i.jsxs("form",{onSubmit:j,className:"p-6 space-y-4",children:[i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Фото профиля"}),i.jsxs("div",{className:"flex items-center space-x-4",children:[i.jsx("div",{className:"relative",children:u?i.jsxs("div",{className:"relative",children:[i.jsx("img",{src:u,alt:"Предпросмотр аватара",className:"w-20 h-20 rounded-full object-cover border-2 border-gray-200"}),i.jsx("button",{type:"button",onClick:w,className:"absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors",children:i.jsx(Ee,{className:"h-3 w-3"})})]}):i.jsx("div",{className:"w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center border-2 border-dashed border-gray-300",children:i.jsx(kt,{className:"h-8 w-8 text-gray-400"})})}),i.jsxs("div",{children:[i.jsx("input",{type:"file",accept:"image/*",onChange:x,className:"hidden",id:"avatar-edit-upload"}),i.jsxs("label",{htmlFor:"avatar-edit-upload",className:"cursor-pointer inline-flex items-center px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors",children:[i.jsx(kt,{className:"h-4 w-4 mr-2"}),"Изменить фото"]}),i.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"JPG, PNG до 5MB"})]})]})]}),i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Полное имя *"}),i.jsx("input",{type:"text",name:"name",value:a.name,onChange:v,required:!0,className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Email *"}),i.jsx("input",{type:"email",name:"email",value:a.email,onChange:v,required:!0,className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]})]}),i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Телефон"}),i.jsx("input",{type:"tel",name:"phone",value:a.phone,onChange:v,placeholder:"+7 (495) 123-45-67",className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Telegram"}),i.jsx("input",{type:"text",name:"telegram",value:a.telegram,onChange:v,placeholder:"@username",className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]})]}),i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Роль *"}),i.jsxs("select",{name:"role",value:a.role,onChange:v,required:!0,className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",children:[i.jsx("option",{value:"photographer",children:"Фотограф"}),i.jsx("option",{value:"designer",children:"Дизайнер"}),i.jsx("option",{value:"admin",children:"Администратор"})]})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Отдел"}),i.jsx("input",{type:"text",name:"department",value:a.department,onChange:v,className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]})]}),i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Должность"}),i.jsx("input",{type:"text",name:"position",value:a.position,onChange:v,className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Зарплата (руб.)"}),i.jsx("input",{type:"number",name:"salary",value:a.salary,onChange:v,className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Новый пароль (оставьте пустым, если не хотите менять)"}),i.jsx("input",{type:"password",name:"newPassword",value:a.newPassword,onChange:v,placeholder:"••••••••",className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),i.jsxs("div",{className:"flex justify-end space-x-3 pt-4",children:[i.jsx(U,{type:"button",variant:"outline",onClick:r,children:"Отмена"}),i.jsx(U,{type:"submit",disabled:h,children:h?"Сохранение...":"Сохранить"})]})]})]})}):null}function Py(){const{user:e,users:t,updateUser:r,deleteUser:n,dataLoading:s}=Te(),[a,o]=I.useState(""),[l,c]=I.useState("all"),[u,d]=I.useState(null),[h,m]=I.useState(null),[x,w]=I.useState(null);console.log("EmployeesList render - dataLoading:",s,"users:",t);const j=N=>({photographer:"Фотограф",designer:"Дизайнер",admin:"Администратор"})[N]||N,v=N=>({photographer:"bg-blue-100 text-blue-800",designer:"bg-purple-100 text-purple-800",admin:"bg-green-100 text-green-800"})[N]||"bg-gray-100 text-gray-800",g=N=>d(N),p=async(N,T)=>{await r(N,T),d(null)},y=async N=>{h===N?(await n(N),m(null)):(m(N),setTimeout(()=>m(null),3e3))},_=N=>{w(N)},E=t.filter(N=>(N.name+N.email+(N.department||"")).toLowerCase().includes(a.toLowerCase())&&(l==="all"||N.role===l));return s?i.jsx("div",{className:"p-4 md:p-6 space-y-4 md:space-y-6",children:i.jsx("div",{className:"flex items-center justify-center min-h-[400px]",children:i.jsxs("div",{className:"text-center",children:[i.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"}),i.jsx("p",{className:"text-gray-600",children:"Загрузка сотрудников..."})]})})}):i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"p-4 md:p-6 space-y-4 md:space-y-6",children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("div",{children:[i.jsx("h1",{className:"text-2xl md:text-3xl font-bold text-gray-900",children:"Сотрудники"}),i.jsx("p",{className:"text-sm md:text-base text-gray-600 mt-1",children:"Управление сотрудниками компании"})]}),i.jsxs(U,{size:"sm",className:"md:text-base",children:[i.jsx(Tr,{className:"h-4 w-4 mr-2"}),i.jsx("span",{className:"hidden sm:inline",children:"Экспорт списка"}),i.jsx("span",{className:"sm:hidden",children:"Экспорт"})]})]}),i.jsx(K,{children:i.jsx(J,{className:"p-4",children:i.jsxs("div",{className:"flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4",children:[i.jsxs("div",{className:"flex-1 relative",children:[i.jsx(ur,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"}),i.jsx("input",{type:"text",placeholder:"Поиск сотрудников...",value:a,onChange:N=>o(N.target.value),className:"w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),i.jsxs("div",{className:"flex items-center space-x-2 sm:flex-shrink-0",children:[i.jsx(_f,{className:"h-4 w-4 text-gray-500"}),i.jsxs("select",{value:l,onChange:N=>c(N.target.value),className:"border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",children:[i.jsx("option",{value:"all",children:"Все роли"}),i.jsx("option",{value:"photographer",children:"Фотографы"}),i.jsx("option",{value:"designer",children:"Дизайнеры"}),i.jsx("option",{value:"admin",children:"Администраторы"})]})]})]})})}),i.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6",children:E.map(N=>i.jsx(K,{className:"hover:shadow-lg transition-all duration-200",children:i.jsx(J,{className:"p-4 md:p-6",children:i.jsxs("div",{className:"flex items-start space-x-4",children:[i.jsx("img",{src:N.avatar||"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop",alt:N.name,className:"w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover flex-shrink-0"}),i.jsxs("div",{className:"flex-1 min-w-0",children:[i.jsxs("div",{className:"flex items-start justify-between",children:[i.jsxs("div",{children:[i.jsx("h3",{className:"text-sm sm:text-base md:text-lg font-semibold text-gray-900 truncate",children:N.name}),i.jsx("p",{className:"text-xs sm:text-sm text-gray-600",children:N.position||"Не указана"}),i.jsx("p",{className:"text-sm text-gray-500",children:N.department||"Не указан"})]}),i.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium flex-shrink-0 ml-2 whitespace-nowrap ${v(N.role)}`,children:j(N.role)})]}),i.jsxs("div",{className:"mt-3 space-y-2",children:[i.jsxs("div",{className:"flex items-center text-sm text-gray-600",children:[i.jsx(Jo,{className:"h-4 w-4 mr-2 flex-shrink-0"}),i.jsx("span",{className:"truncate",children:N.email})]}),N.phone&&i.jsxs("div",{className:"flex items-center text-sm text-gray-600",children:[i.jsx(Yn,{className:"h-4 w-4 mr-2 flex-shrink-0"}),i.jsx("span",{className:"truncate",children:N.phone})]}),N.telegram&&i.jsxs("div",{className:"flex items-center text-sm text-gray-600",children:[i.jsx(He,{className:"h-4 w-4 mr-2 flex-shrink-0"}),i.jsx("span",{className:"truncate",children:N.telegram})]}),i.jsxs("div",{className:"flex items-center justify-between text-sm",children:[i.jsxs("span",{className:"text-gray-600",children:[i.jsx("span",{className:"hidden sm:inline",children:"Дата найма: "}),i.jsx("span",{className:"sm:hidden",children:"Найм: "}),N.createdAt.toLocaleDateString("ru-RU")]}),N.salary&&i.jsxs("span",{className:"font-medium text-gray-900",children:[N.salary.toLocaleString("ru-RU")," ₽"]})]})]}),i.jsxs("div",{className:"mt-3 md:mt-4 flex flex-wrap gap-1 md:gap-2",children:[i.jsxs(U,{size:"sm",variant:"outline",onClick:()=>_(N),children:[i.jsx(Yn,{className:"h-3 w-3 md:h-4 md:w-4 mr-1"}),i.jsx("span",{className:"text-xs md:text-sm",children:"Контакты"})]}),(e==null?void 0:e.role)==="admin"&&i.jsxs(i.Fragment,{children:[i.jsxs(U,{size:"sm",variant:"outline",onClick:()=>g(N),children:[i.jsx(Rx,{className:"h-3 w-3 md:h-4 md:w-4 mr-1"}),i.jsx("span",{className:"hidden sm:inline text-xs md:text-sm",children:"Редактировать"}),i.jsx("span",{className:"sm:hidden text-xs",children:"Ред."})]}),i.jsxs(U,{size:"sm",variant:"outline",className:`${h===N.id?"bg-red-500 text-white hover:bg-red-600":"text-red-600 hover:text-red-700"}`,onClick:()=>y(N.id),children:[i.jsx(ec,{className:"h-3 w-3 md:h-4 md:w-4 mr-1"}),i.jsx("span",{className:"text-xs md:text-sm",children:h===N.id?"Подтвердить":"Удалить"})]})]}),i.jsxs(U,{size:"sm",variant:"outline",onClick:()=>{localStorage.setItem("messenger_open_chat",N.id),window.location.hash="#messenger";const T=new CustomEvent("openMessengerChat",{detail:{userId:N.id}});window.dispatchEvent(T)},children:[i.jsx(He,{className:"h-3 w-3 md:h-4 md:w-4 mr-1"}),i.jsx("span",{className:"hidden sm:inline",children:"Написать в чате"}),i.jsx("span",{className:"sm:hidden text-xs",children:"Чат"})]})]})]})]})})},N.id))}),E.length===0&&i.jsx(K,{className:"text-center py-12",children:i.jsxs(J,{children:[i.jsx("div",{className:"text-gray-400 mb-4",children:i.jsx(Tr,{className:"h-16 w-16 mx-auto"})}),i.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-2",children:"Сотрудники не найдены"}),i.jsx("p",{className:"text-gray-600",children:"Попробуйте изменить параметры поиска или фильтрации"})]})})]}),u&&i.jsx(Ey,{employee:u,isOpen:!!u,onClose:()=>d(null),onSave:p}),x&&i.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:i.jsxs("div",{className:"bg-white rounded-xl max-w-md w-full",children:[i.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200",children:[i.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:"Связаться с сотрудником"}),i.jsx("button",{onClick:()=>w(null),className:"text-gray-400 hover:text-gray-600 transition-colors",children:i.jsx(Ee,{className:"h-6 w-6"})})]}),i.jsxs("div",{className:"p-6",children:[i.jsxs("div",{className:"flex items-center space-x-4 mb-6",children:[i.jsx("img",{src:x.avatar||"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop",alt:x.name,className:"w-16 h-16 rounded-full object-cover"}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:x.name}),i.jsx("p",{className:"text-gray-600",children:x.position||"Не указана"}),i.jsx("p",{className:"text-sm text-gray-500",children:x.department||"Не указан"})]})]}),i.jsxs("div",{className:"space-y-3",children:[i.jsxs("a",{href:`mailto:${x.email}`,className:"flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors",children:[i.jsx(Jo,{className:"h-5 w-5 text-gray-500"}),i.jsxs("div",{children:[i.jsx("p",{className:"font-medium text-gray-900",children:"Email"}),i.jsx("p",{className:"text-sm text-gray-600",children:x.email})]})]}),i.jsxs("a",{href:`tel:+7${Math.floor(Math.random()*9e9)+1e9}`,className:"flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors",children:[i.jsx(Yn,{className:"h-5 w-5 text-gray-500"}),i.jsxs("div",{children:[i.jsx("p",{className:"font-medium text-gray-900",children:"Телефон"}),i.jsx("p",{className:"text-sm text-gray-600",children:x.phone||"Не указан"})]})]}),x.telegram&&i.jsxs("a",{href:`https://t.me/${x.telegram.replace("@","")}`,target:"_blank",rel:"noopener noreferrer",className:"flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors",children:[i.jsx(He,{className:"h-5 w-5 text-gray-500"}),i.jsxs("div",{children:[i.jsx("p",{className:"font-medium text-gray-900",children:"Telegram"}),i.jsx("p",{className:"text-sm text-gray-600",children:x.telegram})]})]})]})]})]})})]})}function Ty({isOpen:e,onClose:t,onSave:r,employee:n}){const[s,a]=I.useState({projectType:"individual",infoCollectionPercent:0,photosProcessed:!1,revisionsApproved:!1,magazinesPrinted:!1,deadlinesMet:!0,krMagazines:0,month:new Date().toISOString().slice(0,7)}),o=()=>{const m={individual:{base:210,bonus:90},kindergarten:{base:210,bonus:90},collective_11:{base:175,bonus:75},collective_9:{base:175,bonus:75},collective_4:{base:175,bonus:75}}[s.projectType],x=(100-s.infoCollectionPercent)/1.5;let w=m.bonus;s.deadlinesMet||(w*=.5);const j=m.base*(1-x/100)+w,v=s.krMagazines*200;return j+v},l=h=>({infoCollection:h*.35,photosProcessed:h*.3,revisionsApproved:h*.2,magazinesPrinted:h*.15}),c=h=>{h.preventDefault();const m=o(),x=l(m),w={employeeId:n.id,employeeName:n.name,role:n.role,department:n.department||"Не указан",...s,calculatedSalary:m,paymentStages:x};r(w),t()};if(!e||!n)return null;const u=o(),d=l(u);return i.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:i.jsxs("div",{className:"bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-auto",children:[i.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200",children:[i.jsxs("h2",{className:"text-xl font-semibold text-gray-900",children:["Расчет зарплаты - ",n.name]}),i.jsx("button",{onClick:t,className:"text-gray-400 hover:text-gray-600 transition-colors",children:i.jsx(Ee,{className:"h-6 w-6"})})]}),i.jsxs("form",{onSubmit:c,className:"p-6 space-y-6",children:[i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Тип проекта"}),i.jsxs("select",{value:s.projectType,onChange:h=>a(m=>({...m,projectType:h.target.value})),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",children:[i.jsx("option",{value:"individual",children:"Индивидуальный концепт"}),i.jsx("option",{value:"kindergarten",children:"Детский сад"}),i.jsx("option",{value:"collective_11",children:'Коллективный "11"'}),i.jsx("option",{value:"collective_9",children:'Коллективный "9"'}),i.jsx("option",{value:"collective_4",children:'Коллективный "4"'})]})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Месяц"}),i.jsx("input",{type:"month",value:s.month,onChange:h=>a(m=>({...m,month:h.target.value})),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"})]})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Процент собранной информации (%)"}),i.jsx("input",{type:"number",min:"0",max:"100",value:s.infoCollectionPercent,onChange:h=>a(m=>({...m,infoCollectionPercent:Number(h.target.value)})),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Количество журналов КР"}),i.jsx("input",{type:"number",min:"0",value:s.krMagazines,onChange:h=>a(m=>({...m,krMagazines:Number(h.target.value)})),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),i.jsxs("div",{className:"space-y-3",children:[i.jsx("h3",{className:"font-medium text-gray-900",children:"Этапы выполнения"}),i.jsxs("label",{className:"flex items-center space-x-2",children:[i.jsx("input",{type:"checkbox",checked:s.photosProcessed,onChange:h=>a(m=>({...m,photosProcessed:h.target.checked})),className:"rounded border-gray-300 text-blue-600 focus:ring-blue-500"}),i.jsx("span",{className:"text-sm text-gray-700",children:"Обработанные фотографии скинуты"})]}),i.jsxs("label",{className:"flex items-center space-x-2",children:[i.jsx("input",{type:"checkbox",checked:s.revisionsApproved,onChange:h=>a(m=>({...m,revisionsApproved:h.target.checked})),className:"rounded border-gray-300 text-blue-600 focus:ring-blue-500"}),i.jsx("span",{className:"text-sm text-gray-700",children:"Правки согласованы"})]}),i.jsxs("label",{className:"flex items-center space-x-2",children:[i.jsx("input",{type:"checkbox",checked:s.magazinesPrinted,onChange:h=>a(m=>({...m,magazinesPrinted:h.target.checked})),className:"rounded border-gray-300 text-blue-600 focus:ring-blue-500"}),i.jsx("span",{className:"text-sm text-gray-700",children:"Журналы напечатаны"})]}),i.jsxs("label",{className:"flex items-center space-x-2",children:[i.jsx("input",{type:"checkbox",checked:s.deadlinesMet,onChange:h=>a(m=>({...m,deadlinesMet:h.target.checked})),className:"rounded border-gray-300 text-blue-600 focus:ring-blue-500"}),i.jsx("span",{className:"text-sm text-gray-700",children:"Все дедлайны соблюдены"})]})]}),i.jsxs("div",{className:"bg-blue-50 rounded-lg p-4",children:[i.jsx("h3",{className:"font-medium text-blue-900 mb-3",children:"Предварительный расчет"}),i.jsxs("div",{className:"space-y-2 text-sm",children:[i.jsxs("div",{className:"flex justify-between",children:[i.jsx("span",{children:"Общая сумма:"}),i.jsxs("span",{className:"font-medium",children:[u.toFixed(2)," ₽"]})]}),i.jsxs("div",{className:"border-t border-blue-200 pt-2 mt-2",children:[i.jsxs("div",{className:"flex justify-between",children:[i.jsx("span",{children:"За сбор информации (35%):"}),i.jsxs("span",{children:[d.infoCollection.toFixed(2)," ₽"]})]}),i.jsxs("div",{className:"flex justify-between",children:[i.jsx("span",{children:"За обработанные фото (30%):"}),i.jsxs("span",{children:[d.photosProcessed.toFixed(2)," ₽"]})]}),i.jsxs("div",{className:"flex justify-between",children:[i.jsx("span",{children:"После согласования правок (20%):"}),i.jsxs("span",{children:[d.revisionsApproved.toFixed(2)," ₽"]})]}),i.jsxs("div",{className:"flex justify-between",children:[i.jsx("span",{children:"После печати журналов (15%):"}),i.jsxs("span",{children:[d.magazinesPrinted.toFixed(2)," ₽"]})]})]})]})]}),i.jsxs("div",{className:"flex justify-end space-x-3",children:[i.jsx(U,{type:"button",variant:"outline",onClick:t,children:"Отмена"}),i.jsx(U,{type:"submit",children:"Сохранить расчет"})]})]})]})})}function Oy(){const{user:e,users:t}=Te(),[r,n]=I.useState(""),[s,a]=I.useState("2024-02"),[o,l]=I.useState(!1),[c,u]=I.useState(null),[d,h]=I.useState([]);I.useEffect(()=>{const v=localStorage.getItem("salary_calculations");if(v)try{h(JSON.parse(v))}catch(g){console.error("Ошибка при загрузке расчетов зарплат:",g)}},[]),I.useEffect(()=>{d.length>0&&localStorage.setItem("salary_calculations",JSON.stringify(d))},[d]);const m=v=>{const g={...v,id:Math.random().toString(36).substr(2,9)};h(p=>{const y=[...p,g];return localStorage.setItem("salary_calculations",JSON.stringify(y)),y})},x=d.filter(v=>{const g=v.employeeName.toLowerCase().includes(r.toLowerCase())||v.department.toLowerCase().includes(r.toLowerCase()),p=v.month===s;return g&&p}),w=x.reduce((v,g)=>v+g.calculatedSalary,0),j=v=>({individual:"Индивидуальный концепт",kindergarten:"Детский сад",collective_11:'Коллективный "11"',collective_9:'Коллективный "9"',collective_4:'Коллективный "4"'})[v]||v;return i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"p-6 space-y-6",children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("div",{children:[i.jsx("h1",{className:"text-3xl font-bold text-gray-900",children:"Зарплаты сотрудников"}),i.jsx("p",{className:"text-gray-600 mt-1",children:"Динамический расчет зарплат по проектам"})]}),(e==null?void 0:e.role)==="admin"&&i.jsxs("div",{className:"flex space-x-3",children:[i.jsxs(U,{onClick:()=>l(!0),children:[i.jsx(qs,{className:"h-4 w-4 mr-2"}),"Рассчитать зарплату"]}),i.jsxs(U,{variant:"outline",children:[i.jsx($t,{className:"h-4 w-4 mr-2"}),"Экспорт отчета"]})]})]}),i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-6",children:[i.jsx(K,{children:i.jsx(J,{className:"p-6",children:i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("div",{children:[i.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Общая сумма"}),i.jsxs("p",{className:"text-2xl font-bold text-gray-900 mt-1",children:[w.toLocaleString("ru-RU")," ₽"]})]}),i.jsx("div",{className:"p-3 rounded-xl bg-blue-50 text-blue-600",children:i.jsx(Li,{className:"h-6 w-6"})})]})})}),i.jsx(K,{children:i.jsx(J,{className:"p-6",children:i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("div",{children:[i.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Расчетов"}),i.jsx("p",{className:"text-2xl font-bold text-gray-900 mt-1",children:x.length})]}),i.jsx("div",{className:"p-3 rounded-xl bg-purple-50 text-purple-600",children:i.jsx(qs,{className:"h-6 w-6"})})]})})})]}),i.jsxs(K,{children:[i.jsx(je,{children:i.jsxs(be,{className:"flex items-center",children:[i.jsx(qs,{className:"h-5 w-5 mr-2 text-blue-600"}),"Система расчета зарплат"]})}),i.jsx(J,{children:i.jsxs("div",{className:"space-y-6",children:[i.jsxs("div",{children:[i.jsx("h3",{className:"font-semibold text-gray-900 mb-3",children:"Разделение зарплаты:"}),i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[i.jsx("div",{className:"bg-blue-50 p-4 rounded-lg",children:i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsx("span",{className:"text-sm text-gray-700",children:"Выплата за сбор информации"}),i.jsx("span",{className:"font-semibold text-blue-700",children:"35%"})]})}),i.jsx("div",{className:"bg-green-50 p-4 rounded-lg",children:i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsx("span",{className:"text-sm text-gray-700",children:"Выплата в момент скидывания обработанных фотографий"}),i.jsx("span",{className:"font-semibold text-green-700",children:"30%"})]})}),i.jsx("div",{className:"bg-yellow-50 p-4 rounded-lg",children:i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsx("span",{className:"text-sm text-gray-700",children:"Выплата после согласования правок"}),i.jsx("span",{className:"font-semibold text-yellow-700",children:"20%"})]})}),i.jsx("div",{className:"bg-purple-50 p-4 rounded-lg",children:i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsx("span",{className:"text-sm text-gray-700",children:"Выплата после печати журналов"}),i.jsx("span",{className:"font-semibold text-purple-700",children:"15%"})]})})]})]}),i.jsxs("div",{children:[i.jsx("h3",{className:"font-semibold text-gray-900 mb-3",children:"Формулы расчета зарплаты менеджера:"}),i.jsxs("div",{className:"space-y-3",children:[i.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[i.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"Индивидуальный концепт и Детский сад:"}),i.jsx("code",{className:"text-sm text-gray-700 bg-white px-2 py-1 rounded",children:"210 × (1 – (100% – Процент собранной инфы) / 1.5) + 90¹"})]}),i.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[i.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:'Коллективный "11", "9", "4":'}),i.jsx("code",{className:"text-sm text-gray-700 bg-white px-2 py-1 rounded",children:"175 × (1 – (100% – Процент собранной инфы) / 1.5) + 75¹"})]})]})]}),i.jsxs("div",{children:[i.jsx("h3",{className:"font-semibold text-gray-900 mb-3",children:"Условия выплат:"}),i.jsx("div",{className:"bg-red-50 border border-red-200 rounded-lg p-4",children:i.jsxs("div",{className:"flex items-start",children:[i.jsx("div",{className:"text-red-600 mr-3 mt-0.5",children:i.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",children:i.jsx("path",{fillRule:"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})})}),i.jsxs("div",{children:[i.jsx("h4",{className:"font-medium text-red-900 mb-2",children:"Штрафы за несоблюдение дедлайнов:"}),i.jsx("p",{className:"text-sm text-red-800 mb-3",children:"¹ зависит от соблюдения дедлайнов по скидыванию исходников, сбору номеров фото, скидыванию обработанных фото, получению отзывов, разделению по группам, бронированию студии и прочее."}),i.jsx("p",{className:"text-sm text-red-800 font-medium",children:"За несоблюдение сроков любой задачи, которая связана со сбором какой-либо информации, нужной для журнала, из второго слагаемого формулы будет вычитаться 50%."})]})]})})]}),i.jsxs("div",{children:[i.jsx("h3",{className:"font-semibold text-gray-900 mb-3",children:"Дополнительные выплаты:"}),i.jsx("div",{className:"bg-green-50 border border-green-200 rounded-lg p-4",children:i.jsxs("div",{className:"flex items-center",children:[i.jsx("div",{className:"text-green-600 mr-3",children:i.jsx(Li,{className:"w-5 h-5"})}),i.jsxs("div",{children:[i.jsx("h4",{className:"font-medium text-green-900",children:"Оплата за журнал КР:"}),i.jsx("p",{className:"text-sm text-green-800",children:"200 рублей за журнал. Если в классе журналов несколько, то 200 рублей умножается на количество журналов КР."})]})]})})]})]})})]}),i.jsx(K,{children:i.jsx(J,{className:"p-4",children:i.jsxs("div",{className:"flex items-center space-x-4",children:[i.jsxs("div",{className:"flex-1 relative",children:[i.jsx(ur,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"}),i.jsx("input",{type:"text",placeholder:"Поиск сотрудников...",value:r,onChange:v=>n(v.target.value),className:"w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),i.jsx("div",{className:"flex items-center space-x-2",children:i.jsx("input",{type:"month",value:s,onChange:v=>a(v.target.value),className:"border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})})]})})}),i.jsxs(K,{children:[i.jsx(je,{children:i.jsxs(be,{children:["Расчеты зарплат за ",new Date(s+"-01").toLocaleDateString("ru-RU",{year:"numeric",month:"long"})]})}),i.jsx(J,{children:x.length===0?i.jsxs("div",{className:"text-center py-8",children:[i.jsx(qs,{className:"h-12 w-12 text-gray-300 mx-auto mb-3"}),i.jsx("p",{className:"text-gray-500 mb-3",children:"Нет расчетов за выбранный период"}),(e==null?void 0:e.role)==="admin"&&i.jsxs(U,{onClick:()=>l(!0),children:[i.jsx(st,{className:"h-4 w-4 mr-2"}),"Создать первый расчет"]})]}):i.jsx("div",{className:"overflow-auto",children:i.jsxs("table",{className:"w-full",children:[i.jsx("thead",{children:i.jsxs("tr",{className:"border-b border-gray-200",children:[i.jsx("th",{className:"text-left py-3 px-4 font-medium text-gray-700",children:"Сотрудник"}),i.jsx("th",{className:"text-left py-3 px-4 font-medium text-gray-700",children:"Тип проекта"}),i.jsx("th",{className:"text-left py-3 px-4 font-medium text-gray-700",children:"Прогресс"}),i.jsx("th",{className:"text-right py-3 px-4 font-medium text-gray-700",children:"Зарплата"}),i.jsx("th",{className:"text-center py-3 px-4 font-medium text-gray-700",children:"Действия"})]})}),i.jsx("tbody",{children:x.map(v=>i.jsxs("tr",{className:"border-b border-gray-100 hover:bg-gray-50",children:[i.jsx("td",{className:"py-3 px-4",children:i.jsxs("div",{children:[i.jsx("p",{className:"font-medium text-gray-900",children:v.employeeName}),i.jsx("p",{className:"text-sm text-gray-500",children:v.department})]})}),i.jsx("td",{className:"py-3 px-4",children:i.jsx("span",{className:"px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs",children:j(v.projectType)})}),i.jsx("td",{className:"py-3 px-4",children:i.jsxs("div",{className:"space-y-1",children:[i.jsxs("div",{className:"flex items-center text-xs",children:[i.jsx("div",{className:`w-2 h-2 rounded-full mr-2 ${v.infoCollectionPercent>0?"bg-green-500":"bg-gray-300"}`}),"Информация: ",v.infoCollectionPercent,"%"]}),i.jsxs("div",{className:"flex items-center text-xs",children:[i.jsx("div",{className:`w-2 h-2 rounded-full mr-2 ${v.photosProcessed?"bg-green-500":"bg-gray-300"}`}),"Фото обработаны"]}),i.jsxs("div",{className:"flex items-center text-xs",children:[i.jsx("div",{className:`w-2 h-2 rounded-full mr-2 ${v.revisionsApproved?"bg-green-500":"bg-gray-300"}`}),"Правки согласованы"]}),i.jsxs("div",{className:"flex items-center text-xs",children:[i.jsx("div",{className:`w-2 h-2 rounded-full mr-2 ${v.magazinesPrinted?"bg-green-500":"bg-gray-300"}`}),"Журналы напечатаны"]})]})}),i.jsx("td",{className:"py-3 px-4 text-right",children:i.jsxs("div",{children:[i.jsxs("p",{className:"font-medium text-gray-900",children:[v.calculatedSalary.toLocaleString("ru-RU")," ₽"]}),v.krMagazines>0&&i.jsxs("p",{className:"text-xs text-gray-500",children:["+",v.krMagazines," КР журналов"]})]})}),i.jsx("td",{className:"py-3 px-4 text-center",children:i.jsxs(U,{size:"sm",variant:"outline",children:[i.jsx(bn,{className:"h-4 w-4 mr-1"}),"Детали"]})})]},v.id))})]})})})]})]}),o&&i.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:i.jsxs("div",{className:"bg-white rounded-xl max-w-md w-full",children:[i.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200",children:[i.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:"Выберите сотрудника"}),i.jsx("button",{onClick:()=>l(!1),className:"text-gray-400 hover:text-gray-600 transition-colors",children:i.jsx(Ee,{className:"h-6 w-6"})})]}),i.jsx("div",{className:"p-6",children:i.jsx("div",{className:"space-y-3 max-h-64 overflow-y-auto",children:t.map(v=>i.jsxs("button",{onClick:()=>{u(v),l(!1)},className:"w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors",children:[i.jsx("p",{className:"font-medium text-gray-900",children:v.name}),i.jsx("p",{className:"text-sm text-gray-500",children:v.department||"Не указан"})]},v.id))})})]})}),i.jsx(Ty,{isOpen:!!c,onClose:()=>u(null),onSave:m,employee:c})]})}function Iy(){const{user:e,projects:t}=Te(),[r,n]=I.useState(new Date),[s,a]=I.useState(null),[o,l]=I.useState(!1),[c,u]=I.useState(!1),d=f=>{var k;return e?!!(e.role==="admin"||((k=f.manager)==null?void 0:k.id)===e.id||e.role==="photographer"&&f.photographers.some(S=>S.id===e.id)||e.role==="designer"&&f.designers.some(S=>S.id===e.id)):!1},h=t.filter(f=>d(f)).map(f=>{var k,S;return{id:`project-${f.id}`,title:`Дедлайн: ${f.title}`,description:`Завершение проекта "${f.title}"`,date:f.deadline.toISOString().split("T")[0],time:"23:59",createdBy:((k=f.manager)==null?void 0:k.id)||"system",createdByName:((S=f.manager)==null?void 0:S.name)||"Система",type:"deadline",isNote:!1}}),[m,x]=I.useState([]);I.useEffect(()=>{const f=localStorage.getItem("calendar_events");if(f)try{const S=JSON.parse(f).map(b=>({...b}));x(S)}catch(k){console.error("Ошибка при загрузке событий календаря:",k)}},[]),I.useEffect(()=>{m.length>=0&&localStorage.setItem("calendar_events",JSON.stringify(m))},[m]);const w=[...m,...h],[j,v]=I.useState({title:"",description:"",time:"09:00",type:"other",isNote:!1}),[g,p]=I.useState({title:"",content:"",time:"09:00"}),y=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],_=["Пн","Вт","Ср","Чт","Пт","Сб","Вс"],E=f=>{const k=f.getFullYear(),S=f.getMonth(),b=new Date(k,S,1),R=new Date(k,S+1,0).getDate(),z=(b.getDay()+6)%7,Q=[];for(let se=0;se<z;se++)Q.push(null);for(let se=1;se<=R;se++)Q.push(se);return Q},N=(f,k,S)=>`${f}-${String(k+1).padStart(2,"0")}-${String(S).padStart(2,"0")}`,T=f=>w.filter(k=>k.date===f),P=f=>({meeting:"bg-blue-100 text-blue-800",photoshoot:"bg-green-100 text-green-800",design:"bg-purple-100 text-purple-800",deadline:"bg-red-100 text-red-800",other:"bg-gray-100 text-gray-800"})[f],B=f=>({meeting:"Встреча",photoshoot:"Фотосессия",design:"Дизайн",deadline:"Дедлайн",other:"Другое"})[f],D=()=>{n(new Date(r.getFullYear(),r.getMonth()-1,1))},de=()=>{n(new Date(r.getFullYear(),r.getMonth()+1,1))},pe=f=>{const k=N(r.getFullYear(),r.getMonth(),f);a(k)},_e=()=>{if(!s||!j.title.trim())return;const f={id:Math.random().toString(36).substr(2,9),title:j.title,description:j.description,date:s,time:j.time,createdBy:(e==null?void 0:e.id)||"",createdByName:(e==null?void 0:e.name)||"",type:j.type,isNote:j.isNote};x(S=>[...S,f]);const k=[...m,f];localStorage.setItem("calendar_events",JSON.stringify(k)),v({title:"",description:"",time:"09:00",type:"other",isNote:!1}),l(!1)},Ne=()=>{if(!s||!g.title.trim())return;const f={id:Math.random().toString(36).substr(2,9),title:g.title,description:g.content,date:s,time:g.time,createdBy:(e==null?void 0:e.id)||"",createdByName:(e==null?void 0:e.name)||"",type:"other",isNote:!0};x(S=>[...S,f]);const k=[...m,f];localStorage.setItem("calendar_events",JSON.stringify(k)),p({title:"",content:"",time:"09:00"}),u(!1)},Oe=f=>{f.startsWith("project-")||x(k=>{const S=k.filter(b=>b.id!==f);return localStorage.setItem("calendar_events",JSON.stringify(S)),S})},Y=E(r),A=s?T(s):[];return i.jsxs("div",{className:"p-4 md:p-6 space-y-4 md:space-y-6",children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("div",{children:[i.jsx("h1",{className:"text-2xl md:text-3xl font-bold text-gray-900",children:"Календарь"}),i.jsx("p",{className:"text-sm md:text-base text-gray-600 mt-1",children:"Планирование проектов и событий"})]}),i.jsx("div",{className:"flex flex-col xs:flex-row gap-2",children:s&&i.jsxs(i.Fragment,{children:[i.jsxs(U,{onClick:()=>u(!0),variant:"outline",size:"sm",children:[i.jsx(st,{className:"h-4 w-4 mr-2"}),i.jsx("span",{className:"hidden xs:inline",children:"Добавить заметку"}),i.jsx("span",{className:"xs:hidden",children:"Заметка"})]}),i.jsxs(U,{onClick:()=>l(!0),size:"sm",children:[i.jsx(st,{className:"h-4 w-4 mr-2"}),i.jsx("span",{className:"hidden xs:inline",children:"Добавить событие"}),i.jsx("span",{className:"xs:hidden",children:"Событие"})]})]})})]}),i.jsxs("div",{className:"flex flex-col lg:flex-row gap-4 lg:gap-6 overflow-hidden",children:[i.jsx("div",{className:"flex-1 lg:w-2/3",children:i.jsxs(K,{className:"h-full",children:[i.jsx(je,{children:i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs(be,{className:"text-base sm:text-lg md:text-xl",children:[y[r.getMonth()]," ",r.getFullYear()]}),i.jsxs("div",{className:"flex space-x-2",children:[i.jsx(U,{variant:"outline",size:"sm",onClick:D,children:i.jsx(Ix,{className:"h-4 w-4"})}),i.jsx(U,{variant:"outline",size:"sm",onClick:de,children:i.jsx(Ax,{className:"h-4 w-4"})})]})]})}),i.jsxs(J,{className:"p-3 sm:p-4 md:p-6",children:[i.jsx("div",{className:"grid grid-cols-7 gap-1 mb-2 md:mb-4",children:_.map(f=>i.jsx("div",{className:"p-1 md:p-2 text-center text-xs font-medium text-gray-500",children:f},f))}),i.jsx("div",{className:"grid grid-cols-7 gap-1",children:Y.map((f,k)=>{if(f===null)return i.jsx("div",{className:"p-1 md:p-2 h-12 sm:h-16 md:h-20"},k);const S=N(r.getFullYear(),r.getMonth(),f),b=T(S),C=s===S,R=S===new Date().toISOString().split("T")[0];return i.jsxs("div",{onClick:()=>pe(f),className:`p-1 md:p-2 h-12 sm:h-16 md:h-20 border border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors ${C?"bg-blue-50 border-blue-300":""} ${R?"bg-yellow-50 border-yellow-300":""}`,children:[i.jsx("div",{className:`text-xs font-medium ${R?"text-yellow-800":"text-gray-900"}`,children:f}),i.jsxs("div",{className:"mt-1 space-y-1",children:[b.slice(0,window.innerWidth<640?1:2).map(z=>i.jsxs("div",{className:`text-xs px-1 py-0.5 rounded truncate leading-tight ${P(z.type)} ${z.isNote?"border-l-2 border-purple-400":""}`,title:z.isNote?`Заметка: ${z.title}`:z.title,children:[z.isNote&&"📝 ",z.title]},z.id)),b.length>(window.innerWidth<640?1:2)&&i.jsxs("div",{className:"text-xs text-gray-500 leading-tight",children:["+",b.length-(window.innerWidth<640?1:2)," еще"]})]})]},f)})})]})]})}),i.jsx("div",{className:"flex-1 lg:w-1/3",children:i.jsxs(K,{className:"h-full",children:[i.jsx(je,{children:i.jsx(be,{className:"text-base md:text-lg",children:s?`События на ${new Date(s+"T00:00:00").toLocaleDateString("ru-RU")}`:"Выберите дату"})}),i.jsx(J,{className:"overflow-y-auto",children:s?i.jsx("div",{className:"space-y-3 md:space-y-4",children:A.length===0?i.jsxs("div",{className:"text-center py-6 md:py-8",children:[i.jsx($t,{className:"h-8 w-8 md:h-12 md:w-12 text-gray-300 mx-auto mb-3"}),i.jsx("p",{className:"text-sm md:text-base text-gray-500 mb-3",children:"Нет событий на эту дату"}),i.jsxs("div",{className:"flex flex-col xs:flex-row gap-2 justify-center",children:[i.jsxs(U,{variant:"outline",size:"sm",onClick:()=>u(!0),children:[i.jsx(st,{className:"h-4 w-4 mr-1"}),"Заметка"]}),i.jsxs(U,{variant:"outline",size:"sm",onClick:()=>l(!0),children:[i.jsx(st,{className:"h-4 w-4 mr-1"}),"Событие"]})]})]}):A.map(f=>i.jsx("div",{className:`border rounded-lg p-4 ${f.isNote?"border-purple-200 bg-purple-50":"border-gray-200"}`,children:i.jsxs("div",{className:"flex items-start justify-between",children:[i.jsxs("div",{className:"flex-1",children:[i.jsxs("div",{className:"flex flex-wrap items-center gap-2 mb-2",children:[f.isNote?i.jsx("span",{className:"px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800",children:"📝 Заметка"}):i.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium ${P(f.type)}`,children:B(f.type)}),i.jsxs("div",{className:"flex items-center text-xs md:text-sm text-gray-500",children:[i.jsx(Yl,{className:"h-3 w-3 mr-1"}),f.time]})]}),i.jsx("h4",{className:"font-medium text-sm md:text-base text-gray-900 mb-1",children:f.title}),f.description&&i.jsx("p",{className:"text-xs md:text-sm text-gray-600 mb-2 whitespace-pre-wrap",children:f.description}),i.jsxs("div",{className:"flex items-center text-xs text-gray-500",children:[i.jsx(oa,{className:"h-3 w-3 mr-1"}),f.createdByName]})]}),((e==null?void 0:e.role)==="admin"||(e==null?void 0:e.id)===f.createdBy)&&!f.id.startsWith("project-")&&i.jsx("button",{onClick:()=>Oe(f.id),className:"text-gray-400 hover:text-red-500 transition-colors ml-2",children:i.jsx(Ee,{className:"h-4 w-4"})}),f.id.startsWith("project-")&&i.jsx("div",{className:"text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded ml-2",children:"Проект"})]})},f.id))}):i.jsxs("div",{className:"text-center py-6 md:py-8",children:[i.jsx($t,{className:"h-8 w-8 md:h-12 md:w-12 text-gray-300 mx-auto mb-3"}),i.jsx("p",{className:"text-sm md:text-base text-gray-500",children:"Выберите дату в календаре"})]})})]})})]}),c&&i.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:i.jsxs("div",{className:"bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-auto",children:[i.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200",children:[i.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:"Добавить заметку"}),i.jsx("button",{onClick:()=>u(!1),className:"text-gray-400 hover:text-gray-600 transition-colors",children:i.jsx(Ee,{className:"h-6 w-6"})})]}),i.jsxs("div",{className:"p-6 space-y-4",children:[i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Заголовок заметки *"}),i.jsx("input",{type:"text",value:g.title,onChange:f=>p(k=>({...k,title:f.target.value})),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent",placeholder:"Введите заголовок заметки"})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Содержание заметки"}),i.jsx("textarea",{value:g.content,onChange:f=>p(k=>({...k,content:f.target.value})),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent",rows:4,placeholder:"Напишите содержание заметки"})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Время"}),i.jsx("input",{type:"time",value:g.time,onChange:f=>p(k=>({...k,time:f.target.value})),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"})]}),i.jsxs("div",{className:"flex justify-end space-x-3 pt-4",children:[i.jsx(U,{variant:"outline",onClick:()=>u(!1),children:"Отмена"}),i.jsx(U,{onClick:Ne,disabled:!g.title.trim(),className:"bg-purple-600 hover:bg-purple-700",children:"Добавить заметку"})]})]})]})}),o&&i.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:i.jsxs("div",{className:"bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-auto",children:[i.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200",children:[i.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:"Добавить событие"}),i.jsx("button",{onClick:()=>l(!1),className:"text-gray-400 hover:text-gray-600 transition-colors",children:i.jsx(Ee,{className:"h-6 w-6"})})]}),i.jsxs("div",{className:"p-6 space-y-4",children:[i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Название события *"}),i.jsx("input",{type:"text",value:j.title,onChange:f=>v(k=>({...k,title:f.target.value})),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"Введите название события"})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Описание"}),i.jsx("textarea",{value:j.description,onChange:f=>v(k=>({...k,description:f.target.value})),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",rows:3,placeholder:"Дополнительная информация о событии"})]}),i.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Время"}),i.jsx("input",{type:"time",value:j.time,onChange:f=>v(k=>({...k,time:f.target.value})),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Тип события"}),i.jsxs("select",{value:j.type,onChange:f=>v(k=>({...k,type:f.target.value})),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",children:[i.jsx("option",{value:"meeting",children:"Встреча"}),i.jsx("option",{value:"photoshoot",children:"Фотосессия"}),i.jsx("option",{value:"design",children:"Дизайн"}),i.jsx("option",{value:"deadline",children:"Дедлайн"}),i.jsx("option",{value:"other",children:"Другое"})]})]})]}),i.jsxs("div",{className:"flex justify-end space-x-3 pt-4",children:[i.jsx(U,{variant:"outline",onClick:()=>l(!1),children:"Отмена"}),i.jsx(U,{onClick:_e,disabled:!j.title.trim(),children:"Добавить событие"})]})]})]})})]})}const Ay=()=>{const[e,t]=I.useState("collective9"),r=[{id:"collective9",label:"КОЛЛЕКТИВНЫЙ 9",icon:Tr},{id:"individual",label:"ИНДИВИДУАЛЬНЫЙ",icon:oa},{id:"kindergarten",label:"ДЕТСКИЙ САД",icon:Tu},{id:"collective11",label:"КОЛЛЕКТИВНЫЙ 11",icon:Tu}],n=()=>{switch(e){case"collective9":return i.jsx("div",{className:"space-y-8",children:i.jsxs(K,{children:[i.jsx(je,{children:i.jsxs(be,{className:"flex items-center",children:[i.jsx(He,{className:"h-5 w-5 mr-2 text-purple-600"}),"Сообщение родителю"]})}),i.jsx(J,{children:i.jsx("div",{className:"bg-gray-50 p-4 rounded-lg",children:i.jsx("p",{className:"whitespace-pre-wrap text-sm leading-relaxed",children:`Коллективный9
Начало все то же,изменения со скрипта сбора инфы:
Сообщение в беседу класса

Всем привет! 👋
✍️ Мы начинаем сбор текстовой информации для ваших выпускных журналов. Сначала сообщу вам общий регламент этого этапа работы, затем напишу что, куда и когда.

📍По регламенту:
❗️Вам дается 15 дней на выгрузку всех материалов для журнала, то есть к 20:00 (дедлайн; смотреть в карточке класса) всё у всех должно быть загружено. После истечения срока никакую информацию внести будет НЕЛЬЗЯ!!! Поэтому отнестись к этому нужно с должным вниманием и ответственностью;
❗️При написании текстовой информации обращайте внимание на ГРАМОТНОСТЬ!!! Орфографические, пунктуационные и речевые ошибки в тексте журнала мы не исправляем. Также мат, оскорбления, пошлости и тому подобные выражения в журнал вставлены не будут, и более того, задания в таком случае придётся переделывать.

📂Инструкция как, что и куда:
1.	🎓 ИНДИВИДУАЛЬНАЯ ПАПКА ВЫПУСКНИКА: в ней будут находиться все ваши папки. Задача: найти свою папку и зайти в неё. В этой папке будет:
- 📸 ПАПКА «ФОТО ИЗ ПОМЕЩЕНИЯ»: в эту папку ничего загружать самостоятельно НЕ НУЖНО. Сюда фотографы загрузят фотографии для журнала, сделанные на фотосессии;
(ссылка на папку “Выпускники”)
2.	📨 ГУГЛ ОПРОС «ПИСЬМО САМОМУ СЕБЕ В БУДУЩЕЕ»: необходимо пройти этот опрос за 1 раз, так как при выходе ответы не сохраняются. Все подробности по заполнению опроса указаны в описании самого опроса. Перед закрытием опроса ОБЯЗАТЕЛЬНО нажать кнопку “Отправить”, чтобы всё написанное у нас сохранилось. Вот ссылка на опрос, который необходимо пройти каждому из вас в нужный дедлайн:
(ссылка на гугл-форму)
3.	🫂 ГУГЛ ОПРОС «ПОЖЕЛАНИЯ И СЛОВА ОДНОКЛАССНИКАМ»: здесь всем нужно будет написать пожелания или памятные слова КАЖДОМУ своему однокласснику, все пожелания и слова будут вставлены в ваши журналы с подписью от кого они. Старайтесь писать для всех, чтобы спустя время было приятно перечитывать написанное для вас. Перед закрытием опроса ОБЯЗАТЕЛЬНО нажать кнопку “Отправить”, чтобы всё написанное у нас сохранилось.
(ссылка на гугл-форму)
4.	💭 ГУГЛ ОПРОС «ЦИТАТЫ»: здесь ВСЕМ нужно будет написать цитату, которая будет располагаться под вашей фотографией в разделе “Наш класс”. Перед закрытием опроса ОБЯЗАТЕЛЬНО нажать кнопку “Отправить”, чтобы всё написанное у нас сохранилось.
(ссылка на гугл-форму)
5.	ЛАЙФ ФОТО И ЗАБАВНЫЕ ИСТОРИИ. В папке “Выпускники” также есть две папки:
- 🤳 ПАПКА «ЛАЙФ ФОТО»: в эту папку необходимо загрузить какие-либо памятные для вашего класса фотографии из повседневной жизни класса (спорт, друзья, поездки, перемены и так далее). ВАЖНО: нужно прислать либо 3 горизонтальных фотографии, либо 2 горизонтальные и 2 вертикальные. 
Старайтесь, чтобы фотографии были или общие, или чтобы много людей из класса было на фотографии. Эти фотографии у всех в журналах будут одинаковые. Если есть желание, Вы можете специально самостоятельно сделать прикольные памятные лайф фотки для вашего журнала.
- 😅 ПАПКА «ЗАБАВНЫЕ ИСТОРИИ»: в этой папке находится вордовский файл. В нём необходимо написать одну-две забавные памятные истории, которые когда-либо происходили в вашем классе. Пишите эти истории по возможности всем классом, так как они во всех журналах будут одинаковые, так же, как и лайф фото.

‼️Ещё раз акцентирую внимание на сроках, грамотности, количестве фотографий и объёме текста. Пожалуйста, соблюдайте эти правила, чтобы все ваши журналы были офигенными. На загрузку всех заданий у вас уйдёт примерно час. И ещё совет: не откладывайте всё на последний день, готовьте всё постепенно, с чувством, с толком, с расстановкой, чтобы наполнение журнала информацией было на высочайшем уровне. 
Желаю всем удачи! 🍀 
Сообщение старосте

Привет! 👋
Смотри, у меня к тебе как к самому ответственному выпускнику есть несколько очень важных заданий 🎓 
В журнале есть блоки, посвящённые учителям 👩‍🏫 Вот, что нужно:
❗️Необходимо всему вашему классу собраться и вспомнить смешные фразочки ваших учителей (всего нужно 8-10 фраз). То есть те фразы, которые конкретный учитель говорил постоянно, либо фразы, которые ассоциируются с конкретным учителем. Мы их тоже вставим вам в журналы, они будут также у каждого в журнале одинаковые.
❗️❗️Необходимо попросить у классного руководителя, чтобы он написал слова напутствия для вашего класса. Одно общее пожелание для всего класса (объём: 70-110 слов) 

✅ По итогу тебе нужно прислать мне 2 ворд документа: первый документ со смешными фразами учителей (также у каждой фразы ФИО учителя и ПРЕДМЕТ, который он у вас ведёт), второй с пожеланием классного руководителя (с ФИО классного руководителя).
Вот ссылка на примеры документов. Их нужно скачать, заполнить и прислать мне. (https://drive.google.com/drive/folders/1aH7wDAJVC3lmLi6pQ6Bhg3TSlSAni2oT?usp=sharing)

📸 Далее необходимо прислать фотографии ребят, которые не берут журнал. Это нужно для страницы с портретами и цитатами каждого выпускника. Лучше сфоткать его/её в школе самостоятельно на телефон с хорошей камерой. Скинь мне каждую фотку отдельно файлом (чтобы качество не терялось: нажать на скрепочку, там выбрать файл и через этот файл скинуть фотографии) и в сообщение укажи, пожалуйста, фамилию и имя человека.

🙏 Также проследи, пожалуйста, чтобы вы вместе с классом написали одну-две забавные памятные истории класса и загрузили 4 лайф фотки класса. Я об этом задании написал в вашу беседу.
Насчёт лайф - основная ценность в том, что такие фотографии запечатлевают “момент”. Если у вас не получается найти такие фотографии, или они в слишком плохом качестве, сделайте такие фотки специально для журнала. Главное, чтобы качество фото было хорошее. Вот тут примеры лайф-фоток, которые вы со своим классом можете повторить, или взять за идею
(https://drive.google.com/drive/folders/1hM1zkfSWL81qjZsiFbYf36SPhXRF2kMp?usp=sharing) 
По забавной истории - это может быть описание какой-то вашей перемены, урока, мероприятия школьного, поездки с классом. Такие “истории” в школьной жизни встречаются каждый день, нужно просто их вспомнить.

⌛️ На всё это дело у тебя также 15 дней, то есть к (число, смотреть в карточке класса) всё должно быть сделано.
Заранее говорю тебе большое спасибо! ❤️
Сообщение  родителю

Здравствуйте! 
✅ Мы начали работу с ребятами по сбору информации для журнала. Дали им 15 дней на выполнение заданий по написанию текста для журналов. Передайте, пожалуйста, родителям, чтобы они проконтролировали ребят, чтобы весь текст был написан без грамматических ошибок и в нужном объёме в срок. Заранее спасибо! 🙏`})})})]})});case"individual":return i.jsx("div",{className:"space-y-8",children:i.jsxs(K,{children:[i.jsx(je,{children:i.jsxs(be,{className:"flex items-center",children:[i.jsx(He,{className:"h-5 w-5 mr-2 text-blue-600"}),"Сообщение в беседу класса (начальное)"]})}),i.jsx(J,{children:i.jsx("div",{className:"bg-gray-50 p-4 rounded-lg",children:i.jsx("p",{className:"whitespace-pre-wrap text-sm leading-relaxed",children:`Инд
Сообщение в беседу класса

Ребята, привет! 👋
Меня зовут (имя менеджера), я являюсь менеджером вашего класса по подготовке выпускных журналов 🤓

Основные организационные моменты:
❗️Эта беседа будет только информационной, поэтому важно: В БЕСЕДЕ НЕ СПАМИТЬ, чтобы никакие важные сообщения не потерялись.
❗️По всем вопросам вы можете обращаться ко мне в личные сообщения в это время (менеджер указывает своё рабочее время), не стесняйтесь 😇

📸В беседу добавлен ваш фотограф - (имя фотографа) . 

Теперь у меня к вам несколько первых заданий:
✅Добавиться ко мне в друзья, чтобы я мог написать вам в личные сообщения в случае необходимости.
✅Подписаться на наш ИНСТ и группу ВК, там мы будем выкладывать разные моменты работы с вашим классом. Вот ссылка на группу в вк: https://vk.com/imjornal , название нашей инсты: im.jornal.
✅Выбрать старосту или добровольца, с которым я буду держать связь, и который будет мне помогать в кое-каких небольших, но важных моментах. Староста/доброволец, отпиши мне в ЛС🙏

Вся наша команда и лично я сделаем всё возможное, чтобы работа была в кайф, и вы получили классные, стильные, и уникальные выпускные журналы. Начнём! 🚀
Сообщение в беседу класса

Ребята, подскажите, все ли ваши одноклассники есть в беседе? 
❗️Тут должны быть даже те, кто не берёт журнал. Если кого-то не хватает, то добавьте. Если у человека нет ВК, то напишите мне его ФИ. 
Сообщение ответственному родителю

Здравствуйте! 👋
Меня зовут (…), я являюсь менеджером по подготовке выпускного журнала вашего ребёнка! 👨‍💻
Мне предоставили Ваш контакт как ответственного родителя. Как я могу к Вам обращаться?


📍Совсем скоро мы начнём работу с классом. С ребятами мы взаимодействуем через беседу в ВК. Мне необходимо добавить Вас в эту беседу. Писать там ничего не придётся. Все что потребуется: это наблюдать при необходимости за новостями и процессом подготовки журналов, передавать актуальную информацию остальным родителям.
✅ Можете, пожалуйста, прислать ссылку на вашу страницу в ВК. Или, если не получается, скинуть ссылку. Скажите, как Вас там найти.

📍Также, просьба: предоставить на всякий случай контакт ещё одного родителя, с кем мы могли бы взаимодействовать по поводу работы над журналами.
Сообщение в беседу класса

Ребята, привет! 👋 
❗️Посмотрите, пожалуйста, правильно ли написаны ваши имена и фамилии.
Это важно, потому что так будет напечатано в журналах. Внести правки потом будет невозможно, поэтому всё проверить необходимо сейчас.

P.S. Список составлялся на основе данных, предоставленных родителями 📋

Менеджеру необходимо создать опросник в вк:
Название: Проверьте правильность ваших ФИ.
Варианты ответа:
-Всё правильно
-Неправильно (написал менеджеру, как нужно исправить)
Сообщение ответственному родителю

Здравствуйте! 👋
Сейчас необходимо переслать это сообщение в родительский чат.

Сейчас я отправлю Вам список ребят. Пожалуйста, проверьте, все ли имена и фамилии написаны правильно?
❗️Этот момент очень важен, потому что так, как ФИ указаны здесь, так они и будут написаны в журналах. 
❗️Также, пожалуйста, проверьте правильно ли указан класс (нужна буква класса или нет). 


Особое внимание буквам Е/Ё (к примеру, Артем/Артём), именам Софья/София, Данил/Даниил/Данила и т.п.  

Отпишите мне, как только всё будет проверено. Заранее спасибо! 💙 
Сообщение ответственному родителю

Здравствуйте! 👋

❗️Очень важный вопрос, который необходимо решить родителям сообща: будем ли вставлять портретные фото ребят в журнал Классного руководителя, которые не берут журнал?

Выпускникам, которые не заказывают журнал, наш фотограф не будет делать индивидуальные фото. В случае необходимости им придётся прислать свои фотографии (по одной фотке). 
📍Важный момент: наши фото и фото тех, кто не берёт журнал, будут сильно отличаться по качеству, что вероятно может портить визуальную составляющую журнала. 

Вставить не наши фото никакой сложности не будет, вопрос в том, есть ли в этом необходимость? Прошу принять решение сегодня-завтра.
Заранее спасибо! 💙
Сообщение в беседу класса

Всем привет! 👋 
✍️ Мы начинаем сбор текстовой информации для ваших выпускных журналов. Сначала сообщу вам общий регламент этого этапа работы, затем напишу что, куда и когда.

По регламенту:
1)❗️Вам дается 15 дней на выгрузку всех материалов для журнала, то есть к 20:00 (дедлайн; смотреть в карточке класса) всё у всех должно быть загружено. После истечения срока никакую информацию внести будет НЕЛЬЗЯ!!! Поэтому отнестись к этому нужно с должным вниманием и ответственностью;
2)❗️При написании текстовой информации обращайте внимание на ГРАМОТНОСТЬ!!! Орфографические, пунктуационные и речевые ошибки в тексте журнала мы не исправляем. Также мат, оскорбления, пошлости и тому подобные выражения в журнал вставлены не будут, и более того, задания в таком случае придётся переделывать.

📂Инструкция как, что и куда:
1) 📝 ГУГЛ ОПРОС «ОСНОВНАЯ ИНФОРМАЦИЯ»: необходимо ответить на все вопросы по порядку за 1 раз, так как при выходе ответы не сохраняются. Все вопросы обязательные. Перед каждым вопросом указано примерное количество предложений, в которое нужно обязательно уложиться.
Все подробности по заполнению опроса указаны в описании самого опроса. Перед закрытием опроса ОБЯЗАТЕЛЬНО нажать кнопку “Отправить”, чтобы всё написанное у нас сохранилось. Вот ссылка на опрос, который необходимо пройти каждому из вас в нужный дедлайн:
(ссылка на гугл-форму)

2) 🗂️ ИНДИВИДУАЛЬНАЯ ПАПКА ВЫПУСКНИКА: в ней будут находиться все ваши папки. Задача: найти свою папку и зайти в неё. В этой папке будут другие:
- 👶 ПАПКА «ДЕТСКИЕ ФОТО»: в эту папку нужно загрузить свои детские фотографии из начальной школы (в идеале 1-ый класс). Количество фото: либо 2 вертикальные, либо 1 вертикальное и 2 горизонтальные.
- 👨‍👩‍👦 ПАПКА «ФОТО С РОДИТЕЛЯМИ»: в эту папку нужно загрузить свои фотографии с родителями или же просто фотографии родителей в количестве 2 фотографий (НЕ БОЛЕЕ 2-х ФОТО!).
-🤳 ПАПКА «МОЯ ВНЕУЧЕБНАЯ ЖИЗНЬ»: в эту папку необходимо загрузить какие-либо памятные фотографии из своей повседневной жизни в количестве 4 фотографий (спорт, друзья, увлечения, поездки, перемены и так далее). ВАЖНО: нужно прислать 4 ВЕРТИКАЛЬНЫЕ фотографии.

- 📸 ПАПКА «ФОТО ИЗ ПОМЕЩЕНИЯ»: в эту папку ничего загружать самостоятельно НЕ НУЖНО. Сюда фотографы загрузят фотографии для журнала, сделанные на фотосессии;
(ссылка на папку “Выпускники”)
В этой же папке (“Выпускники”) ещё есть:
- 🤳 ПАПКА «НАША ШКОЛЬНАЯ ЖИЗНЬ»: в эту папку необходимо загрузить какие-либо памятные для вашего класса фотографии из повседневной жизни класса (спорт, друзья, поездки, перемены и так далее). ВАЖНО: нужно прислать либо 3 горизонтальных фотографии, либо 2 горизонтальные и 2 вертикальные. 
Старайтесь, чтобы фотографии были или общие, или чтобы много людей из класса было на фотографии. Эти фотографии у всех в журналах будут одинаковые. Если есть желание, Вы можете специально самостоятельно сделать прикольные памятные лайф фотки для вашего журнала.

3) 🫂 ГУГЛ ОПРОС «ПОЖЕЛАНИЯ И СЛОВА ОДНОКЛАССНИКАМ»: здесь всем нужно будет написать пожелания или памятные слова КАЖДОМУ своему однокласснику, все пожелания и слова будут вставлены в ваши журналы с подписью от кого оно. Старайтесь писать для всех, чтобы спустя время было приятно перечитывать написанное для вас. Перед закрытием опроса ОБЯЗАТЕЛЬНО нажать кнопку “Отправить”, чтобы всё написанное у нас сохранилось.
(ссылка на гугл-форму)

4) 💭 ГУГЛ ОПРОС «ЦИТАТЫ»: здесь ВСЕМ нужно будет написать цитату, которая будет располагаться на отдельной странице журнала. Перед закрытием опроса ОБЯЗАТЕЛЬНО нажать кнопку “Отправить”, чтобы всё написанное у нас сохранилось.
(ссылка на гугл-форму)


‼️Ещё раз акцентирую внимание на сроках, грамотности, количестве фотографий и объёме текста. Пожалуйста, соблюдайте эти правила, чтобы все ваши журналы были офигенными. На загрузку всех заданий у вас уйдёт примерно час. И ещё совет: не откладывайте всё на последний день, готовьте всё постепенно, с чувством, с толком, с расстановкой, чтобы наполнение журнала информацией было на высочайшем уровне. 
Желаю всем удачи! 🍀 
Сообщение  старосте

Привет! 👋
Смотри, у меня к тебе как к самому ответственному выпускнику есть несколько очень важных заданий 🎓
 В журнале есть блоки, посвящённые учителям 👩‍🏫 Вот, что нужно:
❗️ Необходимо пройтись по учителям-предметникам (классный руководитель не в счёт) и собрать с них пожелания для вашего выпускного журнала. Одно пожелание от одного учителя. У всех выпускников будут одни и те же пожелания, то есть одно общее пожелание от учителя на класс. Можешь это сделать либо самостоятельно, либо разделить это задание между ребятами (чтобы одни ребята попросили пожелание у одного учителя, другие у другого и так далее, пока не соберутся пожелания от всех учителей).
❗️❗️Необходимо всему вашему классу собраться и вспомнить смешные фразочки ваших учителей (всего нужно 8-10 фраз). То есть те фразы, которые конкретный учитель говорил постоянно, либо фразы, которые ассоциируются с конкретным учителем. Мы их тоже вставим вам в журналы, они будут также у каждого в журнале одинаковые.
❗️❗️❗️Необходимо попросить у классного руководителя, чтобы он написал слова напутствия для вашего класса. Одно общее пожелание для всего класса (объём: 70-110 слов) 

✅ По итогу тебе нужно прислать мне 3 ворд документа: первый с пожеланиями всех учителей (у каждого пожелания написать ФИО учителя и ПРЕДМЕТ, который он у вас ведёт), второй документ со смешными фразами учителей (также у каждой фразы ФИО учителя и ПРЕДМЕТ, который он у вас ведёт), третий с пожеланием классного руководителя (с ФИО классного руководителя)
Вот ссылка на примеры документов. Их нужно скачать, заполнить и прислать мне. (https://drive.google.com/drive/folders/1LA_LF8hnFICCcMJC5tUNqbC4MDJo1kVL?usp=sharing)

🙏 Также проследи, пожалуйста, чтобы вы вместе с классом загрузили 4 лайф фотки класса. Я об этом задании написал в вашу беседу.

⌛️ На всё это дело у тебя также 15 дней, то есть к (число, смотреть в карточке класса) все должно быть сделано.
Заранее говорю тебе большое спасибо! ❤️
Сообщение  родителю

Здравствуйте! 👋

✅ Мы начали работу с ребятами по сбору информации для журнала. Дали им 15 дней на выполнение заданий по написанию текста для журналов. Передайте, пожалуйста, родителям, чтобы они проконтролировали ребят, чтобы весь текст был написан без грамматических ошибок и в нужном объёме, фотографии загружены в нужном количестве, и чтобы никто не опоздал и прислал нам все материалы вовремя. Заранее спасибо! 🙏
Ещё один момент: одно из заданий для ребят - прислать 2 фотографии с родителями или просто фото родителей. Если возникают трудности с поиском фото, их нужно успеть сделать за 15 дней. Нужны самые обычные фото, даже селфи подойдёт. Главное, чтобы качество фото было приемлемым.

❗️Второй момент касается уже задания непосредственно для самих родителей. Каждому родителю нужно написать напутственные слова-пожелания для своего ребёнка. Действия родителя:
1.	Перейти по этой ссылке: (ссылка на гугл-форму). 
2.	В первом вопросе нужно написать Фамилию и Имя своего ребёнка.
3.	Во втором вопросе нужно написать напутственные слова-пожелания для своего ребёнка.
4.	Как только все будет написано, нужно нажать кнопку «ОТПРАВИТЬ», она будет в самом низу.
ВАЖНО: у каждого ребёнка должно быть одно пожелание, то есть если мама и папа хотят написать разные слова, то они должны их написать в одной и той же Гугл-форме с пометкой ОТ МАМЫ: … и ОТ ПАПЫ: … 

‼️ Обращаю внимание на то, что опрос необходимо заполнить за один раз, иначе ничего не сохранится и придётся писать заново. Когда пожелание будет полностью написано, перед закрытием опроса ОБЯЗАТЕЛЬНО нажать кнопку “Отправить”, чтобы всё написанное у нас сохранилось.

⌛️ Срок на выполнение этого задания у Вас, как и у ребят, 15 дней (до (число, смотреть в карточке класса)).

‼️ Ваша задача: переслать это сообщение в чат родителей и проконтролировать, чтобы все родители увидели это сообщение. Если у кого-то из родителей возникнут какие-либо проблемы с заполнением Гугл-формы, пусть пишут Вам, а Вы пересылайте их сообщения мне.
Ещё раз спасибо! Хорошего Вам дня! ☀️
Сообщение старосте

Привет! 👋 
🙏 У меня есть просьба к тебе:
Напиши мне, пожалуйста, следующую информацию:
1.	Сколько у вас в классе мальчиков и девочек
2.	Список предметов, которые вы прошли за 11 лет обучения (напиши +- по памяти)
3.	Список предметов, которые вы изучаете именно в 11 классе 
Ещё раз большое спасибо! 💙 

Сообщение в беседу класса:

Ребята, привет! 👋
Оперативное задание, которое выполнить нужно каждому сегодня. Пройти этот опросник (он анонимный): (ссылка на опросник)
Прохождение опросника займёт у вас меньше минуты 😅
Это нужно для страницы со статистикой 📊 
КЛАСС РАЗДЕЛЁН НА ПОЛОВИНЫ, ОПТИМАЛЬНЫЙ КЛАСС
Ребята, привет! 👋
📸 Итак, мы начинаем 2 этап подготовки к фотосессии.
🗓️ Вот даты, из которых вы можете выбрать удобные для вас: 
(свободные даты фотографа). 

❗️ Напоминаю, вы выбираете 2 даты, первая дата - для первой половины класса. Вторая дата - для второй половины класса. 
⏱️ Также, необходимо определиться со временем. ВАЖНО: группы идут друг за другом (например, первая группа фоткается с 13:00 до 13:45, значит следующая группа должна быть в студии уже в 13:40).

📍 Также вам необходимо определиться с локациями, где вы будете фотографироваться. Напоминаю, что одна локация - для половины класса. Локации у двух половин могут отличаться. 
✅ Ваш класс заказал такой вариант, при котором мы предоставляем локацию для съёмок в студии. Вы выбираете понравившийся вариант, а мы арендуем. 

Варианты студий:
1.	г. Иваново: Space - любой зал (https://vk.com/space_space_project);
2.	г. Иваново: Азарт студия - зал флэшпоп (https://vk.com/azartstudios?w=product-110133865_1533651/query).

⏳ К 20:00 послезавтрашнего дня жду от старосты список в таком формате:
ПЕРВАЯ ПОЛОВИНА *такого-то числа* фоткается в *такой-то локации*:
Группа 1 в *такое-то время*
Группа 2 в *такое-то время*
И тд 
ВТОРАЯ ПОЛОВИНА *такого-то числа* фоткается в *такой-то локации*:
Группа 3 в *такое-то время*
Группа 4 в *такое-то время*
И тд 

ВАЖНО: расчётное время на группы следующее: 
3 человека можно сфоткать за 35 съёмочных минут; 4 человека - 45 съёмочных минут; 5 человек - 55 съёмочных минут.
Этого времени будет достаточно, чтобы фотограф успел сделать вам необходимое количество фотографий.





КЛАСС !НЕ! РАЗДЕЛЁН НА ПОЛОВИНЫ, ОПТИМАЛЬНЫЙ  КЛАСС
Ребята, привет! 👋
📸 Итак, мы начинаем 2 этап подготовки к фотосессии.
🗓️ Вот даты, из которых вы можете выбрать удобные для вас: 
(свободные даты фотографа). 

❗️ Вы выбираете 1 дату для всего класса. 
⏱️ Также, необходимо определиться со временем. ВАЖНО: группы идут друг за другом (например, первая группа фоткается с 13:00 до 13:45, значит следующая группа должна быть в студии уже в 13:40).

📍 Также вам необходимо определиться с локацией, где вы будете фотографироваться. Один вариант локации для всего класса. 
✅ Ваш класс заказал такой вариант, при котором мы предоставляем локацию для съёмок в студии. Вы выбираете понравившийся вариант, а мы арендуем.
Варианты студий:
1.	г. Иваново: Space - любой зал (https://vk.com/space_space_project);
2.	г. Иваново: Азарт студия - зал флэшпоп (https://vk.com/azartstudios?w=product-110133865_1533651/query).

⏳ К 20:00 послезавтрашнего дня жду от старосты список в таком формате:
Класс фотографируется *такого-то числа* в *такой-то локации*:
Группа 1 в *такое-то время*
Группа 2 в *такое-то время*
И тд 

ВАЖНО: расчётное время на группы следующее: 
3 человека можно сфоткать за 35 съёмочных минут; 4 человека - 45 съёмочных минут; 5 человек - 55 съёмочных минут.
Этого времени будет достаточно, чтобы фотограф успел сделать вам необходимое количество фотографий.
Класс разделён на половины: 
Ребята, привет! 👋 
‼️ Сегодня очень важно дать окончательный ответ насчёт выбора дат и локаций
Жду от старосты итоговое решение ✅

Класс НЕ разделён на половины: 
Ребята, привет!
‼️ Сегодня очень важно дать окончательный ответ насчёт выбора даты и локации
Жду от старосты итоговое решение ✅
Сообщение ответственному родителю:

Здравствуйте! 👋
📍Есть один момент, который нужно решить сейчас. Это касается общей съёмки. Эту съёмку мы проводим в школе, делаем там общее фото класса и фото учителей.
❗️К Вам просьба: через руководство школы договориться, чтобы нашего фотографа пустили в школу для создания необходимых фотографий для выпускного журнала в определенную дату и время (всего на 1 час).

📸 В случае, если администрация школы ни в какую не согласна пускать нас в школу для создания фоток в выпускной журнал, мы предлагаем провести эту съёмку в студии. Аренда студии в данном случае для общей съёмки осуществляется за счёт заказчиков. День и время съёмки будут выбирать выпускники из дат, предложенных нами. 

Как только станет известно, сообщите мне. Заранее спасибо! 💙
Сообщение ответственному выпускнику
Только для классов, у которых стоит соответствующая задача
Привет! Смотри, мы начинаем решать вопрос насчёт общей съёмки вашего класса. Суммарно общая съёмка будет идти около 1-го часа. За это время мы должны сделать: 
•	Индивидуальное фото классному руководителю (5 минут)
•	Общее фото учителей-предметников (5 минут)
•	Две общие фотографии класса (40 минут) 
Первое, что нужно: обсудите с ребятами, в какой день недели и какое время будет удобно. После этого мы вам предложим варианты дат.
Ожидаю от тебя ответ в таком формате: 
Общую съёмку можем провести: 
•	в понедельник с 11:00 
•	во вторник в интервале с 12:00 до 14:00
•	в среду после 15:00 
Ответ нужно дать к завтрашнему дню. Спасибо!
Сообщение старосте  
Привет! 👋
📍В общем смотри, у нас есть небольшая задачка.
С вашим классом надо в один день сделать общую фотку всего класса. Съёмка будет длиться 1 час ⏳

❌ В школе провести эту съёмку не получится, поэтому поступим следующим образом:
1.	👩‍🏫 Одно общее фото учителей вам будет необходимо сделать самостоятельно в школе на айфон какого-нибудь ученика из класса (вот инструкция: https://docs.google.com/document/d/17v_WkHglexeNrQc4m98zwaGd2fXoW2tq9R4M6kj4LVA/edit?usp=sharing).
2.	📸 Съёмка класса будет проходить в студии. Вам с ребятами сообща нужно выбрать дату и время съёмки из предложенных. Надо подобрать день так, чтобы всем было удобно:
(свободные даты и время фотографа общей съёмки)
❗️Нужно подобрать такую дату и время, чтобы ВСЕ ребята смогли присутствовать. 
3.	👩‍🏫 Одно индивидуальное фото классного руководителя. Желательно, чтобы он смог присутствовать с Вами на этой съёмке. В ином случае Вам необходимо будет либо сфотографировать его самостоятельно в школе (по этому примеру: https://docs.google.com/document/d/19pldGgnk7HLcE2o7WVhn_cV9OTKwfFsNPTsaWgx736I/edit?usp=sharing ), либо прислать его фото файлом из соц. сетей в хорошем качестве.

Общее фото класса делаем примерно 40 минут ⏳
Нам с вами надо будет сделать 2 общие фотки ‼️
Эти фото будут интересными, а не просто вас в линеечку поставят 🤌
Фотографии можно сделать как в одном, так и в двух разных образах (если образа 2, то переодеться нужно будет очень быстро) 👗👔

💡 Мы заинтересованы в том, чтобы сделать всё максимально круто, поэтому понадобится небольшая помощь.
Вопрос по общей съёмке я буду решать через тебя 🤝

Что требуется: 
1) 📍Выбрать день и время, когда все выпускники вашего класса смогут.
2) 📍Решить по образу: вы будете на обеих фотках в одном образе или разных. 
Ожидаю от вас день и время

Сообщение старосте

Привет! 👋

📍В общем смотри, у нас есть небольшая задачка.
С вашим классом надо в один день сделать общую фотку вашего учительского состава и общую фотку всего класса. Съёмка будет длиться 1 час ⏳

👩‍🏫 Одно общее фото учителей делаем в школе - 5 минут времени, индивидуальное классрука - 5 минут.
Надо будет собрать всех учителей на 5 минут, чтобы мы сделали это фото. 
❗️ВАЖНО: учителей надо предупредить заранее (лучше первое предупреждение за 2 недели до съёмки, второе предупреждение за неделю до съёмки, третье предупреждение за 2 дня до съёмки, учителям лучше так) что фото учительского состава всех вместе!

Общее фото класса делаем в школе 40 минут ⏳
Нам с вами надо будет сделать 2 общие фотки ‼️
Эти фото будут интересными, а не просто вас в линеечку поставят 🤌
Фото можно будет сделать в спортзале/актовом зале/кабинете/коридоре 🏛️
Фотографии можно сделать как в одном, так и в двух разных образах (если образа 2, то переодеться нужно будет очень быстро) 👔👗

❗️ОЧЕНЬ ВАЖНО, что процесс съёмки необходимо организовать последовательно, одно за другим (фото учителей и сразу же затем общее фото класса (ну либо наоборот в последовательности), без временных промежутков).
Надо подобрать день так, чтобы всем было удобно. 
‼️Ну и главное, чтобы фотографа пустили в школу!!!

💡 Мы заинтересованы в том, чтобы сделать всё максимально круто, поэтому понадобится небольшая помощь.
Вопрос по общей съёмке я буду решать через тебя 🤝

Что требуется: 
1) 📍Выбрать день и время, когда смогут учителя и ваш класс.
Варианты: 
(свободные даты и время)
(Необходимо выбрать один день и одно время: например, 24 января в 11:00 учителя в 11:10 весь класс.) 
2) 📍Предупредить учителей, что будет одно общее фото всего учительского состава и индивидуально классного руководителя.
3) 📍Решить с классом, где будем делать общее фото - это может быть или актовый, или спортивный зал. 
4) 📍Решить по образу: вы будете на обеих фотках в одном образе или разных. 
5) 📍Предупредить администрацию школы, чтобы фотографа пустили в школу в выбранный вами день и время. 
6) 📍Необходимы будут: 2 парты, стулья около 15 штук.

Ожидаю от вас день и время

Сообщение родителю

Здравствуйте! 👋

✅ Мы с ребятами решаем вопрос насчёт общей съемки класса и учителей. 
❌ В школе провести эту съёмку не получится, поэтому поступим следующим образом:
1.	👩‍🏫 Одно общее фото учителей выпускники сделают самостоятельно в школе на хороший телефон. Инструкцию мы им скинули.
2.	📸 Съёмка класса будет проходить в студии. Ребята выбрали следующую дату и время - (указать время, которое выбрали выпускники). Как говорилось ранее, оплата студии для этой съёмки осуществляется за счёт заказчиков.
3.	👩‍🏫 Одно индивидуальное фото классного руководителя. Желательно, чтобы он смог присутствовать с выпускниками на съёмке. В ином случае выпускникам необходимо будет либо сфотографировать его самостоятельно в школе (инструкцию тоже скинули), либо прислать его фото файлом из соц. сетей в хорошем качестве.

Общее фото класса делаем примерно 40 минут ⏳
Нам с Выпускниками надо будет сделать 2 общих фото ‼️

Заранее ставлю Вас в известность, спасибо

Сообщение родителю
Здравствуйте! 👋

✅ Мы с ребятами решили вопрос насчёт общей съемки класса и учителей. Она будет проходить (выбранная дата и время)

❗️Продублирую Вам инструктаж по этой съемке, чтобы Вы были в курсе, а также проконтролировали процесс через классного руководителя.

👩‍🏫 Одно общее фото учителей делаем в школе - 5 минут времени, индивидуальное классного руководителя - 5 минут.
Надо будет собрать всех учителей на 5 минут, чтобы мы сделали это фото. 
❗️ВАЖНО: учителей надо предупредить (лучше первое предупреждение за 2 недели до съёмки, второе предупреждение за неделю до съёмки, третье предупреждение за 2 дня до съёмки, учителям лучше так), что фото учительского состава всех вместе!

Общее фото класса делаем в школе 40 минут ⏳

‼️Ну и главное, чтобы фотографа ПУСТИЛИ в школу!!!

💡Мы заинтересованы в том, чтобы сделать всё максимально круто, поэтому просим вас проконтролировать организацию общей съёмки.

Что требуется: 
1) 📍Предупредить администрацию школы, чтобы фотографа пустили в школу в выбранный день и время. 
2) 📍Предупредить учителей, что будет одно общее фото всего учительского состава и индивидуально классного руководителя.
3) 📍Необходимы будут: 2 парты, стулья около 15 штук.

Заранее спасибо

Сообщение старосте

Привет! 👋 
📸 Общая съёмка будет проходить в студии (дата и время съёмки), (ссылка на студию, название зала).

По съёмке: 
1.	👔👗 Решить по образу: вы будете на обеих фотках в одном образе или разных.
2.	👞 ОБУВЬ. В студии необходима сменная, абсолютно чистая и сухая обувь.
3.	📍ПРОКЛЕИТЬ ОБУВЬ БУМАЖНЫМ СКОТЧЕМ (либо дома, либо в студии попросить его за 10 минут до начала фотосессии), АККУРАТНО ВСЮ ПОДОШВУ, ЧТОБЫ СКОТЧА НЕ БЫЛО ВИДНО НА БОРТИКАХ, в противном случае фотограф не сможет убрать это обработкой.
❗️Это важно, иначе, в случае порчи фотостудии, придется выплатить ШТРАФ.
4.	🗑️ Если вы оставляете после себя МУСОР (фантики, бутылки и тому подобное), то его нужно будет УБРАТЬ, чтобы студия выглядела так, какой она была перед первой группой.

Что касается учителей: 
1.	❗️Одно общее фото учителей сделать самостоятельно в школе на айфон кого-нибудь из учеников класса (вот инструкция: https://docs.google.com/document/d/17v_WkHglexeNrQc4m98zwaGd2fXoW2tq9R4M6kj4LVA/edit).
2.	❗️Одно индивидуальное фото классного руководителя. Желательно, чтобы он смог присутствовать с Вами на съёмке. В ином случае вам необходимо будет либо сфотографировать его самостоятельно в школе (по этому примеру: https://docs.google.com/document/d/19pldGgnk7HLcE2o7WVhn_cV9OTKwfFsNPTsaWgx736I/edit), либо прислать его фото файлом из соц. сетей в хорошем качестве.
Сообщение старосте

Привет! 👋
📸 Общая съёмка будет проходить у вас в школе (дата и время съёмки)
Что требуется: 
1) Организовать учителей, чтобы они все собрались в одном месте в (время начала съёмки учителей) 👩‍🏫
2) Решить с классом, где будем делать общее фото - место 🏛️
3) Решить по образу: вы будете на обеих фотках в одном образе или разных 👔👗
4) Предупредить администрацию школы, чтобы фотографа пустили в школу в выбранный вами день и время 👨‍💼
5) Необходимы будут: 2 парты, стулья около 15 штук ✅

Сообщение родителю

Здравствуйте! 👋
✅ Сообщение с уточнением по общей съёмке отправил в беседу с ребятами. Она будет проходить (дата и время съёмки, ссылка на студию, название зала)

Что касается учителей: 
1.	❗️Одно общее фото учителей выпускники сделают самостоятельно в школе на хороший телефон.
2.	❗️Одно индивидуальное фото классного руководителя. Желательно, чтобы он смог присутствовать с выпускниками на съёмке.

Пожалуйста, проконтролируйте процесс подготовки. Заранее спасибо! 💙
Сообщение родителю

Здравствуйте! 👋
✅ Сообщение с уточнением по общей съёмке отправил в беседу с ребятами. 

Дублирую Вам информация, что требуется от учеников: 
1) Организовать учителей, чтобы они все собрались в одном месте в (время начала съёмки учителей) 👩‍🏫
2) Решить с классом, где будем делать общее фото - место 🏛️
3) Решить по образу: вы будете на обеих фотках в одном образе или разных 👗👔
4) Предупредить администрацию школы, чтобы фотографа пустили в школу в выбранный вами день и время 👨‍💼
ВАЖНО: нужно, чтобы в день съёмки за 5 минут до начала кто-нибудь (это может быть классный руководитель, староста или кто-либо из родителей) встретил фотографа у школы и провёл к месту, где будет проходить съёмка. Решите, пожалуйста, этот вопрос и предоставьте мне номер телефона этого человека. Фотограф по приезде позвонит, скооперируются 
5) Необходимы будут: 2 парты, стулья около 15 штук ✅

Пожалуйста, проконтролируйте процесс подготовки. Заранее спасибо!💙
Сообщение старосте

Привет! 👋
❗️Напоминаю, что общая съёмка будет проходить завтра в студии (дата и время съёмки), (ссылка на студию, название зала). В студию всем необходимо прийти за 10 минут до начала съёмки.

📸 По съёмке: 
1.	👔👗 Решить по образу: вы будете на обеих фотках в одном образе или разных.
2.	👞 ОБУВЬ. В студии необходима сменная, абсолютно чистая и сухая обувь.
3.	📍 ПРОКЛЕИТЬ ОБУВЬ БУМАЖНЫМ СКОТЧЕМ (либо дома, либо в студии попросить его за 10 минут до начала фотосессии), АККУРАТНО ВСЮ ПОДОШВУ, ЧТОБЫ СКОТЧА НЕ БЫЛО ВИДНО НА БОРТИКАХ, в противном случае фотограф не сможет убрать это обработкой.
❗️Это важно, иначе, в случае порчи фотостудии, придется выплатить ШТРАФ.
4.	🗑️ Если вы оставляете после себя МУСОР (фантики, бутылки и тому подобное), то его нужно будет УБРАТЬ, чтобы студия выглядела так, какой она была перед первой группой.


Сообщение старосте

Привет! 👋 
❗️Напоминаю, что общая съёмка будет проходить завтра у вас в школе (дата и время съёмки). Фотограф приедет к школе за 10-15 минут до съёмки. 
‼️ Просьба: встретить его у школы и помочь донести оборудование.

Необходимо: 
1) Организовать учителей, чтобы они все собрались в одном месте в (время начала съёмки учителей) 👩‍🏫
2) Решить с классом, где будем делать общее фото - место 🏛️
3) Решить по образу: вы будете на обеих фотках в одном образе или разных 👗👔
4) Предупредить администрацию школы, чтобы фотографа пустили в школу в выбранный вами день и время 👨‍💼
5) Необходимы будут: 2 парты, стулья около 15 штук ✅


Сообщение  родителю

Здравствуйте! 👋
❗️Напоминаю, что общая съёмка будет проходить завтра (дата и время съёмки, ссылка на студию, название зала)
✅ Сообщение с напоминанием о съёмке мы ребятам отправили. 
📍Пожалуйста, скажите родителям, чтобы ещё раз напомнили ребятам. Заранее спасибо! 💙
Сообщение родителю 

Здравствуйте! 👋
❗️Напоминаю, что общая съёмка будет проходить у вас в школе завтра (дата и время съёмки)

Напоминаю, что требуется от ребят: 
1) Организовать учителей, чтобы они все собрались в одном месте в (время начала съёмки учителей) 👩‍🏫
2) Решить с классом, где будем делать общее фото - место 🏛️
3) Решить по образу: ребята будут на обеих фотках в одном образе или разных 👗👔
4) Предупредить администрацию школы, чтобы фотографа пустили в школу в выбранный вами день и время 👨‍💼
5) Необходимы будут: 2 парты, стулья около 15 штук ✅

Сообщение с напоминанием о съёмке мы ребятам отправили. 
📍Пожалуйста, скажите родителям, чтобы ещё раз напомнили ребятам. Необходимо убедиться, что фотографа пустят в школу.
Заранее спасибо! 💙
В группах необходимо указать всех выпускников. Неберущих помечать - Имя Фамилия (не берёт). Максимальное количество человек в группе - 5. Максимальное количество групп - см. во втором столбце разделения на группы. 

Ребят, привет 👋 
Проверьте, пожалуйста, все ли есть в списке и всё ли правильно😇
Уточнение по съёмке:
 
Далее все те же скрипты что и в колллективном
`})})})]})});case"kindergarten":return i.jsx("div",{className:"space-y-8",children:i.jsxs(K,{children:[i.jsx(je,{children:i.jsxs(be,{className:"flex items-center",children:[i.jsx(He,{className:"h-5 w-5 mr-2 text-blue-600"}),"Сообщение для детского сада"]})}),i.jsx(J,{children:i.jsx("div",{className:"bg-gray-50 p-4 rounded-lg",children:i.jsx("p",{className:"whitespace-pre-wrap text-sm leading-relaxed",children:`Детс сад
Сообщение ответственному родителю

Здравствуйте!
Меня зовут (…), я являюсь менеджером по подготовке выпускных журналов для вашей группы! 👨‍💻
Мне предоставили Ваш контакт как ответственного родителя. Как я могу к Вам обращаться?


Сейчас я отправлю Вам список ребят. Пожалуйста, проверьте, все ли имена и фамилии написаны правильно?
❗️Этот момент очень важен, потому что так, как ФИ указаны здесь, так они и будут написаны в журналах. 
❗️Также, пожалуйста, проверьте правильно ли указан класс (нужна буква класса или нет). 


Особое внимание буквам Е/Ё (к примеру, Артем/Артём), именам Софья/София, Данил/Даниил/Данила и т.п.  

📍Также, просьба: предоставить на всякий случай контакт ещё одного родителя, с кем мы могли бы взаимодействовать по поводу работы над журналами.

Менеджеру необходимо прикрепить обрезанный скрин списка класса

Сообщение ответственному родителю

Здравствуйте! 👋

❗️Очень важный вопрос, который необходимо решить родителям сообща: будем ли вставлять портретные фото ребят, которые не берут журнал?

Детям, которые не заказывают журнал, наш фотограф не будет делать индивидуальные фото. В случае необходимости их родителям придётся прислать свои фотографии (по одной фотке). 
📍Важный момент: наши фото и фото тех, кто не берёт журнал, будут вероятно сильно отличаться по качеству, что скорее всего будет портить визуальную составляющую журнала. 

Вставить не наши фото никакой сложности нет, вопрос в том, необходимо ли это? Это решение должно быть в первую очередь за родителями тех детей, кто берёт журнал. Прошу принять решение сегодня-завтра.
Заранее спасибо! 💙
Сообщение ответственному родителю

Здравствуйте!
Это сообщение необходимо переслать остальным родителям.
✍️ Мы начинаем сбор текстовой информации и фотографий для выпускных журналов. Сначала сообщу вам общий регламент этого этапа работы, затем напишу что, куда и когда.

По регламенту:
❗️Вам дается 15 дней на выгрузку всех материалов для журнала, то есть к 20:00 (дата дедлайна) всё у всех должно быть загружено. После истечения срока никакую информацию внести будет НЕЛЬЗЯ!!! Поэтому отнестись к этому нужно с должным вниманием и ответственностью;
❗️При написании текстовой информации обращайте внимание на ГРАМОТНОСТЬ!!! Орфографические, пунктуационные и речевые ошибки в тексте журнала мы не исправляем. 

📂 Инструкция как, что и куда:
Задание №1. Текстовые блоки:
1.	Необходимо написать 4 прилагательных, описывающих вашего ребёнка
2.	Необходимо написать ответы-размышления ребёнка на вопрос «Что я думаю о себе»
3.	«Интервью со мной». Необходимо написать ответа ребёнка на каждый вопрос
4.	«Памятные истории». Родителям самостоятельно, без участия ребёнка, необходимо написать какую-либо историю из детства ребёнка
5.	«Письмо самому себе в будущее». Родителям необходимо написать слова-размышления своего ребёнка о своем будущем
6.	«Пожелание от родителей». Родителям необходимо написать пожелания для своего ребёнка.
Вот ссылка на гугл-форму, в которой это необходимо заполнить: 
(вставить ссылку на гугл форму)

Эту информацию можно собрать родителям самостоятельно, или попросить воспитателя организовать в группе в садике интерактив, при котором дети вместе с воспитателем будут писать необходимую информацию для выпускного журнала, чтобы затем воспитатель передал родителя написанную информацию для загрузки в гугл-форму.

ОТДЕЛЬНОЕ ЗАДАНИЕ ДЛЯ ВОСПИТАТЕЛЕЙ: воспитателям нужно написать пожелания для ребят. Один воспитатель - одно пожелание. По объёму: 20-35 слов. Эти пожелания они могут прислать Вам либо просто текстовым сообщением, либо Ворд документом. Пожелание нужно будет переслать мне и написать ФИО воспитателей.

СБОР РИСУНКОВ ОТДЕЛЬНЫМ СООБЩЕНИЕМ
Задание №2. «Рисунок» 
Смотрите, в журнале у каждого есть страница с рисуноком семьи. Каждому ребёнку необходимо нарисовать свою семью. (УБЕДИТЕЛЬНАЯ ПРОСЬБА К РОДИТЕЛЯМ: не помогать, пусть рисунок будет полностью ребёнка). Этот рисунок всем будет необходимо перенести в электронный формат (формат может быть JPG, IMG, PNG). Главное, чтобы скан или фото были максимально хорошего качества. 

Тут есть 2 варианта, как и со сбором текста: дать задание воспитателю, чтобы ребята вместе в садике сделали это под руководством воспитателя. Ну или же каждый дома самостоятельно, тут уже решение за Вами. 

Рисунки необходимо загрузить в индивидуальные папки: (ссылка на папку выпускников). Каждому родителю необходимо загрузить рисунок в папку своего ребёнка.


СБОР ФОТО ОТДЕЛЬНЫМ СООБЩЕНИЕМ 
Задание №3. «Сбор фотографий» 
(ссылка на папку Выпускники) - в этой общей папке для каждого ребёнка есть своя отдельная папка, в которые родителям нужно загрузить фотографии:
•⁠  ⁠«10 страница 4 лайф фотки ребёнка» в эту папку каждому родителю нужно загрузить 4 фотографии своего ребёнка. Фотографии могут быть любые, главное, чтобы качество было как можно лучше
•⁠  ⁠⁠«11 страница 9 ВЕРТИКАЛЬНЫХ лайф фото ребёнка + каждую переименовать» в эту папку так же каждому родителю загрузить 9 фотографий своего ребёнка И КАЖДОЙ ФОТОГРАФИИ ДАТЬ НАЗВАНИЕ, ПЕРЕИМЕНОВАВ ЗАГРУЖЕННОЕ ФОТО НА НЕОБХОДИМОЕ НАЗВАНИЕ. Название к фоткам лучше делать коротким (на море, с бабушкой, я у мамы каскадёр, с папой на природе). В качестве примера прилагаю эту страницу из шаблона. (прикрепить скрин)
•⁠  ⁠⁠«14 страница «Мои увлечения» 2 фотки» в эту папку каждому родителю нужно загрузить фото своего ребёнка, где он занимается каким-то делом (рисует, поет, бегает и тому подобное).
•⁠  ⁠⁠«17 страница 6 горизонтальных фотографий с утренников» в эту папку каждому родителю нужно загрузить 6 фотографий, сделанные на утреннике.
•⁠  ⁠⁠«18 страница 4 обычных индивидуальных фотографии» в эту папку нужно загрузить 4 ВЕРТИКАЛЬНЫХ фотографии, на которых ребёнок один. Абсолютно любые фото, главное, чтобы на фото был ребёнок один.
•⁠  ⁠⁠«21 страница 1 самое качественное и памятное фото ребёнка» в эту папку нужно загрузить 1 ВЕРТИКАЛЬНУЮ наиболее хорошую и качественную индивидуальную фотографию ребёнка.
•⁠  ⁠⁠«24 страница 2 фото с родителями/фото родителей» в эту папку родителям нужно загрузить либо 2 ВЕРТИКАЛЬНЫЕ, либо 1 ВЕРТИКАЛЬНУЮ и 2 ГОРИЗОНТАЛЬНЫЕ, либо 2 ГОРИЗОНТАЛЬНЫЕ  фотографии со своим ребёнком.

Отдельное задание для Вас: 
(ссылка на папку общие фото) - папка, куда нужно загрузить 2 общие фото группы. Эти фотографии будут у всех в журналах одинаковые, поэтому туда нужно загрузить фото, на которых присутствуют все ребята.

Понимаю, текста много, но написано все подробно
Если будут вопросы - пишите 💙

ДЛЯ ДС, КОТОРЫЕ ФОТКАЮТСЯ В ОДИН ДЕНЬ:
Сообщение ответственному родителю

Здравствуйте!
Переходим к новому этапу подготовки журналов - фотосъемке

👨‍👩‍👦‍👦 Необходимо разбиться на группы по 2-3 человека. Всего журнал делают (…) человек. Значит, получается  (…) по  (…) человека

📸 Процесс съёмки будет проходить в один день в одной локации. На каждую группу будет выделяться время в соответствии с количеством человек в группе. Выбор дат и локаций будет позже, сейчас нужно разбиться на группы.


📍 Вы должны до 20:00 завтрашнего дня прислать мне список групп в таком формате:
Группа 1: ФИ 1, ФИ 2, ФИ 3 
Группа 2: ФИ 4, ФИ 5, ФИ 6 
Группа 3: ФИ 7, ФИ 8 
И т.д.

Сообщение ответственному родителю
Здравствуйте! 
📸 Мы начинаем 2 этап подготовки к фотосессии.
🗓️ Вот даты, из которых вы можете выбрать удобную для вас: 
(свободные даты фотографа). 

❗️ Вы выбираете 1 дату для всех. 
⏱️ Также, необходимо определиться со временем. ВАЖНО: группы идут друг за другом (например, первая группа фоткается с 13:00 до 13:20, значит следующая группа должна быть в студии уже в 13:10).

❗️ Также вам необходимо определиться с локацией, где дети будут фотографироваться. Один вариант локации для всех. 
✅ Вы заказали такой вариант, при котором мы бронируем студию для съёмок, а вы оплачиваете аренду студии. 

Варианты студий:
1.	г. Иваново: Space - любой зал (https://vk.com/space_space_project);
2.	г. Иваново: Азарт студия - зал флэшпоп (https://vk.com/azartstudios?w=product-110133865_1533651/query).
Ещё вариант, если вы не хотите фотографироваться в студии - съёмка в детском саду (нужно договориться, чтобы нас впустили).

⏳ К 20:00 послезавтрашнего дня жду от Вас список в таком формате:
Класс фотографируется *такого-то числа* в *такой-то локации*:
Группа 1 в *такое-то время*
Группа 2 в *такое-то время*
И тд 

ВАЖНО: расчётное время на группы следующее: 
3 человека - 20 съёмочных минут; 2 человека - 15 съёмочных минут. 
Этого времени будет достаточно, чтобы фотограф успел сделать вам необходимое количество фотографий.

Класс НЕ разделён на половины: 
Здравствуйте! 
‼️ Сегодня очень важно дать окончательный ответ насчёт выбора даты и локации
Жду от Вас итоговое решение ✅

Сообщение ответственному родителю:

Здравствуйте! 👋
📍Есть один момент, который нужно решить сейчас. Это касается общей съёмки. Как правило, мы эту съёмку проводим в саду.
❗️К Вам просьба: через руководство сада договориться, чтобы нашего фотографа пустили в сад для создания необходимых фотографий в выпускной журнал детей в определенную дату и время (всего на 1 час).

📸 В случае, если администрация сада ни в какую не согласна пускать нас в детский сад для создания фоток в выпускной журнал, мы предлагаем провести эту съёмку в студии. Аренда студии в данном случае для общей съёмки осуществляется за счёт заказчиков. День и время съёмки будете выбирать из дат, предложенных нами. 

Как только станет известно, сообщите мне. Заранее спасибо! 💙

Сообщение ответственному родителю

Здравствуйте!

📍У нас есть небольшая задачка.
С ребятами надо в один день сделать общую фотку. Съёмка будет длиться 1 час ⏳

👩‍🏫 Индивидуальные фото воспитателей - 5 минут на каждого воспитателя.

Общее фото ребят делаем в саду 40 минут ⏳
Нам с ребятами надо будет сделать 2 общие фотки ‼️
Эти фото будут интересными, а не просто детей в линеечку поставят 🤌
Фото можно будет сделать в спортзале/актовом зале/кабинете/коридоре 🏛️

❗Надо подобрать день так, чтобы всем было удобно. 

‼️Ну и главное, чтобы фотографа пустили в сад!!!

💡 Мы заинтересованы в том, чтобы сделать всё максимально круто, поэтому понадобится небольшая помощь.
Вопрос по общей съёмке я буду решать через Вас 🤝

Что требуется: 
1) 📍Выбрать день и время, когда смогут ребята и воспитатели.
Варианты: 
(свободные даты и время)
(Необходимо выбрать один день и одно время: например, 24 января в 11:00 воспитатели, в 11:10 все ребята.) 
2)📍Предупредить администрацию сада, чтобы фотографа пустили в сад в выбранный день и время. 
3) 📍Предупредить воспитателей, что будут индивидуальные фото каждого воспитателя отдельно.
4) 📍Решить с воспитателями, где будем делать общее фото - это может быть или актовый, или спортивный зал.  
5) 📍Необходимы будут: 2 парты, стулья около 10 штук.

Ожидаю от вас день и время

Сообщение родителю  
Здравствуйте!
📍У нас есть небольшая задачка.
Необходимо будет в один день сделать общую фотку всех ребят. Съёмка будет длиться 1 час ⏳

❌ В саду провести эту съёмку не получится, поэтому поступим следующим образом:
1.	📸 Съёмка ребят будет проходить в студии. Как говорилось ранее, оплата студии для этой съёмки осуществляется за счёт заказчиков. Родителям нужно выбрать дату и время съёмки из предложенных. Надо подобрать день так, чтобы всем было удобно:
(свободные даты и время фотографа общей съёмки)
❗️Нужно подобрать такую дату и время, чтобы ВСЕ ребята смогли присутствовать. 
2.	👩‍🏫 Одно индивидуальное фото каждого воспитателя. Желательно, чтобы они смогли присутствовать с ребятами на этой съёмке. В ином случае Вам необходимо будет либо сфотографировать их самостоятельно в саду (по этому примеру: https://docs.google.com/document/d/19pldGgnk7HLcE2o7WVhn_cV9OTKwfFsNPTsaWgx736I/edit ), либо прислать его фото файлом из соц. сетей в хорошем качестве.

Общее фото ребят делаем примерно 40 минут ⏳
Нам с ребятами надо будет сделать 2 общие фотки ‼️
Эти фото будут интересными, а не просто детей в линеечку поставят 🤌

💡 Мы заинтересованы в том, чтобы сделать всё максимально круто, поэтому понадобится небольшая помощь.
Вопрос по общей съёмке я буду решать через Вас 🤝

Что требуется: 
📍Выбрать день и время, когда все ребята и родители смогут.
📍Проконтролировать, чтобы в день съёмки присутствовали все ребята с родителями.
⏳ Выбрать дату необходимо в течение 2 дней.. Заранее спасибо


Сообщение родителю

Здравствуйте!
📸 Общая съёмка будет проходить у вас в саду(дата и время съёмки)

Что требуется: 
1) Решить с воспитателями, где будем делать общее фото - место 🏛️
3) Предупредить администрацию детского сада, чтобы фотографа пустили в сад в выбранный вами день и время 👨‍💼
4) Необходимы будут: 2 парты, стулья около 15 штук ✅

Пожалуйста, проконтролируйте процесс подготовки. Заранее спасибо!💙

Сообщение родителю

Здравствуйте! 
📸 Общая съёмка будет проходить в студии (дата и время съёмки), (ссылка на студию, название зала).

По съёмке: 
1.	👞 ОБУВЬ. В студии необходима сменная, абсолютно чистая и сухая обувь.
2.	📍ПРОКЛЕИТЬ ОБУВЬ БУМАЖНЫМ СКОТЧЕМ (либо дома, либо в студии попросить его за 10 минут до начала фотосессии), АККУРАТНО ВСЮ ПОДОШВУ, ЧТОБЫ СКОТЧА НЕ БЫЛО ВИДНО НА БОРТИКАХ, в противном случае фотограф не сможет убрать это обработкой.
❗️Это важно, иначе, в случае порчи фотостудии, придется выплатить ШТРАФ.
3.	🗑️ Если вы оставляете после себя МУСОР (фантики, бутылки и тому подобное), то его нужно будет УБРАТЬ, чтобы студия выглядела так, какой она была перед первой группой.

Что касается воспитателей: 
1.	❗️Индивидуальные фото каждого воспитателя. Желательно, чтобы они смогли присутствовать с ребятами на съёмке. В ином случае вам необходимо будет либо сфотографировать их самостоятельно в саду (по этому примеру: https://docs.google.com/document/d/19pldGgnk7HLcE2o7WVhn_cV9OTKwfFsNPTsaWgx736I/edit ), либо прислать их фото файлом из соц. сетей в хорошем качестве.

Пожалуйста, проконтролируйте процесс подготовки. Заранее спасибо! 
Сообщение родителю

Здравствуйте! 
❗️Напоминаю, что общая съёмка будет проходить завтра у вас в саду (дата и время съёмки). Фотограф приедет к саду за 10-15 минут до съёмки. 
❗️Просьба: чтобы его встретили у сада и помогли пройти в сад.

Необходимо: 
1) Решить с воспитателями, где будем делать общее фото - место 🏛️
3) Предупредить администрацию детского сада, чтобы фотографа пустили в сад в выбранный вами день и время 👨‍💼
4) Необходимы будут: 2 парты, стулья около 10 штук ✅

Сообщение родителю

Здравствуйте!
❗️Напоминаю, что общая съёмка будет проходить завтра в студии (дата и время съёмки), (ссылка на студию, название зала). В студию всем необходимо прийти за 15 минут до начала съёмки.

📸 По съёмке: 
1.	👞 ОБУВЬ. В студии необходима сменная, абсолютно чистая и сухая обувь.
2.	📍 ПРОКЛЕИТЬ ОБУВЬ БУМАЖНЫМ СКОТЧЕМ (либо дома, либо в студии попросить его за 10 минут до начала фотосессии), АККУРАТНО ВСЮ ПОДОШВУ, ЧТОБЫ СКОТЧА НЕ БЫЛО ВИДНО НА БОРТИКАХ, в противном случае фотограф не сможет убрать это обработкой.
❗️Это важно, иначе, в случае порчи фотостудии, придется выплатить ШТРАФ.
3.	🗑️ Если вы оставляете после себя МУСОР (фантики, бутылки и тому подобное), то его нужно будет УБРАТЬ, чтобы студия выглядела так, какой она была перед первой группой.

В группах необходимо указать всех выпускников. Неберущих помечать - Имя Фамилия (не берёт). Максимальное количество человек в группе - 5. Максимальное количество групп - см. во втором столбце разделения на группы. 

Здравствуйте!
Проверьте, пожалуйста, все ли есть в списке и всё ли правильно😇
Уточнение по съёмке:
Напоминание №1 и №2

Здравствуйте!
Это сообщение нужно переслать остальным родителям.
❗️ Напоминаю, что (число, смотреть в карточке класса) последний день на сбор информации для журнала. 

👥 Вот список тех, у кого что-либо не сделано:
(прикрепить скрин из раздела “Контроль собранной инфы”)

Пример скрина “Контроль собранной инфы”, который необходимо прикрепить: 
Скрин необходимо делать так, чтобы не было видно ничего лишнего.
Напоминание №3
Отправить родителю: 
Здравствуйте!
Это сообщение нужно переслать остальным родителям.
❗️ Напоминаю, что завтра последний день на сбор информации для журнала. 

👥 Вот список тех, у кого что-либо не сделано:
(прикрепить скрин из раздела “Контроль собранной инфы”)

‼️ Важно отметить, что работа по подготовке журнала - поэтапная. Пока у каждого не будут выполнены все задания по сбору информации, мы не сможем перейти к следующему этапу. 

Прошу поставить реакцию об ознакомлении! 💙
Сообщение родителю

Здравствуйте!
Мы закончили сбор необходимой информации для журналов.
Вот то, что нам удалось собрать. В дальнейшем “доскинуть” какую-либо информацию возможности не будет. Пожалуйста согласуйте, что данный список собранной информации финальный. 
Спасибо
 
(сделать скрин листа “Контроль сбора инфы” из списка класса)

ДЛЯ ТЕХ, КТО ФОТКАЕТСЯ В СТУДИИ:
Здравствуйте!
Просьба: переслать это сообщение остальным родителям.

💡 Небольшие лайфхаки для съёмки: 
1.	Подготовить 1 образ для индивидуальных фото
2.	Взять с собой реквизит. Примеры: тёмные очки, головные уборы или атрибуты хобби ребёнка (гитара, мяч и т.д.🕶️🧢🎸)

И ПОЖАЛУЙСТА, НЕ ЗАБЫВАЙТЕ:
1.	ОБУВЬ. В студии необходима сменная, абсолютно чистая и сухая обувь.
2.	ПРОКЛЕИТЬ ОБУВЬ БУМАЖНЫМ СКОТЧЕМ (либо дома, либо в студии попросить его за 10 минут до начала фотосессии), АККУРАТНО ВСЮ ПОДОШВУ, ЧТОБЫ СКОТЧА НЕ БЫЛО ВИДНО НА БОРТИКАХ, в противном случае фотограф не сможет убрать это обработкой.
Это важно, иначе, в случае порчи фотостудии, придется выплатить ШТРАФ.
3.	Если вы оставляете после себя МУСОР (фантики, бутылки и тому подобное), то его нужно будет УБРАТЬ, чтобы студия выглядела так, какой она была перед первой группой. 



ДЛЯ ТЕХ, КТО ФОТКАЕТСЯ В САДУ :
Здравствуйте!
Просьба: переслать это сообщение остальным родителям.

💡 Небольшие лайфхаки для съёмки: 
1.	Подготовить 1 образ для индивидуальных фото
2.	Взять с собой реквизит. Примеры: тёмные очки, головные уборы или атрибуты хобби ребёнка (гитара, мяч и т.д.🕶️🧢🎸)
 
🏫 Насчёт съёмки в саду: 
1.	Заранее убедиться, что фотографа пустят в сад.
2.	С воспитателем заранее выбрать локацию, где можно провести фотосессию (кабинет, актовый зал, спортзал, коридоры, библиотека, лестница и т.д.) и договориться, чтобы нас туда пустили. От качества локаций будет зависеть качество самих фотографий. 


ДЛЯ ТЕХ, КТО ФОТКАЕТСЯ НА УЛИЦЕ :
Здравствуйте!
Просьба: переслать это сообщение остальным родителям

💡 Небольшие лайфхаки для съёмки: 
1.	Подготовить 1 образ для индивидуальных фото
2.	Взять с собой реквизит. Примеры: тёмные очки, головные уборы или атрибуты хобби ребёнка (гитара, мяч и т.д.🕶️🧢🎸)
Сообщение родителю

Здравствуйте!
Это сообщение необходимо переслать остальным родителям.
📸 Напоминаю вам, что ребята фоткаются … (числа) в … (локации) в … (время). Не забывайте и приходите вовремя. 

*+ЕСЛИ В СТУДИИ:

ВАЖНО: 
1.	В студию приходите за 10-15 минут до начала съёмки, чтобы успеть переодеться в образ и заклеить подошву обуви, если не сделали это дома 🕙
2.	На съёмке обязательно должен присутствовать кто-либо из родителей или воспитатель

И ПОЖАЛУЙСТА, НЕ ЗАБЫВАЙТЕ:
1.	👞 ОБУВЬ. В студии необходима сменная, абсолютно чистая и сухая обувь.
2.	ПРОКЛЕИТЬ ОБУВЬ БУМАЖНЫМ СКОТЧЕМ (либо дома, либо в студии попросить его за 10 минут до начала фотосессии), АККУРАТНО ВСЮ ПОДОШВУ, ЧТОБЫ СКОТЧА НЕ БЫЛО ВИДНО НА БОРТИКАХ, в противном случае фотограф не сможет убрать это обработкой.
Это важно, иначе, в случае порчи фотостудии, придется выплатить ШТРАФ 💸
3.	Если вы оставляете после себя МУСОР (фантики, бутылки и тому подобное), то его нужно будет УБРАТЬ, чтобы студия выглядела так, какой она была перед первой группой 🗑️


Сообщение родителю

Здравствуйте!
Это сообщение необходимо переслать остальным родителям.
🤩 Вот исходники со съемки, которая была (дата съёмки). Фотки сырые, с убранным цветом и светом в минимум. Необработанные, не выровненные и тд.
‼️ НЕ ВЫКЛАДЫВАЙТЕ ИХ НИКУДА.
(ссылка на исходники)

✅ ВАЖНАЯ ИНФА.
1) 📍Необходимо в гугл-опрос записывать номера выбранных вами фоток для обработки в течение 3 суток (то есть до 20:00 (число)). Номера фоток для обработки, которые вы будете писать в гугл опрос, нужно посмотреть в «Информации» к каждой фотографии (троеточие в правом верхнем углу). Номер фото – комбинация букв и цифр (например: IMG_1234.jpg или 3B4A1234.jpg). 
📍Вот необходимый для заполнения гугл-опрос: (ссылка на гугл-форму). В первом вопросе указываете фамилию и имя своего ребёнка; во втором номер фотографии, которая будет на обложке журнала; далее к остальным вопросам также указываете номера фото, которые вы выбрали (в ОДНОМ вопросе должен быть указан ОДИН номер фотографии)

2) 📍Кол-во фоток: 3 индивидуальные (в том числе обложка). 
Старайтесь выбирать фотографии непохожие друг на друга, чтобы у вас в журнале было разнообразие. Рекомендуем выбирать фото на обложку такое, чтобы ребёнок смотрел в камеру и хорошо было видно лицо.

3) 📍В ТЕЧЕНИЕ 3 СУТОК ожидаем номера фоток, потом фотографии будут удалены без возможности довыбрать. Будьте внимательнее! Исходники удаляются совсем.

4) 📍Обращаю внимание на то, что опрос необходимо заполнить за один раз, если выйти на половине написанного, то ничего не сохранится и придётся писать заново. Перед закрытием опроса ОБЯЗАТЕЛЬНО нажать кнопку “Отправить”, чтобы всё написанное у нас сохранилось.
Сообщение родителю
Здравствуйте!
(…) не было на фотосессии с группой. Пусть родители не переживают, мы проведем дополнительную съёмку и сделаем недостающие фотографии. Дату и локацию сообщим позже.
Сообщение родителю

Здравствуйте!
❗️Напоминаю вам, что в течение дня необходимо выбрать фотографии и указать их номера в гугл-форме. 
Не забывайте об этом! 💙
Сообщение родителю

Здравствуйте! 
✅ Все фотки готовы и загружены в ваши папки (указать название папки, например “Фото с помещения”), можете смотреть, сохранять и выкладывать в соц. сети! Пожалуйста, проверьте свои фотографии в течение 24 часов, и, если что-то не так, напишите мне. По истечению 24 часов исправить ничего будет нельзя!
Не забывайте упоминать наш инстаграм im.jornal на фотках 💙

📍Чтобы скачать в хорошем качестве с диска из ваших папок: около списка фоток нажимать на три точки, дальше нажать отправить копию, затем на сохранить изображение.
Сообщение родителю

Здравствуйте! Просьба передать это родителям. 
К нам часто обращаются с просьбой распечатать дополнительно индивидуальные фотографии своих детей после фотосессий, поэтому мы проинформируем сразу: такая возможность есть. 
Стоимость печати:
•	Формат А4 (большой) — 690₽
•	Формат А5 (средний) — 590₽
•	Формат А6 (маленький) — 490₽

Ссылка на фотографии группы: (ссылка на папку выпускники). 
Большая просьба к Вам, как к ответственному родителю, собрать информацию, кому нужно распечатать фотографии. Номера фото, которые нужно распечатать, выбирайте из папки выше.
Это необходимо сделать в ближайшие 3 дня.

Просьба к Вам до (указать дату) написать мне одним сообщением вот в таком формате:
Иванов Матвей - напечатать два индивидуальных фото 
(фото номер 1756 - формат А4 и 1763 - формат А5);
Сидорова Мария - напечатать одно индивидуальное фото 
(фото номер 1975 - формат А5);
Петров Иван - два индивидуальных фото напечатать 
(фото номер 1561 - формат А6).
Сообщение родителю

Здравствуйте! Просьба передать это родителям. 
К нам часто обращаются с просьбой распечатать дополнительно индивидуальные фотографии своих детей после фотосессий, поэтому мы проинформируем сразу. Такая возможность есть. Стоимость печати одного фото формата А4 - 690₽, формата А5 - 590₽, формата А6 - 490₽. 
Вот фотки вашего класса (ссылка на папку выпускники)
Большая просьба к Вам, как к ответственному родителю от класса, собрать информацию, кому нужно распечатать фотографии.
Это необходимо сделать в ближайшие 3 дня.
Просьба к Вам до (указать дату) вот в таком формате мне написать одним сообщением:
Иванов Матвей - напечатать два индивидуальных фото 
(фото номер 1756 - формат А4 и 1763 - формат А5);
Сидорова Мария - напечатать одно индивидуальное фото 
(фото номер 1975 - формат А5);
Петров Иван - два индивидуальных фото напечатать 
(фото номер 1561 - формат А6).
Сообщение родителю

Здравствуйте💙
Можете, пожалуйста, напомнить родителям, что мы можем распечатать дополнительно индивидуальные фотографии ребят. Завтра жду от Вас окончательный список ребят и номеров фото, которые будет необходимо распечатать (в каком количестве и формате). 
Важный момент, потому что потом возможности дополнительной печати индивидуальных фотографий не будет.
Ожидаю от Вас финального сообщения с информацией завтра до 20:00🤗
Сообщение родителю

Здравствуйте!
Вот фото с общей съёмки, необходимо выбрать ✅

Это исходники необработанные, нескадрированные, с убранным светом и цветом.
❗️Поэтому не выкладывать никуда, просто выбрать.
(ссылка на папку с общими фото)
📍Выбрать две фотки (одна - с расстоянием, вторая - без расстояния)
Обе фотки будут в журналах у всех одинаковые.

👩‍🏫 По воспитателям: необходимо дать им выбрать по одной фотке для обработки в журнал. (ссылка на папку с фото воспитателя)
⏳ По времени: завтра до 20:00 сказать мне номера выбранных фотографий из информации (там цифры по типу IMG_1234.jpg или 3B4A1234.jpg)
Сообщение родителю 

Здравствуйте!
Вот фото с общей съёмки, необходимо выбрать ✅

Это исходники необработанные, нескадрированные, с убранным светом и цветом.
❗️Поэтому не выкладывать никуда, просто выбрать.
(ссылка на папку с общими фото)
📍Выбрать две фотки (одна - с расстоянием, вторая - без расстояния)
Обе фотки будут в журналах у всех одинаковые.

⏳ По времени: завтра до 20:00 сказать мне номера выбранных фотографий из информации (там цифры по типу IMG_1234.jpg или 3B4A1234.jpg)

+Если родители ещё не скинули фото воспитателей, то необходимо скинуть сейчас
ЕСЛИ ВЫПУСКНИКА НЕ БЫЛО НИ НА ОДНОЙ СЪЁМКЕ
Сообщение родителю

Перешлите, пожалуйста, это сообщение родителям (Имя Фамилия выпускника)
🤩 Вот исходники с дополнительной съёмки. Фотки сырые, с убранным цветом и светом в минимум. Необработанные, не выровненные и тд.
❗️НЕ ВЫКЛАДЫВАЙТЕ ИХ НИКУДА.
(ссылка на исходники)

✅ВАЖНАЯ ИНФА.
1) 📍Необходимо в личные сообщения прислать номера выбранных фоток для обработки в течение 1 суток (то есть до 20:00 завтрашнего дня). Номера фоток нужно посмотреть в «Информации» к каждой фотографии (троеточие в правом верхнем углу). Номер фото – комбинация букв и цифр (например: IMG_1234.jpg или 3B4A1234.jpg). 
ВАЖНО: пометить индивидуальную фотографию, которую Вы хотите на обложку. Например:  IMG_1234.jpg (Обложка)
📍Прислать номера нужно в формате:
ПРИМЕР - Иванов Иван, школа №1, г. Москва -  IMG_1234.jpg, IMG_4321.jpg (Обложка)



2) 📍Кол-во фоток: 3 индивидуальные (одна из которых - на обложку). Старайтесь выбирать фотографии непохожие друг на друга, чтобы у Вас в журнале было разнообразие.




ЕСЛИ ВЫПУСКНИКУ НЕ  ПОНРАВИЛИСЬ ФОТКИ
Сообщение родителю

Перешлите, пожалуйста, это сообщение родителям (Имя Фамилия выпускника)
🤩 Вот исходники с  дополнительной съёмки. Фотки сырые, с убранным цветом и светом в минимум. Необработанные, не выровненные и тд.
❗️НЕ ВЫКЛАДЫВАЙТЕ ИХ НИКУДА.
(ссылка на исходники)

✅ВАЖНАЯ ИНФА.
1) 📍Необходимо в личные сообщения прислать номера выбранных фоток для обработки в течение 1 суток (то есть до 20:00 завтрашнего дня). Номера фоток нужно посмотреть в «Информации» к каждой фотографии (троеточие в правом верхнем углу). Номер фото – комбинация букв и цифр (например: IMG_1234.jpg или 3B4A1234.jpg). 
ВАЖНО: пометить индивидуальную фотографию, которую Вы хотите на обложку. Например:  IMG_1234.jpg (Обложка)
📍Прислать номера нужно в формате:
ПРИМЕР - Иванов Иван, школа №1, г. Москва -  IMG_1234.jpg, IMG_1235.jpg, IMG_4321.jpg (Обложка)



2) 📍Кол-во фоток: для создания журнала необходимы 3 индивидуальных фото (одно из которых - на обложку). Выберите из фото, которые Вам сделали на прошлой съёмке и на общей, 3 фотографии. Одну из них пометьте, что она на обложку. Старайтесь выбирать фотографии непохожие друг на друга, чтобы у Вас в журнале было разнообразие.






ЕСЛИ ВЫПУСКНИКА НЕ БЫЛО НА ВТОРОЙ СЪЁМКЕ 
Сообщение родителю

Перешлите, пожалуйста, это сообщение родителям (Имя Фамилия выпускника)

🤩 Вот ваши исходники с  дополнительной съёмки. Фотки сырые, с убранным цветом и светом в минимум. Необработанные, не выровненные и тд.
❗️НЕ ВЫКЛАДЫВАЙТЕ ИХ НИКУДА.
(ссылка на исходники)

✅ВАЖНАЯ ИНФА.
1) 📍Необходимо в личные сообщения прислать номера выбранных фоток для обработки в течение 1 суток (то есть до 20:00 завтрашнего дня). Номера фоток нужно посмотреть в «Информации» к каждой фотографии (троеточие в правом верхнем углу). Номер фото – комбинация букв и цифр (например: IMG_1234.jpg или 3B4A1234.jpg). 

2) 📍Кол-во фоток: 1 индивидуальная фотография.

3) 📍ОБЛОЖКА. Сначала необходимо посмотреть обработанные индивидуальные фотографии с первой фотосессии, посмотреть на исходники индивидуальных фоток со второй фотосессии, и выбрать на основе этого одну индивидуальную фотографию на обложку. Если это фото с первой фотосессии, то посмотреть его номер в вашей папке с готовыми фотографиями и прислать мне с пометкой (Обложка). Рекомендуем выбирать фото на обложку такое, чтобы ребёнок смотрели в камеру и хорошо было видно лицо.

В итоге жду от Вас сообщение в примерно таком формате:
Иванов Иван, школа №1, г. Москва 
Выбрал фото IMG_1234.jpg, на обложку её же

Или 
Иванов Иван, школа №1, г. Москва 
Выбрал фото IMG_1234.jpg
На обложку фото с первой фотосессии IMG_4321.jpg




СКИНУТЬ ОТВЕТСТВЕННОМУ РОДИТЕЛЮ: 

Здравствуйте! Высылаю вам фотографии, которые мы сделали на общей съёмке💙
📍Вот ваши общие фото:
(прикрепить ссылку на папку общее фото класса)
📍Фото воспитателей:
(прикрепить ссылку на папку фото  воспитателя)
СКИНУТЬ ОТВЕТСТВЕННОМУ РОДИТЕЛЮ: 

Здравствуйте! Индивидуальные фотографии, которые сделали на дополнительной съёмке, загружены в папки (указать название папки, например “Фото с помещения”). Их можно смотреть, сохранять и выкладывать в соц. сети! Пожалуйста, пусть родители проверят фотографии своих детей в течение 24 часов, и, если что-то не так, напишите мне. По истечению 24 часов исправить ничего будет нельзя!
Не забывайте упоминать наш инстаграм im.jornal на фотках 💙

📍Чтобы скачать в хорошем качестве с диска из ваших папок: около списка фоток нажимать на три точки, дальше нажать отправить копию, затем на сохранить изображение.
 💙
 ЕСЛИ ПРОВЕРЯЮТ РОДИТЕЛИ 
(СООБЩЕНИЕ ОТВЕТСТВЕННОМУ РОДИТЕЛЮ): 

Здравствуйте! 👋
💫 Вот электронные версии ваших журналов: 
(ссылка на папку с готовыми журналами)

📍Ваши действия: 
1) В течение двух суток просмотреть журналы на наличие каких-либо ошибок в тексте. 
Необходимые правки по тексту написать здесь: (ссылка на гугл-форму)
❗️ВАЖНО: данную гугл-форму необходимо пройти ВСЕМ родителям вне зависимости от того, требуются ли правки!

2)✅ Правки, которые можно внести: 
а) Знаки пунктуации и орфографические ошибки в тексте (например: страница 3 после слова “домой” поставить точку; страница 4 - после слова “потому” поставить запятую). 
б) Ошибки, связанные со вставкой информации. (например: страница 3 - выпуск 2024 заменить на 2025; страница 7 - указана не моя фамилия). 
в) Поменять фотографии с вашим присутствием местами (например: поменять местами фото такое-то и такое-то страниц 6 и 7). 

3) ❌ Правки, которые нельзя внести:
а) Расположение фотографий на страницах журнала.
б) Удаление/расположение текста. 
в) Замена фотографий на сторонние. 
г) Добавление сторонних элементов в журналы.
д) Изменение шрифта и размера текста. 
е) Изменение концепции журнала. 

4) 💡 Будьте внимательны, так как возможности внести ещё потом правки больше не будет. Ещё один этап правок оплачивается дополнительно. 

5) ⏳ У вас 2 дня на проверку журнала.

6) ❗️Обращаю внимание на то, что опрос необходимо заполнить за один раз, если выйти на половине написанного, то ничего не сохранится и придётся писать заново. Когда правки будет полностью написаны, перед закрытием опроса ОБЯЗАТЕЛЬНО нажать кнопку “Отправить”, чтобы всё написанное у нас сохранилось.

Пожалуйста, отпишите мне, как только разошлёте это сообщение родителям, заранее спасибо!!! 💙
ЕСЛИ СКИДЫВАЕМ РОДИТЕЛЯМ:
Сообщение ответственному родителю: 

Здравствуйте! 👋
🔔 Напоминаю о возможности написать правки по выпускным журналам. Дублирую на всякий случай ссылку на папку с электронными версиями всех журналов: 
(ссылка на папку с готовыми журналами)

📍 Необходимые правки по тексту написать здесь: (ссылка на гугл-форму)

☑️ Вот список тех, кто заполнил форму! Если остальные всё-таки будут вносить правки, то это необходимо сделать в течение дня. (прикрепить скрин из приложения)

⬆️ Инструкцию и правила по всем возможным правкам присылал выше.
💡 Будьте внимательны, так как возможности внести ещё потом правки больше не будет. Еще один этап правок оплачивается дополнительно. На проверку журналов остался 1 день❗️
📍Обращаю внимание на то, что опрос необходимо заполнить за один раз, если выйти на половине написанного, то ничего не сохранится и придётся писать заново. Когда правки будет полностью написаны, перед закрытием опроса ОБЯЗАТЕЛЬНО нажать кнопку “Отправить”, чтобы всё написанное у нас сохранилось.
ДЛЯ МЕНЕДЖЕРА: этот скрипт необходимо отправить после 20:00

ЕСЛИ СКИДЫВАЕМ РОДИТЕЛЯМ: 
Сообщение ответственному родителю: 

Добрый вечер! 🌅 
⌛️ Дедлайн по внесению правок в журналы истёк. Правки указали:
(фамилию имя выпускника - правка - будет/не будет внесена [если не будет, указать причину])
Больше ни от кого информации по внесению правок не получили. Спасибо Вам за помощь, хорошего вечера! 💙
Сообщение родителю 

Здравствуйте! 👋
Можете, пожалуйста, передать это родителям

В создание выпускных журналов для ребят мы вложили все силы и всю душу, чтобы журналы и наша работа были полны эмоций и воспоминаний! 
В качестве благодарности можете, пожалуйста, оставить свой отзыв

По объёму отзыва на ваше усмотрение.
Большая просьба по возможности написать каждому из родителей, это очень важно и ценно для нас.
⏳ Желательно написать в ближайшие несколько дней.
Будем очень благодарны! 

В начале отзыва просьба написать имя отчество родителя и имя фамилия его ребёнка (пример: Ирина Фёдоровна, мама Ивана Петрова). Кто не хочет писать имя ребёнка, может оставить только своё ИО.

Отзыв можно написать двумя способами:
1) Лучше этот вариант выбрать. Вот сюда: https://vk.com/app6326142_-212187230
Сначала возможно появится окно с кнопкой разрешить, можно не переживать и спокойно нажимать разрешить, это соц сеть ВК так настроена.

2) Кто переживает, что в ВК нужно нажимать кнопку разрешить, можно написать отзыв мне в личные сообщения в любой соц сети:
WhatsApp: +79644919854
Viber: +79644919854
Телеграм: makspvv
Вк: https://vk.com/makspvv

С любовью, команда IMJ

`})})})]})});case"collective11":return i.jsx("div",{className:"space-y-8",children:i.jsxs(K,{children:[i.jsx(je,{children:i.jsxs(be,{className:"flex items-center",children:[i.jsx(He,{className:"h-5 w-5 mr-2 text-blue-600"}),"Сообщение для детского сада"]})}),i.jsx(J,{children:i.jsx("div",{className:"bg-gray-50 p-4 rounded-lg",children:i.jsx("p",{className:"whitespace-pre-wrap text-sm leading-relaxed",children:`Коллективнный11
Сообщение в беседу класса

Ребята, привет! 👋
Меня зовут (имя менеджера), я являюсь менеджером вашего класса по подготовке выпускных журналов 🤓

Основные организационные моменты:
❗️Эта беседа будет только информационной, поэтому важно: В БЕСЕДЕ НЕ СПАМИТЬ, чтобы никакие важные сообщения не потерялись.
❗️По всем вопросам вы можете обращаться ко мне в личные сообщения в это время (менеджер указывает своё рабочее время), не стесняйтесь 😇

📸В беседу добавлен ваш фотограф - (имя фотографа) . 

Теперь у меня к вам несколько первых заданий:
✅Добавиться ко мне в друзья, чтобы я мог написать вам в личные сообщения в случае необходимости.
✅Подписаться на наш ИНСТ и группу ВК, там мы будем выкладывать разные моменты работы с вашим классом. Вот ссылка на группу в вк: https://vk.com/imjornal , название нашей инсты: im.jornal.
✅Выбрать старосту или добровольца, с которым я буду держать связь, и который будет мне помогать в кое-каких небольших, но важных моментах. Староста/доброволец, отпиши мне в ЛС🙏

Вся наша команда и лично я сделаем всё возможное, чтобы работа была в кайф, и вы получили классные, стильные, и уникальные выпускные журналы. Начнём! 🚀

Сообщение в беседу класса

Ребята, подскажите, все ли ваши одноклассники есть в беседе? 
❗️Тут должны быть даже те, кто не берёт журнал. Если кого-то не хватает, то добавьте. Если у человека нет ВК, то напишите мне его ФИ. 
Сообщение ответственному родителю

Здравствуйте! 👋
Меня зовут (…), я являюсь менеджером по подготовке выпускного журнала вашего ребёнка! 👨‍💻
Мне предоставили Ваш контакт как ответственного родителя. Как я могу к Вам обращаться?


📍Совсем скоро мы начнём работу с классом. С ребятами мы взаимодействуем через беседу в ВК. Мне необходимо добавить Вас в эту беседу. Писать там ничего не придётся. Все что потребуется: это наблюдать при необходимости за новостями и процессом подготовки журналов, передавать актуальную информацию остальным родителям.
✅ Можете, пожалуйста, прислать ссылку на вашу страницу в ВК. Или, если не получается, скинуть ссылку. Скажите, как Вас там найти.

📍Также, просьба: предоставить на всякий случай контакт ещё одного родителя, с кем мы могли бы взаимодействовать по поводу работы над журналами.


Сообщение в беседу класса

Ребята, привет! 👋 
❗️Посмотрите, пожалуйста, правильно ли написаны ваши имена и фамилии.
Это важно, потому что так будет напечатано в журналах. Внести правки потом будет невозможно, поэтому всё проверить необходимо сейчас.

P.S. Список составлялся на основе данных, предоставленных родителями 📋

Менеджеру необходимо создать опросник в вк:
Название: Проверьте правильность ваших ФИ.
Варианты ответа:
-Всё правильно
-Неправильно (написал менеджеру, как нужно исправить)

Сообщение ответственному родителю

Здравствуйте! 👋
Сейчас необходимо переслать это сообщение в родительский чат.

Сейчас я отправлю Вам список ребят. Пожалуйста, проверьте, все ли имена и фамилии написаны правильно?
❗️Этот момент очень важен, потому что так, как ФИ указаны здесь, так они и будут написаны в журналах. 
❗️Также, пожалуйста, проверьте правильно ли указан класс (нужна буква класса или нет). 


Особое внимание буквам Е/Ё (к примеру, Артем/Артём), именам Софья/София, Данил/Даниил/Данила и т.п.  

Отпишите мне, как только всё будет проверено. Заранее спасибо! 💙 

Сообщение ответственному родителю

Здравствуйте! 👋

❗️Очень важный вопрос, который необходимо решить родителям сообща: будем ли вставлять портретные фото ребят, которые не берут журнал?

Выпускникам, которые не заказывают журнал, наш фотограф не будет делать индивидуальные фото. В случае необходимости им придётся прислать свои фотографии (по одной фотке). 
📍Важный момент: наши фото и фото тех, кто не берёт журнал, будут сильно отличаться по качеству, что вероятно будет портить визуальную составляющую журнала. 

Вставить не наши фото никакой сложности не будет, вопрос в том, есть ли в этом необходимость?  Это решение должно быть в первую очередь за родителями тех выпускников, кто берёт журнал. Прошу принять решение сегодня-завтра.
Заранее спасибо! 💙

Сообщение в беседу класса

Всем привет! 👋
✍️ Мы начинаем сбор текстовой информации для ваших выпускных журналов. Сначала сообщу вам общий регламент этого этапа работы, затем напишу что, куда и когда.

По регламенту:
❗️Вам дается 15 дней на выгрузку всех материалов для журнала, то есть к 20:00 (дедлайн; смотреть в карточке класса) всё у всех должно быть загружено. После истечения срока никакую информацию внести будет НЕЛЬЗЯ!!! Поэтому отнестись к этому нужно с должным вниманием и ответственностью;
❗️При написании текстовой информации обращайте внимание на ГРАМОТНОСТЬ!!! Орфографические, пунктуационные и речевые ошибки в тексте журнала мы не исправляем. Также мат, оскорбления, пошлости и тому подобные выражения в журнал вставлены не будут, и более того, задания в таком случае придётся переделывать.

📂 Инструкция как, что и куда:
1.	🗂️ ИНДИВИДУАЛЬНАЯ ПАПКА ВЫПУСКНИКА: в ней будут находиться все ваши папки. Задача: найти свою папку и зайти в неё. В этой папке будут:
- 👨‍👩‍👦 ПАПКА «ФОТО С РОДИТЕЛЯМИ»: в эту папку нужно загрузить свои фотографии с родителями или же просто фотографии родителей в количестве 2 фотографий (НЕ БОЛЕЕ 2-х ФОТО!).
- 📸 ПАПКА «ФОТО ИЗ ПОМЕЩЕНИЯ»: в эту папку ничего загружать самостоятельно НЕ НУЖНО. Сюда фотографы загрузят фотографии для журнала, сделанные на фотосессии;
(ссылка на папку “Выпускники”)


1.	🫂 ГУГЛ ОПРОС «ПОЖЕЛАНИЯ И СЛОВА ОДНОКЛАССНИКАМ»: здесь всем нужно будет написать пожелания или памятные слова КАЖДОМУ своему однокласснику, все пожелания и слова будут вставлены в ваши журналы с подписью от кого они. Старайтесь писать для всех, чтобы спустя время было приятно перечитывать написанное для вас. Перед закрытием опроса ОБЯЗАТЕЛЬНО нажать кнопку “Отправить”, чтобы всё написанное у нас сохранилось.
(ссылка на гугл-форму)
2.	💭 ГУГЛ ОПРОС «ЦИТАТЫ»: здесь ВСЕМ нужно будет написать цитату, которая будет располагаться под вашей фотографией в разделе “Наш класс”. Перед закрытием опроса ОБЯЗАТЕЛЬНО нажать кнопку “Отправить”, чтобы всё написанное у нас сохранилось.
(ссылка на гугл-форму)
3.	ЛАЙФ ФОТО И ЗАБАВНЫЕ ИСТОРИИ. В папке “Выпускники” также есть две папки:
- 🤳 ПАПКА «ЛАЙФ ФОТО»: в эту папку необходимо загрузить какие-либо памятные для вашего класса фотографии из повседневной жизни класса (спорт, друзья, поездки, перемены и так далее). ВАЖНО: нужно прислать либо 3 горизонтальных фотографии, либо 2 горизонтальные и 2 вертикальные. 
Старайтесь, чтобы фотографии были или общие, или чтобы много людей из класса было на фотографии. Эти фотографии у всех в журналах будут одинаковые. Если есть желание, Вы можете специально самостоятельно сделать прикольные памятные лайф фотки для вашего журнала.
- 😅 ПАПКА «ЗАБАВНЫЕ ИСТОРИИ»: в этой папке находится вордовский файл. В нём необходимо написать одну-две забавные памятные истории, которые когда-либо происходили в вашем классе. Пишите эти истории по возможности всем классом, так как они во всех журналах будут одинаковые, так же, как и лайф фото.

‼️Ещё раз акцентирую внимание на сроках, грамотности, количестве фотографий и объёме текста. Пожалуйста, соблюдайте эти правила, чтобы все ваши журналы были офигенными. На загрузку всех заданий у вас уйдёт примерно час. И ещё совет: не откладывайте всё на последний день, готовьте всё постепенно, с чувством, с толком, с расстановкой, чтобы наполнение журнала информацией было на высочайшем уровне. 
Желаю всем удачи! 🍀 

Сообщение старосте

Привет! 👋
Смотри, у меня к тебе как к самому ответственному выпускнику есть несколько очень важных заданий 🎓
В журнале есть блоки, посвящённые учителям 👩‍🏫 Вот, что нужно:
❗️Необходимо пройтись по учителям-предметникам (классный руководитель не в счёт) и собрать с них пожелания для вашего выпускного журнала. Одно пожелание от одного учителя. У всех выпускников будут одни и те же пожелания, то есть одно общее пожелание от учителя на класс. Можешь это сделать либо самостоятельно, либо разделить это задание между ребятами (чтобы одни ребята попросили пожелание у одного учителя, другие у другого и так далее, пока не соберутся пожелания от всех учителей).
❗️❗️Необходимо всему вашему классу собраться и вспомнить смешные фразочки ваших учителей (всего нужно 8-10 фраз). То есть те фразы, которые конкретный учитель говорил постоянно, либо фразы, которые ассоциируются с конкретным учителем. Мы их тоже вставим вам в журналы, они будут также у каждого в журнале одинаковые.
❗️❗️❗️Необходимо попросить у классного руководителя, чтобы он написал слова напутствия для вашего класса. Одно общее пожелание для всего класса (объём: 70-110 слов) 

✅ По итогу тебе нужно прислать мне 3 ворд документа: первый с пожеланиями всех учителей (у каждого пожелания написать ФИО учителя и ПРЕДМЕТ, который он у вас ведёт), второй документ со смешными фразами учителей (также у каждой фразы ФИО учителя и ПРЕДМЕТ, который он у вас ведёт), третий с пожеланием классного руководителя (с ФИО классного руководителя)
Вот ссылка на примеры документов. Их нужно скачать, заполнить и прислать мне. (https://drive.google.com/drive/folders/1LA_LF8hnFICCcMJC5tUNqbC4MDJo1kVL?usp=sharing)

📸 Далее необходимо прислать фотографии ребят, которые не берут журнал. Это нужно для страницы с портретами и цитатами каждого выпускника. Лучше сфоткать его/её в школе самостоятельно на телефон с хорошей камерой. Скинь мне каждую фотку отдельно файлом (чтобы качество не терялось: нажать на скрепочку, там выбрать файл и через этот файл скинуть фотографии) и в сообщение укажи, пожалуйста, фамилию и имя человека.

🙏 Также проследи, пожалуйста, чтобы вы вместе с классом написали одну-две забавные памятные истории класса и загрузили 4 лайф фотки класса. Я об этом задании написал в вашу беседу.
Насчёт лайф - основная ценность в том, что такие фотографии запечатлевают “момент”. Если у вас не получается найти такие фотографии, или они в слишком плохом качестве, сделайте такие фотки специально для журнала. Главное, чтобы качество фото было хорошее. Вот тут примеры лайф-фоток, которые вы со своим классом можете повторить, или взять за идею
(https://drive.google.com/drive/folders/1hM1zkfSWL81qjZsiFbYf36SPhXRF2kMp?usp=sharing) 
По забавной истории - это может быть описание какой-то вашей перемены, урока, мероприятия школьного, поездки с классом. Такие “истории” в школьной жизни встречаются каждый день, нужно просто их вспомнить.

⌛️ На всё это дело у тебя также 15 дней, то есть к (число, смотреть в карточке класса) все должно быть сделано и скинуто.
Заранее говорю тебе большое спасибо! ❤️
Сообщение  родителю

Здравствуйте! 👋

✅ Мы начали работу с ребятами по сбору информации для журнала. Дали им 15 дней на выполнение заданий по написанию текста для журналов. Передайте, пожалуйста, родителям, чтобы они проконтролировали ребят, чтобы весь текст был написан без грамматических ошибок и в нужном объёме, фотографии загружены в нужном количестве, и чтобы никто не опоздал и прислал нам все материалы вовремя. Заранее спасибо! 🙏
Ещё один момент: одно из заданий для ребят - прислать 2 фотографии с родителями или просто фото родителей. Если возникают трудности с поиском фото, их нужно успеть сделать за 15 дней. Нужны самые обычные фото, даже селфи подойдёт. Главное, чтобы качество фото было приемлемым.

❗️Второй момент касается уже задания непосредственно для самих родителей. Каждому родителю нужно написать напутственные слова-пожелания для своего ребёнка. Действия родителя:
1.	Перейти по этой ссылке: (ссылка на гугл-форму). 
2.	В первом вопросе нужно написать Фамилию и Имя своего ребёнка.
3.	Во втором вопросе нужно написать напутственные слова-пожелания для своего ребёнка.
4.	Как только все будет написано, нужно нажать кнопку «ОТПРАВИТЬ», она будет в самом низу.
ВАЖНО: у каждого ребёнка должно быть одно пожелание, то есть если мама и папа хотят написать разные слова, то они должны их написать в одной и той же Гугл-форме с пометкой ОТ МАМЫ: … и ОТ ПАПЫ: … 

‼️ Обращаю внимание на то, что опрос необходимо заполнить за один раз, иначе ничего не сохранится и придётся писать заново. Когда пожелание будет полностью написано, перед закрытием опроса ОБЯЗАТЕЛЬНО нажать кнопку “Отправить”, чтобы всё написанное у нас сохранилось.

⌛️ Срок на выполнение этого задания у Вас, как и у ребят, 15 дней (до (число, смотреть в карточке класса)).

‼️ Ваша задача: переслать это сообщение в чат родителей и проконтролировать, чтобы все родители увидели это сообщение. Если у кого-то из родителей возникнут какие-либо проблемы с заполнением Гугл-формы, пусть пишут Вам, а Вы пересылайте их сообщения мне.
Ещё раз спасибо! Хорошего Вам дня! ☀️
Сообщение старосте

Привет! 👋 
🙏 У меня есть просьба к тебе:
Напиши мне, пожалуйста, следующую информацию:
1.	Сколько у вас в классе мальчиков и девочек
2.	Список предметов, которые вы прошли за 11 лет обучения (напиши +- по памяти)
3.	Список предметов, которые вы изучаете именно в 11 классе 
Ещё раз большое спасибо! 💙 

Сообщение в беседу класса:

Ребята, привет! 👋
Оперативное задание, которое выполнить нужно каждому сегодня. Пройти этот опросник (он анонимный): (ссылка на опросник)
Прохождение опросника займёт у вас меньше минуты 😅
Это нужно для страницы со статистикой 📊 

Если в классе заказало журнал 17 человек и меньше, то класс фоткается в один день, на половины делить не надо. Если в классе заказало журнал 18 человек и больше, то класс фоткается в два дня, на половины делить надо. СКРИН С РАЗДЕЛЕНИЕМ СНИЗУ!!!

ДЛЯ КЛАССОВ, КОТОРЫЕ ФОТКАЮТСЯ В ДВА ДНЯ:
Всем привет! 👋
📸 Мы с вами начинаем подготовку к фотосессии. Первый этап – разделение по группам. ВАЖНО: делятся только те, кто берёт журнал, кто не берёт журнал, не учитываются при разделении на группы, но на съёмку могут прийти для групповых фотографий (об этом НЕОБХОДИМО сообщить мне). 

❗️ Ваша задача – самостоятельно разбиться на две половины класса. Вас (…) человек, значит в первой половине (…), во второй (…) человек.
👨‍👩‍👦‍👦 Далее, в каждой половине люди должны разбиться между собой на группы ОТ 3 ДО 5 ЧЕЛОВЕК включительно. Так как в ПЕРВОЙ ПОЛОВИНЕ вас (число выпускников, берущих журнал) человек, то необходимо разделиться на группы по (см. в таблице) человека или (см. в таблице, если там 1 вариант разделения то “ИЛИ” не нужно) человека. Съёмка будет проходить (см. в таблице) час и (см. в таблице) минут. 
ВТОРАЯ ПОЛОВИНА: так как вас (число выпускников, берущих журнал) человек, то необходимо разделиться на группы по (см. в таблице) человека или (см. в таблице, если там 1 вариант разделения то “ИЛИ” не нужно) человека. Съёмка будет проходить (см. в таблице столбец 4).

📸 Процесс съёмки будет проходить в 2 дня, т.е. первая половина класса в один день, вторая половина - в другой. На каждую группу будет выделяться время в соответствии с количеством человек в группе. Локации для каждой половины класса могут быть разные (разные у ПОЛОВИН, а не у ГРУПП). Выбор дат и локаций будет позже, сейчас нужно разбиться на половины и группы.
📍От старосты до 20:00 завтрашнего дня жду в ЛС список половин и групп в таком формате:
ПЕРВАЯ ПОЛОВИНА:
Группа 1: ФИ 1, ФИ 2, ФИ 3 и тд
Группа 2: ФИ 4, ФИ 5, ФИ 6 и тд
ВТОРАЯ ПОЛОВИНА:
Группа 3: ФИ 7, ФИ 8, ФИ 9 и тд
Группа 4: ФИ 10, ФИ 11, ФИ 12 и тд




ДЛЯ КЛАССОВ, КОТОРЫЕ ФОТКАЮТСЯ В ОДИН ДЕНЬ:
Всем привет! 👋
📸 Мы с вами начинаем подготовку к фотосессии. Первый этап – разделение по группам. ВАЖНО: делятся только те, кто берёт журнал, кто не берёт журнал, не учитываются при разделении на группы, но на съёмку могут прийти для групповых фотографий (об этом НЕОБХОДИМО сообщить мне). 

❗️Ваша задача – самостоятельно разбиться между собой на группы ОТ 3 ДО 5 ЧЕЛОВЕК включительно. Так как вас (число выпускников, берущих журнал) человек, то необходимо разделиться на группы по (см. в таблице) человека или (см. в таблице, если там 1 вариант разделения то “ИЛИ” не нужно) человека. Съёмка будет проходить (см. в таблице столбец 4). 

📸 Процесс съёмки будет проходить в один день в одной локации. На каждую группу будет выделяться время в соответствии с количеством человек в группе. Выбор дат и локаций будет позже, сейчас нужно разбиться на группы.

📍 Староста должна до 20:00 завтрашнего дня прислать мне в ЛС список групп в таком формате:
Группа 1: ФИ 1, ФИ 2, ФИ 3 и тд
Группа 2: ФИ 4, ФИ 5, ФИ 6 и тд
Группа 3: ФИ 7, ФИ 8, ФИ 9 и тд

КЛАСС РАЗДЕЛЁН НА ПОЛОВИНЫ, ОПТИМАЛЬНЫЙ КЛАСС
Ребята, привет! 👋
📸 Итак, мы начинаем 2 этап подготовки к фотосессии.
🗓️ Вот даты, из которых вы можете выбрать удобные для вас: 
(свободные даты фотографа). 

❗️ Напоминаю, вы выбираете 2 даты, первая дата - для первой половины класса. Вторая дата - для второй половины класса. 
⏱️ Также, необходимо определиться со временем. ВАЖНО: группы идут друг за другом (например, первая группа фоткается с 13:00 до 13:45, значит следующая группа должна быть в студии уже в 13:40).

📍 Также вам необходимо определиться с локациями, где вы будете фотографироваться. Напоминаю, что одна локация - для половины класса. Локации у двух половин могут отличаться. 
✅ Ваш класс заказал такой вариант, при котором мы предоставляем локацию для съёмок в студии. Вы выбираете понравившийся вариант, а мы арендуем. 

Варианты студий:
1.	г. Иваново: Space - любой зал (https://vk.com/space_space_project);
2.	г. Иваново: Азарт студия - зал флэшпоп (https://vk.com/azartstudios?w=product-110133865_1533651/query).

⏳ К 20:00 послезавтрашнего дня жду от старосты список в таком формате:
ПЕРВАЯ ПОЛОВИНА *такого-то числа* фоткается в *такой-то локации*:
Группа 1 в *такое-то время*
Группа 2 в *такое-то время*
И тд 
ВТОРАЯ ПОЛОВИНА *такого-то числа* фоткается в *такой-то локации*:
Группа 3 в *такое-то время*
Группа 4 в *такое-то время*
И тд 

ВАЖНО: расчётное время на группы следующее: 
3 человека можно сфоткать за 35 съёмочных минут; 4 человека - 45 съёмочных минут; 5 человек - 55 съёмочных минут.
Этого времени будет достаточно, чтобы фотограф успел сделать вам необходимое количество фотографий.





КЛАСС !НЕ! РАЗДЕЛЁН НА ПОЛОВИНЫ, ОПТИМАЛЬНЫЙ  КЛАСС
Ребята, привет! 👋
📸 Итак, мы начинаем 2 этап подготовки к фотосессии.
🗓️ Вот даты, из которых вы можете выбрать удобные для вас: 
(свободные даты фотографа). 

❗️ Вы выбираете 1 дату для всего класса. 
⏱️ Также, необходимо определиться со временем. ВАЖНО: группы идут друг за другом (например, первая группа фоткается с 13:00 до 13:45, значит следующая группа должна быть в студии уже в 13:40).

📍 Также вам необходимо определиться с локацией, где вы будете фотографироваться. Один вариант локации для всего класса. 
✅ Ваш класс заказал такой вариант, при котором мы предоставляем локацию для съёмок в студии. Вы выбираете понравившийся вариант, а мы арендуем.
Варианты студий:
1.	г. Иваново: Space - любой зал (https://vk.com/space_space_project);
2.	г. Иваново: Азарт студия - зал флэшпоп (https://vk.com/azartstudios?w=product-110133865_1533651/query).

⏳ К 20:00 послезавтрашнего дня жду от старосты список в таком формате:
Класс фотографируется *такого-то числа* в *такой-то локации*:
Группа 1 в *такое-то время*
Группа 2 в *такое-то время*
И тд 

ВАЖНО: расчётное время на группы следующее: 
3 человека можно сфоткать за 35 съёмочных минут; 4 человека - 45 съёмочных минут; 5 человек - 55 съёмочных минут.
Этого времени будет достаточно, чтобы фотограф успел сделать вам необходимое количество фотографий.

Класс разделён на половины: 
Ребята, привет! 👋 
‼️ Сегодня очень важно дать окончательный ответ насчёт выбора дат и локаций
Жду от старосты итоговое решение ✅

Класс НЕ разделён на половины: 
Ребята, привет!
‼️ Сегодня очень важно дать окончательный ответ насчёт выбора даты и локации
Жду от старосты итоговое решение ✅
Сообщение ответственному родителю:

Здравствуйте! 👋
📍Есть один момент, который нужно решить сейчас. Это касается общей съёмки. Эту съёмку мы проводим в школе, делаем там общее фото класса и фото учителей.
❗️К Вам просьба: через руководство школы договориться, чтобы нашего фотографа пустили в школу для создания необходимых фотографий для выпускного журнала в определенную дату и время (всего на 1 час).

📸 В случае, если администрация школы ни в какую не согласна пускать нас в школу для создания фоток в выпускной журнал, мы предлагаем провести эту съёмку в студии. Аренда студии в данном случае для общей съёмки осуществляется за счёт заказчиков. День и время съёмки будут выбирать выпускники из дат, предложенных нами. 

Как только станет известно, сообщите мне. Заранее спасибо! 💙
Сообщение ответственному выпускнику
Только для классов, у которых стоит соответствующая задача
Привет! Смотри, мы начинаем решать вопрос насчёт общей съёмки вашего класса. Суммарно общая съёмка будет идти около 1-го часа. За это время мы должны сделать: 
•	Индивидуальное фото классному руководителю (5 минут)
•	Общее фото учителей-предметников (5 минут)
•	Две общие фотографии класса (40 минут) 
Первое, что нужно: обсудите с ребятами, в какой день недели и какое время будет удобно. После этого мы вам предложим варианты дат.
Ожидаю от тебя ответ в таком формате: 
Общую съёмку можем провести: 
•	в понедельник с 11:00 
•	во вторник в интервале с 12:00 до 14:00
•	в среду после 15:00 
Ответ нужно дать к завтрашнему дню. Спасибо!
Сообщение старосте  
Привет! 👋
📍В общем смотри, у нас есть небольшая задачка.
С вашим классом надо в один день сделать общую фотку всего класса. Съёмка будет длиться 1 час ⏳

❌ В школе провести эту съёмку не получится, поэтому поступим следующим образом:
1.	👩‍🏫 Одно общее фото учителей вам будет необходимо сделать самостоятельно в школе на айфон какого-нибудь ученика из класса (вот инструкция: https://docs.google.com/document/d/17v_WkHglexeNrQc4m98zwaGd2fXoW2tq9R4M6kj4LVA/edit?usp=sharing).
2.	📸 Съёмка класса будет проходить в студии. Вам с ребятами сообща нужно выбрать дату и время съёмки из предложенных. Надо подобрать день так, чтобы всем было удобно:
(свободные даты и время фотографа общей съёмки)
❗️Нужно подобрать такую дату и время, чтобы ВСЕ ребята смогли присутствовать. 
3.	👩‍🏫 Одно индивидуальное фото классного руководителя. Желательно, чтобы он смог присутствовать с Вами на этой съёмке. В ином случае Вам необходимо будет либо сфотографировать его самостоятельно в школе (по этому примеру: https://docs.google.com/document/d/19pldGgnk7HLcE2o7WVhn_cV9OTKwfFsNPTsaWgx736I/edit?usp=sharing ), либо прислать его фото файлом из соц. сетей в хорошем качестве.

Общее фото класса делаем примерно 40 минут ⏳
Нам с вами надо будет сделать 2 общие фотки ‼️
Эти фото будут интересными, а не просто вас в линеечку поставят 🤌
Фотографии можно сделать как в одном, так и в двух разных образах (если образа 2, то переодеться нужно будет очень быстро) 👗👔

💡 Мы заинтересованы в том, чтобы сделать всё максимально круто, поэтому понадобится небольшая помощь.
Вопрос по общей съёмке я буду решать через тебя 🤝

Что требуется: 
1) 📍Выбрать день и время, когда все выпускники вашего класса смогут.
2) 📍Решить по образу: вы будете на обеих фотках в одном образе или разных. 
Ожидаю от вас день и время

Сообщение старосте

Привет! 👋

📍В общем смотри, у нас есть небольшая задачка.
С вашим классом надо в один день сделать общую фотку вашего учительского состава и общую фотку всего класса. Съёмка будет длиться 1 час ⏳

👩‍🏫 Одно общее фото учителей делаем в школе - 5 минут времени, индивидуальное классрука - 5 минут.
Надо будет собрать всех учителей на 5 минут, чтобы мы сделали это фото. 
❗️ВАЖНО: учителей надо предупредить заранее (лучше первое предупреждение за 2 недели до съёмки, второе предупреждение за неделю до съёмки, третье предупреждение за 2 дня до съёмки, учителям лучше так) что фото учительского состава всех вместе!

Общее фото класса делаем в школе 40 минут ⏳
Нам с вами надо будет сделать 2 общие фотки ‼️
Эти фото будут интересными, а не просто вас в линеечку поставят 🤌
Фото можно будет сделать в спортзале/актовом зале/кабинете/коридоре 🏛️
Фотографии можно сделать как в одном, так и в двух разных образах (если образа 2, то переодеться нужно будет очень быстро) 👔👗

❗️ОЧЕНЬ ВАЖНО, что процесс съёмки необходимо организовать последовательно, одно за другим (фото учителей и сразу же затем общее фото класса (ну либо наоборот в последовательности), без временных промежутков).
Надо подобрать день так, чтобы всем было удобно. 
‼️Ну и главное, чтобы фотографа пустили в школу!!!

💡 Мы заинтересованы в том, чтобы сделать всё максимально круто, поэтому понадобится небольшая помощь.
Вопрос по общей съёмке я буду решать через тебя 🤝

Что требуется: 
1) 📍Выбрать день и время, когда смогут учителя и ваш класс.
Варианты: 
(свободные даты и время)
(Необходимо выбрать один день и одно время: например, 24 января в 11:00 учителя в 11:10 весь класс.) 
2) 📍Предупредить учителей, что будет одно общее фото всего учительского состава и индивидуально классного руководителя.
3) 📍Решить с классом, где будем делать общее фото - это может быть или актовый, или спортивный зал. 
4) 📍Решить по образу: вы будете на обеих фотках в одном образе или разных. 
5) 📍Предупредить администрацию школы, чтобы фотографа пустили в школу в выбранный вами день и время. 
6) 📍Необходимы будут: 2 парты, стулья около 15 штук.

Ожидаю от вас день и время

Сообщение родителю

Здравствуйте! 👋

✅ Мы с ребятами решаем вопрос насчёт общей съемки класса и учителей. 
❌ В школе провести эту съёмку не получится, поэтому поступим следующим образом:
1.	👩‍🏫 Одно общее фото учителей выпускники сделают самостоятельно в школе на хороший телефон. Инструкцию мы им скинули.
2.	📸 Съёмка класса будет проходить в студии. Ребята выбрали следующую дату и время - (указать время, которое выбрали выпускники). Как говорилось ранее, оплата студии для этой съёмки осуществляется за счёт заказчиков.
3.	👩‍🏫 Одно индивидуальное фото классного руководителя. Желательно, чтобы он смог присутствовать с выпускниками на съёмке. В ином случае выпускникам необходимо будет либо сфотографировать его самостоятельно в школе (инструкцию тоже скинули), либо прислать его фото файлом из соц. сетей в хорошем качестве.

Общее фото класса делаем примерно 40 минут ⏳
Нам с Выпускниками надо будет сделать 2 общих фото ‼️

Заранее ставлю Вас в известность, спасибо

Сообщение родителю
Здравствуйте! 👋

✅ Мы с ребятами решили вопрос насчёт общей съемки класса и учителей. Она будет проходить (выбранная дата и время)

❗️Продублирую Вам инструктаж по этой съемке, чтобы Вы были в курсе, а также проконтролировали процесс через классного руководителя.

👩‍🏫 Одно общее фото учителей делаем в школе - 5 минут времени, индивидуальное классного руководителя - 5 минут.
Надо будет собрать всех учителей на 5 минут, чтобы мы сделали это фото. 
❗️ВАЖНО: учителей надо предупредить (лучше первое предупреждение за 2 недели до съёмки, второе предупреждение за неделю до съёмки, третье предупреждение за 2 дня до съёмки, учителям лучше так), что фото учительского состава всех вместе!

Общее фото класса делаем в школе 40 минут ⏳

‼️Ну и главное, чтобы фотографа ПУСТИЛИ в школу!!!

💡Мы заинтересованы в том, чтобы сделать всё максимально круто, поэтому просим вас проконтролировать организацию общей съёмки.

Что требуется: 
1) 📍Предупредить администрацию школы, чтобы фотографа пустили в школу в выбранный день и время. 
2) 📍Предупредить учителей, что будет одно общее фото всего учительского состава и индивидуально классного руководителя.
3) 📍Необходимы будут: 2 парты, стулья около 15 штук.

Заранее спасибо

Сообщение старосте

Привет! 👋 
📸 Общая съёмка будет проходить в студии (дата и время съёмки), (ссылка на студию, название зала).

По съёмке: 
1.	👔👗 Решить по образу: вы будете на обеих фотках в одном образе или разных.
2.	👞 ОБУВЬ. В студии необходима сменная, абсолютно чистая и сухая обувь.
3.	📍ПРОКЛЕИТЬ ОБУВЬ БУМАЖНЫМ СКОТЧЕМ (либо дома, либо в студии попросить его за 10 минут до начала фотосессии), АККУРАТНО ВСЮ ПОДОШВУ, ЧТОБЫ СКОТЧА НЕ БЫЛО ВИДНО НА БОРТИКАХ, в противном случае фотограф не сможет убрать это обработкой.
❗️Это важно, иначе, в случае порчи фотостудии, придется выплатить ШТРАФ.
4.	🗑️ Если вы оставляете после себя МУСОР (фантики, бутылки и тому подобное), то его нужно будет УБРАТЬ, чтобы студия выглядела так, какой она была перед первой группой.

Что касается учителей: 
1.	❗️Одно общее фото учителей сделать самостоятельно в школе на айфон кого-нибудь из учеников класса (вот инструкция: https://docs.google.com/document/d/17v_WkHglexeNrQc4m98zwaGd2fXoW2tq9R4M6kj4LVA/edit).
2.	❗️Одно индивидуальное фото классного руководителя. Желательно, чтобы он смог присутствовать с Вами на съёмке. В ином случае вам необходимо будет либо сфотографировать его самостоятельно в школе (по этому примеру: https://docs.google.com/document/d/19pldGgnk7HLcE2o7WVhn_cV9OTKwfFsNPTsaWgx736I/edit), либо прислать его фото файлом из соц. сетей в хорошем качестве.


Сообщение старосте

Привет! 👋
📸 Общая съёмка будет проходить у вас в школе (дата и время съёмки)

Что требуется: 
1) Организовать учителей, чтобы они все собрались в одном месте в (время начала съёмки учителей) 👩‍🏫
2) Решить с классом, где будем делать общее фото - место 🏛️
3) Решить по образу: вы будете на обеих фотках в одном образе или разных 👔👗
4) Предупредить администрацию школы, чтобы фотографа пустили в школу в выбранный вами день и время 👨‍💼
5) Необходимы будут: 2 парты, стулья около 15 штук ✅
Сообщение родителю

Здравствуйте! 👋
✅ Сообщение с уточнением по общей съёмке отправил в беседу с ребятами. Она будет проходить (дата и время съёмки, ссылка на студию, название зала)

Что касается учителей: 
1.	❗️Одно общее фото учителей выпускники сделают самостоятельно в школе на хороший телефон.
2.	❗️Одно индивидуальное фото классного руководителя. Желательно, чтобы он смог присутствовать с выпускниками на съёмке.

Пожалуйста, проконтролируйте процесс подготовки. Заранее спасибо! 💙
Сообщение родителю

Здравствуйте! 👋
✅ Сообщение с уточнением по общей съёмке отправил в беседу с ребятами. 

Дублирую Вам информация, что требуется от учеников: 
1) Организовать учителей, чтобы они все собрались в одном месте в (время начала съёмки учителей) 👩‍🏫
2) Решить с классом, где будем делать общее фото - место 🏛️
3) Решить по образу: вы будете на обеих фотках в одном образе или разных 👗👔
4) Предупредить администрацию школы, чтобы фотографа пустили в школу в выбранный вами день и время 👨‍💼
ВАЖНО: нужно, чтобы в день съёмки за 5 минут до начала кто-нибудь (это может быть классный руководитель, староста или кто-либо из родителей) встретил фотографа у школы и провёл к месту, где будет проходить съёмка. Решите, пожалуйста, этот вопрос и предоставьте мне номер телефона этого человека. Фотограф по приезде позвонит, скооперируются 
5) Необходимы будут: 2 парты, стулья около 15 штук ✅

Пожалуйста, проконтролируйте процесс подготовки. Заранее спасибо!💙
Сообщение старосте

Привет! 👋
❗️Напоминаю, что общая съёмка будет проходить завтра в студии (дата и время съёмки), (ссылка на студию, название зала). В студию всем необходимо прийти за 10 минут до начала съёмки.

📸 По съёмке: 
1.	👔👗 Решить по образу: вы будете на обеих фотках в одном образе или разных.
2.	👞 ОБУВЬ. В студии необходима сменная, абсолютно чистая и сухая обувь.
3.	📍 ПРОКЛЕИТЬ ОБУВЬ БУМАЖНЫМ СКОТЧЕМ (либо дома, либо в студии попросить его за 10 минут до начала фотосессии), АККУРАТНО ВСЮ ПОДОШВУ, ЧТОБЫ СКОТЧА НЕ БЫЛО ВИДНО НА БОРТИКАХ, в противном случае фотограф не сможет убрать это обработкой.
❗️Это важно, иначе, в случае порчи фотостудии, придется выплатить ШТРАФ.
4.	🗑️ Если вы оставляете после себя МУСОР (фантики, бутылки и тому подобное), то его нужно будет УБРАТЬ, чтобы студия выглядела так, какой она была перед первой группой.

Сообщение  родителю

Здравствуйте! 👋
❗️Напоминаю, что общая съёмка будет проходить завтра (дата и время съёмки, ссылка на студию, название зала)
✅ Сообщение с напоминанием о съёмке мы ребятам отправили. 
📍Пожалуйста, скажите родителям, чтобы ещё раз напомнили ребятам. Заранее спасибо! 💙

Сообщение родителю 

Здравствуйте! 👋
❗️Напоминаю, что общая съёмка будет проходить у вас в школе завтра (дата и время съёмки)

Напоминаю, что требуется от ребят: 
1) Организовать учителей, чтобы они все собрались в одном месте в (время начала съёмки учителей) 👩‍🏫
2) Решить с классом, где будем делать общее фото - место 🏛️
3) Решить по образу: ребята будут на обеих фотках в одном образе или разных 👗👔
4) Предупредить администрацию школы, чтобы фотографа пустили в школу в выбранный вами день и время 👨‍💼
5) Необходимы будут: 2 парты, стулья около 15 штук ✅

Сообщение с напоминанием о съёмке мы ребятам отправили. 
📍Пожалуйста, скажите родителям, чтобы ещё раз напомнили ребятам. Необходимо убедиться, что фотографа пустят в школу.
Заранее спасибо! 💙
В группах необходимо указать всех выпускников. Неберущих помечать - Имя Фамилия (не берёт). Максимальное количество человек в группе - 5. Максимальное количество групп - см. во втором столбце разделения на группы. 

Ребят, привет 👋 
Проверьте, пожалуйста, все ли есть в списке и всё ли правильно😇
Уточнение по съёмке:
Напоминание №1 и №2

Ребята, привет! 👋
❗️ Напоминаю, что (число, смотреть в карточке класса) у вас последний день на сбор информации для журнала. 

👥 Вот список тех, у кого что-либо не сделано:
(прикрепить скрин из раздела “Контроль собранной инфы”)

ТАКЖЕ, ЭТОТ СКРИН НУЖНО ОТПРАВИТЬ ОТВЕТСТВЕННОМУ РОДИТЕЛЮ С ПРОСЬБОЙ ПЕРЕСЛАТЬ ЕГО В ЧАТ РОДИТЕЛЕЙ, ЧТОБЫ ВСЕ РОДИТЕЛИ ПРОКОНТРОЛИРОВАЛИ ДЕТЕЙ

Пример скрина “Контроль собранной инфы”, который необходимо прикрепить: 
Скрин необходимо делать так, чтобы не было видно ничего лишнего.
 

Напоминание №3
Отправить в беседу класса: 
Ребята, привет! 👋
❗️ Напоминаю, что завтра у вас последний день на сбор информации для журнала. 

👥 Вот список тех, у кого что-либо не сделано:
(прикрепить скрин из раздела “Контроль собранной инфы”)

‼️ Ребята, работа по подготовке журнала - поэтапная. Пока каждый не выполнит все задания по сбору информации, мы не сможем перейти к следующему этапу. Поэтому не подставляйте друг друга и выполните всё в срок.

Прошу поставить реакцию об ознакомлении! 💙

ТАКЖЕ, ЭТОТ СКРИН НУЖНО ОТПРАВИТЬ ОТВЕТСТВЕННОМУ РОДИТЕЛЮ С ПРОСЬБОЙ ПЕРЕСЛАТЬ ЕГО В ЧАТ РОДИТЕЛЕЙ, ЧТОБЫ ВСЕ РОДИТЕЛИ ПРОКОНТРОЛИРОВАЛИ ДЕТЕЙ

Отправить индивидуально каждому должнику: 
Привет! 👋
Смотри, до конца сбора информации для журнала осталось мало времени
У тебя выполнены не все задания.
Необходимо отнестись к этому с должной серьезностью, чтобы мы уложились во все сроки. 
Если сейчас не сделать эти задания в срок, то мы не сможем перейти к следующему этапу подготовки выпускного журнала
(прикрепить скрин из раздела “Контроль собранной инфы”)

Пример скрина “Контроль собранной инфы”, который необходимо прикрепить: 
Скрин необходимо делать так, чтобы не было видно ничего лишнего (видна только инфа, индивидуально касаемая выпускников)

Сообщение родителю

Здравствуйте!
Мы закончили сбор необходимой информации для журналов.
Вот то, что нам удалось собрать. В дальнейшем “доскинуть” какую-либо информацию возможности не будет. Пожалуйста согласуйте, что данный список собранной информации финальный. 
Спасибо
 
(сделать скрин листа “Контроль сбора инфы” из списка класса)

Сообщение старосте
…, привет! 👋
Смотри, мы делаем журнал для вашего классного руководителя 👩‍🏫


📍Наша задача сделать его интересным и качественным, поэтому нам нужна помощь от вас как от учеников. 
Для того, чтобы сделать журнал, есть просьба собрать и написать следующую информацию вот сюда:
(ссылка на папку КР)
1) 🤳 Загрузить в папку “ЛАЙФ ФОТО” фото, связанные с классным руководителем лайф-формата. Количество - 4 штуки. Если трудности с поиском - их также можно сделать самим. Главное, чтоб качество фото было хорошим.
2) 📝 В папке “Журнал КР” открыть текстовый файл и написать туда: 
-ФИО классрука👩‍🏫;
-несколько слов о классном руководителе. Например: «Олегу Анатольевичу - самому доброму, справедливому, умному, весёлому классному руководителю
на память о выпуске 2025»; 
-текст «Мы говорим Вам спасибо»🙏: Одно длинное пожелание от всего класса со словами благодарности классному руководителю или воспоминание каких-то моментов, или и то, и другое вместе; 
-«Забавные истории»😅: Какая-либо история, связанная именно с классным руководителем; 


Пожелания классному руководителю 🫂Необходимо, чтобы каждый из класса написал его в этой гугл форме:(ссылка на гугл-форму). Эту ссылку скопируй и отправь ребятам (только нужно, чтобы классный руководитель не узнал, это сюрприз)

📌 Вот прикрепляю пример текста «Мы говорим Вам спасибо»
Пример: https://drive.google.com/drive/folders/1VG573K0FtVPOupkQSRpFguLB54VAN1cd 

⌛️ Очень важно всё это прислать до (число, смотреть в карточке класса. НЕ ПЕРЕПУТАТЬ С ДЕДЛАЙНОМ СБОРА ИНФЫ!!!)
📌 Ещё прикрепляю пример, как будет выглядеть журнал для классного руководителя: 
https://drive.google.com/drive/folders/1EXPBcdPjx6RPkyJc0GEKQbFNQWHMek7l?usp=sharing


ОБЯЗАТЕЛЬНО спросить у старосты, когда учитель стал Классным руководителем 

Сообщение старосте 

ПЕРВОЕ НАПОМИНАНИЕ
Привет! Напоминаю про журнал для классного руководителя👩‍🏫

ПОСЛЕДНЕЕ НАПОМИНАНИЕ
Привет! 👋
⌛️ Завтра заканчивается срок для подготовки журнала для классного руководителя. 
📍 На данный момент ситуация сложилась следующая:
(указать, что хватает, что не хватает)
❗️Пожалуйста, обрати пристальное внимание. Все задания нужно выполнить в срок 🙏

Сообщение родителю

Здравствуйте!
Мы закончили сбор информации для журнала классному руководителю. Вся необходимая информация собрана, приступаем к созданию. 


ДЛЯ ТЕХ, КТО ФОТКАЕТСЯ В СТУДИИ:
Всем привет! 👋
❓Если у вас нет идей, какие позы использовать во время фотосессии, мы подготовили подборку. Заранее найдите примеры понравившихся поз и на фотосессии покажите фотографу:
https://disk.yandex.ru/d/kFHmZWrrrUzXSQ 

💡 Небольшие лайфхаки: 
1.	Подготовить 2 образа, один для индивидуальных фото, второй для групповых 👨‍👩‍👧‍👦
2.	Для групповых фото договориться одеться в едином стиле и в схожей цветовой гамме 🤵🤵‍♀️
3.	Взять с собой реквизит. Примеры: тёмные очки, головные уборы или атрибуты вашего хобби (гитара, мяч и т.д.🕶️🧢🎸)

И ПОЖАЛУЙСТА, НЕ ЗАБЫВАЙТЕ:
1.	ОБУВЬ. В студии необходима сменная, абсолютно чистая и сухая обувь.
2.	ПРОКЛЕИТЬ ОБУВЬ БУМАЖНЫМ СКОТЧЕМ (либо дома, либо в студии попросить его за 10 минут до начала фотосессии), АККУРАТНО ВСЮ ПОДОШВУ, ЧТОБЫ СКОТЧА НЕ БЫЛО ВИДНО НА БОРТИКАХ, в противном случае фотограф не сможет убрать это обработкой.
Это важно, иначе, в случае порчи фотостудии, придется выплатить ШТРАФ.
3.	Если вы оставляете после себя МУСОР (фантики, бутылки и тому подобное), то его нужно будет УБРАТЬ, чтобы студия выглядела так, какой она была перед первой группой. 



ДЛЯ ТЕХ, КТО ФОТКАЕТСЯ В ШКОЛЕ :
Всем привет! 👋
❓Если у вас нет идей, какие позы использовать во время фотосессии, мы подготовили подборку. Заранее найдите примеры понравившихся поз и на фотосессии покажите фотографу:
https://disk.yandex.ru/d/kFHmZWrrrUzXSQ 

💡 Небольшие лайфхаки: 
1.	Подготовить 2 образа, один для индивидуальных фото, второй для групповых 👨‍👩‍👧‍👦
2.	Для групповых фото договориться одеться в едином стиле и в схожей цветовой гамме 🤵🤵‍♀️
3.	Взять с собой реквизит. Примеры: тёмные очки, головные уборы или атрибуты вашего хобби (гитара, мяч и т.д.🕶️🧢🎸)
 
🏫 Насчёт съёмки в школе: 
1.	Заранее убедиться, что фотографа пустят в школу.
2.	Заранее выбрать 1-2 локации, где вы хотели бы фотографироваться (кабинет, актовый зал, спортзал, коридоры, библиотека и тд) и договориться, чтобы нас туда пустили. От качества локаций будет зависеть качество самих фотографий. 


ДЛЯ ТЕХ, КТО ФОТКАЕТСЯ НА УЛИЦЕ :
Всем привет! 👋
❓Если у вас нет идей, какие позы использовать во время фотосессии, мы подготовили подборку. Заранее найдите примеры понравившихся поз и на фотосессии покажите фотографу:
https://disk.yandex.ru/d/kFHmZWrrrUzXSQ 

💡 Небольшие лайфхаки: 
1.	Подготовить 2 образа, один для индивидуальных фото, второй для групповых 👨‍👩‍👧‍👦
2.	Для групповых фото договориться одеться в едином стиле и в схожей цветовой гамме 🤵🤵‍♀️
3.	Взять с собой реквизит. Примеры: тёмные очки, головные уборы или атрибуты вашего хобби (гитара, мяч и т.д.🕶️🧢🎸)

Сообщение в беседу класса

Ребят, привет! 👋 
📸 Напоминаю вам, что вы фоткаетесь … (числа) в … (локации) в … (время). Не забывайте и приходите вовремя. 

*+ЕСЛИ В СТУДИИ:

ВАЖНО: 
1.	В студию приходите за 10-15 минут до начала съёмки, чтобы успеть переодеться в образ и заклеить подошву обуви 🕙
2.	Ответственно и внимательно подойдите к выбору референсов. Время в студии ограничено, поэтому сразу посмотрите позы, которые вы бы хотели воплотить на индивидуальных и групповых кадрах и НА СЪЁМКЕ покажите их фотографу 🕺💃
3.	Если вы чувствуете себя закрепощенно перед объективом, то попробуйте потренироваться дома перед зеркалом 🙌🏼
4.	Если с вами на съёмку приезжает кто-либо из родственников, то они во время съёмки могут находится в лобби студии🧑‍🧑‍🧒🧑‍🧒

И ПОЖАЛУЙСТА, НЕ ЗАБЫВАЙТЕ:
1.	👞 ОБУВЬ. В студии необходима сменная, абсолютно чистая и сухая обувь.
2.	ПРОКЛЕИТЬ ОБУВЬ БУМАЖНЫМ СКОТЧЕМ (либо дома, либо в студии попросить его за 10 минут до начала фотосессии), АККУРАТНО ВСЮ ПОДОШВУ, ЧТОБЫ СКОТЧА НЕ БЫЛО ВИДНО НА БОРТИКАХ, в противном случае фотограф не сможет убрать это обработкой.
Это важно, иначе, в случае порчи фотостудии, придется выплатить ШТРАФ 💸
3.	Если вы оставляете после себя МУСОР (фантики, бутылки и тому подобное), то его нужно будет УБРАТЬ, чтобы студия выглядела так, какой она была перед первой группой🗑️ 

Сообщение в беседу класса

Ребята, привет! 👋 
🤩 Вот исходники со съемки, которая была (дата съёмки). Фотки сырые, с убранным цветом и светом в минимум. Необработанные, не выровненные и тд. Поэтому на качество цвета, света, резкость не смотрим, на исходниках смотрим на ваши лица и позы.
‼️ НЕ ВЫКЛАДЫВАЙТЕ ИХ НИКУДА.
(ссылка на исходники)

✅ ВАЖНАЯ ИНФА.
1) 📍Необходимо в гугл-опрос записывать номера выбранных вами фоток для обработки в течение 3 суток (то есть до 20:00 (число)). Номера фоток для обработки, которые вы будете писать в гугл опрос, нужно посмотреть в «Информации» к каждой фотографии (троеточие в правом верхнем углу). Номер фото – комбинация букв и цифр (например: IMG_1234.jpg или 3B4A1234.jpg). 
📍Вот необходимый для заполнения гугл-опрос: (ссылка на гугл-форму). В первом вопросе указываете свою фамилию и имя; во втором номер фотографии, которая будет на обложке журнала (она должна быть ИНДИВИДУАЛЬНОЙ фотографией, а не групповой); далее к остальным вопросам также указываете номера фото, которые вы выбрали (в ОДНОМ вопросе должен быть указан ОДИН номер фотографии)

2) 📍Кол-во фоток: 3 индивидуальные (в том числе обложка) и 6 групповых (на группу). 
Групповые фотографии: необходимо выбрать 6 фоток на всю группу, фотографии должны быть выбраны ОДИНАКОВЫЕ НА ВСЮ ГРУППУ. Выбирайте фотографии, где никто не моргает.
Индивидуальные фотографии: старайтесь выбирать фотографии непохожие друг на друга, чтобы у вас в журнале было разнообразие. Рекомендуем выбирать фото на обложку такое, чтобы вы смотрели в камеру и хорошо было видно лицо.

3) 📍В ТЕЧЕНИЕ 3 СУТОК ожидаем номера фоток, потом фотографии будут удалены без возможности довыбрать. Будьте внимательнее! Исходники удаляются совсем.

4) 📍Обращаю внимание на то, что опрос необходимо заполнить за один раз, если выйти на половине написанного, то ничего не сохранится и придётся писать заново. Перед закрытием опроса ОБЯЗАТЕЛЬНО нажать кнопку “Отправить”, чтобы всё написанное у нас сохранилось.

Сообщение выпускнику
Привет!
Смотри, тебя не было на фотосессии с классом. Не переживай, мы сделаем тебе фотографии на отдельной съёмке. Дату и локацию мы сообщим позже.

Сообщение в беседу класса

Ребят, привет! 👋 
‼️ Напоминаю вам, что в течение дня вам всем необходимо выбрать фотографии и указать их номера в гугл-форме. 
Не забывайте и не подставляйте друг друга! 💙

Сообщение в беседу класса

Ребята, привет! 👋
✅ Все фотки готовы и загружены в ваши папки (указать название папки, например “Фото с помещения”), можете смотреть, сохранять и выкладывать в соц. сети! Пожалуйста, проверьте свои фотографии в течение 24 часов, и, если что-то не так, напишите МНЕ. По истечению 24 часов исправить ничего будет нельзя!
Не забывайте упоминать наш инстаграм im.jornal на фотках 💙

📍Чтобы скачать в хорошем качестве с диска из ваших папок: около списка фоток нажимать на три точки, дальше нажать отправить копию, затем на сохранить изображение.

Сообщение родителю

Здравствуйте! Просьба передать это родителям. 
К нам часто обращаются с просьбой распечатать дополнительно индивидуальные фотографии своих детей после фотосессий, поэтому мы проинформируем сразу: такая возможность есть. 
Стоимость печати:
•	Формат А4 (большой) — 690₽
•	Формат А5 (средний) — 590₽
•	Формат А6 (маленький) — 490₽

Ссылка на фотографии класса: (ссылка на папку выпускники). 
Большая просьба к Вам, как к ответственному родителю, собрать информацию, кому нужно распечатать фотографии. Номера фото, которые нужно распечатать, выбирайте из папки выше.
Это необходимо сделать в ближайшие 3 дня.

Просьба к Вам до (указать дату) написать мне одним сообщением вот в таком формате:
Иванов Матвей - напечатать два индивидуальных фото 
(фото номер 1756 - формат А4 и 1763 - формат А5);
Сидорова Мария - напечатать одно индивидуальное фото 
(фото номер 1975 - формат А5);
Петров Иван - два индивидуальных фото напечатать 
(фото номер 1561 - формат А6).

Сообщение родителю

Здравствуйте💙
Можете, пожалуйста, напомнить родителям, что мы можем распечатать дополнительно индивидуальные фотографии ребят. Завтра жду от Вас окончательный список ребят и номеров фото, которые будет необходимо распечатать (в каком количестве и формате). 
Важный момент, потому что потом возможности дополнительной печати индивидуальных фотографий не будет.
Ожидаю от Вас финального сообщения с информацией завтра до 20:00🤗

Сообщение старосте

Привет
Вот фото с общей съёмки, необходимо выбрать ✅

Это исходники необработанные, нескадрированные, с убранным светом и цветом.
❗️Поэтому не выкладывать никуда, просто выбрать.
(ссылка на папку с общими фото)
📍Выбрать две фотки (одна - с расстоянием, вторая - без расстояния)
Обе фотки будут в журналах у всех одинаковые.

👩‍🏫 По классному руководителю: необходимо дать учителю выбрать одно фото для обработки в журнал. (ссылка на папку с фото КР)
⏳ По времени: завтра до 20:00 сказать мне номера выбранных фотографий из информации (там цифры по типу IMG_1234.jpg или 3B4A1234.jpg)

Сообщение старосте 

Привет
Вот фото с общей съёмки, необходимо выбрать ✅

Это исходники необработанные, нескадрированные, с убранным светом и цветом.
❗️Поэтому не выкладывать никуда, просто выбрать.
(ссылка на папку с общими фото)
📍Выбрать две фотки (одна - с расстоянием, вторая - без расстояния)
Обе фотки будут в журналах у всех одинаковые.

⏳ По времени: завтра до 20:00 сказать мне номера выбранных фотографий из информации (там цифры по типу IMG_1234.jpg или 3B4A1234.jpg)

+Если выпускники ещё не скинули фото КР и учителей, то необходимо скинуть сейчас

ЕСЛИ ВЫПУСКНИКА НЕ БЫЛО НИ НА ОДНОЙ СЪЁМКЕ
Сообщение выпускнику в ЛС 

Привет!
🤩 Вот твои исходники с дополнительной съёмки. Фотки сырые, с убранным цветом и светом в минимум. Необработанные, не выровненные и тд.
❗️НЕ ВЫКЛАДЫВАЙ ИХ НИКУДА.
(ссылка на исходники)

✅ВАЖНАЯ ИНФА.
1) 📍Необходимо мне в личные сообщения прислать номера выбранных фоток для обработки в течение 1 суток (то есть до 20:00 завтрашнего дня). Номера фоток нужно посмотреть в «Информации» к каждой фотографии (троеточие в правом верхнем углу). Номер фото – комбинация букв и цифр (например: IMG_1234.jpg или 3B4A1234.jpg). 
ВАЖНО: пометить индивидуальную фотографию, которую ты хочешь на обложку. Например:  IMG_1234.jpg (Обложка)
📍Прислать номера нужно в формате:
ПРИМЕР - Иванов Иван, школа №1, г. Москва -  IMG_1234.jpg, IMG_4321.jpg (Обложка)



2) 📍Кол-во фоток: 3 индивидуальные (одна из которых - на обложку). Старайся выбирать фотографии непохожие друг на друга, чтобы у тебя в журнале было разнообразие.




ЕСЛИ ВЫПУСКНИКУ НЕ  ПОНРАВИЛИСЬ ФОТКИ
Сообщение выпускнику в ЛС 

Привет!
🤩 Вот твои исходники с дополнительной съёмки. Фотки сырые, с убранным цветом и светом в минимум. Необработанные, не выровненные и тд.
❗️НЕ ВЫКЛАДЫВАЙ ИХ НИКУДА.
(ссылка на исходники)

✅ВАЖНАЯ ИНФА.
1) 📍Необходимо мне в личные сообщения прислать номера выбранных фоток для обработки в течение 1 суток (то есть до 20:00 завтрашнего дня). Номера фоток нужно посмотреть в «Информации» к каждой фотографии (троеточие в правом верхнем углу). Номер фото – комбинация букв и цифр (например: IMG_1234.jpg или 3B4A1234.jpg). 
ВАЖНО: пометить индивидуальную фотографию, которую ты хочешь на обложку. Например:  IMG_1234.jpg (Обложка)
📍Прислать номера нужно в формате:
ПРИМЕР - Иванов Иван, школа №1, г. Москва -  IMG_1234.jpg, IMG_1235.jpg, IMG_4321.jpg (Обложка)



2) 📍Кол-во фоток: для создания журнала необходимы 3 индивидуальных фото (одно из которых - на обложку). Выбери из фото, которые тебе сделали на прошлой съёмке и на общей, 3 фотографии. Одну из них пометь, что она на обложку. Старайся выбирать фотографии непохожие друг на друга, чтобы у тебя в журнале было разнообразие.






ЕСЛИ ВЫПУСКНИКА НЕ БЫЛО НА ВТОРОЙ СЪЁМКЕ 
Сообщение выпускнику в ЛС или через старосту
Привет!
🤩 Вот твои исходники с дополнительной съемки. Фотки сырые, с убранным цветом и светом в минимум. Необработанные, не выровненные и тд.
❗️НЕ ВЫКЛАДЫВАЙ ИХ НИКУДА.
(ссылка на исходники)

✅ВАЖНАЯ ИНФА.
1) 📍Необходимо мне в личные сообщения прислать номера выбранных фоток для обработки в течение 1 суток (то есть до 20:00 завтрашнего дня). Номера фоток нужно посмотреть в «Информации» к каждой фотографии (троеточие в правом верхнем углу). Номер фото – комбинация букв и цифр (например: IMG_1234.jpg или 3B4A1234.jpg). 

2) 📍Кол-во фоток: 1 индивидуальная фотография.

3) 📍ОБЛОЖКА. Сначала необходимо посмотреть обработанные индивидуальные фотографии с первой фотосессии, посмотреть на исходники индивидуальных фоток со второй фотосессии, и выбрать на основе этого одну индивидуальную фотографию на обложку. Если это фото с первой фотосессии, то посмотреть его номер в вашей папке с готовыми фотографиями и прислать мне с пометкой (Обложка). Рекомендуем выбирать фото на обложку такое, чтобы вы смотрели в камеру и хорошо было видно лицо.

В итоге жду от тебя сообщение в примерно таком формате:
Иванов Иван, школа №1, г. Москва 
Выбрал фото IMG_1234.jpg, на обложку её же

Или 
Иванов Иван, школа №1, г. Москва 
Выбрал фото IMG_1234.jpg
На обложку фото с первой фотосессии IMG_4321.jpg

СКИНУТЬ В БЕСЕДУ ВЫПУСКНИКАМ: 

Ребята, привет! Высылаю вам фотографии, которые мы сделали на общей съёмке💙
📍Вот ваши общие фотки:
(прикрепить ссылку на папку общее фото класса)
📍Фотка учителей:
(прикрепить ссылку на папку фото учителей [находится в папке учителя])
📍Фотка классного руководителя:
(прикрепить ссылку на папку фото класс рука [находится в папке учителя])

СКИНУТЬ  ВЫПУСКНИКУ, КОТОРОМУ СДЕЛАЛИ ФОТО НА ДОПОЛНИТЕЛЬНОЙ СЪЁМКЕ 

Привет! Твои индивидуальные фотографии, которые сделали на дополнительной съёмке, загружены в папку (указать название папки, например “Фото с помещения”). Можешь смотреть, сохранять и выкладывать в соц. сети! Пожалуйста, проверь свои фотографии в течение 24 часов, и, если что-то не так, напиши мне. По истечению 24 часов исправить ничего будет нельзя!
Не забывай упоминать наш инстаграм im.jornal на фотках 💙

📍Чтобы скачать в хорошем качестве с диска из ваших папок: около списка фоток нажимать на три точки, дальше нажать отправить копию, затем на сохранить изображение.
 💙

Сообщение родителю

Здравствуйте! 👋
📍Мы уже почти подготовили электронные версии журналов. Перед отправкой их в печать каждому родителю/выпускнику нужно внимательно проверить свой журнал на наличие каких-либо ошибок и недостатков.

❓К Вам вопрос: кому отправлять электронные версии журналов для проверки? Есть три варианта:
1.	Выпускникам 🧑‍🎓
2.	Родителям 👫
3.	Выпускникам и родителям 🧑‍🎓👫
Если скидывать родителям, то сохранится интрига и сюрприз.
Если выпускникам, то они заранее перед получением журналов уже увидят всё, включая все пожелания и т.д.
🤝 Поэтому мы рекомендуем проверять журналы родителям.

📍Пожалуйста, дайте ответ на этот вопрос в течение 24 часов.
Заранее спасибо! 💙

 ЕСЛИ ПРОВЕРЯЮТ РОДИТЕЛИ 
(СООБЩЕНИЕ ОТВЕТСТВЕННОМУ РОДИТЕЛЮ): 

Здравствуйте! 👋
💫 Вот электронные версии ваших журналов: 
(ссылка на папку с готовыми журналами)

📍Ваши действия: 
1) В течение двух суток просмотреть журналы на наличие каких-либо ошибок в тексте. 
Необходимые правки по тексту написать здесь: (ссылка на гугл-форму)
❗️ВАЖНО: данную гугл-форму необходимо пройти ВСЕМ родителям вне зависимости от того, требуются ли правки!

2)✅ Правки, которые можно внести: 
а) Знаки пунктуации и орфографические ошибки в тексте (например: страница 3 после слова “домой” поставить точку; страница 4 - после слова “потому” поставить запятую). 
б) Ошибки, связанные со вставкой информации. (например: страница 3 - выпуск 2024 заменить на 2025; страница 7 - указана не моя фамилия). 
в) Поменять фотографии с вашим присутствием местами (например: поменять местами фото такое-то и такое-то страниц 6 и 7). 

3) ❌ Правки, которые нельзя внести:
а) Расположение фотографий на страницах журнала.
б) Удаление/расположение текста. 
в) Замена фотографий на сторонние. 
г) Добавление сторонних элементов в журналы.
д) Изменение шрифта и размера текста. 
е) Изменение концепции журнала. 

4) 💡 Будьте внимательны, так как возможности внести ещё потом правки больше не будет. Ещё один этап правок оплачивается дополнительно. 

5) ⏳ У вас 2 дня на проверку журнала.

6) ❗️Обращаю внимание на то, что опрос необходимо заполнить за один раз, если выйти на половине написанного, то ничего не сохранится и придётся писать заново. Когда правки будет полностью написаны, перед закрытием опроса ОБЯЗАТЕЛЬНО нажать кнопку “Отправить”, чтобы всё написанное у нас сохранилось.

Пожалуйста, отпишите мне, как только разошлёте это сообщение родителям, заранее спасибо!!! 💙



ЕСЛИ ПРОВЕРЯЮТ ВЫПУСКНИКИ 
(СООБЩЕНИЕ В БЕСЕДУ): 

Привет! 👋 
💫 Вот электронные версии ваших журналов: 
(ссылка на папку с готовыми журналами)

📍 Ваши действия: 
1) В течение двух суток просмотреть журналы на наличие каких-либо ошибок в тексте. 
Необходимые правки по тексту написать здесь: (ссылка на гугл-форму)
❗️ВАЖНО: данную гугл-форму необходимо пройти ВСЕМ выпускникам вне зависимости от того, требуются ли правки!

2) ✅ Правки, которые можно внести: 
а) Знаки пунктуации и орфографические ошибки в тексте (например: страница 3 после слова “домой” поставить точку; страница 4 - после слова “потому” поставить запятую). 
б) Ошибки, связанные со вставкой информации. (например: страница 3 - выпуск 2024 заменить на 2025; страница 7 - указана не моя фамилия). 
в) Поменять фотографии с вашим присутствием местами (например: поменять местами фото такое-то и такое-то страниц 6 и 7). 

3) ❌ Правки, которые нельзя внести:
а) Расположение фотографий на страницах журнала.
б) Удаление/расположение текста. 
в) Замена фотографий на сторонние. 
г) Добавление сторонних элементов в журналы.
д) Изменение шрифта и размера текста. 
е) Изменение концепции журнала. 

4) 💡 Будьте внимательны, так как возможности внести ещё потом правки больше не будет. Ещё один этап правок оплачивается дополнительно. 

5) ⏳ У вас 2 дня на проверку журнала.

6) ❗️Обращаю внимание на то, что опрос необходимо заполнить за один раз, если выйти на половине написанного, то ничего не сохранится и придётся писать заново. Когда правки будет полностью написаны, перед закрытием опроса ОБЯЗАТЕЛЬНО нажать кнопку “Отправить”, чтобы всё написанное у нас сохранилось.

ЕСЛИ СКИДЫВАЕМ РОДИТЕЛЯМ:
Сообщение ответственному родителю: 

Здравствуйте! 👋
🔔 Напоминаю о возможности написать правки по выпускным журналам. Дублирую на всякий случай ссылку на папку с электронными версиями всех журналов: 
(ссылка на папку с готовыми журналами)

📍 Необходимые правки по тексту написать здесь: (ссылка на гугл-форму)

☑️ Вот список тех, кто заполнил форму! Если остальные всё-таки будут вносить правки, то это необходимо сделать в течение дня. (прикрепить скрин из приложения)

⬆️ Инструкцию и правила по всем возможным правкам присылал выше.
💡 Будьте внимательны, так как возможности внести ещё потом правки больше не будет. Еще один этап правок оплачивается дополнительно. На проверку журналов остался 1 день❗️
📍Обращаю внимание на то, что опрос необходимо заполнить за один раз, если выйти на половине написанного, то ничего не сохранится и придётся писать заново. Когда правки будет полностью написаны, перед закрытием опроса ОБЯЗАТЕЛЬНО нажать кнопку “Отправить”, чтобы всё написанное у нас сохранилось.


ЕСЛИ СКИДЫВАЕМ ВЫПУСКНИКАМ:
Сообщение ответственному родителю: 

Здравствуйте! 👋
🔔 Напоминаю о возможности написать правки по выпускным журналам. Вот электронные версии ваших журналов: 
(ссылка на папку с готовыми журналами)

📍Необходимые правки по тексту написать здесь: (ссылка на гугл-форму)

☑️ Вот список тех, кто заполнил форму! Если остальные всё-таки будут вносить правки, то это необходимо сделать в течение дня. (прикрепить скрин из приложения)

✅ Правки, которые можно внести: 
а) Знаки пунктуации и орфографические ошибки в тексте (например: страница 3 после слова “домой” поставить точку; страница 4 - после слова “потому” поставить запятую). 
б) Ошибки, связанные со вставкой информации. (например: страница 3 - выпуск 2024 заменить на 2025; страница 7 - указана не моя фамилия). 
в) Поменять фотографии с вашим присутствием местами (например: поменять местами фото такое-то и такое-то страниц 6 и 7). 

❌ Правки, которые нельзя внести:
а) Расположение фотографий на страницах журнала.
б) Удаление/расположение текста. 
в) Замена фотографий на сторонние. 
г) Добавление сторонних элементов в журналы.
д) Изменение шрифта и размера текста. 
е) Изменение концепции журнала. 

💡Будьте внимательны, так как возможности внести ещё потом правки больше не будет. Еще один этап правок оплачивается дополнительно. На проверку журналов остался 1 день❗️
📍Обращаю внимание на то, что опрос необходимо заполнить за один раз, если выйти на половине написанного, то ничего не сохранится и придётся писать заново. Когда правки будет полностью написаны, перед закрытием опроса ОБЯЗАТЕЛЬНО нажать кнопку “Отправить”, чтобы всё написанное у нас сохранилось.

Сообщение в беседу выпускникам: 
Привет! 👋 
🔔 Напоминаю о возможности написать правки по выпускным журналам. Дублирую на всякий случай ссылку на папку с электронными версиями всех журналов: 
(ссылка на папку с готовыми журналами)

📍 Необходимые правки по тексту написать здесь: (ссылка на гугл-форму)

☑️ Вот список тех, кто заполнил форму! Если остальные всё-таки будут вносить правки, то это необходимо сделать в течение дня. (прикрепить скрин из приложения)

⬆️ Инструкцию и правила по всем возможным правкам присылал выше.
💡 Будьте внимательны, так как возможности внести ещё потом правки больше не будет. Еще один этап правок оплачивается дополнительно. На проверку журналов остался 1 день❗️
📍 Обращаю внимание на то, что опрос необходимо заполнить за один раз, если выйти на половине написанного, то ничего не сохранится и придётся писать заново. Когда правки будет полностью написаны, перед закрытием опроса ОБЯЗАТЕЛЬНО нажать кнопку “Отправить”, чтобы всё написанное у нас сохранилось.

ДЛЯ МЕНЕДЖЕРА: этот скрипт необходимо отправить после 20:00

ЕСЛИ СКИДЫВАЕМ РОДИТЕЛЯМ: 
Сообщение ответственному родителю: 

Добрый вечер! 🌅 
⌛️ Дедлайн по внесению правок в журналы истёк. Правки указали:
(фамилию имя выпускника - правка - будет/не будет внесена [если не будет, указать причину])
Больше ни от кого информации по внесению правок не получили. Спасибо Вам за помощь, хорошего вечера! 💙

ЕСЛИ СКИДЫВАЕМ ВЫПУСКНИКАМ: 
Сообщение ответственному родителю: 

Добрый вечер! 🌅
⌛️ Дедлайн по внесению правок в журналы истёк. Правки указали:
(фамилию имя выпускника - правка - будет/не будет внесена [если не будет, указать причину])
Больше ни от кого информации по внесению правок не получили. Спасибо Вам за помощь, хорошего вечера! 💙

Сообщение в беседу выпускникам: 

Привет! 👋
⌛️ Дедлайн по внесению правок в журналы истёк. Правки указали:
(фамилию имя выпускника - правка - будет/не будет внесена [если не будет, указать причину])
Больше ни от кого информации по внесению правок не получили.

Сообщение в беседу класса

@all
Всем привет! 👋

Ребят, у нас к вам просьба небольшая
В создание выпускных журналов для вас мы вложили все силы и душу, чтобы журналы и наша работа были полны эмоций и воспоминаний! 
В качестве благодарности можете, пожалуйста, оставить свой отзыв
По объёму отзыва на ваше усмотрение. 
По возможности напишите каждый из вас, это важно и ценно для нас
⏳ Желательно написать в ближайшие несколько дней. Мы будем очень благодарны вам за оставленный отзыв

Кто не против снять видосики с вашим журналом или сделать несколько фоток, можете выкладывать в сторис инсты и отмечать нас, чтобы мы могли репостнуть к себе. Или можете вместе с отзывом просто прикреплять видосы и фотки.
Отзыв можно написать двумя способами:

1) Лучше этот вариант выбрать. Вот сюда: https://vk.com/app6326142_-212187230
Сначала возможно появится окно с кнопкой разрешить, можно не переживать и спокойно нажимать разрешить, это соц сеть ВК так настроена.

2) Кто переживает, что в ВК нужно нажимать кнопку разрешить, можно написать отзыв нашему руководителю в личные сообщения в любой соц сети:
Телеграм: @makspvv
Вк: https://vk.com/makspvv

С любовью, команда IMJ

`})})})]})});default:return null}};return i.jsx("div",{className:"min-h-screen bg-gray-50 p-6",children:i.jsxs("div",{className:"max-w-6xl mx-auto",children:[i.jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-8",children:"Скрипты для работы с выпускниками"}),i.jsx("div",{className:"flex space-x-4 mb-8",children:r.map(s=>{const a=s.icon;return i.jsxs("button",{onClick:()=>t(s.id),className:`flex items-center px-6 py-3 rounded-lg transition-colors ${e===s.id?"bg-blue-600 text-white":"bg-white text-gray-700 hover:bg-gray-100"}`,children:[i.jsx(a,{className:"h-5 w-5 mr-2"}),s.label]},s.id)})}),n()]})})};function Ry({isOpen:e,onClose:t,onUpload:r}){const{user:n}=Te(),[s,a]=I.useState({title:"",description:"",file:null}),[o,l]=I.useState(!1),c=x=>{x.preventDefault(),x.stopPropagation(),x.type==="dragenter"||x.type==="dragover"?l(!0):x.type==="dragleave"&&l(!1)},u=x=>{if(x.preventDefault(),x.stopPropagation(),l(!1),x.dataTransfer.files&&x.dataTransfer.files[0]){const w=x.dataTransfer.files[0];w.type==="application/vnd.openxmlformats-officedocument.wordprocessingml.document"||w.type==="application/msword"||w.type==="text/plain"?a(j=>({...j,file:w})):alert("Поддерживаются только файлы Word (.doc, .docx) и текстовые файлы (.txt)")}},d=x=>{if(x.target.files&&x.target.files[0]){const w=x.target.files[0];w.type==="application/vnd.openxmlformats-officedocument.wordprocessingml.document"||w.type==="application/msword"||w.type==="text/plain"?a(j=>({...j,file:w})):alert("Поддерживаются только файлы Word (.doc, .docx) и текстовые файлы (.txt)")}},h=x=>{if(x.preventDefault(),!s.file||!s.title.trim()||!n)return;const w={title:s.title,description:s.description,fileName:s.file.name,fileType:s.file.type,fileSize:s.file.size,uploadedBy:n.id,uploadedByName:n.name,fileUrl:URL.createObjectURL(s.file)};r(w),a({title:"",description:"",file:null}),t()},m=x=>{if(x===0)return"0 Bytes";const w=1024,j=["Bytes","KB","MB","GB"],v=Math.floor(Math.log(x)/Math.log(w));return parseFloat((x/Math.pow(w,v)).toFixed(2))+" "+j[v]};return e?i.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:i.jsxs("div",{className:"bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-auto",children:[i.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200",children:[i.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:"Загрузить отчет"}),i.jsx("button",{onClick:t,className:"text-gray-400 hover:text-gray-600 transition-colors",children:i.jsx(Ee,{className:"h-6 w-6"})})]}),i.jsxs("form",{onSubmit:h,className:"p-6 space-y-6",children:[i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Название отчета *"}),i.jsx("input",{type:"text",value:s.title,onChange:x=>a(w=>({...w,title:x.target.value})),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Например: Отчет по проекту за февраль 2024",required:!0})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Описание"}),i.jsx("textarea",{value:s.description,onChange:x=>a(w=>({...w,description:x.target.value})),rows:3,className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Краткое описание содержания отчета"})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Файл отчета *"}),i.jsxs("div",{className:`relative border-2 border-dashed rounded-xl p-8 text-center transition-colors ${o?"border-blue-500 bg-blue-50":"border-gray-300 hover:border-gray-400"}`,onDragEnter:c,onDragLeave:c,onDragOver:c,onDrop:u,children:[i.jsx("input",{type:"file",onChange:d,className:"absolute inset-0 w-full h-full opacity-0 cursor-pointer",accept:".doc,.docx,.txt"}),s.file?i.jsxs("div",{className:"space-y-2",children:[i.jsx(_r,{className:"h-12 w-12 text-green-600 mx-auto"}),i.jsxs("div",{children:[i.jsx("p",{className:"font-medium text-gray-900",children:s.file.name}),i.jsx("p",{className:"text-sm text-gray-500",children:m(s.file.size)})]}),i.jsx("button",{type:"button",onClick:()=>a(x=>({...x,file:null})),className:"text-red-600 hover:text-red-700 text-sm",children:"Удалить файл"})]}):i.jsxs("div",{className:"space-y-4",children:[i.jsx("div",{className:"flex justify-center",children:i.jsx("div",{className:"bg-blue-100 p-4 rounded-full",children:i.jsx(kt,{className:"h-8 w-8 text-blue-600"})})}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-lg font-medium text-gray-900",children:"Перетащите файл сюда или нажмите для выбора"}),i.jsx("p",{className:"text-gray-600 mt-1",children:"Поддерживаются файлы Word (.doc, .docx) и текстовые файлы (.txt)"})]})]})]})]}),i.jsxs("div",{className:"flex justify-end space-x-3",children:[i.jsx(U,{type:"button",variant:"outline",onClick:t,children:"Отмена"}),i.jsx(U,{type:"submit",disabled:!s.file||!s.title.trim(),children:"Загрузить отчет"})]})]})]})}):null}function Ly(){const{user:e}=Te(),[t,r]=I.useState([]),[n,s]=I.useState(""),[a,o]=I.useState(!1);Ha.useEffect(()=>{const j=localStorage.getItem("reports");if(j)try{const g=JSON.parse(j).map(p=>({...p,uploadedAt:new Date(p.uploadedAt)}));r(g)}catch(v){console.error("Ошибка при загрузке отчетов:",v);const g=[{id:"1",title:'Отчет по проекту "Свадебный альбом" за февраль',description:"Подробный отчет о выполненной работе по свадебному альбому",fileName:"wedding_report_feb.docx",fileType:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",fileSize:245760,uploadedBy:"2",uploadedByName:"Анна Иванова",uploadedAt:new Date("2024-02-28"),fileUrl:"#"},{id:"2",title:"Отчет по выпускному альбому",description:"Промежуточный отчет о работе над выпускным альбомом",fileName:"graduation_report.txt",fileType:"text/plain",fileSize:12800,uploadedBy:"3",uploadedByName:"Елена Сидорова",uploadedAt:new Date("2024-02-25"),fileUrl:"#"}];r(g),localStorage.setItem("reports",JSON.stringify(g))}else{const v=[{id:"1",title:'Отчет по проекту "Свадебный альбом" за февраль',description:"Подробный отчет о выполненной работе по свадебному альбому",fileName:"wedding_report_feb.docx",fileType:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",fileSize:245760,uploadedBy:"2",uploadedByName:"Анна Иванова",uploadedAt:new Date("2024-02-28"),fileUrl:"#"},{id:"2",title:"Отчет по выпускному альбому",description:"Промежуточный отчет о работе над выпускным альбомом",fileName:"graduation_report.txt",fileType:"text/plain",fileSize:12800,uploadedBy:"3",uploadedByName:"Елена Сидорова",uploadedAt:new Date("2024-02-25"),fileUrl:"#"}];r(v),localStorage.setItem("reports",JSON.stringify(v))}},[]),Ha.useEffect(()=>{t.length>0&&localStorage.setItem("reports",JSON.stringify(t))},[t]);const l=j=>{const v={...j,id:Math.random().toString(36).substr(2,9),uploadedAt:new Date};r(g=>{const p=[v,...g];return localStorage.setItem("reports",JSON.stringify(p)),p})},c=j=>{const v=t.find(g=>g.id===j);v&&((e==null?void 0:e.role)==="admin"||(e==null?void 0:e.id)===v.uploadedBy)&&(r(g=>{const p=g.filter(y=>y.id!==j);return localStorage.setItem("reports",JSON.stringify(p)),p}),v.fileUrl&&v.fileUrl.startsWith("blob:")&&URL.revokeObjectURL(v.fileUrl))},u=j=>{if(j.fileUrl){const v=document.createElement("a");v.href=j.fileUrl,v.download=j.fileName,document.body.appendChild(v),v.click(),document.body.removeChild(v)}},d=j=>(e==null?void 0:e.role)==="admin"?!0:(e==null?void 0:e.id)===j.uploadedBy,h=j=>(e==null?void 0:e.role)==="admin"?!0:(e==null?void 0:e.id)===j.uploadedBy,m=t.filter(j=>(j.title.toLowerCase().includes(n.toLowerCase())||j.description.toLowerCase().includes(n.toLowerCase())||j.uploadedByName.toLowerCase().includes(n.toLowerCase()))&&d(j)),x=j=>{if(j===0)return"0 Bytes";const v=1024,g=["Bytes","KB","MB","GB"],p=Math.floor(Math.log(j)/Math.log(v));return parseFloat((j/Math.pow(v,p)).toFixed(2))+" "+g[p]},w=j=>j.includes("word")||j.includes("document")?i.jsx("div",{className:"w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center",children:i.jsx(_r,{className:"h-6 w-6 text-blue-600"})}):i.jsx("div",{className:"w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center",children:i.jsx(_r,{className:"h-6 w-6 text-gray-600"})});return i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"p-6 space-y-6",children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("div",{children:[i.jsx("h1",{className:"text-3xl font-bold text-gray-900",children:"Отчеты сотрудников"}),i.jsx("p",{className:"text-gray-600 mt-1",children:(e==null?void 0:e.role)==="admin"?"Просматривайте отчеты всех сотрудников":"Загружайте и управляйте своими отчетами"})]}),i.jsxs(U,{onClick:()=>o(!0),children:[i.jsx(st,{className:"h-4 w-4 mr-2"}),"Загрузить отчет"]})]}),i.jsx(K,{children:i.jsx(J,{className:"p-4",children:i.jsxs("div",{className:"relative",children:[i.jsx(ur,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"}),i.jsx("input",{type:"text",placeholder:"Поиск отчетов...",value:n,onChange:j=>s(j.target.value),className:"w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]})})}),i.jsx("div",{className:"space-y-4",children:m.length===0?i.jsx(K,{className:"text-center py-12",children:i.jsxs(J,{children:[i.jsx("div",{className:"text-gray-400 mb-4",children:i.jsx(_r,{className:"h-16 w-16 mx-auto"})}),i.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-2",children:n?"Отчеты не найдены":"Нет отчетов"}),i.jsx("p",{className:"text-gray-600 mb-4",children:n?"Попробуйте изменить параметры поиска":"Загрузите первый отчет, чтобы начать работу"}),!n&&i.jsxs(U,{onClick:()=>o(!0),children:[i.jsx(st,{className:"h-4 w-4 mr-2"}),"Загрузить первый отчет"]})]})}):m.map(j=>i.jsx(K,{className:"hover:shadow-md transition-shadow",children:i.jsx(J,{className:"p-6",children:i.jsxs("div",{className:"flex items-start space-x-4",children:[i.jsx("div",{className:"flex-shrink-0",children:w(j.fileType)}),i.jsxs("div",{className:"flex-1 min-w-0",children:[i.jsxs("div",{className:"flex items-start justify-between",children:[i.jsxs("div",{className:"flex-1",children:[i.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-1",children:j.title}),j.description&&i.jsx("p",{className:"text-gray-600 mb-2",children:j.description}),i.jsxs("div",{className:"flex items-center space-x-4 text-sm text-gray-500",children:[i.jsxs("span",{children:["Файл: ",j.fileName]}),i.jsxs("span",{children:["Размер: ",x(j.fileSize)]}),i.jsxs("span",{children:["Автор: ",j.uploadedByName]}),i.jsxs("span",{children:["Дата: ",j.uploadedAt.toLocaleDateString("ru-RU")]})]})]}),i.jsxs("div",{className:"flex items-center space-x-2 ml-4",children:[(e==null?void 0:e.role)==="admin"&&i.jsxs(U,{size:"sm",variant:"outline",onClick:()=>u(j),children:[i.jsx(bn,{className:"h-4 w-4 mr-1"}),"Просмотр"]}),i.jsxs(U,{size:"sm",variant:"outline",onClick:()=>u(j),children:[i.jsx(Zl,{className:"h-4 w-4 mr-1"}),"Скачать"]}),h(j)&&i.jsx(U,{size:"sm",variant:"outline",className:"text-red-600 hover:text-red-700",onClick:()=>c(j.id),children:i.jsx(ec,{className:"h-4 w-4"})})]})]}),(e==null?void 0:e.role)!=="admin"&&(e==null?void 0:e.id)!==j.uploadedBy&&i.jsx("div",{className:"mt-3 bg-yellow-50 border border-yellow-200 rounded-lg p-3",children:i.jsxs("p",{className:"text-sm text-yellow-800",children:[i.jsx("strong",{children:"Ограниченный доступ:"})," Вы видите этот отчет, но не можете его просматривать или скачивать."]})})]})]})})},j.id))})]}),i.jsx(Ry,{isOpen:a,onClose:()=>o(!1),onUpload:l})]})}function My({isOpen:e,onClose:t,onUpload:r}){const[n,s]=I.useState(!1),[a,o]=I.useState([]),l=x=>{x.preventDefault(),x.stopPropagation(),x.type==="dragenter"||x.type==="dragover"?s(!0):x.type==="dragleave"&&s(!1)},c=x=>{x.preventDefault(),x.stopPropagation(),s(!1),x.dataTransfer.files&&x.dataTransfer.files[0]&&o(Array.from(x.dataTransfer.files))},u=x=>{x.target.files&&o(Array.from(x.target.files))},d=()=>{a.length>0&&(r(a),o([]),t())},h=x=>{if(x===0)return"0 Bytes";const w=1024,j=["Bytes","KB","MB","GB"],v=Math.floor(Math.log(x)/Math.log(w));return parseFloat((x/Math.pow(w,v)).toFixed(2))+" "+j[v]},m=x=>{o(w=>w.filter((j,v)=>v!==x))};return e?i.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:i.jsxs("div",{className:"bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-auto",children:[i.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200",children:[i.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:"Загрузить файлы"}),i.jsx("button",{onClick:t,className:"text-gray-400 hover:text-gray-600 transition-colors",children:i.jsx(Ee,{className:"h-6 w-6"})})]}),i.jsxs("div",{className:"p-6 space-y-6",children:[i.jsxs("div",{className:`relative border-2 border-dashed rounded-xl p-8 text-center transition-colors ${n?"border-blue-500 bg-blue-50":"border-gray-300 hover:border-gray-400"}`,onDragEnter:l,onDragLeave:l,onDragOver:l,onDrop:c,children:[i.jsx("input",{type:"file",multiple:!0,onChange:u,className:"absolute inset-0 w-full h-full opacity-0 cursor-pointer",accept:"image/*,video/*,.pdf,.doc,.docx"}),i.jsxs("div",{className:"space-y-4",children:[i.jsx("div",{className:"flex justify-center",children:i.jsx("div",{className:"bg-blue-100 p-4 rounded-full",children:i.jsx(kt,{className:"h-8 w-8 text-blue-600"})})}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-lg font-medium text-gray-900",children:"Перетащите файлы сюда или нажмите для выбора"}),i.jsx("p",{className:"text-gray-600 mt-1",children:"Поддерживаются изображения, видео и документы до 10MB"})]})]})]}),a.length>0&&i.jsxs("div",{className:"space-y-3",children:[i.jsxs("h3",{className:"font-medium text-gray-900",children:["Выбранные файлы (",a.length,")"]}),a.map((x,w)=>i.jsxs("div",{className:"flex items-center justify-between p-3 bg-gray-50 rounded-lg",children:[i.jsxs("div",{className:"flex items-center space-x-3",children:[i.jsx("div",{className:"flex-shrink-0",children:x.type.startsWith("image/")?i.jsx(Nf,{className:"h-8 w-8 text-blue-500"}):i.jsx(_r,{className:"h-8 w-8 text-gray-500"})}),i.jsxs("div",{children:[i.jsx("h4",{className:"font-medium text-gray-900",children:x.name}),i.jsx("p",{className:"text-sm text-gray-500",children:h(x.size)})]})]}),i.jsx("button",{onClick:()=>m(w),className:"text-gray-400 hover:text-red-500 transition-colors",children:i.jsx(Ee,{className:"h-4 w-4"})})]},w))]}),i.jsxs("div",{className:"flex justify-end space-x-3",children:[i.jsx(U,{variant:"outline",onClick:t,children:"Отмена"}),i.jsxs(U,{onClick:d,disabled:a.length===0,children:["Загрузить файлы (",a.length,")"]})]})]})]})}):null}function $y({projectId:e,onBack:t}){var k,S;const{user:r,users:n,projects:s,updateProject:a,addFileToProject:o,removeFileFromProject:l}=Te(),[c,u]=I.useState(!1),[d,h]=I.useState({}),[m,x]=I.useState(!1),w=s.find(b=>b.id===e),v=(()=>{var b;return!r||!w?!1:!!(r.role==="admin"||((b=w.manager)==null?void 0:b.id)===r.id||r.role==="photographer"&&w.photographers.some(C=>C.id===r.id)||r.role==="designer"&&w.designers.some(C=>C.id===r.id))})();if(!w)return i.jsx("div",{className:"p-6",children:i.jsx(K,{className:"text-center py-12",children:i.jsxs(J,{children:[i.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-2",children:"Проект не найден"}),i.jsx("p",{className:"text-gray-600 mb-4",children:"Возможно, проект был удален или у вас нет доступа к нему"}),i.jsx(U,{onClick:t,children:"Вернуться к списку проектов"})]})})});const g=b=>{const C={planning:{label:"Планирование",color:"bg-gray-100 text-gray-800",icon:Yl},"in-progress":{label:"В работе",color:"bg-blue-100 text-blue-800",icon:kr},review:{label:"На проверке",color:"bg-yellow-100 text-yellow-800",icon:$i},completed:{label:"Завершен",color:"bg-green-100 text-green-800",icon:bf}};return C[b]||C.planning},p=["Свадебный альбом","Выпускной альбом","Детский альбом","Корпоративный альбом","Семейный альбом","Портретная съемка"],y=n.filter(b=>b.role==="photographer"),_=n.filter(b=>b.role==="designer"),E=n.filter(b=>b.role==="admin"),N=()=>{h({title:w.title,albumType:w.albumType,description:w.description,status:w.status,deadline:w.deadline.toISOString().split("T")[0],manager:w.manager,photographers:w.photographers,designers:w.designers}),u(!0)},T=()=>{const b={...d,deadline:d.deadline?new Date(d.deadline):w.deadline,manager:d.manager?n.find(C=>{var R;return C.id===((R=d.manager)==null?void 0:R.id)||d.manager}):w.manager};a(e,b),u(!1),h({})},P=()=>{u(!1),h({})},B=b=>{b.forEach(C=>{const R={name:C.name,type:C.type,size:C.size,preview:C.type.startsWith("image/")?URL.createObjectURL(C):void 0,uploadedBy:r};o(e,R)})},D=b=>{const C=w.files.find(R=>R.id===b);C!=null&&C.preview&&URL.revokeObjectURL(C.preview),l(e,b)},de=b=>{if(b.preview){const C=document.createElement("a");C.href=b.preview,C.download=b.name,document.body.appendChild(C),C.click(),document.body.removeChild(C)}else{const C=new Blob([""],{type:b.type}),R=URL.createObjectURL(C),z=document.createElement("a");z.href=R,z.download=b.name,document.body.appendChild(z),z.click(),document.body.removeChild(z),URL.revokeObjectURL(R)}},pe=b=>{if(b===0)return"0 Bytes";const C=1024,R=["Bytes","KB","MB","GB"],z=Math.floor(Math.log(b)/Math.log(C));return parseFloat((b/Math.pow(C,z)).toFixed(2))+" "+R[z]},_e=b=>b.startsWith("image/")?Nf:b.startsWith("video/")?kr:_r,Ne=(b,C)=>{h(R=>({...R,[b]:C}))},Oe=b=>{h(C=>{const R=C.photographers||w.photographers;if(R.some(Q=>Q.id===b))return{...C,photographers:R.filter(Q=>Q.id!==b)};{const Q=n.find(se=>se.id===b);return{...C,photographers:Q?[...R,Q]:R}}})},Y=b=>{h(C=>{const R=C.designers||w.designers;if(R.some(Q=>Q.id===b))return{...C,designers:R.filter(Q=>Q.id!==b)};{const Q=n.find(se=>se.id===b);return{...C,designers:Q?[...R,Q]:R}}})},A=g(w.status),f=A.icon;return i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"p-6 space-y-6",children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("div",{className:"flex items-center space-x-4",children:[i.jsxs(U,{variant:"outline",onClick:t,children:[i.jsx(Ox,{className:"h-4 w-4 mr-2"}),"Назад к проектам"]}),i.jsxs("div",{children:[i.jsx("h1",{className:"text-3xl font-bold text-gray-900",children:c?i.jsx("input",{type:"text",value:d.title||"",onChange:b=>Ne("title",b.target.value),className:"text-3xl font-bold bg-transparent border-b-2 border-blue-500 focus:outline-none"}):w.title}),i.jsx("p",{className:"text-gray-600 mt-1",children:c?i.jsx("select",{value:d.albumType||"",onChange:b=>Ne("albumType",b.target.value),className:"bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500",children:p.map(b=>i.jsx("option",{value:b,children:b},b))}):w.albumType})]})]}),i.jsxs("div",{className:"flex items-center space-x-3",children:[c?i.jsxs(i.Fragment,{children:[i.jsxs(U,{variant:"outline",onClick:P,children:[i.jsx(Ee,{className:"h-4 w-4 mr-2"}),"Отмена"]}),i.jsxs(U,{onClick:T,children:[i.jsx(Ux,{className:"h-4 w-4 mr-2"}),"Сохранить"]})]}):v&&i.jsxs(U,{onClick:N,children:[i.jsx(Fx,{className:"h-4 w-4 mr-2"}),"Редактировать"]}),!v&&i.jsx("div",{className:"bg-yellow-50 border border-yellow-200 rounded-lg px-3 py-2",children:i.jsx("span",{className:"text-sm text-yellow-800",children:"Только просмотр"})})]})]}),i.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[i.jsxs("div",{className:"lg:col-span-2 space-y-6",children:[i.jsxs(K,{children:[i.jsx(je,{children:i.jsx(be,{children:"Информация о проекте"})}),i.jsxs(J,{className:"space-y-4",children:[i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Описание"}),c?i.jsx("textarea",{value:d.description||"",onChange:b=>Ne("description",b.target.value),rows:3,className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"}):i.jsx("p",{className:"text-gray-600",children:w.description||"Описание не указано"})]}),i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Статус"}),c?i.jsxs("select",{value:d.status||"",onChange:b=>Ne("status",b.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",children:[i.jsx("option",{value:"planning",children:"Планирование"}),i.jsx("option",{value:"in-progress",children:"В работе"}),i.jsx("option",{value:"review",children:"На проверке"}),i.jsx("option",{value:"completed",children:"Завершен"})]}):i.jsxs("span",{className:`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${A.color}`,children:[i.jsx(f,{className:"h-4 w-4 mr-2"}),A.label]})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Дедлайн"}),c?i.jsx("input",{type:"date",value:d.deadline||"",onChange:b=>Ne("deadline",b.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"}):i.jsxs("div",{className:"flex items-center text-gray-600",children:[i.jsx($t,{className:"h-4 w-4 mr-2"}),w.deadline.toLocaleDateString("ru-RU")]})]})]}),i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Менеджер"}),c?i.jsxs("select",{value:((k=d.manager)==null?void 0:k.id)||"",onChange:b=>Ne("manager",b.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",children:[i.jsx("option",{value:"",children:"Не назначен"}),E.map(b=>i.jsx("option",{value:b.id,children:b.name},b.id))]}):i.jsxs("div",{className:"flex items-center text-gray-600",children:[i.jsx(oa,{className:"h-4 w-4 mr-2"}),((S=w.manager)==null?void 0:S.name)||"Не назначен"]})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Фотографы"}),c?i.jsx("div",{className:"space-y-2 max-h-32 overflow-y-auto border border-gray-300 rounded-lg p-2",children:y.map(b=>i.jsxs("label",{className:"flex items-center space-x-2 cursor-pointer",children:[i.jsx("input",{type:"checkbox",checked:(d.photographers||w.photographers).some(C=>C.id===b.id),onChange:()=>Oe(b.id),className:"rounded border-gray-300 text-blue-600 focus:ring-blue-500"}),i.jsx("span",{className:"text-sm text-gray-700",children:b.name})]},b.id))}):i.jsxs("div",{className:"flex items-center text-gray-600",children:[i.jsx(kr,{className:"h-4 w-4 mr-2"}),w.photographers.length>0?w.photographers.map(b=>b.name).join(", "):"Не назначены"]})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Дизайнеры"}),c?i.jsx("div",{className:"space-y-2 max-h-32 overflow-y-auto border border-gray-300 rounded-lg p-2",children:_.map(b=>i.jsxs("label",{className:"flex items-center space-x-2 cursor-pointer",children:[i.jsx("input",{type:"checkbox",checked:(d.designers||w.designers).some(C=>C.id===b.id),onChange:()=>Y(b.id),className:"rounded border-gray-300 text-blue-600 focus:ring-blue-500"}),i.jsx("span",{className:"text-sm text-gray-700",children:b.name})]},b.id))}):i.jsxs("div",{className:"flex items-center text-gray-600",children:[i.jsx($i,{className:"h-4 w-4 mr-2"}),w.designers.length>0?w.designers.map(b=>b.name).join(", "):"Не назначены"]})]})]})]})]}),i.jsxs(K,{children:[i.jsx(je,{children:i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsx(be,{children:"Файлы проекта"}),v&&i.jsxs(U,{size:"sm",onClick:()=>x(!0),children:[i.jsx(kt,{className:"h-4 w-4 mr-2"}),"Загрузить файлы"]})]})}),i.jsx(J,{children:i.jsxs("div",{className:"space-y-3",children:[w.files.map(b=>{const C=_e(b.type);return i.jsxs("div",{className:"flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors",children:[i.jsxs("div",{className:"flex items-center space-x-3",children:[i.jsx("div",{className:"flex-shrink-0",children:b.preview?i.jsx("div",{className:"relative group",children:i.jsx("img",{src:b.preview,alt:b.name,className:"w-12 h-12 object-cover rounded-lg"})}):i.jsx("div",{className:"w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center",children:i.jsx(C,{className:"h-6 w-6 text-gray-500"})})}),i.jsxs("div",{children:[i.jsx("h4",{className:"font-medium text-gray-900",children:b.name}),i.jsxs("p",{className:"text-sm text-gray-500",children:[pe(b.size)," • Загружен ",b.uploadedBy.name," • ",b.uploadedAt.toLocaleDateString("ru-RU")]})]})]}),i.jsxs("div",{className:"flex items-center space-x-2",children:[b.preview&&i.jsxs(U,{size:"sm",variant:"outline",onClick:()=>{const R=document.createElement("div");R.className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4",R.innerHTML=`
                             <div class="relative max-w-4xl max-h-full">
                               <img src="${b.preview}" alt="${b.name}" class="max-w-full max-h-full object-contain rounded-lg">
                               <button class="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75">
                                 <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                 </svg>
                               </button>
                             </div>
                           `,R.onclick=z=>{(z.target===R||z.target.closest("button"))&&document.body.removeChild(R)},document.body.appendChild(R)},children:[i.jsx(bn,{className:"h-4 w-4 mr-1"}),"Просмотр"]}),i.jsxs(U,{size:"sm",variant:"outline",onClick:()=>de(b),children:[i.jsx(Zl,{className:"h-4 w-4 mr-1"}),"Скачать"]}),v&&i.jsx(U,{size:"sm",variant:"outline",className:"text-red-600 hover:text-red-700",onClick:()=>D(b.id),children:i.jsx(ec,{className:"h-4 w-4"})})]})]},b.id)}),w.files.length===0&&i.jsxs("div",{className:"text-center py-8",children:[i.jsx(kt,{className:"h-12 w-12 text-gray-300 mx-auto mb-3"}),i.jsx("p",{className:"text-gray-500 mb-3",children:"Файлы еще не загружены"}),v&&i.jsxs(U,{variant:"outline",size:"sm",onClick:()=>x(!0),children:[i.jsx(kt,{className:"h-4 w-4 mr-2"}),"Загрузить первые файлы"]})]})]})})]})]}),i.jsxs("div",{className:"space-y-6",children:[i.jsxs(K,{children:[i.jsx(je,{children:i.jsx(be,{children:"Статистика"})}),i.jsxs(J,{className:"space-y-4",children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsx("span",{className:"text-gray-600",children:"Фотографий"}),i.jsx("span",{className:"font-semibold",children:w.files.filter(b=>b.type.startsWith("image/")).length})]}),i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsx("span",{className:"text-gray-600",children:"Макетов"}),i.jsx("span",{className:"font-semibold",children:w.files.filter(b=>b.type.includes("design")||b.name.toLowerCase().includes("макет")||b.name.toLowerCase().includes("design")).length})]}),i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsx("span",{className:"text-gray-600",children:"Файлов"}),i.jsx("span",{className:"font-semibold",children:w.files.length})]})]})]}),i.jsxs(K,{children:[i.jsx(je,{children:i.jsx(be,{children:"Временная шкала"})}),i.jsxs(J,{className:"space-y-4",children:[i.jsxs("div",{className:"flex items-center space-x-3",children:[i.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),i.jsxs("div",{children:[i.jsx("p",{className:"font-medium text-gray-900",children:"Проект создан"}),i.jsx("p",{className:"text-sm text-gray-500",children:w.createdAt.toLocaleDateString("ru-RU")})]})]}),i.jsxs("div",{className:"flex items-center space-x-3",children:[i.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full"}),i.jsxs("div",{children:[i.jsx("p",{className:"font-medium text-gray-900",children:"Последнее обновление"}),i.jsx("p",{className:"text-sm text-gray-500",children:w.updatedAt.toLocaleDateString("ru-RU")})]})]}),i.jsxs("div",{className:"flex items-center space-x-3",children:[i.jsx("div",{className:"w-2 h-2 bg-yellow-500 rounded-full"}),i.jsxs("div",{children:[i.jsx("p",{className:"font-medium text-gray-900",children:"Дедлайн"}),i.jsx("p",{className:"text-sm text-gray-500",children:w.deadline.toLocaleDateString("ru-RU")})]})]})]})]})]})]})]}),v&&i.jsx(My,{isOpen:m,onClose:()=>x(!1),onUpload:B,projectId:e})]})}function zy({isOpen:e,onClose:t,onStartChat:r}){const{user:n,users:s}=Te(),[a,o]=I.useState(""),l=s.filter(d=>!n||d.id===n.id?!1:d.name.toLowerCase().includes(a.toLowerCase())||d.email.toLowerCase().includes(a.toLowerCase())||(d.department||"").toLowerCase().includes(a.toLowerCase())),c=d=>({photographer:"Фотограф",designer:"Дизайнер",admin:"Администратор"})[d]||d,u=d=>({photographer:"bg-blue-100 text-blue-800",designer:"bg-purple-100 text-purple-800",admin:"bg-green-100 text-green-800"})[d]||"bg-gray-100 text-gray-800";return e?i.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:i.jsxs("div",{className:"bg-white rounded-xl max-w-md w-full max-h-[80vh] overflow-hidden",children:[i.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200",children:[i.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:"Начать новый чат"}),i.jsx("button",{onClick:t,className:"text-gray-400 hover:text-gray-600 transition-colors",children:i.jsx(Ee,{className:"h-6 w-6"})})]}),i.jsxs("div",{className:"p-4",children:[i.jsxs("div",{className:"relative mb-4",children:[i.jsx(ur,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"}),i.jsx("input",{type:"text",placeholder:"Поиск сотрудников...",value:a,onChange:d=>o(d.target.value),className:"w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),i.jsx("div",{className:"max-h-96 overflow-y-auto space-y-2",children:l.map(d=>i.jsx("button",{onClick:()=>{r(d.id),t()},className:"w-full p-3 text-left hover:bg-gray-50 rounded-lg transition-colors",children:i.jsxs("div",{className:"flex items-center space-x-3",children:[i.jsx("img",{src:d.avatar||"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop",alt:d.name,className:"w-10 h-10 rounded-full object-cover"}),i.jsxs("div",{className:"flex-1 min-w-0",children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsx("p",{className:"font-medium text-gray-900 truncate",children:d.name}),i.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium ${u(d.role)}`,children:c(d.role)})]}),i.jsx("p",{className:"text-sm text-gray-500 truncate",children:d.department||"Не указан"})]})]})},d.id))}),l.length===0&&i.jsxs("div",{className:"text-center py-8",children:[i.jsx(Tr,{className:"h-12 w-12 text-gray-300 mx-auto mb-3"}),i.jsx("p",{className:"text-gray-500",children:a?"Сотрудники не найдены":"Нет доступных сотрудников"})]})]})]})}):null}function Uy({targetUserId:e,onClearTarget:t}){const{user:r,users:n}=Te(),[s,a]=I.useState(null),[o,l]=I.useState([]),[c,u]=I.useState(""),[d,h]=I.useState(null),[m,x]=I.useState(""),[w,j]=I.useState(!1),v=I.useRef(null),g=I.useRef(null);I.useEffect(()=>{if(e&&r){const f=_(e);a(f),t&&t()}},[e,r]),I.useEffect(()=>{const f=localStorage.getItem("messenger_chats");if(f)try{const S=JSON.parse(f).map(b=>({...b,createdAt:new Date(b.createdAt),messages:b.messages.map(C=>({...C,timestamp:new Date(C.timestamp)})),lastMessage:b.lastMessage?{...b.lastMessage,timestamp:new Date(b.lastMessage.timestamp)}:void 0}));l(S)}catch(k){console.error("Ошибка при загрузке чатов:",k),l([])}},[]),I.useEffect(()=>{o.length>0&&localStorage.setItem("messenger_chats",JSON.stringify(o))},[o]),I.useEffect(()=>{p()},[s,o]);const p=()=>{var f;(f=v.current)==null||f.scrollIntoView({behavior:"smooth"})},y=()=>r?o.filter(f=>f.participants.includes(r.id)):[],_=f=>{if(!r)return"";const k=o.find(C=>C.participants.length===2&&C.participants.includes(r.id)&&C.participants.includes(f));if(k)return k.id;const S=n.find(C=>C.id===f);if(!S)return"";const b={id:Math.random().toString(36).substr(2,9),participants:[r.id,f],participantNames:[r.name,S.name],messages:[],unreadCount:{[r.id]:0,[f]:0},createdAt:new Date};return l(C=>[...C,b]),b.id},E=f=>{const k=_(f);a(k)},N=()=>{if(!c.trim()&&!d||!s||!r)return;const f={id:Math.random().toString(36).substr(2,9),senderId:r.id,senderName:r.name,content:c.trim(),timestamp:new Date,file:d?{name:d.name,size:d.size,type:d.type,url:URL.createObjectURL(d)}:void 0};l(k=>k.map(b=>{if(b.id===s){const C={...b.unreadCount};return b.participants.forEach(R=>{R!==r.id&&(C[R]=(C[R]||0)+1)}),{...b,messages:[...b.messages,f],lastMessage:f,unreadCount:C}}return b})),u(""),h(null)},T=f=>{var S;const k=(S=f.target.files)==null?void 0:S[0];if(k){if(k.size>10*1024*1024){alert("Размер файла не должен превышать 10MB");return}h(k)}},P=f=>{r&&l(k=>k.map(b=>{if(b.id===f){const C={...b.unreadCount};return C[r.id]=0,{...b,unreadCount:C}}return b}))},B=f=>{a(f),P(f)},D=f=>{if(f===0)return"0 Bytes";const k=1024,S=["Bytes","KB","MB","GB"],b=Math.floor(Math.log(f)/Math.log(k));return parseFloat((f/Math.pow(k,b)).toFixed(2))+" "+S[b]},de=f=>f.toLocaleTimeString("ru-RU",{hour:"2-digit",minute:"2-digit"}),pe=f=>{const k=new Date,S=new Date(k);return S.setDate(S.getDate()-1),f.toDateString()===k.toDateString()?"Сегодня":f.toDateString()===S.toDateString()?"Вчера":f.toLocaleDateString("ru-RU")},_e=f=>{if(!r)return null;const k=f.participants.find(S=>S!==r.id);return n.find(S=>S.id===k)},Oe=y().filter(f=>{const k=_e(f);return k?k.name.toLowerCase().includes(m.toLowerCase())||k.email.toLowerCase().includes(m.toLowerCase()):!1}),Y=o.find(f=>f.id===s),A=Y?_e(Y):null;return r?i.jsxs("div",{className:"h-full flex flex-col",children:[i.jsx("div",{className:"p-6 border-b border-gray-200",children:i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("div",{children:[i.jsx("h1",{className:"text-3xl font-bold text-gray-900",children:"Мессенджер"}),i.jsx("p",{className:"text-gray-600 mt-1",children:"Общение с коллегами и обмен файлами"})]}),i.jsxs(U,{onClick:()=>j(!0),children:[i.jsx(st,{className:"h-4 w-4 mr-2"}),"Новый чат"]})]})}),i.jsxs("div",{className:"flex-1 flex overflow-hidden",children:[i.jsxs("div",{className:"w-80 border-r border-gray-200 flex flex-col",children:[i.jsx("div",{className:"p-4 border-b border-gray-200",children:i.jsxs("div",{className:"relative",children:[i.jsx(ur,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"}),i.jsx("input",{type:"text",placeholder:"Поиск чатов...",value:m,onChange:f=>x(f.target.value),className:"w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"})]})}),i.jsx("div",{className:"flex-1 overflow-y-auto",children:Oe.length===0?i.jsxs("div",{className:"p-6 text-center",children:[i.jsx(He,{className:"h-12 w-12 text-gray-300 mx-auto mb-3"}),i.jsx("p",{className:"text-gray-500 mb-3",children:m?"Чаты не найдены":"У вас пока нет чатов"}),!m&&i.jsxs(U,{size:"sm",variant:"outline",onClick:()=>j(!0),children:[i.jsx(st,{className:"h-4 w-4 mr-1"}),"Начать чат"]})]}):Oe.sort((f,k)=>{var C,R;const S=((C=f.lastMessage)==null?void 0:C.timestamp)||f.createdAt;return(((R=k.lastMessage)==null?void 0:R.timestamp)||k.createdAt).getTime()-S.getTime()}).map(f=>{const k=_e(f);if(!k)return null;const S=f.unreadCount[r.id]||0;return i.jsx("button",{onClick:()=>B(f.id),className:`w-full p-4 text-left hover:bg-gray-50 transition-colors border-b border-gray-100 ${s===f.id?"bg-blue-50 border-blue-200":""}`,children:i.jsxs("div",{className:"flex items-center space-x-3",children:[i.jsx("img",{src:k.avatar||"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop",alt:k.name,className:"w-12 h-12 rounded-full object-cover"}),i.jsxs("div",{className:"flex-1 min-w-0",children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsx("h4",{className:"font-medium text-gray-900 truncate",children:k.name}),S>0&&i.jsx("span",{className:"bg-red-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center",children:S>99?"99+":S})]}),i.jsxs("p",{className:"text-sm text-gray-500 capitalize truncate",children:[k.role," • ",k.department||"Не указан"]}),f.lastMessage&&i.jsxs("p",{className:"text-xs text-gray-400 truncate mt-1",children:[f.lastMessage.senderId===r.id?"Вы: ":"",f.lastMessage.content||"Файл"]})]})]})},f.id)})})]}),i.jsx("div",{className:"flex-1 flex flex-col",children:s&&Y&&A?i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"p-4 border-b border-gray-200 bg-white",children:i.jsxs("div",{className:"flex items-center space-x-3",children:[i.jsx("img",{src:A.avatar||"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop",alt:A.name,className:"w-10 h-10 rounded-full object-cover"}),i.jsxs("div",{children:[i.jsx("h3",{className:"font-semibold text-gray-900",children:A.name}),i.jsxs("p",{className:"text-sm text-gray-500 capitalize",children:[A.role," • ",A.department||"Не указан"]})]})]})}),i.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-4",children:[Y.messages.length===0?i.jsxs("div",{className:"text-center py-8",children:[i.jsx(He,{className:"h-12 w-12 text-gray-300 mx-auto mb-3"}),i.jsxs("p",{className:"text-gray-500",children:["Начните общение с ",A.name]})]}):Y.messages.map((f,k)=>{const S=k===0||pe(f.timestamp)!==pe(Y.messages[k-1].timestamp);return i.jsxs("div",{children:[S&&i.jsx("div",{className:"text-center my-4",children:i.jsx("span",{className:"bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full",children:pe(f.timestamp)})}),i.jsx("div",{className:`flex ${f.senderId===r.id?"justify-end":"justify-start"}`,children:i.jsxs("div",{className:`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${f.senderId===r.id?"bg-blue-500 text-white":"bg-gray-100 text-gray-900"}`,children:[f.content&&i.jsx("p",{className:"text-sm break-words",children:f.content}),f.file&&i.jsxs("div",{className:"mt-2 p-2 bg-black bg-opacity-10 rounded",children:[i.jsxs("div",{className:"flex items-center space-x-2",children:[i.jsx(Ba,{className:"h-3 w-3"}),i.jsx("span",{className:"text-xs truncate",children:f.file.name})]}),i.jsx("div",{className:"text-xs opacity-75 mt-1",children:D(f.file.size)}),i.jsxs("div",{className:"flex space-x-1 mt-2",children:[f.file.type.startsWith("image/")&&i.jsx("button",{onClick:()=>{const b=document.createElement("div");b.className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4",b.innerHTML=`
                                          <div class="relative max-w-4xl max-h-full">
                                            <img src="${f.file.url}" alt="${f.file.name}" class="max-w-full max-h-full object-contain rounded-lg">
                                            <button class="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75">
                                              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                              </svg>
                                            </button>
                                          </div>
                                        `,b.onclick=C=>{(C.target===b||C.target.closest("button"))&&document.body.removeChild(b)},document.body.appendChild(b)},className:"text-xs bg-white bg-opacity-20 px-2 py-1 rounded hover:bg-opacity-30",children:i.jsx(bn,{className:"h-3 w-3"})}),i.jsx("button",{onClick:()=>{const b=document.createElement("a");b.href=f.file.url,b.download=f.file.name,document.body.appendChild(b),b.click(),document.body.removeChild(b)},className:"text-xs bg-white bg-opacity-20 px-2 py-1 rounded hover:bg-opacity-30",children:i.jsx(Zl,{className:"h-3 w-3"})})]})]}),i.jsx("div",{className:"text-xs opacity-75 mt-1",children:de(f.timestamp)})]})})]},f.id)}),i.jsx("div",{ref:v})]}),i.jsxs("div",{className:"border-t border-gray-200 p-4 bg-white",children:[d&&i.jsxs("div",{className:"mb-3 p-3 bg-gray-50 rounded-lg flex items-center justify-between",children:[i.jsxs("div",{className:"flex items-center space-x-2",children:[i.jsx(Ba,{className:"h-4 w-4 text-gray-500"}),i.jsx("span",{className:"text-sm text-gray-700 truncate",children:d.name}),i.jsxs("span",{className:"text-xs text-gray-500",children:["(",D(d.size),")"]})]}),i.jsx("button",{onClick:()=>h(null),className:"text-gray-400 hover:text-red-500",children:i.jsx(Ee,{className:"h-4 w-4"})})]}),i.jsxs("div",{className:"flex items-end space-x-2",children:[i.jsx("input",{type:"file",ref:g,onChange:T,className:"hidden",accept:"image/*,video/*,.pdf,.doc,.docx,.txt"}),i.jsx("button",{onClick:()=>{var f;return(f=g.current)==null?void 0:f.click()},className:"p-2 text-gray-400 hover:text-gray-600 transition-colors",children:i.jsx(Ba,{className:"h-5 w-5"})}),i.jsx("div",{className:"flex-1",children:i.jsx("textarea",{value:c,onChange:f=>u(f.target.value),onKeyPress:f=>{f.key==="Enter"&&!f.shiftKey&&(f.preventDefault(),N())},placeholder:"Введите сообщение...",className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none",rows:1})}),i.jsx(U,{onClick:N,disabled:!c.trim()&&!d,size:"sm",children:i.jsx(Dx,{className:"h-4 w-4"})})]})]})]}):i.jsx("div",{className:"flex-1 flex items-center justify-center",children:i.jsxs("div",{className:"text-center",children:[i.jsx(He,{className:"h-16 w-16 text-gray-300 mx-auto mb-4"}),i.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-2",children:"Выберите чат"}),i.jsx("p",{className:"text-gray-600 mb-4",children:"Выберите существующий чат или создайте новый"}),i.jsxs(U,{onClick:()=>j(!0),children:[i.jsx(st,{className:"h-4 w-4 mr-2"}),"Начать новый чат"]})]})})})]}),i.jsx(zy,{isOpen:w,onClose:()=>j(!1),onStartChat:E})]}):null}function Dy(){const{isAuthenticated:e,loading:t,logout:r}=Te(),[n,s]=I.useState("dashboard"),[a,o]=I.useState(null),[l,c]=I.useState(null),[u,d]=I.useState(!1);if(I.useEffect(()=>{if(t){const w=setTimeout(()=>{d(!0)},1e4);return()=>clearTimeout(w)}else d(!1)},[t]),I.useEffect(()=>{const w=v=>{c(v.detail.userId),s("messenger")};window.addEventListener("openMessengerChat",w);const j=localStorage.getItem("messenger_open_chat");return j&&(c(j),localStorage.removeItem("messenger_open_chat")),()=>{window.removeEventListener("openMessengerChat",w)}},[]),t)return i.jsx("div",{className:"h-screen bg-gray-50 flex items-center justify-center",children:i.jsxs("div",{className:"text-center",children:[i.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"}),i.jsx("p",{className:"text-gray-600 mb-4",children:"Загрузка..."}),u&&i.jsxs("div",{className:"mt-4 space-y-2",children:[i.jsx("p",{className:"text-amber-600 text-sm",children:"Загрузка занимает слишком много времени"}),i.jsx("button",{onClick:()=>{r(),window.location.reload()},className:"px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors",children:"Выйти и перезагрузить"})]})]})});if(!e)return i.jsx(ky,{});const h=w=>{o(w),s("project-detail")},m=()=>{o(null),s("projects")},x=()=>{switch(n){case"dashboard":return i.jsx(Lu,{});case"projects":return i.jsx(Mu,{onProjectSelect:h});case"project-detail":return a?i.jsx($y,{projectId:a,onBack:m}):i.jsx(Mu,{onProjectSelect:h});case"reports":return i.jsx(Ly,{});case"add-employee":return i.jsx(Cy,{});case"employees":return i.jsx(Py,{});case"salary":return i.jsx(Oy,{});case"calendar":return i.jsx(Iy,{});case"messenger":return i.jsx(Uy,{targetUserId:l,onClearTarget:()=>c(null)});case"script":return i.jsx(Ay,{});default:return i.jsx(Lu,{})}};return i.jsxs("div",{className:"h-screen bg-gray-50 flex flex-col md:flex-row overflow-hidden",children:[i.jsx(_y,{activeTab:n,onTabChange:s}),i.jsxs("div",{className:"flex-1 flex flex-col overflow-hidden min-w-0 md:ml-0",children:[i.jsx(Ny,{}),i.jsx("main",{className:"flex-1 overflow-auto",children:x()})]})]})}function Fy(){return i.jsx(Ex,{children:i.jsx(Dy,{})})}Jh(document.getElementById("root")).render(i.jsx(I.StrictMode,{children:i.jsx(Fy,{})}));
