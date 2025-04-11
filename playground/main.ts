import { BetterDialog } from '../src';
import { fadeAnimation } from '../src/animations';
import { tuaBodyScrollLockPlugin } from '../src/plugins';

const dialog = new BetterDialog('#my-dialog', {
  animation: fadeAnimation({ duration: 300 }),
  on: {
    show: (item) => console.log('opened', item.id),
    close: (item) => console.log('closed', item.id),
  },
  plugins: [tuaBodyScrollLockPlugin({ overflowType: 'clip' })],
});
