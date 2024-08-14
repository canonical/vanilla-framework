---
wrapper_template: '_layouts/docs.html'
context:
  title: Card | Components
---

## How it works

Cards are content containers. They are useful for creating a responsive site, and help users scroll through similar content at ease. They are used as a teaser, and contain a link to more content.

## Considerations

This component strives to follow [WCAG 2.2 (level AA) guidelines](https://www.w3.org/TR/WCAG22/), and care must be taken to ensure this effort is maintained when the component is implemented across other projects. This section offers advice to that effect:

- The headings in the cards should follow the heading hierarchy of the page.
- Make sure the tab order makes sense, and that all appropriate elements are focusable.
- There should also be a logical order within the card, heading first and related content to follow.
- Headings should briefly and accurately describe the content of the card
- Link text must be meaningful and clear.
- Avoid wrapping the entire container in a link, as the entire content of the container will be read out as a link by the screen reader.
- Avoid multiple elements linking to the same place. Choose one element in the card to link from.
- If an image is used as a link, then the `alt` text of the image should replace the link text. Alternatively, add `aria-label` to the link element wrapping the image.

## Resources

- [WCAG22 - Non-text Content](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content)
- [What makes an accessible card](https://technica11y.org/what-makes-an-accessible-card)
