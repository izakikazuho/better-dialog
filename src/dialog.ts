import { DialogOptions } from './types/dialog';

export class DialogItem {
  readonly el: HTMLDialogElement;
  readonly id: string;
  readonly options: DialogOptions;
  readonly triggerEls: HTMLElement[];
  readonly closeButtonEl: HTMLElement | null;
  readonly showClass: string;
  isShow: boolean = false;

  constructor(el: HTMLDialogElement, options: DialogOptions) {
    if (!el) {
      throw new Error('Dialog element not found');
    }

    this.el = el;
    this.options = options;
    this.id = el.id;
    this.triggerEls = Array.from(document.querySelectorAll<HTMLElement>(`[data-better-dialog-show="${this.id}"]`));
    this.closeButtonEl = el.querySelector<HTMLElement>('[data-better-dialog-close]');
    this.showClass = this.options.showClass || 'is-show';

    this.bindEvents();
  }

  private bindEvents(): void {
    this.triggerEls.forEach((el) => el.addEventListener('click', () => this.show()));

    this.closeButtonEl?.addEventListener('click', () => this.close());

    this.el.addEventListener('cancel', (e) => {
      e.preventDefault();
    });

    this.el.addEventListener('click', (e) => {
      const rect = (e.target as HTMLElement).getBoundingClientRect();
      const isWithinRangeX = e.clientX >= rect.left && e.clientX <= rect.right;
      const isWithinRangeY = e.clientY >= rect.top && e.clientY <= rect.bottom;
      if (isWithinRangeX && isWithinRangeY) return;
      this.close();
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.close();
      }
    });
  }

  show(): void {
    this.isShow = true;
    this.el.classList.add(this.showClass);
    this.el.showModal();
    this.options.on?.show?.(this);
    if (this.options.animation) {
      this.options.animation?.('show', this);
    }
  }

  close(): void {
    this.isShow = false;
    this.el.classList.remove(this.showClass);
    if (this.options.animation) {
      this.options.animation('close', this).then(() => {
        this.el.close();
        this.options.on?.close?.(this);
      });
    } else {
      this.el.close();
      this.options.on?.close?.(this);
    }
  }
}

export class BetterDialog {
  els: HTMLDialogElement[] = [];
  dialogItems: DialogItem[] = [];

  constructor(target: string | HTMLDialogElement | HTMLDialogElement[] | NodeList, options: DialogOptions) {
    this.els = this.normalizeTarget(target);
    this.dialogItems = this.els.map((el) => new DialogItem(el, options));
  }

  private normalizeTarget(target: string | HTMLDialogElement | HTMLDialogElement[] | NodeList): HTMLDialogElement[] {
    if (typeof target === 'string') {
      return Array.from(document.querySelectorAll<HTMLDialogElement>(target));
    }

    if (target instanceof HTMLDialogElement) {
      return [target];
    }

    if (Array.isArray(target)) {
      return target.filter((el): el is HTMLDialogElement => el instanceof HTMLDialogElement);
    }

    if (target instanceof NodeList) {
      return Array.from(target).filter((el): el is HTMLDialogElement => el instanceof HTMLDialogElement);
    }

    return [];
  }

  getDialogItemById(id: string): DialogItem | undefined {
    return this.dialogItems.find((item) => item.id === id);
  }
}
