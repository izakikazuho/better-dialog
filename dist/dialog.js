export class DialogItem {
    el;
    id;
    options;
    triggerEls;
    closeButtonEl;
    showClass;
    isShow = false;
    initHooks = [];
    showHooks = [];
    closeHooks = [];
    constructor(el, options) {
        if (!el) {
            throw new Error('Dialog element not found');
        }
        this.el = el;
        this.options = options;
        this.id = el.id;
        this.triggerEls = Array.from(document.querySelectorAll(`[data-better-dialog-show="${this.id}"]`));
        this.closeButtonEl = el.querySelector('[data-better-dialog-close]');
        this.showClass = this.options.showClass || 'is-show';
        this.options.plugins?.forEach((plugin) => {
            plugin({
                onInit: (cb) => this.initHooks.push(cb),
                onShow: (cb) => this.showHooks.push(cb),
                onClose: (cb) => this.closeHooks.push(cb),
            });
        });
        this.bindEvents();
        this.runInitHooks();
    }
    runInitHooks() {
        this.options.on?.show?.(this);
        this.initHooks.forEach((cb) => cb(this));
    }
    runShowHooks() {
        this.options.on?.show?.(this);
        this.showHooks.forEach((cb) => cb(this));
    }
    runCloseHooks() {
        this.options.on?.close?.(this);
        this.closeHooks.forEach((cb) => cb(this));
    }
    bindEvents() {
        this.triggerEls.forEach((el) => el.addEventListener('click', () => this.show()));
        this.closeButtonEl?.addEventListener('click', () => this.close());
        this.el.addEventListener('cancel', (e) => {
            e.preventDefault();
        });
        this.el.addEventListener('click', (e) => {
            const rect = e.target.getBoundingClientRect();
            const isWithinRangeX = e.clientX >= rect.left && e.clientX <= rect.right;
            const isWithinRangeY = e.clientY >= rect.top && e.clientY <= rect.bottom;
            if (isWithinRangeX && isWithinRangeY)
                return;
            this.close();
        });
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.close();
            }
        });
    }
    show() {
        this.isShow = true;
        this.el.classList.add(this.showClass);
        this.el.showModal();
        this.runShowHooks();
        if (this.options.animation) {
            this.options.animation?.('show', this);
        }
    }
    close() {
        this.isShow = false;
        this.el.classList.remove(this.showClass);
        if (this.options.animation) {
            this.options.animation('close', this).then(() => {
                this.el.close();
                this.runCloseHooks();
            });
        }
        else {
            this.el.close();
            this.runCloseHooks();
        }
    }
}
export class BetterDialog {
    els = [];
    dialogItems = [];
    constructor(target, options) {
        this.els = this.normalizeTarget(target);
        this.dialogItems = this.els.map((el) => new DialogItem(el, options));
    }
    normalizeTarget(target) {
        if (typeof target === 'string') {
            return Array.from(document.querySelectorAll(target));
        }
        if (target instanceof HTMLDialogElement) {
            return [target];
        }
        if (Array.isArray(target)) {
            return target.filter((el) => el instanceof HTMLDialogElement);
        }
        if (target instanceof NodeList) {
            return Array.from(target).filter((el) => el instanceof HTMLDialogElement);
        }
        return [];
    }
    getDialogItemById(id) {
        return this.dialogItems.find((item) => item.id === id);
    }
}
