---
wrapper_template: '_layouts/docs.html'
context:
  title: Logo section | Components
---

# Logo section

<hr>

The logo section pattern can be used to showcase a group of related images, such as a group of customer or partner logos.
For best results, ensure that the images have identical dimensions.

In the case of logos, we recommend adjusting scale and position within the bounding box to ensure a well balanced result.

The logo section ensures each logo matches the width of either one or two grid columns, depending on screen width.
For this to work, the logo section needs to be placed inside a fixed width container. For example:

- When you need to span the whole width of the grid, place the logo section within parent container with the class `.u-fixed-width`. (This class matches the overall fixed width of the grid, but doesn't create a css grid context for its children)

<div class="embedded-example"><a href="/docs/examples/patterns/logo-section/logo-section/" class="js-example">
View example of the logo section pattern
</a></div>

- When you need to span a certain number of columns, place the logo section within a parent container with a column class, e.g. `.col-6`, which is a direct child of a parent with class `.row`.

<div class="embedded-example"><a href="/docs/examples/patterns/logo-section/logo-section-in-six-column-parent/" class="js-example">
View example of the logo section pattern inside a six column parent container
</a></div>

## Accessibility

### How it works

The logo section showcases a group of related images or logos. It works by ensuring each image matches the width of either one or two grid columns.

### Considerations

This component strives to follow [WCAG 2.1 (level AA) guidelines](https://www.w3.org/TR/WCAG21/), and care must be taken to ensure this effort is maintained when the component is implemented across other projects. This section offers advice to that effect:

- Images should always contain an `alt` attribute.
- If the image or logo is considered decorative, the `alt` attribute’s value should be blank i.e. `alt=””`.
- If the image provides information not otherwise available to users of assistive technology, the value of the `alt` attribute should provide that information in a concise way.
- Avoid using words and phrases like “logo” or “image of''; in most cases the information that needs to be conveyed is, for example, who the logo belongs to or what the image contains, rather than that the element itself is an image.

### Resources

- [WAI-ARIA practices - naming effectively](https://www.w3.org/TR/wai-aria-practices-1.1/#naming_effectively)
- [WAI tutorials - Images](https://www.w3.org/WAI/tutorials/images/)
- [An alt Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- Applicable WCAG guidelines:
  - [WCAG 2.1 - 1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=111#non-text-content)

## Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-p-logo-section;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.
