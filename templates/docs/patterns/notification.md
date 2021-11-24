---
wrapper_template: '_layouts/docs.html'
context:
  title: Notification | Components
---

# Notification

<hr>

Notifications are used to attract the user's attention. They offer four separate severity levels, and can also be modified for use in different contexts.

## Severity levels

### Information

<div class="p-chip--information">
  <span class="p-chip__value">Updated</span>
</div>

The information severity should be used to convey an information message.

<div class="embedded-example"><a href="/docs/examples/patterns/notifications/information/" class="js-example">
View example of the information notification pattern
</a></div>

### Caution

<div class="p-chip--information">
  <span class="p-chip__value">Updated</span>
</div>

The caution severity should be used to convey information that is not critical but the user should be aware of.

<div class="embedded-example"><a href="/docs/examples/patterns/notifications/caution/" class="js-example">
View example of the caution notification pattern
</a></div>

### Negative

<div class="p-chip--information">
  <span class="p-chip__value">Updated</span>
</div>

The negative severity should be used to convey information that is critical and the user should take action.

<div class="embedded-example"><a href="/docs/examples/patterns/notifications/negative/" class="js-example">
View example of the negative notification pattern
</a></div>

### Positive

<div class="p-chip--information">
  <span class="p-chip__value">Updated</span>
</div>

The positive severity should be used to convey success or completion.

<div class="embedded-example"><a href="/docs/examples/patterns/notifications/positive/" class="js-example">
View example of the positive notification pattern
</a></div>

## Appearance

### Borderless

<div class="p-chip--positive">
  <span class="p-chip__value">New</span>
</div>

In cases where a notification sits inside another component, such as a table cell or a card, it may be useful to remove the outer border and highlight bar.

<div class="embedded-example"><a href="/docs/examples/patterns/notifications/borderless/" class="js-example">
View example of the borderless notification pattern
</a></div>

### Inline

<div class="p-chip--positive">
  <span class="p-chip__value">New</span>
</div>

When vertical space is limited, you can use the inline variant.

<div class="embedded-example"><a href="/docs/examples/patterns/notifications/inline/" class="js-example">
View example of the inline notification pattern
</a></div>

## Actions

### Buttons

<div class="p-chip--positive">
  <span class="p-chip__value">New</span>
</div>

Notifications can have actions in either button or link form. These will appear below the notification message.

<div class="embedded-example"><a href="/docs/examples/patterns/notifications/action/" class="js-example">
View example of the notification actions.
</a></div>

### Dismissible

<div class="p-chip--information is-inline">
  <span class="p-chip__value">Updated</span>
</div>

Notifications that can be dismissed can include a close button.

<div class="embedded-example"><a href="/docs/examples/patterns/notifications/dismissible/" class="js-example">
View example of the dismissible notification pattern
</a></div>

## Timestamp

<div class="p-chip--positive">
  <span class="p-chip__value">New</span>
</div>

For notifications in which recency is important, you can include a section for time.

<div class="embedded-example"><a href="/docs/examples/patterns/notifications/timestamp/" class="js-example">
View example of the time notification pattern
</a></div>

## Accessibility

When adding notifications dynamically, it's important that the content of the notification is announced to users using assistive technology. If the notification is urgent, add `aria-live="assertive"` to the element, which will prompt assistive technology to announce it immediately, or use `aria-live="polite"`, which will cause assistive technology to wait for a pause before announcing the information.

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
