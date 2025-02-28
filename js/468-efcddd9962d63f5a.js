"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[468],{5478:function(e,t,n){n.d(t,{Ry:function(){return l}});var r=new WeakMap,o=new WeakMap,a={},c=0,i=function(e){return e&&(e.host||i(e.parentNode))},u=function(e,t,n,u){var l=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=i(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});a[n]||(a[n]=new WeakMap);var d=a[n],s=[],f=new Set,v=new Set(l),p=function(e){!e||f.has(e)||(f.add(e),p(e.parentNode))};l.forEach(p);var h=function(e){!e||v.has(e)||Array.prototype.forEach.call(e.children,function(e){if(f.has(e))h(e);else try{var t=e.getAttribute(u),a=null!==t&&"false"!==t,c=(r.get(e)||0)+1,i=(d.get(e)||0)+1;r.set(e,c),d.set(e,i),s.push(e),1===c&&a&&o.set(e,!0),1===i&&e.setAttribute(n,"true"),a||e.setAttribute(u,"true")}catch(t){console.error("aria-hidden: cannot operate on ",e,t)}})};return h(t),f.clear(),c++,function(){s.forEach(function(e){var t=r.get(e)-1,a=d.get(e)-1;r.set(e,t),d.set(e,a),t||(o.has(e)||e.removeAttribute(u),o.delete(e)),a||e.removeAttribute(n)}),--c||(r=new WeakMap,r=new WeakMap,o=new WeakMap,a={})}},l=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=t||("undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),u(r,o,n,"aria-hidden")):function(){return null}}},99157:function(e,t,n){n.d(t,{Z:function(){return G}});var r,o,a,c,i,u,l,d=function(){return(d=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}"function"==typeof SuppressedError&&SuppressedError;var f=n(2265),v="right-scroll-bar-position",p="width-before-scroll-bar";function h(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}var m="undefined"!=typeof window?f.useLayoutEffect:f.useEffect,g=new WeakMap,y=(void 0===o&&(o={}),(void 0===a&&(a=function(e){return e}),c=[],i=!1,u={read:function(){if(i)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return c.length?c[c.length-1]:null},useMedium:function(e){var t=a(e,i);return c.push(t),function(){c=c.filter(function(e){return e!==t})}},assignSyncMedium:function(e){for(i=!0;c.length;){var t=c;c=[],t.forEach(e)}c={push:function(t){return e(t)},filter:function(){return c}}},assignMedium:function(e){i=!0;var t=[];if(c.length){var n=c;c=[],n.forEach(e),t=c}var r=function(){var n=t;t=[],n.forEach(e)},o=function(){return Promise.resolve().then(r)};o(),c={push:function(e){t.push(e),o()},filter:function(e){return t=t.filter(e),c}}}}).options=d({async:!0,ssr:!1},o),u),b=function(){},E=f.forwardRef(function(e,t){var n,r,o,a,c=f.useRef(null),i=f.useState({onScrollCapture:b,onWheelCapture:b,onTouchMoveCapture:b}),u=i[0],l=i[1],v=e.forwardProps,p=e.children,E=e.className,w=e.removeScrollBar,S=e.enabled,C=e.shards,k=e.sideCar,A=e.noIsolation,M=e.inert,N=e.allowPinchZoom,L=e.as,R=e.gapMode,T=s(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),x=(n=[c,t],r=function(e){return n.forEach(function(t){return h(t,e)})},(o=(0,f.useState)(function(){return{value:null,callback:r,facade:{get current(){return o.value},set current(value){var e=o.value;e!==value&&(o.value=value,o.callback(value,e))}}}})[0]).callback=r,a=o.facade,m(function(){var e=g.get(a);if(e){var t=new Set(e),r=new Set(n),o=a.current;t.forEach(function(e){r.has(e)||h(e,null)}),r.forEach(function(e){t.has(e)||h(e,o)})}g.set(a,n)},[n]),a),P=d(d({},T),u);return f.createElement(f.Fragment,null,S&&f.createElement(k,{sideCar:y,removeScrollBar:w,shards:C,noIsolation:A,inert:M,setCallbacks:l,allowPinchZoom:!!N,lockRef:c,gapMode:R}),v?f.cloneElement(f.Children.only(p),d(d({},P),{ref:x})):f.createElement(void 0===L?"div":L,d({},P,{className:E,ref:x}),p))});E.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},E.classNames={fullWidth:p,zeroRight:v};var w=function(e){var t=e.sideCar,n=s(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error("Sidecar medium not found");return f.createElement(r,d({},n))};w.isSideCarExport=!0;var S=function(){var e=0,t=null;return{add:function(o){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=r||n.nc;return t&&e.setAttribute("nonce",t),e}())){var a,c;(a=t).styleSheet?a.styleSheet.cssText=o:a.appendChild(document.createTextNode(o)),c=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(c)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},C=function(){var e=S();return function(t,n){f.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},k=function(){var e=C();return function(t){return e(t.styles,t.dynamic),null}},A={left:0,top:0,right:0,gap:0},M=function(e){return parseInt(e||"",10)||0},N=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[M(n),M(r),M(o)]},L=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return A;var t=N(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},R=k(),T="data-scroll-locked",x=function(e,t,n,r){var o=e.left,a=e.top,c=e.right,i=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(i,"px ").concat(r,";\n  }\n  body[").concat(T,"] {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(a,"px;\n    padding-right: ").concat(c,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(i,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(i,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(v," {\n    right: ").concat(i,"px ").concat(r,";\n  }\n  \n  .").concat(p," {\n    margin-right: ").concat(i,"px ").concat(r,";\n  }\n  \n  .").concat(v," .").concat(v," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(p," .").concat(p," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body[").concat(T,"] {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(i,"px;\n  }\n")},P=function(){var e=parseInt(document.body.getAttribute(T)||"0",10);return isFinite(e)?e:0},W=function(){f.useEffect(function(){return document.body.setAttribute(T,(P()+1).toString()),function(){var e=P()-1;e<=0?document.body.removeAttribute(T):document.body.setAttribute(T,e.toString())}},[])},I=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=void 0===r?"margin":r;W();var a=f.useMemo(function(){return L(o)},[o]);return f.createElement(R,{styles:x(a,!t,o,n?"":"!important")})},O=!1;if("undefined"!=typeof window)try{var F=Object.defineProperty({},"passive",{get:function(){return O=!0,!0}});window.addEventListener("test",F,F),window.removeEventListener("test",F,F)}catch(e){O=!1}var j=!!O&&{passive:!1},B=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},D=function(e,t){var n=t.ownerDocument,r=t;do{if("undefined"!=typeof ShadowRoot&&r instanceof ShadowRoot&&(r=r.host),K(e,r)){var o=_(e,r);if(o[1]>o[2])return!0}r=r.parentNode}while(r&&r!==n.body);return!1},K=function(e,t){return"v"===e?B(t,"overflowY"):B(t,"overflowX")},_=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},X=function(e,t,n,r,o){var a,c=(a=window.getComputedStyle(t).direction,"h"===e&&"rtl"===a?-1:1),i=c*r,u=n.target,l=t.contains(u),d=!1,s=i>0,f=0,v=0;do{var p=_(e,u),h=p[0],m=p[1]-p[2]-c*h;(h||m)&&K(e,u)&&(f+=m,v+=h),u instanceof ShadowRoot?u=u.host:u=u.parentNode}while(!l&&u!==document.body||l&&(t.contains(u)||t===u));return s&&(o&&1>Math.abs(f)||!o&&i>f)?d=!0:!s&&(o&&1>Math.abs(v)||!o&&-i>v)&&(d=!0),d},Y=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Z=function(e){return[e.deltaX,e.deltaY]},H=function(e){return e&&"current"in e?e.current:e},q=0,U=[],z=(l=function(e){var t=f.useRef([]),n=f.useRef([0,0]),r=f.useRef(),o=f.useState(q++)[0],a=f.useState(k)[0],c=f.useRef(e);f.useEffect(function(){c.current=e},[e]),f.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var t=(function(e,t,n){if(n||2==arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))})([e.lockRef.current],(e.shards||[]).map(H),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var i=f.useCallback(function(e,t){if("touches"in e&&2===e.touches.length||"wheel"===e.type&&e.ctrlKey)return!c.current.allowPinchZoom;var o,a=Y(e),i=n.current,u="deltaX"in e?e.deltaX:i[0]-a[0],l="deltaY"in e?e.deltaY:i[1]-a[1],d=e.target,s=Math.abs(u)>Math.abs(l)?"h":"v";if("touches"in e&&"h"===s&&"range"===d.type)return!1;var f=D(s,d);if(!f)return!0;if(f?o=s:(o="v"===s?"h":"v",f=D(s,d)),!f)return!1;if(!r.current&&"changedTouches"in e&&(u||l)&&(r.current=o),!o)return!0;var v=r.current||o;return X(v,t,e,"h"===v?u:l,!0)},[]),u=f.useCallback(function(e){if(U.length&&U[U.length-1]===a){var n="deltaY"in e?Z(e):Y(e),r=t.current.filter(function(t){var r;return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(c.current.shards||[]).map(H).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?i(e,o[0]):!c.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),l=f.useCallback(function(e,n,r,o){var a={name:e,delta:n,target:r,should:o,shadowParent:function(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}(r)};t.current.push(a),setTimeout(function(){t.current=t.current.filter(function(e){return e!==a})},1)},[]),d=f.useCallback(function(e){n.current=Y(e),r.current=void 0},[]),s=f.useCallback(function(t){l(t.type,Z(t),t.target,i(t,e.lockRef.current))},[]),v=f.useCallback(function(t){l(t.type,Y(t),t.target,i(t,e.lockRef.current))},[]);f.useEffect(function(){return U.push(a),e.setCallbacks({onScrollCapture:s,onWheelCapture:s,onTouchMoveCapture:v}),document.addEventListener("wheel",u,j),document.addEventListener("touchmove",u,j),document.addEventListener("touchstart",d,j),function(){U=U.filter(function(e){return e!==a}),document.removeEventListener("wheel",u,j),document.removeEventListener("touchmove",u,j),document.removeEventListener("touchstart",d,j)}},[]);var p=e.removeScrollBar,h=e.inert;return f.createElement(f.Fragment,null,h?f.createElement(a,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,p?f.createElement(I,{gapMode:e.gapMode}):null)},y.useMedium(l),w),V=f.forwardRef(function(e,t){return f.createElement(E,d({},e,{ref:t,sideCar:z}))});V.classNames=E.classNames;var G=V},86097:function(e,t,n){n.d(t,{EW:function(){return a}});var r=n(2265),o=0;function a(){r.useEffect(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:c()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:c()),o++,()=>{1===o&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),o--}},[])}function c(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}},99103:function(e,t,n){let r;n.d(t,{M:function(){return f}});var o=n(2265),a=n(98575),c=n(66840),i=n(26606),u=n(57437),l="focusScope.autoFocusOnMount",d="focusScope.autoFocusOnUnmount",s={bubbles:!1,cancelable:!0},f=o.forwardRef((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:f,onUnmountAutoFocus:g,...y}=e,[b,E]=o.useState(null),w=(0,i.W)(f),S=(0,i.W)(g),C=o.useRef(null),k=(0,a.e)(t,e=>E(e)),A=o.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;o.useEffect(()=>{if(r){let e=function(e){if(A.paused||!b)return;let t=e.target;b.contains(t)?C.current=t:h(C.current,{select:!0})},t=function(e){if(A.paused||!b)return;let t=e.relatedTarget;null===t||b.contains(t)||h(C.current,{select:!0})};document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&h(b)});return b&&n.observe(b,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,b,A.paused]),o.useEffect(()=>{if(b){m.add(A);let e=document.activeElement;if(!b.contains(e)){let t=new CustomEvent(l,s);b.addEventListener(l,w),b.dispatchEvent(t),t.defaultPrevented||(function(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=document.activeElement;for(let r of e)if(h(r,{select:t}),document.activeElement!==n)return}(v(b).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&h(b))}return()=>{b.removeEventListener(l,w),setTimeout(()=>{let t=new CustomEvent(d,s);b.addEventListener(d,S),b.dispatchEvent(t),t.defaultPrevented||h(null!=e?e:document.body,{select:!0}),b.removeEventListener(d,S),m.remove(A)},0)}}},[b,w,S,A]);let M=o.useCallback(e=>{if(!n&&!r||A.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let t=e.currentTarget,[r,a]=function(e){let t=v(e);return[p(t,e),p(t.reverse(),e)]}(t);r&&a?e.shiftKey||o!==a?e.shiftKey&&o===r&&(e.preventDefault(),n&&h(a,{select:!0})):(e.preventDefault(),n&&h(r,{select:!0})):o===t&&e.preventDefault()}},[n,r,A.paused]);return(0,u.jsx)(c.WV.div,{tabIndex:-1,...y,ref:k,onKeyDown:M})});function v(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function p(e,t){for(let n of e)if(!function(e,t){let{upTo:n}=t;if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===n||e!==n);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function h(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}f.displayName="FocusScope";var m=(r=[],{add(e){let t=r[0];e!==t&&(null==t||t.pause()),(r=g(r,e)).unshift(e)},remove(e){var t;null===(t=(r=g(r,e))[0])||void 0===t||t.resume()}});function g(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}},83832:function(e,t,n){n.d(t,{h:function(){return u}});var r=n(2265),o=n(54887),a=n(66840),c=n(61188),i=n(57437),u=r.forwardRef((e,t)=>{var n,u;let{container:l,...d}=e,[s,f]=r.useState(!1);(0,c.b)(()=>f(!0),[]);let v=l||s&&(null===(u=globalThis)||void 0===u?void 0:null===(n=u.document)||void 0===n?void 0:n.body);return v?o.createPortal((0,i.jsx)(a.WV.div,{...d,ref:t}),v):null});u.displayName="Portal"}}]);