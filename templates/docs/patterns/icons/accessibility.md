---
wrapper_template: '_layouts/docs.html'
context:
  title: Icons | Components
---

## How it works

Icons are used to enhance usability and provide clarity. `<i>` elements are used for our icons, and text should be added unless the icon is purely decorative. This text won’t be displayed visually. e.g.

`<i class="p-icon--chevron-down">This text will not be displayed</i>`

## Considerations

This component strives to follow [WCAG 2.2 (level AA) guidelines](https://www.w3.org/TR/WCAG22/), and care must be taken to ensure this effort is maintained when the component is implemented across other projects. This section offers advice to that effect:

- If the icon is purely decorative with accompanying text, don’t include any text within the `<i>` element.
- If there is no text with the icon, then the text within the `<i>` element must be clear and concise conveying the meaning of the icon.
- Choose well known icons where possible, the more commonly used the icon is, the more likely it is the user will know what it represents.
- Be consistent. The first time users encounter an icon, they learn the meaning or function associated with it. Using that same icon elsewhere or for a different purpose will disorient them.
- If the icon is actionable e.g. a menu icon, make sure it is focusable and it has a meaningful, clear and concise `alt` attribute.
- The colour contrast from the icon to the background should be at least 3:1, as mentioned in the [WCAG techniques](https://www.w3.org/WAI/WCAG22/Techniques/general/G207).

## Resources

- [Are your icons accessible?](https://www.system-concepts.com/insights/are-your-icons-usable-and-accessible/)
- [Keyboard - Accessibility | MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Keyboard)
- Guidelines
  - [1.1.1: Non-text Content](https://www.w3.org/TR/WCAG22/#non-text-content)
  - [WCAG22 - Understanding Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)
