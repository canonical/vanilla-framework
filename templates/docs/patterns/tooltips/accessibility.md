---
wrapper_template: '_layouts/docs.html'
context:
  title: Tooltips | Components
---

## How it works

A tooltip is text that appears in a small overlay on demand, usually when hovering over the thing it describes. It is hidden by default, and becomes available on hover or focus of the control it describes. It should provide information that isn’t self explanatory or well known.

## Considerations

This component strives to follow [WCAG 2.2 (level AA) guidelines](https://www.w3.org/TR/WCAG22/), and care must be taken to ensure this effort is maintained when the component is implemented across other projects. This section offers advice to that effect:

- Be sure to include the `aria-describedby` attribute with the `id` of the description.
- They should be discoverable, avoid placing them in over a word in a sentence for example.
- Avoid using tooltips to provide instructions or guidance, or any rich information.
- They shouldn’t be used on disabled elements. It should be clear to the user why the button is disabled without the tooltip.

## Resources

- Inclusive Components by Heydon Pickering
- Guidelines
  - [1.4.13: Content on Hover or Focus](https://www.w3.org/TR/WCAG22/#content-on-hover-or-focus)
  - [WCAG22 Techniques - aria](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA1)
  - [WAI-ARIA practices - Tooltip](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/)
