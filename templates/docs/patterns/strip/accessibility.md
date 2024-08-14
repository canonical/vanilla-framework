---
wrapper_template: '_layouts/docs.html'
context:
  title: Strip | Components
---

## How it works

A Strip is a full-width content container. They provide visual interest and break up long scrolling pages into sections.

## Considerations

This component strives to follow [WCAG 2.2 (level AA) guidelines](https://www.w3.org/TR/WCAG22/), and care must be taken to ensure this effort is maintained when the component is implemented across other projects. This section offers advice to that effect:

- The starting point of your page should be a well structured and accessible source document. Ensure the document remains in a logical order for screen readers, irrespective of how the content looks visually
- The headings in the Strips should follow the heading hierarchy of the page.
- Make sure the tab order makes sense, and that all appropriate elements are focusable.
- There should be a logical order within the Strip, heading first and related content to follow.
- Headings should briefly and accurately describe the content of the Strip
- Link text must be meaningful and clear.
- Avoid wrapping the entire container in a link, as the entire content of the container will be read out as a link to by the screen reader.
- Image strips should ensure image accessibility is maintained with appropriate descriptive text for relevant images
- If the image is the link, then the alt text of the image should replace the link text Alternatively, add aria-label to the link element wrapping the image

## Resources

[WCAG22 - Non-text Content](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content)
