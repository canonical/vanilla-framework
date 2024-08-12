---
wrapper_template: '_layouts/docs.html'
context:
  title: Heading icon | Components
---

## How it works

The heading icon pattern includes an icon next to the heading to add emphasis. It includes an image element alongside a title wrapped in a `div` for the header, and a paragraph wrapped in an outer `div` for the content which follows.

## Considerations

- The content of the heading should make sense without the icon present, the icon should not convey information on its own.
- The image should always include an `alt` attribute.
- If the image or logo is considered decorative (which is likely in this case), the `alt` attribute’s value should be blank i.e. `alt=""`.
- If the image provides information not otherwise available to users of assistive technology, the value of the `alt` attribute should provide that information in a concise way.
- Avoid using words and phrases like “logo” or “image of"; in most cases the information that needs to be conveyed is, for example, who the logo belongs to or what the image contains, rather than that the element itself is an image.

## Resources

- [WAI-ARIA practices - naming effectively](https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/)
- [WAI tutorials - Images](https://www.w3.org/WAI/tutorials/images/)
- [An alt Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- Applicable WCAG guidelines:
  - [WCAG22 - Non-text Content](https://www.w3.org/WAI/WCAG22/quickref/#non-text-content)
