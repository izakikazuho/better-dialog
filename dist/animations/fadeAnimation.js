export function fadeAnimation({ duration = 300 } = {}) {
    return async (direction, dialog) => {
        const keyframes = direction === 'show' ? [{ opacity: 0 }, { opacity: 1 }] : [{ opacity: 1 }, { opacity: 0 }];
        const options = { duration };
        const anim1 = dialog.el.animate(keyframes, options);
        const anim2 = dialog.el.animate(keyframes, {
            ...options,
            pseudoElement: '::backdrop',
        });
        return Promise.all([anim1.finished, anim2.finished]).then(() => { });
    };
}
