(function () {
    try {
        (function () {
            function gf(a, c, b, d) {
                var e = this;
                return E(window, "c.i", function () {
                    function f(F) {
                        (F = hf(l, m, "", F)(l, m)) &&
                            (P(F.then) ? F.then(g) : g(F));
                        return F;
                    }
                    function g(F) {
                        F &&
                            (P(F)
                                ? p.push(F)
                                : ka(F) &&
                                  x(function (Q) {
                                      var M = Q[0];
                                      Q = Q[1];
                                      P(Q) && ("u" === M ? p.push(Q) : h(Q, M));
                                  }, Ia(F)));
                    }
                    function h(F, Q, M) {
                        e[Q] = gm(l, m, M || q, Q, F);
                    }
                    var k,
                        l = window;
                    (!l || (isNaN(a) && !a)) && be();
                    var m = hm(a, ce, c, b, d),
                        p = [],
                        q = [rh, hf, sh];
                    q.unshift(im);
                    var r = z(R, Wa),
                        t = K(m);
                    m.id || Ua(Qa("Invalid Metrika id: " + m.id, !0));
                    var y = jd.C("counters", {});
                    if (y[t])
                        return Ib(l, t, "dc", ((k = {}), (k.key = t), k)), y[t];
                    jm(l, t, th(a, c, b, d));
                    y[t] = e;
                    jd.D("counters", y);
                    jd.Ga("counter", e);
                    x(function (F) {
                        F(l, m);
                    }, jf);
                    x(f, kd);
                    f(km);
                    h(lm(l, m, p), "destruct", [rh, sh]);
                    Tb(l, C([l, r, f, 1, "a.i"], uh));
                    x(f, Y);
                })();
            }
            function rh(a, c, b, d) {
                return E(a, "cm." + b, d);
            }
            function sh(a, c, b, d) {
                return function () {
                    var e = Oa(arguments);
                    e = d.apply(void 0, e);
                    return W(e) ? Ea(a, c) : e;
                };
            }
            function mm(a, c) {
                delete J(a).C("cok", {})[c];
            }
            function jm(a, c, b) {
                a = J(a);
                var d = a.C("cok", {});
                d[c] = b;
                a.D("cok", d);
            }
            function nm(a, c) {
                var b = "" + c,
                    d = { id: 1, ca: "0" },
                    e = om(b);
                e
                    ? (d.id = e)
                    : -1 === hb(b, ":")
                    ? ((b = Ja(b)), (d.id = b))
                    : ((b = b.split(":")),
                      (e = b[1]),
                      (d.id = Ja(b[0])),
                      (d.ca = de(e) ? "1" : "0"));
                return [Ea(a, d), d];
            }
            function vh(a, c, b, d) {
                var e;
                c =
                    ((e = {}),
                    (e.code = [
                        [
                            1,
                            "ym_debug",
                            [
                                18,
                                ["a", [37, [40, "require"], "loadScript"]],
                                ["b", [37, [40, "require"], "callFromWindow"]],
                            ],
                            [
                                2,
                                [
                                    37,
                                    [40, "a"],
                                    wh + "/" + c + ".js?ver=" + xa.ab,
                                    [
                                        24,
                                        null,
                                        [],
                                        [
                                            3,
                                            [
                                                2,
                                                [
                                                    37,
                                                    [40, "b"],
                                                    "Ya._metrika.ytmm." +
                                                        c +
                                                        ".init",
                                                    b,
                                                    kf(d),
                                                    xa.ab,
                                                ],
                                            ],
                                        ],
                                    ],
                                ],
                            ],
                        ],
                    ]),
                    e);
                xh(a)(c);
            }
            function kf(a) {
                if (O(a)) return (a = z(kf, a)), uc([22], a);
                if (ka(a))
                    return (
                        (a = z(function (c) {
                            return [c[0], kf(c[1])];
                        }, Ia(a))),
                        uc([23], a)
                    );
                if (yh(a)) return a;
                Ua(Pa("npv"));
            }
            function pm(a) {
                return ka(a) && O(a.code);
            }
            function qm(a, c) {
                var b,
                    d = c.slice(2),
                    e = [
                        ((b = {}),
                        (b.require = { kind: 0, value: v(rm, Mc([a, {}])) }),
                        b),
                    ];
                lf(e, uc([3], d));
            }
            function lf(a, c, b) {
                c = c.slice(1);
                a.push(b || {});
                x(function (d) {
                    O(d) && 3 === d[0]
                        ? lf(a, d)
                        : !O(d) || (18 !== d[0] && 19 !== d[0])
                        ? O(d) && 2 === d[0] && Ub(a, d[1])
                        : sm(a, d);
                }, c);
                a.pop();
            }
            function sm(a, c) {
                var b = 18 === c[0];
                x(function (d) {
                    var e = d[0],
                        f = d[1];
                    if (b && 1 === d.length) throw Qa("mca");
                    d = a[a.length - 1];
                    if (Jb(d, e)) throw Qa("vr");
                    f = Ub(a, f);
                    d[e] = { kind: b ? 0 : 1, value: f };
                }, c.slice(1));
            }
            function Ub(a, c) {
                if (yh(c)) return c;
                if (O(c) && 40 === c[0]) {
                    a: {
                        var b = c[1];
                        for (var d = a.length; 0 < d; ) {
                            var e = a[--d];
                            if (Jb(e, b)) {
                                b = e[b];
                                break a;
                            }
                        }
                        b = void 0;
                    }
                    if (!b) throw Qa("vnd");
                    return b.value;
                }
                if (O(c) && 37 === c[0]) {
                    d = c.slice(2);
                    b = Ub(a, c[1]);
                    if (!P(b)) throw Qa("tenf");
                    d = z(u(a, Ub), d);
                    return b.apply(null, d);
                }
                if (O(c) && 24 === c[0]) return tm(a, c);
                if (O(c) && 35 === c[0]) {
                    d = c[2];
                    b = Ub(a, c[1]);
                    d = Ub(a, d);
                    if (!b) throw Qa("noma");
                    return b["" + d];
                }
                if (O(c) && 23 === c[0]) return um(a, c);
                if (O(c) && 22 === c[0]) return vm(a, c);
            }
            function vm(a, c) {
                return z(function (b) {
                    return Ub(a, b);
                }, c.slice(1));
            }
            function um(a, c) {
                return N(
                    function (b, d) {
                        var e = d[1],
                            f = Ub(a, d[0]);
                        e = Ub(a, e);
                        b["" + f] = e;
                        return b;
                    },
                    {},
                    c.slice(1)
                );
            }
            function yh(a) {
                return (
                    ia(a) ||
                    "[object Number]" === Object.prototype.toString.call(a) ||
                    !!a === a ||
                    ca(a)
                );
            }
            function tm(a, c) {
                var b = c[1],
                    d = c[2],
                    e = c[3],
                    f = z(R, a);
                return function () {
                    var g = arguments,
                        h = N(
                            function (k, l, m) {
                                if (k[l]) throw Qa("da");
                                k[l] = { kind: 1, value: g[m] };
                                return k;
                            },
                            {},
                            d
                        );
                    b && !H(b, d) && (h[b] = { kind: 0, value: b });
                    lf(f, e, h);
                };
            }
            function rm(a) {
                return wm[a];
            }
            function mf(a, c) {
                return function () {
                    try {
                        return c.apply(null, arguments);
                    } catch (b) {
                        zh(a, b);
                    }
                };
            }
            function xm(a, c, b, d) {
                function e() {
                    g.state = 1;
                    b();
                }
                function f() {
                    g.state = 2;
                    d && d();
                }
                var g = zm(a, c);
                c = g.yi;
                var h = g.state;
                c && 2 !== h
                    ? 1 === h
                        ? e()
                        : ((a = fa(a)),
                          a.F(c, ["load"], e),
                          a.F(c, ["error"], f))
                    : f();
            }
            function zm(a, c) {
                nf[c] || (nf[c] = { yi: Nc(a, { src: c }), state: 0 });
                return nf[c];
            }
            function Ah(a, c) {
                if (ca(a)) throw Qa("noma");
                if (1 === c.length) return a;
                var b = n(a, G(".", c.slice(0, -1)));
                if (!b) throw Qa("noma");
                return b;
            }
            function Am(a) {
                return N(
                    function (c, b) {
                        Jb(a, b) && (c[b] = a[b]);
                        return c;
                    },
                    {},
                    ea(a)
                );
            }
            function Bm(a, c) {
                if ("*" === c) return !0;
                var b = T(a);
                return c === b.host + b.pathname;
            }
            function Cm(a, c) {
                var b = n(c, "target");
                b && a(b);
            }
            function Dm(a, c, b) {
                var d = n(b, "submitter");
                d || ((b = n(b, "target")) && (d = of(a, b)));
                d && c(d);
            }
            function Em(a, c, b, d) {
                var e = pf(a, d);
                e &&
                    x(function (f) {
                        var g,
                            h = null;
                        try {
                            var k = n(f, "css_selector"),
                                l = dc(k, a.document);
                            h = Bh(l);
                        } catch (r) {}
                        k = null;
                        try {
                            var m = n(f, "xpath"),
                                p = Fm(m);
                            var q = p
                                ? n(a, "document.evaluate")
                                    ? a.document.evaluate(
                                          p,
                                          a.document,
                                          null,
                                          a.XPathResult.FIRST_ORDERED_NODE_TYPE,
                                          null
                                      ).singleNodeValue
                                    : null
                                : null;
                            k = Bh(q);
                        } catch (r) {}
                        f = ((g = {}), (g.s = [k, h]), (g.b = e), g);
                        c(f);
                    }, b);
            }
            function Bh(a) {
                return (a = Kb(a)) ? ld(ee(a)) : null;
            }
            function Fm(a) {
                if (!a) return "";
                a = a.match(Gm);
                if (!a || 0 === a.length) return "";
                var c = Hm();
                return (
                    "//HTML/BODY/" +
                    N(
                        function (b, d) {
                            var e = d[0],
                                f = Ja(d.slice(1));
                            return (
                                "/" + c[e] + (f ? "[" + (f + 1) + "]" : "") + b
                            );
                        },
                        "",
                        a
                    )
                );
            }
            function Im(a) {
                x(function (c) {
                    var b,
                        d = c.event;
                    if (H(d, Jm)) {
                        var e = c.data;
                        c = e.auctionId || n(e, "bid.auctionId");
                        ta[c] || (ta[c] = ((b = {}), (b.auctionId = c), b));
                        b = "auctionInit" === d;
                        var f = H(d, Ch);
                        f ||
                            (ta[c].startStamp && !b) ||
                            (ta[c].startStamp = b
                                ? e.auctionStart || e.timestamp
                                : e.auctionStart);
                        if (H(d, Dh)) {
                            b = e.bidderCode;
                            if (!b) return;
                            ta[c][d] || (ta[c][d] = {});
                            if ("bidTimeout" === d) ta[c].bidTimeout[b] = !0;
                            else {
                                var g = {};
                                ta[c][d][b] = g;
                                x(function (h) {
                                    var k = e[h];
                                    ca(k) || (g[h] = k);
                                }, Km);
                                ta[c].endStamp && (ta[c].aa = !0);
                            }
                        }
                        f
                            ? ((b = e.bid.bidderCode),
                              ta[c].renderState || (ta[c].renderState = {}),
                              (d = "adRenderSucceeded" === d),
                              (f = { pe: d }),
                              d ||
                                  ((f.reason = e.reason),
                                  (f.message = e.message)),
                              (ta[c].renderState[b] = f))
                            : "auctionEnd" === d &&
                              ((ta[c].aa = !0),
                              (ta[c].endStamp = e.auctionEnd || e.timestamp),
                              (ta[c].requestedBidders = ha(function (h, k, l) {
                                  return qf(h, l) === k;
                              }, z(U("bidderCode"), e.bidderRequests))));
                    }
                }, a);
            }
            function Lm(a, c) {
                x(function (b) {
                    b.aa && Mm(a, c, b.auctionId);
                }, Eh(ta));
            }
            function Mm(a, c, b) {
                ta[b].aa = !1;
                ta[b].Ia && la(a, ta[b].Ia);
                ta[b].Ia = S(
                    a,
                    function () {
                        var d, e;
                        delete ta[b].Ia;
                        delete ta[b].aa;
                        c(
                            ((d = {}),
                            (d.__ym = ((e = {}), (e.pbjs = ta[b]), e)),
                            d)
                        );
                        delete ta[b];
                    },
                    2e3
                );
            }
            function Nm(a) {
                var c = n(a, "featurePolicy");
                return c
                    ? "browsingTopics" in a &&
                          c.allowsFeature("browsing-topics")
                    : !1;
            }
            function Om(a, c, b, d) {
                var e = n(d, "data");
                if (ia(e)) {
                    var f = e.split("*");
                    e = f[0];
                    var g = f[1];
                    f = f[2];
                    "sc.topics-response" === e
                        ? (g &&
                              ("1" === g && f
                                  ? ((a = Lb(a, f)), O(a) && c.D("cta", a))
                                  : c.D("cta.e", g)),
                          b())
                        : "sc.frame" === e &&
                          d.source &&
                          d.source.postMessage("sc.topics", "*");
                }
            }
            function Pm(a, c) {
                var b;
                if (
                    "https://oauth.yandex.ru" === n(c, "origin") &&
                    n(c, "source.window") &&
                    "_ym_uid_request" === n(c.data, "_ym")
                ) {
                    var d = c.source,
                        e = ((b = {}), (b._ym_uid = a), b);
                    d.postMessage(e, "https://oauth.yandex.ru");
                }
            }
            function Fh(a, c) {
                void 0 === c && (c = !0);
                var b = dc("canvas", a.document);
                if (b && (b = Oc(b))) {
                    var d = fe(a) || Pc(a),
                        e = d[0];
                    d = d[1];
                    if (0.3 <= Gh(a, b, { h: d, w: e }) / (d * e)) {
                        J(a).D("hc", 1);
                        return;
                    }
                }
                c && S(a, C([a, !1], Fh), 3e3);
            }
            function Hh(a) {
                return {
                    N: function (c, b) {
                        Qm(a).then(function (d) {
                            c.J || (c.J = {});
                            c.J.uah = d;
                            b();
                        }, b);
                    },
                };
            }
            function Rm(a) {
                var c = N(
                    function (b, d) {
                        var e = d[1],
                            f = Sm(a[d[0]]);
                        f && b.push("" + e + "\n" + f);
                        return b;
                    },
                    [],
                    Ia(Tm)
                );
                return G("\n", c);
            }
            function Um(a) {
                return "che\n" + a;
            }
            function Sm(a) {
                return ia(a)
                    ? a
                    : O(a)
                    ? G(
                          ",",
                          z(function (c) {
                              return '"' + c.brand + '";v="' + c.version + '"';
                          }, a)
                      )
                    : ca(a)
                    ? ""
                    : a
                    ? "?1"
                    : "?0";
            }
            function Vm(a, c) {
                var b = Wm(a),
                    d = [Xm(a) || Ym(a)];
                Ih(a) && d.push(b);
                var e = ja(a);
                b = Va(a);
                var f = b.C("synced", {});
                d = ha(function (g) {
                    if (c[g]) {
                        var h = (f[g] || 1) + 1440 < e(qb);
                        h && delete f[g];
                        return h;
                    }
                }, d);
                b.D("synced", f);
                return z(function (g) {
                    return { Ii: c[g], Uh: g };
                }, d);
            }
            function Ym(a) {
                a = Zm(a);
                return $m[a] || a;
            }
            function Wm(a) {
                a = Jh(a);
                return an[a] || "ru";
            }
            function bn(a, c, b, d) {
                if (!b.K || de(c.ca)) d();
                else {
                    var e = ge(a),
                        f = u(e, cn),
                        g = he(a, ""),
                        h = function () {
                            var q = G(",", z(dn(rf), ie(e)));
                            q = "" + q + en(q, g);
                            je(b, "gdpr", q);
                            d();
                        };
                    if (c.bj) f("31"), h();
                    else if (3 === c.id) h();
                    else {
                        var k = J(a),
                            l = k.C("f1");
                        if (l) l(h);
                        else if (((l = ie(e)), $a(vc(rf), l))) h();
                        else if (g.C("yandex_login"))
                            f("13"), g.D("gdpr", Qc, 525600), h();
                        else {
                            l = ke(a);
                            var m = T(a);
                            var p = /(^|\w+\.)yango(\.yandex)?\.com$/.test(
                                m.hostname
                            )
                                ? {
                                      url: "https://yastatic.net/s3/taxi-front/yango-gdpr-popup/",
                                      version: 2,
                                      kf: fn,
                                      sf: "_inversed_buttons",
                                  }
                                : void 0;
                            l || p
                                ? ((l = g.C("gdpr")),
                                  H(l, wc)
                                      ? (f(l === sf ? "12" : "3"), h())
                                      : tf(a) || gn(a)
                                      ? (f("17"), h())
                                      : hn(a)
                                            .then(R, D)
                                            .then(function (q) {
                                                q
                                                    ? (f("28"), h())
                                                    : (Kh(h),
                                                      k.D("f1", Kh),
                                                      (0, uf[0])(a)
                                                          .then(U("params.eu"))
                                                          .then(function (r) {
                                                              if (
                                                                  r ||
                                                                  ib(
                                                                      m.href,
                                                                      "yagdprcheck=1"
                                                                  ) ||
                                                                  g.C(
                                                                      "yaGdprCheck"
                                                                  )
                                                              ) {
                                                                  g.D(
                                                                      "gdpr_popup",
                                                                      sf
                                                                  );
                                                                  jn(a, c);
                                                                  if (rb(a))
                                                                      return kn(
                                                                          a,
                                                                          f,
                                                                          c
                                                                      );
                                                                  var t = Lh(
                                                                      a,
                                                                      e
                                                                  );
                                                                  if (t)
                                                                      return (
                                                                          (r =
                                                                              ln(
                                                                                  a,
                                                                                  f,
                                                                                  t,
                                                                                  c,
                                                                                  p
                                                                              )),
                                                                          r.then(
                                                                              C(
                                                                                  [
                                                                                      a,
                                                                                      c,
                                                                                  ],
                                                                                  mn
                                                                              )
                                                                          ),
                                                                          r
                                                                      );
                                                              }
                                                              r || f("8");
                                                              return L.resolve({
                                                                  value: Qc,
                                                                  Hd: !0,
                                                              });
                                                          })
                                                          .then(function (r) {
                                                              g.fc(
                                                                  "gdpr_popup"
                                                              );
                                                              if (r) {
                                                                  var t =
                                                                      r.value;
                                                                  r = r.Hd;
                                                                  H(t, wc) &&
                                                                      g.D(
                                                                          "gdpr",
                                                                          t,
                                                                          r
                                                                              ? void 0
                                                                              : 525600
                                                                      );
                                                              }
                                                              t = ec(Mh, ma);
                                                              md(
                                                                  a,
                                                                  t,
                                                                  20
                                                              )(
                                                                  Ra(
                                                                      E(
                                                                          a,
                                                                          "gdr"
                                                                      ),
                                                                      D
                                                                  )
                                                              );
                                                              k.D("f1", ma);
                                                          })
                                                          ["catch"](
                                                              E(a, "gdp.a")
                                                          ));
                                            }))
                                : (f("14"), h());
                        }
                    }
                }
            }
            function mn(a, c) {
                if (ke(a)) {
                    var b = ge(a),
                        d = Ea(a, c);
                    d = d && d.params;
                    b = z(u(nn, n), ie(b));
                    d && b.length && d("gdpr", ua(b));
                }
            }
            function kn(a, c, b) {
                var d = le(a, b);
                return new L(function (e) {
                    var f;
                    if (d) {
                        var g = d.$,
                            h = v(u("4", c), u(null, e)),
                            k = S(a, h, 2e3, "gdp.f.t");
                        d.Pf(((f = {}), (f.type = "isYandex"), f))
                            .then(function (l) {
                                l.isYandex
                                    ? (c("5"),
                                      g.F(Nh, function (m) {
                                          e({ value: Oh(m[1].type) });
                                      }))
                                    : (c("6"), e(null));
                            })
                            ["catch"](h)
                            .then(C([a, k], la));
                    } else e({ value: sf, Hd: !0 });
                });
            }
            function jn(a, c) {
                var b = le(a, c);
                b &&
                    b.$.F(["isYandex"], function () {
                        var d;
                        return (
                            (d = { type: "isYandex" }), (d.isYandex = ke(a)), d
                        );
                    });
                return b;
            }
            function on(a, c, b) {
                a = b || Jh(a);
                return H(a, c) ? a : "en";
            }
            function Oh(a) {
                if (H(a, ["GDPR-ok-view-default", "GDPR-ok-view-detailed"]))
                    return Qc;
                a = a.replace("GDPR-ok-view-detailed-", "");
                return H(a, wc) ? a : Qc;
            }
            function Ph(a, c, b) {
                var d = n(a, "AppMetricaInitializer"),
                    e = n(d, "init");
                if (e)
                    try {
                        I(e, d)(Mb(a, c));
                    } catch (f) {}
                else Qh = S(a, C([a, c, 2 * b], Ph), b, "ai.d");
                return function () {
                    return la(a, Qh);
                };
            }
            function Rh(a, c, b, d) {
                var e,
                    f,
                    g,
                    h = b.Oh,
                    k = b.Jh;
                b = b.isTrusted;
                a = vf(a, k);
                k = k.readOnly;
                d =
                    ((e = {}),
                    (e.fi = wf(
                        ((f = {}),
                        (f.a = h ? 1 : 0),
                        (f.b = a),
                        (f.c = d || 0),
                        (f.d = k ? 1 : null),
                        f)
                    ).Fa()),
                    e);
                ca(b) || (d.ite = sb(b));
                c.params(((g = {}), (g.__ym = d), g));
            }
            function Sh(a, c) {
                var b = n(c, "target");
                if (b) {
                    var d = n(b, "value");
                    if ((d = ab(d)) && !(100 <= Sa(d))) {
                        var e = "tel" === n(b, "type"),
                            f = 0 < hb(d, "@") && !e,
                            g = Vb(d),
                            h = Sa(g);
                        if (f || (!f && (e || h))) {
                            if (f) {
                                if (((d = Th(d)), 5 > Sa(d) || 100 < Sa(d)))
                                    return;
                            } else {
                                if (
                                    pn(d) ||
                                    Sa(d) - h > h ||
                                    10 > Sa(g) ||
                                    16 < Sa(g)
                                )
                                    return;
                                e = g[0];
                                g = d[1];
                                if ("+" === d[0] && g !== e) return;
                                d = Uh(a, d);
                            }
                            e = n(c, "isTrusted");
                            return { Jh: b, Oh: f, Kh: d, isTrusted: e };
                        }
                    }
                }
            }
            function Vh(a, c, b, d, e) {
                if (!me(a)) return D;
                var f = [],
                    g = fa(a);
                Nb(a)(
                    Ra(D, function () {
                        var h = jb(c, a.document.body);
                        e && (h = ha(e, h));
                        x(function (l) {
                            f.push(g.F(l, b, d));
                        }, h);
                        if (Fa("MutationObserver", a.MutationObserver)) {
                            var k = c.toUpperCase();
                            h = new a.MutationObserver(
                                E(a, "de.m", function (l) {
                                    x(function (m) {
                                        var p = m.addedNodes;
                                        m = m.removedNodes;
                                        p &&
                                            p.length &&
                                            x(function (q) {
                                                nd(
                                                    a,
                                                    q,
                                                    function (r) {
                                                        r.nodeName !== k ||
                                                            (e && !e(r)) ||
                                                            f.push(
                                                                g.F(r, b, d)
                                                            );
                                                    },
                                                    void 0,
                                                    a.NodeFilter.SHOW_ELEMENT,
                                                    !0
                                                );
                                            }, p);
                                        m &&
                                            m.length &&
                                            x(function (q) {
                                                nd(
                                                    a,
                                                    q,
                                                    function (r) {
                                                        r.nodeName !== k ||
                                                            (e && !e(r)) ||
                                                            g.vb(r, b, d);
                                                    },
                                                    void 0,
                                                    a.NodeFilter.SHOW_ELEMENT,
                                                    !0
                                                );
                                            }, m);
                                    }, l);
                                })
                            );
                            h.observe(a.document.body, {
                                childList: !0,
                                subtree: !0,
                            });
                            f.push(I(h.disconnect, h));
                        }
                    })
                );
                return C([ma, f], x);
            }
            function qn(a) {
                var c = n(a, "speechSynthesis.getVoices");
                if (c)
                    return (
                        (a = I(c, a.speechSynthesis)),
                        xc(function (b) {
                            return z(u(b, n), rn);
                        }, a())
                    );
            }
            function sn(a, c, b) {
                return G("x", z(v(R, Ga("concat", "" + a), u(b, n)), c));
            }
            function tn(a, c) {
                var b = c.yg;
                if (!un(a, b)) return "";
                var d = [];
                a: {
                    var e = vn(a, b);
                    try {
                        var f = C(e, v)()();
                        break a;
                    } catch (F) {
                        if ("ccf" === F.message) {
                            f = null;
                            break a;
                        }
                        Ua(F);
                    }
                    f = void 0;
                }
                if (Xa(f)) var g = "";
                else
                    try {
                        g = f.toDataURL();
                    } catch (F) {
                        g = "";
                    }
                (f = g) && d.push(f);
                var h = b.getContextAttributes();
                try {
                    var k = oa(
                        b.getSupportedExtensions,
                        "getSupportedExtensions"
                    )
                        ? b.getSupportedExtensions() || []
                        : [];
                } catch (F) {
                    k = [];
                }
                k = G(";", k);
                f = xf(b.getParameter(b.ALIASED_LINE_WIDTH_RANGE), b);
                e = xf(b.getParameter(b.ALIASED_POINT_SIZE_RANGE), b);
                g = b.getParameter(b.ALPHA_BITS);
                h = h && h.antialias ? "yes" : "no";
                var l = b.getParameter(b.BLUE_BITS),
                    m = b.getParameter(b.DEPTH_BITS),
                    p = b.getParameter(b.GREEN_BITS),
                    q =
                        b.getExtension("EXT_texture_filter_anisotropic") ||
                        b.getExtension(
                            "WEBKIT_EXT_texture_filter_anisotropic"
                        ) ||
                        b.getExtension("MOZ_EXT_texture_filter_anisotropic");
                if (q) {
                    var r = b.getParameter(q.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                    0 === r && (r = 2);
                }
                r = {
                    nj: k,
                    "webgl aliased line width range": f,
                    "webgl aliased point size range": e,
                    "webgl alpha bits": g,
                    "webgl antialiasing": h,
                    "webgl blue bits": l,
                    "webgl depth bits": m,
                    "webgl green bits": p,
                    "webgl max anisotropy": q ? r : null,
                    "webgl max combined texture image units": b.getParameter(
                        b.MAX_COMBINED_TEXTURE_IMAGE_UNITS
                    ),
                    "webgl max cube map texture size": b.getParameter(
                        b.MAX_CUBE_MAP_TEXTURE_SIZE
                    ),
                    "webgl max fragment uniform vectors": b.getParameter(
                        b.MAX_FRAGMENT_UNIFORM_VECTORS
                    ),
                    "webgl max render buffer size": b.getParameter(
                        b.MAX_RENDERBUFFER_SIZE
                    ),
                    "webgl max texture image units": b.getParameter(
                        b.MAX_TEXTURE_IMAGE_UNITS
                    ),
                    "webgl max texture size": b.getParameter(
                        b.MAX_TEXTURE_SIZE
                    ),
                    "webgl max varying vectors": b.getParameter(
                        b.MAX_VARYING_VECTORS
                    ),
                    "webgl max vertex attribs": b.getParameter(
                        b.MAX_VERTEX_ATTRIBS
                    ),
                    "webgl max vertex texture image units": b.getParameter(
                        b.MAX_VERTEX_TEXTURE_IMAGE_UNITS
                    ),
                    "webgl max vertex uniform vectors": b.getParameter(
                        b.MAX_VERTEX_UNIFORM_VECTORS
                    ),
                    "webgl max viewport dims": xf(
                        b.getParameter(b.MAX_VIEWPORT_DIMS),
                        b
                    ),
                    "webgl red bits": b.getParameter(b.RED_BITS),
                    "webgl renderer": b.getParameter(b.RENDERER),
                    "webgl shading language version": b.getParameter(
                        b.SHADING_LANGUAGE_VERSION
                    ),
                    "webgl stencil bits": b.getParameter(b.STENCIL_BITS),
                    "webgl vendor": b.getParameter(b.VENDOR),
                    "webgl version": b.getParameter(b.VERSION),
                };
                yf(d, r, ": ");
                a: {
                    try {
                        var t = b.getExtension("WEBGL_debug_renderer_info");
                        if (t) {
                            var y = {
                                "webgl unmasked vendor": b.getParameter(
                                    t.UNMASKED_VENDOR_WEBGL
                                ),
                                "webgl unmasked renderer": b.getParameter(
                                    t.UNMASKED_RENDERER_WEBGL
                                ),
                            };
                            break a;
                        }
                    } catch (F) {}
                    y = {};
                }
                yf(d, y);
                if (!b.getShaderPrecisionFormat) return G("~", d);
                yf(d, wn(b));
                return G("~", d);
            }
            function yf(a, c, b) {
                void 0 === b && (b = ":");
                x(function (d) {
                    return a.push("" + d[0] + b + d[1]);
                }, Ia(c));
            }
            function xn(a, c, b, d) {
                c = d.C("cc");
                d = C(["cc", ""], d.D);
                if (c) {
                    var e = c.split("&");
                    c = e[0];
                    (e = (e = e[1]) && Ja(e)) && 1440 < ja(a)(qb) - e
                        ? d()
                        : b.D("cc", c);
                } else Ba(0)(c) || d();
            }
            function yn(a, c, b, d) {
                return qa(c, function (e) {
                    if (!zf(e) && !ne(a))
                        if (((e = d.C("zzlc")), W(e) || Xa(e) || "na" === e)) {
                            var f = db(a);
                            if (f && (e = fc(a))) {
                                var g = f("iframe");
                                A(g.style, {
                                    display: "none",
                                    width: "1px",
                                    height: "1px",
                                    visibility: "hidden",
                                });
                                f = Af(a, 68);
                                var h = Bf(a, 79);
                                g.src =
                                    "https://mc.yandex." +
                                    (f || h ? "md" : "ru") +
                                    Wh("L21ldHJpa2EvenpsYy5odG1s");
                                e.appendChild(g);
                                var k = 0,
                                    l = fa(a).F(
                                        a,
                                        ["message"],
                                        E(a, "zz.m", function (m) {
                                            (m = n(m, "data")) &&
                                                m.substr &&
                                                "__ym__zz" === m.substr(0, 8) &&
                                                (yc(g),
                                                (m = m.substr(8)),
                                                d.D("zzlc", m),
                                                b.D("zzlc", m),
                                                l(),
                                                la(a, k));
                                        })
                                    );
                                k = S(a, v(l, u(g, yc)), 3e3);
                            }
                        } else b.D("zzlc", e);
                });
            }
            function zn(a, c, b) {
                var d, e;
                c = tb(u(a, n), An);
                c = W(c) ? null : n(a, c);
                if (
                    n(a, "navigator.onLine") &&
                    c &&
                    c &&
                    n(c, "prototype.constructor.name")
                ) {
                    var f = new c(((d = {}), (d.iceServers = []), d));
                    a = n(f, "createDataChannel");
                    P(a) &&
                        (I(a, f, "y.metrika")(),
                        (a = n(f, "createOffer")),
                        P(a) &&
                            !a.length &&
                            ((a = I(a, f)()),
                            (d = n(a, "then")),
                            P(d) &&
                                I(d, a, function (g) {
                                    var h = n(f, "setLocalDescription");
                                    P(h) && I(h, f, g, D, D)();
                                })(),
                            A(
                                f,
                                ((e = {}),
                                (e.onicecandidate = function () {
                                    var g,
                                        h = n(f, "close");
                                    if (P(h)) {
                                        h = I(h, f);
                                        try {
                                            var k =
                                                (g = n(
                                                    f,
                                                    "localDescription.sdp"
                                                )) &&
                                                g.match(
                                                    /c=IN\s[\w\d]+\s([\w\d:.]+)/
                                                );
                                        } catch (l) {
                                            f.onicecandidate = D;
                                            "closed" !== f.iceConnectionState &&
                                                h();
                                            return;
                                        }
                                        k &&
                                            0 < k.length &&
                                            ((g = gc(k[1])), b.D("pp", g));
                                        f.onicecandidate = D;
                                        h();
                                    }
                                }),
                                e)
                            )));
                }
            }
            function Bn(a, c, b) {
                var d,
                    e = od(a, c);
                if (e) {
                    e.$.F(["gpu-get"], function () {
                        var h;
                        return (
                            (h = {}),
                            (h.type = "gpu-get"),
                            (h.pu = b.C("pu")),
                            h
                        );
                    });
                    var f = n(a, "opener");
                    if (f) {
                        var g = S(a, C([a, c, b], Xh), 200, "pu.m");
                        e.fe(
                            f,
                            ((d = {}), (d.type = "gpu-get"), d),
                            function (h, k) {
                                var l = n(k, "pu");
                                l && (la(a, g), b.D("pu", l));
                            }
                        );
                    } else Xh(a, c, b);
                }
            }
            function Xh(a, c, b) {
                var d = n(a, "location.host");
                a = pd(a, c);
                b.D("pu", "" + gc(d) + a);
            }
            function Cn(a) {
                a = db(a);
                if (!a) return "";
                a = a("video");
                try {
                    var c = Ga("canPlayType", a),
                        b = xc(function (d) {
                            return z(v(R, Ga("concat", d + "; codecs=")), Dn);
                        }, Yh);
                    return z(c, Yh.concat(b));
                } catch (d) {
                    return "canPlayType";
                }
            }
            function En(a) {
                var c = n(a, "matchMedia");
                if (c && Fa("matchMedia", c)) {
                    var b = Ga("matchMedia", a);
                    return N(
                        function (d, e) {
                            d[e] = b("(" + e + ")");
                            return d;
                        },
                        {},
                        Fn
                    );
                }
            }
            function wn(a) {
                return N(
                    function (c, b) {
                        var d = b[0],
                            e = b[1];
                        c[d + " precision"] = n(e, "precision") || "n";
                        c[d + " precision rangeMin"] = n(e, "rangeMin") || "n";
                        c[d + " precision rangeMax"] = n(e, "rangeMax") || "n";
                        return c;
                    },
                    {},
                    [
                        [
                            "webgl vertex shader high float",
                            a.getShaderPrecisionFormat(
                                a.VERTEX_SHADER,
                                a.HIGH_FLOAT
                            ),
                        ],
                        [
                            "webgl vertex shader medium",
                            a.getShaderPrecisionFormat(
                                a.VERTEX_SHADER,
                                a.MEDIUM_FLOAT
                            ),
                        ],
                        [
                            "webgl vertex shader low float",
                            a.getShaderPrecisionFormat(
                                a.VERTEX_SHADER,
                                a.LOW_FLOAT
                            ),
                        ],
                        [
                            "webgl fragment shader high float",
                            a.getShaderPrecisionFormat(
                                a.FRAGMENT_SHADER,
                                a.HIGH_FLOAT
                            ),
                        ],
                        [
                            "webgl fragment shader medium float",
                            a.getShaderPrecisionFormat(
                                a.FRAGMENT_SHADER,
                                a.MEDIUM_FLOAT
                            ),
                        ],
                        [
                            "webgl fragment shader low float",
                            a.getShaderPrecisionFormat(
                                a.FRAGMENT_SHADER,
                                a.LOW_FLOAT
                            ),
                        ],
                        [
                            "webgl vertex shader high int",
                            a.getShaderPrecisionFormat(
                                a.VERTEX_SHADER,
                                a.HIGH_INT
                            ),
                        ],
                        [
                            "webgl vertex shader medium int",
                            a.getShaderPrecisionFormat(
                                a.VERTEX_SHADER,
                                a.MEDIUM_INT
                            ),
                        ],
                        [
                            "webgl vertex shader low int",
                            a.getShaderPrecisionFormat(
                                a.VERTEX_SHADER,
                                a.LOW_INT
                            ),
                        ],
                        [
                            "webgl fragment shader high int",
                            a.getShaderPrecisionFormat(
                                a.FRAGMENT_SHADER,
                                a.HIGH_INT
                            ),
                        ],
                        [
                            "webgl fragment shader medium int",
                            a.getShaderPrecisionFormat(
                                a.FRAGMENT_SHADER,
                                a.MEDIUM_INT
                            ),
                        ],
                        [
                            "webgl fragment shader low int precision",
                            a.getShaderPrecisionFormat(
                                a.FRAGMENT_SHADER,
                                a.LOW_INT
                            ),
                        ],
                    ]
                );
            }
            function vn(a, c) {
                return [
                    function () {
                        var b = c.createBuffer();
                        (b &&
                            c.getParameter &&
                            Fa("getParameter", c.getParameter)) ||
                            Cf();
                        c.bindBuffer(c.ARRAY_BUFFER, b);
                        var d = new a.Float32Array(Gn);
                        c.bufferData(c.ARRAY_BUFFER, d, c.STATIC_DRAW);
                        b.Qh = 3;
                        b.Zh = 3;
                        d = c.createProgram();
                        var e = c.createShader(c.VERTEX_SHADER);
                        (d && e) || Cf();
                        return { $d: d, aj: e, $i: b };
                    },
                    function (b) {
                        var d = b.$d,
                            e = b.aj;
                        c.shaderSource(
                            e,
                            "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"
                        );
                        c.compileShader(e);
                        c.attachShader(d, e);
                        (d = c.createShader(c.FRAGMENT_SHADER)) || Cf();
                        return A(b, { fh: d });
                    },
                    function (b) {
                        var d = b.$d,
                            e = b.fh;
                        c.shaderSource(
                            e,
                            "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"
                        );
                        c.compileShader(e);
                        c.attachShader(d, e);
                        c.linkProgram(d);
                        c.useProgram(d);
                        return b;
                    },
                    function (b) {
                        var d = b.$d;
                        b = b.$i;
                        d.Zi = c.getAttribLocation(d, "attrVertex");
                        d.ai = c.getUniformLocation(d, "uniformOffset");
                        c.enableVertexAttribArray(d.Hj);
                        c.vertexAttribPointer(d.Zi, b.Qh, c.FLOAT, !1, 0, 0);
                        c.uniform2f(d.ai, 1, 1);
                        c.drawArrays(c.TRIANGLE_STRIP, 0, b.Zh);
                        return c.canvas;
                    },
                ];
            }
            function un(a, c) {
                if (!P(a.Float32Array)) return !1;
                var b = n(c, "canvas");
                if (!b || !Fa("toDataUrl", b.toDataURL)) return !1;
                try {
                    c.createBuffer();
                } catch (d) {
                    return !1;
                }
                return !0;
            }
            function xf(a, c) {
                c.clearColor(0, 0, 0, 1);
                c.enable(c.DEPTH_TEST);
                c.depthFunc(c.LEQUAL);
                c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT);
                return "[" + n(a, "0") + ", " + n(a, "1") + "]";
            }
            function Hn(a, c) {
                if (n(c, "settings.ins")) {
                    var b = J(a);
                    if (!b.C("scip")) {
                        var d = Va(a),
                            e = ja(a)(qb),
                            f = oe(d.C("sci"));
                        if (!(f && 1440 >= e - f)) {
                            f = va(a, "ci");
                            var g = ["sync.cook.int"],
                                h = function (l) {
                                    l = b.C("scip", "") + l;
                                    b.D("scip", l);
                                },
                                k = u("a", h);
                            b.D("scip", "0");
                            return f({ ba: { ha: g, Oa: 3e3, yb: !0 } }, [
                                "https://an.yandex.ru/sync_cookie",
                            ])
                                .then(function (l) {
                                    l = n(l.Lc, "CookieMatchUrls");
                                    if (O(l) && Sa(l)) {
                                        h("1");
                                        var m = va(a, "c");
                                        l = z(function (p, q) {
                                            return m(
                                                { ba: { ha: g, Oa: 3e3 } },
                                                ["https://" + p]
                                            )["catch"](
                                                v(u("b", h), u("" + q, h))
                                            );
                                        }, ha(ia, l));
                                        return L.all(l);
                                    }
                                    k();
                                }, k)
                                .then(function () {
                                    var l = b.C("scip");
                                    !l ||
                                        ib(l, "a") ||
                                        ib(l, "b") ||
                                        (d.D("sci", e), h("2"));
                                }, D);
                        }
                    }
                }
            }
            function Zh(a) {
                return {
                    N: function (c, b) {
                        if (!c.K) return b();
                        var d = J(a).C("fid");
                        !$h && d && (je(c, "fid", d), ($h = !0));
                        return b();
                    },
                };
            }
            function In(a, c) {
                var b = a.document;
                if (H(b.readyState, ["interactive", "complete"])) Tb(a, c);
                else {
                    var d = fa(a),
                        e = d.F,
                        f = d.vb,
                        g = function () {
                            f(b, ["DOMContentLoaded"], g);
                            f(a, ["load"], g);
                            c();
                        };
                    e(b, ["DOMContentLoaded"], g);
                    e(a, ["load"], g);
                }
            }
            function Df(a) {
                return {
                    N: function (c, b) {
                        var d = c.K;
                        if (d) {
                            var e = J(a).C("adBlockEnabled");
                            e && d.D("adb", e);
                        }
                        b();
                    },
                };
            }
            function Jn(a) {
                var c = E(a, "i.clch", Kn);
                fa(a).F(a.document, ["click"], u(a, c), { passive: !1 });
                return function (b) {
                    var d = xa.Qa,
                        e = a.Ya[xa.bc],
                        f = !!e._informer;
                    e._informer = A({ domain: "informer.yandex.ru" }, b);
                    f ||
                        Nc(a, {
                            src: d + "//informer.yandex.ru/metrika/informer.js",
                        });
                };
            }
            function Ln(a, c) {
                var b = Va(a),
                    d = b.C,
                    e = b.D;
                if ("" === d("cc")) {
                    e("cc", 0);
                    var f = ja(a),
                        g = J(a);
                    va(
                        a,
                        "6",
                        c
                    )({ ba: { yb: !0, Ce: !1 } }, ["https://mc.yandex.md/cc"])
                        .then(function (h) {
                            h = n(h.Lc, "c");
                            e("cc", h + "&" + f(qb));
                            g.D("cc", h);
                        })
                        ["catch"](function (h) {
                            var k = f(qb);
                            e("cc", "&" + k);
                            Rc(a, "cc", h);
                        });
                }
            }
            function pe(a, c) {
                if (!c) return !1;
                var b = T(a);
                return new RegExp(c).test("" + b.pathname + b.hash + b.search);
            }
            function Mn(a, c) {
                return qa(c, function (b) {
                    var d = n(b, "settings.dr");
                    return {
                        Ng: Nn(a, d),
                        isEnabled: n(b, "settings.auto_goals"),
                    };
                });
            }
            function On(a, c, b, d, e) {
                b = Ef(a.document.body, b);
                d = Ef(a.document.body, d);
                H(e.target, [b, d]) && Ff(a, c);
            }
            function ai(a, c, b, d) {
                (b = Pn(a, d, b)) && Ff(a, c, b);
            }
            function bi(a, c) {
                var b = ci(a, c);
                return Qn(a, b);
            }
            function ci(a, c) {
                var b = Ef(a.document.body, c);
                return b ? Rn(a, b) : "";
            }
            function Ff(a, c, b) {
                if ((c = Ea(a, c)))
                    (a = qd(["dr", b || "" + Ya(a, 10, 99)])),
                        c.params(qd(["__ym", a]));
            }
            function Ef(a, c) {
                var b = null;
                try {
                    b = c ? dc(c, a) : b;
                } catch (d) {}
                return b;
            }
            function di(a) {
                a = Ca(Wh(a));
                return z(function (c) {
                    c = c.charCodeAt(0).toString(2);
                    return ei("0", 8, c);
                }, a);
            }
            function Rn(a, c) {
                if (!c) return "";
                var b = [],
                    d = n(a, "document");
                nd(a, c, function (e) {
                    if (e.nodeType === d.TEXT_NODE) var f = e.textContent;
                    else
                        e instanceof a.HTMLImageElement
                            ? (f = e.alt)
                            : e instanceof a.HTMLInputElement && (f = e.value);
                    (f = f && ab(f)) && b.push(f);
                });
                return 0 === b.length ? "" : G(" ", b);
            }
            function Sn(a, c, b) {
                a = Oa(b);
                b = a[1];
                "track" === a[0] && c({ version: "0", jc: b });
            }
            function Tn(a, c, b) {
                if (b) {
                    var d = b.version;
                    (b = n(Un, d + "." + b.jc)) &&
                        ((c && H(b, Vn)) || a("ym-" + b + "-" + d));
                }
            }
            function Wn(a, c, b) {
                if ("rt" === b)
                    return "https://" + fi(a, c) + ".mc.yandex.ru/watch/3/1";
                if ("mf" === b) {
                    b = T(a);
                    b = qe(b.protocol + "//" + b.hostname + b.pathname);
                    c = pd(a, c);
                    var d = "";
                    do d += Ya(a);
                    while (d.length < c.length);
                    d = d.slice(0, c.length);
                    a = "";
                    for (var e = 0; e < c.length; e += 1)
                        a += (c.charCodeAt(e) + d.charCodeAt(e) - 96) % 10;
                    a = [d, a];
                    return (
                        "https://adstat.yandex.ru/track?service=metrika&id=" +
                        a[1] +
                        "&mask=" +
                        a[0] +
                        "&ref=" +
                        b
                    );
                }
            }
            function Xn(a, c, b) {
                var d,
                    e = Gf(c).Mb;
                return va(
                    a,
                    "pi",
                    c
                )({ K: Ka(((d = {}), (d[e] = 1), d)) }, [b]);
            }
            function Yn(a, c, b) {
                return new L(function (d, e) {
                    if (gi(a, re, "isp")) {
                        var f = D,
                            g = function (h) {
                                ("1" === h ? d : e)();
                                f();
                                hi(re, "isp");
                            };
                        f = fa(a).F(
                            a,
                            ["message"],
                            C([b, g], E(a, "isp.stat.m", Zn))
                        );
                        S(a, g, 1500);
                    } else e();
                });
            }
            function Zn(a, c, b) {
                var d = n(b, "data");
                if (ia(d)) {
                    var e = d.split("*");
                    d = e[0];
                    var f = e[1];
                    e = e[2];
                    "sc.frame" === d && b.source
                        ? b.source.postMessage("sc.images*" + a, "*")
                        : "sc.image" === d && f === a && c(e);
                }
            }
            function $n(a, c) {
                var b = Va(a),
                    d = "wv2rf:" + K(c),
                    e = c.Zb,
                    f = Hf(a),
                    g = b.C(d),
                    h = c.Si;
                return W(f) || Xa(g)
                    ? Ha(function (k, l) {
                          qa(c, function (m) {
                              var p = !!n(m, "settings.webvisor.forms");
                              p = !n(m, "settings.x3") && p;
                              f = Hf(a) || n(m, "settings.eu");
                              b.D(d, sb(p));
                              l({ Zb: e, Gd: !!f, wf: p, $f: h });
                          });
                      })
                    : If({ Zb: e, Gd: f, wf: !!Ja(g), $f: h });
            }
            function ao() {
                var a = N(
                    function (c, b) {
                        c[b[0]] = { $c: 0, wg: 1 / b[1] };
                        return c;
                    },
                    {},
                    [
                        ["blur", 0.0034],
                        ["change", 0.0155],
                        ["click", 0.01095],
                        ["deviceRotation", 2e-4],
                        ["focus", 0.0061],
                        ["mousemove", 0.5132],
                        ["scroll", 0.4795],
                        ["selection", 0.0109],
                        ["touchcancel", 2e-4],
                        ["touchend", 0.0265],
                        ["touchforcechange", 0.0233],
                        ["touchmove", 0.1442],
                        ["touchstart", 0.027],
                        ["zoom", 0.0014],
                    ]
                );
                return {
                    rg: function (c) {
                        if (c.length)
                            return {
                                type: "activity",
                                data: N(
                                    function (b, d) {
                                        var e = a[d];
                                        return Math.round(b + e.$c * e.wg);
                                    },
                                    0,
                                    ea(a)
                                ),
                            };
                    },
                    bi: function (c) {
                        c && (c = a[c.data.type || c.event]) && (c.$c += 1);
                    },
                };
            }
            function bo(a) {
                return {
                    hh: function () {
                        var c = a.document.querySelector("base[href]");
                        return c ? c.getAttribute("href") : null;
                    },
                    jh: function () {
                        if (a.document.doctype) {
                            var c = A(
                                    {
                                        name: "html",
                                        publicId: "",
                                        systemId: "",
                                    },
                                    a.document.doctype
                                ),
                                b = c.publicId,
                                d = c.systemId;
                            return (
                                "<!DOCTYPE " +
                                G("", [
                                    c.name,
                                    b ? ' PUBLIC "' + b + '"' : "",
                                    !b && d ? " SYSTEM" : "",
                                    d ? ' "' + d + '"' : "",
                                ]) +
                                ">"
                            );
                        }
                        return null;
                    },
                };
            }
            function co(a, c, b) {
                var d = rd(a),
                    e = fa(a),
                    f = rb(a),
                    g = c.ud(),
                    h =
                        !n(a, "postMessage") ||
                        (f && !n(a, "parent.postMessage")),
                    k = u(d, R);
                if (h) {
                    if (!g)
                        return (
                            S(a, I(d.R, d, "i", { ta: !1 }), 10),
                            { sd: k, Lf: D, stop: D }
                        );
                    Ua(Pa());
                }
                d.F(["sr"], function (r) {
                    var t,
                        y = ii(a, r.source);
                    y &&
                        Jf(
                            a,
                            r.source,
                            ((t = {}),
                            (t.type = "\u043d"),
                            (t.frameId = c.ra().Z(y)),
                            t)
                        );
                });
                d.F(["sd"], function (r) {
                    var t = r.data;
                    r = r.source;
                    (a === r || ii(a, r)) &&
                        d.R("sdr", { data: t.data, frameId: t.frameId });
                });
                if (f && !g) {
                    var l = !1,
                        m = 0,
                        p = function () {
                            var r;
                            Jf(a, a.parent, ((r = {}), (r.type = "sr"), r));
                            m = S(a, p, 100, "if.i");
                        };
                    p();
                    var q = function (r) {
                        d.ga(["\u043d"], q);
                        la(a, m);
                        var t = Sc(a, r.origin).host;
                        l ||
                            r.source !== a.parent ||
                            !r.data.frameId ||
                            ("about:blank" !== T(a).host && !H(t, b)) ||
                            ((l = !0),
                            d.R("i", { frameId: r.data.frameId, ta: !0 }));
                    };
                    d.F(["\u043d"], q);
                    S(
                        a,
                        function () {
                            d.ga(["\u043d"], q);
                            la(a, m);
                            l || ((l = !0), d.R("i", { ta: !1 }));
                        },
                        2e3,
                        "if.r"
                    );
                }
                e = e.F(a, ["message"], function (r) {
                    var t = Lb(a, r.data);
                    t &&
                        t.type &&
                        H(t.type, eo) &&
                        d.R(t.type, {
                            data: t,
                            source: r.source,
                            origin: r.origin,
                        });
                });
                return {
                    sd: k,
                    Lf: function (r) {
                        var t;
                        return Jf(
                            a,
                            a.parent,
                            ((t = {}),
                            (t.frameId = c.ud()),
                            (t.data = r),
                            (t.type = "sd"),
                            t)
                        );
                    },
                    stop: e,
                };
            }
            function ii(a, c) {
                try {
                    return tb(
                        v(U("contentWindow"), Ba(c)),
                        Ca(a.document.querySelectorAll("iframe"))
                    );
                } catch (b) {
                    return null;
                }
            }
            function Jf(a, c, b) {
                c || Ua(Pa());
                a = Mb(a, b);
                c.postMessage(a, "*");
            }
            function ji() {
                return (
                    hc() +
                    hc() +
                    "-" +
                    hc() +
                    "-" +
                    hc() +
                    "-" +
                    hc() +
                    "-" +
                    hc() +
                    hc() +
                    hc()
                );
            }
            function hc() {
                return Math.floor(65536 * (1 + Math.random()))
                    .toString(16)
                    .substring(1);
            }
            function fo(a, c) {
                if (ia(c)) return c;
                var b = a.textContent;
                if (ia(b)) return b;
                b = a.data;
                if (ia(b)) return b;
                b = a.nodeValue;
                return ia(b) ? b : "";
            }
            function go(a, c, b, d, e) {
                void 0 === d && (d = {});
                void 0 === e && (e = Ma(c));
                var f = A(
                    N(
                        function (h, k) {
                            h[k.name] = k.value;
                            return h;
                        },
                        {},
                        Ca(c.attributes)
                    ),
                    d
                );
                A(f, ho(c, e, f));
                var g =
                    (d = zb(
                        function (h, k) {
                            var l = k[0],
                                m = se(a, c, l, k[1], b, e),
                                p = m.value;
                            ca(p) ? delete f[l] : (f[l] = p);
                            return h || m.mb;
                        },
                        !1,
                        Ia(f)
                    )) && Oc(c);
                g && ((f.width = g.width), (f.height = g.height));
                return { mb: d, sg: f };
            }
            function ho(a, c, b) {
                var d = {};
                Kf(a)
                    ? (d.value = a.value || b.value)
                    : "IMG" !== c || b.src || (d.src = "");
                return d;
            }
            function se(a, c, b, d, e, f) {
                void 0 === f && (f = Ma(c));
                var g = { mb: !1, value: d };
                if (Kf(c))
                    "value" === b
                        ? !ca(d) &&
                          "" !== d &&
                          ((b = e.Gd),
                          (f = e.wf),
                          (e = sd(a, c)),
                          f
                              ? ((b = Tc(a, c, b)),
                                (a = b.ob),
                                (c = b.fb),
                                (b = b.Ua),
                                (g.mb = !c && (e || a)))
                              : ((g.mb = e),
                                (b = !(c && ic("ym-record-keys", c)))),
                          b || e) &&
                          ((d = "" + d),
                          (g.value =
                              0 < d.length ? ki("\u2022", d.length) : ""))
                        : "checked" === b &&
                          H((c.getAttribute("type") || "").toLowerCase(), io)
                        ? (g.value = c.checked ? "checked" : null)
                        : jo.test(b) && Lf(a, c) && (g.value = null);
                else if ("IMG" === f && "src" === b)
                    (e = sd(a, c))
                        ? ((g.mb = e),
                          (g.value =
                              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="))
                        : (g.value =
                              (c.getAttribute("srcset") ? c.currentSrc : "") ||
                              c.src);
                else if ("A" === f && "href" === b) g.value = d ? "#" : "";
                else if (
                    H(b, ["srcset", "integrity", "crossorigin", "password"]) ||
                    (2 < b.length && 0 === hb(b, "on")) ||
                    ("IFRAME" === f && "src" === b) ||
                    ("SCRIPT" === f && H(b, ["src", "type"]))
                )
                    g.value = null;
                return g;
            }
            function Mf(a, c, b, d) {
                void 0 === d && (d = "wv2");
                return {
                    H: function (e, f) {
                        return E(a, d + "." + b + "." + f, e, void 0, c);
                    },
                };
            }
            function ko(a, c, b, d, e) {
                function f() {
                    l && l.stop();
                }
                if (!c.xb) return L.resolve(D);
                var g = va(a, "4", c),
                    h = { K: Ka() },
                    k = new lo(a, b, function (m, p, q) {
                        if (!g) return L.resolve();
                        var r = "wv-data=" + ld(m, !0),
                            t = E(a, "m.n.m.s");
                        p = {};
                        p["wv-part"] = "" + q;
                        q = m.length;
                        for (var y = 0, F = 255, Q = 255, M, na, ya; q; ) {
                            M = 21 < q ? 21 : q;
                            q -= M;
                            do
                                (na =
                                    "string" === typeof m
                                        ? m.charCodeAt(y)
                                        : m[y]),
                                    (y += 1),
                                    255 < na &&
                                        ((ya = na >> 8),
                                        (na &= 255),
                                        (na ^= ya)),
                                    (F += na),
                                    (Q += F);
                            while (--M);
                            F = (F & 255) + (F >> 8);
                            Q = (Q & 255) + (Q >> 8);
                        }
                        m =
                            (((F & 255) + (F >> 8)) << 8) |
                            ((Q & 255) + (Q >> 8));
                        return g(
                            A({}, h, {
                                ba: { da: r },
                                J:
                                    ((p["wv-check"] =
                                        "" + (65535 === m ? 0 : m)),
                                    (p["wv-type"] = b.type),
                                    p),
                            }),
                            c
                        )["catch"](t);
                    }),
                    l = mo(a, k, d, e);
                return qa(c, function (m) {
                    m && J(a).D("isEU", n(m, "settings.eu"));
                    J(a).C("oo") || (l && li(a, m) && l.start());
                    return f;
                });
            }
            function mo(a, c, b, d) {
                var e = a.document,
                    f = [],
                    g = fa(a),
                    h = ":submit" + Math.random(),
                    k = [],
                    l = I(c.flush, c),
                    m = ra(function (r, t) {
                        E(a, "hfv." + r, function () {
                            try {
                                var y = t.type;
                            } catch (F) {
                                return;
                            }
                            y = H(y, d);
                            c.push(t, { type: r });
                            y && l();
                        })();
                    }),
                    p = E(a, "sfv", function () {
                        var r = b(a),
                            t = no(a);
                        x(function (y) {
                            f.push(g.F(y.target, [y.event], m(y.type)));
                        }, r);
                        x(function (y) {
                            f.push(
                                g.F(
                                    y.target,
                                    [y.event],
                                    E(
                                        a,
                                        "hff." + y.type + "." + y.event,
                                        function (F) {
                                            x(
                                                Ha({ l: a, na: F, flush: l }),
                                                y.O
                                            );
                                        }
                                    )
                                )
                            );
                        }, t);
                        k = mi(a, "form", e);
                        e.attachEvent &&
                            ((r = mi(a, "form *", e)),
                            x(function (y) {
                                f.push(g.F(y, ["submit"], m("form")));
                            }, k),
                            x(function (y) {
                                Nf(y) &&
                                    f.push(g.F(y, ["change"], m("formInput")));
                            }, r));
                        x(function (y) {
                            var F = y.submit;
                            if (
                                P(F) ||
                                ("object" === typeof F && oo.test("" + F))
                            )
                                (y[h] = F),
                                    (y.submit = E(a, "fv", function () {
                                        var Q = { target: y, type: "submit" };
                                        m("document")(Q);
                                        return y[h]();
                                    }));
                        }, k);
                    }),
                    q = E(a, "ufv", function () {
                        x(ma, f);
                        x(function (r) {
                            r && (r.submit = r[h]);
                        }, k);
                        c.flush();
                    });
                return { start: p, stop: q };
            }
            function po(a, c) {
                var b = ha(function (e) {
                        return 0 < e.O.length;
                    }, c),
                    d = ni({ target: a.document, type: "document" });
                return z(v(R, d, qo(a)), b);
            }
            function oi(a, c) {
                var b = a.l,
                    d = [],
                    e = c.form;
                if (!c[Za] && e) {
                    var f = e.elements;
                    e = e.length;
                    for (var g = 0; g < e; g += 1) {
                        var h = f[g];
                        te(h) && !h[Za] && wa(d, zc(b, h));
                    }
                } else wa(d, zc(b, c));
                return d;
            }
            function Of(a) {
                if (td) {
                    td = !1;
                    var c = Ab(a.l),
                        b = [];
                    kb(a.l, b, 15) ? (a = []) : (V(b, c), (a = b));
                    return a;
                }
            }
            function pi(a) {
                if (!td) {
                    td = !0;
                    a = Ab(a.l);
                    var c = [];
                    Wb(c, 14);
                    V(c, a);
                    return c;
                }
            }
            function ro(a, c, b) {
                var d = c[Za];
                if (d) {
                    a: {
                        var e = Ab(a),
                            f = c[Za];
                        if (0 < f) {
                            var g = [];
                            c = Pf(a, c);
                            var h = Ac[f],
                                k = c[0] + "x" + c[1],
                                l = c[2] + "x" + c[3];
                            if (k !== h.rf) {
                                h.rf = k;
                                if (kb(a, g, 9)) {
                                    a = [];
                                    break a;
                                }
                                V(g, e);
                                V(g, f);
                                V(g, c[0]);
                                V(g, c[1]);
                            }
                            if (l !== h.size) {
                                h.size = l;
                                if (kb(a, g, 10)) {
                                    a = [];
                                    break a;
                                }
                                V(g, e);
                                V(g, f);
                                V(g, c[2]);
                                V(g, c[3]);
                            }
                            if (g.length) {
                                a = g;
                                break a;
                            }
                        }
                        a = [];
                    }
                    wa(b, a);
                }
                return d;
            }
            function Tc(a, c, b) {
                void 0 === b && (b = !1);
                if (!c) return { Ua: !1, fb: !1, ob: !1 };
                var d = c.getAttribute("type") || c.type;
                if ("button" === d) return { Ua: !1, fb: !1, ob: !1 };
                var e = ha(qi, [c.className, c.id, c.name]),
                    f = c && ic("ym-record-keys", c);
                d = (d && H(d, ri)) || $a(eb(so), e);
                var g;
                (g = d) ||
                    ((g = c.placeholder),
                    (g = $a(eb(to), e) || (qi(g) && uo.test(g || ""))));
                e = g;
                return {
                    Ua: !f && (Qf(a, c) || (e && b) || (e && !d && !b)),
                    fb: f,
                    ob: e,
                };
            }
            function Qf(a, c) {
                return Lf(a, c) || ud(a, c) ? !0 : sd(a, c);
            }
            function qi(a) {
                return !!(a && 2 < a.length);
            }
            function Kf(a) {
                try {
                    var c = Ma(a);
                    if (H(c, Rf)) {
                        if ("INPUT" === c) {
                            var b = a.type;
                            return !b || H(b.toLocaleLowerCase(), vo);
                        }
                        return !0;
                    }
                } catch (d) {}
                return !1;
            }
            function si(a, c) {
                return c && ic("(ym-disable-submit|-metrika-noform)", c);
            }
            function wo(a, c) {
                return G(
                    "",
                    z(function (b) {
                        return a.isNaN(b)
                            ? xo.test(b)
                                ? ((b = b.toUpperCase() === b ? yo : zo),
                                  String.fromCharCode(Ya(a, b[0], b[1])))
                                : b
                            : "" + Ya(a, 0, 9);
                    }, c.split(""))
                );
            }
            function sd(a, c) {
                if (ca(c)) return !1;
                if (Sf(c)) {
                    var b = c.parentNode;
                    return (ca(b) ? 0 : 11 === b.nodeType)
                        ? !1
                        : sd(a, c.parentNode);
                }
                b = ti(a);
                if (!b) return !1;
                var d = b.call(c, ".ym-hide-content,.ym-hide-content *");
                return d &&
                    b.call(
                        c,
                        ".ym-show-content,.ym-hide-content .ym-show-content *"
                    )
                    ? !1
                    : d;
            }
            function li(a, c) {
                var b = Uc(a),
                    d = b.C("visorc");
                H(d, ["w", "b"]) || (d = "");
                (ui(a) && vi(a, ue, "visorc") && !Ao.test(lb(a) || "")) ||
                    (d = "b");
                var e = n(c, "settings.webvisor.recp");
                if (!a.isFinite(e) || 0 > e || 1 < e) d = "w";
                d || (d = (J(a).C("hitId") % 1e4) / 1e4 < e ? "w" : "b");
                b.D("visorc", d, 30);
                return "w" === d;
            }
            function Bo(a, c) {
                return {
                    N: function (b, d) {
                        b.K.Rb("we", Ob(c.xb));
                        wi(a, c, b, "rn");
                        d();
                    },
                };
            }
            function xi(a, c, b) {
                if (yi.isEnabled(a)) return new yi(a, c);
                if (zi.isEnabled(a)) return new zi(a, b);
            }
            function Ai(a, c) {
                var b = c[1][3],
                    d = 0,
                    e = new a.Uint8Array(c[0]);
                return ec([b], function (f, g) {
                    if (!f) return e;
                    f[0](a, f[2], e, d);
                    d += f[1];
                    g.push(f[3]);
                    return e;
                });
            }
            function Bi(a, c, b) {
                a = c(b);
                c = [D, 0, 0];
                var d = [0, c, c, void 0];
                return ec(a, function (e, f) {
                    var g = e[0],
                        h = e[1],
                        k = e[2];
                    if (0 === g) return k(d, h), d;
                    if (void 0 === h || null === h) return d;
                    var l = g >> 3;
                    if (g & 1)
                        Bc(d, X(l)),
                            (h = k(h)),
                            l & 2 && Bc(d, X(h[1])),
                            Bc(d, h);
                    else if (g & 4)
                        for (g = h.length - 1; 0 <= g; ) {
                            var m = k(h[g]);
                            m.push([0, 0, Tf]);
                            m.push([0, X(l), Bc]);
                            m.unshift([0, 0, Uf]);
                            wa(f, m);
                            --g;
                        }
                    else if (g & 2) {
                        k = e[2];
                        var p = e[3],
                            q = e[4],
                            r = e[5],
                            t = ea(h);
                        for (g = t.length - 1; 0 <= g; )
                            (m = t[g]),
                                (m = [
                                    [0, 0, Uf],
                                    [q, h[m], r],
                                    [k, m, p],
                                    [0, 0, Tf],
                                    [0, X(l), Bc],
                                ]),
                                wa(f, m),
                                --g;
                    } else
                        (m = k(h)),
                            m.push([0, 0, Tf]),
                            m.push([0, X(l), Bc]),
                            m.unshift([0, 0, Uf]),
                            wa(f, m);
                    return d;
                });
            }
            function Uf(a) {
                var c = a[1],
                    b = a[0],
                    d = a[2];
                a[3]
                    ? ((a[0] = a[3][0]),
                      (a[1] = a[3][1]),
                      (a[2] = a[3][2]),
                      (a[3] = a[3][3]))
                    : ((a[0] = 0), (a[1] = [D, 0, 0]), (a[2] = a[1]));
                Bc(a, X(b));
                b && ((a[2][3] = c[3]), (a[2] = d), (a[0] += b));
            }
            function Tf(a) {
                a[3] = [a[0], a[1], a[2], a[3]];
                a[1] = [D, 0, 0];
                a[2] = a[1];
                a[0] = 0;
            }
            function Bc(a, c) {
                a[0] += c[1];
                a[2][3] = c;
                a[2] = c;
            }
            function Ci(a) {
                return [
                    [1857, a.partsTotal, X],
                    [1793, a.activity, X],
                    [1744, a.textChangeMutation, Co],
                    [1680, a.removedNodesMutation, Do],
                    [1616, a.addedNodesMutation, Eo],
                    [1552, a.attributesChangeMutation, Fo],
                    [1488, a.publishersHeader, Go],
                    [1424, a.articleInfo, Ho],
                    [1360, a.focusEvent, Io],
                    [1296, a.fatalErrorEvent, Jo],
                    [1232, a.deviceRotationEvent, Ko],
                    [1168, a.keystrokesEvent, Lo],
                    [1104, a.resizeEvent, Mo],
                    [1040, a.zoomEvent, No],
                    [976, a.touchEvent, Oo],
                    [912, a.changeEvent, Po],
                    [848, a.selectionEvent, Qo],
                    [784, a.scrollEvent, Ro],
                    [720, a.mouseEvent, So],
                    [656, a.Ej, To],
                    [592, a.page, Uo],
                    [513, a.end, Cc],
                    [449, a.partNum, X],
                    [401, a.chunk, Vo],
                    [257, a.frameId, sa],
                    [193, a.event, X],
                    [129, a.type, X],
                    [65, a.stamp, X],
                ];
            }
            function Wo(a) {
                return [[84, a.vi, Ci]];
            }
            function Xo(a) {
                return [
                    [129, a.position, sa],
                    [81, a.name, da],
                ];
            }
            function Yo(a) {
                return [[81, a.name, da]];
            }
            function Zo(a) {
                return [[81, a.name, da]];
            }
            function Ho(a) {
                return [
                    [593, a.updateDate, da],
                    [532, a.rubric, Xo],
                    [449, a.chars, sa],
                    [401, a.publicationDate, da],
                    [340, a.topics, Yo],
                    [276, a.authors, Zo],
                    [209, a.pageTitle, da],
                    [145, a.pageUrlCanonical, da],
                    [65, a.id, X],
                ];
            }
            function $o(a) {
                return [
                    [513, a.chars, sa],
                    [489, a.maxScrolled, vd],
                    [385, a.involvedTime, sa],
                    [321, a.height, sa],
                    [257, a.width, sa],
                    [193, a.y, sa],
                    [129, a.x, sa],
                    [65, a.id, X],
                ];
            }
            function Go(a) {
                return [
                    [129, a.involvedTime, sa],
                    [84, a.articleMeta, $o],
                ];
            }
            function Io(a) {
                return [[65, a.target, sa]];
            }
            function Jo(a) {
                return [
                    [209, a.stack, da],
                    [145, a.Sg, da],
                    [81, a.code, da],
                ];
            }
            function Ko(a) {
                return [
                    [193, a.orientation, sa],
                    [129, a.height, X],
                    [65, a.width, X],
                ];
            }
            function Lo(a) {
                return [[84, a.keystrokes, ap]];
            }
            function ap(a) {
                return [
                    [273, a.modifier, da],
                    [193, a.isMeta, Cc],
                    [145, a.key, da],
                    [65, a.id, X],
                ];
            }
            function Mo(a) {
                return [
                    [257, a.pageHeight, X],
                    [193, a.pageWidth, X],
                    [129, a.height, X],
                    [65, a.width, X],
                ];
            }
            function No(a) {
                return [
                    [193, a.y, sa],
                    [129, a.x, sa],
                    [105, a.level, vd],
                ];
            }
            function Oo(a) {
                return [
                    [129, a.target, sa],
                    [84, a.touches, bp],
                ];
            }
            function bp(a) {
                return [
                    [297, a.force, vd],
                    [233, a.y, vd],
                    [169, a.x, vd],
                    [81, a.id, da],
                ];
            }
            function Po(a) {
                return [
                    [257, a.target, sa],
                    [193, a.hidden, Cc],
                    [129, a.checked, Cc],
                    [81, a.value, da],
                ];
            }
            function Qo(a) {
                return [
                    [257, a.endNode, X],
                    [193, a.startNode, X],
                    [129, a.end, sa],
                    [65, a.start, sa],
                ];
            }
            function Ro(a) {
                return [
                    [257, a.target, sa],
                    [193, a.page, Cc],
                    [129, a.y, sa],
                    [65, a.x, sa],
                ];
            }
            function So(a) {
                return [
                    [193, a.target, sa],
                    [129, a.y, X],
                    [65, a.x, X],
                ];
            }
            function To(a) {
                return [
                    [148, a.changes, cp],
                    [65, a.target, sa],
                ];
            }
            function cp(a) {
                return [
                    [193, a.index, X],
                    [145, a.op, da],
                    [81, a.style, da],
                ];
            }
            function Co(a) {
                return [
                    [209, a.value, da],
                    [129, a.index, X],
                    [65, a.target, X],
                ];
            }
            function Do(a) {
                return [
                    [129, a.index, X],
                    [69, a.nodes, sa],
                ];
            }
            function Eo(a) {
                return [
                    [129, a.index, X],
                    [84, a.nodes, Di],
                ];
            }
            function Fo(a) {
                return [
                    [210, a.attributes, 81, da, 145, da],
                    [129, a.index, X],
                    [65, a.target, X],
                ];
            }
            function Uo(a) {
                return [
                    [852, a.content, Di],
                    [785, a.tabId, da],
                    [705, a.recordStamp, dp],
                    [656, a.location, ep],
                    [592, a.viewport, Ei],
                    [528, a.screen, Ei],
                    [449, a.hasBase, Cc],
                    [401, a.base, da],
                    [337, a.referrer, da],
                    [273, a.ua, da],
                    [209, a.address, da],
                    [145, a.title, da],
                    [81, a.doctype, da],
                ];
            }
            function ep(a) {
                return [
                    [209, a.path, da],
                    [145, a.protocol, da],
                    [81, a.host, da],
                ];
            }
            function Ei(a) {
                return [
                    [129, a.height, sa],
                    [65, a.width, sa],
                ];
            }
            function Di(a) {
                return [
                    [513, a.hidden, Cc],
                    [449, a.prev, X],
                    [385, a.next, X],
                    [337, a.content, da],
                    [257, a.parent, X],
                    [210, a.attributes, 81, da, 145, da],
                    [145, a.name, da],
                    [65, a.id, X],
                ];
            }
            function da(a) {
                var c = fp({}, a, [], 0);
                return c ? [gp, c, a] : [Fi, 0, 0];
            }
            function Vo(a) {
                return [hp, a.length, a];
            }
            function Cc(a) {
                return [Fi, 1, a ? 1 : 0];
            }
            function dp(a) {
                a = Gi(a);
                var c = a[0],
                    b = a[1],
                    d = ((b >>> 28) | (c << 4)) >>> 0;
                c >>>= 24;
                return [
                    Hi,
                    0 === c
                        ? 0 === d
                            ? 16384 > b
                                ? 128 > b
                                    ? 1
                                    : 2
                                : 2097152 > b
                                ? 3
                                : 4
                            : 16384 > d
                            ? 128 > d
                                ? 5
                                : 6
                            : 2097152 > d
                            ? 7
                            : 8
                        : 128 > c
                        ? 9
                        : 10,
                    a,
                ];
            }
            function vd(a) {
                return [ip, 4, a];
            }
            function sa(a) {
                return 0 > a ? [Hi, 10, Gi(a)] : X(a);
            }
            function X(a) {
                return [
                    jp,
                    128 > a
                        ? 1
                        : 16384 > a
                        ? 2
                        : 2097152 > a
                        ? 3
                        : 268435456 > a
                        ? 4
                        : 5,
                    a,
                ];
            }
            function jp(a, c, b, d) {
                for (a = c; 127 < a; ) (b[d++] = (a & 127) | 128), (a >>>= 7);
                b[d] = a;
            }
            function Fi(a, c, b, d) {
                b[d] = c;
            }
            function hp(a, c, b, d) {
                for (a = 0; a < c.length; ++a) b[d + a] = c[a];
            }
            function Ii(a) {
                return function (c, b, d, e) {
                    for (var f, g = 0, h = 0; h < b.length; ++h)
                        if (((c = b.charCodeAt(h)), 128 > c))
                            a ? (g += 1) : (d[e++] = c);
                        else {
                            if (2048 > c) {
                                if (a) {
                                    g += 2;
                                    continue;
                                }
                                d[e++] = (c >> 6) | 192;
                            } else {
                                if (
                                    55296 === (c & 64512) &&
                                    56320 ===
                                        ((f = b.charCodeAt(h + 1)) & 64512)
                                ) {
                                    if (a) {
                                        g += 4;
                                        continue;
                                    }
                                    c = 65536 + ((c & 1023) << 10) + (f & 1023);
                                    ++h;
                                    d[e++] = (c >> 18) | 240;
                                    d[e++] = ((c >> 12) & 63) | 128;
                                } else {
                                    if (a) {
                                        g += 3;
                                        continue;
                                    }
                                    d[e++] = (c >> 12) | 224;
                                }
                                d[e++] = ((c >> 6) & 63) | 128;
                            }
                            d[e++] = (c & 63) | 128;
                        }
                    return a ? g : e;
                };
            }
            function ip(a, c, b, d) {
                return kp(a)(a, c, b, d);
            }
            function lp(a, c, b, d) {
                var e = 0 > c ? 1 : 0;
                e && (c = -c);
                if (0 === c) wd(0 < 1 / c ? 0 : 2147483648, b, d);
                else if (a.isNaN(c)) wd(2143289344, b, d);
                else if (3.4028234663852886e38 < c)
                    wd(((e << 31) | 2139095040) >>> 0, b, d);
                else if (1.1754943508222875e-38 > c)
                    wd(
                        ((e << 31) |
                            a.Math.round(c / 1.401298464324817e-45)) >>>
                            0,
                        b,
                        d
                    );
                else {
                    var f = a.Math.floor(a.Math.log(c) / Math.LN2);
                    wd(
                        ((e << 31) |
                            ((f + 127) << 23) |
                            (Math.round(c * a.Math.pow(2, -f) * 8388608) &
                                8388607)) >>>
                            0,
                        b,
                        d
                    );
                }
            }
            function wd(a, c, b) {
                c[b] = a & 255;
                c[b + 1] = (a >>> 8) & 255;
                c[b + 2] = (a >>> 16) & 255;
                c[b + 3] = a >>> 24;
            }
            function Hi(a, c, b, d) {
                a = c[0];
                for (c = c[1]; a; )
                    (b[d++] = (c & 127) | 128),
                        (c = ((c >>> 7) | (a << 25)) >>> 0),
                        (a >>>= 7);
                for (; 127 < c; ) (b[d++] = (c & 127) | 128), (c >>>= 7);
                b[d++] = c;
            }
            function Gi(a) {
                if (!a) return [0, 0];
                var c = 0 > a;
                c && (a = -a);
                var b = a >>> 0;
                a = ((a - b) / 4294967296) >>> 0;
                c &&
                    ((a = ~a >>> 0),
                    (b = ~b >>> 0),
                    4294967295 < ++b && ((b = 0), 4294967295 < ++a && (a = 0)));
                return [a, b];
            }
            function wi(a, c, b, d) {
                var e,
                    f = b.J;
                f.wmode = "0";
                f["wv-hit"] = f["wv-hit"] || "" + Dc(a);
                f["page-url"] = f["page-url"] || T(a).href;
                d && (f[d] = f[d] || "" + Ya(a));
                a = {
                    ma: { za: "webvisor/" + c.id },
                    ba: A(b.ba || {}, {
                        Xa: ((e = {}), (e["Content-Type"] = "text/plain"), e),
                        Uc: "POST",
                    }),
                    J: f,
                };
                A(b, a);
            }
            function mp(a, c) {
                return qa(c, function (b) {
                    var d = J(a),
                        e = d.C,
                        f = u("dSync", d.D);
                    K(c);
                    if (e("dSync", !1)) f(1);
                    else
                        return (
                            f(!0),
                            Ji(a, b, {
                                bb: c,
                                Mb: "s",
                                Ld: "ds",
                                Qc: f,
                                Gi: function (g, h, k) {
                                    var l = g.Lc;
                                    g = g.host;
                                    if (n(l, "settings")) return Ua(Pa("ds.e"));
                                    h = h(Z) - k;
                                    k = g[1];
                                    var m, p;
                                    l = Ka(
                                        ((m = {}),
                                        (m.di = l),
                                        (m.dit = h),
                                        (m.dip = k),
                                        m)
                                    );
                                    m =
                                        ((p = {}),
                                        (p["page-url"] = T(a).href),
                                        p);
                                    return va(
                                        a,
                                        "S",
                                        Ki
                                    )({ K: l, J: m }, Ki).then(
                                        u(10, f),
                                        E(a, "ds.rs")
                                    );
                                },
                            })
                        );
                });
            }
            function Ji(a, c, b) {
                var d,
                    e = b.bb,
                    f = b.Qc;
                f = void 0 === f ? D : f;
                var g = ja(a),
                    h = np(a, c.userData, e),
                    k = op(a),
                    l = v(Li, C([pp, qp], xd))(a),
                    m = n(c, "settings.sbp");
                b.Qc = f;
                m && (b.data = A({}, m, ((d = {}), (d.c = e.id), d)));
                return k.length
                    ? rp(a, g, h, c, l, b).then(function () {
                          return sp(a, k, h, g, l, b);
                      }, D)
                    : (f(2), L.resolve());
            }
            function op(a) {
                var c = yd(a);
                a = v(Vf, vc(["iPhone", "iPad"]))(a);
                return c ? tp : a ? up : [];
            }
            function sp(a, c, b, d, e, f) {
                e = f.Gi;
                var g = void 0 === e ? D : e,
                    h = f.Ld;
                e = f.Qc;
                var k = void 0 === e ? D : e,
                    l = d(Z);
                return vp(
                    a,
                    c,
                    f
                )(
                    Ra(
                        function (m) {
                            k(6);
                            x(function (p) {
                                p && Rc(a, h + ".s", p);
                            }, m);
                            m = d(qb);
                            b.D(h, m).then(u(7, k));
                        },
                        function (m) {
                            k(8);
                            b.D(h, d(qb)).then(u(9, k));
                            g(m, d, l);
                        }
                    )
                );
            }
            function rp(a, c, b, d, e, f) {
                var g = f.Ld,
                    h = f.bb,
                    k = f.Qc;
                return new L(function (l, m) {
                    var p = b.C(g, 0);
                    p = parseInt("" + p, 10);
                    return c(qb) - p <= e.pe
                        ? (k(3), m())
                        : wp(a)
                        ? l(void 0)
                        : zf(d)
                        ? (k(4), m())
                        : l(xp(a, h)["catch"](v(ve(u(5, k)), Ua)));
                });
            }
            function vp(a, c, b) {
                var d = b.Mb,
                    e = b.data,
                    f = va(a, d, b.bb);
                a = A({}, Mi);
                e && A(a.J, e);
                return yp(
                    z(function (g) {
                        return zp(
                            f(
                                A({ ba: { Ce: !1, ce: !0 } }, Mi),
                                z(function (h) {
                                    var k = h[1],
                                        l = h[2];
                                    h = G(
                                        "",
                                        z(function (m) {
                                            return String.fromCharCode(
                                                m.charCodeAt(0) + 10
                                            );
                                        }, h[0].split(""))
                                    );
                                    return (
                                        "http" +
                                        (l ? "s" : "") +
                                        "://" +
                                        h +
                                        ":" +
                                        k +
                                        "/" +
                                        Ap[d]
                                    );
                                }, g)
                            ).then(function (h) {
                                return A({}, h, { host: g[h.bg] });
                            })
                        );
                    }, c)
                );
            }
            function np(a, c, b) {
                var d = c || {},
                    e = va(a, "u", b),
                    f = Va(a);
                return {
                    C: function (g, h) {
                        return W(d[g]) ? f.C(g, h) : d[g];
                    },
                    D: function (g, h) {
                        var k,
                            l = "" + h;
                        d[g] = l;
                        f.D(g, l);
                        return e(
                            { J: ((k = {}), (k.key = g), (k.value = l), k) },
                            [xa.Qa + "//" + jc + "/user_storage_set"],
                            {}
                        )["catch"](E(a, "u.d.s.s"));
                    },
                };
            }
            function Bp(a) {
                return {
                    N: function (c, b) {
                        J(a).C("oo") || b();
                    },
                };
            }
            function Cp(a, c) {
                try {
                    var b = c[0];
                    var d = b[1];
                } catch (e) {
                    return function () {
                        return L.resolve();
                    };
                }
                return function (e) {
                    var f,
                        g =
                            ((f = {}),
                            (f["browser-info"] = Dp),
                            (f["page-url"] =
                                a.location && "" + a.location.href),
                            f);
                    return d && (e = Mb(a, e))
                        ? d(Ep, { Za: g, ha: [], da: "site-info=" + qe(e) })[
                              "catch"
                          ](D)
                        : L.resolve();
                };
            }
            function Fp(a, c) {
                var b = we(function (d, e) {
                    return d[1].ea > e[1].ea ? 1 : -1;
                }, Ia(ce));
                b = z(function (d) {
                    var e = d[0],
                        f = d[1].Na;
                    d = Jb(c, e) && !ca(c[e]);
                    e = c[e] !== (f || R)(void 0);
                    return sb(d && e);
                }, b);
                return xe(G("", b));
            }
            function Gp(a, c) {
                if (
                    n(a, "disableYaCounter" + c.id) ||
                    n(a, "Ya.disableMetrica")
                ) {
                    var b = K(c);
                    delete J(a).C("counters", {})[b];
                    Ua(Pa("oo.e"));
                }
            }
            function Hp(a) {
                if (zd(a)) return null;
                var c = Ip(a),
                    b = c.uf;
                W(b) &&
                    ((c.uf = null),
                    Jp(a).then(function (d) {
                        c.uf = d;
                    }));
                return b ? 1 : null;
            }
            function Kp(a, c, b) {
                b = b.J;
                if ((void 0 === b ? {} : b).nohit) return null;
                a = Ad(a);
                if (!a) return null;
                var d = (b = null);
                n(a, "getEntriesByType") &&
                    (d = n(a.getEntriesByType("navigation"), "0")) &&
                    (b = Lp);
                if (!b) {
                    var e = n(a, "timing");
                    e && ((b = Mp), (d = e));
                }
                if (!b) return null;
                a = Np(a, d, b);
                c = K(c);
                c = Op(c);
                return (c = Pp(c, a)) && G(",", c);
            }
            function Pp(a, c) {
                var b = a.length
                    ? z(function (d, e) {
                          var f = c[e];
                          return f === d ? null : f;
                      }, a)
                    : c;
                a.length = 0;
                x(v(R, Ga("push", a)), c);
                return ha(Ba(null), b).length === a.length ? null : b;
            }
            function Np(a, c, b) {
                return z(function (d) {
                    var e = d[0],
                        f = d[1];
                    if (P(e)) return e(a, c) || null;
                    if (1 === d.length) return c[e] ? Math.round(c[e]) : null;
                    var g;
                    !(g = c[e] && c[f]) &&
                        (g = 0 === c[e] && 0 === c[f]) &&
                        ((g = d[1]), (g = !(Ni[d[0]] || Ni[g])));
                    if (!g) return null;
                    d = Math.round(c[e]) - Math.round(c[f]);
                    return 0 > d || 36e5 < d ? null : d;
                }, b);
            }
            function ye(a, c) {
                try {
                    var b = c.localStorage.getItem(a);
                    return b && ld(ee(b));
                } catch (d) {}
                return null;
            }
            function ee(a) {
                for (var c = [], b = 0; b < a.length; b++) {
                    var d = a.charCodeAt(b);
                    128 > d
                        ? c.push(d)
                        : (127 < d && 2048 > d
                              ? c.push((d >> 6) | 192)
                              : (c.push((d >> 12) | 224),
                                c.push(((d >> 6) & 63) | 128)),
                          c.push((d & 63) | 128));
                }
                return c;
            }
            function ld(a, c) {
                void 0 === c && (c = !1);
                for (
                    var b = a.length, d = b - (b % 3), e = [], f = 0;
                    f < d;
                    f += 3
                ) {
                    var g = (a[f] << 16) + (a[f + 1] << 8) + a[f + 2];
                    e.push(
                        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
                            (g >> 18) & 63
                        ],
                        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
                            (g >> 12) & 63
                        ],
                        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
                            (g >> 6) & 63
                        ],
                        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
                            g & 63
                        ]
                    );
                }
                switch (b - d) {
                    case 1:
                        b = a[d] << 4;
                        e.push(
                            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
                                (b >> 6) & 63
                            ],
                            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
                                b & 63
                            ],
                            "=",
                            "="
                        );
                        break;
                    case 2:
                        (b = (a[d] << 10) + (a[d + 1] << 2)),
                            e.push(
                                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
                                    (b >> 12) & 63
                                ],
                                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
                                    (b >> 6) & 63
                                ],
                                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
                                    b & 63
                                ],
                                "="
                            );
                }
                e = G("", e);
                return c ? Oi(e, !0) : e;
            }
            function Wh(a, c) {
                void 0 === c && (c = !1);
                var b = a,
                    d = "",
                    e = 0;
                if (!b) return "";
                for (c && (b = Oi(b)); b.length % 4; ) b += "=";
                do {
                    var f = kc(
                            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                            b.charAt(e++)
                        ),
                        g = kc(
                            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                            b.charAt(e++)
                        ),
                        h = kc(
                            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                            b.charAt(e++)
                        ),
                        k = kc(
                            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                            b.charAt(e++)
                        );
                    if (0 > f || 0 > g || 0 > h || 0 > k) return "";
                    var l = (f << 18) | (g << 12) | (h << 6) | k;
                    f = (l >> 16) & 255;
                    g = (l >> 8) & 255;
                    l &= 255;
                    d =
                        64 === h
                            ? d + String.fromCharCode(f)
                            : 64 === k
                            ? d + String.fromCharCode(f, g)
                            : d + String.fromCharCode(f, g, l);
                } while (e < b.length);
                return d;
            }
            function Oi(a, c) {
                void 0 === c && (c = !1);
                return a
                    ? a.replace(c ? /[+/=]/g : /[-*_]/g, function (b) {
                          return Qp[b] || b;
                      })
                    : "";
            }
            function Rp(a) {
                try {
                    var c = Sa(a) ? a : [];
                    return G(",", [
                        a.name,
                        a.description,
                        v(Ca, ua, Xb(Sp), ze(","))(c),
                    ]);
                } catch (b) {
                    return "";
                }
            }
            function Sp(a) {
                return G(",", [a.description, a.suffixes, a.type]);
            }
            function Tp(a, c) {
                for (var b = "", d = 0; d < c; d += 1) b += a;
                return b;
            }
            function Up(a, c, b, d, e, f, g, h) {
                var k = b.C(f);
                ca(k) && (b.D(f, g), e(a, c, b, d), (k = b.C(f, g)));
                W(h) || h.Rb(f, "" + k);
                return k;
            }
            function Vp(a, c) {
                if (Bd(a)) {
                    var b = lb(a).match(Wp);
                    if (b && b.length) return b[1] === c;
                }
                return !1;
            }
            function Ae(a, c, b) {
                return function (d) {
                    var e,
                        f,
                        g = Ea(c, b);
                    g &&
                        Xp(a, d, c) &&
                        ((g = I(g.params, g)),
                        (d = Wf(
                            { event: a, Ja: "products", wa: lc, xh: "goods" },
                            d
                        )) &&
                            g &&
                            g(
                                ((e = {}),
                                (e.__ym = ((f = {}), (f.ecommerce = [d]), f)),
                                e)
                            ));
                };
            }
            function Xp(a, c, b) {
                var d = !1,
                    e = "";
                if (!ka(c)) return Ib(b, "", "ecomeo"), d;
                var f = c.goods;
                switch (a) {
                    case "detail":
                    case "add":
                    case "remove":
                        O(f) && f.length
                            ? (d = Pi(function (g) {
                                  return (
                                      ka(g) &&
                                      (ia(g.id) || mc(b, g.id) || ia(g.name))
                                  );
                              }, f)) || (e = "ecomgi")
                            : (e = "ecomgei");
                        break;
                    case "purchase":
                        mc(b, c.id) || ia(c.id) ? (d = !0) : (e = "ecompi");
                }
                Ib(b, "", e);
                return d;
            }
            function Cd(a, c) {
                return {
                    N: function (b, d) {
                        Xf(b)
                            ? d()
                            : qa(c, function (e) {
                                  var f;
                                  if ((e = n(e, "settings.hittoken")))
                                      (e = ((f = {}), (f.hittoken = e), f)),
                                          (b.J = A(b.J || {}, e));
                                  d();
                              });
                    },
                };
            }
            function Yp(a, c) {
                function b() {
                    q.hidden
                        ? A(
                              k.style,
                              Dd(
                                  ["top", "right", "left", "background"],
                                  "initial"
                              )
                          )
                        : A(k.style, Dd(["top", "right", "left"], "0"), {
                              background: "rgba(0, 0, 0, .3)",
                          });
                    y.parentNode || (r.appendChild(p), r.appendChild(y));
                    q.hidden = !q.hidden;
                    r.hidden = !r.hidden;
                    t.hidden = !t.hidden;
                }
                function d(M) {
                    var na = g();
                    A(na.style, Ec("2px", "18px"), Vc, {
                        left: "15px",
                        top: "7px",
                        background: "#2f3747",
                        borderRadius: "2px",
                    });
                    na.style.transform = "rotate(" + M + "deg)";
                    return na;
                }
                function e(M, na, ya, Bb, Ed) {
                    var Be = g();
                    A(Be.style, Ec(na + "px", ya + "px"), Vc, {
                        left: M + "px",
                        bottom: 0,
                        background: Bb,
                        borderTopLeftRadius: Ed,
                    });
                    return Be;
                }
                var f = db(a);
                if (!f) return D;
                var g = u("div", f),
                    h = u("iframe", f),
                    k = g();
                k.classList.add("__ym_wv_ign");
                A(k.style, Qi, {
                    bottom: "0",
                    width: "100%",
                    maxWidth: "initial",
                    zIndex: "999999999",
                });
                var l = k.attachShadow ? k.attachShadow({ mode: "open" }) : k,
                    m = g();
                A(m.style, Ec("24px"), Vc, Yf, {
                    top: "12px",
                    right: "10px",
                    background: "#3367dc",
                    overflow: "hidden",
                });
                var p = g();
                A(
                    p.style,
                    {
                        border: "2px solid transparent",
                        animation:
                            "__ym_wv_ign-spinner-animation 1s 0.21s infinite linear",
                    },
                    Yf,
                    Vc,
                    Ec("48px"),
                    Dd(["top", "left"], "calc(50% - 24px)"),
                    Dd(["borderTopColor", "borderLeftColor"], "#fc0")
                );
                f = f("style");
                f.textContent =
                    "@keyframes __ym_wv_ign-spinner-animation {to {transform: rotate(360deg);}}";
                p.appendChild(f);
                var q = g();
                q.id = "__ym_wv_ign__opener";
                A(q.style, Ec("46px", "48px"), Qi, {
                    right: "0",
                    bottom: "60px",
                    cursor: "pointer",
                    background: "#fff",
                    borderRadius: "16px 0 0 16px",
                    boxShadow:
                        "0px 0px 1px rgba(67, 68, 69, 0.3), 0px 1px 2px rgba(67, 68, 69, 0.3)",
                });
                var r = g();
                A(r.style, Vc, Dd(["top", "right", "bottom"], "0"), {
                    width: "600px",
                    background: "#fff",
                });
                var t = g();
                t.id = "__ym_wv_ign__closer";
                A(t.style, Ec("32px"), Vc, Yf, {
                    top: "12px",
                    right: "612px",
                    cursor: "pointer",
                    background: "#fff",
                });
                f = h();
                f.src = "https://metrika.yandex.ru/widget/iframe-check";
                var y = h();
                A(y.style, Ec("100%"), { border: "none" });
                y.src = "https://metrika.yandex.ru/widget/dashboard?id=" + c;
                r.hidden = !0;
                t.hidden = !0;
                t.appendChild(d(45));
                t.appendChild(d(-45));
                r.appendChild(f);
                m.appendChild(
                    e(
                        0,
                        8,
                        9,
                        "linear-gradient(0deg, #ff324f, #ff324f), linear-gradient(158.67deg, #ff455c 12.6%, #ff1139 96.76%)"
                    )
                );
                m.appendChild(e(8, 9, 16, "#04acff", "3px"));
                m.appendChild(e(17, 7, 24, "#ffdd13"));
                q.appendChild(m);
                l.appendChild(r);
                l.appendChild(t);
                var F = ["click", "touchstart"];
                h = fa(a);
                m = a.document.body;
                l = [
                    h.F(q, F, b),
                    h.F(t, F, b),
                    h.F(
                        f,
                        ["load"],
                        C(
                            [
                                ma,
                                [
                                    I(r.removeChild, r, f),
                                    I(l.appendChild, l, q),
                                ],
                            ],
                            x
                        )
                    ),
                    h.F(y, ["load"], I(r.removeChild, r, p)),
                    I(m.removeChild, m, k),
                ];
                var Q = C([ma, l], x);
                l.push(
                    h.F(a, ["securitypolicyviolation"], function (M) {
                        (M = n(M, "blockedURI")) &&
                            0 <= hb(M, "https://metrika.yandex.ru") &&
                            Q();
                    })
                );
                m.appendChild(k);
                return Q;
            }
            function Dd(a, c) {
                return N(
                    function (b, d) {
                        b[d] = c;
                        return b;
                    },
                    {},
                    a
                );
            }
            function Ec(a, c) {
                var b;
                return (b = {}), (b.width = a), (b.height = c || a), b;
            }
            function Zp(a, c) {
                var b = n(c, "origin"),
                    d;
                if ((d = b)) d = $p.test(b) || aq.test(b);
                d &&
                    ((b = Lb(a, c.data)),
                    "appendremote" === n(b, "action") && bq(a, c, b));
            }
            function Ri(a, c, b, d) {
                var e, f, g, h;
                void 0 === b && (b = "");
                void 0 === d && (d = "");
                var k = J(a),
                    l = {};
                l.getCachedTags = Zf;
                l.form =
                    ((e = {}),
                    (e.closest = u(a, Si)),
                    (e.select = cq),
                    (e.getData = u(a, Ti)),
                    e);
                l.button =
                    ((f = {}),
                    (f.closest = u(a, of)),
                    (f.select = Ui),
                    (f.getData = u(a, pf)),
                    f);
                l.phone = ((g = {}), (g.hidePhones = C([a, null, [d]], dq)), g);
                l.status = ((h = {}), (h.checkStatus = C([a, Ja(b)], eq)), h);
                k.D("_u", l);
                c && Nc(a, { src: c });
            }
            function Vi(a) {
                var c = a.lang;
                c = void 0 === c ? "" : c;
                var b = a.appVersion;
                b = void 0 === b ? "" : b;
                var d = a.fileId;
                d = void 0 === d ? "" : d;
                a = a.beta;
                a = void 0 === a ? !1 : a;
                b = G(".", ua(z(v(R, Ja), b.split("."))));
                if (!H(d, fq) || !H(c, ["ru", "en", "tr"])) return "";
                c =
                    (a
                        ? "https://s3.mds.yandex.net/internal-metrika-betas"
                        : "https://yastatic.net/s3/metrika") +
                    (b ? "/" + b : "") +
                    "/form-selector/" +
                    (d + "_" + c + ".js");
                return Wi(c) ? c : "";
            }
            function gq(a, c) {
                var b = db(a);
                if (b) {
                    var d = b("div"),
                        e = fc(a);
                    if (e) {
                        d.innerHTML =
                            '<iframe name="RemoteIframe" allowtransparency="true" style="position: absolute; left: -999px; top: -999px; width: 1px; height: 1px;"></iframe>';
                        var f = d.firstChild;
                        f.onload = function () {
                            var h = b("meta");
                            h.setAttribute(
                                "http-equiv",
                                "Content-Security-Policy"
                            );
                            h.setAttribute("content", "script-src *");
                            f.contentWindow.document.head.appendChild(h);
                            Nc(f.contentWindow, { src: c });
                        };
                        a._ym__remoteIframeEl = f;
                        e.appendChild(d);
                        d.removeChild(f);
                        var g = null;
                        d.attachShadow
                            ? (g = d.attachShadow({ mode: "open" }))
                            : d.createShadowRoot
                            ? (g = d.createShadowRoot())
                            : d.webkitCreateShadowRoot &&
                              (g = d.webkitCreateShadowRoot());
                        g
                            ? g.appendChild(f)
                            : (e.appendChild(f),
                              (a._ym__remoteIframeContainer = f));
                    }
                }
            }
            function eq(a) {
                var c,
                    b = Xi(a);
                a = J(a).C("getCounters", Fd)();
                a = z(U("id"), a);
                return (c = { id: b }), (c.counterFound = !!b && H(b, a)), c;
            }
            function dq(a, c, b) {
                var d;
                c = hq(a, c, { Qi: iq, Xh: ((d = {}), (d.href = !0), d) });
                b = ua(
                    z(function (f) {
                        return "*" === f ? f : Vb(f);
                    }, b)
                );
                var e = z(v(R, Ga("concat", [""]), Yi("reverse"), ma), b);
                b = Ce(a);
                d = jq(a, b, 1e3);
                c = u(e, c);
                d.F(c);
                kq(a, b);
                lq(a, b);
                c();
            }
            function iq(a, c, b) {
                var d = db(a),
                    e = b.zf,
                    f = b.Jc,
                    g = e.parentNode,
                    h = e.textContent;
                if (!("text" === b.yf && h && d && g)) return !1;
                b = d("small");
                Zi(b);
                var k = $i(h).length;
                x(
                    Ga("appendChild", b),
                    N(
                        function (l, m) {
                            var p = l.nodes,
                                q = l.eg,
                                r = d("small");
                            r.innerHTML = m;
                            var t = mq.test(m);
                            Zi(r);
                            t && (r.style.opacity = "" + (k - q - 1) / k);
                            p.push(r);
                            return { nodes: p, eg: q + (t ? 1 : 0) };
                        },
                        { nodes: [], eg: 0 },
                        h
                    ).nodes
                );
                nq(a, c, b, f);
                g.insertBefore(b, e);
                e.textContent = "";
                return !0;
            }
            function nq(a, c, b, d) {
                function e() {
                    x(function (l) {
                        l.style && A(l.style, { opacity: "" });
                    }, Ca(b.childNodes));
                    if (c) {
                        var k = Ea(a, c);
                        k && k.extLink("tel:" + d, {});
                    }
                    g();
                    h();
                }
                var f = fa(a),
                    g = D,
                    h = D;
                g = f.F(b, ["mouseenter"], function (k) {
                    if (k.target === b) {
                        var l = S(a, e, 200, "ph.h.e");
                        h();
                        h = f.F(b, ["mouseleave"], function (m) {
                            m.target === b && la(a, l);
                        });
                    }
                });
            }
            function lq(a, c) {
                Nb(a)(
                    Ra(D, function () {
                        var b,
                            d = a.document.body,
                            e =
                                ((b = {}),
                                (b.attributes = !0),
                                (b.childList = !0),
                                (b.subtree = !0),
                                b);
                        Fa("MutationObserver", a.MutationObserver) &&
                            new MutationObserver(c.R).observe(d, e);
                    })
                );
            }
            function kq(a, c) {
                return fa(a).F(a, ["load"], c.R);
            }
            function hq(a, c, b) {
                function d(k) {
                    return f(a, c, k) ? h[k.Jc] && h[k.Jc].Sc : null;
                }
                var e,
                    f = b.Qi;
                b = b.Xh;
                var g =
                        void 0 === b
                            ? ((e = {}), (e.href = !0), (e.text = !0), e)
                            : b,
                    h;
                return function (k) {
                    return new L(function (l, m) {
                        (k && k.length) || m();
                        h = aj()(k);
                        Nb(a)(
                            Ra(u({ ri: [], qb: 0 }, l), function () {
                                var p = ja(a),
                                    q = p(Z),
                                    r = g.href ? oq(a, h) : [],
                                    t = g.text ? bj(a, h, a.document.body) : [];
                                l({
                                    ri: ha(O, ua(z(d, r.concat(t)))),
                                    qb: p(Z) - q,
                                });
                            })
                        );
                    });
                };
            }
            function oq(a, c) {
                var b = a.document.body;
                if (!b) return [];
                var d = cj(c);
                return N(
                    function (e, f) {
                        var g = n(f, "href");
                        try {
                            var h = decodeURI(g || "");
                        } catch (p) {
                            h = "";
                        }
                        if ("tel:" === h.slice(0, 4)) {
                            var k = (d.exec(h) || [])[0],
                                l = k ? Vb(k) : "",
                                m = c[l];
                            W(m) ||
                                (!l && "*" !== m.Sc[0]) ||
                                (e.push({
                                    yf: "href",
                                    zf: f,
                                    Jc: l,
                                    Nb: dj(k, c[l].Nb),
                                    Ji: g,
                                }),
                                (g = Vb(h.slice(4))),
                                (l = aj()([l ? m.Sc : [g, ""]])),
                                wa(e, bj(a, l, f)));
                        }
                        return e;
                    },
                    [],
                    Ca(b.querySelectorAll("a"))
                );
            }
            function bj(a, c, b) {
                if (!b) return [];
                var d = [],
                    e = cj(c),
                    f = ["script", "style"];
                nd(
                    a,
                    b,
                    function (g) {
                        var h = n(g, "parentNode.nodeName") || "";
                        g === b ||
                            H(h.toLowerCase(), f) ||
                            ((h = ua(e.exec(g.textContent || "") || [])),
                            x(function (k) {
                                var l = Vb(k);
                                W(c[l]) ||
                                    d.push({
                                        yf: "text",
                                        zf: g,
                                        Jc: l,
                                        Nb: dj(k, c[l].Nb),
                                        Ji: g.textContent || "",
                                    });
                            }, h));
                    },
                    function (g) {
                        return e.test(g.textContent || "") ? 1 : 0;
                    },
                    a.NodeFilter.SHOW_TEXT
                );
                return d;
            }
            function aj() {
                return $f(function (a, c) {
                    var b = z(Vb, c),
                        d = b[0];
                    b = b[1];
                    a[d] = { Nb: b, Sc: c };
                    var e = ej(d);
                    e !== d && (a[e] = { Nb: ej(b), Sc: c });
                    return a;
                }, {});
            }
            function dj(a, c) {
                for (
                    var b = [], d = a.split(""), e = c.split(""), f = 0, g = 0;
                    g < a.length && !(f >= e.length);
                    g += 1
                ) {
                    var h = d[g];
                    "0" <= h && "9" >= h
                        ? (b.push(e[f]), (f += 1))
                        : b.push(d[g]);
                }
                return G("", b) + c.slice(f + 1);
            }
            function ej(a) {
                var c = { 7: "8", 8: "7" };
                return 11 === a.length && c[a[0]]
                    ? "" + c[a[0]] + a.slice(1)
                    : a;
            }
            function cj(a) {
                return new RegExp("(?:" + G("|", z(pq, ea(a))) + ")");
            }
            function fj(a, c, b, d) {
                if (c) {
                    var e = [];
                    c &&
                        (a.document.documentElement.contains(c)
                            ? nd(a, c, Ga("push", e), d)
                            : wa(e, gj(a, c, d)));
                    x(b, e);
                }
            }
            function nd(a, c, b, d, e, f) {
                function g(k) {
                    return P(d)
                        ? d(k)
                            ? a.NodeFilter.FILTER_ACCEPT
                            : a.NodeFilter.FILTER_REJECT
                        : a.NodeFilter.FILTER_ACCEPT;
                }
                void 0 === e && (e = -1);
                void 0 === f && (f = !1);
                var h = g(c);
                if (
                    P(b) &&
                    (f || h === a.NodeFilter.FILTER_ACCEPT) &&
                    (h && b(c), !Sf(c))
                )
                    for (
                        c = a.document.createTreeWalker(
                            c,
                            e,
                            d ? { acceptNode: g } : null,
                            !1
                        );
                        c.nextNode() && !1 !== b(c.currentNode);

                    );
            }
            function gj(a, c, b) {
                var d = [],
                    e = v(R, Ga("push", d));
                P(b)
                    ? ((b = b(c)),
                      (ca(b) || b === a.NodeFilter.FILTER_ACCEPT) && e(c))
                    : e(c);
                if (c.childNodes && 0 < c.childNodes.length) {
                    c = c.childNodes;
                    b = 0;
                    for (var f = c.length; b < f; b += 1) {
                        var g = gj(a, c[b]);
                        x(e, g);
                    }
                }
                return d;
            }
            function hj(a, c, b) {
                var d;
                a = [
                    ij(a, c, function (e) {
                        d = e;
                        e.ya.F(b);
                    }),
                    function () {
                        d && d.unsubscribe();
                    },
                ];
                return C([De, a], x);
            }
            function qq(a, c, b, d) {
                var e, f, g;
                if (b) {
                    var h = n(d, "ecommerce") || {};
                    var k = n(d, "event") || "";
                    h = ka(h) && ia(k) ? Wf(k, h) : void 0;
                    if (!h)
                        a: {
                            var l = d;
                            !O(d) && mc(a, Sa(d)) && (l = Oa(l));
                            if (
                                O(l) &&
                                ((h = l[0]),
                                (k = l[1]),
                                (l = l[2]),
                                ia(k) && ka(l) && "event" === h)
                            ) {
                                h = Wf(k, l);
                                break a;
                            }
                            h = void 0;
                        }
                    if ((d = h || rq(d)))
                        ub(
                            a,
                            ((e = {}),
                            (e.counterKey = c),
                            (e.name = "ecommerce"),
                            (e.data = d),
                            e)
                        ),
                            b(
                                ((f = {}),
                                (f.__ym = ((g = {}), (g.ecommerce = [d]), g)),
                                f)
                            );
                }
            }
            function rq(a) {
                var c = n(a, "ecommerce");
                if (ka(c))
                    return (
                        (a = ha(vc(sq), ea(c))),
                        (a = N(
                            function (b, d) {
                                b[d] = c[d];
                                return b;
                            },
                            {},
                            a
                        )),
                        0 === ea(a).length ? void 0 : a
                    );
            }
            function Wf(a, c) {
                var b,
                    d,
                    e = ia(a) ? tq[a] : a;
                if (e) {
                    var f = e.event,
                        g = e.Ja,
                        h = e.xh,
                        k = void 0 === h ? "items" : h,
                        l = c.purchase || c;
                    if ((h = l[k])) {
                        e = z(u(e.wa, uq), h);
                        var m =
                            ((b = {}),
                            (b[f] = g ? ((d = {}), (d[g] = e), d) : e),
                            b);
                        b = ea(l);
                        g &&
                            1 < b.length &&
                            (m[f].actionField = zb(
                                function (p, q) {
                                    if (q === k) return p;
                                    if ("currency" === q)
                                        return (m.currencyCode = l.currency), p;
                                    p[vq[q] || ag[q] || q] = l[q];
                                    return p;
                                },
                                {},
                                b
                            ));
                        return m;
                    }
                }
            }
            function uq(a, c) {
                var b = {};
                x(function (d) {
                    var e = a[d] || ag[d] || d;
                    -1 !== hb(d, "item_category")
                        ? ((e = ag.item_category),
                          (b[e] = b[e] ? b[e] + ("/" + c[d]) : c[d]))
                        : (b[e] = c[d]);
                }, ea(c));
                return b;
            }
            function wq(a, c, b) {
                var d,
                    e,
                    f,
                    g = n(b, "target");
                if (g && ((g = of(a, g)), (g = pf(a, g)))) {
                    g = "?" + Fc(g);
                    var h = nc(
                        a,
                        c,
                        "gbn",
                        ((d = {}), (d.id = c.id), (d.query = g), d)
                    );
                    b = n(b, "isTrusted");
                    b = ca(b)
                        ? void 0
                        : ((e = {}),
                          (e.__ym = ((f = {}), (f.ite = sb(b)), f)),
                          e);
                    Ee(a, c, "btn", h).reachGoal(g, b);
                }
            }
            function hf(a, c, b, d) {
                return function () {
                    if (Ea(a, c)) {
                        var e = Oa(arguments);
                        return d.apply(void 0, e);
                    }
                };
            }
            function xq(a, c, b, d) {
                var e = n(d, "target");
                e &&
                    ((d = n(d, "isTrusted")),
                    (e = oc("button,input", a, e)) &&
                        "submit" === e.type &&
                        (e = Si(a, e))) &&
                    (b.push(e), S(a, C([!1, a, c, b, e, d], jj), 300));
            }
            function jj(a, c, b, d, e, f) {
                var g,
                    h,
                    k,
                    l = Pb(c)(e, d),
                    m = -1 !== l;
                if (a || m)
                    m && d.splice(l, 1),
                        (a = Ti(c, e)),
                        (a = "?" + Fc(a)),
                        (d = C(
                            [
                                c,
                                b,
                                "fg",
                                ((g = {}), (g.id = b.id), (g.query = a), g),
                            ],
                            kj
                        )),
                        (f = ca(f)
                            ? void 0
                            : ((h = {}),
                              (h.__ym = ((k = {}), (k.ite = sb(f)), k)),
                              h)),
                        Ee(c, b, "form", d).reachGoal(a, f);
            }
            function kj(a, c, b, d) {
                return yq(a, c).then(v(C([nc(a, c, b, d), D], xd), ma));
            }
            function Ti(a, c, b) {
                return lj(a, c, ["i", "n", "p"], void 0, b);
            }
            function zq(a, c) {
                var b;
                a(((b = {}), (b.clickmap = W(c) ? !0 : c), b));
            }
            function Aq(a, c, b, d, e) {
                var f,
                    g = "clmap/" + e.id;
                c =
                    ((f = {}),
                    (f["page-url"] = c),
                    (f["pointer-click"] = b),
                    f);
                f = { K: Ka(), J: c, ma: { za: g } };
                d(f, e)["catch"](E(a, "c.s.c"));
            }
            function Bq(a, c, b, d, e) {
                if (Jb(a, "ymDisabledClickmap") || !c || !c.element) return !1;
                a = Ma(c.element);
                if (
                    (e && !e(c.element, a)) ||
                    (H(c.button, [2, 3]) && "A" !== a) ||
                    $a(Ba(a), d)
                )
                    return !1;
                d = c.element;
                if (c && b) {
                    if (50 > c.time - b.time) return !1;
                    e = Math.abs(b.position.x - c.position.x);
                    a = Math.abs(b.position.y - c.position.y);
                    c = c.time - b.time;
                    if (b.element === d && 2 > e && 2 > a && 1e3 > c) return !1;
                }
                for (; d; ) {
                    if (Cq(d)) return !1;
                    d = d.parentElement;
                }
                return !0;
            }
            function Dq(a, c) {
                var b = null;
                try {
                    if ((b = c.target || c.srcElement))
                        !b.ownerDocument && b.documentElement
                            ? (b = b.documentElement)
                            : b.ownerDocument !== a.document && (b = null);
                } catch (d) {}
                return b;
            }
            function Eq(a) {
                var c = a.which;
                a = a.button;
                return c || void 0 === a
                    ? c
                    : 1 === a || 3 === a
                    ? 1
                    : 2 === a
                    ? 3
                    : 4 === a
                    ? 2
                    : 0;
            }
            function mj(a, c) {
                var b = fc(a),
                    d = bg(a);
                return {
                    x: c.pageX || c.clientX + d.x - (b.clientLeft || 0) || 0,
                    y: c.pageY || c.clientY + d.y - (b.clientTop || 0) || 0,
                };
            }
            function Fe(a, c) {
                return {
                    N: function (b, d) {
                        var e,
                            f = b.K,
                            g = b.Ha,
                            h = b.J,
                            k = b.ba;
                        k = void 0 === k ? {} : k;
                        if (f && h) {
                            var l = ja(a);
                            f.Rb("rqnl", 1);
                            for (var m = Gd(a), p = 1; m[p]; ) p += 1;
                            b.M || (b.M = {});
                            b.M.Ob = p;
                            m[p] =
                                ((e = {}),
                                (e.protocol = xa.Qa),
                                (e.host = jc),
                                (e.resource = b.ma.za),
                                (e.postParams = k.da),
                                (e.time = l(Z)),
                                (e.counterType = c.ca),
                                (e.params = h),
                                (e.browserInfo = f.l()),
                                (e.counterId = c.id),
                                (e.ghid = Dc(a)),
                                e);
                            g && (m[p].telemetry = g.l());
                            cg(a);
                        }
                        d();
                    },
                    Ba: function (b, d) {
                        nj(a, b);
                        d();
                    },
                };
            }
            function nj(a, c) {
                var b = Gd(a);
                c.K && !Xa(b) && c.M && (delete b[c.M.Ob], cg(a));
            }
            function cg(a) {
                var c = Gd(a);
                Va(a).D("retryReqs", c);
            }
            function Fq(a, c) {
                if (a.Pi()) {
                    var b = oj(c);
                    if (b && !ic("ym-disable-tracklink", b)) {
                        var d = a.l,
                            e = a.Hg,
                            f = a.bb,
                            g = a.sender,
                            h = a.Vg,
                            k = f.oc,
                            l = b.href;
                        var m = ab(
                            b.innerHTML &&
                                b.innerHTML.replace(/<\/?[^>]+>/gi, "")
                        );
                        m ||
                            (m = (m = b.querySelector("img"))
                                ? ab(
                                      m.getAttribute("title") ||
                                          m.getAttribute("alt")
                                  )
                                : "");
                        m = l === m ? "" : m;
                        var p = n(c, "isTrusted");
                        if (ic("ym-external-link", b))
                            Ge(d, f, {
                                url: l,
                                lb: !0,
                                title: m,
                                yc: p,
                                sender: g,
                            });
                        else {
                            k = k ? Sc(d, k).hostname : T(d).hostname;
                            h = RegExp("\\.(" + G("|", z(Gq, h)) + ")$", "i");
                            var q = b.protocol + "//" + b.hostname + b.pathname;
                            h =
                                pj.test(q) ||
                                pj.test(l) ||
                                h.test(l) ||
                                h.test(q);
                            b = b.hostname;
                            He(k) === He(b)
                                ? h
                                    ? Ge(d, f, {
                                          url: l,
                                          wc: !0,
                                          yc: p,
                                          title: m,
                                          sender: g,
                                      })
                                    : m && e.D("il", ab(m).slice(0, 100))
                                : (l && Hq.test(l)) ||
                                  Ge(d, f, {
                                      url: l,
                                      Ac: !0,
                                      lb: !0,
                                      wc: h,
                                      yc: p,
                                      title: m,
                                      sender: g,
                                  });
                        }
                    }
                }
            }
            function Ge(a, c, b) {
                var d,
                    e,
                    f,
                    g,
                    h = Ka();
                void 0 !== b.yc && h.D("ite", sb(b.yc));
                b.wc && h.D("dl", 1);
                b.lb && h.D("ln", 1);
                var k = b.dg || {};
                h = {
                    K: h,
                    M: { title: k.title || b.title, Ac: !!b.Ac, X: k.params },
                    J:
                        ((d = {}),
                        (d["page-url"] = b.url),
                        (d["page-ref"] = c.oc || T(a).href),
                        d),
                };
                d = "Link";
                b.wc
                    ? (d = b.lb ? "Ext link - File" : "File")
                    : b.lb && (d = "Ext link");
                ub(
                    a,
                    ((e = {}),
                    (e.counterKey = K(c)),
                    (e.name = "event"),
                    (e.data =
                        ((f = {}),
                        (f.schema = "Link click"),
                        (f.name =
                            (b.lb ? "external" : "internal") +
                            " url: " +
                            b.url),
                        f)),
                    e)
                );
                c = b
                    .sender(h, c)
                    .then(
                        nc(
                            a,
                            c,
                            "lcl",
                            ((g = {}),
                            (g.prefix = d),
                            (g.id = c.id),
                            (g.url = b.url),
                            g),
                            b.dg
                        )
                    );
                return Wc(a, "cl.p.s", c, k.callback || D, k.ctx);
            }
            function Iq(a, c) {
                var b,
                    d,
                    e =
                        ((b = {}),
                        (b.string = !0),
                        (b.object = !0),
                        (b["boolean"] = c),
                        b)[typeof c] || !1;
                a(((d = {}), (d.trackLinks = e), d));
            }
            function Jq(a, c, b, d) {
                var e = T(a),
                    f = e.hostname;
                e = e.href;
                if ((c = Hd(c).url))
                    (a = Sc(a, c)), (f = a.hostname), (e = a.href);
                return [d + "://" + f + "/" + b, e || ""];
            }
            function qj(a) {
                return (a.split(":")[1] || "")
                    .replace(/^\/*/, "")
                    .replace(/^www\./, "")
                    .split("/")[0];
            }
            function Kq(a, c, b, d) {
                var e;
                if ((a = Ea(a, b))) {
                    var f = d.data;
                    b = "" + b.id;
                    var g = d.sended || [];
                    d.sended || (d.sended = g);
                    H(b, g) ||
                        !a.params ||
                        (d.counter && "" + d.counter !== b) ||
                        (a.params(f),
                        g.push(b),
                        d.parent &&
                            c.Pf(
                                ((e = {}), (e.type = "params"), (e.data = f), e)
                            ));
                }
            }
            function Lh(a, c, b) {
                void 0 === b && (b = R);
                var d = rd(a);
                b(d);
                var e = u(d, Lq);
                Ie(a, c, function (f) {
                    f.ya.F(e);
                });
                return d;
            }
            function Lq(a, c) {
                var b = n(c, "ymetrikaEvent");
                b && a.R(n(b, "type"), b);
            }
            function Ie(a, c, b, d) {
                void 0 === b && (b = D);
                void 0 === d && (d = !1);
                var e = Ce(a);
                if (c && P(c.push)) {
                    var f = c.push;
                    c.push = function () {
                        var g = Oa(arguments),
                            h = g[0];
                        d && e.R(h);
                        g = f.apply(c, g);
                        d || e.R(h);
                        return g;
                    };
                    a = {
                        ya: e,
                        unsubscribe: function () {
                            c.push = f;
                        },
                    };
                    b(a);
                    x(e.R, c);
                    return a;
                }
            }
            function ge(a) {
                a = J(a);
                var c = a.C("dataLayer", []);
                a.D("dataLayer", c);
                return c;
            }
            function cn(a, c) {
                var b, d;
                H(c, z(U("ymetrikaEvent.type"), a)) ||
                    a.push(
                        ((b = {}),
                        (b.ymetrikaEvent = ((d = {}), (d.type = c), d)),
                        b)
                    );
            }
            function rj(a, c) {
                var b = od(a, c),
                    d = [],
                    e = [];
                if (!b) return null;
                var f = C([a, b.fe], Mq),
                    g = u(f, Nq);
                b.$.F(["initToParent"], function (h) {
                    g(d, b.children[h[1].counterId]);
                }).F(["parentConnect"], function (h) {
                    g(e, b.Ea[h[1].counterId]);
                });
                return {
                    $: b.$,
                    Dj: function (h, k) {
                        return new L(function (l, m) {
                            b.fe(h, k, function (p, q) {
                                l([p, q]);
                            });
                            S(a, u(Pa(), m), 5100, "is.o");
                        });
                    },
                    Of: function (h) {
                        var k = { Rf: [], ve: [], data: h };
                        d.push(k);
                        return f(b.children, k, h);
                    },
                    Pf: function (h) {
                        var k = { Rf: [], ve: [], data: h };
                        e.push(k);
                        return f(b.Ea, k, h);
                    },
                };
            }
            function Nq(a, c, b) {
                c = ha(function (d) {
                    return !H(b.info.counterId, d.ve);
                }, c);
                x(function (d) {
                    var e;
                    b.info.counterId &&
                        a(((e = {}), (e[b.info.counterId] = b), e), d, d.data);
                }, c);
            }
            function Mq(a, c, b, d, e) {
                return new L(function (f, g) {
                    var h = ea(b),
                        k = v(d.resolve || R, ve(f)),
                        l = v(d.reject || R, ve(g));
                    d.resolve = k;
                    d.reject = l;
                    x(function (m) {
                        var p;
                        d.ve.push(+m);
                        var q = b[m],
                            r = S(a, u(Pa(), l), 5100, "is.m");
                        c(
                            q.window,
                            A(e, ((p = {}), (p.toCounter = Ja(m)), p)),
                            function (t, y) {
                                la(a, r);
                                d.Rf.push(m);
                                d.resolve && d.resolve(y);
                            }
                        );
                    }, h);
                })["catch"](E(a, "if.b"));
            }
            function Oq(a) {
                var c = D,
                    b = null,
                    d = a.length;
                if (0 !== a.length && a[0]) {
                    var e = a.slice(-1)[0];
                    P(e) && ((c = e), (d = a.length + -1));
                    var f = a.slice(-2)[0];
                    P(f) && ((c = f), (b = e), (d = a.length + -2));
                    d = a.slice(0, d);
                    return { Jg: b, Wb: c, X: 1 === d.length ? a[0] : qd(d) };
                }
            }
            function Wc(a, c, b, d, e) {
                var f = C([a, d, e], dg);
                return b.then(f, function (g) {
                    f();
                    Rc(a, c, g);
                });
            }
            function eg(a, c) {
                return {
                    N: function (b, d) {
                        var e,
                            f,
                            g = (b.M || {}).X,
                            h = b.ba;
                        h = void 0 === h ? {} : h;
                        if (g && (sj(c, g), !h.da && b.K && b.J)) {
                            var k = Mb(a, g),
                                l = tj(a),
                                m = b.K.C("pv");
                            k &&
                                !b.J.nohit &&
                                (ub(
                                    a,
                                    ((e = {}),
                                    (e.counterKey = K(c)),
                                    (e.name = "params"),
                                    (e.data = ((f = {}), (f.val = g), f)),
                                    e)
                                ),
                                m
                                    ? encodeURIComponent(k).length > xa.jg
                                        ? l.push([b.K, g])
                                        : (b.J["site-info"] = k)
                                    : ((h.da = k),
                                      (b.ba = h),
                                      b.Hc || (b.Hc = {}),
                                      (b.Hc.Yh = !0)));
                        }
                        d();
                    },
                    Ba: function (b, d) {
                        var e = tj(a),
                            f = Ea(a, c),
                            g = f && f.params;
                        g &&
                            ((f = ha(v(Id, Ba(b.K)), e)),
                            x(function (h) {
                                g(h[1]);
                                h = Je(a)(h, e);
                                e.splice(h, 1);
                            }, f));
                        d();
                    },
                };
            }
            function Ke(a, c) {
                return function (b) {
                    fg(a, c, b);
                };
            }
            function Pq(a, c) {
                gg(a)(function (b) {
                    delete b[c];
                });
            }
            function fg(a, c, b) {
                gg(a)(function (d) {
                    d[c] = A(d[c] || {}, b);
                });
            }
            function gg(a) {
                a = J(a);
                var c = a.C("dsjf") || Ha({});
                a.Ga("dsjf", c);
                return c;
            }
            function Qq(a, c) {
                return function (b) {
                    var d,
                        e,
                        f = Ea(a, c);
                    if (f) {
                        var g = pc(a, K(c));
                        ka(b)
                            ? Sa(ea(b))
                                ? (b = uj(a, b)) &&
                                  Sa(b) &&
                                  f.params(
                                      ((d = {}),
                                      (d.__ym = ((e = {}), (e.fpmh = b), e)),
                                      d)
                                  )
                                : g.log("fpeo")
                            : g.log("fpno");
                    }
                };
            }
            function uj(a, c) {
                return N(
                    function (b, d) {
                        var e = d[0],
                            f = d[1],
                            g = f;
                        f = ka(f);
                        if (!f && (mc(a, g) && (g = "" + g), !ia(g))) return b;
                        g = f ? uj(a, g) : g;
                        Sa(g) && b.push([e, g]);
                        return b;
                    },
                    [],
                    Ia(c)
                );
            }
            function vj(a, c, b) {
                void 0 === b && (b = 0);
                c = Ia(c);
                c = N(
                    function (d, e) {
                        var f = e[0],
                            g = e[1],
                            h = ka(g);
                        if (!h && (mc(a, g) && (g = "" + g), !ia(g))) return d;
                        h
                            ? (g = vj(a, g, b + 1))
                            : !b && H(f, Rq)
                            ? (g = L.resolve(g))
                            : ("phone_number" === f
                                  ? (g = Uh(a, g))
                                  : "email" === f && (g = Th(g)),
                              (g = wj(a, g)));
                        d.push(
                            g.then(function (k) {
                                return [f, k];
                            })
                        );
                        return d;
                    },
                    [],
                    c
                );
                return L.all(c);
            }
            function Th(a) {
                var c = ab(a).replace(/^\++/gm, "").toLowerCase(),
                    b = c.lastIndexOf("@");
                if (-1 === b) return c;
                a = c.substr(0, b);
                b = c.substr(b + 1);
                if (!b || !Sq(a)) return c;
                b = b.replace("googlemail.com", "gmail.com");
                xj(b) && (b = "yandex.ru");
                "yandex.ru" === b
                    ? (a = a.replace(hg, "-"))
                    : "gmail.com" === b && (a = a.replace(hg, ""));
                c = hb(a, "+");
                -1 !== c && (a = a.slice(0, c));
                return a + "@" + b;
            }
            function Sq(a) {
                return 1 > a.length || 64 < a.length
                    ? !1
                    : Pi(function (c) {
                          if (1 > c.length) c = !1;
                          else if (
                              '"' === c[0] &&
                              '"' === c[c.length - 1] &&
                              2 < c.length
                          )
                              a: {
                                  for (var b = 1; b + 2 < c.length; b += 1) {
                                      var d = c.charCodeAt(b);
                                      if (32 > d || 34 === d || 126 < d) {
                                          c = !1;
                                          break a;
                                      }
                                      if (92 === d) {
                                          if (
                                              b + 2 === c.length ||
                                              32 > c.charCodeAt(b + 1)
                                          ) {
                                              c = !1;
                                              break a;
                                          }
                                          b += 1;
                                      }
                                  }
                                  c = !0;
                              }
                          else c = Tq.test(c) ? !0 : !1;
                          return c;
                      }, a.split("."));
            }
            function Uh(a, c) {
                var b = Uq(c),
                    d = Vb(c);
                return 10 > d.length || 13 < d.length || b.startsWith("+8")
                    ? ab(c)
                    : "8" === b[0]
                    ? "7" + d.slice(1)
                    : "+" === b[0] || mc(a, +b[0])
                    ? d
                    : "7" + d;
            }
            function wj(a, c) {
                return new L(function (b, d) {
                    var e = new a.TextEncoder().encode(c);
                    a.crypto.subtle.digest("SHA-256", e).then(function (f) {
                        f = new a.Blob([f], {
                            type: "application/octet-binary",
                        });
                        var g = new a.FileReader();
                        g.onload = function (h) {
                            h = n(h, "target.result") || "";
                            var k = hb(h, ",");
                            -1 !== k ? b(h.substring(k + 1)) : d(Qa("fpm.i"));
                        };
                        g.readAsDataURL(f);
                    }, d);
                });
            }
            function im(a, c, b, d) {
                var e = yj[b];
                return e
                    ? function () {
                          var f = Oa(arguments);
                          f = d.apply(void 0, f);
                          var g = J(a);
                          g.Ga("mt", {});
                          g = g.C("mt");
                          var h = g[e];
                          g[e] = h ? h + 1 : 1;
                          return f;
                      }
                    : d;
            }
            function Ea(a, c) {
                var b = J(a).C("counters", {}),
                    d = K(c);
                return b[d];
            }
            function nc(a, c, b, d, e) {
                return C([a, K(c), e ? [b + ".p", e] : b, d], Ib);
            }
            function Ib(a, c, b, d) {
                pc(a, c).log(b, d);
            }
            function Vq(a, c) {
                function b(d, e, f) {
                    var g, h;
                    ub(
                        a,
                        ((g = {}),
                        (g.name = "log"),
                        (g.counterKey = c),
                        (g.data =
                            ((h = {}),
                            (h.args = O(e) ? e : [e]),
                            (h.type = d),
                            (h.variables = f),
                            h)),
                        g)
                    );
                }
                return {
                    log: u("log", b),
                    error: u("error", b),
                    warn: u("warn", b),
                };
            }
            function qa(a, c) {
                var b = K(a);
                return zj()(Wq(b)).then(c);
            }
            function Xq(a, c, b) {
                var d, e;
                c = K(c);
                var f = ig(a);
                b = A({ Xg: f(Z) }, b);
                ub(
                    a,
                    ((d = {}),
                    (d.counterKey = c),
                    (d.name = "counterSettings"),
                    (d.data = ((e = {}), (e.settings = b), e)),
                    d)
                );
                return zj()(Yq(c, b));
            }
            function Yq(a, c) {
                return function (b) {
                    var d = b[a];
                    d
                        ? ((d.Cf = !0), d.Bf(c))
                        : (b[a] = { promise: L.resolve(c), Cf: !0, Bf: D });
                };
            }
            function jg(a) {
                return !zd(a) && kg(a);
            }
            function Jd(a) {
                return db(a) ? u(a, Zq) : !1;
            }
            function Cb(a) {
                if (a.fetch) {
                    var c = n(a, "AbortController");
                    return C([a, c ? new c() : void 0], $q);
                }
                return !1;
            }
            function kg(a) {
                var c = n(a, "navigator.sendBeacon");
                return c && Fa("sendBeacon", c)
                    ? C([a, I(c, n(a, "navigator"))], ar)
                    : !1;
            }
            function ar(a, c, b, d) {
                return new L(function (e, f) {
                    var g;
                    if (!n(a, "navigator.onLine")) return f();
                    var h = A(d.Za, ((g = {}), (g["force-urlencoded"] = 1), g));
                    g = b + "?" + Fc(h) + (d.da ? "&" + d.da : "");
                    return 2e3 < g.length
                        ? f(Pa("sb.tlq"))
                        : c(g)
                        ? e("")
                        : f();
                });
            }
            function Zq(a, c, b) {
                return new L(function (d, e) {
                    var f,
                        g,
                        h = "_ymjsp" + Ya(a),
                        k = A(((f = {}), (f.callback = h), f), b.Za),
                        l = C([a, h], br);
                    a[h] = function (p) {
                        try {
                            l(), yc(m), d(p);
                        } catch (q) {
                            e(q);
                        }
                    };
                    k.wmode = "5";
                    var m = Nc(a, ((g = {}), (g.src = Aj(c, b, k)), g));
                    if (!m) return l(), e(Qa("jp.s"));
                    f = u(m, yc);
                    f = v(f, u(Pa(b.ha), e));
                    g = Kd(a, f, b.Oa || 1e4);
                    g = C([a, g], la);
                    m.onload = g;
                    m.onerror = v(l, g, f);
                });
            }
            function br(a, c) {
                try {
                    delete a[c];
                } catch (b) {
                    a[c] = void 0;
                }
            }
            function Xc(a) {
                var c = db(a);
                return c ? C([a, c], cr) : !1;
            }
            function cr(a, c, b, d) {
                return new L(function (e, f) {
                    var g = fc(a),
                        h = c("img"),
                        k = v(u(h, yc), u(Pa(d.ha), f)),
                        l = Kd(a, k, d.Oa || 3e3);
                    h.onerror = k;
                    h.onload = v(u(h, yc), u(null, e), C([a, l], la));
                    k = A({}, d.Za);
                    delete k.wmode;
                    h.src = Aj(b, d, k);
                    Bd(a) &&
                        (A(h.style, {
                            position: "absolute",
                            visibility: "hidden",
                            width: "0px",
                            height: "0px",
                        }),
                        g.appendChild(h));
                });
            }
            function $q(a, c, b, d) {
                var e,
                    f = A(d.yb ? ((e = {}), (e.wmode = "7"), e) : {}, d.Za),
                    g = c || { signal: void 0, abort: D },
                    h = a.fetch(b + "?" + Fc(f), {
                        method: d.Uc,
                        body: d.da,
                        credentials: !1 === d.Ce ? "omit" : "include",
                        headers: d.Xa,
                        signal: g.signal,
                    }),
                    k = u(d.ha, Pa);
                return new L(function (l, m) {
                    d.Oa &&
                        Kd(
                            a,
                            function () {
                                try {
                                    g.abort();
                                } catch (p) {}
                                m(k());
                            },
                            d.Oa
                        );
                    return h
                        .then(function (p) {
                            if (!p.ok) {
                                if (d.ce) return Ua(Bj(p));
                                be(d.ha);
                            }
                            return d.ce ? p.text() : d.yb ? p.json() : null;
                        })
                        .then(l)
                        ["catch"](u(k(), m));
                });
            }
            function Db(a) {
                var c;
                if ((c = n(a, "XMLHttpRequest")))
                    if ((c = "withCredentials" in new a.XMLHttpRequest())) {
                        a: {
                            if (
                                dr.test(a.location.host) &&
                                a.opera &&
                                P(a.opera.version) &&
                                ((c = a.opera.version()),
                                "string" === typeof c &&
                                    "12" === c.split(".")[0])
                            ) {
                                c = !0;
                                break a;
                            }
                            c = !1;
                        }
                        c = !c;
                    }
                return c ? u(a, er) : !1;
            }
            function er(a, c, b) {
                var d,
                    e = new a.XMLHttpRequest(),
                    f = b.da,
                    g = A(b.yb ? ((d = {}), (d.wmode = "7"), d) : {}, b.Za);
                return new L(function (h, k) {
                    e.open(b.Uc || "GET", c + "?" + Fc(g), !0);
                    e.withCredentials = !1 !== b.Ce;
                    b.Oa && (e.timeout = b.Oa);
                    fr(
                        Ia,
                        Xb(function (m) {
                            e.setRequestHeader(m[0], m[1]);
                        })
                    )(b.Xa);
                    var l = C([a, e, Pa(b.ha), b.yb, b.ce, h, k], gr);
                    e.onreadystatechange = l;
                    try {
                        e.send(f);
                    } catch (m) {}
                });
            }
            function gr(a, c, b, d, e, f, g, h) {
                if (4 === c.readyState)
                    if ((200 === c.status || e || g(b), e))
                        200 === c.status ? f(c.responseText) : g(Bj(c));
                    else {
                        e = null;
                        if (d)
                            try {
                                (e = Lb(a, c.responseText)) || g(b);
                            } catch (k) {
                                g(b);
                            }
                        f(e);
                    }
                return h;
            }
            function Aj(a, c, b) {
                (b = Fc(b)) && (a += "?" + b);
                c.da && (a += (b ? "&" : "?") + c.da);
                return a;
            }
            function hr(a, c, b) {
                var d = z(Id, Yb[c] || Zb);
                x(function (e) {
                    return d.unshift(e);
                }, Le);
                return z(v(Mc([a, b]), ma), d);
            }
            function Cj(a) {
                return {
                    N: function (c, b) {
                        var d = c.J;
                        if (!c.K || !d) return b();
                        var e = d["page-ref"],
                            f = d["page-url"];
                        e && f !== e
                            ? (d["page-ref"] = Dj(a, e))
                            : delete d["page-ref"];
                        d["page-url"] = Dj(a, f).slice(0, xa.lg);
                        return b();
                    },
                };
            }
            function Dj(a, c) {
                var b = T(a),
                    d = b.href,
                    e = b.host,
                    f = -1;
                if (!ia(c) || W(c)) return d;
                b = c.replace(Ej, "");
                if (-1 !== b.search(ir)) return b;
                var g = b.charAt(0);
                if (
                    ("?" === g && ((f = d.search(/\?/)), -1 === f)) ||
                    ("#" === g && ((f = d.search(/#/)), -1 === f))
                )
                    return d + b;
                if (-1 !== f) return d.substr(0, f) + b;
                if ("/" === g) {
                    if (((f = hb(d, e)), -1 !== f))
                        return d.substr(0, f + e.length) + b;
                } else
                    return (d = d.split("/")), (d[d.length - 1] = b), G("/", d);
                return "";
            }
            function Me(a, c) {
                return {
                    N: function (b, d) {
                        var e = Fj(c);
                        e = C([b, e, d], jr);
                        kr(a, c, e);
                    },
                    Ba: function (b, d) {
                        var e = b.K,
                            f = Fj(c);
                        if (e) {
                            var g = f.sa;
                            f.Re === e && g && (x(ma, g), (f.sa = null));
                        }
                        d();
                    },
                };
            }
            function jr(a, c, b) {
                var d = a.K;
                d
                    ? Xf(a)
                        ? ((c.Re = d), b())
                        : c.sa
                        ? c.sa.push(b)
                        : b()
                    : b();
            }
            function Xf(a) {
                return (a = a.K) && a.C("pv") && !a.C("ar");
            }
            function kr(a, c, b) {
                if (Ne(a) && rb(a)) {
                    var d = lr(c);
                    if (!d.Mh) {
                        d.Mh = !0;
                        c = od(a, c);
                        if (!c) {
                            b();
                            return;
                        }
                        d.sa = [];
                        var e = function () {
                            d.sa && (x(ma, d.sa), (d.sa = null));
                        };
                        S(a, e, 3e3);
                        c.$.F(["initToChild"], e);
                    }
                    d.sa ? d.sa.push(b) : b();
                } else b();
            }
            function Gj(a, c) {
                return {
                    N: function (b, d) {
                        var e = b.K;
                        if (e && (!c || c.Nf)) {
                            var f = a.document.title;
                            b.M && b.M.title && (f = b.M.title);
                            var g = Gc("getElementsByTagName", a.document);
                            "string" !== typeof f &&
                                g &&
                                ((f = g("title")),
                                (f = (f = n(f, "0.innerHtml")) ? f : ""));
                            f = f.slice(0, xa.kg);
                            e.D("t", f);
                        }
                        d();
                    },
                };
            }
            function Qb(a) {
                return function (c, b) {
                    return {
                        N: function (d, e) {
                            var f = d.K,
                                g = d.J;
                            f &&
                                g &&
                                x(function (h) {
                                    var k = Ld[h],
                                        l = "bi",
                                        m = f;
                                    k ||
                                        ((k = lg[h]), (l = "tel"), (m = je(d)));
                                    k &&
                                        ((k = B(l + ":" + h, k, null)(c, b, d)),
                                        m.Rb(h, k));
                                }, a || mr());
                            e();
                        },
                    };
                };
            }
            function nr(a, c) {
                var b = Md(a);
                c.F(["initToParent"], function (d) {
                    var e = d[0];
                    d = d[1];
                    window.window &&
                        (b.children[d.counterId] = {
                            info: d,
                            window: e.source,
                        });
                })
                    .F(["initToChild"], function (d) {
                        var e = d[0];
                        d = d[1];
                        e.source === a.parent && c.R("parentConnect", [e, d]);
                    })
                    .F(["parentConnect"], function (d) {
                        var e = d[1];
                        e.counterId &&
                            (b.Ea[e.counterId] = {
                                info: e,
                                window: d[0].source,
                            });
                    });
            }
            function or(a) {
                if (Fa("MutationObserver", a.MutationObserver)) {
                    var c = Md(a).children,
                        b = new a.MutationObserver(function () {
                            x(function (d) {
                                n(c[d], "window.window") || delete c[d];
                            }, ea(c));
                        });
                    Nb(a)(
                        Ra(D, function () {
                            b.observe(a.document.body, {
                                subtree: !0,
                                childList: !0,
                            });
                        })
                    );
                }
            }
            function pr(a, c) {
                return function (b, d) {
                    var e,
                        f = { ec: ja(a)(Z), key: a.Math.random(), dir: 0 };
                    b.length &&
                        ((f.ec = Ja(b[0])),
                        (f.key = parseFloat(b[1])),
                        (f.dir = Ja(b[2])));
                    A(d, c);
                    var g =
                        ((e = { data: d }),
                        (e.__yminfo = G(":", ["__yminfo", f.ec, f.key, f.dir])),
                        e);
                    return { meta: f, Uf: Mb(a, g) || "" };
                };
            }
            function Nb(a, c) {
                function b(e) {
                    n(c, d) ? e() : S(a, u(e, b), 100);
                }
                void 0 === c && (c = a);
                var d = (c.nodeType ? "contentWindow." : "") + "document.body";
                return Ha(function (e, f) {
                    b(f);
                });
            }
            function Nd(a, c) {
                var b = c.Md,
                    d = b || "uid";
                b = b ? a.location.hostname : void 0;
                var e = Uc(a),
                    f = Va(a),
                    g = ja(a)(mg),
                    h = Hj(a, c),
                    k = h[0];
                h = h[1];
                var l = e.C("d");
                Ij(a, c);
                var m = !1;
                !h && k && ((h = k), (m = !0));
                if (!h) (h = G("", [g, Ya(a, 1e6, 999999999)])), (m = !0);
                else if (!l || 15768e3 < g - Ja(l)) m = !0;
                m &&
                    !c.Ta &&
                    (e.D(d, h, 525600, b), e.D("d", "" + g, 525600, b));
                f.D(d, h);
                return h;
            }
            function qr(a, c) {
                return !c.Ta && Ij(a, c);
            }
            function Hj(a, c) {
                var b = Va(a),
                    d = Uc(a),
                    e = c.Md || "uid";
                return [b.C(e), d.C(e)];
            }
            function Dc(a) {
                var c = J(a),
                    b = c.C("hitId");
                b || ((b = Ya(a)), c.D("hitId", b));
                return b;
            }
            function pf(a, c, b) {
                var d = Ma(c);
                return d && lj(a, c, ua(["p", rr[d], "c"]), Ui, b);
            }
            function of(a, c) {
                var b = oc(ng, a, c);
                if (!b) {
                    var d = oc("div", a, c);
                    d && (jb(ng + ",div", d).length || (b = d));
                }
                return b;
            }
            function lj(a, c, b, d, e) {
                return N(
                    function (f, g) {
                        var h = null;
                        g in Jj
                            ? (h = c.getAttribute && c.getAttribute(Jj[g]))
                            : g in Yc &&
                              (h =
                                  "p" === g
                                      ? Yc[g](a, c, e)
                                      : "c" === g
                                      ? Yc[g](a, c, d)
                                      : Yc[g](a, c));
                        h &&
                            ((h = h.slice(0, Kj[g] || 100)),
                            (f[g] = og[g] ? "" + gc(h) : h));
                        return f;
                    },
                    {},
                    b
                );
            }
            function mi(a, c, b) {
                if (me(a)) return Ca(b.querySelectorAll(c));
                var d = Lj(c.split(" "), b);
                return ha(function (e, f) {
                    return Pb(a)(e, d) === f;
                }, d);
            }
            function Lj(a, c) {
                var b = wa([], a),
                    d = b.shift();
                if (!d) return [];
                d = c.getElementsByTagName(d);
                return b.length ? xc(u(b, Lj), Ca(d)) : Ca(d);
            }
            function dc(a, c) {
                if (c.querySelector) return c.querySelector(a);
                var b = jb(a, c);
                return b && b.length ? b[0] : null;
            }
            function jb(a, c) {
                if (!c || !c.querySelectorAll) return [];
                var b = c.querySelectorAll(a);
                return b ? Ca(b) : [];
            }
            function oj(a) {
                var c = null;
                try {
                    c = a.target || a.srcElement;
                } catch (b) {}
                if (c) {
                    3 === c.nodeType && (c = c.parentNode);
                    for (
                        a = c && c.nodeName && ("" + c.nodeName).toLowerCase();
                        n(c, "parentNode.nodeName") &&
                        (("a" !== a && "area" !== a) ||
                            (!c.href && !c.getAttribute("xlink:href")));

                    )
                        a =
                            (c = c.parentNode) &&
                            c.nodeName &&
                            ("" + c.nodeName).toLowerCase();
                    return c.href ? c : null;
                }
                return null;
            }
            function Nc(a, c) {
                var b = db(a);
                if (b) {
                    var d = a.document,
                        e = b("script");
                    e.src = c.src;
                    e.type = c.type || "text/javascript";
                    e.charset = c.charset || "utf-8";
                    e.async = c.async || !0;
                    try {
                        var f = d.getElementsByTagName("head")[0];
                        if (!f) {
                            var g = d.getElementsByTagName("html")[0];
                            f = b("head");
                            g && g.appendChild(f);
                        }
                        f.insertBefore(e, f.firstChild);
                        return e;
                    } catch (h) {}
                }
            }
            function hi(a, c) {
                var b = Mj(a);
                H(c, b.pb) &&
                    ((b.pb = ha(v(Ba(c), Hc), b.pb)),
                    b.pb.length || (yc(b.gb), (b.gb = null)));
            }
            function gi(a, c, b) {
                var d = Mj(c);
                H(b, d.pb) || d.pb.push(b);
                if (Xa(d.gb)) {
                    b = db(a);
                    if (!b) return null;
                    b = b("iframe");
                    A(b.style, {
                        display: "none",
                        width: "1px",
                        height: "1px",
                        visibility: "hidden",
                    });
                    b.src = c;
                    a = fc(a);
                    if (!a) return null;
                    a.appendChild(b);
                    d.gb = b;
                } else
                    (a = n(d.gb, "contentWindow")) &&
                        a.postMessage("frameReinit", "*");
                return d.gb;
            }
            function sr(a, c) {
                var b = O(a) ? a : [a];
                c = c || document;
                if (c.querySelectorAll) {
                    var d = G(
                        ", ",
                        z(function (e) {
                            return "." + e;
                        }, b)
                    );
                    return Ca(c.querySelectorAll(d));
                }
                if (c.getElementsByClassName)
                    return xc(v(Ga("getElementsByClassName", c), Ca), b);
                d = c.getElementsByTagName("*");
                b = "(" + G("|", b) + ")";
                return ha(u(b, ic), Ca(d));
            }
            function vf(a, c, b) {
                for (
                    var d = "", e = Zf(), f = Ma(c) || "*";
                    c && c.parentNode && !H(f, ["BODY", "HTML"]);

                )
                    (d += e[f] || "*"),
                        (d += Nj(a, c, b) || ""),
                        (c = c.parentElement),
                        (f = Ma(c) || "*");
                return ab(d, 128);
            }
            function Nj(a, c, b) {
                if ((a = Oe(a, c))) {
                    a = a.childNodes;
                    for (
                        var d = c && c.nodeName, e = 0, f = 0;
                        f < a.length;
                        f += 1
                    )
                        if (d === (a[f] && a[f].nodeName)) {
                            if (c === a[f]) return e;
                            (b && a[f] === b) || (e += 1);
                        }
                }
                return 0;
            }
            function Oe(a, c) {
                var b = n(a, "document");
                return c && c !== b.documentElement
                    ? c === Ic(a)
                        ? b.documentElement
                        : n(c, "parentNode")
                    : null;
            }
            function Pf(a, c) {
                var b = pg(a, c),
                    d = b.left;
                b = b.top;
                var e = Pe(a, c);
                return [d, b, e[0], e[1]];
            }
            function Pe(a, c) {
                var b = n(a, "document");
                if (c === Ic(a) || c === b.documentElement) {
                    b = fc(a);
                    var d = Pc(a);
                    return [
                        Math.max(b.scrollWidth, d[0]),
                        Math.max(b.scrollHeight, d[1]),
                    ];
                }
                return (b = Oc(c))
                    ? [b.width, b.height]
                    : [c.offsetWidth, c.offsetHeight];
            }
            function pg(a, c) {
                var b = c,
                    d = n(a, "document"),
                    e = Ma(b);
                if (
                    !b ||
                    !b.ownerDocument ||
                    "PARAM" === e ||
                    b === Ic(a) ||
                    b === d.documentElement
                )
                    return { left: 0, top: 0 };
                if ((d = Oc(b)))
                    return (
                        (b = bg(a)),
                        {
                            left: Math.round(d.left + b.x),
                            top: Math.round(d.top + b.y),
                        }
                    );
                for (e = d = 0; b; )
                    (d += b.offsetLeft),
                        (e += b.offsetTop),
                        (b = b.offsetParent);
                return { left: d, top: e };
            }
            function oc(a, c, b) {
                if (!(c && c.Element && c.Element.prototype && c.document && b))
                    return null;
                if (
                    c.Element.prototype.closest &&
                    Fa("closest", c.Element.prototype.closest) &&
                    b.closest
                )
                    return b.closest(a);
                var d = ti(c);
                if (d) {
                    for (; b && 1 === b.nodeType && !d.call(b, a); )
                        b = b.parentElement || b.parentNode;
                    return b && 1 === b.nodeType ? b : null;
                }
                if (me(c)) {
                    for (
                        a = Ca(
                            (c.document || c.ownerDocument).querySelectorAll(a)
                        );
                        b && 1 === b.nodeType && -1 === Pb(c)(b, a);

                    )
                        b = b.parentElement || b.parentNode;
                    return b && 1 === b.nodeType ? b : null;
                }
                return null;
            }
            function me(a) {
                return !(
                    !Fa(
                        "querySelectorAll",
                        n(a, "Element.prototype.querySelectorAll")
                    ) || !a.document.querySelectorAll
                );
            }
            function Gh(a, c, b) {
                var d = c.top,
                    e = c.bottom,
                    f = c.left,
                    g = b.w;
                b = b.h;
                a = a.Math;
                c = a.min(a.max(c.right, 0), g) - a.min(a.max(f, 0), g);
                return (a.min(a.max(e, 0), b) - a.min(a.max(d, 0), b)) * c;
            }
            function Oj(a) {
                return Qe(a) && !$a(Ba(a.type), tr)
                    ? Re(a)
                        ? !a.checked
                        : !a.value
                    : ur(a)
                    ? !a.value
                    : vr(a)
                    ? 0 > a.selectedIndex
                    : !0;
            }
            function Ma(a) {
                if (a)
                    try {
                        var c = a.nodeName;
                        if (ia(c)) return c;
                        c = a.tagName;
                        if (ia(c)) return c;
                    } catch (b) {}
            }
            function Pj(a, c) {
                var b = a.document.getElementsByTagName("form");
                return Pb(a)(c, Ca(b));
            }
            function wr(a, c, b) {
                b = Gc("dispatchEvent", b || a.document);
                var d = null,
                    e = n(a, "Event.prototype.constructor");
                if (
                    e &&
                    (Fa("(Event|Object|constructor)", e) ||
                        (qg(a) && "[object Event]" === "" + e))
                )
                    try {
                        d = new a.Event(c);
                    } catch (f) {
                        if ((a = Gc("createEvent", n(a, "document"))) && P(a)) {
                            try {
                                d = a(c);
                            } catch (g) {}
                            d && d.initEvent && d.initEvent(c, !1, !1);
                        }
                    }
                d && b(d);
            }
            function Oc(a) {
                try {
                    return a.getBoundingClientRect && a.getBoundingClientRect();
                } catch (c) {
                    return "object" === typeof c &&
                        null !== c &&
                        16389 === (c.pf && c.pf & 65535)
                        ? {
                              top: 0,
                              bottom: 0,
                              left: 0,
                              width: 0,
                              height: 0,
                              right: 0,
                          }
                        : null;
                }
            }
            function bg(a) {
                var c = Ic(a),
                    b = n(a, "document");
                return {
                    x:
                        a.pageXOffset ||
                        (b.documentElement && b.documentElement.scrollLeft) ||
                        (c && c.scrollLeft) ||
                        0,
                    y:
                        a.pageYOffset ||
                        (b.documentElement && b.documentElement.scrollTop) ||
                        (c && c.scrollTop) ||
                        0,
                };
            }
            function Pc(a) {
                var c = fe(a);
                if (c) {
                    var b = c[2];
                    return [a.Math.round(c[0] * b), a.Math.round(c[1] * b)];
                }
                c = fc(a);
                return [
                    n(c, "clientWidth") || a.innerWidth,
                    n(c, "clientHeight") || a.innerHeight,
                ];
            }
            function fe(a) {
                var c = n(a, "visualViewport.width"),
                    b = n(a, "visualViewport.height");
                a = n(a, "visualViewport.scale");
                return ca(c) || ca(b)
                    ? null
                    : [Math.floor(c), Math.floor(b), a];
            }
            function fc(a) {
                var c = n(a, "document") || {},
                    b = c.documentElement;
                return "CSS1Compat" === c.compatMode ? b : Ic(a) || b;
            }
            function Ic(a) {
                a = n(a, "document");
                try {
                    return a.getElementsByTagName("body")[0];
                } catch (c) {
                    return null;
                }
            }
            function ic(a, c) {
                try {
                    return new RegExp("(?:^|\\s)" + a + "(?:\\s|$)").test(
                        c.className
                    );
                } catch (b) {
                    return !1;
                }
            }
            function Jc(a) {
                var c;
                try {
                    if ((c = a.target || a.srcElement))
                        !c.ownerDocument && c.documentElement
                            ? (c = c.documentElement)
                            : c.ownerDocument !== document && (c = null);
                } catch (b) {}
                return c;
            }
            function yc(a) {
                var c = a && a.parentNode;
                c && c.removeChild(a);
            }
            function Kb(a) {
                return a ? a.innerText || "" : "";
            }
            function Sf(a) {
                if (ca(a)) return !1;
                a = a.nodeType;
                return 3 === a || 8 === a;
            }
            function Qj(a, c, b) {
                void 0 === c && (c = "");
                void 0 === b && (b = "_ym");
                var d = "" + b + c;
                d && (d += "_");
                return {
                    Fd: xr(a),
                    C: function (e, f) {
                        var g = Rj(a, "" + d + e);
                        return Xa(g) && !W(f) ? f : g;
                    },
                    D: function (e, f) {
                        Sj(a, "" + d + e, f);
                        return this;
                    },
                    fc: function (e) {
                        Tj(a, "" + d + e);
                        return this;
                    },
                };
            }
            function Sj(a, c, b) {
                var d = rg(a);
                a = Mb(a, b);
                if (!Xa(a))
                    try {
                        d.setItem(c, a);
                    } catch (e) {}
            }
            function Rj(a, c) {
                var b = rg(a);
                try {
                    return Lb(a, b.getItem(c));
                } catch (d) {}
                return null;
            }
            function Tj(a, c) {
                var b = rg(a);
                try {
                    b.removeItem(c);
                } catch (d) {}
            }
            function rg(a) {
                try {
                    return a.localStorage;
                } catch (c) {}
                return null;
            }
            function Mb(a, c, b) {
                try {
                    return a.JSON.stringify(c, null, b);
                } catch (d) {
                    return null;
                }
            }
            function je(a, c, b) {
                void 0 === b && (b = null);
                a.Ha || (a.Ha = wf());
                c && a.Ha.Rb(c, b);
                return a.Ha;
            }
            function Se(a) {
                return {
                    N: function (c, b) {
                        var d = a.document,
                            e = c.K;
                        if (e && sg(a)) {
                            var f = fa(a),
                                g = function (h) {
                                    sg(a) || (f.vb(d, Uj, g), b());
                                    return h;
                                };
                            f.F(d, Uj, g);
                            e.D("pr", "1");
                        } else b();
                    },
                };
            }
            function Od(a) {
                return function (c, b, d) {
                    return function (e, f) {
                        var g = z(v(Id, Mc([c, f]), ma), Vj[a] || []);
                        g = wa(g, d);
                        return Wj(c, b, g)(e);
                    };
                };
            }
            function Wj(a, c, b) {
                var d = $b(a, c);
                return function (e) {
                    return Xj(b, e, !0)
                        .then(function () {
                            var f = e.ma || {},
                                g = f.Eh,
                                h = void 0 === g ? "" : g;
                            g = f.za;
                            var k = void 0 === g ? "" : g;
                            f = f.Fh;
                            f = z(
                                function (l) {
                                    return (
                                        xa.Qa +
                                        "//" +
                                        ("" + h + l || jc) +
                                        "/" +
                                        k
                                    );
                                },
                                void 0 === f ? [jc] : f
                            );
                            return d(e, f);
                        })
                        .then(function (f) {
                            var g = f.Lc;
                            f = f.bg;
                            e.xi = g;
                            e.Cj = f;
                            return Xj(b, e).then(u(g, R));
                        });
                };
            }
            function $b(a, c) {
                return function (b, d) {
                    return Yj(a, c, d, b);
                };
            }
            function Yj(a, c, b, d, e, f) {
                var g;
                void 0 === e && (e = 0);
                void 0 === f && (f = 0);
                var h = A({ ha: [] }, d.ba),
                    k = c[f],
                    l = k[0];
                k = k[1];
                var m = b[e];
                (h.Xa && h.Xa["Content-Type"]) ||
                    !h.da ||
                    ((h.Xa = A(
                        {},
                        h.Xa,
                        ((g = {}),
                        (g["Content-Type"] =
                            "application/x-www-form-urlencoded"),
                        g)
                    )),
                    (h.da = "site-info=" + qe(h.da)));
                h.Uc = h.da ? "POST" : "GET";
                h.Za = yr(a, d, l);
                h.za = (d.ma || {}).za;
                h.ha.push(l);
                A(d.ba, h);
                g = "" + m + (d.Hc && d.Hc.Yh ? "/1" : "");
                var p = 0;
                p = zr(a, g, h);
                return k(g, h)
                    .then(function (q) {
                        var r = p,
                            t,
                            y;
                        ub(
                            a,
                            ((t = {}),
                            (t.name = "requestSuccess"),
                            (t.data =
                                ((y = {}), (y.body = q), (y.requestId = r), y)),
                            t)
                        );
                        return { Lc: q, bg: e };
                    })
                    ["catch"](function (q) {
                        var r = p,
                            t,
                            y;
                        ub(
                            a,
                            ((t = {}),
                            (t.name = "requestFail"),
                            (t.data =
                                ((y = {}),
                                (y.error = q),
                                (y.requestId = r),
                                y)),
                            t)
                        );
                        r = f + 1 >= c.length;
                        t = e + 1 >= b.length;
                        r && t && Ua(q);
                        return Yj(
                            a,
                            c,
                            b,
                            d,
                            !t && r ? e + 1 : e,
                            r ? 0 : f + 1
                        );
                    });
            }
            function yr(a, c, b) {
                var d = A({}, c.J);
                a = ja(a);
                c.K && (d["browser-info"] = Ka(c.K.l()).D("st", a(mg)).Fa());
                !d.t && (c = c.Ha) && (c.D("ti", b), (d.t = c.Fa()));
                return d;
            }
            function zr(a, c, b) {
                var d,
                    e,
                    f,
                    g = Ya(a),
                    h = b.ha,
                    k = b.da,
                    l = b.Xa,
                    m = b.Za;
                b = b.Uc;
                ub(
                    a,
                    ((d = {}),
                    (d.name = "request"),
                    (d.data =
                        ((e = {}),
                        (e.url = c),
                        (e.requestId = g),
                        (e.senderParams =
                            ((f = {}),
                            (f.rBody = k),
                            (f.debugStack = h),
                            (f.rHeaders = l),
                            (f.rQuery = m),
                            (f.verb = b),
                            f)),
                        e)),
                    d)
                );
                return g;
            }
            function Zj(a, c, b, d) {
                a[c] || (a[c] = []);
                b && !ca(d) && ak(a[c], b, d);
            }
            function ak(a, c, b) {
                for (var d = [c, b], e = -1e4, f = 0; f < a.length; f += 1) {
                    var g = a[f],
                        h = g[0];
                    g = g[1];
                    if (b === g && h === c) return;
                    if (b < g && b >= e) {
                        a.splice(f, 0, d);
                        return;
                    }
                    e = g;
                }
                a.push(d);
            }
            function Xj(a, c, b) {
                void 0 === b && (b = !1);
                return new L(function (d, e) {
                    function f(k, l) {
                        l();
                        d();
                    }
                    var g = a.slice();
                    g.push({ N: f, Ba: f });
                    var h = ec(g, function (k, l) {
                        var m = b ? k.N : k.Ba;
                        if (m)
                            try {
                                m(c, l);
                            } catch (p) {
                                h(Ar), e(p);
                            }
                        else l();
                    });
                    h(bk);
                });
            }
            function Tb(a, c, b) {
                var d = b || "as";
                if (a.postMessage && !a.attachEvent) {
                    b = fa(a);
                    var e = "__ym__promise_" + Ya(a) + "_" + Ya(a),
                        f = D;
                    d = E(a, d, function (g) {
                        try {
                            var h = g.data;
                        } catch (k) {
                            return;
                        }
                        h === e &&
                            (f(),
                            g.stopPropagation && g.stopPropagation(),
                            c());
                    });
                    f = b.F(a, ["message"], d);
                    a.postMessage(e, "*");
                } else S(a, c, 0, d);
            }
            function uh(a, c, b, d, e) {
                void 0 === d && (d = 1);
                void 0 === e && (e = "itc");
                c = ec(c, b);
                md(a, c, d)(Ra(E(a, e), D));
            }
            function md(a, c, b, d) {
                void 0 === b && (b = 1);
                void 0 === d && (d = ck);
                tg = Infinity === b;
                return Ha(function (e, f) {
                    function g() {
                        try {
                            var k = c(d(a, b));
                            h = h.concat(k);
                        } catch (l) {
                            return e(l);
                        }
                        c(Br);
                        if (c(Pd)) return f(h), dk(a);
                        tg ? (c(d(a, 1e4)), f(h), dk(a)) : S(a, g, 100);
                    }
                    var h = [];
                    Cr(g);
                });
            }
            function dk(a) {
                if (ug.length) {
                    var c = ug.shift();
                    tg ? c() : S(a, c, 100);
                } else vg = !1;
            }
            function Cr(a) {
                vg ? ug.push(a) : ((vg = !0), a());
            }
            function If(a) {
                return Ha(function (c, b) {
                    b(a);
                });
            }
            function zp(a) {
                return Ha(function (c, b) {
                    a.then(b, c);
                });
            }
            function Dr(a) {
                var c = [],
                    b = 0;
                return Ha(function (d, e) {
                    x(function (f, g) {
                        f(
                            Ra(d, function (h) {
                                try {
                                    (c[g] = h),
                                        (b += 1),
                                        b === a.length && e(c);
                                } catch (k) {
                                    d(k);
                                }
                            })
                        );
                    }, a);
                });
            }
            function yp(a) {
                var c = [],
                    b = !1;
                return Ha(function (d, e) {
                    function f(g) {
                        c.push(g) === a.length && d(c);
                    }
                    x(function (g) {
                        g(
                            Ra(f, function (h) {
                                if (!b)
                                    try {
                                        e(h), (b = !0);
                                    } catch (k) {
                                        f(k);
                                    }
                            })
                        );
                    }, a);
                });
            }
            function Ra(a, c) {
                return function (b) {
                    return b(a, c);
                };
            }
            function ec(a, c) {
                return Ha({ Sa: a, Id: c || R, ne: !1, va: 0 });
            }
            function bk(a) {
                function c() {
                    function d() {
                        b = !0;
                        a.va += 1;
                    }
                    b = !1;
                    a.Id(a.Sa[a.va], function () {
                        d();
                    });
                    b || ((a.va += 1), (d = u(a, bk)));
                }
                for (var b = !0; !Pd(a) && b; ) c();
            }
            function ck(a, c) {
                return function (b) {
                    var d = ja(a),
                        e = d(Z);
                    return ek(function (f, g) {
                        d(Z) - e >= c && g(fk);
                    })(b);
                };
            }
            function wg(a, c) {
                return function (b) {
                    var d = ja(a),
                        e = d(Z);
                    return xg(function (f) {
                        d(Z) - e >= c && fk(f);
                    })(b);
                };
            }
            function xg(a) {
                return function (c) {
                    for (var b; c.Sa.length && !Pd(c); )
                        (b = c.Sa.pop()), (b = c.Id(b, c.Sa)), a(c);
                    return b;
                };
            }
            function Er(a) {
                Pd(a) && Ua(Qa("i"));
                var c = a.Id(a.Sa[a.va]);
                a.va += 1;
                return c;
            }
            function Br(a) {
                a.ne = !1;
            }
            function fk(a) {
                a.ne = !0;
            }
            function Ar(a) {
                a.va = a.Sa.length;
            }
            function Pd(a) {
                return a.ne || a.Sa.length <= a.va;
            }
            function Ab(a) {
                a = ja(a);
                return Math.round(a(gk) / 50);
            }
            function gk(a) {
                var c = a.qb,
                    b = c[1];
                a = c[0] && b ? b() : Z(a) - a.Gh;
                return Math.round(a);
            }
            function mg(a) {
                return Math.round(Z(a) / 1e3);
            }
            function qb(a) {
                return Math.floor(Z(a) / 1e3 / 60);
            }
            function Z(a) {
                var c = a.xe;
                return 0 !== c ? c : yg(a.l, a.qb);
            }
            function ig(a) {
                var c = fa(a),
                    b = hk(a),
                    d = { l: a, xe: 0, qb: b, Gh: yg(a, b) },
                    e = b[1];
                (b[0] && e) ||
                    c.F(a, ["beforeunload", "unload"], function () {
                        0 === d.xe && (d.xe = yg(a, d.qb));
                    });
                return Ha(d);
            }
            function Fr(a) {
                return (10 > a ? "0" : "") + a;
            }
            function jq(a, c, b) {
                function d() {
                    f = 0;
                    g && ((g = !1), (f = S(a, d, b)), e.R(h));
                }
                var e = Ce(a),
                    f,
                    g = !1,
                    h;
                c.F(function (k) {
                    g = !0;
                    h = k;
                    f || d();
                    return D;
                });
                return e;
            }
            function Gr(a, c) {
                return a.clearInterval(c);
            }
            function Hr(a, c, b, d) {
                return a.setInterval(E(a, "i.err." + (d || "def"), c), b);
            }
            function S(a, c, b, d) {
                return Kd(a, E(a, "d.err." + (d || "def"), c), b);
            }
            function rd(a) {
                var c = {};
                return {
                    F: function (b, d) {
                        x(function (e) {
                            n(c, e) || (c[e] = Ce(a));
                            c[e].F(d);
                        }, b);
                        return this;
                    },
                    ga: function (b, d) {
                        x(function (e) {
                            n(c, e) && c[e].ga(d);
                        }, b);
                        return this;
                    },
                    R: function (b, d) {
                        return n(c, b) ? E(a, "e." + d, c[b].R)(d) : [];
                    },
                };
            }
            function Ce(a) {
                var c = [],
                    b = {};
                b.xj = c;
                b.F = v(Ga("push", c), u(b, R));
                b.ga = v(vb(Pb(a))(c), vb(Ga("splice", c))(1), u(b, R));
                b.R = v(R, vb(ma), Ir(c));
                return b;
            }
            function ik(a, c, b, d, e, f) {
                a = Jr(a);
                var g = a.F,
                    h = a.ga;
                f = f ? h : g;
                if (c[f])
                    if (a.Hi) c[f](b, d, e);
                    else c[f]("on" + b, d);
            }
            function B(a, c, b) {
                return function () {
                    return E(arguments[0], a, c, b).apply(this, arguments);
                };
            }
            function E(a, c, b, d, e) {
                var f = b || Ua;
                return function () {
                    var g = d;
                    try {
                        g = f.apply(e || null, arguments);
                    } catch (h) {
                        Rc(a, c, h);
                    }
                    return g;
                };
            }
            function yg(a, c) {
                var b = c || hk(a),
                    d = b[0];
                b = b[1];
                return !isNaN(d) && P(b)
                    ? Math.round(b() + d)
                    : a.Date.now
                    ? a.Date.now()
                    : new a.Date().getTime();
            }
            function hk(a) {
                a = Ad(a);
                var c = n(a, "timing.navigationStart"),
                    b = n(a, "now");
                b && (b = I(b, a));
                return [c, b];
            }
            function Ad(a) {
                return n(a, "performance") || n(a, "webkitPerformance");
            }
            function Rc(a, c, b) {
                var d = "u.a.e",
                    e = "";
                b &&
                    ("object" === typeof b
                        ? (b.unk && Ua(b),
                          (d = b.message),
                          (e =
                              ("string" === typeof b.stack &&
                                  b.stack.replace(/\n/g, "\\n")) ||
                              "n.s.e.s"))
                        : (d = "" + b));
                Kr(d) ||
                    $a(u(d, ib), Lr) ||
                    (Mr(d) && 0.1 <= a.Math.random()) ||
                    x(v(R, Mc(["jserrs", d, c, e]), ma), jk);
            }
            function be() {
                var a = Oa(arguments);
                return Ua(Pa(a));
            }
            function Pa(a) {
                var c = "";
                O(a) ? (c = G(".", a)) : ia(a) && (c = a);
                return Qa("err.kn(" + xa.ab + ")" + c);
            }
            function Bj(a) {
                return Qa(
                    "http." +
                        a.status +
                        ".st." +
                        a.statusText +
                        ".rt." +
                        ("" + a.responseText).substring(0, 50)
                );
            }
            function Nr(a) {
                this.message = a;
            }
            function ub(a, c) {
                if (Te(a)) {
                    var b = c.counterKey;
                    if (b) {
                        var d = b.split(":");
                        b = d[1];
                        d = zg(oe(d[0]));
                        if ("1" === b || d) return;
                    }
                    b = Or(a);
                    1e3 === b.length && b.shift();
                    b.push(c);
                }
            }
            function ui(a, c, b) {
                Ag(a, "metrika_enabled", "1", 0, c, b, !0);
                var d = kk(a);
                (d = d && d.metrika_enabled) &&
                    lk(a, "metrika_enabled", c, b, !0);
                return !!d;
            }
            function Ag(a, c, b, d, e, f, g) {
                void 0 === g && (g = !1);
                if (vi(a, ue, c)) {
                    var h = c + "=" + encodeURIComponent(b) + ";";
                    h += "" + Pr(a);
                    if (d) {
                        var k = new Date();
                        k.setTime(k.getTime() + 6e4 * d);
                        h += "expires=" + k.toUTCString() + ";";
                    }
                    e && ((d = e.replace(Qr, "")), (h += "domain=" + d + ";"));
                    try {
                        (a.document.cookie = h + ("path=" + (f || "/"))),
                            g || (mk(a)[c] = b);
                    } catch (l) {}
                }
            }
            function ue(a, c) {
                var b = mk(a);
                return b ? b[c] || null : null;
            }
            function kk(a) {
                try {
                    var c = a.document.cookie;
                    if (!ca(c)) {
                        var b = {};
                        x(function (d) {
                            d = d.split("=");
                            var e = d[1];
                            b[ab(d[0])] = ab(nk(e));
                        }, (c || "").split(";"));
                        return b;
                    }
                } catch (d) {}
                return null;
            }
            function vi(a, c, b) {
                return !Bg.length || H(b, Ue)
                    ? !0
                    : N(
                          function (d, e) {
                              return d && e(a, c, b);
                          },
                          !0,
                          Bg
                      );
            }
            function Fc(a) {
                return a
                    ? v(
                          Ia,
                          $f(function (c, b) {
                              var d = b[0],
                                  e = b[1];
                              W(e) || ca(e) || c.push(d + "=" + qe(e));
                              return c;
                          }, []),
                          ze("&")
                      )(a)
                    : "";
            }
            function Rr(a) {
                return a
                    ? v(
                          Xb(function (c) {
                              c = c.split("=");
                              var b = c[1];
                              return [c[0], ca(b) ? void 0 : nk(b)];
                          }),
                          $f(function (c, b) {
                              c[b[0]] = b[1];
                              return c;
                          }, {})
                      )(a.split("&"))
                    : {};
            }
            function nk(a) {
                var c = "";
                try {
                    c = decodeURIComponent(a);
                } catch (b) {}
                return c;
            }
            function qe(a) {
                try {
                    return encodeURIComponent(a);
                } catch (c) {}
                a = G(
                    "",
                    ha(function (c) {
                        return 55296 >= c.charCodeAt(0);
                    }, a.split(""))
                );
                return encodeURIComponent(a);
            }
            function ab(a, c) {
                if (a) {
                    var b = ok ? ok.call(a) : ("" + a).replace(Ej, "");
                    return c && b.length > c ? b.substring(0, c) : b;
                }
                return "";
            }
            function xj(a) {
                var c = a.match(pk);
                if (c) {
                    a = c[1];
                    if ((c = c[2])) return H(c, Cg) ? c : !1;
                    if (a) return Cg[0];
                }
                return !1;
            }
            function T(a) {
                return N(
                    function (c, b) {
                        var d = n(a, "location." + b);
                        c[b] = d ? "" + d : "";
                        return c;
                    },
                    {},
                    Sr
                );
            }
            function qk(a) {
                return N(
                    function (c, b) {
                        c[ce[b[0]].ea] = b[1];
                        return c;
                    },
                    {},
                    Ia(a)
                );
            }
            function qc(a) {
                x(function (c) {
                    var b = c[1];
                    ce[c[0]] = { ea: b.ea, Na: b.Na };
                }, Ia(a));
            }
            function hm(a, c, b, d, e) {
                var f = th(a, b, d, e);
                a = N(
                    function (g, h) {
                        var k = h[1],
                            l = k.Na;
                        k = f[k.ea];
                        g[h[0]] = l ? l(k) : k;
                        return g;
                    },
                    {},
                    Ia(c)
                );
                sj(a, a.X || {});
                return a;
            }
            function th(a, c, b, d) {
                var e;
                return ka(a)
                    ? a
                    : ((e = {}),
                      (e.id = a),
                      (e.type = b),
                      (e.defer = d),
                      (e.params = c),
                      e);
            }
            function Tr(a) {
                a = K(a);
                return (rc[a] && rc[a].Oi) || null;
            }
            function rk(a) {
                a = K(a);
                return rc[a] && rc[a].Ni;
            }
            function sj(a, c) {
                var b = K(a),
                    d = n(c, "__ym.turbo_page"),
                    e = n(c, "__ym.turbo_page_id");
                rc[b] || (rc[b] = {});
                if (d || e) (rc[b].Ni = d), (rc[b].Oi = e);
            }
            function Af(a, c) {
                if (Qd(a) && c) {
                    var b = lb(a).match(Dg);
                    if (b && b.length) return +b[1] >= c;
                }
                return !1;
            }
            function Bf(a, c) {
                var b = lb(a);
                return b && (b = b.match(Ur)) && 1 < b.length
                    ? Ja(b[1]) >= c
                    : !1;
            }
            function sg(a) {
                return H(
                    "prerender",
                    z(u(n(a, "document"), n), [
                        "webkitVisibilityState",
                        "visibilityState",
                    ])
                );
            }
            function Ya(a, c, b) {
                var d = W(b);
                W(c) && d
                    ? ((d = 1), (c = 1073741824))
                    : d
                    ? (d = 1)
                    : ((d = c), (c = b));
                return a.Math.floor(a.Math.random() * (c - d)) + d;
            }
            function Vr() {
                var a = Oa(arguments),
                    c = a[0];
                for (a = a.slice(1); a.length; ) {
                    var b = a.shift(),
                        d;
                    for (d in b) Jb(b, d) && (c[d] = b[d]);
                    Jb(b, "toString") && (c.toString = b.toString);
                }
                return c;
            }
            function Wr(a) {
                return function (c) {
                    return c ? a(c) : [];
                };
            }
            function sk(a) {
                return W(a)
                    ? []
                    : Eg(
                          function (c, b) {
                              c.push([b, a[b]]);
                              return c;
                          },
                          [],
                          tk(a)
                      );
            }
            function tk(a) {
                var c = [],
                    b;
                for (b in a) Jb(a, b) && c.push(b);
                return c;
            }
            function oe(a) {
                try {
                    return parseInt(a, 10);
                } catch (c) {
                    return null;
                }
            }
            function mc(a, c) {
                return (
                    a.isFinite(c) &&
                    !a.isNaN(c) &&
                    "[object Number]" === Object.prototype.toString.call(c)
                );
            }
            function Xr(a) {
                for (var c = [], b = a.length - 1; 0 <= b; --b)
                    c[a.length - 1 - b] = a[b];
                return c;
            }
            function wa(a, c) {
                x(v(R, Ga("push", a)), c);
                return a;
            }
            function we(a, c) {
                return Array.prototype.sort.call(c, a);
            }
            function Ve(a) {
                return a.splice(0, a.length);
            }
            function Ca(a) {
                return a
                    ? O(a)
                        ? a
                        : Rd
                        ? Rd(a)
                        : "number" === typeof a.length && 0 <= a.length
                        ? uk(a)
                        : []
                    : [];
            }
            function Yr(a, c) {
                for (var b = 0; b < c.length; b += 1)
                    if (b in c && a.call(c, c[b], b)) return !0;
                return !1;
            }
            function Zr(a, c) {
                return N(
                    function (b, d, e) {
                        d = a(d, e);
                        return b.concat(O(d) ? d : [d]);
                    },
                    [],
                    c
                );
            }
            function vk(a, c) {
                return N(
                    function (b, d, e) {
                        b.push(a(d, e));
                        return b;
                    },
                    [],
                    c
                );
            }
            function $r(a, c) {
                if (!Qd(a)) return !0;
                try {
                    c.call(
                        { 0: !0, length: -Math.pow(2, 32) + 1 },
                        function () {
                            throw 1;
                        }
                    );
                } catch (b) {
                    return !1;
                }
                return !0;
            }
            function as(a, c) {
                for (var b = "", d = 0; d < c.length; d += 1)
                    b += "" + (d ? a : "") + c[d];
                return b;
            }
            function bs(a, c) {
                return 1 <= wk(Ba(a), c).length;
            }
            function cs(a, c) {
                for (var b = 0; b < c.length; b += 1)
                    if (a.call(c, c[b], b)) return c[b];
            }
            function wk(a, c) {
                return Eg(
                    function (b, d, e) {
                        a(d, e) && b.push(d);
                        return b;
                    },
                    [],
                    c
                );
            }
            function xd(a, c, b) {
                return b ? a : c;
            }
            function ds(a, c) {
                return N(
                    function (b, d, e) {
                        return b ? !!a(d, e) : !1;
                    },
                    !0,
                    c
                );
            }
            function dg(a, c, b) {
                try {
                    if (P(c)) {
                        var d = Oa(arguments).slice(3);
                        ca(b) ? c.apply(null, d) : c.apply(b, d);
                    }
                } catch (e) {
                    Kd(a, u(e, Ua), 0);
                }
            }
            function Ua(a) {
                throw a;
            }
            function Kd(a, c, b) {
                return Gc("setTimeout", a)(c, b);
            }
            function la(a, c) {
                return Gc("clearTimeout", a)(c);
            }
            function Fd() {
                return [];
            }
            function Kc() {
                return {};
            }
            function Gc(a, c) {
                var b = n(c, a),
                    d = n(c, "constructor.prototype." + a) || b;
                try {
                    if (d && d.apply)
                        return function () {
                            return d.apply(c, arguments);
                        };
                } catch (e) {
                    return b;
                }
                return d;
            }
            function mb(a, c, b) {
                return function () {
                    var d = J(arguments[0]),
                        e = b ? "global" : "m1350",
                        f = d.C(e, {}),
                        g = n(f, a);
                    g || ((g = w(c)), (f[a] = g), d.D(e, f));
                    return g.apply(null, arguments);
                };
            }
            function qd(a, c) {
                void 0 === c && (c = {});
                if (!a || 1 > a.length) return c;
                zb(
                    function (b, d, e) {
                        if (e === a.length - 1) return b;
                        e === a.length - 2
                            ? (b[d] = a[e + 1])
                            : Jb(b, d) || (b[d] = {});
                        return b[d];
                    },
                    c,
                    a
                );
                return c;
            }
            function Sd(a) {
                a = a.Ya = a.Ya || {};
                var c = (a._metrika = a._metrika || {});
                return {
                    Ga: function (b, d) {
                        Fg.call(c, b) || (c[b] = d);
                        return this;
                    },
                    D: function (b, d) {
                        c[b] = d;
                        return this;
                    },
                    C: function (b, d) {
                        var e = c[b];
                        return Fg.call(c, b) || W(d) ? e : d;
                    },
                };
            }
            function Jb(a, c) {
                return ca(a) ? !1 : Fg.call(a, c);
            }
            function w(a, c) {
                var b = [],
                    d = [];
                var e = c ? c : R;
                return function () {
                    var f = Oa(arguments),
                        g = e.apply(void 0, f),
                        h = qf(g, d);
                    if (-1 !== h) return b[h];
                    f = a.apply(void 0, f);
                    b.push(f);
                    d.push(g);
                    return f;
                };
            }
            function Pb(a) {
                if (Gg) return Gg;
                var c = !1;
                try {
                    c = [].indexOf && 0 === [void 0].indexOf(void 0);
                } catch (d) {}
                var b =
                    a.Array &&
                    a.Array.prototype &&
                    oa(a.Array.prototype.indexOf, "indexOf");
                a = void 0;
                return (Gg = a =
                    c && b
                        ? function (d, e) {
                              return b.call(e, d);
                          }
                        : es);
            }
            function es(a, c) {
                for (var b = 0; b < c.length; b += 1) if (c[b] === a) return b;
                return -1;
            }
            function ma(a, c) {
                return c ? a(c) : a();
            }
            function v() {
                var a = Oa(arguments),
                    c = a.shift();
                return function () {
                    var b = c.apply(void 0, arguments);
                    return N(xk, b, a);
                };
            }
            function $f(a, c) {
                return C([a, c], N);
            }
            function Eg(a, c, b) {
                for (var d = 0, e = b.length; d < e; )
                    (c = a(c, b[d], d)), (d += 1);
                return c;
            }
            function eb(a) {
                return Ga("test", a);
            }
            function Ga(a, c) {
                return I(c[a], c);
            }
            function u(a, c) {
                return I(c, null, a);
            }
            function C(a, c) {
                return I.apply(void 0, uc([c, null], a));
            }
            function fs(a) {
                return function () {
                    var c = Oa(arguments);
                    return a.apply(c[0], [c[1]].concat(c.slice(2)));
                };
            }
            function gs() {
                var a = Oa(arguments),
                    c = a[0],
                    b = a[1],
                    d = a.slice(2);
                return function () {
                    var e = uc(d, Oa(arguments));
                    if (Function.prototype.call)
                        return Function.prototype.call.apply(c, uc([b], e));
                    if (b) {
                        for (var f = "_b"; b[f]; ) f += "_" + f.length;
                        b[f] = c;
                        e = b[f] && yk(f, e, b);
                        delete b[f];
                        return e;
                    }
                    return yk(c, e);
                };
            }
            function yk(a, c, b) {
                void 0 === c && (c = []);
                b = b || {};
                var d = c.length,
                    e = a;
                P(e) && ((e = "d"), (b[e] = a));
                var f;
                d
                    ? 1 === d
                        ? (f = b[e](c[0]))
                        : 2 === d
                        ? (f = b[e](c[0], c[1]))
                        : 3 === d
                        ? (f = b[e](c[0], c[1], c[2]))
                        : 4 === d && (f = b[e](c[0], c[1], c[2], c[3]))
                    : (f = b[e]());
                return f;
            }
            function Oa(a) {
                if (Rd)
                    try {
                        return Rd(a);
                    } catch (c) {}
                return uk(a);
            }
            function uk(a) {
                for (var c = a.length, b = [], d = 0; d < c; d += 1)
                    b.push(a[d]);
                return b;
            }
            function ka(a) {
                return (
                    !Xa(a) &&
                    !W(a) &&
                    "[object Object]" === Object.prototype.toString.call(a)
                );
            }
            function ca(a) {
                return W(a) || Xa(a);
            }
            function P(a) {
                return "function" === typeof a;
            }
            function vb(a) {
                return function (c) {
                    return function (b) {
                        return a(b, c);
                    };
                };
            }
            function ra(a) {
                return function (c) {
                    return function (b) {
                        return a(c, b);
                    };
                };
            }
            function xk(a, c) {
                return c(a);
            }
            function Gq(a) {
                return a
                    .replace(/\^/g, "\\^")
                    .replace(/\$/g, "\\$")
                    .replace(hg, "\\.")
                    .replace(/\[/g, "\\[")
                    .replace(/\]/g, "\\]")
                    .replace(/\|/g, "\\|")
                    .replace(/\(/g, "\\(")
                    .replace(/\)/g, "\\)")
                    .replace(/\?/g, "\\?")
                    .replace(/\*/g, "\\*")
                    .replace(/\+/g, "\\+")
                    .replace(/\{/g, "\\{")
                    .replace(/\}/g, "\\}");
            }
            function hs(a) {
                return "" + a;
            }
            function ib(a, c) {
                return !(!a || -1 === hb(a, c));
            }
            function kc(a, c) {
                return hb(a, c);
            }
            function is(a, c) {
                for (
                    var b = 0, d = a.length - c.length, e = 0;
                    e < a.length;
                    e += 1
                ) {
                    b = a[e] === c[b] ? b + 1 : 0;
                    if (b === c.length) return e - c.length + 1;
                    if (!b && e > d) break;
                }
                return -1;
            }
            function ia(a) {
                return "string" === typeof a;
            }
            function oa(a, c) {
                return Fa(c, a) && a;
            }
            function Fa(a, c) {
                var b = We(a, c);
                c && !b && Hg.push([a, c]);
                return b;
            }
            function We(a, c) {
                if (!c || "function" !== typeof c) return !1;
                try {
                    var b = "" + c;
                } catch (h) {
                    return !1;
                }
                var d = b.length;
                if (d > 35 + a.length) return !1;
                for (var e = d - 13, f = 0, g = 8; g < d; g += 1) {
                    f =
                        "[native code]"[f] === b[g] || (7 === f && "-" === b[g])
                            ? f + 1
                            : 0;
                    if (12 === f) return !0;
                    if (!f && g > e) break;
                }
                return !1;
            }
            function D() {}
            function Ig(a, c) {
                Ig =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                        function (b, d) {
                            b.__proto__ = d;
                        }) ||
                    function (b, d) {
                        for (var e in d) d.hasOwnProperty(e) && (b[e] = d[e]);
                    };
                return Ig(a, c);
            }
            function Hc(a) {
                return !a;
            }
            function fb(a, c) {
                return c;
            }
            function R(a) {
                return a;
            }
            function Na(a, c) {
                function b() {
                    this.constructor = a;
                }
                Ig(a, c);
                a.prototype =
                    null === c
                        ? Object.create(c)
                        : ((b.prototype = c.prototype), new b());
            }
            function uc() {
                for (var a = 0, c = 0, b = arguments.length; c < b; c++)
                    a += arguments[c].length;
                a = Array(a);
                var d = 0;
                for (c = 0; c < b; c++)
                    for (
                        var e = arguments[c], f = 0, g = e.length;
                        f < g;
                        f++, d++
                    )
                        a[d] = e[f];
                return a;
            }
            function n(a, c) {
                return a
                    ? N(
                          function (b, d) {
                              if (ca(b)) return b;
                              try {
                                  return b[d];
                              } catch (e) {}
                              return null;
                          },
                          a,
                          c.split(".")
                      )
                    : null;
            }
            function js(a) {
                return "[object Array]" === Object.prototype.toString.call(a);
            }
            function ks() {}
            function ls(a, c) {
                return function () {
                    a.apply(c, arguments);
                };
            }
            function La(a) {
                if (!(this instanceof La))
                    throw new TypeError("Promises must be constructed via new");
                if ("function" !== typeof a)
                    throw new TypeError("not a function");
                this.Ka = 0;
                this.De = !1;
                this.Pa = void 0;
                this.zb = [];
                zk(a, this);
            }
            function Ak(a, c) {
                for (; 3 === a.Ka; ) a = a.Pa;
                0 === a.Ka
                    ? a.zb.push(c)
                    : ((a.De = !0),
                      La.Ee(function () {
                          var b = 1 === a.Ka ? c.ei : c.ki;
                          if (null === b)
                              (1 === a.Ka ? Jg : Td)(c.promise, a.Pa);
                          else {
                              try {
                                  var d = b(a.Pa);
                              } catch (e) {
                                  Td(c.promise, e);
                                  return;
                              }
                              Jg(c.promise, d);
                          }
                      }));
            }
            function Jg(a, c) {
                try {
                    if (c === a)
                        throw new TypeError(
                            "A promise cannot be resolved with itself."
                        );
                    if (
                        c &&
                        ("object" === typeof c || "function" === typeof c)
                    ) {
                        var b = c.then;
                        if (c instanceof La) {
                            a.Ka = 3;
                            a.Pa = c;
                            Kg(a);
                            return;
                        }
                        if ("function" === typeof b) {
                            zk(ls(b, c), a);
                            return;
                        }
                    }
                    a.Ka = 1;
                    a.Pa = c;
                    Kg(a);
                } catch (d) {
                    Td(a, d);
                }
            }
            function Td(a, c) {
                a.Ka = 2;
                a.Pa = c;
                Kg(a);
            }
            function Kg(a) {
                2 === a.Ka &&
                    0 === a.zb.length &&
                    La.Ee(function () {
                        a.De || La.qg(a.Pa);
                    });
                for (var c = 0, b = a.zb.length; c < b; c++) Ak(a, a.zb[c]);
                a.zb = null;
            }
            function ms(a, c, b) {
                this.ei = "function" === typeof a ? a : null;
                this.ki = "function" === typeof c ? c : null;
                this.promise = b;
            }
            function zk(a, c) {
                var b = !1;
                try {
                    a(
                        function (d) {
                            b || ((b = !0), Jg(c, d));
                        },
                        function (d) {
                            b || ((b = !0), Td(c, d));
                        }
                    );
                } catch (d) {
                    b || ((b = !0), Td(c, d));
                }
            }
            function lk(a, c, b, d, e) {
                void 0 === e && (e = !1);
                return Ag(a, c, "", -100, b, d, e);
            }
            function he(a, c, b) {
                void 0 === c && (c = "_ym_");
                void 0 === b && (b = "");
                var d = ns(a),
                    e = 1 === (d || "").split(".").length ? d : "." + d,
                    f = b ? "_" + b : "";
                return {
                    fc: function (g, h, k) {
                        lk(a, "" + c + g + f, h || e, k);
                        return this;
                    },
                    C: function (g) {
                        return ue(a, "" + c + g + f);
                    },
                    D: function (g, h, k, l, m) {
                        Ag(a, "" + c + g + f, h, k, l || e, m);
                        return this;
                    },
                };
            }
            function Lb(a, c) {
                if (!c) return null;
                try {
                    return a.JSON.parse(c);
                } catch (b) {
                    return null;
                }
            }
            function gc(a) {
                a = "" + a;
                for (var c = 2166136261, b = a.length, d = 0; d < b; d += 1)
                    (c ^= a.charCodeAt(d)),
                        (c +=
                            (c << 1) +
                            (c << 4) +
                            (c << 7) +
                            (c << 8) +
                            (c << 24));
                return c >>> 0;
            }
            function Sc(a, c) {
                var b = os(a);
                return b
                    ? ((b.href = c),
                      {
                          protocol: b.protocol,
                          host: b.host,
                          port: b.port,
                          hostname: b.hostname,
                          hash: b.hash,
                          search: b.search,
                          query: b.search.replace(/^\?/, ""),
                          pathname: b.pathname || "/",
                          path: (b.pathname || "/") + b.search,
                          href: b.href,
                      })
                    : {};
            }
            function Bk(a) {
                return (a = T(a).hash.split("#")[1]) ? a.split("?")[0] : "";
            }
            function ps(a, c) {
                var b = Bk(a);
                Ck = Hr(
                    a,
                    function () {
                        var d = Bk(a);
                        d !== b && (c(), (b = d));
                    },
                    200,
                    "t.h"
                );
                return I(Gr, null, a, Ck);
            }
            function qs(a, c, b, d) {
                var e,
                    f,
                    g = c.ca,
                    h = c.Ae,
                    k = c.oc,
                    l = J(a),
                    m = Ka(((e = {}), (e.wh = 1), (e.pv = 1), e));
                e = n(d, "isTrusted");
                d && !ca(e) && m.D("ite", sb(e));
                de(g) && a.Ya && a.Ya.Direct && m.D("ad", "1");
                h && m.D("ut", "1");
                g = l.C("lastReferrer");
                d = T(a).href;
                k = {
                    J:
                        ((f = {}),
                        (f["page-url"] = k || d),
                        (f["page-ref"] = g),
                        f),
                    K: m,
                };
                b(k, c)["catch"](E(a, "g.s"));
                l.D("lastReferrer", d);
            }
            function rs(a, c, b) {
                function d() {
                    r || ((q = !0), (t = !1), (r = !0), f());
                }
                function e() {
                    m = !0;
                    k(!1);
                    c();
                }
                function f() {
                    la(a, l);
                    if (m) k(!1);
                    else {
                        var M = Math.max(0, b - (t ? y : y + p(Z) - F));
                        M ? (l = S(a, e, M, "u.t.d.c")) : e();
                    }
                }
                function g() {
                    t = q = r = !0;
                    y += p(Z) - F;
                    F = p(Z);
                    f();
                }
                function h() {
                    q || r || (y = 0);
                    F = p(Z);
                    q = r = !0;
                    t = !1;
                    f();
                }
                function k(M) {
                    M = M ? Q.F : Q.vb;
                    M(a, ["blur"], g);
                    M(a, ["focus"], h);
                    M(
                        a.document,
                        ["click", "mousemove", "keydown", "scroll"],
                        d
                    );
                }
                var l = 0,
                    m = !1;
                if (qg(a)) return (l = S(a, c, b, "u.t.d")), C([a, l], la);
                var p = ja(a),
                    q = !1,
                    r = !1,
                    t = !0,
                    y = 0,
                    F = p(Z),
                    Q = fa(a);
                k(!0);
                f();
                return function () {
                    la(a, l);
                    k(!1);
                };
            }
            function wb(a, c) {
                a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
                c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535];
                var b = [0, 0, 0, 0];
                b[3] += a[3] * c[3];
                b[2] += b[3] >>> 16;
                b[3] &= 65535;
                b[2] += a[2] * c[3];
                b[1] += b[2] >>> 16;
                b[2] &= 65535;
                b[2] += a[3] * c[2];
                b[1] += b[2] >>> 16;
                b[2] &= 65535;
                b[1] += a[1] * c[3];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[1] += a[2] * c[2];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[1] += a[3] * c[1];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[0] += a[0] * c[3] + a[1] * c[2] + a[2] * c[1] + a[3] * c[0];
                b[0] &= 65535;
                return [(b[0] << 16) | b[1], (b[2] << 16) | b[3]];
            }
            function sc(a, c) {
                a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
                c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535];
                var b = [0, 0, 0, 0];
                b[3] += a[3] + c[3];
                b[2] += b[3] >>> 16;
                b[3] &= 65535;
                b[2] += a[2] + c[2];
                b[1] += b[2] >>> 16;
                b[2] &= 65535;
                b[1] += a[1] + c[1];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[0] += a[0] + c[0];
                b[0] &= 65535;
                return [(b[0] << 16) | b[1], (b[2] << 16) | b[3]];
            }
            function Zc(a, c) {
                c %= 64;
                if (32 === c) return [a[1], a[0]];
                if (32 > c)
                    return [
                        (a[0] << c) | (a[1] >>> (32 - c)),
                        (a[1] << c) | (a[0] >>> (32 - c)),
                    ];
                c -= 32;
                return [
                    (a[1] << c) | (a[0] >>> (32 - c)),
                    (a[0] << c) | (a[1] >>> (32 - c)),
                ];
            }
            function nb(a, c) {
                c %= 64;
                return 0 === c
                    ? a
                    : 32 > c
                    ? [(a[0] << c) | (a[1] >>> (32 - c)), a[1] << c]
                    : [a[1] << (c - 32), 0];
            }
            function za(a, c) {
                return [a[0] ^ c[0], a[1] ^ c[1]];
            }
            function Dk(a) {
                a = za(a, [0, a[0] >>> 1]);
                a = wb(a, [4283543511, 3981806797]);
                a = za(a, [0, a[0] >>> 1]);
                a = wb(a, [3301882366, 444984403]);
                return (a = za(a, [0, a[0] >>> 1]));
            }
            function ss(a, c) {
                void 0 === c && (c = 210);
                var b = a || "",
                    d = c || 0,
                    e = b.length - (b.length % 16);
                d = { T: [0, d], V: [0, d] };
                for (var f = 0; f < e; f += 16) {
                    var g = d,
                        h = [
                            (a.charCodeAt(f + 4) & 255) |
                                ((a.charCodeAt(f + 5) & 255) << 8) |
                                ((a.charCodeAt(f + 6) & 255) << 16) |
                                ((a.charCodeAt(f + 7) & 255) << 24),
                            (a.charCodeAt(f) & 255) |
                                ((a.charCodeAt(f + 1) & 255) << 8) |
                                ((a.charCodeAt(f + 2) & 255) << 16) |
                                ((a.charCodeAt(f + 3) & 255) << 24),
                        ],
                        k = [
                            (a.charCodeAt(f + 12) & 255) |
                                ((a.charCodeAt(f + 13) & 255) << 8) |
                                ((a.charCodeAt(f + 14) & 255) << 16) |
                                ((a.charCodeAt(f + 15) & 255) << 24),
                            (a.charCodeAt(f + 8) & 255) |
                                ((a.charCodeAt(f + 9) & 255) << 8) |
                                ((a.charCodeAt(f + 10) & 255) << 16) |
                                ((a.charCodeAt(f + 11) & 255) << 24),
                        ];
                    h = wb(h, Xe);
                    h = Zc(h, 31);
                    h = wb(h, Ye);
                    g.T = za(g.T, h);
                    g.T = Zc(g.T, 27);
                    g.T = sc(g.T, g.V);
                    g.T = sc(wb(g.T, [0, 5]), [0, 1390208809]);
                    k = wb(k, Ye);
                    k = Zc(k, 33);
                    k = wb(k, Xe);
                    g.V = za(g.V, k);
                    g.V = Zc(g.V, 31);
                    g.V = sc(g.V, g.T);
                    g.V = sc(wb(g.V, [0, 5]), [0, 944331445]);
                }
                e = b.length % 16;
                f = b.length - e;
                g = [0, 0];
                h = [0, 0];
                switch (e) {
                    case 15:
                        h = za(h, nb([0, b.charCodeAt(f + 14)], 48));
                    case 14:
                        h = za(h, nb([0, b.charCodeAt(f + 13)], 40));
                    case 13:
                        h = za(h, nb([0, b.charCodeAt(f + 12)], 32));
                    case 12:
                        h = za(h, nb([0, b.charCodeAt(f + 11)], 24));
                    case 11:
                        h = za(h, nb([0, b.charCodeAt(f + 10)], 16));
                    case 10:
                        h = za(h, nb([0, b.charCodeAt(f + 9)], 8));
                    case 9:
                        (h = za(h, [0, b.charCodeAt(f + 8)])),
                            (h = wb(h, Ye)),
                            (h = Zc(h, 33)),
                            (h = wb(h, Xe)),
                            (d.V = za(d.V, h));
                    case 8:
                        g = za(g, nb([0, b.charCodeAt(f + 7)], 56));
                    case 7:
                        g = za(g, nb([0, b.charCodeAt(f + 6)], 48));
                    case 6:
                        g = za(g, nb([0, b.charCodeAt(f + 5)], 40));
                    case 5:
                        g = za(g, nb([0, b.charCodeAt(f + 4)], 32));
                    case 4:
                        g = za(g, nb([0, b.charCodeAt(f + 3)], 24));
                    case 3:
                        g = za(g, nb([0, b.charCodeAt(f + 2)], 16));
                    case 2:
                        g = za(g, nb([0, b.charCodeAt(f + 1)], 8));
                    case 1:
                        (g = za(g, [0, b.charCodeAt(f)])),
                            (g = wb(g, Xe)),
                            (g = Zc(g, 31)),
                            (g = wb(g, Ye)),
                            (d.T = za(d.T, g));
                }
                d.T = za(d.T, [0, b.length]);
                d.V = za(d.V, [0, b.length]);
                d.T = sc(d.T, d.V);
                d.V = sc(d.V, d.T);
                d.T = Dk(d.T);
                d.V = Dk(d.V);
                d.T = sc(d.T, d.V);
                d.V = sc(d.V, d.T);
                return (
                    ("00000000" + (d.T[0] >>> 0).toString(16)).slice(-8) +
                    ("00000000" + (d.T[1] >>> 0).toString(16)).slice(-8) +
                    ("00000000" + (d.V[0] >>> 0).toString(16)).slice(-8) +
                    ("00000000" + (d.V[1] >>> 0).toString(16)).slice(-8)
                );
            }
            function Ud(a, c, b) {
                var d = c.getAttribute("itemtype");
                b = jb('[itemprop~="' + b + '"]', c);
                return d
                    ? ha(function (e) {
                          return (
                              e.parentNode &&
                              oc("[itemtype]", a, e.parentNode) === c
                          );
                      }, b)
                    : b;
            }
            function gb(a, c, b) {
                return (a = Ud(a, c, b)) && a.length ? a[0] : null;
            }
            function bb(a) {
                if (!a) return "";
                a = O(a) ? a : [a];
                return a.length ? a[0].getAttribute("content") || Kb(a[0]) : "";
            }
            function Ek(a) {
                return a
                    ? a.attributes && a.getAttribute("datetime")
                        ? a.getAttribute("datetime")
                        : bb(a)
                    : "";
            }
            function ud(a, c, b) {
                a =
                    c &&
                    (ib(c.className, "ym-disable-keys") ||
                        ib(c.className, "-metrika-nokeys"));
                return b && c
                    ? a ||
                          !!sr(["ym-disable-keys", "-metrika-nokeys"], c).length
                    : a;
            }
            function Lf(a, c) {
                return Qe(c)
                    ? "password" === c.type ||
                          (c.name && H(c.name.toLowerCase(), Fk)) ||
                          (c.id && H(c.id.toLowerCase(), Fk))
                    : !1;
            }
            function Gk(a, c) {
                var b = Math.max(0, Math.min(c, 65535));
                wa(a, [b >> 8, b & 255]);
            }
            function Wb(a, c) {
                wa(a, [c & 255]);
            }
            function kb(a, c, b) {
                return -1 !== Pb(a)(b, ts) ? (Wb(c, b), !1) : !0;
            }
            function V(a, c) {
                for (var b = Math.max(0, c | 0); 127 < b; )
                    wa(a, [(b & 127) | 128]), (b >>= 7);
                wa(a, [b]);
            }
            function Lg(a, c) {
                V(a, c.length);
                for (var b = 0; b < c.length; b += 1) V(a, c.charCodeAt(b));
            }
            function Mg(a, c) {
                var b = c;
                255 < b.length && (b = b.substr(0, 255));
                a.push(b.length);
                for (var d = 0; d < b.length; d += 1) Gk(a, b.charCodeAt(d));
            }
            function us(a, c) {
                var b = [];
                if (kb(a, b, 27)) return [];
                V(b, c);
                return b;
            }
            function vs(a, c) {
                var b = Ma(c);
                if (!b) return (c[Za] = -1), null;
                var d = +c[Za];
                if (!isFinite(d) || 0 >= d) return null;
                if (c.attributes)
                    for (var e = c; e; ) {
                        if (e.attributes.ij) return null;
                        e = e.parentElement;
                    }
                e = 64;
                var f = Oe(a, c),
                    g = f && f[Za] ? f[Za] : 0;
                0 > g && (g = 0);
                b = (b || "").toUpperCase();
                var h = ws()[b];
                h || (e |= 2);
                var k = Nj(a, c);
                k || (e |= 4);
                var l = Pf(a, c);
                (f = f ? Pf(a, f) : null) &&
                    l[0] === f[0] &&
                    l[1] === f[1] &&
                    l[2] === f[2] &&
                    l[3] === f[3] &&
                    (e |= 8);
                Ac[d].rf = l[0] + "x" + l[1];
                Ac[d].size = l[2] + "x" + l[3];
                c.id && "string" === typeof c.id && (e |= 32);
                f = [];
                if (kb(a, f, 1)) return null;
                V(f, d);
                Wb(f, e);
                V(f, g);
                h ? Wb(f, h) : Mg(f, b);
                k && V(f, k);
                e & 8 || (V(f, l[0]), V(f, l[1]), V(f, l[2]), V(f, l[3]));
                e & 32 && Mg(f, c.id);
                Wb(f, 0);
                return f;
            }
            function xs(a, c) {
                var b = c[Za];
                if (!b || 0 > b || !Nf(c) || !c.form || si(a, c.form))
                    return [];
                var d = Pj(a, c.form);
                if (0 > d) return [];
                if (Qe(c)) {
                    var e = {
                        text: 0,
                        color: 0,
                        ec: 0,
                        mj: 0,
                        "datetime-local": 0,
                        email: 0,
                        pf: 0,
                        Bj: 0,
                        search: 0,
                        Gj: 0,
                        time: 0,
                        url: 0,
                        month: 0,
                        Ij: 0,
                        password: 2,
                        Aj: 3,
                        kj: 4,
                        file: 6,
                        image: 7,
                    };
                    e = e[c.type];
                } else {
                    e = { fj: 1, gj: 5 };
                    var f = Ma(c);
                    e = W(f) ? "" : e[f];
                }
                if ("number" !== typeof e) return [];
                f = -1;
                for (
                    var g = c.form.elements, h = g.length, k = 0, l = 0;
                    k < h;
                    k += 1
                )
                    if (g[k].name === c.name) {
                        if (g[k] === c) {
                            f = l;
                            break;
                        }
                        l += 1;
                    }
                if (0 > f) return [];
                g = [];
                if (kb(a, g, 7)) return [];
                V(g, b);
                V(g, d);
                V(g, e);
                Lg(g, c.name || "");
                V(g, f);
                return g;
            }
            function zc(a, c, b) {
                void 0 === b && (b = []);
                for (var d = []; c && !ro(a, c, b); c = Oe(a, c)) d.push(c);
                x(function (e) {
                    Ac.counter += 1;
                    var f = Ac.counter;
                    e[Za] = f;
                    Ac[f] = {};
                    f = vs(a, e);
                    e = xs(a, e);
                    f && e && (wa(b, f), wa(b, e));
                }, ys(d));
                return b;
            }
            function zs(a) {
                var c = a.na;
                if (!td || (c && !c.fromElement)) return pi(a);
            }
            function As(a) {
                var c = a.na;
                if (c && !c.toElement) return Of(a);
            }
            function Hk(a) {
                var c = Jc(a.na);
                if (c && te(c)) {
                    var b = oi(a, c),
                        d = b.concat;
                    var e = Ab(a.l),
                        f = [];
                    kb(a.l, f, 17) ? (a = []) : (V(f, e), V(f, c[Za]), (a = f));
                    return d.call(b, a);
                }
            }
            function Ik(a) {
                var c = a.l,
                    b = a.na.target;
                if (b && te(b)) {
                    c = zc(c, b);
                    var d = c.concat;
                    var e = Ab(a.l),
                        f = [];
                    kb(a.l, f, 18) ? (a = []) : (V(f, e), V(f, b[Za]), (a = f));
                    return d.call(c, a);
                }
            }
            function Jk(a) {
                var c = a.l,
                    b = Jc(a.na);
                if (!b || Lf(c, b) || ud(c, b)) return [];
                if (Nf(b)) {
                    var d = J(c).C("isEU"),
                        e = Tc(c, b, d),
                        f = e.Ua;
                    d = e.ob;
                    e = e.fb;
                    if (Re(b)) var g = b.checked;
                    else (g = b.value), (g = f ? G("", Kk(g.split(""))) : g);
                    c = zc(c, b);
                    f = c.concat;
                    var h = Ab(a.l);
                    d = d && !e;
                    e = [];
                    kb(a.l, e, 39)
                        ? (a = [])
                        : (V(e, h),
                          V(e, b[Za]),
                          Mg(e, String(g)),
                          Wb(e, d ? 1 : 0),
                          (a = e));
                    return f.call(c, a);
                }
            }
            function Ze(a) {
                var c = a.l,
                    b = a.na,
                    d = Jc(b);
                if (!d || "SCROLLBAR" === d.nodeName) return [];
                var e = [],
                    f = u(e, wa);
                d && te(d) ? f(oi(a, d)) : f(zc(c, d));
                var g = mj(c, b);
                f = e.concat;
                a = Ab(a.l);
                var h = b.type,
                    k = [g.x, g.y];
                g = b.which;
                b = b.button;
                var l;
                var m = Pe(c, d);
                var p = m[0];
                for (m = m[1]; d && (!p || !m); )
                    if ((d = Oe(c, d))) (m = Pe(c, d)), (p = m[0]), (m = m[1]);
                d
                    ? ((p = d[Za]),
                      !p || 0 > p
                          ? (c = [])
                          : (m = ((l = {}),
                            (l.mousemove = 2),
                            (l.click = 32),
                            (l.dblclick = 33),
                            (l.mousedown = 4),
                            (l.mouseup = 30),
                            (l.touch = 12),
                            l)[h])
                          ? ((l = []),
                            (d = pg(c, d)),
                            kb(c, l, m)
                                ? (c = [])
                                : (V(l, a),
                                  V(l, p),
                                  V(l, Math.max(0, k[0] - d.left)),
                                  V(l, Math.max(0, k[1] - d.top)),
                                  /^mouse(up|down)|click$/.test(h) &&
                                      ((c = g || b),
                                      Wb(
                                          l,
                                          2 > c ? 1 : c === (g ? 2 : 4) ? 4 : 2
                                      )),
                                  (c = l)))
                          : (c = []))
                    : (c = []);
                return f.call(e, c);
            }
            function Bs(a) {
                var c = null,
                    b = a.l,
                    d = b.document;
                if (b.getSelection) {
                    d = void 0;
                    try {
                        d = b.getSelection();
                    } catch (g) {
                        return [];
                    }
                    if (Xa(d)) return [];
                    var e = "" + d;
                    c = d.anchorNode;
                } else
                    d.selection &&
                        d.selection.createRange &&
                        ((d = d.selection.createRange()),
                        (e = d.text),
                        (c = d.parentElement()));
                if ("string" !== typeof e) return [];
                try {
                    for (; c && 1 !== c.nodeType; ) c = c.parentNode;
                } catch (g) {
                    return [];
                }
                if (!c) return [];
                d = Tc(b, c).Ua || ud(b, c, !0);
                c = c.getElementsByTagName("*");
                for (var f = 0; f < c.length && !d; )
                    (d = c[f]), (d = Tc(b, d).Ua || ud(b, d, !0)), (f += 1);
                if (e !== Ng)
                    return (
                        (Ng = e),
                        (d = d ? G("", Kk(e.split(""))) : e),
                        (e = Ab(a.l)),
                        0 === d.length
                            ? (d = b = "")
                            : 100 >= d.length
                            ? ((b = d), (d = ""))
                            : 200 >= d.length
                            ? ((b = d.substr(0, 100)), (d = d.substr(100)))
                            : ((b = d.substr(0, 97)),
                              (d = d.substr(d.length - 97))),
                        (c = []),
                        kb(a.l, c, 29)
                            ? (a = [])
                            : (V(c, e), Lg(c, b), Lg(c, d), (a = c)),
                        a
                    );
            }
            function Cs(a) {
                return Ze(a).concat(Bs(a) || []);
            }
            function Lk(a) {
                return (
                    (a.shiftKey ? 2 : 0) |
                    (a.ctrlKey ? 4 : 0) |
                    (a.altKey ? 1 : 0) |
                    (a.metaKey ? 8 : 0) |
                    (a.ctrlKey || a.altKey ? 16 : 0)
                );
            }
            function Mk(a) {
                var c = [];
                Og ||
                    ((Og = !0),
                    Ng && wa(c, us(a.l, Ab(a.l))),
                    Tb(
                        a.l,
                        function () {
                            Og = !1;
                        },
                        "fv.c"
                    ));
                return c;
            }
            function Nk(a, c, b, d) {
                c = Jc(c);
                if (!c || Qf(a, c)) return [];
                var e = Tc(a, c),
                    f = e.ob,
                    g = e.fb;
                e = e.Ua;
                var h = J(a);
                if (!g && ((f && h.C("isEU")) || ud(a, c))) a = [];
                else {
                    f = zc(a, c);
                    g = f.concat;
                    var k = Ab(a);
                    h = [];
                    if (kb(a, h, 38)) a = [];
                    else {
                        V(h, k);
                        Gk(h, b);
                        Wb(h, d);
                        a = c[Za];
                        if (!a || 0 > a) a = 0;
                        V(h, a);
                        Wb(h, e ? 1 : 0);
                        a = h;
                    }
                    a = g.call(f, a);
                }
                return a;
            }
            function Ds(a) {
                var c = a.l,
                    b = a.na,
                    d = b.keyCode,
                    e = Lk(b),
                    f = [],
                    g = u(f, wa);
                if (
                    {
                        3: 1,
                        8: 1,
                        9: 1,
                        13: 1,
                        16: 1,
                        17: 1,
                        18: 1,
                        19: 1,
                        20: 1,
                        27: 1,
                        33: 1,
                        34: 1,
                        35: 1,
                        36: 1,
                        37: 1,
                        38: 1,
                        39: 1,
                        40: 1,
                        45: 1,
                        46: 1,
                        91: 1,
                        92: 1,
                        93: 1,
                        106: 1,
                        110: 1,
                        111: 1,
                        144: 1,
                        145: 1,
                    }[d] ||
                    (112 <= d && 123 >= d) ||
                    (96 <= d && 105 >= d) ||
                    e & 16
                )
                    19 === d && 4 === (e & -17) && (d = 144),
                        g(Nk(c, b, d, e | 16)),
                        (Pg = !1),
                        Tb(
                            c,
                            function () {
                                Pg = !0;
                            },
                            "fv.kd"
                        ),
                        !(67 === d && e & 4) || e & 1 || e & 2 || g(Mk(a));
                return f;
            }
            function Es(a) {
                var c = a.l;
                a = a.na;
                var b = [];
                Pg &&
                    !Qg &&
                    0 !== a.which &&
                    (wa(b, Nk(c, a, a.charCode || a.keyCode, Lk(a))),
                    (Qg = !0),
                    Tb(
                        c,
                        function () {
                            Qg = !1;
                        },
                        "fv.kp"
                    ));
                return b;
            }
            function Ok(a) {
                var c = a.l,
                    b = Jc(a.na);
                if (!b || si(c, b)) return [];
                var d = [];
                if ("FORM" === b.nodeName) {
                    for (var e = b.elements, f = 0; f < e.length; f += 1)
                        Oj(e[f]) || wa(d, zc(c, e[f]));
                    a = Ab(a.l);
                    e = Pj(c, b);
                    if (0 > e) c = [];
                    else {
                        f = b.elements;
                        var g = f.length;
                        b = [];
                        for (var h = 0; h < g; h += 1)
                            if (!Oj(f[h])) {
                                var k = f[h][Za];
                                k && 0 < k && b.push(k);
                            }
                        f = [];
                        if (kb(c, f, 11)) c = [];
                        else {
                            V(f, a);
                            V(f, e);
                            V(f, b.length);
                            for (c = 0; c < b.length; c += 1) V(f, b[c]);
                            c = f;
                        }
                    }
                    wa(d, c);
                }
                return d;
            }
            function Fs(a) {
                var c = a.flush;
                a = Jc(a.na);
                "BODY" === Ma(a) && c();
            }
            function Kn(a, c) {
                var b,
                    d = Jc(c),
                    e = xa.bc,
                    f = Sd(a);
                if (d && ic("ym-advanced-informer", d)) {
                    var g = f.C("ifc", 0) + 1;
                    f.D("ifc", g);
                    g = d.getAttribute("data-lang");
                    var h = Ja(d.getAttribute("data-cid") || "");
                    if (h || 0 === h)
                        (e = n(a, "Ya." + e + ".informer"))
                            ? e(
                                  ((b = {}),
                                  (b.i = d),
                                  (b.id = h),
                                  (b.lang = g),
                                  b)
                              )
                            : f.D("ib", !0),
                            (b = c || window.event),
                            b.preventDefault
                                ? b.preventDefault()
                                : (b.returnValue = !1);
                }
            }
            function gm(a, c, b, d, e) {
                if (!b.length) return e;
                b = z(function (f) {
                    return C([a, c, d], f);
                }, b);
                return v.apply(void 0, b)(e);
            }
            var $c = {
                    construct: "Metrika2",
                    callbackPostfix: "2",
                    version: "qwnfzu764tet7d8h6n82bv8wv",
                    host: "mc.yandex.ru",
                },
                Hg = [],
                hg = /\./g,
                Pk = oa(String.prototype.indexOf, "indexOf"),
                hb = Pk
                    ? function (a, c) {
                          return Pk.call(a, c);
                      }
                    : is,
                Ba = ra(function (a, c) {
                    return a === c;
                }),
                ve = ra(function (a, c) {
                    a(c);
                    return c;
                }),
                Ha = ra(xk),
                Xa = Ba(null),
                W = Ba(void 0),
                Rd = oa(Array.from, "from"),
                Qk = oa(Function.prototype.bind, "bind"),
                I = Qk ? fs(Qk) : gs,
                Rk = oa(Array.prototype.reduce, "reduce"),
                zb = Rk
                    ? function (a, c, b) {
                          return Rk.call(b, a, c);
                      }
                    : Eg,
                N = zb,
                fr = v,
                De = v(R, ma),
                Gg,
                qf = Pb(window),
                dn = vb(qf),
                Fg = Object.prototype.hasOwnProperty,
                J = w(Sd),
                U = vb(n),
                Sa = U("length"),
                Mc = ra(C),
                Yi = ra(Ga),
                Sk = oa(Array.prototype.every, "every"),
                Pi = Sk
                    ? function (a, c) {
                          return Sk.call(c, a);
                      }
                    : ds,
                Ob = C([1, null], xd),
                sb = C([1, 0], xd),
                Eb = Boolean,
                Tk = oa(Array.prototype.filter, "filter"),
                ha = Tk
                    ? function (a, c) {
                          return Tk.call(c, a);
                      }
                    : wk,
                ua = u(Eb, ha),
                Gs = ra(ha),
                Uk = oa(Array.prototype.find, "find"),
                tb = Uk
                    ? function (a, c) {
                          return Uk.call(c, a);
                      }
                    : cs,
                Vk = oa(Array.prototype.includes, "includes"),
                H = Vk
                    ? function (a, c, b) {
                          return Vk.call(c, a, b);
                      }
                    : bs,
                vc = vb(H),
                Wk = oa(Array.prototype.join, "join"),
                G = Wk
                    ? function (a, c) {
                          return Wk.call(c, a);
                      }
                    : as,
                ze = ra(G),
                Xk = w(function (a) {
                    var c = n(a, "navigator") || {};
                    a = n(c, "userAgent") || "";
                    c = n(c, "vendor") || "";
                    return { gf: -1 < hb(c, "Apple"), cg: a };
                }),
                lb = w(U("navigator.userAgent")),
                Dg = /Firefox\/([0-9]+)/i,
                Qd = w(function (a) {
                    var c = n(a, "document.documentElement.style"),
                        b = n(a, "InstallTrigger");
                    a =
                        -1 !==
                        (n(a, "navigator.userAgent") || "")
                            .toLowerCase()
                            .search(Dg);
                    Dg.lastIndex = 0;
                    return !(!(c && "MozAppearance" in c) || ca(b)) || a;
                }),
                Yk = oa(Array.isArray, "isArray"),
                O = Yk
                    ? function (a) {
                          return Yk(a);
                      }
                    : js,
                Zk = oa(Array.prototype.map, "map"),
                $k =
                    Zk && $r(window, Array.prototype.map)
                        ? function (a, c) {
                              return c && 0 < c.length ? Zk.call(c, a) : [];
                          }
                        : vk,
                z = $k,
                x = $k,
                al = oa(Array.prototype.flatMap, "flatMap"),
                xc = al
                    ? function (a, c) {
                          return al.call(c, a);
                      }
                    : Zr,
                Xb = ra(z),
                Ir = vb(z),
                bl = oa(Array.prototype.some, "some"),
                $a = bl
                    ? function (a, c) {
                          return bl.call(c, a);
                      }
                    : Yr,
                Je = w(Pb),
                Id = U("0"),
                Hs = ra(we),
                cl = oa(Array.prototype.reverse, "reverse"),
                ys = cl
                    ? function (a) {
                          return cl.call(a);
                      }
                    : Xr,
                dl = vb(parseInt),
                Ja = dl(10),
                xe = dl(2),
                el = oa(Object.keys, "keys"),
                fl = oa(Object.entries, "entries"),
                Ia = fl ? Wr(fl) : sk,
                ea = el
                    ? function (a) {
                          return el(a);
                      }
                    : tk,
                gl = oa(Object.values, "values"),
                Is = v(sk, u(U("1"), vk)),
                Eh = gl
                    ? function (a) {
                          return gl(a);
                      }
                    : Is,
                A = Object.assign || Vr,
                ni = ra(function (a, c) {
                    return A({}, a, c);
                }),
                ne = w(v(U("String.fromCharCode"), u("fromCharCode", Fa), Hc)),
                $e = w(v(lb, eb(/ipad|iphone|ipod/i))),
                Vf = w(function (a) {
                    return n(a, "navigator.platform") || "";
                }),
                Bd = w(function (a) {
                    a = Xk(a);
                    var c = a.cg;
                    return a.gf && !c.match("CriOS");
                }),
                Js = eb(
                    /Android.*Version\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]|Android.*Version\/[0-9][0-9.]*\s(?:Mobile\s)?Safari\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]*|; wv\).*Chrome\/[0-9][0-9.]*\sMobile/
                ),
                Ks = eb(/; wv\)/),
                zd = w(function (a) {
                    a = lb(a);
                    return Ks(a) || Js(a);
                }),
                Ls = /Chrome\/(\d+)\./,
                Ms = w(function (a) {
                    return (a = (n(a, "navigator.userAgent") || "").match(
                        Ls
                    )) && a.length
                        ? 76 <= Ja(a[1])
                        : !1;
                }),
                yd = w(function (a) {
                    var c = (lb(a) || "").toLowerCase();
                    a = Vf(a);
                    return (
                        ib(c, "android") &&
                        ib(c, "mobile") &&
                        /^android|linux armv/i.test(a)
                    );
                }),
                Ns =
                    "other none unknown wifi ethernet bluetooth cellular wimax mixed".split(
                        " "
                    ),
                Os = w(function (a) {
                    var c = n(a, "navigator.connection.type");
                    if (W(c)) return null;
                    a = Je(a)(c, Ns);
                    return -1 === a ? c : "" + a;
                }),
                qg = w(v(U("document.addEventListener"), Hc)),
                hl = w(function (a) {
                    var c = n(a, "navigator") || {};
                    return N(
                        function (b, d) {
                            return b || n(c, d);
                        },
                        "",
                        [
                            "language",
                            "userLanguage",
                            "browserLanguage",
                            "systemLanguage",
                        ]
                    );
                }),
                Jh = w(function (a) {
                    var c = n(a, "navigator") || {};
                    a = hl(a);
                    ia(a) ||
                        ((a = ""), (c = n(c, "languages.0")), ia(c) && (a = c));
                    return a.toLowerCase().split("-")[0];
                }),
                rb = w(function (a) {
                    return (n(a, "top") || a) !== a;
                }),
                Ps = w(U("top.contentWindow")),
                Qs = w(function (a) {
                    var c = !1;
                    try {
                        c = a.navigator.javaEnabled();
                    } catch (b) {}
                    return c;
                }),
                Rs = w(function (a) {
                    var c =
                            "__webdriver_evaluate __selenium_evaluate __webdriver_script_function __webdriver_script_func __webdriver_script_fn __fxdriver_evaluate __driver_unwrapped __webdriver_unwrapped __driver_evaluate __selenium_unwrapped __fxdriver_unwrapped".split(
                                " "
                            ),
                        b = n(a, "external");
                    b = n(b, "toString") ? "" + b.toString() : "";
                    b = -1 !== hb(b, "Sequentum");
                    var d = n(a, "document.documentElement"),
                        e = ["selenium", "webdriver", "driver"];
                    return !!(
                        $a(u(a, n), [
                            "_selenium",
                            "callSelenium",
                            "_Selenium_IDE_Recorder",
                        ]) ||
                        $a(u(n(a, "document"), n), c) ||
                        b ||
                        (d && $a(I(d.getAttribute, d), e))
                    );
                }),
                Ss = w(function (a) {
                    return !!(
                        $a(u(a, n), [
                            "_phantom",
                            "__nightmare",
                            "callPhantom",
                        ]) ||
                        /(PhantomJS)|(HeadlessChrome)/.test(lb(a)) ||
                        n(a, "navigator.webdriver") ||
                        (n(a, "isChrome") && !n(a, "chrome"))
                    );
                }),
                Ts = w(function (a) {
                    return !(
                        !n(a, "ia_document.shareURL") ||
                        !n(a, "ia_document.referrer")
                    );
                }),
                Vd = w(function (a) {
                    var c = lb(a) || "",
                        b = c.match(/Mac OS X ([0-9]+)_([0-9]+)/);
                    b = b ? [+b[1], +b[2]] : [0, 0];
                    c = c.match(/iPhone OS ([1-9]+)_([0-9]+)/);
                    return 14 <= (c ? +c[1] : 0)
                        ? !0
                        : ($e(a) || 10 < b[0] || (10 === b[0] && 13 <= b[1])) &&
                              Bd(a);
                }),
                Ur = /Edg\/(\d+)\./,
                Ne = w(function (a) {
                    return Vd(a) || Af(a, 68) || Bf(a, 79);
                }),
                Us = $c.construct,
                jc = $c.host,
                Rg = qg(window),
                xa = {
                    mg: 24226447,
                    gg: 26302566,
                    pg: 51533966,
                    dj: 65446441,
                    Qa: "https:",
                    ab: "1350",
                    bc: Us,
                    lg: Rg ? 512 : 2048,
                    jg: Rg ? 512 : 2048,
                    kg: Rg ? 100 : 400,
                    ej: 100,
                    ng: "noindex",
                },
                Wd = [],
                K = w(function (a) {
                    return a.id + ":" + a.ca;
                }),
                rc = {},
                de = Ba("1"),
                Vs = setTimeout;
            La.prototype["catch"] = function (a) {
                return this.then(null, a);
            };
            La.prototype.then = function (a, c) {
                var b = new this.constructor(ks);
                Ak(this, new ms(a, c, b));
                return b;
            };
            La.prototype["finally"] = function (a) {
                var c = this.constructor;
                return this.then(
                    function (b) {
                        return c.resolve(a()).then(function () {
                            return b;
                        });
                    },
                    function (b) {
                        return c.resolve(a()).then(function () {
                            return c.reject(b);
                        });
                    }
                );
            };
            La.all = function (a) {
                return new La(function (c, b) {
                    function d(h, k) {
                        try {
                            if (
                                k &&
                                ("object" === typeof k ||
                                    "function" === typeof k)
                            ) {
                                var l = k.then;
                                if ("function" === typeof l) {
                                    l.call(
                                        k,
                                        function (m) {
                                            d(h, m);
                                        },
                                        b
                                    );
                                    return;
                                }
                            }
                            e[h] = k;
                            0 === --f && c(e);
                        } catch (m) {
                            b(m);
                        }
                    }
                    if (!a || "undefined" === typeof a.length)
                        return b(new TypeError("Promise.all accepts an array"));
                    var e = Array.prototype.slice.call(a);
                    if (0 === e.length) return c([]);
                    for (var f = e.length, g = 0; g < e.length; g++) d(g, e[g]);
                });
            };
            La.resolve = function (a) {
                return a && "object" === typeof a && a.constructor === La
                    ? a
                    : new La(function (c) {
                          c(a);
                      });
            };
            La.reject = function (a) {
                return new La(function (c, b) {
                    b(a);
                });
            };
            La.race = function (a) {
                return new La(function (c, b) {
                    if (!a || "undefined" === typeof a.length)
                        return b(
                            new TypeError("Promise.race accepts an array")
                        );
                    for (var d = 0, e = a.length; d < e; d++)
                        La.resolve(a[d]).then(c, b);
                });
            };
            La.Ee =
                ("function" === typeof setImmediate &&
                    function (a) {
                        setImmediate(a);
                    }) ||
                function (a) {
                    Vs(a, 0);
                };
            La.qg = function (a) {
                "undefined" !== typeof console &&
                    console &&
                    console.warn("Possible Unhandled Promise Rejection:", a);
            };
            var L = window.Promise,
                Ws = oa(L, "Promise"),
                il = oa(n(L, "resolve"), "resolve"),
                jl = oa(n(L, "reject"), "reject"),
                kl = oa(n(L, "all"), "all");
            if (Ws && il && jl && kl) {
                var af = function (a) {
                    return new Promise(a);
                };
                af.resolve = I(il, L);
                af.reject = I(jl, L);
                af.all = I(kl, L);
                L = af;
            } else L = La;
            var jf = [],
                kd = [],
                Y = [],
                Wa = [],
                Sg = [],
                ad = [],
                zg = vc([26812653]),
                Xs = w(v(U("id"), zg), K),
                ac = {
                    id: "id",
                    Ae: "ut",
                    ca: "type",
                    Md: "ldc",
                    Ta: "nck",
                    oc: "url",
                    eh: "referrer",
                },
                Ys = /^\d+$/,
                bd = {
                    id: function (a) {
                        a = "" + (a || "0");
                        Ys.test(a) || (a = "0");
                        try {
                            var c = Ja(a);
                        } catch (b) {
                            c = 0;
                        }
                        return c;
                    },
                    ca: function (a) {
                        return "" + (a || 0 === a ? a : "0");
                    },
                    Ta: Eb,
                    Ae: Eb,
                };
            ac.fd = "defer";
            bd.fd = Eb;
            ac.X = "params";
            bd.X = function (a) {
                return ka(a) || O(a) ? a : null;
            };
            ac.ze = "userParams";
            ac.Zf = "triggerEvent";
            bd.Zf = Eb;
            ac.Nf = "sendTitle";
            bd.Nf = function (a) {
                return !!a || W(a);
            };
            ac.ue = "trackHash";
            bd.ue = Eb;
            ac.Yf = "trackLinks";
            ac.Og = "enableAll";
            var ce = N(
                    function (a, c) {
                        var b = c[0];
                        a[b] = { ea: c[1], Na: bd[b] };
                        return a;
                    },
                    {},
                    Ia(ac)
                ),
                Sr =
                    "hash host hostname href pathname port protocol search".split(
                        " "
                    ),
                Cg =
                    "ru by kz az kg lv md tj tm uz ee fr lt com co.il com.ge com.am com.tr com.ru".split(
                        " "
                    ),
                pk = /(?:^|\.)(?:(ya\.ru)|(?:yandex)\.(\w+|com?\.\w+))$/,
                He = w(function (a) {
                    return (a ? a.replace(/^www\./, "") : "").toLowerCase();
                }),
                Li = w(function (a) {
                    a = T(a).hostname;
                    var c = !1;
                    a && (c = -1 !== a.search(pk));
                    return c;
                }),
                ll = v(T, U("protocol"), Ba("https:")),
                Pr = w(function (a) {
                    return Ms(a) && ll(a) ? "SameSite=None;Secure;" : "";
                }),
                Ej = /^\s+|\s+$/g,
                ok = oa(String.prototype.trim, "trim"),
                Tg = ra(function (a, c) {
                    return c.replace(a, "");
                }),
                $i = Tg(/\s/g),
                Vb = Tg(/\D/g),
                Ue = ["metrika_enabled"],
                Bg = [],
                mk = mb("gsc", kk),
                Qr = /:\d+$/,
                ns = w(function (a) {
                    var c = (T(a).host || "").split(".");
                    return 1 === c.length
                        ? c[0]
                        : N(
                              function (b, d, e) {
                                  e += 1;
                                  2 <= e &&
                                      !b &&
                                      ((e = G(".", c.slice(-e))),
                                      ui(a, e) && (b = e));
                                  return b;
                              },
                              "",
                              c
                          );
                }),
                Uc = w(he),
                Te = w(function (a) {
                    var c = Uc(a),
                        b = "1" === c.C("debug"),
                        d =
                            -1 < kc(T(a).href, "_ym_debug=1") ||
                            -1 < kc(T(a).href, "_ym_debug=2"),
                        e = a._ym_debug;
                    (!e && !d) ||
                        b ||
                        ((a = T(a)), c.D("debug", "1", void 0, a.host));
                    return !!(b || e || d);
                }),
                Or = mb("debuggerEvents", Fd, !0),
                Lr = [
                    "http.0.st..rt.",
                    "network error occurred",
                    "send beacon",
                    "Content Security Policy",
                    "DOM Exception 18",
                ],
                Xd,
                Qa = (function (a) {
                    return function (c, b) {
                        void 0 === b && (b = !1);
                        if (Xd) var d = new Xd(c);
                        else
                            Fa("Error", a.Error)
                                ? ((Xd = a.Error), (d = new a.Error(c)))
                                : ((Xd = Nr), (d = new Xd(c)));
                        b && (d.unk = !0);
                        return d;
                    };
                })(window),
                Mr = eb(/^http./),
                Kr = eb(/^err.kn/),
                jk = [],
                Jr = w(function (a) {
                    a = !(!a.addEventListener || !a.removeEventListener);
                    return {
                        Hi: a,
                        F: a ? "addEventListener" : "attachEvent",
                        ga: a ? "removeEventListener" : "detachEvent",
                    };
                }),
                Zs = w(function (a) {
                    var c = !1;
                    if (!a.addEventListener) return c;
                    try {
                        var b = Object.defineProperty({}, "passive", {
                            get: function () {
                                c = !0;
                                return 1;
                            },
                        });
                        a.addEventListener("test", D, b);
                    } catch (d) {}
                    return c;
                }),
                $s = ra(function (a, c) {
                    return a ? A({ capture: !0, passive: !0 }, c || {}) : !!c;
                }),
                fa = w(function (a) {
                    var c = Zs(a),
                        b = $s(c),
                        d = {};
                    return A(d, {
                        F: function (e, f, g, h) {
                            x(function (k) {
                                var l = b(h);
                                ik(a, e, k, g, l, !1);
                            }, f);
                            return I(d.vb, d, e, f, g, h);
                        },
                        vb: function (e, f, g, h) {
                            x(function (k) {
                                var l = b(h);
                                ik(a, e, k, g, l, !0);
                            }, f);
                        },
                    });
                }),
                ja = w(ig),
                ek = ra(function (a, c) {
                    for (var b = []; !Pd(c); ) {
                        var d = Er(c);
                        a(d, function (e) {
                            return e(c);
                        });
                        b.push(d);
                    }
                    return b;
                }),
                ml = ra(function (a, c) {
                    return Ha(function (b, d) {
                        return c(b, function (e) {
                            try {
                                d(a(e));
                            } catch (f) {
                                b(f);
                            }
                        });
                    });
                }),
                Ug = ra(function (a, c) {
                    return Ha(function (b, d) {
                        return c(b, function (e) {
                            try {
                                a(e)(Ra(b, d));
                            } catch (f) {
                                b(f);
                            }
                        });
                    });
                }),
                ug = [],
                vg = !1,
                tg = !1,
                nl = ra(function (a, c) {
                    var b = c || {};
                    return {
                        l: u(b, R),
                        C: function (d, e) {
                            var f = b[d];
                            return W(f) && !W(e) ? e : f;
                        },
                        D: function (d, e) {
                            b[d] = e;
                            return this;
                        },
                        Rb: function (d, e) {
                            return "" === e || ca(e) ? this : this.D(d, e);
                        },
                        Fa: u(b, a),
                    };
                }),
                Ka = nl(function (a) {
                    var c = "";
                    a = zb(
                        function (b, d) {
                            var e = d[0],
                                f = "" + e + ":" + d[1];
                            "t" === e ? (c = f) : b.push(f);
                            return b;
                        },
                        [],
                        Ia(a)
                    );
                    c && a.push(c);
                    return G(":", a);
                }),
                Vg,
                Vj =
                    ((Vg = {}),
                    (Vg.w = [
                        [
                            function (a, c) {
                                return {
                                    N: function (b, d) {
                                        var e,
                                            f = b.J;
                                        f =
                                            ((e = {}),
                                            (e["page-url"] =
                                                (f && f["page-url"]) || ""),
                                            (e.charset = "utf-8"),
                                            e);
                                        "0" !== c.ca && (f["cnt-class"] = c.ca);
                                        b.K || (b.K = Ka());
                                        e = b.K;
                                        var g = b.ba;
                                        f = {
                                            ma: { za: "watch/" + c.id },
                                            ba: A(void 0 === g ? {} : g, {
                                                yb:
                                                    !!e.C("pv") &&
                                                    !e.C("ar") &&
                                                    !e.C("wh"),
                                            }),
                                            J: A(b.J || {}, f),
                                        };
                                        A(b, f);
                                        d();
                                    },
                                };
                            },
                            1,
                        ],
                    ]),
                    Vg),
                Wg = u(Vj, Zj),
                ob = Od("w"),
                Uj = ["webkitvisibilitychange", "visibilitychange"],
                wf = nl(function (a) {
                    a = Ia(a);
                    return G(
                        "",
                        z(function (c) {
                            var b = c[0];
                            c = c[1];
                            return Xa(c) ? "" : b + "(" + c + ")";
                        }, a)
                    );
                }),
                ol =
                    "A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG INPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOOT TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EMBED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASIDE FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR MAIN svg circle clippath ellipse defs foreignobject g glyph glyphref image line lineargradient marker mask path pattern polygon polyline radialgradient rect set text textpath title".split(
                        " "
                    ),
                Hq = /^\s*(data|javascript):/i,
                pj = new RegExp(
                    G("", [
                        "\\.(" +
                            G(
                                "|",
                                "3gp 7z aac ac3 acs ai avi ape apk asf bmp bz2 cab cdr crc32 css csv cue divx dmg djvu? doc(x|m|b)? emf eps exe flac? flv iso swf gif t?gz jpe?g? js m3u8? m4a mp(3|4|e?g?) m4v md5 mkv mov msi ods og(g|m|v) psd rar rss rtf sea sfv sit sha1 svg tar tif?f torrent ts txt vob wave? wma wmv wmf webm ppt(x|m|b)? xls(x|m|b)? pdf phps png xpi g?zip".split(
                                    " "
                                )
                            ) +
                            ")$",
                    ]),
                    "i"
                ),
                Ta,
                yj =
                    ((Ta = {}),
                    (Ta.hit = "h"),
                    (Ta.params = "p"),
                    (Ta.reachGoal = "g"),
                    (Ta.userParams = "up"),
                    (Ta.trackHash = "th"),
                    (Ta.accurateTrackBounce = "atb"),
                    (Ta.notBounce = "nb"),
                    (Ta.addFileExtension = "fe"),
                    (Ta.extLink = "el"),
                    (Ta.file = "fc"),
                    (Ta.trackLinks = "tl"),
                    (Ta.destruct = "d"),
                    (Ta.setUserID = "ui"),
                    (Ta.getClientID = "ci"),
                    (Ta.clickmap = "cm"),
                    (Ta.enableAll = "ea"),
                    Ta),
                at = w(function () {
                    var a = 0;
                    return function () {
                        return (a += 1);
                    };
                }),
                bt = v(K, at, ma),
                lg = {
                    mc: function (a) {
                        a = Sd(a).C("mt", {});
                        a = Ia(a);
                        return a.length
                            ? N(
                                  function (c, b, d) {
                                      return (
                                          "" +
                                          c +
                                          (d ? "-" : "") +
                                          b[0] +
                                          "-" +
                                          b[1]
                                      );
                                  },
                                  "",
                                  a
                              )
                            : null;
                    },
                    clc: function (a) {
                        var c = J(a).C("cls", { $b: 0, x: 0, y: 0 }),
                            b = c.$b,
                            d = c.x;
                        c = c.y;
                        return b
                            ? b +
                                  "-" +
                                  a.Math.floor(d / b) +
                                  "-" +
                                  a.Math.floor(c / b)
                            : b + "-" + d + "-" + c;
                    },
                    rqnt: function (a, c, b) {
                        a = b.J;
                        return !a || a.nohit ? null : bt(c);
                    },
                },
                xr = w(function (a) {
                    Sj(a, "_ymBRC", "1");
                    var c = "1" !== Rj(a, "_ymBRC");
                    c || Tj(a, "_ymBRC");
                    return c;
                }),
                Va = w(Qj),
                cd = w(Qj, function (a, c, b) {
                    return "" + c + b;
                }),
                ct = w(U("document.documentElement")),
                dt = w(function (a) {
                    a = n(a, "document") || {};
                    return (
                        "" + (a.characterSet || a.charset || "")
                    ).toLowerCase();
                }),
                db = w(v(U("document"), u("createElement", Gc))),
                ti = w(function (a) {
                    var c = n(a, "Element.prototype");
                    return c
                        ? (a = tb(
                              function (b) {
                                  var d = c[b];
                                  return !!d && Fa(b, d);
                              },
                              [
                                  "matches",
                                  "webkitMatchesSelector",
                                  "mozMatchesSelector",
                                  "msMatchesSelector",
                                  "oMatchesSelector",
                              ]
                          ))
                            ? c[a]
                            : null
                        : null;
                }),
                et = Ba("INPUT"),
                Qe = v(Ma, et),
                ft = Ba("TEXTAREA"),
                ur = v(Ma, ft),
                gt = Ba("SELECT"),
                vr = v(Ma, gt),
                Re = v(U("type"), eb(/^(checkbox|radio)$/)),
                Nf = v(Ma, eb(/^INPUT|SELECT|TEXTAREA$/)),
                te = v(Ma, eb(/^INPUT|SELECT|TEXTAREA|BUTTON$/)),
                Rf = "INPUT CHECKBOX RADIO TEXTAREA SELECT PROGRESS".split(" "),
                tr = ["submit", "image", "hidden"],
                Zf = w(function () {
                    for (var a = 59, c = {}, b = 0; b < ol.length; b += 1)
                        (c[ol[b]] = String.fromCharCode(a)), (a += 1);
                    return c;
                }),
                Mj = w(function (a) {
                    return { pj: a, gb: null, pb: [] };
                }),
                Kj = {},
                og = {};
            Kj.p = 500;
            var Jj = { i: "id", n: "name", h: "href", ty: "type" };
            og.h = !0;
            og.c = !0;
            var Yc = {};
            Yc.p = vf;
            Yc.c = function (a, c, b) {
                (a = ab(n(c, "textContent"))) &&
                    b &&
                    ((b = b(c)),
                    b.length &&
                        $a(v(U("textContent"), ab, Ba(a)), b) &&
                        (a = ""));
                Qe(c) &&
                    (a = ab((c.getAttribute && c.getAttribute("value")) || a));
                return a;
            };
            var dd,
                ng =
                    "button," +
                    G(
                        ",",
                        z(
                            function (a) {
                                return 'input[type="' + a + '"]';
                            },
                            ["button", "submit", "reset", "file"]
                        )
                    ) +
                    ",a",
                Ui = u(ng, jb),
                rr =
                    ((dd = {}),
                    (dd.A = "h"),
                    (dd.BUTTON = "i"),
                    (dd.DIV = "i"),
                    (dd.INPUT = "ty"),
                    dd),
                pl = /\/$/,
                Ij = mb("r", function (a, c) {
                    var b = Hj(a, c),
                        d = b[0];
                    return !b[1] && d;
                }),
                Md = w(function () {
                    return { Ea: {}, pending: {}, children: {} };
                }),
                Xg = U("postMessage"),
                ht = B("s.f", function (a, c, b, d, e) {
                    c = c(d);
                    var f = Md(a),
                        g = G(":", [c.meta.ec, c.meta.key]);
                    if (Xg(b)) {
                        f.pending[g] = e;
                        try {
                            b.postMessage(c.Uf, "*");
                        } catch (h) {
                            delete f.pending[g];
                            return;
                        }
                        S(
                            a,
                            function () {
                                delete f.pending[g];
                            },
                            5e3,
                            "if.s"
                        );
                    }
                }),
                it = B("s.fh", function (a, c, b, d, e, f) {
                    var g = null,
                        h = null,
                        k = Md(a),
                        l = null;
                    try {
                        (g = Lb(a, f.data)), (h = g.__yminfo), (l = g.data);
                    } catch (m) {
                        return;
                    }
                    if (
                        !ca(h) &&
                        h.substring &&
                        "__yminfo" === h.substring(0, 8) &&
                        !ca(l) &&
                        ((g = h.split(":")), 4 === g.length)
                    )
                        if (
                            ((h = c.id),
                            (c = g[1]),
                            (a = g[2]),
                            (g = g[3]),
                            !O(l) && l.type && "0" === g && l.counterId)
                        ) {
                            if (!l.toCounter || l.toCounter == h) {
                                k = null;
                                try {
                                    k = f.source;
                                } catch (m) {}
                                !Xa(k) &&
                                    Xg(k) &&
                                    ((f = d.R(l.type, [f, l])),
                                    (e = z(v(R, ni(e)), f.concat([{}]))),
                                    (l = b([c, a, l.counterId], e)),
                                    k.postMessage(l.Uf, "*"));
                            }
                        } else
                            g === "" + h &&
                                O(l) &&
                                ha(function (m) {
                                    return !(!m.hid || !m.counterId);
                                }, l).length === l.length &&
                                (b = k.pending[G(":", [c, a])]) &&
                                b.apply(null, [f].concat(l));
                }),
                od = w(function (a, c) {
                    var b,
                        d = Gc("getElementsByTagName", n(a, "document")),
                        e = Md(a),
                        f = Xg(a),
                        g = rd(a),
                        h = fa(a);
                    if (!d || !f) return null;
                    d = d.call(a.document, "iframe");
                    f =
                        ((b = {}),
                        (b.counterId = c.id),
                        (b.hid = "" + Dc(a)),
                        b);
                    Ne(a) && (f.duid = Nd(a, c));
                    nr(a, g);
                    or(a);
                    b = pr(a, f);
                    var k = C([a, u([], b)], ht);
                    x(function (l) {
                        var m = null;
                        try {
                            m = l.contentWindow;
                        } catch (p) {}
                        m &&
                            k(m, { type: "initToChild" }, function (p, q) {
                                g.R("initToParent", [p, q]);
                            });
                    }, d);
                    rb(a) &&
                        k(a.parent, { type: "initToParent" }, function (l, m) {
                            g.R("parentConnect", [l, m]);
                        });
                    h.F(a, ["message"], C([a, c, b, g, f], it));
                    return { $: g, Ea: e.Ea, children: e.children, fe: k };
                }, v(fb, K)),
                pd = w(
                    function (a, c) {
                        if (!Ne(a) || !rb(a)) return Nd(a, c);
                        var b = od(a, c);
                        return b && b.Ea[c.id]
                            ? b.Ea[c.id].info.duid || Nd(a, c)
                            : Nd(a, c);
                    },
                    function (a, c) {
                        return "{" + c.Md + c.Ta;
                    }
                ),
                jt = w(
                    v(
                        ja,
                        Ha(function (a) {
                            return -new a.l.Date().getTimezoneOffset();
                        })
                    )
                ),
                kt = v(
                    ja,
                    Ha(function (a) {
                        a = new a.l.Date();
                        return G(
                            "",
                            z(Fr, [
                                a.getFullYear(),
                                a.getMonth() + 1,
                                a.getDate(),
                                a.getHours(),
                                a.getMinutes(),
                                a.getSeconds(),
                            ])
                        );
                    })
                ),
                lt = v(ja, Ha(mg)),
                ql = w(
                    v(
                        ja,
                        Ha(function (a) {
                            return a.qb[0];
                        })
                    )
                ),
                mt = w(function (a) {
                    a = J(a);
                    var c = a.C("counterNum", 0) + 1;
                    a.D("counterNum", c);
                    return c;
                }, v(fb, K)),
                pa,
                Ld =
                    ((pa = {}),
                    (pa.vf = u($c.version, R)),
                    (pa.nt = Os),
                    (pa.fu = function (a, c, b) {
                        var d = b.J;
                        if (!d) return null;
                        c = (n(a, "document.referrer") || "").replace(pl, "");
                        b = (d["page-ref"] || "").replace(pl, "");
                        d = d["page-url"];
                        a = T(a).href !== d;
                        c = c !== b;
                        b = 0;
                        a && c ? (b = 3) : c ? (b = 1) : a && (b = 2);
                        return b;
                    }),
                    (pa.en = dt),
                    (pa.la = hl),
                    (pa.ut = function (a, c, b) {
                        var d = b.M;
                        b = b.J;
                        d = d && d.Ac;
                        b && (Li(a) || c.Ae || d) && (b.ut = xa.ng);
                        return null;
                    }),
                    (pa.v = u(xa.ab, R)),
                    (pa.cn = mt),
                    (pa.dp = function (a) {
                        var c = J(a),
                            b = c.C("bt", {});
                        if (W(c.C("bt"))) {
                            var d = n(a, "navigator.getBattery");
                            try {
                                b.p = d && d.call(a.navigator);
                            } catch (e) {}
                            c.D("bt", b);
                            b.p &&
                                b.p.then &&
                                b.p.then(
                                    E(a, "bi:dp.p", function (e) {
                                        b.Xi =
                                            n(e, "charging") &&
                                            0 === n(e, "chargingTime");
                                    })
                                );
                        }
                        return sb(b.Xi);
                    }),
                    (pa.ls = w(function (a, c) {
                        var b = cd(a, c.id),
                            d = ja(a),
                            e = b.C("lsid");
                        return +e
                            ? e
                            : ((d = Ya(a, 0, d(Z))), b.D("lsid", d), d);
                    }, fb)),
                    (pa.hid = Dc),
                    (pa.phid = function (a, c) {
                        if (!rb(a)) return null;
                        var b = od(a, c);
                        if (!b) return null;
                        var d = ea(b.Ea);
                        return d.length ? b.Ea[d[0]].info.hid : null;
                    }),
                    (pa.z = jt),
                    (pa.i = kt),
                    (pa.et = lt),
                    (pa.c = v(U("navigator.cookieEnabled"), Ob)),
                    (pa.rn = v(R, Ya)),
                    (pa.rqn = function (a, c, b) {
                        b = b.J;
                        if (!b || b.nohit) return null;
                        c = K(c);
                        a = cd(a, c);
                        c = (a.C("reqNum", 0) || 0) + 1;
                        a.D("reqNum", c);
                        if (a.C("reqNum") === c) return c;
                        a.fc("reqNum");
                        return null;
                    }),
                    (pa.u = pd),
                    (pa.w = function (a) {
                        a = Pc(a);
                        return a[0] + "x" + a[1];
                    }),
                    (pa.s = function (a) {
                        var c = n(a, "screen");
                        if (c) {
                            a = n(c, "width");
                            var b = n(c, "height");
                            c = n(c, "colorDepth") || n(c, "pixelDepth");
                            return G("x", [a, b, c]);
                        }
                        return null;
                    }),
                    (pa.sk = U("devicePixelRatio")),
                    (pa.ifr = v(rb, Ob)),
                    (pa.j = v(Qs, Ob)),
                    (pa.sti = function (a) {
                        return rb(a) && Ps(a) ? "1" : null;
                    }),
                    pa),
                mr = w(function () {
                    return wa(ea(Ld), ea(lg));
                }),
                lr = w(Kc, K),
                Fj = w(function () {
                    return { Re: null, sa: [] };
                }, K),
                ir = /^[a-z][\w.+-]+:/i,
                Yg,
                Zb = [
                    [Se, 1],
                    [Me, 2],
                    [Qb(), 3],
                    [Gj, 4],
                ],
                Le = [],
                xb = u(Zb, ak),
                Yb = ((Yg = {}), (Yg.h = Zb), Yg),
                aa = u(Yb, Zj);
            xb(Cj, -100);
            var dr = /[^a-z0-9.:-]/,
                Zg,
                $g = {},
                rl = ua([
                    jg && [jg, 0],
                    Cb && [Cb, 1],
                    [Db, 2],
                    Jd && [Jd, 3],
                    [Xc, 4],
                ]),
                tc = ua([jg, Cb, Db, Jd, Xc]),
                ah = [Db];
            ah.unshift(Cb);
            ah.push(Jd);
            var sl = ua(ah),
                ed = ua([Xc]);
            ua([Cb, Db]);
            var nt = ua([Cb, Xc]),
                tl = ua([Cb, Db, Jd, Xc]),
                Aa = ((Zg = {}), (Zg.h = sl), Zg),
                bh = w(function (a, c) {
                    var b = $g["*"] ? $g["*"] : c && $g[c];
                    b || (b = c ? Aa[c] || [] : tc);
                    b = N(
                        function (d, e) {
                            var f = e(a);
                            if (f) {
                                var g = tb(v(Id, Ba(e)), rl);
                                g && d.push([g[1], f]);
                            }
                            return d;
                        },
                        [],
                        b
                    );
                    b.length || be();
                    return b;
                }, fb),
                ch,
                ot = I(L.reject, L, Pa()),
                Da = ((ch = {}), (ch.h = ob), ch),
                va = B(
                    "g.sen",
                    function (a, c, b) {
                        var d = bh(a, c);
                        b = b ? hr(a, c, b) : [];
                        var e = Da[c],
                            f = e ? e(a, d, b) : ob(a, d, b);
                        return function () {
                            var g = Oa(arguments),
                                h = g[0];
                            g = g.slice(1);
                            var k = h.ba;
                            h = A(h, {
                                ba: A(void 0 === k ? {} : k, { ha: [c] }),
                            });
                            return f.apply(null, [h].concat(g));
                        };
                    },
                    ot
                ),
                Wq = ra(function (a, c) {
                    if (!c[a]) {
                        var b,
                            d = new L(function (e) {
                                b = e;
                            });
                        c[a] = { Bf: b, promise: d, Cf: !1 };
                    }
                    return c[a].promise;
                }),
                zj = w(v(Kc, Ha)),
                pt = B("dc.init", function (a, c) {
                    return c && zg(oe(c.split(":")[0]))
                        ? { log: D, warn: D, error: D }
                        : Vq(a, c);
                }),
                pc = w(pt, fb),
                km = B("h.p", function (a, c) {
                    var b,
                        d,
                        e = va(a, "h", c),
                        f = c.oc || "" + T(a).href,
                        g = c.eh || a.document.referrer,
                        h = {
                            K: Ka(((b = {}), (b.pv = 1), b)),
                            J:
                                ((d = {}),
                                (d["page-url"] = f),
                                (d["page-ref"] = g),
                                d),
                            M: {},
                        };
                    h.M.X = c.X;
                    h.M.ze = c.ze;
                    c.fd && h.J && (h.J.nohit = "1");
                    return e(h, c)
                        .then(function (k) {
                            var l;
                            k &&
                                (c.fd ||
                                    nc(
                                        a,
                                        c,
                                        "h",
                                        ((l = {}),
                                        (l.id = c.id),
                                        (l.url = f),
                                        (l.ref = g),
                                        l),
                                        c.X
                                    )(),
                                Tb(a, C([a, c, k], Xq)));
                        })
                        ["catch"](E(a, "h.g.s"));
                }),
                dh = [
                    "yandex_metrika_callback" + $c.callbackPostfix,
                    "yandex_metrika_callbacks" + $c.callbackPostfix,
                ],
                qt = B("cb.i", function (a) {
                    var c = dh[0],
                        b = dh[1];
                    if (P(a[c])) a[c]();
                    "object" === typeof a[b] &&
                        x(function (d, e) {
                            a[b][e] = null;
                            dg(a, d);
                        }, a[b]);
                    x(function (d) {
                        try {
                            delete a[d];
                        } catch (e) {
                            a[d] = void 0;
                        }
                    }, dh);
                }),
                Tq = /^[a-zA-Z0-9'!#$%&*+-/=?^_`{|}~]+$/,
                ul = w(function (a) {
                    return (
                        !!n(a, "crypto.subtle.digest") &&
                        !!n(a, "TextEncoder") &&
                        !!n(a, "FileReader") &&
                        !!n(a, "Blob")
                    );
                }),
                Uq = Tg(/[^\d+()]/g),
                Rq = ["yandex_cid", "yandex_public_id"],
                rt = B("fpm", function (a, c) {
                    if (!ll(a)) return D;
                    var b = K(c);
                    if (!ul(a)) return Ib(a, b, "ns"), D;
                    var d = Ea(a, c);
                    return d
                        ? function (e) {
                              return new L(function (f, g) {
                                  return ka(e)
                                      ? ea(e).length
                                          ? f(
                                                vj(a, e).then(function (h) {
                                                    var k, l;
                                                    h &&
                                                        h.length &&
                                                        d.params(
                                                            ((k = {}),
                                                            (k.__ym =
                                                                ((l = {}),
                                                                (l.fpp = h),
                                                                l)),
                                                            k)
                                                        );
                                                }, D)
                                            )
                                          : g(Pa("fpm.l"))
                                      : g(Pa("fpm.o"));
                              })["catch"](E(a, "fpm.en"));
                          }
                        : D;
                }),
                bf = ra(function (a, c) {
                    var b = {};
                    gg(a)(function (d) {
                        b = d[c] || {};
                    });
                    return b;
                }),
                st = B("c.c.cc", function (a) {
                    var c = J(a),
                        b = v(bf(a), function (d) {
                            var e,
                                f = ((e = {}), (e.clickmap = !!d.clickmap), e);
                            return A({}, d, f);
                        });
                    return E(
                        a,
                        "g.c.cc",
                        v(I(c.C, c, "counters", {}), ea, Xb(b))
                    );
                }),
                tt = B("gt.c.rs", function (a, c) {
                    var b,
                        d = K(c),
                        e = c.id,
                        f = c.ca,
                        g = c.Dg,
                        h = c.ue,
                        k = C([a, d], Pq);
                    fg(
                        a,
                        d,
                        ((b = {}),
                        (b.id = e),
                        (b.type = +f),
                        (b.clickmap = g),
                        (b.trackHash = !!h),
                        b)
                    );
                    return k;
                }),
                tj = w(Fd),
                Hd = w(Kc, K),
                ut = B("pa.int", function (a, c) {
                    var b;
                    return (
                        (b = {}),
                        (b.params = function () {
                            var d,
                                e,
                                f,
                                g = Oa(arguments),
                                h = Oq(g);
                            if (!h) return null;
                            g = h.Jg;
                            var k = h.X;
                            h = h.Wb;
                            if (!ka(k) && !O(k)) return null;
                            var l = va(a, "1", c),
                                m = Hd(c).url,
                                p = !Xs(c),
                                q = "pa",
                                r = ((d = {}), (d.id = c.id), d);
                            d = k;
                            var t = "";
                            if ((t = n(k, "__ym.user_id")))
                                (q = "pau"), (r.uid = t);
                            H("__ymu", ea(k)) && (q = "paup");
                            d.__ym &&
                                ((d = A({}, k)),
                                (d.__ym = N(
                                    function (y, F) {
                                        var Q = n(k, "__ym." + F);
                                        Q && (y[F] = Q);
                                        return y;
                                    },
                                    {},
                                    Wd
                                )),
                                ea(d.__ym).length || delete d.__ym,
                                (p = !!ea(d).length));
                            d = t ? void 0 : JSON.stringify(d);
                            d = nc(a, c, q, r, d);
                            l = l(
                                {
                                    M: { X: k },
                                    K: Ka(
                                        ((e = {}), (e.pa = 1), (e.ar = 1), e)
                                    ),
                                    J:
                                        ((f = {}),
                                        (f["page-url"] = m || T(a).href),
                                        f),
                                },
                                c
                            ).then(p ? d : D);
                            return Wc(a, "p.s", l, h, g);
                        }),
                        b
                    );
                }),
                le = w(rj, v(fb, K)),
                vt = B("y.p", function (a, c) {
                    var b = rj(a, c);
                    if (b) {
                        var d = ge(a),
                            e = C([a, b, c], Kq);
                        Lh(a, d, function (f) {
                            f.F(["params"], e);
                        });
                        b.$.F(["params"], v(U("1"), e));
                    }
                }),
                os = w(function (a) {
                    if ((a = db(a))) return a("a");
                }),
                vl = { tj: eb(/[/&=?#]/) },
                Ee = B("go.in", function (a, c, b, d) {
                    var e;
                    void 0 === b && (b = "goal");
                    return (
                        (e = {}),
                        (e.reachGoal = function (f, g, h, k) {
                            var l, m, p;
                            if (!f || (vl[b] && vl[b](f))) return null;
                            var q = g,
                                r = h || D;
                            P(g) && ((r = g), (q = void 0), (k = h));
                            var t = nc(
                                    a,
                                    c,
                                    "gr",
                                    ((l = {}), (l.id = c.id), (l.goal = f), l),
                                    q
                                ),
                                y = "goal" === b;
                            g = va(a, "g", c);
                            l = Jq(a, c, f, b);
                            h = l[0];
                            l = l[1];
                            q = g(
                                {
                                    M: { X: q },
                                    K: Ka(((m = {}), (m.ar = 1), m)),
                                    J:
                                        ((p = {}),
                                        (p["page-url"] = h),
                                        (p["page-ref"] = l),
                                        p),
                                },
                                c
                            ).then(function () {
                                var F, Q;
                                y && t();
                                ub(
                                    a,
                                    ((F = {}),
                                    (F.counterKey = K(c)),
                                    (F.name = "event"),
                                    (F.data =
                                        ((Q = {}),
                                        (Q.schema = b),
                                        (Q.name = f),
                                        Q)),
                                    F)
                                );
                                d && d();
                            });
                            return Wc(a, "g.s", q, r, k);
                        }),
                        e
                    );
                }),
                wt = B("guid.int", function (a, c) {
                    var b;
                    return (
                        (b = {}),
                        (b.getClientID = function (d) {
                            var e = Nd(a, c);
                            d && dg(a, d, null, e);
                            return e;
                        }),
                        b
                    );
                }),
                Ck,
                xt = B("th.e", function (a, c) {
                    function b() {
                        g ||
                            (k = Jb(a, "onhashchange")
                                ? fa(a).F(a, ["hashchange"], h)
                                : ps(a, h));
                    }
                    var d,
                        e = va(a, "t", c),
                        f = Ke(a, K(c)),
                        g = !1,
                        h = E(a, "h.h.ch", I(qs, null, a, c, e)),
                        k = D;
                    c.ue && (b(), (g = !0));
                    e = E(a, "tr.hs.h", function (l) {
                        var m;
                        l ? b() : k();
                        g = !!l;
                        f(((m = {}), (m.trackHash = g), m));
                    });
                    return (d = {}), (d.trackHash = e), (d.u = k), d;
                }),
                yt = ra(function (a, c) {
                    ia(c) ? a.push(c) : x(v(R, Ga("push", a)), c);
                }),
                Gd = mb(
                    "retryReqs",
                    function (a) {
                        var c = Va(a),
                            b = c.C("retryReqs", {}),
                            d = ja(a)(Z);
                        x(function (e) {
                            var f = e[0];
                            e = e[1];
                            (!e || !e.time || e.time + 864e5 < d) &&
                                delete b[f];
                        }, Ia(b));
                        c.D("retryReqs", b);
                        return b;
                    },
                    !0
                ),
                eh = v(kc, Ba(0)),
                wl = vb(eh),
                zt = [wl("watch"), wl("clmap")],
                At = B("g.r", function (a) {
                    var c = ja(a),
                        b = Gd(a),
                        d = c(Z),
                        e = Dc(a);
                    return zb(
                        function (f, g) {
                            var h = g[0],
                                k = g[1];
                            k &&
                                $a(Ha(k.resource), zt) &&
                                !k.d &&
                                k.ghid &&
                                k.ghid !== e &&
                                k.time &&
                                500 < d - k.time &&
                                k.time + 864e5 > d &&
                                2 >= k.browserInfo.rqnl &&
                                ((k.d = 1),
                                (h = {
                                    protocol: k.protocol,
                                    host: k.host,
                                    za: k.resource,
                                    ti: k.postParams,
                                    X: k.params,
                                    vg: k.browserInfo,
                                    rj: k.ghid,
                                    time: k.time,
                                    Ob: Ja(h),
                                    Gg: k.counterId,
                                    ca: k.counterType,
                                }),
                                k.telemetry && (h.Ha = k.telemetry),
                                f.push(h));
                            return f;
                        },
                        [],
                        Ia(b)
                    );
                }),
                Bt = B("nb.p", function (a, c) {
                    function b(F) {
                        l() ||
                            ((F = "number" === typeof F ? F : 15e3),
                            (y = rs(a, d(!1), F)),
                            m());
                    }
                    function d(F) {
                        return function (Q) {
                            var M, na, ya;
                            void 0 === Q &&
                                (Q =
                                    ((M = {}),
                                    (M.ctx = {}),
                                    (M.callback = D),
                                    M));
                            if (F || (!r && !k.Fd)) {
                                r = !0;
                                m();
                                y && y();
                                var Bb = p(Z);
                                M = (Ja(k.C("lastHit")) || 0) < Bb - 18e5;
                                var Ed = 0.1 > Math.random();
                                k.D("lastHit", Bb);
                                Bb = Ka(
                                    ((na = {}),
                                    (na.nb = 1),
                                    (na.cl = t),
                                    (na.ar = 1),
                                    na)
                                );
                                na = Hd(c);
                                na = {
                                    J:
                                        ((ya = {}),
                                        (ya["page-url"] = na.url || T(a).href),
                                        ya),
                                    K: Bb,
                                    M: { force: F },
                                };
                                ya = pc(a, K(c)).warn;
                                !Q.callback && Q.ctx && ya("nbnc");
                                (ya = F || M || Ed) ||
                                    ((ya = a.location.href),
                                    (M = a.document.referrer),
                                    (ya = !(ya && M
                                        ? qj(ya) === qj(M)
                                        : !ya && !M)));
                                if (ya)
                                    return (
                                        (ya = g(na, c)),
                                        Wc(a, "l.o.l", ya, Q.callback, Q.ctx)
                                    );
                            }
                            return null;
                        };
                    }
                    var e,
                        f,
                        g = va(a, "n", c),
                        h = K(c),
                        k = cd(a, c.id),
                        l = u(u(h, bf(a)), v(ma, U("accurateTrackBounce"))),
                        m = u(
                            ((e = {}), (e.accurateTrackBounce = !0), e),
                            Ke(a, h)
                        ),
                        p = ja(a),
                        q = p(Z),
                        r = !1,
                        t = 0,
                        y;
                    qa(c, function (F) {
                        t = F.Xg - q;
                    });
                    c.Fe && b(c.Fe);
                    e = ((f = {}), (f.notBounce = d(!0)), (f.u = y), f);
                    e.accurateTrackBounce = b;
                    return e;
                }),
                Cq = ra(ic)("(ym-disable-clickmap|ym-clickmap-ignore)"),
                Ct = B("clm.p", function (a, c) {
                    if (ne(a)) return D;
                    var b = va(a, "m", c),
                        d = K(c),
                        e = ja(a),
                        f = e(Z),
                        g = u(u(d, bf(a)), v(ma, U("clickmap"))),
                        h,
                        k = null;
                    d = E(a, "clm.p.c", function (l) {
                        var m = g();
                        if (m) {
                            var p = J(a),
                                q = p.C("cls", { $b: 0, x: 0, y: 0 });
                            p.D("cls", {
                                $b: q.$b + 1,
                                x: q.x + l.clientX,
                                y: q.y + l.clientY,
                            });
                            p = "object" === typeof m ? m : {};
                            q = p.filter;
                            m = p.isTrackHash || !1;
                            var r = z(function (y) {
                                return ("" + y).toUpperCase();
                            }, p.ignoreTags || []);
                            W(h) && (h = p.quota || null);
                            var t = !!p.quota;
                            l = {
                                element: Dq(a, l),
                                position: mj(a, l),
                                button: Eq(l),
                                time: e(Z),
                            };
                            p = T(a).href;
                            if (Bq(a, l, k, r, q)) {
                                if (t) {
                                    if (!h) return;
                                    --h;
                                }
                                r = Pe(a, l.element);
                                q = r[0];
                                r = r[1];
                                t = pg(a, l.element);
                                q = [
                                    "rn",
                                    Ya(a),
                                    "x",
                                    Math.floor(
                                        (65535 * (l.position.x - t.left)) /
                                            (q || 1)
                                    ),
                                    "y",
                                    Math.floor(
                                        (65535 * (l.position.y - t.top)) /
                                            (r || 1)
                                    ),
                                    "t",
                                    Math.floor((l.time - f) / 100),
                                    "p",
                                    vf(a, l.element),
                                    "X",
                                    l.position.x,
                                    "Y",
                                    l.position.y,
                                ];
                                q = G(":", q);
                                m && (q += ":wh:1");
                                Aq(a, p, q, b, c);
                                k = l;
                            }
                        }
                    });
                    return fa(a).F(n(a, "document"), ["click"], d);
                }),
                Dt = B("trigger.in", function (a, c) {
                    c.Zf &&
                        Tb(a, C([a, "yacounter" + c.id + "inited"], wr), "t.i");
                }),
                Et = B("c.m.p", function (a, c) {
                    var b,
                        d = K(c);
                    return (b = {}), (b.clickmap = u(Ke(a, d), zq)), b;
                }),
                Si = u("form", oc),
                cq = u("form", jb),
                yq = w(v(fb, vb(qa)(U("settings.form_goals"))), fb),
                Ft = B("s.f.i", function (a, c) {
                    var b,
                        d = [],
                        e = [],
                        f = fa(a);
                    d.push(f.F(a, ["click"], E(a, "s.f.c", C([a, c, e], xq))));
                    d.push(
                        f.F(
                            a,
                            ["submit"],
                            E(a, "s.f.e", function (g) {
                                var h = n(g, "target");
                                g = n(g, "isTrusted");
                                jj(!0, a, c, e, h, g);
                            })
                        )
                    );
                    kj(a, c, "fgi", ((b = {}), (b.id = c.id), b));
                    return C([De, d], x);
                }),
                Gt = B("s.f.i", function (a, c) {
                    return qa(c, function (b) {
                        var d;
                        if (n(b, "settings.button_goals"))
                            return (
                                (b = fa(a).F(
                                    a,
                                    ["click"],
                                    E(
                                        a,
                                        "c.t.c",
                                        v(C([a, c], hf(a, c, "", wq)))
                                    )
                                )),
                                nc(a, c, "gbi", ((d = {}), (d.id = c.id), d))(),
                                b
                            );
                    });
                }),
                bc,
                Yd,
                fh,
                fd,
                Fb,
                ag =
                    ((bc = {}),
                    (bc.transaction_id = "id"),
                    (bc.item_brand = "brand"),
                    (bc.index = "position"),
                    (bc.item_variant = "variant"),
                    (bc.value = "revenue"),
                    (bc.item_category = "category"),
                    (bc.item_list_name = "list"),
                    bc),
                lc =
                    ((Yd = {}),
                    (Yd.item_id = "id"),
                    (Yd.item_name = "name"),
                    (Yd.promotion_name = "coupon"),
                    Yd),
                vq = ((fh = {}), (fh.promotion_name = "name"), fh),
                xl =
                    ((fd = {}),
                    (fd.promotion_name = "name"),
                    (fd.promotion_id = "id"),
                    (fd.item_id = "product_id"),
                    (fd.item_name = "product_name"),
                    fd),
                sq =
                    "currencyCode add delete remove purchase checkout detail impressions click promoView promoClick".split(
                        " "
                    ),
                tq =
                    ((Fb = {}),
                    (Fb.view_item = {
                        event: "detail",
                        wa: lc,
                        Ja: "products",
                    }),
                    (Fb.add_to_cart = { event: "add", wa: lc, Ja: "products" }),
                    (Fb.remove_from_cart = {
                        event: "remove",
                        wa: lc,
                        Ja: "products",
                    }),
                    (Fb.begin_checkout = {
                        event: "checkout",
                        wa: lc,
                        Ja: "products",
                    }),
                    (Fb.purchase = {
                        event: "purchase",
                        wa: lc,
                        Ja: "products",
                    }),
                    (Fb.view_item_list = { event: "impressions", wa: lc }),
                    (Fb.select_item = {
                        event: "click",
                        Ja: "products",
                        wa: lc,
                    }),
                    (Fb.view_promotion = {
                        event: "promoView",
                        Ja: "promotions",
                        wa: xl,
                    }),
                    (Fb.select_promotion = {
                        event: "promoClick",
                        Ja: "promotions",
                        wa: xl,
                    }),
                    Fb),
                ij = B("dl.w", function (a, c, b) {
                    function d() {
                        var g = n(a, c);
                        (e = O(g) && Ie(a, g, b)) ||
                            (f = S(a, d, 1e3, "ec.dl"));
                    }
                    var e,
                        f = 0;
                    d();
                    return function () {
                        return la(a, f);
                    };
                }),
                Ht = B("p.e", function (a, c) {
                    var b = Ea(a, c);
                    if (b) {
                        var d = J(a);
                        b = b.params;
                        var e = E(a, "h.ee", C([a, K(c), b], qq));
                        return c.md
                            ? (d.D("ecs", 0), hj(a, c.md, e))
                            : qa(c, function (f) {
                                  if ((f = n(f, "settings.ecommerce")) && ia(f))
                                      return d.D("ecs", 1), hj(a, f, e);
                              });
                    }
                }),
                pq = w(function (a) {
                    return G("[^\\d<>]*", a.split(""));
                }),
                mq = /\S/,
                Zi = u(
                    [
                        "style",
                        "display:inline;margin:0;padding:0;font-size:inherit;color:inherit;line-height:inherit",
                    ],
                    qd
                ),
                yl = w(function (a) {
                    a = T(a);
                    a = Rr(a.search.substring(1));
                    a["_ym_status-check"] = a["_ym_status-check"] || "";
                    a._ym_lang = a._ym_lang || "ru";
                    return a;
                }),
                Xi = v(yl, U("_ym_status-check"), Ja),
                It = v(yl, U("_ym_lang")),
                $p = /^http:\/\/([\w\-.]+\.)?webvisor\.com\/?$/,
                aq =
                    /^https:\/\/([\w\-.]+\.)?metri[kc]a\.yandex\.(ru|by|kz|com|com\.tr)\/?$/,
                Wi = eb(
                    /^https:\/\/(yastatic\.net\/s3\/metrika|s3\.mds\.yandex\.net\/internal-metrika-betas|[\w-]+\.dev\.webvisor\.com|[\w-]+\.dev\.metrika\.yandex\.ru)\/(\w|-|\/|(\.)(?!\.))+\.js$/
                ),
                fq = ["form", "button", "phone", "status"],
                gh = [],
                bq = w(
                    function (a, c, b) {
                        x(v(Mc([a, c, b]), ma), gh);
                        if (b.inline) {
                            c = Vi(b);
                            var d = b.data;
                            b = b.id;
                            Ri(
                                a,
                                c,
                                void 0 === b ? "" : b,
                                void 0 === d ? "" : d
                            );
                        } else
                            b.resource &&
                                Wi(b.resource) &&
                                ((a._ym__postMessageEvent = c),
                                (a._ym__inpageMode = b.inpageMode),
                                (a._ym__initMessage = b.initMessage),
                                gq(a, b.resource));
                    },
                    function (a, c, b) {
                        return b.id;
                    }
                ),
                Jt = B("cs.init", function (a, c) {
                    var b,
                        d = Xi(a);
                    if (d && c.id === d && "0" === c.ca) {
                        var e = Vi(
                            ((b = {}),
                            (b.lang = It(a)),
                            (b.fileId = "status"),
                            b)
                        );
                        S(a, C([a, e, "" + d], Ri), 0, "cs");
                    }
                }),
                Kt = B("suid.int", function (a, c) {
                    var b;
                    return (
                        (b = {}),
                        (b.setUserID = function (d, e, f) {
                            if (ia(d) || mc(a, d)) {
                                var g = Ea(a, c);
                                d = qd(["__ym", "user_id", d]);
                                g.params(d, e || D, f);
                            } else pc(a, K(c)).error("wuid");
                        }),
                        b
                    );
                }),
                Vc = { position: "absolute" },
                Qi = { position: "fixed" },
                Yf = { borderRadius: "50%" },
                Lt = mb("siteStatistics", function (a, c) {
                    if (
                        !($e(a) || yd(a) || /mobile/i.test(lb(a))) &&
                        W(n(a, "orientation"))
                    )
                        return Nb(a)(
                            Ra(
                                D,
                                C(
                                    [
                                        c,
                                        v(
                                            U("settings.sm"),
                                            Ba(1),
                                            C([C([a, c.id], Yp), D], xd),
                                            ma
                                        ),
                                    ],
                                    qa
                                )
                            )
                        );
                }),
                Mt = B("up.int", function (a, c) {
                    var b;
                    return (
                        (b = {}),
                        (b.userParams = E(a, "up.c", function (d, e, f) {
                            var g,
                                h = Ea(a, c),
                                k = pc(a, K(c)).warn;
                            h
                                ? ka(d)
                                    ? ((d = ((g = {}), (g.__ymu = d), g)),
                                      (g = h.params) && g(d, e || D, f))
                                    : k("wup")
                                : k("nci");
                        })),
                        b
                    );
                }),
                Nt = /[\*\.\?\(\)]/g,
                Ot = w(function (a, c, b) {
                    var d;
                    try {
                        var e = b.replace("\\s", " ").replace(Nt, "");
                        pc(a, "").warn("nnw", ((d = {}), (d.name = e), d));
                    } catch (f) {}
                }, fb),
                Pt = B("r.nn", function (a) {
                    Te(a) &&
                        Ie(a, Hg, function (c) {
                            c.ya.F(function (b) {
                                Ot(a, b[1], b[0]);
                                Hg.splice(100);
                            });
                        });
                }),
                Qt = B("e.a.p", function (a, c) {
                    var b,
                        d = Ea(a, c);
                    d = C(
                        [
                            v(R, Ha(!0)),
                            ua(
                                z(u(d, n), [
                                    "clickmap",
                                    "trackLinks",
                                    "accurateTrackBounce",
                                ])
                            ),
                        ],
                        z
                    );
                    c.Og && d();
                    return (b = {}), (b.enableAll = d), b;
                }),
                Rt = w(Kc, K),
                St = B("fpi", function (a) {
                    var c = Ad(a);
                    if (c && !a.document.hidden) {
                        var b = J(a).Ga;
                        b("fpe", 1);
                        var d = fa(a).F(
                            a,
                            ["visibilitychange", "webkitvisibilitychange"],
                            function () {
                                a.document.hidden && (b("fht", c.now()), d());
                            }
                        );
                    }
                }),
                Tt = w(function (a) {
                    a = n(a, "console");
                    var c = n(a, "log");
                    c = We("log", c) ? I(c, a) : D;
                    var b = n(a, "warn");
                    b = We("warn", b) ? I(b, a) : c;
                    var d = n(a, "error");
                    a = We("error", d) ? I(d, a) : c;
                    return { log: c, error: a, warn: b };
                }),
                Ut = u("add", Ae),
                Vt = u("remove", Ae),
                Wt = u("detail", Ae),
                Xt = u("purchase", Ae),
                Yt =
                    "FB_IAB FBAV OKApp GSA/ yandex yango uber EatsKit YKeyboard iOSAppUslugi YangoEats PassportSDK".split(
                        " "
                    ),
                tf = w(function (a) {
                    var c = Xk(a);
                    a = c.cg;
                    if (!c.gf) return !1;
                    c = Ga("indexOf", a);
                    c = $a(v(c, Ba(-1), Hc), Yt);
                    var b =
                            /CFNetwork\/[0-9][0-9.]*.*Darwin\/[0-9][0-9.]*/.test(
                                a
                            ),
                        d = /YaBrowser\/[\d.]+/.test(a),
                        e = /Mobile/.test(a);
                    return c || b || (d && e) || (!/Safari/.test(a) && e);
                }),
                gn = w(function (a) {
                    var c = lb(a);
                    return c ? ib(c, "YangoEats") || zd(a) : !1;
                }),
                Wp = /([0-9\\.]+) Safari/,
                Zt = /\sYptp\/\d\.(\d+)\s/,
                zl = w(function (a) {
                    var c;
                    a: {
                        if ((c = lb(a)) && (c = Zt.exec(c)) && 1 < c.length) {
                            c = Ja(c[1]);
                            break a;
                        }
                        c = 0;
                    }
                    return (50 <= c && 99 >= c) || Bf(a, 79)
                        ? !1
                        : !Vd(a) || tf(a);
                }),
                Al =
                    "monospace;sans-serif;serif;Andale Mono;Arial;Arial Black;Arial Hebrew;Arial MT;Arial Narrow;Arial Rounded MT Bold;Arial Unicode MS;Bitstream Vera Sans Mono;Book Antiqua;Bookman Old Style;Calibri;Cambria;Cambria Math;Century;Century Gothic;Century Schoolbook;Comic Sans;Comic Sans MS;Consolas;Courier;Courier New;Garamond;Geneva;Georgia;Helvetica;Helvetica Neue;Impact;Lucida Bright;Lucida Calligraphy;Lucida Console;Lucida Fax;LUCIDA GRANDE;Lucida Handwriting;Lucida Sans;Lucida Sans Typewriter;Lucida Sans Unicode;Microsoft Sans Serif;Monaco;Monotype Corsiva;MS Gothic;MS Outlook;MS PGothic;MS Reference Sans Serif;MS Sans Serif;MS Serif;MYRIAD;MYRIAD PRO;Palatino;Palatino Linotype;Segoe Print;Segoe Script;Segoe UI;Segoe UI Light;Segoe UI Semibold;Segoe UI Symbol;Tahoma;Times;Times New Roman;Times New Roman PS;Trebuchet MS;Verdana;Wingdings;Wingdings 2;Wingdings 3".split(
                        ";"
                    ),
                $t = w(function (a) {
                    a = db(a)("canvas");
                    var c = n(a, "getContext");
                    if (!c) return null;
                    try {
                        var b = I(c, a)("2d");
                        b.font = "72px mmmmmmmmmmlli";
                        var d = b.measureText("mmmmmmmmmmlli").width;
                        return function (e) {
                            b.font = "72px " + e;
                            return b.measureText("mmmmmmmmmmlli").width === d;
                        };
                    } catch (e) {
                        return null;
                    }
                }),
                Bl = oa(String.prototype.repeat, "repeat"),
                ki = Bl
                    ? function (a, c) {
                          return Bl.call(a, c);
                      }
                    : Tp,
                ei = u(!0, function (a, c, b, d) {
                    b = c.length && (b - d.length) / c.length;
                    if (0 >= b) return d;
                    c = ki(c, b);
                    return a ? c + d : d + c;
                }),
                Xe = [2277735313, 289559509],
                Ye = [1291169091, 658871167],
                au = B("p.cd", function (a) {
                    if (yd(a) || $e(a)) {
                        var c = Va(a);
                        if (ca(c.C("jn"))) {
                            c.D("jn", !1);
                            var b = a.chrome || Bd(a) ? function () {} : /./;
                            a = Tt(a);
                            b.toString = function () {
                                c.D("jn", !0);
                                return "Yandex.Metrika counter is initialized";
                            };
                            a.log("%c%s", "color: inherit", b);
                        }
                    }
                }),
                bu = w(function (a) {
                    a = n(a, "navigator.plugins");
                    return !!(
                        a &&
                        Sa(a) &&
                        $a(v(U("name"), eb(/Chrome PDF Viewer/)), a)
                    );
                }),
                Rb = ra(function (a, c) {
                    return J(c).C(a, null);
                }),
                Qp = {
                    "*": "+",
                    "-": "/",
                    hj: "=",
                    "+": "*",
                    "/": "-",
                    "=": "_",
                },
                cu = w(function (a) {
                    return P(n(a, "yandex.getSiteUid"))
                        ? a.yandex.getSiteUid()
                        : null;
                }),
                du = w(u("panoramaId", ye)),
                eu = w(function (a) {
                    return ye("pubcid.org", a) || ye("_pubCommonId", a);
                }),
                fu = w(u("_sharedid", ye)),
                gu = w(function (a, c) {
                    if (c.Ta) return null;
                    var b = he(a, "").C("_ga");
                    return b && ld(ee(b));
                }, v(fb, K)),
                Mp = [
                    ["domainLookupEnd", "domainLookupStart"],
                    ["connectEnd", "connectStart"],
                    ["responseStart", "requestStart"],
                    ["responseEnd", "responseStart"],
                    ["fetchStart", "navigationStart"],
                    ["redirectEnd", "redirectStart"],
                    [
                        function (a, c) {
                            return (
                                n(c, "redirectCount") ||
                                n(a, "navigation.redirectCount")
                            );
                        },
                    ],
                    ["domInteractive", "domLoading"],
                    ["domContentLoadedEventEnd", "domContentLoadedEventStart"],
                    ["domComplete", "navigationStart"],
                    ["loadEventStart", "navigationStart"],
                    ["loadEventEnd", "loadEventStart"],
                    ["domContentLoadedEventStart", "navigationStart"],
                ],
                yb,
                Lp = [
                    ["domainLookupEnd", "domainLookupStart"],
                    ["connectEnd", "connectStart"],
                    ["responseStart", "requestStart"],
                    ["responseEnd", "responseStart"],
                    ["fetchStart"],
                    ["redirectEnd", "redirectStart"],
                    ["redirectCount"],
                    ["domInteractive", "responseEnd"],
                    ["domContentLoadedEventEnd", "domContentLoadedEventStart"],
                    ["domComplete"],
                    ["loadEventStart"],
                    ["loadEventEnd", "loadEventStart"],
                    ["domContentLoadedEventStart"],
                ],
                Ni =
                    ((yb = {}),
                    (yb.responseEnd = 1),
                    (yb.domInteractive = 1),
                    (yb.domContentLoadedEventStart = 1),
                    (yb.domContentLoadedEventEnd = 1),
                    (yb.domComplete = 1),
                    (yb.loadEventStart = 1),
                    (yb.loadEventEnd = 1),
                    (yb.unloadEventStart = 1),
                    (yb.unloadEventEnd = 1),
                    (yb.secureConnectionStart = 1),
                    yb),
                Op = w(Fd),
                Ip = w(Kc),
                Jp = w(function (a) {
                    var c = n(a, "webkitRequestFileSystem");
                    if (P(c) && !yd(a))
                        return new L(I(c, a, 0, 0))
                            .then(function () {
                                var d = n(a, "navigator.storage") || {};
                                return d.estimate ? d.estimate() : {};
                            })
                            .then(function (d) {
                                return (d = d.quota) && 12e7 > d ? !0 : !1;
                            })
                            ["catch"](u(!0, R));
                    if (Qd(a))
                        return (
                            (c = n(a, "navigator.serviceWorker")),
                            L.resolve(W(c))
                        );
                    c = n(a, "openDatabase");
                    if (Bd(a) && P(c)) {
                        var b = !1;
                        try {
                            c(null, null, null, null);
                        } catch (d) {
                            b = !0;
                        }
                        return L.resolve(b);
                    }
                    return L.resolve(
                        !n(a, "indexedDB") &&
                            (n(a, "PointerEvent") || n(a, "MSPointerEvent"))
                    );
                }),
                hu = /(\?|&)turbo_uid=([\w\d]+)($|&)/,
                iu = w(function (a, c) {
                    var b = Uc(a),
                        d = T(a).search.match(hu);
                    return d && 2 <= d.length
                        ? ((d = d[2]), c.Ta || b.D("turbo_uid", d), d)
                        : (b = b.C("turbo_uid"))
                        ? b
                        : "";
                }),
                tp = [
                    [
                        ["'(-$&$&$'", 30102, 0],
                        ["'(-$&$&$'", 29009, 0],
                    ],
                    [
                        ["oWdZ[nc[jh_YW$Yec", 30103, 1],
                        ["oWdZ[nc[jh_YW$Yec", 29010, 1],
                    ],
                ],
                up = [
                    [["oWdZ[nc[jh_YW$Yec", 30103, 1]],
                    [["oWdZ[nc[jh_YW$Yec", 29010, 1]],
                ],
                Mi = { J: { t: 'UV|L7,!"T[rwe&D_>ZIb\\aW#98Y.PC6k' } },
                qp = { pe: 60, error: 15 },
                pp = { pe: 5, error: 1 },
                Ki = { id: 42822899, ca: "0" },
                ju = B("pa.plgn", function (a, c) {
                    var b = le(a, c);
                    b &&
                        b.$.F(
                            ["pluginInfo"],
                            E(a, "c.plgn", function () {
                                var d = J(a);
                                d.D("cmc", d.C("cmc", 0) + 1);
                                return qk(c);
                            })
                        );
                }),
                Sb,
                pb,
                $m =
                    ((Sb = {}),
                    (Sb.am = "com.am"),
                    (Sb.tr = "com.tr"),
                    (Sb.ge = "com.ge"),
                    (Sb.il = "co.il"),
                    (Sb["\u0440\u0444"] = "ru"),
                    (Sb["xn--p1ai"] = "ru"),
                    (Sb["\u0431\u0435\u043b"] = "by"),
                    (Sb["xn--90ais"] = "by"),
                    Sb),
                Cl = {
                    "mc.edadeal.ru": /^([^/]+\.)?edadeal\.ru$/,
                    "mc.yandexsport.ru": /^([^/]+\.)?yandexsport\.ru$/,
                    "mc.kinopoisk.ru": /^([^/]+\.)?kinopoisk\.ru$/,
                },
                an =
                    ((pb = {}),
                    (pb.ka = "ge"),
                    (pb.ro = "md"),
                    (pb.tg = "tj"),
                    (pb.tk = "tm"),
                    (pb.et = "ee"),
                    (pb.hy = "com.am"),
                    (pb.he = "co.li"),
                    (pb.ky = "kg"),
                    (pb.be = "by"),
                    (pb.tr = "com.tr"),
                    (pb.kk = "kz"),
                    pb),
                Dl = /^https?:\/\//,
                ku = {
                    1882689622: 1,
                    2318205080: 1,
                    3115871109: 1,
                    3604875100: 1,
                    339366994: 1,
                    2890452365: 1,
                    849340123: 1,
                    173872646: 1,
                    2343947156: 1,
                    655012937: 1,
                    3724710748: 1,
                    3364370932: 1,
                    1996539654: 1,
                    2065498185: 1,
                    823651274: 1,
                    12282461: 1,
                    1555719328: 1,
                    1417229093: 1,
                    138396985: 1,
                    3015043526: 1,
                },
                El = w(function () {
                    return N(
                        function (a, c) {
                            var b = gc(c + "/tag.js");
                            a[b] = 1;
                            return a;
                        },
                        {},
                        [
                            "mc.yandex.ru/metrika",
                            "mc.yandex.com/metrika",
                            "cdn.jsdelivr.net/npm/yandex-metrica-watch",
                        ]
                    );
                }),
                lu = w(function (a) {
                    a = Ad(a);
                    if (!a || !P(a.getEntriesByType)) return null;
                    a = a.getEntriesByType("resource");
                    var c = El();
                    return (a = tb(function (b) {
                        b = b.name.replace(Dl, "").split("?")[0];
                        b = gc(b);
                        return c[b];
                    }, a))
                        ? sb(a.transferSize)
                        : null;
                }),
                Dp = "ar:1:pv:1:v:" + xa.ab + ":vf:" + $c.version,
                Ep = xa.Qa + "//" + jc + "/watch/" + xa.gg,
                Fl = {},
                mu = B("exps.int", function (a, c) {
                    var b;
                    return (
                        (b = {}),
                        (b.experiments = function (d, e, f) {
                            var g, h;
                            void 0 === e && (e = D);
                            if (d && 0 < d.length) {
                                var k = va(a, "e", c),
                                    l = Hd(c).url;
                                d = k(
                                    {
                                        K: Ka(
                                            ((g = {}),
                                            (g.ex = 1),
                                            (g.ar = 1),
                                            g)
                                        ),
                                        J:
                                            ((h = {}),
                                            (h["page-url"] = l || T(a).href),
                                            (h.exp = d),
                                            h),
                                    },
                                    c
                                );
                                return Wc(a, "exps.s", d, e, f);
                            }
                        }),
                        b
                    );
                }),
                uf = [],
                nu = B("p.fh", function (a, c) {
                    var b, d;
                    void 0 === c && (c = !0);
                    var e = Va(a),
                        f = ja(a),
                        g = e.C("wasSynced"),
                        h = { id: 3, ca: "0" };
                    return c && g && g.time + 864e5 > f(Z)
                        ? L.resolve(g)
                        : va(
                              a,
                              "f",
                              h
                          )(
                              {
                                  K: Ka(((b = {}), (b.pv = 1), b)),
                                  J:
                                      ((d = {}),
                                      (d["page-url"] = T(a).href),
                                      (d["page-ref"] = a.document.referrer),
                                      d),
                              },
                              h
                          )
                              .then(function (k) {
                                  var l;
                                  k =
                                      ((l = {}),
                                      (l.time = f(Z)),
                                      (l.params = n(k, "settings")),
                                      (l.bkParams = n(k, "userData")),
                                      l);
                                  e.D("wasSynced", k);
                                  return k;
                              })
                              ["catch"](E(a, "f.h"));
                }),
                ou = ra(function (a, c) {
                    0 === parseFloat(n(c, "settings.c_recp")) &&
                        (a.Nd.D("ymoo" + a.qa, a.Xf(qb)),
                        a.gd && a.gd.destruct && a.gd.destruct());
                }),
                zf = v(U("settings.pcs"), Ba("1")),
                Gl = jc.split("."),
                pu = Gl.pop(),
                Hl = G(".", Gl),
                Zm = w(function (a) {
                    a = T(a).hostname.split(".");
                    return a[a.length - 1];
                }),
                Ih = w(function (a) {
                    return (
                        -1 !==
                        T(a).hostname.search(
                            /(?:^|\.)(?:ya|yandex|beru|kinopoisk|edadeal)\.(?:\w+|com?\.\w+)$/
                        )
                    );
                }),
                qu =
                    /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|yastatic\.net|.*\.yandex|turbopages\.org|turbo\.site|diplodoc\.(com|tech)|datalens\.tech)$/,
                ke = w(function (a) {
                    a = T(a).hostname;
                    var c = !1;
                    a && (c = -1 !== a.search(qu));
                    return c;
                }),
                ru =
                    /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|.*\.yandex|turbopages\.org|turbo\.site)$/,
                wp = w(function (a) {
                    a = T(a).hostname;
                    var c = !1;
                    a && (c = -1 !== a.search(ru));
                    return c;
                }),
                wh = xa.Qa + "//" + jc + "/metrika",
                re = wh + "/metrika_match.html",
                cf,
                Ap = ((cf = {}), (cf.s = "p"), (cf["8"] = "i"), cf),
                xp = mb("csp", function (a, c) {
                    return va(
                        a,
                        "s",
                        c
                    )({}, ["https://ymetrica1.com/watch/3/1"]);
                }),
                hh = "et w v z i u vf".split(" "),
                Il = Od("wv"),
                su = Od("pub"),
                zi = (function () {
                    function a(c, b) {
                        this.l = c;
                        this.type = b;
                    }
                    a.isEnabled = function (c) {
                        return !!c.JSON;
                    };
                    a.prototype.Fa = function (c) {
                        return If(Mb(this.l, c));
                    };
                    a.prototype.sb = function (c) {
                        var b = c.data;
                        "string" !== typeof b && (b = Mb(this.l, c.data));
                        return b;
                    };
                    a.prototype.jb = function (c) {
                        return encodeURIComponent(c).length;
                    };
                    a.prototype.ke = function (c, b) {
                        for (
                            var d = Math.ceil(c.length / b), e = [], f = 0;
                            f < b;
                            f += 1
                        )
                            e.push(c.slice(f * d, d * (f + 1)));
                        return e;
                    };
                    return a;
                })(),
                kp = w(function (a) {
                    function c(f, g, h, k) {
                        d[0] = g;
                        h[k] = e[3];
                        h[k + 1] = e[2];
                        h[k + 2] = e[1];
                        h[k + 3] = e[0];
                    }
                    function b(f, g, h, k) {
                        d[0] = g;
                        h[k] = e[0];
                        h[k + 1] = e[1];
                        h[k + 2] = e[2];
                        h[k + 3] = e[3];
                    }
                    if (
                        "undefined" === typeof a.Float32Array ||
                        "undefined" === typeof a.Uint8Array
                    )
                        return lp;
                    var d = new Float32Array([-0]),
                        e = new Uint8Array(d.buffer);
                    return 128 === e[3] ? b : c;
                }),
                gp = Ii(!1),
                fp = Ii(!0),
                ba,
                Lc,
                Jl =
                    ((ba = {}),
                    (ba.mousemove = 0),
                    (ba.mouseup = 1),
                    (ba.mousedown = 2),
                    (ba.click = 3),
                    (ba.scroll = 4),
                    (ba.windowblur = 5),
                    (ba.windowfocus = 6),
                    (ba.focus = 7),
                    (ba.blur = 8),
                    (ba.eof = 9),
                    (ba.selection = 10),
                    (ba.change = 11),
                    (ba.input = 12),
                    (ba.touchmove = 13),
                    (ba.touchstart = 14),
                    (ba.touchend = 15),
                    (ba.touchcancel = 16),
                    (ba.touchforcechange = 17),
                    (ba.zoom = 18),
                    (ba.resize = 19),
                    (ba.keystroke = 20),
                    (ba.deviceRotation = 21),
                    (ba.fatalError = 22),
                    (ba.hashchange = 23),
                    (ba.stylechange = 24),
                    (ba.articleInfo = 25),
                    (ba.publishersHeader = 26),
                    (ba.pageData = 27),
                    (ba.mutationAdd = 28),
                    (ba.mutationRemove = 29),
                    (ba.mutationTextChange = 30),
                    (ba.mutationAttributesChange = 31),
                    ba),
                Kl =
                    ((Lc = {}),
                    (Lc.page = 0),
                    (Lc.event = 1),
                    (Lc.mutation = 2),
                    (Lc.publishers = 3),
                    (Lc.activity = 4),
                    Lc),
                yi = (function () {
                    function a(c, b) {
                        var d,
                            e,
                            f = this;
                        this.isSync = !1;
                        this.Cb = [];
                        this.Qg =
                            ((d = {}),
                            (d.ad = "mutationAdd"),
                            (d.re = "mutationRemove"),
                            (d.tc = "mutationTextChange"),
                            (d.ac = "mutationAttributesChange"),
                            (d.page = "pageData"),
                            d);
                        this.Lg =
                            ((e = {}),
                            (e.ad = "addedNodesMutation"),
                            (e.re = "removedNodesMutation"),
                            (e.tc = "textChangeMutation"),
                            (e.ac = "attributesChangeMutation"),
                            (e.touchmove = "touchEvent"),
                            (e.touchstart = "touchEvent"),
                            (e.touchend = "touchEvent"),
                            (e.touchforcechange = "touchEvent"),
                            (e.touchcancel = "touchEvent"),
                            (e.resize = "resizeEvent"),
                            (e.scroll = "scrollEvent"),
                            (e.change = "changeEvent"),
                            (e.mousemove = "mouseEvent"),
                            (e.mousedown = "mouseEvent"),
                            (e.mouseup = "mouseEvent"),
                            (e.click = "mouseEvent"),
                            (e.focus = "focusEvent"),
                            (e.blur = "focusEvent"),
                            (e.deviceRotation = "deviceRotationEvent"),
                            (e.zoom = "zoomEvent"),
                            (e.keystroke = "keystrokesEvent"),
                            (e.selection = "selectionEvent"),
                            (e.stylechange = "styleChangeEvent"),
                            (e.fatalError = "fatalErrorEvent"),
                            (e.pageData = "page"),
                            e);
                        this.lh = function (g) {
                            var h = g.type;
                            return g.event ||
                                ("publishersHeader" !== h &&
                                    "articleInfo" !== h)
                                ? {
                                      type: Kl[h],
                                      event: Jl[f.Qg[g.event] || g.event],
                                  }
                                : { type: Kl.publishers, event: Jl[h] };
                        };
                        this.nf = function (g) {
                            var h = !W(g.partNum),
                                k = f.lh(g);
                            k = {
                                stamp: g.stamp,
                                type: k.type,
                                event: k.event,
                                frameId: g.frameId,
                                chunk: h ? g.data : void 0,
                                partNum: g.partNum,
                                end: g.end,
                            };
                            !h &&
                                g.data &&
                                (h = f.Lg[g.event] || g.event || g.type) &&
                                (k[h] = g.data);
                            return k;
                        };
                        this.l = c;
                        this.type = b;
                    }
                    a.prototype.Fa = function (c, b) {
                        var d = this;
                        void 0 === b && (b = !1);
                        var e = ec(c, this.nf),
                            f = this.isSync || b ? Infinity : 10;
                        e = md(this.l, e, f);
                        var g = [e];
                        this.Cb.push(e);
                        return e(
                            Ug(function (h) {
                                h = Bi(d.l, Wo, { vi: h });
                                h = md(d.l, h, f, wg);
                                g.push(h);
                                d.Cb.push(h);
                                return h;
                            })
                        )(
                            Ug(function (h) {
                                h = Ai(d.l, h.slice(-4));
                                h = md(d.l, h, f, wg);
                                g.push(h);
                                d.Cb.push(h);
                                return h;
                            })
                        )(
                            ml(function (h) {
                                h = h[h.length - 1];
                                x(function (k) {
                                    k = Je(d.l)(k, d.Cb);
                                    d.Cb.splice(k, 1);
                                }, g);
                                return h;
                            })
                        );
                    };
                    a.prototype.sb = function (c) {
                        return Bi(this.l, Ci, this.nf(c))(xg(D));
                    };
                    a.prototype.jb = function (c) {
                        return c[0];
                    };
                    a.prototype.ke = function (c, b) {
                        for (
                            var d = Ai(this.l, c)(xg(D)),
                                e = Math.ceil(d.length / b),
                                f = [],
                                g = 0;
                            g < b;
                            g += 1
                        )
                            f.push(d.slice(g * e, e * (g + 1)));
                        return f;
                    };
                    a.isEnabled = function (c) {
                        var b = Te(c),
                            d = !1;
                        try {
                            d =
                                (d = 2 === new c.Blob(["\u00e4"]).size) &&
                                2 ===
                                    new c.Blob([new c.Uint8Array([1, 2])]).size;
                        } catch (e) {}
                        return (
                            !b &&
                            d &&
                            !(
                                !c.Uint8Array ||
                                !n(c, "Uint8Array.prototype.slice")
                            )
                        );
                    };
                    return a;
                })(),
                Ll =
                    "resize scroll mousemove mousedown click windowfocus keydown orientationchange change focus touchmove touchstart".split(
                        " "
                    ),
                tu =
                    "id pageTitle stamp chars authors updateDate publicationDate pageUrlCanonical topics rubric".split(
                        " "
                    ),
                uu = (function () {
                    function a(c, b, d, e, f) {
                        var g = this;
                        this.xc = !1;
                        this.meta = {};
                        this.scroll = { x: 0, y: 0 };
                        this.involvedTime = this.lf = 0;
                        this.Od = this.tf = "";
                        this.fa = [];
                        this.ie = this.Ia = 0;
                        this.wb = { h: 0, w: 0 };
                        this.buffer = [];
                        this.hg = tu;
                        this.flush = function () {
                            g.ie = S(g.l, g.flush, 2500);
                            var h = g.wd();
                            if (g.buffer.length || h) {
                                var k = Ve(g.buffer);
                                h && k.push(h);
                                g.tf = g.Od;
                                g.ja.Fa(k)(
                                    Ra(E(g.l, "p.b.st"), function (l) {
                                        l && g.Qb(l);
                                    })
                                );
                            }
                        };
                        this.Qb = e;
                        this.ja = d;
                        this.Vb = I(this.Vb, this);
                        this.wd = I(this.wd, this);
                        this.flush = I(this.flush, this);
                        this.l = c;
                        this.qa = f;
                        this.Mc = b;
                        this.Jd = "pai" + b.id;
                        this.Gb();
                        this.Me = fa(this.l);
                        this.time = ja(this.l);
                        this.ag();
                        this.zd = J(this.l);
                        this.ye = null;
                    }
                    a.prototype.start = function () {
                        this.ie = S(this.l, this.flush, 2500);
                        if (!this.xc) {
                            this.Fi();
                            var c = this.zd.C(this.Jd, []),
                                b = !c.length;
                            c.push(I(this.Rh, this));
                            this.zd.Ga(this.Jd, c);
                            b && this.Ff();
                            this.ye = fa(this.l).F(
                                this.l,
                                ["click"],
                                I(this.Di, this)
                            );
                            this.Vb({ type: "page", target: this.l });
                        }
                    };
                    a.prototype.stop = function () {
                        this.Ui();
                        this.xc = !0;
                        this.flush();
                        la(this.l, this.ie);
                    };
                    a.prototype.hf = function (c) {
                        return (
                            oc("html", this.l, c) !==
                            this.l.document.documentElement
                        );
                    };
                    a.prototype.Ff = function () {
                        var c = this;
                        E(this.l, "p.ic" + this.Mc.id, function () {
                            if (!c.xc) {
                                var b = c.zd.C(c.Jd),
                                    d = c.Mc.Wg();
                                x(function (e) {
                                    var f = z(function (g) {
                                        return A({}, g);
                                    }, d);
                                    P(e) && e(f);
                                }, b);
                                c.Ia = S(c.l, I(c.Ff, c), 1e3, "p");
                            }
                        })();
                    };
                    a.prototype.Rh = function (c) {
                        this.xc || (this.Vi(c), this.Wi(), this.zg());
                    };
                    a.prototype.Eg = function (c, b) {
                        return (c.de || 0) <= (b.de || 0) ? b : c;
                    };
                    a.prototype.Di = function (c) {
                        if (this.fa.length) {
                            c = oj(c);
                            var b = T(this.l).hostname,
                                d;
                            if ((d = c)) d = He(c.hostname) === He(b);
                            d &&
                                ((c = N(this.Eg, this.fa[0], this.fa).id),
                                (b = Dc(this.l)),
                                cd(this.l, this.qa.split(":")[0]).D(
                                    "pai",
                                    c + "-" + b
                                ));
                        }
                    };
                    a.prototype.Vb = function (c) {
                        var b = this;
                        E(this.l, "p.ec." + this.Mc.id, function () {
                            var d, e;
                            try {
                                var f = c.type;
                                var g = c.target;
                            } catch (p) {
                                return;
                            }
                            var h = "page" === f;
                            if ("scroll" === f || h) {
                                var k = [
                                    b.l,
                                    b.l.document,
                                    b.l.document.documentElement,
                                    Ic(b.l),
                                ];
                                H(g, k) && b.Gb();
                            }
                            ("resize" === f || h) && b.ag();
                            f = b.time(Z);
                            var l = Math.min(f - b.lf, 5e3);
                            b.involvedTime += Math.round(l);
                            b.lf = f;
                            if (b.meta && b.scroll && b.wb) {
                                var m = b.wb.h * b.wb.w;
                                b.fa = z(function (p) {
                                    var q = A({}, p),
                                        r = b.meta[q.id],
                                        t = Oc(p.Bb);
                                    if (!r || b.hf(q.element) || !t) return q;
                                    p = b.l.Math;
                                    r = p.max(
                                        (b.scroll.y + b.wb.h - r.y) / r.height,
                                        0
                                    );
                                    var y = t.height * t.width;
                                    t = Gh(b.l, t, b.wb);
                                    q.de = t / m;
                                    q.visibility = t / y;
                                    if (0.9 <= q.visibility || 0.1 <= q.de)
                                        q.involvedTime += l;
                                    q.maxScrolled = p.round(1e4 * r) / 1e4;
                                    return q;
                                }, b.fa);
                                ub(
                                    b.l,
                                    ((d = {}),
                                    (d.name = "publishers"),
                                    (d.counterKey = b.qa),
                                    (d.data =
                                        ((e = {}),
                                        (e.involvedTime = b.involvedTime),
                                        (e.contentItems = z(function (p) {
                                            var q;
                                            return A(
                                                ((q = {}),
                                                (q.contentElement = p.Bb),
                                                q),
                                                p
                                            );
                                        }, b.fa)),
                                        e)),
                                    d)
                                );
                            }
                        })();
                    };
                    a.prototype.Vi = function (c) {
                        var b = z(function (d) {
                            return d.id;
                        }, this.fa);
                        this.fa = this.fa.concat(
                            ha(function (d) {
                                return !H(d.id, b);
                            }, c)
                        );
                    };
                    a.prototype.ag = function () {
                        var c = fe(this.l) || Pc(this.l);
                        this.wb = { w: c[0], h: c[1] };
                    };
                    a.prototype.Wi = function () {
                        var c = this;
                        E(this.l, "p.um." + this.Mc.id, function () {
                            var b = [];
                            c.Gb();
                            c.meta = zb(
                                function (d, e) {
                                    var f;
                                    if (c.hf(e.element))
                                        b.push(e), delete d[e.id];
                                    else {
                                        var g =
                                            ((f = {}),
                                            (f.id = e.id),
                                            (f.involvedTime = Math.max(
                                                e.involvedTime,
                                                0
                                            )),
                                            (f.maxScrolled =
                                                e.maxScrolled || 0),
                                            (f.chars = e.update
                                                ? e.update("chars") || 0
                                                : 0),
                                            f);
                                        e.Bb &&
                                            (f = Oc(e.Bb)) &&
                                            ((g.x = Math.max(
                                                Math.round(f.left) + c.scroll.x,
                                                0
                                            )),
                                            (g.y = Math.max(
                                                Math.round(f.top) + c.scroll.y,
                                                0
                                            )),
                                            (g.width = Math.round(f.width)),
                                            (g.height = Math.round(f.height)));
                                        d[e.id] = g;
                                    }
                                    return d;
                                },
                                {},
                                c.fa
                            );
                            x(function (d) {
                                d = Je(c.l)(d, c.fa);
                                c.fa.splice(d, 1);
                            }, b);
                        })();
                    };
                    a.prototype.wd = function () {
                        var c,
                            b,
                            d = z(u(this.meta, n), ea(this.meta));
                        return d.length &&
                            ((this.Od = Mb(this.l, d)), this.tf !== this.Od)
                            ? ((c = {}),
                              (c.type = "publishersHeader"),
                              (c.data =
                                  ((b = {}),
                                  (b.articleMeta = d || []),
                                  (b.involvedTime = this.involvedTime),
                                  b)),
                              c)
                            : null;
                    };
                    a.prototype.zg = function () {
                        var c = this;
                        if (this.fa.length) {
                            var b = z(
                                function (d) {
                                    var e,
                                        f = N(
                                            function (g, h) {
                                                d[h] && (g[h] = d[h]);
                                                return g;
                                            },
                                            {},
                                            c.hg
                                        );
                                    d.Qf = !0;
                                    return (
                                        (e = {}),
                                        (e.type = "articleInfo"),
                                        (e.stamp = f.stamp),
                                        (e.data = f),
                                        e
                                    );
                                },
                                ha(function (d) {
                                    return !d.Qf;
                                }, this.fa)
                            );
                            b.length &&
                                ((this.buffer = this.buffer.concat(b)),
                                Ib(this.l, this.qa, ["pdf", b]));
                        }
                    };
                    a.prototype.Fi = function () {
                        this.Me.F(this.l, Ll, this.Vb);
                    };
                    a.prototype.Ui = function () {
                        this.ye && this.ye();
                        this.Me.vb(this.l, Ll, this.Vb);
                    };
                    a.prototype.Gb = function () {
                        this.scroll = {
                            x:
                                this.l.pageXOffset ||
                                n(
                                    this.l,
                                    "document.documentElement.scrollLeft"
                                ) ||
                                0,
                            y:
                                this.l.pageYOffset ||
                                n(
                                    this.l,
                                    "document.documentElement.scrollLeft"
                                ) ||
                                0,
                        };
                    };
                    return a;
                })(),
                Zd,
                ih = ((Zd = {}), (Zd[1] = 500), (Zd[2] = 500), (Zd[3] = 0), Zd),
                vu = ["topics", "rubric", "authors"],
                jh = (function () {
                    function a(c, b) {
                        var d,
                            e = this;
                        this.id = "a";
                        this.Ed = !1;
                        this.Db = {};
                        this.rb = {
                            "schema.org":
                                "Article NewsArticle Movie BlogPosting Review Recipe Answer".split(
                                    " "
                                ),
                            qf: ["article"],
                        };
                        this.we = ((d = {}), (d.Answer = 3), (d.Review = 2), d);
                        this.Pe = w(
                            function (f, g, h) {
                                var k;
                                Ib(
                                    e.l,
                                    e.qa,
                                    "pfi",
                                    ((k = {}),
                                    (k.field = f),
                                    (k.itemField = g),
                                    (k.value = h),
                                    k)
                                );
                            },
                            function (f, g, h) {
                                return "" + f + g + h;
                            }
                        );
                        this.Yi = function (f) {
                            vu.forEach(function (g) {
                                f[g] &&
                                    (f[g] = f[g].reduce(function (h, k) {
                                        var l = k.name,
                                            m = k.position;
                                        if (!l) return e.Pe(g, "name", l), h;
                                        if ("string" === typeof m) {
                                            l = oe(m);
                                            if (null === l || e.l.isNaN(l))
                                                return (
                                                    e.Pe(g, "position", m), h
                                                );
                                            k.position = l;
                                        }
                                        h.push(k);
                                        return h;
                                    }, []));
                            });
                            return f;
                        };
                        this.Fg = w(function (f, g) {
                            var h;
                            Ib(
                                e.l,
                                e.qa,
                                ["pcs", g],
                                ((h = {}),
                                (h.chars = g.chars),
                                (h.limit = ih[g.type]),
                                h)
                            );
                        });
                        this.l = c;
                        this.root = fc(c);
                        this.qa = b;
                    }
                    a.prototype.La = function (c) {
                        return c.element;
                    };
                    a.prototype.Xe = function (c, b) {
                        var d = this,
                            e;
                        E(this.l, "P.s." + b, function () {
                            e = d.Db[b].call(d, c);
                        })();
                        return e;
                    };
                    a.prototype.ui = function (c) {
                        var b = A({}, c);
                        this.Ed &&
                            !b.id &&
                            H(c.type, [3, 2]) &&
                            ((c = G(", ", z(U("name"), b.authors || []))),
                            (b.pageTitle = c + ": " + b.pageTitle));
                        b.pageTitle || (b.pageTitle = this.uh(b.Bb));
                        b.pageUrlCanonical ||
                            ((c = b.id),
                            (b.pageUrlCanonical = (
                                "string" !== typeof c
                                    ? 0
                                    : /^(https?:)\/\//.test(c)
                            )
                                ? b.id
                                : this.sh()));
                        b.id || (b.id = b.pageTitle || b.pageUrlCanonical);
                        return b;
                    };
                    a.prototype.Ca = function (c) {
                        var b = this,
                            d = {},
                            e = this.La(c);
                        if (!e) return null;
                        d.type = c.type;
                        x(function (g) {
                            d[g] = b.Xe(c, g);
                        }, ea(this.Db));
                        var f = ja(this.l);
                        d.stamp = f(gk);
                        d.element = c.element;
                        d.Bb = e;
                        d = this.Yi(this.ui(d));
                        d.id = d.id ? gc(d.id) : 1;
                        d.update = function (g) {
                            return b.La(c) ? b.Xe(c, g) : void 0;
                        };
                        return d;
                    };
                    a.prototype.uh = function (c) {
                        for (var b = 1; 5 >= b; b += 1) {
                            var d = bb(dc("h" + b, c));
                            if (d) return d;
                        }
                    };
                    a.prototype.sh = function () {
                        var c = dc('[rel="canonical"]', this.root);
                        if (c) return c.href;
                    };
                    a.prototype.bf = function () {
                        return 1;
                    };
                    a.prototype.nc = function () {
                        return [];
                    };
                    a.prototype.Wg = function () {
                        var c = this,
                            b = this.nc(),
                            d = 1;
                        return zb(
                            function (e, f) {
                                var g =
                                    c.Ca({ element: f, type: c.bf(f) }) || [];
                                O(g) || (g = [g]);
                                g = zb(
                                    function (h, k) {
                                        var l = h.values,
                                            m = h.df;
                                        k && k.chars > ih[k.type] && !H(k.id, m)
                                            ? (l.push(k), m.push(k.id))
                                            : k &&
                                              k.chars <= ih[k.type] &&
                                              c.Fg(k.id, k);
                                        return { values: l, df: m };
                                    },
                                    { values: [], df: z(U("id"), e) },
                                    g
                                ).values;
                                return e.concat(
                                    z(function (h) {
                                        var k;
                                        h = A(
                                            ((k = { index: d, Qf: !1 }),
                                            (k.involvedTime = 0),
                                            k),
                                            h
                                        );
                                        d += 1;
                                        return h;
                                    }, g)
                                );
                            },
                            [],
                            b
                        );
                    };
                    return a;
                })(),
                Ml = (function (a) {
                    function c() {
                        var b,
                            d =
                                (null !== a && a.apply(this, arguments)) ||
                                this;
                        d.id = "j";
                        d.Ed = !0;
                        d.Je = G(",", [
                            'script[type="application/ld+json"]',
                            'script[type="application/json+ld"]',
                            'script[type="ld+json"]',
                            'script[type="json+ld"]',
                        ]);
                        d.Db =
                            ((b = {}),
                            (b.id = function (e) {
                                var f = e.data["@id"];
                                e =
                                    e.data.mainEntity ||
                                    e.data.mainEntityOfPage;
                                !f && ka(e) && (f = e["@id"]);
                                return f;
                            }),
                            (b.chars = function (e) {
                                var f = e.data;
                                return ia(f.text)
                                    ? f.text.length
                                    : Kb(this.La(e)).length;
                            }),
                            (b.authors = function (e) {
                                e = e.data;
                                var f = [];
                                f = f.concat(this.lc(e, "author"));
                                f = f.concat(this.lc(e.mainEntity, "author"));
                                return f.concat(
                                    this.lc(e.mainEntityOfPage, "author")
                                );
                            }),
                            (b.pageTitle = function (e) {
                                var f = e.data,
                                    g = f.headline || "";
                                f.alternativeHeadline &&
                                    (g += " " + f.alternativeHeadline);
                                "" === g &&
                                    (f.name
                                        ? (g = f.name)
                                        : f.itemReviewed &&
                                          (g = f.itemReviewed));
                                3 === e.type &&
                                    ka(f.parentItem) &&
                                    (g = f.parentItem.text);
                                return g;
                            }),
                            (b.updateDate = function (e) {
                                return e.data.dateModified || "";
                            }),
                            (b.publicationDate = function (e) {
                                return e.data.datePublished || "";
                            }),
                            (b.pageUrlCanonical = function (e) {
                                return e.data.url;
                            }),
                            (b.topics = function (e) {
                                return this.lc(e.data, "about", [
                                    "name",
                                    "alternateName",
                                ]);
                            }),
                            (b.rubric = function (e) {
                                var f = this,
                                    g = this.La(e);
                                e = ua(
                                    z(function (h) {
                                        h = Lb(f.l, Kb(h));
                                        if (ka(h) || O(h)) {
                                            var k = f.Ye(h);
                                            if (k)
                                                return N(
                                                    function (l, m) {
                                                        return l
                                                            ? l
                                                            : ka(m) &&
                                                              "BreadcrumbList" ===
                                                                  m["@type"]
                                                            ? m
                                                            : l;
                                                    },
                                                    null,
                                                    k
                                                );
                                            if ("BreadcrumbList" === h["@type"])
                                                return h;
                                        }
                                        return null;
                                    }, [e.element].concat(
                                        jb(
                                            this.Je,
                                            document.body === g
                                                ? document.documentElement
                                                : g
                                        )
                                    ))
                                );
                                return e.length &&
                                    ((e = e[0].itemListElement), O(e))
                                    ? ua(
                                          z(function (h) {
                                              return ka(h) &&
                                                  h.item &&
                                                  ka(h.item) &&
                                                  !f.l.isNaN(h.position)
                                                  ? {
                                                        name:
                                                            h.item.name ||
                                                            h.name,
                                                        position: h.position,
                                                    }
                                                  : null;
                                          }, e)
                                      )
                                    : [];
                            }),
                            b);
                        return d;
                    }
                    Na(c, a);
                    c.prototype.lc = function (b, d, e) {
                        void 0 === e && (e = ["name"]);
                        if (!b || !b[d]) return [];
                        b = O(b[d]) ? b[d] : [b[d]];
                        b = ua(
                            z(function (f) {
                                return f
                                    ? "string" === typeof f
                                        ? f
                                        : N(
                                              function (g, h) {
                                                  return g || "" + f[h];
                                              },
                                              "",
                                              e
                                          )
                                    : null;
                            }, b)
                        );
                        return z(function (f) {
                            var g;
                            return (g = {}), (g.name = f), g;
                        }, b);
                    };
                    c.prototype.La = function (b) {
                        var d = b.element,
                            e = b.data || {};
                        b = e["@id"];
                        var f = e.url;
                        e = null;
                        f && ia(f) && (e = this.Oe(f));
                        !e && b && ia(b) && (e = this.Oe(b));
                        e ||
                            ((e = b = d.parentNode),
                            !oc("head", this.l, d) &&
                                b &&
                                0 !== Kb(b).length) ||
                            (e = this.l.document.body);
                        return e;
                    };
                    c.prototype.Oe = function (b) {
                        try {
                            var d = Sc(this.l, b).hash;
                            if (d) {
                                var e = dc(d, this.l.document.body);
                                if (e) return e;
                            }
                        } catch (f) {}
                        return null;
                    };
                    c.prototype.Ud = function (b) {
                        return this.we[b["@type"]] || 1;
                    };
                    c.prototype.Ca = function (b) {
                        var d = this,
                            e = b.element,
                            f = b.data;
                        if (
                            !f &&
                            ((f = Lb(this.l, Kb(e))),
                            !f || (!/schema\.org/.test(f["@context"]) && !O(f)))
                        )
                            return null;
                        var g = this.Ye(f);
                        if (g)
                            return z(function (k) {
                                return ka(k) &&
                                    H(k["@type"], d.rb["schema.org"])
                                    ? a.prototype.Ca.call(d, {
                                          element: e,
                                          data: k,
                                          type: d.Ud(k),
                                      })
                                    : null;
                            }, g);
                        b.data = f;
                        if ("QAPage" === b.data["@type"]) {
                            var h =
                                b.data.mainEntity || b.data.mainEntityOfPage;
                            if (!h) return null;
                        }
                        "Question" === b.data["@type"] && (h = b.data);
                        return h
                            ? ((b = xc(u(h, n), [
                                  "acceptedAnswer",
                                  "suggestedAnswer",
                              ])),
                              z(function (k) {
                                  var l;
                                  if (
                                      !ka(k) ||
                                      !H(k["@type"], d.rb["schema.org"])
                                  )
                                      return null;
                                  k = {
                                      element: e,
                                      type: d.Ud(k),
                                      data: A(
                                          ((l = {}), (l.parentItem = h), l),
                                          k
                                      ),
                                  };
                                  return a.prototype.Ca.call(d, k);
                              }, b))
                            : H(b.data["@type"], this.rb["schema.org"])
                            ? a.prototype.Ca.call(
                                  this,
                                  A(b, { type: this.Ud(b.data) })
                              )
                            : null;
                    };
                    c.prototype.nc = function () {
                        return jb(this.Je, this.root);
                    };
                    c.prototype.Ye = function (b) {
                        if (O(b)) return b;
                        if (b && O(b["@graph"])) return b["@graph"];
                    };
                    return c;
                })(jh),
                kh = (function (a) {
                    function c() {
                        var b,
                            d =
                                (null !== a && a.apply(this, arguments)) ||
                                this;
                        d.id = "s";
                        d.Ed = !0;
                        d.Ti = Ga(
                            "exec",
                            new RegExp(
                                "schema.org\\/(" + G("|", ea(d.we)) + ")$"
                            )
                        );
                        d.Db =
                            ((b = {}),
                            (b.id = function (e) {
                                e = e.element;
                                var f = gb(this.l, e, "identifier");
                                return f
                                    ? bb(f)
                                    : (f = gb(this.l, e, "mainEntityOfPage")) &&
                                      f.getAttribute("itemid")
                                    ? f.getAttribute("itemid")
                                    : null;
                            }),
                            (b.chars = function (e) {
                                var f = 0;
                                e = e.element;
                                for (
                                    var g = [
                                            "articleBody",
                                            "reviewBody",
                                            "recipeInstructions",
                                            "description",
                                            "text",
                                        ],
                                        h = 0;
                                    h < g.length;
                                    h += 1
                                ) {
                                    var k = gb(this.l, e, g[h]);
                                    if (k) {
                                        f = bb(k).length;
                                        break;
                                    }
                                }
                                e = Kb(e);
                                0 === f && e && (f += e.length);
                                return f;
                            }),
                            (b.topics = function (e) {
                                var f = this,
                                    g = Ud(this.l, e.element, "about");
                                return z(function (h) {
                                    var k = { name: bb(h) };
                                    if ((g = gb(f.l, h, "name")))
                                        k.name = bb(g);
                                    return k;
                                }, g);
                            }),
                            (b.rubric = function (e) {
                                var f = this;
                                (e = dc(
                                    '[itemtype$="schema.org/BreadcrumbList"]',
                                    e.element
                                )) ||
                                    (e = dc(
                                        '[itemtype$="schema.org/BreadcrumbList"]',
                                        this.root
                                    ));
                                return e
                                    ? z(function (g) {
                                          return {
                                              name: bb(gb(f.l, g, "name")),
                                              position: bb(
                                                  gb(f.l, g, "position")
                                              ),
                                          };
                                      }, Ud(this.l, e, "itemListElement"))
                                    : [];
                            }),
                            (b.updateDate = function (e) {
                                return (e = gb(
                                    this.l,
                                    e.element,
                                    "dateModified"
                                ))
                                    ? Ek(e)
                                    : "";
                            }),
                            (b.publicationDate = function (e) {
                                return (e = gb(
                                    this.l,
                                    e.element,
                                    "datePublished"
                                ))
                                    ? Ek(e)
                                    : "";
                            }),
                            (b.pageUrlCanonical = function (e) {
                                e = Ud(this.l, e.element, "url");
                                if (e.length) {
                                    var f = e[0];
                                    return f.href ? f.href : bb(e);
                                }
                                return null;
                            }),
                            (b.pageTitle = function (e) {
                                var f = "",
                                    g = e.element,
                                    h = gb(this.l, g, "headline");
                                h && (f += bb(h));
                                (h = gb(this.l, g, "alternativeHeadline")) &&
                                    (f += " " + bb(h));
                                "" === f &&
                                    ((h = gb(this.l, g, "name")) ||
                                        (h = gb(this.l, g, "itemReviewed")),
                                    h && (f += bb(h)));
                                3 === e.type &&
                                    (e = oc(
                                        '[itemtype$="schema.org/Question"]',
                                        this.l,
                                        g
                                    )) &&
                                    (e = gb(this.l, e, "text")) &&
                                    (f += bb(e));
                                return f;
                            }),
                            (b.authors = function (e) {
                                var f = this;
                                e = Ud(this.l, e.element, "author");
                                return z(function (g) {
                                    var h,
                                        k = ((h = {}), (h.name = ""), h);
                                    /.+schema.org\/(Person|Organization)/.test(
                                        g.getAttribute("itemtype") || ""
                                    ) &&
                                        (h = gb(f.l, g, "name")) &&
                                        (k.name = bb(h));
                                    k.name ||
                                        (k.name =
                                            g.getAttribute("content") ||
                                            Kb(g) ||
                                            g.getAttribute("href"));
                                    return k;
                                }, e);
                            }),
                            b);
                        return d;
                    }
                    Na(c, a);
                    c.prototype.bf = function (b) {
                        b = b.getAttribute("itemtype") || "";
                        return (b = this.Ti(b)) ? this.we[b[1]] : 1;
                    };
                    c.prototype.Ca = function (b) {
                        return b.element && Kb(b.element).length
                            ? a.prototype.Ca.call(this, b)
                            : null;
                    };
                    c.prototype.nc = function () {
                        var b = G(
                            ",",
                            z(function (d) {
                                return '[itemtype$="schema.org/' + d + '"]';
                            }, this.rb["schema.org"])
                        );
                        return jb(b, this.root);
                    };
                    return c;
                })(jh),
                Nl = (function (a) {
                    function c(b, d) {
                        var e,
                            f = a.call(this, b, d) || this;
                        f.id = "o";
                        f.Db =
                            ((e = {}),
                            (e.chars = function (g) {
                                g = this.La(g);
                                return Kb(g).length;
                            }),
                            (e.authors = function (g) {
                                return this.rd(g.data.author);
                            }),
                            (e.pageTitle = function (g) {
                                return this.rc(g.data.title) || "";
                            }),
                            (e.updateDate = function (g) {
                                return this.rc(g.data.modified_time);
                            }),
                            (e.publicationDate = function (g) {
                                return this.rc(g.data.published_time);
                            }),
                            (e.pageUrlCanonical = function (g) {
                                return this.rc(g.data.url);
                            }),
                            (e.rubric = function (g) {
                                return this.rd(g.data.section);
                            }),
                            (e.topics = function (g) {
                                return this.rd(g.data.tag);
                            }),
                            e);
                        f.Pg = new RegExp(
                            "^(og:)?((" + G("|", f.rb.qf) + "):)?"
                        );
                        return f;
                    }
                    Na(c, a);
                    c.prototype.rd = function (b) {
                        var d;
                        return b
                            ? O(b)
                                ? z(function (e) {
                                      var f;
                                      return (
                                          (f = {}),
                                          (f.name = e ? "" + e : null),
                                          f
                                      );
                                  }, b)
                                : [((d = {}), (d.name = b ? "" + b : null), d)]
                            : [];
                    };
                    c.prototype.rc = function (b) {
                        return O(b)
                            ? b.length
                                ? "" + b[0]
                                : null
                            : b
                            ? "" + b
                            : null;
                    };
                    c.prototype.nc = function () {
                        var b = jb(
                            'meta[property="og:type"]',
                            this.l.document.body
                        );
                        return [this.l.document.head].concat(b);
                    };
                    c.prototype.kh = function (b) {
                        var d = this,
                            e = b.element,
                            f = {},
                            g = this.La(b);
                        e = jb(
                            "meta[property]",
                            e === this.l.document.head ? e : g
                        );
                        if (e.length)
                            x(function (h) {
                                try {
                                    if (
                                        h.parentNode === g ||
                                        h.parentNode === d.l.document.head
                                    ) {
                                        var k = h
                                                .getAttribute("property")
                                                .replace(d.Pg, ""),
                                            l = bb(h);
                                        f[k]
                                            ? O(f[k])
                                                ? f[k].push(l)
                                                : (f[k] = [f[k], l])
                                            : (f[k] = l);
                                    }
                                } catch (m) {
                                    Rc(d.l, "og.ed", m);
                                }
                            }, e);
                        else return null;
                        return H(f.type, this.rb.qf) ? A(b, { data: f }) : null;
                    };
                    c.prototype.La = function (b) {
                        b = b.element;
                        var d = this.l.document;
                        return b === d.head ? d.body : b.parentNode;
                    };
                    c.prototype.Ca = function (b) {
                        return (b = this.kh(b))
                            ? a.prototype.Ca.call(this, b)
                            : null;
                    };
                    return c;
                })(jh),
                $d = {};
            Ml && ($d.json_ld = Ml);
            kh && (($d.schema = kh), ($d.microdata = kh));
            Nl && ($d.opengraph = Nl);
            var wu = B("p.p", function (a, c) {
                    function b(m) {
                        var p = A({}, l);
                        p.ba.da = m;
                        return f(p, c)["catch"](E(a, "s.ww.p"));
                    }
                    var d,
                        e = xi(a, "9", "8");
                    if (
                        !Fa("querySelectorAll", a.document.querySelectorAll) ||
                        !e
                    )
                        return L.resolve();
                    var f = va(a, "p", c),
                        g = Ka(),
                        h = cd(a, c.id),
                        k = h.C("pai");
                    k && (h.fc("pai"), g.D("pai", k));
                    var l = {
                        J: ((d = {}), (d["wv-type"] = e.type), d),
                        K: g,
                        ba: {},
                    };
                    return qa(
                        c,
                        E(a, "ps.s", function (m) {
                            var p;
                            if ((m = n(m, "settings.publisher.schema"))) {
                                rk(c) && (m = "microdata");
                                var q = $d[m];
                                if (q && e) {
                                    var r = K(c);
                                    q = new q(a, r);
                                    q = new uu(a, q, e, b, r);
                                    q.start();
                                    Ib(
                                        a,
                                        r,
                                        "ps",
                                        ((p = {}), (p.schema = m), p)
                                    );
                                    return I(q.stop, q);
                                }
                            }
                        })
                    );
                }),
                xu = (function () {
                    function a(c, b) {
                        this.type = "0";
                        this.l = c;
                        this.ih = b;
                    }
                    a.prototype.Fa = function (c) {
                        return If(xc(I(this.sb, this), c));
                    };
                    a.prototype.sb = function (c, b) {
                        var d = this,
                            e = [],
                            f = this.ih(this.l, b && b.type, c.type);
                        f &&
                            (e = xc(function (g) {
                                return g({ l: d.l, na: c }) || [];
                            }, f));
                        return e;
                    };
                    a.prototype.jb = function (c) {
                        return c.length;
                    };
                    a.prototype.ke = function (c) {
                        return [c];
                    };
                    a.prototype.isEnabled = function () {
                        return !0;
                    };
                    return a;
                })(),
                Ol = (function () {
                    function a(c, b, d) {
                        this.Ke = 0;
                        this.Vd = 1;
                        this.Vc = 5e3;
                        this.l = c;
                        this.ja = b;
                        this.Qb = d;
                    }
                    a.prototype.Pc = function () {
                        this.Ke = S(
                            this.l,
                            v(I(this.flush, this), I(this.Pc, this)),
                            this.Vc,
                            "b.f"
                        );
                    };
                    a.prototype.send = function (c, b) {
                        var d = this.Qb(c, b || [], this.Vd);
                        this.Vd += 1;
                        return d;
                    };
                    a.prototype.push = function () {};
                    a.prototype.flush = function () {};
                    return a;
                })(),
                lo = (function (a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.buffer = [];
                        b.ig = 7500;
                        b.Vc = 3e4;
                        b.Pc();
                        return b;
                    }
                    Na(c, a);
                    c.prototype.push = function (b, d) {
                        var e = this.ja.sb(b, d);
                        wa(this.buffer, e);
                        this.ja.jb(this.buffer) > this.ig && this.flush();
                    };
                    c.prototype.flush = function () {
                        var b = this.buffer;
                        b.length && (this.send(b), (this.buffer = []));
                    };
                    return c;
                })(Ol),
                Ao = /opera mini/i,
                ri = ["phone", "email"],
                Pl =
                    "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state contact.*".split(
                        " "
                    ),
                xo = /^[\w\u0410-\u042f\u0430-\u044f]$/,
                yo = [65, 90],
                zo = [97, 122],
                vo =
                    "color radio checkbox date datetime-local email month number password range search tel text time url week".split(
                        " "
                    ),
                to = new RegExp("(" + G("|", Pl) + ")", "i"),
                so = new RegExp("(" + G("|", ri) + ")", "i"),
                Fk = ["password", "passwd", "pswd"],
                uo = new RegExp(
                    "(" +
                        G(
                            "|",
                            Pl.concat(
                                "\u0438\u043c\u044f \u0444\u0430\u043c\u0438\u043b\u0438\u044f \u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u043d\u0434\u0435\u043a\u0441 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0430\u0434\u0440\u0435\u0441 \u043f\u0430\u0441\u043f\u043e\u0440\u0442 \u043d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b \u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2}\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0434\u043e\u043c \u0443\u043b\u0438\u0446\u0430 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0433\u043e\u0440\u043e\u0434 \u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(
                                    " "
                                )
                            )
                        ) +
                        ")",
                    "i"
                ),
                Za = "metrikaId_" + Math.random(),
                Ac = { counter: 0 },
                ws = w(function () {
                    var a;
                    return (
                        (a = {}),
                        (a.A = 1),
                        (a.ABBR = 2),
                        (a.ACRONYM = 3),
                        (a.ADDRESS = 4),
                        (a.APPLET = 5),
                        (a.AREA = 6),
                        (a.B = 7),
                        (a.BASE = 8),
                        (a.BASEFONT = 9),
                        (a.BDO = 10),
                        (a.BIG = 11),
                        (a.BLOCKQUOTE = 12),
                        (a.BODY = 13),
                        (a.BR = 14),
                        (a.BUTTON = 15),
                        (a.CAPTION = 16),
                        (a.CENTER = 17),
                        (a.CITE = 18),
                        (a.CODE = 19),
                        (a.COL = 20),
                        (a.COLGROUP = 21),
                        (a.DD = 22),
                        (a.DEL = 23),
                        (a.DFN = 24),
                        (a.DIR = 25),
                        (a.DIV = 26),
                        (a.DL = 27),
                        (a.DT = 28),
                        (a.EM = 29),
                        (a.FIELDSET = 30),
                        (a.FONT = 31),
                        (a.FORM = 32),
                        (a.FRAME = 33),
                        (a.FRAMESET = 34),
                        (a.H1 = 35),
                        (a.H2 = 36),
                        (a.H3 = 37),
                        (a.H4 = 38),
                        (a.H5 = 39),
                        (a.H6 = 40),
                        (a.HEAD = 41),
                        (a.HR = 42),
                        (a.HTML = 43),
                        (a.I = 44),
                        (a.IFRAME = 45),
                        (a.IMG = 46),
                        (a.INPUT = 47),
                        (a.INS = 48),
                        (a.ISINDEX = 49),
                        (a.KBD = 50),
                        (a.LABEL = 51),
                        (a.LEGEND = 52),
                        (a.LI = 53),
                        (a.LINK = 54),
                        (a.MAP = 55),
                        (a.MENU = 56),
                        (a.META = 57),
                        (a.NOFRAMES = 58),
                        (a.NOSCRIPT = 59),
                        (a.OBJECT = 60),
                        (a.OL = 61),
                        (a.OPTGROUP = 62),
                        (a.OPTION = 63),
                        (a.P = 64),
                        (a.PARAM = 65),
                        (a.PRE = 66),
                        (a.Q = 67),
                        (a.S = 68),
                        (a.SAMP = 69),
                        (a.SCRIPT = 70),
                        (a.SELECT = 71),
                        (a.SMALL = 72),
                        (a.SPAN = 73),
                        (a.STRIKE = 74),
                        (a.STRONG = 75),
                        (a.STYLE = 76),
                        (a.SUB = 77),
                        (a.SUP = 78),
                        (a.TABLE = 79),
                        (a.TBODY = 80),
                        (a.TD = 81),
                        (a.TEXTAREA = 82),
                        (a.TFOOT = 83),
                        (a.TH = 84),
                        (a.THEAD = 85),
                        (a.TITLE = 86),
                        (a.TR = 87),
                        (a.TT = 88),
                        (a.U = 89),
                        (a.UL = 90),
                        (a.VAR = 91),
                        (a.NOINDEX = 100),
                        a
                    );
                }),
                ts = [17, 18, 38, 32, 39, 15, 11, 7, 1],
                yu = (function () {
                    var a =
                        "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state".split(
                            " "
                        );
                    return {
                        qj: new RegExp("(" + G("|", a) + ")", "i"),
                        zj: new RegExp(
                            "(" +
                                G(
                                    "|",
                                    a.concat(
                                        "\u0438\u043c\u044f;\u0444\u0430\u043c\u0438\u043b\u0438\u044f;\u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e;\u0438\u043d\u0434\u0435\u043a\u0441;\u0442\u0435\u043b\u0435\u0444\u043e\u043d;\u0430\u0434\u0440\u0435\u0441;\u043f\u0430\u0441\u043f\u043e\u0440\u0442;\u041d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b;\u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2} \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f;\u0434\u043e\u043c;\u0443\u043b\u0438\u0446\u0430;\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430;\u0433\u043e\u0440\u043e\u0434;\u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(
                                            ";"
                                        )
                                    )
                                ) +
                                ")",
                            "i"
                        ),
                        oj: /ym-record-keys/i,
                        $h: "\u2022",
                        yj: 88,
                    };
                })(),
                Kk = Xb(u(yu.$h, R)),
                td = !0,
                Ng = "",
                Og = !1,
                Pg = !0,
                Qg = !1,
                qo = ra(function (a, c) {
                    var b = C([a, "efv." + c.event], E);
                    c.O = z(v(R, b), c.O);
                    return c;
                }),
                Ql = w(function (a) {
                    var c = [],
                        b = [],
                        d = [];
                    a.document.attachEvent &&
                        !a.opera &&
                        (c.push(Of), b.push(zs), b.push(As));
                    a.document.addEventListener
                        ? c.push(Ik)
                        : (b.push(Hk), d.push(Ik));
                    return po(
                        a,
                        [
                            {
                                target: a,
                                type: "window",
                                event: "beforeunload",
                                O: [D],
                            },
                            {
                                target: a,
                                type: "window",
                                event: "unload",
                                O: [D],
                            },
                            { event: "click", O: [Ze] },
                            { event: "dblclick", O: [Ze] },
                            { event: "mousedown", O: [Ze] },
                            { event: "mouseup", O: [Cs] },
                            { event: "keydown", O: [Ds] },
                            { event: "keypress", O: [Es] },
                            { event: "copy", O: [Mk] },
                            { event: "blur", O: c },
                            { event: "focusin", O: b },
                            { event: "focusout", O: d },
                        ]
                            .concat(
                                !a.document.attachEvent || a.opera
                                    ? [
                                          {
                                              target: a,
                                              type: "window",
                                              event: "focus",
                                              O: [pi],
                                          },
                                          {
                                              target: a,
                                              type: "window",
                                              event: "blur",
                                              O: [Of],
                                          },
                                      ]
                                    : []
                            )
                            .concat(
                                a.document.addEventListener
                                    ? [
                                          { event: "focus", O: [Hk] },
                                          { event: "change", O: [Jk] },
                                          { event: "submit", O: [Ok] },
                                      ]
                                    : [
                                          {
                                              type: "formInput",
                                              event: "change",
                                              O: [Jk],
                                          },
                                          {
                                              type: "form",
                                              event: "submit",
                                              O: [Ok],
                                          },
                                      ]
                            )
                    );
                }),
                no = w(function (a) {
                    return Ic(a)
                        ? [
                              {
                                  target: a,
                                  type: "document",
                                  event: "mouseleave",
                                  O: [Fs],
                              },
                          ]
                        : [];
                }),
                zu = ["submit", "beforeunload", "unload"],
                Au = w(function (a, c) {
                    var b = c(a);
                    return N(
                        function (d, e) {
                            d[e.type + ":" + e.event] = e.O;
                            return d;
                        },
                        {},
                        b
                    );
                }),
                Bu = u(Ql, function (a, c, b, d) {
                    return Au(c, a)[b + ":" + d] || [];
                }),
                oo = /^\s*function submit\(\)/,
                Cu = B("fw.p", function (a, c) {
                    var b;
                    if (!(b = c.Mg || !c.xb)) {
                        var d = J(a),
                            e = !1;
                        b = d.C("hitParam", {});
                        var f = K(c);
                        b[f] &&
                            ((d = d.C("counters", {})),
                            (e = de(c.ca) && !d[f]));
                        b[f] = 1;
                        b = e;
                    }
                    if (b) return L.resolve(D);
                    b = new xu(a, Bu);
                    return ko(a, c, b, Ql, zu);
                }),
                lh,
                Rl =
                    ((lh = (function (a) {
                        function c(b, d, e, f) {
                            void 0 === f && (f = 0);
                            d = a.call(this, b, d, e) || this;
                            d.te = 0;
                            d.Ab = 0;
                            d.se = 0;
                            d.buffer = [];
                            d.Vc = 2e3;
                            d.$ = rd(b);
                            d.Pc();
                            d.se = f;
                            return d;
                        }
                        Na(c, a);
                        c.prototype.Ve = function (b) {
                            return ua(this.$.R("ag", b));
                        };
                        c.prototype.Ue = function (b, d) {
                            var e = this;
                            b(
                                Ra(E(this.l, "wv2.b.st"), function (f) {
                                    e.send(f, d);
                                })
                            );
                        };
                        c.prototype.Ei = function (b, d) {
                            var e = this;
                            la(this.l, this.Ke);
                            var f = Math.ceil(this.ja.jb(d) / 63e4),
                                g = this.ja.ke(d, f);
                            x(function (h, k) {
                                var l,
                                    m = A(
                                        {},
                                        b,
                                        ((l = {}),
                                        (l.data = h),
                                        (l.partNum = k + 1),
                                        (l.end = k + 1 === f),
                                        (l.partsTotal = g.length),
                                        l)
                                    );
                                l = e.ja.Fa([m], !1);
                                e.Ue(l, [m]);
                            }, g);
                            this.Pc();
                        };
                        c.prototype.send = function (b, d) {
                            var e = this;
                            this.$.R("se", d);
                            return a.prototype.send
                                .call(this, b, d)
                                .then(R, function () {
                                    e.$.R("see", d);
                                });
                        };
                        c.We = function (b, d, e, f, g) {
                            c.Yc["" + b + d] ||
                                (this.Yc[d] = new c(
                                    g,
                                    f,
                                    e,
                                    "m" === d ? 31457280 : 0
                                ));
                            return this.Yc[d];
                        };
                        c.prototype.Ph = function () {
                            return this.se && this.te >= this.se;
                        };
                        c.prototype.push = function (b) {
                            var d = this;
                            if (!this.Ph()) {
                                this.$.R("p", b);
                                var e = this.ja.sb(b),
                                    f = this.ja.jb(e);
                                7e5 < f
                                    ? this.Ei(b, e)
                                    : ((e = this.Ve(this.buffer.concat([b]))),
                                      (e = zb(
                                          function (g, h) {
                                              return g + d.ja.jb(d.ja.sb(h));
                                          },
                                          0,
                                          e
                                      )),
                                      this.Ab + e + f >= 7e5 * 0.7 &&
                                          this.flush(),
                                      this.buffer.push(b),
                                      (this.Ab += f));
                            }
                        };
                        c.prototype.F = function (b, d) {
                            this.$.F([b], d);
                        };
                        c.prototype.ga = function (b, d) {
                            this.$.ga([b], d);
                        };
                        c.prototype.flush = function (b) {
                            var d = this.buffer.concat(this.Ve(this.buffer));
                            d.length &&
                                ((this.buffer = []),
                                (this.te += this.Ab),
                                (this.Ab = 0),
                                (b = this.ja.Fa(d, b)),
                                this.Ue(b, d));
                        };
                        return c;
                    })(Ol)),
                    (lh.Yc = {}),
                    lh),
                cb = (function () {
                    function a(c, b, d) {
                        this.Th = "wv2.c";
                        this.Kb = [];
                        this.ia = [];
                        this.l = c;
                        this.L = Mf(c, this, d, this.Th);
                        this.G = b;
                        this.cb = this.G.nh();
                        this.start = this.L.H(this.start, "st");
                        this.stop = this.L.H(this.stop, "sp");
                    }
                    a.prototype.start = function () {
                        var c = this;
                        this.Kb = z(function (b) {
                            var d = b[0],
                                e = b[2];
                            b = I(c.L.H(b[1], d[0]), c);
                            return c.cb.F(e || c.l, d, b);
                        }, this.ia);
                    };
                    a.prototype.stop = function () {
                        x(ma, this.Kb);
                    };
                    a.prototype.Z = function (c) {
                        return this.G.ra().Z(c);
                    };
                    return a;
                })(),
                io = ["checkbox", "radio"],
                jo = /pwd|value|password/i,
                mh = U("location.href"),
                Du = (function (a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.oa = { elements: [], attributes: [] };
                        d.index = 0;
                        d.Qd = d.L.H(d.Qd, "o");
                        d.hd = d.L.H(d.hd, "io");
                        d.Wc = d.L.H(d.Wc, "ao");
                        d.Yd = d.L.H(d.Yd, "a");
                        d.Wd = d.L.H(d.Wd, "at");
                        d.Zd = d.L.H(d.Zd, "r");
                        d.Xd = d.L.H(d.Xd, "c");
                        d.ya = new b.MutationObserver(d.Qd);
                        return d;
                    }
                    Na(c, a);
                    c.prototype.start = function () {
                        this.ya.observe(this.l.document.documentElement, {
                            attributes: !0,
                            characterData: !0,
                            childList: !0,
                            subtree: !0,
                            attributeOldValue: !0,
                            characterDataOldValue: !0,
                        });
                    };
                    c.prototype.stop = function () {
                        this.ya.disconnect();
                    };
                    c.prototype.Wc = function (b) {
                        var d = b.target,
                            e = b.attributeName,
                            f = b.oldValue;
                        b = d.getAttribute(e);
                        if (b === f) return !1;
                        f = Pb(this.l)(d, this.oa.elements);
                        -1 === f &&
                            ((f = this.oa.elements.push(d) - 1),
                            (this.oa.attributes[f] = {}));
                        this.oa.attributes[f] || (this.oa.attributes[f] = {});
                        this.oa.attributes[f][e] = se(
                            this.l,
                            d,
                            e,
                            b,
                            this.G.Fb()
                        ).value;
                        return !0;
                    };
                    c.prototype.hd = function (b) {
                        function d(k) {
                            var l = Pb(e.l)(k, f);
                            return -1 === l
                                ? (f.push(k), (k = { pd: {} }), g.push(k), k)
                                : g[l];
                        }
                        var e = this,
                            f = [],
                            g = [];
                        x(function (k) {
                            var l = k.attributeName,
                                m = k.removedNodes,
                                p = k.oldValue,
                                q = k.target,
                                r = k.nextSibling,
                                t = k.previousSibling;
                            switch (k.type) {
                                case "attributes":
                                    if (e.Wc(k)) {
                                        var y = d(q);
                                        y.pd[l] ||
                                            (y.pd[l] = se(
                                                e.l,
                                                q,
                                                l,
                                                p,
                                                e.G.Fb()
                                            ).value);
                                    }
                                    break;
                                case "childList":
                                    m &&
                                        x(function (F) {
                                            y = d(F);
                                            y.Se ||
                                                A(y, {
                                                    Se: q,
                                                    bh: r ? r : void 0,
                                                    dh: t ? t : void 0,
                                                });
                                        }, Ca(m));
                                    break;
                                case "characterData":
                                    (y = d(q)), y.Te || (y.Te = p);
                            }
                        }, b);
                        var h = this.G.ra();
                        x(function (k, l) {
                            h.je(k, g[l]);
                        }, f);
                    };
                    c.prototype.Qd = function (b) {
                        var d = this;
                        if (mh(this.l)) {
                            var e = this.G.stamp();
                            this.hd(b);
                            x(function (f) {
                                var g = f.addedNodes,
                                    h = f.removedNodes,
                                    k = f.target;
                                switch (f.type) {
                                    case "childList":
                                        h && h.length && d.Zd(Ca(h), e);
                                        g && g.length && d.Yd(Ca(g), e);
                                        break;
                                    case "characterData":
                                        d.Xd(k, e);
                                }
                            }, b);
                            this.Wd(e);
                        } else this.stop();
                    };
                    c.prototype.Wd = function (b) {
                        var d = this;
                        x(function (e, f) {
                            var g = d.pc();
                            d.G.Y(
                                "mutation",
                                {
                                    index: g,
                                    attributes: d.oa.attributes[f],
                                    target: d.Z(e),
                                },
                                "ac",
                                b
                            );
                        }, this.oa.elements);
                        this.oa.elements = [];
                        this.oa.attributes = [];
                    };
                    c.prototype.Yd = function (b, d) {
                        var e = this,
                            f = this.pc();
                        this.G.ra().uc({
                            nodes: b,
                            Oc: function (g) {
                                g = z(function (h) {
                                    h.node = void 0;
                                    return h;
                                }, g);
                                e.G.Y(
                                    "mutation",
                                    { index: f, nodes: g },
                                    "ad",
                                    d
                                );
                            },
                        });
                    };
                    c.prototype.Zd = function (b, d) {
                        var e = this,
                            f = this.pc(),
                            g = this.G.ra(),
                            h = z(function (k) {
                                var l = g.removeNode(k);
                                fj(e.l, k, function (m) {
                                    g.removeNode(m);
                                });
                                return l;
                            }, b);
                        this.G.Y("mutation", { index: f, nodes: h }, "re", d);
                    };
                    c.prototype.Xd = function (b, d) {
                        var e = this.pc();
                        this.G.Y(
                            "mutation",
                            {
                                value: b.textContent,
                                target: this.Z(b),
                                index: e,
                            },
                            "tc",
                            d
                        );
                    };
                    c.prototype.pc = function () {
                        var b = this.index;
                        this.index += 1;
                        return b;
                    };
                    return c;
                })(cb),
                Eu = (function () {
                    function a(c, b) {
                        var d = this;
                        this.kc = [];
                        this.eb = [];
                        this.Pd = 1;
                        this.He = this.Mf = 0;
                        this.xa = {};
                        this.Ra = {};
                        this.Eb = [];
                        this.Bd = function (f) {
                            return d.eb.length ? H(f, d.eb) : !1;
                        };
                        this.removeNode = function (f) {
                            var g = d.Z(f),
                                h = Ma(f);
                            if (h)
                                return (
                                    (h = "NR:" + h.toLowerCase()),
                                    d.Bd(h) &&
                                        d.$.R(h, { data: { node: f, id: g } }),
                                    g
                                );
                        };
                        this.ib = function (f) {
                            var g = Ma(f);
                            if (g) {
                                var h = f.__ym_indexer;
                                return h
                                    ? h
                                    : ((h = d.Pd),
                                      (f.__ym_indexer = h),
                                      (d.Pd += 1),
                                      (g = "NA:" + g.toLowerCase()),
                                      d.Bd(g) &&
                                          d.$.R(g, {
                                              data: { node: f, id: h },
                                          }),
                                      h);
                            }
                            return null;
                        };
                        this.Gf = function () {
                            d.Mf = S(d.l, v(I(d.aa, d, !1), d.Gf), 50, "i.s");
                        };
                        this.Ef = function () {
                            d.He = S(d.l, v(I(d.bd, d, !1), d.Ef), 50, "i.g");
                        };
                        this.wi = function (f) {
                            null === d.xa[f] && delete d.xa[f];
                            null === d.Ra[f] && delete d.Ra[f];
                        };
                        this.l = c;
                        var e = Mf(c, this, "i");
                        this.$ = rd(c);
                        this.options = b;
                        this.start = e.H(this.start, "st");
                        this.stop = e.H(this.stop, "sp");
                        this.Z = e.H(this.Z, "i");
                        this.je = e.H(this.je, "o");
                        this.uc = e.H(this.uc, "a");
                        this.removeNode = e.H(this.removeNode, "r");
                        this.aa = e.H(this.aa, "s");
                        this.bd = e.H(this.bd, "g");
                    }
                    a.prototype.je = function (c, b) {
                        var d = this.ib(c);
                        Xa(d) || (this.Ra[d] && this.Z(c), (this.Ra[d] = b));
                    };
                    a.prototype.F = function (c, b, d) {
                        c = "" + b + c;
                        this.eb.push(c);
                        this.Bd(c) || this.eb.push(c);
                        this.$.F([c], d);
                    };
                    a.prototype.ga = function (c, b, d) {
                        var e = "" + b + c;
                        this.eb = ha(function (f) {
                            return f !== e;
                        }, this.eb);
                        this.$.ga([e], d);
                    };
                    a.prototype.start = function () {
                        this.Gf();
                        this.Ef();
                    };
                    a.prototype.stop = function () {
                        this.flush();
                        la(this.l, this.He);
                        la(this.l, this.Mf);
                        this.kc = [];
                        this.Eb = [];
                        this.xa = {};
                        this.Ra = {};
                    };
                    a.prototype.uc = function (c) {
                        var b = this,
                            d = [],
                            e = 0,
                            f = { Oc: c.Oc, result: [], vc: 0, nodes: d };
                        this.kc.push(f);
                        x(function (g) {
                            fj(b.l, g, function (h) {
                                var k = b.ib(h);
                                Xa(k) ||
                                    (d.push(h),
                                    b.xa[k] && b.Z(h),
                                    (b.xa[k] = { node: h, event: f, Ri: e }),
                                    (e += 1));
                            });
                        }, c.nodes);
                    };
                    a.prototype.Z = function (c) {
                        if (c === this.l) return 0;
                        var b = this.ib(c),
                            d = this.xa[b],
                            e = this.gh(b),
                            f = e.Se,
                            g = e.pd,
                            h = e.Te,
                            k = e.bh,
                            l = e.dh;
                        if (d) {
                            e = d.event;
                            d = d.Ri;
                            var m = ct(this.l) === c;
                            k = k || c.nextSibling;
                            var p = l || c.previousSibling;
                            l = !m && k ? this.ib(k) : null;
                            p = !m && p ? this.ib(p) : null;
                            m = this.l;
                            k = this.options;
                            f =
                                this.ib(f || c.parentNode || c.parentElement) ||
                                0;
                            var q = g,
                                r = void 0;
                            void 0 === p && (p = null);
                            void 0 === l && (l = null);
                            void 0 === q && (q = {});
                            void 0 === r && (r = Ma(c));
                            if (W(r)) c = void 0;
                            else {
                                g = {
                                    id: b,
                                    prev: p !== f ? p : null,
                                    next: l !== f ? l : null,
                                    parent: f,
                                    name: r.toLowerCase(),
                                    node: c,
                                };
                                if (Sf(c)) {
                                    if (
                                        ((h = fo(c, h)),
                                        (g.attributes = {}),
                                        (g.content = h))
                                    )
                                        if ((c = sd(m, c)))
                                            (g.content =
                                                "" !== ab(h) ? wo(m, h) : h),
                                                (g.hidden = c);
                                } else
                                    (h = go(m, c, k, q, r)),
                                        (m = h.mb),
                                        (g.attributes = h.sg),
                                        m && (g.hidden = m),
                                        c.namespaceURI &&
                                            ib(c.namespaceURI, "svg") &&
                                            (g.namespace = c.namespaceURI);
                                c = g;
                            }
                            if (W(c)) return;
                            this.xa[b] = null;
                            this.Eb.push(b);
                            e.result[d] = c;
                            e.vc += 1;
                            e.nodes.length === e.vc && e.Oc(e.result);
                        }
                        return b;
                    };
                    a.prototype.flush = function () {
                        this.aa(!0);
                    };
                    a.prototype.bd = function () {
                        if (this.Eb.length) {
                            var c = ec(this.Eb, this.wi),
                                b = wg(this.l, 30);
                            c(b);
                        }
                    };
                    a.prototype.aa = function (c) {
                        var b = this;
                        if (mh(this.l)) {
                            var d = ea(this.xa);
                            d = N(
                                function (e, f) {
                                    b.xa[f] && e.push(b.xa[f].node);
                                    return e;
                                },
                                [],
                                d
                            );
                            d = ec(d, this.Z);
                            c = c ? ek(D) : ck(this.l, 20);
                            d(c);
                            this.kc = ha(function (e) {
                                return e.vc !== e.result.length;
                            }, this.kc);
                        }
                    };
                    a.prototype.gh = function (c) {
                        if (Xa(c)) return {};
                        var b = this.Ra[c];
                        return b
                            ? ((this.Ra[c] = null), this.Eb.push(c), b)
                            : {};
                    };
                    return a;
                })(),
                Fu = ["input", "change", "keyup", "paste", "cut"],
                Gu = (function (a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.inputs = {};
                        b.ld = !1;
                        b.Cc = b.L.H(b.Cc, "ii");
                        b.Dc = b.L.H(b.Dc, "ir");
                        b.Ic = b.L.H(b.Ic, "ri");
                        b.Tc = b.L.H(b.Tc, "ur");
                        b.Ad = b.L.H(b.Ad, "ce");
                        b.sc = b.L.H(b.sc, "vc");
                        return b;
                    }
                    Na(c, a);
                    c.prototype.start = function () {
                        var b = this,
                            d = this.G.ra();
                        this.ld = this.Ag();
                        x(function (e) {
                            e = e.toLowerCase();
                            d.F(e, "NA:", I(b.Cc, b));
                            d.F(e, "NR:", I(b.Dc, b));
                        }, Rf);
                        this.Kb = [
                            this.cb.F(this.l.document, Fu, I(this.Ad, this)),
                            function () {
                                x(function (e) {
                                    e = e.toLowerCase();
                                    d.ga(e, "NA:", b.Cc);
                                    d.ga(e, "NR:", b.Dc);
                                }, Rf);
                                x(b.Tc, ea(b.inputs));
                            },
                        ];
                    };
                    c.prototype.Tc = function (b) {
                        var d = this.inputs[b];
                        if (d) {
                            if (this.ld) {
                                var e = d.ni;
                                d = d.element;
                                e &&
                                    this.l.Object.defineProperty(
                                        d,
                                        this.qc(d),
                                        e
                                    );
                            }
                            delete this.inputs[b];
                        }
                    };
                    c.prototype.Dc = function (b) {
                        b && this.Tc(b.data.id);
                    };
                    c.prototype.Cc = function (b) {
                        b && ((b = b.data), this.Ic(b.node, b.id));
                    };
                    c.prototype.qc = function (b) {
                        return Re(b) ? "checked" : "value";
                    };
                    c.prototype.Ad = function (b) {
                        if ((b = b.target)) {
                            var d = this.qc(b);
                            this.sc(b[d], b);
                        }
                    };
                    c.prototype.sc = function (b, d) {
                        var e = this.Z(d),
                            f = this.inputs[e];
                        if (!f && ((f = this.Ic(f, e)), !f)) return;
                        e = f.Cg;
                        var g = f.value,
                            h = this.qc(d),
                            k =
                                !b ||
                                H(typeof b, ["string", "boolean", "number"]),
                            l = this.G.Fb().Gd;
                        k &&
                            b !== g &&
                            ((g = se(this.l, d, h, b, this.G.Fb()).value),
                            e
                                ? this.G.Y(
                                      "event",
                                      { target: this.Z(d), checked: !!b },
                                      "change"
                                  )
                                : ((e = Tc(this.l, d, l)),
                                  (l = e.fb),
                                  this.G.Y(
                                      "event",
                                      {
                                          value: g,
                                          hidden: e.ob && !l,
                                          target: this.Z(d),
                                      },
                                      "change"
                                  )),
                            (f.value = b));
                    };
                    c.prototype.Ic = function (b, d) {
                        var e = this;
                        if (
                            !Kf(b) ||
                            "__ym_input_override_test" ===
                                b.getAttribute("class") ||
                            this.inputs[d]
                        )
                            return null;
                        var f = Re(b),
                            g = this.qc(b),
                            h = { element: b, Cg: f, value: b[g] };
                        this.inputs[d] = h;
                        this.ld &&
                            Tb(this.l, function () {
                                var k =
                                        e.l.Object.getOwnPropertyDescriptor(
                                            Object.getPrototypeOf(b),
                                            g
                                        ) || {},
                                    l =
                                        e.l.Object.getOwnPropertyDescriptor(
                                            b,
                                            g
                                        ) || {},
                                    m = A({}, k, l);
                                if (Fa("((set)?(\\s?" + g + ")?)?", m.set)) {
                                    try {
                                        e.l.Object.defineProperty(
                                            b,
                                            g,
                                            A({}, m, {
                                                configurable: !0,
                                                set: function (p) {
                                                    e.sc(p, this);
                                                    return m.set.call(this, p);
                                                },
                                            })
                                        );
                                    } catch (p) {}
                                    h.ni = m;
                                }
                            });
                        return h;
                    };
                    c.prototype.Ag = function () {
                        var b = !0,
                            d = db(this.l)("input");
                        try {
                            d = db(this.l)("input");
                            d.value = "INPUT_VALUE";
                            d.style.setProperty("display", "none", "important");
                            d.setAttribute("type", "text");
                            d.setAttribute("class", "__ym_input_override_test");
                            var e =
                                    this.l.Object.getOwnPropertyDescriptor(
                                        Object.getPrototypeOf(d),
                                        "value"
                                    ) || {},
                                f =
                                    this.l.Object.getOwnPropertyDescriptor(
                                        d,
                                        "value"
                                    ) || {},
                                g = A({}, e, f);
                            this.l.Object.defineProperty(
                                d,
                                "value",
                                A({}, g, {
                                    configurable: !0,
                                    set: function (h) {
                                        return g.set.call(d, h);
                                    },
                                })
                            );
                            "INPUT_VALUE" !== d.value && (b = !1);
                            d.value = "INPUT_TEST";
                            "INPUT_TEST" !== d.value && (b = !1);
                        } catch (h) {
                            b = !1;
                        }
                        return b;
                    };
                    return c;
                })(cb),
                Hu = (function (a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.Wa = {
                            width: 0,
                            height: 0,
                            pageHeight: 0,
                            pageWidth: 0,
                            orientation: 0,
                        };
                        b.ia.push([["resize"], b.li]);
                        b.ia.push([["orientationchange"], b.ji]);
                        return b;
                    }
                    Na(c, a);
                    c.prototype.start = function () {
                        a.prototype.start.call(this);
                        this.Jf();
                    };
                    c.prototype.li = function () {
                        var b = this.yd();
                        this.Dh(b) && ((this.Wa = b), this.Kf(b));
                    };
                    c.prototype.ji = function () {
                        var b = this.yd();
                        this.Wa.orientation !== b.orientation &&
                            ((this.Wa = b), this.Ai(b));
                    };
                    c.prototype.jf = function (b) {
                        return (
                            !b.height ||
                            !b.width ||
                            !b.pageWidth ||
                            !b.pageHeight
                        );
                    };
                    c.prototype.Dh = function (b) {
                        return (
                            b.height !== this.Wa.height ||
                            b.width !== this.Wa.width
                        );
                    };
                    c.prototype.yd = function () {
                        var b = this.G.hb(),
                            d = Pc(this.l),
                            e = d[0];
                        d = d[1];
                        b = b.xd();
                        return {
                            width: e,
                            height: d,
                            pageWidth: b ? b.scrollWidth : 0,
                            pageHeight: b ? b.scrollHeight : 0,
                            orientation: this.G.hb().ph(),
                        };
                    };
                    c.prototype.Ai = function (b) {
                        var d;
                        void 0 === d && (d = this.G.stamp());
                        this.G.Y(
                            "event",
                            {
                                width: b.width,
                                height: b.height,
                                orientation: b.orientation,
                            },
                            "deviceRotation",
                            d
                        );
                    };
                    c.prototype.Kf = function (b, d) {
                        void 0 === d && (d = this.G.stamp());
                        this.G.Y(
                            "event",
                            {
                                width: b.width,
                                height: b.height,
                                pageWidth: b.pageWidth,
                                pageHeight: b.pageHeight,
                            },
                            "resize",
                            d
                        );
                    };
                    c.prototype.Jf = function () {
                        var b = this.yd();
                        this.jf(b)
                            ? S(this.l, I(this.Jf, this), 300)
                            : (this.jf(this.Wa) && (this.Wa = b),
                              this.Kf(b, 0));
                    };
                    return c;
                })(cb),
                df = (function () {
                    function a(c) {
                        this.index = 0;
                        this.ub = {};
                        this.l = c;
                    }
                    a.prototype.dc = function (c, b, d) {
                        void 0 === d && (d = {});
                        var e = ja(this.l),
                            f = this.index;
                        this.index += 1;
                        this.ub[f] = { Ia: 0, Pb: !1, $g: c, Xc: [], Kd: e(Z) };
                        var g = this;
                        return function () {
                            var h = Oa(arguments),
                                k = d.Qe && !g.ub[f].Pb,
                                l = g.ub[f];
                            la(g.l, l.Ia);
                            l.Xc = h;
                            l.Pb = !0;
                            var m = e(Z);
                            if (k || m - l.Kd >= b)
                                c.apply(void 0, h), (l.Kd = m);
                            l.Ia = S(
                                g.l,
                                function () {
                                    k || (c.apply(void 0, h), (l.Kd = e(Z)));
                                    l.Pb = !1;
                                    l.Xc = [];
                                },
                                b,
                                "th"
                            );
                        };
                    };
                    a.prototype.flush = function () {
                        var c = this;
                        x(function (b) {
                            var d = c.ub[b],
                                e = d.Ia,
                                f = d.$g,
                                g = d.Xc;
                            d.Pb &&
                                ((c.ub[b].Pb = !1),
                                f.apply(void 0, g),
                                la(c.l, e));
                        }, ea(this.ub));
                    };
                    return a;
                })(),
                Iu = (function (a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.Wf = [];
                        d.Be = { x: 0, y: 0 };
                        d.Aa = new df(b);
                        d.Gc = d.L.H(d.Gc, "o");
                        d.ia.push([["scroll"], d.mi]);
                        return d;
                    }
                    Na(c, a);
                    c.prototype.start = function () {
                        a.prototype.start.call(this);
                        this.G.Y(
                            "event",
                            {
                                x: Math.max(this.l.scrollX, 0),
                                y: Math.max(this.l.scrollY, 0),
                                page: !0,
                                target: -1,
                            },
                            "scroll",
                            0
                        );
                    };
                    c.prototype.stop = function () {
                        a.prototype.stop.call(this);
                        this.Aa.flush();
                    };
                    c.prototype.mi = function (b) {
                        if (this.G.hb().ff()) this.Gc(b);
                        else {
                            var d = b.target,
                                e = ha(function (f) {
                                    return f[0] === d;
                                }, this.Wf).pop();
                            e
                                ? (e = e[1])
                                : ((e = this.Aa.dc(I(this.Gc, this), 100, {
                                      Qe: !0,
                                  })),
                                  this.Wf.push([d, e]));
                            e(b);
                        }
                    };
                    c.prototype.Gc = function (b) {
                        var d = this.G.hb().xd();
                        b = b.target;
                        var e = this.Gb(b);
                        d = d === b || this.l === b || this.l.document === b;
                        var f = Math.max(e.left, 0);
                        e = Math.max(e.top, 0);
                        if (d) {
                            if (this.Be.x === f && this.Be.y === e) return;
                            this.Be = { x: f, y: e };
                        }
                        this.G.Y(
                            "event",
                            { x: f, y: e, page: d, target: d ? -1 : this.Z(b) },
                            "scroll"
                        );
                    };
                    c.prototype.Gb = function (b) {
                        var d = { left: 0, top: 0 };
                        if (!b) return d;
                        if (b.window === b)
                            return {
                                top: b.scrollY || 0,
                                left: b.scrollX || 0,
                            };
                        var e = b.ownerDocument || b,
                            f = b.documentElement,
                            g = e.defaultView || e.parentWindow,
                            h = e.body;
                        return b !== e || ((b = this.G.hb().xd()), b)
                            ? H(b, [f, h])
                                ? {
                                      top: b.scrollTop || g.scrollY,
                                      left: b.scrollLeft || g.scrollX,
                                  }
                                : {
                                      top: b.scrollTop || 0,
                                      left: b.scrollLeft || 0,
                                  }
                            : d;
                    };
                    return c;
                })(cb),
                Ju = ["mousemove", "mousedown", "mouseup", "click"],
                Ku = (function (a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.ia.push([Ju, d.ii]);
                        d.Aa = new df(b);
                        d.Bc = d.L.H(d.Bc, "n");
                        d.Ki = d.L.H(d.Aa.dc(I(d.Bc, d), 100), "t");
                        return d;
                    }
                    Na(c, a);
                    c.prototype.stop = function () {
                        a.prototype.stop.call(this);
                        this.Aa.flush();
                    };
                    c.prototype.ii = function (b) {
                        var d = null;
                        try {
                            d = b.type;
                        } catch (e) {
                            return;
                        }
                        "mousemove" === d ? this.Ki(b) : this.Bc(b);
                    };
                    c.prototype.Bc = function (b) {
                        var d = b.type,
                            e = b.clientX;
                        e = void 0 === e ? null : e;
                        var f = b.clientY;
                        f = void 0 === f ? null : f;
                        b = b.target || this.l.document.elementFromPoint(e, f);
                        this.G.Y(
                            "event",
                            { x: e || 0, y: f || 0, target: this.Z(b) },
                            d
                        );
                    };
                    return c;
                })(cb),
                Lu = ["focus", "blur"],
                Mu = (function (a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.ia.push([Lu, b.ah]);
                        return b;
                    }
                    Na(c, a);
                    c.prototype.ah = function (b) {
                        var d = b.target;
                        b = b.type;
                        this.G.Y(
                            "event",
                            {
                                target: this.Z(
                                    d === this.l
                                        ? this.l.document.documentElement
                                        : d
                                ),
                            },
                            b
                        );
                    };
                    return c;
                })(cb),
                Nu = w(function (a) {
                    var c = oa(a.getSelection, "getSelection");
                    return c ? I(c, a) : D;
                }),
                Ou = v(Nu, ma),
                Pu = [
                    "mousemove",
                    "touchmove",
                    "mousedown",
                    "touchdown",
                    "select",
                ],
                Qu = /text|search|password|tel|url/,
                Ru = (function (a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.Cd = !1;
                        b.ia.push([Pu, b.Bh]);
                        return b;
                    }
                    Na(c, a);
                    c.prototype.Bh = function (b) {
                        var d = this.G,
                            e = b.type,
                            f = b.which;
                        b = b.target;
                        if ("mousemove" !== e || 1 === f)
                            (e = "select" === e ? this.th(b) : this.rh()) &&
                            e.start !== e.end
                                ? ((this.Cd = !0), d.Y("event", e, "selection"))
                                : this.Cd &&
                                  ((this.Cd = !1),
                                  d.Y(
                                      "event",
                                      { start: 0, end: 0 },
                                      "selection"
                                  ));
                    };
                    c.prototype.rh = function () {
                        var b = Ou(this.l);
                        if (b && 0 < b.rangeCount) {
                            b =
                                b.getRangeAt(0) ||
                                this.l.document.createRange();
                            var d = this.Z(b.startContainer),
                                e = this.Z(b.endContainer);
                            if (!W(d) && !W(e))
                                return {
                                    start: b.startOffset,
                                    end: b.endOffset,
                                    startNode: d,
                                    endNode: e,
                                };
                        }
                    };
                    c.prototype.th = function (b) {
                        if (Qu.test(b.type || "")) {
                            var d = this.Z(b);
                            if (!W(d))
                                return {
                                    start: b.selectionStart,
                                    end: b.selectionEnd,
                                    target: d,
                                };
                        }
                    };
                    return c;
                })(cb),
                Su = { focus: "windowfocus", blur: "windowblur" },
                Tu = (function (a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.visibility = null;
                        W(b.l.document.hidden)
                            ? W(b.l.document.msHidden)
                                ? W(b.l.document.webkitHidden) ||
                                  (b.visibility = {
                                      hidden: "webkitHidden",
                                      event: "webkitvisibilitychange",
                                  })
                                : (b.visibility = {
                                      hidden: "msHidden",
                                      event: "msvisibilitychange",
                                  })
                            : (b.visibility = {
                                  hidden: "hidden",
                                  event: "visibilitychange",
                              });
                        b.handleEvent = b.L.H(b.handleEvent, "e");
                        return b;
                    }
                    Na(c, a);
                    c.prototype.start = function () {
                        this.Kb = [
                            this.cb.F(
                                this.l,
                                this.visibility
                                    ? [this.visibility.event]
                                    : ["focus", "blur"],
                                I(this.handleEvent, this)
                            ),
                        ];
                    };
                    c.prototype.handleEvent = function (b) {
                        this.G.Y(
                            "event",
                            {},
                            Su[
                                this.visibility
                                    ? this.l.document[this.visibility.hidden]
                                        ? "blur"
                                        : "focus"
                                    : b.type
                            ]
                        );
                    };
                    return c;
                })(cb),
                Uu = [
                    "touchmove",
                    "touchstart",
                    "touchend",
                    "touchcancel",
                    "touchforcechange",
                ],
                Vu = (function (a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.Rc = {};
                        d.scrolling = !1;
                        d.Hf = 0;
                        d.ia.push([["scroll"], d.zi, d.l.document]);
                        d.ia.push([Uu, d.Mi, d.l.document]);
                        d.Aa = new df(b);
                        d.Jb = d.L.H(d.Jb, "nh");
                        d.Li = d.L.H(
                            d.Aa.dc(d.Jb, d.G.hb().ff() ? 0 : 50, { Qe: !0 }),
                            "th"
                        );
                        return d;
                    }
                    Na(c, a);
                    c.prototype.zi = function () {
                        var b = this;
                        this.scrolling = !0;
                        la(this.l, this.Hf);
                        this.Hf = S(
                            this.l,
                            function () {
                                b.scrolling = !1;
                            },
                            150
                        );
                    };
                    c.prototype.Mi = function (b) {
                        var d = this,
                            e =
                                "touchcancel" === b.type ||
                                "touchend" === b.type;
                        b.changedTouches &&
                            0 < b.changedTouches.length &&
                            x(function (f) {
                                var g = d.vh(f);
                                f.__ym_touch_id = g;
                                e && delete d.Rc[f.identifier];
                            }, Ca(b.changedTouches));
                        "touchmove" === b.type
                            ? this.scrolling
                                ? this.Jb(b)
                                : this.Li(b, this.G.stamp())
                            : this.Jb(b);
                    };
                    c.prototype.vh = function (b) {
                        this.Rc[b.identifier] || (this.Rc[b.identifier] = ji());
                        return this.Rc[b.identifier];
                    };
                    c.prototype.Jb = function (b, d) {
                        void 0 === d && (d = this.G.stamp());
                        var e = b.type,
                            f = z(function (g) {
                                return {
                                    id: g.__ym_touch_id,
                                    x: Math.round(g.clientX),
                                    y: Math.round(g.clientY),
                                    force: g.force,
                                };
                            }, Ca(b.changedTouches));
                        0 < f.length &&
                            this.G.Y(
                                "event",
                                { touches: f, target: this.Z(b.target) },
                                e,
                                d
                            );
                    };
                    return c;
                })(cb),
                Wu = (function (a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.ia.push([["load"], b.hi, b.l.document]);
                        return b;
                    }
                    Na(c, a);
                    c.prototype.hi = function (b) {
                        b = b.target;
                        "IMG" === Ma(b) &&
                            b.getAttribute("srcset") &&
                            this.G.Y(
                                "mutation",
                                {
                                    target: this.Z(b),
                                    attributes: { src: b.currentSrc },
                                },
                                "ac"
                            );
                    };
                    return c;
                })(cb),
                Xu = (function (a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.fg = 1;
                        d.Aa = new df(b);
                        d.Yb = d.L.H(d.Yb, "z");
                        return d;
                    }
                    Na(c, a);
                    c.prototype.start = function () {
                        if (this.cf()) {
                            a.prototype.start.call(this);
                            this.Yb();
                            var b = this.cb.F(
                                n(this.l, "visualViewport"),
                                ["resize"],
                                this.Aa.dc(this.Yb, 10)
                            );
                            this.Kb.push(b);
                        }
                    };
                    c.prototype.stop = function () {
                        a.prototype.stop.call(this);
                        this.Aa.flush();
                    };
                    c.prototype.Yb = function () {
                        var b = this.cf();
                        b && b !== this.fg && ((this.fg = b), this.Bi(b));
                    };
                    c.prototype.cf = function () {
                        var b = fe(this.l);
                        return b ? b[2] : null;
                    };
                    c.prototype.Bi = function (b) {
                        var d = bg(this.l);
                        this.G.Y("event", { x: d.x, y: d.y, level: b }, "zoom");
                    };
                    return c;
                })(cb),
                ae,
                ef = {
                    91: "super",
                    93: "super",
                    224: "super",
                    18: "alt",
                    17: "ctrl",
                    16: "shift",
                    9: "tab",
                    8: "backspace",
                    46: "delete",
                },
                Sl = {
                    super: 1,
                    lj: 2,
                    alt: 3,
                    shift: 4,
                    Fj: 5,
                    delete: 6,
                    jj: 6,
                },
                Yu = [4, 9, 8, 32, 37, 38, 39, 40, 46],
                Tl =
                    ((ae = {}),
                    (ae["1"] = {
                        91: "&#8984;",
                        93: "&#8984;",
                        224: "&#8984;",
                        18: "&#8997;",
                        17: "&#8963;",
                        16: "&#8679;",
                        9: "&#8677;",
                        8: "&#9003;",
                        46: "&#9003;",
                    }),
                    (ae["2"] = {
                        91: "&#xff;",
                        93: "&#xff;",
                        224: "&#xff;",
                        18: "Alt",
                        17: "Ctrl",
                        16: "Shift",
                        9: "Tab",
                        8: "Backspace",
                        46: "Delete",
                    }),
                    (ae.Vh = {
                        32: "SPACEBAR",
                        37: "&larr;",
                        38: "&uarr;",
                        39: "&rarr;",
                        40: "&darr;",
                        13: "Enter",
                    }),
                    ae),
                Zu = /flash/,
                $u = /ym-disable-keys/,
                av = /^&#/,
                bv = (function (a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.kb = {};
                        d.Ma = 0;
                        d.Da = [];
                        d.Vf = [];
                        d.ic = 0;
                        d.Af = 0;
                        d.ia.push([["keydown"], d.yh]);
                        d.ia.push([["keyup"], d.zh]);
                        d.og =
                            -1 !== kc(n(b, "navigator.appVersion") || "", "Mac")
                                ? "1"
                                : "2";
                        d.zc = d.L.H(d.zc, "v");
                        d.nd = d.L.H(d.nd, "ec");
                        d.Nc = d.L.H(d.Nc, "sk");
                        d.vd = d.L.H(d.vd, "gk");
                        d.le = d.L.H(d.le, "sc");
                        d.Xb = d.L.H(d.Xb, "cc");
                        d.reset = d.L.H(d.reset, "r");
                        d.Kc = d.L.H(d.Kc, "rs");
                        return d;
                    }
                    Na(c, a);
                    c.prototype.yh = function (b) {
                        if (this.zc(b) && !this.Nh(b)) {
                            var d = b.keyCode;
                            b.repeat ||
                                this.kb[d] ||
                                ((this.kb[b.keyCode] = !0),
                                ef[b.keyCode] && !this.Ma
                                    ? ((this.Ma += 1),
                                      this.le(b),
                                      this.reset(300))
                                    : this.Ma
                                    ? (this.xg(), this.ae(b), this.nd())
                                    : (this.reset(), this.ae(b)));
                        }
                    };
                    c.prototype.zh = function (b) {
                        if (this.zc(b)) {
                            var d = b.keyCode,
                                e = ef[b.keyCode];
                            this.kb[b.keyCode] && (this.kb[d] = !1);
                            e && this.Ma && ((this.Ma = 0), (this.kb = {}));
                            1 === this.Da.length &&
                                ((b = this.Da[0]),
                                H(b.keyCode, Yu) &&
                                    (this.Nc([b], !0), this.reset()));
                            this.Da = ha(v(U("keyCode"), Ba(d), Hc), this.Da);
                            la(this.l, this.ic);
                        }
                    };
                    c.prototype.zc = function (b) {
                        var d = this.l.document.activeElement;
                        d =
                            d &&
                            "OBJECT" === d.nodeName &&
                            Zu.test(d.getAttribute("type") || "");
                        b = b.target;
                        if (!b) return !d;
                        b =
                            "INPUT" === b.nodeName &&
                            "password" === b.getAttribute("type") &&
                            $u.test(b.className);
                        return !d && !b;
                    };
                    c.prototype.nd = function () {
                        this.Vf = this.Da.slice(0);
                        la(this.l, this.ic);
                        this.ic = S(
                            this.l,
                            u(this.Vf, I(this.Nc, this)),
                            0,
                            "e.c"
                        );
                    };
                    c.prototype.Nc = function (b, d) {
                        void 0 === d && (d = !1);
                        if (1 < b.length || d) {
                            var e = this.vd(b);
                            this.G.Y("event", { keystrokes: e }, "keystroke");
                        }
                    };
                    c.prototype.vd = function (b) {
                        var d = this;
                        b = z(function (e) {
                            e = e.keyCode;
                            var f = ef[e],
                                g = d.oh(e);
                            return {
                                id: e,
                                key: g,
                                isMeta: !!f && av.test(g),
                                modifier: f,
                            };
                        }, b);
                        return we(function (e, f) {
                            return (
                                (Sl[e.modifier] || 100) -
                                (Sl[f.modifier] || 100)
                            );
                        }, b);
                    };
                    c.prototype.oh = function (b) {
                        return (
                            Tl[this.og][b] || Tl.Vh[b] || String.fromCharCode(b)
                        );
                    };
                    c.prototype.ae = function (b) {
                        H(b, this.Da) || this.Da.push(b);
                    };
                    c.prototype.le = function (b) {
                        this.ae(b);
                        this.Xb();
                    };
                    c.prototype.Xb = function () {
                        this.Ma ? S(this.l, this.Xb, 100) : (this.Da = []);
                    };
                    c.prototype.xg = function () {
                        la(this.l, this.Af);
                    };
                    c.prototype.reset = function (b) {
                        b
                            ? (this.Af = S(this.l, I(this.Kc, this), b))
                            : this.Kc();
                    };
                    c.prototype.Kc = function () {
                        this.Ma = 0;
                        this.Da = [];
                        this.kb = {};
                        la(this.l, this.ic);
                    };
                    c.prototype.Nh = function (b) {
                        return b.target && "INPUT" === b.target.nodeName
                            ? b.shiftKey ||
                                  32 === b.keyCode ||
                                  "shift" === ef[b.keyCode]
                            : !1;
                    };
                    return c;
                })(cb),
                eo = ["sr", "sd", "\u043d"],
                cv = /allow-same-origin/,
                dv = (function (a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.Sb = [];
                        d.qd = {};
                        d.Rd = d.L.H(d.Rd, "fi");
                        d.Sd = d.L.H(d.Sd, "sd");
                        d.Td = d.L.H(d.Td, "src");
                        d.ya = new b.MutationObserver(d.Td);
                        return d;
                    }
                    Na(c, a);
                    c.prototype.start = function () {
                        a.prototype.start.call(this);
                        this.G.Fb().Zb &&
                            this.G.ra().F("iframe", "NA:", I(this.Rd, this));
                        this.G.Ze().sd().F(["sdr"], I(this.Sd, this));
                    };
                    c.prototype.stop = function () {
                        a.prototype.stop.call(this);
                        x(function (b) {
                            b.G.stop();
                        }, this.Sb);
                    };
                    c.prototype.Td = function (b) {
                        var d = b.pop().target;
                        if (
                            (b = tb(function (f) {
                                return f.ef === d;
                            }, this.Sb))
                        ) {
                            this.Sb = ha(function (f) {
                                return f.ef !== d;
                            }, this.Sb);
                            var e = b.G.ud();
                            try {
                                b.G.stop();
                            } catch (f) {}
                            this.cc(d, e);
                        }
                    };
                    c.prototype.Rd = function (b) {
                        if (b) {
                            var d = b.data.node;
                            this.ya.observe(d, {
                                attributes: !0,
                                attributeFilter: ["src"],
                            });
                            this.cc(d, b.data.id);
                        }
                    };
                    c.prototype.cc = function (b, d) {
                        var e = this;
                        this.Lh(b) &&
                            Nb(
                                this.l,
                                b
                            )(
                                Ra(D, function () {
                                    var f = e.G.cc(b.contentWindow, d);
                                    e.Sb.push({ G: f, ef: b });
                                })
                            );
                    };
                    c.prototype.Sd = function (b) {
                        var d = this,
                            e = b.frameId;
                        b = b.data;
                        this.qd[e] || (this.qd[e] = { data: [] });
                        var f = this.qd[e];
                        f.data = f.data.concat(b);
                        this.l.isNaN(f.kd) &&
                            x(function (g) {
                                "page" === g.type &&
                                    (f.kd = g.data.recordStamp - d.G.$e());
                            }, f.data);
                        this.l.isNaN(f.kd) ||
                            (this.G.aa(
                                z(function (g) {
                                    g.stamp += f.kd;
                                    g.stamp = d.l.Math.max(0, g.stamp);
                                    return g;
                                }, f.data)
                            ),
                            (f.data = []));
                    };
                    c.prototype.Lh = function (b) {
                        var d = b.getAttribute("src"),
                            e = b.getAttribute("sandbox");
                        return b.getAttribute("_ym_ignore") ||
                            (e && !e.match(cv)) ||
                            (d &&
                                "about:blank" !== d &&
                                (d = Sc(this.l, d).host) &&
                                T(this.l).host !== d)
                            ? !1
                            : n(b, "contentWindow.location.href");
                    };
                    return c;
                })(cb),
                ev = w(function (a) {
                    var c = n(a, "sessionStorage");
                    if (!c) return null;
                    try {
                        var b = c.getItem("__ym_tab_guid");
                        c = !1;
                        var d = n(a, "opener.sessionStorage");
                        try {
                            c = !!d && b === d.getItem("__ym_tab_guid");
                        } catch (e) {
                            c = !0;
                        }
                        if (!b || c)
                            (b = ji()),
                                a.sessionStorage.setItem("__ym_tab_guid", b);
                        return b;
                    } catch (e) {
                        return null;
                    }
                }),
                fv = (function (a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.ee = b.L.H(b.ee, "ps");
                        return b;
                    }
                    Na(c, a);
                    c.prototype.start = function () {
                        this.G.ra().uc({
                            nodes: [this.l.document.documentElement],
                            Oc: this.ee,
                        });
                    };
                    c.prototype.ee = function (b) {
                        var d = this.G.qh(),
                            e = d.hh(),
                            f = T(this.l),
                            g = f.host,
                            h = f.protocol;
                        f = f.pathname;
                        var k = Pc(this.l),
                            l = k[0];
                        k = k[1];
                        this.G.Y(
                            "page",
                            {
                                content: z(function (m) {
                                    m.node = void 0;
                                    return m;
                                }, b),
                                base: e || "",
                                hasBase: !!e,
                                viewport: { width: l, height: k },
                                title: this.l.document.title,
                                doctype: d.jh() || "",
                                address: this.l.location.href,
                                ua: this.l.navigator.userAgent,
                                referrer: this.l.document.referrer,
                                screen: {
                                    width: this.l.screen.width,
                                    height: this.l.screen.height,
                                },
                                location: { host: g, protocol: h, path: f },
                                recordStamp: this.G.$e(),
                                tabId: ev(this.l),
                            },
                            "page",
                            0
                        );
                    };
                    return c;
                })(cb),
                gv = ["addRule", "removeRule", "insertRule", "deleteRule"],
                nh = [
                    [
                        (function (a) {
                            function c(b, d, e) {
                                b = a.call(this, b, d, e) || this;
                                b.$a = {};
                                b.Tb = {};
                                b.Ge = 0;
                                b.Ec = b.L.H(b.Ec, "a");
                                b.tb = b.L.H(b.tb, "sr");
                                b.Fc = b.L.H(b.Fc, "r");
                                b.aa = b.L.H(b.aa, "d");
                                return b;
                            }
                            Na(c, a);
                            c.prototype.start = function () {
                                var b = this.G.ra();
                                b.F("style", "NA:", this.Ec);
                                b.F("style", "NR:", this.Fc);
                                this.aa();
                            };
                            c.prototype.stop = function () {
                                var b = this;
                                a.prototype.stop.call(this);
                                var d = this.G.ra();
                                d.ga("style", "NA:", this.Ec);
                                d.ga("style", "NR:", this.Fc);
                                this.aa();
                                la(this.l, this.Ge);
                                x(function (e) {
                                    b.$a[e].sheet && b.Df(b.$a[e].sheet);
                                }, ea(this.$a));
                                this.$a = {};
                            };
                            c.prototype.aa = function () {
                                var b = this;
                                x(function (d) {
                                    var e = d[0];
                                    d = d[1];
                                    if (d.length) {
                                        for (
                                            var f = [],
                                                g = d[0].stamp,
                                                h = [],
                                                k = 0;
                                            k < d.length;
                                            k += 1
                                        ) {
                                            var l = d[k],
                                                m = l.stamp;
                                            delete l.stamp;
                                            m <= g + 50
                                                ? f.push(l)
                                                : (h.push(f),
                                                  (g = m),
                                                  (f = [l]));
                                        }
                                        f.length && h.push(f);
                                        h.length &&
                                            x(function (p) {
                                                b.G.Y(
                                                    "event",
                                                    {
                                                        target: Ja(e),
                                                        changes: p,
                                                    },
                                                    "stylechange",
                                                    g
                                                );
                                            }, h);
                                        delete b.Tb[e];
                                    }
                                }, Ia(this.Tb));
                                this.Ge = S(this.l, this.aa, 100);
                            };
                            c.prototype.tb = function (b, d, e, f, g) {
                                void 0 === f && (f = "");
                                void 0 === g && (g = -1);
                                this.Tb[b] || (this.Tb[b] = []);
                                this.Tb[b].push({
                                    op: d,
                                    style: f,
                                    index: g,
                                    stamp: e,
                                });
                            };
                            c.prototype.oi = function (b, d) {
                                var e = this,
                                    f = b.addRule,
                                    g = b.removeRule,
                                    h = b.insertRule,
                                    k = b.deleteRule;
                                P(f) &&
                                    (b.addRule = function (l, m, p) {
                                        e.tb(
                                            d,
                                            "a",
                                            e.G.stamp(),
                                            l + "{" + m + "}",
                                            p
                                        );
                                        return f.call(b, l, m, p);
                                    });
                                P(g) &&
                                    (b.removeRule = function (l) {
                                        e.tb(d, "r", e.G.stamp(), "", l);
                                        return g.call(b, l);
                                    });
                                P(h) &&
                                    (b.insertRule = function (l, m) {
                                        e.tb(d, "a", e.G.stamp(), l, m);
                                        return h.call(b, l, m);
                                    });
                                P(k) &&
                                    (b.deleteRule = function (l) {
                                        e.tb(d, "r", e.G.stamp(), "", l);
                                        return k.call(b, l);
                                    });
                            };
                            c.prototype.Df = function (b) {
                                var d = this;
                                x(function (e) {
                                    var f = d.l.CSSStyleSheet.prototype[e];
                                    P(f) && (b[e] = I(f, b));
                                }, gv);
                            };
                            c.prototype.Tg = function (b) {
                                try {
                                    return b.cssRules || b.rules;
                                } catch (d) {
                                    return null;
                                }
                            };
                            c.prototype.Ec = function (b) {
                                var d = b.data;
                                b = d.id;
                                d = d.node;
                                if (
                                    d.sheet &&
                                    !d.getAttribute("src") &&
                                    !d.innerText
                                ) {
                                    var e = d.sheet,
                                        f = this.Tg(e);
                                    if (f && f.length) {
                                        for (
                                            var g = [], h = 0;
                                            h < f.length;
                                            h += 1
                                        )
                                            g.push({
                                                style: f[h].cssText,
                                                index: h,
                                                op: "a",
                                            });
                                        this.G.Y(
                                            "event",
                                            { changes: g, target: b },
                                            "stylechange"
                                        );
                                    }
                                    this.oi(e, b);
                                    this.$a[b] = d;
                                }
                            };
                            c.prototype.Fc = function (b) {
                                b = b.data.id;
                                var d = this.$a[b];
                                d &&
                                    (delete this.$a[b],
                                    d.sheet && this.Df(d.sheet));
                            };
                            return c;
                        })(cb),
                        "ss",
                    ],
                    [Gu, "in"],
                    [Du, "mu"],
                    [Hu, "r"],
                    [Iu, "sc"],
                    [Ku, "mo"],
                    [Mu, "f"],
                    [Ru, "se"],
                    [Tu, "wf"],
                    [Vu, "t"],
                    [Wu, "src"],
                    [Xu, "z"],
                    [bv, "ks"],
                ];
            nh.push([dv, "if"]);
            nh.push([fv, "pa"]);
            var hv = w(function (a) {
                    var c = a.document;
                    return {
                        xd: function () {
                            if (c.scrollingElement) return c.scrollingElement;
                            var b =
                                0 === hb(c.compatMode, "CSS1")
                                    ? c.documentElement
                                    : c.body;
                            return n(c, "documentElement.scrollHeight") >=
                                n(c, "body.scrollHeight")
                                ? b
                                : null;
                        },
                        ph: function () {
                            var b = a.screen;
                            if (!b) return 0;
                            var d = tb(u(b, n), [
                                "orientation",
                                "mozOrientation",
                                "msOrientation",
                            ]);
                            return n(b, d + ".angle") || 0;
                        },
                        wj: u(a, rb),
                        ff: u(a, yd),
                        vj: u(a, $e),
                    };
                }),
                iv = (function () {
                    function a(c, b) {
                        var d = this;
                        this.Ib = 0;
                        this.jd = [];
                        this.Hb = null;
                        this.ta = this.Ub = this.Tf = !1;
                        this.recordStamp = 0;
                        this.qh = function () {
                            return d.page;
                        };
                        this.ud = function () {
                            return d.Ib;
                        };
                        this.$e = function () {
                            return d.recordStamp;
                        };
                        this.nh = function () {
                            return d.cb;
                        };
                        this.Ze = function () {
                            return d.Hb;
                        };
                        this.ra = function () {
                            return d.Dd;
                        };
                        this.stamp = function () {
                            return d.qe
                                ? d.l.Math.max(d.qe(Z) - d.recordStamp, 0)
                                : 0;
                        };
                        this.Fb = function () {
                            return d.options;
                        };
                        this.hb = function () {
                            return d.ug;
                        };
                        this.Y = function (f, g, h, k) {
                            void 0 === k && (k = d.stamp());
                            f = d.mh(f, g, h, k);
                            d.aa(f);
                        };
                        this.mh = function (f, g, h, k) {
                            void 0 === k && (k = d.stamp());
                            return {
                                type: f,
                                data: g,
                                stamp: k,
                                frameId: d.Ib,
                                event: h,
                            };
                        };
                        this.aa = function (f) {
                            f = O(f) ? f : [f];
                            d.Tf && !d.Ub
                                ? d.ta
                                    ? ((f = z(function (g) {
                                          return g.frameId
                                              ? g
                                              : A(g, { frameId: d.Ib });
                                      }, f)),
                                      d.Ze().Lf(f))
                                    : d.Qb(f)
                                : (d.jd = d.jd.concat(f));
                        };
                        this.l = c;
                        var e = Mf(c, this, "R");
                        this.me = e.H(this.me, "s");
                        this.aa = e.H(this.aa, "sd");
                        e = J(c);
                        e.C("wv2e") && be();
                        e.D("wv2e", !0);
                        this.options = b;
                        this.cb = fa(c);
                        this.Dd = new Eu(this.l, b);
                        this.ug = hv(c);
                        this.Ie = z(function (f) {
                            return new f[0](c, d, f[1]);
                        }, nh);
                        this.Ih();
                        this.page = bo(this.l);
                        this.me();
                    }
                    a.prototype.start = function (c) {
                        this.Tf = !0;
                        this.Qb = c;
                        this.If();
                    };
                    a.prototype.stop = function () {
                        mh(this.l) &&
                            (x(function (c) {
                                return c.stop();
                            }, this.Ie),
                            this.Dd.stop(),
                            this.Hb && this.Hb.stop(),
                            this.ta || this.Y("event", {}, "eof"));
                    };
                    a.prototype.cc = function (c, b) {
                        var d = new a(c, A({}, this.options, { frameId: b }));
                        d.start(D);
                        return d;
                    };
                    a.prototype.Ih = function () {
                        var c = this;
                        this.ta = !!this.options.frameId;
                        this.Ib = this.options.frameId || 0;
                        this.Ub = !this.ta;
                        var b = this.options.$f || [];
                        b.push(T(this.l).host);
                        this.Hb = co(this.l, this, b);
                        b = this.Hb.sd();
                        rb(this.l)
                            ? this.Ub &&
                              b.F(["i"], function (d) {
                                  c.ta = d.ta;
                                  c.Ub = !1;
                                  d.frameId && (c.Ib = d.frameId);
                                  c.If();
                              })
                            : (this.Ub = this.ta = !1);
                    };
                    a.prototype.If = function () {
                        var c = Ve(this.jd);
                        this.aa(c);
                    };
                    a.prototype.me = function () {
                        this.qe = ig(this.l);
                        this.recordStamp = this.qe(Z);
                        x(function (c) {
                            c.start();
                        }, this.Ie);
                        this.Dd.start();
                    };
                    return a;
                })(),
                jv = (function () {
                    return function (a, c, b) {
                        var d = this;
                        this.Zc = this.Lb = !1;
                        this.Va = [];
                        this.mf = [];
                        this.Le = [];
                        this.send = function (e, f, g) {
                            e = d.sender(e, d.Ig);
                            f && g && e.then(f, g);
                            return e;
                        };
                        this.oe = function (e, f, g) {
                            return new L(function (h, k) {
                                e.push([f, h, k, g]);
                            });
                        };
                        this.Ch = function () {
                            d.Va = we(function (g, h) {
                                return g[3].partNum - h[3].partNum;
                            }, d.Va);
                            var e = N(
                                    function (g, h, k) {
                                        h = h[3];
                                        return g && k + 1 === h.partNum;
                                    },
                                    !0,
                                    d.Va
                                ),
                                f = !!d.Va[d.Va.length - 1][3].end;
                            return e && f;
                        };
                        this.od = function (e) {
                            uh(
                                d.l,
                                e.slice(),
                                function (f) {
                                    d.send(f[0], f[1], f[2]);
                                },
                                20,
                                "s.w2.sf.fes"
                            );
                            Ve(e);
                        };
                        this.Zg = function () {
                            d.Zc || ((d.Zc = !0), d.od(d.mf), d.od(d.Le));
                        };
                        this.Bg = function (e) {
                            return N(
                                function (f, g) {
                                    var h = "page" === g.type && !g.frameId,
                                        k =
                                            "eof" === g.data.type ||
                                            "eof" === g.event,
                                        l = h && !!g.partNum;
                                    return {
                                        ed: f.ed || l,
                                        dd: f.dd || h,
                                        cd: f.cd || k,
                                    };
                                },
                                { dd: !1, cd: !1, ed: !1 },
                                e
                            );
                        };
                        this.Ah = function (e, f, g) {
                            g
                                ? ((e = d.oe(d.Va, e, f[0])),
                                  d.Ch() && (d.od(d.Va), (d.Lb = !0)))
                                : ((d.Lb = !0), (e = d.send(e)));
                            return e;
                        };
                        this.af = function (e, f, g) {
                            var h;
                            f = {
                                J:
                                    ((h = {}),
                                    (h["wv-part"] = "" + g),
                                    (h["wv-type"] = d.Ci),
                                    h),
                                K: Ka(),
                                ba: { da: f },
                            };
                            e && f.K.D("bt", 1);
                            return f;
                        };
                        this.Rg = function (e, f, g) {
                            e = d.af(!1, e, g);
                            return d.Lb ? d.send(e) : d.oe(d.Le, e, f);
                        };
                        this.Wh = function (e, f, g) {
                            e = d.af(!0, e, g);
                            if (d.Lb) return d.send(e);
                            var h = d.Bg(f);
                            g = h.dd;
                            var k = h.cd;
                            h = h.ed;
                            var l;
                            g && (l = d.Ah(e, f, h));
                            d.Zc
                                ? g || (l = d.send(e))
                                : (g || (l = d.oe(d.mf, e, f)),
                                  (d.Lb || k) && d.Zg());
                            return l;
                        };
                        this.l = a;
                        this.Ci = b;
                        this.sender = va(a, "W", c);
                        this.Ig = c;
                    };
                })(),
                Ul = w(
                    function (a) {
                        var c = J(a),
                            b = c.C("isEU");
                        if (W(b)) {
                            var d = Ja(ue(a, "is_gdpr") || "");
                            if (H(d, [0, 1])) c.D("isEU", d), (b = !!d);
                            else if (
                                ((a = Va(a).C("wasSynced")),
                                (a = n(a, "params.eu")))
                            )
                                c.D("isEU", a), (b = !!a);
                        }
                        return b;
                    },
                    function (a) {
                        return J(a).C("isEU");
                    }
                ),
                Hf = B("i.e", Ul),
                kv = B("i.ep", function (a) {
                    Ul(a);
                }),
                lv = B("w2", function (a, c) {
                    function b() {
                        h = !0;
                    }
                    var d = J(a),
                        e = K(c);
                    if (
                        !c.xb ||
                        ne(a) ||
                        !a.MutationObserver ||
                        !Fa("Element", a.Element)
                    )
                        return D;
                    Fa("MutationObserver", a.MutationObserver) ||
                        pc(a, e).warn("w2mo");
                    var f = Ha(function (k, l) {
                            qa(c, l)["catch"](k);
                        }),
                        g = Nb(a)(Ug(C([a, c], $n)))(
                            ml(function (k) {
                                return new iv(a, k);
                            })
                        ),
                        h = !1;
                    Dr([g, f])(
                        Ra(E(a, "wv2.R.c"), function (k) {
                            var l = k[0];
                            k = k[1];
                            if (!h) {
                                b = function () {
                                    h || ((h = !0), l && l.stop());
                                };
                                var m = d.C("wv2Counter");
                                if (!li(a, k) || m) b();
                                else if (
                                    (fa(a).F(a, ["beforeunload", "unload"], b),
                                    d.D("wv2Counter", e),
                                    d.D("stopRecorder", b),
                                    (k = xi(a, "7", "6")))
                                ) {
                                    m = new jv(a, c, k.type);
                                    var p = Rl.We(e, "m", I(m.Wh, m), k, a),
                                        q = Rl.We(e, "e", I(m.Rg, m), k, a);
                                    k = ao();
                                    m = k.bi;
                                    q.F("ag", k.rg);
                                    q.F("p", m);
                                    p.F("see", function (t) {
                                        var y = !1;
                                        x(function (F) {
                                            "page" === F.type && (y = !0);
                                        }, t);
                                        y &&
                                            (h ||
                                                q.push({
                                                    type: "event",
                                                    event: "fatalError",
                                                    data: {
                                                        code: "invalid-snapshot",
                                                        Sg: "p.s.f",
                                                        stack: "",
                                                    },
                                                }),
                                            b());
                                    });
                                    var r = Xb(function (t) {
                                        "eof" === n(t, "data.type") ||
                                        "eof" === t.event
                                            ? (q.push(t),
                                              p.push(t),
                                              q.flush(!0),
                                              p.flush(!0))
                                            : ("event" === t.type ? q : p).push(
                                                  t
                                              );
                                    });
                                    S(a, b, 864e5);
                                    Tb(a, function () {
                                        var t, y;
                                        ub(
                                            a,
                                            ((t = {}),
                                            (t.counterKey = e),
                                            (t.name = "webvisor"),
                                            (t.data =
                                                ((y = {}), (y.version = 2), y)),
                                            t)
                                        );
                                        l.start(r);
                                    });
                                }
                            }
                        })
                    );
                    return function () {
                        return b();
                    };
                }),
                mv = B("w2.cs", function (a, c) {
                    var b,
                        d = K(c);
                    fg(a, d, ((b = {}), (b.webvisor = !!c.xb), b));
                }),
                nv = ["rt", "mf"],
                Gf = w(Kc, K),
                fi = v(pd, gc),
                ov = mb("isp", function (a, c) {
                    qa(c, function (b) {
                        var d = tb(function (h) {
                            return n(b, "settings." + h);
                        }, nv);
                        if (d && Vd(a)) {
                            var e = zf(b) && !ke(a),
                                f = Gf(c);
                            A(f, { Mb: d, status: e ? 3 : 4 });
                            if (!e) {
                                e = Wn(a, c, d);
                                var g = function (h) {
                                    f.status = h;
                                };
                                return ("mf" === d ? Yn : Xn)(a, c, e)
                                    .then(u(1, g))
                                    ["catch"](u(2, g));
                            }
                        }
                    })["catch"](E(a, "l.isp"));
                }),
                Vl = B("fbq.o", function (a, c, b) {
                    var d = n(a, "fbq");
                    if (d && d.callMethod) {
                        var e = function () {
                            var g = Oa(arguments),
                                h = d.apply(void 0, g);
                            c(g);
                            return h;
                        };
                        A(e, d);
                        b && x(c, b);
                        a.fbq = e;
                    } else var f = S(a, C([a, c].concat(Ca(d && d.queue)), Vl), 1e3, "fbq.d");
                    return I(la, null, a, f);
                }),
                gd,
                Gb,
                hd,
                oh =
                    ((gd = {}),
                    (gd.add_to_wishlist = "add-to-wishlist"),
                    (gd.begin_checkout = "begin-checkout"),
                    (gd.generate_lead = "submit-lead"),
                    (gd.add_payment_info = "add-payment-info"),
                    gd),
                ph =
                    ((Gb = {}),
                    (Gb.AddToCart = "add-to-cart"),
                    (Gb.Lead = "submit-lead"),
                    (Gb.InitiateCheckout = "begin-checkout"),
                    (Gb.Purchase = "purchase"),
                    (Gb.CompleteRegistration = "register"),
                    (Gb.Contact = "submit-contact"),
                    (Gb.AddPaymentInfo = "add-payment-info"),
                    (Gb.AddToWishlist = "add-to-wishlist"),
                    (Gb.Subscribe = "subscribe"),
                    Gb),
                Un =
                    ((hd = {}),
                    (hd["1"] = oh),
                    (hd["2"] = oh),
                    (hd["3"] = oh),
                    (hd["0"] = ph),
                    hd),
                Vn = [ph.AddToCart, ph.Purchase],
                pv = ra(function (a, c) {
                    var b = n(c, "ecommerce"),
                        d = n(c, "event") || "";
                    if (!(b = b && d && { version: "3", jc: d }))
                        a: {
                            if (O(c) || Sa(c))
                                if (
                                    ((b = Oa(c)),
                                    (d = b[1]),
                                    "event" === b[0] && d)
                                ) {
                                    b = { version: "2", jc: d };
                                    break a;
                                }
                            b = void 0;
                        }
                    b ||
                        (b = (b = n(c, "ecommerce")) && {
                            version: "1",
                            jc: G(",", ea(b)),
                        });
                    b && a(b);
                }),
                qv = B("ag.e", function (a, c) {
                    if ("0" === c.ca) {
                        var b = [],
                            d = E(a, "ag.s", C([ma, b], x));
                        qa(c, function (e) {
                            if (
                                n(e, "settings.auto_goals") &&
                                Ea(a, c) &&
                                (e = Ee(a, c, "autogoal").reachGoal)
                            ) {
                                e = C([e, c.md], Tn);
                                var f = pv(e);
                                e = C([a, e], Sn);
                                b.push(Vl(a, e));
                                b.push(
                                    ij(a, "dataLayer", function (g) {
                                        g.ya.F(f);
                                    })
                                );
                            }
                        });
                        return d;
                    }
                }),
                rv = /[^\d.,]/g,
                sv = /[.,]$/,
                Qn = B("ep.pp", function (a, c) {
                    if (!c) return 0;
                    a: {
                        var b = c.replace(rv, "").replace(sv, "");
                        var d = "0" === b[b.length - 1];
                        for (
                            var e = b.length;
                            0 < e && !(3 < b.length - e + 1 && d);
                            --e
                        ) {
                            var f = b[e - 1];
                            if (H(f, [",", "."])) {
                                d = f;
                                break a;
                            }
                        }
                        d = "";
                    }
                    b = d ? c.split(d) : [c];
                    d = d ? b[1] : "00";
                    b = parseFloat(Vb(b[0]) + "." + Vb(d));
                    d = Math.pow(10, 8) - 0.01;
                    a.isNaN(b)
                        ? (b = 0)
                        : ((b = a.Math.min(b, d)), (b = a.Math.max(b, 0)));
                    return b;
                }),
                tv = [
                    [["EUR", "\u20ac"], "978"],
                    [["USD", "\u0423\\.\u0415\\.", "\\$"], "840"],
                    [["UAH", "\u0413\u0420\u041d", "\u20b4"], "980"],
                    [
                        "\u0422\u0413 KZT \u20b8 \u0422\u04a2\u0413 TENGE \u0422\u0415\u041d\u0413\u0415".split(
                            " "
                        ),
                        "398",
                    ],
                    [["GBP", "\u00a3", "UKL"], "826"],
                    [
                        "RUR RUB \u0420 \u0420\u0423\u0411 \u20bd P \u0420UB P\u0423\u0411 P\u0423B PY\u0411 \u0420Y\u0411 \u0420\u0423B P\u0423\u0411".split(
                            " "
                        ),
                        "643",
                    ],
                ],
                uv = w(function (a) {
                    return new RegExp(G("|", a), "i");
                }),
                vv = B("ep.cp", function (a) {
                    if (!a) return "643";
                    var c = $i(a);
                    return (a = tb(function (b) {
                        return uv(b[0]).test(c);
                    }, tv))
                        ? a[1]
                        : "643";
                }),
                wv = w(function () {
                    function a() {
                        var k = h + "0",
                            l = h + "1";
                        f[k]
                            ? f[l]
                                ? ((h = h.slice(0, -1)), --g)
                                : ((e[l] = b(8)), (f[l] = 1))
                            : ((e[k] = b(8)), (f[k] = 1));
                    }
                    function c() {
                        var k = h + "1";
                        f[h + "0"]
                            ? f[k]
                                ? ((h = h.slice(0, -1)), --g)
                                : ((h += "1"), (f[h] = 1))
                            : ((h += "0"), (f[h] = 1));
                    }
                    function b(k) {
                        void 0 === k && (k = 1);
                        var l = d.slice(g, g + k);
                        g += k;
                        return l;
                    }
                    for (
                        var d = G(
                                "",
                                di(
                                    "Cy2FcreLJLpYXW3BXFJqldVsGMwDcBw2BGnHL5uj1TKstzse3piMo3Osz+EqDotgqs1TIoZvKtMKDaSRFztgUS8qkqZcaETgKWM54tCpTXjV5vW5OrjBpC0jF4mspUBQGd95fNSfv+vz+g+Hze33Hg8by+Yen1PP6zsdl7PQCwX9mf+f7FMb9x/Pw+v2Pp8Xy74eTwuBwTt913u4On1XW6hxOO5nIzFam00tC218S0kaeugpqST+XliLOlMoTpRQkuewUxoy4CT3efWtdFjSAAm+1BkjIhyeU4vGOf13a6U8wzNY4bGo6DIUemE7N3SBojDr7ezXahpWF022y8mma1NuTnZbq8XZZlPStejfG/CsbPhV6/bSnA=="
                                )
                            ),
                            e = {},
                            f = {},
                            g = 1,
                            h = "";
                        g < d.length - 1;

                    )
                        ("0" === b() ? c : a)();
                    return e;
                }),
                Nn = B("ep.dec", function (a, c) {
                    if (!c || ne(a)) return [];
                    var b = di(c),
                        d = b[1],
                        e = b[2],
                        f = b.slice(3);
                    if (2 !== xe(b[0])) return [];
                    b = wv();
                    f = G("", f);
                    e = xe(d + e);
                    var g = "";
                    d = "";
                    for (var h = 0; d.length < e && f[h]; )
                        (g += f[h]),
                            b[g] &&
                                ((d += String.fromCharCode(xe(b[g]))),
                                (g = "")),
                            (h += 1);
                    b = "";
                    for (f = 0; f < d.length; )
                        (e = d.charCodeAt(f)),
                            128 > e
                                ? ((b += String.fromCharCode(e)), f++)
                                : 191 < e && 224 > e
                                ? ((g = d.charCodeAt(f + 1)),
                                  (b += String.fromCharCode(
                                      ((e & 31) << 6) | (g & 63)
                                  )),
                                  (f += 2))
                                : ((g = d.charCodeAt(f + 1)),
                                  (b += String.fromCharCode(
                                      ((e & 15) << 12) |
                                          ((g & 63) << 6) |
                                          (d.charCodeAt(f + 2) & 63)
                                  )),
                                  (f += 3));
                    d = Lb(a, b);
                    return O(d) ? z(hs, d) : [];
                }),
                Pn = B("ep.ent", function (a, c, b) {
                    a = "" + Ya(a, 10, 99);
                    b = "" + 100 * c + b + a;
                    if (16 < Sa(b)) return "";
                    b = ei("0", 16, b);
                    c = b.slice(0, 8);
                    b = b.slice(-8);
                    c = (+c ^ 92844).toString(35);
                    b = (+b ^ 92844).toString(35);
                    return "" + c + "z" + b;
                }),
                Wl = v(ci, vv),
                Xl = B("ep.ctp", function (a, c, b, d) {
                    var e = Wl(a, b),
                        f = bi(a, d);
                    ai(a, c, e, f);
                    Fa("MutationObserver", a.MutationObserver) &&
                        new a.MutationObserver(function () {
                            var g = Wl(a, b),
                                h = bi(a, d);
                            if (e !== g || f !== h)
                                (e = g), (f = h), ai(a, c, e, f);
                        }).observe(a.document.body, {
                            attributes: !0,
                            childList: !0,
                            subtree: !0,
                            characterData: !0,
                        });
                }),
                xv = B("ep.chp", function (a, c, b, d, e) {
                    b && Ff(a, c);
                    return d || e
                        ? fa(a).F(
                              a.document,
                              ["click"],
                              E(a, "ep.chp.cl", C([a, c, d, e], On))
                          )
                        : D;
                }),
                Bv = B("ep.i", function (a, c) {
                    if (me(a))
                        return Mn(a, c).then(function (b) {
                            var d = b.Ng,
                                e = d[0],
                                f = d[1],
                                g = d[2],
                                h = d[3],
                                k = d[4],
                                l = d[5],
                                m = d[6],
                                p = d[7],
                                q = d[8],
                                r = d[9],
                                t = d[10],
                                y = d[11],
                                F = d[12],
                                Q = d[13],
                                M = d[14],
                                na = d[15];
                            if (!b.isEnabled) return L.resolve(D);
                            var ya = pe(a, e),
                                Bb = pe(a, h),
                                Ed = pe(a, m),
                                Be = pe(a, q),
                                yv = "" + e + f + g === "" + h + k + l;
                            return new L(function (zv, Av) {
                                Nb(a)(
                                    Ra(Av, function () {
                                        ya && Xl(a, c, f, g, t, y, F);
                                        Bb && !yv && Xl(a, c, k, l, Q, M, na);
                                        zv(xv(a, c, Ed || Be, p, r));
                                    })
                                );
                            });
                        });
                }),
                An = [
                    "RTCPeerConnection",
                    "mozRTCPeerConnection",
                    "webkitRTCPeerConnection",
                ],
                Cv = B("cc.i", function (a, c) {
                    var b = C([a, c], Ln);
                    b = C([a, b, 300, void 0], S);
                    qa(c, b);
                }),
                Dv = u("9-d5ve+.r%7", R),
                Ev = B("ad", function (a, c) {
                    if (!c.Ta) {
                        var b = J(a);
                        if (!b.C("adBlockEnabled")) {
                            var d = function (m) {
                                    H(m, ["2", "1"]) &&
                                        b.D("adBlockEnabled", m);
                                },
                                e = Uc(a),
                                f = e.C("isad");
                            if (f) d(f);
                            else {
                                var g = u("adStatus", b.D),
                                    h = function (m) {
                                        m = m ? "1" : "2";
                                        d(m);
                                        g("complete");
                                        e.D("isad", m, 1200);
                                        return m;
                                    },
                                    k = va(a, "adb", c);
                                if (!b.C("adStatus")) {
                                    g("process");
                                    var l =
                                        "metrika/a" +
                                        Dv().replace(/[^a-v]+/g, "") +
                                        "t.gif";
                                    In(a, function () {
                                        return k({ ma: { za: l } })
                                            .then(u(!1, h))
                                            ["catch"](u(!0, h));
                                    });
                                }
                            }
                        }
                    }
                }),
                Fv = B("pr.p", function (a, c) {
                    var b, d;
                    if (sg(a)) {
                        var e = va(a, "5", c),
                            f = Ka(((b = {}), (b.pq = 1), (b.ar = 1), b));
                        e(
                            {
                                K: f,
                                J:
                                    ((d = {}),
                                    (d["page-url"] = T(a).href),
                                    (d["page-ref"] =
                                        n(a, "document.referrer") || ""),
                                    d),
                            },
                            c
                        )["catch"](E(a, "pr.p.s"));
                    }
                }),
                $h = !1,
                Gv = B("fid", function (a) {
                    var c,
                        b = D;
                    if (!P(a.PerformanceObserver)) return b;
                    var d = J(a);
                    if (d.C("fido")) return b;
                    d.D("fido", !0);
                    var e = new a.PerformanceObserver(
                        E(a, "fid", function (f) {
                            f = f.getEntries()[0];
                            d.D(
                                "fid",
                                a.Math.round(
                                    100 * (f.processingStart - f.startTime)
                                )
                            );
                            b();
                        })
                    );
                    b = function () {
                        return e.disconnect();
                    };
                    try {
                        e.observe(
                            ((c = {}),
                            (c.type = "first-input"),
                            (c.buffered = !0),
                            c)
                        );
                    } catch (f) {}
                    return b;
                }),
                Hv = B(
                    "lt.p",
                    mb("lt.p", function (a) {
                        var c;
                        if (Fa("PerformanceObserver", a.PerformanceObserver)) {
                            var b = 0,
                                d = new a.PerformanceObserver(
                                    E(a, "lt.o", function (e) {
                                        e &&
                                            e.getEntries &&
                                            ((e = e.getEntries()),
                                            (b = N(
                                                function (f, g) {
                                                    return f + g.duration;
                                                },
                                                b,
                                                e
                                            )),
                                            Sd(a).D("lt", b));
                                    })
                                );
                            try {
                                d.observe(
                                    ((c = {}),
                                    (c.type = "longtask"),
                                    (c.buffered = !0),
                                    c)
                                );
                            } catch (e) {
                                return;
                            }
                            return function () {
                                return d.disconnect();
                            };
                        }
                    })
                ),
                Iv = w(
                    v(U("performance.memory.jsHeapSizeLimit"), Ga("concat", ""))
                ),
                Jv = ["availWidth", "availHeight", "availTop"],
                Kv =
                    "appName vendor deviceMemory hardwareConcurrency maxTouchPoints appVersion productSub appCodeName vendorSub".split(
                        " "
                    ),
                Lv = ["webgl", "experimental-webgl"],
                Gn = [-0.2, -0.9, 0, 0.4, -0.26, 0, 0, 0.732134444, 0],
                Cf = u(Pa("ccf"), Ua),
                Fn =
                    "prefers-reduced-motion;prefers-reduced-transparency;prefers-color-scheme: dark;prefers-color-scheme: light;pointer: none;pointer: coarse;pointer: fine;any-pointer: none;any-pointer: coarse;any-pointer: fine;scan: interlace;scan: progressive;color-gamut: srgb;color-gamut: p3;color-gamut: rec2020;update: fast;update: slow;update: none;grid: 0;grid: 2;hover: hover;inverted-colors: inverted;inverted-colors: none".split(
                        ";"
                    ),
                Yh =
                    "video/ogg video/mp4 video/webm audio/x-aiff audio/x-m4a audio/mpeg audio/aac audio/wav audio/ogg audio/mp4".split(
                        " "
                    ),
                Dn =
                    "theora vorbis 1 avc1.4D401E mp4a.40.2 vp8.0 mp4a.40.5".split(
                        " "
                    ),
                qh = w(function (a, c) {
                    var b = J(a),
                        d = Va(a),
                        e = [],
                        f = C([a, c, b, d], Up);
                    zd(a) || Vp(a, "14.1") || e.push(C([zn, "pp", ""], f));
                    var g = !zl(a) || Af(a, 68);
                    g && e.push(C([Bn, "pu", ""], f));
                    !g ||
                        d.Fd ||
                        Vd(a) ||
                        (e.push(C([yn, "zzlc", "na"], f)),
                        e.push(C([xn, "cc", ""], f)));
                    return e.length
                        ? {
                              Ba: function (h, k) {
                                  if (0 === b.C("isEU"))
                                      try {
                                          x(De, e);
                                      } catch (l) {}
                                  k();
                              },
                              N: function (h, k) {
                                  var l = h.K;
                                  if (l && 0 === b.C("isEU"))
                                      try {
                                          x(Ha(l), e);
                                      } catch (m) {}
                                  k();
                              },
                          }
                        : {};
                }, v(fb, K)),
                Mv = v(function (a) {
                    return (a = n(a, "navigator.plugins")) && Sa(a)
                        ? v(
                              Ca,
                              ua,
                              Hs(function (c, b) {
                                  return c.name > b.name ? 1 : 2;
                              }),
                              Xb(Rp)
                          )(a)
                        : "";
                }, ze(",")),
                Nv = (function (a) {
                    return function (c) {
                        var b = db(c);
                        if (!b) return "";
                        b = b("canvas");
                        var d = [],
                            e = a(),
                            f = e.Ug;
                        e = e.Kg;
                        try {
                            var g = Ga("getContext", b);
                            d = z(v(R, g), e);
                        } catch (h) {
                            return "";
                        }
                        return (g = tb(R, d)) ? f(c, { canvas: b, yg: g }) : "";
                    };
                })(function () {
                    return { Kg: Lv, Ug: tn };
                }),
                rn = ["name", "lang", "localService", "voiceURI", "default"],
                pn = eb(/[a-z\u0430-\u044f\u0451,.]/gi),
                Ov = B("ice", function (a, c, b) {
                    (c = Ea(a, c)) && (b = Sh(a, b)) && Rh(a, c, b);
                }),
                Pv = B("ice", function (a, c, b) {
                    (c = Ea(a, c)) &&
                        (b = Sh(a, b)) &&
                        wj(a, b.Kh).then(C([a, c, b], Rh), E(a, "ice.s"));
                }),
                Qv = ["text", "email", "tel"],
                Rv = ["cc-", "name", "shipping"],
                Sv = B("icei", function (a, c) {
                    if (ul(a)) {
                        var b = !1,
                            d = D,
                            e = D;
                        qa(c, function (f) {
                            if (!(Hf(a) || n(f, "settings.eu") || b)) {
                                f = n(f, "settings.cf") ? Pv : Ov;
                                var g = C([a, c], f),
                                    h = function (k) {
                                        return Qf(a, k) ||
                                            !H(k.type, Qv) ||
                                            $a(Eb, z(u(k.autocomplete, ib), Rv))
                                            ? !1
                                            : !0;
                                    };
                                d = Vh(a, "input", ["blur"], g, h);
                                e = Vh(a, "form", ["submit"], function (k) {
                                    var l = k.target;
                                    l &&
                                        ((l = jb("input", l)),
                                        x(function (m) {
                                            h(m) &&
                                                g({
                                                    target: m,
                                                    isTrusted: k.isTrusted,
                                                });
                                        }, l));
                                });
                            }
                        });
                        return function () {
                            b = !0;
                            d();
                            e();
                        };
                    }
                }),
                Qh,
                Tv = B("p.ai", function (a, c) {
                    if (zd(a) || tf(a))
                        return qa(c, function (b) {
                            var d;
                            if ((b = n(b, "settings.sbp")))
                                return Ph(
                                    a,
                                    A({}, b, ((d = {}), (d.c = c.id), d)),
                                    10
                                );
                        });
                }),
                Uv =
                    "architecture bitness model platformVersion uaFullVersion fullVersionList".split(
                        " "
                    ),
                Yl = mb("uah", function (a) {
                    if (
                        !Fa(
                            "getHighEntropyValues",
                            n(a, "navigator.userAgentData.getHighEntropyValues")
                        )
                    )
                        return L.reject("0");
                    try {
                        return a.navigator.userAgentData
                            .getHighEntropyValues(Uv)
                            .then(
                                function (c) {
                                    if (!ka(c)) throw "2";
                                    return c;
                                },
                                function () {
                                    throw "1";
                                }
                            );
                    } catch (c) {
                        return L.reject("3");
                    }
                }),
                Zl = new RegExp(
                    G(
                        "|",
                        "yandex.com/bots;Googlebot;APIs-Google;Mediapartners-Google;AdsBot-Google;FeedFetcher-Google;Google-Read-Aloud;DuplexWeb-Google;Google Favicon;googleweblight;Lighthouse;Mail.RU_Bot;StackRambler;Slurp;msnbot;bingbot;www.baidu.com/search/spi_?der.htm".split(
                            ";"
                        )
                    ).replace(/[./]/g, "\\$&")
                ),
                hn = w(function (a) {
                    var c = lb(a);
                    return (c = Zl.test(c))
                        ? L.resolve(c)
                        : Yl(a).then(function (b) {
                              try {
                                  return N(
                                      function (d, e) {
                                          return d || Zl.test(e.brand);
                                      },
                                      !1,
                                      b.brands
                                  );
                              } catch (d) {
                                  return !1;
                              }
                          }, u(!1, R));
                }),
                wc = ["0", "1", "2", "3"],
                Qc = wc[0],
                sf = wc[1],
                Vv = wc[2],
                $l = [
                    "GDPR-ok-view-detailed-0",
                    "GDPR-ok-view-detailed-1",
                    "GDPR-ok-view-detailed-2",
                    "GDPR-ok-view-detailed-3",
                ],
                Nh = ["GDPR-ok-view-default", "GDPR-ok-view-detailed"].concat(
                    $l
                ),
                rf =
                    "GDPR-ok GDPR-cross GDPR-cancel 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 GDPR-settings GDPR-ok-view-default GDPR-ok-view-detailed 21 22 23"
                        .split(" ")
                        .concat($l)
                        .concat(["28", "29", "30", "31"]),
                Wv = "3 13 14 31 15 16 17 28".split(" "),
                ie = v(Xb(U("ymetrikaEvent.type")), Gs(vc(rf))),
                Xv = {
                    Sh: !0,
                    url: "https://yastatic.net/s3/gdpr/v3/gdpr",
                    sf: "",
                    kf: "az be en es et fi fr hy ka kk ky lt lv no pt ro ru sl tg tr uz cs da de el hr it nl pl sk sv".split(
                        " "
                    ),
                },
                ln = mb("gdpr", function (a, c, b, d, e) {
                    function f(p) {
                        c("10");
                        b.F(Nh, function (q) {
                            var r;
                            q = q.type;
                            l.Of(((r = {}), (r.type = q), r));
                            p({ value: Oh(q) });
                        });
                    }
                    var g = void 0 === e ? Xv : e;
                    e = g.url;
                    var h = g.sf,
                        k = g.Sh;
                    g = on(a, g.kf, d.cj);
                    var l = le(a, d);
                    if (!l) return L.resolve({ value: Qc, Hd: !0 });
                    if (a._yaGdprLoaded)
                        return new L(function (p) {
                            c("7");
                            f(p);
                        });
                    var m = Nc(a, { src: "" + e + (k ? "" : g) + h + ".js" });
                    return new L(function (p, q) {
                        m
                            ? (c("7"),
                              (m.onerror = function () {
                                  var r;
                                  c("9");
                                  l.Of(
                                      ((r = {}),
                                      (r.type = "GDPR-ok-view-default"),
                                      r)
                                  );
                                  p(null);
                              }),
                              (m.onload = u(p, f)))
                            : (c("9"), q(Pa("gdp.e")));
                    });
                }),
                cc,
                nn =
                    ((cc = {}),
                    (cc["GDPR-ok"] = "ok"),
                    (cc["GDPR-ok-view-default"] = "ok-default"),
                    (cc["GDPR-ok-view-detailed"] = "ok-detailed"),
                    (cc["GDPR-ok-view-detailed-0"] = "ok-detailed-all"),
                    (cc["GDPR-ok-view-detailed-1"] = "ok-detailed-tech"),
                    (cc["GDPR-ok-view-detailed-2"] =
                        "ok-detailed-tech-analytics"),
                    (cc["GDPR-ok-view-detailed-3"] = "ok-detailed-tech-other"),
                    cc),
                fn =
                    "az be en es et fi fr hy ka kk ky lt lv no pt ro ru sl tg tr uz ar he sr uk zh".split(
                        " "
                    ),
                Mh = [],
                Kh = Ga("push", Mh),
                en = w(function (a, c) {
                    var b = c.C("gdpr");
                    return H(b, wc) ? "-" + b : "";
                }),
                am = w(Fd),
                Yv = w(function () {
                    var a = N(
                        function (c, b) {
                            "ru" !== b && (c[b] = Hl + "." + b);
                            return c;
                        },
                        {},
                        Cg
                    );
                    x(function (c) {
                        a[c] = c;
                    }, ea(Cl));
                    return a;
                }),
                Xm = w(function (a) {
                    a = T(a).hostname;
                    return (
                        (a = tb(v(U("1"), Yi("test"), vb(ma)(a)), Ia(Cl))) &&
                        a[0]
                    );
                }),
                bm = (function (a, c) {
                    return function (b, d) {
                        var e = K(d);
                        e = Yv(e);
                        var f = Vm(b, e),
                            g = J(b),
                            h = rb(b);
                        return Vd(b) || Qd(b)
                            ? {}
                            : {
                                  N: function (k, l) {
                                      var m = k.K,
                                          p = Ih(b);
                                      m = !(m && m.C("pv"));
                                      if (!p || h || m || !f.length) return l();
                                      if (g.C("startSync")) am(b).push(l);
                                      else {
                                          g.D("startSync", !0);
                                          p = C([b, f, D, !1], a);
                                          m = uf[0];
                                          if (!m) return l();
                                          m(b)
                                              .then(p)
                                              .then(l, v(ve(l), E(b, c)))
                                              ["catch"](D);
                                      }
                                  },
                              };
                    };
                })(function (a, c, b, d) {
                    var e = ja(a),
                        f = J(a),
                        g = Va(a);
                    b = bh(a, "c");
                    var h = $b(a, b);
                    return zb(
                        function (k, l) {
                            function m() {
                                var r = g.C("synced");
                                f.D("startSync", !1);
                                r && ((r[l.Uh] = p), g.D("synced", r));
                                r = am(a);
                                x(ma, r);
                                Ve(r);
                            }
                            var p,
                                q = h({ ba: { ha: ["sync.cook"], Oa: 1500 } }, [
                                    xa.Qa +
                                        "//" +
                                        l.Ii +
                                        "/sync_cookie_image_check" +
                                        (d ? "_secondary" : ""),
                                ])
                                    .then(function () {
                                        p = e(qb);
                                        m();
                                    })
                                    ["catch"](function () {
                                        p = e(qb) - 1435;
                                        m();
                                    });
                            q = u(q, R);
                            return k.then(q);
                        },
                        L.resolve(),
                        c
                    )["catch"](E(a, "ctl"));
                }, "sy.c"),
                Hb,
                Tm =
                    ((Hb = {}),
                    (Hb.brands = "chu"),
                    (Hb.architecture = "cha"),
                    (Hb.bitness = "chb"),
                    (Hb.uaFullVersion = "chf"),
                    (Hb.fullVersionList = "chl"),
                    (Hb.mobile = "chm"),
                    (Hb.model = "cho"),
                    (Hb.platform = "chp"),
                    (Hb.platformVersion = "chv"),
                    Hb),
                Qm = w(function (a) {
                    return Yl(a).then(Rm, Um);
                }),
                Zv = mb("ot", function (a, c) {
                    if (Ne(a)) {
                        var b = fa(a);
                        return qa(
                            c,
                            E(a, "ot.s", function (d) {
                                if (n(d, "settings.oauth")) {
                                    var e = [],
                                        f = pd(a, c);
                                    e.push(
                                        b.F(
                                            a,
                                            ["message"],
                                            E(a, "ot.m", u(f, Pm))
                                        )
                                    );
                                    Nb(a)(
                                        Ra(
                                            D,
                                            E(a, "ot.b", function () {
                                                function g(q) {
                                                    var r,
                                                        t = q.href;
                                                    t &&
                                                        eh(
                                                            t,
                                                            "https://oauth.yandex.ru/"
                                                        ) &&
                                                        !ib(t, "_ym_uid=") &&
                                                        ((t = ib(t, "?")
                                                            ? "&"
                                                            : "?"),
                                                        (q.href +=
                                                            "" +
                                                            t +
                                                            Fc(
                                                                ((r = {}),
                                                                (r._ym_uid = f),
                                                                (r.mc = "v"),
                                                                r)
                                                            )),
                                                        b.F(
                                                            q,
                                                            ["click"],
                                                            E(
                                                                a,
                                                                "ot.click",
                                                                function () {
                                                                    var y =
                                                                        "et=" +
                                                                        l(Z);
                                                                    q.href +=
                                                                        "&" + y;
                                                                }
                                                            )
                                                        ));
                                                }
                                                var h,
                                                    k = a.document.body,
                                                    l = ja(a),
                                                    m = jb("a", k);
                                                x(g, m);
                                                if (
                                                    Fa(
                                                        "MutationObserver",
                                                        a.MutationObserver
                                                    )
                                                ) {
                                                    m = new a.MutationObserver(
                                                        E(
                                                            a,
                                                            "ot.m",
                                                            u(function (q) {
                                                                q =
                                                                    q.addedNodes;
                                                                for (
                                                                    var r = 0;
                                                                    r <
                                                                    q.length;
                                                                    r += 1
                                                                ) {
                                                                    var t =
                                                                        q[r];
                                                                    "A" ===
                                                                        t.nodeName &&
                                                                        g(t);
                                                                }
                                                            }, x)
                                                        )
                                                    );
                                                    var p =
                                                        ((h = {}),
                                                        (h.childList = !0),
                                                        (h.subtree = !0),
                                                        h);
                                                    m.observe(k, p);
                                                    e.push(I(m.disconnect, m));
                                                }
                                            })
                                        )
                                    );
                                    return C([De, e], x);
                                }
                            })
                        );
                    }
                }),
                $v = B("p.cta", function (a) {
                    Nb(a)(
                        Ra(D, function () {
                            var c = J(a);
                            if (Nm(a.document)) {
                                var b = 0;
                                if (gi(a, re, "cta")) {
                                    var d = D,
                                        e = function () {
                                            hi(re, "cta");
                                            d();
                                            la(a, b);
                                        };
                                    d = fa(a).F(
                                        a,
                                        ["message"],
                                        B("p.cta.o", C([a, c, e], Om))
                                    );
                                    b = S(a, e, 1500);
                                } else c.D("cta.e", "if");
                            } else c.D("cta.e", "ns");
                        })
                    );
                }),
                Dh = [
                    "bidResponse",
                    "bidAdjustment",
                    "bidWon",
                    "bidRequested",
                    "bidTimeout",
                ],
                Ch = ["adRenderSucceeded", "adRenderFailed"],
                Km = [
                    "cpm",
                    "currency",
                    "netRevenue",
                    "requestTimestamp",
                    "responseTimestamp",
                ],
                Jm = uc(Dh, Ch, ["auctionInit", "auctionEnd"]),
                ta = {},
                aw = B("pj", function (a, c) {
                    var b,
                        d = Ea(a, c),
                        e = d && d.params;
                    return e
                        ? ((b = {}),
                          (b.pbjs = function (f) {
                              O(f) &&
                                  ((f = ha(
                                      Eb,
                                      z(function (g) {
                                          if (
                                              ka(g) &&
                                              g.data &&
                                              g.event &&
                                              ka(g.data)
                                          ) {
                                              var h = n(g, "data.args");
                                              return h
                                                  ? { event: g.event, data: h }
                                                  : g;
                                          }
                                      }, f)
                                  )),
                                  Im(f),
                                  Lm(a, e));
                          }),
                          b)
                        : D;
                }),
                Gm = /(\D\d*)/g,
                Hm = w(function () {
                    var a = Zf();
                    return N(
                        function (c, b) {
                            c[a[b]] = b;
                            return c;
                        },
                        {},
                        ea(a)
                    );
                }),
                bw = B("g.v.e", function (a, c) {
                    return qa(
                        c,
                        E(a, "g.v.t", function (b) {
                            var d = Ea(a, c);
                            if (d && (b = n(b, "settings.goal_values"))) {
                                var e = ha(v(U("url"), u(a, Bm)), b);
                                if (0 !== e.length) {
                                    b = fa(a);
                                    var f = [];
                                    e = C(
                                        [
                                            a,
                                            function (g) {
                                                var h, k;
                                                return d.params(
                                                    ((h = {}),
                                                    (h.__ym =
                                                        ((k = {}),
                                                        (k.goal_values = g),
                                                        k)),
                                                    h)
                                                );
                                            },
                                            e,
                                        ],
                                        Em
                                    );
                                    f.push(
                                        b.F(
                                            a,
                                            ["click"],
                                            E(a, "g.v.c", C([e], Cm))
                                        )
                                    );
                                    f.push(
                                        b.F(
                                            a,
                                            ["submit"],
                                            E(a, "g.v.s", C([a, e], Dm))
                                        )
                                    );
                                    return C([v(R, ma), f], x);
                                }
                            }
                        })
                    );
                }),
                ff =
                    "close stop focus blur open alert confirm prompt print postMessage captureEvents releaseEvents getSelection getComputedStyle matchMedia moveTo moveBy resizeTo resizeBy scroll scrollTo scrollBy getDefaultComputedStyle scrollByLines scrollByPages find dump requestIdleCallback cancelIdleCallback requestAnimationFrame cancelAnimationFrame reportError setTimeout clearTimeout setInterval clearInterval queueMicrotask fetch self history customElements event frames opener parent frameElement navigator clientInformation external performance visualViewport crypto speechSynthesis localStorage origin indexedDB caches sessionStorage window document location top".split(
                        " "
                    ),
                nf = {},
                zh = D,
                cw = w(function (a, c) {
                    zh = c;
                }),
                id,
                wm =
                    ((id = {}),
                    (id.copyFromWindow = function (a, c, b) {
                        if (H(b, ff) || eh(b, "on")) throw Qa("rwp");
                        c = a[b];
                        if (ca(c) || mc(a, c) || ia(c) || P(c)) return c;
                        if (O(c)) return Rd(c);
                        if (ka(c)) return Am(c);
                    }),
                    (id.loadScript = function (a, c, b, d, e) {
                        c = P(d)
                            ? mf("ls.ol", function () {
                                  return d.apply(null);
                              })
                            : D;
                        var f = P(e)
                            ? mf("ls.ol", function () {
                                  return e.apply(null);
                              })
                            : void 0;
                        xm(a, b, c, f);
                    }),
                    (id.callFromWindow = function (a, c, b) {
                        for (var d = [], e = 3; e < arguments.length; e++)
                            d[e - 3] = arguments[e];
                        if (H(b, ff)) throw Qa("rwp");
                        e = n(a, b);
                        if (!P(e)) throw Qa("wenf");
                        return e.apply(void 0, d);
                    }),
                    (id.createArgumentsQueue = function (a, c, b, d) {
                        function e() {
                            for (var g = 0; g < arguments.length; g++);
                            f.push(arguments);
                        }
                        if (
                            0 !== b.length &&
                            0 !== d.length &&
                            !n(a, b) &&
                            !n(a, d)
                        ) {
                            c = b.split(".");
                            d = d.split(".");
                            if (H(c[0], ff) || H(d[0], ff)) throw Qa("rwp");
                            var f = [];
                            Ah(a, c)[c[c.length - 1]] = e;
                            Ah(a, d)[d[d.length - 1]] = f;
                            return e;
                        }
                    }),
                    id),
                dw = ["ymab", "rcmx", "yaSurvey", "ym_debug"],
                xh = w(function (a) {
                    cw(a, function (c, b) {
                        Rc(a, "ytm." + c, b);
                    });
                    return function (c) {
                        pm(c) &&
                            x(function (b) {
                                if (O(b) && 1 === b[0]) {
                                    var d = b[1];
                                    H(d, dw) && mf("p." + d, qm)(a, b);
                                }
                            }, c.code);
                    };
                }),
                ew = B("y.t.m", function (a, c) {
                    return qa(
                        c,
                        E(a, "y.t.t", function (b) {
                            if ((b = n(b, "settings.aytm")))
                                (b = Lb(a, b)), xh(a)(b);
                        })
                    );
                }),
                fw = B("p.ips", function (a, c) {
                    qa(c, function (b) {
                        (n(b, "settings.phchange") ||
                            n(b, "settings.phhide")) &&
                            vh(a, "tag_phone", K(c), b);
                    });
                }),
                cm = {},
                dm = w(Kc),
                om = v(Ga("exec", /counterID=(\d+)/), U("1")),
                em = ra(function (a, c) {
                    var b,
                        d = dm(a),
                        e = Ca(c),
                        f = e[0],
                        g = e[1],
                        h = e.slice(2);
                    if (g) {
                        e = nm(a, f);
                        var k = e[0],
                            l = e[1];
                        e = K(l);
                        d[e] || (d[e] = {});
                        d = d[e];
                        c.Ne ||
                            (cm[g] &&
                                N(
                                    function (m, p) {
                                        return m || !!p(a, l, h, k);
                                    },
                                    !1,
                                    cm[g]
                                )) ||
                            ("init" === g
                                ? ((c.Ne = !0),
                                  k
                                      ? Ib(
                                            a,
                                            "" + f,
                                            "dc",
                                            ((b = {}), (b.key = f), b)
                                        )
                                      : (a["yaCounter" + l.id] = new a.Ya[
                                            xa.bc
                                        ](A({}, h[0], l))))
                                : k && k[g] && d.Hh
                                ? (k[g].apply(k, h), (c.Ne = !0))
                                : ((b = d.Sf),
                                  b || ((b = []), (d.Sf = b)),
                                  b.push(wa([f, g], h))));
                    }
                }),
                gw = mb("is", function (a, c) {
                    Te(a) && vh(a, "tag_debug", K(c));
                }),
                lm = B("destruct.e", function (a, c, b) {
                    return function () {
                        var d = J(a),
                            e = c.id;
                        x(function (f, g) {
                            return P(f) && E(a, "dest.fr." + g, f)();
                        }, b);
                        mm(a, K(c));
                        delete d.C("counters")[K(c)];
                        delete a["yaCounter" + e];
                    };
                }),
                jd = J(window);
            jd.Ga("hitParam", {});
            jd.Ga("lastReferrer", window.location.href);
            (function () {
                Y.push(function (a, c) {
                    var b;
                    return (
                        (b = {}),
                        (b.firstPartyParams = rt(a, c)),
                        (b.firstPartyParamsHashed = Qq(a, c)),
                        b
                    );
                });
                Wd.push("fpp");
                Wd.push("fpmh");
            })();
            (function () {
                var a = J(window);
                a.Ga("getCounters", st(window));
                kd.push(tt);
                Sg.push(function (c, b) {
                    b.counters = a.C("getCounters");
                });
            })();
            (function () {
                Y.push(function (a, c) {
                    var b;
                    ub(
                        a,
                        ((b = {}),
                        (b.counterKey = K(c)),
                        (b.name = "counter"),
                        (b.data = qk(c)),
                        b)
                    );
                });
            })();
            Da["1"] = ob;
            Y.push(ut);
            Aa["1"] = tc;
            xb(eg, -1);
            Yb["1"] = [
                [eg, -1],
                [Se, 1],
                [Me, 2],
                [Qb(), 3],
                [Cj, 4],
            ];
            Y.push(vt);
            Y.push(
                B("p.ar", function (a, c) {
                    var b,
                        d = va(a, "a", c);
                    return (
                        (b = {}),
                        (b.hit = function (e, f, g, h, k, l) {
                            var m,
                                p,
                                q,
                                r = {
                                    J: {},
                                    K: Ka(
                                        ((m = {}), (m.pv = 1), (m.ar = 1), m)
                                    ),
                                };
                            f = ka(f)
                                ? {
                                      title: f.title,
                                      xf: f.referer,
                                      X: f.params,
                                      Wb: f.callback,
                                      l: f.ctx,
                                  }
                                : { title: f, xf: g, X: h, Wb: k, l: l };
                            h = Hd(c);
                            g = e || T(a).href;
                            h.url !== g && ((h.ref = h.url), (h.url = e));
                            e = f.xf || h.ref || a.document.referrer;
                            h = nc(
                                a,
                                c,
                                "pv",
                                ((p = {}),
                                (p.id = c.id),
                                (p.url = g),
                                (p.ref = e),
                                p),
                                f.X
                            );
                            p = A(r.M || {}, { X: f.X, title: f.title });
                            r = d(
                                A(r, {
                                    M: p,
                                    J: A(
                                        r.J || {},
                                        ((q = {}),
                                        (q["page-url"] = g),
                                        (q["page-ref"] = e),
                                        q)
                                    ),
                                }),
                                c
                            ).then(h);
                            return Wc(a, "p.ar.s", r, f.Wb || D, f.l);
                        }),
                        b
                    );
                })
            );
            Da.a = ob;
            Yb.a = Zb;
            Aa.a = tl;
            Y.push(Ee);
            Da.g = ob;
            Aa.g = tc;
            Yb.g = Zb;
            Y.push(wt);
            Y.push(xt);
            Yb.t = Zb;
            Da.t = ob;
            Aa.t = tc;
            Y.push(
                B("cl.p", function (a, c) {
                    function b(p, q, r, t) {
                        void 0 === t && (t = {});
                        r
                            ? Ge(a, c, {
                                  url: r,
                                  lb: !0,
                                  wc: p,
                                  Ac: q,
                                  sender: e,
                                  dg: t,
                              })
                            : h.warn("clel");
                    }
                    var d,
                        e = va(a, "2", c),
                        f = [],
                        g = K(c),
                        h = pc(a, g),
                        k = E(a, "s.s.tr", u(Ke(a, g), Iq));
                    g = {
                        l: a,
                        bb: c,
                        Vg: f,
                        sender: e,
                        sj: J(a),
                        Hg: cd(a, c.id),
                        uj: Dc(a),
                        Pi: u(u(g, bf(a)), v(ma, U("trackLinks"))),
                    };
                    g = E(a, "cl.p.c", u(g, Fq));
                    g = fa(a).F(a, ["click"], g);
                    c.Yf && k(c.Yf);
                    var l = E(a, "file.clc", C([!0, !1], b)),
                        m = E(a, "e.l.l.clc", C([!1, !0], b));
                    f = E(a, "add.f.e.clc", yt(f));
                    return (
                        (d = {}),
                        (d.file = l),
                        (d.extLink = m),
                        (d.addFileExtension = f),
                        (d.trackLinks = k),
                        (d.u = g),
                        d
                    );
                })
            );
            Yb["2"] = Zb;
            Da["2"] = ob;
            Aa["2"] = tc;
            Da.r = Od("r");
            Aa.r = tl;
            Wa.push(
                B("p.r", function (a, c) {
                    var b = At(a),
                        d = va(a, "r", c),
                        e = E(a, "rts.p");
                    return qa(
                        c,
                        C(
                            [
                                function (f, g) {
                                    var h = { id: g.Gg, ca: g.ca },
                                        k = {
                                            ba: { da: g.ti },
                                            K: Ka(g.vg),
                                            J: g.X,
                                            M: { Ob: g.Ob },
                                            ma: { za: g.za },
                                        };
                                    g.Ha && (k.Ha = wf(g.Ha));
                                    h = d(k, h)["catch"](e);
                                    return f.then(u(h, R));
                                },
                                L.resolve(),
                                b,
                            ],
                            N
                        )
                    )["catch"](e);
                })
            );
            aa(
                "r",
                function (a) {
                    return {
                        N: function (c, b) {
                            var d = c.K,
                                e = void 0 === d ? Ka() : d,
                                f = c.M.Ob,
                                g = Gd(a);
                            d = e.C("rqnl", 0) + 1;
                            e.D("rqnl", d);
                            if ((e = n(g, G(".", [f, "browserInfo"]))))
                                (e.rqnl = d), cg(a);
                            b();
                        },
                        Ba: function (c, b) {
                            nj(a, c);
                            b();
                        },
                    };
                },
                1
            );
            xb(Fe, 100);
            aa("1", Fe, 100);
            Y.push(Bt);
            aa("n", Se, 1);
            aa("n", Me, 2);
            aa("n", Qb(), 3);
            aa("n", Fe, 100);
            Da.n = ob;
            Aa.n = tc;
            qc({ Fe: { ea: "accurateTrackBounce" } });
            Y.push(Ct);
            Da.m = Od("cm");
            Aa.m = nt;
            aa("m", Qb(["u", "v", "vf"]), 1);
            aa("m", Fe, 2);
            qc({ Dg: { ea: "clickmap" } });
            Y.push(Dt);
            Y.push(Et);
            Y.push(Ft);
            Y.push(Gt);
            (function () {
                Y.push(Ht);
                Wd.push("ecommerce");
                qc({
                    md: {
                        ea: "ecommerce",
                        Na: function (a) {
                            if (a) return !0 === a ? "dataLayer" : "" + a;
                        },
                    },
                });
            })();
            Wa.push(Jt);
            Y.push(Kt);
            Wd.push("user_id");
            Wa.push(B("p.st", Lt));
            Y.push(Mt);
            xb(function (a, c) {
                return {
                    Ba: function (b, d) {
                        var e = Ea(a, c);
                        e = e && e.userParams;
                        var f = (b.M || {}).ze;
                        e && f && e(f);
                        d();
                    },
                };
            }, 0);
            Ue.push("_ym_debug");
            ad.unshift(Pt);
            Y.push(Qt);
            ad.push(function (a) {
                var c = J(a);
                c.C("i") || (c.D("i", !0), fa(a).F(a, ["message"], u(a, Zp)));
            });
            (function () {
                var a,
                    c =
                        ((a = {}),
                        (a.tp = v(fb, rk, Ob)),
                        (a.tpid = v(fb, Tr)),
                        a);
                A(Ld, c);
            })();
            xb(Cd, 20);
            aa("n", Cd, 20);
            aa("1", Cd, 20);
            ad.unshift(St);
            Ld.fp = function (a, c, b) {
                if (b.J && b.J.nohit) return null;
                b = J(a).C;
                if (!b("fpe")) return null;
                c = Rt(c);
                if (c.Yg) return null;
                b = b("fht", Infinity);
                a: {
                    var d = n(a, "performance.getEntriesByType");
                    if (P(d)) {
                        if (
                            ((a = ha(
                                v(R, U("name"), Ba("first-contentful-paint")),
                                d.call(a.performance, "paint")
                            )),
                            a.length)
                        ) {
                            a = a[0].startTime;
                            break a;
                        }
                    } else {
                        var e = n(a, "chrome.loadTimes");
                        d = ql(a);
                        if (
                            P(e) &&
                            ((e = e.call(a.chrome)),
                            (e = n(e, "firstPaintTime")),
                            d && e)
                        ) {
                            a = 1e3 * e - d;
                            break a;
                        }
                        if ((a = n(a, "performance.timing.msFirstPaint"))) {
                            a -= d;
                            break a;
                        }
                    }
                    a = void 0;
                }
                return a && b > a ? ((c.Yg = a), Math.round(a)) : null;
            };
            Y.push(function (a, c) {
                var b;
                return (
                    (b = {}),
                    (b.ecommerceAdd = B("ecm.a", Ut(a, c))),
                    (b.ecommerceRemove = B("ecm.r", Vt(a, c))),
                    (b.ecommerceDetail = B("ecm.d", Wt(a, c))),
                    (b.ecommercePurchase = B("ecm.p", Xt(a, c))),
                    b
                );
            });
            (function () {
                var a,
                    c = {};
                c.bu = cu;
                c.pri = Hp;
                c.wv = u(2, R);
                c.ds = Kp;
                c.co = function (b) {
                    return sb(J(b).C("jn"));
                };
                c.td = iu;
                A(
                    c,
                    ((a = {}),
                    (a.iss = v(Rs, Ob)),
                    (a.hdl = v(Ss, Ob)),
                    (a.iia = v(Ts, Ob)),
                    (a.cpf = v(bu, Ob)),
                    (a.ntf = w(function (b) {
                        b = n(b, "Notification.permission");
                        b = "denied" === b ? !1 : "granted" === b ? !0 : null;
                        return Xa(b) ? null : b ? 2 : 1;
                    })),
                    (a.eu = Rb("isEU")),
                    (a.ns = ql),
                    (a.np = function (b) {
                        return Ya(b, 0, 100) ? null : ld(ee(ab(Vf(b), 100)));
                    }),
                    a)
                );
                c.pani = du;
                c.pci = eu;
                c.si = fu;
                c.gi = gu;
                A(Ld, c);
            })();
            (function () {
                var a = {};
                a.hc = Rb("hc");
                a.oo = Rb("oo");
                a.pmc = Rb("cmc");
                a.lt = function (c) {
                    var b = Sd(c).C("lt", null);
                    return b ? c.Math.round(100 * b) : b;
                };
                a.re = v(qr, Ob);
                a.aw = function (c) {
                    c = tb(v(ca, Hc), [
                        c.document.hidden,
                        c.document.msHidden,
                        c.document.webkitHidden,
                    ]);
                    return ca(c) ? null : sb(!c);
                };
                a.rcm = lu;
                a.yu = function (c) {
                    return (c = he(c, "").C("yandexuid")) && c.substring(0, 25);
                };
                a.ifc = Rb("ifc");
                a.ifb = Rb("ifb");
                a.ecs = Rb("ecs");
                a.csi = Rb("scip");
                a.cdl = Rb("cdl");
                a.eco = w(Fp, v(fb, K));
                a.dss = Rb("dSync");
                A(lg, a);
            })();
            Aa.er = ed;
            (function (a) {
                try {
                    var c = bh(a, "er"),
                        b = Cp(a, c);
                    jk.push(function (d, e, f, g) {
                        var h, k, l, m, p;
                        0.01 >= a.Math.random() ||
                            b(
                                ((h = {}),
                                (h[d] =
                                    ((k = {}),
                                    (k[xa.ab] =
                                        ((l = {}),
                                        (l[e] =
                                            ((m = {}),
                                            (m[f] = g
                                                ? ((p = {}),
                                                  (p[a.location.href] = g),
                                                  p)
                                                : a.location.href),
                                            m)),
                                        l)),
                                    k)),
                                h)
                            );
                    });
                } catch (d) {}
            })(window);
            (function () {
                jf.push(Gp);
                Le.unshift(Bp);
                gh.push(function (a) {
                    var c = void 0;
                    void 0 === c && (c = !0);
                    J(a).D("oo", c);
                });
            })();
            xb(function (a, c) {
                return {
                    N: function (b, d) {
                        var e = b.J,
                            f = b.K;
                        !Fl[c.id] &&
                            f.C("pv") &&
                            c.exp &&
                            !e.nohit &&
                            ((e.exp = c.exp), (Fl[c.id] = !0));
                        d();
                    },
                };
            }, -99);
            Y.push(mu);
            Yb.e = Zb;
            Da.e = ob;
            Aa.e = tc;
            qc({ exp: { ea: "experiments" } });
            yj.experiments = "ex";
            (function () {
                var a;
                uf.push(nu);
                Da.f = ob;
                A(Aa, ((a = {}), (a.f = sl), a));
                aa("f", Qb(), 1);
                aa("f", Gj, 2);
                aa("f", Cd, 20);
            })();
            jf.push(function (a, c) {
                var b = { qa: K(c), gd: Ea(a, c), Xf: ja(a), Nd: Va(a) },
                    d = b.Xf(qb);
                if (!b.Nd.Fd) {
                    var e = b.Nd.C("ymoo" + b.qa);
                    if (e && 30 > d - e)
                        (b = b.qa),
                            delete J(a).C("counters", {})[b],
                            Ua(Pa("uws"));
                    else qa(c, ou(b))["catch"](E(a, "d.f"));
                }
            });
            (function () {
                var a,
                    c,
                    b = [Db];
                A(Aa, ((a = {}), (a.s = b), (a.S = b), (a.u = ed), a));
                A(Da, ((c = {}), (c.s = $b), (c.S = ob), (c.u = $b), c));
                aa("s");
                aa("u");
                aa("S", Qb(["v", "hid", "u", "vf", "rn"]), 1);
                Y.push(B("s", mp));
            })();
            Da["8"] = $b;
            Aa["8"] = [kg];
            rl.push([kg, 0]);
            Y.push(
                B("p.us", function (a, c) {
                    return qa(c, function (b) {
                        if (n(b, "settings.sbp"))
                            return Ji(a, b, { bb: c, Mb: "8", Ld: "cs" });
                    });
                })
            );
            aa("p", Qb(hh), 1);
            Wg(
                "pub",
                function (a, c) {
                    return {
                        N: function (b, d) {
                            wi(a, c, b);
                            d();
                        },
                    };
                },
                1
            );
            Da.p = su;
            Aa.p = ua([Cb, Db]);
            Wa.push(wu);
            qc({
                xb: { ea: "webvisor", Na: Eb },
                Mg: { ea: "disableFormAnalytics", Na: Eb },
            });
            aa("4", Qb(hh), 1);
            Da["4"] = Il;
            Aa["4"] = ua([Cb, Db, Xc]);
            Wa.push(Cu);
            (function () {
                aa("W", Qb(hh), 1);
                Wg("wv", Bo, 1);
                Aa.W = ua([Cb, Db]);
                Da.W = Il;
                Wa.push(lv);
                Y.push(mv);
                qc({ xb: { ea: "webvisor" } });
                qc({
                    Si: { ea: "trustedDomains" },
                    Zb: { ea: "childIframe", Na: Eb },
                });
                gh.push(function (a) {
                    J(a).C("stopRecorder", D)();
                });
            })();
            Y.push(ov);
            aa("pi");
            Da.pi = $b;
            Aa.pi = ed;
            Wg(
                "w",
                function (a, c) {
                    return {
                        N: function (b, d) {
                            if (b.K) {
                                var e = Gf(c),
                                    f = e.status;
                                "rt" === e.Mb &&
                                    f &&
                                    (b.K.D("rt", f),
                                    b.ma || (b.ma = {}),
                                    (b.ma.Eh = 1 === f ? fi(a, c) + "." : ""));
                            }
                            d();
                        },
                    };
                },
                2
            );
            Y.push(qv);
            Y.push(Bv);
            Aa["6"] = ua([Cb, Db]);
            Da["6"] = $b;
            Y.push(Cv);
            Y.push(ju);
            (function () {
                Sg.push(function (a, c) {
                    c.informer = Jn(a);
                });
            })();
            xb(Df, 6);
            aa("1", Df, 6);
            aa("adb");
            aa("n", Df, 4);
            Aa.adb = ed;
            Da.adb = Wj;
            kd.push(Ev);
            Aa["5"] = tc;
            Da["5"] = ob;
            Yb["5"] = ha(v(Id, vc([Se, Me]), Hc), Zb);
            Y.push(Fv);
            aa("5", Cd, 20);
            xb(Zh, 7);
            aa("n", Zh, 6);
            Wa.push(Gv);
            Da.d = ob;
            aa("d", Qb(["hid", "u", "v", "vf"]), 1);
            Aa.d = ed;
            aa(
                "n",
                function (a, c) {
                    return {
                        Ba: function (b, d) {
                            if (!b.M || !b.M.force) {
                                var e = 0.002,
                                    f = c.id === xa.mg ? 1 : 0.002,
                                    g,
                                    h,
                                    k,
                                    l,
                                    m;
                                void 0 === e && (e = 1);
                                void 0 === f && (f = 1);
                                var p = Ad(a);
                                if (
                                    p &&
                                    P(p.getEntriesByType) &&
                                    ((e = Math.random() > e),
                                    (f = Math.random() > f),
                                    !e || !f)
                                ) {
                                    p = p.getEntriesByType("resource");
                                    for (
                                        var q = {},
                                            r = {},
                                            t = {},
                                            y = El(),
                                            F = T(a).href,
                                            Q = 0;
                                        Q < p.length;
                                        Q += 1
                                    ) {
                                        var M = p[Q],
                                            na = M.name
                                                .replace(Dl, "")
                                                .split("?")[0],
                                            ya = gc(na),
                                            Bb =
                                                ((g = {}),
                                                (g.dns = Math.round(
                                                    M.domainLookupEnd -
                                                        M.domainLookupStart
                                                )),
                                                (g.tcp = Math.round(
                                                    M.connectEnd -
                                                        M.connectStart
                                                )),
                                                (g.duration = Math.round(
                                                    M.duration
                                                )),
                                                (g.response = Math.round(
                                                    M.responseEnd -
                                                        M.requestStart
                                                )),
                                                g);
                                        "script" !== M.initiatorType ||
                                            e ||
                                            (r[na] = A(
                                                Bb,
                                                ((h = {}),
                                                (h.name = M.name),
                                                (h.decodedBodySize =
                                                    M.decodedBodySize),
                                                (h.transferSize = Math.round(
                                                    M.transferSize
                                                )),
                                                h)
                                            ));
                                        (!ku[ya] && !y[ya]) ||
                                            q[na] ||
                                            f ||
                                            (q[na] = A(
                                                Bb,
                                                ((k = {}), (k.pages = F), k)
                                            ));
                                    }
                                    ea(q).length && (t.timings8 = q);
                                    ea(r).length && (t.scripts = r);
                                    if (ea(t).length)
                                        va(
                                            a,
                                            "d",
                                            c
                                        )(
                                            {
                                                K: Ka(
                                                    ((l = {}),
                                                    (l.ar = 1),
                                                    (l.pv = 1),
                                                    l)
                                                ),
                                                ba: { da: Mb(a, t) || void 0 },
                                                J:
                                                    ((m = {}),
                                                    (m["page-url"] = F),
                                                    m),
                                            },
                                            { id: xa.pg, ca: "0" }
                                        )["catch"](E(a, "r.tim.ng2"));
                                }
                            }
                            d();
                        },
                    };
                },
                7
            );
            Aa.ci = [Db];
            Da.ci = $b;
            Wa.push(
                B("p.sci", function (a, c) {
                    return qa(c, u(a, Hn))["catch"](E(a, "ins.cs"));
                })
            );
            Y.push(Hv);
            Wa.push(au);
            xb(qh, 8);
            aa("f", qh, 3);
            aa("n", qh, 5);
            kd.push(
                (function (a) {
                    return B("fip", function (c) {
                        if (!zl(c) || Qd(c)) {
                            var b = Va(c);
                            if (!b.C("fip")) {
                                var d = v(
                                    Xb(
                                        v(function (e, f) {
                                            return B("fip." + f, e)(c);
                                        }, I(ss, null))
                                    ),
                                    ze("-")
                                )(a);
                                b.D("fip", d);
                            }
                        }
                    });
                })([
                    Nv,
                    Mv,
                    function (a) {
                        var c = n(a, "ApplePaySession"),
                            b = T(a).protocol;
                        a = c && "https:" === b && !rb(a) ? c : void 0;
                        c = "";
                        if (!a) return c;
                        try {
                            c = "" + a.canMakePayments();
                            b = "";
                            var d = a.supportsVersion;
                            if (P(d))
                                for (var e = 1; 20 >= e; e += 1)
                                    b += d.call(a, e) ? "" + e : "0";
                            return b + c;
                        } catch (f) {
                            return c;
                        }
                    },
                    function (a) {
                        a = n(a, "navigator") || {};
                        return a.doNotTrack || a.msDoNotTrack || "unknown";
                    },
                    function (a) {
                        if ((a = $t(a)))
                            try {
                                for (var c = [], b = 0; b < Al.length; b += 1) {
                                    var d = a(Al[b]);
                                    c.push(d);
                                }
                                var e = c;
                            } catch (f) {
                                e = [];
                            }
                        else e = [];
                        return e ? G("x", e) : "";
                    },
                    function (a) {
                        var c = void 0;
                        void 0 === c && (c = Kv);
                        var b = n(a, "navigator") || {};
                        c = z(u(b, n), c);
                        c = G("x", c);
                        try {
                            var d = n(a, "navigator.getGamepads");
                            var e =
                                (oa(d, "getGamepads") &&
                                    a.navigator.getGamepads()) ||
                                [];
                        } catch (f) {
                            e = [];
                        }
                        return c + "x" + Sa(e);
                    },
                    Iv,
                    function (a) {
                        a = n(a, "screen") || {};
                        return G("x", z(u(a, n), Jv));
                    },
                    function (a) {
                        return G("x", qn(a) || []);
                    },
                    function (a) {
                        a = Cn(a);
                        return O(a) ? G("x", a) : a;
                    },
                    function (a) {
                        return (a = En(a))
                            ? G(
                                  "x",
                                  z(
                                      C(["", ["matches", "media"]], sn),
                                      ua(Eh(a))
                                  )
                              )
                            : "";
                    },
                ])
            );
            xb(function (a) {
                return {
                    N: function (c, b) {
                        var d = c.K,
                            e = Va(a).C("fip");
                        e && d && (d.D("fip", e), je(c, "fip", sb(e)));
                        b();
                    },
                };
            }, 9);
            aa(
                "h",
                function (a) {
                    return {
                        Ba: function (c, b) {
                            var d = c.xi;
                            Xf(c) && d && J(a).D("isEU", n(d, "settings.eu"));
                            b();
                        },
                    };
                },
                3
            );
            kd.push(kv);
            Wa.push(Sv);
            Y.push(Tv);
            qc({ bj: { ea: "yaDisableGDPR" }, cj: { ea: "yaGDPRLang" } });
            Le.push(function (a, c) {
                return { N: C([a, c], bn) };
            });
            Ue.push("gdpr");
            Ue.push("gdpr_popup");
            Bg.push(function (a, c) {
                var b = ge(a);
                b = ie(b);
                if (ha(vc(Wv), b).length) return !0;
                b = c(a, "gdpr");
                return H(b, [Qc, Vv]);
            });
            Le.push(function (a) {
                return {
                    N: function (c, b) {
                        var d = c.ma || {},
                            e;
                        (e = n(a, "document.referrer"))
                            ? ((e = Sc(a, e).host),
                              (e = xj(e)),
                              (e = Hl + "." + (e || pu)))
                            : (e = jc);
                        c.ma = A(d, { Fh: [e] });
                        b();
                    },
                };
            });
            xb(bm, 5);
            aa("1", bm, 6);
            Aa.c = ed;
            Da.c = $b;
            aa("1", Hh, 7);
            xb(Hh, 7);
            ad.push(B("hcp", Fh));
            Wa.push(B("p.ot", Zv));
            Wa.push(mb("cta", $v, !0));
            aa(
                "n",
                function (a) {
                    var c = J(a);
                    return {
                        N: function (b, d) {
                            var e = b.M || {},
                                f = c.C("cta"),
                                g = c.C("cta.e");
                            if (f || g) {
                                e.X || (e.X = {});
                                e.X.__ym || (e.X.__ym = {});
                                var h = {};
                                f
                                    ? ((f = z(function (k) {
                                          var l,
                                              m = n(k, "topic");
                                          k = n(k, "version");
                                          return (
                                              (l = {}),
                                              (l.topic = m),
                                              (l.version = k),
                                              l
                                          );
                                      }, f)),
                                      (h.ct = f))
                                    : g && (h["ct.e"] = g);
                                A(e.X.__ym, h);
                                b.M = A(b.M || {}, e);
                            }
                            d();
                        },
                    };
                },
                7
            );
            aa("n", eg, 8);
            Y.push(aw);
            Y.push(bw);
            ad.push(
                B("cdl", function (a) {
                    var c = J(a).Ga;
                    if ((a = n(a, "navigator.cookieDeprecationLabel")))
                        try {
                            a.getValue().then(u("cdl", c), C(["cdl", "e"], c));
                        } catch (b) {
                            c("cdl", "d");
                        }
                    else c("cdl", "na");
                })
            );
            Wa.push(ew);
            Wa.push(fw);
            Y.push(function (a, c) {
                var b = dm(a),
                    d = K(c),
                    e = b[d];
                e || ((e = {}), (b[d] = e));
                e.Hh = !0;
                if ((b = e.Sf)) (d = em(a)), x(d, b);
            });
            Wa.unshift(gw);
            x(vb(ma)(window), ad);
            if (window.Ya && gf) {
                var fm = xa.bc;
                window.Ya[fm] = gf;
                qt(window);
                x(v(Mc([window, window.Ya[fm]]), ma), Sg);
            }
            (function (a) {
                var c = n(a, "ym");
                if (c) {
                    var b = n(c, "a");
                    b || ((c.a = []), (b = c.a));
                    var d = em(a);
                    Ie(
                        a,
                        b,
                        function (e) {
                            e.ya.F(d);
                        },
                        !0
                    );
                }
            })(window);
        })();
    } catch (gf) {}
}).call(this);
