# @deck9/ui

Vue 3 components for Deck9 apps such as [Input](https://github.com/deck9/input), styled with Tailwind CSS 3. Storybook is the component reference: run `npm run storybook` in this repo.

## Install

```sh
npm install @deck9/ui
pnpm add @deck9/ui
yarn add @deck9/ui
bun add @deck9/ui
```

Vue 3.3 or newer is a peer dependency. Pre-releases are on the `next` tag: `npm install @deck9/ui@next`.

The steps below use npm. With another package manager, swap `npm install` for `pnpm add`, `yarn add` or `bun add`.

## Use it in an app

### Tailwind

The package ships no CSS: its components use Tailwind 3 classes, and the app's Tailwind build creates them. In a new app, set up Tailwind 3:

```sh
npm install -D tailwindcss@3 postcss autoprefixer @tailwindcss/forms
npx tailwindcss init -p
```

In `tailwind.config.js`, add the package's bundle to `content`, plus the `grey` color and the forms plugin the components use. `darkMode: "class"` keeps the components light until the app sets a `dark` class. Without it, they turn dark whenever the computer is in dark mode.

```js
import colors from "tailwindcss/colors";
import forms from "@tailwindcss/forms";

export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts}",
    "./node_modules/@deck9/ui/dist/src/ui.mjs",
  ],
  theme: {
    extend: {
      colors: { grey: colors.slate },
    },
  },
  plugins: [forms],
};
```

Put Tailwind's layers in the app's main CSS file (in a Vite app: `src/style.css`):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Icons

The components draw icons with Font Awesome 6 and register only the few they use themselves. The app registers every other icon. Install Font Awesome 6, so the app and the components share one copy:

```sh
npm install @fortawesome/fontawesome-svg-core@6 @fortawesome/free-solid-svg-icons@6
```

Register the icons once before the app mounts, for example in `src/main.js`:

```js
import { library } from "@fortawesome/fontawesome-svg-core";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

library.add(faRocket);
```

Brand icons work the same way with `@fortawesome/free-brands-svg-icons@6`.

### A first component

```vue
<script setup>
import { D9Button, D9Icon } from "@deck9/ui";
</script>

<template>
  <D9Button label="Launch" icon="rocket" />
  <D9Icon name="rocket" size="2x" />
</template>
```

Icon names are Font Awesome's names in kebab-case, without `fa`: `faChevronDown` is `chevron-down`.

## Develop

The repo uses npm (`package-lock.json`) and the Node version in `.nvmrc`.

```sh
npm ci
npm run storybook   # Storybook on http://localhost:6006
npm test            # Vitest
npm run lint        # ESLint
npm run check       # type check
npm run build       # builds dist/, the files npm publishes
```

## Release

Run `release.sh` on main. It takes the same arguments as `npm version`:

```sh
./release.sh preminor --preid next   # 0.17.0 → 0.18.0-next.0
./release.sh prerelease              # 0.18.0-next.0 → 0.18.0-next.1
./release.sh minor                   # 0.18.0-next.1 → 0.18.0
./release.sh patch                   # 0.18.0 → 0.18.1
./release.sh major                   # 0.18.1 → 1.0.0
```

It pulls main, builds, bumps the version, pushes the commit and tag, and creates a GitHub release. You need push rights on main and a logged-in `gh`. The GitHub release starts the publish workflow, which publishes to npm through trusted publishing, without an npm token.

A version with a dash, like `0.18.0-next.1`, is a pre-release: it goes to the `next` tag. Every other version goes to `latest`, which is what `npm install @deck9/ui` installs.
