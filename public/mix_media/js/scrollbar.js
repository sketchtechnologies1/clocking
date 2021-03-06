!function (t, e) {
    "object" == typeof exports ? module.exports = e(window, document) : t.SimpleScrollbar = e(window, document)
}(this, function (t, e) {
    function s(t) {
        Object.prototype.hasOwnProperty.call(t, "data-simple-scrollbar") || Object.defineProperty(t, "data-simple-scrollbar", {
            value: new o(t)
        })
    }

    function i(t, s) {
        function i(t) {
            var e = t.pageY - a;
            a = t.pageY, n(function () {
                s.el.scrollTop += e / s.scrollRatio
            })
        }

        function r() {
            t.classList.remove("ss-grabbed"), e.body.classList.remove("ss-grabbed"), e.removeEventListener("mousemove", i), e.removeEventListener("mouseup", r)
        }

        var a;
        t.addEventListener("mousedown", function (s) {
            return a = s.pageY, t.classList.add("ss-grabbed"), e.body.classList.add("ss-grabbed"), e.addEventListener("mousemove", i), e.addEventListener("mouseup", r), !1
        })
    }

    function r(t) {
        for (this.target = t, this.direction = window.getComputedStyle(this.target).direction, this.bar = '<div class="ss-scroll">', this.wrapper = e.createElement("div"), this.wrapper.setAttribute("class", "ss-wrapper"), this.el = e.createElement("div"), this.el.setAttribute("class", "ss-content"), "rtl" === this.direction && this.el.classList.add("rtl"), this.wrapper.appendChild(this.el); this.target.firstChild;) this.el.appendChild(this.target.firstChild);
        this.target.appendChild(this.wrapper), this.target.insertAdjacentHTML("beforeend", this.bar), this.bar = this.target.lastChild, i(this.bar, this), this.moveBar(), this.el.addEventListener("scroll", this.moveBar.bind(this)), this.el.addEventListener("mouseenter", this.moveBar.bind(this)), this.target.classList.add("ss-container");
        var s = window.getComputedStyle(t);
        "0px" === s.height && "0px" !== s["max-height"] && (t.style.height = s["max-height"])
    }

    function a() {
        for (var t = e.querySelectorAll("*[ss-container]"), i = 0; i < t.length; i++) s(t[i])
    }

    var n = t.requestAnimationFrame || t.setImmediate || function (t) {
        return setTimeout(t, 0)
    };
    r.prototype = {
        moveBar: function (t) {
            var e = this.el.scrollHeight,
                s = this.el.clientHeight,
                i = this;
            this.scrollRatio = s / e;
            var r = "rtl" === i.direction,
                a = r ? i.target.clientWidth - i.bar.clientWidth + 18 : -1 * (i.target.clientWidth - i.bar.clientWidth);
            n(function () {
                i.scrollRatio >= 1 ? i.bar.classList.add("ss-hidden") : (i.bar.classList.remove("ss-hidden"), i.bar.style.cssText = "height:" + Math.max(100 * i.scrollRatio, 10) + "%; top:" + i.el.scrollTop / e * 100 + "%;right:" + a + "px;")
            })
        }
    }, e.addEventListener("DOMContentLoaded", a), r.initEl = s, r.initAll = a;
    var o = r;
    return o
});
