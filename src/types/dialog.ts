import type { DialogItem } from '../dialog';

export interface DialogOptions {
  readonly showClass?: string;
  readonly on?: {
    show?: (dialog: DialogItem) => void;
    close?: (dialog: DialogItem) => void;
  };
  readonly animation?: AnimFunction | false;
  readonly plugins?: DialogPlugin[];
}

export type DialogPlugin = (hooks: {
  onInit: (cb: (dialog: DialogItem) => void) => void;
  onShow: (cb: (dialog: DialogItem) => void) => void;
  onClose: (cb: (dialog: DialogItem) => void) => void;
}) => void;

export type AnimFunction = (direction: 'show' | 'close', dialog: DialogItem) => Promise<void>;
