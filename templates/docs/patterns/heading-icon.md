---
collection: patterns
wrapper_template: '_layouts/docs.html'
context:
  title: Heading icon | Components
---

# Heading icon

<hr>

A heading can be emphasised by adding an icon alongside the text.

<div class="embedded-example"><a href="/docs/examples/patterns/heading-icon/heading-icon/" class="js-example">
View example of the pattern heading icons
</a></div>

## Stacked

This variant positions the icon vertically with the text content for an alternate layout.

<div class="embedded-example"><a href="/docs/examples/patterns/heading-icon/heading-icon-stacked/" class="js-example">
View example of the pattern heading icon stacked
</a></div>

## Small

The icon for this component is also available at a smaller size of 32 × 32 pixels rather than our default size of 60 × 60 pixels.

<div class="embedded-example"><a href="/docs/examples/patterns/heading-icon/heading-icon-small/" class="js-example">
View example of the pattern heading icon small
</a></div>

## Accessibility

### How it works

The heading icon pattern includes an icon next to the heading to add emphasis. It includes an image element alongside a title wrapped in a `div` for the header, and a paragraph wrapped in an outer `div` for the content which follows.

### Considerations

- The content of the heading should make sense without the icon present, the icon should not convey information on its own.
- The image should always include an `alt` attribute.
- If the image or logo is considered decorative (which is likely in this case), the `alt` attribute’s value should be blank i.e. `alt=""`.
- If the image provides information not otherwise available to users of assistive technology, the value of the `alt` attribute should provide that information in a concise way.
- Avoid using words and phrases like “logo” or “image of"; in most cases the information that needs to be conveyed is, for example, who the logo belongs to or what the image contains, rather than that the element itself is an image.

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

@include vf-p-heading-icon;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.
