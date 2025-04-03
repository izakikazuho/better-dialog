# Better Dialog (β)

A lightweight, flexible modal dialog library powered by the native `<dialog>` element.

> 🚧 This library is currently in beta. API may change without notice.

---

## ✨ Features

- Uses native `<dialog>` element
- Simple show/close handling
- Flexible animation API
- No dependencies

---

<!-- ## 📦 Installation

```bash
npm install better-dialog
``` -->

<!-- ## 🚀 Usage

### HTML

```html
<button data-better-dialog-show="my-dialog">Open Dialog</button>

<dialog id="my-dialog">
  <p>Hello, World!</p>
  <button data-better-dialog-close>Close</button>
</dialog>
```

### JavaScript

```javascript
import { BetterDialog, fade } from 'better-dialog';

const dialog = new BetterDialog('#my-dialog', {
  animation: fade({ duration: 300 }),
  on: {
    show: (item) => console.log('opened', item.id),
    close: (item) => console.log('closed', item.id),
  },
});
``` -->

## API

### `new BetterDialog(target, options)`

| Param     | Type                                      | Description                     |
| --------- | ----------------------------------------- | ------------------------------- |
| `target`  | string / Element / Element\[\] / NodeList | Dialog selector or elements     |
| `options` | `DialogOptions`                           | Show/close handlers & animation |
