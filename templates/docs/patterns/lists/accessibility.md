---
wrapper_template: '_layouts/docs.html'
context:
  title: Lists | Components
---

## How it works

Lists provide orientation for users by letting them know when a collection of items are related, and whether or not the items are sequential. They also let screen reader users know how many items are in each list, and allow users to jump between lists within the content.

## Considerations

This component strives to follow [WCAG 2.2 (level AA) guidelines](https://www.w3.org/TR/WCAG22/), and care must be taken to ensure this effort is maintained when the component is implemented across other projects. This section offers advice to that effect:

Be sure to use the correct list type for your content:

- Unordered lists (`<ul>`) can be used when the order of the content isn’t relevant.
- Ordered lists (`<ol>`) are sequential, and are enumerated by the browser.

It’s important to make sure that all content which is visibly a list has the correct HTML structure. Avoid making paragraphs look like lists by using bullet symbols or numbers, as these will not be read out as related content. Similarly, avoid using lists for indentation or layout purposes.

## Resources

- [WAI-ARIA practices: Lists](https://www.w3.org/TR/wai-aria-1.1/#list)
- [Web Accessibility Initiatives (WAI) page on the structure of Web content](https://www.w3.org/WAI/tutorials/page-structure/content/#lists)
- Guidelines:
  - [WCAG22 - Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)
