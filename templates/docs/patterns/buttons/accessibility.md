---
wrapper_template: '_layouts/docs.html'
context:
  title: Buttons | Components
---

## How it works

The button component is used to trigger an action or event - this could be opening or closing a modal, navigating to the next page, or cancelling an action. Rather than adding `role=button` to links, it’s always advisable to use the native HTML button element, as native HTML buttons provide keyboard and focus requirements by default and are best supported by assistive technologies.

## Considerations

This component strives to follow [WCAG 2.2 (level AA) guidelines](https://www.w3.org/TR/WCAG22/), and care must be taken to ensure this effort is maintained when the component is implemented across other projects. This section offers advice to that effect:

- A button, once focussed should be activated by using the `Space` or `Enter` keys.
- The button should have an accurate description. This can be as text in the button, or by using `aria-label` or `aria-labelledby`.
- If there is a description of the button, the button should have an `aria-describedby` which matches the ID of the description.
- After the button is activated ensure the focus is set correctly based on the type of action the button performs. See [W3C WAI-ARIA Authoring Practices Button Design Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/button/) for a list of examples.
- In some contexts, it may be necessary to indicate to the user that a button is in a pressed state, such as when a button opens a contextual menu. This can be done by adding `aria-pressed="true"` to the button with JavaScript when the button is clicked, and removed when necessary.

<div class="embedded-example"><a href="/docs/examples/patterns/buttons/pressed" class="js-example" data-height="270">
View example of the contextual menu pattern
</a></div>

Note: It’s important to use button and link elements accurately. Controls with button-like behaviour (e.g. opening models, submitting forms) should be designed like buttons using the button element, and regular text links (e.g. going to an external page) should be designed like text links using the link element.

## Resources

- [W3C WAI-ARIA Authoring Practices Button Design Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/button/)
- [WAI-ARIA Examples: Button](https://www.w3.org/WAI/ARIA/apg/patterns/button/examples/button/)
