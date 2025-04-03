import { DialogOptions } from './types/dialog';
export declare class DialogItem {
    readonly el: HTMLDialogElement;
    readonly id: string;
    readonly options: DialogOptions;
    readonly triggerEls: HTMLElement[];
    readonly closeButtonEl: HTMLElement | null;
    readonly showClass: string;
    isShow: boolean;
    constructor(el: HTMLDialogElement, options: DialogOptions);
    private bindEvents;
    show(): void;
    close(): void;
}
export declare class BetterDialog {
    els: HTMLDialogElement[];
    dialogItems: DialogItem[];
    constructor(target: string | HTMLDialogElement | HTMLDialogElement[] | NodeList, options: DialogOptions);
    private normalizeTarget;
    getDialogItemById(id: string): DialogItem | undefined;
}
