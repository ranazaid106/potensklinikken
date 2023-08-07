/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var u = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
  var Xi = u(() => {
    window.tram = (function (e) {
      function t(l, b) {
        var A = new f.Bare();
        return A.init(l, b);
      }
      function r(l) {
        return l.replace(/[A-Z]/g, function (b) {
          return "-" + b.toLowerCase();
        });
      }
      function n(l) {
        var b = parseInt(l.slice(1), 16),
          A = (b >> 16) & 255,
          C = (b >> 8) & 255,
          O = 255 & b;
        return [A, C, O];
      }
      function i(l, b, A) {
        return (
          "#" + ((1 << 24) | (l << 16) | (b << 8) | A).toString(16).slice(1)
        );
      }
      function o() {}
      function a(l, b) {
        h("Type warning: Expected: [" + l + "] Got: [" + typeof b + "] " + b);
      }
      function s(l, b, A) {
        h("Units do not match [" + l + "]: " + b + ", " + A);
      }
      function c(l, b, A) {
        if ((b !== void 0 && (A = b), l === void 0)) return A;
        var C = A;
        return (
          xe.test(l) || !Me.test(l)
            ? (C = parseInt(l, 10))
            : Me.test(l) && (C = 1e3 * parseFloat(l)),
          0 > C && (C = 0),
          C === C ? C : A
        );
      }
      function h(l) {
        ae.debug && window && window.console.warn(l);
      }
      function I(l) {
        for (var b = -1, A = l ? l.length : 0, C = []; ++b < A; ) {
          var O = l[b];
          O && C.push(O);
        }
        return C;
      }
      var d = (function (l, b, A) {
          function C(se) {
            return typeof se == "object";
          }
          function O(se) {
            return typeof se == "function";
          }
          function L() {}
          function re(se, _e) {
            function Y() {
              var Fe = new fe();
              return O(Fe.init) && Fe.init.apply(Fe, arguments), Fe;
            }
            function fe() {}
            _e === A && ((_e = se), (se = Object)), (Y.Bare = fe);
            var de,
              we = (L[l] = se[l]),
              ot = (fe[l] = Y[l] = new L());
            return (
              (ot.constructor = Y),
              (Y.mixin = function (Fe) {
                return (fe[l] = Y[l] = re(Y, Fe)[l]), Y;
              }),
              (Y.open = function (Fe) {
                if (
                  ((de = {}),
                  O(Fe) ? (de = Fe.call(Y, ot, we, Y, se)) : C(Fe) && (de = Fe),
                  C(de))
                )
                  for (var wr in de) b.call(de, wr) && (ot[wr] = de[wr]);
                return O(ot.init) || (ot.init = se), Y;
              }),
              Y.open(_e)
            );
          }
          return re;
        })("prototype", {}.hasOwnProperty),
        T = {
          ease: [
            "ease",
            function (l, b, A, C) {
              var O = (l /= C) * l,
                L = O * l;
              return (
                b +
                A * (-2.75 * L * O + 11 * O * O + -15.5 * L + 8 * O + 0.25 * l)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (l, b, A, C) {
              var O = (l /= C) * l,
                L = O * l;
              return b + A * (-1 * L * O + 3 * O * O + -3 * L + 2 * O);
            },
          ],
          "ease-out": [
            "ease-out",
            function (l, b, A, C) {
              var O = (l /= C) * l,
                L = O * l;
              return (
                b +
                A * (0.3 * L * O + -1.6 * O * O + 2.2 * L + -1.8 * O + 1.9 * l)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (l, b, A, C) {
              var O = (l /= C) * l,
                L = O * l;
              return b + A * (2 * L * O + -5 * O * O + 2 * L + 2 * O);
            },
          ],
          linear: [
            "linear",
            function (l, b, A, C) {
              return (A * l) / C + b;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (l, b, A, C) {
              return A * (l /= C) * l + b;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (l, b, A, C) {
              return -A * (l /= C) * (l - 2) + b;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (l, b, A, C) {
              return (l /= C / 2) < 1
                ? (A / 2) * l * l + b
                : (-A / 2) * (--l * (l - 2) - 1) + b;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (l, b, A, C) {
              return A * (l /= C) * l * l + b;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (l, b, A, C) {
              return A * ((l = l / C - 1) * l * l + 1) + b;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (l, b, A, C) {
              return (l /= C / 2) < 1
                ? (A / 2) * l * l * l + b
                : (A / 2) * ((l -= 2) * l * l + 2) + b;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (l, b, A, C) {
              return A * (l /= C) * l * l * l + b;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (l, b, A, C) {
              return -A * ((l = l / C - 1) * l * l * l - 1) + b;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (l, b, A, C) {
              return (l /= C / 2) < 1
                ? (A / 2) * l * l * l * l + b
                : (-A / 2) * ((l -= 2) * l * l * l - 2) + b;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (l, b, A, C) {
              return A * (l /= C) * l * l * l * l + b;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (l, b, A, C) {
              return A * ((l = l / C - 1) * l * l * l * l + 1) + b;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (l, b, A, C) {
              return (l /= C / 2) < 1
                ? (A / 2) * l * l * l * l * l + b
                : (A / 2) * ((l -= 2) * l * l * l * l + 2) + b;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (l, b, A, C) {
              return -A * Math.cos((l / C) * (Math.PI / 2)) + A + b;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (l, b, A, C) {
              return A * Math.sin((l / C) * (Math.PI / 2)) + b;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (l, b, A, C) {
              return (-A / 2) * (Math.cos((Math.PI * l) / C) - 1) + b;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (l, b, A, C) {
              return l === 0 ? b : A * Math.pow(2, 10 * (l / C - 1)) + b;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (l, b, A, C) {
              return l === C
                ? b + A
                : A * (-Math.pow(2, (-10 * l) / C) + 1) + b;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (l, b, A, C) {
              return l === 0
                ? b
                : l === C
                ? b + A
                : (l /= C / 2) < 1
                ? (A / 2) * Math.pow(2, 10 * (l - 1)) + b
                : (A / 2) * (-Math.pow(2, -10 * --l) + 2) + b;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (l, b, A, C) {
              return -A * (Math.sqrt(1 - (l /= C) * l) - 1) + b;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (l, b, A, C) {
              return A * Math.sqrt(1 - (l = l / C - 1) * l) + b;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (l, b, A, C) {
              return (l /= C / 2) < 1
                ? (-A / 2) * (Math.sqrt(1 - l * l) - 1) + b
                : (A / 2) * (Math.sqrt(1 - (l -= 2) * l) + 1) + b;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (l, b, A, C, O) {
              return (
                O === void 0 && (O = 1.70158),
                A * (l /= C) * l * ((O + 1) * l - O) + b
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (l, b, A, C, O) {
              return (
                O === void 0 && (O = 1.70158),
                A * ((l = l / C - 1) * l * ((O + 1) * l + O) + 1) + b
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (l, b, A, C, O) {
              return (
                O === void 0 && (O = 1.70158),
                (l /= C / 2) < 1
                  ? (A / 2) * l * l * (((O *= 1.525) + 1) * l - O) + b
                  : (A / 2) *
                      ((l -= 2) * l * (((O *= 1.525) + 1) * l + O) + 2) +
                    b
              );
            },
          ],
        },
        m = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        y = document,
        w = window,
        N = "bkwld-tram",
        x = /[\-\.0-9]/g,
        P = /[A-Z]/,
        S = "number",
        W = /^(rgb|#)/,
        U = /(em|cm|mm|in|pt|pc|px)$/,
        F = /(em|cm|mm|in|pt|pc|px|%)$/,
        j = /(deg|rad|turn)$/,
        Z = "unitless",
        J = /(all|none) 0s ease 0s/,
        oe = /^(width|height)$/,
        B = " ",
        q = y.createElement("a"),
        E = ["Webkit", "Moz", "O", "ms"],
        D = ["-webkit-", "-moz-", "-o-", "-ms-"],
        R = function (l) {
          if (l in q.style) return { dom: l, css: l };
          var b,
            A,
            C = "",
            O = l.split("-");
          for (b = 0; b < O.length; b++)
            C += O[b].charAt(0).toUpperCase() + O[b].slice(1);
          for (b = 0; b < E.length; b++)
            if (((A = E[b] + C), A in q.style))
              return { dom: A, css: D[b] + l };
        },
        G = (t.support = {
          bind: Function.prototype.bind,
          transform: R("transform"),
          transition: R("transition"),
          backface: R("backface-visibility"),
          timing: R("transition-timing-function"),
        });
      if (G.transition) {
        var Q = G.timing.dom;
        if (((q.style[Q] = T["ease-in-back"][0]), !q.style[Q]))
          for (var ne in m) T[ne][0] = m[ne];
      }
      var X = (t.frame = (function () {
          var l =
            w.requestAnimationFrame ||
            w.webkitRequestAnimationFrame ||
            w.mozRequestAnimationFrame ||
            w.oRequestAnimationFrame ||
            w.msRequestAnimationFrame;
          return l && G.bind
            ? l.bind(w)
            : function (b) {
                w.setTimeout(b, 16);
              };
        })()),
        V = (t.now = (function () {
          var l = w.performance,
            b = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
          return b && G.bind
            ? b.bind(l)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        v = d(function (l) {
          function b(ie, ve) {
            var Te = I(("" + ie).split(B)),
              ge = Te[0];
            ve = ve || {};
            var Ge = z[ge];
            if (!Ge) return h("Unsupported property: " + ge);
            if (!ve.weak || !this.props[ge]) {
              var Qe = Ge[0],
                We = this.props[ge];
              return (
                We || (We = this.props[ge] = new Qe.Bare()),
                We.init(this.$el, Te, Ge, ve),
                We
              );
            }
          }
          function A(ie, ve, Te) {
            if (ie) {
              var ge = typeof ie;
              if (
                (ve ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                ge == "number" && ve)
              )
                return (
                  (this.timer = new te({
                    duration: ie,
                    context: this,
                    complete: L,
                  })),
                  void (this.active = !0)
                );
              if (ge == "string" && ve) {
                switch (ie) {
                  case "hide":
                    Y.call(this);
                    break;
                  case "stop":
                    re.call(this);
                    break;
                  case "redraw":
                    fe.call(this);
                    break;
                  default:
                    b.call(this, ie, Te && Te[1]);
                }
                return L.call(this);
              }
              if (ge == "function") return void ie.call(this, this);
              if (ge == "object") {
                var Ge = 0;
                ot.call(
                  this,
                  ie,
                  function (Ae, _y) {
                    Ae.span > Ge && (Ge = Ae.span), Ae.stop(), Ae.animate(_y);
                  },
                  function (Ae) {
                    "wait" in Ae && (Ge = c(Ae.wait, 0));
                  }
                ),
                  we.call(this),
                  Ge > 0 &&
                    ((this.timer = new te({ duration: Ge, context: this })),
                    (this.active = !0),
                    ve && (this.timer.complete = L));
                var Qe = this,
                  We = !1,
                  dn = {};
                X(function () {
                  ot.call(Qe, ie, function (Ae) {
                    Ae.active && ((We = !0), (dn[Ae.name] = Ae.nextStyle));
                  }),
                    We && Qe.$el.css(dn);
                });
              }
            }
          }
          function C(ie) {
            (ie = c(ie, 0)),
              this.active
                ? this.queue.push({ options: ie })
                : ((this.timer = new te({
                    duration: ie,
                    context: this,
                    complete: L,
                  })),
                  (this.active = !0));
          }
          function O(ie) {
            return this.active
              ? (this.queue.push({ options: ie, args: arguments }),
                void (this.timer.complete = L))
              : h(
                  "No active transition timer. Use start() or wait() before then()."
                );
          }
          function L() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var ie = this.queue.shift();
              A.call(this, ie.options, !0, ie.args);
            }
          }
          function re(ie) {
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1);
            var ve;
            typeof ie == "string"
              ? ((ve = {}), (ve[ie] = 1))
              : (ve = typeof ie == "object" && ie != null ? ie : this.props),
              ot.call(this, ve, Fe),
              we.call(this);
          }
          function se(ie) {
            re.call(this, ie), ot.call(this, ie, wr, gy);
          }
          function _e(ie) {
            typeof ie != "string" && (ie = "block"),
              (this.el.style.display = ie);
          }
          function Y() {
            re.call(this), (this.el.style.display = "none");
          }
          function fe() {
            this.el.offsetHeight;
          }
          function de() {
            re.call(this),
              e.removeData(this.el, N),
              (this.$el = this.el = null);
          }
          function we() {
            var ie,
              ve,
              Te = [];
            this.upstream && Te.push(this.upstream);
            for (ie in this.props)
              (ve = this.props[ie]), ve.active && Te.push(ve.string);
            (Te = Te.join(",")),
              this.style !== Te &&
                ((this.style = Te), (this.el.style[G.transition.dom] = Te));
          }
          function ot(ie, ve, Te) {
            var ge,
              Ge,
              Qe,
              We,
              dn = ve !== Fe,
              Ae = {};
            for (ge in ie)
              (Qe = ie[ge]),
                ge in pe
                  ? (Ae.transform || (Ae.transform = {}),
                    (Ae.transform[ge] = Qe))
                  : (P.test(ge) && (ge = r(ge)),
                    ge in z ? (Ae[ge] = Qe) : (We || (We = {}), (We[ge] = Qe)));
            for (ge in Ae) {
              if (((Qe = Ae[ge]), (Ge = this.props[ge]), !Ge)) {
                if (!dn) continue;
                Ge = b.call(this, ge);
              }
              ve.call(this, Ge, Qe);
            }
            Te && We && Te.call(this, We);
          }
          function Fe(ie) {
            ie.stop();
          }
          function wr(ie, ve) {
            ie.set(ve);
          }
          function gy(ie) {
            this.$el.css(ie);
          }
          function Ye(ie, ve) {
            l[ie] = function () {
              return this.children
                ? Ey.call(this, ve, arguments)
                : (this.el && ve.apply(this, arguments), this);
            };
          }
          function Ey(ie, ve) {
            var Te,
              ge = this.children.length;
            for (Te = 0; ge > Te; Te++) ie.apply(this.children[Te], ve);
            return this;
          }
          (l.init = function (ie) {
            if (
              ((this.$el = e(ie)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              ae.keepInherited && !ae.fallback)
            ) {
              var ve = H(this.el, "transition");
              ve && !J.test(ve) && (this.upstream = ve);
            }
            G.backface &&
              ae.hideBackface &&
              _(this.el, G.backface.css, "hidden");
          }),
            Ye("add", b),
            Ye("start", A),
            Ye("wait", C),
            Ye("then", O),
            Ye("next", L),
            Ye("stop", re),
            Ye("set", se),
            Ye("show", _e),
            Ye("hide", Y),
            Ye("redraw", fe),
            Ye("destroy", de);
        }),
        f = d(v, function (l) {
          function b(A, C) {
            var O = e.data(A, N) || e.data(A, N, new v.Bare());
            return O.el || O.init(A), C ? O.start(C) : O;
          }
          l.init = function (A, C) {
            var O = e(A);
            if (!O.length) return this;
            if (O.length === 1) return b(O[0], C);
            var L = [];
            return (
              O.each(function (re, se) {
                L.push(b(se, C));
              }),
              (this.children = L),
              this
            );
          };
        }),
        p = d(function (l) {
          function b() {
            var L = this.get();
            this.update("auto");
            var re = this.get();
            return this.update(L), re;
          }
          function A(L, re, se) {
            return re !== void 0 && (se = re), L in T ? L : se;
          }
          function C(L) {
            var re = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(L);
            return (re ? i(re[1], re[2], re[3]) : L).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var O = { duration: 500, ease: "ease", delay: 0 };
          (l.init = function (L, re, se, _e) {
            (this.$el = L), (this.el = L[0]);
            var Y = re[0];
            se[2] && (Y = se[2]),
              ee[Y] && (Y = ee[Y]),
              (this.name = Y),
              (this.type = se[1]),
              (this.duration = c(re[1], this.duration, O.duration)),
              (this.ease = A(re[2], this.ease, O.ease)),
              (this.delay = c(re[3], this.delay, O.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = oe.test(this.name)),
              (this.unit = _e.unit || this.unit || ae.defaultUnit),
              (this.angle = _e.angle || this.angle || ae.defaultAngle),
              ae.fallback || _e.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    B +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? B + T[this.ease][0] : "") +
                    (this.delay ? B + this.delay + "ms" : "")));
          }),
            (l.set = function (L) {
              (L = this.convert(L, this.type)), this.update(L), this.redraw();
            }),
            (l.transition = function (L) {
              (this.active = !0),
                (L = this.convert(L, this.type)),
                this.auto &&
                  (this.el.style[this.name] == "auto" &&
                    (this.update(this.get()), this.redraw()),
                  L == "auto" && (L = b.call(this))),
                (this.nextStyle = L);
            }),
            (l.fallback = function (L) {
              var re =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (L = this.convert(L, this.type)),
                this.auto &&
                  (re == "auto" && (re = this.convert(this.get(), this.type)),
                  L == "auto" && (L = b.call(this))),
                (this.tween = new $({
                  from: re,
                  to: L,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (l.get = function () {
              return H(this.el, this.name);
            }),
            (l.update = function (L) {
              _(this.el, this.name, L);
            }),
            (l.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                _(this.el, this.name, this.get()));
              var L = this.tween;
              L && L.context && L.destroy();
            }),
            (l.convert = function (L, re) {
              if (L == "auto" && this.auto) return L;
              var se,
                _e = typeof L == "number",
                Y = typeof L == "string";
              switch (re) {
                case S:
                  if (_e) return L;
                  if (Y && L.replace(x, "") === "") return +L;
                  se = "number(unitless)";
                  break;
                case W:
                  if (Y) {
                    if (L === "" && this.original) return this.original;
                    if (re.test(L))
                      return L.charAt(0) == "#" && L.length == 7 ? L : C(L);
                  }
                  se = "hex or rgb string";
                  break;
                case U:
                  if (_e) return L + this.unit;
                  if (Y && re.test(L)) return L;
                  se = "number(px) or string(unit)";
                  break;
                case F:
                  if (_e) return L + this.unit;
                  if (Y && re.test(L)) return L;
                  se = "number(px) or string(unit or %)";
                  break;
                case j:
                  if (_e) return L + this.angle;
                  if (Y && re.test(L)) return L;
                  se = "number(deg) or string(angle)";
                  break;
                case Z:
                  if (_e || (Y && F.test(L))) return L;
                  se = "number(unitless) or string(unit or %)";
              }
              return a(se, L), L;
            }),
            (l.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        g = d(p, function (l, b) {
          l.init = function () {
            b.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), W));
          };
        }),
        k = d(p, function (l, b) {
          (l.init = function () {
            b.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (l.get = function () {
              return this.$el[this.name]();
            }),
            (l.update = function (A) {
              this.$el[this.name](A);
            });
        }),
        K = d(p, function (l, b) {
          function A(C, O) {
            var L, re, se, _e, Y;
            for (L in C)
              (_e = pe[L]),
                (se = _e[0]),
                (re = _e[1] || L),
                (Y = this.convert(C[L], se)),
                O.call(this, re, Y, se);
          }
          (l.init = function () {
            b.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                pe.perspective &&
                  ae.perspective &&
                  ((this.current.perspective = ae.perspective),
                  _(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (l.set = function (C) {
              A.call(this, C, function (O, L) {
                this.current[O] = L;
              }),
                _(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (l.transition = function (C) {
              var O = this.values(C);
              this.tween = new he({
                current: this.current,
                values: O,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var L,
                re = {};
              for (L in this.current) re[L] = L in O ? O[L] : this.current[L];
              (this.active = !0), (this.nextStyle = this.style(re));
            }),
            (l.fallback = function (C) {
              var O = this.values(C);
              this.tween = new he({
                current: this.current,
                values: O,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (l.update = function () {
              _(this.el, this.name, this.style(this.current));
            }),
            (l.style = function (C) {
              var O,
                L = "";
              for (O in C) L += O + "(" + C[O] + ") ";
              return L;
            }),
            (l.values = function (C) {
              var O,
                L = {};
              return (
                A.call(this, C, function (re, se, _e) {
                  (L[re] = se),
                    this.current[re] === void 0 &&
                      ((O = 0),
                      ~re.indexOf("scale") && (O = 1),
                      (this.current[re] = this.convert(O, _e)));
                }),
                L
              );
            });
        }),
        $ = d(function (l) {
          function b(Y) {
            se.push(Y) === 1 && X(A);
          }
          function A() {
            var Y,
              fe,
              de,
              we = se.length;
            if (we)
              for (X(A), fe = V(), Y = we; Y--; )
                (de = se[Y]), de && de.render(fe);
          }
          function C(Y) {
            var fe,
              de = e.inArray(Y, se);
            de >= 0 &&
              ((fe = se.slice(de + 1)),
              (se.length = de),
              fe.length && (se = se.concat(fe)));
          }
          function O(Y) {
            return Math.round(Y * _e) / _e;
          }
          function L(Y, fe, de) {
            return i(
              Y[0] + de * (fe[0] - Y[0]),
              Y[1] + de * (fe[1] - Y[1]),
              Y[2] + de * (fe[2] - Y[2])
            );
          }
          var re = { ease: T.ease[1], from: 0, to: 1 };
          (l.init = function (Y) {
            (this.duration = Y.duration || 0), (this.delay = Y.delay || 0);
            var fe = Y.ease || re.ease;
            T[fe] && (fe = T[fe][1]),
              typeof fe != "function" && (fe = re.ease),
              (this.ease = fe),
              (this.update = Y.update || o),
              (this.complete = Y.complete || o),
              (this.context = Y.context || this),
              (this.name = Y.name);
            var de = Y.from,
              we = Y.to;
            de === void 0 && (de = re.from),
              we === void 0 && (we = re.to),
              (this.unit = Y.unit || ""),
              typeof de == "number" && typeof we == "number"
                ? ((this.begin = de), (this.change = we - de))
                : this.format(we, de),
              (this.value = this.begin + this.unit),
              (this.start = V()),
              Y.autoplay !== !1 && this.play();
          }),
            (l.play = function () {
              this.active ||
                (this.start || (this.start = V()), (this.active = !0), b(this));
            }),
            (l.stop = function () {
              this.active && ((this.active = !1), C(this));
            }),
            (l.render = function (Y) {
              var fe,
                de = Y - this.start;
              if (this.delay) {
                if (de <= this.delay) return;
                de -= this.delay;
              }
              if (de < this.duration) {
                var we = this.ease(de, 0, 1, this.duration);
                return (
                  (fe = this.startRGB
                    ? L(this.startRGB, this.endRGB, we)
                    : O(this.begin + we * this.change)),
                  (this.value = fe + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (fe = this.endHex || this.begin + this.change),
                (this.value = fe + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (l.format = function (Y, fe) {
              if (((fe += ""), (Y += ""), Y.charAt(0) == "#"))
                return (
                  (this.startRGB = n(fe)),
                  (this.endRGB = n(Y)),
                  (this.endHex = Y),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var de = fe.replace(x, ""),
                  we = Y.replace(x, "");
                de !== we && s("tween", fe, Y), (this.unit = de);
              }
              (fe = parseFloat(fe)),
                (Y = parseFloat(Y)),
                (this.begin = this.value = fe),
                (this.change = Y - fe);
            }),
            (l.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = o);
            });
          var se = [],
            _e = 1e3;
        }),
        te = d($, function (l) {
          (l.init = function (b) {
            (this.duration = b.duration || 0),
              (this.complete = b.complete || o),
              (this.context = b.context),
              this.play();
          }),
            (l.render = function (b) {
              var A = b - this.start;
              A < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        he = d($, function (l, b) {
          (l.init = function (A) {
            (this.context = A.context),
              (this.update = A.update),
              (this.tweens = []),
              (this.current = A.current);
            var C, O;
            for (C in A.values)
              (O = A.values[C]),
                this.current[C] !== O &&
                  this.tweens.push(
                    new $({
                      name: C,
                      from: this.current[C],
                      to: O,
                      duration: A.duration,
                      delay: A.delay,
                      ease: A.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (l.render = function (A) {
              var C,
                O,
                L = this.tweens.length,
                re = !1;
              for (C = L; C--; )
                (O = this.tweens[C]),
                  O.context &&
                    (O.render(A), (this.current[O.name] = O.value), (re = !0));
              return re
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (l.destroy = function () {
              if ((b.destroy.call(this), this.tweens)) {
                var A,
                  C = this.tweens.length;
                for (A = C; A--; ) this.tweens[A].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        ae = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !G.transition,
          agentTests: [],
        });
      (t.fallback = function (l) {
        if (!G.transition) return (ae.fallback = !0);
        ae.agentTests.push("(" + l + ")");
        var b = new RegExp(ae.agentTests.join("|"), "i");
        ae.fallback = b.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (l) {
          return new $(l);
        }),
        (t.delay = function (l, b, A) {
          return new te({ complete: b, duration: l, context: A });
        }),
        (e.fn.tram = function (l) {
          return t.call(null, this, l);
        });
      var _ = e.style,
        H = e.css,
        ee = { transform: G.transform && G.transform.css },
        z = {
          color: [g, W],
          background: [g, W, "background-color"],
          "outline-color": [g, W],
          "border-color": [g, W],
          "border-top-color": [g, W],
          "border-right-color": [g, W],
          "border-bottom-color": [g, W],
          "border-left-color": [g, W],
          "border-width": [p, U],
          "border-top-width": [p, U],
          "border-right-width": [p, U],
          "border-bottom-width": [p, U],
          "border-left-width": [p, U],
          "border-spacing": [p, U],
          "letter-spacing": [p, U],
          margin: [p, U],
          "margin-top": [p, U],
          "margin-right": [p, U],
          "margin-bottom": [p, U],
          "margin-left": [p, U],
          padding: [p, U],
          "padding-top": [p, U],
          "padding-right": [p, U],
          "padding-bottom": [p, U],
          "padding-left": [p, U],
          "outline-width": [p, U],
          opacity: [p, S],
          top: [p, F],
          right: [p, F],
          bottom: [p, F],
          left: [p, F],
          "font-size": [p, F],
          "text-indent": [p, F],
          "word-spacing": [p, F],
          width: [p, F],
          "min-width": [p, F],
          "max-width": [p, F],
          height: [p, F],
          "min-height": [p, F],
          "max-height": [p, F],
          "line-height": [p, Z],
          "scroll-top": [k, S, "scrollTop"],
          "scroll-left": [k, S, "scrollLeft"],
        },
        pe = {};
      G.transform &&
        ((z.transform = [K]),
        (pe = {
          x: [F, "translateX"],
          y: [F, "translateY"],
          rotate: [j],
          rotateX: [j],
          rotateY: [j],
          scale: [S],
          scaleX: [S],
          scaleY: [S],
          skew: [j],
          skewX: [j],
          skewY: [j],
        })),
        G.transform &&
          G.backface &&
          ((pe.z = [F, "translateZ"]),
          (pe.rotateZ = [j]),
          (pe.scaleZ = [S]),
          (pe.perspective = [U]));
      var xe = /ms/,
        Me = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var ws = u((_W, Os) => {
    var my = window.$,
      yy = Xi() && my.tram;
    Os.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        r = Array.prototype,
        n = Object.prototype,
        i = Function.prototype,
        o = r.push,
        a = r.slice,
        s = r.concat,
        c = n.toString,
        h = n.hasOwnProperty,
        I = r.forEach,
        d = r.map,
        T = r.reduce,
        m = r.reduceRight,
        y = r.filter,
        w = r.every,
        N = r.some,
        x = r.indexOf,
        P = r.lastIndexOf,
        S = Array.isArray,
        W = Object.keys,
        U = i.bind,
        F =
          (e.each =
          e.forEach =
            function (E, D, R) {
              if (E == null) return E;
              if (I && E.forEach === I) E.forEach(D, R);
              else if (E.length === +E.length) {
                for (var G = 0, Q = E.length; G < Q; G++)
                  if (D.call(R, E[G], G, E) === t) return;
              } else
                for (var ne = e.keys(E), G = 0, Q = ne.length; G < Q; G++)
                  if (D.call(R, E[ne[G]], ne[G], E) === t) return;
              return E;
            });
      (e.map = e.collect =
        function (E, D, R) {
          var G = [];
          return E == null
            ? G
            : d && E.map === d
            ? E.map(D, R)
            : (F(E, function (Q, ne, X) {
                G.push(D.call(R, Q, ne, X));
              }),
              G);
        }),
        (e.find = e.detect =
          function (E, D, R) {
            var G;
            return (
              j(E, function (Q, ne, X) {
                if (D.call(R, Q, ne, X)) return (G = Q), !0;
              }),
              G
            );
          }),
        (e.filter = e.select =
          function (E, D, R) {
            var G = [];
            return E == null
              ? G
              : y && E.filter === y
              ? E.filter(D, R)
              : (F(E, function (Q, ne, X) {
                  D.call(R, Q, ne, X) && G.push(Q);
                }),
                G);
          });
      var j =
        (e.some =
        e.any =
          function (E, D, R) {
            D || (D = e.identity);
            var G = !1;
            return E == null
              ? G
              : N && E.some === N
              ? E.some(D, R)
              : (F(E, function (Q, ne, X) {
                  if (G || (G = D.call(R, Q, ne, X))) return t;
                }),
                !!G);
          });
      (e.contains = e.include =
        function (E, D) {
          return E == null
            ? !1
            : x && E.indexOf === x
            ? E.indexOf(D) != -1
            : j(E, function (R) {
                return R === D;
              });
        }),
        (e.delay = function (E, D) {
          var R = a.call(arguments, 2);
          return setTimeout(function () {
            return E.apply(null, R);
          }, D);
        }),
        (e.defer = function (E) {
          return e.delay.apply(e, [E, 1].concat(a.call(arguments, 1)));
        }),
        (e.throttle = function (E) {
          var D, R, G;
          return function () {
            D ||
              ((D = !0),
              (R = arguments),
              (G = this),
              yy.frame(function () {
                (D = !1), E.apply(G, R);
              }));
          };
        }),
        (e.debounce = function (E, D, R) {
          var G,
            Q,
            ne,
            X,
            V,
            v = function () {
              var f = e.now() - X;
              f < D
                ? (G = setTimeout(v, D - f))
                : ((G = null), R || ((V = E.apply(ne, Q)), (ne = Q = null)));
            };
          return function () {
            (ne = this), (Q = arguments), (X = e.now());
            var f = R && !G;
            return (
              G || (G = setTimeout(v, D)),
              f && ((V = E.apply(ne, Q)), (ne = Q = null)),
              V
            );
          };
        }),
        (e.defaults = function (E) {
          if (!e.isObject(E)) return E;
          for (var D = 1, R = arguments.length; D < R; D++) {
            var G = arguments[D];
            for (var Q in G) E[Q] === void 0 && (E[Q] = G[Q]);
          }
          return E;
        }),
        (e.keys = function (E) {
          if (!e.isObject(E)) return [];
          if (W) return W(E);
          var D = [];
          for (var R in E) e.has(E, R) && D.push(R);
          return D;
        }),
        (e.has = function (E, D) {
          return h.call(E, D);
        }),
        (e.isObject = function (E) {
          return E === Object(E);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var Z = /(.)^/,
        J = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        oe = /\\|'|\r|\n|\u2028|\u2029/g,
        B = function (E) {
          return "\\" + J[E];
        },
        q = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (E, D, R) {
          !D && R && (D = R), (D = e.defaults({}, D, e.templateSettings));
          var G = RegExp(
              [
                (D.escape || Z).source,
                (D.interpolate || Z).source,
                (D.evaluate || Z).source,
              ].join("|") + "|$",
              "g"
            ),
            Q = 0,
            ne = "__p+='";
          E.replace(G, function (f, p, g, k, K) {
            return (
              (ne += E.slice(Q, K).replace(oe, B)),
              (Q = K + f.length),
              p
                ? (ne +=
                    `'+
((__t=(` +
                    p +
                    `))==null?'':_.escape(__t))+
'`)
                : g
                ? (ne +=
                    `'+
((__t=(` +
                    g +
                    `))==null?'':__t)+
'`)
                : k &&
                  (ne +=
                    `';
` +
                    k +
                    `
__p+='`),
              f
            );
          }),
            (ne += `';
`);
          var X = D.variable;
          if (X) {
            if (!q.test(X))
              throw new Error("variable is not a bare identifier: " + X);
          } else
            (ne =
              `with(obj||{}){
` +
              ne +
              `}
`),
              (X = "obj");
          ne =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` +
            ne +
            `return __p;
`;
          var V;
          try {
            V = new Function(D.variable || "obj", "_", ne);
          } catch (f) {
            throw ((f.source = ne), f);
          }
          var v = function (f) {
            return V.call(this, f, e);
          };
          return (
            (v.source =
              "function(" +
              X +
              `){
` +
              ne +
              "}"),
            v
          );
        }),
        e
      );
    })();
  });
  var ke = u((mW, qs) => {
    var Ee = {},
      zt = {},
      Yt = [],
      Vi = window.Webflow || [],
      Tt = window.jQuery,
      Ze = Tt(window),
      Iy = Tt(document),
      at = Tt.isFunction,
      $e = (Ee._ = ws()),
      Ss = (Ee.tram = Xi() && Tt.tram),
      vn = !1,
      Wi = !1;
    Ss.config.hideBackface = !1;
    Ss.config.keepInherited = !0;
    Ee.define = function (e, t, r) {
      zt[e] && xs(zt[e]);
      var n = (zt[e] = t(Tt, $e, r) || {});
      return Rs(n), n;
    };
    Ee.require = function (e) {
      return zt[e];
    };
    function Rs(e) {
      Ee.env() &&
        (at(e.design) && Ze.on("__wf_design", e.design),
        at(e.preview) && Ze.on("__wf_preview", e.preview)),
        at(e.destroy) && Ze.on("__wf_destroy", e.destroy),
        e.ready && at(e.ready) && Ty(e);
    }
    function Ty(e) {
      if (vn) {
        e.ready();
        return;
      }
      $e.contains(Yt, e.ready) || Yt.push(e.ready);
    }
    function xs(e) {
      at(e.design) && Ze.off("__wf_design", e.design),
        at(e.preview) && Ze.off("__wf_preview", e.preview),
        at(e.destroy) && Ze.off("__wf_destroy", e.destroy),
        e.ready && at(e.ready) && by(e);
    }
    function by(e) {
      Yt = $e.filter(Yt, function (t) {
        return t !== e.ready;
      });
    }
    Ee.push = function (e) {
      if (vn) {
        at(e) && e();
        return;
      }
      Vi.push(e);
    };
    Ee.env = function (e) {
      var t = window.__wf_design,
        r = typeof t < "u";
      if (!e) return r;
      if (e === "design") return r && t;
      if (e === "preview") return r && !t;
      if (e === "slug") return r && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var pn = navigator.userAgent.toLowerCase(),
      Cs = (Ee.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      Oy = (Ee.env.chrome =
        /chrome/.test(pn) &&
        /Google/.test(navigator.vendor) &&
        parseInt(pn.match(/chrome\/(\d+)\./)[1], 10)),
      wy = (Ee.env.ios = /(ipod|iphone|ipad)/.test(pn));
    Ee.env.safari = /safari/.test(pn) && !Oy && !wy;
    var Ui;
    Cs &&
      Iy.on("touchstart mousedown", function (e) {
        Ui = e.target;
      });
    Ee.validClick = Cs
      ? function (e) {
          return e === Ui || Tt.contains(e, Ui);
        }
      : function () {
          return !0;
        };
    var Ns = "resize.webflow orientationchange.webflow load.webflow",
      Ay = "scroll.webflow " + Ns;
    Ee.resize = ki(Ze, Ns);
    Ee.scroll = ki(Ze, Ay);
    Ee.redraw = ki();
    function ki(e, t) {
      var r = [],
        n = {};
      return (
        (n.up = $e.throttle(function (i) {
          $e.each(r, function (o) {
            o(i);
          });
        })),
        e && t && e.on(t, n.up),
        (n.on = function (i) {
          typeof i == "function" && ($e.contains(r, i) || r.push(i));
        }),
        (n.off = function (i) {
          if (!arguments.length) {
            r = [];
            return;
          }
          r = $e.filter(r, function (o) {
            return o !== i;
          });
        }),
        n
      );
    }
    Ee.location = function (e) {
      window.location = e;
    };
    Ee.env() && (Ee.location = function () {});
    Ee.ready = function () {
      (vn = !0), Wi ? Sy() : $e.each(Yt, As), $e.each(Vi, As), Ee.resize.up();
    };
    function As(e) {
      at(e) && e();
    }
    function Sy() {
      (Wi = !1), $e.each(zt, Rs);
    }
    var Dt;
    Ee.load = function (e) {
      Dt.then(e);
    };
    function Ls() {
      Dt && (Dt.reject(), Ze.off("load", Dt.resolve)),
        (Dt = new Tt.Deferred()),
        Ze.on("load", Dt.resolve);
    }
    Ee.destroy = function (e) {
      (e = e || {}),
        (Wi = !0),
        Ze.triggerHandler("__wf_destroy"),
        e.domready != null && (vn = e.domready),
        $e.each(zt, xs),
        Ee.resize.off(),
        Ee.scroll.off(),
        Ee.redraw.off(),
        (Yt = []),
        (Vi = []),
        Dt.state() === "pending" && Ls();
    };
    Tt(Ee.ready);
    Ls();
    qs.exports = window.Webflow = Ee;
  });
  var Ms = u((yW, Ds) => {
    var Ps = ke();
    Ps.define(
      "brand",
      (Ds.exports = function (e) {
        var t = {},
          r = document,
          n = e("html"),
          i = e("body"),
          o = ".w-webflow-badge",
          a = window.location,
          s = /PhantomJS/i.test(navigator.userAgent),
          c =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
          h;
        t.ready = function () {
          var m = n.attr("data-wf-status"),
            y = n.attr("data-wf-domain") || "";
          /\.webflow\.io$/i.test(y) && a.hostname !== y && (m = !0),
            m &&
              !s &&
              ((h = h || d()),
              T(),
              setTimeout(T, 500),
              e(r).off(c, I).on(c, I));
        };
        function I() {
          var m =
            r.fullScreen ||
            r.mozFullScreen ||
            r.webkitIsFullScreen ||
            r.msFullscreenElement ||
            !!r.webkitFullscreenElement;
          e(h).attr("style", m ? "display: none !important;" : "");
        }
        function d() {
          var m = e('<a class="w-webflow-badge"></a>').attr(
              "href",
              "https://webflow.com?utm_campaign=brandjs"
            ),
            y = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon.f67cd735e3.svg"
              )
              .attr("alt", "")
              .css({ marginRight: "8px", width: "16px" }),
            w = e("<img>")
              .attr(
                "src",
                "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg"
              )
              .attr("alt", "Made in Webflow");
          return m.append(y, w), m[0];
        }
        function T() {
          var m = i.children(o),
            y = m.length && m.get(0) === h,
            w = Ps.env("editor");
          if (y) {
            w && m.remove();
            return;
          }
          m.length && m.remove(), w || i.append(h);
        }
        return t;
      })
    );
  });
  var Gs = u((IW, Fs) => {
    var Ry = ke();
    Ry.define(
      "focus-visible",
      (Fs.exports = function () {
        function e(r) {
          var n = !0,
            i = !1,
            o = null,
            a = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function s(S) {
            return !!(
              S &&
              S !== document &&
              S.nodeName !== "HTML" &&
              S.nodeName !== "BODY" &&
              "classList" in S &&
              "contains" in S.classList
            );
          }
          function c(S) {
            var W = S.type,
              U = S.tagName;
            return !!(
              (U === "INPUT" && a[W] && !S.readOnly) ||
              (U === "TEXTAREA" && !S.readOnly) ||
              S.isContentEditable
            );
          }
          function h(S) {
            S.getAttribute("data-wf-focus-visible") ||
              S.setAttribute("data-wf-focus-visible", "true");
          }
          function I(S) {
            S.getAttribute("data-wf-focus-visible") &&
              S.removeAttribute("data-wf-focus-visible");
          }
          function d(S) {
            S.metaKey ||
              S.altKey ||
              S.ctrlKey ||
              (s(r.activeElement) && h(r.activeElement), (n = !0));
          }
          function T() {
            n = !1;
          }
          function m(S) {
            s(S.target) && (n || c(S.target)) && h(S.target);
          }
          function y(S) {
            s(S.target) &&
              S.target.hasAttribute("data-wf-focus-visible") &&
              ((i = !0),
              window.clearTimeout(o),
              (o = window.setTimeout(function () {
                i = !1;
              }, 100)),
              I(S.target));
          }
          function w() {
            document.visibilityState === "hidden" && (i && (n = !0), N());
          }
          function N() {
            document.addEventListener("mousemove", P),
              document.addEventListener("mousedown", P),
              document.addEventListener("mouseup", P),
              document.addEventListener("pointermove", P),
              document.addEventListener("pointerdown", P),
              document.addEventListener("pointerup", P),
              document.addEventListener("touchmove", P),
              document.addEventListener("touchstart", P),
              document.addEventListener("touchend", P);
          }
          function x() {
            document.removeEventListener("mousemove", P),
              document.removeEventListener("mousedown", P),
              document.removeEventListener("mouseup", P),
              document.removeEventListener("pointermove", P),
              document.removeEventListener("pointerdown", P),
              document.removeEventListener("pointerup", P),
              document.removeEventListener("touchmove", P),
              document.removeEventListener("touchstart", P),
              document.removeEventListener("touchend", P);
          }
          function P(S) {
            (S.target.nodeName && S.target.nodeName.toLowerCase() === "html") ||
              ((n = !1), x());
          }
          document.addEventListener("keydown", d, !0),
            document.addEventListener("mousedown", T, !0),
            document.addEventListener("pointerdown", T, !0),
            document.addEventListener("touchstart", T, !0),
            document.addEventListener("visibilitychange", w, !0),
            N(),
            r.addEventListener("focus", m, !0),
            r.addEventListener("blur", y, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  });
  var Vs = u((TW, Us) => {
    var Xs = ke();
    Xs.define(
      "focus",
      (Us.exports = function () {
        var e = [],
          t = !1;
        function r(a) {
          t &&
            (a.preventDefault(),
            a.stopPropagation(),
            a.stopImmediatePropagation(),
            e.unshift(a));
        }
        function n(a) {
          var s = a.target,
            c = s.tagName;
          return (
            (/^a$/i.test(c) && s.href != null) ||
            (/^(button|textarea)$/i.test(c) && s.disabled !== !0) ||
            (/^input$/i.test(c) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(s.type) &&
              !s.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(c) &&
              !Number.isNaN(Number.parseFloat(s.tabIndex))) ||
            /^audio$/i.test(c) ||
            (/^video$/i.test(c) && s.controls === !0)
          );
        }
        function i(a) {
          n(a) &&
            ((t = !0),
            setTimeout(() => {
              for (t = !1, a.target.focus(); e.length > 0; ) {
                var s = e.pop();
                s.target.dispatchEvent(new MouseEvent(s.type, s));
              }
            }, 0));
        }
        function o() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            Xs.env.safari &&
            (document.addEventListener("mousedown", i, !0),
            document.addEventListener("mouseup", r, !0),
            document.addEventListener("click", r, !0));
        }
        return { ready: o };
      })
    );
  });
  var Bs = u((bW, ks) => {
    "use strict";
    var Bi = window.jQuery,
      st = {},
      hn = [],
      Ws = ".w-ix",
      gn = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), Bi(t).triggerHandler(st.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), Bi(t).triggerHandler(st.types.OUTRO));
        },
      };
    st.triggers = {};
    st.types = { INTRO: "w-ix-intro" + Ws, OUTRO: "w-ix-outro" + Ws };
    st.init = function () {
      for (var e = hn.length, t = 0; t < e; t++) {
        var r = hn[t];
        r[0](0, r[1]);
      }
      (hn = []), Bi.extend(st.triggers, gn);
    };
    st.async = function () {
      for (var e in gn) {
        var t = gn[e];
        gn.hasOwnProperty(e) &&
          (st.triggers[e] = function (r, n) {
            hn.push([t, n]);
          });
      }
    };
    st.async();
    ks.exports = st;
  });
  var Ar = u((OW, Ks) => {
    "use strict";
    var Hi = Bs();
    function Hs(e, t) {
      var r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r);
    }
    var xy = window.jQuery,
      En = {},
      js = ".w-ix",
      Cy = {
        reset: function (e, t) {
          Hi.triggers.reset(e, t);
        },
        intro: function (e, t) {
          Hi.triggers.intro(e, t), Hs(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          Hi.triggers.outro(e, t), Hs(t, "COMPONENT_INACTIVE");
        },
      };
    En.triggers = {};
    En.types = { INTRO: "w-ix-intro" + js, OUTRO: "w-ix-outro" + js };
    xy.extend(En.triggers, Cy);
    Ks.exports = En;
  });
  var zs = u((wW, Et) => {
    function ji(e) {
      return (
        (Et.exports = ji =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol == "function" &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        (Et.exports.__esModule = !0),
        (Et.exports.default = Et.exports),
        ji(e)
      );
    }
    (Et.exports = ji),
      (Et.exports.__esModule = !0),
      (Et.exports.default = Et.exports);
  });
  var Qt = u((AW, Sr) => {
    var Ny = zs().default;
    function Ys(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (Ys = function (i) {
        return i ? r : t;
      })(e);
    }
    function Ly(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (Ny(e) !== "object" && typeof e != "function"))
        return { default: e };
      var r = Ys(t);
      if (r && r.has(e)) return r.get(e);
      var n = {},
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(n, o, a)
            : (n[o] = e[o]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    (Sr.exports = Ly),
      (Sr.exports.__esModule = !0),
      (Sr.exports.default = Sr.exports);
  });
  var ut = u((SW, Rr) => {
    function qy(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Rr.exports = qy),
      (Rr.exports.__esModule = !0),
      (Rr.exports.default = Rr.exports);
  });
  var Ie = u((RW, Qs) => {
    var _n = function (e) {
      return e && e.Math == Math && e;
    };
    Qs.exports =
      _n(typeof globalThis == "object" && globalThis) ||
      _n(typeof window == "object" && window) ||
      _n(typeof self == "object" && self) ||
      _n(typeof global == "object" && global) ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  });
  var $t = u((xW, $s) => {
    $s.exports = function (e) {
      try {
        return !!e();
      } catch {
        return !0;
      }
    };
  });
  var Mt = u((CW, Zs) => {
    var Py = $t();
    Zs.exports = !Py(function () {
      return (
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1] != 7
      );
    });
  });
  var mn = u((NW, Js) => {
    var xr = Function.prototype.call;
    Js.exports = xr.bind
      ? xr.bind(xr)
      : function () {
          return xr.apply(xr, arguments);
        };
  });
  var nu = u((ru) => {
    "use strict";
    var eu = {}.propertyIsEnumerable,
      tu = Object.getOwnPropertyDescriptor,
      Dy = tu && !eu.call({ 1: 2 }, 1);
    ru.f = Dy
      ? function (t) {
          var r = tu(this, t);
          return !!r && r.enumerable;
        }
      : eu;
  });
  var Ki = u((qW, iu) => {
    iu.exports = function (e, t) {
      return {
        enumerable: !(e & 1),
        configurable: !(e & 2),
        writable: !(e & 4),
        value: t,
      };
    };
  });
  var Je = u((PW, au) => {
    var ou = Function.prototype,
      zi = ou.bind,
      Yi = ou.call,
      My = zi && zi.bind(Yi);
    au.exports = zi
      ? function (e) {
          return e && My(Yi, e);
        }
      : function (e) {
          return (
            e &&
            function () {
              return Yi.apply(e, arguments);
            }
          );
        };
  });
  var cu = u((DW, uu) => {
    var su = Je(),
      Fy = su({}.toString),
      Gy = su("".slice);
    uu.exports = function (e) {
      return Gy(Fy(e), 8, -1);
    };
  });
  var fu = u((MW, lu) => {
    var Xy = Ie(),
      Uy = Je(),
      Vy = $t(),
      Wy = cu(),
      Qi = Xy.Object,
      ky = Uy("".split);
    lu.exports = Vy(function () {
      return !Qi("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return Wy(e) == "String" ? ky(e, "") : Qi(e);
        }
      : Qi;
  });
  var $i = u((FW, du) => {
    var By = Ie(),
      Hy = By.TypeError;
    du.exports = function (e) {
      if (e == null) throw Hy("Can't call method on " + e);
      return e;
    };
  });
  var Cr = u((GW, pu) => {
    var jy = fu(),
      Ky = $i();
    pu.exports = function (e) {
      return jy(Ky(e));
    };
  });
  var ct = u((XW, vu) => {
    vu.exports = function (e) {
      return typeof e == "function";
    };
  });
  var Zt = u((UW, hu) => {
    var zy = ct();
    hu.exports = function (e) {
      return typeof e == "object" ? e !== null : zy(e);
    };
  });
  var Nr = u((VW, gu) => {
    var Zi = Ie(),
      Yy = ct(),
      Qy = function (e) {
        return Yy(e) ? e : void 0;
      };
    gu.exports = function (e, t) {
      return arguments.length < 2 ? Qy(Zi[e]) : Zi[e] && Zi[e][t];
    };
  });
  var _u = u((WW, Eu) => {
    var $y = Je();
    Eu.exports = $y({}.isPrototypeOf);
  });
  var yu = u((kW, mu) => {
    var Zy = Nr();
    mu.exports = Zy("navigator", "userAgent") || "";
  });
  var Su = u((BW, Au) => {
    var wu = Ie(),
      Ji = yu(),
      Iu = wu.process,
      Tu = wu.Deno,
      bu = (Iu && Iu.versions) || (Tu && Tu.version),
      Ou = bu && bu.v8,
      et,
      yn;
    Ou &&
      ((et = Ou.split(".")),
      (yn = et[0] > 0 && et[0] < 4 ? 1 : +(et[0] + et[1])));
    !yn &&
      Ji &&
      ((et = Ji.match(/Edge\/(\d+)/)),
      (!et || et[1] >= 74) &&
        ((et = Ji.match(/Chrome\/(\d+)/)), et && (yn = +et[1])));
    Au.exports = yn;
  });
  var eo = u((HW, xu) => {
    var Ru = Su(),
      Jy = $t();
    xu.exports =
      !!Object.getOwnPropertySymbols &&
      !Jy(function () {
        var e = Symbol();
        return (
          !String(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && Ru && Ru < 41)
        );
      });
  });
  var to = u((jW, Cu) => {
    var eI = eo();
    Cu.exports = eI && !Symbol.sham && typeof Symbol.iterator == "symbol";
  });
  var ro = u((KW, Nu) => {
    var tI = Ie(),
      rI = Nr(),
      nI = ct(),
      iI = _u(),
      oI = to(),
      aI = tI.Object;
    Nu.exports = oI
      ? function (e) {
          return typeof e == "symbol";
        }
      : function (e) {
          var t = rI("Symbol");
          return nI(t) && iI(t.prototype, aI(e));
        };
  });
  var qu = u((zW, Lu) => {
    var sI = Ie(),
      uI = sI.String;
    Lu.exports = function (e) {
      try {
        return uI(e);
      } catch {
        return "Object";
      }
    };
  });
  var Du = u((YW, Pu) => {
    var cI = Ie(),
      lI = ct(),
      fI = qu(),
      dI = cI.TypeError;
    Pu.exports = function (e) {
      if (lI(e)) return e;
      throw dI(fI(e) + " is not a function");
    };
  });
  var Fu = u((QW, Mu) => {
    var pI = Du();
    Mu.exports = function (e, t) {
      var r = e[t];
      return r == null ? void 0 : pI(r);
    };
  });
  var Xu = u(($W, Gu) => {
    var vI = Ie(),
      no = mn(),
      io = ct(),
      oo = Zt(),
      hI = vI.TypeError;
    Gu.exports = function (e, t) {
      var r, n;
      if (
        (t === "string" && io((r = e.toString)) && !oo((n = no(r, e)))) ||
        (io((r = e.valueOf)) && !oo((n = no(r, e)))) ||
        (t !== "string" && io((r = e.toString)) && !oo((n = no(r, e))))
      )
        return n;
      throw hI("Can't convert object to primitive value");
    };
  });
  var Vu = u((ZW, Uu) => {
    Uu.exports = !1;
  });
  var In = u((JW, ku) => {
    var Wu = Ie(),
      gI = Object.defineProperty;
    ku.exports = function (e, t) {
      try {
        gI(Wu, e, { value: t, configurable: !0, writable: !0 });
      } catch {
        Wu[e] = t;
      }
      return t;
    };
  });
  var Tn = u((ek, Hu) => {
    var EI = Ie(),
      _I = In(),
      Bu = "__core-js_shared__",
      mI = EI[Bu] || _I(Bu, {});
    Hu.exports = mI;
  });
  var ao = u((tk, Ku) => {
    var yI = Vu(),
      ju = Tn();
    (Ku.exports = function (e, t) {
      return ju[e] || (ju[e] = t !== void 0 ? t : {});
    })("versions", []).push({
      version: "3.19.0",
      mode: yI ? "pure" : "global",
      copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)",
    });
  });
  var Yu = u((rk, zu) => {
    var II = Ie(),
      TI = $i(),
      bI = II.Object;
    zu.exports = function (e) {
      return bI(TI(e));
    };
  });
  var bt = u((nk, Qu) => {
    var OI = Je(),
      wI = Yu(),
      AI = OI({}.hasOwnProperty);
    Qu.exports =
      Object.hasOwn ||
      function (t, r) {
        return AI(wI(t), r);
      };
  });
  var so = u((ik, $u) => {
    var SI = Je(),
      RI = 0,
      xI = Math.random(),
      CI = SI((1).toString);
    $u.exports = function (e) {
      return "Symbol(" + (e === void 0 ? "" : e) + ")_" + CI(++RI + xI, 36);
    };
  });
  var uo = u((ok, rc) => {
    var NI = Ie(),
      LI = ao(),
      Zu = bt(),
      qI = so(),
      Ju = eo(),
      tc = to(),
      Jt = LI("wks"),
      Ft = NI.Symbol,
      ec = Ft && Ft.for,
      PI = tc ? Ft : (Ft && Ft.withoutSetter) || qI;
    rc.exports = function (e) {
      if (!Zu(Jt, e) || !(Ju || typeof Jt[e] == "string")) {
        var t = "Symbol." + e;
        Ju && Zu(Ft, e)
          ? (Jt[e] = Ft[e])
          : tc && ec
          ? (Jt[e] = ec(t))
          : (Jt[e] = PI(t));
      }
      return Jt[e];
    };
  });
  var ac = u((ak, oc) => {
    var DI = Ie(),
      MI = mn(),
      nc = Zt(),
      ic = ro(),
      FI = Fu(),
      GI = Xu(),
      XI = uo(),
      UI = DI.TypeError,
      VI = XI("toPrimitive");
    oc.exports = function (e, t) {
      if (!nc(e) || ic(e)) return e;
      var r = FI(e, VI),
        n;
      if (r) {
        if (
          (t === void 0 && (t = "default"), (n = MI(r, e, t)), !nc(n) || ic(n))
        )
          return n;
        throw UI("Can't convert object to primitive value");
      }
      return t === void 0 && (t = "number"), GI(e, t);
    };
  });
  var co = u((sk, sc) => {
    var WI = ac(),
      kI = ro();
    sc.exports = function (e) {
      var t = WI(e, "string");
      return kI(t) ? t : t + "";
    };
  });
  var fo = u((uk, cc) => {
    var BI = Ie(),
      uc = Zt(),
      lo = BI.document,
      HI = uc(lo) && uc(lo.createElement);
    cc.exports = function (e) {
      return HI ? lo.createElement(e) : {};
    };
  });
  var po = u((ck, lc) => {
    var jI = Mt(),
      KI = $t(),
      zI = fo();
    lc.exports =
      !jI &&
      !KI(function () {
        return (
          Object.defineProperty(zI("div"), "a", {
            get: function () {
              return 7;
            },
          }).a != 7
        );
      });
  });
  var vo = u((dc) => {
    var YI = Mt(),
      QI = mn(),
      $I = nu(),
      ZI = Ki(),
      JI = Cr(),
      eT = co(),
      tT = bt(),
      rT = po(),
      fc = Object.getOwnPropertyDescriptor;
    dc.f = YI
      ? fc
      : function (t, r) {
          if (((t = JI(t)), (r = eT(r)), rT))
            try {
              return fc(t, r);
            } catch {}
          if (tT(t, r)) return ZI(!QI($I.f, t, r), t[r]);
        };
  });
  var Lr = u((fk, vc) => {
    var pc = Ie(),
      nT = Zt(),
      iT = pc.String,
      oT = pc.TypeError;
    vc.exports = function (e) {
      if (nT(e)) return e;
      throw oT(iT(e) + " is not an object");
    };
  });
  var qr = u((Ec) => {
    var aT = Ie(),
      sT = Mt(),
      uT = po(),
      hc = Lr(),
      cT = co(),
      lT = aT.TypeError,
      gc = Object.defineProperty;
    Ec.f = sT
      ? gc
      : function (t, r, n) {
          if ((hc(t), (r = cT(r)), hc(n), uT))
            try {
              return gc(t, r, n);
            } catch {}
          if ("get" in n || "set" in n) throw lT("Accessors not supported");
          return "value" in n && (t[r] = n.value), t;
        };
  });
  var bn = u((pk, _c) => {
    var fT = Mt(),
      dT = qr(),
      pT = Ki();
    _c.exports = fT
      ? function (e, t, r) {
          return dT.f(e, t, pT(1, r));
        }
      : function (e, t, r) {
          return (e[t] = r), e;
        };
  });
  var go = u((vk, mc) => {
    var vT = Je(),
      hT = ct(),
      ho = Tn(),
      gT = vT(Function.toString);
    hT(ho.inspectSource) ||
      (ho.inspectSource = function (e) {
        return gT(e);
      });
    mc.exports = ho.inspectSource;
  });
  var Tc = u((hk, Ic) => {
    var ET = Ie(),
      _T = ct(),
      mT = go(),
      yc = ET.WeakMap;
    Ic.exports = _T(yc) && /native code/.test(mT(yc));
  });
  var Eo = u((gk, Oc) => {
    var yT = ao(),
      IT = so(),
      bc = yT("keys");
    Oc.exports = function (e) {
      return bc[e] || (bc[e] = IT(e));
    };
  });
  var On = u((Ek, wc) => {
    wc.exports = {};
  });
  var Nc = u((_k, Cc) => {
    var TT = Tc(),
      xc = Ie(),
      _o = Je(),
      bT = Zt(),
      OT = bn(),
      mo = bt(),
      yo = Tn(),
      wT = Eo(),
      AT = On(),
      Ac = "Object already initialized",
      To = xc.TypeError,
      ST = xc.WeakMap,
      wn,
      Pr,
      An,
      RT = function (e) {
        return An(e) ? Pr(e) : wn(e, {});
      },
      xT = function (e) {
        return function (t) {
          var r;
          if (!bT(t) || (r = Pr(t)).type !== e)
            throw To("Incompatible receiver, " + e + " required");
          return r;
        };
      };
    TT || yo.state
      ? ((Ot = yo.state || (yo.state = new ST())),
        (Sc = _o(Ot.get)),
        (Io = _o(Ot.has)),
        (Rc = _o(Ot.set)),
        (wn = function (e, t) {
          if (Io(Ot, e)) throw new To(Ac);
          return (t.facade = e), Rc(Ot, e, t), t;
        }),
        (Pr = function (e) {
          return Sc(Ot, e) || {};
        }),
        (An = function (e) {
          return Io(Ot, e);
        }))
      : ((Gt = wT("state")),
        (AT[Gt] = !0),
        (wn = function (e, t) {
          if (mo(e, Gt)) throw new To(Ac);
          return (t.facade = e), OT(e, Gt, t), t;
        }),
        (Pr = function (e) {
          return mo(e, Gt) ? e[Gt] : {};
        }),
        (An = function (e) {
          return mo(e, Gt);
        }));
    var Ot, Sc, Io, Rc, Gt;
    Cc.exports = { set: wn, get: Pr, has: An, enforce: RT, getterFor: xT };
  });
  var Pc = u((mk, qc) => {
    var bo = Mt(),
      CT = bt(),
      Lc = Function.prototype,
      NT = bo && Object.getOwnPropertyDescriptor,
      Oo = CT(Lc, "name"),
      LT = Oo && function () {}.name === "something",
      qT = Oo && (!bo || (bo && NT(Lc, "name").configurable));
    qc.exports = { EXISTS: Oo, PROPER: LT, CONFIGURABLE: qT };
  });
  var Xc = u((yk, Gc) => {
    var PT = Ie(),
      Dc = ct(),
      DT = bt(),
      Mc = bn(),
      MT = In(),
      FT = go(),
      Fc = Nc(),
      GT = Pc().CONFIGURABLE,
      XT = Fc.get,
      UT = Fc.enforce,
      VT = String(String).split("String");
    (Gc.exports = function (e, t, r, n) {
      var i = n ? !!n.unsafe : !1,
        o = n ? !!n.enumerable : !1,
        a = n ? !!n.noTargetGet : !1,
        s = n && n.name !== void 0 ? n.name : t,
        c;
      if (
        (Dc(r) &&
          (String(s).slice(0, 7) === "Symbol(" &&
            (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
          (!DT(r, "name") || (GT && r.name !== s)) && Mc(r, "name", s),
          (c = UT(r)),
          c.source || (c.source = VT.join(typeof s == "string" ? s : ""))),
        e === PT)
      ) {
        o ? (e[t] = r) : MT(t, r);
        return;
      } else i ? !a && e[t] && (o = !0) : delete e[t];
      o ? (e[t] = r) : Mc(e, t, r);
    })(Function.prototype, "toString", function () {
      return (Dc(this) && XT(this).source) || FT(this);
    });
  });
  var wo = u((Ik, Uc) => {
    var WT = Math.ceil,
      kT = Math.floor;
    Uc.exports = function (e) {
      var t = +e;
      return t !== t || t === 0 ? 0 : (t > 0 ? kT : WT)(t);
    };
  });
  var Wc = u((Tk, Vc) => {
    var BT = wo(),
      HT = Math.max,
      jT = Math.min;
    Vc.exports = function (e, t) {
      var r = BT(e);
      return r < 0 ? HT(r + t, 0) : jT(r, t);
    };
  });
  var Bc = u((bk, kc) => {
    var KT = wo(),
      zT = Math.min;
    kc.exports = function (e) {
      return e > 0 ? zT(KT(e), 9007199254740991) : 0;
    };
  });
  var jc = u((Ok, Hc) => {
    var YT = Bc();
    Hc.exports = function (e) {
      return YT(e.length);
    };
  });
  var Ao = u((wk, zc) => {
    var QT = Cr(),
      $T = Wc(),
      ZT = jc(),
      Kc = function (e) {
        return function (t, r, n) {
          var i = QT(t),
            o = ZT(i),
            a = $T(n, o),
            s;
          if (e && r != r) {
            for (; o > a; ) if (((s = i[a++]), s != s)) return !0;
          } else
            for (; o > a; a++)
              if ((e || a in i) && i[a] === r) return e || a || 0;
          return !e && -1;
        };
      };
    zc.exports = { includes: Kc(!0), indexOf: Kc(!1) };
  });
  var Ro = u((Ak, Qc) => {
    var JT = Je(),
      So = bt(),
      eb = Cr(),
      tb = Ao().indexOf,
      rb = On(),
      Yc = JT([].push);
    Qc.exports = function (e, t) {
      var r = eb(e),
        n = 0,
        i = [],
        o;
      for (o in r) !So(rb, o) && So(r, o) && Yc(i, o);
      for (; t.length > n; ) So(r, (o = t[n++])) && (~tb(i, o) || Yc(i, o));
      return i;
    };
  });
  var Sn = u((Sk, $c) => {
    $c.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  });
  var Jc = u((Zc) => {
    var nb = Ro(),
      ib = Sn(),
      ob = ib.concat("length", "prototype");
    Zc.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return nb(t, ob);
      };
  });
  var tl = u((el) => {
    el.f = Object.getOwnPropertySymbols;
  });
  var nl = u((Ck, rl) => {
    var ab = Nr(),
      sb = Je(),
      ub = Jc(),
      cb = tl(),
      lb = Lr(),
      fb = sb([].concat);
    rl.exports =
      ab("Reflect", "ownKeys") ||
      function (t) {
        var r = ub.f(lb(t)),
          n = cb.f;
        return n ? fb(r, n(t)) : r;
      };
  });
  var ol = u((Nk, il) => {
    var db = bt(),
      pb = nl(),
      vb = vo(),
      hb = qr();
    il.exports = function (e, t) {
      for (var r = pb(t), n = hb.f, i = vb.f, o = 0; o < r.length; o++) {
        var a = r[o];
        db(e, a) || n(e, a, i(t, a));
      }
    };
  });
  var sl = u((Lk, al) => {
    var gb = $t(),
      Eb = ct(),
      _b = /#|\.prototype\./,
      Dr = function (e, t) {
        var r = yb[mb(e)];
        return r == Tb ? !0 : r == Ib ? !1 : Eb(t) ? gb(t) : !!t;
      },
      mb = (Dr.normalize = function (e) {
        return String(e).replace(_b, ".").toLowerCase();
      }),
      yb = (Dr.data = {}),
      Ib = (Dr.NATIVE = "N"),
      Tb = (Dr.POLYFILL = "P");
    al.exports = Dr;
  });
  var cl = u((qk, ul) => {
    var xo = Ie(),
      bb = vo().f,
      Ob = bn(),
      wb = Xc(),
      Ab = In(),
      Sb = ol(),
      Rb = sl();
    ul.exports = function (e, t) {
      var r = e.target,
        n = e.global,
        i = e.stat,
        o,
        a,
        s,
        c,
        h,
        I;
      if (
        (n
          ? (a = xo)
          : i
          ? (a = xo[r] || Ab(r, {}))
          : (a = (xo[r] || {}).prototype),
        a)
      )
        for (s in t) {
          if (
            ((h = t[s]),
            e.noTargetGet ? ((I = bb(a, s)), (c = I && I.value)) : (c = a[s]),
            (o = Rb(n ? s : r + (i ? "." : "#") + s, e.forced)),
            !o && c !== void 0)
          ) {
            if (typeof h == typeof c) continue;
            Sb(h, c);
          }
          (e.sham || (c && c.sham)) && Ob(h, "sham", !0), wb(a, s, h, e);
        }
    };
  });
  var fl = u((Pk, ll) => {
    var xb = Ro(),
      Cb = Sn();
    ll.exports =
      Object.keys ||
      function (t) {
        return xb(t, Cb);
      };
  });
  var pl = u((Dk, dl) => {
    var Nb = Mt(),
      Lb = qr(),
      qb = Lr(),
      Pb = Cr(),
      Db = fl();
    dl.exports = Nb
      ? Object.defineProperties
      : function (t, r) {
          qb(t);
          for (var n = Pb(r), i = Db(r), o = i.length, a = 0, s; o > a; )
            Lb.f(t, (s = i[a++]), n[s]);
          return t;
        };
  });
  var hl = u((Mk, vl) => {
    var Mb = Nr();
    vl.exports = Mb("document", "documentElement");
  });
  var bl = u((Fk, Tl) => {
    var Fb = Lr(),
      Gb = pl(),
      gl = Sn(),
      Xb = On(),
      Ub = hl(),
      Vb = fo(),
      Wb = Eo(),
      El = ">",
      _l = "<",
      No = "prototype",
      Lo = "script",
      yl = Wb("IE_PROTO"),
      Co = function () {},
      Il = function (e) {
        return _l + Lo + El + e + _l + "/" + Lo + El;
      },
      ml = function (e) {
        e.write(Il("")), e.close();
        var t = e.parentWindow.Object;
        return (e = null), t;
      },
      kb = function () {
        var e = Vb("iframe"),
          t = "java" + Lo + ":",
          r;
        return (
          (e.style.display = "none"),
          Ub.appendChild(e),
          (e.src = String(t)),
          (r = e.contentWindow.document),
          r.open(),
          r.write(Il("document.F=Object")),
          r.close(),
          r.F
        );
      },
      Rn,
      xn = function () {
        try {
          Rn = new ActiveXObject("htmlfile");
        } catch {}
        xn =
          typeof document < "u"
            ? document.domain && Rn
              ? ml(Rn)
              : kb()
            : ml(Rn);
        for (var e = gl.length; e--; ) delete xn[No][gl[e]];
        return xn();
      };
    Xb[yl] = !0;
    Tl.exports =
      Object.create ||
      function (t, r) {
        var n;
        return (
          t !== null
            ? ((Co[No] = Fb(t)), (n = new Co()), (Co[No] = null), (n[yl] = t))
            : (n = xn()),
          r === void 0 ? n : Gb(n, r)
        );
      };
  });
  var wl = u((Gk, Ol) => {
    var Bb = uo(),
      Hb = bl(),
      jb = qr(),
      qo = Bb("unscopables"),
      Po = Array.prototype;
    Po[qo] == null && jb.f(Po, qo, { configurable: !0, value: Hb(null) });
    Ol.exports = function (e) {
      Po[qo][e] = !0;
    };
  });
  var Al = u(() => {
    "use strict";
    var Kb = cl(),
      zb = Ao().includes,
      Yb = wl();
    Kb(
      { target: "Array", proto: !0 },
      {
        includes: function (t) {
          return zb(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
    Yb("includes");
  });
  var Rl = u((Vk, Sl) => {
    var Qb = Ie(),
      $b = Je();
    Sl.exports = function (e, t) {
      return $b(Qb[e].prototype[t]);
    };
  });
  var Cl = u((Wk, xl) => {
    Al();
    var Zb = Rl();
    xl.exports = Zb("Array", "includes");
  });
  var Ll = u((kk, Nl) => {
    var Jb = Cl();
    Nl.exports = Jb;
  });
  var Pl = u((Bk, ql) => {
    var eO = Ll();
    ql.exports = eO;
  });
  var Do = u((Hk, Dl) => {
    var tO =
      typeof global == "object" && global && global.Object === Object && global;
    Dl.exports = tO;
  });
  var tt = u((jk, Ml) => {
    var rO = Do(),
      nO = typeof self == "object" && self && self.Object === Object && self,
      iO = rO || nO || Function("return this")();
    Ml.exports = iO;
  });
  var er = u((Kk, Fl) => {
    var oO = tt(),
      aO = oO.Symbol;
    Fl.exports = aO;
  });
  var Vl = u((zk, Ul) => {
    var Gl = er(),
      Xl = Object.prototype,
      sO = Xl.hasOwnProperty,
      uO = Xl.toString,
      Mr = Gl ? Gl.toStringTag : void 0;
    function cO(e) {
      var t = sO.call(e, Mr),
        r = e[Mr];
      try {
        e[Mr] = void 0;
        var n = !0;
      } catch {}
      var i = uO.call(e);
      return n && (t ? (e[Mr] = r) : delete e[Mr]), i;
    }
    Ul.exports = cO;
  });
  var kl = u((Yk, Wl) => {
    var lO = Object.prototype,
      fO = lO.toString;
    function dO(e) {
      return fO.call(e);
    }
    Wl.exports = dO;
  });
  var wt = u((Qk, jl) => {
    var Bl = er(),
      pO = Vl(),
      vO = kl(),
      hO = "[object Null]",
      gO = "[object Undefined]",
      Hl = Bl ? Bl.toStringTag : void 0;
    function EO(e) {
      return e == null
        ? e === void 0
          ? gO
          : hO
        : Hl && Hl in Object(e)
        ? pO(e)
        : vO(e);
    }
    jl.exports = EO;
  });
  var Mo = u(($k, Kl) => {
    function _O(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    Kl.exports = _O;
  });
  var Fo = u((Zk, zl) => {
    var mO = Mo(),
      yO = mO(Object.getPrototypeOf, Object);
    zl.exports = yO;
  });
  var _t = u((Jk, Yl) => {
    function IO(e) {
      return e != null && typeof e == "object";
    }
    Yl.exports = IO;
  });
  var Go = u((eB, $l) => {
    var TO = wt(),
      bO = Fo(),
      OO = _t(),
      wO = "[object Object]",
      AO = Function.prototype,
      SO = Object.prototype,
      Ql = AO.toString,
      RO = SO.hasOwnProperty,
      xO = Ql.call(Object);
    function CO(e) {
      if (!OO(e) || TO(e) != wO) return !1;
      var t = bO(e);
      if (t === null) return !0;
      var r = RO.call(t, "constructor") && t.constructor;
      return typeof r == "function" && r instanceof r && Ql.call(r) == xO;
    }
    $l.exports = CO;
  });
  var Zl = u((Xo) => {
    "use strict";
    Object.defineProperty(Xo, "__esModule", { value: !0 });
    Xo.default = NO;
    function NO(e) {
      var t,
        r = e.Symbol;
      return (
        typeof r == "function"
          ? r.observable
            ? (t = r.observable)
            : ((t = r("observable")), (r.observable = t))
          : (t = "@@observable"),
        t
      );
    }
  });
  var Jl = u((Vo, Uo) => {
    "use strict";
    Object.defineProperty(Vo, "__esModule", { value: !0 });
    var LO = Zl(),
      qO = PO(LO);
    function PO(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var tr;
    typeof self < "u"
      ? (tr = self)
      : typeof window < "u"
      ? (tr = window)
      : typeof global < "u"
      ? (tr = global)
      : typeof Uo < "u"
      ? (tr = Uo)
      : (tr = Function("return this")());
    var DO = (0, qO.default)(tr);
    Vo.default = DO;
  });
  var Wo = u((Fr) => {
    "use strict";
    Fr.__esModule = !0;
    Fr.ActionTypes = void 0;
    Fr.default = nf;
    var MO = Go(),
      FO = rf(MO),
      GO = Jl(),
      ef = rf(GO);
    function rf(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var tf = (Fr.ActionTypes = { INIT: "@@redux/INIT" });
    function nf(e, t, r) {
      var n;
      if (
        (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
        typeof r < "u")
      ) {
        if (typeof r != "function")
          throw new Error("Expected the enhancer to be a function.");
        return r(nf)(e, t);
      }
      if (typeof e != "function")
        throw new Error("Expected the reducer to be a function.");
      var i = e,
        o = t,
        a = [],
        s = a,
        c = !1;
      function h() {
        s === a && (s = a.slice());
      }
      function I() {
        return o;
      }
      function d(w) {
        if (typeof w != "function")
          throw new Error("Expected listener to be a function.");
        var N = !0;
        return (
          h(),
          s.push(w),
          function () {
            if (N) {
              (N = !1), h();
              var P = s.indexOf(w);
              s.splice(P, 1);
            }
          }
        );
      }
      function T(w) {
        if (!(0, FO.default)(w))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (typeof w.type > "u")
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (c) throw new Error("Reducers may not dispatch actions.");
        try {
          (c = !0), (o = i(o, w));
        } finally {
          c = !1;
        }
        for (var N = (a = s), x = 0; x < N.length; x++) N[x]();
        return w;
      }
      function m(w) {
        if (typeof w != "function")
          throw new Error("Expected the nextReducer to be a function.");
        (i = w), T({ type: tf.INIT });
      }
      function y() {
        var w,
          N = d;
        return (
          (w = {
            subscribe: function (P) {
              if (typeof P != "object")
                throw new TypeError("Expected the observer to be an object.");
              function S() {
                P.next && P.next(I());
              }
              S();
              var W = N(S);
              return { unsubscribe: W };
            },
          }),
          (w[ef.default] = function () {
            return this;
          }),
          w
        );
      }
      return (
        T({ type: tf.INIT }),
        (n = { dispatch: T, subscribe: d, getState: I, replaceReducer: m }),
        (n[ef.default] = y),
        n
      );
    }
  });
  var Bo = u((ko) => {
    "use strict";
    ko.__esModule = !0;
    ko.default = XO;
    function XO(e) {
      typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(e);
      try {
        throw new Error(e);
      } catch {}
    }
  });
  var sf = u((Ho) => {
    "use strict";
    Ho.__esModule = !0;
    Ho.default = BO;
    var of = Wo(),
      UO = Go(),
      iB = af(UO),
      VO = Bo(),
      oB = af(VO);
    function af(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function WO(e, t) {
      var r = t && t.type,
        n = (r && '"' + r.toString() + '"') || "an action";
      return (
        "Given action " +
        n +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function kO(e) {
      Object.keys(e).forEach(function (t) {
        var r = e[t],
          n = r(void 0, { type: of.ActionTypes.INIT });
        if (typeof n > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var i =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof r(void 0, { type: i }) > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined when probed with a random type. ' +
              ("Don't try to handle " +
                of.ActionTypes.INIT +
                ' or other actions in "redux/*" ') +
              "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function BO(e) {
      for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        typeof e[i] == "function" && (r[i] = e[i]);
      }
      var o = Object.keys(r);
      if (!1) var a;
      var s;
      try {
        kO(r);
      } catch (c) {
        s = c;
      }
      return function () {
        var h =
            arguments.length <= 0 || arguments[0] === void 0
              ? {}
              : arguments[0],
          I = arguments[1];
        if (s) throw s;
        if (!1) var d;
        for (var T = !1, m = {}, y = 0; y < o.length; y++) {
          var w = o[y],
            N = r[w],
            x = h[w],
            P = N(x, I);
          if (typeof P > "u") {
            var S = WO(w, I);
            throw new Error(S);
          }
          (m[w] = P), (T = T || P !== x);
        }
        return T ? m : h;
      };
    }
  });
  var cf = u((jo) => {
    "use strict";
    jo.__esModule = !0;
    jo.default = HO;
    function uf(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function HO(e, t) {
      if (typeof e == "function") return uf(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (e === null ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
        var o = r[i],
          a = e[o];
        typeof a == "function" && (n[o] = uf(a, t));
      }
      return n;
    }
  });
  var zo = u((Ko) => {
    "use strict";
    Ko.__esModule = !0;
    Ko.default = jO;
    function jO() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      if (t.length === 0)
        return function (o) {
          return o;
        };
      if (t.length === 1) return t[0];
      var n = t[t.length - 1],
        i = t.slice(0, -1);
      return function () {
        return i.reduceRight(function (o, a) {
          return a(o);
        }, n.apply(void 0, arguments));
      };
    }
  });
  var lf = u((Yo) => {
    "use strict";
    Yo.__esModule = !0;
    var KO =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      };
    Yo.default = $O;
    var zO = zo(),
      YO = QO(zO);
    function QO(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function $O() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return function (n) {
        return function (i, o, a) {
          var s = n(i, o, a),
            c = s.dispatch,
            h = [],
            I = {
              getState: s.getState,
              dispatch: function (T) {
                return c(T);
              },
            };
          return (
            (h = t.map(function (d) {
              return d(I);
            })),
            (c = YO.default.apply(void 0, h)(s.dispatch)),
            KO({}, s, { dispatch: c })
          );
        };
      };
    }
  });
  var Qo = u((Ke) => {
    "use strict";
    Ke.__esModule = !0;
    Ke.compose =
      Ke.applyMiddleware =
      Ke.bindActionCreators =
      Ke.combineReducers =
      Ke.createStore =
        void 0;
    var ZO = Wo(),
      JO = rr(ZO),
      ew = sf(),
      tw = rr(ew),
      rw = cf(),
      nw = rr(rw),
      iw = lf(),
      ow = rr(iw),
      aw = zo(),
      sw = rr(aw),
      uw = Bo(),
      lB = rr(uw);
    function rr(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Ke.createStore = JO.default;
    Ke.combineReducers = tw.default;
    Ke.bindActionCreators = nw.default;
    Ke.applyMiddleware = ow.default;
    Ke.compose = sw.default;
  });
  var ff = u((Ne) => {
    "use strict";
    Object.defineProperty(Ne, "__esModule", { value: !0 });
    Ne.QuickEffectIds =
      Ne.QuickEffectDirectionConsts =
      Ne.EventTypeConsts =
      Ne.EventLimitAffectedElements =
      Ne.EventContinuousMouseAxes =
      Ne.EventBasedOn =
      Ne.EventAppliesTo =
        void 0;
    var cw = {
      NAVBAR_OPEN: "NAVBAR_OPEN",
      NAVBAR_CLOSE: "NAVBAR_CLOSE",
      TAB_ACTIVE: "TAB_ACTIVE",
      TAB_INACTIVE: "TAB_INACTIVE",
      SLIDER_ACTIVE: "SLIDER_ACTIVE",
      SLIDER_INACTIVE: "SLIDER_INACTIVE",
      DROPDOWN_OPEN: "DROPDOWN_OPEN",
      DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
      MOUSE_CLICK: "MOUSE_CLICK",
      MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
      MOUSE_DOWN: "MOUSE_DOWN",
      MOUSE_UP: "MOUSE_UP",
      MOUSE_OVER: "MOUSE_OVER",
      MOUSE_OUT: "MOUSE_OUT",
      MOUSE_MOVE: "MOUSE_MOVE",
      MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
      SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
      SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
      SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
      ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
      ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
      PAGE_START: "PAGE_START",
      PAGE_FINISH: "PAGE_FINISH",
      PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
      PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
      PAGE_SCROLL: "PAGE_SCROLL",
    };
    Ne.EventTypeConsts = cw;
    var lw = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" };
    Ne.EventAppliesTo = lw;
    var fw = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" };
    Ne.EventBasedOn = fw;
    var dw = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" };
    Ne.EventContinuousMouseAxes = dw;
    var pw = {
      CHILDREN: "CHILDREN",
      SIBLINGS: "SIBLINGS",
      IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
    };
    Ne.EventLimitAffectedElements = pw;
    var vw = {
      FADE_EFFECT: "FADE_EFFECT",
      SLIDE_EFFECT: "SLIDE_EFFECT",
      GROW_EFFECT: "GROW_EFFECT",
      SHRINK_EFFECT: "SHRINK_EFFECT",
      SPIN_EFFECT: "SPIN_EFFECT",
      FLY_EFFECT: "FLY_EFFECT",
      POP_EFFECT: "POP_EFFECT",
      FLIP_EFFECT: "FLIP_EFFECT",
      JIGGLE_EFFECT: "JIGGLE_EFFECT",
      PULSE_EFFECT: "PULSE_EFFECT",
      DROP_EFFECT: "DROP_EFFECT",
      BLINK_EFFECT: "BLINK_EFFECT",
      BOUNCE_EFFECT: "BOUNCE_EFFECT",
      FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
      FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
      RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
      JELLO_EFFECT: "JELLO_EFFECT",
      GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
      SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
      PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
    };
    Ne.QuickEffectIds = vw;
    var hw = {
      LEFT: "LEFT",
      RIGHT: "RIGHT",
      BOTTOM: "BOTTOM",
      TOP: "TOP",
      BOTTOM_LEFT: "BOTTOM_LEFT",
      BOTTOM_RIGHT: "BOTTOM_RIGHT",
      TOP_RIGHT: "TOP_RIGHT",
      TOP_LEFT: "TOP_LEFT",
      CLOCKWISE: "CLOCKWISE",
      COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
    };
    Ne.QuickEffectDirectionConsts = hw;
  });
  var $o = u((nr) => {
    "use strict";
    Object.defineProperty(nr, "__esModule", { value: !0 });
    nr.ActionTypeConsts = nr.ActionAppliesTo = void 0;
    var gw = {
      TRANSFORM_MOVE: "TRANSFORM_MOVE",
      TRANSFORM_SCALE: "TRANSFORM_SCALE",
      TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
      TRANSFORM_SKEW: "TRANSFORM_SKEW",
      STYLE_OPACITY: "STYLE_OPACITY",
      STYLE_SIZE: "STYLE_SIZE",
      STYLE_FILTER: "STYLE_FILTER",
      STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
      STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
      STYLE_BORDER: "STYLE_BORDER",
      STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
      PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
      GENERAL_DISPLAY: "GENERAL_DISPLAY",
      GENERAL_START_ACTION: "GENERAL_START_ACTION",
      GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
      GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
      GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
      GENERAL_LOOP: "GENERAL_LOOP",
      STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
    };
    nr.ActionTypeConsts = gw;
    var Ew = {
      ELEMENT: "ELEMENT",
      ELEMENT_CLASS: "ELEMENT_CLASS",
      TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
    };
    nr.ActionAppliesTo = Ew;
  });
  var df = u((Cn) => {
    "use strict";
    Object.defineProperty(Cn, "__esModule", { value: !0 });
    Cn.InteractionTypeConsts = void 0;
    var _w = {
      MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
      MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
      MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
      SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
      SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
      MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
      PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
      PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
      PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
      NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
      DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
      ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
      TAB_INTERACTION: "TAB_INTERACTION",
      SLIDER_INTERACTION: "SLIDER_INTERACTION",
    };
    Cn.InteractionTypeConsts = _w;
  });
  var pf = u((Nn) => {
    "use strict";
    Object.defineProperty(Nn, "__esModule", { value: !0 });
    Nn.ReducedMotionTypes = void 0;
    var mw = $o(),
      {
        TRANSFORM_MOVE: yw,
        TRANSFORM_SCALE: Iw,
        TRANSFORM_ROTATE: Tw,
        TRANSFORM_SKEW: bw,
        STYLE_SIZE: Ow,
        STYLE_FILTER: ww,
        STYLE_FONT_VARIATION: Aw,
      } = mw.ActionTypeConsts,
      Sw = {
        [yw]: !0,
        [Iw]: !0,
        [Tw]: !0,
        [bw]: !0,
        [Ow]: !0,
        [ww]: !0,
        [Aw]: !0,
      };
    Nn.ReducedMotionTypes = Sw;
  });
  var vf = u((ce) => {
    "use strict";
    Object.defineProperty(ce, "__esModule", { value: !0 });
    ce.IX2_VIEWPORT_WIDTH_CHANGED =
      ce.IX2_TEST_FRAME_RENDERED =
      ce.IX2_STOP_REQUESTED =
      ce.IX2_SESSION_STOPPED =
      ce.IX2_SESSION_STARTED =
      ce.IX2_SESSION_INITIALIZED =
      ce.IX2_RAW_DATA_IMPORTED =
      ce.IX2_PREVIEW_REQUESTED =
      ce.IX2_PLAYBACK_REQUESTED =
      ce.IX2_PARAMETER_CHANGED =
      ce.IX2_MEDIA_QUERIES_DEFINED =
      ce.IX2_INSTANCE_STARTED =
      ce.IX2_INSTANCE_REMOVED =
      ce.IX2_INSTANCE_ADDED =
      ce.IX2_EVENT_STATE_CHANGED =
      ce.IX2_EVENT_LISTENER_ADDED =
      ce.IX2_ELEMENT_STATE_CHANGED =
      ce.IX2_CLEAR_REQUESTED =
      ce.IX2_ANIMATION_FRAME_CHANGED =
      ce.IX2_ACTION_LIST_PLAYBACK_CHANGED =
        void 0;
    var Rw = "IX2_RAW_DATA_IMPORTED";
    ce.IX2_RAW_DATA_IMPORTED = Rw;
    var xw = "IX2_SESSION_INITIALIZED";
    ce.IX2_SESSION_INITIALIZED = xw;
    var Cw = "IX2_SESSION_STARTED";
    ce.IX2_SESSION_STARTED = Cw;
    var Nw = "IX2_SESSION_STOPPED";
    ce.IX2_SESSION_STOPPED = Nw;
    var Lw = "IX2_PREVIEW_REQUESTED";
    ce.IX2_PREVIEW_REQUESTED = Lw;
    var qw = "IX2_PLAYBACK_REQUESTED";
    ce.IX2_PLAYBACK_REQUESTED = qw;
    var Pw = "IX2_STOP_REQUESTED";
    ce.IX2_STOP_REQUESTED = Pw;
    var Dw = "IX2_CLEAR_REQUESTED";
    ce.IX2_CLEAR_REQUESTED = Dw;
    var Mw = "IX2_EVENT_LISTENER_ADDED";
    ce.IX2_EVENT_LISTENER_ADDED = Mw;
    var Fw = "IX2_EVENT_STATE_CHANGED";
    ce.IX2_EVENT_STATE_CHANGED = Fw;
    var Gw = "IX2_ANIMATION_FRAME_CHANGED";
    ce.IX2_ANIMATION_FRAME_CHANGED = Gw;
    var Xw = "IX2_PARAMETER_CHANGED";
    ce.IX2_PARAMETER_CHANGED = Xw;
    var Uw = "IX2_INSTANCE_ADDED";
    ce.IX2_INSTANCE_ADDED = Uw;
    var Vw = "IX2_INSTANCE_STARTED";
    ce.IX2_INSTANCE_STARTED = Vw;
    var Ww = "IX2_INSTANCE_REMOVED";
    ce.IX2_INSTANCE_REMOVED = Ww;
    var kw = "IX2_ELEMENT_STATE_CHANGED";
    ce.IX2_ELEMENT_STATE_CHANGED = kw;
    var Bw = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
    ce.IX2_ACTION_LIST_PLAYBACK_CHANGED = Bw;
    var Hw = "IX2_VIEWPORT_WIDTH_CHANGED";
    ce.IX2_VIEWPORT_WIDTH_CHANGED = Hw;
    var jw = "IX2_MEDIA_QUERIES_DEFINED";
    ce.IX2_MEDIA_QUERIES_DEFINED = jw;
    var Kw = "IX2_TEST_FRAME_RENDERED";
    ce.IX2_TEST_FRAME_RENDERED = Kw;
  });
  var hf = u((M) => {
    "use strict";
    Object.defineProperty(M, "__esModule", { value: !0 });
    M.W_MOD_JS =
      M.W_MOD_IX =
      M.WILL_CHANGE =
      M.WIDTH =
      M.WF_PAGE =
      M.TRANSLATE_Z =
      M.TRANSLATE_Y =
      M.TRANSLATE_X =
      M.TRANSLATE_3D =
      M.TRANSFORM =
      M.SKEW_Y =
      M.SKEW_X =
      M.SKEW =
      M.SIBLINGS =
      M.SCALE_Z =
      M.SCALE_Y =
      M.SCALE_X =
      M.SCALE_3D =
      M.ROTATE_Z =
      M.ROTATE_Y =
      M.ROTATE_X =
      M.RENDER_TRANSFORM =
      M.RENDER_STYLE =
      M.RENDER_PLUGIN =
      M.RENDER_GENERAL =
      M.PRESERVE_3D =
      M.PLAIN_OBJECT =
      M.PARENT =
      M.OPACITY =
      M.IX2_ID_DELIMITER =
      M.IMMEDIATE_CHILDREN =
      M.HTML_ELEMENT =
      M.HEIGHT =
      M.FONT_VARIATION_SETTINGS =
      M.FLEX =
      M.FILTER =
      M.DISPLAY =
      M.CONFIG_Z_VALUE =
      M.CONFIG_Z_UNIT =
      M.CONFIG_Y_VALUE =
      M.CONFIG_Y_UNIT =
      M.CONFIG_X_VALUE =
      M.CONFIG_X_UNIT =
      M.CONFIG_VALUE =
      M.CONFIG_UNIT =
      M.COMMA_DELIMITER =
      M.COLOR =
      M.COLON_DELIMITER =
      M.CHILDREN =
      M.BOUNDARY_SELECTOR =
      M.BORDER_COLOR =
      M.BAR_DELIMITER =
      M.BACKGROUND_COLOR =
      M.BACKGROUND =
      M.AUTO =
      M.ABSTRACT_NODE =
        void 0;
    var zw = "|";
    M.IX2_ID_DELIMITER = zw;
    var Yw = "data-wf-page";
    M.WF_PAGE = Yw;
    var Qw = "w-mod-js";
    M.W_MOD_JS = Qw;
    var $w = "w-mod-ix";
    M.W_MOD_IX = $w;
    var Zw = ".w-dyn-item";
    M.BOUNDARY_SELECTOR = Zw;
    var Jw = "xValue";
    M.CONFIG_X_VALUE = Jw;
    var eA = "yValue";
    M.CONFIG_Y_VALUE = eA;
    var tA = "zValue";
    M.CONFIG_Z_VALUE = tA;
    var rA = "value";
    M.CONFIG_VALUE = rA;
    var nA = "xUnit";
    M.CONFIG_X_UNIT = nA;
    var iA = "yUnit";
    M.CONFIG_Y_UNIT = iA;
    var oA = "zUnit";
    M.CONFIG_Z_UNIT = oA;
    var aA = "unit";
    M.CONFIG_UNIT = aA;
    var sA = "transform";
    M.TRANSFORM = sA;
    var uA = "translateX";
    M.TRANSLATE_X = uA;
    var cA = "translateY";
    M.TRANSLATE_Y = cA;
    var lA = "translateZ";
    M.TRANSLATE_Z = lA;
    var fA = "translate3d";
    M.TRANSLATE_3D = fA;
    var dA = "scaleX";
    M.SCALE_X = dA;
    var pA = "scaleY";
    M.SCALE_Y = pA;
    var vA = "scaleZ";
    M.SCALE_Z = vA;
    var hA = "scale3d";
    M.SCALE_3D = hA;
    var gA = "rotateX";
    M.ROTATE_X = gA;
    var EA = "rotateY";
    M.ROTATE_Y = EA;
    var _A = "rotateZ";
    M.ROTATE_Z = _A;
    var mA = "skew";
    M.SKEW = mA;
    var yA = "skewX";
    M.SKEW_X = yA;
    var IA = "skewY";
    M.SKEW_Y = IA;
    var TA = "opacity";
    M.OPACITY = TA;
    var bA = "filter";
    M.FILTER = bA;
    var OA = "font-variation-settings";
    M.FONT_VARIATION_SETTINGS = OA;
    var wA = "width";
    M.WIDTH = wA;
    var AA = "height";
    M.HEIGHT = AA;
    var SA = "backgroundColor";
    M.BACKGROUND_COLOR = SA;
    var RA = "background";
    M.BACKGROUND = RA;
    var xA = "borderColor";
    M.BORDER_COLOR = xA;
    var CA = "color";
    M.COLOR = CA;
    var NA = "display";
    M.DISPLAY = NA;
    var LA = "flex";
    M.FLEX = LA;
    var qA = "willChange";
    M.WILL_CHANGE = qA;
    var PA = "AUTO";
    M.AUTO = PA;
    var DA = ",";
    M.COMMA_DELIMITER = DA;
    var MA = ":";
    M.COLON_DELIMITER = MA;
    var FA = "|";
    M.BAR_DELIMITER = FA;
    var GA = "CHILDREN";
    M.CHILDREN = GA;
    var XA = "IMMEDIATE_CHILDREN";
    M.IMMEDIATE_CHILDREN = XA;
    var UA = "SIBLINGS";
    M.SIBLINGS = UA;
    var VA = "PARENT";
    M.PARENT = VA;
    var WA = "preserve-3d";
    M.PRESERVE_3D = WA;
    var kA = "HTML_ELEMENT";
    M.HTML_ELEMENT = kA;
    var BA = "PLAIN_OBJECT";
    M.PLAIN_OBJECT = BA;
    var HA = "ABSTRACT_NODE";
    M.ABSTRACT_NODE = HA;
    var jA = "RENDER_TRANSFORM";
    M.RENDER_TRANSFORM = jA;
    var KA = "RENDER_GENERAL";
    M.RENDER_GENERAL = KA;
    var zA = "RENDER_STYLE";
    M.RENDER_STYLE = zA;
    var YA = "RENDER_PLUGIN";
    M.RENDER_PLUGIN = YA;
  });
  var Be = u((Se) => {
    "use strict";
    var gf = Qt().default;
    Object.defineProperty(Se, "__esModule", { value: !0 });
    var Ln = { IX2EngineActionTypes: !0, IX2EngineConstants: !0 };
    Se.IX2EngineConstants = Se.IX2EngineActionTypes = void 0;
    var Zo = ff();
    Object.keys(Zo).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        Object.prototype.hasOwnProperty.call(Ln, e) ||
        (e in Se && Se[e] === Zo[e]) ||
        Object.defineProperty(Se, e, {
          enumerable: !0,
          get: function () {
            return Zo[e];
          },
        });
    });
    var Jo = $o();
    Object.keys(Jo).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        Object.prototype.hasOwnProperty.call(Ln, e) ||
        (e in Se && Se[e] === Jo[e]) ||
        Object.defineProperty(Se, e, {
          enumerable: !0,
          get: function () {
            return Jo[e];
          },
        });
    });
    var ea = df();
    Object.keys(ea).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        Object.prototype.hasOwnProperty.call(Ln, e) ||
        (e in Se && Se[e] === ea[e]) ||
        Object.defineProperty(Se, e, {
          enumerable: !0,
          get: function () {
            return ea[e];
          },
        });
    });
    var ta = pf();
    Object.keys(ta).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        Object.prototype.hasOwnProperty.call(Ln, e) ||
        (e in Se && Se[e] === ta[e]) ||
        Object.defineProperty(Se, e, {
          enumerable: !0,
          get: function () {
            return ta[e];
          },
        });
    });
    var QA = gf(vf());
    Se.IX2EngineActionTypes = QA;
    var $A = gf(hf());
    Se.IX2EngineConstants = $A;
  });
  var Ef = u((qn) => {
    "use strict";
    Object.defineProperty(qn, "__esModule", { value: !0 });
    qn.ixData = void 0;
    var ZA = Be(),
      { IX2_RAW_DATA_IMPORTED: JA } = ZA.IX2EngineActionTypes,
      eS = (e = Object.freeze({}), t) => {
        switch (t.type) {
          case JA:
            return t.payload.ixData || Object.freeze({});
          default:
            return e;
        }
      };
    qn.ixData = eS;
  });
  var Gr = u((yB, mt) => {
    function ra() {
      return (
        (mt.exports = ra =
          Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
        (mt.exports.__esModule = !0),
        (mt.exports.default = mt.exports),
        ra.apply(this, arguments)
      );
    }
    (mt.exports = ra),
      (mt.exports.__esModule = !0),
      (mt.exports.default = mt.exports);
  });
  var ir = u((be) => {
    "use strict";
    Object.defineProperty(be, "__esModule", { value: !0 });
    var tS =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    be.clone = Dn;
    be.addLast = yf;
    be.addFirst = If;
    be.removeLast = Tf;
    be.removeFirst = bf;
    be.insert = Of;
    be.removeAt = wf;
    be.replaceAt = Af;
    be.getIn = Mn;
    be.set = Fn;
    be.setIn = Gn;
    be.update = Rf;
    be.updateIn = xf;
    be.merge = Cf;
    be.mergeDeep = Nf;
    be.mergeIn = Lf;
    be.omit = qf;
    be.addDefaults = Pf;
    var _f = "INVALID_ARGS";
    function mf(e) {
      throw new Error(e);
    }
    function na(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var rS = {}.hasOwnProperty;
    function Dn(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = na(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        r[i] = e[i];
      }
      return r;
    }
    function He(e, t, r) {
      var n = r;
      n == null && mf(_f);
      for (
        var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3;
        s < o;
        s++
      )
        a[s - 3] = arguments[s];
      for (var c = 0; c < a.length; c++) {
        var h = a[c];
        if (h != null) {
          var I = na(h);
          if (I.length)
            for (var d = 0; d <= I.length; d++) {
              var T = I[d];
              if (!(e && n[T] !== void 0)) {
                var m = h[T];
                t && Pn(n[T]) && Pn(m) && (m = He(e, t, n[T], m)),
                  !(m === void 0 || m === n[T]) &&
                    (i || ((i = !0), (n = Dn(n))), (n[T] = m));
              }
            }
        }
      }
      return n;
    }
    function Pn(e) {
      var t = typeof e > "u" ? "undefined" : tS(e);
      return e != null && (t === "object" || t === "function");
    }
    function yf(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function If(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function Tf(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function bf(e) {
      return e.length ? e.slice(1) : e;
    }
    function Of(e, t, r) {
      return e
        .slice(0, t)
        .concat(Array.isArray(r) ? r : [r])
        .concat(e.slice(t));
    }
    function wf(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function Af(e, t, r) {
      if (e[t] === r) return e;
      for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
      return (i[t] = r), i;
    }
    function Mn(e, t) {
      if ((!Array.isArray(t) && mf(_f), e != null)) {
        for (var r = e, n = 0; n < t.length; n++) {
          var i = t[n];
          if (((r = r?.[i]), r === void 0)) return r;
        }
        return r;
      }
    }
    function Fn(e, t, r) {
      var n = typeof t == "number" ? [] : {},
        i = e ?? n;
      if (i[t] === r) return i;
      var o = Dn(i);
      return (o[t] = r), o;
    }
    function Sf(e, t, r, n) {
      var i = void 0,
        o = t[n];
      if (n === t.length - 1) i = r;
      else {
        var a =
          Pn(e) && Pn(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
        i = Sf(a, t, r, n + 1);
      }
      return Fn(e, o, i);
    }
    function Gn(e, t, r) {
      return t.length ? Sf(e, t, r, 0) : r;
    }
    function Rf(e, t, r) {
      var n = e?.[t],
        i = r(n);
      return Fn(e, t, i);
    }
    function xf(e, t, r) {
      var n = Mn(e, t),
        i = r(n);
      return Gn(e, t, i);
    }
    function Cf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6;
        c < a;
        c++
      )
        s[c - 6] = arguments[c];
      return s.length
        ? He.call.apply(He, [null, !1, !1, e, t, r, n, i, o].concat(s))
        : He(!1, !1, e, t, r, n, i, o);
    }
    function Nf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6;
        c < a;
        c++
      )
        s[c - 6] = arguments[c];
      return s.length
        ? He.call.apply(He, [null, !1, !0, e, t, r, n, i, o].concat(s))
        : He(!1, !0, e, t, r, n, i, o);
    }
    function Lf(e, t, r, n, i, o, a) {
      var s = Mn(e, t);
      s == null && (s = {});
      for (
        var c = void 0,
          h = arguments.length,
          I = Array(h > 7 ? h - 7 : 0),
          d = 7;
        d < h;
        d++
      )
        I[d - 7] = arguments[d];
      return (
        I.length
          ? (c = He.call.apply(He, [null, !1, !1, s, r, n, i, o, a].concat(I)))
          : (c = He(!1, !1, s, r, n, i, o, a)),
        Gn(e, t, c)
      );
    }
    function qf(e, t) {
      for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
        if (rS.call(e, r[i])) {
          n = !0;
          break;
        }
      if (!n) return e;
      for (var o = {}, a = na(e), s = 0; s < a.length; s++) {
        var c = a[s];
        r.indexOf(c) >= 0 || (o[c] = e[c]);
      }
      return o;
    }
    function Pf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6;
        c < a;
        c++
      )
        s[c - 6] = arguments[c];
      return s.length
        ? He.call.apply(He, [null, !0, !1, e, t, r, n, i, o].concat(s))
        : He(!0, !1, e, t, r, n, i, o);
    }
    var nS = {
      clone: Dn,
      addLast: yf,
      addFirst: If,
      removeLast: Tf,
      removeFirst: bf,
      insert: Of,
      removeAt: wf,
      replaceAt: Af,
      getIn: Mn,
      set: Fn,
      setIn: Gn,
      update: Rf,
      updateIn: xf,
      merge: Cf,
      mergeDeep: Nf,
      mergeIn: Lf,
      omit: qf,
      addDefaults: Pf,
    };
    be.default = nS;
  });
  var Mf = u((Xn) => {
    "use strict";
    var iS = ut().default;
    Object.defineProperty(Xn, "__esModule", { value: !0 });
    Xn.ixRequest = void 0;
    var oS = iS(Gr()),
      aS = Be(),
      sS = ir(),
      {
        IX2_PREVIEW_REQUESTED: uS,
        IX2_PLAYBACK_REQUESTED: cS,
        IX2_STOP_REQUESTED: lS,
        IX2_CLEAR_REQUESTED: fS,
      } = aS.IX2EngineActionTypes,
      dS = { preview: {}, playback: {}, stop: {}, clear: {} },
      Df = Object.create(null, {
        [uS]: { value: "preview" },
        [cS]: { value: "playback" },
        [lS]: { value: "stop" },
        [fS]: { value: "clear" },
      }),
      pS = (e = dS, t) => {
        if (t.type in Df) {
          let r = [Df[t.type]];
          return (0, sS.setIn)(e, [r], (0, oS.default)({}, t.payload));
        }
        return e;
      };
    Xn.ixRequest = pS;
  });
  var Gf = u((Un) => {
    "use strict";
    Object.defineProperty(Un, "__esModule", { value: !0 });
    Un.ixSession = void 0;
    var vS = Be(),
      lt = ir(),
      {
        IX2_SESSION_INITIALIZED: hS,
        IX2_SESSION_STARTED: gS,
        IX2_TEST_FRAME_RENDERED: ES,
        IX2_SESSION_STOPPED: _S,
        IX2_EVENT_LISTENER_ADDED: mS,
        IX2_EVENT_STATE_CHANGED: yS,
        IX2_ANIMATION_FRAME_CHANGED: IS,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: TS,
        IX2_VIEWPORT_WIDTH_CHANGED: bS,
        IX2_MEDIA_QUERIES_DEFINED: OS,
      } = vS.IX2EngineActionTypes,
      Ff = {
        active: !1,
        tick: 0,
        eventListeners: [],
        eventState: {},
        playbackState: {},
        viewportWidth: 0,
        mediaQueryKey: null,
        hasBoundaryNodes: !1,
        hasDefinedMediaQueries: !1,
        reducedMotion: !1,
      },
      wS = 20,
      AS = (e = Ff, t) => {
        switch (t.type) {
          case hS: {
            let { hasBoundaryNodes: r, reducedMotion: n } = t.payload;
            return (0, lt.merge)(e, { hasBoundaryNodes: r, reducedMotion: n });
          }
          case gS:
            return (0, lt.set)(e, "active", !0);
          case ES: {
            let {
              payload: { step: r = wS },
            } = t;
            return (0, lt.set)(e, "tick", e.tick + r);
          }
          case _S:
            return Ff;
          case IS: {
            let {
              payload: { now: r },
            } = t;
            return (0, lt.set)(e, "tick", r);
          }
          case mS: {
            let r = (0, lt.addLast)(e.eventListeners, t.payload);
            return (0, lt.set)(e, "eventListeners", r);
          }
          case yS: {
            let { stateKey: r, newState: n } = t.payload;
            return (0, lt.setIn)(e, ["eventState", r], n);
          }
          case TS: {
            let { actionListId: r, isPlaying: n } = t.payload;
            return (0, lt.setIn)(e, ["playbackState", r], n);
          }
          case bS: {
            let { width: r, mediaQueries: n } = t.payload,
              i = n.length,
              o = null;
            for (let a = 0; a < i; a++) {
              let { key: s, min: c, max: h } = n[a];
              if (r >= c && r <= h) {
                o = s;
                break;
              }
            }
            return (0, lt.merge)(e, { viewportWidth: r, mediaQueryKey: o });
          }
          case OS:
            return (0, lt.set)(e, "hasDefinedMediaQueries", !0);
          default:
            return e;
        }
      };
    Un.ixSession = AS;
  });
  var Uf = u((OB, Xf) => {
    function SS() {
      (this.__data__ = []), (this.size = 0);
    }
    Xf.exports = SS;
  });
  var Vn = u((wB, Vf) => {
    function RS(e, t) {
      return e === t || (e !== e && t !== t);
    }
    Vf.exports = RS;
  });
  var Xr = u((AB, Wf) => {
    var xS = Vn();
    function CS(e, t) {
      for (var r = e.length; r--; ) if (xS(e[r][0], t)) return r;
      return -1;
    }
    Wf.exports = CS;
  });
  var Bf = u((SB, kf) => {
    var NS = Xr(),
      LS = Array.prototype,
      qS = LS.splice;
    function PS(e) {
      var t = this.__data__,
        r = NS(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : qS.call(t, r, 1), --this.size, !0;
    }
    kf.exports = PS;
  });
  var jf = u((RB, Hf) => {
    var DS = Xr();
    function MS(e) {
      var t = this.__data__,
        r = DS(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    Hf.exports = MS;
  });
  var zf = u((xB, Kf) => {
    var FS = Xr();
    function GS(e) {
      return FS(this.__data__, e) > -1;
    }
    Kf.exports = GS;
  });
  var Qf = u((CB, Yf) => {
    var XS = Xr();
    function US(e, t) {
      var r = this.__data__,
        n = XS(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    Yf.exports = US;
  });
  var Ur = u((NB, $f) => {
    var VS = Uf(),
      WS = Bf(),
      kS = jf(),
      BS = zf(),
      HS = Qf();
    function or(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    or.prototype.clear = VS;
    or.prototype.delete = WS;
    or.prototype.get = kS;
    or.prototype.has = BS;
    or.prototype.set = HS;
    $f.exports = or;
  });
  var Jf = u((LB, Zf) => {
    var jS = Ur();
    function KS() {
      (this.__data__ = new jS()), (this.size = 0);
    }
    Zf.exports = KS;
  });
  var td = u((qB, ed) => {
    function zS(e) {
      var t = this.__data__,
        r = t.delete(e);
      return (this.size = t.size), r;
    }
    ed.exports = zS;
  });
  var nd = u((PB, rd) => {
    function YS(e) {
      return this.__data__.get(e);
    }
    rd.exports = YS;
  });
  var od = u((DB, id) => {
    function QS(e) {
      return this.__data__.has(e);
    }
    id.exports = QS;
  });
  var ft = u((MB, ad) => {
    function $S(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    ad.exports = $S;
  });
  var ia = u((FB, sd) => {
    var ZS = wt(),
      JS = ft(),
      e0 = "[object AsyncFunction]",
      t0 = "[object Function]",
      r0 = "[object GeneratorFunction]",
      n0 = "[object Proxy]";
    function i0(e) {
      if (!JS(e)) return !1;
      var t = ZS(e);
      return t == t0 || t == r0 || t == e0 || t == n0;
    }
    sd.exports = i0;
  });
  var cd = u((GB, ud) => {
    var o0 = tt(),
      a0 = o0["__core-js_shared__"];
    ud.exports = a0;
  });
  var dd = u((XB, fd) => {
    var oa = cd(),
      ld = (function () {
        var e = /[^.]+$/.exec((oa && oa.keys && oa.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function s0(e) {
      return !!ld && ld in e;
    }
    fd.exports = s0;
  });
  var aa = u((UB, pd) => {
    var u0 = Function.prototype,
      c0 = u0.toString;
    function l0(e) {
      if (e != null) {
        try {
          return c0.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    pd.exports = l0;
  });
  var hd = u((VB, vd) => {
    var f0 = ia(),
      d0 = dd(),
      p0 = ft(),
      v0 = aa(),
      h0 = /[\\^$.*+?()[\]{}|]/g,
      g0 = /^\[object .+?Constructor\]$/,
      E0 = Function.prototype,
      _0 = Object.prototype,
      m0 = E0.toString,
      y0 = _0.hasOwnProperty,
      I0 = RegExp(
        "^" +
          m0
            .call(y0)
            .replace(h0, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function T0(e) {
      if (!p0(e) || d0(e)) return !1;
      var t = f0(e) ? I0 : g0;
      return t.test(v0(e));
    }
    vd.exports = T0;
  });
  var Ed = u((WB, gd) => {
    function b0(e, t) {
      return e?.[t];
    }
    gd.exports = b0;
  });
  var At = u((kB, _d) => {
    var O0 = hd(),
      w0 = Ed();
    function A0(e, t) {
      var r = w0(e, t);
      return O0(r) ? r : void 0;
    }
    _d.exports = A0;
  });
  var Wn = u((BB, md) => {
    var S0 = At(),
      R0 = tt(),
      x0 = S0(R0, "Map");
    md.exports = x0;
  });
  var Vr = u((HB, yd) => {
    var C0 = At(),
      N0 = C0(Object, "create");
    yd.exports = N0;
  });
  var bd = u((jB, Td) => {
    var Id = Vr();
    function L0() {
      (this.__data__ = Id ? Id(null) : {}), (this.size = 0);
    }
    Td.exports = L0;
  });
  var wd = u((KB, Od) => {
    function q0(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    Od.exports = q0;
  });
  var Sd = u((zB, Ad) => {
    var P0 = Vr(),
      D0 = "__lodash_hash_undefined__",
      M0 = Object.prototype,
      F0 = M0.hasOwnProperty;
    function G0(e) {
      var t = this.__data__;
      if (P0) {
        var r = t[e];
        return r === D0 ? void 0 : r;
      }
      return F0.call(t, e) ? t[e] : void 0;
    }
    Ad.exports = G0;
  });
  var xd = u((YB, Rd) => {
    var X0 = Vr(),
      U0 = Object.prototype,
      V0 = U0.hasOwnProperty;
    function W0(e) {
      var t = this.__data__;
      return X0 ? t[e] !== void 0 : V0.call(t, e);
    }
    Rd.exports = W0;
  });
  var Nd = u((QB, Cd) => {
    var k0 = Vr(),
      B0 = "__lodash_hash_undefined__";
    function H0(e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = k0 && t === void 0 ? B0 : t),
        this
      );
    }
    Cd.exports = H0;
  });
  var qd = u(($B, Ld) => {
    var j0 = bd(),
      K0 = wd(),
      z0 = Sd(),
      Y0 = xd(),
      Q0 = Nd();
    function ar(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    ar.prototype.clear = j0;
    ar.prototype.delete = K0;
    ar.prototype.get = z0;
    ar.prototype.has = Y0;
    ar.prototype.set = Q0;
    Ld.exports = ar;
  });
  var Md = u((ZB, Dd) => {
    var Pd = qd(),
      $0 = Ur(),
      Z0 = Wn();
    function J0() {
      (this.size = 0),
        (this.__data__ = {
          hash: new Pd(),
          map: new (Z0 || $0)(),
          string: new Pd(),
        });
    }
    Dd.exports = J0;
  });
  var Gd = u((JB, Fd) => {
    function eR(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    Fd.exports = eR;
  });
  var Wr = u((eH, Xd) => {
    var tR = Gd();
    function rR(e, t) {
      var r = e.__data__;
      return tR(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
    }
    Xd.exports = rR;
  });
  var Vd = u((tH, Ud) => {
    var nR = Wr();
    function iR(e) {
      var t = nR(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    Ud.exports = iR;
  });
  var kd = u((rH, Wd) => {
    var oR = Wr();
    function aR(e) {
      return oR(this, e).get(e);
    }
    Wd.exports = aR;
  });
  var Hd = u((nH, Bd) => {
    var sR = Wr();
    function uR(e) {
      return sR(this, e).has(e);
    }
    Bd.exports = uR;
  });
  var Kd = u((iH, jd) => {
    var cR = Wr();
    function lR(e, t) {
      var r = cR(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    jd.exports = lR;
  });
  var kn = u((oH, zd) => {
    var fR = Md(),
      dR = Vd(),
      pR = kd(),
      vR = Hd(),
      hR = Kd();
    function sr(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    sr.prototype.clear = fR;
    sr.prototype.delete = dR;
    sr.prototype.get = pR;
    sr.prototype.has = vR;
    sr.prototype.set = hR;
    zd.exports = sr;
  });
  var Qd = u((aH, Yd) => {
    var gR = Ur(),
      ER = Wn(),
      _R = kn(),
      mR = 200;
    function yR(e, t) {
      var r = this.__data__;
      if (r instanceof gR) {
        var n = r.__data__;
        if (!ER || n.length < mR - 1)
          return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new _R(n);
      }
      return r.set(e, t), (this.size = r.size), this;
    }
    Yd.exports = yR;
  });
  var sa = u((sH, $d) => {
    var IR = Ur(),
      TR = Jf(),
      bR = td(),
      OR = nd(),
      wR = od(),
      AR = Qd();
    function ur(e) {
      var t = (this.__data__ = new IR(e));
      this.size = t.size;
    }
    ur.prototype.clear = TR;
    ur.prototype.delete = bR;
    ur.prototype.get = OR;
    ur.prototype.has = wR;
    ur.prototype.set = AR;
    $d.exports = ur;
  });
  var Jd = u((uH, Zd) => {
    var SR = "__lodash_hash_undefined__";
    function RR(e) {
      return this.__data__.set(e, SR), this;
    }
    Zd.exports = RR;
  });
  var tp = u((cH, ep) => {
    function xR(e) {
      return this.__data__.has(e);
    }
    ep.exports = xR;
  });
  var np = u((lH, rp) => {
    var CR = kn(),
      NR = Jd(),
      LR = tp();
    function Bn(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new CR(); ++t < r; ) this.add(e[t]);
    }
    Bn.prototype.add = Bn.prototype.push = NR;
    Bn.prototype.has = LR;
    rp.exports = Bn;
  });
  var op = u((fH, ip) => {
    function qR(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
        if (t(e[r], r, e)) return !0;
      return !1;
    }
    ip.exports = qR;
  });
  var sp = u((dH, ap) => {
    function PR(e, t) {
      return e.has(t);
    }
    ap.exports = PR;
  });
  var ua = u((pH, up) => {
    var DR = np(),
      MR = op(),
      FR = sp(),
      GR = 1,
      XR = 2;
    function UR(e, t, r, n, i, o) {
      var a = r & GR,
        s = e.length,
        c = t.length;
      if (s != c && !(a && c > s)) return !1;
      var h = o.get(e),
        I = o.get(t);
      if (h && I) return h == t && I == e;
      var d = -1,
        T = !0,
        m = r & XR ? new DR() : void 0;
      for (o.set(e, t), o.set(t, e); ++d < s; ) {
        var y = e[d],
          w = t[d];
        if (n) var N = a ? n(w, y, d, t, e, o) : n(y, w, d, e, t, o);
        if (N !== void 0) {
          if (N) continue;
          T = !1;
          break;
        }
        if (m) {
          if (
            !MR(t, function (x, P) {
              if (!FR(m, P) && (y === x || i(y, x, r, n, o))) return m.push(P);
            })
          ) {
            T = !1;
            break;
          }
        } else if (!(y === w || i(y, w, r, n, o))) {
          T = !1;
          break;
        }
      }
      return o.delete(e), o.delete(t), T;
    }
    up.exports = UR;
  });
  var lp = u((vH, cp) => {
    var VR = tt(),
      WR = VR.Uint8Array;
    cp.exports = WR;
  });
  var dp = u((hH, fp) => {
    function kR(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n, i) {
          r[++t] = [i, n];
        }),
        r
      );
    }
    fp.exports = kR;
  });
  var vp = u((gH, pp) => {
    function BR(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n) {
          r[++t] = n;
        }),
        r
      );
    }
    pp.exports = BR;
  });
  var mp = u((EH, _p) => {
    var hp = er(),
      gp = lp(),
      HR = Vn(),
      jR = ua(),
      KR = dp(),
      zR = vp(),
      YR = 1,
      QR = 2,
      $R = "[object Boolean]",
      ZR = "[object Date]",
      JR = "[object Error]",
      ex = "[object Map]",
      tx = "[object Number]",
      rx = "[object RegExp]",
      nx = "[object Set]",
      ix = "[object String]",
      ox = "[object Symbol]",
      ax = "[object ArrayBuffer]",
      sx = "[object DataView]",
      Ep = hp ? hp.prototype : void 0,
      ca = Ep ? Ep.valueOf : void 0;
    function ux(e, t, r, n, i, o, a) {
      switch (r) {
        case sx:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case ax:
          return !(e.byteLength != t.byteLength || !o(new gp(e), new gp(t)));
        case $R:
        case ZR:
        case tx:
          return HR(+e, +t);
        case JR:
          return e.name == t.name && e.message == t.message;
        case rx:
        case ix:
          return e == t + "";
        case ex:
          var s = KR;
        case nx:
          var c = n & YR;
          if ((s || (s = zR), e.size != t.size && !c)) return !1;
          var h = a.get(e);
          if (h) return h == t;
          (n |= QR), a.set(e, t);
          var I = jR(s(e), s(t), n, i, o, a);
          return a.delete(e), I;
        case ox:
          if (ca) return ca.call(e) == ca.call(t);
      }
      return !1;
    }
    _p.exports = ux;
  });
  var Hn = u((_H, yp) => {
    function cx(e, t) {
      for (var r = -1, n = t.length, i = e.length; ++r < n; ) e[i + r] = t[r];
      return e;
    }
    yp.exports = cx;
  });
  var Le = u((mH, Ip) => {
    var lx = Array.isArray;
    Ip.exports = lx;
  });
  var la = u((yH, Tp) => {
    var fx = Hn(),
      dx = Le();
    function px(e, t, r) {
      var n = t(e);
      return dx(e) ? n : fx(n, r(e));
    }
    Tp.exports = px;
  });
  var Op = u((IH, bp) => {
    function vx(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
        var a = e[r];
        t(a, r, e) && (o[i++] = a);
      }
      return o;
    }
    bp.exports = vx;
  });
  var fa = u((TH, wp) => {
    function hx() {
      return [];
    }
    wp.exports = hx;
  });
  var da = u((bH, Sp) => {
    var gx = Op(),
      Ex = fa(),
      _x = Object.prototype,
      mx = _x.propertyIsEnumerable,
      Ap = Object.getOwnPropertySymbols,
      yx = Ap
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                gx(Ap(e), function (t) {
                  return mx.call(e, t);
                }));
          }
        : Ex;
    Sp.exports = yx;
  });
  var xp = u((OH, Rp) => {
    function Ix(e, t) {
      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
      return n;
    }
    Rp.exports = Ix;
  });
  var Np = u((wH, Cp) => {
    var Tx = wt(),
      bx = _t(),
      Ox = "[object Arguments]";
    function wx(e) {
      return bx(e) && Tx(e) == Ox;
    }
    Cp.exports = wx;
  });
  var kr = u((AH, Pp) => {
    var Lp = Np(),
      Ax = _t(),
      qp = Object.prototype,
      Sx = qp.hasOwnProperty,
      Rx = qp.propertyIsEnumerable,
      xx = Lp(
        (function () {
          return arguments;
        })()
      )
        ? Lp
        : function (e) {
            return Ax(e) && Sx.call(e, "callee") && !Rx.call(e, "callee");
          };
    Pp.exports = xx;
  });
  var Mp = u((SH, Dp) => {
    function Cx() {
      return !1;
    }
    Dp.exports = Cx;
  });
  var jn = u((Br, cr) => {
    var Nx = tt(),
      Lx = Mp(),
      Xp = typeof Br == "object" && Br && !Br.nodeType && Br,
      Fp = Xp && typeof cr == "object" && cr && !cr.nodeType && cr,
      qx = Fp && Fp.exports === Xp,
      Gp = qx ? Nx.Buffer : void 0,
      Px = Gp ? Gp.isBuffer : void 0,
      Dx = Px || Lx;
    cr.exports = Dx;
  });
  var Kn = u((RH, Up) => {
    var Mx = 9007199254740991,
      Fx = /^(?:0|[1-9]\d*)$/;
    function Gx(e, t) {
      var r = typeof e;
      return (
        (t = t ?? Mx),
        !!t &&
          (r == "number" || (r != "symbol" && Fx.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    Up.exports = Gx;
  });
  var zn = u((xH, Vp) => {
    var Xx = 9007199254740991;
    function Ux(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Xx;
    }
    Vp.exports = Ux;
  });
  var kp = u((CH, Wp) => {
    var Vx = wt(),
      Wx = zn(),
      kx = _t(),
      Bx = "[object Arguments]",
      Hx = "[object Array]",
      jx = "[object Boolean]",
      Kx = "[object Date]",
      zx = "[object Error]",
      Yx = "[object Function]",
      Qx = "[object Map]",
      $x = "[object Number]",
      Zx = "[object Object]",
      Jx = "[object RegExp]",
      eC = "[object Set]",
      tC = "[object String]",
      rC = "[object WeakMap]",
      nC = "[object ArrayBuffer]",
      iC = "[object DataView]",
      oC = "[object Float32Array]",
      aC = "[object Float64Array]",
      sC = "[object Int8Array]",
      uC = "[object Int16Array]",
      cC = "[object Int32Array]",
      lC = "[object Uint8Array]",
      fC = "[object Uint8ClampedArray]",
      dC = "[object Uint16Array]",
      pC = "[object Uint32Array]",
      ye = {};
    ye[oC] =
      ye[aC] =
      ye[sC] =
      ye[uC] =
      ye[cC] =
      ye[lC] =
      ye[fC] =
      ye[dC] =
      ye[pC] =
        !0;
    ye[Bx] =
      ye[Hx] =
      ye[nC] =
      ye[jx] =
      ye[iC] =
      ye[Kx] =
      ye[zx] =
      ye[Yx] =
      ye[Qx] =
      ye[$x] =
      ye[Zx] =
      ye[Jx] =
      ye[eC] =
      ye[tC] =
      ye[rC] =
        !1;
    function vC(e) {
      return kx(e) && Wx(e.length) && !!ye[Vx(e)];
    }
    Wp.exports = vC;
  });
  var Hp = u((NH, Bp) => {
    function hC(e) {
      return function (t) {
        return e(t);
      };
    }
    Bp.exports = hC;
  });
  var Kp = u((Hr, lr) => {
    var gC = Do(),
      jp = typeof Hr == "object" && Hr && !Hr.nodeType && Hr,
      jr = jp && typeof lr == "object" && lr && !lr.nodeType && lr,
      EC = jr && jr.exports === jp,
      pa = EC && gC.process,
      _C = (function () {
        try {
          var e = jr && jr.require && jr.require("util").types;
          return e || (pa && pa.binding && pa.binding("util"));
        } catch {}
      })();
    lr.exports = _C;
  });
  var Yn = u((LH, Qp) => {
    var mC = kp(),
      yC = Hp(),
      zp = Kp(),
      Yp = zp && zp.isTypedArray,
      IC = Yp ? yC(Yp) : mC;
    Qp.exports = IC;
  });
  var va = u((qH, $p) => {
    var TC = xp(),
      bC = kr(),
      OC = Le(),
      wC = jn(),
      AC = Kn(),
      SC = Yn(),
      RC = Object.prototype,
      xC = RC.hasOwnProperty;
    function CC(e, t) {
      var r = OC(e),
        n = !r && bC(e),
        i = !r && !n && wC(e),
        o = !r && !n && !i && SC(e),
        a = r || n || i || o,
        s = a ? TC(e.length, String) : [],
        c = s.length;
      for (var h in e)
        (t || xC.call(e, h)) &&
          !(
            a &&
            (h == "length" ||
              (i && (h == "offset" || h == "parent")) ||
              (o &&
                (h == "buffer" || h == "byteLength" || h == "byteOffset")) ||
              AC(h, c))
          ) &&
          s.push(h);
      return s;
    }
    $p.exports = CC;
  });
  var Qn = u((PH, Zp) => {
    var NC = Object.prototype;
    function LC(e) {
      var t = e && e.constructor,
        r = (typeof t == "function" && t.prototype) || NC;
      return e === r;
    }
    Zp.exports = LC;
  });
  var ev = u((DH, Jp) => {
    var qC = Mo(),
      PC = qC(Object.keys, Object);
    Jp.exports = PC;
  });
  var $n = u((MH, tv) => {
    var DC = Qn(),
      MC = ev(),
      FC = Object.prototype,
      GC = FC.hasOwnProperty;
    function XC(e) {
      if (!DC(e)) return MC(e);
      var t = [];
      for (var r in Object(e)) GC.call(e, r) && r != "constructor" && t.push(r);
      return t;
    }
    tv.exports = XC;
  });
  var Xt = u((FH, rv) => {
    var UC = ia(),
      VC = zn();
    function WC(e) {
      return e != null && VC(e.length) && !UC(e);
    }
    rv.exports = WC;
  });
  var Kr = u((GH, nv) => {
    var kC = va(),
      BC = $n(),
      HC = Xt();
    function jC(e) {
      return HC(e) ? kC(e) : BC(e);
    }
    nv.exports = jC;
  });
  var ov = u((XH, iv) => {
    var KC = la(),
      zC = da(),
      YC = Kr();
    function QC(e) {
      return KC(e, YC, zC);
    }
    iv.exports = QC;
  });
  var uv = u((UH, sv) => {
    var av = ov(),
      $C = 1,
      ZC = Object.prototype,
      JC = ZC.hasOwnProperty;
    function eN(e, t, r, n, i, o) {
      var a = r & $C,
        s = av(e),
        c = s.length,
        h = av(t),
        I = h.length;
      if (c != I && !a) return !1;
      for (var d = c; d--; ) {
        var T = s[d];
        if (!(a ? T in t : JC.call(t, T))) return !1;
      }
      var m = o.get(e),
        y = o.get(t);
      if (m && y) return m == t && y == e;
      var w = !0;
      o.set(e, t), o.set(t, e);
      for (var N = a; ++d < c; ) {
        T = s[d];
        var x = e[T],
          P = t[T];
        if (n) var S = a ? n(P, x, T, t, e, o) : n(x, P, T, e, t, o);
        if (!(S === void 0 ? x === P || i(x, P, r, n, o) : S)) {
          w = !1;
          break;
        }
        N || (N = T == "constructor");
      }
      if (w && !N) {
        var W = e.constructor,
          U = t.constructor;
        W != U &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof W == "function" &&
            W instanceof W &&
            typeof U == "function" &&
            U instanceof U
          ) &&
          (w = !1);
      }
      return o.delete(e), o.delete(t), w;
    }
    sv.exports = eN;
  });
  var lv = u((VH, cv) => {
    var tN = At(),
      rN = tt(),
      nN = tN(rN, "DataView");
    cv.exports = nN;
  });
  var dv = u((WH, fv) => {
    var iN = At(),
      oN = tt(),
      aN = iN(oN, "Promise");
    fv.exports = aN;
  });
  var vv = u((kH, pv) => {
    var sN = At(),
      uN = tt(),
      cN = sN(uN, "Set");
    pv.exports = cN;
  });
  var ha = u((BH, hv) => {
    var lN = At(),
      fN = tt(),
      dN = lN(fN, "WeakMap");
    hv.exports = dN;
  });
  var Zn = u((HH, Tv) => {
    var ga = lv(),
      Ea = Wn(),
      _a = dv(),
      ma = vv(),
      ya = ha(),
      Iv = wt(),
      fr = aa(),
      gv = "[object Map]",
      pN = "[object Object]",
      Ev = "[object Promise]",
      _v = "[object Set]",
      mv = "[object WeakMap]",
      yv = "[object DataView]",
      vN = fr(ga),
      hN = fr(Ea),
      gN = fr(_a),
      EN = fr(ma),
      _N = fr(ya),
      Ut = Iv;
    ((ga && Ut(new ga(new ArrayBuffer(1))) != yv) ||
      (Ea && Ut(new Ea()) != gv) ||
      (_a && Ut(_a.resolve()) != Ev) ||
      (ma && Ut(new ma()) != _v) ||
      (ya && Ut(new ya()) != mv)) &&
      (Ut = function (e) {
        var t = Iv(e),
          r = t == pN ? e.constructor : void 0,
          n = r ? fr(r) : "";
        if (n)
          switch (n) {
            case vN:
              return yv;
            case hN:
              return gv;
            case gN:
              return Ev;
            case EN:
              return _v;
            case _N:
              return mv;
          }
        return t;
      });
    Tv.exports = Ut;
  });
  var Cv = u((jH, xv) => {
    var Ia = sa(),
      mN = ua(),
      yN = mp(),
      IN = uv(),
      bv = Zn(),
      Ov = Le(),
      wv = jn(),
      TN = Yn(),
      bN = 1,
      Av = "[object Arguments]",
      Sv = "[object Array]",
      Jn = "[object Object]",
      ON = Object.prototype,
      Rv = ON.hasOwnProperty;
    function wN(e, t, r, n, i, o) {
      var a = Ov(e),
        s = Ov(t),
        c = a ? Sv : bv(e),
        h = s ? Sv : bv(t);
      (c = c == Av ? Jn : c), (h = h == Av ? Jn : h);
      var I = c == Jn,
        d = h == Jn,
        T = c == h;
      if (T && wv(e)) {
        if (!wv(t)) return !1;
        (a = !0), (I = !1);
      }
      if (T && !I)
        return (
          o || (o = new Ia()),
          a || TN(e) ? mN(e, t, r, n, i, o) : yN(e, t, c, r, n, i, o)
        );
      if (!(r & bN)) {
        var m = I && Rv.call(e, "__wrapped__"),
          y = d && Rv.call(t, "__wrapped__");
        if (m || y) {
          var w = m ? e.value() : e,
            N = y ? t.value() : t;
          return o || (o = new Ia()), i(w, N, r, n, o);
        }
      }
      return T ? (o || (o = new Ia()), IN(e, t, r, n, i, o)) : !1;
    }
    xv.exports = wN;
  });
  var Ta = u((KH, qv) => {
    var AN = Cv(),
      Nv = _t();
    function Lv(e, t, r, n, i) {
      return e === t
        ? !0
        : e == null || t == null || (!Nv(e) && !Nv(t))
        ? e !== e && t !== t
        : AN(e, t, r, n, Lv, i);
    }
    qv.exports = Lv;
  });
  var Dv = u((zH, Pv) => {
    var SN = sa(),
      RN = Ta(),
      xN = 1,
      CN = 2;
    function NN(e, t, r, n) {
      var i = r.length,
        o = i,
        a = !n;
      if (e == null) return !o;
      for (e = Object(e); i--; ) {
        var s = r[i];
        if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
      }
      for (; ++i < o; ) {
        s = r[i];
        var c = s[0],
          h = e[c],
          I = s[1];
        if (a && s[2]) {
          if (h === void 0 && !(c in e)) return !1;
        } else {
          var d = new SN();
          if (n) var T = n(h, I, c, e, t, d);
          if (!(T === void 0 ? RN(I, h, xN | CN, n, d) : T)) return !1;
        }
      }
      return !0;
    }
    Pv.exports = NN;
  });
  var ba = u((YH, Mv) => {
    var LN = ft();
    function qN(e) {
      return e === e && !LN(e);
    }
    Mv.exports = qN;
  });
  var Gv = u((QH, Fv) => {
    var PN = ba(),
      DN = Kr();
    function MN(e) {
      for (var t = DN(e), r = t.length; r--; ) {
        var n = t[r],
          i = e[n];
        t[r] = [n, i, PN(i)];
      }
      return t;
    }
    Fv.exports = MN;
  });
  var Oa = u(($H, Xv) => {
    function FN(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
      };
    }
    Xv.exports = FN;
  });
  var Vv = u((ZH, Uv) => {
    var GN = Dv(),
      XN = Gv(),
      UN = Oa();
    function VN(e) {
      var t = XN(e);
      return t.length == 1 && t[0][2]
        ? UN(t[0][0], t[0][1])
        : function (r) {
            return r === e || GN(r, e, t);
          };
    }
    Uv.exports = VN;
  });
  var zr = u((JH, Wv) => {
    var WN = wt(),
      kN = _t(),
      BN = "[object Symbol]";
    function HN(e) {
      return typeof e == "symbol" || (kN(e) && WN(e) == BN);
    }
    Wv.exports = HN;
  });
  var ei = u((e5, kv) => {
    var jN = Le(),
      KN = zr(),
      zN = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      YN = /^\w*$/;
    function QN(e, t) {
      if (jN(e)) return !1;
      var r = typeof e;
      return r == "number" ||
        r == "symbol" ||
        r == "boolean" ||
        e == null ||
        KN(e)
        ? !0
        : YN.test(e) || !zN.test(e) || (t != null && e in Object(t));
    }
    kv.exports = QN;
  });
  var jv = u((t5, Hv) => {
    var Bv = kn(),
      $N = "Expected a function";
    function wa(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError($N);
      var r = function () {
        var n = arguments,
          i = t ? t.apply(this, n) : n[0],
          o = r.cache;
        if (o.has(i)) return o.get(i);
        var a = e.apply(this, n);
        return (r.cache = o.set(i, a) || o), a;
      };
      return (r.cache = new (wa.Cache || Bv)()), r;
    }
    wa.Cache = Bv;
    Hv.exports = wa;
  });
  var zv = u((r5, Kv) => {
    var ZN = jv(),
      JN = 500;
    function eL(e) {
      var t = ZN(e, function (n) {
          return r.size === JN && r.clear(), n;
        }),
        r = t.cache;
      return t;
    }
    Kv.exports = eL;
  });
  var Qv = u((n5, Yv) => {
    var tL = zv(),
      rL =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      nL = /\\(\\)?/g,
      iL = tL(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(rL, function (r, n, i, o) {
            t.push(i ? o.replace(nL, "$1") : n || r);
          }),
          t
        );
      });
    Yv.exports = iL;
  });
  var Aa = u((i5, $v) => {
    function oL(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
        i[r] = t(e[r], r, e);
      return i;
    }
    $v.exports = oL;
  });
  var nh = u((o5, rh) => {
    var Zv = er(),
      aL = Aa(),
      sL = Le(),
      uL = zr(),
      cL = 1 / 0,
      Jv = Zv ? Zv.prototype : void 0,
      eh = Jv ? Jv.toString : void 0;
    function th(e) {
      if (typeof e == "string") return e;
      if (sL(e)) return aL(e, th) + "";
      if (uL(e)) return eh ? eh.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -cL ? "-0" : t;
    }
    rh.exports = th;
  });
  var oh = u((a5, ih) => {
    var lL = nh();
    function fL(e) {
      return e == null ? "" : lL(e);
    }
    ih.exports = fL;
  });
  var Yr = u((s5, ah) => {
    var dL = Le(),
      pL = ei(),
      vL = Qv(),
      hL = oh();
    function gL(e, t) {
      return dL(e) ? e : pL(e, t) ? [e] : vL(hL(e));
    }
    ah.exports = gL;
  });
  var dr = u((u5, sh) => {
    var EL = zr(),
      _L = 1 / 0;
    function mL(e) {
      if (typeof e == "string" || EL(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -_L ? "-0" : t;
    }
    sh.exports = mL;
  });
  var ti = u((c5, uh) => {
    var yL = Yr(),
      IL = dr();
    function TL(e, t) {
      t = yL(t, e);
      for (var r = 0, n = t.length; e != null && r < n; ) e = e[IL(t[r++])];
      return r && r == n ? e : void 0;
    }
    uh.exports = TL;
  });
  var ri = u((l5, ch) => {
    var bL = ti();
    function OL(e, t, r) {
      var n = e == null ? void 0 : bL(e, t);
      return n === void 0 ? r : n;
    }
    ch.exports = OL;
  });
  var fh = u((f5, lh) => {
    function wL(e, t) {
      return e != null && t in Object(e);
    }
    lh.exports = wL;
  });
  var ph = u((d5, dh) => {
    var AL = Yr(),
      SL = kr(),
      RL = Le(),
      xL = Kn(),
      CL = zn(),
      NL = dr();
    function LL(e, t, r) {
      t = AL(t, e);
      for (var n = -1, i = t.length, o = !1; ++n < i; ) {
        var a = NL(t[n]);
        if (!(o = e != null && r(e, a))) break;
        e = e[a];
      }
      return o || ++n != i
        ? o
        : ((i = e == null ? 0 : e.length),
          !!i && CL(i) && xL(a, i) && (RL(e) || SL(e)));
    }
    dh.exports = LL;
  });
  var hh = u((p5, vh) => {
    var qL = fh(),
      PL = ph();
    function DL(e, t) {
      return e != null && PL(e, t, qL);
    }
    vh.exports = DL;
  });
  var Eh = u((v5, gh) => {
    var ML = Ta(),
      FL = ri(),
      GL = hh(),
      XL = ei(),
      UL = ba(),
      VL = Oa(),
      WL = dr(),
      kL = 1,
      BL = 2;
    function HL(e, t) {
      return XL(e) && UL(t)
        ? VL(WL(e), t)
        : function (r) {
            var n = FL(r, e);
            return n === void 0 && n === t ? GL(r, e) : ML(t, n, kL | BL);
          };
    }
    gh.exports = HL;
  });
  var ni = u((h5, _h) => {
    function jL(e) {
      return e;
    }
    _h.exports = jL;
  });
  var Sa = u((g5, mh) => {
    function KL(e) {
      return function (t) {
        return t?.[e];
      };
    }
    mh.exports = KL;
  });
  var Ih = u((E5, yh) => {
    var zL = ti();
    function YL(e) {
      return function (t) {
        return zL(t, e);
      };
    }
    yh.exports = YL;
  });
  var bh = u((_5, Th) => {
    var QL = Sa(),
      $L = Ih(),
      ZL = ei(),
      JL = dr();
    function eq(e) {
      return ZL(e) ? QL(JL(e)) : $L(e);
    }
    Th.exports = eq;
  });
  var St = u((m5, Oh) => {
    var tq = Vv(),
      rq = Eh(),
      nq = ni(),
      iq = Le(),
      oq = bh();
    function aq(e) {
      return typeof e == "function"
        ? e
        : e == null
        ? nq
        : typeof e == "object"
        ? iq(e)
          ? rq(e[0], e[1])
          : tq(e)
        : oq(e);
    }
    Oh.exports = aq;
  });
  var Ra = u((y5, wh) => {
    var sq = St(),
      uq = Xt(),
      cq = Kr();
    function lq(e) {
      return function (t, r, n) {
        var i = Object(t);
        if (!uq(t)) {
          var o = sq(r, 3);
          (t = cq(t)),
            (r = function (s) {
              return o(i[s], s, i);
            });
        }
        var a = e(t, r, n);
        return a > -1 ? i[o ? t[a] : a] : void 0;
      };
    }
    wh.exports = lq;
  });
  var xa = u((I5, Ah) => {
    function fq(e, t, r, n) {
      for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i; )
        if (t(e[o], o, e)) return o;
      return -1;
    }
    Ah.exports = fq;
  });
  var Rh = u((T5, Sh) => {
    var dq = /\s/;
    function pq(e) {
      for (var t = e.length; t-- && dq.test(e.charAt(t)); );
      return t;
    }
    Sh.exports = pq;
  });
  var Ch = u((b5, xh) => {
    var vq = Rh(),
      hq = /^\s+/;
    function gq(e) {
      return e && e.slice(0, vq(e) + 1).replace(hq, "");
    }
    xh.exports = gq;
  });
  var ii = u((O5, qh) => {
    var Eq = Ch(),
      Nh = ft(),
      _q = zr(),
      Lh = 0 / 0,
      mq = /^[-+]0x[0-9a-f]+$/i,
      yq = /^0b[01]+$/i,
      Iq = /^0o[0-7]+$/i,
      Tq = parseInt;
    function bq(e) {
      if (typeof e == "number") return e;
      if (_q(e)) return Lh;
      if (Nh(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = Nh(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = Eq(e);
      var r = yq.test(e);
      return r || Iq.test(e) ? Tq(e.slice(2), r ? 2 : 8) : mq.test(e) ? Lh : +e;
    }
    qh.exports = bq;
  });
  var Mh = u((w5, Dh) => {
    var Oq = ii(),
      Ph = 1 / 0,
      wq = 17976931348623157e292;
    function Aq(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = Oq(e)), e === Ph || e === -Ph)) {
        var t = e < 0 ? -1 : 1;
        return t * wq;
      }
      return e === e ? e : 0;
    }
    Dh.exports = Aq;
  });
  var Ca = u((A5, Fh) => {
    var Sq = Mh();
    function Rq(e) {
      var t = Sq(e),
        r = t % 1;
      return t === t ? (r ? t - r : t) : 0;
    }
    Fh.exports = Rq;
  });
  var Xh = u((S5, Gh) => {
    var xq = xa(),
      Cq = St(),
      Nq = Ca(),
      Lq = Math.max;
    function qq(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = r == null ? 0 : Nq(r);
      return i < 0 && (i = Lq(n + i, 0)), xq(e, Cq(t, 3), i);
    }
    Gh.exports = qq;
  });
  var Na = u((R5, Uh) => {
    var Pq = Ra(),
      Dq = Xh(),
      Mq = Pq(Dq);
    Uh.exports = Mq;
  });
  var ai = u((Xe) => {
    "use strict";
    var Fq = ut().default;
    Object.defineProperty(Xe, "__esModule", { value: !0 });
    Xe.withBrowser =
      Xe.TRANSFORM_STYLE_PREFIXED =
      Xe.TRANSFORM_PREFIXED =
      Xe.IS_BROWSER_ENV =
      Xe.FLEX_PREFIXED =
      Xe.ELEMENT_MATCHES =
        void 0;
    var Gq = Fq(Na()),
      Wh = typeof window < "u";
    Xe.IS_BROWSER_ENV = Wh;
    var oi = (e, t) => (Wh ? e() : t);
    Xe.withBrowser = oi;
    var Xq = oi(() =>
      (0, Gq.default)(
        [
          "matches",
          "matchesSelector",
          "mozMatchesSelector",
          "msMatchesSelector",
          "oMatchesSelector",
          "webkitMatchesSelector",
        ],
        (e) => e in Element.prototype
      )
    );
    Xe.ELEMENT_MATCHES = Xq;
    var Uq = oi(() => {
      let e = document.createElement("i"),
        t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
        r = "";
      try {
        let { length: n } = t;
        for (let i = 0; i < n; i++) {
          let o = t[i];
          if (((e.style.display = o), e.style.display === o)) return o;
        }
        return r;
      } catch {
        return r;
      }
    }, "flex");
    Xe.FLEX_PREFIXED = Uq;
    var kh = oi(() => {
      let e = document.createElement("i");
      if (e.style.transform == null) {
        let t = ["Webkit", "Moz", "ms"],
          r = "Transform",
          { length: n } = t;
        for (let i = 0; i < n; i++) {
          let o = t[i] + r;
          if (e.style[o] !== void 0) return o;
        }
      }
      return "transform";
    }, "transform");
    Xe.TRANSFORM_PREFIXED = kh;
    var Vh = kh.split("transform")[0],
      Vq = Vh ? Vh + "TransformStyle" : "transformStyle";
    Xe.TRANSFORM_STYLE_PREFIXED = Vq;
  });
  var La = u((C5, zh) => {
    var Wq = 4,
      kq = 0.001,
      Bq = 1e-7,
      Hq = 10,
      Qr = 11,
      si = 1 / (Qr - 1),
      jq = typeof Float32Array == "function";
    function Bh(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function Hh(e, t) {
      return 3 * t - 6 * e;
    }
    function jh(e) {
      return 3 * e;
    }
    function ui(e, t, r) {
      return ((Bh(t, r) * e + Hh(t, r)) * e + jh(t)) * e;
    }
    function Kh(e, t, r) {
      return 3 * Bh(t, r) * e * e + 2 * Hh(t, r) * e + jh(t);
    }
    function Kq(e, t, r, n, i) {
      var o,
        a,
        s = 0;
      do
        (a = t + (r - t) / 2), (o = ui(a, n, i) - e), o > 0 ? (r = a) : (t = a);
      while (Math.abs(o) > Bq && ++s < Hq);
      return a;
    }
    function zq(e, t, r, n) {
      for (var i = 0; i < Wq; ++i) {
        var o = Kh(t, r, n);
        if (o === 0) return t;
        var a = ui(t, r, n) - e;
        t -= a / o;
      }
      return t;
    }
    zh.exports = function (t, r, n, i) {
      if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var o = jq ? new Float32Array(Qr) : new Array(Qr);
      if (t !== r || n !== i)
        for (var a = 0; a < Qr; ++a) o[a] = ui(a * si, t, n);
      function s(c) {
        for (var h = 0, I = 1, d = Qr - 1; I !== d && o[I] <= c; ++I) h += si;
        --I;
        var T = (c - o[I]) / (o[I + 1] - o[I]),
          m = h + T * si,
          y = Kh(m, t, n);
        return y >= kq ? zq(c, m, t, n) : y === 0 ? m : Kq(c, h, h + si, t, n);
      }
      return function (h) {
        return t === r && n === i
          ? h
          : h === 0
          ? 0
          : h === 1
          ? 1
          : ui(s(h), r, i);
      };
    };
  });
  var qa = u((ue) => {
    "use strict";
    var Yq = ut().default;
    Object.defineProperty(ue, "__esModule", { value: !0 });
    ue.bounce = NP;
    ue.bouncePast = LP;
    ue.easeOut = ue.easeInOut = ue.easeIn = ue.ease = void 0;
    ue.inBack = TP;
    ue.inCirc = _P;
    ue.inCubic = nP;
    ue.inElastic = wP;
    ue.inExpo = hP;
    ue.inOutBack = OP;
    ue.inOutCirc = yP;
    ue.inOutCubic = oP;
    ue.inOutElastic = SP;
    ue.inOutExpo = EP;
    ue.inOutQuad = rP;
    ue.inOutQuart = uP;
    ue.inOutQuint = fP;
    ue.inOutSine = vP;
    ue.inQuad = eP;
    ue.inQuart = aP;
    ue.inQuint = cP;
    ue.inSine = dP;
    ue.outBack = bP;
    ue.outBounce = IP;
    ue.outCirc = mP;
    ue.outCubic = iP;
    ue.outElastic = AP;
    ue.outExpo = gP;
    ue.outQuad = tP;
    ue.outQuart = sP;
    ue.outQuint = lP;
    ue.outSine = pP;
    ue.swingFrom = xP;
    ue.swingFromTo = RP;
    ue.swingTo = CP;
    var ci = Yq(La()),
      yt = 1.70158,
      Qq = (0, ci.default)(0.25, 0.1, 0.25, 1);
    ue.ease = Qq;
    var $q = (0, ci.default)(0.42, 0, 1, 1);
    ue.easeIn = $q;
    var Zq = (0, ci.default)(0, 0, 0.58, 1);
    ue.easeOut = Zq;
    var Jq = (0, ci.default)(0.42, 0, 0.58, 1);
    ue.easeInOut = Jq;
    function eP(e) {
      return Math.pow(e, 2);
    }
    function tP(e) {
      return -(Math.pow(e - 1, 2) - 1);
    }
    function rP(e) {
      return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
    }
    function nP(e) {
      return Math.pow(e, 3);
    }
    function iP(e) {
      return Math.pow(e - 1, 3) + 1;
    }
    function oP(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 3)
        : 0.5 * (Math.pow(e - 2, 3) + 2);
    }
    function aP(e) {
      return Math.pow(e, 4);
    }
    function sP(e) {
      return -(Math.pow(e - 1, 4) - 1);
    }
    function uP(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 4)
        : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
    }
    function cP(e) {
      return Math.pow(e, 5);
    }
    function lP(e) {
      return Math.pow(e - 1, 5) + 1;
    }
    function fP(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 5)
        : 0.5 * (Math.pow(e - 2, 5) + 2);
    }
    function dP(e) {
      return -Math.cos(e * (Math.PI / 2)) + 1;
    }
    function pP(e) {
      return Math.sin(e * (Math.PI / 2));
    }
    function vP(e) {
      return -0.5 * (Math.cos(Math.PI * e) - 1);
    }
    function hP(e) {
      return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
    }
    function gP(e) {
      return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
    }
    function EP(e) {
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (e /= 0.5) < 1
        ? 0.5 * Math.pow(2, 10 * (e - 1))
        : 0.5 * (-Math.pow(2, -10 * --e) + 2);
    }
    function _P(e) {
      return -(Math.sqrt(1 - e * e) - 1);
    }
    function mP(e) {
      return Math.sqrt(1 - Math.pow(e - 1, 2));
    }
    function yP(e) {
      return (e /= 0.5) < 1
        ? -0.5 * (Math.sqrt(1 - e * e) - 1)
        : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
    }
    function IP(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    }
    function TP(e) {
      let t = yt;
      return e * e * ((t + 1) * e - t);
    }
    function bP(e) {
      let t = yt;
      return (e -= 1) * e * ((t + 1) * e + t) + 1;
    }
    function OP(e) {
      let t = yt;
      return (e /= 0.5) < 1
        ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
        : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
    }
    function wP(e) {
      let t = yt,
        r = 0,
        n = 1;
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (r || (r = 0.3),
          n < 1
            ? ((n = 1), (t = r / 4))
            : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
          -(
            n *
            Math.pow(2, 10 * (e -= 1)) *
            Math.sin(((e - t) * (2 * Math.PI)) / r)
          ));
    }
    function AP(e) {
      let t = yt,
        r = 0,
        n = 1;
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (r || (r = 0.3),
          n < 1
            ? ((n = 1), (t = r / 4))
            : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
          n * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / r) +
            1);
    }
    function SP(e) {
      let t = yt,
        r = 0,
        n = 1;
      return e === 0
        ? 0
        : (e /= 1 / 2) === 2
        ? 1
        : (r || (r = 0.3 * 1.5),
          n < 1
            ? ((n = 1), (t = r / 4))
            : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
          e < 1
            ? -0.5 *
              (n *
                Math.pow(2, 10 * (e -= 1)) *
                Math.sin(((e - t) * (2 * Math.PI)) / r))
            : n *
                Math.pow(2, -10 * (e -= 1)) *
                Math.sin(((e - t) * (2 * Math.PI)) / r) *
                0.5 +
              1);
    }
    function RP(e) {
      let t = yt;
      return (e /= 0.5) < 1
        ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
        : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
    }
    function xP(e) {
      let t = yt;
      return e * e * ((t + 1) * e - t);
    }
    function CP(e) {
      let t = yt;
      return (e -= 1) * e * ((t + 1) * e + t) + 1;
    }
    function NP(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    }
    function LP(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
        : e < 2.5 / 2.75
        ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
        : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
    }
  });
  var Da = u(($r) => {
    "use strict";
    var qP = ut().default,
      PP = Qt().default;
    Object.defineProperty($r, "__esModule", { value: !0 });
    $r.applyEasing = FP;
    $r.createBezierEasing = MP;
    $r.optimizeFloat = Pa;
    var Yh = PP(qa()),
      DP = qP(La());
    function Pa(e, t = 5, r = 10) {
      let n = Math.pow(r, t),
        i = Number(Math.round(e * n) / n);
      return Math.abs(i) > 1e-4 ? i : 0;
    }
    function MP(e) {
      return (0, DP.default)(...e);
    }
    function FP(e, t, r) {
      return t === 0
        ? 0
        : t === 1
        ? 1
        : Pa(r ? (t > 0 ? r(t) : t) : t > 0 && e && Yh[e] ? Yh[e](t) : t);
    }
  });
  var Jh = u((pr) => {
    "use strict";
    Object.defineProperty(pr, "__esModule", { value: !0 });
    pr.createElementState = Zh;
    pr.ixElements = void 0;
    pr.mergeActionState = Ma;
    var li = ir(),
      $h = Be(),
      {
        HTML_ELEMENT: q5,
        PLAIN_OBJECT: GP,
        ABSTRACT_NODE: P5,
        CONFIG_X_VALUE: XP,
        CONFIG_Y_VALUE: UP,
        CONFIG_Z_VALUE: VP,
        CONFIG_VALUE: WP,
        CONFIG_X_UNIT: kP,
        CONFIG_Y_UNIT: BP,
        CONFIG_Z_UNIT: HP,
        CONFIG_UNIT: jP,
      } = $h.IX2EngineConstants,
      {
        IX2_SESSION_STOPPED: KP,
        IX2_INSTANCE_ADDED: zP,
        IX2_ELEMENT_STATE_CHANGED: YP,
      } = $h.IX2EngineActionTypes,
      Qh = {},
      QP = "refState",
      $P = (e = Qh, t = {}) => {
        switch (t.type) {
          case KP:
            return Qh;
          case zP: {
            let {
                elementId: r,
                element: n,
                origin: i,
                actionItem: o,
                refType: a,
              } = t.payload,
              { actionTypeId: s } = o,
              c = e;
            return (
              (0, li.getIn)(c, [r, n]) !== n && (c = Zh(c, n, a, r, o)),
              Ma(c, r, s, i, o)
            );
          }
          case YP: {
            let {
              elementId: r,
              actionTypeId: n,
              current: i,
              actionItem: o,
            } = t.payload;
            return Ma(e, r, n, i, o);
          }
          default:
            return e;
        }
      };
    pr.ixElements = $P;
    function Zh(e, t, r, n, i) {
      let o =
        r === GP ? (0, li.getIn)(i, ["config", "target", "objectId"]) : null;
      return (0, li.mergeIn)(e, [n], { id: n, ref: t, refId: o, refType: r });
    }
    function Ma(e, t, r, n, i) {
      let o = JP(i),
        a = [t, QP, r];
      return (0, li.mergeIn)(e, a, n, o);
    }
    var ZP = [
      [XP, kP],
      [UP, BP],
      [VP, HP],
      [WP, jP],
    ];
    function JP(e) {
      let { config: t } = e;
      return ZP.reduce((r, n) => {
        let i = n[0],
          o = n[1],
          a = t[i],
          s = t[o];
        return a != null && s != null && (r[o] = s), r;
      }, {});
    }
  });
  var eg = u((qe) => {
    "use strict";
    Object.defineProperty(qe, "__esModule", { value: !0 });
    qe.renderPlugin =
      qe.getPluginOrigin =
      qe.getPluginDuration =
      qe.getPluginDestination =
      qe.getPluginConfig =
      qe.createPluginInstance =
      qe.clearPlugin =
        void 0;
    var eD = (e) => e.value;
    qe.getPluginConfig = eD;
    var tD = (e, t) => {
      if (t.config.duration !== "auto") return null;
      let r = parseFloat(e.getAttribute("data-duration"));
      return r > 0
        ? r * 1e3
        : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
    };
    qe.getPluginDuration = tD;
    var rD = (e) => e || { value: 0 };
    qe.getPluginOrigin = rD;
    var nD = (e) => ({ value: e.value });
    qe.getPluginDestination = nD;
    var iD = (e) => {
      let t = window.Webflow.require("lottie").createInstance(e);
      return t.stop(), t.setSubframe(!0), t;
    };
    qe.createPluginInstance = iD;
    var oD = (e, t, r) => {
      if (!e) return;
      let n = t[r.actionTypeId].value / 100;
      e.goToFrame(e.frames * n);
    };
    qe.renderPlugin = oD;
    var aD = (e) => {
      window.Webflow.require("lottie").createInstance(e).stop();
    };
    qe.clearPlugin = aD;
  });
  var Fa = u((Ce) => {
    "use strict";
    Object.defineProperty(Ce, "__esModule", { value: !0 });
    Ce.getPluginOrigin =
      Ce.getPluginDuration =
      Ce.getPluginDestination =
      Ce.getPluginConfig =
      Ce.createPluginInstance =
      Ce.clearPlugin =
        void 0;
    Ce.isPluginType = cD;
    Ce.renderPlugin = void 0;
    var Vt = eg(),
      tg = Be(),
      sD = ai(),
      uD = {
        [tg.ActionTypeConsts.PLUGIN_LOTTIE]: {
          getConfig: Vt.getPluginConfig,
          getOrigin: Vt.getPluginOrigin,
          getDuration: Vt.getPluginDuration,
          getDestination: Vt.getPluginDestination,
          createInstance: Vt.createPluginInstance,
          render: Vt.renderPlugin,
          clear: Vt.clearPlugin,
        },
      };
    function cD(e) {
      return e === tg.ActionTypeConsts.PLUGIN_LOTTIE;
    }
    var Wt = (e) => (t) => {
        if (!sD.IS_BROWSER_ENV) return () => null;
        let r = uD[t];
        if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
        let n = r[e];
        if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
        return n;
      },
      lD = Wt("getConfig");
    Ce.getPluginConfig = lD;
    var fD = Wt("getOrigin");
    Ce.getPluginOrigin = fD;
    var dD = Wt("getDuration");
    Ce.getPluginDuration = dD;
    var pD = Wt("getDestination");
    Ce.getPluginDestination = pD;
    var vD = Wt("createInstance");
    Ce.createPluginInstance = vD;
    var hD = Wt("render");
    Ce.renderPlugin = hD;
    var gD = Wt("clear");
    Ce.clearPlugin = gD;
  });
  var ng = u((G5, rg) => {
    function ED(e, t) {
      return e == null || e !== e ? t : e;
    }
    rg.exports = ED;
  });
  var og = u((X5, ig) => {
    function _D(e, t, r, n) {
      var i = -1,
        o = e == null ? 0 : e.length;
      for (n && o && (r = e[++i]); ++i < o; ) r = t(r, e[i], i, e);
      return r;
    }
    ig.exports = _D;
  });
  var sg = u((U5, ag) => {
    function mD(e) {
      return function (t, r, n) {
        for (var i = -1, o = Object(t), a = n(t), s = a.length; s--; ) {
          var c = a[e ? s : ++i];
          if (r(o[c], c, o) === !1) break;
        }
        return t;
      };
    }
    ag.exports = mD;
  });
  var cg = u((V5, ug) => {
    var yD = sg(),
      ID = yD();
    ug.exports = ID;
  });
  var Ga = u((W5, lg) => {
    var TD = cg(),
      bD = Kr();
    function OD(e, t) {
      return e && TD(e, t, bD);
    }
    lg.exports = OD;
  });
  var dg = u((k5, fg) => {
    var wD = Xt();
    function AD(e, t) {
      return function (r, n) {
        if (r == null) return r;
        if (!wD(r)) return e(r, n);
        for (
          var i = r.length, o = t ? i : -1, a = Object(r);
          (t ? o-- : ++o < i) && n(a[o], o, a) !== !1;

        );
        return r;
      };
    }
    fg.exports = AD;
  });
  var Xa = u((B5, pg) => {
    var SD = Ga(),
      RD = dg(),
      xD = RD(SD);
    pg.exports = xD;
  });
  var hg = u((H5, vg) => {
    function CD(e, t, r, n, i) {
      return (
        i(e, function (o, a, s) {
          r = n ? ((n = !1), o) : t(r, o, a, s);
        }),
        r
      );
    }
    vg.exports = CD;
  });
  var Eg = u((j5, gg) => {
    var ND = og(),
      LD = Xa(),
      qD = St(),
      PD = hg(),
      DD = Le();
    function MD(e, t, r) {
      var n = DD(e) ? ND : PD,
        i = arguments.length < 3;
      return n(e, qD(t, 4), r, i, LD);
    }
    gg.exports = MD;
  });
  var mg = u((K5, _g) => {
    var FD = xa(),
      GD = St(),
      XD = Ca(),
      UD = Math.max,
      VD = Math.min;
    function WD(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = n - 1;
      return (
        r !== void 0 &&
          ((i = XD(r)), (i = r < 0 ? UD(n + i, 0) : VD(i, n - 1))),
        FD(e, GD(t, 3), i, !0)
      );
    }
    _g.exports = WD;
  });
  var Ig = u((z5, yg) => {
    var kD = Ra(),
      BD = mg(),
      HD = kD(BD);
    yg.exports = HD;
  });
  var bg = u((fi) => {
    "use strict";
    Object.defineProperty(fi, "__esModule", { value: !0 });
    fi.default = void 0;
    var jD = Object.prototype.hasOwnProperty;
    function Tg(e, t) {
      return e === t
        ? e !== 0 || t !== 0 || 1 / e === 1 / t
        : e !== e && t !== t;
    }
    function KD(e, t) {
      if (Tg(e, t)) return !0;
      if (
        typeof e != "object" ||
        e === null ||
        typeof t != "object" ||
        t === null
      )
        return !1;
      let r = Object.keys(e),
        n = Object.keys(t);
      if (r.length !== n.length) return !1;
      for (let i = 0; i < r.length; i++)
        if (!jD.call(t, r[i]) || !Tg(e[r[i]], t[r[i]])) return !1;
      return !0;
    }
    var zD = KD;
    fi.default = zD;
  });
  var Bg = u((me) => {
    "use strict";
    var vi = ut().default;
    Object.defineProperty(me, "__esModule", { value: !0 });
    me.cleanupHTMLElement = HM;
    me.clearAllStyles = BM;
    me.getActionListProgress = KM;
    me.getAffectedElements = Ha;
    me.getComputedStyle = mM;
    me.getDestinationValues = AM;
    me.getElementId = hM;
    me.getInstanceId = pM;
    me.getInstanceOrigin = TM;
    me.getItemConfigByKey = void 0;
    me.getMaxDurationItemIndex = kg;
    me.getNamespacedParameterId = QM;
    me.getRenderType = Ug;
    me.getStyleProp = SM;
    me.mediaQueriesEqual = ZM;
    me.observeStore = _M;
    me.reduceListToGroup = zM;
    me.reifyState = gM;
    me.renderHTMLElement = RM;
    Object.defineProperty(me, "shallowEqual", {
      enumerable: !0,
      get: function () {
        return qg.default;
      },
    });
    me.shouldAllowMediaQuery = $M;
    me.shouldNamespaceEventParameter = YM;
    me.stringifyTarget = JM;
    var Rt = vi(ng()),
      Va = vi(Eg()),
      Ua = vi(Ig()),
      Og = ir(),
      kt = Be(),
      qg = vi(bg()),
      YD = Da(),
      vt = Fa(),
      Ue = ai(),
      {
        BACKGROUND: QD,
        TRANSFORM: $D,
        TRANSLATE_3D: ZD,
        SCALE_3D: JD,
        ROTATE_X: eM,
        ROTATE_Y: tM,
        ROTATE_Z: rM,
        SKEW: nM,
        PRESERVE_3D: iM,
        FLEX: oM,
        OPACITY: di,
        FILTER: Zr,
        FONT_VARIATION_SETTINGS: Jr,
        WIDTH: dt,
        HEIGHT: pt,
        BACKGROUND_COLOR: Pg,
        BORDER_COLOR: aM,
        COLOR: sM,
        CHILDREN: wg,
        IMMEDIATE_CHILDREN: uM,
        SIBLINGS: Ag,
        PARENT: cM,
        DISPLAY: pi,
        WILL_CHANGE: vr,
        AUTO: xt,
        COMMA_DELIMITER: en,
        COLON_DELIMITER: lM,
        BAR_DELIMITER: Sg,
        RENDER_TRANSFORM: Dg,
        RENDER_GENERAL: Wa,
        RENDER_STYLE: ka,
        RENDER_PLUGIN: Mg,
      } = kt.IX2EngineConstants,
      {
        TRANSFORM_MOVE: hr,
        TRANSFORM_SCALE: gr,
        TRANSFORM_ROTATE: Er,
        TRANSFORM_SKEW: tn,
        STYLE_OPACITY: Fg,
        STYLE_FILTER: rn,
        STYLE_FONT_VARIATION: nn,
        STYLE_SIZE: _r,
        STYLE_BACKGROUND_COLOR: mr,
        STYLE_BORDER: yr,
        STYLE_TEXT_COLOR: Ir,
        GENERAL_DISPLAY: hi,
      } = kt.ActionTypeConsts,
      fM = "OBJECT_VALUE",
      Gg = (e) => e.trim(),
      Ba = Object.freeze({ [mr]: Pg, [yr]: aM, [Ir]: sM }),
      Xg = Object.freeze({
        [Ue.TRANSFORM_PREFIXED]: $D,
        [Pg]: QD,
        [di]: di,
        [Zr]: Zr,
        [dt]: dt,
        [pt]: pt,
        [Jr]: Jr,
      }),
      Rg = {},
      dM = 1;
    function pM() {
      return "i" + dM++;
    }
    var vM = 1;
    function hM(e, t) {
      for (let r in e) {
        let n = e[r];
        if (n && n.ref === t) return n.id;
      }
      return "e" + vM++;
    }
    function gM({ events: e, actionLists: t, site: r } = {}) {
      let n = (0, Va.default)(
          e,
          (a, s) => {
            let { eventTypeId: c } = s;
            return a[c] || (a[c] = {}), (a[c][s.id] = s), a;
          },
          {}
        ),
        i = r && r.mediaQueries,
        o = [];
      return (
        i
          ? (o = i.map((a) => a.key))
          : ((i = []), console.warn("IX2 missing mediaQueries in site data")),
        {
          ixData: {
            events: e,
            actionLists: t,
            eventTypeMap: n,
            mediaQueries: i,
            mediaQueryKeys: o,
          },
        }
      );
    }
    var EM = (e, t) => e === t;
    function _M({ store: e, select: t, onChange: r, comparator: n = EM }) {
      let { getState: i, subscribe: o } = e,
        a = o(c),
        s = t(i());
      function c() {
        let h = t(i());
        if (h == null) {
          a();
          return;
        }
        n(h, s) || ((s = h), r(s, e));
      }
      return a;
    }
    function xg(e) {
      let t = typeof e;
      if (t === "string") return { id: e };
      if (e != null && t === "object") {
        let {
          id: r,
          objectId: n,
          selector: i,
          selectorGuids: o,
          appliesTo: a,
          useEventTarget: s,
        } = e;
        return {
          id: r,
          objectId: n,
          selector: i,
          selectorGuids: o,
          appliesTo: a,
          useEventTarget: s,
        };
      }
      return {};
    }
    function Ha({
      config: e,
      event: t,
      eventTarget: r,
      elementRoot: n,
      elementApi: i,
    }) {
      var o, a, s;
      if (!i) throw new Error("IX2 missing elementApi");
      let { targets: c } = e;
      if (Array.isArray(c) && c.length > 0)
        return c.reduce(
          (R, G) =>
            R.concat(
              Ha({
                config: { target: G },
                event: t,
                eventTarget: r,
                elementRoot: n,
                elementApi: i,
              })
            ),
          []
        );
      let {
          getValidDocument: h,
          getQuerySelector: I,
          queryDocument: d,
          getChildElements: T,
          getSiblingElements: m,
          matchSelector: y,
          elementContains: w,
          isSiblingNode: N,
        } = i,
        { target: x } = e;
      if (!x) return [];
      let {
        id: P,
        objectId: S,
        selector: W,
        selectorGuids: U,
        appliesTo: F,
        useEventTarget: j,
      } = xg(x);
      if (S) return [Rg[S] || (Rg[S] = {})];
      if (F === kt.EventAppliesTo.PAGE) {
        let R = h(P);
        return R ? [R] : [];
      }
      let J =
          ((o =
            t == null ||
            (a = t.action) === null ||
            a === void 0 ||
            (s = a.config) === null ||
            s === void 0
              ? void 0
              : s.affectedElements) !== null && o !== void 0
            ? o
            : {})[P || W] || {},
        oe = !!(J.id || J.selector),
        B,
        q,
        E,
        D = t && I(xg(t.target));
      if (
        (oe
          ? ((B = J.limitAffectedElements), (q = D), (E = I(J)))
          : (q = E = I({ id: P, selector: W, selectorGuids: U })),
        t && j)
      ) {
        let R = r && (E || j === !0) ? [r] : d(D);
        if (E) {
          if (j === cM) return d(E).filter((G) => R.some((Q) => w(G, Q)));
          if (j === wg) return d(E).filter((G) => R.some((Q) => w(Q, G)));
          if (j === Ag) return d(E).filter((G) => R.some((Q) => N(Q, G)));
        }
        return R;
      }
      return q == null || E == null
        ? []
        : Ue.IS_BROWSER_ENV && n
        ? d(E).filter((R) => n.contains(R))
        : B === wg
        ? d(q, E)
        : B === uM
        ? T(d(q)).filter(y(E))
        : B === Ag
        ? m(d(q)).filter(y(E))
        : d(E);
    }
    function mM({ element: e, actionItem: t }) {
      if (!Ue.IS_BROWSER_ENV) return {};
      let { actionTypeId: r } = t;
      switch (r) {
        case _r:
        case mr:
        case yr:
        case Ir:
        case hi:
          return window.getComputedStyle(e);
        default:
          return {};
      }
    }
    var Cg = /px/,
      yM = (e, t) =>
        t.reduce(
          (r, n) => (r[n.type] == null && (r[n.type] = xM[n.type]), r),
          e || {}
        ),
      IM = (e, t) =>
        t.reduce(
          (r, n) => (
            r[n.type] == null &&
              (r[n.type] = CM[n.type] || n.defaultValue || 0),
            r
          ),
          e || {}
        );
    function TM(e, t = {}, r = {}, n, i) {
      let { getStyle: o } = i,
        { actionTypeId: a } = n;
      if ((0, vt.isPluginType)(a)) return (0, vt.getPluginOrigin)(a)(t[a]);
      switch (n.actionTypeId) {
        case hr:
        case gr:
        case Er:
        case tn:
          return t[n.actionTypeId] || ja[n.actionTypeId];
        case rn:
          return yM(t[n.actionTypeId], n.config.filters);
        case nn:
          return IM(t[n.actionTypeId], n.config.fontVariations);
        case Fg:
          return { value: (0, Rt.default)(parseFloat(o(e, di)), 1) };
        case _r: {
          let s = o(e, dt),
            c = o(e, pt),
            h,
            I;
          return (
            n.config.widthUnit === xt
              ? (h = Cg.test(s) ? parseFloat(s) : parseFloat(r.width))
              : (h = (0, Rt.default)(parseFloat(s), parseFloat(r.width))),
            n.config.heightUnit === xt
              ? (I = Cg.test(c) ? parseFloat(c) : parseFloat(r.height))
              : (I = (0, Rt.default)(parseFloat(c), parseFloat(r.height))),
            { widthValue: h, heightValue: I }
          );
        }
        case mr:
        case yr:
        case Ir:
          return VM({
            element: e,
            actionTypeId: n.actionTypeId,
            computedStyle: r,
            getStyle: o,
          });
        case hi:
          return { value: (0, Rt.default)(o(e, pi), r.display) };
        case fM:
          return t[n.actionTypeId] || { value: 0 };
        default:
          return;
      }
    }
    var bM = (e, t) => (t && (e[t.type] = t.value || 0), e),
      OM = (e, t) => (t && (e[t.type] = t.value || 0), e),
      wM = (e, t, r) => {
        if ((0, vt.isPluginType)(e)) return (0, vt.getPluginConfig)(e)(r, t);
        switch (e) {
          case rn: {
            let n = (0, Ua.default)(r.filters, ({ type: i }) => i === t);
            return n ? n.value : 0;
          }
          case nn: {
            let n = (0, Ua.default)(r.fontVariations, ({ type: i }) => i === t);
            return n ? n.value : 0;
          }
          default:
            return r[t];
        }
      };
    me.getItemConfigByKey = wM;
    function AM({ element: e, actionItem: t, elementApi: r }) {
      if ((0, vt.isPluginType)(t.actionTypeId))
        return (0, vt.getPluginDestination)(t.actionTypeId)(t.config);
      switch (t.actionTypeId) {
        case hr:
        case gr:
        case Er:
        case tn: {
          let { xValue: n, yValue: i, zValue: o } = t.config;
          return { xValue: n, yValue: i, zValue: o };
        }
        case _r: {
          let { getStyle: n, setStyle: i, getProperty: o } = r,
            { widthUnit: a, heightUnit: s } = t.config,
            { widthValue: c, heightValue: h } = t.config;
          if (!Ue.IS_BROWSER_ENV) return { widthValue: c, heightValue: h };
          if (a === xt) {
            let I = n(e, dt);
            i(e, dt, ""), (c = o(e, "offsetWidth")), i(e, dt, I);
          }
          if (s === xt) {
            let I = n(e, pt);
            i(e, pt, ""), (h = o(e, "offsetHeight")), i(e, pt, I);
          }
          return { widthValue: c, heightValue: h };
        }
        case mr:
        case yr:
        case Ir: {
          let { rValue: n, gValue: i, bValue: o, aValue: a } = t.config;
          return { rValue: n, gValue: i, bValue: o, aValue: a };
        }
        case rn:
          return t.config.filters.reduce(bM, {});
        case nn:
          return t.config.fontVariations.reduce(OM, {});
        default: {
          let { value: n } = t.config;
          return { value: n };
        }
      }
    }
    function Ug(e) {
      if (/^TRANSFORM_/.test(e)) return Dg;
      if (/^STYLE_/.test(e)) return ka;
      if (/^GENERAL_/.test(e)) return Wa;
      if (/^PLUGIN_/.test(e)) return Mg;
    }
    function SM(e, t) {
      return e === ka ? t.replace("STYLE_", "").toLowerCase() : null;
    }
    function RM(e, t, r, n, i, o, a, s, c) {
      switch (s) {
        case Dg:
          return qM(e, t, r, i, a);
        case ka:
          return WM(e, t, r, i, o, a);
        case Wa:
          return kM(e, i, a);
        case Mg: {
          let { actionTypeId: h } = i;
          if ((0, vt.isPluginType)(h)) return (0, vt.renderPlugin)(h)(c, t, i);
        }
      }
    }
    var ja = {
        [hr]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [gr]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [Er]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [tn]: Object.freeze({ xValue: 0, yValue: 0 }),
      },
      xM = Object.freeze({
        blur: 0,
        "hue-rotate": 0,
        invert: 0,
        grayscale: 0,
        saturate: 100,
        sepia: 0,
        contrast: 100,
        brightness: 100,
      }),
      CM = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
      NM = (e, t) => {
        let r = (0, Ua.default)(t.filters, ({ type: n }) => n === e);
        if (r && r.unit) return r.unit;
        switch (e) {
          case "blur":
            return "px";
          case "hue-rotate":
            return "deg";
          default:
            return "%";
        }
      },
      LM = Object.keys(ja);
    function qM(e, t, r, n, i) {
      let o = LM.map((s) => {
          let c = ja[s],
            {
              xValue: h = c.xValue,
              yValue: I = c.yValue,
              zValue: d = c.zValue,
              xUnit: T = "",
              yUnit: m = "",
              zUnit: y = "",
            } = t[s] || {};
          switch (s) {
            case hr:
              return `${ZD}(${h}${T}, ${I}${m}, ${d}${y})`;
            case gr:
              return `${JD}(${h}${T}, ${I}${m}, ${d}${y})`;
            case Er:
              return `${eM}(${h}${T}) ${tM}(${I}${m}) ${rM}(${d}${y})`;
            case tn:
              return `${nM}(${h}${T}, ${I}${m})`;
            default:
              return "";
          }
        }).join(" "),
        { setStyle: a } = i;
      Bt(e, Ue.TRANSFORM_PREFIXED, i),
        a(e, Ue.TRANSFORM_PREFIXED, o),
        MM(n, r) && a(e, Ue.TRANSFORM_STYLE_PREFIXED, iM);
    }
    function PM(e, t, r, n) {
      let i = (0, Va.default)(t, (a, s, c) => `${a} ${c}(${s}${NM(c, r)})`, ""),
        { setStyle: o } = n;
      Bt(e, Zr, n), o(e, Zr, i);
    }
    function DM(e, t, r, n) {
      let i = (0, Va.default)(
          t,
          (a, s, c) => (a.push(`"${c}" ${s}`), a),
          []
        ).join(", "),
        { setStyle: o } = n;
      Bt(e, Jr, n), o(e, Jr, i);
    }
    function MM({ actionTypeId: e }, { xValue: t, yValue: r, zValue: n }) {
      return (
        (e === hr && n !== void 0) ||
        (e === gr && n !== void 0) ||
        (e === Er && (t !== void 0 || r !== void 0))
      );
    }
    var FM = "\\(([^)]+)\\)",
      GM = /^rgb/,
      XM = RegExp(`rgba?${FM}`);
    function UM(e, t) {
      let r = e.exec(t);
      return r ? r[1] : "";
    }
    function VM({
      element: e,
      actionTypeId: t,
      computedStyle: r,
      getStyle: n,
    }) {
      let i = Ba[t],
        o = n(e, i),
        a = GM.test(o) ? o : r[i],
        s = UM(XM, a).split(en);
      return {
        rValue: (0, Rt.default)(parseInt(s[0], 10), 255),
        gValue: (0, Rt.default)(parseInt(s[1], 10), 255),
        bValue: (0, Rt.default)(parseInt(s[2], 10), 255),
        aValue: (0, Rt.default)(parseFloat(s[3]), 1),
      };
    }
    function WM(e, t, r, n, i, o) {
      let { setStyle: a } = o;
      switch (n.actionTypeId) {
        case _r: {
          let { widthUnit: s = "", heightUnit: c = "" } = n.config,
            { widthValue: h, heightValue: I } = r;
          h !== void 0 &&
            (s === xt && (s = "px"), Bt(e, dt, o), a(e, dt, h + s)),
            I !== void 0 &&
              (c === xt && (c = "px"), Bt(e, pt, o), a(e, pt, I + c));
          break;
        }
        case rn: {
          PM(e, r, n.config, o);
          break;
        }
        case nn: {
          DM(e, r, n.config, o);
          break;
        }
        case mr:
        case yr:
        case Ir: {
          let s = Ba[n.actionTypeId],
            c = Math.round(r.rValue),
            h = Math.round(r.gValue),
            I = Math.round(r.bValue),
            d = r.aValue;
          Bt(e, s, o),
            a(
              e,
              s,
              d >= 1 ? `rgb(${c},${h},${I})` : `rgba(${c},${h},${I},${d})`
            );
          break;
        }
        default: {
          let { unit: s = "" } = n.config;
          Bt(e, i, o), a(e, i, r.value + s);
          break;
        }
      }
    }
    function kM(e, t, r) {
      let { setStyle: n } = r;
      switch (t.actionTypeId) {
        case hi: {
          let { value: i } = t.config;
          i === oM && Ue.IS_BROWSER_ENV
            ? n(e, pi, Ue.FLEX_PREFIXED)
            : n(e, pi, i);
          return;
        }
      }
    }
    function Bt(e, t, r) {
      if (!Ue.IS_BROWSER_ENV) return;
      let n = Xg[t];
      if (!n) return;
      let { getStyle: i, setStyle: o } = r,
        a = i(e, vr);
      if (!a) {
        o(e, vr, n);
        return;
      }
      let s = a.split(en).map(Gg);
      s.indexOf(n) === -1 && o(e, vr, s.concat(n).join(en));
    }
    function Vg(e, t, r) {
      if (!Ue.IS_BROWSER_ENV) return;
      let n = Xg[t];
      if (!n) return;
      let { getStyle: i, setStyle: o } = r,
        a = i(e, vr);
      !a ||
        a.indexOf(n) === -1 ||
        o(
          e,
          vr,
          a
            .split(en)
            .map(Gg)
            .filter((s) => s !== n)
            .join(en)
        );
    }
    function BM({ store: e, elementApi: t }) {
      let { ixData: r } = e.getState(),
        { events: n = {}, actionLists: i = {} } = r;
      Object.keys(n).forEach((o) => {
        let a = n[o],
          { config: s } = a.action,
          { actionListId: c } = s,
          h = i[c];
        h && Ng({ actionList: h, event: a, elementApi: t });
      }),
        Object.keys(i).forEach((o) => {
          Ng({ actionList: i[o], elementApi: t });
        });
    }
    function Ng({ actionList: e = {}, event: t, elementApi: r }) {
      let { actionItemGroups: n, continuousParameterGroups: i } = e;
      n &&
        n.forEach((o) => {
          Lg({ actionGroup: o, event: t, elementApi: r });
        }),
        i &&
          i.forEach((o) => {
            let { continuousActionGroups: a } = o;
            a.forEach((s) => {
              Lg({ actionGroup: s, event: t, elementApi: r });
            });
          });
    }
    function Lg({ actionGroup: e, event: t, elementApi: r }) {
      let { actionItems: n } = e;
      n.forEach(({ actionTypeId: i, config: o }) => {
        let a;
        (0, vt.isPluginType)(i)
          ? (a = (0, vt.clearPlugin)(i))
          : (a = Wg({ effect: jM, actionTypeId: i, elementApi: r })),
          Ha({ config: o, event: t, elementApi: r }).forEach(a);
      });
    }
    function HM(e, t, r) {
      let { setStyle: n, getStyle: i } = r,
        { actionTypeId: o } = t;
      if (o === _r) {
        let { config: a } = t;
        a.widthUnit === xt && n(e, dt, ""), a.heightUnit === xt && n(e, pt, "");
      }
      i(e, vr) && Wg({ effect: Vg, actionTypeId: o, elementApi: r })(e);
    }
    var Wg =
      ({ effect: e, actionTypeId: t, elementApi: r }) =>
      (n) => {
        switch (t) {
          case hr:
          case gr:
          case Er:
          case tn:
            e(n, Ue.TRANSFORM_PREFIXED, r);
            break;
          case rn:
            e(n, Zr, r);
            break;
          case nn:
            e(n, Jr, r);
            break;
          case Fg:
            e(n, di, r);
            break;
          case _r:
            e(n, dt, r), e(n, pt, r);
            break;
          case mr:
          case yr:
          case Ir:
            e(n, Ba[t], r);
            break;
          case hi:
            e(n, pi, r);
            break;
        }
      };
    function jM(e, t, r) {
      let { setStyle: n } = r;
      Vg(e, t, r),
        n(e, t, ""),
        t === Ue.TRANSFORM_PREFIXED && n(e, Ue.TRANSFORM_STYLE_PREFIXED, "");
    }
    function kg(e) {
      let t = 0,
        r = 0;
      return (
        e.forEach((n, i) => {
          let { config: o } = n,
            a = o.delay + o.duration;
          a >= t && ((t = a), (r = i));
        }),
        r
      );
    }
    function KM(e, t) {
      let { actionItemGroups: r, useFirstGroupAsInitialState: n } = e,
        { actionItem: i, verboseTimeElapsed: o = 0 } = t,
        a = 0,
        s = 0;
      return (
        r.forEach((c, h) => {
          if (n && h === 0) return;
          let { actionItems: I } = c,
            d = I[kg(I)],
            { config: T, actionTypeId: m } = d;
          i.id === d.id && (s = a + o);
          let y = Ug(m) === Wa ? 0 : T.duration;
          a += T.delay + y;
        }),
        a > 0 ? (0, YD.optimizeFloat)(s / a) : 0
      );
    }
    function zM({ actionList: e, actionItemId: t, rawData: r }) {
      let { actionItemGroups: n, continuousParameterGroups: i } = e,
        o = [],
        a = (s) => (
          o.push((0, Og.mergeIn)(s, ["config"], { delay: 0, duration: 0 })),
          s.id === t
        );
      return (
        n && n.some(({ actionItems: s }) => s.some(a)),
        i &&
          i.some((s) => {
            let { continuousActionGroups: c } = s;
            return c.some(({ actionItems: h }) => h.some(a));
          }),
        (0, Og.setIn)(r, ["actionLists"], {
          [e.id]: { id: e.id, actionItemGroups: [{ actionItems: o }] },
        })
      );
    }
    function YM(e, { basedOn: t }) {
      return (
        (e === kt.EventTypeConsts.SCROLLING_IN_VIEW &&
          (t === kt.EventBasedOn.ELEMENT || t == null)) ||
        (e === kt.EventTypeConsts.MOUSE_MOVE && t === kt.EventBasedOn.ELEMENT)
      );
    }
    function QM(e, t) {
      return e + lM + t;
    }
    function $M(e, t) {
      return t == null ? !0 : e.indexOf(t) !== -1;
    }
    function ZM(e, t) {
      return (0, qg.default)(e && e.sort(), t && t.sort());
    }
    function JM(e) {
      if (typeof e == "string") return e;
      let { id: t = "", selector: r = "", useEventTarget: n = "" } = e;
      return t + Sg + r + Sg + n;
    }
  });
  var Ht = u((Ve) => {
    "use strict";
    var Tr = Qt().default;
    Object.defineProperty(Ve, "__esModule", { value: !0 });
    Ve.IX2VanillaUtils =
      Ve.IX2VanillaPlugins =
      Ve.IX2ElementsReducer =
      Ve.IX2Easings =
      Ve.IX2EasingUtils =
      Ve.IX2BrowserSupport =
        void 0;
    var e1 = Tr(ai());
    Ve.IX2BrowserSupport = e1;
    var t1 = Tr(qa());
    Ve.IX2Easings = t1;
    var r1 = Tr(Da());
    Ve.IX2EasingUtils = r1;
    var n1 = Tr(Jh());
    Ve.IX2ElementsReducer = n1;
    var i1 = Tr(Fa());
    Ve.IX2VanillaPlugins = i1;
    var o1 = Tr(Bg());
    Ve.IX2VanillaUtils = o1;
  });
  var zg = u((Ei) => {
    "use strict";
    Object.defineProperty(Ei, "__esModule", { value: !0 });
    Ei.ixInstances = void 0;
    var Hg = Be(),
      jg = Ht(),
      br = ir(),
      {
        IX2_RAW_DATA_IMPORTED: a1,
        IX2_SESSION_STOPPED: s1,
        IX2_INSTANCE_ADDED: u1,
        IX2_INSTANCE_STARTED: c1,
        IX2_INSTANCE_REMOVED: l1,
        IX2_ANIMATION_FRAME_CHANGED: f1,
      } = Hg.IX2EngineActionTypes,
      {
        optimizeFloat: gi,
        applyEasing: Kg,
        createBezierEasing: d1,
      } = jg.IX2EasingUtils,
      { RENDER_GENERAL: p1 } = Hg.IX2EngineConstants,
      {
        getItemConfigByKey: Ka,
        getRenderType: v1,
        getStyleProp: h1,
      } = jg.IX2VanillaUtils,
      g1 = (e, t) => {
        let {
            position: r,
            parameterId: n,
            actionGroups: i,
            destinationKeys: o,
            smoothing: a,
            restingValue: s,
            actionTypeId: c,
            customEasingFn: h,
            skipMotion: I,
            skipToValue: d,
          } = e,
          { parameters: T } = t.payload,
          m = Math.max(1 - a, 0.01),
          y = T[n];
        y == null && ((m = 1), (y = s));
        let w = Math.max(y, 0) || 0,
          N = gi(w - r),
          x = I ? d : gi(r + N * m),
          P = x * 100;
        if (x === r && e.current) return e;
        let S, W, U, F;
        for (let Z = 0, { length: J } = i; Z < J; Z++) {
          let { keyframe: oe, actionItems: B } = i[Z];
          if ((Z === 0 && (S = B[0]), P >= oe)) {
            S = B[0];
            let q = i[Z + 1],
              E = q && P !== oe;
            (W = E ? q.actionItems[0] : null),
              E && ((U = oe / 100), (F = (q.keyframe - oe) / 100));
          }
        }
        let j = {};
        if (S && !W)
          for (let Z = 0, { length: J } = o; Z < J; Z++) {
            let oe = o[Z];
            j[oe] = Ka(c, oe, S.config);
          }
        else if (S && W && U !== void 0 && F !== void 0) {
          let Z = (x - U) / F,
            J = S.config.easing,
            oe = Kg(J, Z, h);
          for (let B = 0, { length: q } = o; B < q; B++) {
            let E = o[B],
              D = Ka(c, E, S.config),
              Q = (Ka(c, E, W.config) - D) * oe + D;
            j[E] = Q;
          }
        }
        return (0, br.merge)(e, { position: x, current: j });
      },
      E1 = (e, t) => {
        let {
            active: r,
            origin: n,
            start: i,
            immediate: o,
            renderType: a,
            verbose: s,
            actionItem: c,
            destination: h,
            destinationKeys: I,
            pluginDuration: d,
            instanceDelay: T,
            customEasingFn: m,
            skipMotion: y,
          } = e,
          w = c.config.easing,
          { duration: N, delay: x } = c.config;
        d != null && (N = d),
          (x = T ?? x),
          a === p1 ? (N = 0) : (o || y) && (N = x = 0);
        let { now: P } = t.payload;
        if (r && n) {
          let S = P - (i + x);
          if (s) {
            let Z = P - i,
              J = N + x,
              oe = gi(Math.min(Math.max(0, Z / J), 1));
            e = (0, br.set)(e, "verboseTimeElapsed", J * oe);
          }
          if (S < 0) return e;
          let W = gi(Math.min(Math.max(0, S / N), 1)),
            U = Kg(w, W, m),
            F = {},
            j = null;
          return (
            I.length &&
              (j = I.reduce((Z, J) => {
                let oe = h[J],
                  B = parseFloat(n[J]) || 0,
                  E = (parseFloat(oe) - B) * U + B;
                return (Z[J] = E), Z;
              }, {})),
            (F.current = j),
            (F.position = W),
            W === 1 && ((F.active = !1), (F.complete = !0)),
            (0, br.merge)(e, F)
          );
        }
        return e;
      },
      _1 = (e = Object.freeze({}), t) => {
        switch (t.type) {
          case a1:
            return t.payload.ixInstances || Object.freeze({});
          case s1:
            return Object.freeze({});
          case u1: {
            let {
                instanceId: r,
                elementId: n,
                actionItem: i,
                eventId: o,
                eventTarget: a,
                eventStateKey: s,
                actionListId: c,
                groupIndex: h,
                isCarrier: I,
                origin: d,
                destination: T,
                immediate: m,
                verbose: y,
                continuous: w,
                parameterId: N,
                actionGroups: x,
                smoothing: P,
                restingValue: S,
                pluginInstance: W,
                pluginDuration: U,
                instanceDelay: F,
                skipMotion: j,
                skipToValue: Z,
              } = t.payload,
              { actionTypeId: J } = i,
              oe = v1(J),
              B = h1(oe, J),
              q = Object.keys(T).filter((D) => T[D] != null),
              { easing: E } = i.config;
            return (0, br.set)(e, r, {
              id: r,
              elementId: n,
              active: !1,
              position: 0,
              start: 0,
              origin: d,
              destination: T,
              destinationKeys: q,
              immediate: m,
              verbose: y,
              current: null,
              actionItem: i,
              actionTypeId: J,
              eventId: o,
              eventTarget: a,
              eventStateKey: s,
              actionListId: c,
              groupIndex: h,
              renderType: oe,
              isCarrier: I,
              styleProp: B,
              continuous: w,
              parameterId: N,
              actionGroups: x,
              smoothing: P,
              restingValue: S,
              pluginInstance: W,
              pluginDuration: U,
              instanceDelay: F,
              skipMotion: j,
              skipToValue: Z,
              customEasingFn:
                Array.isArray(E) && E.length === 4 ? d1(E) : void 0,
            });
          }
          case c1: {
            let { instanceId: r, time: n } = t.payload;
            return (0, br.mergeIn)(e, [r], {
              active: !0,
              complete: !1,
              start: n,
            });
          }
          case l1: {
            let { instanceId: r } = t.payload;
            if (!e[r]) return e;
            let n = {},
              i = Object.keys(e),
              { length: o } = i;
            for (let a = 0; a < o; a++) {
              let s = i[a];
              s !== r && (n[s] = e[s]);
            }
            return n;
          }
          case f1: {
            let r = e,
              n = Object.keys(e),
              { length: i } = n;
            for (let o = 0; o < i; o++) {
              let a = n[o],
                s = e[a],
                c = s.continuous ? g1 : E1;
              r = (0, br.set)(r, a, c(s, t));
            }
            return r;
          }
          default:
            return e;
        }
      };
    Ei.ixInstances = _1;
  });
  var Yg = u((_i) => {
    "use strict";
    Object.defineProperty(_i, "__esModule", { value: !0 });
    _i.ixParameters = void 0;
    var m1 = Be(),
      {
        IX2_RAW_DATA_IMPORTED: y1,
        IX2_SESSION_STOPPED: I1,
        IX2_PARAMETER_CHANGED: T1,
      } = m1.IX2EngineActionTypes,
      b1 = (e = {}, t) => {
        switch (t.type) {
          case y1:
            return t.payload.ixParameters || {};
          case I1:
            return {};
          case T1: {
            let { key: r, value: n } = t.payload;
            return (e[r] = n), e;
          }
          default:
            return e;
        }
      };
    _i.ixParameters = b1;
  });
  var Qg = u((mi) => {
    "use strict";
    Object.defineProperty(mi, "__esModule", { value: !0 });
    mi.default = void 0;
    var O1 = Qo(),
      w1 = Ef(),
      A1 = Mf(),
      S1 = Gf(),
      R1 = Ht(),
      x1 = zg(),
      C1 = Yg(),
      { ixElements: N1 } = R1.IX2ElementsReducer,
      L1 = (0, O1.combineReducers)({
        ixData: w1.ixData,
        ixRequest: A1.ixRequest,
        ixSession: S1.ixSession,
        ixElements: N1,
        ixInstances: x1.ixInstances,
        ixParameters: C1.ixParameters,
      });
    mi.default = L1;
  });
  var $g = u((tj, on) => {
    function q1(e, t) {
      if (e == null) return {};
      var r = {},
        n = Object.keys(e),
        i,
        o;
      for (o = 0; o < n.length; o++)
        (i = n[o]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
      return r;
    }
    (on.exports = q1),
      (on.exports.__esModule = !0),
      (on.exports.default = on.exports);
  });
  var Jg = u((rj, Zg) => {
    var P1 = wt(),
      D1 = Le(),
      M1 = _t(),
      F1 = "[object String]";
    function G1(e) {
      return typeof e == "string" || (!D1(e) && M1(e) && P1(e) == F1);
    }
    Zg.exports = G1;
  });
  var tE = u((nj, eE) => {
    var X1 = Sa(),
      U1 = X1("length");
    eE.exports = U1;
  });
  var nE = u((ij, rE) => {
    var V1 = "\\ud800-\\udfff",
      W1 = "\\u0300-\\u036f",
      k1 = "\\ufe20-\\ufe2f",
      B1 = "\\u20d0-\\u20ff",
      H1 = W1 + k1 + B1,
      j1 = "\\ufe0e\\ufe0f",
      K1 = "\\u200d",
      z1 = RegExp("[" + K1 + V1 + H1 + j1 + "]");
    function Y1(e) {
      return z1.test(e);
    }
    rE.exports = Y1;
  });
  var dE = u((oj, fE) => {
    var oE = "\\ud800-\\udfff",
      Q1 = "\\u0300-\\u036f",
      $1 = "\\ufe20-\\ufe2f",
      Z1 = "\\u20d0-\\u20ff",
      J1 = Q1 + $1 + Z1,
      eF = "\\ufe0e\\ufe0f",
      tF = "[" + oE + "]",
      za = "[" + J1 + "]",
      Ya = "\\ud83c[\\udffb-\\udfff]",
      rF = "(?:" + za + "|" + Ya + ")",
      aE = "[^" + oE + "]",
      sE = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      uE = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      nF = "\\u200d",
      cE = rF + "?",
      lE = "[" + eF + "]?",
      iF = "(?:" + nF + "(?:" + [aE, sE, uE].join("|") + ")" + lE + cE + ")*",
      oF = lE + cE + iF,
      aF = "(?:" + [aE + za + "?", za, sE, uE, tF].join("|") + ")",
      iE = RegExp(Ya + "(?=" + Ya + ")|" + aF + oF, "g");
    function sF(e) {
      for (var t = (iE.lastIndex = 0); iE.test(e); ) ++t;
      return t;
    }
    fE.exports = sF;
  });
  var vE = u((aj, pE) => {
    var uF = tE(),
      cF = nE(),
      lF = dE();
    function fF(e) {
      return cF(e) ? lF(e) : uF(e);
    }
    pE.exports = fF;
  });
  var gE = u((sj, hE) => {
    var dF = $n(),
      pF = Zn(),
      vF = Xt(),
      hF = Jg(),
      gF = vE(),
      EF = "[object Map]",
      _F = "[object Set]";
    function mF(e) {
      if (e == null) return 0;
      if (vF(e)) return hF(e) ? gF(e) : e.length;
      var t = pF(e);
      return t == EF || t == _F ? e.size : dF(e).length;
    }
    hE.exports = mF;
  });
  var _E = u((uj, EE) => {
    var yF = "Expected a function";
    function IF(e) {
      if (typeof e != "function") throw new TypeError(yF);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    EE.exports = IF;
  });
  var Qa = u((cj, mE) => {
    var TF = At(),
      bF = (function () {
        try {
          var e = TF(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    mE.exports = bF;
  });
  var $a = u((lj, IE) => {
    var yE = Qa();
    function OF(e, t, r) {
      t == "__proto__" && yE
        ? yE(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    }
    IE.exports = OF;
  });
  var bE = u((fj, TE) => {
    var wF = $a(),
      AF = Vn(),
      SF = Object.prototype,
      RF = SF.hasOwnProperty;
    function xF(e, t, r) {
      var n = e[t];
      (!(RF.call(e, t) && AF(n, r)) || (r === void 0 && !(t in e))) &&
        wF(e, t, r);
    }
    TE.exports = xF;
  });
  var AE = u((dj, wE) => {
    var CF = bE(),
      NF = Yr(),
      LF = Kn(),
      OE = ft(),
      qF = dr();
    function PF(e, t, r, n) {
      if (!OE(e)) return e;
      t = NF(t, e);
      for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o; ) {
        var c = qF(t[i]),
          h = r;
        if (c === "__proto__" || c === "constructor" || c === "prototype")
          return e;
        if (i != a) {
          var I = s[c];
          (h = n ? n(I, c, s) : void 0),
            h === void 0 && (h = OE(I) ? I : LF(t[i + 1]) ? [] : {});
        }
        CF(s, c, h), (s = s[c]);
      }
      return e;
    }
    wE.exports = PF;
  });
  var RE = u((pj, SE) => {
    var DF = ti(),
      MF = AE(),
      FF = Yr();
    function GF(e, t, r) {
      for (var n = -1, i = t.length, o = {}; ++n < i; ) {
        var a = t[n],
          s = DF(e, a);
        r(s, a) && MF(o, FF(a, e), s);
      }
      return o;
    }
    SE.exports = GF;
  });
  var CE = u((vj, xE) => {
    var XF = Hn(),
      UF = Fo(),
      VF = da(),
      WF = fa(),
      kF = Object.getOwnPropertySymbols,
      BF = kF
        ? function (e) {
            for (var t = []; e; ) XF(t, VF(e)), (e = UF(e));
            return t;
          }
        : WF;
    xE.exports = BF;
  });
  var LE = u((hj, NE) => {
    function HF(e) {
      var t = [];
      if (e != null) for (var r in Object(e)) t.push(r);
      return t;
    }
    NE.exports = HF;
  });
  var PE = u((gj, qE) => {
    var jF = ft(),
      KF = Qn(),
      zF = LE(),
      YF = Object.prototype,
      QF = YF.hasOwnProperty;
    function $F(e) {
      if (!jF(e)) return zF(e);
      var t = KF(e),
        r = [];
      for (var n in e)
        (n == "constructor" && (t || !QF.call(e, n))) || r.push(n);
      return r;
    }
    qE.exports = $F;
  });
  var ME = u((Ej, DE) => {
    var ZF = va(),
      JF = PE(),
      e2 = Xt();
    function t2(e) {
      return e2(e) ? ZF(e, !0) : JF(e);
    }
    DE.exports = t2;
  });
  var GE = u((_j, FE) => {
    var r2 = la(),
      n2 = CE(),
      i2 = ME();
    function o2(e) {
      return r2(e, i2, n2);
    }
    FE.exports = o2;
  });
  var UE = u((mj, XE) => {
    var a2 = Aa(),
      s2 = St(),
      u2 = RE(),
      c2 = GE();
    function l2(e, t) {
      if (e == null) return {};
      var r = a2(c2(e), function (n) {
        return [n];
      });
      return (
        (t = s2(t)),
        u2(e, r, function (n, i) {
          return t(n, i[0]);
        })
      );
    }
    XE.exports = l2;
  });
  var WE = u((yj, VE) => {
    var f2 = St(),
      d2 = _E(),
      p2 = UE();
    function v2(e, t) {
      return p2(e, d2(f2(t)));
    }
    VE.exports = v2;
  });
  var BE = u((Ij, kE) => {
    var h2 = $n(),
      g2 = Zn(),
      E2 = kr(),
      _2 = Le(),
      m2 = Xt(),
      y2 = jn(),
      I2 = Qn(),
      T2 = Yn(),
      b2 = "[object Map]",
      O2 = "[object Set]",
      w2 = Object.prototype,
      A2 = w2.hasOwnProperty;
    function S2(e) {
      if (e == null) return !0;
      if (
        m2(e) &&
        (_2(e) ||
          typeof e == "string" ||
          typeof e.splice == "function" ||
          y2(e) ||
          T2(e) ||
          E2(e))
      )
        return !e.length;
      var t = g2(e);
      if (t == b2 || t == O2) return !e.size;
      if (I2(e)) return !h2(e).length;
      for (var r in e) if (A2.call(e, r)) return !1;
      return !0;
    }
    kE.exports = S2;
  });
  var jE = u((Tj, HE) => {
    var R2 = $a(),
      x2 = Ga(),
      C2 = St();
    function N2(e, t) {
      var r = {};
      return (
        (t = C2(t, 3)),
        x2(e, function (n, i, o) {
          R2(r, i, t(n, i, o));
        }),
        r
      );
    }
    HE.exports = N2;
  });
  var zE = u((bj, KE) => {
    function L2(e, t) {
      for (
        var r = -1, n = e == null ? 0 : e.length;
        ++r < n && t(e[r], r, e) !== !1;

      );
      return e;
    }
    KE.exports = L2;
  });
  var QE = u((Oj, YE) => {
    var q2 = ni();
    function P2(e) {
      return typeof e == "function" ? e : q2;
    }
    YE.exports = P2;
  });
  var ZE = u((wj, $E) => {
    var D2 = zE(),
      M2 = Xa(),
      F2 = QE(),
      G2 = Le();
    function X2(e, t) {
      var r = G2(e) ? D2 : M2;
      return r(e, F2(t));
    }
    $E.exports = X2;
  });
  var e_ = u((Aj, JE) => {
    var U2 = tt(),
      V2 = function () {
        return U2.Date.now();
      };
    JE.exports = V2;
  });
  var n_ = u((Sj, r_) => {
    var W2 = ft(),
      Za = e_(),
      t_ = ii(),
      k2 = "Expected a function",
      B2 = Math.max,
      H2 = Math.min;
    function j2(e, t, r) {
      var n,
        i,
        o,
        a,
        s,
        c,
        h = 0,
        I = !1,
        d = !1,
        T = !0;
      if (typeof e != "function") throw new TypeError(k2);
      (t = t_(t) || 0),
        W2(r) &&
          ((I = !!r.leading),
          (d = "maxWait" in r),
          (o = d ? B2(t_(r.maxWait) || 0, t) : o),
          (T = "trailing" in r ? !!r.trailing : T));
      function m(F) {
        var j = n,
          Z = i;
        return (n = i = void 0), (h = F), (a = e.apply(Z, j)), a;
      }
      function y(F) {
        return (h = F), (s = setTimeout(x, t)), I ? m(F) : a;
      }
      function w(F) {
        var j = F - c,
          Z = F - h,
          J = t - j;
        return d ? H2(J, o - Z) : J;
      }
      function N(F) {
        var j = F - c,
          Z = F - h;
        return c === void 0 || j >= t || j < 0 || (d && Z >= o);
      }
      function x() {
        var F = Za();
        if (N(F)) return P(F);
        s = setTimeout(x, w(F));
      }
      function P(F) {
        return (s = void 0), T && n ? m(F) : ((n = i = void 0), a);
      }
      function S() {
        s !== void 0 && clearTimeout(s), (h = 0), (n = c = i = s = void 0);
      }
      function W() {
        return s === void 0 ? a : P(Za());
      }
      function U() {
        var F = Za(),
          j = N(F);
        if (((n = arguments), (i = this), (c = F), j)) {
          if (s === void 0) return y(c);
          if (d) return clearTimeout(s), (s = setTimeout(x, t)), m(c);
        }
        return s === void 0 && (s = setTimeout(x, t)), a;
      }
      return (U.cancel = S), (U.flush = W), U;
    }
    r_.exports = j2;
  });
  var o_ = u((Rj, i_) => {
    var K2 = n_(),
      z2 = ft(),
      Y2 = "Expected a function";
    function Q2(e, t, r) {
      var n = !0,
        i = !0;
      if (typeof e != "function") throw new TypeError(Y2);
      return (
        z2(r) &&
          ((n = "leading" in r ? !!r.leading : n),
          (i = "trailing" in r ? !!r.trailing : i)),
        K2(e, t, { leading: n, maxWait: t, trailing: i })
      );
    }
    i_.exports = Q2;
  });
  var yi = u((le) => {
    "use strict";
    var $2 = ut().default;
    Object.defineProperty(le, "__esModule", { value: !0 });
    le.viewportWidthChanged =
      le.testFrameRendered =
      le.stopRequested =
      le.sessionStopped =
      le.sessionStarted =
      le.sessionInitialized =
      le.rawDataImported =
      le.previewRequested =
      le.playbackRequested =
      le.parameterChanged =
      le.mediaQueriesDefined =
      le.instanceStarted =
      le.instanceRemoved =
      le.instanceAdded =
      le.eventStateChanged =
      le.eventListenerAdded =
      le.elementStateChanged =
      le.clearRequested =
      le.animationFrameChanged =
      le.actionListPlaybackChanged =
        void 0;
    var a_ = $2(Gr()),
      s_ = Be(),
      Z2 = Ht(),
      {
        IX2_RAW_DATA_IMPORTED: J2,
        IX2_SESSION_INITIALIZED: eG,
        IX2_SESSION_STARTED: tG,
        IX2_SESSION_STOPPED: rG,
        IX2_PREVIEW_REQUESTED: nG,
        IX2_PLAYBACK_REQUESTED: iG,
        IX2_STOP_REQUESTED: oG,
        IX2_CLEAR_REQUESTED: aG,
        IX2_EVENT_LISTENER_ADDED: sG,
        IX2_TEST_FRAME_RENDERED: uG,
        IX2_EVENT_STATE_CHANGED: cG,
        IX2_ANIMATION_FRAME_CHANGED: lG,
        IX2_PARAMETER_CHANGED: fG,
        IX2_INSTANCE_ADDED: dG,
        IX2_INSTANCE_STARTED: pG,
        IX2_INSTANCE_REMOVED: vG,
        IX2_ELEMENT_STATE_CHANGED: hG,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: gG,
        IX2_VIEWPORT_WIDTH_CHANGED: EG,
        IX2_MEDIA_QUERIES_DEFINED: _G,
      } = s_.IX2EngineActionTypes,
      { reifyState: mG } = Z2.IX2VanillaUtils,
      yG = (e) => ({ type: J2, payload: (0, a_.default)({}, mG(e)) });
    le.rawDataImported = yG;
    var IG = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
      type: eG,
      payload: { hasBoundaryNodes: e, reducedMotion: t },
    });
    le.sessionInitialized = IG;
    var TG = () => ({ type: tG });
    le.sessionStarted = TG;
    var bG = () => ({ type: rG });
    le.sessionStopped = bG;
    var OG = ({ rawData: e, defer: t }) => ({
      type: nG,
      payload: { defer: t, rawData: e },
    });
    le.previewRequested = OG;
    var wG = ({
      actionTypeId: e = s_.ActionTypeConsts.GENERAL_START_ACTION,
      actionListId: t,
      actionItemId: r,
      eventId: n,
      allowEvents: i,
      immediate: o,
      testManual: a,
      verbose: s,
      rawData: c,
    }) => ({
      type: iG,
      payload: {
        actionTypeId: e,
        actionListId: t,
        actionItemId: r,
        testManual: a,
        eventId: n,
        allowEvents: i,
        immediate: o,
        verbose: s,
        rawData: c,
      },
    });
    le.playbackRequested = wG;
    var AG = (e) => ({ type: oG, payload: { actionListId: e } });
    le.stopRequested = AG;
    var SG = () => ({ type: aG });
    le.clearRequested = SG;
    var RG = (e, t) => ({
      type: sG,
      payload: { target: e, listenerParams: t },
    });
    le.eventListenerAdded = RG;
    var xG = (e = 1) => ({ type: uG, payload: { step: e } });
    le.testFrameRendered = xG;
    var CG = (e, t) => ({ type: cG, payload: { stateKey: e, newState: t } });
    le.eventStateChanged = CG;
    var NG = (e, t) => ({ type: lG, payload: { now: e, parameters: t } });
    le.animationFrameChanged = NG;
    var LG = (e, t) => ({ type: fG, payload: { key: e, value: t } });
    le.parameterChanged = LG;
    var qG = (e) => ({ type: dG, payload: (0, a_.default)({}, e) });
    le.instanceAdded = qG;
    var PG = (e, t) => ({ type: pG, payload: { instanceId: e, time: t } });
    le.instanceStarted = PG;
    var DG = (e) => ({ type: vG, payload: { instanceId: e } });
    le.instanceRemoved = DG;
    var MG = (e, t, r, n) => ({
      type: hG,
      payload: { elementId: e, actionTypeId: t, current: r, actionItem: n },
    });
    le.elementStateChanged = MG;
    var FG = ({ actionListId: e, isPlaying: t }) => ({
      type: gG,
      payload: { actionListId: e, isPlaying: t },
    });
    le.actionListPlaybackChanged = FG;
    var GG = ({ width: e, mediaQueries: t }) => ({
      type: EG,
      payload: { width: e, mediaQueries: t },
    });
    le.viewportWidthChanged = GG;
    var XG = () => ({ type: _G });
    le.mediaQueriesDefined = XG;
  });
  var l_ = u((Pe) => {
    "use strict";
    Object.defineProperty(Pe, "__esModule", { value: !0 });
    Pe.elementContains = $G;
    Pe.getChildElements = JG;
    Pe.getClosestElement = void 0;
    Pe.getProperty = jG;
    Pe.getQuerySelector = zG;
    Pe.getRefType = rX;
    Pe.getSiblingElements = eX;
    Pe.getStyle = HG;
    Pe.getValidDocument = YG;
    Pe.isSiblingNode = ZG;
    Pe.matchSelector = KG;
    Pe.queryDocument = QG;
    Pe.setStyle = BG;
    var UG = Ht(),
      VG = Be(),
      { ELEMENT_MATCHES: Ja } = UG.IX2BrowserSupport,
      {
        IX2_ID_DELIMITER: u_,
        HTML_ELEMENT: WG,
        PLAIN_OBJECT: kG,
        WF_PAGE: c_,
      } = VG.IX2EngineConstants;
    function BG(e, t, r) {
      e.style[t] = r;
    }
    function HG(e, t) {
      return e.style[t];
    }
    function jG(e, t) {
      return e[t];
    }
    function KG(e) {
      return (t) => t[Ja](e);
    }
    function zG({ id: e, selector: t }) {
      if (e) {
        let r = e;
        if (e.indexOf(u_) !== -1) {
          let n = e.split(u_),
            i = n[0];
          if (((r = n[1]), i !== document.documentElement.getAttribute(c_)))
            return null;
        }
        return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`;
      }
      return t;
    }
    function YG(e) {
      return e == null || e === document.documentElement.getAttribute(c_)
        ? document
        : null;
    }
    function QG(e, t) {
      return Array.prototype.slice.call(
        document.querySelectorAll(t ? e + " " + t : e)
      );
    }
    function $G(e, t) {
      return e.contains(t);
    }
    function ZG(e, t) {
      return e !== t && e.parentNode === t.parentNode;
    }
    function JG(e) {
      let t = [];
      for (let r = 0, { length: n } = e || []; r < n; r++) {
        let { children: i } = e[r],
          { length: o } = i;
        if (o) for (let a = 0; a < o; a++) t.push(i[a]);
      }
      return t;
    }
    function eX(e = []) {
      let t = [],
        r = [];
      for (let n = 0, { length: i } = e; n < i; n++) {
        let { parentNode: o } = e[n];
        if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1)
          continue;
        r.push(o);
        let a = o.firstElementChild;
        for (; a != null; )
          e.indexOf(a) === -1 && t.push(a), (a = a.nextElementSibling);
      }
      return t;
    }
    var tX = Element.prototype.closest
      ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
      : (e, t) => {
          if (!document.documentElement.contains(e)) return null;
          let r = e;
          do {
            if (r[Ja] && r[Ja](t)) return r;
            r = r.parentNode;
          } while (r != null);
          return null;
        };
    Pe.getClosestElement = tX;
    function rX(e) {
      return e != null && typeof e == "object"
        ? e instanceof Element
          ? WG
          : kG
        : null;
    }
  });
  var es = u((Nj, d_) => {
    var nX = ft(),
      f_ = Object.create,
      iX = (function () {
        function e() {}
        return function (t) {
          if (!nX(t)) return {};
          if (f_) return f_(t);
          e.prototype = t;
          var r = new e();
          return (e.prototype = void 0), r;
        };
      })();
    d_.exports = iX;
  });
  var Ii = u((Lj, p_) => {
    function oX() {}
    p_.exports = oX;
  });
  var bi = u((qj, v_) => {
    var aX = es(),
      sX = Ii();
    function Ti(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    Ti.prototype = aX(sX.prototype);
    Ti.prototype.constructor = Ti;
    v_.exports = Ti;
  });
  var __ = u((Pj, E_) => {
    var h_ = er(),
      uX = kr(),
      cX = Le(),
      g_ = h_ ? h_.isConcatSpreadable : void 0;
    function lX(e) {
      return cX(e) || uX(e) || !!(g_ && e && e[g_]);
    }
    E_.exports = lX;
  });
  var I_ = u((Dj, y_) => {
    var fX = Hn(),
      dX = __();
    function m_(e, t, r, n, i) {
      var o = -1,
        a = e.length;
      for (r || (r = dX), i || (i = []); ++o < a; ) {
        var s = e[o];
        t > 0 && r(s)
          ? t > 1
            ? m_(s, t - 1, r, n, i)
            : fX(i, s)
          : n || (i[i.length] = s);
      }
      return i;
    }
    y_.exports = m_;
  });
  var b_ = u((Mj, T_) => {
    var pX = I_();
    function vX(e) {
      var t = e == null ? 0 : e.length;
      return t ? pX(e, 1) : [];
    }
    T_.exports = vX;
  });
  var w_ = u((Fj, O_) => {
    function hX(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    O_.exports = hX;
  });
  var R_ = u((Gj, S_) => {
    var gX = w_(),
      A_ = Math.max;
    function EX(e, t, r) {
      return (
        (t = A_(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var n = arguments, i = -1, o = A_(n.length - t, 0), a = Array(o);
            ++i < o;

          )
            a[i] = n[t + i];
          i = -1;
          for (var s = Array(t + 1); ++i < t; ) s[i] = n[i];
          return (s[t] = r(a)), gX(e, this, s);
        }
      );
    }
    S_.exports = EX;
  });
  var C_ = u((Xj, x_) => {
    function _X(e) {
      return function () {
        return e;
      };
    }
    x_.exports = _X;
  });
  var q_ = u((Uj, L_) => {
    var mX = C_(),
      N_ = Qa(),
      yX = ni(),
      IX = N_
        ? function (e, t) {
            return N_(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: mX(t),
              writable: !0,
            });
          }
        : yX;
    L_.exports = IX;
  });
  var D_ = u((Vj, P_) => {
    var TX = 800,
      bX = 16,
      OX = Date.now;
    function wX(e) {
      var t = 0,
        r = 0;
      return function () {
        var n = OX(),
          i = bX - (n - r);
        if (((r = n), i > 0)) {
          if (++t >= TX) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    P_.exports = wX;
  });
  var F_ = u((Wj, M_) => {
    var AX = q_(),
      SX = D_(),
      RX = SX(AX);
    M_.exports = RX;
  });
  var X_ = u((kj, G_) => {
    var xX = b_(),
      CX = R_(),
      NX = F_();
    function LX(e) {
      return NX(CX(e, void 0, xX), e + "");
    }
    G_.exports = LX;
  });
  var W_ = u((Bj, V_) => {
    var U_ = ha(),
      qX = U_ && new U_();
    V_.exports = qX;
  });
  var B_ = u((Hj, k_) => {
    function PX() {}
    k_.exports = PX;
  });
  var ts = u((jj, j_) => {
    var H_ = W_(),
      DX = B_(),
      MX = H_
        ? function (e) {
            return H_.get(e);
          }
        : DX;
    j_.exports = MX;
  });
  var z_ = u((Kj, K_) => {
    var FX = {};
    K_.exports = FX;
  });
  var rs = u((zj, Q_) => {
    var Y_ = z_(),
      GX = Object.prototype,
      XX = GX.hasOwnProperty;
    function UX(e) {
      for (
        var t = e.name + "", r = Y_[t], n = XX.call(Y_, t) ? r.length : 0;
        n--;

      ) {
        var i = r[n],
          o = i.func;
        if (o == null || o == e) return i.name;
      }
      return t;
    }
    Q_.exports = UX;
  });
  var wi = u((Yj, $_) => {
    var VX = es(),
      WX = Ii(),
      kX = 4294967295;
    function Oi(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = kX),
        (this.__views__ = []);
    }
    Oi.prototype = VX(WX.prototype);
    Oi.prototype.constructor = Oi;
    $_.exports = Oi;
  });
  var J_ = u((Qj, Z_) => {
    function BX(e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
      return t;
    }
    Z_.exports = BX;
  });
  var tm = u(($j, em) => {
    var HX = wi(),
      jX = bi(),
      KX = J_();
    function zX(e) {
      if (e instanceof HX) return e.clone();
      var t = new jX(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = KX(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    em.exports = zX;
  });
  var im = u((Zj, nm) => {
    var YX = wi(),
      rm = bi(),
      QX = Ii(),
      $X = Le(),
      ZX = _t(),
      JX = tm(),
      eU = Object.prototype,
      tU = eU.hasOwnProperty;
    function Ai(e) {
      if (ZX(e) && !$X(e) && !(e instanceof YX)) {
        if (e instanceof rm) return e;
        if (tU.call(e, "__wrapped__")) return JX(e);
      }
      return new rm(e);
    }
    Ai.prototype = QX.prototype;
    Ai.prototype.constructor = Ai;
    nm.exports = Ai;
  });
  var am = u((Jj, om) => {
    var rU = wi(),
      nU = ts(),
      iU = rs(),
      oU = im();
    function aU(e) {
      var t = iU(e),
        r = oU[t];
      if (typeof r != "function" || !(t in rU.prototype)) return !1;
      if (e === r) return !0;
      var n = nU(r);
      return !!n && e === n[0];
    }
    om.exports = aU;
  });
  var lm = u((eK, cm) => {
    var sm = bi(),
      sU = X_(),
      uU = ts(),
      ns = rs(),
      cU = Le(),
      um = am(),
      lU = "Expected a function",
      fU = 8,
      dU = 32,
      pU = 128,
      vU = 256;
    function hU(e) {
      return sU(function (t) {
        var r = t.length,
          n = r,
          i = sm.prototype.thru;
        for (e && t.reverse(); n--; ) {
          var o = t[n];
          if (typeof o != "function") throw new TypeError(lU);
          if (i && !a && ns(o) == "wrapper") var a = new sm([], !0);
        }
        for (n = a ? n : r; ++n < r; ) {
          o = t[n];
          var s = ns(o),
            c = s == "wrapper" ? uU(o) : void 0;
          c &&
          um(c[0]) &&
          c[1] == (pU | fU | dU | vU) &&
          !c[4].length &&
          c[9] == 1
            ? (a = a[ns(c[0])].apply(a, c[3]))
            : (a = o.length == 1 && um(o) ? a[s]() : a.thru(o));
        }
        return function () {
          var h = arguments,
            I = h[0];
          if (a && h.length == 1 && cU(I)) return a.plant(I).value();
          for (var d = 0, T = r ? t[d].apply(this, h) : I; ++d < r; )
            T = t[d].call(this, T);
          return T;
        };
      });
    }
    cm.exports = hU;
  });
  var dm = u((tK, fm) => {
    var gU = lm(),
      EU = gU();
    fm.exports = EU;
  });
  var vm = u((rK, pm) => {
    function _U(e, t, r) {
      return (
        e === e &&
          (r !== void 0 && (e = e <= r ? e : r),
          t !== void 0 && (e = e >= t ? e : t)),
        e
      );
    }
    pm.exports = _U;
  });
  var gm = u((nK, hm) => {
    var mU = vm(),
      is = ii();
    function yU(e, t, r) {
      return (
        r === void 0 && ((r = t), (t = void 0)),
        r !== void 0 && ((r = is(r)), (r = r === r ? r : 0)),
        t !== void 0 && ((t = is(t)), (t = t === t ? t : 0)),
        mU(is(e), t, r)
      );
    }
    hm.exports = yU;
  });
  var Pm = u((Ni) => {
    "use strict";
    var Ci = ut().default;
    Object.defineProperty(Ni, "__esModule", { value: !0 });
    Ni.default = void 0;
    var ze = Ci(Gr()),
      IU = Ci(dm()),
      TU = Ci(ri()),
      bU = Ci(gm()),
      jt = Be(),
      os = cs(),
      Si = yi(),
      OU = Ht(),
      {
        MOUSE_CLICK: wU,
        MOUSE_SECOND_CLICK: AU,
        MOUSE_DOWN: SU,
        MOUSE_UP: RU,
        MOUSE_OVER: xU,
        MOUSE_OUT: CU,
        DROPDOWN_CLOSE: NU,
        DROPDOWN_OPEN: LU,
        SLIDER_ACTIVE: qU,
        SLIDER_INACTIVE: PU,
        TAB_ACTIVE: DU,
        TAB_INACTIVE: MU,
        NAVBAR_CLOSE: FU,
        NAVBAR_OPEN: GU,
        MOUSE_MOVE: XU,
        PAGE_SCROLL_DOWN: wm,
        SCROLL_INTO_VIEW: Am,
        SCROLL_OUT_OF_VIEW: UU,
        PAGE_SCROLL_UP: VU,
        SCROLLING_IN_VIEW: WU,
        PAGE_FINISH: Sm,
        ECOMMERCE_CART_CLOSE: kU,
        ECOMMERCE_CART_OPEN: BU,
        PAGE_START: Rm,
        PAGE_SCROLL: HU,
      } = jt.EventTypeConsts,
      as = "COMPONENT_ACTIVE",
      xm = "COMPONENT_INACTIVE",
      { COLON_DELIMITER: Em } = jt.IX2EngineConstants,
      { getNamespacedParameterId: _m } = OU.IX2VanillaUtils,
      Cm = (e) => (t) => typeof t == "object" && e(t) ? !0 : t,
      sn = Cm(({ element: e, nativeEvent: t }) => e === t.target),
      jU = Cm(({ element: e, nativeEvent: t }) => e.contains(t.target)),
      ht = (0, IU.default)([sn, jU]),
      Nm = (e, t) => {
        if (t) {
          let { ixData: r } = e.getState(),
            { events: n } = r,
            i = n[t];
          if (i && !zU[i.eventTypeId]) return i;
        }
        return null;
      },
      KU = ({ store: e, event: t }) => {
        let { action: r } = t,
          { autoStopEventId: n } = r.config;
        return !!Nm(e, n);
      },
      je = ({ store: e, event: t, element: r, eventStateKey: n }, i) => {
        let { action: o, id: a } = t,
          { actionListId: s, autoStopEventId: c } = o.config,
          h = Nm(e, c);
        return (
          h &&
            (0, os.stopActionGroup)({
              store: e,
              eventId: c,
              eventTarget: r,
              eventStateKey: c + Em + n.split(Em)[1],
              actionListId: (0, TU.default)(h, "action.config.actionListId"),
            }),
          (0, os.stopActionGroup)({
            store: e,
            eventId: a,
            eventTarget: r,
            eventStateKey: n,
            actionListId: s,
          }),
          (0, os.startActionGroup)({
            store: e,
            eventId: a,
            eventTarget: r,
            eventStateKey: n,
            actionListId: s,
          }),
          i
        );
      },
      rt = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n,
      un = { handler: rt(ht, je) },
      Lm = (0, ze.default)({}, un, { types: [as, xm].join(" ") }),
      ss = [
        { target: window, types: "resize orientationchange", throttle: !0 },
        {
          target: document,
          types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
          throttle: !0,
        },
      ],
      mm = "mouseover mouseout",
      us = { types: ss },
      zU = { PAGE_START: Rm, PAGE_FINISH: Sm },
      an = (() => {
        let e = window.pageXOffset !== void 0,
          r =
            document.compatMode === "CSS1Compat"
              ? document.documentElement
              : document.body;
        return () => ({
          scrollLeft: e ? window.pageXOffset : r.scrollLeft,
          scrollTop: e ? window.pageYOffset : r.scrollTop,
          stiffScrollTop: (0, bU.default)(
            e ? window.pageYOffset : r.scrollTop,
            0,
            r.scrollHeight - window.innerHeight
          ),
          scrollWidth: r.scrollWidth,
          scrollHeight: r.scrollHeight,
          clientWidth: r.clientWidth,
          clientHeight: r.clientHeight,
          innerWidth: window.innerWidth,
          innerHeight: window.innerHeight,
        });
      })(),
      YU = (e, t) =>
        !(
          e.left > t.right ||
          e.right < t.left ||
          e.top > t.bottom ||
          e.bottom < t.top
        ),
      QU = ({ element: e, nativeEvent: t }) => {
        let { type: r, target: n, relatedTarget: i } = t,
          o = e.contains(n);
        if (r === "mouseover" && o) return !0;
        let a = e.contains(i);
        return !!(r === "mouseout" && o && a);
      },
      $U = (e) => {
        let {
            element: t,
            event: { config: r },
          } = e,
          { clientWidth: n, clientHeight: i } = an(),
          o = r.scrollOffsetValue,
          c = r.scrollOffsetUnit === "PX" ? o : (i * (o || 0)) / 100;
        return YU(t.getBoundingClientRect(), {
          left: 0,
          top: c,
          right: n,
          bottom: i - c,
        });
      },
      qm = (e) => (t, r) => {
        let { type: n } = t.nativeEvent,
          i = [as, xm].indexOf(n) !== -1 ? n === as : r.isActive,
          o = (0, ze.default)({}, r, { isActive: i });
        return ((!r || o.isActive !== r.isActive) && e(t, o)) || o;
      },
      ym = (e) => (t, r) => {
        let n = { elementHovered: QU(t) };
        return (
          ((r ? n.elementHovered !== r.elementHovered : n.elementHovered) &&
            e(t, n)) ||
          n
        );
      },
      ZU = (e) => (t, r) => {
        let n = (0, ze.default)({}, r, { elementVisible: $U(t) });
        return (
          ((r ? n.elementVisible !== r.elementVisible : n.elementVisible) &&
            e(t, n)) ||
          n
        );
      },
      Im =
        (e) =>
        (t, r = {}) => {
          let { stiffScrollTop: n, scrollHeight: i, innerHeight: o } = an(),
            {
              event: { config: a, eventTypeId: s },
            } = t,
            { scrollOffsetValue: c, scrollOffsetUnit: h } = a,
            I = h === "PX",
            d = i - o,
            T = Number((n / d).toFixed(2));
          if (r && r.percentTop === T) return r;
          let m = (I ? c : (o * (c || 0)) / 100) / d,
            y,
            w,
            N = 0;
          r &&
            ((y = T > r.percentTop),
            (w = r.scrollingDown !== y),
            (N = w ? T : r.anchorTop));
          let x = s === wm ? T >= N + m : T <= N - m,
            P = (0, ze.default)({}, r, {
              percentTop: T,
              inBounds: x,
              anchorTop: N,
              scrollingDown: y,
            });
          return (r && x && (w || P.inBounds !== r.inBounds) && e(t, P)) || P;
        },
      JU = (e, t) =>
        e.left > t.left &&
        e.left < t.right &&
        e.top > t.top &&
        e.top < t.bottom,
      eV = (e) => (t, r) => {
        let n = { finished: document.readyState === "complete" };
        return n.finished && !(r && r.finshed) && e(t), n;
      },
      tV = (e) => (t, r) => {
        let n = { started: !0 };
        return r || e(t), n;
      },
      Tm =
        (e) =>
        (t, r = { clickCount: 0 }) => {
          let n = { clickCount: (r.clickCount % 2) + 1 };
          return (n.clickCount !== r.clickCount && e(t, n)) || n;
        },
      Ri = (e = !0) =>
        (0, ze.default)({}, Lm, {
          handler: rt(
            e ? ht : sn,
            qm((t, r) => (r.isActive ? un.handler(t, r) : r))
          ),
        }),
      xi = (e = !0) =>
        (0, ze.default)({}, Lm, {
          handler: rt(
            e ? ht : sn,
            qm((t, r) => (r.isActive ? r : un.handler(t, r)))
          ),
        }),
      bm = (0, ze.default)({}, us, {
        handler: ZU((e, t) => {
          let { elementVisible: r } = t,
            { event: n, store: i } = e,
            { ixData: o } = i.getState(),
            { events: a } = o;
          return !a[n.action.config.autoStopEventId] && t.triggered
            ? t
            : (n.eventTypeId === Am) === r
            ? (je(e), (0, ze.default)({}, t, { triggered: !0 }))
            : t;
        }),
      }),
      Om = 0.05,
      rV = {
        [qU]: Ri(),
        [PU]: xi(),
        [LU]: Ri(),
        [NU]: xi(),
        [GU]: Ri(!1),
        [FU]: xi(!1),
        [DU]: Ri(),
        [MU]: xi(),
        [BU]: { types: "ecommerce-cart-open", handler: rt(ht, je) },
        [kU]: { types: "ecommerce-cart-close", handler: rt(ht, je) },
        [wU]: {
          types: "click",
          handler: rt(
            ht,
            Tm((e, { clickCount: t }) => {
              KU(e) ? t === 1 && je(e) : je(e);
            })
          ),
        },
        [AU]: {
          types: "click",
          handler: rt(
            ht,
            Tm((e, { clickCount: t }) => {
              t === 2 && je(e);
            })
          ),
        },
        [SU]: (0, ze.default)({}, un, { types: "mousedown" }),
        [RU]: (0, ze.default)({}, un, { types: "mouseup" }),
        [xU]: {
          types: mm,
          handler: rt(
            ht,
            ym((e, t) => {
              t.elementHovered && je(e);
            })
          ),
        },
        [CU]: {
          types: mm,
          handler: rt(
            ht,
            ym((e, t) => {
              t.elementHovered || je(e);
            })
          ),
        },
        [XU]: {
          types: "mousemove mouseout scroll",
          handler: (
            {
              store: e,
              element: t,
              eventConfig: r,
              nativeEvent: n,
              eventStateKey: i,
            },
            o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
          ) => {
            let {
                basedOn: a,
                selectedAxis: s,
                continuousParameterGroupId: c,
                reverse: h,
                restingState: I = 0,
              } = r,
              {
                clientX: d = o.clientX,
                clientY: T = o.clientY,
                pageX: m = o.pageX,
                pageY: y = o.pageY,
              } = n,
              w = s === "X_AXIS",
              N = n.type === "mouseout",
              x = I / 100,
              P = c,
              S = !1;
            switch (a) {
              case jt.EventBasedOn.VIEWPORT: {
                x = w
                  ? Math.min(d, window.innerWidth) / window.innerWidth
                  : Math.min(T, window.innerHeight) / window.innerHeight;
                break;
              }
              case jt.EventBasedOn.PAGE: {
                let {
                  scrollLeft: W,
                  scrollTop: U,
                  scrollWidth: F,
                  scrollHeight: j,
                } = an();
                x = w ? Math.min(W + m, F) / F : Math.min(U + y, j) / j;
                break;
              }
              case jt.EventBasedOn.ELEMENT:
              default: {
                P = _m(i, c);
                let W = n.type.indexOf("mouse") === 0;
                if (W && ht({ element: t, nativeEvent: n }) !== !0) break;
                let U = t.getBoundingClientRect(),
                  { left: F, top: j, width: Z, height: J } = U;
                if (!W && !JU({ left: d, top: T }, U)) break;
                (S = !0), (x = w ? (d - F) / Z : (T - j) / J);
                break;
              }
            }
            return (
              N && (x > 1 - Om || x < Om) && (x = Math.round(x)),
              (a !== jt.EventBasedOn.ELEMENT || S || S !== o.elementHovered) &&
                ((x = h ? 1 - x : x),
                e.dispatch((0, Si.parameterChanged)(P, x))),
              { elementHovered: S, clientX: d, clientY: T, pageX: m, pageY: y }
            );
          },
        },
        [HU]: {
          types: ss,
          handler: ({ store: e, eventConfig: t }) => {
            let { continuousParameterGroupId: r, reverse: n } = t,
              { scrollTop: i, scrollHeight: o, clientHeight: a } = an(),
              s = i / (o - a);
            (s = n ? 1 - s : s), e.dispatch((0, Si.parameterChanged)(r, s));
          },
        },
        [WU]: {
          types: ss,
          handler: (
            { element: e, store: t, eventConfig: r, eventStateKey: n },
            i = { scrollPercent: 0 }
          ) => {
            let {
                scrollLeft: o,
                scrollTop: a,
                scrollWidth: s,
                scrollHeight: c,
                clientHeight: h,
              } = an(),
              {
                basedOn: I,
                selectedAxis: d,
                continuousParameterGroupId: T,
                startsEntering: m,
                startsExiting: y,
                addEndOffset: w,
                addStartOffset: N,
                addOffsetValue: x = 0,
                endOffsetValue: P = 0,
              } = r,
              S = d === "X_AXIS";
            if (I === jt.EventBasedOn.VIEWPORT) {
              let W = S ? o / s : a / c;
              return (
                W !== i.scrollPercent &&
                  t.dispatch((0, Si.parameterChanged)(T, W)),
                { scrollPercent: W }
              );
            } else {
              let W = _m(n, T),
                U = e.getBoundingClientRect(),
                F = (N ? x : 0) / 100,
                j = (w ? P : 0) / 100;
              (F = m ? F : 1 - F), (j = y ? j : 1 - j);
              let Z = U.top + Math.min(U.height * F, h),
                oe = U.top + U.height * j - Z,
                B = Math.min(h + oe, c),
                E = Math.min(Math.max(0, h - Z), B) / B;
              return (
                E !== i.scrollPercent &&
                  t.dispatch((0, Si.parameterChanged)(W, E)),
                { scrollPercent: E }
              );
            }
          },
        },
        [Am]: bm,
        [UU]: bm,
        [wm]: (0, ze.default)({}, us, {
          handler: Im((e, t) => {
            t.scrollingDown && je(e);
          }),
        }),
        [VU]: (0, ze.default)({}, us, {
          handler: Im((e, t) => {
            t.scrollingDown || je(e);
          }),
        }),
        [Sm]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: rt(sn, eV(je)),
        },
        [Rm]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: rt(sn, tV(je)),
        },
      };
    Ni.default = rV;
  });
  var cs = u((Nt) => {
    "use strict";
    var it = ut().default,
      nV = Qt().default;
    Object.defineProperty(Nt, "__esModule", { value: !0 });
    Nt.observeRequests = LV;
    Nt.startActionGroup = gs;
    Nt.startEngine = Di;
    Nt.stopActionGroup = hs;
    Nt.stopAllActionGroups = km;
    Nt.stopEngine = Mi;
    var iV = it(Gr()),
      oV = it($g()),
      aV = it(Na()),
      Ct = it(ri()),
      sV = it(gE()),
      uV = it(WE()),
      cV = it(BE()),
      lV = it(jE()),
      cn = it(ZE()),
      fV = it(o_()),
      nt = Be(),
      Fm = Ht(),
      Oe = yi(),
      Re = nV(l_()),
      dV = it(Pm()),
      pV = ["store", "computedStyle"],
      vV = Object.keys(nt.QuickEffectIds),
      ls = (e) => vV.includes(e),
      {
        COLON_DELIMITER: fs,
        BOUNDARY_SELECTOR: Li,
        HTML_ELEMENT: Gm,
        RENDER_GENERAL: hV,
        W_MOD_IX: Dm,
      } = nt.IX2EngineConstants,
      {
        getAffectedElements: qi,
        getElementId: gV,
        getDestinationValues: ds,
        observeStore: Kt,
        getInstanceId: EV,
        renderHTMLElement: _V,
        clearAllStyles: Xm,
        getMaxDurationItemIndex: mV,
        getComputedStyle: yV,
        getInstanceOrigin: IV,
        reduceListToGroup: TV,
        shouldNamespaceEventParameter: bV,
        getNamespacedParameterId: OV,
        shouldAllowMediaQuery: Pi,
        cleanupHTMLElement: wV,
        stringifyTarget: AV,
        mediaQueriesEqual: SV,
        shallowEqual: RV,
      } = Fm.IX2VanillaUtils,
      {
        isPluginType: ps,
        createPluginInstance: vs,
        getPluginDuration: xV,
      } = Fm.IX2VanillaPlugins,
      Mm = navigator.userAgent,
      CV = Mm.match(/iPad/i) || Mm.match(/iPhone/),
      NV = 12;
    function LV(e) {
      Kt({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: DV }),
        Kt({
          store: e,
          select: ({ ixRequest: t }) => t.playback,
          onChange: MV,
        }),
        Kt({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: FV }),
        Kt({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: GV });
    }
    function qV(e) {
      Kt({
        store: e,
        select: ({ ixSession: t }) => t.mediaQueryKey,
        onChange: () => {
          Mi(e),
            Xm({ store: e, elementApi: Re }),
            Di({ store: e, allowEvents: !0 }),
            Um();
        },
      });
    }
    function PV(e, t) {
      let r = Kt({
        store: e,
        select: ({ ixSession: n }) => n.tick,
        onChange: (n) => {
          t(n), r();
        },
      });
    }
    function DV({ rawData: e, defer: t }, r) {
      let n = () => {
        Di({ store: r, rawData: e, allowEvents: !0 }), Um();
      };
      t ? setTimeout(n, 0) : n();
    }
    function Um() {
      document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
    }
    function MV(e, t) {
      let {
          actionTypeId: r,
          actionListId: n,
          actionItemId: i,
          eventId: o,
          allowEvents: a,
          immediate: s,
          testManual: c,
          verbose: h = !0,
        } = e,
        { rawData: I } = e;
      if (n && i && I && s) {
        let d = I.actionLists[n];
        d && (I = TV({ actionList: d, actionItemId: i, rawData: I }));
      }
      if (
        (Di({ store: t, rawData: I, allowEvents: a, testManual: c }),
        (n && r === nt.ActionTypeConsts.GENERAL_START_ACTION) || ls(r))
      ) {
        hs({ store: t, actionListId: n }),
          Wm({ store: t, actionListId: n, eventId: o });
        let d = gs({
          store: t,
          eventId: o,
          actionListId: n,
          immediate: s,
          verbose: h,
        });
        h &&
          d &&
          t.dispatch(
            (0, Oe.actionListPlaybackChanged)({
              actionListId: n,
              isPlaying: !s,
            })
          );
      }
    }
    function FV({ actionListId: e }, t) {
      e ? hs({ store: t, actionListId: e }) : km({ store: t }), Mi(t);
    }
    function GV(e, t) {
      Mi(t), Xm({ store: t, elementApi: Re });
    }
    function Di({ store: e, rawData: t, allowEvents: r, testManual: n }) {
      let { ixSession: i } = e.getState();
      t && e.dispatch((0, Oe.rawDataImported)(t)),
        i.active ||
          (e.dispatch(
            (0, Oe.sessionInitialized)({
              hasBoundaryNodes: !!document.querySelector(Li),
              reducedMotion:
                document.body.hasAttribute("data-wf-ix-vacation") &&
                window.matchMedia("(prefers-reduced-motion)").matches,
            })
          ),
          r &&
            (BV(e),
            XV(),
            e.getState().ixSession.hasDefinedMediaQueries && qV(e)),
          e.dispatch((0, Oe.sessionStarted)()),
          UV(e, n));
    }
    function XV() {
      let { documentElement: e } = document;
      e.className.indexOf(Dm) === -1 && (e.className += ` ${Dm}`);
    }
    function UV(e, t) {
      let r = (n) => {
        let { ixSession: i, ixParameters: o } = e.getState();
        i.active &&
          (e.dispatch((0, Oe.animationFrameChanged)(n, o)),
          t ? PV(e, r) : requestAnimationFrame(r));
      };
      r(window.performance.now());
    }
    function Mi(e) {
      let { ixSession: t } = e.getState();
      if (t.active) {
        let { eventListeners: r } = t;
        r.forEach(VV), e.dispatch((0, Oe.sessionStopped)());
      }
    }
    function VV({ target: e, listenerParams: t }) {
      e.removeEventListener.apply(e, t);
    }
    function WV({
      store: e,
      eventStateKey: t,
      eventTarget: r,
      eventId: n,
      eventConfig: i,
      actionListId: o,
      parameterGroup: a,
      smoothing: s,
      restingValue: c,
    }) {
      let { ixData: h, ixSession: I } = e.getState(),
        { events: d } = h,
        T = d[n],
        { eventTypeId: m } = T,
        y = {},
        w = {},
        N = [],
        { continuousActionGroups: x } = a,
        { id: P } = a;
      bV(m, i) && (P = OV(t, P));
      let S = I.hasBoundaryNodes && r ? Re.getClosestElement(r, Li) : null;
      x.forEach((W) => {
        let { keyframe: U, actionItems: F } = W;
        F.forEach((j) => {
          let { actionTypeId: Z } = j,
            { target: J } = j.config;
          if (!J) return;
          let oe = J.boundaryMode ? S : null,
            B = AV(J) + fs + Z;
          if (((w[B] = kV(w[B], U, j)), !y[B])) {
            y[B] = !0;
            let { config: q } = j;
            qi({
              config: q,
              event: T,
              eventTarget: r,
              elementRoot: oe,
              elementApi: Re,
            }).forEach((E) => {
              N.push({ element: E, key: B });
            });
          }
        });
      }),
        N.forEach(({ element: W, key: U }) => {
          let F = w[U],
            j = (0, Ct.default)(F, "[0].actionItems[0]", {}),
            { actionTypeId: Z } = j,
            J = ps(Z) ? vs(Z)(W, j) : null,
            oe = ds({ element: W, actionItem: j, elementApi: Re }, J);
          Es({
            store: e,
            element: W,
            eventId: n,
            actionListId: o,
            actionItem: j,
            destination: oe,
            continuous: !0,
            parameterId: P,
            actionGroups: F,
            smoothing: s,
            restingValue: c,
            pluginInstance: J,
          });
        });
    }
    function kV(e = [], t, r) {
      let n = [...e],
        i;
      return (
        n.some((o, a) => (o.keyframe === t ? ((i = a), !0) : !1)),
        i == null && ((i = n.length), n.push({ keyframe: t, actionItems: [] })),
        n[i].actionItems.push(r),
        n
      );
    }
    function BV(e) {
      let { ixData: t } = e.getState(),
        { eventTypeMap: r } = t;
      Vm(e),
        (0, cn.default)(r, (i, o) => {
          let a = dV.default[o];
          if (!a) {
            console.warn(`IX2 event type not configured: ${o}`);
            return;
          }
          QV({ logic: a, store: e, events: i });
        });
      let { ixSession: n } = e.getState();
      n.eventListeners.length && jV(e);
    }
    var HV = ["resize", "orientationchange"];
    function jV(e) {
      let t = () => {
        Vm(e);
      };
      HV.forEach((r) => {
        window.addEventListener(r, t),
          e.dispatch((0, Oe.eventListenerAdded)(window, [r, t]));
      }),
        t();
    }
    function Vm(e) {
      let { ixSession: t, ixData: r } = e.getState(),
        n = window.innerWidth;
      if (n !== t.viewportWidth) {
        let { mediaQueries: i } = r;
        e.dispatch((0, Oe.viewportWidthChanged)({ width: n, mediaQueries: i }));
      }
    }
    var KV = (e, t) => (0, uV.default)((0, lV.default)(e, t), cV.default),
      zV = (e, t) => {
        (0, cn.default)(e, (r, n) => {
          r.forEach((i, o) => {
            let a = n + fs + o;
            t(i, n, a);
          });
        });
      },
      YV = (e) => {
        let t = { target: e.target, targets: e.targets };
        return qi({ config: t, elementApi: Re });
      };
    function QV({ logic: e, store: t, events: r }) {
      $V(r);
      let { types: n, handler: i } = e,
        { ixData: o } = t.getState(),
        { actionLists: a } = o,
        s = KV(r, YV);
      if (!(0, sV.default)(s)) return;
      (0, cn.default)(s, (d, T) => {
        let m = r[T],
          { action: y, id: w, mediaQueries: N = o.mediaQueryKeys } = m,
          { actionListId: x } = y.config;
        SV(N, o.mediaQueryKeys) || t.dispatch((0, Oe.mediaQueriesDefined)()),
          y.actionTypeId === nt.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION &&
            (Array.isArray(m.config) ? m.config : [m.config]).forEach((S) => {
              let { continuousParameterGroupId: W } = S,
                U = (0, Ct.default)(a, `${x}.continuousParameterGroups`, []),
                F = (0, aV.default)(U, ({ id: J }) => J === W),
                j = (S.smoothing || 0) / 100,
                Z = (S.restingState || 0) / 100;
              F &&
                d.forEach((J, oe) => {
                  let B = w + fs + oe;
                  WV({
                    store: t,
                    eventStateKey: B,
                    eventTarget: J,
                    eventId: w,
                    eventConfig: S,
                    actionListId: x,
                    parameterGroup: F,
                    smoothing: j,
                    restingValue: Z,
                  });
                });
            }),
          (y.actionTypeId === nt.ActionTypeConsts.GENERAL_START_ACTION ||
            ls(y.actionTypeId)) &&
            Wm({ store: t, actionListId: x, eventId: w });
      });
      let c = (d) => {
          let { ixSession: T } = t.getState();
          zV(s, (m, y, w) => {
            let N = r[y],
              x = T.eventState[w],
              { action: P, mediaQueries: S = o.mediaQueryKeys } = N;
            if (!Pi(S, T.mediaQueryKey)) return;
            let W = (U = {}) => {
              let F = i(
                {
                  store: t,
                  element: m,
                  event: N,
                  eventConfig: U,
                  nativeEvent: d,
                  eventStateKey: w,
                },
                x
              );
              RV(F, x) || t.dispatch((0, Oe.eventStateChanged)(w, F));
            };
            P.actionTypeId === nt.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
              ? (Array.isArray(N.config) ? N.config : [N.config]).forEach(W)
              : W();
          });
        },
        h = (0, fV.default)(c, NV),
        I = ({ target: d = document, types: T, throttle: m }) => {
          T.split(" ")
            .filter(Boolean)
            .forEach((y) => {
              let w = m ? h : c;
              d.addEventListener(y, w),
                t.dispatch((0, Oe.eventListenerAdded)(d, [y, w]));
            });
        };
      Array.isArray(n) ? n.forEach(I) : typeof n == "string" && I(e);
    }
    function $V(e) {
      if (!CV) return;
      let t = {},
        r = "";
      for (let n in e) {
        let { eventTypeId: i, target: o } = e[n],
          a = Re.getQuerySelector(o);
        t[a] ||
          ((i === nt.EventTypeConsts.MOUSE_CLICK ||
            i === nt.EventTypeConsts.MOUSE_SECOND_CLICK) &&
            ((t[a] = !0),
            (r += a + "{cursor: pointer;touch-action: manipulation;}")));
      }
      if (r) {
        let n = document.createElement("style");
        (n.textContent = r), document.body.appendChild(n);
      }
    }
    function Wm({ store: e, actionListId: t, eventId: r }) {
      let { ixData: n, ixSession: i } = e.getState(),
        { actionLists: o, events: a } = n,
        s = a[r],
        c = o[t];
      if (c && c.useFirstGroupAsInitialState) {
        let h = (0, Ct.default)(c, "actionItemGroups[0].actionItems", []),
          I = (0, Ct.default)(s, "mediaQueries", n.mediaQueryKeys);
        if (!Pi(I, i.mediaQueryKey)) return;
        h.forEach((d) => {
          var T;
          let { config: m, actionTypeId: y } = d,
            w =
              (m == null || (T = m.target) === null || T === void 0
                ? void 0
                : T.useEventTarget) === !0
                ? { target: s.target, targets: s.targets }
                : m,
            N = qi({ config: w, event: s, elementApi: Re }),
            x = ps(y);
          N.forEach((P) => {
            let S = x ? vs(y)(P, d) : null;
            Es({
              destination: ds({ element: P, actionItem: d, elementApi: Re }, S),
              immediate: !0,
              store: e,
              element: P,
              eventId: r,
              actionItem: d,
              actionListId: t,
              pluginInstance: S,
            });
          });
        });
      }
    }
    function km({ store: e }) {
      let { ixInstances: t } = e.getState();
      (0, cn.default)(t, (r) => {
        if (!r.continuous) {
          let { actionListId: n, verbose: i } = r;
          _s(r, e),
            i &&
              e.dispatch(
                (0, Oe.actionListPlaybackChanged)({
                  actionListId: n,
                  isPlaying: !1,
                })
              );
        }
      });
    }
    function hs({
      store: e,
      eventId: t,
      eventTarget: r,
      eventStateKey: n,
      actionListId: i,
    }) {
      let { ixInstances: o, ixSession: a } = e.getState(),
        s = a.hasBoundaryNodes && r ? Re.getClosestElement(r, Li) : null;
      (0, cn.default)(o, (c) => {
        let h = (0, Ct.default)(c, "actionItem.config.target.boundaryMode"),
          I = n ? c.eventStateKey === n : !0;
        if (c.actionListId === i && c.eventId === t && I) {
          if (s && h && !Re.elementContains(s, c.element)) return;
          _s(c, e),
            c.verbose &&
              e.dispatch(
                (0, Oe.actionListPlaybackChanged)({
                  actionListId: i,
                  isPlaying: !1,
                })
              );
        }
      });
    }
    function gs({
      store: e,
      eventId: t,
      eventTarget: r,
      eventStateKey: n,
      actionListId: i,
      groupIndex: o = 0,
      immediate: a,
      verbose: s,
    }) {
      var c;
      let { ixData: h, ixSession: I } = e.getState(),
        { events: d } = h,
        T = d[t] || {},
        { mediaQueries: m = h.mediaQueryKeys } = T,
        y = (0, Ct.default)(h, `actionLists.${i}`, {}),
        { actionItemGroups: w, useFirstGroupAsInitialState: N } = y;
      if (!w || !w.length) return !1;
      o >= w.length && (0, Ct.default)(T, "config.loop") && (o = 0),
        o === 0 && N && o++;
      let P =
          (o === 0 || (o === 1 && N)) &&
          ls((c = T.action) === null || c === void 0 ? void 0 : c.actionTypeId)
            ? T.config.delay
            : void 0,
        S = (0, Ct.default)(w, [o, "actionItems"], []);
      if (!S.length || !Pi(m, I.mediaQueryKey)) return !1;
      let W = I.hasBoundaryNodes && r ? Re.getClosestElement(r, Li) : null,
        U = mV(S),
        F = !1;
      return (
        S.forEach((j, Z) => {
          let { config: J, actionTypeId: oe } = j,
            B = ps(oe),
            { target: q } = J;
          if (!q) return;
          let E = q.boundaryMode ? W : null;
          qi({
            config: J,
            event: T,
            eventTarget: r,
            elementRoot: E,
            elementApi: Re,
          }).forEach((R, G) => {
            let Q = B ? vs(oe)(R, j) : null,
              ne = B ? xV(oe)(R, j) : null;
            F = !0;
            let X = U === Z && G === 0,
              V = yV({ element: R, actionItem: j }),
              v = ds({ element: R, actionItem: j, elementApi: Re }, Q);
            Es({
              store: e,
              element: R,
              actionItem: j,
              eventId: t,
              eventTarget: r,
              eventStateKey: n,
              actionListId: i,
              groupIndex: o,
              isCarrier: X,
              computedStyle: V,
              destination: v,
              immediate: a,
              verbose: s,
              pluginInstance: Q,
              pluginDuration: ne,
              instanceDelay: P,
            });
          });
        }),
        F
      );
    }
    function Es(e) {
      var t;
      let { store: r, computedStyle: n } = e,
        i = (0, oV.default)(e, pV),
        {
          element: o,
          actionItem: a,
          immediate: s,
          pluginInstance: c,
          continuous: h,
          restingValue: I,
          eventId: d,
        } = i,
        T = !h,
        m = EV(),
        { ixElements: y, ixSession: w, ixData: N } = r.getState(),
        x = gV(y, o),
        { refState: P } = y[x] || {},
        S = Re.getRefType(o),
        W = w.reducedMotion && nt.ReducedMotionTypes[a.actionTypeId],
        U;
      if (W && h)
        switch (
          (t = N.events[d]) === null || t === void 0 ? void 0 : t.eventTypeId
        ) {
          case nt.EventTypeConsts.MOUSE_MOVE:
          case nt.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
            U = I;
            break;
          default:
            U = 0.5;
            break;
        }
      let F = IV(o, P, n, a, Re, c);
      if (
        (r.dispatch(
          (0, Oe.instanceAdded)(
            (0, iV.default)(
              {
                instanceId: m,
                elementId: x,
                origin: F,
                refType: S,
                skipMotion: W,
                skipToValue: U,
              },
              i
            )
          )
        ),
        Bm(document.body, "ix2-animation-started", m),
        s)
      ) {
        ZV(r, m);
        return;
      }
      Kt({ store: r, select: ({ ixInstances: j }) => j[m], onChange: Hm }),
        T && r.dispatch((0, Oe.instanceStarted)(m, w.tick));
    }
    function _s(e, t) {
      Bm(document.body, "ix2-animation-stopping", {
        instanceId: e.id,
        state: t.getState(),
      });
      let { elementId: r, actionItem: n } = e,
        { ixElements: i } = t.getState(),
        { ref: o, refType: a } = i[r] || {};
      a === Gm && wV(o, n, Re), t.dispatch((0, Oe.instanceRemoved)(e.id));
    }
    function Bm(e, t, r) {
      let n = document.createEvent("CustomEvent");
      n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n);
    }
    function ZV(e, t) {
      let { ixParameters: r } = e.getState();
      e.dispatch((0, Oe.instanceStarted)(t, 0)),
        e.dispatch((0, Oe.animationFrameChanged)(performance.now(), r));
      let { ixInstances: n } = e.getState();
      Hm(n[t], e);
    }
    function Hm(e, t) {
      let {
          active: r,
          continuous: n,
          complete: i,
          elementId: o,
          actionItem: a,
          actionTypeId: s,
          renderType: c,
          current: h,
          groupIndex: I,
          eventId: d,
          eventTarget: T,
          eventStateKey: m,
          actionListId: y,
          isCarrier: w,
          styleProp: N,
          verbose: x,
          pluginInstance: P,
        } = e,
        { ixData: S, ixSession: W } = t.getState(),
        { events: U } = S,
        F = U[d] || {},
        { mediaQueries: j = S.mediaQueryKeys } = F;
      if (Pi(j, W.mediaQueryKey) && (n || r || i)) {
        if (h || (c === hV && i)) {
          t.dispatch((0, Oe.elementStateChanged)(o, s, h, a));
          let { ixElements: Z } = t.getState(),
            { ref: J, refType: oe, refState: B } = Z[o] || {},
            q = B && B[s];
          switch (oe) {
            case Gm: {
              _V(J, B, q, d, a, N, Re, c, P);
              break;
            }
          }
        }
        if (i) {
          if (w) {
            let Z = gs({
              store: t,
              eventId: d,
              eventTarget: T,
              eventStateKey: m,
              actionListId: y,
              groupIndex: I + 1,
              verbose: x,
            });
            x &&
              !Z &&
              t.dispatch(
                (0, Oe.actionListPlaybackChanged)({
                  actionListId: y,
                  isPlaying: !1,
                })
              );
          }
          _s(e, t);
        }
      }
    }
  });
  var Km = u((It) => {
    "use strict";
    var JV = Qt().default,
      eW = ut().default;
    Object.defineProperty(It, "__esModule", { value: !0 });
    It.actions = void 0;
    It.destroy = jm;
    It.init = oW;
    It.setEnv = iW;
    It.store = void 0;
    Pl();
    var tW = Qo(),
      rW = eW(Qg()),
      ms = cs(),
      nW = JV(yi());
    It.actions = nW;
    var Fi = (0, tW.createStore)(rW.default);
    It.store = Fi;
    function iW(e) {
      e() && (0, ms.observeRequests)(Fi);
    }
    function oW(e) {
      jm(), (0, ms.startEngine)({ store: Fi, rawData: e, allowEvents: !0 });
    }
    function jm() {
      (0, ms.stopEngine)(Fi);
    }
  });
  var $m = u((sK, Qm) => {
    var zm = ke(),
      Ym = Km();
    Ym.setEnv(zm.env);
    zm.define(
      "ix2",
      (Qm.exports = function () {
        return Ym;
      })
    );
  });
  var Jm = u((uK, Zm) => {
    var Or = ke();
    Or.define(
      "links",
      (Zm.exports = function (e, t) {
        var r = {},
          n = e(window),
          i,
          o = Or.env(),
          a = window.location,
          s = document.createElement("a"),
          c = "w--current",
          h = /index\.(html|php)$/,
          I = /\/$/,
          d,
          T;
        r.ready = r.design = r.preview = m;
        function m() {
          (i = o && Or.env("design")),
            (T = Or.env("slug") || a.pathname || ""),
            Or.scroll.off(w),
            (d = []);
          for (var x = document.links, P = 0; P < x.length; ++P) y(x[P]);
          d.length && (Or.scroll.on(w), w());
        }
        function y(x) {
          var P =
            (i && x.getAttribute("href-disabled")) || x.getAttribute("href");
          if (((s.href = P), !(P.indexOf(":") >= 0))) {
            var S = e(x);
            if (
              s.hash.length > 1 &&
              s.host + s.pathname === a.host + a.pathname
            ) {
              if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
              var W = e(s.hash);
              W.length && d.push({ link: S, sec: W, active: !1 });
              return;
            }
            if (!(P === "#" || P === "")) {
              var U = s.href === a.href || P === T || (h.test(P) && I.test(T));
              N(S, c, U);
            }
          }
        }
        function w() {
          var x = n.scrollTop(),
            P = n.height();
          t.each(d, function (S) {
            var W = S.link,
              U = S.sec,
              F = U.offset().top,
              j = U.outerHeight(),
              Z = P * 0.5,
              J = U.is(":visible") && F + j - Z >= x && F + Z <= x + P;
            S.active !== J && ((S.active = J), N(W, c, J));
          });
        }
        function N(x, P, S) {
          var W = x.hasClass(P);
          (S && W) || (!S && !W) || (S ? x.addClass(P) : x.removeClass(P));
        }
        return r;
      })
    );
  });
  var ty = u((cK, ey) => {
    var Gi = ke();
    Gi.define(
      "scroll",
      (ey.exports = function (e) {
        var t = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll",
          },
          r = window.location,
          n = y() ? null : window.history,
          i = e(window),
          o = e(document),
          a = e(document.body),
          s =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (q) {
              window.setTimeout(q, 15);
            },
          c = Gi.env("editor") ? ".w-editor-body" : "body",
          h =
            "header, " +
            c +
            " > .header, " +
            c +
            " > .w-nav:not([data-no-scroll])",
          I = 'a[href="#"]',
          d = 'a[href*="#"]:not(.w-tab-link):not(' + I + ")",
          T = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          m = document.createElement("style");
        m.appendChild(document.createTextNode(T));
        function y() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var w = /^#[a-zA-Z0-9][\w:.-]*$/;
        function N(q) {
          return w.test(q.hash) && q.host + q.pathname === r.host + r.pathname;
        }
        let x =
          typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function P() {
          return (
            document.body.getAttribute("data-wf-scroll-motion") === "none" ||
            x.matches
          );
        }
        function S(q, E) {
          var D;
          switch (E) {
            case "add":
              (D = q.attr("tabindex")),
                D
                  ? q.attr("data-wf-tabindex-swap", D)
                  : q.attr("tabindex", "-1");
              break;
            case "remove":
              (D = q.attr("data-wf-tabindex-swap")),
                D
                  ? (q.attr("tabindex", D),
                    q.removeAttr("data-wf-tabindex-swap"))
                  : q.removeAttr("tabindex");
              break;
          }
          q.toggleClass("wf-force-outline-none", E === "add");
        }
        function W(q) {
          var E = q.currentTarget;
          if (
            !(
              Gi.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(E.className))
            )
          ) {
            var D = N(E) ? E.hash : "";
            if (D !== "") {
              var R = e(D);
              R.length &&
                (q && (q.preventDefault(), q.stopPropagation()),
                U(D, q),
                window.setTimeout(
                  function () {
                    F(R, function () {
                      S(R, "add"),
                        R.get(0).focus({ preventScroll: !0 }),
                        S(R, "remove");
                    });
                  },
                  q ? 0 : 300
                ));
            }
          }
        }
        function U(q) {
          if (
            r.hash !== q &&
            n &&
            n.pushState &&
            !(Gi.env.chrome && r.protocol === "file:")
          ) {
            var E = n.state && n.state.hash;
            E !== q && n.pushState({ hash: q }, "", q);
          }
        }
        function F(q, E) {
          var D = i.scrollTop(),
            R = j(q);
          if (D !== R) {
            var G = Z(q, D, R),
              Q = Date.now(),
              ne = function () {
                var X = Date.now() - Q;
                window.scroll(0, J(D, R, X, G)),
                  X <= G ? s(ne) : typeof E == "function" && E();
              };
            s(ne);
          }
        }
        function j(q) {
          var E = e(h),
            D = E.css("position") === "fixed" ? E.outerHeight() : 0,
            R = q.offset().top - D;
          if (q.data("scroll") === "mid") {
            var G = i.height() - D,
              Q = q.outerHeight();
            Q < G && (R -= Math.round((G - Q) / 2));
          }
          return R;
        }
        function Z(q, E, D) {
          if (P()) return 0;
          var R = 1;
          return (
            a.add(q).each(function (G, Q) {
              var ne = parseFloat(Q.getAttribute("data-scroll-time"));
              !isNaN(ne) && ne >= 0 && (R = ne);
            }),
            (472.143 * Math.log(Math.abs(E - D) + 125) - 2e3) * R
          );
        }
        function J(q, E, D, R) {
          return D > R ? E : q + (E - q) * oe(D / R);
        }
        function oe(q) {
          return q < 0.5
            ? 4 * q * q * q
            : (q - 1) * (2 * q - 2) * (2 * q - 2) + 1;
        }
        function B() {
          var { WF_CLICK_EMPTY: q, WF_CLICK_SCROLL: E } = t;
          o.on(E, d, W),
            o.on(q, I, function (D) {
              D.preventDefault();
            }),
            document.head.insertBefore(m, document.head.firstChild);
        }
        return { ready: B };
      })
    );
  });
  var ny = u((lK, ry) => {
    var aW = ke();
    aW.define(
      "touch",
      (ry.exports = function (e) {
        var t = {},
          r = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (o) {
            return (
              (o = typeof o == "string" ? e(o).get(0) : o), o ? new n(o) : null
            );
          });
        function n(o) {
          var a = !1,
            s = !1,
            c = Math.min(Math.round(window.innerWidth * 0.04), 40),
            h,
            I;
          o.addEventListener("touchstart", d, !1),
            o.addEventListener("touchmove", T, !1),
            o.addEventListener("touchend", m, !1),
            o.addEventListener("touchcancel", y, !1),
            o.addEventListener("mousedown", d, !1),
            o.addEventListener("mousemove", T, !1),
            o.addEventListener("mouseup", m, !1),
            o.addEventListener("mouseout", y, !1);
          function d(N) {
            var x = N.touches;
            (x && x.length > 1) ||
              ((a = !0),
              x ? ((s = !0), (h = x[0].clientX)) : (h = N.clientX),
              (I = h));
          }
          function T(N) {
            if (a) {
              if (s && N.type === "mousemove") {
                N.preventDefault(), N.stopPropagation();
                return;
              }
              var x = N.touches,
                P = x ? x[0].clientX : N.clientX,
                S = P - I;
              (I = P),
                Math.abs(S) > c &&
                  r &&
                  String(r()) === "" &&
                  (i("swipe", N, { direction: S > 0 ? "right" : "left" }), y());
            }
          }
          function m(N) {
            if (a && ((a = !1), s && N.type === "mouseup")) {
              N.preventDefault(), N.stopPropagation(), (s = !1);
              return;
            }
          }
          function y() {
            a = !1;
          }
          function w() {
            o.removeEventListener("touchstart", d, !1),
              o.removeEventListener("touchmove", T, !1),
              o.removeEventListener("touchend", m, !1),
              o.removeEventListener("touchcancel", y, !1),
              o.removeEventListener("mousedown", d, !1),
              o.removeEventListener("mousemove", T, !1),
              o.removeEventListener("mouseup", m, !1),
              o.removeEventListener("mouseout", y, !1),
              (o = null);
          }
          this.destroy = w;
        }
        function i(o, a, s) {
          var c = e.Event(o, { originalEvent: a });
          e(a.target).trigger(c, s);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  var oy = u((fK, iy) => {
    var ys = ke();
    ys.define(
      "forms",
      (iy.exports = function (e, t) {
        var r = {},
          n = e(document),
          i,
          o = window.location,
          a = window.XDomainRequest && !window.atob,
          s = ".w-form",
          c,
          h = /e(-)?mail/i,
          I = /^\S+@\S+$/,
          d = window.alert,
          T = ys.env(),
          m,
          y,
          w,
          N = /list-manage[1-9]?.com/i,
          x = t.debounce(function () {
            d(
              "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
            );
          }, 100);
        r.ready =
          r.design =
          r.preview =
            function () {
              P(), !T && !m && W();
            };
        function P() {
          (c = e("html").attr("data-wf-site")),
            (y = "https://webflow.com/api/v1/form/" + c),
            a &&
              y.indexOf("https://webflow.com") >= 0 &&
              (y = y.replace(
                "https://webflow.com",
                "https://formdata.webflow.com"
              )),
            (w = `${y}/signFile`),
            (i = e(s + " form")),
            i.length && i.each(S);
        }
        function S(X, V) {
          var v = e(V),
            f = e.data(V, s);
          f || (f = e.data(V, s, { form: v })), U(f);
          var p = v.closest("div.w-form");
          (f.done = p.find("> .w-form-done")),
            (f.fail = p.find("> .w-form-fail")),
            (f.fileUploads = p.find(".w-file-upload")),
            f.fileUploads.each(function (K) {
              G(K, f);
            });
          var g =
            f.form.attr("aria-label") || f.form.attr("data-name") || "Form";
          f.done.attr("aria-label") || f.form.attr("aria-label", g),
            f.done.attr("tabindex", "-1"),
            f.done.attr("role", "region"),
            f.done.attr("aria-label") ||
              f.done.attr("aria-label", g + " success"),
            f.fail.attr("tabindex", "-1"),
            f.fail.attr("role", "region"),
            f.fail.attr("aria-label") ||
              f.fail.attr("aria-label", g + " failure");
          var k = (f.action = v.attr("action"));
          if (
            ((f.handler = null),
            (f.redirect = v.attr("data-redirect")),
            N.test(k))
          ) {
            f.handler = E;
            return;
          }
          if (!k) {
            if (c) {
              f.handler = q;
              return;
            }
            x();
          }
        }
        function W() {
          (m = !0),
            n.on("submit", s + " form", function (K) {
              var $ = e.data(this, s);
              $.handler && (($.evt = K), $.handler($));
            });
          let X = ".w-checkbox-input",
            V = ".w-radio-input",
            v = "w--redirected-checked",
            f = "w--redirected-focus",
            p = "w--redirected-focus-visible",
            g = ":focus-visible, [data-wf-focus-visible]",
            k = [
              ["checkbox", X],
              ["radio", V],
            ];
          n.on(
            "change",
            s + ' form input[type="checkbox"]:not(' + X + ")",
            (K) => {
              e(K.target).siblings(X).toggleClass(v);
            }
          ),
            n.on("change", s + ' form input[type="radio"]', (K) => {
              e(`input[name="${K.target.name}"]:not(${X})`).map((te, he) =>
                e(he).siblings(V).removeClass(v)
              );
              let $ = e(K.target);
              $.hasClass("w-radio-input") || $.siblings(V).addClass(v);
            }),
            k.forEach(([K, $]) => {
              n.on(
                "focus",
                s + ` form input[type="${K}"]:not(` + $ + ")",
                (te) => {
                  e(te.target).siblings($).addClass(f),
                    e(te.target).filter(g).siblings($).addClass(p);
                }
              ),
                n.on(
                  "blur",
                  s + ` form input[type="${K}"]:not(` + $ + ")",
                  (te) => {
                    e(te.target).siblings($).removeClass(`${f} ${p}`);
                  }
                );
            });
        }
        function U(X) {
          var V = (X.btn = X.form.find(':input[type="submit"]'));
          (X.wait = X.btn.attr("data-wait") || null),
            (X.success = !1),
            V.prop("disabled", !1),
            X.label && V.val(X.label);
        }
        function F(X) {
          var V = X.btn,
            v = X.wait;
          V.prop("disabled", !0), v && ((X.label = V.val()), V.val(v));
        }
        function j(X, V) {
          var v = null;
          return (
            (V = V || {}),
            X.find(':input:not([type="submit"]):not([type="file"])').each(
              function (f, p) {
                var g = e(p),
                  k = g.attr("type"),
                  K =
                    g.attr("data-name") || g.attr("name") || "Field " + (f + 1),
                  $ = g.val();
                if (k === "checkbox") $ = g.is(":checked");
                else if (k === "radio") {
                  if (V[K] === null || typeof V[K] == "string") return;
                  $ =
                    X.find(
                      'input[name="' + g.attr("name") + '"]:checked'
                    ).val() || null;
                }
                typeof $ == "string" && ($ = e.trim($)),
                  (V[K] = $),
                  (v = v || B(g, k, K, $));
              }
            ),
            v
          );
        }
        function Z(X) {
          var V = {};
          return (
            X.find(':input[type="file"]').each(function (v, f) {
              var p = e(f),
                g = p.attr("data-name") || p.attr("name") || "File " + (v + 1),
                k = p.attr("data-value");
              typeof k == "string" && (k = e.trim(k)), (V[g] = k);
            }),
            V
          );
        }
        let J = { _mkto_trk: "marketo" };
        function oe() {
          return document.cookie.split("; ").reduce(function (V, v) {
            let f = v.split("="),
              p = f[0];
            if (p in J) {
              let g = J[p],
                k = f.slice(1).join("=");
              V[g] = k;
            }
            return V;
          }, {});
        }
        function B(X, V, v, f) {
          var p = null;
          return (
            V === "password"
              ? (p = "Passwords cannot be submitted.")
              : X.attr("required")
              ? f
                ? h.test(X.attr("type")) &&
                  (I.test(f) ||
                    (p = "Please enter a valid email address for: " + v))
                : (p = "Please fill out the required field: " + v)
              : v === "g-recaptcha-response" &&
                !f &&
                (p = "Please confirm you\u2019re not a robot."),
            p
          );
        }
        function q(X) {
          R(X), D(X);
        }
        function E(X) {
          U(X);
          var V = X.form,
            v = {};
          if (/^https/.test(o.href) && !/^https/.test(X.action)) {
            V.attr("method", "post");
            return;
          }
          R(X);
          var f = j(V, v);
          if (f) return d(f);
          F(X);
          var p;
          t.each(v, function ($, te) {
            h.test(te) && (v.EMAIL = $),
              /^((full[ _-]?)?name)$/i.test(te) && (p = $),
              /^(first[ _-]?name)$/i.test(te) && (v.FNAME = $),
              /^(last[ _-]?name)$/i.test(te) && (v.LNAME = $);
          }),
            p &&
              !v.FNAME &&
              ((p = p.split(" ")),
              (v.FNAME = p[0]),
              (v.LNAME = v.LNAME || p[1]));
          var g = X.action.replace("/post?", "/post-json?") + "&c=?",
            k = g.indexOf("u=") + 2;
          k = g.substring(k, g.indexOf("&", k));
          var K = g.indexOf("id=") + 3;
          (K = g.substring(K, g.indexOf("&", K))),
            (v["b_" + k + "_" + K] = ""),
            e
              .ajax({ url: g, data: v, dataType: "jsonp" })
              .done(function ($) {
                (X.success = $.result === "success" || /already/.test($.msg)),
                  X.success || console.info("MailChimp error: " + $.msg),
                  D(X);
              })
              .fail(function () {
                D(X);
              });
        }
        function D(X) {
          var V = X.form,
            v = X.redirect,
            f = X.success;
          if (f && v) {
            ys.location(v);
            return;
          }
          X.done.toggle(f),
            X.fail.toggle(!f),
            f ? X.done.focus() : X.fail.focus(),
            V.toggle(!f),
            U(X);
        }
        function R(X) {
          X.evt && X.evt.preventDefault(), (X.evt = null);
        }
        function G(X, V) {
          if (!V.fileUploads || !V.fileUploads[X]) return;
          var v,
            f = e(V.fileUploads[X]),
            p = f.find("> .w-file-upload-default"),
            g = f.find("> .w-file-upload-uploading"),
            k = f.find("> .w-file-upload-success"),
            K = f.find("> .w-file-upload-error"),
            $ = p.find(".w-file-upload-input"),
            te = p.find(".w-file-upload-label"),
            he = te.children(),
            ae = K.find(".w-file-upload-error-msg"),
            _ = k.find(".w-file-upload-file"),
            H = k.find(".w-file-remove-link"),
            ee = _.find(".w-file-upload-file-name"),
            z = ae.attr("data-w-size-error"),
            pe = ae.attr("data-w-type-error"),
            xe = ae.attr("data-w-generic-error");
          if (
            (T ||
              te.on("click keydown", function (O) {
                (O.type === "keydown" && O.which !== 13 && O.which !== 32) ||
                  (O.preventDefault(), $.click());
              }),
            te.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
            H.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
            T)
          )
            $.on("click", function (O) {
              O.preventDefault();
            }),
              te.on("click", function (O) {
                O.preventDefault();
              }),
              he.on("click", function (O) {
                O.preventDefault();
              });
          else {
            H.on("click keydown", function (O) {
              if (O.type === "keydown") {
                if (O.which !== 13 && O.which !== 32) return;
                O.preventDefault();
              }
              $.removeAttr("data-value"),
                $.val(""),
                ee.html(""),
                p.toggle(!0),
                k.toggle(!1),
                te.focus();
            }),
              $.on("change", function (O) {
                (v = O.target && O.target.files && O.target.files[0]),
                  v &&
                    (p.toggle(!1),
                    K.toggle(!1),
                    g.toggle(!0),
                    g.focus(),
                    ee.text(v.name),
                    C() || F(V),
                    (V.fileUploads[X].uploading = !0),
                    Q(v, b));
              });
            var Me = te.outerHeight();
            $.height(Me), $.width(1);
          }
          function l(O) {
            var L = O.responseJSON && O.responseJSON.msg,
              re = xe;
            typeof L == "string" && L.indexOf("InvalidFileTypeError") === 0
              ? (re = pe)
              : typeof L == "string" &&
                L.indexOf("MaxFileSizeError") === 0 &&
                (re = z),
              ae.text(re),
              $.removeAttr("data-value"),
              $.val(""),
              g.toggle(!1),
              p.toggle(!0),
              K.toggle(!0),
              K.focus(),
              (V.fileUploads[X].uploading = !1),
              C() || U(V);
          }
          function b(O, L) {
            if (O) return l(O);
            var re = L.fileName,
              se = L.postData,
              _e = L.fileId,
              Y = L.s3Url;
            $.attr("data-value", _e), ne(Y, se, v, re, A);
          }
          function A(O) {
            if (O) return l(O);
            g.toggle(!1),
              k.css("display", "inline-block"),
              k.focus(),
              (V.fileUploads[X].uploading = !1),
              C() || U(V);
          }
          function C() {
            var O = (V.fileUploads && V.fileUploads.toArray()) || [];
            return O.some(function (L) {
              return L.uploading;
            });
          }
        }
        function Q(X, V) {
          var v = new URLSearchParams({ name: X.name, size: X.size });
          e.ajax({ type: "GET", url: `${w}?${v}`, crossDomain: !0 })
            .done(function (f) {
              V(null, f);
            })
            .fail(function (f) {
              V(f);
            });
        }
        function ne(X, V, v, f, p) {
          var g = new FormData();
          for (var k in V) g.append(k, V[k]);
          g.append("file", v, f),
            e
              .ajax({
                type: "POST",
                url: X,
                data: g,
                processData: !1,
                contentType: !1,
              })
              .done(function () {
                p(null);
              })
              .fail(function (K) {
                p(K);
              });
        }
        return r;
      })
    );
  });
  var uy = u((dK, sy) => {
    var Is = ke(),
      ay = "w-condition-invisible",
      sW = "." + ay;
    function uW(e) {
      return e.filter(function (t) {
        return !fn(t);
      });
    }
    function fn(e) {
      return !!(e.$el && e.$el.closest(sW).length);
    }
    function Ts(e, t) {
      for (var r = e; r >= 0; r--) if (!fn(t[r])) return r;
      return -1;
    }
    function bs(e, t) {
      for (var r = e; r <= t.length - 1; r++) if (!fn(t[r])) return r;
      return -1;
    }
    function cW(e, t) {
      return Ts(e - 1, t) === -1;
    }
    function lW(e, t) {
      return bs(e + 1, t) === -1;
    }
    function ln(e, t) {
      e.attr("aria-label") || e.attr("aria-label", t);
    }
    function fW(e, t, r, n) {
      var i = r.tram,
        o = Array.isArray,
        a = "w-lightbox",
        s = a + "-",
        c = /(^|\s+)/g,
        h = [],
        I,
        d,
        T,
        m = [];
      function y(f, p) {
        return (
          (h = o(f) ? f : [f]),
          d || y.build(),
          uW(h).length > 1 &&
            ((d.items = d.empty),
            h.forEach(function (g, k) {
              var K = V("thumbnail"),
                $ = V("item")
                  .prop("tabIndex", 0)
                  .attr("aria-controls", "w-lightbox-view")
                  .attr("role", "tab")
                  .append(K);
              ln($, `show item ${k + 1} of ${h.length}`),
                fn(g) && $.addClass(ay),
                (d.items = d.items.add($)),
                oe(g.thumbnailUrl || g.url, function (te) {
                  te.prop("width") > te.prop("height")
                    ? G(te, "wide")
                    : G(te, "tall"),
                    K.append(G(te, "thumbnail-image"));
                });
            }),
            d.strip.empty().append(d.items),
            G(d.content, "group")),
          i(Q(d.lightbox, "hide").trigger("focus"))
            .add("opacity .3s")
            .start({ opacity: 1 }),
          G(d.html, "noscroll"),
          y.show(p || 0)
        );
      }
      (y.build = function () {
        return (
          y.destroy(),
          (d = { html: r(t.documentElement), empty: r() }),
          (d.arrowLeft = V("control left inactive")
            .attr("role", "button")
            .attr("aria-hidden", !0)
            .attr("aria-controls", "w-lightbox-view")),
          (d.arrowRight = V("control right inactive")
            .attr("role", "button")
            .attr("aria-hidden", !0)
            .attr("aria-controls", "w-lightbox-view")),
          (d.close = V("control close").attr("role", "button")),
          ln(d.arrowLeft, "previous image"),
          ln(d.arrowRight, "next image"),
          ln(d.close, "close lightbox"),
          (d.spinner = V("spinner")
            .attr("role", "progressbar")
            .attr("aria-live", "polite")
            .attr("aria-hidden", !1)
            .attr("aria-busy", !0)
            .attr("aria-valuemin", 0)
            .attr("aria-valuemax", 100)
            .attr("aria-valuenow", 0)
            .attr("aria-valuetext", "Loading image")),
          (d.strip = V("strip").attr("role", "tablist")),
          (T = new E(d.spinner, D("hide"))),
          (d.content = V("content").append(
            d.spinner,
            d.arrowLeft,
            d.arrowRight,
            d.close
          )),
          (d.container = V("container").append(d.content, d.strip)),
          (d.lightbox = V("backdrop hide").append(d.container)),
          d.strip.on("click", R("item"), S),
          d.content
            .on("swipe", W)
            .on("click", R("left"), N)
            .on("click", R("right"), x)
            .on("click", R("close"), P)
            .on("click", R("image, caption"), x),
          d.container.on("click", R("view"), P).on("dragstart", R("img"), F),
          d.lightbox.on("keydown", j).on("focusin", U),
          r(n).append(d.lightbox),
          y
        );
      }),
        (y.destroy = function () {
          d && (Q(d.html, "noscroll"), d.lightbox.remove(), (d = void 0));
        }),
        (y.show = function (f) {
          if (f !== I) {
            var p = h[f];
            if (!p) return y.hide();
            if (fn(p)) {
              if (f < I) {
                var g = Ts(f - 1, h);
                f = g > -1 ? g : f;
              } else {
                var k = bs(f + 1, h);
                f = k > -1 ? k : f;
              }
              p = h[f];
            }
            var K = I;
            (I = f),
              d.spinner
                .attr("aria-hidden", !1)
                .attr("aria-busy", !0)
                .attr("aria-valuenow", 0)
                .attr("aria-valuetext", "Loading image"),
              T.show();
            var $ = (p.html && v(p.width, p.height)) || p.url;
            return (
              oe($, function (te) {
                if (f !== I) return;
                var he = V("figure", "figure").append(G(te, "image")),
                  ae = V("frame").append(he),
                  _ = V("view")
                    .prop("tabIndex", 0)
                    .attr("id", "w-lightbox-view")
                    .append(ae),
                  H,
                  ee;
                p.html &&
                  ((H = r(p.html)),
                  (ee = H.is("iframe")),
                  ee && H.on("load", z),
                  he.append(G(H, "embed"))),
                  p.caption &&
                    he.append(V("caption", "figcaption").text(p.caption)),
                  d.spinner.before(_),
                  ee || z();
                function z() {
                  if (
                    (d.spinner
                      .attr("aria-hidden", !0)
                      .attr("aria-busy", !1)
                      .attr("aria-valuenow", 100)
                      .attr("aria-valuetext", "Loaded image"),
                    T.hide(),
                    f !== I)
                  ) {
                    _.remove();
                    return;
                  }
                  let pe = cW(f, h);
                  ne(d.arrowLeft, "inactive", pe),
                    X(d.arrowLeft, pe),
                    pe && d.arrowLeft.is(":focus") && d.arrowRight.focus();
                  let xe = lW(f, h);
                  if (
                    (ne(d.arrowRight, "inactive", xe),
                    X(d.arrowRight, xe),
                    xe && d.arrowRight.is(":focus") && d.arrowLeft.focus(),
                    d.view
                      ? (i(d.view)
                          .add("opacity .3s")
                          .start({ opacity: 0 })
                          .then(B(d.view)),
                        i(_)
                          .add("opacity .3s")
                          .add("transform .3s")
                          .set({ x: f > K ? "80px" : "-80px" })
                          .start({ opacity: 1, x: 0 }))
                      : _.css("opacity", 1),
                    (d.view = _),
                    d.view.prop("tabIndex", 0),
                    d.items)
                  ) {
                    Q(d.items, "active"), d.items.removeAttr("aria-selected");
                    var Me = d.items.eq(f);
                    G(Me, "active"), Me.attr("aria-selected", !0), q(Me);
                  }
                }
              }),
              d.close.prop("tabIndex", 0),
              r(":focus").addClass("active-lightbox"),
              m.length === 0 &&
                (r("body")
                  .children()
                  .each(function () {
                    r(this).hasClass("w-lightbox-backdrop") ||
                      r(this).is("script") ||
                      (m.push({
                        node: r(this),
                        hidden: r(this).attr("aria-hidden"),
                        tabIndex: r(this).attr("tabIndex"),
                      }),
                      r(this).attr("aria-hidden", !0).attr("tabIndex", -1));
                  }),
                d.close.focus()),
              y
            );
          }
        }),
        (y.hide = function () {
          return (
            i(d.lightbox).add("opacity .3s").start({ opacity: 0 }).then(J), y
          );
        }),
        (y.prev = function () {
          var f = Ts(I - 1, h);
          f > -1 && y.show(f);
        }),
        (y.next = function () {
          var f = bs(I + 1, h);
          f > -1 && y.show(f);
        });
      function w(f) {
        return function (p) {
          this === p.target && (p.stopPropagation(), p.preventDefault(), f());
        };
      }
      var N = w(y.prev),
        x = w(y.next),
        P = w(y.hide),
        S = function (f) {
          var p = r(this).index();
          f.preventDefault(), y.show(p);
        },
        W = function (f, p) {
          f.preventDefault(),
            p.direction === "left"
              ? y.next()
              : p.direction === "right" && y.prev();
        },
        U = function () {
          this.focus();
        };
      function F(f) {
        f.preventDefault();
      }
      function j(f) {
        var p = f.keyCode;
        p === 27 || Z(p, "close")
          ? y.hide()
          : p === 37 || Z(p, "left")
          ? y.prev()
          : p === 39 || Z(p, "right")
          ? y.next()
          : Z(p, "item") && r(":focus").click();
      }
      function Z(f, p) {
        if (f !== 13 && f !== 32) return !1;
        var g = r(":focus").attr("class"),
          k = D(p).trim();
        return g.includes(k);
      }
      function J() {
        d &&
          (d.strip.scrollLeft(0).empty(),
          Q(d.html, "noscroll"),
          G(d.lightbox, "hide"),
          d.view && d.view.remove(),
          Q(d.content, "group"),
          G(d.arrowLeft, "inactive"),
          G(d.arrowRight, "inactive"),
          (I = d.view = void 0),
          m.forEach(function (f) {
            var p = f.node;
            p &&
              (f.hidden
                ? p.attr("aria-hidden", f.hidden)
                : p.removeAttr("aria-hidden"),
              f.tabIndex
                ? p.attr("tabIndex", f.tabIndex)
                : p.removeAttr("tabIndex"));
          }),
          (m = []),
          r(".active-lightbox").removeClass("active-lightbox").focus());
      }
      function oe(f, p) {
        var g = V("img", "img");
        return (
          g.one("load", function () {
            p(g);
          }),
          g.attr("src", f),
          g
        );
      }
      function B(f) {
        return function () {
          f.remove();
        };
      }
      function q(f) {
        var p = f.get(0),
          g = d.strip.get(0),
          k = p.offsetLeft,
          K = p.clientWidth,
          $ = g.scrollLeft,
          te = g.clientWidth,
          he = g.scrollWidth - te,
          ae;
        k < $
          ? (ae = Math.max(0, k + K - te))
          : k + K > te + $ && (ae = Math.min(k, he)),
          ae != null &&
            i(d.strip).add("scroll-left 500ms").start({ "scroll-left": ae });
      }
      function E(f, p, g) {
        (this.$element = f),
          (this.className = p),
          (this.delay = g || 200),
          this.hide();
      }
      (E.prototype.show = function () {
        var f = this;
        f.timeoutId ||
          (f.timeoutId = setTimeout(function () {
            f.$element.removeClass(f.className), delete f.timeoutId;
          }, f.delay));
      }),
        (E.prototype.hide = function () {
          var f = this;
          if (f.timeoutId) {
            clearTimeout(f.timeoutId), delete f.timeoutId;
            return;
          }
          f.$element.addClass(f.className);
        });
      function D(f, p) {
        return f.replace(c, (p ? " ." : " ") + s);
      }
      function R(f) {
        return D(f, !0);
      }
      function G(f, p) {
        return f.addClass(D(p));
      }
      function Q(f, p) {
        return f.removeClass(D(p));
      }
      function ne(f, p, g) {
        return f.toggleClass(D(p), g);
      }
      function X(f, p) {
        return f.attr("aria-hidden", p).attr("tabIndex", p ? -1 : 0);
      }
      function V(f, p) {
        return G(r(t.createElement(p || "div")), f);
      }
      function v(f, p) {
        var g =
          '<svg xmlns="http://www.w3.org/2000/svg" width="' +
          f +
          '" height="' +
          p +
          '"/>';
        return "data:image/svg+xml;charset=utf-8," + encodeURI(g);
      }
      return (
        (function () {
          var f = e.navigator.userAgent,
            p = /(iPhone|iPad|iPod);[^OS]*OS (\d)/,
            g = f.match(p),
            k = f.indexOf("Android ") > -1 && f.indexOf("Chrome") === -1;
          if (!k && (!g || g[2] > 7)) return;
          var K = t.createElement("style");
          t.head.appendChild(K), e.addEventListener("resize", $, !0);
          function $() {
            var te = e.innerHeight,
              he = e.innerWidth,
              ae =
                ".w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" +
                te +
                "px}.w-lightbox-view {width:" +
                he +
                "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" +
                0.86 * te +
                "px}.w-lightbox-image {max-width:" +
                he +
                "px;max-height:" +
                te +
                "px}.w-lightbox-group .w-lightbox-image {max-height:" +
                0.86 * te +
                "px}.w-lightbox-strip {padding: 0 " +
                0.01 * te +
                "px}.w-lightbox-item {width:" +
                0.1 * te +
                "px;padding:" +
                0.02 * te +
                "px " +
                0.01 * te +
                "px}.w-lightbox-thumbnail {height:" +
                0.1 * te +
                "px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" +
                0.96 * te +
                "px}.w-lightbox-content {margin-top:" +
                0.02 * te +
                "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" +
                0.84 * te +
                "px}.w-lightbox-image {max-width:" +
                0.96 * he +
                "px;max-height:" +
                0.96 * te +
                "px}.w-lightbox-group .w-lightbox-image {max-width:" +
                0.823 * he +
                "px;max-height:" +
                0.84 * te +
                "px}}";
            K.textContent = ae;
          }
          $();
        })(),
        y
      );
    }
    Is.define(
      "lightbox",
      (sy.exports = function (e) {
        var t = {},
          r = Is.env(),
          n = fW(window, document, e, r ? "#lightbox-mountpoint" : "body"),
          i = e(document),
          o,
          a,
          s = ".w-lightbox",
          c;
        t.ready = t.design = t.preview = h;
        function h() {
          (a = r && Is.env("design")),
            n.destroy(),
            (c = {}),
            (o = i.find(s)),
            o.webflowLightBox(),
            o.each(function () {
              ln(e(this), "open lightbox"),
                e(this).attr("aria-haspopup", "dialog");
            });
        }
        jQuery.fn.extend({
          webflowLightBox: function () {
            var m = this;
            e.each(m, function (y, w) {
              var N = e.data(w, s);
              N ||
                (N = e.data(w, s, {
                  el: e(w),
                  mode: "images",
                  images: [],
                  embed: "",
                })),
                N.el.off(s),
                I(N),
                a
                  ? N.el.on("setting" + s, I.bind(null, N))
                  : N.el.on("click" + s, d(N)).on("click" + s, function (x) {
                      x.preventDefault();
                    });
            });
          },
        });
        function I(m) {
          var y = m.el.children(".w-json").html(),
            w,
            N;
          if (!y) {
            m.items = [];
            return;
          }
          try {
            y = JSON.parse(y);
          } catch (x) {
            console.error("Malformed lightbox JSON configuration.", x);
          }
          T(y),
            y.items.forEach(function (x) {
              x.$el = m.el;
            }),
            (w = y.group),
            w
              ? ((N = c[w]),
                N || (N = c[w] = []),
                (m.items = N),
                y.items.length &&
                  ((m.index = N.length), N.push.apply(N, y.items)))
              : ((m.items = y.items), (m.index = 0));
        }
        function d(m) {
          return function () {
            m.items.length && n(m.items, m.index || 0);
          };
        }
        function T(m) {
          m.images &&
            (m.images.forEach(function (y) {
              y.type = "image";
            }),
            (m.items = m.images)),
            m.embed && ((m.embed.type = "video"), (m.items = [m.embed])),
            m.groupId && (m.group = m.groupId);
        }
        return t;
      })
    );
  });
  var ly = u((pK, cy) => {
    var Lt = ke(),
      dW = Ar(),
      De = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
    Lt.define(
      "navbar",
      (cy.exports = function (e, t) {
        var r = {},
          n = e.tram,
          i = e(window),
          o = e(document),
          a = t.debounce,
          s,
          c,
          h,
          I,
          d = Lt.env(),
          T = '<div class="w-nav-overlay" data-wf-ignore />',
          m = ".w-nav",
          y = "w--open",
          w = "w--nav-dropdown-open",
          N = "w--nav-dropdown-toggle-open",
          x = "w--nav-dropdown-list-open",
          P = "w--nav-link-open",
          S = dW.triggers,
          W = e();
        (r.ready = r.design = r.preview = U),
          (r.destroy = function () {
            (W = e()), F(), c && c.length && c.each(oe);
          });
        function U() {
          (h = d && Lt.env("design")),
            (I = Lt.env("editor")),
            (s = e(document.body)),
            (c = o.find(m)),
            c.length && (c.each(J), F(), j());
        }
        function F() {
          Lt.resize.off(Z);
        }
        function j() {
          Lt.resize.on(Z);
        }
        function Z() {
          c.each(p);
        }
        function J(_, H) {
          var ee = e(H),
            z = e.data(H, m);
          z ||
            (z = e.data(H, m, {
              open: !1,
              el: ee,
              config: {},
              selectedIdx: -1,
            })),
            (z.menu = ee.find(".w-nav-menu")),
            (z.links = z.menu.find(".w-nav-link")),
            (z.dropdowns = z.menu.find(".w-dropdown")),
            (z.dropdownToggle = z.menu.find(".w-dropdown-toggle")),
            (z.dropdownList = z.menu.find(".w-dropdown-list")),
            (z.button = ee.find(".w-nav-button")),
            (z.container = ee.find(".w-container")),
            (z.overlayContainerId = "w-nav-overlay-" + _),
            (z.outside = v(z));
          var pe = ee.find(".w-nav-brand");
          pe &&
            pe.attr("href") === "/" &&
            pe.attr("aria-label") == null &&
            pe.attr("aria-label", "home"),
            z.button.attr("style", "-webkit-user-select: text;"),
            z.button.attr("aria-label") == null &&
              z.button.attr("aria-label", "menu"),
            z.button.attr("role", "button"),
            z.button.attr("tabindex", "0"),
            z.button.attr("aria-controls", z.overlayContainerId),
            z.button.attr("aria-haspopup", "menu"),
            z.button.attr("aria-expanded", "false"),
            z.el.off(m),
            z.button.off(m),
            z.menu.off(m),
            E(z),
            h
              ? (B(z), z.el.on("setting" + m, D(z)))
              : (q(z),
                z.button.on("click" + m, X(z)),
                z.menu.on("click" + m, "a", V(z)),
                z.button.on("keydown" + m, R(z)),
                z.el.on("keydown" + m, G(z))),
            p(_, H);
        }
        function oe(_, H) {
          var ee = e.data(H, m);
          ee && (B(ee), e.removeData(H, m));
        }
        function B(_) {
          _.overlay && (ae(_, !0), _.overlay.remove(), (_.overlay = null));
        }
        function q(_) {
          _.overlay ||
            ((_.overlay = e(T).appendTo(_.el)),
            _.overlay.attr("id", _.overlayContainerId),
            (_.parent = _.menu.parent()),
            ae(_, !0));
        }
        function E(_) {
          var H = {},
            ee = _.config || {},
            z = (H.animation = _.el.attr("data-animation") || "default");
          (H.animOver = /^over/.test(z)),
            (H.animDirect = /left$/.test(z) ? -1 : 1),
            ee.animation !== z && _.open && t.defer(ne, _),
            (H.easing = _.el.attr("data-easing") || "ease"),
            (H.easing2 = _.el.attr("data-easing2") || "ease");
          var pe = _.el.attr("data-duration");
          (H.duration = pe != null ? Number(pe) : 400),
            (H.docHeight = _.el.attr("data-doc-height")),
            (_.config = H);
        }
        function D(_) {
          return function (H, ee) {
            ee = ee || {};
            var z = i.width();
            E(_),
              ee.open === !0 && te(_, !0),
              ee.open === !1 && ae(_, !0),
              _.open &&
                t.defer(function () {
                  z !== i.width() && ne(_);
                });
          };
        }
        function R(_) {
          return function (H) {
            switch (H.keyCode) {
              case De.SPACE:
              case De.ENTER:
                return X(_)(), H.preventDefault(), H.stopPropagation();
              case De.ESCAPE:
                return ae(_), H.preventDefault(), H.stopPropagation();
              case De.ARROW_RIGHT:
              case De.ARROW_DOWN:
              case De.HOME:
              case De.END:
                return _.open
                  ? (H.keyCode === De.END
                      ? (_.selectedIdx = _.links.length - 1)
                      : (_.selectedIdx = 0),
                    Q(_),
                    H.preventDefault(),
                    H.stopPropagation())
                  : (H.preventDefault(), H.stopPropagation());
            }
          };
        }
        function G(_) {
          return function (H) {
            if (_.open)
              switch (
                ((_.selectedIdx = _.links.index(document.activeElement)),
                H.keyCode)
              ) {
                case De.HOME:
                case De.END:
                  return (
                    H.keyCode === De.END
                      ? (_.selectedIdx = _.links.length - 1)
                      : (_.selectedIdx = 0),
                    Q(_),
                    H.preventDefault(),
                    H.stopPropagation()
                  );
                case De.ESCAPE:
                  return (
                    ae(_),
                    _.button.focus(),
                    H.preventDefault(),
                    H.stopPropagation()
                  );
                case De.ARROW_LEFT:
                case De.ARROW_UP:
                  return (
                    (_.selectedIdx = Math.max(-1, _.selectedIdx - 1)),
                    Q(_),
                    H.preventDefault(),
                    H.stopPropagation()
                  );
                case De.ARROW_RIGHT:
                case De.ARROW_DOWN:
                  return (
                    (_.selectedIdx = Math.min(
                      _.links.length - 1,
                      _.selectedIdx + 1
                    )),
                    Q(_),
                    H.preventDefault(),
                    H.stopPropagation()
                  );
              }
          };
        }
        function Q(_) {
          if (_.links[_.selectedIdx]) {
            var H = _.links[_.selectedIdx];
            H.focus(), V(H);
          }
        }
        function ne(_) {
          _.open && (ae(_, !0), te(_, !0));
        }
        function X(_) {
          return a(function () {
            _.open ? ae(_) : te(_);
          });
        }
        function V(_) {
          return function (H) {
            var ee = e(this),
              z = ee.attr("href");
            if (!Lt.validClick(H.currentTarget)) {
              H.preventDefault();
              return;
            }
            z && z.indexOf("#") === 0 && _.open && ae(_);
          };
        }
        function v(_) {
          return (
            _.outside && o.off("click" + m, _.outside),
            function (H) {
              var ee = e(H.target);
              (I && ee.closest(".w-editor-bem-EditorOverlay").length) ||
                f(_, ee);
            }
          );
        }
        var f = a(function (_, H) {
          if (_.open) {
            var ee = H.closest(".w-nav-menu");
            _.menu.is(ee) || ae(_);
          }
        });
        function p(_, H) {
          var ee = e.data(H, m),
            z = (ee.collapsed = ee.button.css("display") !== "none");
          if ((ee.open && !z && !h && ae(ee, !0), ee.container.length)) {
            var pe = k(ee);
            ee.links.each(pe), ee.dropdowns.each(pe);
          }
          ee.open && he(ee);
        }
        var g = "max-width";
        function k(_) {
          var H = _.container.css(g);
          return (
            H === "none" && (H = ""),
            function (ee, z) {
              (z = e(z)), z.css(g, ""), z.css(g) === "none" && z.css(g, H);
            }
          );
        }
        function K(_, H) {
          H.setAttribute("data-nav-menu-open", "");
        }
        function $(_, H) {
          H.removeAttribute("data-nav-menu-open");
        }
        function te(_, H) {
          if (_.open) return;
          (_.open = !0),
            _.menu.each(K),
            _.links.addClass(P),
            _.dropdowns.addClass(w),
            _.dropdownToggle.addClass(N),
            _.dropdownList.addClass(x),
            _.button.addClass(y);
          var ee = _.config,
            z = ee.animation;
          (z === "none" || !n.support.transform || ee.duration <= 0) &&
            (H = !0);
          var pe = he(_),
            xe = _.menu.outerHeight(!0),
            Me = _.menu.outerWidth(!0),
            l = _.el.height(),
            b = _.el[0];
          if (
            (p(0, b),
            S.intro(0, b),
            Lt.redraw.up(),
            h || o.on("click" + m, _.outside),
            H)
          ) {
            O();
            return;
          }
          var A = "transform " + ee.duration + "ms " + ee.easing;
          if (
            (_.overlay &&
              ((W = _.menu.prev()), _.overlay.show().append(_.menu)),
            ee.animOver)
          ) {
            n(_.menu)
              .add(A)
              .set({ x: ee.animDirect * Me, height: pe })
              .start({ x: 0 })
              .then(O),
              _.overlay && _.overlay.width(Me);
            return;
          }
          var C = l + xe;
          n(_.menu).add(A).set({ y: -C }).start({ y: 0 }).then(O);
          function O() {
            _.button.attr("aria-expanded", "true");
          }
        }
        function he(_) {
          var H = _.config,
            ee = H.docHeight ? o.height() : s.height();
          return (
            H.animOver
              ? _.menu.height(ee)
              : _.el.css("position") !== "fixed" &&
                (ee -= _.el.outerHeight(!0)),
            _.overlay && _.overlay.height(ee),
            ee
          );
        }
        function ae(_, H) {
          if (!_.open) return;
          (_.open = !1), _.button.removeClass(y);
          var ee = _.config;
          if (
            ((ee.animation === "none" ||
              !n.support.transform ||
              ee.duration <= 0) &&
              (H = !0),
            S.outro(0, _.el[0]),
            o.off("click" + m, _.outside),
            H)
          ) {
            n(_.menu).stop(), b();
            return;
          }
          var z = "transform " + ee.duration + "ms " + ee.easing2,
            pe = _.menu.outerHeight(!0),
            xe = _.menu.outerWidth(!0),
            Me = _.el.height();
          if (ee.animOver) {
            n(_.menu)
              .add(z)
              .start({ x: xe * ee.animDirect })
              .then(b);
            return;
          }
          var l = Me + pe;
          n(_.menu).add(z).start({ y: -l }).then(b);
          function b() {
            _.menu.height(""),
              n(_.menu).set({ x: 0, y: 0 }),
              _.menu.each($),
              _.links.removeClass(P),
              _.dropdowns.removeClass(w),
              _.dropdownToggle.removeClass(N),
              _.dropdownList.removeClass(x),
              _.overlay &&
                _.overlay.children().length &&
                (W.length ? _.menu.insertAfter(W) : _.menu.prependTo(_.parent),
                _.overlay.attr("style", "").hide()),
              _.el.triggerHandler("w-close"),
              _.button.attr("aria-expanded", "false");
          }
        }
        return r;
      })
    );
  });
  var py = u((vK, dy) => {
    var qt = ke(),
      pW = Ar(),
      gt = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      fy =
        'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
    qt.define(
      "slider",
      (dy.exports = function (e, t) {
        var r = {},
          n = e.tram,
          i = e(document),
          o,
          a,
          s = qt.env(),
          c = ".w-slider",
          h = '<div class="w-slider-dot" data-wf-ignore />',
          I =
            '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
          d = "w-slider-force-show",
          T = pW.triggers,
          m,
          y = !1;
        (r.ready = function () {
          (a = qt.env("design")), w();
        }),
          (r.design = function () {
            (a = !0), setTimeout(w, 1e3);
          }),
          (r.preview = function () {
            (a = !1), w();
          }),
          (r.redraw = function () {
            (y = !0), w(), (y = !1);
          }),
          (r.destroy = N);
        function w() {
          (o = i.find(c)), o.length && (o.each(S), !m && (N(), x()));
        }
        function N() {
          qt.resize.off(P), qt.redraw.off(r.redraw);
        }
        function x() {
          qt.resize.on(P), qt.redraw.on(r.redraw);
        }
        function P() {
          o.filter(":visible").each(G);
        }
        function S(v, f) {
          var p = e(f),
            g = e.data(f, c);
          g ||
            (g = e.data(f, c, {
              index: 0,
              depth: 1,
              hasFocus: { keyboard: !1, mouse: !1 },
              el: p,
              config: {},
            })),
            (g.mask = p.children(".w-slider-mask")),
            (g.left = p.children(".w-slider-arrow-left")),
            (g.right = p.children(".w-slider-arrow-right")),
            (g.nav = p.children(".w-slider-nav")),
            (g.slides = g.mask.children(".w-slide")),
            g.slides.each(T.reset),
            y && (g.maskWidth = 0),
            p.attr("role") === void 0 && p.attr("role", "region"),
            p.attr("aria-label") === void 0 && p.attr("aria-label", "carousel");
          var k = g.mask.attr("id");
          if (
            (k || ((k = "w-slider-mask-" + v), g.mask.attr("id", k)),
            !a && !g.ariaLiveLabel && (g.ariaLiveLabel = e(I).appendTo(g.mask)),
            g.left.attr("role", "button"),
            g.left.attr("tabindex", "0"),
            g.left.attr("aria-controls", k),
            g.left.attr("aria-label") === void 0 &&
              g.left.attr("aria-label", "previous slide"),
            g.right.attr("role", "button"),
            g.right.attr("tabindex", "0"),
            g.right.attr("aria-controls", k),
            g.right.attr("aria-label") === void 0 &&
              g.right.attr("aria-label", "next slide"),
            !n.support.transform)
          ) {
            g.left.hide(), g.right.hide(), g.nav.hide(), (m = !0);
            return;
          }
          g.el.off(c),
            g.left.off(c),
            g.right.off(c),
            g.nav.off(c),
            W(g),
            a
              ? (g.el.on("setting" + c, E(g)), q(g), (g.hasTimer = !1))
              : (g.el.on("swipe" + c, E(g)),
                g.left.on("click" + c, Z(g)),
                g.right.on("click" + c, J(g)),
                g.left.on("keydown" + c, j(g, Z)),
                g.right.on("keydown" + c, j(g, J)),
                g.nav.on("keydown" + c, "> div", E(g)),
                g.config.autoplay &&
                  !g.hasTimer &&
                  ((g.hasTimer = !0), (g.timerCount = 1), B(g)),
                g.el.on("mouseenter" + c, F(g, !0, "mouse")),
                g.el.on("focusin" + c, F(g, !0, "keyboard")),
                g.el.on("mouseleave" + c, F(g, !1, "mouse")),
                g.el.on("focusout" + c, F(g, !1, "keyboard"))),
            g.nav.on("click" + c, "> div", E(g)),
            s ||
              g.mask
                .contents()
                .filter(function () {
                  return this.nodeType === 3;
                })
                .remove();
          var K = p.filter(":hidden");
          K.addClass(d);
          var $ = p.parents(":hidden");
          $.addClass(d), y || G(v, f), K.removeClass(d), $.removeClass(d);
        }
        function W(v) {
          var f = {};
          (f.crossOver = 0),
            (f.animation = v.el.attr("data-animation") || "slide"),
            f.animation === "outin" &&
              ((f.animation = "cross"), (f.crossOver = 0.5)),
            (f.easing = v.el.attr("data-easing") || "ease");
          var p = v.el.attr("data-duration");
          if (
            ((f.duration = p != null ? parseInt(p, 10) : 500),
            U(v.el.attr("data-infinite")) && (f.infinite = !0),
            U(v.el.attr("data-disable-swipe")) && (f.disableSwipe = !0),
            U(v.el.attr("data-hide-arrows"))
              ? (f.hideArrows = !0)
              : v.config.hideArrows && (v.left.show(), v.right.show()),
            U(v.el.attr("data-autoplay")))
          ) {
            (f.autoplay = !0),
              (f.delay = parseInt(v.el.attr("data-delay"), 10) || 2e3),
              (f.timerMax = parseInt(v.el.attr("data-autoplay-limit"), 10));
            var g = "mousedown" + c + " touchstart" + c;
            a ||
              v.el.off(g).one(g, function () {
                q(v);
              });
          }
          var k = v.right.width();
          (f.edge = k ? k + 40 : 100), (v.config = f);
        }
        function U(v) {
          return v === "1" || v === "true";
        }
        function F(v, f, p) {
          return function (g) {
            if (f) v.hasFocus[p] = f;
            else if (
              e.contains(v.el.get(0), g.relatedTarget) ||
              ((v.hasFocus[p] = f),
              (v.hasFocus.mouse && p === "keyboard") ||
                (v.hasFocus.keyboard && p === "mouse"))
            )
              return;
            f
              ? (v.ariaLiveLabel.attr("aria-live", "polite"),
                v.hasTimer && q(v))
              : (v.ariaLiveLabel.attr("aria-live", "off"), v.hasTimer && B(v));
          };
        }
        function j(v, f) {
          return function (p) {
            switch (p.keyCode) {
              case gt.SPACE:
              case gt.ENTER:
                return f(v)(), p.preventDefault(), p.stopPropagation();
            }
          };
        }
        function Z(v) {
          return function () {
            R(v, { index: v.index - 1, vector: -1 });
          };
        }
        function J(v) {
          return function () {
            R(v, { index: v.index + 1, vector: 1 });
          };
        }
        function oe(v, f) {
          var p = null;
          f === v.slides.length && (w(), Q(v)),
            t.each(v.anchors, function (g, k) {
              e(g.els).each(function (K, $) {
                e($).index() === f && (p = k);
              });
            }),
            p != null && R(v, { index: p, immediate: !0 });
        }
        function B(v) {
          q(v);
          var f = v.config,
            p = f.timerMax;
          (p && v.timerCount++ > p) ||
            (v.timerId = window.setTimeout(function () {
              v.timerId == null || a || (J(v)(), B(v));
            }, f.delay));
        }
        function q(v) {
          window.clearTimeout(v.timerId), (v.timerId = null);
        }
        function E(v) {
          return function (f, p) {
            p = p || {};
            var g = v.config;
            if (a && f.type === "setting") {
              if (p.select === "prev") return Z(v)();
              if (p.select === "next") return J(v)();
              if ((W(v), Q(v), p.select == null)) return;
              oe(v, p.select);
              return;
            }
            if (f.type === "swipe")
              return g.disableSwipe || qt.env("editor")
                ? void 0
                : p.direction === "left"
                ? J(v)()
                : p.direction === "right"
                ? Z(v)()
                : void 0;
            if (v.nav.has(f.target).length) {
              var k = e(f.target).index();
              if (
                (f.type === "click" && R(v, { index: k }), f.type === "keydown")
              )
                switch (f.keyCode) {
                  case gt.ENTER:
                  case gt.SPACE: {
                    R(v, { index: k }), f.preventDefault();
                    break;
                  }
                  case gt.ARROW_LEFT:
                  case gt.ARROW_UP: {
                    D(v.nav, Math.max(k - 1, 0)), f.preventDefault();
                    break;
                  }
                  case gt.ARROW_RIGHT:
                  case gt.ARROW_DOWN: {
                    D(v.nav, Math.min(k + 1, v.pages)), f.preventDefault();
                    break;
                  }
                  case gt.HOME: {
                    D(v.nav, 0), f.preventDefault();
                    break;
                  }
                  case gt.END: {
                    D(v.nav, v.pages), f.preventDefault();
                    break;
                  }
                  default:
                    return;
                }
            }
          };
        }
        function D(v, f) {
          var p = v.children().eq(f).focus();
          v.children().not(p);
        }
        function R(v, f) {
          f = f || {};
          var p = v.config,
            g = v.anchors;
          v.previous = v.index;
          var k = f.index,
            K = {};
          k < 0
            ? ((k = g.length - 1),
              p.infinite &&
                ((K.x = -v.endX), (K.from = 0), (K.to = g[0].width)))
            : k >= g.length &&
              ((k = 0),
              p.infinite &&
                ((K.x = g[g.length - 1].width),
                (K.from = -g[g.length - 1].x),
                (K.to = K.from - K.x))),
            (v.index = k);
          var $ = v.nav
            .children()
            .eq(k)
            .addClass("w-active")
            .attr("aria-pressed", "true")
            .attr("tabindex", "0");
          v.nav
            .children()
            .not($)
            .removeClass("w-active")
            .attr("aria-pressed", "false")
            .attr("tabindex", "-1"),
            p.hideArrows &&
              (v.index === g.length - 1 ? v.right.hide() : v.right.show(),
              v.index === 0 ? v.left.hide() : v.left.show());
          var te = v.offsetX || 0,
            he = (v.offsetX = -g[v.index].x),
            ae = { x: he, opacity: 1, visibility: "" },
            _ = e(g[v.index].els),
            H = e(g[v.previous] && g[v.previous].els),
            ee = v.slides.not(_),
            z = p.animation,
            pe = p.easing,
            xe = Math.round(p.duration),
            Me = f.vector || (v.index > v.previous ? 1 : -1),
            l = "opacity " + xe + "ms " + pe,
            b = "transform " + xe + "ms " + pe;
          if (
            (_.find(fy).removeAttr("tabindex"),
            _.removeAttr("aria-hidden"),
            _.find("*").removeAttr("aria-hidden"),
            ee.find(fy).attr("tabindex", "-1"),
            ee.attr("aria-hidden", "true"),
            ee.find("*").attr("aria-hidden", "true"),
            a || (_.each(T.intro), ee.each(T.outro)),
            f.immediate && !y)
          ) {
            n(_).set(ae), O();
            return;
          }
          if (v.index === v.previous) return;
          if (
            (a || v.ariaLiveLabel.text(`Slide ${k + 1} of ${g.length}.`),
            z === "cross")
          ) {
            var A = Math.round(xe - xe * p.crossOver),
              C = Math.round(xe - A);
            (l = "opacity " + A + "ms " + pe),
              n(H).set({ visibility: "" }).add(l).start({ opacity: 0 }),
              n(_)
                .set({ visibility: "", x: he, opacity: 0, zIndex: v.depth++ })
                .add(l)
                .wait(C)
                .then({ opacity: 1 })
                .then(O);
            return;
          }
          if (z === "fade") {
            n(H).set({ visibility: "" }).stop(),
              n(_)
                .set({ visibility: "", x: he, opacity: 0, zIndex: v.depth++ })
                .add(l)
                .start({ opacity: 1 })
                .then(O);
            return;
          }
          if (z === "over") {
            (ae = { x: v.endX }),
              n(H).set({ visibility: "" }).stop(),
              n(_)
                .set({
                  visibility: "",
                  zIndex: v.depth++,
                  x: he + g[v.index].width * Me,
                })
                .add(b)
                .start({ x: he })
                .then(O);
            return;
          }
          p.infinite && K.x
            ? (n(v.slides.not(H))
                .set({ visibility: "", x: K.x })
                .add(b)
                .start({ x: he }),
              n(H).set({ visibility: "", x: K.from }).add(b).start({ x: K.to }),
              (v.shifted = H))
            : (p.infinite &&
                v.shifted &&
                (n(v.shifted).set({ visibility: "", x: te }),
                (v.shifted = null)),
              n(v.slides).set({ visibility: "" }).add(b).start({ x: he }));
          function O() {
            (_ = e(g[v.index].els)),
              (ee = v.slides.not(_)),
              z !== "slide" && (ae.visibility = "hidden"),
              n(ee).set(ae);
          }
        }
        function G(v, f) {
          var p = e.data(f, c);
          if (p) {
            if (X(p)) return Q(p);
            a && V(p) && Q(p);
          }
        }
        function Q(v) {
          var f = 1,
            p = 0,
            g = 0,
            k = 0,
            K = v.maskWidth,
            $ = K - v.config.edge;
          $ < 0 && ($ = 0),
            (v.anchors = [{ els: [], x: 0, width: 0 }]),
            v.slides.each(function (he, ae) {
              g - p > $ &&
                (f++,
                (p += K),
                (v.anchors[f - 1] = { els: [], x: g, width: 0 })),
                (k = e(ae).outerWidth(!0)),
                (g += k),
                (v.anchors[f - 1].width += k),
                v.anchors[f - 1].els.push(ae);
              var _ = he + 1 + " of " + v.slides.length;
              e(ae).attr("aria-label", _), e(ae).attr("role", "group");
            }),
            (v.endX = g),
            a && (v.pages = null),
            v.nav.length && v.pages !== f && ((v.pages = f), ne(v));
          var te = v.index;
          te >= f && (te = f - 1), R(v, { immediate: !0, index: te });
        }
        function ne(v) {
          var f = [],
            p,
            g = v.el.attr("data-nav-spacing");
          g && (g = parseFloat(g) + "px");
          for (var k = 0, K = v.pages; k < K; k++)
            (p = e(h)),
              p
                .attr("aria-label", "Show slide " + (k + 1) + " of " + K)
                .attr("aria-pressed", "false")
                .attr("role", "button")
                .attr("tabindex", "-1"),
              v.nav.hasClass("w-num") && p.text(k + 1),
              g != null && p.css({ "margin-left": g, "margin-right": g }),
              f.push(p);
          v.nav.empty().append(f);
        }
        function X(v) {
          var f = v.mask.width();
          return v.maskWidth !== f ? ((v.maskWidth = f), !0) : !1;
        }
        function V(v) {
          var f = 0;
          return (
            v.slides.each(function (p, g) {
              f += e(g).outerWidth(!0);
            }),
            v.slidesWidth !== f ? ((v.slidesWidth = f), !0) : !1
          );
        }
        return r;
      })
    );
  });
  var hy = u((hK, vy) => {
    var Pt = ke(),
      vW = Ar();
    Pt.define(
      "tabs",
      (vy.exports = function (e) {
        var t = {},
          r = e.tram,
          n = e(document),
          i,
          o,
          a = Pt.env,
          s = a.safari,
          c = a(),
          h = "data-w-tab",
          I = "data-w-pane",
          d = ".w-tabs",
          T = "w--current",
          m = "w--tab-active",
          y = vW.triggers,
          w = !1;
        (t.ready = t.design = t.preview = N),
          (t.redraw = function () {
            (w = !0), N(), (w = !1);
          }),
          (t.destroy = function () {
            (i = n.find(d)), i.length && (i.each(S), x());
          });
        function N() {
          (o = c && Pt.env("design")),
            (i = n.find(d)),
            i.length &&
              (i.each(W), Pt.env("preview") && !w && i.each(S), x(), P());
        }
        function x() {
          Pt.redraw.off(t.redraw);
        }
        function P() {
          Pt.redraw.on(t.redraw);
        }
        function S(B, q) {
          var E = e.data(q, d);
          E &&
            (E.links && E.links.each(y.reset),
            E.panes && E.panes.each(y.reset));
        }
        function W(B, q) {
          var E = d.substr(1) + "-" + B,
            D = e(q),
            R = e.data(q, d);
          if (
            (R || (R = e.data(q, d, { el: D, config: {} })),
            (R.current = null),
            (R.tabIdentifier = E + "-" + h),
            (R.paneIdentifier = E + "-" + I),
            (R.menu = D.children(".w-tab-menu")),
            (R.links = R.menu.children(".w-tab-link")),
            (R.content = D.children(".w-tab-content")),
            (R.panes = R.content.children(".w-tab-pane")),
            R.el.off(d),
            R.links.off(d),
            R.menu.attr("role", "tablist"),
            R.links.attr("tabindex", "-1"),
            U(R),
            !o)
          ) {
            R.links.on("click" + d, j(R)), R.links.on("keydown" + d, Z(R));
            var G = R.links.filter("." + T),
              Q = G.attr(h);
            Q && J(R, { tab: Q, immediate: !0 });
          }
        }
        function U(B) {
          var q = {};
          q.easing = B.el.attr("data-easing") || "ease";
          var E = parseInt(B.el.attr("data-duration-in"), 10);
          E = q.intro = E === E ? E : 0;
          var D = parseInt(B.el.attr("data-duration-out"), 10);
          (D = q.outro = D === D ? D : 0),
            (q.immediate = !E && !D),
            (B.config = q);
        }
        function F(B) {
          var q = B.current;
          return Array.prototype.findIndex.call(
            B.links,
            (E) => E.getAttribute(h) === q,
            null
          );
        }
        function j(B) {
          return function (q) {
            q.preventDefault();
            var E = q.currentTarget.getAttribute(h);
            E && J(B, { tab: E });
          };
        }
        function Z(B) {
          return function (q) {
            var E = F(B),
              D = q.key,
              R = {
                ArrowLeft: E - 1,
                ArrowUp: E - 1,
                ArrowRight: E + 1,
                ArrowDown: E + 1,
                End: B.links.length - 1,
                Home: 0,
              };
            if (D in R) {
              q.preventDefault();
              var G = R[D];
              G === -1 && (G = B.links.length - 1),
                G === B.links.length && (G = 0);
              var Q = B.links[G],
                ne = Q.getAttribute(h);
              ne && J(B, { tab: ne });
            }
          };
        }
        function J(B, q) {
          q = q || {};
          var E = B.config,
            D = E.easing,
            R = q.tab;
          if (R !== B.current) {
            B.current = R;
            var G;
            B.links.each(function (p, g) {
              var k = e(g);
              if (q.immediate || E.immediate) {
                var K = B.panes[p];
                g.id || (g.id = B.tabIdentifier + "-" + p),
                  K.id || (K.id = B.paneIdentifier + "-" + p),
                  (g.href = "#" + K.id),
                  g.setAttribute("role", "tab"),
                  g.setAttribute("aria-controls", K.id),
                  g.setAttribute("aria-selected", "false"),
                  K.setAttribute("role", "tabpanel"),
                  K.setAttribute("aria-labelledby", g.id);
              }
              g.getAttribute(h) === R
                ? ((G = g),
                  k
                    .addClass(T)
                    .removeAttr("tabindex")
                    .attr({ "aria-selected": "true" })
                    .each(y.intro))
                : k.hasClass(T) &&
                  k
                    .removeClass(T)
                    .attr({ tabindex: "-1", "aria-selected": "false" })
                    .each(y.outro);
            });
            var Q = [],
              ne = [];
            B.panes.each(function (p, g) {
              var k = e(g);
              g.getAttribute(h) === R ? Q.push(g) : k.hasClass(m) && ne.push(g);
            });
            var X = e(Q),
              V = e(ne);
            if (q.immediate || E.immediate) {
              X.addClass(m).each(y.intro),
                V.removeClass(m),
                w || Pt.redraw.up();
              return;
            } else {
              var v = window.scrollX,
                f = window.scrollY;
              G.focus(), window.scrollTo(v, f);
            }
            V.length && E.outro
              ? (V.each(y.outro),
                r(V)
                  .add("opacity " + E.outro + "ms " + D, { fallback: s })
                  .start({ opacity: 0 })
                  .then(() => oe(E, V, X)))
              : oe(E, V, X);
          }
        }
        function oe(B, q, E) {
          if (
            (q.removeClass(m).css({
              opacity: "",
              transition: "",
              transform: "",
              width: "",
              height: "",
            }),
            E.addClass(m).each(y.intro),
            Pt.redraw.up(),
            !B.intro)
          )
            return r(E).set({ opacity: 1 });
          r(E)
            .set({ opacity: 0 })
            .redraw()
            .add("opacity " + B.intro + "ms " + B.easing, { fallback: s })
            .start({ opacity: 1 });
        }
        return t;
      })
    );
  });
  Ms();
  Gs();
  Vs();
  Ar();
  $m();
  Jm();
  ty();
  ny();
  oy();
  uy();
  ly();
  py();
  hy();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 * _.template (webflow: upgraded to 1.13.6)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
  events: {
    "e-2": {
      id: "e-2",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-90",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "6495c3eb756614ec2443881a|a2d3af2f-5434-d1b9-3bc9-78cdf56eafda",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6495c3eb756614ec2443881a|a2d3af2f-5434-d1b9-3bc9-78cdf56eafda",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1683622692382,
    },
    "e-3": {
      id: "e-3",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-18",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "6495c3eb756614ec2443881a|a2d3af2f-5434-d1b9-3bc9-78cdf56eafdb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6495c3eb756614ec2443881a|a2d3af2f-5434-d1b9-3bc9-78cdf56eafdb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1683622692382,
    },
    "e-5": {
      id: "e-5",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-6",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "6495c3eb756614ec2443881a|a2d3af2f-5434-d1b9-3bc9-78cdf56eafe9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6495c3eb756614ec2443881a|a2d3af2f-5434-d1b9-3bc9-78cdf56eafe9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1683622692382,
    },
    "e-7": {
      id: "e-7",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-8",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "6495c3eb756614ec2443881a|a2d3af2f-5434-d1b9-3bc9-78cdf56eaff6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6495c3eb756614ec2443881a|a2d3af2f-5434-d1b9-3bc9-78cdf56eaff6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1683622692382,
    },
    "e-9": {
      id: "e-9",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-19" },
      },
      mediaQueries: ["main"],
      target: {
        id: "6495c3eb756614ec2443881a|1aeea754-57b9-4d5f-520a-fb54996ad261",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6495c3eb756614ec2443881a|1aeea754-57b9-4d5f-520a-fb54996ad261",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 30,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1667814288449,
    },
    "e-11": {
      id: "e-11",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-58" },
      },
      mediaQueries: ["main"],
      target: {
        id: "6495c3eb756614ec2443881a|1aeea754-57b9-4d5f-520a-fb54996ad275",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6495c3eb756614ec2443881a|1aeea754-57b9-4d5f-520a-fb54996ad275",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 30,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1667814289745,
    },
    "e-12": {
      id: "e-12",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-41" },
      },
      mediaQueries: ["main"],
      target: {
        id: "6495c3eb756614ec2443881a|1aeea754-57b9-4d5f-520a-fb54996ad2af",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6495c3eb756614ec2443881a|1aeea754-57b9-4d5f-520a-fb54996ad2af",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 30,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1667814291169,
    },
    "e-14": {
      id: "e-14",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-10" },
      },
      mediaQueries: ["main"],
      target: {
        id: "6495c3eb756614ec2443881a|1aeea754-57b9-4d5f-520a-fb54996ad2a5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6495c3eb756614ec2443881a|1aeea754-57b9-4d5f-520a-fb54996ad2a5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 30,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1667814291169,
    },
    "e-21": {
      id: "e-21",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-112" },
      },
      mediaQueries: ["main"],
      target: {
        id: "6495c3eb756614ec2443881a|1aeea754-57b9-4d5f-520a-fb54996ad21e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6495c3eb756614ec2443881a|1aeea754-57b9-4d5f-520a-fb54996ad21e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 30,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1667814286937,
    },
    "e-22": {
      id: "e-22",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-108" },
      },
      mediaQueries: ["main"],
      target: {
        id: "6495c3eb756614ec2443881a|1aeea754-57b9-4d5f-520a-fb54996ad209",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6495c3eb756614ec2443881a|1aeea754-57b9-4d5f-520a-fb54996ad209",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 30,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1667814285426,
    },
    "e-25": {
      id: "e-25",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-23" },
      },
      mediaQueries: ["main"],
      target: {
        id: "6495c3eb756614ec2443881a|1aeea754-57b9-4d5f-520a-fb54996ad293",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6495c3eb756614ec2443881a|1aeea754-57b9-4d5f-520a-fb54996ad293",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 30,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1667814291169,
    },
    "e-27": {
      id: "e-27",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-114" },
      },
      mediaQueries: ["main"],
      target: {
        id: "6495c3eb756614ec2443881a|1aeea754-57b9-4d5f-520a-fb54996ad257",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6495c3eb756614ec2443881a|1aeea754-57b9-4d5f-520a-fb54996ad257",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 30,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1667814288449,
    },
    "e-28": {
      id: "e-28",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-48" },
      },
      mediaQueries: ["main"],
      target: {
        id: "6495c3eb756614ec2443881a|1aeea754-57b9-4d5f-520a-fb54996ad245",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6495c3eb756614ec2443881a|1aeea754-57b9-4d5f-520a-fb54996ad245",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 30,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1667814288449,
    },
    "e-32": {
      id: "e-32",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-20" },
      },
      mediaQueries: ["main"],
      target: {
        id: "6495c3eb756614ec2443881a|1aeea754-57b9-4d5f-520a-fb54996ad200",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6495c3eb756614ec2443881a|1aeea754-57b9-4d5f-520a-fb54996ad200",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 30,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1667814285426,
    },
    "e-37": {
      id: "e-37",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-49" },
      },
      mediaQueries: ["main"],
      target: {
        id: "6495c3eb756614ec2443881a|1aeea754-57b9-4d5f-520a-fb54996ad1d9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6495c3eb756614ec2443881a|1aeea754-57b9-4d5f-520a-fb54996ad1d9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 30,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1635847573141,
    },
    "e-38": {
      id: "e-38",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-18" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6495c3eb756614ec2443881a|1aeea754-57b9-4d5f-520a-fb54996ad1b4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6495c3eb756614ec2443881a|1aeea754-57b9-4d5f-520a-fb54996ad1b4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1635847307631,
    },
    "e-39": {
      id: "e-39",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-52" },
      },
      mediaQueries: ["main"],
      target: {
        id: "6495c3eb756614ec2443881a|1aeea754-57b9-4d5f-520a-fb54996ad230",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6495c3eb756614ec2443881a|1aeea754-57b9-4d5f-520a-fb54996ad230",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 30,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1667814286937,
    },
    "e-40": {
      id: "e-40",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-13" },
      },
      mediaQueries: ["main"],
      target: {
        id: "6495c3eb756614ec2443881a|1aeea754-57b9-4d5f-520a-fb54996ad227",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6495c3eb756614ec2443881a|1aeea754-57b9-4d5f-520a-fb54996ad227",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 30,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1667814286937,
    },
    "e-42": {
      id: "e-42",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-24" },
      },
      mediaQueries: ["main"],
      target: {
        id: "6495c3eb756614ec2443881a|1aeea754-57b9-4d5f-520a-fb54996ad23a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6495c3eb756614ec2443881a|1aeea754-57b9-4d5f-520a-fb54996ad23a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 30,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1667814286937,
    },
    "e-43": {
      id: "e-43",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-47" },
      },
      mediaQueries: ["main"],
      target: {
        id: "6495c3eb756614ec2443881a|1aeea754-57b9-4d5f-520a-fb54996ad29c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6495c3eb756614ec2443881a|1aeea754-57b9-4d5f-520a-fb54996ad29c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 30,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1667814291169,
    },
    "e-44": {
      id: "e-44",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-103" },
      },
      mediaQueries: ["main"],
      target: {
        id: "6495c3eb756614ec2443881a|1aeea754-57b9-4d5f-520a-fb54996ad1ec",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6495c3eb756614ec2443881a|1aeea754-57b9-4d5f-520a-fb54996ad1ec",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 30,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1635847694309,
    },
    "e-45": {
      id: "e-45",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-104" },
      },
      mediaQueries: ["main"],
      target: {
        id: "6495c3eb756614ec2443881a|1aeea754-57b9-4d5f-520a-fb54996ad288",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6495c3eb756614ec2443881a|1aeea754-57b9-4d5f-520a-fb54996ad288",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 30,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1667814289745,
    },
    "e-46": {
      id: "e-46",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-15" },
      },
      mediaQueries: ["main"],
      target: {
        id: "6495c3eb756614ec2443881a|1aeea754-57b9-4d5f-520a-fb54996ad1d0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6495c3eb756614ec2443881a|1aeea754-57b9-4d5f-520a-fb54996ad1d0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 30,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1635847642265,
    },
    "e-50": {
      id: "e-50",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-17" },
      },
      mediaQueries: ["main"],
      target: {
        id: "6495c3eb756614ec2443881a|1aeea754-57b9-4d5f-520a-fb54996ad1e2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6495c3eb756614ec2443881a|1aeea754-57b9-4d5f-520a-fb54996ad1e2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 30,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1635847671159,
    },
    "e-51": {
      id: "e-51",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-109" },
      },
      mediaQueries: ["main"],
      target: {
        id: "6495c3eb756614ec2443881a|1aeea754-57b9-4d5f-520a-fb54996ad1f7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6495c3eb756614ec2443881a|1aeea754-57b9-4d5f-520a-fb54996ad1f7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 30,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1667814285426,
    },
    "e-53": {
      id: "e-53",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-56" },
      },
      mediaQueries: ["main"],
      target: {
        id: "6495c3eb756614ec2443881a|1aeea754-57b9-4d5f-520a-fb54996ad24e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6495c3eb756614ec2443881a|1aeea754-57b9-4d5f-520a-fb54996ad24e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 30,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1667814288449,
    },
    "e-54": {
      id: "e-54",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-110" },
      },
      mediaQueries: ["main"],
      target: {
        id: "6495c3eb756614ec2443881a|1aeea754-57b9-4d5f-520a-fb54996ad213",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6495c3eb756614ec2443881a|1aeea754-57b9-4d5f-520a-fb54996ad213",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 30,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1667814285426,
    },
    "e-55": {
      id: "e-55",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-16" },
      },
      mediaQueries: ["main"],
      target: {
        id: "6495c3eb756614ec2443881a|1aeea754-57b9-4d5f-520a-fb54996ad26c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6495c3eb756614ec2443881a|1aeea754-57b9-4d5f-520a-fb54996ad26c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 30,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1667814289745,
    },
    "e-57": {
      id: "e-57",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-105" },
      },
      mediaQueries: ["main"],
      target: {
        id: "6495c3eb756614ec2443881a|1aeea754-57b9-4d5f-520a-fb54996ad27e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6495c3eb756614ec2443881a|1aeea754-57b9-4d5f-520a-fb54996ad27e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 30,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1667814289745,
    },
    "e-59": {
      id: "e-59",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-60",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".combine-faq4_question-2",
        originalId:
          "6347c2441fb34299acfdf2d9|3f0295d1-deee-534a-8a0b-1824ababe7cb",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".combine-faq4_question-2",
          originalId:
            "6347c2441fb34299acfdf2d9|3f0295d1-deee-534a-8a0b-1824ababe7cb",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1663936352607,
    },
    "e-60": {
      id: "e-60",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-59",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".combine-faq4_question-2",
        originalId:
          "6347c2441fb34299acfdf2d9|3f0295d1-deee-534a-8a0b-1824ababe7cb",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".combine-faq4_question-2",
          originalId:
            "6347c2441fb34299acfdf2d9|3f0295d1-deee-534a-8a0b-1824ababe7cb",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1663936352608,
    },
    "e-61": {
      id: "e-61",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-7", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6495c3eb756614ec24438821|48521bfb-343b-70e7-de50-f1b1576b5829",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6495c3eb756614ec24438821|48521bfb-343b-70e7-de50-f1b1576b5829",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-7-p",
          smoothing: 85,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1676650585158,
    },
    "e-62": {
      id: "e-62",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-63",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".learn-more",
        originalId:
          "624f12615939a963e2f7242e|e07166cb-1652-552c-8055-07acec7c1d52",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".learn-more",
          originalId:
            "624f12615939a963e2f7242e|e07166cb-1652-552c-8055-07acec7c1d52",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1626453046684,
    },
    "e-63": {
      id: "e-63",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-62",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".learn-more",
        originalId:
          "624f12615939a963e2f7242e|e07166cb-1652-552c-8055-07acec7c1d52",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".learn-more",
          originalId:
            "624f12615939a963e2f7242e|e07166cb-1652-552c-8055-07acec7c1d52",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1626453046684,
    },
    "e-72": {
      id: "e-72",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-7", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6495c3eb756614ec2443881a|1aeea754-57b9-4d5f-520a-fb54996ad1cf",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6495c3eb756614ec2443881a|1aeea754-57b9-4d5f-520a-fb54996ad1cf",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-7-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1686689355948,
    },
    "e-88": {
      id: "e-88",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FLIP_EFFECT",
        instant: false,
        config: { actionListId: "flipInLeft", autoStopEventId: "e-89" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6495c3eb756614ec2443881a|176a0b9d-ded8-738f-7c20-6f5192a76545",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6495c3eb756614ec2443881a|176a0b9d-ded8-738f-7c20-6f5192a76545",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1686775529739,
    },
    "e-90": {
      id: "e-90",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-15", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6495c3eb756614ec2443881a|0b083ba3-48db-9a0b-1b31-44d22af68741",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6495c3eb756614ec2443881a|0b083ba3-48db-9a0b-1b31-44d22af68741",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-15-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1687248644401,
    },
    "e-91": {
      id: "e-91",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-15", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6495c3eb756614ec2443881a|0b083ba3-48db-9a0b-1b31-44d22af6874d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6495c3eb756614ec2443881a|0b083ba3-48db-9a0b-1b31-44d22af6874d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-15-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1687250097819,
    },
    "e-92": {
      id: "e-92",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-15", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6495c3eb756614ec2443881a|0b083ba3-48db-9a0b-1b31-44d22af68759",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6495c3eb756614ec2443881a|0b083ba3-48db-9a0b-1b31-44d22af68759",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-15-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1687250097194,
    },
    "e-93": {
      id: "e-93",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-94",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".section-footer-spacer",
        originalId:
          "6495c3eb756614ec2443881a|6878ea6f-7eaf-4c34-d722-c82cd280f94b",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".section-footer-spacer",
          originalId:
            "6495c3eb756614ec2443881a|6878ea6f-7eaf-4c34-d722-c82cd280f94b",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 50,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1540655063262,
    },
    "e-94": {
      id: "e-94",
      animationType: "custom",
      eventTypeId: "SCROLL_OUT_OF_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-17",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-93",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".section-footer-spacer",
        originalId:
          "6495c3eb756614ec2443881a|6878ea6f-7eaf-4c34-d722-c82cd280f94b",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".section-footer-spacer",
          originalId:
            "6495c3eb756614ec2443881a|6878ea6f-7eaf-4c34-d722-c82cd280f94b",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 50,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1540655063262,
    },
    "e-95": {
      id: "e-95",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-18",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-96",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: null,
        originalId:
          "6495c3eb756614ec2443881a|2d7bb7af-76f2-4740-9f59-ab874f8f5bbd",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: null,
          originalId:
            "6495c3eb756614ec2443881a|2d7bb7af-76f2-4740-9f59-ab874f8f5bbd",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 50,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1540655063262,
    },
    "e-96": {
      id: "e-96",
      animationType: "custom",
      eventTypeId: "SCROLL_OUT_OF_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-19",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-95",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: null,
        originalId:
          "6495c3eb756614ec2443881a|2d7bb7af-76f2-4740-9f59-ab874f8f5bbd",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: null,
          originalId:
            "6495c3eb756614ec2443881a|2d7bb7af-76f2-4740-9f59-ab874f8f5bbd",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 50,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1540655063262,
    },
    "e-97": {
      id: "e-97",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-98",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: null,
        originalId:
          "6495c3eb756614ec2443881a|e34a8eb4-7208-8e8c-aaa0-09d483d09173",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: null,
          originalId:
            "6495c3eb756614ec2443881a|e34a8eb4-7208-8e8c-aaa0-09d483d09173",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 50,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1540655063262,
    },
    "e-98": {
      id: "e-98",
      animationType: "custom",
      eventTypeId: "SCROLL_OUT_OF_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-97",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: null,
        originalId:
          "6495c3eb756614ec2443881a|e34a8eb4-7208-8e8c-aaa0-09d483d09173",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: null,
          originalId:
            "6495c3eb756614ec2443881a|e34a8eb4-7208-8e8c-aaa0-09d483d09173",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 50,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1540655063262,
    },
    "e-99": {
      id: "e-99",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-100",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: null,
        originalId:
          "6495c3eb756614ec2443881a|5a4ae3e3-e8a9-2fa7-429e-c18e2a1b1eed",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: null,
          originalId:
            "6495c3eb756614ec2443881a|5a4ae3e3-e8a9-2fa7-429e-c18e2a1b1eed",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 50,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1540655063262,
    },
    "e-100": {
      id: "e-100",
      animationType: "custom",
      eventTypeId: "SCROLL_OUT_OF_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-23",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-99",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: null,
        originalId:
          "6495c3eb756614ec2443881a|5a4ae3e3-e8a9-2fa7-429e-c18e2a1b1eed",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: null,
          originalId:
            "6495c3eb756614ec2443881a|5a4ae3e3-e8a9-2fa7-429e-c18e2a1b1eed",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 50,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1540655063262,
    },
    "e-101": {
      id: "e-101",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-26", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6495c3eb756614ec2443881a",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6495c3eb756614ec2443881a",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-26-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1687267364456,
    },
    "e-102": {
      id: "e-102",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-15", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6495c3eb756614ec2443881a|0681b767-e82e-12f9-b1ee-4a4d58782235",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6495c3eb756614ec2443881a|0681b767-e82e-12f9-b1ee-4a4d58782235",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-15-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1687293366872,
    },
    "e-104": {
      id: "e-104",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-28",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-113",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6495c3eb756614ec24438821|a28805b6-e074-4ce7-4720-24167c3e392c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6495c3eb756614ec24438821|a28805b6-e074-4ce7-4720-24167c3e392c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1581565606175,
    },
    "e-106": {
      id: "e-106",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-111",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6495c3eb756614ec24438821|a28805b6-e074-4ce7-4720-24167c3e3936",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6495c3eb756614ec24438821|a28805b6-e074-4ce7-4720-24167c3e3936",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1591184406003,
    },
    "e-107": {
      id: "e-107",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-28",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-114",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6495c3eb756614ec24438821|a28805b6-e074-4ce7-4720-24167c3e3948",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6495c3eb756614ec24438821|a28805b6-e074-4ce7-4720-24167c3e3948",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1591184430019,
    },
    "e-108": {
      id: "e-108",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-109",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6495c3eb756614ec24438821|a28805b6-e074-4ce7-4720-24167c3e393f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6495c3eb756614ec24438821|a28805b6-e074-4ce7-4720-24167c3e393f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1591184415942,
    },
    "e-109": {
      id: "e-109",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-28",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-108",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6495c3eb756614ec24438821|a28805b6-e074-4ce7-4720-24167c3e393f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6495c3eb756614ec24438821|a28805b6-e074-4ce7-4720-24167c3e393f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1591184415943,
    },
    "e-111": {
      id: "e-111",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-28",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-106",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6495c3eb756614ec24438821|a28805b6-e074-4ce7-4720-24167c3e3936",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6495c3eb756614ec24438821|a28805b6-e074-4ce7-4720-24167c3e3936",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1591184406003,
    },
    "e-113": {
      id: "e-113",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-104",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6495c3eb756614ec24438821|a28805b6-e074-4ce7-4720-24167c3e392c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6495c3eb756614ec24438821|a28805b6-e074-4ce7-4720-24167c3e392c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1581565606173,
    },
    "e-114": {
      id: "e-114",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-107",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6495c3eb756614ec24438821|a28805b6-e074-4ce7-4720-24167c3e3948",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6495c3eb756614ec24438821|a28805b6-e074-4ce7-4720-24167c3e3948",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1591184430018,
    },
    "e-115": {
      id: "e-115",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-116",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6495c3eb756614ec24438821|4be58534-f3ce-e452-d690-c501bfe5424f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6495c3eb756614ec24438821|4be58534-f3ce-e452-d690-c501bfe5424f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687333090068,
    },
    "e-116": {
      id: "e-116",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-28",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-115",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6495c3eb756614ec24438821|4be58534-f3ce-e452-d690-c501bfe5424f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6495c3eb756614ec24438821|4be58534-f3ce-e452-d690-c501bfe5424f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687333090068,
    },
    "e-117": {
      id: "e-117",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-118",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6495c3eb756614ec24438821|8be84086-622c-597b-fa43-ced7ff340df0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6495c3eb756614ec24438821|8be84086-622c-597b-fa43-ced7ff340df0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687333155540,
    },
    "e-118": {
      id: "e-118",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-28",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-117",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6495c3eb756614ec24438821|8be84086-622c-597b-fa43-ced7ff340df0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6495c3eb756614ec24438821|8be84086-622c-597b-fa43-ced7ff340df0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687333155540,
    },
    "e-119": {
      id: "e-119",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-120",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6495c3eb756614ec24438821|6518d52b-b44a-0c6a-a029-b3dd0a245c43",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6495c3eb756614ec24438821|6518d52b-b44a-0c6a-a029-b3dd0a245c43",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687333156785,
    },
    "e-120": {
      id: "e-120",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-28",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-119",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6495c3eb756614ec24438821|6518d52b-b44a-0c6a-a029-b3dd0a245c43",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6495c3eb756614ec24438821|6518d52b-b44a-0c6a-a029-b3dd0a245c43",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687333156785,
    },
    "e-121": {
      id: "e-121",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-122",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6495c3eb756614ec24438821|f0159129-c4f3-b3c7-2b4b-4e85c3d7271e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6495c3eb756614ec24438821|f0159129-c4f3-b3c7-2b4b-4e85c3d7271e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687333157425,
    },
    "e-122": {
      id: "e-122",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-28",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-121",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6495c3eb756614ec24438821|f0159129-c4f3-b3c7-2b4b-4e85c3d7271e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6495c3eb756614ec24438821|f0159129-c4f3-b3c7-2b4b-4e85c3d7271e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687333157425,
    },
    "e-123": {
      id: "e-123",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-124",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6495c3eb756614ec24438821|4efb0103-9110-3210-393a-0a52fd035e61",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6495c3eb756614ec24438821|4efb0103-9110-3210-393a-0a52fd035e61",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687333159914,
    },
    "e-124": {
      id: "e-124",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-28",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-123",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6495c3eb756614ec24438821|4efb0103-9110-3210-393a-0a52fd035e61",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6495c3eb756614ec24438821|4efb0103-9110-3210-393a-0a52fd035e61",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687333159914,
    },
  },
  actionLists: {
    a: {
      id: "a",
      title: "cards-wrap",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".hero__person.mod--2",
                  selectorGuids: [
                    "ce753819-5812-9da2-36fd-a000388410e0",
                    "ce753819-5812-9da2-36fd-a000388410f5",
                  ],
                },
                widthValue: 21,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-n-2",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".hero__person-img.mod--3",
                  selectorGuids: [
                    "ce753819-5812-9da2-36fd-a000388410d1",
                    "ce753819-5812-9da2-36fd-a000388410f7",
                  ],
                },
                heightValue: 100,
                widthUnit: "PX",
                heightUnit: "%",
                locked: false,
              },
            },
            {
              id: "a-n-3",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".hero__person-img.mod--2",
                  selectorGuids: [
                    "ce753819-5812-9da2-36fd-a000388410d1",
                    "ce753819-5812-9da2-36fd-a000388410f4",
                  ],
                },
                heightValue: 100,
                widthUnit: "PX",
                heightUnit: "%",
                locked: false,
              },
            },
            {
              id: "a-n-4",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".hero__person-img.mod--1",
                  selectorGuids: [
                    "ce753819-5812-9da2-36fd-a000388410d1",
                    "ce753819-5812-9da2-36fd-a00038841101",
                  ],
                },
                heightValue: 115,
                widthUnit: "PX",
                heightUnit: "%",
                locked: false,
              },
            },
            {
              id: "a-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".hero__person-txt-more.mod--3",
                  selectorGuids: [
                    "ce753819-5812-9da2-36fd-a000388410e1",
                    "ce753819-5812-9da2-36fd-a000388410fc",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".hero__person-txt-less.mod--3",
                  selectorGuids: [
                    "ce753819-5812-9da2-36fd-a000388410d9",
                    "ce753819-5812-9da2-36fd-a000388410fd",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".hero__person-txt-more.mod--2",
                  selectorGuids: [
                    "ce753819-5812-9da2-36fd-a000388410e1",
                    "ce753819-5812-9da2-36fd-a000388410ea",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".hero__person-txt-less.mod--2",
                  selectorGuids: [
                    "ce753819-5812-9da2-36fd-a000388410d9",
                    "ce753819-5812-9da2-36fd-a000388410f1",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".hero__person-txt-less.mod--1",
                  selectorGuids: [
                    "ce753819-5812-9da2-36fd-a000388410d9",
                    "ce753819-5812-9da2-36fd-a000388410e9",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".hero__person-txt-more.mod--1",
                  selectorGuids: [
                    "ce753819-5812-9da2-36fd-a000388410e1",
                    "ce753819-5812-9da2-36fd-a000388410eb",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-n-11",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".hero__person.mod--1",
                  selectorGuids: [
                    "ce753819-5812-9da2-36fd-a000388410e0",
                    "ce753819-5812-9da2-36fd-a000388410f0",
                  ],
                },
                widthValue: 58,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-n-12",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".hero__person.mod--3",
                  selectorGuids: [
                    "ce753819-5812-9da2-36fd-a000388410e0",
                    "ce753819-5812-9da2-36fd-a000388410ef",
                  ],
                },
                widthValue: 21,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1635972718397,
    },
    "a-2": {
      id: "a-2",
      title: "card 1",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-2-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".hero__person.mod--1",
                  selectorGuids: [
                    "ce753819-5812-9da2-36fd-a000388410e0",
                    "ce753819-5812-9da2-36fd-a000388410f0",
                  ],
                },
                widthValue: 58,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-2-n-2",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".hero__person.mod--2",
                  selectorGuids: [
                    "ce753819-5812-9da2-36fd-a000388410e0",
                    "ce753819-5812-9da2-36fd-a000388410f5",
                  ],
                },
                widthValue: 21,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-2-n-3",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".hero__person.mod--3",
                  selectorGuids: [
                    "ce753819-5812-9da2-36fd-a000388410e0",
                    "ce753819-5812-9da2-36fd-a000388410ef",
                  ],
                },
                widthValue: 21,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-2-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".hero__person-txt-more.mod--3",
                  selectorGuids: [
                    "ce753819-5812-9da2-36fd-a000388410e1",
                    "ce753819-5812-9da2-36fd-a000388410fc",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-2-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".hero__person-txt-more.mod--2",
                  selectorGuids: [
                    "ce753819-5812-9da2-36fd-a000388410e1",
                    "ce753819-5812-9da2-36fd-a000388410ea",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-2-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".hero__person-txt-less.mod--1",
                  selectorGuids: [
                    "ce753819-5812-9da2-36fd-a000388410d9",
                    "ce753819-5812-9da2-36fd-a000388410e9",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-2-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".hero__person-txt-more.mod--1",
                  selectorGuids: [
                    "ce753819-5812-9da2-36fd-a000388410e1",
                    "ce753819-5812-9da2-36fd-a000388410eb",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-2-n-8",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".hero__person-img.mod--3",
                  selectorGuids: [
                    "ce753819-5812-9da2-36fd-a000388410d1",
                    "ce753819-5812-9da2-36fd-a000388410f7",
                  ],
                },
                heightValue: 100,
                widthUnit: "PX",
                heightUnit: "%",
                locked: false,
              },
            },
            {
              id: "a-2-n-9",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".hero__person-img.mod--2",
                  selectorGuids: [
                    "ce753819-5812-9da2-36fd-a000388410d1",
                    "ce753819-5812-9da2-36fd-a000388410f4",
                  ],
                },
                heightValue: 100,
                widthUnit: "PX",
                heightUnit: "%",
                locked: false,
              },
            },
            {
              id: "a-2-n-10",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".hero__person-img.mod--1",
                  selectorGuids: [
                    "ce753819-5812-9da2-36fd-a000388410d1",
                    "ce753819-5812-9da2-36fd-a00038841101",
                  ],
                },
                heightValue: 115,
                widthUnit: "PX",
                heightUnit: "%",
                locked: false,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-2-n-11",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".hero__person.mod--2",
                  selectorGuids: [
                    "ce753819-5812-9da2-36fd-a000388410e0",
                    "ce753819-5812-9da2-36fd-a000388410f5",
                  ],
                },
                widthValue: 21,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-2-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".hero__person-txt-more.mod--3",
                  selectorGuids: [
                    "ce753819-5812-9da2-36fd-a000388410e1",
                    "ce753819-5812-9da2-36fd-a000388410fc",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-2-n-13",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".hero__person-txt-less.mod--3",
                  selectorGuids: [
                    "ce753819-5812-9da2-36fd-a000388410d9",
                    "ce753819-5812-9da2-36fd-a000388410fd",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-2-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".hero__person-txt-more.mod--2",
                  selectorGuids: [
                    "ce753819-5812-9da2-36fd-a000388410e1",
                    "ce753819-5812-9da2-36fd-a000388410ea",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-2-n-15",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".hero__person-txt-less.mod--2",
                  selectorGuids: [
                    "ce753819-5812-9da2-36fd-a000388410d9",
                    "ce753819-5812-9da2-36fd-a000388410f1",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-2-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".hero__person-txt-less.mod--1",
                  selectorGuids: [
                    "ce753819-5812-9da2-36fd-a000388410d9",
                    "ce753819-5812-9da2-36fd-a000388410e9",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-2-n-17",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".hero__person-txt-more.mod--1",
                  selectorGuids: [
                    "ce753819-5812-9da2-36fd-a000388410e1",
                    "ce753819-5812-9da2-36fd-a000388410eb",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-2-n-18",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".hero__person.mod--1",
                  selectorGuids: [
                    "ce753819-5812-9da2-36fd-a000388410e0",
                    "ce753819-5812-9da2-36fd-a000388410f0",
                  ],
                },
                widthValue: 58,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-2-n-19",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".hero__person.mod--3",
                  selectorGuids: [
                    "ce753819-5812-9da2-36fd-a000388410e0",
                    "ce753819-5812-9da2-36fd-a000388410ef",
                  ],
                },
                widthValue: 21,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-2-n-20",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".hero__person-img.mod--1",
                  selectorGuids: [
                    "ce753819-5812-9da2-36fd-a000388410d1",
                    "ce753819-5812-9da2-36fd-a00038841101",
                  ],
                },
                heightValue: 115,
                widthUnit: "PX",
                heightUnit: "%",
                locked: false,
              },
            },
            {
              id: "a-2-n-21",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".hero__person-img.mod--3",
                  selectorGuids: [
                    "ce753819-5812-9da2-36fd-a000388410d1",
                    "ce753819-5812-9da2-36fd-a000388410f7",
                  ],
                },
                heightValue: 100,
                widthUnit: "PX",
                heightUnit: "%",
                locked: false,
              },
            },
            {
              id: "a-2-n-22",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".hero__person-img.mod--2",
                  selectorGuids: [
                    "ce753819-5812-9da2-36fd-a000388410d1",
                    "ce753819-5812-9da2-36fd-a000388410f4",
                  ],
                },
                heightValue: 100,
                widthUnit: "PX",
                heightUnit: "%",
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1635972718397,
    },
    "a-3": {
      id: "a-3",
      title: "card 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-3-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".hero__person.mod--2",
                  selectorGuids: [
                    "ce753819-5812-9da2-36fd-a000388410e0",
                    "ce753819-5812-9da2-36fd-a000388410f5",
                  ],
                },
                widthValue: 58,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-3-n-2",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".hero__person-img.mod--1",
                  selectorGuids: [
                    "ce753819-5812-9da2-36fd-a000388410d1",
                    "ce753819-5812-9da2-36fd-a00038841101",
                  ],
                },
                heightValue: 100,
                widthUnit: "PX",
                heightUnit: "%",
                locked: false,
              },
            },
            {
              id: "a-3-n-3",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".hero__person-img.mod--3",
                  selectorGuids: [
                    "ce753819-5812-9da2-36fd-a000388410d1",
                    "ce753819-5812-9da2-36fd-a000388410f7",
                  ],
                },
                heightValue: 100,
                widthUnit: "PX",
                heightUnit: "%",
                locked: false,
              },
            },
            {
              id: "a-3-n-4",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".hero__person-img.mod--2",
                  selectorGuids: [
                    "ce753819-5812-9da2-36fd-a000388410d1",
                    "ce753819-5812-9da2-36fd-a000388410f4",
                  ],
                },
                heightValue: 115,
                widthUnit: "%",
                heightUnit: "%",
                locked: false,
              },
            },
            {
              id: "a-3-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".hero__person-txt-more.mod--3",
                  selectorGuids: [
                    "ce753819-5812-9da2-36fd-a000388410e1",
                    "ce753819-5812-9da2-36fd-a000388410fc",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-3-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".hero__person-txt-less.mod--3",
                  selectorGuids: [
                    "ce753819-5812-9da2-36fd-a000388410d9",
                    "ce753819-5812-9da2-36fd-a000388410fd",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-3-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".hero__person-txt-more.mod--2",
                  selectorGuids: [
                    "ce753819-5812-9da2-36fd-a000388410e1",
                    "ce753819-5812-9da2-36fd-a000388410ea",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-3-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".hero__person-txt-less.mod--2",
                  selectorGuids: [
                    "ce753819-5812-9da2-36fd-a000388410d9",
                    "ce753819-5812-9da2-36fd-a000388410f1",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-3-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".hero__person-txt-less.mod--1",
                  selectorGuids: [
                    "ce753819-5812-9da2-36fd-a000388410d9",
                    "ce753819-5812-9da2-36fd-a000388410e9",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-3-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".hero__person-txt-more.mod--1",
                  selectorGuids: [
                    "ce753819-5812-9da2-36fd-a000388410e1",
                    "ce753819-5812-9da2-36fd-a000388410eb",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-3-n-11",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".hero__person.mod--1",
                  selectorGuids: [
                    "ce753819-5812-9da2-36fd-a000388410e0",
                    "ce753819-5812-9da2-36fd-a000388410f0",
                  ],
                },
                widthValue: 21,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-3-n-12",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".hero__person.mod--3",
                  selectorGuids: [
                    "ce753819-5812-9da2-36fd-a000388410e0",
                    "ce753819-5812-9da2-36fd-a000388410ef",
                  ],
                },
                widthValue: 21,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1635972718397,
    },
    "a-4": {
      id: "a-4",
      title: "card 3",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-4-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".hero__person.mod--2",
                  selectorGuids: [
                    "ce753819-5812-9da2-36fd-a000388410e0",
                    "ce753819-5812-9da2-36fd-a000388410f5",
                  ],
                },
                widthValue: 21,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-4-n-2",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".hero__person-img.mod--1",
                  selectorGuids: [
                    "ce753819-5812-9da2-36fd-a000388410d1",
                    "ce753819-5812-9da2-36fd-a00038841101",
                  ],
                },
                heightValue: 100,
                widthUnit: "PX",
                heightUnit: "%",
                locked: false,
              },
            },
            {
              id: "a-4-n-3",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".hero__person-img.mod--2",
                  selectorGuids: [
                    "ce753819-5812-9da2-36fd-a000388410d1",
                    "ce753819-5812-9da2-36fd-a000388410f4",
                  ],
                },
                heightValue: 100,
                widthUnit: "PX",
                heightUnit: "%",
                locked: false,
              },
            },
            {
              id: "a-4-n-4",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".hero__person-img.mod--3",
                  selectorGuids: [
                    "ce753819-5812-9da2-36fd-a000388410d1",
                    "ce753819-5812-9da2-36fd-a000388410f7",
                  ],
                },
                heightValue: 115,
                widthUnit: "PX",
                heightUnit: "%",
                locked: false,
              },
            },
            {
              id: "a-4-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".hero__person-txt-more.mod--3",
                  selectorGuids: [
                    "ce753819-5812-9da2-36fd-a000388410e1",
                    "ce753819-5812-9da2-36fd-a000388410fc",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-4-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".hero__person-txt-less.mod--3",
                  selectorGuids: [
                    "ce753819-5812-9da2-36fd-a000388410d9",
                    "ce753819-5812-9da2-36fd-a000388410fd",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-4-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".hero__person-txt-more.mod--2",
                  selectorGuids: [
                    "ce753819-5812-9da2-36fd-a000388410e1",
                    "ce753819-5812-9da2-36fd-a000388410ea",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-4-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".hero__person-txt-less.mod--2",
                  selectorGuids: [
                    "ce753819-5812-9da2-36fd-a000388410d9",
                    "ce753819-5812-9da2-36fd-a000388410f1",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-4-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".hero__person-txt-less.mod--1",
                  selectorGuids: [
                    "ce753819-5812-9da2-36fd-a000388410d9",
                    "ce753819-5812-9da2-36fd-a000388410e9",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-4-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".hero__person-txt-more.mod--1",
                  selectorGuids: [
                    "ce753819-5812-9da2-36fd-a000388410e1",
                    "ce753819-5812-9da2-36fd-a000388410eb",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-4-n-11",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".hero__person.mod--1",
                  selectorGuids: [
                    "ce753819-5812-9da2-36fd-a000388410e0",
                    "ce753819-5812-9da2-36fd-a000388410f0",
                  ],
                },
                widthValue: 21,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-4-n-12",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".hero__person.mod--3",
                  selectorGuids: [
                    "ce753819-5812-9da2-36fd-a000388410e0",
                    "ce753819-5812-9da2-36fd-a000388410ef",
                  ],
                },
                widthValue: 58,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1635972718397,
    },
    "a-5": {
      id: "a-5",
      title: "faq4_question Reveal 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-5-n",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".combine-faq4_expander",
                  selectorGuids: ["53ca41a2-91d6-286c-3cb6-21ee1c41a85d"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-5-n-2",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".combine-faq4_answer-2",
                  selectorGuids: ["53ca41a2-91d6-286c-3cb6-21ee1c41a85e"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "rem",
                locked: false,
              },
            },
            {
              id: "a-5-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".combine-faq4_answer-2",
                  selectorGuids: ["53ca41a2-91d6-286c-3cb6-21ee1c41a85e"],
                },
                value: "none",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-5-n-4",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".combine-faq4_answer-2",
                  selectorGuids: ["53ca41a2-91d6-286c-3cb6-21ee1c41a85e"],
                },
                value: "block",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-5-n-5",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 250,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".combine-faq4_expander",
                  selectorGuids: ["53ca41a2-91d6-286c-3cb6-21ee1c41a85d"],
                },
                zValue: 180,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-5-n-6",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 800,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".combine-faq4_answer-2",
                  selectorGuids: ["53ca41a2-91d6-286c-3cb6-21ee1c41a85e"],
                },
                widthUnit: "PX",
                heightUnit: "AUTO",
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1663928430946,
    },
    "a-6": {
      id: "a-6",
      title: "faq4_question Hide 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-6-n",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 250,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".combine-faq4_expander",
                  selectorGuids: ["53ca41a2-91d6-286c-3cb6-21ee1c41a85d"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-6-n-2",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".combine-faq4_answer-2",
                  selectorGuids: ["53ca41a2-91d6-286c-3cb6-21ee1c41a85e"],
                },
                heightValue: 100,
                widthUnit: "PX",
                heightUnit: "%",
                locked: false,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-6-n-4",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".combine-faq4_answer-2",
                  selectorGuids: ["53ca41a2-91d6-286c-3cb6-21ee1c41a85e"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-6-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".combine-faq4_answer-2",
                  selectorGuids: ["53ca41a2-91d6-286c-3cb6-21ee1c41a85e"],
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1663928740230,
    },
    "a-7": {
      id: "a-7",
      title: "Timeline 4",
      continuousParameterGroups: [
        {
          id: "a-7-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-7-n",
                  actionTypeId: "STYLE_SIZE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "6495c3eb756614ec24438821|48521bfb-343b-70e7-de50-f1b1576b582a",
                    },
                    heightValue: 0,
                    widthUnit: "PX",
                    heightUnit: "%",
                    locked: false,
                  },
                },
                {
                  id: "a-7-n-2",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".timeline_item.is-1",
                      selectorGuids: [
                        "a40860e8-2699-46c6-90b7-d1b51ccd1a07",
                        "a40860e8-2699-46c6-90b7-d1b51ccd1a11",
                      ],
                    },
                    value: 0.25,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 5,
              actionItems: [
                {
                  id: "a-7-n-3",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".timeline_item.is-1",
                      selectorGuids: [
                        "a40860e8-2699-46c6-90b7-d1b51ccd1a07",
                        "a40860e8-2699-46c6-90b7-d1b51ccd1a11",
                      ],
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 28,
              actionItems: [
                {
                  id: "a-7-n-4",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".timeline_item.is-2",
                      selectorGuids: [
                        "a40860e8-2699-46c6-90b7-d1b51ccd1a07",
                        "a40860e8-2699-46c6-90b7-d1b51ccd1a15",
                      ],
                    },
                    value: 0.25,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 33,
              actionItems: [
                {
                  id: "a-7-n-5",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".timeline_item.is-2",
                      selectorGuids: [
                        "a40860e8-2699-46c6-90b7-d1b51ccd1a07",
                        "a40860e8-2699-46c6-90b7-d1b51ccd1a15",
                      ],
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 52,
              actionItems: [
                {
                  id: "a-7-n-6",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".timeline_item.is-3",
                      selectorGuids: [
                        "a40860e8-2699-46c6-90b7-d1b51ccd1a07",
                        "a40860e8-2699-46c6-90b7-d1b51ccd1a13",
                      ],
                    },
                    value: 0.25,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 57,
              actionItems: [
                {
                  id: "a-7-n-7",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".timeline_item.is-3",
                      selectorGuids: [
                        "a40860e8-2699-46c6-90b7-d1b51ccd1a07",
                        "a40860e8-2699-46c6-90b7-d1b51ccd1a13",
                      ],
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 75,
              actionItems: [
                {
                  id: "a-7-n-8",
                  actionTypeId: "STYLE_SIZE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "6495c3eb756614ec24438821|48521bfb-343b-70e7-de50-f1b1576b582a",
                    },
                    heightValue: 100,
                    widthUnit: "PX",
                    heightUnit: "%",
                    locked: false,
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1676650509169,
    },
    "a-8": {
      id: "a-8",
      title: "learn-more_hover-in",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-8-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".learn-more-arrow",
                  selectorGuids: ["0f29e99d-1c24-6e2e-4192-7344b2c6d70e"],
                },
                xValue: 0.25,
                xUnit: "rem",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1626453050476,
    },
    "a-9": {
      id: "a-9",
      title: "learn-more_hover-out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-9-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".learn-more-arrow",
                  selectorGuids: ["0f29e99d-1c24-6e2e-4192-7344b2c6d70e"],
                },
                xValue: 0,
                xUnit: "rem",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1626453050476,
    },
    "a-15": {
      id: "a-15",
      title: "Text Para Animation",
      continuousParameterGroups: [
        {
          id: "a-15-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 28,
              actionItems: [
                {
                  id: "a-15-n",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "SIBLINGS",
                      selector: ".moving-color",
                      selectorGuids: ["66d7308b-7294-acaf-1d41-c3018b44c525"],
                    },
                    globalSwatchId: "",
                    rValue: 172,
                    bValue: 172,
                    gValue: 172,
                    aValue: 1,
                  },
                },
                {
                  id: "a-15-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".movingp",
                      selectorGuids: ["66d7308b-7294-acaf-1d41-c3018b44c529"],
                    },
                    yValue: 84,
                    xUnit: "PX",
                    yUnit: "px",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-15-n-3",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".movingp",
                      selectorGuids: ["66d7308b-7294-acaf-1d41-c3018b44c529"],
                    },
                    value: 0,
                    unit: "",
                  },
                },
                {
                  id: "a-15-n-4",
                  actionTypeId: "STYLE_SIZE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "PARENT",
                      selector: ".wrapper",
                      selectorGuids: ["66d7308b-7294-acaf-1d41-c3018b44c524"],
                    },
                    heightValue: 70,
                    widthUnit: "PX",
                    heightUnit: "px",
                    locked: false,
                  },
                },
              ],
            },
            {
              keyframe: 38,
              actionItems: [
                {
                  id: "a-15-n-5",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "SIBLINGS",
                      selector: ".moving-color",
                      selectorGuids: ["66d7308b-7294-acaf-1d41-c3018b44c525"],
                    },
                    globalSwatchId: "",
                    rValue: 146,
                    bValue: 146,
                    gValue: 146,
                    aValue: 1,
                  },
                },
                {
                  id: "a-15-n-6",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "SIBLINGS",
                      selector: ".moving-color",
                      selectorGuids: ["66d7308b-7294-acaf-1d41-c3018b44c525"],
                    },
                    globalSwatchId: "",
                    rValue: 255,
                    bValue: 0,
                    gValue: 0,
                    aValue: 1,
                  },
                },
                {
                  id: "a-15-n-7",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".movingp",
                      selectorGuids: ["66d7308b-7294-acaf-1d41-c3018b44c529"],
                    },
                    yValue: 84,
                    xUnit: "PX",
                    yUnit: "px",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-15-n-8",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".movingp",
                      selectorGuids: ["66d7308b-7294-acaf-1d41-c3018b44c529"],
                    },
                    value: 0,
                    unit: "",
                  },
                },
                {
                  id: "a-15-n-9",
                  actionTypeId: "STYLE_SIZE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "PARENT",
                      selector: ".wrapper",
                      selectorGuids: ["66d7308b-7294-acaf-1d41-c3018b44c524"],
                    },
                    heightValue: 80,
                    widthUnit: "PX",
                    heightUnit: "px",
                    locked: false,
                  },
                },
              ],
            },
            {
              keyframe: 41,
              actionItems: [
                {
                  id: "a-15-n-10",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "SIBLINGS",
                      selector: ".moving-color",
                      selectorGuids: ["66d7308b-7294-acaf-1d41-c3018b44c525"],
                    },
                    globalSwatchId: "debb3894",
                    rValue: 45,
                    bValue: 84,
                    gValue: 105,
                    aValue: 1,
                  },
                },
                {
                  id: "a-15-n-11",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".movingp",
                      selectorGuids: ["66d7308b-7294-acaf-1d41-c3018b44c529"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "px",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-15-n-12",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".movingp",
                      selectorGuids: ["66d7308b-7294-acaf-1d41-c3018b44c529"],
                    },
                    value: 1,
                    unit: "",
                  },
                },
                {
                  id: "a-15-n-13",
                  actionTypeId: "STYLE_SIZE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "PARENT",
                      selector: ".wrapper",
                      selectorGuids: ["66d7308b-7294-acaf-1d41-c3018b44c524"],
                    },
                    heightValue: 150,
                    widthUnit: "PX",
                    heightUnit: "px",
                    locked: false,
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1687248666695,
    },
    "a-16": {
      id: "a-16",
      title: "hide-vertical-nav",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-16-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 200,
                target: {
                  id: "6495c3eb756614ec2443881a|6878ea6f-7eaf-4c34-d722-c82cd280f938",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1540654992026,
    },
    "a-17": {
      id: "a-17",
      title: "show-vertical-nav",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-17-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  id: "6495c3eb756614ec2443881a|6878ea6f-7eaf-4c34-d722-c82cd280f938",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1540654992026,
    },
    "a-18": {
      id: "a-18",
      title: "hide-vertical-nav 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-18-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 200,
                target: {
                  id: "6495c3eb756614ec2443881a|2d7bb7af-76f2-4740-9f59-ab874f8f5baa",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1540654992026,
    },
    "a-19": {
      id: "a-19",
      title: "show-vertical-nav 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-19-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  id: "6495c3eb756614ec2443881a|2d7bb7af-76f2-4740-9f59-ab874f8f5baa",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1540654992026,
    },
    "a-20": {
      id: "a-20",
      title: "hide-vertical-nav 3",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-20-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 200,
                target: {
                  id: "6495c3eb756614ec2443881a|e34a8eb4-7208-8e8c-aaa0-09d483d09160",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1540654992026,
    },
    "a-21": {
      id: "a-21",
      title: "show-vertical-nav 3",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-21-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  id: "6495c3eb756614ec2443881a|e34a8eb4-7208-8e8c-aaa0-09d483d09160",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1540654992026,
    },
    "a-22": {
      id: "a-22",
      title: "hide-vertical-nav 4",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-22-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 200,
                target: {
                  id: "649195de70e6f03c6d66d86c|e9ea64ae-6f08-15b9-d093-ac8d54f4ccce",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1540654992026,
    },
    "a-23": {
      id: "a-23",
      title: "show-vertical-nav 4",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-23-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  id: "649195de70e6f03c6d66d86c|e9ea64ae-6f08-15b9-d093-ac8d54f4ccce",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1540654992026,
    },
    "a-26": {
      id: "a-26",
      title: "new footer anime",
      continuousParameterGroups: [
        {
          id: "a-26-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 75,
              actionItems: [
                {
                  id: "a-26-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".div-block-240",
                      selectorGuids: ["427ab649-df6a-62eb-e218-05d097abad73"],
                    },
                    yValue: -452,
                    xUnit: "PX",
                    yUnit: "px",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 85,
              actionItems: [
                {
                  id: "a-26-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".div-block-240",
                      selectorGuids: ["427ab649-df6a-62eb-e218-05d097abad73"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "px",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1687267372896,
    },
    "a-28": {
      id: "a-28",
      title: "(CLICK) FAQ Question [close]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-28-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-content-2",
                  selectorGuids: ["9f8c37d1-7b7f-153c-459f-7e6cfc4ef1c7"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-28-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".plus-icon",
                  selectorGuids: ["9f8c37d1-7b7f-153c-459f-7e6cfc4ef1c0"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
            {
              id: "a-28-n-3",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "easeIn",
                duration: 350,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-question-wrap",
                  selectorGuids: ["9f8c37d1-7b7f-153c-459f-7e6cfc4ef1c6"],
                },
                globalSwatchId: "",
                rValue: 140,
                bValue: 255,
                gValue: 84,
                aValue: 0.15,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1581565609522,
    },
    "a-27": {
      id: "a-27",
      title: "(CLICK) FAQ Question",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-27-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-content-2",
                  selectorGuids: ["9f8c37d1-7b7f-153c-459f-7e6cfc4ef1c7"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "PX",
                locked: false,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-27-n-2",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-content-2",
                  selectorGuids: ["9f8c37d1-7b7f-153c-459f-7e6cfc4ef1c7"],
                },
                widthUnit: "PX",
                heightUnit: "AUTO",
                locked: false,
              },
            },
            {
              id: "a-27-n-3",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".plus-icon",
                  selectorGuids: ["9f8c37d1-7b7f-153c-459f-7e6cfc4ef1c0"],
                },
                zValue: 135,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
            {
              id: "a-27-n-4",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-question-wrap",
                  selectorGuids: ["9f8c37d1-7b7f-153c-459f-7e6cfc4ef1c6"],
                },
                globalSwatchId: "",
                rValue: 140,
                bValue: 255,
                gValue: 84,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1581565609522,
    },
    slideInBottom: {
      id: "slideInBottom",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 100,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
    flipInLeft: {
      id: "flipInLeft",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                duration: 0,
                delay: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: -90,
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
  },
  site: {
    mediaQueries: [
      { key: "main", min: 992, max: 10000 },
      { key: "medium", min: 768, max: 991 },
      { key: "small", min: 480, max: 767 },
      { key: "tiny", min: 0, max: 479 },
    ],
  },
});

/* Showing Slider */
function moving_div_hero() {
  let element = document.getElementById("heroColumnsSliding");
  let element2 = document.getElementById("heroColumnIcons");
  element2.style.display = "none";
  element.style.width = "103.2%";
  element.style.backgroundColor = "wheat";

  element.style.transition = "all .5s ease-out";
}

function moving_div_out() {
  let element = document.getElementById("heroColumnsSliding");
  let element2 = document.getElementById("heroColumnIcons");
  element2.style.display = "block";
  element.style.backgroundColor = "wheat";
  element.style.width = "30px";

  element.style.right = "-50px";
  element.style.transition = "all .5s ease-out";
}
