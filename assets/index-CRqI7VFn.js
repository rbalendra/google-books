(function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const S of document.querySelectorAll('link[rel="modulepreload"]'))c(S);new MutationObserver(S=>{for(const A of S)if(A.type==="childList")for(const q of A.addedNodes)q.tagName==="LINK"&&q.rel==="modulepreload"&&c(q)}).observe(document,{childList:!0,subtree:!0});function s(S){const A={};return S.integrity&&(A.integrity=S.integrity),S.referrerPolicy&&(A.referrerPolicy=S.referrerPolicy),S.crossOrigin==="use-credentials"?A.credentials="include":S.crossOrigin==="anonymous"?A.credentials="omit":A.credentials="same-origin",A}function c(S){if(S.ep)return;S.ep=!0;const A=s(S);fetch(S.href,A)}})();function bb(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var vr={exports:{}},Me={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sd;function mb(){if(Sd)return Me;Sd=1;var o=Symbol.for("react.transitional.element"),f=Symbol.for("react.fragment");function s(c,S,A){var q=null;if(A!==void 0&&(q=""+A),S.key!==void 0&&(q=""+S.key),"key"in S){A={};for(var w in S)w!=="key"&&(A[w]=S[w])}else A=S;return S=A.ref,{$$typeof:o,type:c,key:q,ref:S!==void 0?S:null,props:A}}return Me.Fragment=f,Me.jsx=s,Me.jsxs=s,Me}var Od;function pb(){return Od||(Od=1,vr.exports=mb()),vr.exports}var k=pb(),gr={exports:{}},$={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zd;function vb(){if(zd)return $;zd=1;var o=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),A=Symbol.for("react.consumer"),q=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),I=Symbol.iterator;function J(h){return h===null||typeof h!="object"?null:(h=I&&h[I]||h["@@iterator"],typeof h=="function"?h:null)}var yn={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,M={};function V(h,E,H){this.props=h,this.context=E,this.refs=M,this.updater=H||yn}V.prototype.isReactComponent={},V.prototype.setState=function(h,E){if(typeof h!="object"&&typeof h!="function"&&h!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,h,E,"setState")},V.prototype.forceUpdate=function(h){this.updater.enqueueForceUpdate(this,h,"forceUpdate")};function Xn(){}Xn.prototype=V.prototype;function Rn(h,E,H){this.props=h,this.context=E,this.refs=M,this.updater=H||yn}var on=Rn.prototype=new Xn;on.constructor=Rn,L(on,V.prototype),on.isPureReactComponent=!0;var Sn=Array.isArray,P={H:null,A:null,T:null,S:null,V:null},Tn=Object.prototype.hasOwnProperty;function An(h,E,H,R,C,ln){return H=ln.ref,{$$typeof:o,type:h,key:E,ref:H!==void 0?H:null,props:ln}}function Nn(h,E){return An(h.type,E,void 0,void 0,void 0,h.props)}function On(h){return typeof h=="object"&&h!==null&&h.$$typeof===o}function La(h){var E={"=":"=0",":":"=2"};return"$"+h.replace(/[=:]/g,function(H){return E[H]})}var Ht=/\/+/g;function wn(h,E){return typeof h=="object"&&h!==null&&h.key!=null?La(""+h.key):E.toString(36)}function Ta(){}function Aa(h){switch(h.status){case"fulfilled":return h.value;case"rejected":throw h.reason;default:switch(typeof h.status=="string"?h.then(Ta,Ta):(h.status="pending",h.then(function(E){h.status==="pending"&&(h.status="fulfilled",h.value=E)},function(E){h.status==="pending"&&(h.status="rejected",h.reason=E)})),h.status){case"fulfilled":return h.value;case"rejected":throw h.reason}}throw h}function Ln(h,E,H,R,C){var ln=typeof h;(ln==="undefined"||ln==="boolean")&&(h=null);var K=!1;if(h===null)K=!0;else switch(ln){case"bigint":case"string":case"number":K=!0;break;case"object":switch(h.$$typeof){case o:case f:K=!0;break;case N:return K=h._init,Ln(K(h._payload),E,H,R,C)}}if(K)return C=C(h),K=R===""?"."+wn(h,0):R,Sn(C)?(H="",K!=null&&(H=K.replace(Ht,"$&/")+"/"),Ln(C,E,H,"",function(It){return It})):C!=null&&(On(C)&&(C=Nn(C,H+(C.key==null||h&&h.key===C.key?"":(""+C.key).replace(Ht,"$&/")+"/")+K)),E.push(C)),1;K=0;var lt=R===""?".":R+":";if(Sn(h))for(var pn=0;pn<h.length;pn++)R=h[pn],ln=lt+wn(R,pn),K+=Ln(R,E,H,ln,C);else if(pn=J(h),typeof pn=="function")for(h=pn.call(h),pn=0;!(R=h.next()).done;)R=R.value,ln=lt+wn(R,pn++),K+=Ln(R,E,H,ln,C);else if(ln==="object"){if(typeof h.then=="function")return Ln(Aa(h),E,H,R,C);throw E=String(h),Error("Objects are not valid as a React child (found: "+(E==="[object Object]"?"object with keys {"+Object.keys(h).join(", ")+"}":E)+"). If you meant to render a collection of children, use an array instead.")}return K}function z(h,E,H){if(h==null)return h;var R=[],C=0;return Ln(h,R,"","",function(ln){return E.call(H,ln,C++)}),R}function U(h){if(h._status===-1){var E=h._result;E=E(),E.then(function(H){(h._status===0||h._status===-1)&&(h._status=1,h._result=H)},function(H){(h._status===0||h._status===-1)&&(h._status=2,h._result=H)}),h._status===-1&&(h._status=0,h._result=E)}if(h._status===1)return h._result.default;throw h._result}var Q=typeof reportError=="function"?reportError:function(h){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var E=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof h=="object"&&h!==null&&typeof h.message=="string"?String(h.message):String(h),error:h});if(!window.dispatchEvent(E))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",h);return}console.error(h)};function hn(){}return $.Children={map:z,forEach:function(h,E,H){z(h,function(){E.apply(this,arguments)},H)},count:function(h){var E=0;return z(h,function(){E++}),E},toArray:function(h){return z(h,function(E){return E})||[]},only:function(h){if(!On(h))throw Error("React.Children.only expected to receive a single React element child.");return h}},$.Component=V,$.Fragment=s,$.Profiler=S,$.PureComponent=Rn,$.StrictMode=c,$.Suspense=D,$.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,$.__COMPILER_RUNTIME={__proto__:null,c:function(h){return P.H.useMemoCache(h)}},$.cache=function(h){return function(){return h.apply(null,arguments)}},$.cloneElement=function(h,E,H){if(h==null)throw Error("The argument must be a React element, but you passed "+h+".");var R=L({},h.props),C=h.key,ln=void 0;if(E!=null)for(K in E.ref!==void 0&&(ln=void 0),E.key!==void 0&&(C=""+E.key),E)!Tn.call(E,K)||K==="key"||K==="__self"||K==="__source"||K==="ref"&&E.ref===void 0||(R[K]=E[K]);var K=arguments.length-2;if(K===1)R.children=H;else if(1<K){for(var lt=Array(K),pn=0;pn<K;pn++)lt[pn]=arguments[pn+2];R.children=lt}return An(h.type,C,void 0,void 0,ln,R)},$.createContext=function(h){return h={$$typeof:q,_currentValue:h,_currentValue2:h,_threadCount:0,Provider:null,Consumer:null},h.Provider=h,h.Consumer={$$typeof:A,_context:h},h},$.createElement=function(h,E,H){var R,C={},ln=null;if(E!=null)for(R in E.key!==void 0&&(ln=""+E.key),E)Tn.call(E,R)&&R!=="key"&&R!=="__self"&&R!=="__source"&&(C[R]=E[R]);var K=arguments.length-2;if(K===1)C.children=H;else if(1<K){for(var lt=Array(K),pn=0;pn<K;pn++)lt[pn]=arguments[pn+2];C.children=lt}if(h&&h.defaultProps)for(R in K=h.defaultProps,K)C[R]===void 0&&(C[R]=K[R]);return An(h,ln,void 0,void 0,null,C)},$.createRef=function(){return{current:null}},$.forwardRef=function(h){return{$$typeof:w,render:h}},$.isValidElement=On,$.lazy=function(h){return{$$typeof:N,_payload:{_status:-1,_result:h},_init:U}},$.memo=function(h,E){return{$$typeof:x,type:h,compare:E===void 0?null:E}},$.startTransition=function(h){var E=P.T,H={};P.T=H;try{var R=h(),C=P.S;C!==null&&C(H,R),typeof R=="object"&&R!==null&&typeof R.then=="function"&&R.then(hn,Q)}catch(ln){Q(ln)}finally{P.T=E}},$.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},$.use=function(h){return P.H.use(h)},$.useActionState=function(h,E,H){return P.H.useActionState(h,E,H)},$.useCallback=function(h,E){return P.H.useCallback(h,E)},$.useContext=function(h){return P.H.useContext(h)},$.useDebugValue=function(){},$.useDeferredValue=function(h,E){return P.H.useDeferredValue(h,E)},$.useEffect=function(h,E,H){var R=P.H;if(typeof H=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return R.useEffect(h,E)},$.useId=function(){return P.H.useId()},$.useImperativeHandle=function(h,E,H){return P.H.useImperativeHandle(h,E,H)},$.useInsertionEffect=function(h,E){return P.H.useInsertionEffect(h,E)},$.useLayoutEffect=function(h,E){return P.H.useLayoutEffect(h,E)},$.useMemo=function(h,E){return P.H.useMemo(h,E)},$.useOptimistic=function(h,E){return P.H.useOptimistic(h,E)},$.useReducer=function(h,E,H){return P.H.useReducer(h,E,H)},$.useRef=function(h){return P.H.useRef(h)},$.useState=function(h){return P.H.useState(h)},$.useSyncExternalStore=function(h,E,H){return P.H.useSyncExternalStore(h,E,H)},$.useTransition=function(){return P.H.useTransition()},$.version="19.1.0",$}var _d;function Er(){return _d||(_d=1,gr.exports=vb()),gr.exports}var Ft=Er();const Pn=bb(Ft);var yr={exports:{}},qe={},xr={exports:{}},Sr={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Td;function gb(){return Td||(Td=1,function(o){function f(z,U){var Q=z.length;z.push(U);n:for(;0<Q;){var hn=Q-1>>>1,h=z[hn];if(0<S(h,U))z[hn]=U,z[Q]=h,Q=hn;else break n}}function s(z){return z.length===0?null:z[0]}function c(z){if(z.length===0)return null;var U=z[0],Q=z.pop();if(Q!==U){z[0]=Q;n:for(var hn=0,h=z.length,E=h>>>1;hn<E;){var H=2*(hn+1)-1,R=z[H],C=H+1,ln=z[C];if(0>S(R,Q))C<h&&0>S(ln,R)?(z[hn]=ln,z[C]=Q,hn=C):(z[hn]=R,z[H]=Q,hn=H);else if(C<h&&0>S(ln,Q))z[hn]=ln,z[C]=Q,hn=C;else break n}}return U}function S(z,U){var Q=z.sortIndex-U.sortIndex;return Q!==0?Q:z.id-U.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var A=performance;o.unstable_now=function(){return A.now()}}else{var q=Date,w=q.now();o.unstable_now=function(){return q.now()-w}}var D=[],x=[],N=1,I=null,J=3,yn=!1,L=!1,M=!1,V=!1,Xn=typeof setTimeout=="function"?setTimeout:null,Rn=typeof clearTimeout=="function"?clearTimeout:null,on=typeof setImmediate<"u"?setImmediate:null;function Sn(z){for(var U=s(x);U!==null;){if(U.callback===null)c(x);else if(U.startTime<=z)c(x),U.sortIndex=U.expirationTime,f(D,U);else break;U=s(x)}}function P(z){if(M=!1,Sn(z),!L)if(s(D)!==null)L=!0,Tn||(Tn=!0,wn());else{var U=s(x);U!==null&&Ln(P,U.startTime-z)}}var Tn=!1,An=-1,Nn=5,On=-1;function La(){return V?!0:!(o.unstable_now()-On<Nn)}function Ht(){if(V=!1,Tn){var z=o.unstable_now();On=z;var U=!0;try{n:{L=!1,M&&(M=!1,Rn(An),An=-1),yn=!0;var Q=J;try{t:{for(Sn(z),I=s(D);I!==null&&!(I.expirationTime>z&&La());){var hn=I.callback;if(typeof hn=="function"){I.callback=null,J=I.priorityLevel;var h=hn(I.expirationTime<=z);if(z=o.unstable_now(),typeof h=="function"){I.callback=h,Sn(z),U=!0;break t}I===s(D)&&c(D),Sn(z)}else c(D);I=s(D)}if(I!==null)U=!0;else{var E=s(x);E!==null&&Ln(P,E.startTime-z),U=!1}}break n}finally{I=null,J=Q,yn=!1}U=void 0}}finally{U?wn():Tn=!1}}}var wn;if(typeof on=="function")wn=function(){on(Ht)};else if(typeof MessageChannel<"u"){var Ta=new MessageChannel,Aa=Ta.port2;Ta.port1.onmessage=Ht,wn=function(){Aa.postMessage(null)}}else wn=function(){Xn(Ht,0)};function Ln(z,U){An=Xn(function(){z(o.unstable_now())},U)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Nn=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return J},o.unstable_next=function(z){switch(J){case 1:case 2:case 3:var U=3;break;default:U=J}var Q=J;J=U;try{return z()}finally{J=Q}},o.unstable_requestPaint=function(){V=!0},o.unstable_runWithPriority=function(z,U){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Q=J;J=z;try{return U()}finally{J=Q}},o.unstable_scheduleCallback=function(z,U,Q){var hn=o.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?hn+Q:hn):Q=hn,z){case 1:var h=-1;break;case 2:h=250;break;case 5:h=1073741823;break;case 4:h=1e4;break;default:h=5e3}return h=Q+h,z={id:N++,callback:U,priorityLevel:z,startTime:Q,expirationTime:h,sortIndex:-1},Q>hn?(z.sortIndex=Q,f(x,z),s(D)===null&&z===s(x)&&(M?(Rn(An),An=-1):M=!0,Ln(P,Q-hn))):(z.sortIndex=h,f(D,z),L||yn||(L=!0,Tn||(Tn=!0,wn()))),z},o.unstable_shouldYield=La,o.unstable_wrapCallback=function(z){var U=J;return function(){var Q=J;J=U;try{return z.apply(this,arguments)}finally{J=Q}}}}(Sr)),Sr}var Ad;function yb(){return Ad||(Ad=1,xr.exports=gb()),xr.exports}var Or={exports:{}},Jn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ed;function xb(){if(Ed)return Jn;Ed=1;var o=Er();function f(D){var x="https://react.dev/errors/"+D;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var N=2;N<arguments.length;N++)x+="&args[]="+encodeURIComponent(arguments[N])}return"Minified React error #"+D+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var c={d:{f:s,r:function(){throw Error(f(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},S=Symbol.for("react.portal");function A(D,x,N){var I=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:S,key:I==null?null:""+I,children:D,containerInfo:x,implementation:N}}var q=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function w(D,x){if(D==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return Jn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,Jn.createPortal=function(D,x){var N=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(f(299));return A(D,x,null,N)},Jn.flushSync=function(D){var x=q.T,N=c.p;try{if(q.T=null,c.p=2,D)return D()}finally{q.T=x,c.p=N,c.d.f()}},Jn.preconnect=function(D,x){typeof D=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,c.d.C(D,x))},Jn.prefetchDNS=function(D){typeof D=="string"&&c.d.D(D)},Jn.preinit=function(D,x){if(typeof D=="string"&&x&&typeof x.as=="string"){var N=x.as,I=w(N,x.crossOrigin),J=typeof x.integrity=="string"?x.integrity:void 0,yn=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;N==="style"?c.d.S(D,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:I,integrity:J,fetchPriority:yn}):N==="script"&&c.d.X(D,{crossOrigin:I,integrity:J,fetchPriority:yn,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},Jn.preinitModule=function(D,x){if(typeof D=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var N=w(x.as,x.crossOrigin);c.d.M(D,{crossOrigin:N,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&c.d.M(D)},Jn.preload=function(D,x){if(typeof D=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var N=x.as,I=w(N,x.crossOrigin);c.d.L(D,N,{crossOrigin:I,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},Jn.preloadModule=function(D,x){if(typeof D=="string")if(x){var N=w(x.as,x.crossOrigin);c.d.m(D,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:N,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else c.d.m(D)},Jn.requestFormReset=function(D){c.d.r(D)},Jn.unstable_batchedUpdates=function(D,x){return D(x)},Jn.useFormState=function(D,x,N){return q.H.useFormState(D,x,N)},Jn.useFormStatus=function(){return q.H.useHostTransitionStatus()},Jn.version="19.1.0",Jn}var Dd;function Sb(){if(Dd)return Or.exports;Dd=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(f){console.error(f)}}return o(),Or.exports=xb(),Or.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Md;function Ob(){if(Md)return qe;Md=1;var o=yb(),f=Er(),s=Sb();function c(n){var t="https://react.dev/errors/"+n;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+n+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function S(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function A(n){var t=n,a=n;if(n.alternate)for(;t.return;)t=t.return;else{n=t;do t=n,(t.flags&4098)!==0&&(a=t.return),n=t.return;while(n)}return t.tag===3?a:null}function q(n){if(n.tag===13){var t=n.memoizedState;if(t===null&&(n=n.alternate,n!==null&&(t=n.memoizedState)),t!==null)return t.dehydrated}return null}function w(n){if(A(n)!==n)throw Error(c(188))}function D(n){var t=n.alternate;if(!t){if(t=A(n),t===null)throw Error(c(188));return t!==n?null:n}for(var a=n,l=t;;){var e=a.return;if(e===null)break;var i=e.alternate;if(i===null){if(l=e.return,l!==null){a=l;continue}break}if(e.child===i.child){for(i=e.child;i;){if(i===a)return w(e),n;if(i===l)return w(e),t;i=i.sibling}throw Error(c(188))}if(a.return!==l.return)a=e,l=i;else{for(var u=!1,r=e.child;r;){if(r===a){u=!0,a=e,l=i;break}if(r===l){u=!0,l=e,a=i;break}r=r.sibling}if(!u){for(r=i.child;r;){if(r===a){u=!0,a=i,l=e;break}if(r===l){u=!0,l=i,a=e;break}r=r.sibling}if(!u)throw Error(c(189))}}if(a.alternate!==l)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?n:t}function x(n){var t=n.tag;if(t===5||t===26||t===27||t===6)return n;for(n=n.child;n!==null;){if(t=x(n),t!==null)return t;n=n.sibling}return null}var N=Object.assign,I=Symbol.for("react.element"),J=Symbol.for("react.transitional.element"),yn=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),Xn=Symbol.for("react.provider"),Rn=Symbol.for("react.consumer"),on=Symbol.for("react.context"),Sn=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),Tn=Symbol.for("react.suspense_list"),An=Symbol.for("react.memo"),Nn=Symbol.for("react.lazy"),On=Symbol.for("react.activity"),La=Symbol.for("react.memo_cache_sentinel"),Ht=Symbol.iterator;function wn(n){return n===null||typeof n!="object"?null:(n=Ht&&n[Ht]||n["@@iterator"],typeof n=="function"?n:null)}var Ta=Symbol.for("react.client.reference");function Aa(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===Ta?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case L:return"Fragment";case V:return"Profiler";case M:return"StrictMode";case P:return"Suspense";case Tn:return"SuspenseList";case On:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case yn:return"Portal";case on:return(n.displayName||"Context")+".Provider";case Rn:return(n._context.displayName||"Context")+".Consumer";case Sn:var t=n.render;return n=n.displayName,n||(n=t.displayName||t.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case An:return t=n.displayName||null,t!==null?t:Aa(n.type)||"Memo";case Nn:t=n._payload,n=n._init;try{return Aa(n(t))}catch{}}return null}var Ln=Array.isArray,z=f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q={pending:!1,data:null,method:null,action:null},hn=[],h=-1;function E(n){return{current:n}}function H(n){0>h||(n.current=hn[h],hn[h]=null,h--)}function R(n,t){h++,hn[h]=n.current,n.current=t}var C=E(null),ln=E(null),K=E(null),lt=E(null);function pn(n,t){switch(R(K,t),R(ln,n),R(C,null),t.nodeType){case 9:case 11:n=(n=t.documentElement)&&(n=n.namespaceURI)?Ps(n):0;break;default:if(n=t.tagName,t=t.namespaceURI)t=Ps(t),n=$s(t,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}H(C),R(C,n)}function It(){H(C),H(ln),H(K)}function tu(n){n.memoizedState!==null&&R(lt,n);var t=C.current,a=$s(t,n.type);t!==a&&(R(ln,n),R(C,a))}function Ue(n){ln.current===n&&(H(C),H(ln)),lt.current===n&&(H(lt),_e._currentValue=Q)}var au=Object.prototype.hasOwnProperty,lu=o.unstable_scheduleCallback,eu=o.unstable_cancelCallback,Vd=o.unstable_shouldYield,Kd=o.unstable_requestPaint,Dt=o.unstable_now,Jd=o.unstable_getCurrentPriorityLevel,Dr=o.unstable_ImmediatePriority,Mr=o.unstable_UserBlockingPriority,ke=o.unstable_NormalPriority,Pd=o.unstable_LowPriority,qr=o.unstable_IdlePriority,$d=o.log,Wd=o.unstable_setDisableYieldValue,Nl=null,et=null;function na(n){if(typeof $d=="function"&&Wd(n),et&&typeof et.setStrictMode=="function")try{et.setStrictMode(Nl,n)}catch{}}var it=Math.clz32?Math.clz32:n0,Fd=Math.log,Id=Math.LN2;function n0(n){return n>>>=0,n===0?32:31-(Fd(n)/Id|0)|0}var He=256,je=4194304;function Ea(n){var t=n&42;if(t!==0)return t;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Be(n,t,a){var l=n.pendingLanes;if(l===0)return 0;var e=0,i=n.suspendedLanes,u=n.pingedLanes;n=n.warmLanes;var r=l&134217727;return r!==0?(l=r&~i,l!==0?e=Ea(l):(u&=r,u!==0?e=Ea(u):a||(a=r&~n,a!==0&&(e=Ea(a))))):(r=l&~i,r!==0?e=Ea(r):u!==0?e=Ea(u):a||(a=l&~n,a!==0&&(e=Ea(a)))),e===0?0:t!==0&&t!==e&&(t&i)===0&&(i=e&-e,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:e}function Ul(n,t){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&t)===0}function t0(n,t){switch(n){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rr(){var n=He;return He<<=1,(He&4194048)===0&&(He=256),n}function Nr(){var n=je;return je<<=1,(je&62914560)===0&&(je=4194304),n}function iu(n){for(var t=[],a=0;31>a;a++)t.push(n);return t}function kl(n,t){n.pendingLanes|=t,t!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function a0(n,t,a,l,e,i){var u=n.pendingLanes;n.pendingLanes=a,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=a,n.entangledLanes&=a,n.errorRecoveryDisabledLanes&=a,n.shellSuspendCounter=0;var r=n.entanglements,d=n.expirationTimes,v=n.hiddenUpdates;for(a=u&~a;0<a;){var O=31-it(a),T=1<<O;r[O]=0,d[O]=-1;var g=v[O];if(g!==null)for(v[O]=null,O=0;O<g.length;O++){var y=g[O];y!==null&&(y.lane&=-536870913)}a&=~T}l!==0&&Ur(n,l,0),i!==0&&e===0&&n.tag!==0&&(n.suspendedLanes|=i&~(u&~t))}function Ur(n,t,a){n.pendingLanes|=t,n.suspendedLanes&=~t;var l=31-it(t);n.entangledLanes|=t,n.entanglements[l]=n.entanglements[l]|1073741824|a&4194090}function kr(n,t){var a=n.entangledLanes|=t;for(n=n.entanglements;a;){var l=31-it(a),e=1<<l;e&t|n[l]&t&&(n[l]|=t),a&=~e}}function uu(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function ou(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Hr(){var n=U.p;return n!==0?n:(n=window.event,n===void 0?32:md(n.type))}function l0(n,t){var a=U.p;try{return U.p=n,t()}finally{U.p=a}}var ta=Math.random().toString(36).slice(2),Vn="__reactFiber$"+ta,Wn="__reactProps$"+ta,Va="__reactContainer$"+ta,ru="__reactEvents$"+ta,e0="__reactListeners$"+ta,i0="__reactHandles$"+ta,jr="__reactResources$"+ta,Hl="__reactMarker$"+ta;function cu(n){delete n[Vn],delete n[Wn],delete n[ru],delete n[e0],delete n[i0]}function Ka(n){var t=n[Vn];if(t)return t;for(var a=n.parentNode;a;){if(t=a[Va]||a[Vn]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(n=nd(n);n!==null;){if(a=n[Vn])return a;n=nd(n)}return t}n=a,a=n.parentNode}return null}function Ja(n){if(n=n[Vn]||n[Va]){var t=n.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return n}return null}function jl(n){var t=n.tag;if(t===5||t===26||t===27||t===6)return n.stateNode;throw Error(c(33))}function Pa(n){var t=n[jr];return t||(t=n[jr]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function jn(n){n[Hl]=!0}var Br=new Set,Yr={};function Da(n,t){$a(n,t),$a(n+"Capture",t)}function $a(n,t){for(Yr[n]=t,n=0;n<t.length;n++)Br.add(t[n])}var u0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Cr={},Xr={};function o0(n){return au.call(Xr,n)?!0:au.call(Cr,n)?!1:u0.test(n)?Xr[n]=!0:(Cr[n]=!0,!1)}function Ye(n,t,a){if(o0(t))if(a===null)n.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":n.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){n.removeAttribute(t);return}}n.setAttribute(t,""+a)}}function Ce(n,t,a){if(a===null)n.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(t);return}n.setAttribute(t,""+a)}}function jt(n,t,a,l){if(l===null)n.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttributeNS(t,a,""+l)}}var fu,Gr;function Wa(n){if(fu===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);fu=t&&t[1]||"",Gr=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+fu+n+Gr}var su=!1;function du(n,t){if(!n||su)return"";su=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var T=function(){throw Error()};if(Object.defineProperty(T.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(T,[])}catch(y){var g=y}Reflect.construct(n,[],T)}else{try{T.call()}catch(y){g=y}n.call(T.prototype)}}else{try{throw Error()}catch(y){g=y}(T=n())&&typeof T.catch=="function"&&T.catch(function(){})}}catch(y){if(y&&g&&typeof y.stack=="string")return[y.stack,g.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var e=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");e&&e.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),u=i[0],r=i[1];if(u&&r){var d=u.split(`
`),v=r.split(`
`);for(e=l=0;l<d.length&&!d[l].includes("DetermineComponentFrameRoot");)l++;for(;e<v.length&&!v[e].includes("DetermineComponentFrameRoot");)e++;if(l===d.length||e===v.length)for(l=d.length-1,e=v.length-1;1<=l&&0<=e&&d[l]!==v[e];)e--;for(;1<=l&&0<=e;l--,e--)if(d[l]!==v[e]){if(l!==1||e!==1)do if(l--,e--,0>e||d[l]!==v[e]){var O=`
`+d[l].replace(" at new "," at ");return n.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",n.displayName)),O}while(1<=l&&0<=e);break}}}finally{su=!1,Error.prepareStackTrace=a}return(a=n?n.displayName||n.name:"")?Wa(a):""}function r0(n){switch(n.tag){case 26:case 27:case 5:return Wa(n.type);case 16:return Wa("Lazy");case 13:return Wa("Suspense");case 19:return Wa("SuspenseList");case 0:case 15:return du(n.type,!1);case 11:return du(n.type.render,!1);case 1:return du(n.type,!0);case 31:return Wa("Activity");default:return""}}function Qr(n){try{var t="";do t+=r0(n),n=n.return;while(n);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function bt(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Zr(n){var t=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function c0(n){var t=Zr(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,t),l=""+n[t];if(!n.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var e=a.get,i=a.set;return Object.defineProperty(n,t,{configurable:!0,get:function(){return e.call(this)},set:function(u){l=""+u,i.call(this,u)}}),Object.defineProperty(n,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(u){l=""+u},stopTracking:function(){n._valueTracker=null,delete n[t]}}}}function Xe(n){n._valueTracker||(n._valueTracker=c0(n))}function wr(n){if(!n)return!1;var t=n._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return n&&(l=Zr(n)?n.checked?"true":"false":n.value),n=l,n!==a?(t.setValue(n),!0):!1}function Ge(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var f0=/[\n"\\]/g;function mt(n){return n.replace(f0,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function hu(n,t,a,l,e,i,u,r){n.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?n.type=u:n.removeAttribute("type"),t!=null?u==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+bt(t)):n.value!==""+bt(t)&&(n.value=""+bt(t)):u!=="submit"&&u!=="reset"||n.removeAttribute("value"),t!=null?bu(n,u,bt(t)):a!=null?bu(n,u,bt(a)):l!=null&&n.removeAttribute("value"),e==null&&i!=null&&(n.defaultChecked=!!i),e!=null&&(n.checked=e&&typeof e!="function"&&typeof e!="symbol"),r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?n.name=""+bt(r):n.removeAttribute("name")}function Lr(n,t,a,l,e,i,u,r){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(n.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null))return;a=a!=null?""+bt(a):"",t=t!=null?""+bt(t):a,r||t===n.value||(n.value=t),n.defaultValue=t}l=l??e,l=typeof l!="function"&&typeof l!="symbol"&&!!l,n.checked=r?n.checked:!!l,n.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(n.name=u)}function bu(n,t,a){t==="number"&&Ge(n.ownerDocument)===n||n.defaultValue===""+a||(n.defaultValue=""+a)}function Fa(n,t,a,l){if(n=n.options,t){t={};for(var e=0;e<a.length;e++)t["$"+a[e]]=!0;for(a=0;a<n.length;a++)e=t.hasOwnProperty("$"+n[a].value),n[a].selected!==e&&(n[a].selected=e),e&&l&&(n[a].defaultSelected=!0)}else{for(a=""+bt(a),t=null,e=0;e<n.length;e++){if(n[e].value===a){n[e].selected=!0,l&&(n[e].defaultSelected=!0);return}t!==null||n[e].disabled||(t=n[e])}t!==null&&(t.selected=!0)}}function Vr(n,t,a){if(t!=null&&(t=""+bt(t),t!==n.value&&(n.value=t),a==null)){n.defaultValue!==t&&(n.defaultValue=t);return}n.defaultValue=a!=null?""+bt(a):""}function Kr(n,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(c(92));if(Ln(l)){if(1<l.length)throw Error(c(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=bt(t),n.defaultValue=a,l=n.textContent,l===a&&l!==""&&l!==null&&(n.value=l)}function Ia(n,t){if(t){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=t;return}}n.textContent=t}var s0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Jr(n,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?n.setProperty(t,""):t==="float"?n.cssFloat="":n[t]="":l?n.setProperty(t,a):typeof a!="number"||a===0||s0.has(t)?t==="float"?n.cssFloat=a:n[t]=(""+a).trim():n[t]=a+"px"}function Pr(n,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(n=n.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?n.setProperty(l,""):l==="float"?n.cssFloat="":n[l]="");for(var e in t)l=t[e],t.hasOwnProperty(e)&&a[e]!==l&&Jr(n,e,l)}else for(var i in t)t.hasOwnProperty(i)&&Jr(n,i,t[i])}function mu(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var d0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),h0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Qe(n){return h0.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var pu=null;function vu(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var nl=null,tl=null;function $r(n){var t=Ja(n);if(t&&(n=t.stateNode)){var a=n[Wn]||null;n:switch(n=t.stateNode,t.type){case"input":if(hu(n,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+mt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==n&&l.form===n.form){var e=l[Wn]||null;if(!e)throw Error(c(90));hu(l,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===n.form&&wr(l)}break n;case"textarea":Vr(n,a.value,a.defaultValue);break n;case"select":t=a.value,t!=null&&Fa(n,!!a.multiple,t,!1)}}}var gu=!1;function Wr(n,t,a){if(gu)return n(t,a);gu=!0;try{var l=n(t);return l}finally{if(gu=!1,(nl!==null||tl!==null)&&(Ei(),nl&&(t=nl,n=tl,tl=nl=null,$r(t),n)))for(t=0;t<n.length;t++)$r(n[t])}}function Bl(n,t){var a=n.stateNode;if(a===null)return null;var l=a[Wn]||null;if(l===null)return null;a=l[t];n:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(n=n.type,l=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!l;break n;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var Bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yu=!1;if(Bt)try{var Yl={};Object.defineProperty(Yl,"passive",{get:function(){yu=!0}}),window.addEventListener("test",Yl,Yl),window.removeEventListener("test",Yl,Yl)}catch{yu=!1}var aa=null,xu=null,Ze=null;function Fr(){if(Ze)return Ze;var n,t=xu,a=t.length,l,e="value"in aa?aa.value:aa.textContent,i=e.length;for(n=0;n<a&&t[n]===e[n];n++);var u=a-n;for(l=1;l<=u&&t[a-l]===e[i-l];l++);return Ze=e.slice(n,1<l?1-l:void 0)}function we(n){var t=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&t===13&&(n=13)):n=t,n===10&&(n=13),32<=n||n===13?n:0}function Le(){return!0}function Ir(){return!1}function Fn(n){function t(a,l,e,i,u){this._reactName=a,this._targetInst=e,this.type=l,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var r in n)n.hasOwnProperty(r)&&(a=n[r],this[r]=a?a(i):i[r]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Le:Ir,this.isPropagationStopped=Ir,this}return N(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Le)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Le)},persist:function(){},isPersistent:Le}),t}var Ma={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ve=Fn(Ma),Cl=N({},Ma,{view:0,detail:0}),b0=Fn(Cl),Su,Ou,Xl,Ke=N({},Cl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_u,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Xl&&(Xl&&n.type==="mousemove"?(Su=n.screenX-Xl.screenX,Ou=n.screenY-Xl.screenY):Ou=Su=0,Xl=n),Su)},movementY:function(n){return"movementY"in n?n.movementY:Ou}}),nc=Fn(Ke),m0=N({},Ke,{dataTransfer:0}),p0=Fn(m0),v0=N({},Cl,{relatedTarget:0}),zu=Fn(v0),g0=N({},Ma,{animationName:0,elapsedTime:0,pseudoElement:0}),y0=Fn(g0),x0=N({},Ma,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),S0=Fn(x0),O0=N({},Ma,{data:0}),tc=Fn(O0),z0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},T0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function A0(n){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(n):(n=T0[n])?!!t[n]:!1}function _u(){return A0}var E0=N({},Cl,{key:function(n){if(n.key){var t=z0[n.key]||n.key;if(t!=="Unidentified")return t}return n.type==="keypress"?(n=we(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?_0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_u,charCode:function(n){return n.type==="keypress"?we(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?we(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),D0=Fn(E0),M0=N({},Ke,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ac=Fn(M0),q0=N({},Cl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_u}),R0=Fn(q0),N0=N({},Ma,{propertyName:0,elapsedTime:0,pseudoElement:0}),U0=Fn(N0),k0=N({},Ke,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),H0=Fn(k0),j0=N({},Ma,{newState:0,oldState:0}),B0=Fn(j0),Y0=[9,13,27,32],Tu=Bt&&"CompositionEvent"in window,Gl=null;Bt&&"documentMode"in document&&(Gl=document.documentMode);var C0=Bt&&"TextEvent"in window&&!Gl,lc=Bt&&(!Tu||Gl&&8<Gl&&11>=Gl),ec=" ",ic=!1;function uc(n,t){switch(n){case"keyup":return Y0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function oc(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var al=!1;function X0(n,t){switch(n){case"compositionend":return oc(t);case"keypress":return t.which!==32?null:(ic=!0,ec);case"textInput":return n=t.data,n===ec&&ic?null:n;default:return null}}function G0(n,t){if(al)return n==="compositionend"||!Tu&&uc(n,t)?(n=Fr(),Ze=xu=aa=null,al=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return lc&&t.locale!=="ko"?null:t.data;default:return null}}var Q0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rc(n){var t=n&&n.nodeName&&n.nodeName.toLowerCase();return t==="input"?!!Q0[n.type]:t==="textarea"}function cc(n,t,a,l){nl?tl?tl.push(l):tl=[l]:nl=l,t=Ui(t,"onChange"),0<t.length&&(a=new Ve("onChange","change",null,a,l),n.push({event:a,listeners:t}))}var Ql=null,Zl=null;function Z0(n){ws(n,0)}function Je(n){var t=jl(n);if(wr(t))return n}function fc(n,t){if(n==="change")return t}var sc=!1;if(Bt){var Au;if(Bt){var Eu="oninput"in document;if(!Eu){var dc=document.createElement("div");dc.setAttribute("oninput","return;"),Eu=typeof dc.oninput=="function"}Au=Eu}else Au=!1;sc=Au&&(!document.documentMode||9<document.documentMode)}function hc(){Ql&&(Ql.detachEvent("onpropertychange",bc),Zl=Ql=null)}function bc(n){if(n.propertyName==="value"&&Je(Zl)){var t=[];cc(t,Zl,n,vu(n)),Wr(Z0,t)}}function w0(n,t,a){n==="focusin"?(hc(),Ql=t,Zl=a,Ql.attachEvent("onpropertychange",bc)):n==="focusout"&&hc()}function L0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Je(Zl)}function V0(n,t){if(n==="click")return Je(t)}function K0(n,t){if(n==="input"||n==="change")return Je(t)}function J0(n,t){return n===t&&(n!==0||1/n===1/t)||n!==n&&t!==t}var ut=typeof Object.is=="function"?Object.is:J0;function wl(n,t){if(ut(n,t))return!0;if(typeof n!="object"||n===null||typeof t!="object"||t===null)return!1;var a=Object.keys(n),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var e=a[l];if(!au.call(t,e)||!ut(n[e],t[e]))return!1}return!0}function mc(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function pc(n,t){var a=mc(n);n=0;for(var l;a;){if(a.nodeType===3){if(l=n+a.textContent.length,n<=t&&l>=t)return{node:a,offset:t-n};n=l}n:{for(;a;){if(a.nextSibling){a=a.nextSibling;break n}a=a.parentNode}a=void 0}a=mc(a)}}function vc(n,t){return n&&t?n===t?!0:n&&n.nodeType===3?!1:t&&t.nodeType===3?vc(n,t.parentNode):"contains"in n?n.contains(t):n.compareDocumentPosition?!!(n.compareDocumentPosition(t)&16):!1:!1}function gc(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var t=Ge(n.document);t instanceof n.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)n=t.contentWindow;else break;t=Ge(n.document)}return t}function Du(n){var t=n&&n.nodeName&&n.nodeName.toLowerCase();return t&&(t==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||t==="textarea"||n.contentEditable==="true")}var P0=Bt&&"documentMode"in document&&11>=document.documentMode,ll=null,Mu=null,Ll=null,qu=!1;function yc(n,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;qu||ll==null||ll!==Ge(l)||(l=ll,"selectionStart"in l&&Du(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ll&&wl(Ll,l)||(Ll=l,l=Ui(Mu,"onSelect"),0<l.length&&(t=new Ve("onSelect","select",null,t,a),n.push({event:t,listeners:l}),t.target=ll)))}function qa(n,t){var a={};return a[n.toLowerCase()]=t.toLowerCase(),a["Webkit"+n]="webkit"+t,a["Moz"+n]="moz"+t,a}var el={animationend:qa("Animation","AnimationEnd"),animationiteration:qa("Animation","AnimationIteration"),animationstart:qa("Animation","AnimationStart"),transitionrun:qa("Transition","TransitionRun"),transitionstart:qa("Transition","TransitionStart"),transitioncancel:qa("Transition","TransitionCancel"),transitionend:qa("Transition","TransitionEnd")},Ru={},xc={};Bt&&(xc=document.createElement("div").style,"AnimationEvent"in window||(delete el.animationend.animation,delete el.animationiteration.animation,delete el.animationstart.animation),"TransitionEvent"in window||delete el.transitionend.transition);function Ra(n){if(Ru[n])return Ru[n];if(!el[n])return n;var t=el[n],a;for(a in t)if(t.hasOwnProperty(a)&&a in xc)return Ru[n]=t[a];return n}var Sc=Ra("animationend"),Oc=Ra("animationiteration"),zc=Ra("animationstart"),$0=Ra("transitionrun"),W0=Ra("transitionstart"),F0=Ra("transitioncancel"),_c=Ra("transitionend"),Tc=new Map,Nu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Nu.push("scrollEnd");function zt(n,t){Tc.set(n,t),Da(t,[n])}var Ac=new WeakMap;function pt(n,t){if(typeof n=="object"&&n!==null){var a=Ac.get(n);return a!==void 0?a:(t={value:n,source:t,stack:Qr(t)},Ac.set(n,t),t)}return{value:n,source:t,stack:Qr(t)}}var vt=[],il=0,Uu=0;function Pe(){for(var n=il,t=Uu=il=0;t<n;){var a=vt[t];vt[t++]=null;var l=vt[t];vt[t++]=null;var e=vt[t];vt[t++]=null;var i=vt[t];if(vt[t++]=null,l!==null&&e!==null){var u=l.pending;u===null?e.next=e:(e.next=u.next,u.next=e),l.pending=e}i!==0&&Ec(a,e,i)}}function $e(n,t,a,l){vt[il++]=n,vt[il++]=t,vt[il++]=a,vt[il++]=l,Uu|=l,n.lanes|=l,n=n.alternate,n!==null&&(n.lanes|=l)}function ku(n,t,a,l){return $e(n,t,a,l),We(n)}function ul(n,t){return $e(n,null,null,t),We(n)}function Ec(n,t,a){n.lanes|=a;var l=n.alternate;l!==null&&(l.lanes|=a);for(var e=!1,i=n.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(n=i.stateNode,n===null||n._visibility&1||(e=!0)),n=i,i=i.return;return n.tag===3?(i=n.stateNode,e&&t!==null&&(e=31-it(a),n=i.hiddenUpdates,l=n[e],l===null?n[e]=[t]:l.push(t),t.lane=a|536870912),i):null}function We(n){if(50<pe)throw pe=0,Go=null,Error(c(185));for(var t=n.return;t!==null;)n=t,t=n.return;return n.tag===3?n.stateNode:null}var ol={};function I0(n,t,a,l){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(n,t,a,l){return new I0(n,t,a,l)}function Hu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Yt(n,t){var a=n.alternate;return a===null?(a=ot(n.tag,t,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=t,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&65011712,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,t=n.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a.refCleanup=n.refCleanup,a}function Dc(n,t){n.flags&=65011714;var a=n.alternate;return a===null?(n.childLanes=0,n.lanes=t,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=a.childLanes,n.lanes=a.lanes,n.child=a.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=a.memoizedProps,n.memoizedState=a.memoizedState,n.updateQueue=a.updateQueue,n.type=a.type,t=a.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n}function Fe(n,t,a,l,e,i){var u=0;if(l=n,typeof n=="function")Hu(n)&&(u=1);else if(typeof n=="string")u=tb(n,a,C.current)?26:n==="html"||n==="head"||n==="body"?27:5;else n:switch(n){case On:return n=ot(31,a,t,e),n.elementType=On,n.lanes=i,n;case L:return Na(a.children,e,i,t);case M:u=8,e|=24;break;case V:return n=ot(12,a,t,e|2),n.elementType=V,n.lanes=i,n;case P:return n=ot(13,a,t,e),n.elementType=P,n.lanes=i,n;case Tn:return n=ot(19,a,t,e),n.elementType=Tn,n.lanes=i,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Xn:case on:u=10;break n;case Rn:u=9;break n;case Sn:u=11;break n;case An:u=14;break n;case Nn:u=16,l=null;break n}u=29,a=Error(c(130,n===null?"null":typeof n,"")),l=null}return t=ot(u,a,t,e),t.elementType=n,t.type=l,t.lanes=i,t}function Na(n,t,a,l){return n=ot(7,n,l,t),n.lanes=a,n}function ju(n,t,a){return n=ot(6,n,null,t),n.lanes=a,n}function Bu(n,t,a){return t=ot(4,n.children!==null?n.children:[],n.key,t),t.lanes=a,t.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},t}var rl=[],cl=0,Ie=null,ni=0,gt=[],yt=0,Ua=null,Ct=1,Xt="";function ka(n,t){rl[cl++]=ni,rl[cl++]=Ie,Ie=n,ni=t}function Mc(n,t,a){gt[yt++]=Ct,gt[yt++]=Xt,gt[yt++]=Ua,Ua=n;var l=Ct;n=Xt;var e=32-it(l)-1;l&=~(1<<e),a+=1;var i=32-it(t)+e;if(30<i){var u=e-e%5;i=(l&(1<<u)-1).toString(32),l>>=u,e-=u,Ct=1<<32-it(t)+e|a<<e|l,Xt=i+n}else Ct=1<<i|a<<e|l,Xt=n}function Yu(n){n.return!==null&&(ka(n,1),Mc(n,1,0))}function Cu(n){for(;n===Ie;)Ie=rl[--cl],rl[cl]=null,ni=rl[--cl],rl[cl]=null;for(;n===Ua;)Ua=gt[--yt],gt[yt]=null,Xt=gt[--yt],gt[yt]=null,Ct=gt[--yt],gt[yt]=null}var $n=null,zn=null,un=!1,Ha=null,Mt=!1,Xu=Error(c(519));function ja(n){var t=Error(c(418,""));throw Jl(pt(t,n)),Xu}function qc(n){var t=n.stateNode,a=n.type,l=n.memoizedProps;switch(t[Vn]=n,t[Wn]=l,a){case"dialog":tn("cancel",t),tn("close",t);break;case"iframe":case"object":case"embed":tn("load",t);break;case"video":case"audio":for(a=0;a<ge.length;a++)tn(ge[a],t);break;case"source":tn("error",t);break;case"img":case"image":case"link":tn("error",t),tn("load",t);break;case"details":tn("toggle",t);break;case"input":tn("invalid",t),Lr(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Xe(t);break;case"select":tn("invalid",t);break;case"textarea":tn("invalid",t),Kr(t,l.value,l.defaultValue,l.children),Xe(t)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||Js(t.textContent,a)?(l.popover!=null&&(tn("beforetoggle",t),tn("toggle",t)),l.onScroll!=null&&tn("scroll",t),l.onScrollEnd!=null&&tn("scrollend",t),l.onClick!=null&&(t.onclick=ki),t=!0):t=!1,t||ja(n)}function Rc(n){for($n=n.return;$n;)switch($n.tag){case 5:case 13:Mt=!1;return;case 27:case 3:Mt=!0;return;default:$n=$n.return}}function Vl(n){if(n!==$n)return!1;if(!un)return Rc(n),un=!0,!1;var t=n.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=n.type,a=!(a!=="form"&&a!=="button")||lr(n.type,n.memoizedProps)),a=!a),a&&zn&&ja(n),Rc(n),t===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(c(317));n:{for(n=n.nextSibling,t=0;n;){if(n.nodeType===8)if(a=n.data,a==="/$"){if(t===0){zn=Tt(n.nextSibling);break n}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;n=n.nextSibling}zn=null}}else t===27?(t=zn,ga(n.type)?(n=or,or=null,zn=n):zn=t):zn=$n?Tt(n.stateNode.nextSibling):null;return!0}function Kl(){zn=$n=null,un=!1}function Nc(){var n=Ha;return n!==null&&(tt===null?tt=n:tt.push.apply(tt,n),Ha=null),n}function Jl(n){Ha===null?Ha=[n]:Ha.push(n)}var Gu=E(null),Ba=null,Gt=null;function la(n,t,a){R(Gu,t._currentValue),t._currentValue=a}function Qt(n){n._currentValue=Gu.current,H(Gu)}function Qu(n,t,a){for(;n!==null;){var l=n.alternate;if((n.childLanes&t)!==t?(n.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),n===a)break;n=n.return}}function Zu(n,t,a,l){var e=n.child;for(e!==null&&(e.return=n);e!==null;){var i=e.dependencies;if(i!==null){var u=e.child;i=i.firstContext;n:for(;i!==null;){var r=i;i=e;for(var d=0;d<t.length;d++)if(r.context===t[d]){i.lanes|=a,r=i.alternate,r!==null&&(r.lanes|=a),Qu(i.return,a,n),l||(u=null);break n}i=r.next}}else if(e.tag===18){if(u=e.return,u===null)throw Error(c(341));u.lanes|=a,i=u.alternate,i!==null&&(i.lanes|=a),Qu(u,a,n),u=null}else u=e.child;if(u!==null)u.return=e;else for(u=e;u!==null;){if(u===n){u=null;break}if(e=u.sibling,e!==null){e.return=u.return,u=e;break}u=u.return}e=u}}function Pl(n,t,a,l){n=null;for(var e=t,i=!1;e!==null;){if(!i){if((e.flags&524288)!==0)i=!0;else if((e.flags&262144)!==0)break}if(e.tag===10){var u=e.alternate;if(u===null)throw Error(c(387));if(u=u.memoizedProps,u!==null){var r=e.type;ut(e.pendingProps.value,u.value)||(n!==null?n.push(r):n=[r])}}else if(e===lt.current){if(u=e.alternate,u===null)throw Error(c(387));u.memoizedState.memoizedState!==e.memoizedState.memoizedState&&(n!==null?n.push(_e):n=[_e])}e=e.return}n!==null&&Zu(t,n,a,l),t.flags|=262144}function ti(n){for(n=n.firstContext;n!==null;){if(!ut(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Ya(n){Ba=n,Gt=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Kn(n){return Uc(Ba,n)}function ai(n,t){return Ba===null&&Ya(n),Uc(n,t)}function Uc(n,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Gt===null){if(n===null)throw Error(c(308));Gt=t,n.dependencies={lanes:0,firstContext:t},n.flags|=524288}else Gt=Gt.next=t;return a}var nh=typeof AbortController<"u"?AbortController:function(){var n=[],t=this.signal={aborted:!1,addEventListener:function(a,l){n.push(l)}};this.abort=function(){t.aborted=!0,n.forEach(function(a){return a()})}},th=o.unstable_scheduleCallback,ah=o.unstable_NormalPriority,Un={$$typeof:on,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function wu(){return{controller:new nh,data:new Map,refCount:0}}function $l(n){n.refCount--,n.refCount===0&&th(ah,function(){n.controller.abort()})}var Wl=null,Lu=0,fl=0,sl=null;function lh(n,t){if(Wl===null){var a=Wl=[];Lu=0,fl=Jo(),sl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Lu++,t.then(kc,kc),t}function kc(){if(--Lu===0&&Wl!==null){sl!==null&&(sl.status="fulfilled");var n=Wl;Wl=null,fl=0,sl=null;for(var t=0;t<n.length;t++)(0,n[t])()}}function eh(n,t){var a=[],l={status:"pending",value:null,reason:null,then:function(e){a.push(e)}};return n.then(function(){l.status="fulfilled",l.value=t;for(var e=0;e<a.length;e++)(0,a[e])(t)},function(e){for(l.status="rejected",l.reason=e,e=0;e<a.length;e++)(0,a[e])(void 0)}),l}var Hc=z.S;z.S=function(n,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&lh(n,t),Hc!==null&&Hc(n,t)};var Ca=E(null);function Vu(){var n=Ca.current;return n!==null?n:mn.pooledCache}function li(n,t){t===null?R(Ca,Ca.current):R(Ca,t.pool)}function jc(){var n=Vu();return n===null?null:{parent:Un._currentValue,pool:n}}var Fl=Error(c(460)),Bc=Error(c(474)),ei=Error(c(542)),Ku={then:function(){}};function Yc(n){return n=n.status,n==="fulfilled"||n==="rejected"}function ii(){}function Cc(n,t,a){switch(a=n[a],a===void 0?n.push(t):a!==t&&(t.then(ii,ii),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw n=t.reason,Gc(n),n;default:if(typeof t.status=="string")t.then(ii,ii);else{if(n=mn,n!==null&&100<n.shellSuspendCounter)throw Error(c(482));n=t,n.status="pending",n.then(function(l){if(t.status==="pending"){var e=t;e.status="fulfilled",e.value=l}},function(l){if(t.status==="pending"){var e=t;e.status="rejected",e.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw n=t.reason,Gc(n),n}throw Il=t,Fl}}var Il=null;function Xc(){if(Il===null)throw Error(c(459));var n=Il;return Il=null,n}function Gc(n){if(n===Fl||n===ei)throw Error(c(483))}var ea=!1;function Ju(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Pu(n,t){n=n.updateQueue,t.updateQueue===n&&(t.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function ia(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function ua(n,t,a){var l=n.updateQueue;if(l===null)return null;if(l=l.shared,(rn&2)!==0){var e=l.pending;return e===null?t.next=t:(t.next=e.next,e.next=t),l.pending=t,t=We(n),Ec(n,null,a),t}return $e(n,l,t,a),We(n)}function ne(n,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=n.pendingLanes,a|=l,t.lanes=a,kr(n,a)}}function $u(n,t){var a=n.updateQueue,l=n.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var e=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var u={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?e=i=u:i=i.next=u,a=a.next}while(a!==null);i===null?e=i=t:i=i.next=t}else e=i=t;a={baseState:l.baseState,firstBaseUpdate:e,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=t:n.next=t,a.lastBaseUpdate=t}var Wu=!1;function te(){if(Wu){var n=sl;if(n!==null)throw n}}function ae(n,t,a,l){Wu=!1;var e=n.updateQueue;ea=!1;var i=e.firstBaseUpdate,u=e.lastBaseUpdate,r=e.shared.pending;if(r!==null){e.shared.pending=null;var d=r,v=d.next;d.next=null,u===null?i=v:u.next=v,u=d;var O=n.alternate;O!==null&&(O=O.updateQueue,r=O.lastBaseUpdate,r!==u&&(r===null?O.firstBaseUpdate=v:r.next=v,O.lastBaseUpdate=d))}if(i!==null){var T=e.baseState;u=0,O=v=d=null,r=i;do{var g=r.lane&-536870913,y=g!==r.lane;if(y?(an&g)===g:(l&g)===g){g!==0&&g===fl&&(Wu=!0),O!==null&&(O=O.next={lane:0,tag:r.tag,payload:r.payload,callback:null,next:null});n:{var Z=n,X=r;g=t;var dn=a;switch(X.tag){case 1:if(Z=X.payload,typeof Z=="function"){T=Z.call(dn,T,g);break n}T=Z;break n;case 3:Z.flags=Z.flags&-65537|128;case 0:if(Z=X.payload,g=typeof Z=="function"?Z.call(dn,T,g):Z,g==null)break n;T=N({},T,g);break n;case 2:ea=!0}}g=r.callback,g!==null&&(n.flags|=64,y&&(n.flags|=8192),y=e.callbacks,y===null?e.callbacks=[g]:y.push(g))}else y={lane:g,tag:r.tag,payload:r.payload,callback:r.callback,next:null},O===null?(v=O=y,d=T):O=O.next=y,u|=g;if(r=r.next,r===null){if(r=e.shared.pending,r===null)break;y=r,r=y.next,y.next=null,e.lastBaseUpdate=y,e.shared.pending=null}}while(!0);O===null&&(d=T),e.baseState=d,e.firstBaseUpdate=v,e.lastBaseUpdate=O,i===null&&(e.shared.lanes=0),ba|=u,n.lanes=u,n.memoizedState=T}}function Qc(n,t){if(typeof n!="function")throw Error(c(191,n));n.call(t)}function Zc(n,t){var a=n.callbacks;if(a!==null)for(n.callbacks=null,n=0;n<a.length;n++)Qc(a[n],t)}var dl=E(null),ui=E(0);function wc(n,t){n=Pt,R(ui,n),R(dl,t),Pt=n|t.baseLanes}function Fu(){R(ui,Pt),R(dl,dl.current)}function Iu(){Pt=ui.current,H(dl),H(ui)}var oa=0,W=null,fn=null,Mn=null,oi=!1,hl=!1,Xa=!1,ri=0,le=0,bl=null,ih=0;function En(){throw Error(c(321))}function no(n,t){if(t===null)return!1;for(var a=0;a<t.length&&a<n.length;a++)if(!ut(n[a],t[a]))return!1;return!0}function to(n,t,a,l,e,i){return oa=i,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,z.H=n===null||n.memoizedState===null?Df:Mf,Xa=!1,i=a(l,e),Xa=!1,hl&&(i=Vc(t,a,l,e)),Lc(n),i}function Lc(n){z.H=bi;var t=fn!==null&&fn.next!==null;if(oa=0,Mn=fn=W=null,oi=!1,le=0,bl=null,t)throw Error(c(300));n===null||Bn||(n=n.dependencies,n!==null&&ti(n)&&(Bn=!0))}function Vc(n,t,a,l){W=n;var e=0;do{if(hl&&(bl=null),le=0,hl=!1,25<=e)throw Error(c(301));if(e+=1,Mn=fn=null,n.updateQueue!=null){var i=n.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}z.H=dh,i=t(a,l)}while(hl);return i}function uh(){var n=z.H,t=n.useState()[0];return t=typeof t.then=="function"?ee(t):t,n=n.useState()[0],(fn!==null?fn.memoizedState:null)!==n&&(W.flags|=1024),t}function ao(){var n=ri!==0;return ri=0,n}function lo(n,t,a){t.updateQueue=n.updateQueue,t.flags&=-2053,n.lanes&=~a}function eo(n){if(oi){for(n=n.memoizedState;n!==null;){var t=n.queue;t!==null&&(t.pending=null),n=n.next}oi=!1}oa=0,Mn=fn=W=null,hl=!1,le=ri=0,bl=null}function In(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Mn===null?W.memoizedState=Mn=n:Mn=Mn.next=n,Mn}function qn(){if(fn===null){var n=W.alternate;n=n!==null?n.memoizedState:null}else n=fn.next;var t=Mn===null?W.memoizedState:Mn.next;if(t!==null)Mn=t,fn=n;else{if(n===null)throw W.alternate===null?Error(c(467)):Error(c(310));fn=n,n={memoizedState:fn.memoizedState,baseState:fn.baseState,baseQueue:fn.baseQueue,queue:fn.queue,next:null},Mn===null?W.memoizedState=Mn=n:Mn=Mn.next=n}return Mn}function io(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ee(n){var t=le;return le+=1,bl===null&&(bl=[]),n=Cc(bl,n,t),t=W,(Mn===null?t.memoizedState:Mn.next)===null&&(t=t.alternate,z.H=t===null||t.memoizedState===null?Df:Mf),n}function ci(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return ee(n);if(n.$$typeof===on)return Kn(n)}throw Error(c(438,String(n)))}function uo(n){var t=null,a=W.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=W.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(e){return e.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=io(),W.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(n),l=0;l<n;l++)a[l]=La;return t.index++,a}function Zt(n,t){return typeof t=="function"?t(n):t}function fi(n){var t=qn();return oo(t,fn,n)}function oo(n,t,a){var l=n.queue;if(l===null)throw Error(c(311));l.lastRenderedReducer=a;var e=n.baseQueue,i=l.pending;if(i!==null){if(e!==null){var u=e.next;e.next=i.next,i.next=u}t.baseQueue=e=i,l.pending=null}if(i=n.baseState,e===null)n.memoizedState=i;else{t=e.next;var r=u=null,d=null,v=t,O=!1;do{var T=v.lane&-536870913;if(T!==v.lane?(an&T)===T:(oa&T)===T){var g=v.revertLane;if(g===0)d!==null&&(d=d.next={lane:0,revertLane:0,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null}),T===fl&&(O=!0);else if((oa&g)===g){v=v.next,g===fl&&(O=!0);continue}else T={lane:0,revertLane:v.revertLane,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null},d===null?(r=d=T,u=i):d=d.next=T,W.lanes|=g,ba|=g;T=v.action,Xa&&a(i,T),i=v.hasEagerState?v.eagerState:a(i,T)}else g={lane:T,revertLane:v.revertLane,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null},d===null?(r=d=g,u=i):d=d.next=g,W.lanes|=T,ba|=T;v=v.next}while(v!==null&&v!==t);if(d===null?u=i:d.next=r,!ut(i,n.memoizedState)&&(Bn=!0,O&&(a=sl,a!==null)))throw a;n.memoizedState=i,n.baseState=u,n.baseQueue=d,l.lastRenderedState=i}return e===null&&(l.lanes=0),[n.memoizedState,l.dispatch]}function ro(n){var t=qn(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=n;var l=a.dispatch,e=a.pending,i=t.memoizedState;if(e!==null){a.pending=null;var u=e=e.next;do i=n(i,u.action),u=u.next;while(u!==e);ut(i,t.memoizedState)||(Bn=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function Kc(n,t,a){var l=W,e=qn(),i=un;if(i){if(a===void 0)throw Error(c(407));a=a()}else a=t();var u=!ut((fn||e).memoizedState,a);u&&(e.memoizedState=a,Bn=!0),e=e.queue;var r=$c.bind(null,l,e,n);if(ie(2048,8,r,[n]),e.getSnapshot!==t||u||Mn!==null&&Mn.memoizedState.tag&1){if(l.flags|=2048,ml(9,si(),Pc.bind(null,l,e,a,t),null),mn===null)throw Error(c(349));i||(oa&124)!==0||Jc(l,t,a)}return a}function Jc(n,t,a){n.flags|=16384,n={getSnapshot:t,value:a},t=W.updateQueue,t===null?(t=io(),W.updateQueue=t,t.stores=[n]):(a=t.stores,a===null?t.stores=[n]:a.push(n))}function Pc(n,t,a,l){t.value=a,t.getSnapshot=l,Wc(t)&&Fc(n)}function $c(n,t,a){return a(function(){Wc(t)&&Fc(n)})}function Wc(n){var t=n.getSnapshot;n=n.value;try{var a=t();return!ut(n,a)}catch{return!0}}function Fc(n){var t=ul(n,2);t!==null&&dt(t,n,2)}function co(n){var t=In();if(typeof n=="function"){var a=n;if(n=a(),Xa){na(!0);try{a()}finally{na(!1)}}}return t.memoizedState=t.baseState=n,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zt,lastRenderedState:n},t}function Ic(n,t,a,l){return n.baseState=a,oo(n,fn,typeof l=="function"?l:Zt)}function oh(n,t,a,l,e){if(hi(n))throw Error(c(485));if(n=t.action,n!==null){var i={payload:e,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};z.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,nf(t,i)):(i.next=a.next,t.pending=a.next=i)}}function nf(n,t){var a=t.action,l=t.payload,e=n.state;if(t.isTransition){var i=z.T,u={};z.T=u;try{var r=a(e,l),d=z.S;d!==null&&d(u,r),tf(n,t,r)}catch(v){fo(n,t,v)}finally{z.T=i}}else try{i=a(e,l),tf(n,t,i)}catch(v){fo(n,t,v)}}function tf(n,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){af(n,t,l)},function(l){return fo(n,t,l)}):af(n,t,a)}function af(n,t,a){t.status="fulfilled",t.value=a,lf(t),n.state=a,t=n.pending,t!==null&&(a=t.next,a===t?n.pending=null:(a=a.next,t.next=a,nf(n,a)))}function fo(n,t,a){var l=n.pending;if(n.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,lf(t),t=t.next;while(t!==l)}n.action=null}function lf(n){n=n.listeners;for(var t=0;t<n.length;t++)(0,n[t])()}function ef(n,t){return t}function uf(n,t){if(un){var a=mn.formState;if(a!==null){n:{var l=W;if(un){if(zn){t:{for(var e=zn,i=Mt;e.nodeType!==8;){if(!i){e=null;break t}if(e=Tt(e.nextSibling),e===null){e=null;break t}}i=e.data,e=i==="F!"||i==="F"?e:null}if(e){zn=Tt(e.nextSibling),l=e.data==="F!";break n}}ja(l)}l=!1}l&&(t=a[0])}}return a=In(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ef,lastRenderedState:t},a.queue=l,a=Tf.bind(null,W,l),l.dispatch=a,l=co(!1),i=po.bind(null,W,!1,l.queue),l=In(),e={state:t,dispatch:null,action:n,pending:null},l.queue=e,a=oh.bind(null,W,e,i,a),e.dispatch=a,l.memoizedState=n,[t,a,!1]}function of(n){var t=qn();return rf(t,fn,n)}function rf(n,t,a){if(t=oo(n,t,ef)[0],n=fi(Zt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=ee(t)}catch(u){throw u===Fl?ei:u}else l=t;t=qn();var e=t.queue,i=e.dispatch;return a!==t.memoizedState&&(W.flags|=2048,ml(9,si(),rh.bind(null,e,a),null)),[l,i,n]}function rh(n,t){n.action=t}function cf(n){var t=qn(),a=fn;if(a!==null)return rf(t,a,n);qn(),t=t.memoizedState,a=qn();var l=a.queue.dispatch;return a.memoizedState=n,[t,l,!1]}function ml(n,t,a,l){return n={tag:n,create:a,deps:l,inst:t,next:null},t=W.updateQueue,t===null&&(t=io(),W.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=n.next=n:(l=a.next,a.next=n,n.next=l,t.lastEffect=n),n}function si(){return{destroy:void 0,resource:void 0}}function ff(){return qn().memoizedState}function di(n,t,a,l){var e=In();l=l===void 0?null:l,W.flags|=n,e.memoizedState=ml(1|t,si(),a,l)}function ie(n,t,a,l){var e=qn();l=l===void 0?null:l;var i=e.memoizedState.inst;fn!==null&&l!==null&&no(l,fn.memoizedState.deps)?e.memoizedState=ml(t,i,a,l):(W.flags|=n,e.memoizedState=ml(1|t,i,a,l))}function sf(n,t){di(8390656,8,n,t)}function df(n,t){ie(2048,8,n,t)}function hf(n,t){return ie(4,2,n,t)}function bf(n,t){return ie(4,4,n,t)}function mf(n,t){if(typeof t=="function"){n=n();var a=t(n);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return n=n(),t.current=n,function(){t.current=null}}function pf(n,t,a){a=a!=null?a.concat([n]):null,ie(4,4,mf.bind(null,t,n),a)}function so(){}function vf(n,t){var a=qn();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&no(t,l[1])?l[0]:(a.memoizedState=[n,t],n)}function gf(n,t){var a=qn();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&no(t,l[1]))return l[0];if(l=n(),Xa){na(!0);try{n()}finally{na(!1)}}return a.memoizedState=[l,t],l}function ho(n,t,a){return a===void 0||(oa&1073741824)!==0?n.memoizedState=t:(n.memoizedState=a,n=Ss(),W.lanes|=n,ba|=n,a)}function yf(n,t,a,l){return ut(a,t)?a:dl.current!==null?(n=ho(n,a,l),ut(n,t)||(Bn=!0),n):(oa&42)===0?(Bn=!0,n.memoizedState=a):(n=Ss(),W.lanes|=n,ba|=n,t)}function xf(n,t,a,l,e){var i=U.p;U.p=i!==0&&8>i?i:8;var u=z.T,r={};z.T=r,po(n,!1,t,a);try{var d=e(),v=z.S;if(v!==null&&v(r,d),d!==null&&typeof d=="object"&&typeof d.then=="function"){var O=eh(d,l);ue(n,t,O,st(n))}else ue(n,t,l,st(n))}catch(T){ue(n,t,{then:function(){},status:"rejected",reason:T},st())}finally{U.p=i,z.T=u}}function ch(){}function bo(n,t,a,l){if(n.tag!==5)throw Error(c(476));var e=Sf(n).queue;xf(n,e,t,Q,a===null?ch:function(){return Of(n),a(l)})}function Sf(n){var t=n.memoizedState;if(t!==null)return t;t={memoizedState:Q,baseState:Q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zt,lastRenderedState:Q},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zt,lastRenderedState:a},next:null},n.memoizedState=t,n=n.alternate,n!==null&&(n.memoizedState=t),t}function Of(n){var t=Sf(n).next.queue;ue(n,t,{},st())}function mo(){return Kn(_e)}function zf(){return qn().memoizedState}function _f(){return qn().memoizedState}function fh(n){for(var t=n.return;t!==null;){switch(t.tag){case 24:case 3:var a=st();n=ia(a);var l=ua(t,n,a);l!==null&&(dt(l,t,a),ne(l,t,a)),t={cache:wu()},n.payload=t;return}t=t.return}}function sh(n,t,a){var l=st();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},hi(n)?Af(t,a):(a=ku(n,t,a,l),a!==null&&(dt(a,n,l),Ef(a,t,l)))}function Tf(n,t,a){var l=st();ue(n,t,a,l)}function ue(n,t,a,l){var e={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(hi(n))Af(t,e);else{var i=n.alternate;if(n.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,r=i(u,a);if(e.hasEagerState=!0,e.eagerState=r,ut(r,u))return $e(n,t,e,0),mn===null&&Pe(),!1}catch{}finally{}if(a=ku(n,t,e,l),a!==null)return dt(a,n,l),Ef(a,t,l),!0}return!1}function po(n,t,a,l){if(l={lane:2,revertLane:Jo(),action:l,hasEagerState:!1,eagerState:null,next:null},hi(n)){if(t)throw Error(c(479))}else t=ku(n,a,l,2),t!==null&&dt(t,n,2)}function hi(n){var t=n.alternate;return n===W||t!==null&&t===W}function Af(n,t){hl=oi=!0;var a=n.pending;a===null?t.next=t:(t.next=a.next,a.next=t),n.pending=t}function Ef(n,t,a){if((a&4194048)!==0){var l=t.lanes;l&=n.pendingLanes,a|=l,t.lanes=a,kr(n,a)}}var bi={readContext:Kn,use:ci,useCallback:En,useContext:En,useEffect:En,useImperativeHandle:En,useLayoutEffect:En,useInsertionEffect:En,useMemo:En,useReducer:En,useRef:En,useState:En,useDebugValue:En,useDeferredValue:En,useTransition:En,useSyncExternalStore:En,useId:En,useHostTransitionStatus:En,useFormState:En,useActionState:En,useOptimistic:En,useMemoCache:En,useCacheRefresh:En},Df={readContext:Kn,use:ci,useCallback:function(n,t){return In().memoizedState=[n,t===void 0?null:t],n},useContext:Kn,useEffect:sf,useImperativeHandle:function(n,t,a){a=a!=null?a.concat([n]):null,di(4194308,4,mf.bind(null,t,n),a)},useLayoutEffect:function(n,t){return di(4194308,4,n,t)},useInsertionEffect:function(n,t){di(4,2,n,t)},useMemo:function(n,t){var a=In();t=t===void 0?null:t;var l=n();if(Xa){na(!0);try{n()}finally{na(!1)}}return a.memoizedState=[l,t],l},useReducer:function(n,t,a){var l=In();if(a!==void 0){var e=a(t);if(Xa){na(!0);try{a(t)}finally{na(!1)}}}else e=t;return l.memoizedState=l.baseState=e,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},l.queue=n,n=n.dispatch=sh.bind(null,W,n),[l.memoizedState,n]},useRef:function(n){var t=In();return n={current:n},t.memoizedState=n},useState:function(n){n=co(n);var t=n.queue,a=Tf.bind(null,W,t);return t.dispatch=a,[n.memoizedState,a]},useDebugValue:so,useDeferredValue:function(n,t){var a=In();return ho(a,n,t)},useTransition:function(){var n=co(!1);return n=xf.bind(null,W,n.queue,!0,!1),In().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,t,a){var l=W,e=In();if(un){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),mn===null)throw Error(c(349));(an&124)!==0||Jc(l,t,a)}e.memoizedState=a;var i={value:a,getSnapshot:t};return e.queue=i,sf($c.bind(null,l,i,n),[n]),l.flags|=2048,ml(9,si(),Pc.bind(null,l,i,a,t),null),a},useId:function(){var n=In(),t=mn.identifierPrefix;if(un){var a=Xt,l=Ct;a=(l&~(1<<32-it(l)-1)).toString(32)+a,t="«"+t+"R"+a,a=ri++,0<a&&(t+="H"+a.toString(32)),t+="»"}else a=ih++,t="«"+t+"r"+a.toString(32)+"»";return n.memoizedState=t},useHostTransitionStatus:mo,useFormState:uf,useActionState:uf,useOptimistic:function(n){var t=In();t.memoizedState=t.baseState=n;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=po.bind(null,W,!0,a),a.dispatch=t,[n,t]},useMemoCache:uo,useCacheRefresh:function(){return In().memoizedState=fh.bind(null,W)}},Mf={readContext:Kn,use:ci,useCallback:vf,useContext:Kn,useEffect:df,useImperativeHandle:pf,useInsertionEffect:hf,useLayoutEffect:bf,useMemo:gf,useReducer:fi,useRef:ff,useState:function(){return fi(Zt)},useDebugValue:so,useDeferredValue:function(n,t){var a=qn();return yf(a,fn.memoizedState,n,t)},useTransition:function(){var n=fi(Zt)[0],t=qn().memoizedState;return[typeof n=="boolean"?n:ee(n),t]},useSyncExternalStore:Kc,useId:zf,useHostTransitionStatus:mo,useFormState:of,useActionState:of,useOptimistic:function(n,t){var a=qn();return Ic(a,fn,n,t)},useMemoCache:uo,useCacheRefresh:_f},dh={readContext:Kn,use:ci,useCallback:vf,useContext:Kn,useEffect:df,useImperativeHandle:pf,useInsertionEffect:hf,useLayoutEffect:bf,useMemo:gf,useReducer:ro,useRef:ff,useState:function(){return ro(Zt)},useDebugValue:so,useDeferredValue:function(n,t){var a=qn();return fn===null?ho(a,n,t):yf(a,fn.memoizedState,n,t)},useTransition:function(){var n=ro(Zt)[0],t=qn().memoizedState;return[typeof n=="boolean"?n:ee(n),t]},useSyncExternalStore:Kc,useId:zf,useHostTransitionStatus:mo,useFormState:cf,useActionState:cf,useOptimistic:function(n,t){var a=qn();return fn!==null?Ic(a,fn,n,t):(a.baseState=n,[n,a.queue.dispatch])},useMemoCache:uo,useCacheRefresh:_f},pl=null,oe=0;function mi(n){var t=oe;return oe+=1,pl===null&&(pl=[]),Cc(pl,n,t)}function re(n,t){t=t.props.ref,n.ref=t!==void 0?t:null}function pi(n,t){throw t.$$typeof===I?Error(c(525)):(n=Object.prototype.toString.call(t),Error(c(31,n==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":n)))}function qf(n){var t=n._init;return t(n._payload)}function Rf(n){function t(m,b){if(n){var p=m.deletions;p===null?(m.deletions=[b],m.flags|=16):p.push(b)}}function a(m,b){if(!n)return null;for(;b!==null;)t(m,b),b=b.sibling;return null}function l(m){for(var b=new Map;m!==null;)m.key!==null?b.set(m.key,m):b.set(m.index,m),m=m.sibling;return b}function e(m,b){return m=Yt(m,b),m.index=0,m.sibling=null,m}function i(m,b,p){return m.index=p,n?(p=m.alternate,p!==null?(p=p.index,p<b?(m.flags|=67108866,b):p):(m.flags|=67108866,b)):(m.flags|=1048576,b)}function u(m){return n&&m.alternate===null&&(m.flags|=67108866),m}function r(m,b,p,_){return b===null||b.tag!==6?(b=ju(p,m.mode,_),b.return=m,b):(b=e(b,p),b.return=m,b)}function d(m,b,p,_){var j=p.type;return j===L?O(m,b,p.props.children,_,p.key):b!==null&&(b.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Nn&&qf(j)===b.type)?(b=e(b,p.props),re(b,p),b.return=m,b):(b=Fe(p.type,p.key,p.props,null,m.mode,_),re(b,p),b.return=m,b)}function v(m,b,p,_){return b===null||b.tag!==4||b.stateNode.containerInfo!==p.containerInfo||b.stateNode.implementation!==p.implementation?(b=Bu(p,m.mode,_),b.return=m,b):(b=e(b,p.children||[]),b.return=m,b)}function O(m,b,p,_,j){return b===null||b.tag!==7?(b=Na(p,m.mode,_,j),b.return=m,b):(b=e(b,p),b.return=m,b)}function T(m,b,p){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return b=ju(""+b,m.mode,p),b.return=m,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case J:return p=Fe(b.type,b.key,b.props,null,m.mode,p),re(p,b),p.return=m,p;case yn:return b=Bu(b,m.mode,p),b.return=m,b;case Nn:var _=b._init;return b=_(b._payload),T(m,b,p)}if(Ln(b)||wn(b))return b=Na(b,m.mode,p,null),b.return=m,b;if(typeof b.then=="function")return T(m,mi(b),p);if(b.$$typeof===on)return T(m,ai(m,b),p);pi(m,b)}return null}function g(m,b,p,_){var j=b!==null?b.key:null;if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return j!==null?null:r(m,b,""+p,_);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case J:return p.key===j?d(m,b,p,_):null;case yn:return p.key===j?v(m,b,p,_):null;case Nn:return j=p._init,p=j(p._payload),g(m,b,p,_)}if(Ln(p)||wn(p))return j!==null?null:O(m,b,p,_,null);if(typeof p.then=="function")return g(m,b,mi(p),_);if(p.$$typeof===on)return g(m,b,ai(m,p),_);pi(m,p)}return null}function y(m,b,p,_,j){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return m=m.get(p)||null,r(b,m,""+_,j);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case J:return m=m.get(_.key===null?p:_.key)||null,d(b,m,_,j);case yn:return m=m.get(_.key===null?p:_.key)||null,v(b,m,_,j);case Nn:var F=_._init;return _=F(_._payload),y(m,b,p,_,j)}if(Ln(_)||wn(_))return m=m.get(p)||null,O(b,m,_,j,null);if(typeof _.then=="function")return y(m,b,p,mi(_),j);if(_.$$typeof===on)return y(m,b,p,ai(b,_),j);pi(b,_)}return null}function Z(m,b,p,_){for(var j=null,F=null,B=b,G=b=0,Cn=null;B!==null&&G<p.length;G++){B.index>G?(Cn=B,B=null):Cn=B.sibling;var en=g(m,B,p[G],_);if(en===null){B===null&&(B=Cn);break}n&&B&&en.alternate===null&&t(m,B),b=i(en,b,G),F===null?j=en:F.sibling=en,F=en,B=Cn}if(G===p.length)return a(m,B),un&&ka(m,G),j;if(B===null){for(;G<p.length;G++)B=T(m,p[G],_),B!==null&&(b=i(B,b,G),F===null?j=B:F.sibling=B,F=B);return un&&ka(m,G),j}for(B=l(B);G<p.length;G++)Cn=y(B,m,G,p[G],_),Cn!==null&&(n&&Cn.alternate!==null&&B.delete(Cn.key===null?G:Cn.key),b=i(Cn,b,G),F===null?j=Cn:F.sibling=Cn,F=Cn);return n&&B.forEach(function(za){return t(m,za)}),un&&ka(m,G),j}function X(m,b,p,_){if(p==null)throw Error(c(151));for(var j=null,F=null,B=b,G=b=0,Cn=null,en=p.next();B!==null&&!en.done;G++,en=p.next()){B.index>G?(Cn=B,B=null):Cn=B.sibling;var za=g(m,B,en.value,_);if(za===null){B===null&&(B=Cn);break}n&&B&&za.alternate===null&&t(m,B),b=i(za,b,G),F===null?j=za:F.sibling=za,F=za,B=Cn}if(en.done)return a(m,B),un&&ka(m,G),j;if(B===null){for(;!en.done;G++,en=p.next())en=T(m,en.value,_),en!==null&&(b=i(en,b,G),F===null?j=en:F.sibling=en,F=en);return un&&ka(m,G),j}for(B=l(B);!en.done;G++,en=p.next())en=y(B,m,G,en.value,_),en!==null&&(n&&en.alternate!==null&&B.delete(en.key===null?G:en.key),b=i(en,b,G),F===null?j=en:F.sibling=en,F=en);return n&&B.forEach(function(hb){return t(m,hb)}),un&&ka(m,G),j}function dn(m,b,p,_){if(typeof p=="object"&&p!==null&&p.type===L&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case J:n:{for(var j=p.key;b!==null;){if(b.key===j){if(j=p.type,j===L){if(b.tag===7){a(m,b.sibling),_=e(b,p.props.children),_.return=m,m=_;break n}}else if(b.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Nn&&qf(j)===b.type){a(m,b.sibling),_=e(b,p.props),re(_,p),_.return=m,m=_;break n}a(m,b);break}else t(m,b);b=b.sibling}p.type===L?(_=Na(p.props.children,m.mode,_,p.key),_.return=m,m=_):(_=Fe(p.type,p.key,p.props,null,m.mode,_),re(_,p),_.return=m,m=_)}return u(m);case yn:n:{for(j=p.key;b!==null;){if(b.key===j)if(b.tag===4&&b.stateNode.containerInfo===p.containerInfo&&b.stateNode.implementation===p.implementation){a(m,b.sibling),_=e(b,p.children||[]),_.return=m,m=_;break n}else{a(m,b);break}else t(m,b);b=b.sibling}_=Bu(p,m.mode,_),_.return=m,m=_}return u(m);case Nn:return j=p._init,p=j(p._payload),dn(m,b,p,_)}if(Ln(p))return Z(m,b,p,_);if(wn(p)){if(j=wn(p),typeof j!="function")throw Error(c(150));return p=j.call(p),X(m,b,p,_)}if(typeof p.then=="function")return dn(m,b,mi(p),_);if(p.$$typeof===on)return dn(m,b,ai(m,p),_);pi(m,p)}return typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint"?(p=""+p,b!==null&&b.tag===6?(a(m,b.sibling),_=e(b,p),_.return=m,m=_):(a(m,b),_=ju(p,m.mode,_),_.return=m,m=_),u(m)):a(m,b)}return function(m,b,p,_){try{oe=0;var j=dn(m,b,p,_);return pl=null,j}catch(B){if(B===Fl||B===ei)throw B;var F=ot(29,B,null,m.mode);return F.lanes=_,F.return=m,F}finally{}}}var vl=Rf(!0),Nf=Rf(!1),xt=E(null),qt=null;function ra(n){var t=n.alternate;R(kn,kn.current&1),R(xt,n),qt===null&&(t===null||dl.current!==null||t.memoizedState!==null)&&(qt=n)}function Uf(n){if(n.tag===22){if(R(kn,kn.current),R(xt,n),qt===null){var t=n.alternate;t!==null&&t.memoizedState!==null&&(qt=n)}}else ca()}function ca(){R(kn,kn.current),R(xt,xt.current)}function wt(n){H(xt),qt===n&&(qt=null),H(kn)}var kn=E(0);function vi(n){for(var t=n;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||ur(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function vo(n,t,a,l){t=n.memoizedState,a=a(l,t),a=a==null?t:N({},t,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var go={enqueueSetState:function(n,t,a){n=n._reactInternals;var l=st(),e=ia(l);e.payload=t,a!=null&&(e.callback=a),t=ua(n,e,l),t!==null&&(dt(t,n,l),ne(t,n,l))},enqueueReplaceState:function(n,t,a){n=n._reactInternals;var l=st(),e=ia(l);e.tag=1,e.payload=t,a!=null&&(e.callback=a),t=ua(n,e,l),t!==null&&(dt(t,n,l),ne(t,n,l))},enqueueForceUpdate:function(n,t){n=n._reactInternals;var a=st(),l=ia(a);l.tag=2,t!=null&&(l.callback=t),t=ua(n,l,a),t!==null&&(dt(t,n,a),ne(t,n,a))}};function kf(n,t,a,l,e,i,u){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(l,i,u):t.prototype&&t.prototype.isPureReactComponent?!wl(a,l)||!wl(e,i):!0}function Hf(n,t,a,l){n=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==n&&go.enqueueReplaceState(t,t.state,null)}function Ga(n,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(n=n.defaultProps){a===t&&(a=N({},a));for(var e in n)a[e]===void 0&&(a[e]=n[e])}return a}var gi=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function jf(n){gi(n)}function Bf(n){console.error(n)}function Yf(n){gi(n)}function yi(n,t){try{var a=n.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Cf(n,t,a){try{var l=n.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function yo(n,t,a){return a=ia(a),a.tag=3,a.payload={element:null},a.callback=function(){yi(n,t)},a}function Xf(n){return n=ia(n),n.tag=3,n}function Gf(n,t,a,l){var e=a.type.getDerivedStateFromError;if(typeof e=="function"){var i=l.value;n.payload=function(){return e(i)},n.callback=function(){Cf(t,a,l)}}var u=a.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(n.callback=function(){Cf(t,a,l),typeof e!="function"&&(ma===null?ma=new Set([this]):ma.add(this));var r=l.stack;this.componentDidCatch(l.value,{componentStack:r!==null?r:""})})}function hh(n,t,a,l,e){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&Pl(t,a,e,!0),a=xt.current,a!==null){switch(a.tag){case 13:return qt===null?Zo():a.alternate===null&&_n===0&&(_n=3),a.flags&=-257,a.flags|=65536,a.lanes=e,l===Ku?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),Lo(n,l,e)),!1;case 22:return a.flags|=65536,l===Ku?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),Lo(n,l,e)),!1}throw Error(c(435,a.tag))}return Lo(n,l,e),Zo(),!1}if(un)return t=xt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=e,l!==Xu&&(n=Error(c(422),{cause:l}),Jl(pt(n,a)))):(l!==Xu&&(t=Error(c(423),{cause:l}),Jl(pt(t,a))),n=n.current.alternate,n.flags|=65536,e&=-e,n.lanes|=e,l=pt(l,a),e=yo(n.stateNode,l,e),$u(n,e),_n!==4&&(_n=2)),!1;var i=Error(c(520),{cause:l});if(i=pt(i,a),me===null?me=[i]:me.push(i),_n!==4&&(_n=2),t===null)return!0;l=pt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,n=e&-e,a.lanes|=n,n=yo(a.stateNode,l,n),$u(a,n),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(ma===null||!ma.has(i))))return a.flags|=65536,e&=-e,a.lanes|=e,e=Xf(e),Gf(e,n,a,l),$u(a,e),!1}a=a.return}while(a!==null);return!1}var Qf=Error(c(461)),Bn=!1;function Gn(n,t,a,l){t.child=n===null?Nf(t,null,a,l):vl(t,n.child,a,l)}function Zf(n,t,a,l,e){a=a.render;var i=t.ref;if("ref"in l){var u={};for(var r in l)r!=="ref"&&(u[r]=l[r])}else u=l;return Ya(t),l=to(n,t,a,u,i,e),r=ao(),n!==null&&!Bn?(lo(n,t,e),Lt(n,t,e)):(un&&r&&Yu(t),t.flags|=1,Gn(n,t,l,e),t.child)}function wf(n,t,a,l,e){if(n===null){var i=a.type;return typeof i=="function"&&!Hu(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,Lf(n,t,i,l,e)):(n=Fe(a.type,null,l,t,t.mode,e),n.ref=t.ref,n.return=t,t.child=n)}if(i=n.child,!Eo(n,e)){var u=i.memoizedProps;if(a=a.compare,a=a!==null?a:wl,a(u,l)&&n.ref===t.ref)return Lt(n,t,e)}return t.flags|=1,n=Yt(i,l),n.ref=t.ref,n.return=t,t.child=n}function Lf(n,t,a,l,e){if(n!==null){var i=n.memoizedProps;if(wl(i,l)&&n.ref===t.ref)if(Bn=!1,t.pendingProps=l=i,Eo(n,e))(n.flags&131072)!==0&&(Bn=!0);else return t.lanes=n.lanes,Lt(n,t,e)}return xo(n,t,a,l,e)}function Vf(n,t,a){var l=t.pendingProps,e=l.children,i=n!==null?n.memoizedState:null;if(l.mode==="hidden"){if((t.flags&128)!==0){if(l=i!==null?i.baseLanes|a:a,n!==null){for(e=t.child=n.child,i=0;e!==null;)i=i|e.lanes|e.childLanes,e=e.sibling;t.childLanes=i&~l}else t.childLanes=0,t.child=null;return Kf(n,t,l,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},n!==null&&li(t,i!==null?i.cachePool:null),i!==null?wc(t,i):Fu(),Uf(t);else return t.lanes=t.childLanes=536870912,Kf(n,t,i!==null?i.baseLanes|a:a,a)}else i!==null?(li(t,i.cachePool),wc(t,i),ca(),t.memoizedState=null):(n!==null&&li(t,null),Fu(),ca());return Gn(n,t,e,a),t.child}function Kf(n,t,a,l){var e=Vu();return e=e===null?null:{parent:Un._currentValue,pool:e},t.memoizedState={baseLanes:a,cachePool:e},n!==null&&li(t,null),Fu(),Uf(t),n!==null&&Pl(n,t,l,!0),null}function xi(n,t){var a=t.ref;if(a===null)n!==null&&n.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(n===null||n.ref!==a)&&(t.flags|=4194816)}}function xo(n,t,a,l,e){return Ya(t),a=to(n,t,a,l,void 0,e),l=ao(),n!==null&&!Bn?(lo(n,t,e),Lt(n,t,e)):(un&&l&&Yu(t),t.flags|=1,Gn(n,t,a,e),t.child)}function Jf(n,t,a,l,e,i){return Ya(t),t.updateQueue=null,a=Vc(t,l,a,e),Lc(n),l=ao(),n!==null&&!Bn?(lo(n,t,i),Lt(n,t,i)):(un&&l&&Yu(t),t.flags|=1,Gn(n,t,a,i),t.child)}function Pf(n,t,a,l,e){if(Ya(t),t.stateNode===null){var i=ol,u=a.contextType;typeof u=="object"&&u!==null&&(i=Kn(u)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=go,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},Ju(t),u=a.contextType,i.context=typeof u=="object"&&u!==null?Kn(u):ol,i.state=t.memoizedState,u=a.getDerivedStateFromProps,typeof u=="function"&&(vo(t,a,u,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&go.enqueueReplaceState(i,i.state,null),ae(t,l,i,e),te(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(n===null){i=t.stateNode;var r=t.memoizedProps,d=Ga(a,r);i.props=d;var v=i.context,O=a.contextType;u=ol,typeof O=="object"&&O!==null&&(u=Kn(O));var T=a.getDerivedStateFromProps;O=typeof T=="function"||typeof i.getSnapshotBeforeUpdate=="function",r=t.pendingProps!==r,O||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r||v!==u)&&Hf(t,i,l,u),ea=!1;var g=t.memoizedState;i.state=g,ae(t,l,i,e),te(),v=t.memoizedState,r||g!==v||ea?(typeof T=="function"&&(vo(t,a,T,l),v=t.memoizedState),(d=ea||kf(t,a,d,l,g,v,u))?(O||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=v),i.props=l,i.state=v,i.context=u,l=d):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,Pu(n,t),u=t.memoizedProps,O=Ga(a,u),i.props=O,T=t.pendingProps,g=i.context,v=a.contextType,d=ol,typeof v=="object"&&v!==null&&(d=Kn(v)),r=a.getDerivedStateFromProps,(v=typeof r=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==T||g!==d)&&Hf(t,i,l,d),ea=!1,g=t.memoizedState,i.state=g,ae(t,l,i,e),te();var y=t.memoizedState;u!==T||g!==y||ea||n!==null&&n.dependencies!==null&&ti(n.dependencies)?(typeof r=="function"&&(vo(t,a,r,l),y=t.memoizedState),(O=ea||kf(t,a,O,l,g,y,d)||n!==null&&n.dependencies!==null&&ti(n.dependencies))?(v||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,y,d),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,y,d)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===n.memoizedProps&&g===n.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===n.memoizedProps&&g===n.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=y),i.props=l,i.state=y,i.context=d,l=O):(typeof i.componentDidUpdate!="function"||u===n.memoizedProps&&g===n.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===n.memoizedProps&&g===n.memoizedState||(t.flags|=1024),l=!1)}return i=l,xi(n,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,n!==null&&l?(t.child=vl(t,n.child,null,e),t.child=vl(t,null,a,e)):Gn(n,t,a,e),t.memoizedState=i.state,n=t.child):n=Lt(n,t,e),n}function $f(n,t,a,l){return Kl(),t.flags|=256,Gn(n,t,a,l),t.child}var So={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Oo(n){return{baseLanes:n,cachePool:jc()}}function zo(n,t,a){return n=n!==null?n.childLanes&~a:0,t&&(n|=St),n}function Wf(n,t,a){var l=t.pendingProps,e=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=n!==null&&n.memoizedState===null?!1:(kn.current&2)!==0),u&&(e=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,n===null){if(un){if(e?ra(t):ca(),un){var r=zn,d;if(d=r){n:{for(d=r,r=Mt;d.nodeType!==8;){if(!r){r=null;break n}if(d=Tt(d.nextSibling),d===null){r=null;break n}}r=d}r!==null?(t.memoizedState={dehydrated:r,treeContext:Ua!==null?{id:Ct,overflow:Xt}:null,retryLane:536870912,hydrationErrors:null},d=ot(18,null,null,0),d.stateNode=r,d.return=t,t.child=d,$n=t,zn=null,d=!0):d=!1}d||ja(t)}if(r=t.memoizedState,r!==null&&(r=r.dehydrated,r!==null))return ur(r)?t.lanes=32:t.lanes=536870912,null;wt(t)}return r=l.children,l=l.fallback,e?(ca(),e=t.mode,r=Si({mode:"hidden",children:r},e),l=Na(l,e,a,null),r.return=t,l.return=t,r.sibling=l,t.child=r,e=t.child,e.memoizedState=Oo(a),e.childLanes=zo(n,u,a),t.memoizedState=So,l):(ra(t),_o(t,r))}if(d=n.memoizedState,d!==null&&(r=d.dehydrated,r!==null)){if(i)t.flags&256?(ra(t),t.flags&=-257,t=To(n,t,a)):t.memoizedState!==null?(ca(),t.child=n.child,t.flags|=128,t=null):(ca(),e=l.fallback,r=t.mode,l=Si({mode:"visible",children:l.children},r),e=Na(e,r,a,null),e.flags|=2,l.return=t,e.return=t,l.sibling=e,t.child=l,vl(t,n.child,null,a),l=t.child,l.memoizedState=Oo(a),l.childLanes=zo(n,u,a),t.memoizedState=So,t=e);else if(ra(t),ur(r)){if(u=r.nextSibling&&r.nextSibling.dataset,u)var v=u.dgst;u=v,l=Error(c(419)),l.stack="",l.digest=u,Jl({value:l,source:null,stack:null}),t=To(n,t,a)}else if(Bn||Pl(n,t,a,!1),u=(a&n.childLanes)!==0,Bn||u){if(u=mn,u!==null&&(l=a&-a,l=(l&42)!==0?1:uu(l),l=(l&(u.suspendedLanes|a))!==0?0:l,l!==0&&l!==d.retryLane))throw d.retryLane=l,ul(n,l),dt(u,n,l),Qf;r.data==="$?"||Zo(),t=To(n,t,a)}else r.data==="$?"?(t.flags|=192,t.child=n.child,t=null):(n=d.treeContext,zn=Tt(r.nextSibling),$n=t,un=!0,Ha=null,Mt=!1,n!==null&&(gt[yt++]=Ct,gt[yt++]=Xt,gt[yt++]=Ua,Ct=n.id,Xt=n.overflow,Ua=t),t=_o(t,l.children),t.flags|=4096);return t}return e?(ca(),e=l.fallback,r=t.mode,d=n.child,v=d.sibling,l=Yt(d,{mode:"hidden",children:l.children}),l.subtreeFlags=d.subtreeFlags&65011712,v!==null?e=Yt(v,e):(e=Na(e,r,a,null),e.flags|=2),e.return=t,l.return=t,l.sibling=e,t.child=l,l=e,e=t.child,r=n.child.memoizedState,r===null?r=Oo(a):(d=r.cachePool,d!==null?(v=Un._currentValue,d=d.parent!==v?{parent:v,pool:v}:d):d=jc(),r={baseLanes:r.baseLanes|a,cachePool:d}),e.memoizedState=r,e.childLanes=zo(n,u,a),t.memoizedState=So,l):(ra(t),a=n.child,n=a.sibling,a=Yt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,n!==null&&(u=t.deletions,u===null?(t.deletions=[n],t.flags|=16):u.push(n)),t.child=a,t.memoizedState=null,a)}function _o(n,t){return t=Si({mode:"visible",children:t},n.mode),t.return=n,n.child=t}function Si(n,t){return n=ot(22,n,null,t),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function To(n,t,a){return vl(t,n.child,null,a),n=_o(t,t.pendingProps.children),n.flags|=2,t.memoizedState=null,n}function Ff(n,t,a){n.lanes|=t;var l=n.alternate;l!==null&&(l.lanes|=t),Qu(n.return,t,a)}function Ao(n,t,a,l,e){var i=n.memoizedState;i===null?n.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:e}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=l,i.tail=a,i.tailMode=e)}function If(n,t,a){var l=t.pendingProps,e=l.revealOrder,i=l.tail;if(Gn(n,t,l.children,a),l=kn.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(n!==null&&(n.flags&128)!==0)n:for(n=t.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Ff(n,a,t);else if(n.tag===19)Ff(n,a,t);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break n;for(;n.sibling===null;){if(n.return===null||n.return===t)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}l&=1}switch(R(kn,l),e){case"forwards":for(a=t.child,e=null;a!==null;)n=a.alternate,n!==null&&vi(n)===null&&(e=a),a=a.sibling;a=e,a===null?(e=t.child,t.child=null):(e=a.sibling,a.sibling=null),Ao(t,!1,e,a,i);break;case"backwards":for(a=null,e=t.child,t.child=null;e!==null;){if(n=e.alternate,n!==null&&vi(n)===null){t.child=e;break}n=e.sibling,e.sibling=a,a=e,e=n}Ao(t,!0,a,null,i);break;case"together":Ao(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Lt(n,t,a){if(n!==null&&(t.dependencies=n.dependencies),ba|=t.lanes,(a&t.childLanes)===0)if(n!==null){if(Pl(n,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(n!==null&&t.child!==n.child)throw Error(c(153));if(t.child!==null){for(n=t.child,a=Yt(n,n.pendingProps),t.child=a,a.return=t;n.sibling!==null;)n=n.sibling,a=a.sibling=Yt(n,n.pendingProps),a.return=t;a.sibling=null}return t.child}function Eo(n,t){return(n.lanes&t)!==0?!0:(n=n.dependencies,!!(n!==null&&ti(n)))}function bh(n,t,a){switch(t.tag){case 3:pn(t,t.stateNode.containerInfo),la(t,Un,n.memoizedState.cache),Kl();break;case 27:case 5:tu(t);break;case 4:pn(t,t.stateNode.containerInfo);break;case 10:la(t,t.type,t.memoizedProps.value);break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(ra(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Wf(n,t,a):(ra(t),n=Lt(n,t,a),n!==null?n.sibling:null);ra(t);break;case 19:var e=(n.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(Pl(n,t,a,!1),l=(a&t.childLanes)!==0),e){if(l)return If(n,t,a);t.flags|=128}if(e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null,e.lastEffect=null),R(kn,kn.current),l)break;return null;case 22:case 23:return t.lanes=0,Vf(n,t,a);case 24:la(t,Un,n.memoizedState.cache)}return Lt(n,t,a)}function ns(n,t,a){if(n!==null)if(n.memoizedProps!==t.pendingProps)Bn=!0;else{if(!Eo(n,a)&&(t.flags&128)===0)return Bn=!1,bh(n,t,a);Bn=(n.flags&131072)!==0}else Bn=!1,un&&(t.flags&1048576)!==0&&Mc(t,ni,t.index);switch(t.lanes=0,t.tag){case 16:n:{n=t.pendingProps;var l=t.elementType,e=l._init;if(l=e(l._payload),t.type=l,typeof l=="function")Hu(l)?(n=Ga(l,n),t.tag=1,t=Pf(null,t,l,n,a)):(t.tag=0,t=xo(null,t,l,n,a));else{if(l!=null){if(e=l.$$typeof,e===Sn){t.tag=11,t=Zf(null,t,l,n,a);break n}else if(e===An){t.tag=14,t=wf(null,t,l,n,a);break n}}throw t=Aa(l)||l,Error(c(306,t,""))}}return t;case 0:return xo(n,t,t.type,t.pendingProps,a);case 1:return l=t.type,e=Ga(l,t.pendingProps),Pf(n,t,l,e,a);case 3:n:{if(pn(t,t.stateNode.containerInfo),n===null)throw Error(c(387));l=t.pendingProps;var i=t.memoizedState;e=i.element,Pu(n,t),ae(t,l,null,a);var u=t.memoizedState;if(l=u.cache,la(t,Un,l),l!==i.cache&&Zu(t,[Un],a,!0),te(),l=u.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=$f(n,t,l,a);break n}else if(l!==e){e=pt(Error(c(424)),t),Jl(e),t=$f(n,t,l,a);break n}else{switch(n=t.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(zn=Tt(n.firstChild),$n=t,un=!0,Ha=null,Mt=!0,a=Nf(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Kl(),l===e){t=Lt(n,t,a);break n}Gn(n,t,l,a)}t=t.child}return t;case 26:return xi(n,t),n===null?(a=ed(t.type,null,t.pendingProps,null))?t.memoizedState=a:un||(a=t.type,n=t.pendingProps,l=Hi(K.current).createElement(a),l[Vn]=t,l[Wn]=n,Zn(l,a,n),jn(l),t.stateNode=l):t.memoizedState=ed(t.type,n.memoizedProps,t.pendingProps,n.memoizedState),null;case 27:return tu(t),n===null&&un&&(l=t.stateNode=td(t.type,t.pendingProps,K.current),$n=t,Mt=!0,e=zn,ga(t.type)?(or=e,zn=Tt(l.firstChild)):zn=e),Gn(n,t,t.pendingProps.children,a),xi(n,t),n===null&&(t.flags|=4194304),t.child;case 5:return n===null&&un&&((e=l=zn)&&(l=Qh(l,t.type,t.pendingProps,Mt),l!==null?(t.stateNode=l,$n=t,zn=Tt(l.firstChild),Mt=!1,e=!0):e=!1),e||ja(t)),tu(t),e=t.type,i=t.pendingProps,u=n!==null?n.memoizedProps:null,l=i.children,lr(e,i)?l=null:u!==null&&lr(e,u)&&(t.flags|=32),t.memoizedState!==null&&(e=to(n,t,uh,null,null,a),_e._currentValue=e),xi(n,t),Gn(n,t,l,a),t.child;case 6:return n===null&&un&&((n=a=zn)&&(a=Zh(a,t.pendingProps,Mt),a!==null?(t.stateNode=a,$n=t,zn=null,n=!0):n=!1),n||ja(t)),null;case 13:return Wf(n,t,a);case 4:return pn(t,t.stateNode.containerInfo),l=t.pendingProps,n===null?t.child=vl(t,null,l,a):Gn(n,t,l,a),t.child;case 11:return Zf(n,t,t.type,t.pendingProps,a);case 7:return Gn(n,t,t.pendingProps,a),t.child;case 8:return Gn(n,t,t.pendingProps.children,a),t.child;case 12:return Gn(n,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,la(t,t.type,l.value),Gn(n,t,l.children,a),t.child;case 9:return e=t.type._context,l=t.pendingProps.children,Ya(t),e=Kn(e),l=l(e),t.flags|=1,Gn(n,t,l,a),t.child;case 14:return wf(n,t,t.type,t.pendingProps,a);case 15:return Lf(n,t,t.type,t.pendingProps,a);case 19:return If(n,t,a);case 31:return l=t.pendingProps,a=t.mode,l={mode:l.mode,children:l.children},n===null?(a=Si(l,a),a.ref=t.ref,t.child=a,a.return=t,t=a):(a=Yt(n.child,l),a.ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return Vf(n,t,a);case 24:return Ya(t),l=Kn(Un),n===null?(e=Vu(),e===null&&(e=mn,i=wu(),e.pooledCache=i,i.refCount++,i!==null&&(e.pooledCacheLanes|=a),e=i),t.memoizedState={parent:l,cache:e},Ju(t),la(t,Un,e)):((n.lanes&a)!==0&&(Pu(n,t),ae(t,null,null,a),te()),e=n.memoizedState,i=t.memoizedState,e.parent!==l?(e={parent:l,cache:l},t.memoizedState=e,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=e),la(t,Un,l)):(l=i.cache,la(t,Un,l),l!==e.cache&&Zu(t,[Un],a,!0))),Gn(n,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function Vt(n){n.flags|=4}function ts(n,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!cd(t)){if(t=xt.current,t!==null&&((an&4194048)===an?qt!==null:(an&62914560)!==an&&(an&536870912)===0||t!==qt))throw Il=Ku,Bc;n.flags|=8192}}function Oi(n,t){t!==null&&(n.flags|=4),n.flags&16384&&(t=n.tag!==22?Nr():536870912,n.lanes|=t,Sl|=t)}function ce(n,t){if(!un)switch(n.tailMode){case"hidden":t=n.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||n.tail===null?n.tail=null:n.tail.sibling=null:l.sibling=null}}function xn(n){var t=n.alternate!==null&&n.alternate.child===n.child,a=0,l=0;if(t)for(var e=n.child;e!==null;)a|=e.lanes|e.childLanes,l|=e.subtreeFlags&65011712,l|=e.flags&65011712,e.return=n,e=e.sibling;else for(e=n.child;e!==null;)a|=e.lanes|e.childLanes,l|=e.subtreeFlags,l|=e.flags,e.return=n,e=e.sibling;return n.subtreeFlags|=l,n.childLanes=a,t}function mh(n,t,a){var l=t.pendingProps;switch(Cu(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xn(t),null;case 1:return xn(t),null;case 3:return a=t.stateNode,l=null,n!==null&&(l=n.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Qt(Un),It(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(n===null||n.child===null)&&(Vl(t)?Vt(t):n===null||n.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Nc())),xn(t),null;case 26:return a=t.memoizedState,n===null?(Vt(t),a!==null?(xn(t),ts(t,a)):(xn(t),t.flags&=-16777217)):a?a!==n.memoizedState?(Vt(t),xn(t),ts(t,a)):(xn(t),t.flags&=-16777217):(n.memoizedProps!==l&&Vt(t),xn(t),t.flags&=-16777217),null;case 27:Ue(t),a=K.current;var e=t.type;if(n!==null&&t.stateNode!=null)n.memoizedProps!==l&&Vt(t);else{if(!l){if(t.stateNode===null)throw Error(c(166));return xn(t),null}n=C.current,Vl(t)?qc(t):(n=td(e,l,a),t.stateNode=n,Vt(t))}return xn(t),null;case 5:if(Ue(t),a=t.type,n!==null&&t.stateNode!=null)n.memoizedProps!==l&&Vt(t);else{if(!l){if(t.stateNode===null)throw Error(c(166));return xn(t),null}if(n=C.current,Vl(t))qc(t);else{switch(e=Hi(K.current),n){case 1:n=e.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:n=e.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":n=e.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":n=e.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":n=e.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof l.is=="string"?e.createElement("select",{is:l.is}):e.createElement("select"),l.multiple?n.multiple=!0:l.size&&(n.size=l.size);break;default:n=typeof l.is=="string"?e.createElement(a,{is:l.is}):e.createElement(a)}}n[Vn]=t,n[Wn]=l;n:for(e=t.child;e!==null;){if(e.tag===5||e.tag===6)n.appendChild(e.stateNode);else if(e.tag!==4&&e.tag!==27&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break n;for(;e.sibling===null;){if(e.return===null||e.return===t)break n;e=e.return}e.sibling.return=e.return,e=e.sibling}t.stateNode=n;n:switch(Zn(n,a,l),a){case"button":case"input":case"select":case"textarea":n=!!l.autoFocus;break n;case"img":n=!0;break n;default:n=!1}n&&Vt(t)}}return xn(t),t.flags&=-16777217,null;case 6:if(n&&t.stateNode!=null)n.memoizedProps!==l&&Vt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(c(166));if(n=K.current,Vl(t)){if(n=t.stateNode,a=t.memoizedProps,l=null,e=$n,e!==null)switch(e.tag){case 27:case 5:l=e.memoizedProps}n[Vn]=t,n=!!(n.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Js(n.nodeValue,a)),n||ja(t)}else n=Hi(n).createTextNode(l),n[Vn]=t,t.stateNode=n}return xn(t),null;case 13:if(l=t.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(e=Vl(t),l!==null&&l.dehydrated!==null){if(n===null){if(!e)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e[Vn]=t}else Kl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;xn(t),e=!1}else e=Nc(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=e),e=!0;if(!e)return t.flags&256?(wt(t),t):(wt(t),null)}if(wt(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=l!==null,n=n!==null&&n.memoizedState!==null,a){l=t.child,e=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(e=l.alternate.memoizedState.cachePool.pool);var i=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==e&&(l.flags|=2048)}return a!==n&&a&&(t.child.flags|=8192),Oi(t,t.updateQueue),xn(t),null;case 4:return It(),n===null&&Fo(t.stateNode.containerInfo),xn(t),null;case 10:return Qt(t.type),xn(t),null;case 19:if(H(kn),e=t.memoizedState,e===null)return xn(t),null;if(l=(t.flags&128)!==0,i=e.rendering,i===null)if(l)ce(e,!1);else{if(_n!==0||n!==null&&(n.flags&128)!==0)for(n=t.child;n!==null;){if(i=vi(n),i!==null){for(t.flags|=128,ce(e,!1),n=i.updateQueue,t.updateQueue=n,Oi(t,n),t.subtreeFlags=0,n=a,a=t.child;a!==null;)Dc(a,n),a=a.sibling;return R(kn,kn.current&1|2),t.child}n=n.sibling}e.tail!==null&&Dt()>Ti&&(t.flags|=128,l=!0,ce(e,!1),t.lanes=4194304)}else{if(!l)if(n=vi(i),n!==null){if(t.flags|=128,l=!0,n=n.updateQueue,t.updateQueue=n,Oi(t,n),ce(e,!0),e.tail===null&&e.tailMode==="hidden"&&!i.alternate&&!un)return xn(t),null}else 2*Dt()-e.renderingStartTime>Ti&&a!==536870912&&(t.flags|=128,l=!0,ce(e,!1),t.lanes=4194304);e.isBackwards?(i.sibling=t.child,t.child=i):(n=e.last,n!==null?n.sibling=i:t.child=i,e.last=i)}return e.tail!==null?(t=e.tail,e.rendering=t,e.tail=t.sibling,e.renderingStartTime=Dt(),t.sibling=null,n=kn.current,R(kn,l?n&1|2:n&1),t):(xn(t),null);case 22:case 23:return wt(t),Iu(),l=t.memoizedState!==null,n!==null?n.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(xn(t),t.subtreeFlags&6&&(t.flags|=8192)):xn(t),a=t.updateQueue,a!==null&&Oi(t,a.retryQueue),a=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),n!==null&&H(Ca),null;case 24:return a=null,n!==null&&(a=n.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Qt(Un),xn(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function ph(n,t){switch(Cu(t),t.tag){case 1:return n=t.flags,n&65536?(t.flags=n&-65537|128,t):null;case 3:return Qt(Un),It(),n=t.flags,(n&65536)!==0&&(n&128)===0?(t.flags=n&-65537|128,t):null;case 26:case 27:case 5:return Ue(t),null;case 13:if(wt(t),n=t.memoizedState,n!==null&&n.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Kl()}return n=t.flags,n&65536?(t.flags=n&-65537|128,t):null;case 19:return H(kn),null;case 4:return It(),null;case 10:return Qt(t.type),null;case 22:case 23:return wt(t),Iu(),n!==null&&H(Ca),n=t.flags,n&65536?(t.flags=n&-65537|128,t):null;case 24:return Qt(Un),null;case 25:return null;default:return null}}function as(n,t){switch(Cu(t),t.tag){case 3:Qt(Un),It();break;case 26:case 27:case 5:Ue(t);break;case 4:It();break;case 13:wt(t);break;case 19:H(kn);break;case 10:Qt(t.type);break;case 22:case 23:wt(t),Iu(),n!==null&&H(Ca);break;case 24:Qt(Un)}}function fe(n,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var e=l.next;a=e;do{if((a.tag&n)===n){l=void 0;var i=a.create,u=a.inst;l=i(),u.destroy=l}a=a.next}while(a!==e)}}catch(r){bn(t,t.return,r)}}function fa(n,t,a){try{var l=t.updateQueue,e=l!==null?l.lastEffect:null;if(e!==null){var i=e.next;l=i;do{if((l.tag&n)===n){var u=l.inst,r=u.destroy;if(r!==void 0){u.destroy=void 0,e=t;var d=a,v=r;try{v()}catch(O){bn(e,d,O)}}}l=l.next}while(l!==i)}}catch(O){bn(t,t.return,O)}}function ls(n){var t=n.updateQueue;if(t!==null){var a=n.stateNode;try{Zc(t,a)}catch(l){bn(n,n.return,l)}}}function es(n,t,a){a.props=Ga(n.type,n.memoizedProps),a.state=n.memoizedState;try{a.componentWillUnmount()}catch(l){bn(n,t,l)}}function se(n,t){try{var a=n.ref;if(a!==null){switch(n.tag){case 26:case 27:case 5:var l=n.stateNode;break;case 30:l=n.stateNode;break;default:l=n.stateNode}typeof a=="function"?n.refCleanup=a(l):a.current=l}}catch(e){bn(n,t,e)}}function Rt(n,t){var a=n.ref,l=n.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(e){bn(n,t,e)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(e){bn(n,t,e)}else a.current=null}function is(n){var t=n.type,a=n.memoizedProps,l=n.stateNode;try{n:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break n;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(e){bn(n,n.return,e)}}function Do(n,t,a){try{var l=n.stateNode;Bh(l,n.type,a,t),l[Wn]=t}catch(e){bn(n,n.return,e)}}function us(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&ga(n.type)||n.tag===4}function Mo(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||us(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&ga(n.type)||n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function qo(n,t,a){var l=n.tag;if(l===5||l===6)n=n.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(n,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(n),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=ki));else if(l!==4&&(l===27&&ga(n.type)&&(a=n.stateNode,t=null),n=n.child,n!==null))for(qo(n,t,a),n=n.sibling;n!==null;)qo(n,t,a),n=n.sibling}function zi(n,t,a){var l=n.tag;if(l===5||l===6)n=n.stateNode,t?a.insertBefore(n,t):a.appendChild(n);else if(l!==4&&(l===27&&ga(n.type)&&(a=n.stateNode),n=n.child,n!==null))for(zi(n,t,a),n=n.sibling;n!==null;)zi(n,t,a),n=n.sibling}function os(n){var t=n.stateNode,a=n.memoizedProps;try{for(var l=n.type,e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Zn(t,l,a),t[Vn]=n,t[Wn]=a}catch(i){bn(n,n.return,i)}}var Kt=!1,Dn=!1,Ro=!1,rs=typeof WeakSet=="function"?WeakSet:Set,Yn=null;function vh(n,t){if(n=n.containerInfo,tr=Gi,n=gc(n),Du(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else n:{a=(a=n.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var e=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break n}var u=0,r=-1,d=-1,v=0,O=0,T=n,g=null;t:for(;;){for(var y;T!==a||e!==0&&T.nodeType!==3||(r=u+e),T!==i||l!==0&&T.nodeType!==3||(d=u+l),T.nodeType===3&&(u+=T.nodeValue.length),(y=T.firstChild)!==null;)g=T,T=y;for(;;){if(T===n)break t;if(g===a&&++v===e&&(r=u),g===i&&++O===l&&(d=u),(y=T.nextSibling)!==null)break;T=g,g=T.parentNode}T=y}a=r===-1||d===-1?null:{start:r,end:d}}else a=null}a=a||{start:0,end:0}}else a=null;for(ar={focusedElem:n,selectionRange:a},Gi=!1,Yn=t;Yn!==null;)if(t=Yn,n=t.child,(t.subtreeFlags&1024)!==0&&n!==null)n.return=t,Yn=n;else for(;Yn!==null;){switch(t=Yn,i=t.alternate,n=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&i!==null){n=void 0,a=t,e=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var Z=Ga(a.type,e,a.elementType===a.type);n=l.getSnapshotBeforeUpdate(Z,i),l.__reactInternalSnapshotBeforeUpdate=n}catch(X){bn(a,a.return,X)}}break;case 3:if((n&1024)!==0){if(n=t.stateNode.containerInfo,a=n.nodeType,a===9)ir(n);else if(a===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":ir(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(c(163))}if(n=t.sibling,n!==null){n.return=t.return,Yn=n;break}Yn=t.return}}function cs(n,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:sa(n,a),l&4&&fe(5,a);break;case 1:if(sa(n,a),l&4)if(n=a.stateNode,t===null)try{n.componentDidMount()}catch(u){bn(a,a.return,u)}else{var e=Ga(a.type,t.memoizedProps);t=t.memoizedState;try{n.componentDidUpdate(e,t,n.__reactInternalSnapshotBeforeUpdate)}catch(u){bn(a,a.return,u)}}l&64&&ls(a),l&512&&se(a,a.return);break;case 3:if(sa(n,a),l&64&&(n=a.updateQueue,n!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Zc(n,t)}catch(u){bn(a,a.return,u)}}break;case 27:t===null&&l&4&&os(a);case 26:case 5:sa(n,a),t===null&&l&4&&is(a),l&512&&se(a,a.return);break;case 12:sa(n,a);break;case 13:sa(n,a),l&4&&ds(n,a),l&64&&(n=a.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(a=Ah.bind(null,a),wh(n,a))));break;case 22:if(l=a.memoizedState!==null||Kt,!l){t=t!==null&&t.memoizedState!==null||Dn,e=Kt;var i=Dn;Kt=l,(Dn=t)&&!i?da(n,a,(a.subtreeFlags&8772)!==0):sa(n,a),Kt=e,Dn=i}break;case 30:break;default:sa(n,a)}}function fs(n){var t=n.alternate;t!==null&&(n.alternate=null,fs(t)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(t=n.stateNode,t!==null&&cu(t)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var vn=null,nt=!1;function Jt(n,t,a){for(a=a.child;a!==null;)ss(n,t,a),a=a.sibling}function ss(n,t,a){if(et&&typeof et.onCommitFiberUnmount=="function")try{et.onCommitFiberUnmount(Nl,a)}catch{}switch(a.tag){case 26:Dn||Rt(a,t),Jt(n,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Dn||Rt(a,t);var l=vn,e=nt;ga(a.type)&&(vn=a.stateNode,nt=!1),Jt(n,t,a),xe(a.stateNode),vn=l,nt=e;break;case 5:Dn||Rt(a,t);case 6:if(l=vn,e=nt,vn=null,Jt(n,t,a),vn=l,nt=e,vn!==null)if(nt)try{(vn.nodeType===9?vn.body:vn.nodeName==="HTML"?vn.ownerDocument.body:vn).removeChild(a.stateNode)}catch(i){bn(a,t,i)}else try{vn.removeChild(a.stateNode)}catch(i){bn(a,t,i)}break;case 18:vn!==null&&(nt?(n=vn,Is(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,a.stateNode),De(n)):Is(vn,a.stateNode));break;case 4:l=vn,e=nt,vn=a.stateNode.containerInfo,nt=!0,Jt(n,t,a),vn=l,nt=e;break;case 0:case 11:case 14:case 15:Dn||fa(2,a,t),Dn||fa(4,a,t),Jt(n,t,a);break;case 1:Dn||(Rt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&es(a,t,l)),Jt(n,t,a);break;case 21:Jt(n,t,a);break;case 22:Dn=(l=Dn)||a.memoizedState!==null,Jt(n,t,a),Dn=l;break;default:Jt(n,t,a)}}function ds(n,t){if(t.memoizedState===null&&(n=t.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{De(n)}catch(a){bn(t,t.return,a)}}function gh(n){switch(n.tag){case 13:case 19:var t=n.stateNode;return t===null&&(t=n.stateNode=new rs),t;case 22:return n=n.stateNode,t=n._retryCache,t===null&&(t=n._retryCache=new rs),t;default:throw Error(c(435,n.tag))}}function No(n,t){var a=gh(n);t.forEach(function(l){var e=Eh.bind(null,n,l);a.has(l)||(a.add(l),l.then(e,e))})}function rt(n,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var e=a[l],i=n,u=t,r=u;n:for(;r!==null;){switch(r.tag){case 27:if(ga(r.type)){vn=r.stateNode,nt=!1;break n}break;case 5:vn=r.stateNode,nt=!1;break n;case 3:case 4:vn=r.stateNode.containerInfo,nt=!0;break n}r=r.return}if(vn===null)throw Error(c(160));ss(i,u,e),vn=null,nt=!1,i=e.alternate,i!==null&&(i.return=null),e.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)hs(t,n),t=t.sibling}var _t=null;function hs(n,t){var a=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:rt(t,n),ct(n),l&4&&(fa(3,n,n.return),fe(3,n),fa(5,n,n.return));break;case 1:rt(t,n),ct(n),l&512&&(Dn||a===null||Rt(a,a.return)),l&64&&Kt&&(n=n.updateQueue,n!==null&&(l=n.callbacks,l!==null&&(a=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var e=_t;if(rt(t,n),ct(n),l&512&&(Dn||a===null||Rt(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=n.memoizedState,a===null)if(l===null)if(n.stateNode===null){n:{l=n.type,a=n.memoizedProps,e=e.ownerDocument||e;t:switch(l){case"title":i=e.getElementsByTagName("title")[0],(!i||i[Hl]||i[Vn]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=e.createElement(l),e.head.insertBefore(i,e.querySelector("head > title"))),Zn(i,l,a),i[Vn]=n,jn(i),l=i;break n;case"link":var u=od("link","href",e).get(l+(a.href||""));if(u){for(var r=0;r<u.length;r++)if(i=u[r],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(r,1);break t}}i=e.createElement(l),Zn(i,l,a),e.head.appendChild(i);break;case"meta":if(u=od("meta","content",e).get(l+(a.content||""))){for(r=0;r<u.length;r++)if(i=u[r],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(r,1);break t}}i=e.createElement(l),Zn(i,l,a),e.head.appendChild(i);break;default:throw Error(c(468,l))}i[Vn]=n,jn(i),l=i}n.stateNode=l}else rd(e,n.type,n.stateNode);else n.stateNode=ud(e,l,n.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?rd(e,n.type,n.stateNode):ud(e,l,n.memoizedProps)):l===null&&n.stateNode!==null&&Do(n,n.memoizedProps,a.memoizedProps)}break;case 27:rt(t,n),ct(n),l&512&&(Dn||a===null||Rt(a,a.return)),a!==null&&l&4&&Do(n,n.memoizedProps,a.memoizedProps);break;case 5:if(rt(t,n),ct(n),l&512&&(Dn||a===null||Rt(a,a.return)),n.flags&32){e=n.stateNode;try{Ia(e,"")}catch(y){bn(n,n.return,y)}}l&4&&n.stateNode!=null&&(e=n.memoizedProps,Do(n,e,a!==null?a.memoizedProps:e)),l&1024&&(Ro=!0);break;case 6:if(rt(t,n),ct(n),l&4){if(n.stateNode===null)throw Error(c(162));l=n.memoizedProps,a=n.stateNode;try{a.nodeValue=l}catch(y){bn(n,n.return,y)}}break;case 3:if(Yi=null,e=_t,_t=ji(t.containerInfo),rt(t,n),_t=e,ct(n),l&4&&a!==null&&a.memoizedState.isDehydrated)try{De(t.containerInfo)}catch(y){bn(n,n.return,y)}Ro&&(Ro=!1,bs(n));break;case 4:l=_t,_t=ji(n.stateNode.containerInfo),rt(t,n),ct(n),_t=l;break;case 12:rt(t,n),ct(n);break;case 13:rt(t,n),ct(n),n.child.flags&8192&&n.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Yo=Dt()),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,No(n,l)));break;case 22:e=n.memoizedState!==null;var d=a!==null&&a.memoizedState!==null,v=Kt,O=Dn;if(Kt=v||e,Dn=O||d,rt(t,n),Dn=O,Kt=v,ct(n),l&8192)n:for(t=n.stateNode,t._visibility=e?t._visibility&-2:t._visibility|1,e&&(a===null||d||Kt||Dn||Qa(n)),a=null,t=n;;){if(t.tag===5||t.tag===26){if(a===null){d=a=t;try{if(i=d.stateNode,e)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{r=d.stateNode;var T=d.memoizedProps.style,g=T!=null&&T.hasOwnProperty("display")?T.display:null;r.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(y){bn(d,d.return,y)}}}else if(t.tag===6){if(a===null){d=t;try{d.stateNode.nodeValue=e?"":d.memoizedProps}catch(y){bn(d,d.return,y)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===n)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break n;for(;t.sibling===null;){if(t.return===null||t.return===n)break n;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=n.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,No(n,a))));break;case 19:rt(t,n),ct(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,No(n,l)));break;case 30:break;case 21:break;default:rt(t,n),ct(n)}}function ct(n){var t=n.flags;if(t&2){try{for(var a,l=n.return;l!==null;){if(us(l)){a=l;break}l=l.return}if(a==null)throw Error(c(160));switch(a.tag){case 27:var e=a.stateNode,i=Mo(n);zi(n,i,e);break;case 5:var u=a.stateNode;a.flags&32&&(Ia(u,""),a.flags&=-33);var r=Mo(n);zi(n,r,u);break;case 3:case 4:var d=a.stateNode.containerInfo,v=Mo(n);qo(n,v,d);break;default:throw Error(c(161))}}catch(O){bn(n,n.return,O)}n.flags&=-3}t&4096&&(n.flags&=-4097)}function bs(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var t=n;bs(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),n=n.sibling}}function sa(n,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)cs(n,t.alternate,t),t=t.sibling}function Qa(n){for(n=n.child;n!==null;){var t=n;switch(t.tag){case 0:case 11:case 14:case 15:fa(4,t,t.return),Qa(t);break;case 1:Rt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&es(t,t.return,a),Qa(t);break;case 27:xe(t.stateNode);case 26:case 5:Rt(t,t.return),Qa(t);break;case 22:t.memoizedState===null&&Qa(t);break;case 30:Qa(t);break;default:Qa(t)}n=n.sibling}}function da(n,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,e=n,i=t,u=i.flags;switch(i.tag){case 0:case 11:case 15:da(e,i,a),fe(4,i);break;case 1:if(da(e,i,a),l=i,e=l.stateNode,typeof e.componentDidMount=="function")try{e.componentDidMount()}catch(v){bn(l,l.return,v)}if(l=i,e=l.updateQueue,e!==null){var r=l.stateNode;try{var d=e.shared.hiddenCallbacks;if(d!==null)for(e.shared.hiddenCallbacks=null,e=0;e<d.length;e++)Qc(d[e],r)}catch(v){bn(l,l.return,v)}}a&&u&64&&ls(i),se(i,i.return);break;case 27:os(i);case 26:case 5:da(e,i,a),a&&l===null&&u&4&&is(i),se(i,i.return);break;case 12:da(e,i,a);break;case 13:da(e,i,a),a&&u&4&&ds(e,i);break;case 22:i.memoizedState===null&&da(e,i,a),se(i,i.return);break;case 30:break;default:da(e,i,a)}t=t.sibling}}function Uo(n,t){var a=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(n!=null&&n.refCount++,a!=null&&$l(a))}function ko(n,t){n=null,t.alternate!==null&&(n=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==n&&(t.refCount++,n!=null&&$l(n))}function Nt(n,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ms(n,t,a,l),t=t.sibling}function ms(n,t,a,l){var e=t.flags;switch(t.tag){case 0:case 11:case 15:Nt(n,t,a,l),e&2048&&fe(9,t);break;case 1:Nt(n,t,a,l);break;case 3:Nt(n,t,a,l),e&2048&&(n=null,t.alternate!==null&&(n=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==n&&(t.refCount++,n!=null&&$l(n)));break;case 12:if(e&2048){Nt(n,t,a,l),n=t.stateNode;try{var i=t.memoizedProps,u=i.id,r=i.onPostCommit;typeof r=="function"&&r(u,t.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(d){bn(t,t.return,d)}}else Nt(n,t,a,l);break;case 13:Nt(n,t,a,l);break;case 23:break;case 22:i=t.stateNode,u=t.alternate,t.memoizedState!==null?i._visibility&2?Nt(n,t,a,l):de(n,t):i._visibility&2?Nt(n,t,a,l):(i._visibility|=2,gl(n,t,a,l,(t.subtreeFlags&10256)!==0)),e&2048&&Uo(u,t);break;case 24:Nt(n,t,a,l),e&2048&&ko(t.alternate,t);break;default:Nt(n,t,a,l)}}function gl(n,t,a,l,e){for(e=e&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var i=n,u=t,r=a,d=l,v=u.flags;switch(u.tag){case 0:case 11:case 15:gl(i,u,r,d,e),fe(8,u);break;case 23:break;case 22:var O=u.stateNode;u.memoizedState!==null?O._visibility&2?gl(i,u,r,d,e):de(i,u):(O._visibility|=2,gl(i,u,r,d,e)),e&&v&2048&&Uo(u.alternate,u);break;case 24:gl(i,u,r,d,e),e&&v&2048&&ko(u.alternate,u);break;default:gl(i,u,r,d,e)}t=t.sibling}}function de(n,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=n,l=t,e=l.flags;switch(l.tag){case 22:de(a,l),e&2048&&Uo(l.alternate,l);break;case 24:de(a,l),e&2048&&ko(l.alternate,l);break;default:de(a,l)}t=t.sibling}}var he=8192;function yl(n){if(n.subtreeFlags&he)for(n=n.child;n!==null;)ps(n),n=n.sibling}function ps(n){switch(n.tag){case 26:yl(n),n.flags&he&&n.memoizedState!==null&&lb(_t,n.memoizedState,n.memoizedProps);break;case 5:yl(n);break;case 3:case 4:var t=_t;_t=ji(n.stateNode.containerInfo),yl(n),_t=t;break;case 22:n.memoizedState===null&&(t=n.alternate,t!==null&&t.memoizedState!==null?(t=he,he=16777216,yl(n),he=t):yl(n));break;default:yl(n)}}function vs(n){var t=n.alternate;if(t!==null&&(n=t.child,n!==null)){t.child=null;do t=n.sibling,n.sibling=null,n=t;while(n!==null)}}function be(n){var t=n.deletions;if((n.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Yn=l,ys(l,n)}vs(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)gs(n),n=n.sibling}function gs(n){switch(n.tag){case 0:case 11:case 15:be(n),n.flags&2048&&fa(9,n,n.return);break;case 3:be(n);break;case 12:be(n);break;case 22:var t=n.stateNode;n.memoizedState!==null&&t._visibility&2&&(n.return===null||n.return.tag!==13)?(t._visibility&=-3,_i(n)):be(n);break;default:be(n)}}function _i(n){var t=n.deletions;if((n.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Yn=l,ys(l,n)}vs(n)}for(n=n.child;n!==null;){switch(t=n,t.tag){case 0:case 11:case 15:fa(8,t,t.return),_i(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,_i(t));break;default:_i(t)}n=n.sibling}}function ys(n,t){for(;Yn!==null;){var a=Yn;switch(a.tag){case 0:case 11:case 15:fa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:$l(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Yn=l;else n:for(a=n;Yn!==null;){l=Yn;var e=l.sibling,i=l.return;if(fs(l),l===a){Yn=null;break n}if(e!==null){e.return=i,Yn=e;break n}Yn=i}}}var yh={getCacheForType:function(n){var t=Kn(Un),a=t.data.get(n);return a===void 0&&(a=n(),t.data.set(n,a)),a}},xh=typeof WeakMap=="function"?WeakMap:Map,rn=0,mn=null,nn=null,an=0,cn=0,ft=null,ha=!1,xl=!1,Ho=!1,Pt=0,_n=0,ba=0,Za=0,jo=0,St=0,Sl=0,me=null,tt=null,Bo=!1,Yo=0,Ti=1/0,Ai=null,ma=null,Qn=0,pa=null,Ol=null,zl=0,Co=0,Xo=null,xs=null,pe=0,Go=null;function st(){if((rn&2)!==0&&an!==0)return an&-an;if(z.T!==null){var n=fl;return n!==0?n:Jo()}return Hr()}function Ss(){St===0&&(St=(an&536870912)===0||un?Rr():536870912);var n=xt.current;return n!==null&&(n.flags|=32),St}function dt(n,t,a){(n===mn&&(cn===2||cn===9)||n.cancelPendingCommit!==null)&&(_l(n,0),va(n,an,St,!1)),kl(n,a),((rn&2)===0||n!==mn)&&(n===mn&&((rn&2)===0&&(Za|=a),_n===4&&va(n,an,St,!1)),Ut(n))}function Os(n,t,a){if((rn&6)!==0)throw Error(c(327));var l=!a&&(t&124)===0&&(t&n.expiredLanes)===0||Ul(n,t),e=l?zh(n,t):wo(n,t,!0),i=l;do{if(e===0){xl&&!l&&va(n,t,0,!1);break}else{if(a=n.current.alternate,i&&!Sh(a)){e=wo(n,t,!1),i=!1;continue}if(e===2){if(i=t,n.errorRecoveryDisabledLanes&i)var u=0;else u=n.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;n:{var r=n;e=me;var d=r.current.memoizedState.isDehydrated;if(d&&(_l(r,u).flags|=256),u=wo(r,u,!1),u!==2){if(Ho&&!d){r.errorRecoveryDisabledLanes|=i,Za|=i,e=4;break n}i=tt,tt=e,i!==null&&(tt===null?tt=i:tt.push.apply(tt,i))}e=u}if(i=!1,e!==2)continue}}if(e===1){_l(n,0),va(n,t,0,!0);break}n:{switch(l=n,i=e,i){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:va(l,t,St,!ha);break n;case 2:tt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(e=Yo+300-Dt(),10<e)){if(va(l,t,St,!ha),Be(l,0,!0)!==0)break n;l.timeoutHandle=Ws(zs.bind(null,l,a,tt,Ai,Bo,t,St,Za,Sl,ha,i,2,-0,0),e);break n}zs(l,a,tt,Ai,Bo,t,St,Za,Sl,ha,i,0,-0,0)}}break}while(!0);Ut(n)}function zs(n,t,a,l,e,i,u,r,d,v,O,T,g,y){if(n.timeoutHandle=-1,T=t.subtreeFlags,(T&8192||(T&16785408)===16785408)&&(ze={stylesheets:null,count:0,unsuspend:ab},ps(t),T=eb(),T!==null)){n.cancelPendingCommit=T(qs.bind(null,n,t,i,a,l,e,u,r,d,O,1,g,y)),va(n,i,u,!v);return}qs(n,t,i,a,l,e,u,r,d)}function Sh(n){for(var t=n;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var e=a[l],i=e.getSnapshot;e=e.value;try{if(!ut(i(),e))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function va(n,t,a,l){t&=~jo,t&=~Za,n.suspendedLanes|=t,n.pingedLanes&=~t,l&&(n.warmLanes|=t),l=n.expirationTimes;for(var e=t;0<e;){var i=31-it(e),u=1<<i;l[i]=-1,e&=~u}a!==0&&Ur(n,a,t)}function Ei(){return(rn&6)===0?(ve(0),!1):!0}function Qo(){if(nn!==null){if(cn===0)var n=nn.return;else n=nn,Gt=Ba=null,eo(n),pl=null,oe=0,n=nn;for(;n!==null;)as(n.alternate,n),n=n.return;nn=null}}function _l(n,t){var a=n.timeoutHandle;a!==-1&&(n.timeoutHandle=-1,Ch(a)),a=n.cancelPendingCommit,a!==null&&(n.cancelPendingCommit=null,a()),Qo(),mn=n,nn=a=Yt(n.current,null),an=t,cn=0,ft=null,ha=!1,xl=Ul(n,t),Ho=!1,Sl=St=jo=Za=ba=_n=0,tt=me=null,Bo=!1,(t&8)!==0&&(t|=t&32);var l=n.entangledLanes;if(l!==0)for(n=n.entanglements,l&=t;0<l;){var e=31-it(l),i=1<<e;t|=n[e],l&=~i}return Pt=t,Pe(),a}function _s(n,t){W=null,z.H=bi,t===Fl||t===ei?(t=Xc(),cn=3):t===Bc?(t=Xc(),cn=4):cn=t===Qf?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ft=t,nn===null&&(_n=1,yi(n,pt(t,n.current)))}function Ts(){var n=z.H;return z.H=bi,n===null?bi:n}function As(){var n=z.A;return z.A=yh,n}function Zo(){_n=4,ha||(an&4194048)!==an&&xt.current!==null||(xl=!0),(ba&134217727)===0&&(Za&134217727)===0||mn===null||va(mn,an,St,!1)}function wo(n,t,a){var l=rn;rn|=2;var e=Ts(),i=As();(mn!==n||an!==t)&&(Ai=null,_l(n,t)),t=!1;var u=_n;n:do try{if(cn!==0&&nn!==null){var r=nn,d=ft;switch(cn){case 8:Qo(),u=6;break n;case 3:case 2:case 9:case 6:xt.current===null&&(t=!0);var v=cn;if(cn=0,ft=null,Tl(n,r,d,v),a&&xl){u=0;break n}break;default:v=cn,cn=0,ft=null,Tl(n,r,d,v)}}Oh(),u=_n;break}catch(O){_s(n,O)}while(!0);return t&&n.shellSuspendCounter++,Gt=Ba=null,rn=l,z.H=e,z.A=i,nn===null&&(mn=null,an=0,Pe()),u}function Oh(){for(;nn!==null;)Es(nn)}function zh(n,t){var a=rn;rn|=2;var l=Ts(),e=As();mn!==n||an!==t?(Ai=null,Ti=Dt()+500,_l(n,t)):xl=Ul(n,t);n:do try{if(cn!==0&&nn!==null){t=nn;var i=ft;t:switch(cn){case 1:cn=0,ft=null,Tl(n,t,i,1);break;case 2:case 9:if(Yc(i)){cn=0,ft=null,Ds(t);break}t=function(){cn!==2&&cn!==9||mn!==n||(cn=7),Ut(n)},i.then(t,t);break n;case 3:cn=7;break n;case 4:cn=5;break n;case 7:Yc(i)?(cn=0,ft=null,Ds(t)):(cn=0,ft=null,Tl(n,t,i,7));break;case 5:var u=null;switch(nn.tag){case 26:u=nn.memoizedState;case 5:case 27:var r=nn;if(!u||cd(u)){cn=0,ft=null;var d=r.sibling;if(d!==null)nn=d;else{var v=r.return;v!==null?(nn=v,Di(v)):nn=null}break t}}cn=0,ft=null,Tl(n,t,i,5);break;case 6:cn=0,ft=null,Tl(n,t,i,6);break;case 8:Qo(),_n=6;break n;default:throw Error(c(462))}}_h();break}catch(O){_s(n,O)}while(!0);return Gt=Ba=null,z.H=l,z.A=e,rn=a,nn!==null?0:(mn=null,an=0,Pe(),_n)}function _h(){for(;nn!==null&&!Vd();)Es(nn)}function Es(n){var t=ns(n.alternate,n,Pt);n.memoizedProps=n.pendingProps,t===null?Di(n):nn=t}function Ds(n){var t=n,a=t.alternate;switch(t.tag){case 15:case 0:t=Jf(a,t,t.pendingProps,t.type,void 0,an);break;case 11:t=Jf(a,t,t.pendingProps,t.type.render,t.ref,an);break;case 5:eo(t);default:as(a,t),t=nn=Dc(t,Pt),t=ns(a,t,Pt)}n.memoizedProps=n.pendingProps,t===null?Di(n):nn=t}function Tl(n,t,a,l){Gt=Ba=null,eo(t),pl=null,oe=0;var e=t.return;try{if(hh(n,e,t,a,an)){_n=1,yi(n,pt(a,n.current)),nn=null;return}}catch(i){if(e!==null)throw nn=e,i;_n=1,yi(n,pt(a,n.current)),nn=null;return}t.flags&32768?(un||l===1?n=!0:xl||(an&536870912)!==0?n=!1:(ha=n=!0,(l===2||l===9||l===3||l===6)&&(l=xt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Ms(t,n)):Di(t)}function Di(n){var t=n;do{if((t.flags&32768)!==0){Ms(t,ha);return}n=t.return;var a=mh(t.alternate,t,Pt);if(a!==null){nn=a;return}if(t=t.sibling,t!==null){nn=t;return}nn=t=n}while(t!==null);_n===0&&(_n=5)}function Ms(n,t){do{var a=ph(n.alternate,n);if(a!==null){a.flags&=32767,nn=a;return}if(a=n.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(n=n.sibling,n!==null)){nn=n;return}nn=n=a}while(n!==null);_n=6,nn=null}function qs(n,t,a,l,e,i,u,r,d){n.cancelPendingCommit=null;do Mi();while(Qn!==0);if((rn&6)!==0)throw Error(c(327));if(t!==null){if(t===n.current)throw Error(c(177));if(i=t.lanes|t.childLanes,i|=Uu,a0(n,a,i,u,r,d),n===mn&&(nn=mn=null,an=0),Ol=t,pa=n,zl=a,Co=i,Xo=e,xs=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,Dh(ke,function(){return Hs(),null})):(n.callbackNode=null,n.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=z.T,z.T=null,e=U.p,U.p=2,u=rn,rn|=4;try{vh(n,t,a)}finally{rn=u,U.p=e,z.T=l}}Qn=1,Rs(),Ns(),Us()}}function Rs(){if(Qn===1){Qn=0;var n=pa,t=Ol,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var l=U.p;U.p=2;var e=rn;rn|=4;try{hs(t,n);var i=ar,u=gc(n.containerInfo),r=i.focusedElem,d=i.selectionRange;if(u!==r&&r&&r.ownerDocument&&vc(r.ownerDocument.documentElement,r)){if(d!==null&&Du(r)){var v=d.start,O=d.end;if(O===void 0&&(O=v),"selectionStart"in r)r.selectionStart=v,r.selectionEnd=Math.min(O,r.value.length);else{var T=r.ownerDocument||document,g=T&&T.defaultView||window;if(g.getSelection){var y=g.getSelection(),Z=r.textContent.length,X=Math.min(d.start,Z),dn=d.end===void 0?X:Math.min(d.end,Z);!y.extend&&X>dn&&(u=dn,dn=X,X=u);var m=pc(r,X),b=pc(r,dn);if(m&&b&&(y.rangeCount!==1||y.anchorNode!==m.node||y.anchorOffset!==m.offset||y.focusNode!==b.node||y.focusOffset!==b.offset)){var p=T.createRange();p.setStart(m.node,m.offset),y.removeAllRanges(),X>dn?(y.addRange(p),y.extend(b.node,b.offset)):(p.setEnd(b.node,b.offset),y.addRange(p))}}}}for(T=[],y=r;y=y.parentNode;)y.nodeType===1&&T.push({element:y,left:y.scrollLeft,top:y.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<T.length;r++){var _=T[r];_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}Gi=!!tr,ar=tr=null}finally{rn=e,U.p=l,z.T=a}}n.current=t,Qn=2}}function Ns(){if(Qn===2){Qn=0;var n=pa,t=Ol,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var l=U.p;U.p=2;var e=rn;rn|=4;try{cs(n,t.alternate,t)}finally{rn=e,U.p=l,z.T=a}}Qn=3}}function Us(){if(Qn===4||Qn===3){Qn=0,Kd();var n=pa,t=Ol,a=zl,l=xs;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Qn=5:(Qn=0,Ol=pa=null,ks(n,n.pendingLanes));var e=n.pendingLanes;if(e===0&&(ma=null),ou(a),t=t.stateNode,et&&typeof et.onCommitFiberRoot=="function")try{et.onCommitFiberRoot(Nl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=z.T,e=U.p,U.p=2,z.T=null;try{for(var i=n.onRecoverableError,u=0;u<l.length;u++){var r=l[u];i(r.value,{componentStack:r.stack})}}finally{z.T=t,U.p=e}}(zl&3)!==0&&Mi(),Ut(n),e=n.pendingLanes,(a&4194090)!==0&&(e&42)!==0?n===Go?pe++:(pe=0,Go=n):pe=0,ve(0)}}function ks(n,t){(n.pooledCacheLanes&=t)===0&&(t=n.pooledCache,t!=null&&(n.pooledCache=null,$l(t)))}function Mi(n){return Rs(),Ns(),Us(),Hs()}function Hs(){if(Qn!==5)return!1;var n=pa,t=Co;Co=0;var a=ou(zl),l=z.T,e=U.p;try{U.p=32>a?32:a,z.T=null,a=Xo,Xo=null;var i=pa,u=zl;if(Qn=0,Ol=pa=null,zl=0,(rn&6)!==0)throw Error(c(331));var r=rn;if(rn|=4,gs(i.current),ms(i,i.current,u,a),rn=r,ve(0,!1),et&&typeof et.onPostCommitFiberRoot=="function")try{et.onPostCommitFiberRoot(Nl,i)}catch{}return!0}finally{U.p=e,z.T=l,ks(n,t)}}function js(n,t,a){t=pt(a,t),t=yo(n.stateNode,t,2),n=ua(n,t,2),n!==null&&(kl(n,2),Ut(n))}function bn(n,t,a){if(n.tag===3)js(n,n,a);else for(;t!==null;){if(t.tag===3){js(t,n,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ma===null||!ma.has(l))){n=pt(a,n),a=Xf(2),l=ua(t,a,2),l!==null&&(Gf(a,l,t,n),kl(l,2),Ut(l));break}}t=t.return}}function Lo(n,t,a){var l=n.pingCache;if(l===null){l=n.pingCache=new xh;var e=new Set;l.set(t,e)}else e=l.get(t),e===void 0&&(e=new Set,l.set(t,e));e.has(a)||(Ho=!0,e.add(a),n=Th.bind(null,n,t,a),t.then(n,n))}function Th(n,t,a){var l=n.pingCache;l!==null&&l.delete(t),n.pingedLanes|=n.suspendedLanes&a,n.warmLanes&=~a,mn===n&&(an&a)===a&&(_n===4||_n===3&&(an&62914560)===an&&300>Dt()-Yo?(rn&2)===0&&_l(n,0):jo|=a,Sl===an&&(Sl=0)),Ut(n)}function Bs(n,t){t===0&&(t=Nr()),n=ul(n,t),n!==null&&(kl(n,t),Ut(n))}function Ah(n){var t=n.memoizedState,a=0;t!==null&&(a=t.retryLane),Bs(n,a)}function Eh(n,t){var a=0;switch(n.tag){case 13:var l=n.stateNode,e=n.memoizedState;e!==null&&(a=e.retryLane);break;case 19:l=n.stateNode;break;case 22:l=n.stateNode._retryCache;break;default:throw Error(c(314))}l!==null&&l.delete(t),Bs(n,a)}function Dh(n,t){return lu(n,t)}var qi=null,Al=null,Vo=!1,Ri=!1,Ko=!1,wa=0;function Ut(n){n!==Al&&n.next===null&&(Al===null?qi=Al=n:Al=Al.next=n),Ri=!0,Vo||(Vo=!0,qh())}function ve(n,t){if(!Ko&&Ri){Ko=!0;do for(var a=!1,l=qi;l!==null;){if(n!==0){var e=l.pendingLanes;if(e===0)var i=0;else{var u=l.suspendedLanes,r=l.pingedLanes;i=(1<<31-it(42|n)+1)-1,i&=e&~(u&~r),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,Gs(l,i))}else i=an,i=Be(l,l===mn?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Ul(l,i)||(a=!0,Gs(l,i));l=l.next}while(a);Ko=!1}}function Mh(){Ys()}function Ys(){Ri=Vo=!1;var n=0;wa!==0&&(Yh()&&(n=wa),wa=0);for(var t=Dt(),a=null,l=qi;l!==null;){var e=l.next,i=Cs(l,t);i===0?(l.next=null,a===null?qi=e:a.next=e,e===null&&(Al=a)):(a=l,(n!==0||(i&3)!==0)&&(Ri=!0)),l=e}ve(n)}function Cs(n,t){for(var a=n.suspendedLanes,l=n.pingedLanes,e=n.expirationTimes,i=n.pendingLanes&-62914561;0<i;){var u=31-it(i),r=1<<u,d=e[u];d===-1?((r&a)===0||(r&l)!==0)&&(e[u]=t0(r,t)):d<=t&&(n.expiredLanes|=r),i&=~r}if(t=mn,a=an,a=Be(n,n===t?a:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l=n.callbackNode,a===0||n===t&&(cn===2||cn===9)||n.cancelPendingCommit!==null)return l!==null&&l!==null&&eu(l),n.callbackNode=null,n.callbackPriority=0;if((a&3)===0||Ul(n,a)){if(t=a&-a,t===n.callbackPriority)return t;switch(l!==null&&eu(l),ou(a)){case 2:case 8:a=Mr;break;case 32:a=ke;break;case 268435456:a=qr;break;default:a=ke}return l=Xs.bind(null,n),a=lu(a,l),n.callbackPriority=t,n.callbackNode=a,t}return l!==null&&l!==null&&eu(l),n.callbackPriority=2,n.callbackNode=null,2}function Xs(n,t){if(Qn!==0&&Qn!==5)return n.callbackNode=null,n.callbackPriority=0,null;var a=n.callbackNode;if(Mi()&&n.callbackNode!==a)return null;var l=an;return l=Be(n,n===mn?l:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l===0?null:(Os(n,l,t),Cs(n,Dt()),n.callbackNode!=null&&n.callbackNode===a?Xs.bind(null,n):null)}function Gs(n,t){if(Mi())return null;Os(n,t,!0)}function qh(){Xh(function(){(rn&6)!==0?lu(Dr,Mh):Ys()})}function Jo(){return wa===0&&(wa=Rr()),wa}function Qs(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Qe(""+n)}function Zs(n,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,n.id&&a.setAttribute("form",n.id),t.parentNode.insertBefore(a,t),n=new FormData(n),a.parentNode.removeChild(a),n}function Rh(n,t,a,l,e){if(t==="submit"&&a&&a.stateNode===e){var i=Qs((e[Wn]||null).action),u=l.submitter;u&&(t=(t=u[Wn]||null)?Qs(t.formAction):u.getAttribute("formAction"),t!==null&&(i=t,u=null));var r=new Ve("action","action",null,l,e);n.push({event:r,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(wa!==0){var d=u?Zs(e,u):new FormData(e);bo(a,{pending:!0,data:d,method:e.method,action:i},null,d)}}else typeof i=="function"&&(r.preventDefault(),d=u?Zs(e,u):new FormData(e),bo(a,{pending:!0,data:d,method:e.method,action:i},i,d))},currentTarget:e}]})}}for(var Po=0;Po<Nu.length;Po++){var $o=Nu[Po],Nh=$o.toLowerCase(),Uh=$o[0].toUpperCase()+$o.slice(1);zt(Nh,"on"+Uh)}zt(Sc,"onAnimationEnd"),zt(Oc,"onAnimationIteration"),zt(zc,"onAnimationStart"),zt("dblclick","onDoubleClick"),zt("focusin","onFocus"),zt("focusout","onBlur"),zt($0,"onTransitionRun"),zt(W0,"onTransitionStart"),zt(F0,"onTransitionCancel"),zt(_c,"onTransitionEnd"),$a("onMouseEnter",["mouseout","mouseover"]),$a("onMouseLeave",["mouseout","mouseover"]),$a("onPointerEnter",["pointerout","pointerover"]),$a("onPointerLeave",["pointerout","pointerover"]),Da("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Da("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Da("onBeforeInput",["compositionend","keypress","textInput","paste"]),Da("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Da("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Da("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ge="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ge));function ws(n,t){t=(t&4)!==0;for(var a=0;a<n.length;a++){var l=n[a],e=l.event;l=l.listeners;n:{var i=void 0;if(t)for(var u=l.length-1;0<=u;u--){var r=l[u],d=r.instance,v=r.currentTarget;if(r=r.listener,d!==i&&e.isPropagationStopped())break n;i=r,e.currentTarget=v;try{i(e)}catch(O){gi(O)}e.currentTarget=null,i=d}else for(u=0;u<l.length;u++){if(r=l[u],d=r.instance,v=r.currentTarget,r=r.listener,d!==i&&e.isPropagationStopped())break n;i=r,e.currentTarget=v;try{i(e)}catch(O){gi(O)}e.currentTarget=null,i=d}}}}function tn(n,t){var a=t[ru];a===void 0&&(a=t[ru]=new Set);var l=n+"__bubble";a.has(l)||(Ls(t,n,2,!1),a.add(l))}function Wo(n,t,a){var l=0;t&&(l|=4),Ls(a,n,l,t)}var Ni="_reactListening"+Math.random().toString(36).slice(2);function Fo(n){if(!n[Ni]){n[Ni]=!0,Br.forEach(function(a){a!=="selectionchange"&&(kh.has(a)||Wo(a,!1,n),Wo(a,!0,n))});var t=n.nodeType===9?n:n.ownerDocument;t===null||t[Ni]||(t[Ni]=!0,Wo("selectionchange",!1,t))}}function Ls(n,t,a,l){switch(md(t)){case 2:var e=ob;break;case 8:e=rb;break;default:e=dr}a=e.bind(null,t,a,n),e=void 0,!yu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(e=!0),l?e!==void 0?n.addEventListener(t,a,{capture:!0,passive:e}):n.addEventListener(t,a,!0):e!==void 0?n.addEventListener(t,a,{passive:e}):n.addEventListener(t,a,!1)}function Io(n,t,a,l,e){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)n:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var r=l.stateNode.containerInfo;if(r===e)break;if(u===4)for(u=l.return;u!==null;){var d=u.tag;if((d===3||d===4)&&u.stateNode.containerInfo===e)return;u=u.return}for(;r!==null;){if(u=Ka(r),u===null)return;if(d=u.tag,d===5||d===6||d===26||d===27){l=i=u;continue n}r=r.parentNode}}l=l.return}Wr(function(){var v=i,O=vu(a),T=[];n:{var g=Tc.get(n);if(g!==void 0){var y=Ve,Z=n;switch(n){case"keypress":if(we(a)===0)break n;case"keydown":case"keyup":y=D0;break;case"focusin":Z="focus",y=zu;break;case"focusout":Z="blur",y=zu;break;case"beforeblur":case"afterblur":y=zu;break;case"click":if(a.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=nc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=p0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=R0;break;case Sc:case Oc:case zc:y=y0;break;case _c:y=U0;break;case"scroll":case"scrollend":y=b0;break;case"wheel":y=H0;break;case"copy":case"cut":case"paste":y=S0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=ac;break;case"toggle":case"beforetoggle":y=B0}var X=(t&4)!==0,dn=!X&&(n==="scroll"||n==="scrollend"),m=X?g!==null?g+"Capture":null:g;X=[];for(var b=v,p;b!==null;){var _=b;if(p=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||p===null||m===null||(_=Bl(b,m),_!=null&&X.push(ye(b,_,p))),dn)break;b=b.return}0<X.length&&(g=new y(g,Z,null,a,O),T.push({event:g,listeners:X}))}}if((t&7)===0){n:{if(g=n==="mouseover"||n==="pointerover",y=n==="mouseout"||n==="pointerout",g&&a!==pu&&(Z=a.relatedTarget||a.fromElement)&&(Ka(Z)||Z[Va]))break n;if((y||g)&&(g=O.window===O?O:(g=O.ownerDocument)?g.defaultView||g.parentWindow:window,y?(Z=a.relatedTarget||a.toElement,y=v,Z=Z?Ka(Z):null,Z!==null&&(dn=A(Z),X=Z.tag,Z!==dn||X!==5&&X!==27&&X!==6)&&(Z=null)):(y=null,Z=v),y!==Z)){if(X=nc,_="onMouseLeave",m="onMouseEnter",b="mouse",(n==="pointerout"||n==="pointerover")&&(X=ac,_="onPointerLeave",m="onPointerEnter",b="pointer"),dn=y==null?g:jl(y),p=Z==null?g:jl(Z),g=new X(_,b+"leave",y,a,O),g.target=dn,g.relatedTarget=p,_=null,Ka(O)===v&&(X=new X(m,b+"enter",Z,a,O),X.target=p,X.relatedTarget=dn,_=X),dn=_,y&&Z)t:{for(X=y,m=Z,b=0,p=X;p;p=El(p))b++;for(p=0,_=m;_;_=El(_))p++;for(;0<b-p;)X=El(X),b--;for(;0<p-b;)m=El(m),p--;for(;b--;){if(X===m||m!==null&&X===m.alternate)break t;X=El(X),m=El(m)}X=null}else X=null;y!==null&&Vs(T,g,y,X,!1),Z!==null&&dn!==null&&Vs(T,dn,Z,X,!0)}}n:{if(g=v?jl(v):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var j=fc;else if(rc(g))if(sc)j=K0;else{j=L0;var F=w0}else y=g.nodeName,!y||y.toLowerCase()!=="input"||g.type!=="checkbox"&&g.type!=="radio"?v&&mu(v.elementType)&&(j=fc):j=V0;if(j&&(j=j(n,v))){cc(T,j,a,O);break n}F&&F(n,g,v),n==="focusout"&&v&&g.type==="number"&&v.memoizedProps.value!=null&&bu(g,"number",g.value)}switch(F=v?jl(v):window,n){case"focusin":(rc(F)||F.contentEditable==="true")&&(ll=F,Mu=v,Ll=null);break;case"focusout":Ll=Mu=ll=null;break;case"mousedown":qu=!0;break;case"contextmenu":case"mouseup":case"dragend":qu=!1,yc(T,a,O);break;case"selectionchange":if(P0)break;case"keydown":case"keyup":yc(T,a,O)}var B;if(Tu)n:{switch(n){case"compositionstart":var G="onCompositionStart";break n;case"compositionend":G="onCompositionEnd";break n;case"compositionupdate":G="onCompositionUpdate";break n}G=void 0}else al?uc(n,a)&&(G="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(G="onCompositionStart");G&&(lc&&a.locale!=="ko"&&(al||G!=="onCompositionStart"?G==="onCompositionEnd"&&al&&(B=Fr()):(aa=O,xu="value"in aa?aa.value:aa.textContent,al=!0)),F=Ui(v,G),0<F.length&&(G=new tc(G,n,null,a,O),T.push({event:G,listeners:F}),B?G.data=B:(B=oc(a),B!==null&&(G.data=B)))),(B=C0?X0(n,a):G0(n,a))&&(G=Ui(v,"onBeforeInput"),0<G.length&&(F=new tc("onBeforeInput","beforeinput",null,a,O),T.push({event:F,listeners:G}),F.data=B)),Rh(T,n,v,a,O)}ws(T,t)})}function ye(n,t,a){return{instance:n,listener:t,currentTarget:a}}function Ui(n,t){for(var a=t+"Capture",l=[];n!==null;){var e=n,i=e.stateNode;if(e=e.tag,e!==5&&e!==26&&e!==27||i===null||(e=Bl(n,a),e!=null&&l.unshift(ye(n,e,i)),e=Bl(n,t),e!=null&&l.push(ye(n,e,i))),n.tag===3)return l;n=n.return}return[]}function El(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function Vs(n,t,a,l,e){for(var i=t._reactName,u=[];a!==null&&a!==l;){var r=a,d=r.alternate,v=r.stateNode;if(r=r.tag,d!==null&&d===l)break;r!==5&&r!==26&&r!==27||v===null||(d=v,e?(v=Bl(a,i),v!=null&&u.unshift(ye(a,v,d))):e||(v=Bl(a,i),v!=null&&u.push(ye(a,v,d)))),a=a.return}u.length!==0&&n.push({event:t,listeners:u})}var Hh=/\r\n?/g,jh=/\u0000|\uFFFD/g;function Ks(n){return(typeof n=="string"?n:""+n).replace(Hh,`
`).replace(jh,"")}function Js(n,t){return t=Ks(t),Ks(n)===t}function ki(){}function sn(n,t,a,l,e,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Ia(n,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Ia(n,""+l);break;case"className":Ce(n,"class",l);break;case"tabIndex":Ce(n,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ce(n,a,l);break;case"style":Pr(n,l,i);break;case"data":if(t!=="object"){Ce(n,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){n.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(a);break}l=Qe(""+l),n.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){n.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&sn(n,t,"name",e.name,e,null),sn(n,t,"formEncType",e.formEncType,e,null),sn(n,t,"formMethod",e.formMethod,e,null),sn(n,t,"formTarget",e.formTarget,e,null)):(sn(n,t,"encType",e.encType,e,null),sn(n,t,"method",e.method,e,null),sn(n,t,"target",e.target,e,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(a);break}l=Qe(""+l),n.setAttribute(a,l);break;case"onClick":l!=null&&(n.onclick=ki);break;case"onScroll":l!=null&&tn("scroll",n);break;case"onScrollEnd":l!=null&&tn("scrollend",n);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(a=l.__html,a!=null){if(e.children!=null)throw Error(c(60));n.innerHTML=a}}break;case"multiple":n.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":n.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){n.removeAttribute("xlink:href");break}a=Qe(""+l),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,""+l):n.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,""):n.removeAttribute(a);break;case"capture":case"download":l===!0?n.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,l):n.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?n.setAttribute(a,l):n.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?n.removeAttribute(a):n.setAttribute(a,l);break;case"popover":tn("beforetoggle",n),tn("toggle",n),Ye(n,"popover",l);break;case"xlinkActuate":jt(n,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":jt(n,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":jt(n,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":jt(n,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":jt(n,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":jt(n,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":jt(n,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":jt(n,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":jt(n,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ye(n,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=d0.get(a)||a,Ye(n,a,l))}}function nr(n,t,a,l,e,i){switch(a){case"style":Pr(n,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(a=l.__html,a!=null){if(e.children!=null)throw Error(c(60));n.innerHTML=a}}break;case"children":typeof l=="string"?Ia(n,l):(typeof l=="number"||typeof l=="bigint")&&Ia(n,""+l);break;case"onScroll":l!=null&&tn("scroll",n);break;case"onScrollEnd":l!=null&&tn("scrollend",n);break;case"onClick":l!=null&&(n.onclick=ki);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Yr.hasOwnProperty(a))n:{if(a[0]==="o"&&a[1]==="n"&&(e=a.endsWith("Capture"),t=a.slice(2,e?a.length-7:void 0),i=n[Wn]||null,i=i!=null?i[a]:null,typeof i=="function"&&n.removeEventListener(t,i,e),typeof l=="function")){typeof i!="function"&&i!==null&&(a in n?n[a]=null:n.hasAttribute(a)&&n.removeAttribute(a)),n.addEventListener(t,l,e);break n}a in n?n[a]=l:l===!0?n.setAttribute(a,""):Ye(n,a,l)}}}function Zn(n,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":tn("error",n),tn("load",n);var l=!1,e=!1,i;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];if(u!=null)switch(i){case"src":l=!0;break;case"srcSet":e=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:sn(n,t,i,u,a,null)}}e&&sn(n,t,"srcSet",a.srcSet,a,null),l&&sn(n,t,"src",a.src,a,null);return;case"input":tn("invalid",n);var r=i=u=e=null,d=null,v=null;for(l in a)if(a.hasOwnProperty(l)){var O=a[l];if(O!=null)switch(l){case"name":e=O;break;case"type":u=O;break;case"checked":d=O;break;case"defaultChecked":v=O;break;case"value":i=O;break;case"defaultValue":r=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(c(137,t));break;default:sn(n,t,l,O,a,null)}}Lr(n,i,r,d,v,u,e,!1),Xe(n);return;case"select":tn("invalid",n),l=u=i=null;for(e in a)if(a.hasOwnProperty(e)&&(r=a[e],r!=null))switch(e){case"value":i=r;break;case"defaultValue":u=r;break;case"multiple":l=r;default:sn(n,t,e,r,a,null)}t=i,a=u,n.multiple=!!l,t!=null?Fa(n,!!l,t,!1):a!=null&&Fa(n,!!l,a,!0);return;case"textarea":tn("invalid",n),i=e=l=null;for(u in a)if(a.hasOwnProperty(u)&&(r=a[u],r!=null))switch(u){case"value":l=r;break;case"defaultValue":e=r;break;case"children":i=r;break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(c(91));break;default:sn(n,t,u,r,a,null)}Kr(n,l,e,i),Xe(n);return;case"option":for(d in a)if(a.hasOwnProperty(d)&&(l=a[d],l!=null))switch(d){case"selected":n.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:sn(n,t,d,l,a,null)}return;case"dialog":tn("beforetoggle",n),tn("toggle",n),tn("cancel",n),tn("close",n);break;case"iframe":case"object":tn("load",n);break;case"video":case"audio":for(l=0;l<ge.length;l++)tn(ge[l],n);break;case"image":tn("error",n),tn("load",n);break;case"details":tn("toggle",n);break;case"embed":case"source":case"link":tn("error",n),tn("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(v in a)if(a.hasOwnProperty(v)&&(l=a[v],l!=null))switch(v){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:sn(n,t,v,l,a,null)}return;default:if(mu(t)){for(O in a)a.hasOwnProperty(O)&&(l=a[O],l!==void 0&&nr(n,t,O,l,a,void 0));return}}for(r in a)a.hasOwnProperty(r)&&(l=a[r],l!=null&&sn(n,t,r,l,a,null))}function Bh(n,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var e=null,i=null,u=null,r=null,d=null,v=null,O=null;for(y in a){var T=a[y];if(a.hasOwnProperty(y)&&T!=null)switch(y){case"checked":break;case"value":break;case"defaultValue":d=T;default:l.hasOwnProperty(y)||sn(n,t,y,null,l,T)}}for(var g in l){var y=l[g];if(T=a[g],l.hasOwnProperty(g)&&(y!=null||T!=null))switch(g){case"type":i=y;break;case"name":e=y;break;case"checked":v=y;break;case"defaultChecked":O=y;break;case"value":u=y;break;case"defaultValue":r=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(c(137,t));break;default:y!==T&&sn(n,t,g,y,l,T)}}hu(n,u,r,d,v,O,i,e);return;case"select":y=u=r=g=null;for(i in a)if(d=a[i],a.hasOwnProperty(i)&&d!=null)switch(i){case"value":break;case"multiple":y=d;default:l.hasOwnProperty(i)||sn(n,t,i,null,l,d)}for(e in l)if(i=l[e],d=a[e],l.hasOwnProperty(e)&&(i!=null||d!=null))switch(e){case"value":g=i;break;case"defaultValue":r=i;break;case"multiple":u=i;default:i!==d&&sn(n,t,e,i,l,d)}t=r,a=u,l=y,g!=null?Fa(n,!!a,g,!1):!!l!=!!a&&(t!=null?Fa(n,!!a,t,!0):Fa(n,!!a,a?[]:"",!1));return;case"textarea":y=g=null;for(r in a)if(e=a[r],a.hasOwnProperty(r)&&e!=null&&!l.hasOwnProperty(r))switch(r){case"value":break;case"children":break;default:sn(n,t,r,null,l,e)}for(u in l)if(e=l[u],i=a[u],l.hasOwnProperty(u)&&(e!=null||i!=null))switch(u){case"value":g=e;break;case"defaultValue":y=e;break;case"children":break;case"dangerouslySetInnerHTML":if(e!=null)throw Error(c(91));break;default:e!==i&&sn(n,t,u,e,l,i)}Vr(n,g,y);return;case"option":for(var Z in a)if(g=a[Z],a.hasOwnProperty(Z)&&g!=null&&!l.hasOwnProperty(Z))switch(Z){case"selected":n.selected=!1;break;default:sn(n,t,Z,null,l,g)}for(d in l)if(g=l[d],y=a[d],l.hasOwnProperty(d)&&g!==y&&(g!=null||y!=null))switch(d){case"selected":n.selected=g&&typeof g!="function"&&typeof g!="symbol";break;default:sn(n,t,d,g,l,y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var X in a)g=a[X],a.hasOwnProperty(X)&&g!=null&&!l.hasOwnProperty(X)&&sn(n,t,X,null,l,g);for(v in l)if(g=l[v],y=a[v],l.hasOwnProperty(v)&&g!==y&&(g!=null||y!=null))switch(v){case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(c(137,t));break;default:sn(n,t,v,g,l,y)}return;default:if(mu(t)){for(var dn in a)g=a[dn],a.hasOwnProperty(dn)&&g!==void 0&&!l.hasOwnProperty(dn)&&nr(n,t,dn,void 0,l,g);for(O in l)g=l[O],y=a[O],!l.hasOwnProperty(O)||g===y||g===void 0&&y===void 0||nr(n,t,O,g,l,y);return}}for(var m in a)g=a[m],a.hasOwnProperty(m)&&g!=null&&!l.hasOwnProperty(m)&&sn(n,t,m,null,l,g);for(T in l)g=l[T],y=a[T],!l.hasOwnProperty(T)||g===y||g==null&&y==null||sn(n,t,T,g,l,y)}var tr=null,ar=null;function Hi(n){return n.nodeType===9?n:n.ownerDocument}function Ps(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function $s(n,t){if(n===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&t==="foreignObject"?0:n}function lr(n,t){return n==="textarea"||n==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var er=null;function Yh(){var n=window.event;return n&&n.type==="popstate"?n===er?!1:(er=n,!0):(er=null,!1)}var Ws=typeof setTimeout=="function"?setTimeout:void 0,Ch=typeof clearTimeout=="function"?clearTimeout:void 0,Fs=typeof Promise=="function"?Promise:void 0,Xh=typeof queueMicrotask=="function"?queueMicrotask:typeof Fs<"u"?function(n){return Fs.resolve(null).then(n).catch(Gh)}:Ws;function Gh(n){setTimeout(function(){throw n})}function ga(n){return n==="head"}function Is(n,t){var a=t,l=0,e=0;do{var i=a.nextSibling;if(n.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(0<l&&8>l){a=l;var u=n.ownerDocument;if(a&1&&xe(u.documentElement),a&2&&xe(u.body),a&4)for(a=u.head,xe(a),u=a.firstChild;u;){var r=u.nextSibling,d=u.nodeName;u[Hl]||d==="SCRIPT"||d==="STYLE"||d==="LINK"&&u.rel.toLowerCase()==="stylesheet"||a.removeChild(u),u=r}}if(e===0){n.removeChild(i),De(t);return}e--}else a==="$"||a==="$?"||a==="$!"?e++:l=a.charCodeAt(0)-48;else l=0;a=i}while(a);De(t)}function ir(n){var t=n.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ir(a),cu(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}n.removeChild(a)}}function Qh(n,t,a,l){for(;n.nodeType===1;){var e=a;if(n.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(l){if(!n[Hl])switch(t){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(i=n.getAttribute("rel"),i==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(i!==e.rel||n.getAttribute("href")!==(e.href==null||e.href===""?null:e.href)||n.getAttribute("crossorigin")!==(e.crossOrigin==null?null:e.crossOrigin)||n.getAttribute("title")!==(e.title==null?null:e.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(i=n.getAttribute("src"),(i!==(e.src==null?null:e.src)||n.getAttribute("type")!==(e.type==null?null:e.type)||n.getAttribute("crossorigin")!==(e.crossOrigin==null?null:e.crossOrigin))&&i&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(t==="input"&&n.type==="hidden"){var i=e.name==null?null:""+e.name;if(e.type==="hidden"&&n.getAttribute("name")===i)return n}else return n;if(n=Tt(n.nextSibling),n===null)break}return null}function Zh(n,t,a){if(t==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!a||(n=Tt(n.nextSibling),n===null))return null;return n}function ur(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function wh(n,t){var a=n.ownerDocument;if(n.data!=="$?"||a.readyState==="complete")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),n._reactRetry=l}}function Tt(n){for(;n!=null;n=n.nextSibling){var t=n.nodeType;if(t===1||t===3)break;if(t===8){if(t=n.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return n}var or=null;function nd(n){n=n.previousSibling;for(var t=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return n;t--}else a==="/$"&&t++}n=n.previousSibling}return null}function td(n,t,a){switch(t=Hi(a),n){case"html":if(n=t.documentElement,!n)throw Error(c(452));return n;case"head":if(n=t.head,!n)throw Error(c(453));return n;case"body":if(n=t.body,!n)throw Error(c(454));return n;default:throw Error(c(451))}}function xe(n){for(var t=n.attributes;t.length;)n.removeAttributeNode(t[0]);cu(n)}var Ot=new Map,ad=new Set;function ji(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var $t=U.d;U.d={f:Lh,r:Vh,D:Kh,C:Jh,L:Ph,m:$h,X:Fh,S:Wh,M:Ih};function Lh(){var n=$t.f(),t=Ei();return n||t}function Vh(n){var t=Ja(n);t!==null&&t.tag===5&&t.type==="form"?Of(t):$t.r(n)}var Dl=typeof document>"u"?null:document;function ld(n,t,a){var l=Dl;if(l&&typeof t=="string"&&t){var e=mt(t);e='link[rel="'+n+'"][href="'+e+'"]',typeof a=="string"&&(e+='[crossorigin="'+a+'"]'),ad.has(e)||(ad.add(e),n={rel:n,crossOrigin:a,href:t},l.querySelector(e)===null&&(t=l.createElement("link"),Zn(t,"link",n),jn(t),l.head.appendChild(t)))}}function Kh(n){$t.D(n),ld("dns-prefetch",n,null)}function Jh(n,t){$t.C(n,t),ld("preconnect",n,t)}function Ph(n,t,a){$t.L(n,t,a);var l=Dl;if(l&&n&&t){var e='link[rel="preload"][as="'+mt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(e+='[imagesrcset="'+mt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(e+='[imagesizes="'+mt(a.imageSizes)+'"]')):e+='[href="'+mt(n)+'"]';var i=e;switch(t){case"style":i=Ml(n);break;case"script":i=ql(n)}Ot.has(i)||(n=N({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:n,as:t},a),Ot.set(i,n),l.querySelector(e)!==null||t==="style"&&l.querySelector(Se(i))||t==="script"&&l.querySelector(Oe(i))||(t=l.createElement("link"),Zn(t,"link",n),jn(t),l.head.appendChild(t)))}}function $h(n,t){$t.m(n,t);var a=Dl;if(a&&n){var l=t&&typeof t.as=="string"?t.as:"script",e='link[rel="modulepreload"][as="'+mt(l)+'"][href="'+mt(n)+'"]',i=e;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=ql(n)}if(!Ot.has(i)&&(n=N({rel:"modulepreload",href:n},t),Ot.set(i,n),a.querySelector(e)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Oe(i)))return}l=a.createElement("link"),Zn(l,"link",n),jn(l),a.head.appendChild(l)}}}function Wh(n,t,a){$t.S(n,t,a);var l=Dl;if(l&&n){var e=Pa(l).hoistableStyles,i=Ml(n);t=t||"default";var u=e.get(i);if(!u){var r={loading:0,preload:null};if(u=l.querySelector(Se(i)))r.loading=5;else{n=N({rel:"stylesheet",href:n,"data-precedence":t},a),(a=Ot.get(i))&&rr(n,a);var d=u=l.createElement("link");jn(d),Zn(d,"link",n),d._p=new Promise(function(v,O){d.onload=v,d.onerror=O}),d.addEventListener("load",function(){r.loading|=1}),d.addEventListener("error",function(){r.loading|=2}),r.loading|=4,Bi(u,t,l)}u={type:"stylesheet",instance:u,count:1,state:r},e.set(i,u)}}}function Fh(n,t){$t.X(n,t);var a=Dl;if(a&&n){var l=Pa(a).hoistableScripts,e=ql(n),i=l.get(e);i||(i=a.querySelector(Oe(e)),i||(n=N({src:n,async:!0},t),(t=Ot.get(e))&&cr(n,t),i=a.createElement("script"),jn(i),Zn(i,"link",n),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(e,i))}}function Ih(n,t){$t.M(n,t);var a=Dl;if(a&&n){var l=Pa(a).hoistableScripts,e=ql(n),i=l.get(e);i||(i=a.querySelector(Oe(e)),i||(n=N({src:n,async:!0,type:"module"},t),(t=Ot.get(e))&&cr(n,t),i=a.createElement("script"),jn(i),Zn(i,"link",n),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(e,i))}}function ed(n,t,a,l){var e=(e=K.current)?ji(e):null;if(!e)throw Error(c(446));switch(n){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Ml(a.href),a=Pa(e).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){n=Ml(a.href);var i=Pa(e).hoistableStyles,u=i.get(n);if(u||(e=e.ownerDocument||e,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(n,u),(i=e.querySelector(Se(n)))&&!i._p&&(u.instance=i,u.state.loading=5),Ot.has(n)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ot.set(n,a),i||nb(e,n,a,u.state))),t&&l===null)throw Error(c(528,""));return u}if(t&&l!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ql(a),a=Pa(e).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,n))}}function Ml(n){return'href="'+mt(n)+'"'}function Se(n){return'link[rel="stylesheet"]['+n+"]"}function id(n){return N({},n,{"data-precedence":n.precedence,precedence:null})}function nb(n,t,a,l){n.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=n.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Zn(t,"link",a),jn(t),n.head.appendChild(t))}function ql(n){return'[src="'+mt(n)+'"]'}function Oe(n){return"script[async]"+n}function ud(n,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=n.querySelector('style[data-href~="'+mt(a.href)+'"]');if(l)return t.instance=l,jn(l),l;var e=N({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(n.ownerDocument||n).createElement("style"),jn(l),Zn(l,"style",e),Bi(l,a.precedence,n),t.instance=l;case"stylesheet":e=Ml(a.href);var i=n.querySelector(Se(e));if(i)return t.state.loading|=4,t.instance=i,jn(i),i;l=id(a),(e=Ot.get(e))&&rr(l,e),i=(n.ownerDocument||n).createElement("link"),jn(i);var u=i;return u._p=new Promise(function(r,d){u.onload=r,u.onerror=d}),Zn(i,"link",l),t.state.loading|=4,Bi(i,a.precedence,n),t.instance=i;case"script":return i=ql(a.src),(e=n.querySelector(Oe(i)))?(t.instance=e,jn(e),e):(l=a,(e=Ot.get(i))&&(l=N({},a),cr(l,e)),n=n.ownerDocument||n,e=n.createElement("script"),jn(e),Zn(e,"link",l),n.head.appendChild(e),t.instance=e);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Bi(l,a.precedence,n));return t.instance}function Bi(n,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),e=l.length?l[l.length-1]:null,i=e,u=0;u<l.length;u++){var r=l[u];if(r.dataset.precedence===t)i=r;else if(i!==e)break}i?i.parentNode.insertBefore(n,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(n,t.firstChild))}function rr(n,t){n.crossOrigin==null&&(n.crossOrigin=t.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=t.referrerPolicy),n.title==null&&(n.title=t.title)}function cr(n,t){n.crossOrigin==null&&(n.crossOrigin=t.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=t.referrerPolicy),n.integrity==null&&(n.integrity=t.integrity)}var Yi=null;function od(n,t,a){if(Yi===null){var l=new Map,e=Yi=new Map;e.set(a,l)}else e=Yi,l=e.get(a),l||(l=new Map,e.set(a,l));if(l.has(n))return l;for(l.set(n,null),a=a.getElementsByTagName(n),e=0;e<a.length;e++){var i=a[e];if(!(i[Hl]||i[Vn]||n==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(t)||"";u=n+u;var r=l.get(u);r?r.push(i):l.set(u,[i])}}return l}function rd(n,t,a){n=n.ownerDocument||n,n.head.insertBefore(a,t==="title"?n.querySelector("head > title"):null)}function tb(n,t,a){if(a===1||t.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return n=t.disabled,typeof t.precedence=="string"&&n==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function cd(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var ze=null;function ab(){}function lb(n,t,a){if(ze===null)throw Error(c(475));var l=ze;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var e=Ml(a.href),i=n.querySelector(Se(e));if(i){n=i._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(l.count++,l=Ci.bind(l),n.then(l,l)),t.state.loading|=4,t.instance=i,jn(i);return}i=n.ownerDocument||n,a=id(a),(e=Ot.get(e))&&rr(a,e),i=i.createElement("link"),jn(i);var u=i;u._p=new Promise(function(r,d){u.onload=r,u.onerror=d}),Zn(i,"link",a),t.instance=i}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(t,n),(n=t.state.preload)&&(t.state.loading&3)===0&&(l.count++,t=Ci.bind(l),n.addEventListener("load",t),n.addEventListener("error",t))}}function eb(){if(ze===null)throw Error(c(475));var n=ze;return n.stylesheets&&n.count===0&&fr(n,n.stylesheets),0<n.count?function(t){var a=setTimeout(function(){if(n.stylesheets&&fr(n,n.stylesheets),n.unsuspend){var l=n.unsuspend;n.unsuspend=null,l()}},6e4);return n.unsuspend=t,function(){n.unsuspend=null,clearTimeout(a)}}:null}function Ci(){if(this.count--,this.count===0){if(this.stylesheets)fr(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Xi=null;function fr(n,t){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Xi=new Map,t.forEach(ib,n),Xi=null,Ci.call(n))}function ib(n,t){if(!(t.state.loading&4)){var a=Xi.get(n);if(a)var l=a.get(null);else{a=new Map,Xi.set(n,a);for(var e=n.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<e.length;i++){var u=e[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(a.set(u.dataset.precedence,u),l=u)}l&&a.set(null,l)}e=t.instance,u=e.getAttribute("data-precedence"),i=a.get(u)||l,i===l&&a.set(null,e),a.set(u,e),this.count++,l=Ci.bind(this),e.addEventListener("load",l),e.addEventListener("error",l),i?i.parentNode.insertBefore(e,i.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(e,n.firstChild)),t.state.loading|=4}}var _e={$$typeof:on,Provider:null,Consumer:null,_currentValue:Q,_currentValue2:Q,_threadCount:0};function ub(n,t,a,l,e,i,u,r){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=iu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=iu(0),this.hiddenUpdates=iu(null),this.identifierPrefix=l,this.onUncaughtError=e,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.incompleteTransitions=new Map}function fd(n,t,a,l,e,i,u,r,d,v,O,T){return n=new ub(n,t,a,u,r,d,v,T),t=1,i===!0&&(t|=24),i=ot(3,null,null,t),n.current=i,i.stateNode=n,t=wu(),t.refCount++,n.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},Ju(i),n}function sd(n){return n?(n=ol,n):ol}function dd(n,t,a,l,e,i){e=sd(e),l.context===null?l.context=e:l.pendingContext=e,l=ia(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=ua(n,l,t),a!==null&&(dt(a,n,t),ne(a,n,t))}function hd(n,t){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<t?a:t}}function sr(n,t){hd(n,t),(n=n.alternate)&&hd(n,t)}function bd(n){if(n.tag===13){var t=ul(n,67108864);t!==null&&dt(t,n,67108864),sr(n,67108864)}}var Gi=!0;function ob(n,t,a,l){var e=z.T;z.T=null;var i=U.p;try{U.p=2,dr(n,t,a,l)}finally{U.p=i,z.T=e}}function rb(n,t,a,l){var e=z.T;z.T=null;var i=U.p;try{U.p=8,dr(n,t,a,l)}finally{U.p=i,z.T=e}}function dr(n,t,a,l){if(Gi){var e=hr(l);if(e===null)Io(n,t,l,Qi,a),pd(n,l);else if(fb(e,n,t,a,l))l.stopPropagation();else if(pd(n,l),t&4&&-1<cb.indexOf(n)){for(;e!==null;){var i=Ja(e);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=Ea(i.pendingLanes);if(u!==0){var r=i;for(r.pendingLanes|=2,r.entangledLanes|=2;u;){var d=1<<31-it(u);r.entanglements[1]|=d,u&=~d}Ut(i),(rn&6)===0&&(Ti=Dt()+500,ve(0))}}break;case 13:r=ul(i,2),r!==null&&dt(r,i,2),Ei(),sr(i,2)}if(i=hr(l),i===null&&Io(n,t,l,Qi,a),i===e)break;e=i}e!==null&&l.stopPropagation()}else Io(n,t,l,null,a)}}function hr(n){return n=vu(n),br(n)}var Qi=null;function br(n){if(Qi=null,n=Ka(n),n!==null){var t=A(n);if(t===null)n=null;else{var a=t.tag;if(a===13){if(n=q(t),n!==null)return n;n=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;n=null}else t!==n&&(n=null)}}return Qi=n,null}function md(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Jd()){case Dr:return 2;case Mr:return 8;case ke:case Pd:return 32;case qr:return 268435456;default:return 32}default:return 32}}var mr=!1,ya=null,xa=null,Sa=null,Te=new Map,Ae=new Map,Oa=[],cb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function pd(n,t){switch(n){case"focusin":case"focusout":ya=null;break;case"dragenter":case"dragleave":xa=null;break;case"mouseover":case"mouseout":Sa=null;break;case"pointerover":case"pointerout":Te.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ae.delete(t.pointerId)}}function Ee(n,t,a,l,e,i){return n===null||n.nativeEvent!==i?(n={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[e]},t!==null&&(t=Ja(t),t!==null&&bd(t)),n):(n.eventSystemFlags|=l,t=n.targetContainers,e!==null&&t.indexOf(e)===-1&&t.push(e),n)}function fb(n,t,a,l,e){switch(t){case"focusin":return ya=Ee(ya,n,t,a,l,e),!0;case"dragenter":return xa=Ee(xa,n,t,a,l,e),!0;case"mouseover":return Sa=Ee(Sa,n,t,a,l,e),!0;case"pointerover":var i=e.pointerId;return Te.set(i,Ee(Te.get(i)||null,n,t,a,l,e)),!0;case"gotpointercapture":return i=e.pointerId,Ae.set(i,Ee(Ae.get(i)||null,n,t,a,l,e)),!0}return!1}function vd(n){var t=Ka(n.target);if(t!==null){var a=A(t);if(a!==null){if(t=a.tag,t===13){if(t=q(a),t!==null){n.blockedOn=t,l0(n.priority,function(){if(a.tag===13){var l=st();l=uu(l);var e=ul(a,l);e!==null&&dt(e,a,l),sr(a,l)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Zi(n){if(n.blockedOn!==null)return!1;for(var t=n.targetContainers;0<t.length;){var a=hr(n.nativeEvent);if(a===null){a=n.nativeEvent;var l=new a.constructor(a.type,a);pu=l,a.target.dispatchEvent(l),pu=null}else return t=Ja(a),t!==null&&bd(t),n.blockedOn=a,!1;t.shift()}return!0}function gd(n,t,a){Zi(n)&&a.delete(t)}function sb(){mr=!1,ya!==null&&Zi(ya)&&(ya=null),xa!==null&&Zi(xa)&&(xa=null),Sa!==null&&Zi(Sa)&&(Sa=null),Te.forEach(gd),Ae.forEach(gd)}function wi(n,t){n.blockedOn===t&&(n.blockedOn=null,mr||(mr=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,sb)))}var Li=null;function yd(n){Li!==n&&(Li=n,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Li===n&&(Li=null);for(var t=0;t<n.length;t+=3){var a=n[t],l=n[t+1],e=n[t+2];if(typeof l!="function"){if(br(l||a)===null)continue;break}var i=Ja(a);i!==null&&(n.splice(t,3),t-=3,bo(i,{pending:!0,data:e,method:a.method,action:l},l,e))}}))}function De(n){function t(d){return wi(d,n)}ya!==null&&wi(ya,n),xa!==null&&wi(xa,n),Sa!==null&&wi(Sa,n),Te.forEach(t),Ae.forEach(t);for(var a=0;a<Oa.length;a++){var l=Oa[a];l.blockedOn===n&&(l.blockedOn=null)}for(;0<Oa.length&&(a=Oa[0],a.blockedOn===null);)vd(a),a.blockedOn===null&&Oa.shift();if(a=(n.ownerDocument||n).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var e=a[l],i=a[l+1],u=e[Wn]||null;if(typeof i=="function")u||yd(a);else if(u){var r=null;if(i&&i.hasAttribute("formAction")){if(e=i,u=i[Wn]||null)r=u.formAction;else if(br(e)!==null)continue}else r=u.action;typeof r=="function"?a[l+1]=r:(a.splice(l,3),l-=3),yd(a)}}}function pr(n){this._internalRoot=n}Vi.prototype.render=pr.prototype.render=function(n){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,l=st();dd(a,l,n,t,null,null)},Vi.prototype.unmount=pr.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var t=n.containerInfo;dd(n.current,2,null,n,null,null),Ei(),t[Va]=null}};function Vi(n){this._internalRoot=n}Vi.prototype.unstable_scheduleHydration=function(n){if(n){var t=Hr();n={blockedOn:null,target:n,priority:t};for(var a=0;a<Oa.length&&t!==0&&t<Oa[a].priority;a++);Oa.splice(a,0,n),a===0&&vd(n)}};var xd=f.version;if(xd!=="19.1.0")throw Error(c(527,xd,"19.1.0"));U.findDOMNode=function(n){var t=n._reactInternals;if(t===void 0)throw typeof n.render=="function"?Error(c(188)):(n=Object.keys(n).join(","),Error(c(268,n)));return n=D(t),n=n!==null?x(n):null,n=n===null?null:n.stateNode,n};var db={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ki=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ki.isDisabled&&Ki.supportsFiber)try{Nl=Ki.inject(db),et=Ki}catch{}}return qe.createRoot=function(n,t){if(!S(n))throw Error(c(299));var a=!1,l="",e=jf,i=Bf,u=Yf,r=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(e=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(r=t.unstable_transitionCallbacks)),t=fd(n,1,!1,null,null,a,l,e,i,u,r,null),n[Va]=t.current,Fo(n),new pr(t)},qe.hydrateRoot=function(n,t,a){if(!S(n))throw Error(c(299));var l=!1,e="",i=jf,u=Bf,r=Yf,d=null,v=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(e=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(r=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(d=a.unstable_transitionCallbacks),a.formState!==void 0&&(v=a.formState)),t=fd(n,1,!0,t,a??null,l,e,i,u,r,d,v),t.context=sd(null),a=t.current,l=st(),l=uu(l),e=ia(l),e.callback=null,ua(a,e,l),a=l,t.current.lanes=a,kl(t,a),Ut(t),n[Va]=t.current,Fo(n),new Vi(t)},qe.version="19.1.0",qe}var qd;function zb(){if(qd)return yr.exports;qd=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(f){console.error(f)}}return o(),yr.exports=Ob(),yr.exports}var _b=zb(),Xd={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Rd=Pn.createContext&&Pn.createContext(Xd),Tb=["attr","size","title"];function Ab(o,f){if(o==null)return{};var s=Eb(o,f),c,S;if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(o);for(S=0;S<A.length;S++)c=A[S],!(f.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(o,c)&&(s[c]=o[c])}return s}function Eb(o,f){if(o==null)return{};var s={};for(var c in o)if(Object.prototype.hasOwnProperty.call(o,c)){if(f.indexOf(c)>=0)continue;s[c]=o[c]}return s}function Wi(){return Wi=Object.assign?Object.assign.bind():function(o){for(var f=1;f<arguments.length;f++){var s=arguments[f];for(var c in s)Object.prototype.hasOwnProperty.call(s,c)&&(o[c]=s[c])}return o},Wi.apply(this,arguments)}function Nd(o,f){var s=Object.keys(o);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(o);f&&(c=c.filter(function(S){return Object.getOwnPropertyDescriptor(o,S).enumerable})),s.push.apply(s,c)}return s}function Fi(o){for(var f=1;f<arguments.length;f++){var s=arguments[f]!=null?arguments[f]:{};f%2?Nd(Object(s),!0).forEach(function(c){Db(o,c,s[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(s)):Nd(Object(s)).forEach(function(c){Object.defineProperty(o,c,Object.getOwnPropertyDescriptor(s,c))})}return o}function Db(o,f,s){return f=Mb(f),f in o?Object.defineProperty(o,f,{value:s,enumerable:!0,configurable:!0,writable:!0}):o[f]=s,o}function Mb(o){var f=qb(o,"string");return typeof f=="symbol"?f:f+""}function qb(o,f){if(typeof o!="object"||!o)return o;var s=o[Symbol.toPrimitive];if(s!==void 0){var c=s.call(o,f);if(typeof c!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(f==="string"?String:Number)(o)}function Gd(o){return o&&o.map((f,s)=>Pn.createElement(f.tag,Fi({key:s},f.attr),Gd(f.child)))}function Qd(o){return f=>Pn.createElement(Rb,Wi({attr:Fi({},o.attr)},f),Gd(o.child))}function Rb(o){var f=s=>{var{attr:c,size:S,title:A}=o,q=Ab(o,Tb),w=S||s.size||"1em",D;return s.className&&(D=s.className),o.className&&(D=(D?D+" ":"")+o.className),Pn.createElement("svg",Wi({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},s.attr,c,q,{className:D,style:Fi(Fi({color:o.color||s.color},s.style),o.style),height:w,width:w,xmlns:"http://www.w3.org/2000/svg"}),A&&Pn.createElement("title",null,A),o.children)};return Rd!==void 0?Pn.createElement(Rd.Consumer,null,s=>f(s)):f(Xd)}function Nb(o){return Qd({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M10.25 2a8.25 8.25 0 0 1 6.34 13.53l5.69 5.69a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-5.69-5.69A8.25 8.25 0 1 1 10.25 2ZM3.5 10.25a6.75 6.75 0 1 0 13.5 0 6.75 6.75 0 0 0-13.5 0Z"},child:[]}]})(o)}const Ub="_container_pju5c_1",kb="_form_pju5c_9",Hb="_input_pju5c_16",jb="_button_pju5c_36",Ji={container:Ub,form:kb,input:Hb,button:jb},Bb=({onSearch:o})=>{const[f,s]=Ft.useState(""),c=S=>{S.preventDefault(),o(f)};return k.jsx("div",{className:Ji.container,children:k.jsxs("form",{className:Ji.form,onSubmit:c,children:[k.jsx("input",{className:Ji.input,type:"text",placeholder:"search for book",value:f,onChange:S=>s(S.target.value)}),k.jsx("button",{className:Ji.button,type:"submit",children:k.jsx(Nb,{})})]})})},Yb="_page_1i98c_1",Cb="_content_1i98c_7",Ud={page:Yb,content:Cb},Xb="_header_pq0gd_1",Gb="_brand_pq0gd_10",Qb="_brandLogo_pq0gd_15",zr={header:Xb,brand:Gb,brandLogo:Qb},Zb="/google-books/assets/logo-DJTUT1bB.svg",wb=()=>k.jsx("header",{className:zr.header,children:k.jsxs("div",{className:zr.brand,children:[" ",k.jsx("a",{href:"/",style:{color:"inherit",textDecoration:"none"},children:k.jsx("img",{src:Zb,alt:"Bookmark logo",className:zr.brandLogo})})]})}),Lb="_footer_o5s0n_1",Vb={footer:Lb},Kb=()=>k.jsxs("footer",{className:Vb.footer,children:[k.jsx("div",{className:"container",children:"© 2025 Bookmark"})," "]}),Jb=({children:o})=>k.jsxs("div",{className:Ud.page,children:[k.jsx(wb,{}),k.jsx("main",{className:Ud.content,children:o}),k.jsx(Kb,{})]}),Pb="_grid_2kdze_1",$b={grid:Pb},Wb="_card_1jofq_1",Fb="_placeholder_1jofq_16",Ib="_icon_1jofq_28",n1="_content_1jofq_32",t1="_title_1jofq_41",a1="_subtitle_1jofq_47",l1="_authors_1jofq_54",e1="_description_1jofq_60",i1="_categories_1jofq_66",u1="_footer_1jofq_73",o1="_detailsButton_1jofq_79",r1="_thumbnailContainer_1jofq_95",c1="_thumbnail_1jofq_95",at={card:Wb,placeholder:Fb,icon:Ib,content:n1,title:t1,subtitle:a1,authors:l1,description:e1,categories:i1,footer:u1,detailsButton:o1,thumbnailContainer:r1,thumbnail:c1},f1="_content_v1b5r_1",s1="_closeBtn_v1b5r_14",d1="_overlay_v1b5r_25",_r={content:f1,closeBtn:s1,overlay:d1},h1=({isOpen:o,onClose:f,children:s})=>o?k.jsxs("div",{className:_r.overlay,onClick:f,children:[" "," ",k.jsxs("div",{className:_r.content,onClick:c=>c.stopPropagation(),children:[" ",k.jsx("button",{className:_r.closeBtn,onClick:f,children:"X"}),s]})]}):null;function b1(o){return Qd({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M262.3 199.2c-1.6-2.8-5.6-3.2-7.7-.7l-91.9 122.2c-2.5 2.9-.6 7.4 3.2 7.7l161.1 14c3.8.3 6.4-3.8 4.5-7.1l-69.2-136.1zM367.2 264.1c-1.6-2.8-5.6-3.2-7.7-.7l-24.8 25.1a4.68 4.68 0 0 0-.5 5.4l25.4 49.5c.8 1.3 2.1 2.2 3.7 2.3l44.9 3.9c3.8.3 6.4-3.8 4.5-7.1l-45.5-78.4zM378.1 224.4c11.2-.1 20.9-8.3 23-19.2 2.8-14.8-8.6-28.3-23.7-28.1-11.2.1-20.9 8.3-23 19.2-2.8 14.8 8.6 28.3 23.7 28.1z"},child:[]},{tag:"path",attr:{d:"M455.2 129.3l-65.8-5.7-6.1-67c-1.3-14.9-14.5-25.9-29.5-24.5L56.7 58.9c-14.9 1.3-25.9 14.5-24.6 29.4l26.8 296.5c1.3 14.9 14.5 25.9 29.5 24.5l15.7-1.4-1.5 16.7c-1.3 14.9 9.7 28 24.7 29.3l297.3 25.9c14.9 1.3 28.1-9.7 29.4-24.6l26-296.6c1.2-14.8-9.8-28-24.8-29.3zM87.6 300.7c-3.7.3-7-2.4-7.4-6.1l-18-200c-.3-3.7 2.4-7 6.1-7.3l279.2-25.1c3.7-.3 7 2.4 7.4 6.1l4.8 52.8L158 103.4c-14.9-1.3-28.1 9.7-29.4 24.6l-14.9 170.3-26.1 2.4zm362.2-135.6l-17.5 200c-.3 3.7-3.6 6.5-7.3 6.2l-18.6-1.6L145.7 347c-3.7-.3-6.5-3.6-6.2-7.3l3.8-43.9L157 139.7c.3-3.7 3.6-6.5 7.3-6.2l198 17.3 29.7 2.6 51.6 4.5c3.8.2 6.6 3.5 6.2 7.2z"},child:[]}]})(o)}const m1=({book:o})=>{var Xn,Rn,on,Sn;const[f,s]=Ft.useState(!1),[c,S]=Ft.useState(!1);console.log(o.volumeInfo);const{volumeInfo:A}=o,{pageCount:q,publisher:w,publishedDate:D,title:x,subtitle:N}=A,I=((Xn=A.authors)==null?void 0:Xn.join(", "))||"Unknown Author",J=(Rn=A.imageLinks)==null?void 0:Rn.thumbnail,yn=((on=A.description)==null?void 0:on.slice(0,200))+"..."||"No Description Available",L=A.description||"No Description Available",M=((Sn=A.categories)==null?void 0:Sn.join(", "))||"No Categories Available",V=()=>{S(!0)};return k.jsxs("div",{children:[k.jsxs("div",{className:at.card,children:[J&&!c?k.jsx("div",{className:at.thumbnailContainer,children:k.jsx("img",{src:J,alt:`${x} cover`,className:at.thumbnail,onError:V})}):k.jsxs("div",{className:at.placeholder,children:[k.jsx("div",{className:at.icon,children:k.jsx(b1,{})}),k.jsx("div",{children:" No cover available"})]}),k.jsxs("div",{className:at.content,children:[k.jsx("h2",{className:at.title,children:x}),k.jsx("h2",{className:at.subtitle,children:N}),k.jsx("p",{className:at.authors,children:I}),k.jsx("p",{className:at.description,children:yn}),k.jsx("p",{className:at.categories,children:M})]}),k.jsx("div",{className:at.footer,children:k.jsx("button",{className:at.detailsButton,onClick:()=>s(!0),children:"Details"})})]}),k.jsxs(h1,{isOpen:f,onClose:()=>s(!1),children:[k.jsx("h2",{children:x}),k.jsx("p",{style:{display:"flex",justifyContent:"center"},children:J&&!c?k.jsx("img",{src:J,alt:`${x} cover`,className:at.thumbnail,onError:V}):k.jsxs("div",{children:[k.jsx("p",{children:"No Cover Available"}),k.jsx("p",{children:x})]})}),k.jsxs("p",{children:[k.jsx("strong",{children:"Subtitle:"})," ",N]}),k.jsxs("p",{children:[k.jsx("strong",{children:"Author:"})," ",I]}),k.jsxs("p",{children:[k.jsx("strong",{children:"Description:"})," ",L]}),k.jsxs("p",{children:[k.jsx("strong",{children:"Publisher:"})," ",w]}),k.jsxs("p",{children:[k.jsx("strong",{children:"Published date:"})," ",D]}),k.jsxs("p",{children:[k.jsx("strong",{children:"Pages:"})," ",q]})]})]})},p1=({books:o})=>o.length?k.jsx("div",{className:$b.grid,children:o.map(f=>k.jsx(m1,{book:f},f.id))}):k.jsx("p",{style:{color:"white",backgroundColor:"crimson",padding:"1rem",borderRadius:".3rem"},children:"No results found. Please try another title."}),v1="_container_dp4gj_1",g1="_title_dp4gj_6",y1="_buttonContainer_dp4gj_12",x1="_genreButton_dp4gj_21",S1="_active_dp4gj_42",Re={container:v1,title:g1,buttonContainer:y1,genreButton:x1,active:S1},O1=({onSelectGenre:o,activeGenre:f})=>{const s=["fiction","programming","science fiction","history","self-help","romance","biography","thriller","fantasy","health","travel","cookbook","medicine","philosophy","psychology"];return k.jsxs("div",{className:Re.container,children:[k.jsx("h3",{className:Re.title,children:"Popular Genres"}),k.jsx("div",{className:Re.buttonContainer,children:s.map(c=>k.jsx("button",{className:`${Re.genreButton} ${c===f?Re.active:""}`,onClick:()=>o(c),children:c},c))})]})},z1="https://www.googleapis.com/books/v1/volumes",_1="AIzaSyDyKIDlg2DHuuGGaQ6S9TShmJVYp5hpb5U";async function T1(o){try{const f=`${z1}?q=${o}&orderBy=newest&maxResults=40&key=${_1}`,s=await fetch(f);if(!s.ok)throw new Error("Failed to fetch books");return(await s.json()).items||[]}catch(f){return console.error("Error fetching books:",f),[]}}function Hn(o,f){f===void 0&&(f={});var s=f.insertAt;if(o&&typeof document<"u"){var c=document.head||document.getElementsByTagName("head")[0],S=document.createElement("style");S.type="text/css",s==="top"&&c.firstChild?c.insertBefore(S,c.firstChild):c.appendChild(S),S.styleSheet?S.styleSheet.cssText=o:S.appendChild(document.createTextNode(o))}}Hn(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var kt=function(){return kt=Object.assign||function(o){for(var f,s=1,c=arguments.length;s<c;s++)for(var S in f=arguments[s])Object.prototype.hasOwnProperty.call(f,S)&&(o[S]=f[S]);return o},kt.apply(this,arguments)};function Ii(o){return Ii=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(f){return typeof f}:function(f){return f&&typeof Symbol=="function"&&f.constructor===Symbol&&f!==Symbol.prototype?"symbol":typeof f},Ii(o)}var A1=/^\s+/,E1=/\s+$/;function Y(o,f){if(f=f||{},(o=o||"")instanceof Y)return o;if(!(this instanceof Y))return new Y(o,f);var s=function(c){var S={r:0,g:0,b:0},A=1,q=null,w=null,D=null,x=!1,N=!1;typeof c=="string"&&(c=function(L){L=L.replace(A1,"").replace(E1,"").toLowerCase();var M,V=!1;if(Ar[L])L=Ar[L],V=!0;else if(L=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(M=At.rgb.exec(L))?{r:M[1],g:M[2],b:M[3]}:(M=At.rgba.exec(L))?{r:M[1],g:M[2],b:M[3],a:M[4]}:(M=At.hsl.exec(L))?{h:M[1],s:M[2],l:M[3]}:(M=At.hsla.exec(L))?{h:M[1],s:M[2],l:M[3],a:M[4]}:(M=At.hsv.exec(L))?{h:M[1],s:M[2],v:M[3]}:(M=At.hsva.exec(L))?{h:M[1],s:M[2],v:M[3],a:M[4]}:(M=At.hex8.exec(L))?{r:ht(M[1]),g:ht(M[2]),b:ht(M[3]),a:Cd(M[4]),format:V?"name":"hex8"}:(M=At.hex6.exec(L))?{r:ht(M[1]),g:ht(M[2]),b:ht(M[3]),format:V?"name":"hex"}:(M=At.hex4.exec(L))?{r:ht(M[1]+""+M[1]),g:ht(M[2]+""+M[2]),b:ht(M[3]+""+M[3]),a:Cd(M[4]+""+M[4]),format:V?"name":"hex8"}:(M=At.hex3.exec(L))?{r:ht(M[1]+""+M[1]),g:ht(M[2]+""+M[2]),b:ht(M[3]+""+M[3]),format:V?"name":"hex"}:!1}(c)),Ii(c)=="object"&&(Wt(c.r)&&Wt(c.g)&&Wt(c.b)?(I=c.r,J=c.g,yn=c.b,S={r:255*gn(I,255),g:255*gn(J,255),b:255*gn(yn,255)},x=!0,N=String(c.r).substr(-1)==="%"?"prgb":"rgb"):Wt(c.h)&&Wt(c.s)&&Wt(c.v)?(q=Ne(c.s),w=Ne(c.v),S=function(L,M,V){L=6*gn(L,360),M=gn(M,100),V=gn(V,100);var Xn=Math.floor(L),Rn=L-Xn,on=V*(1-M),Sn=V*(1-Rn*M),P=V*(1-(1-Rn)*M),Tn=Xn%6,An=[V,Sn,on,on,P,V][Tn],Nn=[P,V,V,Sn,on,on][Tn],On=[on,on,P,V,V,Sn][Tn];return{r:255*An,g:255*Nn,b:255*On}}(c.h,q,w),x=!0,N="hsv"):Wt(c.h)&&Wt(c.s)&&Wt(c.l)&&(q=Ne(c.s),D=Ne(c.l),S=function(L,M,V){var Xn,Rn,on;function Sn(An,Nn,On){return On<0&&(On+=1),On>1&&(On-=1),On<1/6?An+6*(Nn-An)*On:On<.5?Nn:On<2/3?An+(Nn-An)*(2/3-On)*6:An}if(L=gn(L,360),M=gn(M,100),V=gn(V,100),M===0)Xn=Rn=on=V;else{var P=V<.5?V*(1+M):V+M-V*M,Tn=2*V-P;Xn=Sn(Tn,P,L+1/3),Rn=Sn(Tn,P,L),on=Sn(Tn,P,L-1/3)}return{r:255*Xn,g:255*Rn,b:255*on}}(c.h,q,D),x=!0,N="hsl"),c.hasOwnProperty("a")&&(A=c.a));var I,J,yn;return A=Zd(A),{ok:x,format:c.format||N,r:Math.min(255,Math.max(S.r,0)),g:Math.min(255,Math.max(S.g,0)),b:Math.min(255,Math.max(S.b,0)),a:A}}(o);this._originalInput=o,this._r=s.r,this._g=s.g,this._b=s.b,this._a=s.a,this._roundA=Math.round(100*this._a)/100,this._format=f.format||s.format,this._gradientType=f.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=s.ok}function kd(o,f,s){o=gn(o,255),f=gn(f,255),s=gn(s,255);var c,S,A=Math.max(o,f,s),q=Math.min(o,f,s),w=(A+q)/2;if(A==q)c=S=0;else{var D=A-q;switch(S=w>.5?D/(2-A-q):D/(A+q),A){case o:c=(f-s)/D+(f<s?6:0);break;case f:c=(s-o)/D+2;break;case s:c=(o-f)/D+4}c/=6}return{h:c,s:S,l:w}}function Hd(o,f,s){o=gn(o,255),f=gn(f,255),s=gn(s,255);var c,S,A=Math.max(o,f,s),q=Math.min(o,f,s),w=A,D=A-q;if(S=A===0?0:D/A,A==q)c=0;else{switch(A){case o:c=(f-s)/D+(f<s?6:0);break;case f:c=(s-o)/D+2;break;case s:c=(o-f)/D+4}c/=6}return{h:c,s:S,v:w}}function jd(o,f,s,c){var S=[Et(Math.round(o).toString(16)),Et(Math.round(f).toString(16)),Et(Math.round(s).toString(16))];return c&&S[0].charAt(0)==S[0].charAt(1)&&S[1].charAt(0)==S[1].charAt(1)&&S[2].charAt(0)==S[2].charAt(1)?S[0].charAt(0)+S[1].charAt(0)+S[2].charAt(0):S.join("")}function Bd(o,f,s,c){return[Et(wd(c)),Et(Math.round(o).toString(16)),Et(Math.round(f).toString(16)),Et(Math.round(s).toString(16))].join("")}function D1(o,f){f=f===0?0:f||10;var s=Y(o).toHsl();return s.s-=f/100,s.s=nu(s.s),Y(s)}function M1(o,f){f=f===0?0:f||10;var s=Y(o).toHsl();return s.s+=f/100,s.s=nu(s.s),Y(s)}function q1(o){return Y(o).desaturate(100)}function R1(o,f){f=f===0?0:f||10;var s=Y(o).toHsl();return s.l+=f/100,s.l=nu(s.l),Y(s)}function N1(o,f){f=f===0?0:f||10;var s=Y(o).toRgb();return s.r=Math.max(0,Math.min(255,s.r-Math.round(-f/100*255))),s.g=Math.max(0,Math.min(255,s.g-Math.round(-f/100*255))),s.b=Math.max(0,Math.min(255,s.b-Math.round(-f/100*255))),Y(s)}function U1(o,f){f=f===0?0:f||10;var s=Y(o).toHsl();return s.l-=f/100,s.l=nu(s.l),Y(s)}function k1(o,f){var s=Y(o).toHsl(),c=(s.h+f)%360;return s.h=c<0?360+c:c,Y(s)}function H1(o){var f=Y(o).toHsl();return f.h=(f.h+180)%360,Y(f)}function Yd(o,f){if(isNaN(f)||f<=0)throw new Error("Argument to polyad must be a positive number");for(var s=Y(o).toHsl(),c=[Y(o)],S=360/f,A=1;A<f;A++)c.push(Y({h:(s.h+A*S)%360,s:s.s,l:s.l}));return c}function j1(o){var f=Y(o).toHsl(),s=f.h;return[Y(o),Y({h:(s+72)%360,s:f.s,l:f.l}),Y({h:(s+216)%360,s:f.s,l:f.l})]}function B1(o,f,s){f=f||6,s=s||30;var c=Y(o).toHsl(),S=360/s,A=[Y(o)];for(c.h=(c.h-(S*f>>1)+720)%360;--f;)c.h=(c.h+S)%360,A.push(Y(c));return A}function Y1(o,f){f=f||6;for(var s=Y(o).toHsv(),c=s.h,S=s.s,A=s.v,q=[],w=1/f;f--;)q.push(Y({h:c,s:S,v:A})),A=(A+w)%1;return q}Y.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var o=this.toRgb();return(299*o.r+587*o.g+114*o.b)/1e3},getLuminance:function(){var o,f,s,c=this.toRgb();return o=c.r/255,f=c.g/255,s=c.b/255,.2126*(o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4))+.7152*(f<=.03928?f/12.92:Math.pow((f+.055)/1.055,2.4))+.0722*(s<=.03928?s/12.92:Math.pow((s+.055)/1.055,2.4))},setAlpha:function(o){return this._a=Zd(o),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var o=Hd(this._r,this._g,this._b);return{h:360*o.h,s:o.s,v:o.v,a:this._a}},toHsvString:function(){var o=Hd(this._r,this._g,this._b),f=Math.round(360*o.h),s=Math.round(100*o.s),c=Math.round(100*o.v);return this._a==1?"hsv("+f+", "+s+"%, "+c+"%)":"hsva("+f+", "+s+"%, "+c+"%, "+this._roundA+")"},toHsl:function(){var o=kd(this._r,this._g,this._b);return{h:360*o.h,s:o.s,l:o.l,a:this._a}},toHslString:function(){var o=kd(this._r,this._g,this._b),f=Math.round(360*o.h),s=Math.round(100*o.s),c=Math.round(100*o.l);return this._a==1?"hsl("+f+", "+s+"%, "+c+"%)":"hsla("+f+", "+s+"%, "+c+"%, "+this._roundA+")"},toHex:function(o){return jd(this._r,this._g,this._b,o)},toHexString:function(o){return"#"+this.toHex(o)},toHex8:function(o){return function(f,s,c,S,A){var q=[Et(Math.round(f).toString(16)),Et(Math.round(s).toString(16)),Et(Math.round(c).toString(16)),Et(wd(S))];return A&&q[0].charAt(0)==q[0].charAt(1)&&q[1].charAt(0)==q[1].charAt(1)&&q[2].charAt(0)==q[2].charAt(1)&&q[3].charAt(0)==q[3].charAt(1)?q[0].charAt(0)+q[1].charAt(0)+q[2].charAt(0)+q[3].charAt(0):q.join("")}(this._r,this._g,this._b,this._a,o)},toHex8String:function(o){return"#"+this.toHex8(o)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*gn(this._r,255))+"%",g:Math.round(100*gn(this._g,255))+"%",b:Math.round(100*gn(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*gn(this._r,255))+"%, "+Math.round(100*gn(this._g,255))+"%, "+Math.round(100*gn(this._b,255))+"%)":"rgba("+Math.round(100*gn(this._r,255))+"%, "+Math.round(100*gn(this._g,255))+"%, "+Math.round(100*gn(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(C1[jd(this._r,this._g,this._b,!0)]||!1)},toFilter:function(o){var f="#"+Bd(this._r,this._g,this._b,this._a),s=f,c=this._gradientType?"GradientType = 1, ":"";if(o){var S=Y(o);s="#"+Bd(S._r,S._g,S._b,S._a)}return"progid:DXImageTransform.Microsoft.gradient("+c+"startColorstr="+f+",endColorstr="+s+")"},toString:function(o){var f=!!o;o=o||this._format;var s=!1,c=this._a<1&&this._a>=0;return f||!c||o!=="hex"&&o!=="hex6"&&o!=="hex3"&&o!=="hex4"&&o!=="hex8"&&o!=="name"?(o==="rgb"&&(s=this.toRgbString()),o==="prgb"&&(s=this.toPercentageRgbString()),o!=="hex"&&o!=="hex6"||(s=this.toHexString()),o==="hex3"&&(s=this.toHexString(!0)),o==="hex4"&&(s=this.toHex8String(!0)),o==="hex8"&&(s=this.toHex8String()),o==="name"&&(s=this.toName()),o==="hsl"&&(s=this.toHslString()),o==="hsv"&&(s=this.toHsvString()),s||this.toHexString()):o==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return Y(this.toString())},_applyModification:function(o,f){var s=o.apply(null,[this].concat([].slice.call(f)));return this._r=s._r,this._g=s._g,this._b=s._b,this.setAlpha(s._a),this},lighten:function(){return this._applyModification(R1,arguments)},brighten:function(){return this._applyModification(N1,arguments)},darken:function(){return this._applyModification(U1,arguments)},desaturate:function(){return this._applyModification(D1,arguments)},saturate:function(){return this._applyModification(M1,arguments)},greyscale:function(){return this._applyModification(q1,arguments)},spin:function(){return this._applyModification(k1,arguments)},_applyCombination:function(o,f){return o.apply(null,[this].concat([].slice.call(f)))},analogous:function(){return this._applyCombination(B1,arguments)},complement:function(){return this._applyCombination(H1,arguments)},monochromatic:function(){return this._applyCombination(Y1,arguments)},splitcomplement:function(){return this._applyCombination(j1,arguments)},triad:function(){return this._applyCombination(Yd,[3])},tetrad:function(){return this._applyCombination(Yd,[4])}},Y.fromRatio=function(o,f){if(Ii(o)=="object"){var s={};for(var c in o)o.hasOwnProperty(c)&&(s[c]=c==="a"?o[c]:Ne(o[c]));o=s}return Y(o,f)},Y.equals=function(o,f){return!(!o||!f)&&Y(o).toRgbString()==Y(f).toRgbString()},Y.random=function(){return Y.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},Y.mix=function(o,f,s){s=s===0?0:s||50;var c=Y(o).toRgb(),S=Y(f).toRgb(),A=s/100;return Y({r:(S.r-c.r)*A+c.r,g:(S.g-c.g)*A+c.g,b:(S.b-c.b)*A+c.b,a:(S.a-c.a)*A+c.a})},Y.readability=function(o,f){var s=Y(o),c=Y(f);return(Math.max(s.getLuminance(),c.getLuminance())+.05)/(Math.min(s.getLuminance(),c.getLuminance())+.05)},Y.isReadable=function(o,f,s){var c,S,A=Y.readability(o,f);switch(S=!1,(c=function(q){var w,D;return w=((q=q||{level:"AA",size:"small"}).level||"AA").toUpperCase(),D=(q.size||"small").toLowerCase(),w!=="AA"&&w!=="AAA"&&(w="AA"),D!=="small"&&D!=="large"&&(D="small"),{level:w,size:D}}(s)).level+c.size){case"AAsmall":case"AAAlarge":S=A>=4.5;break;case"AAlarge":S=A>=3;break;case"AAAsmall":S=A>=7}return S},Y.mostReadable=function(o,f,s){var c,S,A,q,w=null,D=0;S=(s=s||{}).includeFallbackColors,A=s.level,q=s.size;for(var x=0;x<f.length;x++)(c=Y.readability(o,f[x]))>D&&(D=c,w=Y(f[x]));return Y.isReadable(o,w,{level:A,size:q})||!S?w:(s.includeFallbackColors=!1,Y.mostReadable(o,["#fff","#000"],s))};var Ar=Y.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},C1=Y.hexNames=function(o){var f={};for(var s in o)o.hasOwnProperty(s)&&(f[o[s]]=s);return f}(Ar);function Zd(o){return o=parseFloat(o),(isNaN(o)||o<0||o>1)&&(o=1),o}function gn(o,f){(function(c){return typeof c=="string"&&c.indexOf(".")!=-1&&parseFloat(c)===1})(o)&&(o="100%");var s=function(c){return typeof c=="string"&&c.indexOf("%")!=-1}(o);return o=Math.min(f,Math.max(0,parseFloat(o))),s&&(o=parseInt(o*f,10)/100),Math.abs(o-f)<1e-6?1:o%f/parseFloat(f)}function nu(o){return Math.min(1,Math.max(0,o))}function ht(o){return parseInt(o,16)}function Et(o){return o.length==1?"0"+o:""+o}function Ne(o){return o<=1&&(o=100*o+"%"),o}function wd(o){return Math.round(255*parseFloat(o)).toString(16)}function Cd(o){return ht(o)/255}var _a,Pi,$i,At=(Pi="[\\s|\\(]+("+(_a="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+_a+")[,|\\s]+("+_a+")\\s*\\)?",$i="[\\s|\\(]+("+_a+")[,|\\s]+("+_a+")[,|\\s]+("+_a+")[,|\\s]+("+_a+")\\s*\\)?",{CSS_UNIT:new RegExp(_a),rgb:new RegExp("rgb"+Pi),rgba:new RegExp("rgba"+$i),hsl:new RegExp("hsl"+Pi),hsla:new RegExp("hsla"+$i),hsv:new RegExp("hsv"+Pi),hsva:new RegExp("hsva"+$i),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function Wt(o){return!!At.CSS_UNIT.exec(o)}var X1=function(o,f){var s=(typeof o=="string"?parseInt(o):o)||0;if(s>=-5&&s<=5){var c=s,S=parseFloat(f),A=S+c*(S/5)*-1;return(A==0||A<=Number.EPSILON)&&(A=.1),{animationPeriod:A+"s"}}return{animationPeriod:f}},G1=function(o,f){var s=o||{},c="";switch(f){case"small":c="12px";break;case"medium":c="16px";break;case"large":c="20px";break;default:c=void 0}var S={};if(s.fontSize){var A=s.fontSize;S=function(q,w){var D={};for(var x in q)Object.prototype.hasOwnProperty.call(q,x)&&w.indexOf(x)<0&&(D[x]=q[x]);if(q!=null&&typeof Object.getOwnPropertySymbols=="function"){var N=0;for(x=Object.getOwnPropertySymbols(q);N<x.length;N++)w.indexOf(x[N])<0&&Object.prototype.propertyIsEnumerable.call(q,x[N])&&(D[x[N]]=q[x[N]])}return D}(s,["fontSize"]),c=A}return{fontSize:c,styles:S}},Q1={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},Z1=function(o){var f=o.className,s=o.text,c=o.textColor,S=o.staticText,A=o.style;return s?Pn.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(f||"").trim(),style:kt(kt(kt({},S&&Q1),c&&{color:c,mixBlendMode:"unset"}),A&&A)},typeof s=="string"&&s.length?s:"loading"):null},Ld="rgb(50, 205, 50)";function w1(o,f){f===void 0&&(f=0);var s=[];return function c(S,A){return A===void 0&&(A=0),s.push.apply(s,S),s.length<A&&c(s,A),s.slice(0,A)}(o,f)}Hn(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6fj;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6de;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6ex, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6g6;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6h4;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6e7, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6fj;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6ex {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes u1qz6e7 {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes u1qz6de {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes u1qz6fj {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes u1qz6g6 {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes u1qz6h4 {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);Y(Ld).toRgb();Array.from({length:4},function(o,f){return"--atom-phase".concat(f+1,"-rgb")});Hn(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite u1qz6k3;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: u1qz6j2 var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6j2 {
  to {
    transform: rotate(1turn);
  }
}
@keyframes u1qz6k3 {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},function(o,f){return"--commet-phase".concat(f+1,"-color")});Hn(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: u1qz6pz calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite u1qz6r6, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6sy;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes u1qz6pz {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes u1qz6r6 {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes u1qz6sy {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);Array.from({length:4},function(o,f){return"--OP-annulus-phase".concat(f+1,"-color")});function Tr(o){return o&&o.Math===Math&&o}Hn(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite u1qz6qy, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6s0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6qy {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes u1qz6s0 {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);Tr(typeof window=="object"&&window)||Tr(typeof self=="object"&&self)||Tr(typeof global=="object"&&global)||function(){return this}()||Function("return this")();Array.from({length:4},function(o,f){return"--OP-dotted-phase".concat(f+1,"-color")});Hn(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite u1qz6sz, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6t3;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6sz {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes u1qz6t3 {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);Array.from({length:4},function(o,f){return"--OP-spokes-phase".concat(f+1,"-color")});Hn(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite u1qz6t5, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite u1qz6uw;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6t5 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes u1qz6uw {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);Array.from({length:4},function(o,f){return"--OP-annulus-dual-sectors-phase".concat(f+1,"-color")});Hn(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6tq, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6v8;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6tq {
  to {
    transform: rotate(1turn);
  }
}
@keyframes u1qz6v8 {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);Array.from({length:4},function(o,f){return["--OP-annulus-track-phase".concat(f+1,"-color"),"--OP-annulus-sector-phase".concat(f+1,"-color")]});Hn(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite u1qz6cv, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite u1qz6e3;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: u1qz6cr var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6cv {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes u1qz6cr {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes u1qz6e3 {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);var Rl=Array.from({length:4},function(o,f){return"--four-square-phase".concat(f+1,"-color")}),L1=function(o){var f,s=G1(o==null?void 0:o.style,o==null?void 0:o.size),c=s.styles,S=s.fontSize,A=o==null?void 0:o.easing,q=X1(o==null?void 0:o.speedPlus,"1s").animationPeriod,w=function(D){var x={};if(D instanceof Array){for(var N=w1(D,Rl.length),I=0;I<N.length&&!(I>=4);I++)x[Rl[I]]=N[I];return x}try{if(typeof D!="string")throw new Error("Color String expected");for(var J=0;J<Rl.length;J++)x[Rl[J]]=D}catch(yn){for(yn instanceof Error?console.warn("[".concat(yn.message,']: Received "').concat(typeof D,'" instead with value, ').concat(JSON.stringify(D))):console.warn("".concat(JSON.stringify(D)," received in <FourSquare /> indicator cannot be processed. Using default instead!")),J=0;J<Rl.length;J++)x[Rl[J]]=Ld}return x}((f=o==null?void 0:o.color)!==null&&f!==void 0?f:"");return Pn.createElement("span",{className:"rli-d-i-b foursquare-rli-bounding-box",style:kt(kt(kt(kt(kt({},S&&{fontSize:S}),q&&{"--rli-animation-duration":q}),A&&{"--rli-animation-function":A}),w),c),role:"status","aria-live":"polite","aria-label":"Loading"},Pn.createElement("span",{className:"rli-d-i-b foursquare-indicator"},Pn.createElement("span",{className:"squares-container"},Pn.createElement("span",{className:"square square1"}),Pn.createElement("span",{className:"square square2"}),Pn.createElement("span",{className:"square square3"}),Pn.createElement("span",{className:"square square4"}))),Pn.createElement(Z1,{text:o==null?void 0:o.text,textColor:o==null?void 0:o.textColor,staticText:!0}))};Hn(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: u1qz6bl, u1qz6c9;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes u1qz6bl {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes u1qz6c9 {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},function(o,f){return"--mosaic-phase".concat(f+1,"-color")});Hn(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite u1qz6mm, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite u1qz6og;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6mm {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes u1qz6og {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},function(o,f){return"--riple-phase".concat(f+1,"-color")});Hn(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite u1qz6uj, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite u1qz6vi;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6uj {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes u1qz6vi {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);Array.from({length:4},function(o,f){return"--TD-pulsate-phase".concat(f+1,"-color")});Hn(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite u1qz6w1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite u1qz6x5;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6w1 {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes u1qz6x5 {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);Array.from({length:4},function(o,f){return"--TD-brick-stack-phase".concat(f+1,"-color")});Hn(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite u1qz6wd, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite u1qz6xx;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6wd {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes u1qz6xx {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);Array.from({length:4},function(o,f){return"--TD-bob-phase".concat(f+1,"-color")});Hn(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite u1qz6yl, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite u1qz6zs;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite u1qz6z4;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes u1qz6yl {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes u1qz6z4 {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes u1qz6zs {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);Array.from({length:4},function(o,f){return"--TD-bounce-phase".concat(f+1,"-color")});Hn(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: u1qz6i2, u1qz6js;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6i2 {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes u1qz6js {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},function(o,f){return"--shape-phase".concat(f+1,"-color")});Hn(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: u1qz6nk var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, u1qz6op calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, u1qz6pg calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes u1qz6nk {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes u1qz6op {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes u1qz6pg {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},function(o,f){return"--trophySpin-phase".concat(f+1,"-color")});Hn(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite u1qz6km, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite u1qz6lk;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes u1qz6km {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes u1qz6lk {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},function(o,f){return"--slab-phase".concat(f+1,"-color")});Hn(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite u1qz6lr, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite u1qz6m8;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes u1qz6lr {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes u1qz6m8 {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},function(o,f){return"--life-line-phase".concat(f+1,"-color")});function V1(){const[o,f]=Ft.useState([]),[s,c]=Ft.useState(!0),[S,A]=Ft.useState("Non-Fiction"),q=async D=>{try{c(!0),D.includes("subject:")||A(null);const x=await T1(D);f(x),c(!1)}catch(x){console.error("Error fetching books:",x),c(!1)}},w=D=>{A(D),q(`subject:${D}`)};return Ft.useEffect(()=>{q("computers")},[]),s?k.jsx("div",{className:"loading",children:k.jsx(L1,{color:["#3a4a3d","#a7c957","#bc4749","#1d384a"],size:"large",text:"loading books...",textColor:""})}):k.jsxs(Jb,{children:[k.jsx(Bb,{onSearch:q})," ",k.jsx(O1,{onSelectGenre:w,activeGenre:S}),k.jsx(p1,{books:o})]})}_b.createRoot(document.getElementById("root")).render(k.jsx(Ft.StrictMode,{children:k.jsx(V1,{})}));
