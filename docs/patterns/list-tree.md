---
wrapper_template: '_layouts/default.html'
---

## List tree

<hr>

The list tree pattern can be used to show a directory style listing, such as a list of files and folders within a directory.

Each directory can be opened or collapse using `aria-hidden`, set `true` for open and `false` to close on the nested list. Using JS this can be changed and should also update the `aria-expanded` attribute on the folder element.

<a href="/examples/patterns/list-tree/" class="js-example">
View example of the list tree pattern
</a>

### Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
@import 'patterns_list-tree';
@include vf-p-list-tree;
```

For more information see [Customising Vanilla](/customising-vanilla/) in your projects, which includes overrides and importing instructions.

### Design

For more information view the [list tree design spec](https://github.com/ubuntudesign/vanilla-design/tree/master/List%20tree) which includes the specification in markdown format and a PNG image.

### Related

For alternative list style layouts [view our range of list components.](/patterns/lists)
