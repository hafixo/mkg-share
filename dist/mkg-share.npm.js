module.exports = function(e) {
    function t(s) {
        if (i[s]) return i[s].exports;
        var r = i[s] = {
            exports: {},
            id: s,
            loaded: !1
        };
        return e[s].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports;
    }
    var i = {};
    return t.m = e, t.c = i, t.p = "/", t(0);
}([ function(e, t, i) {
    "use strict";
    function s(e) {
        return e && e.__esModule ? e : {
            "default": e
        };
    }
    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var s = t[i];
                s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), 
                Object.defineProperty(e, s.key, s);
            }
        }
        return function(t, i, s) {
            return i && e(t.prototype, i), s && e(t, s), t;
        };
    }();
    i(1);
    var a = i(5), n = s(a), c = i(6), l = s(c), m = i(7), h = s(m), p = i(8), d = s(p), u = i(9), v = s(u), f = i(10), g = s(f), b = i(11), w = s(b), y = i(12), x = s(y), k = i(13), C = s(k), z = i(14), S = s(z), N = {
        email: n["default"],
        facebook: l["default"],
        googleplus: h["default"],
        linkedin: d["default"],
        pinterest: v["default"],
        reddit: g["default"],
        sms: w["default"],
        twitter: x["default"],
        whatsapp: C["default"],
        stumbleupon: S["default"]
    }, j = function() {
        function e(t, i) {
            r(this, e), this.selector = t, this.options = {
                mode: "expanded",
                style: "basic",
                text: null,
                setTexts: null,
                size: null,
                url: window.location.href,
                title: this._defaultTitle(),
                image: this._defaultImage(),
                description: this._defaultDescription(),
                facebook: !0,
                facebookAppId: 677755208947007,
                googleplus: !0,
                linkedin: !0,
                pinterest: !0,
                reddit: !0,
                twitter: !0,
                email: !0,
                whatsapp: !0,
                sms: !0,
                stumbleupon: !1
            }, this.isMobile = !1, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) && (this.isMobile = !0), 
            this._networks = {
                facebook: {
                    className: "facebook",
                    url: "https://www.facebook.com/sharer/sharer.php",
                    text: "SHARE",
                    mobileOnly: !1,
                    openPopUp: !0,
                    datas: {
                        u: "$url"
                    },
                    "native": !0,
                    nativeProps: {
                        scriptSrc: "",
                        scriptContent: "(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return;js = d.createElement(s); js.id = id;js.src = \"//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.6&appId=' + this.options.facebookAppId + '\";fjs.parentNode.insertBefore(js, fjs);}(document, 'script', 'facebook-jssdk'));",
                        addContent: '<div class="fb-share-button" data-href="$:url" data-layout="button_count"></div>'
                    }
                },
                googleplus: {
                    url: "https://plus.google.com/share",
                    text: "SHARE",
                    className: "googleplus",
                    mobileOnly: !1,
                    openPopUp: !0,
                    datas: {
                        url: "$url"
                    },
                    "native": !0,
                    nativeProps: {
                        scriptSrc: "https://apis.google.com/js/platform.js",
                        scriptContent: "",
                        addContent: '<div class="g-plus" data-action="share" data-annotation="bubble" data-height="20" data-href="$:url"></div>'
                    }
                },
                linkedin: {
                    url: "https://www.linkedin.com/shareArticle",
                    text: "SHARE",
                    className: "linkedin",
                    mobileOnly: !1,
                    openPopUp: !0,
                    datas: {
                        mini: "true",
                        url: "$:url"
                    },
                    "native": !0,
                    nativeProps: {
                        scriptSrc: "//platform.linkedin.com/in.js",
                        scriptContent: "",
                        addContent: '<script type="IN/Share" data-url="$:url" data-counter="right"></script>'
                    }
                },
                pinterest: {
                    url: "https://www.pinterest.com/pin/create/button",
                    text: "PIN",
                    className: "pinterest",
                    mobileOnly: !1,
                    openPopUp: !0,
                    datas: {
                        url: "$url",
                        media: "$image",
                        description: "$title"
                    },
                    "native": !0,
                    nativeProps: {
                        scriptSrc: "//assets.pinterest.com/js/pinit.js",
                        scriptContent: "",
                        scriptAttr: {
                            async: "",
                            defer: ""
                        },
                        addContent: '<a data-pin-do="buttonPin" href="https://www.pinterest.com/pin/create/button/?url=$:url&media=$:img&description=$description"></a>'
                    }
                },
                reddit: {
                    url: "http://www.reddit.com/submit",
                    text: "SHARE",
                    className: "reddit",
                    mobileOnly: !1,
                    openPopUp: !0,
                    datas: {},
                    "native": !0,
                    nativeProps: {
                        scriptSrc: "",
                        scriptContent: "",
                        addContent: '<a href="//www.reddit.com/submit" onclick="window.location = \'//www.reddit.com/submit?url=$url\'; return false"> <img src="//www.redditstatic.com/spreddit8.gif" style="height:20px" alt="submit to reddit" border="0" /> </a>'
                    }
                },
                twitter: {
                    url: "https://twitter.com/intent/tweet",
                    text: "TWEET",
                    className: "twitter",
                    mobileOnly: !1,
                    openPopUp: !0,
                    datas: {
                        text: "$title",
                        url: "$url"
                    },
                    "native": !0,
                    nativeProps: {
                        scriptSrc: "",
                        scriptContent: "!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');",
                        addContent: '<a href="https://twitter.com/share" class="twitter-share-button" data-url="$:url" data-text="$:title">Tweet</a>'
                    }
                },
                whatsapp: {
                    url: "whatsapp://send",
                    text: "SEND",
                    className: "whatsapp",
                    mobileOnly: !0,
                    openPopUp: !1,
                    datas: {
                        text: "$url"
                    },
                    "native": !1,
                    nativeProps: {}
                },
                email: {
                    url: "mailto:@",
                    text: "MAIL",
                    className: "email",
                    mobileOnly: !1,
                    openPopUp: !1,
                    datas: {
                        subject: "$title",
                        body: "$url"
                    },
                    "native": !1,
                    nativeProps: {}
                },
                sms: {
                    url: "sms:",
                    text: "SMS",
                    className: "sms",
                    mobileOnly: !0,
                    openPopUp: !1,
                    datas: {
                        body: "$title $url"
                    },
                    "native": !1,
                    nativeProps: {}
                },
                stumbleupon: {
                    url: "http://www.stumbleupon.com/submit",
                    text: "SHARE",
                    className: "stumbleupon",
                    mobileOnly: !1,
                    openPopUp: !0,
                    datas: {
                        url: "$url"
                    },
                    "native": !0,
                    nativeProps: {
                        scriptSrc: "",
                        scriptContent: "(function() {var li = document.createElement('script'); li.type = 'text/javascript'; li.async = true;li.src = ('https:' == document.location.protocol ? 'https:' : 'http:') + '//platform.stumbleupon.com/1/widgets.js';var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(li, s);})();",
                        addContent: '<su:badge layout="2"></su:badge>'
                    }
                }
            };
            for (var s in i) this.options[s] = i[s];
            if (this.options.setTexts) {
                var o = this.options.setTexts;
                for (var a in o) this._networks.hasOwnProperty(a) && (this._networks[a].text = o[a]);
            }
            "native" === this.options.style && (this.options.size = "small");
            for (var n = document.querySelectorAll(t), c = 0; c < n.length; c++) this._init(n[c]);
        }
        return o(e, [ {
            key: "toRFC3986",
            value: function(e) {
                var t = encodeURIComponent(e);
                return t.replace(/[!'()*]/g, function(e) {
                    return "%" + e.charCodeAt(0).toString(16);
                });
            }
        }, {
            key: "_addScript",
            value: function(e, t) {
                var i = t.scriptSrc, s = t.scriptContent, r = t.scriptAttr, o = document.querySelector(".mshare__metacontainer");
                if (!o) {
                    var a = document.createElement("div");
                    a.className = "mshare__metacontainer", document.body.insertBefore(a, document.body.firstChild), 
                    o = a;
                }
                if ((i || s) && !o.querySelector("script#" + e)) {
                    var n = document.createElement("script");
                    if (n.setAttribute("type", "text/javascript"), n.setAttribute("id", e), i && n.setAttribute("src", i), 
                    s && (n.innerHTML = s), r) for (var c in r) n.setAttribute(c, r[c]);
                    o.appendChild(n);
                }
            }
        }, {
            key: "_init",
            value: function(e) {
                var t = '<div class="mshare mshare--' + this.options.mode + " " + ("native" === this.options.style ? "mshare--native" : "mshare-nonative") + '">', i = void 0, s = void 0, r = void 0, o = void 0;
                e.getAttribute("data-mshare-title") && (i = e.getAttribute("data-mshare-title")), 
                e.getAttribute("data-mshare-description") && (r = e.getAttribute("data-mshare-description")), 
                e.getAttribute("data-mshare-image") && (s = e.getAttribute("data-mshare-image")), 
                e.getAttribute("data-mshare-url") && (o = e.getAttribute("data-mshare-url"));
                var a = this.options.text;
                null === this.options.text && "expanded" === this.options.mode && (a = !0);
                for (var n in this._networks) {
                    var c = this._networks[n];
                    if ((this.isMobile || !this.isMobile && !c.mobileOnly) && this.options[c.className]) if ("native" !== this.options.style) {
                        var l = "";
                        for (var m in c.datas) {
                            l += "" === l ? "?" : "&";
                            var h = c.datas[m];
                            h = h.replace("$title", i ? this.toRFC3986(i) : this.toRFC3986(this.options.title)), 
                            h = h.replace("$image", s ? this.toRFC3986(s) : this.toRFC3986(this.options.image)), 
                            h = h.replace("$description", r ? this.toRFC3986(r) : this.toRFC3986(this.options.description)), 
                            h = h.replace("$url", o ? this.toRFC3986(o) : this.toRFC3986(this.options.url)), 
                            h = h.replace("$:title", i ? i : this.options.title), h = h.replace("$:image", s ? s : this.options.image), 
                            h = h.replace("$:description", r ? r : this.options.description), h = h.replace("$:url", o ? o : this.options.url), 
                            l += m + "=" + h;
                        }
                        t += '<a href="' + (c.url + l) + '" class="mshare-item' + (c.openPopUp ? " mshare-item--popup" : "") + " mshare-item--" + c.className + '">' + N[c.className] + (a ? '<span class="mshare-item-text">' + c.text + "</span>" : "") + "</a>";
                    } else if (c["native"]) {
                        this._addScript(c.className, c.nativeProps);
                        var p = c.nativeProps.addContent;
                        p = p.replace("$title", i ? this.toRFC3986(i) : this.toRFC3986(this.options.title)), 
                        p = p.replace("$image", s ? this.toRFC3986(s) : this.toRFC3986(this.options.image)), 
                        p = p.replace("$description", r ? this.toRFC3986(r) : this.toRFC3986(this.options.description)), 
                        p = p.replace("$url", o ? this.toRFC3986(o) : this.toRFC3986(this.options.url)), 
                        p = p.replace("$:title", i ? i : this.options.title), p = p.replace("$:image", s ? s : this.options.image), 
                        p = p.replace("$:description", r ? r : this.options.description), p = p.replace("$:url", o ? o : this.options.url), 
                        t += '<div class="mshare-native mshare-native--' + c.className + '">' + p + "</div>";
                    }
                }
                t += "</div>", e.innerHTML += t, e.className += " mshare__container";
                var d = e.querySelector(".mshare");
                this.options.size && (d.className += " mshare--" + this.options.size), "pane" === this.options.mode && (e.className += " mshare--button", 
                e.addEventListener("click", this.toggle.bind(this, e)), d.className += " mshare--close", 
                "native" !== this.options.style && (d.style.left = -d.offsetWidth / 2 + e.offsetWidth / 2 + "px", 
                d.getBoundingClientRect().left < 0 && (d.style.left = -1 * e.getBoundingClientRect().left + "px"), 
                d.getBoundingClientRect().left > document.documentElement.clientWidth - d.offsetWidth && (d.style.left = document.documentElement.clientWidth - e.getBoundingClientRect().left - d.offsetWidth + "px")));
                for (var u = e.querySelectorAll(".mshare-item--popup"), v = 0; v < u.length; v++) u[v].addEventListener("click", this._shareOpen.bind(u[v]));
            }
        }, {
            key: "_shareOpen",
            value: function(e) {
                e.preventDefault();
                var t = {
                    width: 600,
                    height: 450
                };
                t.top = screen.height / 2 - t.height / 2, t.left = screen.width / 2 - t.width / 2, 
                window.open(this.href, "targetWindow", "\n            toolbar=no,\n            location=no,\n            status=no,\n            menubar=no,\n            scrollbars=yes,\n            resizable=yes,\n            left=" + t.left + ",\n            top=" + t.top + ",\n            width=" + t.width + ",\n            height=" + t.height + "\n          ");
            }
        }, {
            key: "open",
            value: function() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? this.selector : arguments[0];
                if ("string" == typeof e) for (var t = document.querySelectorAll(e), i = 0; i < t.length; i++) {
                    var s = t[i].querySelector(".mshare");
                    s.className = s.className.replace("mshare--close", "mshare--open");
                } else {
                    var r = e.querySelector(".mshare");
                    r.className = r.className.replace("mshare--close", "mshare--open");
                }
            }
        }, {
            key: "close",
            value: function() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? this.selector : arguments[0];
                if ("string" == typeof e) for (var t = document.querySelectorAll(e), i = 0; i < t.length; i++) {
                    var s = t[i].querySelector(".mshare");
                    s.className = s.className.replace("mshare--open", "mshare--close");
                } else {
                    var r = e.querySelector(".mshare");
                    r.className = r.className.replace("mshare--open", "mshare--close");
                }
            }
        }, {
            key: "toggle",
            value: function() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? this.selector : arguments[0];
                if ("string" == typeof e) for (var t = document.querySelectorAll(e), i = 0; i < t.length; i++) {
                    var s = t[i].querySelector(".mshare");
                    s.className.indexOf("mshare--open") > 0 ? this.close(t[i]) : this.open(t[i]);
                } else {
                    var r = e.querySelector(".mshare");
                    r.className.indexOf("mshare--open") > 0 ? this.close(e) : this.open(e);
                }
            }
        }, {
            key: "_defaultTitle",
            value: function() {
                var e = void 0;
                return (e = document.querySelector('meta[property="og:title"]') || document.querySelector('meta[name="twitter:title"]')) ? e.getAttribute("content") : (e = document.querySelector("title")) ? e.textContent || e.innerText : void 0;
            }
        }, {
            key: "_defaultImage",
            value: function() {
                var e = void 0;
                return (e = document.querySelector('meta[property="og:image"]') || document.querySelector('meta[name="twitter:image"]')) ? e.getAttribute("content") : void 0;
            }
        }, {
            key: "_defaultDescription",
            value: function() {
                var e = void 0;
                return (e = document.querySelector('meta[property="og:description"]') || document.querySelector('meta[name="twitter:description"]') || document.querySelector('meta[name="description"]')) ? e.getAttribute("content") : "";
            }
        } ]), e;
    }();
    t["default"] = j, e.exports = t["default"];
}, function(e, t, i) {
    var s = i(2);
    "string" == typeof s && (s = [ [ e.id, s, "" ] ]);
    i(4)(s, {});
    s.locals && (e.exports = s.locals);
}, function(e, t, i) {
    t = e.exports = i(3)(), t.push([ e.id, ".mshare{font-size:0;white-space:nowrap;overflow:hidden/*!owner element*/}.mshare--pane{position:absolute;top:-45px;left:50%;z-index:1}.mshare-item{padding:0 10px;color:#fff;cursor:pointer;display:inline-block;line-height:36px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-ms-touch-action:manipulation;touch-action:manipulation}.mshare-item,.mshare-item:hover,.mshare-item:visited{text-decoration:none}.mshare-item-text{font-size:13px;color:#fff;vertical-align:middle}.mshare-item-text:not(:empty){margin-left:10px}.mshare-item-icon{height:1.4em;width:1.4em;font-size:15px;fill:#fff;vertical-align:middle}.mshare-item-icon:first-child:last-child{padding:0 5px}.mshare-item--email,.mshare-item--email:hover,.mshare-item--email:visited{background-color:#4a586f;color:#4a586f}.mshare-item--facebook,.mshare-item--facebook:hover,.mshare-item--facebook:visited{background-color:#3b5998;color:#3b5998}.mshare-item--facebook .mshare-item-icon,.mshare-item--facebook:hover .mshare-item-icon,.mshare-item--facebook:visited .mshare-item-icon{margin-top:-.1em}.mshare-item--googleplus,.mshare-item--googleplus:hover,.mshare-item--googleplus:visited{background-color:#e34429;color:#e34429}.mshare-item--googleplus .mshare-item-icon,.mshare-item--googleplus:hover .mshare-item-icon,.mshare-item--googleplus:visited .mshare-item-icon{width:1.7em;height:1.7em}.mshare-item--linkedin,.mshare-item--linkedin:hover,.mshare-item--linkedin:visited{background-color:#027bb6;color:#027bb6}.mshare-item--linkedin .mshare-item-icon,.mshare-item--linkedin:hover .mshare-item-icon,.mshare-item--linkedin:visited .mshare-item-icon{margin-top:-.25em}.mshare-item--pinterest,.mshare-item--pinterest:hover,.mshare-item--pinterest:visited{background-color:#c5282f;color:#c5282f}.mshare-item--pinterest .mshare-item-icon,.mshare-item--pinterest:hover .mshare-item-icon,.mshare-item--pinterest:visited .mshare-item-icon{width:1.25em;height:1.25em;margin-top:.2em}.mshare-item--reddit,.mshare-item--reddit:hover,.mshare-item--reddit:visited{background-color:#a1caf2;color:#a1caf2}.mshare-item--reddit .mshare-item-icon,.mshare-item--reddit:hover .mshare-item-icon,.mshare-item--reddit:visited .mshare-item-icon{width:1.7em;height:1.7em}.mshare-item--stumbleupon,.mshare-item--stumbleupon:hover,.mshare-item--stumbleupon:visited{background-color:#eb4823;color:#eb4823}.mshare-item--stumbleupon .mshare-item-icon,.mshare-item--stumbleupon:hover .mshare-item-icon,.mshare-item--stumbleupon:visited .mshare-item-icon{width:1.5em;height:1.5em}.mshare-item--twitter,.mshare-item--twitter:hover,.mshare-item--twitter:visited{background-color:#27aae1;color:#27aae1}.mshare-item--whatsapp,.mshare-item--whatsapp:hover,.mshare-item--whatsapp:visited{background-color:#25d366;color:#25d366}.mshare-item--sms,.mshare-item--sms:hover,.mshare-item--sms:visited{background-color:#63908d;color:#63908d}.mshare-native{display:inline-block;font-size:1rem;vertical-align:top;padding:4px 6px;min-width:52px}.mshare__container{position:relative}.mshare--open:not(.mshare--native){height:40px;visibility:visible;transform:translateZ(0);opacity:1;transition:transform .45s cubic-bezier(.515,.57,.11,.98),opacity .45s cubic-bezier(.515,.57,.11,.98),height 0ms}.mshare--close:not(.mshare--native){height:0;transform:translate3d(0,20px,0);opacity:0;transition:transform .35s cubic-bezier(.515,.57,.11,.98),opacity .35s cubic-bezier(.515,.57,.11,.98),height 0ms .35s;pointer-events:none}.mshare--open.mshare--native{height:40px;visibility:visible;transform:translate3d(-50%,0,0);opacity:1;transition:transform .45s cubic-bezier(.515,.57,.11,.98),opacity .45s cubic-bezier(.515,.57,.11,.98),height 0ms}.mshare--close.mshare--native{height:0;transform:translate3d(-50%,20px,0);opacity:0;transition:transform .35s cubic-bezier(.515,.57,.11,.98),opacity .35s cubic-bezier(.515,.57,.11,.98),height 0ms .35s;pointer-events:none}.mshare--button{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-ms-touch-action:manipulation;touch-action:manipulation}.mshare--expanded{margin:1em}.mshare--expanded .mshare-item{margin:0 5px;padding:0 12px}.mshare--small{height:30px;top:-35px}.mshare--small .mshare-item{height:30px;line-height:30px;padding:0 5px}.mshare--small .mshare-item-text{font-size:11px}.mshare--small .mshare-item-icon{font-size:13px}.mshare--small.mshare--expanded .mshare-item{padding:0 14px}@media (max-width:767px){.mshare-item-text{display:none}}", "" ]);
}, function(e, t) {
    e.exports = function() {
        var e = [];
        return e.toString = function() {
            for (var e = [], t = 0; t < this.length; t++) {
                var i = this[t];
                i[2] ? e.push("@media " + i[2] + "{" + i[1] + "}") : e.push(i[1]);
            }
            return e.join("");
        }, e.i = function(t, i) {
            "string" == typeof t && (t = [ [ null, t, "" ] ]);
            for (var s = {}, r = 0; r < this.length; r++) {
                var o = this[r][0];
                "number" == typeof o && (s[o] = !0);
            }
            for (r = 0; r < t.length; r++) {
                var a = t[r];
                "number" == typeof a[0] && s[a[0]] || (i && !a[2] ? a[2] = i : i && (a[2] = "(" + a[2] + ") and (" + i + ")"), 
                e.push(a));
            }
        }, e;
    };
}, function(e, t, i) {
    function s(e, t) {
        for (var i = 0; i < e.length; i++) {
            var s = e[i], r = d[s.id];
            if (r) {
                r.refs++;
                for (var o = 0; o < r.parts.length; o++) r.parts[o](s.parts[o]);
                for (;o < s.parts.length; o++) r.parts.push(l(s.parts[o], t));
            } else {
                for (var a = [], o = 0; o < s.parts.length; o++) a.push(l(s.parts[o], t));
                d[s.id] = {
                    id: s.id,
                    refs: 1,
                    parts: a
                };
            }
        }
    }
    function r(e) {
        for (var t = [], i = {}, s = 0; s < e.length; s++) {
            var r = e[s], o = r[0], a = r[1], n = r[2], c = r[3], l = {
                css: a,
                media: n,
                sourceMap: c
            };
            i[o] ? i[o].parts.push(l) : t.push(i[o] = {
                id: o,
                parts: [ l ]
            });
        }
        return t;
    }
    function o(e, t) {
        var i = f(), s = w[w.length - 1];
        if ("top" === e.insertAt) s ? s.nextSibling ? i.insertBefore(t, s.nextSibling) : i.appendChild(t) : i.insertBefore(t, i.firstChild), 
        w.push(t); else {
            if ("bottom" !== e.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
            i.appendChild(t);
        }
    }
    function a(e) {
        e.parentNode.removeChild(e);
        var t = w.indexOf(e);
        t >= 0 && w.splice(t, 1);
    }
    function n(e) {
        var t = document.createElement("style");
        return t.type = "text/css", o(e, t), t;
    }
    function c(e) {
        var t = document.createElement("link");
        return t.rel = "stylesheet", o(e, t), t;
    }
    function l(e, t) {
        var i, s, r;
        if (t.singleton) {
            var o = b++;
            i = g || (g = n(t)), s = m.bind(null, i, o, !1), r = m.bind(null, i, o, !0);
        } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (i = c(t), 
        s = p.bind(null, i), r = function() {
            a(i), i.href && URL.revokeObjectURL(i.href);
        }) : (i = n(t), s = h.bind(null, i), r = function() {
            a(i);
        });
        return s(e), function(t) {
            if (t) {
                if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                s(e = t);
            } else r();
        };
    }
    function m(e, t, i, s) {
        var r = i ? "" : s.css;
        if (e.styleSheet) e.styleSheet.cssText = y(t, r); else {
            var o = document.createTextNode(r), a = e.childNodes;
            a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(o, a[t]) : e.appendChild(o);
        }
    }
    function h(e, t) {
        var i = t.css, s = t.media;
        if (s && e.setAttribute("media", s), e.styleSheet) e.styleSheet.cssText = i; else {
            for (;e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(i));
        }
    }
    function p(e, t) {
        var i = t.css, s = t.sourceMap;
        s && (i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(s)))) + " */");
        var r = new Blob([ i ], {
            type: "text/css"
        }), o = e.href;
        e.href = URL.createObjectURL(r), o && URL.revokeObjectURL(o);
    }
    var d = {}, u = function(e) {
        var t;
        return function() {
            return "undefined" == typeof t && (t = e.apply(this, arguments)), t;
        };
    }, v = u(function() {
        return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
    }), f = u(function() {
        return document.head || document.getElementsByTagName("head")[0];
    }), g = null, b = 0, w = [];
    e.exports = function(e, t) {
        t = t || {}, "undefined" == typeof t.singleton && (t.singleton = v()), "undefined" == typeof t.insertAt && (t.insertAt = "bottom");
        var i = r(e);
        return s(i, t), function(e) {
            for (var o = [], a = 0; a < i.length; a++) {
                var n = i[a], c = d[n.id];
                c.refs--, o.push(c);
            }
            if (e) {
                var l = r(e);
                s(l, t);
            }
            for (var a = 0; a < o.length; a++) {
                var c = o[a];
                if (0 === c.refs) {
                    for (var m = 0; m < c.parts.length; m++) c.parts[m]();
                    delete d[c.id];
                }
            }
        };
    };
    var y = function() {
        var e = [];
        return function(t, i) {
            return e[t] = i, e.filter(Boolean).join("\n");
        };
    }();
}, function(e, t) {
    e.exports = '<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24" class=mshare-item-icon><g><path d="M23 5.3c0 .6-.2 1.3-.6 1.9-.4.6-.9 1.1-1.5 1.5-3.1 2.1-5 3.5-5.7 4-.1.1-.3.2-.5.4s-.5.3-.7.5c-.2.1-.4.3-.6.4-.3.1-.5.3-.7.3-.2.1-.4.1-.6.1-.2 0-.4 0-.6-.1-.2-.1-.5-.2-.7-.3-.3-.1-.5-.3-.6-.4-.2-.1-.4-.3-.7-.5-.3-.2-.4-.3-.5-.4-.7-.5-1.8-1.3-3.2-2.2S3.4 8.9 3.1 8.7c-.5-.3-1-.8-1.4-1.4-.5-.6-.7-1.2-.7-1.7 0-.6.2-1.2.5-1.6.3-.4.8-.6 1.5-.6h18c.5 0 1 .2 1.4.6s.6.8.6 1.3zm0 3.6v9.7c0 .5-.2 1-.6 1.4s-.8.6-1.4.6H3c-.5 0-1-.2-1.4-.6-.4-.3-.6-.8-.6-1.3V8.9c.4.4.8.8 1.2 1.1 3 2 5 3.4 6.1 4.2.5.3.8.6 1.1.8s.7.4 1.2.6c.5.2.9.3 1.4.3.4 0 .9-.1 1.4-.3.5-.2.9-.4 1.2-.6s.7-.5 1.1-.8c1.4-1 3.4-2.4 6.1-4.2.4-.3.8-.7 1.2-1.1z"/></g></svg>';
}, function(e, t) {
    e.exports = '<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24" class=mshare-item-icon><g><path d="M17.9.8v3.6h-2.1c-.8 0-1.3.2-1.6.5s-.4.8-.4 1.5V9h4l-.5 4h-3.5v10.4H9.6V13H6.1V9h3.5V6c0-1.7.5-3 1.4-3.9.9-.9 2.2-1.4 3.8-1.4 1.3-.1 2.4 0 3.1.1z"/></g></svg>';
}, function(e, t) {
    e.exports = '<svg xmlns=http://www.w3.org/2000/svg viewBox="-383 257 22 14" class=mshare-item-icon><title>btn_google+_signin_dark_normal_web</title><path d="M-376 263v2.4h4c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4s1.9-4.4 4.3-4.4c1.4 0 2.3.6 2.8 1.1l1.9-1.8c-1.2-1.1-2.8-1.8-4.7-1.8-3.9 0-7 3.1-7 7s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2h-6.6v-.1z"/><path d="M-361 263h-2v-2h-2v2h-2v2h2v2h2v-2h2"/></svg>';
}, function(e, t) {
    e.exports = '<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24" class=mshare-item-icon><g><path d="M6.8 4.6c0 .6-.2 1.2-.7 1.6-.5.4-1 .6-1.8.6-.7 0-1.3-.2-1.7-.6-.4-.4-.7-1-.7-1.6 0-.6.2-1.2.7-1.6.5-.4 1-.6 1.8-.6s1.3.2 1.7.6.7.9.7 1.6zm-.3 4v13H2.1v-13h4.4zm15.6 5.6v7.5h-4.3v-7c0-.9-.2-1.6-.5-2.2-.4-.5-.9-.8-1.7-.8-.6 0-1 .2-1.4.5-.4.3-.7.7-.8 1.1-.1.3-.1.6-.1 1.1v7.3H8.9v-8.5-4.5h4.3v1.9c.2-.3.4-.5.5-.7l.7-.7c.3-.2.7-.4 1.1-.6.5-.1 1-.2 1.5-.2 1.5 0 2.7.5 3.6 1.5 1 .9 1.5 2.4 1.5 4.3z"/></g></svg>';
}, function(e, t) {
    e.exports = '<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 20 20" fill=#fff class=mshare-item-icon><path d="M8.617 13.227C8.09 15.98 7.45 18.62 5.55 20c-.587-4.162.86-7.287 1.533-10.605-1.147-1.93.138-5.812 2.555-4.855 2.975 1.176-2.576 7.172 1.15 7.922 3.89.78 5.48-6.75 3.066-9.2C10.37-.274 3.708 3.18 4.528 8.246c.2 1.238 1.478 1.613.51 3.322-2.23-.494-2.896-2.254-2.81-4.6.138-3.84 3.45-6.527 6.77-6.9 4.202-.47 8.145 1.543 8.69 5.494.613 4.462-1.896 9.294-6.39 8.946-1.217-.095-1.727-.7-2.68-1.28z"/></svg>';
}, function(e, t) {
    e.exports = '<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 512 426.66" fill=#fff class=mshare-item-icon><path d="M478.905 196.556c0-4.5-1.028-8.933-3.268-13.09l-.053-.053-.026-.06c-3.004-6.198-7.72-10.862-13.4-14.05-5.677-3.19-12.317-4.836-18.983-4.836-6.02 0-12.016 1.363-17.338 4.038 16.916 14.677 31.765 32.37 41.37 53.128 3.08-2.668 5.717-5.97 7.68-9.604 2.57-4.785 4.018-10.186 4.018-15.475zm-33.635 73.442c0-18.484-6.653-36.98-17.43-51.94-21.476-29.868-54.82-49.38-89.497-60.243l-.25-.118c-6.64-2.05-13.373-3.808-20.158-5.402-20.263-4.61-41.026-6.884-61.796-6.884-27.874 0-55.738 4.1-82.43 12.347-34.67 11.034-68.108 30.375-89.557 60.36v.054C73.29 233.138 66.92 251.74 66.92 270.226c0 6.824.857 13.648 2.655 20.315h.02c3.906 14.834 11.54 28.153 21.416 39.76 9.875 11.542 21.99 21.45 34.736 29.525 2.82 1.766 5.652 3.412 8.55 5.06 37.01 20.645 79.63 29.695 121.947 29.695 7.146 0 14.354-.224 21.455-.737 42.62-3.518 85.41-16.1 119.995-41.804h.013c11.015-8.145 21.212-18.05 29.288-29.25 8.09-11.21 14.018-23.715 16.653-37.31v-.067h.012a73.503 73.503 0 0 0 1.607-15.416zM86.078 168.736c-5.514-2.562-11.212-4.387-16.845-4.387-.94 0-1.896.057-2.846.17h-.27c-8.09.23-16.25 3.754-22.377 9.445-6.133 5.633-10.19 13.2-10.494 21.62v.053l-.013.06a22.9 22.9 0 0 0-.08 1.988c0 5.178 1.59 10.184 4.276 14.735 1.994 3.414 4.602 6.483 7.554 9.158 9.453-20.703 24.222-38.226 41.093-52.844zM390.448 58.2c0 .566 0 1.14.066 1.706v.112c.25 7.167 3.637 13.827 8.788 18.774 5.164 4.895 12.016 7.964 18.972 7.964h.185l1.5.06c7.01 0 13.98-3.017 19.21-7.91 5.242-4.948 8.707-11.66 8.983-18.888v-.053c.053-.572.08-1.08.08-1.653 0-7.45-3.48-14.505-8.933-19.795-5.414-5.237-12.713-8.478-19.92-8.478-2.318 0-4.61.34-6.877 1.026l-.053.053h-.08c-5.928 1.534-11.487 5.177-15.48 10.07-4.017 4.835-6.44 10.81-6.44 17.01zm121.447 134.937v.06c.08 1.14.105 2.22.105 3.36 0 12.396-3.992 24.405-10.646 34.523-6.218 9.5-14.782 17.47-24.637 22.818.633 4.94 1 9.947 1 14.9-.025 26.798-9.247 53.135-25.334 74.24h-.026c-29.735 39.538-75.373 62.857-121.46 74.583h-.012l-.04.055c-24.57 5.98-49.906 8.985-75.247 8.985-37.766 0-75.512-6.772-110.722-20.923h-.046c-36.508-15.085-71.296-38.97-92.633-74.016-11.475-18.72-17.772-40.683-17.772-62.685 0-5.006.33-10.013 1-14.913-9.617-5.454-17.937-13.082-24.116-22.238C4.71 221.976.532 210.487 0 198.314v-.224c.013-17.068 7.424-33.228 18.945-45.11 11.52-11.95 27.252-19.743 44.136-19.743h.7c1.76-.12 3.558-.172 5.343-.172 8.478 0 16.976 1.364 25.045 4.493h.086c6.89 2.904 13.734 6.43 19.834 11.265 1.977-1.02 4.13-2.22 6.555-3.13 36.982-21.902 79.958-30.32 121.848-32.766.363-20.764 2.91-42.495 13.03-61.5 8.426-15.81 23.05-28.102 40.48-32.37h.158c6.627-1.305 13.32-1.877 19.96-1.877 17.706 0 35.19 4.156 51.565 10.698 7.233-10.922 17.575-19.46 29.71-24.235l.118-.06.106-.053C404.73 1.31 412.266 0 419.83 0c7.956 0 15.98 1.482 23.503 4.835v-.053l.026.053.13.06c10.79 4.157 19.92 11.83 26.39 21.33 6.47 9.618 10.29 21.105 10.29 32.884 0 2.16-.133 4.32-.384 6.54l-.013.06-.026.11c-1.265 15.25-8.985 28.617-19.92 38.116-11 9.617-25.243 15.42-39.867 15.42-2.345 0-4.716-.17-7.06-.46-14.507-1.134-28.024-8.13-37.958-18.604-9.974-10.408-16.39-24.347-16.39-39.36 0-.685.066-1.48.093-2.166-13.623-6.087-28.062-11.094-42.437-11.094-2.068 0-4.15.12-6.23.343h-.027c-10.75 1.027-20.75 7.793-25.597 17.522v.053c-7.365 14.342-8.814 31.067-9.038 47.733 41.224 2.675 82.71 12.575 119.087 33.45h.054l.527.343c.686.396 1.95 1.08 3.123 1.707 2.49-2.05 5.14-4.098 8.155-5.916 11.028-7.338 24.085-10.98 37.154-10.98 5.81 0 11.62.737 17.26 2.16h.013l.225.06.224.06c13.307 3.41 25.36 11.033 34.426 21.33 9.05 10.354 15.15 23.384 16.337 37.6zm-345.39 80.38h.15a28.677 28.677 0 0 0 9.934 1.765c8.285 0 16.34-3.347 22.44-8.866 6.094-5.573 10.258-13.426 10.258-22.358l-.015-.737.033-1.315c0-8.867-4.11-16.785-10.145-22.292-6.053-5.64-14.09-9.05-22.41-9.05-2.22 0-4.492.288-6.7.796h-.124c-11.008 2.34-20.678 10.466-24.24 21.73l-.015.066c-1.02 3.057-1.494 6.244-1.494 9.38 0 6.93 2.272 13.597 6.198 19.17 3.887 5.4 9.4 9.67 16.008 11.66m179.218 41.42c-2.635-1.713-5.665-2.74-8.88-2.74-2.582 0-5.27.737-7.654 2.345-22.62 13.48-49.234 20.87-75.644 20.87-19.82 0-39.524-4.15-57.37-12.91l-.092-.054-.085-.053c-2.688-1.08-5.758-3.426-9.104-5.64-1.7-1.132-3.47-2.213-5.44-3.017-1.942-.855-4.103-1.423-6.41-1.423-1.91 0-3.92.462-5.9 1.305l-.303.118h.013c-3.107 1.2-5.538 3.413-7.106 5.97-1.634 2.687-2.438 5.743-2.438 8.826 0 2.794.66 5.574 2.016 8.077 1.29 2.384 3.274 4.49 5.876 5.86 25.514 17.233 55.545 25.03 85.702 24.967 27.187 0 54.538-6.258 78.885-17.747l.132-.054.132-.052c3.2-1.95 7.47-3.65 11.486-6.087 2.003-1.317 3.94-2.74 5.612-4.678a17.37 17.37 0 0 0 3.767-6.997c.304-1.252.462-2.45.462-3.584 0-2.267-.567-4.428-1.49-6.378-1.373-2.844-3.585-5.215-6.168-6.928zm20.473-82.5c1.318 3.372 1.91 6.89 1.91 10.354 0 6.942-2.41 13.78-6.455 19.287-3.992 5.468-9.657 9.67-16.323 11.555l-.146.053h-.09a28.935 28.935 0 0 1-9.488 1.594c-7.457 0-14.756-2.677-20.605-7.274-5.797-4.56-10.197-11.093-11.567-18.84h-.012l-.014-.105-.026-.064h.026a27.89 27.89 0 0 1-.658-5.97c0-6.718 2.292-13.2 6.073-18.496 3.766-5.342 9.075-9.55 15.294-11.712h.093c3.518-1.31 7.232-1.99 10.896-1.99 6.692 0 13.28 2.043 18.84 5.745 5.48 3.637 9.934 8.985 12.173 15.65l.053.106.04.103h-.016z"/></svg>';
}, function(e, t) {
    e.exports = '<svg xmlns=http://www.w3.org/2000/svg viewBox="-467 283 20 20" class=mshare-item-icon><path d="M-467 283v20l5.8-6h14.2v-14h-20zm5 8.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm5 .1c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.6 1.5-1.5 1.5zm5 0c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"/></svg>';
}, function(e, t) {
    e.exports = '<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24" class=mshare-item-icon><g><path d="M23.4 5c-.6.9-1.4 1.7-2.3 2.4V8c0 1.3-.2 2.5-.5 3.7s-.9 2.4-1.7 3.6-1.6 2.2-2.7 3c-1 .9-2.3 1.6-3.7 2.1-1.5.5-3 .8-4.7.8-2.6 0-5-.7-7.2-2.1.3 0 .7.1 1.1.1 2.2 0 4.1-.7 5.8-2-1 0-1.9-.3-2.7-.9-.8-.6-1.3-1.4-1.6-2.3h.9c.4 0 .8-.1 1.2-.2-1.1-.2-2-.8-2.7-1.6-.7-.9-1.1-1.8-1.1-3v.1c.7.4 1.4.6 2.1.6-.6-.5-1.1-1-1.5-1.7-.3-.7-.5-1.4-.5-2.2 0-.8.2-1.6.6-2.4C3.4 5 4.8 6.2 6.4 7s3.5 1.3 5.4 1.4c-.1-.4-.1-.7-.1-1.1 0-1.3.5-2.4 1.4-3.3.9-.9 2-1.4 3.3-1.4 1.3 0 2.5.5 3.4 1.5 1-.2 2-.6 3-1.1-.4 1.1-1 2-2 2.6.8 0 1.7-.3 2.6-.6z"/></g></svg>';
}, function(e, t) {
    e.exports = '<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 418.9 420.9" class=mshare-item-icon><g><g><path d="M357.8 61.2C318.5 21.7 266.1 0 210.3 0 95.4 0 1.8 93.6 1.7 208.5c0 36.8 9.6 72.6 27.8 104.3L0 420.9l110.6-29c30.5 16.6 64.8 25.4 99.7 25.4h.1c114.9 0 208.5-93.6 208.6-208.6-.1-55.7-21.8-108.1-61.2-147.5zM210.3 382c-31.2 0-61.7-8.4-88.3-24.2l-6.3-3.8-65.6 17.2 17.5-64-4.1-6.6C46.1 273 37 241.1 37 208.4 37 113 114.8 35.2 210.4 35.2c46.3 0 89.8 18.1 122.6 50.8 32.7 32.8 50.7 76.3 50.7 122.6-.1 95.7-77.9 173.4-173.4 173.4zm95.1-129.8c-5.2-2.6-30.8-15.2-35.6-17-4.8-1.7-8.3-2.6-11.7 2.6-3.5 5.2-13.5 17-16.5 20.4-3 3.5-6.1 3.9-11.3 1.3-5.2-2.6-22-8.1-41.9-25.9-15.5-13.8-25.9-30.9-29-36.1-3-5.2-.3-8 2.3-10.6 2.3-2.3 5.2-6.1 7.8-9.1 2.6-3 3.5-5.2 5.2-8.7 1.7-3.5.9-6.5-.4-9.1-1.3-2.6-11.7-28.3-16.1-38.7-4.2-10.2-8.5-8.8-11.7-8.9-3-.2-6.5-.2-10-.2s-9.1 1.3-13.9 6.5c-4.8 5.2-18.2 17.8-18.2 43.5s18.7 50.4 21.3 53.9c2.6 3.5 36.7 56.1 89 78.7 12.4 5.4 22.1 8.6 29.7 11 12.5 4 23.8 3.4 32.8 2.1 10-1.5 30.8-12.6 35.2-24.8 4.3-12.2 4.3-22.6 3-24.8-1.3-2.2-4.8-3.5-10-6.1z"/></g></g></svg>';
}, function(e, t) {
    e.exports = '<svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox="0 0 24 24" class=mshare-item-icon><linearGradient gradientUnits=userSpaceOnUse x1=-388 y1=312 x2=-387.293 y2=311.293><stop offset=0 stop-color=#1da238 /><stop offset=.983 stop-color=#24391d /></linearGradient><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm-.1 8.5c-.5 0-.9.4-.9.9v5.3c0 2-1.7 3.6-3.7 3.6s-3.7-1.7-3.7-3.7v-2.3h2.8v2.3c0 .5.4.9.9.9s.9-.4.9-.9V9.2c.1-2 1.7-3.6 3.7-3.6s3.6 1.6 3.7 3.6v1.2l-1.7.5-1.1-.5v-1c-.1-.5-.4-.9-.9-.9zm8.2 6.1c0 2-1.7 3.7-3.7 3.7s-3.7-1.6-3.7-3.7v-2.3l1.1.5 1.7-.5v2.3c0 .5.4.9.9.9s.9-.4.9-.9v-2.4h2.8v2.4z"/></svg>';
} ]);
//# sourceMappingURL=mkg-share.npm.js.map