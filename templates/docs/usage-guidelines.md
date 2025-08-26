---
wrapper_template: '_layouts/docs.html'
context:
  title: Usage Guidelines
  description: Usage guidelines for Vanilla Framework
---

## Component mixing

Component mixing is the practice of using class names for multiple components on a single element.
Vanilla components are tested in isolation, so mixing components can lead to unexpected results.
We recommend that you avoid mixing components. Elements should only use class names from one component, unless otherwise documented.

### Utility classes

Our utility classes are designed with a very narrow scope, and are intended to modify the behavior of other components. 
Components can be mixed with utility classes, unless otherwise documented.

### What to do
The following example demonstrates usage of a single component per element, which is the recommended approach.
Equal height row items wrap image containers and headings, instead of mixing them on the same element.

<div class="embedded-example"><a href="/docs/examples/docs/usage-guidelines/component-mixing/what-to-do" class="js-example">
  View example of recommended component usage
</a></div>

### What not to do
The following is an example of mixing components, which is not recommended.

- Mixing the equal height row item and image container causes the image container to be placed outside its parent.
- Mixing the equal height row item and heading has no unintended consequences at this time, but may lead to unexpected results in the future.


<div class="embedded-example"><a href="/docs/examples/docs/usage-guidelines/component-mixing/what-not-to-do" class="js-example">
  View example of component mixing, which is not recommended
</a></div>
