import { lock, unlock } from 'tua-body-scroll-lock';
export function tuaBodyScrollLockPlugin(options) {
    return ({ onShow, onClose }) => {
        onShow((dialog) => lock(dialog.el, options));
        onClose((dialog) => unlock(dialog.el));
    };
}
