---
wrapper_template: '_layouts/docs.html'
context:
  title: Labels | Components
---

# Labels

<hr>

Labels are static elements which you can apply to signify status, tags or any other information you find useful.

<div class="embedded-example"><a href="/docs/examples/patterns/labels/" class="js-example">
View example of the labels pattern
</a></div>

## Accessibility

### How it works

Labels are used to signify status, tags or any other information. The colours have semantic meaning, reflected by the name given in the code example.

Semantic colour can help users recognise and recall meaning more quickly, especially when scanning a view, for example. It’s important that labels still convey the same meaning without colour information.

### Considerations

This component strives to follow [WCAG 2.1 (level AA) guidelines](https://www.w3.org/TR/WCAG21/), and care must be taken to ensure this effort is maintained when the component is implemented across other projects. This section offers advice to that effect:

- Select an appropriately coloured label which makes sense semantically for your use case.
- Ensure you don’t use colour as the only visual means of conveying information or an action - the text within the label should be descriptive enough.

### Resources

Applicable WCAG guidelines:

- [WCAG21 - Use of color](https://www.w3.org/TR/WCAG21/#use-of-color)
- [WCAG21 - Sensory characteristics](https://www.w3.org/TR/WCAG21/#sensory-characteristics)

## Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;
@include vf-p-label;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.
