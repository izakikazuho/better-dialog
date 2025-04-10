import { BSLOptions, lock, unlock } from 'tua-body-scroll-lock';
import type { DialogPlugin } from '../types/dialog';

export function tuaBodyScrollLockPlugin(options: BSLOptions): DialogPlugin {
  return ({ onShow, onClose }) => {
    onShow((dialog) => lock(dialog.el, options));
    onClose((dialog) => unlock(dialog.el));
  };
}
