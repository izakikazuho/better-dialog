import type { AnimFunction } from '../types/dialog';

export function cssAnimation({
  duration = 300,
  showClass = 'is-transition-show',
  closeClass = 'is-transition-close',
} = {}): AnimFunction {
  return (direction, dialog) => {
    return new Promise<void>((resolve) => {
      const className = direction === 'show' ? showClass : closeClass;
      dialog.el.classList.add(className);
      setTimeout(() => {
        dialog.el.classList.remove(className);
        resolve();
      }, duration);
    });
  };
}
