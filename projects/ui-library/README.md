<p align="center">
  <a href="https://nusszopf.org">
    <img src="../../docs/1200x630.png" alt="Nusszopf logo" height="165">
  </a>
</p>

# Nusszopf – Design System

Run `yarn storybook` to start develpment.
To make use of the components in other workspaces, import from `ui/stories/...`.
For all next.js projects, `next-transpile-modules` is required.

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

Logic and controls for specific ui-components.

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
