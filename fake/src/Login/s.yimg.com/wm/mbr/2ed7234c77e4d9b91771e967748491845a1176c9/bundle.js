(function() {
    function r(e, n, t) {
        function o(i, f) {
            if (!n[i]) {
                if (!e[i]) {
                    var c = "function" == typeof require && require;
                    if (!f && c) return c(i, !0);
                    if (u) return u(i, !0);
                    var a = new Error("Cannot find module '" + i + "'");
                    throw a.code = "MODULE_NOT_FOUND", a
                }
                var p = n[i] = {
                    exports: {}
                };
                e[i][0].call(p.exports, function(r) {
                    var n = e[i][1][r];
                    return o(n || r)
                }, p, p.exports, r, e, n, t)
            }
            return n[i].exports
        }
        for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
        return o
    }
    return r
})()({
    1: [function(require, module, exports) {
        ! function(e, t, n) {
            "use strict";
            "undefined" != typeof window && "function" == typeof define && define.amd ? define(n) : "undefined" != typeof module && module.exports ? module.exports = n() : t.exports ? t.exports = n() : t.Fingerprint2 = n()
        }(0, this, function() {
            "use strict";
            var e = function(e, t) {
                    e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
                    var n = [0, 0, 0, 0];
                    return n[3] += e[3] + t[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += e[2] + t[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += e[1] + t[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += e[0] + t[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
                },
                t = function(e, t) {
                    e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
                    var n = [0, 0, 0, 0];
                    return n[3] += e[3] * t[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += e[2] * t[3], n[1] += n[2] >>> 16, n[2] &= 65535, n[2] += e[3] * t[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += e[1] * t[3], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += e[2] * t[2], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += e[3] * t[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
                },
                n = function(e, t) {
                    return t %= 64, 32 === t ? [e[1], e[0]] : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t | e[0] >>> 32 - t] : (t -= 32, [e[1] << t | e[0] >>> 32 - t, e[0] << t | e[1] >>> 32 - t])
                },
                a = function(e, t) {
                    return t %= 64, 0 === t ? e : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t] : [e[1] << t - 32, 0]
                },
                r = function(e, t) {
                    return [e[0] ^ t[0], e[1] ^ t[1]]
                },
                i = function(e) {
                    return e = r(e, [0, e[0] >>> 1]), e = t(e, [4283543511, 3981806797]), e = r(e, [0, e[0] >>> 1]), e = t(e, [3301882366, 444984403]), e = r(e, [0, e[0] >>> 1])
                },
                o = function(o, l) {
                    o = o || "", l = l || 0;
                    for (var s = o.length % 16, u = o.length - s, c = [0, l], d = [0, l], g = [0, 0], f = [0, 0], h = [2277735313, 289559509], m = [1291169091, 658871167], T = 0; T < u; T += 16) g = [255 & o.charCodeAt(T + 4) | (255 & o.charCodeAt(T + 5)) << 8 | (255 & o.charCodeAt(T + 6)) << 16 | (255 & o.charCodeAt(T + 7)) << 24, 255 & o.charCodeAt(T) | (255 & o.charCodeAt(T + 1)) << 8 | (255 & o.charCodeAt(T + 2)) << 16 | (255 & o.charCodeAt(T + 3)) << 24], f = [255 & o.charCodeAt(T + 12) | (255 & o.charCodeAt(T + 13)) << 8 | (255 & o.charCodeAt(T + 14)) << 16 | (255 & o.charCodeAt(T + 15)) << 24, 255 & o.charCodeAt(T + 8) | (255 & o.charCodeAt(T + 9)) << 8 | (255 & o.charCodeAt(T + 10)) << 16 | (255 & o.charCodeAt(T + 11)) << 24], g = t(g, h), g = n(g, 31), g = t(g, m), c = r(c, g), c = n(c, 27), c = e(c, d), c = e(t(c, [0, 5]), [0, 1390208809]), f = t(f, m), f = n(f, 33), f = t(f, h), d = r(d, f), d = n(d, 31), d = e(d, c), d = e(t(d, [0, 5]), [0, 944331445]);
                    switch (g = [0, 0], f = [0, 0], s) {
                        case 15:
                            f = r(f, a([0, o.charCodeAt(T + 14)], 48));
                        case 14:
                            f = r(f, a([0, o.charCodeAt(T + 13)], 40));
                        case 13:
                            f = r(f, a([0, o.charCodeAt(T + 12)], 32));
                        case 12:
                            f = r(f, a([0, o.charCodeAt(T + 11)], 24));
                        case 11:
                            f = r(f, a([0, o.charCodeAt(T + 10)], 16));
                        case 10:
                            f = r(f, a([0, o.charCodeAt(T + 9)], 8));
                        case 9:
                            f = r(f, [0, o.charCodeAt(T + 8)]), f = t(f, m), f = n(f, 33), f = t(f, h), d = r(d, f);
                        case 8:
                            g = r(g, a([0, o.charCodeAt(T + 7)], 56));
                        case 7:
                            g = r(g, a([0, o.charCodeAt(T + 6)], 48));
                        case 6:
                            g = r(g, a([0, o.charCodeAt(T + 5)], 40));
                        case 5:
                            g = r(g, a([0, o.charCodeAt(T + 4)], 32));
                        case 4:
                            g = r(g, a([0, o.charCodeAt(T + 3)], 24));
                        case 3:
                            g = r(g, a([0, o.charCodeAt(T + 2)], 16));
                        case 2:
                            g = r(g, a([0, o.charCodeAt(T + 1)], 8));
                        case 1:
                            g = r(g, [0, o.charCodeAt(T)]), g = t(g, h), g = n(g, 31), g = t(g, m), c = r(c, g)
                    }
                    return c = r(c, [0, o.length]), d = r(d, [0, o.length]), c = e(c, d), d = e(d, c), c = i(c), d = i(d), c = e(c, d), d = e(d, c), ("00000000" + (c[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (c[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (d[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d[1] >>> 0).toString(16)).slice(-8)
                },
                l = {
                    preprocessor: null,
                    audio: {
                        timeout: 1e3,
                        excludeIOS11: !0
                    },
                    fonts: {
                        swfContainerId: "fingerprintjs2",
                        swfPath: "flash/compiled/FontList.swf",
                        userDefinedFonts: [],
                        extendedJsFonts: !1
                    },
                    screen: {
                        detectScreenOrientation: !0
                    },
                    plugins: {
                        sortPluginsFor: [/palemoon/i],
                        excludeIE: !1
                    },
                    extraComponents: [],
                    excludes: {
                        enumerateDevices: !0,
                        pixelRatio: !0,
                        doNotTrack: !0,
                        fontsFlash: !0
                    },
                    NOT_AVAILABLE: "not available",
                    ERROR: "error",
                    EXCLUDED: "excluded"
                },
                s = function(e, t) {
                    if (Array.prototype.forEach && e.forEach === Array.prototype.forEach) e.forEach(t);
                    else if (e.length === +e.length)
                        for (var n = 0, a = e.length; n < a; n++) t(e[n], n, e);
                    else
                        for (var r in e) e.hasOwnProperty(r) && t(e[r], r, e)
                },
                u = function(e, t) {
                    var n = [];
                    return null == e ? n : Array.prototype.map && e.map === Array.prototype.map ? e.map(t) : (s(e, function(e, a, r) {
                        n.push(t(e, a, r))
                    }), n)
                },
                c = function(e, t) {
                    if (null == t) return e;
                    var n, a;
                    for (a in t) null == (n = t[a]) || Object.prototype.hasOwnProperty.call(e, a) || (e[a] = n);
                    return e
                },
                d = function(e, t) {
                    if (!g()) return e(t.NOT_AVAILABLE);
                    navigator.mediaDevices.enumerateDevices().then(function(t) {
                        e(t.map(function(e) {
                            return "id=" + e.deviceId + ";gid=" + e.groupId + ";" + e.kind + ";" + e.label
                        }))
                    }).catch(function(t) {
                        e(t)
                    })
                },
                g = function() {
                    return navigator.mediaDevices && navigator.mediaDevices.enumerateDevices
                },
                f = function(e, t) {
                    var n = t.audio;
                    if (n.excludeIOS11 && navigator.userAgent.match(/OS 11.+Version\/11.+Safari/)) return e(t.EXCLUDED);
                    var a = window.OfflineAudioContext || window.webkitOfflineAudioContext;
                    if (null == a) return e(t.NOT_AVAILABLE);
                    var r = new a(1, 44100, 44100),
                        i = r.createOscillator();
                    i.type = "triangle", i.frequency.setValueAtTime(1e4, r.currentTime);
                    var o = r.createDynamicsCompressor();
                    s([
                        ["threshold", -50],
                        ["knee", 40],
                        ["ratio", 12],
                        ["reduction", -20],
                        ["attack", 0],
                        ["release", .25]
                    ], function(e) {
                        void 0 !== o[e[0]] && "function" == typeof o[e[0]].setValueAtTime && o[e[0]].setValueAtTime(e[1], r.currentTime)
                    }), i.connect(o), o.connect(r.destination), i.start(0), r.startRendering();
                    var l = setTimeout(function() {
                        return console.warn('Audio fingerprint timed out. Please report bug at https://github.com/Valve/fingerprintjs2 with your user agent: "' + navigator.userAgent + '".'), r.oncomplete = function() {}, r = null, e("audioTimeout")
                    }, n.timeout);
                    r.oncomplete = function(t) {
                        var n;
                        try {
                            clearTimeout(l), n = t.renderedBuffer.getChannelData(0).slice(4500, 5e3).reduce(function(e, t) {
                                return e + Math.abs(t)
                            }, 0).toString(), i.disconnect(), o.disconnect()
                        } catch (t) {
                            return void e(t)
                        }
                        e(n)
                    }
                },
                h = function(e) {
                    e(navigator.userAgent)
                },
                m = function(e, t) {
                    e(navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || t.NOT_AVAILABLE)
                },
                T = function(e, t) {
                    e(window.screen.colorDepth || t.NOT_AVAILABLE)
                },
                p = function(e, t) {
                    e(navigator.deviceMemory || t.NOT_AVAILABLE)
                },
                v = function(e, t) {
                    e(window.devicePixelRatio || t.NOT_AVAILABLE)
                },
                A = function(e, t) {
                    e(S(t))
                },
                S = function(e) {
                    var t = [window.screen.width, window.screen.height];
                    return e.screen.detectScreenOrientation && t.sort().reverse(), t
                },
                C = function(e, t) {
                    e(B(t))
                },
                B = function(e) {
                    if (window.screen.availWidth && window.screen.availHeight) {
                        var t = [window.screen.availHeight, window.screen.availWidth];
                        return e.screen.detectScreenOrientation && t.sort().reverse(), t
                    }
                    return e.NOT_AVAILABLE
                },
                w = function(e) {
                    e((new Date).getTimezoneOffset())
                },
                y = function(e, t) {
                    if (window.Intl && window.Intl.DateTimeFormat) return void e((new window.Intl.DateTimeFormat).resolvedOptions().timeZone);
                    e(t.NOT_AVAILABLE)
                },
                E = function(e, t) {
                    e(J(t))
                },
                M = function(e, t) {
                    e(Y(t))
                },
                x = function(e, t) {
                    e(q(t))
                },
                O = function(e) {
                    e(!(!document.body || !document.body.addBehavior))
                },
                P = function(e) {
                    e(!!window.openDatabase)
                },
                b = function(e, t) {
                    e($(t))
                },
                L = function(e, t) {
                    e(ee(t))
                },
                I = function(e, t) {
                    e(te(t))
                },
                k = function(e, t) {
                    if (de()) return void e(ae(t));
                    e(t.NOT_AVAILABLE)
                },
                R = function(e, t) {
                    if (ge()) return void e(re());
                    e(t.NOT_AVAILABLE)
                },
                D = function(e) {
                    if (ge()) return void e(ie());
                    e()
                },
                _ = function(e) {
                    e(oe())
                },
                N = function(e) {
                    e(le())
                },
                F = function(e) {
                    e(se())
                },
                G = function(e) {
                    e(ue())
                },
                U = function(e) {
                    e(ce())
                },
                V = function(e, t) {
                    return he() ? me() ? t.fonts.swfPath ? void pe(function(t) {
                        e(t)
                    }, t) : e("missing options.fonts.swfPath") : e("flash not installed") : e("swf object not loaded")
                },
                H = function(e, t) {
                    var n = ["monospace", "sans-serif", "serif"],
                        a = ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"];
                    if (t.fonts.extendedJsFonts) {
                        var r = ["Abadi MT Condensed Light", "Academy Engraved LET", "ADOBE CASLON PRO", "Adobe Garamond", "ADOBE GARAMOND PRO", "Agency FB", "Aharoni", "Albertus Extra Bold", "Albertus Medium", "Algerian", "Amazone BT", "American Typewriter", "American Typewriter Condensed", "AmerType Md BT", "Andalus", "Angsana New", "AngsanaUPC", "Antique Olive", "Aparajita", "Apple Chancery", "Apple Color Emoji", "Apple SD Gothic Neo", "Arabic Typesetting", "ARCHER", "ARNO PRO", "Arrus BT", "Aurora Cn BT", "AvantGarde Bk BT", "AvantGarde Md BT", "AVENIR", "Ayuthaya", "Bandy", "Bangla Sangam MN", "Bank Gothic", "BankGothic Md BT", "Baskerville", "Baskerville Old Face", "Batang", "BatangChe", "Bauer Bodoni", "Bauhaus 93", "Bazooka", "Bell MT", "Bembo", "Benguiat Bk BT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "BernhardFashion BT", "BernhardMod BT", "Big Caslon", "BinnerD", "Blackadder ITC", "BlairMdITC TT", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Condensed", "Bodoni MT Poster Compressed", "Bookshelf Symbol 7", "Boulder", "Bradley Hand", "Bradley Hand ITC", "Bremen Bd BT", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Californian FB", "Calisto MT", "Calligrapher", "Candara", "CaslonOpnface BT", "Castellar", "Centaur", "Cezanne", "CG Omega", "CG Times", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charlesworth", "Charter Bd BT", "Charter BT", "Chaucer", "ChelthmITC Bk BT", "Chiller", "Clarendon", "Clarendon Condensed", "CloisterBlack BT", "Cochin", "Colonna MT", "Constantia", "Cooper Black", "Copperplate", "Copperplate Gothic", "Copperplate Gothic Bold", "Copperplate Gothic Light", "CopperplGoth Bd BT", "Corbel", "Cordia New", "CordiaUPC", "Cornerstone", "Coronet", "Cuckoo", "Curlz MT", "DaunPenh", "Dauphin", "David", "DB LCD Temp", "DELICIOUS", "Denmark", "DFKai-SB", "Didot", "DilleniaUPC", "DIN", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "English 111 Vivace BT", "Engravers MT", "EngraversGothic BT", "Eras Bold ITC", "Eras Demi ITC", "Eras Light ITC", "Eras Medium ITC", "EucrosiaUPC", "Euphemia", "Euphemia UCAS", "EUROSTILE", "Exotc350 Bd BT", "FangSong", "Felix Titling", "Fixedsys", "FONTIN", "Footlight MT Light", "Forte", "FrankRuehl", "Fransiscan", "Freefrm721 Blk BT", "FreesiaUPC", "Freestyle Script", "French Script MT", "FrnkGothITC Bk BT", "Fruitger", "FRUTIGER", "Futura", "Futura Bk BT", "Futura Lt BT", "Futura Md BT", "Futura ZBlk BT", "FuturaBlack BT", "Gabriola", "Galliard BT", "Gautami", "Geeza Pro", "Geometr231 BT", "Geometr231 Hv BT", "Geometr231 Lt BT", "GeoSlab 703 Lt BT", "GeoSlab 703 XBd BT", "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Gloucester MT Extra Condensed", "GOTHAM", "GOTHAM BOLD", "Goudy Old Style", "Goudy Stout", "GoudyHandtooled BT", "GoudyOLSt BT", "Gujarati Sangam MN", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Gurmukhi MN", "Haettenschweiler", "Harlow Solid Italic", "Harrington", "Heather", "Heiti SC", "Heiti TC", "HELV", "Herald", "High Tower Text", "Hiragino Kaku Gothic ProN", "Hiragino Mincho ProN", "Hoefler Text", "Humanst 521 Cn BT", "Humanst521 BT", "Humanst521 Lt BT", "Imprint MT Shadow", "Incised901 Bd BT", "Incised901 BT", "Incised901 Lt BT", "INCONSOLATA", "Informal Roman", "Informal011 BT", "INTERSTATE", "IrisUPC", "Iskoola Pota", "JasmineUPC", "Jazz LET", "Jenson", "Jester", "Jokerman", "Juice ITC", "Kabel Bk BT", "Kabel Ult BT", "Kailasa", "KaiTi", "Kalinga", "Kannada Sangam MN", "Kartika", "Kaufmann Bd BT", "Kaufmann BT", "Khmer UI", "KodchiangUPC", "Kokila", "Korinna BT", "Kristen ITC", "Krungthep", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Letter Gothic", "Levenim MT", "LilyUPC", "Lithograph", "Lithograph Light", "Long Island", "Lydian BT", "Magneto", "Maiandra GD", "Malayalam Sangam MN", "Malgun Gothic", "Mangal", "Marigold", "Marion", "Marker Felt", "Market", "Marlett", "Matisse ITC", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Minion", "Minion Pro", "Miriam", "Miriam Fixed", "Mistral", "Modern", "Modern No. 20", "Mona Lisa Solid ITC TT", "Mongolian Baiti", "MONO", "MoolBoran", "Mrs Eaves", "MS LineDraw", "MS Mincho", "MS PMincho", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MUSEO", "MV Boli", "Nadeem", "Narkisim", "NEVIS", "News Gothic", "News GothicMT", "NewsGoth BT", "Niagara Engraved", "Niagara Solid", "Noteworthy", "NSimSun", "Nyala", "OCR A Extended", "Old Century", "Old English Text MT", "Onyx", "Onyx BT", "OPTIMA", "Oriya Sangam MN", "OSAKA", "OzHandicraft BT", "Palace Script MT", "Papyrus", "Parchment", "Party LET", "Pegasus", "Perpetua", "Perpetua Titling MT", "PetitaBold", "Pickwick", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB", "Poor Richard", "Poster", "PosterBodoni BT", "PRINCETOWN LET", "Pristina", "PTBarnum BT", "Pythagoras", "Raavi", "Rage Italic", "Ravie", "Ribbon131 Bd BT", "Rockwell", "Rockwell Condensed", "Rockwell Extra Bold", "Rod", "Roman", "Sakkal Majalla", "Santa Fe LET", "Savoye LET", "Sceptre", "Script", "Script MT Bold", "SCRIPTINA", "Serifa", "Serifa BT", "Serifa Th BT", "ShelleyVolante BT", "Sherwood", "Shonar Bangla", "Showcard Gothic", "Shruti", "Signboard", "SILKSCREEN", "SimHei", "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", "Sinhala Sangam MN", "Sketch Rockwell", "Skia", "Small Fonts", "Snap ITC", "Snell Roundhand", "Socket", "Souvenir Lt BT", "Staccato222 BT", "Steamer", "Stencil", "Storybook", "Styllo", "Subway", "Swis721 BlkEx BT", "Swiss911 XCm BT", "Sylfaen", "Synchro LET", "System", "Tamil Sangam MN", "Technical", "Teletype", "Telugu Sangam MN", "Tempus Sans ITC", "Terminal", "Thonburi", "Traditional Arabic", "Trajan", "TRAJAN PRO", "Tristan", "Tubular", "Tunga", "Tw Cen MT", "Tw Cen MT Condensed", "Tw Cen MT Condensed Extra Bold", "TypoUpright BT", "Unicorn", "Univers", "Univers CE 55 Medium", "Univers Condensed", "Utsaah", "Vagabond", "Vani", "Vijaya", "Viner Hand ITC", "VisualUI", "Vivaldi", "Vladimir Script", "Vrinda", "Westminster", "WHITNEY", "Wide Latin", "ZapfEllipt BT", "ZapfHumnst BT", "ZapfHumnst Dm BT", "Zapfino", "Zurich BlkEx BT", "Zurich Ex BT", "ZWAdobeF"];
                        a = a.concat(r)
                    }
                    a = a.concat(t.fonts.userDefinedFonts), a = a.filter(function(e, t) {
                        return a.indexOf(e) === t
                    });
                    var i = document.getElementsByTagName("body")[0],
                        o = document.createElement("div"),
                        l = document.createElement("div"),
                        s = {},
                        u = {},
                        c = function() {
                            var e = document.createElement("span");
                            return e.style.position = "absolute", e.style.left = "-9999px", e.style.fontSize = "72px", e.style.fontStyle = "normal", e.style.fontWeight = "normal", e.style.letterSpacing = "normal", e.style.lineBreak = "auto", e.style.lineHeight = "normal", e.style.textTransform = "none", e.style.textAlign = "left", e.style.textDecoration = "none", e.style.textShadow = "none", e.style.whiteSpace = "normal", e.style.wordBreak = "normal", e.style.wordSpacing = "normal", e.innerHTML = "mmmmmmmmmmlli", e
                        },
                        d = function(e, t) {
                            var n = c();
                            return n.style.fontFamily = "'" + e + "'," + t, n
                        },
                        g = function() {
                            for (var e = [], t = 0, a = n.length; t < a; t++) {
                                var r = c();
                                r.style.fontFamily = n[t], o.appendChild(r), e.push(r)
                            }
                            return e
                        }();
                    i.appendChild(o);
                    for (var f = 0, h = n.length; f < h; f++) s[n[f]] = g[f].offsetWidth, u[n[f]] = g[f].offsetHeight;
                    var m = function() {
                        for (var e = {}, t = 0, r = a.length; t < r; t++) {
                            for (var i = [], o = 0, s = n.length; o < s; o++) {
                                var u = d(a[t], n[o]);
                                l.appendChild(u), i.push(u)
                            }
                            e[a[t]] = i
                        }
                        return e
                    }();
                    i.appendChild(l);
                    for (var T = [], p = 0, v = a.length; p < v; p++)(function(e) {
                        for (var t = !1, a = 0; a < n.length; a++)
                            if (t = e[a].offsetWidth !== s[n[a]] || e[a].offsetHeight !== u[n[a]]) return t;
                        return t
                    })(m[a[p]]) && T.push(a[p]);
                    i.removeChild(l), i.removeChild(o), e(T)
                },
                X = function(e, t) {
                    e(fe() ? t.plugins.excludeIE ? t.EXCLUDED : j(t) : W(t))
                },
                W = function(e) {
                    if (null == navigator.plugins) return e.NOT_AVAILABLE;
                    for (var t = [], n = 0, a = navigator.plugins.length; n < a; n++) navigator.plugins[n] && t.push(navigator.plugins[n]);
                    return K(e) && (t = t.sort(function(e, t) {
                        return e.name > t.name ? 1 : e.name < t.name ? -1 : 0
                    })), u(t, function(e) {
                        var t = u(e, function(e) {
                            return [e.type, e.suffixes]
                        });
                        return [e.name, e.description, t]
                    })
                },
                j = function(e) {
                    var t = [];
                    if (Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, "ActiveXObject") || "ActiveXObject" in window) {
                        t = u(["AcroPDF.PDF", "Adodb.Stream", "AgControl.AgControl", "DevalVRXCtrl.DevalVRXCtrl.1", "MacromediaFlashPaper.MacromediaFlashPaper", "Msxml2.DOMDocument", "Msxml2.XMLHTTP", "PDF.PdfCtrl", "QuickTime.QuickTime", "QuickTimeCheckObject.QuickTimeCheck.1", "RealPlayer", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "Scripting.Dictionary", "SWCtl.SWCtl", "Shell.UIHelper", "ShockwaveFlash.ShockwaveFlash", "Skype.Detection", "TDCCtl.TDCCtl", "WMPlayer.OCX", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1"], function(t) {
                            try {
                                return new window.ActiveXObject(t), t
                            } catch (t) {
                                return e.ERROR
                            }
                        })
                    } else t.push(e.NOT_AVAILABLE);
                    return navigator.plugins && (t = t.concat(W(e))), t
                },
                K = function(e) {
                    for (var t = !1, n = 0, a = e.plugins.sortPluginsFor.length; n < a; n++) {
                        var r = e.plugins.sortPluginsFor[n];
                        if (navigator.userAgent.match(r)) {
                            t = !0;
                            break
                        }
                    }
                    return t
                },
                z = function(e) {
                    e(ne())
                },
                Z = function(e, t) {
                    e(Q(t))
                },
                J = function(e) {
                    try {
                        return !!window.sessionStorage
                    } catch (t) {
                        return e.ERROR
                    }
                },
                Y = function(e) {
                    try {
                        return !!window.localStorage
                    } catch (t) {
                        return e.ERROR
                    }
                },
                q = function(e) {
                    try {
                        return !!window.indexedDB
                    } catch (t) {
                        return e.ERROR
                    }
                },
                Q = function(e) {
                    return navigator.hardwareConcurrency ? navigator.hardwareConcurrency : e.NOT_AVAILABLE
                },
                $ = function(e) {
                    return navigator.cpuClass || e.NOT_AVAILABLE
                },
                ee = function(e) {
                    return navigator.platform ? navigator.platform : e.NOT_AVAILABLE
                },
                te = function(e) {
                    return navigator.doNotTrack ? navigator.doNotTrack : navigator.msDoNotTrack ? navigator.msDoNotTrack : window.doNotTrack ? window.doNotTrack : e.NOT_AVAILABLE
                },
                ne = function() {
                    var e, t = 0;
                    void 0 !== navigator.maxTouchPoints ? t = navigator.maxTouchPoints : void 0 !== navigator.msMaxTouchPoints && (t = navigator.msMaxTouchPoints);
                    try {
                        document.createEvent("TouchEvent"), e = !0
                    } catch (t) {
                        e = !1
                    }
                    var n = "ontouchstart" in window;
                    return [t, e, n]
                },
                ae = function(e) {
                    var t = [],
                        n = document.createElement("canvas");
                    n.width = 2e3, n.height = 200, n.style.display = "inline";
                    var a = n.getContext("2d");
                    return a.rect(0, 0, 10, 10), a.rect(2, 2, 6, 6), t.push("canvas winding:" + (!1 === a.isPointInPath(5, 5, "evenodd") ? "yes" : "no")), a.textBaseline = "alphabetic", a.fillStyle = "#f60", a.fillRect(125, 1, 62, 20), a.fillStyle = "#069", e.dontUseFakeFontInCanvas ? a.font = "11pt Arial" : a.font = "11pt no-real-font-123", a.fillText("Cwm fjordbank glyphs vext quiz, 😃", 2, 15), a.fillStyle = "rgba(102, 204, 0, 0.2)", a.font = "18pt Arial", a.fillText("Cwm fjordbank glyphs vext quiz, 😃", 4, 45), a.globalCompositeOperation = "multiply", a.fillStyle = "rgb(255,0,255)", a.beginPath(), a.arc(50, 50, 50, 0, 2 * Math.PI, !0), a.closePath(), a.fill(), a.fillStyle = "rgb(0,255,255)", a.beginPath(), a.arc(100, 50, 50, 0, 2 * Math.PI, !0), a.closePath(), a.fill(), a.fillStyle = "rgb(255,255,0)", a.beginPath(), a.arc(75, 100, 50, 0, 2 * Math.PI, !0), a.closePath(), a.fill(), a.fillStyle = "rgb(255,0,255)", a.arc(75, 75, 75, 0, 2 * Math.PI, !0), a.arc(75, 75, 25, 0, 2 * Math.PI, !0), a.fill("evenodd"), n.toDataURL && t.push("canvas fp:" + n.toDataURL()), t
                },
                re = function() {
                    var e, t = function(t) {
                        return e.clearColor(0, 0, 0, 1), e.enable(e.DEPTH_TEST), e.depthFunc(e.LEQUAL), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT), "[" + t[0] + ", " + t[1] + "]"
                    };
                    if (!(e = ve())) return null;
                    var n = [],
                        a = e.createBuffer();
                    e.bindBuffer(e.ARRAY_BUFFER, a);
                    var r = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
                    e.bufferData(e.ARRAY_BUFFER, r, e.STATIC_DRAW), a.itemSize = 3, a.numItems = 3;
                    var i = e.createProgram(),
                        o = e.createShader(e.VERTEX_SHADER);
                    e.shaderSource(o, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"), e.compileShader(o);
                    var l = e.createShader(e.FRAGMENT_SHADER);
                    e.shaderSource(l, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"), e.compileShader(l), e.attachShader(i, o), e.attachShader(i, l), e.linkProgram(i), e.useProgram(i), i.vertexPosAttrib = e.getAttribLocation(i, "attrVertex"), i.offsetUniform = e.getUniformLocation(i, "uniformOffset"), e.enableVertexAttribArray(i.vertexPosArray), e.vertexAttribPointer(i.vertexPosAttrib, a.itemSize, e.FLOAT, !1, 0, 0), e.uniform2f(i.offsetUniform, 1, 1), e.drawArrays(e.TRIANGLE_STRIP, 0, a.numItems);
                    try {
                        n.push(e.canvas.toDataURL())
                    } catch (e) {}
                    n.push("extensions:" + (e.getSupportedExtensions() || []).join(";")), n.push("webgl aliased line width range:" + t(e.getParameter(e.ALIASED_LINE_WIDTH_RANGE))), n.push("webgl aliased point size range:" + t(e.getParameter(e.ALIASED_POINT_SIZE_RANGE))), n.push("webgl alpha bits:" + e.getParameter(e.ALPHA_BITS)), n.push("webgl antialiasing:" + (e.getContextAttributes().antialias ? "yes" : "no")), n.push("webgl blue bits:" + e.getParameter(e.BLUE_BITS)), n.push("webgl depth bits:" + e.getParameter(e.DEPTH_BITS)), n.push("webgl green bits:" + e.getParameter(e.GREEN_BITS)), n.push("webgl max anisotropy:" + function(e) {
                        var t = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic");
                        if (t) {
                            var n = e.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                            return 0 === n && (n = 2), n
                        }
                        return null
                    }(e)), n.push("webgl max combined texture image units:" + e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS)), n.push("webgl max cube map texture size:" + e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)), n.push("webgl max fragment uniform vectors:" + e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)), n.push("webgl max render buffer size:" + e.getParameter(e.MAX_RENDERBUFFER_SIZE)), n.push("webgl max texture image units:" + e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)), n.push("webgl max texture size:" + e.getParameter(e.MAX_TEXTURE_SIZE)), n.push("webgl max varying vectors:" + e.getParameter(e.MAX_VARYING_VECTORS)), n.push("webgl max vertex attribs:" + e.getParameter(e.MAX_VERTEX_ATTRIBS)), n.push("webgl max vertex texture image units:" + e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)), n.push("webgl max vertex uniform vectors:" + e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)), n.push("webgl max viewport dims:" + t(e.getParameter(e.MAX_VIEWPORT_DIMS))), n.push("webgl red bits:" + e.getParameter(e.RED_BITS)), n.push("webgl renderer:" + e.getParameter(e.RENDERER)), n.push("webgl shading language version:" + e.getParameter(e.SHADING_LANGUAGE_VERSION)), n.push("webgl stencil bits:" + e.getParameter(e.STENCIL_BITS)), n.push("webgl vendor:" + e.getParameter(e.VENDOR)), n.push("webgl version:" + e.getParameter(e.VERSION));
                    try {
                        var u = e.getExtension("WEBGL_debug_renderer_info");
                        u && (n.push("webgl unmasked vendor:" + e.getParameter(u.UNMASKED_VENDOR_WEBGL)), n.push("webgl unmasked renderer:" + e.getParameter(u.UNMASKED_RENDERER_WEBGL)))
                    } catch (e) {}
                    return e.getShaderPrecisionFormat ? (s(["FLOAT", "INT"], function(t) {
                        s(["VERTEX", "FRAGMENT"], function(a) {
                            s(["HIGH", "MEDIUM", "LOW"], function(r) {
                                s(["precision", "rangeMin", "rangeMax"], function(i) {
                                    var o = e.getShaderPrecisionFormat(e[a + "_SHADER"], e[r + "_" + t])[i];
                                    "precision" !== i && (i = "precision " + i);
                                    var l = ["webgl ", a.toLowerCase(), " shader ", r.toLowerCase(), " ", t.toLowerCase(), " ", i, ":", o].join("");
                                    n.push(l)
                                })
                            })
                        })
                    }), n) : n
                },
                ie = function() {
                    try {
                        var e = ve(),
                            t = e.getExtension("WEBGL_debug_renderer_info");
                        return e.getParameter(t.UNMASKED_VENDOR_WEBGL) + "~" + e.getParameter(t.UNMASKED_RENDERER_WEBGL)
                    } catch (e) {
                        return null
                    }
                },
                oe = function() {
                    var e = document.createElement("div");
                    e.innerHTML = "&nbsp;", e.className = "adsbox";
                    var t = !1;
                    try {
                        document.body.appendChild(e), t = 0 === document.getElementsByClassName("adsbox")[0].offsetHeight, document.body.removeChild(e)
                    } catch (e) {
                        t = !1
                    }
                    return t
                },
                le = function() {
                    if (void 0 !== navigator.languages) try {
                        if (navigator.languages[0].substr(0, 2) !== navigator.language.substr(0, 2)) return !0
                    } catch (e) {
                        return !0
                    }
                    return !1
                },
                se = function() {
                    return window.screen.width < window.screen.availWidth || window.screen.height < window.screen.availHeight
                },
                ue = function() {
                    var e, t = navigator.userAgent.toLowerCase(),
                        n = navigator.oscpu,
                        a = navigator.platform.toLowerCase();
                    if (e = t.indexOf("windows phone") >= 0 ? "Windows Phone" : t.indexOf("win") >= 0 ? "Windows" : t.indexOf("android") >= 0 ? "Android" : t.indexOf("linux") >= 0 ? "Linux" : t.indexOf("iphone") >= 0 || t.indexOf("ipad") >= 0 ? "iOS" : t.indexOf("mac") >= 0 ? "Mac" : "Other", ("ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) && "Windows Phone" !== e && "Android" !== e && "iOS" !== e && "Other" !== e) return !0;
                    if (void 0 !== n) {
                        if (n = n.toLowerCase(), n.indexOf("win") >= 0 && "Windows" !== e && "Windows Phone" !== e) return !0;
                        if (n.indexOf("linux") >= 0 && "Linux" !== e && "Android" !== e) return !0;
                        if (n.indexOf("mac") >= 0 && "Mac" !== e && "iOS" !== e) return !0;
                        if ((-1 === n.indexOf("win") && -1 === n.indexOf("linux") && -1 === n.indexOf("mac")) != ("Other" === e)) return !0
                    }
                    return a.indexOf("win") >= 0 && "Windows" !== e && "Windows Phone" !== e || ((a.indexOf("linux") >= 0 || a.indexOf("android") >= 0 || a.indexOf("pike") >= 0) && "Linux" !== e && "Android" !== e || ((a.indexOf("mac") >= 0 || a.indexOf("ipad") >= 0 || a.indexOf("ipod") >= 0 || a.indexOf("iphone") >= 0) && "Mac" !== e && "iOS" !== e || ((-1 === a.indexOf("win") && -1 === a.indexOf("linux") && -1 === a.indexOf("mac")) != ("Other" === e) || void 0 === navigator.plugins && "Windows" !== e && "Windows Phone" !== e)))
                },
                ce = function() {
                    var e, t = navigator.userAgent.toLowerCase(),
                        n = navigator.productSub;
                    if (("Chrome" === (e = t.indexOf("firefox") >= 0 ? "Firefox" : t.indexOf("opera") >= 0 || t.indexOf("opr") >= 0 ? "Opera" : t.indexOf("chrome") >= 0 ? "Chrome" : t.indexOf("safari") >= 0 ? "Safari" : t.indexOf("trident") >= 0 ? "Internet Explorer" : "Other") || "Safari" === e || "Opera" === e) && "20030107" !== n) return !0;
                    var a = eval.toString().length;
                    if (37 === a && "Safari" !== e && "Firefox" !== e && "Other" !== e) return !0;
                    if (39 === a && "Internet Explorer" !== e && "Other" !== e) return !0;
                    if (33 === a && "Chrome" !== e && "Opera" !== e && "Other" !== e) return !0;
                    var r;
                    try {
                        throw "a"
                    } catch (e) {
                        try {
                            e.toSource(), r = !0
                        } catch (e) {
                            r = !1
                        }
                    }
                    return r && "Firefox" !== e && "Other" !== e
                },
                de = function() {
                    var e = document.createElement("canvas");
                    return !(!e.getContext || !e.getContext("2d"))
                },
                ge = function() {
                    if (!de()) return !1;
                    var e = ve();
                    return !!window.WebGLRenderingContext && !!e
                },
                fe = function() {
                    return "Microsoft Internet Explorer" === navigator.appName || !("Netscape" !== navigator.appName || !/Trident/.test(navigator.userAgent))
                },
                he = function() {
                    return void 0 !== window.swfobject
                },
                me = function() {
                    return window.swfobject.hasFlashPlayerVersion("9.0.0")
                },
                Te = function(e) {
                    var t = document.createElement("div");
                    t.setAttribute("id", e.fonts.swfContainerId), document.body.appendChild(t)
                },
                pe = function(e, t) {
                    window.___fp_swf_loaded = function(t) {
                        e(t)
                    };
                    var n = t.fonts.swfContainerId;
                    Te();
                    var a = {
                            onReady: "___fp_swf_loaded"
                        },
                        r = {
                            allowScriptAccess: "always",
                            menu: "false"
                        };
                    window.swfobject.embedSWF(t.fonts.swfPath, n, "1", "1", "9.0.0", !1, a, r, {})
                },
                ve = function() {
                    var e = document.createElement("canvas"),
                        t = null;
                    try {
                        t = e.getContext("webgl") || e.getContext("experimental-webgl")
                    } catch (e) {}
                    return t || (t = null), t
                },
                Ae = [{
                    key: "userAgent",
                    getData: h
                }, {
                    key: "language",
                    getData: m
                }, {
                    key: "colorDepth",
                    getData: T
                }, {
                    key: "deviceMemory",
                    getData: p
                }, {
                    key: "pixelRatio",
                    getData: v
                }, {
                    key: "hardwareConcurrency",
                    getData: Z
                }, {
                    key: "screenResolution",
                    getData: A
                }, {
                    key: "availableScreenResolution",
                    getData: C
                }, {
                    key: "timezoneOffset",
                    getData: w
                }, {
                    key: "timezone",
                    getData: y
                }, {
                    key: "sessionStorage",
                    getData: E
                }, {
                    key: "localStorage",
                    getData: M
                }, {
                    key: "indexedDb",
                    getData: x
                }, {
                    key: "addBehavior",
                    getData: O
                }, {
                    key: "openDatabase",
                    getData: P
                }, {
                    key: "cpuClass",
                    getData: b
                }, {
                    key: "platform",
                    getData: L
                }, {
                    key: "doNotTrack",
                    getData: I
                }, {
                    key: "plugins",
                    getData: X
                }, {
                    key: "canvas",
                    getData: k
                }, {
                    key: "webgl",
                    getData: R
                }, {
                    key: "webglVendorAndRenderer",
                    getData: D
                }, {
                    key: "adBlock",
                    getData: _
                }, {
                    key: "hasLiedLanguages",
                    getData: N
                }, {
                    key: "hasLiedResolution",
                    getData: F
                }, {
                    key: "hasLiedOs",
                    getData: G
                }, {
                    key: "hasLiedBrowser",
                    getData: U
                }, {
                    key: "touchSupport",
                    getData: z
                }, {
                    key: "fonts",
                    getData: H,
                    pauseBefore: !0
                }, {
                    key: "fontsFlash",
                    getData: V,
                    pauseBefore: !0
                }, {
                    key: "audio",
                    getData: f
                }, {
                    key: "enumerateDevices",
                    getData: d
                }],
                Se = function(e) {
                    throw new Error("'new Fingerprint()' is deprecated, see https://github.com/Valve/fingerprintjs2#upgrade-guide-from-182-to-200")
                };
            return Se.get = function(e, t) {
                t ? e || (e = {}) : (t = e, e = {}), c(e, l), e.components = e.extraComponents.concat(Ae);
                var n = {
                        data: [],
                        addPreprocessedComponent: function(t, a) {
                            "function" == typeof e.preprocessor && (a = e.preprocessor(t, a)), n.data.push({
                                key: t,
                                value: a
                            })
                        }
                    },
                    a = -1,
                    r = function(i) {
                        if ((a += 1) >= e.components.length) return void t(n.data);
                        var o = e.components[a];
                        if (e.excludes[o.key]) return void r(!1);
                        if (!i && o.pauseBefore) return a -= 1, void setTimeout(function() {
                            r(!0)
                        }, 1);
                        try {
                            o.getData(function(e) {
                                n.addPreprocessedComponent(o.key, e), r(!1)
                            }, e)
                        } catch (e) {
                            n.addPreprocessedComponent(o.key, String(e)), r(!1)
                        }
                    };
                r(!1)
            }, Se.getPromise = function(e) {
                return new Promise(function(t, n) {
                    Se.get(e, t)
                })
            }, Se.getV18 = function(e, t) {
                return null == t && (t = e, e = {}), Se.get(e, function(n) {
                    for (var a = [], r = 0; r < n.length; r++) {
                        var i = n[r];
                        if (i.value === (e.NOT_AVAILABLE || "not available")) a.push({
                            key: i.key,
                            value: "unknown"
                        });
                        else if ("plugins" === i.key) a.push({
                            key: "plugins",
                            value: u(i.value, function(e) {
                                var t = u(e[2], function(e) {
                                    return e.join ? e.join("~") : e
                                }).join(",");
                                return [e[0], e[1], t].join("::")
                            })
                        });
                        else if (-1 !== ["canvas", "webgl"].indexOf(i.key)) a.push({
                            key: i.key,
                            value: i.value.join("~")
                        });
                        else if (-1 !== ["sessionStorage", "localStorage", "indexedDb", "addBehavior", "openDatabase"].indexOf(i.key)) {
                            if (!i.value) continue;
                            a.push({
                                key: i.key,
                                value: 1
                            })
                        } else i.value ? a.push(i.value.join ? {
                            key: i.key,
                            value: i.value.join(";")
                        } : i) : a.push({
                            key: i.key,
                            value: i.value
                        })
                    }
                    var l = o(u(a, function(e) {
                        return e.value
                    }).join("~~~"), 31);
                    t(l, a)
                })
            }, Se.x64hash128 = o, Se.VERSION = "2.0.0", Se
        });
    }, {}],
    2: [function(require, module, exports) {
        (function(global) {
            (function() {
                window.jsModules = window.jsModules || {}, window.jsModules.account_attributes_challenge_main = function() {
                    "use strict";
                    var e, t, n, r = require("../../../../public/js/common.js"),
                        a = require("../../../../public/js/ajax.js"),
                        o = require("../../../../public/js/dom.js"),
                        d = require("../../../../public/js/social-login.js"),
                        s = require("../../../../public/js/inline-country-dropdown.js"),
                        i = require("../../../../public/js/disable-double-submit.js").initDisableDoubleSubmit,
                        l = require("../../../../public/js/email-suggestions.js"),
                        u = require("../../../../public/js/utils.js"),
                        c = document.getElementById("email-auto-list"),
                        m = document.getElementById("usernamereg-email"),
                        g = document.getElementById("usernamereg-userId"),
                        y = document.getElementById("reg-submit-button"),
                        v = document.getElementById("domain-auto-fill"),
                        p = document.getElementById("userid-domain-yahoo"),
                        E = document.getElementById("userid-domain-selector"),
                        f = document.getElementById("password-container"),
                        h = document.getElementById("yid-domain-selector"),
                        b = document.getElementById("reg-survey"),
                        I = document.getElementById("yid-domain-popup"),
                        C = document.getElementById("domain-info-icon"),
                        B = document.getElementById("domain-info-tooltip"),
                        w = document.getElementById("customize-data-pref-event"),
                        S = !1,
                        A = require("./suggestions.js"),
                        k = {},
                        N = document.getElementById("regform"),
                        D = {
                            mm: 1,
                            dd: 1,
                            shortCountryCode: 1,
                            businessName: 1,
                            businessTitle: 1,
                            gender: 1,
                            isAccountMatchingConsented: 1,
                            hasReadFullPrivacyToS: 1
                        },
                        q = function(e) {
                            return e.value && e.value.trim() || e.options && e.options[e.selectedIndex].value || ""
                        },
                        _ = document.querySelectorAll("#account-attributes-challenge select");
                    if (_)
                        for (var O = _.length, T = 0; T < O; T += 1) r.addEvent(_[T], "change", function(e) {
                            o.addClass(e.target, "reg-black")
                        });
                    var j = function(e, t) {
                            var n, r = document.getElementById("usernamereg-" + e);
                            r && ("firstName" === e && (t ? o.addClass(r, "verified-pending") : o.removeClass(r, "verified-pending"), n = document.getElementById("usernamereg-lastName"), (t = t && n && o.containsClass(n, "verified")) && o.removeClass(r, "verified-pending")), t ? o.addClass(r, "verified") : o.removeClass(r, "verified"), "lastName" === e && (n = document.getElementById("usernamereg-firstName")) && (o.containsClass(n, "verified-pending") || o.containsClass(n, "verified")) && j("firstName", !0))
                        },
                        L = function() {
                            var e = [],
                                t = N.elements;
                            return [].slice.call(t).forEach(function(t) {
                                var n = q(t);
                                t.name && "tpaProvider" !== t.name && ("radio" !== t.type || t.checked) && e.push(encodeURIComponent(t.name) + "=" + encodeURIComponent(n))
                            }), e.join("&")
                        },
                        R = function(e, t) {
                            var n = "reg-error-" + e,
                                r = document.getElementById("usernamereg-altreg"),
                                a = regdata.urls.loginURL,
                                o = document.getElementById(n),
                                d = regdata.messages[t];
                            "IDENTIFIER_EXISTS" === t && (a += "&login=" + encodeURIComponent(document.getElementById("usernamereg-" + e).value + (h && h.selectedIndex ? "@" + h.value : "")), d = d.replace("REPLACE_SIGNIN_LINK", '<a href="' + a + '">' + regdata.messages.LINK_SIGN_IN + "</a>"), r && !regdata.enabledSuggestionOnError && (r.style.display = "none")), "IDENTIFIER_EXISTS" !== t && "IDENTIFIER_NOT_AVAILABLE" !== t || (b && b.dispatchEvent && b.dispatchEvent(new Event("show")), regdata.enabledSuggestionOnError && (A.hideSuggestions(), A.setupSuggestionsContainer(new Event("focus"), !0))), "EXCEEDED_ACCOUNTS_PER_PHONE" !== t && "EXCEEDED_ACCOUNTS_PER_PHONE_MASS_REG" !== t || u.rapidBeaconClick("click", u.parseDataYlk("sec:reg;elm:input;elmt:phone;slk:exceed-accounts")), o && (o.className = "oneid-error-message", o.setAttribute("data-error", "messages." + t), o.setAttribute("role", "alert"), o.innerHTML = d)
                        },
                        x = function(e, t) {
                            "password" === e && (S = !0);
                            var n = o.getFirstElementByName(e);
                            "yid" === e && (n = document.getElementById("usernamereg-yid")), n && ("password" === e && f ? o.addClass(f, "oneid-error-border") : (n.setAttribute("aria-invalid", !0), o.addClass(n, "oneid-error-border")), R(e, t), j(e, !1))
                        },
                        H = function(t) {
                            if ("" !== t) {
                                var n = document.querySelectorAll(".oneid-error-border"),
                                    r = document.querySelectorAll(".oneid-error-message"),
                                    a = document.getElementById("usernamereg-altreg");
                                switch (!regdata.enabledSuggestionOnError || "yid" !== t && "userId" !== t || A.hideSuggestions(), t) {
                                    case "yid":
                                        n = document.querySelectorAll("#usernamereg-yid.oneid-error-border"), r = document.querySelectorAll("#yid-field-suggestion .oneid-error-message"), a && (a.style.display = "block");
                                        break;
                                    case "gender":
                                        n = document.querySelectorAll('select[name="gender"]'), r = document.querySelectorAll(".usernamereg-gender ~ .oneid-error-message");
                                        break;
                                    case "yyyy":
                                    case "mm":
                                    case "dd":
                                        n = document.querySelectorAll('#account-attributes-challenge div[name="birthDate"]'), r = document.querySelectorAll(".birthdate-error .oneid-error-message");
                                        break;
                                    case "birthYear":
                                        n = document.querySelectorAll("input[name=" + t + "]"), r = document.querySelectorAll(".birthyear-error .oneid-error-message");
                                        break;
                                    case "email":
                                        a && (a.style.display = "block");
                                        break;
                                    case "password":
                                        n = document.querySelectorAll("input[name=" + t + "]"), r = document.querySelectorAll("#reg-error-password"), f && (o.removeClasses(f, ["error", "oneid-error-border"]), o.containsClass(e, "oneid-error-border") && o.removeClass(e, "oneid-error-border"), n = document.querySelectorAll(".usernamereg-password-container"));
                                        break;
                                    default:
                                        n = document.querySelectorAll("input[name=" + t + "]"), r = [].concat([].slice.call(document.querySelectorAll("input[name=" + t + "] ~ .oneid-error-message")), [].slice.call(document.querySelectorAll("div[id=reg-error-" + t + "]")))
                                }[].slice.call(n).forEach(function(e) {
                                    o.removeClass(e, "oneid-error-border"), e.setAttribute("aria-invalid", "false")
                                }), [].slice.call(r).forEach(function(e) {
                                    o.removeClass(e, "oneid-error-message"), e.innerHTML = "", e.setAttribute("data-error", ""), e.removeAttribute("role")
                                })
                            }
                        },
                        P = function() {
                            var e = o.getFirstElementByName("mm"),
                                t = o.getFirstElementByName("dd"),
                                n = o.getFirstElementByName("yyyy");
                            if ("" === q(e) || "" === q(t) || "" === q(n)) return !0
                        },
                        F = function(e) {
                            var t = o.getFirstElementByName(e);
                            if (t && "" === q(t)) return !0
                        },
                        U = function(e) {
                            var t;
                            return "birthDate" === e ? P() : "gender" === e ? F("gender") : !(!(t = o.getFirstElementByName(e)) || 0 !== t.value.length) || void 0
                        },
                        M = function(e, t) {
                            "function" == typeof e && (t = e, e = !1);
                            var n = L(),
                                r = new a;
                            U(e) || r.send("POST", "/account/module/create" + (e ? "?validateField=" + e : ""), {
                                body: n
                            }, function(e, n) {
                                var r;
                                try {
                                    r = JSON.parse(n.responseText)
                                } catch (e) {}
                                t(r)
                            })
                        },
                        Y = function(e) {
                            var t = e.name || e;
                            return "mm" === t || "dd" === t || "yyyy" === t
                        },
                        G = function(e) {
                            Y(e) && (e = "birthDate"), M(e, function(t) {
                                var n = !0;
                                t && t.errors && t.errors.length && t.errors.forEach(function(t) {
                                    t.name === e && (n = !1, x(t.name, t.error))
                                }), n && (H(e), j(e, !0))
                            })
                        },
                        z = function() {
                            if (document.querySelectorAll(".password-field.error").length > 0 && (S = !0), S) return e.value.length > 7 || 0 === e.value.length ? (H("password"), !1) : (x("password", "PASSWORD_TOO_SHORT"), !0)
                        },
                        W = {},
                        X = function(e, t, n) {
                            var r, a, o, d, s, i = q(e);
                            if (!U(t)) {
                                if (n.minLength && i.length < n.minLength) return "LENGTH_TOO_SHORT";
                                if (n.disallowedRegexes) {
                                    r = n.disallowedRegexes;
                                    for (a in r)
                                        for (o = r[a].length, d = 0; d < o; d += 1)
                                            if (s = t + a, W[s] = W[s] || new RegExp(r[a]), i.match(W[s])) return a
                                }
                                return !1
                            }
                        },
                        K = function(e) {
                            var t = e.name,
                                n = regdata.constraints[t] && regdata.constraints[t];
                            if (e && n) {
                                var r = X(e, t, n);
                                if (r) return x(t, r), r
                            }
                        },
                        J = function(e) {
                            var t = e.target.name;
                            e.preventDefault(), e.target && t && (H(t), j(t, !1))
                        },
                        V = function(n) {
                            var r;
                            n.preventDefault(), n.stopPropagation(), r = "BUTTON" === t.tagName ? "innerHTML" : "value", t[r] === regdata.messages.SHOW ? (e.type = "text", t[r] = regdata.messages.HIDE, o.addClass(t, "reveal")) : (e.type = "password", t[r] = regdata.messages.SHOW, o.removeClass(t, "reveal"))
                        },
                        Q = function(t) {
                            t.preventDefault(), t.stopPropagation(), o.containsClass(t.target, "hide-pw") ? (o.replaceClass(t.target, "hide-pw", "show-pw"), e.type = "text", e.focus()) : (o.replaceClass(t.target, "show-pw", "hide-pw"), e.type = "password", e.focus())
                        },
                        Z = {
                            9: 1,
                            16: 1,
                            17: 1,
                            18: 1,
                            20: 1,
                            27: 1,
                            37: 1,
                            38: 1,
                            39: 1,
                            40: 1,
                            91: 1
                        },
                        $ = function(e) {
                            var t = e.target,
                                n = t.tagName.toUpperCase(),
                                r = t.name;
                            return 1 === Z[e.keyCode] || "" === r || "INPUT" !== n && "SELECT" !== n || "yidDomain" === r
                        },
                        ee = function(t) {
                            "blur" === t.type ? o.replaceClass(f, "focussed", "blurred") : (o.containsClass(e, "oneid-error-border") && H("password"), o.replaceClass(f, "blurred", "focussed"))
                        },
                        te = function(e) {
                            "blur" !== e.type && "keyup" !== e.type || "yid" !== e.target.name && "userId" !== e.target.name && "freeformGender" !== e.target.name && "yidDomain" !== e.target.name || A.suggestionsBlurHandler(e)
                        };
                    if (w) {
                        var ne = document.getElementById("customize-data-preferences");
                        ne && r.addEvent(ne, "click", function() {
                            w.value = !0
                        })
                    }
                    var re = function(e) {
                            var t = e.target,
                                n = t.type,
                                r = t.name;
                            (p && p.checked || E && "yahoo" === E.value) && "userId" === r && t.value.indexOf("@") > -1 && (t.value = t.value.substring(0, t.value.indexOf("@"))), te(e), $(e) || "true" === t.getAttribute("aria-required") && "blur" === e.type && K(t) || "password" === n && z() || (J(e), 1 !== D[r] && ("blur" !== e.type || k[r] || (b && b.dispatchEvent && b.dispatchEvent(new Event("hide")), G(r))))
                        },
                        ae = function(e) {
                            e.addEventListener("blur", re, !0), e.addEventListener("filledDomain", function(e) {
                                var t = e.target;
                                delete k[t.name], t.dispatchEvent(new Event("blur"))
                            }, !0), p && g && p.addEventListener("click", function() {
                                g.value.indexOf("@") > -1 && (g.value = g.value.substring(0, g.value.indexOf("@"))), "" !== g.value && g.dispatchEvent && g.dispatchEvent(new Event("blur"))
                            }, !0), r.addEvent(e, "change", function(e) {
                                if ("yidDomain" === e.target.name) {
                                    var t = document.getElementById("usernamereg-yid") || document.getElementById("usernamereg-userId");
                                    return void(K(t) || (b && b.dispatchEvent && b.dispatchEvent(new Event("hide")), G(t.name)))
                                }
                                re(e)
                            }), r.addEvent(e, "keyup", function(e) {
                                re(e)
                            })
                        },
                        oe = function(e) {
                            return e.target === C && o.containsClass(B, "hide") ? o.removeClass(B, "hide") : o.addClass(B, "hide")
                        };
                    N && (! function() {
                        var a = document.getElementsByClassName("phone-country-code")[0],
                            d = document.getElementById("contact-countrycode-dropdown"),
                            l = document.getElementById("account-attributes-challenge"),
                            c = document.querySelector("input[name=checkFidoCapability]");
                        if (i(), l && (r.addEvent(l, "mousedown", function(e) {
                                var t, n = e.target.tagName.toUpperCase(),
                                    r = e.target;
                                "A" === n && (e.preventDefault(), e.stopPropagation(), e.cancelBubble = !0), I && I.contains && I.contains(r) && ("UL" === n && (r = null), "LI" !== n && (r = r.parentElement), r && (t = r.getAttribute("value"), document.getElementById("yid-domain-selector").value = t, u.rapidBeaconClick("click", u.parseDataYlk("sec:reg;elm:btn;elmt:domain-popup;slk:" + t))), o.addClass(I, "hide"))
                            }), ae(l)), e = document.getElementById("usernamereg-password"), t = document.getElementById("usernamereg-show-button"), n = document.getElementById("reg-password-toggle-button"), t && r.addEvent(t, "mousedown", V), n && r.addEvent(n, "click", Q), a && a.querySelector(".country-dropdown-container") && new s(a, {
                                noHide: !0
                            }), d) {
                            var m = d.getElementsByTagName("select")[0],
                                g = {
                                    countryCodesMap: COUNTRY_CODES_MAP,
                                    interactiveFormatting: !0,
                                    showCountryCodeDropDownLength: 1
                                },
                                y = document.getElementById("contact-field-desc-default"),
                                v = document.getElementById("contact-field-desc-mobile"),
                                p = document.getElementById("local-phone-learn-more");
                            document.getElementById("usernamereg-phone") && (g.noHide = !0), new s(d, g), m && y && v && r.addEvent(m, "statechange", function(e) {
                                var t = e.target,
                                    n = !t.disabled,
                                    r = 1 === t.options.length;
                                n || r ? (o.addClass(y, "hide"), o.removeClass(v, "hide"), p && o.removeClass(p, "hide")) : (o.addClass(v, "hide"), o.removeClass(y, "hide"), p && o.addClass(p, "hide"))
                            })
                        }
                        f && (r.addEvent(e, "blur", function(e) {
                            ee(e)
                        }), r.addEvent(e, "focus", function(e) {
                            ee(e)
                        })), c && u.isWebAuthnSupported() && (c.value = "true")
                    }(), A.initialize(document.getElementById("usernamereg-yid") || document.getElementById("usernamereg-userId")), d.initialize(global), g && v && (r.addEvent(g, "keyup", function() {
                        u.handleDomainAutoComplete(g.value, v, y), k[g.name] = !o.containsClass(v, "hide")
                    }), u.addAutoDomainCompleteClickAndEnterEvent(r, v, g, y)), r.addEvent(document.body, "click", function(e) {
                        if (C) return oe(e)
                    })), m && c && l && l(m, c, regdata.emailDomainSuggestions), h && (r.addEvent(h, "click", function() {
                        u.rapidBeaconClick("click", u.parseDataYlk("sec:reg;elm:select;elmt:yid-domain;slk:yid-domain-show"))
                    }), r.addEvent(h, "change", function(e) {
                        var t = e.target.value;
                        u.rapidBeaconClick("change", u.parseDataYlk("sec:reg;elm:select;elmt:yid-domain;slk:" + t))
                    }))
                }, window.jsModules.account_attributes_challenge_main();
            }).call(this)
        }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

    }, {
        "../../../../public/js/ajax.js": 59,
        "../../../../public/js/common.js": 63,
        "../../../../public/js/disable-double-submit.js": 64,
        "../../../../public/js/dom.js": 65,
        "../../../../public/js/email-suggestions.js": 66,
        "../../../../public/js/inline-country-dropdown.js": 70,
        "../../../../public/js/social-login.js": 76,
        "../../../../public/js/utils.js": 77,
        "./suggestions.js": 3
    }],
    3: [function(require, module, exports) {
        window.jsModules = window.jsModules || {}, window.jsModules.account_attributes_challenge_suggestions = function() {
            "use strict";
            var e, t, n, o, a, r, s, i, d, u, l = [],
                g = require("../../../../public/js/common.js"),
                c = require("../../../../public/js/ajax.js"),
                m = require("../../../../public/js/dom.js"),
                f = require("../../../../public/js/utils.js"),
                v = document.getElementById("regform"),
                p = {},
                y = 0,
                E = 0,
                b = -1,
                h = {
                    9: 1,
                    16: 1,
                    17: 1,
                    18: 1,
                    20: 1,
                    27: 1,
                    37: 1,
                    38: 1,
                    39: 1,
                    40: 1,
                    91: 1
                },
                I = function() {
                    var e = [].concat([].slice.call(document.querySelectorAll(".yid-field input")), [].slice.call(document.querySelectorAll("input[id=usernamereg-yid]")), [].slice.call(document.querySelectorAll("input[id=usernamereg-userId]"))),
                        t = [].concat([].slice.call(document.querySelectorAll(".yid-field ~ .oneid-error-message")), [].slice.call(document.querySelectorAll("div[id=reg-error-yid]")), [].slice.call(document.querySelectorAll("div[id=reg-error-userId]")));
                    e.forEach(function(e) {
                        e.setAttribute("aria-invalid", !1), m.removeClass(e, "oneid-error-border"), m.addClass(e, "verified")
                    }), t.forEach(function(e) {
                        "true" !== e.getAttribute("data-dnr") && (m.removeClass(e, "oneid-error-message"), e.innerHTML = "", e.setAttribute("data-error", ""))
                    })
                },
                k = function(e, t) {
                    e.preventDefault(), e.stopPropagation(), E = "previous" === t ? E - 1 : E + 1, E > y && (E = 0), E < 0 && (E = y);
                    var n = E * u.offsetWidth * -1;
                    o.style.left = n + "px", I()
                },
                C = function(t) {
                    t.preventDefault(), t.stopPropagation(), m.removeClass(n, "show"), e.value = u.getElementsByTagName("li")[E].textContent, I()
                },
                B = function(e) {
                    var t, n = e.split("@"),
                        o = document.getElementById("yid-domain-selector");
                    e = n.shift(), t = n.shift(), s.value = e, t && o && (o.value = t), f.rapidBeaconClick("click", f.parseDataYlk("sec:reg;subsec:suggestion:elm:btn;elmt:suggestion-selected;slk:" + (t || "default")))
                },
                w = function(e) {
                    e.preventDefault(), e.stopPropagation(), e.target && "LI" === e.target.nodeName && (m.removeClass(n, "show"), B(e.target.getAttribute("data-value")), I())
                },
                A = function(e) {
                    var t = document.getElementById("yidreg-next-suggestion"),
                        o = document.getElementById("yidreg-prev-suggestion"),
                        a = document.getElementById("yid-domain-suggestion-toggle"),
                        r = document.getElementById("suggestion-close"),
                        s = "freeformGender" === e ? document.getElementById("reg-gender-list") : document.getElementById("desktop-suggestion-list");
                    if (u = document.getElementById("yidreg-mobile-suggestions"), s) return g.addEvent(s, "mousedown", w), a && g.addEvent(a, "click", function(e) {
                        e.preventDefault(), m.removeClass(n, "show"), setTimeout(function() {
                            var e = a.querySelector("strong").innerHTML.toLowerCase().replace("@", "");
                            f.rapidBeaconClick("click", f.parseDataYlk("sec:reg;subsec:suggestion:elm:btn;elmt:suggestion-toggle;slk:" + e)), N({
                                domain: e
                            })
                        }, 400)
                    }), void(r && g.addEvent(r, "click", function(e) {
                        e.preventDefault(), m.removeClass(n, "show")
                    }));
                    t && g.addEvent(t, "mousedown", function(e) {
                        k(e, "next")
                    }), o && g.addEvent(o, "mousedown", function(e) {
                        k(e, "previous")
                    }), u && g.addEvent(u, "mousedown", C)
                },
                S = function() {
                    m.addClass(n, "loaded"), m.addClass(n, "show")
                },
                x = {
                    "yahoo.com": "@yahoo.com",
                    "myyahoo.com": "@myyahoo.com"
                },
                D = function(e) {
                    return x[e] || e
                },
                q = function(t) {
                    var a, r, s, i, d, u, g, c = t.length,
                        v = document.getElementById("yid-domain-suggestion-toggle"),
                        p = document.getElementById("yid-domain-suggestion-more-details-tpl"),
                        y = document.getElementById("reg-error-yid") || document.getElementById("reg-error-userId"),
                        E = [];
                    c > 0 ? S() : f.rapidBeaconClick("click", f.parseDataYlk("sec:reg;subsec:suggestion:elm:btn;elmt:suggestion-show;slk:nosuggestion")), (o = document.getElementById("mobile-suggestion-list") || document.getElementById("desktop-suggestion-list")) && (y && (a = o.getAttribute("data-msg-domain-default") || "", r = o.getAttribute("data-msg-domain-alt") || "", s = o.getAttribute("data-msg-domain-alt-m") || "", i = o.getAttribute("data-msg-domain-toggle") || ""), u = t.some(function(t) {
                        return -1 !== t.indexOf(e.value + "@")
                    }), t.forEach(function(e, t) {
                        var o = e.split("@"),
                            i = o.shift();
                        g = o.shift() || l[0], regdata.enabledSuggestionOnError && 0 === t && (E.push('<div class="suggestion-newdomain-title">'), a.indexOf("{domainName}") > -1 ? (g !== l[0] && (a = u ? s : r), E.push(a.replace("{domainName}", D(g))), p && g !== l[0] && E.push(p.innerHTML.replace("{defaultDomainName}", D(l[0])).replace(/{domainName}/g, D(g)))) : E.push(a.replace("{atDomainName}", "<strong>@" + g + "</strong>")), E.push("</div>")), E.push('<li tabindex="0" data-value="' + e + '">' + (m.containsClass(n, "list") ? e : i) + "</li>")
                    }), o.innerHTML = E.join(""), c && v && (d = l[l.indexOf(g) + 1] || l[0], v.innerHTML = i.replace("{domainName}", D(d))), f.rapidBeaconClick("click", f.parseDataYlk("sec:reg;subsec:suggestion:elm:btn;elmt:suggestion-show;slk:" + g)))
                },
                N = function(t) {
                    var n, s, i;
                    if (t = t || {}, a.value || r.value || e.value) {
                        if (n = e.value, n.indexOf("@") > -1 && (n = n.substring(0, n.indexOf("@"))), s = "crumb=" + encodeURIComponent(document.querySelectorAll('input[name="crumb"]')[0].value) + "&acrumb=" + encodeURIComponent(document.querySelectorAll('input[name="acrumb"]')[0].value) + "&firstName=" + encodeURIComponent(a.value) + "&lastName=" + encodeURIComponent(r.value) + "&yid=" + encodeURIComponent(n), v.sessionIndex && v.sessionIndex.value && (s += "&sessionIndex=" + encodeURIComponent(v.sessionIndex.value)), v.yidDomain && v.yidDomain.value && (s += "&domain=" + encodeURIComponent(t.domain || l.indexOf(regdata.defaultSuggestedDomain) > -1 && regdata.defaultSuggestedDomain || v.yidDomain.value)), i = new c, b = -1, s === d && o && "" !== o.innerHTML.trim()) return S(), void f.rapidBeaconClick("click", f.parseDataYlk("sec:reg;subsec:suggestion:elm:btn;elmt:suggestion-show;slk:cached"));
                        d = s, i.send("GET", "/account/module/create/suggestions?" + s, function(e, t) {
                            var n = JSON.parse(t.responseText).suggestionList;
                            n && (y = n.length - 1, q(n))
                        })
                    }
                },
                j = function(t) {
                    if (t.preventDefault(), t.stopPropagation(), t.target && "freeformGender" === t.target.name) S();
                    else {
                        if (i && i.checked) return;
                        if (l.length && e.value.indexOf("@") > -1 && !l.some(function(t) {
                                return e.value.indexOf("@" + t) > -1
                            })) return;
                        N()
                    }
                },
                O = function() {
                    n && o && m.removeClass(n, "show")
                },
                T = function(e) {
                    var t = "freeformGender" === e.target.name ? document.getElementById("gender-container") : document.getElementById("desktop-suggestions-container");
                    n && o && ("keyup" === e.type && t && 1 !== h[e.keyCode] && m.removeClass(n, "show"), "blur" !== e.type || regdata.enabledSuggestionOnError || m.removeClass(n, "show"))
                },
                L = function(e, t, n, o) {
                    var a = "up" === o ? e[t + 1] : e[t - 1];
                    m.addClass(e[t], "hovered"), t !== n && m.removeClass(a, "hovered")
                },
                M = function(e) {
                    e.stopPropagation();
                    var t = n.getElementsByTagName("li"),
                        o = t.length - 1;
                    switch (e.keyCode) {
                        case 40:
                            if ((b += 1) > o) {
                                b = o;
                                break
                            }
                            L(t, b, 0, "down");
                            break;
                        case 38:
                            if ((b -= 1) < 0) {
                                b = 0;
                                break
                            }
                            L(t, b, o, "up");
                            break;
                        case 13:
                            -1 !== b && (e.preventDefault(), B(t[b].getAttribute("data-value")), b = -1, I(), m.removeClass(n, "show"))
                    }
                },
                H = function(e) {
                    "LI" !== e.target.tagName || 13 !== e.keyCode && 32 !== e.keyCode || (e.preventDefault(), e.stopPropagation(), B(e.target.getAttribute("data-value")), I(), m.removeClass(n, "show"))
                },
                G = function(a, r) {
                    var i, d;
                    if (a.target && "freeformGender" === a.target.name) n = document.getElementById("gender-container"), o = document.getElementById("reg-gender-list"), s = t, p.genderField || (p.genderField = !0, g.addEvent(t, "keydown", M));
                    else {
                        if (i = document.getElementById("yid-error-with-suggestion"), i && (d = "true" === i.getAttribute("data-error-state"), r = !!r, o && r !== d && (o.innerHTML = ""), i.setAttribute("data-error-state", r)), regdata.enabledSuggestionOnError && !r) return;
                        s = e, n = document.getElementById("mobile-suggestions-container"), n || (n = document.getElementById("desktop-suggestions-container"), e && n && !p.yidField && (p.yidField = !0, g.addEvent(e, "keydown", M), regdata.enabledSuggestionOnError && !p.suggestionsContainer && (p.suggestionsContainer = !0, g.addEvent(n, "keydown", H))))
                    }
                    j(a)
                },
                R = function(n) {
                    var o;
                    if (e = n || document.getElementById("usernamereg-yid"), t = document.getElementById("usernamereg-freeformGender"), a = document.getElementById("usernamereg-firstName"), r = document.getElementById("usernamereg-lastName"), e) {
                        var s = document.querySelector(".yid-domain");
                        s && (o = document.querySelectorAll(".yid-domain option"), o.length ? o.forEach(function(e) {
                            l.push(e.getAttribute("value"))
                        }) : l.push(s.innerHTML.replace("@", ""))), i = document.getElementById("userid-domain-others"), regdata.enabledSuggestionOnError || g.addEvent(e, "focus", G), A("yid")
                    }
                    t && (A("freeformGender"), g.addEvent(t, "focus", G))
                };
            module.exports = {
                initialize: R,
                suggestionsBlurHandler: T,
                setupSuggestionsContainer: G,
                hideSuggestions: O
            }
        }, window.jsModules.account_attributes_challenge_suggestions();
    }, {
        "../../../../public/js/ajax.js": 59,
        "../../../../public/js/common.js": 63,
        "../../../../public/js/dom.js": 65,
        "../../../../public/js/utils.js": 77
    }],
    4: [function(require, module, exports) {
        window.jsModules = window.jsModules || {}, window.jsModules.account_selector_challenge_main = function() {
            "use strict";
            var e = document.getElementById("account-selector-challenge");
            if (e) {
                var t = require("../../../../public/js/disable-double-submit.js").initDisableDoubleSubmit,
                    n = require("../../../../public/js/common.js"),
                    o = require("../../../../public/js/dom.js"),
                    c = document.getElementById("vz-account-selector-challenge-pbar"),
                    l = document.getElementById("disavow-account-img"),
                    d = document.getElementById("disavow-account-yid"),
                    u = document.getElementById("account-disavow-modal"),
                    a = document.querySelectorAll("#account-selector-challenge .card-menu-button"),
                    i = document.querySelector('.account-disavow button[name="disavow"]'),
                    s = document.getElementById("disavow-cancel");
                t();
                var r = function(e) {
                        var t = e.split("|"),
                            n = t[0],
                            o = t[4] || "";
                        l.src = o, d.innerHTML = n, i.value = t.slice(0, -1).join("|")
                    },
                    m = function(e) {
                        e.preventDefault(), o.addClass(u, "show"), r(e.target.value)
                    },
                    v = function(e) {
                        e.preventDefault(), o.removeClass(u, "show")
                    };
                if (a && u) {
                    for (var w = 0; w < a.length; w += 1) a[w].addEventListener("click", m);
                    s.addEventListener("click", v)
                }
                c && n.addEvent(document, "DOMContentLoaded", function() {
                    document.getElementById("vz-pbar").setAttribute("style", "width: 100%"), setTimeout(function() {
                        o.addClass(c, "hide"), o.removeClass(e, "hide")
                    }, 1100)
                })
            }
        }, window.jsModules.account_selector_challenge_main();
    }, {
        "../../../../public/js/common.js": 63,
        "../../../../public/js/disable-double-submit.js": 64,
        "../../../../public/js/dom.js": 65
    }],
    5: [function(require, module, exports) {
        window.jsModules = window.jsModules || {}, window.jsModules.account_switcher_main = function() {
            "use strict";
            document.getElementById("account-switcher") && window.addEventListener("load", function() {
                try {
                    var e = document.getElementById("browser-fp-data"),
                        t = e.value,
                        o = JSON.parse(t),
                        n = {
                            resolution: o.resolution,
                            ts: o.ts
                        };
                    document.getElementById("account-switcher-form").querySelectorAll(".loggedOut a").forEach(function(e) {
                        e.href += "&bfp=" + encodeURIComponent(JSON.stringify(n))
                    })
                } catch (e) {}
            })
        }, window.jsModules.account_switcher_main();
    }, {}],
    6: [function(require, module, exports) {
        window.jsModules = window.jsModules || {}, window.jsModules.app_auth_qr_code_challenge_main = function() {
            function e(e, n) {
                var o;
                if (200 === n.statusCode && n.responseText) try {
                    if (o = JSON.parse(n.responseText), o.location) return void(window.location.href = o.location)
                } catch (e) {}
            }
            var n = require("../../../../public/js/poll.js"),
                o = YUI_config.global.appAuthQrCodeChallengeConfig,
                t = require("../../../../public/js/common");
            o && function() {
                var a = o.validatePath,
                    i = new n;
                i.setTimeout(o.timeout), o.interval = function(e) {
                    return e < o.maxElapsedTime ? o.minInterval : o.defaultInterval
                }, i.start("POST", a, o, e);
                var l = document.getElementById("skipQRCode");
                l && t.addEvent(l, "click", function() {
                    i.stop()
                })
            }()
        }, window.jsModules.app_auth_qr_code_challenge_main();
    }, {
        "../../../../public/js/common": 63,
        "../../../../public/js/poll.js": 75
    }],
    7: [function(require, module, exports) {
        window.jsModules = window.jsModules || {}, window.jsModules.arkose_challenge_main = function() {
            "use strict";
            var e = require("../../../../public/js/common.js"),
                o = document.getElementById("arkose-main-form"),
                a = !!window.postMessage;
            o && e.addEvent(document, "DOMContentLoaded", function() {
                var s = document.createElement("iframe");
                s.id = "arkose-iframe", s.className = "arkose-iframe", s.scrolling = "no", s.src = YUI_config.global.arkoseRedirectUrl, s.sandbox = "allow-forms allow-scripts allow-same-origin", a || s.sandbox.add("allow-top-navigation-by-user-activation"), o.parentNode.append(s), a && e.addEvent(window, "message", function(e) {
                    var a = document.getElementById("arkose-session-token"),
                        n = document.getElementById("arkose-success");
                    0 !== YUI_config.global.arkoseRedirectHost.indexOf(e.origin) || !e.data || e.data.indexOf("arkose") < 0 || (a.value = e.data, s.style.display = "none", n.style.display = "block", o.style.display = "block")
                })
            })
        }, window.jsModules.arkose_challenge_main();
    }, {
        "../../../../public/js/common.js": 63
    }],
    8: [function(require, module, exports) {
        window.jsModules = window.jsModules || {}, window.jsModules.authorize_main = function() {
            "use strict";
            var s = require("./yak-getCode.js"),
                u = require("./yak-session-list.js"),
                e = require("./yak-session-feedback.js");
            s.shouldRun() && s.run(), u.shouldRun() && u.run(), e.shouldRun() && e.run()
        }, window.jsModules.authorize_main();
    }, {
        "./yak-getCode.js": 10,
        "./yak-session-feedback.js": 11,
        "./yak-session-list.js": 12
    }],
    9: [function(require, module, exports) {
        window.jsModules = window.jsModules || {}, window.jsModules.authorize_yak_common = function() {
            "use strict";

            function o(o, e, n, i) {
                var t = window.location.href;
                t = t.replace(d, n), t += "&token=" + encodeURIComponent(o), t += "&back=" + encodeURIComponent(e), i && (t += "&sid=" + encodeURIComponent(i)), -1 === t.indexOf("&crumb=") && (t += "&crumb=" + encodeURIComponent(u && u.crumb)), window.location.href = t
            }

            function e(e, n, i) {
                o(e, n, "/authorize", i)
            }

            function n(e, n) {
                o(e, n, "/authorize/selection")
            }

            function i(o) {
                return "INVALID_AUTHORIZATION_SESSION" === o.responseText
            }

            function t(o) {
                var e;
                try {
                    e = JSON.parse(o.responseText)
                } catch (o) {}
                return e
            }

            function r(o, e, n, r, a) {
                var s, u = new c,
                    d = o.name,
                    l = o.value;
                s = {
                    m: "authorize",
                    action: d,
                    sid: l
                }, u.setTimeout(1e4), u.send("POST", e, {
                    body: u.buildPostData(s)
                }, function(e, s) {
                    var c;
                    return u.isNetworkError(s) ? void n(a.networkOffline) : i(s) ? void n(a.invalidSession) : u.isServerError(s) ? void n(a.genericError) : (c = t(s)) && c.authorizationToken && ("getCode" === c.action || "getSelection" === c.action) ? void r(o, c.authorizationToken, c.action) : void r(o)
                })
            }

            function a(o, e) {
                o && (e ? s.replaceClass(o, "hide", "show") : s.replaceClass(o, "show", "hide"))
            }
            var s = require("../../../../public/js/dom.js"),
                c = require("../../../../public/js/ajax.js"),
                u = YUI_config.global.authorizeSessionAjaxConfig,
                d = /\/authorize[^?]*/;
            module.exports = {
                toggleElementDisplay: a,
                loadYAKHomeWithToken: e,
                loadSelectionPage: n,
                approveOrDenySession: r
            }
        }, window.jsModules.authorize_yak_common();
    }, {
        "../../../../public/js/ajax.js": 59,
        "../../../../public/js/dom.js": 65
    }],
    10: [function(require, module, exports) {
        window.jsModules = window.jsModules || {}, window.jsModules.authorize_yak_getcode = function() {
            "use strict";

            function e(e) {
                return e > 9 ? e : "0" + e
            }

            function t(t) {
                var n = new Date(t);
                return t < 6e4 ? n.getSeconds() : n.getMinutes() + ":" + e(n.getSeconds())
            }

            function n() {
                if (d) d.click();
                else {
                    var e = document.getElementById("yak-doneURL").value;
                    window.location.href = e
                }
            }

            function o() {
                var e = Date.now(),
                    i = u - e;
                if (i > 999) return r.innerHTML = t(i), void setTimeout(o, 1e3);
                n()
            }

            function i() {
                var e = (new Date).getTime(),
                    t = new s;
                t.setTimeout(5e3), t.setOntimeout(o), t.send("GET", "/account/utc-time", function(t, n) {
                    var i, a, r, d;
                    if (t) return void o();
                    200 === n.statusCode && (i = Date.parse(n.responseText), a = (new Date).getTime(), r = a - e, d = a - i - r / 2, u += d), o()
                })
            }
            var u, a, r, d, s = require("../../../../public/js/ajax.js"),
                c = require("../../../../public/js/comet.js"),
                m = YUI_config.global.yakCodeConfig;
            module.exports = {
                shouldRun: function() {
                    return !!(a = document.getElementById("expiring-notice"))
                },
                run: function() {
                    r = a.getElementsByTagName("span")[0], u = parseInt(a.getAttribute("expiryTime"), 10), d = document.getElementById("yak-code-back-button"), m && m.cometChannel && c.browserSupportComet() && document.addEventListener("DOMContentLoaded", function() {
                        c.startComet(m.cometChannel, function(e) {
                            "validatedCode" === e && n()
                        })
                    }), isNaN(u) || i()
                }
            }
        }, window.jsModules.authorize_yak_getcode();
    }, {
        "../../../../public/js/ajax.js": 59,
        "../../../../public/js/comet.js": 62
    }],
    11: [function(require, module, exports) {
        window.jsModules = window.jsModules || {}, window.jsModules.authorize_yak_session_feedback = function() {
            "use strict";
            var e = document.getElementById("on-session-feedback"),
                o = require("../../../../public/js/dom.js");
            module.exports = {
                shouldRun: function() {
                    return !!e
                },
                run: function() {
                    setTimeout(function() {
                        var e = o.getFirstElementValueByName("done");
                        window.location.href = e
                    }, 5e3)
                }
            }
        }, window.jsModules.authorize_yak_session_feedback();
    }, {
        "../../../../public/js/dom.js": 65
    }],
    12: [function(require, module, exports) {
        window.jsModules = window.jsModules || {}, window.jsModules.authorize_yak_session_list = function() {
            "use strict";

            function e(e) {
                u.getElementsByClassName("session-error")[0].innerHTML = e, d.replaceClass(u, "default", "authorization-error")
            }

            function n() {
                window.location.href = "https://mobileexchange.yahoo.com/dismiss"
            }

            function t() {
                0 === document.getElementsByClassName("session-info").length && n()
            }

            function s(e) {
                for (var n = e; n.parentNode && (n = n.parentNode, !d.containsClass(n, "session-info")););
                d.containsClass(n, "session-info") && setTimeout(function() {
                    d.addClass(n, "animation"), setTimeout(function() {
                        n.parentNode.removeChild(n), t()
                    }, 450)
                }, 2e3)
            }

            function o(e) {
                d.replaceClass(u, "default", "authorize" === e.name ? "approved" : "denied"), s(e)
            }

            function i(e, n, t) {
                n ? "getSelection" === t ? c.loadSelectionPage(n, "sessionList") : c.loadYAKHomeWithToken(n, r ? "." : "sessionList", e.value) : o(e)
            }

            function a(n) {
                var t = n.target;
                if (n.stopPropagation(), n.preventDefault(), "submit" === t.getAttribute("type")) {
                    if (u = document.getElementById("session-info-" + t.value), "authorize" === t.name) {
                        var s = document.getElementById("session-list-deny-btn-" + t.value);
                        d.replaceClass(t, "approve-button", "approve-spinner-button"), d.addClass(s, "opaque"), s.disabled = !0
                    } else {
                        var o = document.getElementById("session-list-approve-btn-" + t.value);
                        d.replaceClass(t, "deny-button", "deny-spinner-button"), d.addClass(o, "opaque"), o.disabled = !0
                    }
                    c.approveOrDenySession(t, m.url, e, i, m.i18n)
                }
            }
            var l, r, u, d = require("../../../../public/js/dom.js"),
                c = require("./yak-common.js"),
                m = YUI_config.global.authorizeSessionAjaxConfig;
            module.exports = {
                shouldRun: function() {
                    return !!(l = document.getElementById("sessions-list-holder"))
                },
                run: function() {
                    var e, n = document.getElementsByClassName("request-created-time");
                    for (e = 0; e < n.length; e += 1) {
                        var t, s = n[e],
                            o = new Date(s.getAttribute("data-time"));
                        o = o.toString(), t = o.indexOf(" "), s.innerHTML = o.substr(t, o.lastIndexOf(":") - t)
                    }
                    l.addEventListener("click", a), r = document.getElementById("yak-home-page")
                }
            }
        }, window.jsModules.authorize_yak_session_list();
    }, {
        "../../../../public/js/dom.js": 65,
        "./yak-common.js": 9
    }],
    13: [function(require, module, exports) {
        window.jsModules = window.jsModules || {}, window.jsModules.body_container_main = function() {
            "use strict";
            document.querySelector(".member-center") && (document.documentElement.classList.add("light-theme"), document.documentElement.classList.remove("dark-theme"))
        }, window.jsModules.body_container_main();
    }, {}],
    14: [function(require, module, exports) {
        window.jsModules = window.jsModules || {}, window.jsModules.challenge_selector_challenge_main = function() {
            "use strict";
            var e = require("../../../../public/js/disable-double-submit.js").initDisableDoubleSubmit;
            document.getElementById("challenge-selector-challenge") && e()
        }, window.jsModules.challenge_selector_challenge_main();
    }, {
        "../../../../public/js/disable-double-submit.js": 64
    }],
    15: [function(require, module, exports) {
        (function(global) {
            (function() {
                window.jsModules = window.jsModules || {}, window.jsModules.challenge_device_capability = function() {
                    var e = document.getElementById("deviceCapability");
                    if (e) {
                        var i = require("../../../../public/js/poll.js"),
                            t = require("../../../../public/js/utils.js"),
                            a = function(i) {
                                var t = {
                                    pa: {
                                        status: i
                                    }
                                };
                                e.value = JSON.stringify(t)
                            };
                        return global.challenge.isAndroidWebview ? function() {
                            var t = global.challenge.getCapabilityPollingParams,
                                a = new i,
                                l = function(i, t) {
                                    var a = {};
                                    if (!i) {
                                        try {
                                            a = JSON.parse(t.responseText)
                                        } catch (i) {}
                                        "success" === a.status && (e.value = JSON.stringify(a.capabilities))
                                    }
                                };
                            a.setTimeout(t.timeout), a.start("GET", "/phoenix/v1/getDeviceCapability", t, l)
                        }() : t.isPlatformAuthenticatorSupported(a)
                    }
                }, window.jsModules.challenge_device_capability();
            }).call(this)
        }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

    }, {
        "../../../../public/js/poll.js": 75,
        "../../../../public/js/utils.js": 77
    }],
    16: [function(require, module, exports) {
        window.jsModules = window.jsModules || {}, window.jsModules.change_password_change_password = function() {
            var e, s = require("../../../../public/js/common.js"),
                t = require("../../../../public/js/dom.js"),
                d = require("../../../../public/js/utils.js"),
                a = document.getElementById("change-password"),
                n = document.getElementById("ch-pwd-submit-btn"),
                o = document.getElementById("password-toggle-button"),
                r = document.getElementById("cpwd-password"),
                c = document.getElementById("password-container"),
                l = document.getElementById("password-label"),
                u = document.getElementById("caps-indicator");
            if (a) {
                var i = function(e) {
                        e ? t.removeClass(u, "hide") : t.addClass(u, "hide")
                    },
                    p = function(e) {
                        "blur" === e.type ? t.replaceClass(c, "focussed", "blurred") : t.replaceClass(c, "blurred", "focussed")
                    },
                    w = function(e) {
                        e > 0 ? (t.removeClass(l, "hide"), t.removeClass(c, "error")) : t.replaceClass(c, "focussed", "blurred")
                    };
                s.addEvent(n.form, "submit", function(s) {
                    e && s.preventDefault(), e = !0
                }), s.addEvent(n.form, "keydown", function(e) {
                    d.capsLockHandler(e, i)
                }), s.addEvent(n.form, "keyup", function(e) {
                    "cpwd-password" === e.target.id && w(e.target.value.length), d.capsLockHandler(e, i)
                }), s.addEvent(r, "blur", function(e) {
                    p(e)
                }), s.addEvent(r, "focus", function(e) {
                    p(e)
                }), s.addEvent(o, "click", function(e) {
                    t.containsClass(e.target, "hide-pw") ? (t.replaceClass(e.target, "hide-pw", "show-pw"), e.target.title = cpwdData.messages.TOOLTIP_HIDE_PASSWORD, r.type = "text", r.focus()) : (t.replaceClass(e.target, "show-pw", "hide-pw"), e.target.title = cpwdData.messages.TOOLTIP_SHOW_PASSWORD, r.type = "password", r.focus())
                })
            }
        }, window.jsModules.change_password_change_password();
    }, {
        "../../../../public/js/common.js": 63,
        "../../../../public/js/dom.js": 65,
        "../../../../public/js/utils.js": 77
    }],
    17: [function(require, module, exports) {
        window.jsModules = window.jsModules || {}, window.jsModules.change_password_main = function() {
            "use strict";

            function e(e, r, t, s, a) {
                var o = document.getElementById(e);
                if (o) {
                    if (v.addClass(o, "hide"), o.setAttribute("data-error", r), !s) return o.className = "error-msg", o.setAttribute("role", "alert"), void(o.innerHTML = t);
                    o.className = "error-msg error-message-" + s, o.setAttribute("role", "alert"), o.innerHTML = a, E.className = "error-msg error-msg-helper", E.setAttribute("data-error", r), E.innerHTML = "- " + t
                }
                h && v.removeClass(h, "hide")
            }

            function r(r, s, a, o) {
                var n = document.querySelector("#password-container"),
                    d = "",
                    i = "";
                n && (n.setAttribute("aria-invalid", "true"), t(n), a >= 0 ? (a < 2 ? (d = "weak-level", i = o[0]) : 2 === a || 3 === a ? (d = "moderate-level", i = o[1]) : 4 === a && (d = "strong-level", i = o[2]), v.addClass(n, "error"), v.addClass(n, "error-" + d), e("cpwd-error-password-level", r, s, d, i)) : (v.addClass(n, "error-border"), e("cpwd-error-password-level", r, s)))
            }

            function t(e) {
                e && v.removeClasses(e, ["error-border", "blurred", "error-weak-level", "error-moderate-level", "error-strong-level"])
            }

            function s() {
                var e, r = document.querySelector("#password-container");
                r && (e = h, v.removeClass(r, "error-border"), r.setAttribute("aria-invalid", "false")), e && (v.removeClasses(y, ["error-message-weak-level", "error-message-moderate-level", "error-message-strong-level"]), y.innerHTML = "", y.removeAttribute("role"), y.setAttribute("data-error", ""), T.innerHTML = "", T.setAttribute("data-error", ""), v.addClass(e, "hide"))
            }
            if (document.getElementById("change-password")) {
                var a, o, n, d, i, l, u, c, m, p, g = require("../../../../public/js/common.js"),
                    v = require("../../../../public/js/dom.js"),
                    w = require("../../../../public/js/utils.js"),
                    b = require("../../../../public/js/ajax.js"),
                    f = require("../../../../public/js/disable-double-submit.js").initDisableDoubleSubmit,
                    E = document.getElementById("cpwd-error-password-msg"),
                    h = document.getElementById("cpwd-error-container"),
                    y = document.getElementById("cpwd-error-password-level"),
                    T = document.getElementById("cpwd-error-password-msg"),
                    D = cpwdData.passwordConstraints,
                    S = {},
                    I = function(e) {
                        var r, t, s, a, o = e.value || "";
                        if (D)
                            for (t in D)
                                for (r = D[t].length, s = 0; s < r; s += 1)
                                    if (a = t + s, S[a] = S[a] || new RegExp(D[t][s]), o.match(S[a])) return t
                    },
                    j = function(e) {
                        return e && 0 === e.value.length
                    },
                    _ = function(e, r) {
                        "function" == typeof e && (r = e, e = !1);
                        var t = new b;
                        if ("" === e || !e) return void r({
                            score: -1
                        });
                        t.send("POST", "/account/module/change-password/checkpassword", {
                            body: "password=" + encodeURIComponent(e)
                        }, function(e, t) {
                            var s;
                            try {
                                s = JSON.parse(t.responseText)
                            } catch (e) {}
                            r(s)
                        })
                    },
                    A = function() {
                        m && (clearTimeout(m), m = null), p && (clearTimeout(p), p = null)
                    },
                    C = function(e) {
                        var n, i = e.target,
                            g = "change" === e.type,
                            v = o.value,
                            b = v.length,
                            f = function(e) {
                                var t = e.score,
                                    s = e.error || "",
                                    o = s ? cpwdData.messages[s] : "";
                                m = null, r(s, o, t, d), a.disabled = t <= 1
                            };
                        if ("" === i.value) return t(document.querySelector("#password-container")), s();
                        if (!w.skipValidate(e)) {
                            if (i && D) return (n = I(i)) ? (a.disabled = !0, void r(n, cpwdData.messages[n], 0, d)) : (A(), b < c ? (a.disabled = !0, void(p = setTimeout(function() {
                                p = null, r(n, cpwdData.messages[n], 0, d)
                            }, l))) : void(m = setTimeout(function() {
                                _(v, f)
                            }, u)));
                            g && (A(), _(v, f)), s()
                        }
                    },
                    M = function(e) {
                        e.preventDefault(), e.stopPropagation();
                        var t, s = o.value,
                            a = !1;
                        j(o) && (r("ERR_MISSING_FIELD", cpwdData.messages.ERR_MISSING_FIELD), a = !0), a || (A(), _(s, function(e) {
                            var s = document.getElementById("ch-pwd-submit-btn");
                            if (t = I(o)) return void r(t, cpwdData.messages[t], 0, d);
                            if (e && e.score <= 1) {
                                s.disabled = !1;
                                var a = e.score,
                                    i = e.error || "";
                                return void r(i, i ? cpwdData.messages[i] : "", a, d)
                            }
                            s.disabled = !0, g.removeEvent(n, "change", C), g.removeEvent(n, "keyup", C), g.removeEvent(n, "submit", M), n.submit()
                        }))
                    };
                o = document.getElementById("cpwd-password"), n = document.getElementById("change-password-form"), a = n.getElementsByClassName("cpwd-submit-button")[0], d = [cpwdData.messages.TXT_PASSWORD_WEAK, cpwdData.messages.TXT_PASSWORD_MODERATE, cpwdData.messages.TXT_PASSWORD_STRONG], o && (n.addEventListener("change", C, !0), g.addEvent(n, "input", C), g.addEvent(n, "submit", M)), f({
                    disableEnterKey: !0
                }), i = YUI_config.global.dynamicMessagingConfig, l = i.longPause, u = i.shortPause, c = i.numCharactersToShowStrength
            }
        }, window.jsModules.change_password_main();
    }, {
        "../../../../public/js/ajax.js": 59,
        "../../../../public/js/common.js": 63,
        "../../../../public/js/disable-double-submit.js": 64,
        "../../../../public/js/dom.js": 65,
        "../../../../public/js/utils.js": 77
    }],
    18: [function(require, module, exports) {
        window.jsModules = window.jsModules || {}, window.jsModules.comm_channel_main = function() {
            "use strict";
            var e = require("../../../../public/js/common.js"),
                n = require("../../../../public/js/inline-country-dropdown.js"),
                o = require("../../../../public/js/disable-double-submit.js").initDisableDoubleSubmit,
                t = document.querySelector(".comm-channel-container, .comm-channel-verify-code"),
                c = document.querySelector('.comm-channel-add .add-comm-channel-container input[name="emailCommChannel"]'),
                m = document.querySelector('.comm-channel-update .edit-email input[name="updatedCommChannel"]'),
                a = document.querySelector('.comm-channel-refresher .add-email input[name="commChannel"]'),
                d = c || m || a,
                r = document.querySelector(".comm-channel-container.refresher, .comm-channel-add, .comm-channel-update, .comm-channel-refresher"),
                i = document.querySelector(".comm-channel-add-recovery-option-V3.add-recovery-option"),
                u = document.getElementById("customize-data-pref-event"),
                l = require("../../../../public/js/utils.js"),
                s = require("../../../../public/js/email-suggestions.js"),
                h = document.getElementById("email-auto-list");
            if (t) {
                var y, f = document.getElementById("verification-code-field"),
                    p = document.querySelector(".comm-channel-container.cref .comm-channel-form"),
                    b = document.getElementById("verify-code-button"),
                    v = document.querySelector(".comm-channel-container.cref .refresh-cta-container button");
                o();
                var g = function(e) {
                    b = y ? v : b, l.submitFormOnEnter(e, b)
                };
                f && (e.addEvent(f, "keypress", g), commChannelData && l.initializeAutoSubmit(f, document.getElementById("verify-code-button")), l.setResendStatusTimer(commChannelData.MAX_WAIT_TIME)), p && (y = !0, e.addEvent(p, "keypress", g))
            }
            if (r) {
                var E = document.getElementsByClassName("phone-country-code")[0];
                E && new n(E, {
                    noHide: !0
                })
            }
            if (d && h && s && s(d, h, commChannelData.emailDomainSuggestions), u) {
                var j = document.getElementById("customize-data-preferences");
                j && e.addEvent(j, "click", function() {
                    u.value = !0
                })
            }
            if (i) {
                var q = document.querySelector(".pure-form.pure-form-stacked.oneid-form-background");
                q && e.addEvent(q, "change", function() {
                    var e = document.getElementById("phone-radio-button"),
                        n = document.getElementById("email-radio-button");
                    (e.checked || n.checked) && (document.getElementById("submit-commchannel-selection").disabled = !1)
                })
            }
        }, window.jsModules.comm_channel_main();
    }, {
        "../../../../public/js/common.js": 63,
        "../../../../public/js/disable-double-submit.js": 64,
        "../../../../public/js/email-suggestions.js": 66,
        "../../../../public/js/inline-country-dropdown.js": 70,
        "../../../../public/js/utils.js": 77
    }],
    19: [function(require, module, exports) {
        window.jsModules = window.jsModules || {}, window.jsModules.device_identifier_collector_challenge_main = function() {
            "use strict";

            function e(e) {
                var r = 0;
                if (e && "object" == typeof e) {
                    var i = Object.keys(e),
                        n = i && i.length;
                    if (e.error || e.errors) return u.push("error"), void t();
                    for (r = 0; r < n; r += 1) {
                        var s = i[r],
                            c = document.createElement("input");
                        c.setAttribute("type", "hidden"), c.setAttribute("name", "deviceIdentifiers"), c.setAttribute("value", s + ":" + e[s]), o.appendChild(c)
                    }
                    return u.push("passed"), void t()
                }
                u.push("error"), t()
            }

            function t() {
                u.length === i && o.submit()
            }

            function r() {
                u.push("timeout"), t()
            }
            var i, n = document.getElementById("collector-challenge"),
                o = document.getElementById("collector-challenge-form"),
                s = require("../../../../public/js/jsonp.js"),
                u = [],
                c = require("../../../../public/js/ajax.js");
            if (n && o) {
                var d, l, a = deviceIdentifierData && deviceIdentifierData.identifierUrls;
                for (i = a.length, l = 0; l < i; l += 1) {
                    var f = new c;
                    f.setTimeout(5e3), d = d || f.isCORSSupported(), f.setOntimeout = r, d ? (f.sendCredentialsCrossOrigin(), function(r, i) {
                        r.send("GET", i, {
                            userAgent: navigator && navigator.userAgent
                        }, function(r, i) {
                            i && i.responseText ? e(JSON.parse(i.responseText)) : (u.push("error"), t())
                        })
                    }(f, a[l])) : function(r) {
                        try {
                            s(r, {
                                timeout: 5e4
                            }, function(t, r) {
                                e(r)
                            })
                        } catch (e) {
                            u.push("error"), t()
                        }
                    }(a[l])
                }
            }
        }, window.jsModules.device_identifier_collector_challenge_main();
    }, {
        "../../../../public/js/ajax.js": 59,
        "../../../../public/js/jsonp.js": 72
    }],
    20: [function(require, module, exports) {
        window.jsModules = window.jsModules || {}, window.jsModules.email_verification_main = function() {}, window.jsModules.email_verification_main();
    }, {}],
    21: [function(require, module, exports) {
        window.jsModules = window.jsModules || {}, window.jsModules.email_verify_challenge_main = function() {
            "use strict";

            function e(e, i) {
                var t;
                if ((200 === i.statusCode || 206 === i.statusCode) && i.responseText) try {
                    t = JSON.parse(i.responseText), t.location && (window.location.href = t.location)
                } catch (e) {}
            }
            var i = require("../../../../public/js/common.js"),
                t = require("../../../../public/js/dom.js"),
                n = require("../../../../public/js/poll.js"),
                o = require("../../../../public/js/disable-double-submit.js").initDisableDoubleSubmit,
                a = require("../../../../public/js/utils.js"),
                r = YUI_config.global.emailVerifyChallengeConfig,
                s = document.getElementById("email-verify-challenge");
            if (r) {
                var l = r.validatePath,
                    u = new n;
                u.setTimeout(r.timeout), r.interval = function(e) {
                    return e < 6e4 ? 2e3 : 5e3
                }, u.start("POST", l, r, e)
            }
            if (s) {
                var d = document.getElementById("verification-code-field"),
                    c = document.getElementById("verify-code-button"),
                    m = s.getElementsByClassName("error-msg")[0];
                o();
                var f = function(e) {
                        e.setAttribute("aria-invalid", "false"), t.removeClass(e, "error-border"), m && t.addClass(m, "hide")
                    },
                    b = function(e) {
                        var i = e.target;
                        a.submitFormOnEnter(e, document.getElementById("verify-code-button")), "verification-code-field" === i.id && f(i)
                    };
                d && (i.addEvent(s, "keypress", b), a.initializeAutoSubmit(d, c)), "undefined" != typeof emailVerifyData && a.setResendStatusTimer(emailVerifyData.MAX_WAIT_TIME)
            }
        }, window.jsModules.email_verify_challenge_main();
    }, {
        "../../../../public/js/common.js": 63,
        "../../../../public/js/disable-double-submit.js": 64,
        "../../../../public/js/dom.js": 65,
        "../../../../public/js/poll.js": 75,
        "../../../../public/js/utils.js": 77
    }],
    22: [function(require, module, exports) {
        window.jsModules = window.jsModules || {}, window.jsModules.fail_challenge_main = function() {
            "use strict";

            function e(e) {
                return ("0" + e).slice(-2)
            }

            function t() {
                var s;
                if ((n -= 1) > 0) return s = parseInt(n / 60, 10) + ":" + e(parseInt(n % 60)), i.innerHTML = r.replace("{expires}", s), void setTimeout(t, 1e3);
                i.innerHTML = a
            }
            var i = document.getElementById("cc-code-expires");
            if (i) {
                var n = parseInt(i.getAttribute("data-expires"), 10),
                    r = i.getAttribute("data-txt"),
                    a = i.getAttribute("data-txt-expired");
                setTimeout(t, 1e3)
            }
        }, window.jsModules.fail_challenge_main();
    }, {}],
    23: [function(require, module, exports) {
        window.jsModules = window.jsModules || {}, window.jsModules.frontchannel_logout_challenge_main = function() {
            "use strict";
            var n = document.getElementById("frontchannel-logout-challenge");
            if (n) {
                var e, o = n.getElementsByClassName("fc-iframes"),
                    t = document.getElementById("fcl-validate-form"),
                    l = o.length,
                    i = 0,
                    s = function() {
                        (i += 1) === l && t.submit()
                    };
                for (e = 0; e < l; e += 1) o[e].onload = function() {
                    s()
                };
                setTimeout(function() {
                    t.submit()
                }, 15e3)
            }
        }, window.jsModules.frontchannel_logout_challenge_main();
    }, {}],
    24: [function(require, module, exports) {
        window.jsModules = window.jsModules || {}, window.jsModules.image_upload_imagecropper = function() {
            "use strict";
            var t = {},
                e = require("../../../../public/js/common.js"),
                a = function(i) {
                    if (!(this instanceof a)) return new a(i);
                    var o = document.getElementById("imageupload-container");
                    this.imageBoxBackground = document.getElementById(i.imageBoxBackground), this.imageBox = document.getElementById(i.imageBox), this.maskBox = document.getElementById(i.maskBox), this.slider = document.getElementById(i.slider), this.sliderZoomIn = document.getElementById(i.sliderZoomIn), this.sliderZoomOut = document.getElementById(i.sliderZoomOut), e.addEvent(o, "click", function(e) {
                        e.target.id === i.sliderZoomIn ? t.zoomIn() : e.target.id === i.sliderZoomOut ? t.zoomOut() : e.target.id === i.rotateLeft ? t.rotate("left") : e.target.id === i.rotateRight && t.rotate("right")
                    }), e.addEvent(o, "input", function(e) {
                        e.target.id === i.slider && t.zoomInOut()
                    }), e.addEvent(o, e.smartEvent("mousedown"), function(e) {
                        e.target.id !== i.imageBox && e.target.id !== i.maskBox || t.mouseDownOnImage(e)
                    }), e.addEvent(o, e.smartEvent("mousemove"), function(e) {
                        e.target.id !== i.imageBox && e.target.id !== i.maskBox || t.mouseMoveOnImage(e)
                    }), e.addEvent(o, e.smartEvent("mouseup"), function(e) {
                        e.target.id !== i.imageBox && e.target.id !== i.maskBox || t.mouseUpOnImage(e)
                    }), e.addEvent(this.imageBox, e.smartEvent("mouseleave"), function(e) {
                        t.mouseUpOnImage(e)
                    }), e.addEvent(o, e.smartEvent("gesturechange"), function(e) {
                        e.scale < 1 ? t.zoomOut() : e.scale > 1 && t.zoomIn()
                    })
                };
            a.prototype.init = function(e) {
                var a = this;
                this.image = new Image, this.imgType = e.type, this.slider.value = 1, this.defaultScaleRatio = 1, this.currentScaleRatio = 1, this.state = {}, this.image.onload = function() {
                    a.setBackground(!0), t = {
                        zoomIn: a.zoomIn.bind(a),
                        zoomOut: a.zoomOut.bind(a),
                        zoomInOut: a.zoomInOut.bind(a),
                        rotate: a.rotate.bind(a),
                        mouseDownOnImage: a.mouseDownOnImage.bind(a),
                        mouseMoveOnImage: a.mouseMoveOnImage.bind(a),
                        mouseUpOnImage: a.mouseUpOnImage.bind(a)
                    }
                }, this.image.src = e.src
            }, a.prototype.setBackground = function(t) {
                var e, a, i, o, s, n, l = this.image.width,
                    r = this.image.height,
                    u = this.imageBox.clientWidth,
                    d = this.imageBox.clientHeight;
                t && (l > u && r > d ? l < r ? (this.defaultScaleRatio = parseFloat(l / u), l = u, r /= this.defaultScaleRatio) : (this.defaultScaleRatio = parseFloat(r / d), r = d, l /= this.defaultScaleRatio) : l > u && r < d ? (this.defaultScaleRatio = parseFloat(l / u), l = u, r /= this.defaultScaleRatio) : r > d && l < u ? (this.defaultScaleRatio = parseFloat(r / d), r = d, l /= this.defaultScaleRatio) : (s = this.getImageSizeScaledToMaskBox(), l = s.originalImageWidth, r = s.originalImageHeight), this.image.width = l, this.image.height = r), e = parseInt(l, 10) * this.currentScaleRatio, a = parseInt(r, 10) * this.currentScaleRatio, i = (u - e) / 2, o = (d - a) / 2, this.lowerLimitX = e, this.lowerLimitY = a, this.zoomStatus(), n = "background-image: url(" + this.image.src + "); background-size: " + e + "px " + a + "px; background-position: " + i + "px " + o + "px; background-repeat: no-repeat", t && this.imageBoxBackground.setAttribute("style", n), this.imageBox.setAttribute("style", n), document.getElementById("new-image").setAttribute("style", "display: none;")
            }, a.prototype.getImageSizeScaledToMaskBox = function() {
                var t = this.image.width,
                    e = this.image.height,
                    a = this.imageBox.clientWidth,
                    i = this.imageBox.clientHeight,
                    o = this.maskBox.clientWidth,
                    s = this.maskBox.clientHeight;
                return t < o && e < s ? (this.defaultScaleRatio = parseFloat(t / o), t = o, e /= this.defaultScaleRatio) : t < o && e > s ? (this.defaultScaleRatio = parseFloat(t / o), t = o, e /= this.defaultScaleRatio) : e < s && t > o ? (this.defaultScaleRatio = parseFloat(e / s), e = s, t /= this.defaultScaleRatio) : e < i && t < a && (this.defaultScaleRatio = parseFloat(e / i), e = i, t /= this.defaultScaleRatio), {
                    originalImageWidth: t,
                    originalImageHeight: e
                }
            }, a.prototype.zoomStatus = function() {
                this.slider.setAttribute("max", this.defaultScaleRatio.toFixed(1))
            }, a.prototype.mouseMoveOnImage = function(t) {
                var a, i, o, s, n, l = e.isTouchEnabled() ? t.touches[0].clientX : t.clientX,
                    r = e.isTouchEnabled() ? t.touches[0].clientY : t.clientY;
                this.state.draggable && (t.preventDefault(), a = l - this.state.mouseX, i = r - this.state.mouseY, o = this.imageBox.style.backgroundPosition.split(" "), s = a + parseInt(o[0], 10), n = i + parseInt(o[1], 10), this.imageBox.style.backgroundPosition = s + "px " + n + "px", this.state.mouseX = l, this.state.mouseY = r)
            }, a.prototype.mouseUpOnImage = function() {
                this.state.draggable = !1
            }, a.prototype.mouseDownOnImage = function(t) {
                this.state.draggable = !0, this.state.mouseX = e.isTouchEnabled() ? t.touches[0].clientX : t.clientX, this.state.mouseY = e.isTouchEnabled() ? t.touches[0].clientY : t.clientY
            }, a.prototype.zoomIn = function() {
                var t = (10 * this.slider.value + 1) / 10;
                t = t <= this.defaultScaleRatio ? t : this.defaultScaleRatio, this.currentScaleRatio = t, this.slider.value = t, this.setBackground()
            }, a.prototype.zoomOut = function() {
                var t = (10 * this.slider.value - 1) / 10;
                t >= 1 && (this.currentScaleRatio = t, this.slider.value = t, this.setBackground())
            }, a.prototype.zoomInOut = function() {
                var t = this.slider.value;
                t >= this.defaultScaleRatio ? this.currentScaleRatio = this.defaultScaleRatio : this.currentScaleRatio = t, this.setBackground()
            }, a.prototype.rotate = function(t) {
                var e = document.createElement("canvas"),
                    a = e.getContext("2d"),
                    i = this.imageBox.style.backgroundSize.split(" "),
                    o = parseInt(i[0], 10),
                    s = parseInt(i[1], 10);
                e.width = o, e.height = s, a.webkitImageSmoothingEnabled = !1, a.mozImageSmoothingEnabled = !1, a.imageSmoothingEnabled = !1, a.clearRect(0, 0, o, s), a.translate(Math.floor(o / 2), Math.floor(s / 2)), a.rotate(("right" === t ? -90 : 90) * Math.PI / 180), a.translate(Math.floor(-o / 2), Math.floor(-s / 2)), a.drawImage(this.image, 0, 0, o, s), this.image.src = e.toDataURL(this.imgType), this.setBackground()
            }, a.prototype.getCroppedImageDetails = function() {
                var t = document.createElement("canvas"),
                    e = t.getContext("2d"),
                    a = this.maskBox.clientWidth,
                    i = this.maskBox.clientHeight,
                    o = this.imageBox.style.backgroundPosition.split(" "),
                    s = parseInt(o[0], 10) - this.imageBox.clientWidth / 2 + a / 2,
                    n = parseInt(o[1], 10) - this.imageBox.clientHeight / 2 + i / 2,
                    l = this.imageBox.style.backgroundSize.split(" "),
                    r = parseInt(l[0], 10),
                    u = parseInt(l[1], 10),
                    d = Math.round(u * this.defaultScaleRatio),
                    h = Math.round(r * this.defaultScaleRatio),
                    m = Math.round(s * this.defaultScaleRatio),
                    c = Math.round(n * this.defaultScaleRatio);
                return t.width = Math.round(a * this.defaultScaleRatio), t.height = Math.round(i * this.defaultScaleRatio), e.drawImage(this.image, m, c, h, d), {
                    base64Image: t.toDataURL(this.imgType),
                    cropx: 0,
                    cropy: 0,
                    cropw: t.width,
                    croph: t.height,
                    type: this.imgType
                }
            }, module.exports = a
        }, window.jsModules.image_upload_imagecropper();
    }, {
        "../../../../public/js/common.js": 63
    }],
    25: [function(require, module, exports) {
        (function(global) {
            (function() {
                window.jsModules = window.jsModules || {}, window.jsModules.image_upload_main = function() {
                    "use strict";

                    function e(e, t) {
                        var i;
                        e && (i = new FileReader, i.onload = function(i) {
                            var n = new Image;
                            n.src = i.target.result, t({
                                src: n.src,
                                width: n.width,
                                height: n.height,
                                type: e.type,
                                size: (e.size / 1048576).toFixed(2)
                            })
                        }, i.readAsDataURL(e))
                    }

                    function t(e) {
                        var t = s,
                            i = w;
                        d && (t = document.getElementById("image-cropper-image-box"), i = document.getElementById("image-cropper-mask-box")), e ? (v.addClass(t, "imageupload-container-opacity"), v.addClass(i, "imageupload-container-spinner")) : (v.removeClass(t, "imageupload-container-opacity"), v.removeClass(i, "imageupload-container-spinner"))
                    }

                    function i(e) {
                        e ? v.removeClass(l, "hide") : v.containsClass(l, "hide") || (l.removeAttribute("data-error"), v.addClass(l, "hide"))
                    }

                    function n(e) {
                        var n = new C,
                            a = clientSideImageUploadConf.uploadPicAJAXURL,
                            o = new FormData,
                            r = JSON.stringify({
                                crumb: clientSideImageUploadConf.crumb,
                                cropx: e.cropx || 0,
                                cropy: e.cropy || 0,
                                cropw: e.cropw || u,
                                croph: e.croph || p,
                                base64Encoded: d,
                                format: e.type || null
                            });
                        o.append("image_file", e.base64Image || e), o.append("image_post_body", r), n.setTimeout(clientSideImageUploadConf.timeout), n.setOntimeout = function() {
                            i(!0), t(!1)
                        }, n.sendCredentialsCrossOrigin(), t(!0), n.send("POST", a, {
                            body: o,
                            format: "multipart/form-data"
                        }, function(e, n) {
                            var a;
                            if (200 === n.statusCode && n.responseText) try {
                                a = JSON.parse(n.responseText), s.src = a.imageupload.imageUrl, i(!1), d && I()
                            } catch (e) {
                                l.innerHTML = m + clientSideImageUploadConf.i18n.defaultError, i(!0), E.setAttribute("value", clientSideImageUploadConf.i18n.retry)
                            } else 400 === n.statusCode && n.responseText.indexOf("exceeds") > -1 ? (l.setAttribute("data-error", "EXCEEDS_FILE_SIZE"), l.innerHTML = m + clientSideImageUploadConf.i18n.exceedsAllowedFileSizeError, i(!0), v.toggleElementDisplay(E, "hide"), v.toggleElementDisplay(y)) : 400 === n.statusCode && n.responseText.indexOf("Invalid Image") > -1 ? (l.setAttribute("data-error", "INVALID_FILE_SMP"), l.innerHTML = m + clientSideImageUploadConf.i18n.uploadSMPError, i(!0), v.toggleElementDisplay(E, "hide"), v.toggleElementDisplay(y)) : (l.innerHTML = m + clientSideImageUploadConf.i18n.defaultError, i(!0), E.setAttribute("value", clientSideImageUploadConf.i18n.retry));
                            D = !1, t(!1)
                        })
                    }

                    function a() {
                        c && !D && (D = !0, i(!1), n(c.getCroppedImageDetails()))
                    }

                    function o() {
                        var t = this.files,
                            o = t && t[0];
                        o && (i(!1), d ? e(o, function(e) {
                            var t, n = e.width && e.width < u || e.height && e.height < p,
                                o = e.size > parseInt(g, 10);
                            return o ? (l.setAttribute("data-error", "EXCEEDS_FILE_SIZE"), l.innerHTML = m + clientSideImageUploadConf.i18n.exceedsAllowedFileSizeError, void i(!0)) : n ? (l.setAttribute("data-error", "INVALID_FILE_DIMENSION"), l.innerHTML = m + clientSideImageUploadConf.i18n.minRequiredDimensionError, void i(!0)) : (I(!0), c || (t = {
                                imageBoxBackground: "image-cropper-image-box-static-background",
                                imageBox: "image-cropper-image-box",
                                maskBox: "image-cropper-mask-box",
                                slider: "crop-slider",
                                sliderZoomIn: "zoom-in",
                                sliderZoomOut: "zoom-out",
                                rotateLeft: "rotate-left",
                                rotateRight: "rotate-right"
                            }, c = new b(t)), c.init(e), E || (E = document.getElementById("upload-cropped-image"), h.addEvent(E, "click", a)), v.toggleElementDisplay(E), v.toggleElementDisplay(y, "hide"), void 0)
                        }) : n(o))
                    }

                    function r() {
                        var e = document.getElementById("image-file-browser");
                        x || (h.addEvent(document.getElementById("cancel-link"), "click", I), h.addEvent(e, "change", o), x = !0), e.value = null, e.click()
                    }
                    var d, l, m, s, c, g, u, p, E, I, f, y, C = require("../../../../public/js/ajax.js"),
                        h = require("../../../../public/js/common.js"),
                        v = require("../../../../public/js/dom.js"),
                        S = require("../../../../public/js/utils.js"),
                        b = require("./imageCropper.js"),
                        w = document.getElementById("camera-icon"),
                        x = !1,
                        D = !1;
                    I = function(e) {
                        var t = document.getElementById("default-image-container"),
                            n = document.getElementById("new-image-container");
                        v.containsClass(n, "hide") || !0 === e ? (v.toggleElementDisplay(t, "hide"), v.toggleElementDisplay(n), l = document.getElementById("error-message"), i(!1)) : (v.toggleElementDisplay(t), v.toggleElementDisplay(n, "hide"), l = document.getElementById("error-message-default"), E.setAttribute("value", clientSideImageUploadConf.i18n.cropSave), i(!1))
                    }, w && (f = new global.XMLHttpRequest, f && "withCredentials" in f ? (d = S.isHtml5FileCompatible(), s = document.getElementById("default-image"), g = clientSideImageUploadConf.maxImageSizeAllowed, u = clientSideImageUploadConf.minRequiredWidth, p = clientSideImageUploadConf.minRequiredHeight, l = document.getElementById("error-message-default"), y = document.getElementById("reupload-image"), m = document.getElementById("upload-error-placehodler").innerHTML, h.addEvent(w, "click", r), h.addEvent(w, "keyup", function(e) {
                        if (e.keyCode === S.KEYMAP.ENTER_KEY) return r()
                    }), h.addEvent(y, "click", r)) : w && v.addClass(w, "hide"), f = null)
                }, window.jsModules.image_upload_main();
            }).call(this)
        }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

    }, {
        "../../../../public/js/ajax.js": 59,
        "../../../../public/js/common.js": 63,
        "../../../../public/js/dom.js": 65,
        "../../../../public/js/utils.js": 77,
        "./imageCropper.js": 24
    }],
    26: [function(require, module, exports) {
        window.jsModules = window.jsModules || {}, window.jsModules.login_ads_gam = function() {
            "use strict";
            var e = require("../../../../public/js/common"),
                n = require("../../../../public/js/ajax"),
                t = require("../../../../public/js/utils.js");
            ! function(i) {
                function o() {
                    return (new Date).getTime()
                }

                function a() {
                    var e = new RegExp(v + "=([^;]+)"),
                        n = y.match(e);
                    return n ? n[1] : ""
                }

                function r() {
                    var e = new RegExp(j + "=([^;]+)"),
                        n = y.match(e);
                    return n && n[1] ? n[1].split("&").reduce(function(e, n) {
                        var t = n.split("="),
                            i = t[0],
                            o = t[1];
                        return i && (e[i] = o), e
                    }, {
                        gam: "",
                        dv360: ""
                    }) : {
                        gam: "",
                        dv360: ""
                    }
                }

                function d(e) {
                    return Array.from(e).map(function(e) {
                        return e.charCodeAt(0).toString(16)
                    }).join("").substring(0, b)
                }

                function c(e) {
                    (new n).send("GET", "/logads?adType=gam&delay=" + e + "&spid=" + I13N_config.spaceid, function() {})
                }

                function u(e) {
                    switch (e) {
                        case "loaded":
                            w = !0;
                            break;
                        case "slotRenderEnded":
                            _ = !0, g = o(), c(g - f);
                            break;
                        case "initError":
                            s(), c("failure")
                    }
                }

                function s(e) {
                    if (i.clearTimeout(m), !w || !_ || "on" === t.getAdBlockerState()) {
                        document.getElementById("login-box-ad-fallback").style.display = "block", p.style.display = "none", c(e)
                    }
                }

                function l() {
                    s("timeout")
                }
                var m, f, g, w = !1,
                    _ = !1,
                    p = document.getElementById("login-ads-gpt-iframe");
                if (p) {
                    var v = "gam_id",
                        j = "axids",
                        b = 150,
                        y = document.cookie;
                    e.addEvent(window, "message", function(e) {
                        if (!i.gamIframeUrl.startsWith(e.origin) || e.source !== p.contentWindow) return !1;
                        u(e.data.name)
                    }), e.addEvent(document, "DOMContentLoaded", function() {
                        var e = i.gamIframeUrl,
                            n = a(),
                            t = d(n);
                        e = e.replace("__AXId__", n), e = e.replace("__PPId__", t), e = e.replace("__DV360__", r().dv360), m = i.setTimeout(l, 5e3), f = o(), p.src = e
                    })
                }
            }(window)
        }, window.jsModules.login_ads_gam();
    }, {
        "../../../../public/js/ajax": 59,
        "../../../../public/js/common": 63,
        "../../../../public/js/utils.js": 77
    }],
    27: [function(require, module, exports) {
        window.jsModules = window.jsModules || {}, window.jsModules.logout_main = function() {
            "use strict";
            var o = document.getElementById("frontchannel-logout");
            if (o) {
                var n, t = o.getElementsByClassName("fc-iframes"),
                    e = t.length,
                    i = 0,
                    u = function() {
                        (i += 1) === e && s()
                    },
                    s = function() {
                        window.location = fcLogoutDone
                    };
                for (n = 0; n < e; n += 1) t[n].onload = function() {
                    u()
                };
                setTimeout(function() {
                    s()
                }, 12e3)
            }
        }, window.jsModules.logout_main();
    }, {}],
    28: [function(require, module, exports) {
        (function(global) {
            (function() {
                window.jsModules = window.jsModules || {}, window.jsModules.logout_tpa = function() {
                    if (document.getElementById("confirm-logout-tpa")) {
                        var o = global.tpaLogout.tpaRedirectTimer,
                            t = document.getElementById("tpa-logout-done");
                        setTimeout(function() {
                            t.click()
                        }, o)
                    }
                }, window.jsModules.logout_tpa();
            }).call(this)
        }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

    }, {}],
    29: [function(require, module, exports) {
        window.jsModules = window.jsModules || {}, window.jsModules.mc_fido_first_factor_review_devices = function() {
            if (document.getElementById("mc-fido-review-devices")) {
                var e = require("../../../../public/js/common.js"),
                    d = require("../../../../public/js/dom.js"),
                    t = document.getElementById("fido-devices-form"),
                    n = document.getElementById("remove-device-modal"),
                    o = document.getElementById("modal-heading-device-name"),
                    i = document.getElementById("modal-desc-device-name"),
                    c = document.getElementById("modal-submit-button"),
                    m = document.getElementById("modal-cancel-button");
                e.addEvent(t, "click", function(e) {
                    if (e.target && e.target.value && "device_id" === e.target.name) {
                        e.preventDefault();
                        var t = e.target,
                            m = t.dataset.deviceName;
                        o.innerHTML = m, i.innerHTML = m, c.value = t.value, d.addClass(n, "show")
                    }
                }), e.addEvent(m, "click", function() {
                    d.removeClass(n, "show")
                })
            }
        }, window.jsModules.mc_fido_first_factor_review_devices();
    }, {
        "../../../../public/js/common.js": 63,
        "../../../../public/js/dom.js": 65
    }],
    30: [function(require, module, exports) {
        window.jsModules = window.jsModules || {}, window.jsModules.mc_yak_optin_main = function() {
            "use strict";
            var e = require("../../../../public/js/common.js"),
                t = require("../../../../public/js/dom.js");
            ! function() {
                var e = document.getElementById("yak-opt-in-poll-try-again"),
                    n = document.getElementById("yak-opt-in-poll-counter");
                e && n && (n = parseInt(n.getAttribute("value"), 10) || 0, 1 === n ? t.removeClass(e, "hide") : setTimeout(function() {
                    t.removeClass(e, "hide")
                }, 5e3))
            }(),
            function() {
                var t = document.getElementById("mc-yak-optin-confirmApp") || document.getElementById("mc-yak-optin-pollDone");
                t && e.addEvent(t, "click", function(e) {
                    var n, o = e.target.getAttribute("data-dfpurl");
                    o && (e.preventDefault(), n = document.createElement("iframe"), n.style.display = "none", n.src = o, document.body.appendChild(n), setTimeout(function() {
                        "mc-yak-optin-confirmApp" === t.getAttribute("id") ? document.yakConfirmAppForm.submit() : location.href = e.target.getAttribute("href")
                    }, 2e3))
                })
            }()
        }, window.jsModules.mc_yak_optin_main();
    }, {
        "../../../../public/js/common.js": 63,
        "../../../../public/js/dom.js": 65
    }],
    31: [function(require, module, exports) {
        window.jsModules = window.jsModules || {}, window.jsModules.oauth2_main = function() {
            "use strict";
            var e = require("../../../../public/js/common.js"),
                t = document.getElementById("oauth2-close"),
                o = document.getElementById("oauth2-disagree"),
                n = document.getElementById("oauth2-redirect-uri"),
                a = document.getElementById("oauth2-authorization"),
                d = document.getElementById("oauth2-agree");
            o && n && "oob" === n.value.toLowerCase() && e.addEvent(o, "click", function(e) {
                e.preventDefault(), e.stopPropagation(), window.open(oauthData.defaultRedirectUrl, "_self").close()
            }), t && e.addEvent(t, "click", function(e) {
                e.preventDefault(), e.stopPropagation(), window.open(oauthData.defaultRedirectUrl, "_self").close()
            }), a && e.addEvent(a, "submit", function() {
                d.disabled = !0
            })
        }, window.jsModules.oauth2_main();
    }, {
        "../../../../public/js/common.js": 63
    }],
    32: [function(require, module, exports) {
        window.jsModules = window.jsModules || {}, window.jsModules.odp_main = function() {
            "use strict";
            var e, n = document.getElementById("more-bchannel-info"),
                o = "ontouchstart" in document.documentElement ? "touchstart" : "click";
            n && n.addEventListener(o, function() {
                n.className = n.className.replace("link", "hide"), e = document.getElementById("more-bchannel-info-desc"), e.className = e.className.replace("hide", "show")
            }, !1)
        }, window.jsModules.odp_main();
    }, {}],
    33: [function(require, module, exports) {
        window.jsModules = window.jsModules || {}, window.jsModules.odppush_main = function() {
            "use strict";

            function o(o) {
                setTimeout(function() {
                    o.target.disabled = !0
                }, 0)
            }! function() {
                for (var n = document.querySelectorAll(".odp-opt-in-one-click-button"), e = 0, t = n.length; e < t; e += 1) n[e].addEventListener("click", o)
            }()
        }, window.jsModules.odppush_main();
    }, {}],
    34: [function(require, module, exports) {
        window.jsModules = window.jsModules || {}, window.jsModules.page_main = function() {
            "use strict";
            require("../../../../public/js/bootstrap.js"), require("../../../../public/js/lh.js")
        }, window.jsModules.page_main();
    }, {
        "../../../../public/js/bootstrap.js": 60,
        "../../../../public/js/lh.js": 73
    }],
    35: [function(require, module, exports) {
        window.jsModules = window.jsModules || {}, window.jsModules.password_challenge_main = function() {
            var e, t = require("../../../../public/js/common.js"),
                n = require("../../../../public/js/dom.js"),
                o = require("../../../../public/js/utils.js"),
                s = document.getElementById("password-challenge"),
                d = document.getElementById("login-signin"),
                a = document.getElementById("password-toggle-button"),
                l = document.getElementById("login-passwd"),
                c = document.getElementById("password-container"),
                u = document.getElementById("show-button-clicked"),
                i = document.getElementById("show-button-status"),
                r = document.getElementById("prefers-reduce-motion"),
                m = document.getElementById("caps-indicator"),
                w = function(e) {
                    e ? n.removeClass(m, "hide") : n.addClass(m, "hide")
                },
                p = function(e) {
                    "blur" === e.type ? n.replaceClass(c, "focussed", "blurred") : n.replaceClass(c, "blurred", "focussed")
                },
                g = function(e) {
                    u && (u.value = !0), i && (i.value = e)
                };
            if (s && d && d.form && (t.addEvent(d.form, "submit", function(t) {
                    e && t.preventDefault(), e = !0
                }), c && (t.addEvent(d.form, "keydown", function(e) {
                    o.capsLockHandler(e, w)
                }), t.addEvent(d.form, "keyup", function(e) {
                    e.target.value.length > 0 && n.removeClass(c, "error"), o.capsLockHandler(e, w)
                }), t.addEvent(l, "blur", function(e) {
                    p(e)
                }), t.addEvent(l, "focus", function(e) {
                    p(e)
                }), t.addEvent(a, "click", function(e) {
                    n.containsClass(e.target, "hide-pw") ? (n.replaceClass(e.target, "hide-pw", "show-pw"), e.target.title = pwchallenge.messages.toolTipHide, l.type = "text", l.focus(), g(!0)) : (n.replaceClass(e.target, "show-pw", "hide-pw"), e.target.title = pwchallenge.messages.toolTipShow, l.type = "password", l.focus(), g(!1))
                }))), window && window.matchMedia && r) {
                window.matchMedia("(prefers-reduced-motion: reduce)").matches && (r.value = !0)
            }
        }, window.jsModules.password_challenge_main();
    }, {
        "../../../../public/js/common.js": 63,
        "../../../../public/js/dom.js": 65,
        "../../../../public/js/utils.js": 77
    }],
    36: [function(require, module, exports) {
        window.jsModules = window.jsModules || {}, window.jsModules.pfs_main = function() {
            "use strict";
            var e = require("../../../../public/js/dom.js"),
                t = require("../../../../public/js/utils.js");
            ! function() {
                function n(e, t) {
                    parent.postMessage(JSON.stringify({
                        cmd: e,
                        params: t || {}
                    }), targetOrigin)
                }

                function a(e) {
                    var t;
                    try {
                        return t = JSON.parse(e), t.params = t.params || {}, t
                    } catch (e) {
                        return {
                            cmd: "noop",
                            params: {}
                        }
                    }
                }

                function i(e) {
                    for (var t = e.target;
                        "A" !== t.tagName && t.parentElement;) t = t.parentElement;
                    "A" === t.tagName && "_parent" === t.getAttribute("target") && (e.stopPropagation(), e.preventDefault(), n("redirect", {
                        url: t.getAttribute("href"),
                        "data-ylk": t.getAttribute("data-ylk") || ""
                    })), "A" === t.tagName && "_blank" === t.getAttribute("target") && (e.stopPropagation(), e.preventDefault(), n("popup", {
                        url: t.getAttribute("href"),
                        "data-ylk": t.getAttribute("data-ylk") || ""
                    }))
                }

                function r(e) {
                    for (var t = e.target;
                        "A" !== t.tagName && t.parentElement;) t = t.parentElement;
                    if ("view-account" === t.id || "hide-account" === t.id) return c(t), e.stopPropagation(), void e.preventDefault();
                    "A" === t.tagName && "_parent" !== t.getAttribute("target") && "_blank" !== t.getAttribute("target") && n("hide-for-animation")
                }

                function s(e, t) {
                    return parseInt(window.getComputedStyle(e)[t], 10)
                }

                function o(t, a) {
                    var i, r, o = document.getElementById("pfs-header"),
                        d = document.getElementById("pfs-footer"),
                        c = document.getElementById("pfs-content"),
                        a = a || 0,
                        l = s(o, "marginBottom");
                    u = t, t = t || g, c.style = "", e.removeClass(c, "scroll"), i = c.offsetHeight + a - l, r = o.offsetHeight + d.offsetHeight + i + l, r > t && (i -= r - t, r = t, c.style = "overflow-y:scroll;height:" + i + "px;", e.addClass(c, "scroll")), n("show", {
                        height: r + "px"
                    })
                }

                function d(t) {
                    var n = document.getElementsByTagName("body")[0];
                    t ? e.replaceClass(n, "light-theme", "dark-theme") : e.replaceClass(n, "dark-theme", "light-theme")
                }

                function c(t) {
                    var n = "view-account" === t.id,
                        a = document.getElementById("pfs-as-container"),
                        i = document.getElementById(n ? "hide-account" : "view-account"),
                        r = -a.offsetHeight,
                        s = "";
                    e.removeClass(i, "hide"), e.addClass(t, "hide"), p && (s = "transition:visibility " + f + " linear, height " + f + " " + h + ";"), n && (a.style = "height:auto;", r = a.offsetHeight, a.style = "", s += "visibility:visible;height:" + r + "px;"), o(u, r), a.style = s
                }

                function l(n) {
                    var a, i, r = document.getElementById("pfs-as-handler"),
                        s = document.getElementById("pfs-as-container"),
                        o = "";
                    if (r && s) {
                        if ("undefined" == typeof deviceUsers || deviceUsers.length < 2) return void(s.innerHTML = "");
                        for (y.length || (y.push(document.getElementById("current-account").innerHTML), y.push(document.getElementById("signed-in-account").innerHTML), y.push(document.getElementById("signed-out-account").innerHTML), y.push(document.getElementById("view-all-accounts").innerHTML)), a = 0; deviceUsers.length && a < n; a += 1) i = deviceUsers.shift(), -1 !== i.imageUrl.indexOf("https://s.yimg.com/wm/mbr/images/profile") && (i.imageUrl = "https://s.yimg.com/wm/mbr/images/pfs/g/profile.svg"), o += y[i.state], o = o.replace(/x-img/g, "img").replace(/{username}/g, i.yid).replace(/%7Busername%7D/g, encodeURIComponent(i.yid)).replace("{imgUrl}", i.imageUrl).replace("{name}", t.formatFullName(i.firstName, i.lastName)).replace("{email}", i.email);
                        deviceUsers.length && (o += y[3]), s.innerHTML = o, e.addClass(r, "show")
                    }
                }

                function m() {
                    for (var e = document.querySelectorAll("ul.content-body a"), t = [], n = 0; n < e.length; n++) {
                        var a = e[n],
                            i = a.getAttribute("data-ylk");
                        i && t.push(i)
                    }
                    return t
                }
                var u, g = 600,
                    p = !1,
                    f = "1s",
                    h = "ease-in-out",
                    v = document.getElementById("pfs"),
                    y = [];
                v && targetOrigin && window.addEventListener("DOMContentLoaded", function() {
                    var s = document.getElementById("pfs-content");
                    if (parent === window) {
                        return void(document.getElementById("pfs").innerHTML = "")
                    }
                    enabledDarkMode && window.matchMedia && (window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function(e) {
                        d(e.matches)
                    }), d(window.matchMedia("(prefers-color-scheme: dark)").matches));
                    var c = m();
                    if (c.length > 0) {
                        var g = {};
                        c.forEach(function(e) {
                            var n = t.parseDataYlk(e),
                                a = n.sec;
                            a && (g[a] || (g[a] = []), g[a].push({
                                slk: n.slk,
                                elm: n.elm,
                                subsec: n.subsec
                            }))
                        });
                        var y = Object.keys(g).map(function(e) {
                            var t = {};
                            return t.sec = e, t._links = g[e], t
                        });
                        t.rapidBeaconLinkViews(y, 0)
                    }
                    v.addEventListener("click", function(e) {
                        i(e), r(e)
                    }), window.addEventListener("message", function(e) {
                        var t = a(e.data),
                            n = t.cmd,
                            i = t.params;
                        if (e.origin === targetOrigin) switch (n) {
                            case "initialize":
                                p = i.enabledAnimation || p, f = i.animationDuration || f, h = i.animationTimingFunction || h, l(i.maxAccounts || 3);
                            case "resize":
                                o(i.height || u)
                        }
                    }, !1), s && s.addEventListener("scroll", function(t) {
                        var n = t.target,
                            a = n.scrollHeight - n.clientHeight;
                        e[n.scrollTop === a ? "addClass" : "removeClass"](n, "end")
                    }, !1), n("iframeready")
                })
            }()
        }, window.jsModules.pfs_main();
    }, {
        "../../../../public/js/dom.js": 65,
        "../../../../public/js/utils.js": 77
    }],
    37: [function(require, module, exports) {
        window.jsModules = window.jsModules || {}, window.jsModules.phone_obfuscation_challenge_main = function() {
            function e(e) {
                var u = e.target;
                e.keyCode === a.KEYMAP.BACKSPACE_KEY && 0 === u.value.length ? n(u) : u.value.length === u.maxLength && o(u)
            }

            function n(e) {
                var n, o = t.length;
                for (n = 1; n < o; n += 1) e === t[n] && t[n - 1].focus()
            }

            function o(e) {
                var n, o = t.length - 1;
                for (n = 0; n < o; n += 1) e === t[n] && t[n + 1].focus()
            }
            var u, t, i = document.getElementById("phone-obfuscation-challenge"),
                l = require("../../../../public/js/disable-double-submit.js").initDisableDoubleSubmit,
                s = require("../../../../public/js/common.js"),
                a = require("../../../../public/js/utils.js");
            i && l(), u = document.getElementById("phone-number-container"), (t = u && u.getElementsByTagName("input")) && s.addEvent(u, "keyup", e)
        }, window.jsModules.phone_obfuscation_challenge_main();
    }, {
        "../../../../public/js/common.js": 63,
        "../../../../public/js/disable-double-submit.js": 64,
        "../../../../public/js/utils.js": 77
    }],
    38: [function(require, module, exports) {
        window.jsModules = window.jsModules || {}, window.jsModules.phone_verify_challenge_main = function() {
            "use strict";
            var e = require("../../../../public/js/common.js"),
                t = require("../../../../public/js/ajax.js"),
                n = require("../../../../public/js/inline-country-dropdown.js"),
                i = require("../../../../public/js/disable-double-submit.js").initDisableDoubleSubmit,
                o = require("../../../../public/js/dom.js"),
                r = require("../../../../public/js/utils.js");
            e.addEvent(document, "DOMContentLoaded", function() {
                if (document.getElementById("vz-phone-verify-auto-verify")) {
                    var e = document.getElementById("vz-error"),
                        n = document.getElementById("vz-pbar");
                    if (o.containsClass(e, "hide")) return n.setAttribute("style", "width: 60%"), void
                    function() {
                        var i = new t;
                        i.setTimeout(6e4), i.send("GET", phoneVerifyData.getOTPApi, function(t, i) {
                            var r;
                            try {
                                r = JSON.parse(i.responseText)
                            } catch (e) {}
                            if (r && r.code && "failed" !== r.code) return n.setAttribute("style", "width: 85%"), a ? a.value = r.code : y.value = r.code, void setTimeout(function() {
                                v.click()
                            }, 1e3);
                            o.removeClass(e, "hide")
                        })
                    }();
                    n.setAttribute("style", "width: 100%")
                }
            });
            var s = document.getElementById("phone-verify-challenge"),
                d = document.getElementById("pvc-resend-status"),
                a = document.getElementById("verification-code-field"),
                u = document.getElementById("auto-verify-flag-field"),
                c = document.getElementById("next-gen-wait-spinner"),
                l = document.getElementById("auto-verification-spinner"),
                m = document.querySelectorAll(".phone-verify-challenge-auto-verify"),
                f = m && m[0],
                v = document.querySelector('#phone-verify-challenge button[name="verifyCode"]'),
                y = document.getElementById("verification-code-field");
            if (d) {
                var p = document.getElementById("pvc-resend-button-container"),
                    h = parseInt(d.getAttribute("data-remaining-wait-time"), 10),
                    g = d.getAttribute("data-msg-seconds"),
                    b = d.getAttribute("data-msg-second"),
                    w = function() {
                        h -= 1, h ? (d.innerHTML = h > 1 ? g.replace("{seconds}", h) : b, setTimeout(w, 1e3)) : (o.addClass(d, "hide"), o.replaceClass(p, "hide", "show"))
                    };
                o.containsClass(p, "hide") && setTimeout(w, 1e3)
            }
            if (s) {
                var E = document.getElementsByClassName("phone-country-code")[0],
                    j = s.getElementsByClassName("error-msg")[0],
                    C = document.getElementById("verify-code-button");
                i({
                    forceDisableSubmitButton: C
                });
                var B = function(e) {
                        e.setAttribute("aria-invalid", "false"), o.removeClass(e, "error-border"), j && o.addClass(j, "hide")
                    },
                    I = function(e) {
                        var t = e.target;
                        C && r.submitFormOnEnter(e, C), "verification-code-field" === t.id && B(t)
                    };
                E && E.querySelector(".country-dropdown-container") && new n(E, {
                    noHide: !0
                }), a && e.addEvent(s, "keypress", I), "undefined" != typeof phoneVerifyData && r.setResendStatusTimer(phoneVerifyData.MAX_WAIT_TIME)
            }
            var T = function() {
                    o.removeClass(c, "show"), o.removeClass(f, "show"), o.removeClass(s, "hide"), o.addClass(l, "hide"), u && (u.value = "false")
                },
                A = function(e, t) {
                    t && t.code && "failed" !== t.code ? (a ? a.value = t.code : y.value = t.code, v.click()) : T()
                },
                q = function(e) {
                    var t;
                    try {
                        t = JSON.parse(e.responseText)
                    } catch (e) {
                        T()
                    }
                    return t
                };
            if (f) {
                f.classList.add("show"), l && o.removeClass(l, "hide");
                var D = new t;
                D.setTimeout(2e4), D.send("GET", phoneVerifyData.getOTPApi, function(e, t) {
                    A(0, q(t))
                })
            }
        }, window.jsModules.phone_verify_challenge_main();
    }, {
        "../../../../public/js/ajax.js": 59,
        "../../../../public/js/common.js": 63,
        "../../../../public/js/disable-double-submit.js": 64,
        "../../../../public/js/dom.js": 65,
        "../../../../public/js/inline-country-dropdown.js": 70,
        "../../../../public/js/utils.js": 77
    }],
    39: [function(require, module, exports) {
        window.jsModules = window.jsModules || {}, window.jsModules.push_challenge_main = function() {
            "use strict";

            function e() {
                var e, n, t, o = document.getElementById("push-error-container"),
                    i = document.getElementById("push-bottom-cta");
                o && o.classList.contains("hide") && (e = document.getElementById("push-title-container"), n = document.getElementById("push-polling-container"), t = document.getElementById("push-polling-resend-button-container"), c.replaceClass(i, "bottom-cta", "bottom-relative"), o.classList.remove("hide"), t.classList.add("hide"), n.classList.add("hide"), e.classList.add("hide"))
            }

            function n(e) {
                var n = document.getElementById("push-selection-container");
                if (n && n.classList.contains("hide")) {
                    var t = document.getElementById("push-title-container"),
                        o = document.getElementById("push-selection-number"),
                        i = document.getElementById("push-polling-resend-button-container"),
                        s = document.getElementById("push-polling-container");
                    o.innerHTML = e, o.setAttribute("data-value", e), t.classList.add("hide"), s.classList.add("hide"), i.classList.add("hide"), n.classList.remove("hide")
                }
            }

            function t(t, o) {
                var i;
                if ((200 === o.statusCode || 206 === o.statusCode) && o.responseText) try {
                    if (i = JSON.parse(o.responseText), i.location) return r = !0, void(window.location.href = i.location);
                    "pushOff" === i.action && e(), "showSelection" === i.action && n(i.selection)
                } catch (e) {}
                p || 202 !== o.statusCode || (new u).send("GET", m.timedOutYakSessionUrl, function() {})
            }

            function o() {
                var e = document.getElementById("push-polling-session");
                if (e) return "/membership/sessions/" + encodeURIComponent(e.value)
            }

            function i() {
                var e = m.updateYAKSessionUrl;
                !r && "navigator" in window && "sendBeacon" in navigator && navigator.sendBeacon(e)
            }

            function s() {
                var e = document.getElementById("learn-more-instructions"),
                    n = document.getElementById("initial-instructions-list"),
                    t = document.getElementById("push-anim-img"),
                    o = document.getElementById("push-polling-resend-button-container"),
                    i = document.getElementById("push-polling-resend-again-container");
                c.hideElements([n, o, t]), c.showElements([e, i])
            }
            var d = require("../../../../public/js/poll.js"),
                a = require("../../../../public/js/comet.js"),
                u = require("../../../../public/js/ajax.js"),
                c = require("../../../../public/js/dom.js"),
                l = require("../../../../public/js/common.js"),
                r = !1,
                m = YUI_config.global.pushChallengeConfig,
                p = !1;
            if (m) {
                var h = document.getElementById("push-polling-resend"),
                    g = document.getElementById("push-polling-learn-more");
                ! function() {
                    var e = m.validatePath,
                        n = new d,
                        i = (new Date).getTime(),
                        s = function() {
                            var e = (new Date).getTime();
                            e - i > 1e3 && (p = !0, n.forcePoll()), i = e, setTimeout(s, 500)
                        };
                    m.enablePauseCheck && s(), n.setTimeout(m.timeout), m.interval = function(e) {
                        return a.browserSupportComet() ? 1e4 : e < 6e4 ? 2e3 : 5e3
                    }, m.noShortPolling || n.start("POST", e, m, t), !m.noComet && a.browserSupportComet() && document.addEventListener("DOMContentLoaded", function() {
                        a.startComet(o(), function(o) {
                            "authorized" !== o && "unauthorized" !== o && "pendingSecondTry" !== o || ("pendingSecondTry" !== o && (m.interval = function() {
                                return 1e3
                            }, m.timeout = 5e3), setTimeout(function() {
                                n.stop(), n = new d, n.start("POST", e, m, t)
                            }, "pendingSecondTry" !== o ? 1e3 : 0))
                        })
                    })
                }(),
                function() {
                    var e = document.getElementById("push-polling-resend-button-container");
                    e && c.containsClass(e, "hide") && document.addEventListener("DOMContentLoaded", function() {
                        setTimeout(function() {
                            c.replaceClass(e, "hide", "show")
                        }, 1e4)
                    })
                }(), l.addEvent(window, "beforeunload", i), h && l.addEvent(h, "click", function() {
                    r = !0
                }), g && l.addEvent(g, "click", s)
            }
        }, window.jsModules.push_challenge_main();
    }, {
        "../../../../public/js/ajax.js": 59,
        "../../../../public/js/comet.js": 62,
        "../../../../public/js/common.js": 63,
        "../../../../public/js/dom.js": 65,
        "../../../../public/js/poll.js": 75
    }],
    40: [function(require, module, exports) {
        window.jsModules = window.jsModules || {}, window.jsModules.qr_code_challenge_main = function() {
            function e(e, o) {
                var n;
                if (200 === o.statusCode && o.responseText) try {
                    if (n = JSON.parse(o.responseText), n.location) return void(window.location.href = n.location)
                } catch (e) {}
            }

            function o() {
                return "/membership/sessions/" + encodeURIComponent(i.qrSession)
            }
            var n = require("../../../../public/js/poll.js"),
                t = require("../../../../public/js/comet.js"),
                i = YUI_config.global.qrCodeChallengeConfig;
            i && (i.enableCometPolling ? function() {
                var r = i.validatePath,
                    a = new n,
                    s = (new Date).getTime(),
                    u = function() {
                        var e = (new Date).getTime();
                        e - s > 1e3 && a.forcePoll(), s = e, setTimeout(u, 500)
                    };
                i.enablePauceCheck && u(), a.setTimeout(i.timeout), i.interval = function(e) {
                    return t.browserSupportComet() ? 2e4 : e < 6e4 ? 2e3 : 5e3
                }, i.noShortPolling || a.start("POST", r, i, e), !i.noComet && t.browserSupportComet() && document.addEventListener("DOMContentLoaded", function() {
                    t.startComet(o(), function(e) {
                        "authorized" !== e && "unauthorized" !== e && "abandoned" !== e || a.forcePoll()
                    })
                })
            }() : function() {
                var o = i.validatePath,
                    t = new n;
                t.setTimeout(i.timeout), i.interval = function(e) {
                    return e < 6e4 ? 2e3 : 5e3
                }, t.start("POST", o, i, e)
            }())
        }, window.jsModules.qr_code_challenge_main();
    }, {
        "../../../../public/js/comet.js": 62,
        "../../../../public/js/poll.js": 75
    }],
    41: [function(require, module, exports) {
        window.jsModules = window.jsModules || {}, window.jsModules.recaptcha_challenge_main = function() {
            "use strict";
            var e = require("../../../../public/js/common.js"),
                a = document.getElementById("recaptcha-challenge"),
                n = !!window.postMessage;
            a && e.addEvent(document, "DOMContentLoaded", function() {
                var a = document.getElementById("recaptcha-form"),
                    o = document.createElement("iframe");
                o.id = "recaptcha-iframe", o.scrolling = "no", o.src = YUI_config.global.recaptchaChallenge.redirectURL, o.sandbox = "allow-forms allow-scripts allow-same-origin", n || o.sandbox.add("allow-top-navigation-by-user-activation"), a.parentNode.append(o), e.addEvent(window, "message", function(e) {
                    var n = e.data;
                    0 === YUI_config.global.recaptchaChallenge.host.indexOf(e.origin) && n.recaptchaResponse && (a["g-recaptcha-response"].value = n.recaptchaResponse, a.sessionIndex.value = n.sessionIndex, a.context.value = n.context, setTimeout(function() {
                        if (!a["g-recaptcha-response"].value) throw new Error("recaptchaResponse missing in form field");
                        a.submit()
                    }, 0))
                })
            })
        }, window.jsModules.recaptcha_challenge_main();
    }, {
        "../../../../public/js/common.js": 63
    }],
    42: [function(require, module, exports) {
        window.jsModules = window.jsModules || {}, window.jsModules.recovery_code_challenge_main = function() {
            "use strict";

            function e(e) {
                var t = e.target;
                o.submitFormOnEnter(e, d), "verification-code-field" === t.id && n.errorFieldHandler(i, t)
            }
            var t = document.getElementById("recovery-code-challenge");
            if (t) {
                var n = require("../../../../public/js/common.js"),
                    o = require("../../../../public/js/utils.js"),
                    d = document.getElementById("verify-code-button"),
                    r = document.getElementById("recovery-code-input"),
                    i = t.getElementsByClassName("error-msg")[0],
                    c = document.getElementById("verify-code-button"),
                    r = document.getElementById("recovery-code-input");
                n.addEvent(t, "keypress", e), o.initializeAutoSubmit(r, d), n.addEvent(r, "keyup", function(e) {
                    var t = e.target,
                        n = t.value.trim();
                    c.disabled = !n
                })
            }
        }, window.jsModules.recovery_code_challenge_main();
    }, {
        "../../../../public/js/common.js": 63,
        "../../../../public/js/utils.js": 77
    }],
    43: [function(require, module, exports) {
        window.jsModules = window.jsModules || {}, window.jsModules.traps_main = function() {
            "use strict";

            function e(e, t, r) {
                var a = e.getAttribute("data-ylk"),
                    d = a.indexOf(t);
                return a.slice(0, d + t.length) + "-" + r + ";"
            }
            var t = require("../../../../public/js/common.js"),
                r = require("../../../../public/js/dom.js"),
                a = require("../../../../public/js/utils.js"),
                d = require("../../../../public/js/disable-double-submit.js").initDisableDoubleSubmit,
                s = document.querySelector("#traps-dob .dob-form select"),
                i = document.querySelector("#rewards-trap .rewards-tab-profile-badges"),
                l = document.querySelector("#rewards-trap .rewards-tab-free-trial"),
                o = document.querySelector("#rewards-trap .profile-badges"),
                c = document.querySelector("#rewards-trap .free-trial"),
                u = document.querySelector("#rewards-trap .free-trial .card-list"),
                n = document.querySelector("#rewards-trial-checkout"),
                m = document.querySelector("#rewards-trap .profile-badges .images-container"),
                p = document.querySelector("#rewards-form"),
                f = document.querySelector("#profile-image-claim-reward");
            if (s && (t.addEvent(s, "change", function(e) {
                    r.addClass(e.target, "selected-month")
                }), d({
                    disableEnterKey: !0
                })), i && l && (t.addEvent(i, "click", function(e) {
                    e.stopPropagation(), e.preventDefault(), r.removeClass(o, "hide"), r.addClass(i, "selected"), r.addClass(c, "hide"), r.removeClass(l, "selected")
                }), t.addEvent(l, "click", function(e) {
                    e.stopPropagation(), e.preventDefault(), r.removeClass(c, "hide"), r.addClass(l, "selected"), r.addClass(o, "hide"), r.removeClass(i, "selected")
                })), m) {
                var b, v = m.querySelectorAll('input[type="radio"]'),
                    g = p.querySelector('input[name="finame"]');
                m.addEventListener("click", function(t) {
                    t.stopPropagation(), t.preventDefault();
                    var d = t.target;
                    v.forEach(function(e) {
                        d.className.includes(e.id) ? (e.checked = !0, b = e.getAttribute("data-filename"), a.rapidBeaconClick("change", a.parseDataYlk(e.getAttribute("data-ylk")))) : e.checked = !1
                    }), r.removeClass(f, "disabled"), g.setAttribute("value", b);
                    var s = e(f, "claim", b);
                    f.setAttribute("data-ylk", s)
                })
            }
            if (u) {
                var w, y = u.querySelectorAll(".card");
                u.addEventListener("click", function(t) {
                    t.stopPropagation(), t.preventDefault();
                    var a = t.target;
                    y.forEach(function(e) {
                        a.className.includes(e.id) && (w = e)
                    }), r.removeClass(n, "disabled"), n.setAttribute("href", w.getAttribute("data-url"));
                    var d = e(n, "chkout", w.id);
                    n.setAttribute("data-ylk", d)
                })
            }
        }, window.jsModules.traps_main();
    }, {
        "../../../../public/js/common.js": 63,
        "../../../../public/js/disable-double-submit.js": 64,
        "../../../../public/js/dom.js": 65,
        "../../../../public/js/utils.js": 77
    }],
    44: [function(require, module, exports) {
        (function(global) {
            (function() {
                window.jsModules = window.jsModules || {}, window.jsModules.traps_webauthn_upsell = function() {
                    "use strict";

                    function e() {
                        var e = new l,
                            n = document.getElementById("webauthn-data-form");
                        e.send("POST", w.xhrCreate, {
                            body: c.serializeFormFields(n)
                        }, function(e, s) {
                            var a = s.responseText;
                            if (e) return r();
                            if (n.pkd.value = a, w.isAndroidWebview) {
                                try {
                                    a = JSON.parse(a)
                                } catch (e) {
                                    return r()
                                }
                                return a.timeout = j, i(a, t, r)
                            }
                            return a = b.formatePublicKeyData(a), a.timeout = j, b.createCredentials(a, t, r)
                        })
                    }

                    function t(e) {
                        var t = w.isAndroidWebview ? e : d.encodeSecurityKeyCredentials(e);
                        return b.submitForm("#webauthn-data-form", t.id, t.rawId, t.response.attestationObject, t.response.clientDataJSON)
                    }

                    function r(e) {
                        s(), e && "failed" === e || o.removeClass(f, "hide")
                    }

                    function n() {
                        a.innerHTML = "&nbsp;", a.disabled = !0, o.removeClass(p, "hide")
                    }

                    function s() {
                        a.innerHTML = w.messages.ctaEnable, a.disabled = !1, o.addClass(p, "hide")
                    }

                    function i(e, t, r) {
                        var n, s = w.phnxCredentialsPollingParams,
                            i = new m,
                            a = JSON.stringify(e);
                        a = window.btoa(a), n = w.xhrPhnxCreds + "?data=" + a;
                        var u = function(e, n) {
                            var s = {};
                            if (e) return r(e);
                            try {
                                s = JSON.parse(n.responseText)
                            } catch (e) {
                                return r(e)
                            }
                            return "failed" === s.status ? r("failed") : t(s.data)
                        };
                        i.setTimeout(s.timeout), i.start("GET", n, s, u)
                    }
                    var a = document.getElementById("webauthn-form-submit-btn");
                    if (a) {
                        var u = require("../../../../public/js/common.js"),
                            d = require("../../../../public/js/utils.js"),
                            o = require("../../../../public/js/dom.js"),
                            l = require("../../../../public/js/ajax.js"),
                            c = require("../../../../public/js/forms.js"),
                            m = require("../../../../public/js/poll.js"),
                            b = require("../../../tsv-security-key-setup/public/js/utils"),
                            f = document.getElementById("webauthn-error-msg"),
                            p = document.getElementById("waiting-dots"),
                            w = global.webauthnUpsell,
                            j = 3e5;
                        u.addEvent(a, "click", function(t) {
                            t.preventDefault(), n(), o.addClass(f, "hide"), e()
                        })
                    }
                }, window.jsModules.traps_webauthn_upsell();
            }).call(this)
        }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

    }, {
        "../../../../public/js/ajax.js": 59,
        "../../../../public/js/common.js": 63,
        "../../../../public/js/dom.js": 65,
        "../../../../public/js/forms.js": 68,
        "../../../../public/js/poll.js": 75,
        "../../../../public/js/utils.js": 77,
        "../../../tsv-security-key-setup/public/js/utils": 47
    }],
    45: [function(require, module, exports) {
        window.jsModules = window.jsModules || {}, window.jsModules.tsv_authenticator_challenge_main = function() {
            "use strict";

            function e(e) {
                var i = e.target;
                n.submitFormOnEnter(e, o), "verification-code-field" === i.id && t.errorFieldHandler(s, i)
            }
            var t = require("../../../../public/js/common.js"),
                i = document.getElementById("tsv-authenticator-challenge");
            if (i) {
                var n = require("../../../../public/js/utils.js"),
                    o = document.getElementById("verify-code-button"),
                    r = document.getElementById("verification-code-field"),
                    s = i.getElementsByClassName("error-msg")[0];
                t.addEvent(i, "keypress", e), n.initializeAutoSubmit(r, o)
            }
        }, window.jsModules.tsv_authenticator_challenge_main();
    }, {
        "../../../../public/js/common.js": 63,
        "../../../../public/js/utils.js": 77
    }],
    46: [function(require, module, exports) {
        window.jsModules = window.jsModules || {}, window.jsModules.tsv_security_key_setup_main = function() {
            "use strict";

            function e(e) {
                B.innerHTML = e, v.removeClass(B, "hide"), v.addClass(C, "error-border")
            }

            function t() {
                v.addClass(B, "hide"), v.removeClass(C, "error-border")
            }

            function n(e) {
                var t = y.encodeSecurityKeyCredentials(e);
                return E.submitForm("#security-key-connect-form", t.id, t.rawId, t.response.attestationObject, t.response.clientDataJSON)
            }

            function r() {
                return E.submitFormWithError("#security-key-connect-form", "ERROR_SECURITY_KEY_NOT_FOUND")
            }

            function d() {
                var e = document.querySelector('.security-key-connect input[name="pkd"]').value;
                e && (e = E.formatePublicKeyData(e), e.timeout = _, E.createCredentials(e, n, r))
            }

            function a(e) {
                var t = e.target.value,
                    n = document.getElementById("security-key-id"),
                    r = ["enable", "disable", "delete", "rename"];
                if ("action" === e.target.name && -1 !== r.indexOf(t)) {
                    if ("enable" === t) return void(n.value = e.target.dataset.keyid);
                    e.preventDefault(), w.value = e.target.dataset.keyid, C.value = v.unEscapeText(e.target.dataset.keyname), u(t, e.target.dataset.keyname), i(t)
                }
            }

            function i(e) {
                var t = {
                    disable: document.getElementById("disable-action"),
                    delete: document.getElementById("delete-action"),
                    rename: document.getElementById("rename-action")
                };
                v.removeClass(t[e], "hide"), v.removeClass(p, "hide"), v.removeClass(j, "hide")
            }

            function s() {
                var e, t = document.getElementsByClassName("content-container");
                for (e = 0; e < t.length; e += 1) v.addClass(t[e], "hide");
                v.addClass(p, "hide"), v.addClass(j, "hide")
            }

            function o() {
                var t = new f,
                    n = document.getElementById("modal-form");
                window.lastClickedSubmitButton = h, t.send("POST", "/account/module/security/security-key/rename", {
                    body: g.serializeFormFields(n)
                }, function(t, n) {
                    var r;
                    return t ? e(securityKeyI18nMessage.error.NETWORK_CONNECTION) : (r = y.safelyParseJson(n.responseText), "Error" === r.status ? e(securityKeyI18nMessage.error[r.response]) : window.location.href = r.response)
                })
            }

            function u(e, t) {
                var n = {
                    disable: document.querySelector("#disable-action .modal-desc"),
                    delete: document.querySelector("#delete-action .modal-desc")
                };
                n[e] && (n[e].innerHTML = n[e].innerHTML.replace("{key}", c(t)))
            }

            function c(e) {
                return "<i>" + e + "</i>"
            }
            var l = document.querySelector(".security-key");
            if (l) {
                var m = require("../../../../public/js/common.js"),
                    y = require("../../../../public/js/utils.js"),
                    v = require("../../../../public/js/dom.js"),
                    f = require("../../../../public/js/ajax.js"),
                    g = require("../../../../public/js/forms.js"),
                    E = require("./utils"),
                    b = document.getElementById("security-key-connect"),
                    k = document.querySelector(".security-key-manage-list"),
                    p = document.getElementById("security-key-action-modal"),
                    I = document.getElementById("security-key-listen-btn"),
                    C = document.getElementById("rename-textfield"),
                    B = document.getElementById("rename-error"),
                    j = document.getElementById("modal-overlay"),
                    h = document.getElementById("modal-rename-btn"),
                    w = document.getElementById("modal-security-key-id"),
                    _ = 3e5;
                if (b && (y.isWebAuthnSupported() ? m.addEvent(I, "click", d) : function(e, t) {
                        var n = l.querySelector(".error-msg");
                        e ? (n.innerHTML = t, v.removeClass(n, "hide"), I.disabled = !0) : (v.addClass(n, "hide"), I.disabled = !1)
                    }(!0, securityKeyI18nMessage.unsupportedBrowser)), k && (k.addEventListener("click", a), p)) {
                    document.getElementById("modal-action-cancel-btn").addEventListener("click", function() {
                        s(), t()
                    })
                }
                C && m.addEvent(C, "keyup", function(e) {
                    t(), h.disabled = !e.target.value.length
                }), h && m.addEvent(h, "click", function(e) {
                    e.preventDefault(), o()
                })
            }
        }, window.jsModules.tsv_security_key_setup_main();
    }, {
        "../../../../public/js/ajax.js": 59,
        "../../../../public/js/common.js": 63,
        "../../../../public/js/dom.js": 65,
        "../../../../public/js/forms.js": 68,
        "../../../../public/js/utils.js": 77,
        "./utils": 47
    }],
    47: [function(require, module, exports) {
        window.jsModules = window.jsModules || {}, window.jsModules.tsv_security_key_setup_utils = function() {
            "use strict";

            function e(e) {
                var t = require("../../../../public/js/utils.js").decodebase64encodedData,
                    u = e;
                return u = JSON.parse(e), u.challenge = t(u.challenge), u.user && (u.user.id = t(u.user.id)), u.excludeCredentials && u.excludeCredentials.forEach(function(e) {
                    e.id = t(e.id)
                }), u
            }

            function t(e, t, u) {
                window.navigator.credentials.create({
                    publicKey: e
                }).then(function(e) {
                    return t(e)
                }).catch(function(e) {
                    u(e)
                })
            }

            function u(e, t, u, i, r) {
                var n = document.querySelector(e);
                n.credentialId.value = t, n.credentialRawId.value = u, n.credentialAttestationObject.value = i, n.credentialClientDataJSON.value = r, n.submit()
            }

            function i(e, t) {
                var u = document.querySelector(e);
                u.error.value = t, u.submit()
            }
            module.exports = {
                submitForm: u,
                submitFormWithError: i,
                formatePublicKeyData: e,
                createCredentials: t
            }
        }, window.jsModules.tsv_security_key_setup_utils();
    }, {
        "../../../../public/js/utils.js": 77
    }],
    48: [function(require, module, exports) {
        window.jsModules = window.jsModules || {}, window.jsModules.web_authn_challenge_first_factor = function() {
            "use strict";

            function e(e, t, r, n) {
                if (e) {
                    if (a.innerHTML = t, i.removeClass(s, "hide"), !d || h < 1) return w("reject"), p(n);
                    h -= 1, w("retry")
                }
            }

            function t(t) {
                return i.addClass(t.target, "active"), c(e)
            }

            function r() {
                if (!l) return c(e);
                u.addEvent(l, "click", t)
            }

            function n(e) {
                return w("retrying"), t(e)
            }
            var i = require("../../../../public/js/dom"),
                u = require("../../../../public/js/common.js"),
                o = document.getElementById("web-authn-challenge-ff");
            if (o) {
                var s = o.querySelector(".error-msg-container"),
                    a = s.querySelector(".error"),
                    l = document.getElementById("webauth-sign-in-btn"),
                    d = document.getElementById("webauth-retry-btn"),
                    c = require("./utils").getCredentials,
                    b = require("../../../../public/js/utils.js"),
                    f = document.getElementById("skip-button"),
                    g = webAuthChallengeConfig.isAndroidWebview,
                    h = webAuthChallengeConfig.retriesBeforeReject,
                    p = function(e) {
                        e = e || "credfailed", b.updateDataYlkAttribute(f, "subsec", e), f.setAttribute("value", e), "webauthnotsupported" !== e && "panotsupported" !== e || (a.innerHTML = webAuthChallengeConfig.strings.unsupportedBrowser, i.removeClass(s, "hide"), l.disabled = !0), f.click()
                    },
                    w = function(e) {
                        i.removeClasses(o, ["initial", "retrying", "retry", "reject"]), i.addClass(o, e), "retrying" !== e && i.removeClass(d, "active"), "reject" === e && (d.disabled = !0)
                    };
                return d && u.addEvent(d, "click", n), webAuthChallengeConfig.skipFidoCapabilityCheck ? r() : g ? c(e) : b.isWebAuthnSupported() ? b.isPlatformAuthenticatorSupported(function(e) {
                    return e ? r() : p("panotsupported")
                }) : p("webauthnotsupported")
            }
        }, window.jsModules.web_authn_challenge_first_factor();
    }, {
        "../../../../public/js/common.js": 63,
        "../../../../public/js/dom": 65,
        "../../../../public/js/utils.js": 77,
        "./utils": 51
    }],
    49: [function(require, module, exports) {
        window.jsModules = window.jsModules || {}, window.jsModules.web_authn_challenge_main = function() {
            "use strict";
            var e = document.getElementById("web-authn-challenge");
            if (e) {
                var s = require("./utils").getCredentials,
                    n = webAuthChallengeConfig && webAuthChallengeConfig.isAndroidWebview,
                    i = document.getElementById("webauth-retry-btn"),
                    r = document.querySelector(".instructions-list"),
                    t = require("../../../../public/js/utils.js"),
                    l = require("../../../../public/js/dom.js"),
                    d = require("../../../../public/js/common.js"),
                    o = function(s, n, t) {
                        var d = e.querySelector(".error-msg-container"),
                            o = d.querySelector(".error");
                        s ? (l.removeClass(i, "hide"), l.removeClass(i, "active"), l.addClass(r, "hide"), l.removeClass(d, "hide"), o.innerHTML = n, i.disabled = t, n === webAuthChallengeConfig.strings.unsupportedBrowser && l.addClass(i, "hide")) : (l.addClass(d, "hide"), l.addClass(i, "hide"), l.removeClass(r, "hide"))
                    };
                d.addEvent(i, "click", function() {
                    o(!1), s(o)
                }), t.isWebAuthnSupported() || n ? s(o) : o(!0, webAuthChallengeConfig.strings.unsupportedBrowser, !0)
            }
        }, window.jsModules.web_authn_challenge_main();
    }, {
        "../../../../public/js/common.js": 63,
        "../../../../public/js/dom.js": 65,
        "../../../../public/js/utils.js": 77,
        "./utils": 51
    }],
    50: [function(require, module, exports) {
        window.jsModules = window.jsModules || {}, window.jsModules.web_authn_challenge_submit_form = function() {
            module.exports.submitForm = function(e, t, a, n, l) {
                var u = document.getElementById("web-authn-challenge-form");
                u.credentialId.value = e, u.credentialRawId.value = t, u.credentialSignature.value = a, u.credentialAuthenticatorData.value = n, u.credentialClientDataJSON.value = l, u.submit()
            }
        }, window.jsModules.web_authn_challenge_submit_form();
    }, {}],
    51: [function(require, module, exports) {
        window.jsModules = window.jsModules || {}, window.jsModules.web_authn_challenge_utils = function() {
            "use strict";
            var e = document.getElementById("web-authn-challenge-form");
            if (e) {
                var n, t = webAuthChallengeConfig && webAuthChallengeConfig.isAndroidWebview,
                    a = require("./submit-form.js").submitForm,
                    i = require("../../../../public/js/poll.js"),
                    s = require("../../../../public/js/utils.js"),
                    r = function(n) {
                        var i, r = e.challengeResponse.value;
                        try {
                            r = JSON.parse(r)
                        } catch (e) {
                            return n(!0, webAuthChallengeConfig.strings.noValidKey)
                        }
                        if (i = {
                                publicKey: r
                            }, t) u(i, n);
                        else {
                            try {
                                o(i)
                            } catch (e) {
                                return n(!0, webAuthChallengeConfig.strings.noValidKey)
                            }
                            window.navigator.credentials.get(i).then(function(e) {
                                var n = s.encodeSecurityKeyCredentials(e);
                                return a(n.id, n.rawId, n.response.signature, n.response.authenticatorData, n.response.clientDataJSON)
                            }).catch(function(e) {
                                var t = e.toString();
                                e.stack && (t = e.stack.split("\n", 3).map(function(e) {
                                    return e.trim()
                                }).join(" ")), window.mbrSendError("FIDO: " + t), n(!0, webAuthChallengeConfig.strings.noValidKey)
                            })
                        }
                    },
                    o = function(e) {
                        var n = e.publicKey;
                        n.challenge = s.decodebase64encodedData(n.challenge), n.allowCredentials && n.allowCredentials.forEach(function(e) {
                            e.id = s.decodebase64encodedData(e.id)
                        })
                    },
                    l = function(e, t, i) {
                        var s;
                        if (200 === i.statusCode && i.responseText) try {
                            if (s = JSON.parse(i.responseText), "success" === s.status) {
                                n.stop();
                                var r = s.data;
                                return r.response ? a(r.id, r.rawId, r.response.signature, r.response.authenticatorData, r.response.clientDataJSON) : a(r.id, r.rawId, r.signature, r.authenticatorData, r.clientDataJSON)
                            }
                            "failed" === s.status && (n.stop(), e(!0, webAuthChallengeConfig.strings.noValidKey))
                        } catch (n) {
                            e(!0, webAuthChallengeConfig.strings.noValidKey)
                        }
                    },
                    u = function(e, t) {
                        var a = webAuthChallengeConfig.pollingParams,
                            s = function(e, n) {
                                return l(t, 0, n)
                            };
                        n = new i, n.setTimeout(webAuthChallengeConfig.pollingTimeout);
                        var r = JSON.stringify(e);
                        r = window.btoa(r), n.start("GET", webAuthChallengeConfig.pollingParams.path + "?data=" + r, a, s)
                    };
                module.exports = {
                    getCredentials: r,
                    formatData: o,
                    processResponse: l,
                    pollForSecurityKey: u
                }
            }
        }, window.jsModules.web_authn_challenge_utils();
    }, {
        "../../../../public/js/poll.js": 75,
        "../../../../public/js/utils.js": 77,
        "./submit-form.js": 50
    }],
    52: [function(require, module, exports) {
        window.jsModules = window.jsModules || {}, window.jsModules.web_authn_registration_challenge_main = function() {
            "use strict";

            function e(e, t, n, i) {
                if (e) {
                    if (!f || v < 1) return A("reject"), j(i);
                    v -= 1, A("retry")
                }
            }

            function t(e) {
                var t = C ? e : p.encodeSecurityKeyCredentials(e);
                g.credentialId.value = t.id, g.credentialRawId.value = t.rawId, g.credentialAttestationObject.value = t.response.attestationObject, g.credentialClientDataJSON.value = t.response.clientDataJSON, g.submit()
            }

            function n(n) {
                var i, r = webAuthChallengeConfig.pollingParams,
                    a = new c,
                    u = JSON.stringify(n);
                u = window.btoa(u), i = webAuthChallengeConfig.pollingParams.path + "?data=" + u;
                var l = function(n, i) {
                    var r = {};
                    if (n) return e(!0, webAuthChallengeConfig.strings.noValidKey);
                    try {
                        r = JSON.parse(i.responseText)
                    } catch (n) {
                        return e(!0, webAuthChallengeConfig.strings.noValidKey)
                    }
                    if (a.stop(), "failed" === r.status) return e(!0, webAuthChallengeConfig.strings.noValidKey);
                    t(r.data)
                };
                a.setTimeout(r.timeout), a.start("GET", i, r, l)
            }

            function i(e) {
                var i = g.challengeResponse.value;
                if (C) {
                    try {
                        i = JSON.parse(i), i.timeout = h
                    } catch (e) {}
                    return void n(i)
                }
                i = w.formatePublicKeyData(i), i.timeout = h, w.createCredentials(i, t, function() {
                    e(!0, webAuthChallengeConfig.strings.noValidKey)
                })
            }

            function r(t) {
                return o.addClass(t.target, "active"), i(e)
            }

            function a() {
                if (m && s.addEvent(m, "click", l), !b) return i(e);
                s.addEvent(b, "click", r)
            }

            function u(e) {
                return A("retrying"), r(e)
            }

            function l() {
                var e = document.getElementById("security-key-container"),
                    t = document.getElementById("webauthn-learn-more");
                o.hideElements([e]), o.showElements([t])
            }
            var o = require("../../../../public/js/dom"),
                s = require("../../../../public/js/common.js"),
                c = require("../../../../public/js/poll.js"),
                d = document.getElementById("web-authn-registration-challenge"),
                g = document.getElementById("web-authn-challenge-form");
            if (d && g) {
                var h = 3e5,
                    b = document.getElementById("webauth-sign-up-btn"),
                    f = document.getElementById("webauth-retry-btn"),
                    m = document.getElementById("webauthn-learn-more-btn"),
                    w = require("../../../tsv-security-key-setup/public/js/utils"),
                    p = require("../../../../public/js/utils.js"),
                    y = document.getElementById("skip-button"),
                    C = webAuthChallengeConfig.isAndroidWebview,
                    v = webAuthChallengeConfig.retriesBeforeReject,
                    j = function(e) {
                        e = e || "credfailed", p.updateDataYlkAttribute(y, "subsec", e), y.setAttribute("value", e), y.click()
                    },
                    A = function(e) {
                        o.removeClasses(d, ["initial", "retrying", "retry", "reject"]), o.addClass(d, e), "retrying" !== e && o.removeClass(f, "active"), "reject" === e && (f.disabled = !0)
                    };
                return f && s.addEvent(f, "click", u), webAuthChallengeConfig.skipFidoCapabilityCheck || C ? a() : p.isWebAuthnSupported() ? p.isPlatformAuthenticatorSupported(function(e) {
                    if (e) return a();
                    j("panotsupported")
                }) : j("webauthnotsupported")
            }
        }, window.jsModules.web_authn_registration_challenge_main();
    }, {
        "../../../../public/js/common.js": 63,
        "../../../../public/js/dom": 65,
        "../../../../public/js/poll.js": 75,
        "../../../../public/js/utils.js": 77,
        "../../../tsv-security-key-setup/public/js/utils": 47
    }],
    53: [function(require, module, exports) {
        window.jsModules = window.jsModules || {}, window.jsModules.yak_code_challenge_main = function() {
            var e = document.getElementById("yak-code-challenge"),
                l = require("../../../../public/js/disable-double-submit.js").initDisableDoubleSubmit;
            e && l()
        }, window.jsModules.yak_code_challenge_main();
    }, {
        "../../../../public/js/disable-double-submit.js": 64
    }],
    54: [function(require, module, exports) {
        window.jsModules = window.jsModules || {}, window.jsModules.yak_microsite_main = function() {
            "use strict";

            function e(e) {
                e.preventDefault && e.preventDefault()
            }

            function t() {
                window.onwheel = e, window.onmousewheel = document.onmousewheel = e, window.ontouchmove = e
            }

            function n() {
                window.onmousewheel = document.onmousewheel = null, window.onwheel = null, window.ontouchmove = null
            }
            var o, i, l, a, r, c, s, d, u, m, g, w, p = require("../../../../public/js/common.js"),
                y = require("../../../../public/js/dom.js"),
                f = require("../../../../public/js/utils.js"),
                v = document.getElementById("navigation-container"),
                h = "convenience",
                E = !1;
            if (d = function() {
                    window.scrollBy(0, 50), m()
                }, u = function(e, t) {
                    t = t || e && e.target.getAttribute("data-section"), e && y.containsClass(e.target, "purple-arrow") || (e && e.preventDefault(), t && t !== h && (y.replaceClass(document.getElementById(t), "hide", "show"), y.addClass(document.getElementById("progress-indication-" + t), "fill"), y.replaceClass(document.getElementById(h), "show", "hide"), y.removeClass(document.getElementById("progress-indication-" + h), "fill"), h = t))
                }, m = function() {
                    var e = a.getBoundingClientRect().top,
                        d = s.getBoundingClientRect().top,
                        u = 0,
                        m = 1,
                        g = document.querySelector(".help-container ul"),
                        w = document.getElementById("navigation-container");
                    if (e <= 40) {
                        if (y.addClass(a, "container-fixer"), o && clearInterval(o), !E) return E = !0, t(), setTimeout(n, 1e3), !1
                    } else E = !1, u = e / 100 * 10 - 90, m = e / 1e3 + .3;
                    r.style.opacity = m, c.style.opacity = m, l.style.transform = "translate(0, " + u + "px)", e < 300 && y.containsClass(g, "hide") && (y.removeClass(g, "hide"), y.removeClass(w, "hide"), y.removeClass(document.getElementById("help-phone-image"), "hide")), d <= 40 ? (y.addClass(s, "container-fixer"), i && clearInterval(i)) : u = d / 100 * 10 - 80, a.style.transform = "translate(0, " + u + "px)", d > 960 && y.removeClass(a, "container-fixer"), 0 === d && i && clearInterval(i)
                }, g = function(e) {
                    e.preventDefault(), y.containsClass(e.target, "white-arrow") ? o = setInterval(d, 25) : (y.containsClass(e.target, "purple-arrow") || y.containsClass(e.target, "play-txt") || y.containsClass(e.target, "play-icon")) && (i = setInterval(d, 25))
                }, w = function(e) {
                    var t, n = e.target.getAttribute("data-dfpurl");
                    n && (e.preventDefault(), t = document.createElement("iframe"), t.style.display = "none", t.src = n, document.body.appendChild(t), setTimeout(function() {
                        location.href = e.target.getAttribute("href")
                    }, 2e3))
                }, v) {
                l = document.getElementById("landing-container"), a = document.getElementById("help-container"), r = document.getElementById("landing-img"), c = document.getElementById("landing-content"), s = document.getElementById("info-container");
                var I = ["convenience", "security", "backup"],
                    C = I.length,
                    B = 0;
                p.addEvent(document.getElementById("play-icon"), "click", g), p.addEvent(document.getElementById("white-arrow"), "click", g), p.addEvent(document.getElementById("purple-arrow"), "click", g), p.addEvent(v, "click", u), p.addEvent(document.querySelector(".yak-microsite-setup"), "click", w), window.onscroll = m, f.swipeDetection(a, function(e) {
                    var t, n = "left" === e && (t = B + 1) < C,
                        o = "right" === e && (t = B - 1) >= 0;
                    (n || o) && (u(null, I[t]), B = t)
                })
            }
        }, window.jsModules.yak_microsite_main();
    }, {
        "../../../../public/js/common.js": 63,
        "../../../../public/js/dom.js": 65,
        "../../../../public/js/utils.js": 77
    }],
    55: [function(require, module, exports) {
        window.jsModules = window.jsModules || {}, window.jsModules.yak_opt_in_main = function() {
            "use strict";

            function e(e) {
                var n = document.getElementById("yak-opt-in-poll");
                if (n) {
                    if (s.containsClass(n, l) || s.containsClass(n, c)) return;
                    s.replaceClass(n, "polling", e)
                }
            }

            function n() {
                e(c)
            }

            function o(e) {
                var n = e.statusCode,
                    o = e.responseText;
                if ((200 === n || 202 === n) && o) try {
                    return JSON.parse(o).event
                } catch (e) {
                    return "ERROR"
                }
                return 0 === n ? "TIMEOUT" : "FAILED"
            }

            function t(t, i) {
                switch (o(i)) {
                    case "UNAUTHORIZED":
                        window.location.href = r.pressedNoUrl;
                        break;
                    case "AUTHORIZED":
                        window.location.href = r.pressedYesUrl;
                        break;
                    case "TIMEOUT":
                    case "PENDING":
                        n();
                        break;
                    case "FAILED":
                        e(l);
                        break;
                    default:
                        window.location.href = r.errorUrl
                }
            }
            var i, a = require("../../../../public/js/poll.js"),
                s = require("../../../../public/js/dom.js"),
                r = YUI_config.global.YakOptInPollingConfig,
                l = "failed",
                c = "time-out";
            r && -1 === window.location.href.indexOf("noPolling") && (r.interval = function(e) {
                return e < 6e4 ? 2e3 : 5e3
            }, i = new a, i.setTimeout(r.timeout), i.setOntimeout(n), i.start("GET", r.ajaxPollingUrl, r, t), function(e) {
                var n = document.getElementById("yak-opt-in-try-again-container"),
                    o = document.getElementById("yak-opt-in-poll");
                n && o && setTimeout(function() {
                    s.containsClass(o, l) || s.replaceClass(n, "yak-opt-in-off-screen", "display")
                }, 1e3 * e)
            }(5))
        }, window.jsModules.yak_opt_in_main();
    }, {
        "../../../../public/js/dom.js": 65,
        "../../../../public/js/poll.js": 75
    }],
    56: [function(require, module, exports) {
        (function(global) {
            (function() {
                window.jsModules = window.jsModules || {}, window.jsModules.yid_challenge_main = function() {
                    "use strict";
                    var e = document.getElementById("yid-challenge"),
                        n = document.getElementById("login-landing");
                    if (!e && !n) return !1;
                    var t, o, a = require("../../../../public/js/dom.js"),
                        i = require("../../../../public/js/common.js"),
                        r = require("../../../../public/js/social-login.js"),
                        d = require("./utils"),
                        l = require("../../../../public/js/ajax"),
                        s = require("../../../../public/js/utils.js"),
                        u = document.querySelector("#yid-challenge.phone-yid"),
                        c = document.querySelector(".next-gen #phone-reg-form"),
                        m = document.querySelector("#phone-reg-form.confirm-phone"),
                        g = require("../../../../public/js/inline-country-dropdown.js"),
                        f = /&$/;
                    if (e) {
                        var p = document.getElementById("username-country-code-field"),
                            y = document.getElementsByClassName("phone-country-code")[0],
                            h = document.getElementById("username"),
                            v = !1,
                            b = e.getElementsByClassName("error-msg")[0],
                            E = function() {
                                b && !v && (h.setAttribute("aria-invalid", "false"), a.removeClass(h, "error-border"), y && a.removeClass(y, "error-border"), a.addClass(b, "hide"), v = !0)
                            };
                        if (p && new g(p, {
                                countryCodesMap: COUNTRY_CODES_MAP,
                                inputFieldId: "username"
                            }), y && new g(y, {
                                noHide: !0,
                                inputFieldId: "username",
                                enforceCountryCodeDropDown: global.enforceCountryCodeDropDown
                            }), h && i.addEvent(h, "keypress", E), c) {
                            var k = document.getElementById("phone-reg-submit"),
                                w = document.getElementById("username"),
                                C = document.getElementById("next-gen-wait-spinner");
                            t = c, o = function(e) {
                                if (e.preventDefault(), w && 0 === w.value.length) return void t.submit();
                                var n = document.createElement("input");
                                n.type = "hidden", n.name = k.name, n.value = k.value, t.appendChild(n), a.addClass(u, "nextGenSlideOut"), setTimeout(function() {
                                    C && (C.style.display = "inline-block"), t.submit()
                                }, 1e3)
                            }, i.addEvent(t, "submit", o)
                        } else if (m && jsMessages) {
                            t = m;
                            var T = document.getElementById("phone-reg-submit"),
                                I = t.querySelector(".ureg-sign-in"),
                                D = e.querySelector("h2"),
                                j = t.querySelector(".phone-reg-confirm-message"),
                                B = !1;
                            o = function(e) {
                                if (h.value && h.value.trim() && !B) try {
                                    return e.preventDefault(), a.addClass(T, "puree-spinner-button"), a.addClass(I, "hide"), a.removeClass(j, "hide"), T.innerText = jsMessages.CTA_CONTINUE, D.innerText = jsMessages.PROGREG_CONFIRM_PHONE_TITLE, B = !0, !1
                                } catch (e) {}
                            }, i.addEvent(t, "submit", o)
                        }
                    }
                    if (n) {
                        var O = document.getElementById("username-country-code-field"),
                            S = global.currentURL,
                            q = document.getElementById("login-username"),
                            N = document.getElementById("domain-auto-fill"),
                            R = document.getElementById("login-signin"),
                            _ = document.getElementById("login-username-form"),
                            M = document.getElementById("mbr-forgot-link"),
                            x = document.getElementById("learn-more-link");
                        if (i.addEvent(_, "click", function(e) {
                                var n = e.target;
                                switch (n.tagName) {
                                    case "A":
                                        break;
                                    case "INPUT":
                                    case "BUTTON":
                                        if ("submit" !== n.getAttribute("type")) return;
                                        window.lastClickedSubmitButton = n;
                                        break;
                                    default:
                                        return
                                }
                            }), i.addEvent(_, "submit", function(e) {
                                return d.submitFormbyAjax(e, _)
                            }), q && (i.addEvent(q, "keyup", function() {
                                d.checkOauthJapan(q.value), N && s.handleDomainAutoComplete(q.value, N, R)
                            }), N && s.addAutoDomainCompleteClickAndEnterEvent(i, N, q, R), O && "email" !== q.getAttribute("type") && new g(O, {
                                inputFieldId: "login-username",
                                interactiveFormatting: !0,
                                countryCodesMap: COUNTRY_CODES_MAP
                            })), M && i.addEvent(M, "click", function(e) {
                                var n, t;
                                q && q.value && (e.preventDefault(), n = e.target.getAttribute("href"), t = "username=" + encodeURIComponent(q.value), -1 === n.indexOf("?") ? n += "?" + t : n += "&" + t, document.location.href = n)
                            }), r.initialize(global), q && d.checkOauthJapan(q.value), x) {
                            var A = document.getElementById("learn-more-modal"),
                                P = document.querySelector(".learn-more-modal .learn-more-ok");
                            i.addEvent(x, "click", function(e) {
                                e.stopPropagation(), e.preventDefault(), a.addClass(A, "show")
                            }), i.addEvent(P, "click", function(e) {
                                e.preventDefault(), e.stopPropagation(), a.removeClass(A, "show")
                            })
                        }
                        if (global.loginLandingData && global.loginLandingData.isTrustTokenIssuanceEnabled && window.fetch) {
                            var L = location.origin;
                            fetch("/.well-known/trust-token/issuance", {
                                method: "POST",
                                trustToken: {
                                    type: "token-request",
                                    issuer: L
                                },
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    pbit: global.loginLandingData.pbit
                                })
                            }).then(function() {
                                console.info("token issued!!!")
                            })
                        }
                        if (global.loginLandingData && global.loginLandingData.isTrustTokenRedemtionEnabled && window.fetch && document.hasTrustToken) {
                            var L = global.loginLandingData.trustTokenIssuer;
                            document.hasTrustToken(L).then(function() {
                                try {
                                    console.info("Redemtion Started!"), fetch(L + "/.well-known/trust-token/redemption", {
                                        method: "POST",
                                        trustToken: {
                                            type: "token-redemption",
                                            issuer: L,
                                            refreshPolicy: "none"
                                        }
                                    }).then(function() {
                                        console.info("Redemtion done!"), fetch("/.well-known/trust-token/send-rr", {
                                            method: "POST",
                                            headers: new Headers({
                                                "Signed-Headers": "sec-redemption-record, sec-time"
                                            }),
                                            trustToken: {
                                                type: "send-redemption-record",
                                                issuers: [L],
                                                refreshPolicy: "refresh",
                                                includeTimestampHeader: !0,
                                                signRequestData: "include",
                                                additionalSigningData: "additional_signing_data"
                                            }
                                        }).then(function(e) {
                                            return e.json()
                                        }).then(function(e) {
                                            e.sig_verify ? console.info("send RR Finished!") : console.info("send RR Failed!")
                                        })
                                    }).catch(function(e) {
                                        console.info(e)
                                    })
                                } catch (e) {
                                    console.info(e)
                                }
                            })
                        }
                        S.indexOf("aembed=1") > -1 && i.addEvent(document, "DOMContentLoaded", function() {
                            var e = S.replace("aembed=1", "").replace("&&", "&").replace("?&", "?").replace(f, "");
                            R.disabled = !0, (new l).send("GET", e, function(n, t) {
                                var o, a, i;
                                try {
                                    if (o = JSON.parse(t.responseText), o.location) return void(global.location.href = o.location);
                                    a = document.getElementsByName("sessionIndex")[0], i = document.getElementsByName("acrumb")[0], a.value = o.challengeData.data.sessionIndex, i.value = o.challengeData.data.acrumb
                                } catch (n) {
                                    return void(global.location.href = e)
                                }
                                R.disabled = !1
                            })
                        })
                    }
                }, window.jsModules.yid_challenge_main();
            }).call(this)
        }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

    }, {
        "../../../../public/js/ajax": 59,
        "../../../../public/js/common.js": 63,
        "../../../../public/js/dom.js": 65,
        "../../../../public/js/inline-country-dropdown.js": 70,
        "../../../../public/js/social-login.js": 76,
        "../../../../public/js/utils.js": 77,
        "./utils": 57
    }],
    57: [function(require, module, exports) {
        (function(global) {
            (function() {
                window.jsModules = window.jsModules || {}, window.jsModules.yid_challenge_utils = function() {
                    function e(e, o) {
                        var t, n = document.getElementById("login-username");
                        try {
                            t = JSON.parse(o.responseText)
                        } catch (e) {
                            return u = !1, void(a = !1)
                        }
                        if (t.location) return void(global.location.href = t.location);
                        a = !1, r(t, "username-error", "login-username"), n && n.focus()
                    }

                    function r(e, r, t) {
                        var n, i = document.getElementById(r),
                            l = document.getElementById(t);
                        i && e && e.error && (i.setAttribute("data-error", e.error), (n = e.errorMsg) && ("messages.ERROR_INVALID_COOKIE" === e.error && e.cookieHelpUrl && (n += ' <a href="' + e.cookieHelpUrl + '">' + e.cookieHelpTextMsg + "</a>"), i.innerHTML = n.replace(s, " $1"), o.removeClass(i, "hide"), l && o.addClass(l, "field-error")))
                    }
                    var o = require("../../../../public/js/dom.js"),
                        t = require("../../../../public/js/utils.js"),
                        n = require("../../../../public/js/ajax"),
                        i = require("../../../../public/js/forms.js"),
                        l = /email=[^&#]*/,
                        s = /[\s]([\w]+[.,!:;\\"\-?]{0,1})$/;
                    module.exports.checkOauthJapan = function(e) {
                        var r, n = document.getElementById("oauth-notice"),
                            i = document.getElementById("oauth-notice-link");
                        n && (a = !1, o.replaceClass(n, "show", "hide"), (t.endsWith(e, "@yahoo.co.jp") || t.endsWith(e, "@ybb.ne.jp")) && (a = !0, i && (r = i.getAttribute("href"), r = t.cleanUpUrl(r.replace(l, "")) + "&email=" + encodeURIComponent(e), i.setAttribute("href", r)), o.replaceClass(n, "hide", "show")))
                    };
                    var a = !1,
                        u = !0;
                    module.exports.submitFormbyAjax = function(r) {
                        if (a) return void r.preventDefault();
                        if ("on" === t.getAdBlockerState() || !u) return void(a = !0);
                        r.preventDefault(), a = !0;
                        var o = new n,
                            l = window.location.search;
                        o.send("POST", l, {
                            body: i.serializeFormFieldsValues(r)
                        }, e)
                    }
                }, window.jsModules.yid_challenge_utils();
            }).call(this)
        }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

    }, {
        "../../../../public/js/ajax": 59,
        "../../../../public/js/dom.js": 65,
        "../../../../public/js/forms.js": 68,
        "../../../../public/js/utils.js": 77
    }],
    58: [function(require, module, exports) {
        window.jsModules = window.jsModules || {}, window.jsModules.yid_challenge_vz_progress_bar = function() {
            "use strict";
            if (document.querySelector(".login-vz-progress-bar")) {
                var e = require("../../../../public/js/ajax"),
                    n = require("../../../../public/js/forms.js"),
                    o = require("../../../../public/js/dom.js"),
                    t = require("../../../../public/js/common.js"),
                    i = /^[+][0-9]*$/,
                    r = 1e3;
                ! function(s) {
                    function u() {
                        var t = function(e) {
                                d && d.setAttribute("style", "width: " + e)
                            },
                            u = function() {
                                if (a) return void o.removeClass(a, "hide");
                                s.location.href = f
                            },
                            g = function(e, n) {
                                var o;
                                try {
                                    o = JSON.parse(n.responseText)
                                } catch (e) {}
                                if (o.location) return void(s.location.href = o.location);
                                u()
                            },
                            v = function() {
                                s.setTimeout(function() {
                                    t("50%"), (new e).send("POST", m, {
                                        body: n.serializeFormFields(c)
                                    }, g)
                                }, r)
                            };
                        if (!l) return void u();
                        !l.value && s.getProgRegPhoneAccounts ? (t("15%"), s.setTimeout(function() {
                            (new e).send("GET", s.getProgRegPhoneAccounts, {}, function(e, n) {
                                var o;
                                try {
                                    o = JSON.parse(n.responseText)
                                } catch (e) {}
                                if (o && o.phone && o.phone.match(i) && (l.value = o.phone), l.value) return t("30%"), void v();
                                u()
                            })
                        }, r)) : (t("25%"), v())
                    }
                    var c = document.getElementById("login-username-form"),
                        d = document.getElementById("vz-pbar"),
                        a = document.getElementById("vz-error"),
                        l = document.getElementById("login-username"),
                        m = s.location.href,
                        f = s.dismissURL;
                    c && o.containsClass(c, "login-imp-pbui-pbar") && t.addEvent(document, "DOMContentLoaded", function() {
                        u()
                    })
                }(window)
            }
        }, window.jsModules.yid_challenge_vz_progress_bar();
    }, {
        "../../../../public/js/ajax": 59,
        "../../../../public/js/common.js": 63,
        "../../../../public/js/dom.js": 65,
        "../../../../public/js/forms.js": 68
    }],
    59: [function(require, module, exports) {
        "use strict";

        function Ajax() {
            if (!(this instanceof Ajax)) return new Ajax
        }
        Ajax.prototype.setTimeout = function(t) {
            this._timeout = t
        }, Ajax.prototype.setOntimeout = function(t) {
            this._ontimeout = t
        }, Ajax.prototype.setRequestHeader = function(t, e) {
            this._xhr.setRequestHeader(t, e)
        }, Ajax.prototype.sendCredentialsCrossOrigin = function() {
            this._enableCORS = !0
        }, Ajax.prototype.call = function(t, e, o, n) {
            this.send(t, e, o, function(t, e) {
                n(e.statusCode, e.responseText)
            })
        }, Ajax.prototype.buildPostData = function(t) {
            var e, o = [];
            for (e in t) t.hasOwnProperty(e) && o.push(encodeURIComponent(e) + "=" + encodeURIComponent(t[e]));
            return o.join("&")
        }, Ajax.prototype.isNetworkError = function(t) {
            return !t.statusCode
        }, Ajax.prototype.isServerError = function(t) {
            return 200 !== t.statusCode
        }, Ajax.prototype.isCORSSupported = function() {
            return "withCredentials" in new XMLHttpRequest
        }, Ajax.prototype.send = function(t, e, o, n) {
            this._xhr = new XMLHttpRequest;
            var r, s, i = this;
            if ("function" == typeof o && (n = o, o = {}), s = o.delay, r = o.body, s) return delete o.delay, void setTimeout(function() {
                i.send(t, e, o, n)
            }, s);
            YUI_config.global.appInternalParams && (e.includes(YUI_config.global.appInternalParams) || (e = e + (e.includes("?") ? "&" : "?") + YUI_config.global.appInternalParams)), this._xhr.open(t, e, !0), this._timeout && (this._xhr.timeout = this._timeout), this._ontimeout && (this._xhr.ontimeout = this._ontimeout), this._enableCORS && (this._xhr.withCredentials = !0), o.long && this._xhr.setRequestHeader("long-polling", "true"), o.userAgent && this._xhr.setRequestHeader("User-Agent", o.userAgent), "POST" === t && "multipart/form-data" !== o.format && this._xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded; charset=UTF-8"), this._xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"), this._xhr.onreadystatechange = function() {
                if (4 === i._xhr.readyState) {
                    var t = {
                        statusCode: i._xhr.status,
                        responseText: i._xhr.responseText
                    };
                    return o.format && "multipart/form-data" === o.format && (t.responseXML = i._xhr.responseXML), void n(null, t)
                }
            }, this._xhr.send(r)
        }, module.exports = Ajax;
    }, {}],
    60: [function(require, module, exports) {

    }, {}],
    61: [function(require, module, exports) {
        function updateBrowserURL(t) {
            return window.history && window.history.pushState && window.history.pushState(null, document.title, t)
        }
        module.exports = {
            updateBrowserURL: updateBrowserURL
        };
    }, {}],
    62: [function(require, module, exports) {
        "use strict";
        var ONE_SECOND = 1e3,
            MAX_RETRY = 3;
        module.exports = {
            browserSupportComet: function() {
                return !("XDomainRequest" in window)
            },
            startComet: function(t, e) {
                function n() {
                    o.unsubscribe(t), o.disconnect()
                }

                function u(t) {
                    var u;
                    t && t.data && t.data.state && (u = t.data.state, "unauthorized" !== u && "authorized" !== u || n(), e && e(u))
                }

                function i(e) {
                    !e.successful && r < MAX_RETRY && (setTimeout(function() {
                        o.subscribe(t, u)
                    }, ONE_SECOND), r += 1)
                }

                function s(e) {
                    e.successful ? (o.addListener("/meta/subscribe", i), o.subscribe(t, u)) : c < MAX_RETRY && (setTimeout(function() {
                        o = initComet(COMET_URL, s)
                    }, ONE_SECOND), c += 1)
                }
                var o, c = 0,
                    r = 0;
                t && (o = initComet(COMET_URL, s))
            }
        };
    }, {}],
    63: [function(require, module, exports) {
        "use strict";

        function setButtonToActive(e) {
            dom.addClass(e.target, "active")
        }

        function addClickEventListenerToAllPureeActionButtons() {
            for (var e = document.querySelectorAll(".puree-spinner-button"), t = 0, o = e.length; t < o; t += 1) e[t].addEventListener("click", setButtonToActive)
        }

        function processInputGroupFields() {
            var e, t = document.querySelectorAll(".input-group input"),
                o = 0,
                n = function(e) {
                    var t, o = dom.ancestor(e.target, ".input-group");
                    e.target.value ? (dom.addClass(e.target, "used"), dom.addClass(o, "used")) : (dom.removeClass(e.target, "used"), t = Array.prototype.slice.call(o.getElementsByTagName("input"), 0), t.some(function(e) {
                        return dom.containsClass(e, "used")
                    }) || dom.removeClass(o, "used"))
                };
            for (o = 0; o < t.length; o += 1) e = t[o], n({
                target: e
            }), events.addEvent(e, "blur", n)
        }

        function errorFieldHandler(e, t) {
            t.setAttribute("aria-invalid", "false"), dom.removeClass(t, "error-border"), e && dom.addClass(e, "hide")
        }

        function trackRapidElements() {
            if ("undefined" != typeof rapidInstance) {
                var e = document.querySelectorAll('[data-rapid-tracking="true"]');
                Array.prototype.forEach.call(e, function(e) {
                    var t;
                    switch (e.tagName) {
                        case "INPUT":
                        case "SELECT":
                            t = "focus";
                            break;
                        default:
                            t = "click"
                    }
                    events.addEvent(e, t, function(e) {
                        var o = e.currentTarget;
                        utils.rapidBeaconClick(t, utils.parseDataYlk(o.getAttribute("data-ylk")))
                    })
                })
            }
        }
        var dom = require("./dom"),
            utils = require("./utils");
        document.addEventListener("touchstart", function() {}, !1), addClickEventListenerToAllPureeActionButtons();
        var events = {
            addEvent: function(e, t, o) {
                document.addEventListener ? e.addEventListener(t, o) : document.attachEvent && e.attachEvent("on" + t, o)
            },
            removeEvent: function(e, t, o) {
                document.removeEventListener ? e.removeEventListener(t, o) : document.detachEvent && e.detachEvent("on" + t, o)
            },
            fireOnChange: function(e) {
                if ("createEvent" in document) {
                    var t = document.createEvent("HTMLEvents");
                    t.initEvent("change", !1, !0), e.dispatchEvent(t)
                } else e.fireEvent("onchange")
            },
            isTouchEnabled: function() {
                return "ontouchstart" in window || "msmaxtouchpoints" in window.navigator
            },
            smartEvent: function(e) {
                if (!this.isTouchEnabled()) return e;
                switch (e) {
                    case "mousedown":
                        return "touchstart";
                    case "mousemove":
                        return "touchmove";
                    case "mouseup":
                        return "touchend";
                    case "mouseleave":
                        return "touchcancel";
                    default:
                        return e
                }
            }
        };
        events.addEvent(document, "DOMContentLoaded", function() {
            var e = document.body || document.getElementsByTagName("body")[0];
            e && events.addEvent(e, "DOMContentLoaded", function(e) {
                var t = e.target.classList;
                t.contains("js-link-feedback") && t.add("link-clicked")
            });
            var t = document.documentElement;
            if (isIOSDevice && t.classList.contains("grid")) {
                var o = window.getComputedStyle(t).getPropertyValue("font-size"),
                    n = window.getComputedStyle(e).getPropertyValue("font-size");
                o = Number(o.substring(0, o.indexOf("px"))), n = Number(n.substring(0, n.indexOf("px"))), n > o && (t.style.fontSize = n + "px", t.classList.add("accessible"))
            }
            try {
                trackRapidElements()
            } catch (e) {}
        });
        var stickyBottom = document.querySelector(".bottom-sticky");
        if (document.documentElement.classList.contains("grid") && stickyBottom && stickyBottom.previousElementSibling) {
            var debounceScrollTimer, setShadowForStickyBottom = function() {
                var e = stickyBottom.getBoundingClientRect(),
                    t = stickyBottom.previousElementSibling.getBoundingClientRect();
                t.y + t.height > e.y ? dom.addClass(stickyBottom, "sticky-shadow") : dom.removeClass(stickyBottom, "sticky-shadow")
            };
            setShadowForStickyBottom(), events.addEvent(document, "scroll", function() {
                debounceScrollTimer && clearTimeout(debounceScrollTimer), debounceScrollTimer = setTimeout(setShadowForStickyBottom, 200)
            })
        }
        var body = document.body,
            vzBottom = document.querySelector(".vznativemail .vz-challenge .bottom-container");
        if (body && vzBottom) {
            var setShadowForVzNativeApp = function() {
                var e = body.scrollHeight - 1,
                    t = body.offsetHeight + Math.max(parseInt(body.scrollTop), parseInt(window.pageYOffset - 1)),
                    o = dom.containsClass(vzBottom, "shadow");
                t < e ? !o && dom.addClass(vzBottom, "shadow") : o && dom.removeClass(vzBottom, "shadow")
            };
            setShadowForVzNativeApp(), events.addEvent(body, "scroll", setShadowForVzNativeApp), events.addEvent(window, "resize", setShadowForVzNativeApp)
        }
        processInputGroupFields(),
            function() {
                var e = document.querySelector(".authorize-session-info .device-info");
                if (document.querySelector && e) {
                    var t = document.querySelector(".authorize-session-info"),
                        o = t.previousElementSibling;
                    if (t && o && t.getBoundingClientRect) {
                        var n = o.getBoundingClientRect();
                        if (t.getBoundingClientRect().top - n.bottom < 0) return void dom.addClass(e, "hide")
                    }
                    dom.removeClass(e, "hide")
                }
            }(), window.mbrJSLoaded = !0, module.exports = events, module.exports.errorFieldHandler = errorFieldHandler;
    }, {
        "./dom": 65,
        "./utils": 77
    }],
    64: [function(require, module, exports) {
        "use strict";

        function setFormButtonDisabled(t) {
            var e = forceDisableSubmitButton || t.target,
                n = e && Dom.ancestor(e, "form") || t.currentTarget,
                u = n.querySelectorAll('input[data-name="alt-submit"]')[0];
            return u || (u = document.createElement("input"), u.setAttribute("type", "hidden"), u.setAttribute("data-name", "alt-submit"), n.appendChild(u)), forceDisableSubmitButton && !submitButton && (u.setAttribute("name", forceDisableSubmitButton.name), u.setAttribute("value", forceDisableSubmitButton.value), submitButton = forceDisableSubmitButton), t.type === tapEvent && t.target && "submit" === t.target.type && (u.setAttribute("name", t.target.name), u.setAttribute("value", t.target.value), submitButton = t.target), "submit" === t.type && submitButton && (submitButton.disabled = !0), !0
        }

        function setFormButtonEnabled(t) {
            var e, n, u = t.querySelectorAll('input[data-name="alt-submit"]')[0],
                i = t.querySelectorAll("*[type=submit]"),
                r = i.length;
            if (u)
                for (e = u.getAttribute("name"), t.removeChild(u), n = 0; n < r; n += 1) e === i[n].getAttribute("name") && (i[n].disabled = !1, Dom.removeClass(i[n], "active"))
        }

        function disableSubmitOnEnter(t) {
            isEnterPressed && (t.preventDefault(), t.stopPropagation()), 13 !== t.keyCode && 10 !== t.keyCode || (isEnterPressed = !0)
        }
        var Event = require("./common.js"),
            Dom = require("./dom.js"),
            submitButton, isEnterPressed = !1,
            forceDisableSubmitButton, tapEvent = "ontouchstart" in document.documentElement ? "touchstart" : "click";
        exports.initDisableDoubleSubmit = function(t) {
            var e = document.querySelectorAll(t && t.formSelector || ".pure-form"),
                n = 0,
                u = e.length;
            if (e) {
                t = t || {};
                var i = t.disableEnterKey;
                for (forceDisableSubmitButton = t.forceDisableSubmitButton; n < u; n += 1) i || Event.addEvent(e[n], "keydown", disableSubmitOnEnter), Event.addEvent(e[n], tapEvent, setFormButtonDisabled), Event.addEvent(e[n], "submit", setFormButtonDisabled);
                Event.addEvent(window, "pageshow", function(t) {
                    if (t.persisted)
                        for (isEnterPressed = !1, n = 0; n < u; n += 1) setFormButtonEnabled(e[n])
                })
            }
        }, exports.initDisableDoubleSubmit({
            formSelector: ".prevent-double-submit"
        });
    }, {
        "./common.js": 63,
        "./dom.js": 65
    }],
    65: [function(require, module, exports) {
        "use strict";
        module.exports = {
            getFirstElementByName: function(e) {
                var s = document.getElementsByName(e);
                return s && s.length ? s[0] : null
            },
            getFirstElementValueByName: function(e) {
                var s = this.getFirstElementByName(e);
                if (s) return s.getAttribute("value")
            },
            unEscapeText: function(e) {
                var s = document.createElement("textarea");
                return s.innerHTML = e, s.value.replace(/^\s+|\s+$/gm, "")
            },
            createElementWithString: function(e) {
                var s = document.createElement("div");
                return s.innerHTML = this.unEscapeText(e), s.firstChild
            },
            containsClass: function(e, s) {
                return "classList" in e ? e.classList.contains(s) : new RegExp("(?:^|\\s+)" + s + "(?:\\s+|$)").test(e.className)
            },
            cloneNode: function(e) {
                var s = e.cloneNode(!0);
                return e.parentNode.replaceChild(s, e), e = s
            },
            addClass: function(e, s) {
                if (!this.containsClass(e, s))
                    if ("classList" in e) e.classList.add(s);
                    else {
                        var t = e.className;
                        e.className = t ? [t, s].join(" ") : s
                    }
            },
            removeClass: function(e, s) {
                if (this.containsClass(e, s))
                    if ("classList" in e) e.classList.remove(s);
                    else {
                        var t = e.className;
                        e.className = t.replace(new RegExp("(?:^|\\s+)" + s + "(?:\\s+|$)", "g"), "")
                    }
            },
            removeClasses: function(e, s) {
                for (var t in s) this.removeClass(e, s[t])
            },
            hideElements: function(e) {
                for (var s in e) this.addClass(e[s], "hide")
            },
            showElements: function(e) {
                for (var s in e) this.removeClass(e[s], "hide")
            },
            replaceClass: function(e, s, t) {
                var a = e.className;
                this.containsClass(e, s) && ("classList" in e ? e.classList.remove(s) : a = a.replace(new RegExp("(?:^|\\s+)" + s + "(?:\\s+|$)", "g"), "")), "classList" in e ? e.classList.add(t) : e.className = a ? [a, t].join(" ") : t
            },
            ancestor: function(e, s) {
                for (var t = e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector; e;) {
                    if (t.call(e, s)) return e;
                    e = e.parentElement
                }
                return !1
            },
            toggleElementDisplay: function(e, s) {
                var t;
                s = s || "show", t = "hide" === s ? "show" : "hide", this.replaceClass(e, t, s)
            }
        };
    }, {}],
    66: [function(require, module, exports) {
        "use strict";
        var addDataList = function(n, t, e) {
                var i, a = "",
                    r = t;
                for (i = 0; i < r.length; i += 1) a += "<option value='" + n + "@" + r[i] + "'>";
                e.innerHTML = a
            },
            updateDataList = function(n, t, e) {
                var i;
                for (i = 0; i < t.length; i += 1)
                    if (n === t[i]) return e.innerHTML = ""
            },
            emailDomainSuggestions = function(n, t, e) {
                var i = require("./common.js");
                n && t && i.addEvent(n, "keyup", function(n) {
                    var i, a, r = n.target.value;
                    if (-1 !== r.indexOf("@")) {
                        if (i = r.split("@")[0], a = r.split("@")[1], a.length < 1) return t.innerHTML = "";
                        "" === t.innerHTML ? addDataList(i, e, t) : updateDataList(a, e, t)
                    } else t.innerHTML = ""
                })
            };
        module.exports = emailDomainSuggestions;
    }, {
        "./common.js": 63
    }],
    67: [function(require, module, exports) {
        "use strict";
        var FingerPrint = require("fingerprintjs2"),
            initFP = function(e) {
                var n = {
                        screen: {
                            detectScreenOrientation: !1
                        },
                        excludes: {
                            userAgent: !0,
                            enumerateDevices: !0,
                            fontsFlash: !0
                        }
                    },
                    t = function(e) {
                        var n, t, i, r, s = {};
                        for (n = 0; n < e.length; n += 1) t = e[n], i = t.key, r = t.value, "boolean" == typeof r && (r = r ? 1 : 0), s[i] = r;
                        return s
                    };
                FingerPrint.getV18(n, function(n, i) {
                    var r, s, a, o, l = t(i);
                    s = l.screenResolution.split(";"), a = l.availableScreenResolution.split(";"), l.resolution = {
                        w: s[0],
                        h: s[1]
                    }, delete l.screenResolution, l.availableResolution = {
                        w: a[0],
                        h: a[1]
                    }, delete l.availableScreenResolution, o = l.touchSupport.split(";"), l.touchSupport = {
                        points: parseInt(o[0]),
                        event: "true" === o[1] ? 1 : 0,
                        start: "true" === o[2] ? 1 : 0
                    };
                    var u = l.plugins;
                    l.plugins = {
                        count: u.length,
                        hash: FingerPrint.x64hash128(u.sort().join("~~~"), 31)
                    }, l.webgl = l.webgl ? 1 : 0;
                    var c = l.fonts.split(";");
                    l.fonts = {
                        count: c.length,
                        hash: FingerPrint.x64hash128(c.sort().join("~~~"), 31)
                    }, l.canvas = l.canvas.split(" "), l.canvas.pop(), l.canvas = l.canvas.join(" "), "undefined" != typeof challenge && void 0 !== challenge.servingStamp && (r = challenge.servingStamp), l.ts = {
                        serve: r,
                        render: (new Date).getTime()
                    }, window.asdkFingerprint && "function" == typeof window.asdkFingerprint && (l.asdk = window.asdkFingerprint()), e(l)
                })
            },
            browserFPField = document.getElementById("browser-fp-data");
        browserFPField && initFP(function(e) {
            try {
                var n = JSON.stringify(e);
                browserFPField.value = n
            } catch (e) {}
        });
    }, {
        "fingerprintjs2": 1
    }],
    68: [function(require, module, exports) {
        "use strict";

        function getFieldValue(e) {
            var t, i, s;
            if (e.name && !e.disabled) switch (i = encodeURIComponent(e.name) + "=", s = encodeURIComponent(e.value), e.type) {
                case "select-one":
                    return e.selectedIndex > -1 && (t = e.options[e.selectedIndex], i + encodeURIComponent(t.attributes.value && t.attributes.value.specified ? t.value : t.text));
                case "radio":
                case "checkbox":
                    if (e.checked) return i + s;
                case "select-multiple":
                case "file":
                case "reset":
                case "button":
                case void 0:
                    return !1;
                case "submit":
                    if (e !== window.lastClickedSubmitButton) return !1;
                default:
                    return i + s
            }
            return !1
        }

        function serializeFormFieldsValues(e) {
            return serializeFormFields(e.target)
        }

        function serializeFormFields(e) {
            var t, i, s = [],
                l = e && e.elements.length || 0;
            for (i = 0; i < l; i += 1)(t = getFieldValue(e.elements[i])) && s.push(t);
            return s.join("&")
        }
        module.exports = {
            getFieldValue: getFieldValue,
            serializeFormFields: serializeFormFields,
            serializeFormFieldsValues: serializeFormFieldsValues
        };
    }, {}],
    69: [function(require, module, exports) {
        var events = require("./common"),
            dom = require("./dom"),
            challenge = document.querySelector(".challenge"),
            btnSeeMore = document.querySelector(".challenge .btn-see-more");
        challenge && btnSeeMore && events.addEvent(btnSeeMore, "click", function() {
            dom.addClass(challenge, "show-more")
        });
        var placeHolderShownSelector = ".form-input-container input:not(:placeholder-shown) ~ label",
            isPlaceHolderShownSupported = !1;
        try {
            isPlaceHolderShownSupported = document.querySelector(placeHolderShownSelector)
        } catch (e) {
            isPlaceHolderShownSupported = !1
        }
        if (!isPlaceHolderShownSupported) {
            var inputGroupFields = document.querySelectorAll(".form-input-container input"),
                inputField, i = 0;
            for (i = 0; i < inputGroupFields.length; i += 1) inputField = inputGroupFields[i], events.addEvent(inputField, "blur", function(e) {
                e.target.value ? dom.addClass(inputField, "used") : dom.removeClass(inputField, "used")
            })
        }
        var cardListWithMenu = document.querySelector(".card-list.has-menu");
        if (cardListWithMenu) {
            var allCheckboxes = cardListWithMenu.querySelectorAll('input[type="checkbox"]');
            events.addEvent(document.body, "click", function(e) {
                var t = e.target;
                allCheckboxes.forEach(function(e) {
                    e !== t && e.id !== t.getAttribute("for") && (e.checked = !1)
                })
            })
        }
    }, {
        "./common": 63,
        "./dom": 65
    }],
    70: [function(require, module, exports) {
        "use strict";

        function InlineCountryDropDown(o, e) {
            var t = this;
            this.rootNode = "string" == typeof o ? document.getElementById(o) : o, void 0 !== this.rootNode && (this.countryDropDownCont = this.rootNode.getElementsByClassName("country-dropdown-container")[0], this.buildOptions(e), this.countryDropDown = this.countryDropDownCont.getElementsByTagName("select")[0], this.selectedCountryCodeCont = this.rootNode.getElementsByClassName("selected-country-code-cont")[0], this.selectedCountryCodeElem = this.selectedCountryCodeCont.getElementsByClassName("selected-country-code")[0], this.dropDownArrow = this.selectedCountryCodeCont.getElementsByClassName("arrow")[0], this.selectedCountryCode = this.countryDropDown.options[this.countryDropDown.selectedIndex].getAttribute("data-code"), this.inputBox = this.rootNode.getElementsByClassName("phone-no")[0], this.inputFieldIcon = this.rootNode.getElementsByClassName(".input-field-icon")[0], this.dropDownEnabled = !!this.isDropDownHideDisabled, this.inputFieldIcon = document.getElementById("username-field-icon"), this.emailFieldTip = document.getElementById("email-field-tip"), this.phoneFieldTip = document.getElementById("phone-field-tip"), this.installListeners(), this.disableCountryDropDownInteractionForSingleItem(), setTimeout(function() {
                t.updateInputField(null, t.interactiveFormatting)
            }, 1e3))
        }
        var events = require("./common.js"),
            phoneNumberFormatter = require("./phone.js"),
            phoneNumberRegex = /[^+(\-) 0-9]+/g,
            digitsLengthClassRegex = /code-of-length-\d/gi,
            dom = require("./dom.js");
        InlineCountryDropDown.prototype.updateInputField = function(o, e) {
            var t = this.inputBox.value.replace(/\u202C|\u202D/g, ""),
                n = !t.match(phoneNumberRegex);
            if (this.updateInputFieldIcon(n), this.updateInputFieldTip(n), !this.enforceCountryCodeDropDown && (!n || t.length < this.showCountryCodeDropDownLength || "+" === t.charAt(0) && t.length < 6)) return this.dropDownEnabled && !this.isDropDownHideDisabled && this.disableCountryDropDown(), !1;
            this.dropDownEnabled || this.enableCountryDropDown(), n && (this.inputBox.value = this.stripCountryCodeFromPhoneNumber(t, this.selectedCountryCode), e && phoneNumberFormatter(o, this.inputBox, this.selectedCountryCodeElem, this.countryDropDown))
        }, InlineCountryDropDown.prototype.buildOptions = function(o) {
            o && (this.isDropDownHideDisabled = o.noHide, this.countryCodesMap = o.countryCodesMap, this.enforceCountryCodeDropDown = o.enforceCountryCodeDropDown, this.interactiveFormatting = o.interactiveFormatting, this.showCountryCodeDropDownLength = o.showCountryCodeDropDownLength ? o.showCountryCodeDropDownLength : 5)
        }, InlineCountryDropDown.prototype.installListeners = function() {
            var o = this;
            events.addEvent(this.countryDropDown, "change", function(e) {
                var t, n = o.rootNode.className;
                o.selectedCountryCode = o.countryDropDown.options[o.countryDropDown.selectedIndex].getAttribute("data-code"), t = o.selectedCountryCode.length, n = n.replace(digitsLengthClassRegex, ""), n += " code-of-length-" + (t - 1), o.rootNode.className = n, phoneNumberFormatter(e, o.inputBox, o.selectedCountryCodeElem, o.countryDropDown)
            }), events.addEvent(this.inputBox, "keyup", function(e) {
                o.updateInputField(e, o.interactiveFormatting)
            }), events.addEvent(this.inputBox, "change", function(e) {
                o.updateInputField(e, !0)
            })
        }, InlineCountryDropDown.prototype.setDropDownValue = function(o) {
            for (var e in this.countryDropDown.options)
                if (this.countryDropDown.options.hasOwnProperty(e) && this.countryDropDown.options[e].value === o) return this.countryDropDown.options[e].selected = !0, void events.fireOnChange(this.countryDropDown)
        }, InlineCountryDropDown.prototype.stripCountryCodeFromPhoneNumber = function(o, e) {
            var t, n;
            if ("+" === o.charAt(0)) {
                if (!this.countryCodesMap) return o.replace(e, "");
                for (n in this.countryCodesMap)
                    if (t = this.countryCodesMap[n], 0 === o.indexOf(t)) return t !== e && this.setDropDownValue(n), o.substring(t.length, o.length)
            }
            return o
        }, InlineCountryDropDown.prototype.enableCountryDropDown = function() {
            this.dropDownEnabled = !0, dom.replaceClass(this.rootNode, "puree-country-inline-dropdown-disabled", "puree-country-inline-dropdown"), dom.removeClass(this.selectedCountryCodeCont, "hide"), dom.removeClass(this.countryDropDownCont, "hide"), dom.addClass(this.inputBox, "ltr"), this.countryDropDown.disabled = !1, this.countryDropDown.dispatchEvent && this.countryDropDown.dispatchEvent(new Event("statechange"))
        }, InlineCountryDropDown.prototype.disableCountryDropDown = function() {
            this.dropDownEnabled = !1, dom.replaceClass(this.rootNode, "puree-country-inline-dropdown", "puree-country-inline-dropdown-disabled"), dom.addClass(this.selectedCountryCodeCont, "hide"), dom.addClass(this.countryDropDownCont, "hide"), dom.removeClass(this.inputBox, "ltr"), this.inputBox.value = this.inputBox.value.replace(/[(\-) ]+/g, ""), this.countryDropDown.disabled = !0, this.countryDropDown.dispatchEvent && this.countryDropDown.dispatchEvent(new Event("statechange"))
        }, InlineCountryDropDown.prototype.updateInputFieldIcon = function(o) {
            if (this.inputFieldIcon) {
                if (!o && this.inputBox.value.length > 0) return dom.replaceClass(this.inputFieldIcon, "x-mobile-icon", "email-icon"), dom.removeClass(this.inputFieldIcon, "hide"), void dom.addClass(this.inputBox, "show-icon");
                if (o && this.inputBox.value.length >= this.showCountryCodeDropDownLength) return dom.replaceClass(this.inputFieldIcon, "email-icon", "x-mobile-icon"), dom.removeClass(this.inputFieldIcon, "hide"), void dom.addClass(this.inputBox, "show-icon");
                dom.addClass(this.inputFieldIcon, "hide"), dom.removeClass(this.inputBox, "show-icon")
            }
        }, InlineCountryDropDown.prototype.updateInputFieldTip = function(o) {
            if (this.emailFieldTip && this.phoneFieldTip) {
                if (!o && this.inputBox.value.length > 0) return dom.removeClass(this.emailFieldTip, "hide"), void dom.addClass(this.phoneFieldTip, "hide");
                if (o && this.inputBox.value.length >= this.showCountryCodeDropDownLength) return dom.removeClass(this.phoneFieldTip, "hide"), void dom.addClass(this.emailFieldTip, "hide");
                dom.addClass(this.phoneFieldTip, "hide"), dom.addClass(this.emailFieldTip, "hide")
            }
        }, InlineCountryDropDown.prototype.disableCountryDropDownInteractionForSingleItem = function() {
            this.countryDropDown.options.length > 1 || (dom.addClass(this.dropDownArrow, "hide"), dom.addClass(this.countryDropDown, "hide"))
        }, module.exports = InlineCountryDropDown;
    }, {
        "./common.js": 63,
        "./dom.js": 65,
        "./phone.js": 74
    }],
    71: [function(require, module, exports) {
        "use strict";
        var events = require("./common"),
            utils = require("./utils");
        ! function() {
            var e, t, n, a = document.getElementById("verification-code-field"),
                r = document.getElementsByName("codePart"),
                u = /<[^>]*>/g,
                o = /[^a-zA-Z0-9]/g,
                c = [],
                i = -1;
            if (a && r && r.length) {
                var l = function(e) {
                        return parseInt(e.target.getAttribute("idx"), 10)
                    },
                    v = function() {
                        var e = i + 1;
                        e < c.length && c[e].focus()
                    },
                    d = function() {
                        var e = i - 1;
                        e > -1 && c[e].focus()
                    },
                    f = function(e, t) {
                        e && (e.value = t), a.value = c.reduce(function(e, t) {
                            return e + t.value.replace(" ", "")
                        }, "")
                    };
                for (n = 0; n < r.length; n += 1) c.push(r[n]);
                var s = function(e) {
                    "codePart" === e.target.name && utils.setCaretPosition(e.target, 1)
                };
                events.addEvent(a.parentNode, "focus", s), events.addEvent(a.parentNode, "click", s), events.addEvent(a.parentNode, "keydown", function(n) {
                    "codePart" === n.target.name && (i = l(n), t || (t = !0, e = c[i].value, c[i].value = " "))
                }), events.addEvent(a.parentNode, "paste", function(e) {
                    var t, n = e.target.name;
                    "codePart" !== n && "code" !== n || (t = (e.clipboardData || window.clipboardData).getData("text"), t = t.replace(u, "").replace(o, ""), c.forEach(function(e, n) {
                        e.value = t[n] || ""
                    }), f(), e.preventDefault())
                }), events.addEvent(a, "change", function(e) {
                    var t = e.target.value.replace(u, "").replace(o, "");
                    c.forEach(function(e, n) {
                        e.value = t[n] || ""
                    }), f()
                }), events.addEvent(document.body, "keyup", function(n) {
                    var r, u, o, l = parseInt(n.keyCode, 10);
                    if (!(i < 0)) {
                        if (t = !1, " " === (r = c[i].value)) return f(c[i], e), l === utils.KEYMAP.RIGHT_ARROW ? v() : l === utils.KEYMAP.LEFT_ARROW && d(), void(i = -1);
                        if (r) return o = c.length, i === o - 1 && a.value.length < o ? (u = c.reduce(function(t, n, a) {
                            var r = n.value || " ";
                            return a === o - 1 && (r = r.replace(" ", e || "")), t + r
                        }, ""), u.length > o && (u = u.replace(" ", "")), c.forEach(function(e, t) {
                            e.value = u[t].replace(" ", "")
                        }), f()) : (f(c[i], r.split("").pop()), " " === c[i].value && (c[i].value = ""), r.length > 1 && v()), void(i = -1);
                        f(), d(), i = -1
                    }
                })
            }
        }();
    }, {
        "./common": 63,
        "./utils": 77
    }],
    72: [function(require, module, exports) {
        function jsonp(e, n, o) {
            function t() {
                a.parentNode && a.parentNode.removeChild(a), window[u] = function() {}, r && clearTimeout(r)
            }

            function c() {
                window[u] && t()
            }
            "function" == typeof n && (o = n, n = {}), n || (n = {});
            var a, r, i = n.prefix || "__jp",
                u = n.name || i + callbackPrefixCount++,
                p = n.param || "callback",
                m = n.timeout || 6e4,
                d = document.getElementsByTagName("script")[0] || document.head;
            return r = setTimeout(function() {
                t(), o && o(new Error("Timeout"))
            }, m), window[u] = function(e) {
                t(), o && o(null, e)
            }, e += (~e.indexOf("?") ? "&" : "?") + encodeURIComponent(p) + "=" + encodeURIComponent(u), e = e.replace("?&", "?"), a = document.createElement("script"), a.src = e, a.nonce = jsonpData && jsonpData.cspToken, d.parentNode.insertBefore(a, d), c
        }
        var callbackPrefixCount = 0;
        module.exports = jsonp;
    }, {}],
    73: [function(require, module, exports) {
        arguments[4][60][0].apply(exports, arguments)
    }, {
        "dup": 60
    }],
    74: [function(require, module, exports) {
        "use strict";
        var notNumberRegex = /\D/g,
            numberPlaceholderRegex = /X/g,
            formatCharsRegex = /[(\-)\s]/,
            utils = require("./utils.js"),
            phoneNumberFormatter = function(e, t, r, u) {
                var a, l = t.value,
                    o = u.options[u.selectedIndex],
                    n = l.replace(notNumberRegex, ""),
                    i = o.getAttribute("data-format");
                if (r.innerHTML = o.getAttribute("data-code"), i && n.length) {
                    var s = n.split(""),
                        m = -1;
                    i = i.replace(numberPlaceholderRegex, function(e) {
                        return m += 1, s[m] || e
                    }), a = i.split("X")[0], n = a || n
                }
                n !== t.value && (!e || e.keyCode !== utils.KEYMAP.BACKSPACE_KEY && e.keyCode !== utils.KEYMAP.IOS_SIMULATOR_BS && e.keyCode !== utils.KEYMAP.ANDROID_PLACEHOLDER || null === n[n.length - 1].match(formatCharsRegex)) && (t.value = n)
            };
        module.exports = phoneNumberFormatter;
    }, {
        "./utils.js": 77
    }],
    75: [function(require, module, exports) {
        "use strict";

        function Poll() {
            Ajax.call(this, arguments), this.retryCount = 0, this._stop = !1, this.startArgs = null, this.timerTask = null, this.forcePollCalled = !1
        }
        var Ajax = require("./ajax"),
            DEFAULT_MAXIMUM_RETRIES = 10,
            DEFAULT_INTERVAL = 5e3;
        Poll.prototype = Object.create(Ajax.prototype), Poll.prototype.constructor = Poll, Poll.prototype.start = function(t, s, o, e) {
            var i = this;
            this.timerTask = null, this._stop || (this.startArgs || (this.startArgs = Array.prototype.slice.call(arguments)), "function" == typeof o && (e = o, o = {}), this._inProgress || (this.startInMilliseconds || this.initStartTime(), this.retryCount += 1, s = -1 !== s.indexOf("?") ? s + "&" : s + "?", s += "counter=" + this.retryCount, this._inProgress = !0, this.send(t, s, o, function(t, s) {
                return i.parsePollResponse(o, i.startArgs, t, s, e)
            })))
        }, Poll.prototype.stop = function() {
            this._stop = !0
        }, Poll.prototype.getElapsedTime = function() {
            return (new Date).getTime() - this.startInMilliseconds
        }, Poll.prototype.shouldPollAgain = function(t, s) {
            return !this._stop && !s.long && 200 !== t && 400 !== t && ("function" == typeof s.interval ? this.getElapsedTime() < s.timeout : this.retryCount < (s.maxRetry || DEFAULT_MAXIMUM_RETRIES))
        }, Poll.prototype.getInterval = function(t) {
            return "function" == typeof t.interval ? t.interval(this.getElapsedTime()) : t.interval || DEFAULT_INTERVAL
        }, Poll.prototype.parsePollResponse = function(t, s, o, e, i) {
            var r = this;
            if (this._inProgress = !1, 206 === e.statusCode && i(o, e), this.shouldPollAgain(e.statusCode, t)) return this.timerTask = setTimeout(function() {
                r.start.apply(r, s)
            }, this.forcePollCalled ? 300 : this.getInterval(t)), void(this.forcePollCalled = !1);
            this._stop || (200 !== e.statusCode && 400 !== e.statusCode || (this._stop = !0), i(o, e))
        }, Poll.prototype.initStartTime = function() {
            this.startInMilliseconds = (new Date).getTime()
        }, Poll.prototype.forcePoll = function() {
            if (!this._stop) {
                if (this._inProgress) return void(this.forcePollCalled = !0);
                this.timerTask && (clearTimeout(this.timerTask), this.timerTask = null), this.start.apply(this, this.startArgs)
            }
        }, module.exports = Poll;
    }, {
        "./ajax": 59
    }],
    76: [function(require, module, exports) {
        "use strict";

        function showGooglePicker(e) {
            var o = document.getElementById("page-mask");
            o && dom.removeClass(o, "hide"), (new Ajax).send("GET", e, {}, function(e, t) {
                200 != t.statusCode && o && dom.addClass(o, "hide")
            })
        }

        function handleGPSTGooglePicker(e) {
            var o = document.getElementById("tpa-google-button");
            e.launchGPSTGooglePicker && Event.addEvent(document, "DOMContentLoaded", function() {
                showGooglePicker(e.phnxGetGoogleAccount)
            }), e.enabledGPSTForTPA && o && Event.addEvent(o, "click", function(o) {
                o.preventDefault(), o.stopPropagation(), showGooglePicker(e.phnxGetGoogleAccount)
            })
        }
        var dom = require("./dom.js"),
            Ajax = require("./ajax"),
            Event = require("./common.js");
        module.exports.initialize = function(e) {
            var o = document.getElementById("social-login-container");
            o && Event.addEvent(o, "click", function(e) {
                var t, n, c, a, i = e.target.type;
                if ("checkbox" === i)
                    for (t = e.target.id, n = o.getElementsByTagName("input"), c = n.length, a = 0; a < c; a += 1) "checkbox" === n[a].type && n[a].id !== t && (n[a].checked = !1)
            }), e.phnxGetGoogleAccount && handleGPSTGooglePicker(e)
        };
    }, {
        "./ajax": 59,
        "./common.js": 63,
        "./dom.js": 65
    }],
    77: [function(require, module, exports) {
        "use strict";

        function startsWith(e, t, n) {
            return String.prototype.startsWith ? e.startsWith(t, n) : (n = n || 0, e.indexOf(t, n) === n)
        }

        function endsWith(e, t) {
            return e.slice(-t.length) === t
        }

        function cleanUpUrl(e) {
            return e.replace("&&", "&").replace("?&", "?").replace(REGEX_CLEANUP_URL, "")
        }

        function isHtml5FileCompatible() {
            return !!window.FileReader
        }

        function submitFormOnEnter(e, t) {
            e.keyCode === KEYMAP.ENTER_KEY && (e.preventDefault(), t.click())
        }

        function skipValidate(e) {
            var t = {
                    9: 1,
                    16: 1,
                    17: 1,
                    18: 1,
                    20: 1,
                    27: 1,
                    37: 1,
                    38: 1,
                    39: 1,
                    40: 1,
                    91: 1
                },
                n = e.target,
                a = n.tagName.toUpperCase(),
                i = n.name;
            return 1 === t[e.keyCode] || "" === i || "INPUT" !== a && "SELECT" !== a
        }

        function swipeDetection(e, t) {
            var n, a, i, r, o, s = e;
            s.addEventListener("touchstart", function(e) {
                var t = e.changedTouches[0];
                n = "none", a = t.pageX, i = t.pageY
            }, !1), s.addEventListener("touchend", function(e) {
                var s, u, d = e.changedTouches[0];
                r = d.pageX - a, o = d.pageY - i, s = Math.abs(r), u = Math.abs(o), (s >= 50 || u >= 50) && (s >= u ? (n = r < 0 ? "left" : "right", e.preventDefault()) : u >= s && (n = o < 0 ? "up" : "down")), t && t(n)
            }, !1)
        }

        function assignByPath(e, t, n) {
            t = t.split(".");
            for (var a = t.length - 1, i = 0; i < a; ++i) {
                var r = t[i];
                r in e || (e[r] = {}), e = e[r]
            }
            e[t[a]] = n
        }

        function parseUrl(e) {
            var t = document.createElement("a");
            return t.href = e, t
        }

        function getQueryStrings(e) {
            var t, n, a, i, r, o, s, u = {};
            if (!e) return u;
            for (t = parseUrl(e), n = t.search.substr(1), a = n.split("&"), s = 0; s < a.length; s++) - 1 !== (i = a[s].indexOf("=")) && (r = a[s].substr(0, i), o = a[s].substr(i + 1), u[r] = o);
            return u
        }

        function addQueryStrings(e, t) {
            var n, a, i, r, o, s = {},
                u = [];
            if (!e || !t) return e;
            for (s = getQueryStrings(e), i = Object.keys(t), o = 0; o < i.length; o += 1) r = i[o], s[r] = t[r];
            for (i = Object.keys(s), o = 0; o < i.length; o += 1) void 0 !== (r = i[o]) && void 0 !== s[r] && u.push(r + "=" + s[r]);
            return n = "?" + u.join("&"), a = parseUrl(e), e = a.protocol + "//" + a.host + a.pathname + n + a.hash
        }

        function toConsumableArray(e) {
            var t, n = 0;
            if (Array.isArray(e)) {
                for (t = Array(e.length), n; n < e.length; n += 1) t[n] = e[n];
                return t
            }
            return Array.from(e)
        }

        function createbase64encodedAsciiString(e) {
            return window.btoa(String.fromCharCode.apply(String, toConsumableArray(new Uint8Array(e))))
        }

        function decodebase64encodedData(e) {
            return Uint8Array.from(window.atob(e), function(e) {
                return e.charCodeAt(0)
            })
        }

        function encodeSecurityKeyCredentials(e) {
            var t = {
                response: {}
            };
            return t.id = e.id, t.rawId = createbase64encodedAsciiString(e.rawId), ["authenticatorData", "signature", "attestationObject", "clientDataJSON"].forEach(function(n) {
                e.response[n] && (t.response[n] = createbase64encodedAsciiString(e.response[n]))
            }), t
        }

        function getAdBlockerState() {
            var e, t = document.getElementById("ad");
            return window.getComputedStyle && t ? (e = window.getComputedStyle(t, null), "none" === e.getPropertyValue("display") ? "on" : "off") : "unknown"
        }

        function safelyParseJson(e) {
            var t;
            try {
                t = JSON.parse(e)
            } catch (e) {}
            return t
        }

        function handleDomainAutoComplete(e, t, n) {
            var a, i;
            if (-1 !== e.indexOf("@")) {
                var r, o, s, u = e.split("@"),
                    d = u[1];
                for (a = t.getElementsByTagName("li"), r = 0; r < a.length; r += 1) o = a[r], s = o.getAttribute("data-fill"), 0 === d.length || 0 === s.indexOf(d) && d.length < s.length ? (i = !0, Dom.removeClass(o, "hide")) : Dom.addClass(o, "hide")
            }
            i ? (Dom.removeClass(t, "hide"), n.setAttribute("aria-hidden", !0)) : (Dom.addClass(t, "hide"), n.setAttribute("aria-hidden", !1))
        }

        function addAutoDomainCompleteEvent(e, t, n, a) {
            var i, r, o;
            "LI" === e.target.tagName && (i = e.target.getAttribute("data-fill"), Dom.addClass(t, "hide"), a.setAttribute("aria-hidden", !1), r = n.value, o = r.split("@"), n.value = o[0] + "@" + i, n.dispatchEvent && n.dispatchEvent(new Event("filledDomain")))
        }

        function addAutoDomainCompleteClickAndEnterEvent(e, t, n, a) {
            e.addEvent(t, "keyup", function(e) {
                e.keyCode === KEYMAP.ENTER_KEY && addAutoDomainCompleteEvent(e, t, n, a)
            }), e.addEvent(t, "click", function(e) {
                addAutoDomainCompleteEvent(e, t, n, a)
            })
        }

        function isWebAuthnSupported() {
            return !(!window.PublicKeyCredential || !window.navigator.credentials)
        }

        function formatDataYlkObject(e) {
            return Object.keys(e).map(function(t) {
                return t + ":" + e[t]
            }).join(";")
        }

        function parseDataYlk(e) {
            var t = {};
            if (!e) return t;
            for (var n = e.split(";"), a = 0, i = n.length; a < i; a++) {
                var r = n[a].split(":");
                if (2 === r.length) {
                    var o = r[0],
                        s = r[1];
                    o && s && (t[o] = s)
                }
            }
            return t
        }

        function rapidBeaconClick(e, t) {
            "undefined" != typeof rapidInstance && (t.intrctn = e, t.corActn = e, t.slk = t.slk || "DEFAULT", rapidInstance.beaconClick(I13N_config.keys.p_sec, t.slk, "1", t))
        }

        function rapidBeaconLinkViews(e, t) {
            "undefined" != typeof rapidInstance && rapidInstance.beaconLinkViews(e, t)
        }

        function updateDataYlkAttribute(e, t, n) {
            var a, i = e && e.getAttribute("data-ylk");
            i && (a = parseDataYlk(i), a[t] = n, e.setAttribute("data-ylk", formatDataYlkObject(a)))
        }

        function setCaretPosition(e, t) {
            if (e.setSelectionRange) e.focus(), e.setSelectionRange(t, t);
            else if (e.createTextRange) {
                var n = e.createTextRange();
                n.collapse(!0), n.moveEnd("character", t), n.moveStart("character", t), n.select()
            }
        }

        function isHiragana(e) {
            return 12352 <= e && e <= 12447
        }

        function isKatakana(e) {
            return 12448 <= e && e <= 12543
        }

        function isKorean(e) {
            return 44032 <= e && e <= 55203
        }

        function isCJKCommon(e) {
            return 19968 <= e && e <= 40959
        }

        function isCJKExtensionA(e) {
            return 13312 <= e && e <= 19903
        }

        function isCJKExtensionB(e) {
            return 131072 <= e && e <= 173791
        }

        function isCJKString(e) {
            for (var t, n = e.split(""), a = 0, i = n.length; a < i;) {
                if (t = n[a].charCodeAt(0), !(isHiragana(t) || isKatakana(t) || isKorean(t) || isCJKCommon(t) || isCJKExtensionA(t) || isCJKExtensionB(t))) return !1;
                a += 1
            }
            return !0
        }

        function isEmptyString(e) {
            return !e || e.trim && 0 === e.trim().length
        }

        function formatFullName(e, t) {
            return isEmptyString(e) ? t : isEmptyString(t) ? e : isCJKString(e) && isCJKString(t) ? t + e : e + " " + t
        }
        var Dom = require("./dom.js"),
            events = require("./common"),
            REGEX_CLEANUP_URL = /&$/,
            KEYMAP = {
                ENTER_KEY: 13,
                BACKSPACE_KEY: 8,
                LEFT_ARROW: 37,
                RIGHT_ARROW: 39,
                CAPS_LOCK: 20
            },
            capsLockHandler = function(e, t) {
                var n;
                "keyup" === e.type ? n = e.keyCode !== KEYMAP.CAPS_LOCK && e.getModifierState("CapsLock") : e.keyCode === KEYMAP.CAPS_LOCK && (n = !0), void 0 !== n && t(n)
            },
            updateCapsIndicator = function(e) {
                var t = document.getElementById("caps-indicator");
                e ? Dom.removeClass(t, "hide") : Dom.addClass(t, "hide")
            },
            togglePassword = function(e, t) {
                Dom.containsClass(e.target, "hide-pw") ? (Dom.replaceClass(e.target, "hide-pw", "show-pw"), t.type = "text", t.focus()) : (Dom.replaceClass(e.target, "show-pw", "hide-pw"), t.type = "password", t.focus())
            },
            autoSubmitHandler = function(e, t) {
                var n = parseInt(e.target.getAttribute("maxlength"));
                e.target.value.length === n && (Dom.addClass(e.target, "spinner"), e.target.setAttribute("readonly", "true"), t.click(), t.disabled = !0)
            },
            autoSubmitPasteHandler = function(e, t) {
                setTimeout(function() {
                    autoSubmitHandler(e, t)
                }, 0)
            },
            initializeAutoSubmit = function(e, t) {
                t && Dom.containsClass(t, "auto-submit") && (events.addEvent(e, "keyup", function() {
                    autoSubmitHandler(event, t)
                }), events.addEvent(e, "paste", function() {
                    autoSubmitPasteHandler(event, t)
                }))
            },
            setResendStatusTimer = function(e) {
                var t = document.getElementById("vc-resend-status");
                if (t) {
                    var n = document.getElementById("vc-resend-button-container"),
                        a = document.getElementById("vc-challenge-last-attempt"),
                        i = parseInt(t.getAttribute("data-remaining-wait-time"), 10),
                        r = t.getAttribute("data-msg-code-resend"),
                        o = t.getAttribute("data-msg-resend-code"),
                        s = e - i,
                        u = !!a,
                        d = "true" === t.getAttribute("data-is-resend"),
                        c = function(e, t) {
                            t ? Dom.replaceClass(e, "show", "hide") : Dom.replaceClass(e, "hide", "show")
                        },
                        l = function(e, i) {
                            c(t, !e), c(n, e), i && c(a, e)
                        },
                        p = function() {
                            var e;
                            if (!i) return void l(!1, u);
                            e = o.replace("{seconds}", i), s < 5 && (e = !!d && r), e && (t.innerHTML = e, l(!0, u)), i -= 1, s += 1, setTimeout(p, 1e3)
                        };
                    Dom.containsClass(n, "hide") && p()
                }
            },
            isPlatformAuthenticatorSupported = function(e) {
                if (!window.PublicKeyCredential) return e(!1);
                window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable().then(function(t) {
                    return e(t)
                })
            };
        module.exports = {
            getQueryStrings: getQueryStrings,
            addQueryStrings: addQueryStrings,
            assignByPath: assignByPath,
            startsWith: startsWith,
            isHtml5FileCompatible: isHtml5FileCompatible,
            submitFormOnEnter: submitFormOnEnter,
            skipValidate: skipValidate,
            KEYMAP: KEYMAP,
            swipeDetection: swipeDetection,
            decodebase64encodedData: decodebase64encodedData,
            encodeSecurityKeyCredentials: encodeSecurityKeyCredentials,
            capsLockHandler: capsLockHandler,
            updateCapsIndicator: updateCapsIndicator,
            togglePassword: togglePassword,
            initializeAutoSubmit: initializeAutoSubmit,
            setResendStatusTimer: setResendStatusTimer,
            endsWith: endsWith,
            cleanUpUrl: cleanUpUrl,
            getAdBlockerState: getAdBlockerState,
            safelyParseJson: safelyParseJson,
            handleDomainAutoComplete: handleDomainAutoComplete,
            addAutoDomainCompleteClickAndEnterEvent: addAutoDomainCompleteClickAndEnterEvent,
            isWebAuthnSupported: isWebAuthnSupported,
            isPlatformAuthenticatorSupported: isPlatformAuthenticatorSupported,
            updateDataYlkAttribute: updateDataYlkAttribute,
            parseDataYlk: parseDataYlk,
            rapidBeaconClick: rapidBeaconClick,
            rapidBeaconLinkViews: rapidBeaconLinkViews,
            setCaretPosition: setCaretPosition,
            formatFullName: formatFullName
        };
    }, {
        "./common": 63,
        "./dom.js": 65
    }]
}, {}, [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 14, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58])


//# sourceMappingURL=bundle.js.map