# Better Dialog (β)

A lightweight, flexible modal library powered by the native `<dialog>` element.

> 🚧 This library is currently in beta. The API may change.

---

## ✨ Features

- Built on native `<dialog>`
- Show/close lifecycle hooks
- Plugin & animation support
- No built-in styles
- Zero dependencies

---

## 📦 Installation

```bash
npm install @haebaragi/better-dialog
```

---

## 🔗 Documentation

Full usage examples, plugin guides, and API reference are available at:

👉 [https://better-dialog.haebaragi.net](https://better-dialog.haebaragi.net)

---

## 🧪 Quick Example

```html
<button data-better-dialog-show="my-dialog">Open Dialog</button>

<dialog id="my-dialog">
  <p>Hello, World!</p>
  <button data-better-dialog-close>Close</button>
</dialog>
```

```ts
import { BetterDialog } from '@haebaragi/better-dialog';
import { fadeAnimation } from '@haebaragi/better-dialog/animations';

new BetterDialog('#my-dialog', {
  animation: fadeAnimation({ duration: 300 }),
});
```

---

## License

MIT  
(c) 2025 [@izakikazuho](https://github.com/izakikazuho)
