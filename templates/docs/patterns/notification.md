---
wrapper_template: '_layouts/docs.html'
context:
  title: Notification | Components
---

# Notification

{{ class_reference() }}

<hr>

Notifications are used to attract the user's attention. They offer four separate severity levels, and can also be modified for use in different contexts.

## Severity levels

### Information

The information severity should be used to convey an information message.

<div class="embedded-example"><a href="/docs/examples/patterns/notifications/information/" class="js-example">
View example of the information notification pattern
</a></div>

### Caution

The caution severity should be used to convey information that is not critical but the user should be aware of.

<div class="embedded-example"><a href="/docs/examples/patterns/notifications/caution/" class="js-example">
View example of the caution notification pattern
</a></div>

### Negative

The negative severity should be used to convey information that is critical and the user should take action.

<div class="embedded-example"><a href="/docs/examples/patterns/notifications/negative/" class="js-example">
View example of the negative notification pattern
</a></div>

### Positive

The positive severity should be used to convey success or completion.

<div class="embedded-example"><a href="/docs/examples/patterns/notifications/positive/" class="js-example">
View example of the positive notification pattern
</a></div>

## Appearance

### Borderless

In cases where a notification sits inside another component, such as a table cell or a card, it may be useful to remove the outer border and highlight bar.

<div class="embedded-example"><a href="/docs/examples/patterns/notifications/borderless/" class="js-example">
View example of the borderless notification pattern
</a></div>

### Inline

When vertical space is limited, you can use the inline variant.

<div class="embedded-example"><a href="/docs/examples/patterns/notifications/inline/" class="js-example">
View example of the inline notification pattern
</a></div>

## Actions

### Buttons

Notifications can have actions in either button or link form. These will appear below the notification message.

<div class="embedded-example"><a href="/docs/examples/patterns/notifications/action/" class="js-example">
View example of the notification actions.
</a></div>

### Dismissible

Notifications that can be dismissed can include a close button.

<div class="embedded-example"><a href="/docs/examples/patterns/notifications/dismissible/" class="js-example">
View example of the dismissible notification pattern
</a></div>

## Timestamp

For notifications in which recency is important, you can include a section for time.

<div class="embedded-example"><a href="/docs/examples/patterns/notifications/timestamp/" class="js-example">
View example of the time notification pattern
</a></div>

## Class reference

{% include "_class-references/notification.html" %}

## JavaScript functionality

Some features of the notification component may require JavaScript implementation.

If the notification contains a [dismiss button](#dismissible), clicking on it should remove the notification from the view.

Notifications can also have optional [action buttons](#actions), clicking on those should trigger the relevant action and close the notification.

You can use our [Notification React component](#react) for a full-featured implementation that includes any JavaScript functionality.

## Accessibility

### How it works

Notifications are messages used to communicate information and feedback to the user. Changes in content which are not interactive should be marked as live regions which are denoted by the `aria-live` attribute.

When the notification is time sensitive or critical `aria-live= "assertive"`, or its equivalent `role="alert"`, should be used. Regions specified as assertive will be prioritized by assistive technologies and could potentially clear the speech queue of previous updates. For this reason, it should be used sparingly. Alternatively, when the notification is important, but not urgent, `aria-live="polite"` should be used. This will notify the user of updates at the next graceful opportunity, without interrupting the current task.

In dismissible notifications, an `aria-controls` attribute on the close button references the id on the parent div containing the notification. This makes it clear to screen reader users what the close button is targeting.

### Considerations

This component strives to follow WCAG 2.1 (level AA guidelines), and care must be taken to ensure this effort is maintained when the component is implemented across other projects. This section offers advice to that effect:

- Avoid adding both `aria-live="assertive"` and `role="alert"` to maximize compatibility as this causes double speaking issues in `VoiceOver` on iOS.
- Avoid frequent notifications as frequent interruptions may inhibit usability for people with visual and cognitive impairments.
- Place error notifications at the top of the page and use a distinctive heading so that they are easier to identify.
- Provide the user with clear instructions on how to correct errors and and explicitly remind them of any format requirements.
- Avoid creating a time limit, as making the notification disappear automatically can reduce accessibility for users who need longer to interact with the element.
- An event listener should be added to hide notifications upon receiving a click on the close button.
- Unless the alert from the screen reader is meant to break the user’s workflow, it is important that the notification does not affect keyboard focus.
- Notifications should not disappear automatically.

### Resources

- [Accessible Rich Internet Applications (WAI-ARIA) 1.1 : aria-live](https://www.w3.org/TR/2017/REC-wai-aria-1.1-20171214/#aria-live)
- [WAI-ARIA Authoring Practices 1.1: alert](https://www.w3.org/TR/wai-aria-practices-1.1/#alert)
- [User Notifications • Forms • WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/forms/notifications/)
- [Accessible Rich Internet Applications (WAI-ARIA) 1.1: aria-controls](https://www.w3.org/TR/2017/REC-wai-aria-1.1-20171214/#aria-controls)
- [ARIA live regions - Accessibility | MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)
- Applicable WCAG guidelines:
  - [Guideline 2.2.3 - No timing](https://www.w3.org/WAI/WCAG21/quickref/#no-timing)
  - [Guideline 3.2 - Predictable](https://www.w3.org/WAI/WCAG21/quickref/#predictable)
  - [Guideline 3.3 - Input assistance](https://www.w3.org/WAI/WCAG21/quickref/#input-assistance)

## Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-p-notification;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.

## React

You can use notifications in React by installing our react-component library and importing `Notification` component.

[See the documentation for our React `Notification` component](https://canonical-web-and-design.github.io/react-components/?path=/docs/notification--default-story#notification)

## Related components

[The modal component](/docs/patterns/modal) can be used to overlay an area of the screen which can contain a prompt, dialog or interaction.
