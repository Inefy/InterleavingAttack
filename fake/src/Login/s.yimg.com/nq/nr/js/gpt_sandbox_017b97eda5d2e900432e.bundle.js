/*! © 2023 Yahoo Holdings, Inc. For license information, see js/gpt_sandbox_017b97eda5d2e900432e.bundle.js.LICENSE.txt. */
(() => {
    var e = {
        p: ""
    };
    (() => {
        if (!window.ymailAssetHost) throw new Error("window.ymailAssetHost must be set before running this application.");
        e.p = window.ymailAssetHost
    })(), (() => {
        "use strict";

        function e() {
            return e = Object.assign || function(e) {
                for (var i = 1; i < arguments.length; i++) {
                    var d = arguments[i];
                    for (var t in d) Object.prototype.hasOwnProperty.call(d, t) && (e[t] = d[t])
                }
                return e
            }, e.apply(this, arguments)
        }

        function i(e, i, d) {
            if (void 0 === d && (d = {}), !e) {
                var t = new Error(i);
                throw t.name = "Invariant", !d || 0 === Object.keys(d).length || (t.data = d), t
            }
            return e
        }
        var d, t, n, a, o, s;
        ! function(e) {
            e.APP = "APP", e.IFRAME = "IFRAME"
        }(d || (d = {})),
        function(e) {
            e.REQ = "REQ", e.RES = "RES"
        }(t || (t = {})),
        function(e) {
            e.REFRESH = "refresh", e.LOADED = "loaded", e.INIT_ERROR = "initError", e.NUKE = "nuke"
        }(n || (n = {})),
        function(e) {
            e.MAIL = "mail", e.BASIC_MAIL = "basicMail", e.LOGIN = "login",
                e.AOL_LOGIN = "aolLogin", e.AOL_MAIL = "aolMail", e.AOL_BASIC_MAIL = "aolBasicMail"
        }(a || (a = {})),
        function(e) {
            e.CLIENT = "client", e.VERSION = "version", e.LIMITED = "limited",
                e.HEADER_BIDDER = "headerBidder", e.YMREQID = "ymreqid", e.HAQ = "haq", e.CACHE = "cache"
        }(o || (o = {})),
        function(e) {
            e.CONFIG = "config"
        }(s || (s = {}));
        var r, l = "gpt-passback";
        ! function(e) {
            e.SLOT_RENDER_ENDED = "slotRenderEnded", e.SLOT_REQUESTED = "slotRequested",
                e.SLOT_RESPONSE_RECEIVED = "slotResponseReceived",
                e.SLOT_VISIBILITY_CHANGED = "slotVisibilityChanged",
                e.IMPRESSION_VIEWABLE = "impressionViewable"
        }(r || (r = {}));
        var c;
        ! function(e) {
            e.LREC = "LREC",
                e.LREC4 = "LREC4", e.MON = "MON", e.SKY = "SKY", e.FULL_PANE = "FULL_PANE", e.FULL_SCREEN = "FULL_SCREEN",
                e.FLUID = "FLUID"
        }(c || (c = {}));
        c.LREC, c.LREC4, c.MON, c.SKY, c.FULL_PANE, c.FULL_SCREEN,
            c.FLUID, c.LREC, c.LREC4, c.MON, c.SKY;
        var g = {
                [c.LREC]: "Slot300_250_1",
                [c.LREC4]: "Slot300_250_2",
                [c.MON]: "Slot300_600",
                [c.SKY]: "Slot160_600"
            },
            v = {
                lang: "lang",
                partner: "cobrand",
                bucket: "bucket",
                spaceId: "spaceid",
                adLocation: "loc",
                adBlocker: "abk",
                AXId: "axid",
                gamTestId: "gamtestid",
                refreshIndex: "ri",
                age: "bka",
                gender: "bkg",
                colo: "colo",
                lu: "lu",
                site: "site",
                device: "device",
                region: "region",
                pageOrigin: "ypu",
                ncid: "ncid"
            },
            w = {
                [a.MAIL]: "8YHB7Y738",
                [a.BASIC_MAIL]: "8YHB7Y738",
                [a.AOL_MAIL]: "8YHB8EU59",
                [a.AOL_BASIC_MAIL]: "8YHB8EU59",
                [a.LOGIN]: "8YHBS13WH",
                [a.AOL_LOGIN]: "8YHB8G319"
            },
            u = (a.MAIL,
                a.BASIC_MAIL, a.AOL_MAIL, a.AOL_BASIC_MAIL, a.LOGIN, a.AOL_LOGIN, 1e3),
            E = 12.1,
            p = "",
            m = "ros",
            I = "hb.yahoo.net",
            h = "desktop",
            R = /^(https:\/\/([a-z0-9-]+[.])*(mail|login)\.(aol|yahoo)\.com)$/,
            L = /^(https:\/\/(?:norrin\.)?(alpha-|canary-)?(gpt|gam)\.mail\.(aol|yahoo|yahoosandbox)\.net)$/;
        const f = class {
            constructor(e) {
                var t = e.mode,
                    n = e.appName,
                    a = e.targetOrigin,
                    o = e.iframeRef;
                this.messageId = 0, this.listener = null,
                    t && Object.keys(d).map((e => d[e])).includes(t) || i(!1, "Valid 'mode' needs to be specified"),
                    a || i(!1, "Valid 'targetOrigin' needs to be specified"),
                    t !== d.APP || o || i(!1, "Valid 'iframeRef' needs to be specified"),
                    this.mode = t, this.targetOrigin = a, this.iframeRef = o, this.appName = n || "MAIL_APP"
            }
            sendMessage(e) {
                var i, t;
                if (e.requestId = ++this.messageId, this.mode === d.APP) null == (i = this.iframeRef) || null == (t = i.contentWindow) || t.postMessage(e, this.targetOrigin);
                else if (this.mode === d.IFRAME) {
                    var n;
                    null == (n = window.parent) || n.postMessage(e, this.targetOrigin)
                }
            }
            sendRequestMessage(e, i) {
                void 0 === i && (i = {}), this.sendMessage({
                    app: this.appName,
                    type: t.REQ,
                    name: e,
                    data: i
                })
            }
            isReceivedMessageValid(e) {
                var i, t = this.mode;
                return !!Object.keys(d).map((e => d[e])).includes(t) && (!!(t !== d.APP || L.test(e.origin) && e.source === (null == (i = this.iframeRef) ? void 0 : i.contentWindow)) && !!(t !== d.IFRAME || R.test(e.origin) && e.source === window.parent))
            }
            attachListener(e) {
                var i = i => {
                    this.isReceivedMessageValid(i) && e(i)
                };
                this.listener && (window.removeEventListener("message", this.listener),
                    this.listener = null), window.addEventListener("message", i), this.listener = i
            }
            detachListener() {
                this.listener && (window.removeEventListener("message", this.listener),
                    this.listener = null)
            }
        };
        var A = "devbox";

        function O() {
            return "devbox" === A || "openhouse" === A
        }

        function S(e, i) {
            var d, t = document.createElement("script"),
                n = document.getElementsByTagName("script")[0];
            (t.type = "text/javascript",
                t.async = !0, t.src = e, t.id = i, n) && (null == (d = n.parentNode) || d.insertBefore(t, n))
        }

        function x(e, i, d, t) {
            void 0 === d && (d = "none"), window.advBidxc = window.advBidxc || {}, window.advBidxc.execute = window.advBidxc.execute || [],
                window.advBidxc.execute.push((function() {
                    var n, a;
                    null != (n = window) && null != (a = n.advBidxc) && a.setCustomKeyValues && window.advBidxc.setCustomKeyValues({
                        k1: {
                            key: "publisherblob",
                            value: e
                        },
                        k2: {
                            key: "bucket",
                            value: i
                        },
                        k3: {
                            key: "cobrand",
                            value: d
                        },
                        k4: {
                            key: "lang",
                            value: t
                        }
                    })
                }))
        }
        var B = ["slot", "yieldGroupIds"],
            b = e => {
                var i = window._GPTMessageClient,
                    d = {
                        serviceName: e.serviceName
                    };
                i.sendRequestMessage(r.SLOT_REQUESTED, d)
            },
            _ = i => {
                var d = i.client;
                return i => {
                    var t = window._GPTMessageClient,
                        n = (i.slot, i.yieldGroupIds, function(e, i) {
                            if (null == e) return {};
                            var d, t, n = {},
                                a = Object.keys(e);
                            for (t = 0; t < a.length; t++) d = a[t],
                                i.indexOf(d) >= 0 || (n[d] = e[d]);
                            return n
                        }(i, B));
                    if (d === a.LOGIN || d === a.AOL_LOGIN) {
                        var o = i.size,
                            s = i.isEmpty,
                            c = document.getElementById(l);
                        !1 === s && Array.isArray(o) && c && (0 === o[0] && 0 === o[1] ? c.setAttribute("style", "width:600px;height:1024px;padding-left:200px;padding-right:800px;") : c.setAttribute("style", "width:" + o[0] + "px;height:" + o[1] + "px"))
                    }
                    if (t) {
                        var g = e({}, n);
                        t.sendRequestMessage(r.SLOT_RENDER_ENDED, g)
                    }
                }
            },
            y = e => {
                var i = window._GPTMessageClient,
                    d = {
                        serviceName: e.serviceName
                    };
                i.sendRequestMessage(r.SLOT_RESPONSE_RECEIVED, d)
            },
            M = e => {
                window._GPTMessageClient.sendRequestMessage(r.SLOT_VISIBILITY_CHANGED, {
                    viewPercentage: e.inViewPercentage
                })
            },
            N = () => {
                window._GPTMessageClient.sendRequestMessage(r.IMPRESSION_VIEWABLE)
            },
            C = e => {
                var i;
                for (i in e) void 0 !== e[i] && window.googletag.pubads().setTargeting(v[i], e[i])
            },
            P = (e, i) => {
                var d;
                if (i)
                    for (d in e) void 0 !== e[d] && i.setTargeting(v[d], e[d])
            },
            T = e => {
                new f({
                    mode: d.IFRAME,
                    targetOrigin: "*"
                }).sendRequestMessage(n.INIT_ERROR, e)
            },
            D = e => {
                var i = e.positions,
                    d = void 0 === i ? [] : i,
                    t = e.adUnitPath,
                    n = e.size,
                    a = e.div,
                    o = void 0 === a ? l : a,
                    s = e.targetingConfig;
                return d.length || d.push({
                    adUnitPath: t,
                    adLocation: null == s ? void 0 : s.adLocation,
                    size: n,
                    div: o
                }), d
            },
            U = (i, d, t) => d.map((d => {
                var n = d.adUnitPath,
                    a = d.adLocation,
                    o = d.size,
                    s = d.div,
                    r = i.defineSlot(n, o, s);
                return r.addService(i.pubads()), t && P(e({}, t, {
                    refreshIndex: "1",
                    adLocation: a
                }), r), r
            }));
        (() => {
            var i, t, o;
            window.googletag = window.googletag || {
                cmd: []
            };
            var s = (null == (i = window.location.hash) ? void 0 : i.substring(1)) || "",
                v = (e => {
                    var i = {};
                    if (e)
                        for (var d = e.substring(1).split("&"), t = 0; t < d.length; t++) {
                            var n = d[t].split("=");
                            i[decodeURIComponent(n[0])] = decodeURIComponent(n[1] || "")
                        }
                    return i
                })(window.location.search),
                R = v.ymreqid,
                L = v.client,
                A = 1,
                B = {};
            if (!s) {
                var k = "Config hash is empty";
                throw T({
                    error: k,
                    ymreqid: R
                }), new Error(k)
            }
            try {
                if (s.indexOf("=") > -1) {
                    var q = s.split("=")[1] || "{}";
                    B = JSON.parse(decodeURIComponent(q))
                } else B = JSON.parse(decodeURIComponent(s))
            } catch (Ie) {
                if (T({
                        error: "Failed to parse config",
                        ymreqid: R
                    }), O()) throw Ie;
                return
            }
            var V = B,
                G = V.size,
                F = V.div,
                H = void 0 === F ? l : F,
                Y = V.pageUrl,
                j = V.npa,
                K = void 0 !== j && j,
                z = V.targetingConfig,
                Q = V.PPId,
                W = V.headerBidderConfig,
                X = D(B);
            (e => {
                e.forEach((e => {
                    var i = e.div;
                    if (!document.getElementById(i)) {
                        var d = document.createElement("div");
                        d.id = i === g[c.MON] ? i + "-collapse" : i, document.body.appendChild(d)
                    }
                }))
            })(X);
            var J = (null == (t = B) ? void 0 : t.limited) || !1,
                $ = (null == (o = B) ? void 0 : o.headerBidder) || !1,
                Z = new f({
                    mode: d.IFRAME,
                    targetOrigin: Y
                });
            if ($ && W) {
                var ee = W.pblob,
                    ie = W.buckets,
                    de = W.host,
                    te = W.cobrand,
                    ne = W.site,
                    ae = W.region,
                    oe = void 0 === ae ? "us" : ae,
                    se = W.lang,
                    re = void 0 === se ? "en-US" : se,
                    le = W.headerBidderVersion,
                    ce = W.dv360,
                    ge = void 0 === ce ? "" : ce,
                    ve = W.AXId,
                    we = void 0 === ve ? "" : ve;
                ee || Z.sendRequestMessage(n.INIT_ERROR, {
                    error: "pblob is missing",
                    hash: s,
                    ymreqid: R
                }), ! function(i, d) {
                    var t = u,
                        n = p,
                        o = m,
                        s = I,
                        r = h,
                        l = E,
                        c = d || {},
                        g = c.limitedAds,
                        v = c.region,
                        R = c.lang,
                        L = c.site,
                        f = c.client,
                        A = c.headerBidderVersion,
                        O = c.dv360,
                        x = c.AXId;
                    window.advBidxc = window.advBidxc || {},
                        window.advBidxc.execute = window.advBidxc.execute || [],
                        window.advBidxc.timeout = t, window.advBidxc.customerId = w[f] || w[a.MAIL],
                        window.advBidxc.domain = i,
                        window.advBidxc.version = A || l, window.advBidxc.startTime = (new Date).getTime(),
                        window.advBidxc.mchnm = n,
                        window.advBidxc.section = o, window.advBidxc.limitedAds = g, window.advBidxc.region = v,
                        window.advBidxc.lang = R, window.advBidxc.site = L, window.advBidxc.device = r;
                    var B = e({
                        section: o,
                        region: v,
                        lang: R,
                        site: L,
                        device: r
                    }, O ? {
                        axid_e: O
                    } : null, x ? {
                        axid_l: x
                    } : null);
                    window.advBidxc.pub = B, window.advBidxc.loadGPT = window.setTimeout((function() {
                        window.advBidxc && !window.advBidxc.isAdServerLoaded && (S(window.advBidxc.limitedAds ? "https://pagead2.googlesyndication.com/tag/js/gpt.js" : "https://securepubads.g.doubleclick.net/tag/js/gpt.js", "gpt-script"),
                            window.advBidxc.isAdServerLoaded = !0)
                    }), window.advBidxc.timeout), S("https://" + s + "/bidexchange.js?cid=" + window.advBidxc.customerId + "&version=" + window.advBidxc.version + "&dn=" + encodeURIComponent(window.advBidxc.domain) + "&yregion=" + encodeURIComponent(window.advBidxc.region) + "&ylang=" + encodeURIComponent(window.advBidxc.lang) + "&ysite=" + encodeURIComponent(window.advBidxc.site) + "&ydevice=" + encodeURIComponent(window.advBidxc.device) + "&ysection=" + window.advBidxc.section, "mnet-script")
                }(de, {
                    limitedAds: (null == W ? void 0 : W.limited) || !1,
                    site: ne,
                    region: oe,
                    lang: re,
                    client: L,
                    headerBidderVersion: le,
                    dv360: ge,
                    AXId: we
                }), x(ee, ie, te, re)
            }
            var ue = function(e) {
                    void 0 === e && (e = []);
                    var i = 0,
                        d = 0;
                    return e.forEach((e => {
                        e[0] && e[1] && (i = Math.max(e[0], i), d = Math.max(e[1], d))
                    })), {
                        maxWidth: i,
                        maxHeight: d
                    }
                }(G),
                Ee = ue.maxWidth,
                pe = ue.maxHeight,
                me = document.getElementById(H);
            me && Ee && pe && me.setAttribute("style", "width:" + Ee + "px;height:" + pe + "px"),
                Z.sendRequestMessage(n.LOADED, {
                    ymreqid: R
                }), window._GPTMessageClient = Z, window.googletag.cmd.push((() => {
                    var e, i = window.googletag,
                        d = U(i, X, z);
                    null != d && d.length ? (e = {
                            client: L
                        }, window.googletag.pubads().addEventListener(r.SLOT_RENDER_ENDED, _(e)),
                        window.googletag.pubads().addEventListener(r.SLOT_REQUESTED, b),
                        window.googletag.pubads().addEventListener(r.SLOT_RESPONSE_RECEIVED, y),
                        window.googletag.pubads().addEventListener(r.SLOT_VISIBILITY_CHANGED, M),
                        window.googletag.pubads().addEventListener(r.IMPRESSION_VIEWABLE, N),
                        Z.attachListener((e => {
                            if (e.data.name === n.REFRESH) {
                                var t = e.data.data,
                                    a = t.redefineSlot,
                                    o = t.config,
                                    s = t.redefineTargeting,
                                    r = t.targetingConfig;
                                if (s && r) {
                                    if ($ && W) x(W.pblob, W.buckets, W.cobrand, W.lang);
                                    C(r)
                                }
                                var l = o.size,
                                    c = l && G && l.length !== G.length;
                                if (a || c) {
                                    var g = D(o);
                                    googletag.destroySlots(), A = 1;
                                    var v = U(i, g, r);
                                    if (null == v || !v.length) return void Z.sendRequestMessage(n.INIT_ERROR, {
                                        error: "ROTATE: Error redefining ad slot",
                                        ymreqid: R
                                    });
                                    v.forEach((e => {
                                        i.display(e)
                                    }))
                                } else d.forEach((e => {
                                    P({
                                        refreshIndex: (++A).toString()
                                    }, e)
                                })), window.googletag.pubads().refresh()
                            }
                            e.data.name === n.NUKE && googletag.destroySlots()
                        })), i.pubads().enableSingleRequest(),
                        i.enableServices(), i.pubadsReady ? (z && C(z), i.pubads().set("page_url", Y),
                            i.pubads().setForceSafeFrame(!0),
                            Q && i.pubads().setPublisherProvidedId(Q), K ? i.pubads().setPrivacySettings({
                                nonPersonalizedAds: !0
                            }) : J && i.pubads().setPrivacySettings({
                                limitedAds: !0,
                                restrictDataProcessing: !0
                            }), d.forEach((e => {
                                i.display(e)
                            }))) : Z.sendRequestMessage(n.INIT_ERROR, {
                            error: "PubAdsService failed to load",
                            ymreqid: R
                        })) : Z.sendRequestMessage(n.INIT_ERROR, {
                        error: "Error defining ad slot",
                        ymreqid: R
                    })
                }))
        })()
    })()
})();