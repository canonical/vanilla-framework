---
wrapper_template: '_layouts/docs.html'
context:
  title: Search and filter | Components
---

## Search and filter

<span class="p-label--new">New</span>

<hr>

This pattern provides the ability to search and apply filter chips with a panel listing available options.

This pattern requires JavaScript to provide the full functionality.

<div class="embedded-example"><a href="/docs/examples/patterns/search-and-filter/default/" class="js-example">
View example of the pull quote pattern
</a></div>

### Functionality

Please use toggle the `aria-hidden` attribute on the `.p-search-and-filter__panel` element when you want to reveal the filter panel. When a user makes a selection you can append a [chip element](/docs/patterns/chip) to the `.search-and-filter__search-container` element.

### Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
@import '../base';
@include vf-base;

@import '../patterns_chip';
@import '../patterns_search-box';
@import '../patterns_search-and-filter';
@import '../utilities_off-screen';
@include vf-p-chip;
@include vf-p-search-box;
@include vf-p-search-and-filter;
@include vf-u-off-screen;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.

### React

For use of the React component you can do that by installing our react-component page and importing.

[Playbook example](https://canonical-web-and-design.github.io/react-components/?path=/docs/search-and-filter--default-story)

### Design

No design specs available yet.
