---
wrapper_template: '_layouts/docs.html'
context:
  title: List tree | Components
---

The list tree pattern can be used to show a directory style listing, such as a list of files and folders within a directory.

Each directory can be opened or collapse using `aria-hidden`, set `true` for open and `false` to close on the nested list. Using JS this can be changed and should also update the `aria-expanded` attribute on the folder element.

<div class="embedded-example"><a href="/docs/examples/patterns/list-tree/default" class="js-example">
View example of the list tree pattern
</a></div>

## Legacy Version

<div class="p-notification--caution">
  <div class="p-notification__content">
    <h3 class="p-notification__title">Deprecated</h3>
    <p class="p-notification__message">Vanilla v4.16.0 changed the markup structure of the list tree to make it more accessible, and changed the node highlighting behavior in the list tree script. The old markup and JS will no longer be officially supported in Vanilla v5.</p>
  </div>
</div>

In the legacy version of the list tree, leaf nodes are not all links, the `.p-list-tree__link` class is not used for
leaf node styling, and the `.is-active` state is not applied to active tree nodes.

<div class="embedded-example"><a href="/docs/examples/patterns/list-tree/legacy" class="js-example">
View example of the list tree pattern
</a></div>

## Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-p-list-tree;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.

## Related

For alternative list style layouts [view our range of list components.](/docs/patterns/lists)
