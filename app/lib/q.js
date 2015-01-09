/*!
 *
 * Copyright 2009-2012 Kris Kowal under the terms of the MIT
 * license found at http://github.com/kriskowal/q/raw/master/LICENSE
 *
 * With parts by Tyler Close
 * Copyright 2007-2009 Tyler Close under the terms of the MIT X license found
 * at http://www.opensource.org/licenses/mit-license.html
 * Forked at ref_send.js version: 2009-05-11
 *
 * With parts by Mark Miller
 * Copyright (C) 2011 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
(function(e){"use strict";if(typeof bootstrap==="function"){bootstrap("promise",e)}else if(typeof exports==="object"&&typeof module==="object"){module.exports=e()}else if(typeof define==="function"&&define.amd){define(e)}else if(typeof ses!=="undefined"){if(!ses.ok()){return}else{ses.makeQ=e}}else if(typeof self!=="undefined"){self.Q=e()}else{throw new Error("This environment was not anticiapted by Q. Please file a bug.")}})(function(){"use strict";function u(e){return function(){return o.apply(e,arguments)}}function m(e){return e===Object(e)}function g(e){return v(e)==="[object StopIteration]"||e instanceof y}function w(t,n){if(e&&n.stack&&typeof t==="object"&&t!==null&&t.stack&&t.stack.indexOf(b)===-1){var r=[];for(var i=n;!!i;i=i.source){if(i.stack){r.unshift(i.stack)}}r.unshift(t.stack);var s=r.join("\n"+b+"\n");t.stack=E(s)}}function E(e){var t=e.split("\n");var n=[];for(var r=0;r<t.length;++r){var i=t[r];if(!T(i)&&!S(i)&&i){n.push(i)}}return n.join("\n")}function S(e){return e.indexOf("(module.js:")!==-1||e.indexOf("(node.js:")!==-1}function x(e){var t=/at .+ \((.+):(\d+):(?:\d+)\)$/.exec(e);if(t){return[t[1],Number(t[2])]}var n=/at ([^ ]+):(\d+):(?:\d+)$/.exec(e);if(n){return[n[1],Number(n[2])]}var r=/.*@(.+):(\d+)$/.exec(e);if(r){return[r[1],Number(r[2])]}}function T(e){var t=x(e);if(!t){return false}var i=t[0];var s=t[1];return i===r&&s>=n&&s<=ot}function N(){if(!e){return}try{throw new Error}catch(t){var n=t.stack.split("\n");var i=n[0].indexOf("@")>0?n[1]:n[2];var s=x(i);if(!s){return}r=s[0];return s[1]}}function C(e,t,n){return function(){if(typeof console!=="undefined"&&typeof console.warn==="function"){console.warn(t+" is deprecated, use "+n+" instead.",(new Error("")).stack)}return e.apply(e,arguments)}}function k(e){if(e instanceof M){return e}if(H(e)){return $(e)}else{return V(e)}}function L(){function u(e){r=e;s.source=e;f(t,function(t,n){k.nextTick(function(){e.promiseDispatch.apply(e,n)})},void 0);t=void 0;n=void 0}var t=[],n=[],r;var i=h(L.prototype);var s=h(M.prototype);s.promiseDispatch=function(e,i,s){var o=a(arguments);if(t){t.push(o);if(i==="when"&&s[1]){n.push(s[1])}}else{k.nextTick(function(){r.promiseDispatch.apply(r,o)})}};s.valueOf=function(){if(t){return s}var e=D(r);if(P(e)){r=e}return e};s.inspect=function(){if(!r){return{state:"pending"}}return r.inspect()};if(k.longStackSupport&&e){try{throw new Error}catch(o){s.stack=o.stack.substring(o.stack.indexOf("\n")+1)}}i.promise=s;i.resolve=function(e){if(r){return}u(k(e))};i.fulfill=function(e){if(r){return}u(V(e))};i.reject=function(e){if(r){return}u(X(e))};i.notify=function(e){if(r){return}f(n,function(t,n){k.nextTick(function(){n(e)})},void 0)};return i}function A(e){if(typeof e!=="function"){throw new TypeError("resolver must be a function.")}var t=L();try{e(t.resolve,t.reject,t.notify)}catch(n){t.reject(n)}return t.promise}function O(e){return A(function(t,n){for(var r=0,i=e.length;r<i;r++){k(e[r]).then(t,n)}})}function M(e,t,n){if(t===void 0){t=function(e){return X(new Error("Promise does not support operation: "+e))}}if(n===void 0){n=function(){return{state:"unknown"}}}var r=h(M.prototype);r.promiseDispatch=function(n,i,s){var o;try{if(e[i]){o=e[i].apply(r,s)}else{o=t.call(r,i,s)}}catch(u){o=X(u)}if(n){n(o)}};r.inspect=n;if(n){var i=n();if(i.state==="rejected"){r.exception=i.reason}r.valueOf=function(){var e=n();if(e.state==="pending"||e.state==="rejected"){return r}return e.value}}return r}function _(e,t,n,r){return k(e).then(t,n,r)}function D(e){if(P(e)){var t=e.inspect();if(t.state==="fulfilled"){return t.value}}return e}function P(e){return e instanceof M}function H(e){return m(e)&&typeof e.then==="function"}function B(e){return P(e)&&e.inspect().state==="pending"}function j(e){return!P(e)||e.inspect().state==="fulfilled"}function F(e){return P(e)&&e.inspect().state==="rejected"}function U(){I.length=0;q.length=0;if(!R){R=true}}function z(e,t){if(!R){return}q.push(e);if(t&&typeof t.stack!=="undefined"){I.push(t.stack)}else{I.push("(no stack) "+t)}}function W(e){if(!R){return}var t=l(q,e);if(t!==-1){q.splice(t,1);I.splice(t,1)}}function X(e){var t=M({when:function(t){if(t){W(this)}return t?t(e):this}},function(){return this},function(){return{state:"rejected",reason:e}});z(t,e);return t}function V(e){return M({when:function(){return e},get:function(t){return e[t]},set:function(t,n){e[t]=n},"delete":function(t){delete e[t]},post:function(t,n){if(t===null||t===void 0){return e.apply(void 0,n)}else{return e[t].apply(e,n)}},apply:function(t,n){return e.apply(t,n)},keys:function(){return d(e)}},void 0,function(){return{state:"fulfilled",value:e}})}function $(e){var t=L();k.nextTick(function(){try{e.then(t.resolve,t.reject,t.notify)}catch(n){t.reject(n)}});return t.promise}function J(e){return M({isDef:function(){}},function(n,r){return et(e,n,r)},function(){return k(e).inspect()})}function K(e,t,n){return k(e).spread(t,n)}function Q(e){return function(){function t(e,t){var s;if(typeof StopIteration==="undefined"){try{s=n[e](t)}catch(o){return X(o)}if(s.done){return k(s.value)}else{return _(s.value,r,i)}}else{try{s=n[e](t)}catch(o){if(g(o)){return k(o.value)}else{return X(o)}}return _(s,r,i)}}var n=e.apply(this,arguments);var r=t.bind(t,"next");var i=t.bind(t,"throw");return r()}}function G(e){k.done(k.async(e)())}function Y(e){throw new y(e)}function Z(e){return function(){return K([this,tt(arguments)],function(t,n){return e.apply(t,n)})}}function et(e,t,n){return k(e).dispatch(t,n)}function tt(e){return _(e,function(e){var t=0;var n=L();f(e,function(r,i,s){var o;if(P(i)&&(o=i.inspect()).state==="fulfilled"){e[s]=o.value}else{++t;_(i,function(r){e[s]=r;if(--t===0){n.resolve(e)}},n.reject,function(e){n.notify({index:s,value:e})})}},void 0);if(t===0){n.resolve(e)}return n.promise})}function nt(e){return _(e,function(e){e=c(e,k);return _(tt(c(e,function(e){return _(e,i,i)})),function(){return e})})}function rt(e){return k(e).allSettled()}function it(e,t){return k(e).then(void 0,void 0,t)}function st(e,t){return k(e).nodeify(t)}var e=false;try{throw new Error}catch(t){e=!!t.stack}var n=N();var r;var i=function(){};var s=function(){function o(){while(e.next){e=e.next;var t=e.task;e.task=void 0;var r=e.domain;if(r){e.domain=void 0;r.enter()}try{t()}catch(s){if(i){if(r){r.exit()}setTimeout(o,0);if(r){r.enter()}throw s}else{setTimeout(function(){throw s},0)}}if(r){r.exit()}}n=false}var e={task:void 0,next:null};var t=e;var n=false;var r=void 0;var i=false;s=function(e){t=t.next={task:e,domain:i&&process.domain,next:null};if(!n){n=true;r()}};if(typeof process!=="undefined"&&process.nextTick){i=true;r=function(){process.nextTick(o)}}else if(typeof setImmediate==="function"){if(typeof window!=="undefined"){r=setImmediate.bind(window,o)}else{r=function(){setImmediate(o)}}}else if(typeof MessageChannel!=="undefined"){var u=new MessageChannel;u.port1.onmessage=function(){r=a;u.port1.onmessage=o;o()};var a=function(){u.port2.postMessage(0)};r=function(){setTimeout(o,0);a()}}else{r=function(){setTimeout(o,0)}}return s}();var o=Function.call;var a=u(Array.prototype.slice);var f=u(Array.prototype.reduce||function(e,t){var n=0,r=this.length;if(arguments.length===1){do{if(n in this){t=this[n++];break}if(++n>=r){throw new TypeError}}while(1)}for(;n<r;n++){if(n in this){t=e(t,this[n],n)}}return t});var l=u(Array.prototype.indexOf||function(e){for(var t=0;t<this.length;t++){if(this[t]===e){return t}}return-1});var c=u(Array.prototype.map||function(e,t){var n=this;var r=[];f(n,function(i,s,o){r.push(e.call(t,s,o,n))},void 0);return r});var h=Object.create||function(e){function t(){}t.prototype=e;return new t};var p=u(Object.prototype.hasOwnProperty);var d=Object.keys||function(e){var t=[];for(var n in e){if(p(e,n)){t.push(n)}}return t};var v=u(Object.prototype.toString);var y;if(typeof ReturnValue!=="undefined"){y=ReturnValue}else{y=function(e){this.value=e}}var b="From previous event:";k.resolve=k;k.nextTick=s;k.longStackSupport=false;if(typeof process==="object"&&process&&process.env&&process.env.Q_DEBUG){k.longStackSupport=true}k.defer=L;L.prototype.makeNodeResolver=function(){var e=this;return function(t,n){if(t){e.reject(t)}else if(arguments.length>2){e.resolve(a(arguments,1))}else{e.resolve(n)}}};k.Promise=A;k.promise=A;A.race=O;A.all=tt;A.reject=X;A.resolve=k;k.passByCopy=function(e){return e};M.prototype.passByCopy=function(){return this};k.join=function(e,t){return k(e).join(t)};M.prototype.join=function(e){return k([this,e]).spread(function(e,t){if(e===t){return e}else{throw new Error("Can't join: not the same: "+e+" "+t)}})};k.race=O;M.prototype.race=function(){return this.then(k.race)};k.makePromise=M;M.prototype.toString=function(){return"[object Promise]"};M.prototype.then=function(e,t,n){function o(t){try{return typeof e==="function"?e(t):t}catch(n){return X(n)}}function u(e){if(typeof t==="function"){w(e,r);try{return t(e)}catch(n){return X(n)}}return X(e)}function a(e){return typeof n==="function"?n(e):e}var r=this;var i=L();var s=false;k.nextTick(function(){r.promiseDispatch(function(e){if(s){return}s=true;i.resolve(o(e))},"when",[function(e){if(s){return}s=true;i.resolve(u(e))}])});r.promiseDispatch(void 0,"when",[void 0,function(e){var t;var n=false;try{t=a(e)}catch(r){n=true;if(k.onerror){k.onerror(r)}else{throw r}}if(!n){i.notify(t)}}]);return i.promise};k.tap=function(e,t){return k(e).tap(t)};M.prototype.tap=function(e){e=k(e);return this.then(function(t){return e.fcall(t).thenResolve(t)})};k.when=_;M.prototype.thenResolve=function(e){return this.then(function(){return e})};k.thenResolve=function(e,t){return k(e).thenResolve(t)};M.prototype.thenReject=function(e){return this.then(function(){throw e})};k.thenReject=function(e,t){return k(e).thenReject(t)};k.nearer=D;k.isPromise=P;k.isPromiseAlike=H;k.isPending=B;M.prototype.isPending=function(){return this.inspect().state==="pending"};k.isFulfilled=j;M.prototype.isFulfilled=function(){return this.inspect().state==="fulfilled"};k.isRejected=F;M.prototype.isRejected=function(){return this.inspect().state==="rejected"};var I=[];var q=[];var R=true;k.resetUnhandledRejections=U;k.getUnhandledReasons=function(){return I.slice()};k.stopUnhandledRejectionTracking=function(){U();R=false};U();k.reject=X;k.fulfill=V;k.master=J;k.spread=K;M.prototype.spread=function(e,t){return this.all().then(function(t){return e.apply(void 0,t)},t)};k.async=Q;k.spawn=G;k["return"]=Y;k.promised=Z;k.dispatch=et;M.prototype.dispatch=function(e,t){var n=this;var r=L();k.nextTick(function(){n.promiseDispatch(r.resolve,e,t)});return r.promise};k.get=function(e,t){return k(e).dispatch("get",[t])};M.prototype.get=function(e){return this.dispatch("get",[e])};k.set=function(e,t,n){return k(e).dispatch("set",[t,n])};M.prototype.set=function(e,t){return this.dispatch("set",[e,t])};k.del=k["delete"]=function(e,t){return k(e).dispatch("delete",[t])};M.prototype.del=M.prototype["delete"]=function(e){return this.dispatch("delete",[e])};k.mapply=k.post=function(e,t,n){return k(e).dispatch("post",[t,n])};M.prototype.mapply=M.prototype.post=function(e,t){return this.dispatch("post",[e,t])};k.send=k.mcall=k.invoke=function(e,t){return k(e).dispatch("post",[t,a(arguments,2)])};M.prototype.send=M.prototype.mcall=M.prototype.invoke=function(e){return this.dispatch("post",[e,a(arguments,1)])};k.fapply=function(e,t){return k(e).dispatch("apply",[void 0,t])};M.prototype.fapply=function(e){return this.dispatch("apply",[void 0,e])};k["try"]=k.fcall=function(e){return k(e).dispatch("apply",[void 0,a(arguments,1)])};M.prototype.fcall=function(){return this.dispatch("apply",[void 0,a(arguments)])};k.fbind=function(e){var t=k(e);var n=a(arguments,1);return function(){return t.dispatch("apply",[this,n.concat(a(arguments))])}};M.prototype.fbind=function(){var e=this;var t=a(arguments);return function(){return e.dispatch("apply",[this,t.concat(a(arguments))])}};k.keys=function(e){return k(e).dispatch("keys",[])};M.prototype.keys=function(){return this.dispatch("keys",[])};k.all=tt;M.prototype.all=function(){return tt(this)};k.allResolved=C(nt,"allResolved","allSettled");M.prototype.allResolved=function(){return nt(this)};k.allSettled=rt;M.prototype.allSettled=function(){return this.then(function(e){return tt(c(e,function(e){function t(){return e.inspect()}e=k(e);return e.then(t,t)}))})};k.fail=k["catch"]=function(e,t){return k(e).then(void 0,t)};M.prototype.fail=M.prototype["catch"]=function(e){return this.then(void 0,e)};k.progress=it;M.prototype.progress=function(e){return this.then(void 0,void 0,e)};k.fin=k["finally"]=function(e,t){return k(e)["finally"](t)};M.prototype.fin=M.prototype["finally"]=function(e){e=k(e);return this.then(function(t){return e.fcall().then(function(){return t})},function(t){return e.fcall().then(function(){throw t})})};k.done=function(e,t,n,r){return k(e).done(t,n,r)};M.prototype.done=function(e,t,n){var r=function(e){k.nextTick(function(){w(e,i);if(k.onerror){k.onerror(e)}else{throw e}})};var i=e||t||n?this.then(e,t,n):this;if(typeof process==="object"&&process&&process.domain){r=process.domain.bind(r)}i.then(void 0,r)};k.timeout=function(e,t,n){return k(e).timeout(t,n)};M.prototype.timeout=function(e,t){var n=L();var r=setTimeout(function(){if(!t||"string"===typeof t){t=new Error(t||"Timed out after "+e+" ms");t.code="ETIMEDOUT"}n.reject(t)},e);this.then(function(e){clearTimeout(r);n.resolve(e)},function(e){clearTimeout(r);n.reject(e)},n.notify);return n.promise};k.delay=function(e,t){if(t===void 0){t=e;e=void 0}return k(e).delay(t)};M.prototype.delay=function(e){return this.then(function(t){var n=L();setTimeout(function(){n.resolve(t)},e);return n.promise})};k.nfapply=function(e,t){return k(e).nfapply(t)};M.prototype.nfapply=function(e){var t=L();var n=a(e);n.push(t.makeNodeResolver());this.fapply(n).fail(t.reject);return t.promise};k.nfcall=function(e){var t=a(arguments,1);return k(e).nfapply(t)};M.prototype.nfcall=function(){var e=a(arguments);var t=L();e.push(t.makeNodeResolver());this.fapply(e).fail(t.reject);return t.promise};k.nfbind=k.denodeify=function(e){var t=a(arguments,1);return function(){var n=t.concat(a(arguments));var r=L();n.push(r.makeNodeResolver());k(e).fapply(n).fail(r.reject);return r.promise}};M.prototype.nfbind=M.prototype.denodeify=function(){var e=a(arguments);e.unshift(this);return k.denodeify.apply(void 0,e)};k.nbind=function(e,t){var n=a(arguments,2);return function(){function s(){return e.apply(t,arguments)}var r=n.concat(a(arguments));var i=L();r.push(i.makeNodeResolver());k(s).fapply(r).fail(i.reject);return i.promise}};M.prototype.nbind=function(){var e=a(arguments,0);e.unshift(this);return k.nbind.apply(void 0,e)};k.nmapply=k.npost=function(e,t,n){return k(e).npost(t,n)};M.prototype.nmapply=M.prototype.npost=function(e,t){var n=a(t||[]);var r=L();n.push(r.makeNodeResolver());this.dispatch("post",[e,n]).fail(r.reject);return r.promise};k.nsend=k.nmcall=k.ninvoke=function(e,t){var n=a(arguments,2);var r=L();n.push(r.makeNodeResolver());k(e).dispatch("post",[t,n]).fail(r.reject);return r.promise};M.prototype.nsend=M.prototype.nmcall=M.prototype.ninvoke=function(e){var t=a(arguments,1);var n=L();t.push(n.makeNodeResolver());this.dispatch("post",[e,t]).fail(n.reject);return n.promise};k.nodeify=st;M.prototype.nodeify=function(e){if(e){this.then(function(t){k.nextTick(function(){e(null,t)})},function(t){k.nextTick(function(){e(t)})})}else{return this}};var ot=N();return k})