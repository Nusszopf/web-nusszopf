# Development

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
We use [Vercel](https://vercel.com) to build and host the site. To work locally you have to run `npx vercel` to link the project. After that you can load the
environment-variables via `vercel env pull`.

---

## Scripts

### `yarn dev`

Starts the development server on [http://localhost:3000](http://localhost:3000).

### `yarn build`

Builds the app for production.

### `yarn start`

Runs the built app in production mode.

### `yarn storybook`

Starts development server for storybook on [http://localhost:6006](http://localhost:6006).

### `yarn build-storybook`

Builds storybook for production.

### `yarn analyze`

Analyze the app bundles.

## Update dependencies

Run `yarn upgrade-interactive --latest`

---

## VS Code

### Required Plugins

- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Headwind](https://marketplace.visualstudio.com/items?itemName=heybourn.headwind)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

### Settings

- turn default validations for css/less/sass/tailwind off and let stylelint take care of it (.vscode/settings.json)

---

## Folder Structure

```zsh
+-- /.next
+-- /.storybook
+-- /.vercel
+-- /.vscode
+-- /docs
+-- /public
+-- /scripts
+-- /sendgrid
+-- /src
| +-- /containers
| +-- /pages
| +-- /stories  
| +-- /styles
| +-- /utils
```

### Root / .next / .storybook / .vercel / .vscode

All configuration-files for specific libraries and dev-tooling, etc.

### /docs

Dokumentation.

### /public

Specific folder to Next.js. More informations in the documentation: [Next.js - Static File Serving](https://nextjs.org/docs/basic-features/static-file-serving).

### /scripts

Dev-Tooling and helpers for e.g. automatisation.

### /scripts

E-Mail templates for SendGrid.

### /src

All the code relevant for the frontend-app, als well the serverless-functions.

#### **src/stories**

All "dumb" UI components, managed and documented via storybook and structured via the atomic-design-pattern.

#### **src/containers**

Components, which:
- are smart
- are not relevant for the design-system; e.g. have a specific use-case, that do not occur often
- can't be seperated easy into logic and ui
- related to react concepts like `high-order-components`

#### **src/pages**

Specific folder to Next.js. More informations in the documentation: [Next.js - Pages](https://nextjs.org/docs/basic-features/pages):

```zsh
| +-- /pages
| | +-- /api -> serverless functions
| | +-- /... -> web app pages
```

#### **src/styles**

Global styles and tailwind-configuration.

#### **src/utils**

Shared helper:

```zsh
| +-- /utils
| | +--  /functions -> helper functions for serverless-functions
| | +-- /hasura -> logic linked with hasura backend
| | +-- /libs -> logic linked with third-party libraries
| | +-- /services -> combined logic of specific topics
```
