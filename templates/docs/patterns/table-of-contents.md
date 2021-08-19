---
wrapper_template: '_layouts/docs.html'
context:
  title: Table of contents | Components
---

# Table of contents

<hr>

A table of contents can be used to display supplementary links to a page.

<div class="embedded-example"><a href="/docs/examples/patterns/table-of-contents/" class="js-example">
View example of the table of contents pattern
</a></div>

## Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework/scss/vanilla';
@include vf-base;

@include vf-p-table-of-contents;

// list component is used within table of contents, so you need to include it as well
@include vf-p-lists;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.

## Design

For more information [view the table of contents design spec](https://github.com/ubuntudesign/vanilla-design/tree/master/Table%20of%20contents), which includes the specification in markdown format and a PNG image.
