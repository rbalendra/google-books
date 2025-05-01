(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const S of document.querySelectorAll('link[rel="modulepreload"]'))c(S);new MutationObserver(S=>{for(const A of S)if(A.type==="childList")for(const N of A.addedNodes)N.tagName==="LINK"&&N.rel==="modulepreload"&&c(N)}).observe(document,{childList:!0,subtree:!0});function f(S){const A={};return S.integrity&&(A.integrity=S.integrity),S.referrerPolicy&&(A.referrerPolicy=S.referrerPolicy),S.crossOrigin==="use-credentials"?A.credentials="include":S.crossOrigin==="anonymous"?A.credentials="omit":A.credentials="same-origin",A}function c(S){if(S.ep)return;S.ep=!0;const A=f(S);fetch(S.href,A)}})();function mb(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var gr={exports:{}},Ne={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Od;function vb(){if(Od)return Ne;Od=1;var o=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function f(c,S,A){var N=null;if(A!==void 0&&(N=""+A),S.key!==void 0&&(N=""+S.key),"key"in S){A={};for(var V in S)V!=="key"&&(A[V]=S[V])}else A=S;return S=A.ref,{$$typeof:o,type:c,key:N,ref:S!==void 0?S:null,props:A}}return Ne.Fragment=s,Ne.jsx=f,Ne.jsxs=f,Ne}var _d;function pb(){return _d||(_d=1,gr.exports=vb()),gr.exports}var q=pb(),yr={exports:{}},$={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Td;function gb(){if(Td)return $;Td=1;var o=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),A=Symbol.for("react.consumer"),N=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),W=Symbol.iterator;function K(h){return h===null||typeof h!="object"?null:(h=W&&h[W]||h["@@iterator"],typeof h=="function"?h:null)}var hn={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,M={};function Y(h,E,H){this.props=h,this.context=E,this.refs=M,this.updater=H||hn}Y.prototype.isReactComponent={},Y.prototype.setState=function(h,E){if(typeof h!="object"&&typeof h!="function"&&h!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,h,E,"setState")},Y.prototype.forceUpdate=function(h){this.updater.enqueueForceUpdate(this,h,"forceUpdate")};function Rn(){}Rn.prototype=Y.prototype;function pn(h,E,H){this.props=h,this.context=E,this.refs=M,this.updater=H||hn}var on=pn.prototype=new Rn;on.constructor=pn,w(on,Y.prototype),on.isPureReactComponent=!0;var Tn=Array.isArray,J={H:null,A:null,T:null,S:null,V:null},gn=Object.prototype.hasOwnProperty;function On(h,E,H,U,X,ln){return H=ln.ref,{$$typeof:o,type:h,key:E,ref:H!==void 0?H:null,props:ln}}function Un(h,E){return On(h.type,E,void 0,void 0,void 0,h.props)}function An(h){return typeof h=="object"&&h!==null&&h.$$typeof===o}function Va(h){var E={"=":"=0",":":"=2"};return"$"+h.replace(/[=:]/g,function(H){return E[H]})}var jt=/\/+/g;function wn(h,E){return typeof h=="object"&&h!==null&&h.key!=null?Va(""+h.key):E.toString(36)}function za(){}function Ea(h){switch(h.status){case"fulfilled":return h.value;case"rejected":throw h.reason;default:switch(typeof h.status=="string"?h.then(za,za):(h.status="pending",h.then(function(E){h.status==="pending"&&(h.status="fulfilled",h.value=E)},function(E){h.status==="pending"&&(h.status="rejected",h.reason=E)})),h.status){case"fulfilled":return h.value;case"rejected":throw h.reason}}throw h}function Ln(h,E,H,U,X){var ln=typeof h;(ln==="undefined"||ln==="boolean")&&(h=null);var P=!1;if(h===null)P=!0;else switch(ln){case"bigint":case"string":case"number":P=!0;break;case"object":switch(h.$$typeof){case o:case s:P=!0;break;case R:return P=h._init,Ln(P(h._payload),E,H,U,X)}}if(P)return X=X(h),P=U===""?"."+wn(h,0):U,Tn(X)?(H="",P!=null&&(H=P.replace(jt,"$&/")+"/"),Ln(X,E,H,"",function(It){return It})):X!=null&&(An(X)&&(X=Un(X,H+(X.key==null||h&&h.key===X.key?"":(""+X.key).replace(jt,"$&/")+"/")+P)),E.push(X)),1;P=0;var et=U===""?".":U+":";if(Tn(h))for(var yn=0;yn<h.length;yn++)U=h[yn],ln=et+wn(U,yn),P+=Ln(U,E,H,ln,X);else if(yn=K(h),typeof yn=="function")for(h=yn.call(h),yn=0;!(U=h.next()).done;)U=U.value,ln=et+wn(U,yn++),P+=Ln(U,E,H,ln,X);else if(ln==="object"){if(typeof h.then=="function")return Ln(Ea(h),E,H,U,X);throw E=String(h),Error("Objects are not valid as a React child (found: "+(E==="[object Object]"?"object with keys {"+Object.keys(h).join(", ")+"}":E)+"). If you meant to render a collection of children, use an array instead.")}return P}function _(h,E,H){if(h==null)return h;var U=[],X=0;return Ln(h,U,"","",function(ln){return E.call(H,ln,X++)}),U}function k(h){if(h._status===-1){var E=h._result;E=E(),E.then(function(H){(h._status===0||h._status===-1)&&(h._status=1,h._result=H)},function(H){(h._status===0||h._status===-1)&&(h._status=2,h._result=H)}),h._status===-1&&(h._status=0,h._result=E)}if(h._status===1)return h._result.default;throw h._result}var Z=typeof reportError=="function"?reportError:function(h){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var E=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof h=="object"&&h!==null&&typeof h.message=="string"?String(h.message):String(h),error:h});if(!window.dispatchEvent(E))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",h);return}console.error(h)};function bn(){}return $.Children={map:_,forEach:function(h,E,H){_(h,function(){E.apply(this,arguments)},H)},count:function(h){var E=0;return _(h,function(){E++}),E},toArray:function(h){return _(h,function(E){return E})||[]},only:function(h){if(!An(h))throw Error("React.Children.only expected to receive a single React element child.");return h}},$.Component=Y,$.Fragment=f,$.Profiler=S,$.PureComponent=pn,$.StrictMode=c,$.Suspense=D,$.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=J,$.__COMPILER_RUNTIME={__proto__:null,c:function(h){return J.H.useMemoCache(h)}},$.cache=function(h){return function(){return h.apply(null,arguments)}},$.cloneElement=function(h,E,H){if(h==null)throw Error("The argument must be a React element, but you passed "+h+".");var U=w({},h.props),X=h.key,ln=void 0;if(E!=null)for(P in E.ref!==void 0&&(ln=void 0),E.key!==void 0&&(X=""+E.key),E)!gn.call(E,P)||P==="key"||P==="__self"||P==="__source"||P==="ref"&&E.ref===void 0||(U[P]=E[P]);var P=arguments.length-2;if(P===1)U.children=H;else if(1<P){for(var et=Array(P),yn=0;yn<P;yn++)et[yn]=arguments[yn+2];U.children=et}return On(h.type,X,void 0,void 0,ln,U)},$.createContext=function(h){return h={$$typeof:N,_currentValue:h,_currentValue2:h,_threadCount:0,Provider:null,Consumer:null},h.Provider=h,h.Consumer={$$typeof:A,_context:h},h},$.createElement=function(h,E,H){var U,X={},ln=null;if(E!=null)for(U in E.key!==void 0&&(ln=""+E.key),E)gn.call(E,U)&&U!=="key"&&U!=="__self"&&U!=="__source"&&(X[U]=E[U]);var P=arguments.length-2;if(P===1)X.children=H;else if(1<P){for(var et=Array(P),yn=0;yn<P;yn++)et[yn]=arguments[yn+2];X.children=et}if(h&&h.defaultProps)for(U in P=h.defaultProps,P)X[U]===void 0&&(X[U]=P[U]);return On(h,ln,void 0,void 0,null,X)},$.createRef=function(){return{current:null}},$.forwardRef=function(h){return{$$typeof:V,render:h}},$.isValidElement=An,$.lazy=function(h){return{$$typeof:R,_payload:{_status:-1,_result:h},_init:k}},$.memo=function(h,E){return{$$typeof:x,type:h,compare:E===void 0?null:E}},$.startTransition=function(h){var E=J.T,H={};J.T=H;try{var U=h(),X=J.S;X!==null&&X(H,U),typeof U=="object"&&U!==null&&typeof U.then=="function"&&U.then(bn,Z)}catch(ln){Z(ln)}finally{J.T=E}},$.unstable_useCacheRefresh=function(){return J.H.useCacheRefresh()},$.use=function(h){return J.H.use(h)},$.useActionState=function(h,E,H){return J.H.useActionState(h,E,H)},$.useCallback=function(h,E){return J.H.useCallback(h,E)},$.useContext=function(h){return J.H.useContext(h)},$.useDebugValue=function(){},$.useDeferredValue=function(h,E){return J.H.useDeferredValue(h,E)},$.useEffect=function(h,E,H){var U=J.H;if(typeof H=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return U.useEffect(h,E)},$.useId=function(){return J.H.useId()},$.useImperativeHandle=function(h,E,H){return J.H.useImperativeHandle(h,E,H)},$.useInsertionEffect=function(h,E){return J.H.useInsertionEffect(h,E)},$.useLayoutEffect=function(h,E){return J.H.useLayoutEffect(h,E)},$.useMemo=function(h,E){return J.H.useMemo(h,E)},$.useOptimistic=function(h,E){return J.H.useOptimistic(h,E)},$.useReducer=function(h,E,H){return J.H.useReducer(h,E,H)},$.useRef=function(h){return J.H.useRef(h)},$.useState=function(h){return J.H.useState(h)},$.useSyncExternalStore=function(h,E,H){return J.H.useSyncExternalStore(h,E,H)},$.useTransition=function(){return J.H.useTransition()},$.version="19.1.0",$}var Ad;function Dr(){return Ad||(Ad=1,yr.exports=gb()),yr.exports}var lt=Dr();const Pn=mb(lt);var xr={exports:{}},qe={},Sr={exports:{}},Or={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zd;function yb(){return zd||(zd=1,function(o){function s(_,k){var Z=_.length;_.push(k);n:for(;0<Z;){var bn=Z-1>>>1,h=_[bn];if(0<S(h,k))_[bn]=k,_[Z]=h,Z=bn;else break n}}function f(_){return _.length===0?null:_[0]}function c(_){if(_.length===0)return null;var k=_[0],Z=_.pop();if(Z!==k){_[0]=Z;n:for(var bn=0,h=_.length,E=h>>>1;bn<E;){var H=2*(bn+1)-1,U=_[H],X=H+1,ln=_[X];if(0>S(U,Z))X<h&&0>S(ln,U)?(_[bn]=ln,_[X]=Z,bn=X):(_[bn]=U,_[H]=Z,bn=H);else if(X<h&&0>S(ln,Z))_[bn]=ln,_[X]=Z,bn=X;else break n}}return k}function S(_,k){var Z=_.sortIndex-k.sortIndex;return Z!==0?Z:_.id-k.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var A=performance;o.unstable_now=function(){return A.now()}}else{var N=Date,V=N.now();o.unstable_now=function(){return N.now()-V}}var D=[],x=[],R=1,W=null,K=3,hn=!1,w=!1,M=!1,Y=!1,Rn=typeof setTimeout=="function"?setTimeout:null,pn=typeof clearTimeout=="function"?clearTimeout:null,on=typeof setImmediate<"u"?setImmediate:null;function Tn(_){for(var k=f(x);k!==null;){if(k.callback===null)c(x);else if(k.startTime<=_)c(x),k.sortIndex=k.expirationTime,s(D,k);else break;k=f(x)}}function J(_){if(M=!1,Tn(_),!w)if(f(D)!==null)w=!0,gn||(gn=!0,wn());else{var k=f(x);k!==null&&Ln(J,k.startTime-_)}}var gn=!1,On=-1,Un=5,An=-1;function Va(){return Y?!0:!(o.unstable_now()-An<Un)}function jt(){if(Y=!1,gn){var _=o.unstable_now();An=_;var k=!0;try{n:{w=!1,M&&(M=!1,pn(On),On=-1),hn=!0;var Z=K;try{t:{for(Tn(_),W=f(D);W!==null&&!(W.expirationTime>_&&Va());){var bn=W.callback;if(typeof bn=="function"){W.callback=null,K=W.priorityLevel;var h=bn(W.expirationTime<=_);if(_=o.unstable_now(),typeof h=="function"){W.callback=h,Tn(_),k=!0;break t}W===f(D)&&c(D),Tn(_)}else c(D);W=f(D)}if(W!==null)k=!0;else{var E=f(x);E!==null&&Ln(J,E.startTime-_),k=!1}}break n}finally{W=null,K=Z,hn=!1}k=void 0}}finally{k?wn():gn=!1}}}var wn;if(typeof on=="function")wn=function(){on(jt)};else if(typeof MessageChannel<"u"){var za=new MessageChannel,Ea=za.port2;za.port1.onmessage=jt,wn=function(){Ea.postMessage(null)}}else wn=function(){Rn(jt,0)};function Ln(_,k){On=Rn(function(){_(o.unstable_now())},k)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(_){_.callback=null},o.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Un=0<_?Math.floor(1e3/_):5},o.unstable_getCurrentPriorityLevel=function(){return K},o.unstable_next=function(_){switch(K){case 1:case 2:case 3:var k=3;break;default:k=K}var Z=K;K=k;try{return _()}finally{K=Z}},o.unstable_requestPaint=function(){Y=!0},o.unstable_runWithPriority=function(_,k){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var Z=K;K=_;try{return k()}finally{K=Z}},o.unstable_scheduleCallback=function(_,k,Z){var bn=o.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?bn+Z:bn):Z=bn,_){case 1:var h=-1;break;case 2:h=250;break;case 5:h=1073741823;break;case 4:h=1e4;break;default:h=5e3}return h=Z+h,_={id:R++,callback:k,priorityLevel:_,startTime:Z,expirationTime:h,sortIndex:-1},Z>bn?(_.sortIndex=Z,s(x,_),f(D)===null&&_===f(x)&&(M?(pn(On),On=-1):M=!0,Ln(J,Z-bn))):(_.sortIndex=h,s(D,_),w||hn||(w=!0,gn||(gn=!0,wn()))),_},o.unstable_shouldYield=Va,o.unstable_wrapCallback=function(_){var k=K;return function(){var Z=K;K=k;try{return _.apply(this,arguments)}finally{K=Z}}}}(Or)),Or}var Ed;function xb(){return Ed||(Ed=1,Sr.exports=yb()),Sr.exports}var _r={exports:{}},Jn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dd;function Sb(){if(Dd)return Jn;Dd=1;var o=Dr();function s(D){var x="https://react.dev/errors/"+D;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var R=2;R<arguments.length;R++)x+="&args[]="+encodeURIComponent(arguments[R])}return"Minified React error #"+D+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var c={d:{f,r:function(){throw Error(s(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},S=Symbol.for("react.portal");function A(D,x,R){var W=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:S,key:W==null?null:""+W,children:D,containerInfo:x,implementation:R}}var N=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function V(D,x){if(D==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return Jn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,Jn.createPortal=function(D,x){var R=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(s(299));return A(D,x,null,R)},Jn.flushSync=function(D){var x=N.T,R=c.p;try{if(N.T=null,c.p=2,D)return D()}finally{N.T=x,c.p=R,c.d.f()}},Jn.preconnect=function(D,x){typeof D=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,c.d.C(D,x))},Jn.prefetchDNS=function(D){typeof D=="string"&&c.d.D(D)},Jn.preinit=function(D,x){if(typeof D=="string"&&x&&typeof x.as=="string"){var R=x.as,W=V(R,x.crossOrigin),K=typeof x.integrity=="string"?x.integrity:void 0,hn=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;R==="style"?c.d.S(D,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:W,integrity:K,fetchPriority:hn}):R==="script"&&c.d.X(D,{crossOrigin:W,integrity:K,fetchPriority:hn,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},Jn.preinitModule=function(D,x){if(typeof D=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var R=V(x.as,x.crossOrigin);c.d.M(D,{crossOrigin:R,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&c.d.M(D)},Jn.preload=function(D,x){if(typeof D=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var R=x.as,W=V(R,x.crossOrigin);c.d.L(D,R,{crossOrigin:W,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},Jn.preloadModule=function(D,x){if(typeof D=="string")if(x){var R=V(x.as,x.crossOrigin);c.d.m(D,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:R,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else c.d.m(D)},Jn.requestFormReset=function(D){c.d.r(D)},Jn.unstable_batchedUpdates=function(D,x){return D(x)},Jn.useFormState=function(D,x,R){return N.H.useFormState(D,x,R)},Jn.useFormStatus=function(){return N.H.useHostTransitionStatus()},Jn.version="19.1.0",Jn}var Md;function Ob(){if(Md)return _r.exports;Md=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(s){console.error(s)}}return o(),_r.exports=Sb(),_r.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nd;function _b(){if(Nd)return qe;Nd=1;var o=xb(),s=Dr(),f=Ob();function c(n){var t="https://react.dev/errors/"+n;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+n+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function S(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function A(n){var t=n,a=n;if(n.alternate)for(;t.return;)t=t.return;else{n=t;do t=n,(t.flags&4098)!==0&&(a=t.return),n=t.return;while(n)}return t.tag===3?a:null}function N(n){if(n.tag===13){var t=n.memoizedState;if(t===null&&(n=n.alternate,n!==null&&(t=n.memoizedState)),t!==null)return t.dehydrated}return null}function V(n){if(A(n)!==n)throw Error(c(188))}function D(n){var t=n.alternate;if(!t){if(t=A(n),t===null)throw Error(c(188));return t!==n?null:n}for(var a=n,l=t;;){var e=a.return;if(e===null)break;var i=e.alternate;if(i===null){if(l=e.return,l!==null){a=l;continue}break}if(e.child===i.child){for(i=e.child;i;){if(i===a)return V(e),n;if(i===l)return V(e),t;i=i.sibling}throw Error(c(188))}if(a.return!==l.return)a=e,l=i;else{for(var u=!1,r=e.child;r;){if(r===a){u=!0,a=e,l=i;break}if(r===l){u=!0,l=e,a=i;break}r=r.sibling}if(!u){for(r=i.child;r;){if(r===a){u=!0,a=i,l=e;break}if(r===l){u=!0,l=i,a=e;break}r=r.sibling}if(!u)throw Error(c(189))}}if(a.alternate!==l)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?n:t}function x(n){var t=n.tag;if(t===5||t===26||t===27||t===6)return n;for(n=n.child;n!==null;){if(t=x(n),t!==null)return t;n=n.sibling}return null}var R=Object.assign,W=Symbol.for("react.element"),K=Symbol.for("react.transitional.element"),hn=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),Rn=Symbol.for("react.provider"),pn=Symbol.for("react.consumer"),on=Symbol.for("react.context"),Tn=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),gn=Symbol.for("react.suspense_list"),On=Symbol.for("react.memo"),Un=Symbol.for("react.lazy"),An=Symbol.for("react.activity"),Va=Symbol.for("react.memo_cache_sentinel"),jt=Symbol.iterator;function wn(n){return n===null||typeof n!="object"?null:(n=jt&&n[jt]||n["@@iterator"],typeof n=="function"?n:null)}var za=Symbol.for("react.client.reference");function Ea(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===za?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case w:return"Fragment";case Y:return"Profiler";case M:return"StrictMode";case J:return"Suspense";case gn:return"SuspenseList";case An:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case hn:return"Portal";case on:return(n.displayName||"Context")+".Provider";case pn:return(n._context.displayName||"Context")+".Consumer";case Tn:var t=n.render;return n=n.displayName,n||(n=t.displayName||t.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case On:return t=n.displayName||null,t!==null?t:Ea(n.type)||"Memo";case Un:t=n._payload,n=n._init;try{return Ea(n(t))}catch{}}return null}var Ln=Array.isArray,_=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},bn=[],h=-1;function E(n){return{current:n}}function H(n){0>h||(n.current=bn[h],bn[h]=null,h--)}function U(n,t){h++,bn[h]=n.current,n.current=t}var X=E(null),ln=E(null),P=E(null),et=E(null);function yn(n,t){switch(U(P,t),U(ln,n),U(X,null),t.nodeType){case 9:case 11:n=(n=t.documentElement)&&(n=n.namespaceURI)?$f(n):0;break;default:if(n=t.tagName,t=t.namespaceURI)t=$f(t),n=Wf(t,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}H(X),U(X,n)}function It(){H(X),H(ln),H(P)}function au(n){n.memoizedState!==null&&U(et,n);var t=X.current,a=Wf(t,n.type);t!==a&&(U(ln,n),U(X,a))}function ke(n){ln.current===n&&(H(X),H(ln)),et.current===n&&(H(et),Ae._currentValue=Z)}var lu=Object.prototype.hasOwnProperty,eu=o.unstable_scheduleCallback,iu=o.unstable_cancelCallback,Kd=o.unstable_shouldYield,Jd=o.unstable_requestPaint,Mt=o.unstable_now,Pd=o.unstable_getCurrentPriorityLevel,Mr=o.unstable_ImmediatePriority,Nr=o.unstable_UserBlockingPriority,He=o.unstable_NormalPriority,$d=o.unstable_LowPriority,qr=o.unstable_IdlePriority,Wd=o.log,Fd=o.unstable_setDisableYieldValue,Ul=null,it=null;function na(n){if(typeof Wd=="function"&&Fd(n),it&&typeof it.setStrictMode=="function")try{it.setStrictMode(Ul,n)}catch{}}var ut=Math.clz32?Math.clz32:t0,Id=Math.log,n0=Math.LN2;function t0(n){return n>>>=0,n===0?32:31-(Id(n)/n0|0)|0}var je=256,Be=4194304;function Da(n){var t=n&42;if(t!==0)return t;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Ce(n,t,a){var l=n.pendingLanes;if(l===0)return 0;var e=0,i=n.suspendedLanes,u=n.pingedLanes;n=n.warmLanes;var r=l&134217727;return r!==0?(l=r&~i,l!==0?e=Da(l):(u&=r,u!==0?e=Da(u):a||(a=r&~n,a!==0&&(e=Da(a))))):(r=l&~i,r!==0?e=Da(r):u!==0?e=Da(u):a||(a=l&~n,a!==0&&(e=Da(a)))),e===0?0:t!==0&&t!==e&&(t&i)===0&&(i=e&-e,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:e}function kl(n,t){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&t)===0}function a0(n,t){switch(n){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rr(){var n=je;return je<<=1,(je&4194048)===0&&(je=256),n}function Ur(){var n=Be;return Be<<=1,(Be&62914560)===0&&(Be=4194304),n}function uu(n){for(var t=[],a=0;31>a;a++)t.push(n);return t}function Hl(n,t){n.pendingLanes|=t,t!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function l0(n,t,a,l,e,i){var u=n.pendingLanes;n.pendingLanes=a,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=a,n.entangledLanes&=a,n.errorRecoveryDisabledLanes&=a,n.shellSuspendCounter=0;var r=n.entanglements,d=n.expirationTimes,p=n.hiddenUpdates;for(a=u&~a;0<a;){var O=31-ut(a),z=1<<O;r[O]=0,d[O]=-1;var g=p[O];if(g!==null)for(p[O]=null,O=0;O<g.length;O++){var y=g[O];y!==null&&(y.lane&=-536870913)}a&=~z}l!==0&&kr(n,l,0),i!==0&&e===0&&n.tag!==0&&(n.suspendedLanes|=i&~(u&~t))}function kr(n,t,a){n.pendingLanes|=t,n.suspendedLanes&=~t;var l=31-ut(t);n.entangledLanes|=t,n.entanglements[l]=n.entanglements[l]|1073741824|a&4194090}function Hr(n,t){var a=n.entangledLanes|=t;for(n=n.entanglements;a;){var l=31-ut(a),e=1<<l;e&t|n[l]&t&&(n[l]|=t),a&=~e}}function ou(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function ru(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function jr(){var n=k.p;return n!==0?n:(n=window.event,n===void 0?32:vd(n.type))}function e0(n,t){var a=k.p;try{return k.p=n,t()}finally{k.p=a}}var ta=Math.random().toString(36).slice(2),Vn="__reactFiber$"+ta,Wn="__reactProps$"+ta,Ka="__reactContainer$"+ta,cu="__reactEvents$"+ta,i0="__reactListeners$"+ta,u0="__reactHandles$"+ta,Br="__reactResources$"+ta,jl="__reactMarker$"+ta;function su(n){delete n[Vn],delete n[Wn],delete n[cu],delete n[i0],delete n[u0]}function Ja(n){var t=n[Vn];if(t)return t;for(var a=n.parentNode;a;){if(t=a[Ka]||a[Vn]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(n=td(n);n!==null;){if(a=n[Vn])return a;n=td(n)}return t}n=a,a=n.parentNode}return null}function Pa(n){if(n=n[Vn]||n[Ka]){var t=n.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return n}return null}function Bl(n){var t=n.tag;if(t===5||t===26||t===27||t===6)return n.stateNode;throw Error(c(33))}function $a(n){var t=n[Br];return t||(t=n[Br]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Bn(n){n[jl]=!0}var Cr=new Set,Yr={};function Ma(n,t){Wa(n,t),Wa(n+"Capture",t)}function Wa(n,t){for(Yr[n]=t,n=0;n<t.length;n++)Cr.add(t[n])}var o0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xr={},Gr={};function r0(n){return lu.call(Gr,n)?!0:lu.call(Xr,n)?!1:o0.test(n)?Gr[n]=!0:(Xr[n]=!0,!1)}function Ye(n,t,a){if(r0(t))if(a===null)n.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":n.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){n.removeAttribute(t);return}}n.setAttribute(t,""+a)}}function Xe(n,t,a){if(a===null)n.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(t);return}n.setAttribute(t,""+a)}}function Bt(n,t,a,l){if(l===null)n.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttributeNS(t,a,""+l)}}var fu,Qr;function Fa(n){if(fu===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);fu=t&&t[1]||"",Qr=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+fu+n+Qr}var du=!1;function hu(n,t){if(!n||du)return"";du=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var z=function(){throw Error()};if(Object.defineProperty(z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(z,[])}catch(y){var g=y}Reflect.construct(n,[],z)}else{try{z.call()}catch(y){g=y}n.call(z.prototype)}}else{try{throw Error()}catch(y){g=y}(z=n())&&typeof z.catch=="function"&&z.catch(function(){})}}catch(y){if(y&&g&&typeof y.stack=="string")return[y.stack,g.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var e=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");e&&e.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),u=i[0],r=i[1];if(u&&r){var d=u.split(`
`),p=r.split(`
`);for(e=l=0;l<d.length&&!d[l].includes("DetermineComponentFrameRoot");)l++;for(;e<p.length&&!p[e].includes("DetermineComponentFrameRoot");)e++;if(l===d.length||e===p.length)for(l=d.length-1,e=p.length-1;1<=l&&0<=e&&d[l]!==p[e];)e--;for(;1<=l&&0<=e;l--,e--)if(d[l]!==p[e]){if(l!==1||e!==1)do if(l--,e--,0>e||d[l]!==p[e]){var O=`
`+d[l].replace(" at new "," at ");return n.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",n.displayName)),O}while(1<=l&&0<=e);break}}}finally{du=!1,Error.prepareStackTrace=a}return(a=n?n.displayName||n.name:"")?Fa(a):""}function c0(n){switch(n.tag){case 26:case 27:case 5:return Fa(n.type);case 16:return Fa("Lazy");case 13:return Fa("Suspense");case 19:return Fa("SuspenseList");case 0:case 15:return hu(n.type,!1);case 11:return hu(n.type.render,!1);case 1:return hu(n.type,!0);case 31:return Fa("Activity");default:return""}}function Zr(n){try{var t="";do t+=c0(n),n=n.return;while(n);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function mt(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function wr(n){var t=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function s0(n){var t=wr(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,t),l=""+n[t];if(!n.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var e=a.get,i=a.set;return Object.defineProperty(n,t,{configurable:!0,get:function(){return e.call(this)},set:function(u){l=""+u,i.call(this,u)}}),Object.defineProperty(n,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(u){l=""+u},stopTracking:function(){n._valueTracker=null,delete n[t]}}}}function Ge(n){n._valueTracker||(n._valueTracker=s0(n))}function Lr(n){if(!n)return!1;var t=n._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return n&&(l=wr(n)?n.checked?"true":"false":n.value),n=l,n!==a?(t.setValue(n),!0):!1}function Qe(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var f0=/[\n"\\]/g;function vt(n){return n.replace(f0,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function bu(n,t,a,l,e,i,u,r){n.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?n.type=u:n.removeAttribute("type"),t!=null?u==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+mt(t)):n.value!==""+mt(t)&&(n.value=""+mt(t)):u!=="submit"&&u!=="reset"||n.removeAttribute("value"),t!=null?mu(n,u,mt(t)):a!=null?mu(n,u,mt(a)):l!=null&&n.removeAttribute("value"),e==null&&i!=null&&(n.defaultChecked=!!i),e!=null&&(n.checked=e&&typeof e!="function"&&typeof e!="symbol"),r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?n.name=""+mt(r):n.removeAttribute("name")}function Vr(n,t,a,l,e,i,u,r){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(n.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null))return;a=a!=null?""+mt(a):"",t=t!=null?""+mt(t):a,r||t===n.value||(n.value=t),n.defaultValue=t}l=l??e,l=typeof l!="function"&&typeof l!="symbol"&&!!l,n.checked=r?n.checked:!!l,n.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(n.name=u)}function mu(n,t,a){t==="number"&&Qe(n.ownerDocument)===n||n.defaultValue===""+a||(n.defaultValue=""+a)}function Ia(n,t,a,l){if(n=n.options,t){t={};for(var e=0;e<a.length;e++)t["$"+a[e]]=!0;for(a=0;a<n.length;a++)e=t.hasOwnProperty("$"+n[a].value),n[a].selected!==e&&(n[a].selected=e),e&&l&&(n[a].defaultSelected=!0)}else{for(a=""+mt(a),t=null,e=0;e<n.length;e++){if(n[e].value===a){n[e].selected=!0,l&&(n[e].defaultSelected=!0);return}t!==null||n[e].disabled||(t=n[e])}t!==null&&(t.selected=!0)}}function Kr(n,t,a){if(t!=null&&(t=""+mt(t),t!==n.value&&(n.value=t),a==null)){n.defaultValue!==t&&(n.defaultValue=t);return}n.defaultValue=a!=null?""+mt(a):""}function Jr(n,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(c(92));if(Ln(l)){if(1<l.length)throw Error(c(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=mt(t),n.defaultValue=a,l=n.textContent,l===a&&l!==""&&l!==null&&(n.value=l)}function nl(n,t){if(t){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=t;return}}n.textContent=t}var d0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Pr(n,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?n.setProperty(t,""):t==="float"?n.cssFloat="":n[t]="":l?n.setProperty(t,a):typeof a!="number"||a===0||d0.has(t)?t==="float"?n.cssFloat=a:n[t]=(""+a).trim():n[t]=a+"px"}function $r(n,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(n=n.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?n.setProperty(l,""):l==="float"?n.cssFloat="":n[l]="");for(var e in t)l=t[e],t.hasOwnProperty(e)&&a[e]!==l&&Pr(n,e,l)}else for(var i in t)t.hasOwnProperty(i)&&Pr(n,i,t[i])}function vu(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var h0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),b0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ze(n){return b0.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var pu=null;function gu(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var tl=null,al=null;function Wr(n){var t=Pa(n);if(t&&(n=t.stateNode)){var a=n[Wn]||null;n:switch(n=t.stateNode,t.type){case"input":if(bu(n,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+vt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==n&&l.form===n.form){var e=l[Wn]||null;if(!e)throw Error(c(90));bu(l,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===n.form&&Lr(l)}break n;case"textarea":Kr(n,a.value,a.defaultValue);break n;case"select":t=a.value,t!=null&&Ia(n,!!a.multiple,t,!1)}}}var yu=!1;function Fr(n,t,a){if(yu)return n(t,a);yu=!0;try{var l=n(t);return l}finally{if(yu=!1,(tl!==null||al!==null)&&(Di(),tl&&(t=tl,n=al,al=tl=null,Wr(t),n)))for(t=0;t<n.length;t++)Wr(n[t])}}function Cl(n,t){var a=n.stateNode;if(a===null)return null;var l=a[Wn]||null;if(l===null)return null;a=l[t];n:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(n=n.type,l=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!l;break n;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var Ct=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xu=!1;if(Ct)try{var Yl={};Object.defineProperty(Yl,"passive",{get:function(){xu=!0}}),window.addEventListener("test",Yl,Yl),window.removeEventListener("test",Yl,Yl)}catch{xu=!1}var aa=null,Su=null,we=null;function Ir(){if(we)return we;var n,t=Su,a=t.length,l,e="value"in aa?aa.value:aa.textContent,i=e.length;for(n=0;n<a&&t[n]===e[n];n++);var u=a-n;for(l=1;l<=u&&t[a-l]===e[i-l];l++);return we=e.slice(n,1<l?1-l:void 0)}function Le(n){var t=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&t===13&&(n=13)):n=t,n===10&&(n=13),32<=n||n===13?n:0}function Ve(){return!0}function nc(){return!1}function Fn(n){function t(a,l,e,i,u){this._reactName=a,this._targetInst=e,this.type=l,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var r in n)n.hasOwnProperty(r)&&(a=n[r],this[r]=a?a(i):i[r]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ve:nc,this.isPropagationStopped=nc,this}return R(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ve)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ve)},persist:function(){},isPersistent:Ve}),t}var Na={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ke=Fn(Na),Xl=R({},Na,{view:0,detail:0}),m0=Fn(Xl),Ou,_u,Gl,Je=R({},Xl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Au,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Gl&&(Gl&&n.type==="mousemove"?(Ou=n.screenX-Gl.screenX,_u=n.screenY-Gl.screenY):_u=Ou=0,Gl=n),Ou)},movementY:function(n){return"movementY"in n?n.movementY:_u}}),tc=Fn(Je),v0=R({},Je,{dataTransfer:0}),p0=Fn(v0),g0=R({},Xl,{relatedTarget:0}),Tu=Fn(g0),y0=R({},Na,{animationName:0,elapsedTime:0,pseudoElement:0}),x0=Fn(y0),S0=R({},Na,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),O0=Fn(S0),_0=R({},Na,{data:0}),ac=Fn(_0),T0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},A0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},z0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function E0(n){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(n):(n=z0[n])?!!t[n]:!1}function Au(){return E0}var D0=R({},Xl,{key:function(n){if(n.key){var t=T0[n.key]||n.key;if(t!=="Unidentified")return t}return n.type==="keypress"?(n=Le(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?A0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Au,charCode:function(n){return n.type==="keypress"?Le(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Le(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),M0=Fn(D0),N0=R({},Je,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lc=Fn(N0),q0=R({},Xl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Au}),R0=Fn(q0),U0=R({},Na,{propertyName:0,elapsedTime:0,pseudoElement:0}),k0=Fn(U0),H0=R({},Je,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),j0=Fn(H0),B0=R({},Na,{newState:0,oldState:0}),C0=Fn(B0),Y0=[9,13,27,32],zu=Ct&&"CompositionEvent"in window,Ql=null;Ct&&"documentMode"in document&&(Ql=document.documentMode);var X0=Ct&&"TextEvent"in window&&!Ql,ec=Ct&&(!zu||Ql&&8<Ql&&11>=Ql),ic=" ",uc=!1;function oc(n,t){switch(n){case"keyup":return Y0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rc(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ll=!1;function G0(n,t){switch(n){case"compositionend":return rc(t);case"keypress":return t.which!==32?null:(uc=!0,ic);case"textInput":return n=t.data,n===ic&&uc?null:n;default:return null}}function Q0(n,t){if(ll)return n==="compositionend"||!zu&&oc(n,t)?(n=Ir(),we=Su=aa=null,ll=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ec&&t.locale!=="ko"?null:t.data;default:return null}}var Z0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cc(n){var t=n&&n.nodeName&&n.nodeName.toLowerCase();return t==="input"?!!Z0[n.type]:t==="textarea"}function sc(n,t,a,l){tl?al?al.push(l):al=[l]:tl=l,t=ki(t,"onChange"),0<t.length&&(a=new Ke("onChange","change",null,a,l),n.push({event:a,listeners:t}))}var Zl=null,wl=null;function w0(n){Lf(n,0)}function Pe(n){var t=Bl(n);if(Lr(t))return n}function fc(n,t){if(n==="change")return t}var dc=!1;if(Ct){var Eu;if(Ct){var Du="oninput"in document;if(!Du){var hc=document.createElement("div");hc.setAttribute("oninput","return;"),Du=typeof hc.oninput=="function"}Eu=Du}else Eu=!1;dc=Eu&&(!document.documentMode||9<document.documentMode)}function bc(){Zl&&(Zl.detachEvent("onpropertychange",mc),wl=Zl=null)}function mc(n){if(n.propertyName==="value"&&Pe(wl)){var t=[];sc(t,wl,n,gu(n)),Fr(w0,t)}}function L0(n,t,a){n==="focusin"?(bc(),Zl=t,wl=a,Zl.attachEvent("onpropertychange",mc)):n==="focusout"&&bc()}function V0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Pe(wl)}function K0(n,t){if(n==="click")return Pe(t)}function J0(n,t){if(n==="input"||n==="change")return Pe(t)}function P0(n,t){return n===t&&(n!==0||1/n===1/t)||n!==n&&t!==t}var ot=typeof Object.is=="function"?Object.is:P0;function Ll(n,t){if(ot(n,t))return!0;if(typeof n!="object"||n===null||typeof t!="object"||t===null)return!1;var a=Object.keys(n),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var e=a[l];if(!lu.call(t,e)||!ot(n[e],t[e]))return!1}return!0}function vc(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function pc(n,t){var a=vc(n);n=0;for(var l;a;){if(a.nodeType===3){if(l=n+a.textContent.length,n<=t&&l>=t)return{node:a,offset:t-n};n=l}n:{for(;a;){if(a.nextSibling){a=a.nextSibling;break n}a=a.parentNode}a=void 0}a=vc(a)}}function gc(n,t){return n&&t?n===t?!0:n&&n.nodeType===3?!1:t&&t.nodeType===3?gc(n,t.parentNode):"contains"in n?n.contains(t):n.compareDocumentPosition?!!(n.compareDocumentPosition(t)&16):!1:!1}function yc(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var t=Qe(n.document);t instanceof n.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)n=t.contentWindow;else break;t=Qe(n.document)}return t}function Mu(n){var t=n&&n.nodeName&&n.nodeName.toLowerCase();return t&&(t==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||t==="textarea"||n.contentEditable==="true")}var $0=Ct&&"documentMode"in document&&11>=document.documentMode,el=null,Nu=null,Vl=null,qu=!1;function xc(n,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;qu||el==null||el!==Qe(l)||(l=el,"selectionStart"in l&&Mu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Vl&&Ll(Vl,l)||(Vl=l,l=ki(Nu,"onSelect"),0<l.length&&(t=new Ke("onSelect","select",null,t,a),n.push({event:t,listeners:l}),t.target=el)))}function qa(n,t){var a={};return a[n.toLowerCase()]=t.toLowerCase(),a["Webkit"+n]="webkit"+t,a["Moz"+n]="moz"+t,a}var il={animationend:qa("Animation","AnimationEnd"),animationiteration:qa("Animation","AnimationIteration"),animationstart:qa("Animation","AnimationStart"),transitionrun:qa("Transition","TransitionRun"),transitionstart:qa("Transition","TransitionStart"),transitioncancel:qa("Transition","TransitionCancel"),transitionend:qa("Transition","TransitionEnd")},Ru={},Sc={};Ct&&(Sc=document.createElement("div").style,"AnimationEvent"in window||(delete il.animationend.animation,delete il.animationiteration.animation,delete il.animationstart.animation),"TransitionEvent"in window||delete il.transitionend.transition);function Ra(n){if(Ru[n])return Ru[n];if(!il[n])return n;var t=il[n],a;for(a in t)if(t.hasOwnProperty(a)&&a in Sc)return Ru[n]=t[a];return n}var Oc=Ra("animationend"),_c=Ra("animationiteration"),Tc=Ra("animationstart"),W0=Ra("transitionrun"),F0=Ra("transitionstart"),I0=Ra("transitioncancel"),Ac=Ra("transitionend"),zc=new Map,Uu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Uu.push("scrollEnd");function Tt(n,t){zc.set(n,t),Ma(t,[n])}var Ec=new WeakMap;function pt(n,t){if(typeof n=="object"&&n!==null){var a=Ec.get(n);return a!==void 0?a:(t={value:n,source:t,stack:Zr(t)},Ec.set(n,t),t)}return{value:n,source:t,stack:Zr(t)}}var gt=[],ul=0,ku=0;function $e(){for(var n=ul,t=ku=ul=0;t<n;){var a=gt[t];gt[t++]=null;var l=gt[t];gt[t++]=null;var e=gt[t];gt[t++]=null;var i=gt[t];if(gt[t++]=null,l!==null&&e!==null){var u=l.pending;u===null?e.next=e:(e.next=u.next,u.next=e),l.pending=e}i!==0&&Dc(a,e,i)}}function We(n,t,a,l){gt[ul++]=n,gt[ul++]=t,gt[ul++]=a,gt[ul++]=l,ku|=l,n.lanes|=l,n=n.alternate,n!==null&&(n.lanes|=l)}function Hu(n,t,a,l){return We(n,t,a,l),Fe(n)}function ol(n,t){return We(n,null,null,t),Fe(n)}function Dc(n,t,a){n.lanes|=a;var l=n.alternate;l!==null&&(l.lanes|=a);for(var e=!1,i=n.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(n=i.stateNode,n===null||n._visibility&1||(e=!0)),n=i,i=i.return;return n.tag===3?(i=n.stateNode,e&&t!==null&&(e=31-ut(a),n=i.hiddenUpdates,l=n[e],l===null?n[e]=[t]:l.push(t),t.lane=a|536870912),i):null}function Fe(n){if(50<pe)throw pe=0,Qo=null,Error(c(185));for(var t=n.return;t!==null;)n=t,t=n.return;return n.tag===3?n.stateNode:null}var rl={};function nh(n,t,a,l){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rt(n,t,a,l){return new nh(n,t,a,l)}function ju(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Yt(n,t){var a=n.alternate;return a===null?(a=rt(n.tag,t,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=t,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&65011712,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,t=n.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a.refCleanup=n.refCleanup,a}function Mc(n,t){n.flags&=65011714;var a=n.alternate;return a===null?(n.childLanes=0,n.lanes=t,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=a.childLanes,n.lanes=a.lanes,n.child=a.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=a.memoizedProps,n.memoizedState=a.memoizedState,n.updateQueue=a.updateQueue,n.type=a.type,t=a.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n}function Ie(n,t,a,l,e,i){var u=0;if(l=n,typeof n=="function")ju(n)&&(u=1);else if(typeof n=="string")u=ab(n,a,X.current)?26:n==="html"||n==="head"||n==="body"?27:5;else n:switch(n){case An:return n=rt(31,a,t,e),n.elementType=An,n.lanes=i,n;case w:return Ua(a.children,e,i,t);case M:u=8,e|=24;break;case Y:return n=rt(12,a,t,e|2),n.elementType=Y,n.lanes=i,n;case J:return n=rt(13,a,t,e),n.elementType=J,n.lanes=i,n;case gn:return n=rt(19,a,t,e),n.elementType=gn,n.lanes=i,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Rn:case on:u=10;break n;case pn:u=9;break n;case Tn:u=11;break n;case On:u=14;break n;case Un:u=16,l=null;break n}u=29,a=Error(c(130,n===null?"null":typeof n,"")),l=null}return t=rt(u,a,t,e),t.elementType=n,t.type=l,t.lanes=i,t}function Ua(n,t,a,l){return n=rt(7,n,l,t),n.lanes=a,n}function Bu(n,t,a){return n=rt(6,n,null,t),n.lanes=a,n}function Cu(n,t,a){return t=rt(4,n.children!==null?n.children:[],n.key,t),t.lanes=a,t.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},t}var cl=[],sl=0,ni=null,ti=0,yt=[],xt=0,ka=null,Xt=1,Gt="";function Ha(n,t){cl[sl++]=ti,cl[sl++]=ni,ni=n,ti=t}function Nc(n,t,a){yt[xt++]=Xt,yt[xt++]=Gt,yt[xt++]=ka,ka=n;var l=Xt;n=Gt;var e=32-ut(l)-1;l&=~(1<<e),a+=1;var i=32-ut(t)+e;if(30<i){var u=e-e%5;i=(l&(1<<u)-1).toString(32),l>>=u,e-=u,Xt=1<<32-ut(t)+e|a<<e|l,Gt=i+n}else Xt=1<<i|a<<e|l,Gt=n}function Yu(n){n.return!==null&&(Ha(n,1),Nc(n,1,0))}function Xu(n){for(;n===ni;)ni=cl[--sl],cl[sl]=null,ti=cl[--sl],cl[sl]=null;for(;n===ka;)ka=yt[--xt],yt[xt]=null,Gt=yt[--xt],yt[xt]=null,Xt=yt[--xt],yt[xt]=null}var $n=null,zn=null,un=!1,ja=null,Nt=!1,Gu=Error(c(519));function Ba(n){var t=Error(c(418,""));throw Pl(pt(t,n)),Gu}function qc(n){var t=n.stateNode,a=n.type,l=n.memoizedProps;switch(t[Vn]=n,t[Wn]=l,a){case"dialog":tn("cancel",t),tn("close",t);break;case"iframe":case"object":case"embed":tn("load",t);break;case"video":case"audio":for(a=0;a<ye.length;a++)tn(ye[a],t);break;case"source":tn("error",t);break;case"img":case"image":case"link":tn("error",t),tn("load",t);break;case"details":tn("toggle",t);break;case"input":tn("invalid",t),Vr(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Ge(t);break;case"select":tn("invalid",t);break;case"textarea":tn("invalid",t),Jr(t,l.value,l.defaultValue,l.children),Ge(t)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||Pf(t.textContent,a)?(l.popover!=null&&(tn("beforetoggle",t),tn("toggle",t)),l.onScroll!=null&&tn("scroll",t),l.onScrollEnd!=null&&tn("scrollend",t),l.onClick!=null&&(t.onclick=Hi),t=!0):t=!1,t||Ba(n)}function Rc(n){for($n=n.return;$n;)switch($n.tag){case 5:case 13:Nt=!1;return;case 27:case 3:Nt=!0;return;default:$n=$n.return}}function Kl(n){if(n!==$n)return!1;if(!un)return Rc(n),un=!0,!1;var t=n.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=n.type,a=!(a!=="form"&&a!=="button")||er(n.type,n.memoizedProps)),a=!a),a&&zn&&Ba(n),Rc(n),t===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(c(317));n:{for(n=n.nextSibling,t=0;n;){if(n.nodeType===8)if(a=n.data,a==="/$"){if(t===0){zn=zt(n.nextSibling);break n}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;n=n.nextSibling}zn=null}}else t===27?(t=zn,ga(n.type)?(n=rr,rr=null,zn=n):zn=t):zn=$n?zt(n.stateNode.nextSibling):null;return!0}function Jl(){zn=$n=null,un=!1}function Uc(){var n=ja;return n!==null&&(tt===null?tt=n:tt.push.apply(tt,n),ja=null),n}function Pl(n){ja===null?ja=[n]:ja.push(n)}var Qu=E(null),Ca=null,Qt=null;function la(n,t,a){U(Qu,t._currentValue),t._currentValue=a}function Zt(n){n._currentValue=Qu.current,H(Qu)}function Zu(n,t,a){for(;n!==null;){var l=n.alternate;if((n.childLanes&t)!==t?(n.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),n===a)break;n=n.return}}function wu(n,t,a,l){var e=n.child;for(e!==null&&(e.return=n);e!==null;){var i=e.dependencies;if(i!==null){var u=e.child;i=i.firstContext;n:for(;i!==null;){var r=i;i=e;for(var d=0;d<t.length;d++)if(r.context===t[d]){i.lanes|=a,r=i.alternate,r!==null&&(r.lanes|=a),Zu(i.return,a,n),l||(u=null);break n}i=r.next}}else if(e.tag===18){if(u=e.return,u===null)throw Error(c(341));u.lanes|=a,i=u.alternate,i!==null&&(i.lanes|=a),Zu(u,a,n),u=null}else u=e.child;if(u!==null)u.return=e;else for(u=e;u!==null;){if(u===n){u=null;break}if(e=u.sibling,e!==null){e.return=u.return,u=e;break}u=u.return}e=u}}function $l(n,t,a,l){n=null;for(var e=t,i=!1;e!==null;){if(!i){if((e.flags&524288)!==0)i=!0;else if((e.flags&262144)!==0)break}if(e.tag===10){var u=e.alternate;if(u===null)throw Error(c(387));if(u=u.memoizedProps,u!==null){var r=e.type;ot(e.pendingProps.value,u.value)||(n!==null?n.push(r):n=[r])}}else if(e===et.current){if(u=e.alternate,u===null)throw Error(c(387));u.memoizedState.memoizedState!==e.memoizedState.memoizedState&&(n!==null?n.push(Ae):n=[Ae])}e=e.return}n!==null&&wu(t,n,a,l),t.flags|=262144}function ai(n){for(n=n.firstContext;n!==null;){if(!ot(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Ya(n){Ca=n,Qt=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Kn(n){return kc(Ca,n)}function li(n,t){return Ca===null&&Ya(n),kc(n,t)}function kc(n,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Qt===null){if(n===null)throw Error(c(308));Qt=t,n.dependencies={lanes:0,firstContext:t},n.flags|=524288}else Qt=Qt.next=t;return a}var th=typeof AbortController<"u"?AbortController:function(){var n=[],t=this.signal={aborted:!1,addEventListener:function(a,l){n.push(l)}};this.abort=function(){t.aborted=!0,n.forEach(function(a){return a()})}},ah=o.unstable_scheduleCallback,lh=o.unstable_NormalPriority,kn={$$typeof:on,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Lu(){return{controller:new th,data:new Map,refCount:0}}function Wl(n){n.refCount--,n.refCount===0&&ah(lh,function(){n.controller.abort()})}var Fl=null,Vu=0,fl=0,dl=null;function eh(n,t){if(Fl===null){var a=Fl=[];Vu=0,fl=Po(),dl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Vu++,t.then(Hc,Hc),t}function Hc(){if(--Vu===0&&Fl!==null){dl!==null&&(dl.status="fulfilled");var n=Fl;Fl=null,fl=0,dl=null;for(var t=0;t<n.length;t++)(0,n[t])()}}function ih(n,t){var a=[],l={status:"pending",value:null,reason:null,then:function(e){a.push(e)}};return n.then(function(){l.status="fulfilled",l.value=t;for(var e=0;e<a.length;e++)(0,a[e])(t)},function(e){for(l.status="rejected",l.reason=e,e=0;e<a.length;e++)(0,a[e])(void 0)}),l}var jc=_.S;_.S=function(n,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&eh(n,t),jc!==null&&jc(n,t)};var Xa=E(null);function Ku(){var n=Xa.current;return n!==null?n:vn.pooledCache}function ei(n,t){t===null?U(Xa,Xa.current):U(Xa,t.pool)}function Bc(){var n=Ku();return n===null?null:{parent:kn._currentValue,pool:n}}var Il=Error(c(460)),Cc=Error(c(474)),ii=Error(c(542)),Ju={then:function(){}};function Yc(n){return n=n.status,n==="fulfilled"||n==="rejected"}function ui(){}function Xc(n,t,a){switch(a=n[a],a===void 0?n.push(t):a!==t&&(t.then(ui,ui),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw n=t.reason,Qc(n),n;default:if(typeof t.status=="string")t.then(ui,ui);else{if(n=vn,n!==null&&100<n.shellSuspendCounter)throw Error(c(482));n=t,n.status="pending",n.then(function(l){if(t.status==="pending"){var e=t;e.status="fulfilled",e.value=l}},function(l){if(t.status==="pending"){var e=t;e.status="rejected",e.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw n=t.reason,Qc(n),n}throw ne=t,Il}}var ne=null;function Gc(){if(ne===null)throw Error(c(459));var n=ne;return ne=null,n}function Qc(n){if(n===Il||n===ii)throw Error(c(483))}var ea=!1;function Pu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function $u(n,t){n=n.updateQueue,t.updateQueue===n&&(t.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function ia(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function ua(n,t,a){var l=n.updateQueue;if(l===null)return null;if(l=l.shared,(rn&2)!==0){var e=l.pending;return e===null?t.next=t:(t.next=e.next,e.next=t),l.pending=t,t=Fe(n),Dc(n,null,a),t}return We(n,l,t,a),Fe(n)}function te(n,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=n.pendingLanes,a|=l,t.lanes=a,Hr(n,a)}}function Wu(n,t){var a=n.updateQueue,l=n.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var e=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var u={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?e=i=u:i=i.next=u,a=a.next}while(a!==null);i===null?e=i=t:i=i.next=t}else e=i=t;a={baseState:l.baseState,firstBaseUpdate:e,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=t:n.next=t,a.lastBaseUpdate=t}var Fu=!1;function ae(){if(Fu){var n=dl;if(n!==null)throw n}}function le(n,t,a,l){Fu=!1;var e=n.updateQueue;ea=!1;var i=e.firstBaseUpdate,u=e.lastBaseUpdate,r=e.shared.pending;if(r!==null){e.shared.pending=null;var d=r,p=d.next;d.next=null,u===null?i=p:u.next=p,u=d;var O=n.alternate;O!==null&&(O=O.updateQueue,r=O.lastBaseUpdate,r!==u&&(r===null?O.firstBaseUpdate=p:r.next=p,O.lastBaseUpdate=d))}if(i!==null){var z=e.baseState;u=0,O=p=d=null,r=i;do{var g=r.lane&-536870913,y=g!==r.lane;if(y?(an&g)===g:(l&g)===g){g!==0&&g===fl&&(Fu=!0),O!==null&&(O=O.next={lane:0,tag:r.tag,payload:r.payload,callback:null,next:null});n:{var L=n,G=r;g=t;var dn=a;switch(G.tag){case 1:if(L=G.payload,typeof L=="function"){z=L.call(dn,z,g);break n}z=L;break n;case 3:L.flags=L.flags&-65537|128;case 0:if(L=G.payload,g=typeof L=="function"?L.call(dn,z,g):L,g==null)break n;z=R({},z,g);break n;case 2:ea=!0}}g=r.callback,g!==null&&(n.flags|=64,y&&(n.flags|=8192),y=e.callbacks,y===null?e.callbacks=[g]:y.push(g))}else y={lane:g,tag:r.tag,payload:r.payload,callback:r.callback,next:null},O===null?(p=O=y,d=z):O=O.next=y,u|=g;if(r=r.next,r===null){if(r=e.shared.pending,r===null)break;y=r,r=y.next,y.next=null,e.lastBaseUpdate=y,e.shared.pending=null}}while(!0);O===null&&(d=z),e.baseState=d,e.firstBaseUpdate=p,e.lastBaseUpdate=O,i===null&&(e.shared.lanes=0),ba|=u,n.lanes=u,n.memoizedState=z}}function Zc(n,t){if(typeof n!="function")throw Error(c(191,n));n.call(t)}function wc(n,t){var a=n.callbacks;if(a!==null)for(n.callbacks=null,n=0;n<a.length;n++)Zc(a[n],t)}var hl=E(null),oi=E(0);function Lc(n,t){n=$t,U(oi,n),U(hl,t),$t=n|t.baseLanes}function Iu(){U(oi,$t),U(hl,hl.current)}function no(){$t=oi.current,H(hl),H(oi)}var oa=0,F=null,sn=null,Nn=null,ri=!1,bl=!1,Ga=!1,ci=0,ee=0,ml=null,uh=0;function Dn(){throw Error(c(321))}function to(n,t){if(t===null)return!1;for(var a=0;a<t.length&&a<n.length;a++)if(!ot(n[a],t[a]))return!1;return!0}function ao(n,t,a,l,e,i){return oa=i,F=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_.H=n===null||n.memoizedState===null?Ds:Ms,Ga=!1,i=a(l,e),Ga=!1,bl&&(i=Kc(t,a,l,e)),Vc(n),i}function Vc(n){_.H=mi;var t=sn!==null&&sn.next!==null;if(oa=0,Nn=sn=F=null,ri=!1,ee=0,ml=null,t)throw Error(c(300));n===null||Cn||(n=n.dependencies,n!==null&&ai(n)&&(Cn=!0))}function Kc(n,t,a,l){F=n;var e=0;do{if(bl&&(ml=null),ee=0,bl=!1,25<=e)throw Error(c(301));if(e+=1,Nn=sn=null,n.updateQueue!=null){var i=n.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}_.H=hh,i=t(a,l)}while(bl);return i}function oh(){var n=_.H,t=n.useState()[0];return t=typeof t.then=="function"?ie(t):t,n=n.useState()[0],(sn!==null?sn.memoizedState:null)!==n&&(F.flags|=1024),t}function lo(){var n=ci!==0;return ci=0,n}function eo(n,t,a){t.updateQueue=n.updateQueue,t.flags&=-2053,n.lanes&=~a}function io(n){if(ri){for(n=n.memoizedState;n!==null;){var t=n.queue;t!==null&&(t.pending=null),n=n.next}ri=!1}oa=0,Nn=sn=F=null,bl=!1,ee=ci=0,ml=null}function In(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nn===null?F.memoizedState=Nn=n:Nn=Nn.next=n,Nn}function qn(){if(sn===null){var n=F.alternate;n=n!==null?n.memoizedState:null}else n=sn.next;var t=Nn===null?F.memoizedState:Nn.next;if(t!==null)Nn=t,sn=n;else{if(n===null)throw F.alternate===null?Error(c(467)):Error(c(310));sn=n,n={memoizedState:sn.memoizedState,baseState:sn.baseState,baseQueue:sn.baseQueue,queue:sn.queue,next:null},Nn===null?F.memoizedState=Nn=n:Nn=Nn.next=n}return Nn}function uo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ie(n){var t=ee;return ee+=1,ml===null&&(ml=[]),n=Xc(ml,n,t),t=F,(Nn===null?t.memoizedState:Nn.next)===null&&(t=t.alternate,_.H=t===null||t.memoizedState===null?Ds:Ms),n}function si(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return ie(n);if(n.$$typeof===on)return Kn(n)}throw Error(c(438,String(n)))}function oo(n){var t=null,a=F.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=F.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(e){return e.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=uo(),F.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(n),l=0;l<n;l++)a[l]=Va;return t.index++,a}function wt(n,t){return typeof t=="function"?t(n):t}function fi(n){var t=qn();return ro(t,sn,n)}function ro(n,t,a){var l=n.queue;if(l===null)throw Error(c(311));l.lastRenderedReducer=a;var e=n.baseQueue,i=l.pending;if(i!==null){if(e!==null){var u=e.next;e.next=i.next,i.next=u}t.baseQueue=e=i,l.pending=null}if(i=n.baseState,e===null)n.memoizedState=i;else{t=e.next;var r=u=null,d=null,p=t,O=!1;do{var z=p.lane&-536870913;if(z!==p.lane?(an&z)===z:(oa&z)===z){var g=p.revertLane;if(g===0)d!==null&&(d=d.next={lane:0,revertLane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),z===fl&&(O=!0);else if((oa&g)===g){p=p.next,g===fl&&(O=!0);continue}else z={lane:0,revertLane:p.revertLane,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},d===null?(r=d=z,u=i):d=d.next=z,F.lanes|=g,ba|=g;z=p.action,Ga&&a(i,z),i=p.hasEagerState?p.eagerState:a(i,z)}else g={lane:z,revertLane:p.revertLane,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},d===null?(r=d=g,u=i):d=d.next=g,F.lanes|=z,ba|=z;p=p.next}while(p!==null&&p!==t);if(d===null?u=i:d.next=r,!ot(i,n.memoizedState)&&(Cn=!0,O&&(a=dl,a!==null)))throw a;n.memoizedState=i,n.baseState=u,n.baseQueue=d,l.lastRenderedState=i}return e===null&&(l.lanes=0),[n.memoizedState,l.dispatch]}function co(n){var t=qn(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=n;var l=a.dispatch,e=a.pending,i=t.memoizedState;if(e!==null){a.pending=null;var u=e=e.next;do i=n(i,u.action),u=u.next;while(u!==e);ot(i,t.memoizedState)||(Cn=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function Jc(n,t,a){var l=F,e=qn(),i=un;if(i){if(a===void 0)throw Error(c(407));a=a()}else a=t();var u=!ot((sn||e).memoizedState,a);u&&(e.memoizedState=a,Cn=!0),e=e.queue;var r=Wc.bind(null,l,e,n);if(ue(2048,8,r,[n]),e.getSnapshot!==t||u||Nn!==null&&Nn.memoizedState.tag&1){if(l.flags|=2048,vl(9,di(),$c.bind(null,l,e,a,t),null),vn===null)throw Error(c(349));i||(oa&124)!==0||Pc(l,t,a)}return a}function Pc(n,t,a){n.flags|=16384,n={getSnapshot:t,value:a},t=F.updateQueue,t===null?(t=uo(),F.updateQueue=t,t.stores=[n]):(a=t.stores,a===null?t.stores=[n]:a.push(n))}function $c(n,t,a,l){t.value=a,t.getSnapshot=l,Fc(t)&&Ic(n)}function Wc(n,t,a){return a(function(){Fc(t)&&Ic(n)})}function Fc(n){var t=n.getSnapshot;n=n.value;try{var a=t();return!ot(n,a)}catch{return!0}}function Ic(n){var t=ol(n,2);t!==null&&ht(t,n,2)}function so(n){var t=In();if(typeof n=="function"){var a=n;if(n=a(),Ga){na(!0);try{a()}finally{na(!1)}}}return t.memoizedState=t.baseState=n,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wt,lastRenderedState:n},t}function ns(n,t,a,l){return n.baseState=a,ro(n,sn,typeof l=="function"?l:wt)}function rh(n,t,a,l,e){if(bi(n))throw Error(c(485));if(n=t.action,n!==null){var i={payload:e,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};_.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,ts(t,i)):(i.next=a.next,t.pending=a.next=i)}}function ts(n,t){var a=t.action,l=t.payload,e=n.state;if(t.isTransition){var i=_.T,u={};_.T=u;try{var r=a(e,l),d=_.S;d!==null&&d(u,r),as(n,t,r)}catch(p){fo(n,t,p)}finally{_.T=i}}else try{i=a(e,l),as(n,t,i)}catch(p){fo(n,t,p)}}function as(n,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){ls(n,t,l)},function(l){return fo(n,t,l)}):ls(n,t,a)}function ls(n,t,a){t.status="fulfilled",t.value=a,es(t),n.state=a,t=n.pending,t!==null&&(a=t.next,a===t?n.pending=null:(a=a.next,t.next=a,ts(n,a)))}function fo(n,t,a){var l=n.pending;if(n.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,es(t),t=t.next;while(t!==l)}n.action=null}function es(n){n=n.listeners;for(var t=0;t<n.length;t++)(0,n[t])()}function is(n,t){return t}function us(n,t){if(un){var a=vn.formState;if(a!==null){n:{var l=F;if(un){if(zn){t:{for(var e=zn,i=Nt;e.nodeType!==8;){if(!i){e=null;break t}if(e=zt(e.nextSibling),e===null){e=null;break t}}i=e.data,e=i==="F!"||i==="F"?e:null}if(e){zn=zt(e.nextSibling),l=e.data==="F!";break n}}Ba(l)}l=!1}l&&(t=a[0])}}return a=In(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:t},a.queue=l,a=As.bind(null,F,l),l.dispatch=a,l=so(!1),i=po.bind(null,F,!1,l.queue),l=In(),e={state:t,dispatch:null,action:n,pending:null},l.queue=e,a=rh.bind(null,F,e,i,a),e.dispatch=a,l.memoizedState=n,[t,a,!1]}function os(n){var t=qn();return rs(t,sn,n)}function rs(n,t,a){if(t=ro(n,t,is)[0],n=fi(wt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=ie(t)}catch(u){throw u===Il?ii:u}else l=t;t=qn();var e=t.queue,i=e.dispatch;return a!==t.memoizedState&&(F.flags|=2048,vl(9,di(),ch.bind(null,e,a),null)),[l,i,n]}function ch(n,t){n.action=t}function cs(n){var t=qn(),a=sn;if(a!==null)return rs(t,a,n);qn(),t=t.memoizedState,a=qn();var l=a.queue.dispatch;return a.memoizedState=n,[t,l,!1]}function vl(n,t,a,l){return n={tag:n,create:a,deps:l,inst:t,next:null},t=F.updateQueue,t===null&&(t=uo(),F.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=n.next=n:(l=a.next,a.next=n,n.next=l,t.lastEffect=n),n}function di(){return{destroy:void 0,resource:void 0}}function ss(){return qn().memoizedState}function hi(n,t,a,l){var e=In();l=l===void 0?null:l,F.flags|=n,e.memoizedState=vl(1|t,di(),a,l)}function ue(n,t,a,l){var e=qn();l=l===void 0?null:l;var i=e.memoizedState.inst;sn!==null&&l!==null&&to(l,sn.memoizedState.deps)?e.memoizedState=vl(t,i,a,l):(F.flags|=n,e.memoizedState=vl(1|t,i,a,l))}function fs(n,t){hi(8390656,8,n,t)}function ds(n,t){ue(2048,8,n,t)}function hs(n,t){return ue(4,2,n,t)}function bs(n,t){return ue(4,4,n,t)}function ms(n,t){if(typeof t=="function"){n=n();var a=t(n);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return n=n(),t.current=n,function(){t.current=null}}function vs(n,t,a){a=a!=null?a.concat([n]):null,ue(4,4,ms.bind(null,t,n),a)}function ho(){}function ps(n,t){var a=qn();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&to(t,l[1])?l[0]:(a.memoizedState=[n,t],n)}function gs(n,t){var a=qn();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&to(t,l[1]))return l[0];if(l=n(),Ga){na(!0);try{n()}finally{na(!1)}}return a.memoizedState=[l,t],l}function bo(n,t,a){return a===void 0||(oa&1073741824)!==0?n.memoizedState=t:(n.memoizedState=a,n=Of(),F.lanes|=n,ba|=n,a)}function ys(n,t,a,l){return ot(a,t)?a:hl.current!==null?(n=bo(n,a,l),ot(n,t)||(Cn=!0),n):(oa&42)===0?(Cn=!0,n.memoizedState=a):(n=Of(),F.lanes|=n,ba|=n,t)}function xs(n,t,a,l,e){var i=k.p;k.p=i!==0&&8>i?i:8;var u=_.T,r={};_.T=r,po(n,!1,t,a);try{var d=e(),p=_.S;if(p!==null&&p(r,d),d!==null&&typeof d=="object"&&typeof d.then=="function"){var O=ih(d,l);oe(n,t,O,dt(n))}else oe(n,t,l,dt(n))}catch(z){oe(n,t,{then:function(){},status:"rejected",reason:z},dt())}finally{k.p=i,_.T=u}}function sh(){}function mo(n,t,a,l){if(n.tag!==5)throw Error(c(476));var e=Ss(n).queue;xs(n,e,t,Z,a===null?sh:function(){return Os(n),a(l)})}function Ss(n){var t=n.memoizedState;if(t!==null)return t;t={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wt,lastRenderedState:Z},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wt,lastRenderedState:a},next:null},n.memoizedState=t,n=n.alternate,n!==null&&(n.memoizedState=t),t}function Os(n){var t=Ss(n).next.queue;oe(n,t,{},dt())}function vo(){return Kn(Ae)}function _s(){return qn().memoizedState}function Ts(){return qn().memoizedState}function fh(n){for(var t=n.return;t!==null;){switch(t.tag){case 24:case 3:var a=dt();n=ia(a);var l=ua(t,n,a);l!==null&&(ht(l,t,a),te(l,t,a)),t={cache:Lu()},n.payload=t;return}t=t.return}}function dh(n,t,a){var l=dt();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},bi(n)?zs(t,a):(a=Hu(n,t,a,l),a!==null&&(ht(a,n,l),Es(a,t,l)))}function As(n,t,a){var l=dt();oe(n,t,a,l)}function oe(n,t,a,l){var e={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(bi(n))zs(t,e);else{var i=n.alternate;if(n.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,r=i(u,a);if(e.hasEagerState=!0,e.eagerState=r,ot(r,u))return We(n,t,e,0),vn===null&&$e(),!1}catch{}finally{}if(a=Hu(n,t,e,l),a!==null)return ht(a,n,l),Es(a,t,l),!0}return!1}function po(n,t,a,l){if(l={lane:2,revertLane:Po(),action:l,hasEagerState:!1,eagerState:null,next:null},bi(n)){if(t)throw Error(c(479))}else t=Hu(n,a,l,2),t!==null&&ht(t,n,2)}function bi(n){var t=n.alternate;return n===F||t!==null&&t===F}function zs(n,t){bl=ri=!0;var a=n.pending;a===null?t.next=t:(t.next=a.next,a.next=t),n.pending=t}function Es(n,t,a){if((a&4194048)!==0){var l=t.lanes;l&=n.pendingLanes,a|=l,t.lanes=a,Hr(n,a)}}var mi={readContext:Kn,use:si,useCallback:Dn,useContext:Dn,useEffect:Dn,useImperativeHandle:Dn,useLayoutEffect:Dn,useInsertionEffect:Dn,useMemo:Dn,useReducer:Dn,useRef:Dn,useState:Dn,useDebugValue:Dn,useDeferredValue:Dn,useTransition:Dn,useSyncExternalStore:Dn,useId:Dn,useHostTransitionStatus:Dn,useFormState:Dn,useActionState:Dn,useOptimistic:Dn,useMemoCache:Dn,useCacheRefresh:Dn},Ds={readContext:Kn,use:si,useCallback:function(n,t){return In().memoizedState=[n,t===void 0?null:t],n},useContext:Kn,useEffect:fs,useImperativeHandle:function(n,t,a){a=a!=null?a.concat([n]):null,hi(4194308,4,ms.bind(null,t,n),a)},useLayoutEffect:function(n,t){return hi(4194308,4,n,t)},useInsertionEffect:function(n,t){hi(4,2,n,t)},useMemo:function(n,t){var a=In();t=t===void 0?null:t;var l=n();if(Ga){na(!0);try{n()}finally{na(!1)}}return a.memoizedState=[l,t],l},useReducer:function(n,t,a){var l=In();if(a!==void 0){var e=a(t);if(Ga){na(!0);try{a(t)}finally{na(!1)}}}else e=t;return l.memoizedState=l.baseState=e,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},l.queue=n,n=n.dispatch=dh.bind(null,F,n),[l.memoizedState,n]},useRef:function(n){var t=In();return n={current:n},t.memoizedState=n},useState:function(n){n=so(n);var t=n.queue,a=As.bind(null,F,t);return t.dispatch=a,[n.memoizedState,a]},useDebugValue:ho,useDeferredValue:function(n,t){var a=In();return bo(a,n,t)},useTransition:function(){var n=so(!1);return n=xs.bind(null,F,n.queue,!0,!1),In().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,t,a){var l=F,e=In();if(un){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),vn===null)throw Error(c(349));(an&124)!==0||Pc(l,t,a)}e.memoizedState=a;var i={value:a,getSnapshot:t};return e.queue=i,fs(Wc.bind(null,l,i,n),[n]),l.flags|=2048,vl(9,di(),$c.bind(null,l,i,a,t),null),a},useId:function(){var n=In(),t=vn.identifierPrefix;if(un){var a=Gt,l=Xt;a=(l&~(1<<32-ut(l)-1)).toString(32)+a,t="«"+t+"R"+a,a=ci++,0<a&&(t+="H"+a.toString(32)),t+="»"}else a=uh++,t="«"+t+"r"+a.toString(32)+"»";return n.memoizedState=t},useHostTransitionStatus:vo,useFormState:us,useActionState:us,useOptimistic:function(n){var t=In();t.memoizedState=t.baseState=n;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=po.bind(null,F,!0,a),a.dispatch=t,[n,t]},useMemoCache:oo,useCacheRefresh:function(){return In().memoizedState=fh.bind(null,F)}},Ms={readContext:Kn,use:si,useCallback:ps,useContext:Kn,useEffect:ds,useImperativeHandle:vs,useInsertionEffect:hs,useLayoutEffect:bs,useMemo:gs,useReducer:fi,useRef:ss,useState:function(){return fi(wt)},useDebugValue:ho,useDeferredValue:function(n,t){var a=qn();return ys(a,sn.memoizedState,n,t)},useTransition:function(){var n=fi(wt)[0],t=qn().memoizedState;return[typeof n=="boolean"?n:ie(n),t]},useSyncExternalStore:Jc,useId:_s,useHostTransitionStatus:vo,useFormState:os,useActionState:os,useOptimistic:function(n,t){var a=qn();return ns(a,sn,n,t)},useMemoCache:oo,useCacheRefresh:Ts},hh={readContext:Kn,use:si,useCallback:ps,useContext:Kn,useEffect:ds,useImperativeHandle:vs,useInsertionEffect:hs,useLayoutEffect:bs,useMemo:gs,useReducer:co,useRef:ss,useState:function(){return co(wt)},useDebugValue:ho,useDeferredValue:function(n,t){var a=qn();return sn===null?bo(a,n,t):ys(a,sn.memoizedState,n,t)},useTransition:function(){var n=co(wt)[0],t=qn().memoizedState;return[typeof n=="boolean"?n:ie(n),t]},useSyncExternalStore:Jc,useId:_s,useHostTransitionStatus:vo,useFormState:cs,useActionState:cs,useOptimistic:function(n,t){var a=qn();return sn!==null?ns(a,sn,n,t):(a.baseState=n,[n,a.queue.dispatch])},useMemoCache:oo,useCacheRefresh:Ts},pl=null,re=0;function vi(n){var t=re;return re+=1,pl===null&&(pl=[]),Xc(pl,n,t)}function ce(n,t){t=t.props.ref,n.ref=t!==void 0?t:null}function pi(n,t){throw t.$$typeof===W?Error(c(525)):(n=Object.prototype.toString.call(t),Error(c(31,n==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":n)))}function Ns(n){var t=n._init;return t(n._payload)}function qs(n){function t(m,b){if(n){var v=m.deletions;v===null?(m.deletions=[b],m.flags|=16):v.push(b)}}function a(m,b){if(!n)return null;for(;b!==null;)t(m,b),b=b.sibling;return null}function l(m){for(var b=new Map;m!==null;)m.key!==null?b.set(m.key,m):b.set(m.index,m),m=m.sibling;return b}function e(m,b){return m=Yt(m,b),m.index=0,m.sibling=null,m}function i(m,b,v){return m.index=v,n?(v=m.alternate,v!==null?(v=v.index,v<b?(m.flags|=67108866,b):v):(m.flags|=67108866,b)):(m.flags|=1048576,b)}function u(m){return n&&m.alternate===null&&(m.flags|=67108866),m}function r(m,b,v,T){return b===null||b.tag!==6?(b=Bu(v,m.mode,T),b.return=m,b):(b=e(b,v),b.return=m,b)}function d(m,b,v,T){var j=v.type;return j===w?O(m,b,v.props.children,T,v.key):b!==null&&(b.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Un&&Ns(j)===b.type)?(b=e(b,v.props),ce(b,v),b.return=m,b):(b=Ie(v.type,v.key,v.props,null,m.mode,T),ce(b,v),b.return=m,b)}function p(m,b,v,T){return b===null||b.tag!==4||b.stateNode.containerInfo!==v.containerInfo||b.stateNode.implementation!==v.implementation?(b=Cu(v,m.mode,T),b.return=m,b):(b=e(b,v.children||[]),b.return=m,b)}function O(m,b,v,T,j){return b===null||b.tag!==7?(b=Ua(v,m.mode,T,j),b.return=m,b):(b=e(b,v),b.return=m,b)}function z(m,b,v){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return b=Bu(""+b,m.mode,v),b.return=m,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case K:return v=Ie(b.type,b.key,b.props,null,m.mode,v),ce(v,b),v.return=m,v;case hn:return b=Cu(b,m.mode,v),b.return=m,b;case Un:var T=b._init;return b=T(b._payload),z(m,b,v)}if(Ln(b)||wn(b))return b=Ua(b,m.mode,v,null),b.return=m,b;if(typeof b.then=="function")return z(m,vi(b),v);if(b.$$typeof===on)return z(m,li(m,b),v);pi(m,b)}return null}function g(m,b,v,T){var j=b!==null?b.key:null;if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return j!==null?null:r(m,b,""+v,T);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case K:return v.key===j?d(m,b,v,T):null;case hn:return v.key===j?p(m,b,v,T):null;case Un:return j=v._init,v=j(v._payload),g(m,b,v,T)}if(Ln(v)||wn(v))return j!==null?null:O(m,b,v,T,null);if(typeof v.then=="function")return g(m,b,vi(v),T);if(v.$$typeof===on)return g(m,b,li(m,v),T);pi(m,v)}return null}function y(m,b,v,T,j){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return m=m.get(v)||null,r(b,m,""+T,j);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case K:return m=m.get(T.key===null?v:T.key)||null,d(b,m,T,j);case hn:return m=m.get(T.key===null?v:T.key)||null,p(b,m,T,j);case Un:var I=T._init;return T=I(T._payload),y(m,b,v,T,j)}if(Ln(T)||wn(T))return m=m.get(v)||null,O(b,m,T,j,null);if(typeof T.then=="function")return y(m,b,v,vi(T),j);if(T.$$typeof===on)return y(m,b,v,li(b,T),j);pi(b,T)}return null}function L(m,b,v,T){for(var j=null,I=null,B=b,Q=b=0,Xn=null;B!==null&&Q<v.length;Q++){B.index>Q?(Xn=B,B=null):Xn=B.sibling;var en=g(m,B,v[Q],T);if(en===null){B===null&&(B=Xn);break}n&&B&&en.alternate===null&&t(m,B),b=i(en,b,Q),I===null?j=en:I.sibling=en,I=en,B=Xn}if(Q===v.length)return a(m,B),un&&Ha(m,Q),j;if(B===null){for(;Q<v.length;Q++)B=z(m,v[Q],T),B!==null&&(b=i(B,b,Q),I===null?j=B:I.sibling=B,I=B);return un&&Ha(m,Q),j}for(B=l(B);Q<v.length;Q++)Xn=y(B,m,Q,v[Q],T),Xn!==null&&(n&&Xn.alternate!==null&&B.delete(Xn.key===null?Q:Xn.key),b=i(Xn,b,Q),I===null?j=Xn:I.sibling=Xn,I=Xn);return n&&B.forEach(function(_a){return t(m,_a)}),un&&Ha(m,Q),j}function G(m,b,v,T){if(v==null)throw Error(c(151));for(var j=null,I=null,B=b,Q=b=0,Xn=null,en=v.next();B!==null&&!en.done;Q++,en=v.next()){B.index>Q?(Xn=B,B=null):Xn=B.sibling;var _a=g(m,B,en.value,T);if(_a===null){B===null&&(B=Xn);break}n&&B&&_a.alternate===null&&t(m,B),b=i(_a,b,Q),I===null?j=_a:I.sibling=_a,I=_a,B=Xn}if(en.done)return a(m,B),un&&Ha(m,Q),j;if(B===null){for(;!en.done;Q++,en=v.next())en=z(m,en.value,T),en!==null&&(b=i(en,b,Q),I===null?j=en:I.sibling=en,I=en);return un&&Ha(m,Q),j}for(B=l(B);!en.done;Q++,en=v.next())en=y(B,m,Q,en.value,T),en!==null&&(n&&en.alternate!==null&&B.delete(en.key===null?Q:en.key),b=i(en,b,Q),I===null?j=en:I.sibling=en,I=en);return n&&B.forEach(function(bb){return t(m,bb)}),un&&Ha(m,Q),j}function dn(m,b,v,T){if(typeof v=="object"&&v!==null&&v.type===w&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case K:n:{for(var j=v.key;b!==null;){if(b.key===j){if(j=v.type,j===w){if(b.tag===7){a(m,b.sibling),T=e(b,v.props.children),T.return=m,m=T;break n}}else if(b.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Un&&Ns(j)===b.type){a(m,b.sibling),T=e(b,v.props),ce(T,v),T.return=m,m=T;break n}a(m,b);break}else t(m,b);b=b.sibling}v.type===w?(T=Ua(v.props.children,m.mode,T,v.key),T.return=m,m=T):(T=Ie(v.type,v.key,v.props,null,m.mode,T),ce(T,v),T.return=m,m=T)}return u(m);case hn:n:{for(j=v.key;b!==null;){if(b.key===j)if(b.tag===4&&b.stateNode.containerInfo===v.containerInfo&&b.stateNode.implementation===v.implementation){a(m,b.sibling),T=e(b,v.children||[]),T.return=m,m=T;break n}else{a(m,b);break}else t(m,b);b=b.sibling}T=Cu(v,m.mode,T),T.return=m,m=T}return u(m);case Un:return j=v._init,v=j(v._payload),dn(m,b,v,T)}if(Ln(v))return L(m,b,v,T);if(wn(v)){if(j=wn(v),typeof j!="function")throw Error(c(150));return v=j.call(v),G(m,b,v,T)}if(typeof v.then=="function")return dn(m,b,vi(v),T);if(v.$$typeof===on)return dn(m,b,li(m,v),T);pi(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint"?(v=""+v,b!==null&&b.tag===6?(a(m,b.sibling),T=e(b,v),T.return=m,m=T):(a(m,b),T=Bu(v,m.mode,T),T.return=m,m=T),u(m)):a(m,b)}return function(m,b,v,T){try{re=0;var j=dn(m,b,v,T);return pl=null,j}catch(B){if(B===Il||B===ii)throw B;var I=rt(29,B,null,m.mode);return I.lanes=T,I.return=m,I}finally{}}}var gl=qs(!0),Rs=qs(!1),St=E(null),qt=null;function ra(n){var t=n.alternate;U(Hn,Hn.current&1),U(St,n),qt===null&&(t===null||hl.current!==null||t.memoizedState!==null)&&(qt=n)}function Us(n){if(n.tag===22){if(U(Hn,Hn.current),U(St,n),qt===null){var t=n.alternate;t!==null&&t.memoizedState!==null&&(qt=n)}}else ca()}function ca(){U(Hn,Hn.current),U(St,St.current)}function Lt(n){H(St),qt===n&&(qt=null),H(Hn)}var Hn=E(0);function gi(n){for(var t=n;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||or(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function go(n,t,a,l){t=n.memoizedState,a=a(l,t),a=a==null?t:R({},t,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var yo={enqueueSetState:function(n,t,a){n=n._reactInternals;var l=dt(),e=ia(l);e.payload=t,a!=null&&(e.callback=a),t=ua(n,e,l),t!==null&&(ht(t,n,l),te(t,n,l))},enqueueReplaceState:function(n,t,a){n=n._reactInternals;var l=dt(),e=ia(l);e.tag=1,e.payload=t,a!=null&&(e.callback=a),t=ua(n,e,l),t!==null&&(ht(t,n,l),te(t,n,l))},enqueueForceUpdate:function(n,t){n=n._reactInternals;var a=dt(),l=ia(a);l.tag=2,t!=null&&(l.callback=t),t=ua(n,l,a),t!==null&&(ht(t,n,a),te(t,n,a))}};function ks(n,t,a,l,e,i,u){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(l,i,u):t.prototype&&t.prototype.isPureReactComponent?!Ll(a,l)||!Ll(e,i):!0}function Hs(n,t,a,l){n=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==n&&yo.enqueueReplaceState(t,t.state,null)}function Qa(n,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(n=n.defaultProps){a===t&&(a=R({},a));for(var e in n)a[e]===void 0&&(a[e]=n[e])}return a}var yi=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function js(n){yi(n)}function Bs(n){console.error(n)}function Cs(n){yi(n)}function xi(n,t){try{var a=n.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Ys(n,t,a){try{var l=n.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function xo(n,t,a){return a=ia(a),a.tag=3,a.payload={element:null},a.callback=function(){xi(n,t)},a}function Xs(n){return n=ia(n),n.tag=3,n}function Gs(n,t,a,l){var e=a.type.getDerivedStateFromError;if(typeof e=="function"){var i=l.value;n.payload=function(){return e(i)},n.callback=function(){Ys(t,a,l)}}var u=a.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(n.callback=function(){Ys(t,a,l),typeof e!="function"&&(ma===null?ma=new Set([this]):ma.add(this));var r=l.stack;this.componentDidCatch(l.value,{componentStack:r!==null?r:""})})}function bh(n,t,a,l,e){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&$l(t,a,e,!0),a=St.current,a!==null){switch(a.tag){case 13:return qt===null?wo():a.alternate===null&&En===0&&(En=3),a.flags&=-257,a.flags|=65536,a.lanes=e,l===Ju?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),Vo(n,l,e)),!1;case 22:return a.flags|=65536,l===Ju?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),Vo(n,l,e)),!1}throw Error(c(435,a.tag))}return Vo(n,l,e),wo(),!1}if(un)return t=St.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=e,l!==Gu&&(n=Error(c(422),{cause:l}),Pl(pt(n,a)))):(l!==Gu&&(t=Error(c(423),{cause:l}),Pl(pt(t,a))),n=n.current.alternate,n.flags|=65536,e&=-e,n.lanes|=e,l=pt(l,a),e=xo(n.stateNode,l,e),Wu(n,e),En!==4&&(En=2)),!1;var i=Error(c(520),{cause:l});if(i=pt(i,a),ve===null?ve=[i]:ve.push(i),En!==4&&(En=2),t===null)return!0;l=pt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,n=e&-e,a.lanes|=n,n=xo(a.stateNode,l,n),Wu(a,n),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(ma===null||!ma.has(i))))return a.flags|=65536,e&=-e,a.lanes|=e,e=Xs(e),Gs(e,n,a,l),Wu(a,e),!1}a=a.return}while(a!==null);return!1}var Qs=Error(c(461)),Cn=!1;function Gn(n,t,a,l){t.child=n===null?Rs(t,null,a,l):gl(t,n.child,a,l)}function Zs(n,t,a,l,e){a=a.render;var i=t.ref;if("ref"in l){var u={};for(var r in l)r!=="ref"&&(u[r]=l[r])}else u=l;return Ya(t),l=ao(n,t,a,u,i,e),r=lo(),n!==null&&!Cn?(eo(n,t,e),Vt(n,t,e)):(un&&r&&Yu(t),t.flags|=1,Gn(n,t,l,e),t.child)}function ws(n,t,a,l,e){if(n===null){var i=a.type;return typeof i=="function"&&!ju(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,Ls(n,t,i,l,e)):(n=Ie(a.type,null,l,t,t.mode,e),n.ref=t.ref,n.return=t,t.child=n)}if(i=n.child,!Do(n,e)){var u=i.memoizedProps;if(a=a.compare,a=a!==null?a:Ll,a(u,l)&&n.ref===t.ref)return Vt(n,t,e)}return t.flags|=1,n=Yt(i,l),n.ref=t.ref,n.return=t,t.child=n}function Ls(n,t,a,l,e){if(n!==null){var i=n.memoizedProps;if(Ll(i,l)&&n.ref===t.ref)if(Cn=!1,t.pendingProps=l=i,Do(n,e))(n.flags&131072)!==0&&(Cn=!0);else return t.lanes=n.lanes,Vt(n,t,e)}return So(n,t,a,l,e)}function Vs(n,t,a){var l=t.pendingProps,e=l.children,i=n!==null?n.memoizedState:null;if(l.mode==="hidden"){if((t.flags&128)!==0){if(l=i!==null?i.baseLanes|a:a,n!==null){for(e=t.child=n.child,i=0;e!==null;)i=i|e.lanes|e.childLanes,e=e.sibling;t.childLanes=i&~l}else t.childLanes=0,t.child=null;return Ks(n,t,l,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},n!==null&&ei(t,i!==null?i.cachePool:null),i!==null?Lc(t,i):Iu(),Us(t);else return t.lanes=t.childLanes=536870912,Ks(n,t,i!==null?i.baseLanes|a:a,a)}else i!==null?(ei(t,i.cachePool),Lc(t,i),ca(),t.memoizedState=null):(n!==null&&ei(t,null),Iu(),ca());return Gn(n,t,e,a),t.child}function Ks(n,t,a,l){var e=Ku();return e=e===null?null:{parent:kn._currentValue,pool:e},t.memoizedState={baseLanes:a,cachePool:e},n!==null&&ei(t,null),Iu(),Us(t),n!==null&&$l(n,t,l,!0),null}function Si(n,t){var a=t.ref;if(a===null)n!==null&&n.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(n===null||n.ref!==a)&&(t.flags|=4194816)}}function So(n,t,a,l,e){return Ya(t),a=ao(n,t,a,l,void 0,e),l=lo(),n!==null&&!Cn?(eo(n,t,e),Vt(n,t,e)):(un&&l&&Yu(t),t.flags|=1,Gn(n,t,a,e),t.child)}function Js(n,t,a,l,e,i){return Ya(t),t.updateQueue=null,a=Kc(t,l,a,e),Vc(n),l=lo(),n!==null&&!Cn?(eo(n,t,i),Vt(n,t,i)):(un&&l&&Yu(t),t.flags|=1,Gn(n,t,a,i),t.child)}function Ps(n,t,a,l,e){if(Ya(t),t.stateNode===null){var i=rl,u=a.contextType;typeof u=="object"&&u!==null&&(i=Kn(u)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=yo,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},Pu(t),u=a.contextType,i.context=typeof u=="object"&&u!==null?Kn(u):rl,i.state=t.memoizedState,u=a.getDerivedStateFromProps,typeof u=="function"&&(go(t,a,u,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&yo.enqueueReplaceState(i,i.state,null),le(t,l,i,e),ae(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(n===null){i=t.stateNode;var r=t.memoizedProps,d=Qa(a,r);i.props=d;var p=i.context,O=a.contextType;u=rl,typeof O=="object"&&O!==null&&(u=Kn(O));var z=a.getDerivedStateFromProps;O=typeof z=="function"||typeof i.getSnapshotBeforeUpdate=="function",r=t.pendingProps!==r,O||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r||p!==u)&&Hs(t,i,l,u),ea=!1;var g=t.memoizedState;i.state=g,le(t,l,i,e),ae(),p=t.memoizedState,r||g!==p||ea?(typeof z=="function"&&(go(t,a,z,l),p=t.memoizedState),(d=ea||ks(t,a,d,l,g,p,u))?(O||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=p),i.props=l,i.state=p,i.context=u,l=d):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,$u(n,t),u=t.memoizedProps,O=Qa(a,u),i.props=O,z=t.pendingProps,g=i.context,p=a.contextType,d=rl,typeof p=="object"&&p!==null&&(d=Kn(p)),r=a.getDerivedStateFromProps,(p=typeof r=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==z||g!==d)&&Hs(t,i,l,d),ea=!1,g=t.memoizedState,i.state=g,le(t,l,i,e),ae();var y=t.memoizedState;u!==z||g!==y||ea||n!==null&&n.dependencies!==null&&ai(n.dependencies)?(typeof r=="function"&&(go(t,a,r,l),y=t.memoizedState),(O=ea||ks(t,a,O,l,g,y,d)||n!==null&&n.dependencies!==null&&ai(n.dependencies))?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,y,d),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,y,d)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===n.memoizedProps&&g===n.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===n.memoizedProps&&g===n.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=y),i.props=l,i.state=y,i.context=d,l=O):(typeof i.componentDidUpdate!="function"||u===n.memoizedProps&&g===n.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===n.memoizedProps&&g===n.memoizedState||(t.flags|=1024),l=!1)}return i=l,Si(n,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,n!==null&&l?(t.child=gl(t,n.child,null,e),t.child=gl(t,null,a,e)):Gn(n,t,a,e),t.memoizedState=i.state,n=t.child):n=Vt(n,t,e),n}function $s(n,t,a,l){return Jl(),t.flags|=256,Gn(n,t,a,l),t.child}var Oo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function _o(n){return{baseLanes:n,cachePool:Bc()}}function To(n,t,a){return n=n!==null?n.childLanes&~a:0,t&&(n|=Ot),n}function Ws(n,t,a){var l=t.pendingProps,e=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=n!==null&&n.memoizedState===null?!1:(Hn.current&2)!==0),u&&(e=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,n===null){if(un){if(e?ra(t):ca(),un){var r=zn,d;if(d=r){n:{for(d=r,r=Nt;d.nodeType!==8;){if(!r){r=null;break n}if(d=zt(d.nextSibling),d===null){r=null;break n}}r=d}r!==null?(t.memoizedState={dehydrated:r,treeContext:ka!==null?{id:Xt,overflow:Gt}:null,retryLane:536870912,hydrationErrors:null},d=rt(18,null,null,0),d.stateNode=r,d.return=t,t.child=d,$n=t,zn=null,d=!0):d=!1}d||Ba(t)}if(r=t.memoizedState,r!==null&&(r=r.dehydrated,r!==null))return or(r)?t.lanes=32:t.lanes=536870912,null;Lt(t)}return r=l.children,l=l.fallback,e?(ca(),e=t.mode,r=Oi({mode:"hidden",children:r},e),l=Ua(l,e,a,null),r.return=t,l.return=t,r.sibling=l,t.child=r,e=t.child,e.memoizedState=_o(a),e.childLanes=To(n,u,a),t.memoizedState=Oo,l):(ra(t),Ao(t,r))}if(d=n.memoizedState,d!==null&&(r=d.dehydrated,r!==null)){if(i)t.flags&256?(ra(t),t.flags&=-257,t=zo(n,t,a)):t.memoizedState!==null?(ca(),t.child=n.child,t.flags|=128,t=null):(ca(),e=l.fallback,r=t.mode,l=Oi({mode:"visible",children:l.children},r),e=Ua(e,r,a,null),e.flags|=2,l.return=t,e.return=t,l.sibling=e,t.child=l,gl(t,n.child,null,a),l=t.child,l.memoizedState=_o(a),l.childLanes=To(n,u,a),t.memoizedState=Oo,t=e);else if(ra(t),or(r)){if(u=r.nextSibling&&r.nextSibling.dataset,u)var p=u.dgst;u=p,l=Error(c(419)),l.stack="",l.digest=u,Pl({value:l,source:null,stack:null}),t=zo(n,t,a)}else if(Cn||$l(n,t,a,!1),u=(a&n.childLanes)!==0,Cn||u){if(u=vn,u!==null&&(l=a&-a,l=(l&42)!==0?1:ou(l),l=(l&(u.suspendedLanes|a))!==0?0:l,l!==0&&l!==d.retryLane))throw d.retryLane=l,ol(n,l),ht(u,n,l),Qs;r.data==="$?"||wo(),t=zo(n,t,a)}else r.data==="$?"?(t.flags|=192,t.child=n.child,t=null):(n=d.treeContext,zn=zt(r.nextSibling),$n=t,un=!0,ja=null,Nt=!1,n!==null&&(yt[xt++]=Xt,yt[xt++]=Gt,yt[xt++]=ka,Xt=n.id,Gt=n.overflow,ka=t),t=Ao(t,l.children),t.flags|=4096);return t}return e?(ca(),e=l.fallback,r=t.mode,d=n.child,p=d.sibling,l=Yt(d,{mode:"hidden",children:l.children}),l.subtreeFlags=d.subtreeFlags&65011712,p!==null?e=Yt(p,e):(e=Ua(e,r,a,null),e.flags|=2),e.return=t,l.return=t,l.sibling=e,t.child=l,l=e,e=t.child,r=n.child.memoizedState,r===null?r=_o(a):(d=r.cachePool,d!==null?(p=kn._currentValue,d=d.parent!==p?{parent:p,pool:p}:d):d=Bc(),r={baseLanes:r.baseLanes|a,cachePool:d}),e.memoizedState=r,e.childLanes=To(n,u,a),t.memoizedState=Oo,l):(ra(t),a=n.child,n=a.sibling,a=Yt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,n!==null&&(u=t.deletions,u===null?(t.deletions=[n],t.flags|=16):u.push(n)),t.child=a,t.memoizedState=null,a)}function Ao(n,t){return t=Oi({mode:"visible",children:t},n.mode),t.return=n,n.child=t}function Oi(n,t){return n=rt(22,n,null,t),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function zo(n,t,a){return gl(t,n.child,null,a),n=Ao(t,t.pendingProps.children),n.flags|=2,t.memoizedState=null,n}function Fs(n,t,a){n.lanes|=t;var l=n.alternate;l!==null&&(l.lanes|=t),Zu(n.return,t,a)}function Eo(n,t,a,l,e){var i=n.memoizedState;i===null?n.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:e}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=l,i.tail=a,i.tailMode=e)}function Is(n,t,a){var l=t.pendingProps,e=l.revealOrder,i=l.tail;if(Gn(n,t,l.children,a),l=Hn.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(n!==null&&(n.flags&128)!==0)n:for(n=t.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Fs(n,a,t);else if(n.tag===19)Fs(n,a,t);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break n;for(;n.sibling===null;){if(n.return===null||n.return===t)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}l&=1}switch(U(Hn,l),e){case"forwards":for(a=t.child,e=null;a!==null;)n=a.alternate,n!==null&&gi(n)===null&&(e=a),a=a.sibling;a=e,a===null?(e=t.child,t.child=null):(e=a.sibling,a.sibling=null),Eo(t,!1,e,a,i);break;case"backwards":for(a=null,e=t.child,t.child=null;e!==null;){if(n=e.alternate,n!==null&&gi(n)===null){t.child=e;break}n=e.sibling,e.sibling=a,a=e,e=n}Eo(t,!0,a,null,i);break;case"together":Eo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Vt(n,t,a){if(n!==null&&(t.dependencies=n.dependencies),ba|=t.lanes,(a&t.childLanes)===0)if(n!==null){if($l(n,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(n!==null&&t.child!==n.child)throw Error(c(153));if(t.child!==null){for(n=t.child,a=Yt(n,n.pendingProps),t.child=a,a.return=t;n.sibling!==null;)n=n.sibling,a=a.sibling=Yt(n,n.pendingProps),a.return=t;a.sibling=null}return t.child}function Do(n,t){return(n.lanes&t)!==0?!0:(n=n.dependencies,!!(n!==null&&ai(n)))}function mh(n,t,a){switch(t.tag){case 3:yn(t,t.stateNode.containerInfo),la(t,kn,n.memoizedState.cache),Jl();break;case 27:case 5:au(t);break;case 4:yn(t,t.stateNode.containerInfo);break;case 10:la(t,t.type,t.memoizedProps.value);break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(ra(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Ws(n,t,a):(ra(t),n=Vt(n,t,a),n!==null?n.sibling:null);ra(t);break;case 19:var e=(n.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||($l(n,t,a,!1),l=(a&t.childLanes)!==0),e){if(l)return Is(n,t,a);t.flags|=128}if(e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null,e.lastEffect=null),U(Hn,Hn.current),l)break;return null;case 22:case 23:return t.lanes=0,Vs(n,t,a);case 24:la(t,kn,n.memoizedState.cache)}return Vt(n,t,a)}function nf(n,t,a){if(n!==null)if(n.memoizedProps!==t.pendingProps)Cn=!0;else{if(!Do(n,a)&&(t.flags&128)===0)return Cn=!1,mh(n,t,a);Cn=(n.flags&131072)!==0}else Cn=!1,un&&(t.flags&1048576)!==0&&Nc(t,ti,t.index);switch(t.lanes=0,t.tag){case 16:n:{n=t.pendingProps;var l=t.elementType,e=l._init;if(l=e(l._payload),t.type=l,typeof l=="function")ju(l)?(n=Qa(l,n),t.tag=1,t=Ps(null,t,l,n,a)):(t.tag=0,t=So(null,t,l,n,a));else{if(l!=null){if(e=l.$$typeof,e===Tn){t.tag=11,t=Zs(null,t,l,n,a);break n}else if(e===On){t.tag=14,t=ws(null,t,l,n,a);break n}}throw t=Ea(l)||l,Error(c(306,t,""))}}return t;case 0:return So(n,t,t.type,t.pendingProps,a);case 1:return l=t.type,e=Qa(l,t.pendingProps),Ps(n,t,l,e,a);case 3:n:{if(yn(t,t.stateNode.containerInfo),n===null)throw Error(c(387));l=t.pendingProps;var i=t.memoizedState;e=i.element,$u(n,t),le(t,l,null,a);var u=t.memoizedState;if(l=u.cache,la(t,kn,l),l!==i.cache&&wu(t,[kn],a,!0),ae(),l=u.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=$s(n,t,l,a);break n}else if(l!==e){e=pt(Error(c(424)),t),Pl(e),t=$s(n,t,l,a);break n}else{switch(n=t.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(zn=zt(n.firstChild),$n=t,un=!0,ja=null,Nt=!0,a=Rs(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Jl(),l===e){t=Vt(n,t,a);break n}Gn(n,t,l,a)}t=t.child}return t;case 26:return Si(n,t),n===null?(a=id(t.type,null,t.pendingProps,null))?t.memoizedState=a:un||(a=t.type,n=t.pendingProps,l=ji(P.current).createElement(a),l[Vn]=t,l[Wn]=n,Zn(l,a,n),Bn(l),t.stateNode=l):t.memoizedState=id(t.type,n.memoizedProps,t.pendingProps,n.memoizedState),null;case 27:return au(t),n===null&&un&&(l=t.stateNode=ad(t.type,t.pendingProps,P.current),$n=t,Nt=!0,e=zn,ga(t.type)?(rr=e,zn=zt(l.firstChild)):zn=e),Gn(n,t,t.pendingProps.children,a),Si(n,t),n===null&&(t.flags|=4194304),t.child;case 5:return n===null&&un&&((e=l=zn)&&(l=Zh(l,t.type,t.pendingProps,Nt),l!==null?(t.stateNode=l,$n=t,zn=zt(l.firstChild),Nt=!1,e=!0):e=!1),e||Ba(t)),au(t),e=t.type,i=t.pendingProps,u=n!==null?n.memoizedProps:null,l=i.children,er(e,i)?l=null:u!==null&&er(e,u)&&(t.flags|=32),t.memoizedState!==null&&(e=ao(n,t,oh,null,null,a),Ae._currentValue=e),Si(n,t),Gn(n,t,l,a),t.child;case 6:return n===null&&un&&((n=a=zn)&&(a=wh(a,t.pendingProps,Nt),a!==null?(t.stateNode=a,$n=t,zn=null,n=!0):n=!1),n||Ba(t)),null;case 13:return Ws(n,t,a);case 4:return yn(t,t.stateNode.containerInfo),l=t.pendingProps,n===null?t.child=gl(t,null,l,a):Gn(n,t,l,a),t.child;case 11:return Zs(n,t,t.type,t.pendingProps,a);case 7:return Gn(n,t,t.pendingProps,a),t.child;case 8:return Gn(n,t,t.pendingProps.children,a),t.child;case 12:return Gn(n,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,la(t,t.type,l.value),Gn(n,t,l.children,a),t.child;case 9:return e=t.type._context,l=t.pendingProps.children,Ya(t),e=Kn(e),l=l(e),t.flags|=1,Gn(n,t,l,a),t.child;case 14:return ws(n,t,t.type,t.pendingProps,a);case 15:return Ls(n,t,t.type,t.pendingProps,a);case 19:return Is(n,t,a);case 31:return l=t.pendingProps,a=t.mode,l={mode:l.mode,children:l.children},n===null?(a=Oi(l,a),a.ref=t.ref,t.child=a,a.return=t,t=a):(a=Yt(n.child,l),a.ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return Vs(n,t,a);case 24:return Ya(t),l=Kn(kn),n===null?(e=Ku(),e===null&&(e=vn,i=Lu(),e.pooledCache=i,i.refCount++,i!==null&&(e.pooledCacheLanes|=a),e=i),t.memoizedState={parent:l,cache:e},Pu(t),la(t,kn,e)):((n.lanes&a)!==0&&($u(n,t),le(t,null,null,a),ae()),e=n.memoizedState,i=t.memoizedState,e.parent!==l?(e={parent:l,cache:l},t.memoizedState=e,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=e),la(t,kn,l)):(l=i.cache,la(t,kn,l),l!==e.cache&&wu(t,[kn],a,!0))),Gn(n,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function Kt(n){n.flags|=4}function tf(n,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!sd(t)){if(t=St.current,t!==null&&((an&4194048)===an?qt!==null:(an&62914560)!==an&&(an&536870912)===0||t!==qt))throw ne=Ju,Cc;n.flags|=8192}}function _i(n,t){t!==null&&(n.flags|=4),n.flags&16384&&(t=n.tag!==22?Ur():536870912,n.lanes|=t,Ol|=t)}function se(n,t){if(!un)switch(n.tailMode){case"hidden":t=n.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||n.tail===null?n.tail=null:n.tail.sibling=null:l.sibling=null}}function _n(n){var t=n.alternate!==null&&n.alternate.child===n.child,a=0,l=0;if(t)for(var e=n.child;e!==null;)a|=e.lanes|e.childLanes,l|=e.subtreeFlags&65011712,l|=e.flags&65011712,e.return=n,e=e.sibling;else for(e=n.child;e!==null;)a|=e.lanes|e.childLanes,l|=e.subtreeFlags,l|=e.flags,e.return=n,e=e.sibling;return n.subtreeFlags|=l,n.childLanes=a,t}function vh(n,t,a){var l=t.pendingProps;switch(Xu(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _n(t),null;case 1:return _n(t),null;case 3:return a=t.stateNode,l=null,n!==null&&(l=n.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Zt(kn),It(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(n===null||n.child===null)&&(Kl(t)?Kt(t):n===null||n.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Uc())),_n(t),null;case 26:return a=t.memoizedState,n===null?(Kt(t),a!==null?(_n(t),tf(t,a)):(_n(t),t.flags&=-16777217)):a?a!==n.memoizedState?(Kt(t),_n(t),tf(t,a)):(_n(t),t.flags&=-16777217):(n.memoizedProps!==l&&Kt(t),_n(t),t.flags&=-16777217),null;case 27:ke(t),a=P.current;var e=t.type;if(n!==null&&t.stateNode!=null)n.memoizedProps!==l&&Kt(t);else{if(!l){if(t.stateNode===null)throw Error(c(166));return _n(t),null}n=X.current,Kl(t)?qc(t):(n=ad(e,l,a),t.stateNode=n,Kt(t))}return _n(t),null;case 5:if(ke(t),a=t.type,n!==null&&t.stateNode!=null)n.memoizedProps!==l&&Kt(t);else{if(!l){if(t.stateNode===null)throw Error(c(166));return _n(t),null}if(n=X.current,Kl(t))qc(t);else{switch(e=ji(P.current),n){case 1:n=e.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:n=e.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":n=e.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":n=e.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":n=e.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof l.is=="string"?e.createElement("select",{is:l.is}):e.createElement("select"),l.multiple?n.multiple=!0:l.size&&(n.size=l.size);break;default:n=typeof l.is=="string"?e.createElement(a,{is:l.is}):e.createElement(a)}}n[Vn]=t,n[Wn]=l;n:for(e=t.child;e!==null;){if(e.tag===5||e.tag===6)n.appendChild(e.stateNode);else if(e.tag!==4&&e.tag!==27&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break n;for(;e.sibling===null;){if(e.return===null||e.return===t)break n;e=e.return}e.sibling.return=e.return,e=e.sibling}t.stateNode=n;n:switch(Zn(n,a,l),a){case"button":case"input":case"select":case"textarea":n=!!l.autoFocus;break n;case"img":n=!0;break n;default:n=!1}n&&Kt(t)}}return _n(t),t.flags&=-16777217,null;case 6:if(n&&t.stateNode!=null)n.memoizedProps!==l&&Kt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(c(166));if(n=P.current,Kl(t)){if(n=t.stateNode,a=t.memoizedProps,l=null,e=$n,e!==null)switch(e.tag){case 27:case 5:l=e.memoizedProps}n[Vn]=t,n=!!(n.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Pf(n.nodeValue,a)),n||Ba(t)}else n=ji(n).createTextNode(l),n[Vn]=t,t.stateNode=n}return _n(t),null;case 13:if(l=t.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(e=Kl(t),l!==null&&l.dehydrated!==null){if(n===null){if(!e)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e[Vn]=t}else Jl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;_n(t),e=!1}else e=Uc(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=e),e=!0;if(!e)return t.flags&256?(Lt(t),t):(Lt(t),null)}if(Lt(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=l!==null,n=n!==null&&n.memoizedState!==null,a){l=t.child,e=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(e=l.alternate.memoizedState.cachePool.pool);var i=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==e&&(l.flags|=2048)}return a!==n&&a&&(t.child.flags|=8192),_i(t,t.updateQueue),_n(t),null;case 4:return It(),n===null&&Io(t.stateNode.containerInfo),_n(t),null;case 10:return Zt(t.type),_n(t),null;case 19:if(H(Hn),e=t.memoizedState,e===null)return _n(t),null;if(l=(t.flags&128)!==0,i=e.rendering,i===null)if(l)se(e,!1);else{if(En!==0||n!==null&&(n.flags&128)!==0)for(n=t.child;n!==null;){if(i=gi(n),i!==null){for(t.flags|=128,se(e,!1),n=i.updateQueue,t.updateQueue=n,_i(t,n),t.subtreeFlags=0,n=a,a=t.child;a!==null;)Mc(a,n),a=a.sibling;return U(Hn,Hn.current&1|2),t.child}n=n.sibling}e.tail!==null&&Mt()>zi&&(t.flags|=128,l=!0,se(e,!1),t.lanes=4194304)}else{if(!l)if(n=gi(i),n!==null){if(t.flags|=128,l=!0,n=n.updateQueue,t.updateQueue=n,_i(t,n),se(e,!0),e.tail===null&&e.tailMode==="hidden"&&!i.alternate&&!un)return _n(t),null}else 2*Mt()-e.renderingStartTime>zi&&a!==536870912&&(t.flags|=128,l=!0,se(e,!1),t.lanes=4194304);e.isBackwards?(i.sibling=t.child,t.child=i):(n=e.last,n!==null?n.sibling=i:t.child=i,e.last=i)}return e.tail!==null?(t=e.tail,e.rendering=t,e.tail=t.sibling,e.renderingStartTime=Mt(),t.sibling=null,n=Hn.current,U(Hn,l?n&1|2:n&1),t):(_n(t),null);case 22:case 23:return Lt(t),no(),l=t.memoizedState!==null,n!==null?n.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(_n(t),t.subtreeFlags&6&&(t.flags|=8192)):_n(t),a=t.updateQueue,a!==null&&_i(t,a.retryQueue),a=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),n!==null&&H(Xa),null;case 24:return a=null,n!==null&&(a=n.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Zt(kn),_n(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function ph(n,t){switch(Xu(t),t.tag){case 1:return n=t.flags,n&65536?(t.flags=n&-65537|128,t):null;case 3:return Zt(kn),It(),n=t.flags,(n&65536)!==0&&(n&128)===0?(t.flags=n&-65537|128,t):null;case 26:case 27:case 5:return ke(t),null;case 13:if(Lt(t),n=t.memoizedState,n!==null&&n.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Jl()}return n=t.flags,n&65536?(t.flags=n&-65537|128,t):null;case 19:return H(Hn),null;case 4:return It(),null;case 10:return Zt(t.type),null;case 22:case 23:return Lt(t),no(),n!==null&&H(Xa),n=t.flags,n&65536?(t.flags=n&-65537|128,t):null;case 24:return Zt(kn),null;case 25:return null;default:return null}}function af(n,t){switch(Xu(t),t.tag){case 3:Zt(kn),It();break;case 26:case 27:case 5:ke(t);break;case 4:It();break;case 13:Lt(t);break;case 19:H(Hn);break;case 10:Zt(t.type);break;case 22:case 23:Lt(t),no(),n!==null&&H(Xa);break;case 24:Zt(kn)}}function fe(n,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var e=l.next;a=e;do{if((a.tag&n)===n){l=void 0;var i=a.create,u=a.inst;l=i(),u.destroy=l}a=a.next}while(a!==e)}}catch(r){mn(t,t.return,r)}}function sa(n,t,a){try{var l=t.updateQueue,e=l!==null?l.lastEffect:null;if(e!==null){var i=e.next;l=i;do{if((l.tag&n)===n){var u=l.inst,r=u.destroy;if(r!==void 0){u.destroy=void 0,e=t;var d=a,p=r;try{p()}catch(O){mn(e,d,O)}}}l=l.next}while(l!==i)}}catch(O){mn(t,t.return,O)}}function lf(n){var t=n.updateQueue;if(t!==null){var a=n.stateNode;try{wc(t,a)}catch(l){mn(n,n.return,l)}}}function ef(n,t,a){a.props=Qa(n.type,n.memoizedProps),a.state=n.memoizedState;try{a.componentWillUnmount()}catch(l){mn(n,t,l)}}function de(n,t){try{var a=n.ref;if(a!==null){switch(n.tag){case 26:case 27:case 5:var l=n.stateNode;break;case 30:l=n.stateNode;break;default:l=n.stateNode}typeof a=="function"?n.refCleanup=a(l):a.current=l}}catch(e){mn(n,t,e)}}function Rt(n,t){var a=n.ref,l=n.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(e){mn(n,t,e)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(e){mn(n,t,e)}else a.current=null}function uf(n){var t=n.type,a=n.memoizedProps,l=n.stateNode;try{n:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break n;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(e){mn(n,n.return,e)}}function Mo(n,t,a){try{var l=n.stateNode;Ch(l,n.type,a,t),l[Wn]=t}catch(e){mn(n,n.return,e)}}function of(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&ga(n.type)||n.tag===4}function No(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||of(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&ga(n.type)||n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function qo(n,t,a){var l=n.tag;if(l===5||l===6)n=n.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(n,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(n),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Hi));else if(l!==4&&(l===27&&ga(n.type)&&(a=n.stateNode,t=null),n=n.child,n!==null))for(qo(n,t,a),n=n.sibling;n!==null;)qo(n,t,a),n=n.sibling}function Ti(n,t,a){var l=n.tag;if(l===5||l===6)n=n.stateNode,t?a.insertBefore(n,t):a.appendChild(n);else if(l!==4&&(l===27&&ga(n.type)&&(a=n.stateNode),n=n.child,n!==null))for(Ti(n,t,a),n=n.sibling;n!==null;)Ti(n,t,a),n=n.sibling}function rf(n){var t=n.stateNode,a=n.memoizedProps;try{for(var l=n.type,e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Zn(t,l,a),t[Vn]=n,t[Wn]=a}catch(i){mn(n,n.return,i)}}var Jt=!1,Mn=!1,Ro=!1,cf=typeof WeakSet=="function"?WeakSet:Set,Yn=null;function gh(n,t){if(n=n.containerInfo,ar=Qi,n=yc(n),Mu(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else n:{a=(a=n.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var e=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break n}var u=0,r=-1,d=-1,p=0,O=0,z=n,g=null;t:for(;;){for(var y;z!==a||e!==0&&z.nodeType!==3||(r=u+e),z!==i||l!==0&&z.nodeType!==3||(d=u+l),z.nodeType===3&&(u+=z.nodeValue.length),(y=z.firstChild)!==null;)g=z,z=y;for(;;){if(z===n)break t;if(g===a&&++p===e&&(r=u),g===i&&++O===l&&(d=u),(y=z.nextSibling)!==null)break;z=g,g=z.parentNode}z=y}a=r===-1||d===-1?null:{start:r,end:d}}else a=null}a=a||{start:0,end:0}}else a=null;for(lr={focusedElem:n,selectionRange:a},Qi=!1,Yn=t;Yn!==null;)if(t=Yn,n=t.child,(t.subtreeFlags&1024)!==0&&n!==null)n.return=t,Yn=n;else for(;Yn!==null;){switch(t=Yn,i=t.alternate,n=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&i!==null){n=void 0,a=t,e=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var L=Qa(a.type,e,a.elementType===a.type);n=l.getSnapshotBeforeUpdate(L,i),l.__reactInternalSnapshotBeforeUpdate=n}catch(G){mn(a,a.return,G)}}break;case 3:if((n&1024)!==0){if(n=t.stateNode.containerInfo,a=n.nodeType,a===9)ur(n);else if(a===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":ur(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(c(163))}if(n=t.sibling,n!==null){n.return=t.return,Yn=n;break}Yn=t.return}}function sf(n,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:fa(n,a),l&4&&fe(5,a);break;case 1:if(fa(n,a),l&4)if(n=a.stateNode,t===null)try{n.componentDidMount()}catch(u){mn(a,a.return,u)}else{var e=Qa(a.type,t.memoizedProps);t=t.memoizedState;try{n.componentDidUpdate(e,t,n.__reactInternalSnapshotBeforeUpdate)}catch(u){mn(a,a.return,u)}}l&64&&lf(a),l&512&&de(a,a.return);break;case 3:if(fa(n,a),l&64&&(n=a.updateQueue,n!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{wc(n,t)}catch(u){mn(a,a.return,u)}}break;case 27:t===null&&l&4&&rf(a);case 26:case 5:fa(n,a),t===null&&l&4&&uf(a),l&512&&de(a,a.return);break;case 12:fa(n,a);break;case 13:fa(n,a),l&4&&hf(n,a),l&64&&(n=a.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(a=Eh.bind(null,a),Lh(n,a))));break;case 22:if(l=a.memoizedState!==null||Jt,!l){t=t!==null&&t.memoizedState!==null||Mn,e=Jt;var i=Mn;Jt=l,(Mn=t)&&!i?da(n,a,(a.subtreeFlags&8772)!==0):fa(n,a),Jt=e,Mn=i}break;case 30:break;default:fa(n,a)}}function ff(n){var t=n.alternate;t!==null&&(n.alternate=null,ff(t)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(t=n.stateNode,t!==null&&su(t)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var xn=null,nt=!1;function Pt(n,t,a){for(a=a.child;a!==null;)df(n,t,a),a=a.sibling}function df(n,t,a){if(it&&typeof it.onCommitFiberUnmount=="function")try{it.onCommitFiberUnmount(Ul,a)}catch{}switch(a.tag){case 26:Mn||Rt(a,t),Pt(n,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Mn||Rt(a,t);var l=xn,e=nt;ga(a.type)&&(xn=a.stateNode,nt=!1),Pt(n,t,a),Se(a.stateNode),xn=l,nt=e;break;case 5:Mn||Rt(a,t);case 6:if(l=xn,e=nt,xn=null,Pt(n,t,a),xn=l,nt=e,xn!==null)if(nt)try{(xn.nodeType===9?xn.body:xn.nodeName==="HTML"?xn.ownerDocument.body:xn).removeChild(a.stateNode)}catch(i){mn(a,t,i)}else try{xn.removeChild(a.stateNode)}catch(i){mn(a,t,i)}break;case 18:xn!==null&&(nt?(n=xn,nd(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,a.stateNode),Me(n)):nd(xn,a.stateNode));break;case 4:l=xn,e=nt,xn=a.stateNode.containerInfo,nt=!0,Pt(n,t,a),xn=l,nt=e;break;case 0:case 11:case 14:case 15:Mn||sa(2,a,t),Mn||sa(4,a,t),Pt(n,t,a);break;case 1:Mn||(Rt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&ef(a,t,l)),Pt(n,t,a);break;case 21:Pt(n,t,a);break;case 22:Mn=(l=Mn)||a.memoizedState!==null,Pt(n,t,a),Mn=l;break;default:Pt(n,t,a)}}function hf(n,t){if(t.memoizedState===null&&(n=t.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Me(n)}catch(a){mn(t,t.return,a)}}function yh(n){switch(n.tag){case 13:case 19:var t=n.stateNode;return t===null&&(t=n.stateNode=new cf),t;case 22:return n=n.stateNode,t=n._retryCache,t===null&&(t=n._retryCache=new cf),t;default:throw Error(c(435,n.tag))}}function Uo(n,t){var a=yh(n);t.forEach(function(l){var e=Dh.bind(null,n,l);a.has(l)||(a.add(l),l.then(e,e))})}function ct(n,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var e=a[l],i=n,u=t,r=u;n:for(;r!==null;){switch(r.tag){case 27:if(ga(r.type)){xn=r.stateNode,nt=!1;break n}break;case 5:xn=r.stateNode,nt=!1;break n;case 3:case 4:xn=r.stateNode.containerInfo,nt=!0;break n}r=r.return}if(xn===null)throw Error(c(160));df(i,u,e),xn=null,nt=!1,i=e.alternate,i!==null&&(i.return=null),e.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)bf(t,n),t=t.sibling}var At=null;function bf(n,t){var a=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:ct(t,n),st(n),l&4&&(sa(3,n,n.return),fe(3,n),sa(5,n,n.return));break;case 1:ct(t,n),st(n),l&512&&(Mn||a===null||Rt(a,a.return)),l&64&&Jt&&(n=n.updateQueue,n!==null&&(l=n.callbacks,l!==null&&(a=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var e=At;if(ct(t,n),st(n),l&512&&(Mn||a===null||Rt(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=n.memoizedState,a===null)if(l===null)if(n.stateNode===null){n:{l=n.type,a=n.memoizedProps,e=e.ownerDocument||e;t:switch(l){case"title":i=e.getElementsByTagName("title")[0],(!i||i[jl]||i[Vn]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=e.createElement(l),e.head.insertBefore(i,e.querySelector("head > title"))),Zn(i,l,a),i[Vn]=n,Bn(i),l=i;break n;case"link":var u=rd("link","href",e).get(l+(a.href||""));if(u){for(var r=0;r<u.length;r++)if(i=u[r],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(r,1);break t}}i=e.createElement(l),Zn(i,l,a),e.head.appendChild(i);break;case"meta":if(u=rd("meta","content",e).get(l+(a.content||""))){for(r=0;r<u.length;r++)if(i=u[r],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(r,1);break t}}i=e.createElement(l),Zn(i,l,a),e.head.appendChild(i);break;default:throw Error(c(468,l))}i[Vn]=n,Bn(i),l=i}n.stateNode=l}else cd(e,n.type,n.stateNode);else n.stateNode=od(e,l,n.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?cd(e,n.type,n.stateNode):od(e,l,n.memoizedProps)):l===null&&n.stateNode!==null&&Mo(n,n.memoizedProps,a.memoizedProps)}break;case 27:ct(t,n),st(n),l&512&&(Mn||a===null||Rt(a,a.return)),a!==null&&l&4&&Mo(n,n.memoizedProps,a.memoizedProps);break;case 5:if(ct(t,n),st(n),l&512&&(Mn||a===null||Rt(a,a.return)),n.flags&32){e=n.stateNode;try{nl(e,"")}catch(y){mn(n,n.return,y)}}l&4&&n.stateNode!=null&&(e=n.memoizedProps,Mo(n,e,a!==null?a.memoizedProps:e)),l&1024&&(Ro=!0);break;case 6:if(ct(t,n),st(n),l&4){if(n.stateNode===null)throw Error(c(162));l=n.memoizedProps,a=n.stateNode;try{a.nodeValue=l}catch(y){mn(n,n.return,y)}}break;case 3:if(Yi=null,e=At,At=Bi(t.containerInfo),ct(t,n),At=e,st(n),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Me(t.containerInfo)}catch(y){mn(n,n.return,y)}Ro&&(Ro=!1,mf(n));break;case 4:l=At,At=Bi(n.stateNode.containerInfo),ct(t,n),st(n),At=l;break;case 12:ct(t,n),st(n);break;case 13:ct(t,n),st(n),n.child.flags&8192&&n.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Yo=Mt()),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,Uo(n,l)));break;case 22:e=n.memoizedState!==null;var d=a!==null&&a.memoizedState!==null,p=Jt,O=Mn;if(Jt=p||e,Mn=O||d,ct(t,n),Mn=O,Jt=p,st(n),l&8192)n:for(t=n.stateNode,t._visibility=e?t._visibility&-2:t._visibility|1,e&&(a===null||d||Jt||Mn||Za(n)),a=null,t=n;;){if(t.tag===5||t.tag===26){if(a===null){d=a=t;try{if(i=d.stateNode,e)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{r=d.stateNode;var z=d.memoizedProps.style,g=z!=null&&z.hasOwnProperty("display")?z.display:null;r.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(y){mn(d,d.return,y)}}}else if(t.tag===6){if(a===null){d=t;try{d.stateNode.nodeValue=e?"":d.memoizedProps}catch(y){mn(d,d.return,y)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===n)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break n;for(;t.sibling===null;){if(t.return===null||t.return===n)break n;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=n.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Uo(n,a))));break;case 19:ct(t,n),st(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,Uo(n,l)));break;case 30:break;case 21:break;default:ct(t,n),st(n)}}function st(n){var t=n.flags;if(t&2){try{for(var a,l=n.return;l!==null;){if(of(l)){a=l;break}l=l.return}if(a==null)throw Error(c(160));switch(a.tag){case 27:var e=a.stateNode,i=No(n);Ti(n,i,e);break;case 5:var u=a.stateNode;a.flags&32&&(nl(u,""),a.flags&=-33);var r=No(n);Ti(n,r,u);break;case 3:case 4:var d=a.stateNode.containerInfo,p=No(n);qo(n,p,d);break;default:throw Error(c(161))}}catch(O){mn(n,n.return,O)}n.flags&=-3}t&4096&&(n.flags&=-4097)}function mf(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var t=n;mf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),n=n.sibling}}function fa(n,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sf(n,t.alternate,t),t=t.sibling}function Za(n){for(n=n.child;n!==null;){var t=n;switch(t.tag){case 0:case 11:case 14:case 15:sa(4,t,t.return),Za(t);break;case 1:Rt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&ef(t,t.return,a),Za(t);break;case 27:Se(t.stateNode);case 26:case 5:Rt(t,t.return),Za(t);break;case 22:t.memoizedState===null&&Za(t);break;case 30:Za(t);break;default:Za(t)}n=n.sibling}}function da(n,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,e=n,i=t,u=i.flags;switch(i.tag){case 0:case 11:case 15:da(e,i,a),fe(4,i);break;case 1:if(da(e,i,a),l=i,e=l.stateNode,typeof e.componentDidMount=="function")try{e.componentDidMount()}catch(p){mn(l,l.return,p)}if(l=i,e=l.updateQueue,e!==null){var r=l.stateNode;try{var d=e.shared.hiddenCallbacks;if(d!==null)for(e.shared.hiddenCallbacks=null,e=0;e<d.length;e++)Zc(d[e],r)}catch(p){mn(l,l.return,p)}}a&&u&64&&lf(i),de(i,i.return);break;case 27:rf(i);case 26:case 5:da(e,i,a),a&&l===null&&u&4&&uf(i),de(i,i.return);break;case 12:da(e,i,a);break;case 13:da(e,i,a),a&&u&4&&hf(e,i);break;case 22:i.memoizedState===null&&da(e,i,a),de(i,i.return);break;case 30:break;default:da(e,i,a)}t=t.sibling}}function ko(n,t){var a=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(n!=null&&n.refCount++,a!=null&&Wl(a))}function Ho(n,t){n=null,t.alternate!==null&&(n=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==n&&(t.refCount++,n!=null&&Wl(n))}function Ut(n,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)vf(n,t,a,l),t=t.sibling}function vf(n,t,a,l){var e=t.flags;switch(t.tag){case 0:case 11:case 15:Ut(n,t,a,l),e&2048&&fe(9,t);break;case 1:Ut(n,t,a,l);break;case 3:Ut(n,t,a,l),e&2048&&(n=null,t.alternate!==null&&(n=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==n&&(t.refCount++,n!=null&&Wl(n)));break;case 12:if(e&2048){Ut(n,t,a,l),n=t.stateNode;try{var i=t.memoizedProps,u=i.id,r=i.onPostCommit;typeof r=="function"&&r(u,t.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(d){mn(t,t.return,d)}}else Ut(n,t,a,l);break;case 13:Ut(n,t,a,l);break;case 23:break;case 22:i=t.stateNode,u=t.alternate,t.memoizedState!==null?i._visibility&2?Ut(n,t,a,l):he(n,t):i._visibility&2?Ut(n,t,a,l):(i._visibility|=2,yl(n,t,a,l,(t.subtreeFlags&10256)!==0)),e&2048&&ko(u,t);break;case 24:Ut(n,t,a,l),e&2048&&Ho(t.alternate,t);break;default:Ut(n,t,a,l)}}function yl(n,t,a,l,e){for(e=e&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var i=n,u=t,r=a,d=l,p=u.flags;switch(u.tag){case 0:case 11:case 15:yl(i,u,r,d,e),fe(8,u);break;case 23:break;case 22:var O=u.stateNode;u.memoizedState!==null?O._visibility&2?yl(i,u,r,d,e):he(i,u):(O._visibility|=2,yl(i,u,r,d,e)),e&&p&2048&&ko(u.alternate,u);break;case 24:yl(i,u,r,d,e),e&&p&2048&&Ho(u.alternate,u);break;default:yl(i,u,r,d,e)}t=t.sibling}}function he(n,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=n,l=t,e=l.flags;switch(l.tag){case 22:he(a,l),e&2048&&ko(l.alternate,l);break;case 24:he(a,l),e&2048&&Ho(l.alternate,l);break;default:he(a,l)}t=t.sibling}}var be=8192;function xl(n){if(n.subtreeFlags&be)for(n=n.child;n!==null;)pf(n),n=n.sibling}function pf(n){switch(n.tag){case 26:xl(n),n.flags&be&&n.memoizedState!==null&&eb(At,n.memoizedState,n.memoizedProps);break;case 5:xl(n);break;case 3:case 4:var t=At;At=Bi(n.stateNode.containerInfo),xl(n),At=t;break;case 22:n.memoizedState===null&&(t=n.alternate,t!==null&&t.memoizedState!==null?(t=be,be=16777216,xl(n),be=t):xl(n));break;default:xl(n)}}function gf(n){var t=n.alternate;if(t!==null&&(n=t.child,n!==null)){t.child=null;do t=n.sibling,n.sibling=null,n=t;while(n!==null)}}function me(n){var t=n.deletions;if((n.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Yn=l,xf(l,n)}gf(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)yf(n),n=n.sibling}function yf(n){switch(n.tag){case 0:case 11:case 15:me(n),n.flags&2048&&sa(9,n,n.return);break;case 3:me(n);break;case 12:me(n);break;case 22:var t=n.stateNode;n.memoizedState!==null&&t._visibility&2&&(n.return===null||n.return.tag!==13)?(t._visibility&=-3,Ai(n)):me(n);break;default:me(n)}}function Ai(n){var t=n.deletions;if((n.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Yn=l,xf(l,n)}gf(n)}for(n=n.child;n!==null;){switch(t=n,t.tag){case 0:case 11:case 15:sa(8,t,t.return),Ai(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Ai(t));break;default:Ai(t)}n=n.sibling}}function xf(n,t){for(;Yn!==null;){var a=Yn;switch(a.tag){case 0:case 11:case 15:sa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Wl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Yn=l;else n:for(a=n;Yn!==null;){l=Yn;var e=l.sibling,i=l.return;if(ff(l),l===a){Yn=null;break n}if(e!==null){e.return=i,Yn=e;break n}Yn=i}}}var xh={getCacheForType:function(n){var t=Kn(kn),a=t.data.get(n);return a===void 0&&(a=n(),t.data.set(n,a)),a}},Sh=typeof WeakMap=="function"?WeakMap:Map,rn=0,vn=null,nn=null,an=0,cn=0,ft=null,ha=!1,Sl=!1,jo=!1,$t=0,En=0,ba=0,wa=0,Bo=0,Ot=0,Ol=0,ve=null,tt=null,Co=!1,Yo=0,zi=1/0,Ei=null,ma=null,Qn=0,va=null,_l=null,Tl=0,Xo=0,Go=null,Sf=null,pe=0,Qo=null;function dt(){if((rn&2)!==0&&an!==0)return an&-an;if(_.T!==null){var n=fl;return n!==0?n:Po()}return jr()}function Of(){Ot===0&&(Ot=(an&536870912)===0||un?Rr():536870912);var n=St.current;return n!==null&&(n.flags|=32),Ot}function ht(n,t,a){(n===vn&&(cn===2||cn===9)||n.cancelPendingCommit!==null)&&(Al(n,0),pa(n,an,Ot,!1)),Hl(n,a),((rn&2)===0||n!==vn)&&(n===vn&&((rn&2)===0&&(wa|=a),En===4&&pa(n,an,Ot,!1)),kt(n))}function _f(n,t,a){if((rn&6)!==0)throw Error(c(327));var l=!a&&(t&124)===0&&(t&n.expiredLanes)===0||kl(n,t),e=l?Th(n,t):Lo(n,t,!0),i=l;do{if(e===0){Sl&&!l&&pa(n,t,0,!1);break}else{if(a=n.current.alternate,i&&!Oh(a)){e=Lo(n,t,!1),i=!1;continue}if(e===2){if(i=t,n.errorRecoveryDisabledLanes&i)var u=0;else u=n.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;n:{var r=n;e=ve;var d=r.current.memoizedState.isDehydrated;if(d&&(Al(r,u).flags|=256),u=Lo(r,u,!1),u!==2){if(jo&&!d){r.errorRecoveryDisabledLanes|=i,wa|=i,e=4;break n}i=tt,tt=e,i!==null&&(tt===null?tt=i:tt.push.apply(tt,i))}e=u}if(i=!1,e!==2)continue}}if(e===1){Al(n,0),pa(n,t,0,!0);break}n:{switch(l=n,i=e,i){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:pa(l,t,Ot,!ha);break n;case 2:tt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(e=Yo+300-Mt(),10<e)){if(pa(l,t,Ot,!ha),Ce(l,0,!0)!==0)break n;l.timeoutHandle=Ff(Tf.bind(null,l,a,tt,Ei,Co,t,Ot,wa,Ol,ha,i,2,-0,0),e);break n}Tf(l,a,tt,Ei,Co,t,Ot,wa,Ol,ha,i,0,-0,0)}}break}while(!0);kt(n)}function Tf(n,t,a,l,e,i,u,r,d,p,O,z,g,y){if(n.timeoutHandle=-1,z=t.subtreeFlags,(z&8192||(z&16785408)===16785408)&&(Te={stylesheets:null,count:0,unsuspend:lb},pf(t),z=ib(),z!==null)){n.cancelPendingCommit=z(qf.bind(null,n,t,i,a,l,e,u,r,d,O,1,g,y)),pa(n,i,u,!p);return}qf(n,t,i,a,l,e,u,r,d)}function Oh(n){for(var t=n;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var e=a[l],i=e.getSnapshot;e=e.value;try{if(!ot(i(),e))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pa(n,t,a,l){t&=~Bo,t&=~wa,n.suspendedLanes|=t,n.pingedLanes&=~t,l&&(n.warmLanes|=t),l=n.expirationTimes;for(var e=t;0<e;){var i=31-ut(e),u=1<<i;l[i]=-1,e&=~u}a!==0&&kr(n,a,t)}function Di(){return(rn&6)===0?(ge(0),!1):!0}function Zo(){if(nn!==null){if(cn===0)var n=nn.return;else n=nn,Qt=Ca=null,io(n),pl=null,re=0,n=nn;for(;n!==null;)af(n.alternate,n),n=n.return;nn=null}}function Al(n,t){var a=n.timeoutHandle;a!==-1&&(n.timeoutHandle=-1,Xh(a)),a=n.cancelPendingCommit,a!==null&&(n.cancelPendingCommit=null,a()),Zo(),vn=n,nn=a=Yt(n.current,null),an=t,cn=0,ft=null,ha=!1,Sl=kl(n,t),jo=!1,Ol=Ot=Bo=wa=ba=En=0,tt=ve=null,Co=!1,(t&8)!==0&&(t|=t&32);var l=n.entangledLanes;if(l!==0)for(n=n.entanglements,l&=t;0<l;){var e=31-ut(l),i=1<<e;t|=n[e],l&=~i}return $t=t,$e(),a}function Af(n,t){F=null,_.H=mi,t===Il||t===ii?(t=Gc(),cn=3):t===Cc?(t=Gc(),cn=4):cn=t===Qs?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ft=t,nn===null&&(En=1,xi(n,pt(t,n.current)))}function zf(){var n=_.H;return _.H=mi,n===null?mi:n}function Ef(){var n=_.A;return _.A=xh,n}function wo(){En=4,ha||(an&4194048)!==an&&St.current!==null||(Sl=!0),(ba&134217727)===0&&(wa&134217727)===0||vn===null||pa(vn,an,Ot,!1)}function Lo(n,t,a){var l=rn;rn|=2;var e=zf(),i=Ef();(vn!==n||an!==t)&&(Ei=null,Al(n,t)),t=!1;var u=En;n:do try{if(cn!==0&&nn!==null){var r=nn,d=ft;switch(cn){case 8:Zo(),u=6;break n;case 3:case 2:case 9:case 6:St.current===null&&(t=!0);var p=cn;if(cn=0,ft=null,zl(n,r,d,p),a&&Sl){u=0;break n}break;default:p=cn,cn=0,ft=null,zl(n,r,d,p)}}_h(),u=En;break}catch(O){Af(n,O)}while(!0);return t&&n.shellSuspendCounter++,Qt=Ca=null,rn=l,_.H=e,_.A=i,nn===null&&(vn=null,an=0,$e()),u}function _h(){for(;nn!==null;)Df(nn)}function Th(n,t){var a=rn;rn|=2;var l=zf(),e=Ef();vn!==n||an!==t?(Ei=null,zi=Mt()+500,Al(n,t)):Sl=kl(n,t);n:do try{if(cn!==0&&nn!==null){t=nn;var i=ft;t:switch(cn){case 1:cn=0,ft=null,zl(n,t,i,1);break;case 2:case 9:if(Yc(i)){cn=0,ft=null,Mf(t);break}t=function(){cn!==2&&cn!==9||vn!==n||(cn=7),kt(n)},i.then(t,t);break n;case 3:cn=7;break n;case 4:cn=5;break n;case 7:Yc(i)?(cn=0,ft=null,Mf(t)):(cn=0,ft=null,zl(n,t,i,7));break;case 5:var u=null;switch(nn.tag){case 26:u=nn.memoizedState;case 5:case 27:var r=nn;if(!u||sd(u)){cn=0,ft=null;var d=r.sibling;if(d!==null)nn=d;else{var p=r.return;p!==null?(nn=p,Mi(p)):nn=null}break t}}cn=0,ft=null,zl(n,t,i,5);break;case 6:cn=0,ft=null,zl(n,t,i,6);break;case 8:Zo(),En=6;break n;default:throw Error(c(462))}}Ah();break}catch(O){Af(n,O)}while(!0);return Qt=Ca=null,_.H=l,_.A=e,rn=a,nn!==null?0:(vn=null,an=0,$e(),En)}function Ah(){for(;nn!==null&&!Kd();)Df(nn)}function Df(n){var t=nf(n.alternate,n,$t);n.memoizedProps=n.pendingProps,t===null?Mi(n):nn=t}function Mf(n){var t=n,a=t.alternate;switch(t.tag){case 15:case 0:t=Js(a,t,t.pendingProps,t.type,void 0,an);break;case 11:t=Js(a,t,t.pendingProps,t.type.render,t.ref,an);break;case 5:io(t);default:af(a,t),t=nn=Mc(t,$t),t=nf(a,t,$t)}n.memoizedProps=n.pendingProps,t===null?Mi(n):nn=t}function zl(n,t,a,l){Qt=Ca=null,io(t),pl=null,re=0;var e=t.return;try{if(bh(n,e,t,a,an)){En=1,xi(n,pt(a,n.current)),nn=null;return}}catch(i){if(e!==null)throw nn=e,i;En=1,xi(n,pt(a,n.current)),nn=null;return}t.flags&32768?(un||l===1?n=!0:Sl||(an&536870912)!==0?n=!1:(ha=n=!0,(l===2||l===9||l===3||l===6)&&(l=St.current,l!==null&&l.tag===13&&(l.flags|=16384))),Nf(t,n)):Mi(t)}function Mi(n){var t=n;do{if((t.flags&32768)!==0){Nf(t,ha);return}n=t.return;var a=vh(t.alternate,t,$t);if(a!==null){nn=a;return}if(t=t.sibling,t!==null){nn=t;return}nn=t=n}while(t!==null);En===0&&(En=5)}function Nf(n,t){do{var a=ph(n.alternate,n);if(a!==null){a.flags&=32767,nn=a;return}if(a=n.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(n=n.sibling,n!==null)){nn=n;return}nn=n=a}while(n!==null);En=6,nn=null}function qf(n,t,a,l,e,i,u,r,d){n.cancelPendingCommit=null;do Ni();while(Qn!==0);if((rn&6)!==0)throw Error(c(327));if(t!==null){if(t===n.current)throw Error(c(177));if(i=t.lanes|t.childLanes,i|=ku,l0(n,a,i,u,r,d),n===vn&&(nn=vn=null,an=0),_l=t,va=n,Tl=a,Xo=i,Go=e,Sf=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,Mh(He,function(){return jf(),null})):(n.callbackNode=null,n.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=_.T,_.T=null,e=k.p,k.p=2,u=rn,rn|=4;try{gh(n,t,a)}finally{rn=u,k.p=e,_.T=l}}Qn=1,Rf(),Uf(),kf()}}function Rf(){if(Qn===1){Qn=0;var n=va,t=_l,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=_.T,_.T=null;var l=k.p;k.p=2;var e=rn;rn|=4;try{bf(t,n);var i=lr,u=yc(n.containerInfo),r=i.focusedElem,d=i.selectionRange;if(u!==r&&r&&r.ownerDocument&&gc(r.ownerDocument.documentElement,r)){if(d!==null&&Mu(r)){var p=d.start,O=d.end;if(O===void 0&&(O=p),"selectionStart"in r)r.selectionStart=p,r.selectionEnd=Math.min(O,r.value.length);else{var z=r.ownerDocument||document,g=z&&z.defaultView||window;if(g.getSelection){var y=g.getSelection(),L=r.textContent.length,G=Math.min(d.start,L),dn=d.end===void 0?G:Math.min(d.end,L);!y.extend&&G>dn&&(u=dn,dn=G,G=u);var m=pc(r,G),b=pc(r,dn);if(m&&b&&(y.rangeCount!==1||y.anchorNode!==m.node||y.anchorOffset!==m.offset||y.focusNode!==b.node||y.focusOffset!==b.offset)){var v=z.createRange();v.setStart(m.node,m.offset),y.removeAllRanges(),G>dn?(y.addRange(v),y.extend(b.node,b.offset)):(v.setEnd(b.node,b.offset),y.addRange(v))}}}}for(z=[],y=r;y=y.parentNode;)y.nodeType===1&&z.push({element:y,left:y.scrollLeft,top:y.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<z.length;r++){var T=z[r];T.element.scrollLeft=T.left,T.element.scrollTop=T.top}}Qi=!!ar,lr=ar=null}finally{rn=e,k.p=l,_.T=a}}n.current=t,Qn=2}}function Uf(){if(Qn===2){Qn=0;var n=va,t=_l,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=_.T,_.T=null;var l=k.p;k.p=2;var e=rn;rn|=4;try{sf(n,t.alternate,t)}finally{rn=e,k.p=l,_.T=a}}Qn=3}}function kf(){if(Qn===4||Qn===3){Qn=0,Jd();var n=va,t=_l,a=Tl,l=Sf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Qn=5:(Qn=0,_l=va=null,Hf(n,n.pendingLanes));var e=n.pendingLanes;if(e===0&&(ma=null),ru(a),t=t.stateNode,it&&typeof it.onCommitFiberRoot=="function")try{it.onCommitFiberRoot(Ul,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=_.T,e=k.p,k.p=2,_.T=null;try{for(var i=n.onRecoverableError,u=0;u<l.length;u++){var r=l[u];i(r.value,{componentStack:r.stack})}}finally{_.T=t,k.p=e}}(Tl&3)!==0&&Ni(),kt(n),e=n.pendingLanes,(a&4194090)!==0&&(e&42)!==0?n===Qo?pe++:(pe=0,Qo=n):pe=0,ge(0)}}function Hf(n,t){(n.pooledCacheLanes&=t)===0&&(t=n.pooledCache,t!=null&&(n.pooledCache=null,Wl(t)))}function Ni(n){return Rf(),Uf(),kf(),jf()}function jf(){if(Qn!==5)return!1;var n=va,t=Xo;Xo=0;var a=ru(Tl),l=_.T,e=k.p;try{k.p=32>a?32:a,_.T=null,a=Go,Go=null;var i=va,u=Tl;if(Qn=0,_l=va=null,Tl=0,(rn&6)!==0)throw Error(c(331));var r=rn;if(rn|=4,yf(i.current),vf(i,i.current,u,a),rn=r,ge(0,!1),it&&typeof it.onPostCommitFiberRoot=="function")try{it.onPostCommitFiberRoot(Ul,i)}catch{}return!0}finally{k.p=e,_.T=l,Hf(n,t)}}function Bf(n,t,a){t=pt(a,t),t=xo(n.stateNode,t,2),n=ua(n,t,2),n!==null&&(Hl(n,2),kt(n))}function mn(n,t,a){if(n.tag===3)Bf(n,n,a);else for(;t!==null;){if(t.tag===3){Bf(t,n,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ma===null||!ma.has(l))){n=pt(a,n),a=Xs(2),l=ua(t,a,2),l!==null&&(Gs(a,l,t,n),Hl(l,2),kt(l));break}}t=t.return}}function Vo(n,t,a){var l=n.pingCache;if(l===null){l=n.pingCache=new Sh;var e=new Set;l.set(t,e)}else e=l.get(t),e===void 0&&(e=new Set,l.set(t,e));e.has(a)||(jo=!0,e.add(a),n=zh.bind(null,n,t,a),t.then(n,n))}function zh(n,t,a){var l=n.pingCache;l!==null&&l.delete(t),n.pingedLanes|=n.suspendedLanes&a,n.warmLanes&=~a,vn===n&&(an&a)===a&&(En===4||En===3&&(an&62914560)===an&&300>Mt()-Yo?(rn&2)===0&&Al(n,0):Bo|=a,Ol===an&&(Ol=0)),kt(n)}function Cf(n,t){t===0&&(t=Ur()),n=ol(n,t),n!==null&&(Hl(n,t),kt(n))}function Eh(n){var t=n.memoizedState,a=0;t!==null&&(a=t.retryLane),Cf(n,a)}function Dh(n,t){var a=0;switch(n.tag){case 13:var l=n.stateNode,e=n.memoizedState;e!==null&&(a=e.retryLane);break;case 19:l=n.stateNode;break;case 22:l=n.stateNode._retryCache;break;default:throw Error(c(314))}l!==null&&l.delete(t),Cf(n,a)}function Mh(n,t){return eu(n,t)}var qi=null,El=null,Ko=!1,Ri=!1,Jo=!1,La=0;function kt(n){n!==El&&n.next===null&&(El===null?qi=El=n:El=El.next=n),Ri=!0,Ko||(Ko=!0,qh())}function ge(n,t){if(!Jo&&Ri){Jo=!0;do for(var a=!1,l=qi;l!==null;){if(n!==0){var e=l.pendingLanes;if(e===0)var i=0;else{var u=l.suspendedLanes,r=l.pingedLanes;i=(1<<31-ut(42|n)+1)-1,i&=e&~(u&~r),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,Qf(l,i))}else i=an,i=Ce(l,l===vn?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||kl(l,i)||(a=!0,Qf(l,i));l=l.next}while(a);Jo=!1}}function Nh(){Yf()}function Yf(){Ri=Ko=!1;var n=0;La!==0&&(Yh()&&(n=La),La=0);for(var t=Mt(),a=null,l=qi;l!==null;){var e=l.next,i=Xf(l,t);i===0?(l.next=null,a===null?qi=e:a.next=e,e===null&&(El=a)):(a=l,(n!==0||(i&3)!==0)&&(Ri=!0)),l=e}ge(n)}function Xf(n,t){for(var a=n.suspendedLanes,l=n.pingedLanes,e=n.expirationTimes,i=n.pendingLanes&-62914561;0<i;){var u=31-ut(i),r=1<<u,d=e[u];d===-1?((r&a)===0||(r&l)!==0)&&(e[u]=a0(r,t)):d<=t&&(n.expiredLanes|=r),i&=~r}if(t=vn,a=an,a=Ce(n,n===t?a:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l=n.callbackNode,a===0||n===t&&(cn===2||cn===9)||n.cancelPendingCommit!==null)return l!==null&&l!==null&&iu(l),n.callbackNode=null,n.callbackPriority=0;if((a&3)===0||kl(n,a)){if(t=a&-a,t===n.callbackPriority)return t;switch(l!==null&&iu(l),ru(a)){case 2:case 8:a=Nr;break;case 32:a=He;break;case 268435456:a=qr;break;default:a=He}return l=Gf.bind(null,n),a=eu(a,l),n.callbackPriority=t,n.callbackNode=a,t}return l!==null&&l!==null&&iu(l),n.callbackPriority=2,n.callbackNode=null,2}function Gf(n,t){if(Qn!==0&&Qn!==5)return n.callbackNode=null,n.callbackPriority=0,null;var a=n.callbackNode;if(Ni()&&n.callbackNode!==a)return null;var l=an;return l=Ce(n,n===vn?l:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l===0?null:(_f(n,l,t),Xf(n,Mt()),n.callbackNode!=null&&n.callbackNode===a?Gf.bind(null,n):null)}function Qf(n,t){if(Ni())return null;_f(n,t,!0)}function qh(){Gh(function(){(rn&6)!==0?eu(Mr,Nh):Yf()})}function Po(){return La===0&&(La=Rr()),La}function Zf(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Ze(""+n)}function wf(n,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,n.id&&a.setAttribute("form",n.id),t.parentNode.insertBefore(a,t),n=new FormData(n),a.parentNode.removeChild(a),n}function Rh(n,t,a,l,e){if(t==="submit"&&a&&a.stateNode===e){var i=Zf((e[Wn]||null).action),u=l.submitter;u&&(t=(t=u[Wn]||null)?Zf(t.formAction):u.getAttribute("formAction"),t!==null&&(i=t,u=null));var r=new Ke("action","action",null,l,e);n.push({event:r,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(La!==0){var d=u?wf(e,u):new FormData(e);mo(a,{pending:!0,data:d,method:e.method,action:i},null,d)}}else typeof i=="function"&&(r.preventDefault(),d=u?wf(e,u):new FormData(e),mo(a,{pending:!0,data:d,method:e.method,action:i},i,d))},currentTarget:e}]})}}for(var $o=0;$o<Uu.length;$o++){var Wo=Uu[$o],Uh=Wo.toLowerCase(),kh=Wo[0].toUpperCase()+Wo.slice(1);Tt(Uh,"on"+kh)}Tt(Oc,"onAnimationEnd"),Tt(_c,"onAnimationIteration"),Tt(Tc,"onAnimationStart"),Tt("dblclick","onDoubleClick"),Tt("focusin","onFocus"),Tt("focusout","onBlur"),Tt(W0,"onTransitionRun"),Tt(F0,"onTransitionStart"),Tt(I0,"onTransitionCancel"),Tt(Ac,"onTransitionEnd"),Wa("onMouseEnter",["mouseout","mouseover"]),Wa("onMouseLeave",["mouseout","mouseover"]),Wa("onPointerEnter",["pointerout","pointerover"]),Wa("onPointerLeave",["pointerout","pointerover"]),Ma("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ma("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ma("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ma("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ma("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ma("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ye="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ye));function Lf(n,t){t=(t&4)!==0;for(var a=0;a<n.length;a++){var l=n[a],e=l.event;l=l.listeners;n:{var i=void 0;if(t)for(var u=l.length-1;0<=u;u--){var r=l[u],d=r.instance,p=r.currentTarget;if(r=r.listener,d!==i&&e.isPropagationStopped())break n;i=r,e.currentTarget=p;try{i(e)}catch(O){yi(O)}e.currentTarget=null,i=d}else for(u=0;u<l.length;u++){if(r=l[u],d=r.instance,p=r.currentTarget,r=r.listener,d!==i&&e.isPropagationStopped())break n;i=r,e.currentTarget=p;try{i(e)}catch(O){yi(O)}e.currentTarget=null,i=d}}}}function tn(n,t){var a=t[cu];a===void 0&&(a=t[cu]=new Set);var l=n+"__bubble";a.has(l)||(Vf(t,n,2,!1),a.add(l))}function Fo(n,t,a){var l=0;t&&(l|=4),Vf(a,n,l,t)}var Ui="_reactListening"+Math.random().toString(36).slice(2);function Io(n){if(!n[Ui]){n[Ui]=!0,Cr.forEach(function(a){a!=="selectionchange"&&(Hh.has(a)||Fo(a,!1,n),Fo(a,!0,n))});var t=n.nodeType===9?n:n.ownerDocument;t===null||t[Ui]||(t[Ui]=!0,Fo("selectionchange",!1,t))}}function Vf(n,t,a,l){switch(vd(t)){case 2:var e=rb;break;case 8:e=cb;break;default:e=hr}a=e.bind(null,t,a,n),e=void 0,!xu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(e=!0),l?e!==void 0?n.addEventListener(t,a,{capture:!0,passive:e}):n.addEventListener(t,a,!0):e!==void 0?n.addEventListener(t,a,{passive:e}):n.addEventListener(t,a,!1)}function nr(n,t,a,l,e){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)n:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var r=l.stateNode.containerInfo;if(r===e)break;if(u===4)for(u=l.return;u!==null;){var d=u.tag;if((d===3||d===4)&&u.stateNode.containerInfo===e)return;u=u.return}for(;r!==null;){if(u=Ja(r),u===null)return;if(d=u.tag,d===5||d===6||d===26||d===27){l=i=u;continue n}r=r.parentNode}}l=l.return}Fr(function(){var p=i,O=gu(a),z=[];n:{var g=zc.get(n);if(g!==void 0){var y=Ke,L=n;switch(n){case"keypress":if(Le(a)===0)break n;case"keydown":case"keyup":y=M0;break;case"focusin":L="focus",y=Tu;break;case"focusout":L="blur",y=Tu;break;case"beforeblur":case"afterblur":y=Tu;break;case"click":if(a.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=tc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=p0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=R0;break;case Oc:case _c:case Tc:y=x0;break;case Ac:y=k0;break;case"scroll":case"scrollend":y=m0;break;case"wheel":y=j0;break;case"copy":case"cut":case"paste":y=O0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=lc;break;case"toggle":case"beforetoggle":y=C0}var G=(t&4)!==0,dn=!G&&(n==="scroll"||n==="scrollend"),m=G?g!==null?g+"Capture":null:g;G=[];for(var b=p,v;b!==null;){var T=b;if(v=T.stateNode,T=T.tag,T!==5&&T!==26&&T!==27||v===null||m===null||(T=Cl(b,m),T!=null&&G.push(xe(b,T,v))),dn)break;b=b.return}0<G.length&&(g=new y(g,L,null,a,O),z.push({event:g,listeners:G}))}}if((t&7)===0){n:{if(g=n==="mouseover"||n==="pointerover",y=n==="mouseout"||n==="pointerout",g&&a!==pu&&(L=a.relatedTarget||a.fromElement)&&(Ja(L)||L[Ka]))break n;if((y||g)&&(g=O.window===O?O:(g=O.ownerDocument)?g.defaultView||g.parentWindow:window,y?(L=a.relatedTarget||a.toElement,y=p,L=L?Ja(L):null,L!==null&&(dn=A(L),G=L.tag,L!==dn||G!==5&&G!==27&&G!==6)&&(L=null)):(y=null,L=p),y!==L)){if(G=tc,T="onMouseLeave",m="onMouseEnter",b="mouse",(n==="pointerout"||n==="pointerover")&&(G=lc,T="onPointerLeave",m="onPointerEnter",b="pointer"),dn=y==null?g:Bl(y),v=L==null?g:Bl(L),g=new G(T,b+"leave",y,a,O),g.target=dn,g.relatedTarget=v,T=null,Ja(O)===p&&(G=new G(m,b+"enter",L,a,O),G.target=v,G.relatedTarget=dn,T=G),dn=T,y&&L)t:{for(G=y,m=L,b=0,v=G;v;v=Dl(v))b++;for(v=0,T=m;T;T=Dl(T))v++;for(;0<b-v;)G=Dl(G),b--;for(;0<v-b;)m=Dl(m),v--;for(;b--;){if(G===m||m!==null&&G===m.alternate)break t;G=Dl(G),m=Dl(m)}G=null}else G=null;y!==null&&Kf(z,g,y,G,!1),L!==null&&dn!==null&&Kf(z,dn,L,G,!0)}}n:{if(g=p?Bl(p):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var j=fc;else if(cc(g))if(dc)j=J0;else{j=V0;var I=L0}else y=g.nodeName,!y||y.toLowerCase()!=="input"||g.type!=="checkbox"&&g.type!=="radio"?p&&vu(p.elementType)&&(j=fc):j=K0;if(j&&(j=j(n,p))){sc(z,j,a,O);break n}I&&I(n,g,p),n==="focusout"&&p&&g.type==="number"&&p.memoizedProps.value!=null&&mu(g,"number",g.value)}switch(I=p?Bl(p):window,n){case"focusin":(cc(I)||I.contentEditable==="true")&&(el=I,Nu=p,Vl=null);break;case"focusout":Vl=Nu=el=null;break;case"mousedown":qu=!0;break;case"contextmenu":case"mouseup":case"dragend":qu=!1,xc(z,a,O);break;case"selectionchange":if($0)break;case"keydown":case"keyup":xc(z,a,O)}var B;if(zu)n:{switch(n){case"compositionstart":var Q="onCompositionStart";break n;case"compositionend":Q="onCompositionEnd";break n;case"compositionupdate":Q="onCompositionUpdate";break n}Q=void 0}else ll?oc(n,a)&&(Q="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Q="onCompositionStart");Q&&(ec&&a.locale!=="ko"&&(ll||Q!=="onCompositionStart"?Q==="onCompositionEnd"&&ll&&(B=Ir()):(aa=O,Su="value"in aa?aa.value:aa.textContent,ll=!0)),I=ki(p,Q),0<I.length&&(Q=new ac(Q,n,null,a,O),z.push({event:Q,listeners:I}),B?Q.data=B:(B=rc(a),B!==null&&(Q.data=B)))),(B=X0?G0(n,a):Q0(n,a))&&(Q=ki(p,"onBeforeInput"),0<Q.length&&(I=new ac("onBeforeInput","beforeinput",null,a,O),z.push({event:I,listeners:Q}),I.data=B)),Rh(z,n,p,a,O)}Lf(z,t)})}function xe(n,t,a){return{instance:n,listener:t,currentTarget:a}}function ki(n,t){for(var a=t+"Capture",l=[];n!==null;){var e=n,i=e.stateNode;if(e=e.tag,e!==5&&e!==26&&e!==27||i===null||(e=Cl(n,a),e!=null&&l.unshift(xe(n,e,i)),e=Cl(n,t),e!=null&&l.push(xe(n,e,i))),n.tag===3)return l;n=n.return}return[]}function Dl(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function Kf(n,t,a,l,e){for(var i=t._reactName,u=[];a!==null&&a!==l;){var r=a,d=r.alternate,p=r.stateNode;if(r=r.tag,d!==null&&d===l)break;r!==5&&r!==26&&r!==27||p===null||(d=p,e?(p=Cl(a,i),p!=null&&u.unshift(xe(a,p,d))):e||(p=Cl(a,i),p!=null&&u.push(xe(a,p,d)))),a=a.return}u.length!==0&&n.push({event:t,listeners:u})}var jh=/\r\n?/g,Bh=/\u0000|\uFFFD/g;function Jf(n){return(typeof n=="string"?n:""+n).replace(jh,`
`).replace(Bh,"")}function Pf(n,t){return t=Jf(t),Jf(n)===t}function Hi(){}function fn(n,t,a,l,e,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||nl(n,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&nl(n,""+l);break;case"className":Xe(n,"class",l);break;case"tabIndex":Xe(n,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Xe(n,a,l);break;case"style":$r(n,l,i);break;case"data":if(t!=="object"){Xe(n,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){n.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(a);break}l=Ze(""+l),n.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){n.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&fn(n,t,"name",e.name,e,null),fn(n,t,"formEncType",e.formEncType,e,null),fn(n,t,"formMethod",e.formMethod,e,null),fn(n,t,"formTarget",e.formTarget,e,null)):(fn(n,t,"encType",e.encType,e,null),fn(n,t,"method",e.method,e,null),fn(n,t,"target",e.target,e,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(a);break}l=Ze(""+l),n.setAttribute(a,l);break;case"onClick":l!=null&&(n.onclick=Hi);break;case"onScroll":l!=null&&tn("scroll",n);break;case"onScrollEnd":l!=null&&tn("scrollend",n);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(a=l.__html,a!=null){if(e.children!=null)throw Error(c(60));n.innerHTML=a}}break;case"multiple":n.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":n.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){n.removeAttribute("xlink:href");break}a=Ze(""+l),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,""+l):n.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,""):n.removeAttribute(a);break;case"capture":case"download":l===!0?n.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,l):n.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?n.setAttribute(a,l):n.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?n.removeAttribute(a):n.setAttribute(a,l);break;case"popover":tn("beforetoggle",n),tn("toggle",n),Ye(n,"popover",l);break;case"xlinkActuate":Bt(n,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Bt(n,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Bt(n,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Bt(n,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Bt(n,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Bt(n,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Bt(n,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Bt(n,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Bt(n,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ye(n,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=h0.get(a)||a,Ye(n,a,l))}}function tr(n,t,a,l,e,i){switch(a){case"style":$r(n,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(a=l.__html,a!=null){if(e.children!=null)throw Error(c(60));n.innerHTML=a}}break;case"children":typeof l=="string"?nl(n,l):(typeof l=="number"||typeof l=="bigint")&&nl(n,""+l);break;case"onScroll":l!=null&&tn("scroll",n);break;case"onScrollEnd":l!=null&&tn("scrollend",n);break;case"onClick":l!=null&&(n.onclick=Hi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Yr.hasOwnProperty(a))n:{if(a[0]==="o"&&a[1]==="n"&&(e=a.endsWith("Capture"),t=a.slice(2,e?a.length-7:void 0),i=n[Wn]||null,i=i!=null?i[a]:null,typeof i=="function"&&n.removeEventListener(t,i,e),typeof l=="function")){typeof i!="function"&&i!==null&&(a in n?n[a]=null:n.hasAttribute(a)&&n.removeAttribute(a)),n.addEventListener(t,l,e);break n}a in n?n[a]=l:l===!0?n.setAttribute(a,""):Ye(n,a,l)}}}function Zn(n,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":tn("error",n),tn("load",n);var l=!1,e=!1,i;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];if(u!=null)switch(i){case"src":l=!0;break;case"srcSet":e=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:fn(n,t,i,u,a,null)}}e&&fn(n,t,"srcSet",a.srcSet,a,null),l&&fn(n,t,"src",a.src,a,null);return;case"input":tn("invalid",n);var r=i=u=e=null,d=null,p=null;for(l in a)if(a.hasOwnProperty(l)){var O=a[l];if(O!=null)switch(l){case"name":e=O;break;case"type":u=O;break;case"checked":d=O;break;case"defaultChecked":p=O;break;case"value":i=O;break;case"defaultValue":r=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(c(137,t));break;default:fn(n,t,l,O,a,null)}}Vr(n,i,r,d,p,u,e,!1),Ge(n);return;case"select":tn("invalid",n),l=u=i=null;for(e in a)if(a.hasOwnProperty(e)&&(r=a[e],r!=null))switch(e){case"value":i=r;break;case"defaultValue":u=r;break;case"multiple":l=r;default:fn(n,t,e,r,a,null)}t=i,a=u,n.multiple=!!l,t!=null?Ia(n,!!l,t,!1):a!=null&&Ia(n,!!l,a,!0);return;case"textarea":tn("invalid",n),i=e=l=null;for(u in a)if(a.hasOwnProperty(u)&&(r=a[u],r!=null))switch(u){case"value":l=r;break;case"defaultValue":e=r;break;case"children":i=r;break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(c(91));break;default:fn(n,t,u,r,a,null)}Jr(n,l,e,i),Ge(n);return;case"option":for(d in a)if(a.hasOwnProperty(d)&&(l=a[d],l!=null))switch(d){case"selected":n.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:fn(n,t,d,l,a,null)}return;case"dialog":tn("beforetoggle",n),tn("toggle",n),tn("cancel",n),tn("close",n);break;case"iframe":case"object":tn("load",n);break;case"video":case"audio":for(l=0;l<ye.length;l++)tn(ye[l],n);break;case"image":tn("error",n),tn("load",n);break;case"details":tn("toggle",n);break;case"embed":case"source":case"link":tn("error",n),tn("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(p in a)if(a.hasOwnProperty(p)&&(l=a[p],l!=null))switch(p){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:fn(n,t,p,l,a,null)}return;default:if(vu(t)){for(O in a)a.hasOwnProperty(O)&&(l=a[O],l!==void 0&&tr(n,t,O,l,a,void 0));return}}for(r in a)a.hasOwnProperty(r)&&(l=a[r],l!=null&&fn(n,t,r,l,a,null))}function Ch(n,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var e=null,i=null,u=null,r=null,d=null,p=null,O=null;for(y in a){var z=a[y];if(a.hasOwnProperty(y)&&z!=null)switch(y){case"checked":break;case"value":break;case"defaultValue":d=z;default:l.hasOwnProperty(y)||fn(n,t,y,null,l,z)}}for(var g in l){var y=l[g];if(z=a[g],l.hasOwnProperty(g)&&(y!=null||z!=null))switch(g){case"type":i=y;break;case"name":e=y;break;case"checked":p=y;break;case"defaultChecked":O=y;break;case"value":u=y;break;case"defaultValue":r=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(c(137,t));break;default:y!==z&&fn(n,t,g,y,l,z)}}bu(n,u,r,d,p,O,i,e);return;case"select":y=u=r=g=null;for(i in a)if(d=a[i],a.hasOwnProperty(i)&&d!=null)switch(i){case"value":break;case"multiple":y=d;default:l.hasOwnProperty(i)||fn(n,t,i,null,l,d)}for(e in l)if(i=l[e],d=a[e],l.hasOwnProperty(e)&&(i!=null||d!=null))switch(e){case"value":g=i;break;case"defaultValue":r=i;break;case"multiple":u=i;default:i!==d&&fn(n,t,e,i,l,d)}t=r,a=u,l=y,g!=null?Ia(n,!!a,g,!1):!!l!=!!a&&(t!=null?Ia(n,!!a,t,!0):Ia(n,!!a,a?[]:"",!1));return;case"textarea":y=g=null;for(r in a)if(e=a[r],a.hasOwnProperty(r)&&e!=null&&!l.hasOwnProperty(r))switch(r){case"value":break;case"children":break;default:fn(n,t,r,null,l,e)}for(u in l)if(e=l[u],i=a[u],l.hasOwnProperty(u)&&(e!=null||i!=null))switch(u){case"value":g=e;break;case"defaultValue":y=e;break;case"children":break;case"dangerouslySetInnerHTML":if(e!=null)throw Error(c(91));break;default:e!==i&&fn(n,t,u,e,l,i)}Kr(n,g,y);return;case"option":for(var L in a)if(g=a[L],a.hasOwnProperty(L)&&g!=null&&!l.hasOwnProperty(L))switch(L){case"selected":n.selected=!1;break;default:fn(n,t,L,null,l,g)}for(d in l)if(g=l[d],y=a[d],l.hasOwnProperty(d)&&g!==y&&(g!=null||y!=null))switch(d){case"selected":n.selected=g&&typeof g!="function"&&typeof g!="symbol";break;default:fn(n,t,d,g,l,y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var G in a)g=a[G],a.hasOwnProperty(G)&&g!=null&&!l.hasOwnProperty(G)&&fn(n,t,G,null,l,g);for(p in l)if(g=l[p],y=a[p],l.hasOwnProperty(p)&&g!==y&&(g!=null||y!=null))switch(p){case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(c(137,t));break;default:fn(n,t,p,g,l,y)}return;default:if(vu(t)){for(var dn in a)g=a[dn],a.hasOwnProperty(dn)&&g!==void 0&&!l.hasOwnProperty(dn)&&tr(n,t,dn,void 0,l,g);for(O in l)g=l[O],y=a[O],!l.hasOwnProperty(O)||g===y||g===void 0&&y===void 0||tr(n,t,O,g,l,y);return}}for(var m in a)g=a[m],a.hasOwnProperty(m)&&g!=null&&!l.hasOwnProperty(m)&&fn(n,t,m,null,l,g);for(z in l)g=l[z],y=a[z],!l.hasOwnProperty(z)||g===y||g==null&&y==null||fn(n,t,z,g,l,y)}var ar=null,lr=null;function ji(n){return n.nodeType===9?n:n.ownerDocument}function $f(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Wf(n,t){if(n===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&t==="foreignObject"?0:n}function er(n,t){return n==="textarea"||n==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ir=null;function Yh(){var n=window.event;return n&&n.type==="popstate"?n===ir?!1:(ir=n,!0):(ir=null,!1)}var Ff=typeof setTimeout=="function"?setTimeout:void 0,Xh=typeof clearTimeout=="function"?clearTimeout:void 0,If=typeof Promise=="function"?Promise:void 0,Gh=typeof queueMicrotask=="function"?queueMicrotask:typeof If<"u"?function(n){return If.resolve(null).then(n).catch(Qh)}:Ff;function Qh(n){setTimeout(function(){throw n})}function ga(n){return n==="head"}function nd(n,t){var a=t,l=0,e=0;do{var i=a.nextSibling;if(n.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(0<l&&8>l){a=l;var u=n.ownerDocument;if(a&1&&Se(u.documentElement),a&2&&Se(u.body),a&4)for(a=u.head,Se(a),u=a.firstChild;u;){var r=u.nextSibling,d=u.nodeName;u[jl]||d==="SCRIPT"||d==="STYLE"||d==="LINK"&&u.rel.toLowerCase()==="stylesheet"||a.removeChild(u),u=r}}if(e===0){n.removeChild(i),Me(t);return}e--}else a==="$"||a==="$?"||a==="$!"?e++:l=a.charCodeAt(0)-48;else l=0;a=i}while(a);Me(t)}function ur(n){var t=n.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ur(a),su(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}n.removeChild(a)}}function Zh(n,t,a,l){for(;n.nodeType===1;){var e=a;if(n.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(l){if(!n[jl])switch(t){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(i=n.getAttribute("rel"),i==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(i!==e.rel||n.getAttribute("href")!==(e.href==null||e.href===""?null:e.href)||n.getAttribute("crossorigin")!==(e.crossOrigin==null?null:e.crossOrigin)||n.getAttribute("title")!==(e.title==null?null:e.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(i=n.getAttribute("src"),(i!==(e.src==null?null:e.src)||n.getAttribute("type")!==(e.type==null?null:e.type)||n.getAttribute("crossorigin")!==(e.crossOrigin==null?null:e.crossOrigin))&&i&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(t==="input"&&n.type==="hidden"){var i=e.name==null?null:""+e.name;if(e.type==="hidden"&&n.getAttribute("name")===i)return n}else return n;if(n=zt(n.nextSibling),n===null)break}return null}function wh(n,t,a){if(t==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!a||(n=zt(n.nextSibling),n===null))return null;return n}function or(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function Lh(n,t){var a=n.ownerDocument;if(n.data!=="$?"||a.readyState==="complete")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),n._reactRetry=l}}function zt(n){for(;n!=null;n=n.nextSibling){var t=n.nodeType;if(t===1||t===3)break;if(t===8){if(t=n.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return n}var rr=null;function td(n){n=n.previousSibling;for(var t=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return n;t--}else a==="/$"&&t++}n=n.previousSibling}return null}function ad(n,t,a){switch(t=ji(a),n){case"html":if(n=t.documentElement,!n)throw Error(c(452));return n;case"head":if(n=t.head,!n)throw Error(c(453));return n;case"body":if(n=t.body,!n)throw Error(c(454));return n;default:throw Error(c(451))}}function Se(n){for(var t=n.attributes;t.length;)n.removeAttributeNode(t[0]);su(n)}var _t=new Map,ld=new Set;function Bi(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var Wt=k.d;k.d={f:Vh,r:Kh,D:Jh,C:Ph,L:$h,m:Wh,X:Ih,S:Fh,M:nb};function Vh(){var n=Wt.f(),t=Di();return n||t}function Kh(n){var t=Pa(n);t!==null&&t.tag===5&&t.type==="form"?Os(t):Wt.r(n)}var Ml=typeof document>"u"?null:document;function ed(n,t,a){var l=Ml;if(l&&typeof t=="string"&&t){var e=vt(t);e='link[rel="'+n+'"][href="'+e+'"]',typeof a=="string"&&(e+='[crossorigin="'+a+'"]'),ld.has(e)||(ld.add(e),n={rel:n,crossOrigin:a,href:t},l.querySelector(e)===null&&(t=l.createElement("link"),Zn(t,"link",n),Bn(t),l.head.appendChild(t)))}}function Jh(n){Wt.D(n),ed("dns-prefetch",n,null)}function Ph(n,t){Wt.C(n,t),ed("preconnect",n,t)}function $h(n,t,a){Wt.L(n,t,a);var l=Ml;if(l&&n&&t){var e='link[rel="preload"][as="'+vt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(e+='[imagesrcset="'+vt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(e+='[imagesizes="'+vt(a.imageSizes)+'"]')):e+='[href="'+vt(n)+'"]';var i=e;switch(t){case"style":i=Nl(n);break;case"script":i=ql(n)}_t.has(i)||(n=R({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:n,as:t},a),_t.set(i,n),l.querySelector(e)!==null||t==="style"&&l.querySelector(Oe(i))||t==="script"&&l.querySelector(_e(i))||(t=l.createElement("link"),Zn(t,"link",n),Bn(t),l.head.appendChild(t)))}}function Wh(n,t){Wt.m(n,t);var a=Ml;if(a&&n){var l=t&&typeof t.as=="string"?t.as:"script",e='link[rel="modulepreload"][as="'+vt(l)+'"][href="'+vt(n)+'"]',i=e;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=ql(n)}if(!_t.has(i)&&(n=R({rel:"modulepreload",href:n},t),_t.set(i,n),a.querySelector(e)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(_e(i)))return}l=a.createElement("link"),Zn(l,"link",n),Bn(l),a.head.appendChild(l)}}}function Fh(n,t,a){Wt.S(n,t,a);var l=Ml;if(l&&n){var e=$a(l).hoistableStyles,i=Nl(n);t=t||"default";var u=e.get(i);if(!u){var r={loading:0,preload:null};if(u=l.querySelector(Oe(i)))r.loading=5;else{n=R({rel:"stylesheet",href:n,"data-precedence":t},a),(a=_t.get(i))&&cr(n,a);var d=u=l.createElement("link");Bn(d),Zn(d,"link",n),d._p=new Promise(function(p,O){d.onload=p,d.onerror=O}),d.addEventListener("load",function(){r.loading|=1}),d.addEventListener("error",function(){r.loading|=2}),r.loading|=4,Ci(u,t,l)}u={type:"stylesheet",instance:u,count:1,state:r},e.set(i,u)}}}function Ih(n,t){Wt.X(n,t);var a=Ml;if(a&&n){var l=$a(a).hoistableScripts,e=ql(n),i=l.get(e);i||(i=a.querySelector(_e(e)),i||(n=R({src:n,async:!0},t),(t=_t.get(e))&&sr(n,t),i=a.createElement("script"),Bn(i),Zn(i,"link",n),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(e,i))}}function nb(n,t){Wt.M(n,t);var a=Ml;if(a&&n){var l=$a(a).hoistableScripts,e=ql(n),i=l.get(e);i||(i=a.querySelector(_e(e)),i||(n=R({src:n,async:!0,type:"module"},t),(t=_t.get(e))&&sr(n,t),i=a.createElement("script"),Bn(i),Zn(i,"link",n),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(e,i))}}function id(n,t,a,l){var e=(e=P.current)?Bi(e):null;if(!e)throw Error(c(446));switch(n){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Nl(a.href),a=$a(e).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){n=Nl(a.href);var i=$a(e).hoistableStyles,u=i.get(n);if(u||(e=e.ownerDocument||e,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(n,u),(i=e.querySelector(Oe(n)))&&!i._p&&(u.instance=i,u.state.loading=5),_t.has(n)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},_t.set(n,a),i||tb(e,n,a,u.state))),t&&l===null)throw Error(c(528,""));return u}if(t&&l!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ql(a),a=$a(e).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,n))}}function Nl(n){return'href="'+vt(n)+'"'}function Oe(n){return'link[rel="stylesheet"]['+n+"]"}function ud(n){return R({},n,{"data-precedence":n.precedence,precedence:null})}function tb(n,t,a,l){n.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=n.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Zn(t,"link",a),Bn(t),n.head.appendChild(t))}function ql(n){return'[src="'+vt(n)+'"]'}function _e(n){return"script[async]"+n}function od(n,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=n.querySelector('style[data-href~="'+vt(a.href)+'"]');if(l)return t.instance=l,Bn(l),l;var e=R({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(n.ownerDocument||n).createElement("style"),Bn(l),Zn(l,"style",e),Ci(l,a.precedence,n),t.instance=l;case"stylesheet":e=Nl(a.href);var i=n.querySelector(Oe(e));if(i)return t.state.loading|=4,t.instance=i,Bn(i),i;l=ud(a),(e=_t.get(e))&&cr(l,e),i=(n.ownerDocument||n).createElement("link"),Bn(i);var u=i;return u._p=new Promise(function(r,d){u.onload=r,u.onerror=d}),Zn(i,"link",l),t.state.loading|=4,Ci(i,a.precedence,n),t.instance=i;case"script":return i=ql(a.src),(e=n.querySelector(_e(i)))?(t.instance=e,Bn(e),e):(l=a,(e=_t.get(i))&&(l=R({},a),sr(l,e)),n=n.ownerDocument||n,e=n.createElement("script"),Bn(e),Zn(e,"link",l),n.head.appendChild(e),t.instance=e);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Ci(l,a.precedence,n));return t.instance}function Ci(n,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),e=l.length?l[l.length-1]:null,i=e,u=0;u<l.length;u++){var r=l[u];if(r.dataset.precedence===t)i=r;else if(i!==e)break}i?i.parentNode.insertBefore(n,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(n,t.firstChild))}function cr(n,t){n.crossOrigin==null&&(n.crossOrigin=t.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=t.referrerPolicy),n.title==null&&(n.title=t.title)}function sr(n,t){n.crossOrigin==null&&(n.crossOrigin=t.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=t.referrerPolicy),n.integrity==null&&(n.integrity=t.integrity)}var Yi=null;function rd(n,t,a){if(Yi===null){var l=new Map,e=Yi=new Map;e.set(a,l)}else e=Yi,l=e.get(a),l||(l=new Map,e.set(a,l));if(l.has(n))return l;for(l.set(n,null),a=a.getElementsByTagName(n),e=0;e<a.length;e++){var i=a[e];if(!(i[jl]||i[Vn]||n==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(t)||"";u=n+u;var r=l.get(u);r?r.push(i):l.set(u,[i])}}return l}function cd(n,t,a){n=n.ownerDocument||n,n.head.insertBefore(a,t==="title"?n.querySelector("head > title"):null)}function ab(n,t,a){if(a===1||t.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return n=t.disabled,typeof t.precedence=="string"&&n==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function sd(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var Te=null;function lb(){}function eb(n,t,a){if(Te===null)throw Error(c(475));var l=Te;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var e=Nl(a.href),i=n.querySelector(Oe(e));if(i){n=i._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(l.count++,l=Xi.bind(l),n.then(l,l)),t.state.loading|=4,t.instance=i,Bn(i);return}i=n.ownerDocument||n,a=ud(a),(e=_t.get(e))&&cr(a,e),i=i.createElement("link"),Bn(i);var u=i;u._p=new Promise(function(r,d){u.onload=r,u.onerror=d}),Zn(i,"link",a),t.instance=i}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(t,n),(n=t.state.preload)&&(t.state.loading&3)===0&&(l.count++,t=Xi.bind(l),n.addEventListener("load",t),n.addEventListener("error",t))}}function ib(){if(Te===null)throw Error(c(475));var n=Te;return n.stylesheets&&n.count===0&&fr(n,n.stylesheets),0<n.count?function(t){var a=setTimeout(function(){if(n.stylesheets&&fr(n,n.stylesheets),n.unsuspend){var l=n.unsuspend;n.unsuspend=null,l()}},6e4);return n.unsuspend=t,function(){n.unsuspend=null,clearTimeout(a)}}:null}function Xi(){if(this.count--,this.count===0){if(this.stylesheets)fr(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Gi=null;function fr(n,t){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Gi=new Map,t.forEach(ub,n),Gi=null,Xi.call(n))}function ub(n,t){if(!(t.state.loading&4)){var a=Gi.get(n);if(a)var l=a.get(null);else{a=new Map,Gi.set(n,a);for(var e=n.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<e.length;i++){var u=e[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(a.set(u.dataset.precedence,u),l=u)}l&&a.set(null,l)}e=t.instance,u=e.getAttribute("data-precedence"),i=a.get(u)||l,i===l&&a.set(null,e),a.set(u,e),this.count++,l=Xi.bind(this),e.addEventListener("load",l),e.addEventListener("error",l),i?i.parentNode.insertBefore(e,i.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(e,n.firstChild)),t.state.loading|=4}}var Ae={$$typeof:on,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function ob(n,t,a,l,e,i,u,r){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=uu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=uu(0),this.hiddenUpdates=uu(null),this.identifierPrefix=l,this.onUncaughtError=e,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.incompleteTransitions=new Map}function fd(n,t,a,l,e,i,u,r,d,p,O,z){return n=new ob(n,t,a,u,r,d,p,z),t=1,i===!0&&(t|=24),i=rt(3,null,null,t),n.current=i,i.stateNode=n,t=Lu(),t.refCount++,n.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},Pu(i),n}function dd(n){return n?(n=rl,n):rl}function hd(n,t,a,l,e,i){e=dd(e),l.context===null?l.context=e:l.pendingContext=e,l=ia(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=ua(n,l,t),a!==null&&(ht(a,n,t),te(a,n,t))}function bd(n,t){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<t?a:t}}function dr(n,t){bd(n,t),(n=n.alternate)&&bd(n,t)}function md(n){if(n.tag===13){var t=ol(n,67108864);t!==null&&ht(t,n,67108864),dr(n,67108864)}}var Qi=!0;function rb(n,t,a,l){var e=_.T;_.T=null;var i=k.p;try{k.p=2,hr(n,t,a,l)}finally{k.p=i,_.T=e}}function cb(n,t,a,l){var e=_.T;_.T=null;var i=k.p;try{k.p=8,hr(n,t,a,l)}finally{k.p=i,_.T=e}}function hr(n,t,a,l){if(Qi){var e=br(l);if(e===null)nr(n,t,l,Zi,a),pd(n,l);else if(fb(e,n,t,a,l))l.stopPropagation();else if(pd(n,l),t&4&&-1<sb.indexOf(n)){for(;e!==null;){var i=Pa(e);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=Da(i.pendingLanes);if(u!==0){var r=i;for(r.pendingLanes|=2,r.entangledLanes|=2;u;){var d=1<<31-ut(u);r.entanglements[1]|=d,u&=~d}kt(i),(rn&6)===0&&(zi=Mt()+500,ge(0))}}break;case 13:r=ol(i,2),r!==null&&ht(r,i,2),Di(),dr(i,2)}if(i=br(l),i===null&&nr(n,t,l,Zi,a),i===e)break;e=i}e!==null&&l.stopPropagation()}else nr(n,t,l,null,a)}}function br(n){return n=gu(n),mr(n)}var Zi=null;function mr(n){if(Zi=null,n=Ja(n),n!==null){var t=A(n);if(t===null)n=null;else{var a=t.tag;if(a===13){if(n=N(t),n!==null)return n;n=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;n=null}else t!==n&&(n=null)}}return Zi=n,null}function vd(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Pd()){case Mr:return 2;case Nr:return 8;case He:case $d:return 32;case qr:return 268435456;default:return 32}default:return 32}}var vr=!1,ya=null,xa=null,Sa=null,ze=new Map,Ee=new Map,Oa=[],sb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function pd(n,t){switch(n){case"focusin":case"focusout":ya=null;break;case"dragenter":case"dragleave":xa=null;break;case"mouseover":case"mouseout":Sa=null;break;case"pointerover":case"pointerout":ze.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ee.delete(t.pointerId)}}function De(n,t,a,l,e,i){return n===null||n.nativeEvent!==i?(n={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[e]},t!==null&&(t=Pa(t),t!==null&&md(t)),n):(n.eventSystemFlags|=l,t=n.targetContainers,e!==null&&t.indexOf(e)===-1&&t.push(e),n)}function fb(n,t,a,l,e){switch(t){case"focusin":return ya=De(ya,n,t,a,l,e),!0;case"dragenter":return xa=De(xa,n,t,a,l,e),!0;case"mouseover":return Sa=De(Sa,n,t,a,l,e),!0;case"pointerover":var i=e.pointerId;return ze.set(i,De(ze.get(i)||null,n,t,a,l,e)),!0;case"gotpointercapture":return i=e.pointerId,Ee.set(i,De(Ee.get(i)||null,n,t,a,l,e)),!0}return!1}function gd(n){var t=Ja(n.target);if(t!==null){var a=A(t);if(a!==null){if(t=a.tag,t===13){if(t=N(a),t!==null){n.blockedOn=t,e0(n.priority,function(){if(a.tag===13){var l=dt();l=ou(l);var e=ol(a,l);e!==null&&ht(e,a,l),dr(a,l)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function wi(n){if(n.blockedOn!==null)return!1;for(var t=n.targetContainers;0<t.length;){var a=br(n.nativeEvent);if(a===null){a=n.nativeEvent;var l=new a.constructor(a.type,a);pu=l,a.target.dispatchEvent(l),pu=null}else return t=Pa(a),t!==null&&md(t),n.blockedOn=a,!1;t.shift()}return!0}function yd(n,t,a){wi(n)&&a.delete(t)}function db(){vr=!1,ya!==null&&wi(ya)&&(ya=null),xa!==null&&wi(xa)&&(xa=null),Sa!==null&&wi(Sa)&&(Sa=null),ze.forEach(yd),Ee.forEach(yd)}function Li(n,t){n.blockedOn===t&&(n.blockedOn=null,vr||(vr=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,db)))}var Vi=null;function xd(n){Vi!==n&&(Vi=n,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Vi===n&&(Vi=null);for(var t=0;t<n.length;t+=3){var a=n[t],l=n[t+1],e=n[t+2];if(typeof l!="function"){if(mr(l||a)===null)continue;break}var i=Pa(a);i!==null&&(n.splice(t,3),t-=3,mo(i,{pending:!0,data:e,method:a.method,action:l},l,e))}}))}function Me(n){function t(d){return Li(d,n)}ya!==null&&Li(ya,n),xa!==null&&Li(xa,n),Sa!==null&&Li(Sa,n),ze.forEach(t),Ee.forEach(t);for(var a=0;a<Oa.length;a++){var l=Oa[a];l.blockedOn===n&&(l.blockedOn=null)}for(;0<Oa.length&&(a=Oa[0],a.blockedOn===null);)gd(a),a.blockedOn===null&&Oa.shift();if(a=(n.ownerDocument||n).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var e=a[l],i=a[l+1],u=e[Wn]||null;if(typeof i=="function")u||xd(a);else if(u){var r=null;if(i&&i.hasAttribute("formAction")){if(e=i,u=i[Wn]||null)r=u.formAction;else if(mr(e)!==null)continue}else r=u.action;typeof r=="function"?a[l+1]=r:(a.splice(l,3),l-=3),xd(a)}}}function pr(n){this._internalRoot=n}Ki.prototype.render=pr.prototype.render=function(n){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,l=dt();hd(a,l,n,t,null,null)},Ki.prototype.unmount=pr.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var t=n.containerInfo;hd(n.current,2,null,n,null,null),Di(),t[Ka]=null}};function Ki(n){this._internalRoot=n}Ki.prototype.unstable_scheduleHydration=function(n){if(n){var t=jr();n={blockedOn:null,target:n,priority:t};for(var a=0;a<Oa.length&&t!==0&&t<Oa[a].priority;a++);Oa.splice(a,0,n),a===0&&gd(n)}};var Sd=s.version;if(Sd!=="19.1.0")throw Error(c(527,Sd,"19.1.0"));k.findDOMNode=function(n){var t=n._reactInternals;if(t===void 0)throw typeof n.render=="function"?Error(c(188)):(n=Object.keys(n).join(","),Error(c(268,n)));return n=D(t),n=n!==null?x(n):null,n=n===null?null:n.stateNode,n};var hb={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:_,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ji=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ji.isDisabled&&Ji.supportsFiber)try{Ul=Ji.inject(hb),it=Ji}catch{}}return qe.createRoot=function(n,t){if(!S(n))throw Error(c(299));var a=!1,l="",e=js,i=Bs,u=Cs,r=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(e=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(r=t.unstable_transitionCallbacks)),t=fd(n,1,!1,null,null,a,l,e,i,u,r,null),n[Ka]=t.current,Io(n),new pr(t)},qe.hydrateRoot=function(n,t,a){if(!S(n))throw Error(c(299));var l=!1,e="",i=js,u=Bs,r=Cs,d=null,p=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(e=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(r=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(d=a.unstable_transitionCallbacks),a.formState!==void 0&&(p=a.formState)),t=fd(n,1,!0,t,a??null,l,e,i,u,r,d,p),t.context=dd(null),a=t.current,l=dt(),l=ou(l),e=ia(l),e.callback=null,ua(a,e,l),a=l,t.current.lanes=a,Hl(t,a),kt(t),n[Ka]=t.current,Io(n),new Ki(t)},qe.version="19.1.0",qe}var qd;function Tb(){if(qd)return xr.exports;qd=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(s){console.error(s)}}return o(),xr.exports=_b(),xr.exports}var Ab=Tb(),Gd={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Rd=Pn.createContext&&Pn.createContext(Gd),zb=["attr","size","title"];function Eb(o,s){if(o==null)return{};var f=Db(o,s),c,S;if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(o);for(S=0;S<A.length;S++)c=A[S],!(s.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(o,c)&&(f[c]=o[c])}return f}function Db(o,s){if(o==null)return{};var f={};for(var c in o)if(Object.prototype.hasOwnProperty.call(o,c)){if(s.indexOf(c)>=0)continue;f[c]=o[c]}return f}function Fi(){return Fi=Object.assign?Object.assign.bind():function(o){for(var s=1;s<arguments.length;s++){var f=arguments[s];for(var c in f)Object.prototype.hasOwnProperty.call(f,c)&&(o[c]=f[c])}return o},Fi.apply(this,arguments)}function Ud(o,s){var f=Object.keys(o);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(o);s&&(c=c.filter(function(S){return Object.getOwnPropertyDescriptor(o,S).enumerable})),f.push.apply(f,c)}return f}function Ii(o){for(var s=1;s<arguments.length;s++){var f=arguments[s]!=null?arguments[s]:{};s%2?Ud(Object(f),!0).forEach(function(c){Mb(o,c,f[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(f)):Ud(Object(f)).forEach(function(c){Object.defineProperty(o,c,Object.getOwnPropertyDescriptor(f,c))})}return o}function Mb(o,s,f){return s=Nb(s),s in o?Object.defineProperty(o,s,{value:f,enumerable:!0,configurable:!0,writable:!0}):o[s]=f,o}function Nb(o){var s=qb(o,"string");return typeof s=="symbol"?s:s+""}function qb(o,s){if(typeof o!="object"||!o)return o;var f=o[Symbol.toPrimitive];if(f!==void 0){var c=f.call(o,s);if(typeof c!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(o)}function Qd(o){return o&&o.map((s,f)=>Pn.createElement(s.tag,Ii({key:f},s.attr),Qd(s.child)))}function Zd(o){return s=>Pn.createElement(Rb,Fi({attr:Ii({},o.attr)},s),Qd(o.child))}function Rb(o){var s=f=>{var{attr:c,size:S,title:A}=o,N=Eb(o,zb),V=S||f.size||"1em",D;return f.className&&(D=f.className),o.className&&(D=(D?D+" ":"")+o.className),Pn.createElement("svg",Fi({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},f.attr,c,N,{className:D,style:Ii(Ii({color:o.color||f.color},f.style),o.style),height:V,width:V,xmlns:"http://www.w3.org/2000/svg"}),A&&Pn.createElement("title",null,A),o.children)};return Rd!==void 0?Pn.createElement(Rd.Consumer,null,f=>s(f)):s(Gd)}function Ub(o){return Zd({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M10.25 2a8.25 8.25 0 0 1 6.34 13.53l5.69 5.69a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-5.69-5.69A8.25 8.25 0 1 1 10.25 2ZM3.5 10.25a6.75 6.75 0 1 0 13.5 0 6.75 6.75 0 0 0-13.5 0Z"},child:[]}]})(o)}const kb="_container_pju5c_1",Hb="_form_pju5c_9",jb="_input_pju5c_16",Bb="_button_pju5c_36",Pi={container:kb,form:Hb,input:jb,button:Bb},Cb=({onSearch:o})=>{const[s,f]=lt.useState(""),c=S=>{S.preventDefault(),o(s),f("")};return q.jsx("div",{className:Pi.container,children:q.jsxs("form",{className:Pi.form,onSubmit:c,children:[q.jsx("input",{className:Pi.input,type:"text",placeholder:"search for book",value:s,onChange:S=>f(S.target.value)}),q.jsx("button",{className:Pi.button,type:"submit",children:q.jsx(Ub,{})})]})})},Yb="_page_1i98c_1",Xb="_content_1i98c_7",kd={page:Yb,content:Xb},Gb="_header_pq0gd_1",Qb="_brand_pq0gd_10",Zb="_brandLogo_pq0gd_15",Tr={header:Gb,brand:Qb,brandLogo:Zb},wb="/google-books/assets/logo-DJTUT1bB.svg",Lb=()=>q.jsx("header",{className:Tr.header,children:q.jsxs("div",{className:Tr.brand,children:[" ",q.jsx("a",{href:"/google-books",style:{color:"inherit",textDecoration:"none"},children:q.jsx("img",{src:wb,alt:"Bookmark logo",className:Tr.brandLogo})})]})}),Vb="_footer_jqhhn_1",Kb={footer:Vb},Jb=()=>q.jsx("footer",{className:Kb.footer,children:q.jsx("div",{className:"container",children:"© 2025 Bookmark"})}),Pb=({children:o})=>q.jsxs("div",{className:kd.page,children:[q.jsx(Lb,{}),q.jsx("main",{className:kd.content,children:o}),q.jsx(Jb,{})]}),$b="https://www.googleapis.com/books/v1/volumes",Wb="AIzaSyDyKIDlg2DHuuGGaQ6S9TShmJVYp5hpb5U";async function Fb(o){try{const s=`${$b}?q=${o}&orderBy=newest&maxResults=40&key=${Wb}`,f=await fetch(s);if(!f.ok)throw new Error("Failed to fetch books");return(await f.json()).items||[]}catch(s){return console.error("Error fetching books:",s),[]}}const Ib="_loading_1wxfp_1",n1="_error_1wxfp_8",t1="_searchInfo_1wxfp_17",a1="_queryText_1wxfp_29",l1="_displayOptions_1wxfp_36",e1="_countButton_1wxfp_48",i1="_activeCount_1wxfp_64",Ta={loading:Ib,error:n1,searchInfo:t1,queryText:a1,displayOptions:l1,countButton:e1,activeCount:i1},u1="_grid_137qr_1",o1={grid:u1},r1="_card_1jofq_1",c1="_placeholder_1jofq_16",s1="_icon_1jofq_28",f1="_content_1jofq_32",d1="_title_1jofq_41",h1="_subtitle_1jofq_47",b1="_authors_1jofq_54",m1="_description_1jofq_60",v1="_categories_1jofq_66",p1="_footer_1jofq_73",g1="_detailsButton_1jofq_79",y1="_thumbnailContainer_1jofq_95",x1="_thumbnail_1jofq_95",at={card:r1,placeholder:c1,icon:s1,content:f1,title:d1,subtitle:h1,authors:b1,description:m1,categories:v1,footer:p1,detailsButton:g1,thumbnailContainer:y1,thumbnail:x1},S1="_content_v1b5r_1",O1="_closeBtn_v1b5r_14",_1="_overlay_v1b5r_25",Ar={content:S1,closeBtn:O1,overlay:_1},T1=({isOpen:o,onClose:s,children:f})=>o?q.jsxs("div",{className:Ar.overlay,onClick:s,children:[" "," ",q.jsxs("div",{className:Ar.content,onClick:c=>c.stopPropagation(),children:[" ",q.jsx("button",{className:Ar.closeBtn,onClick:s,children:"X"}),f]})]}):null;function A1(o){return Zd({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M262.3 199.2c-1.6-2.8-5.6-3.2-7.7-.7l-91.9 122.2c-2.5 2.9-.6 7.4 3.2 7.7l161.1 14c3.8.3 6.4-3.8 4.5-7.1l-69.2-136.1zM367.2 264.1c-1.6-2.8-5.6-3.2-7.7-.7l-24.8 25.1a4.68 4.68 0 0 0-.5 5.4l25.4 49.5c.8 1.3 2.1 2.2 3.7 2.3l44.9 3.9c3.8.3 6.4-3.8 4.5-7.1l-45.5-78.4zM378.1 224.4c11.2-.1 20.9-8.3 23-19.2 2.8-14.8-8.6-28.3-23.7-28.1-11.2.1-20.9 8.3-23 19.2-2.8 14.8 8.6 28.3 23.7 28.1z"},child:[]},{tag:"path",attr:{d:"M455.2 129.3l-65.8-5.7-6.1-67c-1.3-14.9-14.5-25.9-29.5-24.5L56.7 58.9c-14.9 1.3-25.9 14.5-24.6 29.4l26.8 296.5c1.3 14.9 14.5 25.9 29.5 24.5l15.7-1.4-1.5 16.7c-1.3 14.9 9.7 28 24.7 29.3l297.3 25.9c14.9 1.3 28.1-9.7 29.4-24.6l26-296.6c1.2-14.8-9.8-28-24.8-29.3zM87.6 300.7c-3.7.3-7-2.4-7.4-6.1l-18-200c-.3-3.7 2.4-7 6.1-7.3l279.2-25.1c3.7-.3 7 2.4 7.4 6.1l4.8 52.8L158 103.4c-14.9-1.3-28.1 9.7-29.4 24.6l-14.9 170.3-26.1 2.4zm362.2-135.6l-17.5 200c-.3 3.7-3.6 6.5-7.3 6.2l-18.6-1.6L145.7 347c-3.7-.3-6.5-3.6-6.2-7.3l3.8-43.9L157 139.7c.3-3.7 3.6-6.5 7.3-6.2l198 17.3 29.7 2.6 51.6 4.5c3.8.2 6.6 3.5 6.2 7.2z"},child:[]}]})(o)}const z1=({book:o})=>{var on,Tn,J;const[s,f]=lt.useState(!1),[c,S]=lt.useState(!1),{volumeInfo:A}=o,{pageCount:N,publisher:V,publishedDate:D,title:x,subtitle:R}=A,W=((on=A.authors)==null?void 0:on.join(", "))||"Unknown Author",K=(Tn=A.imageLinks)==null?void 0:Tn.thumbnail,hn=A.description||"No description available",w=200;let M;if(hn.length>w){const gn=hn.slice(0,w),On=gn.lastIndexOf(" ");M=gn.slice(0,On)+" ..."}else M=hn;const Y=A.description||"No Description Available",Rn=((J=A.categories)==null?void 0:J.join(", "))||"No Categories Available",pn=()=>{S(!0)};return q.jsxs("div",{children:[q.jsxs("div",{className:at.card,children:[K&&!c?q.jsx("div",{className:at.thumbnailContainer,children:q.jsx("img",{src:K,alt:`${x} cover`,className:at.thumbnail,onError:pn})}):q.jsxs("div",{className:at.placeholder,children:[q.jsx("div",{className:at.icon,children:q.jsx(A1,{})}),q.jsx("div",{children:" No cover available"})]}),q.jsxs("div",{className:at.content,children:[q.jsx("h2",{className:at.title,children:x}),q.jsx("h2",{className:at.subtitle,children:R}),q.jsx("p",{className:at.authors,children:W}),q.jsx("p",{className:at.description,children:M}),q.jsx("p",{className:at.categories,children:Rn})]}),q.jsx("div",{className:at.footer,children:q.jsx("button",{className:at.detailsButton,onClick:()=>f(!0),children:"Details"})})]}),q.jsxs(T1,{isOpen:s,onClose:()=>f(!1),children:[" ",q.jsx("h2",{children:x}),q.jsx("p",{style:{display:"flex",justifyContent:"center"},children:K&&!c?q.jsx("img",{src:K,alt:`${x} cover`,className:at.thumbnail,onError:pn}):q.jsxs("div",{children:[q.jsx("p",{children:"No Cover Available"}),q.jsx("p",{children:x})]})}),q.jsxs("p",{children:[q.jsx("strong",{children:"Subtitle:"})," ",R]}),q.jsxs("p",{children:[q.jsx("strong",{children:"Author:"})," ",W]}),q.jsxs("p",{children:[q.jsx("strong",{children:"Description:"})," ",Y]}),q.jsxs("p",{children:[q.jsx("strong",{children:"Publisher:"})," ",V]}),q.jsxs("p",{children:[q.jsx("strong",{children:"Published date:"})," ",D]}),q.jsxs("p",{children:[q.jsx("strong",{children:"Pages:"})," ",N]})]})]})},E1=({books:o})=>q.jsx("div",{className:o1.grid,children:o.map(s=>q.jsx(z1,{book:s},s.id))});function jn(o,s){s===void 0&&(s={});var f=s.insertAt;if(o&&typeof document<"u"){var c=document.head||document.getElementsByTagName("head")[0],S=document.createElement("style");S.type="text/css",f==="top"&&c.firstChild?c.insertBefore(S,c.firstChild):c.appendChild(S),S.styleSheet?S.styleSheet.cssText=o:S.appendChild(document.createTextNode(o))}}jn(`.react-loading-indicator-normalize,
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
}`);var Ht=function(){return Ht=Object.assign||function(o){for(var s,f=1,c=arguments.length;f<c;f++)for(var S in s=arguments[f])Object.prototype.hasOwnProperty.call(s,S)&&(o[S]=s[S]);return o},Ht.apply(this,arguments)};function nu(o){return nu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},nu(o)}var D1=/^\s+/,M1=/\s+$/;function C(o,s){if(s=s||{},(o=o||"")instanceof C)return o;if(!(this instanceof C))return new C(o,s);var f=function(c){var S={r:0,g:0,b:0},A=1,N=null,V=null,D=null,x=!1,R=!1;typeof c=="string"&&(c=function(w){w=w.replace(D1,"").replace(M1,"").toLowerCase();var M,Y=!1;if(Er[w])w=Er[w],Y=!0;else if(w=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(M=Et.rgb.exec(w))?{r:M[1],g:M[2],b:M[3]}:(M=Et.rgba.exec(w))?{r:M[1],g:M[2],b:M[3],a:M[4]}:(M=Et.hsl.exec(w))?{h:M[1],s:M[2],l:M[3]}:(M=Et.hsla.exec(w))?{h:M[1],s:M[2],l:M[3],a:M[4]}:(M=Et.hsv.exec(w))?{h:M[1],s:M[2],v:M[3]}:(M=Et.hsva.exec(w))?{h:M[1],s:M[2],v:M[3],a:M[4]}:(M=Et.hex8.exec(w))?{r:bt(M[1]),g:bt(M[2]),b:bt(M[3]),a:Xd(M[4]),format:Y?"name":"hex8"}:(M=Et.hex6.exec(w))?{r:bt(M[1]),g:bt(M[2]),b:bt(M[3]),format:Y?"name":"hex"}:(M=Et.hex4.exec(w))?{r:bt(M[1]+""+M[1]),g:bt(M[2]+""+M[2]),b:bt(M[3]+""+M[3]),a:Xd(M[4]+""+M[4]),format:Y?"name":"hex8"}:(M=Et.hex3.exec(w))?{r:bt(M[1]+""+M[1]),g:bt(M[2]+""+M[2]),b:bt(M[3]+""+M[3]),format:Y?"name":"hex"}:!1}(c)),nu(c)=="object"&&(Ft(c.r)&&Ft(c.g)&&Ft(c.b)?(W=c.r,K=c.g,hn=c.b,S={r:255*Sn(W,255),g:255*Sn(K,255),b:255*Sn(hn,255)},x=!0,R=String(c.r).substr(-1)==="%"?"prgb":"rgb"):Ft(c.h)&&Ft(c.s)&&Ft(c.v)?(N=Ue(c.s),V=Ue(c.v),S=function(w,M,Y){w=6*Sn(w,360),M=Sn(M,100),Y=Sn(Y,100);var Rn=Math.floor(w),pn=w-Rn,on=Y*(1-M),Tn=Y*(1-pn*M),J=Y*(1-(1-pn)*M),gn=Rn%6,On=[Y,Tn,on,on,J,Y][gn],Un=[J,Y,Y,Tn,on,on][gn],An=[on,on,J,Y,Y,Tn][gn];return{r:255*On,g:255*Un,b:255*An}}(c.h,N,V),x=!0,R="hsv"):Ft(c.h)&&Ft(c.s)&&Ft(c.l)&&(N=Ue(c.s),D=Ue(c.l),S=function(w,M,Y){var Rn,pn,on;function Tn(On,Un,An){return An<0&&(An+=1),An>1&&(An-=1),An<1/6?On+6*(Un-On)*An:An<.5?Un:An<2/3?On+(Un-On)*(2/3-An)*6:On}if(w=Sn(w,360),M=Sn(M,100),Y=Sn(Y,100),M===0)Rn=pn=on=Y;else{var J=Y<.5?Y*(1+M):Y+M-Y*M,gn=2*Y-J;Rn=Tn(gn,J,w+1/3),pn=Tn(gn,J,w),on=Tn(gn,J,w-1/3)}return{r:255*Rn,g:255*pn,b:255*on}}(c.h,N,D),x=!0,R="hsl"),c.hasOwnProperty("a")&&(A=c.a));var W,K,hn;return A=wd(A),{ok:x,format:c.format||R,r:Math.min(255,Math.max(S.r,0)),g:Math.min(255,Math.max(S.g,0)),b:Math.min(255,Math.max(S.b,0)),a:A}}(o);this._originalInput=o,this._r=f.r,this._g=f.g,this._b=f.b,this._a=f.a,this._roundA=Math.round(100*this._a)/100,this._format=s.format||f.format,this._gradientType=s.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=f.ok}function Hd(o,s,f){o=Sn(o,255),s=Sn(s,255),f=Sn(f,255);var c,S,A=Math.max(o,s,f),N=Math.min(o,s,f),V=(A+N)/2;if(A==N)c=S=0;else{var D=A-N;switch(S=V>.5?D/(2-A-N):D/(A+N),A){case o:c=(s-f)/D+(s<f?6:0);break;case s:c=(f-o)/D+2;break;case f:c=(o-s)/D+4}c/=6}return{h:c,s:S,l:V}}function jd(o,s,f){o=Sn(o,255),s=Sn(s,255),f=Sn(f,255);var c,S,A=Math.max(o,s,f),N=Math.min(o,s,f),V=A,D=A-N;if(S=A===0?0:D/A,A==N)c=0;else{switch(A){case o:c=(s-f)/D+(s<f?6:0);break;case s:c=(f-o)/D+2;break;case f:c=(o-s)/D+4}c/=6}return{h:c,s:S,v:V}}function Bd(o,s,f,c){var S=[Dt(Math.round(o).toString(16)),Dt(Math.round(s).toString(16)),Dt(Math.round(f).toString(16))];return c&&S[0].charAt(0)==S[0].charAt(1)&&S[1].charAt(0)==S[1].charAt(1)&&S[2].charAt(0)==S[2].charAt(1)?S[0].charAt(0)+S[1].charAt(0)+S[2].charAt(0):S.join("")}function Cd(o,s,f,c){return[Dt(Ld(c)),Dt(Math.round(o).toString(16)),Dt(Math.round(s).toString(16)),Dt(Math.round(f).toString(16))].join("")}function N1(o,s){s=s===0?0:s||10;var f=C(o).toHsl();return f.s-=s/100,f.s=tu(f.s),C(f)}function q1(o,s){s=s===0?0:s||10;var f=C(o).toHsl();return f.s+=s/100,f.s=tu(f.s),C(f)}function R1(o){return C(o).desaturate(100)}function U1(o,s){s=s===0?0:s||10;var f=C(o).toHsl();return f.l+=s/100,f.l=tu(f.l),C(f)}function k1(o,s){s=s===0?0:s||10;var f=C(o).toRgb();return f.r=Math.max(0,Math.min(255,f.r-Math.round(-s/100*255))),f.g=Math.max(0,Math.min(255,f.g-Math.round(-s/100*255))),f.b=Math.max(0,Math.min(255,f.b-Math.round(-s/100*255))),C(f)}function H1(o,s){s=s===0?0:s||10;var f=C(o).toHsl();return f.l-=s/100,f.l=tu(f.l),C(f)}function j1(o,s){var f=C(o).toHsl(),c=(f.h+s)%360;return f.h=c<0?360+c:c,C(f)}function B1(o){var s=C(o).toHsl();return s.h=(s.h+180)%360,C(s)}function Yd(o,s){if(isNaN(s)||s<=0)throw new Error("Argument to polyad must be a positive number");for(var f=C(o).toHsl(),c=[C(o)],S=360/s,A=1;A<s;A++)c.push(C({h:(f.h+A*S)%360,s:f.s,l:f.l}));return c}function C1(o){var s=C(o).toHsl(),f=s.h;return[C(o),C({h:(f+72)%360,s:s.s,l:s.l}),C({h:(f+216)%360,s:s.s,l:s.l})]}function Y1(o,s,f){s=s||6,f=f||30;var c=C(o).toHsl(),S=360/f,A=[C(o)];for(c.h=(c.h-(S*s>>1)+720)%360;--s;)c.h=(c.h+S)%360,A.push(C(c));return A}function X1(o,s){s=s||6;for(var f=C(o).toHsv(),c=f.h,S=f.s,A=f.v,N=[],V=1/s;s--;)N.push(C({h:c,s:S,v:A})),A=(A+V)%1;return N}C.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var o=this.toRgb();return(299*o.r+587*o.g+114*o.b)/1e3},getLuminance:function(){var o,s,f,c=this.toRgb();return o=c.r/255,s=c.g/255,f=c.b/255,.2126*(o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4))+.7152*(s<=.03928?s/12.92:Math.pow((s+.055)/1.055,2.4))+.0722*(f<=.03928?f/12.92:Math.pow((f+.055)/1.055,2.4))},setAlpha:function(o){return this._a=wd(o),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var o=jd(this._r,this._g,this._b);return{h:360*o.h,s:o.s,v:o.v,a:this._a}},toHsvString:function(){var o=jd(this._r,this._g,this._b),s=Math.round(360*o.h),f=Math.round(100*o.s),c=Math.round(100*o.v);return this._a==1?"hsv("+s+", "+f+"%, "+c+"%)":"hsva("+s+", "+f+"%, "+c+"%, "+this._roundA+")"},toHsl:function(){var o=Hd(this._r,this._g,this._b);return{h:360*o.h,s:o.s,l:o.l,a:this._a}},toHslString:function(){var o=Hd(this._r,this._g,this._b),s=Math.round(360*o.h),f=Math.round(100*o.s),c=Math.round(100*o.l);return this._a==1?"hsl("+s+", "+f+"%, "+c+"%)":"hsla("+s+", "+f+"%, "+c+"%, "+this._roundA+")"},toHex:function(o){return Bd(this._r,this._g,this._b,o)},toHexString:function(o){return"#"+this.toHex(o)},toHex8:function(o){return function(s,f,c,S,A){var N=[Dt(Math.round(s).toString(16)),Dt(Math.round(f).toString(16)),Dt(Math.round(c).toString(16)),Dt(Ld(S))];return A&&N[0].charAt(0)==N[0].charAt(1)&&N[1].charAt(0)==N[1].charAt(1)&&N[2].charAt(0)==N[2].charAt(1)&&N[3].charAt(0)==N[3].charAt(1)?N[0].charAt(0)+N[1].charAt(0)+N[2].charAt(0)+N[3].charAt(0):N.join("")}(this._r,this._g,this._b,this._a,o)},toHex8String:function(o){return"#"+this.toHex8(o)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*Sn(this._r,255))+"%",g:Math.round(100*Sn(this._g,255))+"%",b:Math.round(100*Sn(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*Sn(this._r,255))+"%, "+Math.round(100*Sn(this._g,255))+"%, "+Math.round(100*Sn(this._b,255))+"%)":"rgba("+Math.round(100*Sn(this._r,255))+"%, "+Math.round(100*Sn(this._g,255))+"%, "+Math.round(100*Sn(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(G1[Bd(this._r,this._g,this._b,!0)]||!1)},toFilter:function(o){var s="#"+Cd(this._r,this._g,this._b,this._a),f=s,c=this._gradientType?"GradientType = 1, ":"";if(o){var S=C(o);f="#"+Cd(S._r,S._g,S._b,S._a)}return"progid:DXImageTransform.Microsoft.gradient("+c+"startColorstr="+s+",endColorstr="+f+")"},toString:function(o){var s=!!o;o=o||this._format;var f=!1,c=this._a<1&&this._a>=0;return s||!c||o!=="hex"&&o!=="hex6"&&o!=="hex3"&&o!=="hex4"&&o!=="hex8"&&o!=="name"?(o==="rgb"&&(f=this.toRgbString()),o==="prgb"&&(f=this.toPercentageRgbString()),o!=="hex"&&o!=="hex6"||(f=this.toHexString()),o==="hex3"&&(f=this.toHexString(!0)),o==="hex4"&&(f=this.toHex8String(!0)),o==="hex8"&&(f=this.toHex8String()),o==="name"&&(f=this.toName()),o==="hsl"&&(f=this.toHslString()),o==="hsv"&&(f=this.toHsvString()),f||this.toHexString()):o==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return C(this.toString())},_applyModification:function(o,s){var f=o.apply(null,[this].concat([].slice.call(s)));return this._r=f._r,this._g=f._g,this._b=f._b,this.setAlpha(f._a),this},lighten:function(){return this._applyModification(U1,arguments)},brighten:function(){return this._applyModification(k1,arguments)},darken:function(){return this._applyModification(H1,arguments)},desaturate:function(){return this._applyModification(N1,arguments)},saturate:function(){return this._applyModification(q1,arguments)},greyscale:function(){return this._applyModification(R1,arguments)},spin:function(){return this._applyModification(j1,arguments)},_applyCombination:function(o,s){return o.apply(null,[this].concat([].slice.call(s)))},analogous:function(){return this._applyCombination(Y1,arguments)},complement:function(){return this._applyCombination(B1,arguments)},monochromatic:function(){return this._applyCombination(X1,arguments)},splitcomplement:function(){return this._applyCombination(C1,arguments)},triad:function(){return this._applyCombination(Yd,[3])},tetrad:function(){return this._applyCombination(Yd,[4])}},C.fromRatio=function(o,s){if(nu(o)=="object"){var f={};for(var c in o)o.hasOwnProperty(c)&&(f[c]=c==="a"?o[c]:Ue(o[c]));o=f}return C(o,s)},C.equals=function(o,s){return!(!o||!s)&&C(o).toRgbString()==C(s).toRgbString()},C.random=function(){return C.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},C.mix=function(o,s,f){f=f===0?0:f||50;var c=C(o).toRgb(),S=C(s).toRgb(),A=f/100;return C({r:(S.r-c.r)*A+c.r,g:(S.g-c.g)*A+c.g,b:(S.b-c.b)*A+c.b,a:(S.a-c.a)*A+c.a})},C.readability=function(o,s){var f=C(o),c=C(s);return(Math.max(f.getLuminance(),c.getLuminance())+.05)/(Math.min(f.getLuminance(),c.getLuminance())+.05)},C.isReadable=function(o,s,f){var c,S,A=C.readability(o,s);switch(S=!1,(c=function(N){var V,D;return V=((N=N||{level:"AA",size:"small"}).level||"AA").toUpperCase(),D=(N.size||"small").toLowerCase(),V!=="AA"&&V!=="AAA"&&(V="AA"),D!=="small"&&D!=="large"&&(D="small"),{level:V,size:D}}(f)).level+c.size){case"AAsmall":case"AAAlarge":S=A>=4.5;break;case"AAlarge":S=A>=3;break;case"AAAsmall":S=A>=7}return S},C.mostReadable=function(o,s,f){var c,S,A,N,V=null,D=0;S=(f=f||{}).includeFallbackColors,A=f.level,N=f.size;for(var x=0;x<s.length;x++)(c=C.readability(o,s[x]))>D&&(D=c,V=C(s[x]));return C.isReadable(o,V,{level:A,size:N})||!S?V:(f.includeFallbackColors=!1,C.mostReadable(o,["#fff","#000"],f))};var Er=C.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},G1=C.hexNames=function(o){var s={};for(var f in o)o.hasOwnProperty(f)&&(s[o[f]]=f);return s}(Er);function wd(o){return o=parseFloat(o),(isNaN(o)||o<0||o>1)&&(o=1),o}function Sn(o,s){(function(c){return typeof c=="string"&&c.indexOf(".")!=-1&&parseFloat(c)===1})(o)&&(o="100%");var f=function(c){return typeof c=="string"&&c.indexOf("%")!=-1}(o);return o=Math.min(s,Math.max(0,parseFloat(o))),f&&(o=parseInt(o*s,10)/100),Math.abs(o-s)<1e-6?1:o%s/parseFloat(s)}function tu(o){return Math.min(1,Math.max(0,o))}function bt(o){return parseInt(o,16)}function Dt(o){return o.length==1?"0"+o:""+o}function Ue(o){return o<=1&&(o=100*o+"%"),o}function Ld(o){return Math.round(255*parseFloat(o)).toString(16)}function Xd(o){return bt(o)/255}var Aa,$i,Wi,Et=($i="[\\s|\\(]+("+(Aa="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+Aa+")[,|\\s]+("+Aa+")\\s*\\)?",Wi="[\\s|\\(]+("+Aa+")[,|\\s]+("+Aa+")[,|\\s]+("+Aa+")[,|\\s]+("+Aa+")\\s*\\)?",{CSS_UNIT:new RegExp(Aa),rgb:new RegExp("rgb"+$i),rgba:new RegExp("rgba"+Wi),hsl:new RegExp("hsl"+$i),hsla:new RegExp("hsla"+Wi),hsv:new RegExp("hsv"+$i),hsva:new RegExp("hsva"+Wi),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function Ft(o){return!!Et.CSS_UNIT.exec(o)}var Q1=function(o,s){var f=(typeof o=="string"?parseInt(o):o)||0;if(f>=-5&&f<=5){var c=f,S=parseFloat(s),A=S+c*(S/5)*-1;return(A==0||A<=Number.EPSILON)&&(A=.1),{animationPeriod:A+"s"}}return{animationPeriod:s}},Z1=function(o,s){var f=o||{},c="";switch(s){case"small":c="12px";break;case"medium":c="16px";break;case"large":c="20px";break;default:c=void 0}var S={};if(f.fontSize){var A=f.fontSize;S=function(N,V){var D={};for(var x in N)Object.prototype.hasOwnProperty.call(N,x)&&V.indexOf(x)<0&&(D[x]=N[x]);if(N!=null&&typeof Object.getOwnPropertySymbols=="function"){var R=0;for(x=Object.getOwnPropertySymbols(N);R<x.length;R++)V.indexOf(x[R])<0&&Object.prototype.propertyIsEnumerable.call(N,x[R])&&(D[x[R]]=N[x[R]])}return D}(f,["fontSize"]),c=A}return{fontSize:c,styles:S}},w1={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},L1=function(o){var s=o.className,f=o.text,c=o.textColor,S=o.staticText,A=o.style;return f?Pn.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(s||"").trim(),style:Ht(Ht(Ht({},S&&w1),c&&{color:c,mixBlendMode:"unset"}),A&&A)},typeof f=="string"&&f.length?f:"loading"):null},Vd="rgb(50, 205, 50)";function V1(o,s){if(s===void 0&&(s=0),o.length===0)throw new Error("Input array cannot be empty!");var f=[];return function c(S,A){return A===void 0&&(A=0),f.push.apply(f,S),f.length<A&&c(f,A),f.slice(0,A)}(o,s)}jn(`.atom-rli-bounding-box {
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
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
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
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7eg;
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
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7fj, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gy;
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
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7hv;
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
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7ew, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
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
@keyframes uxlv7fj {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes uxlv7ew {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes uxlv7eg {
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
@keyframes uxlv7gg {
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
@keyframes uxlv7gy {
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
@keyframes uxlv7hv {
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
}`);C(Vd).toRgb();Array.from({length:4},function(o,s){return"--atom-phase".concat(s+1,"-rgb")});jn(`.commet-rli-bounding-box {
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
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite uxlv7cp;
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
  animation: uxlv7bx var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
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
@keyframes uxlv7bx {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7cp {
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
}`);Array.from({length:4},function(o,s){return"--commet-phase".concat(s+1,"-color")});jn(`.OP-annulus-rli-bounding-box {
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
  animation: uxlv7n7 calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
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
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite uxlv7oa, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7p5;
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
@keyframes uxlv7n7 {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7oa {
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
@keyframes uxlv7p5 {
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
}`);Array.from({length:4},function(o,s){return"--OP-annulus-phase".concat(s+1,"-color")});function zr(o){return o&&o.Math===Math&&o}jn(`.OP-dotted-rli-bounding-box {
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
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite uxlv7nu, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7ol;
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
@keyframes uxlv7nu {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes uxlv7ol {
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
}`);zr(typeof window=="object"&&window)||zr(typeof self=="object"&&self)||zr(typeof global=="object"&&global)||function(){return this}()||Function("return this")();Array.from({length:4},function(o,s){return"--OP-dotted-phase".concat(s+1,"-color")});jn(`.OP-spokes-rli-bounding-box {
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
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite uxlv7pw, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7qn;
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
@keyframes uxlv7pw {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes uxlv7qn {
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
}`);Array.from({length:4},function(o,s){return"--OP-spokes-phase".concat(s+1,"-color")});jn(`.OP-annulus-dual-sectors-rli-bounding-box {
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
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite uxlv7ra, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite uxlv7sv;
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
@keyframes uxlv7ra {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7sv {
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
}`);Array.from({length:4},function(o,s){return"--OP-annulus-dual-sectors-phase".concat(s+1,"-color")});jn(`.OP-annulus-sector-track-rli-bounding-box {
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
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7rl, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7tf;
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
@keyframes uxlv7rl {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7tf {
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
}`);Array.from({length:4},function(o,s){return["--OP-annulus-track-phase".concat(s+1,"-color"),"--OP-annulus-sector-phase".concat(s+1,"-color")]});jn(`.foursquare-rli-bounding-box {
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
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7dk, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7es;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: uxlv7dd var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
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
@keyframes uxlv7dk {
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
@keyframes uxlv7dd {
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
@keyframes uxlv7es {
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
}`);var Rl=Array.from({length:4},function(o,s){return"--four-square-phase".concat(s+1,"-color")}),K1=function(o){var s,f=Z1(o==null?void 0:o.style,o==null?void 0:o.size),c=f.styles,S=f.fontSize,A=o==null?void 0:o.easing,N=Q1(o==null?void 0:o.speedPlus,"1s").animationPeriod,V=function(D){var x={};if(D instanceof Array){for(var R=V1(D,Rl.length),W=0;W<R.length&&!(W>=4);W++)x[Rl[W]]=R[W];return x}try{if(typeof D!="string")throw new Error("Color String expected");for(var K=0;K<Rl.length;K++)x[Rl[K]]=D}catch(hn){for(hn instanceof Error?console.warn("[".concat(hn.message,']: Received "').concat(typeof D,'" instead with value, ').concat(JSON.stringify(D))):console.warn("".concat(JSON.stringify(D)," received in <FourSquare /> indicator cannot be processed. Using default instead!")),K=0;K<Rl.length;K++)x[Rl[K]]=Vd}return x}((s=o==null?void 0:o.color)!==null&&s!==void 0?s:"");return Pn.createElement("span",{className:"rli-d-i-b foursquare-rli-bounding-box",style:Ht(Ht(Ht(Ht(Ht({},S&&{fontSize:S}),N&&{"--rli-animation-duration":N}),A&&{"--rli-animation-function":A}),V),c),role:"status","aria-live":"polite","aria-label":"Loading"},Pn.createElement("span",{className:"rli-d-i-b foursquare-indicator"},Pn.createElement("span",{className:"squares-container"},Pn.createElement("span",{className:"square square1"}),Pn.createElement("span",{className:"square square2"}),Pn.createElement("span",{className:"square square3"}),Pn.createElement("span",{className:"square square4"}))),Pn.createElement(L1,{text:o==null?void 0:o.text,textColor:o==null?void 0:o.textColor,staticText:!0}))};jn(`.mosaic-rli-bounding-box {
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
  animation-name: uxlv7i4, uxlv7is;
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
@keyframes uxlv7i4 {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes uxlv7is {
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
}`);Array.from({length:4},function(o,s){return"--mosaic-phase".concat(s+1,"-color")});jn(`.riple-rli-bounding-box {
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
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7i1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7io;
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
@keyframes uxlv7i1 {
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
@keyframes uxlv7io {
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
}`);Array.from({length:4},function(o,s){return"--riple-phase".concat(s+1,"-color")});jn(`.pulsate-rli-bounding-box {
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
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7s0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7to;
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
@keyframes uxlv7s0 {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes uxlv7to {
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
}`);Array.from({length:4},function(o,s){return"--TD-pulsate-phase".concat(s+1,"-color")});jn(`.brick-stack-rli-bounding-box {
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
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite uxlv7tu, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite uxlv7us;
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
@keyframes uxlv7tu {
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
@keyframes uxlv7us {
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
}`);Array.from({length:4},function(o,s){return"--TD-brick-stack-phase".concat(s+1,"-color")});jn(`.bob-rli-bounding-box {
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
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite uxlv7u0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite uxlv7vq;
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
@keyframes uxlv7u0 {
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
@keyframes uxlv7vq {
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
}`);Array.from({length:4},function(o,s){return"--TD-bob-phase".concat(s+1,"-color")});jn(`.bounce-rli-bounding-box {
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
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7wc, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite uxlv7x6;
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
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7ww;
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
@keyframes uxlv7wc {
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
@keyframes uxlv7ww {
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
@keyframes uxlv7x6 {
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
}`);Array.from({length:4},function(o,s){return"--TD-bounce-phase".concat(s+1,"-color")});jn(`.blink-blur-rli-bounding-box {
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
  animation-name: uxlv7id, uxlv7jl;
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
@keyframes uxlv7id {
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
@keyframes uxlv7jl {
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
}`);Array.from({length:4},function(o,s){return"--shape-phase".concat(s+1,"-color")});jn(`.trophy-spin-rli-bounding-box {
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
  animation: uxlv7ki var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, uxlv7l2 calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, uxlv7ly calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
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
@keyframes uxlv7ki {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes uxlv7l2 {
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
@keyframes uxlv7ly {
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
}`);Array.from({length:4},function(o,s){return"--trophySpin-phase".concat(s+1,"-color")});jn(`.slab-rli-bounding-box {
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
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite uxlv7md, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite uxlv7n0;
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
@keyframes uxlv7md {
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
@keyframes uxlv7n0 {
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
}`);Array.from({length:4},function(o,s){return"--slab-phase".concat(s+1,"-color")});jn(`.lifeline-rli-bounding-box {
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
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite uxlv7k3, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite uxlv7kg;
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
@keyframes uxlv7k3 {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes uxlv7kg {
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
}`);Array.from({length:4},function(o,s){return"--life-line-phase".concat(s+1,"-color")});const J1=({searchQuery:o,genre:s})=>{const[f,c]=lt.useState([]),[S,A]=lt.useState("PENDING"),[N,V]=lt.useState(null),[D,x]=lt.useState(""),[R,W]=lt.useState(!0),[K,hn]=lt.useState(11),w=f.slice(0,K),M=[5,10,20,30,40];return lt.useEffect(()=>{if(o===""){c([]),x(""),A("SUCCESS");return}const Y=s!=null,Rn=Y?`subject:${s}`:o||"computers";console.log("Query being used:",Rn),!Y&&o&&!R?x(o):(R||Y)&&x(""),A("LOADING"),Fb(Rn).then(pn=>{c(pn),A("SUCCESS"),R&&W(!1)}).catch(pn=>{console.error("Error Fetching books:",pn),V(pn),A("FAILED"),R&&W(!1)})},[o,s,R]),R&&S==="LOADING"?q.jsx("div",{className:Ta.loading,children:q.jsx(K1,{color:["#3a4a3d","#a7c957","#bc4749","#1d384a"],size:"large",text:"loading books...",textColor:""})}):S==="FAILED"?q.jsx("div",{className:Ta.error,children:q.jsxs("p",{children:["Failed to load books: ",(N==null?void 0:N.message)||"Unknown error"]})}):(!f||f.length===0)&&!R?q.jsx("div",{className:Ta.error,children:q.jsx("p",{children:"No results found. Please type in search or choose genre "})}):q.jsxs(q.Fragment,{children:[D&&q.jsx("div",{className:Ta.searchInfo,children:q.jsxs("h3",{children:["search result for:","  ",q.jsx("span",{className:Ta.queryText,children:D})]})}),f.length>0&&q.jsxs("div",{className:Ta.displayOptions,children:[q.jsx("span",{children:"Show books per page: "}),M.map(Y=>q.jsx("button",{onClick:()=>hn(Y),className:`${Ta.countButton} ${K===Y?Ta.activeCount:""}`,children:Y},Y))]}),q.jsx(E1,{books:w})]})},P1="_container_1ccku_1",$1="_title_1ccku_6",W1="_buttonContainer_1ccku_12",F1="_genreButton_1ccku_21",I1="_active_1ccku_41",Re={container:P1,title:$1,buttonContainer:W1,genreButton:F1,active:I1},nm=({onSelectGenre:o,activeGenre:s})=>{const f=["fiction","programming","science fiction","history","self-help","romance","biography","thriller","fantasy","health","travel","cookbook","medicine","philosophy","psychology"];return q.jsxs("div",{className:Re.container,children:[q.jsx("h3",{className:Re.title,children:"Popular Genres"}),q.jsx("div",{className:Re.buttonContainer,children:f.map(c=>q.jsx("button",{className:`${Re.genreButton} ${c===s?Re.active:""}`,onClick:()=>o(c),children:c},c))})]})};function tm(){const[o,s]=lt.useState(null),[f,c]=lt.useState(null),S=N=>{s(N),c(null)},A=N=>{c(N),s(null)};return q.jsxs(Pb,{children:[q.jsx(Cb,{onSearch:S}),q.jsx(nm,{onSelectGenre:A,activeGenre:f}),q.jsx(J1,{searchQuery:o,genre:f})]})}Ab.createRoot(document.getElementById("root")).render(q.jsx(lt.StrictMode,{children:q.jsx(tm,{})}));
