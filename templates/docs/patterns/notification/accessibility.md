---
wrapper_template: '_layouts/docs.html'
context:
  title: Nofitication | Components
---

## How it works

Notifications are messages used to communicate information and feedback to the user. Changes in content which are not interactive should be marked as live regions which are denoted by the `aria-live` attribute.

When the notification is time sensitive or critical `aria-live= "assertive"`, or its equivalent `role="alert"`, should be used. Regions specified as assertive will be prioritized by assistive technologies and could potentially clear the speech queue of previous updates. For this reason, it should be used sparingly. Alternatively, when the notification is important, but not urgent, `aria-live="polite"` should be used. This will notify the user of updates at the next graceful opportunity, without interrupting the current task.

In dismissible notifications, an `aria-controls` attribute on the close button references the id on the parent div containing the notification. This makes it clear to screen reader users what the close button is targeting.

## Considerations

This component strives to follow WCAG 2.2 (level AA guidelines), and care must be taken to ensure this effort is maintained when the component is implemented across other projects. This section offers advice to that effect:

- Avoid adding both `aria-live="assertive"` and `role="alert"` to maximize compatibility as this causes double speaking issues in `VoiceOver` on iOS.
- Avoid frequent notifications as frequent interruptions may inhibit usability for people with visual and cognitive impairments.
- Place error notifications at the top of the page and use a distinctive heading so that they are easier to identify.
- Provide the user with clear instructions on how to correct errors and and explicitly remind them of any format requirements.
- Avoid creating a time limit, as making the notification disappear automatically can reduce accessibility for users who need longer to interact with the element.
- An event listener should be added to hide notifications upon receiving a click on the close button.
- Unless the alert from the screen reader is meant to break the user’s workflow, it is important that the notification does not affect keyboard focus.
- Notifications should not disappear automatically.

## Resources

- [Accessible Rich Internet Applications (WAI-ARIA) 1.1 : aria-live](https://www.w3.org/TR/2017/REC-wai-aria-1.1-20171214/#aria-live)
- [WAI-ARIA Authoring Practices 1.1: alert](https://www.w3.org/WAI/ARIA/apg/patterns/alert/)
- [User Notifications • Forms • WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/forms/notifications/)
- [Accessible Rich Internet Applications (WAI-ARIA) 1.1: aria-controls](https://www.w3.org/TR/2017/REC-wai-aria-1.1-20171214/#aria-controls)
- [ARIA live regions - Accessibility | MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)
- Applicable WCAG guidelines:
  - [WCAG22 - No Timing](https://www.w3.org/WAI/WCAG22/quickref/#no-timing)
  - [WCAG22 - Predictable](https://www.w3.org/WAI/WCAG22/quickref/#predictable)
  - [WCAG22 - Input Assistance](https://www.w3.org/WAI/WCAG22/quickref/#input-assistance)
