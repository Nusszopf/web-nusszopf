# Development

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
We use [Vercel](https://vercel.com) to build and host the site. To work locally you have to run `npx vercel` to link the project. After that you can load the
environment-variables via `vercel env pull`.

## Scripts

### `yarn dev`

Starts the development server on [http://localhost:3000](http://localhost:3000).

### `yarn build`

Builds the app for production.

### `yarn start`

Runs the built app in production mode.

### `yarn analyze`

Analyze the app bundles.

## Update dependencies
 
Run `yarn upgrade-interactive --latest`

## VS Code

### Required Plugins

- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Headwind](https://marketplace.visualstudio.com/items?itemName=heybourn.headwind)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

### Settings

- turn default validations for css/less/sass/tailwind off and let stylelint take care of it (.vscode/settings.json)
