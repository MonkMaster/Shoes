// v:10.0.9
var skimlinks_pub_id = '42493X1110312';
var skimlinks_site = 'shoemonk.com';
var skimwords_hover_name = 'neutral';
var skimwords_horizontal_distance = 80;
var skimwords_vertical_distance = 80;
var skimlinks_domain = 'go.shoemonk.com';
var noskimwords = true;
var noskoupon = true;
var noskimproducts = true;
var skimwords_instant = true;
(function() {
    var va, wa, xa, ea, l, t, ya, za, Aa, Ba, fa, z, j, ga, Ca, Q, i, R, ha, Da, Ea, m, E, u, L, B, S, ia, k, F, G, w, Fa, r, ja, ka, Ga, la, T, M, p, Ha, Ia, ma, U, Ja, Ka, La, Ma, Na, Oa, na, Pa, x, Qa, oa, Ra, Sa, pa, v, Ta, Ua, n, Va, V, W, X, qa, N, Wa, O, Y, C, Z, $, H, aa, s, P, Xa, Ya, Za, ra, $a, ba, y, o, A, sa, ca, I, D, ta, J, K, ua, d, da = {}.hasOwnProperty;
    B = S = null;
    k = {
        pag: "",
        phr: {},
        pub: "",
        slc: 0,
        swc: 0,
        jsl: 0,
        jsf: "",
        guid: "",
        uc: "",
        t: 1
    };
    ia = /http:/g;
    m = function() {
        var a;
        a = navigator.userAgent.toLowerCase();
        a = /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || 0 > a.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(a) || [];
        return {
            browser: a[1] || "",
            version: parseFloat(a[2]) || 0
        }
    }();
    ka = [];
    Fa = (new Date)
        .getTime();
    w = [];
    ja = [];
    r = u = null;
    L = !1;
    F = [];
    E = [];
    G = [];
    aa = H = Z = N = qa = C = s = null;
    W = [];
    ca = I = sa = D = O = $ = V = X = Y = null;
    y = "";
    A = o = 0;
    ta = !1;
    d = this;
    J = d.location;
    K = "";
    Q = null;
    va = ["noskim", "norewrite"];
    wa = "*doubleclick.net,*mjxads.internet.com,*pgpartner.co.uk,*pgpartner.com,*pricegrabber.co.uk,*pricegrabber.com,*overture.com,*youtube.com".split(",");
    Wa = function() {
        return !0
    };
    Ga = function(a) {
        var b;
        b = document.createElement("a");
        b.href = a;
        return P(b.hostname)
    };
    xa = function() {
        var a, b, c, e, h, f, g, q, i, l, m, j, p, n, r, t, u, v, w, x, y, z;
        S = null != (a = document.getElementsByTagName("html")) ? a[0] : void 0;
        F = null != (b = d.skimlinks_included_classes) ? b : [];
        E = null != (p = d.skimlinks_excluded_classes) ? p : [];
        G = null != (t = d.skimlinks_included_ids) ? t : [];
        B = d.force_location ? Ga(d.force_location) : J.hostname;
        s = null != (u = d.skimlinks_tracking) ? u : !1;
        C = d.skimlinks_site || d.skimlinks_sitename || !1;
        qa = null != (v = d.skimlinks_domain) ? v : "go.redirectingat.com";
        N = null != (w = d.skimlinks_google) ? w : !1;
        Z = null != N ? N : "skimout";
        H = null != (x = d.skimlinks_target) ? x : !1;
        aa = null != (y = d.sl_test) ? y : !1;
        W = null != (z = d.skimlinks_exclude) ? z : [];
        Y = null != (c = d.skimlinks_noright) ? c : !1;
        X = null != (e = d.skimlinks_exrel) ? e : !1;
        V = null != (h = d.skimlinks_byrel) ? h : !1;
        $ = null != (f = d.skimlinks_blocked_tag) ? f : !1;
        O = 0;
        D = null != (g = d.skimlinks_pub_id) ? g : "";
        if (d.skimlink_legacy_support) d.skimlinks = function() {
            return !0
        }, d.mugicPopWin || (d.mugicPopWin = function() {
            return !0
        }),
        d.mugicRightClick || (d.mugicRightClick = function() {
            return !0
        });
        o = null != (q = d.skimlinks_dnt) ? q : 0;
        A = null != (i = window.skimlinks_nocookie) ? i : !1;
        A = null != (l = window.skimlinks_nocookie) ? l : !1;
        sa = null != (m = d.noimpressions) ? m : !1;
        ca = null != (j = d.noskimlinks || d.noskim) ? j : !1;
        I = null != (n = d.noskimwords || d.noskim) ? n : !1;
        ta = null != (r = d.skim_toolbar) ? r : !1;
        if (d.document && d.document.referrer) K = d.document.referrer;
        Na(B) && (I = ca = !0);
        s && !/^[a-z0-9_\\|]+$/i.test(s) && (s = !1);
        k.pag = d.force_location || J.href;
        k.pub = D;
        k.uc = s;
        "undefined" !== typeof assign_skimwords_globals && null !== assign_skimwords_globals && assign_skimwords_globals();
        E.push("noskimlinks");
        return !0
    };
    Na = function(a) {
        var b, c, e, h;
        if (d.noskim_domains) {
            h = d.noskim_domains;
            for (c = 0, e = h.length; c < e; c++) if (b = h[c], - 1 !== a.toLowerCase()
                .indexOf(b.toLowerCase())) return !0
        }
        return !1
    };
    P = function() {
        var a;
        a = /^www\./i;
        return function(b) {
            return b.replace(a, "")
        }
    }();
    t = function() {
        return document.addEventListener ? function(a, b, c) {
            if (a && (a.nodeName || a === d)) return a.addEventListener(b, c, !1)
        } : function(a,
        b, c) {
            if (a && (a.nodeName || a === d)) return a.attachEvent("on" + b, function() {
                return 7 > m.version && !window.event ? (setTimeout(function() {
                    return c.call(a, window.event)
                }, 100), !0) : c.call(a, window.event)
            })
        }
    }();
    (function() {
        return document.createElement("div")
            .getElementsByClassName ? function(a, b) {
            return p(a, b) ? a : a.getElementsByClassName(b)
        } : function(a, b) {
            var c;
            c = fa(b);
            return ha(a, c)
        }
    })();
    i = function() {
        var a, b;
        b = [function() {
            var b, e, d, f;
            d = [
                ["%20", "+"],
                ["!", "%21"],
                ["'", "%27"],
                ["\\(", "%28"],
                ["\\)", "%29"],
                ["\\*", "%2A"],
                ["\\~", "%7E"]
            ];
            f = [];
            for (b = 0, e = d.length; b < e; b++) a = d[b], f.push([RegExp(a[0], "g"), a[1]]);
            return f
        }()];
        return function(c) {
            var e, d, c = encodeURIComponent(c);
            for (e = 0, d = b.length; e < d; e++) a = b[e], c = c.replace(a[0], a[1]);
            return c
        }
    }();
    La = function() {
        var a;
        a = /^\/\/|https?:\/\//i;
        return function(b, c) {
            return a.test(b) && (!c || !B || -1 === c.indexOf(B)) && (!B || -1 === B.indexOf("." + c))
        }
    }();
    l = function(a, b, c) {
        var e;
        3 <= arguments.length && ("undefined" !== typeof a.setAttribute ? a.setAttribute(b, c) : a[b] = c);
        try {
            return e = a[b], null == e && (e = a.getAttribute(b)), e
        } catch (d) {
            return null
        }
    };
    j = function(a, b, c) {
        arguments[1] = "data-" + b;
        return l.apply(this, arguments)
    };
    Ya = function(a, b) {
        var c;
        c = a.innerText || a.textContent || a.nodeValue;
        if (2 <= arguments.length) "undefined" !== typeof a.innerText ? a.innerText = b : a.textContent = b, c = b;
        return c
    };
    ba = function() {
        var a, b;
        if (String.prototype.trim) return function(a) {
            return null === a ? "" : String.prototype.trim.call(a)
        };
        a = /^\s+/;
        b = /\s+$/;
        /\S/.test("\u00a0") && (a = /^[\s\xA0]+/, b = /[\s\xA0]+$/);
        return function(c) {
            return null === c ? "" : c.toString()
                .replace(a, "")
                .replace(b, "")
        }
    }();
    Qa = function(a) {
        var b, c, e, d, f;
        if ("object" === typeof a || a instanceof Array) {
            d = "";
            e = 0;
            c = a instanceof Array;
            for (f in a) da.call(a, f) && (b = a[f], 0 < e && (d += ","), c ? d += x(b) : (b = x(b), d += '"' + f + '":' + b), e++);
            return c ? "[" + d + "]" : "{" + d + "}"
        }
        return "string" === typeof a ? (b = a.replace(/"/g, '\\"', a), '"' + b + '"') : isNaN(a) ? "null" : a.toString()
    };
    x = function() {
        var a;
        return "undefined" !== typeof JSON && null !== JSON && JSON.stringify && '["la"]' === JSON.stringify(["la"]) ? (a = JSON.stringify, function(b) {
            return a(b)
        }) : Qa
    }();
    R = function() {
        var a, b;
        a = /[-[\]{}()*+?.,\\^$|#\s]/g;
        b = /\s+/g;
        return function(c) {
            return c.replace(a, "\\$&")
                .replace(b, "s+")
        }
    }();
    fa = function(a) {
        a = R(a);
        return RegExp("\\b" + a + "\\b", "i")
    };
    p = function(a, b) {
        return a.className ? fa(b)
            .test(a.className) : !1
    };
    ha = function(a, b) {
        var c, e, d, f, g;
        e = [];
        a.className && b.test(a.className) && e.push(a);
        g = a.childNodes;
        for (d = 0, f = g.length; d < f; d++) c = g[d], e = e.concat(ha(c, b));
        return e
    };
    za = function(a) {
        return -1 !== encodeURIComponent(a)
            .indexOf("%C3%82%C2%A3")
    };
    Ea = function(a) {
        a = a.innerHTML.slice(0,
        4);
        if ("http" === a || "www." === a) a.innerHTML = "<span style='display:none!important;'> </span>";
        return !0
    };
    Oa = function(a) {
        for (var b, c, e, d, a = a.parentNode; a && a !== S;) {
            c = a.id;
            for (e = 0, d = F.length; e < d; e++) if (b = F[e], p(a, b)) return !1;
            for (e = 0, d = G.length; e < d; e++) if (b = G[e], c === b) return !1;
            for (c = 0, e = E.length; c < e; c++) if (b = E[c], p(a, b)) return !0;
            a = a.parentNode
        }
        return F.length || G.length ? !0 : !1
    };
    Ja = function(a, b, c) {
        null == c && (c = !1);
        for (b = RegExp("\\b(?:(?:" + R(b) + ")|(?:noskim))\\b", "i"); null != a && a !== S;) {
            if (a.className && b.test(a.className)) return !0;
            a = c ? null : a.parentNode
        }
        return !1
    };
    Aa = function(a, b) {
        var c, e, h, f;
        p(a, "skimwords-link") || p(a, "skimwords-unlinked") ? (f = p(a, "skimwords-link") ? l(a, "data-skimwords-word") : "url", c = l(a, "data-skim-creative"), e = l(a, "data-skim-product"), h = d.skimlinks_domain || "go.redirectingat.com", "undefined" !== typeof settings && null !== settings && (h = settings.sw_domain || h), b = "//" + h + "/?id=" + D + "" + (s ? "&xcust=" + s : "") + "&xs=2&url=" + i(b) + "&xguid=" + y + "&xword=" + (f ? f : "") + "&xcreo=" + (c ? c : "") + "&xpid=" + (e ? e : "") + "&sref=" + i(J) + "&pref=" + i(K) + "" + (o ? "&dnt=" + o : "") + "" + (A ? "&fdnt=1" : "")) : Ja(a, "noskimlinks") || (c = l(a, "data-skim-creative"), b = "//" + qa + "/?id=" + D + "" + (C ? "&site=" + C : "") + "" + (aa ? "&test=" + aa : "") + "" + (s ? "&xcust=" + s : "") + "&xs=1&url=" + i(b) + "&xguid=" + y + "&xcreo=" + (a && null != c ? c : 0) + "&sref=" + i(J) + "&pref=" + i(K) + "" + (o ? "&dnt=" + o : "") + "" + (A ? "&fdnt=1" : ""));
        return b
    };
    la = function(a) {
        var b;
        if ((b = a.target || a.srcElement) && !b.href && a.currentTarget) b = a.currentTarget;
        for (; b && "A" !== b.nodeName;) b = b.parentNode;
        return b
    };
    v = function(a) {
        var b;
        b = la(a);
        Ra(b);
        if (d.vglnk && p(b, "skimwords-link")) a && a.stopPropagation ? a.stopPropagation() : (a = d.event, a.cancelBubble = !0);
        return !0
    };
    Ra = function(a) {
        var b, c, e, d, f, g;
        f = "msie" === m.browser && 7 > m.version ? 1E4 : 100;
        b = !1;
        c = N;
        if (a && a.nodeName && "IMG" === a.nodeName) a = a.parentNode;
        if (a) {
            g = a.href;
            if ("msie" === m.browser && a.childNodes.length && 3 === a.childNodes[0].nodeType) d = a.innerHTML;
            (e = j(a, "skimlinks-href")) ? b = !0 : (e = Aa(a, g), j(a, "skimlinks-href", e));
            c && Za(g);
            j(a, "skimlinks-orig-link") || (j(a, "skimlinks-orig-link", g), b = !1);
            a.href = e;
            setTimeout(function() {
                a.href = j(a, "skimlinks-orig-link");
                j(a, "skimlinks-href", "");
                j(a, "skimlinks-orig-link", "");
                if (d) a.innerHTML = d;
                return !0
            }, f)
        }
        return b
    };
    Ma = function(a, b) {
        var c, e;
        null == b && (b = ja);
        if (b) for (c in b) if (da.call(b, c) && (e = b[c], e === a)) return !0;
        return !1
    };
    Pa = function(a) {
        var b, c;
        if (!$) return !1;
        b = null != a ? a.previousSibling : void 0;
        if (!b) return !1;
        a = ("[" + $ + "]")
            .toLowerCase();
        c = Ya(b);
        c = c.toLowerCase();
        c = ba(c);
        b = c.lastIndexOf(a);
        return -1 !== b && b + a.length === c.length
    };
    U = function(a) {
        return !a || V && a === V || !Ha(a)
    };
    Ha = function(a) {
        var b,
        c, e, d;
        u = null;
        if (!a) return !1;
        a = a.toLowerCase();
        if (u) return u[a];
        u = {};
        b = X ? [X] : [];
        b = b.concat(va);
        for (c = 0, e = b.length; c < e; c++) d = b[c], u[d.toLowerCase()] = !0;
        return u[a]
    };
    ya = function() {
        var a, b, c, e;
        r = {};
        C && W.push(C);
        e = W.concat(wa);
        for (b = 0, c = e.length; b < c; b++) a = e[b], r[a] = a.length;
        return r
    };
    Ka = function(a) {
        var b, c, e;
        null === r && ya();
        if (!a) return !1;
        for (b in r) if (da.call(r, b)) if (c = r[b], 0 === b.indexOf("*")) {
            if (b = b.substr(1), c -= 1, e = a.lastIndexOf(b), - 1 !== e && e === a.length - c) return !0
        } else if (a === b) return !0;
        return !1
    };
    ma = function(a, b) {
        return La(a, b) && !Ka(b)
    };
    Za = function(a) {
        var b, c, e;
        b = d.pageTracker;
        e = d.urchinTracker;
        c = "/" + Z + "/" + a;
        if (null != b && b._trackPageview) return b._trackPageview(c), !0;
        if (e) return e(c), !0;
        if (d._gaq) b = d._gaq, b.push(["_trackEvent", Z, "click", a]);
        return !1
    };
    Ba = function(a, b) {
        var c, e;
        null == a && (a = {});
        null == b && (b = "track.php");
        for (c in k) da.call(k, c) && (e = k[c], a[c] = e);
        c = "//t.skimresources.com/api/" + b;
        e = [];
        o && e.push("dnt=" + o);
        A && e.push("fdnt=1");
        e.push("data=");
        c += "?" + e.join("&");
        return c + i(x(a)
            .replace(ia, ""))
    };
    z = function(a) {
        var b, c;
        c = i('},"pub"');
        b = Ba();
        null != a && a.length && (a.join(i(",")), b = b.replace(c, "" + a + c));
        return [b, b.length]
    };
    ra = function() {
        var a, b, c, e, h, f, g;
        if (sa) return !1;
        h = (new Date)
            .getTime() - Fa;
        e = [];
        b = 8E3;
        "msie" === m.browser && (b = 2E3);
        k.slc = O;
        k.swc = "undefined" !== typeof sw_handlers && null !== sw_handlers ? sw_handlers : 0;
        k.jsl = h;
        k.guid = y;
        k.pref = K;
        k.phr = {};
        a = z();
        a = a[1];
        for (c = h = 0, g = ka.length; h < g; c = ++h) if (f = ka[c], f = x(f)
            .replace(ia, ""), c = i('"' + c + '":' + f), !("msie" === m.browser && c.length > b)) {
            a = a + c.length + 3 * e.length;
            if (a > b) a = z(e), e = a[0], M(e, !1, {
                async: !0
            }), e = [], k.t = 0, a = z(), a = a[1];
            e.push(c)
        }
        b = z(e)[0];
        "msie" === m.browser && 7 > m.version && (b = b.substring(0, 4095));
        M(b, !1, {
            async: !0
        });
        d.skimlinksRunning = !1;
        pa(1);
        return !0
    };
    pa = function(a) {
        if (10 > a) return w = Sa(), setTimeout(function() {
            return pa(a + 1)
        }, 2E3 * a)
    };
    Sa = function() {
        var a, b, c, e, d, f, g;
        b = {};
        e = [];
        c = [];
        for (d = 0, f = w.length; d < f; d++) a = w[d], a.parentNode ? c.push(a) : b[a.href] = 1;
        g = T();
        for (d = 0, f = g.length; d < f; d++) a = g[d], b[a.href] && e.push(a);
        ea(e);
        return e.concat(c)
    };
    $a = function(a) {
        var b,
        c;
        c = new Date;
        b = c + 300;
        a = i('{"pubcode":"' + D + '","referrer":"' + J + '","pref":"' + K + '","site":"' + C + '","url":"' + a + '","custom":"' + s + '","product":"1"}');
        for (M("//r.skimresources.com/api/?call=track" + (o ? "&dnt=" + o : "") + (A ? "&fdnt=1" : "") + "&data=" + a); c < b;) c = new Date;
        return !0
    };
    oa = function(a) {
        a = la(a)
            .href;
        $a(a);
        return !0
    };
    M = function(a, b, c) {
        var h;
        var e, d, f, g, q, i = this;
        null == c && (c = {});
        e = c.charset || null;
        q = c.target || null;
        h = null != (d = c.async) ? d : !0, c = h;
        d = null != q && q.document ? q.document : document;
        f = d.getElementsByTagName("head")[0];
        g = d.createElement("script");
        g.type = "text/javascript";
        if (e) g.charset = e;
        if (b) g.onload = g.onreadystatechange = function() {
            var a;
            a = !1;
            return function() {
                var c;
                c = i.readyState;
                if (!a && (!c || "complete" === c || "loaded" === c)) return g.onload = g.onreadystatechange = null, a = !0, b.call(q), !0
            }
        }();
        g.async = !1 !== c;
        g.src = a;
        f.appendChild(g);
        return g
    };
    T = function(a) {
        var b, c, d, h, f;
        b = null;
        a && (b = RegExp("\\b" + R(a) + "\\b", "i"));
        f = [];
        h = document.getElementsByTagName("a");
        for (c = 0, d = h.length; c < d; c++) {
            a = h[c];
            try {
                a.href && (!b || a.className && b.test(a.className)) && f.push(a)
            } catch (g) {}
        }
        return f
    };
    ea = function(a) {
        var b, c, d, h, f, g, q, i, j;
        c = F.length || G.length || E.length;
        h = [];
        for (i = 0, j = a.length; i < j; i++) if (b = a[i], d = P(b.hostname), b.sl_hidden_domain && (d = P(b.sl_hidden_domain)), q = ba(b.href), g = l(b, "rel"), f = l(b, "onclick"), (!c || !Oa(b)) && !Pa(b)) if (Ma(d)) {
            if (U(g)) {
                H && l(b, "target", H);
                if ("msie" === m.browser) {
                    if (za(q)) continue;
                    Ea(b)
                }
                null != f && -1 !== f.toString()
                    .indexOf("return false") ? t(b, "mousedown", v) : t(b, "click", v);
                Xa(b, !1);
                Ia(b);
                h.push(b);
                Y || t(b, "contextmenu", v);
                Wa(b)
            }
        } else ma(q,
        d) && U(g) && (H && l(b, "target", H), t(b, "click", oa), Y || t(b, "contextmenu", oa));
        return h
    };
    Ia = function(a, b) {
        var c, e, h, f, g, i, k, n, o;
        if (d.link_icon || 0 < a.getAttribute("data-skim-product") && d.skimwords_product_icon) {
            if (0 < a.getElementsByTagName("img")
                .length) return !0;
            if ("msie" === m.browser && 8 > m.version) a.style.display = "inline-block";
            f = e = "";
            null != b && (e = d.skimwords_icon_class || "", f = d.skimwords_icon_link_class || "");
            g = l(a, "title")
                .replace("'", "'");
            h = d.link_icon || d.skimwords_product_icon;
            p(a, "skimwords-unlinked") || p(a, "skimwords-link") ? (i = 'data-skim-creative="' + j(a, "skim-creative") + '"', k = 'data-group-id="' + j(a, "group-id") + '"', o = 'data-skimwords-word="' + j(a, "skimwords-word") + '"', n = 'data-skimwords-id="' + j(a, "skimwords-id") + '"', c = p(a, "skimwords-unlinked") ? "skimwords-unlinked" : "skimwords-link") : c = n = o = k = i = "";
            c = "<a href='" + l(a, "href") + "' title='" + g + "' " + i + " " + k + " " + o + " " + n + "style='border:0px;padding:0;margin:0' class='skimlinks-icon-link " + f + " " + c + "' skimlinked='skimlinked' target='_blank'><img src='" + h + "' class='" + e + "' skimlinked='skimlinked' style='margin: 0px 0px -3px 2px !important; float:none !important; border:0px; float:none !important; display:inline !important; width: auto !important; height: auto !important;' /></a>";
            e = document.createElement("div");
            e.innerHTML = c;
            c = e.childNodes[0];
            t(c, "mousedown", v);
            a.appendChild(c)
        }
        return !0
    };
    Va = function() {
        "undefined" !== typeof skimwords && null !== skimwords && !I ? skimwords() : ra();
        return !0
    };
    Da = function() {
        var a, b, c, d, h, f, g, i;
        h = T();
        c = [];
        d = {};
        for (g = 0, i = h.length; g < i; g++) a = h[g],
        b = P(a.hostname), f = ba(a.href), a = l(a, "rel"), ma(f, b) && U(a) && b && !d[b] && (c.push(b), d[b] = !0);
        return c
    };
    ua = function() {
        var a, b, c, d, h, f, g, j;
        xa();
        if (ca) "undefined" !== typeof skimwords && null !== skimwords && !I ? skimwords() : ra();
        else {
            d = Da();
            a = i('{"pubcode":"' + D + '","domains":PLACEHOLDER}');
            f = "//r.skimresources.com/api/?callback=skimlinksApplyHandlers" + (o ? "&dnt=" + o : "") + (A ? "&fdnt=1" : "") + (ta ? "&call=toolbar" : "") + "&data=" + a;
            b = f.length - 9;
            a = "msie" === m.browser ? 2E3 : 8E3;
            h = [];
            for (g = 0, j = d.length; g < j; g++) c = d[g], b + c.length + 12 < a && (h.push(c), b = b + c.length + 12);
            f = f.replace("PLACEHOLDER", i(x(h)));
            M(f)
        }
        return !0
    };
    n = function() {
        if (L) return !1;
        L = !0;
        ua();
        return !0
    };
    Xa = function(a, b) {
        var c, e;
        e = a.style.cssText;
        e += " ";
        if (d.link_background) c = d.link_background, - 1 === c.indexOf("#") && (c = "#" + c), e += "background-color: " + c + " !important; ";
        if (null != d.link_tooltip) a.title = d.link_tooltip;
        if (b) {
            if (d.skimwords_color) c = d.skimwords_color, - 1 === c.indexOf("#") && (c = "#" + c), e += "color: " + c + " !important; ";
            d.skimwords_weight && (e += "font-weight: " + d.skimwords_weight + " !important; ");
            if (d.skimwords_decoration) c = d.skimwords_decoration, e = "double" === c ? e + "border-bottom: 1px double !important; " : "dashed" === c ? e + "border-bottom: 1px dashed !important; " : e + ("text-decoration: " + c + " !important; ");
            if (d.skimwords_style) c = d.skimwords_style, e += "text-style: " + c + "; ";
            if (d.skimwords_link_style) c = d.skimwords_link_style, e += c + "; ";
            c = " " + a.className;
            if (d.skimwords_link_class) c += " " + d.skimwords_link_class, a.className = c.substring(1);
            if (d.skimwords_title && null === a.getAttribute("title")) a.title = d.skimwords_title;
            if (null === a.getAttribute("title")) a.title = "Shopping link added by SkimWords"
        }
        a.style.cssText = e;
        return !0
    };
    Ua = function() {
        if (I) return skimlinks();
        d.skimlinksNoRemove = !0;
        return skimwordsReload(!0)
    };
    na = function(a) {
        if (3 === a.nodeType || -1 !== ",p,body,div,span,ul,ol,li,table,tbody,td,tr,th,tfoot,col,colgroup,em,strong,big,small,blockquote,cite,b,dl,dfn,dd,dt,ins,form,legend,noframes,pre,noscript,center,font,i,article,section,".indexOf("," + a.nodeName.toLowerCase() + ",")) return !0;
        for (a = a.firstChild; null !== a;) {
            if (na(a)) return !0;
            a = a.nextSibling
        }
        return !1
    };
    ga = function(a) {
        if (!d.skimlinksRunning && (a = a.target || !1) && na(a)) return Q && clearTimeout(Q), Q = setTimeout(Ua, 100)
    };
    Ca = function() {
        if (document.getElementsByTagName("body")
            .length) {
            if (document.addEventListener) return document.getElementsByTagName("body")[0].addEventListener("DOMNodeInserted", ga, !1);
            if (document.attachEvent) return document.getElementsByTagName("body")[0].attachEvent("DOMNodeInserted", ga)
        }
    };
    Ta = function() {
        d.skimlinksRunning = !0;
        d.skimlinks_ajax_rerun && Ca();
        return function() {
            var a, b, c;
            b = function() {
                if (L) return !0;
                try {
                    document.documentElement.doScroll("left")
                } catch (a) {
                    return setTimeout(b, 50), !1
                }
                return n()
            };
            a = function() {
                return document.addEventListener ? function() {
                    document.removeEventListener("DOMContentLoaded", a, !1);
                    n();
                    return !0
                } : document.attachEvent ? function() {
                    document.detachEvent("onreadystatechange", a);
                    n();
                    return !0
                } : function() {
                    n();
                    return !0
                }
            }();
            if ("complete" === document.readyState) setTimeout(n, 1);
            else if (document.addEventListener) document.addEventListener("DOMContentLoaded",
            a, !1), d.addEventListener("load", n, !1);
            else if (document.attachEvent) {
                document.attachEvent("onreadystatechange", a);
                d.attachEvent("onload", n);
                c = !1;
                try {
                    c = null === d.frameElement
                } catch (e) {}
                document.documentElement.doScroll && c && b()
            }
            return !0
        }
    }();
    d.skimlinksApplyHandlers = function(a) {
        var b, a = null != a ? a : {};
        null != d.skimlinks_runner && (d.skimlinks_runner.skimlinks = 1);
        b = T();
        ja = a.merchant_domains;
        a.guid && "" === y && (y = a.guid);
        w = ea(b);
        O += w.length;
        Va();
        return !0
    };
    d.mugicPopWin || (d.mugicPopWin = v);
    d.mugicRight || (d.mugicRight = v);
    d.skimlinksReload = function() {
        L = !1;
        n();
        return !0
    };
    d.skimlink_legacy_support || (d.skimlinks = ua);
    Ta()
})();