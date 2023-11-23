! function() {
    function le(l) {
        var c = {
                A1S: {
                    log: !0,
                    key: "_a1s"
                },
                B: {
                    log: !1
                },
                BX: {
                    log: !0,
                    key: "bx"
                },
                WV: {
                    log: !0,
                    key: "_wv"
                },
                TT: {
                    log: !1
                },
                D: {
                    log: !1
                },
                _ga: {
                    log: !0,
                    key: "_ga"
                },
                yx: {
                    log: !0,
                    key: "_yx"
                },
                rxx: {
                    log: !0,
                    key: "_rx"
                },
                UNAUTHID: {
                    log: !0,
                    key: "aol_unauth"
                },
                _utd: {
                    log: !0,
                    key: "aol_utd",
                    filter: function(e) {
                        e = e.match(/((?:\||^))gd#[^\|]+/g)[0].split("#")[1];
                        return 24 !== e.length && console.warn("_utd value may be malformed"), e
                    }
                },
                RSP_COOKIE: {
                    log: !0,
                    key: "aol_rsp",
                    filter: function(e) {
                        e = e.match(/(?:(\&|^))sn=[^\&]+/g)[0].split("=")[1];
                        return 24 !== e.length && console.warn("RSP_COOKIE value may be malformed"), e
                    }
                },
                GUC: {
                    log: !0,
                    key: "_guc"
                },
                OTH: {
                    log: !0,
                    key: "_li",
                    filter: function() {
                        return "1"
                    }
                }
            },
            u = {};
        this.getCookieByName = function(e) {
            return u[e]
        }, this.setRxx = function(e) {
            var o = -2,
                t = (document.domain || "").split("."),
                r = t.length;

            function a(e) {
                return "." + t.slice(e).join(".")
            }

            function s() {
                var e, t = a(o),
                    n = "rxx",
                    i = u[n];
                i || (e = (new Date).getTime() - 14383872e5, i = parseInt(Math.random().toString().substring(2)).toString(36) + "." + e.toString(36) + "&v=1"),
                    function(e, t, n, i) {
                        var o = new Date;
                        o.setTime(o.getTime() + 1e3 * n), n = "", n = e + "=" + t + ("; expires=" + o.toGMTString()) + (n = i ? ";domain=" + i : n) + "; path=/";
                        try {
                            document.cookie = n
                        } catch (e) {
                            console.warn("Rapid Was Prevented From Accessing Cookies:", e)
                        }
                    }(n, i, 31536e3, t);
                t = -1;
                try {
                    t = document.cookie.indexOf(i)
                } catch (e) {
                    console.warn("Rapid Was Prevented From Accessing Cookies:", e)
                } - 1 !== t ? (u[n] = i, n = c[n], l && n && n.log && l.set(n.key, i)) : 0 < o + r && (o--, s())
            }
            e.fpc && ".yahoo.com" !== a(o) && s()
        };
        var e = null;
        try {
            e = document.cookie
        } catch (e) {
            console.warn("Rapid Was Prevented From Accessing Cookies:", e)
        }
        if (e && /[^=]+=[^=;]?(?:; [^=]+=[^=]?)?/.test(e))
            for (var t, n = e.split(/;\s/g), i = null, o = null, r = 0, a = n.length; r < a; r++) {
                if ((t = n[r].match(/([^=]+)=/i)) instanceof Array) try {
                    i = decodeURIComponent(t[1]), o = n[r].substring(t[1].length + 1)
                } catch (e) {
                    console.error(e)
                } else o = i = decodeURIComponent(n[r]);
                var s = c[i];
                if (s && !u[i]) {
                    if (o = o.replace(/(^["']|["']$)/g, ""), s.filter && "function" == typeof s.filter) try {
                        o = s.filter(o)
                    } catch (e) {
                        console.error(i + " Has an Invalid Value; Cookie is not captured"), o = null
                    }
                    o && (o = decodeURIComponent(o), u[i] || (u[i] = o, l && s.log && l.set(s.key || i, o)))
                }
            }
    }
    "undefined" != typeof YAHOO && YAHOO || (YAHOO = {}), YAHOO.i13n = YAHOO.i13n || {}, YAHOO.i13n.hasTAS = function() {
        return "3" === (function(e) {
            if (e) {
                e = e.split(":");
                if ("1" === e[0]) return {
                    version: e[0],
                    creation_time: e[1],
                    app_spaceid: e[2],
                    os: e[3],
                    bundleid: e[4],
                    app_version: e[5],
                    effective_deviceid: e[6],
                    deviceid_type: e[7],
                    limit_ad_tracking: e[8]
                };
                if ("2" === e[0]) return {
                    version: e[0],
                    creation_time: e[1],
                    app_spaceid: e[2],
                    os: e[3],
                    bundleid: e[4],
                    app_version: e[5],
                    effective_deviceid: e[6],
                    deviceid_type: e[7],
                    limit_ad_tracking: e[8],
                    tracking_auth_status: e[9]
                }
            }
            return {}
        }((new le).getCookieByName("WV")).tracking_auth_status || -1)
    }, YAHOO.i13n.EventTypes = function() {
        var e = "richview";

        function t(e, t, n) {
            this.yqlid = e, this.eventName = t, this.spaceidPrefix = n
        }
        t.prototype = {
            getYQLID: function() {
                return this.yqlid
            },
            getEventName: function() {
                return this.eventName
            }
        };
        var n = {
            pageview: new t("pv", "pageview", ""),
            simple: new t("lv", "event", "P"),
            linkview: new t("lv", "linkview", "P"),
            richview: new t(e, e, "R"),
            contentmodification: new t(e, "contentmodification", "R"),
            dwell: new t("lv", "dwell", "D")
        };
        return {
            getEventByName: function(e) {
                return n[e]
            }
        }
    }();
    var ce = "3.53.39",
        ue = "VERSIONED-PROD",
        de = [];
    YAHOO.i13n.__RAPID_INSTANCES__ = de, YAHOO.i13n.__RAPID_INFO__ = {
        version: ce,
        comboName: ue
    }, YAHOO.i13n.Rapid = function(s) {
        var h = {};

        function e() {}

        function d(e) {
            this.map = {}, this.count = 0, e && this.absorb(e)
        }

        function g() {
            this.map = {}, this.count = 0
        }
        "undefined" != typeof console && void 0 !== console.log || (console = {
            log: function() {}
        }), void 0 === console.error && (console.error = console.log), void 0 === console.warn && (console.warn = console.log), e.prototype = {
            ser: function() {
                return y.ser(this.map)
            },
            set: function(e, t) {
                t = t && y.norm(t);
                null !== (t = null == t ? "" : t) && y.isStr(t) && (t = t.replace(/\\/g, "\\\\")), e = e.replace(/[^a-zA-Z0-9-_\u0080-\uFFFF]/g, "_"), y.isValidPair(e, t) && (this.map[y.norm(e)] = t, this.count++)
            },
            get: function(e) {
                return this.map[e]
            },
            getAll: function() {
                return this.map
            },
            absorb: function(e) {
                if (e && y.isObj(e))
                    for (var t in e) y.hasOwn(e, t) && this.set(t, e[t])
            },
            absorb_filter: function(e, t) {
                if (e && y.isObj(e))
                    for (var n in e) t && !t.call(null, n) || y.hasOwn(e, n) && this.set(n, e[n])
            },
            getSize: function() {
                return this.count
            }
        }, d.prototype = new e, (g.prototype = new(d.prototype.constructor = e)).constructor = e, d.makeFromPP = function(e) {
            var t = new d;
            return e && t.absorb(e.getAll()), t
        };
        var y = se(s),
            t = new J(window),
            l = new d;
        h.keys = l;
        var i = t.getModules(),
            f = {
                none: 0,
                gzip: 1,
                lzw: 2,
                deflate: 3
            };

        function b(e, t) {
            var n = new g,
                e = y.getAttribute(e, "data-ylk");
            if (null === e || 0 === e.length) return n;
            for (var i = e.split(y.ylk_pair_delim), o = 0, r = i.length; o < r; o++) {
                var a, s = i[o].split(y.ylk_kv_delim);
                2 === s.length && (a = s[0], s = s[1], null !== a && "" !== a && null !== s && ("_p" === a && !t || n.set(a, s)))
            }
            return n
        }

        function k(e, t) {
            if (!e) return null;
            null === t && (t = !1);
            var n = new g,
                i = y.getAttribute(e, y.data_action_outcome);
            return i && n.set("outcm", i), n.absorb(b(e, t).getAll()), n
        }

        function n(e) {
            YAHOO.i13n;
            var t = YAHOO.i13n.TEST_ID || e.test_id,
                n = e.location || document.location && document.location.href || "";
            r = e.keys, o = n, l.set("A_sid", YAHOO.i13n.A_SID || y.rand()), l.set("_w", y.rmProto(o)), r ? l.absorb(r) : s.keys && l.absorb(s.keys);
            var t = t && y.norm("" + t),
                i = e.override || {},
                o = "geo.yahoo.com",
                r = "udc.yahoo.com";
            !0 !== e.fpc && "yahoo.com" === document.domain.split(".").slice(-2).join(".") || (o = "3p-" + o, r = "3p-" + r);
            r = {
                override: i,
                version: ce,
                comboName: ue,
                keys: l,
                referrer: e.referrer,
                getReferrer: function() {
                    return y.norm(y.clref((void 0 !== this.referrer ? this : document).referrer))
                },
                spaceid: y.norm(i.spaceid || YAHOO.i13n.SPACEID || e.spaceid),
                yrid: y.norm(e.yrid || ""),
                oo: e.oo ? "1" : "0",
                nol: e.nol ? "1" : "0",
                yql_enabled: !1 !== e.yql_enabled,
                fing: 1 == e.use_fing,
                linktrack_attribut: e.lt_attr || "text",
                tracked_mods: e.tracked_mods || [],
                tracked_mods_viewability: e.tracked_mods_viewability || [],
                viewability: !1 !== e.viewability,
                viewability_time: e.viewability_time || 300,
                viewability_px: e.viewability_px || 50,
                lt_attr: e.lt_attr || "text",
                client_only: void 0 === e.client_only || !!e.client_only,
                text_link_len: e.text_link_len || -1,
                test_id: t,
                yql_host: e.yql_host || r,
                yql_path: e.yql_path || "/v2/public/yql",
                geo_host: e.geo_host || o,
                anonymized: !0 === e.anonymized,
                click_timeout: e.click_timeout || 1e4,
                compr_timeout: e.compr_timeout || 700,
                compr_on: !1 !== e.compr_on,
                compr_type: e.compr_type || "deflate",
                webworker_file: YAHOO.i13n.WEBWORKER_FILE || e.webworker_file || null,
                nofollow_classname: e.nofollow_class || "rapidnofollow",
                no_click_listen: e.rapid_noclick_resp || "rapid-noclick-resp",
                nonanchor_track_class: e.nonanchor_track_class || "rapid-nonanchor-lt",
                track_input: e.track_input || "rapid-track-input",
                click_id_class: e.click_id_class || "rapid-with-clickid",
                anc_pos_attr: "data-rapid_p",
                anc_v9y_attr: "data-v9y",
                deb: !0 === e.debug,
                ldbg: 0 < e.ldbg || 0 < n.indexOf("yhldebug=1"),
                addmod_timeout: e.addmodules_timeout || 300,
                ult_token_capture: "boolean" == typeof e.ult_token_capture && e.ult_token_capture,
                track_type: e.track_type || "data-tracktype",
                dwell_on: !1 !== e.dwell_on,
                prerender: !0 === e.prerender,
                query_parameters: !1 !== e.query_parameters,
                async_all_clicks: !0 === e.async_all_clicks,
                click_postmsg: e.click_postmsg || {},
                apv: !1 !== e.apv,
                apv_time: e.apv_time || 500,
                apv_px: e.apv_px || 500,
                ex: !0 === e.ex,
                persist_asid: !0 === e.persist_asid,
                track_right_click: !1 !== e.track_right_click,
                gen_bcookie: !0 === e.gen_bcookie,
                bcookie_override: e.bcookie_override || null,
                skip_attr: e.skip_attr || "data-rapid-skip",
                parse_dom: !0 === e.parse_dom,
                pageview_on_init: !1 !== e.pageview_on_init,
                perf_navigationtime: e.perf_navigationtime || 0,
                perf_commontime: e.perf_commontime || null,
                perf_usertime: e.perf_usertime || null,
                perf_resourcetime: e.perf_resourcetime || 0,
                sample: e.sample || {},
                loc: n,
                fpc: !0 === e.fpc,
                accountGUID: e.accountGUID || null,
                customUID: e.customUID || null
            };
            r.anonymized && (r.geo_host = "ganon.yahoo.com"), (r.anonymized || r.bcookie_override) && (r.yql_enabled = !1), r.customUID && ("object" == typeof(a = r.customUID) && a.type && a.id ? r.customUID = y.aug({}, a) : (console.error('customUID must be an Object with "id" and "type"'), r.customUID = null));
            var a, o = +r.compr_timeout;
            return y.isNum(o) ? r.compr_timeout = (n = 700, (a = o) < (o = 300) ? o : n < a ? n : a) : r.compr_timeout = 700, r.ldbg && 1e4 != r.click_timeout && console.warn("Click timeout set to " + r.click_timeout + "ms (default 10000ms)"), e.apv_callback && "function" == typeof e.apv_callback ? r.apv_callback = e.apv_callback : r.apv_callback = null, r
        }

        function c() {
            l.set("A_sid", y.rand())
        }

        function A(e) {
            D.ldbg && console.warn("RAPID WARNING: " + e)
        }

        function v(e) {
            D.ldbg && console.error("RAPID ERROR: " + e)
        }

        function E(e) {
            D.ldbg && console.log("Rapid-" + D.version + "(" + (new Date).getTime() + "):" + e)
        }
        var o = {
            tumblr: !0
        };
        var D = n(s);
        h.conf = D;
        var r, a, u, O = (r = D.geo_host || YAHOO.i13n.beacon_server, a = function(e) {
                var t = new d;
                j = new le(t), t.set("_pl", 1), t.set("A_v", D.version), t.set("A_cn", D.comboName);
                var n = D.getReferrer();
                if (n && !1 !== e && t.set("_R", n), D.test_id && t.set("test", D.test_id), D.customUID && (l = D.customUID, t.set("user_id", l.id), t.set("user_id_type", l.type)), D.accountGUID && t.set("_lGUID", D.accountGUID), D.ex && t.set("_ex", 1), t.get("_bt") || t.set("_bt", "rapid"), D.query_parameters) {
                    var i, o, r = /^(test|outcm|etrg|usergenf|etag|sec|slk|tar|tar_uri|yhldebug|tsrc|action)$|^(A_|_)/,
                        a = document.location.search;
                    if (a)
                        for (var s in a = (a = a.substring(1)).split("&")) !a.hasOwnProperty(s) || 2 <= (o = a[s].split("=")).length && (i = decodeURIComponent(o[0]), s = decodeURIComponent(o[1]), o = !r.test(i), E("Queryparams decoded: " + i + " : " + s), E("Blacklist filter: " + o), o && t.set(i, s))
                }
                var l = (l = window.location.protocol || "").replace(/:$/, "");
                t.set("A_pr", l);
                l = (l = (new Date).getTimezoneOffset()) ? -1 * l / 60 : 0;
                return t.set("A_tzoff", l), t
            }, u = function() {
                var r = null,
                    a = [],
                    s = 0,
                    l = D.addmod_timeout;
                return function(e, t, n, i) {
                    clearTimeout(r);
                    var o = +new Date - s;
                    a = y.uniqConcat(a, e, U), l < o ? (s = +new Date, V(a, t, n, i), a = []) : r = setTimeout(function() {
                        D.ldbg && E("queueing send in addMods"), V(a, t, n, i), a = []
                    }, l - o)
                }
            }(), {
                sendGeoT: function(e) {
                    p(["http:" === window.location.protocol ? "http://" : "https://", r, "/t?", e].join(""))
                },
                sendGeoPV: function() {
                    p(H("b"))
                },
                sendRapidNoDelay: function(e, t, n, i, o) {
                    t && I && I.start_dwell() && (n.etag = "dwell,start", n.usergenf = 1, n.A_prets = oe ? oe.ts : null, n.A_prems = oe ? oe.ms : null), !D.yql_enabled || o ? (o = null, p(H(t ? "b" : "p", o = n ? new d(n) : o))) : V(e, t, n, i)
                },
                sendRapid: function(e, t, n, i) {
                    t && I && I.start_dwell() && (n.etag = "dwell,start", n.usergenf = 1, n.A_prets = oe ? oe.ts : null, n.A_prems = oe ? oe.ms : null), u(e, t, n, i)
                },
                sendRefreshedContent: function(e, t, n) {
                    var i = {};
                    t && I && I.start_dwell() && (i.etag = "dwell,start", i.usergenf = 1, i.A_prets = oe ? oe.ts : null, i.A_prems = oe ? oe.ms : null), n.event && y.aug(i, n.event.data), n.pp && y.aug(i, n.pp), N(P(function() {
                        return R([e], t, !0, i, n)
                    }))
                },
                sendULTEvent: function(e, t, n) {
                    var i = {},
                        t = H("p", new d(i = e && e.data ? e.data : i), t || 0);
                    e.type && (t += "&_V=" + e.type.spaceidPrefix), p(t, n)
                },
                sendEvents: function(e, t) {
                    this.sendULTEvent(e, t)
                },
                sendClick: function(i, o) {
                    var e, e = [H("c", new d((e = i).pp)) + "&_C=" + y.ser(e.data)].join("&"),
                        r = !1;
                    !D.async_all_clicks && i.synch ? (y.prevDef(i.event), p(e, function() {
                        var e, t, n;
                        r || (r = !0, o ? o.call() : (e = i.targetElement.href, D.click_postmsg.origin ? (t = D.click_postmsg.window || top, (n = D.click_postmsg.payload || {}).href = e, t.postMessage(y.toJSON(n), D.click_postmsg.origin)) : i.hasTargetTop ? top.document.location = e : document.location = e))
                    })) : e && p(e, o)
                }
            }),
            C = null,
            I = null;

        function p(e, t) {
            D.ldbg && E(e);
            var n, i, o, t = t && "function" == typeof t ? t : function() {};
            navigator && navigator.sendBeacon && navigator.sendBeacon(e) ? t() : (n = t, i = new Image, o = null, i.onload = i.onabort = i.onerror = function() {
                clearTimeout(o), n.call(null)
            }, i.src = e, n && "function" == typeof n && (o = setTimeout(function() {
                n.call(null)
            }, D.click_timeout)), setTimeout(function() {
                i = null
            }, 1e7))
        }

        function m() {
            return "rapid_if_" + y.rand()
        }

        function _(e) {
            var t = "display:none;";
            !y.isIE || 6 !== y.ieV && 7 !== y.ieV && 8 !== y.ieV ? y.sa(e, "style", t) : e.style.setAttribute("cssText", t, 0)
        }

        function w(e) {
            var t, n = null;
            return (n = y.isIE && y.ieV <= 8 ? (t = "", y.isSecure() && 6 == y.ieV && (t = 'src="https://' + D.geo_host + '/b.html"'), document.createElement("<iframe " + t + ' name="' + e + '"></iframe>')) : document.createElement("iframe")).name = e, n
        }

        function T(e, t) {
            var n = null,
                i = y.make("form"),
                o = y.make("input"),
                r = m(),
                a = m(),
                s = "application/x-www-form-urlencoded;charset=UTF-8";
            _(n = w(r)), _(i), i.id = a, i.method = "POST", i.action = x(t), i.target = r, y.isIE && y.ieV <= 7 ? i.setAttribute("enctype", s) : (i.setAttribute("enctype", s), i.setAttribute("encoding", s)), o.name = "q", o.value = e, y.isIE && 10 <= y.ieV && (o.type = "submit"), i.appendChild(o);
            var l = function() {
                var e = "";
                D.ldbg && (!y.isIE || 9 <= y.ieV) && (e = (n.contentDocument || n.contentWindow.document).body.innerHTML), y.rmEvent(n, "load", l), setTimeout(function() {
                    y.rmBodyEl(n), y.rmBodyEl(i)
                }, 0), D.ldbg && E("iframe resp: " + e), y.isIE && y.ieV <= 7 && setTimeout(function() {
                    var e = w("");
                    y.addEvent(e, "load", function() {
                        y.rmBodyEl(e)
                    }), y.appBodyEl(e)
                }, 1)
            };
            y.addEvent(n, "load", l), y.appBodyEl(n), y.appBodyEl(i), i.submit()
        }

        function x(e) {
            var t = D.deb,
                n = y.rand(),
                e = ["http:" === window.location.protocol ? "http://" : "https://", D.yql_host, D.yql_path, "?yhlVer=2&yhlClient=rapid&yhlS=", D.spaceid, !0 === t ? "&yhlEnv=staging" : "", !0 === t || D.ldbg ? "&debug=true&diagnostics=true" : "", y.isIE && y.ieV ? "&yhlUA=ie" + y.ieV : "", y.isIE && 8 == y.ieV ? "&format=json" : "", "&yhlCT=2", "&yhlBTMS=", (new Date).valueOf(), "&yhlClientVer=", D.version, "&yhlRnd=", n, "&yhlCompressed=", e || 0, D.gen_bcookie ? "&yhlBcookie=1" : ""].join("");
            return D.ldbg && E(e), e
        }

        function M(e, t) {
            t = x(t);
            try {
                var n = y.getXHR();
                n.open("POST", t, !0), n.withCredentials = !0, n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"), D.ldbg && (n.onreadystatechange = function() {
                    4 === n.readyState && E(n.status + ":xhr response: " + n.responseText)
                }), n.send(e)
            } catch (e) {
                p(H("p", new d({
                    _err_nm: "sendToYQL Failed",
                    _err_msg: "sendToYQL Failed",
                    _err_rs: String(e),
                    _err_st: e.stack,
                    urlUsed: t
                }), 1197799914))
            }
        }

        function S(e, i, t) {
            t = t || {};
            var o = {
                m: y.norm(e.moduleName),
                l: []
            };
            e.moduleYLK && (o.ylk = e.moduleYLK.getAll());

            function n(e, t) {
                var n = "_p" === e;
                return !(!i || !n) || ("sec" == e && t != o.m && t != l || "sec" !== e && !n)
            }
            for (var r, a, s, l = o.ylk && o.ylk.sec ? o.ylk.sec : "", c = e.links, u = 0, d = (c = e.links).length; u < d; u++) c[u] && (!t.useViewability && !D.viewability || c[u].viewable ? (s = y.aug({}, c[u].data, function(e) {
                return "DOMElement" !== e
            }), o.l.push((r = s, a = n, s = void 0, s = {}, y.isObj(r) && y.aug(s, r, a), s))) : D.ldbg && E("Skipping not viewable link: " + c[u].data.slk));
            return o
        }

        function R(e, t, n, i, o) {
            var r, a = I ? ie : Y();
            return [{
                t: (r = o, t ? "pv" : r && r.event ? r.event.type.getYQLID() : "lv"),
                s: D.spaceid,
                pp: function(e, t) {
                    var n = d.makeFromPP(D.keys);
                    n.absorb(t), e && n.set("A_", 1);
                    return n.set("A_sr", y.sr()), n.set("A_vr", y.vr()), n.set("A_do", y.dor()), n.set("A_ib", y.ib()), n.set("A_ob", y.ob()), n.set("A_srr", y.srr()), n
                }(t, i).getAll(),
                _ts: a.ts,
                _ms: a.ms,
                lv: function(e, t, n) {
                    var i, o, r = [],
                        a = null;
                    for (i in e) y.hasOwn(e, i) && (a = e[i]) && (0 < (o = S(a, t, n)).l.length ? r.push(o) : D.ldbg && E('Not capturing 0 links mod: "' + a.moduleName + '"'));
                    return r
                }(e, n, o)
            }]
        }

        function L(e, t, n) {
            e = "select * from x where a = '" + e + "'";
            return (t ? "q=" : "") + (n ? y.enc(e) : e)
        }

        function P(e) {
            var t = y.aug({}, s);
            delete t.keys;
            var n = a();
            n.set("A_cnf", y.toJSON(t));
            e = {
                bp: n.getAll(),
                r: e.call(0),
                yrid: D.yrid,
                optout: D.oo,
                nol: D.nol
            };
            return y.toJSON(e)
        }

        function V(e, t, n, i) {
            N(P(function() {
                return R(e, t, !0, n, i)
            }))
        }

        function U(e) {
            return e.identifier
        }

        function N(n) {
            var i = D.ldbg;

            function o(e, t) {
                0 === t && (e = e.replace(/'/g, "\\'")), i && E("body: " + e), y.hasCORS() ? M(r = L(e, !0, !0), t) : (r = L(e, 0, 0), y.addEvent(document, "load", function() {
                    T(r, t)
                }))
            }
            var r = "",
                a = f[D.compr_type];
            if (D.compr_on && D.webworker_file && y.hasWorkers() && 1 < a && 2048 < n.length) {
                i && E("Looking for worker:" + D.webworker_file + ", compr timeout:" + D.compr_timeout);
                try {
                    var s = new Worker(D.webworker_file),
                        l = !1,
                        c = null,
                        u = 0;

                    function d() {
                        l || (l = !0, o(n, 0), i && E("sent in failSend"))
                    }
                    s.onerror = function(e) {
                        clearTimeout(c), d(), A(e.message), s.terminate()
                    }, s.onmessage = function(e) {
                        clearTimeout(c);
                        var t = y.tms();
                        "Decompress fail" !== e.data && "Compress fail" !== e.data && 0 != e.data.indexOf("error:") || (i && E(e.data), d()), l || (l = !0, o(e.data, a)), i && E("Ratio (" + e.data.length + "/" + n.length + "): " + (100 * e.data.length / n.length).toFixed(2) + "% -> C_T: " + (t - u) + " ms (" + t + "-" + u + ")"), s.terminate()
                    }, i && E("posting to worker: " + n), u = y.tms(), s.postMessage({
                        type: a,
                        json: n
                    }), c = setTimeout(function() {
                        d(), s.terminate()
                    }, D.compr_timeout)
                } catch (e) {
                    i && E("compression worker exception " + e), o(n, 0)
                }
            } else o(n, 0)
        }

        function H(e, t, n) {
            t = ["?s=" + (n || D.spaceid), "t=" + y.rand() + "," + Math.random(), "_I=" + D.yrid, "_AO=" + D.oo, "_NOL=" + D.nol, "_R=" + y.enc(D.getReferrer()), ("c" === e ? "_K=" : "_P=") + function(e) {
                j = new le(D.keys);
                var t = new d(a(!1).getAll());
                t.absorb(D.keys.getAll()), e && (e instanceof d ? t.absorb(e.getAll()) : v("Internal error in buildGeoPP: not PP type"));
                e = "dwell,start" === t.get("etag") ? ie : "dwell,stop" === t.get("etag") ? oe : Y();
                return t.set("_ts", e.ts), t.set("_ms", e.ms), t.set("A_sr", y.sr()), t.set("A_vr", y.vr()), t.set("A_do", y.dor()), t.set("A_ib", y.ib()), t.set("A_ob", y.ob()), t.set("A_srr", y.srr()), D.version + "%05" + t.ser()
            }(t)];
            D.bcookie_override && t.push("_BM=" + D.bcookie_override);
            t = t.join("&");
            return ("http:" === window.location.protocol ? "http://" : "https://") + r + "/" + e + t
        }
        var j = new le(l);

        function Y() {
            var e = null,
                t = null;
            return e = (new Date).valueOf().toString(), t = e.length, {
                ts: e.substr(0, t - 3),
                ms: e.substr(t - 3)
            }
        }

        function W(e, t, n, i, o, r, a, s) {
            var l = "",
                c = null,
                s = !a || y.isInView(i, s),
                t = {
                    viewable: s,
                    data: {
                        sec: t,
                        _p: n
                    }
                };
            return a && y.aug(t.data, {
                A_lv: 1
            }), r ? (t.data.slk = o || "section", c = k(i)) : (i.setAttribute(D.anc_pos_attr, n), a && i.setAttribute(D.anc_v9y_attr, s ? "1" : "0"), (l = y.getLT(i, e)) && "" !== l ? c = k(i) : l = "_ELINK_", t.data.slk = o || l), null !== c && y.aug(t.data, c.getAll()), t.DOMElement = i, t
        }

        function B(e) {
            var r = {},
                s = e || window;
            return {
                addModule: function(e, t) {
                    r[y.norm(e)] = t
                },
                addModules: function(e, t) {
                    var n, i, o, r = y.isArr(e),
                        a = [];
                    for (n in r || y.isStr(e) && (e = new Array(e), r = !0), e) y.hasOwn(e, n) && (i = r ? e[n] : n, o = y.trim(e[n]), this.exists(i) ? v('addModules() called with prev processed id:"' + i + '"') : (o = function(l, e, c, u) {
                        var d = document.getElementById(e),
                            f = "a,button,input";
                        if (!d) return A("Specified module not in DOM: " + e), null;
                        var p = k(d),
                            m = [],
                            t = (D.parse_dom ? F : G)(f, d),
                            h = function(e, t) {
                                if (y.hasClass(e, "rapid_track_href")) return "href";
                                if (y.hasClass(e, "rapid_track_text")) return "text";
                                if (y.hasClass(e, "rapid_track_title")) return "title";
                                if (y.hasClass(e, "rapid_track_id")) return "id";
                                return t
                            }(d, D.lt_attr),
                            g = t.length,
                            n = y.getAttribute(d, D.track_type),
                            o = 0;

                        function v(e) {
                            var t = y.rand() + o++ + Y().ms,
                                n = b(e);
                            n.set("uuid", t);
                            var i, n = (i = n.getAll(), Object.keys(i).map(function(e) {
                                return e + ":" + i[e]
                            }).join(";"));
                            e.setAttribute("data-ylk", n);
                            n = e.search;
                            e.search = n + (n ? "&" : "") + "uuid=" + t
                        }

                        function _(e, t) {
                            var n = [];
                            t = t || 1;
                            for (var i, o, r, a = 0, s = e.length; a < s; a++) "div" === e[a].tagName.toLowerCase() ? (o = k(i = e[a]), r = W(h, p.map.sec || l, 1, i, o.map.slk || p.map.slk, !0, c, u), m[0] = r, n.push(r)) : (o = e[a], y.hasClass(o, D.click_id_class) && v(o), r = W(h, p.map.sec || l, t, o, p.map.slk, 0, c, u), m[t - 1] = r, n.push(r), t++);
                            return "true" === y.getAttribute(d, D.skip_attr) && (r = W(h, p.map.sec || l, 1, i, p.map.slk, !0, c, u), m[0] = r, n.push(r)), n
                        }

                        function w(e) {
                            return !y.getAttribute(e, D.anc_pos_attr)
                        }
                        _(t);
                        var i = {
                                useViewability: c,
                                moduleYLK: p,
                                links: m,
                                moduleName: l,
                                trackType: n,
                                moduleElement: d,
                                refreshModule: function(e, t, n, i) {
                                    i.isRefreshed = !0;
                                    var o = D.parse_dom ? F(f, y.$(e), null, w) : G(f, y.$(e), w);
                                    if (!0 === t || 0 < o.length) {
                                        var r = _(o, g + 1);
                                        g += o.length;
                                        var a = o.length;
                                        if (c)
                                            for (var a = 0, s = 0, l = r.length; s < l; s++) r[s].viewable && a++;
                                        (!0 === t || 0 < a) && (y.aug(o = {}, this), o.links = n ? r : [], !0 !== t && !n || O.sendRefreshedContent(o, t, i))
                                    } else y.ldbg && E("refreshModule(" + e + ") - no new links.");
                                    !0 === t && D.apv && C && C.reInit()
                                },
                                reevaluateViewableLinks: function() {
                                    var n, e = m.length,
                                        t = G(f, this.moduleElement, (n = e, function(e) {
                                            var t;
                                            return y.getAttribute(e, D.anc_pos_attr) || (n++, e.setAttribute(D.anc_pos_attr, n), t = W(h, p.map.sec || l, n, e, p.map.slk, 0, !1), m[n - 1] = t), !("1" === y.getAttribute(e, D.anc_v9y_attr) || !y.isInView(e, u)) && (e.setAttribute(D.anc_v9y_attr, "1"), !0)
                                        }));
                                    0 !== t.length && (e = function(e) {
                                        for (var t = [], n = 0, i = e.length; n < i; n++) {
                                            var o = e[n],
                                                r = y.getAttribute(o, D.anc_pos_attr),
                                                o = W(h, p.map.sec || l, r, o, p.map.slk, 0, !0, u);
                                            t.push(o)
                                        }
                                        return t
                                    }(t), y.aug(t = {}, this), t.links = e, e = {
                                        event: q("contentmodification", "", {})
                                    }, O.sendRefreshedContent(t, !1, e))
                                },
                                removeHandlers: function() {
                                    y.rmEvent(d, "click", r), D.track_right_click && y.rmEvent(d, "contextmenu", r)
                                },
                                getLinkAtPos: function(e) {
                                    return e > m.length ? null : m[e - 1]
                                },
                                identifier: e
                            },
                            r = function(e) {
                                ! function(e, t) {
                                    t = function(e, t) {
                                        e = e || event;
                                        var n = y.getTarget(e),
                                            i = "",
                                            o = !1,
                                            r = null;
                                        for (; n && (i = n.nodeName.toLowerCase()) && "a" !== i && "button" !== i && ! function(e) {
                                                return "input" === e.nodeName.toLowerCase() && "submit" === y.getAttribute(e, "type")
                                            }(n) && !y.hasClass(n, D.nonanchor_track_class);) n = n.parentNode;
                                        if (!n || y.hasClass(n, D.no_click_listen)) return 0;
                                        if (y.hasClass(n, D.nonanchor_track_class)) {
                                            r = {
                                                pos: 0,
                                                sec: t.moduleName,
                                                slk: "_"
                                            };
                                            var a = k(n, 1);
                                            a && y.aug(r, a.getAll())
                                        } else {
                                            a = y.getAttribute(n, D.anc_pos_attr);
                                            if (!(r = t.getLinkAtPos(a))) return 0;
                                            r = y.aug({}, r.data), "input" === i || "button" === i || function(e, t, n) {
                                                var i = y.getAttribute;
                                                return t.target && "_blank" === t.target.toLowerCase() || 2 === e.which || 4 === e.button || e.altKey || e.ctrlKey || e.shiftKey || e.metaKey || "on" === i(t, "data-nofollow") || i(t, "href") && "javascript:" === i(t, "href").substr(0, 11).toLowerCase() || y.hasClass(t, D.nofollow_classname) || y.hasClass(n, D.nofollow_classname)
                                            }(e, n, t.moduleElement) || (o = !0)
                                        }
                                        r.tar || ((s = y.getAttribute(n, "href")) && (r.tar = y.extDomain(s)), s && r.tar || (r.tar = y.extDomain(D.loc)));
                                        r.tar_uri || (n.pathname ? r.tar_uri = n.pathname : r.tar_uri = "");
                                        var s = t.moduleYLK;
                                        s && (s = s.getAll(), y.aug(r, s, function(e) {
                                            return !(e in r)
                                        }));
                                        r.A_xy = y.xy(e), "contextmenu" == e.type && (r.A_cl = 3, o = !1);
                                        return {
                                            data: r,
                                            event: e,
                                            moduleElement: t.moduleElement,
                                            targetElement: n,
                                            synch: o,
                                            hasTargetTop: n && n.target && "_top" === n.target.toLowerCase()
                                        }
                                    }(e, t);
                                    t && (e.ctrlKey || e.metaKey || "contextmenu" === e.type || I && I.stop_dwell() && (t.pp = {
                                        etag: "dwell,stop",
                                        usergenf: 1,
                                        A_prets: ie ? ie.ts : null,
                                        A_prems: ie ? ie.ms : null
                                    }), O.sendClick(t))
                                }(e, i)
                            };
                        y.addEvent(d, "click", r), D.track_right_click && y.addEvent(d, "contextmenu", r);
                        return i
                    }(o, i, t, s)) && (this.addModule(i, o), a.push(o)));
                    return a
                },
                getModules: function() {
                    return r
                },
                getModulesWithViewability: function() {
                    var e, t = {};
                    for (e in r) {
                        var n = r[e];
                        n.useViewability && (t[e] = n)
                    }
                    return t
                },
                reevaluateModuleViewability: function(e) {
                    var t, n = this.getModulesWithViewability();
                    if (e)(t = n[e]) && t.reevaluateViewableLinks();
                    else
                        for (var i in n)(t = n[i]).reevaluateViewableLinks()
                },
                refreshModule: function(e, t, n, i) {
                    var o = r[y.norm(e)];
                    o ? o.refreshModule(e, t, n, i) : v("refreshModule called on unknown section: " + o)
                },
                removeModule: function(e) {
                    var t = r[y.norm(e)];
                    t && (t.removeHandlers(), delete r[e])
                },
                destroy: function() {
                    for (var e in r) y.hasOwn(r, e) && this.removeModule(e);
                    r = {}
                },
                exists: function(e) {
                    return r[y.norm(e)]
                }
            }
        }

        function q(e, t, n, i) {
            n = n || {};
            var o = null;
            return e ? (o = YAHOO.i13n.EventTypes.getEventByName(e), n._E = o.getEventName(), t = n._E) : n._E = t || "_", i && (n.outcm = i), {
                type: o,
                name: t,
                data: n,
                outcome: i
            }
        }

        function G(e, t, n) {
            t = t || document;
            for (var i = e.split(","), o = [], r = 0, a = i.length; r < a; r++)
                for (var s = t.getElementsByTagName(i[r]), l = 0, c = s.length; l < c; l++) {
                    var u = s[l];
                    n && !n.call(0, u) || o.push(u)
                }
            e = o[0];
            return e ? (e.sourceIndex ? o.sort(function(e, t) {
                return e.sourceIndex - t.sourceIndex
            }) : e.compareDocumentPosition && o.sort(function(e, t) {
                return 3 - (6 & e.compareDocumentPosition(t))
            }), o) : []
        }

        function F(e, t, n, i) {
            t = t || document;
            var o = e.split(",");
            n = n || [];
            var r = t.childNodes;
            if ("true" !== y.getAttribute(t, D.skip_attr))
                for (var a = 0, s = r.length; a < s; a++) {
                    var l = r[a];
                    y.isTagOfInterest(l, o) && (i && !i.call(0, l) || n.push(l)), "true" !== y.getAttribute(l, D.skip_attr) ? F(e, l, n, i) : "true" === y.getAttribute(l, D.skip_attr) && n.push(l)
                }
            t = n[0];
            return t ? (t.sourceIndex ? n.sort(function(e, t) {
                return e.sourceIndex - t.sourceIndex
            }) : t.compareDocumentPosition && n.sort(function(e, t) {
                return 3 - (6 & e.compareDocumentPosition(t))
            }), n) : []
        }

        function K(e, t, n) {
            "object" == typeof e && e || (e = {}), D.ldbg && E("beaconPageview called, pp=" + y.fData(e)), t && !D.persist_asid && c(), O.sendRapidNoDelay([], !0, e, null, n), D.apv && null != C && C.reInit()
        }

        function z(e, t, n, i) {
            D.ldbg && E('beaconEvent: event="' + e + '" data=' + y.fData(t) + " outcome=" + n);
            n = q(0, e, t, n);
            O.sendEvents(n, i)
        }
        j.setRxx(D), y.clearCookie("rx", "/", y.isIE ? document.domain : "");
        var X = {};

        function $(e) {
            if (X[e]) throw new Error("Rapid.js - #" + e + " is already tracked, please check the element Id.");
            var t = !1,
                n = document.getElementById(e);
            if (!n) throw new Error("Rapid.js - #" + e + " does not exist, please check the element Id.");

            function i() {
                null != l && clearTimeout(l), l = setTimeout(function() {
                    r = y.getElementViewDeltaAndMax(n), a = Math.max(a, r.delta), s = Math.max(s, r.max)
                }, D.apv_time)
            }

            function o() {
                z("content-progression", {
                    A_cpt: "article",
                    A_cpr: a,
                    A_cpm: s
                }, "content-progression")
            }
            var r = y.getElementViewDeltaAndMax(n),
                a = Math.max(0, r.delta),
                s = Math.max(0, r.max),
                l = null;
            y.addEvent(window, "scroll", i), y.addEvent(window, "beforeunload", o);
            return X[e] = function() {
                t || (y.rmEvent(window, "scroll", i), y.rmEvent(window, "beforeunload", o), o(), t = !0, delete X[e])
            }
        }

        function J(r) {
            var a = new B(r = document.getElementById(r) || window);
            h.moduleMaps && Array.isArray(h.module) ? h.moduleMaps.push(a) : h.moduleMaps = [a];
            var e = null;

            function t() {
                function e() {
                    null != t && clearTimeout(t);
                    var e = (new Date).getTime();
                    e - n < D.viewability_time && (i = y.getScrollY(r)), t = setTimeout(function() {
                        var e, t;
                        e = y.getScrollY(r), t = -1 === o ? e - i : e - o, Math.abs(t) > D.viewability_px && (a.reevaluateModuleViewability(), o = e, (new Date).getTime())
                    }, D.viewability_time)
                }
                var t = null,
                    n = (new Date).getTime(),
                    i = y.getScrollY(r),
                    o = -1;
                y.addEvent(r, "scroll", e), this.reInit = function() {
                    i = y.getScrollY(r), o = -1, n = (new Date).getTime()
                }, this.destroy = function() {
                    y.rmEvent(r, "scroll", e)
                }
            }
            y.executeOnLoad(function() {
                e = new t
            }), this.getModules = function() {
                return a
            }, this.addModules = function(e, t, n) {
                D.ldbg && E("addModules() called: mods=" + y.fData(e) + " isPage: " + t);
                var i = {
                    A_am: 1
                };
                (n = n || {}).pp && y.aug(i, n.pp), n.useViewability = n.useViewability || !1, n.clickonly = n.clickonly || !1;
                var o = !1;
                switch (t = t || !!n.useViewability && 2) {
                    case 1:
                    case "1":
                    case !0:
                        o = t = !0;
                        break;
                    default:
                        t = !1, n.event = q("contentmodification", "", {})
                }
                if (!D.yql_enabled) return E("LVs is are disabled when geo only"), void(t && K(i, o));
                n && n.event && t && (v("Cannot track event type and pageview at same time."), n.event = null);
                e = a.addModules(e, n.useViewability);
                0 === e.length && !n.event || (n.clickonly && (e = []), t || n.event || n.pp ? (o && !D.persist_asid && c(), n.event && n.event.data && y.aug(i, n.event.data), (0 < e.length || t) && O.sendRapidNoDelay(e, t, i, n)) : 0 < e.length && O.sendRapid(e, t, i, n), !0 === t && D.apv && C && C.reInit())
            }, this.addModulesWithViewability = function(e, t, n) {
                (n = n || {}).useViewability = n.useViewability || D.viewability, this.addModules(e, t, n)
            }, this.reevaluateModulesViewability = function() {
                a.reevaluateModuleViewability()
            }, this.refreshModules = function(e, t, n, i) {
                D.ldbg && E("refreshModule called: mod=" + e + " isPV: " + t + " sendLinks: " + n + " options: " + y.fData(i));
                var o = !1;
                switch (i = i || {}, t = t || !1) {
                    case 1:
                    case "1":
                    case !0:
                        o = t = !0;
                        break;
                    default:
                        t = !1, i.event = q("contentmodification", "", {})
                }
                if (!D.yql_enabled) {
                    var r = i.pp || {};
                    return E("LVs is are disabled when geo only"), void(t && K(r, o))
                }
                n = !1 !== n;
                o && !D.persist_asid && c(), t && i && i.event && (i.event = null), a.refreshModule(e, t, n, i), a.reevaluateModuleViewability(e)
            }, this.removeModule = function(e) {
                a.removeModule(e)
            }, this.isModuleTracked = function(e) {
                return D.ldbg && E("isTracked called: " + e), i && void 0 !== i.exists(e)
            }, this.destroy = function() {
                e.destroy()
            }
        }

        function Q(i) {
            function e() {
                null != t && clearTimeout(t);
                var e = (new Date).getTime();
                e - n < D.apv_time && (o = y.getScrollY(i), lastApvTime = e), t = setTimeout(function() {
                    ! function() {
                        var e = y.getScrollY(i),
                            t = -1 === r ? e - o : e - r,
                            n = 0 < t ? 0 : 1;
                        Math.abs(t) > D.apv_px && (K({
                            A_apv: 1,
                            A_apx: e,
                            A_asd: n
                        }, !1, !0), r = e, lastApvTime = (new Date).getTime(), D.apv_callback && D.apv_callback.call(this, {
                            pixel_pos: e,
                            scroll_dir: n
                        }))
                    }()
                }, D.apv_time)
            }
            var i = i ? document.getElementById(i) : window,
                t = null,
                n = lastApvTime = (new Date).getTime(),
                o = y.getScrollY(i),
                r = -1;
            y.addEvent(i, "scroll", e), this.reInit = function() {
                o = y.getScrollY(i), r = -1, n = lastApvTime = (new Date).getTime()
            }, this.destroy = function() {
                y.rmEvent(i, "scroll", e)
            }
        }

        function Z() {
            var i, o, r = {
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
                a = "start";
            ie = Y(), void 0 !== document.hidden ? (i = "hidden", o = "visibilitychange") : void 0 !== document.mozHidden ? (i = "mozHidden", o = "mozvisibilitychange") : void 0 !== document.msHidden ? (i = "msHidden", o = "msvisibilitychange") : void 0 !== document.webkitHidden && (i = "webkitHidden", o = "webkitvisibilitychange");

            function t(e) {
                var t = "",
                    n = e.type;
                e.type == o && (n = document[i] ? "visibilitychange-hidden" : "visibilitychange-visible"), 0 != (t = y.hasOwn(r, n) ? r[n].state : t).length && (a != t ? (a = t, t = r[n], E("dwell: change state to " + a + " (event=" + n + ")"), t = {
                    etrg: t.etrg,
                    outcm: "window",
                    usergenf: 1,
                    etag: t.etag,
                    A_jse: t.jse
                }, "start" === a && (ie = Y(), null != oe && (t.A_prets = oe.ts, t.A_prems = oe.ms)), "stop" === a && (oe = Y(), null != ie && (t.A_prets = ie.ts, t.A_prems = ie.ms)), z("dwell", t, "")) : E("dwell: -- state already " + a + " (event=" + n + ")"))
            }
            for (var e in r) r.hasOwnProperty(e) && y.addEvent(window, e, t);
            y.addEvent(window, o, t), this.set_state = function(e) {
                a = e
            }, this.start_dwell = function() {
                return "start" === a ? (E("dwell: -- state already " + a), !1) : (a = "start", ie = Y(), !0)
            }, this.stop_dwell = function() {
                return "stop" === a ? (E("dwell: -- state already " + a), !1) : (a = "stop", oe = Y(), !0)
            }, this.destroy = function() {
                for (var e in r) r.hasOwnProperty(e) && y.rmEvent(window, e, t);
                y.rmEvent(window, o, t)
            }
        }
        var ee = 0;

        function te(e, t) {
            var n, i, o, r, a, s, l, c, u;
            window.performance && window.performance.timing && (n = e ? e.perf_navigationtime || 0 : D.perf_navigationtime || 0, i = e ? e.perf_resourcetime || 0 : D.perf_resourcetime || 0, o = e ? e.perf_commontime || null : D.perf_commontime || null, r = e ? e.perf_usertime || null : D.perf_usertime || null, n < 1 && i < 1 && !o && !r || (a = y.hasOwn(D.sample, "perf_navigationtime") ? D.sample.perf_navigationtime : 100, s = y.hasOwn(D.sample, "perf_resourcetime") ? D.sample.perf_resourcetime : 100, l = y.samplingSuccess(a), c = y.samplingSuccess(s), (l || c) && ((0 < n || 0 < i) && 0 === window.performance.timing.loadEventStart && (ee += 10) <= 200 ? setTimeout(function() {
                te(e, t)
            }, 10) : (u = new d(function(e, t, n, i, o, r) {
                var a = {},
                    s = window.performance.timing;
                o && 0 < e && (ne(s.responseStart, s.navigationStart, a, "A_pfb"), ne(s.responseEnd, s.responseStart, a, "A_pbp"), ne(s.responseEnd, s.requestStart, a, "A_psr"), ne(s.loadEventStart, s.navigationStart, a, "A_pol"), ne(s.domInteractive, s.navigationStart, a, "A_pdi"));
                o && 1 < e && (ne(s.redirectEnd, s.redirectStart, a, "A_prd"), ne(s.domainLookupEnd, s.domainLookupStart, a, "A_pdl"), ne(s.connectEnd, s.secureConnectionStart, a, "A_psh"), ne(s.connectEnd, s.connectStart, a, "A_psc"), ne(s.loadEventStart, s.responseEnd, a, "A_pfe"));
                if (r && 0 < t && void 0 !== window.performance.getEntries) {
                    var l = [],
                        t = window.performance.getEntries();
                    t.sort(function(e, t) {
                        return e.duration > t.duration ? -1 : e.duration < t.duration ? 1 : 0
                    });
                    for (var c = t.slice(0, 10), u = c.length, d = 0; d < u; d++) {
                        var f = {},
                            p = c[d].name.replace(/\?.+$/, "");
                        p = p.replace(/^.+\//, ""), f.name = p, f.dur = Math.floor(c[d].duration), f.st = Math.floor(c[d].startTime), l.push(f)
                    }
                    a.A_res = y.sfy(l)
                }
                n && (y.hasOwn(n, "initialPageLoad") && (a.A_cmi = y.sfy(n.initialPageLoad)), y.hasOwn(n, "afterPageLoad") && (a.A_cma = y.sfy(n.afterPageLoad)));
                if (i)
                    for (var m = ["utm"], d = 0; d < m.length; d++) y.hasOwn(i, m[d]) && (a.A_utm = y.sfy(i[m[d]]));
                return a.etrg = "backgroundPost", a.outcm = "performance", a.usergenf = 0, a.etag = "performance", a
            }(n, i, o, r, l, c)), "object" == typeof t && u.absorb(t), u = q(0, "pageperf", u.getAll(), ""), O.sendEvents(u)))))
        }

        function ne(e, t, n, i) {
            "number" == typeof e && "number" == typeof t && 0 < t && t < e && ((t = e - t) < Date.now() && (n[i] = t))
        }
        var ie = null,
            oe = null;
        ! function() {
            D.dwell_on && (I = new Z), D.ult_token_capture && !0 !== YAHOO.i13n.__handled_ult_tokens__ && (YAHOO.i13n.__handled_ult_tokens__ = !0, (n = D.loc).match(/;_yl[a-z]{1}=/) ? (D.ldbg && E("Found ULT Token on URL."), O.sendGeoT(n)) : (n = (new le).getCookieByName("D")) && (y.clearCookie("D", "/", ".yahoo.com"), O.sendGeoT(n))), D.ldbg && E("tracked_mods: " + y.fData(D.tracked_mods));
            var e, t = i.addModules(D.tracked_mods, !1),
                n = i.addModules(D.tracked_mods_viewability, D.viewability);
            D.pageview_on_init && (e = t.concat(n).length ? {
                event: q("contentmodification", "", {})
            } : null, O.sendRapidNoDelay(t.concat(n), D.client_only, {}, e)), D.prerender && "prerender" == document.visibilityState && (e = q(0, "prerender", {
                etrg: "prerender",
                outcm: "page",
                usergenf: 0,
                etag: "prerender"
            }, ""), O.sendEvents(e)), y.executeOnLoad(function() {
                D.apv && (C = new Q), te()
            })
        }();
        var re = {
                utils: y
            },
            ae = {
                init: function() {},
                beaconEvent: function(e, t, n, i) {
                    z(e, t, n, i)
                },
                beaconClick: function(e, t, n, i, o, r, a) {
                    D.ldbg && E("beaconClick: sec=" + e + " slk=" + t + " callback=" + r), !i && o && (i = {});
                    var s = {};
                    o && (i.outcm = o, s.outcm = o), a && a.pp && y.aug(s, a.pp), a && a.dwell && D.dwell_on && ("start" !== (l = a.dwell) && "stop" !== l || ("start" === l ? I.start_dwell() && (s.etag = "dwell," + l, s.usergenf = 1, s.A_prets = oe ? oe.ts : null, s.A_prems = oe ? oe.ms : null) : I.stop_dwell() && (s.etag = "dwell," + l, s.usergenf = 1, s.A_prets = ie ? ie.ts : null, s.A_prems = ie ? ie.ms : null)));
                    var l, i = (l = e, e = t, t = n, n = i, i = o, o = {}, y.aug(o, n), o.sec = l || o.sec, o.slk = e || o.slk, o._p = t || o._p, {
                        data: o,
                        outcome: i,
                        event: null,
                        moduleElement: null,
                        targetElement: null,
                        synch: !1,
                        hasTargetTop: !1
                    });
                    i.pp = s, O.sendClick(i, r)
                },
                addModuleAPV: function(e) {
                    return new Q(e)
                },
                beaconAPV: function(e, t) {
                    K({
                        A_apv: 1,
                        A_apx: e || 0,
                        A_asd: t || 0
                    }, !1, !0)
                },
                addTargetedModuleViewabilityManager: function(e) {
                    return new J(e)
                },
                addModules: t.addModules,
                addModulesWithViewability: t.addModulesWithViewability,
                trackModuleProgression: $,
                addModuleProgression: $,
                endModuleProgression: function(e) {
                    var t = X[e];
                    if (!t) throw new Error("Rapid.js - Module Progression Tracking for #" + e + " does not exist, please check the element Id.");
                    t()
                },
                refreshModule: t.refreshModules,
                reevaluateModulesViewability: t.reevaluateModulesViewability,
                removeModule: t.removeModule,
                isModuleTracked: t.isModuleTracked,
                destroy: function() {
                    E("destroy called"), i.destroy(), C && (C.destroy(), C = null), t && (t.destroy(), t = null), I && (I.destroy(), I = null)
                },
                reInit: function(e) {
                    D.ldbg && E("reInit called with: " + y.fData(e)), (e = e || {}).spaceid ? (l = new d, h.keys = l, D = n(e), h.conf = D, y = se(e), j = new le(l)) : v("Invalid spid in reInit config: " + y.fData(e))
                },
                setRapidAttribute: function(e) {
                    var t;
                    e.keys && D.keys.absorb(e.keys), e.spaceid && (D.spaceid = e.spaceid), e.referrer && (D.referrer = e.referrer), e.A_sid && (D.keys.set("A_sid", e.A_sid), D.persist_asid = !0), e.accountGUID && (D.accountGUID = e.accountGUID), e.customUID && ("object" == typeof(t = e.customUID) && t.type && t.id ? (t = t.type, o[t] ? D.customUID = y.aug({}, e.customUID) : console.error('customUID type: "' + t + '", is not valid')) : console.error('customUID must be an Object with "id" and "type"')), e.location && (D.loc = e.location, D.keys.set("_w", y.rmProto(e.location))), y.hasOwn(e, "apv") && (e.apv ? C ? C.reInit() : C = new Q : C && (C.destroy(), C = null))
                },
                getRapidAttribute: function(e) {
                    switch (e) {
                        case "accountGUID":
                            return D.accountGUID;
                        case "customUID":
                            return y.aug({}, D.customUID);
                        case "spaceid":
                            return D.spaceid;
                        case "keys":
                            return y.aug({}, D.keys.getAll());
                        default:
                            return null
                    }
                },
                setAccountGUID: function(e) {
                    this.setRapidAttribute({
                        accountGUID: e
                    })
                },
                getAccountGUID: function() {
                    return this.getRapidAttribute("accountGUID")
                },
                clearAccountGUID: function() {
                    this.clearRapidAttribute(["accountGUID"])
                },
                setCustomUID: function(e) {
                    this.setRapidAttribute({
                        customUID: e
                    })
                },
                getCustomUID: function() {
                    return this.getRapidAttribute("customUID")
                },
                clearCustomUID: function() {
                    this.clearRapidAttribute(["customUID"])
                },
                clearRapidAttribute: function(e) {
                    for (var t in e) {
                        var n, i;
                        "keys" === e[t] ? (n = D.keys.get("_w"), i = D.keys.get("A_sid"), D.keys = new d, D.keys.set("_w", n), D.keys.set("A_sid", i)) : "referrer" === e[t] ? D.referrer = "" : "A_sid" === e[t] ? (D.keys.set("A_sid", ""), D.persist_asid = !0) : "location" === e[t] ? (D.loc = "", D.keys.set("_w", "")) : "accountGUID" === e[t] ? D.accountGUID = null : "customUID" === e[t] && (D.customUID = null)
                    }
                },
                beaconPageview: function(e) {
                    K(e, !0)
                },
                beaconRouteChange: function(e) {
                    D.dwell_on && I.stop_dwell() && z("dwell", {
                        etag: "dwell,stop",
                        usergenf: 1,
                        A_prets: ie ? ie.ts : null,
                        A_prems: ie ? ie.ms : null
                    }, ""), this.clearRapidAttribute(["keys"]), this.setRapidAttribute(e), K()
                },
                beaconECommerce: function() {},
                beaconInternalSearch: function() {},
                getCurrentSID: function() {
                    return l.get("A_sid")
                },
                notifyHistoryPushStateCalled: function() {},
                beaconLinkViews: function(e, t, n, i) {
                    D.ldbg && E("beaconLinkViews() called");
                    var o = {};
                    (n = n || {}).pp && y.aug(o, n.pp);
                    var r = !1;
                    switch (t) {
                        case 1:
                        case "1":
                        case !0:
                            r = !0;
                            break;
                        default:
                            r = !1, n.event = q("contentmodification", "", {})
                    }
                    if (!D.yql_enabled) return E("LVs is are disable when geo only"), void(r && K(o, !1));
                    if (n && n.event && r && (v("Cannot track event type and pageview at same time."), n.event = null), 0 !== e.length || n.event) {
                        for (var a = [], s = 0; s < e.length; s++) {
                            var l = e[s],
                                c = new g;
                            c.absorb_filter(l, function(e) {
                                return "sec" != e && "_links" != e
                            });
                            for (var u = [], d = 1, f = 0; f < l._links.length; f++) {
                                var p = l._links[f],
                                    m = {
                                        viewable: !0,
                                        data: {
                                            sec: l.sec,
                                            _p: d++,
                                            A_lv: 2
                                        }
                                    };
                                y.aug(m.data, p), u.push(m)
                            }
                            c = {
                                moduleName: l.sec,
                                moduleYLK: c,
                                links: u,
                                identifier: l.sec
                            };
                            a.push(c)
                        }
                        n.hasDOMElement && (h.beaconedLinkViews && Array.isArray(h.beaconedLinkViews) ? h.beaconedLinkViews = h.beaconedLinkViews.concat(a) : h.beaconedLinkViews = a), (r || n.event || n.pp) && n.event && n.event.data && y.aug(o, n.event.data), O.sendRapidNoDelay(a, r, o, n), i && i.call()
                    }
                },
                beaconLinkViewsWithDOM: function(e, t, n, i) {
                    n = y.aug({}, n), n = y.aug(n, {
                        hasDOMElement: !0
                    });
                    this.beaconLinkViews(e, t, n, i)
                },
                beaconPerformanceData: function(e, t) {
                    te(e, t)
                },
                __test_only__: function() {
                    return re
                }
            };
        return de.push({
            state: h,
            instance: ae
        }), 1 === de.length && function(h) {
            try {
                window.addEventListener("message", function(e) {
                    try {
                        var t = e.data,
                            n = void 0 === t ? {} : t,
                            i = n.type,
                            o = void 0 === i ? null : i,
                            r = n.data,
                            a = void 0 === r ? {} : r,
                            s = a.eventName,
                            l = void 0 === s ? null : s,
                            c = a.impressionData,
                            u = void 0 === c ? null : c,
                            d = a.interactionData,
                            f = void 0 === d ? null : d,
                            p = a.pageData,
                            m = void 0 === p ? null : p;
                        switch (o) {
                            case "event":
                                h.beaconEvent(l, m, l);
                                break;
                            case "impression":
                                h.beaconLinkViews(u, 2, {
                                    pp: m
                                });
                                break;
                            case "interaction":
                                h.beaconClick(null, null, null, f, l, null, {
                                    pp: m
                                });
                                break;
                            case "view":
                                h.beaconPageview(m)
                        }
                    } catch (e) {}
                })
            } catch (e) {
                console.error("Issue finding Rapid Instance")
            }
        }(ae), ae;

        function se(e) {
            var t, n = navigator.userAgent,
                i = Object.prototype,
                d = n.match(/MSIE\s[^;]*/) || n.match(/Trident\/[^;]*/) ? 1 : 0,
                r = /KHTML/.test(n) ? 1 : 0,
                o = null !== n.match(/(iPhone|iPad|iPod)/gi),
                o = (n.indexOf("Android"), o && null !== n.match(/AppleWebKit/)),
                n = null !== n.match(/AppleWebKit/) && null === n.match(/Chrome/),
                a = new RegExp(/\ufeff|\uffef|[\u0000-\u001f]|[\ue000-\uf8ff]/g),
                s = new RegExp(/[\u007f-\u00a0]|\s{2,}/g),
                l = "http://",
                c = "https://",
                u = -1,
                f = -1,
                p = "https:" === window.location.protocol;
            return d && (document.documentMode ? f = document.documentMode : (f = 5, document.compatMode && "CSS1Compat" == document.compatMode && (f = 7))), {
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
                isIE: d,
                isIOSSafari: o,
                isSafari: n,
                isWebkit: r,
                ieV: f,
                value_len_whitelist: ["A_res", "A_cmi", "A_cma", "A_utm"],
                hasOwn: function(e, t) {
                    return i.hasOwnProperty.call(e, t)
                },
                enc: encodeURIComponent,
                dec: decodeURIComponent,
                getQueryStringValue: function(e, t) {
                    return decodeURIComponent(e.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(t).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"))
                },
                curProto: function() {
                    return p ? c : l
                },
                isSecure: function() {
                    return p
                },
                isScrollHorizontalVisible: function(e) {
                    return (e = e || document.documentElement).scrollWidth > e.clientWidth
                },
                getCompStyle: function(n, e) {
                    return void 0 !== window.getComputedStyle ? window.getComputedStyle(n, e) : (this.el = n, this.getPropertyValue = function(e) {
                        var t = /(\-([a-z]){1})/g;
                        return t.test(e = "float" == e ? "styleFloat" : e) && (e = e.replace(t, function() {
                            return arguments[2].toUpperCase()
                        })), n.currentStyle[e] || 0
                    }, this)
                },
                getBorder: function(e, t) {
                    if (!e || !t) return 0;
                    t = parseInt(this.getCompStyle(e, null).getPropertyValue(t), 10);
                    return t = isNaN(t) ? 0 : t
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
                getElementViewDeltaAndMax: function(e) {
                    var t = e.getBoundingClientRect(),
                        n = t.top,
                        e = t.height,
                        t = this.getViewableHeight(),
                        n = Math.min(Math.max(t - n, 0), e);
                    return {
                        delta: Math.floor(n),
                        max: Math.floor(e)
                    }
                },
                isInView: function(e, t) {
                    if (d && f <= 7) return !0;
                    var n, i, o, r, a, s, l = y.getCompStyle(e);
                    return "hidden" != l.visibility && "none" != l.display && (t !== window ? (i = t, o = (a = c(n = e)).x, r = a.y, n = (s = i.getBoundingClientRect()).left, a = s.right, i = s.top, s = s.bottom, n <= o && o <= a && i <= r && r <= s && u(e)) : u(e));

                    function c(e) {
                        var t = e.getBoundingClientRect(),
                            n = t.left,
                            t = t.top;
                        return {
                            x: n + e.clientWidth / 2,
                            y: t + e.clientHeight / 2
                        }
                    }

                    function u(e) {
                        var t = c(e),
                            n = t.x,
                            i = t.y,
                            e = y.getViewableHeight(),
                            t = y.getViewableWidth();
                        return 0 <= n && n <= t && 0 <= i && i <= e
                    }
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
                        }, i = 0; - 1 !== e.indexOf("_yl", i);) {
                        var o = e.indexOf("_yl", i);
                        if (i < o && (n.clean += e.slice(i, o - 1)), i = o + 3, t[e.charAt(o - 1)] && "=" === e.charAt(o + 4)) {
                            n.ult = 1;
                            var r = "_yl" + e.charAt(o + 3),
                                a = "";
                            for (o += 5; o < e.length && !t[e.charAt(o)]; o++) a += e.charAt(o);
                            n.keys.push(r), n[r] = a, "_ylv" != r && (n.cookie += "&" + r + "=" + a), t[e.charAt(o)] && "P" === t[e.charAt(o)] && (n.clean += e.charAt(o)), i = o + 1
                        } else n.clean += e.slice(o - 1, i)
                    }
                    return n.ult && (n.cookie = n.cookie.substr(1), n.clean += e.substr(i)), n
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
                        for (var i in t) this.sa(n, i, t[i]);
                    return n
                },
                getXHR: function() {
                    var i = [function() {
                        return new XMLHttpRequest
                    }, function() {
                        return new ActiveXObject("Msxml2.XMLHTTP")
                    }, function() {
                        return new ActiveXObject("Msxml3.XMLHTTP")
                    }, function() {
                        return new ActiveXObject("Microsoft.XMLHTTP")
                    }];
                    return function() {
                        for (var e = !1, t = i.length, n = 0; n < t; n++) {
                            try {
                                e = i[n]()
                            } catch (e) {
                                continue
                            }
                            break
                        }
                        return e
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
                    return !(d && f < 10) && ("withCredentials" in new XMLHttpRequest || "undefined" != typeof XDomainRequest)
                },
                hasWorkers: function() {
                    return !!window.Worker
                },
                clearCookie: function(e, t, n) {
                    t = t || "/", n = n || "";
                    try {
                        document.cookie = e + "= ; path=" + t + "; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Domain=" + n + ";"
                    } catch (e) {
                        console.warn("Rapid Was Prevented From Accessing Cookies:", e)
                    }
                },
                uniqConcat: function(e, t, r) {
                    var a = [],
                        s = {};

                    function n(e) {
                        for (var t = 0, n = e.length; t < n; t++) {
                            var i, o = e[t];
                            o && (i = r(o), s[i] || (s[i] = 1, a.push(o)))
                        }
                    }
                    return n(e), n(t), a
                },
                trim: function(e) {
                    return e && e.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
                },
                extDomain: function(e) {
                    e = e.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
                    return e && e[1]
                },
                getAttribute: function(e, t) {
                    var n = "";
                    return document.documentElement.hasAttribute || "class" !== t || (t = "className"), n = e && e.getAttribute ? e.getAttribute(t, 2) : n
                },
                isDate: function(e) {
                    return "[object Date]" === i.toString.call(e)
                },
                isArr: function(e) {
                    return "[object Array]" === i.toString.apply(e)
                },
                isStr: function(e) {
                    return "string" == typeof e
                },
                isNum: function(e) {
                    return "number" == typeof e && isFinite(e)
                },
                isNumeric: function(e) {
                    return +e == e && 0 < (e + "").replace(/^\s+|\s+$/g, "").length
                },
                isObj: function(e) {
                    return e && "object" == typeof e
                },
                rTN: function(e) {
                    try {
                        if (e && 3 === e.nodeType) return e.parentNode
                    } catch (e) {
                        v(e)
                    }
                    return e
                },
                getTarget: function(e) {
                    e = e.target || e.srcElement;
                    return e && !e.nodeName && (e = e.correspondingUseElement && e.correspondingUseElement.parentNode ? e.correspondingUseElement.parentNode : null), this.rTN(e)
                },
                addEvent: function(e, t, n) {
                    e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n)
                },
                rmEvent: function(e, t, n) {
                    e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent && e.detachEvent("on" + t, n)
                },
                aug: function(e, t, n) {
                    if (!t) return e;
                    for (var i in t) this.hasOwn(t, i) && (n && !n.call(null, i, t[i]) || (e[i] = t[i]));
                    return e
                },
                rmProto: function(e) {
                    return e ? e.substr(0, 7) === l ? e.substr(7, e.length) : e.substr(0, 8) === c ? e.substr(8, e.length) : e : ""
                },
                norm: function(e) {
                    return null === e ? "" : this.trim((e = "" + e).replace(s, " ").replace(a, ""))
                },
                _hasClass: function(e, t) {
                    var n = !1;
                    return e && t && (e = this.getAttribute(e, "class") || "", n = t.exec ? t.test(e) : t && -1 < (" " + e + " ").indexOf(" " + t + " ")), n
                },
                hasClass: function(e, t) {
                    if (this.isArr(t)) {
                        for (var n = 0, i = t.length; n < i; n++)
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
                    return e.match(t) ? '"' + e.replace(t, function(e) {
                        var t = n[e];
                        return "string" == typeof t ? t : (t = e.charCodeAt(), "\\u00" + Math.floor(t / 16).toString(16) + (e % 16).toString(16))
                    }) + '"' : '"' + e + '"'
                },
                sfy: function(e) {
                    if (!e && "" !== e) return {};
                    var t, n = typeof e;
                    if ("undefined" == n) return "undefined";
                    if ("number" == n || "boolean" == n) return "" + e;
                    if ("string" == n) return this.quote(e);
                    if ("function" == typeof e.toJSON) return this.sfy(e.toJSON());
                    if (this.isDate(e)) {
                        var i = e.getUTCMonth() + 1,
                            o = e.getUTCDate(),
                            r = e.getUTCFullYear(),
                            a = e.getUTCHours(),
                            s = e.getUTCMinutes(),
                            l = e.getUTCSeconds(),
                            c = e.getUTCMilliseconds();
                        return '"' + r + "-" + (i = i < 10 ? "0" + i : i) + "-" + (o = o < 10 ? "0" + o : o) + "T" + (a = a < 10 ? "0" + a : a) + ":" + (s = s < 10 ? "0" + s : s) + ":" + (l = l < 10 ? "0" + l : l) + "." + (c = (c = c < 100 ? "0" + c : c) < 10 ? "0" + c : c) + 'Z"'
                    }
                    if (t = [], this.isArr(e)) {
                        for (var u = 0, d = e.length; u < d; u++) t.push(this.sfy(e[u]));
                        return "[" + t.join(",") + "]"
                    }
                    if ("object" == n) {
                        for (var f in e)
                            if (this.hasOwn(e, f)) {
                                var p = typeof f,
                                    m = null;
                                if ("string" === p) m = this.quote(f);
                                else {
                                    if ("number" !== p) continue;
                                    m = '"' + f + '"'
                                }
                                "function" !== (p = typeof e[f]) && "undefined" !== p && (p = "", p = null === e[f] ? '""' : 0 === e[f] ? 0 : this.sfy(e[f]), t.push(m + ":" + p))
                            }
                        return "{" + t.join(",") + "}"
                    }
                },
                toJSON: (t = null, function(e) {
                    return (t = t || ("object" == typeof JSON && JSON.stringify && 6 !== f && 7 !== f && 8 !== f ? JSON.stringify : this.sfy)).call(this, e)
                }),
                executeOnLoad: function(n) {
                    function e(e) {
                        (document.addEventListener || e && "load" === e.type || "complete" === document.readyState) && (i = !0, o(), n.call(this))
                    }
                    var i = !1,
                        o = function() {
                            document.addEventListener ? (document.removeEventListener("DOMContentLoaded", e, !1), window.removeEventListener("load", e, !1)) : (document.detachEvent("onreadystatechange", e), window.detachEvent("onload", e))
                        };
                    if ("complete" === document.readyState) setTimeout(e);
                    else if (document.addEventListener) document.addEventListener("DOMContentLoaded", e, !1), window.addEventListener("load", e, !1);
                    else {
                        document.attachEvent("onreadystatechange", e), window.attachEvent("onload", e);
                        var r = !1;
                        try {
                            r = null == window.frameElement && document.documentElement
                        } catch (e) {}
                        r && r.doScroll && ! function t() {
                            if (!i) {
                                try {
                                    r.doScroll("left")
                                } catch (e) {
                                    return setTimeout(t, 50)
                                }
                                o(), n.call(this)
                            }
                        }()
                    }
                },
                getLinkContent: function(e) {
                    for (var t, n = 0, i = "";
                        (t = e.childNodes[n]) && t; n++) 1 === t.nodeType && ("img" === t.nodeName.toLowerCase() && (i += (this.getAttribute(t, "alt") || "") + " "), i += this.getLinkContent(t));
                    return i
                },
                fData: function(e) {
                    return this.isStr(e) ? e : this.toJSON(e)
                },
                getLT: function(e, t) {
                    if (!e) return "_";
                    var n = "";
                    t = t.toLowerCase();
                    var i, o;
                    return "input" === e.nodeName.toLowerCase() ? (i = e.type.toLowerCase(), o = y.hasClass(e, D.track_input), (0 <= ["button", "submit"].indexOf(i) || o) && (n = this.getAttribute(e, "value"))) : n = "text" === t ? !r && e.innerText || e.textContent : "href" === t ? this.rmProto(this.getAttribute(e, "href")) : this.getAttribute(e, t) || "", "" === (n = "" === (n = this.norm(n)) ? this.norm(this.getLinkContent(e)) : n) ? "_" : n
                },
                clref: function(e) {
                    if (0 !== e.indexOf(l) && 0 !== e.indexOf(c)) return "";
                    e = this.strip(e);
                    return e.clean || e.url
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
                    return screen && screen.orientation && screen.orientation.type ? -1 < screen.orientation.type.indexOf("landscape") ? 1 : 0 : ""
                },
                getViewableHeight: function() {
                    return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0
                },
                getViewableWidth: function() {
                    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0
                },
                clientDimensions: function() {
                    var e = document && document.documentElement || null,
                        t = e && e.clientHeight || null,
                        e = e && e.clientWidth || null;
                    return {
                        height: null != t && null != t ? t : 0,
                        width: null != e && null != e ? e : 0
                    }
                },
                windowInnerDimensions: function() {
                    var e = window && window.innerHeight,
                        t = window && window.innerWidth;
                    return {
                        height: null != e && null != e ? e : 0,
                        width: null != t && null != t ? t : 0
                    }
                },
                windowOuterDimensions: function() {
                    var e = window && window.outerHeight,
                        t = window && window.outerWidth;
                    return {
                        height: null != e && null != e ? e : 0,
                        width: null != t && null != t ? t : 0
                    }
                },
                ib: function() {
                    try {
                        var e = this.clientDimensions(),
                            t = this.windowInnerDimensions();
                        return (t.width || e.width || 0) + "x" + (t.height || e.height || 0)
                    } catch (e) {
                        return "0x0"
                    }
                },
                ob: function() {
                    try {
                        var e = this.clientDimensions(),
                            t = this.windowOuterDimensions();
                        return (t.width || e.width || 0) + "x" + (t.height || e.height || 0)
                    } catch (e) {
                        return "0x0"
                    }
                },
                srr: function() {
                    return window && window.devicePixelRatio ? window.devicePixelRatio : "1"
                },
                xy: function(e) {
                    var t, n, i = null,
                        o = e.pageX,
                        r = e.pageY;
                    return d && (t = document.documentElement, n = document.body, i = t && (t.scrollTop || t.scrollLeft) ? [t.scrollTop, t.scrollLeft] : n ? [n.scrollTop, n.scrollLeft] : [0, 0]), o || 0 === o || (o = e.clientX || 0, d && (o += i[1])), r || 0 === r || (r = e.clientY || 0, d && (r += i[0])), o + "," + r
                },
                hasCC: function(e) {
                    for (var t = 0, n = e.length; t < n; t++) {
                        var i = e.charCodeAt(t);
                        if (i < 32 || "=" === i) return !0
                    }
                    return !1
                },
                isValidPair: function(e, t) {
                    return !!y.in_value_whitelist(e) || (!(e.length <= 0 || 32 < e.length) || (y.ldbg && console.warn("Invalid key (" + e + ") length. Keys Must be <=32."), !1))
                },
                ser: function(e, t) {
                    if (!e) return "";
                    var n, i = [],
                        o = "";
                    for (n in e)
                        if (this.hasOwn(e, n)) {
                            var r = n,
                                a = e[n];
                            if (null !== r && null !== a && (r += "", a += "", this.isValidPair(r, a) && !this.hasCC(r) && !this.hasCC(a))) {
                                (o = "") !== (a = this.trim(a)) && " " !== a || !t || (a = "_");
                                try {
                                    o = (o = this.enc(r + "" + a)).replace(/'/g, "%27")
                                } catch (e) {
                                    o = "_ERR_ENCODE_", v(e)
                                }
                                i.push(o)
                            }
                        }
                    return i.join(this.cd)
                },
                rand: function() {
                    for (var e = 0, t = ""; e++ < 16;) {
                        var n = Math.floor(62 * Math.random());
                        t += n < 10 ? n : String.fromCharCode(n < 36 ? n + 55 : n + 61)
                    }
                    return t
                },
                tms: function() {
                    return +new Date
                },
                cookEn: function() {
                    var e = navigator.cookieEnabled ? 1 : 0,
                        t = "rapidtc";
                    if (void 0 === navigator.cookieEnabled && !e) try {
                        document.cookie = t + "=1", e = -1 != document.cookie.indexOf("testcookie"), document.cookie = t + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                    } catch (e) {
                        console.warn("Rapid Was Prevented From Accessing Cookies:", e)
                    }
                    return e
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
                    for (var n = 0, i = t.length; n < i; n++)
                        if (e.tagName && e.tagName.toLowerCase() == t[n].toLowerCase()) return !0;
                    return !1
                },
                samplingSuccess: function(e) {
                    return function(e) {
                        e *= 10;
                        var t = "" + (new le).getCookieByName("B");
                        return !!t && (u = u < 0 ? function(e) {
                            for (var t = 33554467, n = 0, i = e.length; n < i; n++) t += (t << 1) + (t << 4) + (t << 7) + (t << 8) + (t << 24), t ^= e.charCodeAt(n);
                            return t < 0 && (t &= 2147483647, t += 2147483648), t
                        }(t) % 1e3 : u) < e
                    }(e)
                },
                in_value_whitelist: function(e) {
                    return !(d && f <= 8) && -1 !== y.value_len_whitelist.indexOf(e)
                }
            }
        }
    }
}();