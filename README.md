# A Very Quick React Template

I found I was using the same tools and frameworks a lot in my personal projects, so I decided to consolidate them into a front-end template that can be used to quickly generate repos that can be served with [Vercel](https://vercel.com).

## Tech Breakdown

The framework of choice is [React](https://reactjs.org), paired with [Vite](https://vitejs.dev), and written in [Typescript](https://www.typescriptlang.org).

### Libraries

- [React Router](https://reactrouter.com/en/main): routing library
- [Tailwind](https://tailwindcss.com): styling library (uses [PostCSS](https://postcss.org), [Autoprefixer](https://github.com/postcss/autoprefixer) and [Classnames](https://www.npmjs.com/package/classnames))
- [Prettier](https://prettier.io): formatting and linting library (uses [Pretty Quick](https://github.com/azz/pretty-quick) and [Husky](https://typicode.github.io/husky/#/) for git hook integration)

### Extra Stuff

- [React Spinners](https://www.davidhu.io/react-spinners): spinner library used for page transitions
- [Tailwind Heropatterns](https://www.npmjs.com/package/tailwind-heropatterns): Tailwind library for SVG patterns

## Development

Run the project with `yarn dev`, and build it with `yarn build`. It will create a `dist` folder that you can serve with `yarn preview`, and/or host on your own server or platform.

Replace the `DOMAIN_NAME` argument in the `postbuild` script with your website's URL to generate a valid `sitemap.xml` and `robots.txt`.

## Roadmap

1. Implementing SSR
2. Containerization
3. Bundling my WIP UI library

## Considerations

The template contains a `vercel.json` file that contains basic config for SPA's (similar configurations may not be necessary for other platforms):

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

And the `vite.config.ts` contains some code to allow for `process.env` support (I prefer it over `import.meta`):

```typescript
import { defineConfig, loadEnv, UserConfig } from "vite";
import react from "@vitejs/plugin-react";

export default ({ mode }: UserConfig) => {
  // useful hack for loading env vars
  process.env = { ...process.env, ...loadEnv(mode!, process.cwd()) };

  return defineConfig({
    plugins: [react()],
    // this definition assigns all instances of process.env to the hack replacement declared above
    define: {
      "process.env": process.env
    }
  });
};
```

Lastly, pages are loaded with the `PageLoader.ts` file, which uses `React.lazy` for code-splitting:

```ts
import { lazy } from "react";

// named exports are preferred so that they can all be imported from the same file
export const Dashboard = lazy(() => import("./pages/Dashboard"));
export const About = lazy(() => import("./pages/About"));
export const NotFound = lazy(() => import("./pages/NotFound"));
```

## Notes

My `tailwind.config.cjs` setup uses the [Inter](https://tailwindui.com/documentation) font as the default:

```js
/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // remove this if you don't want to use inter (and remove the stylesheet link in index.html)
        sans: ["Inter var", ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
};
```

And here are my `.prettierrc` rules:

```json
{
  "arrowParens": "avoid",
  "bracketSpacing": true,
  "endOfLine": "auto",
  "htmlWhitespaceSensitivity": "css",
  "insertPragma": false,
  "jsxBracketSameLine": false,
  "jsxSingleQuote": false,
  "printWidth": 80,
  "proseWrap": "preserve",
  "quoteProps": "as-needed",
  "requirePragma": false,
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "none",
  "useTabs": false,
  "vueIndentScriptAndStyle": false
}
```

And my `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "module": "ESNext",
    "moduleResolution": "Node",
    "jsx": "react-jsx",
    "outDir": "./dist",
    "useDefineForClassFields": true,
    "allowJs": false,
    "allowSyntheticDefaultImports": true,
    "declaration": true,
    "esModuleInterop": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "removeComments": true,
    "isolatedModules": true,
    "incremental": true,
    "noEmit": true,
    "noImplicitAny": true,
    "noImplicitReturns": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "sourceMap": true,
    "skipLibCheck": true,
    "strict": true,
    "strictBindCallApply": true,
    "strictNullChecks": true
  },
  "include": ["./src/**/*"]
}
```
