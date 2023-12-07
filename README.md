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

TODO

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
