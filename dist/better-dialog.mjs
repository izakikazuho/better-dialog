var a = Object.defineProperty;
var h = (e, s, t) => s in e ? a(e, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[s] = t;
var n = (e, s, t) => h(e, typeof s != "symbol" ? s + "" : s, t);
/*!
 * better-dialog
 * (c) 2025 izakikazuho
 * Released under the MIT License.
 */
class c {
  constructor(s, t) {
    n(this, "el");
    n(this, "id");
    n(this, "options");
    n(this, "triggerEls");
    n(this, "closeButtonEl");
    n(this, "showClass");
    n(this, "isShow", !1);
    if (!s)
      throw new Error("Dialog element not found");
    this.el = s, this.options = t, this.id = s.id, this.triggerEls = Array.from(document.querySelectorAll(`[data-better-dialog-show="${this.id}"]`)), this.closeButtonEl = s.querySelector("[data-better-dialog-close]"), this.showClass = this.options.showClass || "is-show", this.bindEvents();
  }
  bindEvents() {
    var s;
    this.triggerEls.forEach((t) => t.addEventListener("click", () => this.show())), (s = this.closeButtonEl) == null || s.addEventListener("click", () => this.close()), this.el.addEventListener("cancel", (t) => {
      t.preventDefault();
    }), this.el.addEventListener("click", (t) => {
      const i = t.target.getBoundingClientRect(), o = t.clientX >= i.left && t.clientX <= i.right, l = t.clientY >= i.top && t.clientY <= i.bottom;
      o && l || this.close();
    }), window.addEventListener("keydown", (t) => {
      t.key === "Escape" && this.close();
    });
  }
  show() {
    var s, t, i, o;
    this.isShow = !0, this.el.classList.add(this.showClass), this.el.showModal(), (t = (s = this.options.on) == null ? void 0 : s.show) == null || t.call(s, this), this.options.animation && ((o = (i = this.options).animation) == null || o.call(i, "show", this));
  }
  close() {
    var s, t;
    this.isShow = !1, this.el.classList.remove(this.showClass), this.options.animation ? this.options.animation("close", this).then(() => {
      var i, o;
      this.el.close(), (o = (i = this.options.on) == null ? void 0 : i.close) == null || o.call(i, this);
    }) : (this.el.close(), (t = (s = this.options.on) == null ? void 0 : s.close) == null || t.call(s, this));
  }
}
class m {
  constructor(s, t) {
    n(this, "els", []);
    n(this, "dialogItems", []);
    this.els = this.normalizeTarget(s), this.dialogItems = this.els.map((i) => new c(i, t));
  }
  normalizeTarget(s) {
    return typeof s == "string" ? Array.from(document.querySelectorAll(s)) : s instanceof HTMLDialogElement ? [s] : Array.isArray(s) ? s.filter((t) => t instanceof HTMLDialogElement) : s instanceof NodeList ? Array.from(s).filter((t) => t instanceof HTMLDialogElement) : [];
  }
  getDialogItemById(s) {
    return this.dialogItems.find((t) => t.id === s);
  }
}
function f({ duration: e = 300 } = {}) {
  return async (s, t) => {
    const i = s === "show" ? [{ opacity: 0 }, { opacity: 1 }] : [{ opacity: 1 }, { opacity: 0 }], o = { duration: e }, l = t.el.animate(i, o), r = t.el.animate(i, {
      ...o,
      pseudoElement: "::backdrop"
    });
    return Promise.all([l.finished, r.finished]).then(() => {
    });
  };
}
function u({
  duration: e = 300,
  showClass: s = "is-transition-show",
  closeClass: t = "is-transition-close"
} = {}) {
  return (i, o) => new Promise((l) => {
    const r = i === "show" ? s : t;
    o.el.classList.add(r), setTimeout(() => {
      o.el.classList.remove(r), l();
    }, e);
  });
}
function w(e) {
  return e;
}
export {
  m as BetterDialog,
  c as DialogItem,
  u as css,
  w as custom,
  f as fade
};
