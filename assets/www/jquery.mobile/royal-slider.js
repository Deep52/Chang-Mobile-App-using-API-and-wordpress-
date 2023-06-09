// jquery.royalslider v9.5.0
(function (n) {
    function u(b, e) {
        var c, a = this,
            g = navigator.userAgent.toLowerCase();
        a.uid = n.rsModules.uid++;
        a.ns = ".rs" + a.uid;
        var f = document.createElement("div").style,
            d = ["webkit", "Moz", "ms", "O"],
            h = "",
            k = 0,
            l;
        for (c = 0; c < d.length; c++) l = d[c], !h && l + "Transform" in f && (h = l), l = l.toLowerCase(), window.requestAnimationFrame || (window.requestAnimationFrame = window[l + "RequestAnimationFrame"], window.cancelAnimationFrame = window[l + "CancelAnimationFrame"] || window[l + "CancelRequestAnimationFrame"]);
        window.requestAnimationFrame ||
            (window.requestAnimationFrame = function (a, b) {
            var d = (new Date).getTime(),
                c = Math.max(0, 16 - (d - k)),
                g = window.setTimeout(function () {
                    a(d + c)
                }, c);
            k = d + c;
            return g
        });
        window.cancelAnimationFrame || (window.cancelAnimationFrame = function (a) {
            clearTimeout(a)
        });
        a.isIPAD = g.match(/(ipad)/);
        a.isIOS = a.isIPAD || g.match(/(iphone|ipod)/);
        c = function (a) {
            a = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || 0 > a.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
            return {
                browser: a[1] || "",
                version: a[2] || "0"
            }
        }(g);
        d = {};
        c.browser && (d[c.browser] = !0, d.version = c.version);
        d.chrome && (d.webkit = !0);
        a._a = d;
        a.isAndroid = -1 < g.indexOf("android");
        a.slider = n(b);
        a.ev = n(a);
        a._b = n(document);
        a.st = n.extend({}, n.fn.royalSlider.defaults, e);
        a._c = a.st.transitionSpeed;
        a._d = 0;
        !a.st.allowCSS3 || d.webkit && !a.st.allowCSS3OnWebkit || (c = h + (h ? "T" : "t"), a._e = c + "ransform" in f && c + "ransition" in f, a._e && (a._f = h + (h ? "P" : "p") + "erspective" in f));
        h = h.toLowerCase();
        a._g = "-" + h + "-";
        a._h = "vertical" === a.st.slidesOrientation ? !1 : !0;
        a._i = a._h ? "left" : "top";
        a._j = a._h ? "width" : "height";
        a._k = -1;
        a._l = "fade" === a.st.transitionType ? !1 : !0;
        a._l || (a.st.sliderDrag = !1, a._m = 10);
        a._n = "z-index:0; display:none; opacity:0;";
        a._o = 0;
        a._p = 0;
        a._q = 0;
        n.each(n.rsModules, function (b, d) {
            "uid" !== b && d.call(a)
        });
        a.slides = [];
        a._r = 0;
        (a.st.slides ? n(a.st.slides) : a.slider.children().detach()).each(function () {
            a._s(this, !0)
        });
        a.st.randomizeSlides && a.slides.sort(function () {
            return 0.5 - Math.random()
        });
        a.numSlides = a.slides.length;
        a._t();
        a.st.startSlideId ? a.st.startSlideId >
            a.numSlides - 1 && (a.st.startSlideId = a.numSlides - 1) : a.st.startSlideId = 0;
        a._o = a.staticSlideId = a.currSlideId = a._u = a.st.startSlideId;
        a.currSlide = a.slides[a.currSlideId];
        a._v = 0;
        a.msTouch = !1;
        a.slider.addClass((a._h ? "rsHor" : "rsVer") + (a._l ? "" : " rsFade"));
        f = '<div class="rsOverflow"><div class="rsContainer">';
        a.slidesSpacing = a.st.slidesSpacing;
        a._w = (a._h ? a.slider.width() : a.slider.height()) + a.st.slidesSpacing;
        a._x = Boolean(0 < a._y);
        1 >= a.numSlides && (a._z = !1);
        a._a1 = a._z && a._l ? 2 === a.numSlides ? 1 : 2 : 0;
        a._b1 = 6 > a.numSlides ?
            a.numSlides : 6;
        a._c1 = 0;
        a._d1 = 0;
        a.slidesJQ = [];
        for (c = 0; c < a.numSlides; c++) a.slidesJQ.push(n('<div style="' + (a._l ? "" : c !== a.currSlideId ? a._n : "z-index:0;") + '" class="rsSlide "></div>'));
        a._e1 = f = n(f + "</div></div>");
        var r = a.ns,
            h = function (b, d, c, g, f) {
                a._j1 = b + d + r;
                a._k1 = b + c + r;
                a._l1 = b + g + r;
                f && (a._m1 = b + f + r)
            };
        a.msEnabled = window.navigator.msPointerEnabled;
        a.msEnabled ? (a.msTouch = Boolean(1 < window.navigator.msMaxTouchPoints), a.hasTouch = !1, a._n1 = 0.2, h("MSPointer", "Down", "Move", "Up", "Cancel")) : (a.isIOS ? a._j1 = a._k1 = a._l1 =
            a._m1 = "" : h("mouse", "down", "move", "up", "up"), "ontouchstart" in window || "createTouch" in document ? (a.hasTouch = !0, a._j1 += " touchstart" + r, a._k1 += " touchmove" + r, a._l1 += " touchend" + r, a._m1 += " touchcancel" + r, a._n1 = 0.5, a.st.sliderTouch && (a._f1 = !0)) : (a.hasTouch = !1, a._n1 = 0.2));
        a.st.sliderDrag && (a._f1 = !0, d.msie || d.opera ? a._g1 = a._h1 = "move" : d.mozilla ? (a._g1 = "default", a._h1 = "-moz-grabbing") : d.webkit && -1 != navigator.platform.indexOf("Mac") && (a._g1 = "-webkit-grab", a._h1 = "-webkit-grabbing"), a._i1());
        a.slider.html(f);
        a._o1 = a.st.controlsInside ? a._e1 : a.slider;
        a._p1 = a._e1.children(".rsContainer");
        a.msEnabled && a._p1.css("-ms-touch-action", a._h ? "pan-y" : "pan-x");
        a._q1 = n('<div class="rsPreloader"></div>');
        f = a._p1.children(".rsSlide");
        a._r1 = a.slidesJQ[a.currSlideId];
        a._s1 = 0;
        a._e ? (a._t1 = "transition-property", a._u1 = "transition-duration", a._v1 = "transition-timing-function", a._w1 = a._x1 = a._g + "transform", a._f ? (d.webkit && !d.chrome && a.slider.addClass("rsWebkit3d"), /iphone|ipad|ipod/gi.test(navigator.appVersion), a._y1 = "translate3d(",
            a._z1 = "px, ", a._a2 = "px, 0px)") : (a._y1 = "translate(", a._z1 = "px, ", a._a2 = "px)"), a._l ? a._p1[a._g + a._t1] = a._g + "transform" : (d = {}, d[a._g + a._t1] = "opacity", d[a._g + a._u1] = a.st.transitionSpeed + "ms", d[a._g + a._v1] = a.st.css3easeInOut, f.css(d))) : (a._x1 = "left", a._w1 = "top");
        var m;
        n(window).on("resize" + a.ns, function () {
            m && clearTimeout(m);
            m = setTimeout(function () {
                a.updateSliderSize()
            }, 50)
        });
        a.ev.trigger("rsAfterPropsSetup");
        a.updateSliderSize();
        a.st.keyboardNavEnabled && a._b2();
        a.st.arrowsNavHideOnTouch && (a.hasTouch ||
            a.msTouch) && (a.st.arrowsNav = !1);
        a.st.arrowsNav && (d = a._o1, n('<div class="rsArrow rsArrowLeft"><div class="rsArrowIcn"></div></div><div class="rsArrow rsArrowRight"><div class="rsArrowIcn"></div></div>').appendTo(d), a._c2 = d.children(".rsArrowLeft").click(function (b) {
            b.preventDefault();
            a.prev()
        }), a._d2 = d.children(".rsArrowRight").click(function (b) {
            b.preventDefault();
            a.next()
        }), a.st.arrowsNavAutoHide && !a.hasTouch && (a._c2.addClass("rsHidden"), a._d2.addClass("rsHidden"), d.one("mousemove.arrowshover", function () {
            a._c2.removeClass("rsHidden");
            a._d2.removeClass("rsHidden")
        }), d.hover(function () {
            a._e2 || (a._c2.removeClass("rsHidden"), a._d2.removeClass("rsHidden"))
        }, function () {
            a._e2 || (a._c2.addClass("rsHidden"), a._d2.addClass("rsHidden"))
        })), a.ev.on("rsOnUpdateNav", function () {
            a._f2()
        }), a._f2());
        if (a._f1) a._p1.on(a._j1, function (b) {
            a._g2(b)
        });
        else a.dragSuccess = !1;
        var p = ["rsPlayBtnIcon", "rsPlayBtn", "rsCloseVideoBtn", "rsCloseVideoIcn"];
        a._p1.click(function (b) {
            if (!a.dragSuccess) {
                var d = n(b.target).attr("class");
                if (-1 !== n.inArray(d, p) && a.toggleVideo()) return !1;
                if (a.st.navigateByClick && !a._h2) {
                    if (n(b.target).closest(".rsNoDrag", a._r1).length) return !0;
                    a._i2(b)
                }
                a.ev.trigger("rsSlideClick")
            }
        }).on("click.rs", "a", function (b) {
            if (a.dragSuccess) return !1;
            a._h2 = !0;
            setTimeout(function () {
                a._h2 = !1
            }, 3)
        });
        a.ev.trigger("rsAfterInit")
    }
    n.rsModules || (n.rsModules = {
        uid: 0
    });
    u.prototype = {
        constructor: u,
        _i2: function (b) {
            b = b[this._h ? "pageX" : "pageY"] - this._j2;
            b >= this._q ? this.next() : 0 > b && this.prev()
        },
        _t: function () {
            var b;
            b = this.st.numImagesToPreload;
            if (this._z = this.st.loop) 2 === this.numSlides ?
                (this._z = !1, this.st.loopRewind = !0) : 2 > this.numSlides && (this.st.loopRewind = this._z = !1);
            this._z && 0 < b && (4 >= this.numSlides ? b = 1 : this.st.numImagesToPreload > (this.numSlides - 1) / 2 && (b = Math.floor((this.numSlides - 1) / 2)));
            this._y = b
        },
        _s: function (b, e) {
            function c(b, d) {
                d ? f.images.push(b.attr(d)) : f.images.push(b.text());
                if (h) {
                    h = !1;
                    f.caption = "src" === d ? b.attr("alt") : b.contents();
                    f.image = f.images[0];
                    f.videoURL = b.attr("data-rsVideo");
                    var c = b.attr("data-rsw"),
                        g = b.attr("data-rsh");
                    "undefined" !== typeof c && !1 !== c && "undefined" !==
                        typeof g && !1 !== g ? (f.iW = parseInt(c, 10), f.iH = parseInt(g, 10)) : a.st.imgWidth && a.st.imgHeight && (f.iW = a.st.imgWidth, f.iH = a.st.imgHeight)
                }
            }
            var a = this,
                g, f = {}, d, h = !0;
            b = n(b);
            a._k2 = b;
            a.ev.trigger("rsBeforeParseNode", [b, f]);
            if (!f.stopParsing) return b = a._k2, f.id = a._r, f.contentAdded = !1, a._r++, f.images = [], f.isBig = !1, f.hasCover || (b.hasClass("rsImg") ? (d = b, g = !0) : (d = b.find(".rsImg"), d.length && (g = !0)), g ? (f.bigImage = d.eq(0).attr("data-rsBigImg"), d.each(function () {
                var a = n(this);
                a.is("a") ? c(a, "href") : a.is("img") ? c(a, "src") :
                    c(a)
            })) : b.is("img") && (b.addClass("rsImg rsMainSlideImage"), c(b, "src"))), d = b.find(".rsCaption"), d.length && (f.caption = d.remove()), f.content = b, a.ev.trigger("rsAfterParseNode", [b, f]), e && a.slides.push(f), 0 === f.images.length && (f.isLoaded = !0, f.isRendered = !1, f.isLoading = !1, f.images = null), f
        },
        _b2: function () {
            var b = this,
                e, c, a = function (a) {
                    37 === a ? b.prev() : 39 === a && b.next()
                };
            b._b.on("keydown" + b.ns, function (g) {
                b._l2 || (c = g.keyCode, 37 !== c && 39 !== c || e || (a(c), e = setInterval(function () {
                    a(c)
                }, 700)))
            }).on("keyup" + b.ns, function (a) {
                e &&
                    (clearInterval(e), e = null)
            })
        },
        goTo: function (b, e) {
            b !== this.currSlideId && this._m2(b, this.st.transitionSpeed, !0, !e)
        },
        destroy: function (b) {
            this.ev.trigger("rsBeforeDestroy");
            this._b.off("keydown" + this.ns + " keyup" + this.ns + " " + this._k1 + " " + this._l1);
            this._p1.off(this._j1 + " click");
            this.slider.data("royalSlider", null);
            n.removeData(this.slider, "royalSlider");
            n(window).off("resize" + this.ns);
            b && this.slider.remove();
            this.ev = this.slider = this.slides = null
        },
        _n2: function (b, e) {
            function c(c, f, e) {
                c.isAdded ? (a(f, c), g(f,
                    c)) : (e || (e = d.slidesJQ[f]), c.holder ? e = c.holder : (e = d.slidesJQ[f] = n(e), c.holder = e), c.appendOnLoaded = !1, g(f, c, e), a(f, c), d._p2(c, e, b), c.isAdded = !0)
            }

            function a(a, c) {
                c.contentAdded || (d.setItemHtml(c, b), b || (c.contentAdded = !0))
            }

            function g(a, b, c) {
                d._l && (c || (c = d.slidesJQ[a]), c.css(d._i, (a + d._d1 + p) * d._w))
            }

            function f(a) {
                if (l) {
                    if (a > r - 1) return f(a - r);
                    if (0 > a) return f(r + a)
                }
                return a
            }
            var d = this,
                h, k, l = d._z,
                r = d.numSlides;
            if (!isNaN(e)) return f(e);
            var m = d.currSlideId,
                p, q = b ? Math.abs(d._o2 - d.currSlideId) >= d.numSlides - 1 ? 0 :
                    1 : d._y,
                s = Math.min(2, q),
                v = !1,
                u = !1,
                t;
            for (k = m; k < m + 1 + s; k++)
                if (t = f(k), (h = d.slides[t]) && (!h.isAdded || !h.positionSet)) {
                    v = !0;
                    break
                }
            for (k = m - 1; k > m - 1 - s; k--)
                if (t = f(k), (h = d.slides[t]) && (!h.isAdded || !h.positionSet)) {
                    u = !0;
                    break
                }
            if (v)
                for (k = m; k < m + q + 1; k++) t = f(k), p = Math.floor((d._u - (m - k)) / d.numSlides) * d.numSlides, (h = d.slides[t]) && c(h, t);
            if (u)
                for (k = m - 1; k > m - 1 - q; k--) t = f(k), p = Math.floor((d._u - (m - k)) / r) * r, (h = d.slides[t]) && c(h, t);
            if (!b)
                for (s = f(m - q), m = f(m + q), q = s > m ? 0 : s, k = 0; k < r; k++) s > m && k > s - 1 || !(k < q || k > m) || (h = d.slides[k]) &&
                    h.holder && (h.holder.detach(), h.isAdded = !1)
        },
        setItemHtml: function (b, e) {
            var c = this,
                a = function () {
                    if (!b.images) b.isRendered = !0, b.isLoaded = !0, b.isLoading = !1, d(!0);
                    else if (!b.isLoading) {
                        var a, f;
                        b.content.hasClass("rsImg") ? (a = b.content, f = !0) : a = b.content.find(".rsImg:not(img)");
                        a && !a.is("img") && a.each(function () {
                            var a = n(this),
                                c = '<img class="rsImg" src="' + (a.is("a") ? a.attr("href") : a.text()) + '" />';
                            f ? b.content = n(c) : a.replaceWith(c)
                        });
                        a = f ? b.content : b.content.find("img.rsImg");
                        k();
                        a.eq(0).addClass("rsMainSlideImage");
                        b.iW && b.iH && (b.isLoaded || c._q2(b), d());
                        b.isLoading = !0;
                        if (b.isBig) n("<img />").on("load.rs error.rs", function (a) {
                            n(this).off("load.rs error.rs");
                            g([this], !0)
                        }).attr("src", b.image);
                        else {
                            b.loaded = [];
                            b.numStartedLoad = 0;
                            a = function (a) {
                                n(this).off("load.rs error.rs");
                                b.loaded.push(this);
                                b.loaded.length === b.numStartedLoad && g(b.loaded, !1)
                            };
                            for (var e = 0; e < b.images.length; e++) {
                                var h = n("<img />");
                                b.numStartedLoad++;
                                h.on("load.rs error.rs", a).attr("src", b.images[e])
                            }
                        }
                    }
                }, g = function (a, c) {
                    if (a.length) {
                        var d = a[0];
                        if (c !== b.isBig)(d = b.holder.children()) && 1 < d.length && l();
                        else if (b.iW && b.iH) f();
                        else if (b.iW = d.width, b.iH = d.height, b.iW && b.iH) f();
                        else {
                            var e = new Image;
                            e.onload = function () {
                                e.width ? (b.iW = e.width, b.iH = e.height, f()) : setTimeout(function () {
                                    e.width && (b.iW = e.width, b.iH = e.height);
                                    f()
                                }, 1E3)
                            };
                            e.src = d.src
                        }
                    } else f()
                }, f = function () {
                    b.isLoaded = !0;
                    b.isLoading = !1;
                    d();
                    l();
                    h()
                }, d = function () {
                    if (!b.isAppended && c.ev) {
                        var a = c.st.visibleNearby,
                            d = b.id - c._o;
                        e || (b.appendOnLoaded || !c.st.fadeinLoadedSlide || 0 !== d && (!(a || c._r2 ||
                            c._l2) || -1 !== d && 1 !== d)) || (a = {
                            visibility: "visible",
                            opacity: 0
                        }, a[c._g + "transition"] = "opacity 400ms ease-in-out", b.content.css(a), setTimeout(function () {
                            b.content.css("opacity", 1)
                        }, 16));
                        b.holder.find(".rsPreloader").length ? b.holder.append(b.content) : b.holder.html(b.content);
                        b.isAppended = !0;
                        b.isLoaded && (c._q2(b), h());
                        b.sizeReady || (b.sizeReady = !0, setTimeout(function () {
                            c.ev.trigger("rsMaybeSizeReady", b)
                        }, 100))
                    }
                }, h = function () {
                    !b.loadedTriggered && c.ev && (b.isLoaded = b.loadedTriggered = !0, b.holder.trigger("rsAfterContentSet"),
                        c.ev.trigger("rsAfterContentSet", b))
                }, k = function () {
                    c.st.usePreloader && b.holder.html(c._q1.clone())
                }, l = function (a) {
                    c.st.usePreloader && (a = b.holder.find(".rsPreloader"), a.length && a.remove())
                };
            b.isLoaded ? d() : e ? !c._l && b.images && b.iW && b.iH ? a() : (b.holder.isWaiting = !0, k(), b.holder.slideId = -99) : a()
        },
        _p2: function (b, e, c) {
            this._p1.append(b.holder);
            b.appendOnLoaded = !1
        },
        _g2: function (b, e) {
            var c = this,
                a, g = "touchstart" === b.type;
            c._s2 = g;
            c.ev.trigger("rsDragStart");
            if (n(b.target).closest(".rsNoDrag", c._r1).length) return c.dragSuccess = !1, !0;
            !e && c._r2 && (c._t2 = !0, c._u2());
            c.dragSuccess = !1;
            if (c._l2) g && (c._v2 = !0);
            else {
                g && (c._v2 = !1);
                c._w2();
                if (g) {
                    var f = b.originalEvent.touches;
                    if (f && 0 < f.length) a = f[0], 1 < f.length && (c._v2 = !0);
                    else return
                } else b.preventDefault(), a = b, c.msEnabled && (a = a.originalEvent);
                c._l2 = !0;
                c._b.on(c._k1, function (a) {
                    c._x2(a, e)
                }).on(c._l1, function (a) {
                    c._y2(a, e)
                });
                c._z2 = "";
                c._a3 = !1;
                c._b3 = a.pageX;
                c._c3 = a.pageY;
                c._d3 = c._v = (e ? c._e3 : c._h) ? a.pageX : a.pageY;
                c._f3 = 0;
                c._g3 = 0;
                c._h3 = e ? c._i3 : c._p;
                c._j3 = (new Date).getTime();
                if (g) c._e1.on(c._m1,
                    function (a) {
                        c._y2(a, e)
                    })
            }
        },
        _k3: function (b, e) {
            if (this._l3) {
                var c = this._m3,
                    a = b.pageX - this._b3,
                    g = b.pageY - this._c3,
                    f = this._h3 + a,
                    d = this._h3 + g,
                    h = e ? this._e3 : this._h,
                    f = h ? f : d,
                    d = this._z2;
                this._a3 = !0;
                this._b3 = b.pageX;
                this._c3 = b.pageY;
                "x" === d && 0 !== a ? this._f3 = 0 < a ? 1 : -1 : "y" === d && 0 !== g && (this._g3 = 0 < g ? 1 : -1);
                d = h ? this._b3 : this._c3;
                a = h ? a : g;
                e ? f > this._n3 ? f = this._h3 + a * this._n1 : f < this._o3 && (f = this._h3 + a * this._n1) : this._z || (0 >= this.currSlideId && 0 < d - this._d3 && (f = this._h3 + a * this._n1), this.currSlideId >= this.numSlides - 1 && 0 > d -
                    this._d3 && (f = this._h3 + a * this._n1));
                this._h3 = f;
                200 < c - this._j3 && (this._j3 = c, this._v = d);
                e ? this._q3(this._h3) : this._l && this._p3(this._h3)
            }
        },
        _x2: function (b, e) {
            var c = this,
                a, g = "touchmove" === b.type;
            if (!c._s2 || g) {
                if (g) {
                    if (c._r3) return;
                    var f = b.originalEvent.touches;
                    if (f) {
                        if (1 < f.length) return;
                        a = f[0]
                    } else return
                } else a = b, c.msEnabled && (a = a.originalEvent);
                c._a3 || (c._e && (e ? c._s3 : c._p1).css(c._g + c._u1, "0s"), function h() {
                    c._l2 && (c._t3 = requestAnimationFrame(h), c._u3 && c._k3(c._u3, e))
                }());
                if (c._l3) b.preventDefault(),
                c._m3 = (new Date).getTime(), c._u3 = a;
                else if (f = e ? c._e3 : c._h, a = Math.abs(a.pageX - c._b3) - Math.abs(a.pageY - c._c3) - (f ? -7 : 7), 7 < a) {
                    if (f) b.preventDefault(), c._z2 = "x";
                    else if (g) {
                        c._v3(b);
                        return
                    }
                    c._l3 = !0
                } else if (-7 > a) {
                    if (!f) b.preventDefault(), c._z2 = "y";
                    else if (g) {
                        c._v3(b);
                        return
                    }
                    c._l3 = !0
                }
            }
        },
        _v3: function (b, e) {
            this._r3 = !0;
            this._a3 = this._l2 = !1;
            this._y2(b)
        },
        _y2: function (b, e) {
            function c(a) {
                return 100 > a ? 100 : 500 < a ? 500 : a
            }

            function a(a, b) {
                if (g._l || e) h = (-g._u - g._d1) * g._w, k = Math.abs(g._p - h), g._c = k / b, a && (g._c += 250), g._c =
                    c(g._c), g._x3(h, !1)
            }
            var g = this,
                f, d, h, k;
            f = -1 < b.type.indexOf("touch");
            if (!g._s2 || f)
                if (g._s2 = !1, g.ev.trigger("rsDragRelease"), g._u3 = null, g._l2 = !1, g._r3 = !1, g._l3 = !1, g._m3 = 0, cancelAnimationFrame(g._t3), g._a3 && (e ? g._q3(g._h3) : g._l && g._p3(g._h3)), g._b.off(g._k1).off(g._l1), f && g._e1.off(g._m1), g._i1(), !g._a3 && !g._v2 && e && g._w3) {
                    var l = n(b.target).closest(".rsNavItem");
                    l.length && g.goTo(l.index())
                } else {
                    d = e ? g._e3 : g._h;
                    if (!g._a3 || "y" === g._z2 && d || "x" === g._z2 && !d)
                        if (!e && g._t2) {
                            g._t2 = !1;
                            if (g.st.navigateByClick) {
                                g._i2(g.msEnabled ?
                                    b.originalEvent : b);
                                g.dragSuccess = !0;
                                return
                            }
                            g.dragSuccess = !0
                        } else {
                            g._t2 = !1;
                            g.dragSuccess = !1;
                            return
                        } else g.dragSuccess = !0;
                    g._t2 = !1;
                    g._z2 = "";
                    var r = g.st.minSlideOffset;
                    f = f ? b.originalEvent.changedTouches[0] : g.msEnabled ? b.originalEvent : b;
                    var m = d ? f.pageX : f.pageY,
                        p = g._d3;
                    f = g._v;
                    var q = g.currSlideId,
                        s = g.numSlides,
                        v = d ? g._f3 : g._g3,
                        u = g._z;
                    Math.abs(m - p);
                    f = m - f;
                    d = (new Date).getTime() - g._j3;
                    d = Math.abs(f) / d;
                    if (0 === v || 1 >= s) a(!0, d);
                    else {
                        if (!u && !e)
                            if (0 >= q) {
                                if (0 < v) {
                                    a(!0, d);
                                    return
                                }
                            } else if (q >= s - 1 && 0 > v) {
                            a(!0, d);
                            return
                        }
                        if (e) {
                            h =
                                g._i3;
                            if (h > g._n3) h = g._n3;
                            else if (h < g._o3) h = g._o3;
                            else {
                                m = d * d / 0.006;
                                l = -g._i3;
                                p = g._y3 - g._z3 + g._i3;
                                0 < f && m > l ? (l += g._z3 / (15 / (0.003 * (m / d))), d = d * l / m, m = l) : 0 > f && m > p && (p += g._z3 / (15 / (0.003 * (m / d))), d = d * p / m, m = p);
                                l = Math.max(Math.round(d / 0.003), 50);
                                h += m * (0 > f ? -1 : 1);
                                if (h > g._n3) {
                                    g._a4(h, l, !0, g._n3, 200);
                                    return
                                }
                                if (h < g._o3) {
                                    g._a4(h, l, !0, g._o3, 200);
                                    return
                                }
                            }
                            g._a4(h, l, !0)
                        } else l = function (a) {
                            var b = Math.floor(a / g._w);
                            a - b * g._w > r && b++;
                            return b
                        }, p + r < m ? 0 > v ? a(!1, d) : (l = l(m - p), g._m2(g.currSlideId - l, c(Math.abs(g._p - (-g._u - g._d1 + l) *
                            g._w) / d), !1, !0, !0)) : p - r > m ? 0 < v ? a(!1, d) : (l = l(p - m), g._m2(g.currSlideId + l, c(Math.abs(g._p - (-g._u - g._d1 - l) * g._w) / d), !1, !0, !0)) : a(!1, d)
                    }
                }
        },
        _p3: function (b) {
            b = this._p = b;
            this._e ? this._p1.css(this._x1, this._y1 + (this._h ? b + this._z1 + 0 : 0 + this._z1 + b) + this._a2) : this._p1.css(this._h ? this._x1 : this._w1, b)
        },
        updateSliderSize: function (b) {
            var e, c;
            if (this.st.autoScaleSlider) {
                var a = this.st.autoScaleSliderWidth,
                    g = this.st.autoScaleSliderHeight;
                this.st.autoScaleHeight ? (e = this.slider.width(), e != this.width && (this.slider.css("height",
                    e * (g / a)), e = this.slider.width()), c = this.slider.height()) : (c = this.slider.height(), c != this.height && (this.slider.css("width", c * (a / g)), c = this.slider.height()), e = this.slider.width())
            } else e = this.slider.width(), c = this.slider.height(); if (b || e != this.width || c != this.height) {
                this.width = e;
                this.height = c;
                this._b4 = e;
                this._c4 = c;
                this.ev.trigger("rsBeforeSizeSet");
                this.ev.trigger("rsAfterSizePropSet");
                this._e1.css({
                    width: this._b4,
                    height: this._c4
                });
                this._w = (this._h ? this._b4 : this._c4) + this.st.slidesSpacing;
                this._d4 = this.st.imageScalePadding;
                for (e = 0; e < this.slides.length; e++) b = this.slides[e], b.positionSet = !1, b && (b.images && b.isLoaded) && (b.isRendered = !1, this._q2(b));
                if (this._e4)
                    for (e = 0; e < this._e4.length; e++) b = this._e4[e], b.holder.css(this._i, (b.id + this._d1) * this._w);
                this._n2();
                this._l && (this._e && this._p1.css(this._g + "transition-duration", "0s"), this._p3((-this._u - this._d1) * this._w));
                this.ev.trigger("rsOnUpdateNav")
            }
            this._j2 = this._e1.offset();
            this._j2 = this._j2[this._i]
        },
        appendSlide: function (b, e) {
            var c = this._s(b);
            if (isNaN(e) || e > this.numSlides) e =
                this.numSlides;
            this.slides.splice(e, 0, c);
            this.slidesJQ.splice(e, 0, n('<div style="' + (this._l ? "position:absolute;" : this._n) + '" class="rsSlide"></div>'));
            e < this.currSlideId && this.currSlideId++;
            this.ev.trigger("rsOnAppendSlide", [c, e]);
            this._f4(e);
            e === this.currSlideId && this.ev.trigger("rsAfterSlideChange")
        },
        removeSlide: function (b) {
            var e = this.slides[b];
            e && (e.holder && e.holder.remove(), b < this.currSlideId && this.currSlideId--, this.slides.splice(b, 1), this.slidesJQ.splice(b, 1), this.ev.trigger("rsOnRemoveSlide", [b]), this._f4(b), b === this.currSlideId && this.ev.trigger("rsAfterSlideChange"))
        },
        _f4: function (b) {
            var e = this;
            b = e.numSlides;
            b = 0 >= e._u ? 0 : Math.floor(e._u / b);
            e.numSlides = e.slides.length;
            0 === e.numSlides ? (e.currSlideId = e._d1 = e._u = 0, e.currSlide = e._g4 = null) : e._u = b * e.numSlides + e.currSlideId;
            for (b = 0; b < e.numSlides; b++) e.slides[b].id = b;
            e.currSlide = e.slides[e.currSlideId];
            e._r1 = e.slidesJQ[e.currSlideId];
            e.currSlideId >= e.numSlides ? e.goTo(e.numSlides - 1) : 0 > e.currSlideId && e.goTo(0);
            e._t();
            e._l && e._z && e._p1.css(e._g +
                e._u1, "0ms");
            e._h4 && clearTimeout(e._h4);
            e._h4 = setTimeout(function () {
                e._l && e._p3((-e._u - e._d1) * e._w);
                e._n2();
                e._l || e._r1.css({
                    display: "block",
                    opacity: 1
                })
            }, 14);
            e.ev.trigger("rsOnUpdateNav")
        },
        _i1: function () {
            this._f1 && this._l && (this._g1 ? this._e1.css("cursor", this._g1) : (this._e1.removeClass("grabbing-cursor"), this._e1.addClass("grab-cursor")))
        },
        _w2: function () {
            this._f1 && this._l && (this._h1 ? this._e1.css("cursor", this._h1) : (this._e1.removeClass("grab-cursor"), this._e1.addClass("grabbing-cursor")))
        },
        next: function (b) {
            this._m2("next",
                this.st.transitionSpeed, !0, !b)
        },
        prev: function (b) {
            this._m2("prev", this.st.transitionSpeed, !0, !b)
        },
        _m2: function (b, e, c, a, g) {
            var f = this,
                d, h, k;
            f.ev.trigger("rsBeforeMove", [b, a]);
            k = "next" === b ? f.currSlideId + 1 : "prev" === b ? f.currSlideId - 1 : b = parseInt(b, 10);
            if (!f._z) {
                if (0 > k) {
                    f._i4("left", !a);
                    return
                }
                if (k >= f.numSlides) {
                    f._i4("right", !a);
                    return
                }
            }
            f._r2 && (f._u2(!0), c = !1);
            h = k - f.currSlideId;
            k = f._o2 = f.currSlideId;
            var l = f.currSlideId + h;
            a = f._u;
            var n;
            f._z ? (l = f._n2(!1, l), a += h) : a = l;
            f._o = l;
            f._g4 = f.slidesJQ[f.currSlideId];
            f._u = a;
            f.currSlideId = f._o;
            f.currSlide = f.slides[f.currSlideId];
            f._r1 = f.slidesJQ[f.currSlideId];
            var l = f.st.slidesDiff,
                m = Boolean(0 < h);
            h = Math.abs(h);
            var p = Math.floor(k / f._y),
                q = Math.floor((k + (m ? l : -l)) / f._y),
                p = (m ? Math.max(p, q) : Math.min(p, q)) * f._y + (m ? f._y - 1 : 0);
            p > f.numSlides - 1 ? p = f.numSlides - 1 : 0 > p && (p = 0);
            k = m ? p - k : k - p;
            k > f._y && (k = f._y);
            if (h > k + l)
                for (f._d1 += (h - (k + l)) * (m ? -1 : 1), e *= 1.4, k = 0; k < f.numSlides; k++) f.slides[k].positionSet = !1;
            f._c = e;
            f._n2(!0);
            g || (n = !0);
            d = (-a - f._d1) * f._w;
            n ? setTimeout(function () {
                f._j4 = !1;
                f._x3(d,
                    b, !1, c);
                f.ev.trigger("rsOnUpdateNav")
            }, 0) : (f._x3(d, b, !1, c), f.ev.trigger("rsOnUpdateNav"))
        },
        _f2: function () {
            this.st.arrowsNav && (1 >= this.numSlides ? (this._c2.css("display", "none"), this._d2.css("display", "none")) : (this._c2.css("display", "block"), this._d2.css("display", "block"), this._z || this.st.loopRewind || (0 === this.currSlideId ? this._c2.addClass("rsArrowDisabled") : this._c2.removeClass("rsArrowDisabled"), this.currSlideId === this.numSlides - 1 ? this._d2.addClass("rsArrowDisabled") : this._d2.removeClass("rsArrowDisabled"))))
        },
        _x3: function (b, e, c, a, g) {
            function f() {
                var a;
                h && (a = h.data("rsTimeout")) && (h !== k && h.css({
                    opacity: 0,
                    display: "none",
                    zIndex: 0
                }), clearTimeout(a), h.data("rsTimeout", ""));
                if (a = k.data("rsTimeout")) clearTimeout(a), k.data("rsTimeout", "")
            }
            var d = this,
                h, k, l = {};
            isNaN(d._c) && (d._c = 400);
            d._p = d._h3 = b;
            d.ev.trigger("rsBeforeAnimStart");
            d._e ? d._l ? (d._c = parseInt(d._c, 10), c = d._g + d._v1, l[d._g + d._u1] = d._c + "ms", l[c] = a ? n.rsCSS3Easing[d.st.easeInOut] : n.rsCSS3Easing[d.st.easeOut], d._p1.css(l), a || !d.hasTouch ? setTimeout(function () {
                    d._p3(b)
                },
                5) : d._p3(b)) : (d._c = d.st.transitionSpeed, h = d._g4, k = d._r1, k.data("rsTimeout") && k.css("opacity", 0), f(), h && h.data("rsTimeout", setTimeout(function () {
                l[d._g + d._u1] = "0ms";
                l.zIndex = 0;
                l.display = "none";
                h.data("rsTimeout", "");
                h.css(l);
                setTimeout(function () {
                    h.css("opacity", 0)
                }, 16)
            }, d._c + 60)), l.display = "block", l.zIndex = d._m, l.opacity = 0, l[d._g + d._u1] = "0ms", l[d._g + d._v1] = n.rsCSS3Easing[d.st.easeInOut], k.css(l), k.data("rsTimeout", setTimeout(function () {
                k.css(d._g + d._u1, d._c + "ms");
                k.data("rsTimeout", setTimeout(function () {
                    k.css("opacity",
                        1);
                    k.data("rsTimeout", "")
                }, 20))
            }, 20))) : d._l ? (l[d._h ? d._x1 : d._w1] = b + "px", d._p1.animate(l, d._c, a ? d.st.easeInOut : d.st.easeOut)) : (h = d._g4, k = d._r1, k.stop(!0, !0).css({
                opacity: 0,
                display: "block",
                zIndex: d._m
            }), d._c = d.st.transitionSpeed, k.animate({
                opacity: 1
            }, d._c, d.st.easeInOut), f(), h && h.data("rsTimeout", setTimeout(function () {
                h.stop(!0, !0).css({
                    opacity: 0,
                    display: "none",
                    zIndex: 0
                })
            }, d._c + 60)));
            d._r2 = !0;
            d.loadingTimeout && clearTimeout(d.loadingTimeout);
            d.loadingTimeout = g ? setTimeout(function () {
                d.loadingTimeout =
                    null;
                g.call()
            }, d._c + 60) : setTimeout(function () {
                d.loadingTimeout = null;
                d._k4(e)
            }, d._c + 60)
        },
        _u2: function (b) {
            this._r2 = !1;
            clearTimeout(this.loadingTimeout);
            if (this._l)
                if (!this._e) this._p1.stop(!0), this._p = parseInt(this._p1.css(this._x1), 10);
                else {
                    if (!b) {
                        b = this._p;
                        var e = this._h3 = this._l4();
                        this._p1.css(this._g + this._u1, "0ms");
                        b !== e && this._p3(e)
                    }
                } else 20 < this._m ? this._m = 10 : this._m++
        },
        _l4: function () {
            var b = window.getComputedStyle(this._p1.get(0), null).getPropertyValue(this._g + "transform").replace(/^matrix\(/i,
                "").split(/, |\)$/g),
                e = 0 === b[0].indexOf("matrix3d");
            return parseInt(b[this._h ? e ? 12 : 4 : e ? 13 : 5], 10)
        },
        _m4: function (b, e) {
            return this._e ? this._y1 + (e ? b + this._z1 + 0 : 0 + this._z1 + b) + this._a2 : b
        },
        _k4: function (b) {
            this._l || (this._r1.css("z-index", 0), this._m = 10);
            this._r2 = !1;
            this.staticSlideId = this.currSlideId;
            this._n2();
            this._n4 = !1;
            this.ev.trigger("rsAfterSlideChange")
        },
        _i4: function (b, e) {
            var c = this,
                a = (-c._u - c._d1) * c._w;
            if (0 !== c.numSlides && !c._r2)
                if (c.st.loopRewind) c.goTo("left" === b ? c.numSlides - 1 : 0, e);
                else if (c._l) {
                c._c =
                    200;
                var g = function () {
                    c._r2 = !1
                };
                c._x3(a + ("left" === b ? 30 : -30), "", !1, !0, function () {
                    c._r2 = !1;
                    c._x3(a, "", !1, !0, g)
                })
            }
        },
        _q2: function (b, e) {
            if (!b.isRendered) {
                var c = b.content,
                    a = "rsMainSlideImage",
                    g, f = this.st.imageAlignCenter,
                    d = this.st.imageScaleMode,
                    h;
                b.videoURL && (a = "rsVideoContainer", "fill" !== d ? g = !0 : (h = c, h.hasClass(a) || (h = h.find("." + a)), h.css({
                    width: "100%",
                    height: "100%"
                }), a = "rsMainSlideImage"));
                c.hasClass(a) || (c = c.find("." + a));
                if (c) {
                    var k = b.iW,
                        l = b.iH;
                    b.isRendered = !0;
                    if ("none" !== d || f) {
                        a = "fill" !== d ? this._d4 :
                            0;
                        h = this._b4 - 2 * a;
                        var n = this._c4 - 2 * a,
                            m, p, q = {};
                        "fit-if-smaller" === d && (k > h || l > n) && (d = "fit");
                        if ("fill" === d || "fit" === d) m = h / k, p = n / l, m = "fill" == d ? m > p ? m : p : "fit" == d ? m < p ? m : p : 1, k = Math.ceil(k * m, 10), l = Math.ceil(l * m, 10);
                        "none" !== d && (q.width = k, q.height = l, g && c.find(".rsImg").css({
                            width: "100%",
                            height: "100%"
                        }));
                        f && (q.marginLeft = Math.floor((h - k) / 2) + a, q.marginTop = Math.floor((n - l) / 2) + a);
                        c.css(q)
                    }
                }
            }
        }
    };
    n.rsProto = u.prototype;
    n.fn.royalSlider = function (b) {
        var e = arguments;
        return this.each(function () {
            var c = n(this);
            if ("object" !==
                typeof b && b) {
                if ((c = c.data("royalSlider")) && c[b]) return c[b].apply(c, Array.prototype.slice.call(e, 1))
            } else c.data("royalSlider") || c.data("royalSlider", new u(c, b))
        })
    };
    n.fn.royalSlider.defaults = {
        slidesSpacing: 8,
        startSlideId: 0,
        loop: !1,
        loopRewind: !1,
        numImagesToPreload: 4,
        fadeinLoadedSlide: !0,
        slidesOrientation: "horizontal",
        transitionType: "move",
        transitionSpeed: 600,
        controlNavigation: "bullets",
        controlsInside: !0,
        arrowsNav: !0,
        arrowsNavAutoHide: !0,
        navigateByClick: !0,
        randomizeSlides: !1,
        sliderDrag: !0,
        sliderTouch: !0,
        keyboardNavEnabled: !1,
        fadeInAfterLoaded: !0,
        allowCSS3: !0,
        allowCSS3OnWebkit: !0,
        addActiveClass: !1,
        autoHeight: !1,
        easeOut: "easeOutSine",
        easeInOut: "easeInOutSine",
        minSlideOffset: 10,
        imageScaleMode: "fit-if-smaller",
        imageAlignCenter: !0,
        imageScalePadding: 4,
        usePreloader: !0,
        autoScaleSlider: !1,
        autoScaleSliderWidth: 800,
        autoScaleSliderHeight: 400,
        autoScaleHeight: !0,
        arrowsNavHideOnTouch: !1,
        globalCaption: !1,
        slidesDiff: 2
    };
    n.rsCSS3Easing = {
        easeOutSine: "cubic-bezier(0.390, 0.575, 0.565, 1.000)",
        easeInOutSine: "cubic-bezier(0.500, -0.9, 0.2, 2)"
    };
    n.extend(jQuery.easing, {
        easeInOutSine: function (b, e, c, a, g) {
            return -a / 2 * (Math.cos(Math.PI * e / g) - 1) + c
        },
        easeOutSine: function (b, e, c, a, g) {
            return a * Math.sin(e / g * (Math.PI / 2)) + c
        },
        easeOutCubic: function (b, e, c, a, g) {
            return a * ((e = e / g - 1) * e * e + 1) + c
        }
    })
})(jQuery, window);
// jquery.rs.active-class v1.0.1
(function (c) {
    c.rsProto._o4 = function () {
        var b, a = this;
        if (a.st.addActiveClass) a.ev.on("rsOnUpdateNav", function () {
            b && clearTimeout(b);
            b = setTimeout(function () {
                a._g4 && a._g4.removeClass("rsActiveSlide");
                a._r1 && a._r1.addClass("rsActiveSlide");
                b = null
            }, 50)
        })
    };
    c.rsModules.activeClass = c.rsProto._o4
})(jQuery);
// jquery.rs.animated-blocks v1.0.7
(function (l) {
    l.extend(l.rsProto, {
        _p4: function () {
            function m() {
                var g = a.currSlide;
                if (a.currSlide && a.currSlide.isLoaded && a._t4 !== g) {
                    if (0 < a._s4.length) {
                        for (b = 0; b < a._s4.length; b++) clearTimeout(a._s4[b]);
                        a._s4 = []
                    }
                    if (0 < a._r4.length) {
                        var f;
                        for (b = 0; b < a._r4.length; b++)
                            if (f = a._r4[b]) a._e ? (f.block.css(a._g + a._u1, "0s"), f.block.css(f.css)) : f.block.stop(!0).css(f.css), a._t4 = null, g.animBlocksDisplayed = !1;
                        a._r4 = []
                    }
                    g.animBlocks && (g.animBlocksDisplayed = !0, a._t4 = g, a._u4(g.animBlocks))
                }
            }
            var a = this,
                b;
            a._q4 = {
                fadeEffect: !0,
                moveEffect: "top",
                moveOffset: 20,
                speed: 400,
                easing: "easeOutSine",
                delay: 200
            };
            a.st.block = l.extend({}, a._q4, a.st.block);
            a._r4 = [];
            a._s4 = [];
            a.ev.on("rsAfterInit", function () {
                m()
            });
            a.ev.on("rsBeforeParseNode", function (a, b, d) {
                b = l(b);
                d.animBlocks = b.find(".rsABlock").css("display", "none");
                d.animBlocks.length || (b.hasClass("rsABlock") ? d.animBlocks = b.css("display", "none") : d.animBlocks = !1)
            });
            a.ev.on("rsAfterContentSet", function (b, f) {
                f.id === a.slides[a.currSlideId].id && setTimeout(function () {
                        m()
                    }, a.st.fadeinLoadedSlide ?
                    300 : 0)
            });
            a.ev.on("rsAfterSlideChange", function () {
                m()
            })
        },
        _v4: function (l, a) {
            setTimeout(function () {
                l.css(a)
            }, 6)
        },
        _u4: function (m) {
            var a = this,
                b, g, f, d, h, e, n;
            a._s4 = [];
            m.each(function (m) {
                b = l(this);
                g = {};
                f = {};
                d = null;
                var c = b.attr("data-move-offset"),
                    c = c ? parseInt(c, 10) : a.st.block.moveOffset;
                if (0 < c && ((e = b.data("move-effect")) ? (e = e.toLowerCase(), "none" === e ? e = !1 : "left" !== e && ("top" !== e && "bottom" !== e && "right" !== e) && (e = a.st.block.moveEffect, "none" === e && (e = !1))) : e = a.st.block.moveEffect, e && "none" !== e)) {
                    var p;
                    p = "right" ===
                        e || "left" === e ? !0 : !1;
                    var k;
                    n = !1;
                    a._e ? (k = 0, h = a._x1) : (p ? isNaN(parseInt(b.css("right"), 10)) ? h = "left" : (h = "right", n = !0) : isNaN(parseInt(b.css("bottom"), 10)) ? h = "top" : (h = "bottom", n = !0), h = "margin-" + h, n && (c = -c), a._e ? k = parseInt(b.css(h), 10) : (k = b.data("rs-start-move-prop"), void 0 === k && (k = parseInt(b.css(h), 10), isNaN(k) && (k = 0), b.data("rs-start-move-prop", k))));
                    f[h] = a._m4("top" === e || "left" === e ? k - c : k + c, p);
                    g[h] = a._m4(k, p)
                }
                c = b.attr("data-fade-effect");
                if (!c) c = a.st.block.fadeEffect;
                else if ("none" === c.toLowerCase() ||
                    "false" === c.toLowerCase()) c = !1;
                c && (f.opacity = 0, g.opacity = 1);
                if (c || e) d = {}, d.hasFade = Boolean(c), Boolean(e) && (d.moveProp = h, d.hasMove = !0), d.speed = b.data("speed"), isNaN(d.speed) && (d.speed = a.st.block.speed), d.easing = b.data("easing"), d.easing || (d.easing = a.st.block.easing), d.css3Easing = l.rsCSS3Easing[d.easing], d.delay = b.data("delay"), isNaN(d.delay) && (d.delay = a.st.block.delay * m);
                c = {};
                a._e && (c[a._g + a._u1] = "0ms");
                c.moveProp = g.moveProp;
                c.opacity = g.opacity;
                c.display = "none";
                a._r4.push({
                    block: b,
                    css: c
                });
                a._v4(b,
                    f);
                a._s4.push(setTimeout(function (b, d, c, e) {
                    return function () {
                        b.css("display", "block");
                        if (c) {
                            var g = {};
                            if (a._e) {
                                var f = "";
                                c.hasMove && (f += c.moveProp);
                                c.hasFade && (c.hasMove && (f += ", "), f += "opacity");
                                g[a._g + a._t1] = f;
                                g[a._g + a._u1] = c.speed + "ms";
                                g[a._g + a._v1] = c.css3Easing;
                                b.css(g);
                                setTimeout(function () {
                                    b.css(d)
                                }, 24)
                            } else setTimeout(function () {
                                b.animate(d, c.speed, c.easing)
                            }, 16)
                        }
                        delete a._s4[e]
                    }
                }(b, g, d, m), 6 >= d.delay ? 12 : d.delay))
            })
        }
    });
    l.rsModules.animatedBlocks = l.rsProto._p4
})(jQuery);
// jquery.rs.auto-height v1.0.2
(function (b) {
    b.extend(b.rsProto, {
        _w4: function () {
            var a = this;
            if (a.st.autoHeight) {
                var b, d, e, c = function (c) {
                        e = a.slides[a.currSlideId];
                        (b = e.holder) && (d = b.height()) && void 0 !== d && (a._c4 = d, a._e || !c ? a._e1.css("height", d) : a._e1.stop(!0, !0).animate({
                            height: d
                        }, a.st.transitionSpeed))
                    };
                a.ev.on("rsMaybeSizeReady.rsAutoHeight", function (a, b) {
                    e === b && c()
                });
                a.ev.on("rsAfterContentSet.rsAutoHeight", function (a, b) {
                    e === b && c()
                });
                a.slider.addClass("rsAutoHeight");
                a.ev.one("rsAfterInit", function () {
                    setTimeout(function () {
                        c(!1);
                        setTimeout(function () {
                            a.slider.append('<div style="clear:both; float: none;"></div>');
                            a._e && a._e1.css(a._g + "transition", "height " + a.st.transitionSpeed + "ms ease-in-out")
                        }, 16)
                    }, 16)
                });
                a.ev.on("rsBeforeAnimStart", function () {
                    c(!0)
                });
                a.ev.on("rsBeforeSizeSet", function () {
                    setTimeout(function () {
                        c(!1)
                    }, 16)
                })
            }
        }
    });
    b.rsModules.autoHeight = b.rsProto._w4
})(jQuery);
// jquery.rs.autoplay v1.0.5
(function (b) {
    b.extend(b.rsProto, {
        _x4: function () {
            var a = this,
                d;
            a._y4 = {
                enabled: !1,
                stopAtAction: !0,
                pauseOnHover: !0,
                delay: 2E3
            };
            !a.st.autoPlay && a.st.autoplay && (a.st.autoPlay = a.st.autoplay);
            a.st.autoPlay = b.extend({}, a._y4, a.st.autoPlay);
            a.st.autoPlay.enabled && (a.ev.on("rsBeforeParseNode", function (a, c, f) {
                c = b(c);
                if (d = c.attr("data-rsDelay")) f.customDelay = parseInt(d, 10)
            }), a.ev.one("rsAfterInit", function () {
                a._z4()
            }), a.ev.on("rsBeforeDestroy", function () {
                a.stopAutoPlay();
                a.slider.off("mouseenter mouseleave");
                b(window).off("blur" +
                    a.ns + " focus" + a.ns)
            }))
        },
        _z4: function () {
            var a = this;
            a.startAutoPlay();
            a.ev.on("rsAfterContentSet", function (b, e) {
                a._l2 || (a._r2 || !a._a5 || e !== a.currSlide) || a._b5()
            });
            a.ev.on("rsDragRelease", function () {
                a._a5 && a._c5 && (a._c5 = !1, a._b5())
            });
            a.ev.on("rsAfterSlideChange", function () {
                a._a5 && a._c5 && (a._c5 = !1, a.currSlide.isLoaded && a._b5())
            });
            a.ev.on("rsDragStart", function () {
                a._a5 && (a.st.autoPlay.stopAtAction ? a.stopAutoPlay() : (a._c5 = !0, a._d5()))
            });
            a.ev.on("rsBeforeMove", function (b, e, c) {
                a._a5 && (c && a.st.autoPlay.stopAtAction ?
                    a.stopAutoPlay() : (a._c5 = !0, a._d5()))
            });
            a._e5 = !1;
            a.ev.on("rsVideoStop", function () {
                a._a5 && (a._e5 = !1, a._b5())
            });
            a.ev.on("rsVideoPlay", function () {
                a._a5 && (a._c5 = !1, a._d5(), a._e5 = !0)
            });
            b(window).on("blur" + a.ns, function () {
                a._a5 && (a._c5 = !0, a._d5())
            }).on("focus" + a.ns, function () {
                a._a5 && a._c5 && (a._c5 = !1, a._b5())
            });
            a.st.autoPlay.pauseOnHover && (a._f5 = !1, a.slider.hover(function () {
                a._a5 && (a._c5 = !1, a._d5(), a._f5 = !0)
            }, function () {
                a._a5 && (a._f5 = !1, a._b5())
            }))
        },
        toggleAutoPlay: function () {
            this._a5 ? this.stopAutoPlay() :
                this.startAutoPlay()
        },
        startAutoPlay: function () {
            this._a5 = !0;
            this.currSlide.isLoaded && this._b5()
        },
        stopAutoPlay: function () {
            this._e5 = this._f5 = this._c5 = this._a5 = !1;
            this._d5()
        },
        _b5: function () {
            var a = this;
            a._f5 || a._e5 || (a._g5 = !0, a._h5 && clearTimeout(a._h5), a._h5 = setTimeout(function () {
                var b;
                a._z || a.st.loopRewind || (b = !0, a.st.loopRewind = !0);
                a.next(!0);
                b && (a.st.loopRewind = !1)
            }, a.currSlide.customDelay ? a.currSlide.customDelay : a.st.autoPlay.delay))
        },
        _d5: function () {
            this._f5 || this._e5 || (this._g5 = !1, this._h5 && (clearTimeout(this._h5),
                this._h5 = null))
        }
    });
    b.rsModules.autoplay = b.rsProto._x4
})(jQuery);
// jquery.rs.bullets v1.0.1
(function (c) {
    c.extend(c.rsProto, {
        _i5: function () {
            var a = this;
            "bullets" === a.st.controlNavigation && (a.ev.one("rsAfterPropsSetup", function () {
                a._j5 = !0;
                a.slider.addClass("rsWithBullets");
                for (var b = '<div class="rsNav rsBullets">', e = 0; e < a.numSlides; e++) b += '<div class="rsNavItem rsBullet"><span></span></div>';
                a._k5 = b = c(b + "</div>");
                a._l5 = b.appendTo(a.slider).children();
                a._k5.on("click.rs", ".rsNavItem", function (b) {
                    a._m5 || a.goTo(c(this).index())
                })
            }), a.ev.on("rsOnAppendSlide", function (b, c, d) {
                d >= a.numSlides ? a._k5.append('<div class="rsNavItem rsBullet"><span></span></div>') :
                    a._l5.eq(d).before('<div class="rsNavItem rsBullet"><span></span></div>');
                a._l5 = a._k5.children()
            }), a.ev.on("rsOnRemoveSlide", function (b, c) {
                var d = a._l5.eq(c);
                d && d.length && (d.remove(), a._l5 = a._k5.children())
            }), a.ev.on("rsOnUpdateNav", function () {
                var b = a.currSlideId;
                a._n5 && a._n5.removeClass("rsNavSelected");
                b = a._l5.eq(b);
                b.addClass("rsNavSelected");
                a._n5 = b
            }))
        }
    });
    c.rsModules.bullets = c.rsProto._i5
})(jQuery);
// jquery.rs.deeplinking v1.0.6 + jQuery hashchange plugin v1.3 Copyright (c) 2010 Ben Alman
(function (d) {
    d.extend(d.rsProto, {
        _o5: function () {
            var a = this,
                l, g, f;
            a._p5 = {
                enabled: !1,
                change: !1,
                prefix: ""
            };
            a.st.deeplinking = d.extend({}, a._p5, a.st.deeplinking);
            if (a.st.deeplinking.enabled) {
                var k = a.st.deeplinking.change,
                    c = a.st.deeplinking.prefix,
                    e = "#" + c,
                    h = function () {
                        var b = window.location.hash;
                        return b && 0 < b.indexOf(c) && (b = parseInt(b.substring(e.length), 10), 0 <= b) ? b - 1 : -1
                    }, m = h(); - 1 !== m && (a.st.startSlideId = m);
                k && (d(window).on("hashchange" + a.ns, function (b) {
                    l || (b = h(), 0 > b || (b > a.numSlides - 1 && (b = a.numSlides - 1),
                        a.goTo(b)))
                }), a.ev.on("rsBeforeAnimStart", function () {
                    g && clearTimeout(g);
                    f && clearTimeout(f)
                }), a.ev.on("rsAfterSlideChange", function () {
                    g && clearTimeout(g);
                    f && clearTimeout(f);
                    f = setTimeout(function () {
                        l = !0;
                        window.location.replace(("" + window.location).split("#")[0] + e + (a.currSlideId + 1));
                        g = setTimeout(function () {
                            l = !1;
                            g = null
                        }, 60)
                    }, 400)
                }));
                a.ev.on("rsBeforeDestroy", function () {
                    g = f = null;
                    k && d(window).off("hashchange" + a.ns)
                })
            }
        }
    });
    d.rsModules.deeplinking = d.rsProto._o5
})(jQuery);
(function (d, a, l) {
    function g(b) {
        b = b || location.href;
        return "#" + b.replace(/^[^#]*#?(.*)$/, "$1")
    }
    "$:nomunge";
    var f = "hashchange",
        k = document,
        c, e = d.event.special,
        h = k.documentMode,
        m = "on" + f in a && (h === l || 7 < h);
    d.fn[f] = function (b) {
        return b ? this.bind(f, b) : this.trigger(f)
    };
    d.fn[f].delay = 50;
    e[f] = d.extend(e[f], {
        setup: function () {
            if (m) return !1;
            d(c.start)
        },
        teardown: function () {
            if (m) return !1;
            d(c.stop)
        }
    });
    c = function () {
        function b() {
            var c = g(),
                n = r(h);
            c !== h ? (p(h = c, n), d(a).trigger(f)) : n !== h && (location.href = location.href.replace(/#.*/,
                "") + n);
            e = setTimeout(b, d.fn[f].delay)
        }
        var c = {}, e, h = g(),
            q = function (b) {
                return b
            }, p = q,
            r = q;
        c.start = function () {
            e || b()
        };
        c.stop = function () {
            e && clearTimeout(e);
            e = l
        };
        a.attachEvent && !a.addEventListener && !m && function () {
            var a, e;
            c.start = function () {
                a || (e = (e = d.fn[f].src) && e + g(), a = d('<iframe tabindex="-1" title="empty"/>').hide().one("load", function () {
                    e || p(g());
                    b()
                }).attr("src", e || "javascript:0").insertAfter("body")[0].contentWindow, k.onpropertychange = function () {
                    try {
                        "title" === event.propertyName && (a.document.title =
                            k.title)
                    } catch (b) {}
                })
            };
            c.stop = q;
            r = function () {
                return g(a.location.href)
            };
            p = function (b, e) {
                var c = a.document,
                    g = d.fn[f].domain;
                b !== e && (c.title = k.title, c.open(), g && c.write('<script>document.domain="' + g + '"\x3c/script>'), c.close(), a.location.hash = b)
            }
        }();
        return c
    }()
})(jQuery, this);
// jquery.rs.fullscreen v1.0.5
(function (c) {
    c.extend(c.rsProto, {
        _q5: function () {
            var a = this;
            a._r5 = {
                enabled: !1,
                keyboardNav: !0,
                buttonFS: !0,
                nativeFS: !1,
                doubleTap: !0
            };
            a.st.fullscreen = c.extend({}, a._r5, a.st.fullscreen);
            if (a.st.fullscreen.enabled) a.ev.one("rsBeforeSizeSet", function () {
                a._s5()
            })
        },
        _s5: function () {
            var a = this;
            a._t5 = !a.st.keyboardNavEnabled && a.st.fullscreen.keyboardNav;
            if (a.st.fullscreen.nativeFS) {
                a._u5 = {
                    supportsFullScreen: !1,
                    isFullScreen: function () {
                        return !1
                    },
                    requestFullScreen: function () {},
                    cancelFullScreen: function () {},
                    fullScreenEventName: "",
                    prefix: ""
                };
                var b = ["webkit", "moz", "o", "ms", "khtml"];
                if (!a.isAndroid)
                    if ("undefined" != typeof document.cancelFullScreen) a._u5.supportsFullScreen = !0;
                    else
                        for (var d = 0; d < b.length; d++)
                            if (a._u5.prefix = b[d], "undefined" != typeof document[a._u5.prefix + "CancelFullScreen"]) {
                                a._u5.supportsFullScreen = !0;
                                break
                            }
                a._u5.supportsFullScreen ? (a.nativeFS = !0, a._u5.fullScreenEventName = a._u5.prefix + "fullscreenchange" + a.ns, a._u5.isFullScreen = function () {
                    switch (this.prefix) {
                    case "":
                        return document.fullScreen;
                    case "webkit":
                        return document.webkitIsFullScreen;
                    default:
                        return document[this.prefix + "FullScreen"]
                    }
                }, a._u5.requestFullScreen = function (a) {
                    return "" === this.prefix ? a.requestFullScreen() : a[this.prefix + "RequestFullScreen"]()
                }, a._u5.cancelFullScreen = function (a) {
                    return "" === this.prefix ? document.cancelFullScreen() : document[this.prefix + "CancelFullScreen"]()
                }) : a._u5 = !1
            }
            a.st.fullscreen.buttonFS && (a._v5 = c('<div class="rsFullscreenBtn"><div class="rsFullscreenIcn"></div></div>').appendTo(a._o1).on("click.rs", function () {
                a.isFullscreen ? a.exitFullscreen() : a.enterFullscreen()
            }))
        },
        enterFullscreen: function (a) {
            var b = this;
            if (b._u5)
                if (a) b._u5.requestFullScreen(c("html")[0]);
                else {
                    b._b.on(b._u5.fullScreenEventName, function (a) {
                        b._u5.isFullScreen() ? b.enterFullscreen(!0) : b.exitFullscreen(!0)
                    });
                    b._u5.requestFullScreen(c("html")[0]);
                    return
                }
            if (!b._w5) {
                b._w5 = !0;
                b._b.on("keyup" + b.ns + "fullscreen", function (a) {
                    27 === a.keyCode && b.exitFullscreen()
                });
                b._t5 && b._b2();
                a = c(window);
                b._x5 = a.scrollTop();
                b._y5 = a.scrollLeft();
                b._z5 = c("html").attr("style");
                b._a6 = c("body").attr("style");
                b._b6 = b.slider.attr("style");
                c("body, html").css({
                    overflow: "hidden",
                    height: "100%",
                    width: "100%",
                    margin: "0",
                    padding: "0"
                });
                b.slider.addClass("rsFullscreen");
                var d;
                for (d = 0; d < b.numSlides; d++) a = b.slides[d], a.isRendered = !1, a.bigImage && (a.isBig = !0, a.isMedLoaded = a.isLoaded, a.isMedLoading = a.isLoading, a.medImage = a.image, a.medIW = a.iW, a.medIH = a.iH, a.slideId = -99, a.bigImage !== a.medImage && (a.sizeType = "big"), a.isLoaded = a.isBigLoaded, a.isLoading = !1, a.image = a.bigImage, a.images[0] = a.bigImage, a.iW = a.bigIW, a.iH = a.bigIH, a.isAppended = a.contentAdded = !1, b._c6(a));
                b.isFullscreen = !0;
                b._w5 = !1;
                b.updateSliderSize();
                b.ev.trigger("rsEnterFullscreen")
            }
        },
        exitFullscreen: function (a) {
            var b = this;
            if (b._u5) {
                if (!a) {
                    b._u5.cancelFullScreen(c("html")[0]);
                    return
                }
                b._b.off(b._u5.fullScreenEventName)
            }
            if (!b._w5) {
                b._w5 = !0;
                b._b.off("keyup" + b.ns + "fullscreen");
                b._t5 && b._b.off("keydown" + b.ns);
                c("html").attr("style", b._z5 || "");
                c("body").attr("style", b._a6 || "");
                var d;
                for (d = 0; d < b.numSlides; d++) a = b.slides[d], a.isRendered = !1, a.bigImage && (a.isBig = !1, a.slideId = -99, a.isBigLoaded =
                    a.isLoaded, a.isBigLoading = a.isLoading, a.bigImage = a.image, a.bigIW = a.iW, a.bigIH = a.iH, a.isLoaded = a.isMedLoaded, a.isLoading = !1, a.image = a.medImage, a.images[0] = a.medImage, a.iW = a.medIW, a.iH = a.medIH, a.isAppended = a.contentAdded = !1, b._c6(a, !0), a.bigImage !== a.medImage && (a.sizeType = "med"));
                b.isFullscreen = !1;
                a = c(window);
                a.scrollTop(b._x5);
                a.scrollLeft(b._y5);
                b._w5 = !1;
                b.slider.removeClass("rsFullscreen");
                b.updateSliderSize();
                setTimeout(function () {
                    b.updateSliderSize()
                }, 1);
                b.ev.trigger("rsExitFullscreen")
            }
        },
        _c6: function (a,
            b) {
            var d = a.isLoaded || a.isLoading ? '<img class="rsImg rsMainSlideImage" src="' + a.image + '"/>' : '<a class="rsImg rsMainSlideImage" href="' + a.image + '"></a>';
            a.content.hasClass("rsImg") ? a.content = c(d) : a.content.find(".rsImg").eq(0).replaceWith(d);
            a.isLoaded || (a.isLoading || !a.holder) || a.holder.html(a.content)
        }
    });
    c.rsModules.fullscreen = c.rsProto._q5
})(jQuery);
// jquery.rs.global-caption v1.0
(function (b) {
    b.extend(b.rsProto, {
        _d6: function () {
            var a = this;
            a.st.globalCaption && (a.ev.on("rsAfterInit", function () {
                a.globalCaption = b('<div class="rsGCaption"></div>').appendTo(a.st.globalCaptionInside ? a._e1 : a.slider);
                a.globalCaption.html(a.currSlide.caption)
            }), a.ev.on("rsBeforeAnimStart", function () {
                a.globalCaption.html(a.currSlide.caption)
            }))
        }
    });
    b.rsModules.globalCaption = b.rsProto._d6
})(jQuery);
// jquery.rs.nav-auto-hide v1.0
(function (b) {
    b.extend(b.rsProto, {
        _e6: function () {
            var a = this;
            if (a.st.navAutoHide && !a.hasTouch) a.ev.one("rsAfterInit", function () {
                if (a._k5) {
                    a._k5.addClass("rsHidden");
                    var b = a.slider;
                    b.one("mousemove.controlnav", function () {
                        a._k5.removeClass("rsHidden")
                    });
                    b.hover(function () {
                        a._k5.removeClass("rsHidden")
                    }, function () {
                        a._k5.addClass("rsHidden")
                    })
                }
            })
        }
    });
    b.rsModules.autoHideNav = b.rsProto._e6
})(jQuery);
// jquery.rs.tabs v1.0.2
(function (e) {
    e.extend(e.rsProto, {
        _f6: function () {
            var a = this;
            "tabs" === a.st.controlNavigation && (a.ev.on("rsBeforeParseNode", function (a, d, b) {
                d = e(d);
                b.thumbnail = d.find(".rsTmb").remove();
                b.thumbnail.length ? b.thumbnail = e(document.createElement("div")).append(b.thumbnail).html() : (b.thumbnail = d.attr("data-rsTmb"), b.thumbnail || (b.thumbnail = d.find(".rsImg").attr("data-rsTmb")), b.thumbnail = b.thumbnail ? '<img src="' + b.thumbnail + '"/>' : "")
            }), a.ev.one("rsAfterPropsSetup", function () {
                a._g6()
            }), a.ev.on("rsOnAppendSlide",
                function (c, d, b) {
                    b >= a.numSlides ? a._k5.append('<div class="rsNavItem rsTab">' + d.thumbnail + "</div>") : a._l5.eq(b).before('<div class="rsNavItem rsTab">' + item.thumbnail + "</div>");
                    a._l5 = a._k5.children()
                }), a.ev.on("rsOnRemoveSlide", function (c, d) {
                var b = a._l5.eq(d);
                b && (b.remove(), a._l5 = a._k5.children())
            }), a.ev.on("rsOnUpdateNav", function () {
                var c = a.currSlideId;
                a._n5 && a._n5.removeClass("rsNavSelected");
                c = a._l5.eq(c);
                c.addClass("rsNavSelected");
                a._n5 = c
            }))
        },
        _g6: function () {
            var a = this,
                c;
            a._j5 = !0;
            c = '<div class="rsNav rsTabs">';
            for (var d = 0; d < a.numSlides; d++) c += '<div class="rsNavItem rsTab">' + a.slides[d].thumbnail + "</div>";
            c = e(c + "</div>");
            a._k5 = c;
            a._l5 = c.children(".rsNavItem");
            a.slider.append(c);
            a._k5.click(function (b) {
                b = e(b.target).closest(".rsNavItem");
                b.length && a.goTo(b.index())
            })
        }
    });
    e.rsModules.tabs = e.rsProto._f6
})(jQuery);
// jquery.rs.thumbnails v1.0.5
(function (f) {
    f.extend(f.rsProto, {
        _h6: function () {
            var a = this;
            "thumbnails" === a.st.controlNavigation && (a._i6 = {
                drag: !0,
                touch: !0,
                orientation: "horizontal",
                navigation: !0,
                arrows: !0,
                arrowLeft: null,
                arrowRight: null,
                spacing: 4,
                arrowsAutoHide: !1,
                appendSpan: !1,
                transitionSpeed: 600,
                autoCenter: !0,
                fitInViewport: !0,
                firstMargin: !0,
                paddingTop: 0,
                paddingBottom: 0
            }, a.st.thumbs = f.extend({}, a._i6, a.st.thumbs), a._j6 = !0, !1 === a.st.thumbs.firstMargin ? a.st.thumbs.firstMargin = 0 : !0 === a.st.thumbs.firstMargin && (a.st.thumbs.firstMargin =
                a.st.thumbs.spacing), a.ev.on("rsBeforeParseNode", function (a, d, c) {
                d = f(d);
                c.thumbnail = d.find(".rsTmb").remove();
                c.thumbnail.length ? c.thumbnail = f(document.createElement("div")).append(c.thumbnail).html() : (c.thumbnail = d.attr("data-rsTmb"), c.thumbnail || (c.thumbnail = d.find(".rsImg").attr("data-rsTmb")), c.thumbnail = c.thumbnail ? '<img src="' + c.thumbnail + '"/>' : "")
            }), a.ev.one("rsAfterPropsSetup", function () {
                a._k6()
            }), a._n5 = null, a.ev.on("rsOnUpdateNav", function () {
                var b = f(a._l5[a.currSlideId]);
                b !== a._n5 && (a._n5 &&
                    (a._n5.removeClass("rsNavSelected"), a._n5 = null), a._l6 && a._m6(a.currSlideId), a._n5 = b.addClass("rsNavSelected"))
            }), a.ev.on("rsOnAppendSlide", function (b, d, c) {
                b = "<div" + a._n6 + ' class="rsNavItem rsThumb">' + a._o6 + d.thumbnail + "</div>";
                c >= a.numSlides ? a._s3.append(b) : a._l5.eq(c).before(b);
                a._l5 = a._s3.children();
                a.updateThumbsSize()
            }), a.ev.on("rsOnRemoveSlide", function (b, d) {
                var c = a._l5.eq(d);
                c && (c.remove(), a._l5 = a._s3.children(), a.updateThumbsSize())
            }))
        },
        _k6: function () {
            var a = this,
                b = "rsThumbs",
                d = a.st.thumbs,
                c = "",
                g, e, h = d.spacing;
            a._j5 = !0;
            a._e3 = "vertical" === d.orientation ? !1 : !0;
            a._n6 = g = h ? ' style="margin-' + (a._e3 ? "right" : "bottom") + ":" + h + 'px;"' : "";
            a._i3 = 0;
            a._p6 = !1;
            a._m5 = !1;
            a._l6 = !1;
            a._q6 = d.arrows && d.navigation;
            e = a._e3 ? "Hor" : "Ver";
            a.slider.addClass("rsWithThumbs rsWithThumbs" + e);
            c += '<div class="rsNav rsThumbs rsThumbs' + e + '"><div class="' + b + 'Container">';
            a._o6 = d.appendSpan ? '<span class="thumbIco"></span>' : "";
            for (var k = 0; k < a.numSlides; k++) e = a.slides[k], c += "<div" + g + ' class="rsNavItem rsThumb">' + e.thumbnail + a._o6 +
                "</div>";
            c = f(c + "</div></div>");
            g = {};
            d.paddingTop && (g[a._e3 ? "paddingTop" : "paddingLeft"] = d.paddingTop);
            d.paddingBottom && (g[a._e3 ? "paddingBottom" : "paddingRight"] = d.paddingBottom);
            c.css(g);
            a._s3 = f(c).find("." + b + "Container");
            a._q6 && (b += "Arrow", d.arrowLeft ? a._r6 = d.arrowLeft : (a._r6 = f('<div class="' + b + " " + b + 'Left"><div class="' + b + 'Icn"></div></div>'), c.append(a._r6)), d.arrowRight ? a._s6 = d.arrowRight : (a._s6 = f('<div class="' + b + " " + b + 'Right"><div class="' + b + 'Icn"></div></div>'), c.append(a._s6)), a._r6.click(function () {
                var b =
                    (Math.floor(a._i3 / a._t6) + a._u6) * a._t6 + a._v6;
                a._a4(b > a._n3 ? a._n3 : b)
            }), a._s6.click(function () {
                var b = (Math.floor(a._i3 / a._t6) - a._u6) * a._t6 + a._v6;
                a._a4(b < a._o3 ? a._o3 : b)
            }), d.arrowsAutoHide && !a.hasTouch && (a._r6.css("opacity", 0), a._s6.css("opacity", 0), c.one("mousemove.rsarrowshover", function () {
                a._l6 && (a._r6.css("opacity", 1), a._s6.css("opacity", 1))
            }), c.hover(function () {
                a._l6 && (a._r6.css("opacity", 1), a._s6.css("opacity", 1))
            }, function () {
                a._l6 && (a._r6.css("opacity", 0), a._s6.css("opacity", 0))
            })));
            a._k5 = c;
            a._l5 =
                a._s3.children();
            a.msEnabled && a.st.thumbs.navigation && a._s3.css("-ms-touch-action", a._e3 ? "pan-y" : "pan-x");
            a.slider.append(c);
            a._w3 = !0;
            a._v6 = h;
            d.navigation && a._e && a._s3.css(a._g + "transition-property", a._g + "transform");
            a._k5.on("click.rs", ".rsNavItem", function (b) {
                a._m5 || a.goTo(f(this).index())
            });
            a.ev.off("rsBeforeSizeSet.thumbs").on("rsBeforeSizeSet.thumbs", function () {
                a._w6 = a._e3 ? a._c4 : a._b4;
                a.updateThumbsSize(!0)
            })
        },
        updateThumbsSize: function (a) {
            var b = this;
            a = b._l5.first();
            var d = {}, c = b._l5.length;
            b._t6 =
                (b._e3 ? a.outerWidth() : a.outerHeight()) + b._v6;
            b._y3 = c * b._t6 - b._v6;
            d[b._e3 ? "width" : "height"] = b._y3 + b._v6;
            b._z3 = b._e3 ? b._k5.width() : b._k5.height();
            b._o3 = -(b._y3 - b._z3) - b.st.thumbs.firstMargin;
            b._n3 = b.st.thumbs.firstMargin;
            b._u6 = Math.floor(b._z3 / b._t6);
            b._y3 < b._z3 ? (b.st.thumbs.autoCenter && b._q3((b._z3 - b._y3) / 2), b.st.thumbs.arrows && b._r6 && (b._r6.addClass("rsThumbsArrowDisabled"), b._s6.addClass("rsThumbsArrowDisabled")), b._l6 = !1, b._m5 = !1, b._k5.off(b._j1)) : b.st.thumbs.navigation && !b._l6 && (b._l6 = !0, !b.hasTouch &&
                b.st.thumbs.drag || b.hasTouch && b.st.thumbs.touch) && (b._m5 = !0, b._k5.on(b._j1, function (a) {
                b._g2(a, !0)
            }));
            b._e && (d[b._g + "transition-duration"] = "0ms");
            b._s3.css(d);
            b._w3 && (b.isFullscreen || b.st.thumbs.fitInViewport) && (b._e3 ? b._c4 = b._w6 - b._k5.outerHeight() : b._b4 = b._w6 - b._k5.outerWidth())
        },
        setThumbsOrientation: function (a, b) {
            this._w3 && (this.st.thumbs.orientation = a, this._k5.remove(), this.slider.removeClass("rsWithThumbsHor rsWithThumbsVer"), this._k6(), this._k5.off(this._j1), b || this.updateSliderSize(!0))
        },
        _q3: function (a) {
            this._i3 =
                a;
            this._e ? this._s3.css(this._x1, this._y1 + (this._e3 ? a + this._z1 + 0 : 0 + this._z1 + a) + this._a2) : this._s3.css(this._e3 ? this._x1 : this._w1, a)
        },
        _a4: function (a, b, d, c, g) {
            var e = this;
            if (e._l6) {
                b || (b = e.st.thumbs.transitionSpeed);
                e._i3 = a;
                e._x6 && clearTimeout(e._x6);
                e._p6 && (e._e || e._s3.stop(), d = !0);
                var h = {};
                e._p6 = !0;
                e._e ? (h[e._g + "transition-duration"] = b + "ms", h[e._g + "transition-timing-function"] = d ? f.rsCSS3Easing[e.st.easeOut] : f.rsCSS3Easing[e.st.easeInOut], e._s3.css(h), e._q3(a)) : (h[e._e3 ? e._x1 : e._w1] = a + "px", e._s3.animate(h,
                    b, d ? "easeOutCubic" : e.st.easeInOut));
                c && (e._i3 = c);
                e._y6();
                e._x6 = setTimeout(function () {
                    e._p6 = !1;
                    g && (e._a4(c, g, !0), g = null)
                }, b)
            }
        },
        _y6: function () {
            this._q6 && (this._i3 === this._n3 ? this._r6.addClass("rsThumbsArrowDisabled") : this._r6.removeClass("rsThumbsArrowDisabled"), this._i3 === this._o3 ? this._s6.addClass("rsThumbsArrowDisabled") : this._s6.removeClass("rsThumbsArrowDisabled"))
        },
        _m6: function (a, b) {
            var d = 0,
                c, f = a * this._t6 + 2 * this._t6 - this._v6 + this._n3,
                e = Math.floor(this._i3 / this._t6);
            this._l6 && (this._j6 && (b = !0,
                this._j6 = !1), f + this._i3 > this._z3 ? (a === this.numSlides - 1 && (d = 1), e = -a + this._u6 - 2 + d, c = e * this._t6 + this._z3 % this._t6 + this._v6 - this._n3) : 0 !== a ? (a - 1) * this._t6 <= -this._i3 + this._n3 && a - 1 <= this.numSlides - this._u6 && (c = (-a + 1) * this._t6 + this._n3) : c = this._n3, c !== this._i3 && (d = void 0 === c ? this._i3 : c, d > this._n3 ? this._q3(this._n3) : d < this._o3 ? this._q3(this._o3) : void 0 !== c && (b ? this._q3(c) : this._a4(c))), this._y6())
        }
    });
    f.rsModules.thumbnails = f.rsProto._h6
})(jQuery);
// jquery.rs.video v1.1.3
(function (f) {
    f.extend(f.rsProto, {
        _z6: function () {
            var a = this;
            a._a7 = {
                autoHideArrows: !0,
                autoHideControlNav: !1,
                autoHideBlocks: !1,
                autoHideCaption: !1,
                disableCSS3inFF: !0,
                youTubeCode: '<iframe src="http://www.youtube.com/embed/%id%?rel=1&autoplay=1&showinfo=0&autoplay=1&wmode=transparent" frameborder="no"></iframe>',
                vimeoCode: '<iframe src="http://player.vimeo.com/video/%id%?byline=0&amp;portrait=0&amp;autoplay=1" frameborder="no" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'
            };
            a.st.video =
                f.extend({}, a._a7, a.st.video);
            a.ev.on("rsBeforeSizeSet", function () {
                a._b7 && setTimeout(function () {
                    var b = a._r1,
                        b = b.hasClass("rsVideoContainer") ? b : b.find(".rsVideoContainer");
                    a._c7 && a._c7.css({
                        width: b.width(),
                        height: b.height()
                    })
                }, 32)
            });
            var d = a._a.mozilla;
            a.ev.on("rsAfterParseNode", function (b, c, e) {
                b = f(c);
                if (e.videoURL) {
                    a.st.video.disableCSS3inFF && d && (a._e = a._f = !1);
                    c = f('<div class="rsVideoContainer"></div>');
                    var g = f('<div class="rsBtnCenterer"><div class="rsPlayBtn"><div class="rsPlayBtnIcon"></div></div></div>');
                    b.hasClass("rsImg") ? e.content = c.append(b).append(g) : e.content.find(".rsImg").wrap(c).after(g)
                }
            });
            a.ev.on("rsAfterSlideChange", function () {
                a.stopVideo()
            })
        },
        toggleVideo: function () {
            return this._b7 ? this.stopVideo() : this.playVideo()
        },
        playVideo: function () {
            var a = this;
            if (!a._b7) {
                var d = a.currSlide;
                if (!d.videoURL) return !1;
                a._d7 = d;
                var b = a._e7 = d.content,
                    d = d.videoURL,
                    c, e;
                d.match(/youtu\.be/i) || d.match(/youtube\.com/i) ? (e = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/, (e = d.match(e)) &&
                    11 == e[7].length && (c = e[7]), void 0 !== c && (a._c7 = a.st.video.youTubeCode.replace("%id%", c))) : d.match(/vimeo\.com/i) && (e = /(www\.)?vimeo.com\/(\d+)($|\/)/, (e = d.match(e)) && (c = e[2]), void 0 !== c && (a._c7 = a.st.video.vimeoCode.replace("%id%", c)));
                a.videoObj = f(a._c7);
                a.ev.trigger("rsOnCreateVideoElement", [d]);
                a.videoObj.length && (a._c7 = f('<div class="rsVideoFrameHolder"><div class="rsPreloader"></div><div class="rsCloseVideoBtn"><div class="rsCloseVideoIcn"></div></div></div>'), a._c7.find(".rsPreloader").after(a.videoObj),
                    b = b.hasClass("rsVideoContainer") ? b : b.find(".rsVideoContainer"), a._c7.css({
                        width: b.width(),
                        height: b.height()
                    }).find(".rsCloseVideoBtn").off("click.rsv").on("click.rsv", function (b) {
                        a.stopVideo();
                        b.preventDefault();
                        b.stopPropagation();
                        return !1
                    }), b.append(a._c7), a.isIPAD && b.addClass("rsIOSVideo"), a._f7(!1), setTimeout(function () {
                        a._c7.addClass("rsVideoActive")
                    }, 10), a.ev.trigger("rsVideoPlay"), a._b7 = !0);
                return !0
            }
            return !1
        },
        stopVideo: function () {
            var a = this;
            return a._b7 ? (a.isIPAD && a.slider.find(".rsCloseVideoBtn").remove(),
                a._f7(!0), setTimeout(function () {
                    a.ev.trigger("rsOnDestroyVideoElement", [a.videoObj]);
                    var d = a._c7.find("iframe");
                    if (d.length) try {
                        d.attr("src", "")
                    } catch (b) {}
                    a._c7.remove();
                    a._c7 = null
                }, 16), a.ev.trigger("rsVideoStop"), a._b7 = !1, !0) : !1
        },
        _f7: function (a, d) {
            var b = [],
                c = this.st.video;
            c.autoHideArrows && (this._c2 && (b.push(this._c2, this._d2), this._e2 = !a), this._v5 && b.push(this._v5));
            c.autoHideControlNav && this._k5 && b.push(this._k5);
            c.autoHideBlocks && this._d7.animBlocks && b.push(this._d7.animBlocks);
            c.autoHideCaption &&
                this.globalCaption && b.push(this.globalCaption);
            this.slider[a ? "removeClass" : "addClass"]("rsVideoPlaying");
            if (b.length)
                for (c = 0; c < b.length; c++) a ? b[c].removeClass("rsHidden") : b[c].addClass("rsHidden")
        }
    });
    f.rsModules.video = f.rsProto._z6
})(jQuery);
// jquery.rs.visible-nearby v1.0.2
(function (d) {
    d.rsProto._g7 = function () {
        var a = this;
        a.st.visibleNearby && a.st.visibleNearby.enabled && (a._h7 = {
            enabled: !0,
            centerArea: 0.6,
            center: !0,
            breakpoint: 0,
            breakpointCenterArea: 0.8,
            hiddenOverflow: !0,
            navigateByCenterClick: !1
        }, a.st.visibleNearby = d.extend({}, a._h7, a.st.visibleNearby), a.ev.one("rsAfterPropsSetup", function () {
            a._i7 = a._e1.css("overflow", "visible").wrap('<div class="rsVisibleNearbyWrap"></div>').parent();
            a.st.visibleNearby.hiddenOverflow || a._i7.css("overflow", "visible");
            a._o1 = a.st.controlsInside ?
                a._i7 : a.slider
        }), a.ev.on("rsAfterSizePropSet", function () {
            var b, c = a.st.visibleNearby;
            b = c.breakpoint && a.width < c.breakpoint ? c.breakpointCenterArea : c.centerArea;
            a._h ? (a._b4 *= b, a._i7.css({
                height: a._c4,
                width: a._b4 / b
            }), a._d = a._b4 * (1 - b) / 2 / b) : (a._c4 *= b, a._i7.css({
                height: a._c4 / b,
                width: a._b4
            }), a._d = a._c4 * (1 - b) / 2 / b);
            c.navigateByCenterClick || (a._q = a._h ? a._b4 : a._c4);
            c.center && a._e1.css("margin-" + (a._h ? "left" : "top"), a._d)
        }))
    };
    d.rsModules.visibleNearby = d.rsProto._g7
})(jQuery);