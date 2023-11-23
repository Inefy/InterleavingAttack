"undefined" != typeof YAHOO && YAHOO || (YAHOO = {}), YAHOO.i13n = YAHOO.i13n || {}, YAHOO.i13n.EventTypes = function() {
    function e(e, t, n) {
        this.yqlid = e, this.eventName = t, this.spaceidPrefix = n
    }
    e.prototype = {
        getYQLID: function() {
            return this.yqlid
        },
        getEventName: function() {
            return this.eventName
        }
    };
    var t = {
        pageview: new e("pv", "pageview", ""),
        simple: new e("lv", "event", "P"),
        linkview: new e("lv", "linkview", "P"),
        richview: new e("richview", "richview", "R"),
        contentmodification: new e("richview", "contentmodification", "R"),
        dwell: new e("lv", "dwell", "D")
    };
    return {
        getEventByName: function(e) {
            return t[e]
        }
    }
}(), YAHOO.i13n.Rapid = function(e) {
    function t() {}

    function n(e) {
        this.map = {}, this.count = 0, e && this.absorb(e)
    }

    function r() {
        this.map = {}, this.count = 0
    }

    function i(e, t) {
        if (!e) return null;
        null === t && (t = !1);
        var n = new r,
            i = B.getAttribute(e, B.data_action_outcome);
        i && n.set("outcm", i);
        var o = B.getAttribute(e, "data-ylk");
        if (null === o || 0 === o.length) return n;
        for (var a = o.split(B.ylk_pair_delim), s = 0, l = a.length; s < l; s++) {
            var c = a[s].split(B.ylk_kv_delim);
            if (2 === c.length) {
                var u = c[0],
                    d = c[1];
                null !== u && "" !== u && null !== d && ("_p" !== u || t) && n.set(u, d)
            }
        }
        return n
    }

    function o(e, t, n) {
        return e < t ? t : e > n ? n : e
    }

    function a(t, n) {
        Y.set("A_sid", YAHOO.i13n.A_SID || B.rand()), Y.set("_w", B.rmProto(n)), t ? Y.absorb(t) : e.keys && Y.absorb(e.keys)
    }

    function s(e) {
        var t = (YAHOO.i13n, YAHOO.i13n.TEST_ID || e.test_id),
            n = e.location || document.location.href;
        a(e.keys, n), t && (t = B.norm("" + t));
        var r = e.override || {},
            i = {
                override: r,
                version: "3.42.3",
                keys: Y,
                referrer: e.referrer,
                getReferrer: function() {
                    return B.norm(B.clref(void 0 !== this.referrer ? this.referrer : document.referrer))
                },
                spaceid: B.norm(r.spaceid || YAHOO.i13n.SPACEID || e.spaceid),
                yrid: B.norm(e.yrid || ""),
                oo: e.oo ? "1" : "0",
                nol: e.nol ? "1" : "0",
                yql_enabled: !1 !== e.yql_enabled,
                fing: 1 == e.use_fing,
                USE_RAPID: !1 !== e.use_rapid,
                linktrack_attribut: e.lt_attr || "text",
                tracked_mods: e.tracked_mods || [],
                tracked_mods_viewability: e.tracked_mods_viewability || [],
                viewability: e.viewability || !1,
                viewability_time: e.viewability_time || 300,
                viewability_px: e.viewability_px || 50,
                lt_attr: e.lt_attr || "text",
                client_only: e.client_only,
                text_link_len: e.text_link_len || -1,
                test_id: t,
                yql_host: e.yql_host || "udc.yahoo.com",
                yql_path: e.yql_path || "/v2/public/yql",
                click_timeout: e.click_timeout || 1e4,
                compr_timeout: e.compr_timeout || 700,
                compr_on: !1 !== e.compr_on,
                compr_type: e.compr_type || "deflate",
                webworker_file: YAHOO.i13n.WEBWORKER_FILE || e.webworker_file || "rapidworker-1.2.js",
                nofollow_classname: e.nofollow_class || "rapidnofollow",
                no_click_listen: e.rapid_noclick_resp || "rapid-noclick-resp",
                nonanchor_track_class: e.nonanchor_track_class || "rapid-nonanchor-lt",
                anc_pos_attr: "data-rapid_p",
                anc_v9y_attr: "data-v9y",
                deb: !0 === e.debug,
                ldbg: e.ldbg > 0 || n.indexOf("yhldebug=1") > 0,
                addmod_timeout: e.addmodules_timeout || 300,
                ult_token_capture: "boolean" == typeof e.ult_token_capture && e.ult_token_capture,
                track_type: e.track_type || "data-tracktype",
                dwell_on: !1 !== e.dwell_on,
                prerender: !0 === e.prerender,
                query_parameters: !0 === e.query_parameters,
                async_all_clicks: !0 === e.async_all_clicks,
                click_postmsg: e.click_postmsg || {},
                apv: !1 !== e.apv,
                apv_time: e.apv_time || 500,
                apv_px: e.apv_px || 500,
                apv_always_send: !0 === e.apv_always_send,
                ex: !0 === e.ex,
                persist_asid: !0 === e.persist_asid,
                track_right_click: !0 === e.track_right_click,
                gen_bcookie: !0 === e.gen_bcookie,
                skip_attr: e.skip_attr || "data-rapid-skip",
                parse_dom: !0 === e.parse_dom,
                pageview_on_init: !1 !== e.pageview_on_init,
                perf_navigationtime: e.perf_navigationtime || 0,
                perf_commontime: e.perf_commontime || null,
                perf_usertime: e.perf_usertime || null,
                perf_resourcetime: e.perf_resourcetime || 0,
                sample: e.sample || {},
                loc: n,
                fpc: !0 === e.fpc
            },
            s = 1 * i.compr_timeout;
        return B.isNum(s) ? i.compr_timeout = o(s, 300, 700) : i.compr_timeout = 700, i.ldbg && 1e4 != i.click_timeout && console.warn("Click timeout set to " + i.click_timeout + "ms (default 10000ms)"), e.apv_callback && "function" == typeof e.apv_callback ? i.apv_callback = e.apv_callback : i.apv_callback = null, i
    }

    function l() {
        Y.set("A_sid", B.rand())
    }

    function c() {
        return "Rapid-" + q.version + "(" + (new Date).getTime() + "):"
    }

    function u(e) {
        q.ldbg && console.warn("RAPID WARNING: " + e)
    }

    function d(e) {
        q.ldbg && console.error("RAPID ERROR: " + e)
    }

    function f(e) {
        q.ldbg && console.log(c() + e)
    }

    function p() {
        var e = document.cookie;
        if (this.cookieMap = {}, /[^=]+=[^=;]?(?:; [^=]+=[^=]?)?/.test(e))
            for (var t = e.split(/;\s/g), n = null, r = null, i = null, o = 0, a = t.length; o < a; o++) {
                if ((i = t[o].match(/([^=]+)=/i)) instanceof Array) try {
                    n = B.dec(i[1]), r = B.dec(t[o].substring(i[1].length + 1))
                } catch (e) {
                    d(e)
                } else n = B.dec(t[o]), r = n;
                "B" !== n && "BX" !== n && "TT" !== n && "D" !== n && "_ga" !== n && "yx" !== n && "rxx" !== n || (this.cookieMap[n] = r)
            }
        B.clearCookie("rx", "/", B.isIE ? document.domain : "")
    }

    function m() {
        if (q.ult_token_capture && !0 !== YAHOO.i13n.__handled_ult_tokens__) {
            YAHOO.i13n.__handled_ult_tokens__ = !0;
            var e = q.loc;
            if (e.match(/;_yl[a-z]{1}=/)) q.ldbg && f("Found ULT Token on URL."), W.sendGeoT(e);
            else {
                var t = new p,
                    n = t.getCookieByName("D");
                n && (B.clearCookie("D", "/", ".yahoo.com"), W.sendGeoT(n))
            }
        }
    }

    function v() {
        var e = null,
            t = null;
        return function() {
            e = (new Date).valueOf().toString(), t = e.length
        }(), {
            ts: e.substr(0, t - 3),
            ms: e.substr(t - 3)
        }
    }

    function h(e, t, n, r) {
        var i = new Date,
            o = "";
        i.setTime(i.getTime() + 1e3 * n), o = "; expires=" + i.toGMTString();
        var a = "";
        r && (a = ";domain=" + r);
        var s = e + "=" + t + o + a + "; path=/";
        document.cookie = s
    }

    function g(e, t, n, r, o, a, s) {
        var l = "",
            c = null,
            u = !s || B.isAboveFold(r),
            d = {
                viewable: u,
                data: {
                    sec: t,
                    _p: n
                }
            };
        return s && B.aug(d.data, {
            A_lv: 1
        }), a ? (d.data.slk = o || "section", c = i(r)) : (r.setAttribute(q.anc_pos_attr, n), s && r.setAttribute(q.anc_v9y_attr, u ? "1" : "0"), l = B.getLT(r, e), l && "" !== l ? c = i(r) : l = "_ELINK_", d.data.slk = o || l), null !== c && B.aug(d.data, c.getAll()), d
    }

    function _() {
        var e = {};
        return {
            addModule: function(t, n) {
                e[B.norm(t)] = n
            },
            addModules: function(e, t) {
                var n = B.isArr(e),
                    r = [];
                n || B.isStr(e) && (e = new Array(e), n = !0);
                for (var i in e)
                    if (B.hasOwn(e, i)) {
                        var o = n ? e[i] : i,
                            a = B.trim(e[i]);
                        if (this.exists(o)) d('addModules() called with prev processed id:"' + o + '"');
                        else {
                            var s = O(a, o, t);
                            s && (this.addModule(o, s), r.push(s))
                        }
                    }
                return r
            },
            getModules: function() {
                return e
            },
            getModulesWithViewability: function() {
                var t = {};
                for (var n in e) {
                    var r = e[n];
                    r.useViewability && (t[n] = r)
                }
                return t
            },
            reevaluateModuleViewability: function() {
                var e = this.getModulesWithViewability();
                for (var t in e) {
                    e[t].reevaluateViewableLinks()
                }
            },
            refreshModule: function(t, n, r, i) {
                var o = e[B.norm(t)];
                o ? o.refreshModule(t, n, r, i) : d("refreshModule called on unknown section: " + o)
            },
            removeModule: function(t) {
                var n = e[B.norm(t)];
                n && (n.removeHandlers(), delete e[t])
            },
            destroy: function() {
                for (var t in e) B.hasOwn(e, t) && this.removeModule(t);
                e = {}
            },
            exists: function(t) {
                return e[B.norm(t)]
            }
        }
    }

    function w(e, t) {
        return B.hasClass(e, "rapid_track_href") ? "href" : B.hasClass(e, "rapid_track_text") ? "text" : B.hasClass(e, "rapid_track_title") ? "title" : B.hasClass(e, "rapid_track_id") ? "id" : t
    }

    function y(e) {
        return "input" === e.nodeName.toLowerCase() && "submit" === B.getAttribute(e, "type")
    }

    function b(e, t) {
        var n = E(e, t);
        z = n, n && (e.ctrlKey || e.metaKey || "contextmenu" === e.type || X && X.stop_dwell() && (n.pp = {
            etag: "dwell,stop",
            usergenf: 1,
            A_prets: ee ? ee.ts : null,
            A_prems: ee ? ee.ms : null
        }), W.sendClick(n))
    }

    function k(e, t, n) {
        var r = B.getAttribute;
        return t.target && "_blank" === t.target.toLowerCase() || 2 === e.which || 4 === e.button || e.altKey || e.ctrlKey || e.shiftKey || e.metaKey || "on" === r(t, "data-nofollow") || r(t, "href") && "javascript:" === r(t, "href").substr(0, 11).toLowerCase() || B.hasClass(t, q.nofollow_classname) || B.hasClass(n, q.nofollow_classname)
    }

    function A(e, t, n, r) {
        n = n || {};
        var i = null;
        return e ? (i = YAHOO.i13n.EventTypes.getEventByName(e), n._E = i.getEventName(), t = n._E) : n._E = t || "_", r && (n.outcm = r), {
            type: i,
            name: t,
            data: n,
            outcome: r
        }
    }

    function E(e, t) {
        e = e || event;
        for (var n = B.getTarget(e), r = "", o = !1, a = null; n && (r = n.nodeName.toLowerCase()) && "a" !== r && "button" !== r && !y(n) && !B.hasClass(n, q.nonanchor_track_class);) n = n.parentNode;
        if (!n || B.hasClass(n, q.no_click_listen)) return 0;
        if (B.hasClass(n, q.nonanchor_track_class)) {
            a = {
                pos: 0,
                sec: t.moduleName,
                slk: "_"
            };
            var s = i(n, 1);
            s && B.aug(a, s.getAll())
        } else {
            var l = B.getAttribute(n, q.anc_pos_attr);
            if (!(a = t.getLinkAtPos(l))) return 0;
            a = a.data, "input" === r || "button" === r || k(e, n, t.moduleElement) || (o = !0)
        }
        if (!a.tar) {
            var c = B.getAttribute(n, "href");
            c && (a.tar = B.extDomain(c)), c && a.tar || (a.tar = B.extDomain(q.loc))
        }
        a.tar_uri || (n.pathname ? a.tar_uri = n.pathname : a.tar_uri = "");
        var u = t.moduleYLK;
        if (u) {
            var d = u.getAll();
            B.aug(a, d, function(e) {
                return !(e in a)
            })
        }
        return a.A_xy = B.xy(e), "contextmenu" == e.type && (a.A_cl = 3, o = !1), {
            data: a,
            event: e,
            moduleElement: t.moduleElement,
            targetElement: n,
            synch: o,
            hasTargetTop: n && n.target && "_top" === n.target.toLowerCase()
        }
    }

    function C(e, t, n, r, i) {
        var o = {};
        return B.aug(o, r), o.sec = e, o.slk = t, o._p = n, {
            data: o,
            outcome: i,
            event: null,
            moduleElement: null,
            targetElement: null,
            synch: !1,
            hasTargetTop: !1
        }
    }

    function T(e, t, n) {
        t || (t = document);
        for (var r = e.split(","), i = [], o = 0, a = r.length; o < a; o++)
            for (var s = t.getElementsByTagName(r[o]), l = 0, c = s.length; l < c; l++) {
                var u = s[l];
                n && !n.call(0, u) || i.push(u)
            }
        var d = i[0];
        return d ? (d.sourceIndex ? i.sort(function(e, t) {
            return e.sourceIndex - t.sourceIndex
        }) : d.compareDocumentPosition && i.sort(function(e, t) {
            return 3 - (6 & e.compareDocumentPosition(t))
        }), i) : []
    }

    function x(e, t, n, r) {
        t || (t = document);
        var i = e.split(",");
        n = n || [];
        var o = t.childNodes;
        if ("true" !== B.getAttribute(t, q.skip_attr))
            for (var a = 0, s = o.length; a < s; a++) {
                var l = o[a];
                B.isTagOfInterest(l, i) && (r && !r.call(0, l) || n.push(l)), "true" !== B.getAttribute(l, q.skip_attr) ? x(e, l, n, r) : "true" === B.getAttribute(l, q.skip_attr) && n.push(l)
            }
        var c = n[0];
        return c ? (c.sourceIndex ? n.sort(function(e, t) {
            return e.sourceIndex - t.sourceIndex
        }) : c.compareDocumentPosition && n.sort(function(e, t) {
            return 3 - (6 & e.compareDocumentPosition(t))
        }), n) : []
    }

    function O(e, t, n) {
        function r(t, r) {
            var o = [];
            r = r || 1;
            for (var a = 0, u = t.length; a < u; a++)
                if ("div" === t[a].tagName.toLowerCase()) {
                    var d = t[a],
                        f = i(d),
                        m = g(p, l.map.sec || e, 1, d, f.map.slk || l.map.slk, !0, n);
                    c[0] = m, o.push(m)
                } else {
                    var v = t[a],
                        m = g(p, l.map.sec || e, r, v, l.map.slk, 0, n);
                    c[r - 1] = m, o.push(m), r++
                }
            if ("true" === B.getAttribute(s, q.skip_attr)) {
                var m = g(p, l.map.sec || e, 1, d, l.map.slk, !0, n);
                c[0] = m, o.push(m)
            }
            return o
        }

        function o(t) {
            for (var n = [], r = 0, i = t.length; r < i; r++) {
                var o = t[r],
                    a = B.getAttribute(o, q.anc_pos_attr),
                    s = g(p, l.map.sec || e, a, o, l.map.slk, 0, !0);
                n.push(s)
            }
            return n
        }

        function a(e) {
            return !B.getAttribute(e, q.anc_pos_attr)
        }
        var s = document.getElementById(t);
        if (!s) return u("Specified module not in DOM: " + t), null;
        var l = i(s),
            c = [],
            d = q.parse_dom ? x("a,button,input", s) : T("a,button,input", s),
            p = w(s, q.lt_attr),
            m = d.length,
            v = B.getAttribute(s, q.track_type);
        r(d);
        var h = {
                useViewability: n,
                moduleYLK: l,
                links: c,
                moduleName: e,
                trackType: v,
                moduleElement: s,
                refreshModule: function(e, t, i, o) {
                    o.isRefreshed = !0;
                    var s = q.parse_dom ? x("a,button,input", B.$(e), null, a) : T("a,button,input", B.$(e), a);
                    if (!0 === t || s.length > 0) {
                        var l = r(s, m + 1);
                        m += s.length;
                        var c = s.length;
                        if (n) {
                            c = 0;
                            for (var u = 0, d = l.length; u < d; u++) l[u].viewable && c++
                        }
                        if ((!0 === t || c > 0) && (q.USE_RAPID || o.event)) {
                            var p = {};
                            B.aug(p, this), p.links = i ? l : [], (!0 === t || i) && W.sendRefreshedContent(p, t, o)
                        }
                    } else B.ldbg && f("refreshModule(" + e + ") - no new links.");
                    !0 === t && q.apv && F && F.reInit()
                },
                reevaluateViewableLinks: function() {
                    var t = c.length,
                        n = T("a", this.moduleElement, function(t) {
                            return function(n) {
                                if (!B.getAttribute(n, q.anc_pos_attr)) {
                                    t++, n.setAttribute(q.anc_pos_attr, t);
                                    var r = g(p, l.map.sec || e, t, n, l.map.slk, 0, !1);
                                    c[t - 1] = r
                                }
                                return !("1" === B.getAttribute(n, q.anc_v9y_attr) || !B.isAboveFold(n) || (n.setAttribute(q.anc_v9y_attr, "1"), 0))
                            }
                        }(t));
                    if (0 !== n.length && q.USE_RAPID) {
                        var r = o(n),
                            i = {};
                        B.aug(i, this), i.links = r, W.sendRefreshedContent(i, !1, {})
                    }
                },
                removeHandlers: function() {
                    B.rmEvent(s, "click", _), q.track_right_click && B.rmEvent(s, "contextmenu", _)
                },
                getLinkAtPos: function(e) {
                    return e > c.length ? null : c[e - 1]
                },
                identifier: t
            },
            _ = function(e) {
                b(e, h)
            };
        return B.addEvent(s, "click", _), q.track_right_click && B.addEvent(s, "contextmenu", _), h
    }

    function S(e, t, n) {
        "object" == typeof e && e || (e = {}), q.ldbg && f("beaconPageview called, pp=" + B.fData(e)), t && !q.persist_asid && l(), (q.USE_RAPID || q.apv_always_send && B.hasOwn(e, "A_apv")) && W.sendRapidNoDelay([], !0, e, null, n), q.apv && null != F && F.reInit()
    }

    function D(e, t, n, r) {
        q.ldbg && f('beaconEvent: event="' + e + '" data=' + B.fData(t) + " outcome=" + n);
        var i = A(0, e, t, n);
        W.sendEvents(i, r)
    }

    function M() {
        var e = null,
            t = (new Date).getTime(),
            n = t,
            r = B.getScrollY(),
            i = -1,
            o = function() {
                var e = B.getScrollY(),
                    t = -1 === i ? e - r : e - i;
                Math.abs(t) > q.viewability_px && (j.reevaluateModuleViewability(), i = e, n = (new Date).getTime())
            },
            a = function() {
                null != e && clearTimeout(e);
                var i = (new Date).getTime();
                i - t < q.viewability_time && (r = B.getScrollY(), n = i), e = setTimeout(function() {
                    o()
                }, q.viewability_time)
            };
        B.addEvent(window, "scroll", a), this.reInit = function() {
            r = B.getScrollY(), i = -1, t = n = (new Date).getTime()
        }, this.destroy = function() {
            B.rmEvent(window, "scroll", a)
        }
    }

    function P(e) {
        var e = e ? document.getElementById(e) : window,
            t = null,
            n = lastApvTime = (new Date).getTime(),
            r = B.getScrollY(e),
            i = -1,
            o = function() {
                var t = B.getScrollY(e),
                    n = -1 === i ? t - r : t - i,
                    o = n > 0 ? 0 : 1;
                if (Math.abs(n) > q.apv_px) {
                    S({
                        A_apv: 1,
                        A_apx: t,
                        A_asd: o
                    }, !1, !0), i = t, lastApvTime = (new Date).getTime(), q.apv_callback && q.apv_callback.call(this, {
                        pixel_pos: t,
                        scroll_dir: o
                    })
                }
            },
            a = function() {
                null != t && clearTimeout(t);
                var i = (new Date).getTime();
                i - n < q.apv_time && (r = B.getScrollY(e), lastApvTime = i), t = setTimeout(function() {
                    o()
                }, q.apv_time)
            };
        B.addEvent(e, "scroll", a), this.reInit = function() {
            r = B.getScrollY(e), i = -1, n = lastApvTime = (new Date).getTime()
        }, this.destroy = function() {
            B.rmEvent(e, "scroll", a)
        }
    }

    function L() {
        var e = {
                focus: {
                    state: "start",
                    etrg: "show",
                    etag: "dwell,start",
                    jse: "window.focus"
                },
                pageshow: {
                    state: "start",
                    etrg: "show",
                    etag: "dwell,start",
                    jse: "window.pageshow"
                },
                "visibilitychange-visible": {
                    state: "start",
                    etrg: "show",
                    etag: "dwell,start",
                    jse: "document.visibilitychange"
                },
                blur: {
                    state: "stop",
                    etrg: "hide",
                    etag: "dwell,stop",
                    jse: "window.blur"
                },
                pagehide: {
                    state: "stop",
                    etrg: "hide",
                    etag: "dwell,stop",
                    jse: "window.pagehide"
                },
                "visibilitychange-hidden": {
                    state: "stop",
                    etrg: "hide",
                    etag: "dwell,stop",
                    jse: "document.visibilitychange"
                },
                beforeunload: {
                    state: "stop",
                    etrg: "close",
                    etag: "dwell,stop",
                    jse: "window.beforeunload"
                }
            },
            t = "start";
        ee = v();
        var n, r;
        void 0 !== document.hidden ? (n = "hidden", r = "visibilitychange") : void 0 !== document.mozHidden ? (n = "mozHidden", r = "mozvisibilitychange") : void 0 !== document.msHidden ? (n = "msHidden", r = "msvisibilitychange") : void 0 !== document.webkitHidden && (n = "webkitHidden", r = "webkitvisibilitychange");
        var i = function(i) {
            var o = "",
                a = i.type;
            if (i.type == r && (a = document[n] ? "visibilitychange-hidden" : "visibilitychange-visible"), B.hasOwn(e, a) && (o = e[a].state), 0 != o.length) {
                if (t == o) return void f("dwell: -- state already " + t + " (event=" + a + ")");
                t = o;
                var s = e[a];
                f("dwell: change state to " + t + " (event=" + a + ")");
                var l = {
                    etrg: s.etrg,
                    outcm: "window",
                    usergenf: 1,
                    etag: s.etag,
                    A_jse: s.jse
                };
                "start" === t && (ee = v(), null != te && (l.A_prets = te.ts, l.A_prems = te.ms)), "stop" === t && (te = v(), null != ee && (l.A_prets = ee.ts, l.A_prems = ee.ms)), D("dwell", l, "")
            }
        };
        for (var o in e) e.hasOwnProperty(o) && B.addEvent(window, o, i);
        B.addEvent(window, r, i), this.set_state = function(e) {
            t = e
        }, this.start_dwell = function() {
            return "start" === t ? (f("dwell: -- state already " + t), !1) : (t = "start", ee = v(), !0)
        }, this.stop_dwell = function() {
            return "stop" === t ? (f("dwell: -- state already " + t), !1) : (t = "stop", te = v(), !0)
        }, this.destroy = function() {
            for (var t in e) e.hasOwnProperty(t) && B.rmEvent(window, t, i);
            B.rmEvent(window, r, i)
        }
    }

    function R(e, t) {
        if (window.performance && window.performance.timing) {
            var r = e ? e.perf_navigationtime || 0 : q.perf_navigationtime || 0,
                i = e ? e.perf_resourcetime || 0 : q.perf_resourcetime || 0,
                o = e ? e.perf_commontime || null : q.perf_commontime || null,
                a = e ? e.perf_usertime || null : q.perf_usertime || null;
            if (!(r < 1 && i < 1) || o || a) {
                var s = B.hasOwn(q.sample, "perf_navigationtime") ? q.sample.perf_navigationtime : 100,
                    l = B.hasOwn(q.sample, "perf_resourcetime") ? q.sample.perf_resourcetime : 100,
                    c = B.samplingSuccess(s),
                    u = B.samplingSuccess(l);
                if (c || u) return (r > 0 || i > 0) && 0 === window.performance.timing.loadEventStart && (Z += 10) <= 200 ? void setTimeout(function() {
                    R(e, t)
                }, 10) : void
                function() {
                    var e = I(r, i, o, a, c, u),
                        s = new n(e);
                    "object" == typeof t && s.absorb(t);
                    var l = A(0, "pageperf", s.getAll(), "");
                    W.sendEvents(l)
                }()
            }
        }
    }

    function I(e, t, n, r, i, o) {
        var a = {},
            s = window.performance.timing;
        if (i && e > 0 && (N(s.responseStart, s.connectEnd, a, "A_pfb"), N(s.responseEnd, s.responseStart, a, "A_pbp"), N(s.responseEnd, s.requestStart, a, "A_psr"), N(s.loadEventStart, s.navigationStart, a, "A_pol"), N(s.domInteractive, s.navigationStart, a, "A_pdi")), i && e > 1 && (N(s.redirectEnd, s.redirectStart, a, "A_prd"), N(s.domainLookupEnd, s.domainLookupStart, a, "A_pdl"), N(s.connectEnd, s.secureConnectionStart, a, "A_psh"), N(s.connectEnd, s.connectStart, a, "A_psc"), N(s.loadEventStart, s.responseEnd, a, "A_pfe")), o && t > 0 && void 0 !== window.performance.getEntries) {
            var l = [],
                c = window.performance.getEntries();
            c.sort(function(e, t) {
                return e.duration > t.duration ? -1 : e.duration < t.duration ? 1 : 0
            });
            for (var u = c.slice(0, 10), d = u.length, f = 0; f < d; f++) {
                var p = {},
                    m = u[f].name.replace(/\?.+$/, "");
                m = m.replace(/^.+\//, ""), p.name = m, p.dur = Math.floor(u[f].duration), p.st = Math.floor(u[f].startTime), l.push(p)
            }
            a.A_res = B.sfy(l)
        }
        if (n && (B.hasOwn(n, "initialPageLoad") && (a.A_cmi = B.sfy(n.initialPageLoad)), B.hasOwn(n, "afterPageLoad") && (a.A_cma = B.sfy(n.afterPageLoad))), r)
            for (var v = ["utm"], f = 0; f < v.length; f++) B.hasOwn(r, v[f]) && (a.A_utm = B.sfy(r[v[f]]));
        return a.etrg = "backgroundPost", a.outcm = "performance", a.usergenf = 0, a.etag = "performance", a
    }

    function N(e, t, n, r) {
        if (e && t) {
            var i = e - t;
            n[r] = i
        }
    }

    function H() {
        if ("prerender" == document.visibilityState) {
            var e = {
                    etrg: "prerender",
                    outcm: "page",
                    usergenf: 0,
                    etag: "prerender"
                },
                t = A(0, "prerender", e, "");
            W.sendEvents(t)
        }
    }

    function V(e) {
        var t = navigator.userAgent,
            n = Object.prototype,
            r = t.match(/MSIE\s[^;]*/) || t.match(/Trident\/[^;]*/) ? 1 : 0,
            i = /KHTML/.test(t) ? 1 : 0,
            o = null !== t.match(/(iPhone|iPad|iPod)/gi),
            a = (t.indexOf("Android"), o && null !== t.match(/AppleWebKit/)),
            s = null !== t.match(/AppleWebKit/) && null === t.match(/Chrome/),
            l = new RegExp(/\ufeff|\uffef|[\u0000-\u001f]|[\ue000-\uf8ff]/g),
            c = new RegExp(/[\u007f-\u00a0]|\s{2,}/g),
            u = -1,
            f = ["A_res", "A_cmi", "A_cma", "A_utm"],
            m = -1,
            v = "https:" === window.location.protocol;
        return r && (document.documentMode ? m = document.documentMode : (m = 5, document.compatMode && "CSS1Compat" == document.compatMode && (m = 7))), {
            $: function(e) {
                return document.getElementById(e)
            },
            ca: "%01",
            cb: "%02",
            cc: "%03",
            cd: "%04",
            ce: "%05",
            cf: "%06",
            cg: "%07",
            ch: "%08",
            ylk_kv_delim: e.ylk_kv_delim || ":",
            ylk_pair_delim: e.ylk_pair_delim || ";",
            DATA_ACTION: "data-action",
            data_action_outcome: "data-action-outcome",
            isIE: r,
            isIOSSafari: a,
            isSafari: s,
            isWebkit: i,
            ieV: m,
            value_len_whitelist: f,
            hasOwn: function(e, t) {
                return n.hasOwnProperty.call(e, t)
            },
            enc: encodeURIComponent,
            dec: decodeURIComponent,
            getQueryStringValue: function(e, t) {
                return decodeURIComponent(e.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(t).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"))
            },
            curProto: function() {
                return v ? "https://" : "http://"
            },
            isSecure: function() {
                return v
            },
            isScrollHorizontalVisible: function() {
                return document.documentElement.scrollWidth > document.documentElement.clientWidth
            },
            getCompStyle: function(e, t) {
                return void 0 !== window.getComputedStyle ? window.getComputedStyle(e, t) : (this.el = e, this.getPropertyValue = function(t) {
                    var n = /(\-([a-z]){1})/g;
                    return "float" == t && (t = "styleFloat"), n.test(t) && (t = t.replace(n, function() {
                        return arguments[2].toUpperCase()
                    })), e.currentStyle[t] ? e.currentStyle[t] : 0
                }, this)
            },
            getBorder: function(e, t) {
                if (!e || !t) return 0;
                var n = parseInt(this.getCompStyle(e, null).getPropertyValue(t), 10);
                return isNaN(n) && (n = 0), n
            },
            getElementHeight: function(e) {
                if (!e) return 0;
                var t = e.offsetHeight || 0;
                return t ? t - this.getBorder(e, "border-top-width") - this.getBorder(e, "border-bottom-width") : 0
            },
            getPositionTop: function(e) {
                for (var t = 0; e;) t += e.offsetTop, e = e.offsetParent;
                return t
            },
            getScrollbarWidthHeight: function() {
                var e = this.make("div");
                e.style.overflow = "scroll", e.style.visibility = "hidden", e.style.position = "absolute", e.style.width = "100px", e.style.height = "100px", document.body.appendChild(e);
                var t = {
                    width: e.offsetWidth - e.clientWidth,
                    height: e.offsetHeight - e.clientHeight
                };
                return this.rmBodyEl(e), t
            },
            isAboveFold: function(e) {
                if (r && m <= 7) return !0;
                var t = B.getCompStyle(e);
                if ("hidden" == t.visibility || "none" == t.display) return !1;
                var n = e.getBoundingClientRect(),
                    i = this.getElementHeight(e),
                    o = .5 * i;
                if (n.top + o < 0) return !1;
                var a = window.innerHeight || document.documentElement.clientHeight;
                if (this.isScrollHorizontalVisible()) {
                    a -= this.getScrollbarWidthHeight().height
                }
                return n.bottom - o <= a || void 0
            },
            strip: function(e) {
                for (var t = {
                        "/": "P",
                        ";": "1",
                        "?": "P",
                        "&": "1",
                        "#": "P"
                    }, n = {
                        url: e,
                        clean: "",
                        cookie: "",
                        keys: []
                    }, r = 0; - 1 !== e.indexOf("_yl", r);) {
                    var i = e.indexOf("_yl", r);
                    if (r < i && (n.clean += e.slice(r, i - 1)), r = i + 3, t[e.charAt(i - 1)] && "=" === e.charAt(i + 4)) {
                        n.ult = 1;
                        var o = "_yl" + e.charAt(i + 3),
                            a = "";
                        for (i += 5; i < e.length && !t[e.charAt(i)]; i++) a += e.charAt(i);
                        n.keys.push(o), n[o] = a, "_ylv" !== o && (n.cookie += "&" + o + "=" + a), t[e.charAt(i)] && "P" === t[e.charAt(i)] && (n.clean += e.charAt(i)), r = i + 1
                    } else n.clean += e.slice(i - 1, r)
                }
                return n.ult && (n.cookie = n.cookie.substr(1), n.clean += e.substr(r), n._ylv), n
            },
            prevDef: function(e) {
                e.preventDefault ? e.preventDefault() : e.returnValue = !1
            },
            appBodyEl: function(e) {
                document.body.appendChild(e)
            },
            rmBodyEl: function(e) {
                document.body.removeChild(e)
            },
            sa: function(e, t, n) {
                e.setAttribute(t, n)
            },
            getScrollY: function(e) {
                return e && e !== window ? e.scrollTop : void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
            },
            make: function(e, t) {
                var n = document.createElement(e);
                if (t && this.isObj(t))
                    for (var r in t) this.sa(n, r, t[r]);
                return n
            },
            getXHR: function() {
                var e = [function() {
                    return new XMLHttpRequest
                }, function() {
                    return new ActiveXObject("Msxml2.XMLHTTP")
                }, function() {
                    return new ActiveXObject("Msxml3.XMLHTTP")
                }, function() {
                    return new ActiveXObject("Microsoft.XMLHTTP")
                }];
                return function() {
                    for (var t = !1, n = e.length, r = 0; r < n; r++) {
                        try {
                            t = e[r]()
                        } catch (e) {
                            continue
                        }
                        break
                    }
                    return t
                }()
            },
            hasLS: function() {
                try {
                    return "localStorage" in window && null !== window.localStorage
                } catch (e) {
                    return !1
                }
            },
            hasCORS: function() {
                return !(r && m < 10) && ("withCredentials" in new XMLHttpRequest || "undefined" != typeof XDomainRequest)
            },
            hasWorkers: function() {
                return !!window.Worker
            },
            clearCookie: function(e, t, n) {
                t = t || "/", n = n || "", document.cookie = e + "= ; path=" + t + "; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Domain=" + n + ";"
            },
            uniqConcat: function(e, t, n) {
                function r(e) {
                    for (var t = 0, r = e.length; t < r; t++) {
                        var a = e[t];
                        if (a) {
                            var s = n(a);
                            o[s] || (o[s] = 1, i.push(a))
                        }
                    }
                }
                var i = [],
                    o = {};
                return r(e), r(t), i
            },
            trim: function(e) {
                return e ? e.replace(/^\s\s*/, "").replace(/\s\s*$/, "") : e
            },
            extDomain: function(e) {
                var t = e.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
                return t && t[1]
            },
            getAttribute: function(e, t) {
                var n = "";
                return document.documentElement.hasAttribute || "class" !== t || (t = "className"), e && e.getAttribute && (n = e.getAttribute(t, 2)), n
            },
            isDate: function(e) {
                return "[object Date]" === n.toString.call(e)
            },
            isArr: function(e) {
                return "[object Array]" === n.toString.apply(e)
            },
            isStr: function(e) {
                return "string" == typeof e
            },
            isNum: function(e) {
                return "number" == typeof e && isFinite(e)
            },
            isNumeric: function(e) {
                return e - 0 == e && (e + "").replace(/^\s+|\s+$/g, "").length > 0
            },
            isObj: function(e) {
                return e && "object" == typeof e
            },
            rTN: function(e) {
                try {
                    if (e && 3 === e.nodeType) return e.parentNode
                } catch (e) {
                    d(e)
                }
                return e
            },
            getTarget: function(e) {
                var t = e.target || e.srcElement;
                return t && !t.nodeName && (t = t.correspondingUseElement && t.correspondingUseElement.parentNode ? t.correspondingUseElement.parentNode : null), this.rTN(t)
            },
            addEvent: function(e, t, n) {
                e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n)
            },
            rmEvent: function(e, t, n) {
                e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent && e.detachEvent("on" + t, n)
            },
            aug: function(e, t, n) {
                if (t)
                    for (var r in t)
                        if (this.hasOwn(t, r)) {
                            if (n && !n.call(null, r, t[r])) continue;
                            e[r] = t[r]
                        }
            },
            rmProto: function(e) {
                return e ? "http://" === e.substr(0, 7) ? e.substr(7, e.length) : "https://" === e.substr(0, 8) ? e.substr(8, e.length) : e : ""
            },
            norm: function(e) {
                return null === e ? "" : (e = "" + e, this.trim(e.replace(c, " ").replace(l, "")))
            },
            _hasClass: function(e, t) {
                var n, r = !1;
                return e && t && (n = this.getAttribute(e, "class") || "", r = t.exec ? t.test(n) : t && (" " + n + " ").indexOf(" " + t + " ") > -1), r
            },
            hasClass: function(e, t) {
                if (this.isArr(t)) {
                    for (var n = 0, r = t.length; n < r; n++)
                        if (this._hasClass(e, t[n])) return !0;
                    return !1
                }
                return !!this.isStr(t) && this._hasClass(e, t)
            },
            quote: function(e) {
                var t = /["\\\x00-\x1f\x7f-\x9f]/g,
                    n = {
                        "\b": "\\b",
                        "\t": "\\t",
                        "\n": "\\n",
                        "\f": "\\f",
                        "\r": "\\r",
                        '"': '\\"',
                        "\\": "\\\\"
                    };
                if (e.match(t)) {
                    return '"' + e.replace(t, function(e) {
                        var t = n[e];
                        return "string" == typeof t ? t : (t = e.charCodeAt(), "\\u00" + Math.floor(t / 16).toString(16) + (e % 16).toString(16))
                    }) + '"'
                }
                return '"' + e + '"'
            },
            /* @license
                   Copyright 2013 jQuery Foundation and other contributors

                   Permission is hereby granted, free of charge, to any person obtaining a copy
                   of this software and associated documentation files (the "Software"), to deal
                   in the Software without restriction, including without limitation the rights
                   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                   copies of the Software, and to permit persons to whom the Software is
                   furnished to do so, subject to the following conditions:

                   The above copyright notice and this permission notice shall be included in
                   all copies or substantial portions of the Software.

                   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                   THE SOFTWARE.
                   */
            sfy: function(e) {
                if (!e && "" !== e) return {};
                var t, n = typeof e;
                if ("undefined" === n) return "undefined";
                if ("number" === n || "boolean" === n) return "" + e;
                if ("string" === n) return this.quote(e);
                if ("function" == typeof e.toJSON) return this.sfy(e.toJSON());
                if (this.isDate(e)) {
                    var r = e.getUTCMonth() + 1,
                        i = e.getUTCDate(),
                        o = e.getUTCFullYear(),
                        a = e.getUTCHours(),
                        s = e.getUTCMinutes(),
                        l = e.getUTCSeconds(),
                        c = e.getUTCMilliseconds();
                    return r < 10 && (r = "0" + r), i < 10 && (i = "0" + i), a < 10 && (a = "0" + a), s < 10 && (s = "0" + s), l < 10 && (l = "0" + l), c < 100 && (c = "0" + c), c < 10 && (c = "0" + c), '"' + o + "-" + r + "-" + i + "T" + a + ":" + s + ":" + l + "." + c + 'Z"'
                }
                if (t = [], this.isArr(e)) {
                    for (var u = 0, d = e.length; u < d; u++) t.push(this.sfy(e[u]));
                    return "[" + t.join(",") + "]"
                }
                if ("object" === n) {
                    for (var f in e)
                        if (this.hasOwn(e, f)) {
                            var p = typeof f,
                                m = null;
                            if ("string" === p) m = this.quote(f);
                            else {
                                if ("number" !== p) continue;
                                m = '"' + f + '"'
                            }
                            if ("function" !== (p = typeof e[f]) && "undefined" !== p) {
                                var v = "";
                                v = null === e[f] ? '""' : 0 === e[f] ? 0 : this.sfy(e[f]), t.push(m + ":" + v)
                            }
                        }
                    return "{" + t.join(",") + "}"
                }
            },
            toJSON: function() {
                var e = null;
                return function(t) {
                    return e || (e = "object" == typeof JSON && JSON.stringify && 6 !== m && 7 !== m && 8 !== m ? JSON.stringify : this.sfy), e.call(this, t)
                }
            }(),
            executeOnLoad: function(e) {
                var t = !1,
                    n = function(n) {
                        (document.addEventListener || n && "load" === n.type || "complete" === document.readyState) && (t = !0, r(), e.call(this))
                    },
                    r = function() {
                        document.addEventListener ? (document.removeEventListener("DOMContentLoaded", n, !1), window.removeEventListener("load", n, !1)) : (document.detachEvent("onreadystatechange", n), window.detachEvent("onload", n))
                    };
                if ("complete" === document.readyState) setTimeout(n);
                else if (document.addEventListener) document.addEventListener("DOMContentLoaded", n, !1), window.addEventListener("load", n, !1);
                else {
                    document.attachEvent("onreadystatechange", n), window.attachEvent("onload", n);
                    var i = !1;
                    try {
                        i = null == window.frameElement && document.documentElement
                    } catch (e) {}
                    i && i.doScroll && function n() {
                        if (!t) {
                            try {
                                i.doScroll("left")
                            } catch (e) {
                                return setTimeout(n, 50)
                            }
                            r(), e.call(this)
                        }
                    }()
                }
            },
            getLinkContent: function(e) {
                for (var t, n = 0, r = "";
                    (t = e.childNodes[n]) && t; n++) 1 === t.nodeType && ("img" === t.nodeName.toLowerCase() && (r += (this.getAttribute(t, "alt") || "") + " "), r += this.getLinkContent(t));
                return r
            },
            fData: function(e) {
                return this.isStr(e) ? e : this.toJSON(e)
            },
            getLT: function(e, t) {
                if (!e) return "_";
                var n = "";
                return t = t.toLowerCase(), n = "input" === e.nodeName.toLowerCase() ? this.getAttribute(e, "value") : "text" === t ? i ? e.textContent : e.innerText ? e.innerText : e.textContent : "href" === t ? this.rmProto(this.getAttribute(e, "href")) : this.getAttribute(e, t) || "", n = this.norm(n), "" === n && (n = this.norm(this.getLinkContent(e))), "" === n ? "_" : n
            },
            clref: function(e) {
                if (0 !== e.indexOf("http://") && 0 !== e.indexOf("https://")) return "";
                var t = this.strip(e);
                return t.clean || t.url
            },
            cold: function() {
                return screen ? screen.colorDepth || screen.pixelDepth : "unknown"
            },
            sr: function() {
                return screen && screen.width && screen.height ? screen.width + "x" + screen.height : ""
            },
            vr: function() {
                return screen && screen.availHeight && screen.availWidth ? screen.availWidth + "x" + screen.availHeight : ""
            },
            dor: function() {
                return screen && screen.orientation && screen.orientation.type ? screen.orientation.type.indexOf("landscape") > -1 ? 1 : 0 : ""
            },
            xy: function(e) {
                var t = null,
                    n = e.pageX,
                    i = e.pageY;
                return r && (t = function() {
                    var e = document.documentElement,
                        t = document.body;
                    return e && (e.scrollTop || e.scrollLeft) ? [e.scrollTop, e.scrollLeft] : t ? [t.scrollTop, t.scrollLeft] : [0, 0]
                }()), n || 0 === n || (n = e.clientX || 0, r && (n += t[1])), i || 0 === i || (i = e.clientY || 0, r && (i += t[0])), n + "," + i
            },
            hasCC: function(e) {
                for (var t = 0, n = e.length; t < n; t++) {
                    var r = e.charCodeAt(t);
                    if (r < 32 || "=" === r) return !0
                }
                return !1
            },
            isValidPair: function(e, t) {
                return !!B.in_value_whitelist(e) || (!(e.length <= 0 || e.length > 32) || (B.ldbg && console.warn("Invalid key (" + e + ") length. Keys Must be <=32."), !1))
            },
            ser: function(e, t) {
                if (!e) return "";
                void 0 === typeof t && (t = !0);
                var n = [],
                    r = "";
                for (var i in e)
                    if (this.hasOwn(e, i)) {
                        var o = i,
                            a = e[i];
                        if (null === o || null === a) continue;
                        if (o += "", a += "", !this.isValidPair(o, a)) continue;
                        if (!this.hasCC(o) && !this.hasCC(a)) {
                            r = "", a = this.trim(a), "" !== a && " " !== a || !t || (a = "_");
                            try {
                                r = this.enc(o + "" + a), r = r.replace(/'/g, "%27")
                            } catch (e) {
                                r = "_ERR_ENCODE_", d(e)
                            }
                            n.push(r)
                        }
                    }
                return n.join(this.cd)
            },
            rand: function() {
                for (var e = 0, t = "", n = ""; e++ < 16;) {
                    var r = Math.floor(62 * Math.random());
                    n = r < 10 ? r : String.fromCharCode(r < 36 ? r + 55 : r + 61), t += n
                }
                return t
            },
            tms: function() {
                return +new Date
            },
            cookEn: function() {
                var e = navigator.cookieEnabled ? 1 : 0;
                return void 0 !== navigator.cookieEnabled || e || (document.cookie = "rapidtc=1", e = -1 != document.cookie.indexOf("testcookie"), document.cookie = "rapidtc=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"), e
            },
            isResCF: function(e) {
                return {
                    14: 1,
                    15: 1,
                    18: 1,
                    19: 1,
                    20: 1
                }[e]
            },
            isTagOfInterest: function(e, t) {
                for (var n = 0, r = t.length; n < r; n++)
                    if (e.tagName && e.tagName.toLowerCase() == t[n].toLowerCase()) return !0;
                return !1
            },
            samplingSuccess: function(e) {
                var t = function(e) {
                    for (var t = 33554467, n = 0, r = e.length; n < r; n++) t += (t << 1) + (t << 4) + (t << 7) + (t << 8) + (t << 24), t ^= e.charCodeAt(n);
                    return t < 0 && (t &= 2147483647, t += 2147483648), t
                };
                return function(e) {
                    e *= 10;
                    var n = new p,
                        r = "" + n.getCookieByName("B");
                    return !!r && (u < 0 && (u = t(r) % 1e3), u < e)
                }(e)
            },
            in_value_whitelist: function(e) {
                return !(r && m <= 8) && -1 !== B.value_len_whitelist.indexOf(e)
            }
        }
    }
    "undefined" != typeof console && void 0 !== console.log || (console = {
        log: function() {}
    }), void 0 === console.error && (console.error = console.log), void 0 === console.warn && (console.warn = console.log), t.prototype = {
        ser: function() {
            return B.ser(this.map)
        },
        set: function(e, t) {
            var n = t ? B.norm(t) : t;
            void 0 !== n && null !== n || (n = ""), null !== n && B.isStr(n) && (n = n.replace(/\\/g, "\\\\")), e = e.replace(/[^a-zA-Z0-9-_\u0080-\uFFFF]/g, "_"), B.isValidPair(e, n) && (this.map[B.norm(e)] = n, this.count++)
        },
        get: function(e) {
            return this.map[e]
        },
        getAll: function() {
            return this.map
        },
        absorb: function(e) {
            if (e && B.isObj(e))
                for (var t in e) B.hasOwn(e, t) && this.set(t, e[t])
        },
        absorb_filter: function(e, t) {
            if (e && B.isObj(e))
                for (var n in e) t && !t.call(null, n) || B.hasOwn(e, n) && this.set(n, e[n])
        },
        getSize: function() {
            return this.count
        }
    }, n.prototype = new t, n.prototype.constructor = t, r.prototype = new t, r.prototype.constructor = t, n.makeFromPP = function(e) {
        var t = new n;
        return e && t.absorb(e.getAll()), t
    };
    var Y = new n,
        B = V(e),
        j = new _,
        U = {
            none: 0,
            gzip: 1,
            lzw: 2,
            deflate: 3
        };
    p.prototype = {
        getCookieByName: function(e) {
            return this.cookieMap[e]
        },
        getRxx: function() {
            var e = this.cookieMap.rxx;
            if (q.fpc && (void 0 === e || null === e || "" === e)) {
                var t = document.domain || "";
                t = "." + t.split(".").slice(-2).join(".");
                var n = Date.UTC(2015, 7, 1),
                    r = (new Date).getTime() - n;
                e = parseInt(Math.random().toString().substring(2)).toString(36) + "." + r.toString(36) + "&v=1", h("rxx", e, 31536e3, t)
            }
            return e
        },
        extendBCookie: function() {
            var e = this.cookieMap.B;
            e ? h("B", e, 31536e3, ".yahoo.com") : u("Bcookie not set")
        }
    };
    var q = s(e),
        W = function() {
            function e(e, t) {
                q.ldbg && f(e);
                var n = new Image,
                    r = null;
                n.onload = n.onabort = n.onerror = function() {
                    t && "function" == typeof t && (clearTimeout(r), t.call(null))
                }, n.src = e, t && "function" == typeof t && (r = setTimeout(function() {
                    t.call(null)
                }, q.click_timeout)), setTimeout(function() {
                    n = null
                }, 1e7)
            }

            function t() {
                return "rapid_if_" + B.rand()
            }

            function r(e) {
                var t = "display:none;";
                !B.isIE || 6 !== B.ieV && 7 !== B.ieV && 8 !== B.ieV ? B.sa(e, "style", t) : e.style.setAttribute("cssText", t, 0)
            }

            function i(e) {
                var t = null;
                if (B.isIE && B.ieV <= 8) {
                    var n = "";
                    B.isSecure() && 6 == B.ieV && (n = 'src="https://geo.yahoo.com/b.html"'), t = document.createElement("<iframe " + n + ' name="' + e + '"></iframe>')
                } else t = document.createElement("iframe");
                return t.name = e, t
            }

            function o() {
                setTimeout(function() {
                    var e = i("");
                    B.addEvent(e, "load", function() {
                        B.rmBodyEl(e)
                    }), B.appBodyEl(e)
                }, 1)
            }

            function a(e, n) {
                var a = null,
                    l = B.make("form"),
                    c = B.make("input"),
                    u = t(),
                    d = t(),
                    p = "application/x-www-form-urlencoded;charset=UTF-8";
                a = i(u), r(a), r(l), l.id = d, l.method = "POST", l.action = s(n), l.target = u, B.isIE && B.ieV <= 7 ? l.setAttribute("enctype", p) : (l.setAttribute("enctype", p), l.setAttribute("encoding", p)), c.name = "q", c.value = e, B.isIE && B.ieV >= 10 && (c.type = "submit"), l.appendChild(c);
                var m = function() {
                    var e = "";
                    if (q.ldbg && (!B.isIE || B.ieV >= 9)) {
                        e = (a.contentDocument || a.contentWindow.document).body.innerHTML
                    }
                    B.rmEvent(a, "load", m), setTimeout(function() {
                        B.rmBodyEl(a), B.rmBodyEl(l)
                    }, 0), q.ldbg && f("iframe resp: " + e), B.isIE && B.ieV <= 7 && o()
                };
                B.addEvent(a, "load", m), B.appBodyEl(a), B.appBodyEl(l), l.submit()
            }

            function s(e) {
                var t = q.deb,
                    n = B.rand(),
                    r = ["http:" === window.location.protocol ? "http://" : "https://", q.yql_host, q.yql_path, "?yhlVer=2&yhlClient=rapid&yhlS=", q.spaceid, !0 === t ? "&yhlEnv=staging" : "", !0 === t || q.ldbg ? "&debug=true&diagnostics=true" : "", B.isIE && B.ieV ? "&yhlUA=ie" + B.ieV : "", B.isIE && 8 == B.ieV ? "&format=json" : "", "&yhlCT=2", "&yhlBTMS=", (new Date).valueOf(), "&yhlClientVer=", q.version, "&yhlRnd=", n, "&yhlCompressed=", e || 0, q.gen_bcookie ? "&yhlBcookie=1" : ""].join("");
                return q.ldbg && f(r), r
            }

            function l(t) {
                e(T("p", new n(t), 1197799914))
            }

            function c(e, t) {
                var n = s(t);
                try {
                    var r = B.getXHR();
                    r.open("POST", n, !0), r.withCredentials = !0, r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"), q.ldbg && (r.onreadystatechange = function() {
                        4 === r.readyState && f(r.status + ":xhr response: " + r.responseText)
                    }), r.send(e)
                } catch (e) {
                    l({
                        _err_nm: "sendToYQL Failed",
                        _err_msg: "sendToYQL Failed",
                        _err_rs: String(e),
                        _err_st: e.stack,
                        urlUsed: n
                    })
                }
            }

            function p(e, t, n) {
                var r = {};
                return B.isObj(e) ? (B.aug(r, e, n), r) : r
            }

            function m(e, t, n) {
                n = n || {};
                var r = {
                    m: B.norm(e.moduleName),
                    l: []
                };
                e.moduleYLK && (r.ylk = e.moduleYLK.getAll());
                for (var i = r.ylk && r.ylk.sec ? r.ylk.sec : "", o = e.links, o = e.links, a = function(e, n) {
                        var o = "_p" === e;
                        return !(!t || !o) || ("sec" == e && n != r.m && n != i || "sec" !== e && !o)
                    }, s = 0, l = o.length; s < l; s++) o[s] && (!q.viewability || o[s].viewable ? r.l.push(p(o[s].data, t, a)) : q.ldbg && f("Skipping not viewable link: " + o[s].data.slk));
                return r
            }

            function h(e, t, n) {
                var r = [],
                    i = null;
                for (var o in e)
                    if (B.hasOwn(e, o) && (i = e[o])) {
                        var a = m(i, t, n);
                        a.l.length > 0 ? r.push(a) : q.ldbg && f('Not capturing 0 links mod: "' + i.moduleName + '"')
                    }
                return r
            }

            function g(e, t) {
                return e ? "pv" : t && t.event ? t.event.type.getYQLID() : "lv"
            }

            function _(e, t, n, r, i) {
                var o;
                return o = X ? ee : v(), [{
                    t: g(t, i),
                    s: q.spaceid,
                    pp: w(t, r).getAll(),
                    _ts: o.ts,
                    _ms: o.ms,
                    lv: h(e, n, i)
                }]
            }

            function w(e, t) {
                var r = n.makeFromPP(q.keys);
                return r.absorb(t), e && r.set("A_", 1), r.set("A_sr", B.sr()), r.set("A_vr", B.vr()), r.set("A_do", B.dor()), r
            }

            function y(e, t, n) {
                var r = "select * from x where a = '" + e + "'";
                return (t ? "q=" : "") + (n ? B.enc(r) : r)
            }

            function b(e) {
                var t = {
                    bp: D().getAll(),
                    r: e.call(0),
                    yrid: q.yrid,
                    optout: q.oo,
                    nol: q.nol
                };
                return B.toJSON(t)
            }

            function k(e, t, n) {
                var r = {};
                t && X && X.start_dwell() && (r.etag = "dwell,start", r.usergenf = 1, r.A_prets = te ? te.ts : null, r.A_prems = te ? te.ms : null), n.event && B.aug(r, n.event.data), n.pp && B.aug(r, n.pp), C(b(function() {
                    return _([e], t, !0, r, n)
                }))
            }

            function A(e, t, n, r) {
                C(b(function() {
                    return _(e, t, !0, n, r)
                }))
            }

            function E(e) {
                return e.identifier
            }

            function C(e) {
                function t(e, t) {
                    0 === t && (e = e.replace(/'/g, "\\'")), r && f("body: " + e), B.hasCORS() ? (i = y(e, !0, !0), c(i, t)) : (i = y(e, 0, 0), a(i, t))
                }

                function n() {
                    l || (l = !0, t(e, 0), r && f("sent in failSend"))
                }
                var r = q.ldbg,
                    i = "",
                    o = U[q.compr_type];
                if (q.compr_on && B.hasWorkers() && o > 1 && e.length > 2048) {
                    r && f("Looking for worker:" + q.webworker_file + ", compr timeout:" + q.compr_timeout);
                    try {
                        var s = new Worker(q.webworker_file),
                            l = !1,
                            d = null,
                            p = 0;
                        s.onerror = function(e) {
                            clearTimeout(d), n(), u(e.message), s.terminate()
                        }, s.onmessage = function(i) {
                            clearTimeout(d);
                            var a = B.tms();
                            "Decompress fail" !== i.data && "Compress fail" !== i.data && 0 != i.data.indexOf("error:") || (r && f(i.data), n()), l || (l = !0, t(i.data, o)), r && f("Ratio (" + i.data.length + "/" + e.length + "): " + (100 * i.data.length / e.length).toFixed(2) + "% -> C_T: " + (a - p) + " ms (" + a + "-" + p + ")"), s.terminate()
                        }, r && f("posting to worker: " + e), p = B.tms(), s.postMessage({
                            type: o,
                            json: e
                        }), d = setTimeout(function() {
                            n(), s.terminate()
                        }, q.compr_timeout)
                    } catch (n) {
                        r && f("compression worker exception " + n), t(e, 0)
                    }
                } else t(e, 0)
            }

            function T(e, t, n) {
                return ("http:" === window.location.protocol ? "http://" : "https://") + S + "/" + e + ["?s=" + (n || q.spaceid), "t=" + B.rand() + "," + Math.random(), "_I=" + q.yrid, "_AO=" + q.oo, "_NOL=" + q.nol, "_R=" + B.enc(q.getReferrer()), ("c" === e ? "_K=" : "_P=") + x(t)].join("&")
            }

            function x(e) {
                var t = new n(D(!1).getAll());
                t.absorb(q.keys.getAll()), e && (e instanceof n ? t.absorb(e.getAll()) : d("Internal error in buildGeoPP: not PP type"));
                var r;
                return r = "dwell,start" === t.get("etag") ? ee : "dwell,stop" === t.get("etag") ? te : v(), t.set("_ts", r.ts), t.set("_ms", r.ms), t.set("A_sr", B.sr()), t.set("A_vr", B.vr()), t.set("A_do", B.dor()), q.version + "%05" + t.ser()
            }

            function O(e) {
                return [T("c", new n(e.pp)) + "&_C=" + B.ser(e.data)].join("&")
            }
            var S = YAHOO.i13n.beacon_server || "geo.yahoo.com",
                D = function(e) {
                    var t = new n;
                    t.set("_pl", 1), t.set("A_v", q.version);
                    var r = q.getReferrer();
                    if (r && !1 !== e && t.set("_R", r), q.test_id && t.set("test", q.test_id), q.ex && t.set("_ex", 1), t.get("_bt") || t.set("_bt", "rapid"), q.query_parameters) {
                        var i = /^(test|outcm|etrg|usergenf|etag|sec|slk|tar|tar_uri|yhldebug|tsrc|action)$|^(A_|_)/,
                            o = document.location.search;
                        if (o) {
                            o = o.substring(1), o = o.split("&");
                            for (var a in o)
                                if (o.hasOwnProperty(a)) {
                                    var s = o[a].split("=");
                                    if (s.length >= 2) {
                                        var l = decodeURIComponent(s[0]),
                                            c = decodeURIComponent(s[1]),
                                            u = !i.test(l);
                                        f("Queryparams decoded: " + l + " : " + c), f("Blacklist filter: " + u), u && t.set(l, c)
                                    }
                                }
                        }
                    }
                    var d = window.location.protocol || "";
                    d = d.replace(/:$/, ""), t.set("A_pr", d);
                    var p = (new Date).getTimezoneOffset();
                    return p = p ? -1 * p / 60 : 0, t.set("A_tzoff", p), t
                },
                M = function() {
                    var e = null,
                        t = [],
                        n = 0,
                        r = q.addmod_timeout;
                    return function(i, o, a, s) {
                        clearTimeout(e);
                        var l = +new Date - n;
                        if (t = B.uniqConcat(t, i, E), l > r) n = +new Date, A(t, o, a, s), t = [];
                        else {
                            var c = r - l;
                            e = setTimeout(function() {
                                q.ldbg && f("queueing send in addMods"), A(t, o, a, s), t = []
                            }, c)
                        }
                    }
                }();
            return {
                sendGeoT: function(t) {
                    e(["http:" === window.location.protocol ? "http://" : "https://", S, "/t?", t].join(""))
                },
                sendGeoPV: function() {
                    e(T("b"))
                },
                sendRapidNoDelay: function(t, r, i, o, a) {
                    if (r && X && X.start_dwell() && (i.etag = "dwell,start", i.usergenf = 1, i.A_prets = te ? te.ts : null, i.A_prems = te ? te.ms : null), !q.yql_enabled || a) {
                        var s = null;
                        i && (s = new n(i)), e(T(r ? "b" : "p", s))
                    } else A(t, r, i, o)
                },
                sendRapid: function(e, t, n, r) {
                    t && X && X.start_dwell() && (n.etag = "dwell,start", n.usergenf = 1, n.A_prets = te ? te.ts : null, n.A_prems = te ? te.ms : null), M(e, t, n, r)
                },
                sendRefreshedContent: k,
                sendULTEvent: function(t, r) {
                    var i = {};
                    t && t.data && (i = t.data);
                    var o = T("p", new n(i), r || 0);
                    t.type && (o += "&_V=" + t.type.spaceidPrefix), e(o)
                },
                sendEvents: function(e, t) {
                    q.USE_RAPID && this.sendULTEvent(e)
                },
                sendClick: function(t, n) {
                    var r = null,
                        i = "",
                        o = !1;
                    if (q.USE_RAPID && (i = O(t)), q.async_all_clicks || !t.synch) return void(i && e(i, n));
                    B.prevDef(t.event), r = function() {
                        if (!o) {
                            if (o = !0, n) return void n.call();
                            var e = t.targetElement.href;
                            if (q.click_postmsg.origin) {
                                var r = q.click_postmsg.window || top,
                                    i = q.click_postmsg.payload || {};
                                i.href = e, r.postMessage(B.toJSON(i), q.click_postmsg.origin)
                            } else t.hasTargetTop ? top.document.location = e : document.location = e
                        }
                    }, q.USE_RAPID && e(i, r)
                }
            }
        }(),
        F = null,
        K = null,
        X = null,
        z = null,
        $ = new p,
        J = $.getRxx();
    null != J && Y.set("_rx", J);
    var G = $.getCookieByName("_ga");
    null != G && Y.set("_ga", G);
    var Q = $.getCookieByName("yx");
    null != Q && Y.set("_yx", Q);
    var Z = (function() {
            var e = {}
        }(), 0),
        ee = null,
        te = null;
    ! function() {
        q.dwell_on && (X = new L), m(), q.ldbg && f("tracked_mods: " + B.fData(q.tracked_mods));
        var e = j.addModules(q.tracked_mods, !1),
            t = j.addModules(q.tracked_mods_viewability, q.viewability);
        q.USE_RAPID && q.pageview_on_init && W.sendRapidNoDelay(e.concat(t), 1 == q.client_only), q.prerender && H(), B.executeOnLoad(function() {
            K = new M, q.apv && (F = new P), R(), $.extendBCookie()
        })
    }();
    var ne = {
        utils: B
    };
    return {
        init: function() {},
        beaconEvent: function(e, t, n, r) {
            D(e, t, n, r)
        },
        beaconClick: function(e, t, n, r, i, o, a) {
            q.ldbg && f("beaconClick: sec=" + e + " slk=" + t + " callback=" + o), !r && i && (r = {});
            var s = {};
            if (i && (r.outcm = i), a && a.pp && B.aug(s, a.pp), a && a.dwell && q.dwell_on) {
                var l = a.dwell;
                "start" !== l && "stop" !== l || ("start" === l ? X.start_dwell() && (s.etag = "dwell," + l, s.usergenf = 1, s.A_prets = te ? te.ts : null, s.A_prems = te ? te.ms : null) : X.stop_dwell() && (s.etag = "dwell," + l, s.usergenf = 1, s.A_prets = ee ? ee.ts : null, s.A_prems = ee ? ee.ms : null))
            }
            var c = C(e, t, n, r, i);
            c.pp = s, W.sendClick(c, o)
        },
        addModuleAPV: function(e) {
            return new P(e)
        },
        addModules: function(e, t, n) {
            q.ldbg && f("addModules() called: mods=" + B.fData(e) + " isPage: " + t), n = n || {};
            var r = {
                A_am: 1
            };
            n.pp && B.aug(r, n.pp), n.useViewability = n.useViewability || !1, n.clickonly = n.clickonly || !1;
            var i = !1;
            switch (t || (t = !!n.useViewability && 2), t) {
                case 1:
                case "1":
                case !0:
                    t = !0, i = !0;
                    break;
                case 2:
                case "2":
                    !0, t = !1, n.event = A("contentmodification", "", {});
                    break;
                case 0:
                case "0":
                case !1:
                default:
                    t = !1
            }
            if (!q.yql_enabled) return void(t ? S(r, i) : n.event && this.beaconRichView(r, n.event.outcome));
            n && n.event && t && (d("Cannot track event type and pageview at same time."), n.event = null);
            var o = j.addModules(e, n.useViewability);
            (0 !== o.length || n.event) && (n.clickonly && (o = []), (q.USE_RAPID || n.event) && (t || n.event || n.pp ? (i && !q.persist_asid && l(), n.event && n.event.data && B.aug(r, n.event.data), W.sendRapidNoDelay(o, t, r, n)) : o.length > 0 && W.sendRapid(o, t, r, n)), !0 === t && q.apv && F && F.reInit())
        },
        addModulesWithViewability: function(e, t, n) {
            n = n || {}, n.useViewability = q.viewability, this.addModules(e, t, n)
        },
        refreshModule: function(e, t, n, r) {
            q.ldbg && f("refreshModule called: mod=" + e + " isPV: " + t + " sendLinks: " + n + " options: " + B.fData(r));
            var i = !1;
            switch (r = r || {}, t || (t = !1), t) {
                case 1:
                case "1":
                case !0:
                    t = !0, i = !0;
                    break;
                case 2:
                case "2":
                    !0, t = !1, r.event = A("contentmodification", "", {});
                    break;
                case 0:
                case "0":
                case !1:
                default:
                    t = !1
            }
            if (!q.yql_enabled) {
                var o = r.pp || {};
                return void(t ? S(o, i) : r.event && this.beaconRichView(o, r.event.outcome))
            }
            var a = !1 !== n;
            i && !q.persist_asid && l(), t && r && r.event && (r.event = null), j.refreshModule(e, t, a, r)
        },
        removeModule: function(e) {
            j.removeModule(e)
        },
        isModuleTracked: function(e) {
            return q.ldbg && f("isTracked called: " + e), j && void 0 !== j.exists(e)
        },
        destroy: function() {
            f("destroy called"), j.destroy(), F && (F.destroy(), F = null), K && (K.destroy(), K = null), X && (X.destroy(), X = null)
        },
        reInit: function(e) {
            if (q.ldbg && f("reInit called with: " + B.fData(e)), e = e || {}, !e.spaceid) return void d("Invalid spid in reInit config: " + B.fData(e));
            Y = new n, q = s(e), B = V(e);
            var t = new p,
                r = t.getRxx();
            null != r && Y.set("_rx", r);
            var i = t.getCookieByName("_ga");
            null != i && Y.set("_ga", i);
            var o = t.getCookieByName("yx");
            null != o && Y.set("_yx", o)
        },
        setRapidAttribute: function(e) {
            e.keys && q.keys.absorb(e.keys), e.spaceid && (q.spaceid = e.spaceid), e.referrer && (q.referrer = e.referrer), e.A_sid && (q.keys.set("A_sid", e.A_sid), q.persist_asid = !0), e.location && (q.loc = e.location, q.keys.set("_w", B.rmProto(e.location))), B.hasOwn(e, "apv") && (e.apv ? F ? F.reInit() : F = new P : F && (F.destroy(), F = null))
        },
        clearRapidAttribute: function(e) {
            for (var t in e)
                if ("keys" === e[t]) {
                    var r = q.keys.get("_w"),
                        i = q.keys.get("A_sid");
                    q.keys = new n, q.keys.set("_w", r), q.keys.set("A_sid", i)
                } else "referrer" === e[t] ? q.referrer = "" : "A_sid" === e[t] ? (q.keys.set("A_sid", ""), q.persist_asid = !0) : "location" === e[t] && (q.loc = "", q.keys.set("_w", ""))
        },
        beaconPageview: function(e) {
            S(e, !0)
        },
        beaconECommerce: function(e, t) {},
        beaconInternalSearch: function(e, t) {},
        getCurrentSID: function() {
            return Y.get("A_sid")
        },
        notifyHistoryPushStateCalled: function() {},
        beaconLinkViews: function(e, t, n, i) {
            q.ldbg && f("beaconLinkViews() called"), n = n || {};
            var o = {};
            n.pp && B.aug(o, n.pp);
            var a = !1;
            switch (t) {
                case 1:
                case "1":
                case !0:
                    a = !0;
                    break;
                case 2:
                case "2":
                    !0, a = !1, n.event = A("contentmodification", "", {});
                    break;
                case 0:
                case "0":
                case !1:
                default:
                    a = !1
            }
            if (!q.yql_enabled) return void(a ? S(o, !1) : n.event && this.beaconRichView(o, n.event.outcome));
            if (n && n.event && a && (d("Cannot track event type and pageview at same time."), n.event = null), 0 !== e.length || n.event) {
                for (var s = [], l = 0; l < e.length; l++) {
                    var c = e[l],
                        u = new r;
                    u.absorb_filter(c, function(e) {
                        return "sec" != e && "_links" != e
                    });
                    for (var p = [], m = 1, v = 0; v < c._links.length; v++) {
                        var h = c._links[v],
                            g = {
                                viewable: !0,
                                data: {
                                    sec: c.sec,
                                    _p: m++,
                                    A_lv: 2
                                }
                            };
                        B.aug(g.data, h), p.push(g)
                    }
                    var _ = {
                        moduleName: c.sec,
                        moduleYLK: u,
                        links: p,
                        identifier: c.sec
                    };
                    s.push(_)
                }(q.USE_RAPID || n.event) && ((a || n.event || n.pp) && n.event && n.event.data && B.aug(o, n.event.data), W.sendRapidNoDelay(s, a, o, n)), i && i.call()
            }
        },
        beaconPerformanceData: function(e, t) {
            R(e, t)
        },
        __test_only__: function() {
            return ne
        }
    }
};