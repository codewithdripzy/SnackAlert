# 🥪 SnackAlert

> Simple, beautiful toast-style alert system for React. Easy to use. Easy to love.

SnackAlert provides a flexible, lightweight, and customizable way to show toast/snackbar-style notifications in your React app using a modern hook-based API.

## 📦 Installation

```bash
npm install snackalert
# or
yarn add snackalert
```

## 🚀 Quick Start

SnackAlert gives you two powerful ways to get started instantly — **automatic injection** or **app wrapping** — with no extra setup.

### 🧩 Option 1: Auto-Mount Anywhere (Zero Config)

> Perfect for static apps, SPAs, or dashboards — SnackAlert mounts itself globally.

```tsx
import { mountSnackAlert } from 'snackalert';

// Mount the alert system into the DOM (usually called once at app start)
mountSnackAlert();
```

Now you can trigger alerts anywhere using the `useAlert` hook:

```tsx
import { useAlert, AlertType } from 'snackalert';

const MyComponent = () => {
  const { showAlert } = useAlert();

  return (
    <button
      onClick={() => showAlert({
          type: AlertType.INFO,
          message: "🥪 SNACK ALERT!!! Have you had a snack today?"
        })
      }
    >
      Show Alert
    </button>
  );
};
```

### 🧩 Option 2: Use `withSnackAlert` HOC

> Prefer manual control over your root app? Wrap it cleanly with the `withSnackAlert` helper.

```tsx
// main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { withSnackAlert } from 'snackalert';

const AppWithAlerts = withSnackAlert(App);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppWithAlerts />
  </React.StrictMode>
);
```

### ✅ What’s Exported

```ts
// snackalert package
export { useAlert } from 'snackalert';
export { AlertType, mountSnackAlert, withSnackAlert } from 'snackalert';

```

### 2. **Use the `useAlert` hook**

```tsx
import { useAlert, AlertType } from 'snackalert';

const MyComponent = () => {
  const { showAlert } = useAlert();

  const handleClick = () => {
    showAlert({
      type: AlertType.INFO,
      message: "🥪 SNACK ALERT!!! Have you had a snack today?"
    });
  };

  return (
    <button onClick={handleClick}>
      Show SnackAlert
    </button>
  );
};
```

## 🧠 API Reference

### `useAlert()`

Hook that provides alert functionality in your component.

#### Returns

* `showAlert(options: ShowAlertOptions): void`

### `showAlert` Options

| Option     | Type        | Required | Description                                           |
| ---------- | ----------- | -------- | ----------------------------------------------------- |
| `type`     | `AlertType` | ✅        | Type of alert: `INFO`, `SUCCESS`, `WARNING`, `ERROR`  |
| `message`  | `string`    | ✅        | Text to display in the alert                          |
| `duration` | `number`    | ❌        | Time in milliseconds before dismiss (default: 3000ms) |

## 🎨 AlertType Enum

```ts
enum AlertType {
  INFO = 'info',
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error'
}
```

## 📂 Exports

```ts
// index.ts
export { AlertType } from './main.tsx';
export { useAlert } from './core/hooks/provider.ts';
```

## ✨ Features

* ⚡ One-line usage with `useAlert()`
* 💅 Clean, auto-dismiss toasts with type styling
* 🔁 Option to customize duration and styles
* 🧱 Zero dependencies, built with modern React
* 🧪 Ready for unit & integration testing

## 🛠️ Customization (Coming Soon)

* Theming (light/dark/custom)
* Custom icons per alert type
* Toast positioning
* Global config

## 📸 Demo

<p align="center">
  <img src="https://media.giphy.com/media/xT0GqFJM5zy28ddYZa/giphy.gif" width="300" />
</p>

<!-- > *(Demo gif above is just a placeholder—replace with your real preview)* -->

## 🧪 Example Use Case

```tsx
showAlert({
  type: AlertType.SUCCESS,
  message: "✅ Order placed successfully!",
  duration: 5000
});
```

## 🧩 Folder Structure (if using from source)

```bash
snackalert/
├── core/
│   └── hooks/
│       └── provider.ts
├── main.tsx
└── index.ts
```

## 🧑‍💻 Contributing

Feel free to open issues or PRs for features, bugs, or enhancements. We'd love your input to make `SnackAlert` the best toast solution out there.

## 🧾 License

MIT License © 2025 Emmanuel Bankole

## ❤️ Inspired By

* [React Toastify](https://fkhadra.github.io/react-toastify/)
* [Material UI Snackbar](https://mui.com/material-ui/react-snackbar/)

## 📬 Contact

For questions or feedback, reach out via [GitHub Issues](https://github.com/codewithdripzy/snack-alert/issues) or [email](mailto:thecodeguyy@gmail.com)
