import type { DialogItem } from '../dialog';

export interface DialogOptions {
  readonly showClass?: string;
  readonly on?: {
    show?: (dialog: DialogItem) => void;
    close?: (dialog: DialogItem) => void;
  };
  readonly animation?: AnimFunction | false;
}

export type AnimFunction = (direction: 'show' | 'close', dialog: DialogItem) => Promise<void>;
