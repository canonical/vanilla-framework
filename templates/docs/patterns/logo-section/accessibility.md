---
wrapper_template: '_layouts/docs.html'
context:
  title: Logo section | Components
---

## How it works

The logo section showcases a group of related images or logos. It works by ensuring each image matches the width of either one or two grid columns.

## Considerations

This component strives to follow [WCAG 2.2 (level AA) guidelines](https://www.w3.org/TR/WCAG22/), and care must be taken to ensure this effort is maintained when the component is implemented across other projects. This section offers advice to that effect:

- Use a header that explains why the logos are on the page. It can be as simple as “Our partners” for example.
- Images should always contain an `alt` attribute.
- If the image or logo is considered decorative, the `alt` attribute’s value should be blank i.e. `alt=""`.
- If the image provides information not otherwise available to users of assistive technology, the value of the `alt` attribute should provide that information in a concise way.
- For alt text, avoid using unhelpful words like “logo” or “image of". Instead, explain the purpose of the logo, for example, who the logo belongs to or what the image contains, rather than that the logo itself is an image. For example, instead of “Azure logo” or “picture of the Azure logo”, use “Azure”.

## Resources

- [WAI-ARIA practices - naming effectively](https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/)
- [WAI tutorials - Images](https://www.w3.org/WAI/tutorials/images/)
- [An alt Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- Applicable WCAG guidelines:
  - [WCAG22 - Non-text Content](https://www.w3.org/WAI/WCAG22/quickref/?showtechniques=111#non-text-content)
