---
wrapper_template: '_layouts/docs.html'
context:
  title: Links | Components
---

## How it works

Links are used as navigational elements and can be used on their own or inline with text. It's possible to use the `Tab` key to navigate to the link, and the `Enter` key activates the link.

## Considerations

This component strives to follow [WCAG 2.2 (level AA) guidelines](https://www.w3.org/TR/WCAG22/), and care must be taken to ensure this effort is maintained when the component is implemented across other projects.

#### Link text

- Avoid using generic link descriptions such as “Read more”, “Learn more”, or “Click here”. Out of context, it isn’t obvious where these links take you. As screen reader users can choose to read link text in isolation.
- Use unique link text where possible. Screen reader and speech recognition software users may have trouble differentiating links that have the same text but different destination or purpose.
- Avoid using anything longer than a full sentence for a link, ideally ten words or fewer.
- Use judgement when linking URLs, think about how these may be read out by a screen reader.

#### Images

- Using images as links should be avoided where possible, but if they are used, the `alt` text should be a replacement for the link text instead of describing the image.

#### Adjacent links

- Having adjacent links to the same place (e.g. header, image and link in text of card) should be avoided. Choose one element, or wrap all the elements together.

#### ARIA attributes

- `aria-describedby` can be used to add some additional information about the link. It will be read out directly after the link text.
- Be aware when using `aria-label` or `aria-labelledby`, the screen reader will skip the link text completely and read out these values only.

Note: It’s important to use button and link elements accurately. Controls with button-like behaviour (e.g. opening models, submitting forms) should be designed like buttons using the button element, and regular text links (e.g. going to an external page) should be designed like text links using the link element.

## Resources

- [WAI-ARIA practices: Links ](https://www.w3.org/WAI/ARIA/apg/patterns/link/)
- [Yale usability & Web Accessibility - Links](https://usability.yale.edu/web-accessibility/articles/links)
- Guidelines:
  - [WCAG22 - Link Purpose (in Context)](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context)
