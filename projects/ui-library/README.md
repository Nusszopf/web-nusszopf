<p align="center">
  <a href="https://nusszopf.org">
    <img src="../../docs/1200x630.png" alt="Nusszopf logo" height="165">
  </a>
</p>

# Nusszopf – Design System

Run `yarn storybook` to start develpment.
To make use of the components in other workspaces, import from `ui-library/stories/...`.
For all next.js projects, `next-transpile-modules` required.

Rule of thumb: Not every ui-component should be part of the design system. Just add abstract components,
which are not semantically linked. (semantic-ui-components should be added where you use it.)

---

## Folder Structure

```zsh
+-- /assets
+-- /services
+-- /stories
| +-- /atoms
| +-- /molecules
| +-- /organisims
| +-- /templates
+-- /styles
```

### **/assets**

Static content like images and text.

### **/services**

Higher-Order-Controls for specific ui-components, e.g. `Toast.service`.

### **/stories**

All ui components, structured by the [Atomic Design Pattern](https://bradfrost.com/blog/post/atomic-web-design/).

### **/stories/atoms**

Dump reusable basic building blocks.

### **/stories/molecules**

Dump reusable combinations of basic building blocks.

### **/stories/organisms**

Complex reusable building blocks. At this level some kind of logic comes in play.

### **/stories/templates**

Page-layout-related components.

---

## Component Structure

All components should be self-contained, if possible.

```zsh
+-- /MyComponent
| +-- /components
| +-- /utils
| +-- MyComponent.<optional-prefix>.js
| +-- useMyComponent.js
| +-- MyComponent.theme.js
| +-- MyComponent.css
| +-- MyComponent.stories.js
```
