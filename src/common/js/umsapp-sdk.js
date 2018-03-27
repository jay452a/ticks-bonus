!(function (t) { function e (r) { if (n[r]) return n[r].exports; var o = n[r] = {exports: {}, id: r, loaded: !1}; return t[r].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports } var n = {}; return e.m = t, e.c = n, e.p = '', e(0) }([function (t, e, n) { 'use strict'; function r (t) { return t && t.__esModule ? t:{default: t} }Object.defineProperty(e, '__esModule', {value: !0}); var o = n(38), i = r(o), u = n(61), a = r(u), c = n(57), f = r(c), s = n(56), l = r(s), p = n(20), d = r(p), v = n(37), h = r(v), m = n(55), y = r(m), g = n(54), w = r(g); e.default = window.EChat = window.UmsApp = (function (){function t (t,e){h.default.ulog("pushCb url:"+t),t=h.default.getUri(t),t=t.replace("action","data");var n=v.get(t);n||(n=[],v.set(t,n)),n.length>=10&&n.splice(0,n.length),n.push(e),h.default.ulog(v)}function e (e,n,r){for(var f in arguments){var v=arguments[f];"string"==typeof v&&(e=v),"object"===("undefined"==typeof v?"undefined":(0,a.default)(v))&&(n=v),"function"==typeof v&&(r=v)}if(n||(n={}),!e)return void console.error('Send param "url" required.');if(h.default.ulog("H5 send request.url:"+e),!l.default.validUrl(e))return console.error("invalid url."),!1;d.default.onBeforeSend&&d.default.onBeforeSend(n);var m=h.default.mergeParams(e,n);if(h.default.ulog("H5 send request url :"+m+",params:"+(0,i.default)(n)),h.default.ulog(o),u)if(h.default.ulog("Is umsapp platform, make sure ios or android."),c){h.default.ulog("Before H5 send request to android app.");try{__android.receive(m,(0,i.default)(n))}catch(t){__android.receive(m)}h.default.ulog("After H5 send request to android app.")}else s?(h.default.ulog("Before H5 send request to IOS app."),document.location=m,h.default.ulog("After H5 send request to IOS app.")):console.error("Can not found ios and android app");else p?window.top&&window.top.receive&&(h.default.ulog("Before H5 send Top Frame window."),window.top.receive(e,n,r),h.default.ulog("After H5 send Top Frame window.")):console.error("Platform Not Supported!");return r&&t(e,r),d.default.onAfterSend&&d.default.onAfterSend(),!0}function n (t,e){if(h.default.ulog("Before App receive ur:"+t+",data:"+(0,i.default)(e)),!t)return console.warn("Android or Ios,top frame call receive param error, url is required."),!1;e||(e={});var n=null,o=e;e.success===!1&&(n={errcode:e.errcode||4e3,errmsg:e.errmsg||"APP跑到外星去了."});var u=v.get(t);if(u){var a=u.shift();if(a)return h.default.ulog("Invoke callback  ur:"+t+",data:"+(0,i.default)(o)),d.default.onBeforeCallBack&&d.default.onBeforeCallBack(t,o),a(n,o),d.default.onAfterCallBack&&d.default.onAfterCallBack(),!0;r(t,e)}else r(t,e);return h.default.ulog("After App receive ur:"+t),!0}function r (t,e){var n=d.default.vueVm;n?(h.default.ulog("vm broadcast url:"+t+",data:"+(0,i.default)(e)),n.$broadcast(t,e)):d.default.rootNode.trigger(t,e)}h.default.ulog("Welcome use UmsApp sdk.If you need help,please contact umsapp team.");var o=navigator.userAgent,u=o.match("corp_([a-z]+)_app"),c=u?"android"===u[1]:o.indexOf("Android")>-1,s=u?"ios"===u[1]:!!o.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),p=/chrome/i.test(o)&&/webkit/i.test(o)&&/mozilla/i.test(o),v=new f.default,m={};return(0,w.default)(m),y.default.mixTo(d.default.rootNode),m.config=d.default,m.config.setRootNode=function (t){d.default.rootNode=t,y.default.mixTo(t)},m.utils=h.default,m.view={},m.data={},m.action={},d.default.crossable&&window.addEventListener("message",function (t){var e=t.data,n=e.protocal;return n?void m.receive(n,e.data):(console.warn("window.pushMessage data invalid."),!1)},!1),l.default.umsappView.forEach(function (t){m.view[h.default.camelize(t)]=function (n,r){"function"==typeof n&&(r=n,n={}),e(l.default.joinView(t),n,r)}}),l.default.umsappAction.forEach(function (t){m.action[h.default.camelize(t)]=function (n,r){"function"==typeof n&&(r=n,n={}),e(l.default.joinAction(t),n,r)}}),m.action.fileProgress=function (t,e){d.default.rootNode.on(l.default.umsappFileProgressData,function (t,n){e&&e(t,n)})},m.action.fileUploadProgress=function (t,e){d.default.rootNode.on(l.default.umsappFileUploadProgressdata,function (t,n){e&&e(t,n)})},m.action.fileDownloadProgress=function (t,e){d.default.rootNode.on(l.default.umsappFileDownloadProgressdata,function (t,n){e&&e(t,n)})},m.action.closeVideo=function (t,e){d.default.rootNode.on(l.default.umsappCloseVideo,function (t,n){e&&e(t,n)})},m.view.webview=function (t,n,r){"function"==typeof n&&(r=n,n={}),n.url&&console.warn("params already have url."),n.url=t,e(l.default.umsappWebview,n,r)},m.view.urlView=function (t,e,n){if(l.default.isView(t))m.send(t,e,n);else{if(!l.default.isWebView(t))throw new Error("Invalid url:"+t);m.view.webview(t,e,n)}},console.log("==========="),m.send=e,m.receive=n,m.isUmsApp=u,m.events=y.default,m}()) }, function (t, e, n) { var r = n(30)('wks'), o = n(19), i = n(2).Symbol, u = 'function'===typeof i, a = t.exports = function (t) { return r[t] || (r[t] = u && i[t] || (u ? i:o)('Symbol.' + t)) }; a.store = r }, function (t, e) { var n = t.exports = 'undefined' != typeof window && window.Math == Math ? window:'undefined' != typeof self && self.Math == Math ? self:Function('return this')(); 'number' == typeof __g && (__g = n) }, function (t, e) { var n = t.exports = {version: '2.4.0'}; 'number'===typeof __e && (__e = n) }, function (t, e, n) { t.exports = !n(10)(function () { return Object.defineProperty({},"a",{get:function (){return 7}}).a!=7 }) }, function (t, e, n) { var r = n(9), o = n(42), i = n(34), u = Object.defineProperty; e.f = n(4) ? Object.defineProperty:function (t, e, n) { if (r(t), e = i(e, !0), r(n), o)try { return u(t, e, n) }catch (t) {}if ('get' in n || 'set' in n) throw TypeError('Accessors not supported!'); return 'value' in n && (t[e] = n.value), t } }, function (t, e, n) { var r = n(5), o = n(17); t.exports = n(4) ? function (t, e, n) { return r.f(t, e, o(1, n)) }:function (t, e, n) { return t[e] = n, t } }, function (t, e) { var n = {}.hasOwnProperty; t.exports = function (t, e) { return n.call(t, e) } }, function (t, e, n) { var r = n(43), o = n(16); t.exports = function (t) { return r(o(t)) } }, function (t, e, n) { var r = n(11); t.exports = function (t) { if (!r(t)) throw TypeError(t + ' is not an object!'); return t } }, function (t, e) { t.exports = function (t) { try { return !!t() } catch(t) { return !0 } } }, function (t, e) { t.exports = function (t) { return 'object' == typeof t ? t!==null:'function'===typeof t } }, function (t, e, n) { var r = n(2), o = n(3), i = n(15), u = n(6), a = 'prototype', c = function (t, e, n) { var f, s, l, p = t & c.F, d = t & c.G, v = t & c.S, h = t & c.P, m = t & c.B, y = t & c.W, g = d ? o:o[e] || (o[e] = {}), w = g[a], b = d ? r:v ? r[e]:(r[e] || {})[a]; d && (n = e); for (f in n)s = !p && b && void 0 !== b[f], s && f in g || (l = s ? b[f]:n[f], g[f] = d && 'function' != typeof b[f] ? n[f]:m && s ? i(l, r):y && b[f] == l ? (function (t){var e=function (e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[a]=t[a],e}(l)):h && 'function'===typeof l ? i(Function.call, l):l, h && ((g.virtual || (g.virtual = {}))[f] = l, t & c.R && w && !w[f] && u(w, f, l))) }; c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, t.exports = c }, function (t, e) { t.exports = {} }, function (t, e, n) { var r = n(48), o = n(22); t.exports = Object.keys || function (t) { return r(t, o) } }, function (t, e, n) { var r = n(67); t.exports = function (t, e, n) { if (r(t), void 0 === e) return t; switch (n) { case 1:return function (n) { return t.call(e, n) }; case 2:return function (n, r) { return t.call(e, n, r) }; case 3:return function (n, r, o) { return t.call(e, n, r, o) } } return function () { return t.apply(e, arguments) } } }, function (t, e) { t.exports = function (t) { if (void 0 == t) throw TypeError("Can't call method on  " + t); return t } }, function (t, e) { t.exports = function (t, e) { return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e} } }, function (t, e, n) { var r = n(5).f, o = n(7), i = n(1)('toStringTag'); t.exports = function (t, e, n) { t && !o(t = n ? t:t.prototype, i) && r(t, i, {configurable: !0, value: e}) } }, function (t, e) { var n = 0, r = Math.random(); t.exports = function (t) { return 'Symbol('.concat(void 0 === t ? '':t, ')_', (++n + r).toString(36)) } }, function (t, e) { 'use strict'; Object.defineProperty(e, '__esModule', {value: !0}); var n = !1, r = !0, o = !0, i = 'https://dev-app.ums86.com/js/lib/vconsole.min.js', u = 'umsapp', a = 'umsapp'; e.default = {sdkName: a, debug: n, showVConsole: o, crossable: r, vconsolePath: i, userAgentKey: u, vueVm: null, rootNode: document.querySelector('body'), init: function () {}, onBeforeSend: function (t) { console.log('onBeforeSend....') }, onAfterSend: function () { console.log('onAfterSend...') }, onBeforeCallBack: function () { console.log('onBeforeCallBack...') }, onAfterCallBack: function () { console.log('onAfterCallBack....') }} }, function (t, e) { var n = {}.toString; t.exports = function (t) { return n.call(t).slice(8, -1) } }, function (t, e) { t.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',') }, function (t, e, n) { var r = n(15), o = n(80), i = n(79), u = n(9), a = n(32), c = n(91), f = {}, s = {}, e = t.exports = function (t, e, n, l, p) { var d, v, h, m, y = p ? function () { return t }:c(t), g = r(n, l, e ? 2:1), w = 0; if ('function' != typeof y) throw TypeError(t + ' is not iterable!'); if (i(y)) { for (d = a(t.length); d > w; w++)if (m = e ? g(u(v = t[w])[0], v[1]):g(t[w]), m === f || m === s) return m } else for (h = y.call(t); !(v = h.next()).done;) if(m = o(h, g, v.value, e), m === f || m === s) return m }; e.BREAK = f, e.RETURN = s }, function (t, e, n) { 'use strict'; var r = n(25), o = n(12), i = n(50), u = n(6), a = n(7), c = n(13), f = n(81), s = n(18), l = n(86), p = n(1)('iterator'), d = !([].keys && 'next' in [].keys()), v = '@@iterator', h = 'keys', m = 'values', y = function () { return this }; t.exports = function (t, e, n, g, w, b, _) { f(n, e, g); var x, O, S, P = function (t) { if (!d && t in E) return E[t]; switch (t) { case h:return function () { return new n(this, t) }; case m:return function () { return new n(this, t) } } return function () { return new n(this, t) } }, k = e + ' Iterator', A = w == m, j = !1, E = t.prototype, M = E[p] || E[v] || w && E[w], N = M || P(w), C = w ? A ? P('entries'):N:void 0, F = 'Array' == e ? E.entries || M:M; if (F && (S = l(F.call(new t())), S !== Object.prototype && (s(S, k, !0), r || a(S, p) || u(S, p, y))), A && M && M.name !== m && (j = !0, N = function () { return M.call(this) }), r && !_ || !d && !j && E[p] || u(E, p, N), c[e] = N, c[k] = y, w) if(x = {values: A ? N:P(m), keys: b ? N:P(h), entries: C}, _) for(O in x)O in E || i(E, O, x[O]); else o(o.P + o.F * (d || j), e, x); return x } }, function (t, e) { t.exports = !0 }, function (t, e, n) { var r = n(19)('meta'), o = n(11), i = n(7), u = n(5).f, a = 0, c = Object.isExtensible || function () { return !0 }, f = !n(10)(function () { return c(Object.preventExtensions({})) }), s = function (t) { u(t, r, {value: {i: 'O' + ++a, w: {}}}) }, l = function (t, e) { if (!o(t))return 'symbol'===typeof t ? t:('string'===typeof t ? 'S':'P') + t; if (!i(t, r)) { if (!c(t)) return'F'; if (!e)return 'E'; s(t) } return t[r].i }, p = function (t, e) { if (!i(t, r)) { if (!c(t)) return!0; if (!e) return!1; s(t) } return t[r].w }, d = function (t) { return f && v.NEED && c(t) && !i(t, r) && s(t), t }, v = t.exports = {KEY: r, NEED: !1, fastKey: l, getWeak: p, onFreeze: d} }, function (t, e, n) { var r = n(9), o = n(83), i = n(22), u = n(29)('IE_PROTO'), a = function () {}, c = 'prototype', f = function () { var t, e = n(41)('iframe'), r = i.length, o = '<', u = '>'; for (e.style.display = 'none', n(78).appendChild(e), e.src = 'javascript:', t = e.contentWindow.document, t.open(), t.write(o + 'script' + u + 'document.F=Object' + o + '/script' + u), t.close(), f = t.F; r--;) delete f[c][i[r]]; return f() }; t.exports = Object.create || function (t, e) { var n; return t!==null ? (a[c] = r(t), n = new a(), a[c] = null, n[u] = t):n = f(), void 0 === e ? n:o(n, e) } }, function (t, e) { e.f = {}.propertyIsEnumerable }, function (t, e, n) { var r = n(30)('keys'), o = n(19); t.exports = function (t) { return r[t] || (r[t] = o(t)) } }, function (t, e, n) { var r = n(2), o = '__core-js_shared__', i = r[o] || (r[o] = {}); t.exports = function (t) { return i[t] || (i[t] = {}) } }, function (t, e) { var n = Math.ceil, r = Math.floor; t.exports = function (t) { return isNaN(t = +t) ? 0:(t > 0 ? r:n)(t) } }, function (t, e, n) { var r = n(31), o = Math.min; t.exports = function (t) { return t > 0 ? o(r(t), 9007199254740991):0 } }, function (t, e, n) { var r = n(16); t.exports = function (t) { return Object(r(t)) } }, function (t, e, n) { var r = n(11); t.exports = function (t, e) { if (!r(t)) return t; var n, o; if (e && 'function' == typeof (n = t.toString) && !r(o = n.call(t))) return o; if ('function' == typeof (n = t.valueOf) && !r(o = n.call(t))) return o; if (!e && 'function'===typeof (n = t.toString) && !r(o = n.call(t))) return o; throw TypeError("Can't convert object to primitive value") } }, function (t, e, n) { var r = n(2), o = n(3), i = n(25), u = n(36), a = n(5).f; t.exports = function (t) { var e = o.Symbol || (o.Symbol = i ? {}:r.Symbol || {}); '_' == t.charAt(0) || t in e || a(e, t, {value: u.f(t)}) } }, function (t, e, n) { e.f = n(1) }, function (t, e, n) { 'use strict'; function r (t) { return t && t.__esModule ? t:{default: t} }Object.defineProperty(e, '__esModule', {value: !0}); var o = n(38), i = r(o), u = n(20), a = r(u); e.default = {camelize: function (t) { return t.replace(/-+(.)?/g, function (t, e) { return e ? e.toUpperCase():'' }) }, ulog: function (t, e) { a.default.debug && (e ? console.error(t):console.log(t)) }, getScriptSrcParms: function (t) { for (var e = document.scripts, n = 0; n < e.length; n++) { var r = e[n]; if (r.src.indexOf(t) !== -1) return this.getUrlParams(r.src) } }, getUri: function (t) { var e = t.indexOf('?'); return e !== -1 && (t = t.substring(0, e)), t }, setUrlParams: function (t, e) { var n = !1; for (var r in e) { n ? t += '&':(t += '?', n = !0); var o = e[r]; (e[r] instanceof Object || e[r] instanceof Array) && (o = (0, i.default)(e[r])), t += r + '=' + o } return t }, getUrlParams: function (t) { var e = t.indexOf('?'), n = {}; if (e !== -1) { var r = t.substring(e + 1).split('&'); r.forEach(function (t) { if (t.indexOf('=') !== -1) { var e = t.split('='); e[1] && (n[e[0]] = e[1]) } }) } return n }, mergeParams: function (t, e) { var n = t.indexOf('?'); if (n !== -1) { var r = t.substring(n + 1).split('&'); r.forEach(function (t) { if (t.indexOf('=') !== -1) { var n = t.split('='); n[1] && (e[n[0]] = n[1]) } }) } return this.setUrlParams(this.getUri(t), e) }, getLocationParams: function () { return this.getUrlParams(document.location.href) }} }, function (t, e, n) { t.exports = {default: n(62), __esModule: !0} }, function (t, e) { t.exports = function (t, e, n, r) { if (!(t instanceof e) || void 0 !== r && r in t) throw TypeError(n + ': incorrect invocation!'); return t } }, function (t, e, n) { var r = n(21), o = n(1)('toStringTag'), i = 'Arguments' == r(function () { return arguments }()), u = function (t, e) { try { return t[e] }catch (t) {} }; t.exports = function (t) { var e, n, a; return void 0 === t ? 'Undefined':t===null ? 'Null':'string' == typeof (n = u(e = Object(t), o)) ? n:i ? r(e):'Object' == (a = r(e)) && 'function' == typeof e.callee ? 'Arguments':a } }, function (t, e, n) { var r = n(11), o = n(2).document, i = r(o) && r(o.createElement); t.exports = function (t) { return i ? o.createElement(t):{} } }, function (t, e, n) { t.exports = !n(4) && !n(10)(function () { return Object.defineProperty(n(41)("div"),"a",{get:function (){return 7}}).a!=7 }) }, function (t, e, n) { var r = n(21); t.exports = Object('z').propertyIsEnumerable(0) ? Object:function (t) { return 'String' == r(t) ? t.split(''):Object(t) } }, function (t, e, n) { var r = n(21); t.exports = Array.isArray || function (t) { return 'Array' == r(t) } }, function (t, e) { t.exports = function (t, e) { return {value: e, done: !!t} } }, function (t, e, n) { var r = n(48), o = n(22).concat('length', 'prototype'); e.f = Object.getOwnPropertyNames || function (t) { return r(t, o) } }, function (t, e) { e.f = Object.getOwnPropertySymbols }, function (t, e, n) { var r = n(7), o = n(8), i = n(70)(!1), u = n(29)('IE_PROTO'); t.exports = function (t, e) { var n, a = o(t), c = 0, f = []; for (n in a)n != u && r(a, n) && f.push(n); for (;e.length > c;)r(a, n = e[c++]) && (~i(f, n) || f.push(n)); return f } }, function (t, e, n) { var r = n(6); t.exports = function (t, e, n) { for (var o in e)n && t[o] ? t[o] = e[o]:r(t, o, e[o]); return t } }, function (t, e, n) { t.exports = n(6) }, function (t, e) {}, function (t, e, n) { 'use strict'; var r = n(89)(!0); n(24)(String, 'String', function (t) { this._t = String(t), this._i = 0 }, function () { var t, e = this._t, n = this._i; return n >= e.length ? {value: void 0, done: !0}:(t = r(e, n), this._i += t.length, {value: t, done: !1}) }) }, function (t, e, n) { n(92); for (var r = n(2), o = n(6), i = n(13), u = n(1)('toStringTag'), a = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], c = 0; c < 5; c++) { var f = a[c], s = r[f], l = s && s.prototype; l && !l[u] && o(l, u, f), i[f] = i.Array } }, function (t, e, n) { 'use strict'; function r (t) { return t && t.__esModule ? t:{default: t} }Object.defineProperty(e, '__esModule', {value: !0}), e.default = function (t) { setTimeout(function () { var e = a.default.getScriptSrcParms(i.default.sdkName); if (console.log('====loading vconsole==='), e && 'true' === e.debug && (i.default.debug = !0), i.default.debug) { var n = document.querySelector('body'), r = document.createElement('script'); r.type = 'text/javascript', r.src = i.default.vconsolePath, n.appendChild(r), t.console = {}, t.console.showConsole = function () { window.vConsole.$dom.style.display = 'block' }, t.console.hideConsole = function () { window.vConsole.$dom.style.display = 'none' } } }, 1e3) }; var o = n(20), i = r(o), u = n(37), a = r(u) }, function (t, e, n) { 'use strict'; function r (t) { return t && t.__esModule ? t:{default: t} } function o () {} function i (t, e, n) { var r = !0; if (t) { var o = 0, i = t.length, u = e[0], a = e[1], c = e[2]; switch (e.length) { case 0:for (;o < i; o += 2)r = t[o].call(t[o + 1] || n) !== !1 && r; break; case 1:for (;o < i; o += 2)r = t[o].call(t[o + 1] || n, u) !== !1 && r; break; case 2:for (;o < i; o += 2)r = t[o].call(t[o + 1] || n, u, a) !== !1 && r; break; case 3:for (;o < i; o += 2)r = t[o].call(t[o + 1] || n, u, a, c) !== !1 && r; break; default:for (;o < i; o += 2)r = t[o].apply(t[o + 1] || n, e) !== !1 && r } } return r } function u (t) { return '[object Function]' === Object.prototype.toString.call(t) } var a = n(58), c = r(a), f = /\s+/; o.prototype.on = function (t, e, n) { var r, o, i; if (!e) return this; for (r = this.__events || (this.__events = {}), t = t.split(f); o = t.shift();)i = r[o] || (r[o] = []), i.push(e, n); return this }, o.prototype.once = function (t, e, n) { var r = this, o = function o () { r.off(t, o), e.apply(n || r, arguments) }; return this.on(t, o, n) }, o.prototype.off = function (t, e, n) { var r, o, i, u; if (!(r = this.__events)) return this; if (!(t || e || n)) return delete this.__events, this; for (t = t ? t.split(f):s(r); o = t.shift();)if (i = r[o])if (e || n)for (u = i.length - 2; u >= 0; u -= 2)e && i[u] !== e || n && i[u + 1] !== n || i.splice(u, 2); else delete r[o]; return this }, o.prototype.trigger = function (t) { var e, n, r, o, u, a, c = [], s = !0; if (!(e = this.__events)) return this; for (t = t.split(f), u = 1, a = arguments.length; u < a; u++)c[u - 1] = arguments[u]; for (;n = t.shift();)(r = e.all) && (r = r.slice()), (o = e[n]) && (o = o.slice()), 'all' !== n && (s = i(o, c, this) && s), s = i(r, [n].concat(c), this) && s; return s }, o.prototype.emit = o.prototype.trigger; var s = c.default; s || (s = function (t) { var e = []; for (var n in t)t.hasOwnProperty(n) && e.push(n); return e }), o.mixTo = function (t) { function e (e) { t[e] = function () { return n[e].apply(i, Array.prototype.slice.call(arguments)), this } } var n = o.prototype; if (u(t))for (var r in n)n.hasOwnProperty(r) && (t.prototype[r] = n[r]); else { var i = new o(); for (var a in n)n.hasOwnProperty(a) && e(a) } }, t.exports = o }, function (t, e) { 'use strict'; Object.defineProperty(e, '__esModule', {value: !0}), e.default = {umsappViewPrefix: 'umsapp://view/', umsappDataPrefix: 'umsapp://data/', umsappActionPrefix: 'umsapp://action/', umsappViewReg: /^umsapp:\/\/view\/([A-Za-z\-\/]+)(\?.*)?/, umsappDataReg: /^umsapp:\/\/data\/([A-Za-z\-\/]+)(\?.*)?/, umsappActionReg: /^umsapp:\/\/action\/([A-Za-z\-\/]+)(\?.*)?/, umsappWebview: 'umsapp://view/webview', umsappFileProgressData: 'umsapp://data/file-progress', umsappFileUploadProgressdata: 'umsapp://data/file-upload-progress', umsappFileDownloadProgressdata: 'umsapp://data/file-download-progress', umsappCloseVideo: 'umsapp://data/close-video', umsappView: ['login', 'register', 'forgot-password', 'change-password', 'room-list', 'room-detail', 'room-group-detail', 'change-room-name', 'chat', 'remind-list', 'remind-detail', 'remind-create', 'workbench', 'workbench-hide', 'contact-list', 'contact-detail', 'contact-dept-list', 'contact-select', 'contact-check', 'contact-structure', 'me', 'local-contacts', 'corp-list', 'enlarge-picture', 'not-found', 'no-network', 'webview', 'about', 'share-app', 'user-center'], umsappData: ['load', 'login', 'change-password', 'room-list', 'room-detail', 'room-group-detail', 'change-room-name', 'chat', 'remind-list', 'remind-detail', 'workbench', 'workbench-hide', 'contact-list', 'contact-detail', 'contact-dept-list', 'contact-select', 'contact-check', 'contact-structure', 'me', 'enlarge-picture', 'about', 'share-app'], umsappAction: ['login', 'logout', 'request-sms-code', 'verify-sms-code', 'register', 'change-corp', 'contact-item-select', 'contact-select', 'upload-avatar', 'workbench-banner', 'workbench-business', 'remove-business', 'refresh-data', 'refresh-workbench', 'refresh-contact-list', 'refresh-corp-list', 'change-password', 'version', 'update-contact', 'share-app', 'clear-cache', 'fav-member', 'save-member', 'send-sms', 'dial', 'create-chat', 'chatroom/create', 'email', 'photo', 'qr-scan', 'reset-setting', 'view-settings', 'change-room-name', 'start-sound-record', 'cancel-sound-record', 'pause-sound-record', 'finish-sound-record', 'remove-sound-record', 'play-sound', 'pause-play-sound', 'stop-play-sound', 'play-sound-stopped', 'upload-sound', 'location', 'location-setting', 'shake', 'date-pick', 'datetime-pick', 'time-pick', 'room-top', 'room-no-disturb', 'room-logout', 'room-add-member', 'room-add-member', 'has-network', 'netstate', 'file-list', 'file-down', 'file-upload', 'file-progress', 'file-download-progress', 'file-upload-progress', 'file-open', 'file-online-read', 'init-video', 'close-video', 'camera-start-record', 'camera-stop-record', 'camera-get-frame', 'select-file-name', 'camera-get-frame', 'system-device', 'open-web-url'], isWebView: function (t) { return /^https?:\/\/.{4,}$/.test(t) }, isView: function (t) { var e = t.match(this.umsappViewReg); return !!e && this.umsappView.indexOf(e[1]) !== -1 }, isData: function (t) { var e = t.match(this.umsappDataReg); return !!e && this.umsappData.indexOf(e[1]) !== -1 }, isAction: function (t) { var e = t.match(this.umsappActionReg); return !!e && this.umsappAction.indexOf(e[1]) !== -1 }, validUrl: function (t) { var e = this.isView(t); return e || (e = this.isData(t)), e || (e = this.isAction(t)), e }, joinView: function (t) { return this.umsappViewPrefix + t }, joinData: function (t) { return this.usmappDataPrefix + t }, joinAction: function (t) { return this.umsappActionPrefix + t }} }, function (t, e, n) { t.exports = {default: n(63), __esModule: !0} }, function (t, e, n) { t.exports = {default: n(64), __esModule: !0} }, function (t, e, n) { t.exports = {default: n(65), __esModule: !0} }, function (t, e, n) { t.exports = {default: n(66), __esModule: !0} }, function (t, e, n) { 'use strict'; function r (t) { return t && t.__esModule ? t:{default: t} }e.__esModule = !0; var o = n(60), i = r(o), u = n(59), a = r(u), c = 'function'===typeof a.default && 'symbol' == typeof i.default ? function (t) { return typeof t }:function (t) { return t && 'function'===typeof a.default && t.constructor === a.default && t !== a.default.prototype ? 'symbol':typeof t }; e.default = 'function'===typeof a.default && 'symbol' === c(i.default) ? function (t) { return 'undefined'===typeof t ? 'undefined':c(t) }:function (t) { return t && 'function'===typeof a.default && t.constructor === a.default && t !== a.default.prototype ? 'symbol':'undefined'===typeof t ? 'undefined':c(t) } }, function (t, e, n) { var r = n(3), o = r.JSON || (r.JSON = {stringify: JSON.stringify}); t.exports = function (t) { return o.stringify.apply(o, arguments) } }, function (t, e, n) { n(51), n(52), n(53), n(93), n(96), t.exports = n(3).Map }, function (t, e, n) { n(94), t.exports = n(3).Object.keys }, function (t, e, n) { n(95), n(51), n(97), n(98), t.exports = n(3).Symbol }, function (t, e, n) { n(52), n(53), t.exports = n(36).f('iterator') }, function (t, e) { t.exports = function (t) { if ('function' != typeof t) throw TypeError(t + ' is not a function!'); return t } }, function (t, e) { t.exports = function () {} }, function (t, e, n) { var r = n(23); t.exports = function (t, e) { var n = []; return r(t, !1, n.push, n, e), n } }, function (t, e, n) { var r = n(8), o = n(32), i = n(90); t.exports = function (t) { return function (e, n, u) { var a, c = r(e), f = o(c.length), s = i(u, f); if (t && n != n) { for (;f > s;) if(a = c[s++], a != a) return!0 } else for (;f > s; s++)if ((t || s in c) && c[s] === n) return t || s || 0; return !t && -1 } } }, function (t, e, n) { var r = n(15), o = n(43), i = n(33), u = n(32), a = n(73); t.exports = function (t, e) { var n = t==1, c = t==2, f = t==3, s = t==4, l = t==6, p = t==5 || l, d = e || a; return function (e, a, v) { for (var h, m, y = i(e), g = o(y), w = r(a, v, 3), b = u(g.length), _ = 0, x = n ? d(e, b):c ? d(e, 0):void 0; b > _; _++) if((p || _ in g) && (h = g[_], m = w(h, _, y), t))if (n)x[_] = m; else if (m) switch(t) { case 3:return !0; case 5:return h; case 6:return _; case 2:x.push(h) } else if (s) return!1; return l ? -1:f || s ? s:x } } }, function (t, e, n) { var r = n(11), o = n(44), i = n(1)('species'); t.exports = function (t) { var e; return o(t) && (e = t.constructor, 'function' != typeof e || e !== Array && !o(e.prototype) || (e = void 0), r(e) && (e = e[i], e===null && (e = void 0))), void 0 === e ? Array:e } }, function (t, e, n) { var r = n(72); t.exports = function (t, e) { return new (r(t))(e) } }, function (t, e, n) { 'use strict'; var r = n(5).f, o = n(27), i = n(49), u = n(15), a = n(39), c = n(16), f = n(23), s = n(24), l = n(45), p = n(88), d = n(4), v = n(26).fastKey, h = d ? '_s':'size', m = function (t, e) { var n, r = v(e); if ('F' !== r) return t._i[r]; for (n = t._f; n; n = n.n) if(n.k == e) return n }; t.exports = {getConstructor: function (t, e, n, s) { var l = t(function (t, r) { a(t, l, e, '_i'), t._i = o(null), t._f = void 0, t._l = void 0, t[h] = 0, void 0 != r && f(r, n, t[s], t) }); return i(l.prototype, {clear: function () { for (var t = this, e = t._i, n = t._f; n; n = n.n)n.r = !0, n.p && (n.p = n.p.n = void 0), delete e[n.i]; t._f = t._l = void 0, t[h] = 0 }, delete: function (t) { var e = this, n = m(e, t); if (n) { var r = n.n, o = n.p; delete e._i[n.i], n.r = !0, o && (o.n = r), r && (r.p = o), e._f == n && (e._f = r), e._l == n && (e._l = o), e[h]-- }return !!n }, forEach: function (t) { a(this, l, 'forEach'); for (var e, n = u(t, arguments.length > 1 ? arguments[1]:void 0, 3); e = e ? e.n:this._f;) for(n(e.v, e.k, this); e && e.r;)e = e.p }, has: function (t) { return !!m(this, t) }}), d && r(l.prototype, 'size', {get: function () { return c(this[h]) }}), l }, def: function (t, e, n) { var r, o, i = m(t, e); return i ? i.v = n:(t._l = i = {i: o = v(e, !0), k: e, v: n, p: r = t._l, n: void 0, r: !1}, t._f || (t._f = i), r && (r.n = i), t[h]++, 'F' !== o && (t._i[o] = i)), t }, getEntry: m, setStrong: function (t, e, n) { s(t, e, function (t, e) { this._t = t, this._k = e, this._l = void 0 }, function () { for (var t = this, e = t._k, n = t._l; n && n.r;)n = n.p; return t._t && (t._l = n = n ? n.n:t._t._f) ? 'keys' == e ? l(0, n.k):'values' == e ? l(0, n.v):l(0, [n.k, n.v]):(t._t = void 0, l(1)) }, n ? 'entries':'values', !n, !0), p(e) }} }, function (t, e, n) { var r = n(40), o = n(69); t.exports = function (t) { return function () { if (r(this) != t) throw TypeError(t + "#toJSON isn't generic"); return o(this) } } }, function (t, e, n) { 'use strict'; var r = n(2), o = n(12), i = n(26), u = n(10), a = n(6), c = n(49), f = n(23), s = n(39), l = n(11), p = n(18), d = n(5).f, v = n(71)(0), h = n(4); t.exports = function (t, e, n, m, y, g) { var w = r[t], b = w, _ = y ? 'set':'add', x = b && b.prototype, O = {}; return h && 'function' == typeof b && (g || x.forEach && !u(function () { (new b()).entries().next() })) ? (b = e(function (e, n) { s(e, b, t, '_c'), e._c = new w(), void 0 != n && f(n, y, e[_], e) }), v('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (t) { var e = 'add' == t || 'set' == t; t in x && (!g || 'clear' != t) && a(b.prototype, t, function (n, r) { if (s(this, b, t), !e && g && !l(n))return 'get' == t && void 0; var o = this._c[t](n===0 ? 0:n, r); return e ? this:o }) }), 'size' in x && d(b.prototype, 'size', {get: function () { return this._c.size }})):(b = m.getConstructor(e, t, y, _), c(b.prototype, n), i.NEED = !0), p(b, t), O[t] = b, o(o.G + o.W + o.F, O), g || m.setStrong(b, t, y), b } }, function (t, e, n) { var r = n(14), o = n(47), i = n(28); t.exports = function (t) { var e = r(t), n = o.f; if (n) for(var u, a = n(t), c = i.f, f = 0; a.length > f;)c.call(t, u = a[f++]) && e.push(u); return e } }, function (t, e, n) { t.exports = n(2).document && document.documentElement }, function (t, e, n) { var r = n(13), o = n(1)('iterator'), i = Array.prototype; t.exports = function (t) { return void 0 !== t && (r.Array === t || i[o] === t) } }, function (t, e, n) { var r = n(9); t.exports = function (t, e, n, o) { try { return o ? e(r(n)[0], n[1]):e(n) } catch(e) { var i = t.return; throw void 0 !== i && r(i.call(t)), e } } }, function (t, e, n) { 'use strict'; var r = n(27), o = n(17), i = n(18), u = {}; n(6)(u, n(1)('iterator'), function () { return this }), t.exports = function (t, e, n) { t.prototype = r(u, {next: o(1, n)}), i(t, e + ' Iterator') } }, function (t, e, n) { var r = n(14), o = n(8); t.exports = function (t, e) { for (var n, i = o(t), u = r(i), a = u.length, c = 0; a > c;)if (i[n = u[c++]] === e) return n } }, function (t, e, n) { var r = n(5), o = n(9), i = n(14); t.exports = n(4) ? Object.defineProperties:function (t, e) { o(t); for (var n, u = i(e), a = u.length, c = 0; a > c;)r.f(t, n = u[c++], e[n]); return t } }, function (t, e, n) { var r = n(28), o = n(17), i = n(8), u = n(34), a = n(7), c = n(42), f = Object.getOwnPropertyDescriptor; e.f = n(4) ? f:function (t, e) { if (t = i(t), e = u(e, !0), c)try { return f(t, e) }catch (t) {} if(a(t, e)) return o(!r.f.call(t, e), t[e]) } }, function (t, e, n) { var r = n(8), o = n(46).f, i = {}.toString, u = 'object' == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window):[], a = function (t) { try { return o(t) }catch (t) { return u.slice() } }; t.exports.f = function (t) { return u && '[object Window]' == i.call(t) ? a(t):o(r(t)) } }, function (t, e, n) { var r = n(7), o = n(33), i = n(29)('IE_PROTO'), u = Object.prototype; t.exports = Object.getPrototypeOf || function (t) { return t = o(t), r(t, i) ? t[i]:'function' == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype:t instanceof Object ? u:null } }, function (t, e, n) { var r = n(12), o = n(3), i = n(10); t.exports = function (t, e) { var n = (o.Object || {})[t] || Object[t], u = {}; u[t] = e(n), r(r.S + r.F * i(function () { n(1) }), 'Object', u) } }, function (t, e, n) { 'use strict'; var r = n(2), o = n(3), i = n(5), u = n(4), a = n(1)('species'); t.exports = function (t) { var e = 'function'===typeof o[t] ? o[t]:r[t]; u && e && !e[a] && i.f(e, a, {configurable: !0, get: function () { return this }}) } }, function (t, e, n) { var r = n(31), o = n(16); t.exports = function (t) { return function (e, n) { var i, u, a = String(o(e)), c = r(n), f = a.length; return c < 0 || c >= f ? t ? '':void 0:(i = a.charCodeAt(c), i < 55296 || i > 56319 || c + 1 === f || (u = a.charCodeAt(c + 1)) < 56320 || u > 57343 ? t ? a.charAt(c):i:t ? a.slice(c, c + 2):(i - 55296 << 10) + (u - 56320) + 65536) } } }, function (t, e, n) { var r = n(31), o = Math.max, i = Math.min; t.exports = function (t, e) { return t = r(t), t < 0 ? o(t + e, 0):i(t, e) } }, function (t, e, n) { var r = n(40), o = n(1)('iterator'), i = n(13); t.exports = n(3).getIteratorMethod = function (t) { if (void 0 != t) return t[o] || t['@@iterator'] || i[r(t)] } }, function (t, e, n) { 'use strict'; var r = n(68), o = n(45), i = n(13), u = n(8); t.exports = n(24)(Array, 'Array', function (t, e) { this._t = u(t), this._i = 0, this._k = e }, function () { var t = this._t, e = this._k, n = this._i++; return !t || n >= t.length ? (this._t = void 0, o(1)):'keys' == e ? o(0, n):'values' == e ? o(0, t[n]):o(0, [n, t[n]]) }, 'values'), i.Arguments = i.Array, r('keys'), r('values'), r('entries') }, function (t, e, n) { 'use strict'; var r = n(74); t.exports = n(76)('Map', function (t) { return function () { return t(this, arguments.length > 0 ? arguments[0]:void 0) } }, {get: function (t) { var e = r.getEntry(this, t); return e && e.v }, set: function (t, e) { return r.def(this, t===0 ? 0:t, e) }}, r, !0) }, function (t, e, n) { var r = n(33), o = n(14); n(87)('keys', function () { return function (t) { return o(r(t)) } }) }, function (t, e, n) { 
'use strict'; var r = n(2), o = n(7), i = n(4), u = n(12), a = n(50), c = n(26).KEY, f = n(10), s = n(30), l = n(18), p = n(19), d = n(1), v = n(36), h = n(35), m = n(82), y = n(77), g = n(44), w = n(9), b = n(8), _ = n(34), x = n(17), O = n(27), S = n(85), P = n(84), k = n(5), A = n(14), j = P.f, E = k.f, M = S.f, N = r.Symbol, C = r.JSON, F = C && C.stringify, T = 'prototype', B = d('_hidden'), U = d('toPrimitive'), V = {}.propertyIsEnumerable, D = s('symbol-registry'), I = s('symbols'), R = s('op-symbols'), z = Object[T], q = 'function' == typeof N, W = r.QObject, J = !W || !W[T] || !W[T].findChild, H = i && f(function () { return O(E({},"a",{get:function (){return E(this,"a",{value:7}).a}})).a!=7 }) ? function (t, e, n) { var r = j(z, e); r && delete z[e], E(t, e, n), r && t !== z && E(z, e, r) }:E, L = function (t) { var e = I[t] = O(N[T]); return e._k = t, e }, K = q && 'symbol' == typeof N.iterator ? function (t) { return 'symbol' == typeof t }:function (t) { return t instanceof N }, G = function (t, e, n) { return t === z && G(R, e, n), w(t), e = _(e, !0), w(n), o(I, e) ? (n.enumerable ? (o(t, B) && t[B][e] && (t[B][e] = !1), n = O(n, {enumerable: x(0, !1)})):(o(t, B) || E(t, B, x(1, {})), t[B][e] = !0), H(t, e, n)):E(t, e, n) }, $ = function (t, e) { w(t); for (var n, r = y(e = b(e)), o = 0, i = r.length; i > o;)G(t, n = r[o++], e[n]); return t }, Z = function (t, e) { return void 0 === e ? O(t):$(O(t), e) }, Y = function (t) { var e = V.call(this, t = _(t, !0)); return !(this === z && o(I, t) && !o(R, t)) && (!(e || !o(this, t) || !o(I, t) || o(this, B) && this[B][t]) || e) }, Q = function (t, e) { if (t = b(t), e = _(e, !0), t !== z || !o(I, e) || o(R, e)) { var n = j(t, e); return !n || !o(I, e) || o(t, B) && t[B][e] || (n.enumerable = !0), n } }, X = function (t) { for (var e, n = M(b(t)), r = [], i = 0; n.length > i;)o(I, e = n[i++]) || e == B || e == c || r.push(e); return r }, tt = function (t) { for (var e, n = t === z, r = M(n ? R:b(t)), i = [], u = 0; r.length > u;)!o(I, e = r[u++]) || n && !o(z, e) || i.push(I[e]); return i }; q || (N = function () { if (this instanceof N) throw TypeError('Symbol is not a constructor!'); var t = p(arguments.length > 0 ? arguments[0]:void 0), e = function (n) { this === z && e.call(R, n), o(this, B) && o(this[B], t) && (this[B][t] = !1), H(this, t, x(1, n)) }; return i && J && H(z, t, {configurable: !0, set: e}), L(t) }, a(N[T], 'toString', function () { return this._k }), P.f = Q, k.f = G, n(46).f = S.f = X, n(28).f = Y, n(47).f = tt, i && !n(25) && a(z, 'propertyIsEnumerable', Y, !0), v.f = function (t) { return L(d(t)) }), u(u.G + u.W + u.F * !q, {Symbol: N}); for (var et = 'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), nt = 0; et.length > nt;)d(et[nt++]); for (var et = A(d.store), nt = 0; et.length > nt;)h(et[nt++]); u(u.S + u.F * !q, 'Symbol', {for: function (t) { return o(D, t += '') ? D[t]:D[t] = N(t) }, keyFor: function (t) { if (K(t)) return m(D, t); throw TypeError(t + ' is not a symbol!') }, useSetter: function () { J = !0 }, useSimple: function () { J = !1 }}), u(u.S + u.F * !q, 'Object', {create: Z, defineProperty: G, defineProperties: $, getOwnPropertyDescriptor: Q, getOwnPropertyNames: X, getOwnPropertySymbols: tt}), C && u(u.S + u.F * (!q || f(function () {
 var t = N(); return '[null]' != F([t]) || '{}' != F({a: t}) || '{}' != F(Object(t));
})), 'JSON', {stringify: function (t) { if (void 0 !== t && !K(t)) { for (var e, n, r = [t], o = 1; arguments.length > o;)r.push(arguments[o++]); return e = r[1], 'function' == typeof e && (n = e), !n && g(e) || (e = function (t, e) { if (n && (e = n.call(this, t, e)), !K(e)) return e }), r[1] = e, F.apply(C, r) } }}), N[T][U] || n(6)(N[T], U, N[T].valueOf), l(N, 'Symbol'), l(Math, 'Math', !0), l(r.JSON, 'JSON', !0)
 }, function (t, e, n) { var r = n(12); r(r.P + r.R, 'Map', {toJSON: n(75)('Map')}) }, function (t, e, n) { n(35)('asyncIterator') }, function (t, e, n) { n(35)('observable') }]));
// # sourceMappingURL=umsapp.js.map
export default UmsApp;
