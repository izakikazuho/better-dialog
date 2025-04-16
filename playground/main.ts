import { BetterDialog } from '../src';
import { fadeAnimation } from '../src/animations';
import { tuaBodyScrollLockPlugin } from '../src/plugins';

window.dialog = new BetterDialog('.js-dialog', {
  animation: fadeAnimation({ duration: 300 }),
  on: {
    init: (item) => console.log('init', item.id),
    show: (item) => console.log('opened', item.id),
    close: (item) => console.log('closed', item.id),
  },
  plugins: [tuaBodyScrollLockPlugin({ overflowType: 'clip' })],
});
