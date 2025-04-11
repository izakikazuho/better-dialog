import { BetterDialog, fade, tuaBodyScrollLockPlugin } from '../../../src';

const dialog = new BetterDialog('#my-dialog', {
  animation: fade({ duration: 300 }),
  on: {
    show: (item) => console.log('opened', item.id),
    close: (item) => console.log('closed', item.id),
  },
  plugins: [tuaBodyScrollLockPlugin({ overflowType: 'clip' })],
});
