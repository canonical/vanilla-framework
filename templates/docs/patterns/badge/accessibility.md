---
wrapper_template: '_layouts/docs.html'
context:
  title: Badge | Components
---

## How it works

A badge is a visual indicator only for numeric values. The colours have semantic meaning, reflected by the name given in the code example.

Semantic colour can help users recognise and recall meaning more quickly, especially when scanning a view, for example. It’s important that the badge still convey the same meaning without colour information.

## Considerations

This component strives to follow [WCAG 2.2 (level AA) guidelines](https://www.w3.org/TR/WCAG22/), and care must be taken to ensure this effort is maintained when the component is implemented across other projects. This section offers advice to that effect:

- Select an appropriately coloured badge which makes sense semantically for your use case.
- Ensure you don’t use colour as the only visual means of conveying information or an action.
- Use aria-label to provide full context for screen readers. For example, "you have 999+ machines".
- If the badge is used to represent a live status of some value, using role="status" should be considered.

## Resources

Applicable WCAG guidelines:

- [1.3.3: Sensory Characteristics](https://www.w3.org/TR/WCAG22/#sensory-characteristics)
- [1.4.1: Use of Color](https://www.w3.org/TR/WCAG22/#use-of-color)
- [3.1.4: Abbreviations](https://www.w3.org/TR/WCAG22/#abbreviations)
