var l = Object.defineProperty;
var r = (e, s, o) => s in e ? l(e, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[s] = o;
var i = (e, s, o) => r(e, typeof s != "symbol" ? s + "" : s, o);
/*!
 * better-dialog
 * (c) 2025 izakikazuho
 * Released under the MIT License.
 */
class a {
  constructor(s, o) {
    i(this, "el");
    i(this, "id");
    i(this, "options");
    i(this, "triggerEls");
    i(this, "closeButtonEl");
    i(this, "showClass");
    i(this, "isShow", !1);
    i(this, "initHooks", []);
    i(this, "showHooks", []);
    i(this, "closeHooks", []);
    var t;
    if (!s)
      throw new Error("Dialog element not found");
    this.el = s, this.options = o, this.id = s.id, this.triggerEls = Array.from(document.querySelectorAll(`[data-better-dialog-show="${this.id}"]`)), this.closeButtonEl = s.querySelector("[data-better-dialog-close]"), this.showClass = this.options.showClass || "is-show", (t = this.options.plugins) == null || t.forEach((h) => {
      h({
        onInit: (n) => this.initHooks.push(n),
        onShow: (n) => this.showHooks.push(n),
        onClose: (n) => this.closeHooks.push(n)
      });
    }), this.bindEvents(), this.runInitHooks();
  }
  runInitHooks() {
    var s, o;
    (o = (s = this.options.on) == null ? void 0 : s.show) == null || o.call(s, this), this.initHooks.forEach((t) => t(this));
  }
  runShowHooks() {
    var s, o;
    (o = (s = this.options.on) == null ? void 0 : s.show) == null || o.call(s, this), this.showHooks.forEach((t) => t(this));
  }
  runCloseHooks() {
    var s, o;
    (o = (s = this.options.on) == null ? void 0 : s.close) == null || o.call(s, this), this.closeHooks.forEach((t) => t(this));
  }
  bindEvents() {
    var s;
    this.triggerEls.forEach((o) => o.addEventListener("click", () => this.show())), (s = this.closeButtonEl) == null || s.addEventListener("click", () => this.close()), this.el.addEventListener("cancel", (o) => {
      o.preventDefault();
    }), this.el.addEventListener("click", (o) => {
      const t = o.target.getBoundingClientRect(), h = o.clientX >= t.left && o.clientX <= t.right, n = o.clientY >= t.top && o.clientY <= t.bottom;
      h && n || this.close();
    }), window.addEventListener("keydown", (o) => {
      o.key === "Escape" && this.close();
    });
  }
  show() {
    var s, o;
    this.isShow = !0, this.el.classList.add(this.showClass), this.el.showModal(), this.runShowHooks(), this.options.animation && ((o = (s = this.options).animation) == null || o.call(s, "show", this));
  }
  close() {
    var s, o;
    this.isShow = !1, this.el.classList.remove(this.showClass), this.runCloseHooks(), this.options.animation ? this.options.animation("close", this).then(() => {
      var t, h;
      this.el.close(), (h = (t = this.options.on) == null ? void 0 : t.close) == null || h.call(t, this);
    }) : (this.el.close(), (o = (s = this.options.on) == null ? void 0 : s.close) == null || o.call(s, this));
  }
}
class d {
  constructor(s, o) {
    i(this, "els", []);
    i(this, "dialogItems", []);
    this.els = this.normalizeTarget(s), this.dialogItems = this.els.map((t) => new a(t, o));
  }
  normalizeTarget(s) {
    return typeof s == "string" ? Array.from(document.querySelectorAll(s)) : s instanceof HTMLDialogElement ? [s] : Array.isArray(s) ? s.filter((o) => o instanceof HTMLDialogElement) : s instanceof NodeList ? Array.from(s).filter((o) => o instanceof HTMLDialogElement) : [];
  }
  getDialogItemById(s) {
    return this.dialogItems.find((o) => o.id === s);
  }
}
export {
  d as BetterDialog,
  a as DialogItem
};
