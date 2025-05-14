import type { AnimFunction } from '../types/dialog';

export function fadeAnimation({ duration = 300 } = {}): AnimFunction {
  return async (direction, dialog) => {
    const keyframes = direction === 'show' ? [{ opacity: 0 }, { opacity: 1 }] : [{ opacity: 1 }, { opacity: 0 }];
    const options = { duration };

    const anim1 = dialog.el.animate(keyframes, options);

    let anim2Finished: Promise<Animation> | Promise<void> = Promise.resolve();

    try {
      const anim2 = dialog.el.animate(keyframes, {
        ...options,
        pseudoElement: '::backdrop',
      });
      anim2Finished = anim2.finished;
    } catch (e) {
      console.warn('[BetterDialog] ::backdrop animation not supported:', e);
    }

    return Promise.all([anim1.finished, anim2Finished]).then(() => {});
  };
}
