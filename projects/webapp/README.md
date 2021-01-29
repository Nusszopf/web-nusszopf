<p align="center">
  <a href="https://nusszopf.org">
    <img src="../../docs/1200x630.png" alt="Nusszopf logo" height="165">
  </a>
</p>

# Nusszopf Web App

Main application and website.

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

### `yarn analyze`

Analyze the app bundles.

---

## Folder Structure

```zsh
+-- /.next
+-- /.vercel
+-- /public
+-- /scripts
+-- /src
| +-- /assets
| +-- /components
| +-- /containers
| +-- /pages
| +-- /styles
| +-- /utils
```

### ./

All configuration-files for specific libraries, dev-tooling, etc.

### /docs

Dokumentation.

### /public

Specific folder to Next.js. More informations in the documentation: [Next.js - Static File Serving](https://nextjs.org/docs/basic-features/static-file-serving).

### /scripts

Dev-Tooling and helpers for e.g. automatisation.

### /src

All the code relevant for the frontend app, als well the serverless-functions.

#### **src/assets**

Static content like images and text.

Self-Contained-Components, which are used in multiple pages.

#### **src/componets**

Self-Contained-Components, which are used in multiple pages.

#### **src/containers**

Self-Contained-Components, which are used for specific pages. Organized in pages structure.

#### **src/pages**

Specific folder to Next.js. More informations in the documentation: [Next.js - Pages](https://nextjs.org/docs/basic-features/pages):

```zsh
| +-- /pages
| | +-- /api -> serverless functions
| | +-- /... -> web app pages
```

#### **src/styles**

Global styles and tailwind configuration.

#### **src/utils**

```zsh
| +-- /utils
| | +-- /functions -> helper functions for serverless-functions
| | +-- /hasura -> logic linked with hasura backend
| | +-- /libs -> logic linked with third-party libraries
| | +-- /services -> combined logic of specific topics
| | +-- enums
| | +-- helper
```
