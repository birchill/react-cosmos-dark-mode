# React Cosmos Dark Mode

Adds a toolbar icon or two for toggling the dark mode.

## Who should use this?

If you are working this components that have a dark mode that is controlled by
a class on an ancestor (e.g. [Tailwind's `dark`
class](https://tailwindcss.com/docs/dark-mode)) then you can use this to
conveniently toggle between states.

By default it will also track your system dark mode settings.

If your components only respond to the system dark mode setting you don't need
this plugin.
Instead you can toggle dark mode through your browser's DevTools or your OS's
settings.

## Installation

Install the package:

```
npm install -D react-cosmos-dark-mode
```

Add the plugin to your `cosmos.config.json`, e.g.:

```diff
 {
   "$schema": "http://json.schemastore.org/cosmos-config",
-  "plugins": ["react-cosmos-plugin-webpack"],
+  "plugins": ["react-cosmos-dark-mode", "react-cosmos-plugin-webpack"],
   "dom": {
     "containerQuerySelector": "#container"
   }
 }
```

React Cosmos doesn't yet provide a way for plugins to install fixtures so you
need to add a [global
decorator](https://cosmos-docs-woad.vercel.app/docs/fixtures/decorators) that
wraps everything in the `DarkMode` fixture.

You can do that by adding a file named `cosmos.decorator.tsx` to your root `src`
folder that looks something like this:

```ts
import type { RenderableProps } from 'preact';
import { DarkMode } from 'react-cosmos-dark-mode/DarkMode';

type EmptyProps = { __tag?: never };

export default function GlobalDecorator({
  children
}: RenderableProps<EmptyProps>) {
  return <DarkMode>{children}</DarkMode>;
}
```

(Can someone please help me update this for React?)

## Configuration

The following configuration options can be set in the `ui.darkMode` section of
`cosmos.config.json`:

| Key       | Type                            | Default    | Description                                                                                                                             |
| --------- | ------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `dark`    | `string \| null`                | `"dark"`   | The class set on the root element when in dark mode or `null` to set no class.                                                          |
| `light`   | `string \| null`                | `null`     | The class set on the root element when in light mode or `null` to set no class.                                                         |
| `default` | `"dark" \| "light" \| "system"` | `"system"` | The default value to use. If `"system"` is used the system-defined (i.e. browser or OS) preference is used when the setting is cleared. |

### Example

To use a class `light` instead and disable the behavior where the plugin matches
the system dark mode setting you can use:

```diff
 {
   "$schema": "http://json.schemastore.org/cosmos-config",
   "plugins": ["react-cosmos-dark-mode", "react-cosmos-plugin-webpack"],
+  "ui": {
+    "darkMode": {
+      "light": "light",
+      "dark": null,
+      "default": "light"
+    }
+  }
 }
```

### Future extensions

This plugin is very basic. The following are some configuration settings it
probably should support.
Please [file an
issue](https://github.com/birchill/react-cosmos-dark-mode/issues) if you need
any of them:

- Specifying the target element. For example, we could add a `targetSelector`
  setting to allow specifying which element should have its class toggled,
  e.g. `targetSelector: "#container"`.

- Specifying the target attribute. For example, we could add a `targetAttr`
  setting to allow specifying which attribute to toggle.
  e.g. `targetAttr: "data-dark-mode"`.

## Developing

The easiest way to develop is using [`yalc`](https://github.com/wclr/yalc).

Install it globally and then from this repo do:

```
yarn build
yalc publish
```

Then in your project that is using React Cosmos run:

```
yalc add react-cosmos-dark-mode
```
