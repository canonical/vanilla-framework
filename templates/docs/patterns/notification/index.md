---
wrapper_template: '_layouts/docs.html'
context:
  title: Notification | Components
---

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

{{ class_reference() }}

## JavaScript functionality

Some features of the notification component may require JavaScript implementation.

If the notification contains a [dismiss button](#dismissible), clicking on it should remove the notification from the view.

Notifications can also have optional [action buttons](#actions), clicking on those should trigger the relevant action and close the notification.

You can use our [Notification React component](#react) for a full-featured implementation that includes any JavaScript functionality.

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

[See the documentation for our React `Notification` component](https://canonical.github.io/react-components/?path=/docs/components-notification--docs)

## Related components

[The modal component](/docs/patterns/modal) can be used to overlay an area of the screen which can contain a prompt, dialog or interaction.
