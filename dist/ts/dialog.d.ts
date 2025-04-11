import { DialogOptions } from './types/dialog';
export declare class DialogItem {
    readonly el: HTMLDialogElement;
    readonly id: string;
    readonly options: DialogOptions;
    readonly triggerEls: HTMLElement[];
    readonly closeButtonEl: HTMLElement | null;
    readonly showClass: string;
    isShow: boolean;
    private initHooks;
    private showHooks;
    private closeHooks;
    constructor(el: HTMLDialogElement, options: DialogOptions);
    private runInitHooks;
    private runShowHooks;
    private runCloseHooks;
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
